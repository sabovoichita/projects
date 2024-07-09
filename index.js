let slideIndex = 1;

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
   
    <section class="section" id="section--2">
      <div class="container-portofolio">
        <h2>Portofolio</h2>
        <div class="projects">
          <div class="main__project"></div>
          <div class="secondary__projects">
            
          </div>
        </div>
      </div>
    </section>

  `;
}

function loadProjects() {
  //   console.log("in the loadProjects function");
  fetch("projects.json").then((r) => {
    r.json().then((projects) => {
      //   console.log("projects %o", projects);
      createPortofolio(projects);
    });
  });
}

function createPortofolio(projects) {
  console.log("in the createContentJS function");

  //   console.log(projects);
  const div = $(".secondary__projects");
  //   console.log("div:", div);
  //   console.log("projects now:", projects);

  const text = projects.map((project) => {
    return `
    
  <div class="project--${project.id} mySlides fade" style="background: url(${project.preview})">
      <div class="overlay_portofolio_projects">
        <h4 class="overlay_port_title">${project.name}</h4>
        <div class="description">
          <h3>Description:</h3>
          <p>${project.description}</p>
        </div>
        <div class="details">
          <h3>Technologies used: ${project.tehnologies}</h3>
        </div>
        <a href="${project.url}">
          <button class="overlay_port_btn" onclick="${project.url}">
            View Project
          </button></a
        >
      </div>
    </div>
    
      `;
  });
  //   console.log("text", text);
  div.innerHTML =
    text.join("") +
    `<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
    <br />` +
    `<div class="dots" style="text-align: center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
        <span class="dot" onclick="currentSlide(5)"></span>
        <span class="dot" onclick="currentSlide(6)"></span>
      </div>`;
}

function createSection() {
  const portofolio = createPortofolio(projects);
  const text = `
    <section class="section" id="section--2">
      <div class="container-portofolio">
        <h2>Portofolio</h2>
        <h4>20 projects</h4>
        <div class="projects">
          <div class="secondary__projects">${portofolio}</div>
        </div>
      </div>
    </section>`;
  $("body").innerHTML = text;
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

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function initEvents() {
  console.log("init Events");
  insertContent();
  loadProjects();
  showSlides(slideIndex);
}

initEvents();
