import { isArray, isEmptyArray, isString, isEmptyString } from "./isCheck";

/**
 * Generates the prompt string for few-shot learning.
 * @param {Array} dataArray - The array of data samples.
 * @param {string} resType - The response type to include in the prompt.
 * @param {string} outline - The outline string to include in the prompt.
 * @returns {string} - The generated prompt string.
 */
export default function fewShotPromptGen(dataArray, resType, outline) {

  // Check if the dataArray parameter is an array and not empty
  if (!isArray(dataArray) || isEmptyArray(dataArray)) {
    console.error("Invalid input: dataArray must be a non-empty array.");
    return;
  }

  // Check if the resType parameter is a non-empty string
  if (!isString(resType) || isEmptyString(resType)) {
    console.error("Invalid input: resType must be a non-empty string.");
    return;
  }

  // Check if the outline parameter is a non-empty string
  if (!isString(outline) || isEmptyString(outline)) {
    console.error("Invalid input: outline must be a non-empty string.");
    return;
  }
  
  // Check if the command property exists in the first data sample
  if (!dataArray[0].command) {
    console.error("Not found command property in dataArray.");
    return;
  }

  let promptStr = `${dataArray[0].command}\n`;

  for (let i = 1; i < dataArray.length; i++) {
    const outlineSample = dataArray[i]["outline"];

    // Check if the resType property exists in the current data sample
    if (!dataArray[i][resType]) {
      console.error(`Not found ${resType} property in dataArray[${i}].`);
      return;
    }

    const resTypeSample = dataArray[i][resType];
    promptStr += `###\noutline: ${outlineSample}\n${resType}: ${resTypeSample}\n`;
  }

  promptStr += `###\noutline: ${outline}\n${resType}: `;

  return promptStr;
}
