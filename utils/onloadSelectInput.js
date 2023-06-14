import { isInputElement, isTextAreaElement } from "./isCheck";

/**
 * Selects the content of the input element on page load.
 * @param {HTMLInputElement|HTMLTextAreaElement} input - The input or textarea element to be selected.
 */
export default function onloadSelectInput(input) {
  // Check if the input is an input or textarea element
  if (!isInputElement(input) && !isTextAreaElement(input)) {
    console.error(
      "Invalid input: input must be an input, textarea, or button element."
    );
    return;
  }
  // Wait for the DOM content to be loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Select the content of the input element
    input.select();
  });
}
