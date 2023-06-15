import { data } from "../data";
import { loadingState } from "./loadingState";
import { resetLoading } from "./resetLoading";
import { typeTextByChar } from "./typeTextByChar";
import { fetchBotReply } from "./fetchBotReply";

// Get the necessary DOM elements
const setupTextarea = document.getElementById("setup-textarea"); // Textarea input
const outputTitle = document.getElementById("output-title"); // Output Text
const outputText = document.getElementById("output-text"); // Output Text
const outputContainer = document.getElementById("output-container"); // Output Text Container

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
  outputContainer.style.display = "block";

  typeTextByChar(movieTitle, outputTitle); // Update output title
  typeTextByChar(synopsis, outputText, null, () => {
    resetLoading();
    setupTextarea.value = "";
    setupTextarea.select();
    // i want that my ai generated movie concept app give user a confirmation or end indicator and that should be visually appalling and professional and satisfactory
    // ar 2 ta openai account kula
  }); // Update output text
}
