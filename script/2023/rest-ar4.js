(jQuery),$(".archive-dropdown-menu").on("change",function(){0<this.value.length&&(window.location.href=this.value)}),$("#main-menu").each(function(){for(var e=$(this).find(".LinkList ul > li").children("a"),t=e.length,i=0;i<t;i++){var a,n=e.eq(i),s=n.text();"_"!==s.charAt(0)&&"_"===e.eq(i+1).text().charAt(0)&&(a=n.parent()).append('<ul class="sub-menu m-sub"/>'),"_"===s.charAt(0)&&(n.text(s.replace("_","")),n.parent().appendTo(a.children(".sub-menu")))}for(i=0;i<t;i++){var o,r=e.eq(i),d=r.text();"_"!==d.charAt(0)&&"_"===e.eq(i+1).text().charAt(0)&&(o=r.parent()).append('<ul class="sub-menu2 m-sub"/>'),"_"===d.charAt(0)&&(r.text(d.replace("_","")),r.parent().appendTo(o.children(".sub-menu2")))}$("#main-menu ul li ul").parent("li").addClass("has-sub"),$("#main-menu-nav > li > a").each(function(){var e=$(this);"homepage"==e.attr("href").trim().toLowerCase()&&e.attr("href","/").parent("li").addClass("li-home")}),$("#main-menu .widget").addClass("show-menu")}),$("#main-menu-nav").clone().appendTo(".mobile-menu"),$(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".mobile-menu ul > li a").each(function(){var e=$(this),t=e.attr("href").trim(),i=t.toLowerCase();t.split("/"),i.match("mega-menu")&&e.attr("href","/search/label/length")}),$(".slide-menu-toggle").on("click",function(){$("body").toggleClass("nav-active")}),$(".mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),($(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub"):$(this).parent().addClass("show").children(".m-sub")).slideToggle(170))}),$(".show-search, .show-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus()}),$(".hide-search, .hide-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur()}),$(".Label a, a.b-label").attr("href",function(e,t){return t.replace(t,t)}),$(".avatar-image-container img").attr("src",function(e,t){return(t=t.replace("/s35-c/","/s45-c/")).replace("//img1.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png")}),$(".index-post .post-image-link img").attr("data-original",function(e,t){return t.replace("https://blogger.googleusercontent.com/img/a/AVvXsEjJbehv-wL6IQHhNiw9YdHtmXQg9gFpQy9pVyLNZLMwfzj9KcVH414pheG2unocwZvKqwY4CHZt9QAtn4tg4gECRXluYT6huOFUVlpgaEtmk1Ha83XVNh8RpN6Z4S_8BObmHi9qlbiwIV5BYNvS1JXcn7z7iySbLUqXM5tLCUwhjBxLGH2zzWVRP7As=s16000",noThumbnail)}),$(".author-description a").each(function(){$(this).attr("target","_blank")}),$(".post-body strike").each(function(){var e=$(this),t=e.text();$(".back-top").each(function(){var e=$(this);$(window).on("scroll",function(){100<=$(this).scrollTop()?e.fadeIn(250):e.fadeOut(250)}),e.click(function(){$("html, body").animate({scrollTop:0},500)})}),$(".show-comments").on("click",function(){$(this).css("display","none"),$(".blog-post-comments").css("display","block")}),$(function(){$("body .c-year").text((new Date).getFullYear())});var postbody,text_month=["يناير","فبراير","مارس","أبريل","ماي","يونيو","يوليوز","غشت","شتنبر","أكتوبر","نونبر","دجنبر"],no_image_url="https://blogger.googleusercontent.com/img/a/AVvXsEjJbehv-wL6IQHhNiw9YdHtmXQg9gFpQy9pVyLNZLMwfzj9KcVH414pheG2unocwZvKqwY4CHZt9QAtn4tg4gECRXluYT6huOFUVlpgaEtmk1Ha83XVNh8RpN6Z4S_8BObmHi9qlbiwIV5BYNvS1JXcn7z7iySbLUqXM5tLCUwhjBxLGH2zzWVRP7As=s16000";function validURL(e){return void 0!==e}function mainMenu(){var n=$(".header-menu #main-menu-nav").width(),i=0,t=new Array;$(".header-menu #main-menu-nav > li").each(function(){i+=$(this).width();var e=null!==$(this).next().width()?$(this).next().width():0;n-48<i+e&&!1===$(this).hasClass("menu-show-more")&&t.push($(this))}),n<i&&($(".header-menu #main-menu-nav > .menu-show-more").length||$(".header-menu #main-menu-nav").append('<li class="menu-show-more has-sub"><a href="#" role="menuitem"></a><ul class="sub-menu m-sub"></ul></li>'),t.length&&$(".header-menu #main-menu-nav > .menu-show-more").length&&$(t).each(function(){$(this).css("display:none;"),$(".header-menu #main-menu-nav > .menu-show-more > .sub-menu").append($(this))}))}function repositionSubMenu(){$(".header-menu .menu-show-more > .sub-menu").each(function(){var e=$(".header-menu #main-menu")[0].getBoundingClientRect().left,n=$(".header-menu #main-menu")[0].getBoundingClientRect().top+$(".header-menu #main-menu").height();$(this).css({position:"fixed",width:$(".header-menu #main-menu").width()+"px",left:e+"px",top:n+"px",right:"unset"}),$(this).find("li").each(function(){$(this).css({float:"right"})})})}static_page_text=$.trim($(".static_page .post-body").text()),$(document).ready(mainMenu),$(window).resize(mainMenu),$(document).ready(repositionSubMenu),$(window).scroll(repositionSubMenu),$(window).resize(repositionSubMenu),$(".header-menu .menu-show-more").hover(repositionSubMenu);function copyFunction(){var e=$("#getlink")[0];e.select(),document.execCommand("copy"),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value),document.getElementById("copy-notif").innerHTML="<span>تم نسخ الرابط بنجاح!</span>",$("#copy-notif").css("display","block"),setTimeout(function(){$("#copy-notif").css("display","none")},1500)}setInterval(function(){$(".cookie-choices-info").show()},5e3),cookieOptions={msg:"يستخدم موقع أستاذ ملفات تعريف الارتباط.",link:"/p/privacy-policy.html",close:"إغلاق",learn:"اقرأ المزيد"},document.onkeydown=function(e){return!e.ctrlKey||67!==e.keyCode&&79!==e.keyCode&&83!==e.keyCode&&86!==e.keyCode&&85!==e.keyCode&&117!==e.keyCode},$(document).keypress("u",function(e){return!e.ctrlKey}),$(document).ready(function(){$("img, .post-body a[href]:has(img)").css({cursor:"default","pointer-events":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-o-user-select":"none","user-select":"none"}).click(function(){return!1})});
