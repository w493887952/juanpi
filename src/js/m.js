
var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth/640;

var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)){
var version = parseFloat(RegExp.$1);
// andriod 2.3
if(version>2.3){
document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
// andriod 2.3以上
}else{
document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
}
// 其他系统
} else {
document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}
if(IsPC()){
document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}

function IsPC() {
var userAgentInfo = navigator.userAgent;
var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
var flag = true;
for (var v = 0; v < Agents.length; v++) {
if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
}
return flag;
}



//根据域名显示不同备案号
function sjkangbeijban(){
host = window.location.host;
switch(host){
	case "bjyk.kangbeijiabj.com": 
		document.writeln("1");
		break;
	case "sj.kangbeijiabj.com":
		document.writeln("1");
		break;
	case "bd.kangbeijiabj.com": 
		document.writeln("1");
		break;
	case "m.kangbeijiabj.com":
		document.writeln("1");
		break;
	case "bjyk.ykkbj.com": 
		document.writeln("3");
		break;
	case "sj.ykkbj.com":
		document.writeln("3");
		break;
	case "bjyk.chikebj.com": 
		document.writeln("4");
		break;
	case "sj.chikebj.com":
		document.writeln("4");
		break;
}
}

//底部公用广告位
function home_ad(){
    // document.writeln('<div class="home_adpic"><a href="/a/meitibaodao/510.html"><img src="/templets/bobo/images/getx.jpg"></a></div>');
}
