import { isString, isHtmlElement, isEmptyString } from "./isCheck";

/**
 * Types the given text word by word into the specified HTML element.
 * @param {string} text - The text to be typed.
 * @param {HTMLElement} element - The target HTML element where the text will be typed.
 * @param {number} speed - The typing speed in milliseconds (optional, default: 100).
 */
export default function typeTextByWord(text = "", element, speed = 100) {
  // Check if the text parameter is a non-empty string
  if (!isString(text) || isEmptyString(text)) {
    console.error("Invalid input: text must be a non-empty string.");
    return;
  }

  // Check if the element parameter is a valid HTML element
  if (!isHtmlElement(element)) {
    console.error("Invalid element: element must be a valid HTML element.");
    return;
  }

  // Split the text into words
  const words = text !== "" ? text.split(" ") : "";
  let index = 0;

  // Start typing word by word at the specified speed
  const interval = setInterval(() => {
    if (index < words.length) {
      element.textContent += words[index] + " ";
      index++;
    } else {
      // Finish typing when all words are typed
      clearInterval(interval);
    }
  }, speed);
}
