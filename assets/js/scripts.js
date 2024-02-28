
// When the document is ready
$(document).ready(function () {
  "use strict";

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


// Animation sequence for the Great Horned Owl
gsap.set(".circle", { yPercent: -5 });
gsap.set(".dotsBlue", { yPercent: 10 });
gsap.set(".owlHorned", { yPercent: -20 });
gsap.set(".clusterGreat", { yPercent: 5 });

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


// Animation sequence for the Burrowing Owl
gsap.set(".triangle", { yPercent: 25, rotation: -180 });
gsap.set(".dotsWhite", { yPercent: 10 });
gsap.set(".owlBurrowing", { yPercent: -20 });
gsap.set(".clusterBurrowing", { yPercent: 5 });

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

// --- Split the text, Great Horned Owl --- 
var tlSplitGreat = gsap.timeline({ onComplete: () => { SplitGreat.revert() } }),
  SplitGreat = new SplitText(".titleGreathorned", { type: "words,chars" }),
  chars = SplitGreat.chars;


tlSplitGreat.from(chars, {
  duration: 0.8,
  opacity: 0,
  y: 10,
  ease: "circ.out",
  stagger: 0.02,
}, "+=0");


// --- Split the text, Burrowing Owl ---
function setupSplits() {

  var tlSplitBurrowing = gsap.timeline(),
    SplitBurrowing = new SplitText(".titleBurrowing", { type: "words,chars" }),
    chars = SplitBurrowing.chars; //an array of all the divs that wrap each character


  tlSplitBurrowing.from(chars, {
    duration: 0.8,
    opacity: 0,
    y: 10,
    ease: "circ.out",
    stagger: 0.02,
    scrollTrigger: {
      trigger: ".titleBurrowing",
      start: "top 75%",
      end: "bottom center",
      scrub: 1
    }
  }, "+=0");
};

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();

/* ============================================================================= 
-----------------------------   End New Code   ----------------------------------
============================================================================= */