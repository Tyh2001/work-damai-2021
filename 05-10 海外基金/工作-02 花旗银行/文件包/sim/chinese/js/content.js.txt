function toggleContent(divname) {
	if (document.getElementById(divname)!=undefined) {
		if (document.getElementById(divname).style.display == "none") {
			document.getElementById(divname).style.display = "";
			if (document.getElementById("lnk-"+divname)!=undefined) {
				if (document.getElementById("lnk-"+divname).innerHTML == "More information") 
					document.getElementById("lnk-"+divname).innerHTML = "Hide information";
			}
		} else {
			document.getElementById(divname).style.display = "none";
			if (document.getElementById("lnk-"+divname).innerHTML == "Hide information") 
				document.getElementById("lnk-"+divname).innerHTML = "More information";
		}
	}
}

var tabCurrent = "";

function openTab(tab) {
	if (tabCurrent.length>0) {
		document.getElementById("tabcontent"+tabCurrent).style.display = "none";
		if (document.getElementById("tab"+tabCurrent)!=undefined) {
			document.getElementById("tab"+tabCurrent).src = "/sim/chinese/images/common/tabs/"+tabCurrent.toLowerCase()+".gif";
		}
	}
	if (document.getElementById("tabcontent"+tab)!=undefined) {
		document.getElementById("tabcontent"+tab).style.display = "";
		if (document.getElementById("tab"+tab)!=undefined) {
			document.getElementById("tab"+tab).src = "/sim/chinese/images/common/tabs/"+tab.toLowerCase()+"-on.gif";
		}
		tabCurrent = tab;
	}		
}

function hash() {
var paramhash = location.hash;
var param = "";
	if(paramhash.length>0){
		param = paramhash.substring(1,paramhash.length);
	}
	if(param.length>0)
		openTab(param);
	else openTab("Benefits");
}

function printArea(textdiv) {	
	var s = textdiv.innerHTML;
	//var regExp=/\n/gi;
	//s = s.replace(regExp,'<br>');
	pWin = window.open('','pWin','location=yes, menubar=yes, toolbar=yes, scrollbars=yes');
	pWin.document.open();
	pWin.document.write('<html><head></head><body><font face="Arial,sans-serif" size="1">');
	pWin.document.write(s);
	pWin.document.write('</font></body></html>');
	//pWin.print();
	//pWin.document.close();
	//pWin.close();
}

function openWindow(u, w, h) {
	if (w!="" && h!="") {
		var l = (screen.width/2) - (w/2);
		var t = (screen.height/2) - (h/2) - 40;	
		var feat = "scrollbars=1,toolbar=0,menubar=0,status=1,location=0,resizable=0,width=" + w + ",height=" + h + ",top=" + t + ",left=" + l;
		window.open(u, "wPop", feat);	
	} else window.open(u);
}

var externallinkty = 0;
function toggleExternalLinks() {
	if (externallinkty == 0) {
		document.getElementById("externallinkscontainer").style.display = "";
		moveUpExternalLink();
	} else moveDownExternalLink();
}

function moveUpExternalLink() {
	if (externallinkty > -190) {
		externallinkty -= 10;
		$('#externallinks').animate({
			top: '-=10'
		}, 30, moveUpExternalLink);
	} else {
		
	}
}

function moveDownExternalLink() {
	if (externallinkty < 0) {
		externallinkty += 10;
		$('#externallinks').animate({
			top: '+=10'
		}, 30, moveDownExternalLink);
	} else document.getElementById("externallinkscontainer").style.display = "none";
}

function populateExternalLink() {
	var out = '<div id="externallinksviewarea"><div id="externallinks"><p><a href="https://www.asia.citibank.com/malaysia/corporate" target="_blank">Corporate Banking</a></p>' + 
		'<p><a href="javascript:top.Createlink(\'http://www.bnm.gov.my/,null,1,Y,null,null\')">Bank Negara Malaysia</a></p>' + 
		'<p><a href="javascript:top.Createlink(\'http://bankinginfo.com.my,null,1,Y,null,null\')">Banking Info</a></p> ' + 
		'<p><a href="javascript:top.Createlink(\'http://www.pidm.gov.my/,null,1,Y,null,null\')">Malaysia Deposit Insurance Corporation (PIDM)</a></p> ' + 
		'<p><a href="javascript:top.Createlink(\'http://www.fmb.org.my/,null,1,Y,null,null\')">Financial Mediation Bureau (FMB)</a></p>' + 
		'<p><a href="javascript:top.Createlink(\'http://www.mifc.com/,null,1,Y,null,null\')">Malaysia International Islamic Financial Center (MIFC)</a></p> ' + 
		'<p><a href="javascript:top.Createlink(\'http://www.smeinfo.com.my/,null,1,Y,null,null\')">SMEinfo Portal</a></p>' + 
		'<p><a href="javascript:top.Createlink(\'http://www.speaksens.com.my/,null,1,Y,null,null\')">Speaksens</a></p>' + 
		'<p><a href="javascript:top.Createlink(\'http://www.akpk.org.my/,null,1,Y,null,null\')">Credit Counseling and Debt Management Agency (AKPK)</a></p></div></div>';
	if (document.getElementById("externallinkscontainer")!=undefined) {
		document.getElementById("externallinkscontainer").style.display = "none";
		document.getElementById("externallinkscontainer").innerHTML = out;
	}
}

var aparam = ",toolbar=yes,menubar=yes";

function LoadpageImp(path, tabId, target, external, height, width){
  var curbizId = "/MYGCB";
 
	if ((!path) || (trim(path) == "")) return alert ("path cannot be empty or null");
	
	var queryStringIndex = path.indexOf("?");
	var normalizedPath = (queryStringIndex > 0)?path.substring(0, queryStringIndex):path;
	normalizedPath = normalizedPath.toLowerCase();
 
	var isWebServerFile = false;
	var isExternalSite = false;
	height = ( (height == "") || (height == "null") || (!height) )?"534" :height;
	width =  ( (width  == "") || (width  == "null") || (!width)  )?"650" :width;
	tabId =  ( (tabId == "" ) || (tabId == "null" ) || (!tabId)  )?"home":tabId

	if(normalizedPath.indexOf("http://") >= 0 || normalizedPath.indexOf("https://") >= 0) {
		isExternalSite = true;
	}else if(normalizedPath.indexOf("global_docs/") >= 0 || normalizedPath.indexOf("portal/") >= 0) {
		isWebServerFile = true;
	}
	if (external == "Y") {
		confirmLeaving(path,target, height, width);
	}
	//Added to open the Bahasa link in the same window
	else if (external == "B") { 
		toBahasaLink(path,target, height, width);
	} else if (target == "1" || target == "2" || target == "4") {
		var param =	"left=95,top=11,scrollbars=yes,location=yes,status=yes,resizable=yes,width="+width+",height="+height;
		if(target == "2" || target == "4") {
			param += aparam;
		}		
		if(!isWebServerFile && !isExternalSite) {
			path=curbizId+"/APPS/portal/loadPopup.do?path="+path;
		}			
		window.open(path, "_blank", param);
	}else {
		if(!isWebServerFile && !isExternalSite) {
			path = curbizId+"/APPS/portal/loadPage.do?tabId="+tabId+ "&path="+path;
		}
		top.location.href = path;
	}	
		
}

function Loadpage(path, tabId, target, external, height, width) {
  aparam = ",toolbar=yes,menubar=yes";
  LoadpageImp(path, tabId, target, external, height, width);
}
function Loadpage1(path, tabId, target, external, height, width) {
  aparam = ",toolbar=yes,menubar=yes";
  LoadpageImp(path, tabId, target, external, height, width);
}

function Createlink(obj) {
	var myArray = obj.split(',');
	var size = myArray.length;

	if ( (obj == "") || (obj == "null") || (size < 6) ) return alert ("insufficient parameter");

	var path		  =	myArray[0];
	var productId	=	myArray[1];
	var target		=	myArray[2];
	var external	=	myArray[3];
	var height		=	myArray[4];
	var width		  =	myArray[5];

	Loadpage(path, productId, target, external,height,width);
}

function openNewWin(url,winName,winProp,lid,ipath){
  newWin = window.open(url,winName,winProp);
  newWin.focus();
}
        
function confirmLeaving(path, target, height, width) {
	var name = confirm("You are now leaving the Citibank Malaysia website and entering a third party website.\n\nAny information you may provide on the third party website shall be subject to the confidentiality and security terms of such website and not the privacy policies of Citibank Malaysia, and Citibank Malaysia shall not bear any responsibility for any unauthorised disclosure or breach of confidentiality in relation to such 	information provided.\n\nFurthermore any link to a third party website contained herein does not constitute an endorsement by Citibank Malaysia of such third party, their website or their products and/or services, and Citibank Malaysia also makes no warranties as to the content of such website.\n\nWould you like to continue?")
	if (name == true) {
		if (target == "1") {
			parm = "left=95" + "," + "top=11" + "," + "width=" + width + "," + "height=" + height + "," +"location=yes" + "," +"status=no" +"," +"toolbar=yes" + "," + "menubar=yes" + "," + "scrollbars=yes" + "," + "resizable=yes";
			window.open(path,'NewWinDow', parm);
			return ;
		} else if(target == "2") {
			var parm = "left=95" + "," + "width=" + width +"," + "height=" + height + "," +"location=yes" + ","+ "scrollbars=yes" + "," + "resizable=yes";
			window.open(path,'NewWinDow', parm);
			return;
		} else if (target=="3") {
			window.open(path, "_blank");
		} else {
			window.location=path;
		}
	} else return ;
}


function trim(inputString) {
	var newInputString = replace(inputString,'%20',' ');  
	if (typeof newInputString != "string") { return newInputString; }
	var retValue = newInputString;
	var ch = retValue.substring(0, 1);
	while (ch == " ") { 
	retValue = retValue.substring(1, retValue.length);
	ch = retValue.substring(0, 1);
	}
	ch = retValue.substring(retValue.length-1, retValue.length);
	while (ch == " ") { 
	retValue = retValue.substring(0, retValue.length-1);
	ch = retValue.substring(retValue.length-1, retValue.length);
	}
	while (retValue.indexOf(" ") != -1) { 
	retValue = retValue.substring(0, retValue.indexOf(" ")) + retValue.substring(retValue.indexOf(" ")+1, retValue.length); 
	}
	return retValue; 
}
function replace(string,text,by) {
	var strLength = string.length, txtLength = text.length;
	if ((strLength == 0) || (txtLength == 0)) 
	return string;
	var i = string.indexOf(text);
	if ((!i) && (text != string.substring(0,txtLength))) return string;
	if (i == -1) return string;
	var newstr = string.substring(0,i) + by;
	if (i+txtLength < strLength)
	newstr += replace(string.substring(i+txtLength,strLength),text,by);
	return newstr;
}

function toBahasaLink(path,target, height, width) {
	if (target == "6")  window.location=path;
	else  return ;
}