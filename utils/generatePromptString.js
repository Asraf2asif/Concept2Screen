// Function to generate the prompt string
export default function generatePromptString(dataArray, resType, outline) {
  let promptStr = `${dataArray[0].command}\n`;
  for (let i = 1; i < dataArray.length; i++) {
    const outlineSample = dataArray[i]["outline"];
    const resTypeSample = dataArray[i][resType];
    promptStr += `###\noutline: ${outlineSample}\n${resType}: ${resTypeSample}\n`;
  }
  promptStr += `###\noutline: ${outline}\n${resType}: `;

  return promptStr;
}