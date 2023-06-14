import bulkInlineDisplay from "./bulkInlineDisplay";
import bulkEnableElem from "./bulkEnableElem";
// Function to reset loading state
export default function resetLoading(loadingImg, setupTextarea, sendBtn) {
  // Hide loading image and show textarea and button
  loadingImg.style.display = "none";
  bulkInlineDisplay(setupTextarea, sendBtn);
  bulkEnableElem(setupTextarea, sendBtn);
}