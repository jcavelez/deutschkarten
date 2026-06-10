(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function Wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var js={exports:{}},wl={},Ss={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hr=Symbol.for("react.element"),Hc=Symbol.for("react.portal"),Qc=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),Gc=Symbol.for("react.provider"),Xc=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),qc=Symbol.for("react.memo"),ed=Symbol.for("react.lazy"),ra=Symbol.iterator;function td(e){return e===null||typeof e!="object"?null:(e=ra&&e[ra]||e["@@iterator"],typeof e=="function"?e:null)}var Ns={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cs=Object.assign,bs={};function Nn(e,t,n){this.props=e,this.context=t,this.refs=bs,this.updater=n||Ns}Nn.prototype.isReactComponent={};Nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Es(){}Es.prototype=Nn.prototype;function ri(e,t,n){this.props=e,this.context=t,this.refs=bs,this.updater=n||Ns}var li=ri.prototype=new Es;li.constructor=ri;Cs(li,Nn.prototype);li.isPureReactComponent=!0;var la=Array.isArray,zs=Object.prototype.hasOwnProperty,oi={current:null},_s={key:!0,ref:!0,__self:!0,__source:!0};function Ts(e,t,n){var r,l={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)zs.call(t,r)&&!_s.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:hr,type:e,key:o,ref:a,props:l,_owner:oi.current}}function nd(e,t){return{$$typeof:hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ii(e){return typeof e=="object"&&e!==null&&e.$$typeof===hr}function rd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oa=/\/+/g;function Fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rd(""+e.key):t.toString(36)}function Or(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case hr:case Hc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Fl(a,0):r,la(l)?(n="",e!=null&&(n=e.replace(oa,"$&/")+"/"),Or(l,t,n,"",function(c){return c})):l!=null&&(ii(l)&&(l=nd(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(oa,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",la(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Fl(o,s);a+=Or(o,t,n,u,l)}else if(u=td(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Fl(o,s++),a+=Or(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function wr(e,t,n){if(e==null)return e;var r=[],l=0;return Or(e,r,"","",function(o){return t.call(n,o,l++)}),r}function ld(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Ir={transition:null},od={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:oi};function Ps(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:wr,forEach:function(e,t,n){wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wr(e,function(){t++}),t},toArray:function(e){return wr(e,function(t){return t})||[]},only:function(e){if(!ii(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Nn;O.Fragment=Qc;O.Profiler=Yc;O.PureComponent=ri;O.StrictMode=Kc;O.Suspense=Jc;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=od;O.act=Ps;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cs({},e.props),l=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=oi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)zs.call(t,u)&&!_s.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:hr,type:e.type,key:l,ref:o,props:r,_owner:a}};O.createContext=function(e){return e={$$typeof:Xc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gc,_context:e},e.Consumer=e};O.createElement=Ts;O.createFactory=function(e){var t=Ts.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Zc,render:e}};O.isValidElement=ii;O.lazy=function(e){return{$$typeof:ed,_payload:{_status:-1,_result:e},_init:ld}};O.memo=function(e,t){return{$$typeof:qc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};O.unstable_act=Ps;O.useCallback=function(e,t){return ve.current.useCallback(e,t)};O.useContext=function(e){return ve.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};O.useEffect=function(e,t){return ve.current.useEffect(e,t)};O.useId=function(){return ve.current.useId()};O.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ve.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};O.useRef=function(e){return ve.current.useRef(e)};O.useState=function(e){return ve.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ve.current.useTransition()};O.version="18.3.1";Ss.exports=O;var b=Ss.exports;const Le=Wc(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id=b,ad=Symbol.for("react.element"),sd=Symbol.for("react.fragment"),ud=Object.prototype.hasOwnProperty,cd=id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dd={key:!0,ref:!0,__self:!0,__source:!0};function Ls(e,t,n){var r,l={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)ud.call(t,r)&&!dd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:ad,type:e,key:o,ref:a,props:l,_owner:cd.current}}wl.Fragment=sd;wl.jsx=Ls;wl.jsxs=Ls;js.exports=wl;var i=js.exports,Ms={exports:{}},ze={},Ds={exports:{}},Rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var R=E.length;E.push(L);e:for(;0<R;){var W=R-1>>>1,K=E[W];if(0<l(K,L))E[W]=L,E[R]=K,R=W;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],R=E.pop();if(R!==L){E[0]=R;e:for(var W=0,K=E.length,pt=K>>>1;W<pt;){var et=2*(W+1)-1,En=E[et],Qe=et+1,tt=E[Qe];if(0>l(En,R))Qe<K&&0>l(tt,En)?(E[W]=tt,E[Qe]=R,W=Qe):(E[W]=En,E[et]=R,W=et);else if(Qe<K&&0>l(tt,R))E[W]=tt,E[Qe]=R,W=Qe;else break e}}return L}function l(E,L){var R=E.sortIndex-L.sortIndex;return R!==0?R:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],h=1,g=null,m=3,v=!1,w=!1,N=!1,F=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=E)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function y(E){if(N=!1,p(E),!w)if(n(u)!==null)w=!0,$(z);else{var L=n(c);L!==null&&te(y,L.startTime-E)}}function z(E,L){w=!1,N&&(N=!1,f(j),j=-1),v=!0;var R=m;try{for(p(L),g=n(u);g!==null&&(!(g.expirationTime>L)||E&&!V());){var W=g.callback;if(typeof W=="function"){g.callback=null,m=g.priorityLevel;var K=W(g.expirationTime<=L);L=e.unstable_now(),typeof K=="function"?g.callback=K:g===n(u)&&r(u),p(L)}else r(u);g=n(u)}if(g!==null)var pt=!0;else{var et=n(c);et!==null&&te(y,et.startTime-L),pt=!1}return pt}finally{g=null,m=R,v=!1}}var k=!1,x=null,j=-1,C=5,T=-1;function V(){return!(e.unstable_now()-T<C)}function P(){if(x!==null){var E=e.unstable_now();T=E;var L=!0;try{L=x(!0,E)}finally{L?M():(k=!1,x=null)}}else k=!1}var M;if(typeof d=="function")M=function(){d(P)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,le=I.port2;I.port1.onmessage=P,M=function(){le.postMessage(null)}}else M=function(){F(P,0)};function $(E){x=E,k||(k=!0,M())}function te(E,L){j=F(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,$(z))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var R=m;m=L;try{return E()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=m;m=E;try{return L()}finally{m=R}},e.unstable_scheduleCallback=function(E,L,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,E){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=R+K,E={id:h++,callback:L,priorityLevel:E,startTime:R,expirationTime:K,sortIndex:-1},R>W?(E.sortIndex=R,t(c,E),n(u)===null&&E===n(c)&&(N?(f(j),j=-1):N=!0,te(y,R-W))):(E.sortIndex=K,t(u,E),w||v||(w=!0,$(z))),E},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(E){var L=m;return function(){var R=m;m=L;try{return E.apply(this,arguments)}finally{m=R}}}})(Rs);Ds.exports=Rs;var fd=Ds.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=b,Ee=fd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fs=new Set,Xn={};function Qt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Xn[e]=t,e=0;e<t.length;e++)Fs.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),so=Object.prototype.hasOwnProperty,md=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},aa={};function hd(e){return so.call(aa,e)?!0:so.call(ia,e)?!1:md.test(e)?aa[e]=!0:(ia[e]=!0,!1)}function gd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vd(e,t,n,r){if(t===null||typeof t>"u"||gd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,l,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var ai=/[\-:]([a-z])/g;function si(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ai,si);ue[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ai,si);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ai,si);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function ui(e,t,n,r){var l=ue.hasOwnProperty(t)?ue[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vd(t,n,l,r)&&(n=null),r||l===null?hd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kr=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),ci=Symbol.for("react.strict_mode"),uo=Symbol.for("react.profiler"),Os=Symbol.for("react.provider"),Is=Symbol.for("react.context"),di=Symbol.for("react.forward_ref"),co=Symbol.for("react.suspense"),fo=Symbol.for("react.suspense_list"),fi=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Us=Symbol.for("react.offscreen"),sa=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Ol;function On(e){if(Ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ol=t&&t[1]||""}return`
`+Ol+e}var Il=!1;function Ul(e,t){if(!e||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),a=l.length-1,s=o.length-1;1<=a&&0<=s&&l[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==o[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?On(e):""}function yd(e){switch(e.tag){case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function po(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Xt:return"Portal";case uo:return"Profiler";case ci:return"StrictMode";case co:return"Suspense";case fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Is:return(e.displayName||"Context")+".Consumer";case Os:return(e._context.displayName||"Context")+".Provider";case di:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fi:return t=e.displayName||null,t!==null?t:po(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return po(e(t))}catch{}}return null}function xd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return po(t);case 8:return t===ci?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function As(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wd(e){var t=As(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=wd(e))}function $s(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=As(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mo(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ua(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bs(e,t){t=t.checked,t!=null&&ui(e,"checked",t,!1)}function ho(e,t){Bs(e,t);var n=_t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?go(e,t.type,n):t.hasOwnProperty("defaultValue")&&go(e,t.type,_t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ca(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function go(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function vo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(In(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_t(n)}}function Vs(e,t){var n=_t(t.value),r=_t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ws(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ws(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,Hs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys($n).forEach(function(e){kd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$n[t]=$n[e]})});function Qs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$n.hasOwnProperty(e)&&$n[e]?(""+t).trim():t+"px"}function Ks(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Qs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var jd=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(e,t){if(t){if(jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function wo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ko=null;function pi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jo=null,cn=null,dn=null;function pa(e){if(e=yr(e)){if(typeof jo!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Cl(t),jo(e.stateNode,e.type,t))}}function Ys(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Gs(){if(cn){var e=cn,t=dn;if(dn=cn=null,pa(e),t)for(e=0;e<t.length;e++)pa(t[e])}}function Xs(e,t){return e(t)}function Zs(){}var Al=!1;function Js(e,t,n){if(Al)return e(t,n);Al=!0;try{return Xs(e,t,n)}finally{Al=!1,(cn!==null||dn!==null)&&(Zs(),Gs())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var So=!1;if(at)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){So=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{So=!1}function Sd(e,t,n,r,l,o,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Bn=!1,Xr=null,Zr=!1,No=null,Nd={onError:function(e){Bn=!0,Xr=e}};function Cd(e,t,n,r,l,o,a,s,u){Bn=!1,Xr=null,Sd.apply(Nd,arguments)}function bd(e,t,n,r,l,o,a,s,u){if(Cd.apply(this,arguments),Bn){if(Bn){var c=Xr;Bn=!1,Xr=null}else throw Error(S(198));Zr||(Zr=!0,No=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ma(e){if(Kt(e)!==e)throw Error(S(188))}function Ed(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ma(l),e;if(o===r)return ma(l),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=o;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=o;break}if(s===r){a=!0,r=l,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=l;break}if(s===r){a=!0,r=o,n=l;break}s=s.sibling}if(!a)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function eu(e){return e=Ed(e),e!==null?tu(e):null}function tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tu(e);if(t!==null)return t;e=e.sibling}return null}var nu=Ee.unstable_scheduleCallback,ha=Ee.unstable_cancelCallback,zd=Ee.unstable_shouldYield,_d=Ee.unstable_requestPaint,q=Ee.unstable_now,Td=Ee.unstable_getCurrentPriorityLevel,mi=Ee.unstable_ImmediatePriority,ru=Ee.unstable_UserBlockingPriority,Jr=Ee.unstable_NormalPriority,Pd=Ee.unstable_LowPriority,lu=Ee.unstable_IdlePriority,kl=null,Ze=null;function Ld(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Rd,Md=Math.log,Dd=Math.LN2;function Rd(e){return e>>>=0,e===0?32:31-(Md(e)/Dd|0)|0}var Nr=64,Cr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=Un(s):(o&=a,o!==0&&(r=Un(o)))}else a=n&~l,a!==0?r=Un(a):o!==0&&(r=Un(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),l=1<<n,r|=e[n],t&=~l;return r}function Fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ve(o),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=Fd(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ou(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Id(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ve(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function hi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var A=0;function iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var au,gi,su,uu,cu,bo=!1,br=[],kt=null,jt=null,St=null,qn=new Map,er=new Map,vt=[],Ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ga(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function Pn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=yr(t),t!==null&&gi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ad(e,t,n,r,l){switch(t){case"focusin":return kt=Pn(kt,e,t,n,r,l),!0;case"dragenter":return jt=Pn(jt,e,t,n,r,l),!0;case"mouseover":return St=Pn(St,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return qn.set(o,Pn(qn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,er.set(o,Pn(er.get(o)||null,e,t,n,r,l)),!0}return!1}function du(e){var t=Ft(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=qs(n),t!==null){e.blockedOn=t,cu(e.priority,function(){su(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ko=r,n.target.dispatchEvent(r),ko=null}else return t=yr(n),t!==null&&gi(t),e.blockedOn=n,!1;t.shift()}return!0}function va(e,t,n){Ur(e)&&n.delete(t)}function $d(){bo=!1,kt!==null&&Ur(kt)&&(kt=null),jt!==null&&Ur(jt)&&(jt=null),St!==null&&Ur(St)&&(St=null),qn.forEach(va),er.forEach(va)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,bo||(bo=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,$d)))}function tr(e){function t(l){return Ln(l,e)}if(0<br.length){Ln(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&Ln(kt,e),jt!==null&&Ln(jt,e),St!==null&&Ln(St,e),qn.forEach(t),er.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)du(n),n.blockedOn===null&&vt.shift()}var fn=ft.ReactCurrentBatchConfig,el=!0;function Bd(e,t,n,r){var l=A,o=fn.transition;fn.transition=null;try{A=1,vi(e,t,n,r)}finally{A=l,fn.transition=o}}function Vd(e,t,n,r){var l=A,o=fn.transition;fn.transition=null;try{A=4,vi(e,t,n,r)}finally{A=l,fn.transition=o}}function vi(e,t,n,r){if(el){var l=Eo(e,t,n,r);if(l===null)Zl(e,t,r,tl,n),ga(e,r);else if(Ad(l,e,t,n,r))r.stopPropagation();else if(ga(e,r),t&4&&-1<Ud.indexOf(e)){for(;l!==null;){var o=yr(l);if(o!==null&&au(o),o=Eo(e,t,n,r),o===null&&Zl(e,t,r,tl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var tl=null;function Eo(e,t,n,r){if(tl=null,e=pi(r),e=Ft(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return tl=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Td()){case mi:return 1;case ru:return 4;case Jr:case Pd:return 16;case lu:return 536870912;default:return 16}default:return 16}}var xt=null,yi=null,Ar=null;function pu(){if(Ar)return Ar;var e,t=yi,n=t.length,r,l="value"in xt?xt.value:xt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[o-r];r++);return Ar=l.slice(e,1<r?1-r:void 0)}function $r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function ya(){return!1}function _e(e){function t(n,r,l,o,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Er:ya,this.isPropagationStopped=ya,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=_e(Cn),vr=Z({},Cn,{view:0,detail:0}),Wd=_e(vr),Bl,Vl,Mn,jl=Z({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?(Bl=e.screenX-Mn.screenX,Vl=e.screenY-Mn.screenY):Vl=Bl=0,Mn=e),Bl)},movementY:function(e){return"movementY"in e?e.movementY:Vl}}),xa=_e(jl),Hd=Z({},jl,{dataTransfer:0}),Qd=_e(Hd),Kd=Z({},vr,{relatedTarget:0}),Wl=_e(Kd),Yd=Z({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=_e(Yd),Xd=Z({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zd=_e(Xd),Jd=Z({},Cn,{data:0}),wa=_e(Jd),qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ef={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tf[e])?!!t[e]:!1}function wi(){return nf}var rf=Z({},vr,{key:function(e){if(e.key){var t=qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ef[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wi,charCode:function(e){return e.type==="keypress"?$r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lf=_e(rf),of=Z({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ka=_e(of),af=Z({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wi}),sf=_e(af),uf=Z({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cf=_e(uf),df=Z({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ff=_e(df),pf=[9,13,27,32],ki=at&&"CompositionEvent"in window,Vn=null;at&&"documentMode"in document&&(Vn=document.documentMode);var mf=at&&"TextEvent"in window&&!Vn,mu=at&&(!ki||Vn&&8<Vn&&11>=Vn),ja=" ",Sa=!1;function hu(e,t){switch(e){case"keyup":return pf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function hf(e,t){switch(e){case"compositionend":return gu(t);case"keypress":return t.which!==32?null:(Sa=!0,ja);case"textInput":return e=t.data,e===ja&&Sa?null:e;default:return null}}function gf(e,t){if(Jt)return e==="compositionend"||!ki&&hu(e,t)?(e=pu(),Ar=yi=xt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mu&&t.locale!=="ko"?null:t.data;default:return null}}var vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vf[e.type]:t==="textarea"}function vu(e,t,n,r){Ys(r),t=nl(t,"onChange"),0<t.length&&(n=new xi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,nr=null;function yf(e){zu(e,0)}function Sl(e){var t=tn(e);if($s(t))return e}function xf(e,t){if(e==="change")return t}var yu=!1;if(at){var Hl;if(at){var Ql="oninput"in document;if(!Ql){var Ca=document.createElement("div");Ca.setAttribute("oninput","return;"),Ql=typeof Ca.oninput=="function"}Hl=Ql}else Hl=!1;yu=Hl&&(!document.documentMode||9<document.documentMode)}function ba(){Wn&&(Wn.detachEvent("onpropertychange",xu),nr=Wn=null)}function xu(e){if(e.propertyName==="value"&&Sl(nr)){var t=[];vu(t,nr,e,pi(e)),Js(yf,t)}}function wf(e,t,n){e==="focusin"?(ba(),Wn=t,nr=n,Wn.attachEvent("onpropertychange",xu)):e==="focusout"&&ba()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(nr)}function jf(e,t){if(e==="click")return Sl(t)}function Sf(e,t){if(e==="input"||e==="change")return Sl(t)}function Nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:Nf;function rr(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!so.call(t,l)||!He(e[l],t[l]))return!1}return!0}function Ea(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function za(e,t){var n=Ea(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ea(n)}}function wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ku(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cf(e){var t=ku(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wu(n.ownerDocument.documentElement,n)){if(r!==null&&ji(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=za(n,o);var a=za(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bf=at&&"documentMode"in document&&11>=document.documentMode,qt=null,zo=null,Hn=null,_o=!1;function _a(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_o||qt==null||qt!==Gr(r)||(r=qt,"selectionStart"in r&&ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&rr(Hn,r)||(Hn=r,r=nl(zo,"onSelect"),0<r.length&&(t=new xi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionend:zr("Transition","TransitionEnd")},Kl={},ju={};at&&(ju=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function Nl(e){if(Kl[e])return Kl[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ju)return Kl[e]=t[n];return e}var Su=Nl("animationend"),Nu=Nl("animationiteration"),Cu=Nl("animationstart"),bu=Nl("transitionend"),Eu=new Map,Ta="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){Eu.set(e,t),Qt(t,[e])}for(var Yl=0;Yl<Ta.length;Yl++){var Gl=Ta[Yl],Ef=Gl.toLowerCase(),zf=Gl[0].toUpperCase()+Gl.slice(1);Pt(Ef,"on"+zf)}Pt(Su,"onAnimationEnd");Pt(Nu,"onAnimationIteration");Pt(Cu,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(bu,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_f=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function Pa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bd(r,t,void 0,e),e.currentTarget=null}function zu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;Pa(l,s,c),o=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;Pa(l,s,c),o=u}}}if(Zr)throw e=No,Zr=!1,No=null,e}function H(e,t){var n=t[Do];n===void 0&&(n=t[Do]=new Set);var r=e+"__bubble";n.has(r)||(_u(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),_u(n,e,r,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[_r]){e[_r]=!0,Fs.forEach(function(n){n!=="selectionchange"&&(_f.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,Xl("selectionchange",!1,t))}}function _u(e,t,n,r){switch(fu(t)){case 1:var l=Bd;break;case 4:l=Vd;break;default:l=vi}n=l.bind(null,t,n,e),l=void 0,!So||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Ft(s),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Js(function(){var c=o,h=pi(n),g=[];e:{var m=Eu.get(e);if(m!==void 0){var v=xi,w=e;switch(e){case"keypress":if($r(n)===0)break e;case"keydown":case"keyup":v=lf;break;case"focusin":w="focus",v=Wl;break;case"focusout":w="blur",v=Wl;break;case"beforeblur":case"afterblur":v=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sf;break;case Su:case Nu:case Cu:v=Gd;break;case bu:v=cf;break;case"scroll":v=Wd;break;case"wheel":v=ff;break;case"copy":case"cut":case"paste":v=Zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ka}var N=(t&4)!==0,F=!N&&e==="scroll",f=N?m!==null?m+"Capture":null:m;N=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Jn(d,f),y!=null&&N.push(or(d,y,p)))),F)break;d=d.return}0<N.length&&(m=new v(m,w,null,n,h),g.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==ko&&(w=n.relatedTarget||n.fromElement)&&(Ft(w)||w[st]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?Ft(w):null,w!==null&&(F=Kt(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(N=xa,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(N=ka,y="onPointerLeave",f="onPointerEnter",d="pointer"),F=v==null?m:tn(v),p=w==null?m:tn(w),m=new N(y,d+"leave",v,n,h),m.target=F,m.relatedTarget=p,y=null,Ft(h)===c&&(N=new N(f,d+"enter",w,n,h),N.target=p,N.relatedTarget=F,y=N),F=y,v&&w)t:{for(N=v,f=w,d=0,p=N;p;p=Gt(p))d++;for(p=0,y=f;y;y=Gt(y))p++;for(;0<d-p;)N=Gt(N),d--;for(;0<p-d;)f=Gt(f),p--;for(;d--;){if(N===f||f!==null&&N===f.alternate)break t;N=Gt(N),f=Gt(f)}N=null}else N=null;v!==null&&La(g,m,v,N,!1),w!==null&&F!==null&&La(g,F,w,N,!0)}}e:{if(m=c?tn(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var z=xf;else if(Na(m))if(yu)z=Sf;else{z=kf;var k=wf}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=jf);if(z&&(z=z(e,c))){vu(g,z,n,h);break e}k&&k(e,m,c),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&go(m,"number",m.value)}switch(k=c?tn(c):window,e){case"focusin":(Na(k)||k.contentEditable==="true")&&(qt=k,zo=c,Hn=null);break;case"focusout":Hn=zo=qt=null;break;case"mousedown":_o=!0;break;case"contextmenu":case"mouseup":case"dragend":_o=!1,_a(g,n,h);break;case"selectionchange":if(bf)break;case"keydown":case"keyup":_a(g,n,h)}var x;if(ki)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Jt?hu(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(mu&&n.locale!=="ko"&&(Jt||j!=="onCompositionStart"?j==="onCompositionEnd"&&Jt&&(x=pu()):(xt=h,yi="value"in xt?xt.value:xt.textContent,Jt=!0)),k=nl(c,j),0<k.length&&(j=new wa(j,e,null,n,h),g.push({event:j,listeners:k}),x?j.data=x:(x=gu(n),x!==null&&(j.data=x)))),(x=mf?hf(e,n):gf(e,n))&&(c=nl(c,"onBeforeInput"),0<c.length&&(h=new wa("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:c}),h.data=x))}zu(g,t)})}function or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Jn(e,n),o!=null&&r.unshift(or(e,o,l)),o=Jn(e,t),o!=null&&r.push(or(e,o,l))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function La(e,t,n,r,l){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Jn(n,o),u!=null&&a.unshift(or(n,u,s))):l||(u=Jn(n,o),u!=null&&a.push(or(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Tf=/\r\n?/g,Pf=/\u0000|\uFFFD/g;function Ma(e){return(typeof e=="string"?e:""+e).replace(Tf,`
`).replace(Pf,"")}function Tr(e,t,n){if(t=Ma(t),Ma(e)!==t&&n)throw Error(S(425))}function rl(){}var To=null,Po=null;function Lo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mo=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0,Da=typeof Promise=="function"?Promise:void 0,Mf=typeof queueMicrotask=="function"?queueMicrotask:typeof Da<"u"?function(e){return Da.resolve(null).then(e).catch(Df)}:Mo;function Df(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);tr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ra(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+bn,ir="__reactProps$"+bn,st="__reactContainer$"+bn,Do="__reactEvents$"+bn,Rf="__reactListeners$"+bn,Ff="__reactHandles$"+bn;function Ft(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ra(e);e!==null;){if(n=e[Xe])return n;e=Ra(e)}return t}e=n,n=e.parentNode}return null}function yr(e){return e=e[Xe]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Cl(e){return e[ir]||null}var Ro=[],nn=-1;function Lt(e){return{current:e}}function Q(e){0>nn||(e.current=Ro[nn],Ro[nn]=null,nn--)}function B(e,t){nn++,Ro[nn]=e.current,e.current=t}var Tt={},me=Lt(Tt),ke=Lt(!1),$t=Tt;function gn(e,t){var n=e.type.contextTypes;if(!n)return Tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function je(e){return e=e.childContextTypes,e!=null}function ll(){Q(ke),Q(me)}function Fa(e,t,n){if(me.current!==Tt)throw Error(S(168));B(me,t),B(ke,n)}function Tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,xd(e)||"Unknown",l));return Z({},n,r)}function ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,$t=me.current,B(me,e),B(ke,ke.current),!0}function Oa(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Tu(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,Q(ke),Q(me),B(me,e)):Q(ke),B(ke,n)}var rt=null,bl=!1,ql=!1;function Pu(e){rt===null?rt=[e]:rt.push(e)}function Of(e){bl=!0,Pu(e)}function Mt(){if(!ql&&rt!==null){ql=!0;var e=0,t=A;try{var n=rt;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,bl=!1}catch(l){throw rt!==null&&(rt=rt.slice(e+1)),nu(mi,Mt),l}finally{A=t,ql=!1}}return null}var rn=[],ln=0,il=null,al=0,Te=[],Pe=0,Bt=null,lt=1,ot="";function Dt(e,t){rn[ln++]=al,rn[ln++]=il,il=e,al=t}function Lu(e,t,n){Te[Pe++]=lt,Te[Pe++]=ot,Te[Pe++]=Bt,Bt=e;var r=lt;e=ot;var l=32-Ve(r)-1;r&=~(1<<l),n+=1;var o=32-Ve(t)+l;if(30<o){var a=l-l%5;o=(r&(1<<a)-1).toString(32),r>>=a,l-=a,lt=1<<32-Ve(t)+l|n<<l|r,ot=o+e}else lt=1<<o|n<<l|r,ot=e}function Si(e){e.return!==null&&(Dt(e,1),Lu(e,1,0))}function Ni(e){for(;e===il;)il=rn[--ln],rn[ln]=null,al=rn[--ln],rn[ln]=null;for(;e===Bt;)Bt=Te[--Pe],Te[Pe]=null,ot=Te[--Pe],Te[Pe]=null,lt=Te[--Pe],Te[Pe]=null}var be=null,Ce=null,Y=!1,Be=null;function Mu(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ia(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Ce=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:lt,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Ce=null,!0):!1;default:return!1}}function Fo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oo(e){if(Y){var t=Ce;if(t){var n=t;if(!Ia(e,t)){if(Fo(e))throw Error(S(418));t=Nt(n.nextSibling);var r=be;t&&Ia(e,t)?Mu(r,n):(e.flags=e.flags&-4097|2,Y=!1,be=e)}}else{if(Fo(e))throw Error(S(418));e.flags=e.flags&-4097|2,Y=!1,be=e}}}function Ua(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Pr(e){if(e!==be)return!1;if(!Y)return Ua(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lo(e.type,e.memoizedProps)),t&&(t=Ce)){if(Fo(e))throw Du(),Error(S(418));for(;t;)Mu(e,t),t=Nt(t.nextSibling)}if(Ua(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=be?Nt(e.stateNode.nextSibling):null;return!0}function Du(){for(var e=Ce;e;)e=Nt(e.nextSibling)}function vn(){Ce=be=null,Y=!1}function Ci(e){Be===null?Be=[e]:Be.push(e)}var If=ft.ReactCurrentBatchConfig;function Dn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=l.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Lr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Aa(e){var t=e._init;return t(e._payload)}function Ru(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=zt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,y){return d===null||d.tag!==6?(d=io(p,f.mode,y),d.return=f,d):(d=l(d,p),d.return=f,d)}function u(f,d,p,y){var z=p.type;return z===Zt?h(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ht&&Aa(z)===d.type)?(y=l(d,p.props),y.ref=Dn(f,d,p),y.return=f,y):(y=Yr(p.type,p.key,p.props,null,f.mode,y),y.ref=Dn(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ao(p,f.mode,y),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function h(f,d,p,y,z){return d===null||d.tag!==7?(d=At(p,f.mode,y,z),d.return=f,d):(d=l(d,p),d.return=f,d)}function g(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=io(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case kr:return p=Yr(d.type,d.key,d.props,null,f.mode,p),p.ref=Dn(f,null,d),p.return=f,p;case Xt:return d=ao(d,f.mode,p),d.return=f,d;case ht:var y=d._init;return g(f,y(d._payload),p)}if(In(d)||_n(d))return d=At(d,f.mode,p,null),d.return=f,d;Lr(f,d)}return null}function m(f,d,p,y){var z=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return z!==null?null:s(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case kr:return p.key===z?u(f,d,p,y):null;case Xt:return p.key===z?c(f,d,p,y):null;case ht:return z=p._init,m(f,d,z(p._payload),y)}if(In(p)||_n(p))return z!==null?null:h(f,d,p,y,null);Lr(f,p)}return null}function v(f,d,p,y,z){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,s(d,f,""+y,z);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case kr:return f=f.get(y.key===null?p:y.key)||null,u(d,f,y,z);case Xt:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,z);case ht:var k=y._init;return v(f,d,p,k(y._payload),z)}if(In(y)||_n(y))return f=f.get(p)||null,h(d,f,y,z,null);Lr(d,y)}return null}function w(f,d,p,y){for(var z=null,k=null,x=d,j=d=0,C=null;x!==null&&j<p.length;j++){x.index>j?(C=x,x=null):C=x.sibling;var T=m(f,x,p[j],y);if(T===null){x===null&&(x=C);break}e&&x&&T.alternate===null&&t(f,x),d=o(T,d,j),k===null?z=T:k.sibling=T,k=T,x=C}if(j===p.length)return n(f,x),Y&&Dt(f,j),z;if(x===null){for(;j<p.length;j++)x=g(f,p[j],y),x!==null&&(d=o(x,d,j),k===null?z=x:k.sibling=x,k=x);return Y&&Dt(f,j),z}for(x=r(f,x);j<p.length;j++)C=v(x,f,j,p[j],y),C!==null&&(e&&C.alternate!==null&&x.delete(C.key===null?j:C.key),d=o(C,d,j),k===null?z=C:k.sibling=C,k=C);return e&&x.forEach(function(V){return t(f,V)}),Y&&Dt(f,j),z}function N(f,d,p,y){var z=_n(p);if(typeof z!="function")throw Error(S(150));if(p=z.call(p),p==null)throw Error(S(151));for(var k=z=null,x=d,j=d=0,C=null,T=p.next();x!==null&&!T.done;j++,T=p.next()){x.index>j?(C=x,x=null):C=x.sibling;var V=m(f,x,T.value,y);if(V===null){x===null&&(x=C);break}e&&x&&V.alternate===null&&t(f,x),d=o(V,d,j),k===null?z=V:k.sibling=V,k=V,x=C}if(T.done)return n(f,x),Y&&Dt(f,j),z;if(x===null){for(;!T.done;j++,T=p.next())T=g(f,T.value,y),T!==null&&(d=o(T,d,j),k===null?z=T:k.sibling=T,k=T);return Y&&Dt(f,j),z}for(x=r(f,x);!T.done;j++,T=p.next())T=v(x,f,j,T.value,y),T!==null&&(e&&T.alternate!==null&&x.delete(T.key===null?j:T.key),d=o(T,d,j),k===null?z=T:k.sibling=T,k=T);return e&&x.forEach(function(P){return t(f,P)}),Y&&Dt(f,j),z}function F(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===Zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case kr:e:{for(var z=p.key,k=d;k!==null;){if(k.key===z){if(z=p.type,z===Zt){if(k.tag===7){n(f,k.sibling),d=l(k,p.props.children),d.return=f,f=d;break e}}else if(k.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ht&&Aa(z)===k.type){n(f,k.sibling),d=l(k,p.props),d.ref=Dn(f,k,p),d.return=f,f=d;break e}n(f,k);break}else t(f,k);k=k.sibling}p.type===Zt?(d=At(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=Yr(p.type,p.key,p.props,null,f.mode,y),y.ref=Dn(f,d,p),y.return=f,f=y)}return a(f);case Xt:e:{for(k=p.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ao(p,f.mode,y),d.return=f,f=d}return a(f);case ht:return k=p._init,F(f,d,k(p._payload),y)}if(In(p))return w(f,d,p,y);if(_n(p))return N(f,d,p,y);Lr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=io(p,f.mode,y),d.return=f,f=d),a(f)):n(f,d)}return F}var yn=Ru(!0),Fu=Ru(!1),sl=Lt(null),ul=null,on=null,bi=null;function Ei(){bi=on=ul=null}function zi(e){var t=sl.current;Q(sl),e._currentValue=t}function Io(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){ul=e,bi=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(bi!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(ul===null)throw Error(S(308));on=e,ul.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var Ot=null;function _i(e){Ot===null?Ot=[e]:Ot.push(e)}function Ou(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,_i(t)):(n.next=l.next,l.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function Ti(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,ut(e,n)}return l=r.interleaved,l===null?(t.next=t,_i(r)):(t.next=l.next,l.next=t),r.interleaved=t,ut(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hi(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cl(e,t,n,r){var l=e.updateQueue;gt=!1;var o=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?o=c:a.next=c,a=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==a&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(o!==null){var g=l.baseState;a=0,h=c=u=null,s=o;do{var m=s.lane,v=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,N=s;switch(m=t,v=n,N.tag){case 1:if(w=N.payload,typeof w=="function"){g=w.call(v,g,m);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=N.payload,m=typeof w=="function"?w.call(v,g,m):w,m==null)break e;g=Z({},g,m);break e;case 2:gt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=v,u=g):h=h.next=v,a|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(u=g),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Wt|=a,e.lanes=a,e.memoizedState=g}}function Ba(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var xr={},Je=Lt(xr),ar=Lt(xr),sr=Lt(xr);function It(e){if(e===xr)throw Error(S(174));return e}function Pi(e,t){switch(B(sr,t),B(ar,e),B(Je,xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yo(t,e)}Q(Je),B(Je,t)}function xn(){Q(Je),Q(ar),Q(sr)}function Uu(e){It(sr.current);var t=It(Je.current),n=yo(t,e.type);t!==n&&(B(ar,e),B(Je,n))}function Li(e){ar.current===e&&(Q(Je),Q(ar))}var G=Lt(0);function dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var eo=[];function Mi(){for(var e=0;e<eo.length;e++)eo[e]._workInProgressVersionPrimary=null;eo.length=0}var Vr=ft.ReactCurrentDispatcher,to=ft.ReactCurrentBatchConfig,Vt=0,X=null,ne=null,oe=null,fl=!1,Qn=!1,ur=0,Uf=0;function de(){throw Error(S(321))}function Di(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function Ri(e,t,n,r,l,o){if(Vt=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vr.current=e===null||e.memoizedState===null?Vf:Wf,e=n(r,l),Qn){o=0;do{if(Qn=!1,ur=0,25<=o)throw Error(S(301));o+=1,oe=ne=null,t.updateQueue=null,Vr.current=Hf,e=n(r,l)}while(Qn)}if(Vr.current=pl,t=ne!==null&&ne.next!==null,Vt=0,oe=ne=X=null,fl=!1,t)throw Error(S(300));return e}function Fi(){var e=ur!==0;return ur=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Oe(){if(ne===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?X.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function cr(e,t){return typeof t=="function"?t(e):t}function no(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ne,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var a=l.next;l.next=o.next,o.next=a}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=a=null,u=null,c=o;do{var h=c.lane;if((Vt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,X.lanes|=h,Wt|=h}c=c.next}while(c!==null&&c!==o);u===null?a=r:u.next=s,He(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,X.lanes|=o,Wt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ro(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do o=e(o,a.action),a=a.next;while(a!==l);He(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Au(){}function $u(e,t){var n=X,r=Oe(),l=t(),o=!He(r.memoizedState,l);if(o&&(r.memoizedState=l,we=!0),r=r.queue,Oi(Wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,dr(9,Vu.bind(null,n,r,l,t),void 0,null),ie===null)throw Error(S(349));Vt&30||Bu(n,t,l)}return l}function Bu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vu(e,t,n,r){t.value=n,t.getSnapshot=r,Hu(t)&&Qu(e)}function Wu(e,t,n){return n(function(){Hu(t)&&Qu(e)})}function Hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Qu(e){var t=ut(e,1);t!==null&&We(t,e,1,-1)}function Va(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Bf.bind(null,X,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ku(){return Oe().memoizedState}function Wr(e,t,n,r){var l=Ge();X.flags|=e,l.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function El(e,t,n,r){var l=Oe();r=r===void 0?null:r;var o=void 0;if(ne!==null){var a=ne.memoizedState;if(o=a.destroy,r!==null&&Di(r,a.deps)){l.memoizedState=dr(t,n,o,r);return}}X.flags|=e,l.memoizedState=dr(1|t,n,o,r)}function Wa(e,t){return Wr(8390656,8,e,t)}function Oi(e,t){return El(2048,8,e,t)}function Yu(e,t){return El(4,2,e,t)}function Gu(e,t){return El(4,4,e,t)}function Xu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zu(e,t,n){return n=n!=null?n.concat([e]):null,El(4,4,Xu.bind(null,t,e),n)}function Ii(){}function Ju(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Di(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qu(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Di(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ec(e,t,n){return Vt&21?(He(n,t)||(n=ou(),X.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function Af(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=to.transition;to.transition={};try{e(!1),t()}finally{A=n,to.transition=r}}function tc(){return Oe().memoizedState}function $f(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nc(e))rc(t,n);else if(n=Ou(e,t,n,r),n!==null){var l=ge();We(n,e,r,l),lc(n,t,r)}}function Bf(e,t,n){var r=Et(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nc(e))rc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(l.hasEagerState=!0,l.eagerState=s,He(s,a)){var u=t.interleaved;u===null?(l.next=l,_i(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Ou(e,t,l,r),n!==null&&(l=ge(),We(n,e,r,l),lc(n,t,r))}}function nc(e){var t=e.alternate;return e===X||t!==null&&t===X}function rc(e,t){Qn=fl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hi(e,n)}}var pl={readContext:Fe,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Vf={readContext:Fe,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,Xu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$f.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:Va,useDebugValue:Ii,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=Va(!1),t=e[0];return e=Af.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,l=Ge();if(Y){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));Vt&30||Bu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Wa(Wu.bind(null,r,o,e),[e]),r.flags|=2048,dr(9,Vu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ge(),t=ie.identifierPrefix;if(Y){var n=ot,r=lt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Uf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wf={readContext:Fe,useCallback:Ju,useContext:Fe,useEffect:Oi,useImperativeHandle:Zu,useInsertionEffect:Yu,useLayoutEffect:Gu,useMemo:qu,useReducer:no,useRef:Ku,useState:function(){return no(cr)},useDebugValue:Ii,useDeferredValue:function(e){var t=Oe();return ec(t,ne.memoizedState,e)},useTransition:function(){var e=no(cr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Au,useSyncExternalStore:$u,useId:tc,unstable_isNewReconciler:!1},Hf={readContext:Fe,useCallback:Ju,useContext:Fe,useEffect:Oi,useImperativeHandle:Zu,useInsertionEffect:Yu,useLayoutEffect:Gu,useMemo:qu,useReducer:ro,useRef:Ku,useState:function(){return ro(cr)},useDebugValue:Ii,useDeferredValue:function(e){var t=Oe();return ne===null?t.memoizedState=e:ec(t,ne.memoizedState,e)},useTransition:function(){var e=ro(cr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Au,useSyncExternalStore:$u,useId:tc,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Uo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zl={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),l=Et(e),o=it(r,l);o.payload=t,n!=null&&(o.callback=n),t=Ct(e,o,l),t!==null&&(We(t,e,l,r),Br(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),l=Et(e),o=it(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ct(e,o,l),t!==null&&(We(t,e,l,r),Br(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Et(e),l=it(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ct(e,l,r),t!==null&&(We(t,e,r,n),Br(t,e,r))}};function Ha(e,t,n,r,l,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!rr(n,r)||!rr(l,o):!0}function oc(e,t,n){var r=!1,l=Tt,o=t.contextType;return typeof o=="object"&&o!==null?o=Fe(o):(l=je(t)?$t:me.current,r=t.contextTypes,o=(r=r!=null)?gn(e,l):Tt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Qa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function Ao(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ti(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Fe(o):(o=je(t)?$t:me.current,l.context=gn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Uo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&zl.enqueueReplaceState(l,l.state,null),cl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=yd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function lo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $o(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qf=typeof WeakMap=="function"?WeakMap:Map;function ic(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hl||(hl=!0,Zo=r),$o(e,t)},n}function ac(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){$o(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$o(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ka(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=ip.bind(null,e,t,n),t.then(e,e))}function Ya(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ga(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Ct(n,t,1))),n.lanes|=1),e)}var Kf=ft.ReactCurrentOwner,we=!1;function he(e,t,n,r){t.child=e===null?Fu(t,null,n,r):yn(t,e.child,n,r)}function Xa(e,t,n,r,l){n=n.render;var o=t.ref;return pn(t,l),r=Ri(e,t,n,r,o,l),n=Fi(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ct(e,t,l)):(Y&&n&&Si(t),t.flags|=1,he(e,t,r,l),t.child)}function Za(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Qi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,sc(e,t,o,r,l)):(e=Yr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(a,r)&&e.ref===t.ref)return ct(e,t,l)}return t.flags|=1,e=zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(rr(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,ct(e,t,l)}return Bo(e,t,n,r,l)}function uc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(sn,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(sn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(sn,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(sn,Ne),Ne|=r;return he(e,t,l,n),t.child}function cc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bo(e,t,n,r,l){var o=je(n)?$t:me.current;return o=gn(t,o),pn(t,l),n=Ri(e,t,n,r,o,l),r=Fi(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ct(e,t,l)):(Y&&r&&Si(t),t.flags|=1,he(e,t,n,l),t.child)}function Ja(e,t,n,r,l){if(je(n)){var o=!0;ol(t)}else o=!1;if(pn(t,l),t.stateNode===null)Hr(e,t),oc(t,n,r),Ao(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=je(n)?$t:me.current,c=gn(t,c));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Qa(t,a,r,c),gt=!1;var m=t.memoizedState;a.state=m,cl(t,r,a,l),u=t.memoizedState,s!==r||m!==u||ke.current||gt?(typeof h=="function"&&(Uo(t,n,h,r),u=t.memoizedState),(s=gt||Ha(t,n,s,r,m,u,c))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Iu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ae(t.type,s),a.props=c,g=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Fe(u):(u=je(n)?$t:me.current,u=gn(t,u));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||m!==u)&&Qa(t,a,r,u),gt=!1,m=t.memoizedState,a.state=m,cl(t,r,a,l);var w=t.memoizedState;s!==g||m!==w||ke.current||gt?(typeof v=="function"&&(Uo(t,n,v,r),w=t.memoizedState),(c=gt||Ha(t,n,c,r,m,w,u)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Vo(e,t,n,r,o,l)}function Vo(e,t,n,r,l,o){cc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Oa(t,n,!1),ct(e,t,o);r=t.stateNode,Kf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yn(t,e.child,null,o),t.child=yn(t,null,s,o)):he(e,t,s,o),t.memoizedState=r.state,l&&Oa(t,n,!0),t.child}function dc(e){var t=e.stateNode;t.pendingContext?Fa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fa(e,t.context,!1),Pi(e,t.containerInfo)}function qa(e,t,n,r,l){return vn(),Ci(l),t.flags|=256,he(e,t,n,r),t.child}var Wo={dehydrated:null,treeContext:null,retryLane:0};function Ho(e){return{baseLanes:e,cachePool:null,transitions:null}}function fc(e,t,n){var r=t.pendingProps,l=G.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),B(G,l&1),e===null)return Oo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Pl(a,r,0,null),e=At(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ho(n),t.memoizedState=Wo,e):Ui(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Yf(e,t,a,r,s,l,n);if(o){o=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=zt(s,o):(o=At(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ho(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Wo,r}return o=e.child,e=o.sibling,r=zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ui(e,t){return t=Pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mr(e,t,n,r){return r!==null&&Ci(r),yn(t,e.child,null,n),e=Ui(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,n,r,l,o,a){if(n)return t.flags&256?(t.flags&=-257,r=lo(Error(S(422))),Mr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Pl({mode:"visible",children:r.children},l,0,null),o=At(o,l,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yn(t,e.child,null,a),t.child.memoizedState=Ho(a),t.memoizedState=Wo,o);if(!(t.mode&1))return Mr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(S(419)),r=lo(o,r,void 0),Mr(e,t,a,r)}if(s=(a&e.childLanes)!==0,we||s){if(r=ie,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,ut(e,l),We(r,e,l,-1))}return Hi(),r=lo(Error(S(421))),Mr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=ap.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ce=Nt(l.nextSibling),be=t,Y=!0,Be=null,e!==null&&(Te[Pe++]=lt,Te[Pe++]=ot,Te[Pe++]=Bt,lt=e.id,ot=e.overflow,Bt=t),t=Ui(t,r.children),t.flags|=4096,t)}function es(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Io(e.return,t,n)}function oo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function pc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(he(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&es(e,n,t);else if(e.tag===19)es(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(G,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&dl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),oo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&dl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}oo(t,!0,n,null,o);break;case"together":oo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gf(e,t,n){switch(t.tag){case 3:dc(t),vn();break;case 5:Uu(t);break;case 1:je(t.type)&&ol(t);break;case 4:Pi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;B(sl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?fc(e,t,n):(B(G,G.current&1),e=ct(e,t,n),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,uc(e,t,n)}return ct(e,t,n)}var mc,Qo,hc,gc;mc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qo=function(){};hc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,It(Je.current);var o=null;switch(n){case"input":l=mo(e,l),r=mo(e,r),o=[];break;case"select":l=Z({},l,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":l=vo(e,l),r=vo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rl)}xo(n,r);var a;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&H("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};gc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xf(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return je(t.type)&&ll(),fe(t),null;case 3:return r=t.stateNode,xn(),Q(ke),Q(me),Mi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(ei(Be),Be=null))),Qo(e,t),fe(t),null;case 5:Li(t);var l=It(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)hc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return fe(t),null}if(e=It(Je.current),Pr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xe]=t,r[ir]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(l=0;l<An.length;l++)H(An[l],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ua(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":da(r,o),H("invalid",r)}xo(n,o),l=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Tr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Tr(r.textContent,s,e),l=["children",""+s]):Xn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&H("scroll",r)}switch(n){case"input":jr(r),ca(r,o,!0);break;case"textarea":jr(r),fa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=rl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ws(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xe]=t,e[ir]=r,mc(e,t,!1,!1),t.stateNode=e;e:{switch(a=wo(n,r),n){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<An.length;l++)H(An[l],e);l=r;break;case"source":H("error",e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"input":ua(e,r),l=mo(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Z({},r,{value:void 0}),H("invalid",e);break;case"textarea":da(e,r),l=vo(e,r),H("invalid",e);break;default:l=r}xo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Ks(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Hs(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zn(e,u):typeof u=="number"&&Zn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&H("scroll",e):u!=null&&ui(e,o,u,a))}switch(n){case"input":jr(e),ca(e,r,!1);break;case"textarea":jr(e),fa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?un(e,!!r.multiple,o,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)gc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=It(sr.current),It(Je.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(o=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return fe(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ce!==null&&t.mode&1&&!(t.flags&128))Du(),vn(),t.flags|=98560,o=!1;else if(o=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Xe]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),o=!1}else Be!==null&&(ei(Be),Be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?re===0&&(re=3):Hi())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return xn(),Qo(e,t),e===null&&lr(t.stateNode.containerInfo),fe(t),null;case 10:return zi(t.type._context),fe(t),null;case 17:return je(t.type)&&ll(),fe(t),null;case 19:if(Q(G),o=t.memoizedState,o===null)return fe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Rn(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=dl(e),a!==null){for(t.flags|=128,Rn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>kn&&(t.flags|=128,r=!0,Rn(o,!1),t.lanes=4194304)}else{if(!r)if(e=dl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Y)return fe(t),null}else 2*q()-o.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=G.current,B(G,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return Wi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Zf(e,t){switch(Ni(t),t.tag){case 1:return je(t.type)&&ll(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),Q(ke),Q(me),Mi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Li(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return xn(),null;case 10:return zi(t.type._context),null;case 22:case 23:return Wi(),null;case 24:return null;default:return null}}var Dr=!1,pe=!1,Jf=typeof WeakSet=="function"?WeakSet:Set,_=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Ko(e,t,n){try{n()}catch(r){J(e,t,r)}}var ts=!1;function qf(e,t){if(To=el,e=ku(),ji(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,h=0,g=e,m=null;t:for(;;){for(var v;g!==n||l!==0&&g.nodeType!==3||(s=a+l),g!==o||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(v=g.firstChild)!==null;)m=g,g=v;for(;;){if(g===e)break t;if(m===n&&++c===l&&(s=a),m===o&&++h===r&&(u=a),(v=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Po={focusedElem:e,selectionRange:n},el=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var N=w.memoizedProps,F=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?N:Ae(t.type,N),F);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){J(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return w=ts,ts=!1,w}function Kn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ko(t,n,o)}l=l.next}while(l!==r)}}function _l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vc(e){var t=e.alternate;t!==null&&(e.alternate=null,vc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[ir],delete t[Do],delete t[Rf],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Go(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rl));else if(r!==4&&(e=e.child,e!==null))for(Go(e,t,n),e=e.sibling;e!==null;)Go(e,t,n),e=e.sibling}function Xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}var ae=null,$e=!1;function mt(e,t,n){for(n=n.child;n!==null;)xc(e,t,n),n=n.sibling}function xc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:pe||an(n,t);case 6:var r=ae,l=$e;ae=null,mt(e,t,n),ae=r,$e=l,ae!==null&&($e?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&($e?(e=ae,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),tr(e)):Jl(ae,n.stateNode));break;case 4:r=ae,l=$e,ae=n.stateNode.containerInfo,$e=!0,mt(e,t,n),ae=r,$e=l;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ko(n,t,a),l=l.next}while(l!==r)}mt(e,t,n);break;case 1:if(!pe&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,mt(e,t,n),pe=r):mt(e,t,n);break;default:mt(e,t,n)}}function rs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jf),t.forEach(function(r){var l=sp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,$e=!1;break e;case 3:ae=s.stateNode.containerInfo,$e=!0;break e;case 4:ae=s.stateNode.containerInfo,$e=!0;break e}s=s.return}if(ae===null)throw Error(S(160));xc(o,a,l),ae=null,$e=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){J(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ye(e),r&4){try{Kn(3,e,e.return),_l(3,e)}catch(N){J(e,e.return,N)}try{Kn(5,e,e.return)}catch(N){J(e,e.return,N)}}break;case 1:Ue(t,e),Ye(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Ue(t,e),Ye(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var l=e.stateNode;try{Zn(l,"")}catch(N){J(e,e.return,N)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Bs(l,o),wo(s,a);var c=wo(s,o);for(a=0;a<u.length;a+=2){var h=u[a],g=u[a+1];h==="style"?Ks(l,g):h==="dangerouslySetInnerHTML"?Hs(l,g):h==="children"?Zn(l,g):ui(l,h,g,c)}switch(s){case"input":ho(l,o);break;case"textarea":Vs(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?un(l,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?un(l,!!o.multiple,o.defaultValue,!0):un(l,!!o.multiple,o.multiple?[]:"",!1))}l[ir]=o}catch(N){J(e,e.return,N)}}break;case 6:if(Ue(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(N){J(e,e.return,N)}}break;case 3:if(Ue(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(N){J(e,e.return,N)}break;case 4:Ue(t,e),Ye(e);break;case 13:Ue(t,e),Ye(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Bi=q())),r&4&&rs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(c=pe)||h,Ue(t,e),pe=c):Ue(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(g=_=h;_!==null;){switch(m=_,v=m.child,m.tag){case 0:case 11:case 14:case 15:Kn(4,m,m.return);break;case 1:an(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(N){J(r,n,N)}}break;case 5:an(m,m.return);break;case 22:if(m.memoizedState!==null){os(g);continue}}v!==null?(v.return=m,_=v):os(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Qs("display",a))}catch(N){J(e,e.return,N)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(N){J(e,e.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ue(t,e),Ye(e),r&4&&rs(e);break;case 21:break;default:Ue(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Zn(l,""),r.flags&=-33);var o=ns(e);Xo(e,o,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=ns(e);Go(e,s,a);break;default:throw Error(S(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ep(e,t,n){_=e,kc(e)}function kc(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var l=_,o=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Dr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||pe;s=Dr;var c=pe;if(Dr=a,(pe=u)&&!c)for(_=l;_!==null;)a=_,u=a.child,a.tag===22&&a.memoizedState!==null?is(l):u!==null?(u.return=a,_=u):is(l);for(;o!==null;)_=o,kc(o),o=o.sibling;_=l,Dr=s,pe=c}ls(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,_=o):ls(e)}}function ls(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||_l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ba(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ba(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&tr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}pe||t.flags&512&&Yo(t)}catch(m){J(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function os(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function is(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_l(4,t)}catch(u){J(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){J(t,l,u)}}var o=t.return;try{Yo(t)}catch(u){J(t,o,u)}break;case 5:var a=t.return;try{Yo(t)}catch(u){J(t,a,u)}}}catch(u){J(t,t.return,u)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var tp=Math.ceil,ml=ft.ReactCurrentDispatcher,Ai=ft.ReactCurrentOwner,Re=ft.ReactCurrentBatchConfig,U=0,ie=null,ee=null,se=0,Ne=0,sn=Lt(0),re=0,fr=null,Wt=0,Tl=0,$i=0,Yn=null,xe=null,Bi=0,kn=1/0,nt=null,hl=!1,Zo=null,bt=null,Rr=!1,wt=null,gl=0,Gn=0,Jo=null,Qr=-1,Kr=0;function ge(){return U&6?q():Qr!==-1?Qr:Qr=q()}function Et(e){return e.mode&1?U&2&&se!==0?se&-se:If.transition!==null?(Kr===0&&(Kr=ou()),Kr):(e=A,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function We(e,t,n,r){if(50<Gn)throw Gn=0,Jo=null,Error(S(185));gr(e,n,r),(!(U&2)||e!==ie)&&(e===ie&&(!(U&2)&&(Tl|=n),re===4&&yt(e,se)),Se(e,r),n===1&&U===0&&!(t.mode&1)&&(kn=q()+500,bl&&Mt()))}function Se(e,t){var n=e.callbackNode;Od(e,t);var r=qr(e,e===ie?se:0);if(r===0)n!==null&&ha(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ha(n),t===1)e.tag===0?Of(as.bind(null,e)):Pu(as.bind(null,e)),Mf(function(){!(U&6)&&Mt()}),n=null;else{switch(iu(r)){case 1:n=mi;break;case 4:n=ru;break;case 16:n=Jr;break;case 536870912:n=lu;break;default:n=Jr}n=_c(n,jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jc(e,t){if(Qr=-1,Kr=0,U&6)throw Error(S(327));var n=e.callbackNode;if(mn()&&e.callbackNode!==n)return null;var r=qr(e,e===ie?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vl(e,r);else{t=r;var l=U;U|=2;var o=Nc();(ie!==e||se!==t)&&(nt=null,kn=q()+500,Ut(e,t));do try{lp();break}catch(s){Sc(e,s)}while(!0);Ei(),ml.current=o,U=l,ee!==null?t=0:(ie=null,se=0,t=re)}if(t!==0){if(t===2&&(l=Co(e),l!==0&&(r=l,t=qo(e,l))),t===1)throw n=fr,Ut(e,0),yt(e,r),Se(e,q()),n;if(t===6)yt(e,r);else{if(l=e.current.alternate,!(r&30)&&!np(l)&&(t=vl(e,r),t===2&&(o=Co(e),o!==0&&(r=o,t=qo(e,o))),t===1))throw n=fr,Ut(e,0),yt(e,r),Se(e,q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Rt(e,xe,nt);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Bi+500-q(),10<t)){if(qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Mo(Rt.bind(null,e,xe,nt),t);break}Rt(e,xe,nt);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ve(r);o=1<<a,a=t[a],a>l&&(l=a),r&=~o}if(r=l,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tp(r/1960))-r,10<r){e.timeoutHandle=Mo(Rt.bind(null,e,xe,nt),r);break}Rt(e,xe,nt);break;case 5:Rt(e,xe,nt);break;default:throw Error(S(329))}}}return Se(e,q()),e.callbackNode===n?jc.bind(null,e):null}function qo(e,t){var n=Yn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=vl(e,t),e!==2&&(t=xe,xe=n,t!==null&&ei(t)),e}function ei(e){xe===null?xe=e:xe.push.apply(xe,e)}function np(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!He(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~$i,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function as(e){if(U&6)throw Error(S(327));mn();var t=qr(e,0);if(!(t&1))return Se(e,q()),null;var n=vl(e,t);if(e.tag!==0&&n===2){var r=Co(e);r!==0&&(t=r,n=qo(e,r))}if(n===1)throw n=fr,Ut(e,0),yt(e,t),Se(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,xe,nt),Se(e,q()),null}function Vi(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(kn=q()+500,bl&&Mt())}}function Ht(e){wt!==null&&wt.tag===0&&!(U&6)&&mn();var t=U;U|=1;var n=Re.transition,r=A;try{if(Re.transition=null,A=1,e)return e()}finally{A=r,Re.transition=n,U=t,!(U&6)&&Mt()}}function Wi(){Ne=sn.current,Q(sn)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ni(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:xn(),Q(ke),Q(me),Mi();break;case 5:Li(r);break;case 4:xn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:zi(r.type._context);break;case 22:case 23:Wi()}n=n.return}if(ie=e,ee=e=zt(e.current,null),se=Ne=t,re=0,fr=null,$i=Tl=Wt=0,xe=Yn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=l,r.next=a}n.pending=r}Ot=null}return e}function Sc(e,t){do{var n=ee;try{if(Ei(),Vr.current=pl,fl){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}fl=!1}if(Vt=0,oe=ne=X=null,Qn=!1,ur=0,Ai.current=null,n===null||n.return===null){re=1,fr=t,ee=null;break}e:{var o=e,a=n.return,s=n,u=t;if(t=se,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Ya(a);if(v!==null){v.flags&=-257,Ga(v,a,s,o,t),v.mode&1&&Ka(o,c,t),t=v,u=c;var w=t.updateQueue;if(w===null){var N=new Set;N.add(u),t.updateQueue=N}else w.add(u);break e}else{if(!(t&1)){Ka(o,c,t),Hi();break e}u=Error(S(426))}}else if(Y&&s.mode&1){var F=Ya(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ga(F,a,s,o,t),Ci(wn(u,s));break e}}o=u=wn(u,s),re!==4&&(re=2),Yn===null?Yn=[o]:Yn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=ic(o,u,t);$a(o,f);break e;case 1:s=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(bt===null||!bt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=ac(o,s,t);$a(o,y);break e}}o=o.return}while(o!==null)}bc(n)}catch(z){t=z,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function Nc(){var e=ml.current;return ml.current=pl,e===null?pl:e}function Hi(){(re===0||re===3||re===2)&&(re=4),ie===null||!(Wt&268435455)&&!(Tl&268435455)||yt(ie,se)}function vl(e,t){var n=U;U|=2;var r=Nc();(ie!==e||se!==t)&&(nt=null,Ut(e,t));do try{rp();break}catch(l){Sc(e,l)}while(!0);if(Ei(),U=n,ml.current=r,ee!==null)throw Error(S(261));return ie=null,se=0,re}function rp(){for(;ee!==null;)Cc(ee)}function lp(){for(;ee!==null&&!zd();)Cc(ee)}function Cc(e){var t=zc(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?bc(e):ee=t,Ai.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zf(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=Xf(n,t,Ne),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Rt(e,t,n){var r=A,l=Re.transition;try{Re.transition=null,A=1,op(e,t,n,r)}finally{Re.transition=l,A=r}return null}function op(e,t,n,r){do mn();while(wt!==null);if(U&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Id(e,o),e===ie&&(ee=ie=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rr||(Rr=!0,_c(Jr,function(){return mn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var a=A;A=1;var s=U;U|=4,Ai.current=null,qf(e,n),wc(n,e),Cf(Po),el=!!To,Po=To=null,e.current=n,ep(n),_d(),U=s,A=a,Re.transition=o}else e.current=n;if(Rr&&(Rr=!1,wt=e,gl=l),o=e.pendingLanes,o===0&&(bt=null),Ld(n.stateNode),Se(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(hl)throw hl=!1,e=Zo,Zo=null,e;return gl&1&&e.tag!==0&&mn(),o=e.pendingLanes,o&1?e===Jo?Gn++:(Gn=0,Jo=e):Gn=0,Mt(),null}function mn(){if(wt!==null){var e=iu(gl),t=Re.transition,n=A;try{if(Re.transition=null,A=16>e?16:e,wt===null)var r=!1;else{if(e=wt,wt=null,gl=0,U&6)throw Error(S(331));var l=U;for(U|=4,_=e.current;_!==null;){var o=_,a=o.child;if(_.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(_=c;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:Kn(8,h,o)}var g=h.child;if(g!==null)g.return=h,_=g;else for(;_!==null;){h=_;var m=h.sibling,v=h.return;if(vc(h),h===c){_=null;break}if(m!==null){m.return=v,_=m;break}_=v}}}var w=o.alternate;if(w!==null){var N=w.child;if(N!==null){w.child=null;do{var F=N.sibling;N.sibling=null,N=F}while(N!==null)}}_=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,_=a;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Kn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_=f;break e}_=o.return}}var d=e.current;for(_=d;_!==null;){a=_;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,_=p;else e:for(a=d;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_l(9,s)}}catch(z){J(s,s.return,z)}if(s===a){_=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,_=y;break e}_=s.return}}if(U=l,Mt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{A=n,Re.transition=t}}return!1}function ss(e,t,n){t=wn(n,t),t=ic(e,t,1),e=Ct(e,t,1),t=ge(),e!==null&&(gr(e,1,t),Se(e,t))}function J(e,t,n){if(e.tag===3)ss(e,e,n);else for(;t!==null;){if(t.tag===3){ss(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=wn(n,e),e=ac(t,e,1),t=Ct(t,e,1),e=ge(),t!==null&&(gr(t,1,e),Se(t,e));break}}t=t.return}}function ip(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(se&n)===n&&(re===4||re===3&&(se&130023424)===se&&500>q()-Bi?Ut(e,0):$i|=n),Se(e,t)}function Ec(e,t){t===0&&(e.mode&1?(t=Cr,Cr<<=1,!(Cr&130023424)&&(Cr=4194304)):t=1);var n=ge();e=ut(e,t),e!==null&&(gr(e,t,n),Se(e,n))}function ap(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ec(e,n)}function sp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Ec(e,n)}var zc;zc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Gf(e,t,n);we=!!(e.flags&131072)}else we=!1,Y&&t.flags&1048576&&Lu(t,al,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var l=gn(t,me.current);pn(t,n),l=Ri(null,t,r,e,l,n);var o=Fi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(o=!0,ol(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ti(t),l.updater=zl,t.stateNode=l,l._reactInternals=t,Ao(t,r,e,n),t=Vo(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&Si(t),he(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=cp(r),e=Ae(r,e),l){case 0:t=Bo(null,t,r,e,n);break e;case 1:t=Ja(null,t,r,e,n);break e;case 11:t=Xa(null,t,r,e,n);break e;case 14:t=Za(null,t,r,Ae(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),Bo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),Ja(e,t,r,l,n);case 3:e:{if(dc(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Iu(e,t),cl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=wn(Error(S(423)),t),t=qa(e,t,r,n,l);break e}else if(r!==l){l=wn(Error(S(424)),t),t=qa(e,t,r,n,l);break e}else for(Ce=Nt(t.stateNode.containerInfo.firstChild),be=t,Y=!0,Be=null,n=Fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===l){t=ct(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return Uu(t),e===null&&Oo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,Lo(r,l)?a=null:o!==null&&Lo(r,o)&&(t.flags|=32),cc(e,t),he(e,t,a,n),t.child;case 6:return e===null&&Oo(t),null;case 13:return fc(e,t,n);case 4:return Pi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),Xa(e,t,r,l,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value,B(sl,r._currentValue),r._currentValue=a,o!==null)if(He(o.value,a)){if(o.children===l.children&&!ke.current){t=ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=it(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Io(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(S(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Io(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}he(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,pn(t,n),l=Fe(l),r=r(l),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,l=Ae(r,t.pendingProps),l=Ae(r.type,l),Za(e,t,r,l,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),Hr(e,t),t.tag=1,je(r)?(e=!0,ol(t)):e=!1,pn(t,n),oc(t,r,l),Ao(t,r,l,n),Vo(null,t,r,!0,e,n);case 19:return pc(e,t,n);case 22:return uc(e,t,n)}throw Error(S(156,t.tag))};function _c(e,t){return nu(e,t)}function up(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new up(e,t,n,r)}function Qi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cp(e){if(typeof e=="function")return Qi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===di)return 11;if(e===fi)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,l,o){var a=2;if(r=e,typeof e=="function")Qi(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return At(n.children,l,o,t);case ci:a=8,l|=8;break;case uo:return e=Me(12,n,t,l|2),e.elementType=uo,e.lanes=o,e;case co:return e=Me(13,n,t,l),e.elementType=co,e.lanes=o,e;case fo:return e=Me(19,n,t,l),e.elementType=fo,e.lanes=o,e;case Us:return Pl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Os:a=10;break e;case Is:a=9;break e;case di:a=11;break e;case fi:a=14;break e;case ht:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Me(a,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function At(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Pl(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Us,e.lanes=n,e.stateNode={isHidden:!1},e}function io(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function ao(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ki(e,t,n,r,l,o,a,s,u){return e=new dp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Me(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ti(o),e}function fp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tc(e){if(!e)return Tt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(je(n))return Tu(e,n,t)}return t}function Pc(e,t,n,r,l,o,a,s,u){return e=Ki(n,r,!0,e,l,o,a,s,u),e.context=Tc(null),n=e.current,r=ge(),l=Et(n),o=it(r,l),o.callback=t??null,Ct(n,o,l),e.current.lanes=l,gr(e,l,r),Se(e,r),e}function Ll(e,t,n,r){var l=t.current,o=ge(),a=Et(l);return n=Tc(n),t.context===null?t.context=n:t.pendingContext=n,t=it(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ct(l,t,a),e!==null&&(We(e,l,a,o),Br(e,l,a)),a}function yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function us(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yi(e,t){us(e,t),(e=e.alternate)&&us(e,t)}function pp(){return null}var Lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gi(e){this._internalRoot=e}Ml.prototype.render=Gi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ll(e,t,null,null)};Ml.prototype.unmount=Gi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Ll(null,e,null,null)}),t[st]=null}};function Ml(e){this._internalRoot=e}Ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=uu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&du(e)}};function Xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cs(){}function mp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=yl(a);o.call(c)}}var a=Pc(t,r,e,0,null,!1,!1,"",cs);return e._reactRootContainer=a,e[st]=a.current,lr(e.nodeType===8?e.parentNode:e),Ht(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=yl(u);s.call(c)}}var u=Ki(e,0,!1,null,null,!1,!1,"",cs);return e._reactRootContainer=u,e[st]=u.current,lr(e.nodeType===8?e.parentNode:e),Ht(function(){Ll(t,u,n,r)}),u}function Rl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var a=o;if(typeof l=="function"){var s=l;l=function(){var u=yl(a);s.call(u)}}Ll(t,a,e,l)}else a=mp(n,t,e,l,r);return yl(a)}au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(hi(t,n|1),Se(t,q()),!(U&6)&&(kn=q()+500,Mt()))}break;case 13:Ht(function(){var r=ut(e,1);if(r!==null){var l=ge();We(r,e,1,l)}}),Yi(e,1)}};gi=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ge();We(t,e,134217728,n)}Yi(e,134217728)}};su=function(e){if(e.tag===13){var t=Et(e),n=ut(e,t);if(n!==null){var r=ge();We(n,e,t,r)}Yi(e,t)}};uu=function(){return A};cu=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};jo=function(e,t,n){switch(t){case"input":if(ho(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Cl(r);if(!l)throw Error(S(90));$s(r),ho(r,l)}}}break;case"textarea":Vs(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Xs=Vi;Zs=Ht;var hp={usingClientEntryPoint:!1,Events:[yr,tn,Cl,Ys,Gs,Vi]},Fn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=eu(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||pp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{kl=Fr.inject(gp),Ze=Fr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hp;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xi(t))throw Error(S(200));return fp(e,t,null,n)};ze.createRoot=function(e,t){if(!Xi(e))throw Error(S(299));var n=!1,r="",l=Lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ki(e,1,!1,null,null,n,!1,r,l),e[st]=t.current,lr(e.nodeType===8?e.parentNode:e),new Gi(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=eu(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Ht(e)};ze.hydrate=function(e,t,n){if(!Dl(t))throw Error(S(200));return Rl(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Xi(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",a=Lc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Pc(t,null,e,1,n??null,l,!1,o,a),e[st]=t.current,lr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ml(t)};ze.render=function(e,t,n){if(!Dl(t))throw Error(S(200));return Rl(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(S(40));return e._reactRootContainer?(Ht(function(){Rl(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};ze.unstable_batchedUpdates=Vi;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Dl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Rl(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Mc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mc)}catch(e){console.error(e)}}Mc(),Ms.exports=ze;var vp=Ms.exports,Dc,ds=vp;Dc=ds.createRoot,ds.hydrateRoot;function qe(e){return e?e.startsWith("http://")||e.startsWith("https://")?e:`${jn}${e}`:null}const Rc={de:"de-DE",fr:"fr-FR"};let ti=[];function fs(){window.speechSynthesis&&(ti=window.speechSynthesis.getVoices()||[])}var ws,ks;typeof window<"u"&&window.speechSynthesis&&(fs(),(ks=(ws=window.speechSynthesis).addEventListener)==null||ks.call(ws,"voiceschanged",fs));function yp(e){var o;const t=ti.length?ti:((o=window.speechSynthesis)==null?void 0:o.getVoices())||[],n=e.toLowerCase(),r=n.slice(0,2),l=a=>a.lang.replace("_","-").toLowerCase();return t.find(a=>l(a)===n)||t.find(a=>l(a).startsWith(r))||null}const xl={de:["der","die","das"],fr:["le","la","l'"]},Ie={de:{name:"Alemán",code:"DE",wordPh:"z.B. der Schlüssel",blankWordPh:"z.B. Hund (solo la palabra)",exLabel:"Ejemplo en alemán",exPh:"Der Hund läuft schnell.",blankPh:"Der ___ läuft schnell.",bulkPh:`[
  { "german": "der Hund", "translation": "el perro", "note": "masc." },
  { "german": "die Katze", "translation": "la gata" }
]`},fr:{name:"Francés",code:"FR",wordPh:"p.ej. le chien",blankWordPh:"p.ej. chien (solo la palabra)",exLabel:"Ejemplo en francés",exPh:"Le chien court vite.",blankPh:"Le ___ court vite.",bulkPh:`[
  { "german": "le chien", "translation": "el perro", "note": "masc." },
  { "german": "la maison", "translation": "la casa" }
]`}};let Fc="de";function xp(e){Rc[e]&&(Fc=e)}const dt={type1:"Imagen",type2:"Ejemplo",type4:"Traducir",type5:"Completar",type6:"Artículo"};function Zi(e){const t=Ie[e]||Ie.de,n=(xl[e]||xl.de).join(" / "),r={type1:"Muestra una imagen; la tocas para voltear y ver la palabra. Requiere una URL de imagen.",type2:"Muestra la palabra con una frase de ejemplo; volteas para ver la traducción.",type4:`Te muestra el español y escribes la palabra en ${t.name.toLowerCase()}; corrige tu respuesta.`,type5:"Una frase con un hueco (___); escribes la palabra que falta.",type6:`Eliges el artículo/género correcto (${n}).`};return Object.keys(dt).map(l=>({id:l,name:dt[l],tip:r[l]}))}function Oc(e,t="de"){const n=xl[t]||xl.de,r=(e||"").trim(),l=r.toLowerCase(),o=n.find(s=>s.endsWith("'")?l.startsWith(s):l.startsWith(s+" "))||"",a=o?r.slice(o.length).trimStart():r;return{articles:n,correct:o,bare:a}}function ps(e){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e),n=Rc[Fc]||"de-DE";t.lang=n,t.rate=.9;const r=yp(n);r&&(t.voice=r),window.speechSynthesis.speak(t)}function De(e){var t;if(e){if(e.audioUrl){(t=window.speechSynthesis)==null||t.cancel(),new Audio(qe(e.audioUrl)).play().catch(()=>ps(e.german));return}ps(e.german)}}function wp(e,t){let{repetitions:n,easiness:r,interval:l}=e,o=e.lapses??0;t>=3?(n===0?l=1:n===1?l=6:l=Math.round(l*r),n+=1):(n>=1&&(o+=1),n=0,l=1),r=Math.max(1.3,r+.1-(5-t)*(.08+(5-t)*.02));const a=Date.now()+l*864e5;return{repetitions:n,easiness:r,interval:l,nextReview:a,lastGrade:t,lapses:o}}const kp=4;function jp(e){return(e.lapses??0)>=kp}function Sp(e){const t=Math.ceil((e-Date.now())/864e5);return t<=0?"Hoy":t===1?"Mañana":`${t} días`}const jn="http://localhost:3001",Ji="dk_token",Ic=()=>localStorage.getItem(Ji),Np=e=>localStorage.setItem(Ji,e),ms=()=>localStorage.removeItem(Ji);function pr(){const e=Ic();return e?{Authorization:`Bearer ${e}`}:{}}async function Yt(e,t={}){const n=await fetch(`${jn}${e}`,{headers:{"Content-Type":"application/json",...pr(),...t.headers||{}},...t});if(!n.ok){const r=await n.json().catch(()=>({}));throw Object.assign(new Error(r.error||n.statusText),{status:n.status})}return n.json()}async function hs(){return Yt("/cards")}async function gs(e){const t=e.length===0?"?allowEmpty=true":"";return Yt(`/cards${t}`,{method:"PUT",body:JSON.stringify(e)})}async function vs(){return Yt("/stats")}async function ys(e){return Yt("/stats",{method:"PUT",body:JSON.stringify(e)})}function Sn(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Uc(e,t){return Math.round((new Date(t+"T00:00:00")-new Date(e+"T00:00:00"))/864e5)}const mr=20;function Cp(e,t=!1){const n=Sn(),r=t?1:0;if(!e||!e.day)return{day:n,todayCount:1,currentStreak:1,longestStreak:1,dailyNewLimit:(e==null?void 0:e.dailyNewLimit)??mr,newToday:r};const l=e.dailyNewLimit??mr;if(e.day===n)return{...e,todayCount:e.todayCount+1,newToday:(e.newToday??0)+r,dailyNewLimit:l};const o=Uc(e.day,n);if(o<=0)return{...e,todayCount:e.todayCount+1,newToday:(e.newToday??0)+r,dailyNewLimit:l};const a=o===1?e.currentStreak+1:1;return{day:n,todayCount:1,currentStreak:a,longestStreak:Math.max(e.longestStreak||0,a),dailyNewLimit:l,newToday:r}}async function Ac(e,t){return Yt("/explain",{method:"POST",body:JSON.stringify({german:e.german,translation:e.translation,note:e.note||"",mode:t})}).then(n=>n.text)}async function bp(e){const t=new FormData;t.append("file",e);const n=await fetch(`${jn}/upload`,{method:"POST",body:t,headers:pr()});if(!n.ok)throw new Error("Error al subir archivo.");return n.json()}async function Ep(e){const t=e.split("/media/")[1];t&&await fetch(`${jn}/media/${t}`,{method:"DELETE",headers:pr()})}const ni="@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400;500&display=swap');",$c=`

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
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.25rem 0.1rem;
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

  /* ── Settings View ── */
  .settings-section {
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    border-radius: 10px;
    padding: 1.5rem;
  }

  .settings-label {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: var(--text);
    margin-bottom: 0.5rem;
  }

  .settings-help {
    font-size: 0.78rem;
    line-height: 1.6;
    color: var(--text-2);
    margin-bottom: 1.25rem;
  }

  .settings-stepper {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .step-btn {
    width: 44px;
    height: 44px;
    border: 1px solid var(--border-input);
    background: var(--surface);
    border-radius: 10px;
    color: var(--text);
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }
  .step-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
  .step-btn:disabled { opacity: 0.35; cursor: not-allowed; }
  .step-val {
    font-family: 'DM Mono', monospace;
    font-size: 2rem;
    font-weight: 500;
    color: var(--text);
    min-width: 3rem;
    text-align: center;
  }

  .settings-presets {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }
  .preset-chip {
    padding: 0.4rem 0.8rem;
    border: 1px solid var(--border-input);
    background: none;
    border-radius: 20px;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .preset-chip:hover { border-color: var(--accent); color: var(--accent); }
  .preset-chip.active {
    background: var(--accent-soft);
    border-color: var(--accent);
    color: var(--accent);
  }

  .settings-note {
    font-size: 0.75rem;
    line-height: 1.6;
    color: var(--text-dim);
    background: var(--surface-alt);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
  }
  .settings-note strong { color: var(--accent); }

  .settings-today {
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-faint);
  }
  .settings-today strong { color: var(--text-2); }


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
`,qi=[{n:0,label:"Nada"},{n:1,label:"Mal"},{n:2,label:"Difícil"},{n:3,label:"Ok"},{n:4,label:"Bien"},{n:5,label:"Fácil"}];function zp({card:e}){return i.jsxs("div",{className:"t1-front",children:[i.jsx("div",{className:"card-type-badge",children:dt.type1}),e.imageUrl?i.jsx("img",{className:"t1-front-img",src:qe(e.imageUrl),alt:""}):i.jsx("div",{style:{fontSize:"0.75rem",color:"#444",border:"1px dashed #333",padding:"1.5rem 2rem",borderRadius:"4px"},children:"sin imagen"}),i.jsx("div",{className:"t1-front-hint",children:"toca para voltear"})]})}function _p({card:e,onSpeak:t}){return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-type-badge",children:dt.type1}),i.jsx("div",{className:"card-hint",children:"califica abajo"}),i.jsx("div",{className:"t1-back-word",children:e.german}),e.note&&i.jsx("div",{className:"t1-back-note",children:e.note}),i.jsx("button",{className:"audio-replay-btn",onClick:n=>{n.stopPropagation(),t()},title:"Pronunciar",children:"▶"})]})}function Tp({card:e}){const t=(n,r)=>{if(!n||!r)return n;const l=r.replace(/^(der|die|das|ein|eine)\s+/i,"").toLowerCase(),o=new RegExp(`(${l})`,"gi");return n.split(o).map((s,u)=>o.test(s)?i.jsx("em",{children:s},u):s)};return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-type-badge",children:dt.type2}),i.jsx("div",{className:"card-hint",children:"toca para voltear"}),i.jsxs("div",{className:"t2-front",children:[i.jsx("div",{className:"t2-word",children:e.german}),e.example&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"t2-divider"}),i.jsx("div",{className:"t2-example",children:t(e.example,e.german)})]})]})]})}function Pp({card:e}){return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-type-badge",children:dt.type2}),i.jsx("div",{className:"card-hint",children:"califica abajo"}),i.jsxs("div",{className:"t2-back",children:[i.jsx("div",{className:"t2-translation",children:e.translation}),e.note&&i.jsx("div",{className:"card-note",children:e.note}),i.jsx("button",{className:"audio-replay-btn",style:{marginTop:"0.5rem"},onClick:t=>{t.stopPropagation(),De(e)},title:"Pronunciar",children:"▶"}),e.exampleTranslation&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"t2-divider",style:{marginTop:"0.5rem"}}),i.jsxs("div",{className:"t2-example-trans",children:['"',e.exampleTranslation,'"']})]})]})]})}function Lp({card:e,language:t}){const n=Ie[t]||Ie.de;return i.jsxs("div",{className:"t4-front",children:[i.jsx("div",{className:"card-type-badge",children:dt.type4}),i.jsxs("div",{className:"t4-label",children:["¿Cómo se dice en ",n.name.toLowerCase(),"?"]}),i.jsx("div",{className:"t4-word",children:e.translation}),e.note&&i.jsx("div",{className:"t4-note",children:e.note})]})}function Mp({card:e}){const n=(e.example||"").split("___");return i.jsxs("div",{className:"t5-front",children:[i.jsx("div",{className:"card-type-badge",children:dt.type5}),e.imageUrl&&i.jsx("img",{className:"t1-front-img",src:qe(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"45%",maxWidth:"80%",marginBottom:"0.25rem"}}),i.jsx("div",{className:"t5-sentence",children:n.map((r,l)=>i.jsxs(Le.Fragment,{children:[r,l<n.length-1&&i.jsx("span",{className:"t5-blank",children:"_____"})]},l))}),e.note&&i.jsx("div",{className:"t4-note",style:{fontSize:"0.62rem"},children:e.note})]})}function Dp({card:e,language:t}){const{bare:n}=Oc(e.german,t);return i.jsxs("div",{className:"t6-front",children:[i.jsx("div",{className:"card-type-badge",children:dt.type6}),e.imageUrl&&i.jsx("img",{className:"t1-front-img",src:qe(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"50%",maxWidth:"80%",marginBottom:"0.5rem"}}),i.jsx("div",{className:"t6-label",children:"¿Cuál es el artículo?"}),i.jsxs("div",{className:"t6-word",children:["___ ",n]})]})}function Rp({card:e,language:t,onGrade:n,onExplain:r,explaining:l,explanation:o}){const a=Ie[t]||Ie.de,[s,u]=b.useState(""),[c,h]=b.useState(null),g=Le.useRef(null);Le.useEffect(()=>{var w;(w=g.current)==null||w.focus()},[]);const m=()=>{if(!s.trim())return;const w=s.trim().toLowerCase()===e.german.trim().toLowerCase();h(w?"correct":"wrong")},v=()=>{h("revealed"),De(e)};return i.jsxs("div",{className:"answer-zone",children:[i.jsxs("div",{className:"answer-input-row",children:[i.jsx("input",{ref:g,className:`answer-input ${c==="wrong"?"wrong":c==="correct"?"correct":""}`,value:s,onChange:w=>u(w.target.value),onKeyDown:w=>{w.key==="Enter"&&!c&&m()},placeholder:`Escribe en ${a.name.toLowerCase()}…`,disabled:!!c}),i.jsx("button",{className:"answer-check-btn",onClick:m,disabled:!!c||!s.trim(),children:"OK"}),i.jsx("button",{className:"reveal-btn",onClick:v,disabled:!!c,children:"Revelar"})]}),c==="correct"&&i.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsx("span",{children:"✓ ¡Correcto!"}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem"},onClick:()=>De(e),children:"▶"})]}),c==="wrong"&&i.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("span",{children:["✗ La respuesta es: ",i.jsx("strong",{children:e.german})]}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>De(e),children:"▶"})]}),c==="revealed"&&i.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("span",{children:["👁 La respuesta es: ",i.jsx("strong",{children:e.german})]}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>De(e),children:"▶"})]}),i.jsx("button",{className:"continuar-btn",onClick:()=>n(0),children:"Continuar"})]}),(c==="correct"||c==="wrong")&&i.jsx("div",{className:"grades",children:qi.map(({n:w,label:N})=>i.jsxs("button",{className:`grade-btn g${w}`,onClick:()=>n(w),children:[i.jsx("span",{className:"grade-num",children:w}),i.jsx("span",{className:"grade-label",children:N})]},w))}),!!c&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"explain-btn",onClick:r,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),o&&i.jsx("div",{className:"explanation",children:o})]})]})}function Fp({card:e,onGrade:t,onExplain:n,explaining:r,explanation:l}){const[o,a]=b.useState(""),[s,u]=b.useState(null),c=Le.useRef(null);Le.useEffect(()=>{var v;(v=c.current)==null||v.focus()},[]);const h=(e.example||"").replace("___",e.german),g=()=>{if(!o.trim())return;const v=o.trim().toLowerCase()===e.german.trim().toLowerCase();u(v?"correct":"wrong")},m=()=>{u("revealed"),De(e)};return i.jsxs("div",{className:"answer-zone",children:[i.jsxs("div",{className:"answer-input-row",children:[i.jsx("input",{ref:c,className:`answer-input ${s==="wrong"?"wrong":s==="correct"?"correct":""}`,value:o,onChange:v=>a(v.target.value),onKeyDown:v=>{v.key==="Enter"&&!s&&g()},placeholder:"Completa el espacio…",disabled:!!s}),i.jsx("button",{className:"answer-check-btn",onClick:g,disabled:!!s||!o.trim(),children:"OK"}),i.jsx("button",{className:"reveal-btn",onClick:m,disabled:!!s,children:"Revelar"})]}),s==="correct"&&i.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("span",{style:{minWidth:0},children:["✓ ¡Correcto! — ",h]}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>De(e),children:"▶"})]}),s==="wrong"&&i.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("span",{style:{minWidth:0},children:["✗ Era: ",i.jsx("strong",{children:e.german})," — ",h]}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>De(e),children:"▶"})]}),s==="revealed"&&i.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("span",{style:{minWidth:0},children:["👁 ",i.jsx("strong",{children:e.german})," — ",h]}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>De(e),children:"▶"})]}),i.jsx("button",{className:"continuar-btn",onClick:()=>t(0),children:"Continuar"})]}),(s==="correct"||s==="wrong")&&i.jsx("div",{className:"grades",children:qi.map(({n:v,label:w})=>i.jsxs("button",{className:`grade-btn g${v}`,onClick:()=>t(v),children:[i.jsx("span",{className:"grade-num",children:v}),i.jsx("span",{className:"grade-label",children:w})]},v))}),!!s&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"explain-btn",onClick:n,disabled:r,children:r?"Consultando IA…":"✦ Explicar con IA"}),l&&i.jsx("div",{className:"explanation",children:l})]})]})}function Op({card:e,language:t,onGrade:n,onExplain:r,explaining:l,explanation:o}){const[a,s]=b.useState(null),{articles:u,correct:c}=Oc(e.german,t),h=m=>{a||s(m)},g=m=>a?m===c?"reveal":m===a&&a!==c?"wrong":"":"";return i.jsxs("div",{className:"answer-zone",children:[i.jsx("div",{className:"article-btns",children:u.map(m=>i.jsx("button",{className:`article-btn ${g(m)}`,onClick:()=>h(m),disabled:!!a,children:m},m))}),a&&i.jsxs("div",{className:`answer-feedback ${a===c?"correct":"wrong"}`,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsx("span",{style:{minWidth:0},children:a===c?`✓ Correcto — ${e.german}`:`✗ Es ${c} — ${e.german}`}),i.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>De(e),children:"▶"})]}),e.note&&i.jsx("div",{className:"card-note",children:e.note}),i.jsx("button",{className:"continuar-btn",onClick:()=>n(a===c?5:1),children:"Continuar"})]}),a&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"explain-btn",onClick:r,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),o&&i.jsx("div",{className:"explanation",children:o})]})]})}const xs=["#C8825B","#B23B2E","#5A7A4E","#E0A458","#8A6FA6"];function Ip({count:e,streak:t,onClose:n}){const r=Le.useMemo(()=>Array.from({length:20},(l,o)=>({left:Math.random()*100,delay:Math.random()*.5,duration:1.6+Math.random()*1.3,color:xs[o%xs.length],size:6+Math.random()*6})),[]);return i.jsxs("div",{className:"celebrate-overlay",onClick:n,children:[i.jsx("div",{className:"confetti",children:r.map((l,o)=>i.jsx("span",{className:"confetti-piece",style:{left:`${l.left}%`,background:l.color,width:l.size,height:l.size,animationDelay:`${l.delay}s`,animationDuration:`${l.duration}s`}},o))}),i.jsxs("div",{className:"celebrate-card",onClick:l=>l.stopPropagation(),children:[i.jsx("div",{className:"celebrate-emoji",children:"🎉"}),i.jsx("h2",{className:"celebrate-title",children:"¡Felicitaciones!"}),i.jsx("p",{className:"celebrate-text",children:"Terminaste tus repasos del día."}),i.jsxs("p",{className:"celebrate-count",children:["Repasaste ",i.jsx("strong",{children:e})," ",e===1?"tarjeta":"tarjetas"," hoy."]}),t>0&&i.jsxs("p",{className:"celebrate-streak",children:["🔥 Racha: ",i.jsx("strong",{children:t})," ",t===1?"día":"días"," seguidos"]}),i.jsx("button",{className:"celebrate-btn",onClick:n,children:"Continuar"})]})]})}function Up({cards:e,onGrade:t,language:n,stats:r}){const[l,o]=b.useState(!1),[a,s]=b.useState(!1),[u,c]=b.useState(null),[h,g]=b.useState(0),[m,v]=b.useState(!1),[w,N]=b.useState(0),[F,f]=b.useState(!1),d=(r==null?void 0:r.dailyNewLimit)??mr,p=r&&r.day===Sn()?r.newToday??0:0,y=Math.max(0,d-p),z=Le.useMemo(()=>{const M=E=>E.repetitions===0&&E.lastGrade==null,I=e.filter(E=>E.nextReview<=Date.now()),le=I.filter(E=>!M(E)),$=I.filter(M).slice(0,y),te=[...le,...$];for(let E=te.length-1;E>0;E--){const L=Math.floor(Math.random()*(E+1));[te[E],te[L]]=[te[L],te[E]]}return te},[e.map(M=>M.id+M.nextReview).join(","),y]),k=z[0],x=Le.useCallback(()=>{De(k)},[k]);Le.useEffect(()=>{if(l&&((k==null?void 0:k.cardType)==="type1"||(k==null?void 0:k.cardType)==="type2")){const M=setTimeout(()=>De(k),350);return()=>clearTimeout(M)}},[l]);const j=M=>{var E;if(m)return;(E=window.speechSynthesis)==null||E.cancel();const I=z.length===1,le=(k==null?void 0:k.cardType)==="type1"||(k==null?void 0:k.cardType)==="type2",$=k.repetitions===0&&k.lastGrade==null,te=()=>{t(k.id,wp(k,M),$),c(null),g(L=>L+1),N(L=>L+1),I&&f(!0)};le&&l?(v(!0),o(!1),setTimeout(()=>{te(),v(!1)},560)):(te(),o(!1))},C=async()=>{s(!0);try{c(await Ac(k))}catch{c("Error al contactar la API.")}s(!1)};if(!e.length)return i.jsx("div",{className:"deck-empty",children:i.jsxs("p",{children:["No hay tarjetas.",i.jsx("br",{}),"Ve a ",i.jsx("strong",{children:"+ Agregar"})," para crear tu primera."]})});if(!z.length){const M=e.some(I=>I.nextReview<=Date.now()&&I.repetitions===0&&I.lastGrade==null);return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"deck-empty",children:M?i.jsxs("p",{children:["Alcanzaste tu límite de ",i.jsx("strong",{children:d})," tarjetas nuevas por hoy.",i.jsx("br",{}),"Vuelve mañana, o súbelo en ",i.jsx("strong",{children:"Ajustes"})," si quieres seguir."]}):i.jsxs("p",{children:["Sin repasos pendientes.",i.jsx("br",{}),"Vuelve mañana — el sistema hace el resto."]})}),F&&i.jsx(Ip,{count:(r==null?void 0:r.todayCount)??w,streak:(r==null?void 0:r.currentStreak)??0,onClose:()=>f(!1)})]})}const T=k.cardType||"type1",V=["type4","type5","type6"].includes(T),P=["type1","type2"].includes(T);return i.jsxs("div",{children:[i.jsxs("div",{className:"session-info",children:[i.jsxs("span",{children:["Pendientes: ",i.jsx("strong",{children:z.length})]}),i.jsxs("span",{children:["Nuevas hoy: ",i.jsxs("strong",{children:[p,"/",d]})]}),i.jsxs("span",{children:["Total: ",i.jsx("strong",{children:e.length})]})]}),P&&i.jsx("div",{className:"card-scene",onClick:()=>!m&&o(M=>!M),children:i.jsxs("div",{className:`card-inner ${l?"flipped":""}`,children:[i.jsxs("div",{className:"card-face front",children:[T==="type1"&&i.jsx(zp,{card:k}),T==="type2"&&i.jsx(Tp,{card:k})]}),i.jsxs("div",{className:"card-face back",children:[T==="type1"&&i.jsx(_p,{card:k,onSpeak:x}),T==="type2"&&i.jsx(Pp,{card:k})]})]})}),V&&i.jsx("div",{className:"card-scene",children:i.jsxs("div",{className:"card-static",children:[T==="type4"&&i.jsx(Lp,{card:k,language:n}),T==="type5"&&i.jsx(Mp,{card:k}),T==="type6"&&i.jsx(Dp,{card:k,language:n})]})}),V&&i.jsxs(Le.Fragment,{children:[T==="type4"&&i.jsx(Rp,{card:k,language:n,onGrade:j,onExplain:C,explaining:a,explanation:u}),T==="type5"&&i.jsx(Fp,{card:k,onGrade:j,onExplain:C,explaining:a,explanation:u}),T==="type6"&&i.jsx(Op,{card:k,language:n,onGrade:j,onExplain:C,explaining:a,explanation:u})]},h),P&&l&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"grades",children:qi.map(({n:M,label:I})=>i.jsxs("button",{className:`grade-btn g${M}`,onClick:()=>j(M),children:[i.jsx("span",{className:"grade-num",children:M}),i.jsx("span",{className:"grade-label",children:I})]},M))}),i.jsx("button",{className:"explain-btn",onClick:C,disabled:a,children:a?"Consultando IA…":"✦ Explicar con IA"}),u&&i.jsx("div",{className:"explanation",children:u})]})]})}function Ap({onAdd:e,onBulkAdd:t,language:n}){var ta;const r=Ie[n]||Ie.de,l=Zi(n),[o,a]=b.useState("single"),[s,u]=b.useState("type1"),[c,h]=b.useState(""),[g,m]=b.useState(""),[v,w]=b.useState(""),[N,F]=b.useState(""),[f,d]=b.useState(""),[p,y]=b.useState(!1),[z,k]=b.useState(null),[x,j]=b.useState(null),[C,T]=b.useState(null),[V,P]=b.useState("file"),[M,I]=b.useState("file"),[le,$]=b.useState(""),[te,E]=b.useState(""),[L,R]=b.useState(""),[W,K]=b.useState(null),[pt,et]=b.useState(!0),En=()=>{!c.trim()||!g.trim()||(e({cardType:s,german:c.trim(),translation:g.trim(),note:v.trim(),example:N.trim(),exampleTranslation:f.trim(),imageUrl:z,audioUrl:x}),h(""),m(""),w(""),k(null),j(null),F(""),d(""),y(!0),setTimeout(()=>y(!1),2e3))},Qe=async(D,ce)=>{const Ke=D.target.files[0];if(Ke){T(ce);try{const{url:zn}=await bp(Ke);ce==="image"?k(zn):j(zn)}catch{alert("Error al subir archivo.")}T(null),D.target.value=""}},tt=(D,ce)=>{const Ke=ce.trim();Ke&&(D==="image"?(k(Ke),$("")):(j(Ke),E("")))},ea=D=>{const ce=D==="image"?z:x;!(ce&&(ce.startsWith("http://")||ce.startsWith("https://")))&&ce&&Ep(ce),D==="image"?(k(null),$("")):(j(null),E(""))},Vc=()=>{K(null);let D;try{D=JSON.parse(L.trim())}catch{K({ok:!1,msg:"JSON inválido. Revisa la sintaxis."});return}if(!Array.isArray(D)){K({ok:!1,msg:"Debe ser un array [ ... ]."});return}const ce=D.filter(Ke=>{var zn,na;return((zn=Ke.german)==null?void 0:zn.trim())&&((na=Ke.translation)==null?void 0:na.trim())});if(!ce.length){K({ok:!1,msg:'Ningún objeto tiene "german" y "translation".'});return}t(ce,pt),R(""),K({ok:!0,msg:`✓ ${ce.length} tarjeta${ce.length!==1?"s":""} ${pt?"importada":"agregada"}${ce.length!==1?"s":""}.`})};return i.jsxs("div",{className:"add-form",children:[i.jsxs("div",{className:"add-tabs",children:[i.jsx("button",{className:`add-tab ${o==="single"?"active":""}`,onClick:()=>a("single"),children:"Una tarjeta"}),i.jsx("button",{className:`add-tab ${o==="bulk"?"active":""}`,onClick:()=>a("bulk"),children:"Importar JSON"})]}),o==="single"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:l.map(D=>i.jsxs("button",{className:`type-btn ${s===D.id?"active":""}`,onClick:()=>u(D.id),children:[D.name,i.jsx("span",{className:"type-tip",role:"tooltip",children:D.tip})]},D.id))}),i.jsx("div",{className:"type-tip-static",children:(ta=l.find(D=>D.id===s))==null?void 0:ta.tip}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:s==="type5"?"Palabra que va en el hueco":r.name}),i.jsx("input",{value:c,onChange:D=>h(D.target.value),placeholder:s==="type5"?r.blankWordPh:r.wordPh})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción"}),i.jsx("input",{value:g,onChange:D=>m(D.target.value),placeholder:"la llave"})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Nota (opcional)"}),i.jsx("textarea",{value:v,onChange:D=>w(D.target.value),placeholder:"artículo, ejemplo, truco…"})]}),(s==="type2"||s==="type5")&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{children:s==="type5"?"Oración con ___ (espacio en blanco)":r.exLabel}),i.jsx("input",{value:N,onChange:D=>F(D.target.value),placeholder:s==="type5"?r.blankPh:r.exPh})]}),s==="type2"&&i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción del ejemplo"}),i.jsx("input",{value:f,onChange:D=>d(D.target.value),placeholder:"El perro corre rápido."})]})]}),["type1","type5","type6"].includes(s)&&i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Imagen (opcional) —"," ",i.jsx("button",{className:"mode-toggle",onClick:()=>{P(D=>D==="file"?"url":"file"),k(null),$("")},children:V==="file"?"usar URL":"subir archivo"})]}),z?i.jsxs("div",{className:"media-preview",children:[i.jsx("img",{src:qe(z),alt:""}),i.jsx("span",{className:"media-preview-label",children:z.startsWith("http")?"URL externa":z.split("/").pop()}),i.jsx("button",{className:"media-remove",onClick:()=>ea("image"),children:"×"})]}):V==="file"?i.jsx("div",{className:"media-upload-row",children:i.jsxs("label",{className:"media-upload-btn",children:[C==="image"?i.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir imagen",i.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:D=>Qe(D,"image"),disabled:!!C})]})}):i.jsxs("div",{className:"url-input-row",children:[i.jsx("input",{className:"url-input",value:le,onChange:D=>$(D.target.value),placeholder:"https://upload.wikimedia.org/…",onKeyDown:D=>D.key==="Enter"&&tt("image",le)}),i.jsx("button",{className:"url-set-btn",onClick:()=>tt("image",le),children:"OK"})]})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Audio (opcional) —"," ",i.jsx("button",{className:"mode-toggle",onClick:()=>{I(D=>D==="file"?"url":"file"),j(null),E("")},children:M==="file"?"usar URL":"subir archivo"})]}),x?i.jsxs("div",{className:"media-preview",children:[i.jsx("span",{className:"media-preview-label",children:x.startsWith("http")?"URL externa":x.split("/").pop()}),i.jsx("audio",{src:qe(x),controls:!0,style:{height:"24px",accentColor:"#cc0000"}}),i.jsx("button",{className:"media-remove",onClick:()=>ea("audio"),children:"×"})]}):M==="file"?i.jsx("div",{className:"media-upload-row",children:i.jsxs("label",{className:"media-upload-btn",children:[C==="audio"?i.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir audio",i.jsx("input",{type:"file",accept:"audio/*",style:{display:"none"},onChange:D=>Qe(D,"audio"),disabled:!!C})]})}):i.jsxs("div",{className:"url-input-row",children:[i.jsx("input",{className:"url-input",value:te,onChange:D=>E(D.target.value),placeholder:"https://forvo.com/… o link directo a .mp3",onKeyDown:D=>D.key==="Enter"&&tt("audio",te)}),i.jsx("button",{className:"url-set-btn",onClick:()=>tt("audio",te),children:"OK"})]})]}),i.jsx("button",{className:"submit-btn",onClick:En,children:"Agregar tarjeta"}),p&&i.jsx("div",{className:"success-msg",children:"✓ Guardada"})]}),o==="bulk"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Array JSON"}),i.jsx("textarea",{className:"bulk-textarea",value:L,onChange:D=>R(D.target.value),placeholder:r.bulkPh})]}),i.jsxs("div",{className:"bulk-schema",children:["Campos: ",i.jsx("code",{children:"german"})," ✦ ",i.jsx("code",{children:"translation"})," ✦ ",i.jsx("code",{children:"note"})," (opcional)"]}),i.jsxs("label",{className:"bulk-replace-row",children:[i.jsx("input",{type:"checkbox",checked:pt,onChange:D=>et(D.target.checked)}),i.jsx("span",{children:"Reemplazar todo el mazo (desactiva para agregar encima)"})]}),i.jsx("button",{className:"submit-btn",onClick:Vc,children:"Importar"}),W&&i.jsx("div",{className:W.ok?"success-msg":"error-msg",children:W.msg})]})]})}function $p({card:e,onEdit:t,onConvert:n}){const[r,l]=b.useState(!1),[o,a]=b.useState(null),[s,u]=b.useState(null);async function c(){l(!0),u(null);try{a(await Ac(e,"mnemonic"))}catch(g){u(g.message)}finally{l(!1)}}function h(){t({...e,note:o,lapses:0})}return i.jsxs("div",{className:"list-item leech-item",children:[i.jsx("div",{style:{width:"28px"}}),i.jsxs("div",{className:"li-main",children:[i.jsx("div",{className:"li-german",children:e.german}),i.jsx("div",{className:"li-trans",children:e.translation}),o&&i.jsx("div",{className:"leech-hint",children:o}),s&&i.jsx("div",{className:"leech-error",children:s}),i.jsxs("div",{className:"leech-actions",children:[i.jsx("button",{className:"leech-btn",onClick:c,disabled:r,children:r?"Consultando IA…":o?"Otra pista":"✦ Generar pista"}),o&&i.jsx("button",{className:"leech-btn primary",onClick:h,children:"Guardar como nota"}),i.jsx("button",{className:"leech-btn",onClick:()=>n(e),children:"🖼 Convertir a imagen"})]})]}),i.jsxs("div",{className:"leech-badge",title:"Veces olvidada",children:[e.lapses,"×"]})]})}function Bp({cards:e,stats:t,onEdit:n,language:r}){const l=Date.now(),o=864e5,[a,s]=b.useState(null),u=Sn(),c=t&&t.day===u?t.todayCount:0,g=t&&t.day&&Uc(t.day,u)<=1?t.currentStreak:0,m=(t==null?void 0:t.longestStreak)??0,v=[{label:"Nuevas",color:"#B4642F",count:0},{label:"Hoy",color:"#C8825B",count:0},{label:"Mañana",color:"#D29E78",count:0},{label:"3–7 días",color:"#DBB596",count:0},{label:"8–30 días",color:"#E2CBB3",count:0},{label:"+30 días",color:"#E8D9C5",count:0}];for(const x of e){const C=(x.nextReview-l)/o;x.repetitions===0?v[0].count++:C<=0?v[1].count++:C<=1?v[2].count++:C<=7?v[3].count++:C<=30?v[4].count++:v[5].count++}const w=Math.max(...v.map(x=>x.count),1),N=e.length,F=e.filter(jp).sort((x,j)=>(j.lapses??0)-(x.lapses??0)),f=x=>x.repetitions===0&&x.lastGrade==null,d=(t==null?void 0:t.dailyNewLimit)??mr,p=t&&t.day===Sn()?t.newToday??0:0,y=e.filter(x=>x.nextReview<=l&&f(x)).length,k=e.filter(x=>x.nextReview<=l&&!f(x)).length+Math.min(y,Math.max(0,d-p));return N?i.jsxs("div",{className:"stats-view",children:[i.jsxs("div",{className:"stats-header",children:[i.jsx("div",{className:"stats-title",children:"Estado del mazo"}),i.jsxs("div",{className:"stats-total",children:[N," tarjeta",N!==1?"s":""," en total"]})]}),i.jsxs("div",{className:"streak-banner",children:[i.jsxs("div",{className:"streak-main",children:[i.jsx("span",{className:"streak-flame",children:"🔥"}),i.jsx("span",{className:"streak-num",children:g}),i.jsxs("span",{className:"streak-unit",children:[g===1?"día":"días"," de racha"]})]}),i.jsxs("div",{className:"streak-sub",children:[i.jsxs("span",{children:["Hoy: ",i.jsx("strong",{children:c})]}),i.jsxs("span",{children:["Récord: ",i.jsx("strong",{children:m})]})]})]}),i.jsx("div",{className:"stats-chart",children:v.map((x,j)=>{const C=w>0?x.count/w*100:0,T=N>0?Math.round(x.count/N*100):0;return i.jsxs("div",{className:"stats-row",children:[i.jsx("div",{className:"stats-row-label",children:x.label}),i.jsx("div",{className:"stats-bar-wrap",children:i.jsx("div",{className:"stats-bar",style:{width:`${C}%`,background:x.color}})}),i.jsxs("div",{className:"stats-row-count",children:[i.jsx("span",{className:"stats-n",children:x.count}),i.jsxs("span",{className:"stats-pct",children:[T,"%"]})]})]},j)})}),i.jsxs("div",{className:"stats-footer",children:[i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"#cc0000"},children:k}),i.jsx("div",{className:"kpi-label",children:"para estudiar hoy"})]}),i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"#ffcc00"},children:e.filter(x=>x.repetitions>0&&x.interval>=21).length}),i.jsx("div",{className:"kpi-label",children:"maduras (≥21 días)"})]}),i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"#aaa"},children:N>0?(e.reduce((x,j)=>x+j.easiness,0)/N).toFixed(2):"—"}),i.jsx("div",{className:"kpi-label",children:"easiness promedio"})]}),i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"var(--danger)"},children:F.length}),i.jsx("div",{className:"kpi-label",children:"difíciles"})]})]}),F.length>0&&i.jsxs("div",{className:"leech-section",children:[i.jsx("div",{className:"leech-title",children:"Cartas difíciles"}),i.jsx("div",{className:"card-list",children:F.map(x=>i.jsx($p,{card:x,onEdit:n,onConvert:s},x.id))})]}),a&&i.jsx(Bc,{card:{...a,cardType:"type1"},language:r,onSave:x=>{n({...x,lapses:0}),s(null)},onClose:()=>s(null)})]}):i.jsx("div",{className:"deck-empty",children:i.jsxs("p",{children:["Sin tarjetas aún.",i.jsx("br",{}),"Ve a ",i.jsx("strong",{children:"+ Agregar"})," para empezar."]})})}function Vp({card:e,onSave:t,onClose:n}){const[r,l]=b.useState(e.imageUrl||""),[o,a]=b.useState(null),[s,u]=b.useState(!1),c=()=>{const h=r.trim();t({...e,imageUrl:h||null}),a("ok"),setTimeout(n,800)};return i.jsx("div",{className:"img-preview-overlay",onClick:n,children:i.jsxs("div",{className:"img-preview-dialog",onClick:h=>h.stopPropagation(),children:[i.jsxs("div",{className:"img-preview-header",children:[i.jsx("div",{className:"img-preview-word",children:e.german}),i.jsx("button",{className:"img-preview-close",onClick:n,children:"×"})]}),i.jsx("div",{className:"img-preview-frame",children:e.imageUrl&&!s?i.jsx("img",{src:qe(e.imageUrl),alt:"",onError:()=>u(!0)}):i.jsxs("div",{className:"img-preview-broken",children:[i.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),i.jsx("div",{children:s?"Imagen rota":"Sin imagen"})]})}),i.jsxs("div",{className:"img-preview-url-row",children:[i.jsx("input",{className:"img-preview-url-input",value:r,onChange:h=>{l(h.target.value),u(!1),a(null)},placeholder:"https://upload.wikimedia.org/…",onKeyDown:h=>h.key==="Enter"&&c()}),i.jsx("button",{className:"img-preview-save-btn",onClick:c,children:"Guardar"})]}),o==="ok"&&i.jsx("div",{className:"img-preview-status ok",children:"✓ Guardado"})]})})}function Wp({card:e,onClose:t}){var o;const n=e.cardType||"type1";(o=e.german.match(/^(der|die|das)/i))!=null&&o[1];const r=e.german.replace(/^(der|die|das)\s+/i,""),l=(e.example||"").replace("___",e.german);return i.jsx("div",{className:"img-preview-overlay",onClick:t,children:i.jsxs("div",{className:"card-preview-dialog",onClick:a=>a.stopPropagation(),children:[i.jsxs("div",{className:"img-preview-header",children:[i.jsxs("div",{className:"img-preview-word",children:[i.jsxs("span",{style:{fontSize:"0.6rem",color:"#555",letterSpacing:"0.1em",textTransform:"uppercase",marginRight:"0.5rem"},children:["Tipo ",n.replace("type","")]}),e.german]}),i.jsx("button",{className:"img-preview-close",onClick:t,children:"×"})]}),i.jsxs("div",{className:"card-preview-side",children:[i.jsx("div",{className:"card-preview-label",children:"Frente"}),n==="type1"&&i.jsx("div",{className:"card-preview-body",children:e.imageUrl?i.jsx("img",{src:qe(e.imageUrl),alt:"",className:"card-preview-img",onError:a=>a.target.style.display="none"}):i.jsxs("div",{className:"img-preview-broken",children:[i.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),i.jsx("div",{children:"Sin imagen"})]})}),n==="type2"&&i.jsxs("div",{className:"card-preview-body",children:[i.jsx("div",{className:"card-preview-big",children:e.german}),e.example&&i.jsx("div",{className:"card-preview-example",children:e.example})]}),n==="type4"&&i.jsxs("div",{className:"card-preview-body",children:[i.jsx("div",{className:"card-preview-trans",children:e.translation}),e.note&&i.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type5"&&i.jsx("div",{className:"card-preview-body",children:i.jsx("div",{className:"card-preview-example",children:(e.example||"").replace("___","_____")})}),n==="type6"&&i.jsxs("div",{className:"card-preview-body",children:[e.imageUrl&&i.jsx("img",{src:qe(e.imageUrl),alt:"",className:"card-preview-img",onError:a=>a.target.style.display="none"}),i.jsxs("div",{className:"card-preview-big",style:{color:"#888"},children:["___ ",r]})]})]}),i.jsxs("div",{className:"card-preview-side",children:[i.jsx("div",{className:"card-preview-label",children:"Dorso"}),i.jsxs("div",{className:"card-preview-body",children:[(n==="type1"||n==="type6")&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-preview-big",children:e.german}),e.note&&i.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type2"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-preview-trans",children:e.translation}),e.exampleTranslation&&i.jsxs("div",{className:"card-preview-example",style:{color:"#666"},children:['"',e.exampleTranslation,'"']})]}),(n==="type4"||n==="type5")&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-preview-big",children:e.german}),n==="type5"&&l&&i.jsx("div",{className:"card-preview-example",children:l})]})]})]}),i.jsx("button",{className:"continuar-btn",style:{alignSelf:"center"},onClick:t,children:"Cerrar"})]})})}function Bc({card:e,onSave:t,onClose:n,language:r}){var x;const l=Ie[r]||Ie.de,o=Zi(r),[a,s]=b.useState(e.cardType||"type1"),[u,c]=b.useState(e.german),[h,g]=b.useState(e.translation),[m,v]=b.useState(e.note||""),[w,N]=b.useState(e.example||""),[F,f]=b.useState(e.exampleTranslation||""),[d,p]=b.useState(e.imageUrl||""),[y,z]=b.useState(e.audioUrl||""),k=()=>{!u.trim()||!h.trim()||t({...e,cardType:a,german:u.trim(),translation:h.trim(),note:m.trim(),example:w.trim(),exampleTranslation:F.trim(),imageUrl:d.trim()||null,audioUrl:y.trim()||null})};return i.jsx("div",{className:"confirm-overlay",onClick:n,children:i.jsxs("div",{className:"edit-dialog",onClick:j=>j.stopPropagation(),children:[i.jsx("div",{className:"confirm-title",children:"Editar tarjeta"}),i.jsxs("div",{className:"edit-fields",children:[i.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:o.map(j=>i.jsxs("button",{className:`type-btn ${a===j.id?"active":""}`,onClick:()=>s(j.id),children:[j.name,i.jsx("span",{className:"type-tip",role:"tooltip",children:j.tip})]},j.id))}),i.jsx("div",{className:"type-tip-static",children:(x=o.find(j=>j.id===a))==null?void 0:x.tip}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:a==="type5"?"Palabra que va en el hueco":l.name}),i.jsx("input",{value:u,onChange:j=>c(j.target.value),placeholder:a==="type5"?l.blankWordPh:""})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción"}),i.jsx("input",{value:h,onChange:j=>g(j.target.value)})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Nota"}),i.jsx("input",{value:m,onChange:j=>v(j.target.value),placeholder:"artículo, truco…"})]}),(a==="type2"||a==="type5")&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{children:a==="type5"?"Oración con ___ (espacio en blanco)":l.exLabel}),i.jsx("input",{value:w,onChange:j=>N(j.target.value),placeholder:a==="type5"?l.blankPh:l.exPh})]}),a==="type2"&&i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción del ejemplo"}),i.jsx("input",{value:F,onChange:j=>f(j.target.value)})]})]}),["type1","type5","type6"].includes(a)&&i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"URL imagen"}),i.jsx("input",{value:d,onChange:j=>p(j.target.value),placeholder:"https://…"})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"URL audio"}),i.jsx("input",{value:y,onChange:j=>z(j.target.value),placeholder:"https://…"})]})]}),i.jsxs("div",{className:"confirm-actions",children:[i.jsx("button",{className:"confirm-cancel",onClick:n,children:"Cancelar"}),i.jsx("button",{className:"confirm-ok",onClick:k,children:"Guardar"})]})]})})}function Hp({card:e,onClick:t}){const[n,r]=b.useState(!1);return Le.useEffect(()=>{r(!1)},[e.imageUrl]),!e.imageUrl||n?i.jsx("button",{className:"preview-btn",onClick:t,title:"Sin imagen — click para agregar",children:i.jsx("div",{className:"preview-thumb-empty",children:"+"})}):i.jsx("button",{className:"preview-btn",onClick:t,title:"Vista previa de imagen",children:i.jsx("img",{className:"preview-thumb",src:qe(e.imageUrl),alt:"",onError:()=>r(!0)})})}function Qp({cards:e,onDelete:t,onDeleteAll:n,onEdit:r,language:l}){const[o,a]=b.useState(!1),s=()=>{const C=JSON.stringify(e,null,2),T=new Blob([C],{type:"application/json"}),V=URL.createObjectURL(T),P=document.createElement("a"),M=new Date().toISOString().slice(0,10);P.href=V,P.download=`deutschkarten-backup-${M}.json`,P.click(),URL.revokeObjectURL(V)},[u,c]=b.useState(""),[h,g]=b.useState(null),[m,v]=b.useState(null),[w,N]=b.useState(null),[F,f]=b.useState(null),d=Le.useRef(null),[p,y]=b.useState("all"),z=C=>{d.current&&clearTimeout(d.current),f(C),d.current=setTimeout(()=>f(null),2200)},k=e.filter(C=>C.cardType==="type1"||C.cardType==="type5"||C.cardType==="type6"),x=[...e].sort((C,T)=>C.nextReview-T.nextReview).filter(C=>{if(u.trim()){const T=u.toLowerCase();if(!C.german.toLowerCase().includes(T)&&!C.translation.toLowerCase().includes(T)&&!(C.note||"").toLowerCase().includes(T))return!1}return p==="broken"?(C.cardType==="type1"||C.cardType==="type5"||C.cardType==="type6")&&!C.imageUrl:p==="ok"?(C.cardType==="type1"||C.cardType==="type5"||C.cardType==="type6")&&!!C.imageUrl:!0}),j=k.filter(C=>!C.imageUrl).length;return i.jsxs("div",{children:[i.jsxs("div",{className:"list-header",children:[i.jsx("div",{className:"list-title",children:"Todas las tarjetas"}),i.jsxs("div",{className:"list-header-right",children:[i.jsxs("div",{className:"list-count",children:[e.length," total"]}),e.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"export-btn",onClick:s,title:"Exportar backup JSON",children:"↓ Backup"}),i.jsx("button",{className:"delete-all-btn",onClick:()=>a(!0),children:"Borrar todo"})]})]})]}),i.jsxs("div",{className:"list-search-wrap",children:[i.jsx("input",{className:"list-search",value:u,onChange:C=>c(C.target.value),placeholder:"Buscar por palabra, traducción o nota…"}),u&&i.jsx("button",{className:"list-search-clear",onClick:()=>c(""),children:"×"})]}),i.jsxs("div",{className:"list-filter-row",children:[i.jsx("button",{className:`list-filter-btn ${p==="all"?"active":""}`,onClick:()=>y("all"),children:"Todas"}),i.jsxs("button",{className:`list-filter-btn ${p==="broken"?"active":""}`,onClick:()=>y("broken"),children:["Sin imagen ",j>0&&`(${j})`]}),i.jsx("button",{className:`list-filter-btn ${p==="ok"?"active":""}`,onClick:()=>y("ok"),children:"Con imagen"})]}),o&&i.jsx("div",{className:"confirm-overlay",onClick:()=>a(!1),children:i.jsxs("div",{className:"confirm-dialog",onClick:C=>C.stopPropagation(),children:[i.jsx("div",{className:"confirm-title",children:"¿Borrar todo el mazo?"}),i.jsxs("div",{className:"confirm-body",children:["Se eliminarán ",i.jsxs("strong",{children:[e.length," tarjeta",e.length!==1?"s":""]})," y todo su progreso. Esta acción no se puede deshacer."]}),i.jsxs("div",{className:"confirm-actions",children:[i.jsx("button",{className:"confirm-cancel",onClick:()=>a(!1),children:"Cancelar"}),i.jsx("button",{className:"confirm-ok",onClick:()=>{n(),a(!1)},children:"Sí, borrar todo"})]})]})}),h&&i.jsx(Bc,{card:h,language:l,onSave:C=>{r(C),g(null),z(`✓ "${C.german}" actualizado`)},onClose:()=>g(null)}),m&&i.jsx(Vp,{card:m,onSave:C=>{r(C),v(C),z("✓ Imagen actualizada")},onClose:()=>v(null)}),w&&i.jsx(Wp,{card:w,onClose:()=>N(null)}),i.jsxs("div",{className:"card-list",children:[x.length===0&&i.jsx("div",{className:"list-empty",children:u?`Sin resultados para "${u}"`:"Sin tarjetas en este filtro"}),x.map(C=>{const T=C.nextReview<=Date.now(),V=C.cardType==="type1"||C.cardType==="type5"||C.cardType==="type6";return i.jsxs("div",{className:"list-item",children:[V?i.jsx(Hp,{card:C,onClick:()=>v(C)}):i.jsx("div",{style:{width:"28px"}}),i.jsxs("div",{className:"li-main",children:[i.jsx("div",{className:"li-german",children:C.german}),i.jsx("div",{className:"li-trans",children:C.translation}),C.note&&i.jsx("div",{className:"li-note",children:C.note})]}),i.jsx("div",{className:`li-next ${T?"due":""}`,children:Sp(C.nextReview)}),i.jsxs("div",{className:"li-actions",children:[i.jsx("button",{className:"preview-card-btn",onClick:()=>N(C),title:"Vista previa",children:i.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:[i.jsx("path",{d:"M6.5 1C3.5 1 1 4 1 5C1 6 3.5 9 6.5 9C9.5 9 12 6 12 5C12 4 9.5 1 6.5 1Z",stroke:"currentColor",strokeWidth:"1.1",fill:"none"}),i.jsx("circle",{cx:"6.5",cy:"5",r:"1.5",stroke:"currentColor",strokeWidth:"1.1",fill:"none"})]})}),i.jsx("button",{className:"edit-btn",onClick:()=>g(C),children:"✎"}),i.jsx("button",{className:"delete-btn",onClick:()=>t(C.id),children:"×"})]})]},C.id)})]})]})}function Kp({onAuth:e}){const[t,n]=b.useState(""),[r,l]=b.useState(""),[o,a]=b.useState(null),[s,u]=b.useState(!1);async function c(h){h.preventDefault(),a(null),u(!0);try{const g=await Yt("/auth/login",{method:"POST",body:JSON.stringify({username:t,password:r})});g.token&&Np(g.token),e(g.username,g.language||"de")}catch(g){a(g.message)}finally{u(!1)}}return i.jsxs("div",{className:"auth-screen",children:[i.jsxs("style",{children:[ni,$c]}),i.jsx("div",{className:"noise"}),i.jsxs("div",{className:"auth-card",children:[i.jsx("div",{className:"auth-logo",children:i.jsxs("span",{className:"logo-text",children:["Sprachen",i.jsx("span",{children:"Karten"})]})}),i.jsx("p",{className:"auth-tagline",children:"Tarjetas de idiomas"}),i.jsxs("form",{className:"auth-form",onSubmit:c,children:[i.jsx("input",{className:"auth-input",type:"text",placeholder:"Usuario",value:t,autoComplete:"username",onChange:h=>n(h.target.value),required:!0}),i.jsx("input",{className:"auth-input",type:"password",placeholder:"Contraseña",value:r,autoComplete:"current-password",onChange:h=>l(h.target.value),required:!0}),o&&i.jsx("p",{className:"auth-error",children:o}),i.jsx("button",{className:"auth-btn",type:"submit",disabled:s,children:s?"…":"Entrar"})]})]})]})}function Yp({stats:e,onChangeLimit:t}){const n=(e==null?void 0:e.dailyNewLimit)??mr,r=e&&e.day===Sn()?e.newToday??0:0,l=[5,10,15,20,30,50],o=a=>t(Math.max(0,Math.min(200,a)));return i.jsx("div",{className:"settings-view",children:i.jsxs("div",{className:"settings-section",children:[i.jsx("div",{className:"settings-label",children:"Tarjetas nuevas por día"}),i.jsx("p",{className:"settings-help",children:"Cuántas tarjetas que nunca has visto entran al repaso cada día. Los repasos de tarjetas que ya aprendiste no tienen límite — siempre aparecen cuando toca."}),i.jsxs("div",{className:"settings-stepper",children:[i.jsx("button",{className:"step-btn",onClick:()=>o(n-5),disabled:n<=0,children:"−"}),i.jsx("div",{className:"step-val",children:n}),i.jsx("button",{className:"step-btn",onClick:()=>o(n+5),disabled:n>=200,children:"+"})]}),i.jsx("div",{className:"settings-presets",children:l.map(a=>i.jsx("button",{className:`preset-chip ${n===a?"active":""}`,onClick:()=>o(a),children:a},a))}),i.jsxs("p",{className:"settings-note",children:["Recomendado: ",i.jsx("strong",{children:"20"})," al día — un ritmo sostenible para aprender un idioma sin saturarte de repasos. Pon ",i.jsx("strong",{children:"0"})," para pausar las nuevas y repasar solo lo que ya tienes."]}),i.jsxs("div",{className:"settings-today",children:["Hoy: ",i.jsxs("strong",{children:[r,"/",n]})," nuevas introducidas"]})]})})}function Gp({language:e}){const t=(Ie[e]||Ie.de).name.toLowerCase(),n=Zi(e);return i.jsxs("div",{className:"help-view",children:[i.jsxs("p",{className:"help-intro",children:["Una app de tarjetas con ",i.jsx("strong",{children:"repetición espaciada"})," para aprender ",t," desde el español. En vez de repasar todo cada día, te muestra cada palabra justo cuando estás a punto de olvidarla."]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"Cómo te ayuda a aprender"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Repetición espaciada."})," Cada palabra reaparece en intervalos crecientes (1 día → 6 días → semanas → meses). Repasar justo antes de olvidar fija la memoria a largo plazo con el mínimo esfuerzo."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Recuerdo activo."})," Te esfuerzas en recordar antes de ver la respuesta. Ese esfuerzo es lo que construye memoria — releer no."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Calificación honesta."})," Al responder dices qué tan bien la recordaste y eso ajusta cuándo vuelve: si fallas regresa pronto; si la dominas, se espacia."]})]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"El ciclo diario"}),i.jsxs("p",{children:["En ",i.jsx("strong",{children:"Estado"})," ves cuántas tarjetas tocan hoy y cómo se reparten en el tiempo (Nuevas, Hoy, Mañana, 3–7 días…). Repasa lo que toca cada día: la racha 🔥 premia la constancia, y poco y a diario rinde más que sesiones largas y salteadas."]})]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"Tipos de tarjeta"}),i.jsx("p",{children:"Cada tipo ataca la palabra desde un ángulo distinto. Variar refuerza el recuerdo:"}),i.jsx("ul",{className:"help-types",children:n.map(r=>i.jsxs("li",{children:[i.jsx("span",{className:"help-type-name",children:r.name}),i.jsx("span",{className:"help-type-tip",children:r.tip})]},r.id))})]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"Sácale provecho"}),i.jsxs("ul",{className:"help-tips",children:[i.jsxs("li",{children:["Estudia un poco ",i.jsx("strong",{children:"cada día"}),": 10 minutos diarios cunden más que dos horas el domingo."]}),i.jsx("li",{children:"Califica con honestidad — engañarte solo retrasa lo que de verdad no sabes."}),i.jsxs("li",{children:["Añade ",i.jsx("strong",{children:"ejemplos e imágenes"}),": el contexto y lo visual anclan mejor que una palabra suelta."]}),i.jsx("li",{children:"Usa el audio 🔊 para fijar la pronunciación desde el principio."}),i.jsxs("li",{children:["¿Muchas palabras de golpe? En ",i.jsx("strong",{children:"+ Agregar"})," puedes pegar una lista en lote."]}),i.jsxs("li",{children:["En ",i.jsx("strong",{children:"Estado"}),", revisa ",i.jsx("strong",{children:"Cartas difíciles"}),": las que olvidas una y otra vez. Genera una pista mnemónica con IA o conviértelas en tarjeta con imagen para romper el bloqueo."]})]})]})]})}function Xp(){const[e,t]=b.useState(null),[n,r]=b.useState("de"),[l,o]=b.useState([]),[a,s]=b.useState(null),[u,c]=b.useState(!1),[h,g]=b.useState("study"),[m,v]=b.useState(!1);b.useEffect(()=>{xp(n)},[n]),b.useEffect(()=>{if(!Ic()){t(!1);return}(async()=>{try{const P=await Yt("/auth/me"),M=await hs(),I=await vs().catch(()=>null);t(P.username),r(P.language||"de"),o(M),s(I),c(!0)}catch{ms(),t(!1)}})()},[]),b.useEffect(()=>{if(!e||!u)return;const P=setTimeout(()=>{gs(l).catch(()=>{})},800);return()=>clearTimeout(P)},[l,e,u]),b.useEffect(()=>{if(!e||!u||!a)return;const P=setTimeout(()=>{ys(a).catch(()=>{})},800);return()=>clearTimeout(P)},[a,e,u]);const w=b.useRef(l);b.useEffect(()=>{w.current=l},[l]);const N=b.useRef(e);b.useEffect(()=>{N.current=e},[e]);const F=b.useRef(u);b.useEffect(()=>{F.current=u},[u]);const f=b.useRef(a);b.useEffect(()=>{f.current=a},[a]),b.useEffect(()=>{const P=()=>{if(!N.current||!F.current)return;const M=w.current,I=M.length===0?"?allowEmpty=true":"";fetch(`${jn}/cards${I}`,{method:"PUT",headers:{"Content-Type":"application/json",...pr()},body:JSON.stringify(M),keepalive:!0}),f.current&&fetch(`${jn}/stats`,{method:"PUT",headers:{"Content-Type":"application/json",...pr()},body:JSON.stringify(f.current),keepalive:!0})};return window.addEventListener("beforeunload",P),()=>window.removeEventListener("beforeunload",P)},[]);async function d(){u&&(await gs(l).catch(()=>{}),a&&await ys(a).catch(()=>{})),ms(),c(!1),t(!1),o([]),s(null)}async function p(P,M){c(!1),t(P),r(M||"de");try{const I=await hs(),le=await vs().catch(()=>null);o(I),s(le),c(!0)}catch{o([])}}const y=b.useCallback(P=>{const M={id:Date.now().toString(),cardType:P.cardType||"type1",german:P.german,translation:P.translation,note:P.note||"",example:P.example||"",exampleTranslation:P.exampleTranslation||"",imageUrl:P.imageUrl||null,audioUrl:P.audioUrl||null,repetitions:0,easiness:2.5,interval:0,nextReview:Date.now(),lastGrade:null,lapses:0};o(I=>[...I,M])},[]),z=b.useCallback((P,M,I=!1)=>{o(le=>le.map($=>$.id===P?{...$,...M}:$)),s(le=>Cp(le,I))},[]),k=b.useCallback(P=>{s(M=>({...M||{day:Sn(),todayCount:0,currentStreak:0,longestStreak:0,newToday:0},dailyNewLimit:P}))},[]),x=b.useCallback(P=>{o(M=>M.filter(I=>I.id!==P))},[]),j=b.useCallback(()=>{o([])},[]),C=b.useCallback(P=>{o(M=>M.map(I=>I.id===P.id?P:I))},[]),T=b.useCallback((P,M=!1)=>{const I=Date.now(),le=P.map(($,te)=>({id:(I+te).toString(),german:$.german.trim(),translation:$.translation.trim(),note:($.note||"").trim(),cardType:$.cardType||"type1",imageUrl:$.imageUrl||null,audioUrl:$.audioUrl||null,example:$.example||"",exampleTranslation:$.exampleTranslation||"",repetitions:0,easiness:2.5,interval:0,nextReview:I,lastGrade:null,lapses:0}));o($=>M?le:[...$,...le])},[]);if(e===null)return i.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#111111",color:"#888",fontFamily:"'DM Mono', monospace"},children:[i.jsx("style",{children:ni}),"Cargando…"]});if(e===!1)return i.jsx(Kp,{onAuth:p});const V=[{id:"study",label:"Repasar"},{id:"add",label:"+ Agregar"},{id:"list",label:"Lista"},{id:"stats",label:"Estado"},{id:"settings",label:"Ajustes"},{id:"help",label:"Ayuda"}];return i.jsxs(i.Fragment,{children:[i.jsxs("style",{children:[ni,$c]}),i.jsx("div",{className:"noise"}),i.jsxs("div",{className:"app",children:[i.jsxs("header",{className:"header",children:[i.jsxs("div",{className:"logo",children:[n==="fr"?i.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"9.33",height:"19",x:"0",fill:"#002395"}),i.jsx("rect",{width:"9.34",height:"19",x:"9.33",fill:"#fff"}),i.jsx("rect",{width:"9.33",height:"19",x:"18.67",fill:"#ED2939"})]}):i.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"28",height:"6.33",y:"0",fill:"#000"}),i.jsx("rect",{width:"28",height:"6.34",y:"6.33",fill:"#D00"}),i.jsx("rect",{width:"28",height:"6.33",y:"12.67",fill:"#FFCE00"})]}),i.jsx("div",{className:"logo-text",children:n==="fr"?i.jsxs(i.Fragment,{children:["Français",i.jsx("span",{children:"Cartes"})]}):i.jsxs(i.Fragment,{children:["Deutsch",i.jsx("span",{children:"Karten"})]})})]}),i.jsxs("nav",{className:"nav",children:[V.map(P=>i.jsx("button",{className:`nav-btn ${h===P.id?"active":""}`,onClick:()=>g(P.id),children:P.label},P.id)),i.jsxs("button",{className:"nav-btn",onClick:d,title:`Sesión: ${e}`,style:{marginLeft:"auto",opacity:.6},children:["↩ ",e]})]}),i.jsx("button",{className:"hamburger-btn",onClick:()=>v(P=>!P),"aria-label":"Menú","aria-expanded":m,children:m?"✕":"☰"}),m&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"menu-backdrop",onClick:()=>v(!1)}),i.jsxs("div",{className:"menu-panel",children:[V.map(P=>i.jsx("button",{className:`menu-item ${h===P.id?"active":""}`,onClick:()=>{g(P.id),v(!1)},children:P.label},P.id)),i.jsxs("button",{className:"menu-item menu-logout",onClick:()=>{v(!1),d()},children:["↩ ",e]})]})]})]}),h==="study"&&i.jsx(Up,{cards:l,onGrade:z,onUpdateCards:o,language:n,stats:a}),h==="add"&&i.jsx(Ap,{onAdd:P=>{y(P),g("study")},onBulkAdd:(P,M)=>{T(P,M),g("list")},language:n}),h==="list"&&i.jsx(Qp,{cards:l,onDelete:x,onDeleteAll:j,onEdit:C,language:n}),h==="stats"&&i.jsx(Bp,{cards:l,stats:a,onEdit:C,language:n}),h==="settings"&&i.jsx(Yp,{stats:a,onChangeLimit:k}),h==="help"&&i.jsx(Gp,{language:n})]})]})}Dc(document.getElementById("root")).render(i.jsx(b.StrictMode,{children:i.jsx(Xp,{})}));
