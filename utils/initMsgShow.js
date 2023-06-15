import { loadingState } from "./loadingState";
import { resetLoading } from "./resetLoading";
import { typeTextByChar } from "./typeTextByChar";

// Get the necessary DOM elements
const movieBossText = document.getElementById("movie-boss-text"); // Output text container

export function initMsgShow() {
  loadingState();
  // Initial message
  typeTextByChar(
    "Give me a one-sentence concept and I'll give you an eye-catching title, a synopsis the studios will love, a movie poster... AND choose the cast!",
    movieBossText,
    0,
    resetLoading
  );
}
