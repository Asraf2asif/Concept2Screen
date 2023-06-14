// Initialy select textarea input
export default function onloadSelectInput(input){
  document.addEventListener("DOMContentLoaded", () => {
    input.select();
  });
}