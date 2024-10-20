const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

let currentAudio = null; 

function playAudio(src) {
    
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0; 
        currentAudio = null; 
    } else {
       
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(src);
        currentAudio.play();
    }
}
