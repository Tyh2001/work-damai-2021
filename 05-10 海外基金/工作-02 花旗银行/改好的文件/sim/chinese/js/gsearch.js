/*function baidusearch () {  
	var wd=document.getElementsByName("wd")[0].value;
	var link="http://www.baidu.com/s?si=www.citibank.com.cn&cl=3&ct=2097152&tn=baidulocal&word="+wd;
	window.open('/sim/chinese/search/results.htm');
	document.getElementById("gssSearchResults").src=link;
}*/
function baiduSearch(){
	var searchKeywords = document.getElementById("tboSearch").value;
	window.location="/sim/chinese/search/results.htm?wd=" + searchKeywords;
}
function baiduSearch02(){
	var searchKeywords = document.getElementById("tboSearch02").value;
	window.location="/sim/chinese/search/results.htm?wd=" + searchKeywords;
}

// Insert it before the CSE code snippet so that cse.js can take the script
// parameters, like parsetags, callbacks.
