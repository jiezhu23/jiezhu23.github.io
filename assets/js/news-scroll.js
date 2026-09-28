// Size each .news-scroll box to show its first N items (data-visible, default 6)
// plus a peek of the next one; the rest scroll. Without JS the CSS max-height applies.
(function () {
  function fit() {
    document.querySelectorAll(".news-scroll").forEach(function (box) {
      var items = box.querySelectorAll("li");
      var n = parseInt(box.getAttribute("data-visible"), 10) || 6;
      if (items.length <= n) {
        box.style.maxHeight = "none";
        return;
      }
      var peek = parseFloat(getComputedStyle(box).fontSize) * 0.6;
      box.style.maxHeight = box.clientTop + items[n].offsetTop + peek + "px";
    });
  }

  document.addEventListener("DOMContentLoaded", fit);
  window.addEventListener("load", fit);
  window.addEventListener("resize", fit);
})();
