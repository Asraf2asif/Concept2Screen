import { isInputElement, isTextAreaElement, isButtonElement } from "./isCheck";

/**
 * Toggles the disabled state and appearance of a button based on the input value.
 * @param {HTMLInputElement|HTMLTextAreaElement} input - The input or textarea element.
 * @param {HTMLButtonElement} btn - The button element.
 */
export default function toggleButton(input, btn) {
  // Check if the input is an input or textarea element
  if (!isInputElement(input) && !isTextAreaElement(input)) {
    console.error(
      "Invalid input: input must be an input, textarea, or button element."
    );
    return;
  }

  // Check if the btn is a button element
  if (!isButtonElement(btn)) {
    console.error("Invalid btn: btn must be a button element.");
    return;
  }

  // Check if the input value is empty or contains only whitespace
  if (input.value.trim() === "") {
    btn.disabled = true; // Disable the send button
    btn.classList.add("disabled"); // Add disabled class to the send button
  } else {
    btn.disabled = false; // Enable the send button
    btn.classList.remove("disabled"); // Remove disabled class from the send button
  }
}
