var windowWidth = $(window).width();
var windowSm = 768;

// プログレスバー
window.addEventListener("load", function () {
  document.getElementById("wrapper").onscroll = function () {
    if (windowWidth > windowSm) {
      getTheScrollPosition(this);
    }
  };
});

window.addEventListener("load", function () {
  // オープニング
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

function getTheScrollPosition($event) {
  var outer = $(".js-scroll"),
    inner = $(".js-scroll-inner"),
    hWin = $(window).height(),
    hDoc = $(document).height(),
    scrollValue = $(window).scrollTop(),
    hBack,
    wRef,
    hFront,
    scrollineVal;

  scrollineVal = (scrollValue / (hDoc - hWin)) * 100;
  hBack = wRef = hWin;
  hFront = scrollineVal;

  outer.css({
    height: hBack + "px",
  });
  inner.css({
    height: hFront + "%",
  });
  if (scrollineVal >= wRef) {
    self.params.scrollEnd();
  }
}

$(function () {
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
    $(this).siblings().removeClass("is-active");
    $(this).siblings().children().removeClass("is-open");
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

  $(".js-form-list01 li").on("click", function () {
    var dataForm01 = $(this).attr("data-form-01");
    $(this).siblings().removeClass("is-active");
    $(".js-form-jobs").text(dataForm01);
    $(this).addClass("is-active");
    $(".js-form-jobs").addClass("is-select");
  });

  $(".js-form-list02 li").on("click", function () {
    var dataForm02 = $(this).attr("data-form-02");
    $(this).siblings().removeClass("is-active");
    $(".js-form-place").text(dataForm02);
    $(this).addClass("is-active");
    $(".js-form-place").addClass("is-select");
  });

  // グローバルナビゲーション
  $(".js-menu").on("click", function () {
    $(this).toggleClass("on");
    if ($(".l-gnav").hasClass("on")) {
      //fullnavが開いている時
      $(".l-gnav").fadeOut();
      if (windowWidth > windowSm) {
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
      if (windowWidth > windowSm) {
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
