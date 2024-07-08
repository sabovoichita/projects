console.log("welcome!");

function $(selector) {
  return document.querySelector(selector);
}

function createHeader() {
  console.log("creating header");
  return `<h1>Voichita's Projects</h1>`;
}

function createContent() {
  console.log("creating content");
  return `<div>
  <h2>Voichita's Main Projects</h2>
  </div>
  `;
}

function createFooter() {
  console.log("creating footer");
  return `<h3>Voichita's Footer Area</h3>`;
}

function insertContent() {
  console.log("insert content");
  $("body").innerHTML = createHeader() + createContent() + createFooter();
}

function initEvents() {
  console.log("init Events");
  insertContent();
}

initEvents();
