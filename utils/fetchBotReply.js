// Function to fetch bot reply
export default async function fetchBotReply({
  dataArray = [],
  resType = "",
  outline = "",
  prompt = null,
  max_tokens = 100,
  outputTextElement,
  outputContainerElement = null,
}) {
  // Send request to API
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt
        ? prompt
        : generatePromptString(dataArray, resType, outline), // Construct the prompt string
      temperature: 1,
      max_tokens: max_tokens,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const { choices } = response.data;
    const respondedText = choices[0].text.trim();

    return respondedText;
  } catch (error) {
    if (outputContainerElement) {
      outputContainerElement.style.display = "block";
    }
    typeTextByWord(
      "An error occurred while fetching the bot reply.",
      outputTextElement
    );
    console.error(error); // Log any errors to the console
  }
}