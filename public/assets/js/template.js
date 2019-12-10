(function($) {
  "use strict";
  $(function() {
    var body = $("body");
    var contentWrapper = $(".content-wrapper");
    var scroller = $(".container-scroller");
    var footer = $(".footer");
    var sidebar = $(".sidebar");

    //Close other submenu in sidebar on opening any

    sidebar.on("show.bs.collapse", ".collapse", function() {
      sidebar.find(".collapse.show").collapse("hide");
    });

    //Change sidebar and content-wrapper height
    applyStyles();

    function applyStyles() {
      //Applying perfect scrollbar
      if (!body.hasClass("rtl")) {
        if ($(".settings-panel .tab-content .tab-pane.scroll-wrapper").length) {
          const settingsPanelScroll = new PerfectScrollbar(
            ".settings-panel .tab-content .tab-pane.scroll-wrapper"
          );
        }
        if ($(".chats").length) {
          const chatsScroll = new PerfectScrollbar(".chats");
        }
        if (body.hasClass("sidebar-fixed")) {
          var fixedSidebarScroll = new PerfectScrollbar("#sidebar .nav");
        }
      }
    }

    $('[data-toggle="minimize"]').on("click", function() {
      if (
        body.hasClass("sidebar-toggle-display") ||
        body.hasClass("sidebar-absolute")
      ) {
        body.toggleClass("sidebar-hidden");
      } else {
        body.toggleClass("sidebar-icon-only");
      }
    });

    //checkbox and radios
    $(".form-check label,.form-radio label").append(
      '<i class="input-helper"></i>'
    );

    //Horizontal menu in mobile
    $('[data-toggle="horizontal-menu-toggle"]').on("click", function() {
      $(".horizontal-menu .bottom-navbar").toggleClass("header-toggled");
    });
    // Horizontal menu navigation in mobile menu on click
    var navItemClicked = $(".horizontal-menu .page-navigation >.nav-item");
    navItemClicked.on("click", function(event) {
      if (window.matchMedia("(max-width: 991px)").matches) {
        if (!$(this).hasClass("show-submenu")) {
          navItemClicked.removeClass("show-submenu");
        }
        $(this).toggleClass("show-submenu");
      }
    });

    /* Fix the bottom navbar to top on scrolling */
    var navbarStickyPoint = $(".bottom-navbar").offset().top;
    $(window).scroll(function() {
      if (window.matchMedia("(min-width: 992px)").matches) {
        var header = $(".horizontal-menu");
        if ($(window).scrollTop() > navbarStickyPoint) {
          $(header).addClass("fixed-on-scroll");
        } else {
          $(header).removeClass("fixed-on-scroll");
        }
      }
    });
  });
})(jQuery);
