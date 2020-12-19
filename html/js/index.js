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
  $(".l-header").css("display", "none");
  setTimeout(function () {
    $(".js-anime-value").addClass("active");
  }, 1000); //0.5秒後にロゴをフェードイン!
  setTimeout(function () {
    $(".l-header").fadeIn(500);
  }, 1800); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
  setTimeout(function () {
    $(".p-value-head").addClass("active");
  }, 1800);
  setTimeout(function () {
    $(".js-start").fadeOut(100);
  }, 2500);
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

  $(".js-menu").on("click", function () {
    $(this).toggleClass("on");
    if ($(".l-gnav").hasClass("on")) {
      //fullnavが開いている時
      $(".l-gnav").removeClass("on").fadeOut();
      $(".l-btn-open, .l-header__logo--off").addClass("on");
      $(".l-btn-close, .l-header__logo--on").removeClass("on");
    } else {
      //fullnavが閉じている時
      $(".l-gnav").fadeIn();
      setTimeout(function () {
        $(".l-gnav").addClass("on");
      }, 200);
      $(".l-btn-close, .l-header__logo--on").addClass("on");
      $(".l-btn-open, .l-header__logo--off").removeClass("on");
    }
  });

  var startPos = 0,
    winScrollTop = 0;
  $(window).on("scroll", function () {
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= 50) {
      $(".l-header__logo").addClass("hide");
    } else {
      $(".l-header__logo").removeClass("hide");
    }
    startPos = winScrollTop;
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
