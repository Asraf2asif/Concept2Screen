import bulkHideDisplay from "./bulkHideDisplay";
import bulkDisableElem from "./bulkDisableElem";
// Function to show loading state
export default function loadingState(loadingImg, setupTextarea, sendBtn) {
  // Show loading image and hide textarea and button
  loadingImg.style.display = "inline";
  bulkHideDisplay(setupTextarea, sendBtn);
  bulkDisableElem(setupTextarea, sendBtn);
}