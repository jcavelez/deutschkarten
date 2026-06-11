(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=r(l);fetch(l.href,o)}})();var Ls={exports:{}},jl={},Fs={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mn=Symbol.for("react.element"),rd=Symbol.for("react.portal"),nd=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),id=Symbol.for("react.provider"),ad=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),cd=Symbol.for("react.memo"),dd=Symbol.for("react.lazy"),da=Symbol.iterator;function fd(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var Rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ds=Object.assign,Ms={};function Sr(e,t,r){this.props=e,this.context=t,this.refs=Ms,this.updater=r||Rs}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Is(){}Is.prototype=Sr.prototype;function si(e,t,r){this.props=e,this.context=t,this.refs=Ms,this.updater=r||Rs}var ui=si.prototype=new Is;ui.constructor=si;Ds(ui,Sr.prototype);ui.isPureReactComponent=!0;var fa=Array.isArray,Os=Object.prototype.hasOwnProperty,ci={current:null},Us={key:!0,ref:!0,__self:!0,__source:!0};function As(e,t,r){var n,l={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Os.call(t,n)&&!Us.hasOwnProperty(n)&&(l[n]=t[n]);var s=arguments.length-2;if(s===1)l.children=r;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)l[n]===void 0&&(l[n]=s[n]);return{$$typeof:mn,type:e,key:o,ref:a,props:l,_owner:ci.current}}function pd(e,t){return{$$typeof:mn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function di(e){return typeof e=="object"&&e!==null&&e.$$typeof===mn}function md(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var pa=/\/+/g;function Ul(e,t){return typeof e=="object"&&e!==null&&e.key!=null?md(""+e.key):t.toString(36)}function Un(e,t,r,n,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case mn:case rd:a=!0}}if(a)return a=e,l=l(a),e=n===""?"."+Ul(a,0):n,fa(l)?(r="",e!=null&&(r=e.replace(pa,"$&/")+"/"),Un(l,t,r,"",function(d){return d})):l!=null&&(di(l)&&(l=pd(l,r+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(pa,"$&/")+"/")+e)),t.push(l)),1;if(a=0,n=n===""?".":n+":",fa(e))for(var s=0;s<e.length;s++){o=e[s];var u=n+Ul(o,s);a+=Un(o,t,r,u,l)}else if(u=fd(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=n+Ul(o,s++),a+=Un(o,t,r,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function kn(e,t,r){if(e==null)return e;var n=[],l=0;return Un(e,n,"","",function(o){return t.call(r,o,l++)}),n}function hd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},An={transition:null},vd={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:An,ReactCurrentOwner:ci};function $s(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:kn,forEach:function(e,t,r){kn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return kn(e,function(){t++}),t},toArray:function(e){return kn(e,function(t){return t})||[]},only:function(e){if(!di(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Sr;M.Fragment=nd;M.Profiler=od;M.PureComponent=si;M.StrictMode=ld;M.Suspense=ud;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vd;M.act=$s;M.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Ds({},e.props),l=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ci.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Os.call(t,u)&&!Us.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];n.children=s}return{$$typeof:mn,type:e.type,key:l,ref:o,props:n,_owner:a}};M.createContext=function(e){return e={$$typeof:ad,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:id,_context:e},e.Consumer=e};M.createElement=As;M.createFactory=function(e){var t=As.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:sd,render:e}};M.isValidElement=di;M.lazy=function(e){return{$$typeof:dd,_payload:{_status:-1,_result:e},_init:hd}};M.memo=function(e,t){return{$$typeof:cd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=An.transition;An.transition={};try{e()}finally{An.transition=t}};M.unstable_act=$s;M.useCallback=function(e,t){return ve.current.useCallback(e,t)};M.useContext=function(e){return ve.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};M.useEffect=function(e,t){return ve.current.useEffect(e,t)};M.useId=function(){return ve.current.useId()};M.useImperativeHandle=function(e,t,r){return ve.current.useImperativeHandle(e,t,r)};M.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ve.current.useMemo(e,t)};M.useReducer=function(e,t,r){return ve.current.useReducer(e,t,r)};M.useRef=function(e){return ve.current.useRef(e)};M.useState=function(e){return ve.current.useState(e)};M.useSyncExternalStore=function(e,t,r){return ve.current.useSyncExternalStore(e,t,r)};M.useTransition=function(){return ve.current.useTransition()};M.version="18.3.1";Fs.exports=M;var j=Fs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=j,yd=Symbol.for("react.element"),xd=Symbol.for("react.fragment"),wd=Object.prototype.hasOwnProperty,kd=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jd={key:!0,ref:!0,__self:!0,__source:!0};function Bs(e,t,r){var n,l={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)wd.call(t,n)&&!jd.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)l[n]===void 0&&(l[n]=t[n]);return{$$typeof:yd,type:e,key:o,ref:a,props:l,_owner:kd.current}}jl.Fragment=xd;jl.jsx=Bs;jl.jsxs=Bs;Ls.exports=jl;var i=Ls.exports,Vs={exports:{}},ze={},Ws={exports:{}},Hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,F){var R=z.length;z.push(F);e:for(;0<R;){var Q=R-1>>>1,q=z[Q];if(0<l(q,F))z[Q]=F,z[R]=q,R=Q;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var F=z[0],R=z.pop();if(R!==F){z[0]=R;e:for(var Q=0,q=z.length,ct=q>>>1;Q<ct;){var Te=2*(Q+1)-1,Yt=z[Te],Je=Te+1,Kt=z[Je];if(0>l(Yt,R))Je<q&&0>l(Kt,Yt)?(z[Q]=Kt,z[Je]=R,Q=Je):(z[Q]=Yt,z[Te]=R,Q=Te);else if(Je<q&&0>l(Kt,R))z[Q]=Kt,z[Je]=R,Q=Je;else break e}}return F}function l(z,F){var R=z.sortIndex-F.sortIndex;return R!==0?R:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],m=1,h=null,v=3,w=!1,k=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var F=r(d);F!==null;){if(F.callback===null)n(d);else if(F.startTime<=z)n(d),F.sortIndex=F.expirationTime,t(u,F);else break;F=r(d)}}function x(z){if(N=!1,p(z),!k)if(r(u)!==null)k=!0,K(E);else{var F=r(d);F!==null&&I(x,F.startTime-z)}}function E(z,F){k=!1,N&&(N=!1,f(y),y=-1),w=!0;var R=v;try{for(p(F),h=r(u);h!==null&&(!(h.expirationTime>F)||z&&!V());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,v=h.priorityLevel;var q=Q(h.expirationTime<=F);F=e.unstable_now(),typeof q=="function"?h.callback=q:h===r(u)&&n(u),p(F)}else n(u);h=r(u)}if(h!==null)var ct=!0;else{var Te=r(d);Te!==null&&I(x,Te.startTime-F),ct=!1}return ct}finally{h=null,v=R,w=!1}}var g=!1,C=null,y=-1,L=5,b=-1;function V(){return!(e.unstable_now()-b<L)}function pe(){if(C!==null){var z=e.unstable_now();b=z;var F=!0;try{F=C(!0,z)}finally{F?_():(g=!1,C=null)}}else g=!1}var _;if(typeof c=="function")_=function(){c(pe)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,$=U.port2;U.port1.onmessage=pe,_=function(){$.postMessage(null)}}else _=function(){D(pe,0)};function K(z){C=z,g||(g=!0,_())}function I(z,F){y=D(function(){z(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,K(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(z){switch(v){case 1:case 2:case 3:var F=3;break;default:F=v}var R=v;v=F;try{return z()}finally{v=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var R=v;v=z;try{return F()}finally{v=R}},e.unstable_scheduleCallback=function(z,F,R){var Q=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Q+R:Q):R=Q,z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,z={id:m++,callback:F,priorityLevel:z,startTime:R,expirationTime:q,sortIndex:-1},R>Q?(z.sortIndex=R,t(d,z),r(u)===null&&z===r(d)&&(N?(f(y),y=-1):N=!0,I(x,R-Q))):(z.sortIndex=q,t(u,z),k||w||(k=!0,K(E))),z},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(z){var F=v;return function(){var R=v;v=F;try{return z.apply(this,arguments)}finally{v=R}}}})(Hs);Ws.exports=Hs;var Sd=Ws.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=j,Ee=Sd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qs=new Set,Kr={};function Wt(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(Kr[e]=t,e=0;e<t.length;e++)Qs.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),po=Object.prototype.hasOwnProperty,bd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ma={},ha={};function Cd(e){return po.call(ha,e)?!0:po.call(ma,e)?!1:bd.test(e)?ha[e]=!0:(ma[e]=!0,!1)}function Ed(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zd(e,t,r,n){if(t===null||typeof t>"u"||Ed(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,r,n,l,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var fi=/[\-:]([a-z])/g;function pi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fi,pi);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fi,pi);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fi,pi);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function mi(e,t,r,n){var l=se.hasOwnProperty(t)?se[t]:null;(l!==null?l.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zd(t,r,l,n)&&(r=null),n||l===null?Cd(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,n=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ut=Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jn=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),hi=Symbol.for("react.strict_mode"),mo=Symbol.for("react.profiler"),Ys=Symbol.for("react.provider"),Ks=Symbol.for("react.context"),vi=Symbol.for("react.forward_ref"),ho=Symbol.for("react.suspense"),vo=Symbol.for("react.suspense_list"),gi=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Gs=Symbol.for("react.offscreen"),va=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=va&&e[va]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Al;function Dr(e){if(Al===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Al=t&&t[1]||""}return`
`+Al+e}var $l=!1;function Bl(e,t){if(!e||$l)return"";$l=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=n.stack.split(`
`),a=l.length-1,s=o.length-1;1<=a&&0<=s&&l[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==o[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{$l=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Dr(e):""}function _d(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Bl(e.type,!1),e;case 11:return e=Bl(e.type.render,!1),e;case 1:return e=Bl(e.type,!0),e;default:return""}}function go(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Xt:return"Portal";case mo:return"Profiler";case hi:return"StrictMode";case ho:return"Suspense";case vo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ks:return(e.displayName||"Context")+".Consumer";case Ys:return(e._context.displayName||"Context")+".Provider";case vi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gi:return t=e.displayName||null,t!==null?t:go(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return go(e(t))}catch{}}return null}function Td(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return go(t);case 8:return t===hi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pd(e){var t=Xs(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sn(e){e._valueTracker||(e._valueTracker=Pd(e))}function Zs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Xs(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yo(e,t){var r=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ga(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ct(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Js(e,t){t=t.checked,t!=null&&mi(e,"checked",t,!1)}function xo(e,t){Js(e,t);var r=Ct(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wo(e,t.type,r):t.hasOwnProperty("defaultValue")&&wo(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ya(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function wo(e,t,r){(t!=="number"||Zn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Mr=Array.isArray;function sr(e,t,r,n){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ct(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ko(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xa(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(S(92));if(Mr(r)){if(1<r.length)throw Error(S(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ct(r)}}function qs(e,t){var r=Ct(t.value),n=Ct(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function eu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?eu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nn,tu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nn=Nn||document.createElement("div"),Nn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ld=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){Ld.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function ru(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function nu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,l=ru(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,l):e[r]=l}}var Fd=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function So(e,t){if(t){if(Fd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function No(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bo=null;function yi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Co=null,ur=null,cr=null;function ka(e){if(e=gn(e)){if(typeof Co!="function")throw Error(S(280));var t=e.stateNode;t&&(t=El(t),Co(e.stateNode,e.type,t))}}function lu(e){ur?cr?cr.push(e):cr=[e]:ur=e}function ou(){if(ur){var e=ur,t=cr;if(cr=ur=null,ka(e),t)for(e=0;e<t.length;e++)ka(t[e])}}function iu(e,t){return e(t)}function au(){}var Vl=!1;function su(e,t,r){if(Vl)return e(t,r);Vl=!0;try{return iu(e,t,r)}finally{Vl=!1,(ur!==null||cr!==null)&&(au(),ou())}}function Xr(e,t){var r=e.stateNode;if(r===null)return null;var n=El(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(S(231,t,typeof r));return r}var Eo=!1;if(lt)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Eo=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Eo=!1}function Rd(e,t,r,n,l,o,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(m){this.onError(m)}}var Ar=!1,Jn=null,qn=!1,zo=null,Dd={onError:function(e){Ar=!0,Jn=e}};function Md(e,t,r,n,l,o,a,s,u){Ar=!1,Jn=null,Rd.apply(Dd,arguments)}function Id(e,t,r,n,l,o,a,s,u){if(Md.apply(this,arguments),Ar){if(Ar){var d=Jn;Ar=!1,Jn=null}else throw Error(S(198));qn||(qn=!0,zo=d)}}function Ht(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function uu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ja(e){if(Ht(e)!==e)throw Error(S(188))}function Od(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(S(188));return t!==e?null:e}for(var r=e,n=t;;){var l=r.return;if(l===null)break;var o=l.alternate;if(o===null){if(n=l.return,n!==null){r=n;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===r)return ja(l),e;if(o===n)return ja(l),t;o=o.sibling}throw Error(S(188))}if(r.return!==n.return)r=l,n=o;else{for(var a=!1,s=l.child;s;){if(s===r){a=!0,r=l,n=o;break}if(s===n){a=!0,n=l,r=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===r){a=!0,r=o,n=l;break}if(s===n){a=!0,n=o,r=l;break}s=s.sibling}if(!a)throw Error(S(189))}}if(r.alternate!==n)throw Error(S(190))}if(r.tag!==3)throw Error(S(188));return r.stateNode.current===r?e:t}function cu(e){return e=Od(e),e!==null?du(e):null}function du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=du(e);if(t!==null)return t;e=e.sibling}return null}var fu=Ee.unstable_scheduleCallback,Sa=Ee.unstable_cancelCallback,Ud=Ee.unstable_shouldYield,Ad=Ee.unstable_requestPaint,ee=Ee.unstable_now,$d=Ee.unstable_getCurrentPriorityLevel,xi=Ee.unstable_ImmediatePriority,pu=Ee.unstable_UserBlockingPriority,el=Ee.unstable_NormalPriority,Bd=Ee.unstable_LowPriority,mu=Ee.unstable_IdlePriority,Sl=null,Ge=null;function Vd(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:Qd,Wd=Math.log,Hd=Math.LN2;function Qd(e){return e>>>=0,e===0?32:31-(Wd(e)/Hd|0)|0}var bn=64,Cn=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tl(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,l=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~l;s!==0?n=Ir(s):(o&=a,o!==0&&(n=Ir(o)))}else a=r&~l,a!==0?n=Ir(a):o!==0&&(n=Ir(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&l)&&(l=n&-n,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Be(t),l=1<<r,n|=e[r],t&=~l;return n}function Yd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kd(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Be(o),s=1<<a,u=l[a];u===-1?(!(s&r)||s&n)&&(l[a]=Yd(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function _o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hu(){var e=bn;return bn<<=1,!(bn&4194240)&&(bn=64),e}function Wl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function hn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=r}function Gd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Be(r),o=1<<l;t[l]=0,n[l]=-1,e[l]=-1,r&=~o}}function wi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Be(r),l=1<<n;l&t|e[n]&t&&(e[n]|=t),r&=~l}}var A=0;function vu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gu,ki,yu,xu,wu,To=!1,En=[],yt=null,xt=null,wt=null,Zr=new Map,Jr=new Map,mt=[],Xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Na(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function _r(e,t,r,n,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[l]},t!==null&&(t=gn(t),t!==null&&ki(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Zd(e,t,r,n,l){switch(t){case"focusin":return yt=_r(yt,e,t,r,n,l),!0;case"dragenter":return xt=_r(xt,e,t,r,n,l),!0;case"mouseover":return wt=_r(wt,e,t,r,n,l),!0;case"pointerover":var o=l.pointerId;return Zr.set(o,_r(Zr.get(o)||null,e,t,r,n,l)),!0;case"gotpointercapture":return o=l.pointerId,Jr.set(o,_r(Jr.get(o)||null,e,t,r,n,l)),!0}return!1}function ku(e){var t=Ft(e.target);if(t!==null){var r=Ht(t);if(r!==null){if(t=r.tag,t===13){if(t=uu(r),t!==null){e.blockedOn=t,wu(e.priority,function(){yu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $n(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Po(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);bo=n,r.target.dispatchEvent(n),bo=null}else return t=gn(r),t!==null&&ki(t),e.blockedOn=r,!1;t.shift()}return!0}function ba(e,t,r){$n(e)&&r.delete(t)}function Jd(){To=!1,yt!==null&&$n(yt)&&(yt=null),xt!==null&&$n(xt)&&(xt=null),wt!==null&&$n(wt)&&(wt=null),Zr.forEach(ba),Jr.forEach(ba)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,To||(To=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Jd)))}function qr(e){function t(l){return Tr(l,e)}if(0<En.length){Tr(En[0],e);for(var r=1;r<En.length;r++){var n=En[r];n.blockedOn===e&&(n.blockedOn=null)}}for(yt!==null&&Tr(yt,e),xt!==null&&Tr(xt,e),wt!==null&&Tr(wt,e),Zr.forEach(t),Jr.forEach(t),r=0;r<mt.length;r++)n=mt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<mt.length&&(r=mt[0],r.blockedOn===null);)ku(r),r.blockedOn===null&&mt.shift()}var dr=ut.ReactCurrentBatchConfig,rl=!0;function qd(e,t,r,n){var l=A,o=dr.transition;dr.transition=null;try{A=1,ji(e,t,r,n)}finally{A=l,dr.transition=o}}function ef(e,t,r,n){var l=A,o=dr.transition;dr.transition=null;try{A=4,ji(e,t,r,n)}finally{A=l,dr.transition=o}}function ji(e,t,r,n){if(rl){var l=Po(e,t,r,n);if(l===null)eo(e,t,n,nl,r),Na(e,n);else if(Zd(l,e,t,r,n))n.stopPropagation();else if(Na(e,n),t&4&&-1<Xd.indexOf(e)){for(;l!==null;){var o=gn(l);if(o!==null&&gu(o),o=Po(e,t,r,n),o===null&&eo(e,t,n,nl,r),o===l)break;l=o}l!==null&&n.stopPropagation()}else eo(e,t,n,null,r)}}var nl=null;function Po(e,t,r,n){if(nl=null,e=yi(n),e=Ft(e),e!==null)if(t=Ht(e),t===null)e=null;else if(r=t.tag,r===13){if(e=uu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nl=e,null}function ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($d()){case xi:return 1;case pu:return 4;case el:case Bd:return 16;case mu:return 536870912;default:return 16}default:return 16}}var vt=null,Si=null,Bn=null;function Su(){if(Bn)return Bn;var e,t=Si,r=t.length,n,l="value"in vt?vt.value:vt.textContent,o=l.length;for(e=0;e<r&&t[e]===l[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===l[o-n];n++);return Bn=l.slice(e,1<n?1-n:void 0)}function Vn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zn(){return!0}function Ca(){return!1}function _e(e){function t(r,n,l,o,a){this._reactName=r,this._targetInst=l,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zn:Ca,this.isPropagationStopped=Ca,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ni=_e(Nr),vn=Z({},Nr,{view:0,detail:0}),tf=_e(vn),Hl,Ql,Pr,Nl=Z({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Hl=e.screenX-Pr.screenX,Ql=e.screenY-Pr.screenY):Ql=Hl=0,Pr=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),Ea=_e(Nl),rf=Z({},Nl,{dataTransfer:0}),nf=_e(rf),lf=Z({},vn,{relatedTarget:0}),Yl=_e(lf),of=Z({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),af=_e(of),sf=Z({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uf=_e(sf),cf=Z({},Nr,{data:0}),za=_e(cf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pf[e])?!!t[e]:!1}function bi(){return mf}var hf=Z({},vn,{key:function(e){if(e.key){var t=df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bi,charCode:function(e){return e.type==="keypress"?Vn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=_e(hf),gf=Z({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_a=_e(gf),yf=Z({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bi}),xf=_e(yf),wf=Z({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kf=_e(wf),jf=Z({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=_e(jf),Nf=[9,13,27,32],Ci=lt&&"CompositionEvent"in window,$r=null;lt&&"documentMode"in document&&($r=document.documentMode);var bf=lt&&"TextEvent"in window&&!$r,Nu=lt&&(!Ci||$r&&8<$r&&11>=$r),Ta=" ",Pa=!1;function bu(e,t){switch(e){case"keyup":return Nf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function Cf(e,t){switch(e){case"compositionend":return Cu(t);case"keypress":return t.which!==32?null:(Pa=!0,Ta);case"textInput":return e=t.data,e===Ta&&Pa?null:e;default:return null}}function Ef(e,t){if(Jt)return e==="compositionend"||!Ci&&bu(e,t)?(e=Su(),Bn=Si=vt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nu&&t.locale!=="ko"?null:t.data;default:return null}}var zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function La(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zf[e.type]:t==="textarea"}function Eu(e,t,r,n){lu(n),t=ll(t,"onChange"),0<t.length&&(r=new Ni("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Br=null,en=null;function _f(e){Ou(e,0)}function bl(e){var t=tr(e);if(Zs(t))return e}function Tf(e,t){if(e==="change")return t}var zu=!1;if(lt){var Kl;if(lt){var Gl="oninput"in document;if(!Gl){var Fa=document.createElement("div");Fa.setAttribute("oninput","return;"),Gl=typeof Fa.oninput=="function"}Kl=Gl}else Kl=!1;zu=Kl&&(!document.documentMode||9<document.documentMode)}function Ra(){Br&&(Br.detachEvent("onpropertychange",_u),en=Br=null)}function _u(e){if(e.propertyName==="value"&&bl(en)){var t=[];Eu(t,en,e,yi(e)),su(_f,t)}}function Pf(e,t,r){e==="focusin"?(Ra(),Br=t,en=r,Br.attachEvent("onpropertychange",_u)):e==="focusout"&&Ra()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(en)}function Ff(e,t){if(e==="click")return bl(t)}function Rf(e,t){if(e==="input"||e==="change")return bl(t)}function Df(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:Df;function tn(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var l=r[n];if(!po.call(t,l)||!We(e[l],t[l]))return!1}return!0}function Da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ma(e,t){var r=Da(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Da(r)}}function Tu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pu(){for(var e=window,t=Zn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Zn(e.document)}return t}function Ei(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mf(e){var t=Pu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Tu(r.ownerDocument.documentElement,r)){if(n!==null&&Ei(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,o=Math.min(n.start,l);n=n.end===void 0?o:Math.min(n.end,l),!e.extend&&o>n&&(l=n,n=o,o=l),l=Ma(r,o);var a=Ma(r,n);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var If=lt&&"documentMode"in document&&11>=document.documentMode,qt=null,Lo=null,Vr=null,Fo=!1;function Ia(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Fo||qt==null||qt!==Zn(n)||(n=qt,"selectionStart"in n&&Ei(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vr&&tn(Vr,n)||(Vr=n,n=ll(Lo,"onSelect"),0<n.length&&(t=new Ni("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=qt)))}function _n(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var er={animationend:_n("Animation","AnimationEnd"),animationiteration:_n("Animation","AnimationIteration"),animationstart:_n("Animation","AnimationStart"),transitionend:_n("Transition","TransitionEnd")},Xl={},Lu={};lt&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Cl(e){if(Xl[e])return Xl[e];if(!er[e])return e;var t=er[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Lu)return Xl[e]=t[r];return e}var Fu=Cl("animationend"),Ru=Cl("animationiteration"),Du=Cl("animationstart"),Mu=Cl("transitionend"),Iu=new Map,Oa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){Iu.set(e,t),Wt(t,[e])}for(var Zl=0;Zl<Oa.length;Zl++){var Jl=Oa[Zl],Of=Jl.toLowerCase(),Uf=Jl[0].toUpperCase()+Jl.slice(1);zt(Of,"on"+Uf)}zt(Fu,"onAnimationEnd");zt(Ru,"onAnimationIteration");zt(Du,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(Mu,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Af=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function Ua(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Id(n,t,void 0,e),e.currentTarget=null}function Ou(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],l=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;Ua(l,s,d),o=u}else for(a=0;a<n.length;a++){if(s=n[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;Ua(l,s,d),o=u}}}if(qn)throw e=zo,qn=!1,zo=null,e}function W(e,t){var r=t[Oo];r===void 0&&(r=t[Oo]=new Set);var n=e+"__bubble";r.has(n)||(Uu(t,e,2,!1),r.add(n))}function ql(e,t,r){var n=0;t&&(n|=4),Uu(r,e,n,t)}var Tn="_reactListening"+Math.random().toString(36).slice(2);function rn(e){if(!e[Tn]){e[Tn]=!0,Qs.forEach(function(r){r!=="selectionchange"&&(Af.has(r)||ql(r,!1,e),ql(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tn]||(t[Tn]=!0,ql("selectionchange",!1,t))}}function Uu(e,t,r,n){switch(ju(t)){case 1:var l=qd;break;case 4:l=ef;break;default:l=ji}r=l.bind(null,t,r,e),l=void 0,!Eo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function eo(e,t,r,n,l){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=n.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Ft(s),a===null)return;if(u=a.tag,u===5||u===6){n=o=a;continue e}s=s.parentNode}}n=n.return}su(function(){var d=o,m=yi(r),h=[];e:{var v=Iu.get(e);if(v!==void 0){var w=Ni,k=e;switch(e){case"keypress":if(Vn(r)===0)break e;case"keydown":case"keyup":w=vf;break;case"focusin":k="focus",w=Yl;break;case"focusout":k="blur",w=Yl;break;case"beforeblur":case"afterblur":w=Yl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=xf;break;case Fu:case Ru:case Du:w=af;break;case Mu:w=kf;break;case"scroll":w=tf;break;case"wheel":w=Sf;break;case"copy":case"cut":case"paste":w=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=_a}var N=(t&4)!==0,D=!N&&e==="scroll",f=N?v!==null?v+"Capture":null:v;N=[];for(var c=d,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Xr(c,f),x!=null&&N.push(nn(c,x,p)))),D)break;c=c.return}0<N.length&&(v=new w(v,k,null,r,m),h.push({event:v,listeners:N}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",v&&r!==bo&&(k=r.relatedTarget||r.fromElement)&&(Ft(k)||k[ot]))break e;if((w||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,w?(k=r.relatedTarget||r.toElement,w=d,k=k?Ft(k):null,k!==null&&(D=Ht(k),k!==D||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){if(N=Ea,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(N=_a,x="onPointerLeave",f="onPointerEnter",c="pointer"),D=w==null?v:tr(w),p=k==null?v:tr(k),v=new N(x,c+"leave",w,r,m),v.target=D,v.relatedTarget=p,x=null,Ft(m)===d&&(N=new N(f,c+"enter",k,r,m),N.target=p,N.relatedTarget=D,x=N),D=x,w&&k)t:{for(N=w,f=k,c=0,p=N;p;p=Gt(p))c++;for(p=0,x=f;x;x=Gt(x))p++;for(;0<c-p;)N=Gt(N),c--;for(;0<p-c;)f=Gt(f),p--;for(;c--;){if(N===f||f!==null&&N===f.alternate)break t;N=Gt(N),f=Gt(f)}N=null}else N=null;w!==null&&Aa(h,v,w,N,!1),k!==null&&D!==null&&Aa(h,D,k,N,!0)}}e:{if(v=d?tr(d):window,w=v.nodeName&&v.nodeName.toLowerCase(),w==="select"||w==="input"&&v.type==="file")var E=Tf;else if(La(v))if(zu)E=Rf;else{E=Lf;var g=Pf}else(w=v.nodeName)&&w.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(E=Ff);if(E&&(E=E(e,d))){Eu(h,E,r,m);break e}g&&g(e,v,d),e==="focusout"&&(g=v._wrapperState)&&g.controlled&&v.type==="number"&&wo(v,"number",v.value)}switch(g=d?tr(d):window,e){case"focusin":(La(g)||g.contentEditable==="true")&&(qt=g,Lo=d,Vr=null);break;case"focusout":Vr=Lo=qt=null;break;case"mousedown":Fo=!0;break;case"contextmenu":case"mouseup":case"dragend":Fo=!1,Ia(h,r,m);break;case"selectionchange":if(If)break;case"keydown":case"keyup":Ia(h,r,m)}var C;if(Ci)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Jt?bu(e,r)&&(y="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(y="onCompositionStart");y&&(Nu&&r.locale!=="ko"&&(Jt||y!=="onCompositionStart"?y==="onCompositionEnd"&&Jt&&(C=Su()):(vt=m,Si="value"in vt?vt.value:vt.textContent,Jt=!0)),g=ll(d,y),0<g.length&&(y=new za(y,e,null,r,m),h.push({event:y,listeners:g}),C?y.data=C:(C=Cu(r),C!==null&&(y.data=C)))),(C=bf?Cf(e,r):Ef(e,r))&&(d=ll(d,"onBeforeInput"),0<d.length&&(m=new za("onBeforeInput","beforeinput",null,r,m),h.push({event:m,listeners:d}),m.data=C))}Ou(h,t)})}function nn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ll(e,t){for(var r=t+"Capture",n=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Xr(e,r),o!=null&&n.unshift(nn(e,o,l)),o=Xr(e,t),o!=null&&n.push(nn(e,o,l))),e=e.return}return n}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Aa(e,t,r,n,l){for(var o=t._reactName,a=[];r!==null&&r!==n;){var s=r,u=s.alternate,d=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&d!==null&&(s=d,l?(u=Xr(r,o),u!=null&&a.unshift(nn(r,u,s))):l||(u=Xr(r,o),u!=null&&a.push(nn(r,u,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var $f=/\r\n?/g,Bf=/\u0000|\uFFFD/g;function $a(e){return(typeof e=="string"?e:""+e).replace($f,`
`).replace(Bf,"")}function Pn(e,t,r){if(t=$a(t),$a(e)!==t&&r)throw Error(S(425))}function ol(){}var Ro=null,Do=null;function Mo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Io=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,Ba=typeof Promise=="function"?Promise:void 0,Wf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ba<"u"?function(e){return Ba.resolve(null).then(e).catch(Hf)}:Io;function Hf(e){setTimeout(function(){throw e})}function to(e,t){var r=t,n=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(n===0){e.removeChild(l),qr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=l}while(r);qr(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Va(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),Ke="__reactFiber$"+br,ln="__reactProps$"+br,ot="__reactContainer$"+br,Oo="__reactEvents$"+br,Qf="__reactListeners$"+br,Yf="__reactHandles$"+br;function Ft(e){var t=e[Ke];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ot]||r[Ke]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Va(e);e!==null;){if(r=e[Ke])return r;e=Va(e)}return t}e=r,r=e.parentNode}return null}function gn(e){return e=e[Ke]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function El(e){return e[ln]||null}var Uo=[],rr=-1;function _t(e){return{current:e}}function H(e){0>rr||(e.current=Uo[rr],Uo[rr]=null,rr--)}function B(e,t){rr++,Uo[rr]=e.current,e.current=t}var Et={},fe=_t(Et),we=_t(!1),Ut=Et;function hr(e,t){var r=e.type.contextTypes;if(!r)return Et;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in r)l[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function il(){H(we),H(fe)}function Wa(e,t,r){if(fe.current!==Et)throw Error(S(168));B(fe,t),B(we,r)}function Au(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var l in n)if(!(l in t))throw Error(S(108,Td(e)||"Unknown",l));return Z({},r,n)}function al(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,Ut=fe.current,B(fe,e),B(we,we.current),!0}function Ha(e,t,r){var n=e.stateNode;if(!n)throw Error(S(169));r?(e=Au(e,t,Ut),n.__reactInternalMemoizedMergedChildContext=e,H(we),H(fe),B(fe,e)):H(we),B(we,r)}var et=null,zl=!1,ro=!1;function $u(e){et===null?et=[e]:et.push(e)}function Kf(e){zl=!0,$u(e)}function Tt(){if(!ro&&et!==null){ro=!0;var e=0,t=A;try{var r=et;for(A=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}et=null,zl=!1}catch(l){throw et!==null&&(et=et.slice(e+1)),fu(xi,Tt),l}finally{A=t,ro=!1}}return null}var nr=[],lr=0,sl=null,ul=0,Pe=[],Le=0,At=null,tt=1,rt="";function Pt(e,t){nr[lr++]=ul,nr[lr++]=sl,sl=e,ul=t}function Bu(e,t,r){Pe[Le++]=tt,Pe[Le++]=rt,Pe[Le++]=At,At=e;var n=tt;e=rt;var l=32-Be(n)-1;n&=~(1<<l),r+=1;var o=32-Be(t)+l;if(30<o){var a=l-l%5;o=(n&(1<<a)-1).toString(32),n>>=a,l-=a,tt=1<<32-Be(t)+l|r<<l|n,rt=o+e}else tt=1<<o|r<<l|n,rt=e}function zi(e){e.return!==null&&(Pt(e,1),Bu(e,1,0))}function _i(e){for(;e===sl;)sl=nr[--lr],nr[lr]=null,ul=nr[--lr],nr[lr]=null;for(;e===At;)At=Pe[--Le],Pe[Le]=null,rt=Pe[--Le],Pe[Le]=null,tt=Pe[--Le],Pe[Le]=null}var Ce=null,be=null,Y=!1,$e=null;function Vu(e,t){var r=Fe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Qa(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,be=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=At!==null?{id:tt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Fe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ce=e,be=null,!0):!1;default:return!1}}function Ao(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $o(e){if(Y){var t=be;if(t){var r=t;if(!Qa(e,t)){if(Ao(e))throw Error(S(418));t=kt(r.nextSibling);var n=Ce;t&&Qa(e,t)?Vu(n,r):(e.flags=e.flags&-4097|2,Y=!1,Ce=e)}}else{if(Ao(e))throw Error(S(418));e.flags=e.flags&-4097|2,Y=!1,Ce=e}}}function Ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Ln(e){if(e!==Ce)return!1;if(!Y)return Ya(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mo(e.type,e.memoizedProps)),t&&(t=be)){if(Ao(e))throw Wu(),Error(S(418));for(;t;)Vu(e,t),t=kt(t.nextSibling)}if(Ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){be=kt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}be=null}}else be=Ce?kt(e.stateNode.nextSibling):null;return!0}function Wu(){for(var e=be;e;)e=kt(e.nextSibling)}function vr(){be=Ce=null,Y=!1}function Ti(e){$e===null?$e=[e]:$e.push(e)}var Gf=ut.ReactCurrentBatchConfig;function Lr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(S(309));var n=r.stateNode}if(!n)throw Error(S(147,e));var l=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=l.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!r._owner)throw Error(S(290,e))}return e}function Fn(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ka(e){var t=e._init;return t(e._payload)}function Hu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function r(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function n(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=bt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,x){return c===null||c.tag!==6?(c=uo(p,f.mode,x),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,x){var E=p.type;return E===Zt?m(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ft&&Ka(E)===c.type)?(x=l(c,p.props),x.ref=Lr(f,c,p),x.return=f,x):(x=Xn(p.type,p.key,p.props,null,f.mode,x),x.ref=Lr(f,c,p),x.return=f,x)}function d(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=co(p,f.mode,x),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function m(f,c,p,x,E){return c===null||c.tag!==7?(c=Ot(p,f.mode,x,E),c.return=f,c):(c=l(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=uo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case jn:return p=Xn(c.type,c.key,c.props,null,f.mode,p),p.ref=Lr(f,null,c),p.return=f,p;case Xt:return c=co(c,f.mode,p),c.return=f,c;case ft:var x=c._init;return h(f,x(c._payload),p)}if(Mr(c)||Er(c))return c=Ot(c,f.mode,p,null),c.return=f,c;Fn(f,c)}return null}function v(f,c,p,x){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:s(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case jn:return p.key===E?u(f,c,p,x):null;case Xt:return p.key===E?d(f,c,p,x):null;case ft:return E=p._init,v(f,c,E(p._payload),x)}if(Mr(p)||Er(p))return E!==null?null:m(f,c,p,x,null);Fn(f,p)}return null}function w(f,c,p,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(c,f,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case jn:return f=f.get(x.key===null?p:x.key)||null,u(c,f,x,E);case Xt:return f=f.get(x.key===null?p:x.key)||null,d(c,f,x,E);case ft:var g=x._init;return w(f,c,p,g(x._payload),E)}if(Mr(x)||Er(x))return f=f.get(p)||null,m(c,f,x,E,null);Fn(c,x)}return null}function k(f,c,p,x){for(var E=null,g=null,C=c,y=c=0,L=null;C!==null&&y<p.length;y++){C.index>y?(L=C,C=null):L=C.sibling;var b=v(f,C,p[y],x);if(b===null){C===null&&(C=L);break}e&&C&&b.alternate===null&&t(f,C),c=o(b,c,y),g===null?E=b:g.sibling=b,g=b,C=L}if(y===p.length)return r(f,C),Y&&Pt(f,y),E;if(C===null){for(;y<p.length;y++)C=h(f,p[y],x),C!==null&&(c=o(C,c,y),g===null?E=C:g.sibling=C,g=C);return Y&&Pt(f,y),E}for(C=n(f,C);y<p.length;y++)L=w(C,f,y,p[y],x),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?y:L.key),c=o(L,c,y),g===null?E=L:g.sibling=L,g=L);return e&&C.forEach(function(V){return t(f,V)}),Y&&Pt(f,y),E}function N(f,c,p,x){var E=Er(p);if(typeof E!="function")throw Error(S(150));if(p=E.call(p),p==null)throw Error(S(151));for(var g=E=null,C=c,y=c=0,L=null,b=p.next();C!==null&&!b.done;y++,b=p.next()){C.index>y?(L=C,C=null):L=C.sibling;var V=v(f,C,b.value,x);if(V===null){C===null&&(C=L);break}e&&C&&V.alternate===null&&t(f,C),c=o(V,c,y),g===null?E=V:g.sibling=V,g=V,C=L}if(b.done)return r(f,C),Y&&Pt(f,y),E;if(C===null){for(;!b.done;y++,b=p.next())b=h(f,b.value,x),b!==null&&(c=o(b,c,y),g===null?E=b:g.sibling=b,g=b);return Y&&Pt(f,y),E}for(C=n(f,C);!b.done;y++,b=p.next())b=w(C,f,y,b.value,x),b!==null&&(e&&b.alternate!==null&&C.delete(b.key===null?y:b.key),c=o(b,c,y),g===null?E=b:g.sibling=b,g=b);return e&&C.forEach(function(pe){return t(f,pe)}),Y&&Pt(f,y),E}function D(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case jn:e:{for(var E=p.key,g=c;g!==null;){if(g.key===E){if(E=p.type,E===Zt){if(g.tag===7){r(f,g.sibling),c=l(g,p.props.children),c.return=f,f=c;break e}}else if(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ft&&Ka(E)===g.type){r(f,g.sibling),c=l(g,p.props),c.ref=Lr(f,g,p),c.return=f,f=c;break e}r(f,g);break}else t(f,g);g=g.sibling}p.type===Zt?(c=Ot(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=Xn(p.type,p.key,p.props,null,f.mode,x),x.ref=Lr(f,c,p),x.return=f,f=x)}return a(f);case Xt:e:{for(g=p.key;c!==null;){if(c.key===g)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){r(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{r(f,c);break}else t(f,c);c=c.sibling}c=co(p,f.mode,x),c.return=f,f=c}return a(f);case ft:return g=p._init,D(f,c,g(p._payload),x)}if(Mr(p))return k(f,c,p,x);if(Er(p))return N(f,c,p,x);Fn(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(r(f,c.sibling),c=l(c,p),c.return=f,f=c):(r(f,c),c=uo(p,f.mode,x),c.return=f,f=c),a(f)):r(f,c)}return D}var gr=Hu(!0),Qu=Hu(!1),cl=_t(null),dl=null,or=null,Pi=null;function Li(){Pi=or=dl=null}function Fi(e){var t=cl.current;H(cl),e._currentValue=t}function Bo(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function fr(e,t){dl=e,Pi=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Pi!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(dl===null)throw Error(S(308));or=e,dl.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var Rt=null;function Ri(e){Rt===null?Rt=[e]:Rt.push(e)}function Yu(e,t,r,n){var l=t.interleaved;return l===null?(r.next=r,Ri(t)):(r.next=l.next,l.next=r),t.interleaved=r,it(e,n)}function it(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var pt=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,O&2){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,it(e,r)}return l=n.interleaved,l===null?(t.next=t,Ri(n)):(t.next=l.next,l.next=t),n.interleaved=t,it(e,r)}function Wn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,wi(e,r)}}function Ga(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var l=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?l=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?l=o=t:o=o.next=t}else l=o=t;r={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fl(e,t,r,n){var l=e.updateQueue;pt=!1;var o=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;a=0,m=d=u=null,s=o;do{var v=s.lane,w=s.eventTime;if((n&v)===v){m!==null&&(m=m.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,N=s;switch(v=t,w=r,N.tag){case 1:if(k=N.payload,typeof k=="function"){h=k.call(w,h,v);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=N.payload,v=typeof k=="function"?k.call(w,h,v):k,v==null)break e;h=Z({},h,v);break e;case 2:pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[s]:v.push(s))}else w={eventTime:w,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=w,u=h):m=m.next=w,a|=v;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;v=s,s=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);if(m===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Bt|=a,e.lanes=a,e.memoizedState=h}}function Xa(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],l=n.callback;if(l!==null){if(n.callback=null,n=r,typeof l!="function")throw Error(S(191,l));l.call(n)}}}var yn={},Xe=_t(yn),on=_t(yn),an=_t(yn);function Dt(e){if(e===yn)throw Error(S(174));return e}function Mi(e,t){switch(B(an,t),B(on,e),B(Xe,yn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jo(t,e)}H(Xe),B(Xe,t)}function yr(){H(Xe),H(on),H(an)}function Gu(e){Dt(an.current);var t=Dt(Xe.current),r=jo(t,e.type);t!==r&&(B(on,e),B(Xe,r))}function Ii(e){on.current===e&&(H(Xe),H(on))}var G=_t(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=[];function Oi(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var Hn=ut.ReactCurrentDispatcher,lo=ut.ReactCurrentBatchConfig,$t=0,X=null,re=null,le=null,ml=!1,Wr=!1,sn=0,Xf=0;function ue(){throw Error(S(321))}function Ui(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!We(e[r],t[r]))return!1;return!0}function Ai(e,t,r,n,l,o){if($t=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hn.current=e===null||e.memoizedState===null?ep:tp,e=r(n,l),Wr){o=0;do{if(Wr=!1,sn=0,25<=o)throw Error(S(301));o+=1,le=re=null,t.updateQueue=null,Hn.current=rp,e=r(n,l)}while(Wr)}if(Hn.current=hl,t=re!==null&&re.next!==null,$t=0,le=re=X=null,ml=!1,t)throw Error(S(300));return e}function $i(){var e=sn!==0;return sn=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Me(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function un(e,t){return typeof t=="function"?t(e):t}function oo(e){var t=Me(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=re,l=n.baseQueue,o=r.pending;if(o!==null){if(l!==null){var a=l.next;l.next=o.next,o.next=a}n.baseQueue=l=o,r.pending=null}if(l!==null){o=l.next,n=n.baseState;var s=a=null,u=null,d=o;do{var m=d.lane;if(($t&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,a=n):u=u.next=h,X.lanes|=m,Bt|=m}d=d.next}while(d!==null&&d!==o);u===null?a=n:u.next=s,We(n,t.memoizedState)||(xe=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){l=e;do o=l.lane,X.lanes|=o,Bt|=o,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function io(e){var t=Me(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=r.dispatch,l=r.pending,o=t.memoizedState;if(l!==null){r.pending=null;var a=l=l.next;do o=e(o,a.action),a=a.next;while(a!==l);We(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Xu(){}function Zu(e,t){var r=X,n=Me(),l=t(),o=!We(n.memoizedState,l);if(o&&(n.memoizedState=l,xe=!0),n=n.queue,Bi(ec.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(r.flags|=2048,cn(9,qu.bind(null,r,n,l,t),void 0,null),oe===null)throw Error(S(349));$t&30||Ju(r,t,l)}return l}function Ju(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function qu(e,t,r,n){t.value=r,t.getSnapshot=n,tc(t)&&rc(e)}function ec(e,t,r){return r(function(){tc(t)&&rc(e)})}function tc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!We(e,r)}catch{return!0}}function rc(e){var t=it(e,1);t!==null&&Ve(t,e,1,-1)}function Za(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:e},t.queue=e,e=e.dispatch=qf.bind(null,X,e),[t.memoizedState,e]}function cn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function nc(){return Me().memoizedState}function Qn(e,t,r,n){var l=Ye();X.flags|=e,l.memoizedState=cn(1|t,r,void 0,n===void 0?null:n)}function _l(e,t,r,n){var l=Me();n=n===void 0?null:n;var o=void 0;if(re!==null){var a=re.memoizedState;if(o=a.destroy,n!==null&&Ui(n,a.deps)){l.memoizedState=cn(t,r,o,n);return}}X.flags|=e,l.memoizedState=cn(1|t,r,o,n)}function Ja(e,t){return Qn(8390656,8,e,t)}function Bi(e,t){return _l(2048,8,e,t)}function lc(e,t){return _l(4,2,e,t)}function oc(e,t){return _l(4,4,e,t)}function ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ac(e,t,r){return r=r!=null?r.concat([e]):null,_l(4,4,ic.bind(null,t,e),r)}function Vi(){}function sc(e,t){var r=Me();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ui(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function uc(e,t){var r=Me();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ui(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function cc(e,t,r){return $t&21?(We(r,t)||(r=hu(),X.lanes|=r,Bt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=r)}function Zf(e,t){var r=A;A=r!==0&&4>r?r:4,e(!0);var n=lo.transition;lo.transition={};try{e(!1),t()}finally{A=r,lo.transition=n}}function dc(){return Me().memoizedState}function Jf(e,t,r){var n=Nt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},fc(e))pc(t,r);else if(r=Yu(e,t,r,n),r!==null){var l=he();Ve(r,e,n,l),mc(r,t,n)}}function qf(e,t,r){var n=Nt(e),l={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(fc(e))pc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,r);if(l.hasEagerState=!0,l.eagerState=s,We(s,a)){var u=t.interleaved;u===null?(l.next=l,Ri(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}r=Yu(e,t,l,n),r!==null&&(l=he(),Ve(r,e,n,l),mc(r,t,n))}}function fc(e){var t=e.alternate;return e===X||t!==null&&t===X}function pc(e,t){Wr=ml=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function mc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,wi(e,r)}}var hl={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},ep={readContext:De,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ja,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Qn(4194308,4,ic.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Qn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qn(4,2,e,t)},useMemo:function(e,t){var r=Ye();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ye();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Jf.bind(null,X,e),[n.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:Za,useDebugValue:Vi,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=Za(!1),t=e[0];return e=Zf.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=X,l=Ye();if(Y){if(r===void 0)throw Error(S(407));r=r()}else{if(r=t(),oe===null)throw Error(S(349));$t&30||Ju(n,t,r)}l.memoizedState=r;var o={value:r,getSnapshot:t};return l.queue=o,Ja(ec.bind(null,n,o,e),[e]),n.flags|=2048,cn(9,qu.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=Ye(),t=oe.identifierPrefix;if(Y){var r=rt,n=tt;r=(n&~(1<<32-Be(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=sn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Xf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tp={readContext:De,useCallback:sc,useContext:De,useEffect:Bi,useImperativeHandle:ac,useInsertionEffect:lc,useLayoutEffect:oc,useMemo:uc,useReducer:oo,useRef:nc,useState:function(){return oo(un)},useDebugValue:Vi,useDeferredValue:function(e){var t=Me();return cc(t,re.memoizedState,e)},useTransition:function(){var e=oo(un)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Xu,useSyncExternalStore:Zu,useId:dc,unstable_isNewReconciler:!1},rp={readContext:De,useCallback:sc,useContext:De,useEffect:Bi,useImperativeHandle:ac,useInsertionEffect:lc,useLayoutEffect:oc,useMemo:uc,useReducer:io,useRef:nc,useState:function(){return io(un)},useDebugValue:Vi,useDeferredValue:function(e){var t=Me();return re===null?t.memoizedState=e:cc(t,re.memoizedState,e)},useTransition:function(){var e=io(un)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Xu,useSyncExternalStore:Zu,useId:dc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Vo(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Tl={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=he(),l=Nt(e),o=nt(n,l);o.payload=t,r!=null&&(o.callback=r),t=jt(e,o,l),t!==null&&(Ve(t,e,l,n),Wn(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=he(),l=Nt(e),o=nt(n,l);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=jt(e,o,l),t!==null&&(Ve(t,e,l,n),Wn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=he(),n=Nt(e),l=nt(r,n);l.tag=2,t!=null&&(l.callback=t),t=jt(e,l,n),t!==null&&(Ve(t,e,n,r),Wn(t,e,n))}};function qa(e,t,r,n,l,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!tn(r,n)||!tn(l,o):!0}function hc(e,t,r){var n=!1,l=Et,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(l=ke(t)?Ut:fe.current,n=t.contextTypes,o=(n=n!=null)?hr(e,l):Et),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Tl,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function es(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Tl.enqueueReplaceState(t,t.state,null)}function Wo(e,t,r,n){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Di(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=De(o):(o=ke(t)?Ut:fe.current,l.context=hr(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vo(e,t,o,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Tl.enqueueReplaceState(l,l.state,null),fl(e,r,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t){try{var r="",n=t;do r+=_d(n),n=n.return;while(n);var l=r}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ao(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ho(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var np=typeof WeakMap=="function"?WeakMap:Map;function vc(e,t,r){r=nt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){gl||(gl=!0,ti=n),Ho(e,t)},r}function gc(e,t,r){r=nt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=t.value;r.payload=function(){return n(l)},r.callback=function(){Ho(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Ho(e,t),typeof n!="function"&&(St===null?St=new Set([this]):St.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function ts(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new np;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(r)||(l.add(r),e=gp.bind(null,e,t,r),t.then(e,e))}function rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ns(e,t,r,n,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=nt(-1,1),t.tag=2,jt(r,t,1))),r.lanes|=1),e)}var lp=ut.ReactCurrentOwner,xe=!1;function me(e,t,r,n){t.child=e===null?Qu(t,null,r,n):gr(t,e.child,r,n)}function ls(e,t,r,n,l){r=r.render;var o=t.ref;return fr(t,l),n=Ai(e,t,r,n,o,l),r=$i(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,at(e,t,l)):(Y&&r&&zi(t),t.flags|=1,me(e,t,n,l),t.child)}function os(e,t,r,n,l){if(e===null){var o=r.type;return typeof o=="function"&&!Zi(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,yc(e,t,o,n,l)):(e=Xn(r.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:tn,r(a,n)&&e.ref===t.ref)return at(e,t,l)}return t.flags|=1,e=bt(o,n),e.ref=t.ref,e.return=t,t.child=e}function yc(e,t,r,n,l){if(e!==null){var o=e.memoizedProps;if(tn(o,n)&&e.ref===t.ref)if(xe=!1,t.pendingProps=n=o,(e.lanes&l)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,at(e,t,l)}return Qo(e,t,r,n,l)}function xc(e,t,r){var n=t.pendingProps,l=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(ar,Ne),Ne|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(ar,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,B(ar,Ne),Ne|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,B(ar,Ne),Ne|=n;return me(e,t,l,r),t.child}function wc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Qo(e,t,r,n,l){var o=ke(r)?Ut:fe.current;return o=hr(t,o),fr(t,l),r=Ai(e,t,r,n,o,l),n=$i(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,at(e,t,l)):(Y&&n&&zi(t),t.flags|=1,me(e,t,r,l),t.child)}function is(e,t,r,n,l){if(ke(r)){var o=!0;al(t)}else o=!1;if(fr(t,l),t.stateNode===null)Yn(e,t),hc(t,r,n),Wo(t,r,n,l),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=r.contextType;typeof d=="object"&&d!==null?d=De(d):(d=ke(r)?Ut:fe.current,d=hr(t,d));var m=r.getDerivedStateFromProps,h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||u!==d)&&es(t,a,n,d),pt=!1;var v=t.memoizedState;a.state=v,fl(t,n,a,l),u=t.memoizedState,s!==n||v!==u||we.current||pt?(typeof m=="function"&&(Vo(t,r,m,n),u=t.memoizedState),(s=pt||qa(t,r,s,n,v,u,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),a.props=n,a.state=u,a.context=d,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Ku(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Ue(t.type,s),a.props=d,h=t.pendingProps,v=a.context,u=r.contextType,typeof u=="object"&&u!==null?u=De(u):(u=ke(r)?Ut:fe.current,u=hr(t,u));var w=r.getDerivedStateFromProps;(m=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||v!==u)&&es(t,a,n,u),pt=!1,v=t.memoizedState,a.state=v,fl(t,n,a,l);var k=t.memoizedState;s!==h||v!==k||we.current||pt?(typeof w=="function"&&(Vo(t,r,w,n),k=t.memoizedState),(d=pt||qa(t,r,d,n,v,k,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,k,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,k,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),a.props=n,a.state=k,a.context=u,n=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),n=!1)}return Yo(e,t,r,n,o,l)}function Yo(e,t,r,n,l,o){wc(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return l&&Ha(t,r,!1),at(e,t,o);n=t.stateNode,lp.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=gr(t,e.child,null,o),t.child=gr(t,null,s,o)):me(e,t,s,o),t.memoizedState=n.state,l&&Ha(t,r,!0),t.child}function kc(e){var t=e.stateNode;t.pendingContext?Wa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wa(e,t.context,!1),Mi(e,t.containerInfo)}function as(e,t,r,n,l){return vr(),Ti(l),t.flags|=256,me(e,t,r,n),t.child}var Ko={dehydrated:null,treeContext:null,retryLane:0};function Go(e){return{baseLanes:e,cachePool:null,transitions:null}}function jc(e,t,r){var n=t.pendingProps,l=G.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),B(G,l&1),e===null)return $o(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Fl(a,n,0,null),e=Ot(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Go(r),t.memoizedState=Ko,e):Wi(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return op(e,t,a,n,s,l,r);if(o){o=n.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:n.children};return!(a&1)&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=bt(l,u),n.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=bt(s,o):(o=Ot(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?Go(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=Ko,n}return o=e.child,e=o.sibling,n=bt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Wi(e,t){return t=Fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rn(e,t,r,n){return n!==null&&Ti(n),gr(t,e.child,null,r),e=Wi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function op(e,t,r,n,l,o,a){if(r)return t.flags&256?(t.flags&=-257,n=ao(Error(S(422))),Rn(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,l=t.mode,n=Fl({mode:"visible",children:n.children},l,0,null),o=Ot(o,l,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&gr(t,e.child,null,a),t.child.memoizedState=Go(a),t.memoizedState=Ko,o);if(!(t.mode&1))return Rn(e,t,a,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(S(419)),n=ao(o,n,void 0),Rn(e,t,a,n)}if(s=(a&e.childLanes)!==0,xe||s){if(n=oe,n!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(n.suspendedLanes|a)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,it(e,l),Ve(n,e,l,-1))}return Xi(),n=ao(Error(S(421))),Rn(e,t,a,n)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=yp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,be=kt(l.nextSibling),Ce=t,Y=!0,$e=null,e!==null&&(Pe[Le++]=tt,Pe[Le++]=rt,Pe[Le++]=At,tt=e.id,rt=e.overflow,At=t),t=Wi(t,n.children),t.flags|=4096,t)}function ss(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Bo(e.return,t,r)}function so(e,t,r,n,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=l)}function Sc(e,t,r){var n=t.pendingProps,l=n.revealOrder,o=n.tail;if(me(e,t,n.children,r),n=G.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ss(e,r,t);else if(e.tag===19)ss(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(B(G,n),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&pl(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),so(t,!1,l,r,o);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&pl(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}so(t,!0,r,null,o);break;case"together":so(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,r=bt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=bt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ip(e,t,r){switch(t.tag){case 3:kc(t),vr();break;case 5:Gu(t);break;case 1:ke(t.type)&&al(t);break;case 4:Mi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,l=t.memoizedProps.value;B(cl,n._currentValue),n._currentValue=l;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):r&t.child.childLanes?jc(e,t,r):(B(G,G.current&1),e=at(e,t,r),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Sc(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(G,G.current),n)break;return null;case 22:case 23:return t.lanes=0,xc(e,t,r)}return at(e,t,r)}var Nc,Xo,bc,Cc;Nc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Xo=function(){};bc=function(e,t,r,n){var l=e.memoizedProps;if(l!==n){e=t.stateNode,Dt(Xe.current);var o=null;switch(r){case"input":l=yo(e,l),n=yo(e,n),o=[];break;case"select":l=Z({},l,{value:void 0}),n=Z({},n,{value:void 0}),o=[];break;case"textarea":l=ko(e,l),n=ko(e,n),o=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ol)}So(r,n);var a;r=null;for(d in l)if(!n.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Kr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in n){var u=n[d];if(s=l!=null?l[d]:void 0,n.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(r||(r={}),r[a]=u[a])}else r||(o||(o=[]),o.push(d,r)),r=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&W("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}r&&(o=o||[]).push("style",r);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Cc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Fr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function ap(e,t,r){var n=t.pendingProps;switch(_i(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&il(),ce(t),null;case 3:return n=t.stateNode,yr(),H(we),H(fe),Oi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ln(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(li($e),$e=null))),Xo(e,t),ce(t),null;case 5:Ii(t);var l=Dt(an.current);if(r=t.type,e!==null&&t.stateNode!=null)bc(e,t,r,n,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Dt(Xe.current),Ln(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Ke]=t,n[ln]=o,e=(t.mode&1)!==0,r){case"dialog":W("cancel",n),W("close",n);break;case"iframe":case"object":case"embed":W("load",n);break;case"video":case"audio":for(l=0;l<Or.length;l++)W(Or[l],n);break;case"source":W("error",n);break;case"img":case"image":case"link":W("error",n),W("load",n);break;case"details":W("toggle",n);break;case"input":ga(n,o),W("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},W("invalid",n);break;case"textarea":xa(n,o),W("invalid",n)}So(r,o),l=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&Pn(n.textContent,s,e),l=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Pn(n.textContent,s,e),l=["children",""+s]):Kr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&W("scroll",n)}switch(r){case"input":Sn(n),ya(n,o,!0);break;case"textarea":Sn(n),wa(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=ol)}n=l,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Ke]=t,e[ln]=n,Nc(e,t,!1,!1),t.stateNode=e;e:{switch(a=No(r,n),r){case"dialog":W("cancel",e),W("close",e),l=n;break;case"iframe":case"object":case"embed":W("load",e),l=n;break;case"video":case"audio":for(l=0;l<Or.length;l++)W(Or[l],e);l=n;break;case"source":W("error",e),l=n;break;case"img":case"image":case"link":W("error",e),W("load",e),l=n;break;case"details":W("toggle",e),l=n;break;case"input":ga(e,n),l=yo(e,n),W("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=Z({},n,{value:void 0}),W("invalid",e);break;case"textarea":xa(e,n),l=ko(e,n),W("invalid",e);break;default:l=n}So(r,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?nu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tu(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Gr(e,u):typeof u=="number"&&Gr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Kr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&W("scroll",e):u!=null&&mi(e,o,u,a))}switch(r){case"input":Sn(e),ya(e,n,!1);break;case"textarea":Sn(e),wa(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ct(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?sr(e,!!n.multiple,o,!1):n.defaultValue!=null&&sr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ol)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Cc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(S(166));if(r=Dt(an.current),Dt(Xe.current),Ln(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ke]=t,(o=n.nodeValue!==r)&&(e=Ce,e!==null))switch(e.tag){case 3:Pn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ke]=t,t.stateNode=n}return ce(t),null;case 13:if(H(G),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&be!==null&&t.mode&1&&!(t.flags&128))Wu(),vr(),t.flags|=98560,o=!1;else if(o=Ln(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Ke]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else $e!==null&&(li($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ne===0&&(ne=3):Xi())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return yr(),Xo(e,t),e===null&&rn(t.stateNode.containerInfo),ce(t),null;case 10:return Fi(t.type._context),ce(t),null;case 17:return ke(t.type)&&il(),ce(t),null;case 19:if(H(G),o=t.memoizedState,o===null)return ce(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)Fr(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=pl(e),a!==null){for(t.flags|=128,Fr(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&ee()>wr&&(t.flags|=128,n=!0,Fr(o,!1),t.lanes=4194304)}else{if(!n)if(e=pl(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Y)return ce(t),null}else 2*ee()-o.renderingStartTime>wr&&r!==1073741824&&(t.flags|=128,n=!0,Fr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ee(),t.sibling=null,r=G.current,B(G,n?r&1|2:r&1),t):(ce(t),null);case 22:case 23:return Gi(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ne&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function sp(e,t){switch(_i(t),t.tag){case 1:return ke(t.type)&&il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),H(we),H(fe),Oi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ii(t),null;case 13:if(H(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(G),null;case 4:return yr(),null;case 10:return Fi(t.type._context),null;case 22:case 23:return Gi(),null;case 24:return null;default:return null}}var Dn=!1,de=!1,up=typeof WeakSet=="function"?WeakSet:Set,T=null;function ir(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){J(e,t,n)}else r.current=null}function Zo(e,t,r){try{r()}catch(n){J(e,t,n)}}var us=!1;function cp(e,t){if(Ro=rl,e=Pu(),Ei(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var l=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,s=-1,u=-1,d=0,m=0,h=e,v=null;t:for(;;){for(var w;h!==r||l!==0&&h.nodeType!==3||(s=a+l),h!==o||n!==0&&h.nodeType!==3||(u=a+n),h.nodeType===3&&(a+=h.nodeValue.length),(w=h.firstChild)!==null;)v=h,h=w;for(;;){if(h===e)break t;if(v===r&&++d===l&&(s=a),v===o&&++m===n&&(u=a),(w=h.nextSibling)!==null)break;h=v,v=h.parentNode}h=w}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Do={focusedElem:e,selectionRange:r},rl=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var N=k.memoizedProps,D=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?N:Ue(t.type,N),D);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){J(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=us,us=!1,k}function Hr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Zo(t,r,o)}l=l.next}while(l!==n)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Jo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ec(e){var t=e.alternate;t!==null&&(e.alternate=null,Ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[ln],delete t[Oo],delete t[Qf],delete t[Yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zc(e){return e.tag===5||e.tag===3||e.tag===4}function cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ol));else if(n!==4&&(e=e.child,e!==null))for(qo(e,t,r),e=e.sibling;e!==null;)qo(e,t,r),e=e.sibling}function ei(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ei(e,t,r),e=e.sibling;e!==null;)ei(e,t,r),e=e.sibling}var ie=null,Ae=!1;function dt(e,t,r){for(r=r.child;r!==null;)_c(e,t,r),r=r.sibling}function _c(e,t,r){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Sl,r)}catch{}switch(r.tag){case 5:de||ir(r,t);case 6:var n=ie,l=Ae;ie=null,dt(e,t,r),ie=n,Ae=l,ie!==null&&(Ae?(e=ie,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ie.removeChild(r.stateNode));break;case 18:ie!==null&&(Ae?(e=ie,r=r.stateNode,e.nodeType===8?to(e.parentNode,r):e.nodeType===1&&to(e,r),qr(e)):to(ie,r.stateNode));break;case 4:n=ie,l=Ae,ie=r.stateNode.containerInfo,Ae=!0,dt(e,t,r),ie=n,Ae=l;break;case 0:case 11:case 14:case 15:if(!de&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var o=l,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Zo(r,t,a),l=l.next}while(l!==n)}dt(e,t,r);break;case 1:if(!de&&(ir(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){J(r,t,s)}dt(e,t,r);break;case 21:dt(e,t,r);break;case 22:r.mode&1?(de=(n=de)||r.memoizedState!==null,dt(e,t,r),de=n):dt(e,t,r);break;default:dt(e,t,r)}}function ds(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new up),t.forEach(function(n){var l=xp.bind(null,e,n);r.has(n)||(r.add(n),n.then(l,l))})}}function Oe(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var l=r[n];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,Ae=!1;break e;case 3:ie=s.stateNode.containerInfo,Ae=!0;break e;case 4:ie=s.stateNode.containerInfo,Ae=!0;break e}s=s.return}if(ie===null)throw Error(S(160));_c(o,a,l),ie=null,Ae=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){J(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tc(t,e),t=t.sibling}function Tc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Qe(e),n&4){try{Hr(3,e,e.return),Pl(3,e)}catch(N){J(e,e.return,N)}try{Hr(5,e,e.return)}catch(N){J(e,e.return,N)}}break;case 1:Oe(t,e),Qe(e),n&512&&r!==null&&ir(r,r.return);break;case 5:if(Oe(t,e),Qe(e),n&512&&r!==null&&ir(r,r.return),e.flags&32){var l=e.stateNode;try{Gr(l,"")}catch(N){J(e,e.return,N)}}if(n&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Js(l,o),No(s,a);var d=No(s,o);for(a=0;a<u.length;a+=2){var m=u[a],h=u[a+1];m==="style"?nu(l,h):m==="dangerouslySetInnerHTML"?tu(l,h):m==="children"?Gr(l,h):mi(l,m,h,d)}switch(s){case"input":xo(l,o);break;case"textarea":qs(l,o);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?sr(l,!!o.multiple,w,!1):v!==!!o.multiple&&(o.defaultValue!=null?sr(l,!!o.multiple,o.defaultValue,!0):sr(l,!!o.multiple,o.multiple?[]:"",!1))}l[ln]=o}catch(N){J(e,e.return,N)}}break;case 6:if(Oe(t,e),Qe(e),n&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(N){J(e,e.return,N)}}break;case 3:if(Oe(t,e),Qe(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{qr(t.containerInfo)}catch(N){J(e,e.return,N)}break;case 4:Oe(t,e),Qe(e);break;case 13:Oe(t,e),Qe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Yi=ee())),n&4&&ds(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(de=(d=de)||m,Oe(t,e),de=d):Oe(t,e),Qe(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(h=T=m;T!==null;){switch(v=T,w=v.child,v.tag){case 0:case 11:case 14:case 15:Hr(4,v,v.return);break;case 1:ir(v,v.return);var k=v.stateNode;if(typeof k.componentWillUnmount=="function"){n=v,r=v.return;try{t=n,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(N){J(n,r,N)}}break;case 5:ir(v,v.return);break;case 22:if(v.memoizedState!==null){ps(h);continue}}w!==null?(w.return=v,T=w):ps(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ru("display",a))}catch(N){J(e,e.return,N)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(N){J(e,e.return,N)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Oe(t,e),Qe(e),n&4&&ds(e);break;case 21:break;default:Oe(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(zc(r)){var n=r;break e}r=r.return}throw Error(S(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(Gr(l,""),n.flags&=-33);var o=cs(e);ei(e,o,l);break;case 3:case 4:var a=n.stateNode.containerInfo,s=cs(e);qo(e,s,a);break;default:throw Error(S(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dp(e,t,r){T=e,Pc(e)}function Pc(e,t,r){for(var n=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&n){var a=l.memoizedState!==null||Dn;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||de;s=Dn;var d=de;if(Dn=a,(de=u)&&!d)for(T=l;T!==null;)a=T,u=a.child,a.tag===22&&a.memoizedState!==null?ms(l):u!==null?(u.return=a,T=u):ms(l);for(;o!==null;)T=o,Pc(o),o=o.sibling;T=l,Dn=s,de=d}fs(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):fs(e)}}function fs(e){for(;T!==null;){var t=T;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Pl(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!de)if(r===null)n.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Ue(t.type,r.memoizedProps);n.componentDidUpdate(l,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Xa(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Xa(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&qr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&Jo(t)}catch(v){J(t,t.return,v)}}if(t===e){T=null;break}if(r=t.sibling,r!==null){r.return=t.return,T=r;break}T=t.return}}function ps(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var r=t.sibling;if(r!==null){r.return=t.return,T=r;break}T=t.return}}function ms(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Pl(4,t)}catch(u){J(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var l=t.return;try{n.componentDidMount()}catch(u){J(t,l,u)}}var o=t.return;try{Jo(t)}catch(u){J(t,o,u)}break;case 5:var a=t.return;try{Jo(t)}catch(u){J(t,a,u)}}}catch(u){J(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var fp=Math.ceil,vl=ut.ReactCurrentDispatcher,Hi=ut.ReactCurrentOwner,Re=ut.ReactCurrentBatchConfig,O=0,oe=null,te=null,ae=0,Ne=0,ar=_t(0),ne=0,dn=null,Bt=0,Ll=0,Qi=0,Qr=null,ye=null,Yi=0,wr=1/0,qe=null,gl=!1,ti=null,St=null,Mn=!1,gt=null,yl=0,Yr=0,ri=null,Kn=-1,Gn=0;function he(){return O&6?ee():Kn!==-1?Kn:Kn=ee()}function Nt(e){return e.mode&1?O&2&&ae!==0?ae&-ae:Gf.transition!==null?(Gn===0&&(Gn=hu()),Gn):(e=A,e!==0||(e=window.event,e=e===void 0?16:ju(e.type)),e):1}function Ve(e,t,r,n){if(50<Yr)throw Yr=0,ri=null,Error(S(185));hn(e,r,n),(!(O&2)||e!==oe)&&(e===oe&&(!(O&2)&&(Ll|=r),ne===4&&ht(e,ae)),je(e,n),r===1&&O===0&&!(t.mode&1)&&(wr=ee()+500,zl&&Tt()))}function je(e,t){var r=e.callbackNode;Kd(e,t);var n=tl(e,e===oe?ae:0);if(n===0)r!==null&&Sa(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Sa(r),t===1)e.tag===0?Kf(hs.bind(null,e)):$u(hs.bind(null,e)),Wf(function(){!(O&6)&&Tt()}),r=null;else{switch(vu(n)){case 1:r=xi;break;case 4:r=pu;break;case 16:r=el;break;case 536870912:r=mu;break;default:r=el}r=Uc(r,Lc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Lc(e,t){if(Kn=-1,Gn=0,O&6)throw Error(S(327));var r=e.callbackNode;if(pr()&&e.callbackNode!==r)return null;var n=tl(e,e===oe?ae:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=xl(e,n);else{t=n;var l=O;O|=2;var o=Rc();(oe!==e||ae!==t)&&(qe=null,wr=ee()+500,It(e,t));do try{hp();break}catch(s){Fc(e,s)}while(!0);Li(),vl.current=o,O=l,te!==null?t=0:(oe=null,ae=0,t=ne)}if(t!==0){if(t===2&&(l=_o(e),l!==0&&(n=l,t=ni(e,l))),t===1)throw r=dn,It(e,0),ht(e,n),je(e,ee()),r;if(t===6)ht(e,n);else{if(l=e.current.alternate,!(n&30)&&!pp(l)&&(t=xl(e,n),t===2&&(o=_o(e),o!==0&&(n=o,t=ni(e,o))),t===1))throw r=dn,It(e,0),ht(e,n),je(e,ee()),r;switch(e.finishedWork=l,e.finishedLanes=n,t){case 0:case 1:throw Error(S(345));case 2:Lt(e,ye,qe);break;case 3:if(ht(e,n),(n&130023424)===n&&(t=Yi+500-ee(),10<t)){if(tl(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){he(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Io(Lt.bind(null,e,ye,qe),t);break}Lt(e,ye,qe);break;case 4:if(ht(e,n),(n&4194240)===n)break;for(t=e.eventTimes,l=-1;0<n;){var a=31-Be(n);o=1<<a,a=t[a],a>l&&(l=a),n&=~o}if(n=l,n=ee()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*fp(n/1960))-n,10<n){e.timeoutHandle=Io(Lt.bind(null,e,ye,qe),n);break}Lt(e,ye,qe);break;case 5:Lt(e,ye,qe);break;default:throw Error(S(329))}}}return je(e,ee()),e.callbackNode===r?Lc.bind(null,e):null}function ni(e,t){var r=Qr;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=xl(e,t),e!==2&&(t=ye,ye=r,t!==null&&li(t)),e}function li(e){ye===null?ye=e:ye.push.apply(ye,e)}function pp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var l=r[n],o=l.getSnapshot;l=l.value;try{if(!We(o(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ht(e,t){for(t&=~Qi,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Be(t),n=1<<r;e[r]=-1,t&=~n}}function hs(e){if(O&6)throw Error(S(327));pr();var t=tl(e,0);if(!(t&1))return je(e,ee()),null;var r=xl(e,t);if(e.tag!==0&&r===2){var n=_o(e);n!==0&&(t=n,r=ni(e,n))}if(r===1)throw r=dn,It(e,0),ht(e,t),je(e,ee()),r;if(r===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,ye,qe),je(e,ee()),null}function Ki(e,t){var r=O;O|=1;try{return e(t)}finally{O=r,O===0&&(wr=ee()+500,zl&&Tt())}}function Vt(e){gt!==null&&gt.tag===0&&!(O&6)&&pr();var t=O;O|=1;var r=Re.transition,n=A;try{if(Re.transition=null,A=1,e)return e()}finally{A=n,Re.transition=r,O=t,!(O&6)&&Tt()}}function Gi(){Ne=ar.current,H(ar)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Vf(r)),te!==null)for(r=te.return;r!==null;){var n=r;switch(_i(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&il();break;case 3:yr(),H(we),H(fe),Oi();break;case 5:Ii(n);break;case 4:yr();break;case 13:H(G);break;case 19:H(G);break;case 10:Fi(n.type._context);break;case 22:case 23:Gi()}r=r.return}if(oe=e,te=e=bt(e.current,null),ae=Ne=t,ne=0,dn=null,Qi=Ll=Bt=0,ye=Qr=null,Rt!==null){for(t=0;t<Rt.length;t++)if(r=Rt[t],n=r.interleaved,n!==null){r.interleaved=null;var l=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=l,n.next=a}r.pending=n}Rt=null}return e}function Fc(e,t){do{var r=te;try{if(Li(),Hn.current=hl,ml){for(var n=X.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}ml=!1}if($t=0,le=re=X=null,Wr=!1,sn=0,Hi.current=null,r===null||r.return===null){ne=1,dn=t,te=null;break}e:{var o=e,a=r.return,s=r,u=t;if(t=ae,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=rs(a);if(w!==null){w.flags&=-257,ns(w,a,s,o,t),w.mode&1&&ts(o,d,t),t=w,u=d;var k=t.updateQueue;if(k===null){var N=new Set;N.add(u),t.updateQueue=N}else k.add(u);break e}else{if(!(t&1)){ts(o,d,t),Xi();break e}u=Error(S(426))}}else if(Y&&s.mode&1){var D=rs(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),ns(D,a,s,o,t),Ti(xr(u,s));break e}}o=u=xr(u,s),ne!==4&&(ne=2),Qr===null?Qr=[o]:Qr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=vc(o,u,t);Ga(o,f);break e;case 1:s=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(St===null||!St.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=gc(o,s,t);Ga(o,x);break e}}o=o.return}while(o!==null)}Mc(r)}catch(E){t=E,te===r&&r!==null&&(te=r=r.return);continue}break}while(!0)}function Rc(){var e=vl.current;return vl.current=hl,e===null?hl:e}function Xi(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(Bt&268435455)&&!(Ll&268435455)||ht(oe,ae)}function xl(e,t){var r=O;O|=2;var n=Rc();(oe!==e||ae!==t)&&(qe=null,It(e,t));do try{mp();break}catch(l){Fc(e,l)}while(!0);if(Li(),O=r,vl.current=n,te!==null)throw Error(S(261));return oe=null,ae=0,ne}function mp(){for(;te!==null;)Dc(te)}function hp(){for(;te!==null&&!Ud();)Dc(te)}function Dc(e){var t=Oc(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Mc(e):te=t,Hi.current=null}function Mc(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=sp(r,t),r!==null){r.flags&=32767,te=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,te=null;return}}else if(r=ap(r,t,Ne),r!==null){te=r;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ne===0&&(ne=5)}function Lt(e,t,r){var n=A,l=Re.transition;try{Re.transition=null,A=1,vp(e,t,r,n)}finally{Re.transition=l,A=n}return null}function vp(e,t,r,n){do pr();while(gt!==null);if(O&6)throw Error(S(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Gd(e,o),e===oe&&(te=oe=null,ae=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Mn||(Mn=!0,Uc(el,function(){return pr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var a=A;A=1;var s=O;O|=4,Hi.current=null,cp(e,r),Tc(r,e),Mf(Do),rl=!!Ro,Do=Ro=null,e.current=r,dp(r),Ad(),O=s,A=a,Re.transition=o}else e.current=r;if(Mn&&(Mn=!1,gt=e,yl=l),o=e.pendingLanes,o===0&&(St=null),Vd(r.stateNode),je(e,ee()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],n(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=ti,ti=null,e;return yl&1&&e.tag!==0&&pr(),o=e.pendingLanes,o&1?e===ri?Yr++:(Yr=0,ri=e):Yr=0,Tt(),null}function pr(){if(gt!==null){var e=vu(yl),t=Re.transition,r=A;try{if(Re.transition=null,A=16>e?16:e,gt===null)var n=!1;else{if(e=gt,gt=null,yl=0,O&6)throw Error(S(331));var l=O;for(O|=4,T=e.current;T!==null;){var o=T,a=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:Hr(8,m,o)}var h=m.child;if(h!==null)h.return=m,T=h;else for(;T!==null;){m=T;var v=m.sibling,w=m.return;if(Ec(m),m===d){T=null;break}if(v!==null){v.return=w,T=v;break}T=w}}}var k=o.alternate;if(k!==null){var N=k.child;if(N!==null){k.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}T=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,T=a;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){a=T;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,T=p;else e:for(a=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Pl(9,s)}}catch(E){J(s,s.return,E)}if(s===a){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if(O=l,Tt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Sl,e)}catch{}n=!0}return n}finally{A=r,Re.transition=t}}return!1}function vs(e,t,r){t=xr(r,t),t=vc(e,t,1),e=jt(e,t,1),t=he(),e!==null&&(hn(e,1,t),je(e,t))}function J(e,t,r){if(e.tag===3)vs(e,e,r);else for(;t!==null;){if(t.tag===3){vs(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(St===null||!St.has(n))){e=xr(r,e),e=gc(t,e,1),t=jt(t,e,1),e=he(),t!==null&&(hn(t,1,e),je(t,e));break}}t=t.return}}function gp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&r,oe===e&&(ae&r)===r&&(ne===4||ne===3&&(ae&130023424)===ae&&500>ee()-Yi?It(e,0):Qi|=r),je(e,t)}function Ic(e,t){t===0&&(e.mode&1?(t=Cn,Cn<<=1,!(Cn&130023424)&&(Cn=4194304)):t=1);var r=he();e=it(e,t),e!==null&&(hn(e,t,r),je(e,r))}function yp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ic(e,r)}function xp(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(S(314))}n!==null&&n.delete(t),Ic(e,r)}var Oc;Oc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)xe=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return xe=!1,ip(e,t,r);xe=!!(e.flags&131072)}else xe=!1,Y&&t.flags&1048576&&Bu(t,ul,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Yn(e,t),e=t.pendingProps;var l=hr(t,fe.current);fr(t,r),l=Ai(null,t,n,e,l,r);var o=$i();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(n)?(o=!0,al(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Di(t),l.updater=Tl,t.stateNode=l,l._reactInternals=t,Wo(t,n,e,r),t=Yo(null,t,n,!0,o,r)):(t.tag=0,Y&&o&&zi(t),me(null,t,l,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Yn(e,t),e=t.pendingProps,l=n._init,n=l(n._payload),t.type=n,l=t.tag=kp(n),e=Ue(n,e),l){case 0:t=Qo(null,t,n,e,r);break e;case 1:t=is(null,t,n,e,r);break e;case 11:t=ls(null,t,n,e,r);break e;case 14:t=os(null,t,n,Ue(n.type,e),r);break e}throw Error(S(306,n,""))}return t;case 0:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ue(n,l),Qo(e,t,n,l,r);case 1:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ue(n,l),is(e,t,n,l,r);case 3:e:{if(kc(t),e===null)throw Error(S(387));n=t.pendingProps,o=t.memoizedState,l=o.element,Ku(e,t),fl(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=xr(Error(S(423)),t),t=as(e,t,n,r,l);break e}else if(n!==l){l=xr(Error(S(424)),t),t=as(e,t,n,r,l);break e}else for(be=kt(t.stateNode.containerInfo.firstChild),Ce=t,Y=!0,$e=null,r=Qu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(vr(),n===l){t=at(e,t,r);break e}me(e,t,n,r)}t=t.child}return t;case 5:return Gu(t),e===null&&$o(t),n=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,Mo(n,l)?a=null:o!==null&&Mo(n,o)&&(t.flags|=32),wc(e,t),me(e,t,a,r),t.child;case 6:return e===null&&$o(t),null;case 13:return jc(e,t,r);case 4:return Mi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=gr(t,null,n,r):me(e,t,n,r),t.child;case 11:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ue(n,l),ls(e,t,n,l,r);case 7:return me(e,t,t.pendingProps,r),t.child;case 8:return me(e,t,t.pendingProps.children,r),t.child;case 12:return me(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value,B(cl,n._currentValue),n._currentValue=a,o!==null)if(We(o.value,a)){if(o.children===l.children&&!we.current){t=at(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(o.tag===1){u=nt(-1,r&-r),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),Bo(o.return,r,t),s.lanes|=r;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(S(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),Bo(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}me(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,n=t.pendingProps.children,fr(t,r),l=De(l),n=n(l),t.flags|=1,me(e,t,n,r),t.child;case 14:return n=t.type,l=Ue(n,t.pendingProps),l=Ue(n.type,l),os(e,t,n,l,r);case 15:return yc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ue(n,l),Yn(e,t),t.tag=1,ke(n)?(e=!0,al(t)):e=!1,fr(t,r),hc(t,n,l),Wo(t,n,l,r),Yo(null,t,n,!0,e,r);case 19:return Sc(e,t,r);case 22:return xc(e,t,r)}throw Error(S(156,t.tag))};function Uc(e,t){return fu(e,t)}function wp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,r,n){return new wp(e,t,r,n)}function Zi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kp(e){if(typeof e=="function")return Zi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vi)return 11;if(e===gi)return 14}return 2}function bt(e,t){var r=e.alternate;return r===null?(r=Fe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Xn(e,t,r,n,l,o){var a=2;if(n=e,typeof e=="function")Zi(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return Ot(r.children,l,o,t);case hi:a=8,l|=8;break;case mo:return e=Fe(12,r,t,l|2),e.elementType=mo,e.lanes=o,e;case ho:return e=Fe(13,r,t,l),e.elementType=ho,e.lanes=o,e;case vo:return e=Fe(19,r,t,l),e.elementType=vo,e.lanes=o,e;case Gs:return Fl(r,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ys:a=10;break e;case Ks:a=9;break e;case vi:a=11;break e;case gi:a=14;break e;case ft:a=16,n=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Fe(a,r,t,l),t.elementType=e,t.type=n,t.lanes=o,t}function Ot(e,t,r,n){return e=Fe(7,e,n,t),e.lanes=r,e}function Fl(e,t,r,n){return e=Fe(22,e,n,t),e.elementType=Gs,e.lanes=r,e.stateNode={isHidden:!1},e}function uo(e,t,r){return e=Fe(6,e,null,t),e.lanes=r,e}function co(e,t,r){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jp(e,t,r,n,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ji(e,t,r,n,l,o,a,s,u){return e=new jp(e,t,r,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Fe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(o),e}function Sp(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Ac(e){if(!e)return Et;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var r=e.type;if(ke(r))return Au(e,r,t)}return t}function $c(e,t,r,n,l,o,a,s,u){return e=Ji(r,n,!0,e,l,o,a,s,u),e.context=Ac(null),r=e.current,n=he(),l=Nt(r),o=nt(n,l),o.callback=t??null,jt(r,o,l),e.current.lanes=l,hn(e,l,n),je(e,n),e}function Rl(e,t,r,n){var l=t.current,o=he(),a=Nt(l);return r=Ac(r),t.context===null?t.context=r:t.pendingContext=r,t=nt(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=jt(l,t,a),e!==null&&(Ve(e,l,a,o),Wn(e,l,a)),a}function wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function qi(e,t){gs(e,t),(e=e.alternate)&&gs(e,t)}function Np(){return null}var Bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ea(e){this._internalRoot=e}Dl.prototype.render=ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Rl(e,t,null,null)};Dl.prototype.unmount=ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Rl(null,e,null,null)}),t[ot]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=xu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<mt.length&&t!==0&&t<mt[r].priority;r++);mt.splice(r,0,e),r===0&&ku(e)}};function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ys(){}function bp(e,t,r,n,l){if(l){if(typeof n=="function"){var o=n;n=function(){var d=wl(a);o.call(d)}}var a=$c(t,n,e,0,null,!1,!1,"",ys);return e._reactRootContainer=a,e[ot]=a.current,rn(e.nodeType===8?e.parentNode:e),Vt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var s=n;n=function(){var d=wl(u);s.call(d)}}var u=Ji(e,0,!1,null,null,!1,!1,"",ys);return e._reactRootContainer=u,e[ot]=u.current,rn(e.nodeType===8?e.parentNode:e),Vt(function(){Rl(t,u,r,n)}),u}function Il(e,t,r,n,l){var o=r._reactRootContainer;if(o){var a=o;if(typeof l=="function"){var s=l;l=function(){var u=wl(a);s.call(u)}}Rl(t,a,e,l)}else a=bp(r,t,e,l,n);return wl(a)}gu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ir(t.pendingLanes);r!==0&&(wi(t,r|1),je(t,ee()),!(O&6)&&(wr=ee()+500,Tt()))}break;case 13:Vt(function(){var n=it(e,1);if(n!==null){var l=he();Ve(n,e,1,l)}}),qi(e,1)}};ki=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var r=he();Ve(t,e,134217728,r)}qi(e,134217728)}};yu=function(e){if(e.tag===13){var t=Nt(e),r=it(e,t);if(r!==null){var n=he();Ve(r,e,t,n)}qi(e,t)}};xu=function(){return A};wu=function(e,t){var r=A;try{return A=e,t()}finally{A=r}};Co=function(e,t,r){switch(t){case"input":if(xo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var l=El(n);if(!l)throw Error(S(90));Zs(n),xo(n,l)}}}break;case"textarea":qs(e,r);break;case"select":t=r.value,t!=null&&sr(e,!!r.multiple,t,!1)}};iu=Ki;au=Vt;var Cp={usingClientEntryPoint:!1,Events:[gn,tr,El,lu,ou,Ki]},Rr={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ep={bundleType:Rr.bundleType,version:Rr.version,rendererPackageName:Rr.rendererPackageName,rendererConfig:Rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cu(e),e===null?null:e.stateNode},findFiberByHostInstance:Rr.findFiberByHostInstance||Np,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var In=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!In.isDisabled&&In.supportsFiber)try{Sl=In.inject(Ep),Ge=In}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp;ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ta(t))throw Error(S(200));return Sp(e,t,null,r)};ze.createRoot=function(e,t){if(!ta(e))throw Error(S(299));var r=!1,n="",l=Bc;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ji(e,1,!1,null,null,r,!1,n,l),e[ot]=t.current,rn(e.nodeType===8?e.parentNode:e),new ea(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=cu(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Vt(e)};ze.hydrate=function(e,t,r){if(!Ml(t))throw Error(S(200));return Il(null,e,t,!0,r)};ze.hydrateRoot=function(e,t,r){if(!ta(e))throw Error(S(405));var n=r!=null&&r.hydratedSources||null,l=!1,o="",a=Bc;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=$c(t,null,e,1,r??null,l,!1,o,a),e[ot]=t.current,rn(e),n)for(e=0;e<n.length;e++)r=n[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Dl(t)};ze.render=function(e,t,r){if(!Ml(t))throw Error(S(200));return Il(null,e,t,!1,r)};ze.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(S(40));return e._reactRootContainer?(Vt(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};ze.unstable_batchedUpdates=Ki;ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ml(r))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Il(e,t,r,!1,n)};ze.version="18.3.1-next-f1338f8080-20240426";function Vc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vc)}catch(e){console.error(e)}}Vc(),Vs.exports=ze;var zp=Vs.exports,Wc,xs=zp;Wc=xs.createRoot,xs.hydrateRoot;const kr="http://localhost:3001",ra="dk_token",Hc=()=>localStorage.getItem(ra),_p=e=>localStorage.setItem(ra,e),ws=()=>localStorage.removeItem(ra);function fn(){const e=Hc();return e?{Authorization:`Bearer ${e}`}:{}}async function Qt(e,t={}){const r=await fetch(`${kr}${e}`,{headers:{"Content-Type":"application/json",...fn(),...t.headers||{}},...t});if(!r.ok){const n=await r.json().catch(()=>({}));throw Object.assign(new Error(n.error||r.statusText),{status:r.status})}return r.json()}function Ze(e){return e?e.startsWith("http://")||e.startsWith("https://")?e:`${kr}${e}`:null}async function ks(){return Qt("/cards")}async function js(e){const t=e.length===0?"?allowEmpty=true":"";return Qt(`/cards${t}`,{method:"PUT",body:JSON.stringify(e)})}async function Ss(){return Qt("/stats")}async function Ns(e){return Qt("/stats",{method:"PUT",body:JSON.stringify(e)})}async function Qc(e,t){return Qt("/explain",{method:"POST",body:JSON.stringify({german:e.german,translation:e.translation,note:e.note||"",mode:t})}).then(r=>r.text)}async function Tp(e){const t=new FormData;t.append("file",e);const r=await fetch(`${kr}/upload`,{method:"POST",body:t,headers:fn()});if(!r.ok)throw new Error("Error al subir archivo.");return r.json()}async function Pp(e){const t=e.split("/media/")[1];t&&await fetch(`${kr}/media/${t}`,{method:"DELETE",headers:fn()})}function Lp(e,t){let{repetitions:r,easiness:n,interval:l}=e,o=e.lapses??0;t>=3?(r===0?l=1:r===1?l=6:l=Math.round(l*n),r+=1):(r>=1&&(o+=1),r=0,l=1),n=Math.max(1.3,n+.1-(5-t)*(.08+(5-t)*.02));const a=Date.now()+l*864e5;return{repetitions:r,easiness:n,interval:l,nextReview:a,lastGrade:t,lapses:o}}const Fp=4;function Rp(e){return(e.lapses??0)>=Fp}function Mt(e){return e.repetitions===0&&e.lastGrade==null}function Dp(e){const t=Math.ceil((e-Date.now())/864e5);return t<=0?"Hoy":t===1?"Mañana":`${t} días`}function Ol(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Yc(e,t){return Math.round((new Date(t+"T00:00:00")-new Date(e+"T00:00:00"))/864e5)}const pn=20;function na(e){return e&&e.day===Ol()?e.newToday??0:0}function Mp(e,t=!1){const r=Ol(),n=t?1:0;if(!e||!e.day)return{day:r,todayCount:1,currentStreak:1,longestStreak:1,dailyNewLimit:(e==null?void 0:e.dailyNewLimit)??pn,newToday:n};const l=e.dailyNewLimit??pn;if(e.day===r)return{...e,todayCount:e.todayCount+1,newToday:(e.newToday??0)+n,dailyNewLimit:l};const o=Yc(e.day,r);if(o<=0)return{...e,todayCount:e.todayCount+1,newToday:(e.newToday??0)+n,dailyNewLimit:l};const a=o===1?e.currentStreak+1:1;return{day:r,todayCount:1,currentStreak:a,longestStreak:Math.max(e.longestStreak||0,a),dailyNewLimit:l,newToday:n}}const Kc={de:"de-DE",fr:"fr-FR"};let oi=[];function bs(){window.speechSynthesis&&(oi=window.speechSynthesis.getVoices()||[])}var Ts,Ps;typeof window<"u"&&window.speechSynthesis&&(bs(),(Ps=(Ts=window.speechSynthesis).addEventListener)==null||Ps.call(Ts,"voiceschanged",bs));function Ip(e){var o;const t=oi.length?oi:((o=window.speechSynthesis)==null?void 0:o.getVoices())||[],r=e.toLowerCase(),n=r.slice(0,2),l=a=>a.lang.replace("_","-").toLowerCase();return t.find(a=>l(a)===r)||t.find(a=>l(a).startsWith(n))||null}let Gc="de";function Op(e){Kc[e]&&(Gc=e)}function Cs(e){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e),r=Kc[Gc]||"de-DE";t.lang=r,t.rate=.9;const n=Ip(r);n&&(t.voice=n),window.speechSynthesis.speak(t)}function kl(e){var t;if(e){if(e.audioUrl){(t=window.speechSynthesis)==null||t.cancel(),new Audio(Ze(e.audioUrl)).play().catch(()=>Cs(e.german));return}Cs(e.german)}}function Up(){var e;(e=window.speechSynthesis)==null||e.cancel()}const ii="@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Inter:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');",Xc=`

  :root {
    /* Anthropic brand palette: ivory, paper, ink, Claude coral */
    --bg: #F0EEE6;
    --surface: #FAF9F5;
    --surface-alt: #E8E4D9;
    --border: #E3DFD3;
    --border-input: #D4CFC0;
    --text: #1F1E1D;
    --text-2: #57544D;
    --text-dim: #7A776F;
    --text-faint: #A3A094;
    --accent: #D97757;
    --accent-strong: #C15F3C;
    --accent-soft: #F6E6DD;
    --danger: #B0342B;
    --danger-hover: #8E2A22;
    --danger-soft: #F7ECE8;
    --ok: #5A7A4E;
    --ok-text: #4A6840;
    --ok-soft: #ECF0E4;
    --font-display: 'Lora', Georgia, serif;
    --font-ui: 'Inter', -apple-system, 'Segoe UI', sans-serif;
    --font-mono: 'DM Mono', monospace;
    --r-sm: 10px;
    --r-md: 14px;
    --r-lg: 18px;
    --r-pill: 999px;
    --shadow-card: 0 16px 40px -14px rgba(31,30,29,.16), 0 4px 12px -4px rgba(31,30,29,.06), 0 0 0 1px rgba(31,30,29,.02);
    --shadow-soft: 0 4px 14px -5px rgba(31,30,29,.10), 0 1px 3px rgba(31,30,29,.05);
    --shadow-pop: 0 6px 16px -4px rgba(217,119,87,.40);
    --focus-ring: 0 0 0 3px rgba(217,119,87,.20);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-ui);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  ::selection { background: rgba(217,119,87,.25); }

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
    border-radius: 4px;
    overflow: hidden;
    flex-shrink: 0;
    box-shadow: 0 0 0 1px rgba(60,40,20,0.12);
  }

  .logo-text {
    font-family: var(--font-display);
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
    font-family: var(--font-ui);
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0.45rem 0.85rem;
    border-radius: var(--r-pill);
    transition: color 0.2s, background 0.2s;
  }

  .nav-btn.active, .nav-btn:hover {
    color: var(--accent-strong);
    background: var(--accent-soft);
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
    border-radius: var(--r-lg);
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
    border-radius: var(--r-lg);
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
    background: linear-gradient(150deg, #FBF4EE, var(--accent-soft));
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
    font-family: var(--font-display);
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
    font-family: var(--font-display);
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

  /* Grades — calm, uniform buttons: a small tinted dot hints the scale instead
     of rainbow-colored numbers; hover tints the button toward its grade softly. */
  .grades {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .grade-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    padding: 0.75rem 0.4rem;
    box-shadow: var(--shadow-soft);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    cursor: pointer;
    transition: transform 0.16s ease, box-shadow 0.16s ease, background 0.2s, border-color 0.2s;
    font-family: var(--font-ui);
  }

  .grade-btn.g0 { --grade-c: #AE5345; }
  .grade-btn.g1 { --grade-c: #BC6E4B; }
  .grade-btn.g2 { --grade-c: #B98A52; }
  .grade-btn.g3 { --grade-c: #9A9159; }
  .grade-btn.g4 { --grade-c: #788859; }
  .grade-btn.g5 { --grade-c: #5A7A4E; }

  .grade-btn::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--grade-c);
    opacity: 0.85;
  }

  .grade-btn:hover {
    background: color-mix(in srgb, var(--grade-c) 8%, var(--surface));
    border-color: color-mix(in srgb, var(--grade-c) 45%, var(--border));
    box-shadow: var(--shadow-card);
    transform: translateY(-2px);
  }

  .grade-num {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text);
  }

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
    border-radius: 12px;
    color: var(--text-dim);
    font-family: var(--font-ui);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    margin-bottom: 0.75rem;
  }

  .explain-btn:hover { color: var(--accent-strong); border-color: var(--accent); }
  .explain-btn:disabled { opacity: 0.3; cursor: not-allowed; }

  .explanation {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    box-shadow: var(--shadow-soft);
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
    border-radius: var(--r-lg);
    padding: 2rem;
  }

  .form-title {
    font-family: var(--font-display);
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
    border-radius: 12px;
    padding: 0.7rem 0.9rem;
    color: var(--text);
    font-family: var(--font-ui);
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
    background: var(--accent);
    border: none;
    box-shadow: var(--shadow-pop);
    border-radius: var(--r-pill);
    color: #FFFFFF;
    font-family: var(--font-ui);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.8rem 2.2rem;
    cursor: pointer;
    transition: background 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease;
  }

  .submit-btn:hover { background: var(--accent-strong); transform: translateY(-2px); box-shadow: 0 8px 20px -4px rgba(193,95,60,0.40); }

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
    border-radius: 22px;
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
    border-radius: 12px;
    padding: 0.8rem 1rem;
    color: var(--text);
    font-family: var(--font-ui);
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }
  .auth-input:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }
  .auth-input::placeholder { color: var(--text-faint); }
  .auth-error { color: var(--danger); font-size: 0.8rem; margin: 0; }
  .auth-btn {
    margin-top: 0.4rem;
    background: var(--accent);
    box-shadow: var(--shadow-pop);
    border: none;
    border-radius: var(--r-pill);
    color: #FFFFFF;
    font-family: var(--font-ui);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 0.85rem;
    cursor: pointer;
    transition: background 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease;
  }
  .auth-btn:hover:not(:disabled) { background: var(--accent-strong); transform: translateY(-2px); box-shadow: 0 8px 20px -4px rgba(193,95,60,0.40); }
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
    border-radius: 24px;
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
    font-family: var(--font-display); font-style: italic;
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
  .celebrate-streak strong { color: var(--accent-strong); }
  .celebrate-btn {
    background: var(--accent); box-shadow: var(--shadow-pop);
    border: none; border-radius: var(--r-pill); color: #FFFFFF;
    font-family: var(--font-ui); font-size: 0.72rem; font-weight: 600;
    letter-spacing: 0.14em; text-transform: uppercase;
    padding: 0.8rem 2.5rem; cursor: pointer;
    transition: background 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease;
  }
  .celebrate-btn:hover { background: var(--accent-strong); transform: translateY(-2px); box-shadow: 0 8px 20px -4px rgba(193,95,60,0.40); }

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
    border-radius: var(--r-lg);
    box-shadow: var(--shadow-soft);
    padding: 1rem 1.25rem;
    margin-bottom: 1.5rem;
  }
  .streak-main { display: flex; align-items: baseline; gap: 0.5rem; }
  .streak-flame { font-size: 1.5rem; }
  .streak-num { font-family: var(--font-display); font-size: 2rem; font-weight: 700; color: var(--accent); line-height: 1; }
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
    font-family: var(--font-display);
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
    padding: 0.65rem 0.85rem;
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-soft);
    border-radius: var(--r-md);
    transition: box-shadow 0.16s ease, transform 0.16s ease;
  }

  .list-item:hover { box-shadow: 0 8px 20px -6px rgba(31,30,29,.14); transform: translateY(-1px); }

  .li-actions { display: flex; align-items: center; gap: 0.4rem; }

  .li-german {
    font-family: var(--font-display);
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

  .li-next.due { color: var(--accent-strong); }

  .delete-btn {
    background: none;
    border: none;
    color: var(--text-faint);
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
    transition: color 0.2s;
    font-family: var(--font-ui);
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
    font-family: var(--font-ui);
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
    border-radius: 12px;
    padding: 0.7rem 0.9rem;
    color: var(--text-2);
    font-family: var(--font-mono);
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
  .bulk-replace-row input { accent-color: var(--accent); cursor: pointer; }
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
    color: var(--accent-strong);
    background: var(--accent-soft);
    padding: 0.1em 0.35em;
    border-radius: 6px;
    font-family: var(--font-mono);
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
    border-radius: 10px;
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
    accent-color: var(--accent);
    height: 32px;
    flex-shrink: 0;
  }


  .mode-toggle {
    background: none;
    border: none;
    color: var(--text-faint);
    font-family: var(--font-ui);
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
    font-family: var(--font-ui);
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
    font-family: var(--font-ui);
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    padding: 0.5rem 0.85rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .url-set-btn:hover { background: var(--accent-soft); color: var(--accent-strong); }

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
    font-family: var(--font-ui);
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
    border-radius: 6px;
    border: 1px solid var(--border);
  }

  .media-remove {
    background: none;
    border: none;
    color: var(--text-faint);
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0 0.2rem;
    font-family: var(--font-ui);
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
    border-radius: var(--r-pill);
    color: var(--text-faint);
    font-family: var(--font-ui);
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
    border-radius: var(--r-pill);
    color: var(--text-faint);
    font-family: var(--font-ui);
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
    background: rgba(31,30,29,0.45);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.5rem;
  }

  .confirm-dialog {
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-radius: var(--r-lg);
    padding: 2rem;
    max-width: 360px;
    width: 100%;
  }

  .confirm-title {
    font-family: var(--font-display);
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
    border-radius: var(--r-pill);
    color: var(--text-dim);
    font-family: var(--font-ui);
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
    border-radius: var(--r-pill);
    color: #FFFFFF;
    font-family: var(--font-ui);
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
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-pill);
    padding: 0.6rem 2.2rem 0.6rem 1.1rem;
    color: var(--text);
    font-family: var(--font-ui);
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
    font-family: var(--font-ui);
    flex-shrink: 0;
  }
  .edit-btn:hover { color: var(--accent); }

  /* ── Edit modal ── */
  .edit-dialog {
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-radius: var(--r-lg);
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
    box-shadow: var(--shadow-card);
    border-radius: var(--r-lg);
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
    border-radius: 12px;
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
    font-family: var(--font-display);
    font-size: 1.6rem;
    color: var(--text);
    text-align: center;
    line-height: 1.2;
  }

  .card-preview-trans {
    font-family: var(--font-display);
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
    border-radius: 8px;
  }

  .img-preview-overlay {
    position: fixed;
    inset: 0;
    background: rgba(31,30,29,0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.5rem;
  }

  .img-preview-dialog {
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-card);
    border-radius: var(--r-lg);
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
    font-family: var(--font-display);
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
    border-radius: 12px;
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
    border-radius: 10px;
    padding: 0.5rem 0.75rem;
    color: var(--text);
    font-family: var(--font-ui);
    font-size: 0.72rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .img-preview-url-input:focus { border-color: var(--accent); }
  .img-preview-url-input::placeholder { color: var(--text-faint); }

  .img-preview-save-btn {
    background: var(--accent);
    border: none;
    border-radius: var(--r-pill);
    color: #FFFFFF;
    font-family: var(--font-ui);
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0 1rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .img-preview-save-btn:hover { background: var(--accent-strong); }

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
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-pill);
    color: var(--text-faint);
    font-family: var(--font-ui);
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .list-filter-btn.active { border-color: var(--accent); color: var(--accent-strong); background: var(--accent-soft); }
  .list-filter-btn:hover:not(.active) { border-color: var(--text-faint); color: var(--text-2); }

  /* ── Toast ── */
  .toast {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border: 1px solid color-mix(in srgb, var(--ok) 30%, var(--border));
    border-radius: var(--r-pill);
    padding: 0.65rem 1.4rem;
    font-family: var(--font-ui);
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
    font-family: var(--font-display);
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
    box-shadow: var(--shadow-soft);
    border-radius: var(--r-lg);
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
    background: var(--bg);
    border-radius: var(--r-pill);
    overflow: hidden;
  }

  .stats-bar {
    height: 100%;
    border-radius: var(--r-pill);
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
    font-family: var(--font-display);
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
    border: 1px solid var(--border);
    box-shadow: var(--shadow-soft);
    border-radius: var(--r-md);
    padding: 1rem 0.75rem;
    text-align: center;
    transition: transform 0.16s ease, box-shadow 0.16s ease;
  }
  .stats-kpi:hover { box-shadow: var(--shadow-card); transform: translateY(-2px); }

  .kpi-val {
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 600;
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
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 12px;
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
    font-family: var(--font-ui);
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
    font-family: var(--font-display);
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-2);
    border-left: 3px solid var(--accent);
    padding-left: 1rem;
  }
  .help-intro strong { color: var(--text); }

  .help-section {
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-soft);
    border-radius: var(--r-md);
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
    color: var(--accent-strong);
    background: var(--accent-soft);
    border-radius: var(--r-pill);
    padding: 0.18rem 0.6rem;
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
    border: 1px solid var(--border);
    box-shadow: var(--shadow-soft);
    border-radius: var(--r-lg);
    padding: 1.5rem;
  }

  .settings-label {
    font-family: var(--font-display);
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
    border-radius: 12px;
    box-shadow: var(--shadow-soft);
    color: var(--text);
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }
  .step-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
  .step-btn:disabled { opacity: 0.35; cursor: not-allowed; }
  .step-val {
    font-family: var(--font-ui);
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
    padding: 0.4rem 0.85rem;
    border: 1px solid var(--border-input);
    background: none;
    border-radius: var(--r-pill);
    color: var(--text-dim);
    font-family: var(--font-ui);
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .preset-chip:hover { border-color: var(--accent); color: var(--accent-strong); }
  .preset-chip.active {
    background: var(--accent-soft);
    border-color: var(--accent);
    color: var(--accent-strong);
  }

  .settings-note {
    font-size: 0.75rem;
    line-height: 1.6;
    color: var(--text-dim);
    background: var(--accent-soft);
    border-radius: 12px;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
  }
  .settings-note strong { color: var(--accent-strong); }

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
    top: 0.85rem;
    left: 0.85rem;
    font-size: 0.58rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-2);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--r-pill);
    padding: 0.22rem 0.6rem;
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
    border-radius: 10px;
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
    font-family: var(--font-display);
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

  /* compact variant used inside answer-feedback rows */
  .audio-replay-btn.small {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
    margin-top: 0;
  }

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
    font-family: var(--font-display);
    font-size: 2rem;
    color: var(--text);
    text-align: center;
    line-height: 1.2;
  }

  .t2-divider {
    width: 2rem;
    height: 2px;
    border-radius: var(--r-pill);
    background: var(--accent);
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
    font-family: var(--font-display);
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
    border-radius: 10px;
    color: var(--text-faint);
    font-family: var(--font-ui);
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
    line-height: 1.4;
  }
  .type-btn.active {
    border-color: var(--accent);
    color: var(--accent-strong);
    background: var(--accent-soft);
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
    font-family: var(--font-display);
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
    border-bottom: 2px solid var(--accent);
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
    font-family: var(--font-display);
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
    font-family: var(--font-ui);
    font-size: 1rem;
    outline: none;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }
  .answer-input:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }
  .answer-input.correct { border-color: color-mix(in srgb, var(--ok) 45%, var(--border)); background: var(--ok-soft); }
  .answer-input.wrong   { border-color: color-mix(in srgb, var(--danger) 40%, var(--border)); background: var(--danger-soft); }
  .answer-input.correct:focus { border-color: var(--ok); box-shadow: 0 0 0 3px rgba(90,122,78,0.15); }
  .answer-input.wrong:focus { border-color: var(--danger); box-shadow: 0 0 0 3px rgba(176,52,43,0.15); }

  .answer-check-btn {
    background: var(--accent);
    border: none;
    border-radius: var(--r-pill);
    color: #FFFFFF;
    font-family: var(--font-ui);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0 1.35rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .answer-check-btn:hover { background: var(--accent-strong); }
  .answer-check-btn:disabled { background: var(--border-input); color: var(--text-faint); cursor: default; }

  .reveal-btn {
    background: none;
    border: 1px dashed var(--text-faint);
    border-radius: var(--r-pill);
    color: var(--text-faint);
    font-family: var(--font-ui);
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
    border-radius: var(--r-pill);
    color: var(--accent-strong);
    font-family: var(--font-ui);
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
    font-size: 0.78rem;
    padding: 0.7rem 1rem;
    border-radius: 12px;
    line-height: 1.5;
    overflow-wrap: break-word;
  }
  .answer-feedback.correct {
    background: var(--ok-soft);
    border: 1px solid color-mix(in srgb, var(--ok) 28%, transparent);
    color: var(--ok-text);
  }
  .answer-feedback.wrong {
    background: var(--danger-soft);
    border: 1px solid color-mix(in srgb, var(--danger) 25%, transparent);
    color: #8E3D30;
  }
  .answer-feedback strong { font-weight: 600; color: var(--text); }

  /* ── Article buttons (type6) ── */
  .article-btns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
  }

  .article-btn {
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    box-shadow: var(--shadow-soft);
    background: var(--surface);
    font-family: var(--font-display);
    font-size: 1.4rem;
    color: var(--text);
    cursor: pointer;
    transition: all 0.15s;
    text-align: center;
  }
  .article-btn:hover:not(:disabled) { color: var(--accent-strong); border-color: var(--accent); background: var(--accent-soft); transform: translateY(-2px); box-shadow: var(--shadow-card); }
  .article-btn.correct { border-color: color-mix(in srgb, var(--ok) 40%, var(--border)); color: var(--ok-text); background: var(--ok-soft); }
  .article-btn.wrong   { border-color: color-mix(in srgb, var(--danger) 35%, var(--border)); color: #8E3D30; background: var(--danger-soft); }
  .article-btn.reveal  { border-color: color-mix(in srgb, var(--ok) 40%, var(--border)); color: var(--ok-text); background: var(--ok-soft); }
  .article-btn:disabled { cursor: default; opacity: 0.7; }

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
      border: 1px solid var(--border);
      border-radius: var(--r-md);
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
`,jr={de:["der","die","das"],fr:["le","la","l'"]},Ie={de:{name:"Alemán",code:"DE",wordPh:"z.B. der Schlüssel",blankWordPh:"z.B. Hund (solo la palabra)",exLabel:"Ejemplo en alemán",exPh:"Der Hund läuft schnell.",blankPh:"Der ___ läuft schnell.",bulkPh:`[
  { "german": "der Hund", "translation": "el perro", "note": "masc." },
  { "german": "die Katze", "translation": "la gata" }
]`},fr:{name:"Francés",code:"FR",wordPh:"p.ej. le chien",blankWordPh:"p.ej. chien (solo la palabra)",exLabel:"Ejemplo en francés",exPh:"Le chien court vite.",blankPh:"Le ___ court vite.",bulkPh:`[
  { "german": "le chien", "translation": "el perro", "note": "masc." },
  { "german": "la maison", "translation": "la casa" }
]`}},st={type1:"Imagen",type2:"Ejemplo",type4:"Traducir",type5:"Completar",type6:"Artículo"},la=["type1","type5","type6"];function On(e){return la.includes(e.cardType)}function oa(e){const t=Ie[e]||Ie.de,r=(jr[e]||jr.de).join(" / "),n={type1:"Muestra una imagen; la tocas para voltear y ver la palabra. Requiere una URL de imagen.",type2:"Muestra la palabra con una frase de ejemplo; volteas para ver la traducción.",type4:`Te muestra el español y escribes la palabra en ${t.name.toLowerCase()}; corrige tu respuesta.`,type5:"Una frase con un hueco (___); escribes la palabra que falta.",type6:`Eliges el artículo/género correcto (${r}).`};return Object.keys(st).map(l=>({id:l,name:st[l],tip:n[l]}))}function xn(e,t="de"){const r=jr[t]||jr.de,n=(e||"").trim(),l=n.toLowerCase(),o=r.find(s=>s.endsWith("'")?l.startsWith(s):l.startsWith(s+" "))||"",a=o?n.slice(o.length).trimStart():n;return{articles:r,correct:o,bare:a}}function Zc({cardType:e,german:t,translation:r,example:n},l){return!(t!=null&&t.trim())||!(r!=null&&r.trim())?"Completa la palabra y la traducción.":e==="type5"&&!(n||"").includes("___")?"Las tarjetas de Completar necesitan una oración con ___ donde va la palabra.":e==="type6"&&!xn(t,l).correct?`Las tarjetas de Artículo deben empezar con el artículo: ${(jr[l]||jr.de).join(", ")}.`:null}const Ap=[{n:0,label:"Nada"},{n:1,label:"Mal"},{n:2,label:"Difícil"},{n:3,label:"Ok"},{n:4,label:"Bien"},{n:5,label:"Fácil"}];function $p(e,t,r){if(!e||!t)return e;const l=(xn(t,r).bare||t).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return e.split(new RegExp(`(${l})`,"gi")).map((a,s)=>s%2===1?i.jsx("em",{children:a},s):a)}function Bp({card:e}){return i.jsxs("div",{className:"t1-front",children:[i.jsx("div",{className:"card-type-badge",children:st.type1}),e.imageUrl?i.jsx("img",{className:"t1-front-img",src:Ze(e.imageUrl),alt:""}):i.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-faint)",border:"1px dashed var(--border-input)",padding:"1.5rem 2rem",borderRadius:"10px"},children:"sin imagen"}),i.jsx("div",{className:"t1-front-hint",children:"toca para voltear"})]})}function Vp({card:e,onSpeak:t}){return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-type-badge",children:st.type1}),i.jsx("div",{className:"card-hint",children:"califica abajo"}),i.jsx("div",{className:"t1-back-word",children:e.german}),e.note&&i.jsx("div",{className:"t1-back-note",children:e.note}),i.jsx("button",{className:"audio-replay-btn",onClick:r=>{r.stopPropagation(),t()},title:"Pronunciar",children:"▶"})]})}function Wp({card:e,language:t}){return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-type-badge",children:st.type2}),i.jsx("div",{className:"card-hint",children:"toca para voltear"}),i.jsxs("div",{className:"t2-front",children:[i.jsx("div",{className:"t2-word",children:e.german}),e.example&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"t2-divider"}),i.jsx("div",{className:"t2-example",children:$p(e.example,e.german,t)})]})]})]})}function Hp({card:e,onSpeak:t}){return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-type-badge",children:st.type2}),i.jsx("div",{className:"card-hint",children:"califica abajo"}),i.jsxs("div",{className:"t2-back",children:[i.jsx("div",{className:"t2-translation",children:e.translation}),e.note&&i.jsx("div",{className:"card-note",children:e.note}),i.jsx("button",{className:"audio-replay-btn",style:{marginTop:"0.5rem"},onClick:r=>{r.stopPropagation(),t()},title:"Pronunciar",children:"▶"}),e.exampleTranslation&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"t2-divider",style:{marginTop:"0.5rem"}}),i.jsxs("div",{className:"t2-example-trans",children:['"',e.exampleTranslation,'"']})]})]})]})}function Qp({card:e,language:t}){const r=Ie[t]||Ie.de;return i.jsxs("div",{className:"t4-front",children:[i.jsx("div",{className:"card-type-badge",children:st.type4}),i.jsxs("div",{className:"t4-label",children:["¿Cómo se dice en ",r.name.toLowerCase(),"?"]}),i.jsx("div",{className:"t4-word",children:e.translation}),e.note&&i.jsx("div",{className:"t4-note",children:e.note})]})}function Yp({card:e}){const r=(e.example||"").split("___");return i.jsxs("div",{className:"t5-front",children:[i.jsx("div",{className:"card-type-badge",children:st.type5}),e.imageUrl&&i.jsx("img",{className:"t1-front-img",src:Ze(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"45%",maxWidth:"80%",marginBottom:"0.25rem"}}),i.jsx("div",{className:"t5-sentence",children:r.map((n,l)=>i.jsxs(j.Fragment,{children:[n,l<r.length-1&&i.jsx("span",{className:"t5-blank",children:"_____"})]},l))}),e.note&&i.jsx("div",{className:"t4-note",style:{fontSize:"0.62rem"},children:e.note})]})}function Kp({card:e,language:t}){const{bare:r}=xn(e.german,t);return i.jsxs("div",{className:"t6-front",children:[i.jsx("div",{className:"card-type-badge",children:st.type6}),e.imageUrl&&i.jsx("img",{className:"t1-front-img",src:Ze(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"50%",maxWidth:"80%",marginBottom:"0.5rem"}}),i.jsx("div",{className:"t6-label",children:"¿Cuál es el artículo?"}),i.jsxs("div",{className:"t6-word",children:["___ ",r]})]})}function Jc({onGrade:e}){return i.jsx("div",{className:"grades",children:Ap.map(({n:t,label:r})=>i.jsxs("button",{className:`grade-btn g${t}`,onClick:()=>e(t),children:[i.jsx("span",{className:"grade-num",children:t}),i.jsx("span",{className:"grade-label",children:r})]},t))})}function ia({onExplain:e,explaining:t,explanation:r}){return i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"explain-btn",onClick:e,disabled:t,children:t?"Consultando IA…":"✦ Explicar con IA"}),r&&i.jsx("div",{className:"explanation",children:r})]})}function ai({card:e}){return i.jsx("button",{className:"audio-replay-btn small",onClick:()=>kl(e),title:"Pronunciar",children:"▶"})}function qc({card:e,placeholder:t,messages:r,onGrade:n,onExplain:l,explaining:o,explanation:a}){const[s,u]=j.useState(""),[d,m]=j.useState(null),h=j.useRef(null);j.useEffect(()=>{var k;(k=h.current)==null||k.focus()},[]);const v=()=>{if(!s.trim())return;const k=s.trim().toLowerCase()===e.german.trim().toLowerCase();m(k?"correct":"wrong")},w=()=>{m("revealed"),kl(e)};return i.jsxs("div",{className:"answer-zone",children:[i.jsxs("div",{className:"answer-input-row",children:[i.jsx("input",{ref:h,className:`answer-input ${d==="wrong"?"wrong":d==="correct"?"correct":""}`,value:s,onChange:k=>u(k.target.value),onKeyDown:k=>{k.key==="Enter"&&!d&&v()},placeholder:t,disabled:!!d}),i.jsx("button",{className:"answer-check-btn",onClick:v,disabled:!!d||!s.trim(),children:"OK"}),i.jsx("button",{className:"reveal-btn",onClick:w,disabled:!!d,children:"Revelar"})]}),(d==="correct"||d==="wrong")&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`answer-feedback ${d}`,style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsx("span",{style:{minWidth:0},children:r[d]}),i.jsx(ai,{card:e})]}),i.jsx(Jc,{onGrade:n})]}),d==="revealed"&&i.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsx("span",{style:{minWidth:0},children:r.revealed}),i.jsx(ai,{card:e})]}),i.jsx("button",{className:"continuar-btn",onClick:()=>n(0),children:"Continuar"})]}),!!d&&i.jsx(ia,{onExplain:l,explaining:o,explanation:a})]})}function Gp({card:e,language:t,...r}){const n=Ie[t]||Ie.de;return i.jsx(qc,{card:e,placeholder:`Escribe en ${n.name.toLowerCase()}…`,messages:{correct:i.jsx(i.Fragment,{children:"✓ ¡Correcto!"}),wrong:i.jsxs(i.Fragment,{children:["✗ La respuesta es: ",i.jsx("strong",{children:e.german})]}),revealed:i.jsxs(i.Fragment,{children:["👁 La respuesta es: ",i.jsx("strong",{children:e.german})]})},...r})}function Xp({card:e,...t}){const r=(e.example||"").replace("___",e.german);return i.jsx(qc,{card:e,placeholder:"Completa el espacio…",messages:{correct:i.jsxs(i.Fragment,{children:["✓ ¡Correcto! — ",r]}),wrong:i.jsxs(i.Fragment,{children:["✗ Era: ",i.jsx("strong",{children:e.german})," — ",r]}),revealed:i.jsxs(i.Fragment,{children:["👁 ",i.jsx("strong",{children:e.german})," — ",r]})},...t})}function Zp({card:e,language:t,onGrade:r,onExplain:n,explaining:l,explanation:o}){const[a,s]=j.useState(null),{articles:u,correct:d}=xn(e.german,t),m=h=>a?h===d?"reveal":h===a&&a!==d?"wrong":"":"";return i.jsxs("div",{className:"answer-zone",children:[i.jsx("div",{className:"article-btns",children:u.map(h=>i.jsx("button",{className:`article-btn ${m(h)}`,onClick:()=>s(h),disabled:!!a,children:h},h))}),a&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`answer-feedback ${a===d?"correct":"wrong"}`,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsx("span",{style:{minWidth:0},children:a===d?`✓ Correcto — ${e.german}`:`✗ Es ${d} — ${e.german}`}),i.jsx(ai,{card:e})]}),e.note&&i.jsx("div",{className:"card-note",children:e.note}),i.jsx("button",{className:"continuar-btn",onClick:()=>r(a===d?5:1),children:"Continuar"})]}),i.jsx(ia,{onExplain:n,explaining:l,explanation:o})]})]})}const fo=["type1","type2"],Jp=["type4","type5","type6"],qp=560,Es=["#D97757","#C15F3C","#5A7A4E","#D9A05B","#8A6FA6"];function em({count:e,streak:t,onClose:r}){const n=j.useMemo(()=>Array.from({length:20},(l,o)=>({left:Math.random()*100,delay:Math.random()*.5,duration:1.6+Math.random()*1.3,color:Es[o%Es.length],size:6+Math.random()*6})),[]);return i.jsxs("div",{className:"celebrate-overlay",onClick:r,children:[i.jsx("div",{className:"confetti",children:n.map((l,o)=>i.jsx("span",{className:"confetti-piece",style:{left:`${l.left}%`,background:l.color,width:l.size,height:l.size,animationDelay:`${l.delay}s`,animationDuration:`${l.duration}s`}},o))}),i.jsxs("div",{className:"celebrate-card",onClick:l=>l.stopPropagation(),children:[i.jsx("div",{className:"celebrate-emoji",children:"🎉"}),i.jsx("h2",{className:"celebrate-title",children:"¡Felicitaciones!"}),i.jsx("p",{className:"celebrate-text",children:"Terminaste tus repasos del día."}),i.jsxs("p",{className:"celebrate-count",children:["Repasaste ",i.jsx("strong",{children:e})," ",e===1?"tarjeta":"tarjetas"," hoy."]}),t>0&&i.jsxs("p",{className:"celebrate-streak",children:["🔥 Racha: ",i.jsx("strong",{children:t})," ",t===1?"día":"días"," seguidos"]}),i.jsx("button",{className:"celebrate-btn",onClick:r,children:"Continuar"})]})]})}function tm({cards:e,onGrade:t,language:r,stats:n}){const[l,o]=j.useState(!1),[a,s]=j.useState(!1),[u,d]=j.useState(null),[m,h]=j.useState(0),[v,w]=j.useState(!1),[k,N]=j.useState(0),[D,f]=j.useState(!1),c=(n==null?void 0:n.dailyNewLimit)??pn,p=na(n),x=Math.max(0,c-p),E=j.useMemo(()=>{const _=e.filter(I=>I.nextReview<=Date.now()),U=_.filter(I=>!Mt(I)),$=_.filter(Mt).slice(0,x),K=[...U,...$];for(let I=K.length-1;I>0;I--){const z=Math.floor(Math.random()*(I+1));[K[I],K[z]]=[K[z],K[I]]}return K},[e.map(_=>_.id+_.nextReview).join(","),x]),g=E[0],C=j.useCallback(()=>{kl(g)},[g]);j.useEffect(()=>{if(l&&fo.includes(g==null?void 0:g.cardType)){const _=setTimeout(()=>kl(g),350);return()=>clearTimeout(_)}},[l,g]);const y=_=>{if(v)return;Up();const U=E.length===1,$=fo.includes(g==null?void 0:g.cardType),K=Mt(g),I=()=>{t(g.id,Lp(g,_),K),d(null),h(z=>z+1),N(z=>z+1),U&&f(!0)};$&&l?(w(!0),o(!1),setTimeout(()=>{I(),w(!1)},qp)):(I(),o(!1))},L=async()=>{s(!0);try{d(await Qc(g))}catch{d("Error al contactar la API.")}s(!1)};if(!e.length)return i.jsx("div",{className:"deck-empty",children:i.jsxs("p",{children:["No hay tarjetas.",i.jsx("br",{}),"Ve a ",i.jsx("strong",{children:"+ Agregar"})," para crear tu primera."]})});if(!E.length){const _=e.some(U=>U.nextReview<=Date.now()&&Mt(U));return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"deck-empty",children:_?i.jsxs("p",{children:["Alcanzaste tu límite de ",i.jsx("strong",{children:c})," tarjetas nuevas por hoy.",i.jsx("br",{}),"Vuelve mañana, o súbelo en ",i.jsx("strong",{children:"Ajustes"})," si quieres seguir."]}):i.jsxs("p",{children:["Sin repasos pendientes.",i.jsx("br",{}),"Vuelve mañana — el sistema hace el resto."]})}),D&&i.jsx(em,{count:(n==null?void 0:n.todayCount)??k,streak:(n==null?void 0:n.currentStreak)??0,onClose:()=>f(!1)})]})}const b=g.cardType||"type1",V=Jp.includes(b),pe=fo.includes(b);return i.jsxs("div",{children:[i.jsxs("div",{className:"session-info",children:[i.jsxs("span",{children:["Pendientes: ",i.jsx("strong",{children:E.length})]}),i.jsxs("span",{children:["Nuevas hoy: ",i.jsxs("strong",{children:[p,"/",c]})]}),i.jsxs("span",{children:["Total: ",i.jsx("strong",{children:e.length})]})]}),pe&&i.jsx("div",{className:"card-scene",onClick:()=>!v&&o(_=>!_),children:i.jsxs("div",{className:`card-inner ${l?"flipped":""}`,children:[i.jsxs("div",{className:"card-face front",children:[b==="type1"&&i.jsx(Bp,{card:g}),b==="type2"&&i.jsx(Wp,{card:g,language:r})]}),i.jsxs("div",{className:"card-face back",children:[b==="type1"&&i.jsx(Vp,{card:g,onSpeak:C}),b==="type2"&&i.jsx(Hp,{card:g,onSpeak:C})]})]})}),V&&i.jsx("div",{className:"card-scene",children:i.jsxs("div",{className:"card-static",children:[b==="type4"&&i.jsx(Qp,{card:g,language:r}),b==="type5"&&i.jsx(Yp,{card:g}),b==="type6"&&i.jsx(Kp,{card:g,language:r})]})}),V&&(()=>{const _={card:g,onGrade:y,onExplain:L,explaining:a,explanation:u};return i.jsxs(j.Fragment,{children:[b==="type4"&&i.jsx(Gp,{language:r,..._}),b==="type5"&&i.jsx(Xp,{..._}),b==="type6"&&i.jsx(Zp,{language:r,..._})]},m)})(),pe&&l&&i.jsxs(i.Fragment,{children:[i.jsx(Jc,{onGrade:y}),i.jsx(ia,{onExplain:L,explaining:a,explanation:u})]})]})}function rm({onAdd:e,onBulkAdd:t,language:r}){var ua;const n=Ie[r]||Ie.de,l=oa(r),[o,a]=j.useState("single"),[s,u]=j.useState("type1"),[d,m]=j.useState(""),[h,v]=j.useState(""),[w,k]=j.useState(""),[N,D]=j.useState(""),[f,c]=j.useState(""),[p,x]=j.useState(!1),[E,g]=j.useState(null),[C,y]=j.useState(null),[L,b]=j.useState(null),[V,pe]=j.useState(null),[_,U]=j.useState("file"),[$,K]=j.useState("file"),[I,z]=j.useState(""),[F,R]=j.useState(""),[Q,q]=j.useState(""),[ct,Te]=j.useState(null),[Yt,Je]=j.useState(!0),Kt=()=>{const P=Zc({cardType:s,german:d,translation:h,example:N},r);if(P){g(P);return}g(null),e({cardType:s,german:d.trim(),translation:h.trim(),note:w.trim(),example:N.trim(),exampleTranslation:f.trim(),imageUrl:C,audioUrl:L}),m(""),v(""),k(""),y(null),b(null),D(""),c(""),x(!0),setTimeout(()=>x(!1),2e3)},aa=async(P,Se)=>{const He=P.target.files[0];if(He){pe(Se);try{const{url:Cr}=await Tp(He);Se==="image"?y(Cr):b(Cr)}catch{alert("Error al subir archivo.")}pe(null),P.target.value=""}},wn=(P,Se)=>{const He=Se.trim();He&&(P==="image"?(y(He),z("")):(b(He),R("")))},sa=P=>{const Se=P==="image"?C:L;!(Se&&(Se.startsWith("http://")||Se.startsWith("https://")))&&Se&&Pp(Se),P==="image"?(y(null),z("")):(b(null),R(""))},td=()=>{Te(null);let P;try{P=JSON.parse(Q.trim())}catch{Te({ok:!1,msg:"JSON inválido. Revisa la sintaxis."});return}if(!Array.isArray(P)){Te({ok:!1,msg:"Debe ser un array [ ... ]."});return}const Se=P.filter(He=>{var Cr,ca;return((Cr=He.german)==null?void 0:Cr.trim())&&((ca=He.translation)==null?void 0:ca.trim())});if(!Se.length){Te({ok:!1,msg:'Ningún objeto tiene "german" y "translation".'});return}t(Se,Yt),q("")};return i.jsxs("div",{className:"add-form",children:[i.jsxs("div",{className:"add-tabs",children:[i.jsx("button",{className:`add-tab ${o==="single"?"active":""}`,onClick:()=>a("single"),children:"Una tarjeta"}),i.jsx("button",{className:`add-tab ${o==="bulk"?"active":""}`,onClick:()=>a("bulk"),children:"Importar JSON"})]}),o==="single"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:l.map(P=>i.jsxs("button",{className:`type-btn ${s===P.id?"active":""}`,onClick:()=>u(P.id),children:[P.name,i.jsx("span",{className:"type-tip",role:"tooltip",children:P.tip})]},P.id))}),i.jsx("div",{className:"type-tip-static",children:(ua=l.find(P=>P.id===s))==null?void 0:ua.tip}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:s==="type5"?"Palabra que va en el hueco":n.name}),i.jsx("input",{value:d,onChange:P=>m(P.target.value),placeholder:s==="type5"?n.blankWordPh:n.wordPh})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción"}),i.jsx("input",{value:h,onChange:P=>v(P.target.value),placeholder:"la llave"})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Nota (opcional)"}),i.jsx("textarea",{value:w,onChange:P=>k(P.target.value),placeholder:"artículo, ejemplo, truco…"})]}),(s==="type2"||s==="type5")&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{children:s==="type5"?"Oración con ___ (espacio en blanco)":n.exLabel}),i.jsx("input",{value:N,onChange:P=>D(P.target.value),placeholder:s==="type5"?n.blankPh:n.exPh})]}),s==="type2"&&i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción del ejemplo"}),i.jsx("input",{value:f,onChange:P=>c(P.target.value),placeholder:"El perro corre rápido."})]})]}),la.includes(s)&&i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Imagen (opcional) —"," ",i.jsx("button",{className:"mode-toggle",onClick:()=>{U(P=>P==="file"?"url":"file"),y(null),z("")},children:_==="file"?"usar URL":"subir archivo"})]}),C?i.jsxs("div",{className:"media-preview",children:[i.jsx("img",{src:Ze(C),alt:""}),i.jsx("span",{className:"media-preview-label",children:C.startsWith("http")?"URL externa":C.split("/").pop()}),i.jsx("button",{className:"media-remove",onClick:()=>sa("image"),children:"×"})]}):_==="file"?i.jsx("div",{className:"media-upload-row",children:i.jsxs("label",{className:"media-upload-btn",children:[V==="image"?i.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir imagen",i.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:P=>aa(P,"image"),disabled:!!V})]})}):i.jsxs("div",{className:"url-input-row",children:[i.jsx("input",{className:"url-input",value:I,onChange:P=>z(P.target.value),placeholder:"https://upload.wikimedia.org/…",onKeyDown:P=>P.key==="Enter"&&wn("image",I)}),i.jsx("button",{className:"url-set-btn",onClick:()=>wn("image",I),children:"OK"})]})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Audio (opcional) —"," ",i.jsx("button",{className:"mode-toggle",onClick:()=>{K(P=>P==="file"?"url":"file"),b(null),R("")},children:$==="file"?"usar URL":"subir archivo"})]}),L?i.jsxs("div",{className:"media-preview",children:[i.jsx("span",{className:"media-preview-label",children:L.startsWith("http")?"URL externa":L.split("/").pop()}),i.jsx("audio",{src:Ze(L),controls:!0,style:{height:"24px",accentColor:"#D97757"}}),i.jsx("button",{className:"media-remove",onClick:()=>sa("audio"),children:"×"})]}):$==="file"?i.jsx("div",{className:"media-upload-row",children:i.jsxs("label",{className:"media-upload-btn",children:[V==="audio"?i.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir audio",i.jsx("input",{type:"file",accept:"audio/*",style:{display:"none"},onChange:P=>aa(P,"audio"),disabled:!!V})]})}):i.jsxs("div",{className:"url-input-row",children:[i.jsx("input",{className:"url-input",value:F,onChange:P=>R(P.target.value),placeholder:"https://forvo.com/… o link directo a .mp3",onKeyDown:P=>P.key==="Enter"&&wn("audio",F)}),i.jsx("button",{className:"url-set-btn",onClick:()=>wn("audio",F),children:"OK"})]})]}),i.jsx("button",{className:"submit-btn",onClick:Kt,children:"Agregar tarjeta"}),E&&i.jsx("div",{className:"error-msg",children:E}),p&&i.jsx("div",{className:"success-msg",children:"✓ Guardada"})]}),o==="bulk"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Array JSON"}),i.jsx("textarea",{className:"bulk-textarea",value:Q,onChange:P=>q(P.target.value),placeholder:n.bulkPh})]}),i.jsxs("div",{className:"bulk-schema",children:["Campos: ",i.jsx("code",{children:"german"})," ✦ ",i.jsx("code",{children:"translation"})," ✦ ",i.jsx("code",{children:"note"})," (opcional)"]}),i.jsxs("label",{className:"bulk-replace-row",children:[i.jsx("input",{type:"checkbox",checked:Yt,onChange:P=>Je(P.target.checked)}),i.jsx("span",{children:"Reemplazar todo el mazo (desactiva para agregar encima)"})]}),i.jsx("button",{className:"submit-btn",onClick:td,children:"Importar"}),ct&&i.jsx("div",{className:ct.ok?"success-msg":"error-msg",children:ct.msg})]})]})}function nm({card:e,onSave:t,onClose:r}){const[n,l]=j.useState(e.imageUrl||""),[o,a]=j.useState(null),[s,u]=j.useState(!1),d=()=>{const m=n.trim();t({...e,imageUrl:m||null}),a("ok"),setTimeout(r,800)};return i.jsx("div",{className:"img-preview-overlay",onClick:r,children:i.jsxs("div",{className:"img-preview-dialog",onClick:m=>m.stopPropagation(),children:[i.jsxs("div",{className:"img-preview-header",children:[i.jsx("div",{className:"img-preview-word",children:e.german}),i.jsx("button",{className:"img-preview-close",onClick:r,children:"×"})]}),i.jsx("div",{className:"img-preview-frame",children:e.imageUrl&&!s?i.jsx("img",{src:Ze(e.imageUrl),alt:"",onError:()=>u(!0)}):i.jsxs("div",{className:"img-preview-broken",children:[i.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),i.jsx("div",{children:s?"Imagen rota":"Sin imagen"})]})}),i.jsxs("div",{className:"img-preview-url-row",children:[i.jsx("input",{className:"img-preview-url-input",value:n,onChange:m=>{l(m.target.value),u(!1),a(null)},placeholder:"https://upload.wikimedia.org/…",onKeyDown:m=>m.key==="Enter"&&d()}),i.jsx("button",{className:"img-preview-save-btn",onClick:d,children:"Guardar"})]}),o==="ok"&&i.jsx("div",{className:"img-preview-status ok",children:"✓ Guardado"})]})})}function lm({card:e,language:t,onClose:r}){const n=e.cardType||"type1",{bare:l}=xn(e.german,t),o=(e.example||"").replace("___",e.german);return i.jsx("div",{className:"img-preview-overlay",onClick:r,children:i.jsxs("div",{className:"card-preview-dialog",onClick:a=>a.stopPropagation(),children:[i.jsxs("div",{className:"img-preview-header",children:[i.jsxs("div",{className:"img-preview-word",children:[i.jsxs("span",{style:{fontSize:"0.6rem",color:"var(--text-dim)",letterSpacing:"0.1em",textTransform:"uppercase",marginRight:"0.5rem"},children:["Tipo ",n.replace("type","")]}),e.german]}),i.jsx("button",{className:"img-preview-close",onClick:r,children:"×"})]}),i.jsxs("div",{className:"card-preview-side",children:[i.jsx("div",{className:"card-preview-label",children:"Frente"}),n==="type1"&&i.jsx("div",{className:"card-preview-body",children:e.imageUrl?i.jsx("img",{src:Ze(e.imageUrl),alt:"",className:"card-preview-img",onError:a=>a.target.style.display="none"}):i.jsxs("div",{className:"img-preview-broken",children:[i.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),i.jsx("div",{children:"Sin imagen"})]})}),n==="type2"&&i.jsxs("div",{className:"card-preview-body",children:[i.jsx("div",{className:"card-preview-big",children:e.german}),e.example&&i.jsx("div",{className:"card-preview-example",children:e.example})]}),n==="type4"&&i.jsxs("div",{className:"card-preview-body",children:[i.jsx("div",{className:"card-preview-trans",children:e.translation}),e.note&&i.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type5"&&i.jsx("div",{className:"card-preview-body",children:i.jsx("div",{className:"card-preview-example",children:(e.example||"").replace("___","_____")})}),n==="type6"&&i.jsxs("div",{className:"card-preview-body",children:[e.imageUrl&&i.jsx("img",{src:Ze(e.imageUrl),alt:"",className:"card-preview-img",onError:a=>a.target.style.display="none"}),i.jsxs("div",{className:"card-preview-big",style:{color:"var(--text-faint)"},children:["___ ",l]})]})]}),i.jsxs("div",{className:"card-preview-side",children:[i.jsx("div",{className:"card-preview-label",children:"Dorso"}),i.jsxs("div",{className:"card-preview-body",children:[(n==="type1"||n==="type6")&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-preview-big",children:e.german}),e.note&&i.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type2"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-preview-trans",children:e.translation}),e.exampleTranslation&&i.jsxs("div",{className:"card-preview-example",style:{color:"var(--text-dim)"},children:['"',e.exampleTranslation,'"']})]}),(n==="type4"||n==="type5")&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card-preview-big",children:e.german}),n==="type5"&&o&&i.jsx("div",{className:"card-preview-example",children:o})]})]})]}),i.jsx("button",{className:"continuar-btn",style:{alignSelf:"center"},onClick:r,children:"Cerrar"})]})})}function ed({card:e,onSave:t,onClose:r,language:n}){var L;const l=Ie[n]||Ie.de,o=oa(n),[a,s]=j.useState(e.cardType||"type1"),[u,d]=j.useState(e.german),[m,h]=j.useState(e.translation),[v,w]=j.useState(e.note||""),[k,N]=j.useState(e.example||""),[D,f]=j.useState(e.exampleTranslation||""),[c,p]=j.useState(e.imageUrl||""),[x,E]=j.useState(e.audioUrl||""),[g,C]=j.useState(null),y=()=>{const b=Zc({cardType:a,german:u,translation:m,example:k},n);if(b){C(b);return}t({...e,cardType:a,german:u.trim(),translation:m.trim(),note:v.trim(),example:k.trim(),exampleTranslation:D.trim(),imageUrl:c.trim()||null,audioUrl:x.trim()||null})};return i.jsx("div",{className:"confirm-overlay",onClick:r,children:i.jsxs("div",{className:"edit-dialog",onClick:b=>b.stopPropagation(),children:[i.jsx("div",{className:"confirm-title",children:"Editar tarjeta"}),i.jsxs("div",{className:"edit-fields",children:[i.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:o.map(b=>i.jsxs("button",{className:`type-btn ${a===b.id?"active":""}`,onClick:()=>s(b.id),children:[b.name,i.jsx("span",{className:"type-tip",role:"tooltip",children:b.tip})]},b.id))}),i.jsx("div",{className:"type-tip-static",children:(L=o.find(b=>b.id===a))==null?void 0:L.tip}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:a==="type5"?"Palabra que va en el hueco":l.name}),i.jsx("input",{value:u,onChange:b=>d(b.target.value),placeholder:a==="type5"?l.blankWordPh:""})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción"}),i.jsx("input",{value:m,onChange:b=>h(b.target.value)})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Nota"}),i.jsx("input",{value:v,onChange:b=>w(b.target.value),placeholder:"artículo, truco…"})]}),(a==="type2"||a==="type5")&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{children:a==="type5"?"Oración con ___ (espacio en blanco)":l.exLabel}),i.jsx("input",{value:k,onChange:b=>N(b.target.value),placeholder:a==="type5"?l.blankPh:l.exPh})]}),a==="type2"&&i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Traducción del ejemplo"}),i.jsx("input",{value:D,onChange:b=>f(b.target.value)})]})]}),la.includes(a)&&i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"URL imagen"}),i.jsx("input",{value:c,onChange:b=>p(b.target.value),placeholder:"https://…"})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"URL audio"}),i.jsx("input",{value:x,onChange:b=>E(b.target.value),placeholder:"https://…"})]})]}),g&&i.jsx("div",{className:"error-msg",style:{marginBottom:"1rem"},children:g}),i.jsxs("div",{className:"confirm-actions",children:[i.jsx("button",{className:"confirm-cancel",onClick:r,children:"Cancelar"}),i.jsx("button",{className:"confirm-ok",onClick:y,children:"Guardar"})]})]})})}function om({msg:e}){return e?i.jsx("div",{className:"toast",children:e}):null}function im({card:e,onClick:t}){const[r,n]=j.useState(!1);return j.useEffect(()=>{n(!1)},[e.imageUrl]),!e.imageUrl||r?i.jsx("button",{className:"preview-btn",onClick:t,title:"Sin imagen — click para agregar",children:i.jsx("div",{className:"preview-thumb-empty",children:"+"})}):i.jsx("button",{className:"preview-btn",onClick:t,title:"Vista previa de imagen",children:i.jsx("img",{className:"preview-thumb",src:Ze(e.imageUrl),alt:"",onError:()=>n(!0)})})}function am({cards:e,onDelete:t,onDeleteAll:r,onEdit:n,language:l}){const[o,a]=j.useState(!1),[s,u]=j.useState(""),[d,m]=j.useState(null),[h,v]=j.useState(null),[w,k]=j.useState(null),[N,D]=j.useState(null),f=j.useRef(null),[c,p]=j.useState("all"),x=()=>{const y=JSON.stringify(e,null,2),L=new Blob([y],{type:"application/json"}),b=URL.createObjectURL(L),V=document.createElement("a"),pe=new Date().toISOString().slice(0,10);V.href=b,V.download=`deutschkarten-backup-${pe}.json`,V.click(),URL.revokeObjectURL(b)},E=y=>{f.current&&clearTimeout(f.current),D(y),f.current=setTimeout(()=>D(null),2200)},g=[...e].sort((y,L)=>y.nextReview-L.nextReview).filter(y=>{if(s.trim()){const L=s.toLowerCase();if(!y.german.toLowerCase().includes(L)&&!y.translation.toLowerCase().includes(L)&&!(y.note||"").toLowerCase().includes(L))return!1}return c==="broken"?On(y)&&!y.imageUrl:c==="ok"?On(y)&&!!y.imageUrl:!0}),C=e.filter(y=>On(y)&&!y.imageUrl).length;return i.jsxs("div",{children:[i.jsxs("div",{className:"list-header",children:[i.jsx("div",{className:"list-title",children:"Todas las tarjetas"}),i.jsxs("div",{className:"list-header-right",children:[i.jsxs("div",{className:"list-count",children:[e.length," total"]}),e.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"export-btn",onClick:x,title:"Exportar backup JSON",children:"↓ Backup"}),i.jsx("button",{className:"delete-all-btn",onClick:()=>a(!0),children:"Borrar todo"})]})]})]}),i.jsxs("div",{className:"list-search-wrap",children:[i.jsx("input",{className:"list-search",value:s,onChange:y=>u(y.target.value),placeholder:"Buscar por palabra, traducción o nota…"}),s&&i.jsx("button",{className:"list-search-clear",onClick:()=>u(""),children:"×"})]}),i.jsxs("div",{className:"list-filter-row",children:[i.jsx("button",{className:`list-filter-btn ${c==="all"?"active":""}`,onClick:()=>p("all"),children:"Todas"}),i.jsxs("button",{className:`list-filter-btn ${c==="broken"?"active":""}`,onClick:()=>p("broken"),children:["Sin imagen ",C>0&&`(${C})`]}),i.jsx("button",{className:`list-filter-btn ${c==="ok"?"active":""}`,onClick:()=>p("ok"),children:"Con imagen"})]}),o&&i.jsx("div",{className:"confirm-overlay",onClick:()=>a(!1),children:i.jsxs("div",{className:"confirm-dialog",onClick:y=>y.stopPropagation(),children:[i.jsx("div",{className:"confirm-title",children:"¿Borrar todo el mazo?"}),i.jsxs("div",{className:"confirm-body",children:["Se eliminarán ",i.jsxs("strong",{children:[e.length," tarjeta",e.length!==1?"s":""]})," y todo su progreso. Esta acción no se puede deshacer."]}),i.jsxs("div",{className:"confirm-actions",children:[i.jsx("button",{className:"confirm-cancel",onClick:()=>a(!1),children:"Cancelar"}),i.jsx("button",{className:"confirm-ok",onClick:()=>{r(),a(!1)},children:"Sí, borrar todo"})]})]})}),d&&i.jsx(ed,{card:d,language:l,onSave:y=>{n(y),m(null),E(`✓ "${y.german}" actualizado`)},onClose:()=>m(null)}),h&&i.jsx(nm,{card:h,onSave:y=>{n(y),v(y),E("✓ Imagen actualizada")},onClose:()=>v(null)}),w&&i.jsx(lm,{card:w,language:l,onClose:()=>k(null)}),i.jsx(om,{msg:N}),i.jsxs("div",{className:"card-list",children:[g.length===0&&i.jsx("div",{className:"list-empty",children:s?`Sin resultados para "${s}"`:"Sin tarjetas en este filtro"}),g.map(y=>{const L=y.nextReview<=Date.now();return i.jsxs("div",{className:"list-item",children:[On(y)?i.jsx(im,{card:y,onClick:()=>v(y)}):i.jsx("div",{style:{width:"28px"}}),i.jsxs("div",{className:"li-main",children:[i.jsx("div",{className:"li-german",children:y.german}),i.jsx("div",{className:"li-trans",children:y.translation}),y.note&&i.jsx("div",{className:"li-note",children:y.note})]}),i.jsx("div",{className:`li-next ${L?"due":""}`,children:Dp(y.nextReview)}),i.jsxs("div",{className:"li-actions",children:[i.jsx("button",{className:"preview-card-btn",onClick:()=>k(y),title:"Vista previa",children:i.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:[i.jsx("path",{d:"M6.5 1C3.5 1 1 4 1 5C1 6 3.5 9 6.5 9C9.5 9 12 6 12 5C12 4 9.5 1 6.5 1Z",stroke:"currentColor",strokeWidth:"1.1",fill:"none"}),i.jsx("circle",{cx:"6.5",cy:"5",r:"1.5",stroke:"currentColor",strokeWidth:"1.1",fill:"none"})]})}),i.jsx("button",{className:"edit-btn",onClick:()=>m(y),children:"✎"}),i.jsx("button",{className:"delete-btn",onClick:()=>t(y.id),children:"×"})]})]},y.id)})]})]})}function sm({card:e,onEdit:t,onConvert:r}){const[n,l]=j.useState(!1),[o,a]=j.useState(null),[s,u]=j.useState(null);async function d(){l(!0),u(null);try{a(await Qc(e,"mnemonic"))}catch(h){u(h.message)}finally{l(!1)}}function m(){t({...e,note:o,lapses:0})}return i.jsxs("div",{className:"list-item leech-item",children:[i.jsx("div",{style:{width:"28px"}}),i.jsxs("div",{className:"li-main",children:[i.jsx("div",{className:"li-german",children:e.german}),i.jsx("div",{className:"li-trans",children:e.translation}),o&&i.jsx("div",{className:"leech-hint",children:o}),s&&i.jsx("div",{className:"leech-error",children:s}),i.jsxs("div",{className:"leech-actions",children:[i.jsx("button",{className:"leech-btn",onClick:d,disabled:n,children:n?"Consultando IA…":o?"Otra pista":"✦ Generar pista"}),o&&i.jsx("button",{className:"leech-btn primary",onClick:m,children:"Guardar como nota"}),i.jsx("button",{className:"leech-btn",onClick:()=>r(e),children:"🖼 Convertir a imagen"})]})]}),i.jsxs("div",{className:"leech-badge",title:"Veces olvidada",children:[e.lapses,"×"]})]})}function um({cards:e,stats:t,onEdit:r,language:n}){const l=Date.now(),o=864e5,[a,s]=j.useState(null),u=Ol(),d=t&&t.day===u?t.todayCount:0,h=t&&t.day&&Yc(t.day,u)<=1?t.currentStreak:0,v=(t==null?void 0:t.longestStreak)??0,w=[{label:"Nuevas",color:"#BE5B38",count:0},{label:"Hoy",color:"#D97757",count:0},{label:"Mañana",color:"#E29874",count:0},{label:"3–7 días",color:"#EBB694",count:0},{label:"8–30 días",color:"#F1CFB4",count:0},{label:"+30 días",color:"#F5E3D0",count:0}];for(const g of e){const C=(g.nextReview-l)/o;Mt(g)?w[0].count++:C<=0?w[1].count++:C<=1?w[2].count++:C<=7?w[3].count++:C<=30?w[4].count++:w[5].count++}const k=Math.max(...w.map(g=>g.count),1),N=e.length,D=e.filter(Rp).sort((g,C)=>(C.lapses??0)-(g.lapses??0)),f=(t==null?void 0:t.dailyNewLimit)??pn,c=na(t),p=e.filter(g=>g.nextReview<=l&&Mt(g)).length,E=e.filter(g=>g.nextReview<=l&&!Mt(g)).length+Math.min(p,Math.max(0,f-c));return N?i.jsxs("div",{className:"stats-view",children:[i.jsxs("div",{className:"stats-header",children:[i.jsx("div",{className:"stats-title",children:"Estado del mazo"}),i.jsxs("div",{className:"stats-total",children:[N," tarjeta",N!==1?"s":""," en total"]})]}),i.jsxs("div",{className:"streak-banner",children:[i.jsxs("div",{className:"streak-main",children:[i.jsx("span",{className:"streak-flame",children:"🔥"}),i.jsx("span",{className:"streak-num",children:h}),i.jsxs("span",{className:"streak-unit",children:[h===1?"día":"días"," de racha"]})]}),i.jsxs("div",{className:"streak-sub",children:[i.jsxs("span",{children:["Hoy: ",i.jsx("strong",{children:d})]}),i.jsxs("span",{children:["Récord: ",i.jsx("strong",{children:v})]})]})]}),i.jsx("div",{className:"stats-chart",children:w.map((g,C)=>{const y=k>0?g.count/k*100:0,L=N>0?Math.round(g.count/N*100):0;return i.jsxs("div",{className:"stats-row",children:[i.jsx("div",{className:"stats-row-label",children:g.label}),i.jsx("div",{className:"stats-bar-wrap",children:i.jsx("div",{className:"stats-bar",style:{width:`${y}%`,background:g.color}})}),i.jsxs("div",{className:"stats-row-count",children:[i.jsx("span",{className:"stats-n",children:g.count}),i.jsxs("span",{className:"stats-pct",children:[L,"%"]})]})]},C)})}),i.jsxs("div",{className:"stats-footer",children:[i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"var(--accent-strong)"},children:E}),i.jsx("div",{className:"kpi-label",children:"para estudiar hoy"})]}),i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"var(--ok)"},children:e.filter(g=>g.repetitions>0&&g.interval>=21).length}),i.jsx("div",{className:"kpi-label",children:"maduras (≥21 días)"})]}),i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"var(--text-dim)"},children:N>0?(e.reduce((g,C)=>g+C.easiness,0)/N).toFixed(2):"—"}),i.jsx("div",{className:"kpi-label",children:"easiness promedio"})]}),i.jsxs("div",{className:"stats-kpi",children:[i.jsx("div",{className:"kpi-val",style:{color:"var(--danger)"},children:D.length}),i.jsx("div",{className:"kpi-label",children:"difíciles"})]})]}),D.length>0&&i.jsxs("div",{className:"leech-section",children:[i.jsx("div",{className:"leech-title",children:"Cartas difíciles"}),i.jsx("div",{className:"card-list",children:D.map(g=>i.jsx(sm,{card:g,onEdit:r,onConvert:s},g.id))})]}),a&&i.jsx(ed,{card:{...a,cardType:"type1"},language:n,onSave:g=>{r({...g,lapses:0}),s(null)},onClose:()=>s(null)})]}):i.jsx("div",{className:"deck-empty",children:i.jsxs("p",{children:["Sin tarjetas aún.",i.jsx("br",{}),"Ve a ",i.jsx("strong",{children:"+ Agregar"})," para empezar."]})})}function cm({stats:e,onChangeLimit:t}){const r=(e==null?void 0:e.dailyNewLimit)??pn,n=na(e),l=[5,10,15,20,30,50],o=a=>t(Math.max(0,Math.min(200,a)));return i.jsx("div",{className:"settings-view",children:i.jsxs("div",{className:"settings-section",children:[i.jsx("div",{className:"settings-label",children:"Tarjetas nuevas por día"}),i.jsx("p",{className:"settings-help",children:"Cuántas tarjetas que nunca has visto entran al repaso cada día. Los repasos de tarjetas que ya aprendiste no tienen límite — siempre aparecen cuando toca."}),i.jsxs("div",{className:"settings-stepper",children:[i.jsx("button",{className:"step-btn",onClick:()=>o(r-5),disabled:r<=0,children:"−"}),i.jsx("div",{className:"step-val",children:r}),i.jsx("button",{className:"step-btn",onClick:()=>o(r+5),disabled:r>=200,children:"+"})]}),i.jsx("div",{className:"settings-presets",children:l.map(a=>i.jsx("button",{className:`preset-chip ${r===a?"active":""}`,onClick:()=>o(a),children:a},a))}),i.jsxs("p",{className:"settings-note",children:["Recomendado: ",i.jsx("strong",{children:"20"})," al día — un ritmo sostenible para aprender un idioma sin saturarte de repasos. Pon ",i.jsx("strong",{children:"0"})," para pausar las nuevas y repasar solo lo que ya tienes."]}),i.jsxs("div",{className:"settings-today",children:["Hoy: ",i.jsxs("strong",{children:[n,"/",r]})," nuevas introducidas"]})]})})}function dm({language:e}){const t=(Ie[e]||Ie.de).name.toLowerCase(),r=oa(e);return i.jsxs("div",{className:"help-view",children:[i.jsxs("p",{className:"help-intro",children:["Una app de tarjetas con ",i.jsx("strong",{children:"repetición espaciada"})," para aprender ",t," desde el español. En vez de repasar todo cada día, te muestra cada palabra justo cuando estás a punto de olvidarla."]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"Cómo te ayuda a aprender"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Repetición espaciada."})," Cada palabra reaparece en intervalos crecientes (1 día → 6 días → semanas → meses). Repasar justo antes de olvidar fija la memoria a largo plazo con el mínimo esfuerzo."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Recuerdo activo."})," Te esfuerzas en recordar antes de ver la respuesta. Ese esfuerzo es lo que construye memoria — releer no."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Calificación honesta."})," Al responder dices qué tan bien la recordaste y eso ajusta cuándo vuelve: si fallas regresa pronto; si la dominas, se espacia."]})]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"El ciclo diario"}),i.jsxs("p",{children:["En ",i.jsx("strong",{children:"Estado"})," ves cuántas tarjetas tocan hoy y cómo se reparten en el tiempo (Nuevas, Hoy, Mañana, 3–7 días…). Repasa lo que toca cada día: la racha 🔥 premia la constancia, y poco y a diario rinde más que sesiones largas y salteadas."]})]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"Tipos de tarjeta"}),i.jsx("p",{children:"Cada tipo ataca la palabra desde un ángulo distinto. Variar refuerza el recuerdo:"}),i.jsx("ul",{className:"help-types",children:r.map(n=>i.jsxs("li",{children:[i.jsx("span",{className:"help-type-name",children:n.name}),i.jsx("span",{className:"help-type-tip",children:n.tip})]},n.id))})]}),i.jsxs("div",{className:"help-section",children:[i.jsx("div",{className:"help-section-title",children:"Sácale provecho"}),i.jsxs("ul",{className:"help-tips",children:[i.jsxs("li",{children:["Estudia un poco ",i.jsx("strong",{children:"cada día"}),": 10 minutos diarios cunden más que dos horas el domingo."]}),i.jsx("li",{children:"Califica con honestidad — engañarte solo retrasa lo que de verdad no sabes."}),i.jsxs("li",{children:["Añade ",i.jsx("strong",{children:"ejemplos e imágenes"}),": el contexto y lo visual anclan mejor que una palabra suelta."]}),i.jsx("li",{children:"Usa el audio 🔊 para fijar la pronunciación desde el principio."}),i.jsxs("li",{children:["¿Muchas palabras de golpe? En ",i.jsx("strong",{children:"+ Agregar"})," puedes pegar una lista en lote."]}),i.jsxs("li",{children:["En ",i.jsx("strong",{children:"Estado"}),", revisa ",i.jsx("strong",{children:"Cartas difíciles"}),": las que olvidas una y otra vez. Genera una pista mnemónica con IA o conviértelas en tarjeta con imagen para romper el bloqueo."]})]})]})]})}function fm({onAuth:e}){const[t,r]=j.useState(""),[n,l]=j.useState(""),[o,a]=j.useState(null),[s,u]=j.useState(!1);async function d(m){m.preventDefault(),a(null),u(!0);try{const h=await Qt("/auth/login",{method:"POST",body:JSON.stringify({username:t,password:n})});h.token&&_p(h.token),e(h.username,h.language||"de")}catch(h){a(h.message)}finally{u(!1)}}return i.jsxs("div",{className:"auth-screen",children:[i.jsxs("style",{children:[ii,Xc]}),i.jsx("div",{className:"noise"}),i.jsxs("div",{className:"auth-card",children:[i.jsx("div",{className:"auth-logo",children:i.jsxs("span",{className:"logo-text",children:["Sprachen",i.jsx("span",{children:"Karten"})]})}),i.jsx("p",{className:"auth-tagline",children:"Tarjetas de idiomas"}),i.jsxs("form",{className:"auth-form",onSubmit:d,children:[i.jsx("input",{className:"auth-input",type:"text",placeholder:"Usuario",value:t,autoComplete:"username",onChange:m=>r(m.target.value),required:!0}),i.jsx("input",{className:"auth-input",type:"password",placeholder:"Contraseña",value:n,autoComplete:"current-password",onChange:m=>l(m.target.value),required:!0}),o&&i.jsx("p",{className:"auth-error",children:o}),i.jsx("button",{className:"auth-btn",type:"submit",disabled:s,children:s?"…":"Entrar"})]})]})]})}const zs=[{id:"study",label:"Repasar"},{id:"add",label:"+ Agregar"},{id:"list",label:"Lista"},{id:"stats",label:"Estado"},{id:"settings",label:"Ajustes"},{id:"help",label:"Ayuda"}];function _s(e=Date.now()){return{repetitions:0,easiness:2.5,interval:0,nextReview:e,lastGrade:null,lapses:0}}function pm(){const[e,t]=j.useState(null),[r,n]=j.useState("de"),[l,o]=j.useState([]),[a,s]=j.useState(null),[u,d]=j.useState(!1),[m,h]=j.useState("study"),[v,w]=j.useState(!1);j.useEffect(()=>{Op(r)},[r]);function k(){ws(),d(!1),t(!1),o([]),s(null)}function N(_){_.status===401&&k()}j.useEffect(()=>{if(!Hc()){t(!1);return}(async()=>{try{const _=await Qt("/auth/me"),U=await ks(),$=await Ss().catch(()=>null);t(_.username),n(_.language||"de"),o(U),s($),d(!0)}catch{ws(),t(!1)}})()},[]),j.useEffect(()=>{if(!e||!u)return;const _=setTimeout(()=>{js(l).catch(N)},800);return()=>clearTimeout(_)},[l,e,u]),j.useEffect(()=>{if(!e||!u||!a)return;const _=setTimeout(()=>{Ns(a).catch(N)},800);return()=>clearTimeout(_)},[a,e,u]);const D=j.useRef(l);j.useEffect(()=>{D.current=l},[l]);const f=j.useRef(e);j.useEffect(()=>{f.current=e},[e]);const c=j.useRef(u);j.useEffect(()=>{c.current=u},[u]);const p=j.useRef(a);j.useEffect(()=>{p.current=a},[a]),j.useEffect(()=>{const _=()=>{if(!f.current||!c.current)return;const U=D.current,$=U.length===0?"?allowEmpty=true":"";fetch(`${kr}/cards${$}`,{method:"PUT",headers:{"Content-Type":"application/json",...fn()},body:JSON.stringify(U),keepalive:!0}),p.current&&fetch(`${kr}/stats`,{method:"PUT",headers:{"Content-Type":"application/json",...fn()},body:JSON.stringify(p.current),keepalive:!0})};return window.addEventListener("beforeunload",_),()=>window.removeEventListener("beforeunload",_)},[]);async function x(){u&&(await js(l).catch(()=>{}),a&&await Ns(a).catch(()=>{})),k()}async function E(_,U){d(!1),t(_),n(U||"de");try{const $=await ks(),K=await Ss().catch(()=>null);o($),s(K),d(!0)}catch{o([])}}const g=j.useCallback(_=>{const U={id:Date.now().toString(),cardType:_.cardType||"type1",german:_.german,translation:_.translation,note:_.note||"",example:_.example||"",exampleTranslation:_.exampleTranslation||"",imageUrl:_.imageUrl||null,audioUrl:_.audioUrl||null,..._s()};o($=>[...$,U])},[]),C=j.useCallback((_,U=!1)=>{const $=Date.now(),K=_.map((I,z)=>({id:($+z).toString(),cardType:I.cardType||"type1",german:I.german.trim(),translation:I.translation.trim(),note:(I.note||"").trim(),example:I.example||"",exampleTranslation:I.exampleTranslation||"",imageUrl:I.imageUrl||null,audioUrl:I.audioUrl||null,..._s($)}));o(I=>U?K:[...I,...K])},[]),y=j.useCallback((_,U,$=!1)=>{o(K=>K.map(I=>I.id===_?{...I,...U}:I)),s(K=>Mp(K,$))},[]),L=j.useCallback(_=>{o(U=>U.map($=>$.id===_.id?_:$))},[]),b=j.useCallback(_=>{o(U=>U.filter($=>$.id!==_))},[]),V=j.useCallback(()=>{o([])},[]),pe=j.useCallback(_=>{s(U=>({...U||{day:Ol(),todayCount:0,currentStreak:0,longestStreak:0,newToday:0},dailyNewLimit:_}))},[]);return e===null?i.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#F0EEE6",color:"#7A776F",fontFamily:"'Inter', sans-serif"},children:[i.jsx("style",{children:ii}),"Cargando…"]}):e===!1?i.jsx(fm,{onAuth:E}):i.jsxs(i.Fragment,{children:[i.jsxs("style",{children:[ii,Xc]}),i.jsx("div",{className:"noise"}),i.jsxs("div",{className:"app",children:[i.jsxs("header",{className:"header",children:[i.jsxs("div",{className:"logo",children:[r==="fr"?i.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"9.33",height:"19",x:"0",fill:"#002395"}),i.jsx("rect",{width:"9.34",height:"19",x:"9.33",fill:"#fff"}),i.jsx("rect",{width:"9.33",height:"19",x:"18.67",fill:"#ED2939"})]}):i.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"28",height:"6.33",y:"0",fill:"#000"}),i.jsx("rect",{width:"28",height:"6.34",y:"6.33",fill:"#D00"}),i.jsx("rect",{width:"28",height:"6.33",y:"12.67",fill:"#FFCE00"})]}),i.jsx("div",{className:"logo-text",children:r==="fr"?i.jsxs(i.Fragment,{children:["Français",i.jsx("span",{children:"Cartes"})]}):i.jsxs(i.Fragment,{children:["Deutsch",i.jsx("span",{children:"Karten"})]})})]}),i.jsxs("nav",{className:"nav",children:[zs.map(_=>i.jsx("button",{className:`nav-btn ${m===_.id?"active":""}`,onClick:()=>h(_.id),children:_.label},_.id)),i.jsxs("button",{className:"nav-btn",onClick:x,title:`Sesión: ${e}`,style:{marginLeft:"auto",opacity:.6},children:["↩ ",e]})]}),i.jsx("button",{className:"hamburger-btn",onClick:()=>w(_=>!_),"aria-label":"Menú","aria-expanded":v,children:v?"✕":"☰"}),v&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"menu-backdrop",onClick:()=>w(!1)}),i.jsxs("div",{className:"menu-panel",children:[zs.map(_=>i.jsx("button",{className:`menu-item ${m===_.id?"active":""}`,onClick:()=>{h(_.id),w(!1)},children:_.label},_.id)),i.jsxs("button",{className:"menu-item menu-logout",onClick:()=>{w(!1),x()},children:["↩ ",e]})]})]})]}),m==="study"&&i.jsx(tm,{cards:l,onGrade:y,language:r,stats:a}),m==="add"&&i.jsx(rm,{onAdd:g,onBulkAdd:(_,U)=>{C(_,U),h("list")},language:r}),m==="list"&&i.jsx(am,{cards:l,onDelete:b,onDeleteAll:V,onEdit:L,language:r}),m==="stats"&&i.jsx(um,{cards:l,stats:a,onEdit:L,language:r}),m==="settings"&&i.jsx(cm,{stats:a,onChangeLimit:pe}),m==="help"&&i.jsx(dm,{language:r})]})]})}Wc(document.getElementById("root")).render(i.jsx(j.StrictMode,{children:i.jsx(pm,{})}));
