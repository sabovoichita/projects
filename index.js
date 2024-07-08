console.log("welcome!");

function $(selector) {
  return document.querySelector(selector);
}

function createHeader() {
  console.log("creating header");
  return `
  <div class = "header">
    <div class = "header-img">
       <img src="images/selfie.jpg" alt="selfie" />
    </div>
    <div class = "header-info">
        <h1>Voichita's Projects</h1>
    </div>
  </div>`;
}

function createContent() {
  console.log("creating content");
  return `
   <div class="contents"> 
    </div>
  `;
}

function loadProjects() {
  //   console.log("in the loadProjects function");
  fetch("projects.json").then((r) => {
    r.json().then((projects) => {
      //   console.log("projects %o", projects);
      createContentJS(projects);
    });
  });
}

function createContentJS(projects) {
  console.log("in the createContentJS function");

  //   console.log(projects);
  const div = $(".contents");
  //   console.log("div:", div);
  //   console.log("projects now:", projects);

  const text = projects.map((project) => {
    return `
      <div class="content">
      <a href="${project.url}"><h2>${project.name}</h2></a>
      <div class="details">
        <h3>Technologies used</h3>
        <ul>
          <li>${project.tehnologies}</li>
        </ul>
      </div>
      <details>
        <summary>Preview</summary>
        <a href="${project.url}"
          ><img src="${project.preview}" alt="selfie"
        /></a>
      </details>
    </div>
      `;
  });
  //   console.log("text", text);
  div.innerHTML = "<h2>Voichita's Projects</h2>" + text.join("");
}

function createFooter() {
  console.log("creating footer");
  return `<div class = "footer">
  <a
      href="https://www.linkedin.com/in/voichita-maria-truscai/"
      title="LinkedIn"
      target="_blank"
      ><img src="images/linkedin.svg" width="40px" alt="Linkedin Logo"
    /></a>

    <a href="https://github.com/sabovoichita" title="GitHub" target="_blank"
      ><img src="images/github.svg" width="40px" alt="Github logo"
    /></a>

    <a
      href="https://www.youtube.com/channel/UCUFk52XTij2scqh_E9jlPiw"
      title="Youtube"
      target="_blank"
      ><img src="images/youtube.svg" width="40px" alt="Youtube logo"
    /></a>

    <a href="mailto:sabo_voichita4sacrifice@yahoo.com"
      ><img src="images/email-round.svg" width="40px" alt="email"
    /></a>
  </div>
  `;
}

function insertContent(projects) {
  console.log("insert content");
  $("body").innerHTML = createHeader() + createContent() + createFooter();
}

function initEvents() {
  console.log("init Events");
  insertContent();
  loadProjects();
}

initEvents();
