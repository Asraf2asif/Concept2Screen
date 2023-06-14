import bulkHideDisplay from "./bulkHideDisplay";
import bulkDisableElem from "./bulkDisableElem";

/**
 * Shows the loading state by displaying the loading image and disabling the input and button elements.
 * @param {HTMLImageElement} loadingImg - The loading image element.
 * @param {HTMLInputElement|HTMLTextAreaElement} input - The input or textarea element.
 * @param {HTMLButtonElement} btn - The button element.
 */
export default function loadingState(loadingImg, input, btn) {
  // Check if the loadingImg parameter is an <img> element
  if (!isImg(loadingImg)) {
    console.error("Invalid loadingImg: loadingImg must be an <img> element.");
    return;
  }

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

  // Show the loading image
  loadingImg.style.display = "inline";

  // Hide the input and button elements
  bulkHideDisplay(input, btn);

  // Disable the input and button elements
  bulkDisableElem(input, btn);
}
