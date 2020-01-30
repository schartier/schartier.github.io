/*
	krpano 1.20.3 ScrollArea Plugin (build 2020-01-28)
	https://krpano.com/plugins/scrollarea/
*/
var krpanoplugin=function(){function J(a){return"boolean"==typeof a?a:0<="yesontrue1".indexOf(String(a).toLowerCase())}function ba(a){if(a&&n&&ca){var d=n.timertick,f=0;0==R&&(R=d);var b=d-R|0;R=d;"wheel"==a.type?f=a.deltaY:"mousewheel"==a.type?f=-a.wheelDelta:"DOMMouseScroll"==a.type&&(f=a.detail);1==h&&a.webkitDirectionInvertedFromDevice&&(f=-f);f=-f;500<b?S=1==a.deltaMode||0==f%20?0:1:66>b&&0==S&&0!=f%40&&6<Math.abs(f)&&(S=1);a.preventDefault();a.stopPropagation();0!=f&&(0==S?f=0>f?-5:5:(f/=20,
-10>f?f=-10:10<f&&(f=10)),1==h?T(f*A,0):2==h?T(0,f*y):3==h&&T(0,f*y))}}function p(a,d,b,k,e){var c=null;e=(!0===e?"remove":"add")+"EventListener";var g=U.browser.events;if(g.touch&&("down"==d?c=g.touchstart:"move"==d?c=g.touchmove:"up"==d&&(c=g.touchend),U.ie&&0==g.mouse&&("over"==d?c=g.pointerover?g.pointerover:"MSPointerOver":"out"==d&&(c=g.pointerout?g.pointerout:"MSPointerOut")),c))a[e](c,b,k);if(g.mouse&&("down"==d?c="mousedown":"move"==d?c="mousemove":"up"==d?c="mouseup":"over"==d?c="mouseover":
"out"==d&&(c="mouseout"),c))a[e](c,b,k)}function da(){if(b){var a=b.sprite.parentNode;a&&(a=a.kobject)&&(a.maskchildren=b.parentmaskchildren,a.poschanged&&a.updatepluginpos(),b.poschanged&&b.updatepluginpos(),ea=a,t=a.pixelwidth,u=a.pixelheight,isNaN(t)&&(t=0),isNaN(u)&&(u=0),E=0<t||0<u)}}function F(){e=Number(b.x);c=Number(b.y);isNaN(fa)&&(e=0);isNaN(ga)&&(c=0)}function G(a){a=void 0===a?!1:a;1==(h&1)?b.x!=e&&(b.x=e,a=!0):e=0;2==(h&2)?b.y!=c&&(b.y=c,a=!0):c=0;!E||V[0]==v&&V[1]==w||(V[0]=v,V[1]=w,
a=!0);if(a&&b&&E){a=t-v;var d=u-w,f=e,k=c;isNaN(f)&&(f=0);isNaN(k)&&(k=0);f+=a*q;k+=d*r;b.woverflow=-a;b.hoverflow=-d;b.loverflow=Math.round((-f+H*a)*A);b.roverflow=Math.round((+f-(1-H)*a)*A);b.toverflow=Math.round((-k+I*d)*y);b.boverflow=Math.round((+k-(1-I)*d)*y);b.onscroll&&n.call(b.onscroll,b)}}function la(a){for(;0<z.length&&!(100>=a-z[0].time);)z.shift()}function K(){da();var a=String(b.align).toLowerCase();if(""==a||"null"==a)a="lefttop";y=A=1;r=q=.5;I=H=0;0<=a.indexOf("left")&&(q=H=0,A=1);
0<=a.indexOf("top")&&(r=I=0,y=1);0<=a.indexOf("right")&&(H=1,q=0,A=-1);0<=a.indexOf("bottom")&&(I=1,r=0,y=-1)}function W(a){K();z=[];if(0==L)x=!1;else{p(window,"up",ha,!0);p(window,"move",ia,!0);var d=n.stagescale,b=a.changedTouches&&0<a.changedTouches.length?a.changedTouches[0]:a;a=b.pageX/d;d=b.pageY/d;x=!1;X=a;Y=d;return!1}}function ma(a){(void 0===a.pointerType||4==a.pointerType||"mouse"==a.pointerType)&&ja&&(K(),0!=E&&(a=u-w,0>t-v||0>a))&&(M=!0,p(b.sprite,"move",na,!0),p(b.sprite,"out",oa,!0))}
function na(a){M&&0==x&&ea&&(a=ea.getmouse(),Z(a.x/t*b.pixelwidth,a.y/u*b.pixelheight,!0))}function oa(a){p(b.sprite,"move",na,!0,!0);p(b.sprite,"out",oa,!0,!0);M=!1}function ia(a){if(0==L)return x=!1;var d=n.stagescale,b=a.changedTouches&&0<a.changedTouches.length?a.changedTouches[0]:a;a=b.pageX/d;d=b.pageY/d;0==x&&(h&1&&5<Math.abs(a-X)||h&2&&5<Math.abs(d-Y))&&(B&&(g=l=0,B=!1),null!=m&&(clearInterval(m),m=null),x=!0,M=!1,X=a,Y=d,F(),fa=e,ga=c);x&&(b=n.timertick,la(b),z.push({time:b,x:a,y:d}),e=fa+
(a-X)*A,c=ga+(d-Y)*y,a=-(v-t),d=-(w-u),e+=a*q,c+=d*r,b=1/(1+C*C),e=0<a?e-(e-a*q)*b:e-(0<e?e:e<a?e-a:0)*b,c=0<d?c-(c-d*r)*b:c-(0<c?c:c<d?c-d:0)*b,e-=a*q,c-=d*r,G());return!1}function ha(a){p(window,"up",ha,!0,!0);p(window,"move",ia,!0,!0);if(0==L)g=l=0,x=!1;else if(x){la(n.timertick);if(1<z.length){a=z[0];var d=z[z.length-1],b=d.y-a.y,c=(d.time-a.time)*aa;l=(d.x-a.x)/c*A;g=b/c*y}else g=l=0;m=setInterval(N,1E3/60);x=!1}}function ra(){setTimeout(function(){da();G(!0);null==m&&(m=setInterval(N,1E3/60))},
100)}function sa(){b&&(da(),F(),G(!0))}function N(){e+=l;c+=g;l*=O;g*=O;var a=0,d=0,b=-(v-t),k=-(w-u);e+=b*q;c+=k*r;0<b?a=e-b*q:B?a=e-pa:e<b?a=e-b:0<e&&(a=e);.1>a*a&&(a=0);0<k?d=c-k*r:B?d=c-qa:c<k?d=c-k:0<c&&(d=c);.1>d*d&&(d=0);e-=b*q;c-=k*r;0==(h&1)&&(l=a=0);0==(h&2)&&(g=d=0);0!=a&&(a*=-1,e+=a*(1-C),l=0>=a*l?l+a*P:a*Q,l*=C);0!=d&&(d*=-1,c+=d*(1-C),g=0>=d*g?g+d*P:d*Q,g*=C);0==a&&0==d&&.05>Math.sqrt(l*l+g*g)&&(B=!1,g=l=0,clearInterval(m),m=null);G()}function Z(a,b,f){K();F();if(0==E)setTimeout(function(){Z(a,
b,f)},10);else{a=Number(a);isNaN(a)&&(a=0);b=Number(b);isNaN(b)&&(b=0);var k=t-v,g=u-w;a=H*v+a*A;b=I*w+b*y;a*=-1;b*=-1;a+=t/2;0<a&&(a=0);a<k&&(a=k);b+=u/2;0<b&&(b=0);b<g&&(b=g);!0===f?(B=!0,pa=a,qa=b,null==m&&(m=setInterval(N,1E3/60))):(k=-(v-t),g=-(w-u),a=0>k?a-k*q:0,b=0>g?b-g*r:0,e=a,c=b,G())}}function ta(a,b){Z(a,b,!0)}function ua(){x&&(p(window,"up",ha,!0,!0),p(window,"move",ia,!0,!0));null!=m&&(clearInterval(m),m=null);M=x=!1;z=[];g=l=0;B=!1;F()}function T(a,b){B=!1;a=Number(a);isNaN(a)&&(a=
0);b=Number(b);isNaN(b)&&(b=0);K();F();if(0!=E){var f=t-v,k=u-w,h=!1;0>f&&(e+=f*q,0<a&&0>e?(h=!0,l+=a):0>a&&e>f&&(h=!0,l+=a),e-=f*q);0>k&&(c+=k*r,0<b&&0>c?(h=!0,g+=b):0>b&&c>k&&(h=!0,g+=b),c-=k*r);h&&null==m&&(m=setInterval(N,1E3/60))}}var n=null,b=null,U=null,h=3,v=0,w=0,V=[0,0],E=!1,ea=null,t=0,u=0,B=!1,pa=0,qa=0,A=1,y=1,q=0,r=0,H=0,I=0,C=1,O=.95,P=.08,Q=.15,aa=1/15,L=!0,ca=!0,x=!1,X=0,Y=0,e=0,c=0,fa=0,ga=0,m=null,z=[],l=0,g=0,D=!0,ka=!0,M=!1,ja=!1;this.registerplugin=function(a,c,e){n=a;b=e;"1.19">
n.version?(n.trace(3,"Scrollarea Plugin - too old krpano version (min. version 1.19)"),b=n=null):(U=n.device,b.registerattribute("direction","all",function(a){a=String(a).toLowerCase();h=0;h|=1*(0<=a.indexOf("h"));h|=2*(0<=a.indexOf("v"));h|=3*(0<=a.indexOf("all"))},function(){return 3==(h&3)?"all":1==(h&1)?"h":"v"}),b.registerattribute("overscroll",C,function(a){C=0>a?0:1<a?1:a},function(){return C}),b.registerattribute("friction",O,function(a){O=Number(a)},function(){return O}),b.registerattribute("acceleration",
P,function(a){P=Number(a)},function(){return P}),b.registerattribute("returnacceleration",Q,function(a){Q=Number(a)},function(){return Q}),b.registerattribute("momentum",aa,function(a){aa=Number(a)},function(){return aa}),b.registerattribute("parentmaskchildren",!0),b.registerattribute("onscroll",null),b.registerattribute("woverflow",0),b.registerattribute("hoverflow",0),b.registerattribute("loverflow",0),b.registerattribute("roverflow",0),b.registerattribute("toverflow",0),b.registerattribute("boverflow",
0),b.registerattribute("draggable",!0,function(a){L=J(a)},function(){return L}),b.registerattribute("mwheel",!0,function(a){ca=J(a)},function(){return ca}),b.registerattribute("onhover_autoscrolling",!1,function(a){ja=J(a)},function(){return ja}),b.registerattribute("capturechildren",D,function(a){D=J(a);ka!=D&&(p(b.sprite,"down",W,ka,!0),p(b.sprite,"down",W,D),ka=D)},function(){return D}),b.registerattribute("csshardwareacceleration","auto"),b.setcenter=Z,b.scrolltocenter=ta,b.stopscrolling=ua,b.scrollby=
T,b.update=sa,1==J(b.csshardwareacceleration)&&(b.sprite.style[U.browser.css.transform+"Style"]="preserve-3d"),b.sprite.addEventListener("DOMMouseScroll",ba,!0),b.sprite.addEventListener("mousewheel",ba,!0),b.sprite.addEventListener("wheel",ba,!0),p(b.sprite,"down",W,D),p(b.sprite,"over",ma,!0),n.set("events["+b.name+"_scrollarea].keep",!0),n.set("events["+b.name+"_scrollarea].onresize",ra))};var R=0,S=0;this.onresize=function(a,b){if(!n)return!1;v=a;w=b;var f;B=!1;K();F();if(0==E)f=!1;else{f=t-v;
var g=u-w,h=!1;e+=f*q;if(0>f){if(0>e||e>f)h=!0}else 0!=e&&(h=!0);e-=f*q;c+=g*r;if(0>g){if(0>c||c>g)h=!0}else 0!=c&&(h=!0);c-=g*r;h&&null==m&&(m=setInterval(N,1E3/60));f=h}0==f&&G(!0);return!1};this.unloadplugin=function(){n&&b&&(n.set("events["+b.name+"_scrollarea].name",null),null!=m&&(clearInterval(m),m=null),p(b.sprite,"down",W,D,!0),p(b.sprite,"over",ma,!0,!0));n=b=null}};
