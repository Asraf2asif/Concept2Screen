import { data } from "../../data";
import { loadingState } from "../state/loadingState";
import { resetLoading } from "../state/resetLoading";
import { typeTextByChar } from "../ui/typeTextByChar";
import { fetchBotReply } from "../fetch/fetchBotReply";

// Get the necessary DOM elements
const setupTextarea = document.getElementById("setup-textarea"); // Textarea input
const outputTitle = document.getElementById("output-title"); // Output Text
const outputText = document.getElementById("output-text"); // Output Text
const inputText = document.getElementById("input-text"); // Input Text
const outputContainer = document.getElementById("output-container"); // Output Text Container
const inputContainer = document.getElementById("input-container"); // Output Text Container
const movieBossText = document.getElementById("movie-boss-text"); // Output text container

export async function synopsisShow() {
  const { synopsisData } = data;
  // Function to fetch init bot message
  const synopsis = await fetchBotReply({
    dataArray: synopsisData,
    resType: "synopsis",
    outline: setupTextarea.value,
    max_tokens: 700,
    outputTextElement: outputText,
    outputContainerElement: outputContainer,
  });

  const movieTitle = await fetchBotReply({
    prompt: `Generate a catchy movie title for this synopsis\n###${synopsis}`,
    max_tokens: 700,
    outputTextElement: outputTitle,
    outputContainerElement: outputContainer,
  });

  // Display the output container
  inputContainer.style.display = "block";
  inputText.textContent = setupTextarea.value;

  // Display the output container
  outputContainer.style.display = "block";

  typeTextByChar(movieTitle, outputTitle); // Update output title
  typeTextByChar(synopsis, outputText, null, () => {
    resetLoading();
    typeTextByChar("Use your AI Generated movie with title, cast & synopsis", movieBossText);
    setupTextarea.value = "";
    setupTextarea.select();
  }); // Update output text
}
