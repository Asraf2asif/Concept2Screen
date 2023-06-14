export default function initMsgShow() {
  const { initMsgData } = data;
  // Function to fetch init bot message
  const initMsg = fetchBotReply({
    dataArray: initMsgData,
    resType: "message",
    outline: setupTextarea.value,
    showResAfter: resetLoading,
    outputTextElement: movieBossText,
  });
  typeTextByWord(initMsg, movieBossText);
  setupTextarea.select();
}