// Function to bulk update display property to "none"
export default function bulkHideDisplay(...elements) {
  elements.forEach((element) => {
    element.style.display = "none";
  });
}