var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
function trackGg(ac, page) {
	if (ac.length==0) {
		var pageTracker = _gat._getTracker("UA-17685711-1");
	}else{ 
		var pageTracker = _gat._getTracker(ac);
	}
	if (location.host.indexOf("citibank.com")>-1) pageTracker._trackPageview(page);
}