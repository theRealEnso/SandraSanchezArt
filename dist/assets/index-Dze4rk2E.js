var BN=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var tse=BN((sse,Hy)=>{function WN(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function HN(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var FI={exports:{}},uh={},UI={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=Symbol.for("react.element"),qN=Symbol.for("react.portal"),GN=Symbol.for("react.fragment"),KN=Symbol.for("react.strict_mode"),YN=Symbol.for("react.profiler"),QN=Symbol.for("react.provider"),XN=Symbol.for("react.context"),JN=Symbol.for("react.forward_ref"),ZN=Symbol.for("react.suspense"),e$=Symbol.for("react.memo"),t$=Symbol.for("react.lazy"),hw=Symbol.iterator;function n$(e){return e===null||typeof e!="object"?null:(e=hw&&e[hw]||e["@@iterator"],typeof e=="function"?e:null)}var zI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},BI=Object.assign,WI={};function la(e,t,n){this.props=e,this.context=t,this.refs=WI,this.updater=n||zI}la.prototype.isReactComponent={};la.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};la.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function HI(){}HI.prototype=la.prototype;function qy(e,t,n){this.props=e,this.context=t,this.refs=WI,this.updater=n||zI}var Gy=qy.prototype=new HI;Gy.constructor=qy;BI(Gy,la.prototype);Gy.isPureReactComponent=!0;var pw=Array.isArray,qI=Object.prototype.hasOwnProperty,Ky={current:null},GI={key:!0,ref:!0,__self:!0,__source:!0};function KI(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)qI.call(t,r)&&!GI.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Du,type:e,key:o,ref:s,props:i,_owner:Ky.current}}function r$(e,t){return{$$typeof:Du,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yy(e){return typeof e=="object"&&e!==null&&e.$$typeof===Du}function i$(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mw=/\/+/g;function Xp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?i$(""+e.key):t.toString(36)}function vf(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Du:case qN:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Xp(s,0):r,pw(i)?(n="",e!=null&&(n=e.replace(mw,"$&/")+"/"),vf(i,t,n,"",function(u){return u})):i!=null&&(Yy(i)&&(i=r$(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(mw,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",pw(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Xp(o,a);s+=vf(o,t,n,l,i)}else if(l=n$(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Xp(o,a++),s+=vf(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ec(e,t,n){if(e==null)return e;var r=[],i=0;return vf(e,r,"","",function(o){return t.call(n,o,i++)}),r}function o$(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qt={current:null},yf={transition:null},s$={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:yf,ReactCurrentOwner:Ky};re.Children={map:Ec,forEach:function(e,t,n){Ec(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ec(e,function(){t++}),t},toArray:function(e){return Ec(e,function(t){return t})||[]},only:function(e){if(!Yy(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=la;re.Fragment=GN;re.Profiler=YN;re.PureComponent=qy;re.StrictMode=KN;re.Suspense=ZN;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s$;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=BI({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ky.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)qI.call(t,l)&&!GI.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Du,type:e.type,key:i,ref:o,props:r,_owner:s}};re.createContext=function(e){return e={$$typeof:XN,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:QN,_context:e},e.Consumer=e};re.createElement=KI;re.createFactory=function(e){var t=KI.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:JN,render:e}};re.isValidElement=Yy;re.lazy=function(e){return{$$typeof:t$,_payload:{_status:-1,_result:e},_init:o$}};re.memo=function(e,t){return{$$typeof:e$,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=yf.transition;yf.transition={};try{e()}finally{yf.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return qt.current.useCallback(e,t)};re.useContext=function(e){return qt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return qt.current.useDeferredValue(e)};re.useEffect=function(e,t){return qt.current.useEffect(e,t)};re.useId=function(){return qt.current.useId()};re.useImperativeHandle=function(e,t,n){return qt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return qt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return qt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return qt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return qt.current.useReducer(e,t,n)};re.useRef=function(e){return qt.current.useRef(e)};re.useState=function(e){return qt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return qt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return qt.current.useTransition()};re.version="18.2.0";UI.exports=re;var S=UI.exports;const q=$o(S),Jf=WN({__proto__:null,default:q},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a$=S,l$=Symbol.for("react.element"),u$=Symbol.for("react.fragment"),c$=Object.prototype.hasOwnProperty,f$=a$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d$={key:!0,ref:!0,__self:!0,__source:!0};function YI(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)c$.call(t,r)&&!d$.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:l$,type:e,key:o,ref:s,props:i,_owner:f$.current}}uh.Fragment=u$;uh.jsx=YI;uh.jsxs=YI;FI.exports=uh;var w=FI.exports,Eg={},QI={exports:{}},mn={},XI={exports:{}},JI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,D){var H=$.length;$.push(D);e:for(;0<H;){var se=H-1>>>1,ae=$[se];if(0<i(ae,D))$[se]=D,$[H]=ae,H=se;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var D=$[0],H=$.pop();if(H!==D){$[0]=H;e:for(var se=0,ae=$.length,on=ae>>>1;se<on;){var at=2*(se+1)-1,En=$[at],lt=at+1,Ft=$[lt];if(0>i(En,H))lt<ae&&0>i(Ft,En)?($[se]=Ft,$[lt]=H,se=lt):($[se]=En,$[at]=H,se=at);else if(lt<ae&&0>i(Ft,H))$[se]=Ft,$[lt]=H,se=lt;else break e}}return D}function i($,D){var H=$.sortIndex-D.sortIndex;return H!==0?H:$.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,g=!1,m=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=$)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function E($){if(m=!1,y($),!g)if(n(l)!==null)g=!0,wn(T);else{var D=n(u);D!==null&&_e(E,D.startTime-$)}}function T($,D){g=!1,m&&(m=!1,v(R),R=-1),p=!0;var H=d;try{for(y(D),f=n(l);f!==null&&(!(f.expirationTime>D)||$&&!ue());){var se=f.callback;if(typeof se=="function"){f.callback=null,d=f.priorityLevel;var ae=se(f.expirationTime<=D);D=e.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),y(D)}else r(l);f=n(l)}if(f!==null)var on=!0;else{var at=n(u);at!==null&&_e(E,at.startTime-D),on=!1}return on}finally{f=null,d=H,p=!1}}var I=!1,b=null,R=-1,j=5,O=-1;function ue(){return!(e.unstable_now()-O<j)}function ye(){if(b!==null){var $=e.unstable_now();O=$;var D=!0;try{D=b(!0,$)}finally{D?Le():(I=!1,b=null)}}else I=!1}var Le;if(typeof h=="function")Le=function(){h(ye)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,_n=Be.port2;Be.port1.onmessage=ye,Le=function(){_n.postMessage(null)}}else Le=function(){_(ye,0)};function wn($){b=$,I||(I=!0,Le())}function _e($,D){R=_(function(){$(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){g||p||(g=!0,wn(T))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function($){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var H=d;d=D;try{return $()}finally{d=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,D){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var H=d;d=$;try{return D()}finally{d=H}},e.unstable_scheduleCallback=function($,D,H){var se=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?se+H:se):H=se,$){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=H+ae,$={id:c++,callback:D,priorityLevel:$,startTime:H,expirationTime:ae,sortIndex:-1},H>se?($.sortIndex=H,t(u,$),n(l)===null&&$===n(u)&&(m?(v(R),R=-1):m=!0,_e(E,H-se))):($.sortIndex=ae,t(l,$),g||p||(g=!0,wn(T))),$},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function($){var D=d;return function(){var H=d;d=D;try{return $.apply(this,arguments)}finally{d=H}}}})(JI);XI.exports=JI;var h$=XI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZI=S,hn=h$;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eC=new Set,jl={};function Do(e,t){$s(e,t),$s(e+"Capture",t)}function $s(e,t){for(jl[e]=t,e=0;e<t.length;e++)eC.add(t[e])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sg=Object.prototype.hasOwnProperty,p$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gw={},vw={};function m$(e){return Sg.call(vw,e)?!0:Sg.call(gw,e)?!1:p$.test(e)?vw[e]=!0:(gw[e]=!0,!1)}function g$(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function v$(e,t,n,r){if(t===null||typeof t>"u"||g$(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Gt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ct[e]=new Gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ct[t]=new Gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ct[e]=new Gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ct[e]=new Gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ct[e]=new Gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ct[e]=new Gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ct[e]=new Gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ct[e]=new Gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ct[e]=new Gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qy=/[\-:]([a-z])/g;function Xy(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qy,Xy);Ct[t]=new Gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qy,Xy);Ct[t]=new Gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qy,Xy);Ct[t]=new Gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ct[e]=new Gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ct[e]=new Gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jy(e,t,n,r){var i=Ct.hasOwnProperty(t)?Ct[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(v$(t,n,i,r)&&(n=null),r||i===null?m$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zr=ZI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sc=Symbol.for("react.element"),ns=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),Zy=Symbol.for("react.strict_mode"),bg=Symbol.for("react.profiler"),tC=Symbol.for("react.provider"),nC=Symbol.for("react.context"),e0=Symbol.for("react.forward_ref"),Tg=Symbol.for("react.suspense"),Ig=Symbol.for("react.suspense_list"),t0=Symbol.for("react.memo"),ei=Symbol.for("react.lazy"),rC=Symbol.for("react.offscreen"),yw=Symbol.iterator;function Na(e){return e===null||typeof e!="object"?null:(e=yw&&e[yw]||e["@@iterator"],typeof e=="function"?e:null)}var De=Object.assign,Jp;function Za(e){if(Jp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jp=t&&t[1]||""}return`
`+Jp+e}var Zp=!1;function em(e,t){if(!e||Zp)return"";Zp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Zp=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Za(e):""}function y$(e){switch(e.tag){case 5:return Za(e.type);case 16:return Za("Lazy");case 13:return Za("Suspense");case 19:return Za("SuspenseList");case 0:case 2:case 15:return e=em(e.type,!1),e;case 11:return e=em(e.type.render,!1),e;case 1:return e=em(e.type,!0),e;default:return""}}function Cg(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rs:return"Fragment";case ns:return"Portal";case bg:return"Profiler";case Zy:return"StrictMode";case Tg:return"Suspense";case Ig:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nC:return(e.displayName||"Context")+".Consumer";case tC:return(e._context.displayName||"Context")+".Provider";case e0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case t0:return t=e.displayName||null,t!==null?t:Cg(e.type)||"Memo";case ei:t=e._payload,e=e._init;try{return Cg(e(t))}catch{}}return null}function _$(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cg(t);case 8:return t===Zy?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iC(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function w$(e){var t=iC(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bc(e){e._valueTracker||(e._valueTracker=w$(e))}function oC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=iC(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xg(e,t){var n=t.checked;return De({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _w(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sC(e,t){t=t.checked,t!=null&&Jy(e,"checked",t,!1)}function kg(e,t){sC(e,t);var n=xi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ag(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ag(e,t.type,xi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ww(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ag(e,t,n){(t!=="number"||Zf(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var el=Array.isArray;function ws(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pg(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return De({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ew(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(el(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xi(n)}}function aC(e,t){var n=xi(t.value),r=xi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sw(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rg(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tc,uC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tc=Tc||document.createElement("div"),Tc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ml={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E$=["Webkit","ms","Moz","O"];Object.keys(ml).forEach(function(e){E$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ml[t]=ml[e]})});function cC(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ml.hasOwnProperty(e)&&ml[e]?(""+t).trim():t+"px"}function fC(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cC(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var S$=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Og(e,t){if(t){if(S$[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Ng(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $g=null;function n0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dg=null,Es=null,Ss=null;function bw(e){if(e=ju(e)){if(typeof Dg!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ph(t),Dg(e.stateNode,e.type,t))}}function dC(e){Es?Ss?Ss.push(e):Ss=[e]:Es=e}function hC(){if(Es){var e=Es,t=Ss;if(Ss=Es=null,bw(e),t)for(e=0;e<t.length;e++)bw(t[e])}}function pC(e,t){return e(t)}function mC(){}var tm=!1;function gC(e,t,n){if(tm)return e(t,n);tm=!0;try{return pC(e,t,n)}finally{tm=!1,(Es!==null||Ss!==null)&&(mC(),hC())}}function Fl(e,t){var n=e.stateNode;if(n===null)return null;var r=ph(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Mg=!1;if(Pr)try{var $a={};Object.defineProperty($a,"passive",{get:function(){Mg=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{Mg=!1}function b$(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var gl=!1,ed=null,td=!1,Lg=null,T$={onError:function(e){gl=!0,ed=e}};function I$(e,t,n,r,i,o,s,a,l){gl=!1,ed=null,b$.apply(T$,arguments)}function C$(e,t,n,r,i,o,s,a,l){if(I$.apply(this,arguments),gl){if(gl){var u=ed;gl=!1,ed=null}else throw Error(P(198));td||(td=!0,Lg=u)}}function Mo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vC(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tw(e){if(Mo(e)!==e)throw Error(P(188))}function x$(e){var t=e.alternate;if(!t){if(t=Mo(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Tw(i),e;if(o===r)return Tw(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function yC(e){return e=x$(e),e!==null?_C(e):null}function _C(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_C(e);if(t!==null)return t;e=e.sibling}return null}var wC=hn.unstable_scheduleCallback,Iw=hn.unstable_cancelCallback,k$=hn.unstable_shouldYield,A$=hn.unstable_requestPaint,We=hn.unstable_now,P$=hn.unstable_getCurrentPriorityLevel,r0=hn.unstable_ImmediatePriority,EC=hn.unstable_UserBlockingPriority,nd=hn.unstable_NormalPriority,R$=hn.unstable_LowPriority,SC=hn.unstable_IdlePriority,ch=null,lr=null;function O$(e){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(ch,e,void 0,(e.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:D$,N$=Math.log,$$=Math.LN2;function D$(e){return e>>>=0,e===0?32:31-(N$(e)/$$|0)|0}var Ic=64,Cc=4194304;function tl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rd(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=tl(a):(o&=s,o!==0&&(r=tl(o)))}else s=n&~i,s!==0?r=tl(s):o!==0&&(r=tl(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zn(t),i=1<<n,r|=e[n],t&=~i;return r}function M$(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L$(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-zn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=M$(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function jg(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bC(){var e=Ic;return Ic<<=1,!(Ic&4194240)&&(Ic=64),e}function nm(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mu(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zn(t),e[t]=n}function j$(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-zn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function i0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function TC(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var IC,o0,CC,xC,kC,Vg=!1,xc=[],hi=null,pi=null,mi=null,Ul=new Map,zl=new Map,ni=[],V$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cw(e,t){switch(e){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":mi=null;break;case"pointerover":case"pointerout":Ul.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zl.delete(t.pointerId)}}function Da(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ju(t),t!==null&&o0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function F$(e,t,n,r,i){switch(t){case"focusin":return hi=Da(hi,e,t,n,r,i),!0;case"dragenter":return pi=Da(pi,e,t,n,r,i),!0;case"mouseover":return mi=Da(mi,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ul.set(o,Da(Ul.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,zl.set(o,Da(zl.get(o)||null,e,t,n,r,i)),!0}return!1}function AC(e){var t=Zi(e.target);if(t!==null){var n=Mo(t);if(n!==null){if(t=n.tag,t===13){if(t=vC(n),t!==null){e.blockedOn=t,kC(e.priority,function(){CC(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _f(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fg(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$g=r,n.target.dispatchEvent(r),$g=null}else return t=ju(n),t!==null&&o0(t),e.blockedOn=n,!1;t.shift()}return!0}function xw(e,t,n){_f(e)&&n.delete(t)}function U$(){Vg=!1,hi!==null&&_f(hi)&&(hi=null),pi!==null&&_f(pi)&&(pi=null),mi!==null&&_f(mi)&&(mi=null),Ul.forEach(xw),zl.forEach(xw)}function Ma(e,t){e.blockedOn===t&&(e.blockedOn=null,Vg||(Vg=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,U$)))}function Bl(e){function t(i){return Ma(i,e)}if(0<xc.length){Ma(xc[0],e);for(var n=1;n<xc.length;n++){var r=xc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hi!==null&&Ma(hi,e),pi!==null&&Ma(pi,e),mi!==null&&Ma(mi,e),Ul.forEach(t),zl.forEach(t),n=0;n<ni.length;n++)r=ni[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ni.length&&(n=ni[0],n.blockedOn===null);)AC(n),n.blockedOn===null&&ni.shift()}var bs=zr.ReactCurrentBatchConfig,id=!0;function z$(e,t,n,r){var i=pe,o=bs.transition;bs.transition=null;try{pe=1,s0(e,t,n,r)}finally{pe=i,bs.transition=o}}function B$(e,t,n,r){var i=pe,o=bs.transition;bs.transition=null;try{pe=4,s0(e,t,n,r)}finally{pe=i,bs.transition=o}}function s0(e,t,n,r){if(id){var i=Fg(e,t,n,r);if(i===null)dm(e,t,r,od,n),Cw(e,r);else if(F$(i,e,t,n,r))r.stopPropagation();else if(Cw(e,r),t&4&&-1<V$.indexOf(e)){for(;i!==null;){var o=ju(i);if(o!==null&&IC(o),o=Fg(e,t,n,r),o===null&&dm(e,t,r,od,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else dm(e,t,r,null,n)}}var od=null;function Fg(e,t,n,r){if(od=null,e=n0(r),e=Zi(e),e!==null)if(t=Mo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vC(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return od=e,null}function PC(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P$()){case r0:return 1;case EC:return 4;case nd:case R$:return 16;case SC:return 536870912;default:return 16}default:return 16}}var li=null,a0=null,wf=null;function RC(){if(wf)return wf;var e,t=a0,n=t.length,r,i="value"in li?li.value:li.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return wf=i.slice(e,1<r?1-r:void 0)}function Ef(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kc(){return!0}function kw(){return!1}function gn(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?kc:kw,this.isPropagationStopped=kw,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kc)},persist:function(){},isPersistent:kc}),t}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},l0=gn(ua),Lu=De({},ua,{view:0,detail:0}),W$=gn(Lu),rm,im,La,fh=De({},Lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:u0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==La&&(La&&e.type==="mousemove"?(rm=e.screenX-La.screenX,im=e.screenY-La.screenY):im=rm=0,La=e),rm)},movementY:function(e){return"movementY"in e?e.movementY:im}}),Aw=gn(fh),H$=De({},fh,{dataTransfer:0}),q$=gn(H$),G$=De({},Lu,{relatedTarget:0}),om=gn(G$),K$=De({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),Y$=gn(K$),Q$=De({},ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),X$=gn(Q$),J$=De({},ua,{data:0}),Pw=gn(J$),Z$={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nD(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tD[e])?!!t[e]:!1}function u0(){return nD}var rD=De({},Lu,{key:function(e){if(e.key){var t=Z$[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ef(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eD[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:u0,charCode:function(e){return e.type==="keypress"?Ef(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ef(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iD=gn(rD),oD=De({},fh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rw=gn(oD),sD=De({},Lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:u0}),aD=gn(sD),lD=De({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),uD=gn(lD),cD=De({},fh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fD=gn(cD),dD=[9,13,27,32],c0=Pr&&"CompositionEvent"in window,vl=null;Pr&&"documentMode"in document&&(vl=document.documentMode);var hD=Pr&&"TextEvent"in window&&!vl,OC=Pr&&(!c0||vl&&8<vl&&11>=vl),Ow=" ",Nw=!1;function NC(e,t){switch(e){case"keyup":return dD.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $C(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var is=!1;function pD(e,t){switch(e){case"compositionend":return $C(t);case"keypress":return t.which!==32?null:(Nw=!0,Ow);case"textInput":return e=t.data,e===Ow&&Nw?null:e;default:return null}}function mD(e,t){if(is)return e==="compositionend"||!c0&&NC(e,t)?(e=RC(),wf=a0=li=null,is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return OC&&t.locale!=="ko"?null:t.data;default:return null}}var gD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $w(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gD[e.type]:t==="textarea"}function DC(e,t,n,r){dC(r),t=sd(t,"onChange"),0<t.length&&(n=new l0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yl=null,Wl=null;function vD(e){qC(e,0)}function dh(e){var t=as(e);if(oC(t))return e}function yD(e,t){if(e==="change")return t}var MC=!1;if(Pr){var sm;if(Pr){var am="oninput"in document;if(!am){var Dw=document.createElement("div");Dw.setAttribute("oninput","return;"),am=typeof Dw.oninput=="function"}sm=am}else sm=!1;MC=sm&&(!document.documentMode||9<document.documentMode)}function Mw(){yl&&(yl.detachEvent("onpropertychange",LC),Wl=yl=null)}function LC(e){if(e.propertyName==="value"&&dh(Wl)){var t=[];DC(t,Wl,e,n0(e)),gC(vD,t)}}function _D(e,t,n){e==="focusin"?(Mw(),yl=t,Wl=n,yl.attachEvent("onpropertychange",LC)):e==="focusout"&&Mw()}function wD(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dh(Wl)}function ED(e,t){if(e==="click")return dh(t)}function SD(e,t){if(e==="input"||e==="change")return dh(t)}function bD(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qn=typeof Object.is=="function"?Object.is:bD;function Hl(e,t){if(qn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sg.call(t,i)||!qn(e[i],t[i]))return!1}return!0}function Lw(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jw(e,t){var n=Lw(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lw(n)}}function jC(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jC(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function VC(){for(var e=window,t=Zf();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zf(e.document)}return t}function f0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function TD(e){var t=VC(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jC(n.ownerDocument.documentElement,n)){if(r!==null&&f0(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=jw(n,o);var s=jw(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ID=Pr&&"documentMode"in document&&11>=document.documentMode,os=null,Ug=null,_l=null,zg=!1;function Vw(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zg||os==null||os!==Zf(r)||(r=os,"selectionStart"in r&&f0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_l&&Hl(_l,r)||(_l=r,r=sd(Ug,"onSelect"),0<r.length&&(t=new l0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=os)))}function Ac(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ss={animationend:Ac("Animation","AnimationEnd"),animationiteration:Ac("Animation","AnimationIteration"),animationstart:Ac("Animation","AnimationStart"),transitionend:Ac("Transition","TransitionEnd")},lm={},FC={};Pr&&(FC=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function hh(e){if(lm[e])return lm[e];if(!ss[e])return e;var t=ss[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in FC)return lm[e]=t[n];return e}var UC=hh("animationend"),zC=hh("animationiteration"),BC=hh("animationstart"),WC=hh("transitionend"),HC=new Map,Fw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mi(e,t){HC.set(e,t),Do(t,[e])}for(var um=0;um<Fw.length;um++){var cm=Fw[um],CD=cm.toLowerCase(),xD=cm[0].toUpperCase()+cm.slice(1);Mi(CD,"on"+xD)}Mi(UC,"onAnimationEnd");Mi(zC,"onAnimationIteration");Mi(BC,"onAnimationStart");Mi("dblclick","onDoubleClick");Mi("focusin","onFocus");Mi("focusout","onBlur");Mi(WC,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);Do("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Do("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Do("onBeforeInput",["compositionend","keypress","textInput","paste"]);Do("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Do("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Do("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kD=new Set("cancel close invalid load scroll toggle".split(" ").concat(nl));function Uw(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,C$(r,t,void 0,e),e.currentTarget=null}function qC(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Uw(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Uw(i,a,u),o=l}}}if(td)throw e=Lg,td=!1,Lg=null,e}function Se(e,t){var n=t[Gg];n===void 0&&(n=t[Gg]=new Set);var r=e+"__bubble";n.has(r)||(GC(t,e,2,!1),n.add(r))}function fm(e,t,n){var r=0;t&&(r|=4),GC(n,e,r,t)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function ql(e){if(!e[Pc]){e[Pc]=!0,eC.forEach(function(n){n!=="selectionchange"&&(kD.has(n)||fm(n,!1,e),fm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pc]||(t[Pc]=!0,fm("selectionchange",!1,t))}}function GC(e,t,n,r){switch(PC(t)){case 1:var i=z$;break;case 4:i=B$;break;default:i=s0}n=i.bind(null,t,n,e),i=void 0,!Mg||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function dm(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Zi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}gC(function(){var u=o,c=n0(n),f=[];e:{var d=HC.get(e);if(d!==void 0){var p=l0,g=e;switch(e){case"keypress":if(Ef(n)===0)break e;case"keydown":case"keyup":p=iD;break;case"focusin":g="focus",p=om;break;case"focusout":g="blur",p=om;break;case"beforeblur":case"afterblur":p=om;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Aw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=q$;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=aD;break;case UC:case zC:case BC:p=Y$;break;case WC:p=uD;break;case"scroll":p=W$;break;case"wheel":p=fD;break;case"copy":case"cut":case"paste":p=X$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rw}var m=(t&4)!==0,_=!m&&e==="scroll",v=m?d!==null?d+"Capture":null:d;m=[];for(var h=u,y;h!==null;){y=h;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,v!==null&&(E=Fl(h,v),E!=null&&m.push(Gl(h,E,y)))),_)break;h=h.return}0<m.length&&(d=new p(d,g,null,n,c),f.push({event:d,listeners:m}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==$g&&(g=n.relatedTarget||n.fromElement)&&(Zi(g)||g[Rr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Zi(g):null,g!==null&&(_=Mo(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(m=Aw,E="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(m=Rw,E="onPointerLeave",v="onPointerEnter",h="pointer"),_=p==null?d:as(p),y=g==null?d:as(g),d=new m(E,h+"leave",p,n,c),d.target=_,d.relatedTarget=y,E=null,Zi(c)===u&&(m=new m(v,h+"enter",g,n,c),m.target=y,m.relatedTarget=_,E=m),_=E,p&&g)t:{for(m=p,v=g,h=0,y=m;y;y=zo(y))h++;for(y=0,E=v;E;E=zo(E))y++;for(;0<h-y;)m=zo(m),h--;for(;0<y-h;)v=zo(v),y--;for(;h--;){if(m===v||v!==null&&m===v.alternate)break t;m=zo(m),v=zo(v)}m=null}else m=null;p!==null&&zw(f,d,p,m,!1),g!==null&&_!==null&&zw(f,_,g,m,!0)}}e:{if(d=u?as(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=yD;else if($w(d))if(MC)T=SD;else{T=wD;var I=_D}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=ED);if(T&&(T=T(e,u))){DC(f,T,n,c);break e}I&&I(e,d,u),e==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&Ag(d,"number",d.value)}switch(I=u?as(u):window,e){case"focusin":($w(I)||I.contentEditable==="true")&&(os=I,Ug=u,_l=null);break;case"focusout":_l=Ug=os=null;break;case"mousedown":zg=!0;break;case"contextmenu":case"mouseup":case"dragend":zg=!1,Vw(f,n,c);break;case"selectionchange":if(ID)break;case"keydown":case"keyup":Vw(f,n,c)}var b;if(c0)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else is?NC(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(OC&&n.locale!=="ko"&&(is||R!=="onCompositionStart"?R==="onCompositionEnd"&&is&&(b=RC()):(li=c,a0="value"in li?li.value:li.textContent,is=!0)),I=sd(u,R),0<I.length&&(R=new Pw(R,e,null,n,c),f.push({event:R,listeners:I}),b?R.data=b:(b=$C(n),b!==null&&(R.data=b)))),(b=hD?pD(e,n):mD(e,n))&&(u=sd(u,"onBeforeInput"),0<u.length&&(c=new Pw("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=b))}qC(f,t)})}function Gl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sd(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fl(e,n),o!=null&&r.unshift(Gl(e,o,i)),o=Fl(e,t),o!=null&&r.push(Gl(e,o,i))),e=e.return}return r}function zo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zw(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Fl(n,o),l!=null&&s.unshift(Gl(n,l,a))):i||(l=Fl(n,o),l!=null&&s.push(Gl(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var AD=/\r\n?/g,PD=/\u0000|\uFFFD/g;function Bw(e){return(typeof e=="string"?e:""+e).replace(AD,`
`).replace(PD,"")}function Rc(e,t,n){if(t=Bw(t),Bw(e)!==t&&n)throw Error(P(425))}function ad(){}var Bg=null,Wg=null;function Hg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qg=typeof setTimeout=="function"?setTimeout:void 0,RD=typeof clearTimeout=="function"?clearTimeout:void 0,Ww=typeof Promise=="function"?Promise:void 0,OD=typeof queueMicrotask=="function"?queueMicrotask:typeof Ww<"u"?function(e){return Ww.resolve(null).then(e).catch(ND)}:qg;function ND(e){setTimeout(function(){throw e})}function hm(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Bl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bl(t)}function gi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hw(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ca=Math.random().toString(36).slice(2),rr="__reactFiber$"+ca,Kl="__reactProps$"+ca,Rr="__reactContainer$"+ca,Gg="__reactEvents$"+ca,$D="__reactListeners$"+ca,DD="__reactHandles$"+ca;function Zi(e){var t=e[rr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rr]||n[rr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hw(e);e!==null;){if(n=e[rr])return n;e=Hw(e)}return t}e=n,n=e.parentNode}return null}function ju(e){return e=e[rr]||e[Rr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function as(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ph(e){return e[Kl]||null}var Kg=[],ls=-1;function Li(e){return{current:e}}function ke(e){0>ls||(e.current=Kg[ls],Kg[ls]=null,ls--)}function we(e,t){ls++,Kg[ls]=e.current,e.current=t}var ki={},Lt=Li(ki),Jt=Li(!1),yo=ki;function Ds(e,t){var n=e.type.contextTypes;if(!n)return ki;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Zt(e){return e=e.childContextTypes,e!=null}function ld(){ke(Jt),ke(Lt)}function qw(e,t,n){if(Lt.current!==ki)throw Error(P(168));we(Lt,t),we(Jt,n)}function KC(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,_$(e)||"Unknown",i));return De({},n,r)}function ud(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ki,yo=Lt.current,we(Lt,e),we(Jt,Jt.current),!0}function Gw(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=KC(e,t,yo),r.__reactInternalMemoizedMergedChildContext=e,ke(Jt),ke(Lt),we(Lt,e)):ke(Jt),we(Jt,n)}var wr=null,mh=!1,pm=!1;function YC(e){wr===null?wr=[e]:wr.push(e)}function MD(e){mh=!0,YC(e)}function ji(){if(!pm&&wr!==null){pm=!0;var e=0,t=pe;try{var n=wr;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wr=null,mh=!1}catch(i){throw wr!==null&&(wr=wr.slice(e+1)),wC(r0,ji),i}finally{pe=t,pm=!1}}return null}var us=[],cs=0,cd=null,fd=0,Sn=[],bn=0,_o=null,Sr=1,br="";function Gi(e,t){us[cs++]=fd,us[cs++]=cd,cd=e,fd=t}function QC(e,t,n){Sn[bn++]=Sr,Sn[bn++]=br,Sn[bn++]=_o,_o=e;var r=Sr;e=br;var i=32-zn(r)-1;r&=~(1<<i),n+=1;var o=32-zn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Sr=1<<32-zn(t)+i|n<<i|r,br=o+e}else Sr=1<<o|n<<i|r,br=e}function d0(e){e.return!==null&&(Gi(e,1),QC(e,1,0))}function h0(e){for(;e===cd;)cd=us[--cs],us[cs]=null,fd=us[--cs],us[cs]=null;for(;e===_o;)_o=Sn[--bn],Sn[bn]=null,br=Sn[--bn],Sn[bn]=null,Sr=Sn[--bn],Sn[bn]=null}var fn=null,cn=null,Re=!1,Vn=null;function XC(e,t){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kw(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,fn=e,cn=gi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,fn=e,cn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_o!==null?{id:Sr,overflow:br}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,fn=e,cn=null,!0):!1;default:return!1}}function Yg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qg(e){if(Re){var t=cn;if(t){var n=t;if(!Kw(e,t)){if(Yg(e))throw Error(P(418));t=gi(n.nextSibling);var r=fn;t&&Kw(e,t)?XC(r,n):(e.flags=e.flags&-4097|2,Re=!1,fn=e)}}else{if(Yg(e))throw Error(P(418));e.flags=e.flags&-4097|2,Re=!1,fn=e}}}function Yw(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;fn=e}function Oc(e){if(e!==fn)return!1;if(!Re)return Yw(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hg(e.type,e.memoizedProps)),t&&(t=cn)){if(Yg(e))throw JC(),Error(P(418));for(;t;)XC(e,t),t=gi(t.nextSibling)}if(Yw(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){cn=gi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}cn=null}}else cn=fn?gi(e.stateNode.nextSibling):null;return!0}function JC(){for(var e=cn;e;)e=gi(e.nextSibling)}function Ms(){cn=fn=null,Re=!1}function p0(e){Vn===null?Vn=[e]:Vn.push(e)}var LD=zr.ReactCurrentBatchConfig;function Ln(e,t){if(e&&e.defaultProps){t=De({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var dd=Li(null),hd=null,fs=null,m0=null;function g0(){m0=fs=hd=null}function v0(e){var t=dd.current;ke(dd),e._currentValue=t}function Xg(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ts(e,t){hd=e,m0=fs=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qt=!0),e.firstContext=null)}function An(e){var t=e._currentValue;if(m0!==e)if(e={context:e,memoizedValue:t,next:null},fs===null){if(hd===null)throw Error(P(308));fs=e,hd.dependencies={lanes:0,firstContext:e}}else fs=fs.next=e;return t}var eo=null;function y0(e){eo===null?eo=[e]:eo.push(e)}function ZC(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,y0(t)):(n.next=i.next,i.next=n),t.interleaved=n,Or(e,r)}function Or(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ti=!1;function _0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ex(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vi(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Or(e,n)}return i=r.interleaved,i===null?(t.next=t,y0(r)):(t.next=i.next,i.next=t),r.interleaved=t,Or(e,n)}function Sf(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,i0(e,n)}}function Qw(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pd(e,t,n,r){var i=e.updateQueue;ti=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,m=a;switch(d=t,p=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=De({},f,d);break e;case 2:ti=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Eo|=s,e.lanes=s,e.memoizedState=f}}function Xw(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var tx=new ZI.Component().refs;function Jg(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gh={isMounted:function(e){return(e=e._reactInternals)?Mo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Wt(),i=_i(e),o=xr(r,i);o.payload=t,n!=null&&(o.callback=n),t=vi(e,o,i),t!==null&&(Bn(t,e,i,r),Sf(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Wt(),i=_i(e),o=xr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vi(e,o,i),t!==null&&(Bn(t,e,i,r),Sf(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wt(),r=_i(e),i=xr(n,r);i.tag=2,t!=null&&(i.callback=t),t=vi(e,i,r),t!==null&&(Bn(t,e,r,n),Sf(t,e,r))}};function Jw(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Hl(n,r)||!Hl(i,o):!0}function nx(e,t,n){var r=!1,i=ki,o=t.contextType;return typeof o=="object"&&o!==null?o=An(o):(i=Zt(t)?yo:Lt.current,r=t.contextTypes,o=(r=r!=null)?Ds(e,i):ki),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gh,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zw(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gh.enqueueReplaceState(t,t.state,null)}function Zg(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=tx,_0(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=An(o):(o=Zt(t)?yo:Lt.current,i.context=Ds(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Jg(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gh.enqueueReplaceState(i,i.state,null),pd(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ja(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===tx&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Nc(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function eE(e){var t=e._init;return t(e._payload)}function rx(e){function t(v,h){if(e){var y=v.deletions;y===null?(v.deletions=[h],v.flags|=16):y.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=wi(v,h),v.index=0,v.sibling=null,v}function o(v,h,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<h?(v.flags|=2,h):y):(v.flags|=2,h)):(v.flags|=1048576,h)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,h,y,E){return h===null||h.tag!==6?(h=Em(y,v.mode,E),h.return=v,h):(h=i(h,y),h.return=v,h)}function l(v,h,y,E){var T=y.type;return T===rs?c(v,h,y.props.children,E,y.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ei&&eE(T)===h.type)?(E=i(h,y.props),E.ref=ja(v,h,y),E.return=v,E):(E=kf(y.type,y.key,y.props,null,v.mode,E),E.ref=ja(v,h,y),E.return=v,E)}function u(v,h,y,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Sm(y,v.mode,E),h.return=v,h):(h=i(h,y.children||[]),h.return=v,h)}function c(v,h,y,E,T){return h===null||h.tag!==7?(h=fo(y,v.mode,E,T),h.return=v,h):(h=i(h,y),h.return=v,h)}function f(v,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Em(""+h,v.mode,y),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Sc:return y=kf(h.type,h.key,h.props,null,v.mode,y),y.ref=ja(v,null,h),y.return=v,y;case ns:return h=Sm(h,v.mode,y),h.return=v,h;case ei:var E=h._init;return f(v,E(h._payload),y)}if(el(h)||Na(h))return h=fo(h,v.mode,y,null),h.return=v,h;Nc(v,h)}return null}function d(v,h,y,E){var T=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(v,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sc:return y.key===T?l(v,h,y,E):null;case ns:return y.key===T?u(v,h,y,E):null;case ei:return T=y._init,d(v,h,T(y._payload),E)}if(el(y)||Na(y))return T!==null?null:c(v,h,y,E,null);Nc(v,y)}return null}function p(v,h,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(y)||null,a(h,v,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Sc:return v=v.get(E.key===null?y:E.key)||null,l(h,v,E,T);case ns:return v=v.get(E.key===null?y:E.key)||null,u(h,v,E,T);case ei:var I=E._init;return p(v,h,y,I(E._payload),T)}if(el(E)||Na(E))return v=v.get(y)||null,c(h,v,E,T,null);Nc(h,E)}return null}function g(v,h,y,E){for(var T=null,I=null,b=h,R=h=0,j=null;b!==null&&R<y.length;R++){b.index>R?(j=b,b=null):j=b.sibling;var O=d(v,b,y[R],E);if(O===null){b===null&&(b=j);break}e&&b&&O.alternate===null&&t(v,b),h=o(O,h,R),I===null?T=O:I.sibling=O,I=O,b=j}if(R===y.length)return n(v,b),Re&&Gi(v,R),T;if(b===null){for(;R<y.length;R++)b=f(v,y[R],E),b!==null&&(h=o(b,h,R),I===null?T=b:I.sibling=b,I=b);return Re&&Gi(v,R),T}for(b=r(v,b);R<y.length;R++)j=p(b,v,R,y[R],E),j!==null&&(e&&j.alternate!==null&&b.delete(j.key===null?R:j.key),h=o(j,h,R),I===null?T=j:I.sibling=j,I=j);return e&&b.forEach(function(ue){return t(v,ue)}),Re&&Gi(v,R),T}function m(v,h,y,E){var T=Na(y);if(typeof T!="function")throw Error(P(150));if(y=T.call(y),y==null)throw Error(P(151));for(var I=T=null,b=h,R=h=0,j=null,O=y.next();b!==null&&!O.done;R++,O=y.next()){b.index>R?(j=b,b=null):j=b.sibling;var ue=d(v,b,O.value,E);if(ue===null){b===null&&(b=j);break}e&&b&&ue.alternate===null&&t(v,b),h=o(ue,h,R),I===null?T=ue:I.sibling=ue,I=ue,b=j}if(O.done)return n(v,b),Re&&Gi(v,R),T;if(b===null){for(;!O.done;R++,O=y.next())O=f(v,O.value,E),O!==null&&(h=o(O,h,R),I===null?T=O:I.sibling=O,I=O);return Re&&Gi(v,R),T}for(b=r(v,b);!O.done;R++,O=y.next())O=p(b,v,R,O.value,E),O!==null&&(e&&O.alternate!==null&&b.delete(O.key===null?R:O.key),h=o(O,h,R),I===null?T=O:I.sibling=O,I=O);return e&&b.forEach(function(ye){return t(v,ye)}),Re&&Gi(v,R),T}function _(v,h,y,E){if(typeof y=="object"&&y!==null&&y.type===rs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Sc:e:{for(var T=y.key,I=h;I!==null;){if(I.key===T){if(T=y.type,T===rs){if(I.tag===7){n(v,I.sibling),h=i(I,y.props.children),h.return=v,v=h;break e}}else if(I.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ei&&eE(T)===I.type){n(v,I.sibling),h=i(I,y.props),h.ref=ja(v,I,y),h.return=v,v=h;break e}n(v,I);break}else t(v,I);I=I.sibling}y.type===rs?(h=fo(y.props.children,v.mode,E,y.key),h.return=v,v=h):(E=kf(y.type,y.key,y.props,null,v.mode,E),E.ref=ja(v,h,y),E.return=v,v=E)}return s(v);case ns:e:{for(I=y.key;h!==null;){if(h.key===I)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(v,h.sibling),h=i(h,y.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=Sm(y,v.mode,E),h.return=v,v=h}return s(v);case ei:return I=y._init,_(v,h,I(y._payload),E)}if(el(y))return g(v,h,y,E);if(Na(y))return m(v,h,y,E);Nc(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,y),h.return=v,v=h):(n(v,h),h=Em(y,v.mode,E),h.return=v,v=h),s(v)):n(v,h)}return _}var Ls=rx(!0),ix=rx(!1),Vu={},ur=Li(Vu),Yl=Li(Vu),Ql=Li(Vu);function to(e){if(e===Vu)throw Error(P(174));return e}function w0(e,t){switch(we(Ql,t),we(Yl,e),we(ur,Vu),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rg(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rg(t,e)}ke(ur),we(ur,t)}function js(){ke(ur),ke(Yl),ke(Ql)}function ox(e){to(Ql.current);var t=to(ur.current),n=Rg(t,e.type);t!==n&&(we(Yl,e),we(ur,n))}function E0(e){Yl.current===e&&(ke(ur),ke(Yl))}var Ne=Li(0);function md(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mm=[];function S0(){for(var e=0;e<mm.length;e++)mm[e]._workInProgressVersionPrimary=null;mm.length=0}var bf=zr.ReactCurrentDispatcher,gm=zr.ReactCurrentBatchConfig,wo=0,$e=null,tt=null,ft=null,gd=!1,wl=!1,Xl=0,jD=0;function kt(){throw Error(P(321))}function b0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qn(e[n],t[n]))return!1;return!0}function T0(e,t,n,r,i,o){if(wo=o,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bf.current=e===null||e.memoizedState===null?zD:BD,e=n(r,i),wl){o=0;do{if(wl=!1,Xl=0,25<=o)throw Error(P(301));o+=1,ft=tt=null,t.updateQueue=null,bf.current=WD,e=n(r,i)}while(wl)}if(bf.current=vd,t=tt!==null&&tt.next!==null,wo=0,ft=tt=$e=null,gd=!1,t)throw Error(P(300));return e}function I0(){var e=Xl!==0;return Xl=0,e}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?$e.memoizedState=ft=e:ft=ft.next=e,ft}function Pn(){if(tt===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var t=ft===null?$e.memoizedState:ft.next;if(t!==null)ft=t,tt=e;else{if(e===null)throw Error(P(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ft===null?$e.memoizedState=ft=e:ft=ft.next=e}return ft}function Jl(e,t){return typeof t=="function"?t(e):t}function vm(e){var t=Pn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=tt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((wo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,$e.lanes|=c,Eo|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,qn(r,t.memoizedState)||(Qt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,$e.lanes|=o,Eo|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ym(e){var t=Pn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);qn(o,t.memoizedState)||(Qt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function sx(){}function ax(e,t){var n=$e,r=Pn(),i=t(),o=!qn(r.memoizedState,i);if(o&&(r.memoizedState=i,Qt=!0),r=r.queue,C0(cx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,Zl(9,ux.bind(null,n,r,i,t),void 0,null),ht===null)throw Error(P(349));wo&30||lx(n,t,i)}return i}function lx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ux(e,t,n,r){t.value=n,t.getSnapshot=r,fx(t)&&dx(e)}function cx(e,t,n){return n(function(){fx(t)&&dx(e)})}function fx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qn(e,n)}catch{return!0}}function dx(e){var t=Or(e,1);t!==null&&Bn(t,e,1,-1)}function tE(e){var t=Zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jl,lastRenderedState:e},t.queue=e,e=e.dispatch=UD.bind(null,$e,e),[t.memoizedState,e]}function Zl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hx(){return Pn().memoizedState}function Tf(e,t,n,r){var i=Zn();$e.flags|=e,i.memoizedState=Zl(1|t,n,void 0,r===void 0?null:r)}function vh(e,t,n,r){var i=Pn();r=r===void 0?null:r;var o=void 0;if(tt!==null){var s=tt.memoizedState;if(o=s.destroy,r!==null&&b0(r,s.deps)){i.memoizedState=Zl(t,n,o,r);return}}$e.flags|=e,i.memoizedState=Zl(1|t,n,o,r)}function nE(e,t){return Tf(8390656,8,e,t)}function C0(e,t){return vh(2048,8,e,t)}function px(e,t){return vh(4,2,e,t)}function mx(e,t){return vh(4,4,e,t)}function gx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vx(e,t,n){return n=n!=null?n.concat([e]):null,vh(4,4,gx.bind(null,t,e),n)}function x0(){}function yx(e,t){var n=Pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&b0(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _x(e,t){var n=Pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&b0(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wx(e,t,n){return wo&21?(qn(n,t)||(n=bC(),$e.lanes|=n,Eo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qt=!0),e.memoizedState=n)}function VD(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=gm.transition;gm.transition={};try{e(!1),t()}finally{pe=n,gm.transition=r}}function Ex(){return Pn().memoizedState}function FD(e,t,n){var r=_i(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sx(e))bx(t,n);else if(n=ZC(e,t,n,r),n!==null){var i=Wt();Bn(n,e,r,i),Tx(n,t,r)}}function UD(e,t,n){var r=_i(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sx(e))bx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,qn(a,s)){var l=t.interleaved;l===null?(i.next=i,y0(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ZC(e,t,i,r),n!==null&&(i=Wt(),Bn(n,e,r,i),Tx(n,t,r))}}function Sx(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function bx(e,t){wl=gd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,i0(e,n)}}var vd={readContext:An,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},zD={readContext:An,useCallback:function(e,t){return Zn().memoizedState=[e,t===void 0?null:t],e},useContext:An,useEffect:nE,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tf(4194308,4,gx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tf(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tf(4,2,e,t)},useMemo:function(e,t){var n=Zn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=FD.bind(null,$e,e),[r.memoizedState,e]},useRef:function(e){var t=Zn();return e={current:e},t.memoizedState=e},useState:tE,useDebugValue:x0,useDeferredValue:function(e){return Zn().memoizedState=e},useTransition:function(){var e=tE(!1),t=e[0];return e=VD.bind(null,e[1]),Zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$e,i=Zn();if(Re){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ht===null)throw Error(P(349));wo&30||lx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,nE(cx.bind(null,r,o,e),[e]),r.flags|=2048,Zl(9,ux.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Zn(),t=ht.identifierPrefix;if(Re){var n=br,r=Sr;n=(r&~(1<<32-zn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jD++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},BD={readContext:An,useCallback:yx,useContext:An,useEffect:C0,useImperativeHandle:vx,useInsertionEffect:px,useLayoutEffect:mx,useMemo:_x,useReducer:vm,useRef:hx,useState:function(){return vm(Jl)},useDebugValue:x0,useDeferredValue:function(e){var t=Pn();return wx(t,tt.memoizedState,e)},useTransition:function(){var e=vm(Jl)[0],t=Pn().memoizedState;return[e,t]},useMutableSource:sx,useSyncExternalStore:ax,useId:Ex,unstable_isNewReconciler:!1},WD={readContext:An,useCallback:yx,useContext:An,useEffect:C0,useImperativeHandle:vx,useInsertionEffect:px,useLayoutEffect:mx,useMemo:_x,useReducer:ym,useRef:hx,useState:function(){return ym(Jl)},useDebugValue:x0,useDeferredValue:function(e){var t=Pn();return tt===null?t.memoizedState=e:wx(t,tt.memoizedState,e)},useTransition:function(){var e=ym(Jl)[0],t=Pn().memoizedState;return[e,t]},useMutableSource:sx,useSyncExternalStore:ax,useId:Ex,unstable_isNewReconciler:!1};function Vs(e,t){try{var n="",r=t;do n+=y$(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _m(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ev(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var HD=typeof WeakMap=="function"?WeakMap:Map;function Ix(e,t,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_d||(_d=!0,cv=r),ev(e,t)},n}function Cx(e,t,n){n=xr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ev(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ev(e,t),typeof r!="function"&&(yi===null?yi=new Set([this]):yi.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function rE(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new HD;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=oM.bind(null,e,t,n),t.then(e,e))}function iE(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oE(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xr(-1,1),t.tag=2,vi(n,t,1))),n.lanes|=1),e)}var qD=zr.ReactCurrentOwner,Qt=!1;function zt(e,t,n,r){t.child=e===null?ix(t,null,n,r):Ls(t,e.child,n,r)}function sE(e,t,n,r,i){n=n.render;var o=t.ref;return Ts(t,i),r=T0(e,t,n,r,o,i),n=I0(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nr(e,t,i)):(Re&&n&&d0(t),t.flags|=1,zt(e,t,r,i),t.child)}function aE(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!D0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xx(e,t,o,r,i)):(e=kf(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hl,n(s,r)&&e.ref===t.ref)return Nr(e,t,i)}return t.flags|=1,e=wi(o,r),e.ref=t.ref,e.return=t,t.child=e}function xx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hl(o,r)&&e.ref===t.ref)if(Qt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Qt=!0);else return t.lanes=e.lanes,Nr(e,t,i)}return tv(e,t,n,r,i)}function kx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(hs,ln),ln|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(hs,ln),ln|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,we(hs,ln),ln|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,we(hs,ln),ln|=r;return zt(e,t,i,n),t.child}function Ax(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tv(e,t,n,r,i){var o=Zt(n)?yo:Lt.current;return o=Ds(t,o),Ts(t,i),n=T0(e,t,n,r,o,i),r=I0(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nr(e,t,i)):(Re&&r&&d0(t),t.flags|=1,zt(e,t,n,i),t.child)}function lE(e,t,n,r,i){if(Zt(n)){var o=!0;ud(t)}else o=!1;if(Ts(t,i),t.stateNode===null)If(e,t),nx(t,n,r),Zg(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=Zt(n)?yo:Lt.current,u=Ds(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Zw(t,s,r,u),ti=!1;var d=t.memoizedState;s.state=d,pd(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Jt.current||ti?(typeof c=="function"&&(Jg(t,n,c,r),l=t.memoizedState),(a=ti||Jw(t,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ex(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ln(t.type,a),s.props=u,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=Zt(n)?yo:Lt.current,l=Ds(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Zw(t,s,r,l),ti=!1,d=t.memoizedState,s.state=d,pd(t,r,s,i);var g=t.memoizedState;a!==f||d!==g||Jt.current||ti?(typeof p=="function"&&(Jg(t,n,p,r),g=t.memoizedState),(u=ti||Jw(t,n,u,r,d,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return nv(e,t,n,r,o,i)}function nv(e,t,n,r,i,o){Ax(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Gw(t,n,!1),Nr(e,t,o);r=t.stateNode,qD.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ls(t,e.child,null,o),t.child=Ls(t,null,a,o)):zt(e,t,a,o),t.memoizedState=r.state,i&&Gw(t,n,!0),t.child}function Px(e){var t=e.stateNode;t.pendingContext?qw(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qw(e,t.context,!1),w0(e,t.containerInfo)}function uE(e,t,n,r,i){return Ms(),p0(i),t.flags|=256,zt(e,t,n,r),t.child}var rv={dehydrated:null,treeContext:null,retryLane:0};function iv(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rx(e,t,n){var r=t.pendingProps,i=Ne.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(Ne,i&1),e===null)return Qg(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=wh(s,r,0,null),e=fo(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=iv(n),t.memoizedState=rv,e):k0(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return GD(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=wi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=wi(a,o):(o=fo(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?iv(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=rv,r}return o=e.child,e=o.sibling,r=wi(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function k0(e,t){return t=wh({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $c(e,t,n,r){return r!==null&&p0(r),Ls(t,e.child,null,n),e=k0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function GD(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=_m(Error(P(422))),$c(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=wh({mode:"visible",children:r.children},i,0,null),o=fo(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ls(t,e.child,null,s),t.child.memoizedState=iv(s),t.memoizedState=rv,o);if(!(t.mode&1))return $c(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(P(419)),r=_m(o,r,void 0),$c(e,t,s,r)}if(a=(s&e.childLanes)!==0,Qt||a){if(r=ht,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Or(e,i),Bn(r,e,i,-1))}return $0(),r=_m(Error(P(421))),$c(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=sM.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,cn=gi(i.nextSibling),fn=t,Re=!0,Vn=null,e!==null&&(Sn[bn++]=Sr,Sn[bn++]=br,Sn[bn++]=_o,Sr=e.id,br=e.overflow,_o=t),t=k0(t,r.children),t.flags|=4096,t)}function cE(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xg(e.return,t,n)}function wm(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ox(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(zt(e,t,r.children,n),r=Ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cE(e,n,t);else if(e.tag===19)cE(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(Ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&md(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wm(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&md(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wm(t,!0,n,null,o);break;case"together":wm(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function If(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Eo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=wi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function KD(e,t,n){switch(t.tag){case 3:Px(t),Ms();break;case 5:ox(t);break;case 1:Zt(t.type)&&ud(t);break;case 4:w0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;we(dd,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(we(Ne,Ne.current&1),t.flags|=128,null):n&t.child.childLanes?Rx(e,t,n):(we(Ne,Ne.current&1),e=Nr(e,t,n),e!==null?e.sibling:null);we(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ox(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,kx(e,t,n)}return Nr(e,t,n)}var Nx,ov,$x,Dx;Nx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ov=function(){};$x=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,to(ur.current);var o=null;switch(n){case"input":i=xg(e,i),r=xg(e,r),o=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),o=[];break;case"textarea":i=Pg(e,i),r=Pg(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ad)}Og(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jl.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Se("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Dx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Va(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function At(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function YD(e,t,n){var r=t.pendingProps;switch(h0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(t),null;case 1:return Zt(t.type)&&ld(),At(t),null;case 3:return r=t.stateNode,js(),ke(Jt),ke(Lt),S0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vn!==null&&(hv(Vn),Vn=null))),ov(e,t),At(t),null;case 5:E0(t);var i=to(Ql.current);if(n=t.type,e!==null&&t.stateNode!=null)$x(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return At(t),null}if(e=to(ur.current),Oc(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[rr]=t,r[Kl]=o,e=(t.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<nl.length;i++)Se(nl[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":_w(r,o),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Se("invalid",r);break;case"textarea":Ew(r,o),Se("invalid",r)}Og(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Rc(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Rc(r.textContent,a,e),i=["children",""+a]):jl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Se("scroll",r)}switch(n){case"input":bc(r),ww(r,o,!0);break;case"textarea":bc(r),Sw(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ad)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lC(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[rr]=t,e[Kl]=r,Nx(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ng(n,r),n){case"dialog":Se("cancel",e),Se("close",e),i=r;break;case"iframe":case"object":case"embed":Se("load",e),i=r;break;case"video":case"audio":for(i=0;i<nl.length;i++)Se(nl[i],e);i=r;break;case"source":Se("error",e),i=r;break;case"img":case"image":case"link":Se("error",e),Se("load",e),i=r;break;case"details":Se("toggle",e),i=r;break;case"input":_w(e,r),i=xg(e,r),Se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Se("invalid",e);break;case"textarea":Ew(e,r),i=Pg(e,r),Se("invalid",e);break;default:i=r}Og(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?fC(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uC(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vl(e,l):typeof l=="number"&&Vl(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Se("scroll",e):l!=null&&Jy(e,o,l,s))}switch(n){case"input":bc(e),ww(e,r,!1);break;case"textarea":bc(e),Sw(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xi(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ws(e,!!r.multiple,o,!1):r.defaultValue!=null&&ws(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ad)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return At(t),null;case 6:if(e&&t.stateNode!=null)Dx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=to(Ql.current),to(ur.current),Oc(t)){if(r=t.stateNode,n=t.memoizedProps,r[rr]=t,(o=r.nodeValue!==n)&&(e=fn,e!==null))switch(e.tag){case 3:Rc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rc(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rr]=t,t.stateNode=r}return At(t),null;case 13:if(ke(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&cn!==null&&t.mode&1&&!(t.flags&128))JC(),Ms(),t.flags|=98560,o=!1;else if(o=Oc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[rr]=t}else Ms(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;At(t),o=!1}else Vn!==null&&(hv(Vn),Vn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ne.current&1?rt===0&&(rt=3):$0())),t.updateQueue!==null&&(t.flags|=4),At(t),null);case 4:return js(),ov(e,t),e===null&&ql(t.stateNode.containerInfo),At(t),null;case 10:return v0(t.type._context),At(t),null;case 17:return Zt(t.type)&&ld(),At(t),null;case 19:if(ke(Ne),o=t.memoizedState,o===null)return At(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Va(o,!1);else{if(rt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=md(e),s!==null){for(t.flags|=128,Va(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Ne,Ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&We()>Fs&&(t.flags|=128,r=!0,Va(o,!1),t.lanes=4194304)}else{if(!r)if(e=md(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Va(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Re)return At(t),null}else 2*We()-o.renderingStartTime>Fs&&n!==1073741824&&(t.flags|=128,r=!0,Va(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=We(),t.sibling=null,n=Ne.current,we(Ne,r?n&1|2:n&1),t):(At(t),null);case 22:case 23:return N0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ln&1073741824&&(At(t),t.subtreeFlags&6&&(t.flags|=8192)):At(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function QD(e,t){switch(h0(t),t.tag){case 1:return Zt(t.type)&&ld(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return js(),ke(Jt),ke(Lt),S0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return E0(t),null;case 13:if(ke(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Ms()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Ne),null;case 4:return js(),null;case 10:return v0(t.type._context),null;case 22:case 23:return N0(),null;case 24:return null;default:return null}}var Dc=!1,Nt=!1,XD=typeof WeakSet=="function"?WeakSet:Set,L=null;function ds(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(e,t,r)}else n.current=null}function sv(e,t,n){try{n()}catch(r){Fe(e,t,r)}}var fE=!1;function JD(e,t){if(Bg=id,e=VC(),f0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wg={focusedElem:e,selectionRange:n},id=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,_=g.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:Ln(t.type,m),_);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){Fe(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return g=fE,fE=!1,g}function El(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&sv(t,n,o)}i=i.next}while(i!==r)}}function yh(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function av(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mx(e){var t=e.alternate;t!==null&&(e.alternate=null,Mx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rr],delete t[Kl],delete t[Gg],delete t[$D],delete t[DD])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lx(e){return e.tag===5||e.tag===3||e.tag===4}function dE(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lv(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ad));else if(r!==4&&(e=e.child,e!==null))for(lv(e,t,n),e=e.sibling;e!==null;)lv(e,t,n),e=e.sibling}function uv(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(uv(e,t,n),e=e.sibling;e!==null;)uv(e,t,n),e=e.sibling}var yt=null,jn=!1;function qr(e,t,n){for(n=n.child;n!==null;)jx(e,t,n),n=n.sibling}function jx(e,t,n){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(ch,n)}catch{}switch(n.tag){case 5:Nt||ds(n,t);case 6:var r=yt,i=jn;yt=null,qr(e,t,n),yt=r,jn=i,yt!==null&&(jn?(e=yt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(jn?(e=yt,n=n.stateNode,e.nodeType===8?hm(e.parentNode,n):e.nodeType===1&&hm(e,n),Bl(e)):hm(yt,n.stateNode));break;case 4:r=yt,i=jn,yt=n.stateNode.containerInfo,jn=!0,qr(e,t,n),yt=r,jn=i;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&sv(n,t,s),i=i.next}while(i!==r)}qr(e,t,n);break;case 1:if(!Nt&&(ds(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,t,a)}qr(e,t,n);break;case 21:qr(e,t,n);break;case 22:n.mode&1?(Nt=(r=Nt)||n.memoizedState!==null,qr(e,t,n),Nt=r):qr(e,t,n);break;default:qr(e,t,n)}}function hE(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new XD),t.forEach(function(r){var i=aM.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:yt=a.stateNode,jn=!1;break e;case 3:yt=a.stateNode.containerInfo,jn=!0;break e;case 4:yt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(yt===null)throw Error(P(160));jx(o,s,i),yt=null,jn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Fe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vx(t,e),t=t.sibling}function Vx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dn(t,e),Jn(e),r&4){try{El(3,e,e.return),yh(3,e)}catch(m){Fe(e,e.return,m)}try{El(5,e,e.return)}catch(m){Fe(e,e.return,m)}}break;case 1:Dn(t,e),Jn(e),r&512&&n!==null&&ds(n,n.return);break;case 5:if(Dn(t,e),Jn(e),r&512&&n!==null&&ds(n,n.return),e.flags&32){var i=e.stateNode;try{Vl(i,"")}catch(m){Fe(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&sC(i,o),Ng(a,s);var u=Ng(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?fC(i,f):c==="dangerouslySetInnerHTML"?uC(i,f):c==="children"?Vl(i,f):Jy(i,c,f,u)}switch(a){case"input":kg(i,o);break;case"textarea":aC(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ws(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?ws(i,!!o.multiple,o.defaultValue,!0):ws(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kl]=o}catch(m){Fe(e,e.return,m)}}break;case 6:if(Dn(t,e),Jn(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Fe(e,e.return,m)}}break;case 3:if(Dn(t,e),Jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bl(t.containerInfo)}catch(m){Fe(e,e.return,m)}break;case 4:Dn(t,e),Jn(e);break;case 13:Dn(t,e),Jn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(R0=We())),r&4&&hE(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Nt=(u=Nt)||c,Dn(t,e),Nt=u):Dn(t,e),Jn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(L=e,c=e.child;c!==null;){for(f=L=c;L!==null;){switch(d=L,p=d.child,d.tag){case 0:case 11:case 14:case 15:El(4,d,d.return);break;case 1:ds(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Fe(r,n,m)}}break;case 5:ds(d,d.return);break;case 22:if(d.memoizedState!==null){mE(f);continue}}p!==null?(p.return=d,L=p):mE(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cC("display",s))}catch(m){Fe(e,e.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){Fe(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(t,e),Jn(e),r&4&&hE(e);break;case 21:break;default:Dn(t,e),Jn(e)}}function Jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lx(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vl(i,""),r.flags&=-33);var o=dE(e);uv(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=dE(e);lv(e,a,s);break;default:throw Error(P(161))}}catch(l){Fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ZD(e,t,n){L=e,Fx(e)}function Fx(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Dc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Nt;a=Dc;var u=Nt;if(Dc=s,(Nt=l)&&!u)for(L=i;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?gE(i):l!==null?(l.return=s,L=l):gE(i);for(;o!==null;)L=o,Fx(o),o=o.sibling;L=i,Dc=a,Nt=u}pE(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):pE(e)}}function pE(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Nt||yh(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Nt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ln(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Xw(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xw(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Bl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Nt||t.flags&512&&av(t)}catch(d){Fe(t,t.return,d)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function mE(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function gE(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yh(4,t)}catch(l){Fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Fe(t,i,l)}}var o=t.return;try{av(t)}catch(l){Fe(t,o,l)}break;case 5:var s=t.return;try{av(t)}catch(l){Fe(t,s,l)}}}catch(l){Fe(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var eM=Math.ceil,yd=zr.ReactCurrentDispatcher,A0=zr.ReactCurrentOwner,kn=zr.ReactCurrentBatchConfig,le=0,ht=null,Qe=null,bt=0,ln=0,hs=Li(0),rt=0,eu=null,Eo=0,_h=0,P0=0,Sl=null,Yt=null,R0=0,Fs=1/0,yr=null,_d=!1,cv=null,yi=null,Mc=!1,ui=null,wd=0,bl=0,fv=null,Cf=-1,xf=0;function Wt(){return le&6?We():Cf!==-1?Cf:Cf=We()}function _i(e){return e.mode&1?le&2&&bt!==0?bt&-bt:LD.transition!==null?(xf===0&&(xf=bC()),xf):(e=pe,e!==0||(e=window.event,e=e===void 0?16:PC(e.type)),e):1}function Bn(e,t,n,r){if(50<bl)throw bl=0,fv=null,Error(P(185));Mu(e,n,r),(!(le&2)||e!==ht)&&(e===ht&&(!(le&2)&&(_h|=n),rt===4&&ri(e,bt)),en(e,r),n===1&&le===0&&!(t.mode&1)&&(Fs=We()+500,mh&&ji()))}function en(e,t){var n=e.callbackNode;L$(e,t);var r=rd(e,e===ht?bt:0);if(r===0)n!==null&&Iw(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Iw(n),t===1)e.tag===0?MD(vE.bind(null,e)):YC(vE.bind(null,e)),OD(function(){!(le&6)&&ji()}),n=null;else{switch(TC(r)){case 1:n=r0;break;case 4:n=EC;break;case 16:n=nd;break;case 536870912:n=SC;break;default:n=nd}n=Kx(n,Ux.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ux(e,t){if(Cf=-1,xf=0,le&6)throw Error(P(327));var n=e.callbackNode;if(Is()&&e.callbackNode!==n)return null;var r=rd(e,e===ht?bt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ed(e,r);else{t=r;var i=le;le|=2;var o=Bx();(ht!==e||bt!==t)&&(yr=null,Fs=We()+500,co(e,t));do try{rM();break}catch(a){zx(e,a)}while(!0);g0(),yd.current=o,le=i,Qe!==null?t=0:(ht=null,bt=0,t=rt)}if(t!==0){if(t===2&&(i=jg(e),i!==0&&(r=i,t=dv(e,i))),t===1)throw n=eu,co(e,0),ri(e,r),en(e,We()),n;if(t===6)ri(e,r);else{if(i=e.current.alternate,!(r&30)&&!tM(i)&&(t=Ed(e,r),t===2&&(o=jg(e),o!==0&&(r=o,t=dv(e,o))),t===1))throw n=eu,co(e,0),ri(e,r),en(e,We()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Ki(e,Yt,yr);break;case 3:if(ri(e,r),(r&130023424)===r&&(t=R0+500-We(),10<t)){if(rd(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Wt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qg(Ki.bind(null,e,Yt,yr),t);break}Ki(e,Yt,yr);break;case 4:if(ri(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-zn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eM(r/1960))-r,10<r){e.timeoutHandle=qg(Ki.bind(null,e,Yt,yr),r);break}Ki(e,Yt,yr);break;case 5:Ki(e,Yt,yr);break;default:throw Error(P(329))}}}return en(e,We()),e.callbackNode===n?Ux.bind(null,e):null}function dv(e,t){var n=Sl;return e.current.memoizedState.isDehydrated&&(co(e,t).flags|=256),e=Ed(e,t),e!==2&&(t=Yt,Yt=n,t!==null&&hv(t)),e}function hv(e){Yt===null?Yt=e:Yt.push.apply(Yt,e)}function tM(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!qn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ri(e,t){for(t&=~P0,t&=~_h,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zn(t),r=1<<n;e[n]=-1,t&=~r}}function vE(e){if(le&6)throw Error(P(327));Is();var t=rd(e,0);if(!(t&1))return en(e,We()),null;var n=Ed(e,t);if(e.tag!==0&&n===2){var r=jg(e);r!==0&&(t=r,n=dv(e,r))}if(n===1)throw n=eu,co(e,0),ri(e,t),en(e,We()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ki(e,Yt,yr),en(e,We()),null}function O0(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(Fs=We()+500,mh&&ji())}}function So(e){ui!==null&&ui.tag===0&&!(le&6)&&Is();var t=le;le|=1;var n=kn.transition,r=pe;try{if(kn.transition=null,pe=1,e)return e()}finally{pe=r,kn.transition=n,le=t,!(le&6)&&ji()}}function N0(){ln=hs.current,ke(hs)}function co(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,RD(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(h0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ld();break;case 3:js(),ke(Jt),ke(Lt),S0();break;case 5:E0(r);break;case 4:js();break;case 13:ke(Ne);break;case 19:ke(Ne);break;case 10:v0(r.type._context);break;case 22:case 23:N0()}n=n.return}if(ht=e,Qe=e=wi(e.current,null),bt=ln=t,rt=0,eu=null,P0=_h=Eo=0,Yt=Sl=null,eo!==null){for(t=0;t<eo.length;t++)if(n=eo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}eo=null}return e}function zx(e,t){do{var n=Qe;try{if(g0(),bf.current=vd,gd){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gd=!1}if(wo=0,ft=tt=$e=null,wl=!1,Xl=0,A0.current=null,n===null||n.return===null){rt=1,eu=t,Qe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=iE(s);if(p!==null){p.flags&=-257,oE(p,s,a,o,t),p.mode&1&&rE(o,u,t),t=p,l=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(l),t.updateQueue=m}else g.add(l);break e}else{if(!(t&1)){rE(o,u,t),$0();break e}l=Error(P(426))}}else if(Re&&a.mode&1){var _=iE(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),oE(_,s,a,o,t),p0(Vs(l,a));break e}}o=l=Vs(l,a),rt!==4&&(rt=2),Sl===null?Sl=[o]:Sl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ix(o,l,t);Qw(o,v);break e;case 1:a=l;var h=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(yi===null||!yi.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=Cx(o,a,t);Qw(o,E);break e}}o=o.return}while(o!==null)}Hx(n)}catch(T){t=T,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function Bx(){var e=yd.current;return yd.current=vd,e===null?vd:e}function $0(){(rt===0||rt===3||rt===2)&&(rt=4),ht===null||!(Eo&268435455)&&!(_h&268435455)||ri(ht,bt)}function Ed(e,t){var n=le;le|=2;var r=Bx();(ht!==e||bt!==t)&&(yr=null,co(e,t));do try{nM();break}catch(i){zx(e,i)}while(!0);if(g0(),le=n,yd.current=r,Qe!==null)throw Error(P(261));return ht=null,bt=0,rt}function nM(){for(;Qe!==null;)Wx(Qe)}function rM(){for(;Qe!==null&&!k$();)Wx(Qe)}function Wx(e){var t=Gx(e.alternate,e,ln);e.memoizedProps=e.pendingProps,t===null?Hx(e):Qe=t,A0.current=null}function Hx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=QD(n,t),n!==null){n.flags&=32767,Qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{rt=6,Qe=null;return}}else if(n=YD(n,t,ln),n!==null){Qe=n;return}if(t=t.sibling,t!==null){Qe=t;return}Qe=t=e}while(t!==null);rt===0&&(rt=5)}function Ki(e,t,n){var r=pe,i=kn.transition;try{kn.transition=null,pe=1,iM(e,t,n,r)}finally{kn.transition=i,pe=r}return null}function iM(e,t,n,r){do Is();while(ui!==null);if(le&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(j$(e,o),e===ht&&(Qe=ht=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mc||(Mc=!0,Kx(nd,function(){return Is(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=kn.transition,kn.transition=null;var s=pe;pe=1;var a=le;le|=4,A0.current=null,JD(e,n),Vx(n,e),TD(Wg),id=!!Bg,Wg=Bg=null,e.current=n,ZD(n),A$(),le=a,pe=s,kn.transition=o}else e.current=n;if(Mc&&(Mc=!1,ui=e,wd=i),o=e.pendingLanes,o===0&&(yi=null),O$(n.stateNode),en(e,We()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_d)throw _d=!1,e=cv,cv=null,e;return wd&1&&e.tag!==0&&Is(),o=e.pendingLanes,o&1?e===fv?bl++:(bl=0,fv=e):bl=0,ji(),null}function Is(){if(ui!==null){var e=TC(wd),t=kn.transition,n=pe;try{if(kn.transition=null,pe=16>e?16:e,ui===null)var r=!1;else{if(e=ui,ui=null,wd=0,le&6)throw Error(P(331));var i=le;for(le|=4,L=e.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:El(8,c,o)}var f=c.child;if(f!==null)f.return=c,L=f;else for(;L!==null;){c=L;var d=c.sibling,p=c.return;if(Mx(c),c===u){L=null;break}if(d!==null){d.return=p,L=d;break}L=p}}}var g=o.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var _=m.sibling;m.sibling=null,m=_}while(m!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:El(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,L=v;break e}L=o.return}}var h=e.current;for(L=h;L!==null;){s=L;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,L=y;else e:for(s=h;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yh(9,a)}}catch(T){Fe(a,a.return,T)}if(a===s){L=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,L=E;break e}L=a.return}}if(le=i,ji(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(ch,e)}catch{}r=!0}return r}finally{pe=n,kn.transition=t}}return!1}function yE(e,t,n){t=Vs(n,t),t=Ix(e,t,1),e=vi(e,t,1),t=Wt(),e!==null&&(Mu(e,1,t),en(e,t))}function Fe(e,t,n){if(e.tag===3)yE(e,e,n);else for(;t!==null;){if(t.tag===3){yE(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yi===null||!yi.has(r))){e=Vs(n,e),e=Cx(t,e,1),t=vi(t,e,1),e=Wt(),t!==null&&(Mu(t,1,e),en(t,e));break}}t=t.return}}function oM(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Wt(),e.pingedLanes|=e.suspendedLanes&n,ht===e&&(bt&n)===n&&(rt===4||rt===3&&(bt&130023424)===bt&&500>We()-R0?co(e,0):P0|=n),en(e,t)}function qx(e,t){t===0&&(e.mode&1?(t=Cc,Cc<<=1,!(Cc&130023424)&&(Cc=4194304)):t=1);var n=Wt();e=Or(e,t),e!==null&&(Mu(e,t,n),en(e,n))}function sM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qx(e,n)}function aM(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),qx(e,n)}var Gx;Gx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Jt.current)Qt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qt=!1,KD(e,t,n);Qt=!!(e.flags&131072)}else Qt=!1,Re&&t.flags&1048576&&QC(t,fd,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;If(e,t),e=t.pendingProps;var i=Ds(t,Lt.current);Ts(t,n),i=T0(null,t,r,e,i,n);var o=I0();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Zt(r)?(o=!0,ud(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_0(t),i.updater=gh,t.stateNode=i,i._reactInternals=t,Zg(t,r,e,n),t=nv(null,t,r,!0,o,n)):(t.tag=0,Re&&o&&d0(t),zt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(If(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=uM(r),e=Ln(r,e),i){case 0:t=tv(null,t,r,e,n);break e;case 1:t=lE(null,t,r,e,n);break e;case 11:t=sE(null,t,r,e,n);break e;case 14:t=aE(null,t,r,Ln(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),tv(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),lE(e,t,r,i,n);case 3:e:{if(Px(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ex(e,t),pd(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vs(Error(P(423)),t),t=uE(e,t,r,n,i);break e}else if(r!==i){i=Vs(Error(P(424)),t),t=uE(e,t,r,n,i);break e}else for(cn=gi(t.stateNode.containerInfo.firstChild),fn=t,Re=!0,Vn=null,n=ix(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),r===i){t=Nr(e,t,n);break e}zt(e,t,r,n)}t=t.child}return t;case 5:return ox(t),e===null&&Qg(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Hg(r,i)?s=null:o!==null&&Hg(r,o)&&(t.flags|=32),Ax(e,t),zt(e,t,s,n),t.child;case 6:return e===null&&Qg(t),null;case 13:return Rx(e,t,n);case 4:return w0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ls(t,null,r,n):zt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),sE(e,t,r,i,n);case 7:return zt(e,t,t.pendingProps,n),t.child;case 8:return zt(e,t,t.pendingProps.children,n),t.child;case 12:return zt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,we(dd,r._currentValue),r._currentValue=s,o!==null)if(qn(o.value,s)){if(o.children===i.children&&!Jt.current){t=Nr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=xr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xg(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Xg(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}zt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ts(t,n),i=An(i),r=r(i),t.flags|=1,zt(e,t,r,n),t.child;case 14:return r=t.type,i=Ln(r,t.pendingProps),i=Ln(r.type,i),aE(e,t,r,i,n);case 15:return xx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),If(e,t),t.tag=1,Zt(r)?(e=!0,ud(t)):e=!1,Ts(t,n),nx(t,r,i),Zg(t,r,i,n),nv(null,t,r,!0,e,n);case 19:return Ox(e,t,n);case 22:return kx(e,t,n)}throw Error(P(156,t.tag))};function Kx(e,t){return wC(e,t)}function lM(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(e,t,n,r){return new lM(e,t,n,r)}function D0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uM(e){if(typeof e=="function")return D0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===e0)return 11;if(e===t0)return 14}return 2}function wi(e,t){var n=e.alternate;return n===null?(n=xn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function kf(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")D0(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case rs:return fo(n.children,i,o,t);case Zy:s=8,i|=8;break;case bg:return e=xn(12,n,t,i|2),e.elementType=bg,e.lanes=o,e;case Tg:return e=xn(13,n,t,i),e.elementType=Tg,e.lanes=o,e;case Ig:return e=xn(19,n,t,i),e.elementType=Ig,e.lanes=o,e;case rC:return wh(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tC:s=10;break e;case nC:s=9;break e;case e0:s=11;break e;case t0:s=14;break e;case ei:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=xn(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function fo(e,t,n,r){return e=xn(7,e,r,t),e.lanes=n,e}function wh(e,t,n,r){return e=xn(22,e,r,t),e.elementType=rC,e.lanes=n,e.stateNode={isHidden:!1},e}function Em(e,t,n){return e=xn(6,e,null,t),e.lanes=n,e}function Sm(e,t,n){return t=xn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cM(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nm(0),this.expirationTimes=nm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nm(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function M0(e,t,n,r,i,o,s,a,l){return e=new cM(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=xn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_0(o),e}function fM(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yx(e){if(!e)return ki;e=e._reactInternals;e:{if(Mo(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Zt(n))return KC(e,n,t)}return t}function Qx(e,t,n,r,i,o,s,a,l){return e=M0(n,r,!0,e,i,o,s,a,l),e.context=Yx(null),n=e.current,r=Wt(),i=_i(n),o=xr(r,i),o.callback=t??null,vi(n,o,i),e.current.lanes=i,Mu(e,i,r),en(e,r),e}function Eh(e,t,n,r){var i=t.current,o=Wt(),s=_i(i);return n=Yx(n),t.context===null?t.context=n:t.pendingContext=n,t=xr(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vi(i,t,s),e!==null&&(Bn(e,i,s,o),Sf(e,i,s)),s}function Sd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _E(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function L0(e,t){_E(e,t),(e=e.alternate)&&_E(e,t)}function dM(){return null}var Xx=typeof reportError=="function"?reportError:function(e){console.error(e)};function j0(e){this._internalRoot=e}Sh.prototype.render=j0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Eh(e,t,null,null)};Sh.prototype.unmount=j0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;So(function(){Eh(null,e,null,null)}),t[Rr]=null}};function Sh(e){this._internalRoot=e}Sh.prototype.unstable_scheduleHydration=function(e){if(e){var t=xC();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ni.length&&t!==0&&t<ni[n].priority;n++);ni.splice(n,0,e),n===0&&AC(e)}};function V0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wE(){}function hM(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Sd(s);o.call(u)}}var s=Qx(t,r,e,0,null,!1,!1,"",wE);return e._reactRootContainer=s,e[Rr]=s.current,ql(e.nodeType===8?e.parentNode:e),So(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Sd(l);a.call(u)}}var l=M0(e,0,!1,null,null,!1,!1,"",wE);return e._reactRootContainer=l,e[Rr]=l.current,ql(e.nodeType===8?e.parentNode:e),So(function(){Eh(t,l,n,r)}),l}function Th(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Sd(s);a.call(l)}}Eh(t,s,e,i)}else s=hM(n,t,e,i,r);return Sd(s)}IC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tl(t.pendingLanes);n!==0&&(i0(t,n|1),en(t,We()),!(le&6)&&(Fs=We()+500,ji()))}break;case 13:So(function(){var r=Or(e,1);if(r!==null){var i=Wt();Bn(r,e,1,i)}}),L0(e,1)}};o0=function(e){if(e.tag===13){var t=Or(e,134217728);if(t!==null){var n=Wt();Bn(t,e,134217728,n)}L0(e,134217728)}};CC=function(e){if(e.tag===13){var t=_i(e),n=Or(e,t);if(n!==null){var r=Wt();Bn(n,e,t,r)}L0(e,t)}};xC=function(){return pe};kC=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};Dg=function(e,t,n){switch(t){case"input":if(kg(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ph(r);if(!i)throw Error(P(90));oC(r),kg(r,i)}}}break;case"textarea":aC(e,n);break;case"select":t=n.value,t!=null&&ws(e,!!n.multiple,t,!1)}};pC=O0;mC=So;var pM={usingClientEntryPoint:!1,Events:[ju,as,ph,dC,hC,O0]},Fa={findFiberByHostInstance:Zi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mM={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yC(e),e===null?null:e.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||dM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{ch=Lc.inject(mM),lr=Lc}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pM;mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!V0(t))throw Error(P(200));return fM(e,t,null,n)};mn.createRoot=function(e,t){if(!V0(e))throw Error(P(299));var n=!1,r="",i=Xx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=M0(e,1,!1,null,null,n,!1,r,i),e[Rr]=t.current,ql(e.nodeType===8?e.parentNode:e),new j0(t)};mn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=yC(t),e=e===null?null:e.stateNode,e};mn.flushSync=function(e){return So(e)};mn.hydrate=function(e,t,n){if(!bh(t))throw Error(P(200));return Th(null,e,t,!0,n)};mn.hydrateRoot=function(e,t,n){if(!V0(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Xx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Qx(t,null,e,1,n??null,i,!1,o,s),e[Rr]=t.current,ql(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Sh(t)};mn.render=function(e,t,n){if(!bh(t))throw Error(P(200));return Th(null,e,t,!1,n)};mn.unmountComponentAtNode=function(e){if(!bh(e))throw Error(P(40));return e._reactRootContainer?(So(function(){Th(null,null,e,!1,function(){e._reactRootContainer=null,e[Rr]=null})}),!0):!1};mn.unstable_batchedUpdates=O0;mn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bh(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Th(e,t,n,!1,r)};mn.version="18.2.0-next-9e3b772b8-20220608";function Jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jx)}catch(e){console.error(e)}}Jx(),QI.exports=mn;var Zx=QI.exports,EE=Zx;Eg.createRoot=EE.createRoot,Eg.hydrateRoot=EE.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tu.apply(this,arguments)}var ci;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ci||(ci={}));const SE="popstate";function gM(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return pv("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:bd(i)}return yM(t,n,null,e)}function Je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function F0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vM(){return Math.random().toString(36).substr(2,8)}function bE(e,t){return{usr:e.state,key:e.key,idx:t}}function pv(e,t,n,r){return n===void 0&&(n=null),tu({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fa(t):t,{state:n,key:t&&t.key||r||vM()})}function bd(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fa(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function yM(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ci.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(tu({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=ci.Pop;let _=c(),v=_==null?null:_-u;u=_,l&&l({action:a,location:m.location,delta:v})}function d(_,v){a=ci.Push;let h=pv(m.location,_,v);n&&n(h,_),u=c()+1;let y=bE(h,u),E=m.createHref(h);try{s.pushState(y,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}o&&l&&l({action:a,location:m.location,delta:1})}function p(_,v){a=ci.Replace;let h=pv(m.location,_,v);n&&n(h,_),u=c();let y=bE(h,u),E=m.createHref(h);s.replaceState(y,"",E),o&&l&&l({action:a,location:m.location,delta:0})}function g(_){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof _=="string"?_:bd(_);return Je(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let m={get action(){return a},get location(){return e(i,s)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(SE,f),l=_,()=>{i.removeEventListener(SE,f),l=null}},createHref(_){return t(i,_)},createURL:g,encodeLocation(_){let v=g(_);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:d,replace:p,go(_){return s.go(_)}};return m}var TE;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(TE||(TE={}));function _M(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?fa(t):t,i=U0(r.pathname||"/",n);if(i==null)return null;let o=ek(e);wM(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=AM(o[a],OM(i));return s}function ek(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ei([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ek(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:xM(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of tk(o.path))i(o,s,l)}),t}function tk(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=tk(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function wM(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:kM(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const EM=/^:\w+$/,SM=3,bM=2,TM=1,IM=10,CM=-2,IE=e=>e==="*";function xM(e,t){let n=e.split("/"),r=n.length;return n.some(IE)&&(r+=CM),t&&(r+=bM),n.filter(i=>!IE(i)).reduce((i,o)=>i+(EM.test(o)?SM:o===""?TM:IM),r)}function kM(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function AM(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=PM({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:Ei([i,c.pathname]),pathnameBase:LM(Ei([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Ei([i,c.pathnameBase]))}return o}function PM(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=RM(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:p}=c;if(d==="*"){let m=a[f]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const g=a[f];return p&&!g?u[d]=void 0:u[d]=NM(g||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function RM(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),F0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function OM(e){try{return decodeURI(e)}catch(t){return F0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function NM(e,t){try{return decodeURIComponent(e)}catch(n){return F0(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function U0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function $M(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?fa(e):e;return{pathname:n?n.startsWith("/")?n:DM(n,t):t,search:jM(r),hash:VM(i)}}function DM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bm(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function MM(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function nk(e,t){let n=MM(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rk(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=fa(e):(i=tu({},e),Je(!i.pathname||!i.pathname.includes("?"),bm("?","pathname","search",i)),Je(!i.pathname||!i.pathname.includes("#"),bm("#","pathname","hash",i)),Je(!i.search||!i.search.includes("#"),bm("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?t[f]:"/"}let l=$M(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ei=e=>e.join("/").replace(/\/\/+/g,"/"),LM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,VM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function FM(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ik=["post","put","patch","delete"];new Set(ik);const UM=["get",...ik];new Set(UM);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nu.apply(this,arguments)}const z0=S.createContext(null),zM=S.createContext(null),Lo=S.createContext(null),Ih=S.createContext(null),Br=S.createContext({outlet:null,matches:[],isDataRoute:!1}),ok=S.createContext(null);function BM(e,t){let{relative:n}=t===void 0?{}:t;Fu()||Je(!1);let{basename:r,navigator:i}=S.useContext(Lo),{hash:o,pathname:s,search:a}=ak(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Ei([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Fu(){return S.useContext(Ih)!=null}function Uu(){return Fu()||Je(!1),S.useContext(Ih).location}function sk(e){S.useContext(Lo).static||S.useLayoutEffect(e)}function Vi(){let{isDataRoute:e}=S.useContext(Br);return e?o4():WM()}function WM(){Fu()||Je(!1);let e=S.useContext(z0),{basename:t,future:n,navigator:r}=S.useContext(Lo),{matches:i}=S.useContext(Br),{pathname:o}=Uu(),s=JSON.stringify(nk(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return sk(()=>{a.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=rk(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ei([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,s,o,e])}const HM=S.createContext(null);function qM(e){let t=S.useContext(Br).outlet;return t&&S.createElement(HM.Provider,{value:e},t)}function GM(){let{matches:e}=S.useContext(Br),t=e[e.length-1];return t?t.params:{}}function ak(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Lo),{matches:i}=S.useContext(Br),{pathname:o}=Uu(),s=JSON.stringify(nk(i,r.v7_relativeSplatPath));return S.useMemo(()=>rk(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function KM(e,t){return YM(e,t)}function YM(e,t,n,r){Fu()||Je(!1);let{navigator:i}=S.useContext(Lo),{matches:o}=S.useContext(Br),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Uu(),c;if(t){var f;let _=typeof t=="string"?fa(t):t;l==="/"||(f=_.pathname)!=null&&f.startsWith(l)||Je(!1),c=_}else c=u;let d=c.pathname||"/",p=l==="/"?d:d.slice(l.length)||"/",g=_M(e,{pathname:p}),m=e4(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Ei([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:Ei([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return t&&m?S.createElement(Ih.Provider,{value:{location:nu({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ci.Pop}},m):m}function QM(){let e=i4(),t=FM(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const XM=S.createElement(QM,null);class JM extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Br.Provider,{value:this.props.routeContext},S.createElement(ok.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZM(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(z0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Br.Provider,{value:t},r)}function e4(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));c>=0||Je(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:p}=n,g=f.route.loader&&d[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||g){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,d)=>{let p,g=!1,m=null,_=null;n&&(p=a&&f.route.id?a[f.route.id]:void 0,m=f.route.errorElement||XM,l&&(u<0&&d===0?(s4("route-fallback",!1),g=!0,_=null):u===d&&(g=!0,_=f.route.hydrateFallbackElement||null)));let v=t.concat(s.slice(0,d+1)),h=()=>{let y;return p?y=m:g?y=_:f.route.Component?y=S.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=c,S.createElement(ZM,{match:f,routeContext:{outlet:c,matches:v,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?S.createElement(JM,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:h(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):h()},null)}var lk=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lk||{}),Td=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Td||{});function t4(e){let t=S.useContext(z0);return t||Je(!1),t}function n4(e){let t=S.useContext(zM);return t||Je(!1),t}function r4(e){let t=S.useContext(Br);return t||Je(!1),t}function uk(e){let t=r4(),n=t.matches[t.matches.length-1];return n.route.id||Je(!1),n.route.id}function i4(){var e;let t=S.useContext(ok),n=n4(Td.UseRouteError),r=uk(Td.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function o4(){let{router:e}=t4(lk.UseNavigateStable),t=uk(Td.UseNavigateStable),n=S.useRef(!1);return sk(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,nu({fromRouteId:t},o)))},[e,t])}const CE={};function s4(e,t,n){!t&&!CE[e]&&(CE[e]=!0)}function a4(e){return qM(e.context)}function Mn(e){Je(!1)}function l4(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ci.Pop,navigator:o,static:s=!1,future:a}=e;Fu()&&Je(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:o,static:s,future:nu({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=fa(r));let{pathname:c="/",search:f="",hash:d="",state:p=null,key:g="default"}=r,m=S.useMemo(()=>{let _=U0(c,l);return _==null?null:{location:{pathname:_,search:f,hash:d,state:p,key:g},navigationType:i}},[l,c,f,d,p,g,i]);return m==null?null:S.createElement(Lo.Provider,{value:u},S.createElement(Ih.Provider,{children:n,value:m}))}function u4(e){let{children:t,location:n}=e;return KM(mv(t),n)}new Promise(()=>{});function mv(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,mv(r.props.children,o));return}r.type!==Mn&&Je(!1),!r.props.index||!r.props.children||Je(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=mv(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gv(){return gv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gv.apply(this,arguments)}function c4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function f4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function d4(e,t){return e.button===0&&(!t||t==="_self")&&!f4(e)}const h4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],p4="startTransition",xE=Jf[p4];function m4(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=gM({window:i,v5Compat:!0}));let s=o.current,[a,l]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=S.useCallback(f=>{u&&xE?xE(()=>l(f)):l(f)},[l,u]);return S.useLayoutEffect(()=>s.listen(c),[s,c]),S.createElement(l4,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const g4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B0=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,d=c4(t,h4),{basename:p}=S.useContext(Lo),g,m=!1;if(typeof u=="string"&&v4.test(u)&&(g=u,g4))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),T=U0(E.pathname,p);E.origin===y.origin&&T!=null?u=T+E.search+E.hash:m=!0}catch{}let _=BM(u,{relative:i}),v=y4(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function h(y){r&&r(y),y.defaultPrevented||v(y)}return S.createElement("a",gv({},d,{href:g||_,onClick:m||o?r:h,ref:n,target:l}))});var kE;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(kE||(kE={}));var AE;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(AE||(AE={}));function y4(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Vi(),u=Uu(),c=ak(e,{relative:s});return S.useCallback(f=>{if(d4(f,n)){f.preventDefault();let d=r!==void 0?r:bd(u)===bd(c);l(e,{replace:d,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}var ck={exports:{}},_4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",w4=_4,E4=w4;function fk(){}function dk(){}dk.resetWarningCache=fk;var S4=function(){function e(r,i,o,s,a,l){if(l!==E4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:dk,resetWarningCache:fk};return n.PropTypes=n,n};ck.exports=S4();var b4=ck.exports;const F=$o(b4);function PE(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function RE(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?PE(Object(n),!0).forEach(function(r){hk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):PE(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Af(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Af=function(t){return typeof t}:Af=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Af(e)}function hk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pf(e,t){return T4(e)||I4(e,t)||C4(e,t)||x4()}function T4(e){if(Array.isArray(e))return e}function I4(e,t){var n=e&&(typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"]);if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function C4(e,t){if(e){if(typeof e=="string")return OE(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return OE(e,t)}}function OE(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vv=function(t){var n=q.useRef(t);return q.useEffect(function(){n.current=t},[t]),n.current},Us=function(t){return t!==null&&Af(t)==="object"},k4=function(t){return Us(t)&&typeof t.then=="function"},A4=function(t){return Us(t)&&typeof t.elements=="function"&&typeof t.createToken=="function"&&typeof t.createPaymentMethod=="function"&&typeof t.confirmCardPayment=="function"},NE="[object Object]",P4=function e(t,n){if(!Us(t)||!Us(n))return t===n;var r=Array.isArray(t),i=Array.isArray(n);if(r!==i)return!1;var o=Object.prototype.toString.call(t)===NE,s=Object.prototype.toString.call(n)===NE;if(o!==s)return!1;if(!o&&!r)return t===n;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(var u={},c=0;c<a.length;c+=1)u[a[c]]=!0;for(var f=0;f<l.length;f+=1)u[l[f]]=!0;var d=Object.keys(u);if(d.length!==a.length)return!1;var p=t,g=n,m=function(v){return e(p[v],g[v])};return d.every(m)},pk=function(t,n,r){return Us(t)?Object.keys(t).reduce(function(i,o){var s=!Us(n)||!P4(t[o],n[o]);return r.includes(o)?(s&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),i):s?RE(RE({},i||{}),{},hk({},o,t[o])):i},null):null},mk="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",$E=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:mk;if(t===null||A4(t))return t;throw new Error(n)},R4=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:mk;if(k4(t))return{tag:"async",stripePromise:Promise.resolve(t).then(function(i){return $E(i,n)})};var r=$E(t,n);return r===null?{tag:"empty"}:{tag:"sync",stripe:r}},O4=function(t){!t||!t._registerWrapper||!t.registerAppInfo||(t._registerWrapper({name:"react-stripe-js",version:"2.4.0"}),t.registerAppInfo({name:"react-stripe-js",version:"2.4.0",url:"https://stripe.com/docs/stripe-js/react"}))},gk=q.createContext(null);gk.displayName="CustomCheckoutSdkContext";var N4=function(t,n){if(!t)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(n," in an <CustomCheckoutProvider> provider."));return t},$4=q.createContext(null);$4.displayName="CustomCheckoutContext";F.any,F.shape({clientSecret:F.string.isRequired,elementsOptions:F.object}).isRequired;var yv=function(t){var n=q.useContext(gk),r=q.useContext(Ch);if(n&&r)throw new Error("You cannot wrap the part of your app that ".concat(t," in both <CustomCheckoutProvider> and <Elements> providers."));return n?N4(n,t):vk(r,t)},Ch=q.createContext(null);Ch.displayName="ElementsContext";var vk=function(t,n){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return t},W0=q.createContext(null);W0.displayName="CartElementContext";var D4=function(t,n){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return t},yk=function(t){var n=t.stripe,r=t.options,i=t.children,o=q.useMemo(function(){return R4(n)},[n]),s=q.useState(null),a=Pf(s,2),l=a[0],u=a[1],c=q.useState(null),f=Pf(c,2),d=f[0],p=f[1],g=q.useState(function(){return{stripe:o.tag==="sync"?o.stripe:null,elements:o.tag==="sync"?o.stripe.elements(r):null}}),m=Pf(g,2),_=m[0],v=m[1];q.useEffect(function(){var E=!0,T=function(b){v(function(R){return R.stripe?R:{stripe:b,elements:b.elements(r)}})};return o.tag==="async"&&!_.stripe?o.stripePromise.then(function(I){I&&E&&T(I)}):o.tag==="sync"&&!_.stripe&&T(o.stripe),function(){E=!1}},[o,_,r]);var h=vv(n);q.useEffect(function(){h!==null&&h!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[h,n]);var y=vv(r);return q.useEffect(function(){if(_.elements){var E=pk(r,y,["clientSecret","fonts"]);E&&_.elements.update(E)}},[r,y,_.elements]),q.useEffect(function(){O4(_.stripe)},[_.stripe]),q.createElement(Ch.Provider,{value:_},q.createElement(W0.Provider,{value:{cart:l,setCart:u,cartState:d,setCartState:p}},i))};yk.propTypes={stripe:F.any,options:F.object};var M4=function(t){var n=q.useContext(Ch);return vk(n,t)},L4={cart:null,cartState:null,setCart:function(){},setCartState:function(){}},DE=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=q.useContext(W0);return n?L4:D4(r,t)},_k=function(){var t=M4("calls useElements()"),n=t.elements;return n},wk=function(){var t=yv("calls useStripe()"),n=t.stripe;return n};F.func.isRequired;var Ut=function(t,n,r){var i=!!r,o=q.useRef(r);q.useEffect(function(){o.current=r},[r]),q.useEffect(function(){if(!i||!t)return function(){};var s=function(){o.current&&o.current.apply(o,arguments)};return t.on(n,s),function(){t.off(n,s)}},[i,n,t,o])},j4=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},Ze=function(t,n){var r="".concat(j4(t),"Element"),i=function(l){var u=l.id,c=l.className,f=l.options,d=f===void 0?{}:f,p=l.onBlur,g=l.onFocus,m=l.onReady,_=l.onChange,v=l.onEscape,h=l.onClick,y=l.onLoadError,E=l.onLoaderStart,T=l.onNetworksChange,I=l.onCheckout,b=l.onLineItemClick,R=l.onConfirm,j=l.onCancel,O=l.onShippingAddressChange,ue=l.onShippingRateChange,ye=yv("mounts <".concat(r,">")),Le="elements"in ye?ye.elements:null,Be="customCheckoutSdk"in ye?ye.customCheckoutSdk:null,_n=q.useState(null),wn=Pf(_n,2),_e=wn[0],$=wn[1],D=q.useRef(null),H=q.useRef(null),se=DE("mounts <".concat(r,">"),"customCheckoutSdk"in ye),ae=se.setCart,on=se.setCartState;Ut(_e,"blur",p),Ut(_e,"focus",g),Ut(_e,"escape",v),Ut(_e,"click",h),Ut(_e,"loaderror",y),Ut(_e,"loaderstart",E),Ut(_e,"networkschange",T),Ut(_e,"lineitemclick",b),Ut(_e,"confirm",R),Ut(_e,"cancel",j),Ut(_e,"shippingaddresschange",O),Ut(_e,"shippingratechange",ue);var at;t==="cart"?at=function(X){on(X),m&&m(X)}:m&&(t==="expressCheckout"?at=m:at=function(){m(_e)}),Ut(_e,"ready",at);var En=t==="cart"?function(ve){on(ve),_&&_(ve)}:_;Ut(_e,"change",En);var lt=t==="cart"?function(ve){on(ve),I&&I(ve)}:I;Ut(_e,"checkout",lt),q.useLayoutEffect(function(){if(D.current===null&&H.current!==null&&(Le||Be)){var ve=null;Be?ve=Be.createElement(t,d):Le&&(ve=Le.create(t,d)),t==="cart"&&ae&&ae(ve),D.current=ve,$(ve),ve&&ve.mount(H.current)}},[Le,Be,d,ae]);var Ft=vv(d);return q.useEffect(function(){if(D.current){var ve=pk(d,Ft,["paymentRequest"]);ve&&D.current.update(ve)}},[d,Ft]),q.useLayoutEffect(function(){return function(){if(D.current&&typeof D.current.destroy=="function")try{D.current.destroy(),D.current=null}catch{}}},[]),q.createElement("div",{id:u,className:c,ref:H})},o=function(l){var u=yv("mounts <".concat(r,">"));DE("mounts <".concat(r,">"),"customCheckoutSdk"in u);var c=l.id,f=l.className;return q.createElement("div",{id:c,className:f})},s=n?o:i;return s.propTypes={id:F.string,className:F.string,onChange:F.func,onBlur:F.func,onFocus:F.func,onReady:F.func,onEscape:F.func,onClick:F.func,onLoadError:F.func,onLoaderStart:F.func,onNetworksChange:F.func,onCheckout:F.func,onLineItemClick:F.func,onConfirm:F.func,onCancel:F.func,onShippingAddressChange:F.func,onShippingRateChange:F.func,options:F.object},s.displayName=r,s.__elementType=t,s},et=typeof window>"u",V4=q.createContext(null);V4.displayName="EmbeddedCheckoutProviderContext";Ze("auBankAccount",et);var Ek=Ze("card",et);Ze("cardNumber",et);Ze("cardExpiry",et);Ze("cardCvc",et);Ze("fpxBank",et);Ze("iban",et);Ze("idealBank",et);Ze("p24Bank",et);Ze("epsBank",et);var F4=Ze("payment",et);Ze("expressCheckout",et);Ze("paymentRequestButton",et);Ze("linkAuthentication",et);Ze("address",et);Ze("shippingAddress",et);Ze("cart",et);Ze("paymentMethodMessaging",et);Ze("affirmMessage",et);Ze("afterpayClearpayMessage",et);var Sk="https://js.stripe.com/v3",U4=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,ME="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",z4=function(){for(var t=document.querySelectorAll('script[src^="'.concat(Sk,'"]')),n=0;n<t.length;n++){var r=t[n];if(U4.test(r.src))return r}return null},LE=function(t){var n=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(Sk).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},B4=function(t,n){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"2.4.0",startTime:n})},Ua=null,jc=null,Vc=null,W4=function(t){return function(){t(new Error("Failed to load Stripe.js"))}},H4=function(t,n){return function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))}},q4=function(t){return Ua!==null?Ua:(Ua=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&t&&console.warn(ME),window.Stripe){n(window.Stripe);return}try{var i=z4();if(i&&t)console.warn(ME);else if(!i)i=LE(t);else if(i&&Vc!==null&&jc!==null){var o;i.removeEventListener("load",Vc),i.removeEventListener("error",jc),(o=i.parentNode)===null||o===void 0||o.removeChild(i),i=LE(t)}Vc=H4(n,r),jc=W4(r),i.addEventListener("load",Vc),i.addEventListener("error",jc)}catch(s){r(s);return}}),Ua.catch(function(n){return Ua=null,Promise.reject(n)}))},G4=function(t,n,r){if(t===null)return null;var i=t.apply(void 0,n);return B4(i,r),i},za,bk=!1,Tk=function(){return za||(za=q4(null).catch(function(t){return za=null,Promise.reject(t)}),za)};Promise.resolve().then(function(){return Tk()}).catch(function(e){bk||console.warn(e)});var K4=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];bk=!0;var i=Date.now();return Tk().then(function(o){return G4(o,n,i)})};const Y4="pk_test_51O3o9TI0UNHzYacJxHTg3Zylsq0QipZ50kCvEhTQxY8PBfUWqDMNDTkUnHEuQg1vvrvTj0848lDUwAEB70NwpjWc00bUfAycQ8",Q4=K4(Y4),X4={mode:"payment",currency:"usd",amount:1099},H0=S.createContext({categoriesMap:{},setCategoriesMap:()=>{}}),J4=({children:e})=>{const[t,n]=S.useState({}),r={categoriesMap:t,setCategoriesMap:n};return w.jsx(H0.Provider,{value:r,children:e})};var Xt=function(){return Xt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Xt.apply(this,arguments)};function q0(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ru(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Ik(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Z4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,e5=Ik(function(e){return Z4.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),be="-ms-",Tl="-moz-",he="-webkit-",Ck="comm",xh="rule",G0="decl",t5="@import",xk="@keyframes",n5="@layer",kk=Math.abs,K0=String.fromCharCode,_v=Object.assign;function r5(e,t){return dt(e,0)^45?(((t<<2^dt(e,0))<<2^dt(e,1))<<2^dt(e,2))<<2^dt(e,3):0}function Ak(e){return e.trim()}function _r(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function Rf(e,t,n){return e.indexOf(t,n)}function dt(e,t){return e.charCodeAt(t)|0}function zs(e,t,n){return e.slice(t,n)}function er(e){return e.length}function Pk(e){return e.length}function rl(e,t){return t.push(e),e}function i5(e,t){return e.map(t).join("")}function jE(e,t){return e.filter(function(n){return!_r(n,t)})}var kh=1,Bs=1,Rk=0,Rn=0,Ke=0,da="";function Ah(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:kh,column:Bs,length:s,return:"",siblings:a}}function Xr(e,t){return _v(Ah("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Bo(e){for(;e.root;)e=Xr(e.root,{children:[e]});rl(e,e.siblings)}function o5(){return Ke}function s5(){return Ke=Rn>0?dt(da,--Rn):0,Bs--,Ke===10&&(Bs=1,kh--),Ke}function Wn(){return Ke=Rn<Rk?dt(da,Rn++):0,Bs++,Ke===10&&(Bs=1,kh++),Ke}function ho(){return dt(da,Rn)}function Of(){return Rn}function Ph(e,t){return zs(da,e,t)}function wv(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function a5(e){return kh=Bs=1,Rk=er(da=e),Rn=0,[]}function l5(e){return da="",e}function Tm(e){return Ak(Ph(Rn-1,Ev(e===91?e+2:e===40?e+1:e)))}function u5(e){for(;(Ke=ho())&&Ke<33;)Wn();return wv(e)>2||wv(Ke)>3?"":" "}function c5(e,t){for(;--t&&Wn()&&!(Ke<48||Ke>102||Ke>57&&Ke<65||Ke>70&&Ke<97););return Ph(e,Of()+(t<6&&ho()==32&&Wn()==32))}function Ev(e){for(;Wn();)switch(Ke){case e:return Rn;case 34:case 39:e!==34&&e!==39&&Ev(Ke);break;case 40:e===41&&Ev(e);break;case 92:Wn();break}return Rn}function f5(e,t){for(;Wn()&&e+Ke!==57;)if(e+Ke===84&&ho()===47)break;return"/*"+Ph(t,Rn-1)+"*"+K0(e===47?e:Wn())}function d5(e){for(;!wv(ho());)Wn();return Ph(e,Rn)}function h5(e){return l5(Nf("",null,null,null,[""],e=a5(e),0,[0],e))}function Nf(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,p=0,g=0,m=1,_=1,v=1,h=0,y="",E=i,T=o,I=r,b=y;_;)switch(g=h,h=Wn()){case 40:if(g!=108&&dt(b,f-1)==58){Rf(b+=ee(Tm(h),"&","&\f"),"&\f",kk(u?a[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:b+=Tm(h);break;case 9:case 10:case 13:case 32:b+=u5(g);break;case 92:b+=c5(Of()-1,7);continue;case 47:switch(ho()){case 42:case 47:rl(p5(f5(Wn(),Of()),t,n,l),l);break;default:b+="/"}break;case 123*m:a[u++]=er(b)*v;case 125*m:case 59:case 0:switch(h){case 0:case 125:_=0;case 59+c:v==-1&&(b=ee(b,/\f/g,"")),p>0&&er(b)-f&&rl(p>32?FE(b+";",r,n,f-1,l):FE(ee(b," ","")+";",r,n,f-2,l),l);break;case 59:b+=";";default:if(rl(I=VE(b,t,n,u,c,i,a,y,E=[],T=[],f,o),o),h===123)if(c===0)Nf(b,t,I,I,E,o,f,a,T);else switch(d===99&&dt(b,3)===110?100:d){case 100:case 108:case 109:case 115:Nf(e,I,I,r&&rl(VE(e,I,I,0,0,i,a,y,i,E=[],f,T),T),i,T,f,a,r?E:T);break;default:Nf(b,I,I,I,[""],T,0,a,T)}}u=c=p=0,m=v=1,y=b="",f=s;break;case 58:f=1+er(b),p=g;default:if(m<1){if(h==123)--m;else if(h==125&&m++==0&&s5()==125)continue}switch(b+=K0(h),h*m){case 38:v=c>0?1:(b+="\f",-1);break;case 44:a[u++]=(er(b)-1)*v,v=1;break;case 64:ho()===45&&(b+=Tm(Wn())),d=ho(),c=f=er(y=b+=d5(Of())),h++;break;case 45:g===45&&er(b)==2&&(m=0)}}return o}function VE(e,t,n,r,i,o,s,a,l,u,c,f){for(var d=i-1,p=i===0?o:[""],g=Pk(p),m=0,_=0,v=0;m<r;++m)for(var h=0,y=zs(e,d+1,d=kk(_=s[m])),E=e;h<g;++h)(E=Ak(_>0?p[h]+" "+y:ee(y,/&\f/g,p[h])))&&(l[v++]=E);return Ah(e,t,n,i===0?xh:a,l,u,c,f)}function p5(e,t,n,r){return Ah(e,t,n,Ck,K0(o5()),zs(e,2,-2),0,r)}function FE(e,t,n,r,i){return Ah(e,t,n,G0,zs(e,0,r),zs(e,r+1,-1),r,i)}function Ok(e,t,n){switch(r5(e,t)){case 5103:return he+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+e+e;case 4789:return Tl+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return he+e+Tl+e+be+e+e;case 5936:switch(dt(e,t+11)){case 114:return he+e+be+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return he+e+be+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return he+e+be+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return he+e+be+e+e;case 6165:return he+e+be+"flex-"+e+e;case 5187:return he+e+ee(e,/(\w+).+(:[^]+)/,he+"box-$1$2"+be+"flex-$1$2")+e;case 5443:return he+e+be+"flex-item-"+ee(e,/flex-|-self/g,"")+(_r(e,/flex-|baseline/)?"":be+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return he+e+be+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return he+e+be+ee(e,"shrink","negative")+e;case 5292:return he+e+be+ee(e,"basis","preferred-size")+e;case 6060:return he+"box-"+ee(e,"-grow","")+he+e+be+ee(e,"grow","positive")+e;case 4554:return he+ee(e,/([^-])(transform)/g,"$1"+he+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+e+e;case 4200:if(!_r(e,/flex-|baseline/))return be+"grid-column-align"+zs(e,t)+e;break;case 2592:case 3360:return be+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,_r(r.props,/grid-\w+-end/)})?~Rf(e+(n=n[t].value),"span",0)?e:be+ee(e,"-start","")+e+be+"grid-row-span:"+(~Rf(n,"span",0)?_r(n,/\d+/):+_r(n,/\d+/)-+_r(e,/\d+/))+";":be+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return _r(r.props,/grid-\w+-start/)})?e:be+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,he+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(er(e)-1-t>6)switch(dt(e,t+1)){case 109:if(dt(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+Tl+(dt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Rf(e,"stretch",0)?Ok(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return be+i+":"+o+u+(s?be+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(dt(e,t+6)===121)return ee(e,":",":"+he)+e;break;case 6444:switch(dt(e,dt(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(dt(e,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+be+"$2box$3")+e;case 100:return ee(e,":",":"+be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function Id(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function m5(e,t,n,r){switch(e.type){case n5:if(e.children.length)break;case t5:case G0:return e.return=e.return||e.value;case Ck:return"";case xk:return e.return=e.value+"{"+Id(e.children,r)+"}";case xh:if(!er(e.value=e.props.join(",")))return""}return er(n=Id(e.children,r))?e.return=e.value+"{"+n+"}":""}function g5(e){var t=Pk(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function v5(e){return function(t){t.root||(t=t.return)&&e(t)}}function y5(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case G0:e.return=Ok(e.value,e.length,n);return;case xk:return Id([Xr(e,{value:ee(e.value,"@","@"+he)})],r);case xh:if(e.length)return i5(n=e.props,function(i){switch(_r(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bo(Xr(e,{props:[ee(i,/:(read-\w+)/,":"+Tl+"$1")]})),Bo(Xr(e,{props:[i]})),_v(e,{props:jE(n,r)});break;case"::placeholder":Bo(Xr(e,{props:[ee(i,/:(plac\w+)/,":"+he+"input-$1")]})),Bo(Xr(e,{props:[ee(i,/:(plac\w+)/,":"+Tl+"$1")]})),Bo(Xr(e,{props:[ee(i,/:(plac\w+)/,be+"input-$1")]})),Bo(Xr(e,{props:[i]})),_v(e,{props:jE(n,r)});break}return""})}}var _5={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},an={},Ws=typeof process<"u"&&an!==void 0&&(an.REACT_APP_SC_ATTR||an.SC_ATTR)||"data-styled",Nk="active",$k="data-styled-version",Rh="6.1.6",Y0=`/*!sc*/
`,Q0=typeof window<"u"&&"HTMLElement"in window,w5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==""?an.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&an.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.SC_DISABLE_SPEEDY!==void 0&&an.SC_DISABLE_SPEEDY!==""&&an.SC_DISABLE_SPEEDY!=="false"&&an.SC_DISABLE_SPEEDY),Oh=Object.freeze([]),Hs=Object.freeze({});function E5(e,t,n){return n===void 0&&(n=Hs),e.theme!==n.theme&&e.theme||t||n.theme}var Dk=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),S5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,b5=/(^-|-$)/g;function UE(e){return e.replace(S5,"-").replace(b5,"")}var T5=/(a)(d)/gi,Fc=52,zE=function(e){return String.fromCharCode(e+(e>25?39:97))};function Sv(e){var t,n="";for(t=Math.abs(e);t>Fc;t=t/Fc|0)n=zE(t%Fc)+n;return(zE(t%Fc)+n).replace(T5,"$1-$2")}var Im,Mk=5381,ps=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Lk=function(e){return ps(Mk,e)};function jk(e){return Sv(Lk(e)>>>0)}function I5(e){return e.displayName||e.name||"Component"}function Cm(e){return typeof e=="string"&&!0}var Vk=typeof Symbol=="function"&&Symbol.for,Fk=Vk?Symbol.for("react.memo"):60115,C5=Vk?Symbol.for("react.forward_ref"):60112,x5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},k5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Uk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A5=((Im={})[C5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Im[Fk]=Uk,Im);function BE(e){return("type"in(t=e)&&t.type.$$typeof)===Fk?Uk:"$$typeof"in e?A5[e.$$typeof]:x5;var t}var P5=Object.defineProperty,R5=Object.getOwnPropertyNames,WE=Object.getOwnPropertySymbols,O5=Object.getOwnPropertyDescriptor,N5=Object.getPrototypeOf,HE=Object.prototype;function zk(e,t,n){if(typeof t!="string"){if(HE){var r=N5(t);r&&r!==HE&&zk(e,r,n)}var i=R5(t);WE&&(i=i.concat(WE(t)));for(var o=BE(e),s=BE(t),a=0;a<i.length;++a){var l=i[a];if(!(l in k5||n&&n[l]||s&&l in s||o&&l in o)){var u=O5(t,l);try{P5(e,l,u)}catch{}}}}return e}function qs(e){return typeof e=="function"}function X0(e){return typeof e=="object"&&"styledComponentId"in e}function no(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function bv(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function iu(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Tv(e,t,n){if(n===void 0&&(n=!1),!n&&!iu(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Tv(e[r],t[r]);else if(iu(t))for(var r in t)e[r]=Tv(e[r],t[r]);return e}function J0(e,t){Object.defineProperty(e,"toString",{value:t})}function zu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var $5=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw zu(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Y0);return n},e}(),$f=new Map,Cd=new Map,Df=1,Uc=function(e){if($f.has(e))return $f.get(e);for(;Cd.has(Df);)Df++;var t=Df++;return $f.set(e,t),Cd.set(t,e),t},D5=function(e,t){Df=t+1,$f.set(e,t),Cd.set(t,e)},M5="style[".concat(Ws,"][").concat($k,'="').concat(Rh,'"]'),L5=new RegExp("^".concat(Ws,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),j5=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},V5=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Y0),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(L5);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(D5(c,u),j5(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function F5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bk=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ws,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ws,Nk),r.setAttribute($k,Rh);var s=F5();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},U5=function(){function e(t){this.element=Bk(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw zu(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),z5=function(){function e(t){this.element=Bk(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),B5=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),qE=Q0,W5={isServer:!Q0,useCSSOMInjection:!w5},Wk=function(){function e(t,n,r){t===void 0&&(t=Hs),n===void 0&&(n={});var i=this;this.options=Xt(Xt({},W5),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Q0&&qE&&(qE=!1,function(o){for(var s=document.querySelectorAll(M5),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Ws)!==Nk&&(V5(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),J0(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var d=function(v){return Cd.get(v)}(f);if(d===void 0)return"continue";var p=o.names.get(d),g=s.getGroup(f);if(p===void 0||g.length===0)return"continue";var m="".concat(Ws,".g").concat(f,'[id="').concat(d,'"]'),_="";p!==void 0&&p.forEach(function(v){v.length>0&&(_+="".concat(v,","))}),l+="".concat(g).concat(m,'{content:"').concat(_,'"}').concat(Y0)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Uc(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Xt(Xt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new B5(i):r?new U5(i):new z5(i)}(this.options),new $5(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Uc(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Uc(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Uc(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),H5=/&/g,q5=/^\s*\/\/.*$/gm;function Hk(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Hk(n.children,t)),n})}function G5(e){var t,n,r,i=e===void 0?Hs:e,o=i.options,s=o===void 0?Hs:o,a=i.plugins,l=a===void 0?Oh:a,u=function(d,p,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):d},c=l.slice();c.push(function(d){d.type===xh&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(H5,n).replace(r,u))}),s.prefix&&c.push(y5),c.push(m5);var f=function(d,p,g,m){p===void 0&&(p=""),g===void 0&&(g=""),m===void 0&&(m="&"),t=m,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var _=d.replace(q5,""),v=h5(g||p?"".concat(g," ").concat(p," { ").concat(_," }"):_);s.namespace&&(v=Hk(v,s.namespace));var h=[];return Id(v,g5(c.concat(v5(function(y){return h.push(y)})))),h};return f.hash=l.length?l.reduce(function(d,p){return p.name||zu(15),ps(d,p.name)},Mk).toString():"",f}var K5=new Wk,Iv=G5(),qk=q.createContext({shouldForwardProp:void 0,styleSheet:K5,stylis:Iv});qk.Consumer;q.createContext(void 0);function GE(){return S.useContext(qk)}var Gk=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Iv);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,J0(this,function(){throw zu(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Iv),this.name+t.hash},e}(),Y5=function(e){return e>="A"&&e<="Z"};function KE(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Y5(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Kk=function(e){return e==null||e===!1||e===""},Yk=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Kk(o)&&(Array.isArray(o)&&o.isCss||qs(o)?r.push("".concat(KE(i),":"),o,";"):iu(o)?r.push.apply(r,ru(ru(["".concat(i," {")],Yk(o),!1),["}"],!1)):r.push("".concat(KE(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in _5||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function po(e,t,n,r){if(Kk(e))return[];if(X0(e))return[".".concat(e.styledComponentId)];if(qs(e)){if(!qs(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return po(i,t,n,r)}var o;return e instanceof Gk?n?(e.inject(n,r),[e.getName(r)]):[e]:iu(e)?Yk(e):Array.isArray(e)?Array.prototype.concat.apply(Oh,e.map(function(s){return po(s,t,n,r)})):[e.toString()]}function Q5(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(qs(n)&&!X0(n))return!1}return!0}var X5=Lk(Rh),J5=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Q5(t),this.componentId=n,this.baseHash=ps(X5,n),this.baseStyle=r,Wk.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=no(i,this.staticRulesId);else{var o=bv(po(this.rules,t,n,r)),s=Sv(ps(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=no(i,s),this.staticRulesId=s}else{for(var l=ps(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=bv(po(f,t,n,r));l=ps(l,d+c),u+=d}}if(u){var p=Sv(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=no(i,p)}}return i},e}(),Qk=q.createContext(void 0);Qk.Consumer;var xm={};function Z5(e,t,n){var r=X0(e),i=e,o=!Cm(e),s=t.attrs,a=s===void 0?Oh:s,l=t.componentId,u=l===void 0?function(E,T){var I=typeof E!="string"?"sc":UE(E);xm[I]=(xm[I]||0)+1;var b="".concat(I,"-").concat(jk(Rh+I+xm[I]));return T?"".concat(T,"-").concat(b):b}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(E){return Cm(E)?"styled.".concat(E):"Styled(".concat(I5(E),")")}(e):c,d=t.displayName&&t.componentId?"".concat(UE(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var m=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;g=function(E,T){return m(E,T)&&_(E,T)}}else g=m}var v=new J5(n,d,r?i.componentStyle:void 0);function h(E,T){return function(I,b,R){var j=I.attrs,O=I.componentStyle,ue=I.defaultProps,ye=I.foldedComponentIds,Le=I.styledComponentId,Be=I.target,_n=q.useContext(Qk),wn=GE(),_e=I.shouldForwardProp||wn.shouldForwardProp,$=E5(b,_n,ue)||Hs,D=function(En,lt,Ft){for(var ve,X=Xt(Xt({},lt),{className:void 0,theme:Ft}),ut=0;ut<En.length;ut+=1){var sn=qs(ve=En[ut])?ve(X):ve;for(var $n in sn)X[$n]=$n==="className"?no(X[$n],sn[$n]):$n==="style"?Xt(Xt({},X[$n]),sn[$n]):sn[$n]}return lt.className&&(X.className=no(X.className,lt.className)),X}(j,b,$),H=D.as||Be,se={};for(var ae in D)D[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&D.theme===$||(ae==="forwardedAs"?se.as=D.forwardedAs:_e&&!_e(ae,H)||(se[ae]=D[ae]));var on=function(En,lt){var Ft=GE(),ve=En.generateAndInjectStyles(lt,Ft.styleSheet,Ft.stylis);return ve}(O,D),at=no(ye,Le);return on&&(at+=" "+on),D.className&&(at+=" "+D.className),se[Cm(H)&&!Dk.has(H)?"class":"className"]=at,se.ref=R,S.createElement(H,se)}(y,E,T)}h.displayName=f;var y=q.forwardRef(h);return y.attrs=p,y.componentStyle=v,y.displayName=f,y.shouldForwardProp=g,y.foldedComponentIds=r?no(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=d,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(T){for(var I=[],b=1;b<arguments.length;b++)I[b-1]=arguments[b];for(var R=0,j=I;R<j.length;R++)Tv(T,j[R],!0);return T}({},i.defaultProps,E):E}}),J0(y,function(){return".".concat(y.styledComponentId)}),o&&zk(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function YE(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var QE=function(e){return Object.assign(e,{isCss:!0})};function bo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(qs(e)||iu(e))return QE(po(YE(Oh,ru([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?po(r):QE(po(YE(r,t)))}function Cv(e,t,n){if(n===void 0&&(n=Hs),!t)throw zu(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,bo.apply(void 0,ru([i],o,!1)))};return r.attrs=function(i){return Cv(e,t,Xt(Xt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Cv(e,t,Xt(Xt({},n),i))},r}var Xk=function(e){return Cv(Z5,e)},k=Xk;Dk.forEach(function(e){k[e]=Xk(e)});function Z0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=bv(bo.apply(void 0,ru([e],t,!1))),i=jk(r);return new Gk(i,r)}var e1={},Jk={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Jk);var t1=Jk.exports,km={};function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function ii(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function Zk(e){if(!ii(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=Zk(e[n])}),t}function Hn(e,t,n={clone:!0}){const r=n.clone?B({},e):e;return ii(e)&&ii(t)&&Object.keys(t).forEach(i=>{i!=="__proto__"&&(ii(t[i])&&i in e&&ii(e[i])?r[i]=Hn(e[i],t[i],n):n.clone?r[i]=ii(t[i])?Zk(t[i]):t[i]:r[i]=t[i])}),r}function Gs(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function cr(e){if(typeof e!="string")throw new Error(Gs(7));return e.charAt(0).toUpperCase()+e.slice(1)}function eL(...e){return e.reduce((t,n)=>n==null?t:function(...i){t.apply(this,i),n.apply(this,i)},()=>{})}function tL(e,t=166){let n;function r(...i){const o=()=>{e.apply(this,i)};clearTimeout(n),n=setTimeout(o,t)}return r.clear=()=>{clearTimeout(n)},r}function nL(e,t){return()=>null}function rL(e,t){var n,r;return S.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function eA(e){return e&&e.ownerDocument||document}function iL(e){return eA(e).defaultView||window}function oL(e,t){return()=>null}function tA(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const sL=typeof window<"u"?S.useLayoutEffect:S.useEffect,nA=sL;let XE=0;function aL(e){const[t,n]=S.useState(e),r=e||t;return S.useEffect(()=>{t==null&&(XE+=1,n(`mui-${XE}`))},[t]),r}const JE=Jf.useId;function lL(e){if(JE!==void 0){const t=JE();return e??t}return aL(e)}function uL(e,t,n,r,i){return null}function cL({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=S.useRef(e!==void 0),[o,s]=S.useState(t),a=i?e:o,l=S.useCallback(u=>{i||s(u)},[]);return[a,l]}function fL(e){const t=S.useRef(e);return nA(()=>{t.current=e}),S.useRef((...n)=>(0,t.current)(...n)).current}function dL(...e){return S.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{tA(n,t)})},e)}let Nh=!0,xv=!1,ZE;const hL={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function pL(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&hL[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function mL(e){e.metaKey||e.altKey||e.ctrlKey||(Nh=!0)}function Am(){Nh=!1}function gL(){this.visibilityState==="hidden"&&xv&&(Nh=!0)}function vL(e){e.addEventListener("keydown",mL,!0),e.addEventListener("mousedown",Am,!0),e.addEventListener("pointerdown",Am,!0),e.addEventListener("touchstart",Am,!0),e.addEventListener("visibilitychange",gL,!0)}function yL(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Nh||pL(t)}function _L(){const e=S.useCallback(i=>{i!=null&&vL(i.ownerDocument)},[]),t=S.useRef(!1);function n(){return t.current?(xv=!0,window.clearTimeout(ZE),ZE=window.setTimeout(()=>{xv=!1},100),t.current=!1,!0):!1}function r(i){return yL(i)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function rA(e,t){const n=B({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=B({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},o=t[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]=B({},o),Object.keys(i).forEach(s=>{n[r][s]=rA(i[s],o[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function wL(e,t,n=void 0){const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((o,s)=>{if(s){const a=t(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),r}const eS=e=>e,EL=()=>{let e=eS;return{configure(t){e=t},generate(t){return e(t)},reset(){e=eS}}},iA=EL(),SL={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function oA(e,t,n="Mui"){const r=SL[t];return r?`${n}-${r}`:`${iA.generate(e)}-${t}`}function bL(e,t,n="Mui"){const r={};return t.forEach(i=>{r[i]=oA(e,i,n)}),r}function Qn(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sA(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=sA(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function TL(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=sA(e))&&(r&&(r+=" "),r+=t);return r}function IL(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function CL(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var xL=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(CL(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=IL(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Rt="-ms-",xd="-moz-",ce="-webkit-",aA="comm",n1="rule",r1="decl",kL="@import",lA="@keyframes",AL="@layer",PL=Math.abs,$h=String.fromCharCode,RL=Object.assign;function OL(e,t){return wt(e,0)^45?(((t<<2^wt(e,0))<<2^wt(e,1))<<2^wt(e,2))<<2^wt(e,3):0}function uA(e){return e.trim()}function NL(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,n){return e.replace(t,n)}function kv(e,t){return e.indexOf(t)}function wt(e,t){return e.charCodeAt(t)|0}function ou(e,t,n){return e.slice(t,n)}function tr(e){return e.length}function i1(e){return e.length}function zc(e,t){return t.push(e),e}function $L(e,t){return e.map(t).join("")}var Dh=1,Ks=1,cA=0,rn=0,Ye=0,ha="";function Mh(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Dh,column:Ks,length:s,return:""}}function Ba(e,t){return RL(Mh("",null,null,"",null,null,0),e,{length:-e.length},t)}function DL(){return Ye}function ML(){return Ye=rn>0?wt(ha,--rn):0,Ks--,Ye===10&&(Ks=1,Dh--),Ye}function dn(){return Ye=rn<cA?wt(ha,rn++):0,Ks++,Ye===10&&(Ks=1,Dh++),Ye}function fr(){return wt(ha,rn)}function Mf(){return rn}function Bu(e,t){return ou(ha,e,t)}function su(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fA(e){return Dh=Ks=1,cA=tr(ha=e),rn=0,[]}function dA(e){return ha="",e}function Lf(e){return uA(Bu(rn-1,Av(e===91?e+2:e===40?e+1:e)))}function LL(e){for(;(Ye=fr())&&Ye<33;)dn();return su(e)>2||su(Ye)>3?"":" "}function jL(e,t){for(;--t&&dn()&&!(Ye<48||Ye>102||Ye>57&&Ye<65||Ye>70&&Ye<97););return Bu(e,Mf()+(t<6&&fr()==32&&dn()==32))}function Av(e){for(;dn();)switch(Ye){case e:return rn;case 34:case 39:e!==34&&e!==39&&Av(Ye);break;case 40:e===41&&Av(e);break;case 92:dn();break}return rn}function VL(e,t){for(;dn()&&e+Ye!==57;)if(e+Ye===84&&fr()===47)break;return"/*"+Bu(t,rn-1)+"*"+$h(e===47?e:dn())}function FL(e){for(;!su(fr());)dn();return Bu(e,rn)}function UL(e){return dA(jf("",null,null,null,[""],e=fA(e),0,[0],e))}function jf(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,p=0,g=0,m=1,_=1,v=1,h=0,y="",E=i,T=o,I=r,b=y;_;)switch(g=h,h=dn()){case 40:if(g!=108&&wt(b,f-1)==58){kv(b+=fe(Lf(h),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:b+=Lf(h);break;case 9:case 10:case 13:case 32:b+=LL(g);break;case 92:b+=jL(Mf()-1,7);continue;case 47:switch(fr()){case 42:case 47:zc(zL(VL(dn(),Mf()),t,n),l);break;default:b+="/"}break;case 123*m:a[u++]=tr(b)*v;case 125*m:case 59:case 0:switch(h){case 0:case 125:_=0;case 59+c:v==-1&&(b=fe(b,/\f/g,"")),p>0&&tr(b)-f&&zc(p>32?nS(b+";",r,n,f-1):nS(fe(b," ","")+";",r,n,f-2),l);break;case 59:b+=";";default:if(zc(I=tS(b,t,n,u,c,i,a,y,E=[],T=[],f),o),h===123)if(c===0)jf(b,t,I,I,E,o,f,a,T);else switch(d===99&&wt(b,3)===110?100:d){case 100:case 108:case 109:case 115:jf(e,I,I,r&&zc(tS(e,I,I,0,0,i,a,y,i,E=[],f),T),i,T,f,a,r?E:T);break;default:jf(b,I,I,I,[""],T,0,a,T)}}u=c=p=0,m=v=1,y=b="",f=s;break;case 58:f=1+tr(b),p=g;default:if(m<1){if(h==123)--m;else if(h==125&&m++==0&&ML()==125)continue}switch(b+=$h(h),h*m){case 38:v=c>0?1:(b+="\f",-1);break;case 44:a[u++]=(tr(b)-1)*v,v=1;break;case 64:fr()===45&&(b+=Lf(dn())),d=fr(),c=f=tr(y=b+=FL(Mf())),h++;break;case 45:g===45&&tr(b)==2&&(m=0)}}return o}function tS(e,t,n,r,i,o,s,a,l,u,c){for(var f=i-1,d=i===0?o:[""],p=i1(d),g=0,m=0,_=0;g<r;++g)for(var v=0,h=ou(e,f+1,f=PL(m=s[g])),y=e;v<p;++v)(y=uA(m>0?d[v]+" "+h:fe(h,/&\f/g,d[v])))&&(l[_++]=y);return Mh(e,t,n,i===0?n1:a,l,u,c)}function zL(e,t,n){return Mh(e,t,n,aA,$h(DL()),ou(e,2,-2),0)}function nS(e,t,n,r){return Mh(e,t,n,r1,ou(e,0,r),ou(e,r+1,-1),r)}function Cs(e,t){for(var n="",r=i1(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function BL(e,t,n,r){switch(e.type){case AL:if(e.children.length)break;case kL:case r1:return e.return=e.return||e.value;case aA:return"";case lA:return e.return=e.value+"{"+Cs(e.children,r)+"}";case n1:e.value=e.props.join(",")}return tr(n=Cs(e.children,r))?e.return=e.value+"{"+n+"}":""}function WL(e){var t=i1(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function HL(e){return function(t){t.root||(t=t.return)&&e(t)}}var qL=function(t,n,r){for(var i=0,o=0;i=o,o=fr(),i===38&&o===12&&(n[r]=1),!su(o);)dn();return Bu(t,rn)},GL=function(t,n){var r=-1,i=44;do switch(su(i)){case 0:i===38&&fr()===12&&(n[r]=1),t[r]+=qL(rn-1,n,r);break;case 2:t[r]+=Lf(i);break;case 4:if(i===44){t[++r]=fr()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=$h(i)}while(i=dn());return t},KL=function(t,n){return dA(GL(fA(t),n))},rS=new WeakMap,YL=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!rS.get(r))&&!i){rS.set(t,!0);for(var o=[],s=KL(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=o[l]?s[l].replace(/&\f/g,a[c]):a[c]+" "+s[l]}}},QL=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function hA(e,t){switch(OL(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+xd+e+Rt+e+e;case 6828:case 4268:return ce+e+Rt+e+e;case 6165:return ce+e+Rt+"flex-"+e+e;case 5187:return ce+e+fe(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+Rt+"flex-$1$2")+e;case 5443:return ce+e+Rt+"flex-item-"+fe(e,/flex-|-self/,"")+e;case 4675:return ce+e+Rt+"flex-line-pack"+fe(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+Rt+fe(e,"shrink","negative")+e;case 5292:return ce+e+Rt+fe(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+fe(e,"-grow","")+ce+e+Rt+fe(e,"grow","positive")+e;case 4554:return ce+fe(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tr(e)-1-t>6)switch(wt(e,t+1)){case 109:if(wt(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+xd+(wt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~kv(e,"stretch")?hA(fe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(wt(e,t+1)!==115)break;case 6444:switch(wt(e,tr(e)-3-(~kv(e,"!important")&&10))){case 107:return fe(e,":",":"+ce)+e;case 101:return fe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(wt(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+Rt+"$2box$3")+e}break;case 5936:switch(wt(e,t+11)){case 114:return ce+e+Rt+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+Rt+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+Rt+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+Rt+e+e}return e}var XL=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case r1:t.return=hA(t.value,t.length);break;case lA:return Cs([Ba(t,{value:fe(t.value,"@","@"+ce)})],i);case n1:if(t.length)return $L(t.props,function(o){switch(NL(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Cs([Ba(t,{props:[fe(o,/:(read-\w+)/,":"+xd+"$1")]})],i);case"::placeholder":return Cs([Ba(t,{props:[fe(o,/:(plac\w+)/,":"+ce+"input-$1")]}),Ba(t,{props:[fe(o,/:(plac\w+)/,":"+xd+"$1")]}),Ba(t,{props:[fe(o,/:(plac\w+)/,Rt+"input-$1")]})],i)}return""})}},JL=[XL],ZL=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var _=m.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=t.stylisPlugins||JL,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var _=m.getAttribute("data-emotion").split(" "),v=1;v<_.length;v++)o[_[v]]=!0;a.push(m)});var l,u=[YL,QL];{var c,f=[BL,HL(function(m){c.insert(m)})],d=WL(u.concat(i,f)),p=function(_){return Cs(UL(_),d)};l=function(_,v,h,y){c=h,p(_?_+"{"+v.styles+"}":v.styles),y&&(g.inserted[v.name]=!0)}}var g={key:n,sheet:new xL({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(a),g},pA={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mt=typeof Symbol=="function"&&Symbol.for,o1=mt?Symbol.for("react.element"):60103,s1=mt?Symbol.for("react.portal"):60106,Lh=mt?Symbol.for("react.fragment"):60107,jh=mt?Symbol.for("react.strict_mode"):60108,Vh=mt?Symbol.for("react.profiler"):60114,Fh=mt?Symbol.for("react.provider"):60109,Uh=mt?Symbol.for("react.context"):60110,a1=mt?Symbol.for("react.async_mode"):60111,zh=mt?Symbol.for("react.concurrent_mode"):60111,Bh=mt?Symbol.for("react.forward_ref"):60112,Wh=mt?Symbol.for("react.suspense"):60113,ej=mt?Symbol.for("react.suspense_list"):60120,Hh=mt?Symbol.for("react.memo"):60115,qh=mt?Symbol.for("react.lazy"):60116,tj=mt?Symbol.for("react.block"):60121,nj=mt?Symbol.for("react.fundamental"):60117,rj=mt?Symbol.for("react.responder"):60118,ij=mt?Symbol.for("react.scope"):60119;function vn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case o1:switch(e=e.type,e){case a1:case zh:case Lh:case Vh:case jh:case Wh:return e;default:switch(e=e&&e.$$typeof,e){case Uh:case Bh:case qh:case Hh:case Fh:return e;default:return t}}case s1:return t}}}function mA(e){return vn(e)===zh}ge.AsyncMode=a1;ge.ConcurrentMode=zh;ge.ContextConsumer=Uh;ge.ContextProvider=Fh;ge.Element=o1;ge.ForwardRef=Bh;ge.Fragment=Lh;ge.Lazy=qh;ge.Memo=Hh;ge.Portal=s1;ge.Profiler=Vh;ge.StrictMode=jh;ge.Suspense=Wh;ge.isAsyncMode=function(e){return mA(e)||vn(e)===a1};ge.isConcurrentMode=mA;ge.isContextConsumer=function(e){return vn(e)===Uh};ge.isContextProvider=function(e){return vn(e)===Fh};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===o1};ge.isForwardRef=function(e){return vn(e)===Bh};ge.isFragment=function(e){return vn(e)===Lh};ge.isLazy=function(e){return vn(e)===qh};ge.isMemo=function(e){return vn(e)===Hh};ge.isPortal=function(e){return vn(e)===s1};ge.isProfiler=function(e){return vn(e)===Vh};ge.isStrictMode=function(e){return vn(e)===jh};ge.isSuspense=function(e){return vn(e)===Wh};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Lh||e===zh||e===Vh||e===jh||e===Wh||e===ej||typeof e=="object"&&e!==null&&(e.$$typeof===qh||e.$$typeof===Hh||e.$$typeof===Fh||e.$$typeof===Uh||e.$$typeof===Bh||e.$$typeof===nj||e.$$typeof===rj||e.$$typeof===ij||e.$$typeof===tj)};ge.typeOf=vn;pA.exports=ge;var oj=pA.exports,l1=oj,sj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},aj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lj={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u1={};u1[l1.ForwardRef]=lj;u1[l1.Memo]=gA;function iS(e){return l1.isMemo(e)?gA:u1[e.$$typeof]||sj}var uj=Object.defineProperty,cj=Object.getOwnPropertyNames,oS=Object.getOwnPropertySymbols,fj=Object.getOwnPropertyDescriptor,dj=Object.getPrototypeOf,sS=Object.prototype;function vA(e,t,n){if(typeof t!="string"){if(sS){var r=dj(t);r&&r!==sS&&vA(e,r,n)}var i=cj(t);oS&&(i=i.concat(oS(t)));for(var o=iS(e),s=iS(t),a=0;a<i.length;++a){var l=i[a];if(!aj[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=fj(t,l);try{uj(e,l,u)}catch{}}}}return e}var hj=vA;const pj=$o(hj);var mj=!0;function gj(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var yA=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||mj===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},vj=function(t,n,r){yA(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function yj(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var _j={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wj=/[A-Z]|^ms/g,Ej=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_A=function(t){return t.charCodeAt(1)===45},aS=function(t){return t!=null&&typeof t!="boolean"},Pm=Ik(function(e){return _A(e)?e:e.replace(wj,"-$&").toLowerCase()}),lS=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Ej,function(r,i,o){return nr={name:i,styles:o,next:nr},i})}return _j[t]!==1&&!_A(t)&&typeof n=="number"&&n!==0?n+"px":n};function au(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return nr={name:n.name,styles:n.styles,next:nr},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)nr={name:r.name,styles:r.styles,next:nr},r=r.next;var i=n.styles+";";return i}return Sj(e,t,n)}case"function":{if(e!==void 0){var o=nr,s=n(e);return nr=o,au(e,t,s)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Sj(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=au(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":aS(s)&&(r+=Pm(o)+":"+lS(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)aS(s[a])&&(r+=Pm(o)+":"+lS(o,s[a])+";");else{var l=au(e,t,s);switch(o){case"animation":case"animationName":{r+=Pm(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var uS=/label:\s*([^\s;\n{]+)\s*(;|$)/g,nr,bj=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";nr=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=au(r,n,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=au(r,n,t[a]),i&&(o+=s[a]);uS.lastIndex=0;for(var l="",u;(u=uS.exec(o))!==null;)l+="-"+u[1];var c=yj(o)+l;return{name:c,styles:o,next:nr}},Tj=function(t){return t()},Ij=Jf.useInsertionEffect?Jf.useInsertionEffect:!1,Cj=Ij||Tj,wA=S.createContext(typeof HTMLElement<"u"?ZL({key:"css"}):null);wA.Provider;var xj=function(t){return S.forwardRef(function(n,r){var i=S.useContext(wA);return t(n,i,r)})},EA=S.createContext({}),kj=e5,Aj=function(t){return t!=="theme"},cS=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?kj:Aj},fS=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Pj=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return yA(n,r,i),Cj(function(){return vj(n,r,i)}),null},Rj=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=fS(t,n,r),l=a||cS(i),u=!l("as");return function(){var c=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)f.push.apply(f,c);else{f.push(c[0][0]);for(var d=c.length,p=1;p<d;p++)f.push(c[p],c[0][p])}var g=xj(function(m,_,v){var h=u&&m.as||i,y="",E=[],T=m;if(m.theme==null){T={};for(var I in m)T[I]=m[I];T.theme=S.useContext(EA)}typeof m.className=="string"?y=gj(_.registered,E,m.className):m.className!=null&&(y=m.className+" ");var b=bj(f.concat(E),_.registered,T);y+=_.key+"-"+b.name,s!==void 0&&(y+=" "+s);var R=u&&a===void 0?cS(h):l,j={};for(var O in m)u&&O==="as"||R(O)&&(j[O]=m[O]);return j.className=y,j.ref=v,S.createElement(S.Fragment,null,S.createElement(Pj,{cache:_,serialized:b,isStringTag:typeof h=="string"}),S.createElement(h,j))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=f,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+s}}),g.withComponent=function(m,_){return e(m,B({},n,_,{shouldForwardProp:fS(g,_,!0)})).apply(void 0,f)},g}},Oj=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Pv=Rj.bind();Oj.forEach(function(e){Pv[e]=Pv(e)});function Nj(e,t){return Pv(e,t)}const $j=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Dj=["values","unit","step"],Mj=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>B({},n,{[r.key]:r.val}),{})};function Lj(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,i=Qn(e,Dj),o=Mj(t),s=Object.keys(o);function a(d){return`@media (min-width:${typeof t[d]=="number"?t[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof t[d]=="number"?t[d]:d)-r/100}${n})`}function u(d,p){const g=s.indexOf(p);return`@media (min-width:${typeof t[d]=="number"?t[d]:d}${n}) and (max-width:${(g!==-1&&typeof t[s[g]]=="number"?t[s[g]]:p)-r/100}${n})`}function c(d){return s.indexOf(d)+1<s.length?u(d,s[s.indexOf(d)+1]):a(d)}function f(d){const p=s.indexOf(d);return p===0?a(s[1]):p===s.length-1?l(s[p]):u(d,s[s.indexOf(d)+1]).replace("@media","@media not all and")}return B({keys:s,values:o,up:a,down:l,between:u,only:c,not:f,unit:n},i)}const jj={borderRadius:4},Vj=jj;function Il(e,t){return t?Hn(e,t,{clone:!1}):e}const c1={xs:0,sm:600,md:900,lg:1200,xl:1536},dS={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${c1[e]}px)`};function $r(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const o=r.breakpoints||dS;return t.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(t[l]),s),{})}if(typeof t=="object"){const o=r.breakpoints||dS;return Object.keys(t).reduce((s,a)=>{if(Object.keys(o.values||c1).indexOf(a)!==-1){const l=o.up(a);s[l]=n(t[a],a)}else{const l=a;s[l]=t[l]}return s},{})}return n(t)}function Fj(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,i)=>{const o=e.up(i);return r[o]={},r},{}))||{}}function Uj(e,t){return e.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},t)}function Gh(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(r!=null)return r}return t.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,e)}function kd(e,t,n,r=n){let i;return typeof e=="function"?i=e(n):Array.isArray(e)?i=e[n]||r:i=Gh(e,n)||r,t&&(i=t(i,r,e)),i}function He(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,o=s=>{if(s[t]==null)return null;const a=s[t],l=s.theme,u=Gh(l,r)||{};return $r(s,a,f=>{let d=kd(u,i,f);return f===d&&typeof f=="string"&&(d=kd(u,i,`${t}${f==="default"?"":cr(f)}`,f)),n===!1?d:{[n]:d}})};return o.propTypes={},o.filterProps=[t],o}function zj(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const Bj={m:"margin",p:"padding"},Wj={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},hS={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Hj=zj(e=>{if(e.length>2)if(hS[e])e=hS[e];else return[e];const[t,n]=e.split(""),r=Bj[t],i=Wj[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),f1=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],d1=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...f1,...d1];function Wu(e,t,n,r){var i;const o=(i=Gh(e,t,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function SA(e){return Wu(e,"spacing",8)}function Hu(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function qj(e,t){return n=>e.reduce((r,i)=>(r[i]=Hu(t,n),r),{})}function Gj(e,t,n,r){if(t.indexOf(n)===-1)return null;const i=Hj(n),o=qj(i,r),s=e[n];return $r(e,s,o)}function bA(e,t){const n=SA(e.theme);return Object.keys(e).map(r=>Gj(e,t,r,n)).reduce(Il,{})}function je(e){return bA(e,f1)}je.propTypes={};je.filterProps=f1;function Ve(e){return bA(e,d1)}Ve.propTypes={};Ve.filterProps=d1;function Kj(e=8){if(e.mui)return e;const t=SA({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=t(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Kh(...e){const t=e.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>t[o]?Il(i,t[o](r)):i,{});return n.propTypes={},n.filterProps=e.reduce((r,i)=>r.concat(i.filterProps),[]),n}function Tn(e){return typeof e!="number"?e:`${e}px solid`}function Nn(e,t){return He({prop:e,themeKey:"borders",transform:t})}const Yj=Nn("border",Tn),Qj=Nn("borderTop",Tn),Xj=Nn("borderRight",Tn),Jj=Nn("borderBottom",Tn),Zj=Nn("borderLeft",Tn),e3=Nn("borderColor"),t3=Nn("borderTopColor"),n3=Nn("borderRightColor"),r3=Nn("borderBottomColor"),i3=Nn("borderLeftColor"),o3=Nn("outline",Tn),s3=Nn("outlineColor"),Yh=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Wu(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:Hu(t,r)});return $r(e,e.borderRadius,n)}return null};Yh.propTypes={};Yh.filterProps=["borderRadius"];Kh(Yj,Qj,Xj,Jj,Zj,e3,t3,n3,r3,i3,Yh,o3,s3);const Qh=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Wu(e.theme,"spacing",8),n=r=>({gap:Hu(t,r)});return $r(e,e.gap,n)}return null};Qh.propTypes={};Qh.filterProps=["gap"];const Xh=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Wu(e.theme,"spacing",8),n=r=>({columnGap:Hu(t,r)});return $r(e,e.columnGap,n)}return null};Xh.propTypes={};Xh.filterProps=["columnGap"];const Jh=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Wu(e.theme,"spacing",8),n=r=>({rowGap:Hu(t,r)});return $r(e,e.rowGap,n)}return null};Jh.propTypes={};Jh.filterProps=["rowGap"];const a3=He({prop:"gridColumn"}),l3=He({prop:"gridRow"}),u3=He({prop:"gridAutoFlow"}),c3=He({prop:"gridAutoColumns"}),f3=He({prop:"gridAutoRows"}),d3=He({prop:"gridTemplateColumns"}),h3=He({prop:"gridTemplateRows"}),p3=He({prop:"gridTemplateAreas"}),m3=He({prop:"gridArea"});Kh(Qh,Xh,Jh,a3,l3,u3,c3,f3,d3,h3,p3,m3);function xs(e,t){return t==="grey"?t:e}const g3=He({prop:"color",themeKey:"palette",transform:xs}),v3=He({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:xs}),y3=He({prop:"backgroundColor",themeKey:"palette",transform:xs});Kh(g3,v3,y3);function un(e){return e<=1&&e!==0?`${e*100}%`:e}const _3=He({prop:"width",transform:un}),h1=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,i;const o=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||c1[n];return o?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:un(n)}};return $r(e,e.maxWidth,t)}return null};h1.filterProps=["maxWidth"];const w3=He({prop:"minWidth",transform:un}),E3=He({prop:"height",transform:un}),S3=He({prop:"maxHeight",transform:un}),b3=He({prop:"minHeight",transform:un});He({prop:"size",cssProperty:"width",transform:un});He({prop:"size",cssProperty:"height",transform:un});const T3=He({prop:"boxSizing"});Kh(_3,h1,w3,E3,S3,b3,T3);const I3={border:{themeKey:"borders",transform:Tn},borderTop:{themeKey:"borders",transform:Tn},borderRight:{themeKey:"borders",transform:Tn},borderBottom:{themeKey:"borders",transform:Tn},borderLeft:{themeKey:"borders",transform:Tn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Tn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Yh},color:{themeKey:"palette",transform:xs},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:xs},backgroundColor:{themeKey:"palette",transform:xs},p:{style:Ve},pt:{style:Ve},pr:{style:Ve},pb:{style:Ve},pl:{style:Ve},px:{style:Ve},py:{style:Ve},padding:{style:Ve},paddingTop:{style:Ve},paddingRight:{style:Ve},paddingBottom:{style:Ve},paddingLeft:{style:Ve},paddingX:{style:Ve},paddingY:{style:Ve},paddingInline:{style:Ve},paddingInlineStart:{style:Ve},paddingInlineEnd:{style:Ve},paddingBlock:{style:Ve},paddingBlockStart:{style:Ve},paddingBlockEnd:{style:Ve},m:{style:je},mt:{style:je},mr:{style:je},mb:{style:je},ml:{style:je},mx:{style:je},my:{style:je},margin:{style:je},marginTop:{style:je},marginRight:{style:je},marginBottom:{style:je},marginLeft:{style:je},marginX:{style:je},marginY:{style:je},marginInline:{style:je},marginInlineStart:{style:je},marginInlineEnd:{style:je},marginBlock:{style:je},marginBlockStart:{style:je},marginBlockEnd:{style:je},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Qh},rowGap:{style:Jh},columnGap:{style:Xh},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:un},maxWidth:{style:h1},minWidth:{transform:un},height:{transform:un},maxHeight:{transform:un},minHeight:{transform:un},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},p1=I3;function C3(...e){const t=e.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function x3(e,t){return typeof e=="function"?e(t):e}function k3(){function e(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:u,transform:c,style:f}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const d=Gh(i,u)||{};return f?f(s):$r(s,r,g=>{let m=kd(d,c,g);return g===m&&typeof g=="string"&&(m=kd(d,c,`${n}${g==="default"?"":cr(g)}`,g)),l===!1?m:{[l]:m}})}function t(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const s=(r=o.unstable_sxConfig)!=null?r:p1;function a(l){let u=l;if(typeof l=="function")u=l(o);else if(typeof l!="object")return l;if(!u)return null;const c=Fj(o.breakpoints),f=Object.keys(c);let d=c;return Object.keys(u).forEach(p=>{const g=x3(u[p],o);if(g!=null)if(typeof g=="object")if(s[p])d=Il(d,e(p,g,o,s));else{const m=$r({theme:o},g,_=>({[p]:_}));C3(m,g)?d[p]=t({sx:g,theme:o}):d=Il(d,m)}else d=Il(d,e(p,g,o,s))}),Uj(f,d)}return Array.isArray(i)?i.map(a):a(i)}return t}const Zh=k3();Zh.filterProps=["sx"];const A3=["breakpoints","palette","spacing","shape"];function m1(e={},...t){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=e,s=Qn(e,A3),a=Lj(n),l=Kj(i);let u=Hn({breakpoints:a,direction:"ltr",components:{},palette:B({mode:"light"},r),spacing:l,shape:B({},Vj,o)},s);return u=t.reduce((c,f)=>Hn(c,f),u),u.unstable_sxConfig=B({},p1,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(f){return Zh({sx:f,theme:this})},u}function P3(e){return Object.keys(e).length===0}function R3(e=null){const t=S.useContext(EA);return!t||P3(t)?e:t}const O3=m1();function N3(e=O3){return R3(e)}const $3=["variant"];function pS(e){return e.length===0}function TA(e){const{variant:t}=e,n=Qn(e,$3);let r=t||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=pS(r)?e[i]:cr(e[i]):r+=`${pS(r)?i:cr(i)}${cr(e[i].toString())}`}),r}const D3=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function M3(e){return Object.keys(e).length===0}function L3(e){return typeof e=="string"&&e.charCodeAt(0)>96}const j3=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,Ad=e=>{let t=0;const n={};return e&&e.forEach(r=>{let i="";typeof r.props=="function"?(i=`callback${t}`,t+=1):i=TA(r.props),n[i]=r.style}),n},V3=(e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),Ad(n)},Pd=(e,t,n)=>{const{ownerState:r={}}=e,i=[];let o=0;return n&&n.forEach(s=>{let a=!0;if(typeof s.props=="function"){const l=B({},e,r);a=s.props(l)}else Object.keys(s.props).forEach(l=>{r[l]!==s.props[l]&&e[l]!==s.props[l]&&(a=!1)});a&&(typeof s.props=="function"?i.push(t[`callback${o}`]):i.push(t[TA(s.props)])),typeof s.props=="function"&&(o+=1)}),i},F3=(e,t,n,r)=>{var i;const o=n==null||(i=n.components)==null||(i=i[r])==null?void 0:i.variants;return Pd(e,t,o)};function Vf(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const U3=m1(),z3=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Ff({defaultTheme:e,theme:t,themeId:n}){return M3(t)?e:t[n]||t}function B3(e){return e?(t,n)=>n[e]:null}const mS=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const i=e(B({},t,{theme:Ff(B({},t,{defaultTheme:n,themeId:r}))}));let o;if(i&&i.variants&&(o=i.variants,delete i.variants),o){const s=Pd(t,Ad(o),o);return[i,...s]}return i};function W3(e={}){const{themeId:t,defaultTheme:n=U3,rootShouldForwardProp:r=Vf,slotShouldForwardProp:i=Vf}=e,o=s=>Zh(B({},s,{theme:Ff(B({},s,{defaultTheme:n,themeId:t}))}));return o.__mui_systemSx=!0,(s,a={})=>{$j(s,E=>E.filter(T=>!(T!=null&&T.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:f,overridesResolver:d=B3(z3(u))}=a,p=Qn(a,D3),g=c!==void 0?c:u&&u!=="Root"&&u!=="root"||!1,m=f||!1;let _,v=Vf;u==="Root"||u==="root"?v=r:u?v=i:L3(s)&&(v=void 0);const h=Nj(s,B({shouldForwardProp:v,label:_},p)),y=(E,...T)=>{const I=T?T.map(O=>{if(typeof O=="function"&&O.__emotion_real!==O)return ue=>mS({styledArg:O,props:ue,defaultTheme:n,themeId:t});if(ii(O)){let ue=O,ye;return O&&O.variants&&(ye=O.variants,delete ue.variants,ue=Le=>{let Be=O;return Pd(Le,Ad(ye),ye).forEach(wn=>{Be=Hn(Be,wn)}),Be}),ue}return O}):[];let b=E;if(ii(E)){let O;E&&E.variants&&(O=E.variants,delete b.variants,b=ue=>{let ye=E;return Pd(ue,Ad(O),O).forEach(Be=>{ye=Hn(ye,Be)}),ye})}else typeof E=="function"&&E.__emotion_real!==E&&(b=O=>mS({styledArg:E,props:O,defaultTheme:n,themeId:t}));l&&d&&I.push(O=>{const ue=Ff(B({},O,{defaultTheme:n,themeId:t})),ye=j3(l,ue);if(ye){const Le={};return Object.entries(ye).forEach(([Be,_n])=>{Le[Be]=typeof _n=="function"?_n(B({},O,{theme:ue})):_n}),d(O,Le)}return null}),l&&!g&&I.push(O=>{const ue=Ff(B({},O,{defaultTheme:n,themeId:t}));return F3(O,V3(l,ue),ue,l)}),m||I.push(o);const R=I.length-T.length;if(Array.isArray(E)&&R>0){const O=new Array(R).fill("");b=[...E,...O],b.raw=[...E.raw,...O]}const j=h(b,...I);return s.muiName&&(j.muiName=s.muiName),j};return h.withConfig&&(y.withConfig=h.withConfig),y}}function H3(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:rA(t.components[n].defaultProps,r)}function q3({props:e,name:t,defaultTheme:n,themeId:r}){let i=N3(n);return r&&(i=i[r]||i),H3({theme:i,name:t,props:e})}function IA(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function G3(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Ys(e){if(e.type)return e;if(e.charAt(0)==="#")return Ys(G3(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Gs(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Gs(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function g1(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function K3(e){e=Ys(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),s=(u,c=(u+n/30)%12)=>i-o*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",l.push(t[3])),g1({type:a,values:l})}function gS(e){e=Ys(e);let t=e.type==="hsl"||e.type==="hsla"?Ys(K3(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Y3(e,t){const n=gS(e),r=gS(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Q3(e,t){if(e=Ys(e),t=IA(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return g1(e)}function X3(e,t){if(e=Ys(e),t=IA(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return g1(e)}function J3(e,t){return B({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Z3={black:"#000",white:"#fff"},lu=Z3,eV={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},tV=eV,nV={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Wo=nV,rV={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ho=rV,iV={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Wa=iV,oV={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},qo=oV,sV={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Go=sV,aV={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Ko=aV,lV=["mode","contrastThreshold","tonalOffset"],vS={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:lu.white,default:lu.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Rm={text:{primary:lu.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:lu.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function yS(e,t,n,r){const i=r.light||r,o=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=X3(e.main,i):t==="dark"&&(e.dark=Q3(e.main,o)))}function uV(e="light"){return e==="dark"?{main:qo[200],light:qo[50],dark:qo[400]}:{main:qo[700],light:qo[400],dark:qo[800]}}function cV(e="light"){return e==="dark"?{main:Wo[200],light:Wo[50],dark:Wo[400]}:{main:Wo[500],light:Wo[300],dark:Wo[700]}}function fV(e="light"){return e==="dark"?{main:Ho[500],light:Ho[300],dark:Ho[700]}:{main:Ho[700],light:Ho[400],dark:Ho[800]}}function dV(e="light"){return e==="dark"?{main:Go[400],light:Go[300],dark:Go[700]}:{main:Go[700],light:Go[500],dark:Go[900]}}function hV(e="light"){return e==="dark"?{main:Ko[400],light:Ko[300],dark:Ko[700]}:{main:Ko[800],light:Ko[500],dark:Ko[900]}}function pV(e="light"){return e==="dark"?{main:Wa[400],light:Wa[300],dark:Wa[700]}:{main:"#ed6c02",light:Wa[500],dark:Wa[900]}}function mV(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,i=Qn(e,lV),o=e.primary||uV(t),s=e.secondary||cV(t),a=e.error||fV(t),l=e.info||dV(t),u=e.success||hV(t),c=e.warning||pV(t);function f(m){return Y3(m,Rm.text.primary)>=n?Rm.text.primary:vS.text.primary}const d=({color:m,name:_,mainShade:v=500,lightShade:h=300,darkShade:y=700})=>{if(m=B({},m),!m.main&&m[v]&&(m.main=m[v]),!m.hasOwnProperty("main"))throw new Error(Gs(11,_?` (${_})`:"",v));if(typeof m.main!="string")throw new Error(Gs(12,_?` (${_})`:"",JSON.stringify(m.main)));return yS(m,"light",h,r),yS(m,"dark",y,r),m.contrastText||(m.contrastText=f(m.main)),m},p={dark:Rm,light:vS};return Hn(B({common:B({},lu),mode:t,primary:d({color:o,name:"primary"}),secondary:d({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:c,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:u,name:"success"}),grey:tV,contrastThreshold:n,getContrastText:f,augmentColor:d,tonalOffset:r},p[t]),i)}const gV=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function vV(e){return Math.round(e*1e5)/1e5}const _S={textTransform:"uppercase"},wS='"Roboto", "Helvetica", "Arial", sans-serif';function yV(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=wS,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:f}=n,d=Qn(n,gV),p=i/14,g=f||(v=>`${v/u*p}rem`),m=(v,h,y,E,T)=>B({fontFamily:r,fontWeight:v,fontSize:g(h),lineHeight:y},r===wS?{letterSpacing:`${vV(E/h)}em`}:{},T,c),_={h1:m(o,96,1.167,-1.5),h2:m(o,60,1.2,-.5),h3:m(s,48,1.167,0),h4:m(s,34,1.235,.25),h5:m(s,24,1.334,0),h6:m(a,20,1.6,.15),subtitle1:m(s,16,1.75,.15),subtitle2:m(a,14,1.57,.1),body1:m(s,16,1.5,.15),body2:m(s,14,1.43,.15),button:m(a,14,1.75,.4,_S),caption:m(s,12,1.66,.4),overline:m(s,12,2.66,1,_S),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Hn(B({htmlFontSize:u,pxToRem:g,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},_),d,{clone:!1})}const _V=.2,wV=.14,EV=.12;function Pe(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${_V})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${wV})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${EV})`].join(",")}const SV=["none",Pe(0,2,1,-1,0,1,1,0,0,1,3,0),Pe(0,3,1,-2,0,2,2,0,0,1,5,0),Pe(0,3,3,-2,0,3,4,0,0,1,8,0),Pe(0,2,4,-1,0,4,5,0,0,1,10,0),Pe(0,3,5,-1,0,5,8,0,0,1,14,0),Pe(0,3,5,-1,0,6,10,0,0,1,18,0),Pe(0,4,5,-2,0,7,10,1,0,2,16,1),Pe(0,5,5,-3,0,8,10,1,0,3,14,2),Pe(0,5,6,-3,0,9,12,1,0,3,16,2),Pe(0,6,6,-3,0,10,14,1,0,4,18,3),Pe(0,6,7,-4,0,11,15,1,0,4,20,3),Pe(0,7,8,-4,0,12,17,2,0,5,22,4),Pe(0,7,8,-4,0,13,19,2,0,5,24,4),Pe(0,7,9,-4,0,14,21,2,0,5,26,4),Pe(0,8,9,-5,0,15,22,2,0,6,28,5),Pe(0,8,10,-5,0,16,24,2,0,6,30,5),Pe(0,8,11,-5,0,17,26,2,0,6,32,5),Pe(0,9,11,-5,0,18,28,2,0,7,34,6),Pe(0,9,12,-6,0,19,29,2,0,7,36,6),Pe(0,10,13,-6,0,20,31,3,0,8,38,7),Pe(0,10,13,-6,0,21,33,3,0,8,40,7),Pe(0,10,14,-6,0,22,35,3,0,8,42,7),Pe(0,11,14,-7,0,23,36,3,0,9,44,8),Pe(0,11,15,-7,0,24,38,3,0,9,46,8)],bV=["duration","easing","delay"],TV={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},IV={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function ES(e){return`${Math.round(e)}ms`}function CV(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function xV(e){const t=B({},TV,e.easing),n=B({},IV,e.duration);return B({getAutoHeightDuration:CV,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:l=0}=o;return Qn(o,bV),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:ES(s)} ${a} ${typeof l=="string"?l:ES(l)}`).join(",")}},e,{easing:t,duration:n})}const kV={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},AV=kV,PV=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function RV(e={},...t){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=e,s=Qn(e,PV);if(e.vars)throw new Error(Gs(18));const a=mV(r),l=m1(e);let u=Hn(l,{mixins:J3(l.breakpoints,n),palette:a,shadows:SV.slice(),typography:yV(a,o),transitions:xV(i),zIndex:B({},AV)});return u=Hn(u,s),u=t.reduce((c,f)=>Hn(c,f),u),u.unstable_sxConfig=B({},p1,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(f){return Zh({sx:f,theme:this})},u}const OV=RV(),CA=OV,xA="$$material";function NV({props:e,name:t}){return q3({props:e,name:t,defaultTheme:CA,themeId:xA})}const $V=e=>Vf(e)&&e!=="classes",DV=W3({themeId:xA,defaultTheme:CA,rootShouldForwardProp:$V});function MV(e){return oA("MuiSvgIcon",e)}bL("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const LV=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],jV=e=>{const{color:t,fontSize:n,classes:r}=e,i={root:["root",t!=="inherit"&&`color${cr(t)}`,`fontSize${cr(n)}`]};return wL(i,MV,r)},VV=DV("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${cr(n.color)}`],t[`fontSize${cr(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,i,o,s,a,l,u,c,f,d,p,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=e.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((o=e.typography)==null||(s=o.pxToRem)==null?void 0:s.call(o,20))||"1.25rem",medium:((a=e.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((u=e.typography)==null||(c=u.pxToRem)==null?void 0:c.call(u,35))||"2.1875rem"}[t.fontSize],color:(f=(d=(e.vars||e).palette)==null||(d=d[t.color])==null?void 0:d.main)!=null?f:{action:(p=(e.vars||e).palette)==null||(p=p.action)==null?void 0:p.active,disabled:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.disabled,inherit:void 0}[t.color]}}),Rv=S.forwardRef(function(t,n){const r=NV({props:t,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:c=!1,titleAccess:f,viewBox:d="0 0 24 24"}=r,p=Qn(r,LV),g=S.isValidElement(i)&&i.type==="svg",m=B({},r,{color:s,component:a,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:c,viewBox:d,hasSvgAsChild:g}),_={};c||(_.viewBox=d);const v=jV(m);return w.jsxs(VV,B({as:a,className:TL(v.root,o),focusable:"false",color:u,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n},_,p,g&&i.props,{ownerState:m,children:[g?i.props.children:i,f?w.jsx("title",{children:f}):null]}))});Rv.muiName="SvgIcon";function FV(e,t){function n(r,i){return w.jsx(Rv,B({"data-testid":`${t}Icon`,ref:i},r,{children:e}))}return n.muiName=Rv.muiName,S.memo(S.forwardRef(n))}const UV={configure:e=>{iA.configure(e)}},zV=Object.freeze(Object.defineProperty({__proto__:null,capitalize:cr,createChainedFunction:eL,createSvgIcon:FV,debounce:tL,deprecatedPropType:nL,isMuiElement:rL,ownerDocument:eA,ownerWindow:iL,requirePropFactory:oL,setRef:tA,unstable_ClassNameGenerator:UV,unstable_useEnhancedEffect:nA,unstable_useId:lL,unsupportedProp:uL,useControlled:cL,useEventCallback:fL,useForkRef:dL,useIsFocusVisible:_L},Symbol.toStringTag,{value:"Module"})),BV=HN(zV);var SS;function v1(){return SS||(SS=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=BV}(km)),km}var WV=t1;Object.defineProperty(e1,"__esModule",{value:!0});var kA=e1.default=void 0,HV=WV(v1()),qV=w,GV=(0,HV.default)((0,qV.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"}),"ShoppingBagOutlined");kA=e1.default=GV;var KV=Math.ceil,YV=Math.max;function QV(e,t,n,r){for(var i=-1,o=YV(KV((t-e)/(n||1)),0),s=Array(o);o--;)s[r?o:++i]=e,e+=n;return s}var XV=QV;function JV(e,t){return e===t||e!==e&&t!==t}var y1=JV,ZV=typeof Oe=="object"&&Oe&&Oe.Object===Object&&Oe,AA=ZV,e9=AA,t9=typeof self=="object"&&self&&self.Object===Object&&self,n9=e9||t9||Function("return this")(),vr=n9,r9=vr,i9=r9.Symbol,ep=i9,bS=ep,PA=Object.prototype,o9=PA.hasOwnProperty,s9=PA.toString,Ha=bS?bS.toStringTag:void 0;function a9(e){var t=o9.call(e,Ha),n=e[Ha];try{e[Ha]=void 0;var r=!0}catch{}var i=s9.call(e);return r&&(t?e[Ha]=n:delete e[Ha]),i}var l9=a9,u9=Object.prototype,c9=u9.toString;function f9(e){return c9.call(e)}var d9=f9,TS=ep,h9=l9,p9=d9,m9="[object Null]",g9="[object Undefined]",IS=TS?TS.toStringTag:void 0;function v9(e){return e==null?e===void 0?g9:m9:IS&&IS in Object(e)?h9(e):p9(e)}var qu=v9;function y9(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var tp=y9,_9=qu,w9=tp,E9="[object AsyncFunction]",S9="[object Function]",b9="[object GeneratorFunction]",T9="[object Proxy]";function I9(e){if(!w9(e))return!1;var t=_9(e);return t==S9||t==b9||t==E9||t==T9}var RA=I9,C9=9007199254740991;function x9(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=C9}var OA=x9,k9=RA,A9=OA;function P9(e){return e!=null&&A9(e.length)&&!k9(e)}var NA=P9,R9=9007199254740991,O9=/^(?:0|[1-9]\d*)$/;function N9(e,t){var n=typeof e;return t=t??R9,!!t&&(n=="number"||n!="symbol"&&O9.test(e))&&e>-1&&e%1==0&&e<t}var $A=N9,$9=y1,D9=NA,M9=$A,L9=tp;function j9(e,t,n){if(!L9(n))return!1;var r=typeof t;return(r=="number"?D9(n)&&M9(t,n.length):r=="string"&&t in n)?$9(n[t],e):!1}var V9=j9,F9=/\s/;function U9(e){for(var t=e.length;t--&&F9.test(e.charAt(t)););return t}var z9=U9,B9=z9,W9=/^\s+/;function H9(e){return e&&e.slice(0,B9(e)+1).replace(W9,"")}var q9=H9;function G9(e){return e!=null&&typeof e=="object"}var Gu=G9,K9=qu,Y9=Gu,Q9="[object Symbol]";function X9(e){return typeof e=="symbol"||Y9(e)&&K9(e)==Q9}var DA=X9,J9=q9,CS=tp,Z9=DA,xS=NaN,e6=/^[-+]0x[0-9a-f]+$/i,t6=/^0b[01]+$/i,n6=/^0o[0-7]+$/i,r6=parseInt;function i6(e){if(typeof e=="number")return e;if(Z9(e))return xS;if(CS(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=CS(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=J9(e);var n=t6.test(e);return n||n6.test(e)?r6(e.slice(2),n?2:8):e6.test(e)?xS:+e}var MA=i6,o6=MA,kS=1/0,s6=17976931348623157e292;function a6(e){if(!e)return e===0?e:0;if(e=o6(e),e===kS||e===-kS){var t=e<0?-1:1;return t*s6}return e===e?e:0}var LA=a6,l6=XV,u6=V9,Om=LA;function c6(e){return function(t,n,r){return r&&typeof r!="number"&&u6(t,n,r)&&(n=r=void 0),t=Om(t),n===void 0?(n=t,t=0):n=Om(n),r=r===void 0?t<n?1:-1:Om(r),l6(t,n,r,e)}}var f6=c6,d6=f6,h6=d6(),p6=h6;const m6=$o(p6);var jA={};Object.defineProperty(jA,"__esModule",{value:!0});jA.default=g6;function g6(e){return e.displayName||e.name||(typeof e=="string"&&e.length>0?e:"Unknown")}function Bc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rd(){return Rd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rd.apply(this,arguments)}function v6(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Gr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y6(e){var t=function(n){v6(r,n);function r(){for(var o,s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return o=n.call.apply(n,[this].concat(a))||this,Bc(Gr(Gr(o)),"cachedTheme",void 0),Bc(Gr(Gr(o)),"lastOuterTheme",void 0),Bc(Gr(Gr(o)),"lastTheme",void 0),Bc(Gr(Gr(o)),"renderProvider",function(u){var c=o.props.children;return q.createElement(e.Provider,{value:o.getTheme(u)},c)}),o}var i=r.prototype;return i.getTheme=function(s){if(this.props.theme!==this.lastTheme||s!==this.lastOuterTheme||!this.cachedTheme)if(this.lastOuterTheme=s,this.lastTheme=this.props.theme,typeof this.lastTheme=="function"){var a=this.props.theme;this.cachedTheme=a(s)}else{var l=this.props.theme;this.cachedTheme=s?Rd({},s,l):l}return this.cachedTheme},i.render=function(){var s=this.props.children;return s?q.createElement(e.Consumer,null,this.renderProvider):null},r}(q.Component);return t}function _6(e){return function(n){var r=q.forwardRef(function(i,o){return q.createElement(e.Consumer,null,function(s){return q.createElement(n,Rd({theme:s,ref:o},i))})});return pj(r,n),r}}function w6(e){var t=function(){var r=q.useContext(e);return r};return t}function E6(e){return{context:e,withTheme:_6(e),useTheme:w6(e),ThemeProvider:y6(e)}}var VA=S.createContext();E6(VA);var AS=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pa=(typeof window>"u"?"undefined":AS(window))==="object"&&(typeof document>"u"?"undefined":AS(document))==="object"&&document.nodeType===9;function uu(e){"@babel/helpers - typeof";return uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},uu(e)}function S6(e,t){if(uu(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(uu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b6(e){var t=S6(e,"string");return uu(t)=="symbol"?t:String(t)}function PS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b6(r.key),r)}}function _1(e,t,n){return t&&PS(e.prototype,t),n&&PS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ov(e,t){return Ov=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ov(e,t)}function FA(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ov(e,t)}function RS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T6={}.constructor;function Nv(e){if(e==null||typeof e!="object")return e;if(Array.isArray(e))return e.map(Nv);if(e.constructor!==T6)return e;var t={};for(var n in e)t[n]=Nv(e[n]);return t}function np(e,t,n){e===void 0&&(e="unnamed");var r=n.jss,i=Nv(t),o=r.plugins.onCreateRule(e,i,n);return o||(e[0],null)}var OS=function(t,n){for(var r="",i=0;i<t.length&&t[i]!=="!important";i++)r&&(r+=n),r+=t[i];return r},mo=function(t){if(!Array.isArray(t))return t;var n="";if(Array.isArray(t[0]))for(var r=0;r<t.length&&t[r]!=="!important";r++)n&&(n+=", "),n+=OS(t[r]," ");else n=OS(t,", ");return t[t.length-1]==="!important"&&(n+=" !important"),n};function ma(e){return e&&e.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function qa(e,t){for(var n="",r=0;r<t;r++)n+="  ";return n+e}function cu(e,t,n){n===void 0&&(n={});var r="";if(!t)return r;var i=n,o=i.indent,s=o===void 0?0:o,a=t.fallbacks;n.format===!1&&(s=-1/0);var l=ma(n),u=l.linebreak,c=l.space;if(e&&s++,a)if(Array.isArray(a))for(var f=0;f<a.length;f++){var d=a[f];for(var p in d){var g=d[p];g!=null&&(r&&(r+=u),r+=qa(p+":"+c+mo(g)+";",s))}}else for(var m in a){var _=a[m];_!=null&&(r&&(r+=u),r+=qa(m+":"+c+mo(_)+";",s))}for(var v in t){var h=t[v];h!=null&&v!=="fallbacks"&&(r&&(r+=u),r+=qa(v+":"+c+mo(h)+";",s))}return!r&&!n.allowEmpty||!e?r:(s--,r&&(r=""+u+r+u),qa(""+e+c+"{"+r,s)+qa("}",s))}var I6=/([[\].#*$><+~=|^:(),"'`\s])/g,NS=typeof CSS<"u"&&CSS.escape,w1=function(e){return NS?NS(e):e.replace(I6,"\\$1")},UA=function(){function e(n,r,i){this.type="style",this.isProcessed=!1;var o=i.sheet,s=i.Renderer;this.key=n,this.options=i,this.style=r,o?this.renderer=o.renderer:s&&(this.renderer=new s)}var t=e.prototype;return t.prop=function(r,i,o){if(i===void 0)return this.style[r];var s=o?o.force:!1;if(!s&&this.style[r]===i)return this;var a=i;(!o||o.process!==!1)&&(a=this.options.jss.plugins.onChangeValue(i,r,this));var l=a==null||a===!1,u=r in this.style;if(l&&!u&&!s)return this;var c=l&&u;if(c?delete this.style[r]:this.style[r]=a,this.renderable&&this.renderer)return c?this.renderer.removeProperty(this.renderable,r):this.renderer.setProperty(this.renderable,r,a),this;var f=this.options.sheet;return f&&f.attached,this},e}(),$v=function(e){FA(t,e);function t(r,i,o){var s;s=e.call(this,r,i,o)||this;var a=o.selector,l=o.scoped,u=o.sheet,c=o.generateId;return a?s.selectorText=a:l!==!1&&(s.id=c(RS(RS(s)),u),s.selectorText="."+w1(s.id)),s}var n=t.prototype;return n.applyTo=function(i){var o=this.renderer;if(o){var s=this.toJSON();for(var a in s)o.setProperty(i,a,s[a])}return this},n.toJSON=function(){var i={};for(var o in this.style){var s=this.style[o];typeof s!="object"?i[o]=s:Array.isArray(s)&&(i[o]=mo(s))}return i},n.toString=function(i){var o=this.options.sheet,s=o?o.options.link:!1,a=s?B({},i,{allowEmpty:!0}):i;return cu(this.selectorText,this.style,a)},_1(t,[{key:"selector",set:function(i){if(i!==this.selectorText){this.selectorText=i;var o=this.renderer,s=this.renderable;if(!(!s||!o)){var a=o.setSelector(s,i);a||o.replaceRule(s,this)}}},get:function(){return this.selectorText}}]),t}(UA),C6={onCreateRule:function(t,n,r){return t[0]==="@"||r.parent&&r.parent.type==="keyframes"?null:new $v(t,n,r)}},Nm={indent:1,children:!0},x6=/@([\w-]+)/,k6=function(){function e(n,r,i){this.type="conditional",this.isProcessed=!1,this.key=n;var o=n.match(x6);this.at=o?o[1]:"unknown",this.query=i.name||"@"+this.at,this.options=i,this.rules=new rp(B({},i,{parent:this}));for(var s in r)this.rules.add(s,r[s]);this.rules.process()}var t=e.prototype;return t.getRule=function(r){return this.rules.get(r)},t.indexOf=function(r){return this.rules.indexOf(r)},t.addRule=function(r,i,o){var s=this.rules.add(r,i,o);return s?(this.options.jss.plugins.onProcessRule(s),s):null},t.replaceRule=function(r,i,o){var s=this.rules.replace(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},t.toString=function(r){r===void 0&&(r=Nm);var i=ma(r),o=i.linebreak;if(r.indent==null&&(r.indent=Nm.indent),r.children==null&&(r.children=Nm.children),r.children===!1)return this.query+" {}";var s=this.rules.toString(r);return s?this.query+" {"+o+s+o+"}":""},e}(),A6=/@container|@media|@supports\s+/,P6={onCreateRule:function(t,n,r){return A6.test(t)?new k6(t,n,r):null}},$m={indent:1,children:!0},R6=/@keyframes\s+([\w-]+)/,Dv=function(){function e(n,r,i){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var o=n.match(R6);o&&o[1]?this.name=o[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=i;var s=i.scoped,a=i.sheet,l=i.generateId;this.id=s===!1?this.name:w1(l(this,a)),this.rules=new rp(B({},i,{parent:this}));for(var u in r)this.rules.add(u,r[u],B({},i,{parent:this}));this.rules.process()}var t=e.prototype;return t.toString=function(r){r===void 0&&(r=$m);var i=ma(r),o=i.linebreak;if(r.indent==null&&(r.indent=$m.indent),r.children==null&&(r.children=$m.children),r.children===!1)return this.at+" "+this.id+" {}";var s=this.rules.toString(r);return s&&(s=""+o+s+o),this.at+" "+this.id+" {"+s+"}"},e}(),O6=/@keyframes\s+/,N6=/\$([\w-]+)/g,Mv=function(t,n){return typeof t=="string"?t.replace(N6,function(r,i){return i in n?n[i]:r}):t},$S=function(t,n,r){var i=t[n],o=Mv(i,r);o!==i&&(t[n]=o)},$6={onCreateRule:function(t,n,r){return typeof t=="string"&&O6.test(t)?new Dv(t,n,r):null},onProcessStyle:function(t,n,r){return n.type!=="style"||!r||("animation-name"in t&&$S(t,"animation-name",r.keyframes),"animation"in t&&$S(t,"animation",r.keyframes)),t},onChangeValue:function(t,n,r){var i=r.options.sheet;if(!i)return t;switch(n){case"animation":return Mv(t,i.keyframes);case"animation-name":return Mv(t,i.keyframes);default:return t}}},D6=function(e){FA(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.toString=function(i){var o=this.options.sheet,s=o?o.options.link:!1,a=s?B({},i,{allowEmpty:!0}):i;return cu(this.key,this.style,a)},t}(UA),M6={onCreateRule:function(t,n,r){return r.parent&&r.parent.type==="keyframes"?new D6(t,n,r):null}},L6=function(){function e(n,r,i){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var t=e.prototype;return t.toString=function(r){var i=ma(r),o=i.linebreak;if(Array.isArray(this.style)){for(var s="",a=0;a<this.style.length;a++)s+=cu(this.at,this.style[a]),this.style[a+1]&&(s+=o);return s}return cu(this.at,this.style,r)},e}(),j6=/@font-face/,V6={onCreateRule:function(t,n,r){return j6.test(t)?new L6(t,n,r):null}},F6=function(){function e(n,r,i){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var t=e.prototype;return t.toString=function(r){return cu(this.key,this.style,r)},e}(),U6={onCreateRule:function(t,n,r){return t==="@viewport"||t==="@-ms-viewport"?new F6(t,n,r):null}},z6=function(){function e(n,r,i){this.type="simple",this.isProcessed=!1,this.key=n,this.value=r,this.options=i}var t=e.prototype;return t.toString=function(r){if(Array.isArray(this.value)){for(var i="",o=0;o<this.value.length;o++)i+=this.key+" "+this.value[o]+";",this.value[o+1]&&(i+=`
`);return i}return this.key+" "+this.value+";"},e}(),B6={"@charset":!0,"@import":!0,"@namespace":!0},W6={onCreateRule:function(t,n,r){return t in B6?new z6(t,n,r):null}},DS=[C6,P6,$6,M6,V6,U6,W6],H6={process:!0},MS={force:!0,process:!0},rp=function(){function e(n){this.map={},this.raw={},this.index=[],this.counter=0,this.options=n,this.classes=n.classes,this.keyframes=n.keyframes}var t=e.prototype;return t.add=function(r,i,o){var s=this.options,a=s.parent,l=s.sheet,u=s.jss,c=s.Renderer,f=s.generateId,d=s.scoped,p=B({classes:this.classes,parent:a,sheet:l,jss:u,Renderer:c,generateId:f,scoped:d,name:r,keyframes:this.keyframes,selector:void 0},o),g=r;r in this.raw&&(g=r+"-d"+this.counter++),this.raw[g]=i,g in this.classes&&(p.selector="."+w1(this.classes[g]));var m=np(g,i,p);if(!m)return null;this.register(m);var _=p.index===void 0?this.index.length:p.index;return this.index.splice(_,0,m),m},t.replace=function(r,i,o){var s=this.get(r),a=this.index.indexOf(s);s&&this.remove(s);var l=o;return a!==-1&&(l=B({},o,{index:a})),this.add(r,i,l)},t.get=function(r){return this.map[r]},t.remove=function(r){this.unregister(r),delete this.raw[r.key],this.index.splice(this.index.indexOf(r),1)},t.indexOf=function(r){return this.index.indexOf(r)},t.process=function(){var r=this.options.jss.plugins;this.index.slice(0).forEach(r.onProcessRule,r)},t.register=function(r){this.map[r.key]=r,r instanceof $v?(this.map[r.selector]=r,r.id&&(this.classes[r.key]=r.id)):r instanceof Dv&&this.keyframes&&(this.keyframes[r.name]=r.id)},t.unregister=function(r){delete this.map[r.key],r instanceof $v?(delete this.map[r.selector],delete this.classes[r.key]):r instanceof Dv&&delete this.keyframes[r.name]},t.update=function(){var r,i,o;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(r=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1],o=arguments.length<=2?void 0:arguments[2]):(i=arguments.length<=0?void 0:arguments[0],o=arguments.length<=1?void 0:arguments[1],r=null),r)this.updateOne(this.get(r),i,o);else for(var s=0;s<this.index.length;s++)this.updateOne(this.index[s],i,o)},t.updateOne=function(r,i,o){o===void 0&&(o=H6);var s=this.options,a=s.jss.plugins,l=s.sheet;if(r.rules instanceof e){r.rules.update(i,o);return}var u=r.style;if(a.onUpdate(i,r,l,o),o.process&&u&&u!==r.style){a.onProcessStyle(r.style,r,l);for(var c in r.style){var f=r.style[c],d=u[c];f!==d&&r.prop(c,f,MS)}for(var p in u){var g=r.style[p],m=u[p];g==null&&g!==m&&r.prop(p,null,MS)}}},t.toString=function(r){for(var i="",o=this.options.sheet,s=o?o.options.link:!1,a=ma(r),l=a.linebreak,u=0;u<this.index.length;u++){var c=this.index[u],f=c.toString(r);!f&&!s||(i&&(i+=l),i+=f)}return i},e}(),zA=function(){function e(n,r){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=B({},r,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),r.Renderer&&(this.renderer=new r.Renderer(this)),this.rules=new rp(this.options);for(var i in n)this.rules.add(i,n[i]);this.rules.process()}var t=e.prototype;return t.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},t.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},t.addRule=function(r,i,o){var s=this.queue;this.attached&&!s&&(this.queue=[]);var a=this.rules.add(r,i,o);return a?(this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&(s?s.push(a):(this.insertRule(a),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),a):(this.deployed=!1,a)):null},t.replaceRule=function(r,i,o){var s=this.rules.get(r);if(!s)return this.addRule(r,i,o);var a=this.rules.replace(r,i,o);return a&&this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&this.renderer&&(a?s.renderable&&this.renderer.replaceRule(s.renderable,a):this.renderer.deleteRule(s)),a):(this.deployed=!1,a)},t.insertRule=function(r){this.renderer&&this.renderer.insertRule(r)},t.addRules=function(r,i){var o=[];for(var s in r){var a=this.addRule(s,r[s],i);a&&o.push(a)}return o},t.getRule=function(r){return this.rules.get(r)},t.deleteRule=function(r){var i=typeof r=="object"?r:this.rules.get(r);return!i||this.attached&&!i.renderable?!1:(this.rules.remove(i),this.attached&&i.renderable&&this.renderer?this.renderer.deleteRule(i.renderable):!0)},t.indexOf=function(r){return this.rules.indexOf(r)},t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},t.update=function(){var r;return(r=this.rules).update.apply(r,arguments),this},t.updateOne=function(r,i,o){return this.rules.updateOne(r,i,o),this},t.toString=function(r){return this.rules.toString(r)},e}(),q6=function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var t=e.prototype;return t.onCreateRule=function(r,i,o){for(var s=0;s<this.registry.onCreateRule.length;s++){var a=this.registry.onCreateRule[s](r,i,o);if(a)return a}return null},t.onProcessRule=function(r){if(!r.isProcessed){for(var i=r.options.sheet,o=0;o<this.registry.onProcessRule.length;o++)this.registry.onProcessRule[o](r,i);r.style&&this.onProcessStyle(r.style,r,i),r.isProcessed=!0}},t.onProcessStyle=function(r,i,o){for(var s=0;s<this.registry.onProcessStyle.length;s++)i.style=this.registry.onProcessStyle[s](i.style,i,o)},t.onProcessSheet=function(r){for(var i=0;i<this.registry.onProcessSheet.length;i++)this.registry.onProcessSheet[i](r)},t.onUpdate=function(r,i,o,s){for(var a=0;a<this.registry.onUpdate.length;a++)this.registry.onUpdate[a](r,i,o,s)},t.onChangeValue=function(r,i,o){for(var s=r,a=0;a<this.registry.onChangeValue.length;a++)s=this.registry.onChangeValue[a](s,i,o);return s},t.use=function(r,i){i===void 0&&(i={queue:"external"});var o=this.plugins[i.queue];o.indexOf(r)===-1&&(o.push(r),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(s,a){for(var l in a)l in s&&s[l].push(a[l]);return s},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e}(),G6=function(){function e(){this.registry=[]}var t=e.prototype;return t.add=function(r){var i=this.registry,o=r.options.index;if(i.indexOf(r)===-1){if(i.length===0||o>=this.index){i.push(r);return}for(var s=0;s<i.length;s++)if(i[s].options.index>o){i.splice(s,0,r);return}}},t.reset=function(){this.registry=[]},t.remove=function(r){var i=this.registry.indexOf(r);this.registry.splice(i,1)},t.toString=function(r){for(var i=r===void 0?{}:r,o=i.attached,s=Qn(i,["attached"]),a=ma(s),l=a.linebreak,u="",c=0;c<this.registry.length;c++){var f=this.registry[c];o!=null&&f.attached!==o||(u&&(u+=l),u+=f.toString(s))}return u},_1(e,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),e}(),Cl=new G6,Lv=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),jv="2f1acc6c3a606b082e5eef5e54414ffb";Lv[jv]==null&&(Lv[jv]=0);var LS=Lv[jv]++,jS=function(t){t===void 0&&(t={});var n=0,r=function(o,s){n+=1;var a="",l="";return s&&(s.options.classNamePrefix&&(l=s.options.classNamePrefix),s.options.jss.id!=null&&(a=String(s.options.jss.id))),t.minify?""+(l||"c")+LS+a+n:l+o.key+"-"+LS+(a?"-"+a:"")+"-"+n};return r},BA=function(t){var n;return function(){return n||(n=t()),n}},K6=function(t,n){try{return t.attributeStyleMap?t.attributeStyleMap.get(n):t.style.getPropertyValue(n)}catch{return""}},Y6=function(t,n,r){try{var i=r;if(Array.isArray(r)&&(i=mo(r)),t.attributeStyleMap)t.attributeStyleMap.set(n,i);else{var o=i?i.indexOf("!important"):-1,s=o>-1?i.substr(0,o-1):i;t.style.setProperty(n,s,o>-1?"important":"")}}catch{return!1}return!0},Q6=function(t,n){try{t.attributeStyleMap?t.attributeStyleMap.delete(n):t.style.removeProperty(n)}catch{}},X6=function(t,n){return t.selectorText=n,t.selectorText===n},WA=BA(function(){return document.querySelector("head")});function J6(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.attached&&r.options.index>t.index&&r.options.insertionPoint===t.insertionPoint)return r}return null}function Z6(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.attached&&r.options.insertionPoint===t.insertionPoint)return r}return null}function eF(e){for(var t=WA(),n=0;n<t.childNodes.length;n++){var r=t.childNodes[n];if(r.nodeType===8&&r.nodeValue.trim()===e)return r}return null}function tF(e){var t=Cl.registry;if(t.length>0){var n=J6(t,e);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if(n=Z6(t,e),n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}var r=e.insertionPoint;if(r&&typeof r=="string"){var i=eF(r);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}function nF(e,t){var n=t.insertionPoint,r=tF(t);if(r!==!1&&r.parent){r.parent.insertBefore(e,r.node);return}if(n&&typeof n.nodeType=="number"){var i=n,o=i.parentNode;o&&o.insertBefore(e,i.nextSibling);return}WA().appendChild(e)}var rF=BA(function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}),VS=function(t,n,r){try{"insertRule"in t?t.insertRule(n,r):"appendRule"in t&&t.appendRule(n)}catch{return!1}return t.cssRules[r]},FS=function(t,n){var r=t.cssRules.length;return n===void 0||n>r?r:n},iF=function(){var t=document.createElement("style");return t.textContent=`
`,t},oF=function(){function e(n){this.getPropertyValue=K6,this.setProperty=Y6,this.removeProperty=Q6,this.setSelector=X6,this.hasInsertedRules=!1,this.cssRules=[],n&&Cl.add(n),this.sheet=n;var r=this.sheet?this.sheet.options:{},i=r.media,o=r.meta,s=r.element;this.element=s||iF(),this.element.setAttribute("data-jss",""),i&&this.element.setAttribute("media",i),o&&this.element.setAttribute("data-meta",o);var a=rF();a&&this.element.setAttribute("nonce",a)}var t=e.prototype;return t.attach=function(){if(!(this.element.parentNode||!this.sheet)){nF(this.element,this.sheet.options);var r=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&r&&(this.hasInsertedRules=!1,this.deploy())}},t.detach=function(){if(this.sheet){var r=this.element.parentNode;r&&r.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},t.deploy=function(){var r=this.sheet;if(r){if(r.options.link){this.insertRules(r.rules);return}this.element.textContent=`
`+r.toString()+`
`}},t.insertRules=function(r,i){for(var o=0;o<r.index.length;o++)this.insertRule(r.index[o],o,i)},t.insertRule=function(r,i,o){if(o===void 0&&(o=this.element.sheet),r.rules){var s=r,a=o;if(r.type==="conditional"||r.type==="keyframes"){var l=FS(o,i);if(a=VS(o,s.toString({children:!1}),l),a===!1)return!1;this.refCssRule(r,l,a)}return this.insertRules(s.rules,a),a}var u=r.toString();if(!u)return!1;var c=FS(o,i),f=VS(o,u,c);return f===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(r,c,f),f)},t.refCssRule=function(r,i,o){r.renderable=o,r.options.parent instanceof zA&&this.cssRules.splice(i,0,o)},t.deleteRule=function(r){var i=this.element.sheet,o=this.indexOf(r);return o===-1?!1:(i.deleteRule(o),this.cssRules.splice(o,1),!0)},t.indexOf=function(r){return this.cssRules.indexOf(r)},t.replaceRule=function(r,i){var o=this.indexOf(r);return o===-1?!1:(this.element.sheet.deleteRule(o),this.cssRules.splice(o,1),this.insertRule(i,o))},t.getRules=function(){return this.element.sheet.cssRules},e}(),sF=0,aF=function(){function e(n){this.id=sF++,this.version="10.10.0",this.plugins=new q6,this.options={id:{minify:!1},createGenerateId:jS,Renderer:pa?oF:null,plugins:[]},this.generateId=jS({minify:!1});for(var r=0;r<DS.length;r++)this.plugins.use(DS[r],{queue:"internal"});this.setup(n)}var t=e.prototype;return t.setup=function(r){return r===void 0&&(r={}),r.createGenerateId&&(this.options.createGenerateId=r.createGenerateId),r.id&&(this.options.id=B({},this.options.id,r.id)),(r.createGenerateId||r.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),r.insertionPoint!=null&&(this.options.insertionPoint=r.insertionPoint),"Renderer"in r&&(this.options.Renderer=r.Renderer),r.plugins&&this.use.apply(this,r.plugins),this},t.createStyleSheet=function(r,i){i===void 0&&(i={});var o=i,s=o.index;typeof s!="number"&&(s=Cl.index===0?0:Cl.index+1);var a=new zA(r,B({},i,{jss:this,generateId:i.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:s}));return this.plugins.onProcessSheet(a),a},t.removeStyleSheet=function(r){return r.detach(),Cl.remove(r),this},t.createRule=function(r,i,o){if(i===void 0&&(i={}),o===void 0&&(o={}),typeof r=="object")return this.createRule(void 0,r,i);var s=B({},o,{name:r,jss:this,Renderer:this.options.Renderer});s.generateId||(s.generateId=this.generateId),s.classes||(s.classes={}),s.keyframes||(s.keyframes={});var a=np(r,i,s);return a&&this.plugins.onProcessRule(a),a},t.use=function(){for(var r=this,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return o.forEach(function(a){r.plugins.use(a)}),this},e}(),HA=function(t){return new aF(t)},US=function(){function e(){this.length=0,this.sheets=new WeakMap}var t=e.prototype;return t.get=function(r){var i=this.sheets.get(r);return i&&i.sheet},t.add=function(r,i){this.sheets.has(r)||(this.length++,this.sheets.set(r,{sheet:i,refs:0}))},t.manage=function(r){var i=this.sheets.get(r);if(i)return i.refs===0&&i.sheet.attach(),i.refs++,i.sheet},t.unmanage=function(r){var i=this.sheets.get(r);i&&i.refs>0&&(i.refs--,i.refs===0&&i.sheet.detach())},_1(e,[{key:"size",get:function(){return this.length}}]),e}(),E1=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function qA(e){var t=null;for(var n in e){var r=e[n],i=typeof r;if(i==="function")t||(t={}),t[n]=r;else if(i==="object"&&r!==null&&!Array.isArray(r)){var o=qA(r);o&&(t||(t={}),t[n]=o)}}return t}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */HA();var GA=Date.now(),Dm="fnValues"+GA,Mm="fnStyle"+ ++GA,lF=function(){return{onCreateRule:function(n,r,i){if(typeof r!="function")return null;var o=np(n,{},i);return o[Mm]=r,o},onProcessStyle:function(n,r){if(Dm in r||Mm in r)return n;var i={};for(var o in n){var s=n[o];typeof s=="function"&&(delete n[o],i[o]=s)}return r[Dm]=i,n},onUpdate:function(n,r,i,o){var s=r,a=s[Mm];a&&(s.style=a(n)||{});var l=s[Dm];if(l)for(var u in l)s.prop(u,l[u](n),o)}}};function uF(e){var t,n=e.Symbol;return typeof n=="function"?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}var Jo;typeof self<"u"?Jo=self:typeof window<"u"?Jo=window:typeof global<"u"?Jo=global:typeof Hy<"u"?Jo=Hy:Jo=Function("return this")();var zS=uF(Jo),BS=function(t){return t&&t[zS]&&t===t[zS]()},cF=function(t){return{onCreateRule:function(r,i,o){if(!BS(i))return null;var s=i,a=np(r,{},o);return s.subscribe(function(l){for(var u in l)a.prop(u,l[u],t)}),a},onProcessRule:function(r){if(!(r&&r.type!=="style")){var i=r,o=i.style,s=function(c){var f=o[c];if(!BS(f))return"continue";delete o[c],f.subscribe({next:function(p){i.prop(c,p,t)}})};for(var a in o)var l=s(a)}}}};const fF=cF;var dF=/;\n/,hF=function(t){for(var n={},r=t.split(dF),i=0;i<r.length;i++){var o=(r[i]||"").trim();if(o){var s=o.indexOf(":");if(s!==-1){var a=o.substr(0,s).trim(),l=o.substr(s+1).trim();n[a]=l}}}return n},pF=function(t){typeof t.style=="string"&&(t.style=hF(t.style))};function mF(){return{onProcessRule:pF}}var Si="@global",Vv="@global ",gF=function(){function e(n,r,i){this.type="global",this.at=Si,this.isProcessed=!1,this.key=n,this.options=i,this.rules=new rp(B({},i,{parent:this}));for(var o in r)this.rules.add(o,r[o]);this.rules.process()}var t=e.prototype;return t.getRule=function(r){return this.rules.get(r)},t.addRule=function(r,i,o){var s=this.rules.add(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},t.replaceRule=function(r,i,o){var s=this.rules.replace(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},t.indexOf=function(r){return this.rules.indexOf(r)},t.toString=function(r){return this.rules.toString(r)},e}(),vF=function(){function e(n,r,i){this.type="global",this.at=Si,this.isProcessed=!1,this.key=n,this.options=i;var o=n.substr(Vv.length);this.rule=i.jss.createRule(o,r,B({},i,{parent:this}))}var t=e.prototype;return t.toString=function(r){return this.rule?this.rule.toString(r):""},e}(),yF=/\s*,\s*/g;function KA(e,t){for(var n=e.split(yF),r="",i=0;i<n.length;i++)r+=t+" "+n[i].trim(),n[i+1]&&(r+=", ");return r}function _F(e,t){var n=e.options,r=e.style,i=r?r[Si]:null;if(i){for(var o in i)t.addRule(o,i[o],B({},n,{selector:KA(o,e.selector)}));delete r[Si]}}function wF(e,t){var n=e.options,r=e.style;for(var i in r)if(!(i[0]!=="@"||i.substr(0,Si.length)!==Si)){var o=KA(i.substr(Si.length),e.selector);t.addRule(o,r[i],B({},n,{selector:o})),delete r[i]}}function EF(){function e(n,r,i){if(!n)return null;if(n===Si)return new gF(n,r,i);if(n[0]==="@"&&n.substr(0,Vv.length)===Vv)return new vF(n,r,i);var o=i.parent;return o&&(o.type==="global"||o.options.parent&&o.options.parent.type==="global")&&(i.scoped=!1),!i.selector&&i.scoped===!1&&(i.selector=n),null}function t(n,r){n.type!=="style"||!r||(_F(n,r),wF(n,r))}return{onCreateRule:e,onProcessRule:t}}var Uf=function(t){return t&&typeof t=="object"&&!Array.isArray(t)},Lm="extendCurrValue"+Date.now();function SF(e,t,n,r){var i=typeof e.extend;if(i==="string"){if(!n)return;var o=n.getRule(e.extend);if(!o||o===t)return;var s=o.options.parent;if(s){var a=s.rules.raw[e.extend];ro(a,t,n,r)}return}if(Array.isArray(e.extend)){for(var l=0;l<e.extend.length;l++){var u=e.extend[l],c=typeof u=="string"?B({},e,{extend:u}):e.extend[l];ro(c,t,n,r)}return}for(var f in e.extend){if(f==="extend"){ro(e.extend.extend,t,n,r);continue}if(Uf(e.extend[f])){f in r||(r[f]={}),ro(e.extend[f],t,n,r[f]);continue}r[f]=e.extend[f]}}function bF(e,t,n,r){for(var i in e)if(i!=="extend"){if(Uf(r[i])&&Uf(e[i])){ro(e[i],t,n,r[i]);continue}if(Uf(e[i])){r[i]=ro(e[i],t,n);continue}r[i]=e[i]}}function ro(e,t,n,r){return r===void 0&&(r={}),SF(e,t,n,r),bF(e,t,n,r),r}function TF(){function e(n,r,i){return"extend"in n?ro(n,r,i):n}function t(n,r,i){if(r!=="extend")return n;if(n==null||n===!1){for(var o in i[Lm])i.prop(o,null);return i[Lm]=null,null}if(typeof n=="object"){for(var s in n)i.prop(s,n[s]);i[Lm]=n}return null}return{onProcessStyle:e,onChangeValue:t}}var WS=/\s*,\s*/g,IF=/&/g,CF=/\$([\w-]+)/g;function xF(){function e(i,o){return function(s,a){var l=i.getRule(a)||o&&o.getRule(a);return l?l.selector:a}}function t(i,o){for(var s=o.split(WS),a=i.split(WS),l="",u=0;u<s.length;u++)for(var c=s[u],f=0;f<a.length;f++){var d=a[f];l&&(l+=", "),l+=d.indexOf("&")!==-1?d.replace(IF,c):c+" "+d}return l}function n(i,o,s){if(s)return B({},s,{index:s.index+1});var a=i.options.nestingLevel;a=a===void 0?1:a+1;var l=B({},i.options,{nestingLevel:a,index:o.indexOf(i)+1});return delete l.name,l}function r(i,o,s){if(o.type!=="style")return i;var a=o,l=a.options.parent,u,c;for(var f in i){var d=f.indexOf("&")!==-1,p=f[0]==="@";if(!(!d&&!p)){if(u=n(a,l,u),d){var g=t(f,a.selector);c||(c=e(l,s)),g=g.replace(CF,c);var m=a.key+"-"+f;"replaceRule"in l?l.replaceRule(m,i[f],B({},u,{selector:g})):l.addRule(m,i[f],B({},u,{selector:g}))}else p&&l.addRule(f,{},u).addRule(a.key,i[f],{selector:a.selector});delete i[f]}}return i}return{onProcessStyle:r}}function Fv(e,t){if(!t)return!0;if(Array.isArray(t)){for(var n=0;n<t.length;n++){var r=Fv(e,t[n]);if(!r)return!1}return!0}if(t.indexOf(" ")>-1)return Fv(e,t.split(" "));var i=e.options.parent;if(t[0]==="$"){var o=i.getRule(t.substr(1));return!o||o===e?!1:(i.classes[e.key]+=" "+i.classes[o.key],!0)}return i.classes[e.key]+=" "+t,!0}function kF(){function e(t,n){return"composes"in t&&(Fv(n,t.composes),delete t.composes),t}return{onProcessStyle:e}}var AF=/[A-Z]/g,PF=/^ms-/,jm={};function RF(e){return"-"+e.toLowerCase()}function YA(e){if(jm.hasOwnProperty(e))return jm[e];var t=e.replace(AF,RF);return jm[e]=PF.test(t)?"-"+t:t}function Od(e){var t={};for(var n in e){var r=n.indexOf("--")===0?n:YA(n);t[r]=e[n]}return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(Od):t.fallbacks=Od(e.fallbacks)),t}function OF(){function e(n){if(Array.isArray(n)){for(var r=0;r<n.length;r++)n[r]=Od(n[r]);return n}return Od(n)}function t(n,r,i){if(r.indexOf("--")===0)return n;var o=YA(r);return r===o?n:(i.prop(o,n),null)}return{onProcessStyle:e,onChangeValue:t}}var C=E1&&CSS?CSS.px:"px",Wc=E1&&CSS?CSS.ms:"ms",Yo=E1&&CSS?CSS.percent:"%",NF={"animation-delay":Wc,"animation-duration":Wc,"background-position":C,"background-position-x":C,"background-position-y":C,"background-size":C,border:C,"border-bottom":C,"border-bottom-left-radius":C,"border-bottom-right-radius":C,"border-bottom-width":C,"border-left":C,"border-left-width":C,"border-radius":C,"border-right":C,"border-right-width":C,"border-top":C,"border-top-left-radius":C,"border-top-right-radius":C,"border-top-width":C,"border-width":C,"border-block":C,"border-block-end":C,"border-block-end-width":C,"border-block-start":C,"border-block-start-width":C,"border-block-width":C,"border-inline":C,"border-inline-end":C,"border-inline-end-width":C,"border-inline-start":C,"border-inline-start-width":C,"border-inline-width":C,"border-start-start-radius":C,"border-start-end-radius":C,"border-end-start-radius":C,"border-end-end-radius":C,margin:C,"margin-bottom":C,"margin-left":C,"margin-right":C,"margin-top":C,"margin-block":C,"margin-block-end":C,"margin-block-start":C,"margin-inline":C,"margin-inline-end":C,"margin-inline-start":C,padding:C,"padding-bottom":C,"padding-left":C,"padding-right":C,"padding-top":C,"padding-block":C,"padding-block-end":C,"padding-block-start":C,"padding-inline":C,"padding-inline-end":C,"padding-inline-start":C,"mask-position-x":C,"mask-position-y":C,"mask-size":C,height:C,width:C,"min-height":C,"max-height":C,"min-width":C,"max-width":C,bottom:C,left:C,top:C,right:C,inset:C,"inset-block":C,"inset-block-end":C,"inset-block-start":C,"inset-inline":C,"inset-inline-end":C,"inset-inline-start":C,"box-shadow":C,"text-shadow":C,"column-gap":C,"column-rule":C,"column-rule-width":C,"column-width":C,"font-size":C,"font-size-delta":C,"letter-spacing":C,"text-decoration-thickness":C,"text-indent":C,"text-stroke":C,"text-stroke-width":C,"word-spacing":C,motion:C,"motion-offset":C,outline:C,"outline-offset":C,"outline-width":C,perspective:C,"perspective-origin-x":Yo,"perspective-origin-y":Yo,"transform-origin":Yo,"transform-origin-x":Yo,"transform-origin-y":Yo,"transform-origin-z":Yo,"transition-delay":Wc,"transition-duration":Wc,"vertical-align":C,"flex-basis":C,"shape-margin":C,size:C,gap:C,grid:C,"grid-gap":C,"row-gap":C,"grid-row-gap":C,"grid-column-gap":C,"grid-template-rows":C,"grid-template-columns":C,"grid-auto-rows":C,"grid-auto-columns":C,"box-shadow-x":C,"box-shadow-y":C,"box-shadow-blur":C,"box-shadow-spread":C,"font-line-height":C,"text-shadow-x":C,"text-shadow-y":C,"text-shadow-blur":C};function QA(e){var t=/(-[a-z])/g,n=function(s){return s[1].toUpperCase()},r={};for(var i in e)r[i]=e[i],r[i.replace(t,n)]=e[i];return r}var $F=QA(NF);function xl(e,t,n){if(t==null)return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]=xl(e,t[r],n);else if(typeof t=="object")if(e==="fallbacks")for(var i in t)t[i]=xl(i,t[i],n);else for(var o in t)t[o]=xl(e+"-"+o,t[o],n);else if(typeof t=="number"&&isNaN(t)===!1){var s=n[e]||$F[e];return s&&!(t===0&&s===C)?typeof s=="function"?s(t).toString():""+t+s:t.toString()}return t}function DF(e){e===void 0&&(e={});var t=QA(e);function n(i,o){if(o.type!=="style")return i;for(var s in i)i[s]=xl(s,i[s],t);return i}function r(i,o){return xl(o,i,t)}return{onProcessStyle:n,onChangeValue:r}}var MF={"background-size":!0,"background-position":!0,border:!0,"border-bottom":!0,"border-left":!0,"border-top":!0,"border-right":!0,"border-radius":!0,"border-image":!0,"border-width":!0,"border-style":!0,"border-color":!0,"box-shadow":!0,flex:!0,margin:!0,padding:!0,outline:!0,"transform-origin":!0,transform:!0,transition:!0},LF={position:!0,size:!0},Hc={padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},background:{attachment:null,color:null,image:null,position:null,repeat:null},border:{width:null,style:null,color:null},"border-top":{width:null,style:null,color:null},"border-right":{width:null,style:null,color:null},"border-bottom":{width:null,style:null,color:null},"border-left":{width:null,style:null,color:null},outline:{width:null,style:null,color:null},"list-style":{type:null,position:null,image:null},transition:{property:null,duration:null,"timing-function":null,timingFunction:null,delay:null},animation:{name:null,duration:null,"timing-function":null,timingFunction:null,delay:null,"iteration-count":null,iterationCount:null,direction:null,"fill-mode":null,fillMode:null,"play-state":null,playState:null},"box-shadow":{x:0,y:0,blur:0,spread:0,color:null,inset:null},"text-shadow":{x:0,y:0,blur:null,color:null}},Vm={border:{radius:"border-radius",image:"border-image",width:"border-width",style:"border-style",color:"border-color"},"border-bottom":{width:"border-bottom-width",style:"border-bottom-style",color:"border-bottom-color"},"border-top":{width:"border-top-width",style:"border-top-style",color:"border-top-color"},"border-left":{width:"border-left-width",style:"border-left-style",color:"border-left-color"},"border-right":{width:"border-right-width",style:"border-right-style",color:"border-right-color"},background:{size:"background-size",image:"background-image"},font:{style:"font-style",variant:"font-variant",weight:"font-weight",stretch:"font-stretch",size:"font-size",family:"font-family",lineHeight:"line-height","line-height":"line-height"},flex:{grow:"flex-grow",basis:"flex-basis",direction:"flex-direction",wrap:"flex-wrap",flow:"flex-flow",shrink:"flex-shrink"},align:{self:"align-self",items:"align-items",content:"align-content"},grid:{"template-columns":"grid-template-columns",templateColumns:"grid-template-columns","template-rows":"grid-template-rows",templateRows:"grid-template-rows","template-areas":"grid-template-areas",templateAreas:"grid-template-areas",template:"grid-template","auto-columns":"grid-auto-columns",autoColumns:"grid-auto-columns","auto-rows":"grid-auto-rows",autoRows:"grid-auto-rows","auto-flow":"grid-auto-flow",autoFlow:"grid-auto-flow",row:"grid-row",column:"grid-column","row-start":"grid-row-start",rowStart:"grid-row-start","row-end":"grid-row-end",rowEnd:"grid-row-end","column-start":"grid-column-start",columnStart:"grid-column-start","column-end":"grid-column-end",columnEnd:"grid-column-end",area:"grid-area",gap:"grid-gap","row-gap":"grid-row-gap",rowGap:"grid-row-gap","column-gap":"grid-column-gap",columnGap:"grid-column-gap"}};function jF(e,t,n){return e.map(function(r){return JA(r,t,n,!1,!0)})}function XA(e,t,n,r){return n[t]==null?e:e.length===0?[]:Array.isArray(e[0])?XA(e[0],t,n,r):typeof e[0]=="object"?jF(e,t,r):[e]}function JA(e,t,n,r,i){if(!(Hc[t]||Vm[t]))return[];var o=[];if(Vm[t]&&(e=VF(e,n,Vm[t],r)),Object.keys(e).length)for(var s in Hc[t]){if(e[s]){Array.isArray(e[s])?o.push(LF[s]===null?e[s]:e[s].join(" ")):o.push(e[s]);continue}Hc[t][s]!=null&&o.push(Hc[t][s])}return!o.length||i?o:[o]}function VF(e,t,n,r){for(var i in n){var o=n[i];if(typeof e[i]<"u"&&(r||!t.prop(o))){var s,a=fu((s={},s[o]=e[i],s),t)[o];r?t.style.fallbacks[o]=a:t.style[o]=a}delete e[i]}return e}function fu(e,t,n){for(var r in e){var i=e[r];if(Array.isArray(i)){if(!Array.isArray(i[0])){if(r==="fallbacks"){for(var o=0;o<e.fallbacks.length;o++)e.fallbacks[o]=fu(e.fallbacks[o],t,!0);continue}e[r]=XA(i,r,MF,t),e[r].length||delete e[r]}}else if(typeof i=="object"){if(r==="fallbacks"){e.fallbacks=fu(e.fallbacks,t,!0);continue}e[r]=JA(i,r,t,n),e[r].length||delete e[r]}else e[r]===""&&delete e[r]}return e}function FF(){function e(t,n){if(!t||n.type!=="style")return t;if(Array.isArray(t)){for(var r=0;r<t.length;r++)t[r]=fu(t[r],n);return t}return fu(t,n)}return{onProcessStyle:e}}function Uv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function UF(e){if(Array.isArray(e))return Uv(e)}function zF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function BF(e,t){if(e){if(typeof e=="string")return Uv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uv(e,t)}}function WF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HF(e){return UF(e)||zF(e)||BF(e)||WF()}var il="",zv="",ZA="",eP="",qF=pa&&"ontouchstart"in document.documentElement;if(pa){var Fm={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},GF=document.createElement("p"),Um=GF.style,KF="Transform";for(var zm in Fm)if(zm+KF in Um){il=zm,zv=Fm[zm];break}il==="Webkit"&&"msHyphens"in Um&&(il="ms",zv=Fm.ms,eP="edge"),il==="Webkit"&&"-apple-trailing-word"in Um&&(ZA="apple")}var J={js:il,css:zv,vendor:ZA,browser:eP,isTouch:qF};function YF(e){return e[1]==="-"||J.js==="ms"?e:"@"+J.css+"keyframes"+e.substr(10)}var QF={noPrefill:["appearance"],supportedProperty:function(t){return t!=="appearance"?!1:J.js==="ms"?"-webkit-"+t:J.css+t}},XF={noPrefill:["color-adjust"],supportedProperty:function(t){return t!=="color-adjust"?!1:J.js==="Webkit"?J.css+"print-"+t:t}},JF=/[-\s]+(.)?/g;function ZF(e,t){return t?t.toUpperCase():""}function S1(e){return e.replace(JF,ZF)}function Ai(e){return S1("-"+e)}var eU={noPrefill:["mask"],supportedProperty:function(t,n){if(!/^mask/.test(t))return!1;if(J.js==="Webkit"){var r="mask-image";if(S1(r)in n)return t;if(J.js+Ai(r)in n)return J.css+t}return t}},tU={noPrefill:["text-orientation"],supportedProperty:function(t){return t!=="text-orientation"?!1:J.vendor==="apple"&&!J.isTouch?J.css+t:t}},nU={noPrefill:["transform"],supportedProperty:function(t,n,r){return t!=="transform"?!1:r.transform?t:J.css+t}},rU={noPrefill:["transition"],supportedProperty:function(t,n,r){return t!=="transition"?!1:r.transition?t:J.css+t}},iU={noPrefill:["writing-mode"],supportedProperty:function(t){return t!=="writing-mode"?!1:J.js==="Webkit"||J.js==="ms"&&J.browser!=="edge"?J.css+t:t}},oU={noPrefill:["user-select"],supportedProperty:function(t){return t!=="user-select"?!1:J.js==="Moz"||J.js==="ms"||J.vendor==="apple"?J.css+t:t}},sU={supportedProperty:function(t,n){if(!/^break-/.test(t))return!1;if(J.js==="Webkit"){var r="WebkitColumn"+Ai(t);return r in n?J.css+"column-"+t:!1}if(J.js==="Moz"){var i="page"+Ai(t);return i in n?"page-"+t:!1}return!1}},aU={supportedProperty:function(t,n){if(!/^(border|margin|padding)-inline/.test(t))return!1;if(J.js==="Moz")return t;var r=t.replace("-inline","");return J.js+Ai(r)in n?J.css+r:!1}},lU={supportedProperty:function(t,n){return S1(t)in n?t:!1}},uU={supportedProperty:function(t,n){var r=Ai(t);return t[0]==="-"||t[0]==="-"&&t[1]==="-"?t:J.js+r in n?J.css+t:J.js!=="Webkit"&&"Webkit"+r in n?"-webkit-"+t:!1}},cU={supportedProperty:function(t){return t.substring(0,11)!=="scroll-snap"?!1:J.js==="ms"?""+J.css+t:t}},fU={supportedProperty:function(t){return t!=="overscroll-behavior"?!1:J.js==="ms"?J.css+"scroll-chaining":t}},dU={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},hU={supportedProperty:function(t,n){var r=dU[t];return r&&J.js+Ai(r)in n?J.css+r:!1}},tP={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},pU=Object.keys(tP),mU=function(t){return J.css+t},gU={supportedProperty:function(t,n,r){var i=r.multiple;if(pU.indexOf(t)>-1){var o=tP[t];if(!Array.isArray(o))return J.js+Ai(o)in n?J.css+o:!1;if(!i)return!1;for(var s=0;s<o.length;s++)if(!(J.js+Ai(o[0])in n))return!1;return o.map(mU)}return!1}},nP=[QF,XF,eU,tU,nU,rU,iU,oU,sU,aU,lU,uU,cU,fU,hU,gU],HS=nP.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),vU=nP.filter(function(e){return e.noPrefill}).reduce(function(e,t){return e.push.apply(e,HF(t.noPrefill)),e},[]),ol,Xi={};if(pa){ol=document.createElement("p");var Bm=window.getComputedStyle(document.documentElement,"");for(var Wm in Bm)isNaN(Wm)||(Xi[Bm[Wm]]=Bm[Wm]);vU.forEach(function(e){return delete Xi[e]})}function Bv(e,t){if(t===void 0&&(t={}),!ol)return e;if(Xi[e]!=null)return Xi[e];(e==="transition"||e==="transform")&&(t[e]=e in ol.style);for(var n=0;n<HS.length&&(Xi[e]=HS[n](e,ol.style,t),!Xi[e]);n++);try{ol.style[e]=""}catch{return!1}return Xi[e]}var Qo={},yU={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},_U=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,Jr;function wU(e,t,n){if(t==="var")return"var";if(t==="all")return"all";if(n==="all")return", all";var r=t?Bv(t):", "+Bv(n);return r||t||n}pa&&(Jr=document.createElement("p"));function qS(e,t){var n=t;if(!Jr||e==="content")return t;if(typeof n!="string"||!isNaN(parseInt(n,10)))return n;var r=e+n;if(Qo[r]!=null)return Qo[r];try{Jr.style[e]=n}catch{return Qo[r]=!1,!1}if(yU[e])n=n.replace(_U,wU);else if(Jr.style[e]===""&&(n=J.css+n,n==="-ms-flex"&&(Jr.style[e]="-ms-flexbox"),Jr.style[e]=n,Jr.style[e]===""))return Qo[r]=!1,!1;return Jr.style[e]="",Qo[r]=n,Qo[r]}function EU(){function e(i){if(i.type==="keyframes"){var o=i;o.at=YF(o.at)}}function t(i){for(var o in i){var s=i[o];if(o==="fallbacks"&&Array.isArray(s)){i[o]=s.map(t);continue}var a=!1,l=Bv(o);l&&l!==o&&(a=!0);var u=!1,c=qS(l,mo(s));c&&c!==s&&(u=!0),(a||u)&&(a&&delete i[o],i[l||o]=c||s)}return i}function n(i,o){return o.type!=="style"?i:t(i)}function r(i,o){return qS(o,mo(i))||i}return{onProcessRule:e,onProcessStyle:n,onChangeValue:r}}function SU(){var e=function(n,r){return n.length===r.length?n>r?1:-1:n.length-r.length};return{onProcessStyle:function(n,r){if(r.type!=="style")return n;for(var i={},o=Object.keys(n).sort(e),s=0;s<o.length;s++)i[o[s]]=n[o[s]];return i}}}var bU=function(t){return t===void 0&&(t={}),{plugins:[lF(),fF(t.observable),mF(),EF(),TF(),xF(),kF(),OF(),DF(t.defaultUnit),FF(),EU(),SU()]}},TU=Number.MIN_SAFE_INTEGER||-1e9,IU=function(){return TU++},CU=S.createContext({classNamePrefix:"",disableStylesGeneration:!1,isSSR:!pa}),GS=new Map,b1=function(t,n){var r=t.managers;if(r)return r[n]||(r[n]=new US),r[n];var i=GS.get(n);return i||(i=new US,GS.set(n,i)),i},KS=function(t){var n=t.sheet,r=t.context,i=t.index,o=t.theme;if(n){var s=b1(r,i);s.manage(o),r.registry&&r.registry.add(n)}},xU=function(t){if(t.sheet){var n=b1(t.context,t.index);n.unmanage(t.theme)}},kU=HA(bU()),rP=new WeakMap,iP=function(t){return rP.get(t)},AU=function(t,n){rP.set(t,n)},PU=function(t){var n=t.styles;return typeof n!="function"?n:n(t.theme)};function RU(e,t){var n;e.context.id&&e.context.id.minify!=null&&(n=e.context.id.minify);var r=e.context.classNamePrefix||"";e.name&&!n&&(r+=e.name.replace(/\s/g,"-")+"-");var i="";return e.name&&(i=e.name+", "),i+=typeof e.styles=="function"?"Themed":"Unthemed",B({},e.sheetOptions,{index:e.index,meta:i,classNamePrefix:r,link:t,generateId:e.sheetOptions&&e.sheetOptions.generateId?e.sheetOptions.generateId:e.context.generateId})}var OU=function(t){if(!t.context.disableStylesGeneration){var n=b1(t.context,t.index),r=n.get(t.theme);if(r)return r;var i=t.context.jss||kU,o=PU(t),s=qA(o),a=i.createStyleSheet(o,RU(t,s!==null));return AU(a,{dynamicStyles:s,styles:o}),n.add(t.theme,a),a}},NU=function(t,n){for(var r in n)t.deleteRule(n[r])},$U=function(t,n,r){for(var i in r)n.updateOne(r[i],t)},DU=function(t,n){var r=iP(t);if(r){var i={};for(var o in r.dynamicStyles)for(var s=t.rules.index.length,a=t.addRule(o,r.dynamicStyles[o]),l=s;l<t.rules.index.length;l++){var u=t.rules.index[l];t.updateOne(u,n),i[a===u?o:u.key]=u}return i}},MU=function(t,n){if(!n)return t.classes;var r=iP(t);if(!r)return t.classes;var i={};for(var o in r.styles)i[o]=t.classes[o],o in n&&(i[o]+=" "+t.classes[n[o].key]);return i};function YS(e){return e?S.useEffect:q.useInsertionEffect||S.useLayoutEffect}var Hm={},LU=function(t,n){n===void 0&&(n={});var r=n,i=r.index,o=i===void 0?IU():i,s=r.theming,a=r.name,l=Qn(r,["index","theming","name"]),u=s&&s.context||VA,c=function(p){return typeof t=="function"&&(p||S.useContext(u))||Hm},f={};return function(p){var g=S.useRef(!0),m=S.useContext(CU),_=c(p&&p.theme),v=S.useMemo(function(){var T=OU({context:m,styles:t,name:a,theme:_,index:o,sheetOptions:l});return T&&m.isSSR&&KS({index:o,context:m,sheet:T,theme:_}),[T,T?DU(T,p):null]},[m,_]),h=v[0],y=v[1];YS(m.isSSR)(function(){h&&y&&!g.current&&$U(p,h,y)},[p]),YS(m.isSSR)(function(){return h&&KS({index:o,context:m,sheet:h,theme:_}),function(){h&&(xU({index:o,context:m,sheet:h,theme:_}),y&&NU(h,y))}},[h]);var E=S.useMemo(function(){return h&&y?MU(h,y):f},[h,y]);return S.useDebugValue(E),S.useDebugValue(_===Hm?"No theme":_),S.useEffect(function(){g.current=!1}),E}},jU=LA;function VU(e){var t=jU(e),n=t%1;return t===t?n?t-n:t:0}var FU=VU;function UU(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var zU=UU,BU=Array.isArray,ip=BU,QS=ep,WU=zU,HU=ip,qU=DA,GU=1/0,XS=QS?QS.prototype:void 0,JS=XS?XS.toString:void 0;function oP(e){if(typeof e=="string")return e;if(HU(e))return WU(e,oP)+"";if(qU(e))return JS?JS.call(e):"";var t=e+"";return t=="0"&&1/e==-GU?"-0":t}var KU=oP,YU=KU;function QU(e){return e==null?"":YU(e)}var XU=QU,JU=vr,ZU=FU,ez=MA,ZS=XU,tz=JU.isFinite,nz=Math.min;function rz(e){var t=Math[e];return function(n,r){if(n=ez(n),r=r==null?0:nz(ZU(r),292),r&&tz(n)){var i=(ZS(n)+"e").split("e"),o=t(i[0]+"e"+(+i[1]+r));return i=(ZS(o)+"e").split("e"),+(i[0]+"e"+(+i[1]-r))}return t(n)}}var iz=rz,oz=iz,sz=oz("round"),az=sz;const Ga=$o(az);function lz(){this.__data__=[],this.size=0}var uz=lz,cz=y1;function fz(e,t){for(var n=e.length;n--;)if(cz(e[n][0],t))return n;return-1}var op=fz,dz=op,hz=Array.prototype,pz=hz.splice;function mz(e){var t=this.__data__,n=dz(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():pz.call(t,n,1),--this.size,!0}var gz=mz,vz=op;function yz(e){var t=this.__data__,n=vz(t,e);return n<0?void 0:t[n][1]}var _z=yz,wz=op;function Ez(e){return wz(this.__data__,e)>-1}var Sz=Ez,bz=op;function Tz(e,t){var n=this.__data__,r=bz(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var Iz=Tz,Cz=uz,xz=gz,kz=_z,Az=Sz,Pz=Iz;function ga(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ga.prototype.clear=Cz;ga.prototype.delete=xz;ga.prototype.get=kz;ga.prototype.has=Az;ga.prototype.set=Pz;var sp=ga,Rz=sp;function Oz(){this.__data__=new Rz,this.size=0}var Nz=Oz;function $z(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var Dz=$z;function Mz(e){return this.__data__.get(e)}var Lz=Mz;function jz(e){return this.__data__.has(e)}var Vz=jz,Fz=vr,Uz=Fz["__core-js_shared__"],zz=Uz,qm=zz,eb=function(){var e=/[^.]+$/.exec(qm&&qm.keys&&qm.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Bz(e){return!!eb&&eb in e}var Wz=Bz,Hz=Function.prototype,qz=Hz.toString;function Gz(e){if(e!=null){try{return qz.call(e)}catch{}try{return e+""}catch{}}return""}var sP=Gz,Kz=RA,Yz=Wz,Qz=tp,Xz=sP,Jz=/[\\^$.*+?()[\]{}|]/g,Zz=/^\[object .+?Constructor\]$/,e8=Function.prototype,t8=Object.prototype,n8=e8.toString,r8=t8.hasOwnProperty,i8=RegExp("^"+n8.call(r8).replace(Jz,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function o8(e){if(!Qz(e)||Yz(e))return!1;var t=Kz(e)?i8:Zz;return t.test(Xz(e))}var s8=o8;function a8(e,t){return e==null?void 0:e[t]}var l8=a8,u8=s8,c8=l8;function f8(e,t){var n=c8(e,t);return u8(n)?n:void 0}var va=f8,d8=va,h8=vr,p8=d8(h8,"Map"),T1=p8,m8=va,g8=m8(Object,"create"),ap=g8,tb=ap;function v8(){this.__data__=tb?tb(null):{},this.size=0}var y8=v8;function _8(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var w8=_8,E8=ap,S8="__lodash_hash_undefined__",b8=Object.prototype,T8=b8.hasOwnProperty;function I8(e){var t=this.__data__;if(E8){var n=t[e];return n===S8?void 0:n}return T8.call(t,e)?t[e]:void 0}var C8=I8,x8=ap,k8=Object.prototype,A8=k8.hasOwnProperty;function P8(e){var t=this.__data__;return x8?t[e]!==void 0:A8.call(t,e)}var R8=P8,O8=ap,N8="__lodash_hash_undefined__";function $8(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=O8&&t===void 0?N8:t,this}var D8=$8,M8=y8,L8=w8,j8=C8,V8=R8,F8=D8;function ya(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ya.prototype.clear=M8;ya.prototype.delete=L8;ya.prototype.get=j8;ya.prototype.has=V8;ya.prototype.set=F8;var U8=ya,nb=U8,z8=sp,B8=T1;function W8(){this.size=0,this.__data__={hash:new nb,map:new(B8||z8),string:new nb}}var H8=W8;function q8(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var G8=q8,K8=G8;function Y8(e,t){var n=e.__data__;return K8(t)?n[typeof t=="string"?"string":"hash"]:n.map}var lp=Y8,Q8=lp;function X8(e){var t=Q8(this,e).delete(e);return this.size-=t?1:0,t}var J8=X8,Z8=lp;function e7(e){return Z8(this,e).get(e)}var t7=e7,n7=lp;function r7(e){return n7(this,e).has(e)}var i7=r7,o7=lp;function s7(e,t){var n=o7(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var a7=s7,l7=H8,u7=J8,c7=t7,f7=i7,d7=a7;function _a(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_a.prototype.clear=l7;_a.prototype.delete=u7;_a.prototype.get=c7;_a.prototype.has=f7;_a.prototype.set=d7;var aP=_a,h7=sp,p7=T1,m7=aP,g7=200;function v7(e,t){var n=this.__data__;if(n instanceof h7){var r=n.__data__;if(!p7||r.length<g7-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new m7(r)}return n.set(e,t),this.size=n.size,this}var y7=v7,_7=sp,w7=Nz,E7=Dz,S7=Lz,b7=Vz,T7=y7;function wa(e){var t=this.__data__=new _7(e);this.size=t.size}wa.prototype.clear=w7;wa.prototype.delete=E7;wa.prototype.get=S7;wa.prototype.has=b7;wa.prototype.set=T7;var I7=wa,C7="__lodash_hash_undefined__";function x7(e){return this.__data__.set(e,C7),this}var k7=x7;function A7(e){return this.__data__.has(e)}var P7=A7,R7=aP,O7=k7,N7=P7;function Nd(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new R7;++t<n;)this.add(e[t])}Nd.prototype.add=Nd.prototype.push=O7;Nd.prototype.has=N7;var $7=Nd;function D7(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var M7=D7;function L7(e,t){return e.has(t)}var j7=L7,V7=$7,F7=M7,U7=j7,z7=1,B7=2;function W7(e,t,n,r,i,o){var s=n&z7,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var u=o.get(e),c=o.get(t);if(u&&c)return u==t&&c==e;var f=-1,d=!0,p=n&B7?new V7:void 0;for(o.set(e,t),o.set(t,e);++f<a;){var g=e[f],m=t[f];if(r)var _=s?r(m,g,f,t,e,o):r(g,m,f,e,t,o);if(_!==void 0){if(_)continue;d=!1;break}if(p){if(!F7(t,function(v,h){if(!U7(p,h)&&(g===v||i(g,v,n,r,o)))return p.push(h)})){d=!1;break}}else if(!(g===m||i(g,m,n,r,o))){d=!1;break}}return o.delete(e),o.delete(t),d}var lP=W7,H7=vr,q7=H7.Uint8Array,G7=q7;function K7(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}var Y7=K7;function Q7(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var X7=Q7,rb=ep,ib=G7,J7=y1,Z7=lP,eB=Y7,tB=X7,nB=1,rB=2,iB="[object Boolean]",oB="[object Date]",sB="[object Error]",aB="[object Map]",lB="[object Number]",uB="[object RegExp]",cB="[object Set]",fB="[object String]",dB="[object Symbol]",hB="[object ArrayBuffer]",pB="[object DataView]",ob=rb?rb.prototype:void 0,Gm=ob?ob.valueOf:void 0;function mB(e,t,n,r,i,o,s){switch(n){case pB:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case hB:return!(e.byteLength!=t.byteLength||!o(new ib(e),new ib(t)));case iB:case oB:case lB:return J7(+e,+t);case sB:return e.name==t.name&&e.message==t.message;case uB:case fB:return e==t+"";case aB:var a=eB;case cB:var l=r&nB;if(a||(a=tB),e.size!=t.size&&!l)return!1;var u=s.get(e);if(u)return u==t;r|=rB,s.set(e,t);var c=Z7(a(e),a(t),r,i,o,s);return s.delete(e),c;case dB:if(Gm)return Gm.call(e)==Gm.call(t)}return!1}var gB=mB;function vB(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var yB=vB,_B=yB,wB=ip;function EB(e,t,n){var r=t(e);return wB(e)?r:_B(r,n(e))}var SB=EB;function bB(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}var TB=bB;function IB(){return[]}var CB=IB,xB=TB,kB=CB,AB=Object.prototype,PB=AB.propertyIsEnumerable,sb=Object.getOwnPropertySymbols,RB=sb?function(e){return e==null?[]:(e=Object(e),xB(sb(e),function(t){return PB.call(e,t)}))}:kB,OB=RB;function NB(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var $B=NB,DB=qu,MB=Gu,LB="[object Arguments]";function jB(e){return MB(e)&&DB(e)==LB}var VB=jB,ab=VB,FB=Gu,uP=Object.prototype,UB=uP.hasOwnProperty,zB=uP.propertyIsEnumerable,BB=ab(function(){return arguments}())?ab:function(e){return FB(e)&&UB.call(e,"callee")&&!zB.call(e,"callee")},WB=BB,$d={exports:{}};function HB(){return!1}var qB=HB;$d.exports;(function(e,t){var n=vr,r=qB,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,s=o&&o.exports===i,a=s?n.Buffer:void 0,l=a?a.isBuffer:void 0,u=l||r;e.exports=u})($d,$d.exports);var cP=$d.exports,GB=qu,KB=OA,YB=Gu,QB="[object Arguments]",XB="[object Array]",JB="[object Boolean]",ZB="[object Date]",eW="[object Error]",tW="[object Function]",nW="[object Map]",rW="[object Number]",iW="[object Object]",oW="[object RegExp]",sW="[object Set]",aW="[object String]",lW="[object WeakMap]",uW="[object ArrayBuffer]",cW="[object DataView]",fW="[object Float32Array]",dW="[object Float64Array]",hW="[object Int8Array]",pW="[object Int16Array]",mW="[object Int32Array]",gW="[object Uint8Array]",vW="[object Uint8ClampedArray]",yW="[object Uint16Array]",_W="[object Uint32Array]",Te={};Te[fW]=Te[dW]=Te[hW]=Te[pW]=Te[mW]=Te[gW]=Te[vW]=Te[yW]=Te[_W]=!0;Te[QB]=Te[XB]=Te[uW]=Te[JB]=Te[cW]=Te[ZB]=Te[eW]=Te[tW]=Te[nW]=Te[rW]=Te[iW]=Te[oW]=Te[sW]=Te[aW]=Te[lW]=!1;function wW(e){return YB(e)&&KB(e.length)&&!!Te[GB(e)]}var EW=wW;function SW(e){return function(t){return e(t)}}var bW=SW,Dd={exports:{}};Dd.exports;(function(e,t){var n=AA,r=t&&!t.nodeType&&t,i=r&&!0&&e&&!e.nodeType&&e,o=i&&i.exports===r,s=o&&n.process,a=function(){try{var l=i&&i.require&&i.require("util").types;return l||s&&s.binding&&s.binding("util")}catch{}}();e.exports=a})(Dd,Dd.exports);var TW=Dd.exports,IW=EW,CW=bW,lb=TW,ub=lb&&lb.isTypedArray,xW=ub?CW(ub):IW,fP=xW,kW=$B,AW=WB,PW=ip,RW=cP,OW=$A,NW=fP,$W=Object.prototype,DW=$W.hasOwnProperty;function MW(e,t){var n=PW(e),r=!n&&AW(e),i=!n&&!r&&RW(e),o=!n&&!r&&!i&&NW(e),s=n||r||i||o,a=s?kW(e.length,String):[],l=a.length;for(var u in e)(t||DW.call(e,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||OW(u,l)))&&a.push(u);return a}var LW=MW,jW=Object.prototype;function VW(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||jW;return e===n}var FW=VW;function UW(e,t){return function(n){return e(t(n))}}var zW=UW,BW=zW,WW=BW(Object.keys,Object),HW=WW,qW=FW,GW=HW,KW=Object.prototype,YW=KW.hasOwnProperty;function QW(e){if(!qW(e))return GW(e);var t=[];for(var n in Object(e))YW.call(e,n)&&n!="constructor"&&t.push(n);return t}var XW=QW,JW=LW,ZW=XW,eH=NA;function tH(e){return eH(e)?JW(e):ZW(e)}var nH=tH,rH=SB,iH=OB,oH=nH;function sH(e){return rH(e,oH,iH)}var aH=sH,cb=aH,lH=1,uH=Object.prototype,cH=uH.hasOwnProperty;function fH(e,t,n,r,i,o){var s=n&lH,a=cb(e),l=a.length,u=cb(t),c=u.length;if(l!=c&&!s)return!1;for(var f=l;f--;){var d=a[f];if(!(s?d in t:cH.call(t,d)))return!1}var p=o.get(e),g=o.get(t);if(p&&g)return p==t&&g==e;var m=!0;o.set(e,t),o.set(t,e);for(var _=s;++f<l;){d=a[f];var v=e[d],h=t[d];if(r)var y=s?r(h,v,d,t,e,o):r(v,h,d,e,t,o);if(!(y===void 0?v===h||i(v,h,n,r,o):y)){m=!1;break}_||(_=d=="constructor")}if(m&&!_){var E=e.constructor,T=t.constructor;E!=T&&"constructor"in e&&"constructor"in t&&!(typeof E=="function"&&E instanceof E&&typeof T=="function"&&T instanceof T)&&(m=!1)}return o.delete(e),o.delete(t),m}var dH=fH,hH=va,pH=vr,mH=hH(pH,"DataView"),gH=mH,vH=va,yH=vr,_H=vH(yH,"Promise"),wH=_H,EH=va,SH=vr,bH=EH(SH,"Set"),TH=bH,IH=va,CH=vr,xH=IH(CH,"WeakMap"),kH=xH,Wv=gH,Hv=T1,qv=wH,Gv=TH,Kv=kH,dP=qu,Ea=sP,fb="[object Map]",AH="[object Object]",db="[object Promise]",hb="[object Set]",pb="[object WeakMap]",mb="[object DataView]",PH=Ea(Wv),RH=Ea(Hv),OH=Ea(qv),NH=Ea(Gv),$H=Ea(Kv),Yi=dP;(Wv&&Yi(new Wv(new ArrayBuffer(1)))!=mb||Hv&&Yi(new Hv)!=fb||qv&&Yi(qv.resolve())!=db||Gv&&Yi(new Gv)!=hb||Kv&&Yi(new Kv)!=pb)&&(Yi=function(e){var t=dP(e),n=t==AH?e.constructor:void 0,r=n?Ea(n):"";if(r)switch(r){case PH:return mb;case RH:return fb;case OH:return db;case NH:return hb;case $H:return pb}return t});var DH=Yi,Km=I7,MH=lP,LH=gB,jH=dH,gb=DH,vb=ip,yb=cP,VH=fP,FH=1,_b="[object Arguments]",wb="[object Array]",qc="[object Object]",UH=Object.prototype,Eb=UH.hasOwnProperty;function zH(e,t,n,r,i,o){var s=vb(e),a=vb(t),l=s?wb:gb(e),u=a?wb:gb(t);l=l==_b?qc:l,u=u==_b?qc:u;var c=l==qc,f=u==qc,d=l==u;if(d&&yb(e)){if(!yb(t))return!1;s=!0,c=!1}if(d&&!c)return o||(o=new Km),s||VH(e)?MH(e,t,n,r,i,o):LH(e,t,l,n,r,i,o);if(!(n&FH)){var p=c&&Eb.call(e,"__wrapped__"),g=f&&Eb.call(t,"__wrapped__");if(p||g){var m=p?e.value():e,_=g?t.value():t;return o||(o=new Km),i(m,_,n,r,o)}}return d?(o||(o=new Km),jH(e,t,n,r,i,o)):!1}var BH=zH,WH=BH,Sb=Gu;function hP(e,t,n,r,i){return e===t?!0:e==null||t==null||!Sb(e)&&!Sb(t)?e!==e&&t!==t:WH(e,t,n,r,hP,i)}var HH=hP,qH=HH;function GH(e,t){return qH(e,t)}var KH=GH;const YH=$o(KH);var nt=function(){return nt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},nt.apply(this,arguments)};function QH(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var Yv=function(e,t,n,r,i){return(e-t)*(i-r)/(n-t)+r},pP=function(e,t){var n=e+t;return n>360?n-360:n},mP=function(){return Math.random()>.5},gP=[0,0,1],I1=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],gP],XH=function(e){return!YH(I1[e],gP)&&mP()},bb=200,JH=800,ZH=.1,eq=.25,Tb=.5,tq=I1.reduce(function(e,t,n){var r;return nt(nt({},e),(r={},r["@keyframes rotation-".concat(n)]={"50%":{transform:"rotate3d(".concat(t.map(function(i){return i/2}).join(),", 180deg)")},"100%":{transform:"rotate3d(".concat(t.join(),", 360deg)")}},r))},{}),nq=function(e,t,n){var r=typeof t=="string"?t:"".concat(t,"px"),i=e.reduce(function(o,s,a){var l,u=Yv(Math.abs(pP(s,90)-180),0,180,-n/2,n/2);return nt(nt({},o),(l={},l["@keyframes x-axis-".concat(a)]={to:{transform:"translateX(".concat(u,"px)")}},l))},{});return nt({"@keyframes y-axis":{to:{transform:"translateY(".concat(r,")")}}},i)},rq=function(e,t,n,r,i){var o,s=Math.round(Math.random()*(JH-bb)+bb),a=Math.round(Math.random()*(I1.length-1)),l=t-Math.round(Math.random()*1e3),u=Math.random()<ZH,c=XH(a),f=u?Ga(Math.random()*eq,2):0,d=f*-1,p=f,g=Ga(Math.abs(Yv(Math.abs(pP(e.degree,90)-180),0,180,-1,1)),4),m=Ga(Math.random()*Tb,4),_=Ga(Math.random()*n*(mP()?1:-1),4),v=Tb,h=Ga(Math.max(Yv(Math.abs(e.degree-180),0,180,n,-n),0),4);return o={},o["&#confetti-particle-".concat(i)]={animation:"$x-axis-".concat(i," ").concat(l,"ms forwards cubic-bezier(").concat(f,", ").concat(d,", ").concat(p,", ").concat(g,")"),"& > div":{width:c?r:Math.round(Math.random()*4)+r/2,height:c?r:Math.round(Math.random()*2)+r,animation:"$y-axis ".concat(l,"ms forwards cubic-bezier(").concat(m,", ").concat(_,", ").concat(v,", ").concat(h,")"),"&:after":nt({backgroundColor:e.color,animation:"$rotation-".concat(a," ").concat(s,"ms infinite linear")},c?{borderRadius:"50%"}:{})}},o},iq=function(e){var t=e.particles,n=e.duration,r=e.height,i=e.width,o=e.force,s=e.particleSize,a=t.reduce(function(l,u,c){return nt(nt({},l),rq(u,n,o,s,c))},{});return LU(nt(nt(nt({},tq),nq(t.map(function(l){return l.degree}),r,i)),{container:{width:0,height:0,position:"relative"},screen:{position:"fixed",top:0,left:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none"},particle:nt(nt({},a),{"& > div":{position:"absolute",left:0,top:0,"&:after":{content:"''",display:"block",width:"100%",height:"100%"}}})}),{name:"confetti-explosion"})},oq=.5,sq=12,aq="120vh",lq=1e3,uq=100,cq=2200,fq=["#FFC700","#FF0000","#2E3191","#41BBC7"],dq=function(e,t){var n=360/e;return m6(e).map(function(r){return{color:t[r%t.length],degree:n*r}})};function hq(e){var t=e.particleCount,n=t===void 0?uq:t,r=e.duration,i=r===void 0?cq:r,o=e.colors,s=o===void 0?fq:o,a=e.particleSize,l=a===void 0?sq:a,u=e.force,c=u===void 0?oq:u,f=e.height,d=f===void 0?aq:f,p=e.width,g=p===void 0?lq:p,m=e.zIndex,_=e.onComplete,v=QH(e,["particleCount","duration","colors","particleSize","force","height","width","zIndex","onComplete"]),h=S.useState(),y=h[0],E=h[1],T=dq(n,s),I=iq({particles:T,duration:i,particleSize:l,force:c,width:g,height:d})(),b=S.useCallback(function(R){if(R){var j=R.getBoundingClientRect(),O=j.top,ue=j.left;E({top:O,left:ue})}},[]);return S.useEffect(function(){if(typeof _=="function"){var R=setTimeout(_,i);return function(){return clearTimeout(R)}}},[i,_]),w.jsx("div",nt({ref:b,className:I.container},v,{children:y&&Zx.createPortal(w.jsx("div",nt({className:I.screen},m?{style:{zIndex:m}}:null,{children:w.jsx("div",nt({style:{position:"absolute",top:y.top,left:y.left}},{children:T.map(function(R,j){return w.jsx("div",nt({id:"confetti-particle-".concat(j),className:I.particle},{children:w.jsx("div",{})}),R.degree)})}))})),document.body)}))}const vP="rgb(255, 51, 119)",pq=Z0`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,mq=Z0`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`,gq=Z0`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
`,vq=k(B0)`
    display: flex;
`,yq=k.img`
    height: 100px;
    width: 100px;
    margin: 10px 20px;
    cursor: pointer;
    color: pink;
`,_q=k.div`
    display: flex;
    // margin-bottom: 30px;

    h1 {
        position: relative;
        bottom: 10px;
        right: 20px;
        margin: 40px;
        font-family: "Dancing Script", cursive;
        font-weight: 700;
        font-size: 50px;
    }
`,wq=k.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`,Ka=k.button`
    font-size: 20px;
    border: none;
    background-color: #fff;
    cursor: pointer;
    margin: 0 20px;
    height: 30px;
    transition: 0.5s ease-out;

    &:hover {
        color: ${vP};
    }
`,Ib=k.div`
    position: absolute;
    top: 100%;
    margin-top: 10px;
    background-color: #f9f9f9;
    min-width: 140px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
    z-index: 1000;
    opacity: 0;
    pointer-events: none;

    //important to set pointer events to none because, since we are transforming the dropdown menu to be higher than it normally is by 10px, it partially covers the clickable text and we can't click through it. Setting pointer events to none just means that the entire dropdown menu won't even be clickable or interactable. We set it to auto once it is visible so that we can interact with it

    //to animate the dropdown
    transform: translateY(-10px);
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;

    ${e=>e.open&&"opacity: 1; transform: translateY(0); pointer-events: auto;"};
`,Cb=k.div`
    position: relative;
`,Ya=k(B0)`
  color: black;
  cursor: pointer;
  padding: 12px 20px;
  display: block;
  text-decoration: none;

  &:hover {
    color: ${vP};
    background-color: #ddd;
  }
`,Eq=k.div`
    position: relative;
    top: 7px;
    display: flex;
    align-items: center;
    margin: 0px 40px 15px; 0;
    cursor: pointer;
    animation: ${({$bounce:e})=>e?bo`animation: ${gq} 1s ease-in-out`:"none"}
`,Sq=k(kA)`
    // margin-right: 20px;
`,bq=k.span`
    position: absolute; // removed from normal doc flow, position relative to nearest ancestor, which is the ShoppingCartContainer
    top: 13px;
    right: 11px;
    color: rgb(255, 26, 198);
    padding: 0 3px;
    border-radius: 40%;
    font-size: 14px;
    font-weight: bold;
`,Tq=k.div`
    position: absolute;
    top: 120px;
    width: 100%;
    height: 30px;
    background: rgb(0,0,0);
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: ${({$show:e})=>e?1:0};
    ${({$show:e})=>e?bo`animation: ${pq} 0.6s ease-in-out;`:bo`animation: ${mq} 0.6s ease-in-out; display: none;`}


    h4 {
        color: #fff;
    };

`,Iq=k(hq)`
    position: absolute;
    width: 100;
`,Cq="/assets/hearts-Ik6zbrID.jpg";var xb={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},xq=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},_P={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,s||(d=64)),r.push(n[c],n[f],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(yP(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):xq(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new kq;const d=o<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const g=u<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class kq extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Aq=function(e){const t=yP(e);return _P.encodeByteArray(t,!0)},Md=function(e){return Aq(e).replace(/\./g,"")},wP=function(e){try{return _P.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pq(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rq=()=>Pq().__FIREBASE_DEFAULTS__,Oq=()=>{if(typeof process>"u"||typeof xb>"u")return;const e=xb.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Nq=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&wP(e[1]);return t&&JSON.parse(t)},C1=()=>{try{return Rq()||Oq()||Nq()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},EP=e=>{var t,n;return(n=(t=C1())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},$q=e=>{const t=EP(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},SP=()=>{var e;return(e=C1())===null||e===void 0?void 0:e.config},bP=e=>{var t;return(t=C1())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dq{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mq(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Md(JSON.stringify(n)),Md(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lq(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function jq(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Vq(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fq(){const e=jt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Uq(){try{return typeof indexedDB=="object"}catch{return!1}}function zq(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bq="FirebaseError";class Wr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Bq,Object.setPrototypeOf(this,Wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ku.prototype.create)}}class Ku{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Wq(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Wr(i,a,r)}}function Wq(e,t){return e.replace(Hq,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Hq=/\{\$([^}]+)}/g;function qq(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ld(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(kb(o)&&kb(s)){if(!Ld(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kb(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function sl(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function al(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Gq(e,t){const n=new Kq(e,t);return n.subscribe.bind(n)}class Kq{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yq(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ym),i.error===void 0&&(i.error=Ym),i.complete===void 0&&(i.complete=Ym);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yq(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ym(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){return e&&e._delegate?e._delegate:e}class To{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qq{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Dq;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Jq(t))try{this.getOrInitializeService({instanceIdentifier:Qi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Qi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qi){return this.instances.has(t)}getOptions(t=Qi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xq(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qi){return this.component?this.component.multipleInstances?t:Qi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xq(e){return e===Qi?void 0:e}function Jq(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zq{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Qq(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ie||(ie={}));const eG={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},tG=ie.INFO,nG={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},rG=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=nG[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class x1{constructor(t){this.name=t,this._logLevel=tG,this._logHandler=rG,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?eG[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...t),this._logHandler(this,ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...t),this._logHandler(this,ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...t),this._logHandler(this,ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...t),this._logHandler(this,ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...t),this._logHandler(this,ie.ERROR,...t)}}const iG=(e,t)=>t.some(n=>e instanceof n);let Ab,Pb;function oG(){return Ab||(Ab=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sG(){return Pb||(Pb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TP=new WeakMap,Qv=new WeakMap,IP=new WeakMap,Qm=new WeakMap,k1=new WeakMap;function aG(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(bi(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&TP.set(n,e)}).catch(()=>{}),k1.set(t,e),t}function lG(e){if(Qv.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Qv.set(e,t)}let Xv={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qv.get(e);if(t==="objectStoreNames")return e.objectStoreNames||IP.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function uG(e){Xv=e(Xv)}function cG(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xm(this),t,...n);return IP.set(r,t.sort?t.sort():[t]),bi(r)}:sG().includes(e)?function(...t){return e.apply(Xm(this),t),bi(TP.get(this))}:function(...t){return bi(e.apply(Xm(this),t))}}function fG(e){return typeof e=="function"?cG(e):(e instanceof IDBTransaction&&lG(e),iG(e,oG())?new Proxy(e,Xv):e)}function bi(e){if(e instanceof IDBRequest)return aG(e);if(Qm.has(e))return Qm.get(e);const t=fG(e);return t!==e&&(Qm.set(e,t),k1.set(t,e)),t}const Xm=e=>k1.get(e);function dG(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=bi(s);return r&&s.addEventListener("upgradeneeded",l=>{r(bi(s.result),l.oldVersion,l.newVersion,bi(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const hG=["get","getKey","getAll","getAllKeys","count"],pG=["put","add","delete","clear"],Jm=new Map;function Rb(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Jm.get(t))return Jm.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=pG.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hG.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Jm.set(t,o),o}uG(e=>({...e,get:(t,n,r)=>Rb(t,n)||e.get(t,n,r),has:(t,n)=>!!Rb(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mG{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gG(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gG(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jv="@firebase/app",Ob="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new x1("@firebase/app"),vG="@firebase/app-compat",yG="@firebase/analytics-compat",_G="@firebase/analytics",wG="@firebase/app-check-compat",EG="@firebase/app-check",SG="@firebase/auth",bG="@firebase/auth-compat",TG="@firebase/database",IG="@firebase/database-compat",CG="@firebase/functions",xG="@firebase/functions-compat",kG="@firebase/installations",AG="@firebase/installations-compat",PG="@firebase/messaging",RG="@firebase/messaging-compat",OG="@firebase/performance",NG="@firebase/performance-compat",$G="@firebase/remote-config",DG="@firebase/remote-config-compat",MG="@firebase/storage",LG="@firebase/storage-compat",jG="@firebase/firestore",VG="@firebase/firestore-compat",FG="firebase",UG="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="[DEFAULT]",zG={[Jv]:"fire-core",[vG]:"fire-core-compat",[_G]:"fire-analytics",[yG]:"fire-analytics-compat",[EG]:"fire-app-check",[wG]:"fire-app-check-compat",[SG]:"fire-auth",[bG]:"fire-auth-compat",[TG]:"fire-rtdb",[IG]:"fire-rtdb-compat",[CG]:"fire-fn",[xG]:"fire-fn-compat",[kG]:"fire-iid",[AG]:"fire-iid-compat",[PG]:"fire-fcm",[RG]:"fire-fcm-compat",[OG]:"fire-perf",[NG]:"fire-perf-compat",[$G]:"fire-rc",[DG]:"fire-rc-compat",[MG]:"fire-gcs",[LG]:"fire-gcs-compat",[jG]:"fire-fst",[VG]:"fire-fst-compat","fire-js":"fire-js",[FG]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Map,ey=new Map;function BG(e,t){try{e.container.addComponent(t)}catch(n){Io.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qs(e){const t=e.name;if(ey.has(t))return Io.debug(`There were multiple attempts to register component ${t}.`),!1;ey.set(t,e);for(const n of jd.values())BG(n,e);return!0}function A1(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WG={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ti=new Ku("app","Firebase",WG);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HG{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new To("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=UG;function CP(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Zv,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ti.create("bad-app-name",{appName:String(i)});if(n||(n=SP()),!n)throw Ti.create("no-options");const o=jd.get(i);if(o){if(Ld(n,o.options)&&Ld(r,o.config))return o;throw Ti.create("duplicate-app",{appName:i})}const s=new Zq(i);for(const l of ey.values())s.addComponent(l);const a=new HG(n,r,s);return jd.set(i,a),a}function xP(e=Zv){const t=jd.get(e);if(!t&&e===Zv&&SP())return CP();if(!t)throw Ti.create("no-app",{appName:e});return t}function Ii(e,t,n){var r;let i=(r=zG[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Io.warn(a.join(" "));return}Qs(new To(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qG="firebase-heartbeat-database",GG=1,du="firebase-heartbeat-store";let Zm=null;function kP(){return Zm||(Zm=dG(qG,GG,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(du)}}}).catch(e=>{throw Ti.create("idb-open",{originalErrorMessage:e.message})})),Zm}async function KG(e){try{return await(await kP()).transaction(du).objectStore(du).get(AP(e))}catch(t){if(t instanceof Wr)Io.warn(t.message);else{const n=Ti.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Io.warn(n.message)}}}async function Nb(e,t){try{const r=(await kP()).transaction(du,"readwrite");await r.objectStore(du).put(t,AP(e)),await r.done}catch(n){if(n instanceof Wr)Io.warn(n.message);else{const r=Ti.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Io.warn(r.message)}}}function AP(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YG=1024,QG=30*24*60*60*1e3;class XG{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZG(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$b();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=QG}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$b(),{heartbeatsToSend:r,unsentEntries:i}=JG(this._heartbeatsCache.heartbeats),o=Md(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function $b(){return new Date().toISOString().substring(0,10)}function JG(e,t=YG){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Db(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Db(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZG{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uq()?zq().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await KG(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nb(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nb(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Db(e){return Md(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eK(e){Qs(new To("platform-logger",t=>new mG(t),"PRIVATE")),Qs(new To("heartbeat",t=>new XG(t),"PRIVATE")),Ii(Jv,Ob,e),Ii(Jv,Ob,"esm2017"),Ii("fire-js","")}eK("");var tK="firebase",nK="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ii(tK,nK,"app");function PP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rK=PP,RP=new Ku("auth","Firebase",PP());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new x1("@firebase/auth");function iK(e,...t){Vd.logLevel<=ie.WARN&&Vd.warn(`Auth (${Sa}): ${e}`,...t)}function zf(e,...t){Vd.logLevel<=ie.ERROR&&Vd.error(`Auth (${Sa}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e,...t){throw P1(e,...t)}function dr(e,...t){return P1(e,...t)}function OP(e,t,n){const r=Object.assign(Object.assign({},rK()),{[t]:n});return new Ku("auth","Firebase",r).create(t,{appName:e.name})}function oK(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&On(e,"argument-error"),OP(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function P1(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return RP.create(e,...t)}function G(e,t,...n){if(!e)throw P1(t,...n)}function Tr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw zf(t),new Error(t)}function Dr(e,t){e||Tr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function sK(){return Mb()==="http:"||Mb()==="https:"}function Mb(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aK(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sK()||jq()||"connection"in navigator)?navigator.onLine:!0}function lK(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t,n){this.shortDelay=t,this.longDelay=n,Dr(n>t,"Short delay should be less than long delay!"),this.isMobile=Lq()||Vq()}get(){return aK()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(e,t){Dr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uK={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cK=new Qu(3e4,6e4);function Fi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ui(e,t,n,r,i={}){return $P(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Yu(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),NP.fetch()(DP(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function $P(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},uK),t);try{const i=new dK(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Gc(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gc(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Gc(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Gc(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw OP(e,c,u);On(e,c)}}catch(i){if(i instanceof Wr)throw i;On(e,"network-request-failed",{message:String(i)})}}async function Xu(e,t,n,r,i={}){const o=await Ui(e,t,n,r,i);return"mfaPendingCredential"in o&&On(e,"multi-factor-auth-required",{_serverResponse:o}),o}function DP(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R1(e.config,i):`${e.config.apiScheme}://${i}`}function fK(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dK{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dr(this.auth,"network-request-failed")),cK.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gc(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dr(e,t,r);return i.customData._tokenResponse=n,i}function Lb(e){return e!==void 0&&e.enterprise!==void 0}class hK{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return fK(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function pK(e,t){return Ui(e,"GET","/v2/recaptchaConfig",Fi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mK(e,t){return Ui(e,"POST","/v1/accounts:delete",t)}async function gK(e,t){return Ui(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function vK(e,t=!1){const n=Ht(e),r=await n.getIdToken(t),i=O1(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:kl(eg(i.auth_time)),issuedAtTime:kl(eg(i.iat)),expirationTime:kl(eg(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function eg(e){return Number(e)*1e3}function O1(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return zf("JWT malformed, contained fewer than 3 sections"),null;try{const i=wP(n);return i?JSON.parse(i):(zf("Failed to decode base64 JWT payload"),null)}catch(i){return zf("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yK(e){const t=O1(e);return G(t,"internal-error"),G(typeof t.exp<"u","internal-error"),G(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hu(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Wr&&_K(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function _K({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wK{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kl(this.lastLoginAt),this.creationTime=kl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fd(e){var t;const n=e.auth,r=await e.getIdToken(),i=await hu(e,gK(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?bK(o.providerUserInfo):[],a=SK(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new MP(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function EK(e){const t=Ht(e);await Fd(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function SK(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function bK(e){return e.map(t=>{var{providerId:n}=t,r=q0(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TK(e,t){const n=await $P(e,{},async()=>{const r=Yu({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=DP(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",NP.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IK(e,t){return Ui(e,"POST","/v2/accounts:revokeToken",Fi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){G(t.idToken,"internal-error"),G(typeof t.idToken<"u","internal-error"),G(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):yK(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return G(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await TK(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new pu;return r&&(G(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(G(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pu,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e,t){G(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class go{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=q0(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wK(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new MP(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await hu(this,this.stsTokenManager.getToken(this.auth,t));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return vK(this,t)}reload(){return EK(this)}_assign(t){this!==t&&(G(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new go(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Fd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await hu(this,mK(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:T,providerData:I,stsTokenManager:b}=n;G(y&&b,t,"internal-error");const R=pu.fromJSON(this.name,b);G(typeof y=="string",t,"internal-error"),Kr(f,t.name),Kr(d,t.name),G(typeof E=="boolean",t,"internal-error"),G(typeof T=="boolean",t,"internal-error"),Kr(p,t.name),Kr(g,t.name),Kr(m,t.name),Kr(_,t.name),Kr(v,t.name),Kr(h,t.name);const j=new go({uid:y,auth:t,email:d,emailVerified:E,displayName:f,isAnonymous:T,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:R,createdAt:v,lastLoginAt:h});return I&&Array.isArray(I)&&(j.providerData=I.map(O=>Object.assign({},O))),_&&(j._redirectEventId=_),j}static async _fromIdTokenResponse(t,n,r=!1){const i=new pu;i.updateFromServerResponse(n);const o=new go({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Fd(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=new Map;function Ir(e){Dr(e instanceof Function,"Expected a class definition");let t=jb.get(e);return t?(Dr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,jb.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}LP.type="NONE";const Vb=LP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(e,t,n){return`firebase:${e}:${t}:${n}`}class ks{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Bf(this.userKey,i.apiKey,o),this.fullPersistenceKey=Bf("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?go._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ks(Ir(Vb),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ir(Vb);const s=Bf(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=go._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new ks(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new ks(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(FP(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jP(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zP(t))return"Blackberry";if(BP(t))return"Webos";if(N1(t))return"Safari";if((t.includes("chrome/")||VP(t))&&!t.includes("edge/"))return"Chrome";if(UP(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jP(e=jt()){return/firefox\//i.test(e)}function N1(e=jt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function VP(e=jt()){return/crios\//i.test(e)}function FP(e=jt()){return/iemobile/i.test(e)}function UP(e=jt()){return/android/i.test(e)}function zP(e=jt()){return/blackberry/i.test(e)}function BP(e=jt()){return/webos/i.test(e)}function up(e=jt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function CK(e=jt()){var t;return up(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function xK(){return Fq()&&document.documentMode===10}function WP(e=jt()){return up(e)||UP(e)||BP(e)||zP(e)||/windows phone/i.test(e)||FP(e)}function kK(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(e,t=[]){let n;switch(e){case"Browser":n=Fb(jt());break;case"Worker":n=`${Fb(jt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sa}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AK{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PK(e,t={}){return Ui(e,"GET","/v2/passwordPolicy",Fi(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RK=6;class OK{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:RK,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NK{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ub(this),this.idTokenSubscription=new Ub(this),this.beforeStateQueue=new AK(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ir(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ks.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Fd(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=lK()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ht(t):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&G(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await PK(this),n=new OK(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ku("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IK(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ir(t)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=HP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&iK(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zi(e){return Ht(e)}class Ub{constructor(t){this.auth=t,this.observer=null,this.addObserver=Gq(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $K(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function qP(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=dr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",$K().appendChild(r)})}function DK(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const MK="https://www.google.com/recaptcha/enterprise.js?render=",LK="recaptcha-enterprise",jK="NO_RECAPTCHA";class VK{constructor(t){this.type=LK,this.auth=zi(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{pK(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new hK(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Lb(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(jK)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Lb(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}qP(MK+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function zb(e,t,n,r=!1){const i=new VK(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function ny(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await zb(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await zb(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FK(e,t){const n=A1(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Ld(o,t??{}))return i;On(i,"already-initialized")}return n.initialize({options:t})}function UK(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ir);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function zK(e,t,n){const r=zi(e);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=GP(t),{host:s,port:a}=BK(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WK()}function GP(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function BK(e){const t=GP(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Bb(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Bb(s)}}}function Bb(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function WK(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Tr("not implemented")}_getIdTokenResponse(t){return Tr("not implemented")}_linkToIdToken(t,n){return Tr("not implemented")}_getReauthenticationResolver(t){return Tr("not implemented")}}async function HK(e,t){return Ui(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qK(e,t){return Xu(e,"POST","/v1/accounts:signInWithPassword",Fi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GK(e,t){return Xu(e,"POST","/v1/accounts:signInWithEmailLink",Fi(e,t))}async function KK(e,t){return Xu(e,"POST","/v1/accounts:signInWithEmailLink",Fi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends $1{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new mu(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new mu(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ny(t,n,"signInWithPassword",qK);case"emailLink":return GK(t,{email:this._email,oobCode:this._password});default:On(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ny(t,r,"signUpPassword",HK);case"emailLink":return KK(t,{idToken:n,email:this._email,oobCode:this._password});default:On(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(e,t){return Xu(e,"POST","/v1/accounts:signInWithIdp",Fi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YK="http://localhost";class Co extends $1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Co(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=q0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Co(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return As(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,As(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,As(t,n)}buildRequest(){const t={requestUri:YK,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Yu(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QK(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XK(e){const t=sl(al(e)).link,n=t?sl(al(t)).deep_link_id:null,r=sl(al(e)).deep_link_id;return(r?sl(al(r)).link:null)||r||n||t||e}class D1{constructor(t){var n,r,i,o,s,a;const l=sl(al(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=QK((i=l.mode)!==null&&i!==void 0?i:null);G(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=XK(t);try{return new D1(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this.providerId=ba.PROVIDER_ID}static credential(t,n){return mu._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=D1.parseLink(n);return G(r,"argument-error"),mu._fromEmailAndCode(t,r.code,r.tenantId)}}ba.PROVIDER_ID="password";ba.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ba.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends M1{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Ju{constructor(){super("facebook.com")}static credential(t){return Co._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return oi.credentialFromTaggedObject(t)}static credentialFromError(t){return oi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return oi.credential(t.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ju{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Co._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Er.credentialFromTaggedObject(t)}static credentialFromError(t){return Er.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Ju{constructor(){super("github.com")}static credential(t){return Co._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return si.credentialFromTaggedObject(t)}static credentialFromError(t){return si.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return si.credential(t.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Ju{constructor(){super("twitter.com")}static credential(t,n){return Co._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ai.credentialFromTaggedObject(t)}static credentialFromError(t){return ai.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ai.credential(n,r)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JK(e,t){return Xu(e,"POST","/v1/accounts:signUp",Fi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await go._fromIdTokenResponse(t,r,i),s=Wb(r);return new xo({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Wb(r);return new xo({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Wb(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud extends Wr{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ud.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ud(t,n,r,i)}}function KP(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ud._fromErrorAndOperation(e,o,t,r):o})}async function ZK(e,t,n=!1){const r=await hu(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xo._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eY(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await hu(e,KP(r,i,t,e),n);G(o.idToken,r,"internal-error");const s=O1(o.idToken);G(s,r,"internal-error");const{sub:a}=s;return G(e.uid===a,r,"user-mismatch"),xo._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&On(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(e,t,n=!1){const r="signIn",i=await KP(e,r,t),o=await xo._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function tY(e,t){return YP(zi(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP(e){const t=zi(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function nY(e,t,n){const r=zi(e),s=await ny(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JK).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&QP(e),l}),a=await xo._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function rY(e,t,n){return tY(Ht(e),ba.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&QP(e),r})}function iY(e,t,n,r){return Ht(e).onIdTokenChanged(t,n,r)}function oY(e,t,n){return Ht(e).beforeAuthStateChanged(t,n)}function sY(e,t,n,r){return Ht(e).onAuthStateChanged(t,n,r)}function aY(e){return Ht(e).signOut()}const zd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zd,"1"),this.storage.removeItem(zd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lY(){const e=jt();return N1(e)||up(e)}const uY=1e3,cY=10;class JP extends XP{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lY()&&kK(),this.fallbackToPolling=WP(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);xK()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,cY):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},uY)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}JP.type="LOCAL";const fY=JP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP extends XP{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ZP.type="SESSION";const eR=ZP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dY(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new cp(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await dY(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cp.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hY{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=L1("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(d.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return window}function pY(e){hr().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(){return typeof hr().WorkerGlobalScope<"u"&&typeof hr().importScripts=="function"}async function mY(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gY(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function vY(){return tR()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="firebaseLocalStorageDb",yY=1,Bd="firebaseLocalStorage",rR="fbase_key";class Zu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fp(e,t){return e.transaction([Bd],t?"readwrite":"readonly").objectStore(Bd)}function _Y(){const e=indexedDB.deleteDatabase(nR);return new Zu(e).toPromise()}function ry(){const e=indexedDB.open(nR,yY);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Bd,{keyPath:rR})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Bd)?t(r):(r.close(),await _Y(),t(await ry()))})})}async function Hb(e,t,n){const r=fp(e,!0).put({[rR]:t,value:n});return new Zu(r).toPromise()}async function wY(e,t){const n=fp(e,!1).get(t),r=await new Zu(n).toPromise();return r===void 0?null:r.value}function qb(e,t){const n=fp(e,!0).delete(t);return new Zu(n).toPromise()}const EY=800,SY=3;class iR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ry(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>SY)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cp._getInstance(vY()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await mY(),!this.activeServiceWorker)return;this.sender=new hY(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||gY()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ry();return await Hb(t,zd,"1"),await qb(t,zd),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hb(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>wY(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qb(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=fp(i,!1).getAll();return new Zu(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EY)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iR.type="LOCAL";const bY=iR;new Qu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(e,t){return t?Ir(t):(G(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1 extends $1{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return As(t,this._buildIdpRequest())}_linkToIdToken(t,n){return As(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return As(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function TY(e){return YP(e.auth,new j1(e),e.bypassAuthState)}function IY(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),eY(n,new j1(e),e.bypassAuthState)}async function CY(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),ZK(n,new j1(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return TY;case"linkViaPopup":case"linkViaRedirect":return CY;case"reauthViaPopup":case"reauthViaRedirect":return IY;default:On(this.auth,"internal-error")}}resolve(t){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xY=new Qu(2e3,1e4);async function kY(e,t,n){const r=zi(e);oK(e,t,M1);const i=oR(r,n);return new io(r,"signInViaPopup",t,i).executeNotNull()}class io extends sR{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,io.currentPopupAction&&io.currentPopupAction.cancel(),io.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return G(t,this.auth,"internal-error"),t}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const t=L1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,io.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,xY.get())};t()}}io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AY="pendingRedirect",Wf=new Map;class PY extends sR{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Wf.get(this.auth._key());if(!t){try{const r=await RY(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Wf.set(this.auth._key(),t)}return this.bypassAuthState||Wf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RY(e,t){const n=$Y(t),r=NY(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OY(e,t){Wf.set(e._key(),t)}function NY(e){return Ir(e._redirectPersistence)}function $Y(e){return Bf(AY,e.config.apiKey,e.name)}async function DY(e,t,n=!1){const r=zi(e),i=oR(r,t),s=await new PY(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MY=10*60*1e3;class LY{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!jY(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!aR(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=MY&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gb(t))}saveEventToCache(t){this.cachedEventUids.add(Gb(t)),this.lastProcessedEventTime=Date.now()}}function Gb(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function aR({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function jY(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aR(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VY(e,t={}){return Ui(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FY=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UY=/^https?/;async function zY(e){if(e.config.emulator)return;const{authorizedDomains:t}=await VY(e);for(const n of t)try{if(BY(n))return}catch{}On(e,"unauthorized-domain")}function BY(e){const t=ty(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!UY.test(n))return!1;if(FY.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WY=new Qu(3e4,6e4);function Kb(){const e=hr().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function HY(e){return new Promise((t,n)=>{var r,i,o;function s(){Kb(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Kb(),n(dr(e,"network-request-failed"))},timeout:WY.get()})}if(!((i=(r=hr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=hr().gapi)===null||o===void 0)&&o.load)s();else{const a=DK("iframefcb");return hr()[a]=()=>{gapi.load?s():n(dr(e,"network-request-failed"))},qP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Hf=null,t})}let Hf=null;function qY(e){return Hf=Hf||HY(e),Hf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GY=new Qu(5e3,15e3),KY="__/auth/iframe",YY="emulator/auth/iframe",QY={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XY=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JY(e){const t=e.config;G(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R1(t,YY):`https://${e.config.authDomain}/${KY}`,r={apiKey:t.apiKey,appName:e.name,v:Sa},i=XY.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Yu(r).slice(1)}`}async function ZY(e){const t=await qY(e),n=hr().gapi;return G(n,e,"internal-error"),t.open({where:document.body,url:JY(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QY,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=dr(e,"network-request-failed"),a=hr().setTimeout(()=>{o(s)},GY.get());function l(){hr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eQ={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tQ=500,nQ=600,rQ="_blank",iQ="http://localhost";class Yb{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oQ(e,t,n,r=tQ,i=nQ){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eQ),{width:r.toString(),height:i.toString(),top:o,left:s}),u=jt().toLowerCase();n&&(a=VP(u)?rQ:n),jP(u)&&(t=t||iQ,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(CK(u)&&a!=="_self")return sQ(t||"",a),new Yb(null);const f=window.open(t||"",a,c);G(f,e,"popup-blocked");try{f.focus()}catch{}return new Yb(f)}function sQ(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aQ="__/auth/handler",lQ="emulator/auth/handler",uQ=encodeURIComponent("fac");async function Qb(e,t,n,r,i,o){G(e.config.authDomain,e,"auth-domain-config-required"),G(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Sa,eventId:i};if(t instanceof M1){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",qq(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(t instanceof Ju){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${uQ}=${encodeURIComponent(l)}`:"";return`${cQ(e)}?${Yu(a).slice(1)}${u}`}function cQ({config:e}){return e.emulator?R1(e,lQ):`https://${e.authDomain}/${aQ}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="webStorageSupport";class fQ{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eR,this._completeRedirectFn=DY,this._overrideRedirectResult=OY}async _openPopup(t,n,r,i){var o;Dr((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Qb(t,n,r,ty(),i);return oQ(t,s,L1())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Qb(t,n,r,ty(),i);return pY(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Dr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ZY(t),r=new LY(t);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(tg,{type:tg},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[tg];s!==void 0&&n(!!s),On(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zY(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return WP()||N1()||up()}}const dQ=fQ;var Xb="@firebase/auth",Jb="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hQ{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pQ(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mQ(e){Qs(new To("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;G(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HP(e)},u=new NK(r,i,o,l);return UK(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Qs(new To("auth-internal",t=>{const n=zi(t.getProvider("auth").getImmediate());return(r=>new hQ(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ii(Xb,Jb,pQ(e)),Ii(Xb,Jb,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gQ=5*60,vQ=bP("authIdTokenMaxAge")||gQ;let Zb=null;const yQ=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vQ)return;const i=n==null?void 0:n.token;Zb!==i&&(Zb=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _Q(e=xP()){const t=A1(e,"auth");if(t.isInitialized())return t.getImmediate();const n=FK(e,{popupRedirectResolver:dQ,persistence:[bY,fY,eR]}),r=bP("authTokenSyncURL");if(r){const o=yQ(r);oY(n,o,()=>o(n.currentUser)),iY(n,s=>o(s))}const i=EP("auth");return i&&zK(n,`http://${i}`),n}mQ("Browser");var wQ=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,V1=V1||{},Y=wQ||self;function dp(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ec(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function EQ(e){return Object.prototype.hasOwnProperty.call(e,ng)&&e[ng]||(e[ng]=++SQ)}var ng="closure_uid_"+(1e9*Math.random()>>>0),SQ=0;function bQ(e,t,n){return e.call.apply(e.bind,arguments)}function TQ(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Dt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Dt=bQ:Dt=TQ,Dt.apply(null,arguments)}function Kc(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function gt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function Bi(){this.s=this.s,this.o=this.o}var IQ=0;Bi.prototype.s=!1;Bi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),IQ!=0)&&EQ(this)};Bi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lR=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function F1(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function eT(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(dp(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function Mt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var CQ=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};Y.addEventListener("test",n,t),Y.removeEventListener("test",n,t)}catch{}return e}();function gu(e){return/^[\s\xa0]*$/.test(e)}function hp(){var e=Y.navigator;return e&&(e=e.userAgent)?e:""}function ir(e){return hp().indexOf(e)!=-1}function U1(e){return U1[" "](e),e}U1[" "]=function(){};function xQ(e,t){var n=_X;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var kQ=ir("Opera"),Xs=ir("Trident")||ir("MSIE"),uR=ir("Edge"),iy=uR||Xs,cR=ir("Gecko")&&!(hp().toLowerCase().indexOf("webkit")!=-1&&!ir("Edge"))&&!(ir("Trident")||ir("MSIE"))&&!ir("Edge"),AQ=hp().toLowerCase().indexOf("webkit")!=-1&&!ir("Edge");function fR(){var e=Y.document;return e?e.documentMode:void 0}var oy;e:{var rg="",ig=function(){var e=hp();if(cR)return/rv:([^\);]+)(\)|;)/.exec(e);if(uR)return/Edge\/([\d\.]+)/.exec(e);if(Xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(AQ)return/WebKit\/(\S+)/.exec(e);if(kQ)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ig&&(rg=ig?ig[1]:""),Xs){var og=fR();if(og!=null&&og>parseFloat(rg)){oy=String(og);break e}}oy=rg}var sy;if(Y.document&&Xs){var tT=fR();sy=tT||parseInt(oy,10)||void 0}else sy=void 0;var PQ=sy;function vu(e,t){if(Mt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(cR){e:{try{U1(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:RQ[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&vu.$.h.call(this)}}gt(vu,Mt);var RQ={2:"touch",3:"pen",4:"mouse"};vu.prototype.h=function(){vu.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var tc="closure_listenable_"+(1e6*Math.random()|0),OQ=0;function NQ(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++OQ,this.fa=this.ia=!1}function pp(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function z1(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function $Q(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function dR(e){const t={};for(const n in e)t[n]=e[n];return t}const nT="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hR(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<nT.length;o++)n=nT[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function mp(e){this.src=e,this.g={},this.h=0}mp.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=ly(e,t,r,i);return-1<s?(t=e[s],n||(t.ia=!1)):(t=new NQ(t,this.src,o,!!r,i),t.ia=n,e.push(t)),t};function ay(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=lR(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(pp(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ly(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.fa&&o.listener==t&&o.capture==!!n&&o.la==r)return i}return-1}var B1="closure_lm_"+(1e6*Math.random()|0),sg={};function pR(e,t,n,r,i){if(r&&r.once)return gR(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)pR(e,t[o],n,r,i);return null}return n=q1(n),e&&e[tc]?e.O(t,n,ec(r)?!!r.capture:!!r,i):mR(e,t,n,!1,r,i)}function mR(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=ec(i)?!!i.capture:!!i,a=H1(e);if(a||(e[B1]=a=new mp(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=DQ(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)CQ||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(yR(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DQ(){function e(n){return t.call(e.src,e.listener,n)}const t=MQ;return e}function gR(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)gR(e,t[o],n,r,i);return null}return n=q1(n),e&&e[tc]?e.P(t,n,ec(r)?!!r.capture:!!r,i):mR(e,t,n,!0,r,i)}function vR(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)vR(e,t[o],n,r,i);else r=ec(r)?!!r.capture:!!r,n=q1(n),e&&e[tc]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=ly(o,n,r,i),-1<n&&(pp(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=H1(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ly(t,n,r,i)),(n=-1<e?t[e]:null)&&W1(n))}function W1(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[tc])ay(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(yR(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=H1(t))?(ay(n,e),n.h==0&&(n.src=null,t[B1]=null)):pp(e)}}}function yR(e){return e in sg?sg[e]:sg[e]="on"+e}function MQ(e,t){if(e.fa)e=!0;else{t=new vu(t,this);var n=e.listener,r=e.la||e.src;e.ia&&W1(e),e=n.call(r,t)}return e}function H1(e){return e=e[B1],e instanceof mp?e:null}var ag="__closure_events_fn_"+(1e9*Math.random()>>>0);function q1(e){return typeof e=="function"?e:(e[ag]||(e[ag]=function(t){return e.handleEvent(t)}),e[ag])}function pt(){Bi.call(this),this.i=new mp(this),this.S=this,this.J=null}gt(pt,Bi);pt.prototype[tc]=!0;pt.prototype.removeEventListener=function(e,t,n,r){vR(this,e,t,n,r)};function Tt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Mt(t,e);else if(t instanceof Mt)t.target=t.target||e;else{var i=t;t=new Mt(r,e),hR(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Yc(s,r,!0,t)&&i}if(s=t.g=e,i=Yc(s,r,!0,t)&&i,i=Yc(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Yc(s,r,!1,t)&&i}pt.prototype.N=function(){if(pt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)pp(n[r]);delete e.g[t],e.h--}}this.J=null};pt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};pt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Yc(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&ay(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var G1=Y.JSON.stringify;class LQ{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function jQ(){var e=K1;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class VQ{constructor(){this.h=this.g=null}add(t,n){const r=_R.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var _R=new LQ(()=>new FQ,e=>e.reset());class FQ{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UQ(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function zQ(e){Y.setTimeout(()=>{throw e},0)}let yu,_u=!1,K1=new VQ,wR=()=>{const e=Y.Promise.resolve(void 0);yu=()=>{e.then(BQ)}};var BQ=()=>{for(var e;e=jQ();){try{e.h.call(e.g)}catch(n){zQ(n)}var t=_R;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_u=!1};function gp(e,t){pt.call(this),this.h=e||1,this.g=t||Y,this.j=Dt(this.qb,this),this.l=Date.now()}gt(gp,pt);N=gp.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Tt(this,"tick"),this.ga&&(Y1(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Y1(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}N.N=function(){gp.$.N.call(this),Y1(this),delete this.g};function Q1(e,t,n){if(typeof e=="function")n&&(e=Dt(e,n));else if(e&&typeof e.handleEvent=="function")e=Dt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:Y.setTimeout(e,t||0)}function ER(e){e.g=Q1(()=>{e.g=null,e.i&&(e.i=!1,ER(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class WQ extends Bi{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ER(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wu(e){Bi.call(this),this.h=e,this.g={}}gt(wu,Bi);var rT=[];function SR(e,t,n,r){Array.isArray(n)||(n&&(rT[0]=n.toString()),n=rT);for(var i=0;i<n.length;i++){var o=pR(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function bR(e){z1(e.g,function(t,n){this.g.hasOwnProperty(n)&&W1(t)},e),e.g={}}wu.prototype.N=function(){wu.$.N.call(this),bR(this)};wu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vp(){this.g=!0}vp.prototype.Ea=function(){this.g=!1};function HQ(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function qQ(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function ms(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+KQ(e,n)+(r?" "+r:"")})}function GQ(e,t){e.info(function(){return"TIMEOUT: "+t})}vp.prototype.info=function(){};function KQ(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return G1(n)}catch{return t}}var jo={},iT=null;function yp(){return iT=iT||new pt}jo.Ta="serverreachability";function TR(e){Mt.call(this,jo.Ta,e)}gt(TR,Mt);function Eu(e){const t=yp();Tt(t,new TR(t))}jo.STAT_EVENT="statevent";function IR(e,t){Mt.call(this,jo.STAT_EVENT,e),this.stat=t}gt(IR,Mt);function Bt(e){const t=yp();Tt(t,new IR(t,e))}jo.Ua="timingevent";function CR(e,t){Mt.call(this,jo.Ua,e),this.size=t}gt(CR,Mt);function nc(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){e()},t)}var _p={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xR={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function X1(){}X1.prototype.h=null;function oT(e){return e.h||(e.h=e.i())}function kR(){}var rc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function J1(){Mt.call(this,"d")}gt(J1,Mt);function Z1(){Mt.call(this,"c")}gt(Z1,Mt);var uy;function wp(){}gt(wp,X1);wp.prototype.g=function(){return new XMLHttpRequest};wp.prototype.i=function(){return{}};uy=new wp;function ic(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new wu(this),this.P=YQ,e=iy?125:void 0,this.V=new gp(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new AR}function AR(){this.i=null,this.g="",this.h=!1}var YQ=45e3,PR={},cy={};N=ic.prototype;N.setTimeout=function(e){this.P=e};function fy(e,t,n){e.L=1,e.A=Sp(Mr(t)),e.u=n,e.S=!0,RR(e,null)}function RR(e,t){e.G=Date.now(),oc(e),e.B=Mr(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),VR(n.i,"t",r),e.o=0,n=e.l.J,e.h=new AR,e.g=sO(e.l,n?t:null,!e.u),0<e.O&&(e.M=new WQ(Dt(e.Pa,e,e.g),e.O)),SR(e.U,e.g,"readystatechange",e.nb),t=e.I?dR(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Eu(),HQ(e.j,e.v,e.B,e.m,e.W,e.u)}N.nb=function(e){e=e.target;const t=this.M;t&&or(e)==3?t.l():this.Pa(e)};N.Pa=function(e){try{if(e==this.g)e:{const c=or(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||iy||this.g&&(this.h.h||this.g.ja()||uT(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?Eu(3):Eu(2)),Ep(this);var n=this.g.da();this.ca=n;t:if(OR(this)){var r=uT(this.g);e="";var i=r.length,o=or(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oo(this),Al(this);var s="";break t}this.h.i=new Y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.length=0,this.h.g+=e,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,qQ(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gu(a)){var u=a;break t}}u=null}if(n=u)ms(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dy(this,n);else{this.i=!1,this.s=3,Bt(12),oo(this),Al(this);break e}}this.S?(NR(this,c,s),iy&&this.i&&c==3&&(SR(this.U,this.V,"tick",this.mb),this.V.start())):(ms(this.j,this.m,s,null),dy(this,s)),c==4&&oo(this),this.i&&!this.J&&(c==4?nO(this.l,this):(this.i=!1,oc(this)))}else gX(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.s=3,Bt(12)):(this.s=0,Bt(13)),oo(this),Al(this)}}}catch{}finally{}};function OR(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function NR(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=QQ(e,n),i==cy){t==4&&(e.s=4,Bt(14),r=!1),ms(e.j,e.m,null,"[Incomplete Response]");break}else if(i==PR){e.s=4,Bt(15),ms(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ms(e.j,e.m,i,null),dy(e,i);OR(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Bt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),o_(t),t.M=!0,Bt(11))):(ms(e.j,e.m,n,"[Invalid Chunked Response]"),oo(e),Al(e))}N.mb=function(){if(this.g){var e=or(this.g),t=this.g.ja();this.o<t.length&&(Ep(this),NR(this,e,t),this.i&&e!=4&&oc(this))}};function QQ(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?cy:(n=Number(t.substring(n,r)),isNaN(n)?PR:(r+=1,r+n>t.length?cy:(t=t.slice(r,r+n),e.o=r+n,t)))}N.cancel=function(){this.J=!0,oo(this)};function oc(e){e.Y=Date.now()+e.P,$R(e,e.P)}function $R(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=nc(Dt(e.lb,e),t)}function Ep(e){e.C&&(Y.clearTimeout(e.C),e.C=null)}N.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(GQ(this.j,this.B),this.L!=2&&(Eu(),Bt(17)),oo(this),this.s=2,Al(this)):$R(this,this.Y-e)};function Al(e){e.l.H==0||e.J||nO(e.l,e)}function oo(e){Ep(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Y1(e.V),bR(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function dy(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||hy(n.i,e))){if(!e.K&&hy(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)qd(n),Cp(n);else break e;i_(n),Bt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=nc(Dt(n.ib,n),6e3));if(1>=zR(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else so(n,11)}else if((e.K||n.g==e)&&qd(n),!gu(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var o=r.i;o.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(e_(o,o.h),o.h=null))}if(r.F){const m=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,Ce(r.I,r.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=e;if(r.wa=oO(r,r.J?r.pa:null,r.Y),s.K){BR(r.i,s);var a=s,l=r.L;l&&a.setTimeout(l),a.C&&(Ep(a),oc(a)),r.g=s}else eO(r);0<n.j.length&&xp(n)}else u[0]!="stop"&&u[0]!="close"||so(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?so(n,7):r_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Eu(4)}catch{}}function XQ(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(dp(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function JQ(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(dp(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function DR(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(dp(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=JQ(e),r=XQ(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var MR=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZQ(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function vo(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof vo){this.h=e.h,Wd(this,e.j),this.s=e.s,this.g=e.g,Hd(this,e.m),this.l=e.l;var t=e.i,n=new Su;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),sT(this,n),this.o=e.o}else e&&(t=String(e).match(MR))?(this.h=!1,Wd(this,t[1]||"",!0),this.s=ll(t[2]||""),this.g=ll(t[3]||"",!0),Hd(this,t[4]),this.l=ll(t[5]||"",!0),sT(this,t[6]||"",!0),this.o=ll(t[7]||"")):(this.h=!1,this.i=new Su(null,this.h))}vo.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ul(t,aT,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ul(t,aT,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ul(n,n.charAt(0)=="/"?nX:tX,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ul(n,iX)),e.join("")};function Mr(e){return new vo(e)}function Wd(e,t,n){e.j=n?ll(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Hd(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function sT(e,t,n){t instanceof Su?(e.i=t,oX(e.i,e.h)):(n||(t=ul(t,rX)),e.i=new Su(t,e.h))}function Ce(e,t,n){e.i.set(t,n)}function Sp(e){return Ce(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ll(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ul(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,eX),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function eX(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var aT=/[#\/\?@]/g,tX=/[#\?:]/g,nX=/[#\?]/g,rX=/[#\?@]/g,iX=/#/g;function Su(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Wi(e){e.g||(e.g=new Map,e.h=0,e.i&&ZQ(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}N=Su.prototype;N.add=function(e,t){Wi(this),this.i=null,e=Ta(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function LR(e,t){Wi(e),t=Ta(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function jR(e,t){return Wi(e),t=Ta(e,t),e.g.has(t)}N.forEach=function(e,t){Wi(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};N.ta=function(){Wi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};N.Z=function(e){Wi(this);let t=[];if(typeof e=="string")jR(this,e)&&(t=t.concat(this.g.get(Ta(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};N.set=function(e,t){return Wi(this),this.i=null,e=Ta(this,e),jR(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};N.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function VR(e,t,n){LR(e,t),0<n.length&&(e.i=null,e.g.set(Ta(e,t),F1(n)),e.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function Ta(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function oX(e,t){t&&!e.j&&(Wi(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(LR(this,r),VR(this,i,n))},e)),e.j=t}var sX=class{constructor(e,t){this.g=e,this.map=t}};function FR(e){this.l=e||aX,Y.PerformanceNavigationTiming?(e=Y.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var aX=10;function UR(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function zR(e){return e.h?1:e.g?e.g.size:0}function hy(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function e_(e,t){e.g?e.g.add(t):e.h=t}function BR(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}FR.prototype.cancel=function(){if(this.i=WR(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function WR(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return F1(e.i)}var lX=class{stringify(e){return Y.JSON.stringify(e,void 0)}parse(e){return Y.JSON.parse(e,void 0)}};function uX(){this.g=new lX}function cX(e,t,n){const r=n||"";try{DR(e,function(i,o){let s=i;ec(i)&&(s=G1(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function fX(e,t){const n=new vp;if(Y.Image){const r=new Image;r.onload=Kc(Qc,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Kc(Qc,n,r,"TestLoadImage: error",!1,t),r.onabort=Kc(Qc,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Kc(Qc,n,r,"TestLoadImage: timeout",!1,t),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Qc(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function bp(e){this.l=e.ec||null,this.j=e.ob||!1}gt(bp,X1);bp.prototype.g=function(){return new Tp(this.l,this.j)};bp.prototype.i=function(e){return function(){return e}}({});function Tp(e,t){pt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=t_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(Tp,pt);var t_=0;N=Tp.prototype;N.open=function(e,t){if(this.readyState!=t_)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,bu(this)};N.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Y).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sc(this)),this.readyState=t_};N.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,bu(this)),this.g&&(this.readyState=3,bu(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;HR(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function HR(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}N.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?sc(this):bu(this),this.readyState==3&&HR(this)}};N.Za=function(e){this.g&&(this.response=this.responseText=e,sc(this))};N.Ya=function(e){this.g&&(this.response=e,sc(this))};N.ka=function(){this.g&&sc(this)};function sc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,bu(e)}N.setRequestHeader=function(e,t){this.v.append(e,t)};N.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function bu(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Tp.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var dX=Y.JSON.parse;function ze(e){pt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=qR,this.L=this.M=!1}gt(ze,pt);var qR="",hX=/^https?$/i,pX=["POST","PUT"];N=ze.prototype;N.Oa=function(e){this.M=e};N.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():uy.g(),this.C=this.u?oT(this.u):oT(uy),this.g.onreadystatechange=Dt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(o){lT(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=Y.FormData&&e instanceof Y.FormData,!(0<=lR(pX,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{YR(this),0<this.B&&((this.L=mX(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Dt(this.ua,this)):this.A=Q1(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){lT(this,o)}};function mX(e){return Xs&&typeof e.timeout=="number"&&e.ontimeout!==void 0}N.ua=function(){typeof V1<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tt(this,"timeout"),this.abort(8))};function lT(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,GR(e),Ip(e)}function GR(e){e.F||(e.F=!0,Tt(e,"complete"),Tt(e,"error"))}N.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Tt(this,"complete"),Tt(this,"abort"),Ip(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ip(this,!0)),ze.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?KR(this):this.kb())};N.kb=function(){KR(this)};function KR(e){if(e.h&&typeof V1<"u"&&(!e.C[1]||or(e)!=4||e.da()!=2)){if(e.v&&or(e)==4)Q1(e.La,0,e);else if(Tt(e,"readystatechange"),or(e)==4){e.h=!1;try{const s=e.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=s===0){var i=String(e.I).match(MR)[1]||null;!i&&Y.self&&Y.self.location&&(i=Y.self.location.protocol.slice(0,-1)),r=!hX.test(i?i.toLowerCase():"")}n=r}if(n)Tt(e,"complete"),Tt(e,"success");else{e.m=6;try{var o=2<or(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",GR(e)}}finally{Ip(e)}}}}function Ip(e,t){if(e.g){YR(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Tt(e,"ready");try{n.onreadystatechange=r}catch{}}}function YR(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Y.clearTimeout(e.A),e.A=null)}N.isActive=function(){return!!this.g};function or(e){return e.g?e.g.readyState:0}N.da=function(){try{return 2<or(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),dX(t)}};function uT(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case qR:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function gX(e){const t={};e=(e.g&&2<=or(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(gu(e[r]))continue;var n=UQ(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}$Q(t,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function QR(e){let t="";return z1(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function n_(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=QR(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Ce(e,t,n))}function Qa(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function XR(e){this.Ga=0,this.j=[],this.l=new vp,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Qa("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Qa("baseRetryDelayMs",5e3,e),this.hb=Qa("retryDelaySeedMs",1e4,e),this.eb=Qa("forwardChannelMaxRetries",2,e),this.xa=Qa("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new FR(e&&e.concurrentRequestLimit),this.Ja=new uX,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=XR.prototype;N.ra=8;N.H=1;function r_(e){if(JR(e),e.H==3){var t=e.W++,n=Mr(e.I);if(Ce(n,"SID",e.K),Ce(n,"RID",t),Ce(n,"TYPE","terminate"),ac(e,n),t=new ic(e,e.l,t),t.L=2,t.A=Sp(Mr(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=t.A,n=!0),n||(t.g=sO(t.l,null),t.g.ha(t.A)),t.G=Date.now(),oc(t)}iO(e)}function Cp(e){e.g&&(o_(e),e.g.cancel(),e.g=null)}function JR(e){Cp(e),e.u&&(Y.clearTimeout(e.u),e.u=null),qd(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&Y.clearTimeout(e.m),e.m=null)}function xp(e){if(!UR(e.i)&&!e.m){e.m=!0;var t=e.Na;yu||wR(),_u||(yu(),_u=!0),K1.add(t,e),e.C=0}}function vX(e,t){return zR(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=nc(Dt(e.Na,e,t),rO(e,e.C)),e.C++,!0)}N.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new ic(this,this.l,e);let o=this.s;if(this.U&&(o?(o=dR(o),hR(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ZR(this,i,t),n=Mr(this.I),Ce(n,"RID",e),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),ac(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(QR(o)))+"&"+t:this.o&&n_(n,this.o,o)),e_(this.i,i),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",t),Ce(n,"SID","null"),i.aa=!0,fy(i,n,null)):fy(i,n,t),this.H=2}}else this.H==3&&(e?cT(this,e):this.j.length==0||UR(this.i)||cT(this))};function cT(e,t){var n;t?n=t.m:n=e.W++;const r=Mr(e.I);Ce(r,"SID",e.K),Ce(r,"RID",n),Ce(r,"AID",e.V),ac(e,r),e.o&&e.s&&n_(r,e.o,e.s),n=new ic(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ZR(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),e_(e.i,n),fy(n,r,t)}function ac(e,t){e.na&&z1(e.na,function(n,r){Ce(t,r,n)}),e.h&&DR({},function(n,r){Ce(t,r,n)})}function ZR(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Dt(e.h.Va,e.h,e):null;e:{var i=e.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=o,0>u)o=Math.max(0,i[l].g-100),a=!1;else try{cX(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function eO(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;yu||wR(),_u||(yu(),_u=!0),K1.add(t,e),e.A=0}}function i_(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=nc(Dt(e.Ma,e),rO(e,e.A)),e.A++,!0)}N.Ma=function(){if(this.u=null,tO(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=nc(Dt(this.jb,this),e)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Bt(10),Cp(this),tO(this))};function o_(e){e.B!=null&&(Y.clearTimeout(e.B),e.B=null)}function tO(e){e.g=new ic(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Mr(e.wa);Ce(t,"RID","rpc"),Ce(t,"SID",e.K),Ce(t,"AID",e.V),Ce(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Ce(t,"TO",e.qa),Ce(t,"TYPE","xmlhttp"),ac(e,t),e.o&&e.s&&n_(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Sp(Mr(t)),n.u=null,n.S=!0,RR(n,e)}N.ib=function(){this.v!=null&&(this.v=null,Cp(this),i_(this),Bt(19))};function qd(e){e.v!=null&&(Y.clearTimeout(e.v),e.v=null)}function nO(e,t){var n=null;if(e.g==t){qd(e),o_(e),e.g=null;var r=2}else if(hy(e.i,t))n=t.F,BR(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=yp(),Tt(r,new CR(r,n)),xp(e)}else eO(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&vX(e,t)||r==2&&i_(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:so(e,5);break;case 4:so(e,10);break;case 3:so(e,6);break;default:so(e,2)}}}function rO(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function so(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Dt(e.pb,e);n||(n=new vo("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Wd(n,"https"),Sp(n)),fX(n.toString(),r)}else Bt(2);e.H=0,e.h&&e.h.za(t),iO(e),JR(e)}N.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Bt(2)):(this.l.info("Failed to ping google.com"),Bt(1))};function iO(e){if(e.H=0,e.ma=[],e.h){const t=WR(e.i);(t.length!=0||e.j.length!=0)&&(eT(e.ma,t),eT(e.ma,e.j),e.i.i.length=0,F1(e.j),e.j.length=0),e.h.ya()}}function oO(e,t,n){var r=n instanceof vo?Mr(n):new vo(n);if(r.g!="")t&&(r.g=t+"."+r.g),Hd(r,r.m);else{var i=Y.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new vo(null);r&&Wd(o,r),t&&(o.g=t),i&&Hd(o,i),n&&(o.l=n),r=o}return n=e.F,t=e.Da,n&&t&&Ce(r,n,t),Ce(r,"VER",e.ra),ac(e,r),r}function sO(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new ze(new bp({ob:n})):new ze(e.va),t.Oa(e.J),t}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function aO(){}N=aO.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Gd(){if(Xs&&!(10<=Number(PQ)))throw Error("Environmental error: no available transport.")}Gd.prototype.g=function(e,t){return new pn(e,t)};function pn(e,t){pt.call(this),this.g=new XR(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!gu(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!gu(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ia(this)}gt(pn,pt);pn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Bt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=oO(e,null,e.Y),xp(e)};pn.prototype.close=function(){r_(this.g)};pn.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=G1(e),e=n);t.j.push(new sX(t.fb++,e)),t.H==3&&xp(t)};pn.prototype.N=function(){this.g.h=null,delete this.j,r_(this.g),delete this.g,pn.$.N.call(this)};function lO(e){J1.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}gt(lO,J1);function uO(){Z1.call(this),this.status=1}gt(uO,Z1);function Ia(e){this.g=e}gt(Ia,aO);Ia.prototype.Ba=function(){Tt(this.g,"a")};Ia.prototype.Aa=function(e){Tt(this.g,new lO(e))};Ia.prototype.za=function(e){Tt(this.g,new uO)};Ia.prototype.ya=function(){Tt(this.g,"b")};function yX(){this.blockSize=-1}function Gn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}gt(Gn,yX);Gn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function lg(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],s=t+(o^n&(i^o))+r[0]+3614090360&4294967295;t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[4]+4118548399&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[8]+1770035416&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[12]+1804603682&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(i^o&(n^i))+r[1]+4129170786&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[5]+3593408605&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[9]+568446438&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[13]+2850285829&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(n^i^o)+r[5]+4294588738&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[1]+2763975236&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[13]+681279174&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[9]+3654602809&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(i^(n|~o))+r[0]+4096336452&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[12]+1700485571&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[8]+1873313359&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[4]+4149444226&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}Gn.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,o=0;o<t;){if(i==0)for(;o<=n;)lg(this,e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(r[i++]=e.charCodeAt(o++),i==this.blockSize){lg(this,r),i=0;break}}else for(;o<t;)if(r[i++]=e[o++],i==this.blockSize){lg(this,r),i=0;break}}this.h=i,this.i+=t};Gn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function me(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=e[i]|0;r&&o==t||(n[i]=o,r=!1)}this.g=n}var _X={};function s_(e){return-128<=e&&128>e?xQ(e,function(t){return new me([t|0],0>t?-1:0)}):new me([e|0],0>e?-1:0)}function sr(e){if(isNaN(e)||!isFinite(e))return Ps;if(0>e)return Et(sr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=py;return new me(t,0)}function cO(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Et(cO(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=sr(Math.pow(t,8)),r=Ps,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),s=parseInt(e.substring(i,i+o),t);8>o?(o=sr(Math.pow(t,o)),r=r.R(o).add(sr(s))):(r=r.R(n),r=r.add(sr(s)))}return r}var py=4294967296,Ps=s_(0),my=s_(1),fT=s_(16777216);N=me.prototype;N.ea=function(){if(In(this))return-Et(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:py+r)*t,t*=py}return e};N.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Cr(this))return"0";if(In(this))return"-"+Et(this).toString(e);for(var t=sr(Math.pow(e,6)),n=this,r="";;){var i=Yd(n,t).g;n=Kd(n,i.R(t));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Cr(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};N.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Cr(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function In(e){return e.h==-1}N.X=function(e){return e=Kd(this,e),In(e)?-1:Cr(e)?0:1};function Et(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new me(n,~e.h).add(my)}N.abs=function(){return In(this)?Et(this):this};N.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var o=r+(this.D(i)&65535)+(e.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new me(n,n[n.length-1]&-2147483648?-1:0)};function Kd(e,t){return e.add(Et(t))}N.R=function(e){if(Cr(this)||Cr(e))return Ps;if(In(this))return In(e)?Et(this).R(Et(e)):Et(Et(this).R(e));if(In(e))return Et(this.R(Et(e)));if(0>this.X(fT)&&0>e.X(fT))return sr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=s*l,Xc(n,2*r+2*i),n[2*r+2*i+1]+=o*l,Xc(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Xc(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Xc(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new me(n,0)};function Xc(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Xa(e,t){this.g=e,this.h=t}function Yd(e,t){if(Cr(t))throw Error("division by zero");if(Cr(e))return new Xa(Ps,Ps);if(In(e))return t=Yd(Et(e),t),new Xa(Et(t.g),Et(t.h));if(In(t))return t=Yd(e,Et(t)),new Xa(Et(t.g),t.h);if(30<e.g.length){if(In(e)||In(t))throw Error("slowDivide_ only works with positive integers.");for(var n=my,r=t;0>=r.X(e);)n=dT(n),r=dT(r);var i=Xo(n,1),o=Xo(r,1);for(r=Xo(r,2),n=Xo(n,2);!Cr(r);){var s=o.add(r);0>=s.X(e)&&(i=i.add(n),o=s),r=Xo(r,1),n=Xo(n,1)}return t=Kd(e,i.R(t)),new Xa(i,t)}for(i=Ps;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=sr(n),s=o.R(t);In(s)||0<s.X(e);)n-=r,o=sr(n),s=o.R(t);Cr(o)&&(o=my),i=i.add(o),e=Kd(e,s)}return new Xa(i,e)}N.gb=function(e){return Yd(this,e).h};N.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new me(n,this.h&e.h)};N.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new me(n,this.h|e.h)};N.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new me(n,this.h^e.h)};function dT(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new me(n,e.h)}function Xo(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],o=0;o<r;o++)i[o]=0<t?e.D(o+n)>>>t|e.D(o+n+1)<<32-t:e.D(o+n);return new me(i,e.h)}Gd.prototype.createWebChannel=Gd.prototype.g;pn.prototype.send=pn.prototype.u;pn.prototype.open=pn.prototype.m;pn.prototype.close=pn.prototype.close;_p.NO_ERROR=0;_p.TIMEOUT=8;_p.HTTP_ERROR=6;xR.COMPLETE="complete";kR.EventType=rc;rc.OPEN="a";rc.CLOSE="b";rc.ERROR="c";rc.MESSAGE="d";pt.prototype.listen=pt.prototype.O;ze.prototype.listenOnce=ze.prototype.P;ze.prototype.getLastError=ze.prototype.Sa;ze.prototype.getLastErrorCode=ze.prototype.Ia;ze.prototype.getStatus=ze.prototype.da;ze.prototype.getResponseJson=ze.prototype.Wa;ze.prototype.getResponseText=ze.prototype.ja;ze.prototype.send=ze.prototype.ha;ze.prototype.setWithCredentials=ze.prototype.Oa;Gn.prototype.digest=Gn.prototype.l;Gn.prototype.reset=Gn.prototype.reset;Gn.prototype.update=Gn.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=sr;me.fromString=cO;var wX=function(){return new Gd},EX=function(){return yp()},ug=_p,SX=xR,bX=jo,hT={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Jc=kR,TX=ze,IX=Gn,Rs=me;const pT="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new x1("@firebase/firestore");function Ja(){return ko.logLevel}function U(e,...t){if(ko.logLevel<=ie.DEBUG){const n=t.map(a_);ko.debug(`Firestore (${Ca}): ${e}`,...n)}}function Lr(e,...t){if(ko.logLevel<=ie.ERROR){const n=t.map(a_);ko.error(`Firestore (${Ca}): ${e}`,...n)}}function Js(e,...t){if(ko.logLevel<=ie.WARN){const n=t.map(a_);ko.warn(`Firestore (${Ca}): ${e}`,...n)}}function a_(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e="Unexpected state"){const t=`FIRESTORE (${Ca}) INTERNAL ASSERTION FAILED: `+e;throw Lr(t),new Error(t)}function Ee(e,t){e||K()}function Z(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Wr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class CX{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class xX{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kX{constructor(t){this.t=t,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new kr,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new kr)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new fO(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ee(t===null||typeof t=="string"),new Ot(t)}}class AX{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class PX{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new AX(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RX{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OX{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,U("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new RX(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NX(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=NX(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function de(e,t){return e<t?-1:e>t?1:0}function Zs(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new V(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new V(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?de(this.nanoseconds,t.nanoseconds):de(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Q(t)}static min(){return new Q(new it(0,0))}static max(){return new Q(new it(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,n,r){n===void 0?n=0:n>t.length&&K(),r===void 0?r=t.length-n:r>t.length-n&&K(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Tu.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Tu?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const o=t.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class xe extends Tu{construct(t,n,r){return new xe(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new V(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const $X=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends Tu{construct(t,n,r){return new St(t,n,r)}static isValidIdentifier(t){return $X.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new St(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new V(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new V(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new V(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new St(n)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(xe.fromString(t))}static fromName(t){return new W(xe.fromString(t).popFirst(5))}static empty(){return new W(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&xe.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return xe.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new xe(t.slice()))}}function DX(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new Pi(i,W.empty(),t)}function MX(e){return new Pi(e.readTime,e.key,-1)}class Pi{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Pi(Q.min(),W.empty(),-1)}static max(){return new Pi(Q.max(),W.empty(),-1)}}function LX(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=W.comparator(e.documentKey,t.documentKey),n!==0?n:de(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jX="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VX{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(e){if(e.code!==x.FAILED_PRECONDITION||e.message!==jX)throw e;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new A((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):A.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):A.reject(n)}static resolve(t){return new A((n,r)=>{n(t)})}static reject(t){return new A((n,r)=>{r(t)})}static waitFor(t){return new A((n,r)=>{let i=0,o=0,s=!1;t.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(t){let n=A.resolve(!1);for(const r of t)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(t,n){return new A((r,i)=>{const o=t.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(t[u]).next(c=>{s[u]=c,++a,a===o&&r(s)},c=>i(c))}})}static doWhile(t,n){return new A((r,i)=>{const o=()=>{t()===!0?n().next(()=>{o()},i):r()};o()})}}function uc(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}l_._e=-1;function kp(e){return e==null}function Qd(e){return e===0&&1/e==-1/0}function FX(e){return typeof e=="number"&&Number.isInteger(e)&&!Qd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xa(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function hO(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,n){this.comparator=t,this.root=n||_t.EMPTY}insert(t,n){return new Me(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(t){return new Me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,_t.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zc(this.root,t,this.comparator,!0)}}class Zc{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=n?r(t.key,n):1,n&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class _t{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r??_t.RED,this.left=i??_t.EMPTY,this.right=o??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,o){return new _t(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const t=this.left.check();if(t!==this.right.check())throw K();return t+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,n,r,i,o){return this}insert(t,n,r){return new _t(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.comparator=t,this.data=new Me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new gT(this.data.getIterator())}getIteratorFrom(t){return new gT(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof It)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new It(this.comparator);return n.data=t,n}}class gT{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this.fields=t,t.sort(St.comparator)}static empty(){return new Fn([])}unionWith(t){let n=new It(St.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Fn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Zs(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new pO("Invalid base64 string: "+o):o}}(t);return new Vt(n)}static fromUint8Array(t){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(t);return new Vt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return de(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const UX=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(e){if(Ee(!!e),typeof e=="string"){let t=0;const n=UX.exec(e);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ge(e.seconds),nanos:Ge(e.nanos)}}function Ge(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ao(e){return typeof e=="string"?Vt.fromBase64String(e):Vt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function c_(e){const t=e.mapValue.fields.__previous_value__;return u_(t)?c_(t):t}function Iu(e){const t=Ri(e.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zX{constructor(t,n,r,i,o,s,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Cu{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Cu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Cu&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Po(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?u_(e)?4:BX(e)?9007199254740991:10:K()}function gr(e,t){if(e===t)return!0;const n=Po(e);if(n!==Po(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Iu(e).isEqual(Iu(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Ri(i.timestampValue),a=Ri(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,o){return Ao(i.bytesValue).isEqual(Ao(o.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,o){return Ge(i.geoPointValue.latitude)===Ge(o.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(o.geoPointValue.longitude)}(e,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ge(i.integerValue)===Ge(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ge(i.doubleValue),a=Ge(o.doubleValue);return s===a?Qd(s)===Qd(a):isNaN(s)&&isNaN(a)}return!1}(e,t);case 9:return Zs(e.arrayValue.values||[],t.arrayValue.values||[],gr);case 10:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(mT(s)!==mT(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!gr(s[l],a[l])))return!1;return!0}(e,t);default:return K()}}function xu(e,t){return(e.values||[]).find(n=>gr(n,t))!==void 0}function ea(e,t){if(e===t)return 0;const n=Po(e),r=Po(t);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(e.booleanValue,t.booleanValue);case 2:return function(o,s){const a=Ge(o.integerValue||o.doubleValue),l=Ge(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return vT(e.timestampValue,t.timestampValue);case 4:return vT(Iu(e),Iu(t));case 5:return de(e.stringValue,t.stringValue);case 6:return function(o,s){const a=Ao(o),l=Ao(s);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=de(a[u],l[u]);if(c!==0)return c}return de(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(o,s){const a=de(Ge(o.latitude),Ge(s.latitude));return a!==0?a:de(Ge(o.longitude),Ge(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(o,s){const a=o.values||[],l=s.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ea(a[u],l[u]);if(c)return c}return de(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(o,s){if(o===ef.mapValue&&s===ef.mapValue)return 0;if(o===ef.mapValue)return 1;if(s===ef.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),u=s.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const d=de(l[f],c[f]);if(d!==0)return d;const p=ea(a[l[f]],u[c[f]]);if(p!==0)return p}return de(l.length,c.length)}(e.mapValue,t.mapValue);default:throw K()}}function vT(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return de(e,t);const n=Ri(e),r=Ri(t),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function ta(e){return gy(e)}function gy(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Ri(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ao(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return W.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=gy(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${gy(n.fields[s])}`;return i+"}"}(e.mapValue):K()}function yT(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function vy(e){return!!e&&"integerValue"in e}function f_(e){return!!e&&"arrayValue"in e}function _T(e){return!!e&&"nullValue"in e}function wT(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function qf(e){return!!e&&"mapValue"in e}function Pl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return xa(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Pl(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Pl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function BX(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.value=t}static empty(){return new Cn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!qf(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pl(n)}setAll(t){let n=St.emptyPath(),r={},i=[];t.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Pl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(t){const n=this.field(t.popLast());qf(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return gr(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];qf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){xa(n,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Cn(Pl(this.value))}}function mO(e){const t=[];return xa(e.fields,(n,r)=>{const i=new St([n]);if(qf(r)){const o=mO(r.mapValue).fields;if(o.length===0)t.push(i);else for(const s of o)t.push(i.child(s))}else t.push(i)}),new Fn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,n,r,i,o,s,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(t){return new $t(t,0,Q.min(),Q.min(),Q.min(),Cn.empty(),0)}static newFoundDocument(t,n,r,i){return new $t(t,1,n,Q.min(),r,i,0)}static newNoDocument(t,n){return new $t(t,2,n,Q.min(),Q.min(),Cn.empty(),0)}static newUnknownDocument(t,n){return new $t(t,3,n,Q.min(),Q.min(),Cn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,n){this.position=t,this.inclusive=n}}function ET(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(o.field.isKeyField()?r=W.comparator(W.fromName(s.referenceValue),n.key):r=ea(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ST(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!gr(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t,n="asc"){this.field=t,this.dir=n}}function WX(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{}class Xe extends gO{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new qX(t,n,r):n==="array-contains"?new YX(t,r):n==="in"?new QX(t,r):n==="not-in"?new XX(t,r):n==="array-contains-any"?new JX(t,r):new Xe(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new GX(t,r):new KX(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ea(n,this.value)):n!==null&&Po(this.value)===Po(n)&&this.matchesComparison(ea(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends gO{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Kn(t,n)}matches(t){return vO(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function vO(e){return e.op==="and"}function yO(e){return HX(e)&&vO(e)}function HX(e){for(const t of e.filters)if(t instanceof Kn)return!1;return!0}function yy(e){if(e instanceof Xe)return e.field.canonicalString()+e.op.toString()+ta(e.value);if(yO(e))return e.filters.map(t=>yy(t)).join(",");{const t=e.filters.map(n=>yy(n)).join(",");return`${e.op}(${t})`}}function _O(e,t){return e instanceof Xe?function(r,i){return i instanceof Xe&&r.op===i.op&&r.field.isEqual(i.field)&&gr(r.value,i.value)}(e,t):e instanceof Kn?function(r,i){return i instanceof Kn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&_O(s,i.filters[a]),!0):!1}(e,t):void K()}function wO(e){return e instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${ta(n.value)}`}(e):e instanceof Kn?function(n){return n.op.toString()+" {"+n.getFilters().map(wO).join(" ,")+"}"}(e):"Filter"}class qX extends Xe{constructor(t,n,r){super(t,n,r),this.key=W.fromName(r.referenceValue)}matches(t){const n=W.comparator(t.key,this.key);return this.matchesComparison(n)}}class GX extends Xe{constructor(t,n){super(t,"in",n),this.keys=EO("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class KX extends Xe{constructor(t,n){super(t,"not-in",n),this.keys=EO("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function EO(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class YX extends Xe{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return f_(n)&&xu(n.arrayValue,this.value)}}class QX extends Xe{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&xu(this.value.arrayValue,n)}}class XX extends Xe{constructor(t,n){super(t,"not-in",n)}matches(t){if(xu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!xu(this.value.arrayValue,n)}}class JX extends Xe{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!f_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZX{constructor(t,n=null,r=[],i=[],o=null,s=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ce=null}}function bT(e,t=null,n=[],r=[],i=null,o=null,s=null){return new ZX(e,t,n,r,i,o,s)}function d_(e){const t=Z(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>yy(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),kp(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ta(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ta(r)).join(",")),t.ce=n}return t.ce}function h_(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!WX(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!_O(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ST(e.startAt,t.startAt)&&ST(e.endAt,t.endAt)}function _y(e){return W.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function eJ(e,t,n,r,i,o,s,a){return new cc(e,t,n,r,i,o,s,a)}function p_(e){return new cc(e)}function TT(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function SO(e){return e.collectionGroup!==null}function Rl(e){const t=Z(e);if(t.le===null){t.le=[];const n=new Set;for(const o of t.explicitOrderBy)t.le.push(o),n.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new It(St.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||t.le.push(new Jd(o,r))}),n.has(St.keyField().canonicalString())||t.le.push(new Jd(St.keyField(),r))}return t.le}function pr(e){const t=Z(e);return t.he||(t.he=tJ(t,Rl(e))),t.he}function tJ(e,t){if(e.limitType==="F")return bT(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Jd(i.field,o)});const n=e.endAt?new Xd(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Xd(e.startAt.position,e.startAt.inclusive):null;return bT(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function wy(e,t){const n=e.filters.concat([t]);return new cc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ey(e,t,n){return new cc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ap(e,t){return h_(pr(e),pr(t))&&e.limitType===t.limitType}function bO(e){return`${d_(pr(e))}|lt:${e.limitType}`}function Zo(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>wO(i)).join(", ")}]`),kp(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ta(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ta(i)).join(",")),`Target(${r})`}(pr(e))}; limitType=${e.limitType})`}function Pp(e,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):W.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(e,t)&&function(r,i){for(const o of Rl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(s,a,l){const u=ET(s,a,l);return s.inclusive?u<=0:u<0}(r.startAt,Rl(r),i)||r.endAt&&!function(s,a,l){const u=ET(s,a,l);return s.inclusive?u>=0:u>0}(r.endAt,Rl(r),i))}(e,t)}function nJ(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function TO(e){return(t,n)=>{let r=!1;for(const i of Rl(e)){const o=rJ(i,t,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function rJ(e,t,n){const r=e.field.isKeyField()?W.comparator(t.key,n.key):function(o,s,a){const l=s.data.field(o),u=a.data.field(o);return l!==null&&u!==null?ea(l,u):K()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){xa(this.inner,(n,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return hO(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iJ=new Me(W.comparator);function jr(){return iJ}const IO=new Me(W.comparator);function cl(...e){let t=IO;for(const n of e)t=t.insert(n.key,n);return t}function CO(e){let t=IO;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function ao(){return Ol()}function xO(){return Ol()}function Ol(){return new ka(e=>e.toString(),(e,t)=>e.isEqual(t))}const oJ=new Me(W.comparator),sJ=new It(W.comparator);function ne(...e){let t=sJ;for(const n of e)t=t.add(n);return t}const aJ=new It(de);function lJ(){return aJ}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qd(t)?"-0":t}}function AO(e){return{integerValue:""+e}}function uJ(e,t){return FX(t)?AO(t):kO(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this._=void 0}}function cJ(e,t,n){return e instanceof Zd?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&u_(o)&&(o=c_(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,t):e instanceof ku?RO(e,t):e instanceof Au?OO(e,t):function(i,o){const s=PO(i,o),a=IT(s)+IT(i.Ie);return vy(s)&&vy(i.Ie)?AO(a):kO(i.serializer,a)}(e,t)}function fJ(e,t,n){return e instanceof ku?RO(e,t):e instanceof Au?OO(e,t):n}function PO(e,t){return e instanceof eh?function(r){return vy(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Zd extends Rp{}class ku extends Rp{constructor(t){super(),this.elements=t}}function RO(e,t){const n=NO(t);for(const r of e.elements)n.some(i=>gr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Au extends Rp{constructor(t){super(),this.elements=t}}function OO(e,t){let n=NO(t);for(const r of e.elements)n=n.filter(i=>!gr(i,r));return{arrayValue:{values:n}}}class eh extends Rp{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function IT(e){return Ge(e.integerValue||e.doubleValue)}function NO(e){return f_(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function dJ(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof ku&&i instanceof ku||r instanceof Au&&i instanceof Au?Zs(r.elements,i.elements,gr):r instanceof eh&&i instanceof eh?gr(r.Ie,i.Ie):r instanceof Zd&&i instanceof Zd}(e.transform,t.transform)}class hJ{constructor(t,n){this.version=t,this.transformResults=n}}class Ar{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ar}static exists(t){return new Ar(void 0,t)}static updateTime(t){return new Ar(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gf(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Op{}function $O(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new MO(e.key,Ar.none()):new fc(e.key,e.data,Ar.none());{const n=e.data,r=Cn.empty();let i=new It(St.comparator);for(let o of t.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Vo(e.key,r,new Fn(i.toArray()),Ar.none())}}function pJ(e,t,n){e instanceof fc?function(i,o,s){const a=i.value.clone(),l=xT(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Vo?function(i,o,s){if(!Gf(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=xT(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(DO(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(e,t,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function Nl(e,t,n,r){return e instanceof fc?function(o,s,a,l){if(!Gf(o.precondition,s))return a;const u=o.value.clone(),c=kT(o.fieldTransforms,l,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Vo?function(o,s,a,l){if(!Gf(o.precondition,s))return a;const u=kT(o.fieldTransforms,l,s),c=s.data;return c.setAll(DO(o)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(f=>f.field))}(e,t,n,r):function(o,s,a){return Gf(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(e,t,n)}function mJ(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),o=PO(r.transform,i||null);o!=null&&(n===null&&(n=Cn.empty()),n.set(r.field,o))}return n||null}function CT(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zs(r,i,(o,s)=>dJ(o,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class fc extends Op{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vo extends Op{constructor(t,n,r,i,o=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function DO(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function xT(e,t,n){const r=new Map;Ee(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,fJ(s,a,n[i]))}return r}function kT(e,t,n){const r=new Map;for(const i of e){const o=i.transform,s=n.data.field(i.field);r.set(i.field,cJ(o,s,t))}return r}class MO extends Op{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gJ extends Op{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vJ{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&pJ(o,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Nl(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Nl(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=xO();return this.mutations.forEach(i=>{const o=t.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=$O(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ne())}isEqual(t){return this.batchId===t.batchId&&Zs(this.mutations,t.mutations,(n,r)=>CT(n,r))&&Zs(this.baseMutations,t.baseMutations,(n,r)=>CT(n,r))}}class m_{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){Ee(t.mutations.length===r.length);let i=function(){return oJ}();const o=t.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new m_(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yJ{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _J{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,oe;function wJ(e){switch(e){default:return K();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function LO(e){if(e===void 0)return Lr("GRPC error has no .code"),x.UNKNOWN;switch(e){case qe.OK:return x.OK;case qe.CANCELLED:return x.CANCELLED;case qe.UNKNOWN:return x.UNKNOWN;case qe.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case qe.INTERNAL:return x.INTERNAL;case qe.UNAVAILABLE:return x.UNAVAILABLE;case qe.UNAUTHENTICATED:return x.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case qe.NOT_FOUND:return x.NOT_FOUND;case qe.ALREADY_EXISTS:return x.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return x.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case qe.ABORTED:return x.ABORTED;case qe.OUT_OF_RANGE:return x.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return x.UNIMPLEMENTED;case qe.DATA_LOSS:return x.DATA_LOSS;default:return K()}}(oe=qe||(qe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EJ(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SJ=new Rs([4294967295,4294967295],0);function AT(e){const t=EJ().encode(e),n=new IX;return n.update(t),new Uint8Array(n.digest())}function PT(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Rs([n,r],0),new Rs([i,o],0)]}class g_{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fl(`Invalid padding: ${n}`);if(r<0)throw new fl(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new fl(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new fl(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=Rs.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(Rs.fromNumber(r)));return i.compare(SJ)===1&&(i=new Rs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=AT(t),[r,i]=PT(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);if(!this.Ae(s))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),s=new g_(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(t){if(this.Te===0)return;const n=AT(t),[r,i]=PT(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);this.Re(s)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class fl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(t,n,r,i,o){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,dc.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Np(Q.min(),i,new Me(de),jr(),ne())}}class dc{constructor(t,n,r,i,o){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new dc(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class jO{constructor(t,n){this.targetId=t,this.fe=n}}class VO{constructor(t,n,r=Vt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class RT{constructor(){this.ge=0,this.pe=NT(),this.ye=Vt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=ne(),n=ne(),r=ne();return this.pe.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new dc(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=NT()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ee(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class bJ{constructor(t){this.Le=t,this.ke=new Map,this.qe=jr(),this.Qe=OT(),this.Ke=new Me(de)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:K()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const o=i.target;if(_y(o))if(r===0){const s=new W(o.path);this.We(n,s,$t.newNoDocument(s,Q.min()))}else Ee(r===1);else{const s=this.Ze(n);if(s!==r){const a=this.Xe(t),l=a?this.et(a,t,s):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=Ao(r).toUint8Array()}catch(l){if(l instanceof pO)return Js("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new g_(s,i,o)}catch(l){return Js(l instanceof fl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.nt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;t.mightContain(a)||(this.We(n,o,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((o,s)=>{const a=this.Ye(s);if(a){if(o.current&&_y(a.target)){const l=new W(a.target.path);this.qe.get(l)!==null||this.st(s,l)||this.We(s,l,$t.newNoDocument(l,t))}o.De&&(n.set(s,o.ve()),o.Fe())}});let r=ne();this.Qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.qe.forEach((o,s)=>s.setReadTime(t));const i=new Np(t,n,this.Ke,this.qe,r);return this.qe=jr(),this.Qe=OT(),this.Ke=new Me(de),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new RT,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new It(de),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||U("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new RT),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function OT(){return new Me(W.comparator)}function NT(){return new Me(W.comparator)}const TJ={asc:"ASCENDING",desc:"DESCENDING"},IJ={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CJ={and:"AND",or:"OR"};class xJ{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Sy(e,t){return e.useProto3Json||kp(t)?t:{value:t}}function th(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function FO(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function kJ(e,t){return th(e,t.toTimestamp())}function mr(e){return Ee(!!e),Q.fromTimestamp(function(n){const r=Ri(n);return new it(r.seconds,r.nanos)}(e))}function v_(e,t){return function(r){return new xe(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function UO(e){const t=xe.fromString(e);return Ee(HO(t)),t}function by(e,t){return v_(e.databaseId,t.path)}function cg(e,t){const n=UO(t);if(n.get(1)!==e.databaseId.projectId)throw new V(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new V(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new W(zO(n))}function Ty(e,t){return v_(e.databaseId,t)}function AJ(e){const t=UO(e);return t.length===4?xe.emptyPath():zO(t)}function Iy(e){return new xe(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function zO(e){return Ee(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function $T(e,t,n){return{name:by(e,t),fields:n.value.mapValue.fields}}function PJ(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(u,c){return u.useProto3Json?(Ee(c===void 0||typeof c=="string"),Vt.fromBase64String(c||"")):(Ee(c===void 0||c instanceof Uint8Array),Vt.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(u){const c=u.code===void 0?x.UNKNOWN:LO(u.code);return new V(c,u.message||"")}(s);n=new VO(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=cg(e,r.document.name),o=mr(r.document.updateTime),s=r.document.createTime?mr(r.document.createTime):Q.min(),a=new Cn({mapValue:{fields:r.document.fields}}),l=$t.newFoundDocument(i,o,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Kf(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=cg(e,r.document),o=r.readTime?mr(r.readTime):Q.min(),s=$t.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Kf([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=cg(e,r.document),o=r.removedTargetIds||[];n=new Kf([],o,i,null)}else{if(!("filter"in t))return K();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new _J(i,o),a=r.targetId;n=new jO(a,s)}}return n}function RJ(e,t){let n;if(t instanceof fc)n={update:$T(e,t.key,t.value)};else if(t instanceof MO)n={delete:by(e,t.key)};else if(t instanceof Vo)n={update:$T(e,t.key,t.data),updateMask:FJ(t.fieldMask)};else{if(!(t instanceof gJ))return K();n={verify:by(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof Zd)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ku)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Au)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof eh)return{fieldPath:s.field.canonicalString(),increment:a.Ie};throw K()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:kJ(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K()}(e,t.precondition)),n}function OJ(e,t){return e&&e.length>0?(Ee(t!==void 0),e.map(n=>function(i,o){let s=i.updateTime?mr(i.updateTime):mr(o);return s.isEqual(Q.min())&&(s=mr(o)),new hJ(s,i.transformResults||[])}(n,t))):[]}function NJ(e,t){return{documents:[Ty(e,t.path)]}}function $J(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Ty(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ty(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return WO(Kn.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:es(f.field),direction:LJ(f.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=Sy(e,t.limit);return s!==null&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function DJ(e){let t=AJ(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let o=[];n.where&&(o=function(f){const d=BO(f);return d instanceof Kn&&yO(d)?d.getFilters():[d]}(n.where));let s=[];n.orderBy&&(s=function(f){return f.map(d=>function(g){return new Jd(ts(g.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,kp(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(f){const d=!!f.before,p=f.values||[];return new Xd(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const d=!f.before,p=f.values||[];return new Xd(p,d)}(n.endAt)),eJ(t,i,s,o,a,"F",l,u)}function MJ(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function BO(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ts(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ts(n.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ts(n.unaryFilter.field);return Xe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ts(n.unaryFilter.field);return Xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(e):e.fieldFilter!==void 0?function(n){return Xe.create(ts(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Kn.create(n.compositeFilter.filters.map(r=>BO(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(e):K()}function LJ(e){return TJ[e]}function jJ(e){return IJ[e]}function VJ(e){return CJ[e]}function es(e){return{fieldPath:e.canonicalString()}}function ts(e){return St.fromServerFormat(e.fieldPath)}function WO(e){return e instanceof Xe?function(n){if(n.op==="=="){if(wT(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NAN"}};if(_T(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wT(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NAN"}};if(_T(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(n.field),op:jJ(n.op),value:n.value}}}(e):e instanceof Kn?function(n){const r=n.getFilters().map(i=>WO(i));return r.length===1?r[0]:{compositeFilter:{op:VJ(n.op),filters:r}}}(e):K()}function FJ(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function HO(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,n,r,i,o=Q.min(),s=Q.min(),a=Vt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new fi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UJ{constructor(t){this.ut=t}}function zJ(e){const t=DJ({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ey(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BJ{constructor(){this.on=new WJ}addToCollectionParentIndex(t,n){return this.on.add(n),A.resolve()}getCollectionParents(t,n){return A.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return A.resolve()}deleteFieldIndex(t,n){return A.resolve()}deleteAllFieldIndexes(t){return A.resolve()}createTargetIndexes(t,n){return A.resolve()}getDocumentsMatchingTarget(t,n){return A.resolve(null)}getIndexType(t,n){return A.resolve(0)}getFieldIndexes(t,n){return A.resolve([])}getNextCollectionGroupToUpdate(t){return A.resolve(null)}getMinOffset(t,n){return A.resolve(Pi.min())}getMinOffsetFromCollectionGroup(t,n){return A.resolve(Pi.min())}updateCollectionGroup(t,n,r){return A.resolve()}updateIndexEntries(t,n){return A.resolve()}}class WJ{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new It(xe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new It(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new na(0)}static Nn(){return new na(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HJ{constructor(){this.changes=new ka(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,$t.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qJ{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GJ{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Nl(r.mutation,i,Fn.empty(),it.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ne()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ne()){const i=ao();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(o=>{let s=cl();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(t,n){const r=ao();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ne()))}populateOverlays(t,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(t,n,r,i){let o=jr();const s=Ol(),a=function(){return Ol()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Vo)?o=o.insert(u.key,u):c!==void 0?(s.set(u.key,c.mutation.getFieldMask()),Nl(c.mutation,u,c.mutation.getFieldMask(),it.now())):s.set(u.key,Fn.empty())}),this.recalculateAndSaveOverlays(t,o).next(l=>(l.forEach((u,c)=>s.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new qJ(c,(f=s.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ol();let i=new Me((s,a)=>s-a),o=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Fn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=xO();c.forEach(d=>{if(!o.has(d)){const p=$O(n.get(d),r.get(d));p!==null&&f.set(d,p),o=o.add(d)}}),s.push(this.documentOverlayCache.saveOverlays(t,u,f))}return A.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(s){return W.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):SO(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-o.size):A.resolve(ao());let a=-1,l=o;return s.next(u=>A.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),o.get(c)?A.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,o)).next(()=>this.computeViews(t,l,u,ne())).next(c=>({batchId:a,changes:CO(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new W(n)).next(r=>{let i=cl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const o=n.collectionGroup;let s=cl();return this.indexManager.getCollectionParents(t,o).next(a=>A.forEach(a,l=>{const u=function(f,d){return new cc(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(c=>{c.forEach((f,d)=>{s=s.insert(f,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,o,i))).next(s=>{o.forEach((l,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,$t.newInvalidDocument(c)))});let a=cl();return s.forEach((l,u)=>{const c=o.get(l);c!==void 0&&Nl(c.mutation,u,Fn.empty(),it.now()),Pp(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KJ{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return A.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mr(i.createTime)}}(n)),A.resolve()}getNamedQuery(t,n){return A.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:zJ(i.bundledQuery),readTime:mr(i.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YJ{constructor(){this.overlays=new Me(W.comparator),this.lr=new Map}getOverlay(t,n){return A.resolve(this.overlays.get(n))}getOverlays(t,n){const r=ao();return A.forEach(n,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,o)=>{this.lt(t,n,o)}),A.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.lr.delete(r)),A.resolve()}getOverlaysForCollection(t,n,r){const i=ao(),o=n.length+1,s=new W(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let o=new Me((u,c)=>u-c);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=o.get(u.largestBatchId);c===null&&(c=ao(),o=o.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ao(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new yJ(n,r));let o=this.lr.get(n);o===void 0&&(o=ne(),this.lr.set(n,o)),this.lr.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.hr=new It(ct.Pr),this.Ir=new It(ct.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new ct(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new ct(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new W(new xe([])),r=new ct(n,t),i=new ct(n,t+1),o=[];return this.Ir.forEachInRange([r,i],s=>{this.dr(s),o.push(s.key)}),o}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new W(new xe([])),r=new ct(n,t),i=new ct(n,t+1);let o=ne();return this.Ir.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(t){const n=new ct(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ct{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return W.comparator(t.key,n.key)||de(t.gr,n.gr)}static Tr(t,n){return de(t.gr,n.gr)||W.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QJ{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new It(ct.Pr)}checkEmpty(t){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const o=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new vJ(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.yr=this.yr.add(new ct(a.key,o)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return A.resolve(s)}lookupMutationBatch(t,n){return A.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),o=i<0?0:i;return A.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),o=[];return this.yr.forEachInRange([r,i],s=>{const a=this.wr(s.gr);o.push(a)}),A.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new It(de);return n.forEach(i=>{const o=new ct(i,0),s=new ct(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([o,s],a=>{r=r.add(a.gr)})}),A.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let o=r;W.isDocumentKey(o)||(o=o.child(""));const s=new ct(new W(o),0);let a=new It(de);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},s),A.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Ee(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return A.forEach(n.mutations,i=>{const o=new ct(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new ct(n,0),i=this.yr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,A.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XJ{constructor(t){this.Cr=t,this.docs=function(){return new Me(W.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(t,n){let r=jr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():$t.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let o=jr();const s=n.path,a=new W(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||LX(MX(c),r)<=0||(i.has(c.key)||Pp(n,c))&&(o=o.insert(c.key,c.mutableCopy()))}return A.resolve(o)}getAllFromCollectionGroup(t,n,r,i){K()}vr(t,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new JJ(this)}getSize(t){return A.resolve(this.size)}}class JJ extends HJ{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),A.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZJ{constructor(t){this.persistence=t,this.Fr=new ka(n=>d_(n),h_),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Mr=0,this.Or=new y_,this.targetCount=0,this.Nr=na.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(t){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return A.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),A.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new na(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,A.resolve()}updateTargetData(t,n){return this.kn(n),A.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(t,n,r){let i=0;const o=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(s),o.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),A.waitFor(o).next(()=>i)}getTargetCount(t){return A.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return A.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),A.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(t,s))}),A.waitFor(o)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),A.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return A.resolve(r)}containsKey(t,n){return A.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ{constructor(t,n){this.Br={},this.overlays={},this.Lr=new l_(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new ZJ(this),this.indexManager=new BJ,this.remoteDocumentCache=function(i){return new XJ(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new UJ(n),this.Kr=new KJ(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new YJ,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new QJ(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){U("MemoryPersistence","Starting transaction:",t);const i=new tZ(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(o=>this.referenceDelegate.Ur(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Wr(t,n){return A.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class tZ extends VX{constructor(t){super(),this.currentSequenceNumber=t}}class __{constructor(t){this.persistence=t,this.Gr=new y_,this.zr=null}static jr(t){return new __(t)}get Hr(){if(this.zr)return this.zr;throw K()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),A.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),A.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(o=>this.Hr.add(o.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hr,r=>{const i=W.fromPath(r);return this.Jr(t,i).next(o=>{o||n.removeEntry(i,Q.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return A.or([()=>A.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=ne(),i=ne();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new w_(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rZ{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const o={result:null};return this.zi(t,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.ji(t,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new nZ;return this.Hi(t,n,s).next(a=>{if(o.result=a,this.$i)return this.Ji(t,n,s,a.size)})}).next(()=>o.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(Ja()<=ie.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Zo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),A.resolve()):(Ja()<=ie.DEBUG&&U("QueryEngine","Query:",Zo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Ja()<=ie.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Zo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pr(n))):A.resolve())}zi(t,n){if(TT(n))return A.resolve(null);let r=pr(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ey(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const s=ne(...o);return this.Gi.getDocuments(t,s).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,s,l.readTime)?this.zi(t,Ey(n,null,"F")):this.Xi(t,u,n,l)}))})))}ji(t,n,r,i){return TT(n)||i.isEqual(Q.min())?A.resolve(null):this.Gi.getDocuments(t,r).next(o=>{const s=this.Yi(n,o);return this.Zi(n,s,r,i)?A.resolve(null):(Ja()<=ie.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zo(n)),this.Xi(t,s,n,DX(i,-1)).next(a=>a))})}Yi(t,n){let r=new It(TO(t));return n.forEach((i,o)=>{Pp(t,o)&&(r=r.add(o))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const o=t.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Hi(t,n,r){return Ja()<=ie.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Zo(n)),this.Gi.getDocumentsMatchingQuery(t,n,Pi.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new Me(de),this.ns=new ka(o=>d_(o),h_),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new GJ(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function oZ(e,t,n,r){return new iZ(e,t,n,r)}async function qO(e,t){const n=Z(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=ne();for(const u of i){s.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of o){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:s,addedBatchIds:a}))})})}function sZ(e,t){const n=Z(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,d=f.keys();let p=A.resolve();return d.forEach(g=>{p=p.next(()=>c.getEntry(l,g)).next(m=>{const _=u.docVersions.get(g);Ee(_!==null),m.version.compareTo(_)<0&&(f.applyToRemoteDocument(m,u),m.isValidDocument()&&(m.setReadTime(u.commitVersion),c.addEntry(m)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,t,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function GO(e){const t=Z(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function aZ(e,t){const n=Z(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];t.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(n.qr.removeMatchingKeys(o,c.removedDocuments,f).next(()=>n.qr.addMatchingKeys(o,c.addedDocuments,f)));let p=d.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(f)!==null?p=p.withResumeToken(Vt.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(f,p),function(m,_,v){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,c)&&a.push(n.qr.updateTargetData(o,p))});let l=jr(),u=ne();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,c))}),a.push(lZ(o,s,t.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(Q.min())){const c=n.qr.getLastRemoteSnapshotVersion(o).next(f=>n.qr.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.ts=i,o))}function lZ(e,t,n){let r=ne(),i=ne();return n.forEach(o=>r=r.add(o)),t.getEntries(e,r).next(o=>{let s=jr();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Q.min())?(t.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),s=s.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:s,cs:i}})}function uZ(e,t){const n=Z(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function cZ(e,t){const n=Z(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(o=>o?(i=o,A.resolve(i)):n.qr.allocateTargetId(r).next(s=>(i=new fi(t,s,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function Cy(e,t,n){const r=Z(e),i=r.ts.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!uc(s))throw s;U("LocalStore",`Failed to update sequence numbers for target ${t}: ${s}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function DT(e,t,n){const r=Z(e);let i=Q.min(),o=ne();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,u,c){const f=Z(l),d=f.ns.get(c);return d!==void 0?A.resolve(f.ts.get(d)):f.qr.getTargetData(u,c)}(r,s,pr(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.es.getDocumentsMatchingQuery(s,t,n?i:Q.min(),n?o:ne())).next(a=>(fZ(r,nJ(t),a),{documents:a,ls:o})))}function fZ(e,t,n){let r=e.rs.get(t)||Q.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),e.rs.set(t,r)}class MT{constructor(){this.activeTargetIds=lJ()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class dZ{constructor(){this.eo=new MT,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new MT,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hZ{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tf=null;function fg(){return tf===null?tf=function(){return 268435456+Math.round(2147483648*Math.random())}():tf++,"0x"+tf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pZ={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mZ{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class gZ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${o}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get yo(){return!1}wo(n,r,i,o,s){const a=fg(),l=this.So(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,o,s),this.Do(n,l,u,i).then(c=>(U("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Js("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,o,s,a){return this.wo(n,r,i,o,s)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ca}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}So(n,r){const i=pZ[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const o=fg();return new Promise((s,a)=>{const l=new TX;l.setWithCredentials(!0),l.listenOnce(SX.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ug.NO_ERROR:const c=l.getResponseJson();U(Pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(c)),s(c);break;case ug.TIMEOUT:U(Pt,`RPC '${t}' ${o} timed out`),a(new V(x.DEADLINE_EXCEEDED,"Request time out"));break;case ug.HTTP_ERROR:const f=l.getStatus();if(U(Pt,`RPC '${t}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(v)>=0?v:x.UNKNOWN}(p.status);a(new V(g,p.message))}else a(new V(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(x.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(Pt,`RPC '${t}' ${o} completed.`)}});const u=JSON.stringify(i);U(Pt,`RPC '${t}' ${o} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(t,n,r){const i=fg(),o=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=wX(),a=EX(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=o.join("");U(Pt,`Creating RPC '${t}' stream ${i}: ${c}`,l);const f=s.createWebChannel(c,l);let d=!1,p=!1;const g=new mZ({co:_=>{p?U(Pt,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(d||(U(Pt,`Opening RPC '${t}' stream ${i} transport.`),f.open(),d=!0),U(Pt,`RPC '${t}' stream ${i} sending:`,_),f.send(_))},lo:()=>f.close()}),m=(_,v,h)=>{_.listen(v,y=>{try{h(y)}catch(E){setTimeout(()=>{throw E},0)}})};return m(f,Jc.EventType.OPEN,()=>{p||U(Pt,`RPC '${t}' stream ${i} transport opened.`)}),m(f,Jc.EventType.CLOSE,()=>{p||(p=!0,U(Pt,`RPC '${t}' stream ${i} transport closed`),g.Ro())}),m(f,Jc.EventType.ERROR,_=>{p||(p=!0,Js(Pt,`RPC '${t}' stream ${i} transport errored:`,_),g.Ro(new V(x.UNAVAILABLE,"The operation could not be completed")))}),m(f,Jc.EventType.MESSAGE,_=>{var v;if(!p){const h=_.data[0];Ee(!!h);const y=h,E=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(E){U(Pt,`RPC '${t}' stream ${i} received error:`,E);const T=E.status;let I=function(j){const O=qe[j];if(O!==void 0)return LO(O)}(T),b=E.message;I===void 0&&(I=x.INTERNAL,b="Unknown error status: "+T+" with message "+E.message),p=!0,g.Ro(new V(I,b)),f.close()}else U(Pt,`RPC '${t}' stream ${i} received:`,h),g.Vo(h)}}),m(a,bX.STAT_EVENT,_=>{_.stat===hT.PROXY?U(Pt,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===hT.NOPROXY&&U(Pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}function dg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(e){return new xJ(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(t,n,r=1e3,i=1.5,o=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=o,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(t,n,r,i,o,s,a,l){this.si=t,this.Ko=r,this.$o=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new KO(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Lr(n.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new V(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return U("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vZ extends YO{constructor(t,n,r,i,o,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=PJ(this.serializer,t),r=function(o){if(!("targetChange"in o))return Q.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?mr(s.readTime):Q.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=Iy(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=_y(l)?{documents:NJ(o,l)}:{query:$J(o,l)},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=FO(o,s.resumeToken);const u=Sy(o,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(Q.min())>0){a.readTime=th(o,s.snapshotVersion.toTimestamp());const u=Sy(o,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=MJ(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=Iy(this.serializer),n.removeTarget=t,this.e_(n)}}class yZ extends YO{constructor(t,n,r,i,o,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(Ee(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=OJ(t.writeResults,t.commitTime),r=mr(t.commitTime);return this.listener.I_(r,n)}return Ee(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Iy(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>RJ(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _Z extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new V(x.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.wo(t,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(x.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Co(t,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(x.UNKNOWN,o.toString())})}terminate(){this.d_=!0}}class wZ{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Lr(n),this.f_=!1):U("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EZ{constructor(t,n,r,i,o){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=o,this.F_.ro(s=>{r.enqueueAndForget(async()=>{Fo(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.C_.add(4),await hc(u),u.M_.set("Unknown"),u.C_.delete(4),await Dp(u)}(this))})}),this.M_=new wZ(r,i)}}async function Dp(e){if(Fo(e))for(const t of e.v_)await t(!0)}async function hc(e){for(const t of e.v_)await t(!1)}function QO(e,t){const n=Z(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),b_(n)?S_(n):Aa(n).Ho()&&E_(n,t))}function XO(e,t){const n=Z(e),r=Aa(n);n.D_.delete(t),r.Ho()&&JO(n,t),n.D_.size===0&&(r.Ho()?r.Zo():Fo(n)&&n.M_.set("Unknown"))}function E_(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Q.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Aa(e).u_(t)}function JO(e,t){e.x_.Oe(t),Aa(e).c_(t)}function S_(e){e.x_=new bJ({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Aa(e).start(),e.M_.g_()}function b_(e){return Fo(e)&&!Aa(e).jo()&&e.D_.size>0}function Fo(e){return Z(e).C_.size===0}function ZO(e){e.x_=void 0}async function SZ(e){e.D_.forEach((t,n)=>{E_(e,t)})}async function bZ(e,t){ZO(e),b_(e)?(e.M_.w_(t),S_(e)):e.M_.set("Unknown")}async function TZ(e,t,n){if(e.M_.set("Online"),t instanceof VO&&t.state===2&&t.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.D_.delete(a),i.x_.removeTarget(a))}(e,t)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await nh(e,r)}else if(t instanceof Kf?e.x_.$e(t):t instanceof jO?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(Q.min()))try{const r=await GO(e.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.x_.it(s);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=o.D_.get(u);c&&o.D_.set(u,c.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,u)=>{const c=o.D_.get(l);if(!c)return;o.D_.set(l,c.withResumeToken(Vt.EMPTY_BYTE_STRING,c.snapshotVersion)),JO(o,l);const f=new fi(c.target,l,u,c.sequenceNumber);E_(o,f)}),o.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await nh(e,r)}}async function nh(e,t,n){if(!uc(t))throw t;e.C_.add(1),await hc(e),e.M_.set("Offline"),n||(n=()=>GO(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await Dp(e)})}function e2(e,t){return t().catch(n=>nh(e,n,t))}async function Mp(e){const t=Z(e),n=Oi(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;IZ(t);)try{const i=await uZ(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,CZ(t,i)}catch(i){await nh(t,i)}t2(t)&&n2(t)}function IZ(e){return Fo(e)&&e.b_.length<10}function CZ(e,t){e.b_.push(t);const n=Oi(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function t2(e){return Fo(e)&&!Oi(e).jo()&&e.b_.length>0}function n2(e){Oi(e).start()}async function xZ(e){Oi(e).E_()}async function kZ(e){const t=Oi(e);for(const n of e.b_)t.P_(n.mutations)}async function AZ(e,t,n){const r=e.b_.shift(),i=m_.from(r,t,n);await e2(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Mp(e)}async function PZ(e,t){t&&Oi(e).h_&&await async function(r,i){if(function(s){return wJ(s)&&s!==x.ABORTED}(i.code)){const o=r.b_.shift();Oi(r).Yo(),await e2(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Mp(r)}}(e,t),t2(e)&&n2(e)}async function jT(e,t){const n=Z(e);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Fo(n);n.C_.add(3),await hc(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await Dp(n)}async function RZ(e,t){const n=Z(e);t?(n.C_.delete(2),await Dp(n)):t||(n.C_.add(2),await hc(n),n.M_.set("Unknown"))}function Aa(e){return e.O_||(e.O_=function(n,r,i){const o=Z(n);return o.A_(),new vZ(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(e.datastore,e.asyncQueue,{ho:SZ.bind(null,e),Io:bZ.bind(null,e),a_:TZ.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),b_(e)?S_(e):e.M_.set("Unknown")):(await e.O_.stop(),ZO(e))})),e.O_}function Oi(e){return e.N_||(e.N_=function(n,r,i){const o=Z(n);return o.A_(),new yZ(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(e.datastore,e.asyncQueue,{ho:xZ.bind(null,e),Io:PZ.bind(null,e),T_:kZ.bind(null,e),I_:AZ.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Mp(e)):(await e.N_.stop(),e.b_.length>0&&(U("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new T_(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function I_(e,t){if(Lr("AsyncQueue",`${t}: ${e}`),uc(e))return new V(x.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t){this.comparator=t?(n,r)=>t(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=cl(),this.sortedSet=new Me(this.comparator)}static emptySet(t){return new Os(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Os)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Os;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(){this.B_=new Me(W.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):K():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ra{constructor(t,n,r,i,o,s,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ra(t,n,Os.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ap(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OZ{constructor(){this.k_=void 0,this.listeners=[]}}class NZ{constructor(){this.queries=new ka(t=>bO(t),Ap),this.onlineState="Unknown",this.q_=new Set}}async function r2(e,t){const n=Z(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new OZ),i)try{o.k_=await n.onListen(r)}catch(s){const a=I_(s,`Initialization of query '${Zo(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,o),o.listeners.push(t),t.Q_(n.onlineState),o.k_&&t.K_(o.k_)&&C_(n)}async function i2(e,t){const n=Z(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.listeners.indexOf(t);s>=0&&(o.listeners.splice(s,1),i=o.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $Z(e,t){const n=Z(e);let r=!1;for(const i of t){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.listeners)a.K_(i)&&(r=!0);s.k_=i}}r&&C_(n)}function DZ(e,t,n){const r=Z(e),i=r.queries.get(t);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(t)}function C_(e){e.q_.forEach(t=>{t.next()})}class o2{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ra(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=ra.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(t){this.key=t}}class a2{constructor(t){this.key=t}}class MZ{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ne(),this.mutatedKeys=ne(),this._a=TO(t),this.aa=new Os(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new VT,i=n?n.aa:this.aa;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,f)=>{const d=i.get(c),p=Pp(this.query,f)?f:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;d&&p?d.data.isEqual(p.data)?g!==m&&(r.track({type:3,doc:p}),_=!0):this.ha(d,p)||(r.track({type:2,doc:p}),_=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),_=!0):d&&!p&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(p?(s=s.add(p),o=m?o.add(c):o.delete(c)):(s=s.delete(c),o=o.delete(c)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const c=this.query.limitType==="F"?s.last():s.first();s=s.delete(c.key),o=o.delete(c.key),r.track({type:1,doc:c})}return{aa:s,la:r,Zi:a,mutatedKeys:o}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const o=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((c,f)=>function(p,g){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return m(p)-m(g)}(c.type,f.type)||this._a(c.doc,f.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,s.length!==0||u?{snapshot:new ra(this.query,t.aa,o,s,t.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new VT,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=ne(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new a2(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new s2(r))}),n}da(t){this.ia=t.ls,this.oa=ne();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return ra.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class LZ{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class jZ{constructor(t){this.key=t,this.Ra=!1}}class VZ{constructor(t,n,r,i,o,s){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new ka(a=>bO(a),Ap),this.fa=new Map,this.ga=new Set,this.pa=new Me(W.comparator),this.ya=new Map,this.wa=new y_,this.Sa={},this.ba=new Map,this.Da=na.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function FZ(e,t){const n=QZ(e);let r,i;const o=n.ma.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Aa();else{const s=await cZ(n.localStore,pr(t)),a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await UZ(n,t,r,a==="current",s.resumeToken),n.isPrimaryClient&&QO(n.remoteStore,s)}return i}async function UZ(e,t,n,r,i){e.va=(f,d,p)=>async function(m,_,v,h){let y=_.view.ca(v);y.Zi&&(y=await DT(m.localStore,_.query,!1).then(({documents:b})=>_.view.ca(b,y)));const E=h&&h.targetChanges.get(_.targetId),T=h&&h.targetMismatches.get(_.targetId)!=null,I=_.view.applyChanges(y,m.isPrimaryClient,E,T);return UT(m,_.targetId,I.Ta),I.snapshot}(e,f,d,p);const o=await DT(e.localStore,t,!0),s=new MZ(t,o.ls),a=s.ca(o.documents),l=dc.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=s.applyChanges(a,e.isPrimaryClient,l);UT(e,n,u.Ta);const c=new LZ(t,n,s);return e.ma.set(t,c),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),u.snapshot}async function zZ(e,t){const n=Z(e),r=n.ma.get(t),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(o=>!Ap(o,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Cy(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),XO(n.remoteStore,r.targetId),xy(n,r.targetId)}).catch(lc)):(xy(n,r.targetId),await Cy(n.localStore,r.targetId,!0))}async function BZ(e,t,n){const r=XZ(e);try{const i=await function(s,a){const l=Z(s),u=it.now(),c=a.reduce((p,g)=>p.add(g.key),ne());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=jr(),m=ne();return l.ss.getEntries(p,c).next(_=>{g=_,g.forEach((v,h)=>{h.isValidDocument()||(m=m.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,g)).next(_=>{f=_;const v=[];for(const h of a){const y=mJ(h,f.get(h.key).overlayedDocument);y!=null&&v.push(new Vo(h.key,y,mO(y.value.mapValue),Ar.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,v,a)}).next(_=>{d=_;const v=_.applyToLocalDocumentSet(f,m);return l.documentOverlayCache.saveOverlays(p,_.batchId,v)})}).then(()=>({batchId:d.batchId,changes:CO(f)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let u=s.Sa[s.currentUser.toKey()];u||(u=new Me(de)),u=u.insert(a,l),s.Sa[s.currentUser.toKey()]=u}(r,i.batchId,n),await pc(r,i.changes),await Mp(r.remoteStore)}catch(i){const o=I_(i,"Failed to persist write");n.reject(o)}}async function l2(e,t){const n=Z(e);try{const r=await aZ(n.localStore,t);t.targetChanges.forEach((i,o)=>{const s=n.ya.get(o);s&&(Ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.Ra=!0:i.modifiedDocuments.size>0?Ee(s.Ra):i.removedDocuments.size>0&&(Ee(s.Ra),s.Ra=!1))}),await pc(n,r,t)}catch(r){await lc(r)}}function FT(e,t,n){const r=Z(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((o,s)=>{const a=s.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=Z(s);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const d of f.listeners)d.Q_(a)&&(u=!0)}),u&&C_(l)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function WZ(e,t,n){const r=Z(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ya.get(t),o=i&&i.key;if(o){let s=new Me(W.comparator);s=s.insert(o,$t.newNoDocument(o,Q.min()));const a=ne().add(o),l=new Np(Q.min(),new Map,new Me(de),s,a);await l2(r,l),r.pa=r.pa.remove(o),r.ya.delete(t),x_(r)}else await Cy(r.localStore,t,!1).then(()=>xy(r,t,n)).catch(lc)}async function HZ(e,t){const n=Z(e),r=t.batch.batchId;try{const i=await sZ(n.localStore,t);c2(n,r,null),u2(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pc(n,i)}catch(i){await lc(i)}}async function qZ(e,t,n){const r=Z(e);try{const i=await function(s,a){const l=Z(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(Ee(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);c2(r,t,n),u2(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await pc(r,i)}catch(i){await lc(i)}}function u2(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function c2(e,t,n){const r=Z(e);let i=r.Sa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(n?o.reject(n):o.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function xy(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||f2(e,r)})}function f2(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(XO(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),x_(e))}function UT(e,t,n){for(const r of n)r instanceof s2?(e.wa.addReference(r.key,t),GZ(e,r)):r instanceof a2?(U("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||f2(e,r.key)):K()}function GZ(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(U("SyncEngine","New document in limbo: "+n),e.ga.add(r),x_(e))}function x_(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new W(xe.fromString(t)),r=e.Da.next();e.ya.set(r,new jZ(n)),e.pa=e.pa.insert(n,r),QO(e.remoteStore,new fi(pr(p_(n.path)),r,"TargetPurposeLimboResolution",l_._e))}}async function pc(e,t,n){const r=Z(e),i=[],o=[],s=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{s.push(r.va(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=w_.Qi(l.targetId,u);o.push(c)}}))}),await Promise.all(s),r.Va.a_(i),await async function(l,u){const c=Z(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>A.forEach(u,d=>A.forEach(d.ki,p=>c.persistence.referenceDelegate.addReference(f,d.targetId,p)).next(()=>A.forEach(d.qi,p=>c.persistence.referenceDelegate.removeReference(f,d.targetId,p)))))}catch(f){if(!uc(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const p=c.ts.get(d),g=p.snapshotVersion,m=p.withLastLimboFreeSnapshotVersion(g);c.ts=c.ts.insert(d,m)}}}(r.localStore,o))}async function KZ(e,t){const n=Z(e);if(!n.currentUser.isEqual(t)){U("SyncEngine","User change. New user:",t.toKey());const r=await qO(n.localStore,t);n.currentUser=t,function(o,s){o.ba.forEach(a=>{a.forEach(l=>{l.reject(new V(x.CANCELLED,s))})}),o.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await pc(n,r._s)}}function YZ(e,t){const n=Z(e),r=n.ya.get(t);if(r&&r.Ra)return ne().add(r.key);{let i=ne();const o=n.fa.get(t);if(!o)return i;for(const s of o){const a=n.ma.get(s);i=i.unionWith(a.view.ua)}return i}}function QZ(e){const t=Z(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=l2.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=YZ.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=WZ.bind(null,t),t.Va.a_=$Z.bind(null,t.eventManager),t.Va.Fa=DZ.bind(null,t.eventManager),t}function XZ(e){const t=Z(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=HZ.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qZ.bind(null,t),t}class zT{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=$p(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return oZ(this.persistence,new rZ,t.initialUser,this.serializer)}createPersistence(t){return new eZ(__.jr,this.serializer)}createSharedClientState(t){return new dZ}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JZ{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>FT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KZ.bind(null,this.syncEngine),await RZ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new NZ}()}createDatastore(t){const n=$p(t.databaseInfo.databaseId),r=function(o){return new gZ(o)}(t.databaseInfo);return function(o,s,a,l){return new _Z(o,s,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,o,s,a){return new EZ(r,i,o,s,a)}(this.localStore,this.datastore,t.asyncQueue,n=>FT(this.syncEngine,n,0),function(){return LT.D()?new LT:new hZ}())}createSyncEngine(t,n){return function(i,o,s,a,l,u,c){const f=new VZ(i,o,s,a,l,u);return c&&(f.Ca=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);U("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await hc(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Lr("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZZ{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ot.UNAUTHENTICATED,this.clientId=dO.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=I_(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function hg(e,t){e.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qO(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function BT(e,t){e.asyncQueue.verifyOperationInProgress();const n=await tee(e);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>jT(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,o)=>jT(t.remoteStore,o)),e._onlineComponents=t}function eee(e){return e.name==="FirebaseError"?e.code===x.FAILED_PRECONDITION||e.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function tee(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await hg(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!eee(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await hg(e,new zT)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await hg(e,new zT);return e._offlineComponents}async function h2(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await BT(e,e._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await BT(e,new JZ))),e._onlineComponents}function nee(e){return h2(e).then(t=>t.syncEngine)}async function p2(e){const t=await h2(e),n=t.eventManager;return n.onListen=FZ.bind(null,t.syncEngine),n.onUnlisten=zZ.bind(null,t.syncEngine),n}function ree(e,t,n={}){const r=new kr;return e.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const c=new d2({next:d=>{s.enqueueAndForget(()=>i2(o,f));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new V(x.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new V(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new o2(p_(a.path),c,{includeMetadataChanges:!0,J_:!0});return r2(o,f)}(await p2(e),e.asyncQueue,t,n,r)),r.promise}function iee(e,t,n={}){const r=new kr;return e.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const c=new d2({next:d=>{s.enqueueAndForget(()=>i2(o,f)),d.fromCache&&l.source==="server"?u.reject(new V(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new o2(a,c,{includeMetadataChanges:!0,J_:!0});return r2(o,f)}(await p2(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(e,t,n){if(!n)throw new V(x.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function oee(e,t,n,r){if(t===!0&&r===!0)throw new V(x.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function HT(e){if(!W.isDocumentKey(e))throw new V(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function qT(e){if(W.isDocumentKey(e))throw new V(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Lp(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":K()}function Ro(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new V(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lp(e);throw new V(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new V(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new V(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}oee("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=m2((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new V(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new V(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new V(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class jp{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new GT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new V(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new GT(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new CX;switch(r.type){case"firstParty":return new PX(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=WT.get(n);r&&(U("ComponentProvider","Removing Datastore"),WT.delete(n),r.terminate())}(this),Promise.resolve()}}function see(e,t,n,r={}){var i;const o=(e=Ro(e,jp))._getSettings(),s=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ot.MOCK_USER;else{a=Mq(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new V(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ot(u)}e._authCredentials=new xX(new fO(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Pa(this.firestore,t,this._query)}}class tn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new tn(this.firestore,t,this._key)}}class Ci extends Pa{constructor(t,n,r){super(t,n,p_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tn(this.firestore,null,new W(t))}withConverter(t){return new Ci(this.firestore,t,this._path)}}function v2(e,t,...n){if(e=Ht(e),g2("collection","path",t),e instanceof jp){const r=xe.fromString(t,...n);return qT(r),new Ci(e,null,r)}{if(!(e instanceof tn||e instanceof Ci))throw new V(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(xe.fromString(t,...n));return qT(r),new Ci(e.firestore,null,r)}}function aee(e,t,...n){if(e=Ht(e),arguments.length===1&&(t=dO.newId()),g2("doc","path",t),e instanceof jp){const r=xe.fromString(t,...n);return HT(r),new tn(e,null,new W(r))}{if(!(e instanceof tn||e instanceof Ci))throw new V(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(xe.fromString(t,...n));return HT(r),new tn(e.firestore,e instanceof Ci?e.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lee{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new KO(this,"async_queue_retry"),this.iu=()=>{const n=dg();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=dg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=dg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new kr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!uc(t))throw t;U("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Lr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=T_.createAndSchedule(this,t,n,r,o=>this.au(o));return this.Xa.push(i),i}su(){this.eu&&K()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class Vp extends jp{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new lee}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||y2(this),this._firestoreClient.terminate()}}function uee(e,t){const n=typeof e=="object"?e:xP(),r=typeof e=="string"?e:t||"(default)",i=A1(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=$q("firestore");o&&see(i,...o)}return i}function k_(e){return e._firestoreClient||y2(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function y2(e){var t,n,r;const i=e._freezeSettings(),o=function(a,l,u,c){return new zX(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,m2(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new ZZ(e._authCredentials,e._appCheckCredentials,e._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ia(Vt.fromBase64String(t))}catch(n){throw new V(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ia(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new V(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new V(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new V(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return de(this._lat,t._lat)||de(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cee=/^__.*__$/;class fee{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Vo(t,this.data,this.fieldMask,n,this.fieldTransforms):new fc(t,this.data,n,this.fieldTransforms)}}function w2(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class R_{constructor(t,n,r,i,o,s){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Pu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new R_(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return rh(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(w2(this.Iu)&&cee.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class dee{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||$p(t)}pu(t,n,r,i=!1){return new R_({Iu:t,methodName:n,gu:r,path:St.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function E2(e){const t=e._freezeSettings(),n=$p(e._databaseId);return new dee(e._databaseId,!!t.ignoreUndefinedProperties,n)}function hee(e,t,n,r,i,o={}){const s=e.pu(o.merge||o.mergeFields?2:0,t,n,i);T2("Data must be an object, but it was:",s,r);const a=S2(r,s);let l,u;if(o.merge)l=new Fn(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const c=[];for(const f of o.mergeFields){const d=mee(t,f,n);if(!s.contains(d))throw new V(x.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vee(c,d)||c.push(d)}l=new Fn(c),u=s.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=s.fieldTransforms;return new fee(new Cn(a),l,u)}function pee(e,t,n,r=!1){return O_(n,e.pu(r?4:3,t))}function O_(e,t){if(b2(e=Ht(e)))return T2("Unsupported field value:",t,e),S2(e,t);if(e instanceof _2)return function(r,i){if(!w2(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=O_(a,i.Vu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(e,t)}return function(r,i){if((r=Ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uJ(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:th(i.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:th(i.serializer,o)}}if(r instanceof P_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ia)return{bytesValue:FO(i.serializer,r._byteString)};if(r instanceof tn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:v_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Lp(r)}`)}(e,t)}function S2(e,t){const n={};return hO(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xa(e,(r,i)=>{const o=O_(i,t.Eu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function b2(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof it||e instanceof P_||e instanceof ia||e instanceof tn||e instanceof _2)}function T2(e,t,n){if(!b2(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Lp(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function mee(e,t,n){if((t=Ht(t))instanceof A_)return t._internalPath;if(typeof t=="string")return I2(e,t);throw rh("Field path arguments must be of type string or ",e,!1,void 0,n)}const gee=new RegExp("[~\\*/\\[\\]]");function I2(e,t,n){if(t.search(gee)>=0)throw rh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new A_(...t.split("."))._internalPath}catch{throw rh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function rh(e,t,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new V(x.INVALID_ARGUMENT,a+e+l)}function vee(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(t,n,r,i,o){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new yee(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(x2("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yee extends C2{data(){return super.data()}}function x2(e,t){return typeof t=="string"?I2(e,t):t instanceof A_?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _ee(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new V(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class N_{}class wee extends N_{}function Eee(e,t,...n){let r=[];t instanceof N_&&r.push(t),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof D_).length,a=o.filter(l=>l instanceof $_).length;if(s>1||s>0&&a>0)throw new V(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class $_ extends wee{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new $_(t,n,r)}_apply(t){const n=this._parse(t);return k2(t._query,n),new Pa(t.firestore,t.converter,wy(t._query,n))}_parse(t){const n=E2(t.firestore);return function(o,s,a,l,u,c,f){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new V(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){YT(f,c);const p=[];for(const g of f)p.push(KT(l,o,g));d={arrayValue:{values:p}}}else d=KT(l,o,f)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||YT(f,c),d=pee(a,s,f,c==="in"||c==="not-in");return Xe.create(u,c,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class D_ extends N_{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new D_(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)k2(s,l),s=wy(s,l)}(t._query,n),new Pa(t.firestore,t.converter,wy(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function KT(e,t,n){if(typeof(n=Ht(n))=="string"){if(n==="")throw new V(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!SO(t)&&n.indexOf("/")!==-1)throw new V(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(xe.fromString(n));if(!W.isDocumentKey(r))throw new V(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yT(e,new W(r))}if(n instanceof tn)return yT(e,n._key);throw new V(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lp(n)}.`)}function YT(e,t){if(!Array.isArray(e)||e.length===0)throw new V(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function k2(e,t){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new V(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new V(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class See{convertValue(t,n="none"){switch(Po(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ge(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ao(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw K()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return xa(t,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(t){return new P_(Ge(t.latitude),Ge(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=c_(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Iu(t));default:return null}}convertTimestamp(t){const n=Ri(t);return new it(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=xe.fromString(t);Ee(HO(r));const i=new Cu(r.get(1),r.get(3)),o=new W(r.popFirst(5));return i.isEqual(n)||Lr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bee(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class A2 extends C2{constructor(t,n,r,i,o,s){super(t,n,r,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Yf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(x2("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yf extends A2{data(t={}){return super.data(t)}}class Tee{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new dl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Yf(this._firestore,this._userDataWriter,r.key,r,new dl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new Yf(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new Yf(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),c=s.indexOf(a.doc.key)),{type:Iee(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Iee(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cee(e){e=Ro(e,tn);const t=Ro(e.firestore,Vp);return ree(k_(t),e._key).then(n=>Pee(t,e,n))}class P2 extends See{constructor(t){super(),this.firestore=t}convertBytes(t){return new ia(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new tn(this.firestore,null,n)}}function xee(e){e=Ro(e,Pa);const t=Ro(e.firestore,Vp),n=k_(t),r=new P2(t);return _ee(e._query),iee(n,e._query).then(i=>new Tee(t,r,e,i))}function kee(e,t,n){e=Ro(e,tn);const r=Ro(e.firestore,Vp),i=bee(e.converter,t,n);return Aee(r,[hee(E2(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Ar.none())])}function Aee(e,t){return function(r,i){const o=new kr;return r.asyncQueue.enqueueAndForget(async()=>BZ(await nee(r),i,o)),o.promise}(k_(e),t)}function Pee(e,t,n){const r=n.docs.get(t._key),i=new P2(e);return new A2(e,i,t._key,r,new dl(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){Ca=i})(Sa),Qs(new To("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new Vp(new kX(r.getProvider("auth-internal")),new OX(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cu(u.options.projectId,c)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Ii(pT,"4.4.0",t),Ii(pT,"4.4.0","esm2017")})();const Ree={apiKey:"AIzaSyAyH75EeQs-whvwD_aO6mKbcaLNbAAUQe8",authDomain:"sandra-sanchez-art.firebaseapp.com",projectId:"sandra-sanchez-art",storageBucket:"sandra-sanchez-art.appspot.com",messagingSenderId:"490365144817",appId:"1:490365144817:web:f1cfc1439ab5f515d4e350",measurementId:"G-FVK28QXSKK"},R2=CP(Ree),O2=uee(R2),N2=new Er;N2.setCustomParameters({prompt:"select_account"});const mc=_Q(R2),Oee=()=>kY(mc,N2),M_=async(e,t={})=>{const n=v2(O2,"users"),r=aee(n,e.uid),i=await Cee(r);if(!i.exists()){const{email:o,displayName:s}=e,a=new Date;try{await kee(r,{displayName:s,email:o,createdAt:a,...t})}catch(l){console.log(`Whoops! Looks like there was an error creating the user: ${l}`)}}return console.log(r),console.log(i),console.log(i.data()),r},Nee=async()=>{const e=v2(O2,"categories"),t=Eee(e);return(await xee(t)).docs.reduce((i,o)=>{const{categoryName:s,items:a}=o.data();return i[s.toLowerCase()]=a,i},{})},$ee=async(e,t)=>{if(!(!e||!t))return await rY(mc,e,t)},Dee=async(e,t)=>{if(!(!e||!t))return await nY(mc,e,t)},Mee=e=>sY(mc,e),Lee=()=>aY(mc),gc=S.createContext({currentUser:null,setCurrentUser:()=>null}),jee=({children:e})=>{const[t,n]=S.useState(null),r={currentUser:t,setCurrentUser:n};return S.useEffect(()=>Mee(o=>{o&&M_(o),n(o)}),[]),w.jsx(gc.Provider,{value:r,children:e})},Vee=(e,t,n,r,i,o)=>e.find(a=>a.id===t.id&&a.selectedSize===n)?e.map(a=>a.id===t.id&&a.selectedSize===n?{...a,quantity:a.quantity+i}:a):[...e,{...t,quantity:i,selectedSize:n,itemPrice:r,key:o}],Fee=(e,t,n,r)=>e.find(o=>o.id===t.id&&o.selectedSize===n&&o.key===r)?e.map(o=>o.id===t.id&&o.selectedSize===n?{...o,quantity:o.quantity+1}:o):[...e,{...t,quantity:1}],Uee=(e,t,n,r)=>{const i=e.find(o=>o.id===t.id&&o.selectedSize===n&&o.key===t.key);return i&&i.quantity===1?e.filter(o=>o.key!==r):e.map(o=>o.key===r?{...o,quantity:o.quantity-1}:o)},zee=(e,t)=>e.filter(n=>n.id!==t.id),Uo=S.createContext({cartItems:[],setCartItems:()=>{},addProductAndQuantityToCart:()=>{},addOneItemToCart:()=>{},removeOneItemFromCart:()=>{},clearItemFromCart:()=>{},cartTotal:0,cartCount:0,cartItemIsAdded:!1,setCartItemIsAdded:()=>{},isCartOpen:!1,setIsCartOpen:()=>{}}),Bee=({children:e})=>{const[t,n]=S.useState([]),[r,i]=S.useState(!1),[o,s]=S.useState(0),[a,l]=S.useState(0),[u,c]=S.useState(!1),f=(_,v,h,y,E)=>n(Vee(t,_,v,h,y,E)),d=(_,v,h)=>n(Fee(t,_,v,h)),p=(_,v,h)=>n(Uee(t,_,v,h)),g=_=>n(zee(t,_));S.useEffect(()=>{const _=t.reduce((v,h)=>v+h.quantity,0);l(_)},[t]),S.useEffect(()=>{const _=t.reduce((v,h)=>v+h.itemPrice*h.quantity,0);s(_)},[t]);const m={cartItems:t,setCartItems:n,isCartOpen:r,setIsCartOpen:i,cartTotal:o,setCartTotal:s,cartCount:a,setCartCount:l,addProductAndQuantityToCart:f,addOneItemToCart:d,removeOneItemFromCart:p,clearItemFromCart:g,cartItemIsAdded:u,setCartItemIsAdded:c};return w.jsx(Uo.Provider,{value:m,children:e})},Wee=k.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 380px;
    position: absolute;
    top: 90px;
    right: 40px;
    border: 1px solid black;
    background-color: white;
    z-index: 5;
    padding: 20px;

`,Hee=k.div`
    width: 100%
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    font-family: "Architects Daughter", cursive;
    font-weight: bold;

    span {
        margin: 50px auto;
    }

    // Note to self: removed these to allow full scrolling. If the contents inside this container are taller than the container itself, then setting justify-content and align items to center will indeed center them, but the browser will interpret the centered content as static and will not allow scrolling beyond the initial view
    // justify-content: center; remove to allow full scrolling
    // align-items: center; // remove to allow full scrolling
`,qee=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20px;
    margin: 50px auto;

    h3 {
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
    }

    button {
        position: relative;
        bottom: 20px;
        border-radius: 5px;
        font-size: 18px;
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
    }
`,Gee=k.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid black;
`,Kee=k.div`

    img {
        width: 100px;
        height: 150px;
        object-fit: cover;
    }
`,Yee=k.div`
    display: flex: 
    flex-direction: column;
`,$2=k.button`
    cursor: pointer;
    color: rgb(255, 51, 153);
    background: white;
    border: 1px solid black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    transition: 0.1s ease-out;

    &:hover {
    background: black;
    }

    &:active {
        background-color: black;
        color: #fff;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }
`,Qee=k($2)`
    background: black;

    &:hover {
        color: white;
    }

    &:active {
        background-color: black;
        color: rgb(255, 51, 153);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }
`,ot={default:"default",google:"google"},Xee=(e=ot.default)=>({[ot.default]:$2,[ot.google]:Qee})[e],Yn=({buttonType:e,...t})=>{const n=Xee(e);return w.jsx(n,{...t})},Jee=k.div`
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;

    h2 {
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
        font-size: 25px;
    }

    
`,Zee=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    overflow: hidden;

    img {
        width: 500px;
        height: 600px;
        object-fit: cover;
        border-radius: 10px;

    }
`,ete=k.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    border-bottom: 1px solid grey;

    h3 {
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
        font-size: 20px;
        border-bottom: 1px solid grey;
        padding: 10px;
    }
`,tte=k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
`,nte=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    label {
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
        font-size: 15px;
        margin-bottom: 10px;
    }

    select {
        height: 35px;
        width: 80px;
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
        font-size: 15px;
        background-color: rgb(204, 204, 204);

        option {
            background-color: white;
        }
        
    }
`,rte=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    label {
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
        font-size: 15px;
        margin-bottom: 10px;
    }
`,L_=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,j_=k.input`
    width: 20px;
    height: 30px;
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
    font-size: 20px;
    background-color: rgb(204,204,204);

    &:focus: {
        background-color: white;
    }
`,oa=k(Yn)`
    border-radius: 0px;
    padding: 0;
    margin: 0;
    height: 35px;
    width: 25px;
    font-size: 25px;
    border-radius: 2px;
    background-color: rgb(204, 204, 204);
`,ite=k(Yn)`
    border-radius: 5px;
    font-size: 20px;
    position: relative;
    top: 12px;
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
    font-size: 20px;
`,ote=k.div`
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
    font-size: 18px;
`,ste=({cartItem:e})=>{const{name:t,imageUrl:n,selectedSize:r,quantity:i,id:o,key:s}=e,{addOneItemToCart:a,removeOneItemFromCart:l,cartItems:u,setCartItems:c}=S.useContext(Uo),f=()=>{a(e,r,s)},d=g=>{g.stopPropagation(),l(e,r,s)},p=g=>{const m=u.find(v=>v.key===s&&v.id===o&&v.selectedSize===r),_=g.target.value;if(/^\d*$/.test(_)&&m){const v=u.map(h=>h.key===s&&h.id===o&&h.selectedSize===r?{...h,quantity:_===""?"":parseInt(_,10)}:h);c(v)}};return w.jsxs(Gee,{children:[w.jsx(Kee,{children:w.jsx("img",{src:n,alt:t})}),w.jsxs(Yee,{children:[w.jsx("h3",{children:t}),w.jsx("span",{children:r})]}),w.jsxs(L_,{children:[w.jsx(oa,{buttonType:ot.default,onClick:d,children:"-"}),w.jsx(j_,{value:i,onChange:p}),w.jsx(oa,{buttonType:ot.default,onClick:f,children:"+"})]})]})},ate=S.forwardRef((e,t)=>{const n=Vi(),{cartItems:r,cartTotal:i}=S.useContext(Uo);console.log(r);const o=()=>n("/cart-summary");return w.jsxs(Wee,{ref:t,children:[w.jsx(Hee,{children:r.length?r.map(s=>w.jsx(ste,{cartItem:s},s.key)):w.jsx("span",{children:"Your cart is currently empty!"})}),w.jsxs(qee,{children:[w.jsxs("h3",{children:["Sub-total: $",i," "]}),w.jsx(Yn,{buttonType:ot.google,onClick:o,children:"View Cart Summary"})]})]})}),lte=()=>{const e=S.useRef(null),t=Vi(),{currentUser:n}=S.useContext(gc),{cartCount:r,cartItemIsAdded:i}=S.useContext(Uo),[o,s]=S.useState(!1),[a,l]=S.useState(!1),[u,c]=S.useState(!1),f=()=>t("/authentication"),d=()=>{s(!0),l(!1)},p=()=>s(!1),g=E=>{E.stopPropagation(),s(!o),l(!1)},m=()=>{l(!0),s(!1)},_=()=>l(!1),v=E=>{E.stopPropagation(),l(!a),s(!1)},h=()=>{s(!1),l(!1)},y=E=>{E.stopPropagation(),c(!u),l(!1)};return S.useEffect(()=>{const E=T=>{T.target.id!=="mentoring"&&s(!1)};return document.body.addEventListener("click",E),()=>document.body.removeEventListener("click",E)},[]),S.useEffect(()=>{const E=T=>{T.target.id!=="shop"&&l(!1)};return document.body.addEventListener("click",E),()=>document.body.removeEventListener("click",E)},[]),S.useEffect(()=>{const E=T=>{e.current&&!e.current.contains(T.target)&&c(!1)};return document.body.addEventListener("click",E),()=>document.body.removeEventListener("click",E)},[u]),w.jsxs(S.Fragment,{children:[w.jsxs(_q,{children:[w.jsx(vq,{to:"/",children:w.jsx(yq,{src:Cq})}),w.jsx("h1",{children:"Sandra Sanchez"}),w.jsxs(wq,{children:[w.jsx(Ka,{onMouseEnter:h,children:"About"}),w.jsxs(Cb,{id:"mentoring","data-toggle":!0,children:[w.jsx(Ka,{"data-dropdown-button":!0,onClick:g,onMouseEnter:d,children:"Mentoring"}),w.jsxs(Ib,{open:o,onMouseLeave:p,children:[w.jsx(Ya,{to:"",children:"Private Lessons"}),w.jsx(Ya,{to:"",children:"Group Classes"})]})]}),w.jsxs(Cb,{id:"shop","data-toggle":!0,children:[w.jsx(Ka,{"data-dropdown-button":!0,onClick:v,onMouseEnter:m,children:"Shop"}),w.jsxs(Ib,{open:a,onMouseLeave:_,children:[w.jsx(Ya,{to:"shop/inks",children:"Inks"}),w.jsx(Ya,{to:"shop/illustrations",children:"Illustrations"}),w.jsx(Ya,{to:"shop/fine art",children:"Fine Art"})]})]}),n?w.jsx(Ka,{onClick:Lee,onMouseEnter:h,children:"Sign Out"}):w.jsx(Ka,{onMouseEnter:h,onClick:f,children:"Sign In"}),w.jsxs(Eq,{onClick:y,onMouseEnter:h,$bounce:+i,children:[i&&w.jsx(Iq,{particleSize:6,particleCount:100}),w.jsx(Sq,{fontSize:"large"}),w.jsx(bq,{children:r})]})]}),u&&w.jsx(ate,{ref:e}),i&&w.jsx(Tq,{$show:+i,children:w.jsx("h4",{children:"Item successfully added to cart!"})})]}),w.jsx(a4,{})]})},ute=k.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`,D2=k.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({$imageurl:e})=>`url(${e})`};
    border-radius: 10px;
    opacity: 0.9;
`,M2=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    position: absolute;
    top: 500px;
    

    h2 {
        text-transform: uppercase;
        font-weight: bold;
        color: #fff;
        // text-decoration: underline;
    }

    p {
        font-weight: lighter;
        color: #fff;
    }
`,cte=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    border-radius: 10px;
    margin: 30px 15px;
    overflow: hidden;
    box-shadow: 5px 20px 50px rgba(0, 0, 0, 1);
    // z-index: -1;

    &:hover {
        cursor: pointer;

        ${D2} {
            opacity: 1;
            transform: scale(1.1);
            transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${M2} {
            opacity: 1;
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
`,fte=({category:e})=>{const{categoryName:t,imageUrl:n,route:r}=e,i=Vi(),o=()=>i(r);return w.jsxs(cte,{onClick:o,children:[w.jsx(D2,{$imageurl:n}),w.jsxs(M2,{children:[w.jsx("h2",{children:t}),w.jsx("p",{children:"View More"})]})]})},dte=[{id:1,categoryName:"Inks",imageUrl:"https://i.ibb.co/4NzycTv/yamamoto-bleach.jpg",route:"shop/inks"},{id:2,categoryName:"Illustrations",imageUrl:"https://i.ibb.co/n1V220T/dva.jpg",route:"shop/illustrations"},{id:3,categoryName:"Fine Art",imageUrl:"https://i.ibb.co/SfsGYKk/Confections-Oilonlinen-16x18in-1250.jpg",route:"shop/fine art"}],hte=()=>w.jsx(ute,{children:dte.map(e=>w.jsx(fte,{category:e},e.id))});var V_={},pte=t1;Object.defineProperty(V_,"__esModule",{value:!0});var L2=V_.default=void 0;vte(S);var mte=pte(v1()),gte=w;function j2(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(j2=function(r){return r?n:t})(e)}function vte(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=j2(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var yte=(0,mte.default)((0,gte.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");L2=V_.default=yte;var F_={},_te=t1;Object.defineProperty(F_,"__esModule",{value:!0});var V2=F_.default=void 0;Ste(S);var wte=_te(v1()),Ete=w;function F2(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(F2=function(r){return r?n:t})(e)}function Ste(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=F2(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var bte=(0,wte.default)((0,Ete.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");V2=F_.default=bte;function QT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?QT(Object(n),!0).forEach(function(r){st(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):QT(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ih(e){"@babel/helpers - typeof";return ih=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ih(e)}function Tte(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function XT(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ite(e,t,n){return t&&XT(e.prototype,t),n&&XT(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function st(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U_(e,t){return xte(e)||Ate(e,t)||U2(e,t)||Rte()}function vc(e){return Cte(e)||kte(e)||U2(e)||Pte()}function Cte(e){if(Array.isArray(e))return ky(e)}function xte(e){if(Array.isArray(e))return e}function kte(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ate(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function U2(e,t){if(e){if(typeof e=="string")return ky(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ky(e,t)}}function ky(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pte(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rte(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var JT=function(){},z_={},z2={},B2=null,W2={mark:JT,measure:JT};try{typeof window<"u"&&(z_=window),typeof document<"u"&&(z2=document),typeof MutationObserver<"u"&&(B2=MutationObserver),typeof performance<"u"&&(W2=performance)}catch{}var Ote=z_.navigator||{},ZT=Ote.userAgent,eI=ZT===void 0?"":ZT,Ni=z_,Ae=z2,tI=B2,nf=W2;Ni.document;var Hr=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",H2=~eI.indexOf("MSIE")||~eI.indexOf("Trident/"),rf,of,sf,af,lf,Vr="___FONT_AWESOME___",Ay=16,q2="fa",G2="svg-inline--fa",Oo="data-fa-i2svg",Py="data-fa-pseudo-element",Nte="data-fa-pseudo-element-pending",B_="data-prefix",W_="data-icon",nI="fontawesome-i2svg",$te="async",Dte=["HTML","HEAD","STYLE","SCRIPT"],K2=function(){try{return!0}catch{return!1}}(),Ie="classic",Ue="sharp",H_=[Ie,Ue];function yc(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Ie]}})}var Pu=yc((rf={},st(rf,Ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),st(rf,Ue,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),rf)),Ru=yc((of={},st(of,Ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),st(of,Ue,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),of)),Ou=yc((sf={},st(sf,Ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),st(sf,Ue,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),sf)),Mte=yc((af={},st(af,Ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),st(af,Ue,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),af)),Lte=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Y2="fa-layers-text",jte=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vte=yc((lf={},st(lf,Ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),st(lf,Ue,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),lf)),Q2=[1,2,3,4,5,6,7,8,9,10],Fte=Q2.concat([11,12,13,14,15,16,17,18,19,20]),Ute=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nu=new Set;Object.keys(Ru[Ie]).map(Nu.add.bind(Nu));Object.keys(Ru[Ue]).map(Nu.add.bind(Nu));var zte=[].concat(H_,vc(Nu),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lo.GROUP,lo.SWAP_OPACITY,lo.PRIMARY,lo.SECONDARY]).concat(Q2.map(function(e){return"".concat(e,"x")})).concat(Fte.map(function(e){return"w-".concat(e)})),$l=Ni.FontAwesomeConfig||{};function Bte(e){var t=Ae.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Wte(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Ae&&typeof Ae.querySelector=="function"){var Hte=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hte.forEach(function(e){var t=U_(e,2),n=t[0],r=t[1],i=Wte(Bte(n));i!=null&&($l[r]=i)})}var X2={styleDefault:"solid",familyDefault:"classic",cssPrefix:q2,replacementClass:G2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$l.familyPrefix&&($l.cssPrefix=$l.familyPrefix);var sa=M(M({},X2),$l);sa.autoReplaceSvg||(sa.observeMutations=!1);var z={};Object.keys(X2).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){sa[e]=n,Dl.forEach(function(r){return r(z)})},get:function(){return sa[e]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(t){sa.cssPrefix=t,Dl.forEach(function(n){return n(z)})},get:function(){return sa.cssPrefix}});Ni.FontAwesomeConfig=z;var Dl=[];function qte(e){return Dl.push(e),function(){Dl.splice(Dl.indexOf(e),1)}}var Yr=Ay,ar={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gte(e){if(!(!e||!Hr)){var t=Ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Ae.head.insertBefore(t,r),e}}var Kte="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $u(){for(var e=12,t="";e-- >0;)t+=Kte[Math.random()*62|0];return t}function Ra(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function q_(e){return e.classList?Ra(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function J2(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yte(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(J2(e[n]),'" ')},"").trim()}function Fp(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function G_(e){return e.size!==ar.size||e.x!==ar.x||e.y!==ar.y||e.rotate!==ar.rotate||e.flipX||e.flipY}function Qte(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Xte(e){var t=e.transform,n=e.width,r=n===void 0?Ay:n,i=e.height,o=i===void 0?Ay:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&H2?l+="translate(".concat(t.x/Yr-r/2,"em, ").concat(t.y/Yr-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Yr,"em), calc(-50% + ").concat(t.y/Yr,"em)) "):l+="translate(".concat(t.x/Yr,"em, ").concat(t.y/Yr,"em) "),l+="scale(".concat(t.size/Yr*(t.flipX?-1:1),", ").concat(t.size/Yr*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Jte=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Z2(){var e=q2,t=G2,n=z.cssPrefix,r=z.replacementClass,i=Jte;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var rI=!1;function pg(){z.autoAddCss&&!rI&&(Gte(Z2()),rI=!0)}var Zte={mixout:function(){return{dom:{css:Z2,insertCss:pg}}},hooks:function(){return{beforeDOMElementCreation:function(){pg()},beforeI2svg:function(){pg()}}}},Fr=Ni||{};Fr[Vr]||(Fr[Vr]={});Fr[Vr].styles||(Fr[Vr].styles={});Fr[Vr].hooks||(Fr[Vr].hooks={});Fr[Vr].shims||(Fr[Vr].shims=[]);var Un=Fr[Vr],eN=[],ene=function e(){Ae.removeEventListener("DOMContentLoaded",e),oh=1,eN.map(function(t){return t()})},oh=!1;Hr&&(oh=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),oh||Ae.addEventListener("DOMContentLoaded",ene));function tne(e){Hr&&(oh?setTimeout(e,0):eN.push(e))}function _c(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?J2(e):"<".concat(t," ").concat(Yte(r),">").concat(o.map(_c).join(""),"</").concat(t,">")}function iI(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var nne=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},mg=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?nne(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function rne(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ry(e){var t=rne(e);return t.length===1?t[0].toString(16):null}function ine(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function oI(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Oy(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=oI(t);typeof Un.hooks.addPack=="function"&&!i?Un.hooks.addPack(e,oI(t)):Un.styles[e]=M(M({},Un.styles[e]||{}),o),e==="fas"&&Oy("fa",t)}var uf,cf,ff,gs=Un.styles,one=Un.shims,sne=(uf={},st(uf,Ie,Object.values(Ou[Ie])),st(uf,Ue,Object.values(Ou[Ue])),uf),K_=null,tN={},nN={},rN={},iN={},oN={},ane=(cf={},st(cf,Ie,Object.keys(Pu[Ie])),st(cf,Ue,Object.keys(Pu[Ue])),cf);function lne(e){return~zte.indexOf(e)}function une(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!lne(i)?i:null}var sN=function(){var t=function(o){return mg(gs,function(s,a,l){return s[l]=mg(a,o,{}),s},{})};tN=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),nN=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),oN=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in gs||z.autoFetchSvg,r=mg(one,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});rN=r.names,iN=r.unicodes,K_=Up(z.styleDefault,{family:z.familyDefault})};qte(function(e){K_=Up(e.styleDefault,{family:z.familyDefault})});sN();function Y_(e,t){return(tN[e]||{})[t]}function cne(e,t){return(nN[e]||{})[t]}function uo(e,t){return(oN[e]||{})[t]}function aN(e){return rN[e]||{prefix:null,iconName:null}}function fne(e){var t=iN[e],n=Y_("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $i(){return K_}var Q_=function(){return{prefix:null,iconName:null,rest:[]}};function Up(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Ie:n,i=Pu[r][e],o=Ru[r][e]||Ru[r][i],s=e in Un.styles?e:null;return o||s||null}var sI=(ff={},st(ff,Ie,Object.keys(Ou[Ie])),st(ff,Ue,Object.keys(Ou[Ue])),ff);function zp(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},st(t,Ie,"".concat(z.cssPrefix,"-").concat(Ie)),st(t,Ue,"".concat(z.cssPrefix,"-").concat(Ue)),t),s=null,a=Ie;(e.includes(o[Ie])||e.some(function(u){return sI[Ie].includes(u)}))&&(a=Ie),(e.includes(o[Ue])||e.some(function(u){return sI[Ue].includes(u)}))&&(a=Ue);var l=e.reduce(function(u,c){var f=une(z.cssPrefix,c);if(gs[c]?(c=sne[a].includes(c)?Mte[a][c]:c,s=c,u.prefix=c):ane[a].indexOf(c)>-1?(s=c,u.prefix=Up(c,{family:a})):f?u.iconName=f:c!==z.replacementClass&&c!==o[Ie]&&c!==o[Ue]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=s==="fa"?aN(u.iconName):{},p=uo(u.prefix,u.iconName);d.prefix&&(s=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!gs.far&&gs.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},Q_());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ue&&(gs.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=uo(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=$i()||"fas"),l}var dne=function(){function e(){Tte(this,e),this.definitions={}}return Ite(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),s[a]),Oy(a,s[a]);var l=Ou[Ie][a];l&&Oy(l,s[a]),sN()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),aI=[],vs={},Ns={},hne=Object.keys(Ns);function pne(e,t){var n=t.mixoutsTo;return aI=e,vs={},Object.keys(Ns).forEach(function(r){hne.indexOf(r)===-1&&delete Ns[r]}),aI.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),ih(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){vs[s]||(vs[s]=[]),vs[s].push(o[s])})}r.provides&&r.provides(Ns)}),n}function Ny(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=vs[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function No(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=vs[e]||[];i.forEach(function(o){o.apply(null,n)})}function Ur(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ns[e]?Ns[e].apply(null,t):void 0}function $y(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||$i();if(t)return t=uo(n,t)||t,iI(lN.definitions,n,t)||iI(Un.styles,n,t)}var lN=new dne,mne=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,No("noAuto")},gne={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Hr?(No("beforeI2svg",t),Ur("pseudoElements2svg",t),Ur("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,tne(function(){yne({autoReplaceSvgRoot:n}),No("watch",t)})}},vne={icon:function(t){if(t===null)return null;if(ih(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:uo(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Up(t[0]);return{prefix:r,iconName:uo(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.cssPrefix,"-"))>-1||t.match(Lte))){var i=zp(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||$i(),iconName:uo(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=$i();return{prefix:o,iconName:uo(o,t)||t}}}},yn={noAuto:mne,config:z,dom:gne,parse:vne,library:lN,findIconDefinition:$y,toHtml:_c},yne=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Ae:n;(Object.keys(Un.styles).length>0||z.autoFetchSvg)&&Hr&&z.autoReplaceSvg&&yn.dom.i2svg({node:r})};function Bp(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return _c(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Hr){var r=Ae.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function _ne(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(G_(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Fp(M(M({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function wne(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(z.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:s}),children:r}]}]}function X_(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,p=d===void 0?!1:d,g=r.found?r:n,m=g.width,_=g.height,v=i==="fak",h=[z.replacementClass,o?"".concat(z.cssPrefix,"-").concat(o):""].filter(function(j){return f.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(f.classes).join(" "),y={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(_)})},E=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/_*16*.0625,"em")}:{};p&&(y.attributes[Oo]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||$u())},children:[l]}),delete y.attributes.title);var T=M(M({},y),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:M(M({},E),f.styles)}),I=r.found&&n.found?Ur("generateAbstractMask",T)||{children:[],attributes:{}}:Ur("generateAbstractIcon",T)||{children:[],attributes:{}},b=I.children,R=I.attributes;return T.children=b,T.attributes=R,a?wne(T):_ne(T)}function lI(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=M(M(M({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[Oo]="");var c=M({},s.styles);G_(i)&&(c.transform=Xte({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Fp(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function Ene(e){var t=e.content,n=e.title,r=e.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Fp(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var gg=Un.styles;function Dy(e){var t=e[0],n=e[1],r=e.slice(4),i=U_(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(lo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(lo.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(lo.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var Sne={found:!1,width:512,height:512};function bne(e,t){!K2&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function My(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=$i()),new Promise(function(r,i){if(Ur("missingIconAbstract"),n==="fa"){var o=aN(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&gg[t]&&gg[t][e]){var s=gg[t][e];return r(Dy(s))}bne(e,t),r(M(M({},Sne),{},{icon:z.showMissingIcons&&e?Ur("missingIconAbstract")||{}:{}}))})}var uI=function(){},Ly=z.measurePerformance&&nf&&nf.mark&&nf.measure?nf:{mark:uI,measure:uI},hl='FA "6.5.1"',Tne=function(t){return Ly.mark("".concat(hl," ").concat(t," begins")),function(){return uN(t)}},uN=function(t){Ly.mark("".concat(hl," ").concat(t," ends")),Ly.measure("".concat(hl," ").concat(t),"".concat(hl," ").concat(t," begins"),"".concat(hl," ").concat(t," ends"))},J_={begin:Tne,end:uN},Qf=function(){};function cI(e){var t=e.getAttribute?e.getAttribute(Oo):null;return typeof t=="string"}function Ine(e){var t=e.getAttribute?e.getAttribute(B_):null,n=e.getAttribute?e.getAttribute(W_):null;return t&&n}function Cne(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function xne(){if(z.autoReplaceSvg===!0)return Xf.replace;var e=Xf[z.autoReplaceSvg];return e||Xf.replace}function kne(e){return Ae.createElementNS("http://www.w3.org/2000/svg",e)}function Ane(e){return Ae.createElement(e)}function cN(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?kne:Ane:n;if(typeof e=="string")return Ae.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(cN(s,{ceFn:r}))}),i}function Pne(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xf={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(cN(i),n)}),n.getAttribute(Oo)===null&&z.keepOriginalSource){var r=Ae.createComment(Pne(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~q_(n).indexOf(z.replacementClass))return Xf.replace(t);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return _c(a)}).join(`
`);n.setAttribute(Oo,""),n.innerHTML=s}};function fI(e){e()}function fN(e,t){var n=typeof t=="function"?t:Qf;if(e.length===0)n();else{var r=fI;z.mutateApproach===$te&&(r=Ni.requestAnimationFrame||fI),r(function(){var i=xne(),o=J_.begin("mutate");e.map(i),o(),n()})}}var Z_=!1;function dN(){Z_=!0}function jy(){Z_=!1}var sh=null;function dI(e){if(tI&&z.observeMutations){var t=e.treeCallback,n=t===void 0?Qf:t,r=e.nodeCallback,i=r===void 0?Qf:r,o=e.pseudoElementsCallback,s=o===void 0?Qf:o,a=e.observeMutationsRoot,l=a===void 0?Ae:a;sh=new tI(function(u){if(!Z_){var c=$i();Ra(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!cI(f.addedNodes[0])&&(z.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&z.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&cI(f.target)&&~Ute.indexOf(f.attributeName))if(f.attributeName==="class"&&Ine(f.target)){var d=zp(q_(f.target)),p=d.prefix,g=d.iconName;f.target.setAttribute(B_,p||c),g&&f.target.setAttribute(W_,g)}else Cne(f.target)&&i(f.target)})}}),Hr&&sh.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Rne(){sh&&sh.disconnect()}function One(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function Nne(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=zp(q_(e));return i.prefix||(i.prefix=$i()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=cne(i.prefix,e.innerText)||Y_(i.prefix,Ry(e.innerText))),!i.iconName&&z.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function $ne(e){var t=Ra(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||$u()):(t["aria-hidden"]="true",t.focusable="false")),t}function Dne(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ar,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Nne(e),r=n.iconName,i=n.prefix,o=n.rest,s=$ne(e),a=Ny("parseNodeAttributes",{},e),l=t.styleParser?One(e):[];return M({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:ar,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var Mne=Un.styles;function hN(e){var t=z.autoReplaceSvg==="nest"?hI(e,{styleParser:!1}):hI(e);return~t.extra.classes.indexOf(Y2)?Ur("generateLayersText",e,t):Ur("generateSvgReplacementMutation",e,t)}var Di=new Set;H_.map(function(e){Di.add("fa-".concat(e))});Object.keys(Pu[Ie]).map(Di.add.bind(Di));Object.keys(Pu[Ue]).map(Di.add.bind(Di));Di=vc(Di);function pI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Hr)return Promise.resolve();var n=Ae.documentElement.classList,r=function(f){return n.add("".concat(nI,"-").concat(f))},i=function(f){return n.remove("".concat(nI,"-").concat(f))},o=z.autoFetchSvg?Di:H_.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Mne));o.includes("fa")||o.push("fa");var s=[".".concat(Y2,":not([").concat(Oo,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Oo,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Ra(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=J_.begin("onTree"),u=a.reduce(function(c,f){try{var d=hN(f);d&&c.push(d)}catch(p){K2||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){fN(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function Lne(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hN(e).then(function(n){n&&fN([n],t)})}function jne(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$y(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:$y(i||{})),e(r,M(M({},n),{},{mask:i}))}}var Vne=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ar:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,p=n.titleId,g=p===void 0?null:p,m=n.classes,_=m===void 0?[]:m,v=n.attributes,h=v===void 0?{}:v,y=n.styles,E=y===void 0?{}:y;if(t){var T=t.prefix,I=t.iconName,b=t.icon;return Bp(M({type:"icon"},t),function(){return No("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(d?h["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(g||$u()):(h["aria-hidden"]="true",h.focusable="false")),X_({icons:{main:Dy(b),mask:l?Dy(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:I,transform:M(M({},ar),i),symbol:s,title:d,maskId:c,titleId:g,extra:{attributes:h,styles:E,classes:_}})})}},Fne={mixout:function(){return{icon:jne(Vne)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=pI,n.nodeCallback=Lne,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Ae:r,o=n.callback,s=o===void 0?function(){}:o;return pI(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(p,g){Promise.all([My(i,a),c.iconName?My(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var _=U_(m,2),v=_[0],h=_[1];p([n,X_({icons:{main:v,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=Fp(a);l.length>0&&(i.style=l);var u;return G_(s)&&(u=Ur("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},Une={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Bp({type:"layer"},function(){No("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(vc(o)).join(" ")},children:s}]})}}}},zne={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Bp({type:"counter",content:n},function(){return No("beforeDOMElementCreation",{content:n,params:r}),Ene({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(vc(a))}})})}}}},Bne={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?ar:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,p=d===void 0?{}:d;return Bp({type:"text",content:n},function(){return No("beforeDOMElementCreation",{content:n,params:r}),lI({content:n,transform:M(M({},ar),o),title:a,extra:{attributes:f,styles:p,classes:["".concat(z.cssPrefix,"-layers-text")].concat(vc(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(H2){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,lI({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},Wne=new RegExp('"',"ug"),mI=[1105920,1112319];function Hne(e){var t=e.replace(Wne,""),n=ine(t,0),r=n>=mI[0]&&n<=mI[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ry(i?t[0]:t),isSecondary:r||i}}function gI(e,t){var n="".concat(Nte).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Ra(e.children),s=o.filter(function(b){return b.getAttribute(Py)===t})[0],a=Ni.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(jte),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Ue:Ie,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ru[d][l[2].toLowerCase()]:Vte[d][u],g=Hne(f),m=g.value,_=g.isSecondary,v=l[0].startsWith("FontAwesome"),h=Y_(p,m),y=h;if(v){var E=fne(m);E.iconName&&E.prefix&&(h=E.iconName,p=E.prefix)}if(h&&!_&&(!s||s.getAttribute(B_)!==p||s.getAttribute(W_)!==y)){e.setAttribute(n,y),s&&e.removeChild(s);var T=Dne(),I=T.extra;I.attributes[Py]=t,My(h,p).then(function(b){var R=X_(M(M({},T),{},{icons:{main:b,mask:Q_()},prefix:p,iconName:y,extra:I,watchable:!0})),j=Ae.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=R.map(function(O){return _c(O)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function qne(e){return Promise.all([gI(e,"::before"),gI(e,"::after")])}function Gne(e){return e.parentNode!==document.head&&!~Dte.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Py)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function vI(e){if(Hr)return new Promise(function(t,n){var r=Ra(e.querySelectorAll("*")).filter(Gne).map(qne),i=J_.begin("searchPseudoElements");dN(),Promise.all(r).then(function(){i(),jy(),t()}).catch(function(){i(),jy(),n()})})}var Kne={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=vI,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ae:r;z.searchPseudoElements&&vI(i)}}},yI=!1,Yne={mixout:function(){return{dom:{unwatch:function(){dN(),yI=!0}}}},hooks:function(){return{bootstrap:function(){dI(Ny("mutationObserverCallbacks",{}))},noAuto:function(){Rne()},watch:function(n){var r=n.observeMutationsRoot;yI?jy():dI(Ny("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_I=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Qne={mixout:function(){return{parse:{transform:function(n){return _I(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=_I(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},p={outer:a,inner:f,path:d};return{tag:"g",attributes:M({},p.outer),children:[{tag:"g",attributes:M({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),p.path)}]}]}}}},vg={x:0,y:0,width:"100%",height:"100%"};function wI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Xne(e){return e.tag==="g"?e.children:[e]}var Jne={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?zp(i.split(" ").map(function(s){return s.trim()})):Q_();return o.prefix||(o.prefix=$i()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,d=s.icon,p=Qte({transform:l,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:M(M({},vg),{},{fill:"white"})},m=c.children?{children:c.children.map(wI)}:{},_={tag:"g",attributes:M({},p.inner),children:[wI(M({tag:c.tag,attributes:M(M({},c.attributes),p.path)},m))]},v={tag:"g",attributes:M({},p.outer),children:[_]},h="mask-".concat(a||$u()),y="clip-".concat(a||$u()),E={tag:"mask",attributes:M(M({},vg),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Xne(d)},E]};return r.push(T,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(h,")")},vg)}),{children:r,attributes:i}}}},Zne={provides:function(t){var n=!1;Ni.matchMedia&&(n=Ni.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=M(M({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ere={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},tre=[Zte,Fne,Une,zne,Bne,Kne,Yne,Qne,Jne,Zne,ere];pne(tre,{mixoutsTo:yn});yn.noAuto;yn.config;yn.library;yn.dom;var Vy=yn.parse;yn.findIconDefinition;yn.toHtml;var nre=yn.icon;yn.layer;yn.text;yn.counter;function EI(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function di(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?EI(Object(n),!0).forEach(function(r){ys(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):EI(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ah(e){"@babel/helpers - typeof";return ah=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ah(e)}function ys(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rre(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ire(e,t){if(e==null)return{};var n=rre(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Fy(e){return ore(e)||sre(e)||are(e)||lre()}function ore(e){if(Array.isArray(e))return Uy(e)}function sre(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function are(e,t){if(e){if(typeof e=="string")return Uy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uy(e,t)}}function Uy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lre(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ure(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,p=e.inverse,g=e.border,m=e.listItem,_=e.flip,v=e.size,h=e.rotation,y=e.pull,E=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":p,"fa-border":g,"fa-li":m,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},ys(t,"fa-".concat(v),typeof v<"u"&&v!==null),ys(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ys(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),ys(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map(function(T){return E[T]?T:null}).filter(function(T){return T})}function cre(e){return e=e-0,e===e}function pN(e){return cre(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var fre=["style"];function dre(e){return e.charAt(0).toUpperCase()+e.slice(1)}function hre(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=pN(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[dre(i)]=o:t[i]=o,t},{})}function mN(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return mN(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=hre(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[pN(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=ire(n,fre);return i.attrs.style=di(di({},i.attrs.style),s),e.apply(void 0,[t.tag,di(di({},i.attrs),a)].concat(Fy(r)))}var gN=!1;try{gN=!0}catch{}function pre(){if(!gN&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function SI(e){if(e&&ah(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Vy.icon)return Vy.icon(e);if(e===null)return null;if(e&&ah(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function yg(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ys({},e,t):{}}var Oa=q.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=SI(n),c=yg("classes",[].concat(Fy(ure(e)),Fy(o.split(" ")))),f=yg("transform",typeof e.transform=="string"?Vy.transform(e.transform):e.transform),d=yg("mask",SI(r)),p=nre(u,di(di(di(di({},c),f),d),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!p)return pre("Could not find icon",u),null;var g=p.abstract,m={ref:t};return Object.keys(e).forEach(function(_){Oa.defaultProps.hasOwnProperty(_)||(m[_]=e[_])}),mre(g[0],m)});Oa.displayName="FontAwesomeIcon";Oa.propTypes={beat:F.bool,border:F.bool,beatFade:F.bool,bounce:F.bool,className:F.string,fade:F.bool,flash:F.bool,mask:F.oneOfType([F.object,F.array,F.string]),maskId:F.string,fixedWidth:F.bool,inverse:F.bool,flip:F.oneOf([!0,!1,"horizontal","vertical","both"]),icon:F.oneOfType([F.object,F.array,F.string]),listItem:F.bool,pull:F.oneOf(["right","left"]),pulse:F.bool,rotation:F.oneOf([0,90,180,270]),shake:F.bool,size:F.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:F.bool,spinPulse:F.bool,spinReverse:F.bool,symbol:F.oneOfType([F.bool,F.string]),title:F.string,titleId:F.string,transform:F.oneOfType([F.string,F.object]),swapOpacity:F.bool};Oa.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var mre=mN.bind(null,q.createElement),gre={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},vre={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const yre=k(Oa)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: rgb(114, 137, 218);
    }
`,_re=k(Oa)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: rgb(205, 32, 31);
    }
`,wre=()=>w.jsx(yre,{icon:gre,size:"2x"}),Ere=()=>w.jsx(_re,{icon:vre,size:"2x"}),Sre=k.footer`
    margin-top: 50px;
    width: 100%;
    display: flex;
    // justify-content: space-between;
    background-color: rgb(21, 23, 23);
`,bre=k.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-right: 100px;
    padding: 20px;

    h1 {
        color: #fff;
    }
`,Tre=k.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    h1 {
        color: #fff;
    }
`,Qr=k(B0)`
    text-decoration: none;
    font-weight: bold;
    color: rgb(115, 115, 115);
    padding: 10px 0 10px 0;
    transition: 0.6s ease;

    &:hover {
        color: #fff;
    }

`,Ire=k.div`
    display: flex;
`,Cre=k(L2)`
    color: rgb(115, 115, 115);
    border-radius: 10px;
    margin-right: 15px;

    &:hover {
        background: #d6249f;
        background: radial-gradient(circle at 0% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        box-shadow: 0px 3px 10px rgba(0,0,0,.25);
        transition: 1s ease-out;
    }
`,xre=k(V2)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: #3b5998;
    }
`,kre=()=>w.jsxs(Sre,{children:[w.jsxs(bre,{children:[w.jsx("h1",{children:"Information"}),w.jsx(Qr,{to:"/about",children:"About"}),w.jsx(Qr,{to:"/conventions",children:"Conventions"}),w.jsx(Qr,{to:"/mentoring",children:"Mentoring"}),w.jsx(Qr,{to:"/contact",children:"Contact Me"})]}),w.jsxs(Tre,{children:[w.jsx("h1",{children:"Follow me on Social Media!"}),w.jsxs(Ire,{children:[w.jsx(Qr,{children:w.jsx(Cre,{fontSize:"large"})}),w.jsx(Qr,{children:w.jsx(xre,{fontSize:"large"})}),w.jsx(Qr,{children:w.jsx(wre,{})}),w.jsx(Qr,{children:w.jsx(Ere,{})})]})]})]}),Are=()=>w.jsxs("div",{children:[w.jsx(hte,{}),w.jsx("section",{children:w.jsx(kre,{})})]}),Pre=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`,Rre=k.div`
    width: 70%;
    font-family: "Architects Daughter", cursive;
`,Ore=()=>w.jsx(Pre,{children:w.jsxs(Rre,{children:[w.jsx("h1",{children:"About the artist"}),w.jsxs("p",{children:["Sandra Sanchez, a distinguished artist from Southern California, seamlessly blends the realms of traditional fantasy and realistic portrait art to create the vivid and luminous pieces she is known for today.",w.jsx("br",{}),w.jsx("br",{}),"Her artistic journey traces back to childhood visits to The Getty Museum in Los Angeles, where the profound influence of the Old Masters ignited a passion for technically and emotionally rich painting. Guided by a desire to elevate her craft, Sandra embarked on a new artistic journey, completing the core program at the prestigious Grand Central Atelier after graduating high school. This experience became the bedrock for her commitment to mastering the intricacies of traditional painting.",w.jsx("br",{}),w.jsx("br",{}),"Upon moving back to California in 2022, Sandra made a conscious decision to weave her cherished childhood influences into her canvases by painting subjects from favorite her favorite movies, video games and anime. She brings a totally unique fusion of classical and contemporary elements to her work.",w.jsx("br",{}),w.jsx("br",{}),"Sandra's artistic prowess extends beyond the confines of classical art, allowing her to skillfully render fantasy subjects with a nuanced touch. Her paintings not only showcase technical mastery but also exude a profound connection to humanity. Through the interplay of sensitive light and fluid composition, she captures the essence of her subjects and can create a powerful visual impact.",w.jsx("br",{}),w.jsx("br",{}),"Acknowledged for her exceptional talent, Sandra is a recipient of prestigious awards, including the Anders Larson-Toich Fund Scholarship, the Alma Schapiro Fund Scholarship, and the Neil Patterson Award of Excellence. As a two-time Hudson River Fellow, she continues to evolve as an artist, consistently breathing life and energy into her art, ensuring the spirit of her subjects resonates in every stroke."]}),w.jsx("br",{}),w.jsx("br",{})]})}),Nre=()=>w.jsx("div",{children:w.jsx("h1",{children:"I am the mentoring page!"})}),$re=()=>w.jsx("div",{children:w.jsx("h1",{children:"I am the contact me page!"})}),Dre=k.div`
    display: flex;
    flex-direction: column;
`,Mre=k.div`
    display: flex;
    justify-content: flex-end;
`,Lre=k.span`
    color: rgb(255, 51, 153);
    font-weight: bold;
`,vN="rgb(255, 51, 153)",jre="black",zy=bo`
  top: -14px;
  font-size: 12px;
  color: ${jre};
`,yN=k.label`
  color: ${vN};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  //if shrink is truthy, then apply the shrinkLabelStyles
  //destructuring shrink directly off of props
  ${({shrink:e})=>e&&zy};

  //alternative, does the same thing
  // ${e=>e.shrink&&zy};
`,Vre=k.input`
  background: none;
  background-color: white;
  color: ${vN};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  //adjacent sibling selector => when the input is focused, target adjacent sibling (which is Label) and apply the shrinkLabelStyles styling
  
  &:focus ~ ${yN} {
    ${zy};
  }
`,Fre=k.div`
  position: relative;
  margin: 50px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`,_s=({label:e,...t})=>w.jsxs(Fre,{children:[w.jsx(Vre,{...t}),e&&w.jsx(yN,{shrink:!!(t.value&&typeof t.value=="string"&&t.value.length),children:e})]}),Ure=()=>{const e=Vi(),[t,n]=S.useState({displayName:"",email:"",password:"",confirmPassword:""}),{displayName:r,email:i,password:o,confirmPassword:s}=t,{currentUser:a,setCurrentUser:l}=S.useContext(gc),u=d=>{const{name:p,value:g}=d.target;n({...t,[p]:g})},c=()=>{n({displayName:"",email:"",password:"",confirmPassword:""})},f=async d=>{if(d.preventDefault(),o!==s){alert("Passwords do not match!");return}try{const p=await Dee(i,o);if(p){const{user:g}=p;await M_(g,{displayName:r}),l(g)}}catch(p){console.log(p)}c()};return a&&e("/"),w.jsxs(Dre,{children:[w.jsx("h2",{children:"Sign Up!"}),w.jsx(Lre,{children:"Create an account with email and password"}),w.jsxs("form",{onSubmit:f,children:[w.jsx(_s,{label:"User Name",type:"text",name:"displayName",value:r,required:!0,onChange:u}),w.jsx(_s,{label:"Email",type:"text",name:"email",value:i,required:!0,onChange:u}),w.jsx(_s,{label:"Password",type:"password",name:"password",value:o,required:!0,onChange:u}),w.jsx(_s,{label:"Confirm Password",type:"password",name:"confirmPassword",value:s,required:!0,onChange:u}),w.jsx(Mre,{children:w.jsx(Yn,{buttonType:ot.google,children:"Sign Up"})})]})]})},zre=k.div`
    display: flex;
    flex-direction: column;
`,Bre=k.div`
    display: flex;
    justify-content: space-evenly;
`,Wre=k.span`
    color: rgb(255, 51, 153);
    font-weight: bold;
`,Hre=()=>{const e=Vi(),{currentUser:t,setCurrentUser:n}=S.useContext(gc),[r,i]=S.useState({email:"",password:""}),{email:o,password:s}=r,a=f=>{const{name:d,value:p}=f.target;i({...r,[d]:p})},l=()=>{i({email:"",password:""})},u=async f=>{f.preventDefault();try{const d=await $ee(o,s);if(console.log(d),d){const{user:p}=d;n(p)}}catch(d){console.log(`There was an error signing in: ${d}`)}l()},c=async()=>{try{const f=await Oee();if(console.log(f),f){const{user:d}=f;await M_(d),n(d)}}catch(f){console.log(f)}};return t&&e("/"),w.jsxs(zre,{children:[w.jsx("h2",{children:"Already have an account?"}),w.jsx(Wre,{children:"Sign in with your email and password"}),w.jsxs("form",{onSubmit:u,children:[w.jsx(_s,{label:"email",type:"email",name:"email",value:o,required:!0,onChange:a}),w.jsx(_s,{label:"password",type:"password",name:"password",value:s,required:!0,onChange:a}),w.jsxs(Bre,{children:[w.jsx(Yn,{buttonType:ot.default,children:"Sign In With Email"}),w.jsx(Yn,{buttonType:ot.google,type:"submit",onClick:c,children:"Sign In With Google"})]})]})]})},qre=k.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 30px auto;
`,Gre=()=>w.jsxs(qre,{children:[w.jsx(Hre,{}),w.jsx(Ure,{})]}),Kre=k.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    margin: 20px;
`,_N=k.div`
    width: 100%;
    position: absolute; //relative to nearest positioned ancestor (i.e nearest parent element w/ position value of relative, absolute, or fixed. In this case, is the relatively positioned ProductCardContainer)
    top: 350px;
    display: none;
`;k.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${({imageurl:e})=>`url(${e})`};
`;const Yre=k.div`
    margin: 20px;
    font-family: "Caveat", cursive;
    font-weight: 700;
    font-size: 20px;
`,Qre=k.div`
    position: relative;
    top: 25px;
    width: 100%;
    height: 500px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 15px 20px 20px rgba(0,0,0,0.8);
    transition: transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
        opacity: 0.85;
    }

    &:hover {
        img {
            opacity: 1
        }

        transform: scale(1.05);

        box-shadow: 7.5px 10px 10px rgba(0, 0, 0, 0.4);

    }

    &:hover ${_N} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`,Xre=({product:e})=>{const{name:t,imageUrl:n,id:r}=e,i=Vi(),o=()=>i(`${r}`,{state:{product:e}});return w.jsxs(Qre,{children:[w.jsx("img",{src:n,alt:t}),w.jsx(Yre,{children:t}),w.jsx(_N,{children:w.jsx(Yn,{buttonType:ot.default,onClick:o,children:"View Details"})})]})},Jre=()=>{const{categoriesMap:e}=S.useContext(H0),{category:t}=GM(),[n,r]=S.useState(e[t]);return S.useEffect(()=>{r(e[t])},[e,t]),console.log(n),w.jsx(Kre,{children:n&&n.map(i=>w.jsx(Xre,{product:i,children:i.sizesAndPrices.map(o=>w.jsxs("div",{children:["Size: ",o.size,", Price: ",o.price]},o.size))},i.id))})};var wN={},ew={},tw={};Object.defineProperty(tw,"__esModule",{value:!0});var bI="html",TI="head",df="body",Zre=/<([a-zA-Z]+[0-9]?)/,II=/<head[^]*>/i,CI=/<body[^]*>/i,lh=function(e,t){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},By=function(e,t){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},xI=typeof window=="object"&&window.DOMParser;if(typeof xI=="function"){var eie=new xI,tie="text/html";By=function(e,t){return t&&(e="<".concat(t,">").concat(e,"</").concat(t,">")),eie.parseFromString(e,tie)},lh=By}if(typeof document=="object"&&document.implementation){var hf=document.implementation.createHTMLDocument();lh=function(e,t){if(t){var n=hf.documentElement.querySelector(t);return n&&(n.innerHTML=e),hf}return hf.documentElement.innerHTML=e,hf}}var pf=typeof document=="object"&&document.createElement("template"),Wy;pf&&pf.content&&(Wy=function(e){return pf.innerHTML=e,pf.content.childNodes});function nie(e){var t,n,r=e.match(Zre),i=r&&r[1]?r[1].toLowerCase():"";switch(i){case bI:{var o=By(e);if(!II.test(e)){var s=o.querySelector(TI);(t=s==null?void 0:s.parentNode)===null||t===void 0||t.removeChild(s)}if(!CI.test(e)){var s=o.querySelector(df);(n=s==null?void 0:s.parentNode)===null||n===void 0||n.removeChild(s)}return o.querySelectorAll(bI)}case TI:case df:{var a=lh(e).querySelectorAll(i);return CI.test(e)&&II.test(e)?a[0].parentNode.childNodes:a}default:{if(Wy)return Wy(e);var s=lh(e,df).querySelector(df);return s.childNodes}}}tw.default=nie;var aa={},nw={},rw={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var t;(function(r){r.Root="root",r.Text="text",r.Directive="directive",r.Comment="comment",r.Script="script",r.Style="style",r.Tag="tag",r.CDATA="cdata",r.Doctype="doctype"})(t=e.ElementType||(e.ElementType={}));function n(r){return r.type===t.Tag||r.type===t.Script||r.type===t.Style}e.isTag=n,e.Root=t.Root,e.Text=t.Text,e.Directive=t.Directive,e.Comment=t.Comment,e.Script=t.Script,e.Style=t.Style,e.Tag=t.Tag,e.CDATA=t.CDATA,e.Doctype=t.Doctype})(rw);var te={},Hi=Oe&&Oe.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ml=Oe&&Oe.__assign||function(){return Ml=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ml.apply(this,arguments)};Object.defineProperty(te,"__esModule",{value:!0});te.cloneNode=te.hasChildren=te.isDocument=te.isDirective=te.isComment=te.isText=te.isCDATA=te.isTag=te.Element=te.Document=te.CDATA=te.NodeWithChildren=te.ProcessingInstruction=te.Comment=te.Text=te.DataNode=te.Node=void 0;var nn=rw,iw=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),ow(this,t)},e}();te.Node=iw;var Wp=function(e){Hi(t,e);function t(n){var r=e.call(this)||this;return r.data=n,r}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(n){this.data=n},enumerable:!1,configurable:!0}),t}(iw);te.DataNode=Wp;var EN=function(e){Hi(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=nn.ElementType.Text,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(Wp);te.Text=EN;var SN=function(e){Hi(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=nn.ElementType.Comment,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(Wp);te.Comment=SN;var bN=function(e){Hi(t,e);function t(n,r){var i=e.call(this,r)||this;return i.name=n,i.type=nn.ElementType.Directive,i}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(Wp);te.ProcessingInstruction=bN;var Hp=function(e){Hi(t,e);function t(n){var r=e.call(this)||this;return r.children=n,r}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var n;return(n=this.children[0])!==null&&n!==void 0?n:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(n){this.children=n},enumerable:!1,configurable:!0}),t}(iw);te.NodeWithChildren=Hp;var TN=function(e){Hi(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=nn.ElementType.CDATA,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(Hp);te.CDATA=TN;var IN=function(e){Hi(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=nn.ElementType.Root,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(Hp);te.Document=IN;var CN=function(e){Hi(t,e);function t(n,r,i,o){i===void 0&&(i=[]),o===void 0&&(o=n==="script"?nn.ElementType.Script:n==="style"?nn.ElementType.Style:nn.ElementType.Tag);var s=e.call(this,i)||this;return s.name=n,s.attribs=r,s.type=o,s}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(n){this.name=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var n=this;return Object.keys(this.attribs).map(function(r){var i,o;return{name:r,value:n.attribs[r],namespace:(i=n["x-attribsNamespace"])===null||i===void 0?void 0:i[r],prefix:(o=n["x-attribsPrefix"])===null||o===void 0?void 0:o[r]}})},enumerable:!1,configurable:!0}),t}(Hp);te.Element=CN;function xN(e){return(0,nn.isTag)(e)}te.isTag=xN;function kN(e){return e.type===nn.ElementType.CDATA}te.isCDATA=kN;function AN(e){return e.type===nn.ElementType.Text}te.isText=AN;function PN(e){return e.type===nn.ElementType.Comment}te.isComment=PN;function RN(e){return e.type===nn.ElementType.Directive}te.isDirective=RN;function ON(e){return e.type===nn.ElementType.Root}te.isDocument=ON;function rie(e){return Object.prototype.hasOwnProperty.call(e,"children")}te.hasChildren=rie;function ow(e,t){t===void 0&&(t=!1);var n;if(AN(e))n=new EN(e.data);else if(PN(e))n=new SN(e.data);else if(xN(e)){var r=t?_g(e.children):[],i=new CN(e.name,Ml({},e.attribs),r);r.forEach(function(l){return l.parent=i}),e.namespace!=null&&(i.namespace=e.namespace),e["x-attribsNamespace"]&&(i["x-attribsNamespace"]=Ml({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(i["x-attribsPrefix"]=Ml({},e["x-attribsPrefix"])),n=i}else if(kN(e)){var r=t?_g(e.children):[],o=new TN(r);r.forEach(function(u){return u.parent=o}),n=o}else if(ON(e)){var r=t?_g(e.children):[],s=new IN(r);r.forEach(function(u){return u.parent=s}),e["x-mode"]&&(s["x-mode"]=e["x-mode"]),n=s}else if(RN(e)){var a=new bN(e.name,e.data);e["x-name"]!=null&&(a["x-name"]=e["x-name"],a["x-publicId"]=e["x-publicId"],a["x-systemId"]=e["x-systemId"]),n=a}else throw new Error("Not implemented yet: ".concat(e.type));return n.startIndex=e.startIndex,n.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(n.sourceCodeLocation=e.sourceCodeLocation),n}te.cloneNode=ow;function _g(e){for(var t=e.map(function(r){return ow(r,!0)}),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}(function(e){var t=Oe&&Oe.__createBinding||(Object.create?function(a,l,u,c){c===void 0&&(c=u);var f=Object.getOwnPropertyDescriptor(l,u);(!f||("get"in f?!l.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return l[u]}}),Object.defineProperty(a,c,f)}:function(a,l,u,c){c===void 0&&(c=u),a[c]=l[u]}),n=Oe&&Oe.__exportStar||function(a,l){for(var u in a)u!=="default"&&!Object.prototype.hasOwnProperty.call(l,u)&&t(l,a,u)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var r=rw,i=te;n(te,e);var o={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},s=function(){function a(l,u,c){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof u=="function"&&(c=u,u=o),typeof l=="object"&&(u=l,l=void 0),this.callback=l??null,this.options=u??o,this.elementCB=c??null}return a.prototype.onparserinit=function(l){this.parser=l},a.prototype.onreset=function(){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},a.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},a.prototype.onerror=function(l){this.handleCallback(l)},a.prototype.onclosetag=function(){this.lastNode=null;var l=this.tagStack.pop();this.options.withEndIndices&&(l.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(l)},a.prototype.onopentag=function(l,u){var c=this.options.xmlMode?r.ElementType.Tag:void 0,f=new i.Element(l,u,void 0,c);this.addNode(f),this.tagStack.push(f)},a.prototype.ontext=function(l){var u=this.lastNode;if(u&&u.type===r.ElementType.Text)u.data+=l,this.options.withEndIndices&&(u.endIndex=this.parser.endIndex);else{var c=new i.Text(l);this.addNode(c),this.lastNode=c}},a.prototype.oncomment=function(l){if(this.lastNode&&this.lastNode.type===r.ElementType.Comment){this.lastNode.data+=l;return}var u=new i.Comment(l);this.addNode(u),this.lastNode=u},a.prototype.oncommentend=function(){this.lastNode=null},a.prototype.oncdatastart=function(){var l=new i.Text(""),u=new i.CDATA([l]);this.addNode(u),l.parent=u,this.lastNode=l},a.prototype.oncdataend=function(){this.lastNode=null},a.prototype.onprocessinginstruction=function(l,u){var c=new i.ProcessingInstruction(l,u);this.addNode(c)},a.prototype.handleCallback=function(l){if(typeof this.callback=="function")this.callback(l,this.dom);else if(l)throw l},a.prototype.addNode=function(l){var u=this.tagStack[this.tagStack.length-1],c=u.children[u.children.length-1];this.options.withStartIndices&&(l.startIndex=this.parser.startIndex),this.options.withEndIndices&&(l.endIndex=this.parser.endIndex),u.children.push(l),c&&(l.prev=c,c.next=l),l.parent=u,this.lastNode=null},a}();e.DomHandler=s,e.default=s})(nw);var NN={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES=void 0,e.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES.reduce(function(t,n){return t[n.toLowerCase()]=n,t},{})})(NN);Object.defineProperty(aa,"__esModule",{value:!0});aa.formatDOM=aa.formatAttributes=void 0;var mf=nw,iie=NN;function oie(e){return iie.CASE_SENSITIVE_TAG_NAMES_MAP[e]}function $N(e){for(var t={},n=0,r=e.length;n<r;n++){var i=e[n];t[i.name]=i.value}return t}aa.formatAttributes=$N;function sie(e){e=e.toLowerCase();var t=oie(e);return t||e}function DN(e,t,n){t===void 0&&(t=null);for(var r=[],i,o=0,s=e.length;o<s;o++){var a=e[o];switch(a.nodeType){case 1:{var l=sie(a.nodeName);i=new mf.Element(l,$N(a.attributes)),i.children=DN(l==="template"?a.content.childNodes:a.childNodes,i);break}case 3:i=new mf.Text(a.nodeValue);break;case 8:i=new mf.Comment(a.nodeValue);break;default:continue}var u=r[o-1]||null;u&&(u.next=i),i.parent=t,i.prev=u,i.next=null,r.push(i)}return n&&(i=new mf.ProcessingInstruction(n.substring(0,n.indexOf(" ")).toLowerCase(),n),i.next=r[0]||null,i.parent=t,r.unshift(i),r[1]&&(r[1].prev=r[0])),r}aa.formatDOM=DN;var aie=Oe&&Oe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ew,"__esModule",{value:!0});var lie=aie(tw),uie=aa,cie=/<(![a-zA-Z\s]+)>/;function fie(e){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];var t=e.match(cie),n=t?t[1]:void 0;return(0,uie.formatDOM)((0,lie.default)(e),null,n)}ew.default=fie;var qp={},Xn={},Gp={},die=0;Gp.SAME=die;var hie=1;Gp.CAMELCASE=hie;Gp.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};const MN=0,qi=1,Kp=2,Yp=3,sw=4,LN=5,jN=6;function pie(e){return xt.hasOwnProperty(e)?xt[e]:null}function Kt(e,t,n,r,i,o,s){this.acceptsBooleans=t===Kp||t===Yp||t===sw,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}const xt={},mie=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];mie.forEach(e=>{xt[e]=new Kt(e,MN,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([e,t])=>{xt[e]=new Kt(e,qi,!1,t,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(e=>{xt[e]=new Kt(e,Kp,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(e=>{xt[e]=new Kt(e,Kp,!1,e,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(e=>{xt[e]=new Kt(e,Yp,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(e=>{xt[e]=new Kt(e,Yp,!0,e,null,!1,!1)});["capture","download"].forEach(e=>{xt[e]=new Kt(e,sw,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(e=>{xt[e]=new Kt(e,jN,!1,e,null,!1,!1)});["rowSpan","start"].forEach(e=>{xt[e]=new Kt(e,LN,!1,e.toLowerCase(),null,!1,!1)});const aw=/[\-\:]([a-z])/g,lw=e=>e[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(e=>{const t=e.replace(aw,lw);xt[t]=new Kt(t,qi,!1,e,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(e=>{const t=e.replace(aw,lw);xt[t]=new Kt(t,qi,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(e=>{const t=e.replace(aw,lw);xt[t]=new Kt(t,qi,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(e=>{xt[e]=new Kt(e,qi,!1,e.toLowerCase(),null,!1,!1)});const gie="xlinkHref";xt[gie]=new Kt("xlinkHref",qi,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(e=>{xt[e]=new Kt(e,qi,!1,e.toLowerCase(),null,!0,!0)});const{CAMELCASE:vie,SAME:yie,possibleStandardNames:kI}=Gp,_ie=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",wie=_ie+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",Eie=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+wie+"]*$")),Sie=Object.keys(kI).reduce((e,t)=>{const n=kI[t];return n===yie?e[t]=t:n===vie?e[t.toLowerCase()]=t:e[t]=n,e},{});Xn.BOOLEAN=Yp;Xn.BOOLEANISH_STRING=Kp;Xn.NUMERIC=LN;Xn.OVERLOADED_BOOLEAN=sw;Xn.POSITIVE_NUMERIC=jN;Xn.RESERVED=MN;Xn.STRING=qi;Xn.getPropertyInfo=pie;Xn.isCustomAttribute=Eie;Xn.possibleStandardNames=Sie;var uw={},cw={},fw={},AI=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,bie=/\n/g,Tie=/^\s*/,Iie=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Cie=/^:\s*/,xie=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,kie=/^[;\s]*/,Aie=/^\s+|\s+$/g,Pie=`
`,PI="/",RI="*",Ji="",Rie="comment",Oie="declaration",Nie=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var m=g.match(bie);m&&(n+=m.length);var _=g.lastIndexOf(Pie);r=~_?g.length-_:r+g.length}function o(){var g={line:n,column:r};return function(m){return m.position=new s(g),u(),m}}function s(g){this.start=g,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function a(g){var m=new Error(t.source+":"+n+":"+r+": "+g);if(m.reason=g,m.filename=t.source,m.line=n,m.column=r,m.source=e,!t.silent)throw m}function l(g){var m=g.exec(e);if(m){var _=m[0];return i(_),e=e.slice(_.length),m}}function u(){l(Tie)}function c(g){var m;for(g=g||[];m=f();)m!==!1&&g.push(m);return g}function f(){var g=o();if(!(PI!=e.charAt(0)||RI!=e.charAt(1))){for(var m=2;Ji!=e.charAt(m)&&(RI!=e.charAt(m)||PI!=e.charAt(m+1));)++m;if(m+=2,Ji===e.charAt(m-1))return a("End of comment missing");var _=e.slice(2,m-2);return r+=2,i(_),e=e.slice(m),r+=2,g({type:Rie,comment:_})}}function d(){var g=o(),m=l(Iie);if(m){if(f(),!l(Cie))return a("property missing ':'");var _=l(xie),v=g({type:Oie,property:OI(m[0].replace(AI,Ji)),value:_?OI(_[0].replace(AI,Ji)):Ji});return l(kie),v}}function p(){var g=[];c(g);for(var m;m=d();)m!==!1&&(g.push(m),c(g));return g}return u(),p()};function OI(e){return e?e.replace(Aie,Ji):Ji}var $ie=Oe&&Oe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fw,"__esModule",{value:!0});var Die=$ie(Nie);function Mie(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,Die.default)(e),i=typeof t=="function";return r.forEach(function(o){if(o.type==="declaration"){var s=o.property,a=o.value;i?t(s,a,o):a&&(n=n||{},n[s]=a)}}),n}fw.default=Mie;var Qp={};Object.defineProperty(Qp,"__esModule",{value:!0});Qp.camelCase=void 0;var Lie=/^--[a-zA-Z0-9-]+$/,jie=/-([a-z])/g,Vie=/^[^-]+$/,Fie=/^-(webkit|moz|ms|o|khtml)-/,Uie=/^-(ms)-/,zie=function(e){return!e||Vie.test(e)||Lie.test(e)},Bie=function(e,t){return t.toUpperCase()},NI=function(e,t){return"".concat(t,"-")},Wie=function(e,t){return t===void 0&&(t={}),zie(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Uie,NI):e=e.replace(Fie,NI),e.replace(jie,Bie))};Qp.camelCase=Wie;var Hie=Oe&&Oe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cw,"__esModule",{value:!0});var qie=Hie(fw),Gie=Qp;function Kie(e,t){var n={};return!e||typeof e!="string"||(0,qie.default)(e,function(r,i){r&&i&&(n[(0,Gie.camelCase)(r,t)]=i)}),n}cw.default=Kie;(function(e){var t=Oe&&Oe.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0}),e.returnFirstArg=e.canTextBeChildOfNode=e.ELEMENTS_WITH_NO_TEXT_CHILDREN=e.PRESERVE_CUSTOM_ATTRIBUTES=e.setStyleProp=e.isCustomComponent=void 0;var n=S,r=t(cw),i=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function o(c,f){return c.includes("-")?!i.has(c):!!(f&&typeof f.is=="string")}e.isCustomComponent=o;var s={reactCompat:!0};function a(c,f){if(typeof c=="string"){if(!c.trim()){f.style={};return}try{f.style=(0,r.default)(c,s)}catch{f.style={}}}}e.setStyleProp=a,e.PRESERVE_CUSTOM_ATTRIBUTES=Number(n.version.split(".")[0])>=16,e.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var l=function(c){return!e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(c.name)};e.canTextBeChildOfNode=l;var u=function(c){return c};e.returnFirstArg=u})(uw);Object.defineProperty(qp,"__esModule",{value:!0});var pl=Xn,$I=uw,Yie=["checked","value"],Qie=["input","select","textarea"],Xie={reset:!0,submit:!0};function Jie(e,t){e===void 0&&(e={});var n={},r=!!(e.type&&Xie[e.type]);for(var i in e){var o=e[i];if((0,pl.isCustomAttribute)(i)){n[i]=o;continue}var s=i.toLowerCase(),a=DI(s);if(a){var l=(0,pl.getPropertyInfo)(a);switch(Yie.includes(a)&&Qie.includes(t)&&!r&&(a=DI("default"+s)),n[a]=o,l&&l.type){case pl.BOOLEAN:n[a]=!0;break;case pl.OVERLOADED_BOOLEAN:o===""&&(n[a]=!0);break}continue}$I.PRESERVE_CUSTOM_ATTRIBUTES&&(n[i]=o)}return(0,$I.setStyleProp)(e.style,n),n}qp.default=Jie;function DI(e){return pl.possibleStandardNames[e]}var dw={},Zie=Oe&&Oe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dw,"__esModule",{value:!0});var wg=S,eoe=Zie(qp),Ll=uw,toe={cloneElement:wg.cloneElement,createElement:wg.createElement,isValidElement:wg.isValidElement};function VN(e,t){for(var n=[],r=typeof(t==null?void 0:t.replace)=="function",i=(t==null?void 0:t.transform)||Ll.returnFirstArg,o=(t==null?void 0:t.library)||toe,s=o.cloneElement,a=o.createElement,l=o.isValidElement,u=e.length,c=0;c<u;c++){var f=e[c];if(r){var d=t.replace(f,c);if(l(d)){u>1&&(d=s(d,{key:d.key||c})),n.push(i(d,f,c));continue}}if(f.type==="text"){var p=!f.data.trim().length;if(p&&f.parent&&!(0,Ll.canTextBeChildOfNode)(f.parent)||t!=null&&t.trim&&p)continue;n.push(i(f.data,f,c));continue}var g=f,m={};noe(g)?((0,Ll.setStyleProp)(g.attribs.style,g.attribs),m=g.attribs):g.attribs&&(m=(0,eoe.default)(g.attribs,g.name));var _=void 0;switch(f.type){case"script":case"style":f.children[0]&&(m.dangerouslySetInnerHTML={__html:f.children[0].data});break;case"tag":f.name==="textarea"&&f.children[0]?m.defaultValue=f.children[0].data:f.children&&f.children.length&&(_=VN(f.children,t));break;default:continue}u>1&&(m.key=c),n.push(i(a(f.name,m,_),f,c))}return n.length===1?n[0]:n}dw.default=VN;function noe(e){return Ll.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&(0,Ll.isCustomComponent)(e.name,e.attribs)}(function(e){var t=Oe&&Oe.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(e,"__esModule",{value:!0}),e.htmlToDOM=e.domToReact=e.attributesToProps=e.Text=e.ProcessingInstruction=e.Element=e.Comment=void 0;var n=t(ew);e.htmlToDOM=n.default;var r=t(qp);e.attributesToProps=r.default;var i=t(dw);e.domToReact=i.default;var o=nw;Object.defineProperty(e,"Comment",{enumerable:!0,get:function(){return o.Comment}}),Object.defineProperty(e,"Element",{enumerable:!0,get:function(){return o.Element}}),Object.defineProperty(e,"ProcessingInstruction",{enumerable:!0,get:function(){return o.ProcessingInstruction}}),Object.defineProperty(e,"Text",{enumerable:!0,get:function(){return o.Text}});var s={lowerCaseAttributeNames:!1};function a(l,u){if(typeof l!="string")throw new TypeError("First argument must be a string");return l?(0,i.default)((0,n.default)(l,(u==null?void 0:u.htmlparser2)||s),u):[]}e.default=a})(wN);const MI=$o(wN),roe=MI.default||MI;let gf;const ioe=new Uint8Array(16);function ooe(){if(!gf&&(gf=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!gf))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return gf(ioe)}const vt=[];for(let e=0;e<256;++e)vt.push((e+256).toString(16).slice(1));function soe(e,t=0){return vt[e[t+0]]+vt[e[t+1]]+vt[e[t+2]]+vt[e[t+3]]+"-"+vt[e[t+4]]+vt[e[t+5]]+"-"+vt[e[t+6]]+vt[e[t+7]]+"-"+vt[e[t+8]]+vt[e[t+9]]+"-"+vt[e[t+10]]+vt[e[t+11]]+vt[e[t+12]]+vt[e[t+13]]+vt[e[t+14]]+vt[e[t+15]]}const aoe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),LI={randomUUID:aoe};function jI(e,t,n){if(LI.randomUUID&&!t&&!e)return LI.randomUUID();e=e||{};const r=e.random||(e.rng||ooe)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return soe(r)}const loe=()=>{const{addProductAndQuantityToCart:e,setCartItemIsAdded:t}=S.useContext(Uo),n=Uu(),{product:r}=n.state,{name:i,imageUrl:o,sizesAndPrices:s,description:a}=r,l=roe(a),u=s[0].price,[c,f]=S.useState(u),[d,p]=S.useState(s[0].size),[g,m]=S.useState(1),[_,v]=S.useState(jI());S.useEffect(()=>{v(jI())},[d]);const h=b=>{const R=b.target.value,j=s.find(O=>O.size===R);console.log(j),j&&(p(j.size),f(j.price))};console.log(c);const y=b=>{const R=b.target.value;console.log(typeof R),/^\d*$/.test(R)&&m(R===""?"":parseInt(R,10))},E=()=>{m(b=>typeof b=="number"?b+1:1)},T=()=>{m(b=>typeof b=="number"&&b>1?b-1:1)},I=()=>{typeof g=="number"&&g>0?(e(r,d,c,g,_),m(1),t(!0),setTimeout(()=>t(!1),3e3)):console.log(`Invalid quantity: ${g}`)};return r?w.jsxs(Jee,{children:[w.jsx(Zee,{children:w.jsx("img",{src:o,alt:i})}),w.jsxs(ete,{children:[w.jsx("h2",{children:i}),w.jsxs("h3",{children:["Price/item: $ ",c]}),w.jsxs(tte,{children:[w.jsxs(nte,{children:[w.jsx("label",{children:"OPTIONS"}),w.jsx("select",{value:d.size,onChange:h,children:s.map(b=>w.jsx("option",{value:b.size,children:b.size},b.size))})]}),w.jsxs(rte,{children:[w.jsx("label",{children:"QUANTITY"}),w.jsxs(L_,{children:[w.jsx(oa,{buttonType:ot.default,onClick:T,children:"-"}),w.jsx(j_,{type:"text",value:g,onChange:y}),w.jsx(oa,{buttonType:ot.default,onClick:E,children:"+"})]})]}),w.jsx(ite,{buttonType:ot.google,onClick:I,children:"Add to Cart"})]}),w.jsx(ote,{children:l})]})]}):w.jsx("h1",{children:"Whoops, looks like there was an error loading the page!"})},uoe=k.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;
    font-family: "Architects Daughter", cursive;
    font-weight: bold;

    span {
        margin-left: auto;
        font-size: 30px;
    }
 `,coe=k.div`
   display: flex;
   flex-direction: column;
`,foe=k.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    border: 1px solid black;
`,doe=k.div`
    display: flex;
    margin-left: auto;
`,hoe=k(Yn)`
    border-radius: 2px;
    font-size: 26px;
`,poe=k(Yn)`
    border-radius: 2px;
    font-size: 26px;
`,moe=k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid black;
`,goe=k.div`
    width: 30%;

    img {
        height: 250px;
        width: 250px;
        object-fit: cover;
    }
`,voe=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
`,yoe=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    margin-right: 20px;

    span {
        font-size: 25px;
    }
`,_oe=k(L_)`
    width: 10%;
`,woe=({cartItem:e})=>{const{imageUrl:t,itemPrice:n,name:r,quantity:i,selectedSize:o,id:s,key:a}=e,{cartItems:l,setCartItems:u,addOneItemToCart:c,removeOneItemFromCart:f}=S.useContext(Uo),d=m=>{const _=m.target.value,v=l.find(h=>h.id===s&&h.selectedSize===o&&h.key===a);if(/^\d*$/.test(_)&&v){const h=l.map(y=>y.id===s&&y.selectedSize===o&&y.key===a?{...y,quantity:_===""?"":parseInt(_,10)}:y);u(h)}},p=()=>f(e,o,a),g=()=>c(e,o,a);return w.jsxs(moe,{children:[w.jsx(goe,{children:w.jsx("img",{src:t,alt:r})}),w.jsxs(voe,{children:[w.jsx("h2",{children:r}),w.jsx("h4",{children:o})]}),w.jsxs(_oe,{children:[w.jsx(oa,{buttonType:ot.default,onClick:p,children:"-"}),w.jsx(j_,{type:"number",value:i,onChange:d}),w.jsx(oa,{buttonType:ot.default,onClick:g,children:"+"})]}),w.jsx(yoe,{children:w.jsxs("span",{children:["$ ",i*n]})})]})},Eoe=()=>{const e=Vi(),{cartItems:t,cartTotal:n}=S.useContext(Uo),r=()=>e("/"),i=()=>e("/checkout");return w.jsxs(uoe,{children:[w.jsxs(coe,{children:[w.jsx("h1",{children:"SHOPPING CART"}),w.jsx(foe,{children:t.map(o=>w.jsx(woe,{cartItem:o},o.key))})]}),w.jsxs("span",{children:["Sub-total: $ ",n]}),w.jsxs(doe,{children:[w.jsx(poe,{buttonType:ot.default,onClick:r,children:"Return to Home"}),w.jsx(hoe,{buttonType:ot.google,onClick:i,children:"Checkout"})]})]})},FN=bo`
  top: 2px;
  font-size: 10px;
`,Soe=k.div`
  position: relative;
`,UN=k.label`
    color: rgb(115, 115, 115);
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 15px;
    transition: 200ms ease all;

    //if shrink is truthy, then apply the shrinkLabelStyles
    //destructuring shrink directly off of props
    ${({$shrink:e})=>e&&FN};
`,boe=k.input`
  font-size: 16px;
  width: 100%;
  border-radius: 2.5px;
  border: 1px solid black;

  //adjacent sibling selector => when the input is focused, target adjacent sibling (which is Label) and apply the shrinkLabelStyles styling
  
  &:focus ~ ${UN} {
    ${FN};
  }
`,Zr=({label:e,...t})=>w.jsxs(Soe,{children:[w.jsx(boe,{...t}),e&&w.jsx(UN,{$shrink:!!(t.value&&t.value&&typeof t.value=="string"&&t.value.length),children:e})]}),Toe=k.div`
    width: 80%;
    margin: auto;
`,Ioe=k.div`
    width: 50%;

    input {
        height: 40px;
    }

`,Coe=k.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label:first-child {
        font-size: 30px;
        margin-bottom: 10px;
    }

    input:focus {
        border: 1px solid red;
    }

    margin-bottom: 30px;
`,xoe=k.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    button {
        border: 1px solid black;
    }

    #delivery-label {
        font-size: 30px;
        margin-bottom: 10px;
    }
`,koe=k.div`
    position: relative;

    label {
        position: absolute;
        font-size: 12px;
        text-transform: uppercase;
        top: 6px;
        left: 10px;
        color: rgb(102, 102, 102);
        cursor: pointer;
    }
`,Aoe=k.button`
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border: 1px solid rgb(128,128,128);
    border-radius: 2.5px;
    cursor: pointer;
    height: 45px;
    padding-top: 25px;
    text-align: left;
`,Poe=k.div`
    position: absolute;
    width: 100%;
    height: 250px;
    overflow: scroll;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: -1;

    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
    
    ${({$isOpen:e})=>e&&"opacity: 1; transform: translateY(0); z-index: 1"};
`,Roe=k.div`
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`,Ooe=k.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(209, 209, 209);
`,Noe=k.input`
//   margin-left: auto;
  display: block;
  width: 98%
`,$oe=k.div`
  background-color: rgb(209, 209, 209);
`,Doe=k.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    input {
        width: 100%;

        &:first-child {
            margin-right: 15px;
        }
    }
`,Moe=k.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
        margin-bottom: 10px;
    }
`,Loe=k.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    input {
        width: 172px;
    }
`,joe=k.div`
    position: relative;

    label {
        position: absolute;
        top: 2px;
        left: 18px;
        cursor: pointer;
        color: rgb(128, 128, 128);
    }


`,Voe=k.button`
    width: 140px;
    height: 45px;
    border-radius: 2px;
    cursor: pointer;
    text-align: left;
    margin: 0 10px;
    padding-top: 20px;
    background-color: #fff;
`,Foe=k.div`
    position: absolute;
    background-color: rgb(209, 209, 209);
    cursor: pointer;
    left: 10px;
    width: 140px;
    height: 300px;
    overflow: scroll;
    z-index: 1;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;

    ${({$isOpen:e})=>e&&"opacity: 1; transform: translateY(0)"};
`,Uoe=k.div`
    cursor: pointer;
    padding: 12px 16px;
    &:hover {
        background-color: #ddd;
    }
`,zoe=k.div`
    // position: relative;

    .add {
        margin: 10px;
    }
`,Boe=k.span`
    color: rgb(204, 51, 51);
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: rgb(255, 0, 0);
    }
`,Woe=k(Zr)`
    width: 100%;
    transform: translateY(-10px);
    opacity: 0;
    transition: opacity 100ms ease-in-out; transform 100ms ease-in-out;

    label {
        opacity: 0;
    }

    ${({$isDisplayed:e})=>e?"opacity: 1; transform: translateY(0);":"opacity: 0; transform:translateY(0); pointer-events: auto"}
  
`,VI=["Åland Islands","Albania","Andorra","Argentina","Armenia","Australia","Austria","Belarus","Belgium","Bosnia & Herzegovina","Brazil","Brunei","Bulgaria","Canada","Chile","Colombia","Cook Islands","Costa Rica","Croatia","Cyprus","Czechia","Denmark","Faroe Islands","Fiji","Finland","France","French Polynesia","Georgia","Germany","Gibraltar","Greece","Greenland","Guadaloupe","Guernsey","Hong Kong SAR","Iceland","India","Ireland","Isle of Man","Israel","Italy","Japan","Jersey","Kiribati","Kosovo","Kuwait","Latvia","Lichtenstein","Lithuania","Luxembourg","Malaysia","Malta","Mayotte","Moldova","Monaco","Montenegro","Nauru","Netherlands","New Caledonia","New Zealand","Niue","Norfolk Island","North Macedonia","Norway","Pakistan","Papua New Guinea","Philippines","Pitcairn Islands","Poland","Portugal","Qatar","Réunion","Samoa","San Maria","Saudi Arabia","Serbia","Singapore","Slovakia","Slovenia","Solomon Islands","South Africa","South Korea","Spain","Svalbard & Jan Mayen","Sweden","Switzerland","Taiwan","Timor-Leste","Tokelau","Tonga","Türkiye","Tuvalu","Ukraine","United Arab Emirates","United Kingdom","United States","Vanuatu","Vatican City","Wallis & Futuna"],Hoe=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],qoe=k(Yn)`
    font-size: 20px;
    border-radius: 2.5px;
`,Goe=k.div`
    display: flex;
    height: 200px;
    width: 100%;
    flex-direction: column;
    margin: 20px 0;
    border: 2px solid black;

    button {
        width: 50%;
        margin-left: auto;
        margin-top: 50px;
    }
`;k.form`
    height: 100px;
    min-width: 500px;

`;const Koe=()=>w.jsxs(Goe,{children:[w.jsx("h2",{children:"Credit Card Payment:"}),w.jsx(Ek,{}),w.jsx(qoe,{buttonType:ot.google,children:"PAY NOW"})]}),Yoe=k(Yn)`
    font-size: 20px;
    border-radius: 2.5px;
`,Qoe=k.div`
    display: flex;
    height: 200px;
    width: 100%;
    flex-direction: column;
    margin: 20px 0;

    button {
        width: 50%;
        margin-left: auto;
        margin-top: 50px;
    }
`,Xoe=k.form`
    height: 100px;
    min-width: 500px;
`,Joe=()=>{const[e,t]=S.useState(""),n=wk(),r=_k();S.useEffect(()=>{const o=fetch("/.netlify/functions/create-payment-intent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:1e4})}).then(s=>s.json()).then(s=>{console.log(s);const{paymentIntent:{client_secret:a}}=s;console.log(a),t(a)});console.log(o)},[]);const i=async o=>{if(o.preventDefault(),!n||!r)return;const{error:s}=await r.submit();if(s){console.log(s);return}const a=await n.confirmPayment({elements:r,clientSecret:e,confirmParams:{return_url:"https://sandra-sanchez-art.netlify.app"}});console.log(a),a.error?alert(a.error):a&&(alert("Payment Successful!"),console.log(a))};return w.jsx(Qoe,{children:w.jsxs(Xoe,{onSubmit:i,children:[w.jsx(F4,{}),w.jsx(Yoe,{buttonType:ot.google,id:"submit",children:"Submit"})]})})},Zoe=()=>{const{currentUser:e}=S.useContext(gc),t=S.useRef(null),n=S.useRef(null),[r,i]=S.useState(!1),[o,s]=S.useState(!1),[a,l]=S.useState(VI),[u,c]=S.useState("United States"),[f,d]=S.useState(""),[p,g]=S.useState(Hoe),[m,_]=S.useState("California"),[v,h]=S.useState(a),[y,E]=S.useState({email:"",firstName:"",lastName:"",company:"",streetAddress:"",city:"",state:"",zipOrPostalCode:"",additionalAddress:""}),{email:T,firstName:I,lastName:b,company:R,streetAddress:j,city:O,state:ue,zipOrPostalCode:ye,additionalAddress:Le}=y,[Be,_n]=S.useState(!1),wn=()=>i(!r),_e=()=>s(!o),$=()=>_n(!Be),D=X=>{const{name:ut,value:sn}=X.target;E({...y,[ut]:sn})},H=X=>{X.stopPropagation(),X.preventDefault(),wn()},se=X=>{X.preventDefault(),X.stopPropagation(),_e()},ae=X=>{d(X.target.value)},on=X=>{X.stopPropagation();const ut=X.target.textContent;c(ut||""),i(!1),d("")},at=X=>{X.stopPropagation();const ut=X.target.textContent;_(ut),s(!1)},En=()=>{E({email:"",firstName:"",lastName:"",company:"",streetAddress:"",city:"",state:"",zipOrPostalCode:"",additionalAddress:""})},lt=wk(),Ft=_k(),ve=async X=>{if(X.preventDefault(),!lt||!Ft)return;const ut={name:e?e.displayName:`${I} ${b}`,email:e?e.email:T,address:Le.length?`${j}, ${Le}`:`${j}`},sn=await fetch("/.netlify/functions/create-payment-intent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:1e4,customerInformation:ut})}).then(zN=>zN.json());console.log(sn);const{paymentIntent:{client_secret:$n}}=sn;console.log($n);const wc=await lt.confirmCardPayment($n,{payment_method:{card:Ft.getElement(Ek),billing_details:ut}});wc.error?alert(wc.error):wc.paymentIntent.status==="succeeded"&&(alert("Payment Successful!"),console.log(wc),En())};return S.useEffect(()=>{const X=ut=>{const sn=ut.target;t.current&&!t.current.contains(sn)&&i(!1)};return document.body.addEventListener("click",X),()=>document.body.removeEventListener("click",X)},[r]),S.useEffect(()=>{const X=VI.filter(ut=>ut.toLowerCase().includes(f.toLowerCase()));h(X)},[f,a]),S.useEffect(()=>{const X=ut=>{const sn=ut.target;n.current&&!n.current.contains(sn)&&s(!1)};return document.body.addEventListener("click",X),()=>document.body.removeEventListener("click",X)},[o]),w.jsxs(Toe,{children:[w.jsx(Ioe,{children:w.jsxs("form",{onSubmit:ve,children:[w.jsxs(Coe,{children:[w.jsx("label",{children:"Contact"}),w.jsx(Zr,{label:"Email",type:"email",name:"email",value:T,onChange:D,required:!0})]}),w.jsxs(xoe,{children:[w.jsx("label",{id:"delivery-label",children:"Delivery"}),w.jsxs(koe,{children:[w.jsx("label",{htmlFor:"countrySelect",onClick:H,children:"Select Country/Region"}),w.jsx(Aoe,{type:"button",onClick:H,children:u}),w.jsxs(Poe,{$isOpen:r,ref:t,children:[w.jsx(Ooe,{children:w.jsx(Noe,{type:"text",placeholder:"Search Countries...",value:f,onChange:ae})}),w.jsx($oe,{children:v.map(X=>w.jsx(Roe,{onClick:on,children:X},X))})]})]}),w.jsxs(Doe,{children:[w.jsx(Zr,{label:"First Name",type:"text",name:"firstName",value:I,onChange:D,required:!0}),w.jsx(Zr,{label:"Last Name",type:"text",name:"lastName",value:b,onChange:D,required:!0})]}),w.jsxs(Moe,{children:[w.jsx(Zr,{label:"Company (optional)",type:"text",name:"company",value:R,onChange:D}),w.jsx(Zr,{label:"Address",type:"text",name:"streetAddress",value:j,onChange:D,required:!0}),w.jsxs(Loe,{children:[w.jsx(Zr,{label:"City",name:"city",value:O,onChange:D,required:!0}),w.jsxs(joe,{children:[w.jsx("label",{onClick:se,children:"Select State"}),w.jsx(Voe,{onClick:se,children:m}),w.jsx(Foe,{$isOpen:o,ref:n,children:p.map(X=>w.jsx(Uoe,{onClick:at,children:X},X))})]}),w.jsx(Zr,{label:"Zip / Postal Code",name:"zipOrPostalCode",value:ye,required:!0})]}),w.jsxs(zoe,{children:[w.jsx(Boe,{onClick:$,className:"add",children:"+ Add appartment, suite, etc"}),w.jsx(Woe,{label:Be?"Apartment, suite, etc. (optional)":"",$isDisplayed:Be,type:"text",name:"additionalAddress",value:Le,onChange:D})]})]})]}),w.jsx(Koe,{})]})}),w.jsx(Joe,{})]})},ese=()=>{const{setCategoriesMap:e}=S.useContext(H0);return S.useEffect(()=>{(async()=>{try{const n=await Nee();console.log("Logging categories map from App component!: ",n),e(n)}catch(n){console.log(n)}})()},[e]),w.jsx(u4,{children:w.jsxs(Mn,{path:"/",element:w.jsx(lte,{}),children:[w.jsx(Mn,{index:!0,element:w.jsx(Are,{})}),w.jsx(Mn,{path:"about",element:w.jsx(Ore,{})}),w.jsx(Mn,{path:"mentoring",element:w.jsx(Nre,{})}),w.jsx(Mn,{path:"contact",element:w.jsx($re,{})}),w.jsx(Mn,{path:"shop/:category",element:w.jsx(Jre,{})}),w.jsx(Mn,{path:"shop/:category/:id",element:w.jsx(loe,{})}),w.jsx(Mn,{path:"authentication",element:w.jsx(Gre,{})}),w.jsx(Mn,{path:"cart-summary",element:w.jsx(Eoe,{})}),w.jsx(Mn,{path:"checkout",element:w.jsx(Zoe,{})})]})})};Eg.createRoot(document.getElementById("root")).render(w.jsx(q.StrictMode,{children:w.jsx(m4,{children:w.jsx(J4,{children:w.jsx(jee,{children:w.jsx(Bee,{children:w.jsx(yk,{stripe:Q4,options:X4,children:w.jsx(ese,{})})})})})})}))});export default tse();
