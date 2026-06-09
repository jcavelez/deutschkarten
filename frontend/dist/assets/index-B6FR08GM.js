(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function Vc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ws={exports:{}},yl={},ks={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),Wc=Symbol.for("react.portal"),Hc=Symbol.for("react.fragment"),Qc=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),Gc=Symbol.for("react.context"),Xc=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),Jc=Symbol.for("react.memo"),qc=Symbol.for("react.lazy"),ta=Symbol.iterator;function ed(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ss=Object.assign,Ns={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=Ns,this.updater=n||js}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cs(){}Cs.prototype=Sn.prototype;function ti(e,t,n){this.props=e,this.context=t,this.refs=Ns,this.updater=n||js}var ni=ti.prototype=new Cs;ni.constructor=ti;Ss(ni,Sn.prototype);ni.isPureReactComponent=!0;var na=Array.isArray,bs=Object.prototype.hasOwnProperty,ri={current:null},Es={key:!0,ref:!0,__self:!0,__source:!0};function zs(e,t,n){var r,l={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)bs.call(t,r)&&!Es.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:pr,type:e,key:o,ref:a,props:l,_owner:ri.current}}function td(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function li(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function nd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ra=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?nd(""+e.key):t.toString(36)}function Fr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case pr:case Wc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Dl(a,0):r,na(l)?(n="",e!=null&&(n=e.replace(ra,"$&/")+"/"),Fr(l,t,n,"",function(d){return d})):l!=null&&(li(l)&&(l=td(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(ra,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",na(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Dl(o,s);a+=Fr(o,t,n,u,l)}else if(u=ed(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Dl(o,s++),a+=Fr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function yr(e,t,n){if(e==null)return e;var r=[],l=0;return Fr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function rd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Rr={transition:null},ld={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Rr,ReactCurrentOwner:ri};function _s(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:yr,forEach:function(e,t,n){yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yr(e,function(){t++}),t},toArray:function(e){return yr(e,function(t){return t})||[]},only:function(e){if(!li(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Sn;R.Fragment=Hc;R.Profiler=Kc;R.PureComponent=ti;R.StrictMode=Qc;R.Suspense=Zc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ld;R.act=_s;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ss({},e.props),l=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ri.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)bs.call(t,u)&&!Es.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:pr,type:e.type,key:l,ref:o,props:r,_owner:a}};R.createContext=function(e){return e={$$typeof:Gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yc,_context:e},e.Consumer=e};R.createElement=zs;R.createFactory=function(e){var t=zs.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Xc,render:e}};R.isValidElement=li;R.lazy=function(e){return{$$typeof:qc,_payload:{_status:-1,_result:e},_init:rd}};R.memo=function(e,t){return{$$typeof:Jc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Rr.transition;Rr.transition={};try{e()}finally{Rr.transition=t}};R.unstable_act=_s;R.useCallback=function(e,t){return he.current.useCallback(e,t)};R.useContext=function(e){return he.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return he.current.useDeferredValue(e)};R.useEffect=function(e,t){return he.current.useEffect(e,t)};R.useId=function(){return he.current.useId()};R.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return he.current.useMemo(e,t)};R.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};R.useRef=function(e){return he.current.useRef(e)};R.useState=function(e){return he.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return he.current.useTransition()};R.version="18.3.1";ks.exports=R;var S=ks.exports;const Te=Vc(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od=S,id=Symbol.for("react.element"),ad=Symbol.for("react.fragment"),sd=Object.prototype.hasOwnProperty,ud=od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cd={key:!0,ref:!0,__self:!0,__source:!0};function Ts(e,t,n){var r,l={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)sd.call(t,r)&&!cd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:id,type:e,key:o,ref:a,props:l,_owner:ud.current}}yl.Fragment=ad;yl.jsx=Ts;yl.jsxs=Ts;ws.exports=yl;var i=ws.exports,Ps={exports:{}},be={},Ls={exports:{}},Ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var D=T.length;T.push(M);e:for(;0<D;){var B=D-1>>>1,H=T[B];if(0<l(H,M))T[B]=M,T[D]=H,D=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var M=T[0],D=T.pop();if(D!==M){T[0]=D;e:for(var B=0,H=T.length,ft=H>>>1;B<ft;){var qe=2*(B+1)-1,bn=T[qe],He=qe+1,et=T[He];if(0>l(bn,D))He<H&&0>l(et,bn)?(T[B]=et,T[He]=D,B=He):(T[B]=bn,T[qe]=D,B=qe);else if(He<H&&0>l(et,D))T[B]=et,T[He]=D,B=He;else break e}}return M}function l(T,M){var D=T.sortIndex-M.sortIndex;return D!==0?D:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],h=1,g=null,m=3,v=!1,x=!1,j=!1,F=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var M=n(d);M!==null;){if(M.callback===null)r(d);else if(M.startTime<=T)r(d),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(d)}}function y(T){if(j=!1,f(T),!x)if(n(u)!==null)x=!0,We(C);else{var M=n(d);M!==null&&Mt(y,M.startTime-T)}}function C(T,M){x=!1,j&&(j=!1,p(k),k=-1),v=!0;var D=m;try{for(f(M),g=n(u);g!==null&&(!(g.expirationTime>M)||T&&!E());){var B=g.callback;if(typeof B=="function"){g.callback=null,m=g.priorityLevel;var H=B(g.expirationTime<=M);M=e.unstable_now(),typeof H=="function"?g.callback=H:g===n(u)&&r(u),f(M)}else r(u);g=n(u)}if(g!==null)var ft=!0;else{var qe=n(d);qe!==null&&Mt(y,qe.startTime-M),ft=!1}return ft}finally{g=null,m=D,v=!1}}var z=!1,N=null,k=-1,b=5,_=-1;function E(){return!(e.unstable_now()-_<b)}function O(){if(N!==null){var T=e.unstable_now();_=T;var M=!0;try{M=N(!0,T)}finally{M?I():(z=!1,N=null)}}else z=!1}var I;if(typeof c=="function")I=function(){c(O)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,J=ae.port2;ae.port1.onmessage=O,I=function(){J.postMessage(null)}}else I=function(){F(O,0)};function We(T){N=T,z||(z=!0,I())}function Mt(T,M){k=F(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,We(C))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var D=m;m=M;try{return T()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=m;m=T;try{return M()}finally{m=D}},e.unstable_scheduleCallback=function(T,M,D){var B=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?B+D:B):D=B,T){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=D+H,T={id:h++,callback:M,priorityLevel:T,startTime:D,expirationTime:H,sortIndex:-1},D>B?(T.sortIndex=D,t(d,T),n(u)===null&&T===n(d)&&(j?(p(k),k=-1):j=!0,Mt(y,D-B))):(T.sortIndex=H,t(u,T),x||v||(x=!0,We(C))),T},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(T){var M=m;return function(){var D=m;m=M;try{return T.apply(this,arguments)}finally{m=D}}}})(Ms);Ls.exports=Ms;var dd=Ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd=S,Ce=dd;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ds=new Set,Gn={};function Qt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)Ds.add(t[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=Object.prototype.hasOwnProperty,pd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},oa={};function md(e){return io.call(oa,e)?!0:io.call(la,e)?!1:pd.test(e)?oa[e]=!0:(la[e]=!0,!1)}function hd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gd(e,t,n,r){if(t===null||typeof t>"u"||hd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,l,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var oi=/[\-:]([a-z])/g;function ii(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oi,ii);ie[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oi,ii);ie[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oi,ii);ie[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ai(e,t,n,r){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gd(t,n,l,r)&&(n=null),r||l===null?md(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),si=Symbol.for("react.strict_mode"),ao=Symbol.for("react.profiler"),Fs=Symbol.for("react.provider"),Rs=Symbol.for("react.context"),ui=Symbol.for("react.forward_ref"),so=Symbol.for("react.suspense"),uo=Symbol.for("react.suspense_list"),ci=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Os=Symbol.for("react.offscreen"),ia=Symbol.iterator;function zn(e){return e===null||typeof e!="object"?null:(e=ia&&e[ia]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Fl;function Rn(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Rl=!1;function Ol(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),a=l.length-1,s=o.length-1;1<=a&&0<=s&&l[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==o[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function vd(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Xt:return"Portal";case ao:return"Profiler";case si:return"StrictMode";case so:return"Suspense";case uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rs:return(e.displayName||"Context")+".Consumer";case Fs:return(e._context.displayName||"Context")+".Provider";case ui:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ci:return t=e.displayName||null,t!==null?t:co(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return co(e(t))}catch{}}return null}function yd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return co(t);case 8:return t===si?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Is(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xd(e){var t=Is(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=xd(e))}function Us(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Is(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function As(e,t){t=t.checked,t!=null&&ai(e,"checked",t,!1)}function po(e,t){As(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&mo(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mo(e,t,n){(t!=="number"||Kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(On(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function $s(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function go(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,Vs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wd=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function Ws(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function Hs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ws(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var kd=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vo(e,t){if(t){if(kd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function yo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xo=null;function di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wo=null,cn=null,dn=null;function da(e){if(e=gr(e)){if(typeof wo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Sl(t),wo(e.stateNode,e.type,t))}}function Qs(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Ks(){if(cn){var e=cn,t=dn;if(dn=cn=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function Ys(e,t){return e(t)}function Gs(){}var Il=!1;function Xs(e,t,n){if(Il)return e(t,n);Il=!0;try{return Ys(e,t,n)}finally{Il=!1,(cn!==null||dn!==null)&&(Gs(),Ks())}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var ko=!1;if(it)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){ko=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{ko=!1}function jd(e,t,n,r,l,o,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var $n=!1,Yr=null,Gr=!1,jo=null,Sd={onError:function(e){$n=!0,Yr=e}};function Nd(e,t,n,r,l,o,a,s,u){$n=!1,Yr=null,jd.apply(Sd,arguments)}function Cd(e,t,n,r,l,o,a,s,u){if(Nd.apply(this,arguments),$n){if($n){var d=Yr;$n=!1,Yr=null}else throw Error(w(198));Gr||(Gr=!0,jo=d)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fa(e){if(Kt(e)!==e)throw Error(w(188))}function bd(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return fa(l),e;if(o===r)return fa(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=o;break}if(s===r){a=!0,r=l,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=l;break}if(s===r){a=!0,r=o,n=l;break}s=s.sibling}if(!a)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Js(e){return e=bd(e),e!==null?qs(e):null}function qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qs(e);if(t!==null)return t;e=e.sibling}return null}var eu=Ce.unstable_scheduleCallback,pa=Ce.unstable_cancelCallback,Ed=Ce.unstable_shouldYield,zd=Ce.unstable_requestPaint,Z=Ce.unstable_now,_d=Ce.unstable_getCurrentPriorityLevel,fi=Ce.unstable_ImmediatePriority,tu=Ce.unstable_UserBlockingPriority,Xr=Ce.unstable_NormalPriority,Td=Ce.unstable_LowPriority,nu=Ce.unstable_IdlePriority,xl=null,Xe=null;function Pd(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:Dd,Ld=Math.log,Md=Math.LN2;function Dd(e){return e>>>=0,e===0?32:31-(Ld(e)/Md|0)|0}var jr=64,Sr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=In(s):(o&=a,o!==0&&(r=In(o)))}else a=n&~l,a!==0?r=In(a):o!==0&&(r=In(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),l=1<<n,r|=e[n],t&=~l;return r}function Fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-$e(o),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=Fd(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function So(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ru(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function Od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-$e(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function pi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var A=0;function lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ou,mi,iu,au,su,No=!1,Nr=[],wt=null,kt=null,jt=null,Jn=new Map,qn=new Map,gt=[],Id="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ma(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function Tn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=gr(t),t!==null&&mi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ud(e,t,n,r,l){switch(t){case"focusin":return wt=Tn(wt,e,t,n,r,l),!0;case"dragenter":return kt=Tn(kt,e,t,n,r,l),!0;case"mouseover":return jt=Tn(jt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Jn.set(o,Tn(Jn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,qn.set(o,Tn(qn.get(o)||null,e,t,n,r,l)),!0}return!1}function uu(e){var t=Rt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Zs(n),t!==null){e.blockedOn=t,su(e.priority,function(){iu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xo=r,n.target.dispatchEvent(r),xo=null}else return t=gr(n),t!==null&&mi(t),e.blockedOn=n,!1;t.shift()}return!0}function ha(e,t,n){Or(e)&&n.delete(t)}function Ad(){No=!1,wt!==null&&Or(wt)&&(wt=null),kt!==null&&Or(kt)&&(kt=null),jt!==null&&Or(jt)&&(jt=null),Jn.forEach(ha),qn.forEach(ha)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,No||(No=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Ad)))}function er(e){function t(l){return Pn(l,e)}if(0<Nr.length){Pn(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&Pn(wt,e),kt!==null&&Pn(kt,e),jt!==null&&Pn(jt,e),Jn.forEach(t),qn.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)uu(n),n.blockedOn===null&&gt.shift()}var fn=dt.ReactCurrentBatchConfig,Jr=!0;function $d(e,t,n,r){var l=A,o=fn.transition;fn.transition=null;try{A=1,hi(e,t,n,r)}finally{A=l,fn.transition=o}}function Bd(e,t,n,r){var l=A,o=fn.transition;fn.transition=null;try{A=4,hi(e,t,n,r)}finally{A=l,fn.transition=o}}function hi(e,t,n,r){if(Jr){var l=Co(e,t,n,r);if(l===null)Gl(e,t,r,qr,n),ma(e,r);else if(Ud(l,e,t,n,r))r.stopPropagation();else if(ma(e,r),t&4&&-1<Id.indexOf(e)){for(;l!==null;){var o=gr(l);if(o!==null&&ou(o),o=Co(e,t,n,r),o===null&&Gl(e,t,r,qr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Gl(e,t,r,null,n)}}var qr=null;function Co(e,t,n,r){if(qr=null,e=di(r),e=Rt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_d()){case fi:return 1;case tu:return 4;case Xr:case Td:return 16;case nu:return 536870912;default:return 16}default:return 16}}var yt=null,gi=null,Ir=null;function du(){if(Ir)return Ir;var e,t=gi,n=t.length,r,l="value"in yt?yt.value:yt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[o-r];r++);return Ir=l.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function ga(){return!1}function Ee(e){function t(n,r,l,o,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Cr:ga,this.isPropagationStopped=ga,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=Ee(Nn),hr=G({},Nn,{view:0,detail:0}),Vd=Ee(hr),Al,$l,Ln,wl=G({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Al=e.screenX-Ln.screenX,$l=e.screenY-Ln.screenY):$l=Al=0,Ln=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),va=Ee(wl),Wd=G({},wl,{dataTransfer:0}),Hd=Ee(Wd),Qd=G({},hr,{relatedTarget:0}),Bl=Ee(Qd),Kd=G({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),Yd=Ee(Kd),Gd=G({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xd=Ee(Gd),Zd=G({},Nn,{data:0}),ya=Ee(Zd),Jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ef[e])?!!t[e]:!1}function yi(){return tf}var nf=G({},hr,{key:function(e){if(e.key){var t=Jd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yi,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=Ee(nf),lf=G({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xa=Ee(lf),of=G({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yi}),af=Ee(of),sf=G({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),uf=Ee(sf),cf=G({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),df=Ee(cf),ff=[9,13,27,32],xi=it&&"CompositionEvent"in window,Bn=null;it&&"documentMode"in document&&(Bn=document.documentMode);var pf=it&&"TextEvent"in window&&!Bn,fu=it&&(!xi||Bn&&8<Bn&&11>=Bn),wa=" ",ka=!1;function pu(e,t){switch(e){case"keyup":return ff.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function mf(e,t){switch(e){case"compositionend":return mu(t);case"keypress":return t.which!==32?null:(ka=!0,wa);case"textInput":return e=t.data,e===wa&&ka?null:e;default:return null}}function hf(e,t){if(Jt)return e==="compositionend"||!xi&&pu(e,t)?(e=du(),Ir=gi=yt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fu&&t.locale!=="ko"?null:t.data;default:return null}}var gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gf[e.type]:t==="textarea"}function hu(e,t,n,r){Qs(r),t=el(t,"onChange"),0<t.length&&(n=new vi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,tr=null;function vf(e){bu(e,0)}function kl(e){var t=tn(e);if(Us(t))return e}function yf(e,t){if(e==="change")return t}var gu=!1;if(it){var Vl;if(it){var Wl="oninput"in document;if(!Wl){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Wl=typeof Sa.oninput=="function"}Vl=Wl}else Vl=!1;gu=Vl&&(!document.documentMode||9<document.documentMode)}function Na(){Vn&&(Vn.detachEvent("onpropertychange",vu),tr=Vn=null)}function vu(e){if(e.propertyName==="value"&&kl(tr)){var t=[];hu(t,tr,e,di(e)),Xs(vf,t)}}function xf(e,t,n){e==="focusin"?(Na(),Vn=t,tr=n,Vn.attachEvent("onpropertychange",vu)):e==="focusout"&&Na()}function wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(tr)}function kf(e,t){if(e==="click")return kl(t)}function jf(e,t){if(e==="input"||e==="change")return kl(t)}function Sf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:Sf;function nr(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!io.call(t,l)||!Ve(e[l],t[l]))return!1}return!0}function Ca(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ba(e,t){var n=Ca(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ca(n)}}function yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xu(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function wi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nf(e){var t=xu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yu(n.ownerDocument.documentElement,n)){if(r!==null&&wi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ba(n,o);var a=ba(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cf=it&&"documentMode"in document&&11>=document.documentMode,qt=null,bo=null,Wn=null,Eo=!1;function Ea(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eo||qt==null||qt!==Kr(r)||(r=qt,"selectionStart"in r&&wi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wn&&nr(Wn,r)||(Wn=r,r=el(bo,"onSelect"),0<r.length&&(t=new vi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},Hl={},wu={};it&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function jl(e){if(Hl[e])return Hl[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wu)return Hl[e]=t[n];return e}var ku=jl("animationend"),ju=jl("animationiteration"),Su=jl("animationstart"),Nu=jl("transitionend"),Cu=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Cu.set(e,t),Qt(t,[e])}for(var Ql=0;Ql<za.length;Ql++){var Kl=za[Ql],bf=Kl.toLowerCase(),Ef=Kl[0].toUpperCase()+Kl.slice(1);Tt(bf,"on"+Ef)}Tt(ku,"onAnimationEnd");Tt(ju,"onAnimationIteration");Tt(Su,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(Nu,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));function _a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cd(r,t,void 0,e),e.currentTarget=null}function bu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;_a(l,s,d),o=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;_a(l,s,d),o=u}}}if(Gr)throw e=jo,Gr=!1,jo=null,e}function V(e,t){var n=t[Lo];n===void 0&&(n=t[Lo]=new Set);var r=e+"__bubble";n.has(r)||(Eu(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Eu(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Er]){e[Er]=!0,Ds.forEach(function(n){n!=="selectionchange"&&(zf.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,Yl("selectionchange",!1,t))}}function Eu(e,t,n,r){switch(cu(t)){case 1:var l=$d;break;case 4:l=Bd;break;default:l=hi}n=l.bind(null,t,n,e),l=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Gl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Rt(s),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Xs(function(){var d=o,h=di(n),g=[];e:{var m=Cu.get(e);if(m!==void 0){var v=vi,x=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":v=rf;break;case"focusin":x="focus",v=Bl;break;case"focusout":x="blur",v=Bl;break;case"beforeblur":case"afterblur":v=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=af;break;case ku:case ju:case Su:v=Yd;break;case Nu:v=uf;break;case"scroll":v=Vd;break;case"wheel":v=df;break;case"copy":case"cut":case"paste":v=Xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=xa}var j=(t&4)!==0,F=!j&&e==="scroll",p=j?m!==null?m+"Capture":null:m;j=[];for(var c=d,f;c!==null;){f=c;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,p!==null&&(y=Zn(c,p),y!=null&&j.push(lr(c,y,f)))),F)break;c=c.return}0<j.length&&(m=new v(m,x,null,n,h),g.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==xo&&(x=n.relatedTarget||n.fromElement)&&(Rt(x)||x[at]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=d,x=x?Rt(x):null,x!==null&&(F=Kt(x),x!==F||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=d),v!==x)){if(j=va,y="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(j=xa,y="onPointerLeave",p="onPointerEnter",c="pointer"),F=v==null?m:tn(v),f=x==null?m:tn(x),m=new j(y,c+"leave",v,n,h),m.target=F,m.relatedTarget=f,y=null,Rt(h)===d&&(j=new j(p,c+"enter",x,n,h),j.target=f,j.relatedTarget=F,y=j),F=y,v&&x)t:{for(j=v,p=x,c=0,f=j;f;f=Gt(f))c++;for(f=0,y=p;y;y=Gt(y))f++;for(;0<c-f;)j=Gt(j),c--;for(;0<f-c;)p=Gt(p),f--;for(;c--;){if(j===p||p!==null&&j===p.alternate)break t;j=Gt(j),p=Gt(p)}j=null}else j=null;v!==null&&Ta(g,m,v,j,!1),x!==null&&F!==null&&Ta(g,F,x,j,!0)}}e:{if(m=d?tn(d):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var C=yf;else if(ja(m))if(gu)C=jf;else{C=wf;var z=xf}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=kf);if(C&&(C=C(e,d))){hu(g,C,n,h);break e}z&&z(e,m,d),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&mo(m,"number",m.value)}switch(z=d?tn(d):window,e){case"focusin":(ja(z)||z.contentEditable==="true")&&(qt=z,bo=d,Wn=null);break;case"focusout":Wn=bo=qt=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,Ea(g,n,h);break;case"selectionchange":if(Cf)break;case"keydown":case"keyup":Ea(g,n,h)}var N;if(xi)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Jt?pu(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(fu&&n.locale!=="ko"&&(Jt||k!=="onCompositionStart"?k==="onCompositionEnd"&&Jt&&(N=du()):(yt=h,gi="value"in yt?yt.value:yt.textContent,Jt=!0)),z=el(d,k),0<z.length&&(k=new ya(k,e,null,n,h),g.push({event:k,listeners:z}),N?k.data=N:(N=mu(n),N!==null&&(k.data=N)))),(N=pf?mf(e,n):hf(e,n))&&(d=el(d,"onBeforeInput"),0<d.length&&(h=new ya("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=N))}bu(g,t)})}function lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function el(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Zn(e,n),o!=null&&r.unshift(lr(e,o,l)),o=Zn(e,t),o!=null&&r.push(lr(e,o,l))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ta(e,t,n,r,l){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Zn(n,o),u!=null&&a.unshift(lr(n,u,s))):l||(u=Zn(n,o),u!=null&&a.push(lr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var _f=/\r\n?/g,Tf=/\u0000|\uFFFD/g;function Pa(e){return(typeof e=="string"?e:""+e).replace(_f,`
`).replace(Tf,"")}function zr(e,t,n){if(t=Pa(t),Pa(e)!==t&&n)throw Error(w(425))}function tl(){}var zo=null,_o=null;function To(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Po=typeof setTimeout=="function"?setTimeout:void 0,Pf=typeof clearTimeout=="function"?clearTimeout:void 0,La=typeof Promise=="function"?Promise:void 0,Lf=typeof queueMicrotask=="function"?queueMicrotask:typeof La<"u"?function(e){return La.resolve(null).then(e).catch(Mf)}:Po;function Mf(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);er(t)}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Cn,or="__reactProps$"+Cn,at="__reactContainer$"+Cn,Lo="__reactEvents$"+Cn,Df="__reactListeners$"+Cn,Ff="__reactHandles$"+Cn;function Rt(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ma(e);e!==null;){if(n=e[Ge])return n;e=Ma(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[Ge]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Sl(e){return e[or]||null}var Mo=[],nn=-1;function Pt(e){return{current:e}}function W(e){0>nn||(e.current=Mo[nn],Mo[nn]=null,nn--)}function $(e,t){nn++,Mo[nn]=e.current,e.current=t}var _t={},fe=Pt(_t),xe=Pt(!1),$t=_t;function gn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function nl(){W(xe),W(fe)}function Da(e,t,n){if(fe.current!==_t)throw Error(w(168));$(fe,t),$(xe,n)}function zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,yd(e)||"Unknown",l));return G({},n,r)}function rl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,$t=fe.current,$(fe,e),$(xe,xe.current),!0}function Fa(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=zu(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,W(xe),W(fe),$(fe,e)):W(xe),$(xe,n)}var nt=null,Nl=!1,Zl=!1;function _u(e){nt===null?nt=[e]:nt.push(e)}function Rf(e){Nl=!0,_u(e)}function Lt(){if(!Zl&&nt!==null){Zl=!0;var e=0,t=A;try{var n=nt;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,Nl=!1}catch(l){throw nt!==null&&(nt=nt.slice(e+1)),eu(fi,Lt),l}finally{A=t,Zl=!1}}return null}var rn=[],ln=0,ll=null,ol=0,ze=[],_e=0,Bt=null,rt=1,lt="";function Dt(e,t){rn[ln++]=ol,rn[ln++]=ll,ll=e,ol=t}function Tu(e,t,n){ze[_e++]=rt,ze[_e++]=lt,ze[_e++]=Bt,Bt=e;var r=rt;e=lt;var l=32-$e(r)-1;r&=~(1<<l),n+=1;var o=32-$e(t)+l;if(30<o){var a=l-l%5;o=(r&(1<<a)-1).toString(32),r>>=a,l-=a,rt=1<<32-$e(t)+l|n<<l|r,lt=o+e}else rt=1<<o|n<<l|r,lt=e}function ki(e){e.return!==null&&(Dt(e,1),Tu(e,1,0))}function ji(e){for(;e===ll;)ll=rn[--ln],rn[ln]=null,ol=rn[--ln],rn[ln]=null;for(;e===Bt;)Bt=ze[--_e],ze[_e]=null,lt=ze[--_e],ze[_e]=null,rt=ze[--_e],ze[_e]=null}var Ne=null,Se=null,Q=!1,Ae=null;function Pu(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ra(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Se=St(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:rt,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Se=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fo(e){if(Q){var t=Se;if(t){var n=t;if(!Ra(e,t)){if(Do(e))throw Error(w(418));t=St(n.nextSibling);var r=Ne;t&&Ra(e,t)?Pu(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ne=e)}}else{if(Do(e))throw Error(w(418));e.flags=e.flags&-4097|2,Q=!1,Ne=e}}}function Oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function _r(e){if(e!==Ne)return!1;if(!Q)return Oa(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!To(e.type,e.memoizedProps)),t&&(t=Se)){if(Do(e))throw Lu(),Error(w(418));for(;t;)Pu(e,t),t=St(t.nextSibling)}if(Oa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=St(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ne?St(e.stateNode.nextSibling):null;return!0}function Lu(){for(var e=Se;e;)e=St(e.nextSibling)}function vn(){Se=Ne=null,Q=!1}function Si(e){Ae===null?Ae=[e]:Ae.push(e)}var Of=dt.ReactCurrentBatchConfig;function Mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=l.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ia(e){var t=e._init;return t(e._payload)}function Mu(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Et(p,c),p.index=0,p.sibling=null,p}function o(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,y){return c===null||c.tag!==6?(c=lo(f,p.mode,y),c.return=p,c):(c=l(c,f),c.return=p,c)}function u(p,c,f,y){var C=f.type;return C===Zt?h(p,c,f.props.children,y,f.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mt&&Ia(C)===c.type)?(y=l(c,f.props),y.ref=Mn(p,c,f),y.return=p,y):(y=Qr(f.type,f.key,f.props,null,p.mode,y),y.ref=Mn(p,c,f),y.return=p,y)}function d(p,c,f,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=oo(f,p.mode,y),c.return=p,c):(c=l(c,f.children||[]),c.return=p,c)}function h(p,c,f,y,C){return c===null||c.tag!==7?(c=At(f,p.mode,y,C),c.return=p,c):(c=l(c,f),c.return=p,c)}function g(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=lo(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case xr:return f=Qr(c.type,c.key,c.props,null,p.mode,f),f.ref=Mn(p,null,c),f.return=p,f;case Xt:return c=oo(c,p.mode,f),c.return=p,c;case mt:var y=c._init;return g(p,y(c._payload),f)}if(On(c)||zn(c))return c=At(c,p.mode,f,null),c.return=p,c;Tr(p,c)}return null}function m(p,c,f,y){var C=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:s(p,c,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xr:return f.key===C?u(p,c,f,y):null;case Xt:return f.key===C?d(p,c,f,y):null;case mt:return C=f._init,m(p,c,C(f._payload),y)}if(On(f)||zn(f))return C!==null?null:h(p,c,f,y,null);Tr(p,f)}return null}function v(p,c,f,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(f)||null,s(c,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xr:return p=p.get(y.key===null?f:y.key)||null,u(c,p,y,C);case Xt:return p=p.get(y.key===null?f:y.key)||null,d(c,p,y,C);case mt:var z=y._init;return v(p,c,f,z(y._payload),C)}if(On(y)||zn(y))return p=p.get(f)||null,h(c,p,y,C,null);Tr(c,y)}return null}function x(p,c,f,y){for(var C=null,z=null,N=c,k=c=0,b=null;N!==null&&k<f.length;k++){N.index>k?(b=N,N=null):b=N.sibling;var _=m(p,N,f[k],y);if(_===null){N===null&&(N=b);break}e&&N&&_.alternate===null&&t(p,N),c=o(_,c,k),z===null?C=_:z.sibling=_,z=_,N=b}if(k===f.length)return n(p,N),Q&&Dt(p,k),C;if(N===null){for(;k<f.length;k++)N=g(p,f[k],y),N!==null&&(c=o(N,c,k),z===null?C=N:z.sibling=N,z=N);return Q&&Dt(p,k),C}for(N=r(p,N);k<f.length;k++)b=v(N,p,k,f[k],y),b!==null&&(e&&b.alternate!==null&&N.delete(b.key===null?k:b.key),c=o(b,c,k),z===null?C=b:z.sibling=b,z=b);return e&&N.forEach(function(E){return t(p,E)}),Q&&Dt(p,k),C}function j(p,c,f,y){var C=zn(f);if(typeof C!="function")throw Error(w(150));if(f=C.call(f),f==null)throw Error(w(151));for(var z=C=null,N=c,k=c=0,b=null,_=f.next();N!==null&&!_.done;k++,_=f.next()){N.index>k?(b=N,N=null):b=N.sibling;var E=m(p,N,_.value,y);if(E===null){N===null&&(N=b);break}e&&N&&E.alternate===null&&t(p,N),c=o(E,c,k),z===null?C=E:z.sibling=E,z=E,N=b}if(_.done)return n(p,N),Q&&Dt(p,k),C;if(N===null){for(;!_.done;k++,_=f.next())_=g(p,_.value,y),_!==null&&(c=o(_,c,k),z===null?C=_:z.sibling=_,z=_);return Q&&Dt(p,k),C}for(N=r(p,N);!_.done;k++,_=f.next())_=v(N,p,k,_.value,y),_!==null&&(e&&_.alternate!==null&&N.delete(_.key===null?k:_.key),c=o(_,c,k),z===null?C=_:z.sibling=_,z=_);return e&&N.forEach(function(O){return t(p,O)}),Q&&Dt(p,k),C}function F(p,c,f,y){if(typeof f=="object"&&f!==null&&f.type===Zt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case xr:e:{for(var C=f.key,z=c;z!==null;){if(z.key===C){if(C=f.type,C===Zt){if(z.tag===7){n(p,z.sibling),c=l(z,f.props.children),c.return=p,p=c;break e}}else if(z.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mt&&Ia(C)===z.type){n(p,z.sibling),c=l(z,f.props),c.ref=Mn(p,z,f),c.return=p,p=c;break e}n(p,z);break}else t(p,z);z=z.sibling}f.type===Zt?(c=At(f.props.children,p.mode,y,f.key),c.return=p,p=c):(y=Qr(f.type,f.key,f.props,null,p.mode,y),y.ref=Mn(p,c,f),y.return=p,p=y)}return a(p);case Xt:e:{for(z=f.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=l(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=oo(f,p.mode,y),c.return=p,p=c}return a(p);case mt:return z=f._init,F(p,c,z(f._payload),y)}if(On(f))return x(p,c,f,y);if(zn(f))return j(p,c,f,y);Tr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,f),c.return=p,p=c):(n(p,c),c=lo(f,p.mode,y),c.return=p,p=c),a(p)):n(p,c)}return F}var yn=Mu(!0),Du=Mu(!1),il=Pt(null),al=null,on=null,Ni=null;function Ci(){Ni=on=al=null}function bi(e){var t=il.current;W(il),e._currentValue=t}function Ro(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){al=e,Ni=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Ni!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(al===null)throw Error(w(308));on=e,al.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var Ot=null;function Ei(e){Ot===null?Ot=[e]:Ot.push(e)}function Fu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ei(t)):(n.next=l.next,l.next=n),t.interleaved=n,st(e,r)}function st(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ht=!1;function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,st(e,n)}return l=r.interleaved,l===null?(t.next=t,Ei(r)):(t.next=l.next,l.next=t),r.interleaved=t,st(e,n)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pi(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sl(e,t,n,r){var l=e.updateQueue;ht=!1;var o=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==a&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=u))}if(o!==null){var g=l.baseState;a=0,h=d=u=null,s=o;do{var m=s.lane,v=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,j=s;switch(m=t,v=n,j.tag){case 1:if(x=j.payload,typeof x=="function"){g=x.call(v,g,m);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=j.payload,m=typeof x=="function"?x.call(v,g,m):x,m==null)break e;g=G({},g,m);break e;case 2:ht=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=v,u=g):h=h.next=v,a|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(u=g),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Wt|=a,e.lanes=a,e.memoizedState=g}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var vr={},Ze=Pt(vr),ir=Pt(vr),ar=Pt(vr);function It(e){if(e===vr)throw Error(w(174));return e}function _i(e,t){switch($(ar,t),$(ir,e),$(Ze,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:go(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=go(t,e)}W(Ze),$(Ze,t)}function xn(){W(Ze),W(ir),W(ar)}function Ou(e){It(ar.current);var t=It(Ze.current),n=go(t,e.type);t!==n&&($(ir,e),$(Ze,n))}function Ti(e){ir.current===e&&(W(Ze),W(ir))}var K=Pt(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Pi(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var $r=dt.ReactCurrentDispatcher,ql=dt.ReactCurrentBatchConfig,Vt=0,Y=null,ee=null,ne=null,cl=!1,Hn=!1,sr=0,If=0;function ue(){throw Error(w(321))}function Li(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function Mi(e,t,n,r,l,o){if(Vt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$r.current=e===null||e.memoizedState===null?Bf:Vf,e=n(r,l),Hn){o=0;do{if(Hn=!1,sr=0,25<=o)throw Error(w(301));o+=1,ne=ee=null,t.updateQueue=null,$r.current=Wf,e=n(r,l)}while(Hn)}if($r.current=dl,t=ee!==null&&ee.next!==null,Vt=0,ne=ee=Y=null,cl=!1,t)throw Error(w(300));return e}function Di(){var e=sr!==0;return sr=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Y.memoizedState=ne=e:ne=ne.next=e,ne}function Fe(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?Y.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(w(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?Y.memoizedState=ne=e:ne=ne.next=e}return ne}function ur(e,t){return typeof t=="function"?t(e):t}function eo(e){var t=Fe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var a=l.next;l.next=o.next,o.next=a}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=a=null,u=null,d=o;do{var h=d.lane;if((Vt&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,Y.lanes|=h,Wt|=h}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=s,Ve(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Y.lanes|=o,Wt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function to(e){var t=Fe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do o=e(o,a.action),a=a.next;while(a!==l);Ve(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Iu(){}function Uu(e,t){var n=Y,r=Fe(),l=t(),o=!Ve(r.memoizedState,l);if(o&&(r.memoizedState=l,ye=!0),r=r.queue,Fi(Bu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,cr(9,$u.bind(null,n,r,l,t),void 0,null),re===null)throw Error(w(349));Vt&30||Au(n,t,l)}return l}function Au(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $u(e,t,n,r){t.value=n,t.getSnapshot=r,Vu(t)&&Wu(e)}function Bu(e,t,n){return n(function(){Vu(t)&&Wu(e)})}function Vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function Wu(e){var t=st(e,1);t!==null&&Be(t,e,1,-1)}function $a(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=$f.bind(null,Y,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hu(){return Fe().memoizedState}function Br(e,t,n,r){var l=Ye();Y.flags|=e,l.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function Cl(e,t,n,r){var l=Fe();r=r===void 0?null:r;var o=void 0;if(ee!==null){var a=ee.memoizedState;if(o=a.destroy,r!==null&&Li(r,a.deps)){l.memoizedState=cr(t,n,o,r);return}}Y.flags|=e,l.memoizedState=cr(1|t,n,o,r)}function Ba(e,t){return Br(8390656,8,e,t)}function Fi(e,t){return Cl(2048,8,e,t)}function Qu(e,t){return Cl(4,2,e,t)}function Ku(e,t){return Cl(4,4,e,t)}function Yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gu(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,4,Yu.bind(null,t,e),n)}function Ri(){}function Xu(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Li(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zu(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Li(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ju(e,t,n){return Vt&21?(Ve(n,t)||(n=ru(),Y.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Uf(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{A=n,ql.transition=r}}function qu(){return Fe().memoizedState}function Af(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ec(e))tc(t,n);else if(n=Fu(e,t,n,r),n!==null){var l=me();Be(n,e,r,l),nc(n,t,r)}}function $f(e,t,n){var r=bt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ec(e))tc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(l.hasEagerState=!0,l.eagerState=s,Ve(s,a)){var u=t.interleaved;u===null?(l.next=l,Ei(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Fu(e,t,l,r),n!==null&&(l=me(),Be(n,e,r,l),nc(n,t,r))}}function ec(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function tc(e,t){Hn=cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pi(e,n)}}var dl={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Bf={readContext:De,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ba,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,Yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=Ye();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ye();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Af.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:$a,useDebugValue:Ri,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=$a(!1),t=e[0];return e=Uf.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,l=Ye();if(Q){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),re===null)throw Error(w(349));Vt&30||Au(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ba(Bu.bind(null,r,o,e),[e]),r.flags|=2048,cr(9,$u.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ye(),t=re.identifierPrefix;if(Q){var n=lt,r=rt;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=If++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vf={readContext:De,useCallback:Xu,useContext:De,useEffect:Fi,useImperativeHandle:Gu,useInsertionEffect:Qu,useLayoutEffect:Ku,useMemo:Zu,useReducer:eo,useRef:Hu,useState:function(){return eo(ur)},useDebugValue:Ri,useDeferredValue:function(e){var t=Fe();return Ju(t,ee.memoizedState,e)},useTransition:function(){var e=eo(ur)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Iu,useSyncExternalStore:Uu,useId:qu,unstable_isNewReconciler:!1},Wf={readContext:De,useCallback:Xu,useContext:De,useEffect:Fi,useImperativeHandle:Gu,useInsertionEffect:Qu,useLayoutEffect:Ku,useMemo:Zu,useReducer:to,useRef:Hu,useState:function(){return to(ur)},useDebugValue:Ri,useDeferredValue:function(e){var t=Fe();return ee===null?t.memoizedState=e:Ju(t,ee.memoizedState,e)},useTransition:function(){var e=to(ur)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Iu,useSyncExternalStore:Uu,useId:qu,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bl={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),l=bt(e),o=ot(r,l);o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,l),t!==null&&(Be(t,e,l,r),Ar(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),l=bt(e),o=ot(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,l),t!==null&&(Be(t,e,l,r),Ar(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=bt(e),l=ot(n,r);l.tag=2,t!=null&&(l.callback=t),t=Nt(e,l,r),t!==null&&(Be(t,e,r,n),Ar(t,e,r))}};function Va(e,t,n,r,l,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(l,o):!0}function rc(e,t,n){var r=!1,l=_t,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(l=we(t)?$t:fe.current,r=t.contextTypes,o=(r=r!=null)?gn(e,l):_t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bl.enqueueReplaceState(t,t.state,null)}function Io(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},zi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=De(o):(o=we(t)?$t:fe.current,l.context=gn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Oo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&bl.enqueueReplaceState(l,l.state,null),sl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=vd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function no(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hf=typeof WeakMap=="function"?WeakMap:Map;function lc(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pl||(pl=!0,Go=r),Uo(e,t)},n}function oc(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Uo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Uo(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ha(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=op.bind(null,e,t,n),t.then(e,e))}function Qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ka(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Qf=dt.ReactCurrentOwner,ye=!1;function pe(e,t,n,r){t.child=e===null?Du(t,null,n,r):yn(t,e.child,n,r)}function Ya(e,t,n,r,l){n=n.render;var o=t.ref;return pn(t,l),r=Mi(e,t,n,r,o,l),n=Di(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ut(e,t,l)):(Q&&n&&ki(t),t.flags|=1,pe(e,t,r,l),t.child)}function Ga(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Wi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ic(e,t,o,r,l)):(e=Qr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(a,r)&&e.ref===t.ref)return ut(e,t,l)}return t.flags|=1,e=Et(o,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(nr(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,ut(e,t,l)}return Ao(e,t,n,r,l)}function ac(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(sn,je),je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(sn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$(sn,je),je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$(sn,je),je|=r;return pe(e,t,l,n),t.child}function sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ao(e,t,n,r,l){var o=we(n)?$t:fe.current;return o=gn(t,o),pn(t,l),n=Mi(e,t,n,r,o,l),r=Di(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ut(e,t,l)):(Q&&r&&ki(t),t.flags|=1,pe(e,t,n,l),t.child)}function Xa(e,t,n,r,l){if(we(n)){var o=!0;rl(t)}else o=!1;if(pn(t,l),t.stateNode===null)Vr(e,t),rc(t,n,r),Io(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=De(d):(d=we(n)?$t:fe.current,d=gn(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Wa(t,a,r,d),ht=!1;var m=t.memoizedState;a.state=m,sl(t,r,a,l),u=t.memoizedState,s!==r||m!==u||xe.current||ht?(typeof h=="function"&&(Oo(t,n,h,r),u=t.memoizedState),(s=ht||Va(t,n,s,r,m,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ru(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Ie(t.type,s),a.props=d,g=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=we(n)?$t:fe.current,u=gn(t,u));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||m!==u)&&Wa(t,a,r,u),ht=!1,m=t.memoizedState,a.state=m,sl(t,r,a,l);var x=t.memoizedState;s!==g||m!==x||xe.current||ht?(typeof v=="function"&&(Oo(t,n,v,r),x=t.memoizedState),(d=ht||Va(t,n,d,r,m,x,u)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $o(e,t,n,r,o,l)}function $o(e,t,n,r,l,o){sc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Fa(t,n,!1),ut(e,t,o);r=t.stateNode,Qf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yn(t,e.child,null,o),t.child=yn(t,null,s,o)):pe(e,t,s,o),t.memoizedState=r.state,l&&Fa(t,n,!0),t.child}function uc(e){var t=e.stateNode;t.pendingContext?Da(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Da(e,t.context,!1),_i(e,t.containerInfo)}function Za(e,t,n,r,l){return vn(),Si(l),t.flags|=256,pe(e,t,n,r),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function cc(e,t,n){var r=t.pendingProps,l=K.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),$(K,l&1),e===null)return Fo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=_l(a,r,0,null),e=At(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vo(n),t.memoizedState=Bo,e):Oi(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Kf(e,t,a,r,s,l,n);if(o){o=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Et(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Et(s,o):(o=At(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Vo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Bo,r}return o=e.child,e=o.sibling,r=Et(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oi(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&Si(r),yn(t,e.child,null,n),e=Oi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kf(e,t,n,r,l,o,a){if(n)return t.flags&256?(t.flags&=-257,r=no(Error(w(422))),Pr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=_l({mode:"visible",children:r.children},l,0,null),o=At(o,l,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yn(t,e.child,null,a),t.child.memoizedState=Vo(a),t.memoizedState=Bo,o);if(!(t.mode&1))return Pr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=no(o,r,void 0),Pr(e,t,a,r)}if(s=(a&e.childLanes)!==0,ye||s){if(r=re,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,st(e,l),Be(r,e,l,-1))}return Vi(),r=no(Error(w(421))),Pr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=ip.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Se=St(l.nextSibling),Ne=t,Q=!0,Ae=null,e!==null&&(ze[_e++]=rt,ze[_e++]=lt,ze[_e++]=Bt,rt=e.id,lt=e.overflow,Bt=t),t=Oi(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ro(e.return,t,n)}function ro(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function dc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(pe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(K,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ul(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ro(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ul(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ro(t,!0,n,null,o);break;case"together":ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yf(e,t,n){switch(t.tag){case 3:uc(t),vn();break;case 5:Ou(t);break;case 1:we(t.type)&&rl(t);break;case 4:_i(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;$(il,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?cc(e,t,n):($(K,K.current&1),e=ut(e,t,n),e!==null?e.sibling:null);$(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,ac(e,t,n)}return ut(e,t,n)}var fc,Wo,pc,mc;fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};pc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,It(Ze.current);var o=null;switch(n){case"input":l=fo(e,l),r=fo(e,r),o=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":l=ho(e,l),r=ho(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=tl)}vo(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Gn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&V("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};mc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gf(e,t,n){var r=t.pendingProps;switch(ji(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return we(t.type)&&nl(),ce(t),null;case 3:return r=t.stateNode,xn(),W(xe),W(fe),Pi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Jo(Ae),Ae=null))),Wo(e,t),ce(t),null;case 5:Ti(t);var l=It(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)pc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ce(t),null}if(e=It(Ze.current),_r(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ge]=t,r[or]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(l=0;l<Un.length;l++)V(Un[l],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":aa(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":ua(r,o),V("invalid",r)}vo(n,o),l=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",""+s]):Gn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&V("scroll",r)}switch(n){case"input":wr(r),sa(r,o,!0);break;case"textarea":wr(r),ca(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=tl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ge]=t,e[or]=r,fc(e,t,!1,!1),t.stateNode=e;e:{switch(a=yo(n,r),n){case"dialog":V("cancel",e),V("close",e),l=r;break;case"iframe":case"object":case"embed":V("load",e),l=r;break;case"video":case"audio":for(l=0;l<Un.length;l++)V(Un[l],e);l=r;break;case"source":V("error",e),l=r;break;case"img":case"image":case"link":V("error",e),V("load",e),l=r;break;case"details":V("toggle",e),l=r;break;case"input":aa(e,r),l=fo(e,r),V("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),V("invalid",e);break;case"textarea":ua(e,r),l=ho(e,r),V("invalid",e);break;default:l=r}vo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Hs(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Vs(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xn(e,u):typeof u=="number"&&Xn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&V("scroll",e):u!=null&&ai(e,o,u,a))}switch(n){case"input":wr(e),sa(e,r,!1);break;case"textarea":wr(e),ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?un(e,!!r.multiple,o,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)mc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=It(ar.current),It(Ze.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return ce(t),null;case 13:if(W(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Se!==null&&t.mode&1&&!(t.flags&128))Lu(),vn(),t.flags|=98560,o=!1;else if(o=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Ge]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Ae!==null&&(Jo(Ae),Ae=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?te===0&&(te=3):Vi())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return xn(),Wo(e,t),e===null&&rr(t.stateNode.containerInfo),ce(t),null;case 10:return bi(t.type._context),ce(t),null;case 17:return we(t.type)&&nl(),ce(t),null;case 19:if(W(K),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Dn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ul(e),a!==null){for(t.flags|=128,Dn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>kn&&(t.flags|=128,r=!0,Dn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ul(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Q)return ce(t),null}else 2*Z()-o.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=K.current,$(K,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Bi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Xf(e,t){switch(ji(t),t.tag){case 1:return we(t.type)&&nl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),W(xe),W(fe),Pi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ti(t),null;case 13:if(W(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(K),null;case 4:return xn(),null;case 10:return bi(t.type._context),null;case 22:case 23:return Bi(),null;case 24:return null;default:return null}}var Lr=!1,de=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,P=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Ho(e,t,n){try{n()}catch(r){X(e,t,r)}}var qa=!1;function Jf(e,t){if(zo=Jr,e=xu(),wi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,h=0,g=e,m=null;t:for(;;){for(var v;g!==n||l!==0&&g.nodeType!==3||(s=a+l),g!==o||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(v=g.firstChild)!==null;)m=g,g=v;for(;;){if(g===e)break t;if(m===n&&++d===l&&(s=a),m===o&&++h===r&&(u=a),(v=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_o={focusedElem:e,selectionRange:n},Jr=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var j=x.memoizedProps,F=x.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?j:Ie(t.type,j),F);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){X(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return x=qa,qa=!1,x}function Qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ho(t,n,o)}l=l.next}while(l!==r)}}function El(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[or],delete t[Lo],delete t[Df],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tl));else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}var le=null,Ue=!1;function pt(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:de||an(n,t);case 6:var r=le,l=Ue;le=null,pt(e,t,n),le=r,Ue=l,le!==null&&(Ue?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ue?(e=le,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),er(e)):Xl(le,n.stateNode));break;case 4:r=le,l=Ue,le=n.stateNode.containerInfo,Ue=!0,pt(e,t,n),le=r,Ue=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ho(n,t,a),l=l.next}while(l!==r)}pt(e,t,n);break;case 1:if(!de&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,pt(e,t,n),de=r):pt(e,t,n);break;default:pt(e,t,n)}}function ts(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zf),t.forEach(function(r){var l=ap.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,Ue=!1;break e;case 3:le=s.stateNode.containerInfo,Ue=!0;break e;case 4:le=s.stateNode.containerInfo,Ue=!0;break e}s=s.return}if(le===null)throw Error(w(160));vc(o,a,l),le=null,Ue=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){X(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yc(t,e),t=t.sibling}function yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Ke(e),r&4){try{Qn(3,e,e.return),El(3,e)}catch(j){X(e,e.return,j)}try{Qn(5,e,e.return)}catch(j){X(e,e.return,j)}}break;case 1:Oe(t,e),Ke(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Oe(t,e),Ke(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var l=e.stateNode;try{Xn(l,"")}catch(j){X(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&As(l,o),yo(s,a);var d=yo(s,o);for(a=0;a<u.length;a+=2){var h=u[a],g=u[a+1];h==="style"?Hs(l,g):h==="dangerouslySetInnerHTML"?Vs(l,g):h==="children"?Xn(l,g):ai(l,h,g,d)}switch(s){case"input":po(l,o);break;case"textarea":$s(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?un(l,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?un(l,!!o.multiple,o.defaultValue,!0):un(l,!!o.multiple,o.multiple?[]:"",!1))}l[or]=o}catch(j){X(e,e.return,j)}}break;case 6:if(Oe(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(j){X(e,e.return,j)}}break;case 3:if(Oe(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(j){X(e,e.return,j)}break;case 4:Oe(t,e),Ke(e);break;case 13:Oe(t,e),Ke(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ai=Z())),r&4&&ts(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(de=(d=de)||h,Oe(t,e),de=d):Oe(t,e),Ke(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(g=P=h;P!==null;){switch(m=P,v=m.child,m.tag){case 0:case 11:case 14:case 15:Qn(4,m,m.return);break;case 1:an(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(j){X(r,n,j)}}break;case 5:an(m,m.return);break;case 22:if(m.memoizedState!==null){rs(g);continue}}v!==null?(v.return=m,P=v):rs(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ws("display",a))}catch(j){X(e,e.return,j)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(j){X(e,e.return,j)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Oe(t,e),Ke(e),r&4&&ts(e);break;case 21:break;default:Oe(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Xn(l,""),r.flags&=-33);var o=es(e);Yo(e,o,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=es(e);Ko(e,s,a);break;default:throw Error(w(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qf(e,t,n){P=e,xc(e)}function xc(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var l=P,o=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Lr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||de;s=Lr;var d=de;if(Lr=a,(de=u)&&!d)for(P=l;P!==null;)a=P,u=a.child,a.tag===22&&a.memoizedState!==null?ls(l):u!==null?(u.return=a,P=u):ls(l);for(;o!==null;)P=o,xc(o),o=o.sibling;P=l,Lr=s,de=d}ns(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,P=o):ns(e)}}function ns(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||El(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Aa(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&er(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}de||t.flags&512&&Qo(t)}catch(m){X(t,t.return,m)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function rs(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function ls(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{El(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){X(t,l,u)}}var o=t.return;try{Qo(t)}catch(u){X(t,o,u)}break;case 5:var a=t.return;try{Qo(t)}catch(u){X(t,a,u)}}}catch(u){X(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var ep=Math.ceil,fl=dt.ReactCurrentDispatcher,Ii=dt.ReactCurrentOwner,Me=dt.ReactCurrentBatchConfig,U=0,re=null,q=null,oe=0,je=0,sn=Pt(0),te=0,dr=null,Wt=0,zl=0,Ui=0,Kn=null,ve=null,Ai=0,kn=1/0,tt=null,pl=!1,Go=null,Ct=null,Mr=!1,xt=null,ml=0,Yn=0,Xo=null,Wr=-1,Hr=0;function me(){return U&6?Z():Wr!==-1?Wr:Wr=Z()}function bt(e){return e.mode&1?U&2&&oe!==0?oe&-oe:Of.transition!==null?(Hr===0&&(Hr=ru()),Hr):(e=A,e!==0||(e=window.event,e=e===void 0?16:cu(e.type)),e):1}function Be(e,t,n,r){if(50<Yn)throw Yn=0,Xo=null,Error(w(185));mr(e,n,r),(!(U&2)||e!==re)&&(e===re&&(!(U&2)&&(zl|=n),te===4&&vt(e,oe)),ke(e,r),n===1&&U===0&&!(t.mode&1)&&(kn=Z()+500,Nl&&Lt()))}function ke(e,t){var n=e.callbackNode;Rd(e,t);var r=Zr(e,e===re?oe:0);if(r===0)n!==null&&pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pa(n),t===1)e.tag===0?Rf(os.bind(null,e)):_u(os.bind(null,e)),Lf(function(){!(U&6)&&Lt()}),n=null;else{switch(lu(r)){case 1:n=fi;break;case 4:n=tu;break;case 16:n=Xr;break;case 536870912:n=nu;break;default:n=Xr}n=Ec(n,wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wc(e,t){if(Wr=-1,Hr=0,U&6)throw Error(w(327));var n=e.callbackNode;if(mn()&&e.callbackNode!==n)return null;var r=Zr(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=hl(e,r);else{t=r;var l=U;U|=2;var o=jc();(re!==e||oe!==t)&&(tt=null,kn=Z()+500,Ut(e,t));do try{rp();break}catch(s){kc(e,s)}while(!0);Ci(),fl.current=o,U=l,q!==null?t=0:(re=null,oe=0,t=te)}if(t!==0){if(t===2&&(l=So(e),l!==0&&(r=l,t=Zo(e,l))),t===1)throw n=dr,Ut(e,0),vt(e,r),ke(e,Z()),n;if(t===6)vt(e,r);else{if(l=e.current.alternate,!(r&30)&&!tp(l)&&(t=hl(e,r),t===2&&(o=So(e),o!==0&&(r=o,t=Zo(e,o))),t===1))throw n=dr,Ut(e,0),vt(e,r),ke(e,Z()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Ft(e,ve,tt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Ai+500-Z(),10<t)){if(Zr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Po(Ft.bind(null,e,ve,tt),t);break}Ft(e,ve,tt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-$e(r);o=1<<a,a=t[a],a>l&&(l=a),r&=~o}if(r=l,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ep(r/1960))-r,10<r){e.timeoutHandle=Po(Ft.bind(null,e,ve,tt),r);break}Ft(e,ve,tt);break;case 5:Ft(e,ve,tt);break;default:throw Error(w(329))}}}return ke(e,Z()),e.callbackNode===n?wc.bind(null,e):null}function Zo(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=hl(e,t),e!==2&&(t=ve,ve=n,t!==null&&Jo(t)),e}function Jo(e){ve===null?ve=e:ve.push.apply(ve,e)}function tp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ve(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Ui,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function os(e){if(U&6)throw Error(w(327));mn();var t=Zr(e,0);if(!(t&1))return ke(e,Z()),null;var n=hl(e,t);if(e.tag!==0&&n===2){var r=So(e);r!==0&&(t=r,n=Zo(e,r))}if(n===1)throw n=dr,Ut(e,0),vt(e,t),ke(e,Z()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,ve,tt),ke(e,Z()),null}function $i(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(kn=Z()+500,Nl&&Lt())}}function Ht(e){xt!==null&&xt.tag===0&&!(U&6)&&mn();var t=U;U|=1;var n=Me.transition,r=A;try{if(Me.transition=null,A=1,e)return e()}finally{A=r,Me.transition=n,U=t,!(U&6)&&Lt()}}function Bi(){je=sn.current,W(sn)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pf(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(ji(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:xn(),W(xe),W(fe),Pi();break;case 5:Ti(r);break;case 4:xn();break;case 13:W(K);break;case 19:W(K);break;case 10:bi(r.type._context);break;case 22:case 23:Bi()}n=n.return}if(re=e,q=e=Et(e.current,null),oe=je=t,te=0,dr=null,Ui=zl=Wt=0,ve=Kn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=l,r.next=a}n.pending=r}Ot=null}return e}function kc(e,t){do{var n=q;try{if(Ci(),$r.current=dl,cl){for(var r=Y.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}cl=!1}if(Vt=0,ne=ee=Y=null,Hn=!1,sr=0,Ii.current=null,n===null||n.return===null){te=1,dr=t,q=null;break}e:{var o=e,a=n.return,s=n,u=t;if(t=oe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Qa(a);if(v!==null){v.flags&=-257,Ka(v,a,s,o,t),v.mode&1&&Ha(o,d,t),t=v,u=d;var x=t.updateQueue;if(x===null){var j=new Set;j.add(u),t.updateQueue=j}else x.add(u);break e}else{if(!(t&1)){Ha(o,d,t),Vi();break e}u=Error(w(426))}}else if(Q&&s.mode&1){var F=Qa(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ka(F,a,s,o,t),Si(wn(u,s));break e}}o=u=wn(u,s),te!==4&&(te=2),Kn===null?Kn=[o]:Kn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=lc(o,u,t);Ua(o,p);break e;case 1:s=u;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ct===null||!Ct.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=oc(o,s,t);Ua(o,y);break e}}o=o.return}while(o!==null)}Nc(n)}catch(C){t=C,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function jc(){var e=fl.current;return fl.current=dl,e===null?dl:e}function Vi(){(te===0||te===3||te===2)&&(te=4),re===null||!(Wt&268435455)&&!(zl&268435455)||vt(re,oe)}function hl(e,t){var n=U;U|=2;var r=jc();(re!==e||oe!==t)&&(tt=null,Ut(e,t));do try{np();break}catch(l){kc(e,l)}while(!0);if(Ci(),U=n,fl.current=r,q!==null)throw Error(w(261));return re=null,oe=0,te}function np(){for(;q!==null;)Sc(q)}function rp(){for(;q!==null&&!Ed();)Sc(q)}function Sc(e){var t=bc(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Nc(e):q=t,Ii.current=null}function Nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Xf(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=Gf(n,t,je),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Ft(e,t,n){var r=A,l=Me.transition;try{Me.transition=null,A=1,lp(e,t,n,r)}finally{Me.transition=l,A=r}return null}function lp(e,t,n,r){do mn();while(xt!==null);if(U&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Od(e,o),e===re&&(q=re=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,Ec(Xr,function(){return mn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var a=A;A=1;var s=U;U|=4,Ii.current=null,Jf(e,n),yc(n,e),Nf(_o),Jr=!!zo,_o=zo=null,e.current=n,qf(n),zd(),U=s,A=a,Me.transition=o}else e.current=n;if(Mr&&(Mr=!1,xt=e,ml=l),o=e.pendingLanes,o===0&&(Ct=null),Pd(n.stateNode),ke(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(pl)throw pl=!1,e=Go,Go=null,e;return ml&1&&e.tag!==0&&mn(),o=e.pendingLanes,o&1?e===Xo?Yn++:(Yn=0,Xo=e):Yn=0,Lt(),null}function mn(){if(xt!==null){var e=lu(ml),t=Me.transition,n=A;try{if(Me.transition=null,A=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,ml=0,U&6)throw Error(w(331));var l=U;for(U|=4,P=e.current;P!==null;){var o=P,a=o.child;if(P.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(P=d;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Qn(8,h,o)}var g=h.child;if(g!==null)g.return=h,P=g;else for(;P!==null;){h=P;var m=h.sibling,v=h.return;if(hc(h),h===d){P=null;break}if(m!==null){m.return=v,P=m;break}P=v}}}var x=o.alternate;if(x!==null){var j=x.child;if(j!==null){x.child=null;do{var F=j.sibling;j.sibling=null,j=F}while(j!==null)}}P=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var c=e.current;for(P=c;P!==null;){a=P;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,P=f;else e:for(a=c;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:El(9,s)}}catch(C){X(s,s.return,C)}if(s===a){P=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,P=y;break e}P=s.return}}if(U=l,Lt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{A=n,Me.transition=t}}return!1}function is(e,t,n){t=wn(n,t),t=lc(e,t,1),e=Nt(e,t,1),t=me(),e!==null&&(mr(e,1,t),ke(e,t))}function X(e,t,n){if(e.tag===3)is(e,e,n);else for(;t!==null;){if(t.tag===3){is(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=wn(n,e),e=oc(t,e,1),t=Nt(t,e,1),e=me(),t!==null&&(mr(t,1,e),ke(t,e));break}}t=t.return}}function op(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(oe&n)===n&&(te===4||te===3&&(oe&130023424)===oe&&500>Z()-Ai?Ut(e,0):Ui|=n),ke(e,t)}function Cc(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=me();e=st(e,t),e!==null&&(mr(e,t,n),ke(e,n))}function ip(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cc(e,n)}function ap(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Cc(e,n)}var bc;bc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Yf(e,t,n);ye=!!(e.flags&131072)}else ye=!1,Q&&t.flags&1048576&&Tu(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vr(e,t),e=t.pendingProps;var l=gn(t,fe.current);pn(t,n),l=Mi(null,t,r,e,l,n);var o=Di();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,rl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,zi(t),l.updater=bl,t.stateNode=l,l._reactInternals=t,Io(t,r,e,n),t=$o(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&ki(t),pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=up(r),e=Ie(r,e),l){case 0:t=Ao(null,t,r,e,n);break e;case 1:t=Xa(null,t,r,e,n);break e;case 11:t=Ya(null,t,r,e,n);break e;case 14:t=Ga(null,t,r,Ie(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Ao(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Xa(e,t,r,l,n);case 3:e:{if(uc(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Ru(e,t),sl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=wn(Error(w(423)),t),t=Za(e,t,r,n,l);break e}else if(r!==l){l=wn(Error(w(424)),t),t=Za(e,t,r,n,l);break e}else for(Se=St(t.stateNode.containerInfo.firstChild),Ne=t,Q=!0,Ae=null,n=Du(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===l){t=ut(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return Ou(t),e===null&&Fo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,To(r,l)?a=null:o!==null&&To(r,o)&&(t.flags|=32),sc(e,t),pe(e,t,a,n),t.child;case 6:return e===null&&Fo(t),null;case 13:return cc(e,t,n);case 4:return _i(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Ya(e,t,r,l,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value,$(il,r._currentValue),r._currentValue=a,o!==null)if(Ve(o.value,a)){if(o.children===l.children&&!xe.current){t=ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=ot(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ro(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(w(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ro(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,pn(t,n),l=De(l),r=r(l),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,l=Ie(r,t.pendingProps),l=Ie(r.type,l),Ga(e,t,r,l,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Vr(e,t),t.tag=1,we(r)?(e=!0,rl(t)):e=!1,pn(t,n),rc(t,r,l),Io(t,r,l,n),$o(null,t,r,!0,e,n);case 19:return dc(e,t,n);case 22:return ac(e,t,n)}throw Error(w(156,t.tag))};function Ec(e,t){return eu(e,t)}function sp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new sp(e,t,n,r)}function Wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function up(e){if(typeof e=="function")return Wi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ui)return 11;if(e===ci)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,l,o){var a=2;if(r=e,typeof e=="function")Wi(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return At(n.children,l,o,t);case si:a=8,l|=8;break;case ao:return e=Pe(12,n,t,l|2),e.elementType=ao,e.lanes=o,e;case so:return e=Pe(13,n,t,l),e.elementType=so,e.lanes=o,e;case uo:return e=Pe(19,n,t,l),e.elementType=uo,e.lanes=o,e;case Os:return _l(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fs:a=10;break e;case Rs:a=9;break e;case ui:a=11;break e;case ci:a=14;break e;case mt:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Pe(a,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function At(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=Os,e.lanes=n,e.stateNode={isHidden:!1},e}function lo(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function oo(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Hi(e,t,n,r,l,o,a,s,u){return e=new cp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zi(o),e}function dp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zc(e){if(!e)return _t;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(we(n))return zu(e,n,t)}return t}function _c(e,t,n,r,l,o,a,s,u){return e=Hi(n,r,!0,e,l,o,a,s,u),e.context=zc(null),n=e.current,r=me(),l=bt(n),o=ot(r,l),o.callback=t??null,Nt(n,o,l),e.current.lanes=l,mr(e,l,r),ke(e,r),e}function Tl(e,t,n,r){var l=t.current,o=me(),a=bt(l);return n=zc(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(l,t,a),e!==null&&(Be(e,l,a,o),Ar(e,l,a)),a}function gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qi(e,t){as(e,t),(e=e.alternate)&&as(e,t)}function fp(){return null}var Tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ki(e){this._internalRoot=e}Pl.prototype.render=Ki.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Tl(e,t,null,null)};Pl.prototype.unmount=Ki.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Tl(null,e,null,null)}),t[at]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&uu(e)}};function Yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function pp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=gl(a);o.call(d)}}var a=_c(t,r,e,0,null,!1,!1,"",ss);return e._reactRootContainer=a,e[at]=a.current,rr(e.nodeType===8?e.parentNode:e),Ht(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=gl(u);s.call(d)}}var u=Hi(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=u,e[at]=u.current,rr(e.nodeType===8?e.parentNode:e),Ht(function(){Tl(t,u,n,r)}),u}function Ml(e,t,n,r,l){var o=n._reactRootContainer;if(o){var a=o;if(typeof l=="function"){var s=l;l=function(){var u=gl(a);s.call(u)}}Tl(t,a,e,l)}else a=pp(n,t,e,l,r);return gl(a)}ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(pi(t,n|1),ke(t,Z()),!(U&6)&&(kn=Z()+500,Lt()))}break;case 13:Ht(function(){var r=st(e,1);if(r!==null){var l=me();Be(r,e,1,l)}}),Qi(e,1)}};mi=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var n=me();Be(t,e,134217728,n)}Qi(e,134217728)}};iu=function(e){if(e.tag===13){var t=bt(e),n=st(e,t);if(n!==null){var r=me();Be(n,e,t,r)}Qi(e,t)}};au=function(){return A};su=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};wo=function(e,t,n){switch(t){case"input":if(po(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Sl(r);if(!l)throw Error(w(90));Us(r),po(r,l)}}}break;case"textarea":$s(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Ys=$i;Gs=Ht;var mp={usingClientEntryPoint:!1,Events:[gr,tn,Sl,Qs,Ks,$i]},Fn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Js(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||fp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{xl=Dr.inject(hp),Xe=Dr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yi(t))throw Error(w(200));return dp(e,t,null,n)};be.createRoot=function(e,t){if(!Yi(e))throw Error(w(299));var n=!1,r="",l=Tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Hi(e,1,!1,null,null,n,!1,r,l),e[at]=t.current,rr(e.nodeType===8?e.parentNode:e),new Ki(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Js(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Ht(e)};be.hydrate=function(e,t,n){if(!Ll(t))throw Error(w(200));return Ml(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Yi(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",a=Tc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=_c(t,null,e,1,n??null,l,!1,o,a),e[at]=t.current,rr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Pl(t)};be.render=function(e,t,n){if(!Ll(t))throw Error(w(200));return Ml(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(w(40));return e._reactRootContainer?(Ht(function(){Ml(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};be.unstable_batchedUpdates=$i;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ll(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ml(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function Pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc)}catch(e){console.error(e)}}Pc(),Ps.exports=be;var gp=Ps.exports,Lc,us=gp;Lc=us.createRoot,us.hydrateRoot;function Je(e){return e?e.startsWith("http://")||e.startsWith("https://")?e:`${jn}${e}`:null}const Mc={de:"de-DE",fr:"fr-FR"};let qo=[];function cs(){window.speechSynthesis&&(qo=window.speechSynthesis.getVoices()||[])}var ys,xs;typeof window<"u"&&window.speechSynthesis&&(cs(),(xs=(ys=window.speechSynthesis).addEventListener)==null||xs.call(ys,"voiceschanged",cs));function vp(e){var o;const t=qo.length?qo:((o=window.speechSynthesis)==null?void 0:o.getVoices())||[],n=e.toLowerCase(),r=n.slice(0,2),l=a=>a.lang.replace("_","-").toLowerCase();return t.find(a=>l(a)===n)||t.find(a=>l(a).startsWith(r))||null}const vl={de:["der","die","das"],fr:["le","la","l'"]},Re={de:{name:"Alemán",code:"DE",wordPh:"z.B. der Schlüssel",blankWordPh:"z.B. Hund (solo la palabra)",exLabel:"Ejemplo en alemán",exPh:"Der Hund läuft schnell.",blankPh:"Der ___ läuft schnell.",bulkPh:`[
  { "german": "der Hund", "translation": "el perro", "note": "masc." },
  { "german": "die Katze", "translation": "la gata" }
]`},fr:{name:"Francés",code:"FR",wordPh:"p.ej. le chien",blankWordPh:"p.ej. chien (solo la palabra)",exLabel:"Ejemplo en francés",exPh:"Le chien court vite.",blankPh:"Le ___ court vite.",bulkPh:`[
  { "german": "le chien", "translation": "el perro", "note": "masc." },
  { "german": "la maison", "translation": "la casa" }
]`}};let Dc="de";function yp(e){Mc[e]&&(Dc=e)}const ct={type1:"Imagen",type2:"Ejemplo",type4:"Traducir",type5:"Completar",type6:"Artículo"};function Gi(e){const t=Re[e]||Re.de,n=(vl[e]||vl.de).join(" / "),r={type1:"Muestra una imagen; la tocas para voltear y ver la palabra. Requiere una URL de imagen.",type2:"Muestra la palabra con una frase de ejemplo; volteas para ver la traducción.",type4:`Te muestra el español y escribes la palabra en ${t.name.toLowerCase()}; corrige tu respuesta.`,type5:"Una frase con un hueco (___); escribes la palabra que falta.",type6:`Eliges el artículo/género correcto (${n}).`};return Object.keys(ct).map(l=>({id:l,name:ct[l],tip:r[l]}))}function Fc(e,t="de"){const n=vl[t]||vl.de,r=(e||"").trim(),l=r.toLowerCase(),o=n.find(s=>s.endsWith("'")?l.startsWith(s):l.startsWith(s+" "))||"",a=o?r.slice(o.length).trimStart():r;return{articles:n,correct:o,bare:a}}function ds(e){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e),n=Mc[Dc]||"de-DE";t.lang=n,t.rate=.9;const r=vp(n);r&&(t.voice=r),window.speechSynthesis.speak(t)}function Le(e){var t;if(e){if(e.audioUrl){(t=window.speechSynthesis)==null||t.cancel(),new Audio(Je(e.audioUrl)).play().catch(()=>ds(e.german));return}ds(e.german)}}function xp(e,t){let{repetitions:n,easiness:r,interval:l}=e,o=e.lapses??0;t>=3?(n===0?l=1:n===1?l=6:l=Math.round(l*r),n+=1):(n>=1&&(o+=1),n=0,l=1),r=Math.max(1.3,r+.1-(5-t)*(.08+(5-t)*.02));const a=Date.now()+l*864e5;return{repetitions:n,easiness:r,interval:l,nextReview:a,lastGrade:t,lapses:o}}const wp=4;function kp(e){return(e.lapses??0)>=wp}function jp(e){const t=Math.ceil((e-Date.now())/864e5);return t<=0?"Hoy":t===1?"Mañana":`${t} días`}const jn="http://localhost:3001",Xi="dk_token",Rc=()=>localStorage.getItem(Xi),Sp=e=>localStorage.setItem(Xi,e),fs=()=>localStorage.removeItem(Xi);function fr(){const e=Rc();return e?{Authorization:`Bearer ${e}`}:{}}async function Yt(e,t={}){const n=await fetch(`${jn}${e}`,{headers:{"Content-Type":"application/json",...fr(),...t.headers||{}},...t});if(!n.ok){const r=await n.json().catch(()=>({}));throw Object.assign(new Error(r.error||n.statusText),{status:n.status})}return n.json()}async function ps(){return Yt("/cards")}async function ms(e){const t=e.length===0?"?allowEmpty=true":"";return Yt(`/cards${t}`,{method:"PUT",body:JSON.stringify(e)})}async function hs(){return Yt("/stats")}async function gs(e){return Yt("/stats",{method:"PUT",body:JSON.stringify(e)})}function Oc(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Ic(e,t){return Math.round((new Date(t+"T00:00:00")-new Date(e+"T00:00:00"))/864e5)}function Np(e){const t=Oc();if(!e||!e.day)return{day:t,todayCount:1,currentStreak:1,longestStreak:1};if(e.day===t)return{...e,todayCount:e.todayCount+1};const n=Ic(e.day,t);if(n<=0)return{...e,todayCount:e.todayCount+1};const r=n===1?e.currentStreak+1:1;return{day:t,todayCount:1,currentStreak:r,longestStreak:Math.max(e.longestStreak||0,r)}}async function Uc(e,t){return Yt("/explain",{method:"POST",body:JSON.stringify({german:e.german,translation:e.translation,note:e.note||"",mode:t})}).then(n=>n.text)}async function Cp(e){const t=new FormData;t.append("file",e);const n=await fetch(`${jn}/upload`,{method:"POST",body:t,headers:fr()});if(!n.ok)throw new Error("Error al subir archivo.");return n.json()}async function bp(e){const t=e.split("/media/")[1];t&&await fetch(`${jn}/media/${t}`,{method:"DELETE",headers:fr()})}const ei="@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400;500&display=swap');",Ac=`

  :root {
    --bg: #F0EAE0;
    --surface: #FDFBF7;
    --surface-alt: #F4E7D9;
    --border: #E2D6C5;
    --border-input: #D8C9B5;
    --text: #1F1B16;
    --text-2: #6B5D4A;
    --text-dim: #8A7A66;
    --text-faint: #A79683;
    --accent: #C8825B;
    --accent-soft: #F4E7D9;
    --danger: #B23B2E;
    --danger-hover: #8F2E23;
    --danger-soft: #F8EAE5;
    --ok: #5A7A4E;
    --ok-text: #4A6840;
    --ok-soft: #EBF0E5;
    --shadow-card: 0 12px 32px -10px rgba(60,40,20,.14), 0 3px 8px -3px rgba(60,40,20,.07);
    --shadow-soft: 0 3px 10px -3px rgba(60,40,20,.10), 0 1px 3px rgba(60,40,20,.05);
    --shadow-pop: 0 4px 12px -2px rgba(180,120,80,.45);
    --focus-ring: 0 0 0 3px rgba(200,130,91,0.18);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Mono', monospace;
    min-height: 100vh;
  }

  .app {
    max-width: 780px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    min-height: 100vh;
  }

  .header {
    position: relative;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid var(--border);
    padding-bottom: 1rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
  }

  .logo-flag {
    width: 28px;
    height: 19px;
    border-radius: 2px;
    overflow: hidden;
    flex-shrink: 0;
    box-shadow: 0 0 0 1px rgba(60,40,20,0.12);
  }

  .logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-style: italic;
    color: var(--accent);
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .logo-text span { color: var(--text); font-style: normal; }

  .nav {
    display: flex;
    gap: 0.25rem;
  }

  .nav-btn {
    background: none;
    border: none;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0.4rem 0.75rem;
    border-radius: 2px;
    transition: color 0.2s, background 0.2s;
  }

  .nav-btn.active, .nav-btn:hover {
    color: var(--accent);
    background: var(--surface-alt);
  }

  .hamburger-btn { display: none; }

  /* ── Study View ── */
  .deck-empty {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--text-faint);
  }

  .deck-empty p { font-size: 0.8rem; line-height: 2; }
  .deck-empty strong { color: var(--accent); font-weight: 400; }

  .session-info {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.7rem;
    color: var(--text-faint);
    letter-spacing: 0.08em;
  }

  .session-info span { color: var(--text-2); }
  .session-info strong { color: var(--accent); }

  /* Flashcard */
  .card-scene {
    perspective: 1200px;
    height: 260px;
    margin-bottom: 1.5rem;
    cursor: pointer;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-inner.flipped { transform: rotateY(180deg); }

  .card-static {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: var(--shadow-card);
    background: var(--surface);
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
  }

  .card-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    box-shadow: var(--shadow-card);
    background: var(--surface);
    overflow: hidden;
  }

  .card-face.back {
    transform: rotateY(180deg);
    background: var(--surface-alt);
    box-shadow: var(--shadow-card);
  }

  .card-hint {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 0.6rem;
    color: var(--text-faint);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .card-word {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    color: var(--text);
    text-align: center;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .card-sub {
    font-size: 0.72rem;
    color: var(--text-faint);
    letter-spacing: 0.08em;
    text-align: center;
  }

  .card-translation {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.8rem;
    color: var(--accent);
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .card-note {
    font-size: 0.7rem;
    color: var(--text-dim);
    text-align: center;
    max-width: 80%;
    line-height: 1.6;
    margin-top: 0.75rem;
  }

  /* Grades */
  .grades {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.6rem;
    margin-bottom: 1rem;
  }

  .grade-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    padding: 0.7rem 0.4rem;
    box-shadow: var(--shadow-soft);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.16s ease, box-shadow 0.16s ease, background 0.2s;
    font-family: 'DM Mono', monospace;
  }

  .grade-btn:hover { background: var(--surface-alt); box-shadow: var(--shadow-card); transform: translateY(-2px); }

  .grade-num {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .grade-btn.g0 .grade-num { color: #B23B2E; }
  .grade-btn.g1 .grade-num { color: #C26A3A; }
  .grade-btn.g2 .grade-num { color: #B89020; }
  .grade-btn.g3 .grade-num { color: #8A9A3A; }
  .grade-btn.g4 .grade-num { color: #6A8A45; }
  .grade-btn.g5 .grade-num { color: #5A7A4E; }

  .grade-label {
    font-size: 0.55rem;
    color: var(--text-dim);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: center;
  }

  /* AI Explain */
  .explain-btn {
    width: 100%;
    padding: 0.65rem;
    background: none;
    border: 1px dashed var(--border-input);
    border-radius: 3px;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    margin-bottom: 0.75rem;
  }

  .explain-btn:hover { color: var(--accent); border-color: var(--danger); }
  .explain-btn:disabled { opacity: 0.3; cursor: not-allowed; }

  .explanation {
    background: var(--surface-alt);
    border: 1px solid var(--border);
    border-radius: 3px;
    padding: 1.25rem 1.5rem;
    font-size: 0.78rem;
    line-height: 1.8;
    color: var(--text-2);
    white-space: pre-wrap;
    overflow-wrap: break-word;
    margin-bottom: 1rem;
  }

  /* ── Add Card View ── */
  .add-form {
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-radius: 10px;
    padding: 2rem;
  }

  .form-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: var(--accent);
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  .field {
    margin-bottom: 1.25rem;
  }

  .field label {
    display: block;
    font-size: 0.65rem;
    color: var(--text-dim);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .field input, .field textarea {
    width: 100%;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.7rem 0.9rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.85rem;
    outline: none;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }

  .field input:focus, .field textarea:focus {
    border-color: var(--accent);
    box-shadow: var(--focus-ring);
  }

  .field textarea { resize: vertical; min-height: 80px; }

  .submit-btn {
    background: var(--danger);
    box-shadow: var(--shadow-pop);
    border-radius: 8px;
    color: #FFFFFF;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.75rem 2rem;
    cursor: pointer;
    transition: background 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease;
  }

  .submit-btn:hover { background: var(--danger-hover); transform: translateY(-2px); box-shadow: 0 8px 20px -4px rgba(178,59,46,0.35); }

  /* ── Login / inicio (warm light theme, matching internal pages) ── */
  .auth-screen {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }
  .auth-card {
    position: relative;
    width: 100%;
    max-width: 380px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    box-shadow: var(--shadow-card);
    padding: 2.75rem 2rem 2.25rem;
  }
  .auth-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 0.4rem;
  }
  .auth-logo .logo-text { font-size: 1.7rem; }
  .auth-tagline {
    text-align: center;
    color: var(--text-dim);
    font-size: 0.62rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 2.25rem;
  }
  .auth-form { display: flex; flex-direction: column; gap: 0.9rem; }
  .auth-input {
    width: 100%;
    background: var(--bg);
    border: 1px solid var(--border-input);
    border-radius: 8px;
    padding: 0.8rem 1rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }
  .auth-input:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }
  .auth-input::placeholder { color: var(--text-faint); }
  .auth-error { color: var(--danger); font-size: 0.8rem; margin: 0; }
  .auth-btn {
    margin-top: 0.4rem;
    background: var(--danger);
    box-shadow: var(--shadow-pop);
    border: none;
    border-radius: 8px;
    color: #FFFFFF;
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 0.85rem;
    cursor: pointer;
    transition: background 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease;
  }
  .auth-btn:hover:not(:disabled) { background: var(--danger-hover); transform: translateY(-2px); box-shadow: 0 8px 20px -4px rgba(178,59,46,0.35); }
  .auth-btn:disabled { opacity: 0.6; cursor: default; }

  /* ── Celebración al terminar los repasos del día ── */
  .celebrate-overlay {
    position: fixed; inset: 0; z-index: 200;
    display: flex; align-items: center; justify-content: center;
    padding: 1.5rem; overflow: hidden;
    background: rgba(40,28,16,0.45);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    animation: celebrate-fade 0.25s ease;
  }
  @keyframes celebrate-fade { from { opacity: 0; } to { opacity: 1; } }

  .celebrate-card {
    position: relative; z-index: 2;
    width: 100%; max-width: 360px;
    text-align: center;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 18px;
    box-shadow: var(--shadow-card);
    padding: 2.5rem 2rem 2rem;
    animation: celebrate-pop 0.4s cubic-bezier(.2,.9,.3,1.3);
  }
  @keyframes celebrate-pop {
    from { opacity: 0; transform: scale(0.85) translateY(12px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  .celebrate-emoji {
    font-size: 3rem; line-height: 1; margin-bottom: 0.75rem;
    animation: celebrate-bounce 0.6s ease 0.1s both;
  }
  @keyframes celebrate-bounce {
    0% { transform: scale(0); }
    60% { transform: scale(1.25); }
    100% { transform: scale(1); }
  }
  .celebrate-title {
    font-family: 'Playfair Display', serif; font-style: italic;
    color: var(--accent); font-size: 1.8rem; font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .celebrate-text { color: var(--text-2); font-size: 0.9rem; margin-bottom: 0.35rem; }
  .celebrate-count { color: var(--text-dim); font-size: 0.8rem; margin-bottom: 0.4rem; }
  .celebrate-count strong { color: var(--accent); }
  .celebrate-streak {
    display: inline-block;
    margin: 0 auto 1.5rem;
    padding: 0.3rem 0.8rem;
    background: var(--accent-soft);
    border-radius: 999px;
    color: var(--text-2);
    font-size: 0.8rem;
  }
  .celebrate-streak strong { color: var(--danger); }
  .celebrate-btn {
    background: var(--danger); box-shadow: var(--shadow-pop);
    border: none; border-radius: 8px; color: #FFFFFF;
    font-family: 'DM Mono', monospace; font-size: 0.72rem;
    letter-spacing: 0.14em; text-transform: uppercase;
    padding: 0.8rem 2.5rem; cursor: pointer;
    transition: background 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease;
  }
  .celebrate-btn:hover { background: var(--danger-hover); transform: translateY(-2px); box-shadow: 0 8px 20px -4px rgba(178,59,46,0.35); }

  .confetti { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
  .confetti-piece {
    position: absolute; top: -12px; border-radius: 2px; opacity: 0.9;
    animation-name: confetti-fall;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes confetti-fall {
    0%   { transform: translateY(-12vh) rotate(0deg); opacity: 1; }
    100% { transform: translateY(105vh) rotate(560deg); opacity: 0.9; }
  }

  /* ── Racha (vista Estado) ── */
  .streak-banner {
    display: flex; align-items: center; justify-content: space-between;
    gap: 1rem; flex-wrap: wrap;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: var(--shadow-soft);
    padding: 1rem 1.25rem;
    margin-bottom: 1.5rem;
  }
  .streak-main { display: flex; align-items: baseline; gap: 0.5rem; }
  .streak-flame { font-size: 1.5rem; }
  .streak-num { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; color: var(--danger); line-height: 1; }
  .streak-unit { color: var(--text-2); font-size: 0.8rem; }
  .streak-sub { display: flex; gap: 1.25rem; font-size: 0.75rem; color: var(--text-dim); }
  .streak-sub strong { color: var(--text); }

  .success-msg {
    margin-top: 1rem;
    font-size: 0.7rem;
    color: var(--ok-text);
    letter-spacing: 0.08em;
  }

  /* ── List View ── */
  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1rem;
  }

  .list-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: var(--accent);
    font-style: italic;
  }

  .list-count {
    font-size: 0.65rem;
    color: var(--text-faint);
    letter-spacing: 0.1em;
  }

  .card-list { display: flex; flex-direction: column; gap: 0.4rem; }

  .list-item {
    display: grid;
    grid-template-columns: 30px 1fr auto auto;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 0.75rem;
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    border-radius: 10px;
    transition: box-shadow 0.16s ease;
  }

  .list-item:hover { box-shadow: 0 6px 16px -4px rgba(60,40,20,.16); }

  .li-actions { display: flex; align-items: center; gap: 0.4rem; }

  .li-german {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    color: var(--text);
  }

  .li-trans {
    font-size: 0.75rem;
    color: var(--text-2);
    font-style: italic;
  }

  .li-next {
    font-size: 0.65rem;
    color: var(--text-dim);
    letter-spacing: 0.06em;
    text-align: right;
    white-space: nowrap;
  }

  .li-next.due { color: var(--danger); }

  .delete-btn {
    background: none;
    border: none;
    color: var(--text-faint);
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
    transition: color 0.2s;
    font-family: 'DM Mono', monospace;
  }

  .delete-btn:hover { color: var(--danger); }

  .noise {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.015;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
    z-index: 9999;
  }


  /* ── Add Tabs ── */
  .add-tabs {
    display: flex;
    gap: 0;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--border);
  }

  .add-tab {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    padding: 0.5rem 1rem;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }

  .add-tab.active {
    color: var(--accent);
    border-bottom-color: var(--accent);
  }

  .bulk-textarea {
    width: 100%;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.7rem 0.9rem;
    color: var(--text-2);
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    outline: none;
    resize: vertical;
    min-height: 160px;
    line-height: 1.7;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }

  .bulk-textarea:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }

  .bulk-replace-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.68rem;
    color: var(--text-dim);
    letter-spacing: 0.04em;
    cursor: pointer;
    margin-bottom: 0.25rem;
  }
  .bulk-replace-row input { accent-color: var(--danger); cursor: pointer; }
  .bulk-replace-row:hover span { color: var(--text-2); }

  .preview-card-btn {
    background: none;
    border: none;
    color: var(--text-faint);
    cursor: pointer;
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
    transition: color 0.2s;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  .preview-card-btn:hover { color: var(--accent); }

  .bulk-schema {
    font-size: 0.65rem;
    color: var(--text-dim);
    margin-bottom: 1rem;
    letter-spacing: 0.04em;
    line-height: 1.6;
  }

  .bulk-schema code {
    color: var(--accent);
    background: var(--surface-alt);
    padding: 0.1em 0.3em;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .error-msg {
    margin-top: 1rem;
    font-size: 0.7rem;
    color: var(--danger);
    letter-spacing: 0.08em;
  }




  /* ── Media on card ── */
  .card-media {
    max-width: 90%;
    max-height: 110px;
    width: auto;
    border-radius: 3px;
    object-fit: contain;
    margin-bottom: 0.6rem;
    border: 1px solid var(--border);
    flex-shrink: 0;
  }

  .card-audio {
    width: 90%;
    max-width: 260px;
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
    accent-color: var(--danger);
    height: 32px;
    flex-shrink: 0;
  }


  .mode-toggle {
    background: none;
    border: none;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.58rem;
    letter-spacing: 0.06em;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.2s;
  }
  .mode-toggle:hover { color: var(--accent); }

  .url-input-row {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .url-input {
    flex: 1;
    background: var(--bg);
    border: 1px solid var(--border-input);
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    outline: none;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }
  .url-input:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }

  .url-set-btn {
    background: var(--surface-alt);
    border: 1px solid var(--border-input);
    border-radius: 8px;
    color: var(--accent);
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    padding: 0.5rem 0.85rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .url-set-btn:hover { background: var(--accent-soft); color: var(--danger); }

  .media-preview-label {
    font-size: 0.62rem;
    color: var(--text-dim);
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .media-upload-row {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }

  .media-upload-btn {
    background: var(--bg);
    border: 1px dashed var(--border-input);
    border-radius: 8px;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.4rem 0.75rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }

  .media-upload-btn:hover { color: var(--accent); border-color: var(--text-faint); }

  .media-preview {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.65rem;
    color: var(--text-dim);
  }

  .media-preview img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 2px;
    border: 1px solid var(--border);
  }

  .media-remove {
    background: none;
    border: none;
    color: var(--text-faint);
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0 0.2rem;
    font-family: 'DM Mono', monospace;
    transition: color 0.2s;
  }

  .media-remove:hover { color: var(--danger); }

  .media-uploading {
    font-size: 0.62rem;
    color: var(--text-faint);
    letter-spacing: 0.06em;
    font-style: italic;
  }

  /* ── Delete All / Confirm ── */
  .list-header-right {
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }

  .delete-all-btn {
    background: none;
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }

  .delete-all-btn:hover {
    color: var(--danger);
    border-color: var(--danger);
  }

  .export-btn {
    background: none;
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }
  .export-btn:hover { color: var(--accent); border-color: var(--accent); }

  .confirm-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.5rem;
  }

  .confirm-dialog {
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-radius: 10px;
    padding: 2rem;
    max-width: 360px;
    width: 100%;
  }

  .confirm-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: var(--text);
    margin-bottom: 0.75rem;
  }

  .confirm-body {
    font-size: 0.75rem;
    color: var(--text-dim);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .confirm-body strong { color: var(--text); font-weight: 400; }

  .confirm-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
  }

  .confirm-cancel {
    background: none;
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.6rem 1.25rem;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }

  .confirm-cancel:hover { border-color: var(--text-faint); color: var(--text); }

  .confirm-ok {
    background: var(--danger);
    border: 1px solid var(--danger);
    border-radius: 2px;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.6rem 1.25rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  .confirm-ok:hover { background: var(--danger-hover); border-color: var(--danger-hover); }


  /* ── List search ── */
  .list-search-wrap {
    position: relative;
    margin-bottom: 1rem;
  }

  .list-search {
    width: 100%;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.6rem 2rem 0.6rem 0.9rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    outline: none;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }
  .list-search:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }
  .list-search::placeholder { color: var(--text-faint); }

  .list-search-clear {
    position: absolute;
    right: 0.6rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-faint);
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    transition: color 0.2s;
  }
  .list-search-clear:hover { color: var(--danger); }

  .list-empty {
    font-size: 0.75rem;
    color: var(--text-faint);
    padding: 2rem;
    text-align: center;
  }
  .list-empty em { color: var(--text-dim); font-style: normal; }

  /* ── List item updated ── */
  .li-main { flex: 1; min-width: 0; }
  .li-note {
    font-size: 0.6rem;
    color: var(--text-faint);
    letter-spacing: 0.04em;
    margin-top: 0.15rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .edit-btn {
    background: none;
    border: none;
    color: var(--text-faint);
    cursor: pointer;
    font-size: 0.85rem;
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
    transition: color 0.2s;
    font-family: 'DM Mono', monospace;
    flex-shrink: 0;
  }
  .edit-btn:hover { color: var(--accent); }

  /* ── Edit modal ── */
  .edit-dialog {
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-radius: 10px;
    padding: 1.75rem;
    max-width: 420px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .edit-fields { margin: 1.25rem 0; display: flex; flex-direction: column; gap: 0.9rem; }


  /* ── Image preview modal ── */
  .preview-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.15rem 0.3rem;
    border-radius: 6px;
    flex-shrink: 0;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
  }
  .preview-btn:hover { opacity: 0.7; }

  .preview-thumb {
    width: 28px;
    height: 28px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid var(--border);
    display: block;
  }

  .preview-thumb-empty {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    border: 1px dashed var(--border-input);
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    color: var(--text-faint);
  }

  .card-preview-dialog {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 1.5rem;
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 90vh;
    overflow-y: auto;
  }

  .card-preview-side {
    border: 1px solid var(--border);
    border-radius: 3px;
    overflow: hidden;
  }

  .card-preview-label {
    background: var(--bg);
    font-size: 0.58rem;
    color: var(--text-faint);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.3rem 0.75rem;
    border-bottom: 1px solid var(--border);
  }

  .card-preview-body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    min-height: 80px;
    justify-content: center;
  }

  .card-preview-big {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: var(--text);
    text-align: center;
    line-height: 1.2;
  }

  .card-preview-trans {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.3rem;
    color: var(--accent);
    text-align: center;
  }

  .card-preview-example {
    font-size: 0.78rem;
    color: var(--text-dim);
    text-align: center;
    font-style: italic;
    line-height: 1.6;
  }

  .card-preview-note {
    font-size: 0.65rem;
    color: var(--text-faint);
    text-align: center;
    letter-spacing: 0.04em;
  }

  .card-preview-img {
    max-width: 100%;
    max-height: 140px;
    object-fit: contain;
    border-radius: 3px;
  }

  .img-preview-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.5rem;
  }

  .img-preview-dialog {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 1.5rem;
    max-width: 420px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .img-preview-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .img-preview-word {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: var(--text);
  }

  .img-preview-close {
    background: none;
    border: none;
    color: var(--text-faint);
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    transition: color 0.2s;
  }
  .img-preview-close:hover { color: var(--text); }

  .img-preview-frame {
    width: 100%;
    aspect-ratio: 4/3;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .img-preview-frame img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .img-preview-broken {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-faint);
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .img-preview-broken-icon {
    font-size: 2rem;
    opacity: 0.3;
  }

  .img-preview-url-row {
    display: flex;
    gap: 0.5rem;
  }

  .img-preview-url-input {
    flex: 1;
    background: var(--bg);
    border: 1px solid var(--border-input);
    border-radius: 2px;
    padding: 0.5rem 0.75rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .img-preview-url-input:focus { border-color: var(--danger); }
  .img-preview-url-input::placeholder { color: var(--text-faint); }

  .img-preview-save-btn {
    background: var(--danger);
    border: none;
    border-radius: 2px;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0 0.9rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .img-preview-save-btn:hover { background: var(--danger-hover); }

  .img-preview-status {
    font-size: 0.65rem;
    text-align: center;
    letter-spacing: 0.06em;
  }
  .img-preview-status.ok { color: var(--ok); }
  .img-preview-status.err { color: var(--danger); }

  /* filter button */
  .list-filter-row {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }

  .list-filter-btn {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .list-filter-btn.active { border-color: var(--danger); color: var(--text); background: var(--danger-soft); }
  .list-filter-btn:hover:not(.active) { border-color: var(--text-faint); color: var(--text-2); }

  /* ── Toast ── */
  .toast {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-left: 3px solid var(--ok);
    border-radius: 3px;
    padding: 0.65rem 1.25rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    color: var(--ok-text);
    z-index: 2000;
    white-space: nowrap;
    animation: toast-in 0.2s ease, toast-out 0.3s ease 1.8s forwards;
    pointer-events: none;
  }

  @keyframes toast-in {
    from { opacity: 0; transform: translateX(-50%) translateY(8px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes toast-out {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to   { opacity: 0; transform: translateX(-50%) translateY(8px); }
  }

  /* ── Stats View ── */
  .stats-view {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .stats-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .stats-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: var(--accent);
    font-style: italic;
  }

  .stats-total {
    font-size: 0.65rem;
    color: var(--text-faint);
    letter-spacing: 0.1em;
  }

  .stats-chart {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .stats-row {
    display: grid;
    grid-template-columns: 90px 1fr 70px;
    align-items: center;
    gap: 0.75rem;
  }

  .stats-row-label {
    font-size: 0.68rem;
    color: var(--text-2);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .stats-bar-wrap {
    height: 10px;
    background: var(--surface-alt);
    border-radius: 2px;
    overflow: hidden;
  }

  .stats-bar {
    height: 100%;
    border-radius: 2px;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    min-width: 2px;
  }

  .stats-row-count {
    display: flex;
    align-items: baseline;
    gap: 0.4rem;
    justify-content: flex-end;
  }

  .stats-n {
    font-size: 0.9rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: var(--text);
  }

  .stats-pct {
    font-size: 0.58rem;
    color: var(--text-faint);
  }

  .stats-footer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 0.75rem;
  }

  .stats-kpi {
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    border-radius: 10px;
    padding: 1rem 0.75rem;
    text-align: center;
    transition: transform 0.16s ease, box-shadow 0.16s ease;
  }
  .stats-kpi:hover { box-shadow: var(--shadow-card); transform: translateY(-2px); }

  .kpi-val {
    font-family: 'DM Mono', monospace;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--text);
    line-height: 1;
    margin-bottom: 0.4rem;
  }

  .kpi-label {
    font-size: 0.58rem;
    color: var(--text-faint);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1.4;
  }

  @media (max-width: 430px) {
    .stats-row {
      grid-template-columns: 70px 1fr 60px;
      gap: 0.5rem;
    }
    .stats-row-label { font-size: 0.6rem; }
    .kpi-val { font-size: 1.4rem; }
    .kpi-label { font-size: 0.55rem; }
  }

  .leech-section { margin-top: 1.5rem; }

  .leech-title {
    font-size: 0.7rem;
    color: var(--text-dim);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }

  .leech-item { align-items: start; }

  .leech-badge {
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--danger);
    background: var(--danger-soft);
    border-radius: 6px;
    padding: 0.15rem 0.45rem;
    white-space: nowrap;
  }

  .leech-hint {
    margin-top: 0.5rem;
    padding: 0.6rem 0.75rem;
    background: var(--surface-alt);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 0.75rem;
    line-height: 1.6;
    color: var(--text-2);
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }

  .leech-error {
    margin-top: 0.4rem;
    font-size: 0.7rem;
    color: var(--danger);
  }

  .leech-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.6rem;
  }

  .leech-btn {
    padding: 0.4rem 0.7rem;
    background: none;
    border: 1px dashed var(--border-input);
    border-radius: 6px;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.06em;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }

  .leech-btn:hover { color: var(--accent); border-color: var(--accent); }
  .leech-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .leech-btn.primary {
    border-style: solid;
    border-color: var(--ok);
    color: var(--ok-text);
    background: var(--ok-soft);
  }
  .leech-btn.primary:hover { border-color: var(--ok-text); color: var(--ok-text); }

  /* ── Help / Info View ── */
  .help-view {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .help-intro {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-2);
    border-left: 3px solid var(--accent);
    padding-left: 1rem;
  }
  .help-intro strong { color: var(--text); }

  .help-section {
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
  }

  .help-section-title {
    font-size: 0.62rem;
    color: var(--accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  .help-section p {
    font-size: 0.8rem;
    line-height: 1.7;
    color: var(--text-2);
  }
  .help-section p + p { margin-top: 0.6rem; }
  .help-section p strong { color: var(--text); }

  .help-types {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 0.75rem;
  }
  .help-types li {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .help-type-name {
    align-self: flex-start;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--accent-soft);
    border-radius: 6px;
    padding: 0.15rem 0.5rem;
  }
  .help-type-tip {
    font-size: 0.78rem;
    line-height: 1.6;
    color: var(--text-2);
  }

  .help-tips {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  .help-tips li {
    position: relative;
    padding-left: 1.1rem;
    font-size: 0.8rem;
    line-height: 1.7;
    color: var(--text-2);
  }
  .help-tips li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent);
  }
  .help-tips strong, .help-type-tip strong { color: var(--text); }


  /* ── Card type badges ── */
  .card-type-badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    font-size: 0.58rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-2);
    background: var(--surface-alt);
    border: 1px solid var(--border);
    border-radius: 2px;
    padding: 0.2rem 0.5rem;
  }

  /* ── Type 1: image card ── */
  .t1-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    height: 100%;
  }

  .t1-front-img {
    width: auto;
    height: 55%;
    max-width: 80%;
    object-fit: contain;
    border-radius: 4px;
    border: 1px solid var(--border);
    background: var(--bg);
    flex-shrink: 0;
  }

  .t1-front-hint {
    font-size: 0.58rem;
    color: var(--text-faint);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .t1-back-word {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
    color: var(--text);
    text-align: center;
    line-height: 1.1;
    margin-bottom: 0.35rem;
  }

  .t1-back-note {
    font-size: 0.65rem;
    color: var(--text-faint);
    letter-spacing: 0.06em;
    margin-bottom: 1rem;
  }

  .audio-replay-btn {
    background: var(--bg);
    border: 1px solid var(--text-faint);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1rem;
    color: var(--text-dim);
    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.1s;
    flex-shrink: 0;
    margin-top: 0.5rem;
  }
  .audio-replay-btn:hover { background: var(--accent-soft); border-color: var(--accent); color: var(--accent); transform: scale(1.08); }
  .audio-replay-btn.playing { border-color: var(--accent); color: var(--accent); }

  /* ── Type 2: example card ── */
  .t2-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0 0.5rem;
  }

  .t2-word {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--text);
    text-align: center;
    line-height: 1.2;
  }

  .t2-divider {
    width: 2rem;
    height: 1px;
    background: var(--danger);
    flex-shrink: 0;
  }

  .t2-example {
    font-size: 0.78rem;
    color: var(--text-2);
    text-align: center;
    line-height: 1.7;
    font-style: italic;
  }

  .t2-example em {
    color: var(--accent);
    font-style: normal;
    font-weight: 400;
  }

  .t2-back {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    padding: 0 0.5rem;
  }

  .t2-translation {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.6rem;
    color: var(--accent);
    text-align: center;
  }

  .t2-example-trans {
    font-size: 0.7rem;
    color: var(--text-faint);
    text-align: center;
    line-height: 1.6;
    font-style: italic;
  }

  /* ── Type selector in form ── */
  .type-selector {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }

  .type-btn {
    position: relative;
    flex: 1;
    padding: 0.5rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
    line-height: 1.4;
  }
  .type-btn.active {
    border-color: var(--danger);
    color: var(--text);
    background: var(--danger-soft);
  }
  .type-btn:hover:not(.active) { border-color: var(--text-faint); color: var(--text-2); }

  /* Tooltip explaining how each card type works */
  .type-tip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 190px;
    max-width: 70vw;
    padding: 0.55rem 0.7rem;
    background: var(--text);
    color: var(--bg);
    border-radius: 6px;
    box-shadow: var(--shadow-card);
    font-size: 0.66rem;
    letter-spacing: 0;
    text-transform: none;
    text-align: left;
    line-height: 1.45;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.15s ease;
    z-index: 20;
  }
  .type-tip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: var(--text);
  }
  .type-btn:hover .type-tip,
  .type-btn:focus-visible .type-tip { opacity: 1; visibility: visible; }

  /* Always-visible description of the currently selected card type (mobile-friendly) */
  .type-tip-static {
    margin: -0.75rem 0 1.25rem;
    color: var(--text-dim);
    font-size: 0.72rem;
    line-height: 1.45;
  }


  /* ── Type 4: español → escribir alemán ── */
  .t4-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    height: 100%;
  }
  .t4-label {
    font-size: 0.58rem;
    color: var(--text-faint);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .t4-word {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 2.2rem;
    color: var(--accent);
    text-align: center;
  }
  .t4-note {
    font-size: 0.65rem;
    color: var(--text-faint);
    text-align: center;
  }

  /* ── Type 5: fill in the blank ── */
  .t5-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
  }
  .t5-sentence {
    font-size: 1rem;
    color: var(--text);
    text-align: center;
    line-height: 1.7;
  }
  .t5-blank {
    display: inline-block;
    min-width: 5rem;
    border-bottom: 2px solid var(--danger);
    color: transparent;
    user-select: none;
  }

  /* ── Type 6: article selector ── */
  .t6-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    height: 100%;
  }
  .t6-label {
    font-size: 0.58rem;
    color: var(--text-faint);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .t6-word {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    color: var(--text);
    text-align: center;
    line-height: 1.1;
  }
  .t6-hint {
    font-size: 0.6rem;
    color: var(--text-faint);
    letter-spacing: 0.08em;
  }

  /* ── Interactive answer zone (below card for types 4,5,6) ── */
  .answer-zone {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .answer-input-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .answer-input {
    flex: 1;
    min-width: 0;
    background: var(--bg);
    border: 1px solid var(--border-input);
    border-radius: 8px;
    padding: 0.7rem 0.9rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }
  .answer-input:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }
  .answer-input.correct { border-color: var(--ok); background: var(--ok-soft); }
  .answer-input.wrong   { border-color: var(--danger); background: var(--danger-soft); }
  .answer-input.correct:focus { border-color: var(--ok); box-shadow: 0 0 0 3px rgba(90,122,78,0.18); }
  .answer-input.wrong:focus { border-color: var(--danger); box-shadow: 0 0 0 3px rgba(178,59,46,0.18); }

  .answer-check-btn {
    background: var(--danger);
    border: none;
    border-radius: 8px;
    color: #FFFFFF;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0 1.25rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .answer-check-btn:hover { background: var(--danger-hover); }
  .answer-check-btn:disabled { background: var(--border-input); color: var(--text-faint); cursor: default; }

  .reveal-btn {
    background: none;
    border: 1px dashed var(--text-faint);
    border-radius: 8px;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.5rem 0.9rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    white-space: nowrap;
  }
  .reveal-btn:hover { color: var(--accent); border-color: var(--accent); }

  .continuar-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--accent-soft);
    border: 1px solid var(--accent);
    border-radius: 8px;
    color: var(--accent);
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.65rem 1.5rem;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    margin-top: 0.25rem;
  }
  .continuar-btn:hover { background: var(--accent); color: #FFFFFF; }
  .continuar-btn::after { content: " →"; font-size: 0.85rem; }

  .answer-feedback {
    font-size: 0.75rem;
    padding: 0.6rem 0.9rem;
    border-radius: 8px;
    line-height: 1.5;
    overflow-wrap: break-word;
  }
  .answer-feedback.correct {
    background: var(--ok-soft);
    border: 1px solid var(--ok);
    color: var(--ok-text);
  }
  .answer-feedback.wrong {
    background: var(--danger-soft);
    border: 1px solid var(--danger);
    color: var(--danger);
  }
  .answer-feedback strong { font-weight: 500; }

  /* ── Article buttons (type6) ── */
  .article-btns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
  }

  .article-btn {
    padding: 1rem;
    border-radius: 8px;
    box-shadow: var(--shadow-soft);
    background: var(--surface);
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    color: var(--text);
    cursor: pointer;
    transition: all 0.15s;
    text-align: center;
  }
  .article-btn:hover:not(:disabled) { color: var(--accent); background: var(--accent-soft); }
  .article-btn.correct { border-color: var(--ok); color: var(--ok-text); background: var(--ok-soft); }
  .article-btn.wrong   { border-color: var(--danger); color: var(--danger); background: var(--danger-soft); }
  .article-btn.reveal  { border-color: var(--ok); color: var(--ok-text); background: var(--ok-soft); }
  .article-btn:disabled { cursor: default; opacity: 0.6; }

  /* ── Mobile (iPhone 15: 390px logical) ── */
  @media (max-width: 430px) {
    .app {
      padding: 1rem 1rem env(safe-area-inset-bottom, 1rem);
    }

    .header {
      margin-bottom: 1.5rem;
      align-items: center;
    }

    .logo-text { font-size: 1.15rem; }

    .nav { display: none; }

    .hamburger-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      min-height: 44px;
      font-size: 1.25rem;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--text);
    }

    .menu-backdrop {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: 100vh;
      background: rgba(0, 0, 0, 0.3);
      z-index: 90;
    }

    .menu-panel {
      position: absolute;
      top: 100%;
      right: 0.5rem;
      display: flex;
      flex-direction: column;
      min-width: 160px;
      background: var(--surface);
      border-radius: 8px;
      box-shadow: var(--shadow-card);
      padding: 0.4rem;
      z-index: 100;
    }

    .menu-item {
      padding: 0.75rem 1rem;
      min-height: 44px;
      text-align: left;
      background: none;
      border: none;
      border-radius: 6px;
      font-size: 0.9rem;
      cursor: pointer;
      white-space: nowrap;
      color: var(--text-dim);
    }

    .menu-item.active { font-weight: 600; color: var(--accent); }

    .menu-logout { opacity: 0.7; }

    .card-scene { height: 210px; }

    .card-word { font-size: 1.9rem; }
    .card-translation { font-size: 1.45rem; }

    /* 6 grade buttons -> 3+3 on mobile */
    .grades {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }

    .grade-btn {
      padding: 0.85rem 0.3rem;
      min-height: 56px;
    }

    .grade-num { font-size: 1.2rem; }
    .grade-label { font-size: 0.6rem; }

    .explain-btn {
      min-height: 44px;
      font-size: 0.72rem;
    }

    /* Prevent iOS zoom on input focus (needs ≥16px) */
    .field input, .field textarea {
      font-size: 16px;
    }

    .add-form { padding: 1.25rem; }

    .submit-btn {
      width: 100%;
      min-height: 48px;
      font-size: 0.72rem;
    }

    /* List: stack german+trans vertically, keep days right */
    .list-item {
      grid-template-columns: 30px 1fr auto auto;
      grid-template-rows: auto;
    }

    .explanation {
      font-size: 0.75rem;
      padding: 1rem;
    }
  }
`,Zi=[{n:0,label:"Nada"},{n:1,label:"Mal"},{n:2,label:"Difícil"},{n:3,label:"Ok"},{n:4,label:"Bien"},{n:5,label:"Fácil"}];function Ep({card:e}){return i.jsxs("div",{className:"t1-front",children:[i.jsx("div",{className:"card-type-badge",children:ct.type1}),e.imageUrl?i.jsx("img",{className:"t1-front-img",src:Je(e.imageUrl),alt:""}):i.jsx("div",{style:{fontSize:"0.75rem",color:"#444",border:"1px dashed #333",padding:"1.5rem 2rem",borderRadius:"4px"},children:"sin imagen"}),i.jsx("div",{className:"t1-front-hint",children:"toca para voltear"})]})}function zp({card:e,onSpeak:t}){return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-type-badge",children:ct.type1}),i.jsx("div",{className:"card-hint",children:"califica abajo"}),i.jsx("div",{className:"t1-back-word",children:e.german}),e.note&&i.jsx("div",{className:"t1-back-note",children:e.note}),i.jsx("button",{className:"audio-replay-btn",onClick:n=>{n.stopPropagation(),t()},title:"Pronunciar",children:"▶"})]})}function _p({card:e}){const t=(n,r)=>{if(!n||!r)return n;const l=r.replace(/^(der|die|das|ein|eine)\s+/i,"").toLowerCase(),o=new RegExp(`(${l})`,"gi");return n.split(o).map((s,u)=>o.test(s)?i.jsx("em",{children:s},u):s)};return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-type-badge",children:ct.type2}),i.jsx("div",{className:"card-hint",children:"toca para voltear"}),i.jsxs("div",{className:"t2-front",children:[i.jsx("div",{className:"t2-word",children:e.german}),e.example&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"t2-divider"}),i.jsx("div",{className:"t2-example",children:t(e.example,e.german)})]})]})]})}function Tp({card:e}){return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-type-badge",children:ct.type2}),i.jsx("div",{className:"card-hint",children:"califica abajo"}),i.jsxs("div",{className:"t2-back",children:[i.jsx("div",{className:"t2-translation",children:e.translation}),e.note&&i.jsx("div",{className:"card-note",children:e.note}),i.jsx("button",{className:"audio-replay-btn",style:{marginTop:"0.5rem"},onClick:t=>{t.stopPropagation(),Le(e)},title:"Pronunciar",children:"▶"}),e.exampleTranslation&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"t2-divider",style:{marginTop:"0.5rem"}}),i.jsxs("div",{className:"t2-example-trans",children:['"',e.exampleTranslation,'"']})]})]})]})}function Pp({card:e,language:t}){const n=Re[t]||Re.de;return i.jsxs("div",{className:"t4-front",children:[i.jsx("div",{className:"card-type-badge",children:ct.type4}),i.jsxs("div",{className:"t4-label",children:["¿Cómo se dice en ",n.name.toLowerCase(),"?"]}),i.jsx("div",{className:"t4-word",children:e.translation}),e.note&&i.jsx("div",{className:"t4-note",children:e.note})]})}function Lp({card:e}){const n=(e.example||"").split("___");return i.jsxs("div",{className:"t5-front",children:[i.jsx("div",{className:"card-type-badge",children:ct.type5}),e.imageUrl&&i.jsx("img",{className:"t1-front-img",src:Je(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"45%",maxWidth:"80%",marginBottom:"0.25rem"}}),i.jsx("div",{className:"t5-sentence",children:n.map((r,l)=>i.jsxs(Te.Fragment,{children:[r,l<n.length-1&&i.jsx("span",{className:"t5-blank",children:"_____"})]},l))}),e.note&&i.jsx("div",{className:"t4-note",style:{fontSize:"0.62rem"},children:e.note})]})}function Mp({card:e,language:t}){const{bare:n}=Fc(e.german,t);return i.jsxs("div",{className:"t6-front",children:[i.jsx("div",{className:"card-type-badge",children:ct.type6}),e.imageUrl&&i.jsx("img",{className:"t1-front-img",src:Je(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"50%",maxWidth:"80%",marginBottom:"0.5rem"}}),i.jsx("div",{className:"t6-label",children:"¿Cuál es el artículo?"}),i.jsxs("div",{className:"t6-word",children:["___ ",n]})]})}function Dp({card:e,language:t,onGrade:n,onExplain:r,explaining:l,explanation:o}){const a=Re[t]||Re.de,[s,u]=S.useState(""),[d,h]=S.useState(null),g=Te.useRef(null);Te.useEffect(()=>{var x;(x=g.current)==null||x.focus()},[]);const m=()=>{if(!s.trim())return;const x=s.trim().toLowerCase()===e.german.trim().toLowerCase();h(x?"correct":"wrong")},v=()=>{h("revealed"),Le(e)};return i.jsxs("div",{className:"answer-zone",children:[i.jsxs("div",{className:"answer-input-row",children:[i.jsx("input",{ref:g,className:`answer-input ${d==="wrong"?"wrong":d==="correct"?"correct":""}`,value:s,onChange:x=>u(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!d&&m()},placeholder:`Escribe en ${a.name.toLowerCase()}…`,disabled:!!d}),i.jsx("button",{className:"answer-check-btn",onClick:m,disabled:!!d||!s.trim(),children:"OK"}),i.jsx("button",{className:"reveal-btn",onClick:v,disabled:!!d,children:"Revelar"})]}),d==="correct"&&i.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsx("span",{children:"✓ ¡Correcto!"}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem"},onClick:()=>Le(e),children:"▶"})]}),d==="wrong"&&i.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("span",{children:["✗ La respuesta es: ",i.jsx("strong",{children:e.german})]}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),d==="revealed"&&i.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("span",{children:["👁 La respuesta es: ",i.jsx("strong",{children:e.german})]}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),i.jsx("button",{className:"continuar-btn",onClick:()=>n(0),children:"Continuar"})]}),(d==="correct"||d==="wrong")&&i.jsx("div",{className:"grades",children:Zi.map(({n:x,label:j})=>i.jsxs("button",{className:`grade-btn g${x}`,onClick:()=>n(x),children:[i.jsx("span",{className:"grade-num",children:x}),i.jsx("span",{className:"grade-label",children:j})]},x))}),!!d&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"explain-btn",onClick:r,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),o&&i.jsx("div",{className:"explanation",children:o})]})]})}function Fp({card:e,onGrade:t,onExplain:n,explaining:r,explanation:l}){const[o,a]=S.useState(""),[s,u]=S.useState(null),d=Te.useRef(null);Te.useEffect(()=>{var v;(v=d.current)==null||v.focus()},[]);const h=(e.example||"").replace("___",e.german),g=()=>{if(!o.trim())return;const v=o.trim().toLowerCase()===e.german.trim().toLowerCase();u(v?"correct":"wrong")},m=()=>{u("revealed"),Le(e)};return i.jsxs("div",{className:"answer-zone",children:[i.jsxs("div",{className:"answer-input-row",children:[i.jsx("input",{ref:d,className:`answer-input ${s==="wrong"?"wrong":s==="correct"?"correct":""}`,value:o,onChange:v=>a(v.target.value),onKeyDown:v=>{v.key==="Enter"&&!s&&g()},placeholder:"Completa el espacio…",disabled:!!s}),i.jsx("button",{className:"answer-check-btn",onClick:g,disabled:!!s||!o.trim(),children:"OK"}),i.jsx("button",{className:"reveal-btn",onClick:m,disabled:!!s,children:"Revelar"})]}),s==="correct"&&i.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("span",{style:{minWidth:0},children:["✓ ¡Correcto! — ",h]}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),s==="wrong"&&i.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("span",{style:{minWidth:0},children:["✗ Era: ",i.jsx("strong",{children:e.german})," — ",h]}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),s==="revealed"&&i.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("span",{style:{minWidth:0},children:["👁 ",i.jsx("strong",{children:e.german})," — ",h]}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),i.jsx("button",{className:"continuar-btn",onClick:()=>t(0),children:"Continuar"})]}),(s==="correct"||s==="wrong")&&i.jsx("div",{className:"grades",children:Zi.map(({n:v,label:x})=>i.jsxs("button",{className:`grade-btn g${v}`,onClick:()=>t(v),children:[i.jsx("span",{className:"grade-num",children:v}),i.jsx("span",{className:"grade-label",children:x})]},v))}),!!s&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"explain-btn",onClick:n,disabled:r,children:r?"Consultando IA…":"✦ Explicar con IA"}),l&&i.jsx("div",{className:"explanation",children:l})]})]})}function Rp({card:e,language:t,onGrade:n,onExplain:r,explaining:l,explanation:o}){const[a,s]=S.useState(null),{articles:u,correct:d}=Fc(e.german,t),h=m=>{a||s(m)},g=m=>a?m===d?"reveal":m===a&&a!==d?"wrong":"":"";return i.jsxs("div",{className:"answer-zone",children:[i.jsx("div",{className:"article-btns",children:u.map(m=>i.jsx("button",{className:`article-btn ${g(m)}`,onClick:()=>h(m),disabled:!!a,children:m},m))}),a&&i.jsxs("div",{className:`answer-feedback ${a===d?"correct":"wrong"}`,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsx("span",{style:{minWidth:0},children:a===d?`✓ Correcto — ${e.german}`:`✗ Es ${d} — ${e.german}`}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),e.note&&i.jsx("div",{className:"card-note",children:e.note}),i.jsx("button",{className:"continuar-btn",onClick:()=>n(a===d?5:1),children:"Continuar"})]}),a&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"explain-btn",onClick:r,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),o&&i.jsx("div",{className:"explanation",children:o})]})]})}const vs=["#C8825B","#B23B2E","#5A7A4E","#E0A458","#8A6FA6"];function Op({count:e,streak:t,onClose:n}){const r=Te.useMemo(()=>Array.from({length:20},(l,o)=>({left:Math.random()*100,delay:Math.random()*.5,duration:1.6+Math.random()*1.3,color:vs[o%vs.length],size:6+Math.random()*6})),[]);return i.jsxs("div",{className:"celebrate-overlay",onClick:n,children:[i.jsx("div",{className:"confetti",children:r.map((l,o)=>i.jsx("span",{className:"confetti-piece",style:{left:`${l.left}%`,background:l.color,width:l.size,height:l.size,animationDelay:`${l.delay}s`,animationDuration:`${l.duration}s`}},o))}),i.jsxs("div",{className:"celebrate-card",onClick:l=>l.stopPropagation(),children:[i.jsx("div",{className:"celebrate-emoji",children:"🎉"}),i.jsx("h2",{className:"celebrate-title",children:"¡Felicitaciones!"}),i.jsx("p",{className:"celebrate-text",children:"Terminaste tus repasos del día."}),i.jsxs("p",{className:"celebrate-count",children:["Repasaste ",i.jsx("strong",{children:e})," ",e===1?"tarjeta":"tarjetas"," hoy."]}),t>0&&i.jsxs("p",{className:"celebrate-streak",children:["🔥 Racha: ",i.jsx("strong",{children:t})," ",t===1?"día":"días"," seguidos"]}),i.jsx("button",{className:"celebrate-btn",onClick:n,children:"Continuar"})]})]})}function Ip({cards:e,onGrade:t,language:n,stats:r}){const[l,o]=S.useState(!1),[a,s]=S.useState(!1),[u,d]=S.useState(null),[h,g]=S.useState(0),[m,v]=S.useState(!1),[x,j]=S.useState(0),[F,p]=S.useState(!1),c=Te.useMemo(()=>{const _=e.filter(E=>E.nextReview<=Date.now());for(let E=_.length-1;E>0;E--){const O=Math.floor(Math.random()*(E+1));[_[E],_[O]]=[_[O],_[E]]}return _},[e.map(_=>_.id+_.nextReview).join(",")]),f=c[0],y=Te.useCallback(()=>{Le(f)},[f]);Te.useEffect(()=>{if(l&&((f==null?void 0:f.cardType)==="type1"||(f==null?void 0:f.cardType)==="type2")){const _=setTimeout(()=>Le(f),350);return()=>clearTimeout(_)}},[l]);const C=_=>{var ae;if(m)return;(ae=window.speechSynthesis)==null||ae.cancel();const E=c.length===1,O=(f==null?void 0:f.cardType)==="type1"||(f==null?void 0:f.cardType)==="type2",I=()=>{t(f.id,xp(f,_)),d(null),g(J=>J+1),j(J=>J+1),E&&p(!0)};O&&l?(v(!0),o(!1),setTimeout(()=>{I(),v(!1)},560)):(I(),o(!1))},z=async()=>{s(!0);try{d(await Uc(f))}catch{d("Error al contactar la API.")}s(!1)};if(!e.length)return i.jsx("div",{className:"deck-empty",children:i.jsxs("p",{children:["No hay tarjetas.",i.jsx("br",{}),"Ve a ",i.jsx("strong",{children:"+ Agregar"})," para crear tu primera."]})});if(!c.length)return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"deck-empty",children:i.jsxs("p",{children:["Sin repasos pendientes.",i.jsx("br",{}),"Vuelve mañana — el sistema hace el resto."]})}),F&&i.jsx(Op,{count:(r==null?void 0:r.todayCount)??x,streak:(r==null?void 0:r.currentStreak)??0,onClose:()=>p(!1)})]});const N=f.cardType||"type1",k=["type4","type5","type6"].includes(N),b=["type1","type2"].includes(N);return i.jsxs("div",{children:[i.jsxs("div",{className:"session-info",children:[i.jsxs("span",{children:["Pendientes: ",i.jsx("strong",{children:c.length})]}),i.jsxs("span",{children:["Total: ",i.jsx("strong",{children:e.length})]})]}),b&&i.jsx("div",{className:"card-scene",onClick:()=>!m&&o(_=>!_),children:i.jsxs("div",{className:`card-inner ${l?"flipped":""}`,children:[i.jsxs("div",{className:"card-face front",children:[N==="type1"&&i.jsx(Ep,{card:f}),N==="type2"&&i.jsx(_p,{card:f})]}),i.jsxs("div",{className:"card-face back",children:[N==="type1"&&i.jsx(zp,{card:f,onSpeak:y}),N==="type2"&&i.jsx(Tp,{card:f})]})]})}),k&&i.jsx("div",{className:"card-scene",children:i.jsxs("div",{className:"card-static",children:[N==="type4"&&i.jsx(Pp,{card:f,language:n}),N==="type5"&&i.jsx(Lp,{card:f}),N==="type6"&&i.jsx(Mp,{card:f,language:n})]})}),k&&i.jsxs(Te.Fragment,{children:[N==="type4"&&i.jsx(Dp,{card:f,language:n,onGrade:C,onExplain:z,explaining:a,explanation:u}),N==="type5"&&i.jsx(Fp,{card:f,onGrade:C,onExplain:z,explaining:a,explanation:u}),N==="type6"&&i.jsx(Rp,{card:f,language:n,onGrade:C,onExplain:z,explaining:a,explanation:u})]},h),b&&l&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"grades",children:Zi.map(({n:_,label:E})=>i.jsxs("button",{className:`grade-btn g${_}`,onClick:()=>C(_),children:[i.jsx("span",{className:"grade-num",children:_}),i.jsx("span",{className:"grade-label",children:E})]},_))}),i.jsx("button",{className:"explain-btn",onClick:z,disabled:a,children:a?"Consultando IA…":"✦ Explicar con IA"}),u&&i.jsx("div",{className:"explanation",children:u})]})]})}function Up({onAdd:e,onBulkAdd:t,language:n}){var qi;const r=Re[n]||Re.de,l=Gi(n),[o,a]=S.useState("single"),[s,u]=S.useState("type1"),[d,h]=S.useState(""),[g,m]=S.useState(""),[v,x]=S.useState(""),[j,F]=S.useState(""),[p,c]=S.useState(""),[f,y]=S.useState(!1),[C,z]=S.useState(null),[N,k]=S.useState(null),[b,_]=S.useState(null),[E,O]=S.useState("file"),[I,ae]=S.useState("file"),[J,We]=S.useState(""),[Mt,T]=S.useState(""),[M,D]=S.useState(""),[B,H]=S.useState(null),[ft,qe]=S.useState(!0),bn=()=>{!d.trim()||!g.trim()||(e({cardType:s,german:d.trim(),translation:g.trim(),note:v.trim(),example:j.trim(),exampleTranslation:p.trim(),imageUrl:C,audioUrl:N}),h(""),m(""),x(""),z(null),k(null),F(""),c(""),y(!0),setTimeout(()=>y(!1),2e3))},He=async(L,se)=>{const Qe=L.target.files[0];if(Qe){_(se);try{const{url:En}=await Cp(Qe);se==="image"?z(En):k(En)}catch{alert("Error al subir archivo.")}_(null),L.target.value=""}},et=(L,se)=>{const Qe=se.trim();Qe&&(L==="image"?(z(Qe),We("")):(k(Qe),T("")))},Ji=L=>{const se=L==="image"?C:N;!(se&&(se.startsWith("http://")||se.startsWith("https://")))&&se&&bp(se),L==="image"?(z(null),We("")):(k(null),T(""))},Bc=()=>{H(null);let L;try{L=JSON.parse(M.trim())}catch{H({ok:!1,msg:"JSON inválido. Revisa la sintaxis."});return}if(!Array.isArray(L)){H({ok:!1,msg:"Debe ser un array [ ... ]."});return}const se=L.filter(Qe=>{var En,ea;return((En=Qe.german)==null?void 0:En.trim())&&((ea=Qe.translation)==null?void 0:ea.trim())});if(!se.length){H({ok:!1,msg:'Ningún objeto tiene "german" y "translation".'});return}t(se,ft),D(""),H({ok:!0,msg:`✓ ${se.length} tarjeta${se.length!==1?"s":""} ${ft?"importada":"agregada"}${se.length!==1?"s":""}.`})};return i.jsxs("div",{className:"add-form",children:[i.jsxs("div",{className:"add-tabs",children:[i.jsx("button",{className:`add-tab ${o==="single"?"active":""}`,onClick:()=>a("single"),children:"Una tarjeta"}),i.jsx("button",{className:`add-tab ${o==="bulk"?"active":""}`,onClick:()=>a("bulk"),children:"Importar JSON"})]}),o==="single"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:l.map(L=>i.jsxs("button",{className:`type-btn ${s===L.id?"active":""}`,onClick:()=>u(L.id),children:[L.name,i.jsx("span",{className:"type-tip",role:"tooltip",children:L.tip})]},L.id))}),i.jsx("div",{className:"type-tip-static",children:(qi=l.find(L=>L.id===s))==null?void 0:qi.tip}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:s==="type5"?"Palabra que va en el hueco":r.name}),i.jsx("input",{value:d,onChange:L=>h(L.target.value),placeholder:s==="type5"?r.blankWordPh:r.wordPh})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción"}),i.jsx("input",{value:g,onChange:L=>m(L.target.value),placeholder:"la llave"})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Nota (opcional)"}),i.jsx("textarea",{value:v,onChange:L=>x(L.target.value),placeholder:"artículo, ejemplo, truco…"})]}),(s==="type2"||s==="type5")&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{children:s==="type5"?"Oración con ___ (espacio en blanco)":r.exLabel}),i.jsx("input",{value:j,onChange:L=>F(L.target.value),placeholder:s==="type5"?r.blankPh:r.exPh})]}),s==="type2"&&i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción del ejemplo"}),i.jsx("input",{value:p,onChange:L=>c(L.target.value),placeholder:"El perro corre rápido."})]})]}),["type1","type5","type6"].includes(s)&&i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Imagen (opcional) —"," ",i.jsx("button",{className:"mode-toggle",onClick:()=>{O(L=>L==="file"?"url":"file"),z(null),We("")},children:E==="file"?"usar URL":"subir archivo"})]}),C?i.jsxs("div",{className:"media-preview",children:[i.jsx("img",{src:Je(C),alt:""}),i.jsx("span",{className:"media-preview-label",children:C.startsWith("http")?"URL externa":C.split("/").pop()}),i.jsx("button",{className:"media-remove",onClick:()=>Ji("image"),children:"×"})]}):E==="file"?i.jsx("div",{className:"media-upload-row",children:i.jsxs("label",{className:"media-upload-btn",children:[b==="image"?i.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir imagen",i.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:L=>He(L,"image"),disabled:!!b})]})}):i.jsxs("div",{className:"url-input-row",children:[i.jsx("input",{className:"url-input",value:J,onChange:L=>We(L.target.value),placeholder:"https://upload.wikimedia.org/…",onKeyDown:L=>L.key==="Enter"&&et("image",J)}),i.jsx("button",{className:"url-set-btn",onClick:()=>et("image",J),children:"OK"})]})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Audio (opcional) —"," ",i.jsx("button",{className:"mode-toggle",onClick:()=>{ae(L=>L==="file"?"url":"file"),k(null),T("")},children:I==="file"?"usar URL":"subir archivo"})]}),N?i.jsxs("div",{className:"media-preview",children:[i.jsx("span",{className:"media-preview-label",children:N.startsWith("http")?"URL externa":N.split("/").pop()}),i.jsx("audio",{src:Je(N),controls:!0,style:{height:"24px",accentColor:"#cc0000"}}),i.jsx("button",{className:"media-remove",onClick:()=>Ji("audio"),children:"×"})]}):I==="file"?i.jsx("div",{className:"media-upload-row",children:i.jsxs("label",{className:"media-upload-btn",children:[b==="audio"?i.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir audio",i.jsx("input",{type:"file",accept:"audio/*",style:{display:"none"},onChange:L=>He(L,"audio"),disabled:!!b})]})}):i.jsxs("div",{className:"url-input-row",children:[i.jsx("input",{className:"url-input",value:Mt,onChange:L=>T(L.target.value),placeholder:"https://forvo.com/… o link directo a .mp3",onKeyDown:L=>L.key==="Enter"&&et("audio",Mt)}),i.jsx("button",{className:"url-set-btn",onClick:()=>et("audio",Mt),children:"OK"})]})]}),i.jsx("button",{className:"submit-btn",onClick:bn,children:"Agregar tarjeta"}),f&&i.jsx("div",{className:"success-msg",children:"✓ Guardada"})]}),o==="bulk"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Array JSON"}),i.jsx("textarea",{className:"bulk-textarea",value:M,onChange:L=>D(L.target.value),placeholder:r.bulkPh})]}),i.jsxs("div",{className:"bulk-schema",children:["Campos: ",i.jsx("code",{children:"german"})," ✦ ",i.jsx("code",{children:"translation"})," ✦ ",i.jsx("code",{children:"note"})," (opcional)"]}),i.jsxs("label",{className:"bulk-replace-row",children:[i.jsx("input",{type:"checkbox",checked:ft,onChange:L=>qe(L.target.checked)}),i.jsx("span",{children:"Reemplazar todo el mazo (desactiva para agregar encima)"})]}),i.jsx("button",{className:"submit-btn",onClick:Bc,children:"Importar"}),B&&i.jsx("div",{className:B.ok?"success-msg":"error-msg",children:B.msg})]})]})}function Ap({card:e,onEdit:t,onConvert:n}){const[r,l]=S.useState(!1),[o,a]=S.useState(null),[s,u]=S.useState(null);async function d(){l(!0),u(null);try{a(await Uc(e,"mnemonic"))}catch(g){u(g.message)}finally{l(!1)}}function h(){t({...e,note:o,lapses:0})}return i.jsxs("div",{className:"list-item leech-item",children:[i.jsx("div",{style:{width:"28px"}}),i.jsxs("div",{className:"li-main",children:[i.jsx("div",{className:"li-german",children:e.german}),i.jsx("div",{className:"li-trans",children:e.translation}),o&&i.jsx("div",{className:"leech-hint",children:o}),s&&i.jsx("div",{className:"leech-error",children:s}),i.jsxs("div",{className:"leech-actions",children:[i.jsx("button",{className:"leech-btn",onClick:d,disabled:r,children:r?"Consultando IA…":o?"Otra pista":"✦ Generar pista"}),o&&i.jsx("button",{className:"leech-btn primary",onClick:h,children:"Guardar como nota"}),i.jsx("button",{className:"leech-btn",onClick:()=>n(e),children:"🖼 Convertir a imagen"})]})]}),i.jsxs("div",{className:"leech-badge",title:"Veces olvidada",children:[e.lapses,"×"]})]})}function $p({cards:e,stats:t,onEdit:n,language:r}){const l=Date.now(),o=864e5,[a,s]=S.useState(null),u=Oc(),d=t&&t.day===u?t.todayCount:0,g=t&&t.day&&Ic(t.day,u)<=1?t.currentStreak:0,m=(t==null?void 0:t.longestStreak)??0,v=[{label:"Nuevas",color:"#B4642F",count:0},{label:"Hoy",color:"#C8825B",count:0},{label:"Mañana",color:"#D29E78",count:0},{label:"3–7 días",color:"#DBB596",count:0},{label:"8–30 días",color:"#E2CBB3",count:0},{label:"+30 días",color:"#E8D9C5",count:0}];for(const p of e){const f=(p.nextReview-l)/o;p.repetitions===0?v[0].count++:f<=0?v[1].count++:f<=1?v[2].count++:f<=7?v[3].count++:f<=30?v[4].count++:v[5].count++}const x=Math.max(...v.map(p=>p.count),1),j=e.length,F=e.filter(kp).sort((p,c)=>(c.lapses??0)-(p.lapses??0));return j?i.jsxs("div",{className:"stats-view",children:[i.jsxs("div",{className:"stats-header",children:[i.jsx("div",{className:"stats-title",children:"Estado del mazo"}),i.jsxs("div",{className:"stats-total",children:[j," tarjeta",j!==1?"s":""," en total"]})]}),i.jsxs("div",{className:"streak-banner",children:[i.jsxs("div",{className:"streak-main",children:[i.jsx("span",{className:"streak-flame",children:"🔥"}),i.jsx("span",{className:"streak-num",children:g}),i.jsxs("span",{className:"streak-unit",children:[g===1?"día":"días"," de racha"]})]}),i.jsxs("div",{className:"streak-sub",children:[i.jsxs("span",{children:["Hoy: ",i.jsx("strong",{children:d})]}),i.jsxs("span",{children:["Récord: ",i.jsx("strong",{children:m})]})]})]}),i.jsx("div",{className:"stats-chart",children:v.map((p,c)=>{const f=x>0?p.count/x*100:0,y=j>0?Math.round(p.count/j*100):0;return i.jsxs("div",{className:"stats-row",children:[i.jsx("div",{className:"stats-row-label",children:p.label}),i.jsx("div",{className:"stats-bar-wrap",children:i.jsx("div",{className:"stats-bar",style:{width:`${f}%`,background:p.color}})}),i.jsxs("div",{className:"stats-row-count",children:[i.jsx("span",{className:"stats-n",children:p.count}),i.jsxs("span",{className:"stats-pct",children:[y,"%"]})]})]},c)})}),i.jsxs("div",{className:"stats-footer",children:[i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"#cc0000"},children:v[0].count+v[1].count}),i.jsx("div",{className:"kpi-label",children:"para estudiar hoy"})]}),i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"#ffcc00"},children:e.filter(p=>p.repetitions>0&&p.interval>=21).length}),i.jsx("div",{className:"kpi-label",children:"maduras (≥21 días)"})]}),i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"#aaa"},children:j>0?(e.reduce((p,c)=>p+c.easiness,0)/j).toFixed(2):"—"}),i.jsx("div",{className:"kpi-label",children:"easiness promedio"})]}),i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"var(--danger)"},children:F.length}),i.jsx("div",{className:"kpi-label",children:"difíciles"})]})]}),F.length>0&&i.jsxs("div",{className:"leech-section",children:[i.jsx("div",{className:"leech-title",children:"Cartas difíciles"}),i.jsx("div",{className:"card-list",children:F.map(p=>i.jsx(Ap,{card:p,onEdit:n,onConvert:s},p.id))})]}),a&&i.jsx($c,{card:{...a,cardType:"type1"},language:r,onSave:p=>{n({...p,lapses:0}),s(null)},onClose:()=>s(null)})]}):i.jsx("div",{className:"deck-empty",children:i.jsxs("p",{children:["Sin tarjetas aún.",i.jsx("br",{}),"Ve a ",i.jsx("strong",{children:"+ Agregar"})," para empezar."]})})}function Bp({card:e,onSave:t,onClose:n}){const[r,l]=S.useState(e.imageUrl||""),[o,a]=S.useState(null),[s,u]=S.useState(!1),d=()=>{const h=r.trim();t({...e,imageUrl:h||null}),a("ok"),setTimeout(n,800)};return i.jsx("div",{className:"img-preview-overlay",onClick:n,children:i.jsxs("div",{className:"img-preview-dialog",onClick:h=>h.stopPropagation(),children:[i.jsxs("div",{className:"img-preview-header",children:[i.jsx("div",{className:"img-preview-word",children:e.german}),i.jsx("button",{className:"img-preview-close",onClick:n,children:"×"})]}),i.jsx("div",{className:"img-preview-frame",children:e.imageUrl&&!s?i.jsx("img",{src:Je(e.imageUrl),alt:"",onError:()=>u(!0)}):i.jsxs("div",{className:"img-preview-broken",children:[i.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),i.jsx("div",{children:s?"Imagen rota":"Sin imagen"})]})}),i.jsxs("div",{className:"img-preview-url-row",children:[i.jsx("input",{className:"img-preview-url-input",value:r,onChange:h=>{l(h.target.value),u(!1),a(null)},placeholder:"https://upload.wikimedia.org/…",onKeyDown:h=>h.key==="Enter"&&d()}),i.jsx("button",{className:"img-preview-save-btn",onClick:d,children:"Guardar"})]}),o==="ok"&&i.jsx("div",{className:"img-preview-status ok",children:"✓ Guardado"})]})})}function Vp({card:e,onClose:t}){var o;const n=e.cardType||"type1";(o=e.german.match(/^(der|die|das)/i))!=null&&o[1];const r=e.german.replace(/^(der|die|das)\s+/i,""),l=(e.example||"").replace("___",e.german);return i.jsx("div",{className:"img-preview-overlay",onClick:t,children:i.jsxs("div",{className:"card-preview-dialog",onClick:a=>a.stopPropagation(),children:[i.jsxs("div",{className:"img-preview-header",children:[i.jsxs("div",{className:"img-preview-word",children:[i.jsxs("span",{style:{fontSize:"0.6rem",color:"#555",letterSpacing:"0.1em",textTransform:"uppercase",marginRight:"0.5rem"},children:["Tipo ",n.replace("type","")]}),e.german]}),i.jsx("button",{className:"img-preview-close",onClick:t,children:"×"})]}),i.jsxs("div",{className:"card-preview-side",children:[i.jsx("div",{className:"card-preview-label",children:"Frente"}),n==="type1"&&i.jsx("div",{className:"card-preview-body",children:e.imageUrl?i.jsx("img",{src:Je(e.imageUrl),alt:"",className:"card-preview-img",onError:a=>a.target.style.display="none"}):i.jsxs("div",{className:"img-preview-broken",children:[i.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),i.jsx("div",{children:"Sin imagen"})]})}),n==="type2"&&i.jsxs("div",{className:"card-preview-body",children:[i.jsx("div",{className:"card-preview-big",children:e.german}),e.example&&i.jsx("div",{className:"card-preview-example",children:e.example})]}),n==="type4"&&i.jsxs("div",{className:"card-preview-body",children:[i.jsx("div",{className:"card-preview-trans",children:e.translation}),e.note&&i.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type5"&&i.jsx("div",{className:"card-preview-body",children:i.jsx("div",{className:"card-preview-example",children:(e.example||"").replace("___","_____")})}),n==="type6"&&i.jsxs("div",{className:"card-preview-body",children:[e.imageUrl&&i.jsx("img",{src:Je(e.imageUrl),alt:"",className:"card-preview-img",onError:a=>a.target.style.display="none"}),i.jsxs("div",{className:"card-preview-big",style:{color:"#888"},children:["___ ",r]})]})]}),i.jsxs("div",{className:"card-preview-side",children:[i.jsx("div",{className:"card-preview-label",children:"Dorso"}),i.jsxs("div",{className:"card-preview-body",children:[(n==="type1"||n==="type6")&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-preview-big",children:e.german}),e.note&&i.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type2"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-preview-trans",children:e.translation}),e.exampleTranslation&&i.jsxs("div",{className:"card-preview-example",style:{color:"#666"},children:['"',e.exampleTranslation,'"']})]}),(n==="type4"||n==="type5")&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-preview-big",children:e.german}),n==="type5"&&l&&i.jsx("div",{className:"card-preview-example",children:l})]})]})]}),i.jsx("button",{className:"continuar-btn",style:{alignSelf:"center"},onClick:t,children:"Cerrar"})]})})}function $c({card:e,onSave:t,onClose:n,language:r}){var N;const l=Re[r]||Re.de,o=Gi(r),[a,s]=S.useState(e.cardType||"type1"),[u,d]=S.useState(e.german),[h,g]=S.useState(e.translation),[m,v]=S.useState(e.note||""),[x,j]=S.useState(e.example||""),[F,p]=S.useState(e.exampleTranslation||""),[c,f]=S.useState(e.imageUrl||""),[y,C]=S.useState(e.audioUrl||""),z=()=>{!u.trim()||!h.trim()||t({...e,cardType:a,german:u.trim(),translation:h.trim(),note:m.trim(),example:x.trim(),exampleTranslation:F.trim(),imageUrl:c.trim()||null,audioUrl:y.trim()||null})};return i.jsx("div",{className:"confirm-overlay",onClick:n,children:i.jsxs("div",{className:"edit-dialog",onClick:k=>k.stopPropagation(),children:[i.jsx("div",{className:"confirm-title",children:"Editar tarjeta"}),i.jsxs("div",{className:"edit-fields",children:[i.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:o.map(k=>i.jsxs("button",{className:`type-btn ${a===k.id?"active":""}`,onClick:()=>s(k.id),children:[k.name,i.jsx("span",{className:"type-tip",role:"tooltip",children:k.tip})]},k.id))}),i.jsx("div",{className:"type-tip-static",children:(N=o.find(k=>k.id===a))==null?void 0:N.tip}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:a==="type5"?"Palabra que va en el hueco":l.name}),i.jsx("input",{value:u,onChange:k=>d(k.target.value),placeholder:a==="type5"?l.blankWordPh:""})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción"}),i.jsx("input",{value:h,onChange:k=>g(k.target.value)})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Nota"}),i.jsx("input",{value:m,onChange:k=>v(k.target.value),placeholder:"artículo, truco…"})]}),(a==="type2"||a==="type5")&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{children:a==="type5"?"Oración con ___ (espacio en blanco)":l.exLabel}),i.jsx("input",{value:x,onChange:k=>j(k.target.value),placeholder:a==="type5"?l.blankPh:l.exPh})]}),a==="type2"&&i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción del ejemplo"}),i.jsx("input",{value:F,onChange:k=>p(k.target.value)})]})]}),["type1","type5","type6"].includes(a)&&i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"URL imagen"}),i.jsx("input",{value:c,onChange:k=>f(k.target.value),placeholder:"https://…"})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"URL audio"}),i.jsx("input",{value:y,onChange:k=>C(k.target.value),placeholder:"https://…"})]})]}),i.jsxs("div",{className:"confirm-actions",children:[i.jsx("button",{className:"confirm-cancel",onClick:n,children:"Cancelar"}),i.jsx("button",{className:"confirm-ok",onClick:z,children:"Guardar"})]})]})})}function Wp({card:e,onClick:t}){const[n,r]=S.useState(!1);return Te.useEffect(()=>{r(!1)},[e.imageUrl]),!e.imageUrl||n?i.jsx("button",{className:"preview-btn",onClick:t,title:"Sin imagen — click para agregar",children:i.jsx("div",{className:"preview-thumb-empty",children:"+"})}):i.jsx("button",{className:"preview-btn",onClick:t,title:"Vista previa de imagen",children:i.jsx("img",{className:"preview-thumb",src:Je(e.imageUrl),alt:"",onError:()=>r(!0)})})}function Hp({cards:e,onDelete:t,onDeleteAll:n,onEdit:r,language:l}){const[o,a]=S.useState(!1),s=()=>{const b=JSON.stringify(e,null,2),_=new Blob([b],{type:"application/json"}),E=URL.createObjectURL(_),O=document.createElement("a"),I=new Date().toISOString().slice(0,10);O.href=E,O.download=`deutschkarten-backup-${I}.json`,O.click(),URL.revokeObjectURL(E)},[u,d]=S.useState(""),[h,g]=S.useState(null),[m,v]=S.useState(null),[x,j]=S.useState(null),[F,p]=S.useState(null),c=Te.useRef(null),[f,y]=S.useState("all"),C=b=>{c.current&&clearTimeout(c.current),p(b),c.current=setTimeout(()=>p(null),2200)},z=e.filter(b=>b.cardType==="type1"||b.cardType==="type5"||b.cardType==="type6"),N=[...e].sort((b,_)=>b.nextReview-_.nextReview).filter(b=>{if(u.trim()){const _=u.toLowerCase();if(!b.german.toLowerCase().includes(_)&&!b.translation.toLowerCase().includes(_)&&!(b.note||"").toLowerCase().includes(_))return!1}return f==="broken"?(b.cardType==="type1"||b.cardType==="type5"||b.cardType==="type6")&&!b.imageUrl:f==="ok"?(b.cardType==="type1"||b.cardType==="type5"||b.cardType==="type6")&&!!b.imageUrl:!0}),k=z.filter(b=>!b.imageUrl).length;return i.jsxs("div",{children:[i.jsxs("div",{className:"list-header",children:[i.jsx("div",{className:"list-title",children:"Todas las tarjetas"}),i.jsxs("div",{className:"list-header-right",children:[i.jsxs("div",{className:"list-count",children:[e.length," total"]}),e.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"export-btn",onClick:s,title:"Exportar backup JSON",children:"↓ Backup"}),i.jsx("button",{className:"delete-all-btn",onClick:()=>a(!0),children:"Borrar todo"})]})]})]}),i.jsxs("div",{className:"list-search-wrap",children:[i.jsx("input",{className:"list-search",value:u,onChange:b=>d(b.target.value),placeholder:"Buscar por palabra, traducción o nota…"}),u&&i.jsx("button",{className:"list-search-clear",onClick:()=>d(""),children:"×"})]}),i.jsxs("div",{className:"list-filter-row",children:[i.jsx("button",{className:`list-filter-btn ${f==="all"?"active":""}`,onClick:()=>y("all"),children:"Todas"}),i.jsxs("button",{className:`list-filter-btn ${f==="broken"?"active":""}`,onClick:()=>y("broken"),children:["Sin imagen ",k>0&&`(${k})`]}),i.jsx("button",{className:`list-filter-btn ${f==="ok"?"active":""}`,onClick:()=>y("ok"),children:"Con imagen"})]}),o&&i.jsx("div",{className:"confirm-overlay",onClick:()=>a(!1),children:i.jsxs("div",{className:"confirm-dialog",onClick:b=>b.stopPropagation(),children:[i.jsx("div",{className:"confirm-title",children:"¿Borrar todo el mazo?"}),i.jsxs("div",{className:"confirm-body",children:["Se eliminarán ",i.jsxs("strong",{children:[e.length," tarjeta",e.length!==1?"s":""]})," y todo su progreso. Esta acción no se puede deshacer."]}),i.jsxs("div",{className:"confirm-actions",children:[i.jsx("button",{className:"confirm-cancel",onClick:()=>a(!1),children:"Cancelar"}),i.jsx("button",{className:"confirm-ok",onClick:()=>{n(),a(!1)},children:"Sí, borrar todo"})]})]})}),h&&i.jsx($c,{card:h,language:l,onSave:b=>{r(b),g(null),C(`✓ "${b.german}" actualizado`)},onClose:()=>g(null)}),m&&i.jsx(Bp,{card:m,onSave:b=>{r(b),v(b),C("✓ Imagen actualizada")},onClose:()=>v(null)}),x&&i.jsx(Vp,{card:x,onClose:()=>j(null)}),i.jsxs("div",{className:"card-list",children:[N.length===0&&i.jsx("div",{className:"list-empty",children:u?`Sin resultados para "${u}"`:"Sin tarjetas en este filtro"}),N.map(b=>{const _=b.nextReview<=Date.now(),E=b.cardType==="type1"||b.cardType==="type5"||b.cardType==="type6";return i.jsxs("div",{className:"list-item",children:[E?i.jsx(Wp,{card:b,onClick:()=>v(b)}):i.jsx("div",{style:{width:"28px"}}),i.jsxs("div",{className:"li-main",children:[i.jsx("div",{className:"li-german",children:b.german}),i.jsx("div",{className:"li-trans",children:b.translation}),b.note&&i.jsx("div",{className:"li-note",children:b.note})]}),i.jsx("div",{className:`li-next ${_?"due":""}`,children:jp(b.nextReview)}),i.jsxs("div",{className:"li-actions",children:[i.jsx("button",{className:"preview-card-btn",onClick:()=>j(b),title:"Vista previa",children:i.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:[i.jsx("path",{d:"M6.5 1C3.5 1 1 4 1 5C1 6 3.5 9 6.5 9C9.5 9 12 6 12 5C12 4 9.5 1 6.5 1Z",stroke:"currentColor",strokeWidth:"1.1",fill:"none"}),i.jsx("circle",{cx:"6.5",cy:"5",r:"1.5",stroke:"currentColor",strokeWidth:"1.1",fill:"none"})]})}),i.jsx("button",{className:"edit-btn",onClick:()=>g(b),children:"✎"}),i.jsx("button",{className:"delete-btn",onClick:()=>t(b.id),children:"×"})]})]},b.id)})]})]})}function Qp({onAuth:e}){const[t,n]=S.useState(""),[r,l]=S.useState(""),[o,a]=S.useState(null),[s,u]=S.useState(!1);async function d(h){h.preventDefault(),a(null),u(!0);try{const g=await Yt("/auth/login",{method:"POST",body:JSON.stringify({username:t,password:r})});g.token&&Sp(g.token),e(g.username,g.language||"de")}catch(g){a(g.message)}finally{u(!1)}}return i.jsxs("div",{className:"auth-screen",children:[i.jsxs("style",{children:[ei,Ac]}),i.jsx("div",{className:"noise"}),i.jsxs("div",{className:"auth-card",children:[i.jsx("div",{className:"auth-logo",children:i.jsxs("span",{className:"logo-text",children:["Sprachen",i.jsx("span",{children:"Karten"})]})}),i.jsx("p",{className:"auth-tagline",children:"Tarjetas de idiomas"}),i.jsxs("form",{className:"auth-form",onSubmit:d,children:[i.jsx("input",{className:"auth-input",type:"text",placeholder:"Usuario",value:t,autoComplete:"username",onChange:h=>n(h.target.value),required:!0}),i.jsx("input",{className:"auth-input",type:"password",placeholder:"Contraseña",value:r,autoComplete:"current-password",onChange:h=>l(h.target.value),required:!0}),o&&i.jsx("p",{className:"auth-error",children:o}),i.jsx("button",{className:"auth-btn",type:"submit",disabled:s,children:s?"…":"Entrar"})]})]})]})}function Kp({language:e}){const t=(Re[e]||Re.de).name.toLowerCase(),n=Gi(e);return i.jsxs("div",{className:"help-view",children:[i.jsxs("p",{className:"help-intro",children:["Una app de tarjetas con ",i.jsx("strong",{children:"repetición espaciada"})," para aprender ",t," desde el español. En vez de repasar todo cada día, te muestra cada palabra justo cuando estás a punto de olvidarla."]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"Cómo te ayuda a aprender"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Repetición espaciada."})," Cada palabra reaparece en intervalos crecientes (1 día → 6 días → semanas → meses). Repasar justo antes de olvidar fija la memoria a largo plazo con el mínimo esfuerzo."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Recuerdo activo."})," Te esfuerzas en recordar antes de ver la respuesta. Ese esfuerzo es lo que construye memoria — releer no."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Calificación honesta."})," Al responder dices qué tan bien la recordaste y eso ajusta cuándo vuelve: si fallas regresa pronto; si la dominas, se espacia."]})]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"El ciclo diario"}),i.jsxs("p",{children:["En ",i.jsx("strong",{children:"Estado"})," ves cuántas tarjetas tocan hoy y cómo se reparten en el tiempo (Nuevas, Hoy, Mañana, 3–7 días…). Repasa lo que toca cada día: la racha 🔥 premia la constancia, y poco y a diario rinde más que sesiones largas y salteadas."]})]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"Tipos de tarjeta"}),i.jsx("p",{children:"Cada tipo ataca la palabra desde un ángulo distinto. Variar refuerza el recuerdo:"}),i.jsx("ul",{className:"help-types",children:n.map(r=>i.jsxs("li",{children:[i.jsx("span",{className:"help-type-name",children:r.name}),i.jsx("span",{className:"help-type-tip",children:r.tip})]},r.id))})]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"Sácale provecho"}),i.jsxs("ul",{className:"help-tips",children:[i.jsxs("li",{children:["Estudia un poco ",i.jsx("strong",{children:"cada día"}),": 10 minutos diarios cunden más que dos horas el domingo."]}),i.jsx("li",{children:"Califica con honestidad — engañarte solo retrasa lo que de verdad no sabes."}),i.jsxs("li",{children:["Añade ",i.jsx("strong",{children:"ejemplos e imágenes"}),": el contexto y lo visual anclan mejor que una palabra suelta."]}),i.jsx("li",{children:"Usa el audio 🔊 para fijar la pronunciación desde el principio."}),i.jsxs("li",{children:["¿Muchas palabras de golpe? En ",i.jsx("strong",{children:"+ Agregar"})," puedes pegar una lista en lote."]}),i.jsxs("li",{children:["En ",i.jsx("strong",{children:"Estado"}),", revisa ",i.jsx("strong",{children:"Cartas difíciles"}),": las que olvidas una y otra vez. Genera una pista mnemónica con IA o conviértelas en tarjeta con imagen para romper el bloqueo."]})]})]})]})}function Yp(){const[e,t]=S.useState(null),[n,r]=S.useState("de"),[l,o]=S.useState([]),[a,s]=S.useState(null),[u,d]=S.useState(!1),[h,g]=S.useState("study"),[m,v]=S.useState(!1);S.useEffect(()=>{yp(n)},[n]),S.useEffect(()=>{if(!Rc()){t(!1);return}(async()=>{try{const E=await Yt("/auth/me"),O=await ps(),I=await hs().catch(()=>null);t(E.username),r(E.language||"de"),o(O),s(I),d(!0)}catch{fs(),t(!1)}})()},[]),S.useEffect(()=>{if(!e||!u)return;const E=setTimeout(()=>{ms(l).catch(()=>{})},800);return()=>clearTimeout(E)},[l,e,u]),S.useEffect(()=>{if(!e||!u||!a)return;const E=setTimeout(()=>{gs(a).catch(()=>{})},800);return()=>clearTimeout(E)},[a,e,u]);const x=S.useRef(l);S.useEffect(()=>{x.current=l},[l]);const j=S.useRef(e);S.useEffect(()=>{j.current=e},[e]);const F=S.useRef(u);S.useEffect(()=>{F.current=u},[u]);const p=S.useRef(a);S.useEffect(()=>{p.current=a},[a]),S.useEffect(()=>{const E=()=>{if(!j.current||!F.current)return;const O=x.current,I=O.length===0?"?allowEmpty=true":"";fetch(`${jn}/cards${I}`,{method:"PUT",headers:{"Content-Type":"application/json",...fr()},body:JSON.stringify(O),keepalive:!0}),p.current&&fetch(`${jn}/stats`,{method:"PUT",headers:{"Content-Type":"application/json",...fr()},body:JSON.stringify(p.current),keepalive:!0})};return window.addEventListener("beforeunload",E),()=>window.removeEventListener("beforeunload",E)},[]);async function c(){u&&(await ms(l).catch(()=>{}),a&&await gs(a).catch(()=>{})),fs(),d(!1),t(!1),o([]),s(null)}async function f(E,O){d(!1),t(E),r(O||"de");try{const I=await ps(),ae=await hs().catch(()=>null);o(I),s(ae),d(!0)}catch{o([])}}const y=S.useCallback(E=>{const O={id:Date.now().toString(),cardType:E.cardType||"type1",german:E.german,translation:E.translation,note:E.note||"",example:E.example||"",exampleTranslation:E.exampleTranslation||"",imageUrl:E.imageUrl||null,audioUrl:E.audioUrl||null,repetitions:0,easiness:2.5,interval:0,nextReview:Date.now(),lastGrade:null,lapses:0};o(I=>[...I,O])},[]),C=S.useCallback((E,O)=>{o(I=>I.map(ae=>ae.id===E?{...ae,...O}:ae)),s(I=>Np(I))},[]),z=S.useCallback(E=>{o(O=>O.filter(I=>I.id!==E))},[]),N=S.useCallback(()=>{o([])},[]),k=S.useCallback(E=>{o(O=>O.map(I=>I.id===E.id?E:I))},[]),b=S.useCallback((E,O=!1)=>{const I=Date.now(),ae=E.map((J,We)=>({id:(I+We).toString(),german:J.german.trim(),translation:J.translation.trim(),note:(J.note||"").trim(),cardType:J.cardType||"type1",imageUrl:J.imageUrl||null,audioUrl:J.audioUrl||null,example:J.example||"",exampleTranslation:J.exampleTranslation||"",repetitions:0,easiness:2.5,interval:0,nextReview:I,lastGrade:null,lapses:0}));o(J=>O?ae:[...J,...ae])},[]);if(e===null)return i.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#111111",color:"#888",fontFamily:"'DM Mono', monospace"},children:[i.jsx("style",{children:ei}),"Cargando…"]});if(e===!1)return i.jsx(Qp,{onAuth:f});const _=[{id:"study",label:"Repasar"},{id:"add",label:"+ Agregar"},{id:"list",label:"Lista"},{id:"stats",label:"Estado"},{id:"help",label:"Ayuda"}];return i.jsxs(i.Fragment,{children:[i.jsxs("style",{children:[ei,Ac]}),i.jsx("div",{className:"noise"}),i.jsxs("div",{className:"app",children:[i.jsxs("header",{className:"header",children:[i.jsxs("div",{className:"logo",children:[n==="fr"?i.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"9.33",height:"19",x:"0",fill:"#002395"}),i.jsx("rect",{width:"9.34",height:"19",x:"9.33",fill:"#fff"}),i.jsx("rect",{width:"9.33",height:"19",x:"18.67",fill:"#ED2939"})]}):i.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"28",height:"6.33",y:"0",fill:"#000"}),i.jsx("rect",{width:"28",height:"6.34",y:"6.33",fill:"#D00"}),i.jsx("rect",{width:"28",height:"6.33",y:"12.67",fill:"#FFCE00"})]}),i.jsx("div",{className:"logo-text",children:n==="fr"?i.jsxs(i.Fragment,{children:["Français",i.jsx("span",{children:"Cartes"})]}):i.jsxs(i.Fragment,{children:["Deutsch",i.jsx("span",{children:"Karten"})]})})]}),i.jsxs("nav",{className:"nav",children:[_.map(E=>i.jsx("button",{className:`nav-btn ${h===E.id?"active":""}`,onClick:()=>g(E.id),children:E.label},E.id)),i.jsxs("button",{className:"nav-btn",onClick:c,title:`Sesión: ${e}`,style:{marginLeft:"auto",opacity:.6},children:["↩ ",e]})]}),i.jsx("button",{className:"hamburger-btn",onClick:()=>v(E=>!E),"aria-label":"Menú","aria-expanded":m,children:m?"✕":"☰"}),m&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"menu-backdrop",onClick:()=>v(!1)}),i.jsxs("div",{className:"menu-panel",children:[_.map(E=>i.jsx("button",{className:`menu-item ${h===E.id?"active":""}`,onClick:()=>{g(E.id),v(!1)},children:E.label},E.id)),i.jsxs("button",{className:"menu-item menu-logout",onClick:()=>{v(!1),c()},children:["↩ ",e]})]})]})]}),h==="study"&&i.jsx(Ip,{cards:l,onGrade:C,onUpdateCards:o,language:n,stats:a}),h==="add"&&i.jsx(Up,{onAdd:E=>{y(E),g("study")},onBulkAdd:(E,O)=>{b(E,O),g("list")},language:n}),h==="list"&&i.jsx(Hp,{cards:l,onDelete:z,onDeleteAll:N,onEdit:k,language:n}),h==="stats"&&i.jsx($p,{cards:l,stats:a,onEdit:k,language:n}),h==="help"&&i.jsx(Kp,{language:n})]})]})}Lc(document.getElementById("root")).render(i.jsx(S.StrictMode,{children:i.jsx(Yp,{})}));
