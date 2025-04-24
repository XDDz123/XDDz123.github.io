function toggleLoader() {
    const isFirstVisit = !localStorage.getItem('visited');
    // check if first visit. loader only visible on first visit.
    if (isFirstVisit) {
        document.querySelector('.loader-container').style.display = 'flex'; 
    }
}

function handleLoaderEvents() {
    const isFirstVisit = !localStorage.getItem('visited');
    // check if first visit. else skip the loading screen and some animations
    if (isFirstVisit) {
        // document.querySelector('.loader-container').style.display = 'flex'; 
        document.querySelector('.loader-container').classList.add('fade');
        setTimeout(() => {
            document.querySelector('.page').classList.add('appear'); 
            document.querySelector('.page').style.display = 'block';  
            document.querySelector('.loader-container').style.display = 'none'; 

            // animate the header text. see component/header.js
            animateHeader();
        }, 300);
    } else {
        // document.querySelector('.loader-container').style.display = 'none'; 
        // setTimeout(() => {
        document.querySelector('.page').classList.add('appear'); 
        document.querySelector('.page').style.display = 'block';  
        // }, 300);
    }
}