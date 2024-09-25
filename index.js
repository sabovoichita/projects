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
        <h1>Voichita's Portfolio</h1>
    </div>
  </div>`;
}

function createContent() {
  return `
    <section class="section" id="section--2">
      <div class="container-portofolio">
        <h2>Portfolio</h2>
        <p>~ contains over <span>20</span> projects made with <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, <span>React</span>, <span>NodeJs</span>,  <span>API</span>, <span>NPM</span> ~</p>
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
  fetch("projects.json").then((r) => {
    r.json().then((projects) => {
      createPortfolio(projects);
    });
  });
}

function createPortfolio(projects) {
  const div = $(".secondary__projects");

  // Generate the slides
  const text = projects.map((project) => {
    return `
      <div class="project--${project.id} mySlides fade">
         <img src="${project.preview}" alt="project picture" />
        <div class="overlay_portofolio_projects">
          <h3 class="overlay_port_title">${project.name}</h3>
          <div class="description">
            <h4>Technologies used: ${project.tehnologies}</h4>
            <h4>Description:</h4>
            <p>${project.description}</p>
          </div>
          <a href="${project.url}">
            <button class="overlay_port_btn" onclick="${project.url}">
              View Project
            </button></a>
        </div>
      </div>
    `;
  });

  // Generate the dots below the slides
  const dotsHtml = projects
    .map((_, index) => {
      return `<span class="dot" onclick="currentSlide(${index + 1})"></span>`;
    })
    .join("");

  // Add slides, arrows, and dots to the HTML structure
  div.innerHTML =
    text.join("") +
    `<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
    <br />` +
    `<div class="dots">${dotsHtml}</div>`; // Dots placed after slides
}
function createPortfolio(projects) {
  const div = $(".secondary__projects");

  // Generate the slides
  const slidesHtml = projects
    .map((project) => {
      return `
      <div class="project--${project.id} mySlides fade">
         <img src="${project.preview}" alt="project picture" />
        <div class="overlay_portofolio_projects">
          <h3 class="overlay_port_title">${project.name}</h3>
          <div class="description">
            <h4>Technologies used: ${project.tehnologies}</h4>
            <h4>Description:</h4>
            <p>${project.description}</p>
          </div>
          <a href="${project.url}">
            <button class="overlay_port_btn" onclick="${project.url}">
              View Project
            </button></a>
        </div>
      </div>
    `;
    })
    .join("");

  // Generate the dots below the slides
  const dotsHtml = projects
    .map((_, index) => {
      return `<span class="dot" onclick="currentSlide(${index + 1})"></span>`;
    })
    .join("");

  // Add slides, arrows, and dots to the HTML structure
  div.innerHTML = `
    <div class="slide-container">
      ${slidesHtml}
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <div class="dots-container">
      ${dotsHtml}
    </div>
  `;
}

function createFooter() {
  console.log("creating footer");
  return `
  <footer>
    <div class="footer__container">
      <span class="footer__text first__text">Voichita Maria Truscai</span>
      <span class="footer__text sec__text">Portfolio</span>
    </div>
  <div class = "footer">
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
   </footer>
  `;
}

function insertContent() {
  console.log("insert content");
  $("body").innerHTML = createHeader() + createContent() + createFooter();
}

let slideIndex = 1;

// Function to handle the next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function to set the current slide when a dot is clicked
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Main function to show the slides
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // If n exceeds the total number of slides, reset to the first slide
  if (n > slides.length) {
    slideIndex = 1;
  }
  // If n is less than 1, set to the last slide
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and mark the corresponding dot as active
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}

// Initialize the event handlers and content
function initEvents() {
  console.log("init Events");
  insertContent();
  loadProjects();

  setTimeout(() => {
    showSlides(slideIndex); // Show the first slide
  }, 500); // Delay to allow the content to load before showing slides
}

initEvents();
