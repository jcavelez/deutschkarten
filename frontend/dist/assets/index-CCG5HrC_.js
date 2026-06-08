(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function Oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vs={exports:{}},vl={},ys={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Ic=Symbol.for("react.portal"),Uc=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Qc=Symbol.for("react.memo"),Kc=Symbol.for("react.lazy"),ea=Symbol.iterator;function Yc(e){return e===null||typeof e!="object"?null:(e=ea&&e[ea]||e["@@iterator"],typeof e=="function"?e:null)}var xs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ws=Object.assign,ks={};function wn(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||xs}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ss(){}Ss.prototype=wn.prototype;function ti(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||xs}var ni=ti.prototype=new Ss;ni.constructor=ti;ws(ni,wn.prototype);ni.isPureReactComponent=!0;var ta=Array.isArray,js=Object.prototype.hasOwnProperty,ri={current:null},Ns={key:!0,ref:!0,__self:!0,__source:!0};function Cs(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)js.call(t,r)&&!Ns.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:cr,type:e,key:o,ref:i,props:l,_owner:ri.current}}function Gc(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function li(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function Xc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var na=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xc(""+e.key):t.toString(36)}function Dr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case cr:case Ic:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Dl(i,0):r,ta(l)?(n="",e!=null&&(n=e.replace(na,"$&/")+"/"),Dr(l,t,n,"",function(d){return d})):l!=null&&(li(l)&&(l=Gc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(na,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ta(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Dl(o,s);i+=Dr(o,t,n,u,l)}else if(u=Yc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Dl(o,s++),i+=Dr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function vr(e,t,n){if(e==null)return e;var r=[],l=0;return Dr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Zc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Fr={transition:null},Jc={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:ri};function Es(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!li(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=wn;D.Fragment=Uc;D.Profiler=$c;D.PureComponent=ti;D.StrictMode=Ac;D.Suspense=Hc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jc;D.act=Es;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ws({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=ri.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)js.call(t,u)&&!Ns.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:cr,type:e.type,key:l,ref:o,props:r,_owner:i}};D.createContext=function(e){return e={$$typeof:Vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bc,_context:e},e.Consumer=e};D.createElement=Cs;D.createFactory=function(e){var t=Cs.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Wc,render:e}};D.isValidElement=li;D.lazy=function(e){return{$$typeof:Kc,_payload:{_status:-1,_result:e},_init:Zc}};D.memo=function(e,t){return{$$typeof:Qc,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};D.unstable_act=Es;D.useCallback=function(e,t){return pe.current.useCallback(e,t)};D.useContext=function(e){return pe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};D.useEffect=function(e,t){return pe.current.useEffect(e,t)};D.useId=function(){return pe.current.useId()};D.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return pe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};D.useRef=function(e){return pe.current.useRef(e)};D.useState=function(e){return pe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return pe.current.useTransition()};D.version="18.3.1";ys.exports=D;var E=ys.exports;const ze=Oc(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=E,ed=Symbol.for("react.element"),td=Symbol.for("react.fragment"),nd=Object.prototype.hasOwnProperty,rd=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ld={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)nd.call(t,r)&&!ld.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:ed,type:e,key:o,ref:i,props:l,_owner:rd.current}}vl.Fragment=td;vl.jsx=bs;vl.jsxs=bs;vs.exports=vl;var a=vs.exports,zs={exports:{}},Ne={},_s={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,L){var M=_.length;_.push(L);e:for(;0<M;){var $=M-1>>>1,W=_[$];if(0<l(W,L))_[$]=L,_[M]=W,M=$;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var L=_[0],M=_.pop();if(M!==L){_[0]=M;e:for(var $=0,W=_.length,dt=W>>>1;$<dt;){var Xe=2*($+1)-1,Nn=_[Xe],$e=Xe+1,Ze=_[$e];if(0>l(Nn,M))$e<W&&0>l(Ze,Nn)?(_[$]=Ze,_[$e]=M,$=$e):(_[$]=Nn,_[Xe]=M,$=Xe);else if($e<W&&0>l(Ze,M))_[$]=Ze,_[$e]=M,$=$e;else break e}}return L}function l(_,L){var M=_.sortIndex-L.sortIndex;return M!==0?M:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],d=[],h=1,g=null,m=3,w=!1,k=!1,j=!1,F=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var L=n(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=_)r(d),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(d)}}function x(_){if(j=!1,p(_),!k)if(n(u)!==null)k=!0,ct(N);else{var L=n(d);L!==null&&Lt(x,L.startTime-_)}}function N(_,L){k=!1,j&&(j=!1,f(v),v=-1),w=!0;var M=m;try{for(p(L),g=n(u);g!==null&&(!(g.expirationTime>L)||_&&!O());){var $=g.callback;if(typeof $=="function"){g.callback=null,m=g.priorityLevel;var W=$(g.expirationTime<=L);L=e.unstable_now(),typeof W=="function"?g.callback=W:g===n(u)&&r(u),p(L)}else r(u);g=n(u)}if(g!==null)var dt=!0;else{var Xe=n(d);Xe!==null&&Lt(x,Xe.startTime-L),dt=!1}return dt}finally{g=null,m=M,w=!1}}var C=!1,b=null,v=-1,y=5,z=-1;function O(){return!(e.unstable_now()-z<y)}function A(){if(b!==null){var _=e.unstable_now();z=_;var L=!0;try{L=b(!0,_)}finally{L?ce():(C=!1,b=null)}}else C=!1}var ce;if(typeof c=="function")ce=function(){c(A)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,jn=ut.port2;ut.port1.onmessage=A,ce=function(){jn.postMessage(null)}}else ce=function(){F(A,0)};function ct(_){b=_,C||(C=!0,ce())}function Lt(_,L){v=F(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,ct(N))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var M=m;m=L;try{return _()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var M=m;m=_;try{return L()}finally{m=M}},e.unstable_scheduleCallback=function(_,L,M){var $=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?$+M:$):M=$,_){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=M+W,_={id:h++,callback:L,priorityLevel:_,startTime:M,expirationTime:W,sortIndex:-1},M>$?(_.sortIndex=M,t(d,_),n(u)===null&&_===n(d)&&(j?(f(v),v=-1):j=!0,Lt(x,M-$))):(_.sortIndex=W,t(u,_),k||w||(k=!0,ct(N))),_},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(_){var L=m;return function(){var M=m;m=L;try{return _.apply(this,arguments)}finally{m=M}}}})(Ts);_s.exports=Ts;var od=_s.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id=E,je=od;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ps=new Set,Kn={};function Ht(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Kn[e]=t,e=0;e<t.length;e++)Ps.add(t[e])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=Object.prototype.hasOwnProperty,ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra={},la={};function sd(e){return io.call(la,e)?!0:io.call(ra,e)?!1:ad.test(e)?la[e]=!0:(ra[e]=!0,!1)}function ud(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cd(e,t,n,r){if(t===null||typeof t>"u"||ud(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var oi=/[\-:]([a-z])/g;function ii(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oi,ii);le[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oi,ii);le[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oi,ii);le[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function ai(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cd(t,n,l,r)&&(n=null),r||l===null?sd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),si=Symbol.for("react.strict_mode"),ao=Symbol.for("react.profiler"),Ls=Symbol.for("react.provider"),Ms=Symbol.for("react.context"),ui=Symbol.for("react.forward_ref"),so=Symbol.for("react.suspense"),uo=Symbol.for("react.suspense_list"),ci=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Ds=Symbol.for("react.offscreen"),oa=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Fl;function Dn(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Rl=!1;function Ol(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function dd(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Yt:return"Portal";case ao:return"Profiler";case si:return"StrictMode";case so:return"Suspense";case uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ms:return(e.displayName||"Context")+".Consumer";case Ls:return(e._context.displayName||"Context")+".Provider";case ui:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ci:return t=e.displayName||null,t!==null?t:co(e.type)||"Memo";case pt:t=e._payload,e=e._init;try{return co(e(t))}catch{}}return null}function fd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return co(t);case 8:return t===si?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pd(e){var t=Fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=pd(e))}function Rs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ia(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Os(e,t){t=t.checked,t!=null&&ai(e,"checked",t,!1)}function po(e,t){Os(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&mo(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function aa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mo(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Fn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function Is(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ua(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Us(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function go(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Us(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,As=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},md=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){md.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function $s(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Bs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=$s(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var hd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vo(e,t){if(t){if(hd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function yo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xo=null;function di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wo=null,sn=null,un=null;function ca(e){if(e=pr(e)){if(typeof wo!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Sl(t),wo(e.stateNode,e.type,t))}}function Vs(e){sn?un?un.push(e):un=[e]:sn=e}function Ws(){if(sn){var e=sn,t=un;if(un=sn=null,ca(e),t)for(e=0;e<t.length;e++)ca(t[e])}}function Hs(e,t){return e(t)}function Qs(){}var Il=!1;function Ks(e,t,n){if(Il)return e(t,n);Il=!0;try{return Hs(e,t,n)}finally{Il=!1,(sn!==null||un!==null)&&(Qs(),Ws())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var ko=!1;if(rt)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){ko=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{ko=!1}function gd(e,t,n,r,l,o,i,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Un=!1,Kr=null,Yr=!1,So=null,vd={onError:function(e){Un=!0,Kr=e}};function yd(e,t,n,r,l,o,i,s,u){Un=!1,Kr=null,gd.apply(vd,arguments)}function xd(e,t,n,r,l,o,i,s,u){if(yd.apply(this,arguments),Un){if(Un){var d=Kr;Un=!1,Kr=null}else throw Error(S(198));Yr||(Yr=!0,So=d)}}function Qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ys(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function da(e){if(Qt(e)!==e)throw Error(S(188))}function wd(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return da(l),e;if(o===r)return da(l),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Gs(e){return e=wd(e),e!==null?Xs(e):null}function Xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xs(e);if(t!==null)return t;e=e.sibling}return null}var Zs=je.unstable_scheduleCallback,fa=je.unstable_cancelCallback,kd=je.unstable_shouldYield,Sd=je.unstable_requestPaint,X=je.unstable_now,jd=je.unstable_getCurrentPriorityLevel,fi=je.unstable_ImmediatePriority,Js=je.unstable_UserBlockingPriority,Gr=je.unstable_NormalPriority,Nd=je.unstable_LowPriority,qs=je.unstable_IdlePriority,yl=null,Qe=null;function Cd(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(yl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:zd,Ed=Math.log,bd=Math.LN2;function zd(e){return e>>>=0,e===0?32:31-(Ed(e)/bd|0)|0}var kr=64,Sr=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Rn(s):(o&=i,o!==0&&(r=Rn(o)))}else i=n&~l,i!==0?r=Rn(i):o!==0&&(r=Rn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function _d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Td(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ie(o),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=_d(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function eu(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function Pd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function pi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function tu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nu,mi,ru,lu,ou,No=!1,jr=[],xt=null,wt=null,kt=null,Xn=new Map,Zn=new Map,ht=[],Ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pa(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function zn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=pr(t),t!==null&&mi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Md(e,t,n,r,l){switch(t){case"focusin":return xt=zn(xt,e,t,n,r,l),!0;case"dragenter":return wt=zn(wt,e,t,n,r,l),!0;case"mouseover":return kt=zn(kt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Xn.set(o,zn(Xn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Zn.set(o,zn(Zn.get(o)||null,e,t,n,r,l)),!0}return!1}function iu(e){var t=Ft(e.target);if(t!==null){var n=Qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ys(n),t!==null){e.blockedOn=t,ou(e.priority,function(){ru(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xo=r,n.target.dispatchEvent(r),xo=null}else return t=pr(n),t!==null&&mi(t),e.blockedOn=n,!1;t.shift()}return!0}function ma(e,t,n){Rr(e)&&n.delete(t)}function Dd(){No=!1,xt!==null&&Rr(xt)&&(xt=null),wt!==null&&Rr(wt)&&(wt=null),kt!==null&&Rr(kt)&&(kt=null),Xn.forEach(ma),Zn.forEach(ma)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,No||(No=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Dd)))}function Jn(e){function t(l){return _n(l,e)}if(0<jr.length){_n(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xt!==null&&_n(xt,e),wt!==null&&_n(wt,e),kt!==null&&_n(kt,e),Xn.forEach(t),Zn.forEach(t),n=0;n<ht.length;n++)r=ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ht.length&&(n=ht[0],n.blockedOn===null);)iu(n),n.blockedOn===null&&ht.shift()}var cn=st.ReactCurrentBatchConfig,Zr=!0;function Fd(e,t,n,r){var l=I,o=cn.transition;cn.transition=null;try{I=1,hi(e,t,n,r)}finally{I=l,cn.transition=o}}function Rd(e,t,n,r){var l=I,o=cn.transition;cn.transition=null;try{I=4,hi(e,t,n,r)}finally{I=l,cn.transition=o}}function hi(e,t,n,r){if(Zr){var l=Co(e,t,n,r);if(l===null)Gl(e,t,r,Jr,n),pa(e,r);else if(Md(l,e,t,n,r))r.stopPropagation();else if(pa(e,r),t&4&&-1<Ld.indexOf(e)){for(;l!==null;){var o=pr(l);if(o!==null&&nu(o),o=Co(e,t,n,r),o===null&&Gl(e,t,r,Jr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Gl(e,t,r,null,n)}}var Jr=null;function Co(e,t,n,r){if(Jr=null,e=di(r),e=Ft(e),e!==null)if(t=Qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ys(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jd()){case fi:return 1;case Js:return 4;case Gr:case Nd:return 16;case qs:return 536870912;default:return 16}default:return 16}}var vt=null,gi=null,Or=null;function su(){if(Or)return Or;var e,t=gi,n=t.length,r,l="value"in vt?vt.value:vt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Or=l.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function ha(){return!1}function Ce(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Nr:ha,this.isPropagationStopped=ha,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=Ce(kn),fr=Y({},kn,{view:0,detail:0}),Od=Ce(fr),Al,$l,Tn,xl=Y({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(Al=e.screenX-Tn.screenX,$l=e.screenY-Tn.screenY):$l=Al=0,Tn=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),ga=Ce(xl),Id=Y({},xl,{dataTransfer:0}),Ud=Ce(Id),Ad=Y({},fr,{relatedTarget:0}),Bl=Ce(Ad),$d=Y({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=Ce($d),Vd=Y({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wd=Ce(Vd),Hd=Y({},kn,{data:0}),va=Ce(Hd),Qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yd[e])?!!t[e]:!1}function yi(){return Gd}var Xd=Y({},fr,{key:function(e){if(e.key){var t=Qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yi,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=Ce(Xd),Jd=Y({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=Ce(Jd),qd=Y({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yi}),ef=Ce(qd),tf=Y({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),nf=Ce(tf),rf=Y({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lf=Ce(rf),of=[9,13,27,32],xi=rt&&"CompositionEvent"in window,An=null;rt&&"documentMode"in document&&(An=document.documentMode);var af=rt&&"TextEvent"in window&&!An,uu=rt&&(!xi||An&&8<An&&11>=An),xa=" ",wa=!1;function cu(e,t){switch(e){case"keyup":return of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function sf(e,t){switch(e){case"compositionend":return du(t);case"keypress":return t.which!==32?null:(wa=!0,xa);case"textInput":return e=t.data,e===xa&&wa?null:e;default:return null}}function uf(e,t){if(Xt)return e==="compositionend"||!xi&&cu(e,t)?(e=su(),Or=gi=vt=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uu&&t.locale!=="ko"?null:t.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cf[e.type]:t==="textarea"}function fu(e,t,n,r){Vs(r),t=qr(t,"onChange"),0<t.length&&(n=new vi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,qn=null;function df(e){ju(e,0)}function wl(e){var t=qt(e);if(Rs(t))return e}function ff(e,t){if(e==="change")return t}var pu=!1;if(rt){var Vl;if(rt){var Wl="oninput"in document;if(!Wl){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Wl=typeof Sa.oninput=="function"}Vl=Wl}else Vl=!1;pu=Vl&&(!document.documentMode||9<document.documentMode)}function ja(){$n&&($n.detachEvent("onpropertychange",mu),qn=$n=null)}function mu(e){if(e.propertyName==="value"&&wl(qn)){var t=[];fu(t,qn,e,di(e)),Ks(df,t)}}function pf(e,t,n){e==="focusin"?(ja(),$n=t,qn=n,$n.attachEvent("onpropertychange",mu)):e==="focusout"&&ja()}function mf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(qn)}function hf(e,t){if(e==="click")return wl(t)}function gf(e,t){if(e==="input"||e==="change")return wl(t)}function vf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:vf;function er(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!io.call(t,l)||!Ae(e[l],t[l]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gu(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function wi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yf(e){var t=gu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hu(n.ownerDocument.documentElement,n)){if(r!==null&&wi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ca(n,o);var i=Ca(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xf=rt&&"documentMode"in document&&11>=document.documentMode,Zt=null,Eo=null,Bn=null,bo=!1;function Ea(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bo||Zt==null||Zt!==Qr(r)||(r=Zt,"selectionStart"in r&&wi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&er(Bn,r)||(Bn=r,r=qr(Eo,"onSelect"),0<r.length&&(t=new vi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},Hl={},vu={};rt&&(vu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function kl(e){if(Hl[e])return Hl[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vu)return Hl[e]=t[n];return e}var yu=kl("animationend"),xu=kl("animationiteration"),wu=kl("animationstart"),ku=kl("transitionend"),Su=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Su.set(e,t),Ht(t,[e])}for(var Ql=0;Ql<ba.length;Ql++){var Kl=ba[Ql],wf=Kl.toLowerCase(),kf=Kl[0].toUpperCase()+Kl.slice(1);_t(wf,"on"+kf)}_t(yu,"onAnimationEnd");_t(xu,"onAnimationIteration");_t(wu,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(ku,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xd(r,t,void 0,e),e.currentTarget=null}function ju(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;za(l,s,d),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;za(l,s,d),o=u}}}if(Yr)throw e=So,Yr=!1,So=null,e}function B(e,t){var n=t[Lo];n===void 0&&(n=t[Lo]=new Set);var r=e+"__bubble";n.has(r)||(Nu(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Nu(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Er]){e[Er]=!0,Ps.forEach(function(n){n!=="selectionchange"&&(Sf.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,Yl("selectionchange",!1,t))}}function Nu(e,t,n,r){switch(au(t)){case 1:var l=Fd;break;case 4:l=Rd;break;default:l=hi}n=l.bind(null,t,n,e),l=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Gl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Ft(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Ks(function(){var d=o,h=di(n),g=[];e:{var m=Su.get(e);if(m!==void 0){var w=vi,k=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":w=Zd;break;case"focusin":k="focus",w=Bl;break;case"focusout":k="blur",w=Bl;break;case"beforeblur":case"afterblur":w=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ef;break;case yu:case xu:case wu:w=Bd;break;case ku:w=nf;break;case"scroll":w=Od;break;case"wheel":w=lf;break;case"copy":case"cut":case"paste":w=Wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ya}var j=(t&4)!==0,F=!j&&e==="scroll",f=j?m!==null?m+"Capture":null:m;j=[];for(var c=d,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Gn(c,f),x!=null&&j.push(nr(c,x,p)))),F)break;c=c.return}0<j.length&&(m=new w(m,k,null,n,h),g.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==xo&&(k=n.relatedTarget||n.fromElement)&&(Ft(k)||k[lt]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=d,k=k?Ft(k):null,k!==null&&(F=Qt(k),k!==F||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){if(j=ga,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(j=ya,x="onPointerLeave",f="onPointerEnter",c="pointer"),F=w==null?m:qt(w),p=k==null?m:qt(k),m=new j(x,c+"leave",w,n,h),m.target=F,m.relatedTarget=p,x=null,Ft(h)===d&&(j=new j(f,c+"enter",k,n,h),j.target=p,j.relatedTarget=F,x=j),F=x,w&&k)t:{for(j=w,f=k,c=0,p=j;p;p=Kt(p))c++;for(p=0,x=f;x;x=Kt(x))p++;for(;0<c-p;)j=Kt(j),c--;for(;0<p-c;)f=Kt(f),p--;for(;c--;){if(j===f||f!==null&&j===f.alternate)break t;j=Kt(j),f=Kt(f)}j=null}else j=null;w!==null&&_a(g,m,w,j,!1),k!==null&&F!==null&&_a(g,F,k,j,!0)}}e:{if(m=d?qt(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var N=ff;else if(ka(m))if(pu)N=gf;else{N=mf;var C=pf}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=hf);if(N&&(N=N(e,d))){fu(g,N,n,h);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&mo(m,"number",m.value)}switch(C=d?qt(d):window,e){case"focusin":(ka(C)||C.contentEditable==="true")&&(Zt=C,Eo=d,Bn=null);break;case"focusout":Bn=Eo=Zt=null;break;case"mousedown":bo=!0;break;case"contextmenu":case"mouseup":case"dragend":bo=!1,Ea(g,n,h);break;case"selectionchange":if(xf)break;case"keydown":case"keyup":Ea(g,n,h)}var b;if(xi)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Xt?cu(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(uu&&n.locale!=="ko"&&(Xt||v!=="onCompositionStart"?v==="onCompositionEnd"&&Xt&&(b=su()):(vt=h,gi="value"in vt?vt.value:vt.textContent,Xt=!0)),C=qr(d,v),0<C.length&&(v=new va(v,e,null,n,h),g.push({event:v,listeners:C}),b?v.data=b:(b=du(n),b!==null&&(v.data=b)))),(b=af?sf(e,n):uf(e,n))&&(d=qr(d,"onBeforeInput"),0<d.length&&(h=new va("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=b))}ju(g,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Gn(e,n),o!=null&&r.unshift(nr(e,o,l)),o=Gn(e,t),o!=null&&r.push(nr(e,o,l))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _a(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Gn(n,o),u!=null&&i.unshift(nr(n,u,s))):l||(u=Gn(n,o),u!=null&&i.push(nr(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var jf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function Ta(e){return(typeof e=="string"?e:""+e).replace(jf,`
`).replace(Nf,"")}function br(e,t,n){if(t=Ta(t),Ta(e)!==t&&n)throw Error(S(425))}function el(){}var zo=null,_o=null;function To(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Po=typeof setTimeout=="function"?setTimeout:void 0,Cf=typeof clearTimeout=="function"?clearTimeout:void 0,Pa=typeof Promise=="function"?Promise:void 0,Ef=typeof queueMicrotask=="function"?queueMicrotask:typeof Pa<"u"?function(e){return Pa.resolve(null).then(e).catch(bf)}:Po;function bf(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Jn(t)}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function La(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),He="__reactFiber$"+Sn,rr="__reactProps$"+Sn,lt="__reactContainer$"+Sn,Lo="__reactEvents$"+Sn,zf="__reactListeners$"+Sn,_f="__reactHandles$"+Sn;function Ft(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=La(e);e!==null;){if(n=e[He])return n;e=La(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[He]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Sl(e){return e[rr]||null}var Mo=[],en=-1;function Tt(e){return{current:e}}function V(e){0>en||(e.current=Mo[en],Mo[en]=null,en--)}function U(e,t){en++,Mo[en]=e.current,e.current=t}var zt={},ue=Tt(zt),ve=Tt(!1),At=zt;function mn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ye(e){return e=e.childContextTypes,e!=null}function tl(){V(ve),V(ue)}function Ma(e,t,n){if(ue.current!==zt)throw Error(S(168));U(ue,t),U(ve,n)}function Cu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,fd(e)||"Unknown",l));return Y({},n,r)}function nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,At=ue.current,U(ue,e),U(ve,ve.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Cu(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,V(ve),V(ue),U(ue,e)):V(ve),U(ve,n)}var qe=null,jl=!1,Zl=!1;function Eu(e){qe===null?qe=[e]:qe.push(e)}function Tf(e){jl=!0,Eu(e)}function Pt(){if(!Zl&&qe!==null){Zl=!0;var e=0,t=I;try{var n=qe;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,jl=!1}catch(l){throw qe!==null&&(qe=qe.slice(e+1)),Zs(fi,Pt),l}finally{I=t,Zl=!1}}return null}var tn=[],nn=0,rl=null,ll=0,Ee=[],be=0,$t=null,et=1,tt="";function Mt(e,t){tn[nn++]=ll,tn[nn++]=rl,rl=e,ll=t}function bu(e,t,n){Ee[be++]=et,Ee[be++]=tt,Ee[be++]=$t,$t=e;var r=et;e=tt;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var o=32-Ie(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,et=1<<32-Ie(t)+l|n<<l|r,tt=o+e}else et=1<<o|n<<l|r,tt=e}function ki(e){e.return!==null&&(Mt(e,1),bu(e,1,0))}function Si(e){for(;e===rl;)rl=tn[--nn],tn[nn]=null,ll=tn[--nn],tn[nn]=null;for(;e===$t;)$t=Ee[--be],Ee[be]=null,tt=Ee[--be],Ee[be]=null,et=Ee[--be],Ee[be]=null}var Se=null,ke=null,H=!1,Oe=null;function zu(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,ke=St(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$t!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,ke=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fo(e){if(H){var t=ke;if(t){var n=t;if(!Fa(e,t)){if(Do(e))throw Error(S(418));t=St(n.nextSibling);var r=Se;t&&Fa(e,t)?zu(r,n):(e.flags=e.flags&-4097|2,H=!1,Se=e)}}else{if(Do(e))throw Error(S(418));e.flags=e.flags&-4097|2,H=!1,Se=e}}}function Ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function zr(e){if(e!==Se)return!1;if(!H)return Ra(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!To(e.type,e.memoizedProps)),t&&(t=ke)){if(Do(e))throw _u(),Error(S(418));for(;t;)zu(e,t),t=St(t.nextSibling)}if(Ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=St(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=Se?St(e.stateNode.nextSibling):null;return!0}function _u(){for(var e=ke;e;)e=St(e.nextSibling)}function hn(){ke=Se=null,H=!1}function ji(e){Oe===null?Oe=[e]:Oe.push(e)}var Pf=st.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oa(e){var t=e._init;return t(e._payload)}function Tu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Et(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,x){return c===null||c.tag!==6?(c=lo(p,f.mode,x),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,x){var N=p.type;return N===Gt?h(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===pt&&Oa(N)===c.type)?(x=l(c,p.props),x.ref=Pn(f,c,p),x.return=f,x):(x=Hr(p.type,p.key,p.props,null,f.mode,x),x.ref=Pn(f,c,p),x.return=f,x)}function d(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=oo(p,f.mode,x),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function h(f,c,p,x,N){return c===null||c.tag!==7?(c=Ut(p,f.mode,x,N),c.return=f,c):(c=l(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=lo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case yr:return p=Hr(c.type,c.key,c.props,null,f.mode,p),p.ref=Pn(f,null,c),p.return=f,p;case Yt:return c=oo(c,f.mode,p),c.return=f,c;case pt:var x=c._init;return g(f,x(c._payload),p)}if(Fn(c)||En(c))return c=Ut(c,f.mode,p,null),c.return=f,c;_r(f,c)}return null}function m(f,c,p,x){var N=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:s(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:return p.key===N?u(f,c,p,x):null;case Yt:return p.key===N?d(f,c,p,x):null;case pt:return N=p._init,m(f,c,N(p._payload),x)}if(Fn(p)||En(p))return N!==null?null:h(f,c,p,x,null);_r(f,p)}return null}function w(f,c,p,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(c,f,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case yr:return f=f.get(x.key===null?p:x.key)||null,u(c,f,x,N);case Yt:return f=f.get(x.key===null?p:x.key)||null,d(c,f,x,N);case pt:var C=x._init;return w(f,c,p,C(x._payload),N)}if(Fn(x)||En(x))return f=f.get(p)||null,h(c,f,x,N,null);_r(c,x)}return null}function k(f,c,p,x){for(var N=null,C=null,b=c,v=c=0,y=null;b!==null&&v<p.length;v++){b.index>v?(y=b,b=null):y=b.sibling;var z=m(f,b,p[v],x);if(z===null){b===null&&(b=y);break}e&&b&&z.alternate===null&&t(f,b),c=o(z,c,v),C===null?N=z:C.sibling=z,C=z,b=y}if(v===p.length)return n(f,b),H&&Mt(f,v),N;if(b===null){for(;v<p.length;v++)b=g(f,p[v],x),b!==null&&(c=o(b,c,v),C===null?N=b:C.sibling=b,C=b);return H&&Mt(f,v),N}for(b=r(f,b);v<p.length;v++)y=w(b,f,v,p[v],x),y!==null&&(e&&y.alternate!==null&&b.delete(y.key===null?v:y.key),c=o(y,c,v),C===null?N=y:C.sibling=y,C=y);return e&&b.forEach(function(O){return t(f,O)}),H&&Mt(f,v),N}function j(f,c,p,x){var N=En(p);if(typeof N!="function")throw Error(S(150));if(p=N.call(p),p==null)throw Error(S(151));for(var C=N=null,b=c,v=c=0,y=null,z=p.next();b!==null&&!z.done;v++,z=p.next()){b.index>v?(y=b,b=null):y=b.sibling;var O=m(f,b,z.value,x);if(O===null){b===null&&(b=y);break}e&&b&&O.alternate===null&&t(f,b),c=o(O,c,v),C===null?N=O:C.sibling=O,C=O,b=y}if(z.done)return n(f,b),H&&Mt(f,v),N;if(b===null){for(;!z.done;v++,z=p.next())z=g(f,z.value,x),z!==null&&(c=o(z,c,v),C===null?N=z:C.sibling=z,C=z);return H&&Mt(f,v),N}for(b=r(f,b);!z.done;v++,z=p.next())z=w(b,f,v,z.value,x),z!==null&&(e&&z.alternate!==null&&b.delete(z.key===null?v:z.key),c=o(z,c,v),C===null?N=z:C.sibling=z,C=z);return e&&b.forEach(function(A){return t(f,A)}),H&&Mt(f,v),N}function F(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Gt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:e:{for(var N=p.key,C=c;C!==null;){if(C.key===N){if(N=p.type,N===Gt){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===pt&&Oa(N)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=Pn(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Gt?(c=Ut(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=Hr(p.type,p.key,p.props,null,f.mode,x),x.ref=Pn(f,c,p),x.return=f,f=x)}return i(f);case Yt:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=oo(p,f.mode,x),c.return=f,f=c}return i(f);case pt:return C=p._init,F(f,c,C(p._payload),x)}if(Fn(p))return k(f,c,p,x);if(En(p))return j(f,c,p,x);_r(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=lo(p,f.mode,x),c.return=f,f=c),i(f)):n(f,c)}return F}var gn=Tu(!0),Pu=Tu(!1),ol=Tt(null),il=null,rn=null,Ni=null;function Ci(){Ni=rn=il=null}function Ei(e){var t=ol.current;V(ol),e._currentValue=t}function Ro(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){il=e,Ni=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Ni!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(il===null)throw Error(S(308));rn=e,il.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Rt=null;function bi(e){Rt===null?Rt=[e]:Rt.push(e)}function Lu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,bi(t)):(n.next=l.next,l.next=n),t.interleaved=n,ot(e,r)}function ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,ot(e,n)}return l=r.interleaved,l===null?(t.next=t,bi(r)):(t.next=l.next,l.next=t),r.interleaved=t,ot(e,n)}function Ur(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pi(e,n)}}function Ia(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function al(e,t,n,r){var l=e.updateQueue;mt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,i===null?o=d:i.next=d,i=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=u))}if(o!==null){var g=l.baseState;i=0,h=d=u=null,s=o;do{var m=s.lane,w=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,j=s;switch(m=t,w=n,j.tag){case 1:if(k=j.payload,typeof k=="function"){g=k.call(w,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,m=typeof k=="function"?k.call(w,g,m):k,m==null)break e;g=Y({},g,m);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=w,u=g):h=h.next=w,i|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(u=g),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Vt|=i,e.lanes=i,e.memoizedState=g}}function Ua(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var mr={},Ke=Tt(mr),lr=Tt(mr),or=Tt(mr);function Ot(e){if(e===mr)throw Error(S(174));return e}function _i(e,t){switch(U(or,t),U(lr,e),U(Ke,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:go(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=go(t,e)}V(Ke),U(Ke,t)}function vn(){V(Ke),V(lr),V(or)}function Du(e){Ot(or.current);var t=Ot(Ke.current),n=go(t,e.type);t!==n&&(U(lr,e),U(Ke,n))}function Ti(e){lr.current===e&&(V(Ke),V(lr))}var Q=Tt(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Pi(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Ar=st.ReactCurrentDispatcher,ql=st.ReactCurrentBatchConfig,Bt=0,K=null,J=null,ee=null,ul=!1,Vn=!1,ir=0,Lf=0;function ie(){throw Error(S(321))}function Li(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function Mi(e,t,n,r,l,o){if(Bt=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ar.current=e===null||e.memoizedState===null?Rf:Of,e=n(r,l),Vn){o=0;do{if(Vn=!1,ir=0,25<=o)throw Error(S(301));o+=1,ee=J=null,t.updateQueue=null,Ar.current=If,e=n(r,l)}while(Vn)}if(Ar.current=cl,t=J!==null&&J.next!==null,Bt=0,ee=J=K=null,ul=!1,t)throw Error(S(300));return e}function Di(){var e=ir!==0;return ir=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?K.memoizedState=ee=e:ee=ee.next=e,ee}function Me(){if(J===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?K.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(S(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?K.memoizedState=ee=e:ee=ee.next=e}return ee}function ar(e,t){return typeof t=="function"?t(e):t}function eo(e){var t=Me(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,d=o;do{var h=d.lane;if((Bt&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,i=r):u=u.next=g,K.lanes|=h,Vt|=h}d=d.next}while(d!==null&&d!==o);u===null?i=r:u.next=s,Ae(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,K.lanes|=o,Vt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function to(e){var t=Me(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ae(o,t.memoizedState)||(ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fu(){}function Ru(e,t){var n=K,r=Me(),l=t(),o=!Ae(r.memoizedState,l);if(o&&(r.memoizedState=l,ge=!0),r=r.queue,Fi(Uu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,sr(9,Iu.bind(null,n,r,l,t),void 0,null),te===null)throw Error(S(349));Bt&30||Ou(n,t,l)}return l}function Ou(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Iu(e,t,n,r){t.value=n,t.getSnapshot=r,Au(t)&&$u(e)}function Uu(e,t,n){return n(function(){Au(t)&&$u(e)})}function Au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function $u(e){var t=ot(e,1);t!==null&&Ue(t,e,1,-1)}function Aa(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=Ff.bind(null,K,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bu(){return Me().memoizedState}function $r(e,t,n,r){var l=We();K.flags|=e,l.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function Nl(e,t,n,r){var l=Me();r=r===void 0?null:r;var o=void 0;if(J!==null){var i=J.memoizedState;if(o=i.destroy,r!==null&&Li(r,i.deps)){l.memoizedState=sr(t,n,o,r);return}}K.flags|=e,l.memoizedState=sr(1|t,n,o,r)}function $a(e,t){return $r(8390656,8,e,t)}function Fi(e,t){return Nl(2048,8,e,t)}function Vu(e,t){return Nl(4,2,e,t)}function Wu(e,t){return Nl(4,4,e,t)}function Hu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qu(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4,4,Hu.bind(null,t,e),n)}function Ri(){}function Ku(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Li(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Li(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gu(e,t,n){return Bt&21?(Ae(n,t)||(n=eu(),K.lanes|=n,Vt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Mf(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{I=n,ql.transition=r}}function Xu(){return Me().memoizedState}function Df(e,t,n){var r=Ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zu(e))Ju(t,n);else if(n=Lu(e,t,n,r),n!==null){var l=fe();Ue(n,e,r,l),qu(n,t,r)}}function Ff(e,t,n){var r=Ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zu(e))Ju(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Ae(s,i)){var u=t.interleaved;u===null?(l.next=l,bi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Lu(e,t,l,r),n!==null&&(l=fe(),Ue(n,e,r,l),qu(n,t,r))}}function Zu(e){var t=e.alternate;return e===K||t!==null&&t===K}function Ju(e,t){Vn=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pi(e,n)}}var cl={readContext:Le,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Rf={readContext:Le,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:$a,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,Hu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Df.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Aa,useDebugValue:Ri,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=Mf.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,l=We();if(H){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),te===null)throw Error(S(349));Bt&30||Ou(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,$a(Uu.bind(null,r,o,e),[e]),r.flags|=2048,sr(9,Iu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if(H){var n=tt,r=et;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Of={readContext:Le,useCallback:Ku,useContext:Le,useEffect:Fi,useImperativeHandle:Qu,useInsertionEffect:Vu,useLayoutEffect:Wu,useMemo:Yu,useReducer:eo,useRef:Bu,useState:function(){return eo(ar)},useDebugValue:Ri,useDeferredValue:function(e){var t=Me();return Gu(t,J.memoizedState,e)},useTransition:function(){var e=eo(ar)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Ru,useId:Xu,unstable_isNewReconciler:!1},If={readContext:Le,useCallback:Ku,useContext:Le,useEffect:Fi,useImperativeHandle:Qu,useInsertionEffect:Vu,useLayoutEffect:Wu,useMemo:Yu,useReducer:to,useRef:Bu,useState:function(){return to(ar)},useDebugValue:Ri,useDeferredValue:function(e){var t=Me();return J===null?t.memoizedState=e:Gu(t,J.memoizedState,e)},useTransition:function(){var e=to(ar)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Ru,useId:Xu,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cl={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),l=Ct(e),o=nt(r,l);o.payload=t,n!=null&&(o.callback=n),t=jt(e,o,l),t!==null&&(Ue(t,e,l,r),Ur(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),l=Ct(e),o=nt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=jt(e,o,l),t!==null&&(Ue(t,e,l,r),Ur(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=Ct(e),l=nt(n,r);l.tag=2,t!=null&&(l.callback=t),t=jt(e,l,r),t!==null&&(Ue(t,e,r,n),Ur(t,e,r))}};function Ba(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(l,o):!0}function ec(e,t,n){var r=!1,l=zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Le(o):(l=ye(t)?At:ue.current,r=t.contextTypes,o=(r=r!=null)?mn(e,l):zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Va(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cl.enqueueReplaceState(t,t.state,null)}function Io(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},zi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Le(o):(o=ye(t)?At:ue.current,l.context=mn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Oo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Cl.enqueueReplaceState(l,l.state,null),al(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function yn(e,t){try{var n="",r=t;do n+=dd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function no(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Uf=typeof WeakMap=="function"?WeakMap:Map;function tc(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fl||(fl=!0,Go=r),Uo(e,t)},n}function nc(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Uo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Uo(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Uf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=qf.bind(null,e,t,n),t.then(e,e))}function Ha(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e)}var Af=st.ReactCurrentOwner,ge=!1;function de(e,t,n,r){t.child=e===null?Pu(t,null,n,r):gn(t,e.child,n,r)}function Ka(e,t,n,r,l){n=n.render;var o=t.ref;return dn(t,l),r=Mi(e,t,n,r,o,l),n=Di(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,it(e,t,l)):(H&&n&&ki(t),t.flags|=1,de(e,t,r,l),t.child)}function Ya(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Wi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,rc(e,t,o,r,l)):(e=Hr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(i,r)&&e.ref===t.ref)return it(e,t,l)}return t.flags|=1,e=Et(o,r),e.ref=t.ref,e.return=t,t.child=e}function rc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(er(o,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,it(e,t,l)}return Ao(e,t,n,r,l)}function lc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(on,we),we|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(on,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(on,we),we|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(on,we),we|=r;return de(e,t,l,n),t.child}function oc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ao(e,t,n,r,l){var o=ye(n)?At:ue.current;return o=mn(t,o),dn(t,l),n=Mi(e,t,n,r,o,l),r=Di(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,it(e,t,l)):(H&&r&&ki(t),t.flags|=1,de(e,t,n,l),t.child)}function Ga(e,t,n,r,l){if(ye(n)){var o=!0;nl(t)}else o=!1;if(dn(t,l),t.stateNode===null)Br(e,t),ec(t,n,r),Io(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Le(d):(d=ye(n)?At:ue.current,d=mn(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Va(t,i,r,d),mt=!1;var m=t.memoizedState;i.state=m,al(t,r,i,l),u=t.memoizedState,s!==r||m!==u||ve.current||mt?(typeof h=="function"&&(Oo(t,n,h,r),u=t.memoizedState),(s=mt||Ba(t,n,s,r,m,u,d))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Mu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Fe(t.type,s),i.props=d,g=t.pendingProps,m=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=ye(n)?At:ue.current,u=mn(t,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==g||m!==u)&&Va(t,i,r,u),mt=!1,m=t.memoizedState,i.state=m,al(t,r,i,l);var k=t.memoizedState;s!==g||m!==k||ve.current||mt?(typeof w=="function"&&(Oo(t,n,w,r),k=t.memoizedState),(d=mt||Ba(t,n,d,r,m,k,u)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $o(e,t,n,r,o,l)}function $o(e,t,n,r,l,o){oc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Da(t,n,!1),it(e,t,o);r=t.stateNode,Af.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=gn(t,e.child,null,o),t.child=gn(t,null,s,o)):de(e,t,s,o),t.memoizedState=r.state,l&&Da(t,n,!0),t.child}function ic(e){var t=e.stateNode;t.pendingContext?Ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(e,t.context,!1),_i(e,t.containerInfo)}function Xa(e,t,n,r,l){return hn(),ji(l),t.flags|=256,de(e,t,n,r),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ac(e,t,n){var r=t.pendingProps,l=Q.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(Q,l&1),e===null)return Fo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=zl(i,r,0,null),e=Ut(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vo(n),t.memoizedState=Bo,e):Oi(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return $f(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Et(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Et(s,o):(o=Ut(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Vo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Bo,r}return o=e.child,e=o.sibling,r=Et(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oi(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Tr(e,t,n,r){return r!==null&&ji(r),gn(t,e.child,null,n),e=Oi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=no(Error(S(422))),Tr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=zl({mode:"visible",children:r.children},l,0,null),o=Ut(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&gn(t,e.child,null,i),t.child.memoizedState=Vo(i),t.memoizedState=Bo,o);if(!(t.mode&1))return Tr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(S(419)),r=no(o,r,void 0),Tr(e,t,i,r)}if(s=(i&e.childLanes)!==0,ge||s){if(r=te,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,ot(e,l),Ue(r,e,l,-1))}return Vi(),r=no(Error(S(421))),Tr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=ep.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ke=St(l.nextSibling),Se=t,H=!0,Oe=null,e!==null&&(Ee[be++]=et,Ee[be++]=tt,Ee[be++]=$t,et=e.id,tt=e.overflow,$t=t),t=Oi(t,r.children),t.flags|=4096,t)}function Za(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ro(e.return,t,n)}function ro(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function sc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Za(e,n,t);else if(e.tag===19)Za(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&sl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ro(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&sl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ro(t,!0,n,null,o);break;case"together":ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bf(e,t,n){switch(t.tag){case 3:ic(t),hn();break;case 5:Du(t);break;case 1:ye(t.type)&&nl(t);break;case 4:_i(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(ol,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?ac(e,t,n):(U(Q,Q.current&1),e=it(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,lc(e,t,n)}return it(e,t,n)}var uc,Wo,cc,dc;uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};cc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ot(Ke.current);var o=null;switch(n){case"input":l=fo(e,l),r=fo(e,r),o=[];break;case"select":l=Y({},l,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":l=ho(e,l),r=ho(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=el)}vo(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Kn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Kn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&B("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};dc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vf(e,t,n){var r=t.pendingProps;switch(Si(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ye(t.type)&&tl(),ae(t),null;case 3:return r=t.stateNode,vn(),V(ve),V(ue),Pi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(Jo(Oe),Oe=null))),Wo(e,t),ae(t),null;case 5:Ti(t);var l=Ot(or.current);if(n=t.type,e!==null&&t.stateNode!=null)cc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ae(t),null}if(e=Ot(Ke.current),zr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[He]=t,r[rr]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<On.length;l++)B(On[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ia(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":sa(r,o),B("invalid",r)}vo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&br(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&br(r.textContent,s,e),l=["children",""+s]):Kn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&B("scroll",r)}switch(n){case"input":xr(r),aa(r,o,!0);break;case"textarea":xr(r),ua(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=el)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Us(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[He]=t,e[rr]=r,uc(e,t,!1,!1),t.stateNode=e;e:{switch(i=yo(n,r),n){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<On.length;l++)B(On[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":ia(e,r),l=fo(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Y({},r,{value:void 0}),B("invalid",e);break;case"textarea":sa(e,r),l=ho(e,r),B("invalid",e);break;default:l=r}vo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Bs(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&As(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yn(e,u):typeof u=="number"&&Yn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Kn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&B("scroll",e):u!=null&&ai(e,o,u,i))}switch(n){case"input":xr(e),aa(e,r,!1);break;case"textarea":xr(e),ua(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?an(e,!!r.multiple,o,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)dc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Ot(or.current),Ot(Ke.current),zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return ae(t),null;case 13:if(V(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&ke!==null&&t.mode&1&&!(t.flags&128))_u(),hn(),t.flags|=98560,o=!1;else if(o=zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[He]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else Oe!==null&&(Jo(Oe),Oe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?q===0&&(q=3):Vi())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return vn(),Wo(e,t),e===null&&tr(t.stateNode.containerInfo),ae(t),null;case 10:return Ei(t.type._context),ae(t),null;case 17:return ye(t.type)&&tl(),ae(t),null;case 19:if(V(Q),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Ln(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=sl(e),i!==null){for(t.flags|=128,Ln(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&X()>xn&&(t.flags|=128,r=!0,Ln(o,!1),t.lanes=4194304)}else{if(!r)if(e=sl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!H)return ae(t),null}else 2*X()-o.renderingStartTime>xn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=X(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Bi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Wf(e,t){switch(Si(t),t.tag){case 1:return ye(t.type)&&tl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(),V(ve),V(ue),Pi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ti(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return vn(),null;case 10:return Ei(t.type._context),null;case 22:case 23:return Bi(),null;case 24:return null;default:return null}}var Pr=!1,se=!1,Hf=typeof WeakSet=="function"?WeakSet:Set,T=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Ho(e,t,n){try{n()}catch(r){G(e,t,r)}}var Ja=!1;function Qf(e,t){if(zo=Zr,e=gu(),wi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,d=0,h=0,g=e,m=null;t:for(;;){for(var w;g!==n||l!==0&&g.nodeType!==3||(s=i+l),g!==o||r!==0&&g.nodeType!==3||(u=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(w=g.firstChild)!==null;)m=g,g=w;for(;;){if(g===e)break t;if(m===n&&++d===l&&(s=i),m===o&&++h===r&&(u=i),(w=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_o={focusedElem:e,selectionRange:n},Zr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,F=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:Fe(t.type,j),F);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=Ja,Ja=!1,k}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ho(t,n,o)}l=l.next}while(l!==r)}}function El(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fc(e){var t=e.alternate;t!==null&&(e.alternate=null,fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[rr],delete t[Lo],delete t[zf],delete t[_f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pc(e){return e.tag===5||e.tag===3||e.tag===4}function qa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=el));else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}var ne=null,Re=!1;function ft(e,t,n){for(n=n.child;n!==null;)mc(e,t,n),n=n.sibling}function mc(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:se||ln(n,t);case 6:var r=ne,l=Re;ne=null,ft(e,t,n),ne=r,Re=l,ne!==null&&(Re?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Re?(e=ne,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),Jn(e)):Xl(ne,n.stateNode));break;case 4:r=ne,l=Re,ne=n.stateNode.containerInfo,Re=!0,ft(e,t,n),ne=r,Re=l;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ho(n,t,i),l=l.next}while(l!==r)}ft(e,t,n);break;case 1:if(!se&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}ft(e,t,n);break;case 21:ft(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,ft(e,t,n),se=r):ft(e,t,n);break;default:ft(e,t,n)}}function es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hf),t.forEach(function(r){var l=tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,Re=!1;break e;case 3:ne=s.stateNode.containerInfo,Re=!0;break e;case 4:ne=s.stateNode.containerInfo,Re=!0;break e}s=s.return}if(ne===null)throw Error(S(160));mc(o,i,l),ne=null,Re=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){G(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hc(t,e),t=t.sibling}function hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Ve(e),r&4){try{Wn(3,e,e.return),El(3,e)}catch(j){G(e,e.return,j)}try{Wn(5,e,e.return)}catch(j){G(e,e.return,j)}}break;case 1:De(t,e),Ve(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(De(t,e),Ve(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var l=e.stateNode;try{Yn(l,"")}catch(j){G(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Os(l,o),yo(s,i);var d=yo(s,o);for(i=0;i<u.length;i+=2){var h=u[i],g=u[i+1];h==="style"?Bs(l,g):h==="dangerouslySetInnerHTML"?As(l,g):h==="children"?Yn(l,g):ai(l,h,g,d)}switch(s){case"input":po(l,o);break;case"textarea":Is(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?an(l,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?an(l,!!o.multiple,o.defaultValue,!0):an(l,!!o.multiple,o.multiple?[]:"",!1))}l[rr]=o}catch(j){G(e,e.return,j)}}break;case 6:if(De(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(j){G(e,e.return,j)}}break;case 3:if(De(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(j){G(e,e.return,j)}break;case 4:De(t,e),Ve(e);break;case 13:De(t,e),Ve(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ai=X())),r&4&&es(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(se=(d=se)||h,De(t,e),se=d):De(t,e),Ve(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(g=T=h;T!==null;){switch(m=T,w=m.child,m.tag){case 0:case 11:case 14:case 15:Wn(4,m,m.return);break;case 1:ln(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(j){G(r,n,j)}}break;case 5:ln(m,m.return);break;case 22:if(m.memoizedState!==null){ns(g);continue}}w!==null?(w.return=m,T=w):ns(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,u=g.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=$s("display",i))}catch(j){G(e,e.return,j)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(j){G(e,e.return,j)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:De(t,e),Ve(e),r&4&&es(e);break;case 21:break;default:De(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Yn(l,""),r.flags&=-33);var o=qa(e);Yo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=qa(e);Ko(e,s,i);break;default:throw Error(S(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kf(e,t,n){T=e,gc(e)}function gc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Pr;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||se;s=Pr;var d=se;if(Pr=i,(se=u)&&!d)for(T=l;T!==null;)i=T,u=i.child,i.tag===22&&i.memoizedState!==null?rs(l):u!==null?(u.return=i,T=u):rs(l);for(;o!==null;)T=o,gc(o),o=o.sibling;T=l,Pr=s,se=d}ts(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):ts(e)}}function ts(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||El(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ua(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ua(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Jn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}se||t.flags&512&&Qo(t)}catch(m){G(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ns(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function rs(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{El(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){G(t,l,u)}}var o=t.return;try{Qo(t)}catch(u){G(t,o,u)}break;case 5:var i=t.return;try{Qo(t)}catch(u){G(t,i,u)}}}catch(u){G(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Yf=Math.ceil,dl=st.ReactCurrentDispatcher,Ii=st.ReactCurrentOwner,Pe=st.ReactCurrentBatchConfig,R=0,te=null,Z=null,re=0,we=0,on=Tt(0),q=0,ur=null,Vt=0,bl=0,Ui=0,Hn=null,he=null,Ai=0,xn=1/0,Je=null,fl=!1,Go=null,Nt=null,Lr=!1,yt=null,pl=0,Qn=0,Xo=null,Vr=-1,Wr=0;function fe(){return R&6?X():Vr!==-1?Vr:Vr=X()}function Ct(e){return e.mode&1?R&2&&re!==0?re&-re:Pf.transition!==null?(Wr===0&&(Wr=eu()),Wr):(e=I,e!==0||(e=window.event,e=e===void 0?16:au(e.type)),e):1}function Ue(e,t,n,r){if(50<Qn)throw Qn=0,Xo=null,Error(S(185));dr(e,n,r),(!(R&2)||e!==te)&&(e===te&&(!(R&2)&&(bl|=n),q===4&&gt(e,re)),xe(e,r),n===1&&R===0&&!(t.mode&1)&&(xn=X()+500,jl&&Pt()))}function xe(e,t){var n=e.callbackNode;Td(e,t);var r=Xr(e,e===te?re:0);if(r===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?Tf(ls.bind(null,e)):Eu(ls.bind(null,e)),Ef(function(){!(R&6)&&Pt()}),n=null;else{switch(tu(r)){case 1:n=fi;break;case 4:n=Js;break;case 16:n=Gr;break;case 536870912:n=qs;break;default:n=Gr}n=Nc(n,vc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vc(e,t){if(Vr=-1,Wr=0,R&6)throw Error(S(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=Xr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ml(e,r);else{t=r;var l=R;R|=2;var o=xc();(te!==e||re!==t)&&(Je=null,xn=X()+500,It(e,t));do try{Zf();break}catch(s){yc(e,s)}while(!0);Ci(),dl.current=o,R=l,Z!==null?t=0:(te=null,re=0,t=q)}if(t!==0){if(t===2&&(l=jo(e),l!==0&&(r=l,t=Zo(e,l))),t===1)throw n=ur,It(e,0),gt(e,r),xe(e,X()),n;if(t===6)gt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Gf(l)&&(t=ml(e,r),t===2&&(o=jo(e),o!==0&&(r=o,t=Zo(e,o))),t===1))throw n=ur,It(e,0),gt(e,r),xe(e,X()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Dt(e,he,Je);break;case 3:if(gt(e,r),(r&130023424)===r&&(t=Ai+500-X(),10<t)){if(Xr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Po(Dt.bind(null,e,he,Je),t);break}Dt(e,he,Je);break;case 4:if(gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Ie(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yf(r/1960))-r,10<r){e.timeoutHandle=Po(Dt.bind(null,e,he,Je),r);break}Dt(e,he,Je);break;case 5:Dt(e,he,Je);break;default:throw Error(S(329))}}}return xe(e,X()),e.callbackNode===n?vc.bind(null,e):null}function Zo(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=ml(e,t),e!==2&&(t=he,he=n,t!==null&&Jo(t)),e}function Jo(e){he===null?he=e:he.push.apply(he,e)}function Gf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ae(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gt(e,t){for(t&=~Ui,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function ls(e){if(R&6)throw Error(S(327));fn();var t=Xr(e,0);if(!(t&1))return xe(e,X()),null;var n=ml(e,t);if(e.tag!==0&&n===2){var r=jo(e);r!==0&&(t=r,n=Zo(e,r))}if(n===1)throw n=ur,It(e,0),gt(e,t),xe(e,X()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,he,Je),xe(e,X()),null}function $i(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(xn=X()+500,jl&&Pt())}}function Wt(e){yt!==null&&yt.tag===0&&!(R&6)&&fn();var t=R;R|=1;var n=Pe.transition,r=I;try{if(Pe.transition=null,I=1,e)return e()}finally{I=r,Pe.transition=n,R=t,!(R&6)&&Pt()}}function Bi(){we=on.current,V(on)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cf(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Si(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tl();break;case 3:vn(),V(ve),V(ue),Pi();break;case 5:Ti(r);break;case 4:vn();break;case 13:V(Q);break;case 19:V(Q);break;case 10:Ei(r.type._context);break;case 22:case 23:Bi()}n=n.return}if(te=e,Z=e=Et(e.current,null),re=we=t,q=0,ur=null,Ui=bl=Vt=0,he=Hn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Rt=null}return e}function yc(e,t){do{var n=Z;try{if(Ci(),Ar.current=cl,ul){for(var r=K.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ul=!1}if(Bt=0,ee=J=K=null,Vn=!1,ir=0,Ii.current=null,n===null||n.return===null){q=1,ur=t,Z=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=re,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Ha(i);if(w!==null){w.flags&=-257,Qa(w,i,s,o,t),w.mode&1&&Wa(o,d,t),t=w,u=d;var k=t.updateQueue;if(k===null){var j=new Set;j.add(u),t.updateQueue=j}else k.add(u);break e}else{if(!(t&1)){Wa(o,d,t),Vi();break e}u=Error(S(426))}}else if(H&&s.mode&1){var F=Ha(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Qa(F,i,s,o,t),ji(yn(u,s));break e}}o=u=yn(u,s),q!==4&&(q=2),Hn===null?Hn=[o]:Hn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=tc(o,u,t);Ia(o,f);break e;case 1:s=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Nt===null||!Nt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=nc(o,s,t);Ia(o,x);break e}}o=o.return}while(o!==null)}kc(n)}catch(N){t=N,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function xc(){var e=dl.current;return dl.current=cl,e===null?cl:e}function Vi(){(q===0||q===3||q===2)&&(q=4),te===null||!(Vt&268435455)&&!(bl&268435455)||gt(te,re)}function ml(e,t){var n=R;R|=2;var r=xc();(te!==e||re!==t)&&(Je=null,It(e,t));do try{Xf();break}catch(l){yc(e,l)}while(!0);if(Ci(),R=n,dl.current=r,Z!==null)throw Error(S(261));return te=null,re=0,q}function Xf(){for(;Z!==null;)wc(Z)}function Zf(){for(;Z!==null&&!kd();)wc(Z)}function wc(e){var t=jc(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?kc(e):Z=t,Ii.current=null}function kc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wf(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Z=null;return}}else if(n=Vf(n,t,we),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);q===0&&(q=5)}function Dt(e,t,n){var r=I,l=Pe.transition;try{Pe.transition=null,I=1,Jf(e,t,n,r)}finally{Pe.transition=l,I=r}return null}function Jf(e,t,n,r){do fn();while(yt!==null);if(R&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pd(e,o),e===te&&(Z=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lr||(Lr=!0,Nc(Gr,function(){return fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var i=I;I=1;var s=R;R|=4,Ii.current=null,Qf(e,n),hc(n,e),yf(_o),Zr=!!zo,_o=zo=null,e.current=n,Kf(n),Sd(),R=s,I=i,Pe.transition=o}else e.current=n;if(Lr&&(Lr=!1,yt=e,pl=l),o=e.pendingLanes,o===0&&(Nt=null),Cd(n.stateNode),xe(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(fl)throw fl=!1,e=Go,Go=null,e;return pl&1&&e.tag!==0&&fn(),o=e.pendingLanes,o&1?e===Xo?Qn++:(Qn=0,Xo=e):Qn=0,Pt(),null}function fn(){if(yt!==null){var e=tu(pl),t=Pe.transition,n=I;try{if(Pe.transition=null,I=16>e?16:e,yt===null)var r=!1;else{if(e=yt,yt=null,pl=0,R&6)throw Error(S(331));var l=R;for(R|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:Wn(8,h,o)}var g=h.child;if(g!==null)g.return=h,T=g;else for(;T!==null;){h=T;var m=h.sibling,w=h.return;if(fc(h),h===d){T=null;break}if(m!==null){m.return=w,T=m;break}T=w}}}var k=o.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var F=j.sibling;j.sibling=null,j=F}while(j!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){i=T;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,T=p;else e:for(i=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:El(9,s)}}catch(N){G(s,s.return,N)}if(s===i){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if(R=l,Pt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(yl,e)}catch{}r=!0}return r}finally{I=n,Pe.transition=t}}return!1}function os(e,t,n){t=yn(n,t),t=tc(e,t,1),e=jt(e,t,1),t=fe(),e!==null&&(dr(e,1,t),xe(e,t))}function G(e,t,n){if(e.tag===3)os(e,e,n);else for(;t!==null;){if(t.tag===3){os(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=yn(n,e),e=nc(t,e,1),t=jt(t,e,1),e=fe(),t!==null&&(dr(t,1,e),xe(t,e));break}}t=t.return}}function qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(q===4||q===3&&(re&130023424)===re&&500>X()-Ai?It(e,0):Ui|=n),xe(e,t)}function Sc(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=fe();e=ot(e,t),e!==null&&(dr(e,t,n),xe(e,n))}function ep(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sc(e,n)}function tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Sc(e,n)}var jc;jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,Bf(e,t,n);ge=!!(e.flags&131072)}else ge=!1,H&&t.flags&1048576&&bu(t,ll,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(e,t),e=t.pendingProps;var l=mn(t,ue.current);dn(t,n),l=Mi(null,t,r,e,l,n);var o=Di();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,nl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,zi(t),l.updater=Cl,t.stateNode=l,l._reactInternals=t,Io(t,r,e,n),t=$o(null,t,r,!0,o,n)):(t.tag=0,H&&o&&ki(t),de(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=rp(r),e=Fe(r,e),l){case 0:t=Ao(null,t,r,e,n);break e;case 1:t=Ga(null,t,r,e,n);break e;case 11:t=Ka(null,t,r,e,n);break e;case 14:t=Ya(null,t,r,Fe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Ao(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Ga(e,t,r,l,n);case 3:e:{if(ic(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Mu(e,t),al(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=yn(Error(S(423)),t),t=Xa(e,t,r,n,l);break e}else if(r!==l){l=yn(Error(S(424)),t),t=Xa(e,t,r,n,l);break e}else for(ke=St(t.stateNode.containerInfo.firstChild),Se=t,H=!0,Oe=null,n=Pu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),r===l){t=it(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return Du(t),e===null&&Fo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,To(r,l)?i=null:o!==null&&To(r,o)&&(t.flags|=32),oc(e,t),de(e,t,i,n),t.child;case 6:return e===null&&Fo(t),null;case 13:return ac(e,t,n);case 4:return _i(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Ka(e,t,r,l,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,U(ol,r._currentValue),r._currentValue=i,o!==null)if(Ae(o.value,i)){if(o.children===l.children&&!ve.current){t=it(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=nt(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ro(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(S(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ro(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}de(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,dn(t,n),l=Le(l),r=r(l),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,l=Fe(r,t.pendingProps),l=Fe(r.type,l),Ya(e,t,r,l,n);case 15:return rc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Br(e,t),t.tag=1,ye(r)?(e=!0,nl(t)):e=!1,dn(t,n),ec(t,r,l),Io(t,r,l,n),$o(null,t,r,!0,e,n);case 19:return sc(e,t,n);case 22:return lc(e,t,n)}throw Error(S(156,t.tag))};function Nc(e,t){return Zs(e,t)}function np(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new np(e,t,n,r)}function Wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rp(e){if(typeof e=="function")return Wi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ui)return 11;if(e===ci)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Wi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Gt:return Ut(n.children,l,o,t);case si:i=8,l|=8;break;case ao:return e=_e(12,n,t,l|2),e.elementType=ao,e.lanes=o,e;case so:return e=_e(13,n,t,l),e.elementType=so,e.lanes=o,e;case uo:return e=_e(19,n,t,l),e.elementType=uo,e.lanes=o,e;case Ds:return zl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ls:i=10;break e;case Ms:i=9;break e;case ui:i=11;break e;case ci:i=14;break e;case pt:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=_e(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Ut(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=_e(22,e,r,t),e.elementType=Ds,e.lanes=n,e.stateNode={isHidden:!1},e}function lo(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function oo(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Hi(e,t,n,r,l,o,i,s,u){return e=new lp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zi(o),e}function op(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cc(e){if(!e)return zt;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ye(n))return Cu(e,n,t)}return t}function Ec(e,t,n,r,l,o,i,s,u){return e=Hi(n,r,!0,e,l,o,i,s,u),e.context=Cc(null),n=e.current,r=fe(),l=Ct(n),o=nt(r,l),o.callback=t??null,jt(n,o,l),e.current.lanes=l,dr(e,l,r),xe(e,r),e}function _l(e,t,n,r){var l=t.current,o=fe(),i=Ct(l);return n=Cc(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jt(l,t,i),e!==null&&(Ue(e,l,i,o),Ur(e,l,i)),i}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function is(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qi(e,t){is(e,t),(e=e.alternate)&&is(e,t)}function ip(){return null}var bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ki(e){this._internalRoot=e}Tl.prototype.render=Ki.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));_l(e,t,null,null)};Tl.prototype.unmount=Ki.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){_l(null,e,null,null)}),t[lt]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=lu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ht.length&&t!==0&&t<ht[n].priority;n++);ht.splice(n,0,e),n===0&&iu(e)}};function Yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function as(){}function ap(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=hl(i);o.call(d)}}var i=Ec(t,r,e,0,null,!1,!1,"",as);return e._reactRootContainer=i,e[lt]=i.current,tr(e.nodeType===8?e.parentNode:e),Wt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=hl(u);s.call(d)}}var u=Hi(e,0,!1,null,null,!1,!1,"",as);return e._reactRootContainer=u,e[lt]=u.current,tr(e.nodeType===8?e.parentNode:e),Wt(function(){_l(t,u,n,r)}),u}function Ll(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=hl(i);s.call(u)}}_l(t,i,e,l)}else i=ap(n,t,e,l,r);return hl(i)}nu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(pi(t,n|1),xe(t,X()),!(R&6)&&(xn=X()+500,Pt()))}break;case 13:Wt(function(){var r=ot(e,1);if(r!==null){var l=fe();Ue(r,e,1,l)}}),Qi(e,1)}};mi=function(e){if(e.tag===13){var t=ot(e,134217728);if(t!==null){var n=fe();Ue(t,e,134217728,n)}Qi(e,134217728)}};ru=function(e){if(e.tag===13){var t=Ct(e),n=ot(e,t);if(n!==null){var r=fe();Ue(n,e,t,r)}Qi(e,t)}};lu=function(){return I};ou=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};wo=function(e,t,n){switch(t){case"input":if(po(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Sl(r);if(!l)throw Error(S(90));Rs(r),po(r,l)}}}break;case"textarea":Is(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};Hs=$i;Qs=Wt;var sp={usingClientEntryPoint:!1,Events:[pr,qt,Sl,Vs,Ws,$i]},Mn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},up={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gs(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{yl=Mr.inject(up),Qe=Mr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yi(t))throw Error(S(200));return op(e,t,null,n)};Ne.createRoot=function(e,t){if(!Yi(e))throw Error(S(299));var n=!1,r="",l=bc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Hi(e,1,!1,null,null,n,!1,r,l),e[lt]=t.current,tr(e.nodeType===8?e.parentNode:e),new Ki(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Gs(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Wt(e)};Ne.hydrate=function(e,t,n){if(!Pl(t))throw Error(S(200));return Ll(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Yi(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=bc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Ec(t,null,e,1,n??null,l,!1,o,i),e[lt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Tl(t)};Ne.render=function(e,t,n){if(!Pl(t))throw Error(S(200));return Ll(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(S(40));return e._reactRootContainer?(Wt(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Ne.unstable_batchedUpdates=$i;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ll(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc)}catch(e){console.error(e)}}zc(),zs.exports=Ne;var cp=zs.exports,_c,ss=cp;_c=ss.createRoot,ss.hydrateRoot;function Ye(e){return e?e.startsWith("http://")||e.startsWith("https://")?e:`${hr}${e}`:null}const Tc={de:"de-DE",fr:"fr-FR"};let qo=[];function us(){window.speechSynthesis&&(qo=window.speechSynthesis.getVoices()||[])}var hs,gs;typeof window<"u"&&window.speechSynthesis&&(us(),(gs=(hs=window.speechSynthesis).addEventListener)==null||gs.call(hs,"voiceschanged",us));function dp(e){var o;const t=qo.length?qo:((o=window.speechSynthesis)==null?void 0:o.getVoices())||[],n=e.toLowerCase(),r=n.slice(0,2),l=i=>i.lang.replace("_","-").toLowerCase();return t.find(i=>l(i)===n)||t.find(i=>l(i).startsWith(r))||null}const gl={de:["der","die","das"],fr:["le","la","l'"]},Ge={de:{name:"Alemán",code:"DE",wordPh:"z.B. der Schlüssel",blankWordPh:"z.B. Hund (solo la palabra)",exLabel:"Ejemplo en alemán",exPh:"Der Hund läuft schnell.",blankPh:"Der ___ läuft schnell.",bulkPh:`[
  { "german": "der Hund", "translation": "el perro", "note": "masc." },
  { "german": "die Katze", "translation": "la gata" }
]`},fr:{name:"Francés",code:"FR",wordPh:"p.ej. le chien",blankWordPh:"p.ej. chien (solo la palabra)",exLabel:"Ejemplo en francés",exPh:"Le chien court vite.",blankPh:"Le ___ court vite.",bulkPh:`[
  { "german": "le chien", "translation": "el perro", "note": "masc." },
  { "german": "la maison", "translation": "la casa" }
]`}};let Pc="de";function fp(e){Tc[e]&&(Pc=e)}const at={type1:"Imagen",type2:"Ejemplo",type4:"Traducir",type5:"Completar",type6:"Artículo"};function Lc(e){const t=Ge[e]||Ge.de,n=(gl[e]||gl.de).join(" / "),r={type1:"Muestra una imagen; la tocas para voltear y ver la palabra. Requiere una URL de imagen.",type2:"Muestra la palabra con una frase de ejemplo; volteas para ver la traducción.",type4:`Te muestra el español y escribes la palabra en ${t.name.toLowerCase()}; corrige tu respuesta.`,type5:"Una frase con un hueco (___); escribes la palabra que falta.",type6:`Eliges el artículo/género correcto (${n}).`};return Object.keys(at).map(l=>({id:l,name:at[l],tip:r[l]}))}function Mc(e,t="de"){const n=gl[t]||gl.de,r=(e||"").trim(),l=r.toLowerCase(),o=n.find(s=>s.endsWith("'")?l.startsWith(s):l.startsWith(s+" "))||"",i=o?r.slice(o.length).trimStart():r;return{articles:n,correct:o,bare:i}}function cs(e){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e),n=Tc[Pc]||"de-DE";t.lang=n,t.rate=.9;const r=dp(n);r&&(t.voice=r),window.speechSynthesis.speak(t)}function Te(e){var t;if(e){if(e.audioUrl){(t=window.speechSynthesis)==null||t.cancel(),new Audio(Ye(e.audioUrl)).play().catch(()=>cs(e.german));return}cs(e.german)}}function pp(e,t){let{repetitions:n,easiness:r,interval:l}=e;t>=3?(n===0?l=1:n===1?l=6:l=Math.round(l*r),n+=1):(n=0,l=1),r=Math.max(1.3,r+.1-(5-t)*(.08+(5-t)*.02));const o=Date.now()+l*864e5;return{repetitions:n,easiness:r,interval:l,nextReview:o,lastGrade:t}}function mp(e){const t=Math.ceil((e-Date.now())/864e5);return t<=0?"Hoy":t===1?"Mañana":`${t} días`}const hr="http://localhost:3001",Gi="dk_token",Dc=()=>localStorage.getItem(Gi),hp=e=>localStorage.setItem(Gi,e),ds=()=>localStorage.removeItem(Gi);function Ml(){const e=Dc();return e?{Authorization:`Bearer ${e}`}:{}}async function gr(e,t={}){const n=await fetch(`${hr}${e}`,{headers:{"Content-Type":"application/json",...Ml(),...t.headers||{}},...t});if(!n.ok){const r=await n.json().catch(()=>({}));throw Object.assign(new Error(r.error||n.statusText),{status:n.status})}return n.json()}async function fs(){return gr("/cards")}async function ps(e){const t=e.length===0?"?allowEmpty=true":"";return gr(`/cards${t}`,{method:"PUT",body:JSON.stringify(e)})}async function gp(e){return gr("/explain",{method:"POST",body:JSON.stringify({german:e.german,translation:e.translation,note:e.note||""})}).then(t=>t.text)}async function vp(e){const t=new FormData;t.append("file",e);const n=await fetch(`${hr}/upload`,{method:"POST",body:t,headers:Ml()});if(!n.ok)throw new Error("Error al subir archivo.");return n.json()}async function yp(e){const t=e.split("/media/")[1];t&&await fetch(`${hr}/media/${t}`,{method:"DELETE",headers:Ml()})}const ei="@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400;500&display=swap');",Fc=`

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
  .celebrate-count { color: var(--text-dim); font-size: 0.8rem; margin-bottom: 1.5rem; }
  .celebrate-count strong { color: var(--accent); }
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
`,Xi=[{n:0,label:"Nada"},{n:1,label:"Mal"},{n:2,label:"Difícil"},{n:3,label:"Ok"},{n:4,label:"Bien"},{n:5,label:"Fácil"}];function xp({card:e}){return a.jsxs("div",{className:"t1-front",children:[a.jsx("div",{className:"card-type-badge",children:at.type1}),e.imageUrl?a.jsx("img",{className:"t1-front-img",src:Ye(e.imageUrl),alt:""}):a.jsx("div",{style:{fontSize:"0.75rem",color:"#444",border:"1px dashed #333",padding:"1.5rem 2rem",borderRadius:"4px"},children:"sin imagen"}),a.jsx("div",{className:"t1-front-hint",children:"toca para voltear"})]})}function wp({card:e,onSpeak:t}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:at.type1}),a.jsx("div",{className:"card-hint",children:"califica abajo"}),a.jsx("div",{className:"t1-back-word",children:e.german}),e.note&&a.jsx("div",{className:"t1-back-note",children:e.note}),a.jsx("button",{className:"audio-replay-btn",onClick:n=>{n.stopPropagation(),t()},title:"Pronunciar",children:"▶"})]})}function kp({card:e}){const t=(n,r)=>{if(!n||!r)return n;const l=r.replace(/^(der|die|das|ein|eine)\s+/i,"").toLowerCase(),o=new RegExp(`(${l})`,"gi");return n.split(o).map((s,u)=>o.test(s)?a.jsx("em",{children:s},u):s)};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:at.type2}),a.jsx("div",{className:"card-hint",children:"toca para voltear"}),a.jsxs("div",{className:"t2-front",children:[a.jsx("div",{className:"t2-word",children:e.german}),e.example&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"t2-divider"}),a.jsx("div",{className:"t2-example",children:t(e.example,e.german)})]})]})]})}function Sp({card:e}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-type-badge",children:at.type2}),a.jsx("div",{className:"card-hint",children:"califica abajo"}),a.jsxs("div",{className:"t2-back",children:[a.jsx("div",{className:"t2-translation",children:e.translation}),e.note&&a.jsx("div",{className:"card-note",children:e.note}),a.jsx("button",{className:"audio-replay-btn",style:{marginTop:"0.5rem"},onClick:t=>{t.stopPropagation(),Te(e)},title:"Pronunciar",children:"▶"}),e.exampleTranslation&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"t2-divider",style:{marginTop:"0.5rem"}}),a.jsxs("div",{className:"t2-example-trans",children:['"',e.exampleTranslation,'"']})]})]})]})}function jp({card:e,language:t}){const n=Ge[t]||Ge.de;return a.jsxs("div",{className:"t4-front",children:[a.jsx("div",{className:"card-type-badge",children:at.type4}),a.jsxs("div",{className:"t4-label",children:["¿Cómo se dice en ",n.name.toLowerCase(),"?"]}),a.jsx("div",{className:"t4-word",children:e.translation}),e.note&&a.jsx("div",{className:"t4-note",children:e.note})]})}function Np({card:e}){const n=(e.example||"").split("___");return a.jsxs("div",{className:"t5-front",children:[a.jsx("div",{className:"card-type-badge",children:at.type5}),e.imageUrl&&a.jsx("img",{className:"t1-front-img",src:Ye(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"45%",maxWidth:"80%",marginBottom:"0.25rem"}}),a.jsx("div",{className:"t5-sentence",children:n.map((r,l)=>a.jsxs(ze.Fragment,{children:[r,l<n.length-1&&a.jsx("span",{className:"t5-blank",children:"_____"})]},l))}),e.note&&a.jsx("div",{className:"t4-note",style:{fontSize:"0.62rem"},children:e.note})]})}function Cp({card:e,language:t}){const{bare:n}=Mc(e.german,t);return a.jsxs("div",{className:"t6-front",children:[a.jsx("div",{className:"card-type-badge",children:at.type6}),e.imageUrl&&a.jsx("img",{className:"t1-front-img",src:Ye(e.imageUrl),alt:"",style:{position:"relative",inset:"auto",width:"auto",height:"50%",maxWidth:"80%",marginBottom:"0.5rem"}}),a.jsx("div",{className:"t6-label",children:"¿Cuál es el artículo?"}),a.jsxs("div",{className:"t6-word",children:["___ ",n]})]})}function Ep({card:e,language:t,onGrade:n,onExplain:r,explaining:l,explanation:o}){const i=Ge[t]||Ge.de,[s,u]=E.useState(""),[d,h]=E.useState(null),g=ze.useRef(null);ze.useEffect(()=>{var k;(k=g.current)==null||k.focus()},[]);const m=()=>{if(!s.trim())return;const k=s.trim().toLowerCase()===e.german.trim().toLowerCase();h(k?"correct":"wrong")},w=()=>{h("revealed"),Te(e)};return a.jsxs("div",{className:"answer-zone",children:[a.jsxs("div",{className:"answer-input-row",children:[a.jsx("input",{ref:g,className:`answer-input ${d==="wrong"?"wrong":d==="correct"?"correct":""}`,value:s,onChange:k=>u(k.target.value),onKeyDown:k=>{k.key==="Enter"&&!d&&m()},placeholder:`Escribe en ${i.name.toLowerCase()}…`,disabled:!!d}),a.jsx("button",{className:"answer-check-btn",onClick:m,disabled:!!d||!s.trim(),children:"OK"}),a.jsx("button",{className:"reveal-btn",onClick:w,disabled:!!d,children:"Revelar"})]}),d==="correct"&&a.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{children:"✓ ¡Correcto!"}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem"},onClick:()=>Te(e),children:"▶"})]}),d==="wrong"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{children:["✗ La respuesta es: ",a.jsx("strong",{children:e.german})]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Te(e),children:"▶"})]}),d==="revealed"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{children:["👁 La respuesta es: ",a.jsx("strong",{children:e.german})]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Te(e),children:"▶"})]}),a.jsx("button",{className:"continuar-btn",onClick:()=>n(0),children:"Continuar"})]}),(d==="correct"||d==="wrong")&&a.jsx("div",{className:"grades",children:Xi.map(({n:k,label:j})=>a.jsxs("button",{className:`grade-btn g${k}`,onClick:()=>n(k),children:[a.jsx("span",{className:"grade-num",children:k}),a.jsx("span",{className:"grade-label",children:j})]},k))}),!!d&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:r,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),o&&a.jsx("div",{className:"explanation",children:o})]})]})}function bp({card:e,onGrade:t,onExplain:n,explaining:r,explanation:l}){const[o,i]=E.useState(""),[s,u]=E.useState(null),d=ze.useRef(null);ze.useEffect(()=>{var w;(w=d.current)==null||w.focus()},[]);const h=(e.example||"").replace("___",e.german),g=()=>{if(!o.trim())return;const w=o.trim().toLowerCase()===e.german.trim().toLowerCase();u(w?"correct":"wrong")},m=()=>{u("revealed"),Te(e)};return a.jsxs("div",{className:"answer-zone",children:[a.jsxs("div",{className:"answer-input-row",children:[a.jsx("input",{ref:d,className:`answer-input ${s==="wrong"?"wrong":s==="correct"?"correct":""}`,value:o,onChange:w=>i(w.target.value),onKeyDown:w=>{w.key==="Enter"&&!s&&g()},placeholder:"Completa el espacio…",disabled:!!s}),a.jsx("button",{className:"answer-check-btn",onClick:g,disabled:!!s||!o.trim(),children:"OK"}),a.jsx("button",{className:"reveal-btn",onClick:m,disabled:!!s,children:"Revelar"})]}),s==="correct"&&a.jsxs("div",{className:"answer-feedback correct",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["✓ ¡Correcto! — ",h]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Te(e),children:"▶"})]}),s==="wrong"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["✗ Era: ",a.jsx("strong",{children:e.german})," — ",h]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Te(e),children:"▶"})]}),s==="revealed"&&a.jsxs("div",{className:"answer-feedback wrong",style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsxs("span",{style:{minWidth:0},children:["👁 ",a.jsx("strong",{children:e.german})," — ",h]}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Te(e),children:"▶"})]}),a.jsx("button",{className:"continuar-btn",onClick:()=>t(0),children:"Continuar"})]}),(s==="correct"||s==="wrong")&&a.jsx("div",{className:"grades",children:Xi.map(({n:w,label:k})=>a.jsxs("button",{className:`grade-btn g${w}`,onClick:()=>t(w),children:[a.jsx("span",{className:"grade-num",children:w}),a.jsx("span",{className:"grade-label",children:k})]},w))}),!!s&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:n,disabled:r,children:r?"Consultando IA…":"✦ Explicar con IA"}),l&&a.jsx("div",{className:"explanation",children:l})]})]})}function zp({card:e,language:t,onGrade:n,onExplain:r,explaining:l,explanation:o}){const[i,s]=E.useState(null),{articles:u,correct:d}=Mc(e.german,t),h=m=>{i||s(m)},g=m=>i?m===d?"reveal":m===i&&i!==d?"wrong":"":"";return a.jsxs("div",{className:"answer-zone",children:[a.jsx("div",{className:"article-btns",children:u.map(m=>a.jsx("button",{className:`article-btn ${g(m)}`,onClick:()=>h(m),disabled:!!i,children:m},m))}),i&&a.jsxs("div",{className:`answer-feedback ${i===d?"correct":"wrong"}`,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{style:{minWidth:0},children:i===d?`✓ Correcto — ${e.german}`:`✗ Es ${d} — ${e.german}`}),a.jsx("button",{className:"audio-replay-btn",style:{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0},onClick:()=>Te(e),children:"▶"})]}),e.note&&a.jsx("div",{className:"card-note",children:e.note}),a.jsx("button",{className:"continuar-btn",onClick:()=>n(i===d?5:1),children:"Continuar"})]}),i&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"explain-btn",onClick:r,disabled:l,children:l?"Consultando IA…":"✦ Explicar con IA"}),o&&a.jsx("div",{className:"explanation",children:o})]})]})}const ms=["#C8825B","#B23B2E","#5A7A4E","#E0A458","#8A6FA6"];function _p({count:e,onClose:t}){const n=ze.useMemo(()=>Array.from({length:20},(r,l)=>({left:Math.random()*100,delay:Math.random()*.5,duration:1.6+Math.random()*1.3,color:ms[l%ms.length],size:6+Math.random()*6})),[]);return a.jsxs("div",{className:"celebrate-overlay",onClick:t,children:[a.jsx("div",{className:"confetti",children:n.map((r,l)=>a.jsx("span",{className:"confetti-piece",style:{left:`${r.left}%`,background:r.color,width:r.size,height:r.size,animationDelay:`${r.delay}s`,animationDuration:`${r.duration}s`}},l))}),a.jsxs("div",{className:"celebrate-card",onClick:r=>r.stopPropagation(),children:[a.jsx("div",{className:"celebrate-emoji",children:"🎉"}),a.jsx("h2",{className:"celebrate-title",children:"¡Felicitaciones!"}),a.jsx("p",{className:"celebrate-text",children:"Terminaste tus repasos del día."}),a.jsxs("p",{className:"celebrate-count",children:["Repasaste ",a.jsx("strong",{children:e})," ",e===1?"tarjeta":"tarjetas"," en esta sesión."]}),a.jsx("button",{className:"celebrate-btn",onClick:t,children:"Continuar"})]})]})}function Tp({cards:e,onGrade:t,language:n}){const[r,l]=E.useState(!1),[o,i]=E.useState(!1),[s,u]=E.useState(null),[d,h]=E.useState(0),[g,m]=E.useState(!1),[w,k]=E.useState(0),[j,F]=E.useState(!1),f=ze.useMemo(()=>{const y=e.filter(z=>z.nextReview<=Date.now());for(let z=y.length-1;z>0;z--){const O=Math.floor(Math.random()*(z+1));[y[z],y[O]]=[y[O],y[z]]}return y},[e.map(y=>y.id+y.nextReview).join(",")]),c=f[0],p=ze.useCallback(()=>{Te(c)},[c]);ze.useEffect(()=>{if(r&&((c==null?void 0:c.cardType)==="type1"||(c==null?void 0:c.cardType)==="type2")){const y=setTimeout(()=>Te(c),350);return()=>clearTimeout(y)}},[r]);const x=y=>{var ce;if(g)return;(ce=window.speechSynthesis)==null||ce.cancel();const z=f.length===1,O=(c==null?void 0:c.cardType)==="type1"||(c==null?void 0:c.cardType)==="type2",A=()=>{t(c.id,pp(c,y)),u(null),h(ut=>ut+1),k(ut=>ut+1),z&&F(!0)};O&&r?(m(!0),l(!1),setTimeout(()=>{A(),m(!1)},560)):(A(),l(!1))},N=async()=>{i(!0);try{u(await gp(c))}catch{u("Error al contactar la API.")}i(!1)};if(!e.length)return a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["No hay tarjetas.",a.jsx("br",{}),"Ve a ",a.jsx("strong",{children:"+ Agregar"})," para crear tu primera."]})});if(!f.length)return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["Sin repasos pendientes.",a.jsx("br",{}),"Vuelve mañana — el sistema hace el resto."]})}),j&&a.jsx(_p,{count:w,onClose:()=>F(!1)})]});const C=c.cardType||"type1",b=["type4","type5","type6"].includes(C),v=["type1","type2"].includes(C);return a.jsxs("div",{children:[a.jsxs("div",{className:"session-info",children:[a.jsxs("span",{children:["Pendientes: ",a.jsx("strong",{children:f.length})]}),a.jsxs("span",{children:["Total: ",a.jsx("strong",{children:e.length})]})]}),v&&a.jsx("div",{className:"card-scene",onClick:()=>!g&&l(y=>!y),children:a.jsxs("div",{className:`card-inner ${r?"flipped":""}`,children:[a.jsxs("div",{className:"card-face front",children:[C==="type1"&&a.jsx(xp,{card:c}),C==="type2"&&a.jsx(kp,{card:c})]}),a.jsxs("div",{className:"card-face back",children:[C==="type1"&&a.jsx(wp,{card:c,onSpeak:p}),C==="type2"&&a.jsx(Sp,{card:c})]})]})}),b&&a.jsx("div",{className:"card-scene",children:a.jsxs("div",{className:"card-static",children:[C==="type4"&&a.jsx(jp,{card:c,language:n}),C==="type5"&&a.jsx(Np,{card:c}),C==="type6"&&a.jsx(Cp,{card:c,language:n})]})}),b&&a.jsxs(ze.Fragment,{children:[C==="type4"&&a.jsx(Ep,{card:c,language:n,onGrade:x,onExplain:N,explaining:o,explanation:s}),C==="type5"&&a.jsx(bp,{card:c,onGrade:x,onExplain:N,explaining:o,explanation:s}),C==="type6"&&a.jsx(zp,{card:c,language:n,onGrade:x,onExplain:N,explaining:o,explanation:s})]},d),v&&r&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"grades",children:Xi.map(({n:y,label:z})=>a.jsxs("button",{className:`grade-btn g${y}`,onClick:()=>x(y),children:[a.jsx("span",{className:"grade-num",children:y}),a.jsx("span",{className:"grade-label",children:z})]},y))}),a.jsx("button",{className:"explain-btn",onClick:N,disabled:o,children:o?"Consultando IA…":"✦ Explicar con IA"}),s&&a.jsx("div",{className:"explanation",children:s})]})]})}function Pp({onAdd:e,onBulkAdd:t,language:n}){var Ji;const r=Ge[n]||Ge.de,l=Lc(n),[o,i]=E.useState("single"),[s,u]=E.useState("type1"),[d,h]=E.useState(""),[g,m]=E.useState(""),[w,k]=E.useState(""),[j,F]=E.useState(""),[f,c]=E.useState(""),[p,x]=E.useState(!1),[N,C]=E.useState(null),[b,v]=E.useState(null),[y,z]=E.useState(null),[O,A]=E.useState("file"),[ce,ut]=E.useState("file"),[jn,ct]=E.useState(""),[Lt,_]=E.useState(""),[L,M]=E.useState(""),[$,W]=E.useState(null),[dt,Xe]=E.useState(!0),Nn=()=>{!d.trim()||!g.trim()||(e({cardType:s,german:d.trim(),translation:g.trim(),note:w.trim(),example:j.trim(),exampleTranslation:f.trim(),imageUrl:N,audioUrl:b}),h(""),m(""),k(""),C(null),v(null),F(""),c(""),x(!0),setTimeout(()=>x(!1),2e3))},$e=async(P,oe)=>{const Be=P.target.files[0];if(Be){z(oe);try{const{url:Cn}=await vp(Be);oe==="image"?C(Cn):v(Cn)}catch{alert("Error al subir archivo.")}z(null),P.target.value=""}},Ze=(P,oe)=>{const Be=oe.trim();Be&&(P==="image"?(C(Be),ct("")):(v(Be),_("")))},Zi=P=>{const oe=P==="image"?N:b;!(oe&&(oe.startsWith("http://")||oe.startsWith("https://")))&&oe&&yp(oe),P==="image"?(C(null),ct("")):(v(null),_(""))},Rc=()=>{W(null);let P;try{P=JSON.parse(L.trim())}catch{W({ok:!1,msg:"JSON inválido. Revisa la sintaxis."});return}if(!Array.isArray(P)){W({ok:!1,msg:"Debe ser un array [ ... ]."});return}const oe=P.filter(Be=>{var Cn,qi;return((Cn=Be.german)==null?void 0:Cn.trim())&&((qi=Be.translation)==null?void 0:qi.trim())});if(!oe.length){W({ok:!1,msg:'Ningún objeto tiene "german" y "translation".'});return}t(oe,dt),M(""),W({ok:!0,msg:`✓ ${oe.length} tarjeta${oe.length!==1?"s":""} ${dt?"importada":"agregada"}${oe.length!==1?"s":""}.`})};return a.jsxs("div",{className:"add-form",children:[a.jsxs("div",{className:"add-tabs",children:[a.jsx("button",{className:`add-tab ${o==="single"?"active":""}`,onClick:()=>i("single"),children:"Una tarjeta"}),a.jsx("button",{className:`add-tab ${o==="bulk"?"active":""}`,onClick:()=>i("bulk"),children:"Importar JSON"})]}),o==="single"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:l.map(P=>a.jsxs("button",{className:`type-btn ${s===P.id?"active":""}`,onClick:()=>u(P.id),children:[P.name,a.jsx("span",{className:"type-tip",role:"tooltip",children:P.tip})]},P.id))}),a.jsx("div",{className:"type-tip-static",children:(Ji=l.find(P=>P.id===s))==null?void 0:Ji.tip}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:s==="type5"?"Palabra que va en el hueco":r.name}),a.jsx("input",{value:d,onChange:P=>h(P.target.value),placeholder:s==="type5"?r.blankWordPh:r.wordPh})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción"}),a.jsx("input",{value:g,onChange:P=>m(P.target.value),placeholder:"la llave"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Nota (opcional)"}),a.jsx("textarea",{value:w,onChange:P=>k(P.target.value),placeholder:"artículo, ejemplo, truco…"})]}),(s==="type2"||s==="type5")&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:s==="type5"?"Oración con ___ (espacio en blanco)":r.exLabel}),a.jsx("input",{value:j,onChange:P=>F(P.target.value),placeholder:s==="type5"?r.blankPh:r.exPh})]}),s==="type2"&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción del ejemplo"}),a.jsx("input",{value:f,onChange:P=>c(P.target.value),placeholder:"El perro corre rápido."})]})]}),["type1","type5","type6"].includes(s)&&a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Imagen (opcional) —"," ",a.jsx("button",{className:"mode-toggle",onClick:()=>{A(P=>P==="file"?"url":"file"),C(null),ct("")},children:O==="file"?"usar URL":"subir archivo"})]}),N?a.jsxs("div",{className:"media-preview",children:[a.jsx("img",{src:Ye(N),alt:""}),a.jsx("span",{className:"media-preview-label",children:N.startsWith("http")?"URL externa":N.split("/").pop()}),a.jsx("button",{className:"media-remove",onClick:()=>Zi("image"),children:"×"})]}):O==="file"?a.jsx("div",{className:"media-upload-row",children:a.jsxs("label",{className:"media-upload-btn",children:[y==="image"?a.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir imagen",a.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:P=>$e(P,"image"),disabled:!!y})]})}):a.jsxs("div",{className:"url-input-row",children:[a.jsx("input",{className:"url-input",value:jn,onChange:P=>ct(P.target.value),placeholder:"https://upload.wikimedia.org/…",onKeyDown:P=>P.key==="Enter"&&Ze("image",jn)}),a.jsx("button",{className:"url-set-btn",onClick:()=>Ze("image",jn),children:"OK"})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Audio (opcional) —"," ",a.jsx("button",{className:"mode-toggle",onClick:()=>{ut(P=>P==="file"?"url":"file"),v(null),_("")},children:ce==="file"?"usar URL":"subir archivo"})]}),b?a.jsxs("div",{className:"media-preview",children:[a.jsx("span",{className:"media-preview-label",children:b.startsWith("http")?"URL externa":b.split("/").pop()}),a.jsx("audio",{src:Ye(b),controls:!0,style:{height:"24px",accentColor:"#cc0000"}}),a.jsx("button",{className:"media-remove",onClick:()=>Zi("audio"),children:"×"})]}):ce==="file"?a.jsx("div",{className:"media-upload-row",children:a.jsxs("label",{className:"media-upload-btn",children:[y==="audio"?a.jsx("span",{className:"media-uploading",children:"Subiendo…"}):"＋ Subir audio",a.jsx("input",{type:"file",accept:"audio/*",style:{display:"none"},onChange:P=>$e(P,"audio"),disabled:!!y})]})}):a.jsxs("div",{className:"url-input-row",children:[a.jsx("input",{className:"url-input",value:Lt,onChange:P=>_(P.target.value),placeholder:"https://forvo.com/… o link directo a .mp3",onKeyDown:P=>P.key==="Enter"&&Ze("audio",Lt)}),a.jsx("button",{className:"url-set-btn",onClick:()=>Ze("audio",Lt),children:"OK"})]})]}),a.jsx("button",{className:"submit-btn",onClick:Nn,children:"Agregar tarjeta"}),p&&a.jsx("div",{className:"success-msg",children:"✓ Guardada"})]}),o==="bulk"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Array JSON"}),a.jsx("textarea",{className:"bulk-textarea",value:L,onChange:P=>M(P.target.value),placeholder:r.bulkPh})]}),a.jsxs("div",{className:"bulk-schema",children:["Campos: ",a.jsx("code",{children:"german"})," ✦ ",a.jsx("code",{children:"translation"})," ✦ ",a.jsx("code",{children:"note"})," (opcional)"]}),a.jsxs("label",{className:"bulk-replace-row",children:[a.jsx("input",{type:"checkbox",checked:dt,onChange:P=>Xe(P.target.checked)}),a.jsx("span",{children:"Reemplazar todo el mazo (desactiva para agregar encima)"})]}),a.jsx("button",{className:"submit-btn",onClick:Rc,children:"Importar"}),$&&a.jsx("div",{className:$.ok?"success-msg":"error-msg",children:$.msg})]})]})}function Lp({cards:e}){const t=Date.now(),n=864e5,r=[{label:"Nuevas",color:"#B4642F",count:0},{label:"Hoy",color:"#C8825B",count:0},{label:"Mañana",color:"#D29E78",count:0},{label:"3–7 días",color:"#DBB596",count:0},{label:"8–30 días",color:"#E2CBB3",count:0},{label:"+30 días",color:"#E8D9C5",count:0}];for(const i of e){const u=(i.nextReview-t)/n;i.repetitions===0?r[0].count++:u<=0?r[1].count++:u<=1?r[2].count++:u<=7?r[3].count++:u<=30?r[4].count++:r[5].count++}const l=Math.max(...r.map(i=>i.count),1),o=e.length;return o?a.jsxs("div",{className:"stats-view",children:[a.jsxs("div",{className:"stats-header",children:[a.jsx("div",{className:"stats-title",children:"Estado del mazo"}),a.jsxs("div",{className:"stats-total",children:[o," tarjeta",o!==1?"s":""," en total"]})]}),a.jsx("div",{className:"stats-chart",children:r.map((i,s)=>{const u=l>0?i.count/l*100:0,d=o>0?Math.round(i.count/o*100):0;return a.jsxs("div",{className:"stats-row",children:[a.jsx("div",{className:"stats-row-label",children:i.label}),a.jsx("div",{className:"stats-bar-wrap",children:a.jsx("div",{className:"stats-bar",style:{width:`${u}%`,background:i.color}})}),a.jsxs("div",{className:"stats-row-count",children:[a.jsx("span",{className:"stats-n",children:i.count}),a.jsxs("span",{className:"stats-pct",children:[d,"%"]})]})]},s)})}),a.jsxs("div",{className:"stats-footer",children:[a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#cc0000"},children:r[0].count+r[1].count}),a.jsx("div",{className:"kpi-label",children:"para estudiar hoy"})]}),a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#ffcc00"},children:e.filter(i=>i.repetitions>0&&i.interval>=21).length}),a.jsx("div",{className:"kpi-label",children:"maduras (≥21 días)"})]}),a.jsxs("div",{className:"stats-kpi",children:[a.jsx("div",{className:"kpi-val",style:{color:"#aaa"},children:o>0?(e.reduce((i,s)=>i+s.easiness,0)/o).toFixed(2):"—"}),a.jsx("div",{className:"kpi-label",children:"easiness promedio"})]})]})]}):a.jsx("div",{className:"deck-empty",children:a.jsxs("p",{children:["Sin tarjetas aún.",a.jsx("br",{}),"Ve a ",a.jsx("strong",{children:"+ Agregar"})," para empezar."]})})}function Mp({card:e,onSave:t,onClose:n}){const[r,l]=E.useState(e.imageUrl||""),[o,i]=E.useState(null),[s,u]=E.useState(!1),d=()=>{const h=r.trim();t({...e,imageUrl:h||null}),i("ok"),setTimeout(n,800)};return a.jsx("div",{className:"img-preview-overlay",onClick:n,children:a.jsxs("div",{className:"img-preview-dialog",onClick:h=>h.stopPropagation(),children:[a.jsxs("div",{className:"img-preview-header",children:[a.jsx("div",{className:"img-preview-word",children:e.german}),a.jsx("button",{className:"img-preview-close",onClick:n,children:"×"})]}),a.jsx("div",{className:"img-preview-frame",children:e.imageUrl&&!s?a.jsx("img",{src:Ye(e.imageUrl),alt:"",onError:()=>u(!0)}):a.jsxs("div",{className:"img-preview-broken",children:[a.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),a.jsx("div",{children:s?"Imagen rota":"Sin imagen"})]})}),a.jsxs("div",{className:"img-preview-url-row",children:[a.jsx("input",{className:"img-preview-url-input",value:r,onChange:h=>{l(h.target.value),u(!1),i(null)},placeholder:"https://upload.wikimedia.org/…",onKeyDown:h=>h.key==="Enter"&&d()}),a.jsx("button",{className:"img-preview-save-btn",onClick:d,children:"Guardar"})]}),o==="ok"&&a.jsx("div",{className:"img-preview-status ok",children:"✓ Guardado"})]})})}function Dp({card:e,onClose:t}){var o;const n=e.cardType||"type1";(o=e.german.match(/^(der|die|das)/i))!=null&&o[1];const r=e.german.replace(/^(der|die|das)\s+/i,""),l=(e.example||"").replace("___",e.german);return a.jsx("div",{className:"img-preview-overlay",onClick:t,children:a.jsxs("div",{className:"card-preview-dialog",onClick:i=>i.stopPropagation(),children:[a.jsxs("div",{className:"img-preview-header",children:[a.jsxs("div",{className:"img-preview-word",children:[a.jsxs("span",{style:{fontSize:"0.6rem",color:"#555",letterSpacing:"0.1em",textTransform:"uppercase",marginRight:"0.5rem"},children:["Tipo ",n.replace("type","")]}),e.german]}),a.jsx("button",{className:"img-preview-close",onClick:t,children:"×"})]}),a.jsxs("div",{className:"card-preview-side",children:[a.jsx("div",{className:"card-preview-label",children:"Frente"}),n==="type1"&&a.jsx("div",{className:"card-preview-body",children:e.imageUrl?a.jsx("img",{src:Ye(e.imageUrl),alt:"",className:"card-preview-img",onError:i=>i.target.style.display="none"}):a.jsxs("div",{className:"img-preview-broken",children:[a.jsx("div",{className:"img-preview-broken-icon",children:"🖼"}),a.jsx("div",{children:"Sin imagen"})]})}),n==="type2"&&a.jsxs("div",{className:"card-preview-body",children:[a.jsx("div",{className:"card-preview-big",children:e.german}),e.example&&a.jsx("div",{className:"card-preview-example",children:e.example})]}),n==="type4"&&a.jsxs("div",{className:"card-preview-body",children:[a.jsx("div",{className:"card-preview-trans",children:e.translation}),e.note&&a.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type5"&&a.jsx("div",{className:"card-preview-body",children:a.jsx("div",{className:"card-preview-example",children:(e.example||"").replace("___","_____")})}),n==="type6"&&a.jsxs("div",{className:"card-preview-body",children:[e.imageUrl&&a.jsx("img",{src:Ye(e.imageUrl),alt:"",className:"card-preview-img",onError:i=>i.target.style.display="none"}),a.jsxs("div",{className:"card-preview-big",style:{color:"#888"},children:["___ ",r]})]})]}),a.jsxs("div",{className:"card-preview-side",children:[a.jsx("div",{className:"card-preview-label",children:"Dorso"}),a.jsxs("div",{className:"card-preview-body",children:[(n==="type1"||n==="type6")&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-big",children:e.german}),e.note&&a.jsx("div",{className:"card-preview-note",children:e.note})]}),n==="type2"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-trans",children:e.translation}),e.exampleTranslation&&a.jsxs("div",{className:"card-preview-example",style:{color:"#666"},children:['"',e.exampleTranslation,'"']})]}),(n==="type4"||n==="type5")&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"card-preview-big",children:e.german}),n==="type5"&&l&&a.jsx("div",{className:"card-preview-example",children:l})]})]})]}),a.jsx("button",{className:"continuar-btn",style:{alignSelf:"center"},onClick:t,children:"Cerrar"})]})})}function Fp({card:e,onSave:t,onClose:n,language:r}){var b;const l=Ge[r]||Ge.de,o=Lc(r),[i,s]=E.useState(e.cardType||"type1"),[u,d]=E.useState(e.german),[h,g]=E.useState(e.translation),[m,w]=E.useState(e.note||""),[k,j]=E.useState(e.example||""),[F,f]=E.useState(e.exampleTranslation||""),[c,p]=E.useState(e.imageUrl||""),[x,N]=E.useState(e.audioUrl||""),C=()=>{!u.trim()||!h.trim()||t({...e,cardType:i,german:u.trim(),translation:h.trim(),note:m.trim(),example:k.trim(),exampleTranslation:F.trim(),imageUrl:c.trim()||null,audioUrl:x.trim()||null})};return a.jsx("div",{className:"confirm-overlay",onClick:n,children:a.jsxs("div",{className:"edit-dialog",onClick:v=>v.stopPropagation(),children:[a.jsx("div",{className:"confirm-title",children:"Editar tarjeta"}),a.jsxs("div",{className:"edit-fields",children:[a.jsx("div",{className:"type-selector",style:{flexWrap:"wrap"},children:o.map(v=>a.jsxs("button",{className:`type-btn ${i===v.id?"active":""}`,onClick:()=>s(v.id),children:[v.name,a.jsx("span",{className:"type-tip",role:"tooltip",children:v.tip})]},v.id))}),a.jsx("div",{className:"type-tip-static",children:(b=o.find(v=>v.id===i))==null?void 0:b.tip}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:i==="type5"?"Palabra que va en el hueco":l.name}),a.jsx("input",{value:u,onChange:v=>d(v.target.value),placeholder:i==="type5"?l.blankWordPh:""})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción"}),a.jsx("input",{value:h,onChange:v=>g(v.target.value)})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Nota"}),a.jsx("input",{value:m,onChange:v=>w(v.target.value),placeholder:"artículo, truco…"})]}),(i==="type2"||i==="type5")&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:i==="type5"?"Oración con ___ (espacio en blanco)":l.exLabel}),a.jsx("input",{value:k,onChange:v=>j(v.target.value),placeholder:i==="type5"?l.blankPh:l.exPh})]}),i==="type2"&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Traducción del ejemplo"}),a.jsx("input",{value:F,onChange:v=>f(v.target.value)})]})]}),["type1","type5","type6"].includes(i)&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"URL imagen"}),a.jsx("input",{value:c,onChange:v=>p(v.target.value),placeholder:"https://…"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"URL audio"}),a.jsx("input",{value:x,onChange:v=>N(v.target.value),placeholder:"https://…"})]})]}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"confirm-cancel",onClick:n,children:"Cancelar"}),a.jsx("button",{className:"confirm-ok",onClick:C,children:"Guardar"})]})]})})}function Rp({card:e,onClick:t}){const[n,r]=E.useState(!1);return ze.useEffect(()=>{r(!1)},[e.imageUrl]),!e.imageUrl||n?a.jsx("button",{className:"preview-btn",onClick:t,title:"Sin imagen — click para agregar",children:a.jsx("div",{className:"preview-thumb-empty",children:"+"})}):a.jsx("button",{className:"preview-btn",onClick:t,title:"Vista previa de imagen",children:a.jsx("img",{className:"preview-thumb",src:Ye(e.imageUrl),alt:"",onError:()=>r(!0)})})}function Op({cards:e,onDelete:t,onDeleteAll:n,onEdit:r,language:l}){const[o,i]=E.useState(!1),s=()=>{const y=JSON.stringify(e,null,2),z=new Blob([y],{type:"application/json"}),O=URL.createObjectURL(z),A=document.createElement("a"),ce=new Date().toISOString().slice(0,10);A.href=O,A.download=`deutschkarten-backup-${ce}.json`,A.click(),URL.revokeObjectURL(O)},[u,d]=E.useState(""),[h,g]=E.useState(null),[m,w]=E.useState(null),[k,j]=E.useState(null),[F,f]=E.useState(null),c=ze.useRef(null),[p,x]=E.useState("all"),N=y=>{c.current&&clearTimeout(c.current),f(y),c.current=setTimeout(()=>f(null),2200)},C=e.filter(y=>y.cardType==="type1"||y.cardType==="type5"||y.cardType==="type6"),b=[...e].sort((y,z)=>y.nextReview-z.nextReview).filter(y=>{if(u.trim()){const z=u.toLowerCase();if(!y.german.toLowerCase().includes(z)&&!y.translation.toLowerCase().includes(z)&&!(y.note||"").toLowerCase().includes(z))return!1}return p==="broken"?(y.cardType==="type1"||y.cardType==="type5"||y.cardType==="type6")&&!y.imageUrl:p==="ok"?(y.cardType==="type1"||y.cardType==="type5"||y.cardType==="type6")&&!!y.imageUrl:!0}),v=C.filter(y=>!y.imageUrl).length;return a.jsxs("div",{children:[a.jsxs("div",{className:"list-header",children:[a.jsx("div",{className:"list-title",children:"Todas las tarjetas"}),a.jsxs("div",{className:"list-header-right",children:[a.jsxs("div",{className:"list-count",children:[e.length," total"]}),e.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"export-btn",onClick:s,title:"Exportar backup JSON",children:"↓ Backup"}),a.jsx("button",{className:"delete-all-btn",onClick:()=>i(!0),children:"Borrar todo"})]})]})]}),a.jsxs("div",{className:"list-search-wrap",children:[a.jsx("input",{className:"list-search",value:u,onChange:y=>d(y.target.value),placeholder:"Buscar por palabra, traducción o nota…"}),u&&a.jsx("button",{className:"list-search-clear",onClick:()=>d(""),children:"×"})]}),a.jsxs("div",{className:"list-filter-row",children:[a.jsx("button",{className:`list-filter-btn ${p==="all"?"active":""}`,onClick:()=>x("all"),children:"Todas"}),a.jsxs("button",{className:`list-filter-btn ${p==="broken"?"active":""}`,onClick:()=>x("broken"),children:["Sin imagen ",v>0&&`(${v})`]}),a.jsx("button",{className:`list-filter-btn ${p==="ok"?"active":""}`,onClick:()=>x("ok"),children:"Con imagen"})]}),o&&a.jsx("div",{className:"confirm-overlay",onClick:()=>i(!1),children:a.jsxs("div",{className:"confirm-dialog",onClick:y=>y.stopPropagation(),children:[a.jsx("div",{className:"confirm-title",children:"¿Borrar todo el mazo?"}),a.jsxs("div",{className:"confirm-body",children:["Se eliminarán ",a.jsxs("strong",{children:[e.length," tarjeta",e.length!==1?"s":""]})," y todo su progreso. Esta acción no se puede deshacer."]}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"confirm-cancel",onClick:()=>i(!1),children:"Cancelar"}),a.jsx("button",{className:"confirm-ok",onClick:()=>{n(),i(!1)},children:"Sí, borrar todo"})]})]})}),h&&a.jsx(Fp,{card:h,language:l,onSave:y=>{r(y),g(null),N(`✓ "${y.german}" actualizado`)},onClose:()=>g(null)}),m&&a.jsx(Mp,{card:m,onSave:y=>{r(y),w(y),N("✓ Imagen actualizada")},onClose:()=>w(null)}),k&&a.jsx(Dp,{card:k,onClose:()=>j(null)}),a.jsxs("div",{className:"card-list",children:[b.length===0&&a.jsx("div",{className:"list-empty",children:u?`Sin resultados para "${u}"`:"Sin tarjetas en este filtro"}),b.map(y=>{const z=y.nextReview<=Date.now(),O=y.cardType==="type1"||y.cardType==="type5"||y.cardType==="type6";return a.jsxs("div",{className:"list-item",children:[O?a.jsx(Rp,{card:y,onClick:()=>w(y)}):a.jsx("div",{style:{width:"28px"}}),a.jsxs("div",{className:"li-main",children:[a.jsx("div",{className:"li-german",children:y.german}),a.jsx("div",{className:"li-trans",children:y.translation}),y.note&&a.jsx("div",{className:"li-note",children:y.note})]}),a.jsx("div",{className:`li-next ${z?"due":""}`,children:mp(y.nextReview)}),a.jsxs("div",{className:"li-actions",children:[a.jsx("button",{className:"preview-card-btn",onClick:()=>j(y),title:"Vista previa",children:a.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:[a.jsx("path",{d:"M6.5 1C3.5 1 1 4 1 5C1 6 3.5 9 6.5 9C9.5 9 12 6 12 5C12 4 9.5 1 6.5 1Z",stroke:"currentColor",strokeWidth:"1.1",fill:"none"}),a.jsx("circle",{cx:"6.5",cy:"5",r:"1.5",stroke:"currentColor",strokeWidth:"1.1",fill:"none"})]})}),a.jsx("button",{className:"edit-btn",onClick:()=>g(y),children:"✎"}),a.jsx("button",{className:"delete-btn",onClick:()=>t(y.id),children:"×"})]})]},y.id)})]})]})}function Ip({onAuth:e}){const[t,n]=E.useState(""),[r,l]=E.useState(""),[o,i]=E.useState(null),[s,u]=E.useState(!1);async function d(h){h.preventDefault(),i(null),u(!0);try{const g=await gr("/auth/login",{method:"POST",body:JSON.stringify({username:t,password:r})});g.token&&hp(g.token),e(g.username,g.language||"de")}catch(g){i(g.message)}finally{u(!1)}}return a.jsxs("div",{className:"auth-screen",children:[a.jsxs("style",{children:[ei,Fc]}),a.jsx("div",{className:"noise"}),a.jsxs("div",{className:"auth-card",children:[a.jsx("div",{className:"auth-logo",children:a.jsxs("span",{className:"logo-text",children:["Sprachen",a.jsx("span",{children:"Karten"})]})}),a.jsx("p",{className:"auth-tagline",children:"Tarjetas de idiomas"}),a.jsxs("form",{className:"auth-form",onSubmit:d,children:[a.jsx("input",{className:"auth-input",type:"text",placeholder:"Usuario",value:t,autoComplete:"username",onChange:h=>n(h.target.value),required:!0}),a.jsx("input",{className:"auth-input",type:"password",placeholder:"Contraseña",value:r,autoComplete:"current-password",onChange:h=>l(h.target.value),required:!0}),o&&a.jsx("p",{className:"auth-error",children:o}),a.jsx("button",{className:"auth-btn",type:"submit",disabled:s,children:s?"…":"Entrar"})]})]})]})}function Up(){const[e,t]=E.useState(null),[n,r]=E.useState("de"),[l,o]=E.useState([]),[i,s]=E.useState(!1),[u,d]=E.useState("study"),[h,g]=E.useState(!1);E.useEffect(()=>{fp(n)},[n]),E.useEffect(()=>{if(!Dc()){t(!1);return}(async()=>{try{const v=await gr("/auth/me"),y=await fs();t(v.username),r(v.language||"de"),o(y),s(!0)}catch{ds(),t(!1)}})()},[]),E.useEffect(()=>{if(!e||!i)return;const v=setTimeout(()=>{ps(l).catch(()=>{})},800);return()=>clearTimeout(v)},[l,e,i]);const m=E.useRef(l);E.useEffect(()=>{m.current=l},[l]);const w=E.useRef(e);E.useEffect(()=>{w.current=e},[e]);const k=E.useRef(i);E.useEffect(()=>{k.current=i},[i]),E.useEffect(()=>{const v=()=>{if(!w.current||!k.current)return;const y=m.current,z=y.length===0?"?allowEmpty=true":"";fetch(`${hr}/cards${z}`,{method:"PUT",headers:{"Content-Type":"application/json",...Ml()},body:JSON.stringify(y),keepalive:!0})};return window.addEventListener("beforeunload",v),()=>window.removeEventListener("beforeunload",v)},[]);async function j(){i&&await ps(l).catch(()=>{}),ds(),s(!1),t(!1),o([])}async function F(v,y){s(!1),t(v),r(y||"de");try{const z=await fs();o(z),s(!0)}catch{o([])}}const f=E.useCallback(v=>{const y={id:Date.now().toString(),cardType:v.cardType||"type1",german:v.german,translation:v.translation,note:v.note||"",example:v.example||"",exampleTranslation:v.exampleTranslation||"",imageUrl:v.imageUrl||null,audioUrl:v.audioUrl||null,repetitions:0,easiness:2.5,interval:0,nextReview:Date.now(),lastGrade:null};o(z=>[...z,y])},[]),c=E.useCallback((v,y)=>{o(z=>z.map(O=>O.id===v?{...O,...y}:O))},[]),p=E.useCallback(v=>{o(y=>y.filter(z=>z.id!==v))},[]),x=E.useCallback(()=>{o([])},[]),N=E.useCallback(v=>{o(y=>y.map(z=>z.id===v.id?v:z))},[]),C=E.useCallback((v,y=!1)=>{const z=Date.now(),O=v.map((A,ce)=>({id:(z+ce).toString(),german:A.german.trim(),translation:A.translation.trim(),note:(A.note||"").trim(),cardType:A.cardType||"type1",imageUrl:A.imageUrl||null,audioUrl:A.audioUrl||null,example:A.example||"",exampleTranslation:A.exampleTranslation||"",repetitions:0,easiness:2.5,interval:0,nextReview:z,lastGrade:null}));o(A=>y?O:[...A,...O])},[]);if(e===null)return a.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#111111",color:"#888",fontFamily:"'DM Mono', monospace"},children:[a.jsx("style",{children:ei}),"Cargando…"]});if(e===!1)return a.jsx(Ip,{onAuth:F});const b=[{id:"study",label:"Repasar"},{id:"add",label:"+ Agregar"},{id:"list",label:"Lista"},{id:"stats",label:"Estado"}];return a.jsxs(a.Fragment,{children:[a.jsxs("style",{children:[ei,Fc]}),a.jsx("div",{className:"noise"}),a.jsxs("div",{className:"app",children:[a.jsxs("header",{className:"header",children:[a.jsxs("div",{className:"logo",children:[n==="fr"?a.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{width:"9.33",height:"19",x:"0",fill:"#002395"}),a.jsx("rect",{width:"9.34",height:"19",x:"9.33",fill:"#fff"}),a.jsx("rect",{width:"9.33",height:"19",x:"18.67",fill:"#ED2939"})]}):a.jsxs("svg",{className:"logo-flag",viewBox:"0 0 28 19",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{width:"28",height:"6.33",y:"0",fill:"#000"}),a.jsx("rect",{width:"28",height:"6.34",y:"6.33",fill:"#D00"}),a.jsx("rect",{width:"28",height:"6.33",y:"12.67",fill:"#FFCE00"})]}),a.jsx("div",{className:"logo-text",children:n==="fr"?a.jsxs(a.Fragment,{children:["Français",a.jsx("span",{children:"Cartes"})]}):a.jsxs(a.Fragment,{children:["Deutsch",a.jsx("span",{children:"Karten"})]})})]}),a.jsxs("nav",{className:"nav",children:[b.map(v=>a.jsx("button",{className:`nav-btn ${u===v.id?"active":""}`,onClick:()=>d(v.id),children:v.label},v.id)),a.jsxs("button",{className:"nav-btn",onClick:j,title:`Sesión: ${e}`,style:{marginLeft:"auto",opacity:.6},children:["↩ ",e]})]}),a.jsx("button",{className:"hamburger-btn",onClick:()=>g(v=>!v),"aria-label":"Menú","aria-expanded":h,children:h?"✕":"☰"}),h&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"menu-backdrop",onClick:()=>g(!1)}),a.jsxs("div",{className:"menu-panel",children:[b.map(v=>a.jsx("button",{className:`menu-item ${u===v.id?"active":""}`,onClick:()=>{d(v.id),g(!1)},children:v.label},v.id)),a.jsxs("button",{className:"menu-item menu-logout",onClick:()=>{g(!1),j()},children:["↩ ",e]})]})]})]}),u==="study"&&a.jsx(Tp,{cards:l,onGrade:c,onUpdateCards:o,language:n}),u==="add"&&a.jsx(Pp,{onAdd:v=>{f(v),d("study")},onBulkAdd:(v,y)=>{C(v,y),d("list")},language:n}),u==="list"&&a.jsx(Op,{cards:l,onDelete:p,onDeleteAll:x,onEdit:N,language:n}),u==="stats"&&a.jsx(Lp,{cards:l})]})]})}_c(document.getElementById("root")).render(a.jsx(E.StrictMode,{children:a.jsx(Up,{})}));
