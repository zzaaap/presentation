
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

/* ============================================================================= 
-----------------------------   Begin Parallax GSAP   -------------------------------
============================================================================= */

// Animation sequence for Cluster A
gsap.set(".circle", { yPercent: -5 });
gsap.set(".dotsBlue", { yPercent: 10 });
gsap.set(".owlHorned", { yPercent: -20 });
gsap.set(".clusterA", { yPercent: 5 });

gsap.to(".circle", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterA",
    scrub: 1
  },
});

gsap.to(".dotsBlue", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterA",
    scrub: 1
  },
});

gsap.to(".owlHorned", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterA",
    scrub: 1
  },
});

gsap.to(".caption", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterA",
    // markers:true,
    end: "bottom center",
    scrub: 1
  },
});

gsap.to(".clusterA", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterA",
    end: "bottom center",
    scrub: 1
  },
});


// Animation sequence for Cluster B
gsap.set(".triangle", { yPercent: 25, rotation: -180 });
gsap.set(".dotsWhite", { yPercent: 10 });
gsap.set(".imageB", { yPercent: -20 });
gsap.set(".clusterB", { yPercent: 5 });

gsap.to(".triangle", {
  yPercent: -5,
  rotation: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterB",
    scrub: 1
  },
});

gsap.to(".dotsWhite", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterB",
    scrub: 1
  },
});

gsap.to(".imageB", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterB",
    scrub: 1
  },
});

/* ============================================================================= 
-----------------------------   End New GSAP   ----------------------------------
============================================================================= */

/* ============================================================================= 
-----------------------------  Start GSAP Hero Title  --------------------------
============================================================================= */
let tl = new TimelineMax();

tl
	.from( $('.logo__u'), 2, {
		y: -30
	} )
	.from( $('.logo__r'), 2,{
		rotation: 18,
		transformOrigin: "100% 50%"
	},"-=1.5")
	.from( $('.logo__i'), 2, {
		y: "100%"
	},"-=1.5")
	.from( $('.logo__t-top'), 2, {
		x: "100%"
	},"-=1.5")
	.from( $('.logo__t-bottom'), 2, {
		y: "-100%"
	},"-=1.5")
	.from( $('.logo__y'), 2, {
		y: "100%"
	},"-=2");

  /* ============================================================================= 
-----------------------------  End GSAP Hero Title  --------------------------
============================================================================= */