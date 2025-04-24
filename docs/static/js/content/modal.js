async function configureModals(modalData) {
    const projectTiles = document.querySelectorAll('.tile');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    // const modalMainImage = document.getElementById('modal-main-image');
    const prevImageBtn = document.getElementById('prev-image');
    const nextImageBtn = document.getElementById('next-image');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const modalImageGallery = document.getElementById('modal-image-gallery');
    const imgs = {};
    let currentProject = "";

    // class tag to disable body scrolling when modal is open
    const body = document.body;
    body.classList.add('scroll');

    // create img elements for all images first
    try {
        projectTiles.forEach(tile => {
            const title = tile.getAttribute('data-title');
            const project = modalData[title];

            imgs[title] = {
                "currIndex": 0,
                "imgTags": 
                    project.images.map(src => {
                        const img = document.createElement('img');
                        img.src = src;
                        img.classList.add("modal-main-image");
                        // img.classList.add("fade");
                        img.loading = "lazy";
                        img.style.display = 'none';
                        return img;
                    })
            }
        });
    }
    catch (error) {
        window.alert('Modal image data corrupted:', error);
    }

    // fill in modal contents, then assign actions on modal open
    try {
        projectTiles.forEach(tile => {
            tile.addEventListener('click', () => {
                const title = tile.getAttribute('data-title');
                const project = modalData[title];
                currentProject = title;

                // disable background scoll when modal is open
                body.classList.toggle('scroll');

                if (project) {
                    // load images
                    if (imgs[title]["imgTags"].length === 0) {
                        // hide img container if project has no images
                        document.querySelector('.modal-main-image-container').style.display = 'none';
                    } else {
                        // set img container visible
                        document.querySelector('.modal-main-image-container').style.display = 'block';
                        // clear img container first of leftovers
                        modalImageGallery.innerHTML = "";
                        // add all the img elements for the current project to the div container
                        imgs[title]["imgTags"].forEach(img => {
                            modalImageGallery.appendChild(img);
                        });
                        // set the current index img element visible
                        imgs[title]["imgTags"][imgs[title]["currIndex"]].style.display = 'block';
                    }

                    // load text
                    modalTitle.innerHTML = project.title;
                    const projectContent = project.content;
                    modalBody.innerHTML = projectContent.map(item => {
                        if (item.type === "detail") {
                            return `<div class="detail-tile"><h4>${item.detailTitle}</h4><ul>${item.detailText.map(text => `<li>${text}</li>`).join('')}</ul></div>`;
                        } else if (item.type === "tech") {
                            const techSpans = Object.values(item.detailText).map(tech => `<span class="technology-item">${tech}</span>`);
                            return `<div class="detail-tile"><h4>${item.detailTitle}</h4><p>${techSpans.join('')}</p></div>`;
                        } else {
                            return `<div class="detail-tile"><h4>${item.detailTitle}</h4><p>${item.detailText}</p></div>`;
                        }
                    }).join('');

                    // set modal visible
                    modal.style.display = 'block';
                }
            });
        });
    }
    catch (error) {
        window.alert('Modal data corrupted:', error);
    }

    // prevImageBtn.addEventListener('click', () => {
    //     // compute new index
    //     currImgIndex = imgs[currentProject]["currIndex"]
    //     projImgLen = imgs[currentProject]["imgTags"].length
    //     newImgIndex = (currImgIndex - 1 + projImgLen) % projImgLen;

    //     // hide old img
    //     imgs[currentProject]["imgTags"][currImgIndex].style.display = 'none';
    //     // show new img
    //     imgs[currentProject]["imgTags"][newImgIndex].style.display = 'block';        
    //     // update stored index
    //     imgs[currentProject]["currIndex"] = newImgIndex
    // });

    prevImageBtn.addEventListener('click', () => {
        // disable button to prevent repeated clicks while sliding animation is playing
        prevImageBtn.disabled = true;
        nextImageBtn.disabled = true;

        // compute new index
        currImgIndex = imgs[currentProject]["currIndex"]
        projImgLen = imgs[currentProject]["imgTags"].length
        newImgIndex = (currImgIndex - 1 + projImgLen) % projImgLen;        

        // updates image, add animations, then re-enable buttons
        handleGalleryBtns(imgs, modalImageGallery, currentProject, currImgIndex, newImgIndex, prevImageBtn, nextImageBtn, 'prev');
    });

    nextImageBtn.addEventListener('click', () => {
        // disable button to prevent repeated clicks while sliding animation is playing
        prevImageBtn.disabled = true;
        nextImageBtn.disabled = true;

        // compute new index
        currImgIndex = imgs[currentProject]["currIndex"]
        projImgLen = imgs[currentProject]["imgTags"].length
        newImgIndex = (currImgIndex + 1) % projImgLen;

        // updates image, add animations, then re-enable buttons
        handleGalleryBtns(imgs, modalImageGallery, currentProject, currImgIndex, newImgIndex, prevImageBtn, nextImageBtn, 'next');
    });

    modalClose.addEventListener('click', () => {
        modal.classList.add('fade-out');
        body.classList.toggle('scroll');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('fade-out');
            
        }, 300); // Match the fade-out duration
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.classList.add('fade-out');
            body.classList.toggle('scroll');
            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.remove('fade-out');
            }, 300); // Match the fade-out duration
        }
    });
}

// slide in and out animations for the modal image view. re-enables prev and next image buttons in modal.
async function handleGalleryBtns(imgs, modalImageGallery, currentProject, currImgIndex, newImgIndex, prevImageBtn, nextImageBtn, action) {
    // set animation to be used for image view
    let animationType = '';
    if (action === 'next') {
        animationType = 'slide-left';
    } else if (action === 'prev') {
        animationType = 'slide-right';
    } else {
        console.log("Wrong animation type in modal gallery buttons.");
        return;
    }

    // move the new img after the current img. handles end of list animation error.
    currImg = imgs[currentProject]["imgTags"][currImgIndex];
    nextImg = imgs[currentProject]["imgTags"][newImgIndex];
    if (action === 'next') {
        modalImageGallery.insertBefore(currImg, nextImg);
    } else {
        modalImageGallery.insertBefore(nextImg, currImg);
    }

    // update stored index
    imgs[currentProject]["currIndex"] = newImgIndex

    // assign animation classes. start playing animations.
    currImg.classList.add(animationType);
    nextImg.classList.add(animationType);

    // show new img
    nextImg.style.display = 'block';

    setTimeout(() => {
        // hide old img
        currImg.style.display = 'none';

        // remove animation classes
        currImg.classList.remove(animationType);
        nextImg.classList.remove(animationType);

        // re-enable button
        prevImageBtn.disabled = false;
        nextImageBtn.disabled = false;
    }, 350);
}