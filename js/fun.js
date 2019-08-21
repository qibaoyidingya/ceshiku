// JavaScript Document
document.writeln("<!--请将以下码嵌入到您网页源代码的最后面，通常是</body></HTML>之后,这样在服务器升级维护的时候也不会影响您的网页打开呈现速度。-->");
document.writeln("<script language=javascript>");
document.writeln("<!--");
document.writeln("var LiveAutoInvite0=\'您好，来自%IP%的朋友\';");
document.writeln("var LiveAutoInvite1=\'来自首页的对话\';");
document.writeln("var LiveAutoInvite2=\' 网站商务通 主要功能：<br>1、主动邀请<br>2、即时沟通<br>3、查看即时访问动态<br>4、访问轨迹跟踪<br>5、内部对话<br>6、不安装任何插件也实现双向文件传输<br><br><b>如果您有任何问题请接受此邀请以开始即时沟通</b>\';");
document.writeln("//-->");
document.writeln("</script>");
document.writeln("<script language=\"javascript\" src=\"http://pbt.zoosnet.net/JS/LsJS.aspx?siteid=PBT47253673&float=1&lng=cn\"></script>");
document.writeln("<style type=\"text/css\">");
document.writeln("#LRdiv1,#LRfloater0,#LRfloater1{display:none}");
document.writeln("#LRfloater0_if,#LRfloater1_if{display:none}");
document.writeln("</style>");
/*document.writeln("<script type=\"text/javascript\" src=\"/js/jquery-1.8.2.min.js\"></script>");*/


document.writeln("<style>")
document.writeln(".swtCenter {width:255px;height:218px; ;position:fixed;background:url(/swt/swtCenter.jpg) no-repeat;left:50%;top:50%;z-index:200;margin-left:-122.5px;margin-top:-109px;/*-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:20px;*/-moz-box-shadow:0 0 20px rgba(10,2,4,0.75);-webkit-box-shadow:0 0 20px rgba(10,2,4,0.75);box-shadow:0 0 20px rgba(10,2,4,0.75);}");
document.writeln(".closeBtn_swt {position:absolute;right:0;top:0;width:32px;height:32px; cursor:pointer;}");
document.writeln(".swtCenter_zx {position:absolute;left:23px;top:171px;width:97px;height:37px; }");
document.writeln(".swtCenter_tel {position:absolute;left:136px;top:171px;width:97px;height:37px; }");
document.writeln("</style>");
document.writeln("<div class=\"swtCenter\" id=\"swtCenter\"> ");
document.writeln("  <span class=\"closeBtn_swt\"  onclick=\"guanbi()\"></span>");
document.writeln("    <a class=\"swtCenter_zx\" href=\"/swt/\" target=\"_blank\" ></a>");
document.writeln("    <a class=\"swtCenter_tel\" href=\"tel:01067200180\"  ></a>");
document.writeln("</div>");

//setTimeout("showone()",10000);
function showone(){
	document.getElementById("swtCenter").style.display="block";
}		
		function guanbi(){
		document.getElementById("swtCenter").style.display="none";
		setTimeout(function(){
			document.getElementById("swtCenter").style.display="block";
			},20000);
			
	}





$(function() {
$("a[href$='/swt/']").click(function() {
         if (typeof(openZoosUrl) != "undefined") {
            openZoosUrl('chatwin','&e=移动端来自iyanglao.com.cn的swt');
            return false;
        }
        return true;
    });
});

//20171228baidu
var _hmt = _hmt || []; (function() { var hm = document.createElement("script"); hm.src = "https://hm.baidu.com/hm.js?18fdb163e5b78a57a92c658417f1198e"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s); })();	
document.writeln("<script type=\"text/javascript\" charset=\"utf-8\" async src=\"http://lxbjs.baidu.com/lxb.js?sid=11574130\"><\/script>");





