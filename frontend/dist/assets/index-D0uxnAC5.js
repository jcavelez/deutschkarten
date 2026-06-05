(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oa={exports:{}},pl={},sa={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Sc=Symbol.for("react.portal"),jc=Symbol.for("react.fragment"),Nc=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),Ec=Symbol.for("react.provider"),zc=Symbol.for("react.context"),_c=Symbol.for("react.forward_ref"),Tc=Symbol.for("react.suspense"),Pc=Symbol.for("react.memo"),bc=Symbol.for("react.lazy"),Ko=Symbol.iterator;function Mc(e){return e===null||typeof e!="object"?null:(e=Ko&&e[Ko]||e["@@iterator"],typeof e=="function"?e:null)}var aa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ua=Object.assign,ca={};function xn(e,t,n){this.props=e,this.context=t,this.refs=ca,this.updater=n||aa}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function da(){}da.prototype=xn.prototype;function Gi(e,t,n){this.props=e,this.context=t,this.refs=ca,this.updater=n||aa}var Xi=Gi.prototype=new da;Xi.constructor=Gi;ua(Xi,xn.prototype);Xi.isPureReactComponent=!0;var Yo=Array.isArray,fa=Object.prototype.hasOwnProperty,Zi={current:null},pa={key:!0,ref:!0,__self:!0,__source:!0};function ma(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)fa.call(t,r)&&!pa.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:sr,type:e,key:i,ref:o,props:l,_owner:Zi.current}}function Dc(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Lc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Go=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lc(""+e.key):t.toString(36)}function br(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case sr:case Sc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Pl(o,0):r,Yo(l)?(n="",e!=null&&(n=e.replace(Go,"$&/")+"/"),br(l,t,n,"",function(d){return d})):l!=null&&(Ji(l)&&(l=Dc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Go,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Yo(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Pl(i,a);o+=br(i,t,n,u,l)}else if(u=Mc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Pl(i,a++),o+=br(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function mr(e,t,n){if(e==null)return e;var r=[],l=0;return br(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Rc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Mr={transition:null},Fc={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:Zi};function ha(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!Ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=xn;R.Fragment=jc;R.Profiler=Cc;R.PureComponent=Gi;R.StrictMode=Nc;R.Suspense=Tc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fc;R.act=ha;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ua({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Zi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)fa.call(t,u)&&!pa.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:sr,type:e.type,key:l,ref:i,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:zc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ec,_context:e},e.Consumer=e};R.createElement=ma;R.createFactory=function(e){var t=ma.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:_c,render:e}};R.isValidElement=Ji;R.lazy=function(e){return{$$typeof:bc,_payload:{_status:-1,_result:e},_init:Rc}};R.memo=function(e,t){return{$$typeof:Pc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};R.unstable_act=ha;R.useCallback=function(e,t){return fe.current.useCallback(e,t)};R.useContext=function(e){return fe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};R.useEffect=function(e,t){return fe.current.useEffect(e,t)};R.useId=function(){return fe.current.useId()};R.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return fe.current.useMemo(e,t)};R.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};R.useRef=function(e){return fe.current.useRef(e)};R.useState=function(e){return fe.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return fe.current.useTransition()};R.version="18.3.1";sa.exports=R;var N=sa.exports;const Ie=kc(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=N,Oc=Symbol.for("react.element"),Uc=Symbol.for("react.fragment"),$c=Object.prototype.hasOwnProperty,Ac=Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vc={key:!0,ref:!0,__self:!0,__source:!0};function ga(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)$c.call(t,r)&&!Vc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Oc,type:e,key:i,ref:o,props:l,_owner:Ac.current}}pl.Fragment=Uc;pl.jsx=ga;pl.jsxs=ga;oa.exports=pl;var s=oa.exports,va={exports:{}},je={},ya={exports:{}},xa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,b){var D=z.length;z.push(b);e:for(;0<D;){var B=D-1>>>1,X=z[B];if(0<l(X,b))z[B]=b,z[D]=X,D=B;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var b=z[0],D=z.pop();if(D!==b){z[0]=D;e:for(var B=0,X=z.length,Et=X>>>1;B<Et;){var Ee=2*(B+1)-1,Ht=z[Ee],Ye=Ee+1,M=z[Ye];if(0>l(Ht,D))Ye<X&&0>l(M,Ht)?(z[B]=M,z[Ye]=D,B=Ye):(z[B]=Ht,z[Ee]=D,B=Ee);else if(Ye<X&&0>l(M,D))z[B]=M,z[Ye]=D,B=Ye;else break e}}return b}function l(z,b){var D=z.sortIndex-b.sortIndex;return D!==0?D:z.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],d=[],y=1,v=null,m=3,x=!1,k=!1,j=!1,L=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var b=n(d);b!==null;){if(b.callback===null)r(d);else if(b.startTime<=z)r(d),b.sortIndex=b.expirationTime,t(u,b);else break;b=n(d)}}function g(z){if(j=!1,p(z),!k)if(n(u)!==null)k=!0,Bt(S);else{var b=n(d);b!==null&&Wt(g,b.startTime-z)}}function S(z,b){k=!1,j&&(j=!1,f(h),h=-1),x=!0;var D=m;try{for(p(b),v=n(u);v!==null&&(!(v.expirationTime>b)||z&&!A());){var B=v.callback;if(typeof B=="function"){v.callback=null,m=v.priorityLevel;var X=B(v.expirationTime<=b);b=e.unstable_now(),typeof X=="function"?v.callback=X:v===n(u)&&r(u),p(b)}else r(u);v=n(u)}if(v!==null)var Et=!0;else{var Ee=n(d);Ee!==null&&Wt(g,Ee.startTime-b),Et=!1}return Et}finally{v=null,m=D,x=!1}}var C=!1,E=null,h=-1,P=5,T=-1;function A(){return!(e.unstable_now()-T<P)}function K(){if(E!==null){var z=e.unstable_now();T=z;var b=!0;try{b=E(!0,z)}finally{b?Ce():(C=!1,E=null)}}else C=!1}var Ce;if(typeof c=="function")Ce=function(){c(K)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,Vt=At.port2;At.port1.onmessage=K,Ce=function(){Vt.postMessage(null)}}else Ce=function(){L(K,0)};function Bt(z){E=z,C||(C=!0,Ce())}function Wt(z,b){h=L(function(){z(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,Bt(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var D=m;m=b;try{return z()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,b){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=m;m=z;try{return b()}finally{m=D}},e.unstable_scheduleCallback=function(z,b,D){var B=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?B+D:B):D=B,z){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=D+X,z={id:y++,callback:b,priorityLevel:z,startTime:D,expirationTime:X,sortIndex:-1},D>B?(z.sortIndex=D,t(d,z),n(u)===null&&z===n(d)&&(j?(f(h),h=-1):j=!0,Wt(g,D-B))):(z.sortIndex=X,t(u,z),k||x||(k=!0,Bt(S))),z},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(z){var b=m;return function(){var D=m;m=b;try{return z.apply(this,arguments)}finally{m=D}}}})(xa);ya.exports=xa;var Bc=ya.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc=N,Se=Bc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wa=new Set,Wn={};function Ut(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)wa.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=Object.prototype.hasOwnProperty,Hc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xo={},Zo={};function Qc(e){return ni.call(Zo,e)?!0:ni.call(Xo,e)?!1:Hc.test(e)?Zo[e]=!0:(Xo[e]=!0,!1)}function Kc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yc(e,t,n,r){if(t===null||typeof t>"u"||Kc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var qi=/[\-:]([a-z])/g;function eo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qi,eo);le[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qi,eo);le[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qi,eo);le[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function to(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yc(t,n,l,r)&&(n=null),r||l===null?Qc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),no=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),ka=Symbol.for("react.provider"),Sa=Symbol.for("react.context"),ro=Symbol.for("react.forward_ref"),li=Symbol.for("react.suspense"),ii=Symbol.for("react.suspense_list"),lo=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),ja=Symbol.for("react.offscreen"),Jo=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=Jo&&e[Jo]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,bl;function bn(e){if(bl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bl=t&&t[1]||""}return`
`+bl+e}var Ml=!1;function Dl(e,t){if(!e||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bn(e):""}function Gc(e){switch(e.tag){case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return bn("Suspense");case 19:return bn("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Kt:return"Portal";case ri:return"Profiler";case no:return"StrictMode";case li:return"Suspense";case ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sa:return(e.displayName||"Context")+".Consumer";case ka:return(e._context.displayName||"Context")+".Provider";case ro:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lo:return t=e.displayName||null,t!==null?t:oi(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return oi(e(t))}catch{}}return null}function Xc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oi(t);case 8:return t===no?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Na(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zc(e){var t=Na(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Zc(e))}function Ca(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Na(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function si(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ea(e,t){t=t.checked,t!=null&&to(e,"checked",t,!1)}function ai(e,t){Ea(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ui(e,t.type,n):t.hasOwnProperty("defaultValue")&&ui(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function es(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ui(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ci(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ts(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Mn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function za(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ns(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _a(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_a(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Ta=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jc=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){Jc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Pa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function ba(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Pa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var qc=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fi(e,t){if(t){if(qc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,sn=null,an=null;function rs(e){if(e=cr(e)){if(typeof hi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=yl(t),hi(e.stateNode,e.type,t))}}function Ma(e){sn?an?an.push(e):an=[e]:sn=e}function Da(){if(sn){var e=sn,t=an;if(an=sn=null,rs(e),t)for(e=0;e<t.length;e++)rs(t[e])}}function La(e,t){return e(t)}function Ra(){}var Ll=!1;function Fa(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return La(e,t,n)}finally{Ll=!1,(sn!==null||an!==null)&&(Ra(),Da())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var gi=!1;if(et)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){gi=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{gi=!1}function ed(e,t,n,r,l,i,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var Fn=!1,Wr=null,Hr=!1,vi=null,td={onError:function(e){Fn=!0,Wr=e}};function nd(e,t,n,r,l,i,o,a,u){Fn=!1,Wr=null,ed.apply(td,arguments)}function rd(e,t,n,r,l,i,o,a,u){if(nd.apply(this,arguments),Fn){if(Fn){var d=Wr;Fn=!1,Wr=null}else throw Error(w(198));Hr||(Hr=!0,vi=d)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ia(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ls(e){if($t(e)!==e)throw Error(w(188))}function ld(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ls(l),e;if(i===r)return ls(l),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Oa(e){return e=ld(e),e!==null?Ua(e):null}function Ua(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ua(e);if(t!==null)return t;e=e.sibling}return null}var $a=Se.unstable_scheduleCallback,is=Se.unstable_cancelCallback,id=Se.unstable_shouldYield,od=Se.unstable_requestPaint,G=Se.unstable_now,sd=Se.unstable_getCurrentPriorityLevel,oo=Se.unstable_ImmediatePriority,Aa=Se.unstable_UserBlockingPriority,Qr=Se.unstable_NormalPriority,ad=Se.unstable_LowPriority,Va=Se.unstable_IdlePriority,ml=null,Qe=null;function ud(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:fd,cd=Math.log,dd=Math.LN2;function fd(e){return e>>>=0,e===0?32:31-(cd(e)/dd|0)|0}var yr=64,xr=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=Dn(a):(i&=o,i!==0&&(r=Dn(i)))}else o=n&~l,o!==0?r=Dn(o):i!==0&&(r=Dn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),l=1<<n,r|=e[n],t&=~l;return r}function pd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function md(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ue(i),a=1<<o,u=l[o];u===-1?(!(a&n)||a&r)&&(l[o]=pd(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ba(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function hd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ue(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function so(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Wa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ha,ao,Qa,Ka,Ya,xi=!1,wr=[],pt=null,mt=null,ht=null,Kn=new Map,Yn=new Map,ut=[],gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function os(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function Cn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=cr(t),t!==null&&ao(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function vd(e,t,n,r,l){switch(t){case"focusin":return pt=Cn(pt,e,t,n,r,l),!0;case"dragenter":return mt=Cn(mt,e,t,n,r,l),!0;case"mouseover":return ht=Cn(ht,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Kn.set(i,Cn(Kn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Yn.set(i,Cn(Yn.get(i)||null,e,t,n,r,l)),!0}return!1}function Ga(e){var t=Tt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Ia(n),t!==null){e.blockedOn=t,Ya(e.priority,function(){Qa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mi=r,n.target.dispatchEvent(r),mi=null}else return t=cr(n),t!==null&&ao(t),e.blockedOn=n,!1;t.shift()}return!0}function ss(e,t,n){Dr(e)&&n.delete(t)}function yd(){xi=!1,pt!==null&&Dr(pt)&&(pt=null),mt!==null&&Dr(mt)&&(mt=null),ht!==null&&Dr(ht)&&(ht=null),Kn.forEach(ss),Yn.forEach(ss)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,xi||(xi=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,yd)))}function Gn(e){function t(l){return En(l,e)}if(0<wr.length){En(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&En(pt,e),mt!==null&&En(mt,e),ht!==null&&En(ht,e),Kn.forEach(t),Yn.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)Ga(n),n.blockedOn===null&&ut.shift()}var un=it.ReactCurrentBatchConfig,Yr=!0;function xd(e,t,n,r){var l=I,i=un.transition;un.transition=null;try{I=1,uo(e,t,n,r)}finally{I=l,un.transition=i}}function wd(e,t,n,r){var l=I,i=un.transition;un.transition=null;try{I=4,uo(e,t,n,r)}finally{I=l,un.transition=i}}function uo(e,t,n,r){if(Yr){var l=wi(e,t,n,r);if(l===null)Hl(e,t,r,Gr,n),os(e,r);else if(vd(l,e,t,n,r))r.stopPropagation();else if(os(e,r),t&4&&-1<gd.indexOf(e)){for(;l!==null;){var i=cr(l);if(i!==null&&Ha(i),i=wi(e,t,n,r),i===null&&Hl(e,t,r,Gr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var Gr=null;function wi(e,t,n,r){if(Gr=null,e=io(r),e=Tt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ia(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function Xa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sd()){case oo:return 1;case Aa:return 4;case Qr:case ad:return 16;case Va:return 536870912;default:return 16}default:return 16}}var dt=null,co=null,Lr=null;function Za(){if(Lr)return Lr;var e,t=co,n=t.length,r,l="value"in dt?dt.value:dt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Lr=l.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function as(){return!1}function Ne(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?kr:as,this.isPropagationStopped=as,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Ne(wn),ur=Q({},wn,{view:0,detail:0}),kd=Ne(ur),Fl,Il,zn,hl=Q({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Fl=e.screenX-zn.screenX,Il=e.screenY-zn.screenY):Il=Fl=0,zn=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),us=Ne(hl),Sd=Q({},hl,{dataTransfer:0}),jd=Ne(Sd),Nd=Q({},ur,{relatedTarget:0}),Ol=Ne(Nd),Cd=Q({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ed=Ne(Cd),zd=Q({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_d=Ne(zd),Td=Q({},wn,{data:0}),cs=Ne(Td),Pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Md[e])?!!t[e]:!1}function po(){return Dd}var Ld=Q({},ur,{key:function(e){if(e.key){var t=Pd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rd=Ne(Ld),Fd=Q({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ds=Ne(Fd),Id=Q({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),Od=Ne(Id),Ud=Q({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=Ne(Ud),Ad=Q({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vd=Ne(Ad),Bd=[9,13,27,32],mo=et&&"CompositionEvent"in window,In=null;et&&"documentMode"in document&&(In=document.documentMode);var Wd=et&&"TextEvent"in window&&!In,Ja=et&&(!mo||In&&8<In&&11>=In),fs=" ",ps=!1;function qa(e,t){switch(e){case"keyup":return Bd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function Hd(e,t){switch(e){case"compositionend":return eu(t);case"keypress":return t.which!==32?null:(ps=!0,fs);case"textInput":return e=t.data,e===fs&&ps?null:e;default:return null}}function Qd(e,t){if(Gt)return e==="compositionend"||!mo&&qa(e,t)?(e=Za(),Lr=co=dt=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ja&&t.locale!=="ko"?null:t.data;default:return null}}var Kd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kd[e.type]:t==="textarea"}function tu(e,t,n,r){Ma(r),t=Xr(t,"onChange"),0<t.length&&(n=new fo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Xn=null;function Yd(e){fu(e,0)}function gl(e){var t=Jt(e);if(Ca(t))return e}function Gd(e,t){if(e==="change")return t}var nu=!1;if(et){var Ul;if(et){var $l="oninput"in document;if(!$l){var hs=document.createElement("div");hs.setAttribute("oninput","return;"),$l=typeof hs.oninput=="function"}Ul=$l}else Ul=!1;nu=Ul&&(!document.documentMode||9<document.documentMode)}function gs(){On&&(On.detachEvent("onpropertychange",ru),Xn=On=null)}function ru(e){if(e.propertyName==="value"&&gl(Xn)){var t=[];tu(t,Xn,e,io(e)),Fa(Yd,t)}}function Xd(e,t,n){e==="focusin"?(gs(),On=t,Xn=n,On.attachEvent("onpropertychange",ru)):e==="focusout"&&gs()}function Zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Xn)}function Jd(e,t){if(e==="click")return gl(t)}function qd(e,t){if(e==="input"||e==="change")return gl(t)}function ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:ef;function Zn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ni.call(t,l)||!Ae(e[l],t[l]))return!1}return!0}function vs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ys(e,t){var n=vs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vs(n)}}function lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function iu(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tf(e){var t=iu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lu(n.ownerDocument.documentElement,n)){if(r!==null&&ho(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ys(n,i);var o=ys(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nf=et&&"documentMode"in document&&11>=document.documentMode,Xt=null,ki=null,Un=null,Si=!1;function xs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Si||Xt==null||Xt!==Br(r)||(r=Xt,"selectionStart"in r&&ho(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&Zn(Un,r)||(Un=r,r=Xr(ki,"onSelect"),0<r.length&&(t=new fo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zt={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Al={},ou={};et&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function vl(e){if(Al[e])return Al[e];if(!Zt[e])return e;var t=Zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ou)return Al[e]=t[n];return e}var su=vl("animationend"),au=vl("animationiteration"),uu=vl("animationstart"),cu=vl("transitionend"),du=new Map,ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){du.set(e,t),Ut(t,[e])}for(var Vl=0;Vl<ws.length;Vl++){var Bl=ws[Vl],rf=Bl.toLowerCase(),lf=Bl[0].toUpperCase()+Bl.slice(1);jt(rf,"on"+lf)}jt(su,"onAnimationEnd");jt(au,"onAnimationIteration");jt(uu,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(cu,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),of=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function ks(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rd(r,t,void 0,e),e.currentTarget=null}function fu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;ks(l,a,d),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;ks(l,a,d),i=u}}}if(Hr)throw e=vi,Hr=!1,vi=null,e}function U(e,t){var n=t[zi];n===void 0&&(n=t[zi]=new Set);var r=e+"__bubble";n.has(r)||(pu(t,e,2,!1),n.add(r))}function Wl(e,t,n){var r=0;t&&(r|=4),pu(n,e,r,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[jr]){e[jr]=!0,wa.forEach(function(n){n!=="selectionchange"&&(of.has(n)||Wl(n,!1,e),Wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,Wl("selectionchange",!1,t))}}function pu(e,t,n,r){switch(Xa(t)){case 1:var l=xd;break;case 4:l=wd;break;default:l=uo}n=l.bind(null,t,n,e),l=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Hl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Tt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Fa(function(){var d=i,y=io(n),v=[];e:{var m=du.get(e);if(m!==void 0){var x=fo,k=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":x=Rd;break;case"focusin":k="focus",x=Ol;break;case"focusout":k="blur",x=Ol;break;case"beforeblur":case"afterblur":x=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Od;break;case su:case au:case uu:x=Ed;break;case cu:x=$d;break;case"scroll":x=kd;break;case"wheel":x=Vd;break;case"copy":case"cut":case"paste":x=_d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ds}var j=(t&4)!==0,L=!j&&e==="scroll",f=j?m!==null?m+"Capture":null:m;j=[];for(var c=d,p;c!==null;){p=c;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=Qn(c,f),g!=null&&j.push(qn(c,g,p)))),L)break;c=c.return}0<j.length&&(m=new x(m,k,null,n,y),v.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==mi&&(k=n.relatedTarget||n.fromElement)&&(Tt(k)||k[tt]))break e;if((x||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=d,k=k?Tt(k):null,k!==null&&(L=$t(k),k!==L||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=d),x!==k)){if(j=us,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(j=ds,g="onPointerLeave",f="onPointerEnter",c="pointer"),L=x==null?m:Jt(x),p=k==null?m:Jt(k),m=new j(g,c+"leave",x,n,y),m.target=L,m.relatedTarget=p,g=null,Tt(y)===d&&(j=new j(f,c+"enter",k,n,y),j.target=p,j.relatedTarget=L,g=j),L=g,x&&k)t:{for(j=x,f=k,c=0,p=j;p;p=Qt(p))c++;for(p=0,g=f;g;g=Qt(g))p++;for(;0<c-p;)j=Qt(j),c--;for(;0<p-c;)f=Qt(f),p--;for(;c--;){if(j===f||f!==null&&j===f.alternate)break t;j=Qt(j),f=Qt(f)}j=null}else j=null;x!==null&&Ss(v,m,x,j,!1),k!==null&&L!==null&&Ss(v,L,k,j,!0)}}e:{if(m=d?Jt(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var S=Gd;else if(ms(m))if(nu)S=qd;else{S=Zd;var C=Xd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Jd);if(S&&(S=S(e,d))){tu(v,S,n,y);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ui(m,"number",m.value)}switch(C=d?Jt(d):window,e){case"focusin":(ms(C)||C.contentEditable==="true")&&(Xt=C,ki=d,Un=null);break;case"focusout":Un=ki=Xt=null;break;case"mousedown":Si=!0;break;case"contextmenu":case"mouseup":case"dragend":Si=!1,xs(v,n,y);break;case"selectionchange":if(nf)break;case"keydown":case"keyup":xs(v,n,y)}var E;if(mo)e:{switch(e){case"compositionstart":var h="onCompositionStart";break e;case"compositionend":h="onCompositionEnd";break e;case"compositionupdate":h="onCompositionUpdate";break e}h=void 0}else Gt?qa(e,n)&&(h="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(h="onCompositionStart");h&&(Ja&&n.locale!=="ko"&&(Gt||h!=="onCompositionStart"?h==="onCompositionEnd"&&Gt&&(E=Za()):(dt=y,co="value"in dt?dt.value:dt.textContent,Gt=!0)),C=Xr(d,h),0<C.length&&(h=new cs(h,e,null,n,y),v.push({event:h,listeners:C}),E?h.data=E:(E=eu(n),E!==null&&(h.data=E)))),(E=Wd?Hd(e,n):Qd(e,n))&&(d=Xr(d,"onBeforeInput"),0<d.length&&(y=new cs("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:d}),y.data=E))}fu(v,t)})}function qn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Qn(e,n),i!=null&&r.unshift(qn(e,i,l)),i=Qn(e,t),i!=null&&r.push(qn(e,i,l))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ss(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,l?(u=Qn(n,i),u!=null&&o.unshift(qn(n,u,a))):l||(u=Qn(n,i),u!=null&&o.push(qn(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var sf=/\r\n?/g,af=/\u0000|\uFFFD/g;function js(e){return(typeof e=="string"?e:""+e).replace(sf,`
`).replace(af,"")}function Nr(e,t,n){if(t=js(t),js(e)!==t&&n)throw Error(w(425))}function Zr(){}var ji=null,Ni=null;function Ci(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ei=typeof setTimeout=="function"?setTimeout:void 0,uf=typeof clearTimeout=="function"?clearTimeout:void 0,Ns=typeof Promise=="function"?Promise:void 0,cf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ns<"u"?function(e){return Ns.resolve(null).then(e).catch(df)}:Ei;function df(e){setTimeout(function(){throw e})}function Ql(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Gn(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),He="__reactFiber$"+kn,er="__reactProps$"+kn,tt="__reactContainer$"+kn,zi="__reactEvents$"+kn,ff="__reactListeners$"+kn,pf="__reactHandles$"+kn;function Tt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cs(e);e!==null;){if(n=e[He])return n;e=Cs(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[He]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function yl(e){return e[er]||null}var _i=[],qt=-1;function Nt(e){return{current:e}}function $(e){0>qt||(e.current=_i[qt],_i[qt]=null,qt--)}function O(e,t){qt++,_i[qt]=e.current,e.current=t}var St={},ue=Nt(St),ge=Nt(!1),Lt=St;function pn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function Jr(){$(ge),$(ue)}function Es(e,t,n){if(ue.current!==St)throw Error(w(168));O(ue,t),O(ge,n)}function mu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,Xc(e)||"Unknown",l));return Q({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Lt=ue.current,O(ue,e),O(ge,ge.current),!0}function zs(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=mu(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,$(ge),$(ue),O(ue,e)):$(ge),O(ge,n)}var Xe=null,xl=!1,Kl=!1;function hu(e){Xe===null?Xe=[e]:Xe.push(e)}function mf(e){xl=!0,hu(e)}function Ct(){if(!Kl&&Xe!==null){Kl=!0;var e=0,t=I;try{var n=Xe;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,xl=!1}catch(l){throw Xe!==null&&(Xe=Xe.slice(e+1)),$a(oo,Ct),l}finally{I=t,Kl=!1}}return null}var en=[],tn=0,el=null,tl=0,ze=[],_e=0,Rt=null,Ze=1,Je="";function zt(e,t){en[tn++]=tl,en[tn++]=el,el=e,tl=t}function gu(e,t,n){ze[_e++]=Ze,ze[_e++]=Je,ze[_e++]=Rt,Rt=e;var r=Ze;e=Je;var l=32-Ue(r)-1;r&=~(1<<l),n+=1;var i=32-Ue(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ze=1<<32-Ue(t)+l|n<<l|r,Je=i+e}else Ze=1<<i|n<<l|r,Je=e}function go(e){e.return!==null&&(zt(e,1),gu(e,1,0))}function vo(e){for(;e===el;)el=en[--tn],en[tn]=null,tl=en[--tn],en[tn]=null;for(;e===Rt;)Rt=ze[--_e],ze[_e]=null,Je=ze[--_e],ze[_e]=null,Ze=ze[--_e],ze[_e]=null}var ke=null,we=null,V=!1,Fe=null;function vu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _s(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rt!==null?{id:Ze,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pi(e){if(V){var t=we;if(t){var n=t;if(!_s(e,t)){if(Ti(e))throw Error(w(418));t=gt(n.nextSibling);var r=ke;t&&_s(e,t)?vu(r,n):(e.flags=e.flags&-4097|2,V=!1,ke=e)}}else{if(Ti(e))throw Error(w(418));e.flags=e.flags&-4097|2,V=!1,ke=e}}}function Ts(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Cr(e){if(e!==ke)return!1;if(!V)return Ts(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ci(e.type,e.memoizedProps)),t&&(t=we)){if(Ti(e))throw yu(),Error(w(418));for(;t;)vu(e,t),t=gt(t.nextSibling)}if(Ts(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?gt(e.stateNode.nextSibling):null;return!0}function yu(){for(var e=we;e;)e=gt(e.nextSibling)}function mn(){we=ke=null,V=!1}function yo(e){Fe===null?Fe=[e]:Fe.push(e)}var hf=it.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Er(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ps(e){var t=e._init;return t(e._payload)}function xu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=wt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,g){return c===null||c.tag!==6?(c=ei(p,f.mode,g),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,g){var S=p.type;return S===Yt?y(f,c,p.props.children,g,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===st&&Ps(S)===c.type)?(g=l(c,p.props),g.ref=_n(f,c,p),g.return=f,g):(g=Vr(p.type,p.key,p.props,null,f.mode,g),g.ref=_n(f,c,p),g.return=f,g)}function d(f,c,p,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ti(p,f.mode,g),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function y(f,c,p,g,S){return c===null||c.tag!==7?(c=Dt(p,f.mode,g,S),c.return=f,c):(c=l(c,p),c.return=f,c)}function v(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ei(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case hr:return p=Vr(c.type,c.key,c.props,null,f.mode,p),p.ref=_n(f,null,c),p.return=f,p;case Kt:return c=ti(c,f.mode,p),c.return=f,c;case st:var g=c._init;return v(f,g(c._payload),p)}if(Mn(c)||jn(c))return c=Dt(c,f.mode,p,null),c.return=f,c;Er(f,c)}return null}function m(f,c,p,g){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(f,c,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===S?u(f,c,p,g):null;case Kt:return p.key===S?d(f,c,p,g):null;case st:return S=p._init,m(f,c,S(p._payload),g)}if(Mn(p)||jn(p))return S!==null?null:y(f,c,p,g,null);Er(f,p)}return null}function x(f,c,p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,a(c,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hr:return f=f.get(g.key===null?p:g.key)||null,u(c,f,g,S);case Kt:return f=f.get(g.key===null?p:g.key)||null,d(c,f,g,S);case st:var C=g._init;return x(f,c,p,C(g._payload),S)}if(Mn(g)||jn(g))return f=f.get(p)||null,y(c,f,g,S,null);Er(c,g)}return null}function k(f,c,p,g){for(var S=null,C=null,E=c,h=c=0,P=null;E!==null&&h<p.length;h++){E.index>h?(P=E,E=null):P=E.sibling;var T=m(f,E,p[h],g);if(T===null){E===null&&(E=P);break}e&&E&&T.alternate===null&&t(f,E),c=i(T,c,h),C===null?S=T:C.sibling=T,C=T,E=P}if(h===p.length)return n(f,E),V&&zt(f,h),S;if(E===null){for(;h<p.length;h++)E=v(f,p[h],g),E!==null&&(c=i(E,c,h),C===null?S=E:C.sibling=E,C=E);return V&&zt(f,h),S}for(E=r(f,E);h<p.length;h++)P=x(E,f,h,p[h],g),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?h:P.key),c=i(P,c,h),C===null?S=P:C.sibling=P,C=P);return e&&E.forEach(function(A){return t(f,A)}),V&&zt(f,h),S}function j(f,c,p,g){var S=jn(p);if(typeof S!="function")throw Error(w(150));if(p=S.call(p),p==null)throw Error(w(151));for(var C=S=null,E=c,h=c=0,P=null,T=p.next();E!==null&&!T.done;h++,T=p.next()){E.index>h?(P=E,E=null):P=E.sibling;var A=m(f,E,T.value,g);if(A===null){E===null&&(E=P);break}e&&E&&A.alternate===null&&t(f,E),c=i(A,c,h),C===null?S=A:C.sibling=A,C=A,E=P}if(T.done)return n(f,E),V&&zt(f,h),S;if(E===null){for(;!T.done;h++,T=p.next())T=v(f,T.value,g),T!==null&&(c=i(T,c,h),C===null?S=T:C.sibling=T,C=T);return V&&zt(f,h),S}for(E=r(f,E);!T.done;h++,T=p.next())T=x(E,f,h,T.value,g),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?h:T.key),c=i(T,c,h),C===null?S=T:C.sibling=T,C=T);return e&&E.forEach(function(K){return t(f,K)}),V&&zt(f,h),S}function L(f,c,p,g){if(typeof p=="object"&&p!==null&&p.type===Yt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var S=p.key,C=c;C!==null;){if(C.key===S){if(S=p.type,S===Yt){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===st&&Ps(S)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=_n(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Yt?(c=Dt(p.props.children,f.mode,g,p.key),c.return=f,f=c):(g=Vr(p.type,p.key,p.props,null,f.mode,g),g.ref=_n(f,c,p),g.return=f,f=g)}return o(f);case Kt:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ti(p,f.mode,g),c.return=f,f=c}return o(f);case st:return C=p._init,L(f,c,C(p._payload),g)}if(Mn(p))return k(f,c,p,g);if(jn(p))return j(f,c,p,g);Er(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=ei(p,f.mode,g),c.return=f,f=c),o(f)):n(f,c)}return L}var hn=xu(!0),wu=xu(!1),nl=Nt(null),rl=null,nn=null,xo=null;function wo(){xo=nn=rl=null}function ko(e){var t=nl.current;$(nl),e._currentValue=t}function bi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){rl=e,xo=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(xo!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(rl===null)throw Error(w(308));nn=e,rl.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var Pt=null;function So(e){Pt===null?Pt=[e]:Pt.push(e)}function ku(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,So(t)):(n.next=l.next,l.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,nt(e,n)}return l=r.interleaved,l===null?(t.next=t,So(r)):(t.next=l.next,l.next=t),r.interleaved=t,nt(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}function bs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var l=e.updateQueue;at=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==o&&(a===null?y.firstBaseUpdate=d:a.next=d,y.lastBaseUpdate=u))}if(i!==null){var v=l.baseState;o=0,y=d=u=null,a=i;do{var m=a.lane,x=a.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,j=a;switch(m=t,x=n,j.tag){case 1:if(k=j.payload,typeof k=="function"){v=k.call(x,v,m);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,m=typeof k=="function"?k.call(x,v,m):k,m==null)break e;v=Q({},v,m);break e;case 2:at=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(d=y=x,u=v):y=y.next=x,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(y===null&&(u=v),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);It|=o,e.lanes=o,e.memoizedState=v}}function Ms(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var dr={},Ke=Nt(dr),tr=Nt(dr),nr=Nt(dr);function bt(e){if(e===dr)throw Error(w(174));return e}function No(e,t){switch(O(nr,t),O(tr,e),O(Ke,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=di(t,e)}$(Ke),O(Ke,t)}function gn(){$(Ke),$(tr),$(nr)}function ju(e){bt(nr.current);var t=bt(Ke.current),n=di(t,e.type);t!==n&&(O(tr,e),O(Ke,n))}function Co(e){tr.current===e&&($(Ke),$(tr))}var W=Nt(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function Eo(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Ir=it.ReactCurrentDispatcher,Gl=it.ReactCurrentBatchConfig,Ft=0,H=null,J=null,ee=null,ol=!1,$n=!1,rr=0,gf=0;function oe(){throw Error(w(321))}function zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function _o(e,t,n,r,l,i){if(Ft=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ir.current=e===null||e.memoizedState===null?wf:kf,e=n(r,l),$n){i=0;do{if($n=!1,rr=0,25<=i)throw Error(w(301));i+=1,ee=J=null,t.updateQueue=null,Ir.current=Sf,e=n(r,l)}while($n)}if(Ir.current=sl,t=J!==null&&J.next!==null,Ft=0,ee=J=H=null,ol=!1,t)throw Error(w(300));return e}function To(){var e=rr!==0;return rr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Me(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(w(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function lr(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=Me(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,d=i;do{var y=d.lane;if((Ft&y)===y)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=v,o=r):u=u.next=v,H.lanes|=y,It|=y}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=a,Ae(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,It|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zl(e){var t=Me(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ae(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Nu(){}function Cu(e,t){var n=H,r=Me(),l=t(),i=!Ae(r.memoizedState,l);if(i&&(r.memoizedState=l,he=!0),r=r.queue,Po(_u.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,ir(9,zu.bind(null,n,r,l,t),void 0,null),te===null)throw Error(w(349));Ft&30||Eu(n,t,l)}return l}function Eu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zu(e,t,n,r){t.value=n,t.getSnapshot=r,Tu(t)&&Pu(e)}function _u(e,t,n){return n(function(){Tu(t)&&Pu(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function Pu(e){var t=nt(e,1);t!==null&&$e(t,e,1,-1)}function Ds(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=xf.bind(null,H,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bu(){return Me().memoizedState}function Or(e,t,n,r){var l=We();H.flags|=e,l.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var l=Me();r=r===void 0?null:r;var i=void 0;if(J!==null){var o=J.memoizedState;if(i=o.destroy,r!==null&&zo(r,o.deps)){l.memoizedState=ir(t,n,i,r);return}}H.flags|=e,l.memoizedState=ir(1|t,n,i,r)}function Ls(e,t){return Or(8390656,8,e,t)}function Po(e,t){return wl(2048,8,e,t)}function Mu(e,t){return wl(4,2,e,t)}function Du(e,t){return wl(4,4,e,t)}function Lu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ru(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,Lu.bind(null,t,e),n)}function bo(){}function Fu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Iu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ou(e,t,n){return Ft&21?(Ae(n,t)||(n=Ba(),H.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function vf(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{I=n,Gl.transition=r}}function Uu(){return Me().memoizedState}function yf(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$u(e))Au(t,n);else if(n=ku(e,t,n,r),n!==null){var l=de();$e(n,e,r,l),Vu(n,t,r)}}function xf(e,t,n){var r=xt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($u(e))Au(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Ae(a,o)){var u=t.interleaved;u===null?(l.next=l,So(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ku(e,t,l,r),n!==null&&(l=de(),$e(n,e,r,l),Vu(n,t,r))}}function $u(e){var t=e.alternate;return e===H||t!==null&&t===H}function Au(e,t){$n=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}var sl={readContext:be,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},wf={readContext:be,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:Ls,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Or(4194308,4,Lu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){return Or(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Ds,useDebugValue:bo,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Ds(!1),t=e[0];return e=vf.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=We();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));Ft&30||Eu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ls(_u.bind(null,r,i,e),[e]),r.flags|=2048,ir(9,zu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if(V){var n=Je,r=Ze;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kf={readContext:be,useCallback:Fu,useContext:be,useEffect:Po,useImperativeHandle:Ru,useInsertionEffect:Mu,useLayoutEffect:Du,useMemo:Iu,useReducer:Xl,useRef:bu,useState:function(){return Xl(lr)},useDebugValue:bo,useDeferredValue:function(e){var t=Me();return Ou(t,J.memoizedState,e)},useTransition:function(){var e=Xl(lr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Cu,useId:Uu,unstable_isNewReconciler:!1},Sf={readContext:be,useCallback:Fu,useContext:be,useEffect:Po,useImperativeHandle:Ru,useInsertionEffect:Mu,useLayoutEffect:Du,useMemo:Iu,useReducer:Zl,useRef:bu,useState:function(){return Zl(lr)},useDebugValue:bo,useDeferredValue:function(e){var t=Me();return J===null?t.memoizedState=e:Ou(t,J.memoizedState,e)},useTransition:function(){var e=Zl(lr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Cu,useId:Uu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),l=xt(e),i=qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=vt(e,i,l),t!==null&&($e(t,e,l,r),Fr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),l=xt(e),i=qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vt(e,i,l),t!==null&&($e(t,e,l,r),Fr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=xt(e),l=qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=vt(e,l,r),t!==null&&($e(t,e,r,n),Fr(t,e,r))}};function Rs(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(l,i):!0}function Bu(e,t,n){var r=!1,l=St,i=t.contextType;return typeof i=="object"&&i!==null?i=be(i):(l=ve(t)?Lt:ue.current,r=t.contextTypes,i=(r=r!=null)?pn(e,l):St),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Fs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Di(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},jo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=be(i):(i=ve(t)?Lt:ue.current,l.context=pn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Mi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&kl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=Gc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jf=typeof WeakMap=="function"?WeakMap:Map;function Wu(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,Wi=r),Li(e,t)},n}function Hu(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Li(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Is(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=If.bind(null,e,t,n),t.then(e,e))}function Os(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Us(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var Nf=it.ReactCurrentOwner,he=!1;function ce(e,t,n,r){t.child=e===null?wu(t,null,n,r):hn(t,e.child,n,r)}function $s(e,t,n,r,l){n=n.render;var i=t.ref;return cn(t,l),r=_o(e,t,n,r,i,l),n=To(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(V&&n&&go(t),t.flags|=1,ce(e,t,r,l),t.child)}function As(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Uo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Qu(e,t,i,r,l)):(e=Vr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(o,r)&&e.ref===t.ref)return rt(e,t,l)}return t.flags|=1,e=wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Qu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Zn(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,rt(e,t,l)}return Ri(e,t,n,r,l)}function Ku(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(ln,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(ln,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(ln,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(ln,xe),xe|=r;return ce(e,t,l,n),t.child}function Yu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ri(e,t,n,r,l){var i=ve(n)?Lt:ue.current;return i=pn(t,i),cn(t,l),n=_o(e,t,n,r,i,l),r=To(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(V&&r&&go(t),t.flags|=1,ce(e,t,n,l),t.child)}function Vs(e,t,n,r,l){if(ve(n)){var i=!0;qr(t)}else i=!1;if(cn(t,l),t.stateNode===null)Ur(e,t),Bu(t,n,r),Di(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=be(d):(d=ve(n)?Lt:ue.current,d=pn(t,d));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Fs(t,o,r,d),at=!1;var m=t.memoizedState;o.state=m,ll(t,r,o,l),u=t.memoizedState,a!==r||m!==u||ge.current||at?(typeof y=="function"&&(Mi(t,n,y,r),u=t.memoizedState),(a=at||Rs(t,n,a,r,m,u,d))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Su(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Le(t.type,a),o.props=d,v=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=be(u):(u=ve(n)?Lt:ue.current,u=pn(t,u));var x=n.getDerivedStateFromProps;(y=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==v||m!==u)&&Fs(t,o,r,u),at=!1,m=t.memoizedState,o.state=m,ll(t,r,o,l);var k=t.memoizedState;a!==v||m!==k||ge.current||at?(typeof x=="function"&&(Mi(t,n,x,r),k=t.memoizedState),(d=at||Rs(t,n,d,r,m,k,u)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Fi(e,t,n,r,i,l)}function Fi(e,t,n,r,l,i){Yu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&zs(t,n,!1),rt(e,t,i);r=t.stateNode,Nf.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=hn(t,e.child,null,i),t.child=hn(t,null,a,i)):ce(e,t,a,i),t.memoizedState=r.state,l&&zs(t,n,!0),t.child}function Gu(e){var t=e.stateNode;t.pendingContext?Es(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Es(e,t.context,!1),No(e,t.containerInfo)}function Bs(e,t,n,r,l){return mn(),yo(l),t.flags|=256,ce(e,t,n,r),t.child}var Ii={dehydrated:null,treeContext:null,retryLane:0};function Oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xu(e,t,n){var r=t.pendingProps,l=W.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(W,l&1),e===null)return Pi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Nl(o,r,0,null),e=Dt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Oi(n),t.memoizedState=Ii,e):Mo(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Cf(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=wt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=wt(a,i):(i=Dt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Oi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ii,r}return i=e.child,e=i.sibling,r=wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mo(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&yo(r),hn(t,e.child,null,n),e=Mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(w(422))),zr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Nl({mode:"visible",children:r.children},l,0,null),i=Dt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hn(t,e.child,null,o),t.child.memoizedState=Oi(o),t.memoizedState=Ii,i);if(!(t.mode&1))return zr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(w(419)),r=Jl(i,r,void 0),zr(e,t,o,r)}if(a=(o&e.childLanes)!==0,he||a){if(r=te,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,nt(e,l),$e(r,e,l,-1))}return Oo(),r=Jl(Error(w(421))),zr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Of.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=gt(l.nextSibling),ke=t,V=!0,Fe=null,e!==null&&(ze[_e++]=Ze,ze[_e++]=Je,ze[_e++]=Rt,Ze=e.id,Je=e.overflow,Rt=t),t=Mo(t,r.children),t.flags|=4096,t)}function Ws(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bi(e.return,t,n)}function ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Zu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ws(e,n,t);else if(e.tag===19)Ws(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(W,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ql(t,!0,n,null,i);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ef(e,t,n){switch(t.tag){case 3:Gu(t),mn();break;case 5:ju(t);break;case 1:ve(t.type)&&qr(t);break;case 4:No(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(nl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Xu(e,t,n):(O(W,W.current&1),e=rt(e,t,n),e!==null?e.sibling:null);O(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Ku(e,t,n)}return rt(e,t,n)}var Ju,Ui,qu,ec;Ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ui=function(){};qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,bt(Ke.current);var i=null;switch(n){case"input":l=si(e,l),r=si(e,r),i=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":l=ci(e,l),r=ci(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}fi(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Wn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&U("scroll",e),i||a===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};ec=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zf(e,t,n){var r=t.pendingProps;switch(vo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&Jr(),se(t),null;case 3:return r=t.stateNode,gn(),$(ge),$(ue),Eo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fe!==null&&(Ki(Fe),Fe=null))),Ui(e,t),se(t),null;case 5:Co(t);var l=bt(nr.current);if(n=t.type,e!==null&&t.stateNode!=null)qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return se(t),null}if(e=bt(Ke.current),Cr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[He]=t,r[er]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<Ln.length;l++)U(Ln[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":qo(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":ts(r,i),U("invalid",r)}fi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Nr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Nr(r.textContent,a,e),l=["children",""+a]):Wn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":gr(r),es(r,i,!0);break;case"textarea":gr(r),ns(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_a(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[He]=t,e[er]=r,Ju(e,t,!1,!1),t.stateNode=e;e:{switch(o=pi(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<Ln.length;l++)U(Ln[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":qo(e,r),l=si(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),U("invalid",e);break;case"textarea":ts(e,r),l=ci(e,r),U("invalid",e);break;default:l=r}fi(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?ba(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ta(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hn(e,u):typeof u=="number"&&Hn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&U("scroll",e):u!=null&&to(e,i,u,o))}switch(n){case"input":gr(e),es(e,r,!1);break;case"textarea":gr(e),ns(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?on(e,!!r.multiple,i,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)ec(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=bt(nr.current),bt(Ke.current),Cr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(i=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Nr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return se(t),null;case 13:if($(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&we!==null&&t.mode&1&&!(t.flags&128))yu(),mn(),t.flags|=98560,i=!1;else if(i=Cr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[He]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),i=!1}else Fe!==null&&(Ki(Fe),Fe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?q===0&&(q=3):Oo())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return gn(),Ui(e,t),e===null&&Jn(t.stateNode.containerInfo),se(t),null;case 10:return ko(t.type._context),se(t),null;case 17:return ve(t.type)&&Jr(),se(t),null;case 19:if($(W),i=t.memoizedState,i===null)return se(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Tn(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=il(e),o!==null){for(t.flags|=128,Tn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(W,W.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>yn&&(t.flags|=128,r=!0,Tn(i,!1),t.lanes=4194304)}else{if(!r)if(e=il(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!V)return se(t),null}else 2*G()-i.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=W.current,O(W,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Io(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function _f(e,t){switch(vo(t),t.tag){case 1:return ve(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),$(ge),$(ue),Eo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Co(t),null;case 13:if($(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(W),null;case 4:return gn(),null;case 10:return ko(t.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var _r=!1,ae=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,_=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function $i(e,t,n){try{n()}catch(r){Y(e,t,r)}}var Hs=!1;function Pf(e,t){if(ji=Yr,e=iu(),ho(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,d=0,y=0,v=e,m=null;t:for(;;){for(var x;v!==n||l!==0&&v.nodeType!==3||(a=o+l),v!==i||r!==0&&v.nodeType!==3||(u=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(x=v.firstChild)!==null;)m=v,v=x;for(;;){if(v===e)break t;if(m===n&&++d===l&&(a=o),m===i&&++y===r&&(u=o),(x=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ni={focusedElem:e,selectionRange:n},Yr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,L=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:Le(t.type,j),L);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(g){Y(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return k=Hs,Hs=!1,k}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&$i(t,n,i)}l=l.next}while(l!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ai(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function tc(e){var t=e.alternate;t!==null&&(e.alternate=null,tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[er],delete t[zi],delete t[ff],delete t[pf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nc(e){return e.tag===5||e.tag===3||e.tag===4}function Qs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}var ne=null,Re=!1;function ot(e,t,n){for(n=n.child;n!==null;)rc(e,t,n),n=n.sibling}function rc(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:ae||rn(n,t);case 6:var r=ne,l=Re;ne=null,ot(e,t,n),ne=r,Re=l,ne!==null&&(Re?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Re?(e=ne,n=n.stateNode,e.nodeType===8?Ql(e.parentNode,n):e.nodeType===1&&Ql(e,n),Gn(e)):Ql(ne,n.stateNode));break;case 4:r=ne,l=Re,ne=n.stateNode.containerInfo,Re=!0,ot(e,t,n),ne=r,Re=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&$i(n,t,o),l=l.next}while(l!==r)}ot(e,t,n);break;case 1:if(!ae&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,t,a)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,ot(e,t,n),ae=r):ot(e,t,n);break;default:ot(e,t,n)}}function Ks(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tf),t.forEach(function(r){var l=Uf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Re=!1;break e;case 3:ne=a.stateNode.containerInfo,Re=!0;break e;case 4:ne=a.stateNode.containerInfo,Re=!0;break e}a=a.return}if(ne===null)throw Error(w(160));rc(i,o,l),ne=null,Re=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){Y(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lc(t,e),t=t.sibling}function lc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Be(e),r&4){try{An(3,e,e.return),Sl(3,e)}catch(j){Y(e,e.return,j)}try{An(5,e,e.return)}catch(j){Y(e,e.return,j)}}break;case 1:De(t,e),Be(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(De(t,e),Be(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var l=e.stateNode;try{Hn(l,"")}catch(j){Y(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ea(l,i),pi(a,o);var d=pi(a,i);for(o=0;o<u.length;o+=2){var y=u[o],v=u[o+1];y==="style"?ba(l,v):y==="dangerouslySetInnerHTML"?Ta(l,v):y==="children"?Hn(l,v):to(l,y,v,d)}switch(a){case"input":ai(l,i);break;case"textarea":za(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?on(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?on(l,!!i.multiple,i.defaultValue,!0):on(l,!!i.multiple,i.multiple?[]:"",!1))}l[er]=i}catch(j){Y(e,e.return,j)}}break;case 6:if(De(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(j){Y(e,e.return,j)}}break;case 3:if(De(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(j){Y(e,e.return,j)}break;case 4:De(t,e),Be(e);break;case 13:De(t,e),Be(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ro=G())),r&4&&Ks(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(d=ae)||y,De(t,e),ae=d):De(t,e),Be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(_=e,y=e.child;y!==null;){for(v=_=y;_!==null;){switch(m=_,x=m.child,m.tag){case 0:case 11:case 14:case 15:An(4,m,m.return);break;case 1:rn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(j){Y(r,n,j)}}break;case 5:rn(m,m.return);break;case 22:if(m.memoizedState!==null){Gs(v);continue}}x!==null?(x.return=m,_=x):Gs(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{l=v.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=v.stateNode,u=v.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Pa("display",o))}catch(j){Y(e,e.return,j)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(j){Y(e,e.return,j)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:De(t,e),Be(e),r&4&&Ks(e);break;case 21:break;default:De(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Hn(l,""),r.flags&=-33);var i=Qs(e);Bi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Qs(e);Vi(e,a,o);break;default:throw Error(w(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e,t,n){_=e,ic(e)}function ic(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var l=_,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||_r;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ae;a=_r;var d=ae;if(_r=o,(ae=u)&&!d)for(_=l;_!==null;)o=_,u=o.child,o.tag===22&&o.memoizedState!==null?Xs(l):u!==null?(u.return=o,_=u):Xs(l);for(;i!==null;)_=i,ic(i),i=i.sibling;_=l,_r=a,ae=d}Ys(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,_=i):Ys(e)}}function Ys(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ms(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ms(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Gn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ae||t.flags&512&&Ai(t)}catch(m){Y(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Gs(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Xs(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Y(t,l,u)}}var i=t.return;try{Ai(t)}catch(u){Y(t,i,u)}break;case 5:var o=t.return;try{Ai(t)}catch(u){Y(t,o,u)}}}catch(u){Y(t,t.return,u)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var Mf=Math.ceil,al=it.ReactCurrentDispatcher,Do=it.ReactCurrentOwner,Pe=it.ReactCurrentBatchConfig,F=0,te=null,Z=null,re=0,xe=0,ln=Nt(0),q=0,or=null,It=0,jl=0,Lo=0,Vn=null,me=null,Ro=0,yn=1/0,Ge=null,ul=!1,Wi=null,yt=null,Tr=!1,ft=null,cl=0,Bn=0,Hi=null,$r=-1,Ar=0;function de(){return F&6?G():$r!==-1?$r:$r=G()}function xt(e){return e.mode&1?F&2&&re!==0?re&-re:hf.transition!==null?(Ar===0&&(Ar=Ba()),Ar):(e=I,e!==0||(e=window.event,e=e===void 0?16:Xa(e.type)),e):1}function $e(e,t,n,r){if(50<Bn)throw Bn=0,Hi=null,Error(w(185));ar(e,n,r),(!(F&2)||e!==te)&&(e===te&&(!(F&2)&&(jl|=n),q===4&&ct(e,re)),ye(e,r),n===1&&F===0&&!(t.mode&1)&&(yn=G()+500,xl&&Ct()))}function ye(e,t){var n=e.callbackNode;md(e,t);var r=Kr(e,e===te?re:0);if(r===0)n!==null&&is(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&is(n),t===1)e.tag===0?mf(Zs.bind(null,e)):hu(Zs.bind(null,e)),cf(function(){!(F&6)&&Ct()}),n=null;else{switch(Wa(r)){case 1:n=oo;break;case 4:n=Aa;break;case 16:n=Qr;break;case 536870912:n=Va;break;default:n=Qr}n=pc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if($r=-1,Ar=0,F&6)throw Error(w(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=Kr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=dl(e,r);else{t=r;var l=F;F|=2;var i=ac();(te!==e||re!==t)&&(Ge=null,yn=G()+500,Mt(e,t));do try{Rf();break}catch(a){sc(e,a)}while(!0);wo(),al.current=i,F=l,Z!==null?t=0:(te=null,re=0,t=q)}if(t!==0){if(t===2&&(l=yi(e),l!==0&&(r=l,t=Qi(e,l))),t===1)throw n=or,Mt(e,0),ct(e,r),ye(e,G()),n;if(t===6)ct(e,r);else{if(l=e.current.alternate,!(r&30)&&!Df(l)&&(t=dl(e,r),t===2&&(i=yi(e),i!==0&&(r=i,t=Qi(e,i))),t===1))throw n=or,Mt(e,0),ct(e,r),ye(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:_t(e,me,Ge);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=Ro+500-G(),10<t)){if(Kr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ei(_t.bind(null,e,me,Ge),t);break}_t(e,me,Ge);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ue(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mf(r/1960))-r,10<r){e.timeoutHandle=Ei(_t.bind(null,e,me,Ge),r);break}_t(e,me,Ge);break;case 5:_t(e,me,Ge);break;default:throw Error(w(329))}}}return ye(e,G()),e.callbackNode===n?oc.bind(null,e):null}function Qi(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=dl(e,t),e!==2&&(t=me,me=n,t!==null&&Ki(t)),e}function Ki(e){me===null?me=e:me.push.apply(me,e)}function Df(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ae(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~Lo,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function Zs(e){if(F&6)throw Error(w(327));dn();var t=Kr(e,0);if(!(t&1))return ye(e,G()),null;var n=dl(e,t);if(e.tag!==0&&n===2){var r=yi(e);r!==0&&(t=r,n=Qi(e,r))}if(n===1)throw n=or,Mt(e,0),ct(e,t),ye(e,G()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,me,Ge),ye(e,G()),null}function Fo(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(yn=G()+500,xl&&Ct())}}function Ot(e){ft!==null&&ft.tag===0&&!(F&6)&&dn();var t=F;F|=1;var n=Pe.transition,r=I;try{if(Pe.transition=null,I=1,e)return e()}finally{I=r,Pe.transition=n,F=t,!(F&6)&&Ct()}}function Io(){xe=ln.current,$(ln)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uf(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(vo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:gn(),$(ge),$(ue),Eo();break;case 5:Co(r);break;case 4:gn();break;case 13:$(W);break;case 19:$(W);break;case 10:ko(r.type._context);break;case 22:case 23:Io()}n=n.return}if(te=e,Z=e=wt(e.current,null),re=xe=t,q=0,or=null,Lo=jl=It=0,me=Vn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Pt=null}return e}function sc(e,t){do{var n=Z;try{if(wo(),Ir.current=sl,ol){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ol=!1}if(Ft=0,ee=J=H=null,$n=!1,rr=0,Do.current=null,n===null||n.return===null){q=1,or=t,Z=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=re,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,y=a,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=Os(o);if(x!==null){x.flags&=-257,Us(x,o,a,i,t),x.mode&1&&Is(i,d,t),t=x,u=d;var k=t.updateQueue;if(k===null){var j=new Set;j.add(u),t.updateQueue=j}else k.add(u);break e}else{if(!(t&1)){Is(i,d,t),Oo();break e}u=Error(w(426))}}else if(V&&a.mode&1){var L=Os(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Us(L,o,a,i,t),yo(vn(u,a));break e}}i=u=vn(u,a),q!==4&&(q=2),Vn===null?Vn=[i]:Vn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Wu(i,u,t);bs(i,f);break e;case 1:a=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(yt===null||!yt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Hu(i,a,t);bs(i,g);break e}}i=i.return}while(i!==null)}cc(n)}catch(S){t=S,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function ac(){var e=al.current;return al.current=sl,e===null?sl:e}function Oo(){(q===0||q===3||q===2)&&(q=4),te===null||!(It&268435455)&&!(jl&268435455)||ct(te,re)}function dl(e,t){var n=F;F|=2;var r=ac();(te!==e||re!==t)&&(Ge=null,Mt(e,t));do try{Lf();break}catch(l){sc(e,l)}while(!0);if(wo(),F=n,al.current=r,Z!==null)throw Error(w(261));return te=null,re=0,q}function Lf(){for(;Z!==null;)uc(Z)}function Rf(){for(;Z!==null&&!id();)uc(Z)}function uc(e){var t=fc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?cc(e):Z=t,Do.current=null}function cc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_f(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Z=null;return}}else if(n=zf(n,t,xe),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);q===0&&(q=5)}function _t(e,t,n){var r=I,l=Pe.transition;try{Pe.transition=null,I=1,Ff(e,t,n,r)}finally{Pe.transition=l,I=r}return null}function Ff(e,t,n,r){do dn();while(ft!==null);if(F&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(hd(e,i),e===te&&(Z=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,pc(Qr,function(){return dn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var o=I;I=1;var a=F;F|=4,Do.current=null,Pf(e,n),lc(n,e),tf(Ni),Yr=!!ji,Ni=ji=null,e.current=n,bf(n),od(),F=a,I=o,Pe.transition=i}else e.current=n;if(Tr&&(Tr=!1,ft=e,cl=l),i=e.pendingLanes,i===0&&(yt=null),ud(n.stateNode),ye(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ul)throw ul=!1,e=Wi,Wi=null,e;return cl&1&&e.tag!==0&&dn(),i=e.pendingLanes,i&1?e===Hi?Bn++:(Bn=0,Hi=e):Bn=0,Ct(),null}function dn(){if(ft!==null){var e=Wa(cl),t=Pe.transition,n=I;try{if(Pe.transition=null,I=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,cl=0,F&6)throw Error(w(331));var l=F;for(F|=4,_=e.current;_!==null;){var i=_,o=i.child;if(_.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(_=d;_!==null;){var y=_;switch(y.tag){case 0:case 11:case 15:An(8,y,i)}var v=y.child;if(v!==null)v.return=y,_=v;else for(;_!==null;){y=_;var m=y.sibling,x=y.return;if(tc(y),y===d){_=null;break}if(m!==null){m.return=x,_=m;break}_=x}}}var k=i.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var L=j.sibling;j.sibling=null,j=L}while(j!==null)}}_=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,_=o;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:An(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var c=e.current;for(_=c;_!==null;){o=_;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,_=p;else e:for(o=c;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sl(9,a)}}catch(S){Y(a,a.return,S)}if(a===o){_=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,_=g;break e}_=a.return}}if(F=l,Ct(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{I=n,Pe.transition=t}}return!1}function Js(e,t,n){t=vn(n,t),t=Wu(e,t,1),e=vt(e,t,1),t=de(),e!==null&&(ar(e,1,t),ye(e,t))}function Y(e,t,n){if(e.tag===3)Js(e,e,n);else for(;t!==null;){if(t.tag===3){Js(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=vn(n,e),e=Hu(t,e,1),t=vt(t,e,1),e=de(),t!==null&&(ar(t,1,e),ye(t,e));break}}t=t.return}}function If(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(q===4||q===3&&(re&130023424)===re&&500>G()-Ro?Mt(e,0):Lo|=n),ye(e,t)}function dc(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=de();e=nt(e,t),e!==null&&(ar(e,t,n),ye(e,n))}function Of(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dc(e,n)}function Uf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),dc(e,n)}var fc;fc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Ef(e,t,n);he=!!(e.flags&131072)}else he=!1,V&&t.flags&1048576&&gu(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var l=pn(t,ue.current);cn(t,n),l=_o(null,t,r,e,l,n);var i=To();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(i=!0,qr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,jo(t),l.updater=kl,t.stateNode=l,l._reactInternals=t,Di(t,r,e,n),t=Fi(null,t,r,!0,i,n)):(t.tag=0,V&&i&&go(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Af(r),e=Le(r,e),l){case 0:t=Ri(null,t,r,e,n);break e;case 1:t=Vs(null,t,r,e,n);break e;case 11:t=$s(null,t,r,e,n);break e;case 14:t=As(null,t,r,Le(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ri(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Vs(e,t,r,l,n);case 3:e:{if(Gu(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Su(e,t),ll(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=vn(Error(w(423)),t),t=Bs(e,t,r,n,l);break e}else if(r!==l){l=vn(Error(w(424)),t),t=Bs(e,t,r,n,l);break e}else for(we=gt(t.stateNode.containerInfo.firstChild),ke=t,V=!0,Fe=null,n=wu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===l){t=rt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return ju(t),e===null&&Pi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ci(r,l)?o=null:i!==null&&Ci(r,i)&&(t.flags|=32),Yu(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&Pi(t),null;case 13:return Xu(e,t,n);case 4:return No(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),$s(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(nl,r._currentValue),r._currentValue=o,i!==null)if(Ae(i.value,o)){if(i.children===l.children&&!ge.current){t=rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=qe(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?u.next=u:(u.next=y.next,y.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),bi(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,cn(t,n),l=be(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),As(e,t,r,l,n);case 15:return Qu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ur(e,t),t.tag=1,ve(r)?(e=!0,qr(t)):e=!1,cn(t,n),Bu(t,r,l),Di(t,r,l,n),Fi(null,t,r,!0,e,n);case 19:return Zu(e,t,n);case 22:return Ku(e,t,n)}throw Error(w(156,t.tag))};function pc(e,t){return $a(e,t)}function $f(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new $f(e,t,n,r)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Af(e){if(typeof e=="function")return Uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ro)return 11;if(e===lo)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Uo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yt:return Dt(n.children,l,i,t);case no:o=8,l|=8;break;case ri:return e=Te(12,n,t,l|2),e.elementType=ri,e.lanes=i,e;case li:return e=Te(13,n,t,l),e.elementType=li,e.lanes=i,e;case ii:return e=Te(19,n,t,l),e.elementType=ii,e.lanes=i,e;case ja:return Nl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ka:o=10;break e;case Sa:o=9;break e;case ro:o=11;break e;case lo:o=14;break e;case st:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Te(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Dt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=ja,e.lanes=n,e.stateNode={isHidden:!1},e}function ei(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function ti(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function $o(e,t,n,r,l,i,o,a,u){return e=new Vf(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Te(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jo(i),e}function Bf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mc(e){if(!e)return St;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ve(n))return mu(e,n,t)}return t}function hc(e,t,n,r,l,i,o,a,u){return e=$o(n,r,!0,e,l,i,o,a,u),e.context=mc(null),n=e.current,r=de(),l=xt(n),i=qe(r,l),i.callback=t??null,vt(n,i,l),e.current.lanes=l,ar(e,l,r),ye(e,r),e}function Cl(e,t,n,r){var l=t.current,i=de(),o=xt(l);return n=mc(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(l,t,o),e!==null&&($e(e,l,o,i),Fr(e,l,o)),o}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ao(e,t){qs(e,t),(e=e.alternate)&&qs(e,t)}function Wf(){return null}var gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vo(e){this._internalRoot=e}El.prototype.render=Vo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Cl(e,t,null,null)};El.prototype.unmount=Vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){Cl(null,e,null,null)}),t[tt]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ka();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&Ga(e)}};function Bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ea(){}function Hf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=fl(o);i.call(d)}}var o=hc(t,r,e,0,null,!1,!1,"",ea);return e._reactRootContainer=o,e[tt]=o.current,Jn(e.nodeType===8?e.parentNode:e),Ot(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=fl(u);a.call(d)}}var u=$o(e,0,!1,null,null,!1,!1,"",ea);return e._reactRootContainer=u,e[tt]=u.current,Jn(e.nodeType===8?e.parentNode:e),Ot(function(){Cl(t,u,n,r)}),u}function _l(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=fl(o);a.call(u)}}Cl(t,o,e,l)}else o=Hf(n,t,e,l,r);return fl(o)}Ha=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dn(t.pendingLanes);n!==0&&(so(t,n|1),ye(t,G()),!(F&6)&&(yn=G()+500,Ct()))}break;case 13:Ot(function(){var r=nt(e,1);if(r!==null){var l=de();$e(r,e,1,l)}}),Ao(e,1)}};ao=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=de();$e(t,e,134217728,n)}Ao(e,134217728)}};Qa=function(e){if(e.tag===13){var t=xt(e),n=nt(e,t);if(n!==null){var r=de();$e(n,e,t,r)}Ao(e,t)}};Ka=function(){return I};Ya=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};hi=function(e,t,n){switch(t){case"input":if(ai(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=yl(r);if(!l)throw Error(w(90));Ca(r),ai(r,l)}}}break;case"textarea":za(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};La=Fo;Ra=Ot;var Qf={usingClientEntryPoint:!1,Events:[cr,Jt,yl,Ma,Da,Fo]},Pn={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kf={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oa(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||Wf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{ml=Pr.inject(Kf),Qe=Pr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qf;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bo(t))throw Error(w(200));return Bf(e,t,null,n)};je.createRoot=function(e,t){if(!Bo(e))throw Error(w(299));var n=!1,r="",l=gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=$o(e,1,!1,null,null,n,!1,r,l),e[tt]=t.current,Jn(e.nodeType===8?e.parentNode:e),new Vo(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Oa(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Ot(e)};je.hydrate=function(e,t,n){if(!zl(t))throw Error(w(200));return _l(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Bo(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=gc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=hc(t,null,e,1,n??null,l,!1,i,o),e[tt]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new El(t)};je.render=function(e,t,n){if(!zl(t))throw Error(w(200));return _l(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!zl(e))throw Error(w(40));return e._reactRootContainer?(Ot(function(){_l(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};je.unstable_batchedUpdates=Fo;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return _l(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function vc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vc)}catch(e){console.error(e)}}vc(),va.exports=je;var Yf=va.exports,yc,ta=Yf;yc=ta.createRoot,ta.hydrateRoot;function lt(e){return e?e.startsWith("http://")||e.startsWith("https://")?e:`${fr}${e}`:null}function Oe(e){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e);t.lang="de-DE",t.rate=.9;const r=window.speechSynthesis.getVoices().find(l=>l.lang.startsWith("de"));r&&(t.voice=r),window.speechSynthesis.speak(t)}function na(e,t){let{repetitions:n,easiness:r,interval:l}=e;t>=3?(n===0?l=1:n===1?l=6:l=Math.round(l*r),n+=1):(n=0,l=1),r=Math.max(1.3,r+.1-(5-t)*(.08+(5-t)*.02));const i=Date.now()+l*864e5;return{repetitions:n,easiness:r,interval:l,nextReview:i,lastGrade:t}}function Gf(e){const t=Math.ceil((e-Date.now())/864e5);return t<=0?"Hoy":t===1?"Mañana":`${t} días`}const fr="http://localhost:3001",Wo="dk_token",xc=()=>localStorage.getItem(Wo),Xf=e=>localStorage.setItem(Wo,e),ra=()=>localStorage.removeItem(Wo);function Tl(){const e=xc();return e?{Authorization:`Bearer ${e}`}:{}}async function pr(e,t={}){const n=await fetch(`${fr}${e}`,{headers:{"Content-Type":"application/json",...Tl(),...t.headers||{}},...t});if(!n.ok){const r=await n.json().catch(()=>({}));throw Object.assign(new Error(r.error||n.statusText),{status:n.status})}return n.json()}async function la(){return pr("/cards")}async function ia(e){const t=e.length===0?"?allowEmpty=true":"";return pr(`/cards${t}`,{method:"PUT",body:JSON.stringify(e)})}async function Zf(e){return pr("/explain",{method:"POST",body:JSON.stringify({german:e.german,translation:e.translation,note:e.note||""})}).then(t=>t.text)}async function Jf(e){const t=new FormData;t.append("file",e);const n=await fetch(`${fr}/upload`,{method:"POST",body:t,headers:Tl()});if(!n.ok)throw new Error("Error al subir archivo.");return n.json()}async function qf(e){const t=e.split("/media/")[1];t&&await fetch(`${fr}/media/${t}`,{method:"DELETE",headers:Tl()})}const Yi="@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400;500&display=swap');",wc=`
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #111111;
    color: #f0ece0;
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
    border-bottom: 1px solid #2e2e2e;
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
    box-shadow: 0 0 0 1px rgba(255,255,255,0.06);
  }

  .logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-style: italic;
    color: #ffcc00;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .logo-text span { color: #f0ece0; font-style: normal; }

  .nav {
    display: flex;
    gap: 0.25rem;
  }

  .nav-btn {
    background: none;
    border: none;
    color: #888;
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
    color: #ffcc00;
    background: #1e1e1e;
  }

  .hamburger-btn { display: none; }

  /* ── Study View ── */
  .deck-empty {
    text-align: center;
    padding: 4rem 2rem;
    color: #555;
  }

  .deck-empty p { font-size: 0.8rem; line-height: 2; }
  .deck-empty strong { color: #ffcc00; font-weight: 400; }

  .session-info {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.7rem;
    color: #666;
    letter-spacing: 0.08em;
  }

  .session-info span { color: #aaa; }
  .session-info strong { color: #ffcc00; }

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
    border: 1px solid #2e2e2e;
    background: #1a1a1a;
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
    border: 1px solid #2e2e2e;
    background: #1a1a1a;
    overflow: hidden;
  }

  .card-face.back {
    transform: rotateY(180deg);
    background: #1e1e1e;
    border-color: #cc0000;
  }

  .card-hint {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 0.6rem;
    color: #444;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .card-word {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    color: #f0ece0;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .card-sub {
    font-size: 0.72rem;
    color: #666;
    letter-spacing: 0.08em;
    text-align: center;
  }

  .card-translation {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.8rem;
    color: #ffcc00;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .card-note {
    font-size: 0.7rem;
    color: #888;
    text-align: center;
    max-width: 80%;
    line-height: 1.6;
    margin-top: 0.75rem;
  }

  /* Grades */
  .grades {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .grade-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    padding: 0.7rem 0.4rem;
    border: 1px solid #2e2e2e;
    background: #1a1a1a;
    border-radius: 3px;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    font-family: 'DM Mono', monospace;
  }

  .grade-btn:hover { background: #222; }

  .grade-btn.g0:hover { border-color: #cc0000; }
  .grade-btn.g1:hover { border-color: #aa2200; }
  .grade-btn.g2:hover { border-color: #886600; }
  .grade-btn.g3:hover { border-color: #aa8800; }
  .grade-btn.g4:hover { border-color: #ccaa00; }
  .grade-btn.g5:hover { border-color: #ffcc00; }

  .grade-num {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .grade-btn.g0 .grade-num { color: #cc0000; }
  .grade-btn.g1 .grade-num { color: #dd4400; }
  .grade-btn.g2 .grade-num { color: #bb8800; }
  .grade-btn.g3 .grade-num { color: #ccaa00; }
  .grade-btn.g4 .grade-num { color: #ddbb00; }
  .grade-btn.g5 .grade-num { color: #ffcc00; }

  .grade-label {
    font-size: 0.55rem;
    color: #777;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: center;
  }

  /* AI Explain */
  .explain-btn {
    width: 100%;
    padding: 0.65rem;
    background: none;
    border: 1px dashed #333;
    border-radius: 3px;
    color: #888;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    margin-bottom: 0.75rem;
  }

  .explain-btn:hover { color: #ffcc00; border-color: #cc0000; }
  .explain-btn:disabled { opacity: 0.3; cursor: not-allowed; }

  .explanation {
    background: #181818;
    border: 1px solid #2e2e2e;
    border-radius: 3px;
    padding: 1.25rem 1.5rem;
    font-size: 0.78rem;
    line-height: 1.8;
    color: #c8c0a8;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    margin-bottom: 1rem;
  }

  /* ── Add Card View ── */
  .add-form {
    background: #1a1a1a;
    border: 1px solid #2e2e2e;
    border-radius: 4px;
    padding: 2rem;
  }

  .form-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: #ffcc00;
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  .field {
    margin-bottom: 1.25rem;
  }

  .field label {
    display: block;
    font-size: 0.65rem;
    color: #888;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .field input, .field textarea {
    width: 100%;
    background: #111111;
    border: 1px solid #2e2e2e;
    border-radius: 2px;
    padding: 0.7rem 0.9rem;
    color: #f0ece0;
    font-family: 'DM Mono', monospace;
    font-size: 0.85rem;
    outline: none;
    transition: border-color 0.2s;
  }

  .field input:focus, .field textarea:focus {
    border-color: #cc0000;
  }

  .field textarea { resize: vertical; min-height: 80px; }

  .submit-btn {
    background: #cc0000;
    border: 1px solid #990000;
    border-radius: 2px;
    color: #f0ece0;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.75rem 2rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  .submit-btn:hover { background: #990000; }

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
    color: #ffcc00;
    font-style: italic;
  }

  .list-count {
    font-size: 0.65rem;
    color: #666;
    letter-spacing: 0.1em;
  }

  .card-list { display: flex; flex-direction: column; gap: 0.4rem; }

  .list-item {
    display: grid;
    grid-template-columns: 30px 1fr auto auto auto auto;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 0.75rem;
    background: #1a1a1a;
    border: 1px solid #2a2a2a;
    border-radius: 2px;
    transition: border-color 0.2s;
  }

  .list-item:hover { border-color: #cc0000; }

  .li-german {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    color: #f0ece0;
  }

  .li-trans {
    font-size: 0.75rem;
    color: #aaa;
    font-style: italic;
  }

  .li-next {
    font-size: 0.65rem;
    color: #777;
    letter-spacing: 0.06em;
    text-align: right;
    white-space: nowrap;
  }

  .li-next.due { color: #cc0000; }

  .delete-btn {
    background: none;
    border: none;
    color: #444;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
    border-radius: 2px;
    transition: color 0.2s;
    font-family: 'DM Mono', monospace;
  }

  .delete-btn:hover { color: #cc0000; }

  .noise {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
    z-index: 9999;
  }


  /* ── Add Tabs ── */
  .add-tabs {
    display: flex;
    gap: 0;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #2e2e2e;
  }

  .add-tab {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    padding: 0.5rem 1rem;
    color: #777;
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }

  .add-tab.active {
    color: #ffcc00;
    border-bottom-color: #ffcc00;
  }

  .bulk-textarea {
    width: 100%;
    background: #111111;
    border: 1px solid #2e2e2e;
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

  .bulk-textarea:focus { border-color: #cc0000; }

  .bulk-replace-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.68rem;
    color: #777;
    letter-spacing: 0.04em;
    cursor: pointer;
    margin-bottom: 0.25rem;
  }
  .bulk-replace-row input { accent-color: #cc0000; cursor: pointer; }
  .bulk-replace-row:hover span { color: #aaa; }

  .preview-card-btn {
    background: none;
    border: none;
    color: #444;
    cursor: pointer;
    padding: 0.2rem 0.4rem;
    border-radius: 2px;
    transition: color 0.2s;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  .preview-card-btn:hover { color: #ffcc00; }

  .bulk-schema {
    font-size: 0.65rem;
    color: #777;
    margin-bottom: 1rem;
    letter-spacing: 0.04em;
    line-height: 1.6;
  }

  .bulk-schema code {
    color: #ffcc00;
    background: #222;
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
    border: 1px solid #2e2e2e;
    flex-shrink: 0;
  }

  .card-audio {
    width: 90%;
    max-width: 260px;
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
    accent-color: #cc0000;
    height: 32px;
    flex-shrink: 0;
  }


  .mode-toggle {
    background: none;
    border: none;
    color: #555;
    font-family: 'DM Mono', monospace;
    font-size: 0.58rem;
    letter-spacing: 0.06em;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.2s;
  }
  .mode-toggle:hover { color: #ffcc00; }

  .url-input-row {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .url-input {
    flex: 1;
    background: #111;
    border: 1px solid #333;
    border-radius: 2px;
    padding: 0.5rem 0.75rem;
    color: #f0ece0;
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .url-input:focus { border-color: #cc0000; }

  .url-set-btn {
    background: #222;
    border: 1px solid #333;
    border-radius: 2px;
    color: #ffcc00;
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    padding: 0.5rem 0.85rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .url-set-btn:hover { background: #2a2a2a; }

  .media-preview-label {
    font-size: 0.62rem;
    color: #777;
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
    background: #111;
    border: 1px dashed #333;
    border-radius: 2px;
    color: #777;
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.4rem 0.75rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }

  .media-upload-btn:hover { color: #ffcc00; border-color: #555; }

  .media-preview {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.65rem;
    color: #888;
  }

  .media-preview img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 2px;
    border: 1px solid #2e2e2e;
  }

  .media-remove {
    background: none;
    border: none;
    color: #555;
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0 0.2rem;
    font-family: 'DM Mono', monospace;
    transition: color 0.2s;
  }

  .media-remove:hover { color: #cc0000; }

  .media-uploading {
    font-size: 0.62rem;
    color: #666;
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
    border: 1px solid #2e2e2e;
    border-radius: 2px;
    color: #555;
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }

  .delete-all-btn:hover {
    color: #cc0000;
    border-color: #cc0000;
  }

  .export-btn {
    background: none;
    border: 1px solid #2e2e2e;
    border-radius: 2px;
    color: #555;
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }
  .export-btn:hover { color: #ffcc00; border-color: #ffcc00; }

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
    background: #1a1a1a;
    border: 1px solid #cc0000;
    border-radius: 4px;
    padding: 2rem;
    max-width: 360px;
    width: 100%;
  }

  .confirm-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: #f0ece0;
    margin-bottom: 0.75rem;
  }

  .confirm-body {
    font-size: 0.75rem;
    color: #888;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .confirm-body strong { color: #f0ece0; font-weight: 400; }

  .confirm-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
  }

  .confirm-cancel {
    background: none;
    border: 1px solid #2e2e2e;
    border-radius: 2px;
    color: #888;
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.6rem 1.25rem;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }

  .confirm-cancel:hover { border-color: #555; color: #f0ece0; }

  .confirm-ok {
    background: #cc0000;
    border: 1px solid #cc0000;
    border-radius: 2px;
    color: #f0ece0;
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.6rem 1.25rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  .confirm-ok:hover { background: #990000; border-color: #990000; }


  /* ── List search ── */
  .list-search-wrap {
    position: relative;
    margin-bottom: 1rem;
  }

  .list-search {
    width: 100%;
    background: #111;
    border: 1px solid #2e2e2e;
    border-radius: 2px;
    padding: 0.6rem 2rem 0.6rem 0.9rem;
    color: #f0ece0;
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .list-search:focus { border-color: #cc0000; }
  .list-search::placeholder { color: #444; }

  .list-search-clear {
    position: absolute;
    right: 0.6rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #555;
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    transition: color 0.2s;
  }
  .list-search-clear:hover { color: #cc0000; }

  .list-empty {
    font-size: 0.75rem;
    color: #555;
    padding: 2rem;
    text-align: center;
  }
  .list-empty em { color: #888; font-style: normal; }

  /* ── List item updated ── */
  .li-main { flex: 1; min-width: 0; }
  .li-note {
    font-size: 0.6rem;
    color: #555;
    letter-spacing: 0.04em;
    margin-top: 0.15rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .edit-btn {
    background: none;
    border: none;
    color: #444;
    cursor: pointer;
    font-size: 0.85rem;
    padding: 0.2rem 0.4rem;
    border-radius: 2px;
    transition: color 0.2s;
    font-family: 'DM Mono', monospace;
    flex-shrink: 0;
  }
  .edit-btn:hover { color: #ffcc00; }

  /* ── Edit modal ── */
  .edit-dialog {
    background: #1a1a1a;
    border: 1px solid #ffcc00;
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
    border: 1px solid #2e2e2e;
    display: block;
  }

  .preview-thumb-empty {
    width: 28px;
    height: 28px;
    border-radius: 2px;
    border: 1px dashed #333;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    color: #444;
  }

  .card-preview-dialog {
    background: #1a1a1a;
    border: 1px solid #2e2e2e;
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
    border: 1px solid #2e2e2e;
    border-radius: 3px;
    overflow: hidden;
  }

  .card-preview-label {
    background: #111;
    font-size: 0.58rem;
    color: #555;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.3rem 0.75rem;
    border-bottom: 1px solid #2e2e2e;
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
    color: #f0ece0;
    text-align: center;
    line-height: 1.2;
  }

  .card-preview-trans {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.3rem;
    color: #ffcc00;
    text-align: center;
  }

  .card-preview-example {
    font-size: 0.78rem;
    color: #888;
    text-align: center;
    font-style: italic;
    line-height: 1.6;
  }

  .card-preview-note {
    font-size: 0.65rem;
    color: #555;
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
    background: #1a1a1a;
    border: 1px solid #2e2e2e;
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
    color: #f0ece0;
  }

  .img-preview-close {
    background: none;
    border: none;
    color: #555;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    transition: color 0.2s;
  }
  .img-preview-close:hover { color: #f0ece0; }

  .img-preview-frame {
    width: 100%;
    aspect-ratio: 4/3;
    background: #111;
    border: 1px solid #2e2e2e;
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
    color: #444;
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
    background: #111;
    border: 1px solid #333;
    border-radius: 2px;
    padding: 0.5rem 0.75rem;
    color: #f0ece0;
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .img-preview-url-input:focus { border-color: #cc0000; }
  .img-preview-url-input::placeholder { color: #444; }

  .img-preview-save-btn {
    background: #cc0000;
    border: none;
    border-radius: 2px;
    color: #f0ece0;
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0 0.9rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .img-preview-save-btn:hover { background: #990000; }

  .img-preview-status {
    font-size: 0.65rem;
    text-align: center;
    letter-spacing: 0.06em;
  }
  .img-preview-status.ok { color: #44aa44; }
  .img-preview-status.err { color: #cc4444; }

  /* filter button */
  .list-filter-row {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }

  .list-filter-btn {
    background: #111;
    border: 1px solid #2e2e2e;
    border-radius: 2px;
    color: #555;
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .list-filter-btn.active { border-color: #cc0000; color: #f0ece0; background: #1a0000; }
  .list-filter-btn:hover:not(.active) { border-color: #444; color: #aaa; }

  /* ── Toast ── */
  .toast {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    background: #1a1a1a;
    border: 1px solid #3a3a3a;
    border-left: 3px solid #44aa44;
    border-radius: 3px;
    padding: 0.65rem 1.25rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    color: #88dd88;
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
    color: #ffcc00;
    font-style: italic;
  }

  .stats-total {
    font-size: 0.65rem;
    color: #666;
    letter-spacing: 0.1em;
  }

  .stats-chart {
    background: #1a1a1a;
    border: 1px solid #2e2e2e;
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
    color: #aaa;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .stats-bar-wrap {
    height: 10px;
    background: #222;
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
  }

  .stats-pct {
    font-size: 0.58rem;
    color: #555;
  }

  .stats-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .stats-kpi {
    background: #1a1a1a;
    border: 1px solid #2e2e2e;
    border-radius: 3px;
    padding: 1rem 0.75rem;
    text-align: center;
  }

  .kpi-val {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.4rem;
  }

  .kpi-label {
    font-size: 0.58rem;
    color: #666;
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
    color: #888;
    background: rgba(0,0,0,0.6);
    border: 1px solid #3a3a3a;
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
    border: 1px solid #2e2e2e;
    background: #111;
    flex-shrink: 0;
  }

  .t1-front-hint {
    font-size: 0.58rem;
    color: #444;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .t1-back-word {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
    color: #f0ece0;
    text-align: center;
    line-height: 1.1;
    margin-bottom: 0.35rem;
  }

  .t1-back-note {
    font-size: 0.65rem;
    color: #666;
    letter-spacing: 0.06em;
    margin-bottom: 1rem;
  }

  .audio-replay-btn {
    background: #111;
    border: 1px solid #555;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1rem;
    color: #888;
    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.1s;
    flex-shrink: 0;
    margin-top: 0.5rem;
  }
  .audio-replay-btn:hover { background: #1a1600; border-color: #ffcc00; color: #ffcc00; transform: scale(1.08); }
  .audio-replay-btn.playing { border-color: #ffcc00; color: #ffcc00; }

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
    color: #f0ece0;
    text-align: center;
    line-height: 1.2;
  }

  .t2-divider {
    width: 2rem;
    height: 1px;
    background: #cc0000;
    flex-shrink: 0;
  }

  .t2-example {
    font-size: 0.78rem;
    color: #aaa;
    text-align: center;
    line-height: 1.7;
    font-style: italic;
  }

  .t2-example em {
    color: #ffcc00;
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
    color: #ffcc00;
    text-align: center;
  }

  .t2-example-trans {
    font-size: 0.7rem;
    color: #666;
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
    background: #111;
    border: 1px solid #2e2e2e;
    border-radius: 2px;
    color: #666;
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
    border-color: #cc0000;
    color: #f0ece0;
    background: #1a0000;
  }
  .type-btn:hover:not(.active) { border-color: #444; color: #aaa; }


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
    color: #555;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .t4-word {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 2.2rem;
    color: #ffcc00;
    text-align: center;
  }
  .t4-note {
    font-size: 0.65rem;
    color: #555;
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
    color: #f0ece0;
    text-align: center;
    line-height: 1.7;
  }
  .t5-blank {
    display: inline-block;
    min-width: 5rem;
    border-bottom: 2px solid #cc0000;
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
    color: #555;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .t6-word {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    color: #f0ece0;
    text-align: center;
    line-height: 1.1;
  }
  .t6-hint {
    font-size: 0.6rem;
    color: #444;
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
    background: #111;
    border: 1px solid #333;
    border-radius: 2px;
    padding: 0.7rem 0.9rem;
    color: #f0ece0;
    font-family: 'DM Mono', monospace;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .answer-input:focus { border-color: #cc0000; }
  .answer-input.correct { border-color: #44aa44; background: #0a1a0a; }
  .answer-input.wrong   { border-color: #cc0000; background: #1a0a0a; }

  .answer-check-btn {
    background: #cc0000;
    border: none;
    border-radius: 2px;
    color: #f0ece0;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0 1.25rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .answer-check-btn:hover { background: #990000; }
  .answer-check-btn:disabled { background: #333; color: #666; cursor: default; }

  .reveal-btn {
    background: none;
    border: 1px dashed #444;
    border-radius: 2px;
    color: #666;
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.5rem 0.9rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    white-space: nowrap;
  }
  .reveal-btn:hover { color: #aaa; border-color: #666; }

  .continuar-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #1a1600;
    border: 1px solid #ffcc00;
    border-radius: 2px;
    color: #ffcc00;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.65rem 1.5rem;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    margin-top: 0.25rem;
  }
  .continuar-btn:hover { background: #2a2200; color: #ffe566; }
  .continuar-btn::after { content: " →"; font-size: 0.85rem; }

  .answer-feedback {
    font-size: 0.75rem;
    padding: 0.6rem 0.9rem;
    border-radius: 2px;
    line-height: 1.5;
    overflow-wrap: break-word;
  }
  .answer-feedback.correct {
    background: #0a1a0a;
    border: 1px solid #44aa44;
    color: #88dd88;
  }
  .answer-feedback.wrong {
    background: #1a0a0a;
    border: 1px solid #cc0000;
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
    border: 1px solid #2e2e2e;
    background: #1a1a1a;
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    color: #888;
    cursor: pointer;
    transition: all 0.15s;
    text-align: center;
  }
  .article-btn:hover:not(:disabled) { border-color: #ffcc00; color: #ffcc00; background: #1a1600; }
  .article-btn.correct { border-color: #44aa44; color: #88dd88; background: #0a1a0a; }
  .article-btn.wrong   { border-color: #cc0000; color: #ff8888; background: #1a0a0a; }
  .article-btn.reveal  { border-color: #44aa44; color: #88dd88; background: #0a1a0a; }
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

    .nav {
      gap: 2px;
      flex-wrap: nowrap;
      display: none;
    }

    .nav-btn {
      flex: 1 1 0;
      min-width: 0;
      font-size: 0.65rem;
      padding: 0.5rem 0.4rem;
      min-height: 44px;
      display: flex;
      align-items: center;
      white-space: nowrap;
    }

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
      color: #f0ece0;
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
      background: #1a1a1a;
      border: 1px solid #2e2e2e;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
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
      color: #888;
    }

    .menu-item.active { font-weight: 600; color: #ffcc00; }

    .menu-logout { opacity: 0.7; }

    .card-scene { height: 210px; }

    .card-word { font-size: 1.9rem; }
    .card-translation { font-size: 1.45rem; }

    /* 6 grade buttons -> 3+3 on mobile */
    .grades {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.4rem;
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
`,Ho=[{n:0,label:"Nada"},{n:1,label:"Mal"},{n:2,label:"Difícil"},{n:3,label:"Ok"},{n:4,label:"Bien"},{n:5,label:"Fácil"}];function ep({card:e}){return s.jsxs("div",{className:"t1-front",children:[s.jsx("div",{className:"card-type-badge",children:"Tipo 1"}),e.imageUrl?s.jsx("img",{className:"t1-front-img",src:lt(e.imageUrl),alt:""}):s.jsx("div",{style:{fontSize:"0.75rem",color:"#444",border:"1px dashed #333",padding:"1.5rem 2rem",borderRadius:"4px"},children:"sin imagen"}),s.jsx("div",{className:"t1-front-hint",children:"toca para voltear"})]})}function tp({card:e,onSpeak:t}){return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"card-type-badge",children:"Tipo 1"}),s.jsx("div",{className:"card-hint",children:"califica abajo"}),s.jsx("div",{className:"t1-back-word",children:e.german}),e.note&&s.jsx("div",{className:"t1-back-note",children:e.note}),s.jsx("button",{className:"audio-replay-btn",onClick:n=>{n.stopPropagation(),t()},title:"Pronunciar",children:"▶"})]})}function np({card:e}){const t=(n,r)=>{if(!n||!r)return n;const l=r.replace(/^(der|die|das|ein|eine)\s+/i,"").toLowerCase(),i=new RegExp(`(${l})`,"gi");return n.split(i).map((a,u)=>i.test(a)?s.jsx("em",{children:a},u):a)};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"card-type-badge",children:"Tipo 2"}),s.jsx("div",{className:"card-hint",children:"toca para voltear"}),s.jsxs("div",{className:"t2-front",children:[s.jsx("div",{className:"t2-word",children:e.german}),e.example&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"t2-divider"}),s.jsx("div",{className:"t2-example",children:t(e.example,e.german)})]})]})]})}function rp({card:e}){return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"card-type-badge",children:"Tipo 2"}),s.jsx("div",{className:"card-hint",children:"califica abajo"}),s.jsxs("div",{className:"t2-back",children:[s.jsx("div",{className:"t2-translation",children:e.translation}),e.note&&s.jsx("div",{className:"card-note",children:e.note}),s.jsx("button",{className:"audio-replay-btn",style:{marginTop:"0.5rem"},onClick:t=>{t.stopPropagation(),Oe(e.german)},title:"Pronunciar",children:"▶"}),e.exampleTranslation&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"t2-divider",style:{marginTop:"0.5rem"}}),s.jsxs("div",{className:"t2-example-trans",children:['"',e.exampleTranslation,'"']})]})]})]})}function lp({card:e}){return s.jsxs("div",{className:"t4-front",children:[s.jsx("div",{className:"card-type-badge",children:"Tipo 4"}),s.jsx("div",{className:"t4-label",children:"¿Cómo se dice en alemán?"}),s.jsx("div",{className:"t4-word",children:e.translation}),e.note&&s.jsx("div",{className:"t4-note",children:e.note})]})}function ip({card:e}){const n=(e.example||"").split("___");return s.jsxs("div",{className:"t5-front",children:[s.jsx("div",{className:"card-type-badge",children:"Tipo 5"}),e.imageUrl&&s.jsx("img",{className:"t1-front-img",src:lt(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"45%",maxWidth:"80%",marginBottom:"0.25rem"}}),s.jsx("div",{className:"t5-sentence",children:n.map((r,l)=>s.jsxs(Ie.Fragment,{children:[r,l<n.length-1&&s.jsx("span",{className:"t5-blank",children:"_____"})]},l))}),e.note&&s.jsx("div",{className:"t4-note",style:{fontSize:"0.62rem"},children:e.note})]})}function op({card:e}){const t=e.german.replace(/^(der|die|das)\s+/i,"");return s.jsxs("div",{className:"t6-front",children:[s.jsx("div",{className:"card-type-badge",children:"Tipo 6"}),e.imageUrl&&s.jsx("img",{className:"t1-front-img",src:lt(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"50%",maxWidth:"80%",marginBottom:"0.5rem"}}),s.jsx("div",{className:"t6-label",children:"¿Cuál es el artículo?"}),s.jsxs("div",{className:"t6-word",children:["___ ",t]})]})}function sp({card:e,onGrade:t,onExplain:n,explaining:r,explanation:l}){const[i,o]=N.useState(""),[a,u]=N.useState(null),d=Ie.useRef(null);Ie.useEffect(()=>{var m;(m=d.current)==null||m.focus()},[]);const y=()=>{if(!i.trim())return;const m=i.trim()===e.german;u(m?"correct":"wrong")},v=()=>{u("revealed"),Oe(e.german)};return s.jsxs("div",{className:"answer-zone",children:[s.jsxs("div",{className:"answer-input-row",children:[s.jsx("input",{ref:d,className:`answer-input ${a==="wrong"?"wrong":a==="correct"?"correct":""}`,value:i,onChange:m=>o(m.target.value),onKeyDown:m=>{m.key==="Enter"&&!a&&y()},placeholder:"Escribe en alemán…",disabled:!!a}),s.jsx("button",{className:"answer-check-btn",onClick:y,disabled:!!a||!i.trim(),children:"OK"}),s.jsx("button",{className:"reveal-btn",onClick:v,disabled:!!a,children:"Revelar"})]}),a==="correct"&&s.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{children:"✓ ¡Correcto!"}),s.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem"},onClick:()=>Oe(e.german),children:"▶"})]}),a==="wrong"&&s.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("span",{children:["✗ La respuesta es: ",s.jsx("strong",{children:e.german})]}),s.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),a==="revealed"&&s.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("span",{children:["👁 La respuesta es: ",s.jsx("strong",{children:e.german})]}),s.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),s.jsx("button",{className:"continuar-btn",onClick:()=>t(0),children:"Continuar"})]}),(a==="correct"||a==="wrong")&&s.jsx("div",{className:"grades",children:Ho.map(({n:m,label:x})=>s.jsxs("button",{className:`grade-btn g${m}`,onClick:()=>t(m),children:[s.jsx("span",{className:"grade-num",children:m}),s.jsx("span",{className:"grade-label",children:x})]},m))}),!!a&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"explain-btn",onClick:n,disabled:r,children:r?"Consultando IA…":"✦ Explicar con IA"}),l&&s.jsx("div",{className:"explanation",children:l})]})]})}function ap({card:e,onGrade:t,onExplain:n,explaining:r,explanation:l}){const[i,o]=N.useState(""),[a,u]=N.useState(null),d=Ie.useRef(null);Ie.useEffect(()=>{var x;(x=d.current)==null||x.focus()},[]);const y=(e.example||"").replace("___",e.german),v=()=>{if(!i.trim())return;const x=i.trim()===e.german;u(x?"correct":"wrong")},m=()=>{u("revealed"),Oe(e.german)};return s.jsxs("div",{className:"answer-zone",children:[s.jsxs("div",{className:"answer-input-row",children:[s.jsx("input",{ref:d,className:`answer-input ${a==="wrong"?"wrong":a==="correct"?"correct":""}`,value:i,onChange:x=>o(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!a&&v()},placeholder:"Completa el espacio…",disabled:!!a}),s.jsx("button",{className:"answer-check-btn",onClick:v,disabled:!!a||!i.trim(),children:"OK"}),s.jsx("button",{className:"reveal-btn",onClick:m,disabled:!!a,children:"Revelar"})]}),a==="correct"&&s.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("span",{style:{minWidth:0},children:["✓ ¡Correcto! — ",y]}),s.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),a==="wrong"&&s.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("span",{style:{minWidth:0},children:["✗ Era: ",s.jsx("strong",{children:e.german})," — ",y]}),s.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),a==="revealed"&&s.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("span",{style:{minWidth:0},children:["👁 ",s.jsx("strong",{children:e.german})," — ",y]}),s.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),s.jsx("button",{className:"continuar-btn",onClick:()=>t(0),children:"Continuar"})]}),(a==="correct"||a==="wrong")&&s.jsx("div",{className:"grades",children:Ho.map(({n:x,label:k})=>s.jsxs("button",{className:`grade-btn g${x}`,onClick:()=>t(x),children:[s.jsx("span",{className:"grade-num",children:x}),s.jsx("span",{className:"grade-label",children:k})]},x))}),!!a&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"explain-btn",onClick:n,disabled:r,children:r?"Consultando IA…":"✦ Explicar con IA"}),l&&s.jsx("div",{className:"explanation",children:l})]})]})}function up({card:e,onGrade:t,onExplain:n,explaining:r,explanation:l}){var y,v;const[i,o]=N.useState(null),a=((v=(y=e.german.match(/^(der|die|das)/i))==null?void 0:y[1])==null?void 0:v.toLowerCase())||"",u=m=>{i||o(m)},d=m=>i?m===a?"reveal":m===i&&i!==a?"wrong":"":"";return s.jsxs("div",{className:"answer-zone",children:[s.jsx("div",{className:"article-btns",children:["der","die","das"].map(m=>s.jsx("button",{className:`article-btn ${d(m)}`,onClick:()=>u(m),disabled:!!i,children:m},m))}),i&&s.jsxs("div",{className:`answer-feedback ${i===a?"correct":"wrong"}`,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{style:{minWidth:0},children:i===a?`✓ Correcto — ${e.german}`:`✗ Es ${a} — ${e.german}`}),s.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Oe(e.german),children:"▶"})]}),s.jsx("button",{className:"continuar-btn",onClick:()=>t(i===a?5:1),children:"Continuar"})]}),i&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"explain-btn",onClick:n,disabled:r,children:r?"Consultando IA…":"✦ Explicar con IA"}),l&&s.jsx("div",{className:"explanation",children:l})]})]})}function cp({cards:e,onGrade:t}){const[n,r]=N.useState(!1),[l,i]=N.useState(!1),[o,a]=N.useState(null),[u,d]=N.useState(0),[y,v]=N.useState(!1),m=Ie.useMemo(()=>{const g=e.filter(S=>S.nextReview<=Date.now());for(let S=g.length-1;S>0;S--){const C=Math.floor(Math.random()*(S+1));[g[S],g[C]]=[g[C],g[S]]}return g},[e.map(g=>g.id+g.nextReview).join(",")]),x=m[0],k=Ie.useCallback(g=>{g&&Oe(g)},[]);Ie.useEffect(()=>{if(n&&((x==null?void 0:x.cardType)==="type1"||(x==null?void 0:x.cardType)==="type2")){const g=x.german,S=setTimeout(()=>k(g),350);return()=>clearTimeout(S)}},[n]);const j=g=>{var C;if(y)return;(C=window.speechSynthesis)==null||C.cancel(),((x==null?void 0:x.cardType)==="type1"||(x==null?void 0:x.cardType)==="type2")&&n?(v(!0),r(!1),setTimeout(()=>{t(x.id,na(x,g)),a(null),d(E=>E+1),v(!1)},560)):(t(x.id,na(x,g)),r(!1),a(null),d(E=>E+1))},L=async()=>{i(!0);try{a(await Zf(x))}catch{a("Error al contactar la API.")}i(!1)};if(!e.length)return s.jsx("div",{className:"deck-empty",children:s.jsxs("p",{children:["No hay tarjetas.",s.jsx("br",{}),"Ve a ",s.jsx("strong",{children:"+ Agregar"})," para crear tu primera."]})});if(!m.length)return s.jsx("div",{className:"deck-empty",children:s.jsxs("p",{children:["Sin repasos pendientes.",s.jsx("br",{}),"Vuelve mañana — el sistema hace el resto."]})});const f=x.cardType||"type1",c=["type4","type5","type6"].includes(f),p=["type1","type2"].includes(f);return s.jsxs("div",{children:[s.jsxs("div",{className:"session-info",children:[s.jsxs("span",{children:["Pendientes: ",s.jsx("strong",{children:m.length})]}),s.jsxs("span",{children:["Total: ",s.jsx("strong",{children:e.length})]})]}),p&&s.jsx("div",{className:"card-scene",onClick:()=>!y&&r(g=>!g),children:s.jsxs("div",{className:`card-inner ${n?"flipped":""}`,children:[s.jsxs("div",{className:"card-face front",children:[f==="type1"&&s.jsx(ep,{card:x}),f==="type2"&&s.jsx(np,{card:x})]}),s.jsxs("div",{className:"card-face back",children:[f==="type1"&&s.jsx(tp,{card:x,onSpeak:k}),f==="type2"&&s.jsx(rp,{card:x})]})]})}),c&&s.jsx("div",{className:"card-scene",children:s.jsxs("div",{className:"card-static",children:[f==="type4"&&s.jsx(lp,{card:x}),f==="type5"&&s.jsx(ip,{card:x}),f==="type6"&&s.jsx(op,{card:x})]})}),c&&s.jsxs(Ie.Fragment,{children:[f==="type4"&&s.jsx(sp,{card:x,onGrade:j,onExplain:L,explaining:l,explanation:o}),f==="type5"&&s.jsx(ap,{card:x,onGrade:j,onExplain:L,explaining:l,explanation:o}),f==="type6"&&s.jsx(up,{card:x,onGrade:j,onExplain:L,explaining:l,explanation:o})]},u),p&&n&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"grades",children:Ho.map(({n:g,label:S})=>s.jsxs("button",{className:`grade-btn g${g}`,onClick:()=>j(g),children:[s.jsx("span",{className:"grade-num",children:g}),s.jsx("span",{className:"grade-label",children:S})]},g))}),s.jsx("button",{className:"explain-btn",onClick:L,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),o&&s.jsx("div",{className:"explanation",children:o})]})]})}function dp({onAdd:e,onBulkAdd:t}){const[n,r]=N.useState("single"),[l,i]=N.useState("type1"),[o,a]=N.useState(""),[u,d]=N.useState(""),[y,v]=N.useState(""),[m,x]=N.useState(""),[k,j]=N.useState(""),[L,f]=N.useState(!1),[c,p]=N.useState(null),[g,S]=N.useState(null),[C,E]=N.useState(null),[h,P]=N.useState("file"),[T,A]=N.useState("file"),[K,Ce]=N.useState(""),[At,Vt]=N.useState(""),[Bt,Wt]=N.useState(""),[z,b]=N.useState(null),[D,B]=N.useState(!0),X=()=>{!o.trim()||!u.trim()||(e({cardType:l,german:o.trim(),translation:u.trim(),note:y.trim(),example:m.trim(),exampleTranslation:k.trim(),imageUrl:c,audioUrl:g}),a(""),d(""),v(""),p(null),S(null),x(""),j(""),f(!0),setTimeout(()=>f(!1),2e3))},Et=async(M,ie)=>{const Ve=M.target.files[0];if(Ve){E(ie);try{const{url:Sn}=await Jf(Ve);ie==="image"?p(Sn):S(Sn)}catch{alert("Error al subir archivo.")}E(null),M.target.value=""}},Ee=(M,ie)=>{const Ve=ie.trim();Ve&&(M==="image"?(p(Ve),Ce("")):(S(Ve),Vt("")))},Ht=M=>{const ie=M==="image"?c:g;!(ie&&(ie.startsWith("http://")||ie.startsWith("https://")))&&ie&&qf(ie),M==="image"?(p(null),Ce("")):(S(null),Vt(""))},Ye=()=>{b(null);let M;try{M=JSON.parse(Bt.trim())}catch{b({ok:!1,msg:"JSON inválido. Revisa la sintaxis."});return}if(!Array.isArray(M)){b({ok:!1,msg:"Debe ser un array [ ... ]."});return}const ie=M.filter(Ve=>{var Sn,Qo;return((Sn=Ve.german)==null?void 0:Sn.trim())&&((Qo=Ve.translation)==null?void 0:Qo.trim())});if(!ie.length){b({ok:!1,msg:'Ningún objeto tiene "german" y "translation".'});return}t(ie,D),Wt(""),b({ok:!0,msg:`✓ ${ie.length} tarjeta${ie.length!==1?"s":""} ${D?"importada":"agregada"}${ie.length!==1?"s":""}.`})};return s.jsxs("div",{className:"add-form",children:[s.jsxs("div",{className:"add-tabs",children:[s.jsx("button",{className:`add-tab ${n==="single"?"active":""}`,onClick:()=>r("single"),children:"Una tarjeta"}),s.jsx("button",{className:`add-tab ${n==="bulk"?"active":""}`,onClick:()=>r("bulk"),children:"Importar JSON"})]}),n==="single"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"type-selector",style:{flexWrap:"wrap"},children:[s.jsxs("button",{className:`type-btn ${l==="type1"?"active":""}`,onClick:()=>i("type1"),children:["Tipo 1",s.jsx("br",{}),"Imagen → Palabra"]}),s.jsxs("button",{className:`type-btn ${l==="type2"?"active":""}`,onClick:()=>i("type2"),children:["Tipo 2",s.jsx("br",{}),"Ejemplo → Traducción"]}),s.jsxs("button",{className:`type-btn ${l==="type4"?"active":""}`,onClick:()=>i("type4"),children:["Tipo 4",s.jsx("br",{}),"ES → escribir DE"]}),s.jsxs("button",{className:`type-btn ${l==="type5"?"active":""}`,onClick:()=>i("type5"),children:["Tipo 5",s.jsx("br",{}),"Completar"]}),s.jsxs("button",{className:`type-btn ${l==="type6"?"active":""}`,onClick:()=>i("type6"),children:["Tipo 6",s.jsx("br",{}),"Artículo"]})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Alemán"}),s.jsx("input",{value:o,onChange:M=>a(M.target.value),placeholder:"z.B. der Schlüssel"})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Traducción"}),s.jsx("input",{value:u,onChange:M=>d(M.target.value),placeholder:"la llave"})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Nota (opcional)"}),s.jsx("textarea",{value:y,onChange:M=>v(M.target.value),placeholder:"artículo, ejemplo, truco…"})]}),(l==="type2"||l==="type5")&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"field",children:[s.jsx("label",{children:l==="type5"?"Oración con ___ (espacio en blanco)":"Ejemplo en alemán"}),s.jsx("input",{value:m,onChange:M=>x(M.target.value),placeholder:l==="type5"?"Der ___ läuft schnell.":"Der Hund läuft schnell."})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Traducción del ejemplo"}),s.jsx("input",{value:k,onChange:M=>j(M.target.value),placeholder:"El perro corre rápido."})]})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{children:["Imagen (opcional) —"," ",s.jsx("button",{className:"mode-toggle",onClick:()=>{P(M=>M==="file"?"url":"file"),p(null),Ce("")},children:h==="file"?"usar URL":"subir archivo"})]}),c?s.jsxs("div",{className:"media-preview",children:[s.jsx("img",{src:lt(c),alt:""}),s.jsx("span",{className:"media-preview-label",children:c.startsWith("http")?"URL externa":c.split("/").pop()}),s.jsx("button",{className:"media-remove",onClick:()=>Ht("image"),children:"×"})]}):h==="file"?s.jsx("div",{className:"media-upload-row",children:s.jsxs("label",{className:"media-upload-btn",children:[C==="image"?s.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir imagen",s.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:M=>Et(M,"image"),disabled:!!C})]})}):s.jsxs("div",{className:"url-input-row",children:[s.jsx("input",{className:"url-input",value:K,onChange:M=>Ce(M.target.value),placeholder:"https://upload.wikimedia.org/…",onKeyDown:M=>M.key==="Enter"&&Ee("image",K)}),s.jsx("button",{className:"url-set-btn",onClick:()=>Ee("image",K),children:"OK"})]})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{children:["Audio (opcional) —"," ",s.jsx("button",{className:"mode-toggle",onClick:()=>{A(M=>M==="file"?"url":"file"),S(null),Vt("")},children:T==="file"?"usar URL":"subir archivo"})]}),g?s.jsxs("div",{className:"media-preview",children:[s.jsx("span",{className:"media-preview-label",children:g.startsWith("http")?"URL externa":g.split("/").pop()}),s.jsx("audio",{src:lt(g),controls:!0,style:{height:"24px",accentColor:"#cc0000"}}),s.jsx("button",{className:"media-remove",onClick:()=>Ht("audio"),children:"×"})]}):T==="file"?s.jsx("div",{className:"media-upload-row",children:s.jsxs("label",{className:"media-upload-btn",children:[C==="audio"?s.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir audio",s.jsx("input",{type:"file",accept:"audio/*",style:{display:"none"},onChange:M=>Et(M,"audio"),disabled:!!C})]})}):s.jsxs("div",{className:"url-input-row",children:[s.jsx("input",{className:"url-input",value:At,onChange:M=>Vt(M.target.value),placeholder:"https://forvo.com/… o link directo a .mp3",onKeyDown:M=>M.key==="Enter"&&Ee("audio",At)}),s.jsx("button",{className:"url-set-btn",onClick:()=>Ee("audio",At),children:"OK"})]})]}),s.jsx("button",{className:"submit-btn",onClick:X,children:"Agregar tarjeta"}),L&&s.jsx("div",{className:"success-msg",children:"✓ Guardada"})]}),n==="bulk"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Array JSON"}),s.jsx("textarea",{className:"bulk-textarea",value:Bt,onChange:M=>Wt(M.target.value),placeholder:`[
  { "german": "der Hund", "translation": "el perro", "note": "masc." },
  { "german": "die Katze", "translation": "la gata" }
]`})]}),s.jsxs("div",{className:"bulk-schema",children:["Campos: ",s.jsx("code",{children:"german"})," ✦ ",s.jsx("code",{children:"translation"})," ✦ ",s.jsx("code",{children:"note"})," (opcional)"]}),s.jsxs("label",{className:"bulk-replace-row",children:[s.jsx("input",{type:"checkbox",checked:D,onChange:M=>B(M.target.checked)}),s.jsx("span",{children:"Reemplazar todo el mazo (desactiva para agregar encima)"})]}),s.jsx("button",{className:"submit-btn",onClick:Ye,children:"Importar"}),z&&s.jsx("div",{className:z.ok?"success-msg":"error-msg",children:z.msg})]})]})}function fp({cards:e}){const t=Date.now(),n=864e5,r=[{label:"Nuevas",color:"#555",count:0},{label:"Hoy",color:"#cc0000",count:0},{label:"Mañana",color:"#dd6600",count:0},{label:"3–7 días",color:"#bb9900",count:0},{label:"8–30 días",color:"#888800",count:0},{label:"+30 días",color:"#446600",count:0}];for(const o of e){const u=(o.nextReview-t)/n;o.repetitions===0?r[0].count++:u<=0?r[1].count++:u<=1?r[2].count++:u<=7?r[3].count++:u<=30?r[4].count++:r[5].count++}const l=Math.max(...r.map(o=>o.count),1),i=e.length;return i?s.jsxs("div",{className:"stats-view",children:[s.jsxs("div",{className:"stats-header",children:[s.jsx("div",{className:"stats-title",children:"Estado del mazo"}),s.jsxs("div",{className:"stats-total",children:[i," tarjeta",i!==1?"s":""," en total"]})]}),s.jsx("div",{className:"stats-chart",children:r.map((o,a)=>{const u=l>0?o.count/l*100:0,d=i>0?Math.round(o.count/i*100):0;return s.jsxs("div",{className:"stats-row",children:[s.jsx("div",{className:"stats-row-label",children:o.label}),s.jsx("div",{className:"stats-bar-wrap",children:s.jsx("div",{className:"stats-bar",style:{width:`${u}%`,background:o.color}})}),s.jsxs("div",{className:"stats-row-count",children:[s.jsx("span",{className:"stats-n",style:{color:o.color},children:o.count}),s.jsxs("span",{className:"stats-pct",children:[d,"%"]})]})]},a)})}),s.jsxs("div",{className:"stats-footer",children:[s.jsxs("div",{className:"stats-kpi",children:[s.jsx("div",{className:"kpi-val",style:{color:"#cc0000"},children:r[0].count+r[1].count}),s.jsx("div",{className:"kpi-label",children:"para estudiar hoy"})]}),s.jsxs("div",{className:"stats-kpi",children:[s.jsx("div",{className:"kpi-val",style:{color:"#ffcc00"},children:e.filter(o=>o.repetitions>0&&o.interval>=21).length}),s.jsx("div",{className:"kpi-label",children:"maduras (≥21 días)"})]}),s.jsxs("div",{className:"stats-kpi",children:[s.jsx("div",{className:"kpi-val",style:{color:"#aaa"},children:i>0?(e.reduce((o,a)=>o+a.easiness,0)/i).toFixed(2):"—"}),s.jsx("div",{className:"kpi-label",children:"easiness promedio"})]})]})]}):s.jsx("div",{className:"deck-empty",children:s.jsxs("p",{children:["Sin tarjetas aún.",s.jsx("br",{}),"Ve a ",s.jsx("strong",{children:"+ Agregar"})," para empezar."]})})}function pp({card:e,onSave:t,onClose:n}){const[r,l]=N.useState(e.imageUrl||""),[i,o]=N.useState(null),[a,u]=N.useState(!1),d=()=>{const y=r.trim();t({...e,imageUrl:y||null}),o("ok"),setTimeout(n,800)};return s.jsx("div",{className:"img-preview-overlay",onClick:n,children:s.jsxs("div",{className:"img-preview-dialog",onClick:y=>y.stopPropagation(),children:[s.jsxs("div",{className:"img-preview-header",children:[s.jsx("div",{className:"img-preview-word",children:e.german}),s.jsx("button",{className:"img-preview-close",onClick:n,children:"×"})]}),s.jsx("div",{className:"img-preview-frame",children:e.imageUrl&&!a?s.jsx("img",{src:lt(e.imageUrl),alt:"",onError:()=>u(!0)}):s.jsxs("div",{className:"img-preview-broken",children:[s.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),s.jsx("div",{children:a?"Imagen rota":"Sin imagen"})]})}),s.jsxs("div",{className:"img-preview-url-row",children:[s.jsx("input",{className:"img-preview-url-input",value:r,onChange:y=>{l(y.target.value),u(!1),o(null)},placeholder:"https://upload.wikimedia.org/…",onKeyDown:y=>y.key==="Enter"&&d()}),s.jsx("button",{className:"img-preview-save-btn",onClick:d,children:"Guardar"})]}),i==="ok"&&s.jsx("div",{className:"img-preview-status ok",children:"✓ Guardado"})]})})}function mp({card:e,onClose:t}){var i;const n=e.cardType||"type1";(i=e.german.match(/^(der|die|das)/i))!=null&&i[1];const r=e.german.replace(/^(der|die|das)\s+/i,""),l=(e.example||"").replace("___",e.german);return s.jsx("div",{className:"img-preview-overlay",onClick:t,children:s.jsxs("div",{className:"card-preview-dialog",onClick:o=>o.stopPropagation(),children:[s.jsxs("div",{className:"img-preview-header",children:[s.jsxs("div",{className:"img-preview-word",children:[s.jsxs("span",{style:{fontSize:"0.6rem",color:"#555",letterSpacing:"0.1em",textTransform:"uppercase",marginRight:"0.5rem"},children:["Tipo ",n.replace("type","")]}),e.german]}),s.jsx("button",{className:"img-preview-close",onClick:t,children:"×"})]}),s.jsxs("div",{className:"card-preview-side",children:[s.jsx("div",{className:"card-preview-label",children:"Frente"}),n==="type1"&&s.jsx("div",{className:"card-preview-body",children:e.imageUrl?s.jsx("img",{src:lt(e.imageUrl),alt:"",className:"card-preview-img",onError:o=>o.target.style.display="none"}):s.jsxs("div",{className:"img-preview-broken",children:[s.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),s.jsx("div",{children:"Sin imagen"})]})}),n==="type2"&&s.jsxs("div",{className:"card-preview-body",children:[s.jsx("div",{className:"card-preview-big",children:e.german}),e.example&&s.jsx("div",{className:"card-preview-example",children:e.example})]}),n==="type4"&&s.jsxs("div",{className:"card-preview-body",children:[s.jsx("div",{className:"card-preview-trans",children:e.translation}),e.note&&s.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type5"&&s.jsx("div",{className:"card-preview-body",children:s.jsx("div",{className:"card-preview-example",children:(e.example||"").replace("___","_____")})}),n==="type6"&&s.jsxs("div",{className:"card-preview-body",children:[e.imageUrl&&s.jsx("img",{src:lt(e.imageUrl),alt:"",className:"card-preview-img",onError:o=>o.target.style.display="none"}),s.jsxs("div",{className:"card-preview-big",style:{color:"#888"},children:["___ ",r]})]})]}),s.jsxs("div",{className:"card-preview-side",children:[s.jsx("div",{className:"card-preview-label",children:"Dorso"}),s.jsxs("div",{className:"card-preview-body",children:[(n==="type1"||n==="type6")&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"card-preview-big",children:e.german}),e.note&&s.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type2"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"card-preview-trans",children:e.translation}),e.exampleTranslation&&s.jsxs("div",{className:"card-preview-example",style:{color:"#666"},children:['"',e.exampleTranslation,'"']})]}),(n==="type4"||n==="type5")&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"card-preview-big",children:e.german}),n==="type5"&&l&&s.jsx("div",{className:"card-preview-example",children:l})]})]})]}),s.jsx("button",{className:"continuar-btn",style:{alignSelf:"center"},onClick:t,children:"Cerrar"})]})})}function hp({card:e,onSave:t,onClose:n}){const[r,l]=N.useState(e.cardType||"type1"),[i,o]=N.useState(e.german),[a,u]=N.useState(e.translation),[d,y]=N.useState(e.note||""),[v,m]=N.useState(e.example||""),[x,k]=N.useState(e.exampleTranslation||""),[j,L]=N.useState(e.imageUrl||""),[f,c]=N.useState(e.audioUrl||""),p=()=>{!i.trim()||!a.trim()||t({...e,cardType:r,german:i.trim(),translation:a.trim(),note:d.trim(),example:v.trim(),exampleTranslation:x.trim(),imageUrl:j.trim()||null,audioUrl:f.trim()||null})};return s.jsx("div",{className:"confirm-overlay",onClick:n,children:s.jsxs("div",{className:"edit-dialog",onClick:g=>g.stopPropagation(),children:[s.jsx("div",{className:"confirm-title",children:"Editar tarjeta"}),s.jsxs("div",{className:"edit-fields",children:[s.jsxs("div",{className:"type-selector",style:{flexWrap:"wrap"},children:[s.jsx("button",{className:`type-btn ${r==="type1"?"active":""}`,onClick:()=>l("type1"),children:"Tipo 1"}),s.jsx("button",{className:`type-btn ${r==="type2"?"active":""}`,onClick:()=>l("type2"),children:"Tipo 2"}),s.jsx("button",{className:`type-btn ${r==="type4"?"active":""}`,onClick:()=>l("type4"),children:"Tipo 4"}),s.jsx("button",{className:`type-btn ${r==="type5"?"active":""}`,onClick:()=>l("type5"),children:"Tipo 5"}),s.jsx("button",{className:`type-btn ${r==="type6"?"active":""}`,onClick:()=>l("type6"),children:"Tipo 6"})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Alemán"}),s.jsx("input",{value:i,onChange:g=>o(g.target.value)})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Traducción"}),s.jsx("input",{value:a,onChange:g=>u(g.target.value)})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Nota"}),s.jsx("input",{value:d,onChange:g=>y(g.target.value),placeholder:"artículo, truco…"})]}),r==="type2"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Ejemplo en alemán"}),s.jsx("input",{value:v,onChange:g=>m(g.target.value)})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Traducción del ejemplo"}),s.jsx("input",{value:x,onChange:g=>k(g.target.value)})]})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"URL imagen"}),s.jsx("input",{value:j,onChange:g=>L(g.target.value),placeholder:"https://…"})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"URL audio"}),s.jsx("input",{value:f,onChange:g=>c(g.target.value),placeholder:"https://…"})]})]}),s.jsxs("div",{className:"confirm-actions",children:[s.jsx("button",{className:"confirm-cancel",onClick:n,children:"Cancelar"}),s.jsx("button",{className:"confirm-ok",onClick:p,children:"Guardar"})]})]})})}function gp({card:e,onClick:t}){const[n,r]=N.useState(!1);return Ie.useEffect(()=>{r(!1)},[e.imageUrl]),!e.imageUrl||n?s.jsx("button",{className:"preview-btn",onClick:t,title:"Sin imagen — click para agregar",children:s.jsx("div",{className:"preview-thumb-empty",children:"+"})}):s.jsx("button",{className:"preview-btn",onClick:t,title:"Vista previa de imagen",children:s.jsx("img",{className:"preview-thumb",src:lt(e.imageUrl),alt:"",onError:()=>r(!0)})})}function vp({cards:e,onDelete:t,onDeleteAll:n,onEdit:r}){const[l,i]=N.useState(!1),o=()=>{const h=JSON.stringify(e,null,2),P=new Blob([h],{type:"application/json"}),T=URL.createObjectURL(P),A=document.createElement("a"),K=new Date().toISOString().slice(0,10);A.href=T,A.download=`deutschkarten-backup-${K}.json`,A.click(),URL.revokeObjectURL(T)},[a,u]=N.useState(""),[d,y]=N.useState(null),[v,m]=N.useState(null),[x,k]=N.useState(null),[j,L]=N.useState(null),f=Ie.useRef(null),[c,p]=N.useState("all"),g=h=>{f.current&&clearTimeout(f.current),L(h),f.current=setTimeout(()=>L(null),2200)},S=e.filter(h=>h.cardType==="type1"||h.cardType==="type5"||h.cardType==="type6"),C=[...e].sort((h,P)=>h.nextReview-P.nextReview).filter(h=>{if(a.trim()){const P=a.toLowerCase();if(!h.german.toLowerCase().includes(P)&&!h.translation.toLowerCase().includes(P)&&!(h.note||"").toLowerCase().includes(P))return!1}return c==="broken"?(h.cardType==="type1"||h.cardType==="type5"||h.cardType==="type6")&&!h.imageUrl:c==="ok"?(h.cardType==="type1"||h.cardType==="type5"||h.cardType==="type6")&&!!h.imageUrl:!0}),E=S.filter(h=>!h.imageUrl).length;return s.jsxs("div",{children:[s.jsxs("div",{className:"list-header",children:[s.jsx("div",{className:"list-title",children:"Todas las tarjetas"}),s.jsxs("div",{className:"list-header-right",children:[s.jsxs("div",{className:"list-count",children:[e.length," total"]}),e.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"export-btn",onClick:o,title:"Exportar backup JSON",children:"↓ Backup"}),s.jsx("button",{className:"delete-all-btn",onClick:()=>i(!0),children:"Borrar todo"})]})]})]}),s.jsxs("div",{className:"list-search-wrap",children:[s.jsx("input",{className:"list-search",value:a,onChange:h=>u(h.target.value),placeholder:"Buscar por palabra, traducción o nota…"}),a&&s.jsx("button",{className:"list-search-clear",onClick:()=>u(""),children:"×"})]}),s.jsxs("div",{className:"list-filter-row",children:[s.jsx("button",{className:`list-filter-btn ${c==="all"?"active":""}`,onClick:()=>p("all"),children:"Todas"}),s.jsxs("button",{className:`list-filter-btn ${c==="broken"?"active":""}`,onClick:()=>p("broken"),children:["Sin imagen ",E>0&&`(${E})`]}),s.jsx("button",{className:`list-filter-btn ${c==="ok"?"active":""}`,onClick:()=>p("ok"),children:"Con imagen"})]}),l&&s.jsx("div",{className:"confirm-overlay",onClick:()=>i(!1),children:s.jsxs("div",{className:"confirm-dialog",onClick:h=>h.stopPropagation(),children:[s.jsx("div",{className:"confirm-title",children:"¿Borrar todo el mazo?"}),s.jsxs("div",{className:"confirm-body",children:["Se eliminarán ",s.jsxs("strong",{children:[e.length," tarjeta",e.length!==1?"s":""]})," y todo su progreso. Esta acción no se puede deshacer."]}),s.jsxs("div",{className:"confirm-actions",children:[s.jsx("button",{className:"confirm-cancel",onClick:()=>i(!1),children:"Cancelar"}),s.jsx("button",{className:"confirm-ok",onClick:()=>{n(),i(!1)},children:"Sí, borrar todo"})]})]})}),d&&s.jsx(hp,{card:d,onSave:h=>{r(h),y(null),g(`✓ "${h.german}" actualizado`)},onClose:()=>y(null)}),v&&s.jsx(pp,{card:v,onSave:h=>{r(h),m(h),g("✓ Imagen actualizada")},onClose:()=>m(null)}),x&&s.jsx(mp,{card:x,onClose:()=>k(null)}),s.jsxs("div",{className:"card-list",children:[C.length===0&&s.jsx("div",{className:"list-empty",children:a?`Sin resultados para "${a}"`:"Sin tarjetas en este filtro"}),C.map(h=>{const P=h.nextReview<=Date.now(),T=h.cardType==="type1"||h.cardType==="type5"||h.cardType==="type6";return s.jsxs("div",{className:"list-item",children:[T?s.jsx(gp,{card:h,onClick:()=>m(h)}):s.jsx("div",{style:{width:"28px"}}),s.jsxs("div",{className:"li-main",children:[s.jsx("div",{className:"li-german",children:h.german}),s.jsx("div",{className:"li-trans",children:h.translation}),h.note&&s.jsx("div",{className:"li-note",children:h.note})]}),s.jsx("div",{className:`li-next ${P?"due":""}`,children:Gf(h.nextReview)}),s.jsx("button",{className:"preview-card-btn",onClick:()=>k(h),title:"Vista previa",children:s.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:[s.jsx("path",{d:"M6.5 1C3.5 1 1 4 1 5C1 6 3.5 9 6.5 9C9.5 9 12 6 12 5C12 4 9.5 1 6.5 1Z",stroke:"currentColor",strokeWidth:"1.1",fill:"none"}),s.jsx("circle",{cx:"6.5",cy:"5",r:"1.5",stroke:"currentColor",strokeWidth:"1.1",fill:"none"})]})}),s.jsx("button",{className:"edit-btn",onClick:()=>y(h),children:"✎"}),s.jsx("button",{className:"delete-btn",onClick:()=>t(h.id),children:"×"})]},h.id)})]})]})}const yp=[{code:"de",label:"Deutsch",flag:s.jsxs("svg",{viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",style:{width:28,flexShrink:0},children:[s.jsx("rect",{width:"28",height:"6.33",y:"0",fill:"#000"}),s.jsx("rect",{width:"28",height:"6.34",y:"6.33",fill:"#D00"}),s.jsx("rect",{width:"28",height:"6.33",y:"12.67",fill:"#FFCE00"})]}),accent:"#FFCE00"},{code:"fr",label:"Français",flag:s.jsxs("svg",{viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",style:{width:28,flexShrink:0},children:[s.jsx("rect",{width:"9.33",height:"19",x:"0",fill:"#002395"}),s.jsx("rect",{width:"9.34",height:"19",x:"9.33",fill:"#fff"}),s.jsx("rect",{width:"9.33",height:"19",x:"18.67",fill:"#ED2939"})]}),accent:"#ED2939"}];function xp({onAuth:e}){const[t,n]=N.useState(""),[r,l]=N.useState(""),[i,o]=N.useState(null),[a,u]=N.useState(!1),d=yp.find(v=>v.code==="de");async function y(v){v.preventDefault(),o(null),u(!0);try{const m=await pr("/auth/login",{method:"POST",body:JSON.stringify({username:t,password:r})});m.token&&Xf(m.token),e(m.username,m.language||"de")}catch(m){o(m.message)}finally{u(!1)}}return s.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#111111"},children:[s.jsxs("style",{children:[Yi,wc]}),s.jsxs("div",{style:{width:"100%",maxWidth:380,padding:"2.5rem 2rem",background:"#1a1a1a",borderRadius:12,border:"1px solid #2a2a2a"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:"2rem"},children:[d.flag,s.jsxs("span",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.4rem",color:"#f0ece0"},children:["Sprachen",s.jsx("span",{style:{color:d.accent},children:"Karten"})]})]}),s.jsxs("form",{onSubmit:y,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsx("input",{type:"text",placeholder:"Usuario",value:t,autoComplete:"username",onChange:v=>n(v.target.value),required:!0,style:{padding:"0.7rem 1rem",borderRadius:6,border:"1px solid #333",background:"#222",color:"#f0ece0",fontFamily:"'DM Mono', monospace",fontSize:"0.9rem",outline:"none"}}),s.jsx("input",{type:"password",placeholder:"Contraseña",value:r,autoComplete:"current-password",onChange:v=>l(v.target.value),required:!0,style:{padding:"0.7rem 1rem",borderRadius:6,border:"1px solid #333",background:"#222",color:"#f0ece0",fontFamily:"'DM Mono', monospace",fontSize:"0.9rem",outline:"none"}}),i&&s.jsx("p",{style:{color:"#e05c5c",fontSize:"0.8rem",margin:0},children:i}),s.jsx("button",{type:"submit",disabled:a,style:{padding:"0.75rem",borderRadius:6,border:"none",cursor:"pointer",background:d.accent,color:"#111",fontFamily:"'DM Mono', monospace",fontSize:"0.9rem",fontWeight:600,opacity:a?.6:1},children:a?"…":"Entrar"})]})]})]})}function wp(){const[e,t]=N.useState(null),[n,r]=N.useState("de"),[l,i]=N.useState([]),[o,a]=N.useState(!1),[u,d]=N.useState("study"),[y,v]=N.useState(!1);N.useEffect(()=>{if(!xc()){t(!1);return}(async()=>{try{const h=await pr("/auth/me"),P=await la();t(h.username),r(h.language||"de"),i(P),a(!0)}catch{ra(),t(!1)}})()},[]),N.useEffect(()=>{if(!e||!o)return;const h=setTimeout(()=>{ia(l).catch(()=>{})},800);return()=>clearTimeout(h)},[l,e,o]);const m=N.useRef(l);N.useEffect(()=>{m.current=l},[l]);const x=N.useRef(e);N.useEffect(()=>{x.current=e},[e]);const k=N.useRef(o);N.useEffect(()=>{k.current=o},[o]),N.useEffect(()=>{const h=()=>{if(!x.current||!k.current)return;const P=m.current,T=P.length===0?"?allowEmpty=true":"";fetch(`${fr}/cards${T}`,{method:"PUT",headers:{"Content-Type":"application/json",...Tl()},body:JSON.stringify(P),keepalive:!0})};return window.addEventListener("beforeunload",h),()=>window.removeEventListener("beforeunload",h)},[]);async function j(){o&&await ia(l).catch(()=>{}),ra(),a(!1),t(!1),i([])}async function L(h,P){a(!1),t(h),r(P||"de");try{const T=await la();i(T),a(!0)}catch{i([])}}const f=N.useCallback(h=>{const P={id:Date.now().toString(),cardType:h.cardType||"type1",german:h.german,translation:h.translation,note:h.note||"",example:h.example||"",exampleTranslation:h.exampleTranslation||"",imageUrl:h.imageUrl||null,audioUrl:h.audioUrl||null,repetitions:0,easiness:2.5,interval:0,nextReview:Date.now(),lastGrade:null};i(T=>[...T,P])},[]),c=N.useCallback((h,P)=>{i(T=>T.map(A=>A.id===h?{...A,...P}:A))},[]),p=N.useCallback(h=>{i(P=>P.filter(T=>T.id!==h))},[]),g=N.useCallback(()=>{i([])},[]),S=N.useCallback(h=>{i(P=>P.map(T=>T.id===h.id?h:T))},[]),C=N.useCallback((h,P=!1)=>{const T=Date.now(),A=h.map((K,Ce)=>({id:(T+Ce).toString(),german:K.german.trim(),translation:K.translation.trim(),note:(K.note||"").trim(),cardType:K.cardType||"type1",imageUrl:K.imageUrl||null,audioUrl:K.audioUrl||null,example:K.example||"",exampleTranslation:K.exampleTranslation||"",repetitions:0,easiness:2.5,interval:0,nextReview:T,lastGrade:null}));i(K=>P?A:[...K,...A])},[]);if(e===null)return s.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#111111",color:"#888",fontFamily:"'DM Mono', monospace"},children:[s.jsx("style",{children:Yi}),"Cargando…"]});if(e===!1)return s.jsx(xp,{onAuth:L});const E=[{id:"study",label:"Repasar"},{id:"add",label:"+ Agregar"},{id:"list",label:"Lista"},{id:"stats",label:"Estado"}];return s.jsxs(s.Fragment,{children:[s.jsxs("style",{children:[Yi,wc]}),s.jsx("div",{className:"noise"}),s.jsxs("div",{className:"app",children:[s.jsxs("header",{className:"header",children:[s.jsxs("div",{className:"logo",children:[n==="fr"?s.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("rect",{width:"9.33",height:"19",x:"0",fill:"#002395"}),s.jsx("rect",{width:"9.34",height:"19",x:"9.33",fill:"#fff"}),s.jsx("rect",{width:"9.33",height:"19",x:"18.67",fill:"#ED2939"})]}):s.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("rect",{width:"28",height:"6.33",y:"0",fill:"#000"}),s.jsx("rect",{width:"28",height:"6.34",y:"6.33",fill:"#D00"}),s.jsx("rect",{width:"28",height:"6.33",y:"12.67",fill:"#FFCE00"})]}),s.jsx("div",{className:"logo-text",children:n==="fr"?s.jsxs(s.Fragment,{children:["Français",s.jsx("span",{children:"Cartes"})]}):s.jsxs(s.Fragment,{children:["Deutsch",s.jsx("span",{children:"Karten"})]})})]}),s.jsxs("nav",{className:"nav",children:[E.map(h=>s.jsx("button",{className:`nav-btn ${u===h.id?"active":""}`,onClick:()=>d(h.id),children:h.label},h.id)),s.jsxs("button",{className:"nav-btn",onClick:j,title:`Sesión: ${e}`,style:{marginLeft:"auto",opacity:.6},children:["↩ ",e]})]}),s.jsx("button",{className:"hamburger-btn",onClick:()=>v(h=>!h),"aria-label":"Menú","aria-expanded":y,children:y?"✕":"☰"}),y&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"menu-backdrop",onClick:()=>v(!1)}),s.jsxs("div",{className:"menu-panel",children:[E.map(h=>s.jsx("button",{className:`menu-item ${u===h.id?"active":""}`,onClick:()=>{d(h.id),v(!1)},children:h.label},h.id)),s.jsxs("button",{className:"menu-item menu-logout",onClick:()=>{v(!1),j()},children:["↩ ",e]})]})]})]}),u==="study"&&s.jsx(cp,{cards:l,onGrade:c,onUpdateCards:i}),u==="add"&&s.jsx(dp,{onAdd:h=>{f(h),d("study")},onBulkAdd:(h,P)=>{C(h,P),d("list")}}),u==="list"&&s.jsx(vp,{cards:l,onDelete:p,onDeleteAll:g,onEdit:S}),u==="stats"&&s.jsx(fp,{cards:l})]})]})}yc(document.getElementById("root")).render(s.jsx(N.StrictMode,{children:s.jsx(wp,{})}));
