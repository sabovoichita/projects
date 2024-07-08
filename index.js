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
   <div class="content">
      <h2>Voichita's Main Projects</h2>

      <div class="content">
        <h2>Project 1: My CV</h2>
      </div>

      <div class="content">
        <h2>Project 2: My CV(Udemy version)</h2>
      </div>

      <div class="content">
        <h2>Project 3: My CV- React</h2>
      </div>

      <div class="content">
        <h2>Project 4: Teams Networking</h2>
      </div>

      <div class="content">
        <h2>Project 5: Teams Networking(Udemy version)</h2>
      </div>

      <div class="content">
        <h2>Project 6: Meals Planner</h2>
      </div>

      <div class="content">
        <h2>Project 7: Birthdays Calendar</h2>
      </div>

      <div class="content">
        <h2>Project 8: Birthdays Calendar</h2>
      </div>

      <div class="content">
        <h2>Project 9: Florea Sabo Poetry</h2>
      </div>

      <div class="content">
        <h2>Project 10: Chis Simona Vegetables</h2>
      </div>

      <div class="content">
        <h2>Project 11: Centro Etetica Ana</h2>
      </div>

      <div class="content">
        <h2>Project 12: Vizit Coseiu</h2>
      </div>

      <div class="content">
        <h2>Project 13: Todo List</h2>
      </div>

      <div class="content">
        <h2>Project 14: Sunday School Cross-out Game</h2>
      </div>

      <div class="content">
        <h2>Project 15: Simple Quiz App</h2>
      </div>

      <div class="content">
        <h2>Project 16: Depozit Coseiu</h2>
      </div>

      <div class="content">
        <h2>Project 17: Free Code Camp</h2>
      </div>

      <div class="content">
        <h2>Project 18: Free Code Camp - CSS</h2>
      </div>

      <div class="content">
        <h2>Project 19: Romana - Spaniola</h2>
      </div>

      <div class="content">
        <h2>Project 20: Cafe Menu</h2>
      </div>
    </div>
  `;
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

function insertContent() {
  console.log("insert content");
  $("body").innerHTML = createHeader() + createContent() + createFooter();
}

function initEvents() {
  console.log("init Events");
  insertContent();
}

initEvents();
