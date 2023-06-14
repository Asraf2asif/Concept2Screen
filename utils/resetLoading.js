import bulkInlineDisplay from "./bulkInlineDisplay";
import bulkEnableElem from "./bulkEnableElem";
import { isInputElement, isTextAreaElement, isButtonElement, isImg } from "./isCheck";

/**
 * Resets the loading state by hiding the loading image and enabling the input and button elements.
 * @param {HTMLImageElement} loadingImg - The loading image element.
 * @param {HTMLInputElement|HTMLTextAreaElement} input - The input or textarea element.
 * @param {HTMLButtonElement} btn - The button element.
 */
export default function resetLoading(loadingImg, input, btn) {
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

  // Hide the loading image
  loadingImg.style.display = "none";

  // Show the input and button elements
  bulkInlineDisplay(input, btn);

  // Enable the input and button elements
  bulkEnableElem(input, btn);
}
