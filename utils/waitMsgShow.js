import { data } from "../data";
import { loadingState } from "./loadingState";
import { resetLoading } from "./resetLoading";
import { typeTextByChar } from "./typeTextByChar";
import { fetchBotReply } from "./fetchBotReply";

// Get the necessary DOM elements
const setupTextarea = document.getElementById("setup-textarea"); // Textarea input
const movieBossText = document.getElementById("movie-boss-text"); // Output text container

export async function waitMsgShow() {
  loadingState();

  const { initMsgData } = data;
  
  // Function to fetch init bot message
  const initMsg = await fetchBotReply({
    dataArray: initMsgData,
    resType: "message",
    outline: setupTextarea.value,
    outputTextElement: movieBossText,
  });
  typeTextByChar(initMsg, movieBossText); // Update movieBossText
}
