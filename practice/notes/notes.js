let btn = document.getElementById("createNoteBtn");
let container = document.getElementById("notesContainer");

btn.addEventListener('click', () => {
    // Create a wrapper div for each note (textarea + delete button)
    let noteWrapper = document.createElement('div');
    noteWrapper.className = 'note-wrapper';  // Styling the note container

    // Create the textarea element
    let textArea = document.createElement('textarea');
    textArea.placeholder = "Enter your note here...";
    noteWrapper.appendChild(textArea);  // Append textarea to the note wrapper

    // Create the delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '🗑️';  // Set the emoji for delete icon
    noteWrapper.appendChild(deleteBtn);  // Append delete button to the note wrapper

    // Append the wrapper div to the container
    container.appendChild(noteWrapper);

    // Add event listener to delete the note when the delete button is clicked
    deleteBtn.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent any default behavior (like form submission)
        console.log("Delete button clicked"); // Log when delete button is clicked
        noteWrapper.remove();    // Remove the noteWrapper (the entire note with textarea and button)
        console.log("noteWrapper removed", noteWrapper); // Log when the noteWrapper is removed
    });
});
