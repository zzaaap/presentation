
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

/* ------------------------- Box Animation ------------------------- */
/* Create page load animation that scales 27 degree box element down to reveal page */
document.addEventListener("DOMContentLoaded", function() {
  var logoanim = document.querySelector(".logoanim");
  logoanim.addEventListener("transitionend", function() {
    setTimeout(function() {
      logoanim.style.transform = "translateX(0px) skew(-28deg) scale(0.85)";
    }, 0);
  }, {once: true});
  setTimeout(function() {
    logoanim.style.transform = "translateX(250px) skew(-28deg) scale(0.85)";
  }, 0);
});