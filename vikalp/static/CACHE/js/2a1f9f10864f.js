(function(){$.fn.smint=function(options){$(this).addClass('smint')
var settings=$.extend({'scrollSpeed ':500},options);var optionLocs=new Array();var lastScrollTop=0;var menuHeight=$(".smint").height();return $('.smint a').each(function(index){if(settings.scrollSpeed){var scrollSpeed=settings.scrollSpeed}
var id=$(this).attr("id");optionLocs.push(Array($("div."+id).position().top-menuHeight,$("div."+id).height()+$("div."+id).position().top,id));var stickyTop=$('.smint').offset().top;var stickyMenu=function(direction){var scrollTop=$(window).scrollTop();if(scrollTop>stickyTop){$('.smint').css({'position':'fixed','top':0}).addClass('fxd');}else if(scrollTop<100){$('.smint').css({'position':'absolute','top':'100px'}).removeClass('fxd');}
if(optionLocs[index][0]<=scrollTop&&scrollTop<=optionLocs[index][1]){if(direction=="up"){$("#"+id).addClass("active");$("#"+optionLocs[index+1][2]).removeClass("active");}else if(index>0){$("#"+id).addClass("active");$("#"+optionLocs[index-1][2]).removeClass("active");}else if(direction==undefined){$("#"+id).addClass("active");}
$.each(optionLocs,function(i){if(id!=optionLocs[i][2]){console.log(i);$("#"+optionLocs[i][2]).removeClass("active");}});}};stickyMenu();$(window).scroll(function(){var st=$(this).scrollTop();if(st>lastScrollTop){direction="down";}else if(st<lastScrollTop){direction="up";}
lastScrollTop=st;stickyMenu(direction);if($(window).scrollTop()+$(window).height()==$(document).height()){$('.smint a').removeClass('active')
$('.smint a').last().addClass('active')}});$(this).on('click',function(e){var selectorHeight=$('.smint').height();e.preventDefault();var id=$(this).attr('id');if($(this).hasClass("smint-disable")){return false;}
var goTo=$('div.'+id).offset().top-selectorHeight;$("html, body").animate({scrollTop:goTo},scrollSpeed);});});}})();(function(e,t){if(!e)return t;var n=function(){this.el=t;this.items=t;this.sizes=[];this.max=[0,0];this.current=0;this.interval=t;this.opts={speed:500,delay:3e3,complete:t,keys:!t,dots:t,fluid:t};var n=this;this.init=function(t,n){this.el=t;this.ul=t.children("ul");this.max=[t.outerWidth(),t.outerHeight()];this.items=this.ul.children("li").each(this.calculate);this.opts=e.extend(this.opts,n);this.setup();return this};this.calculate=function(t){var r=e(this),i=r.outerWidth(),s=r.outerHeight();n.sizes[t]=[i,s];if(i>n.max[0])n.max[0]=i;if(s>n.max[1])n.max[1]=s};this.setup=function(){this.el.css({overflow:"hidden",width:n.max[0],height:this.items.first().outerHeight()});this.ul.css({width:this.items.length*100+"%",position:"relative"});this.items.css("width",100/this.items.length+"%");if(this.opts.delay!==t){this.start();this.el.hover(this.stop,this.start)}this.opts.keys&&e(document).keydown(this.keys);this.opts.dots&&this.dots();if(this.opts.fluid){var r=function(){n.el.css("width",Math.min(Math.round(n.el.outerWidth()/n.el.parent().outerWidth()*100),100)+"%")};r();e(window).resize(r)}if(this.opts.arrows){this.el.parent().append('<p class="arrows"><span class="prev">â†</span><span class="next">â†’</span></p>').find(".arrows span").click(function(){e.isFunction(n[this.className])&&n[this.className]()})}if(e.event.swipe){this.el.on("swipeleft",n.prev).on("swiperight",n.next)}};this.move=function(t,r){if(!this.items.eq(t).length)t=0;if(t<0)t=this.items.length-1;var i=this.items.eq(t);var s={height:i.outerHeight()};var o=r?5:this.opts.speed;if(!this.ul.is(":animated")){n.el.find(".dot:eq("+t+")").addClass("active").siblings().removeClass("active");this.el.animate(s,o)&&this.ul.animate(e.extend({left:"-"+t+"00%"},s),o,function(i){n.current=t;e.isFunction(n.opts.complete)&&!r&&n.opts.complete(n.el)})}};this.start=function(){n.interval=setInterval(function(){n.move(n.current+1)},n.opts.delay)};this.stop=function(){n.interval=clearInterval(n.interval);return n};this.keys=function(t){var r=t.which;var i={37:n.prev,39:n.next,27:n.stop};if(e.isFunction(i[r])){i[r]()}};this.next=function(){return n.stop().move(n.current+1)};this.prev=function(){return n.stop().move(n.current-1)};this.dots=function(){var t='<ol class="dots">';e.each(this.items,function(e){t+='<li class="dot'+(e<1?" active":"")+'">'+(e+1)+"</li>"});t+="</ol>";this.el.addClass("has-dots").append(t).find(".dot").click(function(){n.move(e(this).index())})}};e.fn.unslider=function(t){var r=this.length;return this.each(function(i){var s=e(this);var u=(new n).init(s,t);s.data("unslider"+(r>1?"-"+(i+1):""),u)})}})(window.jQuery,false)
$(document).ready(function(){$('.subMenu').smint({'scrollSpeed':500});$('.banner').unslider({speed:300,delay:3000,keys:true,dots:true,fluid:false});});$(document).ready(function(){$('.content').hide()
$('.container').hover(function(){$(this).find('.content').fadeIn();},function(){$(this).find('.content').fadeOut();});});