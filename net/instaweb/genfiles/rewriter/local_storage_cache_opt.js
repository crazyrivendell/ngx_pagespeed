(function(){function d(b){var a=window;if(a.addEventListener)a.addEventListener("load",b,!1);else if(a.attachEvent)a.attachEvent("onload",b);else{var c=a.onload;a.onload=function(){b.call(this);c&&c.call(this)}}};window.pagespeed=window.pagespeed||{};var p=window.pagespeed;function q(){this.a=!0}q.prototype.c=function(b){b=parseInt(b.substring(0,b.indexOf(" ")),10);return!isNaN(b)&&b<=Date.now()};q.prototype.hasExpired=q.prototype.c;q.prototype.b=function(b){return b.substring(b.indexOf(" ",b.indexOf(" ")+1)+1)};q.prototype.getData=q.prototype.b;q.prototype.f=function(b){var a=document.getElementsByTagName("script"),a=a[a.length-1];a.parentNode.replaceChild(b,a)};q.prototype.replaceLastScript=q.prototype.f;
q.prototype.g=function(b){var a=window.localStorage.getItem("pagespeed_lsc_url:"+b),c=document.createElement(a?"style":"link");a&&!this.c(a)?(c.type="text/css",c.appendChild(document.createTextNode(this.b(a)))):(c.rel="stylesheet",c.href=b,this.a=!0);this.f(c)};q.prototype.inlineCss=q.prototype.g;
q.prototype.h=function(b,a){var c=window.localStorage.getItem("pagespeed_lsc_url:"+b+" pagespeed_lsc_hash:"+a),f=document.createElement("img");c&&!this.c(c)?f.src=this.b(c):(f.src=b,this.a=!0);for(var c=2,k=arguments.length;c<k;++c){var g=arguments[c].indexOf("=");f.setAttribute(arguments[c].substring(0,g),arguments[c].substring(g+1))}this.f(f)};q.prototype.inlineImg=q.prototype.h;
function r(b,a,c,f){a=document.getElementsByTagName(a);for(var k=0,g=a.length;k<g;++k){var e=a[k],m=e.getAttribute("pagespeed_lsc_hash"),h=e.getAttribute("pagespeed_lsc_url");if(m&&h){h="pagespeed_lsc_url:"+h;c&&(h+=" pagespeed_lsc_hash:"+m);var l=e.getAttribute("pagespeed_lsc_expiry"),l=l?(new Date(l)).getTime():"",e=f(e);if(!e){var n=window.localStorage.getItem(h);n&&(e=b.b(n))}e&&(window.localStorage.setItem(h,l+" "+m+" "+e),b.a=!0)}}}
function t(b){r(b,"img",!0,function(a){return a.src});r(b,"style",!1,function(a){return a.firstChild?a.firstChild.nodeValue:null})}
p.i=function(){if(window.localStorage){var b=new q;p.localStorageCache=b;d(function(){t(b)});d(function(){if(b.a){for(var a=[],c=[],f=0,k=Date.now(),g=0,e=window.localStorage.length;g<e;++g){var m=window.localStorage.key(g);if(!m.indexOf("pagespeed_lsc_url:")){var h=window.localStorage.getItem(m),l=h.indexOf(" "),n=parseInt(h.substring(0,l),10);if(!isNaN(n))if(n<=k){a.push(m);continue}else if(n<f||0==f)f=n;c.push(h.substring(l+1,h.indexOf(" ",l+1)))}}k="";f&&(k="; expires="+(new Date(f)).toUTCString());
document.cookie="_GPSLSC="+c.join("!")+k;g=0;for(e=a.length;g<e;++g)window.localStorage.removeItem(a[g]);b.a=!1}})}};p.localStorageCacheInit=p.i;})();
