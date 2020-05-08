$(document).ready(function () {
  const win = $(window);
  const doc = $(document);
  const progressBar = $("progress");
  const progressLabel = $(".progress-label");
  const setValue = () => win.scrollTop();
  const setMax = () => doc.height() - win.height();
  const setPercent = () =>
    Math.round((win.scrollTop() / (doc.height() - win.height())) * 100);

  //プログレスバー
  progressLabel.text(setPercent() + "%");
  progressBar.attr({ value: setValue(), max: setMax() });

  doc.on("scroll", () => {
    progressLabel.text(setPercent() + "%");
    progressBar.attr({ value: setValue() });
  });

  win.on("resize", () => {
    progressLabel.text(setPercent() + "%");
    progressBar.attr({ value: setValue(), max: setMax() });
  });
});

$(function () {
  $.scrolline({
    direction: "vertical",
    frontColor: "#ee3281",
    position: "right",
    weight: "2",
  });

  $(".js-form-btn").on("click", function () {
    if ($(this).hasClass("is-active")) {
      $(this).removeClass("is-active");
      $(this).children().removeClass("is-open");
    } else {
      $(".js-form-btn").removeClass("is-active");
      $(this).addClass("is-active");
      $(".js-form-list").removeClass("is-open");
      $(this).children().addClass("is-open");
    }
  });
});

$(window).scroll(function () {
  $(".js-fadein").each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight) {
      $(this).addClass("scrollin");
    } else {
      $(this).removeClass("scrollin");
    }
  });
});
