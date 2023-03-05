/******************************************************************************************************************************
COMMING SOON PAGE
*******************************************************************************************************************************/
(function ($) {
  /**
   * Set your date here  (YEAR, MONTH (0 for January/11 for December), DAY, HOUR, MINUTE, SECOND)
   * according to the GMT+0 Timezone
   **/
  var launch = new Date(2022, 9, 29, 00, 00);
  /**
   * The script
   **/
  var message = $("#message");
  var days = $("#days");
  var hours = $("#hours");
  var minutes = $("#minutes");
  var seconds = $("#seconds");

  setDate();
  function setDate() {
    var now = new Date();
    if (false) {
      days.html("<h1>0</H1><p>Gun</p>");
      hours.html("<h1>0</h1><p>Saat</p>");
      minutes.html("<h1>0</h1><p>Dakika</p>");
      seconds.html("<h1>0</h1><p>Saniye</p>");
      message.html("SENI HEP SEVECEGIM...");
    } else {
      var s =
        +now.getTimezoneOffset() * 60 +
        (now.getTime() - launch.getTime()) / 1000;
      var d = Math.floor(s / 86400);
      days.html("<h1>" + d + "</h1><p>Gun" + (d > 1 ? "s" : ""), "</p>");
      s -= d * 86400;

      var h = Math.floor(s / 3600);
      hours.html("<h1>" + h + "</h1><p>Saat" + (h > 1 ? "s" : ""), "</p>");
      s -= h * 3600;

      var m = Math.floor(s / 60);
      minutes.html("<h1>" + m + "</h1><p>Dakika" + (m > 1 ? "s" : ""), "</p>");

      s = Math.floor(s - m * 60);
      seconds.html("<h1>" + s + "</h1><p>Saniye" + (s > 1 ? "s" : ""), "</p>");
      setTimeout(setDate, 1000);

      message.html("Git Gide Alisiyorum Sana!");
    }
  }
})(jQuery);
/******************************************************************************************************************************
ANIMATIONS
*******************************************************************************************************************************/
(function ($) {
  "use strict";
  var isMobile = false;
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i)
  ) {
    isMobile = true;
  }
  if (isMobile == true) {
    $("body").removeClass("nomobile");
    $(".animated").removeClass("animated");
  }
  $(function () {
    if (isMobile == false) {
      $("*[data-animated]").addClass("animated");
    }
    function animated_contents() {
      $(".animated:appeared").each(function (i) {
        var $this = $(this),
          animated = $(this).data("animated");

        setTimeout(function () {
          $this.addClass(animated);
        }, 50 * i);
      });
    }
    animated_contents();
    $(window).scroll(function () {
      animated_contents();
    });
  });
})(jQuery);
/******************************************************************************************************************************
SLIDER
*******************************************************************************************************************************/
(function ($) {
  "use strict";
  $("body.nomobile #slider").revolution({
    delay: 9000,
    startheight: 450,
    startwidth: 890,

    thumbWidth: 100,
    thumbHeight: 50,
    thumbAmount: 5,

    onHoverStop: "on",
    hideThumbs: 200,
    navigationType: "bullet",
    navigationStyle: "round",
    navigationArrows: "none",

    touchenabled: "on",

    navOffsetHorizontal: 0,
    navOffsetVertical: 80,
    shadow: undefined,
    fullWidth: "on",
    fullScreen: "on",
  });
})(jQuery);
/******************************************************************************************************************************
BOOTSTRAP
*******************************************************************************************************************************/
(function ($) {
  "use strict";
  $("[data-rel=tooltip]").tooltip();
  $(".alert").alert();
})(jQuery);
/******************************************************************************************************************************
PROGRESS BAR
*******************************************************************************************************************************/
(function ($) {
  "use strict";
  $("a.btn-progress").click(function () {
    $("#bar-container").slideToggle();
  });
})(jQuery);
