function ArticlesTrackingV3() {
	$("div[articletrackingV3=true]").each(function() {
		var _url = window.location.origin + window.location.pathname;
		var categoryalias = $(this).attr("categoryalias");
		if(categoryalias.indexOf("/") == 0) categoryalias = categoryalias.replace("/","");
		//else categoryalias = categoryalias.replace("/","-");
		var e = {
			Url: _url,
			action: $(this).attr("action"),
			randId: Math.floor(Math.random() * (9999 - 100 + 1)) + 100,
			domain: $(this).attr("domain"),
			catealias: categoryalias,
			aid: $(this).attr("articleid"),
		};
		PushTrackingLogV3("https://track-srv.vietnamnet.vn/jsx/trackingv3/pageview/data.jsx", e);
		return false;//Chỉ track phần tử đầu tiên;
	});
}
function PushTrackingLogV3(e, t) {
    var n = [],
        r;
    for (var i in t) {
        if (t.hasOwnProperty(i)) {
            r = t[i];
            n[n.length] = i + "=" + encodeURIComponent(r.toString())
        }
    }
    var s = "";
    if (n.length > 0) s = n.join("&");
    var o = s != "" ? e + "?" + s : e;
    var u = jQuery('<img src="' + o + '" style="display:none;width:0px;height:0px;" width="0" height="0" />');
    jQuery("body").append(u);
}
$(document).ready(function () {
		ArticlesTrackingV3();		
});