import { Configuration, OpenAIApi } from "openai";
import { data } from "./data";
import {
  typeTextByWord,
  fetchBotReply,
  fetching,
  generatePromptString,
  initMsgShow,
  loadingState,
  onloadSelectInput,
  resetLoading,
  toggleButton,
} from "./utils";

// Get the necessary DOM elements
const setupTextarea = document.getElementById("setup-textarea"); // Textarea input
const setupInputContainer = document.getElementById("setup-input-container"); // Container for input
const movieBossText = document.getElementById("movie-boss-text"); // Output text container
const sendBtn = document.getElementById("send-btn"); // Send button
const loadingImg = document.getElementById("loading"); // Loading image
const outputTitle = document.getElementById("output-title"); // Output Text
const outputText = document.getElementById("output-text"); // Output Text
const outputContainer = document.getElementById("output-container"); // Output Text Container

loadingState(loadingImg, setupTextarea, sendBtn);
// Initial message
typeTextByWord(
  "Give me a one-sentence concept and I'll give you an eye-catching title, a synopsis the studios will love, a movie poster... AND choose the cast!",
  movieBossText
);
resetLoading(loadingImg, bulkInlineDisplay, setupTextarea, sendBtn);

onloadSelectInput(setupTextarea)

// OpenAi config
const apikey = import.meta.env.VITE_OPENAI_API_KEY;
const configuration = new Configuration({
  apikey: apikey,
});
configuration.baseOptions.headers["Authorization"] = `Bearer ${apikey}`;
const openai = new OpenAIApi(configuration);

// Add event listener for textarea input
setupTextarea.addEventListener("input", () => {
  toggleButton(setupTextarea, sendBtn);
});

// Add event listener for textarea keydown
setupTextarea.addEventListener("keydown", (event) => {
  // Check if Enter key is pressed without Shift key
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault(); // Prevent default Enter key behavior
    sendBtn.click(); // Trigger send button click
  }
});

// Add event listener for send button click
sendBtn.addEventListener("click", () => {
  if (setupTextarea.value) {
    loadingState(loadingImg, bulkNoneDisplay, setupTextarea, sendBtn);

    fetching();
  } else {
    typeTextByWord("Please provide some concept...", movieBossText);
  }
});
