function _0xae85x1d(t,a){for(var s=0;s<t[a].link.length;s++)if("alternate"==t[a].link[s].rel){var e=t[a].link[s].href;break}return e}function _0xae85x21(t,a,s){return'<a href="'+s+'">'+t[a].title.$t+"</a>"}function _0xae85x24(t,a){return t[a].author[0].name.$t,""}function _0xae85x25(t,a){var s=t[a].published.$t;t=s.substring(0,4),a=s.substring(5,7);return'<span class="post-date">'+s.substring(8,10)+" "+monthFormat[parseInt(a,10)-1]+" "+t+"</span>"}function _0xae85x2b(t,a){var s,e,i,l=t[a].title.$t;return"media$thumbnail"in t[a]?(s=(a=t[a].media$thumbnail.url).replace("=s72-c","=w640").replace("/s72-c-rw","/w640-rw"),e=a.replace("=s72-c","=w280").replace("/s72-c-rw","/w280-rw"),i=a.replace("=s72-c","=w100").replace("/s72-c-rw","/w100-rw"),a.match("img.youtube.com")&&(s=a.replace("/default.","/hqdefault."),e=a.replace("/default.","/mqdefault."),i=a)):(s=o=validURL(t[a].media$thumbnail.url)?o:no_image_url,e=noThumbnail.replace("/s680-rw","/w280-rw"),i=noThumbnail.replace("/s680-rw","/w100-rw")),['<img class="post-thumb" alt="'+l+'" src="https://cdn.jsdelivr.net/gh/Rid-1/ostad/background.png" data-original="'+s+'"/>','<img class="post-thumb" alt="'+l+'" src="https://cdn.jsdelivr.net/gh/Rid-1/ostad/background.png" data-original="'+e+'"/>','<img class="post-thumb" alt="'+l+'" src="https://cdn.jsdelivr.net/gh/Rid-1/ostad/background.png" data-original="'+i+'"/>']}function _0xae85x31(t,a){return a=t[a].summary.$t,'<p class="post-snippet">'+$("<div>").html(a).text().trim().substr(0,70)+"…</p>"}function _0xae85x34(t,a,s,e){if(a.match("mega-menu")||a.match("hot-posts")||a.match("feat-big")||a.match("col-left")||a.match("col-right")||a.match("grid-small")||a.match("grid-big")||a.match("post-list")||a.match("related")){var i="";if("recent"==e)i="/feeds/posts/summary?alt=json-in-script&max-results="+s;else if("random"==e)i="/feeds/posts/summary?max-results="+s+"&start-index="+(Math.floor(Math.random()*s)+1)+"&alt=json-in-script";else{if("#mycontent:visible"==e)return;i="/feeds/posts/summary/-/"+e+"?alt=json-in-script&max-results="+s}$.ajax({url:i,type:"get",dataType:"jsonp",beforeSend:function(){a.match("hot-posts")&&t.html('<div class="hot-loader"/>').parent().addClass("show-hot")},success:function(s){var i;if(a.match("mega-menu")?i='<ul class="mega-menu-inner">':a.match("hot-posts")?i='<ul class="hot-posts">':a.match("feat-big")?i='<ul class="feat-big">':a.match("col-right")||a.match("col-left")?i='<ul class="feat-col">':a.match("grid-small")?i='<ul class="grid-small">':a.match("grid-big")?i='<ul class="grid-big">':a.match("post-list")?i='<ul class="custom-widget">':a.match("related")&&(i='<ul class="related-posts">'),null!=(s=s.feed.entry)){for(var l=0,c=s;l<c.length;l++){var o=_0xae85x1d(c,l),n=_0xae85x21(c,l,o),r=_0xae85x2b(c,l),m=_0xae85x24(c,l),d=_0xae85x25(c,l),h=_0xae85x31(c,l),p="";a.match("mega-menu")?p+='<div class="mega-item item-'+l+'"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="'+o+'">#mycontent:visible</a></div><h2 class="post-title">'+n+'</h2><div class="post-meta">'+d+"</div></div></div>":a.match("hot-posts")?p+=0==l||1==l?'<li class="hot-item item-'+l+'"><div class="hot-item-inner"><a class="post-image-link" href="'+o+'">'+r[0]+'</a><div class="post-info"><div class="post-meta">'+m+d+'</div><h2 class="post-title">'+n+"</h2></div></div></li>":'<li class="hot-item item-'+l+'"><div class="hot-item-inner"><a class="post-image-link" href="'+o+'">'+r[0]+'</a><div class="post-info"><div class="post-meta">'+d+'</div><h2 class="post-title">'+n+"</h2></div></div></li>":a.match("feat-big")||a.match("col-left")||a.match("col-right")?p+=0==l?'<li class="feat-item item-big item-'+l+'"><div class="feat-inner"><a class="post-image-link" href="'+o+'">'+r[0]+'</a><div class="post-info"><h2 class="post-title">'+n+'</h2><div class="post-meta">'+m+d+"</div>"+h+"</div></div></li>":'<li class="feat-item item-small item-'+l+'"><a class="post-image-link" href="'+o+'">'+r[0]+'</a><div class="post-info"><h2 class="post-title">'+n+'</h2><div class="post-meta">'+d+"</div></div></li>":a.match("grid-small")?p+='<li class="feat-item item-small item-'+l+'"><div class="post-image-wrap"><a class="post-image-link" href="'+o+'">'+r[0]+'</a></div><div class="post-info"><h2 class="post-title">'+n+'</h2><div class="post-meta">'+d+"</div></div></li>":a.match("grid-big")?p+='<li class="feat-item item-big item-'+l+'"><div class="feat-inner"><a class="post-image-link" href="'+o+'">'+r[0]+'</a><div class="post-info"><h2 class="post-title">'+n+'</h2><div class="post-meta">'+m+d+"</div></div></div></li>":a.match("post-list")?p+='<li class="item-'+l+'"><a class="post-image-link" href="'+o+'">'+r[0]+'</a><h2 class="post-title">'+n+'</h2><div class="post-meta ">'+d+"</div></div></li>":a.match("related")&&(p+='<li class="related-item item-'+l+'"><div class="post-image-wrap"><a class="post-image-link" href="'+o+'">'+r[0]+'</a></div><h2 class="post-title">'+n+'</h2><div class="post-meta">'+d+"</div></li>"),i+=p}i+="</ul>"}else i='<ul class="no-posts"> <i class="fa fa-frown-o"/> معذرة! لاتوجد منشورات هنا.</ul>';a.match("mega-menu")?(t.addClass("has-sub mega-menu").append(i),t.find("a:first").attr("href",function(t,a){return"recent"==e||"random"==e?a.replace(a,"/search/?&max-results="+postPerPage):a.replace(a,"/search/label/"+e)})):a.match("hot-posts")?t.html(i).parent().addClass("show-hot"):a.match("feat-big")||a.match("col-left")||a.match("col-right")||a.match("grid-small")||a.match("grid-big")?(t.parent().find(".widget-title h3").html('<a href="/search/label/'+e+'">'+t.parent().find(".widget-title h3").text()+"</a>"),(a.match("col-left")||a.match("col-right"))&&(a.match("col-right")&&t.parent().addClass("col-right"),t.parent().addClass("col-width")),t.html(i).parent().addClass("show-widget")):t.html(i)}})}}$("#main-menu #main-menu-nav li").each(function(){var t=$(this),a=t.find("a").attr("href").trim();_0xae85x34(t,a.toLowerCase(),5,a.split("/")[0])}),$("#hot-section .widget-content").each(function(){var t=$(this),a=t.text().trim();_0xae85x34(t,a.toLowerCase(),5,a.split("/")[0])}),$(".featured-posts .widget-content").each(function(){var t,a=$(this),s=(e=a.text().trim()).toLowerCase(),e=e.split("/");e=s.match("feat-big")?(t=5,e[0]):(t=e[0],e[1]);_0xae85x34(a,s,t,e)}),$(".common-widget .widget-content").each(function(){var t=$(this),a=t.text().trim();_0xae85x34(t,a.toLowerCase(),(a=a.split("/"))[0],a[1])}),$(".related-ready").each(function(){var t=$(this),a=t.find(".related-tag").data("label");_0xae85x34(t,"related",6,a)});
