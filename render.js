/**
 * getRenderFunc
 *
 * Initializes the HTMLElement into which the text will be rendered
 * and returns the function that is directly responsible for rendering
 *
 * @param {HTMLElement} parentNode
 * @param {String} defaultStyle
 * @returns callable render function
 *
 * @example ↴
 * const renderFunc = getRenderFunc();
 * renderFunc(` ■ ■ ■ \n■ ■ ■ ■\n ■ ■ ■ `);
 *
 * // <= OUTPUT
 *  ■ ■ ■
 * ■ ■ ■ ■
 *  ■ ■ ■
 */
function getRenderFunc(
  parentNode = document.body,
  defaultStyle = "font-size: 18px; line-height: 0.5;"
) {
  const defaultElement = "pre";
  const node = document.createElement(defaultElement);
  if (!(parentNode instanceof HTMLElement)) {
    throw new Error("invalid argument");
  }
  node.setAttribute("style", defaultStyle);
  parentNode.appendChild(node);
  return (text) => (node.innerHTML = text);
}
