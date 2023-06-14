export default async function fetching(){
  initMsgShow();

  const { synopsisData } = data;
  // Function to fetch synopsis
  const synopsis = fetchBotReply({
    dataArray: synopsisData,
    resType: "synopsis",
    outline: setupTextarea.value,
    max_tokens: 700,
    outputTextElement: outputText,
    outputContainerElement: outputContainer,
  });

  const movieTitle = fetchBotReply({
    prompt: `Generate a catchy movie title for this synopsis\n###${synopsis}`,
    max_tokens: 700,
    outputTextElement: outputTitle,
    outputContainerElement: outputContainer,
  });

  typeTextByWord(movieTitle, outputTitle); // Update output title

    typeTextByWord(synopsis, outputText); // Update output text

    resetLoading(loadingImg,bulkInlineDisplay,setupTextarea, sendBtn);
}