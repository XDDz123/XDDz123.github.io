async function animateHeaderTyping(text) {
    const headerText = document.getElementsByClassName("header-text")[0];
    const blinkCursor = document.getElementsByClassName("blink")[0];

    let i = 0;
    const speed = 100;

    const typeWriter = () => {
        if (i < text.length) {
            headerText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    };

    const hideBlinkCursor = () => {
        blinkCursor.style.display = "none";
    };

    localStorage.setItem('visited', 'true');
    setTimeout(typeWriter, 1200)

    setTimeout(hideBlinkCursor, 6400);
}

function startBlinker() {
    const blinkCursor = document.getElementsByClassName("blink")[0];
    blinkCursor.style.display = "inline";
}

function clearHeaderText() {
    const headerText = document.getElementsByClassName("header-text")[0];
    const text = headerText.innerHTML;
    headerText.innerHTML = "";
    return text;
}

async function animateHeader() {
    // play header animation if it is the first visit
    const isFirstVisit = !localStorage.getItem('visited');
    if (isFirstVisit) {
        // clear injected header text and fetch a copy to play the animation
        const text = clearHeaderText();
        // set the caret blinker visible first before the fade in animation completes
        startBlinker();
        setTimeout(() => {
            // Animate header text with typing animation
            animateHeaderTyping(text);
        }, 300); // matches the page fade in animation duration
    }
}