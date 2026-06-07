(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vs={exports:{}},vl={},ys={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),Ic=Symbol.for("react.portal"),Uc=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Qc=Symbol.for("react.memo"),Kc=Symbol.for("react.lazy"),ea=Symbol.iterator;function Yc(e){return e===null||typeof e!="object"?null:(e=ea&&e[ea]||e["@@iterator"],typeof e=="function"?e:null)}var xs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ws=Object.assign,ks={};function xn(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||xs}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ss(){}Ss.prototype=xn.prototype;function eo(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||xs}var to=eo.prototype=new Ss;to.constructor=eo;ws(to,xn.prototype);to.isPureReactComponent=!0;var ta=Array.isArray,js=Object.prototype.hasOwnProperty,no={current:null},Ns={key:!0,ref:!0,__self:!0,__source:!0};function Cs(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)js.call(t,r)&&!Ns.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:ur,type:e,key:i,ref:o,props:l,_owner:no.current}}function Gc(e,t){return{$$typeof:ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ro(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function Xc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var na=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xc(""+e.key):t.toString(36)}function Dr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ur:case Ic:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Dl(o,0):r,ta(l)?(n="",e!=null&&(n=e.replace(na,"$&/")+"/"),Dr(l,t,n,"",function(d){return d})):l!=null&&(ro(l)&&(l=Gc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(na,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",ta(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Dl(i,s);o+=Dr(i,t,n,u,l)}else if(u=Yc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Dl(i,s++),o+=Dr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function vr(e,t,n){if(e==null)return e;var r=[],l=0;return Dr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Zc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Fr={transition:null},Jc={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:no};function Es(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!ro(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=xn;F.Fragment=Uc;F.Profiler=$c;F.PureComponent=eo;F.StrictMode=Ac;F.Suspense=Hc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jc;F.act=Es;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ws({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=no.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)js.call(t,u)&&!Ns.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:ur,type:e.type,key:l,ref:i,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bc,_context:e},e.Consumer=e};F.createElement=Cs;F.createFactory=function(e){var t=Cs.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Wc,render:e}};F.isValidElement=ro;F.lazy=function(e){return{$$typeof:Kc,_payload:{_status:-1,_result:e},_init:Zc}};F.memo=function(e,t){return{$$typeof:Qc,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};F.unstable_act=Es;F.useCallback=function(e,t){return fe.current.useCallback(e,t)};F.useContext=function(e){return fe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};F.useEffect=function(e,t){return fe.current.useEffect(e,t)};F.useId=function(){return fe.current.useId()};F.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return fe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};F.useRef=function(e){return fe.current.useRef(e)};F.useState=function(e){return fe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return fe.current.useTransition()};F.version="18.3.1";ys.exports=F;var z=ys.exports;const Oe=Oc(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=z,ed=Symbol.for("react.element"),td=Symbol.for("react.fragment"),nd=Object.prototype.hasOwnProperty,rd=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ld={key:!0,ref:!0,__self:!0,__source:!0};function zs(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)nd.call(t,r)&&!ld.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:ed,type:e,key:i,ref:o,props:l,_owner:rd.current}}vl.Fragment=td;vl.jsx=zs;vl.jsxs=zs;vs.exports=vl;var a=vs.exports,_s={exports:{}},je={},bs={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,L){var M=_.length;_.push(L);e:for(;0<M;){var A=M-1>>>1,V=_[A];if(0<l(V,L))_[A]=L,_[M]=V,M=A;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var L=_[0],M=_.pop();if(M!==L){_[0]=M;e:for(var A=0,V=_.length,ct=V>>>1;A<ct;){var Xe=2*(A+1)-1,jn=_[Xe],$e=Xe+1,Ze=_[$e];if(0>l(jn,M))$e<V&&0>l(Ze,jn)?(_[A]=Ze,_[$e]=M,A=$e):(_[A]=jn,_[Xe]=M,A=Xe);else if($e<V&&0>l(Ze,M))_[A]=Ze,_[$e]=M,A=$e;else break e}}return L}function l(_,L){var M=_.sortIndex-L.sortIndex;return M!==0?M:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],h=1,g=null,m=3,w=!1,y=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var L=n(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=_)r(d),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(d)}}function x(_){if(N=!1,p(_),!y)if(n(u)!==null)y=!0,ut(k);else{var L=n(d);L!==null&&Pt(x,L.startTime-_)}}function k(_,L){y=!1,N&&(N=!1,f(v),v=-1),w=!0;var M=m;try{for(p(L),g=n(u);g!==null&&(!(g.expirationTime>L)||_&&!I());){var A=g.callback;if(typeof A=="function"){g.callback=null,m=g.priorityLevel;var V=A(g.expirationTime<=L);L=e.unstable_now(),typeof V=="function"?g.callback=V:g===n(u)&&r(u),p(L)}else r(u);g=n(u)}if(g!==null)var ct=!0;else{var Xe=n(d);Xe!==null&&Pt(x,Xe.startTime-L),ct=!1}return ct}finally{g=null,m=M,w=!1}}var C=!1,E=null,v=-1,S=5,T=-1;function I(){return!(e.unstable_now()-T<S)}function Y(){if(E!==null){var _=e.unstable_now();T=_;var L=!0;try{L=E(!0,_)}finally{L?Ce():(C=!1,E=null)}}else C=!1}var Ce;if(typeof c=="function")Ce=function(){c(Y)};else if(typeof MessageChannel<"u"){var gr=new MessageChannel,Sn=gr.port2;gr.port1.onmessage=Y,Ce=function(){Sn.postMessage(null)}}else Ce=function(){D(Y,0)};function ut(_){E=_,C||(C=!0,Ce())}function Pt(_,L){v=D(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,ut(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var M=m;m=L;try{return _()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var M=m;m=_;try{return L()}finally{m=M}},e.unstable_scheduleCallback=function(_,L,M){var A=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?A+M:A):M=A,_){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=M+V,_={id:h++,callback:L,priorityLevel:_,startTime:M,expirationTime:V,sortIndex:-1},M>A?(_.sortIndex=M,t(d,_),n(u)===null&&_===n(d)&&(N?(f(v),v=-1):N=!0,Pt(x,M-A))):(_.sortIndex=V,t(u,_),y||w||(y=!0,ut(k))),_},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(_){var L=m;return function(){var M=m;m=L;try{return _.apply(this,arguments)}finally{m=M}}}})(Ts);bs.exports=Ts;var id=bs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od=z,Se=id;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ps=new Set,Qn={};function Wt(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Qn[e]=t,e=0;e<t.length;e++)Ps.add(t[e])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oi=Object.prototype.hasOwnProperty,ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra={},la={};function sd(e){return oi.call(la,e)?!0:oi.call(ra,e)?!1:ad.test(e)?la[e]=!0:(ra[e]=!0,!1)}function ud(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cd(e,t,n,r){if(t===null||typeof t>"u"||ud(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var lo=/[\-:]([a-z])/g;function io(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lo,io);le[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lo,io);le[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lo,io);le[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function oo(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cd(t,n,l,r)&&(n=null),r||l===null?sd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),ao=Symbol.for("react.strict_mode"),ai=Symbol.for("react.profiler"),Ls=Symbol.for("react.provider"),Ms=Symbol.for("react.context"),so=Symbol.for("react.forward_ref"),si=Symbol.for("react.suspense"),ui=Symbol.for("react.suspense_list"),uo=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Ds=Symbol.for("react.offscreen"),ia=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=ia&&e[ia]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Fl;function Mn(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Rl=!1;function Ol(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function dd(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Kt:return"Portal";case ai:return"Profiler";case ao:return"StrictMode";case si:return"Suspense";case ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ms:return(e.displayName||"Context")+".Consumer";case Ls:return(e._context.displayName||"Context")+".Provider";case so:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uo:return t=e.displayName||null,t!==null?t:ci(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return ci(e(t))}catch{}}return null}function fd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ci(t);case 8:return t===ao?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pd(e){var t=Fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=pd(e))}function Rs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function di(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function oa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Et(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Os(e,t){t=t.checked,t!=null&&oo(e,"checked",t,!1)}function fi(e,t){Os(e,t);var n=Et(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&pi(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function aa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pi(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Dn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Et(n)}}function Is(e,t){var n=Et(t.value),r=Et(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ua(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Us(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Us(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,As=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},md=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){md.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function $s(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Bs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=$s(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var hd=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gi(e,t){if(t){if(hd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xi=null,an=null,sn=null;function ca(e){if(e=fr(e)){if(typeof xi!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Sl(t),xi(e.stateNode,e.type,t))}}function Vs(e){an?sn?sn.push(e):sn=[e]:an=e}function Ws(){if(an){var e=an,t=sn;if(sn=an=null,ca(e),t)for(e=0;e<t.length;e++)ca(t[e])}}function Hs(e,t){return e(t)}function Qs(){}var Il=!1;function Ks(e,t,n){if(Il)return e(t,n);Il=!0;try{return Hs(e,t,n)}finally{Il=!1,(an!==null||sn!==null)&&(Qs(),Ws())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var wi=!1;if(rt)try{var En={};Object.defineProperty(En,"passive",{get:function(){wi=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{wi=!1}function gd(e,t,n,r,l,i,o,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var In=!1,Kr=null,Yr=!1,ki=null,vd={onError:function(e){In=!0,Kr=e}};function yd(e,t,n,r,l,i,o,s,u){In=!1,Kr=null,gd.apply(vd,arguments)}function xd(e,t,n,r,l,i,o,s,u){if(yd.apply(this,arguments),In){if(In){var d=Kr;In=!1,Kr=null}else throw Error(j(198));Yr||(Yr=!0,ki=d)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ys(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function da(e){if(Ht(e)!==e)throw Error(j(188))}function wd(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return da(l),e;if(i===r)return da(l),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Gs(e){return e=wd(e),e!==null?Xs(e):null}function Xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xs(e);if(t!==null)return t;e=e.sibling}return null}var Zs=Se.unstable_scheduleCallback,fa=Se.unstable_cancelCallback,kd=Se.unstable_shouldYield,Sd=Se.unstable_requestPaint,X=Se.unstable_now,jd=Se.unstable_getCurrentPriorityLevel,fo=Se.unstable_ImmediatePriority,Js=Se.unstable_UserBlockingPriority,Gr=Se.unstable_NormalPriority,Nd=Se.unstable_LowPriority,qs=Se.unstable_IdlePriority,yl=null,Qe=null;function Cd(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(yl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:_d,Ed=Math.log,zd=Math.LN2;function _d(e){return e>>>=0,e===0?32:31-(Ed(e)/zd|0)|0}var kr=64,Sr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Fn(s):(i&=o,i!==0&&(r=Fn(i)))}else o=n&~l,o!==0?r=Fn(o):i!==0&&(r=Fn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function bd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Td(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ie(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=bd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function eu(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function Pd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function po(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function tu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nu,mo,ru,lu,iu,ji=!1,jr=[],yt=null,xt=null,wt=null,Gn=new Map,Xn=new Map,mt=[],Ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pa(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function zn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=fr(t),t!==null&&mo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Md(e,t,n,r,l){switch(t){case"focusin":return yt=zn(yt,e,t,n,r,l),!0;case"dragenter":return xt=zn(xt,e,t,n,r,l),!0;case"mouseover":return wt=zn(wt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Gn.set(i,zn(Gn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Xn.set(i,zn(Xn.get(i)||null,e,t,n,r,l)),!0}return!1}function ou(e){var t=Dt(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=Ys(n),t!==null){e.blockedOn=t,iu(e.priority,function(){ru(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ni(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yi=r,n.target.dispatchEvent(r),yi=null}else return t=fr(n),t!==null&&mo(t),e.blockedOn=n,!1;t.shift()}return!0}function ma(e,t,n){Rr(e)&&n.delete(t)}function Dd(){ji=!1,yt!==null&&Rr(yt)&&(yt=null),xt!==null&&Rr(xt)&&(xt=null),wt!==null&&Rr(wt)&&(wt=null),Gn.forEach(ma),Xn.forEach(ma)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,ji||(ji=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Dd)))}function Zn(e){function t(l){return _n(l,e)}if(0<jr.length){_n(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yt!==null&&_n(yt,e),xt!==null&&_n(xt,e),wt!==null&&_n(wt,e),Gn.forEach(t),Xn.forEach(t),n=0;n<mt.length;n++)r=mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mt.length&&(n=mt[0],n.blockedOn===null);)ou(n),n.blockedOn===null&&mt.shift()}var un=st.ReactCurrentBatchConfig,Zr=!0;function Fd(e,t,n,r){var l=O,i=un.transition;un.transition=null;try{O=1,ho(e,t,n,r)}finally{O=l,un.transition=i}}function Rd(e,t,n,r){var l=O,i=un.transition;un.transition=null;try{O=4,ho(e,t,n,r)}finally{O=l,un.transition=i}}function ho(e,t,n,r){if(Zr){var l=Ni(e,t,n,r);if(l===null)Gl(e,t,r,Jr,n),pa(e,r);else if(Md(l,e,t,n,r))r.stopPropagation();else if(pa(e,r),t&4&&-1<Ld.indexOf(e)){for(;l!==null;){var i=fr(l);if(i!==null&&nu(i),i=Ni(e,t,n,r),i===null&&Gl(e,t,r,Jr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Gl(e,t,r,null,n)}}var Jr=null;function Ni(e,t,n,r){if(Jr=null,e=co(r),e=Dt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ys(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jd()){case fo:return 1;case Js:return 4;case Gr:case Nd:return 16;case qs:return 536870912;default:return 16}default:return 16}}var gt=null,go=null,Or=null;function su(){if(Or)return Or;var e,t=go,n=t.length,r,l="value"in gt?gt.value:gt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Or=l.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function ha(){return!1}function Ne(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nr:ha,this.isPropagationStopped=ha,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vo=Ne(wn),dr=K({},wn,{view:0,detail:0}),Od=Ne(dr),Al,$l,bn,xl=K({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(Al=e.screenX-bn.screenX,$l=e.screenY-bn.screenY):$l=Al=0,bn=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),ga=Ne(xl),Id=K({},xl,{dataTransfer:0}),Ud=Ne(Id),Ad=K({},dr,{relatedTarget:0}),Bl=Ne(Ad),$d=K({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=Ne($d),Vd=K({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wd=Ne(Vd),Hd=K({},wn,{data:0}),va=Ne(Hd),Qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yd[e])?!!t[e]:!1}function yo(){return Gd}var Xd=K({},dr,{key:function(e){if(e.key){var t=Qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yo,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=Ne(Xd),Jd=K({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=Ne(Jd),qd=K({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yo}),ef=Ne(qd),tf=K({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),nf=Ne(tf),rf=K({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lf=Ne(rf),of=[9,13,27,32],xo=rt&&"CompositionEvent"in window,Un=null;rt&&"documentMode"in document&&(Un=document.documentMode);var af=rt&&"TextEvent"in window&&!Un,uu=rt&&(!xo||Un&&8<Un&&11>=Un),xa=" ",wa=!1;function cu(e,t){switch(e){case"keyup":return of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function sf(e,t){switch(e){case"compositionend":return du(t);case"keypress":return t.which!==32?null:(wa=!0,xa);case"textInput":return e=t.data,e===xa&&wa?null:e;default:return null}}function uf(e,t){if(Gt)return e==="compositionend"||!xo&&cu(e,t)?(e=su(),Or=go=gt=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uu&&t.locale!=="ko"?null:t.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cf[e.type]:t==="textarea"}function fu(e,t,n,r){Vs(r),t=qr(t,"onChange"),0<t.length&&(n=new vo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Jn=null;function df(e){ju(e,0)}function wl(e){var t=Jt(e);if(Rs(t))return e}function ff(e,t){if(e==="change")return t}var pu=!1;if(rt){var Vl;if(rt){var Wl="oninput"in document;if(!Wl){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Wl=typeof Sa.oninput=="function"}Vl=Wl}else Vl=!1;pu=Vl&&(!document.documentMode||9<document.documentMode)}function ja(){An&&(An.detachEvent("onpropertychange",mu),Jn=An=null)}function mu(e){if(e.propertyName==="value"&&wl(Jn)){var t=[];fu(t,Jn,e,co(e)),Ks(df,t)}}function pf(e,t,n){e==="focusin"?(ja(),An=t,Jn=n,An.attachEvent("onpropertychange",mu)):e==="focusout"&&ja()}function mf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(Jn)}function hf(e,t){if(e==="click")return wl(t)}function gf(e,t){if(e==="input"||e==="change")return wl(t)}function vf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:vf;function qn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!oi.call(t,l)||!Ae(e[l],t[l]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gu(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yf(e){var t=gu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hu(n.ownerDocument.documentElement,n)){if(r!==null&&wo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ca(n,i);var o=Ca(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xf=rt&&"documentMode"in document&&11>=document.documentMode,Xt=null,Ci=null,$n=null,Ei=!1;function Ea(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ei||Xt==null||Xt!==Qr(r)||(r=Xt,"selectionStart"in r&&wo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&qn($n,r)||($n=r,r=qr(Ci,"onSelect"),0<r.length&&(t=new vo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zt={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},Hl={},vu={};rt&&(vu=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function kl(e){if(Hl[e])return Hl[e];if(!Zt[e])return e;var t=Zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vu)return Hl[e]=t[n];return e}var yu=kl("animationend"),xu=kl("animationiteration"),wu=kl("animationstart"),ku=kl("transitionend"),Su=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Su.set(e,t),Wt(t,[e])}for(var Ql=0;Ql<za.length;Ql++){var Kl=za[Ql],wf=Kl.toLowerCase(),kf=Kl[0].toUpperCase()+Kl.slice(1);_t(wf,"on"+kf)}_t(yu,"onAnimationEnd");_t(xu,"onAnimationIteration");_t(wu,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(ku,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function _a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xd(r,t,void 0,e),e.currentTarget=null}function ju(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;_a(l,s,d),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;_a(l,s,d),i=u}}}if(Yr)throw e=ki,Yr=!1,ki=null,e}function $(e,t){var n=t[Pi];n===void 0&&(n=t[Pi]=new Set);var r=e+"__bubble";n.has(r)||(Nu(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Nu(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Er]){e[Er]=!0,Ps.forEach(function(n){n!=="selectionchange"&&(Sf.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,Yl("selectionchange",!1,t))}}function Nu(e,t,n,r){switch(au(t)){case 1:var l=Fd;break;case 4:l=Rd;break;default:l=ho}n=l.bind(null,t,n,e),l=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Gl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Dt(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Ks(function(){var d=i,h=co(n),g=[];e:{var m=Su.get(e);if(m!==void 0){var w=vo,y=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":w=Zd;break;case"focusin":y="focus",w=Bl;break;case"focusout":y="blur",w=Bl;break;case"beforeblur":case"afterblur":w=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ef;break;case yu:case xu:case wu:w=Bd;break;case ku:w=nf;break;case"scroll":w=Od;break;case"wheel":w=lf;break;case"copy":case"cut":case"paste":w=Wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ya}var N=(t&4)!==0,D=!N&&e==="scroll",f=N?m!==null?m+"Capture":null:m;N=[];for(var c=d,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Yn(c,f),x!=null&&N.push(tr(c,x,p)))),D)break;c=c.return}0<N.length&&(m=new w(m,y,null,n,h),g.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==yi&&(y=n.relatedTarget||n.fromElement)&&(Dt(y)||y[lt]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=d,y=y?Dt(y):null,y!==null&&(D=Ht(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=d),w!==y)){if(N=ga,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(N=ya,x="onPointerLeave",f="onPointerEnter",c="pointer"),D=w==null?m:Jt(w),p=y==null?m:Jt(y),m=new N(x,c+"leave",w,n,h),m.target=D,m.relatedTarget=p,x=null,Dt(h)===d&&(N=new N(f,c+"enter",y,n,h),N.target=p,N.relatedTarget=D,x=N),D=x,w&&y)t:{for(N=w,f=y,c=0,p=N;p;p=Qt(p))c++;for(p=0,x=f;x;x=Qt(x))p++;for(;0<c-p;)N=Qt(N),c--;for(;0<p-c;)f=Qt(f),p--;for(;c--;){if(N===f||f!==null&&N===f.alternate)break t;N=Qt(N),f=Qt(f)}N=null}else N=null;w!==null&&ba(g,m,w,N,!1),y!==null&&D!==null&&ba(g,D,y,N,!0)}}e:{if(m=d?Jt(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var k=ff;else if(ka(m))if(pu)k=gf;else{k=mf;var C=pf}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=hf);if(k&&(k=k(e,d))){fu(g,k,n,h);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&pi(m,"number",m.value)}switch(C=d?Jt(d):window,e){case"focusin":(ka(C)||C.contentEditable==="true")&&(Xt=C,Ci=d,$n=null);break;case"focusout":$n=Ci=Xt=null;break;case"mousedown":Ei=!0;break;case"contextmenu":case"mouseup":case"dragend":Ei=!1,Ea(g,n,h);break;case"selectionchange":if(xf)break;case"keydown":case"keyup":Ea(g,n,h)}var E;if(xo)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Gt?cu(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(uu&&n.locale!=="ko"&&(Gt||v!=="onCompositionStart"?v==="onCompositionEnd"&&Gt&&(E=su()):(gt=h,go="value"in gt?gt.value:gt.textContent,Gt=!0)),C=qr(d,v),0<C.length&&(v=new va(v,e,null,n,h),g.push({event:v,listeners:C}),E?v.data=E:(E=du(n),E!==null&&(v.data=E)))),(E=af?sf(e,n):uf(e,n))&&(d=qr(d,"onBeforeInput"),0<d.length&&(h=new va("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=E))}ju(g,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Yn(e,n),i!=null&&r.unshift(tr(e,i,l)),i=Yn(e,t),i!=null&&r.push(tr(e,i,l))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ba(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Yn(n,i),u!=null&&o.unshift(tr(n,u,s))):l||(u=Yn(n,i),u!=null&&o.push(tr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var jf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function Ta(e){return(typeof e=="string"?e:""+e).replace(jf,`
`).replace(Nf,"")}function zr(e,t,n){if(t=Ta(t),Ta(e)!==t&&n)throw Error(j(425))}function el(){}var zi=null,_i=null;function bi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,Cf=typeof clearTimeout=="function"?clearTimeout:void 0,Pa=typeof Promise=="function"?Promise:void 0,Ef=typeof queueMicrotask=="function"?queueMicrotask:typeof Pa<"u"?function(e){return Pa.resolve(null).then(e).catch(zf)}:Ti;function zf(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Zn(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function La(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),He="__reactFiber$"+kn,nr="__reactProps$"+kn,lt="__reactContainer$"+kn,Pi="__reactEvents$"+kn,_f="__reactListeners$"+kn,bf="__reactHandles$"+kn;function Dt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=La(e);e!==null;){if(n=e[He])return n;e=La(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[He]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Sl(e){return e[nr]||null}var Li=[],qt=-1;function bt(e){return{current:e}}function B(e){0>qt||(e.current=Li[qt],Li[qt]=null,qt--)}function U(e,t){qt++,Li[qt]=e.current,e.current=t}var zt={},ue=bt(zt),ge=bt(!1),Ut=zt;function pn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function tl(){B(ge),B(ue)}function Ma(e,t,n){if(ue.current!==zt)throw Error(j(168));U(ue,t),U(ge,n)}function Cu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(j(108,fd(e)||"Unknown",l));return K({},n,r)}function nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Ut=ue.current,U(ue,e),U(ge,ge.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Cu(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(ue),U(ue,e)):B(ge),U(ge,n)}var qe=null,jl=!1,Zl=!1;function Eu(e){qe===null?qe=[e]:qe.push(e)}function Tf(e){jl=!0,Eu(e)}function Tt(){if(!Zl&&qe!==null){Zl=!0;var e=0,t=O;try{var n=qe;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,jl=!1}catch(l){throw qe!==null&&(qe=qe.slice(e+1)),Zs(fo,Tt),l}finally{O=t,Zl=!1}}return null}var en=[],tn=0,rl=null,ll=0,Ee=[],ze=0,At=null,et=1,tt="";function Lt(e,t){en[tn++]=ll,en[tn++]=rl,rl=e,ll=t}function zu(e,t,n){Ee[ze++]=et,Ee[ze++]=tt,Ee[ze++]=At,At=e;var r=et;e=tt;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var i=32-Ie(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,et=1<<32-Ie(t)+l|n<<l|r,tt=i+e}else et=1<<i|n<<l|r,tt=e}function ko(e){e.return!==null&&(Lt(e,1),zu(e,1,0))}function So(e){for(;e===rl;)rl=en[--tn],en[tn]=null,ll=en[--tn],en[tn]=null;for(;e===At;)At=Ee[--ze],Ee[ze]=null,tt=Ee[--ze],Ee[ze]=null,et=Ee[--ze],Ee[ze]=null}var ke=null,we=null,W=!1,Re=null;function _u(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=At!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Di(e){if(W){var t=we;if(t){var n=t;if(!Fa(e,t)){if(Mi(e))throw Error(j(418));t=kt(n.nextSibling);var r=ke;t&&Fa(e,t)?_u(r,n):(e.flags=e.flags&-4097|2,W=!1,ke=e)}}else{if(Mi(e))throw Error(j(418));e.flags=e.flags&-4097|2,W=!1,ke=e}}}function Ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function _r(e){if(e!==ke)return!1;if(!W)return Ra(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bi(e.type,e.memoizedProps)),t&&(t=we)){if(Mi(e))throw bu(),Error(j(418));for(;t;)_u(e,t),t=kt(t.nextSibling)}if(Ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?kt(e.stateNode.nextSibling):null;return!0}function bu(){for(var e=we;e;)e=kt(e.nextSibling)}function mn(){we=ke=null,W=!1}function jo(e){Re===null?Re=[e]:Re.push(e)}var Pf=st.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oa(e){var t=e._init;return t(e._payload)}function Tu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Ct(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,x){return c===null||c.tag!==6?(c=li(p,f.mode,x),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,x){var k=p.type;return k===Yt?h(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ft&&Oa(k)===c.type)?(x=l(c,p.props),x.ref=Tn(f,c,p),x.return=f,x):(x=Hr(p.type,p.key,p.props,null,f.mode,x),x.ref=Tn(f,c,p),x.return=f,x)}function d(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ii(p,f.mode,x),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function h(f,c,p,x,k){return c===null||c.tag!==7?(c=It(p,f.mode,x,k),c.return=f,c):(c=l(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=li(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case yr:return p=Hr(c.type,c.key,c.props,null,f.mode,p),p.ref=Tn(f,null,c),p.return=f,p;case Kt:return c=ii(c,f.mode,p),c.return=f,c;case ft:var x=c._init;return g(f,x(c._payload),p)}if(Dn(c)||Cn(c))return c=It(c,f.mode,p,null),c.return=f,c;br(f,c)}return null}function m(f,c,p,x){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:return p.key===k?u(f,c,p,x):null;case Kt:return p.key===k?d(f,c,p,x):null;case ft:return k=p._init,m(f,c,k(p._payload),x)}if(Dn(p)||Cn(p))return k!==null?null:h(f,c,p,x,null);br(f,p)}return null}function w(f,c,p,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(c,f,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case yr:return f=f.get(x.key===null?p:x.key)||null,u(c,f,x,k);case Kt:return f=f.get(x.key===null?p:x.key)||null,d(c,f,x,k);case ft:var C=x._init;return w(f,c,p,C(x._payload),k)}if(Dn(x)||Cn(x))return f=f.get(p)||null,h(c,f,x,k,null);br(c,x)}return null}function y(f,c,p,x){for(var k=null,C=null,E=c,v=c=0,S=null;E!==null&&v<p.length;v++){E.index>v?(S=E,E=null):S=E.sibling;var T=m(f,E,p[v],x);if(T===null){E===null&&(E=S);break}e&&E&&T.alternate===null&&t(f,E),c=i(T,c,v),C===null?k=T:C.sibling=T,C=T,E=S}if(v===p.length)return n(f,E),W&&Lt(f,v),k;if(E===null){for(;v<p.length;v++)E=g(f,p[v],x),E!==null&&(c=i(E,c,v),C===null?k=E:C.sibling=E,C=E);return W&&Lt(f,v),k}for(E=r(f,E);v<p.length;v++)S=w(E,f,v,p[v],x),S!==null&&(e&&S.alternate!==null&&E.delete(S.key===null?v:S.key),c=i(S,c,v),C===null?k=S:C.sibling=S,C=S);return e&&E.forEach(function(I){return t(f,I)}),W&&Lt(f,v),k}function N(f,c,p,x){var k=Cn(p);if(typeof k!="function")throw Error(j(150));if(p=k.call(p),p==null)throw Error(j(151));for(var C=k=null,E=c,v=c=0,S=null,T=p.next();E!==null&&!T.done;v++,T=p.next()){E.index>v?(S=E,E=null):S=E.sibling;var I=m(f,E,T.value,x);if(I===null){E===null&&(E=S);break}e&&E&&I.alternate===null&&t(f,E),c=i(I,c,v),C===null?k=I:C.sibling=I,C=I,E=S}if(T.done)return n(f,E),W&&Lt(f,v),k;if(E===null){for(;!T.done;v++,T=p.next())T=g(f,T.value,x),T!==null&&(c=i(T,c,v),C===null?k=T:C.sibling=T,C=T);return W&&Lt(f,v),k}for(E=r(f,E);!T.done;v++,T=p.next())T=w(E,f,v,T.value,x),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?v:T.key),c=i(T,c,v),C===null?k=T:C.sibling=T,C=T);return e&&E.forEach(function(Y){return t(f,Y)}),W&&Lt(f,v),k}function D(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Yt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:e:{for(var k=p.key,C=c;C!==null;){if(C.key===k){if(k=p.type,k===Yt){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ft&&Oa(k)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=Tn(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Yt?(c=It(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=Hr(p.type,p.key,p.props,null,f.mode,x),x.ref=Tn(f,c,p),x.return=f,f=x)}return o(f);case Kt:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ii(p,f.mode,x),c.return=f,f=c}return o(f);case ft:return C=p._init,D(f,c,C(p._payload),x)}if(Dn(p))return y(f,c,p,x);if(Cn(p))return N(f,c,p,x);br(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=li(p,f.mode,x),c.return=f,f=c),o(f)):n(f,c)}return D}var hn=Tu(!0),Pu=Tu(!1),il=bt(null),ol=null,nn=null,No=null;function Co(){No=nn=ol=null}function Eo(e){var t=il.current;B(il),e._currentValue=t}function Fi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){ol=e,No=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(No!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(ol===null)throw Error(j(308));nn=e,ol.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var Ft=null;function zo(e){Ft===null?Ft=[e]:Ft.push(e)}function Lu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,zo(t)):(n.next=l.next,l.next=n),t.interleaved=n,it(e,r)}function it(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pt=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,it(e,n)}return l=r.interleaved,l===null?(t.next=t,zo(r)):(t.next=l.next,l.next=t),r.interleaved=t,it(e,n)}function Ur(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,po(e,n)}}function Ia(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function al(e,t,n,r){var l=e.updateQueue;pt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=u))}if(i!==null){var g=l.baseState;o=0,h=d=u=null,s=i;do{var m=s.lane,w=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,N=s;switch(m=t,w=n,N.tag){case 1:if(y=N.payload,typeof y=="function"){g=y.call(w,g,m);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=N.payload,m=typeof y=="function"?y.call(w,g,m):y,m==null)break e;g=K({},g,m);break e;case 2:pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=w,u=g):h=h.next=w,o|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(u=g),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Bt|=o,e.lanes=o,e.memoizedState=g}}function Ua(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(j(191,l));l.call(r)}}}var pr={},Ke=bt(pr),rr=bt(pr),lr=bt(pr);function Rt(e){if(e===pr)throw Error(j(174));return e}function bo(e,t){switch(U(lr,t),U(rr,e),U(Ke,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hi(t,e)}B(Ke),U(Ke,t)}function gn(){B(Ke),B(rr),B(lr)}function Du(e){Rt(lr.current);var t=Rt(Ke.current),n=hi(t,e.type);t!==n&&(U(rr,e),U(Ke,n))}function To(e){rr.current===e&&(B(Ke),B(rr))}var H=bt(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Po(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Ar=st.ReactCurrentDispatcher,ql=st.ReactCurrentBatchConfig,$t=0,Q=null,J=null,ee=null,ul=!1,Bn=!1,ir=0,Lf=0;function oe(){throw Error(j(321))}function Lo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function Mo(e,t,n,r,l,i){if($t=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ar.current=e===null||e.memoizedState===null?Rf:Of,e=n(r,l),Bn){i=0;do{if(Bn=!1,ir=0,25<=i)throw Error(j(301));i+=1,ee=J=null,t.updateQueue=null,Ar.current=If,e=n(r,l)}while(Bn)}if(Ar.current=cl,t=J!==null&&J.next!==null,$t=0,ee=J=Q=null,ul=!1,t)throw Error(j(300));return e}function Do(){var e=ir!==0;return ir=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?Q.memoizedState=ee=e:ee=ee.next=e,ee}function Le(){if(J===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?Q.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(j(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?Q.memoizedState=ee=e:ee=ee.next=e}return ee}function or(e,t){return typeof t=="function"?t(e):t}function ei(e){var t=Le(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,d=i;do{var h=d.lane;if(($t&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,o=r):u=u.next=g,Q.lanes|=h,Bt|=h}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=s,Ae(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Q.lanes|=i,Bt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ti(e){var t=Le(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ae(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Fu(){}function Ru(e,t){var n=Q,r=Le(),l=t(),i=!Ae(r.memoizedState,l);if(i&&(r.memoizedState=l,he=!0),r=r.queue,Fo(Uu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,ar(9,Iu.bind(null,n,r,l,t),void 0,null),te===null)throw Error(j(349));$t&30||Ou(n,t,l)}return l}function Ou(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Iu(e,t,n,r){t.value=n,t.getSnapshot=r,Au(t)&&$u(e)}function Uu(e,t,n){return n(function(){Au(t)&&$u(e)})}function Au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function $u(e){var t=it(e,1);t!==null&&Ue(t,e,1,-1)}function Aa(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=Ff.bind(null,Q,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bu(){return Le().memoizedState}function $r(e,t,n,r){var l=We();Q.flags|=e,l.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function Nl(e,t,n,r){var l=Le();r=r===void 0?null:r;var i=void 0;if(J!==null){var o=J.memoizedState;if(i=o.destroy,r!==null&&Lo(r,o.deps)){l.memoizedState=ar(t,n,i,r);return}}Q.flags|=e,l.memoizedState=ar(1|t,n,i,r)}function $a(e,t){return $r(8390656,8,e,t)}function Fo(e,t){return Nl(2048,8,e,t)}function Vu(e,t){return Nl(4,2,e,t)}function Wu(e,t){return Nl(4,4,e,t)}function Hu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qu(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4,4,Hu.bind(null,t,e),n)}function Ro(){}function Ku(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yu(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gu(e,t,n){return $t&21?(Ae(n,t)||(n=eu(),Q.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function Mf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{O=n,ql.transition=r}}function Xu(){return Le().memoizedState}function Df(e,t,n){var r=Nt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zu(e))Ju(t,n);else if(n=Lu(e,t,n,r),n!==null){var l=de();Ue(n,e,r,l),qu(n,t,r)}}function Ff(e,t,n){var r=Nt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zu(e))Ju(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ae(s,o)){var u=t.interleaved;u===null?(l.next=l,zo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Lu(e,t,l,r),n!==null&&(l=de(),Ue(n,e,r,l),qu(n,t,r))}}function Zu(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Ju(e,t){Bn=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,po(e,n)}}var cl={readContext:Pe,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Rf={readContext:Pe,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:$a,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,Hu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Df.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Aa,useDebugValue:Ro,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=Mf.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,l=We();if(W){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),te===null)throw Error(j(349));$t&30||Ou(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,$a(Uu.bind(null,r,i,e),[e]),r.flags|=2048,ar(9,Iu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if(W){var n=tt,r=et;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Of={readContext:Pe,useCallback:Ku,useContext:Pe,useEffect:Fo,useImperativeHandle:Qu,useInsertionEffect:Vu,useLayoutEffect:Wu,useMemo:Yu,useReducer:ei,useRef:Bu,useState:function(){return ei(or)},useDebugValue:Ro,useDeferredValue:function(e){var t=Le();return Gu(t,J.memoizedState,e)},useTransition:function(){var e=ei(or)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Ru,useId:Xu,unstable_isNewReconciler:!1},If={readContext:Pe,useCallback:Ku,useContext:Pe,useEffect:Fo,useImperativeHandle:Qu,useInsertionEffect:Vu,useLayoutEffect:Wu,useMemo:Yu,useReducer:ti,useRef:Bu,useState:function(){return ti(or)},useDebugValue:Ro,useDeferredValue:function(e){var t=Le();return J===null?t.memoizedState=e:Gu(t,J.memoizedState,e)},useTransition:function(){var e=ti(or)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Ru,useId:Xu,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ri(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cl={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),l=Nt(e),i=nt(r,l);i.payload=t,n!=null&&(i.callback=n),t=St(e,i,l),t!==null&&(Ue(t,e,l,r),Ur(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),l=Nt(e),i=nt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=St(e,i,l),t!==null&&(Ue(t,e,l,r),Ur(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=Nt(e),l=nt(n,r);l.tag=2,t!=null&&(l.callback=t),t=St(e,l,r),t!==null&&(Ue(t,e,r,n),Ur(t,e,r))}};function Ba(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(l,i):!0}function ec(e,t,n){var r=!1,l=zt,i=t.contextType;return typeof i=="object"&&i!==null?i=Pe(i):(l=ve(t)?Ut:ue.current,r=t.contextTypes,i=(r=r!=null)?pn(e,l):zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Va(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cl.enqueueReplaceState(t,t.state,null)}function Oi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},_o(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Pe(i):(i=ve(t)?Ut:ue.current,l.context=pn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ri(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Cl.enqueueReplaceState(l,l.state,null),al(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=dd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ii(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Uf=typeof WeakMap=="function"?WeakMap:Map;function tc(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fl||(fl=!0,Yi=r),Ii(e,t)},n}function nc(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ii(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ii(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Uf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=qf.bind(null,e,t,n),t.then(e,e))}function Ha(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var Af=st.ReactCurrentOwner,he=!1;function ce(e,t,n,r){t.child=e===null?Pu(t,null,n,r):hn(t,e.child,n,r)}function Ka(e,t,n,r,l){n=n.render;var i=t.ref;return cn(t,l),r=Mo(e,t,n,r,i,l),n=Do(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ot(e,t,l)):(W&&n&&ko(t),t.flags|=1,ce(e,t,r,l),t.child)}function Ya(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Wo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,rc(e,t,i,r,l)):(e=Hr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(o,r)&&e.ref===t.ref)return ot(e,t,l)}return t.flags|=1,e=Ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function rc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(qn(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,ot(e,t,l)}return Ui(e,t,n,r,l)}function lc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(ln,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(ln,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(ln,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(ln,xe),xe|=r;return ce(e,t,l,n),t.child}function ic(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ui(e,t,n,r,l){var i=ve(n)?Ut:ue.current;return i=pn(t,i),cn(t,l),n=Mo(e,t,n,r,i,l),r=Do(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ot(e,t,l)):(W&&r&&ko(t),t.flags|=1,ce(e,t,n,l),t.child)}function Ga(e,t,n,r,l){if(ve(n)){var i=!0;nl(t)}else i=!1;if(cn(t,l),t.stateNode===null)Br(e,t),ec(t,n,r),Oi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Pe(d):(d=ve(n)?Ut:ue.current,d=pn(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Va(t,o,r,d),pt=!1;var m=t.memoizedState;o.state=m,al(t,r,o,l),u=t.memoizedState,s!==r||m!==u||ge.current||pt?(typeof h=="function"&&(Ri(t,n,h,r),u=t.memoizedState),(s=pt||Ba(t,n,s,r,m,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Mu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:De(t.type,s),o.props=d,g=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pe(u):(u=ve(n)?Ut:ue.current,u=pn(t,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==g||m!==u)&&Va(t,o,r,u),pt=!1,m=t.memoizedState,o.state=m,al(t,r,o,l);var y=t.memoizedState;s!==g||m!==y||ge.current||pt?(typeof w=="function"&&(Ri(t,n,w,r),y=t.memoizedState),(d=pt||Ba(t,n,d,r,m,y,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ai(e,t,n,r,i,l)}function Ai(e,t,n,r,l,i){ic(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Da(t,n,!1),ot(e,t,i);r=t.stateNode,Af.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=hn(t,e.child,null,i),t.child=hn(t,null,s,i)):ce(e,t,s,i),t.memoizedState=r.state,l&&Da(t,n,!0),t.child}function oc(e){var t=e.stateNode;t.pendingContext?Ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(e,t.context,!1),bo(e,t.containerInfo)}function Xa(e,t,n,r,l){return mn(),jo(l),t.flags|=256,ce(e,t,n,r),t.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function Bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function ac(e,t,n){var r=t.pendingProps,l=H.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(H,l&1),e===null)return Di(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=_l(o,r,0,null),e=It(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Bi(n),t.memoizedState=$i,e):Oo(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return $f(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ct(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Ct(s,i):(i=It(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Bi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=$i,r}return i=e.child,e=i.sibling,r=Ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oo(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Tr(e,t,n,r){return r!==null&&jo(r),hn(t,e.child,null,n),e=Oo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ni(Error(j(422))),Tr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=_l({mode:"visible",children:r.children},l,0,null),i=It(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hn(t,e.child,null,o),t.child.memoizedState=Bi(o),t.memoizedState=$i,i);if(!(t.mode&1))return Tr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(j(419)),r=ni(i,r,void 0),Tr(e,t,o,r)}if(s=(o&e.childLanes)!==0,he||s){if(r=te,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,it(e,l),Ue(r,e,l,-1))}return Vo(),r=ni(Error(j(421))),Tr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=ep.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=kt(l.nextSibling),ke=t,W=!0,Re=null,e!==null&&(Ee[ze++]=et,Ee[ze++]=tt,Ee[ze++]=At,et=e.id,tt=e.overflow,At=t),t=Oo(t,r.children),t.flags|=4096,t)}function Za(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fi(e.return,t,n)}function ri(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function sc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Za(e,n,t);else if(e.tag===19)Za(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(H,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&sl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ri(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&sl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ri(t,!0,n,null,i);break;case"together":ri(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bf(e,t,n){switch(t.tag){case 3:oc(t),mn();break;case 5:Du(t);break;case 1:ve(t.type)&&nl(t);break;case 4:bo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(il,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?ac(e,t,n):(U(H,H.current&1),e=ot(e,t,n),e!==null?e.sibling:null);U(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,lc(e,t,n)}return ot(e,t,n)}var uc,Vi,cc,dc;uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vi=function(){};cc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Rt(Ke.current);var i=null;switch(n){case"input":l=di(e,l),r=di(e,r),i=[];break;case"select":l=K({},l,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":l=mi(e,l),r=mi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=el)}gi(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Qn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Qn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&$("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};dc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vf(e,t,n){var r=t.pendingProps;switch(So(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ve(t.type)&&tl(),ae(t),null;case 3:return r=t.stateNode,gn(),B(ge),B(ue),Po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Zi(Re),Re=null))),Vi(e,t),ae(t),null;case 5:To(t);var l=Rt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)cc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return ae(t),null}if(e=Rt(Ke.current),_r(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[He]=t,r[nr]=i,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<Rn.length;l++)$(Rn[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":oa(r,i),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$("invalid",r);break;case"textarea":sa(r,i),$("invalid",r)}gi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",""+s]):Qn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&$("scroll",r)}switch(n){case"input":xr(r),aa(r,i,!0);break;case"textarea":xr(r),ua(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=el)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Us(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[He]=t,e[nr]=r,uc(e,t,!1,!1),t.stateNode=e;e:{switch(o=vi(n,r),n){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<Rn.length;l++)$(Rn[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":oa(e,r),l=di(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=K({},r,{value:void 0}),$("invalid",e);break;case"textarea":sa(e,r),l=mi(e,r),$("invalid",e);break;default:l=r}gi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Bs(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&As(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&$("scroll",e):u!=null&&oo(e,i,u,o))}switch(n){case"input":xr(e),aa(e,r,!1);break;case"textarea":xr(e),ua(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Et(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?on(e,!!r.multiple,i,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)dc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Rt(lr.current),Rt(Ke.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(i=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return ae(t),null;case 13:if(B(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&we!==null&&t.mode&1&&!(t.flags&128))bu(),mn(),t.flags|=98560,i=!1;else if(i=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[He]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),i=!1}else Re!==null&&(Zi(Re),Re=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?q===0&&(q=3):Vo())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return gn(),Vi(e,t),e===null&&er(t.stateNode.containerInfo),ae(t),null;case 10:return Eo(t.type._context),ae(t),null;case 17:return ve(t.type)&&tl(),ae(t),null;case 19:if(B(H),i=t.memoizedState,i===null)return ae(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Pn(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=sl(e),o!==null){for(t.flags|=128,Pn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&X()>yn&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304)}else{if(!r)if(e=sl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!W)return ae(t),null}else 2*X()-i.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=X(),t.sibling=null,n=H.current,U(H,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Bo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Wf(e,t){switch(So(t),t.tag){case 1:return ve(t.type)&&tl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),B(ge),B(ue),Po(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return To(t),null;case 13:if(B(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(H),null;case 4:return gn(),null;case 10:return Eo(t.type._context),null;case 22:case 23:return Bo(),null;case 24:return null;default:return null}}var Pr=!1,se=!1,Hf=typeof WeakSet=="function"?WeakSet:Set,b=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Wi(e,t,n){try{n()}catch(r){G(e,t,r)}}var Ja=!1;function Qf(e,t){if(zi=Zr,e=gu(),wo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,d=0,h=0,g=e,m=null;t:for(;;){for(var w;g!==n||l!==0&&g.nodeType!==3||(s=o+l),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(w=g.firstChild)!==null;)m=g,g=w;for(;;){if(g===e)break t;if(m===n&&++d===l&&(s=o),m===i&&++h===r&&(u=o),(w=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_i={focusedElem:e,selectionRange:n},Zr=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var N=y.memoizedProps,D=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?N:De(t.type,N),D);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return y=Ja,Ja=!1,y}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Wi(t,n,i)}l=l.next}while(l!==r)}}function El(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fc(e){var t=e.alternate;t!==null&&(e.alternate=null,fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[nr],delete t[Pi],delete t[_f],delete t[bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pc(e){return e.tag===5||e.tag===3||e.tag===4}function qa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=el));else if(r!==4&&(e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}var ne=null,Fe=!1;function dt(e,t,n){for(n=n.child;n!==null;)mc(e,t,n),n=n.sibling}function mc(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:se||rn(n,t);case 6:var r=ne,l=Fe;ne=null,dt(e,t,n),ne=r,Fe=l,ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),Zn(e)):Xl(ne,n.stateNode));break;case 4:r=ne,l=Fe,ne=n.stateNode.containerInfo,Fe=!0,dt(e,t,n),ne=r,Fe=l;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Wi(n,t,o),l=l.next}while(l!==r)}dt(e,t,n);break;case 1:if(!se&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}dt(e,t,n);break;case 21:dt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,dt(e,t,n),se=r):dt(e,t,n);break;default:dt(e,t,n)}}function es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hf),t.forEach(function(r){var l=tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,Fe=!1;break e;case 3:ne=s.stateNode.containerInfo,Fe=!0;break e;case 4:ne=s.stateNode.containerInfo,Fe=!0;break e}s=s.return}if(ne===null)throw Error(j(160));mc(i,o,l),ne=null,Fe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){G(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hc(t,e),t=t.sibling}function hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ve(e),r&4){try{Vn(3,e,e.return),El(3,e)}catch(N){G(e,e.return,N)}try{Vn(5,e,e.return)}catch(N){G(e,e.return,N)}}break;case 1:Me(t,e),Ve(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(Me(t,e),Ve(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var l=e.stateNode;try{Kn(l,"")}catch(N){G(e,e.return,N)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Os(l,i),vi(s,o);var d=vi(s,i);for(o=0;o<u.length;o+=2){var h=u[o],g=u[o+1];h==="style"?Bs(l,g):h==="dangerouslySetInnerHTML"?As(l,g):h==="children"?Kn(l,g):oo(l,h,g,d)}switch(s){case"input":fi(l,i);break;case"textarea":Is(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?on(l,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?on(l,!!i.multiple,i.defaultValue,!0):on(l,!!i.multiple,i.multiple?[]:"",!1))}l[nr]=i}catch(N){G(e,e.return,N)}}break;case 6:if(Me(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(j(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(N){G(e,e.return,N)}}break;case 3:if(Me(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(N){G(e,e.return,N)}break;case 4:Me(t,e),Ve(e);break;case 13:Me(t,e),Ve(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ao=X())),r&4&&es(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(se=(d=se)||h,Me(t,e),se=d):Me(t,e),Ve(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(b=e,h=e.child;h!==null;){for(g=b=h;b!==null;){switch(m=b,w=m.child,m.tag){case 0:case 11:case 14:case 15:Vn(4,m,m.return);break;case 1:rn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(N){G(r,n,N)}}break;case 5:rn(m,m.return);break;case 22:if(m.memoizedState!==null){ns(g);continue}}w!==null?(w.return=m,b=w):ns(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=$s("display",o))}catch(N){G(e,e.return,N)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(N){G(e,e.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Me(t,e),Ve(e),r&4&&es(e);break;case 21:break;default:Me(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pc(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Kn(l,""),r.flags&=-33);var i=qa(e);Ki(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=qa(e);Qi(e,s,o);break;default:throw Error(j(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kf(e,t,n){b=e,gc(e)}function gc(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var l=b,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Pr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||se;s=Pr;var d=se;if(Pr=o,(se=u)&&!d)for(b=l;b!==null;)o=b,u=o.child,o.tag===22&&o.memoizedState!==null?rs(l):u!==null?(u.return=o,b=u):rs(l);for(;i!==null;)b=i,gc(i),i=i.sibling;b=l,Pr=s,se=d}ts(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,b=i):ts(e)}}function ts(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||El(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ua(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ua(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Zn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}se||t.flags&512&&Hi(t)}catch(m){G(t,t.return,m)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function ns(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function rs(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{El(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){G(t,l,u)}}var i=t.return;try{Hi(t)}catch(u){G(t,i,u)}break;case 5:var o=t.return;try{Hi(t)}catch(u){G(t,o,u)}}}catch(u){G(t,t.return,u)}if(t===e){b=null;break}var s=t.sibling;if(s!==null){s.return=t.return,b=s;break}b=t.return}}var Yf=Math.ceil,dl=st.ReactCurrentDispatcher,Io=st.ReactCurrentOwner,Te=st.ReactCurrentBatchConfig,R=0,te=null,Z=null,re=0,xe=0,ln=bt(0),q=0,sr=null,Bt=0,zl=0,Uo=0,Wn=null,me=null,Ao=0,yn=1/0,Je=null,fl=!1,Yi=null,jt=null,Lr=!1,vt=null,pl=0,Hn=0,Gi=null,Vr=-1,Wr=0;function de(){return R&6?X():Vr!==-1?Vr:Vr=X()}function Nt(e){return e.mode&1?R&2&&re!==0?re&-re:Pf.transition!==null?(Wr===0&&(Wr=eu()),Wr):(e=O,e!==0||(e=window.event,e=e===void 0?16:au(e.type)),e):1}function Ue(e,t,n,r){if(50<Hn)throw Hn=0,Gi=null,Error(j(185));cr(e,n,r),(!(R&2)||e!==te)&&(e===te&&(!(R&2)&&(zl|=n),q===4&&ht(e,re)),ye(e,r),n===1&&R===0&&!(t.mode&1)&&(yn=X()+500,jl&&Tt()))}function ye(e,t){var n=e.callbackNode;Td(e,t);var r=Xr(e,e===te?re:0);if(r===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?Tf(ls.bind(null,e)):Eu(ls.bind(null,e)),Ef(function(){!(R&6)&&Tt()}),n=null;else{switch(tu(r)){case 1:n=fo;break;case 4:n=Js;break;case 16:n=Gr;break;case 536870912:n=qs;break;default:n=Gr}n=Nc(n,vc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vc(e,t){if(Vr=-1,Wr=0,R&6)throw Error(j(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=Xr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ml(e,r);else{t=r;var l=R;R|=2;var i=xc();(te!==e||re!==t)&&(Je=null,yn=X()+500,Ot(e,t));do try{Zf();break}catch(s){yc(e,s)}while(!0);Co(),dl.current=i,R=l,Z!==null?t=0:(te=null,re=0,t=q)}if(t!==0){if(t===2&&(l=Si(e),l!==0&&(r=l,t=Xi(e,l))),t===1)throw n=sr,Ot(e,0),ht(e,r),ye(e,X()),n;if(t===6)ht(e,r);else{if(l=e.current.alternate,!(r&30)&&!Gf(l)&&(t=ml(e,r),t===2&&(i=Si(e),i!==0&&(r=i,t=Xi(e,i))),t===1))throw n=sr,Ot(e,0),ht(e,r),ye(e,X()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Mt(e,me,Je);break;case 3:if(ht(e,r),(r&130023424)===r&&(t=Ao+500-X(),10<t)){if(Xr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ti(Mt.bind(null,e,me,Je),t);break}Mt(e,me,Je);break;case 4:if(ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ie(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yf(r/1960))-r,10<r){e.timeoutHandle=Ti(Mt.bind(null,e,me,Je),r);break}Mt(e,me,Je);break;case 5:Mt(e,me,Je);break;default:throw Error(j(329))}}}return ye(e,X()),e.callbackNode===n?vc.bind(null,e):null}function Xi(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Ot(e,t).flags|=256),e=ml(e,t),e!==2&&(t=me,me=n,t!==null&&Zi(t)),e}function Zi(e){me===null?me=e:me.push.apply(me,e)}function Gf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ae(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ht(e,t){for(t&=~Uo,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function ls(e){if(R&6)throw Error(j(327));dn();var t=Xr(e,0);if(!(t&1))return ye(e,X()),null;var n=ml(e,t);if(e.tag!==0&&n===2){var r=Si(e);r!==0&&(t=r,n=Xi(e,r))}if(n===1)throw n=sr,Ot(e,0),ht(e,t),ye(e,X()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,me,Je),ye(e,X()),null}function $o(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(yn=X()+500,jl&&Tt())}}function Vt(e){vt!==null&&vt.tag===0&&!(R&6)&&dn();var t=R;R|=1;var n=Te.transition,r=O;try{if(Te.transition=null,O=1,e)return e()}finally{O=r,Te.transition=n,R=t,!(R&6)&&Tt()}}function Bo(){xe=ln.current,B(ln)}function Ot(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cf(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(So(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tl();break;case 3:gn(),B(ge),B(ue),Po();break;case 5:To(r);break;case 4:gn();break;case 13:B(H);break;case 19:B(H);break;case 10:Eo(r.type._context);break;case 22:case 23:Bo()}n=n.return}if(te=e,Z=e=Ct(e.current,null),re=xe=t,q=0,sr=null,Uo=zl=Bt=0,me=Wn=null,Ft!==null){for(t=0;t<Ft.length;t++)if(n=Ft[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Ft=null}return e}function yc(e,t){do{var n=Z;try{if(Co(),Ar.current=cl,ul){for(var r=Q.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ul=!1}if($t=0,ee=J=Q=null,Bn=!1,ir=0,Io.current=null,n===null||n.return===null){q=1,sr=t,Z=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=re,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Ha(o);if(w!==null){w.flags&=-257,Qa(w,o,s,i,t),w.mode&1&&Wa(i,d,t),t=w,u=d;var y=t.updateQueue;if(y===null){var N=new Set;N.add(u),t.updateQueue=N}else y.add(u);break e}else{if(!(t&1)){Wa(i,d,t),Vo();break e}u=Error(j(426))}}else if(W&&s.mode&1){var D=Ha(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Qa(D,o,s,i,t),jo(vn(u,s));break e}}i=u=vn(u,s),q!==4&&(q=2),Wn===null?Wn=[i]:Wn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=tc(i,u,t);Ia(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(jt===null||!jt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=nc(i,s,t);Ia(i,x);break e}}i=i.return}while(i!==null)}kc(n)}catch(k){t=k,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function xc(){var e=dl.current;return dl.current=cl,e===null?cl:e}function Vo(){(q===0||q===3||q===2)&&(q=4),te===null||!(Bt&268435455)&&!(zl&268435455)||ht(te,re)}function ml(e,t){var n=R;R|=2;var r=xc();(te!==e||re!==t)&&(Je=null,Ot(e,t));do try{Xf();break}catch(l){yc(e,l)}while(!0);if(Co(),R=n,dl.current=r,Z!==null)throw Error(j(261));return te=null,re=0,q}function Xf(){for(;Z!==null;)wc(Z)}function Zf(){for(;Z!==null&&!kd();)wc(Z)}function wc(e){var t=jc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?kc(e):Z=t,Io.current=null}function kc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wf(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Z=null;return}}else if(n=Vf(n,t,xe),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);q===0&&(q=5)}function Mt(e,t,n){var r=O,l=Te.transition;try{Te.transition=null,O=1,Jf(e,t,n,r)}finally{Te.transition=l,O=r}return null}function Jf(e,t,n,r){do dn();while(vt!==null);if(R&6)throw Error(j(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Pd(e,i),e===te&&(Z=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lr||(Lr=!0,Nc(Gr,function(){return dn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var o=O;O=1;var s=R;R|=4,Io.current=null,Qf(e,n),hc(n,e),yf(_i),Zr=!!zi,_i=zi=null,e.current=n,Kf(n),Sd(),R=s,O=o,Te.transition=i}else e.current=n;if(Lr&&(Lr=!1,vt=e,pl=l),i=e.pendingLanes,i===0&&(jt=null),Cd(n.stateNode),ye(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(fl)throw fl=!1,e=Yi,Yi=null,e;return pl&1&&e.tag!==0&&dn(),i=e.pendingLanes,i&1?e===Gi?Hn++:(Hn=0,Gi=e):Hn=0,Tt(),null}function dn(){if(vt!==null){var e=tu(pl),t=Te.transition,n=O;try{if(Te.transition=null,O=16>e?16:e,vt===null)var r=!1;else{if(e=vt,vt=null,pl=0,R&6)throw Error(j(331));var l=R;for(R|=4,b=e.current;b!==null;){var i=b,o=i.child;if(b.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(b=d;b!==null;){var h=b;switch(h.tag){case 0:case 11:case 15:Vn(8,h,i)}var g=h.child;if(g!==null)g.return=h,b=g;else for(;b!==null;){h=b;var m=h.sibling,w=h.return;if(fc(h),h===d){b=null;break}if(m!==null){m.return=w,b=m;break}b=w}}}var y=i.alternate;if(y!==null){var N=y.child;if(N!==null){y.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}b=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,b=o;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,b=f;break e}b=i.return}}var c=e.current;for(b=c;b!==null;){o=b;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,b=p;else e:for(o=c;b!==null;){if(s=b,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:El(9,s)}}catch(k){G(s,s.return,k)}if(s===o){b=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,b=x;break e}b=s.return}}if(R=l,Tt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(yl,e)}catch{}r=!0}return r}finally{O=n,Te.transition=t}}return!1}function is(e,t,n){t=vn(n,t),t=tc(e,t,1),e=St(e,t,1),t=de(),e!==null&&(cr(e,1,t),ye(e,t))}function G(e,t,n){if(e.tag===3)is(e,e,n);else for(;t!==null;){if(t.tag===3){is(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=vn(n,e),e=nc(t,e,1),t=St(t,e,1),e=de(),t!==null&&(cr(t,1,e),ye(t,e));break}}t=t.return}}function qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(q===4||q===3&&(re&130023424)===re&&500>X()-Ao?Ot(e,0):Uo|=n),ye(e,t)}function Sc(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=de();e=it(e,t),e!==null&&(cr(e,t,n),ye(e,n))}function ep(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sc(e,n)}function tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Sc(e,n)}var jc;jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Bf(e,t,n);he=!!(e.flags&131072)}else he=!1,W&&t.flags&1048576&&zu(t,ll,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(e,t),e=t.pendingProps;var l=pn(t,ue.current);cn(t,n),l=Mo(null,t,r,e,l,n);var i=Do();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(i=!0,nl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,_o(t),l.updater=Cl,t.stateNode=l,l._reactInternals=t,Oi(t,r,e,n),t=Ai(null,t,r,!0,i,n)):(t.tag=0,W&&i&&ko(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=rp(r),e=De(r,e),l){case 0:t=Ui(null,t,r,e,n);break e;case 1:t=Ga(null,t,r,e,n);break e;case 11:t=Ka(null,t,r,e,n);break e;case 14:t=Ya(null,t,r,De(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),Ui(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),Ga(e,t,r,l,n);case 3:e:{if(oc(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Mu(e,t),al(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=vn(Error(j(423)),t),t=Xa(e,t,r,n,l);break e}else if(r!==l){l=vn(Error(j(424)),t),t=Xa(e,t,r,n,l);break e}else for(we=kt(t.stateNode.containerInfo.firstChild),ke=t,W=!0,Re=null,n=Pu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===l){t=ot(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Du(t),e===null&&Di(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,bi(r,l)?o=null:i!==null&&bi(r,i)&&(t.flags|=32),ic(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&Di(t),null;case 13:return ac(e,t,n);case 4:return bo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),Ka(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,U(il,r._currentValue),r._currentValue=o,i!==null)if(Ae(i.value,o)){if(i.children===l.children&&!ge.current){t=ot(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=nt(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Fi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Fi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,cn(t,n),l=Pe(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=De(r,t.pendingProps),l=De(r.type,l),Ya(e,t,r,l,n);case 15:return rc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),Br(e,t),t.tag=1,ve(r)?(e=!0,nl(t)):e=!1,cn(t,n),ec(t,r,l),Oi(t,r,l,n),Ai(null,t,r,!0,e,n);case 19:return sc(e,t,n);case 22:return lc(e,t,n)}throw Error(j(156,t.tag))};function Nc(e,t){return Zs(e,t)}function np(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new np(e,t,n,r)}function Wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rp(e){if(typeof e=="function")return Wo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===so)return 11;if(e===uo)return 14}return 2}function Ct(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Wo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yt:return It(n.children,l,i,t);case ao:o=8,l|=8;break;case ai:return e=_e(12,n,t,l|2),e.elementType=ai,e.lanes=i,e;case si:return e=_e(13,n,t,l),e.elementType=si,e.lanes=i,e;case ui:return e=_e(19,n,t,l),e.elementType=ui,e.lanes=i,e;case Ds:return _l(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ls:o=10;break e;case Ms:o=9;break e;case so:o=11;break e;case uo:o=14;break e;case ft:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=_e(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function It(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=_e(22,e,r,t),e.elementType=Ds,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function ii(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ho(e,t,n,r,l,i,o,s,u){return e=new lp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=_e(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_o(i),e}function ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cc(e){if(!e)return zt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ve(n))return Cu(e,n,t)}return t}function Ec(e,t,n,r,l,i,o,s,u){return e=Ho(n,r,!0,e,l,i,o,s,u),e.context=Cc(null),n=e.current,r=de(),l=Nt(n),i=nt(r,l),i.callback=t??null,St(n,i,l),e.current.lanes=l,cr(e,l,r),ye(e,r),e}function bl(e,t,n,r){var l=t.current,i=de(),o=Nt(l);return n=Cc(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(l,t,o),e!==null&&(Ue(e,l,o,i),Ur(e,l,o)),o}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function os(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qo(e,t){os(e,t),(e=e.alternate)&&os(e,t)}function op(){return null}var zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ko(e){this._internalRoot=e}Tl.prototype.render=Ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));bl(e,t,null,null)};Tl.prototype.unmount=Ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){bl(null,e,null,null)}),t[lt]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=lu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mt.length&&t!==0&&t<mt[n].priority;n++);mt.splice(n,0,e),n===0&&ou(e)}};function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function as(){}function ap(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=hl(o);i.call(d)}}var o=Ec(t,r,e,0,null,!1,!1,"",as);return e._reactRootContainer=o,e[lt]=o.current,er(e.nodeType===8?e.parentNode:e),Vt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=hl(u);s.call(d)}}var u=Ho(e,0,!1,null,null,!1,!1,"",as);return e._reactRootContainer=u,e[lt]=u.current,er(e.nodeType===8?e.parentNode:e),Vt(function(){bl(t,u,n,r)}),u}function Ll(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=hl(o);s.call(u)}}bl(t,o,e,l)}else o=ap(n,t,e,l,r);return hl(o)}nu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(po(t,n|1),ye(t,X()),!(R&6)&&(yn=X()+500,Tt()))}break;case 13:Vt(function(){var r=it(e,1);if(r!==null){var l=de();Ue(r,e,1,l)}}),Qo(e,1)}};mo=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var n=de();Ue(t,e,134217728,n)}Qo(e,134217728)}};ru=function(e){if(e.tag===13){var t=Nt(e),n=it(e,t);if(n!==null){var r=de();Ue(n,e,t,r)}Qo(e,t)}};lu=function(){return O};iu=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};xi=function(e,t,n){switch(t){case"input":if(fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Sl(r);if(!l)throw Error(j(90));Rs(r),fi(r,l)}}}break;case"textarea":Is(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};Hs=$o;Qs=Vt;var sp={usingClientEntryPoint:!1,Events:[fr,Jt,Sl,Vs,Ws,$o]},Ln={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},up={bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gs(e),e===null?null:e.stateNode},findFiberByHostInstance:Ln.findFiberByHostInstance||op,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{yl=Mr.inject(up),Qe=Mr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yo(t))throw Error(j(200));return ip(e,t,null,n)};je.createRoot=function(e,t){if(!Yo(e))throw Error(j(299));var n=!1,r="",l=zc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ho(e,1,!1,null,null,n,!1,r,l),e[lt]=t.current,er(e.nodeType===8?e.parentNode:e),new Ko(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Gs(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Vt(e)};je.hydrate=function(e,t,n){if(!Pl(t))throw Error(j(200));return Ll(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Yo(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=zc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ec(t,null,e,1,n??null,l,!1,i,o),e[lt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Tl(t)};je.render=function(e,t,n){if(!Pl(t))throw Error(j(200));return Ll(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(j(40));return e._reactRootContainer?(Vt(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};je.unstable_batchedUpdates=$o;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Ll(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function _c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c)}catch(e){console.error(e)}}_c(),_s.exports=je;var cp=_s.exports,bc,ss=cp;bc=ss.createRoot,ss.hydrateRoot;function Ye(e){return e?e.startsWith("http://")||e.startsWith("https://")?e:`${mr}${e}`:null}const Tc={de:"de-DE",fr:"fr-FR"};let Ji=[];function us(){window.speechSynthesis&&(Ji=window.speechSynthesis.getVoices()||[])}var hs,gs;typeof window<"u"&&window.speechSynthesis&&(us(),(gs=(hs=window.speechSynthesis).addEventListener)==null||gs.call(hs,"voiceschanged",us));function dp(e){var i;const t=Ji.length?Ji:((i=window.speechSynthesis)==null?void 0:i.getVoices())||[],n=e.toLowerCase(),r=n.slice(0,2),l=o=>o.lang.replace("_","-").toLowerCase();return t.find(o=>l(o)===n)||t.find(o=>l(o).startsWith(r))||null}const gl={de:["der","die","das"],fr:["le","la","l'"]},Ge={de:{name:"Alemán",code:"DE",wordPh:"z.B. der Schlüssel",blankWordPh:"z.B. Hund (solo la palabra)",exLabel:"Ejemplo en alemán",exPh:"Der Hund läuft schnell.",blankPh:"Der ___ läuft schnell.",bulkPh:`[
  { "german": "der Hund", "translation": "el perro", "note": "masc." },
  { "german": "die Katze", "translation": "la gata" }
]`},fr:{name:"Francés",code:"FR",wordPh:"p.ej. le chien",blankWordPh:"p.ej. chien (solo la palabra)",exLabel:"Ejemplo en francés",exPh:"Le chien court vite.",blankPh:"Le ___ court vite.",bulkPh:`[
  { "german": "le chien", "translation": "el perro", "note": "masc." },
  { "german": "la maison", "translation": "la casa" }
]`}};let Pc="de";function fp(e){Tc[e]&&(Pc=e)}const at={type1:"Imagen",type2:"Ejemplo",type4:"Traducir",type5:"Completar",type6:"Artículo"};function Lc(e){const t=Ge[e]||Ge.de,n=(gl[e]||gl.de).join(" / "),r={type1:"Muestra una imagen; la tocas para voltear y ver la palabra. Requiere una URL de imagen.",type2:"Muestra la palabra con una frase de ejemplo; volteas para ver la traducción.",type4:`Te muestra el español y escribes la palabra en ${t.name.toLowerCase()}; corrige tu respuesta.`,type5:"Una frase con un hueco (___); escribes la palabra que falta.",type6:`Eliges el artículo/género correcto (${n}).`};return Object.keys(at).map(l=>({id:l,name:at[l],tip:r[l]}))}function Mc(e,t="de"){const n=gl[t]||gl.de,r=(e||"").trim(),l=r.toLowerCase(),i=n.find(s=>s.endsWith("'")?l.startsWith(s):l.startsWith(s+" "))||"",o=i?r.slice(i.length).trimStart():r;return{articles:n,correct:i,bare:o}}function cs(e){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e),n=Tc[Pc]||"de-DE";t.lang=n,t.rate=.9;const r=dp(n);r&&(t.voice=r),window.speechSynthesis.speak(t)}function be(e){var t;if(e){if(e.audioUrl){(t=window.speechSynthesis)==null||t.cancel(),new Audio(Ye(e.audioUrl)).play().catch(()=>cs(e.german));return}cs(e.german)}}function ds(e,t){let{repetitions:n,easiness:r,interval:l}=e;t>=3?(n===0?l=1:n===1?l=6:l=Math.round(l*r),n+=1):(n=0,l=1),r=Math.max(1.3,r+.1-(5-t)*(.08+(5-t)*.02));const i=Date.now()+l*864e5;return{repetitions:n,easiness:r,interval:l,nextReview:i,lastGrade:t}}function pp(e){const t=Math.ceil((e-Date.now())/864e5);return t<=0?"Hoy":t===1?"Mañana":`${t} días`}const mr="http://localhost:3001",Go="dk_token",Dc=()=>localStorage.getItem(Go),mp=e=>localStorage.setItem(Go,e),fs=()=>localStorage.removeItem(Go);function Ml(){const e=Dc();return e?{Authorization:`Bearer ${e}`}:{}}async function hr(e,t={}){const n=await fetch(`${mr}${e}`,{headers:{"Content-Type":"application/json",...Ml(),...t.headers||{}},...t});if(!n.ok){const r=await n.json().catch(()=>({}));throw Object.assign(new Error(r.error||n.statusText),{status:n.status})}return n.json()}async function ps(){return hr("/cards")}async function ms(e){const t=e.length===0?"?allowEmpty=true":"";return hr(`/cards${t}`,{method:"PUT",body:JSON.stringify(e)})}async function hp(e){return hr("/explain",{method:"POST",body:JSON.stringify({german:e.german,translation:e.translation,note:e.note||""})}).then(t=>t.text)}async function gp(e){const t=new FormData;t.append("file",e);const n=await fetch(`${mr}/upload`,{method:"POST",body:t,headers:Ml()});if(!n.ok)throw new Error("Error al subir archivo.");return n.json()}async function vp(e){const t=e.split("/media/")[1];t&&await fetch(`${mr}/media/${t}`,{method:"DELETE",headers:Ml()})}const qi="@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400;500&display=swap');",Fc=`

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
`,Xo=[{n:0,label:"Nada"},{n:1,label:"Mal"},{n:2,label:"Difícil"},{n:3,label:"Ok"},{n:4,label:"Bien"},{n:5,label:"Fácil"}];function yp({card:e}){return a.jsxs("div",{className:"t1-front",children:[a.jsx("div",{className:"card-type-badge",children:at.type1}),e.imageUrl?a.jsx("img",{className:"t1-front-img",src:Ye(e.imageUrl),alt:""}):a.jsx("div",{style:{fontSize:"0.75rem",color:"#444",border:"1px dashed #333",padding:"1.5rem 2rem",borderRadius:"4px"},children:"sin imagen"}),a.jsx("div",{className:"t1-front-hint",children:"toca para voltear"})]})}function xp({card:e,onSpeak:t}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:at.type1}),a.jsx("div",{className:"card-hint",children:"califica abajo"}),a.jsx("div",{className:"t1-back-word",children:e.german}),e.note&&a.jsx("div",{className:"t1-back-note",children:e.note}),a.jsx("button",{className:"audio-replay-btn",onClick:n=>{n.stopPropagation(),t()},title:"Pronunciar",children:"▶"})]})}function wp({card:e}){const t=(n,r)=>{if(!n||!r)return n;const l=r.replace(/^(der|die|das|ein|eine)\s+/i,"").toLowerCase(),i=new RegExp(`(${l})`,"gi");return n.split(i).map((s,u)=>i.test(s)?a.jsx("em",{children:s},u):s)};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:at.type2}),a.jsx("div",{className:"card-hint",children:"toca para voltear"}),a.jsxs("div",{className:"t2-front",children:[a.jsx("div",{className:"t2-word",children:e.german}),e.example&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"t2-divider"}),a.jsx("div",{className:"t2-example",children:t(e.example,e.german)})]})]})]})}function kp({card:e}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:at.type2}),a.jsx("div",{className:"card-hint",children:"califica abajo"}),a.jsxs("div",{className:"t2-back",children:[a.jsx("div",{className:"t2-translation",children:e.translation}),e.note&&a.jsx("div",{className:"card-note",children:e.note}),a.jsx("button",{className:"audio-replay-btn",style:{marginTop:"0.5rem"},onClick:t=>{t.stopPropagation(),be(e)},title:"Pronunciar",children:"▶"}),e.exampleTranslation&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"t2-divider",style:{marginTop:"0.5rem"}}),a.jsxs("div",{className:"t2-example-trans",children:['"',e.exampleTranslation,'"']})]})]})]})}function Sp({card:e,language:t}){const n=Ge[t]||Ge.de;return a.jsxs("div",{className:"t4-front",children:[a.jsx("div",{className:"card-type-badge",children:at.type4}),a.jsxs("div",{className:"t4-label",children:["¿Cómo se dice en ",n.name.toLowerCase(),"?"]}),a.jsx("div",{className:"t4-word",children:e.translation}),e.note&&a.jsx("div",{className:"t4-note",children:e.note})]})}function jp({card:e}){const n=(e.example||"").split("___");return a.jsxs("div",{className:"t5-front",children:[a.jsx("div",{className:"card-type-badge",children:at.type5}),e.imageUrl&&a.jsx("img",{className:"t1-front-img",src:Ye(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"45%",maxWidth:"80%",marginBottom:"0.25rem"}}),a.jsx("div",{className:"t5-sentence",children:n.map((r,l)=>a.jsxs(Oe.Fragment,{children:[r,l<n.length-1&&a.jsx("span",{className:"t5-blank",children:"_____"})]},l))}),e.note&&a.jsx("div",{className:"t4-note",style:{fontSize:"0.62rem"},children:e.note})]})}function Np({card:e,language:t}){const{bare:n}=Mc(e.german,t);return a.jsxs("div",{className:"t6-front",children:[a.jsx("div",{className:"card-type-badge",children:at.type6}),e.imageUrl&&a.jsx("img",{className:"t1-front-img",src:Ye(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"50%",maxWidth:"80%",marginBottom:"0.5rem"}}),a.jsx("div",{className:"t6-label",children:"¿Cuál es el artículo?"}),a.jsxs("div",{className:"t6-word",children:["___ ",n]})]})}function Cp({card:e,language:t,onGrade:n,onExplain:r,explaining:l,explanation:i}){const o=Ge[t]||Ge.de,[s,u]=z.useState(""),[d,h]=z.useState(null),g=Oe.useRef(null);Oe.useEffect(()=>{var y;(y=g.current)==null||y.focus()},[]);const m=()=>{if(!s.trim())return;const y=s.trim().toLowerCase()===e.german.trim().toLowerCase();h(y?"correct":"wrong")},w=()=>{h("revealed"),be(e)};return a.jsxs("div",{className:"answer-zone",children:[a.jsxs("div",{className:"answer-input-row",children:[a.jsx("input",{ref:g,className:`answer-input ${d==="wrong"?"wrong":d==="correct"?"correct":""}`,value:s,onChange:y=>u(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!d&&m()},placeholder:`Escribe en ${o.name.toLowerCase()}…`,disabled:!!d}),a.jsx("button",{className:"answer-check-btn",onClick:m,disabled:!!d||!s.trim(),children:"OK"}),a.jsx("button",{className:"reveal-btn",onClick:w,disabled:!!d,children:"Revelar"})]}),d==="correct"&&a.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{children:"✓ ¡Correcto!"}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem"},onClick:()=>be(e),children:"▶"})]}),d==="wrong"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{children:["✗ La respuesta es: ",a.jsx("strong",{children:e.german})]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>be(e),children:"▶"})]}),d==="revealed"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{children:["👁 La respuesta es: ",a.jsx("strong",{children:e.german})]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>be(e),children:"▶"})]}),a.jsx("button",{className:"continuar-btn",onClick:()=>n(0),children:"Continuar"})]}),(d==="correct"||d==="wrong")&&a.jsx("div",{className:"grades",children:Xo.map(({n:y,label:N})=>a.jsxs("button",{className:`grade-btn g${y}`,onClick:()=>n(y),children:[a.jsx("span",{className:"grade-num",children:y}),a.jsx("span",{className:"grade-label",children:N})]},y))}),!!d&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:r,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),i&&a.jsx("div",{className:"explanation",children:i})]})]})}function Ep({card:e,onGrade:t,onExplain:n,explaining:r,explanation:l}){const[i,o]=z.useState(""),[s,u]=z.useState(null),d=Oe.useRef(null);Oe.useEffect(()=>{var w;(w=d.current)==null||w.focus()},[]);const h=(e.example||"").replace("___",e.german),g=()=>{if(!i.trim())return;const w=i.trim().toLowerCase()===e.german.trim().toLowerCase();u(w?"correct":"wrong")},m=()=>{u("revealed"),be(e)};return a.jsxs("div",{className:"answer-zone",children:[a.jsxs("div",{className:"answer-input-row",children:[a.jsx("input",{ref:d,className:`answer-input ${s==="wrong"?"wrong":s==="correct"?"correct":""}`,value:i,onChange:w=>o(w.target.value),onKeyDown:w=>{w.key==="Enter"&&!s&&g()},placeholder:"Completa el espacio…",disabled:!!s}),a.jsx("button",{className:"answer-check-btn",onClick:g,disabled:!!s||!i.trim(),children:"OK"}),a.jsx("button",{className:"reveal-btn",onClick:m,disabled:!!s,children:"Revelar"})]}),s==="correct"&&a.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["✓ ¡Correcto! — ",h]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>be(e),children:"▶"})]}),s==="wrong"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["✗ Era: ",a.jsx("strong",{children:e.german})," — ",h]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>be(e),children:"▶"})]}),s==="revealed"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["👁 ",a.jsx("strong",{children:e.german})," — ",h]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>be(e),children:"▶"})]}),a.jsx("button",{className:"continuar-btn",onClick:()=>t(0),children:"Continuar"})]}),(s==="correct"||s==="wrong")&&a.jsx("div",{className:"grades",children:Xo.map(({n:w,label:y})=>a.jsxs("button",{className:`grade-btn g${w}`,onClick:()=>t(w),children:[a.jsx("span",{className:"grade-num",children:w}),a.jsx("span",{className:"grade-label",children:y})]},w))}),!!s&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:n,disabled:r,children:r?"Consultando IA…":"✦ Explicar con IA"}),l&&a.jsx("div",{className:"explanation",children:l})]})]})}function zp({card:e,language:t,onGrade:n,onExplain:r,explaining:l,explanation:i}){const[o,s]=z.useState(null),{articles:u,correct:d}=Mc(e.german,t),h=m=>{o||s(m)},g=m=>o?m===d?"reveal":m===o&&o!==d?"wrong":"":"";return a.jsxs("div",{className:"answer-zone",children:[a.jsx("div",{className:"article-btns",children:u.map(m=>a.jsx("button",{className:`article-btn ${g(m)}`,onClick:()=>h(m),disabled:!!o,children:m},m))}),o&&a.jsxs("div",{className:`answer-feedback ${o===d?"correct":"wrong"}`,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{style:{minWidth:0},children:o===d?`✓ Correcto — ${e.german}`:`✗ Es ${d} — ${e.german}`}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>be(e),children:"▶"})]}),e.note&&a.jsx("div",{className:"card-note",children:e.note}),a.jsx("button",{className:"continuar-btn",onClick:()=>n(o===d?5:1),children:"Continuar"})]}),o&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:r,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),i&&a.jsx("div",{className:"explanation",children:i})]})]})}function _p({cards:e,onGrade:t,language:n}){const[r,l]=z.useState(!1),[i,o]=z.useState(!1),[s,u]=z.useState(null),[d,h]=z.useState(0),[g,m]=z.useState(!1),w=Oe.useMemo(()=>{const k=e.filter(C=>C.nextReview<=Date.now());for(let C=k.length-1;C>0;C--){const E=Math.floor(Math.random()*(C+1));[k[C],k[E]]=[k[E],k[C]]}return k},[e.map(k=>k.id+k.nextReview).join(",")]),y=w[0],N=Oe.useCallback(()=>{be(y)},[y]);Oe.useEffect(()=>{if(r&&((y==null?void 0:y.cardType)==="type1"||(y==null?void 0:y.cardType)==="type2")){const k=setTimeout(()=>be(y),350);return()=>clearTimeout(k)}},[r]);const D=k=>{var E;if(g)return;(E=window.speechSynthesis)==null||E.cancel(),((y==null?void 0:y.cardType)==="type1"||(y==null?void 0:y.cardType)==="type2")&&r?(m(!0),l(!1),setTimeout(()=>{t(y.id,ds(y,k)),u(null),h(v=>v+1),m(!1)},560)):(t(y.id,ds(y,k)),l(!1),u(null),h(v=>v+1))},f=async()=>{o(!0);try{u(await hp(y))}catch{u("Error al contactar la API.")}o(!1)};if(!e.length)return a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["No hay tarjetas.",a.jsx("br",{}),"Ve a ",a.jsx("strong",{children:"+ Agregar"})," para crear tu primera."]})});if(!w.length)return a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["Sin repasos pendientes.",a.jsx("br",{}),"Vuelve mañana — el sistema hace el resto."]})});const c=y.cardType||"type1",p=["type4","type5","type6"].includes(c),x=["type1","type2"].includes(c);return a.jsxs("div",{children:[a.jsxs("div",{className:"session-info",children:[a.jsxs("span",{children:["Pendientes: ",a.jsx("strong",{children:w.length})]}),a.jsxs("span",{children:["Total: ",a.jsx("strong",{children:e.length})]})]}),x&&a.jsx("div",{className:"card-scene",onClick:()=>!g&&l(k=>!k),children:a.jsxs("div",{className:`card-inner ${r?"flipped":""}`,children:[a.jsxs("div",{className:"card-face front",children:[c==="type1"&&a.jsx(yp,{card:y}),c==="type2"&&a.jsx(wp,{card:y})]}),a.jsxs("div",{className:"card-face back",children:[c==="type1"&&a.jsx(xp,{card:y,onSpeak:N}),c==="type2"&&a.jsx(kp,{card:y})]})]})}),p&&a.jsx("div",{className:"card-scene",children:a.jsxs("div",{className:"card-static",children:[c==="type4"&&a.jsx(Sp,{card:y,language:n}),c==="type5"&&a.jsx(jp,{card:y}),c==="type6"&&a.jsx(Np,{card:y,language:n})]})}),p&&a.jsxs(Oe.Fragment,{children:[c==="type4"&&a.jsx(Cp,{card:y,language:n,onGrade:D,onExplain:f,explaining:i,explanation:s}),c==="type5"&&a.jsx(Ep,{card:y,onGrade:D,onExplain:f,explaining:i,explanation:s}),c==="type6"&&a.jsx(zp,{card:y,language:n,onGrade:D,onExplain:f,explaining:i,explanation:s})]},d),x&&r&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"grades",children:Xo.map(({n:k,label:C})=>a.jsxs("button",{className:`grade-btn g${k}`,onClick:()=>D(k),children:[a.jsx("span",{className:"grade-num",children:k}),a.jsx("span",{className:"grade-label",children:C})]},k))}),a.jsx("button",{className:"explain-btn",onClick:f,disabled:i,children:i?"Consultando IA…":"✦ Explicar con IA"}),s&&a.jsx("div",{className:"explanation",children:s})]})]})}function bp({onAdd:e,onBulkAdd:t,language:n}){var Jo;const r=Ge[n]||Ge.de,l=Lc(n),[i,o]=z.useState("single"),[s,u]=z.useState("type1"),[d,h]=z.useState(""),[g,m]=z.useState(""),[w,y]=z.useState(""),[N,D]=z.useState(""),[f,c]=z.useState(""),[p,x]=z.useState(!1),[k,C]=z.useState(null),[E,v]=z.useState(null),[S,T]=z.useState(null),[I,Y]=z.useState("file"),[Ce,gr]=z.useState("file"),[Sn,ut]=z.useState(""),[Pt,_]=z.useState(""),[L,M]=z.useState(""),[A,V]=z.useState(null),[ct,Xe]=z.useState(!0),jn=()=>{!d.trim()||!g.trim()||(e({cardType:s,german:d.trim(),translation:g.trim(),note:w.trim(),example:N.trim(),exampleTranslation:f.trim(),imageUrl:k,audioUrl:E}),h(""),m(""),y(""),C(null),v(null),D(""),c(""),x(!0),setTimeout(()=>x(!1),2e3))},$e=async(P,ie)=>{const Be=P.target.files[0];if(Be){T(ie);try{const{url:Nn}=await gp(Be);ie==="image"?C(Nn):v(Nn)}catch{alert("Error al subir archivo.")}T(null),P.target.value=""}},Ze=(P,ie)=>{const Be=ie.trim();Be&&(P==="image"?(C(Be),ut("")):(v(Be),_("")))},Zo=P=>{const ie=P==="image"?k:E;!(ie&&(ie.startsWith("http://")||ie.startsWith("https://")))&&ie&&vp(ie),P==="image"?(C(null),ut("")):(v(null),_(""))},Rc=()=>{V(null);let P;try{P=JSON.parse(L.trim())}catch{V({ok:!1,msg:"JSON inválido. Revisa la sintaxis."});return}if(!Array.isArray(P)){V({ok:!1,msg:"Debe ser un array [ ... ]."});return}const ie=P.filter(Be=>{var Nn,qo;return((Nn=Be.german)==null?void 0:Nn.trim())&&((qo=Be.translation)==null?void 0:qo.trim())});if(!ie.length){V({ok:!1,msg:'Ningún objeto tiene "german" y "translation".'});return}t(ie,ct),M(""),V({ok:!0,msg:`✓ ${ie.length} tarjeta${ie.length!==1?"s":""} ${ct?"importada":"agregada"}${ie.length!==1?"s":""}.`})};return a.jsxs("div",{className:"add-form",children:[a.jsxs("div",{className:"add-tabs",children:[a.jsx("button",{className:`add-tab ${i==="single"?"active":""}`,onClick:()=>o("single"),children:"Una tarjeta"}),a.jsx("button",{className:`add-tab ${i==="bulk"?"active":""}`,onClick:()=>o("bulk"),children:"Importar JSON"})]}),i==="single"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:l.map(P=>a.jsxs("button",{className:`type-btn ${s===P.id?"active":""}`,onClick:()=>u(P.id),children:[P.name,a.jsx("span",{className:"type-tip",role:"tooltip",children:P.tip})]},P.id))}),a.jsx("div",{className:"type-tip-static",children:(Jo=l.find(P=>P.id===s))==null?void 0:Jo.tip}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:s==="type5"?"Palabra que va en el hueco":r.name}),a.jsx("input",{value:d,onChange:P=>h(P.target.value),placeholder:s==="type5"?r.blankWordPh:r.wordPh})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción"}),a.jsx("input",{value:g,onChange:P=>m(P.target.value),placeholder:"la llave"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Nota (opcional)"}),a.jsx("textarea",{value:w,onChange:P=>y(P.target.value),placeholder:"artículo, ejemplo, truco…"})]}),(s==="type2"||s==="type5")&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:s==="type5"?"Oración con ___ (espacio en blanco)":r.exLabel}),a.jsx("input",{value:N,onChange:P=>D(P.target.value),placeholder:s==="type5"?r.blankPh:r.exPh})]}),s==="type2"&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción del ejemplo"}),a.jsx("input",{value:f,onChange:P=>c(P.target.value),placeholder:"El perro corre rápido."})]})]}),["type1","type5","type6"].includes(s)&&a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Imagen (opcional) —"," ",a.jsx("button",{className:"mode-toggle",onClick:()=>{Y(P=>P==="file"?"url":"file"),C(null),ut("")},children:I==="file"?"usar URL":"subir archivo"})]}),k?a.jsxs("div",{className:"media-preview",children:[a.jsx("img",{src:Ye(k),alt:""}),a.jsx("span",{className:"media-preview-label",children:k.startsWith("http")?"URL externa":k.split("/").pop()}),a.jsx("button",{className:"media-remove",onClick:()=>Zo("image"),children:"×"})]}):I==="file"?a.jsx("div",{className:"media-upload-row",children:a.jsxs("label",{className:"media-upload-btn",children:[S==="image"?a.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir imagen",a.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:P=>$e(P,"image"),disabled:!!S})]})}):a.jsxs("div",{className:"url-input-row",children:[a.jsx("input",{className:"url-input",value:Sn,onChange:P=>ut(P.target.value),placeholder:"https://upload.wikimedia.org/…",onKeyDown:P=>P.key==="Enter"&&Ze("image",Sn)}),a.jsx("button",{className:"url-set-btn",onClick:()=>Ze("image",Sn),children:"OK"})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Audio (opcional) —"," ",a.jsx("button",{className:"mode-toggle",onClick:()=>{gr(P=>P==="file"?"url":"file"),v(null),_("")},children:Ce==="file"?"usar URL":"subir archivo"})]}),E?a.jsxs("div",{className:"media-preview",children:[a.jsx("span",{className:"media-preview-label",children:E.startsWith("http")?"URL externa":E.split("/").pop()}),a.jsx("audio",{src:Ye(E),controls:!0,style:{height:"24px",accentColor:"#cc0000"}}),a.jsx("button",{className:"media-remove",onClick:()=>Zo("audio"),children:"×"})]}):Ce==="file"?a.jsx("div",{className:"media-upload-row",children:a.jsxs("label",{className:"media-upload-btn",children:[S==="audio"?a.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir audio",a.jsx("input",{type:"file",accept:"audio/*",style:{display:"none"},onChange:P=>$e(P,"audio"),disabled:!!S})]})}):a.jsxs("div",{className:"url-input-row",children:[a.jsx("input",{className:"url-input",value:Pt,onChange:P=>_(P.target.value),placeholder:"https://forvo.com/… o link directo a .mp3",onKeyDown:P=>P.key==="Enter"&&Ze("audio",Pt)}),a.jsx("button",{className:"url-set-btn",onClick:()=>Ze("audio",Pt),children:"OK"})]})]}),a.jsx("button",{className:"submit-btn",onClick:jn,children:"Agregar tarjeta"}),p&&a.jsx("div",{className:"success-msg",children:"✓ Guardada"})]}),i==="bulk"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Array JSON"}),a.jsx("textarea",{className:"bulk-textarea",value:L,onChange:P=>M(P.target.value),placeholder:r.bulkPh})]}),a.jsxs("div",{className:"bulk-schema",children:["Campos: ",a.jsx("code",{children:"german"})," ✦ ",a.jsx("code",{children:"translation"})," ✦ ",a.jsx("code",{children:"note"})," (opcional)"]}),a.jsxs("label",{className:"bulk-replace-row",children:[a.jsx("input",{type:"checkbox",checked:ct,onChange:P=>Xe(P.target.checked)}),a.jsx("span",{children:"Reemplazar todo el mazo (desactiva para agregar encima)"})]}),a.jsx("button",{className:"submit-btn",onClick:Rc,children:"Importar"}),A&&a.jsx("div",{className:A.ok?"success-msg":"error-msg",children:A.msg})]})]})}function Tp({cards:e}){const t=Date.now(),n=864e5,r=[{label:"Nuevas",color:"#B4642F",count:0},{label:"Hoy",color:"#C8825B",count:0},{label:"Mañana",color:"#D29E78",count:0},{label:"3–7 días",color:"#DBB596",count:0},{label:"8–30 días",color:"#E2CBB3",count:0},{label:"+30 días",color:"#E8D9C5",count:0}];for(const o of e){const u=(o.nextReview-t)/n;o.repetitions===0?r[0].count++:u<=0?r[1].count++:u<=1?r[2].count++:u<=7?r[3].count++:u<=30?r[4].count++:r[5].count++}const l=Math.max(...r.map(o=>o.count),1),i=e.length;return i?a.jsxs("div",{className:"stats-view",children:[a.jsxs("div",{className:"stats-header",children:[a.jsx("div",{className:"stats-title",children:"Estado del mazo"}),a.jsxs("div",{className:"stats-total",children:[i," tarjeta",i!==1?"s":""," en total"]})]}),a.jsx("div",{className:"stats-chart",children:r.map((o,s)=>{const u=l>0?o.count/l*100:0,d=i>0?Math.round(o.count/i*100):0;return a.jsxs("div",{className:"stats-row",children:[a.jsx("div",{className:"stats-row-label",children:o.label}),a.jsx("div",{className:"stats-bar-wrap",children:a.jsx("div",{className:"stats-bar",style:{width:`${u}%`,background:o.color}})}),a.jsxs("div",{className:"stats-row-count",children:[a.jsx("span",{className:"stats-n",children:o.count}),a.jsxs("span",{className:"stats-pct",children:[d,"%"]})]})]},s)})}),a.jsxs("div",{className:"stats-footer",children:[a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#cc0000"},children:r[0].count+r[1].count}),a.jsx("div",{className:"kpi-label",children:"para estudiar hoy"})]}),a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#ffcc00"},children:e.filter(o=>o.repetitions>0&&o.interval>=21).length}),a.jsx("div",{className:"kpi-label",children:"maduras (≥21 días)"})]}),a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#aaa"},children:i>0?(e.reduce((o,s)=>o+s.easiness,0)/i).toFixed(2):"—"}),a.jsx("div",{className:"kpi-label",children:"easiness promedio"})]})]})]}):a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["Sin tarjetas aún.",a.jsx("br",{}),"Ve a ",a.jsx("strong",{children:"+ Agregar"})," para empezar."]})})}function Pp({card:e,onSave:t,onClose:n}){const[r,l]=z.useState(e.imageUrl||""),[i,o]=z.useState(null),[s,u]=z.useState(!1),d=()=>{const h=r.trim();t({...e,imageUrl:h||null}),o("ok"),setTimeout(n,800)};return a.jsx("div",{className:"img-preview-overlay",onClick:n,children:a.jsxs("div",{className:"img-preview-dialog",onClick:h=>h.stopPropagation(),children:[a.jsxs("div",{className:"img-preview-header",children:[a.jsx("div",{className:"img-preview-word",children:e.german}),a.jsx("button",{className:"img-preview-close",onClick:n,children:"×"})]}),a.jsx("div",{className:"img-preview-frame",children:e.imageUrl&&!s?a.jsx("img",{src:Ye(e.imageUrl),alt:"",onError:()=>u(!0)}):a.jsxs("div",{className:"img-preview-broken",children:[a.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),a.jsx("div",{children:s?"Imagen rota":"Sin imagen"})]})}),a.jsxs("div",{className:"img-preview-url-row",children:[a.jsx("input",{className:"img-preview-url-input",value:r,onChange:h=>{l(h.target.value),u(!1),o(null)},placeholder:"https://upload.wikimedia.org/…",onKeyDown:h=>h.key==="Enter"&&d()}),a.jsx("button",{className:"img-preview-save-btn",onClick:d,children:"Guardar"})]}),i==="ok"&&a.jsx("div",{className:"img-preview-status ok",children:"✓ Guardado"})]})})}function Lp({card:e,onClose:t}){var i;const n=e.cardType||"type1";(i=e.german.match(/^(der|die|das)/i))!=null&&i[1];const r=e.german.replace(/^(der|die|das)\s+/i,""),l=(e.example||"").replace("___",e.german);return a.jsx("div",{className:"img-preview-overlay",onClick:t,children:a.jsxs("div",{className:"card-preview-dialog",onClick:o=>o.stopPropagation(),children:[a.jsxs("div",{className:"img-preview-header",children:[a.jsxs("div",{className:"img-preview-word",children:[a.jsxs("span",{style:{fontSize:"0.6rem",color:"#555",letterSpacing:"0.1em",textTransform:"uppercase",marginRight:"0.5rem"},children:["Tipo ",n.replace("type","")]}),e.german]}),a.jsx("button",{className:"img-preview-close",onClick:t,children:"×"})]}),a.jsxs("div",{className:"card-preview-side",children:[a.jsx("div",{className:"card-preview-label",children:"Frente"}),n==="type1"&&a.jsx("div",{className:"card-preview-body",children:e.imageUrl?a.jsx("img",{src:Ye(e.imageUrl),alt:"",className:"card-preview-img",onError:o=>o.target.style.display="none"}):a.jsxs("div",{className:"img-preview-broken",children:[a.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),a.jsx("div",{children:"Sin imagen"})]})}),n==="type2"&&a.jsxs("div",{className:"card-preview-body",children:[a.jsx("div",{className:"card-preview-big",children:e.german}),e.example&&a.jsx("div",{className:"card-preview-example",children:e.example})]}),n==="type4"&&a.jsxs("div",{className:"card-preview-body",children:[a.jsx("div",{className:"card-preview-trans",children:e.translation}),e.note&&a.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type5"&&a.jsx("div",{className:"card-preview-body",children:a.jsx("div",{className:"card-preview-example",children:(e.example||"").replace("___","_____")})}),n==="type6"&&a.jsxs("div",{className:"card-preview-body",children:[e.imageUrl&&a.jsx("img",{src:Ye(e.imageUrl),alt:"",className:"card-preview-img",onError:o=>o.target.style.display="none"}),a.jsxs("div",{className:"card-preview-big",style:{color:"#888"},children:["___ ",r]})]})]}),a.jsxs("div",{className:"card-preview-side",children:[a.jsx("div",{className:"card-preview-label",children:"Dorso"}),a.jsxs("div",{className:"card-preview-body",children:[(n==="type1"||n==="type6")&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-big",children:e.german}),e.note&&a.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type2"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-trans",children:e.translation}),e.exampleTranslation&&a.jsxs("div",{className:"card-preview-example",style:{color:"#666"},children:['"',e.exampleTranslation,'"']})]}),(n==="type4"||n==="type5")&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-big",children:e.german}),n==="type5"&&l&&a.jsx("div",{className:"card-preview-example",children:l})]})]})]}),a.jsx("button",{className:"continuar-btn",style:{alignSelf:"center"},onClick:t,children:"Cerrar"})]})})}function Mp({card:e,onSave:t,onClose:n,language:r}){var E;const l=Ge[r]||Ge.de,i=Lc(r),[o,s]=z.useState(e.cardType||"type1"),[u,d]=z.useState(e.german),[h,g]=z.useState(e.translation),[m,w]=z.useState(e.note||""),[y,N]=z.useState(e.example||""),[D,f]=z.useState(e.exampleTranslation||""),[c,p]=z.useState(e.imageUrl||""),[x,k]=z.useState(e.audioUrl||""),C=()=>{!u.trim()||!h.trim()||t({...e,cardType:o,german:u.trim(),translation:h.trim(),note:m.trim(),example:y.trim(),exampleTranslation:D.trim(),imageUrl:c.trim()||null,audioUrl:x.trim()||null})};return a.jsx("div",{className:"confirm-overlay",onClick:n,children:a.jsxs("div",{className:"edit-dialog",onClick:v=>v.stopPropagation(),children:[a.jsx("div",{className:"confirm-title",children:"Editar tarjeta"}),a.jsxs("div",{className:"edit-fields",children:[a.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:i.map(v=>a.jsxs("button",{className:`type-btn ${o===v.id?"active":""}`,onClick:()=>s(v.id),children:[v.name,a.jsx("span",{className:"type-tip",role:"tooltip",children:v.tip})]},v.id))}),a.jsx("div",{className:"type-tip-static",children:(E=i.find(v=>v.id===o))==null?void 0:E.tip}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:o==="type5"?"Palabra que va en el hueco":l.name}),a.jsx("input",{value:u,onChange:v=>d(v.target.value),placeholder:o==="type5"?l.blankWordPh:""})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción"}),a.jsx("input",{value:h,onChange:v=>g(v.target.value)})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Nota"}),a.jsx("input",{value:m,onChange:v=>w(v.target.value),placeholder:"artículo, truco…"})]}),(o==="type2"||o==="type5")&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:o==="type5"?"Oración con ___ (espacio en blanco)":l.exLabel}),a.jsx("input",{value:y,onChange:v=>N(v.target.value),placeholder:o==="type5"?l.blankPh:l.exPh})]}),o==="type2"&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción del ejemplo"}),a.jsx("input",{value:D,onChange:v=>f(v.target.value)})]})]}),["type1","type5","type6"].includes(o)&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"URL imagen"}),a.jsx("input",{value:c,onChange:v=>p(v.target.value),placeholder:"https://…"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"URL audio"}),a.jsx("input",{value:x,onChange:v=>k(v.target.value),placeholder:"https://…"})]})]}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"confirm-cancel",onClick:n,children:"Cancelar"}),a.jsx("button",{className:"confirm-ok",onClick:C,children:"Guardar"})]})]})})}function Dp({card:e,onClick:t}){const[n,r]=z.useState(!1);return Oe.useEffect(()=>{r(!1)},[e.imageUrl]),!e.imageUrl||n?a.jsx("button",{className:"preview-btn",onClick:t,title:"Sin imagen — click para agregar",children:a.jsx("div",{className:"preview-thumb-empty",children:"+"})}):a.jsx("button",{className:"preview-btn",onClick:t,title:"Vista previa de imagen",children:a.jsx("img",{className:"preview-thumb",src:Ye(e.imageUrl),alt:"",onError:()=>r(!0)})})}function Fp({cards:e,onDelete:t,onDeleteAll:n,onEdit:r,language:l}){const[i,o]=z.useState(!1),s=()=>{const S=JSON.stringify(e,null,2),T=new Blob([S],{type:"application/json"}),I=URL.createObjectURL(T),Y=document.createElement("a"),Ce=new Date().toISOString().slice(0,10);Y.href=I,Y.download=`deutschkarten-backup-${Ce}.json`,Y.click(),URL.revokeObjectURL(I)},[u,d]=z.useState(""),[h,g]=z.useState(null),[m,w]=z.useState(null),[y,N]=z.useState(null),[D,f]=z.useState(null),c=Oe.useRef(null),[p,x]=z.useState("all"),k=S=>{c.current&&clearTimeout(c.current),f(S),c.current=setTimeout(()=>f(null),2200)},C=e.filter(S=>S.cardType==="type1"||S.cardType==="type5"||S.cardType==="type6"),E=[...e].sort((S,T)=>S.nextReview-T.nextReview).filter(S=>{if(u.trim()){const T=u.toLowerCase();if(!S.german.toLowerCase().includes(T)&&!S.translation.toLowerCase().includes(T)&&!(S.note||"").toLowerCase().includes(T))return!1}return p==="broken"?(S.cardType==="type1"||S.cardType==="type5"||S.cardType==="type6")&&!S.imageUrl:p==="ok"?(S.cardType==="type1"||S.cardType==="type5"||S.cardType==="type6")&&!!S.imageUrl:!0}),v=C.filter(S=>!S.imageUrl).length;return a.jsxs("div",{children:[a.jsxs("div",{className:"list-header",children:[a.jsx("div",{className:"list-title",children:"Todas las tarjetas"}),a.jsxs("div",{className:"list-header-right",children:[a.jsxs("div",{className:"list-count",children:[e.length," total"]}),e.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"export-btn",onClick:s,title:"Exportar backup JSON",children:"↓ Backup"}),a.jsx("button",{className:"delete-all-btn",onClick:()=>o(!0),children:"Borrar todo"})]})]})]}),a.jsxs("div",{className:"list-search-wrap",children:[a.jsx("input",{className:"list-search",value:u,onChange:S=>d(S.target.value),placeholder:"Buscar por palabra, traducción o nota…"}),u&&a.jsx("button",{className:"list-search-clear",onClick:()=>d(""),children:"×"})]}),a.jsxs("div",{className:"list-filter-row",children:[a.jsx("button",{className:`list-filter-btn ${p==="all"?"active":""}`,onClick:()=>x("all"),children:"Todas"}),a.jsxs("button",{className:`list-filter-btn ${p==="broken"?"active":""}`,onClick:()=>x("broken"),children:["Sin imagen ",v>0&&`(${v})`]}),a.jsx("button",{className:`list-filter-btn ${p==="ok"?"active":""}`,onClick:()=>x("ok"),children:"Con imagen"})]}),i&&a.jsx("div",{className:"confirm-overlay",onClick:()=>o(!1),children:a.jsxs("div",{className:"confirm-dialog",onClick:S=>S.stopPropagation(),children:[a.jsx("div",{className:"confirm-title",children:"¿Borrar todo el mazo?"}),a.jsxs("div",{className:"confirm-body",children:["Se eliminarán ",a.jsxs("strong",{children:[e.length," tarjeta",e.length!==1?"s":""]})," y todo su progreso. Esta acción no se puede deshacer."]}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"confirm-cancel",onClick:()=>o(!1),children:"Cancelar"}),a.jsx("button",{className:"confirm-ok",onClick:()=>{n(),o(!1)},children:"Sí, borrar todo"})]})]})}),h&&a.jsx(Mp,{card:h,language:l,onSave:S=>{r(S),g(null),k(`✓ "${S.german}" actualizado`)},onClose:()=>g(null)}),m&&a.jsx(Pp,{card:m,onSave:S=>{r(S),w(S),k("✓ Imagen actualizada")},onClose:()=>w(null)}),y&&a.jsx(Lp,{card:y,onClose:()=>N(null)}),a.jsxs("div",{className:"card-list",children:[E.length===0&&a.jsx("div",{className:"list-empty",children:u?`Sin resultados para "${u}"`:"Sin tarjetas en este filtro"}),E.map(S=>{const T=S.nextReview<=Date.now(),I=S.cardType==="type1"||S.cardType==="type5"||S.cardType==="type6";return a.jsxs("div",{className:"list-item",children:[I?a.jsx(Dp,{card:S,onClick:()=>w(S)}):a.jsx("div",{style:{width:"28px"}}),a.jsxs("div",{className:"li-main",children:[a.jsx("div",{className:"li-german",children:S.german}),a.jsx("div",{className:"li-trans",children:S.translation}),S.note&&a.jsx("div",{className:"li-note",children:S.note})]}),a.jsx("div",{className:`li-next ${T?"due":""}`,children:pp(S.nextReview)}),a.jsxs("div",{className:"li-actions",children:[a.jsx("button",{className:"preview-card-btn",onClick:()=>N(S),title:"Vista previa",children:a.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:[a.jsx("path",{d:"M6.5 1C3.5 1 1 4 1 5C1 6 3.5 9 6.5 9C9.5 9 12 6 12 5C12 4 9.5 1 6.5 1Z",stroke:"currentColor",strokeWidth:"1.1",fill:"none"}),a.jsx("circle",{cx:"6.5",cy:"5",r:"1.5",stroke:"currentColor",strokeWidth:"1.1",fill:"none"})]})}),a.jsx("button",{className:"edit-btn",onClick:()=>g(S),children:"✎"}),a.jsx("button",{className:"delete-btn",onClick:()=>t(S.id),children:"×"})]})]},S.id)})]})]})}function Rp({onAuth:e}){const[t,n]=z.useState(""),[r,l]=z.useState(""),[i,o]=z.useState(null),[s,u]=z.useState(!1);async function d(h){h.preventDefault(),o(null),u(!0);try{const g=await hr("/auth/login",{method:"POST",body:JSON.stringify({username:t,password:r})});g.token&&mp(g.token),e(g.username,g.language||"de")}catch(g){o(g.message)}finally{u(!1)}}return a.jsxs("div",{className:"auth-screen",children:[a.jsxs("style",{children:[qi,Fc]}),a.jsx("div",{className:"noise"}),a.jsxs("div",{className:"auth-card",children:[a.jsx("div",{className:"auth-logo",children:a.jsxs("span",{className:"logo-text",children:["Sprachen",a.jsx("span",{children:"Karten"})]})}),a.jsx("p",{className:"auth-tagline",children:"Tarjetas de idiomas"}),a.jsxs("form",{className:"auth-form",onSubmit:d,children:[a.jsx("input",{className:"auth-input",type:"text",placeholder:"Usuario",value:t,autoComplete:"username",onChange:h=>n(h.target.value),required:!0}),a.jsx("input",{className:"auth-input",type:"password",placeholder:"Contraseña",value:r,autoComplete:"current-password",onChange:h=>l(h.target.value),required:!0}),i&&a.jsx("p",{className:"auth-error",children:i}),a.jsx("button",{className:"auth-btn",type:"submit",disabled:s,children:s?"…":"Entrar"})]})]})]})}function Op(){const[e,t]=z.useState(null),[n,r]=z.useState("de"),[l,i]=z.useState([]),[o,s]=z.useState(!1),[u,d]=z.useState("study"),[h,g]=z.useState(!1);z.useEffect(()=>{fp(n)},[n]),z.useEffect(()=>{if(!Dc()){t(!1);return}(async()=>{try{const v=await hr("/auth/me"),S=await ps();t(v.username),r(v.language||"de"),i(S),s(!0)}catch{fs(),t(!1)}})()},[]),z.useEffect(()=>{if(!e||!o)return;const v=setTimeout(()=>{ms(l).catch(()=>{})},800);return()=>clearTimeout(v)},[l,e,o]);const m=z.useRef(l);z.useEffect(()=>{m.current=l},[l]);const w=z.useRef(e);z.useEffect(()=>{w.current=e},[e]);const y=z.useRef(o);z.useEffect(()=>{y.current=o},[o]),z.useEffect(()=>{const v=()=>{if(!w.current||!y.current)return;const S=m.current,T=S.length===0?"?allowEmpty=true":"";fetch(`${mr}/cards${T}`,{method:"PUT",headers:{"Content-Type":"application/json",...Ml()},body:JSON.stringify(S),keepalive:!0})};return window.addEventListener("beforeunload",v),()=>window.removeEventListener("beforeunload",v)},[]);async function N(){o&&await ms(l).catch(()=>{}),fs(),s(!1),t(!1),i([])}async function D(v,S){s(!1),t(v),r(S||"de");try{const T=await ps();i(T),s(!0)}catch{i([])}}const f=z.useCallback(v=>{const S={id:Date.now().toString(),cardType:v.cardType||"type1",german:v.german,translation:v.translation,note:v.note||"",example:v.example||"",exampleTranslation:v.exampleTranslation||"",imageUrl:v.imageUrl||null,audioUrl:v.audioUrl||null,repetitions:0,easiness:2.5,interval:0,nextReview:Date.now(),lastGrade:null};i(T=>[...T,S])},[]),c=z.useCallback((v,S)=>{i(T=>T.map(I=>I.id===v?{...I,...S}:I))},[]),p=z.useCallback(v=>{i(S=>S.filter(T=>T.id!==v))},[]),x=z.useCallback(()=>{i([])},[]),k=z.useCallback(v=>{i(S=>S.map(T=>T.id===v.id?v:T))},[]),C=z.useCallback((v,S=!1)=>{const T=Date.now(),I=v.map((Y,Ce)=>({id:(T+Ce).toString(),german:Y.german.trim(),translation:Y.translation.trim(),note:(Y.note||"").trim(),cardType:Y.cardType||"type1",imageUrl:Y.imageUrl||null,audioUrl:Y.audioUrl||null,example:Y.example||"",exampleTranslation:Y.exampleTranslation||"",repetitions:0,easiness:2.5,interval:0,nextReview:T,lastGrade:null}));i(Y=>S?I:[...Y,...I])},[]);if(e===null)return a.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#111111",color:"#888",fontFamily:"'DM Mono', monospace"},children:[a.jsx("style",{children:qi}),"Cargando…"]});if(e===!1)return a.jsx(Rp,{onAuth:D});const E=[{id:"study",label:"Repasar"},{id:"add",label:"+ Agregar"},{id:"list",label:"Lista"},{id:"stats",label:"Estado"}];return a.jsxs(a.Fragment,{children:[a.jsxs("style",{children:[qi,Fc]}),a.jsx("div",{className:"noise"}),a.jsxs("div",{className:"app",children:[a.jsxs("header",{className:"header",children:[a.jsxs("div",{className:"logo",children:[n==="fr"?a.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{width:"9.33",height:"19",x:"0",fill:"#002395"}),a.jsx("rect",{width:"9.34",height:"19",x:"9.33",fill:"#fff"}),a.jsx("rect",{width:"9.33",height:"19",x:"18.67",fill:"#ED2939"})]}):a.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{width:"28",height:"6.33",y:"0",fill:"#000"}),a.jsx("rect",{width:"28",height:"6.34",y:"6.33",fill:"#D00"}),a.jsx("rect",{width:"28",height:"6.33",y:"12.67",fill:"#FFCE00"})]}),a.jsx("div",{className:"logo-text",children:n==="fr"?a.jsxs(a.Fragment,{children:["Français",a.jsx("span",{children:"Cartes"})]}):a.jsxs(a.Fragment,{children:["Deutsch",a.jsx("span",{children:"Karten"})]})})]}),a.jsxs("nav",{className:"nav",children:[E.map(v=>a.jsx("button",{className:`nav-btn ${u===v.id?"active":""}`,onClick:()=>d(v.id),children:v.label},v.id)),a.jsxs("button",{className:"nav-btn",onClick:N,title:`Sesión: ${e}`,style:{marginLeft:"auto",opacity:.6},children:["↩ ",e]})]}),a.jsx("button",{className:"hamburger-btn",onClick:()=>g(v=>!v),"aria-label":"Menú","aria-expanded":h,children:h?"✕":"☰"}),h&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"menu-backdrop",onClick:()=>g(!1)}),a.jsxs("div",{className:"menu-panel",children:[E.map(v=>a.jsx("button",{className:`menu-item ${u===v.id?"active":""}`,onClick:()=>{d(v.id),g(!1)},children:v.label},v.id)),a.jsxs("button",{className:"menu-item menu-logout",onClick:()=>{g(!1),N()},children:["↩ ",e]})]})]})]}),u==="study"&&a.jsx(_p,{cards:l,onGrade:c,onUpdateCards:i,language:n}),u==="add"&&a.jsx(bp,{onAdd:v=>{f(v),d("study")},onBulkAdd:(v,S)=>{C(v,S),d("list")},language:n}),u==="list"&&a.jsx(Fp,{cards:l,onDelete:p,onDeleteAll:x,onEdit:k,language:n}),u==="stats"&&a.jsx(Tp,{cards:l})]})]})}bc(document.getElementById("root")).render(a.jsx(z.StrictMode,{children:a.jsx(Op,{})}));
