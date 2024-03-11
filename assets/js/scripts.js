
// When the document is ready, being the scrolling progress
$(document).ready(function () {
  "use strict";

/* ------------------------- Begin Scrolling Progress Button ------------------------- */

  // Set up progress bar animation
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";

  // Update progress bar based on scroll position
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);

  // Show/hide progress bar based on scroll position
  var offset = 150;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });

  // Scroll to top when progress bar is clicked
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});

/* =====================================================================
------------------------- New Javascript -------------------------
===================================================================== */

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


// Icon Explode Animation

const iphone = document.querySelector(".iphone");
const widgets = document.querySelectorAll(".widgets");

gsap.set(iphone, { x: -1600, rotation: 0 });
gsap.set(widgets, { opacity: 0, scale: 0 });

function iPhoneAnimation() {
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.to(iphone, { x: 0 })
    .to(iphone, { rotation: 0, scale: 0.9 })
    .to(iphone, { duration: 3, scale: 1 });
  return tl;
}

function widgetAnimation() {
  const tl = gsap.timeline();
  tl.to(widgets, { duration: 0, opacity: 1 });
  return tl;
}

const animations = [
  {
    selector: "#app-store",
    duration: 3,
    scale: 0.5,
    x: 1100,
    y: -100,
    ease: Power4.easeOut
  },
  {
    selector: "#screen-time",
    duration: 3,
    scale: 0.285,
    x: -775,
    y: -300,
    ease: Power2.easeOut
  },
  {
    selector: "#weather",
    duration: 3,
    scale: 0.3,
    x: -1050,
    y: 350,
    ease: Power4.easeOut
  },
  {
    selector: "#stocks",
    duration: 3,
    scale: 0.55,
    x: 675,
    y: -340,
    ease: Power1.easeOut
  },
  {
    selector: "#folder",
    duration: 3,
    scale: 0.6,
    x: 600,
    y: -375,
    ease: Power2.easeOut
  },
  {
    selector: "#fitness",
    duration: 3,
    scale: 0.3,
    x: -390,
    y: -250,
    ease: Power1.easeOut
  },
  {
    selector: "#find-my",
    duration: 3,
    scale: 0.6,
    x: 625,
    y: -400,
    ease: Power3.easeOut
  },
  {
    selector: "#music",
    duration: 3,
    scale: .35,
    x: -600,
    y: 300,
    ease: Power4.easeOut
  },
  {
    selector: "#wallet",
    duration: 3,
    scale: .35,
    x: -650,
    y: 350,
    ease: Power4.easeOut
  },
  {
    selector: "#sleep",
    duration: 3,
    scale: 0.45,
    x: 675,
    y: 275,
    ease: Power2.easeOut
  }
];
const startTime = 2;
const masterTimeline = gsap.timeline();
masterTimeline.add(iPhoneAnimation()).add(widgetAnimation(), startTime);

animations.forEach((animation, index) => {
  const { selector, duration, scale, x, y, ease } = animation;
  const element = document.querySelector(selector);
  masterTimeline.add(
    gsap.to(element, { duration, scale, x, y, ease }),
    startTime + (index % 3) / 2
  );
});

ScrollTrigger.create({
  animation: masterTimeline,
  trigger: ".animation",
  scrub: 1,
  pin: true
  // markers: true
});
