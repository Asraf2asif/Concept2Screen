import { OPENAI_API_KEY } from "./env.js";
import openai from "https://cdn.jsdelivr.net/npm/openai@3.2.1/+esm";

const { Configuration, OpenAIApi } = openai;
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openaiApi = new OpenAIApi(configuration);

const setupTextarea = document.getElementById("setup-textarea");
const setupInputContainer = document.getElementById("setup-input-container");
const movieBossText = document.getElementById("movie-boss-text");

document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`;
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`;
    fetchBotReply();
  }
});

async function fetchBotReply() {
  const response = await openaiApi
    .createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      temperature: 0,
      max_tokens: 7,
    })
  movieBossText.innerText = response.choices[0].text.trim();
}
