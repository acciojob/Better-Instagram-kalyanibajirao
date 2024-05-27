//your code here
const imageBoxes = document.querySelectorAll('.image-box');

let draggedItem = null;

imageBoxes.forEach((box) => {
    box.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
    });

    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedItem && draggedItem !== box) {
            // Swap background images
            const tempImage = box.style.backgroundImage;
            box.style.backgroundImage = draggedItem.style.backgroundImage;
            draggedItem.style.backgroundImage = tempImage;
        }
    });
});