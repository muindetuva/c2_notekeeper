const noteForm = document.querySelector("#note-form");

const noteInput = document.querySelector("#note-input");

const notesContainer = document.querySelector(".view-notes");

let notes = [];

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  console.log(noteInput.value);

  // Add note to our notes array
  notes.push(noteInput.value);

  console.log(notes);

  // Convert notes to a JSON string
  const notesJson = JSON.stringify(notes);

  // Store notes in localstorage
  localStorage.setItem("notes", notesJson);

  // Call function for displaying note
  displayNote(noteInput.value);

  // clear the form
  noteInput.value = "";
});

// Function declaration
const displayNote = (blablabla) => {
  // Create html element for note
  const noteDiv = document.createElement("div");

  // Add CSS classes
  noteDiv.classList.add("note");

  // Add note content
  noteDiv.innerText = blablabla;

  // Add note to the page
  notesContainer.appendChild(noteDiv);
};

// localStorage.setItem("firstItem", "Alfred");

const fetchFromLocalStorage = () => {
  const fetchedNotes = localStorage.getItem("notes");

  console.log(fetchedNotes);

  const notesArray = JSON.parse(fetchedNotes);

  console.log(notesArray);

  notes.push(...notesArray);

  notesArray.forEach(displayNote);
};

fetchFromLocalStorage();
