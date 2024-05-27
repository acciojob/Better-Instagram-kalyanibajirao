// Get all image boxes
const imageBoxes = document.querySelectorAll('.image');

let draggedItem = null;

// Add dragstart event listener to each image box
imageBoxes.forEach((box) => {
    box.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
    });

    // Prevent default behavior during dragover
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    // Swap background images when dropped
    box.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedItem && draggedItem !== box) {
            const tempImage = box.style.backgroundImage;
            box.style.backgroundImage = draggedItem.style.backgroundImage;
            draggedItem.style.backgroundImage = tempImage;
        }
    });
});
