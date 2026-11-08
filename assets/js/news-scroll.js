// Size each .news-scroll box to show its first N items (data-visible, default 6)
// plus a faded peek of the next one; the rest scroll. Classes toggled on scroll
// control which edges fade. Without JS the CSS max-height and bottom fade apply.
(function () {
  function updateFades(box) {
    var top = box.scrollTop;
    var atBottom = top + box.clientHeight >= box.scrollHeight - 1;
    box.classList.toggle("has-more-above", top > 1);
    box.classList.toggle("is-at-bottom", atBottom);
  }

  function fit() {
    document.querySelectorAll(".news-scroll").forEach(function (box) {
      var items = box.querySelectorAll("li");
      var n = parseInt(box.getAttribute("data-visible"), 10) || 6;
      if (items.length <= n) {
        box.style.maxHeight = "none";
      } else {
        var peek = parseFloat(getComputedStyle(box).fontSize) * 1.2;
        box.style.maxHeight = items[n].offsetTop + peek + "px";
      }
      updateFades(box);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".news-scroll").forEach(function (box) {
      box.addEventListener("scroll", function () { updateFades(box); }, { passive: true });
    });
    fit();
  });
  window.addEventListener("load", fit);
  window.addEventListener("resize", fit);
})();
