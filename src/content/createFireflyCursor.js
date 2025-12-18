export const createFireflyCursor = () => {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div id="fireflyCursor"></div>`
  );

  const isItOptionRender = document.querySelector("#firefly-cursor-root");

  const fireflyCursor = document.querySelector(`#fireflyCursor`);

  if (isItOptionRender) {
    fireflyCursor.classList.add("itIsOptionRender");
  }

  return fireflyCursor;
};
