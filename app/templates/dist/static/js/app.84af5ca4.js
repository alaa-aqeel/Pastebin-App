(function(t){function e(e){for(var o,r,i=e[0],c=e[1],s=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a={app:0},u=[];function i(t){return c.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"91e800a4","chunk-2d0b9a64":"6f5b9d2b","chunk-2d0cf100":"f0fb4fe8","chunk-2d0f07fe":"76ddc0ae"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="static/css/"+({about:"about"}[t]||t)+"."+{about:"6ccef68f","chunk-2d0b9a64":"31d6cfe0","chunk-2d0cf100":"31d6cfe0","chunk-2d0f07fe":"31d6cfe0"}[t]+".css",a=c.p+o,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===o||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[t],d.parentNode.removeChild(d),n(u)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var u=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("5f5b"),a=n("b1e0"),u=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[t.$store.state.isLogin?[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("logout")])]:[n("router-link",{attrs:{to:"/login"}},[t._v("Login")]),t._v(" | "),n("router-link",{attrs:{to:"/register",v:""}},[t._v("Register")])]],2),n("router-view")],1)}),i=[],c={methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push("login")}}},s=c,l=(n("034f"),n("2877")),f=Object(l["a"])(s,u,i,!1,null,null,null),d=f.exports,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),m=(n("4de4"),n("d81d"),n("2f62")),p=n("bc3a"),g=n.n(p),v=g.a.create({baseURL:"http://127.0.0.1:8000/api/"});v.defaults.headers.common["Authorization"]=localStorage.getItem("auth_token");var b=v;o["default"].use(m["a"]);var y=new m["a"].Store({state:{user:null,isLogin:null,texts:[]},mutations:{setData:function(t,e){t.texts=e.results},addToData:function(t,e){t.texts.push(e)},removeData:function(t,e){t.texts=t.texts.filter((function(t){return t.id!=e}))},updateData:function(t,e){t.texts=t.texts.map((function(t){return t.id==e.id?e:t}))},setUser:function(t,e){t.user=e,t.isLogin=!0},setToken:function(t,e){localStorage.setItem("auth_token",e),b.defaults.headers.common["Authorization"]="Bearer ".concat(e)},destroyToken:function(t){localStorage.removeItem("auth_token"),b.defaults.headers.common["Authorization"]=null,t.isLogin=!1}},actions:{logout:function(t){var e=t.commit;e("destroyToken")},user:function(t){var e=t.commit;return b.get("me/").then((function(t){var n=t.data;return e("setUser",n),n}))},login:function(t,e){var n=t.commit;return b.post("login/",e).then((function(t){var e=t.data;n("setToken",e.access)}))},register:function(t,e){t.commit;return b.post("register/",e)},getAllText:function(t){var e=t.commit;return b.get("text/").then((function(t){var n=t.data;return e("setData",n),n}))},createText:function(t,e){var n=t.commit;return b.post("text/",e).then((function(t){var e=t.data;n("addToData",e)}))},deleteText:function(t,e){var n=t.commit;return b.delete("text/"+e.id,e).then((function(){n("removeData",e.id)}))},saveText:function(t,e){var n=t.commit;return b.put("text/".concat(e.id,"/"),e).then((function(t){var e=t.data;return n("updateData",e),e}))},getText:function(t,e){t.commit;return b.get("text/link/".concat(e))}}});o["default"].use(h["a"]);var k=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))},meta:{isAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))},meta:{isAuth:!1}},{path:"/text/:hash",name:"TextView",component:function(){return n.e("about").then(n.bind(null,"ab7f"))},meta:{isAuth:!0}},{path:"/register",name:"register",component:function(){return n.e("about").then(n.bind(null,"73cf"))},meta:{isAuth:!1}}],x=new h["a"]({mode:"history",base:"/",routes:k});x.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.isAuth}))?null!=localStorage.getItem("auth_token")?(y.commit("setToken",localStorage.getItem("auth_token")),y.state.isLogin?n():y.dispatch("user").then((function(){n()})).catch((function(){y.dispatch("logout"),n("login")}))):(y.dispatch("logout"),n("login")):y.state.isLogin&&0==t.meta.isAuth?n("/"):n()}));var _=x;o["default"].use(r["a"]),o["default"].use(a["a"]),o["default"].config.productionTip=!1,new o["default"]({router:_,store:y,render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.84af5ca4.js.map