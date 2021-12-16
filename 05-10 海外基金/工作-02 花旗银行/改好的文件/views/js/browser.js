var cssId = 'browser';  
if (!document.getElementById(cssId)){ var head  = document.getElementsByTagName('head')[0]; var link  = document.createElement('link'); link.id   = cssId;link.rel  = 'stylesheet';link.type = 'text/css';link.href = '/views/css/browser.css'; link.media = 'all';head.appendChild(link);}
var userAgent = navigator.userAgent.toLowerCase(),browser   = '',version   = 0,display=0;
var fire_fox=30;
var chrome=35;
var IE=7.0;
var operaBrowser=20;
var IEversion = detectIE();
function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }
  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }
  var edge = ua.indexOf('Edge/');
  if (edge > 0) {    
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }
  return false;
}
if (IEversion) {	
  if(IEversion<=IE) display=1;
  }
if ($.browser.chrome) {
	 if(userAgent.search("opr/") !=-1)
	 {
		userAgent = userAgent.substring(userAgent.indexOf('opr/') +4);userAgent = userAgent.substring(0,userAgent.indexOf('.'));version = userAgent;browser = "Opera";
		if(userAgent <=operaBrowser ) display=1;
	 }
	else
	{
		userAgent = userAgent.substring(userAgent.indexOf('chrome/') +7);userAgent = userAgent.substring(0,userAgent.indexOf('.'));version = userAgent;browser = "Chrome";
		if(userAgent <=chrome ) display=1;
	}
}

if ($.browser.mozilla) {
	if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
		userAgent = userAgent.substring(userAgent.indexOf('firefox/') + 8);userAgent = userAgent.substring(0,userAgent.indexOf('.'));version = userAgent;browser = "Firefox"
		}	
	else {
	  browser = "Mozilla (not Firefox)"
	}
	 if(userAgent <=fire_fox ) display=1;
}

if (navigator.appVersion.indexOf("Mac")!=-1){
	if(navigator.userAgent.indexOf('Version')!=-1)
	{		
		userAgent = userAgent.substring(userAgent.indexOf('version/') + 8);userAgent = userAgent.substring(0, userAgent.indexOf('.')); version = userAgent;browser = "Safari";
		if(version < 6)display=1;	 
	}
	else
	{	userAgent=$.browser.version;
		userAgent = userAgent.substring(0,userAgent.indexOf('.'));version = userAgent;browser = "Chrome";
		if(userAgent<35) display=1;
	}	
}
else
{
	if ($.browser.safari) {	
	 userAgent = userAgent.substring(userAgent.indexOf('version/') + 8);userAgent = userAgent.substring(0, userAgent.indexOf('.')); version = userAgent;browser = "Safari";
	if(userAgent <=4) display=1;
}

}

if(display==1)
{
	if(location.href.search('english')!=-1)
	{
		setTimeout(function(){	$( '<div class="browser_error_box" style="display:block;"><p class="browser_error_content">We noticed that you are using a non-Citibank certified browser. For the best Citibank Online experience, it is recommended that you use a certified browser. <a href="http://www.citibank.com.cn/sim/english/services/citibankonline_internetsecurity.htm?currenttab=4" title="Learn more">>> Learn more</a> <span class="be_close"></span></p></div>' ).prependTo("body");	},500)
		
	}
	else
	{
		setTimeout(function(){	$( '<div class="browser_error_box" style="display:block;"><p class="browser_error_content">您目前使用的浏览器不适用于访问花旗网站。为了确保您能顺利浏览与享受花旗网站服务，建议您使用花旗认证的浏览器版本。<a href="https://www.citibank.com.cn/sim/chinese/services/citibankonline_internetsecurity.htm?currenttab=4" title="Learn more">>> 了解更多</a> <span class="be_close"></span></p></div>' ).prependTo("body");	},500)
	}
}

$(document).ready(function(){
    $('body').on('click','.be_close',function() {
        $(this).hide();
        $(this).parents('.browser_error_box').slideUp();
    });
});