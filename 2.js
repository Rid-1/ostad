!(function (u) {
    u.fn.theiaStickySidebar = function (t) {
        var e, i, a, s;
        function n(t, e) {
            return (
                !0 === t.initialized ||
                (!(u("body").width() < t.minWidth) &&
                    (((m = t).initialized = !0),
                    0 === u("#theia-sticky-sidebar-stylesheet-" + m.namespace).length &&
                        u("head").append(u('<style id="theia-sticky-sidebar-stylesheet-' + m.namespace + '">.theiaStickySidebar:after {content: ""; display : table; clear: both;}</style>')),
                    e.each(function () {
                        var i,
                            t = {};
                        (t.sidebar = u(this)),
                            (t.options = m || {}),
                            (t.container = u(t.options.containerSelector)),
                            0 == t.container.length && (t.container = t.sidebar.parent()),
                            t.sidebar.parents().css("-webkit-transform", "none"),
                            t.sidebar.css({ position: t.options.defaultPosition, overflow: "visible", "-webkit-box-sizing": "border-box", "-moz-box-sizing": "border-box", "box-sizing": "border-box" }),
                            (t.stickySidebar = t.sidebar.find(".theiaStickySidebar")),
                            0 == t.stickySidebar.length &&
                                ((i = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i),
                                t.sidebar
                                    .find("script")
                                    .filter(function (t, e) {
                                        return 0 === e.type.length || e.type.match(i);
                                    })
                                    .remove(),
                                (t.stickySidebar = u("<div>").addClass("theiaStickySidebar").append(t.sidebar.children())),
                                t.sidebar.append(t.stickySidebar)),
                            (t.marginBottom = parseInt(t.sidebar.css("margin-bottom"))),
                            (t.paddingTop = parseInt(t.sidebar.css("padding-top"))),
                            (t.paddingBottom = parseInt(t.sidebar.css("padding-bottom")));
                        var e,
                            a,
                            s,
                            n = t.stickySidebar.offset().top,
                            o = t.stickySidebar.outerHeight();
                        function h() {
                            (t.fixedScrollTop = 0), t.sidebar.css({ "min-height": "1px" }), t.stickySidebar.css({ position: "static", width: "", transform: "none" });
                        }
                        t.stickySidebar.css("padding-top", 1),
                            t.stickySidebar.css("padding-bottom", 1),
                            (n -= t.stickySidebar.offset().top),
                            (o = t.stickySidebar.outerHeight() - o - n),
                            0 == n ? (t.stickySidebar.css("padding-top", 0), (t.stickySidebarPaddingTop = 0)) : (t.stickySidebarPaddingTop = 1),
                            0 == o ? (t.stickySidebar.css("padding-bottom", 0), (t.stickySidebarPaddingBottom = 0)) : (t.stickySidebarPaddingBottom = 1),
                            (t.previousScrollTop = null),
                            (t.fixedScrollTop = 0),
                            h(),
                            (t.onScroll = function (t) {
                                var e, i, a, s, n, o, r, l, c, d;
                                t.stickySidebar.is(":visible") &&
                                    (u("body").width() < t.options.minWidth || (t.options.disableOnResponsiveLayouts && t.sidebar.outerWidth("none" == t.sidebar.css("float")) + 50 > t.container.width())
                                        ? h()
                                        : ((d = "static"),
                                          (c = u(document).scrollTop()) >= t.sidebar.offset().top + (t.paddingTop - t.options.additionalMarginTop) &&
                                              ((i = t.paddingTop + m.additionalMarginTop),
                                              (n = t.paddingBottom + t.marginBottom + m.additionalMarginBottom),
                                              (a = t.sidebar.offset().top),
                                              (s =
                                                  t.sidebar.offset().top +
                                                  ((o = t.container),
                                                  (r = o.height()),
                                                  o.children().each(function () {
                                                      r = Math.max(r, u(this).height());
                                                  }),
                                                  r)),
                                              (e = 0 + m.additionalMarginTop),
                                              (o = t.stickySidebar.outerHeight() + i + n < u(window).height() ? e + t.stickySidebar.outerHeight() : u(window).height() - t.marginBottom - t.paddingBottom - m.additionalMarginBottom),
                                              (i = a - c + t.paddingTop),
                                              (n = s - c - t.paddingBottom - t.marginBottom),
                                              (a = t.stickySidebar.offset().top - c),
                                              (s = t.previousScrollTop - c),
                                              "fixed" == t.stickySidebar.css("position") && "modern" == t.options.sidebarBehavior && (a += s),
                                              "stick-to-top" == t.options.sidebarBehavior && (a = m.additionalMarginTop),
                                              "stick-to-bottom" == t.options.sidebarBehavior && (a = o - t.stickySidebar.outerHeight()),
                                              (a = 0 < s ? Math.min(a, e) : Math.max(a, o - t.stickySidebar.outerHeight())),
                                              (a = Math.max(a, i)),
                                              (a = Math.min(a, n - t.stickySidebar.outerHeight())),
                                              (d =
                                                  (!(n = t.container.height() == t.stickySidebar.outerHeight()) && a == e) || (!n && a == o - t.stickySidebar.outerHeight())
                                                      ? "fixed"
                                                      : c + a - t.sidebar.offset().top - t.paddingTop <= m.additionalMarginTop
                                                      ? "static"
                                                      : "absolute")),
                                          "fixed" == d
                                              ? ((l = u(document).scrollLeft()),
                                                t.stickySidebar.css({
                                                    position: "fixed",
                                                    width: p(t.stickySidebar) + "px",
                                                    transform: "translateY(" + a + "px)",
                                                    left: t.sidebar.offset().left + parseInt(t.sidebar.css("padding-left")) - l + "px",
                                                    top: "0px",
                                                }))
                                              : "absolute" == d
                                              ? ((l = {}),
                                                "absolute" != t.stickySidebar.css("position") &&
                                                    ((l.position = "absolute"), (l.transform = "translateY(" + (c + a - t.sidebar.offset().top - t.stickySidebarPaddingTop - t.stickySidebarPaddingBottom) + "px)"), (l.top = "0px")),
                                                (l.width = p(t.stickySidebar) + "px"),
                                                (l.left = ""),
                                                t.stickySidebar.css(l))
                                              : "static" == d && h(),
                                          "static" != d && 1 == t.options.updateSidebarHeight && t.sidebar.css({ "min-height": t.stickySidebar.outerHeight() + t.stickySidebar.offset().top - t.sidebar.offset().top + t.paddingBottom }),
                                          (t.previousScrollTop = c)));
                            }),
                            t.onScroll(t),
                            u(document).on(
                                "scroll." + t.options.namespace,
                                ((e = t),
                                function () {
                                    e.onScroll(e);
                                })
                            ),
                            u(window).on(
                                "resize." + t.options.namespace,
                                ((a = t),
                                function () {
                                    a.stickySidebar.css({ position: "static" }), a.onScroll(a);
                                })
                            ),
                            "undefined" != typeof ResizeSensor &&
                                new ResizeSensor(
                                    t.stickySidebar[0],
                                    ((s = t),
                                    function () {
                                        s.onScroll(s);
                                    })
                                );
                    }),
                    1))
            );
            var m;
        }
        function p(t) {
            var e;
            try {
                e = t[0].getBoundingClientRect().width;
            } catch (t) {}
            return void 0 === e && (e = t.width()), e;
        }
        return (
            ((t = u.extend(
                { containerSelector: "", additionalMarginTop: 0, additionalMarginBottom: 0, updateSidebarHeight: !0, minWidth: 0, disableOnResponsiveLayouts: !0, sidebarBehavior: "modern", defaultPosition: "relative", namespace: "TSS" },
                t
            )).additionalMarginTop = parseInt(t.additionalMarginTop) || 0),
            (t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0),
            n((t = t), this) ||
                (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),
                u(document).on(
                    "scroll." + t.namespace,
                    ((a = t),
                    (s = this),
                    function (t) {
                        n(a, s) && u(this).unbind(t);
                    })
                ),
                u(window).on(
                    "resize." + t.namespace,
                    ((e = t),
                    (i = this),
                    function (t) {
                        n(e, i) && u(this).unbind(t);
                    })
                )),
            this
        );
    };
})(jQuery),
    $(".archive-dropdown-menu").on("change", function () {
        0 < this.value.length && (window.location.href = this.value);
    }),
    $("#main-menu").each(function () {
        for (var t = $(this).find(".LinkList ul > li").children("a"), e = t.length, i = 0; i < e; i++) {
            var a,
                s = t.eq(i),
                n = s.text();
            "_" !== n.charAt(0) &&
                "_" ===
                    t
                        .eq(i + 1)
                        .text()
                        .charAt(0) &&
                (a = s.parent()).append('<ul class="sub-menu m-sub"/>'),
                "_" === n.charAt(0) && (s.text(n.replace("_", "")), s.parent().appendTo(a.children(".sub-menu")));
        }
        for (i = 0; i < e; i++) {
            var o,
                r = t.eq(i),
                l = r.text();
            "_" !== l.charAt(0) &&
                "_" ===
                    t
                        .eq(i + 1)
                        .text()
                        .charAt(0) &&
                (o = r.parent()).append('<ul class="sub-menu2 m-sub"/>'),
                "_" === l.charAt(0) && (r.text(l.replace("_", "")), r.parent().appendTo(o.children(".sub-menu2")));
        }
        $("#main-menu ul li ul").parent("li").addClass("has-sub"),
            $("#main-menu-nav > li > a").each(function () {
                var t = $(this);
                "homepage" == t.attr("href").trim().toLowerCase() && t.attr("href", "/").parent("li").addClass("li-home");
            }),
            $("#main-menu .widget").addClass("show-menu");
    }),
    $("#main-menu-nav").clone().appendTo(".mobile-menu"),
    $(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),
    $(".mobile-menu ul > li a").each(function () {
        var t = $(this),
            e = t.attr("href").trim(),
            i = e.toLowerCase();
        e.split("/"), i.match("mega-menu") && t.attr("href", "/search/label/length");
    }),
    $(".slide-menu-toggle").on("click", function () {
        $("body").toggleClass("nav-active");
    }),
    $(".mobile-menu ul li .submenu-toggle").on("click", function (t) {
        $(this).parent().hasClass("has-sub") && (t.preventDefault(), ($(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub") : $(this).parent().addClass("show").children(".m-sub")).slideToggle(170));
    }),
    $(".show-search, .show-mobile-search").on("click", function () {
        $("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus();
    }),
    $(".hide-search, .hide-mobile-search").on("click", function () {
        $("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur();
    }),
    $(".Label a, a.b-label").attr("href", function (t, e) {
        return e.replace(e, e);
    }),
    $(".avatar-image-container img").attr("src", function (t, e) {
        return (e = (e = e.replace("/s35-c/", "/s45-c/")).replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png"));
    }),
    $(".index-post .post-image-link img").attr("data-original", function (t, e) {
        return (e = e.replace(
            "https://blogger.googleusercontent.com/img/a/AVvXsEjJbehv-wL6IQHhNiw9YdHtmXQg9gFpQy9pVyLNZLMwfzj9KcVH414pheG2unocwZvKqwY4CHZt9QAtn4tg4gECRXluYT6huOFUVlpgaEtmk1Ha83XVNh8RpN6Z4S_8BObmHi9qlbiwIV5BYNvS1JXcn7z7iySbLUqXM5tLCUwhjBxLGH2zzWVRP7As=s16000",
            noThumbnail
        ));
    }),
    $(".author-description a").each(function () {
        $(this).attr("target", "_blank");
    }),
    $(".post-body strike").each(function () {
        var t = $(this),
            e = t.text();
        e.match("left-sidebar") && t.replaceWith("<style>.item #main-wrapper{float:right;padding:0 0 0 25px}.item #sidebar-wrapper{float:left}</style>"),
            e.match("right-sidebar") && t.replaceWith("<style>.item #main-wrapper{float:left;padding:0 25px 0 0}.item #sidebar-wrapper{float:right}</style>"),
            e.match("full-width") && t.replaceWith("<style>.item #main-wrapper{width:100%;padding:0}.item #sidebar-wrapper{display:none}</style>");
    }),
    $("#main-wrapper, #sidebar-wrapper").each(function () {
        1 == fixedSidebar && $(this).theiaStickySidebar({ additionalMarginTop: 25, additionalMarginBottom: 25 });
    }),
    $(".back-top").each(function () {
        var t = $(this);
        $(window).on("scroll", function () {
            100 <= $(this).scrollTop() ? t.fadeIn(250) : t.fadeOut(250);
        }),
            t.click(function () {
                $("html, body").animate({ scrollTop: 0 }, 500);
            });
    }),
    $("#main-menu #main-menu-nav li").each(function () {
        var t = $(this),
            e = t.find("a").attr("href").trim();
        _0xae85x34(t, e.toLowerCase(), 5, e.split("/")[0]);
    }),
    $("#hot-section .widget-content").each(function () {
        var t = $(this),
            e = t.text().trim();
        _0xae85x34(t, e.toLowerCase(), 5, e.split("/")[0]);
    }),
    $(".featured-posts .widget-content").each(function () {
        var t,
            e = $(this),
            i = (a = e.text().trim()).toLowerCase(),
            a = a.split("/"),
            a = i.match("feat-big") ? ((t = 5), a[0]) : ((t = a[0]), a[1]);
        _0xae85x34(e, i, t, a);
    }),
    $(".common-widget .widget-content").each(function () {
        var t = $(this),
            e = t.text().trim();
        _0xae85x34(t, e.toLowerCase(), (e = e.split("/"))[0], e[1]);
    }),
    $(".related-ready").each(function () {
        var t = $(this),
            e = t.find(".related-tag").data("label");
        _0xae85x34(t, "related", 6, e);
    }),
    $(".show-comments").on("click", function () {
        $(this).css("display", "none"), $(".blog-post-comments").css("display", "block");
    }),
    $(".blog-post-comments").each(function () {
        var t,
            e = commentsSystem,
            i = (disqus_blogger_current_url, $(location).attr("href"), "comments-system-" + e);
        "blogger" == e ||
            ("disqus" == e
                ? (((t = document.createElement("script")).type = "text/javascript"),
                  (t.async = !0),
                  (t.src = "//" + disqusShortname + ".disqus.com/embed.js"),
                  (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t),
                  $("#comments, #gpluscomments").remove(),
                  $(this).append('<div id="disqus_thread"/>').addClass(i).show())
                : "facebook" == e
                ? $("#comments, #gpluscomments").remove()
                : "hide" == e && $(this).hide());
    }),
    $(function () {
        $("body .c-year").text(new Date().getFullYear());
    });
var postbody,
    text_month = ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "اكتوبر", "نونبر", "دجنبر"],
    no_image_url =
        "https://blogger.googleusercontent.com/img/a/AVvXsEjJbehv-wL6IQHhNiw9YdHtmXQg9gFpQy9pVyLNZLMwfzj9KcVH414pheG2unocwZvKqwY4CHZt9QAtn4tg4gECRXluYT6huOFUVlpgaEtmk1Ha83XVNh8RpN6Z4S_8BObmHi9qlbiwIV5BYNvS1JXcn7z7iySbLUqXM5tLCUwhjBxLGH2zzWVRP7As=s16000",
    static_page_text = $.trim($(".static_page .post-body").text());
function validURL(t) {
    return void 0 !== t;
}
function mainMenu() {
    var e = $(".header-menu #main-menu-nav").width(),
        i = 0,
        a = new Array();
    $(".header-menu #main-menu-nav > li").each(function () {
        i += $(this).width();
        var t = null !== $(this).next().width() ? $(this).next().width() : 0;
        e - 48 < i + t && !1 === $(this).hasClass("menu-show-more") && a.push($(this));
    }),
        e < i &&
            ($(".header-menu #main-menu-nav > .menu-show-more").length || $(".header-menu #main-menu-nav").append('<li class="menu-show-more has-sub"><a href="#" role="menuitem"></a><ul class="sub-menu m-sub"></ul></li>'),
            a.length &&
                $(".header-menu #main-menu-nav > .menu-show-more").length &&
                $(a).each(function () {
                    $(this).css("display:none;"), $(".header-menu #main-menu-nav > .menu-show-more > .sub-menu").append($(this));
                }));
}
function repositionSubMenu() {
    $(".header-menu .menu-show-more > .sub-menu").each(function () {
        var t = $(".header-menu #main-menu")[0].getBoundingClientRect().left,
            e = $(".header-menu #main-menu")[0].getBoundingClientRect().top + $(".header-menu #main-menu").height();
        $(this).css({ position: "fixed", width: $(".header-menu #main-menu").width() + "px", left: t + "px", top: e + "px", right: "unset" }),
            $(this)
                .find("li")
                .each(function () {
                    $(this).css({ float: "right" });
                });
    });
}
"[sitemap]" === static_page_text &&
    ((postbody = $(".static_page .post-body")),
    $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function (t) {
            for (var e = [], i = 0; i < t.feed.category.length; i++) e.push(t.feed.category[i].term);
            (e = e.join("/")), postbody.html('<div class="siteLabel"></div>'), $(".static_page .post-body .siteLabel").text(e);
            var a = $(".siteLabel").text().split("/"),
                s = "";
            for (get = 0; get < a.length; ++get) s += "<span>" + a[get] + "</span>";
            $(".siteLabel").html(s),
                $(".siteLabel span").each(function () {
                    var c = $(this),
                        d = $(this).text();
                    $.ajax({
                        url: "/feeds/posts/default/-/" + d + "?alt=json-in-script",
                        type: "get",
                        dataType: "jsonp",
                        success: function (t) {
                            for (var e = "", i = '<div class="mapa">', a = 0; a < 1; a++) {
                                for (var s = 0; s < t.feed.entry[a].link.length; s++)
                                    if ("alternate" == t.feed.entry[a].link[s].rel) {
                                        e = t.feed.entry[a].link[s].href;
                                        break;
                                    }
                                var n = t.feed.entry[a].title.$t,
                                    o = (t.feed.entry[a].author[0].name.$t, t.feed.entry[a].published.$t),
                                    r = o.substring(0, 4),
                                    l = o.substring(5, 7),
                                    l = o.substring(8, 10) + " " + text_month[parseInt(l - 1, 10)] + " " + r,
                                    r = t.feed.entry[a].media$thumbnail.url;
                                i +=
                                    '<div class="mapapost"><div class="map-thumb"><div class="map-img"><a href="' +
                                    e +
                                    '" style="background:url(' +
                                    (validURL((r = $("<div>").html(r).find("img:first-child").attr("src"))) ? r : no_image_url) +
                                    ') no-repeat center center;background-size: cover"/></div></div><h3 class="wrp-titulo"><a href="' +
                                    e +
                                    '" target="_blank">' +
                                    n +
                                    '</a></h3><div class="map-meta"><span class="p-date">' +
                                    l +
                                    "</span></div></div>";
                            }
                            (i += "</div>"),
                                c.replaceWith('<div class="mapasite"><h2>' + d + '<span class="botao"><i class="fa fa-plus-circle"></i></span></h2>' + i + "</div>"),
                                $(document).on("click", ".mapasite h2", function () {
                                    $(this).parent(".mapasite").addClass("active"), $(this).find(".botao .fa").removeClass("fa-plus-circle").addClass("fa-minus-circle");
                                }),
                                $(document).on("click", ".mapasite.active h2", function () {
                                    $(this).parent(".mapasite").removeClass("active"), $(this).find(".botao .fa").addClass("fa-plus-circle").removeClass("fa-minus-circle");
                                });
                        },
                    });
                });
        },
    })),
    $(document).ready(mainMenu),
    $(window).resize(mainMenu),
    $(document).ready(repositionSubMenu),
    $(window).scroll(repositionSubMenu),
    $(window).resize(repositionSubMenu),
    $(".header-menu .menu-show-more").hover(repositionSubMenu);
var txtSize = 100,
    step = 3;
function biggerTxtSize() {
    txtSize < 200 &&
        ((txtSize += 10),
        $(".post-body, .post-body *").each(function () {
            var t = parseFloat($(this).css("font-size"));
            $(this).css("font-size", t + step);
        })),
        disableBtns();
}
function smallerTxtSize() {
    100 < txtSize &&
        ((txtSize -= 10),
        $(".post-body, .post-body *").each(function () {
            var t = parseFloat($(this).css("font-size"));
            $(this).css("font-size", t - step);
        })),
        disableBtns();
}
function disableBtns() {
    200 == txtSize ? $(".font-size-changer .bigger-font-size").addClass("disabled") : $(".font-size-changer .bigger-font-size").removeClass("disabled"),
        100 == txtSize ? $(".font-size-changer .smaller-font-size").addClass("disabled") : $(".font-size-changer .smaller-font-size").removeClass("disabled");
}
function copyFunction() {
    var t = $("#getlink")[0];
    t.select(),
        document.execCommand("copy"),
        t.setSelectionRange(0, 99999),
        navigator.clipboard.writeText(t.value),
        (document.getElementById("copy-notif").innerHTML = "<span>تم نسخ الرابط بنجاح!</span>"),
        $("#copy-notif").css("display", "block"),
        setTimeout(function () {
            $("#copy-notif").css("display", "none");
        }, 1500);
}
$(document).ready(function () {
    $(".post-body").length &&
        $(".post-body").before(
            "<div class='font-size-changer'><button type='button' class='bigger-font-size' aria-label='bigger'><i class='fa fa-search-plus'></i></button><button type='button' class='smaller-font-size disabled' aria-label='smaller'><i class='fa fa-search-minus'></i></button></div>"
        ),
        $(".post-body, .post-body *").each(function () {
            $(this).css("font-size", $(this).css("font-size"));
        }),
        $(".font-size-changer").on("click", ".bigger-font-size", biggerTxtSize),
        $(".font-size-changer").on("click", ".smaller-font-size", smallerTxtSize);
}),
    setInterval(function () {
        $(".cookie-choices-info").show();
    }, 5e3),
    (cookieOptions = { msg: "يستخدم موقع أستاذ ملفات تعريف الارتباط.", link: "/p/privacy-policy.html", close: "إغلاق", learn: "اقرأ المزيد" }),
    (document.onkeydown = function (t) {
        return !t.ctrlKey || (67 !== t.keyCode && 79 !== t.keyCode && 83 !== t.keyCode && 86 !== t.keyCode && 85 !== t.keyCode && 117 !== t.keyCode);
    }),
    $(document).keypress("u", function (t) {
        return !t.ctrlKey;
    }),
    $(document).on("scroll", function () {
        $(".header-ads .widget .widget-content").has("iframe").length && $(".header-ads").attr("style", "height: auto !important;");
    }),
    $(document).ready(function () {
        $("img, .post-body a[href]:has(img)")
            .css({ cursor: "default", "pointer-events": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-o-user-select": "none", "user-select": "none" })
            .click(function () {
                return !1;
            });
    }),
    $("a[href^=https]").each(function () {
        (this.href.indexOf(location.hostname) < 0 || 0 <= this.href.indexOf(location.hostname + "/p/pl.html")) && $(this).attr({ target: "_blank", rel: "noopener noreferrer nofollow" });
    });
