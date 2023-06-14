// Function to bulk update display property to "none"
export default function bulkEnableElem(...elements) {
  elements.forEach((element) => {
    elements.disabled = false;
  });
}