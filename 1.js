function _0xae85x1d(t, e) {
    for (var i = 0; i < t[e].link.length; i++)
        if ("alternate" == t[e].link[i].rel) {
            var a = t[e].link[i].href;
            break;
        }
    return a;
}
function _0xae85x21(t, e, i) {
    return '<a href="' + i + '">' + t[e].title.$t + "</a>";
}
function _0xae85x24(t, e) {
    return t[e].author[0].name.$t, "";
}
function _0xae85x25(t, e) {
    var i = t[e].published.$t,
        t = i.substring(0, 4),
        e = i.substring(5, 7);
    return '<span class="post-date">' + i.substring(8, 10) + " " + monthFormat[parseInt(e, 10) - 1] + " " + t + "</span>";
}
function _0xae85x2b(t, e) {
    var i,
        a,
        s,
        n = t[e].title.$t;
    return (
        "media$thumbnail" in t[e]
            ? ((i = (e = t[e].media$thumbnail.url).replace("=s72-c", "=w640").replace("/s72-c", "/w640")),
              (a = ("=s72-c", "=w280").replace("/s72-c", "/w280")),
              (s = e.replace("=s72-c", "=w100").replace("/s72-c", "/w100")),
              e.match("img.youtube.com") && ((i = e.replace("/default.", "/hqdefault.")), (a = e.replace("/default.", "/mqdefault.")), (s = e)))
            : ((i = o = validURL(t[e].media$thumbnail.url) ? o : no_image_url), (a = noThumbnail.replace("/s680", "/w280")), (s = noThumbnail.replace("/s680", "/w100"))),
        [
            '<img class="post-thumb" alt="' + n + '" src="https://cdn.jsdelivr.net/gh/Rid-1/ostad@main/background.png" data-original="' + i + '"/>',
            '<img class="post-thumb" alt="' + n + '" src="https://cdn.jsdelivr.net/gh/Rid-1/ostad@main/background.png" data-original="' + a + '"/>',
            '<img class="post-thumb" alt="' + n + '" src="https://cdn.jsdelivr.net/gh/Rid-1/ostad@main/background.png" data-original="' + s + '"/>',
        ]
    );
}
function _0xae85x31(t, e) {
    return (e = t[e].summary.$t), '<p class="post-snippet">' + $("<div>").html(e).text().trim().substr(0, 70) + "…</p>";
}
function _0xae85x34(h, m, t, p) {
    if (m.match("mega-menu") || m.match("hot-posts") || m.match("feat-big") || m.match("col-left") || m.match("col-right") || m.match("grid-small") || m.match("grid-big") || m.match("post-list") || m.match("related")) {
        var e = "";
        if ("recent" == p) e = "/feeds/posts/default?alt=json-in-script&max-results=" + t;
        else if ("random" == p) e = "/feeds/posts/default?max-results=" + t + "&start-index=" + (Math.floor(Math.random() * t) + 1) + "&alt=json-in-script";
        else {
            if ("#mycontent:visible" == p) return;
            e = "/feeds/posts/default/-/" + p + "?alt=json-in-script&max-results=" + t;
        }
        $.ajax({
            url: e,
            type: "get",
            dataType: "jsonp",
            beforeSend: function () {
                m.match("hot-posts") && h.html('<div class="hot-loader"/>').parent().addClass("show-hot");
            },
            success: function (t) {
                var e;
                if (
                    (m.match("mega-menu")
                        ? (e = '<ul class="mega-menu-inner">')
                        : m.match("hot-posts")
                        ? (e = '<ul class="hot-posts">')
                        : m.match("feat-big")
                        ? (e = '<ul class="feat-big">')
                        : m.match("col-right") || m.match("col-left")
                        ? (e = '<ul class="feat-col">')
                        : m.match("grid-small")
                        ? (e = '<ul class="grid-small">')
                        : m.match("grid-big")
                        ? (e = '<ul class="grid-big">')
                        : m.match("post-list")
                        ? (e = '<ul class="custom-widget">')
                        : m.match("related") && (e = '<ul class="related-posts">'),
                    null != (t = t.feed.entry))
                ) {
                    for (var i = 0, a = t; i < a.length; i++) {
                        var s = _0xae85x1d(a, i),
                            n = _0xae85x21(a, i, s),
                            o = _0xae85x2b(a, i),
                            r = _0xae85x24(a, i),
                            l = _0xae85x25(a, i),
                            c = _0xae85x31(a, i),
                            d = "";
                        m.match("mega-menu")
                            ? (d +=
                                  '<div class="mega-item item-' +
                                  i +
                                  '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' +
                                  s +
                                  '">#mycontent:visible</a></div><h2 class="post-title">' +
                                  n +
                                  '</h2><div class="post-meta">' +
                                  l +
                                  "</div></div></div>")
                            : m.match("hot-posts")
                            ? (d +=
                                  0 == i || 1 == i
                                      ? '<li class="hot-item item-' +
                                        i +
                                        '"><div class="hot-item-inner"><a class="post-image-link" href="' +
                                        s +
                                        '">' +
                                        o[0] +
                                        '</a><div class="post-info"><div class="post-meta">' +
                                        r +
                                        l +
                                        '</div><h2 class="post-title">' +
                                        n +
                                        "</h2></div></div></li>"
                                      : '<li class="hot-item item-' +
                                        i +
                                        '"><div class="hot-item-inner"><a class="post-image-link" href="' +
                                        s +
                                        '">' +
                                        o[0] +
                                        '</a><div class="post-info"><div class="post-meta">' +
                                        l +
                                        '</div><h2 class="post-title">' +
                                        n +
                                        "</h2></div></div></li>")
                            : m.match("feat-big") || m.match("col-left") || m.match("col-right")
                            ? (d +=
                                  0 == i
                                      ? '<li class="feat-item item-big item-' +
                                        i +
                                        '"><div class="feat-inner"><a class="post-image-link" href="' +
                                        s +
                                        '">' +
                                        o[0] +
                                        '</a><div class="post-info"><h2 class="post-title">' +
                                        n +
                                        '</h2><div class="post-meta">' +
                                        r +
                                        l +
                                        "</div>" +
                                        c +
                                        "</div></div></li>"
                                      : '<li class="feat-item item-small item-' +
                                        i +
                                        '"><a class="post-image-link" href="' +
                                        s +
                                        '">' +
                                        o[0] +
                                        '</a><div class="post-info"><h2 class="post-title">' +
                                        n +
                                        '</h2><div class="post-meta">' +
                                        l +
                                        "</div></div></li>")
                            : m.match("grid-small")
                            ? (d +=
                                  '<li class="feat-item item-small item-' +
                                  i +
                                  '"><div class="post-image-wrap"><a class="post-image-link" href="' +
                                  s +
                                  '">' +
                                  o[0] +
                                  '</a></div><div class="post-info"><h2 class="post-title">' +
                                  n +
                                  '</h2><div class="post-meta">' +
                                  l +
                                  "</div></div></li>")
                            : m.match("grid-big")
                            ? (d +=
                                  '<li class="feat-item item-big item-' +
                                  i +
                                  '"><div class="feat-inner"><a class="post-image-link" href="' +
                                  s +
                                  '">' +
                                  o[0] +
                                  '</a><div class="post-info"><h2 class="post-title">' +
                                  n +
                                  '</h2><div class="post-meta">' +
                                  r +
                                  l +
                                  "</div></div></div></li>")
                            : m.match("post-list")
                            ? (d += '<li class="item-' + i + '"><a class="post-image-link" href="' + s + '">' + o[0] + '</a><h2 class="post-title">' + n + '</h2><div class="post-meta ">' + l + "</div></div></li>")
                            : m.match("related") &&
                              (d +=
                                  '<li class="related-item item-' +
                                  i +
                                  '"><div class="post-image-wrap"><a class="post-image-link" href="' +
                                  s +
                                  '">' +
                                  o[0] +
                                  '</a></div><h2 class="post-title">' +
                                  n +
                                  '</h2><div class="post-meta">' +
                                  l +
                                  "</div></li>"),
                            (e += d);
                    }
                    e += "</ul>";
                } else e = '<ul class="no-posts"> <i class="fa fa-frown-o"/> معذرة! لاتوجد منشورات هنا.</ul>';
                m.match("mega-menu")
                    ? (h.addClass("has-sub mega-menu").append(e),
                      h.find("a:first").attr("href", function (t, e) {
                          return "recent" == p || "random" == p ? e.replace(e, "/search/?&max-results=" + postPerPage) : e.replace(e, "/search/label/" + p);
                      }))
                    : m.match("hot-posts")
                    ? h.html(e).parent().addClass("show-hot")
                    : m.match("feat-big") || m.match("col-left") || m.match("col-right") || m.match("grid-small") || m.match("grid-big")
                    ? (h
                          .parent()
                          .find(".widget-title h3")
                          .html('<a href="/search/label/' + p + '">' + h.parent().find(".widget-title h3").text() + "</a>"),
                      (m.match("col-left") || m.match("col-right")) && (m.match("col-right") && h.parent().addClass("col-right"), h.parent().addClass("col-width")),
                      h.html(e).parent().addClass("show-widget"))
                    : h.html(e);
            },
        });
    }
}
