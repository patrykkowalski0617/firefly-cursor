export const createFireflyCursor = () => {
  const isItUserSettingPage = Boolean(document.querySelector('.fireflyCursorUserSettings'));

  const insertionElement = isItUserSettingPage
    ? document.querySelector('.cursorWrapper')
    : document.body;

  insertionElement.insertAdjacentHTML(
    'afterbegin',
    `<div class="fireflyCursor ${isItUserSettingPage ? 'userSettingsCursor' : ''}"></div>`
  );

  return { fireflyCursor: document.querySelector(`.fireflyCursor`), isItUserSettingPage };
};
