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

var _ua = (function (u) {
  return {
    Tablet:
      (u.indexOf("windows") != -1 &&
        u.indexOf("touch") != -1 &&
        u.indexOf("tablet pc") == -1) ||
      u.indexOf("ipad") != -1 ||
      (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) ||
      (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) ||
      u.indexOf("kindle") != -1 ||
      u.indexOf("silk") != -1 ||
      u.indexOf("playbook") != -1,
    Mobile:
      (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) ||
      u.indexOf("iphone") != -1 ||
      u.indexOf("ipod") != -1 ||
      (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) ||
      (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) ||
      u.indexOf("blackberry") != -1,
  };
})(window.navigator.userAgent.toLowerCase());

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
  var dataStylePrev01 = "message01";
  var dataStylePrev02 = "message02";

  $(".js-gnav-list").on("mouseover touchend", function () {
    var dataUrl01 = $(this).attr("data-url-01");
    var dataUrl02 = $(this).attr("data-url-02");
    var dataStyle01 = $(this).attr("data-style-01");
    var dataStyle02 = $(this).attr("data-style-02");

    if (dataStyle01 !== dataStylePrev01) {
      //現在表示されているメニューと異なる場合
      $("#main-thumb-01").fadeOut(300, function () {
        $("#main-thumb-01").attr({ src: dataUrl01 }).fadeIn(300);
        $("#main-box-01").attr({ class: dataStyle01 });
        dataStylePrev01 = dataStyle01;
      });
    }
    if (dataStyle02 !== dataStylePrev02) {
      //現在表示されているメニューと異なる場合
      $("#main-thumb-02").fadeOut(300, function () {
        $("#main-thumb-02").attr({ src: dataUrl02 }).fadeIn(300);
        $("#main-box-02").attr({ class: dataStyle02 });
        dataStylePrev02 = dataStyle02;
      });
    }
  });

  // サムネイル移動
  let thumb01 = document.getElementById("main-thumb-01");
  let thumb02 = document.getElementById("main-thumb-02");

  document.addEventListener("mousemove", (event) => {
    //X座標(値は適宜調整)
    var x1 = Math.round((event.pageX / 100) * 8);
    //Y座標(値は適宜調整)
    var y1 = Math.round((event.pageY / 100) * 8);
    //X座標(値は適宜調整)
    var x2 = Math.round((event.pageX / 100) * 5);
    //Y座標(値は適宜調整)
    var y2 = Math.round((event.pageY / 100) * 5);

    //#titleのX軸・Y軸を設定
    thumb01.style.left = -x1 + "px";
    thumb01.style.top = -y1 + "px";

    thumb02.style.left = -x2 + "px";
    thumb02.style.top = -y2 + "px";
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
      if (!_ua.Mobile && !_ua.Tablet) {
        $(".l-btn-open, .l-header__logo--off").addClass("on");
        $(".l-btn-close, .l-header__logo--on").removeClass("on");
      }
      setTimeout(function () {
        $(".l-gnav").removeClass("on");
      }, 500);
    } else {
      //fullnavが閉じている時
      $(".l-gnav").fadeIn();
      setTimeout(function () {
        $(".l-gnav").addClass("on");
      }, 200);
      if (!_ua.Mobile && !_ua.Tablet) {
        $(".l-btn-close, .l-header__logo--on").addClass("on");
        $(".l-btn-open, .l-header__logo--off").removeClass("on");
      }
    }
  });

  // logo表示/非表示
  winScrollTop = 0;
  $(window).on("scroll", function () {
    if (!$(".l-gnav").hasClass("on")) {
      winScrollTop = $(this).scrollTop();
      if (winScrollTop >= 50) {
        $(".l-header__logo").addClass("hide");
      } else {
        $(".l-header__logo").removeClass("hide");
      }
      startPos = winScrollTop;
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
