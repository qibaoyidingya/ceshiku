var MINI_ANCHOR_CENTER={vertical:"center",horizontal:"center","float":{top:"50%",left:"50%",_top:"expression(eval(document.documentElement.scrollTop))"}},MINI_ANCHOR_TOP_CENTER={vertical:"top",horizontal:"center","float":{top:"0",left:"50%",_top:"expression(eval(document.documentElement.scrollTop))"}},MINI_ANCHOR_BOTTOM_CENTER={vertical:"bottom",horizontal:"center","float":{bottom:"0",left:"50%",_top:"expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)))"}},MINI_ANCHOR_TOP_LEFT={vertical:"top",horizontal:"left","float":{top:"0",left:"0",_top:"0","_margin-top":"0",_top:"expression(eval(document.documentElement.scrollTop))"}},MINI_ANCHOR_TOP_RIGHT={vertical:"top",horizontal:"right","float":{top:"0",right:"0",_top:"0","_margin-top":"0",_top:"expression(eval(document.documentElement.scrollTop))"}},MINI_ANCHOR_BOTTOM_LEFT={vertical:"bottom",horizontal:"left","float":{bottom:"0",left:"0",_bottom:"0","_margin-bottom":"0",_top:"expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)))"}},MINI_ANCHOR_BOTTOM_RIGHT={vertical:"bottom",horizontal:"right","float":{bottom:"0",right:"0",_bottom:"0","_margin-bottom":"0",_top:"expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)))"}};(function($){$.mini={helper:{direc:function(e){switch(e){case"left":return{way:1,direction:1};case"right":return{way:1,direction:0};case"top":return{way:0,direction:1};case"down":return{way:0,direction:0};default:return!1}},rand:function(e){return parseInt(Math.random()*Math.pow(10,e))}},validate:function(con,settings){var returnValidate=!0,returnValidatefunction=function(e){returnValidate=e},message="",returnFalse=function(e){message=e},validate=function(i,v){$.each(v,function(index,value){if(index=="required"&&$("#"+i).val()=="")return returnFalse(eval("settings.message."+i+"."+index)),returnValidatefunction(!1),!1;if(index=="reg"){r=new RegExp(value);if(!r.test($("#"+i).val()))return returnFalse(eval("settings.message."+i+"."+index)),returnValidatefunction(!1),!1}})},defaults={rules:"",message:""},settings=$.extend(defaults,settings);$(con).submit(function(){return returnValidate=!0,$.each(settings.rules,function(index,value){typeof value=="string"?value=="required"&&$("#"+index).val()==""&&(returnFalse(eval("settings.message."+index)),returnValidatefunction(!1)):validate(index,value)}),returnValidate?!0:(alert(message),!1)})},ajaxFloat:function(e,t){$.ajax({url:e,type:"GET",dataType:"text",timeout:5e3,success:function(e){$.mini.float(e,t,!0)},error:function(){alert("网络连接错误")}})},"float":function(e,t,n){var r="";if(n)r=e;else if(e!="AJAX"){var e=$(e);r=e,e.remove()}else $.ajax({url:t.url,type:"GET",dataType:"text",timeout:5e3,async:!1,success:function(e){r=e},error:function(){alert("网络连接错误")}});var i={zindex:100,anchor:MINI_ANCHOR_TOP_LEFT,offset:null,custom:null,closeBtn:null,showOnce:!0,reShow:null,onClose:null,onShow:null,beforeShow:null},t=$.extend(i,t),s=$.mini.helper.rand(8);$("body").append('<div id="miniFloat'+s+'"></div>');var o=$("#miniFloat"+s),u={"z-index":t.zindex,position:"fixed",_position:"absolute"},a=t.anchor.float,f=new Object;t.offset&&$.each(t.offset,function(e,t){e=="top"&&$.extend(f,{top:t+"px","_margin-top":t+"px"}),e=="bottom"&&$.extend(f,{bottom:t+"px","_margin-bottom":t+"px"}),e=="left"&&$.extend(f,{left:t+"px"}),e=="right"&&$.extend(f,{right:t+"px"})});var l=new Object;t.custom&&(l=t.custom),$.extend(u,a,f,l);var c=new Array;$.each(u,function(e,t){c.push(e+":"+t)}),o.attr("style",c.join(";")).hide().append(r);var h=function(){t.beforeShow&&t.beforeShow(),o.show(),t.onShow&&t.onShow()};t.showOnce&&h();var p=function(){o.hide(),t.onClose&&t.onClose(),t.reShow&&setTimeout(h,t.reShow)};return t.closeBtn&&$(t.closeBtn).click(function(){p()}),o},marquee:function(e,t){var e=$(e),n={direction:"top",speed:1,timeout:30,size:null},t=$.extend(n,t),r=e.html(),i;t.size?i=t.size:$.mini.helper.direc(t.direction).way?i=e.width():i=e.height();var s="";$.mini.helper.direc(t.direction).way?(outerHtml='<div style="width:'+i*2+'px;position: absolute;"></div>',innerHtml="<div style='float: left; display: inline; '>"+r+"</div><div style='float: left; display: inline; '>"+r+"</div>"):(outerHtml='<div style="height:'+i*2+'px;position: absolute;"></div>',innerHtml="<div>"+r+"</div><div>"+r+"</div>"),e.css({overflow:"hidden",position:"relative"}).empty().append(outerHtml).children().append(innerHtml);var o=$.mini.helper.direc(t.direction).direction,u=$.mini.helper.direc(t.direction).way,a=function(e){return(e?"-":"+")+"="+t.speed+"px"},f=function(t,n){o?t<=-i&&e.children().css(n,0):t>=0&&e.children().css(n,-i)},l=function(){u?(f(e.children().position().left,"left"),o?e.children().css("left",a(1)):e.children().css("left",a(0))):(f(e.children().position().top,"top"),o?e.children().css("top",a(1)):e.children().css("top",a(0)))},c=null,h=function(){c=setInterval(l,t.timeout)},p=function(){clearInterval(c)};h(),e.hover(function(){p()},function(){h()})},scroll:function(e,t){var n=0,e=$(e),r={direction:"left",speed:400,auto:3e3,size:null,itemTagName:"li",itemSize:null,prev:null,next:null,prevClick:null,nextClick:null,scrollEvent:null},t=$.extend(r,t),i=e.html(),s;t.itemSize?s=t.itemSize:$.mini.helper.direc(t.direction).way?s=e.find(t.itemTagName).outerWidth(!0):s=e.find(t.itemTagName).outerHeight(!0);var o;t.size?o=t.size:$.mini.helper.direc(t.direction).way?o=e.width():o=e.height();var u="";$.mini.helper.direc(t.direction).way?(outerHtml='<div style="width:'+o*2+'px;position: absolute;"></div>',innerHtml="<div style='float: left; display: inline; '>"+i+"</div><div style='float: left; display: inline; '>"+i+"</div>"):(outerHtml='<div style="height:'+o*2+'px;position: absolute;"></div>',innerHtml="<div>"+i+"</div><div>"+i+"</div>"),e.css({overflow:"hidden",position:"relative"}).empty().append(outerHtml).children().append(innerHtml);var a=null,f=function(n){$.mini.helper.direc(t.direction).way?e.children().stop().css("left",n):e.children().stop().css("top",n)},l=function(n){t.auto&&p();var r={left:n+"px"};$.mini.helper.direc(t.direction).way||(r={top:n+"px"}),e.children().stop().animate(r,t.speed,function(){t.auto&&h()})},c=function(e){e?n<=-o?(f(0),n=-s,l(n)):(n-=s,l(n)):n?(n+=s,l(n)):(f(-o),n=-o+s,l(n)),t.scrollEvent&&t.scrollEvent()},h=function(){a=setTimeout(function(){c($.mini.helper.direc(t.direction).direction)},t.auto)},p=function(){clearTimeout(a)};t.auto&&(h(),e.hover(function(){p()},function(){h()})),t.next&&$(t.next).click(function(){c(1),t.nextClick&&t.nextClick()}),t.prev&&$(t.prev).click(function(){c(0),t.prevClick&&t.prevClick()})},fav:function(){var e=window.location.href,t=e.split("?");e=t[0]+"?"+t[1];var n="";if(window.sidebar)window.sidebar.addPanel(document.title,e,"");else{if(!document.all)return!0;window.external.AddFavorite(e,document.title)}},page:function(e,t){var n=$(e),r=0,i="",s=0,o=1,u="jq_minipagination_pageNumList",a={pageNum:10,pageNumList:"#page",pageNumListTag:"a",prevText:"上一页",nextText:"下一页",scrollTop:-1,presentPageClassName:"noclick"},t=$.extend(a,t),f=function(e,n,i){var s;$(e).hide();for(s=0;s<t.pageNum&&n+s<$(e).length;s++)$(e).eq(n+s).show();i||t.scrollTop!=-1&&window.scroll(0,t.scrollTop),$(t.pageNumList).find(t.pageNumListTag+"["+u+"]").each(function(e,n){$(this).attr(u)==o?$(this).addClass(t.presentPageClassName):$(this).removeClass(t.presentPageClassName)}),o==1&&$(t.pageNumList).find(t.pageNumListTag+"["+u+"]").eq(0).addClass(t.presentPageClassName),o==r&&$(t.pageNumList).find(t.pageNumListTag+"["+u+"]").eq(r+1).addClass(t.presentPageClassName)};r=parseInt((n.length-1)/t.pageNum)+1,i+="<"+t.pageNumListTag+" "+u+'="prev">'+t.prevText+"</"+t.pageNumListTag+">";for(s=0;s<r;s++)i+="<"+t.pageNumListTag+" "+u+'="'+(s+1)+'">'+(s+1)+"</"+t.pageNumListTag+">";i+="<"+t.pageNumListTag+" "+u+'="next">'+t.nextText+"</"+t.pageNumListTag+">",$(t.pageNumList).append(i),f(n,(o-1)*t.pageNum,!0),$(t.pageNumList).find(t.pageNumListTag+"["+u+"]").each(function(e,i){$(this).click(function(){switch($(this).attr(u)){case"prev":o>1&&(o--,f(n,(o-1)*t.pageNum,!1));break;case"next":o<r&&(o++,f(n,(o-1)*t.pageNum,!1));break;default:if(o!=$(this).attr(u)){o=$(this).attr(u),f(n,(o-1)*t.pageNum,!1);break}}})})},write:function(e,t){var e=$(e),n=e.text(),r=n.length,i=0;e.text("");var s=setInterval(function(){i<r?i++:i=0,e.text(n.substring(0,i))},t)},tab:function(e,t,n){var r={event:"mouseover",hoverClassName:"hover",auto:!1,fade:null},n=$.extend(r,n),i=function(e,t){n.fade?$(e).fadeOut(n.fade).eq(t).fadeIn(n.fade):$(e).hide().eq(t).show()},s=function(r){$.isArray(t)?$.each(t,function(e,t){i(t,r)}):i(t,r),n.hoverClassName&&$(e).removeClass(n.hoverClassName).eq(r).addClass(n.hoverClassName)};$(e).each(function(e,t){n.event=="mouseover"?$(this).mouseover(function(){s(e)}):$(this).click(function(){s(e)})});if(n.auto){var o=$(e).length,u=0,a,f=function(){a=setInterval(function(){u=u+1==o?0:u+1,$(e).eq(u).trigger(n.event)},n.auto)},l=function(){a=clearInterval(a)};f(),$(t).hover(function(){l()},function(){f()})}}}})(jQuery)