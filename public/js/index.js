// $(document).ready(function () {
//   const win = $(window);
//   const doc = $(document);
//   const progressBar = $("progress");
//   const progressLabel = $(".progress-label");
//   const setValue = () => win.scrollTop();
//   const setMax = () => doc.height() - win.height();
//   const setPercent = () =>
//     Math.round((win.scrollTop() / (doc.height() - win.height())) * 100);

//   //プログレスバー
//   progressLabel.text(setPercent() + "%");
//   progressBar.attr({ value: setValue(), max: setMax() });

//   doc.on("scroll", () => {
//     progressLabel.text(setPercent() + "%");
//     progressBar.attr({ value: setValue() });
//   });

//   win.on("resize", () => {
//     progressLabel.text(setPercent() + "%");
//     progressBar.attr({ value: setValue(), max: setMax() });
//   });
// });

//　オープニング
$(function () {
  setTimeout(function () {
    $(".js-anime-value").addClass("active");
  }, 1000);
  setTimeout(function () {
    $(".l-header").addClass("active");
  }, 1800);
  setTimeout(function () {
    $(".p-value-head").addClass("active");
  }, 1800);
  setTimeout(function () {
    $(".p-value-body").addClass("active");
  }, 2300);
  setTimeout(function () {
    $(".js-start").fadeOut(100);
  }, 2500);
});

$(function () {
  // プログレスバー
  var windowWidth = $(window).width();
  var windowSm = 768;
  if (windowWidth > windowSm) {
    $.scrolline({
      direction: "vertical",
      frontColor: "#ee3281",
      position: "right",
      weight: "2",
    });
  }

  // サムネイル取得
  $(".l-gnav-body__list--item").on("mouseover touchend", function () {
    var dataUrl01 = $(this).attr("data-url-01");
    var dataUrl02 = $(this).attr("data-url-02");
    var dataStyle01 = $(this).attr("data-style-01");
    var dataStyle02 = $(this).attr("data-style-02");
    $("#main-thumb-01").attr({ src: dataUrl01, class: dataStyle01 });
    $("#main-thumb-02").attr({ src: dataUrl02, class: dataStyle02 });
  });

  // //#titleを取得
  let thumb01 = document.getElementById("main-thumb-01");
  let thumb02 = document.getElementById("main-thumb-02");

  document.addEventListener("mousemove", (event) => {
    //X座標(値は適宜調整)
    var x = Math.round((event.pageX / 100) * 10);
    //Y座標(値は適宜調整)
    var y = Math.round((event.pageY / 100) * 10);

    //#titleのX軸・Y軸を設定
    thumb01.style.left = x + "px";
    thumb01.style.top = y + "px";

    thumb02.style.left = -x + "px";
    thumb02.style.top = -y + "px";
  });

  // セレクトボックス
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

  // グローバルナビゲーション
  $(".js-menu").on("click", function () {
    $(this).toggleClass("on");
    if ($(".l-gnav").hasClass("on")) {
      //fullnavが開いている時
      $(".l-gnav").fadeOut();
      $(".l-btn-open, .l-header__logo--off").addClass("on");
      $(".l-btn-close, .l-header__logo--on").removeClass("on");
      setTimeout(function () {
        $(".l-gnav").removeClass("on");
      }, 500);
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

  // logo表示/非表示
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
