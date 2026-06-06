(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var os={exports:{}},pl={},as={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),Sc=Symbol.for("react.portal"),jc=Symbol.for("react.fragment"),Nc=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),Ec=Symbol.for("react.provider"),zc=Symbol.for("react.context"),_c=Symbol.for("react.forward_ref"),Tc=Symbol.for("react.suspense"),bc=Symbol.for("react.memo"),Pc=Symbol.for("react.lazy"),Ko=Symbol.iterator;function Dc(e){return e===null||typeof e!="object"?null:(e=Ko&&e[Ko]||e["@@iterator"],typeof e=="function"?e:null)}var ss={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},us=Object.assign,cs={};function xn(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||ss}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ds(){}ds.prototype=xn.prototype;function Gi(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||ss}var Xi=Gi.prototype=new ds;Xi.constructor=Gi;us(Xi,xn.prototype);Xi.isPureReactComponent=!0;var Yo=Array.isArray,fs=Object.prototype.hasOwnProperty,Zi={current:null},ps={key:!0,ref:!0,__self:!0,__source:!0};function ms(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)fs.call(t,r)&&!ps.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:ar,type:e,key:i,ref:o,props:l,_owner:Zi.current}}function Mc(e,t){return{$$typeof:ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function Lc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Go=/\/+/g;function bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lc(""+e.key):t.toString(36)}function Pr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ar:case Sc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+bl(o,0):r,Yo(l)?(n="",e!=null&&(n=e.replace(Go,"$&/")+"/"),Pr(l,t,n,"",function(d){return d})):l!=null&&(Ji(l)&&(l=Mc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Go,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Yo(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+bl(i,s);o+=Pr(i,t,n,u,l)}else if(u=Dc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+bl(i,s++),o+=Pr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function mr(e,t,n){if(e==null)return e;var r=[],l=0;return Pr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Fc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Dr={transition:null},Rc={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Dr,ReactCurrentOwner:Zi};function hs(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!Ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=xn;F.Fragment=jc;F.Profiler=Cc;F.PureComponent=Gi;F.StrictMode=Nc;F.Suspense=Tc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rc;F.act=hs;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=us({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Zi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)fs.call(t,u)&&!ps.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:ar,type:e.type,key:l,ref:i,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:zc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ec,_context:e},e.Consumer=e};F.createElement=ms;F.createFactory=function(e){var t=ms.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:_c,render:e}};F.isValidElement=Ji;F.lazy=function(e){return{$$typeof:Pc,_payload:{_status:-1,_result:e},_init:Fc}};F.memo=function(e,t){return{$$typeof:bc,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Dr.transition;Dr.transition={};try{e()}finally{Dr.transition=t}};F.unstable_act=hs;F.useCallback=function(e,t){return fe.current.useCallback(e,t)};F.useContext=function(e){return fe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};F.useEffect=function(e,t){return fe.current.useEffect(e,t)};F.useId=function(){return fe.current.useId()};F.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return fe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};F.useRef=function(e){return fe.current.useRef(e)};F.useState=function(e){return fe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return fe.current.useTransition()};F.version="18.3.1";as.exports=F;var N=as.exports;const Ie=kc(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=N,Oc=Symbol.for("react.element"),Uc=Symbol.for("react.fragment"),$c=Object.prototype.hasOwnProperty,Ac=Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bc={key:!0,ref:!0,__self:!0,__source:!0};function gs(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)$c.call(t,r)&&!Bc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Oc,type:e,key:i,ref:o,props:l,_owner:Ac.current}}pl.Fragment=Uc;pl.jsx=gs;pl.jsxs=gs;os.exports=pl;var a=os.exports,vs={exports:{}},je={},ys={exports:{}},xs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,P){var M=z.length;z.push(P);e:for(;0<M;){var V=M-1>>>1,X=z[V];if(0<l(X,P))z[V]=P,z[M]=X,M=V;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var P=z[0],M=z.pop();if(M!==P){z[0]=M;e:for(var V=0,X=z.length,Et=X>>>1;V<Et;){var Ee=2*(V+1)-1,Ht=z[Ee],Ye=Ee+1,D=z[Ye];if(0>l(Ht,M))Ye<X&&0>l(D,Ht)?(z[V]=D,z[Ye]=M,V=Ye):(z[V]=Ht,z[Ee]=M,V=Ee);else if(Ye<X&&0>l(D,M))z[V]=D,z[Ye]=M,V=Ye;else break e}}return P}function l(z,P){var M=z.sortIndex-P.sortIndex;return M!==0?M:z.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],y=1,v=null,m=3,x=!1,k=!1,j=!1,L=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=z)r(d),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(d)}}function g(z){if(j=!1,p(z),!k)if(n(u)!==null)k=!0,Vt(S);else{var P=n(d);P!==null&&Wt(g,P.startTime-z)}}function S(z,P){k=!1,j&&(j=!1,f(h),h=-1),x=!0;var M=m;try{for(p(P),v=n(u);v!==null&&(!(v.expirationTime>P)||z&&!A());){var V=v.callback;if(typeof V=="function"){v.callback=null,m=v.priorityLevel;var X=V(v.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?v.callback=X:v===n(u)&&r(u),p(P)}else r(u);v=n(u)}if(v!==null)var Et=!0;else{var Ee=n(d);Ee!==null&&Wt(g,Ee.startTime-P),Et=!1}return Et}finally{v=null,m=M,x=!1}}var C=!1,E=null,h=-1,b=5,T=-1;function A(){return!(e.unstable_now()-T<b)}function K(){if(E!==null){var z=e.unstable_now();T=z;var P=!0;try{P=E(!0,z)}finally{P?Ce():(C=!1,E=null)}}else C=!1}var Ce;if(typeof c=="function")Ce=function(){c(K)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,Bt=At.port2;At.port1.onmessage=K,Ce=function(){Bt.postMessage(null)}}else Ce=function(){L(K,0)};function Vt(z){E=z,C||(C=!0,Ce())}function Wt(z,P){h=L(function(){z(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,Vt(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var M=m;m=P;try{return z()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,P){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var M=m;m=z;try{return P()}finally{m=M}},e.unstable_scheduleCallback=function(z,P,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,z){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=M+X,z={id:y++,callback:P,priorityLevel:z,startTime:M,expirationTime:X,sortIndex:-1},M>V?(z.sortIndex=M,t(d,z),n(u)===null&&z===n(d)&&(j?(f(h),h=-1):j=!0,Wt(g,M-V))):(z.sortIndex=X,t(u,z),k||x||(k=!0,Vt(S))),z},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(z){var P=m;return function(){var M=m;m=P;try{return z.apply(this,arguments)}finally{m=M}}}})(xs);ys.exports=xs;var Vc=ys.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc=N,Se=Vc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ws=new Set,Wn={};function Ut(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)ws.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=Object.prototype.hasOwnProperty,Hc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xo={},Zo={};function Qc(e){return ni.call(Zo,e)?!0:ni.call(Xo,e)?!1:Hc.test(e)?Zo[e]=!0:(Xo[e]=!0,!1)}function Kc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yc(e,t,n,r){if(t===null||typeof t>"u"||Kc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var qi=/[\-:]([a-z])/g;function eo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qi,eo);le[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qi,eo);le[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qi,eo);le[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function to(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yc(t,n,l,r)&&(n=null),r||l===null?Qc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),no=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),ks=Symbol.for("react.provider"),Ss=Symbol.for("react.context"),ro=Symbol.for("react.forward_ref"),li=Symbol.for("react.suspense"),ii=Symbol.for("react.suspense_list"),lo=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),js=Symbol.for("react.offscreen"),Jo=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=Jo&&e[Jo]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Pl;function Pn(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var Dl=!1;function Ml(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function Gc(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Kt:return"Portal";case ri:return"Profiler";case no:return"StrictMode";case li:return"Suspense";case ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ss:return(e.displayName||"Context")+".Consumer";case ks:return(e._context.displayName||"Context")+".Provider";case ro:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lo:return t=e.displayName||null,t!==null?t:oi(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return oi(e(t))}catch{}}return null}function Xc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oi(t);case 8:return t===no?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ns(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zc(e){var t=Ns(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Zc(e))}function Cs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ns(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ai(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Es(e,t){t=t.checked,t!=null&&to(e,"checked",t,!1)}function si(e,t){Es(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ui(e,t.type,n):t.hasOwnProperty("defaultValue")&&ui(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ea(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ui(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ci(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ta(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Dn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function zs(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function na(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _s(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_s(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Ts=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jc=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){Jc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function bs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function Ps(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=bs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var qc=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fi(e,t){if(t){if(qc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,an=null,sn=null;function ra(e){if(e=cr(e)){if(typeof hi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=yl(t),hi(e.stateNode,e.type,t))}}function Ds(e){an?sn?sn.push(e):sn=[e]:an=e}function Ms(){if(an){var e=an,t=sn;if(sn=an=null,ra(e),t)for(e=0;e<t.length;e++)ra(t[e])}}function Ls(e,t){return e(t)}function Fs(){}var Ll=!1;function Rs(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return Ls(e,t,n)}finally{Ll=!1,(an!==null||sn!==null)&&(Fs(),Ms())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var gi=!1;if(et)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){gi=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{gi=!1}function ed(e,t,n,r,l,i,o,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var Rn=!1,Wr=null,Hr=!1,vi=null,td={onError:function(e){Rn=!0,Wr=e}};function nd(e,t,n,r,l,i,o,s,u){Rn=!1,Wr=null,ed.apply(td,arguments)}function rd(e,t,n,r,l,i,o,s,u){if(nd.apply(this,arguments),Rn){if(Rn){var d=Wr;Rn=!1,Wr=null}else throw Error(w(198));Hr||(Hr=!0,vi=d)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Is(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function la(e){if($t(e)!==e)throw Error(w(188))}function ld(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return la(l),e;if(i===r)return la(l),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Os(e){return e=ld(e),e!==null?Us(e):null}function Us(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Us(e);if(t!==null)return t;e=e.sibling}return null}var $s=Se.unstable_scheduleCallback,ia=Se.unstable_cancelCallback,id=Se.unstable_shouldYield,od=Se.unstable_requestPaint,G=Se.unstable_now,ad=Se.unstable_getCurrentPriorityLevel,oo=Se.unstable_ImmediatePriority,As=Se.unstable_UserBlockingPriority,Qr=Se.unstable_NormalPriority,sd=Se.unstable_LowPriority,Bs=Se.unstable_IdlePriority,ml=null,Qe=null;function ud(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:fd,cd=Math.log,dd=Math.LN2;function fd(e){return e>>>=0,e===0?32:31-(cd(e)/dd|0)|0}var yr=64,xr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Mn(s):(i&=o,i!==0&&(r=Mn(i)))}else o=n&~l,o!==0?r=Mn(o):i!==0&&(r=Mn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),l=1<<n,r|=e[n],t&=~l;return r}function pd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function md(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ue(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=pd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vs(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function hd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ue(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ao(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Ws(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hs,so,Qs,Ks,Ys,xi=!1,wr=[],pt=null,mt=null,ht=null,Kn=new Map,Yn=new Map,ut=[],gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oa(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function Cn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=cr(t),t!==null&&so(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function vd(e,t,n,r,l){switch(t){case"focusin":return pt=Cn(pt,e,t,n,r,l),!0;case"dragenter":return mt=Cn(mt,e,t,n,r,l),!0;case"mouseover":return ht=Cn(ht,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Kn.set(i,Cn(Kn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Yn.set(i,Cn(Yn.get(i)||null,e,t,n,r,l)),!0}return!1}function Gs(e){var t=Tt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Is(n),t!==null){e.blockedOn=t,Ys(e.priority,function(){Qs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mi=r,n.target.dispatchEvent(r),mi=null}else return t=cr(n),t!==null&&so(t),e.blockedOn=n,!1;t.shift()}return!0}function aa(e,t,n){Mr(e)&&n.delete(t)}function yd(){xi=!1,pt!==null&&Mr(pt)&&(pt=null),mt!==null&&Mr(mt)&&(mt=null),ht!==null&&Mr(ht)&&(ht=null),Kn.forEach(aa),Yn.forEach(aa)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,xi||(xi=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,yd)))}function Gn(e){function t(l){return En(l,e)}if(0<wr.length){En(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&En(pt,e),mt!==null&&En(mt,e),ht!==null&&En(ht,e),Kn.forEach(t),Yn.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)Gs(n),n.blockedOn===null&&ut.shift()}var un=it.ReactCurrentBatchConfig,Yr=!0;function xd(e,t,n,r){var l=I,i=un.transition;un.transition=null;try{I=1,uo(e,t,n,r)}finally{I=l,un.transition=i}}function wd(e,t,n,r){var l=I,i=un.transition;un.transition=null;try{I=4,uo(e,t,n,r)}finally{I=l,un.transition=i}}function uo(e,t,n,r){if(Yr){var l=wi(e,t,n,r);if(l===null)Hl(e,t,r,Gr,n),oa(e,r);else if(vd(l,e,t,n,r))r.stopPropagation();else if(oa(e,r),t&4&&-1<gd.indexOf(e)){for(;l!==null;){var i=cr(l);if(i!==null&&Hs(i),i=wi(e,t,n,r),i===null&&Hl(e,t,r,Gr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var Gr=null;function wi(e,t,n,r){if(Gr=null,e=io(r),e=Tt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Is(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function Xs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ad()){case oo:return 1;case As:return 4;case Qr:case sd:return 16;case Bs:return 536870912;default:return 16}default:return 16}}var dt=null,co=null,Lr=null;function Zs(){if(Lr)return Lr;var e,t=co,n=t.length,r,l="value"in dt?dt.value:dt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Lr=l.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function sa(){return!1}function Ne(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?kr:sa,this.isPropagationStopped=sa,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Ne(wn),ur=Q({},wn,{view:0,detail:0}),kd=Ne(ur),Rl,Il,zn,hl=Q({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Rl=e.screenX-zn.screenX,Il=e.screenY-zn.screenY):Il=Rl=0,zn=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),ua=Ne(hl),Sd=Q({},hl,{dataTransfer:0}),jd=Ne(Sd),Nd=Q({},ur,{relatedTarget:0}),Ol=Ne(Nd),Cd=Q({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ed=Ne(Cd),zd=Q({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_d=Ne(zd),Td=Q({},wn,{data:0}),ca=Ne(Td),bd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dd[e])?!!t[e]:!1}function po(){return Md}var Ld=Q({},ur,{key:function(e){if(e.key){var t=bd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fd=Ne(Ld),Rd=Q({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),da=Ne(Rd),Id=Q({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),Od=Ne(Id),Ud=Q({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=Ne(Ud),Ad=Q({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bd=Ne(Ad),Vd=[9,13,27,32],mo=et&&"CompositionEvent"in window,In=null;et&&"documentMode"in document&&(In=document.documentMode);var Wd=et&&"TextEvent"in window&&!In,Js=et&&(!mo||In&&8<In&&11>=In),fa=" ",pa=!1;function qs(e,t){switch(e){case"keyup":return Vd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function Hd(e,t){switch(e){case"compositionend":return eu(t);case"keypress":return t.which!==32?null:(pa=!0,fa);case"textInput":return e=t.data,e===fa&&pa?null:e;default:return null}}function Qd(e,t){if(Gt)return e==="compositionend"||!mo&&qs(e,t)?(e=Zs(),Lr=co=dt=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Js&&t.locale!=="ko"?null:t.data;default:return null}}var Kd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kd[e.type]:t==="textarea"}function tu(e,t,n,r){Ds(r),t=Xr(t,"onChange"),0<t.length&&(n=new fo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Xn=null;function Yd(e){fu(e,0)}function gl(e){var t=Jt(e);if(Cs(t))return e}function Gd(e,t){if(e==="change")return t}var nu=!1;if(et){var Ul;if(et){var $l="oninput"in document;if(!$l){var ha=document.createElement("div");ha.setAttribute("oninput","return;"),$l=typeof ha.oninput=="function"}Ul=$l}else Ul=!1;nu=Ul&&(!document.documentMode||9<document.documentMode)}function ga(){On&&(On.detachEvent("onpropertychange",ru),Xn=On=null)}function ru(e){if(e.propertyName==="value"&&gl(Xn)){var t=[];tu(t,Xn,e,io(e)),Rs(Yd,t)}}function Xd(e,t,n){e==="focusin"?(ga(),On=t,Xn=n,On.attachEvent("onpropertychange",ru)):e==="focusout"&&ga()}function Zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Xn)}function Jd(e,t){if(e==="click")return gl(t)}function qd(e,t){if(e==="input"||e==="change")return gl(t)}function ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:ef;function Zn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ni.call(t,l)||!Ae(e[l],t[l]))return!1}return!0}function va(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ya(e,t){var n=va(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=va(n)}}function lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function iu(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tf(e){var t=iu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lu(n.ownerDocument.documentElement,n)){if(r!==null&&ho(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ya(n,i);var o=ya(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nf=et&&"documentMode"in document&&11>=document.documentMode,Xt=null,ki=null,Un=null,Si=!1;function xa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Si||Xt==null||Xt!==Vr(r)||(r=Xt,"selectionStart"in r&&ho(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&Zn(Un,r)||(Un=r,r=Xr(ki,"onSelect"),0<r.length&&(t=new fo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zt={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Al={},ou={};et&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function vl(e){if(Al[e])return Al[e];if(!Zt[e])return e;var t=Zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ou)return Al[e]=t[n];return e}var au=vl("animationend"),su=vl("animationiteration"),uu=vl("animationstart"),cu=vl("transitionend"),du=new Map,wa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){du.set(e,t),Ut(t,[e])}for(var Bl=0;Bl<wa.length;Bl++){var Vl=wa[Bl],rf=Vl.toLowerCase(),lf=Vl[0].toUpperCase()+Vl.slice(1);jt(rf,"on"+lf)}jt(au,"onAnimationEnd");jt(su,"onAnimationIteration");jt(uu,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(cu,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),of=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function ka(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rd(r,t,void 0,e),e.currentTarget=null}function fu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;ka(l,s,d),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;ka(l,s,d),i=u}}}if(Hr)throw e=vi,Hr=!1,vi=null,e}function U(e,t){var n=t[zi];n===void 0&&(n=t[zi]=new Set);var r=e+"__bubble";n.has(r)||(pu(t,e,2,!1),n.add(r))}function Wl(e,t,n){var r=0;t&&(r|=4),pu(n,e,r,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[jr]){e[jr]=!0,ws.forEach(function(n){n!=="selectionchange"&&(of.has(n)||Wl(n,!1,e),Wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,Wl("selectionchange",!1,t))}}function pu(e,t,n,r){switch(Xs(t)){case 1:var l=xd;break;case 4:l=wd;break;default:l=uo}n=l.bind(null,t,n,e),l=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Hl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Rs(function(){var d=i,y=io(n),v=[];e:{var m=du.get(e);if(m!==void 0){var x=fo,k=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":x=Fd;break;case"focusin":k="focus",x=Ol;break;case"focusout":k="blur",x=Ol;break;case"beforeblur":case"afterblur":x=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Od;break;case au:case su:case uu:x=Ed;break;case cu:x=$d;break;case"scroll":x=kd;break;case"wheel":x=Bd;break;case"copy":case"cut":case"paste":x=_d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=da}var j=(t&4)!==0,L=!j&&e==="scroll",f=j?m!==null?m+"Capture":null:m;j=[];for(var c=d,p;c!==null;){p=c;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=Qn(c,f),g!=null&&j.push(qn(c,g,p)))),L)break;c=c.return}0<j.length&&(m=new x(m,k,null,n,y),v.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==mi&&(k=n.relatedTarget||n.fromElement)&&(Tt(k)||k[tt]))break e;if((x||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=d,k=k?Tt(k):null,k!==null&&(L=$t(k),k!==L||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=d),x!==k)){if(j=ua,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(j=da,g="onPointerLeave",f="onPointerEnter",c="pointer"),L=x==null?m:Jt(x),p=k==null?m:Jt(k),m=new j(g,c+"leave",x,n,y),m.target=L,m.relatedTarget=p,g=null,Tt(y)===d&&(j=new j(f,c+"enter",k,n,y),j.target=p,j.relatedTarget=L,g=j),L=g,x&&k)t:{for(j=x,f=k,c=0,p=j;p;p=Qt(p))c++;for(p=0,g=f;g;g=Qt(g))p++;for(;0<c-p;)j=Qt(j),c--;for(;0<p-c;)f=Qt(f),p--;for(;c--;){if(j===f||f!==null&&j===f.alternate)break t;j=Qt(j),f=Qt(f)}j=null}else j=null;x!==null&&Sa(v,m,x,j,!1),k!==null&&L!==null&&Sa(v,L,k,j,!0)}}e:{if(m=d?Jt(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var S=Gd;else if(ma(m))if(nu)S=qd;else{S=Zd;var C=Xd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Jd);if(S&&(S=S(e,d))){tu(v,S,n,y);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ui(m,"number",m.value)}switch(C=d?Jt(d):window,e){case"focusin":(ma(C)||C.contentEditable==="true")&&(Xt=C,ki=d,Un=null);break;case"focusout":Un=ki=Xt=null;break;case"mousedown":Si=!0;break;case"contextmenu":case"mouseup":case"dragend":Si=!1,xa(v,n,y);break;case"selectionchange":if(nf)break;case"keydown":case"keyup":xa(v,n,y)}var E;if(mo)e:{switch(e){case"compositionstart":var h="onCompositionStart";break e;case"compositionend":h="onCompositionEnd";break e;case"compositionupdate":h="onCompositionUpdate";break e}h=void 0}else Gt?qs(e,n)&&(h="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(h="onCompositionStart");h&&(Js&&n.locale!=="ko"&&(Gt||h!=="onCompositionStart"?h==="onCompositionEnd"&&Gt&&(E=Zs()):(dt=y,co="value"in dt?dt.value:dt.textContent,Gt=!0)),C=Xr(d,h),0<C.length&&(h=new ca(h,e,null,n,y),v.push({event:h,listeners:C}),E?h.data=E:(E=eu(n),E!==null&&(h.data=E)))),(E=Wd?Hd(e,n):Qd(e,n))&&(d=Xr(d,"onBeforeInput"),0<d.length&&(y=new ca("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:d}),y.data=E))}fu(v,t)})}function qn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Qn(e,n),i!=null&&r.unshift(qn(e,i,l)),i=Qn(e,t),i!=null&&r.push(qn(e,i,l))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sa(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Qn(n,i),u!=null&&o.unshift(qn(n,u,s))):l||(u=Qn(n,i),u!=null&&o.push(qn(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var af=/\r\n?/g,sf=/\u0000|\uFFFD/g;function ja(e){return(typeof e=="string"?e:""+e).replace(af,`
`).replace(sf,"")}function Nr(e,t,n){if(t=ja(t),ja(e)!==t&&n)throw Error(w(425))}function Zr(){}var ji=null,Ni=null;function Ci(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ei=typeof setTimeout=="function"?setTimeout:void 0,uf=typeof clearTimeout=="function"?clearTimeout:void 0,Na=typeof Promise=="function"?Promise:void 0,cf=typeof queueMicrotask=="function"?queueMicrotask:typeof Na<"u"?function(e){return Na.resolve(null).then(e).catch(df)}:Ei;function df(e){setTimeout(function(){throw e})}function Ql(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Gn(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ca(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),He="__reactFiber$"+kn,er="__reactProps$"+kn,tt="__reactContainer$"+kn,zi="__reactEvents$"+kn,ff="__reactListeners$"+kn,pf="__reactHandles$"+kn;function Tt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ca(e);e!==null;){if(n=e[He])return n;e=Ca(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[He]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function yl(e){return e[er]||null}var _i=[],qt=-1;function Nt(e){return{current:e}}function $(e){0>qt||(e.current=_i[qt],_i[qt]=null,qt--)}function O(e,t){qt++,_i[qt]=e.current,e.current=t}var St={},ue=Nt(St),ge=Nt(!1),Lt=St;function pn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function Jr(){$(ge),$(ue)}function Ea(e,t,n){if(ue.current!==St)throw Error(w(168));O(ue,t),O(ge,n)}function mu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,Xc(e)||"Unknown",l));return Q({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Lt=ue.current,O(ue,e),O(ge,ge.current),!0}function za(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=mu(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,$(ge),$(ue),O(ue,e)):$(ge),O(ge,n)}var Xe=null,xl=!1,Kl=!1;function hu(e){Xe===null?Xe=[e]:Xe.push(e)}function mf(e){xl=!0,hu(e)}function Ct(){if(!Kl&&Xe!==null){Kl=!0;var e=0,t=I;try{var n=Xe;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,xl=!1}catch(l){throw Xe!==null&&(Xe=Xe.slice(e+1)),$s(oo,Ct),l}finally{I=t,Kl=!1}}return null}var en=[],tn=0,el=null,tl=0,ze=[],_e=0,Ft=null,Ze=1,Je="";function zt(e,t){en[tn++]=tl,en[tn++]=el,el=e,tl=t}function gu(e,t,n){ze[_e++]=Ze,ze[_e++]=Je,ze[_e++]=Ft,Ft=e;var r=Ze;e=Je;var l=32-Ue(r)-1;r&=~(1<<l),n+=1;var i=32-Ue(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ze=1<<32-Ue(t)+l|n<<l|r,Je=i+e}else Ze=1<<i|n<<l|r,Je=e}function go(e){e.return!==null&&(zt(e,1),gu(e,1,0))}function vo(e){for(;e===el;)el=en[--tn],en[tn]=null,tl=en[--tn],en[tn]=null;for(;e===Ft;)Ft=ze[--_e],ze[_e]=null,Je=ze[--_e],ze[_e]=null,Ze=ze[--_e],ze[_e]=null}var ke=null,we=null,B=!1,Re=null;function vu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _a(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Ze,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bi(e){if(B){var t=we;if(t){var n=t;if(!_a(e,t)){if(Ti(e))throw Error(w(418));t=gt(n.nextSibling);var r=ke;t&&_a(e,t)?vu(r,n):(e.flags=e.flags&-4097|2,B=!1,ke=e)}}else{if(Ti(e))throw Error(w(418));e.flags=e.flags&-4097|2,B=!1,ke=e}}}function Ta(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Cr(e){if(e!==ke)return!1;if(!B)return Ta(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ci(e.type,e.memoizedProps)),t&&(t=we)){if(Ti(e))throw yu(),Error(w(418));for(;t;)vu(e,t),t=gt(t.nextSibling)}if(Ta(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?gt(e.stateNode.nextSibling):null;return!0}function yu(){for(var e=we;e;)e=gt(e.nextSibling)}function mn(){we=ke=null,B=!1}function yo(e){Re===null?Re=[e]:Re.push(e)}var hf=it.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Er(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){var t=e._init;return t(e._payload)}function xu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=wt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,g){return c===null||c.tag!==6?(c=ei(p,f.mode,g),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,g){var S=p.type;return S===Yt?y(f,c,p.props.children,g,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===at&&ba(S)===c.type)?(g=l(c,p.props),g.ref=_n(f,c,p),g.return=f,g):(g=Br(p.type,p.key,p.props,null,f.mode,g),g.ref=_n(f,c,p),g.return=f,g)}function d(f,c,p,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ti(p,f.mode,g),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function y(f,c,p,g,S){return c===null||c.tag!==7?(c=Mt(p,f.mode,g,S),c.return=f,c):(c=l(c,p),c.return=f,c)}function v(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ei(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case hr:return p=Br(c.type,c.key,c.props,null,f.mode,p),p.ref=_n(f,null,c),p.return=f,p;case Kt:return c=ti(c,f.mode,p),c.return=f,c;case at:var g=c._init;return v(f,g(c._payload),p)}if(Dn(c)||jn(c))return c=Mt(c,f.mode,p,null),c.return=f,c;Er(f,c)}return null}function m(f,c,p,g){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(f,c,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===S?u(f,c,p,g):null;case Kt:return p.key===S?d(f,c,p,g):null;case at:return S=p._init,m(f,c,S(p._payload),g)}if(Dn(p)||jn(p))return S!==null?null:y(f,c,p,g,null);Er(f,p)}return null}function x(f,c,p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,s(c,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hr:return f=f.get(g.key===null?p:g.key)||null,u(c,f,g,S);case Kt:return f=f.get(g.key===null?p:g.key)||null,d(c,f,g,S);case at:var C=g._init;return x(f,c,p,C(g._payload),S)}if(Dn(g)||jn(g))return f=f.get(p)||null,y(c,f,g,S,null);Er(c,g)}return null}function k(f,c,p,g){for(var S=null,C=null,E=c,h=c=0,b=null;E!==null&&h<p.length;h++){E.index>h?(b=E,E=null):b=E.sibling;var T=m(f,E,p[h],g);if(T===null){E===null&&(E=b);break}e&&E&&T.alternate===null&&t(f,E),c=i(T,c,h),C===null?S=T:C.sibling=T,C=T,E=b}if(h===p.length)return n(f,E),B&&zt(f,h),S;if(E===null){for(;h<p.length;h++)E=v(f,p[h],g),E!==null&&(c=i(E,c,h),C===null?S=E:C.sibling=E,C=E);return B&&zt(f,h),S}for(E=r(f,E);h<p.length;h++)b=x(E,f,h,p[h],g),b!==null&&(e&&b.alternate!==null&&E.delete(b.key===null?h:b.key),c=i(b,c,h),C===null?S=b:C.sibling=b,C=b);return e&&E.forEach(function(A){return t(f,A)}),B&&zt(f,h),S}function j(f,c,p,g){var S=jn(p);if(typeof S!="function")throw Error(w(150));if(p=S.call(p),p==null)throw Error(w(151));for(var C=S=null,E=c,h=c=0,b=null,T=p.next();E!==null&&!T.done;h++,T=p.next()){E.index>h?(b=E,E=null):b=E.sibling;var A=m(f,E,T.value,g);if(A===null){E===null&&(E=b);break}e&&E&&A.alternate===null&&t(f,E),c=i(A,c,h),C===null?S=A:C.sibling=A,C=A,E=b}if(T.done)return n(f,E),B&&zt(f,h),S;if(E===null){for(;!T.done;h++,T=p.next())T=v(f,T.value,g),T!==null&&(c=i(T,c,h),C===null?S=T:C.sibling=T,C=T);return B&&zt(f,h),S}for(E=r(f,E);!T.done;h++,T=p.next())T=x(E,f,h,T.value,g),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?h:T.key),c=i(T,c,h),C===null?S=T:C.sibling=T,C=T);return e&&E.forEach(function(K){return t(f,K)}),B&&zt(f,h),S}function L(f,c,p,g){if(typeof p=="object"&&p!==null&&p.type===Yt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var S=p.key,C=c;C!==null;){if(C.key===S){if(S=p.type,S===Yt){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===at&&ba(S)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=_n(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Yt?(c=Mt(p.props.children,f.mode,g,p.key),c.return=f,f=c):(g=Br(p.type,p.key,p.props,null,f.mode,g),g.ref=_n(f,c,p),g.return=f,f=g)}return o(f);case Kt:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ti(p,f.mode,g),c.return=f,f=c}return o(f);case at:return C=p._init,L(f,c,C(p._payload),g)}if(Dn(p))return k(f,c,p,g);if(jn(p))return j(f,c,p,g);Er(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=ei(p,f.mode,g),c.return=f,f=c),o(f)):n(f,c)}return L}var hn=xu(!0),wu=xu(!1),nl=Nt(null),rl=null,nn=null,xo=null;function wo(){xo=nn=rl=null}function ko(e){var t=nl.current;$(nl),e._currentValue=t}function Pi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){rl=e,xo=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(xo!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(rl===null)throw Error(w(308));nn=e,rl.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var bt=null;function So(e){bt===null?bt=[e]:bt.push(e)}function ku(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,So(t)):(n.next=l.next,l.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,nt(e,n)}return l=r.interleaved,l===null?(t.next=t,So(r)):(t.next=l.next,l.next=t),r.interleaved=t,nt(e,n)}function Rr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ao(e,n)}}function Pa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var l=e.updateQueue;st=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==o&&(s===null?y.firstBaseUpdate=d:s.next=d,y.lastBaseUpdate=u))}if(i!==null){var v=l.baseState;o=0,y=d=u=null,s=i;do{var m=s.lane,x=s.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,j=s;switch(m=t,x=n,j.tag){case 1:if(k=j.payload,typeof k=="function"){v=k.call(x,v,m);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,m=typeof k=="function"?k.call(x,v,m):k,m==null)break e;v=Q({},v,m);break e;case 2:st=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(d=y=x,u=v):y=y.next=x,o|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(y===null&&(u=v),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);It|=o,e.lanes=o,e.memoizedState=v}}function Da(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var dr={},Ke=Nt(dr),tr=Nt(dr),nr=Nt(dr);function Pt(e){if(e===dr)throw Error(w(174));return e}function No(e,t){switch(O(nr,t),O(tr,e),O(Ke,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=di(t,e)}$(Ke),O(Ke,t)}function gn(){$(Ke),$(tr),$(nr)}function ju(e){Pt(nr.current);var t=Pt(Ke.current),n=di(t,e.type);t!==n&&(O(tr,e),O(Ke,n))}function Co(e){tr.current===e&&($(Ke),$(tr))}var W=Nt(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function Eo(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Ir=it.ReactCurrentDispatcher,Gl=it.ReactCurrentBatchConfig,Rt=0,H=null,J=null,ee=null,ol=!1,$n=!1,rr=0,gf=0;function oe(){throw Error(w(321))}function zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function _o(e,t,n,r,l,i){if(Rt=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ir.current=e===null||e.memoizedState===null?wf:kf,e=n(r,l),$n){i=0;do{if($n=!1,rr=0,25<=i)throw Error(w(301));i+=1,ee=J=null,t.updateQueue=null,Ir.current=Sf,e=n(r,l)}while($n)}if(Ir.current=al,t=J!==null&&J.next!==null,Rt=0,ee=J=H=null,ol=!1,t)throw Error(w(300));return e}function To(){var e=rr!==0;return rr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function De(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(w(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function lr(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=De(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,d=i;do{var y=d.lane;if((Rt&y)===y)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=v,o=r):u=u.next=v,H.lanes|=y,It|=y}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=s,Ae(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,It|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zl(e){var t=De(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ae(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Nu(){}function Cu(e,t){var n=H,r=De(),l=t(),i=!Ae(r.memoizedState,l);if(i&&(r.memoizedState=l,he=!0),r=r.queue,bo(_u.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,ir(9,zu.bind(null,n,r,l,t),void 0,null),te===null)throw Error(w(349));Rt&30||Eu(n,t,l)}return l}function Eu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zu(e,t,n,r){t.value=n,t.getSnapshot=r,Tu(t)&&bu(e)}function _u(e,t,n){return n(function(){Tu(t)&&bu(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function bu(e){var t=nt(e,1);t!==null&&$e(t,e,1,-1)}function Ma(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=xf.bind(null,H,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pu(){return De().memoizedState}function Or(e,t,n,r){var l=We();H.flags|=e,l.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var l=De();r=r===void 0?null:r;var i=void 0;if(J!==null){var o=J.memoizedState;if(i=o.destroy,r!==null&&zo(r,o.deps)){l.memoizedState=ir(t,n,i,r);return}}H.flags|=e,l.memoizedState=ir(1|t,n,i,r)}function La(e,t){return Or(8390656,8,e,t)}function bo(e,t){return wl(2048,8,e,t)}function Du(e,t){return wl(4,2,e,t)}function Mu(e,t){return wl(4,4,e,t)}function Lu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fu(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,Lu.bind(null,t,e),n)}function Po(){}function Ru(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Iu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ou(e,t,n){return Rt&21?(Ae(n,t)||(n=Vs(),H.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function vf(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{I=n,Gl.transition=r}}function Uu(){return De().memoizedState}function yf(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$u(e))Au(t,n);else if(n=ku(e,t,n,r),n!==null){var l=de();$e(n,e,r,l),Bu(n,t,r)}}function xf(e,t,n){var r=xt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($u(e))Au(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ae(s,o)){var u=t.interleaved;u===null?(l.next=l,So(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ku(e,t,l,r),n!==null&&(l=de(),$e(n,e,r,l),Bu(n,t,r))}}function $u(e){var t=e.alternate;return e===H||t!==null&&t===H}function Au(e,t){$n=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ao(e,n)}}var al={readContext:Pe,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},wf={readContext:Pe,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:La,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Or(4194308,4,Lu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){return Or(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Ma,useDebugValue:Po,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Ma(!1),t=e[0];return e=vf.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=We();if(B){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));Rt&30||Eu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,La(_u.bind(null,r,i,e),[e]),r.flags|=2048,ir(9,zu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if(B){var n=Je,r=Ze;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kf={readContext:Pe,useCallback:Ru,useContext:Pe,useEffect:bo,useImperativeHandle:Fu,useInsertionEffect:Du,useLayoutEffect:Mu,useMemo:Iu,useReducer:Xl,useRef:Pu,useState:function(){return Xl(lr)},useDebugValue:Po,useDeferredValue:function(e){var t=De();return Ou(t,J.memoizedState,e)},useTransition:function(){var e=Xl(lr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Cu,useId:Uu,unstable_isNewReconciler:!1},Sf={readContext:Pe,useCallback:Ru,useContext:Pe,useEffect:bo,useImperativeHandle:Fu,useInsertionEffect:Du,useLayoutEffect:Mu,useMemo:Iu,useReducer:Zl,useRef:Pu,useState:function(){return Zl(lr)},useDebugValue:Po,useDeferredValue:function(e){var t=De();return J===null?t.memoizedState=e:Ou(t,J.memoizedState,e)},useTransition:function(){var e=Zl(lr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Cu,useId:Uu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Di(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),l=xt(e),i=qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=vt(e,i,l),t!==null&&($e(t,e,l,r),Rr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),l=xt(e),i=qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vt(e,i,l),t!==null&&($e(t,e,l,r),Rr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=xt(e),l=qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=vt(e,l,r),t!==null&&($e(t,e,r,n),Rr(t,e,r))}};function Fa(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(l,i):!0}function Vu(e,t,n){var r=!1,l=St,i=t.contextType;return typeof i=="object"&&i!==null?i=Pe(i):(l=ve(t)?Lt:ue.current,r=t.contextTypes,i=(r=r!=null)?pn(e,l):St),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ra(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Mi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},jo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Pe(i):(i=ve(t)?Lt:ue.current,l.context=pn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Di(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&kl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=Gc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jf=typeof WeakMap=="function"?WeakMap:Map;function Wu(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,Wi=r),Li(e,t)},n}function Hu(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Li(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ia(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=If.bind(null,e,t,n),t.then(e,e))}function Oa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ua(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var Nf=it.ReactCurrentOwner,he=!1;function ce(e,t,n,r){t.child=e===null?wu(t,null,n,r):hn(t,e.child,n,r)}function $a(e,t,n,r,l){n=n.render;var i=t.ref;return cn(t,l),r=_o(e,t,n,r,i,l),n=To(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(B&&n&&go(t),t.flags|=1,ce(e,t,r,l),t.child)}function Aa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Uo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Qu(e,t,i,r,l)):(e=Br(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(o,r)&&e.ref===t.ref)return rt(e,t,l)}return t.flags|=1,e=wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Qu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Zn(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,rt(e,t,l)}return Fi(e,t,n,r,l)}function Ku(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(ln,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(ln,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(ln,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(ln,xe),xe|=r;return ce(e,t,l,n),t.child}function Yu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fi(e,t,n,r,l){var i=ve(n)?Lt:ue.current;return i=pn(t,i),cn(t,l),n=_o(e,t,n,r,i,l),r=To(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(B&&r&&go(t),t.flags|=1,ce(e,t,n,l),t.child)}function Ba(e,t,n,r,l){if(ve(n)){var i=!0;qr(t)}else i=!1;if(cn(t,l),t.stateNode===null)Ur(e,t),Vu(t,n,r),Mi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Pe(d):(d=ve(n)?Lt:ue.current,d=pn(t,d));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ra(t,o,r,d),st=!1;var m=t.memoizedState;o.state=m,ll(t,r,o,l),u=t.memoizedState,s!==r||m!==u||ge.current||st?(typeof y=="function"&&(Di(t,n,y,r),u=t.memoizedState),(s=st||Fa(t,n,s,r,m,u,d))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Su(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Le(t.type,s),o.props=d,v=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pe(u):(u=ve(n)?Lt:ue.current,u=pn(t,u));var x=n.getDerivedStateFromProps;(y=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==v||m!==u)&&Ra(t,o,r,u),st=!1,m=t.memoizedState,o.state=m,ll(t,r,o,l);var k=t.memoizedState;s!==v||m!==k||ge.current||st?(typeof x=="function"&&(Di(t,n,x,r),k=t.memoizedState),(d=st||Fa(t,n,d,r,m,k,u)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ri(e,t,n,r,i,l)}function Ri(e,t,n,r,l,i){Yu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&za(t,n,!1),rt(e,t,i);r=t.stateNode,Nf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=hn(t,e.child,null,i),t.child=hn(t,null,s,i)):ce(e,t,s,i),t.memoizedState=r.state,l&&za(t,n,!0),t.child}function Gu(e){var t=e.stateNode;t.pendingContext?Ea(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ea(e,t.context,!1),No(e,t.containerInfo)}function Va(e,t,n,r,l){return mn(),yo(l),t.flags|=256,ce(e,t,n,r),t.child}var Ii={dehydrated:null,treeContext:null,retryLane:0};function Oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xu(e,t,n){var r=t.pendingProps,l=W.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(W,l&1),e===null)return bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Nl(o,r,0,null),e=Mt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Oi(n),t.memoizedState=Ii,e):Do(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Cf(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=wt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=wt(s,i):(i=Mt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Oi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ii,r}return i=e.child,e=i.sibling,r=wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Do(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&yo(r),hn(t,e.child,null,n),e=Do(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(w(422))),zr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Nl({mode:"visible",children:r.children},l,0,null),i=Mt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hn(t,e.child,null,o),t.child.memoizedState=Oi(o),t.memoizedState=Ii,i);if(!(t.mode&1))return zr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(w(419)),r=Jl(i,r,void 0),zr(e,t,o,r)}if(s=(o&e.childLanes)!==0,he||s){if(r=te,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,nt(e,l),$e(r,e,l,-1))}return Oo(),r=Jl(Error(w(421))),zr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Of.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=gt(l.nextSibling),ke=t,B=!0,Re=null,e!==null&&(ze[_e++]=Ze,ze[_e++]=Je,ze[_e++]=Ft,Ze=e.id,Je=e.overflow,Ft=t),t=Do(t,r.children),t.flags|=4096,t)}function Wa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pi(e.return,t,n)}function ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Zu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wa(e,n,t);else if(e.tag===19)Wa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(W,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ql(t,!0,n,null,i);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ef(e,t,n){switch(t.tag){case 3:Gu(t),mn();break;case 5:ju(t);break;case 1:ve(t.type)&&qr(t);break;case 4:No(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(nl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Xu(e,t,n):(O(W,W.current&1),e=rt(e,t,n),e!==null?e.sibling:null);O(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Ku(e,t,n)}return rt(e,t,n)}var Ju,Ui,qu,ec;Ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ui=function(){};qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Pt(Ke.current);var i=null;switch(n){case"input":l=ai(e,l),r=ai(e,r),i=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":l=ci(e,l),r=ci(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}fi(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Wn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&U("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};ec=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zf(e,t,n){var r=t.pendingProps;switch(vo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ve(t.type)&&Jr(),ae(t),null;case 3:return r=t.stateNode,gn(),$(ge),$(ue),Eo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Ki(Re),Re=null))),Ui(e,t),ae(t),null;case 5:Co(t);var l=Pt(nr.current);if(n=t.type,e!==null&&t.stateNode!=null)qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ae(t),null}if(e=Pt(Ke.current),Cr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[He]=t,r[er]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<Ln.length;l++)U(Ln[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":qo(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":ta(r,i),U("invalid",r)}fi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Nr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Nr(r.textContent,s,e),l=["children",""+s]):Wn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":gr(r),ea(r,i,!0);break;case"textarea":gr(r),na(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_s(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[He]=t,e[er]=r,Ju(e,t,!1,!1),t.stateNode=e;e:{switch(o=pi(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<Ln.length;l++)U(Ln[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":qo(e,r),l=ai(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),U("invalid",e);break;case"textarea":ta(e,r),l=ci(e,r),U("invalid",e);break;default:l=r}fi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Ps(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ts(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hn(e,u):typeof u=="number"&&Hn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&U("scroll",e):u!=null&&to(e,i,u,o))}switch(n){case"input":gr(e),ea(e,r,!1);break;case"textarea":gr(e),na(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?on(e,!!r.multiple,i,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)ec(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Pt(nr.current),Pt(Ke.current),Cr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(i=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Nr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return ae(t),null;case 13:if($(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&t.mode&1&&!(t.flags&128))yu(),mn(),t.flags|=98560,i=!1;else if(i=Cr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[He]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),i=!1}else Re!==null&&(Ki(Re),Re=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?q===0&&(q=3):Oo())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return gn(),Ui(e,t),e===null&&Jn(t.stateNode.containerInfo),ae(t),null;case 10:return ko(t.type._context),ae(t),null;case 17:return ve(t.type)&&Jr(),ae(t),null;case 19:if($(W),i=t.memoizedState,i===null)return ae(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Tn(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=il(e),o!==null){for(t.flags|=128,Tn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(W,W.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>yn&&(t.flags|=128,r=!0,Tn(i,!1),t.lanes=4194304)}else{if(!r)if(e=il(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!B)return ae(t),null}else 2*G()-i.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=W.current,O(W,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Io(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function _f(e,t){switch(vo(t),t.tag){case 1:return ve(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),$(ge),$(ue),Eo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Co(t),null;case 13:if($(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(W),null;case 4:return gn(),null;case 10:return ko(t.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var _r=!1,se=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,_=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function $i(e,t,n){try{n()}catch(r){Y(e,t,r)}}var Ha=!1;function bf(e,t){if(ji=Yr,e=iu(),ho(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,d=0,y=0,v=e,m=null;t:for(;;){for(var x;v!==n||l!==0&&v.nodeType!==3||(s=o+l),v!==i||r!==0&&v.nodeType!==3||(u=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(x=v.firstChild)!==null;)m=v,v=x;for(;;){if(v===e)break t;if(m===n&&++d===l&&(s=o),m===i&&++y===r&&(u=o),(x=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ni={focusedElem:e,selectionRange:n},Yr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,L=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:Le(t.type,j),L);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(g){Y(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return k=Ha,Ha=!1,k}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&$i(t,n,i)}l=l.next}while(l!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ai(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function tc(e){var t=e.alternate;t!==null&&(e.alternate=null,tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[er],delete t[zi],delete t[ff],delete t[pf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nc(e){return e.tag===5||e.tag===3||e.tag===4}function Qa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}function Vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}var ne=null,Fe=!1;function ot(e,t,n){for(n=n.child;n!==null;)rc(e,t,n),n=n.sibling}function rc(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:se||rn(n,t);case 6:var r=ne,l=Fe;ne=null,ot(e,t,n),ne=r,Fe=l,ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?Ql(e.parentNode,n):e.nodeType===1&&Ql(e,n),Gn(e)):Ql(ne,n.stateNode));break;case 4:r=ne,l=Fe,ne=n.stateNode.containerInfo,Fe=!0,ot(e,t,n),ne=r,Fe=l;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&$i(n,t,o),l=l.next}while(l!==r)}ot(e,t,n);break;case 1:if(!se&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Y(n,t,s)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,ot(e,t,n),se=r):ot(e,t,n);break;default:ot(e,t,n)}}function Ka(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tf),t.forEach(function(r){var l=Uf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,Fe=!1;break e;case 3:ne=s.stateNode.containerInfo,Fe=!0;break e;case 4:ne=s.stateNode.containerInfo,Fe=!0;break e}s=s.return}if(ne===null)throw Error(w(160));rc(i,o,l),ne=null,Fe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){Y(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lc(t,e),t=t.sibling}function lc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ve(e),r&4){try{An(3,e,e.return),Sl(3,e)}catch(j){Y(e,e.return,j)}try{An(5,e,e.return)}catch(j){Y(e,e.return,j)}}break;case 1:Me(t,e),Ve(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(Me(t,e),Ve(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var l=e.stateNode;try{Hn(l,"")}catch(j){Y(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Es(l,i),pi(s,o);var d=pi(s,i);for(o=0;o<u.length;o+=2){var y=u[o],v=u[o+1];y==="style"?Ps(l,v):y==="dangerouslySetInnerHTML"?Ts(l,v):y==="children"?Hn(l,v):to(l,y,v,d)}switch(s){case"input":si(l,i);break;case"textarea":zs(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?on(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?on(l,!!i.multiple,i.defaultValue,!0):on(l,!!i.multiple,i.multiple?[]:"",!1))}l[er]=i}catch(j){Y(e,e.return,j)}}break;case 6:if(Me(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(j){Y(e,e.return,j)}}break;case 3:if(Me(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(j){Y(e,e.return,j)}break;case 4:Me(t,e),Ve(e);break;case 13:Me(t,e),Ve(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Fo=G())),r&4&&Ka(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(se=(d=se)||y,Me(t,e),se=d):Me(t,e),Ve(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(_=e,y=e.child;y!==null;){for(v=_=y;_!==null;){switch(m=_,x=m.child,m.tag){case 0:case 11:case 14:case 15:An(4,m,m.return);break;case 1:rn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(j){Y(r,n,j)}}break;case 5:rn(m,m.return);break;case 22:if(m.memoizedState!==null){Ga(v);continue}}x!==null?(x.return=m,_=x):Ga(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{l=v.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=v.stateNode,u=v.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=bs("display",o))}catch(j){Y(e,e.return,j)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(j){Y(e,e.return,j)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Me(t,e),Ve(e),r&4&&Ka(e);break;case 21:break;default:Me(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Hn(l,""),r.flags&=-33);var i=Qa(e);Vi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Qa(e);Bi(e,s,o);break;default:throw Error(w(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pf(e,t,n){_=e,ic(e)}function ic(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var l=_,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||_r;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||se;s=_r;var d=se;if(_r=o,(se=u)&&!d)for(_=l;_!==null;)o=_,u=o.child,o.tag===22&&o.memoizedState!==null?Xa(l):u!==null?(u.return=o,_=u):Xa(l);for(;i!==null;)_=i,ic(i),i=i.sibling;_=l,_r=s,se=d}Ya(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,_=i):Ya(e)}}function Ya(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Da(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Da(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Gn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}se||t.flags&512&&Ai(t)}catch(m){Y(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Ga(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Xa(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Y(t,l,u)}}var i=t.return;try{Ai(t)}catch(u){Y(t,i,u)}break;case 5:var o=t.return;try{Ai(t)}catch(u){Y(t,o,u)}}}catch(u){Y(t,t.return,u)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var Df=Math.ceil,sl=it.ReactCurrentDispatcher,Mo=it.ReactCurrentOwner,be=it.ReactCurrentBatchConfig,R=0,te=null,Z=null,re=0,xe=0,ln=Nt(0),q=0,or=null,It=0,jl=0,Lo=0,Bn=null,me=null,Fo=0,yn=1/0,Ge=null,ul=!1,Wi=null,yt=null,Tr=!1,ft=null,cl=0,Vn=0,Hi=null,$r=-1,Ar=0;function de(){return R&6?G():$r!==-1?$r:$r=G()}function xt(e){return e.mode&1?R&2&&re!==0?re&-re:hf.transition!==null?(Ar===0&&(Ar=Vs()),Ar):(e=I,e!==0||(e=window.event,e=e===void 0?16:Xs(e.type)),e):1}function $e(e,t,n,r){if(50<Vn)throw Vn=0,Hi=null,Error(w(185));sr(e,n,r),(!(R&2)||e!==te)&&(e===te&&(!(R&2)&&(jl|=n),q===4&&ct(e,re)),ye(e,r),n===1&&R===0&&!(t.mode&1)&&(yn=G()+500,xl&&Ct()))}function ye(e,t){var n=e.callbackNode;md(e,t);var r=Kr(e,e===te?re:0);if(r===0)n!==null&&ia(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ia(n),t===1)e.tag===0?mf(Za.bind(null,e)):hu(Za.bind(null,e)),cf(function(){!(R&6)&&Ct()}),n=null;else{switch(Ws(r)){case 1:n=oo;break;case 4:n=As;break;case 16:n=Qr;break;case 536870912:n=Bs;break;default:n=Qr}n=pc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if($r=-1,Ar=0,R&6)throw Error(w(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=Kr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=dl(e,r);else{t=r;var l=R;R|=2;var i=sc();(te!==e||re!==t)&&(Ge=null,yn=G()+500,Dt(e,t));do try{Ff();break}catch(s){ac(e,s)}while(!0);wo(),sl.current=i,R=l,Z!==null?t=0:(te=null,re=0,t=q)}if(t!==0){if(t===2&&(l=yi(e),l!==0&&(r=l,t=Qi(e,l))),t===1)throw n=or,Dt(e,0),ct(e,r),ye(e,G()),n;if(t===6)ct(e,r);else{if(l=e.current.alternate,!(r&30)&&!Mf(l)&&(t=dl(e,r),t===2&&(i=yi(e),i!==0&&(r=i,t=Qi(e,i))),t===1))throw n=or,Dt(e,0),ct(e,r),ye(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:_t(e,me,Ge);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=Fo+500-G(),10<t)){if(Kr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ei(_t.bind(null,e,me,Ge),t);break}_t(e,me,Ge);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ue(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Df(r/1960))-r,10<r){e.timeoutHandle=Ei(_t.bind(null,e,me,Ge),r);break}_t(e,me,Ge);break;case 5:_t(e,me,Ge);break;default:throw Error(w(329))}}}return ye(e,G()),e.callbackNode===n?oc.bind(null,e):null}function Qi(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=dl(e,t),e!==2&&(t=me,me=n,t!==null&&Ki(t)),e}function Ki(e){me===null?me=e:me.push.apply(me,e)}function Mf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ae(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~Lo,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function Za(e){if(R&6)throw Error(w(327));dn();var t=Kr(e,0);if(!(t&1))return ye(e,G()),null;var n=dl(e,t);if(e.tag!==0&&n===2){var r=yi(e);r!==0&&(t=r,n=Qi(e,r))}if(n===1)throw n=or,Dt(e,0),ct(e,t),ye(e,G()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,me,Ge),ye(e,G()),null}function Ro(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(yn=G()+500,xl&&Ct())}}function Ot(e){ft!==null&&ft.tag===0&&!(R&6)&&dn();var t=R;R|=1;var n=be.transition,r=I;try{if(be.transition=null,I=1,e)return e()}finally{I=r,be.transition=n,R=t,!(R&6)&&Ct()}}function Io(){xe=ln.current,$(ln)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uf(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(vo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:gn(),$(ge),$(ue),Eo();break;case 5:Co(r);break;case 4:gn();break;case 13:$(W);break;case 19:$(W);break;case 10:ko(r.type._context);break;case 22:case 23:Io()}n=n.return}if(te=e,Z=e=wt(e.current,null),re=xe=t,q=0,or=null,Lo=jl=It=0,me=Bn=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}bt=null}return e}function ac(e,t){do{var n=Z;try{if(wo(),Ir.current=al,ol){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ol=!1}if(Rt=0,ee=J=H=null,$n=!1,rr=0,Mo.current=null,n===null||n.return===null){q=1,or=t,Z=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=re,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,y=s,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=Oa(o);if(x!==null){x.flags&=-257,Ua(x,o,s,i,t),x.mode&1&&Ia(i,d,t),t=x,u=d;var k=t.updateQueue;if(k===null){var j=new Set;j.add(u),t.updateQueue=j}else k.add(u);break e}else{if(!(t&1)){Ia(i,d,t),Oo();break e}u=Error(w(426))}}else if(B&&s.mode&1){var L=Oa(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Ua(L,o,s,i,t),yo(vn(u,s));break e}}i=u=vn(u,s),q!==4&&(q=2),Bn===null?Bn=[i]:Bn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Wu(i,u,t);Pa(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(yt===null||!yt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Hu(i,s,t);Pa(i,g);break e}}i=i.return}while(i!==null)}cc(n)}catch(S){t=S,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function sc(){var e=sl.current;return sl.current=al,e===null?al:e}function Oo(){(q===0||q===3||q===2)&&(q=4),te===null||!(It&268435455)&&!(jl&268435455)||ct(te,re)}function dl(e,t){var n=R;R|=2;var r=sc();(te!==e||re!==t)&&(Ge=null,Dt(e,t));do try{Lf();break}catch(l){ac(e,l)}while(!0);if(wo(),R=n,sl.current=r,Z!==null)throw Error(w(261));return te=null,re=0,q}function Lf(){for(;Z!==null;)uc(Z)}function Ff(){for(;Z!==null&&!id();)uc(Z)}function uc(e){var t=fc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?cc(e):Z=t,Mo.current=null}function cc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_f(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Z=null;return}}else if(n=zf(n,t,xe),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);q===0&&(q=5)}function _t(e,t,n){var r=I,l=be.transition;try{be.transition=null,I=1,Rf(e,t,n,r)}finally{be.transition=l,I=r}return null}function Rf(e,t,n,r){do dn();while(ft!==null);if(R&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(hd(e,i),e===te&&(Z=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,pc(Qr,function(){return dn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=be.transition,be.transition=null;var o=I;I=1;var s=R;R|=4,Mo.current=null,bf(e,n),lc(n,e),tf(Ni),Yr=!!ji,Ni=ji=null,e.current=n,Pf(n),od(),R=s,I=o,be.transition=i}else e.current=n;if(Tr&&(Tr=!1,ft=e,cl=l),i=e.pendingLanes,i===0&&(yt=null),ud(n.stateNode),ye(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ul)throw ul=!1,e=Wi,Wi=null,e;return cl&1&&e.tag!==0&&dn(),i=e.pendingLanes,i&1?e===Hi?Vn++:(Vn=0,Hi=e):Vn=0,Ct(),null}function dn(){if(ft!==null){var e=Ws(cl),t=be.transition,n=I;try{if(be.transition=null,I=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,cl=0,R&6)throw Error(w(331));var l=R;for(R|=4,_=e.current;_!==null;){var i=_,o=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(_=d;_!==null;){var y=_;switch(y.tag){case 0:case 11:case 15:An(8,y,i)}var v=y.child;if(v!==null)v.return=y,_=v;else for(;_!==null;){y=_;var m=y.sibling,x=y.return;if(tc(y),y===d){_=null;break}if(m!==null){m.return=x,_=m;break}_=x}}}var k=i.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var L=j.sibling;j.sibling=null,j=L}while(j!==null)}}_=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,_=o;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:An(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var c=e.current;for(_=c;_!==null;){o=_;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,_=p;else e:for(o=c;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sl(9,s)}}catch(S){Y(s,s.return,S)}if(s===o){_=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,_=g;break e}_=s.return}}if(R=l,Ct(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{I=n,be.transition=t}}return!1}function Ja(e,t,n){t=vn(n,t),t=Wu(e,t,1),e=vt(e,t,1),t=de(),e!==null&&(sr(e,1,t),ye(e,t))}function Y(e,t,n){if(e.tag===3)Ja(e,e,n);else for(;t!==null;){if(t.tag===3){Ja(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=vn(n,e),e=Hu(t,e,1),t=vt(t,e,1),e=de(),t!==null&&(sr(t,1,e),ye(t,e));break}}t=t.return}}function If(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(q===4||q===3&&(re&130023424)===re&&500>G()-Fo?Dt(e,0):Lo|=n),ye(e,t)}function dc(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=de();e=nt(e,t),e!==null&&(sr(e,t,n),ye(e,n))}function Of(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dc(e,n)}function Uf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),dc(e,n)}var fc;fc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Ef(e,t,n);he=!!(e.flags&131072)}else he=!1,B&&t.flags&1048576&&gu(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var l=pn(t,ue.current);cn(t,n),l=_o(null,t,r,e,l,n);var i=To();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(i=!0,qr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,jo(t),l.updater=kl,t.stateNode=l,l._reactInternals=t,Mi(t,r,e,n),t=Ri(null,t,r,!0,i,n)):(t.tag=0,B&&i&&go(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Af(r),e=Le(r,e),l){case 0:t=Fi(null,t,r,e,n);break e;case 1:t=Ba(null,t,r,e,n);break e;case 11:t=$a(null,t,r,e,n);break e;case 14:t=Aa(null,t,r,Le(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Fi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ba(e,t,r,l,n);case 3:e:{if(Gu(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Su(e,t),ll(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=vn(Error(w(423)),t),t=Va(e,t,r,n,l);break e}else if(r!==l){l=vn(Error(w(424)),t),t=Va(e,t,r,n,l);break e}else for(we=gt(t.stateNode.containerInfo.firstChild),ke=t,B=!0,Re=null,n=wu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===l){t=rt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return ju(t),e===null&&bi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ci(r,l)?o=null:i!==null&&Ci(r,i)&&(t.flags|=32),Yu(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&bi(t),null;case 13:return Xu(e,t,n);case 4:return No(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),$a(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(nl,r._currentValue),r._currentValue=o,i!==null)if(Ae(i.value,o)){if(i.children===l.children&&!ge.current){t=rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=qe(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?u.next=u:(u.next=y.next,y.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Pi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(w(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Pi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,cn(t,n),l=Pe(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Aa(e,t,r,l,n);case 15:return Qu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ur(e,t),t.tag=1,ve(r)?(e=!0,qr(t)):e=!1,cn(t,n),Vu(t,r,l),Mi(t,r,l,n),Ri(null,t,r,!0,e,n);case 19:return Zu(e,t,n);case 22:return Ku(e,t,n)}throw Error(w(156,t.tag))};function pc(e,t){return $s(e,t)}function $f(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new $f(e,t,n,r)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Af(e){if(typeof e=="function")return Uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ro)return 11;if(e===lo)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Br(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Uo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yt:return Mt(n.children,l,i,t);case no:o=8,l|=8;break;case ri:return e=Te(12,n,t,l|2),e.elementType=ri,e.lanes=i,e;case li:return e=Te(13,n,t,l),e.elementType=li,e.lanes=i,e;case ii:return e=Te(19,n,t,l),e.elementType=ii,e.lanes=i,e;case js:return Nl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ks:o=10;break e;case Ss:o=9;break e;case ro:o=11;break e;case lo:o=14;break e;case at:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Te(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Mt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=js,e.lanes=n,e.stateNode={isHidden:!1},e}function ei(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function ti(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function $o(e,t,n,r,l,i,o,s,u){return e=new Bf(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Te(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jo(i),e}function Vf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mc(e){if(!e)return St;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ve(n))return mu(e,n,t)}return t}function hc(e,t,n,r,l,i,o,s,u){return e=$o(n,r,!0,e,l,i,o,s,u),e.context=mc(null),n=e.current,r=de(),l=xt(n),i=qe(r,l),i.callback=t??null,vt(n,i,l),e.current.lanes=l,sr(e,l,r),ye(e,r),e}function Cl(e,t,n,r){var l=t.current,i=de(),o=xt(l);return n=mc(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(l,t,o),e!==null&&($e(e,l,o,i),Rr(e,l,o)),o}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ao(e,t){qa(e,t),(e=e.alternate)&&qa(e,t)}function Wf(){return null}var gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bo(e){this._internalRoot=e}El.prototype.render=Bo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Cl(e,t,null,null)};El.prototype.unmount=Bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){Cl(null,e,null,null)}),t[tt]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ks();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&Gs(e)}};function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function es(){}function Hf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=fl(o);i.call(d)}}var o=hc(t,r,e,0,null,!1,!1,"",es);return e._reactRootContainer=o,e[tt]=o.current,Jn(e.nodeType===8?e.parentNode:e),Ot(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=fl(u);s.call(d)}}var u=$o(e,0,!1,null,null,!1,!1,"",es);return e._reactRootContainer=u,e[tt]=u.current,Jn(e.nodeType===8?e.parentNode:e),Ot(function(){Cl(t,u,n,r)}),u}function _l(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=fl(o);s.call(u)}}Cl(t,o,e,l)}else o=Hf(n,t,e,l,r);return fl(o)}Hs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(ao(t,n|1),ye(t,G()),!(R&6)&&(yn=G()+500,Ct()))}break;case 13:Ot(function(){var r=nt(e,1);if(r!==null){var l=de();$e(r,e,1,l)}}),Ao(e,1)}};so=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=de();$e(t,e,134217728,n)}Ao(e,134217728)}};Qs=function(e){if(e.tag===13){var t=xt(e),n=nt(e,t);if(n!==null){var r=de();$e(n,e,t,r)}Ao(e,t)}};Ks=function(){return I};Ys=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};hi=function(e,t,n){switch(t){case"input":if(si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=yl(r);if(!l)throw Error(w(90));Cs(r),si(r,l)}}}break;case"textarea":zs(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};Ls=Ro;Fs=Ot;var Qf={usingClientEntryPoint:!1,Events:[cr,Jt,yl,Ds,Ms,Ro]},bn={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kf={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Os(e),e===null?null:e.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||Wf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{ml=br.inject(Kf),Qe=br}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qf;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vo(t))throw Error(w(200));return Vf(e,t,null,n)};je.createRoot=function(e,t){if(!Vo(e))throw Error(w(299));var n=!1,r="",l=gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=$o(e,1,!1,null,null,n,!1,r,l),e[tt]=t.current,Jn(e.nodeType===8?e.parentNode:e),new Bo(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Os(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Ot(e)};je.hydrate=function(e,t,n){if(!zl(t))throw Error(w(200));return _l(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Vo(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=gc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=hc(t,null,e,1,n??null,l,!1,i,o),e[tt]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new El(t)};je.render=function(e,t,n){if(!zl(t))throw Error(w(200));return _l(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!zl(e))throw Error(w(40));return e._reactRootContainer?(Ot(function(){_l(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};je.unstable_batchedUpdates=Ro;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return _l(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function vc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vc)}catch(e){console.error(e)}}vc(),vs.exports=je;var Yf=vs.exports,yc,ts=Yf;yc=ts.createRoot,ts.hydrateRoot;function lt(e){return e?e.startsWith("http://")||e.startsWith("https://")?e:`${fr}${e}`:null}function Oe(e){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e);t.lang="de-DE",t.rate=.9;const r=window.speechSynthesis.getVoices().find(l=>l.lang.startsWith("de"));r&&(t.voice=r),window.speechSynthesis.speak(t)}function ns(e,t){let{repetitions:n,easiness:r,interval:l}=e;t>=3?(n===0?l=1:n===1?l=6:l=Math.round(l*r),n+=1):(n=0,l=1),r=Math.max(1.3,r+.1-(5-t)*(.08+(5-t)*.02));const i=Date.now()+l*864e5;return{repetitions:n,easiness:r,interval:l,nextReview:i,lastGrade:t}}function Gf(e){const t=Math.ceil((e-Date.now())/864e5);return t<=0?"Hoy":t===1?"Mañana":`${t} días`}const fr="http://localhost:3001",Wo="dk_token",xc=()=>localStorage.getItem(Wo),Xf=e=>localStorage.setItem(Wo,e),rs=()=>localStorage.removeItem(Wo);function Tl(){const e=xc();return e?{Authorization:`Bearer ${e}`}:{}}async function pr(e,t={}){const n=await fetch(`${fr}${e}`,{headers:{"Content-Type":"application/json",...Tl(),...t.headers||{}},...t});if(!n.ok){const r=await n.json().catch(()=>({}));throw Object.assign(new Error(r.error||n.statusText),{status:n.status})}return n.json()}async function ls(){return pr("/cards")}async function is(e){const t=e.length===0?"?allowEmpty=true":"";return pr(`/cards${t}`,{method:"PUT",body:JSON.stringify(e)})}async function Zf(e){return pr("/explain",{method:"POST",body:JSON.stringify({german:e.german,translation:e.translation,note:e.note||""})}).then(t=>t.text)}async function Jf(e){const t=new FormData;t.append("file",e);const n=await fetch(`${fr}/upload`,{method:"POST",body:t,headers:Tl()});if(!n.ok)throw new Error("Error al subir archivo.");return n.json()}async function qf(e){const t=e.split("/media/")[1];t&&await fetch(`${fr}/media/${t}`,{method:"DELETE",headers:Tl()})}const Yi="@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400;500&display=swap');",wc=`

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
    border-radius: 4px;
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
    border-radius: 4px;
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
    box-shadow: 0 1px 2px rgba(60,40,20,.06);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    font-family: 'DM Mono', monospace;
  }

  .grade-btn:hover { background: var(--surface-alt); box-shadow: var(--shadow-soft); }

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
    border-radius: 4px;
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
    border-radius: 2px;
    padding: 0.7rem 0.9rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.85rem;
    outline: none;
    transition: border-color 0.2s;
  }

  .field input:focus, .field textarea:focus {
    border-color: var(--danger);
  }

  .field textarea { resize: vertical; min-height: 80px; }

  .submit-btn {
    background: var(--danger);
    box-shadow: var(--shadow-pop);
    border-radius: 2px;
    color: #FFFFFF;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.75rem 2rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  .submit-btn:hover { background: var(--danger-hover); }

  .success-msg {
    margin-top: 1rem;
    font-size: 0.7rem;
    color: #88cc44;
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
    grid-template-columns: 30px 1fr auto auto auto auto;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 0.75rem;
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    border-radius: 2px;
    transition: border-color 0.2s;
  }

  .list-item:hover { box-shadow: 0 6px 16px -4px rgba(60,40,20,.16); }

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
    border-radius: 2px;
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
    border-radius: 2px;
    padding: 0.7rem 0.9rem;
    color: #8a9a8a;
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    outline: none;
    resize: vertical;
    min-height: 160px;
    line-height: 1.7;
    transition: border-color 0.2s;
  }

  .bulk-textarea:focus { border-color: var(--danger); }

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
    border-radius: 2px;
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
    border-radius: 2px;
    font-size: 0.9em;
  }

  .error-msg {
    margin-top: 1rem;
    font-size: 0.7rem;
    color: #cc4444;
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
    border-radius: 2px;
    padding: 0.5rem 0.75rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .url-input:focus { border-color: var(--danger); }

  .url-set-btn {
    background: var(--surface-alt);
    border: 1px solid var(--border-input);
    border-radius: 2px;
    color: var(--accent);
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    padding: 0.5rem 0.85rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .url-set-btn:hover { background: var(--surface-alt); }

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
    border-radius: 2px;
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
    border-radius: 4px;
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
    border-radius: 2px;
    padding: 0.6rem 2rem 0.6rem 0.9rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .list-search:focus { border-color: var(--danger); }
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
    border-radius: 2px;
    transition: color 0.2s;
    font-family: 'DM Mono', monospace;
    flex-shrink: 0;
  }
  .edit-btn:hover { color: var(--accent); }

  /* ── Edit modal ── */
  .edit-dialog {
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-radius: 4px;
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
    border-radius: 2px;
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
    border-radius: 2px;
    border: 1px solid var(--border);
    display: block;
  }

  .preview-thumb-empty {
    width: 28px;
    height: 28px;
    border-radius: 2px;
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
  .img-preview-status.err { color: #cc4444; }

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
    border-radius: 2px;
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
    border-radius: 4px;
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
    border-radius: 3px;
    padding: 1rem 0.75rem;
    text-align: center;
  }

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
    border-radius: 2px;
    padding: 0.7rem 0.9rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .answer-input:focus { border-color: var(--danger); }
  .answer-input.correct { border-color: var(--ok); background: var(--ok-soft); }
  .answer-input.wrong   { border-color: var(--danger); background: var(--danger-soft); }

  .answer-check-btn {
    background: var(--danger);
    border: none;
    border-radius: 2px;
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
    border-radius: 2px;
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
  .reveal-btn:hover { color: var(--text-2); border-color: var(--text-faint); }

  .continuar-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--accent-soft);
    border: 1px solid var(--accent);
    border-radius: 2px;
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
  .continuar-btn:hover { background: var(--accent-soft); color: var(--accent); }
  .continuar-btn::after { content: " →"; font-size: 0.85rem; }

  .answer-feedback {
    font-size: 0.75rem;
    padding: 0.6rem 0.9rem;
    border-radius: 2px;
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
    color: #ff8888;
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
    border-radius: 3px;
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
  .article-btn.wrong   { border-color: var(--danger); color: #ff8888; background: var(--danger-soft); }
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
      grid-template-columns: 30px 1fr auto auto auto;
      grid-template-rows: auto;
    }

    .explanation {
      font-size: 0.75rem;
      padding: 1rem;
    }
  }
`,Ho=[{n:0,label:"Nada"},{n:1,label:"Mal"},{n:2,label:"Difícil"},{n:3,label:"Ok"},{n:4,label:"Bien"},{n:5,label:"Fácil"}];function ep({card:e}){return a.jsxs("div",{className:"t1-front",children:[a.jsx("div",{className:"card-type-badge",children:"Tipo 1"}),e.imageUrl?a.jsx("img",{className:"t1-front-img",src:lt(e.imageUrl),alt:""}):a.jsx("div",{style:{fontSize:"0.75rem",color:"#444",border:"1px dashed #333",padding:"1.5rem 2rem",borderRadius:"4px"},children:"sin imagen"}),a.jsx("div",{className:"t1-front-hint",children:"toca para voltear"})]})}function tp({card:e,onSpeak:t}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:"Tipo 1"}),a.jsx("div",{className:"card-hint",children:"califica abajo"}),a.jsx("div",{className:"t1-back-word",children:e.german}),e.note&&a.jsx("div",{className:"t1-back-note",children:e.note}),a.jsx("button",{className:"audio-replay-btn",onClick:n=>{n.stopPropagation(),t()},title:"Pronunciar",children:"▶"})]})}function np({card:e}){const t=(n,r)=>{if(!n||!r)return n;const l=r.replace(/^(der|die|das|ein|eine)\s+/i,"").toLowerCase(),i=new RegExp(`(${l})`,"gi");return n.split(i).map((s,u)=>i.test(s)?a.jsx("em",{children:s},u):s)};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:"Tipo 2"}),a.jsx("div",{className:"card-hint",children:"toca para voltear"}),a.jsxs("div",{className:"t2-front",children:[a.jsx("div",{className:"t2-word",children:e.german}),e.example&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"t2-divider"}),a.jsx("div",{className:"t2-example",children:t(e.example,e.german)})]})]})]})}function rp({card:e}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:"Tipo 2"}),a.jsx("div",{className:"card-hint",children:"califica abajo"}),a.jsxs("div",{className:"t2-back",children:[a.jsx("div",{className:"t2-translation",children:e.translation}),e.note&&a.jsx("div",{className:"card-note",children:e.note}),a.jsx("button",{className:"audio-replay-btn",style:{marginTop:"0.5rem"},onClick:t=>{t.stopPropagation(),Oe(e.german)},title:"Pronunciar",children:"▶"}),e.exampleTranslation&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"t2-divider",style:{marginTop:"0.5rem"}}),a.jsxs("div",{className:"t2-example-trans",children:['"',e.exampleTranslation,'"']})]})]})]})}function lp({card:e}){return a.jsxs("div",{className:"t4-front",children:[a.jsx("div",{className:"card-type-badge",children:"Tipo 4"}),a.jsx("div",{className:"t4-label",children:"¿Cómo se dice en alemán?"}),a.jsx("div",{className:"t4-word",children:e.translation}),e.note&&a.jsx("div",{className:"t4-note",children:e.note})]})}function ip({card:e}){const n=(e.example||"").split("___");return a.jsxs("div",{className:"t5-front",children:[a.jsx("div",{className:"card-type-badge",children:"Tipo 5"}),e.imageUrl&&a.jsx("img",{className:"t1-front-img",src:lt(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"45%",maxWidth:"80%",marginBottom:"0.25rem"}}),a.jsx("div",{className:"t5-sentence",children:n.map((r,l)=>a.jsxs(Ie.Fragment,{children:[r,l<n.length-1&&a.jsx("span",{className:"t5-blank",children:"_____"})]},l))}),e.note&&a.jsx("div",{className:"t4-note",style:{fontSize:"0.62rem"},children:e.note})]})}function op({card:e}){const t=e.german.replace(/^(der|die|das)\s+/i,"");return a.jsxs("div",{className:"t6-front",children:[a.jsx("div",{className:"card-type-badge",children:"Tipo 6"}),e.imageUrl&&a.jsx("img",{className:"t1-front-img",src:lt(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"50%",maxWidth:"80%",marginBottom:"0.5rem"}}),a.jsx("div",{className:"t6-label",children:"¿Cuál es el artículo?"}),a.jsxs("div",{className:"t6-word",children:["___ ",t]})]})}function ap({card:e,onGrade:t,onExplain:n,explaining:r,explanation:l}){const[i,o]=N.useState(""),[s,u]=N.useState(null),d=Ie.useRef(null);Ie.useEffect(()=>{var m;(m=d.current)==null||m.focus()},[]);const y=()=>{if(!i.trim())return;const m=i.trim()===e.german;u(m?"correct":"wrong")},v=()=>{u("revealed"),Oe(e.german)};return a.jsxs("div",{className:"answer-zone",children:[a.jsxs("div",{className:"answer-input-row",children:[a.jsx("input",{ref:d,className:`answer-input ${s==="wrong"?"wrong":s==="correct"?"correct":""}`,value:i,onChange:m=>o(m.target.value),onKeyDown:m=>{m.key==="Enter"&&!s&&y()},placeholder:"Escribe en alemán…",disabled:!!s}),a.jsx("button",{className:"answer-check-btn",onClick:y,disabled:!!s||!i.trim(),children:"OK"}),a.jsx("button",{className:"reveal-btn",onClick:v,disabled:!!s,children:"Revelar"})]}),s==="correct"&&a.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{children:"✓ ¡Correcto!"}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem"},onClick:()=>Oe(e.german),children:"▶"})]}),s==="wrong"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{children:["✗ La respuesta es: ",a.jsx("strong",{children:e.german})]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),s==="revealed"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{children:["👁 La respuesta es: ",a.jsx("strong",{children:e.german})]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),a.jsx("button",{className:"continuar-btn",onClick:()=>t(0),children:"Continuar"})]}),(s==="correct"||s==="wrong")&&a.jsx("div",{className:"grades",children:Ho.map(({n:m,label:x})=>a.jsxs("button",{className:`grade-btn g${m}`,onClick:()=>t(m),children:[a.jsx("span",{className:"grade-num",children:m}),a.jsx("span",{className:"grade-label",children:x})]},m))}),!!s&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:n,disabled:r,children:r?"Consultando IA…":"✦ Explicar con IA"}),l&&a.jsx("div",{className:"explanation",children:l})]})]})}function sp({card:e,onGrade:t,onExplain:n,explaining:r,explanation:l}){const[i,o]=N.useState(""),[s,u]=N.useState(null),d=Ie.useRef(null);Ie.useEffect(()=>{var x;(x=d.current)==null||x.focus()},[]);const y=(e.example||"").replace("___",e.german),v=()=>{if(!i.trim())return;const x=i.trim()===e.german;u(x?"correct":"wrong")},m=()=>{u("revealed"),Oe(e.german)};return a.jsxs("div",{className:"answer-zone",children:[a.jsxs("div",{className:"answer-input-row",children:[a.jsx("input",{ref:d,className:`answer-input ${s==="wrong"?"wrong":s==="correct"?"correct":""}`,value:i,onChange:x=>o(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!s&&v()},placeholder:"Completa el espacio…",disabled:!!s}),a.jsx("button",{className:"answer-check-btn",onClick:v,disabled:!!s||!i.trim(),children:"OK"}),a.jsx("button",{className:"reveal-btn",onClick:m,disabled:!!s,children:"Revelar"})]}),s==="correct"&&a.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["✓ ¡Correcto! — ",y]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),s==="wrong"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["✗ Era: ",a.jsx("strong",{children:e.german})," — ",y]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),s==="revealed"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["👁 ",a.jsx("strong",{children:e.german})," — ",y]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),a.jsx("button",{className:"continuar-btn",onClick:()=>t(0),children:"Continuar"})]}),(s==="correct"||s==="wrong")&&a.jsx("div",{className:"grades",children:Ho.map(({n:x,label:k})=>a.jsxs("button",{className:`grade-btn g${x}`,onClick:()=>t(x),children:[a.jsx("span",{className:"grade-num",children:x}),a.jsx("span",{className:"grade-label",children:k})]},x))}),!!s&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:n,disabled:r,children:r?"Consultando IA…":"✦ Explicar con IA"}),l&&a.jsx("div",{className:"explanation",children:l})]})]})}function up({card:e,onGrade:t,onExplain:n,explaining:r,explanation:l}){var y,v;const[i,o]=N.useState(null),s=((v=(y=e.german.match(/^(der|die|das)/i))==null?void 0:y[1])==null?void 0:v.toLowerCase())||"",u=m=>{i||o(m)},d=m=>i?m===s?"reveal":m===i&&i!==s?"wrong":"":"";return a.jsxs("div",{className:"answer-zone",children:[a.jsx("div",{className:"article-btns",children:["der","die","das"].map(m=>a.jsx("button",{className:`article-btn ${d(m)}`,onClick:()=>u(m),disabled:!!i,children:m},m))}),i&&a.jsxs("div",{className:`answer-feedback ${i===s?"correct":"wrong"}`,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{style:{minWidth:0},children:i===s?`✓ Correcto — ${e.german}`:`✗ Es ${s} — ${e.german}`}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),a.jsx("button",{className:"continuar-btn",onClick:()=>t(i===s?5:1),children:"Continuar"})]}),i&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:n,disabled:r,children:r?"Consultando IA…":"✦ Explicar con IA"}),l&&a.jsx("div",{className:"explanation",children:l})]})]})}function cp({cards:e,onGrade:t}){const[n,r]=N.useState(!1),[l,i]=N.useState(!1),[o,s]=N.useState(null),[u,d]=N.useState(0),[y,v]=N.useState(!1),m=Ie.useMemo(()=>{const g=e.filter(S=>S.nextReview<=Date.now());for(let S=g.length-1;S>0;S--){const C=Math.floor(Math.random()*(S+1));[g[S],g[C]]=[g[C],g[S]]}return g},[e.map(g=>g.id+g.nextReview).join(",")]),x=m[0],k=Ie.useCallback(g=>{g&&Oe(g)},[]);Ie.useEffect(()=>{if(n&&((x==null?void 0:x.cardType)==="type1"||(x==null?void 0:x.cardType)==="type2")){const g=x.german,S=setTimeout(()=>k(g),350);return()=>clearTimeout(S)}},[n]);const j=g=>{var C;if(y)return;(C=window.speechSynthesis)==null||C.cancel(),((x==null?void 0:x.cardType)==="type1"||(x==null?void 0:x.cardType)==="type2")&&n?(v(!0),r(!1),setTimeout(()=>{t(x.id,ns(x,g)),s(null),d(E=>E+1),v(!1)},560)):(t(x.id,ns(x,g)),r(!1),s(null),d(E=>E+1))},L=async()=>{i(!0);try{s(await Zf(x))}catch{s("Error al contactar la API.")}i(!1)};if(!e.length)return a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["No hay tarjetas.",a.jsx("br",{}),"Ve a ",a.jsx("strong",{children:"+ Agregar"})," para crear tu primera."]})});if(!m.length)return a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["Sin repasos pendientes.",a.jsx("br",{}),"Vuelve mañana — el sistema hace el resto."]})});const f=x.cardType||"type1",c=["type4","type5","type6"].includes(f),p=["type1","type2"].includes(f);return a.jsxs("div",{children:[a.jsxs("div",{className:"session-info",children:[a.jsxs("span",{children:["Pendientes: ",a.jsx("strong",{children:m.length})]}),a.jsxs("span",{children:["Total: ",a.jsx("strong",{children:e.length})]})]}),p&&a.jsx("div",{className:"card-scene",onClick:()=>!y&&r(g=>!g),children:a.jsxs("div",{className:`card-inner ${n?"flipped":""}`,children:[a.jsxs("div",{className:"card-face front",children:[f==="type1"&&a.jsx(ep,{card:x}),f==="type2"&&a.jsx(np,{card:x})]}),a.jsxs("div",{className:"card-face back",children:[f==="type1"&&a.jsx(tp,{card:x,onSpeak:k}),f==="type2"&&a.jsx(rp,{card:x})]})]})}),c&&a.jsx("div",{className:"card-scene",children:a.jsxs("div",{className:"card-static",children:[f==="type4"&&a.jsx(lp,{card:x}),f==="type5"&&a.jsx(ip,{card:x}),f==="type6"&&a.jsx(op,{card:x})]})}),c&&a.jsxs(Ie.Fragment,{children:[f==="type4"&&a.jsx(ap,{card:x,onGrade:j,onExplain:L,explaining:l,explanation:o}),f==="type5"&&a.jsx(sp,{card:x,onGrade:j,onExplain:L,explaining:l,explanation:o}),f==="type6"&&a.jsx(up,{card:x,onGrade:j,onExplain:L,explaining:l,explanation:o})]},u),p&&n&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"grades",children:Ho.map(({n:g,label:S})=>a.jsxs("button",{className:`grade-btn g${g}`,onClick:()=>j(g),children:[a.jsx("span",{className:"grade-num",children:g}),a.jsx("span",{className:"grade-label",children:S})]},g))}),a.jsx("button",{className:"explain-btn",onClick:L,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),o&&a.jsx("div",{className:"explanation",children:o})]})]})}function dp({onAdd:e,onBulkAdd:t}){const[n,r]=N.useState("single"),[l,i]=N.useState("type1"),[o,s]=N.useState(""),[u,d]=N.useState(""),[y,v]=N.useState(""),[m,x]=N.useState(""),[k,j]=N.useState(""),[L,f]=N.useState(!1),[c,p]=N.useState(null),[g,S]=N.useState(null),[C,E]=N.useState(null),[h,b]=N.useState("file"),[T,A]=N.useState("file"),[K,Ce]=N.useState(""),[At,Bt]=N.useState(""),[Vt,Wt]=N.useState(""),[z,P]=N.useState(null),[M,V]=N.useState(!0),X=()=>{!o.trim()||!u.trim()||(e({cardType:l,german:o.trim(),translation:u.trim(),note:y.trim(),example:m.trim(),exampleTranslation:k.trim(),imageUrl:c,audioUrl:g}),s(""),d(""),v(""),p(null),S(null),x(""),j(""),f(!0),setTimeout(()=>f(!1),2e3))},Et=async(D,ie)=>{const Be=D.target.files[0];if(Be){E(ie);try{const{url:Sn}=await Jf(Be);ie==="image"?p(Sn):S(Sn)}catch{alert("Error al subir archivo.")}E(null),D.target.value=""}},Ee=(D,ie)=>{const Be=ie.trim();Be&&(D==="image"?(p(Be),Ce("")):(S(Be),Bt("")))},Ht=D=>{const ie=D==="image"?c:g;!(ie&&(ie.startsWith("http://")||ie.startsWith("https://")))&&ie&&qf(ie),D==="image"?(p(null),Ce("")):(S(null),Bt(""))},Ye=()=>{P(null);let D;try{D=JSON.parse(Vt.trim())}catch{P({ok:!1,msg:"JSON inválido. Revisa la sintaxis."});return}if(!Array.isArray(D)){P({ok:!1,msg:"Debe ser un array [ ... ]."});return}const ie=D.filter(Be=>{var Sn,Qo;return((Sn=Be.german)==null?void 0:Sn.trim())&&((Qo=Be.translation)==null?void 0:Qo.trim())});if(!ie.length){P({ok:!1,msg:'Ningún objeto tiene "german" y "translation".'});return}t(ie,M),Wt(""),P({ok:!0,msg:`✓ ${ie.length} tarjeta${ie.length!==1?"s":""} ${M?"importada":"agregada"}${ie.length!==1?"s":""}.`})};return a.jsxs("div",{className:"add-form",children:[a.jsxs("div",{className:"add-tabs",children:[a.jsx("button",{className:`add-tab ${n==="single"?"active":""}`,onClick:()=>r("single"),children:"Una tarjeta"}),a.jsx("button",{className:`add-tab ${n==="bulk"?"active":""}`,onClick:()=>r("bulk"),children:"Importar JSON"})]}),n==="single"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"type-selector",style:{flexWrap:"wrap"},children:[a.jsxs("button",{className:`type-btn ${l==="type1"?"active":""}`,onClick:()=>i("type1"),children:["Tipo 1",a.jsx("br",{}),"Imagen → Palabra"]}),a.jsxs("button",{className:`type-btn ${l==="type2"?"active":""}`,onClick:()=>i("type2"),children:["Tipo 2",a.jsx("br",{}),"Ejemplo → Traducción"]}),a.jsxs("button",{className:`type-btn ${l==="type4"?"active":""}`,onClick:()=>i("type4"),children:["Tipo 4",a.jsx("br",{}),"ES → escribir DE"]}),a.jsxs("button",{className:`type-btn ${l==="type5"?"active":""}`,onClick:()=>i("type5"),children:["Tipo 5",a.jsx("br",{}),"Completar"]}),a.jsxs("button",{className:`type-btn ${l==="type6"?"active":""}`,onClick:()=>i("type6"),children:["Tipo 6",a.jsx("br",{}),"Artículo"]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Alemán"}),a.jsx("input",{value:o,onChange:D=>s(D.target.value),placeholder:"z.B. der Schlüssel"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción"}),a.jsx("input",{value:u,onChange:D=>d(D.target.value),placeholder:"la llave"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Nota (opcional)"}),a.jsx("textarea",{value:y,onChange:D=>v(D.target.value),placeholder:"artículo, ejemplo, truco…"})]}),(l==="type2"||l==="type5")&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:l==="type5"?"Oración con ___ (espacio en blanco)":"Ejemplo en alemán"}),a.jsx("input",{value:m,onChange:D=>x(D.target.value),placeholder:l==="type5"?"Der ___ läuft schnell.":"Der Hund läuft schnell."})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción del ejemplo"}),a.jsx("input",{value:k,onChange:D=>j(D.target.value),placeholder:"El perro corre rápido."})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Imagen (opcional) —"," ",a.jsx("button",{className:"mode-toggle",onClick:()=>{b(D=>D==="file"?"url":"file"),p(null),Ce("")},children:h==="file"?"usar URL":"subir archivo"})]}),c?a.jsxs("div",{className:"media-preview",children:[a.jsx("img",{src:lt(c),alt:""}),a.jsx("span",{className:"media-preview-label",children:c.startsWith("http")?"URL externa":c.split("/").pop()}),a.jsx("button",{className:"media-remove",onClick:()=>Ht("image"),children:"×"})]}):h==="file"?a.jsx("div",{className:"media-upload-row",children:a.jsxs("label",{className:"media-upload-btn",children:[C==="image"?a.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir imagen",a.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:D=>Et(D,"image"),disabled:!!C})]})}):a.jsxs("div",{className:"url-input-row",children:[a.jsx("input",{className:"url-input",value:K,onChange:D=>Ce(D.target.value),placeholder:"https://upload.wikimedia.org/…",onKeyDown:D=>D.key==="Enter"&&Ee("image",K)}),a.jsx("button",{className:"url-set-btn",onClick:()=>Ee("image",K),children:"OK"})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Audio (opcional) —"," ",a.jsx("button",{className:"mode-toggle",onClick:()=>{A(D=>D==="file"?"url":"file"),S(null),Bt("")},children:T==="file"?"usar URL":"subir archivo"})]}),g?a.jsxs("div",{className:"media-preview",children:[a.jsx("span",{className:"media-preview-label",children:g.startsWith("http")?"URL externa":g.split("/").pop()}),a.jsx("audio",{src:lt(g),controls:!0,style:{height:"24px",accentColor:"#cc0000"}}),a.jsx("button",{className:"media-remove",onClick:()=>Ht("audio"),children:"×"})]}):T==="file"?a.jsx("div",{className:"media-upload-row",children:a.jsxs("label",{className:"media-upload-btn",children:[C==="audio"?a.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir audio",a.jsx("input",{type:"file",accept:"audio/*",style:{display:"none"},onChange:D=>Et(D,"audio"),disabled:!!C})]})}):a.jsxs("div",{className:"url-input-row",children:[a.jsx("input",{className:"url-input",value:At,onChange:D=>Bt(D.target.value),placeholder:"https://forvo.com/… o link directo a .mp3",onKeyDown:D=>D.key==="Enter"&&Ee("audio",At)}),a.jsx("button",{className:"url-set-btn",onClick:()=>Ee("audio",At),children:"OK"})]})]}),a.jsx("button",{className:"submit-btn",onClick:X,children:"Agregar tarjeta"}),L&&a.jsx("div",{className:"success-msg",children:"✓ Guardada"})]}),n==="bulk"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Array JSON"}),a.jsx("textarea",{className:"bulk-textarea",value:Vt,onChange:D=>Wt(D.target.value),placeholder:`[
  { "german": "der Hund", "translation": "el perro", "note": "masc." },
  { "german": "die Katze", "translation": "la gata" }
]`})]}),a.jsxs("div",{className:"bulk-schema",children:["Campos: ",a.jsx("code",{children:"german"})," ✦ ",a.jsx("code",{children:"translation"})," ✦ ",a.jsx("code",{children:"note"})," (opcional)"]}),a.jsxs("label",{className:"bulk-replace-row",children:[a.jsx("input",{type:"checkbox",checked:M,onChange:D=>V(D.target.checked)}),a.jsx("span",{children:"Reemplazar todo el mazo (desactiva para agregar encima)"})]}),a.jsx("button",{className:"submit-btn",onClick:Ye,children:"Importar"}),z&&a.jsx("div",{className:z.ok?"success-msg":"error-msg",children:z.msg})]})]})}function fp({cards:e}){const t=Date.now(),n=864e5,r=[{label:"Nuevas",color:"#B4642F",count:0},{label:"Hoy",color:"#C8825B",count:0},{label:"Mañana",color:"#D29E78",count:0},{label:"3–7 días",color:"#DBB596",count:0},{label:"8–30 días",color:"#E2CBB3",count:0},{label:"+30 días",color:"#E8D9C5",count:0}];for(const o of e){const u=(o.nextReview-t)/n;o.repetitions===0?r[0].count++:u<=0?r[1].count++:u<=1?r[2].count++:u<=7?r[3].count++:u<=30?r[4].count++:r[5].count++}const l=Math.max(...r.map(o=>o.count),1),i=e.length;return i?a.jsxs("div",{className:"stats-view",children:[a.jsxs("div",{className:"stats-header",children:[a.jsx("div",{className:"stats-title",children:"Estado del mazo"}),a.jsxs("div",{className:"stats-total",children:[i," tarjeta",i!==1?"s":""," en total"]})]}),a.jsx("div",{className:"stats-chart",children:r.map((o,s)=>{const u=l>0?o.count/l*100:0,d=i>0?Math.round(o.count/i*100):0;return a.jsxs("div",{className:"stats-row",children:[a.jsx("div",{className:"stats-row-label",children:o.label}),a.jsx("div",{className:"stats-bar-wrap",children:a.jsx("div",{className:"stats-bar",style:{width:`${u}%`,background:o.color}})}),a.jsxs("div",{className:"stats-row-count",children:[a.jsx("span",{className:"stats-n",children:o.count}),a.jsxs("span",{className:"stats-pct",children:[d,"%"]})]})]},s)})}),a.jsxs("div",{className:"stats-footer",children:[a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#cc0000"},children:r[0].count+r[1].count}),a.jsx("div",{className:"kpi-label",children:"para estudiar hoy"})]}),a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#ffcc00"},children:e.filter(o=>o.repetitions>0&&o.interval>=21).length}),a.jsx("div",{className:"kpi-label",children:"maduras (≥21 días)"})]}),a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#aaa"},children:i>0?(e.reduce((o,s)=>o+s.easiness,0)/i).toFixed(2):"—"}),a.jsx("div",{className:"kpi-label",children:"easiness promedio"})]})]})]}):a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["Sin tarjetas aún.",a.jsx("br",{}),"Ve a ",a.jsx("strong",{children:"+ Agregar"})," para empezar."]})})}function pp({card:e,onSave:t,onClose:n}){const[r,l]=N.useState(e.imageUrl||""),[i,o]=N.useState(null),[s,u]=N.useState(!1),d=()=>{const y=r.trim();t({...e,imageUrl:y||null}),o("ok"),setTimeout(n,800)};return a.jsx("div",{className:"img-preview-overlay",onClick:n,children:a.jsxs("div",{className:"img-preview-dialog",onClick:y=>y.stopPropagation(),children:[a.jsxs("div",{className:"img-preview-header",children:[a.jsx("div",{className:"img-preview-word",children:e.german}),a.jsx("button",{className:"img-preview-close",onClick:n,children:"×"})]}),a.jsx("div",{className:"img-preview-frame",children:e.imageUrl&&!s?a.jsx("img",{src:lt(e.imageUrl),alt:"",onError:()=>u(!0)}):a.jsxs("div",{className:"img-preview-broken",children:[a.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),a.jsx("div",{children:s?"Imagen rota":"Sin imagen"})]})}),a.jsxs("div",{className:"img-preview-url-row",children:[a.jsx("input",{className:"img-preview-url-input",value:r,onChange:y=>{l(y.target.value),u(!1),o(null)},placeholder:"https://upload.wikimedia.org/…",onKeyDown:y=>y.key==="Enter"&&d()}),a.jsx("button",{className:"img-preview-save-btn",onClick:d,children:"Guardar"})]}),i==="ok"&&a.jsx("div",{className:"img-preview-status ok",children:"✓ Guardado"})]})})}function mp({card:e,onClose:t}){var i;const n=e.cardType||"type1";(i=e.german.match(/^(der|die|das)/i))!=null&&i[1];const r=e.german.replace(/^(der|die|das)\s+/i,""),l=(e.example||"").replace("___",e.german);return a.jsx("div",{className:"img-preview-overlay",onClick:t,children:a.jsxs("div",{className:"card-preview-dialog",onClick:o=>o.stopPropagation(),children:[a.jsxs("div",{className:"img-preview-header",children:[a.jsxs("div",{className:"img-preview-word",children:[a.jsxs("span",{style:{fontSize:"0.6rem",color:"#555",letterSpacing:"0.1em",textTransform:"uppercase",marginRight:"0.5rem"},children:["Tipo ",n.replace("type","")]}),e.german]}),a.jsx("button",{className:"img-preview-close",onClick:t,children:"×"})]}),a.jsxs("div",{className:"card-preview-side",children:[a.jsx("div",{className:"card-preview-label",children:"Frente"}),n==="type1"&&a.jsx("div",{className:"card-preview-body",children:e.imageUrl?a.jsx("img",{src:lt(e.imageUrl),alt:"",className:"card-preview-img",onError:o=>o.target.style.display="none"}):a.jsxs("div",{className:"img-preview-broken",children:[a.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),a.jsx("div",{children:"Sin imagen"})]})}),n==="type2"&&a.jsxs("div",{className:"card-preview-body",children:[a.jsx("div",{className:"card-preview-big",children:e.german}),e.example&&a.jsx("div",{className:"card-preview-example",children:e.example})]}),n==="type4"&&a.jsxs("div",{className:"card-preview-body",children:[a.jsx("div",{className:"card-preview-trans",children:e.translation}),e.note&&a.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type5"&&a.jsx("div",{className:"card-preview-body",children:a.jsx("div",{className:"card-preview-example",children:(e.example||"").replace("___","_____")})}),n==="type6"&&a.jsxs("div",{className:"card-preview-body",children:[e.imageUrl&&a.jsx("img",{src:lt(e.imageUrl),alt:"",className:"card-preview-img",onError:o=>o.target.style.display="none"}),a.jsxs("div",{className:"card-preview-big",style:{color:"#888"},children:["___ ",r]})]})]}),a.jsxs("div",{className:"card-preview-side",children:[a.jsx("div",{className:"card-preview-label",children:"Dorso"}),a.jsxs("div",{className:"card-preview-body",children:[(n==="type1"||n==="type6")&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-big",children:e.german}),e.note&&a.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type2"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-trans",children:e.translation}),e.exampleTranslation&&a.jsxs("div",{className:"card-preview-example",style:{color:"#666"},children:['"',e.exampleTranslation,'"']})]}),(n==="type4"||n==="type5")&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-big",children:e.german}),n==="type5"&&l&&a.jsx("div",{className:"card-preview-example",children:l})]})]})]}),a.jsx("button",{className:"continuar-btn",style:{alignSelf:"center"},onClick:t,children:"Cerrar"})]})})}function hp({card:e,onSave:t,onClose:n}){const[r,l]=N.useState(e.cardType||"type1"),[i,o]=N.useState(e.german),[s,u]=N.useState(e.translation),[d,y]=N.useState(e.note||""),[v,m]=N.useState(e.example||""),[x,k]=N.useState(e.exampleTranslation||""),[j,L]=N.useState(e.imageUrl||""),[f,c]=N.useState(e.audioUrl||""),p=()=>{!i.trim()||!s.trim()||t({...e,cardType:r,german:i.trim(),translation:s.trim(),note:d.trim(),example:v.trim(),exampleTranslation:x.trim(),imageUrl:j.trim()||null,audioUrl:f.trim()||null})};return a.jsx("div",{className:"confirm-overlay",onClick:n,children:a.jsxs("div",{className:"edit-dialog",onClick:g=>g.stopPropagation(),children:[a.jsx("div",{className:"confirm-title",children:"Editar tarjeta"}),a.jsxs("div",{className:"edit-fields",children:[a.jsxs("div",{className:"type-selector",style:{flexWrap:"wrap"},children:[a.jsx("button",{className:`type-btn ${r==="type1"?"active":""}`,onClick:()=>l("type1"),children:"Tipo 1"}),a.jsx("button",{className:`type-btn ${r==="type2"?"active":""}`,onClick:()=>l("type2"),children:"Tipo 2"}),a.jsx("button",{className:`type-btn ${r==="type4"?"active":""}`,onClick:()=>l("type4"),children:"Tipo 4"}),a.jsx("button",{className:`type-btn ${r==="type5"?"active":""}`,onClick:()=>l("type5"),children:"Tipo 5"}),a.jsx("button",{className:`type-btn ${r==="type6"?"active":""}`,onClick:()=>l("type6"),children:"Tipo 6"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Alemán"}),a.jsx("input",{value:i,onChange:g=>o(g.target.value)})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción"}),a.jsx("input",{value:s,onChange:g=>u(g.target.value)})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Nota"}),a.jsx("input",{value:d,onChange:g=>y(g.target.value),placeholder:"artículo, truco…"})]}),r==="type2"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Ejemplo en alemán"}),a.jsx("input",{value:v,onChange:g=>m(g.target.value)})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción del ejemplo"}),a.jsx("input",{value:x,onChange:g=>k(g.target.value)})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"URL imagen"}),a.jsx("input",{value:j,onChange:g=>L(g.target.value),placeholder:"https://…"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"URL audio"}),a.jsx("input",{value:f,onChange:g=>c(g.target.value),placeholder:"https://…"})]})]}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"confirm-cancel",onClick:n,children:"Cancelar"}),a.jsx("button",{className:"confirm-ok",onClick:p,children:"Guardar"})]})]})})}function gp({card:e,onClick:t}){const[n,r]=N.useState(!1);return Ie.useEffect(()=>{r(!1)},[e.imageUrl]),!e.imageUrl||n?a.jsx("button",{className:"preview-btn",onClick:t,title:"Sin imagen — click para agregar",children:a.jsx("div",{className:"preview-thumb-empty",children:"+"})}):a.jsx("button",{className:"preview-btn",onClick:t,title:"Vista previa de imagen",children:a.jsx("img",{className:"preview-thumb",src:lt(e.imageUrl),alt:"",onError:()=>r(!0)})})}function vp({cards:e,onDelete:t,onDeleteAll:n,onEdit:r}){const[l,i]=N.useState(!1),o=()=>{const h=JSON.stringify(e,null,2),b=new Blob([h],{type:"application/json"}),T=URL.createObjectURL(b),A=document.createElement("a"),K=new Date().toISOString().slice(0,10);A.href=T,A.download=`deutschkarten-backup-${K}.json`,A.click(),URL.revokeObjectURL(T)},[s,u]=N.useState(""),[d,y]=N.useState(null),[v,m]=N.useState(null),[x,k]=N.useState(null),[j,L]=N.useState(null),f=Ie.useRef(null),[c,p]=N.useState("all"),g=h=>{f.current&&clearTimeout(f.current),L(h),f.current=setTimeout(()=>L(null),2200)},S=e.filter(h=>h.cardType==="type1"||h.cardType==="type5"||h.cardType==="type6"),C=[...e].sort((h,b)=>h.nextReview-b.nextReview).filter(h=>{if(s.trim()){const b=s.toLowerCase();if(!h.german.toLowerCase().includes(b)&&!h.translation.toLowerCase().includes(b)&&!(h.note||"").toLowerCase().includes(b))return!1}return c==="broken"?(h.cardType==="type1"||h.cardType==="type5"||h.cardType==="type6")&&!h.imageUrl:c==="ok"?(h.cardType==="type1"||h.cardType==="type5"||h.cardType==="type6")&&!!h.imageUrl:!0}),E=S.filter(h=>!h.imageUrl).length;return a.jsxs("div",{children:[a.jsxs("div",{className:"list-header",children:[a.jsx("div",{className:"list-title",children:"Todas las tarjetas"}),a.jsxs("div",{className:"list-header-right",children:[a.jsxs("div",{className:"list-count",children:[e.length," total"]}),e.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"export-btn",onClick:o,title:"Exportar backup JSON",children:"↓ Backup"}),a.jsx("button",{className:"delete-all-btn",onClick:()=>i(!0),children:"Borrar todo"})]})]})]}),a.jsxs("div",{className:"list-search-wrap",children:[a.jsx("input",{className:"list-search",value:s,onChange:h=>u(h.target.value),placeholder:"Buscar por palabra, traducción o nota…"}),s&&a.jsx("button",{className:"list-search-clear",onClick:()=>u(""),children:"×"})]}),a.jsxs("div",{className:"list-filter-row",children:[a.jsx("button",{className:`list-filter-btn ${c==="all"?"active":""}`,onClick:()=>p("all"),children:"Todas"}),a.jsxs("button",{className:`list-filter-btn ${c==="broken"?"active":""}`,onClick:()=>p("broken"),children:["Sin imagen ",E>0&&`(${E})`]}),a.jsx("button",{className:`list-filter-btn ${c==="ok"?"active":""}`,onClick:()=>p("ok"),children:"Con imagen"})]}),l&&a.jsx("div",{className:"confirm-overlay",onClick:()=>i(!1),children:a.jsxs("div",{className:"confirm-dialog",onClick:h=>h.stopPropagation(),children:[a.jsx("div",{className:"confirm-title",children:"¿Borrar todo el mazo?"}),a.jsxs("div",{className:"confirm-body",children:["Se eliminarán ",a.jsxs("strong",{children:[e.length," tarjeta",e.length!==1?"s":""]})," y todo su progreso. Esta acción no se puede deshacer."]}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"confirm-cancel",onClick:()=>i(!1),children:"Cancelar"}),a.jsx("button",{className:"confirm-ok",onClick:()=>{n(),i(!1)},children:"Sí, borrar todo"})]})]})}),d&&a.jsx(hp,{card:d,onSave:h=>{r(h),y(null),g(`✓ "${h.german}" actualizado`)},onClose:()=>y(null)}),v&&a.jsx(pp,{card:v,onSave:h=>{r(h),m(h),g("✓ Imagen actualizada")},onClose:()=>m(null)}),x&&a.jsx(mp,{card:x,onClose:()=>k(null)}),a.jsxs("div",{className:"card-list",children:[C.length===0&&a.jsx("div",{className:"list-empty",children:s?`Sin resultados para "${s}"`:"Sin tarjetas en este filtro"}),C.map(h=>{const b=h.nextReview<=Date.now(),T=h.cardType==="type1"||h.cardType==="type5"||h.cardType==="type6";return a.jsxs("div",{className:"list-item",children:[T?a.jsx(gp,{card:h,onClick:()=>m(h)}):a.jsx("div",{style:{width:"28px"}}),a.jsxs("div",{className:"li-main",children:[a.jsx("div",{className:"li-german",children:h.german}),a.jsx("div",{className:"li-trans",children:h.translation}),h.note&&a.jsx("div",{className:"li-note",children:h.note})]}),a.jsx("div",{className:`li-next ${b?"due":""}`,children:Gf(h.nextReview)}),a.jsx("button",{className:"preview-card-btn",onClick:()=>k(h),title:"Vista previa",children:a.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:[a.jsx("path",{d:"M6.5 1C3.5 1 1 4 1 5C1 6 3.5 9 6.5 9C9.5 9 12 6 12 5C12 4 9.5 1 6.5 1Z",stroke:"currentColor",strokeWidth:"1.1",fill:"none"}),a.jsx("circle",{cx:"6.5",cy:"5",r:"1.5",stroke:"currentColor",strokeWidth:"1.1",fill:"none"})]})}),a.jsx("button",{className:"edit-btn",onClick:()=>y(h),children:"✎"}),a.jsx("button",{className:"delete-btn",onClick:()=>t(h.id),children:"×"})]},h.id)})]})]})}const yp=[{code:"de",label:"Deutsch",flag:a.jsxs("svg",{viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",style:{width:28,flexShrink:0},children:[a.jsx("rect",{width:"28",height:"6.33",y:"0",fill:"#000"}),a.jsx("rect",{width:"28",height:"6.34",y:"6.33",fill:"#D00"}),a.jsx("rect",{width:"28",height:"6.33",y:"12.67",fill:"#FFCE00"})]}),accent:"#FFCE00"},{code:"fr",label:"Français",flag:a.jsxs("svg",{viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",style:{width:28,flexShrink:0},children:[a.jsx("rect",{width:"9.33",height:"19",x:"0",fill:"#002395"}),a.jsx("rect",{width:"9.34",height:"19",x:"9.33",fill:"#fff"}),a.jsx("rect",{width:"9.33",height:"19",x:"18.67",fill:"#ED2939"})]}),accent:"#ED2939"}];function xp({onAuth:e}){const[t,n]=N.useState(""),[r,l]=N.useState(""),[i,o]=N.useState(null),[s,u]=N.useState(!1),d=yp.find(v=>v.code==="de");async function y(v){v.preventDefault(),o(null),u(!0);try{const m=await pr("/auth/login",{method:"POST",body:JSON.stringify({username:t,password:r})});m.token&&Xf(m.token),e(m.username,m.language||"de")}catch(m){o(m.message)}finally{u(!1)}}return a.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#111111"},children:[a.jsxs("style",{children:[Yi,wc]}),a.jsxs("div",{style:{width:"100%",maxWidth:380,padding:"2.5rem 2rem",background:"#1a1a1a",borderRadius:12,border:"1px solid #2a2a2a"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:"2rem"},children:[d.flag,a.jsxs("span",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.4rem",color:"#f0ece0"},children:["Sprachen",a.jsx("span",{style:{color:d.accent},children:"Karten"})]})]}),a.jsxs("form",{onSubmit:y,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsx("input",{type:"text",placeholder:"Usuario",value:t,autoComplete:"username",onChange:v=>n(v.target.value),required:!0,style:{padding:"0.7rem 1rem",borderRadius:6,border:"1px solid #333",background:"#222",color:"#f0ece0",fontFamily:"'DM Mono', monospace",fontSize:"0.9rem",outline:"none"}}),a.jsx("input",{type:"password",placeholder:"Contraseña",value:r,autoComplete:"current-password",onChange:v=>l(v.target.value),required:!0,style:{padding:"0.7rem 1rem",borderRadius:6,border:"1px solid #333",background:"#222",color:"#f0ece0",fontFamily:"'DM Mono', monospace",fontSize:"0.9rem",outline:"none"}}),i&&a.jsx("p",{style:{color:"#e05c5c",fontSize:"0.8rem",margin:0},children:i}),a.jsx("button",{type:"submit",disabled:s,style:{padding:"0.75rem",borderRadius:6,border:"none",cursor:"pointer",background:d.accent,color:"#111",fontFamily:"'DM Mono', monospace",fontSize:"0.9rem",fontWeight:600,opacity:s?.6:1},children:s?"…":"Entrar"})]})]})]})}function wp(){const[e,t]=N.useState(null),[n,r]=N.useState("de"),[l,i]=N.useState([]),[o,s]=N.useState(!1),[u,d]=N.useState("study"),[y,v]=N.useState(!1);N.useEffect(()=>{if(!xc()){t(!1);return}(async()=>{try{const h=await pr("/auth/me"),b=await ls();t(h.username),r(h.language||"de"),i(b),s(!0)}catch{rs(),t(!1)}})()},[]),N.useEffect(()=>{if(!e||!o)return;const h=setTimeout(()=>{is(l).catch(()=>{})},800);return()=>clearTimeout(h)},[l,e,o]);const m=N.useRef(l);N.useEffect(()=>{m.current=l},[l]);const x=N.useRef(e);N.useEffect(()=>{x.current=e},[e]);const k=N.useRef(o);N.useEffect(()=>{k.current=o},[o]),N.useEffect(()=>{const h=()=>{if(!x.current||!k.current)return;const b=m.current,T=b.length===0?"?allowEmpty=true":"";fetch(`${fr}/cards${T}`,{method:"PUT",headers:{"Content-Type":"application/json",...Tl()},body:JSON.stringify(b),keepalive:!0})};return window.addEventListener("beforeunload",h),()=>window.removeEventListener("beforeunload",h)},[]);async function j(){o&&await is(l).catch(()=>{}),rs(),s(!1),t(!1),i([])}async function L(h,b){s(!1),t(h),r(b||"de");try{const T=await ls();i(T),s(!0)}catch{i([])}}const f=N.useCallback(h=>{const b={id:Date.now().toString(),cardType:h.cardType||"type1",german:h.german,translation:h.translation,note:h.note||"",example:h.example||"",exampleTranslation:h.exampleTranslation||"",imageUrl:h.imageUrl||null,audioUrl:h.audioUrl||null,repetitions:0,easiness:2.5,interval:0,nextReview:Date.now(),lastGrade:null};i(T=>[...T,b])},[]),c=N.useCallback((h,b)=>{i(T=>T.map(A=>A.id===h?{...A,...b}:A))},[]),p=N.useCallback(h=>{i(b=>b.filter(T=>T.id!==h))},[]),g=N.useCallback(()=>{i([])},[]),S=N.useCallback(h=>{i(b=>b.map(T=>T.id===h.id?h:T))},[]),C=N.useCallback((h,b=!1)=>{const T=Date.now(),A=h.map((K,Ce)=>({id:(T+Ce).toString(),german:K.german.trim(),translation:K.translation.trim(),note:(K.note||"").trim(),cardType:K.cardType||"type1",imageUrl:K.imageUrl||null,audioUrl:K.audioUrl||null,example:K.example||"",exampleTranslation:K.exampleTranslation||"",repetitions:0,easiness:2.5,interval:0,nextReview:T,lastGrade:null}));i(K=>b?A:[...K,...A])},[]);if(e===null)return a.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#111111",color:"#888",fontFamily:"'DM Mono', monospace"},children:[a.jsx("style",{children:Yi}),"Cargando…"]});if(e===!1)return a.jsx(xp,{onAuth:L});const E=[{id:"study",label:"Repasar"},{id:"add",label:"+ Agregar"},{id:"list",label:"Lista"},{id:"stats",label:"Estado"}];return a.jsxs(a.Fragment,{children:[a.jsxs("style",{children:[Yi,wc]}),a.jsx("div",{className:"noise"}),a.jsxs("div",{className:"app",children:[a.jsxs("header",{className:"header",children:[a.jsxs("div",{className:"logo",children:[n==="fr"?a.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{width:"9.33",height:"19",x:"0",fill:"#002395"}),a.jsx("rect",{width:"9.34",height:"19",x:"9.33",fill:"#fff"}),a.jsx("rect",{width:"9.33",height:"19",x:"18.67",fill:"#ED2939"})]}):a.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{width:"28",height:"6.33",y:"0",fill:"#000"}),a.jsx("rect",{width:"28",height:"6.34",y:"6.33",fill:"#D00"}),a.jsx("rect",{width:"28",height:"6.33",y:"12.67",fill:"#FFCE00"})]}),a.jsx("div",{className:"logo-text",children:n==="fr"?a.jsxs(a.Fragment,{children:["Français",a.jsx("span",{children:"Cartes"})]}):a.jsxs(a.Fragment,{children:["Deutsch",a.jsx("span",{children:"Karten"})]})})]}),a.jsxs("nav",{className:"nav",children:[E.map(h=>a.jsx("button",{className:`nav-btn ${u===h.id?"active":""}`,onClick:()=>d(h.id),children:h.label},h.id)),a.jsxs("button",{className:"nav-btn",onClick:j,title:`Sesión: ${e}`,style:{marginLeft:"auto",opacity:.6},children:["↩ ",e]})]}),a.jsx("button",{className:"hamburger-btn",onClick:()=>v(h=>!h),"aria-label":"Menú","aria-expanded":y,children:y?"✕":"☰"}),y&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"menu-backdrop",onClick:()=>v(!1)}),a.jsxs("div",{className:"menu-panel",children:[E.map(h=>a.jsx("button",{className:`menu-item ${u===h.id?"active":""}`,onClick:()=>{d(h.id),v(!1)},children:h.label},h.id)),a.jsxs("button",{className:"menu-item menu-logout",onClick:()=>{v(!1),j()},children:["↩ ",e]})]})]})]}),u==="study"&&a.jsx(cp,{cards:l,onGrade:c,onUpdateCards:i}),u==="add"&&a.jsx(dp,{onAdd:h=>{f(h),d("study")},onBulkAdd:(h,b)=>{C(h,b),d("list")}}),u==="list"&&a.jsx(vp,{cards:l,onDelete:p,onDeleteAll:g,onEdit:S}),u==="stats"&&a.jsx(fp,{cards:l})]})]})}yc(document.getElementById("root")).render(a.jsx(N.StrictMode,{children:a.jsx(wp,{})}));
