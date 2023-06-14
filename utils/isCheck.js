export function isText(element) {
  return typeof element === 'string' || element instanceof String;
}

export function isInputElement(element) {
  return isHtmlElement(element) && element.tagName.toLowerCase() === 'input';
}

export function isTextAreaElement(element) {
  return isHtmlElement(element) && element.tagName.toLowerCase() === 'textarea';
}

export function isButtonElement(element) {
  return isHtmlElement(element) && (
    element.tagName.toLowerCase() === 'button' || 
    (element.tagName.toLowerCase() === 'input' && element.type.toLowerCase() === 'button'));
}

export function isHtmlElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;  
}
