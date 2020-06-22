// https://grrr.tech/posts/create-dom-node-from-html-string/

const hasSupport = 'content' in document.createElement('template');

export const createElement = (str) => {
  if (hasSupport) {
    const template = document.createElement('template');
    template.innerHTML = str;
    return template.content.firstElementChild;
  }

  const template = document.createElement('div');
  template.innerHTML = str;
  return template.firstElementChild;
};
