/**
 * -----------------------------------------------------------------------------------
 *
 *     Theme Name: Presentation
 *     Theme URI: http://iambazzy.com
 *     Description: Creative Portfolio
 *     Author: zzapped
 *     Author URI: http://zzapped.com
 *     Version: 1.0
 *
 * -----------------------------------------------------------------------------------
 *
 * @format
 */

$(function () {
  "use strict";

  var wind = $(window);

  /* =============================================================================
  -----------------------------  Smooth Scroll nav   -----------------------------
  ============================================================================= */

  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: "linear", // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: "active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -75, // offste (in px) for fixed top navigation
  });

  /* =============================================================================
  ------------------------------  Interactive work   -----------------------------
  ============================================================================= */

  $(".inter-links-center .links-text li").on("mouseenter", function () {
    var tab_id = $(this).attr("data-tab");
    $(".links-text li").removeClass("current");
    $(this).addClass("current");

    $(".links-img .img").removeClass("current");
    $("#" + tab_id).addClass("current");

    if ($(this).hasClass("current")) {
      return false;
    }
  });

  $(".inter-links-center .links-text li").on("mouseleave", function () {
    $(".links-text li").removeClass("current");
    $(".links-img .img").removeClass("current");
  });

  $(".inter-links-center .links-text li").on("mouseenter", function () {
    $(this).removeClass("no-active").siblings().addClass("no-active");
  });

  $(".inter-links-center .links-text li").on("mouseleave", function () {
    $(".inter-links-center .links-text li").removeClass("no-active");
  });

  /* =============================================================================
  ------------------------------  Data Background   ------------------------------
  ============================================================================= */

  var pageSection = $(".bg-img, section");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });

  var pageSectionColor = $(".bg-solid-color, section");
  pageSectionColor.each(function (indx) {
    var color = $(this).attr("data-solid-color");

    if ($(this).attr("data-solid-color")) {
      $(this).css("background-color", color);
    }
  });

  /* =============================================================================
  ------------------------------  Interactive work   -----------------------------
  ============================================================================= */

  $(".inter-fixed-text .links-img .img").on("mouseenter", function () {
    var tab_id = $(this).attr("data-tab");
    $(".links-img .img").removeClass("current");
    $(this).addClass("current");

    $(".links-text li").removeClass("current");
    $("#" + tab_id).addClass("current");

    if ($(this).hasClass("current")) {
      return false;
    }
  });

  $(".inter-fixed-text .links-img .img").on("mouseleave", function () {
    $(".links-text li").removeClass("current");
    $(".links-img .img").removeClass("current");
  });

  /* =============================================================================
  -------------------------------  Progress Bar  ---------------------------------
  ============================================================================= */

  wind.on("scroll", function () {
    $(".skill-progress .progres").each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var myVal = $(this).attr("data-value");
      if (bottom_of_window > bottom_of_object) {
        $(this).css({
          width: myVal,
        });
      }
    });
  });

  /* =============================================================================
  ------------------------------  Parallax Items   -----------------------------
  ============================================================================= */

  // Get the target elements
  const parallaxTargets = document.querySelectorAll(".parallax");

  // Get the mouse position
  let mouseX = 0;
  let mouseY = 0;
  document.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  // Update the target elements' position on each animation frame
  let rafId = null;
  function updateParallax() {
    // Loop through each target element
    parallaxTargets.forEach((target) => {
      // Get the target's speed
      let speed = target.dataset.speed;

      // Calculate the new position based on the mouse position and speed
      let x = (window.innerWidth / 2 - mouseX) * speed;
      let y = (window.innerHeight / 2 - mouseY) * speed;
      target.style.transform = `translate3d(${x / 10}rem, ${y / 10}rem, 0)`;
    });

    // Schedule the next animation frame
    rafId = requestAnimationFrame(updateParallax);
  }

  // Start the parallax animation
  updateParallax();

  /* =============================================================================
  -----------------------------  Trigger Plugins  --------------------------------
  ============================================================================= */

  /* ========== Sticky ========== */

  $(".sticky-item").stick_in_parent();

  /* ========== parallaxie ========== */

  $(".parallaxie").parallaxie({
    speed: 0.8,
    size: "cover",
  });

  /* ========== paroller ========== */

  $(".my-paroller").paroller();

  /* =========== justifiedGallery =========== */

  $(".justified-gallery").justifiedGallery({
    rowHeight: 400,
    lastRow: "nojustify",
    margins: 15,
  });

  /* =========== hover3d =========== */

  $(".hover3d").hover3d({
    selector: ".hover3d-child",
    invert: true,
  });

  /* ===========  Splitting  =========== */

  Splitting();
});

/* =============================================================================
-----------------------------  Cursor Animation  -----------------------------
============================================================================= */

(function () {
  const link = document.querySelectorAll(".hover-this");
  const cursor = document.querySelector(".cursor");
  const animateit = function (e) {
    const hoverAnim = this.querySelector(".hover-anim");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;
    hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
    if (e.type === "mouseleave") hoverAnim.style.transform = "";
  };
  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };
  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseleave", animateit));
  window.addEventListener("mousemove", editCursor);

  $("a, .cursor-pointer").hover(
    function () {
      $(".cursor").addClass("cursor-active");
    },
    function () {
      $(".cursor").removeClass("cursor-active");
    }
  )

  /* =============================================================================
  -----------------------------  Text Animation  -----------------------------
  ============================================================================= */

  let elements = document.querySelectorAll(".rolling-text");

  elements.forEach((element) => {
    let innerText = element.innerText;
    element.innerHTML = "";

    let textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for (let letter of innerText) {
      let span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter");
      textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
  });

  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.remove("play");
    });
  });
})();

  /* =============================================================================
  ---------------------------------  Preloader  ----------------------------------
  ============================================================================= */

  var body = $("body");
  body.addClass("loaded");
  setTimeout(function () {
    body.removeClass("loaded");
  }, 500);

  /* =============================================================================
  ------------------------------  Parallax image  --------------------------------
  ============================================================================= */

  var imageUp = document.getElementsByClassName("thumparallax");
  new simpleParallax(imageUp, {
    delay: 1,
    scale: 1.2,
  });

  var imageDown = document.getElementsByClassName("thumparallax-down");
  new simpleParallax(imageDown, {
    orientation: "down",
    delay: 1,
    scale: 1.2,
  });

  /* =============================================================================
  -----------------------------  isotope Masonery   ------------------------------
  ============================================================================= */

  $(".gallery").isotope({
    itemSelector: ".items",
  });

  // isotope
  $(".gallery2").isotope({
    // options
    itemSelector: ".items",
    masonry: {
      // use element for option
      columnWidth: ".width2",
    },
  });

  var $gallery = $(".gallery , .gallery2").isotope();

  $(".filtering").on("click", "span", function () {
    var filterValue = $(this).attr("data-filter");
    $gallery.isotope({ filter: filterValue });
  });

  $(".filtering").on("click", "span", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

/* =============================================================================
-----------------------------  Button scroll up   ------------------------------
============================================================================= */

$(document).ready(function () {
  "use strict";

  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 150;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});

/* =============================================================================
--------------------------------  Fade Header   --------------------------------
============================================================================= */

$(window).scroll(function () {
  var scrolled = $(this).scrollTop();
  $(".fixed-slider .caption").css({
    transform: "translate3d(0, " + -(scrolled * 0.2) + "px, 0)",
    opacity: 1 - scrolled / 600,
  });
});

/* =============================================================================
-------------------------------  Wow Animation   -------------------------------
============================================================================= */

wow = new WOW({
  animateClass: "animated",
  offset: 100,
});
wow.init();

/* =============================================================================
////////////////////////////////////////////////////////////////////////////////
============================================================================= */

$(function () {
  "use strict";

  /* ===============================  fixed-slider  =============================== */

  var slidHeight = $(".fixed-slider").outerHeight();

  $(".main-content").css({
    marginTop: slidHeight,
  });

  
  /* =============================================================================
  -------------------------------  Preloader svg   -------------------------------
  ============================================================================= */

  const svg = document.getElementById("svg");
  const tl = gsap.timeline();
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
      delay: 1.5,
      y: -100,
      opacity: 0,
  });
  tl.to(svg, {
      duration: 0.5,
      attr: { d: curve },
      ease: "power2.easeIn",
  }).to(svg, {
      duration: 0.5,
      attr: { d: flat },
      ease: "power2.easeOut",
  });
  tl.to(".loader-wrap", {
      y: -1500,
  });
  tl.to(".loader-wrap", {
      zIndex: -1,
      display: "none",
  });
  tl.from(
      "header",
      {
          y: 200,
      },
      "-=1.5"
  );
  tl.from(
      "header .container",
      {
          y: 40,
          opacity: 0,
          delay: 0.3,
      },
      "-=1.5"
  );

});

$(function () {
  var width = $(window).width();
  if (width > 991) {
    ("use strict");

    var wind = $(window);

    /* =============================================================================
      -----------------------------  Portfolio Fixed  --------------------------------
      ============================================================================= */

    wind.on("scroll", function () {
      $(".portfolio-fixed .sub-bg .cont").each(function () {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var tab_id = $(this).attr("data-tab");
        if (bottom_of_window > bottom_of_object) {
          $("#" + tab_id).addClass("current");
          $(this).addClass("current");
        } else {
          $("#" + tab_id).removeClass("current");
          $(this).removeClass("current");
        }
      });
    });
  }
});

/* ============================================================================= 
-----------------------------   Begin New Code   --------------------------------
============================================================================= */

/* ------Great Horned Owl Sequence------  */
gsap.set(".circle", { yPercent: -5});
gsap.set(".dotsBlue", { yPercent: 10});
gsap.set(".owlHorned", { yPercent: -20});
gsap.set(".clusterGreat", { yPercent: 5});

gsap.to(".circle", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".dotsBlue", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});


gsap.to(".owlHorned", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".caption", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterGreat", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    end: "bottom center",
    scrub: 1
  }, 
});



/* ------Burrowing Owl Sequence------  */
gsap.set(".triangle", { yPercent: 25, rotation:-90});
gsap.set(".dotsWhite", { yPercent: 10});
gsap.set(".owlBurrowing", { yPercent: -20});
gsap.set(".clusterBurrowing", { yPercent: 5});

gsap.to(".triangle", {
  yPercent: -5,
  rotation: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});

gsap.to(".dotsWhite", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});


gsap.to(".owlBurrowing", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});

gsap.to(".captionBurrowing", {
  yPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterBurrowing", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});


/*
gsap.set("#wrappie", {transformOrigin:"top left"});

function sizeAll() {
	var w = document.body.clientWidth;
  	console.log(w);
	if ( w < 960) {
     gsap.set("#wrappie",  {scale:w/100*.125}); 
		} 
}

window.onresize = sizeAll;

sizeAll();
*/

/*
const quotes = document.querySelectorAll(".title");

function setupSplits() {
  quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.childSplit.revert();
      quote.parentSplit.revert();
    }
    
    // Set up the splits
    quote.parentSplit = new SplitText(quote, {
      type: "lines",
      linesClass: "split-parent"
    });

    quote.childSplit = new SplitText(quote, { type: "lines" });

    // Set up the anim
    quote.anim = gsap.from(quote.childSplit.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 50%",
      },
      duration: 0.6, 
      ease: "circ.out", 
      y: 10,
      opacity:0,
      stagger: 0.02,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();
*/


/* --- Split the text, Great Horned Owl --- */
var tlSplitGreat = gsap.timeline({onComplete: () => {SplitGreat.revert()}}), 
    SplitGreat = new SplitText(".titleGreathorned", {type:"words,chars"}), 
    chars = SplitGreat.chars;


tlSplitGreat.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
}, "+=0");



/* --- Split the text, Burrowing Owl --- */
function setupSplits() {
  
var tlSplitBurrowing = gsap.timeline(), 
    SplitBurrowing = new SplitText(".titleBurrowing", {type:"words,chars"}), 
    chars = SplitBurrowing.chars; //an array of all the divs that wrap each character


tlSplitBurrowing.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".titleBurrowing",
//markers:true,
    start: "top 75%",
   end: "bottom center",
    scrub:1
  }
//,   onComplete: () => {SplitBurrowing.revert()}
}, "+=0");

// window.addEventListener('resize', function() {
  // SplitBurrowing.revert();
// });
  
};

/*
ScrollTrigger.addEventListener("scrollEnd", function() {
    SplitBurrowing.revert();
});
*/

ScrollTrigger.addEventListener("refresh", setupSplits);
//ScrollTrigger.addEventListener("scrollEnd", () => SplitBurrowing.revert());
setupSplits();


/*
// Alternate way of resizing the cluster elements since they are absolutely positioned
$(window).resize(function (){
if(window.matchMedia("(max-width: 500px)").matches){
    gsap.set(".clusterGreat", {scale: 0.2, transformOrigin: "center center"});
} else {
  gsap.set(".clusterGreat", {scale: 1, transformOrigin: "center center"});
          }
});
*/

