(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var Pe=/([:*])(\w+)/g,qe="([^/]+)",Te=/\*/g,Oe="?(?:.*)",Ae=/\/\?/g,Re="/?([^/]+|)",Ie="(?:/^|^)",He="";function ee(e){return e===void 0&&(e="/"),F()?location.pathname+location.search+location.hash:e}function p(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function T(e){return typeof e=="string"}function Ce(e){return typeof e=="function"}function O(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Be(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(n,s,o){return n===null&&(n={}),n[t[o]]=decodeURIComponent(s),n},null)}function A(e){var t=p(e).split(/\?(.*)?$/);return[p(t[0]),t.slice(1).join("")]}function M(e){for(var t={},n=e.split("&"),s=0;s<n.length;s++){var o=n[s].split("=");if(o[0]!==""){var a=decodeURIComponent(o[0]);t[a]?(Array.isArray(t[a])||(t[a]=[t[a]]),t[a].push(decodeURIComponent(o[1]||""))):t[a]=decodeURIComponent(o[1]||"")}}return t}function te(e,t){var n=A(p(e.currentLocationPath)),s=n[0],o=n[1],a=o===""?null:M(o),c=[],l;if(T(t.path)){if(l=Ie+p(t.path).replace(Pe,function(_,S,k){return c.push(k),qe}).replace(Te,Oe).replace(Ae,Re)+"$",p(t.path)===""&&p(s)==="")return{url:s,queryString:o,hashString:O(e.to),route:t,data:null,params:a}}else l=t.path;var m=new RegExp(l,He),h=s.match(m);if(h){var w=T(t.path)?Be(h,c):h.groups?h.groups:h.slice(1);return{url:p(s.replace(new RegExp("^"+e.instance.root),"")),queryString:o,hashString:O(e.to),route:t,data:w,params:a}}return!1}function ne(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function b(e,t){return typeof e[t]>"u"||e[t]===!0}function $e(e){if(!e)return{};var t=e.split(","),n={},s;return t.forEach(function(o){var a=o.split(":").map(function(c){return c.replace(/(^ +| +$)/g,"")});switch(a[0]){case"historyAPIMethod":n.historyAPIMethod=a[1];break;case"resolveOptionsStrategy":s||(s={}),s.strategy=a[1];break;case"resolveOptionsHash":s||(s={}),s.hash=a[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[a[0]]=a[1]==="true";break}}),s&&(n.resolveOptions=s),n}function F(){return typeof window<"u"}function Me(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(s){n[s]&&(t[s]||(t[s]=[]),t[s].push(n[s]))})}),t}function y(e,t,n){var s=t||{},o=0;(function a(){if(!e[o]){n&&n(s);return}Array.isArray(e[o])?(e.splice.apply(e,[o,1].concat(e[o][0](s)?e[o][1]:e[o][2])),a()):e[o](s,function(c){typeof c>"u"||c===!0?(o+=1,a()):n&&n(s)})})()}y.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};function K(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=ee(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function I(e,t){for(var n=0;n<e.instance.routes.length;n++){var s=e.instance.routes[n],o=te(e,s);if(o&&(e.matches||(e.matches=[]),e.matches.push(o),e.resolveOptions.strategy==="ONE")){t();return}}t()}function Fe(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function Ue(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var J=F(),je=ne();function Ne(e,t){if(b(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),s=J&&e.resolveOptions&&e.resolveOptions.hash===!0;je?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",s?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!s){var o=location.hash;location.hash="",location.hash=o}e.instance.__freezeListening=!1},1))):J&&(window.location.href=e.to)}t()}function se(e,t){var n=e.instance;if(!n.lastResolved()){t();return}y(n.lastResolved().map(function(s){return function(o,a){if(!s.route.hooks||!s.route.hooks.leave){a();return}var c=!1,l=e.instance.matchLocation(s.route.path,e.currentLocationPath,!1);if(s.route.path!=="*")c=!l;else{var m=e.matches?e.matches.find(function(h){return s.route.path===h.route.path}):!1;c=!m}if(b(e.navigateOptions,"callHooks")&&c){y(s.route.hooks.leave.map(function(h){return function(w,_){return h(function(S){S===!1?e.instance.__markAsClean(e):_()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return a()}]));return}else a()}}),{},function(){return t()})}function De(e,t){e.match.route.hooks&&e.match.route.hooks.before&&b(e.navigateOptions,"callHooks")?y(e.match.route.hooks.before.map(function(n){return function(o,a){return n(function(c){c===!1?e.instance.__markAsClean(e):a()},e.match)}}).concat([function(){return t()}])):t()}function Ge(e,t){b(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function We(e,t){e.match.route.hooks&&e.match.route.hooks.after&&b(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(n){return n(e.match)}),t()}function Ve(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString){n.forEach(function(s){s.route.hooks&&s.route.hooks.already&&b(e.navigateOptions,"callHooks")&&s.route.hooks.already.forEach(function(o){return o(e.match)})}),t(!1);return}t()}function ze(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var s=A(e.currentLocationPath),o=s[0],a=s[1],c=O(e.to);n.path=p(o);var l={url:n.path,queryString:a,hashString:c,data:null,route:n,params:a!==""?M(a):null};e.matches=[l],e.match=l}t()}function Xe(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function Ke(e,t){e.instance._setCurrent(null),t()}function re(e,t){b(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var oe=[Ve,De,Ge,We],Q=[se,ze,y.if(function(e){var t=e.notFoundHandled;return t},oe.concat([re]),[Xe,Ke])];function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},C.apply(this,arguments)}function Y(e,t){var n=0;function s(){if(n===e.matches.length){re(e,t);return}y(oe,C({},e,{match:e.matches[n]}),function(){n+=1,s()})}se(e,s)}function H(e){e.instance.__markAsClean(e)}function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},B.apply(this,arguments)}var Z="[data-navigo]";function Je(e,t){var n=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Z},s=this,o="/",a=null,c=[],l=!1,m,h=ne(),w=F();e?o=p(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function _(r){return r.indexOf("#")>=0&&(n.hash===!0?r=r.split("#")[1]||"/":r=r.split("#")[0]),r}function S(r){return p(o+"/"+p(r))}function k(r,i,u,f){return r=T(r)?S(r):r,{name:f||p(String(r)),path:r,handler:i,hooks:Me(u)}}function le(r,i,u){var f=this;return typeof r=="object"&&!(r instanceof RegExp)?(Object.keys(r).forEach(function(d){if(typeof r[d]=="function")f.on(d,r[d]);else{var v=r[d],L=v.uses,Le=v.as,Ee=v.hooks;c.push(k(d,L,[m,Ee],Le))}}),this):(typeof r=="function"&&(u=i,i=r,r=o),c.push(k(r,i,[m,u])),this)}function D(r,i){if(s.__dirty){s.__waiting.push(function(){return s.resolve(r,i)});return}else s.__dirty=!0;r=r?p(o)+"/"+p(r):void 0;var u={instance:s,to:r,currentLocationPath:r,navigateOptions:{},resolveOptions:B({},n,i)};return y([K,I,y.if(function(f){var d=f.matches;return d&&d.length>0},Y,Q)],u,H),u.matches?u.matches:!1}function G(r,i){if(s.__dirty){s.__waiting.push(function(){return s.navigate(r,i)});return}else s.__dirty=!0;r=p(o)+"/"+p(r);var u={instance:s,to:r,navigateOptions:i||{},resolveOptions:i&&i.resolveOptions?i.resolveOptions:n,currentLocationPath:_(r)};y([Fe,Ue,I,y.if(function(f){var d=f.matches;return d&&d.length>0},Y,Q),Ne,H],u,H)}function ue(r,i,u){var f=V(r,i);return f!==null?(G(f.replace(new RegExp("^/?"+o),""),u),!0):!1}function de(r){return this.routes=c=c.filter(function(i){return T(r)?p(i.path)!==p(r):Ce(r)?r!==i.handler:String(i.path)!==String(r)}),this}function fe(){h&&(this.__popstateListener=function(){s.__freezeListening||D()},window.addEventListener("popstate",this.__popstateListener))}function pe(){this.routes=c=[],h&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=l=!0}function he(r,i){return s._notFoundRoute=k("*",r,[m,i],"__NOT_FOUND__"),this}function W(){if(w)return me().forEach(function(r){if(r.getAttribute("data-navigo")==="false"||r.getAttribute("target")==="_blank"){r.hasListenerAttached&&r.removeEventListener("click",r.navigoHandler);return}r.hasListenerAttached||(r.hasListenerAttached=!0,r.navigoHandler=function(i){if((i.ctrlKey||i.metaKey)&&i.target.tagName.toLowerCase()==="a")return!1;var u=r.getAttribute("href");if(typeof u>"u"||u===null)return!1;if(u.match(/^(http|https)/)&&typeof URL<"u")try{var f=new URL(u);u=f.pathname+f.search}catch{}var d=$e(r.getAttribute("data-navigo-options"));l||(i.preventDefault(),i.stopPropagation(),s.navigate(p(u),d))},r.addEventListener("click",r.navigoHandler))}),s}function me(){return w?[].slice.call(document.querySelectorAll(n.linksSelector||Z)):[]}function ge(r){return"/"+o+"/"+p(r)}function ve(r){return m=r,this}function ye(){return a}function V(r,i,u){var f=c.find(function(L){return L.name===r}),d=null;if(f){if(d=f.path,i)for(var v in i)d=d.replace(":"+v,i[v]);d=d.match(/^\//)?d:"/"+d}return d&&u&&!u.includeRoot&&(d=d.replace(new RegExp("^/"+o),"")),d}function Se(r){return r.getAttribute("href")}function z(r){var i=A(p(r)),u=i[0],f=i[1],d=f===""?null:M(f),v=O(r),L=k(u,function(){},[m],u);return{url:u,queryString:f,hashString:v,route:L,data:null,params:d}}function be(){return z(p(ee(o)).replace(new RegExp("^"+o),""))}function we(r){var i={instance:s,currentLocationPath:r,to:r,navigateOptions:{},resolveOptions:n};return I(i,function(){}),i.matches?i.matches:!1}function _e(r,i,u){typeof i<"u"&&(typeof u>"u"||u)&&(i=S(i));var f={instance:s,to:i,currentLocationPath:i};K(f,function(){}),typeof r=="string"&&(r=typeof u>"u"||u?S(r):r);var d=te(f,{name:String(r),path:r,handler:function(){},hooks:{}});return d||!1}function P(r,i,u){return typeof i=="string"&&(i=X(i)),i?(i.hooks[r]||(i.hooks[r]=[]),i.hooks[r].push(u),function(){i.hooks[r]=i.hooks[r].filter(function(f){return f!==u})}):(console.warn("Route doesn't exists: "+i),function(){})}function X(r){return typeof r=="string"?c.find(function(i){return i.name===S(r)}):c.find(function(i){return i.handler===r})}function ke(r){r.instance.__dirty=!1,r.instance.__waiting.length>0&&r.instance.__waiting.shift()()}this.root=o,this.routes=c,this.destroyed=l,this.current=a,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=ke,this.on=le,this.off=de,this.resolve=D,this.navigate=G,this.navigateByName=ue,this.destroy=pe,this.notFound=he,this.updatePageLinks=W,this.link=ge,this.hooks=ve,this.extractGETParameters=function(r){return A(_(r))},this.lastResolved=ye,this.generate=V,this.getLinkPath=Se,this.match=we,this.matchLocation=_e,this.getCurrentLocation=be,this.addBeforeHook=P.bind(this,"before"),this.addAfterHook=P.bind(this,"after"),this.addAlreadyHook=P.bind(this,"already"),this.addLeaveHook=P.bind(this,"leave"),this.getRoute=X,this._pathToMatchObject=z,this._clean=p,this._checkForAHash=_,this._setCurrent=function(r){return a=s.current=r},fe.call(this),W.call(this)}const E="http://103.159.51.69:2000",Qe=async e=>{try{const n=await(await fetch(`${E}/${e}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("access_token")}`}})).json();if(n.detail==="token expired")throw new Error("token expired");return n}catch(t){throw t}},U=async(e,t)=>{try{const s=await(await fetch(`${E}/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("access_token")}`},body:JSON.stringify(t)})).json();if(s.detail==="token expired")throw new Error("token expired");if(s.detail==="Wrong username or password")throw new Error("Wrong username or password");if(s.detail==="Email already exists")throw new Error("Email already exists");return s}catch(n){throw n}},Ye=async(e,t)=>{try{const s=await(await fetch(`${E}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("access_token")}`},body:JSON.stringify(t)})).json();if(s.detail==="token expired")throw new Error("token expired");return s}catch(n){throw n}},x=async e=>{try{const n=await(await fetch(`${E}/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("access_token")}`}})).json();if(n.detail==="token expired")throw new Error("token expired");return n}catch(t){throw t}},R=async()=>await(await fetch(`${E}/login/get_new_token`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:localStorage.getItem("refresh_token")})})).json(),Ze=`
    <div class="auth-container w--1200">
        <div class="msg-success"></div>
        <form>
            <h1>Login</h1>
            <div class="msg none"></div>
            <div class="form-group">
                <label for="email">Email</label>
                <div class="msg-email none"></div>
                <input type="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <div class="msg-password none"></div>
                <input type="password" name="password" placeholder="Password" required>
            </div>
            <div class="form-action">
                <button type="submit" class="login-btn">Login</button>
                <button class="register-btn">Register</button>
            </div>
        </form>
    </div>
`,q=()=>{const e=document.querySelector("#app");e.innerHTML=Ze;const t=document.querySelector(".msg"),n=document.querySelector(".msg-email"),s=document.querySelector(".msg-password"),o=document.querySelector(".msg-success");if(sessionStorage.getItem("msg_success")){let l;sessionStorage.getItem("msg_success")=="registered"&&(l="Đăng ký thành công!"),sessionStorage.getItem("msg_success")=="loggedOut"&&(l="Đăng xuất thành công!"),o.style.top="-100px",o.innerText=l,setTimeout(()=>{o.style.top="50px"}),setTimeout(()=>{o.style.top="-100px",sessionStorage.removeItem("msg_success")},2e3)}document.querySelector(".login-btn").addEventListener("click",l=>xe(l)),document.querySelector(".register-btn").addEventListener("click",l=>{l.preventDefault(),g.navigate("/register")}),document.querySelector("input[name='email']").addEventListener("input",l=>{t.style.display="none",n.style.display="none",s.style.display="none"}),document.querySelector("input[name='password']").addEventListener("input",l=>{t.style.display="none",n.style.display="none",s.style.display="none"})},xe=async e=>{e.preventDefault();let t=!0;const n=document.querySelector("input[name='email']").value,s=document.querySelector("input[name='password']").value,o=document.querySelector(".msg"),a=document.querySelector(".msg-email"),c=document.querySelector(".msg-password");if(n==""||s==""?(t=!1,o.style.display="block",o.innerHTML="<span>Vui lòng nhập đầy đủ email và password.</span>"):((!n.includes("@")||!n.includes(".com"))&&(t=!1,a.style.display="block",a.innerHTML="<span>Vui lòng nhập đúng định dạng email.</span>"),s.length<8&&(t=!1,c.style.display="block",c.innerHTML="<span>Password không ít hơn 8 ký tự.</span>")),t)try{const l={email:n,password:s};e.target.disabled=!0,e.target.innerText="Loading...";const m=await U("login",l);localStorage.setItem("access_token",m.access),localStorage.setItem("refresh_token",m.refresh),sessionStorage.setItem("msg_success","loggedIn"),g.navigate("/")}catch(l){e.target.disabled=!1,e.target.innerText="Login",l.message==="Wrong username or password"&&(o.style.display="block",o.innerHTML="<span>Email hoặc password không chính xác.</span>")}},j=`
    <header class="white--text primary--bg">
        <div class="header-content display--flex justify--between">
            <div class="logo">Final Project</div>
            <div class="user-info">Welcome, Shinki</div>
            <button type="button" class="logout-btn">Logout</button>
        </div>
    </header>
`,et=`
    <div class="table-container w--1200 center">
        <div class="msg-success"></div>
        <h1>Your Posts</h1>
        <button class="create-post-btn"><i class="fa-solid fa-plus"></i> Create Post</button>
        <table class="w--full" cellspacing="0">
            <tr>
                <th class="w--10">ID</th>
                <th class="w--20">Title</th>
                <th class="w--50">Content</th>
                <th>Action</th>
            </tr>
        </table>
    </div>
`;async function $(){const e=j+et,t=document.querySelector("#app");t.innerHTML=e;const n=document.querySelector(".msg-success");if(sessionStorage.getItem("msg_success")){let o="";sessionStorage.getItem("msg_success")=="loggedIn"&&(o="Đăng nhập thành công!"),sessionStorage.getItem("msg_success")=="createdPost"&&(o="Tạo bài viết thành công!"),sessionStorage.getItem("msg_success")=="updatedPost"&&(o="Sửa bài viết thành công!"),n.style.top="-100px",n.innerText=o,setTimeout(()=>{n.style.top="80px"}),setTimeout(()=>{n.style.top="-100px",sessionStorage.removeItem("msg_success")},2e3)}await ae(),document.querySelector(".logout-btn").addEventListener("click",N),document.querySelector(".create-post-btn").addEventListener("click",()=>{g.navigate("/post/0")})}const ae=async()=>{try{const e=await Qe("post");if(e){const t=e.map(a=>`<tr>
                <td>${a.id}</td>
                <td>${a.title}</td>
                <td>${a.content}</td>
                <td>
                    <button class="edit-btn" data-id="${a.id}" data-title="${a.title}" data-content="${a.content}"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>`).join(""),n=document.querySelector(".table-container table");n.innerHTML+=t,document.querySelectorAll(".edit-btn").forEach(a=>{a.addEventListener("click",c=>{c.preventDefault();const l=a.dataset.id,m=a.dataset.title,h=a.dataset.content;sessionStorage.setItem("title",m),sessionStorage.setItem("content",h),g.navigate(`/post/${l}`)})}),document.querySelectorAll(".delete-btn").forEach(a=>{a.addEventListener("click",async c=>{c.preventDefault();const l=a.previousElementSibling.dataset.id;try{await x(`post/${l}`),await $()}catch(m){if(m.message==="token expired"){const h=await R();localStorage.setItem("access_token",h.access),localStorage.setItem("refresh_token",h.refresh),await x(`post/${l}`),await $()}}})})}}catch(e){if(e.message==="token expired"){const t=await R();localStorage.setItem("access_token",t.access),localStorage.setItem("refresh_token",t.refresh),ae()}}},N=()=>{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),sessionStorage.setItem("msg_success","loggedOut"),g.navigate("/login")},tt=`
    <div class="auth-container w--1200">
        <form>
            <h1>Register</h1>
            <div class="msg none"></div>
            <div class="form-group">
                <label for="username">Username</label>
                <div class="msg-username none"></div>
                <input type="text" name="username" placeholder="Username" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <div class="msg-email none"></div>
                <input type="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <div class="msg-password none"></div>
                <input type="password" name="password" placeholder="Password" required>
            </div>
            <div class="form-action">
                <button type="submit" class="register-btn">Register</button>
                <button class="login-btn">Login</button>
            </div>
        </form>
    </div>
`,nt=()=>{const e=document.querySelector("#app");e.innerHTML=tt;const t=document.querySelector(".msg"),n=document.querySelector(".msg-username"),s=document.querySelector(".msg-email"),o=document.querySelector(".msg-password");document.querySelector(".register-btn").addEventListener("click",l=>st(l)),document.querySelector(".login-btn").addEventListener("click",l=>{l.preventDefault(),g.navigate("/login")}),document.querySelector("input[name='email']").addEventListener("input",l=>{t.style.display="none",n.style.display="none",s.style.display="none",o.style.display="none"}),document.querySelector("input[name='password']").addEventListener("input",l=>{t.style.display="none",n.style.display="none",s.style.display="none",o.style.display="none"}),document.querySelector("input[name='username']").addEventListener("input",l=>{t.style.display="none",n.style.display="none",s.style.display="none",o.style.display="none"})},st=async e=>{e.preventDefault();let t=!0;const n=document.querySelector("input[name='username']").value,s=document.querySelector("input[name='email']").value,o=document.querySelector("input[name='password']").value,a=document.querySelector(".msg"),c=document.querySelector(".msg-username"),l=document.querySelector(".msg-email"),m=document.querySelector(".msg-password");if(n==""||s==""||o==""?(t=!1,a.style.display="block",a.innerHTML="<span>Vui lòng không để trống thông tin.</span>"):((!s.includes("@")||!s.includes(".com"))&&(t=!1,l.style.display="block",l.innerHTML="<span>Vui lòng nhập đúng định dạng email.</span>"),o.length<8&&(t=!1,m.style.display="block",m.innerHTML="<span>Password không ít hơn 8 ký tự.</span>"),n.length<8&&(t=!1,c.style.display="block",c.innerHTML="<span>Username không ít hơn 8 ký tự.</span>")),t)try{const h={name:n,email:s,password:o};e.target.disabled=!0,e.target.innerText="Loading...",await U("master/user",h)&&(sessionStorage.setItem("msg_success","registered"),g.navigate("/login"))}catch(h){e.target.disabled=!1,e.target.innerText="Register",h.message==="Email already exists"&&(a.style.display="block",a.innerHTML="<span>Email đã tồn tại.</span>")}},rt=`<div class="create-post-container">
<form>
    <h1>Create Post</h1>
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" placeholder="Title..." required>
        </div>
        <div class="form-group">
            <label for="content">Content</label>
            <textarea rows="10" name="content" placeholder="Content..." required></textarea>
        </div>
        <div class="form-action">
            <button type="submit" class="save-post-btn">Create</button>
            <button class="back-btn">Back to home</button>
        </div>
    </form>
</div>`,ot=()=>{const e=j+rt,t=document.querySelector("#app");t.innerHTML=e,document.querySelector(".logout-btn").addEventListener("click",N),document.querySelector(".back-btn").addEventListener("click",o=>{o.preventDefault(),g.navigate("/")}),document.querySelector(".save-post-btn").addEventListener("click",o=>ie(o))},ie=async e=>{e.preventDefault();const t=document.querySelector("input[name='title']").value,n=document.querySelector("textarea[name='content']").value,s={title:t,content:n};try{await U("post",s)&&(sessionStorage.setItem("msg_success","createdPost"),g.navigate("/"))}catch(o){if(o.message==="token expired"){const a=await R();localStorage.setItem("access_token",a.access),localStorage.setItem("refresh_token",a.refresh),ie(e)}}},at=`<div class="create-post-container">
<form>
    <h1>Update Post</h1>
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" placeholder="Title..." required>
        </div>
        <div class="form-group">
            <label for="content">Content</label>
            <textarea rows="10" name="content" placeholder="Content..." required></textarea>
        </div>
        <div class="form-action">
            <button type="submit" class="save-post-btn">Update</button>
            <button class="back-btn">Back to home</button>
        </div>
    </form>
</div>`,ce=async(e,t)=>{e.preventDefault();try{const n=document.querySelector("input[name='title']").value,s=document.querySelector("textarea[name='content']").value;await Ye(`post/${t}`,{title:n,content:s})&&(sessionStorage.setItem("msg_success","updatedPost"),g.navigate("/"))}catch(n){if(n.message==="token expired"){const s=await R();localStorage.setItem("access_token",s.access),localStorage.setItem("refresh_token",s.refresh),ce(e,t)}}},it=e=>{const t=j+at,n=document.querySelector("#app");n.innerHTML=t,document.querySelector("input[name='title']").value=sessionStorage.getItem("title"),document.querySelector("textarea[name='content']").textContent=sessionStorage.getItem("content"),document.querySelector(".logout-btn").addEventListener("click",N),document.querySelector(".back-btn").addEventListener("click",a=>{a.preventDefault(),g.navigate("/")}),document.querySelector(".save-post-btn").addEventListener("click",a=>ce(a,e))};document.querySelector("#app");const g=new Je("/");g.on({"/":function(){if(!localStorage.getItem("access_token")){q();return}$()},"/login":function(){if(localStorage.getItem("access_token")){g.navigate("/");return}q()},"/register":function(){if(localStorage.getItem("access_token")){g.navigate("/");return}nt()},"/post/0":function(){if(!localStorage.getItem("access_token")){q();return}ot()},"/post/:id":function(e){if(!localStorage.getItem("access_token")){q();return}it(e.data.id)}});g.resolve();
