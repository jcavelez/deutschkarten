(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function $c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xs={exports:{}},yl={},ws={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),Bc=Symbol.for("react.portal"),Vc=Symbol.for("react.fragment"),Wc=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),Qc=Symbol.for("react.provider"),Kc=Symbol.for("react.context"),Yc=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Xc=Symbol.for("react.memo"),Zc=Symbol.for("react.lazy"),ea=Symbol.iterator;function Jc(e){return e===null||typeof e!="object"?null:(e=ea&&e[ea]||e["@@iterator"],typeof e=="function"?e:null)}var ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ss=Object.assign,js={};function jn(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||ks}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ns(){}Ns.prototype=jn.prototype;function ti(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||ks}var ni=ti.prototype=new Ns;ni.constructor=ti;Ss(ni,jn.prototype);ni.isPureReactComponent=!0;var ta=Array.isArray,Cs=Object.prototype.hasOwnProperty,ri={current:null},Es={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Cs.call(t,r)&&!Es.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:pr,type:e,key:o,ref:i,props:l,_owner:ri.current}}function qc(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function li(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function ed(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var na=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ed(""+e.key):t.toString(36)}function Fr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case pr:case Bc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Dl(i,0):r,ta(l)?(n="",e!=null&&(n=e.replace(na,"$&/")+"/"),Fr(l,t,n,"",function(c){return c})):l!=null&&(li(l)&&(l=qc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(na,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ta(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Dl(o,s);i+=Fr(o,t,n,u,l)}else if(u=Jc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Dl(o,s++),i+=Fr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function yr(e,t,n){if(e==null)return e;var r=[],l=0;return Fr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function td(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Rr={transition:null},nd={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Rr,ReactCurrentOwner:ri};function zs(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:yr,forEach:function(e,t,n){yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yr(e,function(){t++}),t},toArray:function(e){return yr(e,function(t){return t})||[]},only:function(e){if(!li(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=jn;F.Fragment=Vc;F.Profiler=Hc;F.PureComponent=ti;F.StrictMode=Wc;F.Suspense=Gc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nd;F.act=zs;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ss({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=ri.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Cs.call(t,u)&&!Es.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:pr,type:e.type,key:l,ref:o,props:r,_owner:i}};F.createContext=function(e){return e={$$typeof:Kc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qc,_context:e},e.Consumer=e};F.createElement=bs;F.createFactory=function(e){var t=bs.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Yc,render:e}};F.isValidElement=li;F.lazy=function(e){return{$$typeof:Zc,_payload:{_status:-1,_result:e},_init:td}};F.memo=function(e,t){return{$$typeof:Xc,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Rr.transition;Rr.transition={};try{e()}finally{Rr.transition=t}};F.unstable_act=zs;F.useCallback=function(e,t){return he.current.useCallback(e,t)};F.useContext=function(e){return he.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return he.current.useDeferredValue(e)};F.useEffect=function(e,t){return he.current.useEffect(e,t)};F.useId=function(){return he.current.useId()};F.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return he.current.useMemo(e,t)};F.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};F.useRef=function(e){return he.current.useRef(e)};F.useState=function(e){return he.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return he.current.useTransition()};F.version="18.3.1";ws.exports=F;var C=ws.exports;const Te=$c(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=C,ld=Symbol.for("react.element"),od=Symbol.for("react.fragment"),id=Object.prototype.hasOwnProperty,ad=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sd={key:!0,ref:!0,__self:!0,__source:!0};function _s(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)id.call(t,r)&&!sd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:ld,type:e,key:o,ref:i,props:l,_owner:ad.current}}yl.Fragment=od;yl.jsx=_s;yl.jsxs=_s;xs.exports=yl;var a=xs.exports,Ts={exports:{}},Ee={},Ps={exports:{}},Ls={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var D=T.length;T.push(M);e:for(;0<D;){var B=D-1>>>1,H=T[B];if(0<l(H,M))T[B]=M,T[D]=H,D=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var M=T[0],D=T.pop();if(D!==M){T[0]=D;e:for(var B=0,H=T.length,ft=H>>>1;B<ft;){var qe=2*(B+1)-1,En=T[qe],We=qe+1,et=T[We];if(0>l(En,D))We<H&&0>l(et,En)?(T[B]=et,T[We]=D,B=We):(T[B]=En,T[qe]=D,B=qe);else if(We<H&&0>l(et,D))T[B]=et,T[We]=D,B=We;else break e}}return M}function l(T,M){var D=T.sortIndex-M.sortIndex;return D!==0?D:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],c=[],g=1,h=null,m=3,v=!1,y=!1,S=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=T)r(c),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(c)}}function x(T){if(S=!1,f(T),!y)if(n(u)!==null)y=!0,Ve(N);else{var M=n(c);M!==null&&Mt(x,M.startTime-T)}}function N(T,M){y=!1,S&&(S=!1,p(k),k=-1),v=!0;var D=m;try{for(f(M),h=n(u);h!==null&&(!(h.expirationTime>M)||T&&!b());){var B=h.callback;if(typeof B=="function"){h.callback=null,m=h.priorityLevel;var H=B(h.expirationTime<=M);M=e.unstable_now(),typeof H=="function"?h.callback=H:h===n(u)&&r(u),f(M)}else r(u);h=n(u)}if(h!==null)var ft=!0;else{var qe=n(c);qe!==null&&Mt(x,qe.startTime-M),ft=!1}return ft}finally{h=null,m=D,v=!1}}var z=!1,j=null,k=-1,E=5,_=-1;function b(){return!(e.unstable_now()-_<E)}function O(){if(j!==null){var T=e.unstable_now();_=T;var M=!0;try{M=j(!0,T)}finally{M?I():(z=!1,j=null)}}else z=!1}var I;if(typeof d=="function")I=function(){d(O)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,J=ae.port2;ae.port1.onmessage=O,I=function(){J.postMessage(null)}}else I=function(){R(O,0)};function Ve(T){j=T,z||(z=!0,I())}function Mt(T,M){k=R(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Ve(N))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var D=m;m=M;try{return T()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=m;m=T;try{return M()}finally{m=D}},e.unstable_scheduleCallback=function(T,M,D){var B=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?B+D:B):D=B,T){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=D+H,T={id:g++,callback:M,priorityLevel:T,startTime:D,expirationTime:H,sortIndex:-1},D>B?(T.sortIndex=D,t(c,T),n(u)===null&&T===n(c)&&(S?(p(k),k=-1):S=!0,Mt(x,D-B))):(T.sortIndex=H,t(u,T),y||v||(y=!0,Ve(N))),T},e.unstable_shouldYield=b,e.unstable_wrapCallback=function(T){var M=m;return function(){var D=m;m=M;try{return T.apply(this,arguments)}finally{m=D}}}})(Ls);Ps.exports=Ls;var ud=Ps.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=C,Ce=ud;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ms=new Set,Gn={};function Qt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)Ms.add(t[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=Object.prototype.hasOwnProperty,dd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra={},la={};function fd(e){return io.call(la,e)?!0:io.call(ra,e)?!1:dd.test(e)?la[e]=!0:(ra[e]=!0,!1)}function pd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function md(e,t,n,r){if(t===null||typeof t>"u"||pd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var oi=/[\-:]([a-z])/g;function ii(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oi,ii);ie[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oi,ii);ie[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oi,ii);ie[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ai(e,t,n,r){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(md(t,n,l,r)&&(n=null),r||l===null?fd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),si=Symbol.for("react.strict_mode"),ao=Symbol.for("react.profiler"),Ds=Symbol.for("react.provider"),Fs=Symbol.for("react.context"),ui=Symbol.for("react.forward_ref"),so=Symbol.for("react.suspense"),uo=Symbol.for("react.suspense_list"),ci=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Rs=Symbol.for("react.offscreen"),oa=Symbol.iterator;function zn(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Fl;function Rn(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Rl=!1;function Ol(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function hd(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Xt:return"Portal";case ao:return"Profiler";case si:return"StrictMode";case so:return"Suspense";case uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fs:return(e.displayName||"Context")+".Consumer";case Ds:return(e._context.displayName||"Context")+".Provider";case ui:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ci:return t=e.displayName||null,t!==null?t:co(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return co(e(t))}catch{}}return null}function gd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return co(t);case 8:return t===si?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Os(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vd(e){var t=Os(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=vd(e))}function Is(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Os(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ia(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Us(e,t){t=t.checked,t!=null&&ai(e,"checked",t,!1)}function po(e,t){Us(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&mo(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function aa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mo(e,t,n){(t!=="number"||Kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(On(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function As(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ua(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $s(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function go(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$s(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,Bs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yd=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){yd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function Vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function Ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var xd=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vo(e,t){if(t){if(xd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function yo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xo=null;function di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wo=null,cn=null,dn=null;function ca(e){if(e=gr(e)){if(typeof wo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=jl(t),wo(e.stateNode,e.type,t))}}function Hs(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Qs(){if(cn){var e=cn,t=dn;if(dn=cn=null,ca(e),t)for(e=0;e<t.length;e++)ca(t[e])}}function Ks(e,t){return e(t)}function Ys(){}var Il=!1;function Gs(e,t,n){if(Il)return e(t,n);Il=!0;try{return Ks(e,t,n)}finally{Il=!1,(cn!==null||dn!==null)&&(Ys(),Qs())}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var ko=!1;if(it)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){ko=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{ko=!1}function wd(e,t,n,r,l,o,i,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var $n=!1,Yr=null,Gr=!1,So=null,kd={onError:function(e){$n=!0,Yr=e}};function Sd(e,t,n,r,l,o,i,s,u){$n=!1,Yr=null,wd.apply(kd,arguments)}function jd(e,t,n,r,l,o,i,s,u){if(Sd.apply(this,arguments),$n){if($n){var c=Yr;$n=!1,Yr=null}else throw Error(w(198));Gr||(Gr=!0,So=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function da(e){if(Kt(e)!==e)throw Error(w(188))}function Nd(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return da(l),e;if(o===r)return da(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Zs(e){return e=Nd(e),e!==null?Js(e):null}function Js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Js(e);if(t!==null)return t;e=e.sibling}return null}var qs=Ce.unstable_scheduleCallback,fa=Ce.unstable_cancelCallback,Cd=Ce.unstable_shouldYield,Ed=Ce.unstable_requestPaint,Z=Ce.unstable_now,bd=Ce.unstable_getCurrentPriorityLevel,fi=Ce.unstable_ImmediatePriority,eu=Ce.unstable_UserBlockingPriority,Xr=Ce.unstable_NormalPriority,zd=Ce.unstable_LowPriority,tu=Ce.unstable_IdlePriority,xl=null,Ge=null;function _d(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Ld,Td=Math.log,Pd=Math.LN2;function Ld(e){return e>>>=0,e===0?32:31-(Td(e)/Pd|0)|0}var Sr=64,jr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=In(s):(o&=i,o!==0&&(r=In(o)))}else i=n&~l,i!==0?r=In(i):o!==0&&(r=In(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),l=1<<n,r|=e[n],t&=~l;return r}function Md(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ae(o),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=Md(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function Fd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ae(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function pi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var A=0;function ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lu,mi,ou,iu,au,No=!1,Nr=[],wt=null,kt=null,St=null,Jn=new Map,qn=new Map,gt=[],Rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pa(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function Tn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=gr(t),t!==null&&mi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Od(e,t,n,r,l){switch(t){case"focusin":return wt=Tn(wt,e,t,n,r,l),!0;case"dragenter":return kt=Tn(kt,e,t,n,r,l),!0;case"mouseover":return St=Tn(St,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Jn.set(o,Tn(Jn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,qn.set(o,Tn(qn.get(o)||null,e,t,n,r,l)),!0}return!1}function su(e){var t=Rt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Xs(n),t!==null){e.blockedOn=t,au(e.priority,function(){ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xo=r,n.target.dispatchEvent(r),xo=null}else return t=gr(n),t!==null&&mi(t),e.blockedOn=n,!1;t.shift()}return!0}function ma(e,t,n){Or(e)&&n.delete(t)}function Id(){No=!1,wt!==null&&Or(wt)&&(wt=null),kt!==null&&Or(kt)&&(kt=null),St!==null&&Or(St)&&(St=null),Jn.forEach(ma),qn.forEach(ma)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,No||(No=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Id)))}function er(e){function t(l){return Pn(l,e)}if(0<Nr.length){Pn(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&Pn(wt,e),kt!==null&&Pn(kt,e),St!==null&&Pn(St,e),Jn.forEach(t),qn.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)su(n),n.blockedOn===null&&gt.shift()}var fn=dt.ReactCurrentBatchConfig,Jr=!0;function Ud(e,t,n,r){var l=A,o=fn.transition;fn.transition=null;try{A=1,hi(e,t,n,r)}finally{A=l,fn.transition=o}}function Ad(e,t,n,r){var l=A,o=fn.transition;fn.transition=null;try{A=4,hi(e,t,n,r)}finally{A=l,fn.transition=o}}function hi(e,t,n,r){if(Jr){var l=Co(e,t,n,r);if(l===null)Gl(e,t,r,qr,n),pa(e,r);else if(Od(l,e,t,n,r))r.stopPropagation();else if(pa(e,r),t&4&&-1<Rd.indexOf(e)){for(;l!==null;){var o=gr(l);if(o!==null&&lu(o),o=Co(e,t,n,r),o===null&&Gl(e,t,r,qr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Gl(e,t,r,null,n)}}var qr=null;function Co(e,t,n,r){if(qr=null,e=di(r),e=Rt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bd()){case fi:return 1;case eu:return 4;case Xr:case zd:return 16;case tu:return 536870912;default:return 16}default:return 16}}var yt=null,gi=null,Ir=null;function cu(){if(Ir)return Ir;var e,t=gi,n=t.length,r,l="value"in yt?yt.value:yt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Ir=l.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function ha(){return!1}function be(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Cr:ha,this.isPropagationStopped=ha,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=be(Nn),hr=G({},Nn,{view:0,detail:0}),$d=be(hr),Al,$l,Ln,wl=G({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Al=e.screenX-Ln.screenX,$l=e.screenY-Ln.screenY):$l=Al=0,Ln=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),ga=be(wl),Bd=G({},wl,{dataTransfer:0}),Vd=be(Bd),Wd=G({},hr,{relatedTarget:0}),Bl=be(Wd),Hd=G({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),Qd=be(Hd),Kd=G({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yd=be(Kd),Gd=G({},Nn,{data:0}),va=be(Gd),Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jd[e])?!!t[e]:!1}function yi(){return qd}var ef=G({},hr,{key:function(e){if(e.key){var t=Xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yi,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tf=be(ef),nf=G({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=be(nf),rf=G({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yi}),lf=be(rf),of=G({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),af=be(of),sf=G({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uf=be(sf),cf=[9,13,27,32],xi=it&&"CompositionEvent"in window,Bn=null;it&&"documentMode"in document&&(Bn=document.documentMode);var df=it&&"TextEvent"in window&&!Bn,du=it&&(!xi||Bn&&8<Bn&&11>=Bn),xa=" ",wa=!1;function fu(e,t){switch(e){case"keyup":return cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function ff(e,t){switch(e){case"compositionend":return pu(t);case"keypress":return t.which!==32?null:(wa=!0,xa);case"textInput":return e=t.data,e===xa&&wa?null:e;default:return null}}function pf(e,t){if(Jt)return e==="compositionend"||!xi&&fu(e,t)?(e=cu(),Ir=gi=yt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return du&&t.locale!=="ko"?null:t.data;default:return null}}var mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mf[e.type]:t==="textarea"}function mu(e,t,n,r){Hs(r),t=el(t,"onChange"),0<t.length&&(n=new vi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,tr=null;function hf(e){Cu(e,0)}function kl(e){var t=tn(e);if(Is(t))return e}function gf(e,t){if(e==="change")return t}var hu=!1;if(it){var Vl;if(it){var Wl="oninput"in document;if(!Wl){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Wl=typeof Sa.oninput=="function"}Vl=Wl}else Vl=!1;hu=Vl&&(!document.documentMode||9<document.documentMode)}function ja(){Vn&&(Vn.detachEvent("onpropertychange",gu),tr=Vn=null)}function gu(e){if(e.propertyName==="value"&&kl(tr)){var t=[];mu(t,tr,e,di(e)),Gs(hf,t)}}function vf(e,t,n){e==="focusin"?(ja(),Vn=t,tr=n,Vn.attachEvent("onpropertychange",gu)):e==="focusout"&&ja()}function yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(tr)}function xf(e,t){if(e==="click")return kl(t)}function wf(e,t){if(e==="input"||e==="change")return kl(t)}function kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:kf;function nr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!io.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yu(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function wi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sf(e){var t=yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vu(n.ownerDocument.documentElement,n)){if(r!==null&&wi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ca(n,o);var i=Ca(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jf=it&&"documentMode"in document&&11>=document.documentMode,qt=null,Eo=null,Wn=null,bo=!1;function Ea(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bo||qt==null||qt!==Kr(r)||(r=qt,"selectionStart"in r&&wi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wn&&nr(Wn,r)||(Wn=r,r=el(Eo,"onSelect"),0<r.length&&(t=new vi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},Hl={},xu={};it&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function Sl(e){if(Hl[e])return Hl[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xu)return Hl[e]=t[n];return e}var wu=Sl("animationend"),ku=Sl("animationiteration"),Su=Sl("animationstart"),ju=Sl("transitionend"),Nu=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Nu.set(e,t),Qt(t,[e])}for(var Ql=0;Ql<ba.length;Ql++){var Kl=ba[Ql],Nf=Kl.toLowerCase(),Cf=Kl[0].toUpperCase()+Kl.slice(1);Tt(Nf,"on"+Cf)}Tt(wu,"onAnimationEnd");Tt(ku,"onAnimationIteration");Tt(Su,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(ju,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));function za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jd(r,t,void 0,e),e.currentTarget=null}function Cu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;za(l,s,c),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;za(l,s,c),o=u}}}if(Gr)throw e=So,Gr=!1,So=null,e}function V(e,t){var n=t[Lo];n===void 0&&(n=t[Lo]=new Set);var r=e+"__bubble";n.has(r)||(Eu(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Eu(n,e,r,t)}var br="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[br]){e[br]=!0,Ms.forEach(function(n){n!=="selectionchange"&&(Ef.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[br]||(t[br]=!0,Yl("selectionchange",!1,t))}}function Eu(e,t,n,r){switch(uu(t)){case 1:var l=Ud;break;case 4:l=Ad;break;default:l=hi}n=l.bind(null,t,n,e),l=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Gl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Rt(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Gs(function(){var c=o,g=di(n),h=[];e:{var m=Nu.get(e);if(m!==void 0){var v=vi,y=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":v=tf;break;case"focusin":y="focus",v=Bl;break;case"focusout":y="blur",v=Bl;break;case"beforeblur":case"afterblur":v=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=lf;break;case wu:case ku:case Su:v=Qd;break;case ju:v=af;break;case"scroll":v=$d;break;case"wheel":v=uf;break;case"copy":case"cut":case"paste":v=Yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ya}var S=(t&4)!==0,R=!S&&e==="scroll",p=S?m!==null?m+"Capture":null:m;S=[];for(var d=c,f;d!==null;){f=d;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Zn(d,p),x!=null&&S.push(lr(d,x,f)))),R)break;d=d.return}0<S.length&&(m=new v(m,y,null,n,g),h.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==xo&&(y=n.relatedTarget||n.fromElement)&&(Rt(y)||y[at]))break e;if((v||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?Rt(y):null,y!==null&&(R=Kt(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(S=ga,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=ya,x="onPointerLeave",p="onPointerEnter",d="pointer"),R=v==null?m:tn(v),f=y==null?m:tn(y),m=new S(x,d+"leave",v,n,g),m.target=R,m.relatedTarget=f,x=null,Rt(g)===c&&(S=new S(p,d+"enter",y,n,g),S.target=f,S.relatedTarget=R,x=S),R=x,v&&y)t:{for(S=v,p=y,d=0,f=S;f;f=Gt(f))d++;for(f=0,x=p;x;x=Gt(x))f++;for(;0<d-f;)S=Gt(S),d--;for(;0<f-d;)p=Gt(p),f--;for(;d--;){if(S===p||p!==null&&S===p.alternate)break t;S=Gt(S),p=Gt(p)}S=null}else S=null;v!==null&&_a(h,m,v,S,!1),y!==null&&R!==null&&_a(h,R,y,S,!0)}}e:{if(m=c?tn(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var N=gf;else if(ka(m))if(hu)N=wf;else{N=yf;var z=vf}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=xf);if(N&&(N=N(e,c))){mu(h,N,n,g);break e}z&&z(e,m,c),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&mo(m,"number",m.value)}switch(z=c?tn(c):window,e){case"focusin":(ka(z)||z.contentEditable==="true")&&(qt=z,Eo=c,Wn=null);break;case"focusout":Wn=Eo=qt=null;break;case"mousedown":bo=!0;break;case"contextmenu":case"mouseup":case"dragend":bo=!1,Ea(h,n,g);break;case"selectionchange":if(jf)break;case"keydown":case"keyup":Ea(h,n,g)}var j;if(xi)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Jt?fu(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(du&&n.locale!=="ko"&&(Jt||k!=="onCompositionStart"?k==="onCompositionEnd"&&Jt&&(j=cu()):(yt=g,gi="value"in yt?yt.value:yt.textContent,Jt=!0)),z=el(c,k),0<z.length&&(k=new va(k,e,null,n,g),h.push({event:k,listeners:z}),j?k.data=j:(j=pu(n),j!==null&&(k.data=j)))),(j=df?ff(e,n):pf(e,n))&&(c=el(c,"onBeforeInput"),0<c.length&&(g=new va("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:c}),g.data=j))}Cu(h,t)})}function lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function el(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Zn(e,n),o!=null&&r.unshift(lr(e,o,l)),o=Zn(e,t),o!=null&&r.push(lr(e,o,l))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _a(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Zn(n,o),u!=null&&i.unshift(lr(n,u,s))):l||(u=Zn(n,o),u!=null&&i.push(lr(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var bf=/\r\n?/g,zf=/\u0000|\uFFFD/g;function Ta(e){return(typeof e=="string"?e:""+e).replace(bf,`
`).replace(zf,"")}function zr(e,t,n){if(t=Ta(t),Ta(e)!==t&&n)throw Error(w(425))}function tl(){}var zo=null,_o=null;function To(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Po=typeof setTimeout=="function"?setTimeout:void 0,_f=typeof clearTimeout=="function"?clearTimeout:void 0,Pa=typeof Promise=="function"?Promise:void 0,Tf=typeof queueMicrotask=="function"?queueMicrotask:typeof Pa<"u"?function(e){return Pa.resolve(null).then(e).catch(Pf)}:Po;function Pf(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);er(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function La(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Cn,or="__reactProps$"+Cn,at="__reactContainer$"+Cn,Lo="__reactEvents$"+Cn,Lf="__reactListeners$"+Cn,Mf="__reactHandles$"+Cn;function Rt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=La(e);e!==null;){if(n=e[Ye])return n;e=La(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[Ye]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function jl(e){return e[or]||null}var Mo=[],nn=-1;function Pt(e){return{current:e}}function W(e){0>nn||(e.current=Mo[nn],Mo[nn]=null,nn--)}function $(e,t){nn++,Mo[nn]=e.current,e.current=t}var _t={},fe=Pt(_t),xe=Pt(!1),$t=_t;function gn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function nl(){W(xe),W(fe)}function Ma(e,t,n){if(fe.current!==_t)throw Error(w(168));$(fe,t),$(xe,n)}function bu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,gd(e)||"Unknown",l));return G({},n,r)}function rl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,$t=fe.current,$(fe,e),$(xe,xe.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=bu(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,W(xe),W(fe),$(fe,e)):W(xe),$(xe,n)}var nt=null,Nl=!1,Zl=!1;function zu(e){nt===null?nt=[e]:nt.push(e)}function Df(e){Nl=!0,zu(e)}function Lt(){if(!Zl&&nt!==null){Zl=!0;var e=0,t=A;try{var n=nt;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,Nl=!1}catch(l){throw nt!==null&&(nt=nt.slice(e+1)),qs(fi,Lt),l}finally{A=t,Zl=!1}}return null}var rn=[],ln=0,ll=null,ol=0,ze=[],_e=0,Bt=null,rt=1,lt="";function Dt(e,t){rn[ln++]=ol,rn[ln++]=ll,ll=e,ol=t}function _u(e,t,n){ze[_e++]=rt,ze[_e++]=lt,ze[_e++]=Bt,Bt=e;var r=rt;e=lt;var l=32-Ae(r)-1;r&=~(1<<l),n+=1;var o=32-Ae(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,rt=1<<32-Ae(t)+l|n<<l|r,lt=o+e}else rt=1<<o|n<<l|r,lt=e}function ki(e){e.return!==null&&(Dt(e,1),_u(e,1,0))}function Si(e){for(;e===ll;)ll=rn[--ln],rn[ln]=null,ol=rn[--ln],rn[ln]=null;for(;e===Bt;)Bt=ze[--_e],ze[_e]=null,lt=ze[--_e],ze[_e]=null,rt=ze[--_e],ze[_e]=null}var Ne=null,je=null,Q=!1,Ue=null;function Tu(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,je=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:rt,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,je=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fo(e){if(Q){var t=je;if(t){var n=t;if(!Fa(e,t)){if(Do(e))throw Error(w(418));t=jt(n.nextSibling);var r=Ne;t&&Fa(e,t)?Tu(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ne=e)}}else{if(Do(e))throw Error(w(418));e.flags=e.flags&-4097|2,Q=!1,Ne=e}}}function Ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function _r(e){if(e!==Ne)return!1;if(!Q)return Ra(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!To(e.type,e.memoizedProps)),t&&(t=je)){if(Do(e))throw Pu(),Error(w(418));for(;t;)Tu(e,t),t=jt(t.nextSibling)}if(Ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Ne?jt(e.stateNode.nextSibling):null;return!0}function Pu(){for(var e=je;e;)e=jt(e.nextSibling)}function vn(){je=Ne=null,Q=!1}function ji(e){Ue===null?Ue=[e]:Ue.push(e)}var Ff=dt.ReactCurrentBatchConfig;function Mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oa(e){var t=e._init;return t(e._payload)}function Lu(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function l(p,d){return p=bt(p,d),p.index=0,p.sibling=null,p}function o(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,f,x){return d===null||d.tag!==6?(d=lo(f,p.mode,x),d.return=p,d):(d=l(d,f),d.return=p,d)}function u(p,d,f,x){var N=f.type;return N===Zt?g(p,d,f.props.children,x,f.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===mt&&Oa(N)===d.type)?(x=l(d,f.props),x.ref=Mn(p,d,f),x.return=p,x):(x=Qr(f.type,f.key,f.props,null,p.mode,x),x.ref=Mn(p,d,f),x.return=p,x)}function c(p,d,f,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=oo(f,p.mode,x),d.return=p,d):(d=l(d,f.children||[]),d.return=p,d)}function g(p,d,f,x,N){return d===null||d.tag!==7?(d=At(f,p.mode,x,N),d.return=p,d):(d=l(d,f),d.return=p,d)}function h(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=lo(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xr:return f=Qr(d.type,d.key,d.props,null,p.mode,f),f.ref=Mn(p,null,d),f.return=p,f;case Xt:return d=oo(d,p.mode,f),d.return=p,d;case mt:var x=d._init;return h(p,x(d._payload),f)}if(On(d)||zn(d))return d=At(d,p.mode,f,null),d.return=p,d;Tr(p,d)}return null}function m(p,d,f,x){var N=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:s(p,d,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xr:return f.key===N?u(p,d,f,x):null;case Xt:return f.key===N?c(p,d,f,x):null;case mt:return N=f._init,m(p,d,N(f._payload),x)}if(On(f)||zn(f))return N!==null?null:g(p,d,f,x,null);Tr(p,f)}return null}function v(p,d,f,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,s(d,p,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case xr:return p=p.get(x.key===null?f:x.key)||null,u(d,p,x,N);case Xt:return p=p.get(x.key===null?f:x.key)||null,c(d,p,x,N);case mt:var z=x._init;return v(p,d,f,z(x._payload),N)}if(On(x)||zn(x))return p=p.get(f)||null,g(d,p,x,N,null);Tr(d,x)}return null}function y(p,d,f,x){for(var N=null,z=null,j=d,k=d=0,E=null;j!==null&&k<f.length;k++){j.index>k?(E=j,j=null):E=j.sibling;var _=m(p,j,f[k],x);if(_===null){j===null&&(j=E);break}e&&j&&_.alternate===null&&t(p,j),d=o(_,d,k),z===null?N=_:z.sibling=_,z=_,j=E}if(k===f.length)return n(p,j),Q&&Dt(p,k),N;if(j===null){for(;k<f.length;k++)j=h(p,f[k],x),j!==null&&(d=o(j,d,k),z===null?N=j:z.sibling=j,z=j);return Q&&Dt(p,k),N}for(j=r(p,j);k<f.length;k++)E=v(j,p,k,f[k],x),E!==null&&(e&&E.alternate!==null&&j.delete(E.key===null?k:E.key),d=o(E,d,k),z===null?N=E:z.sibling=E,z=E);return e&&j.forEach(function(b){return t(p,b)}),Q&&Dt(p,k),N}function S(p,d,f,x){var N=zn(f);if(typeof N!="function")throw Error(w(150));if(f=N.call(f),f==null)throw Error(w(151));for(var z=N=null,j=d,k=d=0,E=null,_=f.next();j!==null&&!_.done;k++,_=f.next()){j.index>k?(E=j,j=null):E=j.sibling;var b=m(p,j,_.value,x);if(b===null){j===null&&(j=E);break}e&&j&&b.alternate===null&&t(p,j),d=o(b,d,k),z===null?N=b:z.sibling=b,z=b,j=E}if(_.done)return n(p,j),Q&&Dt(p,k),N;if(j===null){for(;!_.done;k++,_=f.next())_=h(p,_.value,x),_!==null&&(d=o(_,d,k),z===null?N=_:z.sibling=_,z=_);return Q&&Dt(p,k),N}for(j=r(p,j);!_.done;k++,_=f.next())_=v(j,p,k,_.value,x),_!==null&&(e&&_.alternate!==null&&j.delete(_.key===null?k:_.key),d=o(_,d,k),z===null?N=_:z.sibling=_,z=_);return e&&j.forEach(function(O){return t(p,O)}),Q&&Dt(p,k),N}function R(p,d,f,x){if(typeof f=="object"&&f!==null&&f.type===Zt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case xr:e:{for(var N=f.key,z=d;z!==null;){if(z.key===N){if(N=f.type,N===Zt){if(z.tag===7){n(p,z.sibling),d=l(z,f.props.children),d.return=p,p=d;break e}}else if(z.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===mt&&Oa(N)===z.type){n(p,z.sibling),d=l(z,f.props),d.ref=Mn(p,z,f),d.return=p,p=d;break e}n(p,z);break}else t(p,z);z=z.sibling}f.type===Zt?(d=At(f.props.children,p.mode,x,f.key),d.return=p,p=d):(x=Qr(f.type,f.key,f.props,null,p.mode,x),x.ref=Mn(p,d,f),x.return=p,p=x)}return i(p);case Xt:e:{for(z=f.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=l(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=oo(f,p.mode,x),d.return=p,p=d}return i(p);case mt:return z=f._init,R(p,d,z(f._payload),x)}if(On(f))return y(p,d,f,x);if(zn(f))return S(p,d,f,x);Tr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=l(d,f),d.return=p,p=d):(n(p,d),d=lo(f,p.mode,x),d.return=p,p=d),i(p)):n(p,d)}return R}var yn=Lu(!0),Mu=Lu(!1),il=Pt(null),al=null,on=null,Ni=null;function Ci(){Ni=on=al=null}function Ei(e){var t=il.current;W(il),e._currentValue=t}function Ro(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){al=e,Ni=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Ni!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(al===null)throw Error(w(308));on=e,al.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var Ot=null;function bi(e){Ot===null?Ot=[e]:Ot.push(e)}function Du(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,bi(t)):(n.next=l.next,l.next=n),t.interleaved=n,st(e,r)}function st(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ht=!1;function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,st(e,n)}return l=r.interleaved,l===null?(t.next=t,bi(r)):(t.next=l.next,l.next=t),r.interleaved=t,st(e,n)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pi(e,n)}}function Ia(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sl(e,t,n,r){var l=e.updateQueue;ht=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,i===null?o=c:i.next=c,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;i=0,g=c=u=null,s=o;do{var m=s.lane,v=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,S=s;switch(m=t,v=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){h=y.call(v,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,m=typeof y=="function"?y.call(v,h,m):y,m==null)break e;h=G({},h,m);break e;case 2:ht=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=v,u=h):g=g.next=v,i|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Wt|=i,e.lanes=i,e.memoizedState=h}}function Ua(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var vr={},Xe=Pt(vr),ir=Pt(vr),ar=Pt(vr);function It(e){if(e===vr)throw Error(w(174));return e}function _i(e,t){switch($(ar,t),$(ir,e),$(Xe,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:go(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=go(t,e)}W(Xe),$(Xe,t)}function xn(){W(Xe),W(ir),W(ar)}function Ru(e){It(ar.current);var t=It(Xe.current),n=go(t,e.type);t!==n&&($(ir,e),$(Xe,n))}function Ti(e){ir.current===e&&(W(Xe),W(ir))}var K=Pt(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Pi(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var $r=dt.ReactCurrentDispatcher,ql=dt.ReactCurrentBatchConfig,Vt=0,Y=null,ee=null,ne=null,cl=!1,Hn=!1,sr=0,Rf=0;function ue(){throw Error(w(321))}function Li(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Mi(e,t,n,r,l,o){if(Vt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$r.current=e===null||e.memoizedState===null?Af:$f,e=n(r,l),Hn){o=0;do{if(Hn=!1,sr=0,25<=o)throw Error(w(301));o+=1,ne=ee=null,t.updateQueue=null,$r.current=Bf,e=n(r,l)}while(Hn)}if($r.current=dl,t=ee!==null&&ee.next!==null,Vt=0,ne=ee=Y=null,cl=!1,t)throw Error(w(300));return e}function Di(){var e=sr!==0;return sr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Y.memoizedState=ne=e:ne=ne.next=e,ne}function Fe(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?Y.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(w(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?Y.memoizedState=ne=e:ne=ne.next=e}return ne}function ur(e,t){return typeof t=="function"?t(e):t}function eo(e){var t=Fe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,c=o;do{var g=c.lane;if((Vt&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,i=r):u=u.next=h,Y.lanes|=g,Wt|=g}c=c.next}while(c!==null&&c!==o);u===null?i=r:u.next=s,Be(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Y.lanes|=o,Wt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function to(e){var t=Fe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Be(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ou(){}function Iu(e,t){var n=Y,r=Fe(),l=t(),o=!Be(r.memoizedState,l);if(o&&(r.memoizedState=l,ye=!0),r=r.queue,Fi($u.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,cr(9,Au.bind(null,n,r,l,t),void 0,null),re===null)throw Error(w(349));Vt&30||Uu(n,t,l)}return l}function Uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Au(e,t,n,r){t.value=n,t.getSnapshot=r,Bu(t)&&Vu(e)}function $u(e,t,n){return n(function(){Bu(t)&&Vu(e)})}function Bu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Vu(e){var t=st(e,1);t!==null&&$e(t,e,1,-1)}function Aa(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,Y,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wu(){return Fe().memoizedState}function Br(e,t,n,r){var l=Ke();Y.flags|=e,l.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function Cl(e,t,n,r){var l=Fe();r=r===void 0?null:r;var o=void 0;if(ee!==null){var i=ee.memoizedState;if(o=i.destroy,r!==null&&Li(r,i.deps)){l.memoizedState=cr(t,n,o,r);return}}Y.flags|=e,l.memoizedState=cr(1|t,n,o,r)}function $a(e,t){return Br(8390656,8,e,t)}function Fi(e,t){return Cl(2048,8,e,t)}function Hu(e,t){return Cl(4,2,e,t)}function Qu(e,t){return Cl(4,4,e,t)}function Ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yu(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,4,Ku.bind(null,t,e),n)}function Ri(){}function Gu(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Li(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xu(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Li(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zu(e,t,n){return Vt&21?(Be(n,t)||(n=nu(),Y.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Of(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{A=n,ql.transition=r}}function Ju(){return Fe().memoizedState}function If(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qu(e))ec(t,n);else if(n=Du(e,t,n,r),n!==null){var l=me();$e(n,e,r,l),tc(n,t,r)}}function Uf(e,t,n){var r=Et(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qu(e))ec(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Be(s,i)){var u=t.interleaved;u===null?(l.next=l,bi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Du(e,t,l,r),n!==null&&(l=me(),$e(n,e,r,l),tc(n,t,r))}}function qu(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function ec(e,t){Hn=cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pi(e,n)}}var dl={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Af={readContext:De,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:$a,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,Ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=If.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Aa,useDebugValue:Ri,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=Of.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,l=Ke();if(Q){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),re===null)throw Error(w(349));Vt&30||Uu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,$a($u.bind(null,r,o,e),[e]),r.flags|=2048,cr(9,Au.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ke(),t=re.identifierPrefix;if(Q){var n=lt,r=rt;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$f={readContext:De,useCallback:Gu,useContext:De,useEffect:Fi,useImperativeHandle:Yu,useInsertionEffect:Hu,useLayoutEffect:Qu,useMemo:Xu,useReducer:eo,useRef:Wu,useState:function(){return eo(ur)},useDebugValue:Ri,useDeferredValue:function(e){var t=Fe();return Zu(t,ee.memoizedState,e)},useTransition:function(){var e=eo(ur)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Iu,useId:Ju,unstable_isNewReconciler:!1},Bf={readContext:De,useCallback:Gu,useContext:De,useEffect:Fi,useImperativeHandle:Yu,useInsertionEffect:Hu,useLayoutEffect:Qu,useMemo:Xu,useReducer:to,useRef:Wu,useState:function(){return to(ur)},useDebugValue:Ri,useDeferredValue:function(e){var t=Fe();return ee===null?t.memoizedState=e:Zu(t,ee.memoizedState,e)},useTransition:function(){var e=to(ur)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Iu,useId:Ju,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var El={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),l=Et(e),o=ot(r,l);o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,l),t!==null&&($e(t,e,l,r),Ar(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),l=Et(e),o=ot(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,l),t!==null&&($e(t,e,l,r),Ar(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=Et(e),l=ot(n,r);l.tag=2,t!=null&&(l.callback=t),t=Nt(e,l,r),t!==null&&($e(t,e,r,n),Ar(t,e,r))}};function Ba(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(l,o):!0}function nc(e,t,n){var r=!1,l=_t,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(l=we(t)?$t:fe.current,r=t.contextTypes,o=(r=r!=null)?gn(e,l):_t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=El,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Va(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&El.enqueueReplaceState(t,t.state,null)}function Io(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},zi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=De(o):(o=we(t)?$t:fe.current,l.context=gn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Oo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&El.enqueueReplaceState(l,l.state,null),sl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=hd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function no(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vf=typeof WeakMap=="function"?WeakMap:Map;function rc(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pl||(pl=!0,Go=r),Uo(e,t)},n}function lc(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Uo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Uo(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=rp.bind(null,e,t,n),t.then(e,e))}function Ha(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Wf=dt.ReactCurrentOwner,ye=!1;function pe(e,t,n,r){t.child=e===null?Mu(t,null,n,r):yn(t,e.child,n,r)}function Ka(e,t,n,r,l){n=n.render;var o=t.ref;return pn(t,l),r=Mi(e,t,n,r,o,l),n=Di(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ut(e,t,l)):(Q&&n&&ki(t),t.flags|=1,pe(e,t,r,l),t.child)}function Ya(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Wi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,oc(e,t,o,r,l)):(e=Qr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(i,r)&&e.ref===t.ref)return ut(e,t,l)}return t.flags|=1,e=bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(nr(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,ut(e,t,l)}return Ao(e,t,n,r,l)}function ic(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(sn,Se),Se|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(sn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$(sn,Se),Se|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$(sn,Se),Se|=r;return pe(e,t,l,n),t.child}function ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ao(e,t,n,r,l){var o=we(n)?$t:fe.current;return o=gn(t,o),pn(t,l),n=Mi(e,t,n,r,o,l),r=Di(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ut(e,t,l)):(Q&&r&&ki(t),t.flags|=1,pe(e,t,n,l),t.child)}function Ga(e,t,n,r,l){if(we(n)){var o=!0;rl(t)}else o=!1;if(pn(t,l),t.stateNode===null)Vr(e,t),nc(t,n,r),Io(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=we(n)?$t:fe.current,c=gn(t,c));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Va(t,i,r,c),ht=!1;var m=t.memoizedState;i.state=m,sl(t,r,i,l),u=t.memoizedState,s!==r||m!==u||xe.current||ht?(typeof g=="function"&&(Oo(t,n,g,r),u=t.memoizedState),(s=ht||Ba(t,n,s,r,m,u,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Fu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Oe(t.type,s),i.props=c,h=t.pendingProps,m=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=we(n)?$t:fe.current,u=gn(t,u));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||m!==u)&&Va(t,i,r,u),ht=!1,m=t.memoizedState,i.state=m,sl(t,r,i,l);var y=t.memoizedState;s!==h||m!==y||xe.current||ht?(typeof v=="function"&&(Oo(t,n,v,r),y=t.memoizedState),(c=ht||Ba(t,n,c,r,m,y,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $o(e,t,n,r,o,l)}function $o(e,t,n,r,l,o){ac(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Da(t,n,!1),ut(e,t,o);r=t.stateNode,Wf.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=yn(t,e.child,null,o),t.child=yn(t,null,s,o)):pe(e,t,s,o),t.memoizedState=r.state,l&&Da(t,n,!0),t.child}function sc(e){var t=e.stateNode;t.pendingContext?Ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(e,t.context,!1),_i(e,t.containerInfo)}function Xa(e,t,n,r,l){return vn(),ji(l),t.flags|=256,pe(e,t,n,r),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,t,n){var r=t.pendingProps,l=K.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),$(K,l&1),e===null)return Fo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=_l(i,r,0,null),e=At(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vo(n),t.memoizedState=Bo,e):Oi(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Hf(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=bt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=bt(s,o):(o=At(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Vo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Bo,r}return o=e.child,e=o.sibling,r=bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oi(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&ji(r),yn(t,e.child,null,n),e=Oi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=no(Error(w(422))),Pr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=_l({mode:"visible",children:r.children},l,0,null),o=At(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yn(t,e.child,null,i),t.child.memoizedState=Vo(i),t.memoizedState=Bo,o);if(!(t.mode&1))return Pr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=no(o,r,void 0),Pr(e,t,i,r)}if(s=(i&e.childLanes)!==0,ye||s){if(r=re,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,st(e,l),$e(r,e,l,-1))}return Vi(),r=no(Error(w(421))),Pr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=lp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,je=jt(l.nextSibling),Ne=t,Q=!0,Ue=null,e!==null&&(ze[_e++]=rt,ze[_e++]=lt,ze[_e++]=Bt,rt=e.id,lt=e.overflow,Bt=t),t=Oi(t,r.children),t.flags|=4096,t)}function Za(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ro(e.return,t,n)}function ro(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function cc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(pe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Za(e,n,t);else if(e.tag===19)Za(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(K,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ul(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ro(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ul(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ro(t,!0,n,null,o);break;case"together":ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qf(e,t,n){switch(t.tag){case 3:sc(t),vn();break;case 5:Ru(t);break;case 1:we(t.type)&&rl(t);break;case 4:_i(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;$(il,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?uc(e,t,n):($(K,K.current&1),e=ut(e,t,n),e!==null?e.sibling:null);$(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,ic(e,t,n)}return ut(e,t,n)}var dc,Wo,fc,pc;dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};fc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,It(Xe.current);var o=null;switch(n){case"input":l=fo(e,l),r=fo(e,r),o=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":l=ho(e,l),r=ho(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=tl)}vo(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&V("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kf(e,t,n){var r=t.pendingProps;switch(Si(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return we(t.type)&&nl(),ce(t),null;case 3:return r=t.stateNode,xn(),W(xe),W(fe),Pi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(Jo(Ue),Ue=null))),Wo(e,t),ce(t),null;case 5:Ti(t);var l=It(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)fc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ce(t),null}if(e=It(Xe.current),_r(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ye]=t,r[or]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(l=0;l<Un.length;l++)V(Un[l],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ia(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":sa(r,o),V("invalid",r)}vo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",""+s]):Gn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&V("scroll",r)}switch(n){case"input":wr(r),aa(r,o,!0);break;case"textarea":wr(r),ua(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=tl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$s(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ye]=t,e[or]=r,dc(e,t,!1,!1),t.stateNode=e;e:{switch(i=yo(n,r),n){case"dialog":V("cancel",e),V("close",e),l=r;break;case"iframe":case"object":case"embed":V("load",e),l=r;break;case"video":case"audio":for(l=0;l<Un.length;l++)V(Un[l],e);l=r;break;case"source":V("error",e),l=r;break;case"img":case"image":case"link":V("error",e),V("load",e),l=r;break;case"details":V("toggle",e),l=r;break;case"input":ia(e,r),l=fo(e,r),V("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),V("invalid",e);break;case"textarea":sa(e,r),l=ho(e,r),V("invalid",e);break;default:l=r}vo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Ws(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Bs(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xn(e,u):typeof u=="number"&&Xn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&V("scroll",e):u!=null&&ai(e,o,u,i))}switch(n){case"input":wr(e),aa(e,r,!1);break;case"textarea":wr(e),ua(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?un(e,!!r.multiple,o,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)pc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=It(ar.current),It(Xe.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return ce(t),null;case 13:if(W(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&je!==null&&t.mode&1&&!(t.flags&128))Pu(),vn(),t.flags|=98560,o=!1;else if(o=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Ye]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Ue!==null&&(Jo(Ue),Ue=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?te===0&&(te=3):Vi())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return xn(),Wo(e,t),e===null&&rr(t.stateNode.containerInfo),ce(t),null;case 10:return Ei(t.type._context),ce(t),null;case 17:return we(t.type)&&nl(),ce(t),null;case 19:if(W(K),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Dn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ul(e),i!==null){for(t.flags|=128,Dn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>kn&&(t.flags|=128,r=!0,Dn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ul(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Q)return ce(t),null}else 2*Z()-o.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=K.current,$(K,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Bi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Yf(e,t){switch(Si(t),t.tag){case 1:return we(t.type)&&nl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),W(xe),W(fe),Pi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ti(t),null;case 13:if(W(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(K),null;case 4:return xn(),null;case 10:return Ei(t.type._context),null;case 22:case 23:return Bi(),null;case 24:return null;default:return null}}var Lr=!1,de=!1,Gf=typeof WeakSet=="function"?WeakSet:Set,P=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Ho(e,t,n){try{n()}catch(r){X(e,t,r)}}var Ja=!1;function Xf(e,t){if(zo=Jr,e=yu(),wi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,c=0,g=0,h=e,m=null;t:for(;;){for(var v;h!==n||l!==0&&h.nodeType!==3||(s=i+l),h!==o||r!==0&&h.nodeType!==3||(u=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===n&&++c===l&&(s=i),m===o&&++g===r&&(u=i),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_o={focusedElem:e,selectionRange:n},Jr=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,R=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?S:Oe(t.type,S),R);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){X(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=Ja,Ja=!1,y}function Qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ho(t,n,o)}l=l.next}while(l!==r)}}function bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mc(e){var t=e.alternate;t!==null&&(e.alternate=null,mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[or],delete t[Lo],delete t[Lf],delete t[Mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hc(e){return e.tag===5||e.tag===3||e.tag===4}function qa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tl));else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}var le=null,Ie=!1;function pt(e,t,n){for(n=n.child;n!==null;)gc(e,t,n),n=n.sibling}function gc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:de||an(n,t);case 6:var r=le,l=Ie;le=null,pt(e,t,n),le=r,Ie=l,le!==null&&(Ie?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ie?(e=le,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),er(e)):Xl(le,n.stateNode));break;case 4:r=le,l=Ie,le=n.stateNode.containerInfo,Ie=!0,pt(e,t,n),le=r,Ie=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ho(n,t,i),l=l.next}while(l!==r)}pt(e,t,n);break;case 1:if(!de&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,pt(e,t,n),de=r):pt(e,t,n);break;default:pt(e,t,n)}}function es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gf),t.forEach(function(r){var l=op.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,Ie=!1;break e;case 3:le=s.stateNode.containerInfo,Ie=!0;break e;case 4:le=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(le===null)throw Error(w(160));gc(o,i,l),le=null,Ie=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){X(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Qe(e),r&4){try{Qn(3,e,e.return),bl(3,e)}catch(S){X(e,e.return,S)}try{Qn(5,e,e.return)}catch(S){X(e,e.return,S)}}break;case 1:Re(t,e),Qe(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Re(t,e),Qe(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var l=e.stateNode;try{Xn(l,"")}catch(S){X(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Us(l,o),yo(s,i);var c=yo(s,o);for(i=0;i<u.length;i+=2){var g=u[i],h=u[i+1];g==="style"?Ws(l,h):g==="dangerouslySetInnerHTML"?Bs(l,h):g==="children"?Xn(l,h):ai(l,g,h,c)}switch(s){case"input":po(l,o);break;case"textarea":As(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?un(l,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?un(l,!!o.multiple,o.defaultValue,!0):un(l,!!o.multiple,o.multiple?[]:"",!1))}l[or]=o}catch(S){X(e,e.return,S)}}break;case 6:if(Re(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){X(e,e.return,S)}}break;case 3:if(Re(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(S){X(e,e.return,S)}break;case 4:Re(t,e),Qe(e);break;case 13:Re(t,e),Qe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ai=Z())),r&4&&es(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(de=(c=de)||g,Re(t,e),de=c):Re(t,e),Qe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(P=e,g=e.child;g!==null;){for(h=P=g;P!==null;){switch(m=P,v=m.child,m.tag){case 0:case 11:case 14:case 15:Qn(4,m,m.return);break;case 1:an(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){X(r,n,S)}}break;case 5:an(m,m.return);break;case 22:if(m.memoizedState!==null){ns(h);continue}}v!==null?(v.return=m,P=v):ns(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Vs("display",i))}catch(S){X(e,e.return,S)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){X(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Re(t,e),Qe(e),r&4&&es(e);break;case 21:break;default:Re(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Xn(l,""),r.flags&=-33);var o=qa(e);Yo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=qa(e);Ko(e,s,i);break;default:throw Error(w(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zf(e,t,n){P=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var l=P,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Lr;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||de;s=Lr;var c=de;if(Lr=i,(de=u)&&!c)for(P=l;P!==null;)i=P,u=i.child,i.tag===22&&i.memoizedState!==null?rs(l):u!==null?(u.return=i,P=u):rs(l);for(;o!==null;)P=o,yc(o),o=o.sibling;P=l,Lr=s,de=c}ts(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,P=o):ts(e)}}function ts(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||bl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ua(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ua(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&er(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}de||t.flags&512&&Qo(t)}catch(m){X(t,t.return,m)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ns(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function rs(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bl(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){X(t,l,u)}}var o=t.return;try{Qo(t)}catch(u){X(t,o,u)}break;case 5:var i=t.return;try{Qo(t)}catch(u){X(t,i,u)}}}catch(u){X(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Jf=Math.ceil,fl=dt.ReactCurrentDispatcher,Ii=dt.ReactCurrentOwner,Me=dt.ReactCurrentBatchConfig,U=0,re=null,q=null,oe=0,Se=0,sn=Pt(0),te=0,dr=null,Wt=0,zl=0,Ui=0,Kn=null,ve=null,Ai=0,kn=1/0,tt=null,pl=!1,Go=null,Ct=null,Mr=!1,xt=null,ml=0,Yn=0,Xo=null,Wr=-1,Hr=0;function me(){return U&6?Z():Wr!==-1?Wr:Wr=Z()}function Et(e){return e.mode&1?U&2&&oe!==0?oe&-oe:Ff.transition!==null?(Hr===0&&(Hr=nu()),Hr):(e=A,e!==0||(e=window.event,e=e===void 0?16:uu(e.type)),e):1}function $e(e,t,n,r){if(50<Yn)throw Yn=0,Xo=null,Error(w(185));mr(e,n,r),(!(U&2)||e!==re)&&(e===re&&(!(U&2)&&(zl|=n),te===4&&vt(e,oe)),ke(e,r),n===1&&U===0&&!(t.mode&1)&&(kn=Z()+500,Nl&&Lt()))}function ke(e,t){var n=e.callbackNode;Dd(e,t);var r=Zr(e,e===re?oe:0);if(r===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?Df(ls.bind(null,e)):zu(ls.bind(null,e)),Tf(function(){!(U&6)&&Lt()}),n=null;else{switch(ru(r)){case 1:n=fi;break;case 4:n=eu;break;case 16:n=Xr;break;case 536870912:n=tu;break;default:n=Xr}n=Ec(n,xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xc(e,t){if(Wr=-1,Hr=0,U&6)throw Error(w(327));var n=e.callbackNode;if(mn()&&e.callbackNode!==n)return null;var r=Zr(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=hl(e,r);else{t=r;var l=U;U|=2;var o=kc();(re!==e||oe!==t)&&(tt=null,kn=Z()+500,Ut(e,t));do try{tp();break}catch(s){wc(e,s)}while(!0);Ci(),fl.current=o,U=l,q!==null?t=0:(re=null,oe=0,t=te)}if(t!==0){if(t===2&&(l=jo(e),l!==0&&(r=l,t=Zo(e,l))),t===1)throw n=dr,Ut(e,0),vt(e,r),ke(e,Z()),n;if(t===6)vt(e,r);else{if(l=e.current.alternate,!(r&30)&&!qf(l)&&(t=hl(e,r),t===2&&(o=jo(e),o!==0&&(r=o,t=Zo(e,o))),t===1))throw n=dr,Ut(e,0),vt(e,r),ke(e,Z()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Ft(e,ve,tt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Ai+500-Z(),10<t)){if(Zr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Po(Ft.bind(null,e,ve,tt),t);break}Ft(e,ve,tt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Ae(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jf(r/1960))-r,10<r){e.timeoutHandle=Po(Ft.bind(null,e,ve,tt),r);break}Ft(e,ve,tt);break;case 5:Ft(e,ve,tt);break;default:throw Error(w(329))}}}return ke(e,Z()),e.callbackNode===n?xc.bind(null,e):null}function Zo(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=hl(e,t),e!==2&&(t=ve,ve=n,t!==null&&Jo(t)),e}function Jo(e){ve===null?ve=e:ve.push.apply(ve,e)}function qf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Be(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Ui,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function ls(e){if(U&6)throw Error(w(327));mn();var t=Zr(e,0);if(!(t&1))return ke(e,Z()),null;var n=hl(e,t);if(e.tag!==0&&n===2){var r=jo(e);r!==0&&(t=r,n=Zo(e,r))}if(n===1)throw n=dr,Ut(e,0),vt(e,t),ke(e,Z()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,ve,tt),ke(e,Z()),null}function $i(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(kn=Z()+500,Nl&&Lt())}}function Ht(e){xt!==null&&xt.tag===0&&!(U&6)&&mn();var t=U;U|=1;var n=Me.transition,r=A;try{if(Me.transition=null,A=1,e)return e()}finally{A=r,Me.transition=n,U=t,!(U&6)&&Lt()}}function Bi(){Se=sn.current,W(sn)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_f(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Si(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:xn(),W(xe),W(fe),Pi();break;case 5:Ti(r);break;case 4:xn();break;case 13:W(K);break;case 19:W(K);break;case 10:Ei(r.type._context);break;case 22:case 23:Bi()}n=n.return}if(re=e,q=e=bt(e.current,null),oe=Se=t,te=0,dr=null,Ui=zl=Wt=0,ve=Kn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Ot=null}return e}function wc(e,t){do{var n=q;try{if(Ci(),$r.current=dl,cl){for(var r=Y.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}cl=!1}if(Vt=0,ne=ee=Y=null,Hn=!1,sr=0,Ii.current=null,n===null||n.return===null){te=1,dr=t,q=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=oe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Ha(i);if(v!==null){v.flags&=-257,Qa(v,i,s,o,t),v.mode&1&&Wa(o,c,t),t=v,u=c;var y=t.updateQueue;if(y===null){var S=new Set;S.add(u),t.updateQueue=S}else y.add(u);break e}else{if(!(t&1)){Wa(o,c,t),Vi();break e}u=Error(w(426))}}else if(Q&&s.mode&1){var R=Ha(i);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Qa(R,i,s,o,t),ji(wn(u,s));break e}}o=u=wn(u,s),te!==4&&(te=2),Kn===null?Kn=[o]:Kn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=rc(o,u,t);Ia(o,p);break e;case 1:s=u;var d=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ct===null||!Ct.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=lc(o,s,t);Ia(o,x);break e}}o=o.return}while(o!==null)}jc(n)}catch(N){t=N,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function kc(){var e=fl.current;return fl.current=dl,e===null?dl:e}function Vi(){(te===0||te===3||te===2)&&(te=4),re===null||!(Wt&268435455)&&!(zl&268435455)||vt(re,oe)}function hl(e,t){var n=U;U|=2;var r=kc();(re!==e||oe!==t)&&(tt=null,Ut(e,t));do try{ep();break}catch(l){wc(e,l)}while(!0);if(Ci(),U=n,fl.current=r,q!==null)throw Error(w(261));return re=null,oe=0,te}function ep(){for(;q!==null;)Sc(q)}function tp(){for(;q!==null&&!Cd();)Sc(q)}function Sc(e){var t=Cc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?jc(e):q=t,Ii.current=null}function jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yf(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=Kf(n,t,Se),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Ft(e,t,n){var r=A,l=Me.transition;try{Me.transition=null,A=1,np(e,t,n,r)}finally{Me.transition=l,A=r}return null}function np(e,t,n,r){do mn();while(xt!==null);if(U&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Fd(e,o),e===re&&(q=re=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,Ec(Xr,function(){return mn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var i=A;A=1;var s=U;U|=4,Ii.current=null,Xf(e,n),vc(n,e),Sf(_o),Jr=!!zo,_o=zo=null,e.current=n,Zf(n),Ed(),U=s,A=i,Me.transition=o}else e.current=n;if(Mr&&(Mr=!1,xt=e,ml=l),o=e.pendingLanes,o===0&&(Ct=null),_d(n.stateNode),ke(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(pl)throw pl=!1,e=Go,Go=null,e;return ml&1&&e.tag!==0&&mn(),o=e.pendingLanes,o&1?e===Xo?Yn++:(Yn=0,Xo=e):Yn=0,Lt(),null}function mn(){if(xt!==null){var e=ru(ml),t=Me.transition,n=A;try{if(Me.transition=null,A=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,ml=0,U&6)throw Error(w(331));var l=U;for(U|=4,P=e.current;P!==null;){var o=P,i=o.child;if(P.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(P=c;P!==null;){var g=P;switch(g.tag){case 0:case 11:case 15:Qn(8,g,o)}var h=g.child;if(h!==null)h.return=g,P=h;else for(;P!==null;){g=P;var m=g.sibling,v=g.return;if(mc(g),g===c){P=null;break}if(m!==null){m.return=v,P=m;break}P=v}}}var y=o.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var R=S.sibling;S.sibling=null,S=R}while(S!==null)}}P=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,P=i;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){i=P;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,P=f;else e:for(i=d;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:bl(9,s)}}catch(N){X(s,s.return,N)}if(s===i){P=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,P=x;break e}P=s.return}}if(U=l,Lt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{A=n,Me.transition=t}}return!1}function os(e,t,n){t=wn(n,t),t=rc(e,t,1),e=Nt(e,t,1),t=me(),e!==null&&(mr(e,1,t),ke(e,t))}function X(e,t,n){if(e.tag===3)os(e,e,n);else for(;t!==null;){if(t.tag===3){os(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=wn(n,e),e=lc(t,e,1),t=Nt(t,e,1),e=me(),t!==null&&(mr(t,1,e),ke(t,e));break}}t=t.return}}function rp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(oe&n)===n&&(te===4||te===3&&(oe&130023424)===oe&&500>Z()-Ai?Ut(e,0):Ui|=n),ke(e,t)}function Nc(e,t){t===0&&(e.mode&1?(t=jr,jr<<=1,!(jr&130023424)&&(jr=4194304)):t=1);var n=me();e=st(e,t),e!==null&&(mr(e,t,n),ke(e,n))}function lp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nc(e,n)}function op(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Nc(e,n)}var Cc;Cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Qf(e,t,n);ye=!!(e.flags&131072)}else ye=!1,Q&&t.flags&1048576&&_u(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vr(e,t),e=t.pendingProps;var l=gn(t,fe.current);pn(t,n),l=Mi(null,t,r,e,l,n);var o=Di();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,rl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,zi(t),l.updater=El,t.stateNode=l,l._reactInternals=t,Io(t,r,e,n),t=$o(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&ki(t),pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=ap(r),e=Oe(r,e),l){case 0:t=Ao(null,t,r,e,n);break e;case 1:t=Ga(null,t,r,e,n);break e;case 11:t=Ka(null,t,r,e,n);break e;case 14:t=Ya(null,t,r,Oe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ao(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ga(e,t,r,l,n);case 3:e:{if(sc(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Fu(e,t),sl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=wn(Error(w(423)),t),t=Xa(e,t,r,n,l);break e}else if(r!==l){l=wn(Error(w(424)),t),t=Xa(e,t,r,n,l);break e}else for(je=jt(t.stateNode.containerInfo.firstChild),Ne=t,Q=!0,Ue=null,n=Mu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===l){t=ut(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return Ru(t),e===null&&Fo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,To(r,l)?i=null:o!==null&&To(r,o)&&(t.flags|=32),ac(e,t),pe(e,t,i,n),t.child;case 6:return e===null&&Fo(t),null;case 13:return uc(e,t,n);case 4:return _i(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ka(e,t,r,l,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,$(il,r._currentValue),r._currentValue=i,o!==null)if(Be(o.value,i)){if(o.children===l.children&&!xe.current){t=ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=ot(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ro(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ro(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,pn(t,n),l=De(l),r=r(l),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),Ya(e,t,r,l,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Vr(e,t),t.tag=1,we(r)?(e=!0,rl(t)):e=!1,pn(t,n),nc(t,r,l),Io(t,r,l,n),$o(null,t,r,!0,e,n);case 19:return cc(e,t,n);case 22:return ic(e,t,n)}throw Error(w(156,t.tag))};function Ec(e,t){return qs(e,t)}function ip(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new ip(e,t,n,r)}function Wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ap(e){if(typeof e=="function")return Wi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ui)return 11;if(e===ci)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Wi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Zt:return At(n.children,l,o,t);case si:i=8,l|=8;break;case ao:return e=Pe(12,n,t,l|2),e.elementType=ao,e.lanes=o,e;case so:return e=Pe(13,n,t,l),e.elementType=so,e.lanes=o,e;case uo:return e=Pe(19,n,t,l),e.elementType=uo,e.lanes=o,e;case Rs:return _l(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ds:i=10;break e;case Fs:i=9;break e;case ui:i=11;break e;case ci:i=14;break e;case mt:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Pe(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function At(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=Rs,e.lanes=n,e.stateNode={isHidden:!1},e}function lo(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function oo(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Hi(e,t,n,r,l,o,i,s,u){return e=new sp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zi(o),e}function up(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bc(e){if(!e)return _t;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(we(n))return bu(e,n,t)}return t}function zc(e,t,n,r,l,o,i,s,u){return e=Hi(n,r,!0,e,l,o,i,s,u),e.context=bc(null),n=e.current,r=me(),l=Et(n),o=ot(r,l),o.callback=t??null,Nt(n,o,l),e.current.lanes=l,mr(e,l,r),ke(e,r),e}function Tl(e,t,n,r){var l=t.current,o=me(),i=Et(l);return n=bc(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(l,t,i),e!==null&&($e(e,l,i,o),Ar(e,l,i)),i}function gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function is(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qi(e,t){is(e,t),(e=e.alternate)&&is(e,t)}function cp(){return null}var _c=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ki(e){this._internalRoot=e}Pl.prototype.render=Ki.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Tl(e,t,null,null)};Pl.prototype.unmount=Ki.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Tl(null,e,null,null)}),t[at]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&su(e)}};function Yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function as(){}function dp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=gl(i);o.call(c)}}var i=zc(t,r,e,0,null,!1,!1,"",as);return e._reactRootContainer=i,e[at]=i.current,rr(e.nodeType===8?e.parentNode:e),Ht(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=gl(u);s.call(c)}}var u=Hi(e,0,!1,null,null,!1,!1,"",as);return e._reactRootContainer=u,e[at]=u.current,rr(e.nodeType===8?e.parentNode:e),Ht(function(){Tl(t,u,n,r)}),u}function Ml(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=gl(i);s.call(u)}}Tl(t,i,e,l)}else i=dp(n,t,e,l,r);return gl(i)}lu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(pi(t,n|1),ke(t,Z()),!(U&6)&&(kn=Z()+500,Lt()))}break;case 13:Ht(function(){var r=st(e,1);if(r!==null){var l=me();$e(r,e,1,l)}}),Qi(e,1)}};mi=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var n=me();$e(t,e,134217728,n)}Qi(e,134217728)}};ou=function(e){if(e.tag===13){var t=Et(e),n=st(e,t);if(n!==null){var r=me();$e(n,e,t,r)}Qi(e,t)}};iu=function(){return A};au=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};wo=function(e,t,n){switch(t){case"input":if(po(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=jl(r);if(!l)throw Error(w(90));Is(r),po(r,l)}}}break;case"textarea":As(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Ks=$i;Ys=Ht;var fp={usingClientEntryPoint:!1,Events:[gr,tn,jl,Hs,Qs,$i]},Fn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zs(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{xl=Dr.inject(pp),Ge=Dr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fp;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yi(t))throw Error(w(200));return up(e,t,null,n)};Ee.createRoot=function(e,t){if(!Yi(e))throw Error(w(299));var n=!1,r="",l=_c;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Hi(e,1,!1,null,null,n,!1,r,l),e[at]=t.current,rr(e.nodeType===8?e.parentNode:e),new Ki(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Zs(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Ht(e)};Ee.hydrate=function(e,t,n){if(!Ll(t))throw Error(w(200));return Ml(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Yi(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=_c;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=zc(t,null,e,1,n??null,l,!1,o,i),e[at]=t.current,rr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Pl(t)};Ee.render=function(e,t,n){if(!Ll(t))throw Error(w(200));return Ml(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(w(40));return e._reactRootContainer?(Ht(function(){Ml(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Ee.unstable_batchedUpdates=$i;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ll(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ml(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function Tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tc)}catch(e){console.error(e)}}Tc(),Ts.exports=Ee;var mp=Ts.exports,Pc,ss=mp;Pc=ss.createRoot,ss.hydrateRoot;function Ze(e){return e?e.startsWith("http://")||e.startsWith("https://")?e:`${Sn}${e}`:null}const Lc={de:"de-DE",fr:"fr-FR"};let qo=[];function us(){window.speechSynthesis&&(qo=window.speechSynthesis.getVoices()||[])}var vs,ys;typeof window<"u"&&window.speechSynthesis&&(us(),(ys=(vs=window.speechSynthesis).addEventListener)==null||ys.call(vs,"voiceschanged",us));function hp(e){var o;const t=qo.length?qo:((o=window.speechSynthesis)==null?void 0:o.getVoices())||[],n=e.toLowerCase(),r=n.slice(0,2),l=i=>i.lang.replace("_","-").toLowerCase();return t.find(i=>l(i)===n)||t.find(i=>l(i).startsWith(r))||null}const vl={de:["der","die","das"],fr:["le","la","l'"]},Je={de:{name:"Alemán",code:"DE",wordPh:"z.B. der Schlüssel",blankWordPh:"z.B. Hund (solo la palabra)",exLabel:"Ejemplo en alemán",exPh:"Der Hund läuft schnell.",blankPh:"Der ___ läuft schnell.",bulkPh:`[
  { "german": "der Hund", "translation": "el perro", "note": "masc." },
  { "german": "die Katze", "translation": "la gata" }
]`},fr:{name:"Francés",code:"FR",wordPh:"p.ej. le chien",blankWordPh:"p.ej. chien (solo la palabra)",exLabel:"Ejemplo en francés",exPh:"Le chien court vite.",blankPh:"Le ___ court vite.",bulkPh:`[
  { "german": "le chien", "translation": "el perro", "note": "masc." },
  { "german": "la maison", "translation": "la casa" }
]`}};let Mc="de";function gp(e){Lc[e]&&(Mc=e)}const ct={type1:"Imagen",type2:"Ejemplo",type4:"Traducir",type5:"Completar",type6:"Artículo"};function Dc(e){const t=Je[e]||Je.de,n=(vl[e]||vl.de).join(" / "),r={type1:"Muestra una imagen; la tocas para voltear y ver la palabra. Requiere una URL de imagen.",type2:"Muestra la palabra con una frase de ejemplo; volteas para ver la traducción.",type4:`Te muestra el español y escribes la palabra en ${t.name.toLowerCase()}; corrige tu respuesta.`,type5:"Una frase con un hueco (___); escribes la palabra que falta.",type6:`Eliges el artículo/género correcto (${n}).`};return Object.keys(ct).map(l=>({id:l,name:ct[l],tip:r[l]}))}function Fc(e,t="de"){const n=vl[t]||vl.de,r=(e||"").trim(),l=r.toLowerCase(),o=n.find(s=>s.endsWith("'")?l.startsWith(s):l.startsWith(s+" "))||"",i=o?r.slice(o.length).trimStart():r;return{articles:n,correct:o,bare:i}}function cs(e){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e),n=Lc[Mc]||"de-DE";t.lang=n,t.rate=.9;const r=hp(n);r&&(t.voice=r),window.speechSynthesis.speak(t)}function Le(e){var t;if(e){if(e.audioUrl){(t=window.speechSynthesis)==null||t.cancel(),new Audio(Ze(e.audioUrl)).play().catch(()=>cs(e.german));return}cs(e.german)}}function vp(e,t){let{repetitions:n,easiness:r,interval:l}=e;t>=3?(n===0?l=1:n===1?l=6:l=Math.round(l*r),n+=1):(n=0,l=1),r=Math.max(1.3,r+.1-(5-t)*(.08+(5-t)*.02));const o=Date.now()+l*864e5;return{repetitions:n,easiness:r,interval:l,nextReview:o,lastGrade:t}}function yp(e){const t=Math.ceil((e-Date.now())/864e5);return t<=0?"Hoy":t===1?"Mañana":`${t} días`}const Sn="http://localhost:3001",Gi="dk_token",Rc=()=>localStorage.getItem(Gi),xp=e=>localStorage.setItem(Gi,e),ds=()=>localStorage.removeItem(Gi);function fr(){const e=Rc();return e?{Authorization:`Bearer ${e}`}:{}}async function Yt(e,t={}){const n=await fetch(`${Sn}${e}`,{headers:{"Content-Type":"application/json",...fr(),...t.headers||{}},...t});if(!n.ok){const r=await n.json().catch(()=>({}));throw Object.assign(new Error(r.error||n.statusText),{status:n.status})}return n.json()}async function fs(){return Yt("/cards")}async function ps(e){const t=e.length===0?"?allowEmpty=true":"";return Yt(`/cards${t}`,{method:"PUT",body:JSON.stringify(e)})}async function ms(){return Yt("/stats")}async function hs(e){return Yt("/stats",{method:"PUT",body:JSON.stringify(e)})}function Oc(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Ic(e,t){return Math.round((new Date(t+"T00:00:00")-new Date(e+"T00:00:00"))/864e5)}function wp(e){const t=Oc();if(!e||!e.day)return{day:t,todayCount:1,currentStreak:1,longestStreak:1};if(e.day===t)return{...e,todayCount:e.todayCount+1};const n=Ic(e.day,t);if(n<=0)return{...e,todayCount:e.todayCount+1};const r=n===1?e.currentStreak+1:1;return{day:t,todayCount:1,currentStreak:r,longestStreak:Math.max(e.longestStreak||0,r)}}async function kp(e){return Yt("/explain",{method:"POST",body:JSON.stringify({german:e.german,translation:e.translation,note:e.note||""})}).then(t=>t.text)}async function Sp(e){const t=new FormData;t.append("file",e);const n=await fetch(`${Sn}/upload`,{method:"POST",body:t,headers:fr()});if(!n.ok)throw new Error("Error al subir archivo.");return n.json()}async function jp(e){const t=e.split("/media/")[1];t&&await fetch(`${Sn}/media/${t}`,{method:"DELETE",headers:fr()})}const ei="@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400;500&display=swap');",Uc=`

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
    grid-template-columns: repeat(3, 1fr);
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
`,Xi=[{n:0,label:"Nada"},{n:1,label:"Mal"},{n:2,label:"Difícil"},{n:3,label:"Ok"},{n:4,label:"Bien"},{n:5,label:"Fácil"}];function Np({card:e}){return a.jsxs("div",{className:"t1-front",children:[a.jsx("div",{className:"card-type-badge",children:ct.type1}),e.imageUrl?a.jsx("img",{className:"t1-front-img",src:Ze(e.imageUrl),alt:""}):a.jsx("div",{style:{fontSize:"0.75rem",color:"#444",border:"1px dashed #333",padding:"1.5rem 2rem",borderRadius:"4px"},children:"sin imagen"}),a.jsx("div",{className:"t1-front-hint",children:"toca para voltear"})]})}function Cp({card:e,onSpeak:t}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:ct.type1}),a.jsx("div",{className:"card-hint",children:"califica abajo"}),a.jsx("div",{className:"t1-back-word",children:e.german}),e.note&&a.jsx("div",{className:"t1-back-note",children:e.note}),a.jsx("button",{className:"audio-replay-btn",onClick:n=>{n.stopPropagation(),t()},title:"Pronunciar",children:"▶"})]})}function Ep({card:e}){const t=(n,r)=>{if(!n||!r)return n;const l=r.replace(/^(der|die|das|ein|eine)\s+/i,"").toLowerCase(),o=new RegExp(`(${l})`,"gi");return n.split(o).map((s,u)=>o.test(s)?a.jsx("em",{children:s},u):s)};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:ct.type2}),a.jsx("div",{className:"card-hint",children:"toca para voltear"}),a.jsxs("div",{className:"t2-front",children:[a.jsx("div",{className:"t2-word",children:e.german}),e.example&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"t2-divider"}),a.jsx("div",{className:"t2-example",children:t(e.example,e.german)})]})]})]})}function bp({card:e}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:ct.type2}),a.jsx("div",{className:"card-hint",children:"califica abajo"}),a.jsxs("div",{className:"t2-back",children:[a.jsx("div",{className:"t2-translation",children:e.translation}),e.note&&a.jsx("div",{className:"card-note",children:e.note}),a.jsx("button",{className:"audio-replay-btn",style:{marginTop:"0.5rem"},onClick:t=>{t.stopPropagation(),Le(e)},title:"Pronunciar",children:"▶"}),e.exampleTranslation&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"t2-divider",style:{marginTop:"0.5rem"}}),a.jsxs("div",{className:"t2-example-trans",children:['"',e.exampleTranslation,'"']})]})]})]})}function zp({card:e,language:t}){const n=Je[t]||Je.de;return a.jsxs("div",{className:"t4-front",children:[a.jsx("div",{className:"card-type-badge",children:ct.type4}),a.jsxs("div",{className:"t4-label",children:["¿Cómo se dice en ",n.name.toLowerCase(),"?"]}),a.jsx("div",{className:"t4-word",children:e.translation}),e.note&&a.jsx("div",{className:"t4-note",children:e.note})]})}function _p({card:e}){const n=(e.example||"").split("___");return a.jsxs("div",{className:"t5-front",children:[a.jsx("div",{className:"card-type-badge",children:ct.type5}),e.imageUrl&&a.jsx("img",{className:"t1-front-img",src:Ze(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"45%",maxWidth:"80%",marginBottom:"0.25rem"}}),a.jsx("div",{className:"t5-sentence",children:n.map((r,l)=>a.jsxs(Te.Fragment,{children:[r,l<n.length-1&&a.jsx("span",{className:"t5-blank",children:"_____"})]},l))}),e.note&&a.jsx("div",{className:"t4-note",style:{fontSize:"0.62rem"},children:e.note})]})}function Tp({card:e,language:t}){const{bare:n}=Fc(e.german,t);return a.jsxs("div",{className:"t6-front",children:[a.jsx("div",{className:"card-type-badge",children:ct.type6}),e.imageUrl&&a.jsx("img",{className:"t1-front-img",src:Ze(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"50%",maxWidth:"80%",marginBottom:"0.5rem"}}),a.jsx("div",{className:"t6-label",children:"¿Cuál es el artículo?"}),a.jsxs("div",{className:"t6-word",children:["___ ",n]})]})}function Pp({card:e,language:t,onGrade:n,onExplain:r,explaining:l,explanation:o}){const i=Je[t]||Je.de,[s,u]=C.useState(""),[c,g]=C.useState(null),h=Te.useRef(null);Te.useEffect(()=>{var y;(y=h.current)==null||y.focus()},[]);const m=()=>{if(!s.trim())return;const y=s.trim().toLowerCase()===e.german.trim().toLowerCase();g(y?"correct":"wrong")},v=()=>{g("revealed"),Le(e)};return a.jsxs("div",{className:"answer-zone",children:[a.jsxs("div",{className:"answer-input-row",children:[a.jsx("input",{ref:h,className:`answer-input ${c==="wrong"?"wrong":c==="correct"?"correct":""}`,value:s,onChange:y=>u(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!c&&m()},placeholder:`Escribe en ${i.name.toLowerCase()}…`,disabled:!!c}),a.jsx("button",{className:"answer-check-btn",onClick:m,disabled:!!c||!s.trim(),children:"OK"}),a.jsx("button",{className:"reveal-btn",onClick:v,disabled:!!c,children:"Revelar"})]}),c==="correct"&&a.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{children:"✓ ¡Correcto!"}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem"},onClick:()=>Le(e),children:"▶"})]}),c==="wrong"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{children:["✗ La respuesta es: ",a.jsx("strong",{children:e.german})]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),c==="revealed"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{children:["👁 La respuesta es: ",a.jsx("strong",{children:e.german})]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),a.jsx("button",{className:"continuar-btn",onClick:()=>n(0),children:"Continuar"})]}),(c==="correct"||c==="wrong")&&a.jsx("div",{className:"grades",children:Xi.map(({n:y,label:S})=>a.jsxs("button",{className:`grade-btn g${y}`,onClick:()=>n(y),children:[a.jsx("span",{className:"grade-num",children:y}),a.jsx("span",{className:"grade-label",children:S})]},y))}),!!c&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:r,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),o&&a.jsx("div",{className:"explanation",children:o})]})]})}function Lp({card:e,onGrade:t,onExplain:n,explaining:r,explanation:l}){const[o,i]=C.useState(""),[s,u]=C.useState(null),c=Te.useRef(null);Te.useEffect(()=>{var v;(v=c.current)==null||v.focus()},[]);const g=(e.example||"").replace("___",e.german),h=()=>{if(!o.trim())return;const v=o.trim().toLowerCase()===e.german.trim().toLowerCase();u(v?"correct":"wrong")},m=()=>{u("revealed"),Le(e)};return a.jsxs("div",{className:"answer-zone",children:[a.jsxs("div",{className:"answer-input-row",children:[a.jsx("input",{ref:c,className:`answer-input ${s==="wrong"?"wrong":s==="correct"?"correct":""}`,value:o,onChange:v=>i(v.target.value),onKeyDown:v=>{v.key==="Enter"&&!s&&h()},placeholder:"Completa el espacio…",disabled:!!s}),a.jsx("button",{className:"answer-check-btn",onClick:h,disabled:!!s||!o.trim(),children:"OK"}),a.jsx("button",{className:"reveal-btn",onClick:m,disabled:!!s,children:"Revelar"})]}),s==="correct"&&a.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["✓ ¡Correcto! — ",g]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),s==="wrong"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["✗ Era: ",a.jsx("strong",{children:e.german})," — ",g]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),s==="revealed"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["👁 ",a.jsx("strong",{children:e.german})," — ",g]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),a.jsx("button",{className:"continuar-btn",onClick:()=>t(0),children:"Continuar"})]}),(s==="correct"||s==="wrong")&&a.jsx("div",{className:"grades",children:Xi.map(({n:v,label:y})=>a.jsxs("button",{className:`grade-btn g${v}`,onClick:()=>t(v),children:[a.jsx("span",{className:"grade-num",children:v}),a.jsx("span",{className:"grade-label",children:y})]},v))}),!!s&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:n,disabled:r,children:r?"Consultando IA…":"✦ Explicar con IA"}),l&&a.jsx("div",{className:"explanation",children:l})]})]})}function Mp({card:e,language:t,onGrade:n,onExplain:r,explaining:l,explanation:o}){const[i,s]=C.useState(null),{articles:u,correct:c}=Fc(e.german,t),g=m=>{i||s(m)},h=m=>i?m===c?"reveal":m===i&&i!==c?"wrong":"":"";return a.jsxs("div",{className:"answer-zone",children:[a.jsx("div",{className:"article-btns",children:u.map(m=>a.jsx("button",{className:`article-btn ${h(m)}`,onClick:()=>g(m),disabled:!!i,children:m},m))}),i&&a.jsxs("div",{className:`answer-feedback ${i===c?"correct":"wrong"}`,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{style:{minWidth:0},children:i===c?`✓ Correcto — ${e.german}`:`✗ Es ${c} — ${e.german}`}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Le(e),children:"▶"})]}),e.note&&a.jsx("div",{className:"card-note",children:e.note}),a.jsx("button",{className:"continuar-btn",onClick:()=>n(i===c?5:1),children:"Continuar"})]}),i&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:r,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),o&&a.jsx("div",{className:"explanation",children:o})]})]})}const gs=["#C8825B","#B23B2E","#5A7A4E","#E0A458","#8A6FA6"];function Dp({count:e,streak:t,onClose:n}){const r=Te.useMemo(()=>Array.from({length:20},(l,o)=>({left:Math.random()*100,delay:Math.random()*.5,duration:1.6+Math.random()*1.3,color:gs[o%gs.length],size:6+Math.random()*6})),[]);return a.jsxs("div",{className:"celebrate-overlay",onClick:n,children:[a.jsx("div",{className:"confetti",children:r.map((l,o)=>a.jsx("span",{className:"confetti-piece",style:{left:`${l.left}%`,background:l.color,width:l.size,height:l.size,animationDelay:`${l.delay}s`,animationDuration:`${l.duration}s`}},o))}),a.jsxs("div",{className:"celebrate-card",onClick:l=>l.stopPropagation(),children:[a.jsx("div",{className:"celebrate-emoji",children:"🎉"}),a.jsx("h2",{className:"celebrate-title",children:"¡Felicitaciones!"}),a.jsx("p",{className:"celebrate-text",children:"Terminaste tus repasos del día."}),a.jsxs("p",{className:"celebrate-count",children:["Repasaste ",a.jsx("strong",{children:e})," ",e===1?"tarjeta":"tarjetas"," hoy."]}),t>0&&a.jsxs("p",{className:"celebrate-streak",children:["🔥 Racha: ",a.jsx("strong",{children:t})," ",t===1?"día":"días"," seguidos"]}),a.jsx("button",{className:"celebrate-btn",onClick:n,children:"Continuar"})]})]})}function Fp({cards:e,onGrade:t,language:n,stats:r}){const[l,o]=C.useState(!1),[i,s]=C.useState(!1),[u,c]=C.useState(null),[g,h]=C.useState(0),[m,v]=C.useState(!1),[y,S]=C.useState(0),[R,p]=C.useState(!1),d=Te.useMemo(()=>{const _=e.filter(b=>b.nextReview<=Date.now());for(let b=_.length-1;b>0;b--){const O=Math.floor(Math.random()*(b+1));[_[b],_[O]]=[_[O],_[b]]}return _},[e.map(_=>_.id+_.nextReview).join(",")]),f=d[0],x=Te.useCallback(()=>{Le(f)},[f]);Te.useEffect(()=>{if(l&&((f==null?void 0:f.cardType)==="type1"||(f==null?void 0:f.cardType)==="type2")){const _=setTimeout(()=>Le(f),350);return()=>clearTimeout(_)}},[l]);const N=_=>{var ae;if(m)return;(ae=window.speechSynthesis)==null||ae.cancel();const b=d.length===1,O=(f==null?void 0:f.cardType)==="type1"||(f==null?void 0:f.cardType)==="type2",I=()=>{t(f.id,vp(f,_)),c(null),h(J=>J+1),S(J=>J+1),b&&p(!0)};O&&l?(v(!0),o(!1),setTimeout(()=>{I(),v(!1)},560)):(I(),o(!1))},z=async()=>{s(!0);try{c(await kp(f))}catch{c("Error al contactar la API.")}s(!1)};if(!e.length)return a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["No hay tarjetas.",a.jsx("br",{}),"Ve a ",a.jsx("strong",{children:"+ Agregar"})," para crear tu primera."]})});if(!d.length)return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["Sin repasos pendientes.",a.jsx("br",{}),"Vuelve mañana — el sistema hace el resto."]})}),R&&a.jsx(Dp,{count:(r==null?void 0:r.todayCount)??y,streak:(r==null?void 0:r.currentStreak)??0,onClose:()=>p(!1)})]});const j=f.cardType||"type1",k=["type4","type5","type6"].includes(j),E=["type1","type2"].includes(j);return a.jsxs("div",{children:[a.jsxs("div",{className:"session-info",children:[a.jsxs("span",{children:["Pendientes: ",a.jsx("strong",{children:d.length})]}),a.jsxs("span",{children:["Total: ",a.jsx("strong",{children:e.length})]})]}),E&&a.jsx("div",{className:"card-scene",onClick:()=>!m&&o(_=>!_),children:a.jsxs("div",{className:`card-inner ${l?"flipped":""}`,children:[a.jsxs("div",{className:"card-face front",children:[j==="type1"&&a.jsx(Np,{card:f}),j==="type2"&&a.jsx(Ep,{card:f})]}),a.jsxs("div",{className:"card-face back",children:[j==="type1"&&a.jsx(Cp,{card:f,onSpeak:x}),j==="type2"&&a.jsx(bp,{card:f})]})]})}),k&&a.jsx("div",{className:"card-scene",children:a.jsxs("div",{className:"card-static",children:[j==="type4"&&a.jsx(zp,{card:f,language:n}),j==="type5"&&a.jsx(_p,{card:f}),j==="type6"&&a.jsx(Tp,{card:f,language:n})]})}),k&&a.jsxs(Te.Fragment,{children:[j==="type4"&&a.jsx(Pp,{card:f,language:n,onGrade:N,onExplain:z,explaining:i,explanation:u}),j==="type5"&&a.jsx(Lp,{card:f,onGrade:N,onExplain:z,explaining:i,explanation:u}),j==="type6"&&a.jsx(Mp,{card:f,language:n,onGrade:N,onExplain:z,explaining:i,explanation:u})]},g),E&&l&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"grades",children:Xi.map(({n:_,label:b})=>a.jsxs("button",{className:`grade-btn g${_}`,onClick:()=>N(_),children:[a.jsx("span",{className:"grade-num",children:_}),a.jsx("span",{className:"grade-label",children:b})]},_))}),a.jsx("button",{className:"explain-btn",onClick:z,disabled:i,children:i?"Consultando IA…":"✦ Explicar con IA"}),u&&a.jsx("div",{className:"explanation",children:u})]})]})}function Rp({onAdd:e,onBulkAdd:t,language:n}){var Ji;const r=Je[n]||Je.de,l=Dc(n),[o,i]=C.useState("single"),[s,u]=C.useState("type1"),[c,g]=C.useState(""),[h,m]=C.useState(""),[v,y]=C.useState(""),[S,R]=C.useState(""),[p,d]=C.useState(""),[f,x]=C.useState(!1),[N,z]=C.useState(null),[j,k]=C.useState(null),[E,_]=C.useState(null),[b,O]=C.useState("file"),[I,ae]=C.useState("file"),[J,Ve]=C.useState(""),[Mt,T]=C.useState(""),[M,D]=C.useState(""),[B,H]=C.useState(null),[ft,qe]=C.useState(!0),En=()=>{!c.trim()||!h.trim()||(e({cardType:s,german:c.trim(),translation:h.trim(),note:v.trim(),example:S.trim(),exampleTranslation:p.trim(),imageUrl:N,audioUrl:j}),g(""),m(""),y(""),z(null),k(null),R(""),d(""),x(!0),setTimeout(()=>x(!1),2e3))},We=async(L,se)=>{const He=L.target.files[0];if(He){_(se);try{const{url:bn}=await Sp(He);se==="image"?z(bn):k(bn)}catch{alert("Error al subir archivo.")}_(null),L.target.value=""}},et=(L,se)=>{const He=se.trim();He&&(L==="image"?(z(He),Ve("")):(k(He),T("")))},Zi=L=>{const se=L==="image"?N:j;!(se&&(se.startsWith("http://")||se.startsWith("https://")))&&se&&jp(se),L==="image"?(z(null),Ve("")):(k(null),T(""))},Ac=()=>{H(null);let L;try{L=JSON.parse(M.trim())}catch{H({ok:!1,msg:"JSON inválido. Revisa la sintaxis."});return}if(!Array.isArray(L)){H({ok:!1,msg:"Debe ser un array [ ... ]."});return}const se=L.filter(He=>{var bn,qi;return((bn=He.german)==null?void 0:bn.trim())&&((qi=He.translation)==null?void 0:qi.trim())});if(!se.length){H({ok:!1,msg:'Ningún objeto tiene "german" y "translation".'});return}t(se,ft),D(""),H({ok:!0,msg:`✓ ${se.length} tarjeta${se.length!==1?"s":""} ${ft?"importada":"agregada"}${se.length!==1?"s":""}.`})};return a.jsxs("div",{className:"add-form",children:[a.jsxs("div",{className:"add-tabs",children:[a.jsx("button",{className:`add-tab ${o==="single"?"active":""}`,onClick:()=>i("single"),children:"Una tarjeta"}),a.jsx("button",{className:`add-tab ${o==="bulk"?"active":""}`,onClick:()=>i("bulk"),children:"Importar JSON"})]}),o==="single"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:l.map(L=>a.jsxs("button",{className:`type-btn ${s===L.id?"active":""}`,onClick:()=>u(L.id),children:[L.name,a.jsx("span",{className:"type-tip",role:"tooltip",children:L.tip})]},L.id))}),a.jsx("div",{className:"type-tip-static",children:(Ji=l.find(L=>L.id===s))==null?void 0:Ji.tip}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:s==="type5"?"Palabra que va en el hueco":r.name}),a.jsx("input",{value:c,onChange:L=>g(L.target.value),placeholder:s==="type5"?r.blankWordPh:r.wordPh})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción"}),a.jsx("input",{value:h,onChange:L=>m(L.target.value),placeholder:"la llave"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Nota (opcional)"}),a.jsx("textarea",{value:v,onChange:L=>y(L.target.value),placeholder:"artículo, ejemplo, truco…"})]}),(s==="type2"||s==="type5")&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:s==="type5"?"Oración con ___ (espacio en blanco)":r.exLabel}),a.jsx("input",{value:S,onChange:L=>R(L.target.value),placeholder:s==="type5"?r.blankPh:r.exPh})]}),s==="type2"&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción del ejemplo"}),a.jsx("input",{value:p,onChange:L=>d(L.target.value),placeholder:"El perro corre rápido."})]})]}),["type1","type5","type6"].includes(s)&&a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Imagen (opcional) —"," ",a.jsx("button",{className:"mode-toggle",onClick:()=>{O(L=>L==="file"?"url":"file"),z(null),Ve("")},children:b==="file"?"usar URL":"subir archivo"})]}),N?a.jsxs("div",{className:"media-preview",children:[a.jsx("img",{src:Ze(N),alt:""}),a.jsx("span",{className:"media-preview-label",children:N.startsWith("http")?"URL externa":N.split("/").pop()}),a.jsx("button",{className:"media-remove",onClick:()=>Zi("image"),children:"×"})]}):b==="file"?a.jsx("div",{className:"media-upload-row",children:a.jsxs("label",{className:"media-upload-btn",children:[E==="image"?a.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir imagen",a.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:L=>We(L,"image"),disabled:!!E})]})}):a.jsxs("div",{className:"url-input-row",children:[a.jsx("input",{className:"url-input",value:J,onChange:L=>Ve(L.target.value),placeholder:"https://upload.wikimedia.org/…",onKeyDown:L=>L.key==="Enter"&&et("image",J)}),a.jsx("button",{className:"url-set-btn",onClick:()=>et("image",J),children:"OK"})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Audio (opcional) —"," ",a.jsx("button",{className:"mode-toggle",onClick:()=>{ae(L=>L==="file"?"url":"file"),k(null),T("")},children:I==="file"?"usar URL":"subir archivo"})]}),j?a.jsxs("div",{className:"media-preview",children:[a.jsx("span",{className:"media-preview-label",children:j.startsWith("http")?"URL externa":j.split("/").pop()}),a.jsx("audio",{src:Ze(j),controls:!0,style:{height:"24px",accentColor:"#cc0000"}}),a.jsx("button",{className:"media-remove",onClick:()=>Zi("audio"),children:"×"})]}):I==="file"?a.jsx("div",{className:"media-upload-row",children:a.jsxs("label",{className:"media-upload-btn",children:[E==="audio"?a.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir audio",a.jsx("input",{type:"file",accept:"audio/*",style:{display:"none"},onChange:L=>We(L,"audio"),disabled:!!E})]})}):a.jsxs("div",{className:"url-input-row",children:[a.jsx("input",{className:"url-input",value:Mt,onChange:L=>T(L.target.value),placeholder:"https://forvo.com/… o link directo a .mp3",onKeyDown:L=>L.key==="Enter"&&et("audio",Mt)}),a.jsx("button",{className:"url-set-btn",onClick:()=>et("audio",Mt),children:"OK"})]})]}),a.jsx("button",{className:"submit-btn",onClick:En,children:"Agregar tarjeta"}),f&&a.jsx("div",{className:"success-msg",children:"✓ Guardada"})]}),o==="bulk"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Array JSON"}),a.jsx("textarea",{className:"bulk-textarea",value:M,onChange:L=>D(L.target.value),placeholder:r.bulkPh})]}),a.jsxs("div",{className:"bulk-schema",children:["Campos: ",a.jsx("code",{children:"german"})," ✦ ",a.jsx("code",{children:"translation"})," ✦ ",a.jsx("code",{children:"note"})," (opcional)"]}),a.jsxs("label",{className:"bulk-replace-row",children:[a.jsx("input",{type:"checkbox",checked:ft,onChange:L=>qe(L.target.checked)}),a.jsx("span",{children:"Reemplazar todo el mazo (desactiva para agregar encima)"})]}),a.jsx("button",{className:"submit-btn",onClick:Ac,children:"Importar"}),B&&a.jsx("div",{className:B.ok?"success-msg":"error-msg",children:B.msg})]})]})}function Op({cards:e,stats:t}){const n=Date.now(),r=864e5,l=Oc(),o=t&&t.day===l?t.todayCount:0,s=t&&t.day&&Ic(t.day,l)<=1?t.currentStreak:0,u=(t==null?void 0:t.longestStreak)??0,c=[{label:"Nuevas",color:"#B4642F",count:0},{label:"Hoy",color:"#C8825B",count:0},{label:"Mañana",color:"#D29E78",count:0},{label:"3–7 días",color:"#DBB596",count:0},{label:"8–30 días",color:"#E2CBB3",count:0},{label:"+30 días",color:"#E8D9C5",count:0}];for(const m of e){const y=(m.nextReview-n)/r;m.repetitions===0?c[0].count++:y<=0?c[1].count++:y<=1?c[2].count++:y<=7?c[3].count++:y<=30?c[4].count++:c[5].count++}const g=Math.max(...c.map(m=>m.count),1),h=e.length;return h?a.jsxs("div",{className:"stats-view",children:[a.jsxs("div",{className:"stats-header",children:[a.jsx("div",{className:"stats-title",children:"Estado del mazo"}),a.jsxs("div",{className:"stats-total",children:[h," tarjeta",h!==1?"s":""," en total"]})]}),a.jsxs("div",{className:"streak-banner",children:[a.jsxs("div",{className:"streak-main",children:[a.jsx("span",{className:"streak-flame",children:"🔥"}),a.jsx("span",{className:"streak-num",children:s}),a.jsxs("span",{className:"streak-unit",children:[s===1?"día":"días"," de racha"]})]}),a.jsxs("div",{className:"streak-sub",children:[a.jsxs("span",{children:["Hoy: ",a.jsx("strong",{children:o})]}),a.jsxs("span",{children:["Récord: ",a.jsx("strong",{children:u})]})]})]}),a.jsx("div",{className:"stats-chart",children:c.map((m,v)=>{const y=g>0?m.count/g*100:0,S=h>0?Math.round(m.count/h*100):0;return a.jsxs("div",{className:"stats-row",children:[a.jsx("div",{className:"stats-row-label",children:m.label}),a.jsx("div",{className:"stats-bar-wrap",children:a.jsx("div",{className:"stats-bar",style:{width:`${y}%`,background:m.color}})}),a.jsxs("div",{className:"stats-row-count",children:[a.jsx("span",{className:"stats-n",children:m.count}),a.jsxs("span",{className:"stats-pct",children:[S,"%"]})]})]},v)})}),a.jsxs("div",{className:"stats-footer",children:[a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#cc0000"},children:c[0].count+c[1].count}),a.jsx("div",{className:"kpi-label",children:"para estudiar hoy"})]}),a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#ffcc00"},children:e.filter(m=>m.repetitions>0&&m.interval>=21).length}),a.jsx("div",{className:"kpi-label",children:"maduras (≥21 días)"})]}),a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#aaa"},children:h>0?(e.reduce((m,v)=>m+v.easiness,0)/h).toFixed(2):"—"}),a.jsx("div",{className:"kpi-label",children:"easiness promedio"})]})]})]}):a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["Sin tarjetas aún.",a.jsx("br",{}),"Ve a ",a.jsx("strong",{children:"+ Agregar"})," para empezar."]})})}function Ip({card:e,onSave:t,onClose:n}){const[r,l]=C.useState(e.imageUrl||""),[o,i]=C.useState(null),[s,u]=C.useState(!1),c=()=>{const g=r.trim();t({...e,imageUrl:g||null}),i("ok"),setTimeout(n,800)};return a.jsx("div",{className:"img-preview-overlay",onClick:n,children:a.jsxs("div",{className:"img-preview-dialog",onClick:g=>g.stopPropagation(),children:[a.jsxs("div",{className:"img-preview-header",children:[a.jsx("div",{className:"img-preview-word",children:e.german}),a.jsx("button",{className:"img-preview-close",onClick:n,children:"×"})]}),a.jsx("div",{className:"img-preview-frame",children:e.imageUrl&&!s?a.jsx("img",{src:Ze(e.imageUrl),alt:"",onError:()=>u(!0)}):a.jsxs("div",{className:"img-preview-broken",children:[a.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),a.jsx("div",{children:s?"Imagen rota":"Sin imagen"})]})}),a.jsxs("div",{className:"img-preview-url-row",children:[a.jsx("input",{className:"img-preview-url-input",value:r,onChange:g=>{l(g.target.value),u(!1),i(null)},placeholder:"https://upload.wikimedia.org/…",onKeyDown:g=>g.key==="Enter"&&c()}),a.jsx("button",{className:"img-preview-save-btn",onClick:c,children:"Guardar"})]}),o==="ok"&&a.jsx("div",{className:"img-preview-status ok",children:"✓ Guardado"})]})})}function Up({card:e,onClose:t}){var o;const n=e.cardType||"type1";(o=e.german.match(/^(der|die|das)/i))!=null&&o[1];const r=e.german.replace(/^(der|die|das)\s+/i,""),l=(e.example||"").replace("___",e.german);return a.jsx("div",{className:"img-preview-overlay",onClick:t,children:a.jsxs("div",{className:"card-preview-dialog",onClick:i=>i.stopPropagation(),children:[a.jsxs("div",{className:"img-preview-header",children:[a.jsxs("div",{className:"img-preview-word",children:[a.jsxs("span",{style:{fontSize:"0.6rem",color:"#555",letterSpacing:"0.1em",textTransform:"uppercase",marginRight:"0.5rem"},children:["Tipo ",n.replace("type","")]}),e.german]}),a.jsx("button",{className:"img-preview-close",onClick:t,children:"×"})]}),a.jsxs("div",{className:"card-preview-side",children:[a.jsx("div",{className:"card-preview-label",children:"Frente"}),n==="type1"&&a.jsx("div",{className:"card-preview-body",children:e.imageUrl?a.jsx("img",{src:Ze(e.imageUrl),alt:"",className:"card-preview-img",onError:i=>i.target.style.display="none"}):a.jsxs("div",{className:"img-preview-broken",children:[a.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),a.jsx("div",{children:"Sin imagen"})]})}),n==="type2"&&a.jsxs("div",{className:"card-preview-body",children:[a.jsx("div",{className:"card-preview-big",children:e.german}),e.example&&a.jsx("div",{className:"card-preview-example",children:e.example})]}),n==="type4"&&a.jsxs("div",{className:"card-preview-body",children:[a.jsx("div",{className:"card-preview-trans",children:e.translation}),e.note&&a.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type5"&&a.jsx("div",{className:"card-preview-body",children:a.jsx("div",{className:"card-preview-example",children:(e.example||"").replace("___","_____")})}),n==="type6"&&a.jsxs("div",{className:"card-preview-body",children:[e.imageUrl&&a.jsx("img",{src:Ze(e.imageUrl),alt:"",className:"card-preview-img",onError:i=>i.target.style.display="none"}),a.jsxs("div",{className:"card-preview-big",style:{color:"#888"},children:["___ ",r]})]})]}),a.jsxs("div",{className:"card-preview-side",children:[a.jsx("div",{className:"card-preview-label",children:"Dorso"}),a.jsxs("div",{className:"card-preview-body",children:[(n==="type1"||n==="type6")&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-big",children:e.german}),e.note&&a.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type2"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-trans",children:e.translation}),e.exampleTranslation&&a.jsxs("div",{className:"card-preview-example",style:{color:"#666"},children:['"',e.exampleTranslation,'"']})]}),(n==="type4"||n==="type5")&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-big",children:e.german}),n==="type5"&&l&&a.jsx("div",{className:"card-preview-example",children:l})]})]})]}),a.jsx("button",{className:"continuar-btn",style:{alignSelf:"center"},onClick:t,children:"Cerrar"})]})})}function Ap({card:e,onSave:t,onClose:n,language:r}){var j;const l=Je[r]||Je.de,o=Dc(r),[i,s]=C.useState(e.cardType||"type1"),[u,c]=C.useState(e.german),[g,h]=C.useState(e.translation),[m,v]=C.useState(e.note||""),[y,S]=C.useState(e.example||""),[R,p]=C.useState(e.exampleTranslation||""),[d,f]=C.useState(e.imageUrl||""),[x,N]=C.useState(e.audioUrl||""),z=()=>{!u.trim()||!g.trim()||t({...e,cardType:i,german:u.trim(),translation:g.trim(),note:m.trim(),example:y.trim(),exampleTranslation:R.trim(),imageUrl:d.trim()||null,audioUrl:x.trim()||null})};return a.jsx("div",{className:"confirm-overlay",onClick:n,children:a.jsxs("div",{className:"edit-dialog",onClick:k=>k.stopPropagation(),children:[a.jsx("div",{className:"confirm-title",children:"Editar tarjeta"}),a.jsxs("div",{className:"edit-fields",children:[a.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:o.map(k=>a.jsxs("button",{className:`type-btn ${i===k.id?"active":""}`,onClick:()=>s(k.id),children:[k.name,a.jsx("span",{className:"type-tip",role:"tooltip",children:k.tip})]},k.id))}),a.jsx("div",{className:"type-tip-static",children:(j=o.find(k=>k.id===i))==null?void 0:j.tip}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:i==="type5"?"Palabra que va en el hueco":l.name}),a.jsx("input",{value:u,onChange:k=>c(k.target.value),placeholder:i==="type5"?l.blankWordPh:""})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción"}),a.jsx("input",{value:g,onChange:k=>h(k.target.value)})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Nota"}),a.jsx("input",{value:m,onChange:k=>v(k.target.value),placeholder:"artículo, truco…"})]}),(i==="type2"||i==="type5")&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:i==="type5"?"Oración con ___ (espacio en blanco)":l.exLabel}),a.jsx("input",{value:y,onChange:k=>S(k.target.value),placeholder:i==="type5"?l.blankPh:l.exPh})]}),i==="type2"&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción del ejemplo"}),a.jsx("input",{value:R,onChange:k=>p(k.target.value)})]})]}),["type1","type5","type6"].includes(i)&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"URL imagen"}),a.jsx("input",{value:d,onChange:k=>f(k.target.value),placeholder:"https://…"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"URL audio"}),a.jsx("input",{value:x,onChange:k=>N(k.target.value),placeholder:"https://…"})]})]}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"confirm-cancel",onClick:n,children:"Cancelar"}),a.jsx("button",{className:"confirm-ok",onClick:z,children:"Guardar"})]})]})})}function $p({card:e,onClick:t}){const[n,r]=C.useState(!1);return Te.useEffect(()=>{r(!1)},[e.imageUrl]),!e.imageUrl||n?a.jsx("button",{className:"preview-btn",onClick:t,title:"Sin imagen — click para agregar",children:a.jsx("div",{className:"preview-thumb-empty",children:"+"})}):a.jsx("button",{className:"preview-btn",onClick:t,title:"Vista previa de imagen",children:a.jsx("img",{className:"preview-thumb",src:Ze(e.imageUrl),alt:"",onError:()=>r(!0)})})}function Bp({cards:e,onDelete:t,onDeleteAll:n,onEdit:r,language:l}){const[o,i]=C.useState(!1),s=()=>{const E=JSON.stringify(e,null,2),_=new Blob([E],{type:"application/json"}),b=URL.createObjectURL(_),O=document.createElement("a"),I=new Date().toISOString().slice(0,10);O.href=b,O.download=`deutschkarten-backup-${I}.json`,O.click(),URL.revokeObjectURL(b)},[u,c]=C.useState(""),[g,h]=C.useState(null),[m,v]=C.useState(null),[y,S]=C.useState(null),[R,p]=C.useState(null),d=Te.useRef(null),[f,x]=C.useState("all"),N=E=>{d.current&&clearTimeout(d.current),p(E),d.current=setTimeout(()=>p(null),2200)},z=e.filter(E=>E.cardType==="type1"||E.cardType==="type5"||E.cardType==="type6"),j=[...e].sort((E,_)=>E.nextReview-_.nextReview).filter(E=>{if(u.trim()){const _=u.toLowerCase();if(!E.german.toLowerCase().includes(_)&&!E.translation.toLowerCase().includes(_)&&!(E.note||"").toLowerCase().includes(_))return!1}return f==="broken"?(E.cardType==="type1"||E.cardType==="type5"||E.cardType==="type6")&&!E.imageUrl:f==="ok"?(E.cardType==="type1"||E.cardType==="type5"||E.cardType==="type6")&&!!E.imageUrl:!0}),k=z.filter(E=>!E.imageUrl).length;return a.jsxs("div",{children:[a.jsxs("div",{className:"list-header",children:[a.jsx("div",{className:"list-title",children:"Todas las tarjetas"}),a.jsxs("div",{className:"list-header-right",children:[a.jsxs("div",{className:"list-count",children:[e.length," total"]}),e.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"export-btn",onClick:s,title:"Exportar backup JSON",children:"↓ Backup"}),a.jsx("button",{className:"delete-all-btn",onClick:()=>i(!0),children:"Borrar todo"})]})]})]}),a.jsxs("div",{className:"list-search-wrap",children:[a.jsx("input",{className:"list-search",value:u,onChange:E=>c(E.target.value),placeholder:"Buscar por palabra, traducción o nota…"}),u&&a.jsx("button",{className:"list-search-clear",onClick:()=>c(""),children:"×"})]}),a.jsxs("div",{className:"list-filter-row",children:[a.jsx("button",{className:`list-filter-btn ${f==="all"?"active":""}`,onClick:()=>x("all"),children:"Todas"}),a.jsxs("button",{className:`list-filter-btn ${f==="broken"?"active":""}`,onClick:()=>x("broken"),children:["Sin imagen ",k>0&&`(${k})`]}),a.jsx("button",{className:`list-filter-btn ${f==="ok"?"active":""}`,onClick:()=>x("ok"),children:"Con imagen"})]}),o&&a.jsx("div",{className:"confirm-overlay",onClick:()=>i(!1),children:a.jsxs("div",{className:"confirm-dialog",onClick:E=>E.stopPropagation(),children:[a.jsx("div",{className:"confirm-title",children:"¿Borrar todo el mazo?"}),a.jsxs("div",{className:"confirm-body",children:["Se eliminarán ",a.jsxs("strong",{children:[e.length," tarjeta",e.length!==1?"s":""]})," y todo su progreso. Esta acción no se puede deshacer."]}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"confirm-cancel",onClick:()=>i(!1),children:"Cancelar"}),a.jsx("button",{className:"confirm-ok",onClick:()=>{n(),i(!1)},children:"Sí, borrar todo"})]})]})}),g&&a.jsx(Ap,{card:g,language:l,onSave:E=>{r(E),h(null),N(`✓ "${E.german}" actualizado`)},onClose:()=>h(null)}),m&&a.jsx(Ip,{card:m,onSave:E=>{r(E),v(E),N("✓ Imagen actualizada")},onClose:()=>v(null)}),y&&a.jsx(Up,{card:y,onClose:()=>S(null)}),a.jsxs("div",{className:"card-list",children:[j.length===0&&a.jsx("div",{className:"list-empty",children:u?`Sin resultados para "${u}"`:"Sin tarjetas en este filtro"}),j.map(E=>{const _=E.nextReview<=Date.now(),b=E.cardType==="type1"||E.cardType==="type5"||E.cardType==="type6";return a.jsxs("div",{className:"list-item",children:[b?a.jsx($p,{card:E,onClick:()=>v(E)}):a.jsx("div",{style:{width:"28px"}}),a.jsxs("div",{className:"li-main",children:[a.jsx("div",{className:"li-german",children:E.german}),a.jsx("div",{className:"li-trans",children:E.translation}),E.note&&a.jsx("div",{className:"li-note",children:E.note})]}),a.jsx("div",{className:`li-next ${_?"due":""}`,children:yp(E.nextReview)}),a.jsxs("div",{className:"li-actions",children:[a.jsx("button",{className:"preview-card-btn",onClick:()=>S(E),title:"Vista previa",children:a.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:[a.jsx("path",{d:"M6.5 1C3.5 1 1 4 1 5C1 6 3.5 9 6.5 9C9.5 9 12 6 12 5C12 4 9.5 1 6.5 1Z",stroke:"currentColor",strokeWidth:"1.1",fill:"none"}),a.jsx("circle",{cx:"6.5",cy:"5",r:"1.5",stroke:"currentColor",strokeWidth:"1.1",fill:"none"})]})}),a.jsx("button",{className:"edit-btn",onClick:()=>h(E),children:"✎"}),a.jsx("button",{className:"delete-btn",onClick:()=>t(E.id),children:"×"})]})]},E.id)})]})]})}function Vp({onAuth:e}){const[t,n]=C.useState(""),[r,l]=C.useState(""),[o,i]=C.useState(null),[s,u]=C.useState(!1);async function c(g){g.preventDefault(),i(null),u(!0);try{const h=await Yt("/auth/login",{method:"POST",body:JSON.stringify({username:t,password:r})});h.token&&xp(h.token),e(h.username,h.language||"de")}catch(h){i(h.message)}finally{u(!1)}}return a.jsxs("div",{className:"auth-screen",children:[a.jsxs("style",{children:[ei,Uc]}),a.jsx("div",{className:"noise"}),a.jsxs("div",{className:"auth-card",children:[a.jsx("div",{className:"auth-logo",children:a.jsxs("span",{className:"logo-text",children:["Sprachen",a.jsx("span",{children:"Karten"})]})}),a.jsx("p",{className:"auth-tagline",children:"Tarjetas de idiomas"}),a.jsxs("form",{className:"auth-form",onSubmit:c,children:[a.jsx("input",{className:"auth-input",type:"text",placeholder:"Usuario",value:t,autoComplete:"username",onChange:g=>n(g.target.value),required:!0}),a.jsx("input",{className:"auth-input",type:"password",placeholder:"Contraseña",value:r,autoComplete:"current-password",onChange:g=>l(g.target.value),required:!0}),o&&a.jsx("p",{className:"auth-error",children:o}),a.jsx("button",{className:"auth-btn",type:"submit",disabled:s,children:s?"…":"Entrar"})]})]})]})}function Wp(){const[e,t]=C.useState(null),[n,r]=C.useState("de"),[l,o]=C.useState([]),[i,s]=C.useState(null),[u,c]=C.useState(!1),[g,h]=C.useState("study"),[m,v]=C.useState(!1);C.useEffect(()=>{gp(n)},[n]),C.useEffect(()=>{if(!Rc()){t(!1);return}(async()=>{try{const b=await Yt("/auth/me"),O=await fs(),I=await ms().catch(()=>null);t(b.username),r(b.language||"de"),o(O),s(I),c(!0)}catch{ds(),t(!1)}})()},[]),C.useEffect(()=>{if(!e||!u)return;const b=setTimeout(()=>{ps(l).catch(()=>{})},800);return()=>clearTimeout(b)},[l,e,u]),C.useEffect(()=>{if(!e||!u||!i)return;const b=setTimeout(()=>{hs(i).catch(()=>{})},800);return()=>clearTimeout(b)},[i,e,u]);const y=C.useRef(l);C.useEffect(()=>{y.current=l},[l]);const S=C.useRef(e);C.useEffect(()=>{S.current=e},[e]);const R=C.useRef(u);C.useEffect(()=>{R.current=u},[u]);const p=C.useRef(i);C.useEffect(()=>{p.current=i},[i]),C.useEffect(()=>{const b=()=>{if(!S.current||!R.current)return;const O=y.current,I=O.length===0?"?allowEmpty=true":"";fetch(`${Sn}/cards${I}`,{method:"PUT",headers:{"Content-Type":"application/json",...fr()},body:JSON.stringify(O),keepalive:!0}),p.current&&fetch(`${Sn}/stats`,{method:"PUT",headers:{"Content-Type":"application/json",...fr()},body:JSON.stringify(p.current),keepalive:!0})};return window.addEventListener("beforeunload",b),()=>window.removeEventListener("beforeunload",b)},[]);async function d(){u&&(await ps(l).catch(()=>{}),i&&await hs(i).catch(()=>{})),ds(),c(!1),t(!1),o([]),s(null)}async function f(b,O){c(!1),t(b),r(O||"de");try{const I=await fs(),ae=await ms().catch(()=>null);o(I),s(ae),c(!0)}catch{o([])}}const x=C.useCallback(b=>{const O={id:Date.now().toString(),cardType:b.cardType||"type1",german:b.german,translation:b.translation,note:b.note||"",example:b.example||"",exampleTranslation:b.exampleTranslation||"",imageUrl:b.imageUrl||null,audioUrl:b.audioUrl||null,repetitions:0,easiness:2.5,interval:0,nextReview:Date.now(),lastGrade:null};o(I=>[...I,O])},[]),N=C.useCallback((b,O)=>{o(I=>I.map(ae=>ae.id===b?{...ae,...O}:ae)),s(I=>wp(I))},[]),z=C.useCallback(b=>{o(O=>O.filter(I=>I.id!==b))},[]),j=C.useCallback(()=>{o([])},[]),k=C.useCallback(b=>{o(O=>O.map(I=>I.id===b.id?b:I))},[]),E=C.useCallback((b,O=!1)=>{const I=Date.now(),ae=b.map((J,Ve)=>({id:(I+Ve).toString(),german:J.german.trim(),translation:J.translation.trim(),note:(J.note||"").trim(),cardType:J.cardType||"type1",imageUrl:J.imageUrl||null,audioUrl:J.audioUrl||null,example:J.example||"",exampleTranslation:J.exampleTranslation||"",repetitions:0,easiness:2.5,interval:0,nextReview:I,lastGrade:null}));o(J=>O?ae:[...J,...ae])},[]);if(e===null)return a.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#111111",color:"#888",fontFamily:"'DM Mono', monospace"},children:[a.jsx("style",{children:ei}),"Cargando…"]});if(e===!1)return a.jsx(Vp,{onAuth:f});const _=[{id:"study",label:"Repasar"},{id:"add",label:"+ Agregar"},{id:"list",label:"Lista"},{id:"stats",label:"Estado"}];return a.jsxs(a.Fragment,{children:[a.jsxs("style",{children:[ei,Uc]}),a.jsx("div",{className:"noise"}),a.jsxs("div",{className:"app",children:[a.jsxs("header",{className:"header",children:[a.jsxs("div",{className:"logo",children:[n==="fr"?a.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{width:"9.33",height:"19",x:"0",fill:"#002395"}),a.jsx("rect",{width:"9.34",height:"19",x:"9.33",fill:"#fff"}),a.jsx("rect",{width:"9.33",height:"19",x:"18.67",fill:"#ED2939"})]}):a.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{width:"28",height:"6.33",y:"0",fill:"#000"}),a.jsx("rect",{width:"28",height:"6.34",y:"6.33",fill:"#D00"}),a.jsx("rect",{width:"28",height:"6.33",y:"12.67",fill:"#FFCE00"})]}),a.jsx("div",{className:"logo-text",children:n==="fr"?a.jsxs(a.Fragment,{children:["Français",a.jsx("span",{children:"Cartes"})]}):a.jsxs(a.Fragment,{children:["Deutsch",a.jsx("span",{children:"Karten"})]})})]}),a.jsxs("nav",{className:"nav",children:[_.map(b=>a.jsx("button",{className:`nav-btn ${g===b.id?"active":""}`,onClick:()=>h(b.id),children:b.label},b.id)),a.jsxs("button",{className:"nav-btn",onClick:d,title:`Sesión: ${e}`,style:{marginLeft:"auto",opacity:.6},children:["↩ ",e]})]}),a.jsx("button",{className:"hamburger-btn",onClick:()=>v(b=>!b),"aria-label":"Menú","aria-expanded":m,children:m?"✕":"☰"}),m&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"menu-backdrop",onClick:()=>v(!1)}),a.jsxs("div",{className:"menu-panel",children:[_.map(b=>a.jsx("button",{className:`menu-item ${g===b.id?"active":""}`,onClick:()=>{h(b.id),v(!1)},children:b.label},b.id)),a.jsxs("button",{className:"menu-item menu-logout",onClick:()=>{v(!1),d()},children:["↩ ",e]})]})]})]}),g==="study"&&a.jsx(Fp,{cards:l,onGrade:N,onUpdateCards:o,language:n,stats:i}),g==="add"&&a.jsx(Rp,{onAdd:b=>{x(b),h("study")},onBulkAdd:(b,O)=>{E(b,O),h("list")},language:n}),g==="list"&&a.jsx(Bp,{cards:l,onDelete:z,onDeleteAll:j,onEdit:k,language:n}),g==="stats"&&a.jsx(Op,{cards:l,stats:i})]})]})}Pc(document.getElementById("root")).render(a.jsx(C.StrictMode,{children:a.jsx(Wp,{})}));
