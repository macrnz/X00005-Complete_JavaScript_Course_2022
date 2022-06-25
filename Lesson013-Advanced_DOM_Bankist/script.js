"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault(); //PREVENTS THE PAGE FROM REFRESHING
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

/////////////////////////////////////////////////////////////////+
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
//REPLACED BY CODE ABOVE
/*for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);*/
/////////////////////////////////////////////////////////////////-

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////////+
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  //GETTING THE COORDS
  console.log(
    `Current scroll (X/Y) ${window.pageXOffset} ${window.pageYOffset}`
  );

  //HEIGHT AND WIDTH OF PAGE CURRENT WINDOW
  console.log(
    `height/width viewport ${document.documentElement.clientHeight} ${document.documentElement.clientWidth}`
  );

  //METHOD 1
  //SCROLLING
  //window.scrollTo(
  //s1coords.left + window.pageXOffset,
  //s1coords.top + window.pageYOffset
  //);

  //METHOD 2
  //window.scrollTo({
  //left: s1coords.left + window.pageXOffset,
  //top: s1coords.top + window.pageYOffset,
  //behavior: "smooth",
  //});

  //METHOD 3 (BEST METHOD)
  section1.scrollIntoView({ behavior: "smooth" });
});
//FOR SMOOTH SCROLLING
/////////////////////////////////////////////////////////////////-

/////////////////////////////////////////////////////////////////+

//CODE BELOW IS OLD METHOD
/*document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    //console.log("LINK");
    const id = this.getAttribute("href");
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});*/
//USE EVENT DELEGATION INSTEAD
//1. ADD EVENT LISTENER TO COMMON PARENT ELEMENT
//2. DETERMINE WHAT ELEMENT ORIGINATED THE EVENT

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  //console.log(e.target);

  //MATCHING STRATEGY
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    //console.log("LINK");
  }
});

//PAGE NAVIGATION
/////////////////////////////////////////////////////////////////-

/////////////////////////////////////////////////////////////////+

//OLD METHOD
//tabs.forEach((t) => t.addEventListener("click", () => console.log("TAB")));

//NEW METHOD USING EVENTS DELEGATION
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  //console.log(clicked);

  //GUARD CLAUSE
  if (!clicked) return;

  //ACTIVE AND INACTIVE TAB
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  clicked.classList.add("operations__tab--active");

  //ACTIVATE CONTENT AREA
  //console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//TABBED COMPONENT
/////////////////////////////////////////////////////////////////-

/////////////////////////////////////////////////////////////////+
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//PASSING AN ARGUMENT INTO HANDLER
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

//MENU FADE ANIMATION
/////////////////////////////////////////////////////////////////-

/////////////////////////////////////////////////////////////////+

//USING SCROLL EVENT
/*
const initialCoords = section1.getBoundingClientRect();
console.log(window.scrollY);

window.addEventListener("scroll", function (e) {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});*/

//USING INTERACTION OBSERVER API
/*const obsCallBack = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};
const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};
const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(section1);*/

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//STICKY NAVIGATION
/////////////////////////////////////////////////////////////////-

/////////////////////////////////////////////////////////////////+

const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//REVEALING ELEMENTS ON SCROLL
/////////////////////////////////////////////////////////////////-

/////////////////////////////////////////////////////////////////+

const imgTargets = document.querySelectorAll("img[data-src");
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //REPLACE SRC WITH DATA-SRC
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});
imgTargets.forEach((img) => imgObserver.observe(img));

//LAZY LOADING IMAGES
/////////////////////////////////////////////////////////////////-

/////////////////////////////////////////////////////////////////+

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  //const slider = document.querySelector(".slider");
  //slider.style.transform = "scale(0.4) translateX(-800px)";
  //slider.style.overflow = "visible";

  //slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

  //FUNCTIONS
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button`
      );
    });
  };
  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document.querySelector(
      `.dots__dot[data-slide="${slide}]).classList.add('dots__dot--active`
    );
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `TranslateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
      //slides.forEach(
      //(s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)//}%)`)
      //);
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  //EVENT HANDLERS
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
/*document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    prevSlide();
  }
  if (e.key === "ArrowRight") {
    nextSlide();
  }
});*/

//TEXT SLIDERS
/////////////////////////////////////////////////////////////////-

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//LECTURE NOTES
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//SELECTING SINGLE ELEMENT
const header = document.querySelector(".header");
//SELECTING MULTIPLE ELEMENTS
document.querySelectorAll(".section");

const allSections = document.querySelectorAll(".section");
console.log(allSections);

//SELECTING AN ID
document.getElementById("#section--1");
document.getElementsByTagName("button");

const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

//SELECTING AN HTML ELEMENT
document.getElementsByClassName("btn");

//CREATING AND INSERTING ELEMENTS
//.insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
//message.textContent =
("We use cookies for improved functionality and analytics.");
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true))
//header.before(message);
//header.after(message);

//DELETING ELEMENTS
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    //message.remove()
    message.parentElement.removeChild(message);
  });

//STYLES
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

//ATTRIBUTES
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.std);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

//NON-STANDARD
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

//DATA ATTRIBUTES
console.log(logo.dataset.versionNumber);

//CLASSES
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");
//logo.className = 'Jonas' <- DO NOT USE THIS TYPE OF METHOD


const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great! you are reading the heading!");
};

h1.addEventListener("mouseenter", function (e) {
  //alert("addEventListener: Great! you are reading the heading!");
  h1.removeEventListener('mouseenter', alertH1)
});

//h1.onmouseenter = function (e) {
  //alert("addEventListener: Great! you are reading the heading!");
//};

// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  //console.log("LINK");
  console.log(`LINK ${e.target} ${e.currentTarget}`);
  console.log(e.currentTarget === this);

  //STOP PROPAGATION
  //e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  //console.log("LINK");
  console.log(`CONTAINER ${e.target} ${e.currentTarget}`);
});

document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    //console.log("LINK");
    console.log(`NAV ${e.target} ${e.currentTarget}`);
  },
  false
); //IF TRUE, IT WILL START TO FOCUS CAPTURE ON THIS EVENT

const h1 = document.querySelector("h1");

//GOING DOWNWARDS: CHILD
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

//GOING UPWARDS: PARENTS
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)";

//GOING SIDEWAYS: SIBLINGS
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = "scale(0.5)";
  }
});
*/
