import { waitMsgShow } from "./waitMsgShow";
import { synopsisShow } from "./synopsisShow";
import { typeTextByChar } from "./typeTextByChar";

// Get the necessary DOM elements
const setupTextarea = document.getElementById("setup-textarea"); // Textarea input
const movieBossText = document.getElementById("movie-boss-text"); // Output text container

/**
 * Handles the click event of the send button.
 * If the textarea has a value, it waits for the message to be shown and then displays the synopsis.
 * Otherwise, it displays a message asking for a concept.
 */
async function handleSendBtnClick() {
  if (setupTextarea.value) {
    await waitMsgShow(); // Wait for the message to be shown
    await synopsisShow(); // Display the synopsis
  } else {
    typeTextByChar("Please provide some concept...", movieBossText); // Display a message asking for a concept
  }
}
