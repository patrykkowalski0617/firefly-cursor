export const createFireflyCursor = () => {
  document.body.insertAdjacentHTML('afterbegin', `<div class="fireflyCursor"></div>`);

  return document.querySelector(`.fireflyCursor`);
};
