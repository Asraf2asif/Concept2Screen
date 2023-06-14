// Function to bulk update display property to "none"
export default function bulkDisableElem(...elements) {
  elements.forEach((element) => {
    elements.disabled = true;
  });
}