var GN=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var vse=GN((Sse,Xy)=>{function KN(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Do(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function QN(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var qI={exports:{}},lh={},GI={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u=Symbol.for("react.element"),YN=Symbol.for("react.portal"),XN=Symbol.for("react.fragment"),JN=Symbol.for("react.strict_mode"),ZN=Symbol.for("react.profiler"),eD=Symbol.for("react.provider"),tD=Symbol.for("react.context"),nD=Symbol.for("react.forward_ref"),rD=Symbol.for("react.suspense"),iD=Symbol.for("react.memo"),oD=Symbol.for("react.lazy"),_w=Symbol.iterator;function sD(t){return t===null||typeof t!="object"?null:(t=_w&&t[_w]||t["@@iterator"],typeof t=="function"?t:null)}var KI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},QI=Object.assign,YI={};function aa(t,e,n){this.props=t,this.context=e,this.refs=YI,this.updater=n||KI}aa.prototype.isReactComponent={};aa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};aa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function XI(){}XI.prototype=aa.prototype;function Jy(t,e,n){this.props=t,this.context=e,this.refs=YI,this.updater=n||KI}var Zy=Jy.prototype=new XI;Zy.constructor=Jy;QI(Zy,aa.prototype);Zy.isPureReactComponent=!0;var ww=Array.isArray,JI=Object.prototype.hasOwnProperty,e0={current:null},ZI={key:!0,ref:!0,__self:!0,__source:!0};function eC(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)JI.call(e,r)&&!ZI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$u,type:t,key:o,ref:s,props:i,_owner:e0.current}}function aD(t,e){return{$$typeof:$u,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function t0(t){return typeof t=="object"&&t!==null&&t.$$typeof===$u}function lD(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ew=/\/+/g;function rm(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lD(""+t.key):e.toString(36)}function gf(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case $u:case YN:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+rm(s,0):r,ww(i)?(n="",t!=null&&(n=t.replace(Ew,"$&/")+"/"),gf(i,e,n,"",function(u){return u})):i!=null&&(t0(i)&&(i=aD(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ew,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",ww(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+rm(o,a);s+=gf(o,e,n,l,i)}else if(l=sD(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+rm(o,a++),s+=gf(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function wc(t,e,n){if(t==null)return t;var r=[],i=0;return gf(t,r,"","",function(o){return e.call(n,o,i++)}),r}function uD(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},vf={transition:null},cD={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:vf,ReactCurrentOwner:e0};re.Children={map:wc,forEach:function(t,e,n){wc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wc(t,function(){e++}),e},toArray:function(t){return wc(t,function(e){return e})||[]},only:function(t){if(!t0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=aa;re.Fragment=XN;re.Profiler=ZN;re.PureComponent=Jy;re.StrictMode=JN;re.Suspense=rD;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cD;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=QI({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=e0.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)JI.call(e,l)&&!ZI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$u,type:t.type,key:i,ref:o,props:r,_owner:s}};re.createContext=function(t){return t={$$typeof:tD,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eD,_context:t},t.Consumer=t};re.createElement=eC;re.createFactory=function(t){var e=eC.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:nD,render:t}};re.isValidElement=t0;re.lazy=function(t){return{$$typeof:oD,_payload:{_status:-1,_result:t},_init:uD}};re.memo=function(t,e){return{$$typeof:iD,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=vf.transition;vf.transition={};try{t()}finally{vf.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return Bt.current.useCallback(t,e)};re.useContext=function(t){return Bt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Bt.current.useEffect(t,e)};re.useId=function(){return Bt.current.useId()};re.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Bt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};re.useRef=function(t){return Bt.current.useRef(t)};re.useState=function(t){return Bt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Bt.current.useTransition()};re.version="18.2.0";GI.exports=re;var b=GI.exports;const H=Do(b),Xf=KN({__proto__:null,default:H},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fD=b,dD=Symbol.for("react.element"),hD=Symbol.for("react.fragment"),pD=Object.prototype.hasOwnProperty,mD=fD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gD={key:!0,ref:!0,__self:!0,__source:!0};function tC(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)pD.call(e,r)&&!gD.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dD,type:t,key:o,ref:s,props:i,_owner:mD.current}}lh.Fragment=hD;lh.jsx=tC;lh.jsxs=tC;qI.exports=lh;var w=qI.exports,xg={},nC={exports:{}},cn={},rC={exports:{}},iC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,U){var q=M.length;M.push(U);e:for(;0<q;){var fe=q-1>>>1,ae=M[fe];if(0<i(ae,U))M[fe]=U,M[q]=ae,q=fe;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var U=M[0],q=M.pop();if(q!==U){M[0]=q;e:for(var fe=0,ae=M.length,kn=ae>>>1;fe<kn;){var It=2*(fe+1)-1,Gn=M[It],Lt=It+1,pn=M[Lt];if(0>i(Gn,q))Lt<ae&&0>i(pn,Gn)?(M[fe]=pn,M[Lt]=q,fe=Lt):(M[fe]=Gn,M[It]=q,fe=It);else if(Lt<ae&&0>i(pn,q))M[fe]=pn,M[Lt]=q,fe=Lt;else break e}}return U}function i(M,U){var q=M.sortIndex-U.sortIndex;return q!==0?q:M.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,h=!1,g=!1,m=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(M){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=M)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function E(M){if(m=!1,y(M),!g)if(n(l)!==null)g=!0,qn(S);else{var U=n(u);U!==null&&ke(E,U.startTime-M)}}function S(M,U){g=!1,m&&(m=!1,v(O),O=-1),h=!0;var q=d;try{for(y(U),f=n(l);f!==null&&(!(f.expirationTime>U)||M&&!te());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,d=f.priorityLevel;var ae=fe(f.expirationTime<=U);U=t.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),y(U)}else r(l);f=n(l)}if(f!==null)var kn=!0;else{var It=n(u);It!==null&&ke(E,It.startTime-U),kn=!1}return kn}finally{f=null,d=q,h=!1}}var I=!1,T=null,O=-1,$=5,R=-1;function te(){return!(t.unstable_now()-R<$)}function ge(){if(T!==null){var M=t.unstable_now();R=M;var U=!0;try{U=T(!0,M)}finally{U?ot():(I=!1,T=null)}}else I=!1}var ot;if(typeof p=="function")ot=function(){p(ge)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Hn=ht.port2;ht.port1.onmessage=ge,ot=function(){Hn.postMessage(null)}}else ot=function(){_(ge,0)};function qn(M){T=M,I||(I=!0,ot())}function ke(M,U){O=_(function(){M(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,qn(S))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var q=d;d=U;try{return M()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,U){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var q=d;d=M;try{return U()}finally{d=q}},t.unstable_scheduleCallback=function(M,U,q){var fe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?fe+q:fe):q=fe,M){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=q+ae,M={id:c++,callback:U,priorityLevel:M,startTime:q,expirationTime:ae,sortIndex:-1},q>fe?(M.sortIndex=q,e(u,M),n(l)===null&&M===n(u)&&(m?(v(O),O=-1):m=!0,ke(E,q-fe))):(M.sortIndex=ae,e(l,M),g||h||(g=!0,qn(S))),M},t.unstable_shouldYield=te,t.unstable_wrapCallback=function(M){var U=d;return function(){var q=d;d=U;try{return M.apply(this,arguments)}finally{d=q}}}})(iC);rC.exports=iC;var vD=rC.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oC=b,ln=vD;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sC=new Set,jl={};function $o(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(jl[t]=e,t=0;t<e.length;t++)sC.add(e[t])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kg=Object.prototype.hasOwnProperty,yD=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sw={},bw={};function _D(t){return kg.call(bw,t)?!0:kg.call(Sw,t)?!1:yD.test(t)?bw[t]=!0:(Sw[t]=!0,!1)}function wD(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ED(t,e,n,r){if(e===null||typeof e>"u"||wD(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var n0=/[\-:]([a-z])/g;function r0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(n0,r0);bt[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(n0,r0);bt[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(n0,r0);bt[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function i0(t,e,n,r){var i=bt.hasOwnProperty(e)?bt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ED(e,n,i,r)&&(n=null),r||i===null?_D(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vr=oC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ec=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),o0=Symbol.for("react.strict_mode"),Ag=Symbol.for("react.profiler"),aC=Symbol.for("react.provider"),lC=Symbol.for("react.context"),s0=Symbol.for("react.forward_ref"),Pg=Symbol.for("react.suspense"),Rg=Symbol.for("react.suspense_list"),a0=Symbol.for("react.memo"),Zr=Symbol.for("react.lazy"),uC=Symbol.for("react.offscreen"),Tw=Symbol.iterator;function Oa(t){return t===null||typeof t!="object"?null:(t=Tw&&t[Tw]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,im;function Ja(t){if(im===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);im=e&&e[1]||""}return`
`+im+t}var om=!1;function sm(t,e){if(!t||om)return"";om=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{om=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ja(t):""}function SD(t){switch(t.tag){case 5:return Ja(t.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 2:case 15:return t=sm(t.type,!1),t;case 11:return t=sm(t.type.render,!1),t;case 1:return t=sm(t.type,!0),t;default:return""}}function Og(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case Ag:return"Profiler";case o0:return"StrictMode";case Pg:return"Suspense";case Rg:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lC:return(t.displayName||"Context")+".Consumer";case aC:return(t._context.displayName||"Context")+".Provider";case s0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case a0:return e=t.displayName||null,e!==null?e:Og(t.type)||"Memo";case Zr:e=t._payload,t=t._init;try{return Og(t(e))}catch{}}return null}function bD(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Og(e);case 8:return e===o0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cC(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TD(t){var e=cC(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sc(t){t._valueTracker||(t._valueTracker=TD(t))}function fC(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cC(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Jf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ng(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Iw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dC(t,e){e=e.checked,e!=null&&i0(t,"checked",e,!1)}function Dg(t,e){dC(t,e);var n=Ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$g(t,e.type,n):e.hasOwnProperty("defaultValue")&&$g(t,e.type,Ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $g(t,e,n){(e!=="number"||Jf(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Za=Array.isArray;function _s(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Mg(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Za(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ci(n)}}function hC(t,e){var n=Ci(e.value),r=Ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function kw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pC(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lg(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pC(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bc,mC=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bc=bc||document.createElement("div"),bc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var pl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ID=["Webkit","ms","Moz","O"];Object.keys(pl).forEach(function(t){ID.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),pl[e]=pl[t]})});function gC(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||pl.hasOwnProperty(t)&&pl[t]?(""+e).trim():e+"px"}function vC(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gC(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var CD=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jg(t,e){if(e){if(CD[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function Vg(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fg=null;function l0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ug=null,ws=null,Es=null;function Aw(t){if(t=ju(t)){if(typeof Ug!="function")throw Error(P(280));var e=t.stateNode;e&&(e=hh(e),Ug(t.stateNode,t.type,e))}}function yC(t){ws?Es?Es.push(t):Es=[t]:ws=t}function _C(){if(ws){var t=ws,e=Es;if(Es=ws=null,Aw(t),e)for(t=0;t<e.length;t++)Aw(e[t])}}function wC(t,e){return t(e)}function EC(){}var am=!1;function SC(t,e,n){if(am)return t(e,n);am=!0;try{return wC(t,e,n)}finally{am=!1,(ws!==null||Es!==null)&&(EC(),_C())}}function Fl(t,e){var n=t.stateNode;if(n===null)return null;var r=hh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var zg=!1;if(kr)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){zg=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{zg=!1}function xD(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ml=!1,Zf=null,ed=!1,Bg=null,kD={onError:function(t){ml=!0,Zf=t}};function AD(t,e,n,r,i,o,s,a,l){ml=!1,Zf=null,xD.apply(kD,arguments)}function PD(t,e,n,r,i,o,s,a,l){if(AD.apply(this,arguments),ml){if(ml){var u=Zf;ml=!1,Zf=null}else throw Error(P(198));ed||(ed=!0,Bg=u)}}function Mo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bC(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pw(t){if(Mo(t)!==t)throw Error(P(188))}function RD(t){var e=t.alternate;if(!e){if(e=Mo(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Pw(i),t;if(o===r)return Pw(i),e;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function TC(t){return t=RD(t),t!==null?IC(t):null}function IC(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=IC(t);if(e!==null)return e;t=t.sibling}return null}var CC=ln.unstable_scheduleCallback,Rw=ln.unstable_cancelCallback,OD=ln.unstable_shouldYield,ND=ln.unstable_requestPaint,Ue=ln.unstable_now,DD=ln.unstable_getCurrentPriorityLevel,u0=ln.unstable_ImmediatePriority,xC=ln.unstable_UserBlockingPriority,td=ln.unstable_NormalPriority,$D=ln.unstable_LowPriority,kC=ln.unstable_IdlePriority,uh=null,or=null;function MD(t){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(uh,t,void 0,(t.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:VD,LD=Math.log,jD=Math.LN2;function VD(t){return t>>>=0,t===0?32:31-(LD(t)/jD|0)|0}var Tc=64,Ic=4194304;function el(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=el(a):(o&=s,o!==0&&(r=el(o)))}else s=n&~i,s!==0?r=el(s):o!==0&&(r=el(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mn(e),i=1<<n,r|=t[n],e&=~i;return r}function FD(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UD(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Mn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=FD(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Wg(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function AC(){var t=Tc;return Tc<<=1,!(Tc&4194240)&&(Tc=64),t}function lm(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mn(e),t[e]=n}function zD(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function c0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function PC(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var RC,f0,OC,NC,DC,Hg=!1,Cc=[],di=null,hi=null,pi=null,Ul=new Map,zl=new Map,ti=[],BD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ow(t,e){switch(t){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":Ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zl.delete(e.pointerId)}}function Da(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=ju(e),e!==null&&f0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WD(t,e,n,r,i){switch(e){case"focusin":return di=Da(di,t,e,n,r,i),!0;case"dragenter":return hi=Da(hi,t,e,n,r,i),!0;case"mouseover":return pi=Da(pi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ul.set(o,Da(Ul.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,zl.set(o,Da(zl.get(o)||null,t,e,n,r,i)),!0}return!1}function $C(t){var e=Ji(t.target);if(e!==null){var n=Mo(e);if(n!==null){if(e=n.tag,e===13){if(e=bC(n),e!==null){t.blockedOn=e,DC(t.priority,function(){OC(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yf(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qg(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fg=r,n.target.dispatchEvent(r),Fg=null}else return e=ju(n),e!==null&&f0(e),t.blockedOn=n,!1;e.shift()}return!0}function Nw(t,e,n){yf(t)&&n.delete(e)}function HD(){Hg=!1,di!==null&&yf(di)&&(di=null),hi!==null&&yf(hi)&&(hi=null),pi!==null&&yf(pi)&&(pi=null),Ul.forEach(Nw),zl.forEach(Nw)}function $a(t,e){t.blockedOn===e&&(t.blockedOn=null,Hg||(Hg=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,HD)))}function Bl(t){function e(i){return $a(i,t)}if(0<Cc.length){$a(Cc[0],t);for(var n=1;n<Cc.length;n++){var r=Cc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(di!==null&&$a(di,t),hi!==null&&$a(hi,t),pi!==null&&$a(pi,t),Ul.forEach(e),zl.forEach(e),n=0;n<ti.length;n++)r=ti[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ti.length&&(n=ti[0],n.blockedOn===null);)$C(n),n.blockedOn===null&&ti.shift()}var Ss=Vr.ReactCurrentBatchConfig,rd=!0;function qD(t,e,n,r){var i=he,o=Ss.transition;Ss.transition=null;try{he=1,d0(t,e,n,r)}finally{he=i,Ss.transition=o}}function GD(t,e,n,r){var i=he,o=Ss.transition;Ss.transition=null;try{he=4,d0(t,e,n,r)}finally{he=i,Ss.transition=o}}function d0(t,e,n,r){if(rd){var i=qg(t,e,n,r);if(i===null)ym(t,e,r,id,n),Ow(t,r);else if(WD(i,t,e,n,r))r.stopPropagation();else if(Ow(t,r),e&4&&-1<BD.indexOf(t)){for(;i!==null;){var o=ju(i);if(o!==null&&RC(o),o=qg(t,e,n,r),o===null&&ym(t,e,r,id,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ym(t,e,r,null,n)}}var id=null;function qg(t,e,n,r){if(id=null,t=l0(r),t=Ji(t),t!==null)if(e=Mo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bC(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return id=t,null}function MC(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DD()){case u0:return 1;case xC:return 4;case td:case $D:return 16;case kC:return 536870912;default:return 16}default:return 16}}var ai=null,h0=null,_f=null;function LC(){if(_f)return _f;var t,e=h0,n=e.length,r,i="value"in ai?ai.value:ai.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return _f=i.slice(t,1<r?1-r:void 0)}function wf(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xc(){return!0}function Dw(){return!1}function fn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xc:Dw,this.isPropagationStopped=Dw,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){},isPersistent:xc}),e}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},p0=fn(la),Lu=De({},la,{view:0,detail:0}),KD=fn(Lu),um,cm,Ma,ch=De({},Lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:m0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ma&&(Ma&&t.type==="mousemove"?(um=t.screenX-Ma.screenX,cm=t.screenY-Ma.screenY):cm=um=0,Ma=t),um)},movementY:function(t){return"movementY"in t?t.movementY:cm}}),$w=fn(ch),QD=De({},ch,{dataTransfer:0}),YD=fn(QD),XD=De({},Lu,{relatedTarget:0}),fm=fn(XD),JD=De({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),ZD=fn(JD),e$=De({},la,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t$=fn(e$),n$=De({},la,{data:0}),Mw=fn(n$),r$={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i$={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s$(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=o$[t])?!!e[t]:!1}function m0(){return s$}var a$=De({},Lu,{key:function(t){if(t.key){var e=r$[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i$[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:m0,charCode:function(t){return t.type==="keypress"?wf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l$=fn(a$),u$=De({},ch,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lw=fn(u$),c$=De({},Lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:m0}),f$=fn(c$),d$=De({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),h$=fn(d$),p$=De({},ch,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m$=fn(p$),g$=[9,13,27,32],g0=kr&&"CompositionEvent"in window,gl=null;kr&&"documentMode"in document&&(gl=document.documentMode);var v$=kr&&"TextEvent"in window&&!gl,jC=kr&&(!g0||gl&&8<gl&&11>=gl),jw=" ",Vw=!1;function VC(t,e){switch(t){case"keyup":return g$.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function FC(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function y$(t,e){switch(t){case"compositionend":return FC(e);case"keypress":return e.which!==32?null:(Vw=!0,jw);case"textInput":return t=e.data,t===jw&&Vw?null:t;default:return null}}function _$(t,e){if(rs)return t==="compositionend"||!g0&&VC(t,e)?(t=LC(),_f=h0=ai=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jC&&e.locale!=="ko"?null:e.data;default:return null}}var w$={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w$[t.type]:e==="textarea"}function UC(t,e,n,r){yC(r),e=od(e,"onChange"),0<e.length&&(n=new p0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vl=null,Wl=null;function E$(t){JC(t,0)}function fh(t){var e=ss(t);if(fC(e))return t}function S$(t,e){if(t==="change")return e}var zC=!1;if(kr){var dm;if(kr){var hm="oninput"in document;if(!hm){var Uw=document.createElement("div");Uw.setAttribute("oninput","return;"),hm=typeof Uw.oninput=="function"}dm=hm}else dm=!1;zC=dm&&(!document.documentMode||9<document.documentMode)}function zw(){vl&&(vl.detachEvent("onpropertychange",BC),Wl=vl=null)}function BC(t){if(t.propertyName==="value"&&fh(Wl)){var e=[];UC(e,Wl,t,l0(t)),SC(E$,e)}}function b$(t,e,n){t==="focusin"?(zw(),vl=e,Wl=n,vl.attachEvent("onpropertychange",BC)):t==="focusout"&&zw()}function T$(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fh(Wl)}function I$(t,e){if(t==="click")return fh(e)}function C$(t,e){if(t==="input"||t==="change")return fh(e)}function x$(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:x$;function Hl(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kg.call(e,i)||!Fn(t[i],e[i]))return!1}return!0}function Bw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ww(t,e){var n=Bw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bw(n)}}function WC(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?WC(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function HC(){for(var t=window,e=Jf();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jf(t.document)}return e}function v0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function k$(t){var e=HC(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&WC(n.ownerDocument.documentElement,n)){if(r!==null&&v0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Ww(n,o);var s=Ww(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var A$=kr&&"documentMode"in document&&11>=document.documentMode,is=null,Gg=null,yl=null,Kg=!1;function Hw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kg||is==null||is!==Jf(r)||(r=is,"selectionStart"in r&&v0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yl&&Hl(yl,r)||(yl=r,r=od(Gg,"onSelect"),0<r.length&&(e=new p0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=is)))}function kc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:kc("Animation","AnimationEnd"),animationiteration:kc("Animation","AnimationIteration"),animationstart:kc("Animation","AnimationStart"),transitionend:kc("Transition","TransitionEnd")},pm={},qC={};kr&&(qC=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function dh(t){if(pm[t])return pm[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qC)return pm[t]=e[n];return t}var GC=dh("animationend"),KC=dh("animationiteration"),QC=dh("animationstart"),YC=dh("transitionend"),XC=new Map,qw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){XC.set(t,e),$o(e,[t])}for(var mm=0;mm<qw.length;mm++){var gm=qw[mm],P$=gm.toLowerCase(),R$=gm[0].toUpperCase()+gm.slice(1);$i(P$,"on"+R$)}$i(GC,"onAnimationEnd");$i(KC,"onAnimationIteration");$i(QC,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(YC,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);$o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$o("onBeforeInput",["compositionend","keypress","textInput","paste"]);$o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O$=new Set("cancel close invalid load scroll toggle".split(" ").concat(tl));function Gw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PD(r,e,void 0,t),t.currentTarget=null}function JC(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Gw(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Gw(i,a,u),o=l}}}if(ed)throw t=Bg,ed=!1,Bg=null,t}function we(t,e){var n=e[Zg];n===void 0&&(n=e[Zg]=new Set);var r=t+"__bubble";n.has(r)||(ZC(e,t,2,!1),n.add(r))}function vm(t,e,n){var r=0;e&&(r|=4),ZC(n,t,r,e)}var Ac="_reactListening"+Math.random().toString(36).slice(2);function ql(t){if(!t[Ac]){t[Ac]=!0,sC.forEach(function(n){n!=="selectionchange"&&(O$.has(n)||vm(n,!1,t),vm(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ac]||(e[Ac]=!0,vm("selectionchange",!1,e))}}function ZC(t,e,n,r){switch(MC(e)){case 1:var i=qD;break;case 4:i=GD;break;default:i=d0}n=i.bind(null,e,n,t),i=void 0,!zg||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ym(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Ji(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}SC(function(){var u=o,c=l0(n),f=[];e:{var d=XC.get(t);if(d!==void 0){var h=p0,g=t;switch(t){case"keypress":if(wf(n)===0)break e;case"keydown":case"keyup":h=l$;break;case"focusin":g="focus",h=fm;break;case"focusout":g="blur",h=fm;break;case"beforeblur":case"afterblur":h=fm;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=$w;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=YD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=f$;break;case GC:case KC:case QC:h=ZD;break;case YC:h=h$;break;case"scroll":h=KD;break;case"wheel":h=m$;break;case"copy":case"cut":case"paste":h=t$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Lw}var m=(e&4)!==0,_=!m&&t==="scroll",v=m?d!==null?d+"Capture":null:d;m=[];for(var p=u,y;p!==null;){y=p;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,v!==null&&(E=Fl(p,v),E!=null&&m.push(Gl(p,E,y)))),_)break;p=p.return}0<m.length&&(d=new h(d,g,null,n,c),f.push({event:d,listeners:m}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&n!==Fg&&(g=n.relatedTarget||n.fromElement)&&(Ji(g)||g[Ar]))break e;if((h||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?Ji(g):null,g!==null&&(_=Mo(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(m=$w,E="onMouseLeave",v="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(m=Lw,E="onPointerLeave",v="onPointerEnter",p="pointer"),_=h==null?d:ss(h),y=g==null?d:ss(g),d=new m(E,p+"leave",h,n,c),d.target=_,d.relatedTarget=y,E=null,Ji(c)===u&&(m=new m(v,p+"enter",g,n,c),m.target=y,m.relatedTarget=_,E=m),_=E,h&&g)t:{for(m=h,v=g,p=0,y=m;y;y=Uo(y))p++;for(y=0,E=v;E;E=Uo(E))y++;for(;0<p-y;)m=Uo(m),p--;for(;0<y-p;)v=Uo(v),y--;for(;p--;){if(m===v||v!==null&&m===v.alternate)break t;m=Uo(m),v=Uo(v)}m=null}else m=null;h!==null&&Kw(f,d,h,m,!1),g!==null&&_!==null&&Kw(f,_,g,m,!0)}}e:{if(d=u?ss(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var S=S$;else if(Fw(d))if(zC)S=C$;else{S=T$;var I=b$}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=I$);if(S&&(S=S(t,u))){UC(f,S,n,c);break e}I&&I(t,d,u),t==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&$g(d,"number",d.value)}switch(I=u?ss(u):window,t){case"focusin":(Fw(I)||I.contentEditable==="true")&&(is=I,Gg=u,yl=null);break;case"focusout":yl=Gg=is=null;break;case"mousedown":Kg=!0;break;case"contextmenu":case"mouseup":case"dragend":Kg=!1,Hw(f,n,c);break;case"selectionchange":if(A$)break;case"keydown":case"keyup":Hw(f,n,c)}var T;if(g0)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else rs?VC(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(jC&&n.locale!=="ko"&&(rs||O!=="onCompositionStart"?O==="onCompositionEnd"&&rs&&(T=LC()):(ai=c,h0="value"in ai?ai.value:ai.textContent,rs=!0)),I=od(u,O),0<I.length&&(O=new Mw(O,t,null,n,c),f.push({event:O,listeners:I}),T?O.data=T:(T=FC(n),T!==null&&(O.data=T)))),(T=v$?y$(t,n):_$(t,n))&&(u=od(u,"onBeforeInput"),0<u.length&&(c=new Mw("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}JC(f,e)})}function Gl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function od(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fl(t,n),o!=null&&r.unshift(Gl(t,o,i)),o=Fl(t,e),o!=null&&r.push(Gl(t,o,i))),t=t.return}return r}function Uo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kw(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Fl(n,o),l!=null&&s.unshift(Gl(n,l,a))):i||(l=Fl(n,o),l!=null&&s.push(Gl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var N$=/\r\n?/g,D$=/\u0000|\uFFFD/g;function Qw(t){return(typeof t=="string"?t:""+t).replace(N$,`
`).replace(D$,"")}function Pc(t,e,n){if(e=Qw(e),Qw(t)!==e&&n)throw Error(P(425))}function sd(){}var Qg=null,Yg=null;function Xg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jg=typeof setTimeout=="function"?setTimeout:void 0,$$=typeof clearTimeout=="function"?clearTimeout:void 0,Yw=typeof Promise=="function"?Promise:void 0,M$=typeof queueMicrotask=="function"?queueMicrotask:typeof Yw<"u"?function(t){return Yw.resolve(null).then(t).catch(L$)}:Jg;function L$(t){setTimeout(function(){throw t})}function _m(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bl(e)}function mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ua=Math.random().toString(36).slice(2),er="__reactFiber$"+ua,Kl="__reactProps$"+ua,Ar="__reactContainer$"+ua,Zg="__reactEvents$"+ua,j$="__reactListeners$"+ua,V$="__reactHandles$"+ua;function Ji(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xw(t);t!==null;){if(n=t[er])return n;t=Xw(t)}return e}t=n,n=t.parentNode}return null}function ju(t){return t=t[er]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function hh(t){return t[Kl]||null}var ev=[],as=-1;function Mi(t){return{current:t}}function Ce(t){0>as||(t.current=ev[as],ev[as]=null,as--)}function ve(t,e){as++,ev[as]=t.current,t.current=e}var xi={},$t=Mi(xi),Qt=Mi(!1),yo=xi;function Ds(t,e){var n=t.type.contextTypes;if(!n)return xi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Yt(t){return t=t.childContextTypes,t!=null}function ad(){Ce(Qt),Ce($t)}function Jw(t,e,n){if($t.current!==xi)throw Error(P(168));ve($t,e),ve(Qt,n)}function ex(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,bD(t)||"Unknown",i));return De({},n,r)}function ld(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xi,yo=$t.current,ve($t,t),ve(Qt,Qt.current),!0}function Zw(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=ex(t,e,yo),r.__reactInternalMemoizedMergedChildContext=t,Ce(Qt),Ce($t),ve($t,t)):Ce(Qt),ve(Qt,n)}var _r=null,ph=!1,wm=!1;function tx(t){_r===null?_r=[t]:_r.push(t)}function F$(t){ph=!0,tx(t)}function Li(){if(!wm&&_r!==null){wm=!0;var t=0,e=he;try{var n=_r;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_r=null,ph=!1}catch(i){throw _r!==null&&(_r=_r.slice(t+1)),CC(u0,Li),i}finally{he=e,wm=!1}}return null}var ls=[],us=0,ud=null,cd=0,mn=[],gn=0,_o=null,Er=1,Sr="";function Hi(t,e){ls[us++]=cd,ls[us++]=ud,ud=t,cd=e}function nx(t,e,n){mn[gn++]=Er,mn[gn++]=Sr,mn[gn++]=_o,_o=t;var r=Er;t=Sr;var i=32-Mn(r)-1;r&=~(1<<i),n+=1;var o=32-Mn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Er=1<<32-Mn(e)+i|n<<i|r,Sr=o+t}else Er=1<<o|n<<i|r,Sr=t}function y0(t){t.return!==null&&(Hi(t,1),nx(t,1,0))}function _0(t){for(;t===ud;)ud=ls[--us],ls[us]=null,cd=ls[--us],ls[us]=null;for(;t===_o;)_o=mn[--gn],mn[gn]=null,Sr=mn[--gn],mn[gn]=null,Er=mn[--gn],mn[gn]=null}var sn=null,on=null,Pe=!1,Nn=null;function rx(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function eE(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,on=mi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_o!==null?{id:Er,overflow:Sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,on=null,!0):!1;default:return!1}}function tv(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nv(t){if(Pe){var e=on;if(e){var n=e;if(!eE(t,e)){if(tv(t))throw Error(P(418));e=mi(n.nextSibling);var r=sn;e&&eE(t,e)?rx(r,n):(t.flags=t.flags&-4097|2,Pe=!1,sn=t)}}else{if(tv(t))throw Error(P(418));t.flags=t.flags&-4097|2,Pe=!1,sn=t}}}function tE(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function Rc(t){if(t!==sn)return!1;if(!Pe)return tE(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xg(t.type,t.memoizedProps)),e&&(e=on)){if(tv(t))throw ix(),Error(P(418));for(;e;)rx(t,e),e=mi(e.nextSibling)}if(tE(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=mi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=sn?mi(t.stateNode.nextSibling):null;return!0}function ix(){for(var t=on;t;)t=mi(t.nextSibling)}function $s(){on=sn=null,Pe=!1}function w0(t){Nn===null?Nn=[t]:Nn.push(t)}var U$=Vr.ReactCurrentBatchConfig;function Rn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fd=Mi(null),dd=null,cs=null,E0=null;function S0(){E0=cs=dd=null}function b0(t){var e=fd.current;Ce(fd),t._currentValue=e}function rv(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){dd=t,E0=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(E0!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(dd===null)throw Error(P(308));cs=t,dd.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var Zi=null;function T0(t){Zi===null?Zi=[t]:Zi.push(t)}function ox(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,T0(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pr(t,r)}function Pr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ei=!1;function I0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pr(t,n)}return i=r.interleaved,i===null?(e.next=e,T0(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pr(t,n)}function Ef(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,c0(t,n)}}function nE(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hd(t,e,n,r){var i=t.updateQueue;ei=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,h=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,m=a;switch(d=e,h=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){f=g.call(h,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,d=typeof g=="function"?g.call(h,f,d):g,d==null)break e;f=De({},f,d);break e;case 2:ei=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Eo|=s,t.lanes=s,t.memoizedState=f}}function rE(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var ax=new oC.Component().refs;function iv(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mh={isMounted:function(t){return(t=t._reactInternals)?Mo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=yi(t),o=Cr(r,i);o.payload=e,n!=null&&(o.callback=n),e=gi(t,o,i),e!==null&&(Ln(e,t,i,r),Ef(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=yi(t),o=Cr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=gi(t,o,i),e!==null&&(Ln(e,t,i,r),Ef(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ut(),r=yi(t),i=Cr(n,r);i.tag=2,e!=null&&(i.callback=e),e=gi(t,i,r),e!==null&&(Ln(e,t,r,n),Ef(e,t,r))}};function iE(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Hl(n,r)||!Hl(i,o):!0}function lx(t,e,n){var r=!1,i=xi,o=e.contextType;return typeof o=="object"&&o!==null?o=Sn(o):(i=Yt(e)?yo:$t.current,r=e.contextTypes,o=(r=r!=null)?Ds(t,i):xi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function oE(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mh.enqueueReplaceState(e,e.state,null)}function ov(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ax,I0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Sn(o):(o=Yt(e)?yo:$t.current,i.context=Ds(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(iv(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&mh.enqueueReplaceState(i,i.state,null),hd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function La(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===ax&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function Oc(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sE(t){var e=t._init;return e(t._payload)}function ux(t){function e(v,p){if(t){var y=v.deletions;y===null?(v.deletions=[p],v.flags|=16):y.push(p)}}function n(v,p){if(!t)return null;for(;p!==null;)e(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=_i(v,p),v.index=0,v.sibling=null,v}function o(v,p,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<p?(v.flags|=2,p):y):(v.flags|=2,p)):(v.flags|=1048576,p)}function s(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,p,y,E){return p===null||p.tag!==6?(p=xm(y,v.mode,E),p.return=v,p):(p=i(p,y),p.return=v,p)}function l(v,p,y,E){var S=y.type;return S===ns?c(v,p,y.props.children,E,y.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zr&&sE(S)===p.type)?(E=i(p,y.props),E.ref=La(v,p,y),E.return=v,E):(E=xf(y.type,y.key,y.props,null,v.mode,E),E.ref=La(v,p,y),E.return=v,E)}function u(v,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=km(y,v.mode,E),p.return=v,p):(p=i(p,y.children||[]),p.return=v,p)}function c(v,p,y,E,S){return p===null||p.tag!==7?(p=fo(y,v.mode,E,S),p.return=v,p):(p=i(p,y),p.return=v,p)}function f(v,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xm(""+p,v.mode,y),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ec:return y=xf(p.type,p.key,p.props,null,v.mode,y),y.ref=La(v,null,p),y.return=v,y;case ts:return p=km(p,v.mode,y),p.return=v,p;case Zr:var E=p._init;return f(v,E(p._payload),y)}if(Za(p)||Oa(p))return p=fo(p,v.mode,y,null),p.return=v,p;Oc(v,p)}return null}function d(v,p,y,E){var S=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(v,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ec:return y.key===S?l(v,p,y,E):null;case ts:return y.key===S?u(v,p,y,E):null;case Zr:return S=y._init,d(v,p,S(y._payload),E)}if(Za(y)||Oa(y))return S!==null?null:c(v,p,y,E,null);Oc(v,y)}return null}function h(v,p,y,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(y)||null,a(p,v,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ec:return v=v.get(E.key===null?y:E.key)||null,l(p,v,E,S);case ts:return v=v.get(E.key===null?y:E.key)||null,u(p,v,E,S);case Zr:var I=E._init;return h(v,p,y,I(E._payload),S)}if(Za(E)||Oa(E))return v=v.get(y)||null,c(p,v,E,S,null);Oc(p,E)}return null}function g(v,p,y,E){for(var S=null,I=null,T=p,O=p=0,$=null;T!==null&&O<y.length;O++){T.index>O?($=T,T=null):$=T.sibling;var R=d(v,T,y[O],E);if(R===null){T===null&&(T=$);break}t&&T&&R.alternate===null&&e(v,T),p=o(R,p,O),I===null?S=R:I.sibling=R,I=R,T=$}if(O===y.length)return n(v,T),Pe&&Hi(v,O),S;if(T===null){for(;O<y.length;O++)T=f(v,y[O],E),T!==null&&(p=o(T,p,O),I===null?S=T:I.sibling=T,I=T);return Pe&&Hi(v,O),S}for(T=r(v,T);O<y.length;O++)$=h(T,v,O,y[O],E),$!==null&&(t&&$.alternate!==null&&T.delete($.key===null?O:$.key),p=o($,p,O),I===null?S=$:I.sibling=$,I=$);return t&&T.forEach(function(te){return e(v,te)}),Pe&&Hi(v,O),S}function m(v,p,y,E){var S=Oa(y);if(typeof S!="function")throw Error(P(150));if(y=S.call(y),y==null)throw Error(P(151));for(var I=S=null,T=p,O=p=0,$=null,R=y.next();T!==null&&!R.done;O++,R=y.next()){T.index>O?($=T,T=null):$=T.sibling;var te=d(v,T,R.value,E);if(te===null){T===null&&(T=$);break}t&&T&&te.alternate===null&&e(v,T),p=o(te,p,O),I===null?S=te:I.sibling=te,I=te,T=$}if(R.done)return n(v,T),Pe&&Hi(v,O),S;if(T===null){for(;!R.done;O++,R=y.next())R=f(v,R.value,E),R!==null&&(p=o(R,p,O),I===null?S=R:I.sibling=R,I=R);return Pe&&Hi(v,O),S}for(T=r(v,T);!R.done;O++,R=y.next())R=h(T,v,O,R.value,E),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?O:R.key),p=o(R,p,O),I===null?S=R:I.sibling=R,I=R);return t&&T.forEach(function(ge){return e(v,ge)}),Pe&&Hi(v,O),S}function _(v,p,y,E){if(typeof y=="object"&&y!==null&&y.type===ns&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ec:e:{for(var S=y.key,I=p;I!==null;){if(I.key===S){if(S=y.type,S===ns){if(I.tag===7){n(v,I.sibling),p=i(I,y.props.children),p.return=v,v=p;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zr&&sE(S)===I.type){n(v,I.sibling),p=i(I,y.props),p.ref=La(v,I,y),p.return=v,v=p;break e}n(v,I);break}else e(v,I);I=I.sibling}y.type===ns?(p=fo(y.props.children,v.mode,E,y.key),p.return=v,v=p):(E=xf(y.type,y.key,y.props,null,v.mode,E),E.ref=La(v,p,y),E.return=v,v=E)}return s(v);case ts:e:{for(I=y.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(v,p.sibling),p=i(p,y.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else e(v,p);p=p.sibling}p=km(y,v.mode,E),p.return=v,v=p}return s(v);case Zr:return I=y._init,_(v,p,I(y._payload),E)}if(Za(y))return g(v,p,y,E);if(Oa(y))return m(v,p,y,E);Oc(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,y),p.return=v,v=p):(n(v,p),p=xm(y,v.mode,E),p.return=v,v=p),s(v)):n(v,p)}return _}var Ms=ux(!0),cx=ux(!1),Vu={},sr=Mi(Vu),Ql=Mi(Vu),Yl=Mi(Vu);function eo(t){if(t===Vu)throw Error(P(174));return t}function C0(t,e){switch(ve(Yl,e),ve(Ql,t),ve(sr,Vu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lg(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lg(e,t)}Ce(sr),ve(sr,e)}function Ls(){Ce(sr),Ce(Ql),Ce(Yl)}function fx(t){eo(Yl.current);var e=eo(sr.current),n=Lg(e,t.type);e!==n&&(ve(Ql,t),ve(sr,n))}function x0(t){Ql.current===t&&(Ce(sr),Ce(Ql))}var Oe=Mi(0);function pd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Em=[];function k0(){for(var t=0;t<Em.length;t++)Em[t]._workInProgressVersionPrimary=null;Em.length=0}var Sf=Vr.ReactCurrentDispatcher,Sm=Vr.ReactCurrentBatchConfig,wo=0,Ne=null,et=null,at=null,md=!1,_l=!1,Xl=0,z$=0;function Ct(){throw Error(P(321))}function A0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function P0(t,e,n,r,i,o){if(wo=o,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sf.current=t===null||t.memoizedState===null?q$:G$,t=n(r,i),_l){o=0;do{if(_l=!1,Xl=0,25<=o)throw Error(P(301));o+=1,at=et=null,e.updateQueue=null,Sf.current=K$,t=n(r,i)}while(_l)}if(Sf.current=gd,e=et!==null&&et.next!==null,wo=0,at=et=Ne=null,md=!1,e)throw Error(P(300));return t}function R0(){var t=Xl!==0;return Xl=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Ne.memoizedState=at=t:at=at.next=t,at}function bn(){if(et===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=at===null?Ne.memoizedState:at.next;if(e!==null)at=e,et=t;else{if(t===null)throw Error(P(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},at===null?Ne.memoizedState=at=t:at=at.next=t}return at}function Jl(t,e){return typeof e=="function"?e(t):e}function bm(t){var e=bn(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((wo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Ne.lanes|=c,Eo|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Fn(r,e.memoizedState)||(Gt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ne.lanes|=o,Eo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tm(t){var e=bn(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Fn(o,e.memoizedState)||(Gt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function dx(){}function hx(t,e){var n=Ne,r=bn(),i=e(),o=!Fn(r.memoizedState,i);if(o&&(r.memoizedState=i,Gt=!0),r=r.queue,O0(gx.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,Zl(9,mx.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(P(349));wo&30||px(n,e,i)}return i}function px(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mx(t,e,n,r){e.value=n,e.getSnapshot=r,vx(e)&&yx(t)}function gx(t,e,n){return n(function(){vx(e)&&yx(t)})}function vx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function yx(t){var e=Pr(t,1);e!==null&&Ln(e,t,1,-1)}function aE(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jl,lastRenderedState:t},e.queue=t,t=t.dispatch=H$.bind(null,Ne,t),[e.memoizedState,t]}function Zl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _x(){return bn().memoizedState}function bf(t,e,n,r){var i=Yn();Ne.flags|=t,i.memoizedState=Zl(1|e,n,void 0,r===void 0?null:r)}function gh(t,e,n,r){var i=bn();r=r===void 0?null:r;var o=void 0;if(et!==null){var s=et.memoizedState;if(o=s.destroy,r!==null&&A0(r,s.deps)){i.memoizedState=Zl(e,n,o,r);return}}Ne.flags|=t,i.memoizedState=Zl(1|e,n,o,r)}function lE(t,e){return bf(8390656,8,t,e)}function O0(t,e){return gh(2048,8,t,e)}function wx(t,e){return gh(4,2,t,e)}function Ex(t,e){return gh(4,4,t,e)}function Sx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bx(t,e,n){return n=n!=null?n.concat([t]):null,gh(4,4,Sx.bind(null,e,t),n)}function N0(){}function Tx(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&A0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ix(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&A0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Cx(t,e,n){return wo&21?(Fn(n,e)||(n=AC(),Ne.lanes|=n,Eo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gt=!0),t.memoizedState=n)}function B$(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Sm.transition;Sm.transition={};try{t(!1),e()}finally{he=n,Sm.transition=r}}function xx(){return bn().memoizedState}function W$(t,e,n){var r=yi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kx(t))Ax(e,n);else if(n=ox(t,e,n,r),n!==null){var i=Ut();Ln(n,t,r,i),Px(n,e,r)}}function H$(t,e,n){var r=yi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kx(t))Ax(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Fn(a,s)){var l=e.interleaved;l===null?(i.next=i,T0(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ox(t,e,i,r),n!==null&&(i=Ut(),Ln(n,t,r,i),Px(n,e,r))}}function kx(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function Ax(t,e){_l=md=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Px(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,c0(t,n)}}var gd={readContext:Sn,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},q$={readContext:Sn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:lE,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bf(4194308,4,Sx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bf(4194308,4,t,e)},useInsertionEffect:function(t,e){return bf(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=W$.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:aE,useDebugValue:N0,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=aE(!1),e=t[0];return t=B$.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=Yn();if(Pe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),ut===null)throw Error(P(349));wo&30||px(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,lE(gx.bind(null,r,o,t),[t]),r.flags|=2048,Zl(9,mx.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Yn(),e=ut.identifierPrefix;if(Pe){var n=Sr,r=Er;n=(r&~(1<<32-Mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=z$++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},G$={readContext:Sn,useCallback:Tx,useContext:Sn,useEffect:O0,useImperativeHandle:bx,useInsertionEffect:wx,useLayoutEffect:Ex,useMemo:Ix,useReducer:bm,useRef:_x,useState:function(){return bm(Jl)},useDebugValue:N0,useDeferredValue:function(t){var e=bn();return Cx(e,et.memoizedState,t)},useTransition:function(){var t=bm(Jl)[0],e=bn().memoizedState;return[t,e]},useMutableSource:dx,useSyncExternalStore:hx,useId:xx,unstable_isNewReconciler:!1},K$={readContext:Sn,useCallback:Tx,useContext:Sn,useEffect:O0,useImperativeHandle:bx,useInsertionEffect:wx,useLayoutEffect:Ex,useMemo:Ix,useReducer:Tm,useRef:_x,useState:function(){return Tm(Jl)},useDebugValue:N0,useDeferredValue:function(t){var e=bn();return et===null?e.memoizedState=t:Cx(e,et.memoizedState,t)},useTransition:function(){var t=Tm(Jl)[0],e=bn().memoizedState;return[t,e]},useMutableSource:dx,useSyncExternalStore:hx,useId:xx,unstable_isNewReconciler:!1};function js(t,e){try{var n="",r=e;do n+=SD(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Im(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sv(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q$=typeof WeakMap=="function"?WeakMap:Map;function Rx(t,e,n){n=Cr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yd||(yd=!0,gv=r),sv(t,e)},n}function Ox(t,e,n){n=Cr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sv(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){sv(t,e),typeof r!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function uE(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Q$;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=u4.bind(null,t,e,n),e.then(t,t))}function cE(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fE(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cr(-1,1),e.tag=2,gi(n,e,1))),n.lanes|=1),t)}var Y$=Vr.ReactCurrentOwner,Gt=!1;function Vt(t,e,n,r){e.child=t===null?cx(e,null,n,r):Ms(e,t.child,n,r)}function dE(t,e,n,r,i){n=n.render;var o=e.ref;return bs(e,i),r=P0(t,e,n,r,o,i),n=R0(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rr(t,e,i)):(Pe&&n&&y0(e),e.flags|=1,Vt(t,e,r,i),e.child)}function hE(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!U0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Nx(t,e,o,r,i)):(t=xf(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hl,n(s,r)&&t.ref===e.ref)return Rr(t,e,i)}return e.flags|=1,t=_i(o,r),t.ref=e.ref,t.return=e,e.child=t}function Nx(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Hl(o,r)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Gt=!0);else return e.lanes=t.lanes,Rr(t,e,i)}return av(t,e,n,r,i)}function Dx(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(ds,nn),nn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(ds,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(ds,nn),nn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,ve(ds,nn),nn|=r;return Vt(t,e,i,n),e.child}function $x(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function av(t,e,n,r,i){var o=Yt(n)?yo:$t.current;return o=Ds(e,o),bs(e,i),n=P0(t,e,n,r,o,i),r=R0(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rr(t,e,i)):(Pe&&r&&y0(e),e.flags|=1,Vt(t,e,n,i),e.child)}function pE(t,e,n,r,i){if(Yt(n)){var o=!0;ld(e)}else o=!1;if(bs(e,i),e.stateNode===null)Tf(t,e),lx(e,n,r),ov(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Sn(u):(u=Yt(n)?yo:$t.current,u=Ds(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&oE(e,s,r,u),ei=!1;var d=e.memoizedState;s.state=d,hd(e,r,s,i),l=e.memoizedState,a!==r||d!==l||Qt.current||ei?(typeof c=="function"&&(iv(e,n,c,r),l=e.memoizedState),(a=ei||iE(e,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,sx(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rn(e.type,a),s.props=u,f=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=Yt(n)?yo:$t.current,l=Ds(e,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&oE(e,s,r,l),ei=!1,d=e.memoizedState,s.state=d,hd(e,r,s,i);var g=e.memoizedState;a!==f||d!==g||Qt.current||ei?(typeof h=="function"&&(iv(e,n,h,r),g=e.memoizedState),(u=ei||iE(e,n,u,r,d,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),s.props=r,s.state=g,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return lv(t,e,n,r,o,i)}function lv(t,e,n,r,i,o){$x(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Zw(e,n,!1),Rr(t,e,o);r=e.stateNode,Y$.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ms(e,t.child,null,o),e.child=Ms(e,null,a,o)):Vt(t,e,a,o),e.memoizedState=r.state,i&&Zw(e,n,!0),e.child}function Mx(t){var e=t.stateNode;e.pendingContext?Jw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jw(t,e.context,!1),C0(t,e.containerInfo)}function mE(t,e,n,r,i){return $s(),w0(i),e.flags|=256,Vt(t,e,n,r),e.child}var uv={dehydrated:null,treeContext:null,retryLane:0};function cv(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lx(t,e,n){var r=e.pendingProps,i=Oe.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Oe,i&1),t===null)return nv(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_h(s,r,0,null),t=fo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=cv(n),e.memoizedState=uv,t):D0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return X$(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=_i(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=_i(a,o):(o=fo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?cv(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=uv,r}return o=t.child,t=o.sibling,r=_i(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function D0(t,e){return e=_h({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nc(t,e,n,r){return r!==null&&w0(r),Ms(e,t.child,null,n),t=D0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function X$(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Im(Error(P(422))),Nc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=_h({mode:"visible",children:r.children},i,0,null),o=fo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ms(e,t.child,null,s),e.child.memoizedState=cv(s),e.memoizedState=uv,o);if(!(e.mode&1))return Nc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(P(419)),r=Im(o,r,void 0),Nc(t,e,s,r)}if(a=(s&t.childLanes)!==0,Gt||a){if(r=ut,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pr(t,i),Ln(r,t,i,-1))}return F0(),r=Im(Error(P(421))),Nc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=c4.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,on=mi(i.nextSibling),sn=e,Pe=!0,Nn=null,t!==null&&(mn[gn++]=Er,mn[gn++]=Sr,mn[gn++]=_o,Er=t.id,Sr=t.overflow,_o=e),e=D0(e,r.children),e.flags|=4096,e)}function gE(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rv(t.return,e,n)}function Cm(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function jx(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Vt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gE(t,n,e);else if(t.tag===19)gE(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cm(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cm(e,!0,n,null,o);break;case"together":Cm(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tf(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Eo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=_i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function J$(t,e,n){switch(e.tag){case 3:Mx(e),$s();break;case 5:fx(e);break;case 1:Yt(e.type)&&ld(e);break;case 4:C0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(fd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?Lx(t,e,n):(ve(Oe,Oe.current&1),t=Rr(t,e,n),t!==null?t.sibling:null);ve(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jx(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Dx(t,e,n)}return Rr(t,e,n)}var Vx,fv,Fx,Ux;Vx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fv=function(){};Fx=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,eo(sr.current);var o=null;switch(n){case"input":i=Ng(t,i),r=Ng(t,r),o=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),o=[];break;case"textarea":i=Mg(t,i),r=Mg(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sd)}jg(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jl.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Ux=function(t,e,n,r){n!==r&&(e.flags|=4)};function ja(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Z$(t,e,n){var r=e.pendingProps;switch(_0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return Yt(e.type)&&ad(),xt(e),null;case 3:return r=e.stateNode,Ls(),Ce(Qt),Ce($t),k0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Rc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(_v(Nn),Nn=null))),fv(t,e),xt(e),null;case 5:x0(e);var i=eo(Yl.current);if(n=e.type,t!==null&&e.stateNode!=null)Fx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return xt(e),null}if(t=eo(sr.current),Rc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[er]=e,r[Kl]=o,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<tl.length;i++)we(tl[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Iw(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":xw(r,o),we("invalid",r)}jg(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Pc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Pc(r.textContent,a,t),i=["children",""+a]):jl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&we("scroll",r)}switch(n){case"input":Sc(r),Cw(r,o,!0);break;case"textarea":Sc(r),kw(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=sd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pC(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[er]=e,t[Kl]=r,Vx(t,e,!1,!1),e.stateNode=t;e:{switch(s=Vg(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<tl.length;i++)we(tl[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Iw(t,r),i=Ng(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),we("invalid",t);break;case"textarea":xw(t,r),i=Mg(t,r),we("invalid",t);break;default:i=r}jg(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?vC(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mC(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vl(t,l):typeof l=="number"&&Vl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&we("scroll",t):l!=null&&i0(t,o,l,s))}switch(n){case"input":Sc(t),Cw(t,r,!1);break;case"textarea":Sc(t),kw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ci(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?_s(t,!!r.multiple,o,!1):r.defaultValue!=null&&_s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=sd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)Ux(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=eo(Yl.current),eo(sr.current),Rc(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(o=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:Pc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return xt(e),null;case 13:if(Ce(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&on!==null&&e.mode&1&&!(e.flags&128))ix(),$s(),e.flags|=98560,o=!1;else if(o=Rc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(P(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[er]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xt(e),o=!1}else Nn!==null&&(_v(Nn),Nn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?nt===0&&(nt=3):F0())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return Ls(),fv(t,e),t===null&&ql(e.stateNode.containerInfo),xt(e),null;case 10:return b0(e.type._context),xt(e),null;case 17:return Yt(e.type)&&ad(),xt(e),null;case 19:if(Ce(Oe),o=e.memoizedState,o===null)return xt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)ja(o,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=pd(t),s!==null){for(e.flags|=128,ja(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Oe,Oe.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ue()>Vs&&(e.flags|=128,r=!0,ja(o,!1),e.lanes=4194304)}else{if(!r)if(t=pd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ja(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Pe)return xt(e),null}else 2*Ue()-o.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,r=!0,ja(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ue(),e.sibling=null,n=Oe.current,ve(Oe,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return V0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function e4(t,e){switch(_0(e),e.tag){case 1:return Yt(e.type)&&ad(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),Ce(Qt),Ce($t),k0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return x0(e),null;case 13:if(Ce(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Oe),null;case 4:return Ls(),null;case 10:return b0(e.type._context),null;case 22:case 23:return V0(),null;case 24:return null;default:return null}}var Dc=!1,Rt=!1,t4=typeof WeakSet=="function"?WeakSet:Set,V=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function dv(t,e,n){try{n()}catch(r){je(t,e,r)}}var vE=!1;function n4(t,e){if(Qg=rd,t=HC(),v0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yg={focusedElem:t,selectionRange:n},rd=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,_=g.memoizedState,v=e.stateNode,p=v.getSnapshotBeforeUpdate(e.elementType===e.type?m:Rn(e.type,m),_);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){je(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return g=vE,vE=!1,g}function wl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&dv(e,n,o)}i=i.next}while(i!==r)}}function vh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hv(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zx(t){var e=t.alternate;e!==null&&(t.alternate=null,zx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[Kl],delete e[Zg],delete e[j$],delete e[V$])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bx(t){return t.tag===5||t.tag===3||t.tag===4}function yE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pv(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sd));else if(r!==4&&(t=t.child,t!==null))for(pv(t,e,n),t=t.sibling;t!==null;)pv(t,e,n),t=t.sibling}function mv(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mv(t,e,n),t=t.sibling;t!==null;)mv(t,e,n),t=t.sibling}var mt=null,On=!1;function qr(t,e,n){for(n=n.child;n!==null;)Wx(t,e,n),n=n.sibling}function Wx(t,e,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(uh,n)}catch{}switch(n.tag){case 5:Rt||fs(n,e);case 6:var r=mt,i=On;mt=null,qr(t,e,n),mt=r,On=i,mt!==null&&(On?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(On?(t=mt,n=n.stateNode,t.nodeType===8?_m(t.parentNode,n):t.nodeType===1&&_m(t,n),Bl(t)):_m(mt,n.stateNode));break;case 4:r=mt,i=On,mt=n.stateNode.containerInfo,On=!0,qr(t,e,n),mt=r,On=i;break;case 0:case 11:case 14:case 15:if(!Rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&dv(n,e,s),i=i.next}while(i!==r)}qr(t,e,n);break;case 1:if(!Rt&&(fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}qr(t,e,n);break;case 21:qr(t,e,n);break;case 22:n.mode&1?(Rt=(r=Rt)||n.memoizedState!==null,qr(t,e,n),Rt=r):qr(t,e,n);break;default:qr(t,e,n)}}function _E(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new t4),e.forEach(function(r){var i=f4.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,On=!1;break e;case 3:mt=a.stateNode.containerInfo,On=!0;break e;case 4:mt=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(mt===null)throw Error(P(160));Wx(o,s,i),mt=null,On=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hx(e,t),e=e.sibling}function Hx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Qn(t),r&4){try{wl(3,t,t.return),vh(3,t)}catch(m){je(t,t.return,m)}try{wl(5,t,t.return)}catch(m){je(t,t.return,m)}}break;case 1:An(e,t),Qn(t),r&512&&n!==null&&fs(n,n.return);break;case 5:if(An(e,t),Qn(t),r&512&&n!==null&&fs(n,n.return),t.flags&32){var i=t.stateNode;try{Vl(i,"")}catch(m){je(t,t.return,m)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&dC(i,o),Vg(a,s);var u=Vg(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?vC(i,f):c==="dangerouslySetInnerHTML"?mC(i,f):c==="children"?Vl(i,f):i0(i,c,f,u)}switch(a){case"input":Dg(i,o);break;case"textarea":hC(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?_s(i,!!o.multiple,h,!1):d!==!!o.multiple&&(o.defaultValue!=null?_s(i,!!o.multiple,o.defaultValue,!0):_s(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kl]=o}catch(m){je(t,t.return,m)}}break;case 6:if(An(e,t),Qn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(m){je(t,t.return,m)}}break;case 3:if(An(e,t),Qn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bl(e.containerInfo)}catch(m){je(t,t.return,m)}break;case 4:An(e,t),Qn(t);break;case 13:An(e,t),Qn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(L0=Ue())),r&4&&_E(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Rt=(u=Rt)||c,An(e,t),Rt=u):An(e,t),Qn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(V=t,c=t.child;c!==null;){for(f=V=c;V!==null;){switch(d=V,h=d.child,d.tag){case 0:case 11:case 14:case 15:wl(4,d,d.return);break;case 1:fs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(m){je(r,n,m)}}break;case 5:fs(d,d.return);break;case 22:if(d.memoizedState!==null){EE(f);continue}}h!==null?(h.return=d,V=h):EE(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gC("display",s))}catch(m){je(t,t.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){je(t,t.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:An(e,t),Qn(t),r&4&&_E(t);break;case 21:break;default:An(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bx(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vl(i,""),r.flags&=-33);var o=yE(t);mv(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=yE(t);pv(t,a,s);break;default:throw Error(P(161))}}catch(l){je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function r4(t,e,n){V=t,qx(t)}function qx(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Dc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Rt;a=Dc;var u=Rt;if(Dc=s,(Rt=l)&&!u)for(V=i;V!==null;)s=V,l=s.child,s.tag===22&&s.memoizedState!==null?SE(i):l!==null?(l.return=s,V=l):SE(i);for(;o!==null;)V=o,qx(o),o=o.sibling;V=i,Dc=a,Rt=u}wE(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,V=o):wE(t)}}function wE(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rt||vh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&rE(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rE(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Bl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Rt||e.flags&512&&hv(e)}catch(d){je(e,e.return,d)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function EE(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function SE(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vh(4,e)}catch(l){je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){je(e,i,l)}}var o=e.return;try{hv(e)}catch(l){je(e,o,l)}break;case 5:var s=e.return;try{hv(e)}catch(l){je(e,s,l)}}}catch(l){je(e,e.return,l)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var i4=Math.ceil,vd=Vr.ReactCurrentDispatcher,$0=Vr.ReactCurrentOwner,En=Vr.ReactCurrentBatchConfig,se=0,ut=null,Ge=null,wt=0,nn=0,ds=Mi(0),nt=0,eu=null,Eo=0,yh=0,M0=0,El=null,qt=null,L0=0,Vs=1/0,vr=null,yd=!1,gv=null,vi=null,$c=!1,li=null,_d=0,Sl=0,vv=null,If=-1,Cf=0;function Ut(){return se&6?Ue():If!==-1?If:If=Ue()}function yi(t){return t.mode&1?se&2&&wt!==0?wt&-wt:U$.transition!==null?(Cf===0&&(Cf=AC()),Cf):(t=he,t!==0||(t=window.event,t=t===void 0?16:MC(t.type)),t):1}function Ln(t,e,n,r){if(50<Sl)throw Sl=0,vv=null,Error(P(185));Mu(t,n,r),(!(se&2)||t!==ut)&&(t===ut&&(!(se&2)&&(yh|=n),nt===4&&ni(t,wt)),Xt(t,r),n===1&&se===0&&!(e.mode&1)&&(Vs=Ue()+500,ph&&Li()))}function Xt(t,e){var n=t.callbackNode;UD(t,e);var r=nd(t,t===ut?wt:0);if(r===0)n!==null&&Rw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rw(n),e===1)t.tag===0?F$(bE.bind(null,t)):tx(bE.bind(null,t)),M$(function(){!(se&6)&&Li()}),n=null;else{switch(PC(r)){case 1:n=u0;break;case 4:n=xC;break;case 16:n=td;break;case 536870912:n=kC;break;default:n=td}n=ek(n,Gx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gx(t,e){if(If=-1,Cf=0,se&6)throw Error(P(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var r=nd(t,t===ut?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wd(t,r);else{e=r;var i=se;se|=2;var o=Qx();(ut!==t||wt!==e)&&(vr=null,Vs=Ue()+500,co(t,e));do try{a4();break}catch(a){Kx(t,a)}while(!0);S0(),vd.current=o,se=i,Ge!==null?e=0:(ut=null,wt=0,e=nt)}if(e!==0){if(e===2&&(i=Wg(t),i!==0&&(r=i,e=yv(t,i))),e===1)throw n=eu,co(t,0),ni(t,r),Xt(t,Ue()),n;if(e===6)ni(t,r);else{if(i=t.current.alternate,!(r&30)&&!o4(i)&&(e=wd(t,r),e===2&&(o=Wg(t),o!==0&&(r=o,e=yv(t,o))),e===1))throw n=eu,co(t,0),ni(t,r),Xt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:qi(t,qt,vr);break;case 3:if(ni(t,r),(r&130023424)===r&&(e=L0+500-Ue(),10<e)){if(nd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jg(qi.bind(null,t,qt,vr),e);break}qi(t,qt,vr);break;case 4:if(ni(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Mn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*i4(r/1960))-r,10<r){t.timeoutHandle=Jg(qi.bind(null,t,qt,vr),r);break}qi(t,qt,vr);break;case 5:qi(t,qt,vr);break;default:throw Error(P(329))}}}return Xt(t,Ue()),t.callbackNode===n?Gx.bind(null,t):null}function yv(t,e){var n=El;return t.current.memoizedState.isDehydrated&&(co(t,e).flags|=256),t=wd(t,e),t!==2&&(e=qt,qt=n,e!==null&&_v(e)),t}function _v(t){qt===null?qt=t:qt.push.apply(qt,t)}function o4(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Fn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ni(t,e){for(e&=~M0,e&=~yh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mn(e),r=1<<n;t[n]=-1,e&=~r}}function bE(t){if(se&6)throw Error(P(327));Ts();var e=nd(t,0);if(!(e&1))return Xt(t,Ue()),null;var n=wd(t,e);if(t.tag!==0&&n===2){var r=Wg(t);r!==0&&(e=r,n=yv(t,r))}if(n===1)throw n=eu,co(t,0),ni(t,e),Xt(t,Ue()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qi(t,qt,vr),Xt(t,Ue()),null}function j0(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Vs=Ue()+500,ph&&Li())}}function So(t){li!==null&&li.tag===0&&!(se&6)&&Ts();var e=se;se|=1;var n=En.transition,r=he;try{if(En.transition=null,he=1,t)return t()}finally{he=r,En.transition=n,se=e,!(se&6)&&Li()}}function V0(){nn=ds.current,Ce(ds)}function co(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$$(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(_0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ad();break;case 3:Ls(),Ce(Qt),Ce($t),k0();break;case 5:x0(r);break;case 4:Ls();break;case 13:Ce(Oe);break;case 19:Ce(Oe);break;case 10:b0(r.type._context);break;case 22:case 23:V0()}n=n.return}if(ut=t,Ge=t=_i(t.current,null),wt=nn=e,nt=0,eu=null,M0=yh=Eo=0,qt=El=null,Zi!==null){for(e=0;e<Zi.length;e++)if(n=Zi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Zi=null}return t}function Kx(t,e){do{var n=Ge;try{if(S0(),Sf.current=gd,md){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}md=!1}if(wo=0,at=et=Ne=null,_l=!1,Xl=0,$0.current=null,n===null||n.return===null){nt=1,eu=e,Ge=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=cE(s);if(h!==null){h.flags&=-257,fE(h,s,a,o,e),h.mode&1&&uE(o,u,e),e=h,l=u;var g=e.updateQueue;if(g===null){var m=new Set;m.add(l),e.updateQueue=m}else g.add(l);break e}else{if(!(e&1)){uE(o,u,e),F0();break e}l=Error(P(426))}}else if(Pe&&a.mode&1){var _=cE(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),fE(_,s,a,o,e),w0(js(l,a));break e}}o=l=js(l,a),nt!==4&&(nt=2),El===null?El=[o]:El.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var v=Rx(o,l,e);nE(o,v);break e;case 1:a=l;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(vi===null||!vi.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=Ox(o,a,e);nE(o,E);break e}}o=o.return}while(o!==null)}Xx(n)}catch(S){e=S,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function Qx(){var t=vd.current;return vd.current=gd,t===null?gd:t}function F0(){(nt===0||nt===3||nt===2)&&(nt=4),ut===null||!(Eo&268435455)&&!(yh&268435455)||ni(ut,wt)}function wd(t,e){var n=se;se|=2;var r=Qx();(ut!==t||wt!==e)&&(vr=null,co(t,e));do try{s4();break}catch(i){Kx(t,i)}while(!0);if(S0(),se=n,vd.current=r,Ge!==null)throw Error(P(261));return ut=null,wt=0,nt}function s4(){for(;Ge!==null;)Yx(Ge)}function a4(){for(;Ge!==null&&!OD();)Yx(Ge)}function Yx(t){var e=Zx(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?Xx(t):Ge=e,$0.current=null}function Xx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=e4(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Ge=null;return}}else if(n=Z$(n,e,nn),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);nt===0&&(nt=5)}function qi(t,e,n){var r=he,i=En.transition;try{En.transition=null,he=1,l4(t,e,n,r)}finally{En.transition=i,he=r}return null}function l4(t,e,n,r){do Ts();while(li!==null);if(se&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(zD(t,o),t===ut&&(Ge=ut=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$c||($c=!0,ek(td,function(){return Ts(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=En.transition,En.transition=null;var s=he;he=1;var a=se;se|=4,$0.current=null,n4(t,n),Hx(n,t),k$(Yg),rd=!!Qg,Yg=Qg=null,t.current=n,r4(n),ND(),se=a,he=s,En.transition=o}else t.current=n;if($c&&($c=!1,li=t,_d=i),o=t.pendingLanes,o===0&&(vi=null),MD(n.stateNode),Xt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yd)throw yd=!1,t=gv,gv=null,t;return _d&1&&t.tag!==0&&Ts(),o=t.pendingLanes,o&1?t===vv?Sl++:(Sl=0,vv=t):Sl=0,Li(),null}function Ts(){if(li!==null){var t=PC(_d),e=En.transition,n=he;try{if(En.transition=null,he=16>t?16:t,li===null)var r=!1;else{if(t=li,li=null,_d=0,se&6)throw Error(P(331));var i=se;for(se|=4,V=t.current;V!==null;){var o=V,s=o.child;if(V.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:wl(8,c,o)}var f=c.child;if(f!==null)f.return=c,V=f;else for(;V!==null;){c=V;var d=c.sibling,h=c.return;if(zx(c),c===u){V=null;break}if(d!==null){d.return=h,V=d;break}V=h}}}var g=o.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var _=m.sibling;m.sibling=null,m=_}while(m!==null)}}V=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,V=s;else e:for(;V!==null;){if(o=V,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wl(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,V=v;break e}V=o.return}}var p=t.current;for(V=p;V!==null;){s=V;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,V=y;else e:for(s=p;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vh(9,a)}}catch(S){je(a,a.return,S)}if(a===s){V=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,V=E;break e}V=a.return}}if(se=i,Li(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(uh,t)}catch{}r=!0}return r}finally{he=n,En.transition=e}}return!1}function TE(t,e,n){e=js(n,e),e=Rx(t,e,1),t=gi(t,e,1),e=Ut(),t!==null&&(Mu(t,1,e),Xt(t,e))}function je(t,e,n){if(t.tag===3)TE(t,t,n);else for(;e!==null;){if(e.tag===3){TE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vi===null||!vi.has(r))){t=js(n,t),t=Ox(e,t,1),e=gi(e,t,1),t=Ut(),e!==null&&(Mu(e,1,t),Xt(e,t));break}}e=e.return}}function u4(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ut(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(wt&n)===n&&(nt===4||nt===3&&(wt&130023424)===wt&&500>Ue()-L0?co(t,0):M0|=n),Xt(t,e)}function Jx(t,e){e===0&&(t.mode&1?(e=Ic,Ic<<=1,!(Ic&130023424)&&(Ic=4194304)):e=1);var n=Ut();t=Pr(t,e),t!==null&&(Mu(t,e,n),Xt(t,n))}function c4(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jx(t,n)}function f4(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),Jx(t,n)}var Zx;Zx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gt=!1,J$(t,e,n);Gt=!!(t.flags&131072)}else Gt=!1,Pe&&e.flags&1048576&&nx(e,cd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tf(t,e),t=e.pendingProps;var i=Ds(e,$t.current);bs(e,n),i=P0(null,e,r,t,i,n);var o=R0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(r)?(o=!0,ld(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,I0(e),i.updater=mh,e.stateNode=i,i._reactInternals=e,ov(e,r,t,n),e=lv(null,e,r,!0,o,n)):(e.tag=0,Pe&&o&&y0(e),Vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tf(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=h4(r),t=Rn(r,t),i){case 0:e=av(null,e,r,t,n);break e;case 1:e=pE(null,e,r,t,n);break e;case 11:e=dE(null,e,r,t,n);break e;case 14:e=hE(null,e,r,Rn(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),av(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),pE(t,e,r,i,n);case 3:e:{if(Mx(e),t===null)throw Error(P(387));r=e.pendingProps,o=e.memoizedState,i=o.element,sx(t,e),hd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=js(Error(P(423)),e),e=mE(t,e,r,n,i);break e}else if(r!==i){i=js(Error(P(424)),e),e=mE(t,e,r,n,i);break e}else for(on=mi(e.stateNode.containerInfo.firstChild),sn=e,Pe=!0,Nn=null,n=cx(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),r===i){e=Rr(t,e,n);break e}Vt(t,e,r,n)}e=e.child}return e;case 5:return fx(e),t===null&&nv(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Xg(r,i)?s=null:o!==null&&Xg(r,o)&&(e.flags|=32),$x(t,e),Vt(t,e,s,n),e.child;case 6:return t===null&&nv(e),null;case 13:return Lx(t,e,n);case 4:return C0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ms(e,null,r,n):Vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),dE(t,e,r,i,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ve(fd,r._currentValue),r._currentValue=s,o!==null)if(Fn(o.value,s)){if(o.children===i.children&&!Qt.current){e=Rr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Cr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rv(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),rv(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bs(e,n),i=Sn(i),r=r(i),e.flags|=1,Vt(t,e,r,n),e.child;case 14:return r=e.type,i=Rn(r,e.pendingProps),i=Rn(r.type,i),hE(t,e,r,i,n);case 15:return Nx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Tf(t,e),e.tag=1,Yt(r)?(t=!0,ld(e)):t=!1,bs(e,n),lx(e,r,i),ov(e,r,i,n),lv(null,e,r,!0,t,n);case 19:return jx(t,e,n);case 22:return Dx(t,e,n)}throw Error(P(156,e.tag))};function ek(t,e){return CC(t,e)}function d4(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,r){return new d4(t,e,n,r)}function U0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function h4(t){if(typeof t=="function")return U0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===s0)return 11;if(t===a0)return 14}return 2}function _i(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xf(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")U0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ns:return fo(n.children,i,o,e);case o0:s=8,i|=8;break;case Ag:return t=wn(12,n,e,i|2),t.elementType=Ag,t.lanes=o,t;case Pg:return t=wn(13,n,e,i),t.elementType=Pg,t.lanes=o,t;case Rg:return t=wn(19,n,e,i),t.elementType=Rg,t.lanes=o,t;case uC:return _h(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case aC:s=10;break e;case lC:s=9;break e;case s0:s=11;break e;case a0:s=14;break e;case Zr:s=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=wn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function fo(t,e,n,r){return t=wn(7,t,r,e),t.lanes=n,t}function _h(t,e,n,r){return t=wn(22,t,r,e),t.elementType=uC,t.lanes=n,t.stateNode={isHidden:!1},t}function xm(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function km(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function p4(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lm(0),this.expirationTimes=lm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lm(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function z0(t,e,n,r,i,o,s,a,l){return t=new p4(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=wn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},I0(o),t}function m4(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tk(t){if(!t)return xi;t=t._reactInternals;e:{if(Mo(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(Yt(n))return ex(t,n,e)}return e}function nk(t,e,n,r,i,o,s,a,l){return t=z0(n,r,!0,t,i,o,s,a,l),t.context=tk(null),n=t.current,r=Ut(),i=yi(n),o=Cr(r,i),o.callback=e??null,gi(n,o,i),t.current.lanes=i,Mu(t,i,r),Xt(t,r),t}function wh(t,e,n,r){var i=e.current,o=Ut(),s=yi(i);return n=tk(n),e.context===null?e.context=n:e.pendingContext=n,e=Cr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gi(i,e,s),t!==null&&(Ln(t,i,s,o),Ef(t,i,s)),s}function Ed(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function IE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function B0(t,e){IE(t,e),(t=t.alternate)&&IE(t,e)}function g4(){return null}var rk=typeof reportError=="function"?reportError:function(t){console.error(t)};function W0(t){this._internalRoot=t}Eh.prototype.render=W0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));wh(t,e,null,null)};Eh.prototype.unmount=W0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;So(function(){wh(null,t,null,null)}),e[Ar]=null}};function Eh(t){this._internalRoot=t}Eh.prototype.unstable_scheduleHydration=function(t){if(t){var e=NC();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ti.length&&e!==0&&e<ti[n].priority;n++);ti.splice(n,0,t),n===0&&$C(t)}};function H0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function CE(){}function v4(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ed(s);o.call(u)}}var s=nk(e,r,t,0,null,!1,!1,"",CE);return t._reactRootContainer=s,t[Ar]=s.current,ql(t.nodeType===8?t.parentNode:t),So(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ed(l);a.call(u)}}var l=z0(t,0,!1,null,null,!1,!1,"",CE);return t._reactRootContainer=l,t[Ar]=l.current,ql(t.nodeType===8?t.parentNode:t),So(function(){wh(e,l,n,r)}),l}function bh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ed(s);a.call(l)}}wh(e,s,t,i)}else s=v4(n,e,t,i,r);return Ed(s)}RC=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=el(e.pendingLanes);n!==0&&(c0(e,n|1),Xt(e,Ue()),!(se&6)&&(Vs=Ue()+500,Li()))}break;case 13:So(function(){var r=Pr(t,1);if(r!==null){var i=Ut();Ln(r,t,1,i)}}),B0(t,1)}};f0=function(t){if(t.tag===13){var e=Pr(t,134217728);if(e!==null){var n=Ut();Ln(e,t,134217728,n)}B0(t,134217728)}};OC=function(t){if(t.tag===13){var e=yi(t),n=Pr(t,e);if(n!==null){var r=Ut();Ln(n,t,e,r)}B0(t,e)}};NC=function(){return he};DC=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Ug=function(t,e,n){switch(e){case"input":if(Dg(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hh(r);if(!i)throw Error(P(90));fC(r),Dg(r,i)}}}break;case"textarea":hC(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};wC=j0;EC=So;var y4={usingClientEntryPoint:!1,Events:[ju,ss,hh,yC,_C,j0]},Va={findFiberByHostInstance:Ji,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_4={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=TC(t),t===null?null:t.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||g4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{uh=Mc.inject(_4),or=Mc}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y4;cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!H0(e))throw Error(P(200));return m4(t,e,null,n)};cn.createRoot=function(t,e){if(!H0(t))throw Error(P(299));var n=!1,r="",i=rk;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=z0(t,1,!1,null,null,n,!1,r,i),t[Ar]=e.current,ql(t.nodeType===8?t.parentNode:t),new W0(e)};cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=TC(e),t=t===null?null:t.stateNode,t};cn.flushSync=function(t){return So(t)};cn.hydrate=function(t,e,n){if(!Sh(e))throw Error(P(200));return bh(null,t,e,!0,n)};cn.hydrateRoot=function(t,e,n){if(!H0(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=rk;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=nk(e,null,t,1,n??null,i,!1,o,s),t[Ar]=e.current,ql(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Eh(e)};cn.render=function(t,e,n){if(!Sh(e))throw Error(P(200));return bh(null,t,e,!1,n)};cn.unmountComponentAtNode=function(t){if(!Sh(t))throw Error(P(40));return t._reactRootContainer?(So(function(){bh(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};cn.unstable_batchedUpdates=j0;cn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Sh(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return bh(t,e,n,!1,r)};cn.version="18.2.0-next-9e3b772b8-20220608";function ik(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ik)}catch(t){console.error(t)}}ik(),nC.exports=cn;var ok=nC.exports,xE=ok;xg.createRoot=xE.createRoot,xg.hydrateRoot=xE.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tu.apply(this,arguments)}var ui;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ui||(ui={}));const kE="popstate";function w4(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return wv("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Sd(i)}return S4(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function q0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function E4(){return Math.random().toString(36).substr(2,8)}function AE(t,e){return{usr:t.state,key:t.key,idx:e}}function wv(t,e,n,r){return n===void 0&&(n=null),tu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ca(e):e,{state:n,key:e&&e.key||r||E4()})}function Sd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ca(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function S4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ui.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(tu({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=ui.Pop;let _=c(),v=_==null?null:_-u;u=_,l&&l({action:a,location:m.location,delta:v})}function d(_,v){a=ui.Push;let p=wv(m.location,_,v);n&&n(p,_),u=c()+1;let y=AE(p,u),E=m.createHref(p);try{s.pushState(y,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}o&&l&&l({action:a,location:m.location,delta:1})}function h(_,v){a=ui.Replace;let p=wv(m.location,_,v);n&&n(p,_),u=c();let y=AE(p,u),E=m.createHref(p);s.replaceState(y,"",E),o&&l&&l({action:a,location:m.location,delta:0})}function g(_){let v=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof _=="string"?_:Sd(_);return Ye(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let m={get action(){return a},get location(){return t(i,s)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(kE,f),l=_,()=>{i.removeEventListener(kE,f),l=null}},createHref(_){return e(i,_)},createURL:g,encodeLocation(_){let v=g(_);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:d,replace:h,go(_){return s.go(_)}};return m}var PE;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(PE||(PE={}));function b4(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ca(e):e,i=G0(r.pathname||"/",n);if(i==null)return null;let o=sk(t);T4(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=N4(o[a],M4(i));return s}function sk(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wi([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Ye(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sk(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:R4(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of ak(o.path))i(o,s,l)}),e}function ak(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ak(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function T4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:O4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const I4=/^:\w+$/,C4=3,x4=2,k4=1,A4=10,P4=-2,RE=t=>t==="*";function R4(t,e){let n=t.split("/"),r=n.length;return n.some(RE)&&(r+=P4),e&&(r+=x4),n.filter(i=>!RE(i)).reduce((i,o)=>i+(I4.test(o)?C4:o===""?k4:A4),r)}function O4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function N4(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=D4({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:wi([i,c.pathname]),pathnameBase:U4(wi([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=wi([i,c.pathnameBase]))}return o}function D4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:h}=c;if(d==="*"){let m=a[f]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const g=a[f];return h&&!g?u[d]=void 0:u[d]=L4(g||"",d),u},{}),pathname:o,pathnameBase:s,pattern:t}}function $4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),q0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function M4(t){try{return decodeURI(t)}catch(e){return q0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function L4(t,e){try{return decodeURIComponent(t)}catch(n){return q0(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function G0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function j4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ca(t):t;return{pathname:n?n.startsWith("/")?n:V4(n,e):e,search:z4(r),hash:B4(i)}}function V4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Am(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function F4(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function lk(t,e){let n=F4(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uk(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ca(t):(i=tu({},t),Ye(!i.pathname||!i.pathname.includes("?"),Am("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),Am("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),Am("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=e.length-1;if(!r&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=j4(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const wi=t=>t.join("/").replace(/\/\/+/g,"/"),U4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),z4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,B4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function W4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ck=["post","put","patch","delete"];new Set(ck);const H4=["get",...ck];new Set(H4);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nu.apply(this,arguments)}const K0=b.createContext(null),q4=b.createContext(null),Lo=b.createContext(null),Th=b.createContext(null),Fr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),fk=b.createContext(null);function G4(t,e){let{relative:n}=e===void 0?{}:e;Fu()||Ye(!1);let{basename:r,navigator:i}=b.useContext(Lo),{hash:o,pathname:s,search:a}=hk(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:wi([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Fu(){return b.useContext(Th)!=null}function Uu(){return Fu()||Ye(!1),b.useContext(Th).location}function dk(t){b.useContext(Lo).static||b.useLayoutEffect(t)}function Ur(){let{isDataRoute:t}=b.useContext(Fr);return t?u5():K4()}function K4(){Fu()||Ye(!1);let t=b.useContext(K0),{basename:e,future:n,navigator:r}=b.useContext(Lo),{matches:i}=b.useContext(Fr),{pathname:o}=Uu(),s=JSON.stringify(lk(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return dk(()=>{a.current=!0}),b.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=uk(u,JSON.parse(s),o,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:wi([e,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[e,r,s,o,t])}const Q4=b.createContext(null);function Y4(t){let e=b.useContext(Fr).outlet;return e&&b.createElement(Q4.Provider,{value:t},e)}function X4(){let{matches:t}=b.useContext(Fr),e=t[t.length-1];return e?e.params:{}}function hk(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(Lo),{matches:i}=b.useContext(Fr),{pathname:o}=Uu(),s=JSON.stringify(lk(i,r.v7_relativeSplatPath));return b.useMemo(()=>uk(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function J4(t,e){return Z4(t,e)}function Z4(t,e,n,r){Fu()||Ye(!1);let{navigator:i}=b.useContext(Lo),{matches:o}=b.useContext(Fr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Uu(),c;if(e){var f;let _=typeof e=="string"?ca(e):e;l==="/"||(f=_.pathname)!=null&&f.startsWith(l)||Ye(!1),c=_}else c=u;let d=c.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",g=b4(t,{pathname:h}),m=i5(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:wi([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:wi([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return e&&m?b.createElement(Th.Provider,{value:{location:nu({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ui.Pop}},m):m}function e5(){let t=l5(),e=W4(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const t5=b.createElement(e5,null);class n5 extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Fr.Provider,{value:this.props.routeContext},b.createElement(fk.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function r5(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(K0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Fr.Provider,{value:e},r)}function i5(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));c>=0||Ye(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:h}=n,g=f.route.loader&&d[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||g){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,d)=>{let h,g=!1,m=null,_=null;n&&(h=a&&f.route.id?a[f.route.id]:void 0,m=f.route.errorElement||t5,l&&(u<0&&d===0?(c5("route-fallback",!1),g=!0,_=null):u===d&&(g=!0,_=f.route.hydrateFallbackElement||null)));let v=e.concat(s.slice(0,d+1)),p=()=>{let y;return h?y=m:g?y=_:f.route.Component?y=b.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=c,b.createElement(r5,{match:f,routeContext:{outlet:c,matches:v,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?b.createElement(n5,{location:n.location,revalidation:n.revalidation,component:m,error:h,children:p(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):p()},null)}var pk=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(pk||{}),bd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(bd||{});function o5(t){let e=b.useContext(K0);return e||Ye(!1),e}function s5(t){let e=b.useContext(q4);return e||Ye(!1),e}function a5(t){let e=b.useContext(Fr);return e||Ye(!1),e}function mk(t){let e=a5(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function l5(){var t;let e=b.useContext(fk),n=s5(bd.UseRouteError),r=mk(bd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function u5(){let{router:t}=o5(pk.UseNavigateStable),e=mk(bd.UseNavigateStable),n=b.useRef(!1);return dk(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,nu({fromRouteId:e},o)))},[t,e])}const OE={};function c5(t,e,n){!e&&!OE[t]&&(OE[t]=!0)}function f5(t){return Y4(t.context)}function Pn(t){Ye(!1)}function d5(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ui.Pop,navigator:o,static:s=!1,future:a}=t;Fu()&&Ye(!1);let l=e.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:o,static:s,future:nu({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=ca(r));let{pathname:c="/",search:f="",hash:d="",state:h=null,key:g="default"}=r,m=b.useMemo(()=>{let _=G0(c,l);return _==null?null:{location:{pathname:_,search:f,hash:d,state:h,key:g},navigationType:i}},[l,c,f,d,h,g,i]);return m==null?null:b.createElement(Lo.Provider,{value:u},b.createElement(Th.Provider,{children:n,value:m}))}function h5(t){let{children:e,location:n}=t;return J4(Ev(e),n)}new Promise(()=>{});function Ev(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let o=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Ev(r.props.children,o));return}r.type!==Pn&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ev(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sv(){return Sv=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sv.apply(this,arguments)}function p5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function m5(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function g5(t,e){return t.button===0&&(!e||e==="_self")&&!m5(t)}const v5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],y5="startTransition",NE=Xf[y5];function _5(t){let{basename:e,children:n,future:r,window:i}=t,o=b.useRef();o.current==null&&(o.current=w4({window:i,v5Compat:!0}));let s=o.current,[a,l]=b.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=b.useCallback(f=>{u&&NE?NE(()=>l(f)):l(f)},[l,u]);return b.useLayoutEffect(()=>s.listen(c),[s,c]),b.createElement(d5,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const w5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",E5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q0=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=e,d=p5(e,v5),{basename:h}=b.useContext(Lo),g,m=!1;if(typeof u=="string"&&E5.test(u)&&(g=u,w5))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),S=G0(E.pathname,h);E.origin===y.origin&&S!=null?u=S+E.search+E.hash:m=!0}catch{}let _=G4(u,{relative:i}),v=S5(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function p(y){r&&r(y),y.defaultPrevented||v(y)}return b.createElement("a",Sv({},d,{href:g||_,onClick:m||o?r:p,ref:n,target:l}))});var DE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(DE||(DE={}));var $E;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($E||($E={}));function S5(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=Ur(),u=Uu(),c=hk(t,{relative:s});return b.useCallback(f=>{if(g5(f,n)){f.preventDefault();let d=r!==void 0?r:Sd(u)===Sd(c);l(t,{replace:d,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,o,s,a])}var gk={exports:{}},b5="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",T5=b5,I5=T5;function vk(){}function yk(){}yk.resetWarningCache=vk;var C5=function(){function t(r,i,o,s,a,l){if(l!==I5){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:yk,resetWarningCache:vk};return n.PropTypes=n,n};gk.exports=C5();var x5=gk.exports;const F=Do(x5);function ME(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function LE(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ME(Object(n),!0).forEach(function(r){_k(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ME(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kf(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?kf=function(e){return typeof e}:kf=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kf(t)}function _k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Af(t,e){return k5(t)||A5(t,e)||P5(t,e)||R5()}function k5(t){if(Array.isArray(t))return t}function A5(t,e){var n=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function P5(t,e){if(t){if(typeof t=="string")return jE(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jE(t,e)}}function jE(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function R5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bv=function(e){var n=H.useRef(e);return H.useEffect(function(){n.current=e},[e]),n.current},Fs=function(e){return e!==null&&kf(e)==="object"},O5=function(e){return Fs(e)&&typeof e.then=="function"},N5=function(e){return Fs(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},VE="[object Object]",D5=function t(e,n){if(!Fs(e)||!Fs(n))return e===n;var r=Array.isArray(e),i=Array.isArray(n);if(r!==i)return!1;var o=Object.prototype.toString.call(e)===VE,s=Object.prototype.toString.call(n)===VE;if(o!==s)return!1;if(!o&&!r)return e===n;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(var u={},c=0;c<a.length;c+=1)u[a[c]]=!0;for(var f=0;f<l.length;f+=1)u[l[f]]=!0;var d=Object.keys(u);if(d.length!==a.length)return!1;var h=e,g=n,m=function(v){return t(h[v],g[v])};return d.every(m)},wk=function(e,n,r){return Fs(e)?Object.keys(e).reduce(function(i,o){var s=!Fs(n)||!D5(e[o],n[o]);return r.includes(o)?(s&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),i):s?LE(LE({},i||{}),{},_k({},o,e[o])):i},null):null},Ek="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",FE=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ek;if(e===null||N5(e))return e;throw new Error(n)},$5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ek;if(O5(e))return{tag:"async",stripePromise:Promise.resolve(e).then(function(i){return FE(i,n)})};var r=FE(e,n);return r===null?{tag:"empty"}:{tag:"sync",stripe:r}},M5=function(e){!e||!e._registerWrapper||!e.registerAppInfo||(e._registerWrapper({name:"react-stripe-js",version:"2.4.0"}),e.registerAppInfo({name:"react-stripe-js",version:"2.4.0",url:"https://stripe.com/docs/stripe-js/react"}))},Sk=H.createContext(null);Sk.displayName="CustomCheckoutSdkContext";var L5=function(e,n){if(!e)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(n," in an <CustomCheckoutProvider> provider."));return e},j5=H.createContext(null);j5.displayName="CustomCheckoutContext";F.any,F.shape({clientSecret:F.string.isRequired,elementsOptions:F.object}).isRequired;var Tv=function(e){var n=H.useContext(Sk),r=H.useContext(Ih);if(n&&r)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return n?L5(n,e):bk(r,e)},Ih=H.createContext(null);Ih.displayName="ElementsContext";var bk=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},Y0=H.createContext(null);Y0.displayName="CartElementContext";var V5=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},Tk=function(e){var n=e.stripe,r=e.options,i=e.children,o=H.useMemo(function(){return $5(n)},[n]),s=H.useState(null),a=Af(s,2),l=a[0],u=a[1],c=H.useState(null),f=Af(c,2),d=f[0],h=f[1],g=H.useState(function(){return{stripe:o.tag==="sync"?o.stripe:null,elements:o.tag==="sync"?o.stripe.elements(r):null}}),m=Af(g,2),_=m[0],v=m[1];H.useEffect(function(){var E=!0,S=function(T){v(function(O){return O.stripe?O:{stripe:T,elements:T.elements(r)}})};return o.tag==="async"&&!_.stripe?o.stripePromise.then(function(I){I&&E&&S(I)}):o.tag==="sync"&&!_.stripe&&S(o.stripe),function(){E=!1}},[o,_,r]);var p=bv(n);H.useEffect(function(){p!==null&&p!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[p,n]);var y=bv(r);return H.useEffect(function(){if(_.elements){var E=wk(r,y,["clientSecret","fonts"]);E&&_.elements.update(E)}},[r,y,_.elements]),H.useEffect(function(){M5(_.stripe)},[_.stripe]),H.createElement(Ih.Provider,{value:_},H.createElement(Y0.Provider,{value:{cart:l,setCart:u,cartState:d,setCartState:h}},i))};Tk.propTypes={stripe:F.any,options:F.object};var F5=function(e){var n=H.useContext(Ih);return bk(n,e)},U5={cart:null,cartState:null,setCart:function(){},setCartState:function(){}},UE=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=H.useContext(Y0);return n?U5:V5(r,e)},z5=function(){var e=F5("calls useElements()"),n=e.elements;return n},B5=function(){var e=Tv("calls useStripe()"),n=e.stripe;return n};F.func.isRequired;var jt=function(e,n,r){var i=!!r,o=H.useRef(r);H.useEffect(function(){o.current=r},[r]),H.useEffect(function(){if(!i||!e)return function(){};var s=function(){o.current&&o.current.apply(o,arguments)};return e.on(n,s),function(){e.off(n,s)}},[i,n,e,o])},W5=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Je=function(e,n){var r="".concat(W5(e),"Element"),i=function(l){var u=l.id,c=l.className,f=l.options,d=f===void 0?{}:f,h=l.onBlur,g=l.onFocus,m=l.onReady,_=l.onChange,v=l.onEscape,p=l.onClick,y=l.onLoadError,E=l.onLoaderStart,S=l.onNetworksChange,I=l.onCheckout,T=l.onLineItemClick,O=l.onConfirm,$=l.onCancel,R=l.onShippingAddressChange,te=l.onShippingRateChange,ge=Tv("mounts <".concat(r,">")),ot="elements"in ge?ge.elements:null,ht="customCheckoutSdk"in ge?ge.customCheckoutSdk:null,Hn=H.useState(null),qn=Af(Hn,2),ke=qn[0],M=qn[1],U=H.useRef(null),q=H.useRef(null),fe=UE("mounts <".concat(r,">"),"customCheckoutSdk"in ge),ae=fe.setCart,kn=fe.setCartState;jt(ke,"blur",h),jt(ke,"focus",g),jt(ke,"escape",v),jt(ke,"click",p),jt(ke,"loaderror",y),jt(ke,"loaderstart",E),jt(ke,"networkschange",S),jt(ke,"lineitemclick",T),jt(ke,"confirm",O),jt(ke,"cancel",$),jt(ke,"shippingaddresschange",R),jt(ke,"shippingratechange",te);var It;e==="cart"?It=function(Kn){kn(Kn),m&&m(Kn)}:m&&(e==="expressCheckout"?It=m:It=function(){m(ke)}),jt(ke,"ready",It);var Gn=e==="cart"?function(_e){kn(_e),_&&_(_e)}:_;jt(ke,"change",Gn);var Lt=e==="cart"?function(_e){kn(_e),I&&I(_e)}:I;jt(ke,"checkout",Lt),H.useLayoutEffect(function(){if(U.current===null&&q.current!==null&&(ot||ht)){var _e=null;ht?_e=ht.createElement(e,d):ot&&(_e=ot.create(e,d)),e==="cart"&&ae&&ae(_e),U.current=_e,M(_e),_e&&_e.mount(q.current)}},[ot,ht,d,ae]);var pn=bv(d);return H.useEffect(function(){if(U.current){var _e=wk(d,pn,["paymentRequest"]);_e&&U.current.update(_e)}},[d,pn]),H.useLayoutEffect(function(){return function(){if(U.current&&typeof U.current.destroy=="function")try{U.current.destroy(),U.current=null}catch{}}},[]),H.createElement("div",{id:u,className:c,ref:q})},o=function(l){var u=Tv("mounts <".concat(r,">"));UE("mounts <".concat(r,">"),"customCheckoutSdk"in u);var c=l.id,f=l.className;return H.createElement("div",{id:c,className:f})},s=n?o:i;return s.propTypes={id:F.string,className:F.string,onChange:F.func,onBlur:F.func,onFocus:F.func,onReady:F.func,onEscape:F.func,onClick:F.func,onLoadError:F.func,onLoaderStart:F.func,onNetworksChange:F.func,onCheckout:F.func,onLineItemClick:F.func,onConfirm:F.func,onCancel:F.func,onShippingAddressChange:F.func,onShippingRateChange:F.func,options:F.object},s.displayName=r,s.__elementType=e,s},Ze=typeof window>"u",H5=H.createContext(null);H5.displayName="EmbeddedCheckoutProviderContext";Je("auBankAccount",Ze);Je("card",Ze);Je("cardNumber",Ze);Je("cardExpiry",Ze);Je("cardCvc",Ze);Je("fpxBank",Ze);Je("iban",Ze);Je("idealBank",Ze);Je("p24Bank",Ze);Je("epsBank",Ze);var q5=Je("payment",Ze);Je("expressCheckout",Ze);Je("paymentRequestButton",Ze);Je("linkAuthentication",Ze);var G5=Je("address",Ze);Je("shippingAddress",Ze);Je("cart",Ze);Je("paymentMethodMessaging",Ze);Je("affirmMessage",Ze);Je("afterpayClearpayMessage",Ze);var Ik="https://js.stripe.com/v3",K5=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,zE="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Q5=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Ik,'"]')),n=0;n<e.length;n++){var r=e[n];if(K5.test(r.src))return r}return null},BE=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(Ik).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},Y5=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"2.4.0",startTime:n})},Fa=null,Lc=null,jc=null,X5=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},J5=function(e,n){return function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))}},Z5=function(e){return Fa!==null?Fa:(Fa=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(zE),window.Stripe){n(window.Stripe);return}try{var i=Q5();if(i&&e)console.warn(zE);else if(!i)i=BE(e);else if(i&&jc!==null&&Lc!==null){var o;i.removeEventListener("load",jc),i.removeEventListener("error",Lc),(o=i.parentNode)===null||o===void 0||o.removeChild(i),i=BE(e)}jc=J5(n,r),Lc=X5(r),i.addEventListener("load",jc),i.addEventListener("error",Lc)}catch(s){r(s);return}}),Fa.catch(function(n){return Fa=null,Promise.reject(n)}))},eM=function(e,n,r){if(e===null)return null;var i=e.apply(void 0,n);return Y5(i,r),i},Ua,Ck=!1,xk=function(){return Ua||(Ua=Z5(null).catch(function(e){return Ua=null,Promise.reject(e)}),Ua)};Promise.resolve().then(function(){return xk()}).catch(function(t){Ck||console.warn(t)});var tM=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];Ck=!0;var i=Date.now();return xk().then(function(o){return eM(o,n,i)})},nM={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const rM=nM.REACT_APP_STRIPE_PUBLISHABLE_KEY||"your_default_key_here",iM=tM(rM),oM={mode:"payment",currency:"usd",amount:1099},X0=b.createContext({categoriesMap:{},setCategoriesMap:()=>{}}),sM=({children:t})=>{const[e,n]=b.useState({}),r={categoriesMap:e,setCategoriesMap:n};return w.jsx(X0.Provider,{value:r,children:t})};var Kt=function(){return Kt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Kt.apply(this,arguments)};function J0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ru(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}function kk(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var aM=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,lM=kk(function(t){return aM.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Ee="-ms-",bl="-moz-",de="-webkit-",Ak="comm",Ch="rule",Z0="decl",uM="@import",Pk="@keyframes",cM="@layer",Rk=Math.abs,e1=String.fromCharCode,Iv=Object.assign;function fM(t,e){return lt(t,0)^45?(((e<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function Ok(t){return t.trim()}function yr(t,e){return(t=e.exec(t))?t[0]:t}function Z(t,e,n){return t.replace(e,n)}function Pf(t,e,n){return t.indexOf(e,n)}function lt(t,e){return t.charCodeAt(e)|0}function Us(t,e,n){return t.slice(e,n)}function Xn(t){return t.length}function Nk(t){return t.length}function nl(t,e){return e.push(t),t}function dM(t,e){return t.map(e).join("")}function WE(t,e){return t.filter(function(n){return!yr(n,e)})}var xh=1,zs=1,Dk=0,Tn=0,He=0,fa="";function kh(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:xh,column:zs,length:s,return:"",siblings:a}}function Xr(t,e){return Iv(kh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function zo(t){for(;t.root;)t=Xr(t.root,{children:[t]});nl(t,t.siblings)}function hM(){return He}function pM(){return He=Tn>0?lt(fa,--Tn):0,zs--,He===10&&(zs=1,xh--),He}function jn(){return He=Tn<Dk?lt(fa,Tn++):0,zs++,He===10&&(zs=1,xh++),He}function ho(){return lt(fa,Tn)}function Rf(){return Tn}function Ah(t,e){return Us(fa,t,e)}function Cv(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mM(t){return xh=zs=1,Dk=Xn(fa=t),Tn=0,[]}function gM(t){return fa="",t}function Pm(t){return Ok(Ah(Tn-1,xv(t===91?t+2:t===40?t+1:t)))}function vM(t){for(;(He=ho())&&He<33;)jn();return Cv(t)>2||Cv(He)>3?"":" "}function yM(t,e){for(;--e&&jn()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return Ah(t,Rf()+(e<6&&ho()==32&&jn()==32))}function xv(t){for(;jn();)switch(He){case t:return Tn;case 34:case 39:t!==34&&t!==39&&xv(He);break;case 40:t===41&&xv(t);break;case 92:jn();break}return Tn}function _M(t,e){for(;jn()&&t+He!==57;)if(t+He===84&&ho()===47)break;return"/*"+Ah(e,Tn-1)+"*"+e1(t===47?t:jn())}function wM(t){for(;!Cv(ho());)jn();return Ah(t,Tn)}function EM(t){return gM(Of("",null,null,null,[""],t=mM(t),0,[0],t))}function Of(t,e,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,h=0,g=0,m=1,_=1,v=1,p=0,y="",E=i,S=o,I=r,T=y;_;)switch(g=p,p=jn()){case 40:if(g!=108&&lt(T,f-1)==58){Pf(T+=Z(Pm(p),"&","&\f"),"&\f",Rk(u?a[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:T+=Pm(p);break;case 9:case 10:case 13:case 32:T+=vM(g);break;case 92:T+=yM(Rf()-1,7);continue;case 47:switch(ho()){case 42:case 47:nl(SM(_M(jn(),Rf()),e,n,l),l);break;default:T+="/"}break;case 123*m:a[u++]=Xn(T)*v;case 125*m:case 59:case 0:switch(p){case 0:case 125:_=0;case 59+c:v==-1&&(T=Z(T,/\f/g,"")),h>0&&Xn(T)-f&&nl(h>32?qE(T+";",r,n,f-1,l):qE(Z(T," ","")+";",r,n,f-2,l),l);break;case 59:T+=";";default:if(nl(I=HE(T,e,n,u,c,i,a,y,E=[],S=[],f,o),o),p===123)if(c===0)Of(T,e,I,I,E,o,f,a,S);else switch(d===99&&lt(T,3)===110?100:d){case 100:case 108:case 109:case 115:Of(t,I,I,r&&nl(HE(t,I,I,0,0,i,a,y,i,E=[],f,S),S),i,S,f,a,r?E:S);break;default:Of(T,I,I,I,[""],S,0,a,S)}}u=c=h=0,m=v=1,y=T="",f=s;break;case 58:f=1+Xn(T),h=g;default:if(m<1){if(p==123)--m;else if(p==125&&m++==0&&pM()==125)continue}switch(T+=e1(p),p*m){case 38:v=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(Xn(T)-1)*v,v=1;break;case 64:ho()===45&&(T+=Pm(jn())),d=ho(),c=f=Xn(y=T+=wM(Rf())),p++;break;case 45:g===45&&Xn(T)==2&&(m=0)}}return o}function HE(t,e,n,r,i,o,s,a,l,u,c,f){for(var d=i-1,h=i===0?o:[""],g=Nk(h),m=0,_=0,v=0;m<r;++m)for(var p=0,y=Us(t,d+1,d=Rk(_=s[m])),E=t;p<g;++p)(E=Ok(_>0?h[p]+" "+y:Z(y,/&\f/g,h[p])))&&(l[v++]=E);return kh(t,e,n,i===0?Ch:a,l,u,c,f)}function SM(t,e,n,r){return kh(t,e,n,Ak,e1(hM()),Us(t,2,-2),0,r)}function qE(t,e,n,r,i){return kh(t,e,n,Z0,Us(t,0,r),Us(t,r+1,-1),r,i)}function $k(t,e,n){switch(fM(t,e)){case 5103:return de+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+t+t;case 4789:return bl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return de+t+bl+t+Ee+t+t;case 5936:switch(lt(t,e+11)){case 114:return de+t+Ee+Z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return de+t+Ee+Z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return de+t+Ee+Z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return de+t+Ee+t+t;case 6165:return de+t+Ee+"flex-"+t+t;case 5187:return de+t+Z(t,/(\w+).+(:[^]+)/,de+"box-$1$2"+Ee+"flex-$1$2")+t;case 5443:return de+t+Ee+"flex-item-"+Z(t,/flex-|-self/g,"")+(yr(t,/flex-|baseline/)?"":Ee+"grid-row-"+Z(t,/flex-|-self/g,""))+t;case 4675:return de+t+Ee+"flex-line-pack"+Z(t,/align-content|flex-|-self/g,"")+t;case 5548:return de+t+Ee+Z(t,"shrink","negative")+t;case 5292:return de+t+Ee+Z(t,"basis","preferred-size")+t;case 6060:return de+"box-"+Z(t,"-grow","")+de+t+Ee+Z(t,"grow","positive")+t;case 4554:return de+Z(t,/([^-])(transform)/g,"$1"+de+"$2")+t;case 6187:return Z(Z(Z(t,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),t,"")+t;case 5495:case 3959:return Z(t,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return Z(Z(t,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+t+t;case 4200:if(!yr(t,/flex-|baseline/))return Ee+"grid-column-align"+Us(t,e)+t;break;case 2592:case 3360:return Ee+Z(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,yr(r.props,/grid-\w+-end/)})?~Pf(t+(n=n[e].value),"span",0)?t:Ee+Z(t,"-start","")+t+Ee+"grid-row-span:"+(~Pf(n,"span",0)?yr(n,/\d+/):+yr(n,/\d+/)-+yr(t,/\d+/))+";":Ee+Z(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return yr(r.props,/grid-\w+-start/)})?t:Ee+Z(Z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Z(t,/(.+)-inline(.+)/,de+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xn(t)-1-e>6)switch(lt(t,e+1)){case 109:if(lt(t,e+4)!==45)break;case 102:return Z(t,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+bl+(lt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Pf(t,"stretch",0)?$k(Z(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Ee+i+":"+o+u+(s?Ee+i+"-span:"+(a?l:+l-+o)+u:"")+t});case 4949:if(lt(t,e+6)===121)return Z(t,":",":"+de)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return Z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(lt(t,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+Ee+"$2box$3")+t;case 100:return Z(t,":",":"+Ee)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(t,"scroll-","scroll-snap-")+t}return t}function Td(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function bM(t,e,n,r){switch(t.type){case cM:if(t.children.length)break;case uM:case Z0:return t.return=t.return||t.value;case Ak:return"";case Pk:return t.return=t.value+"{"+Td(t.children,r)+"}";case Ch:if(!Xn(t.value=t.props.join(",")))return""}return Xn(n=Td(t.children,r))?t.return=t.value+"{"+n+"}":""}function TM(t){var e=Nk(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function IM(t){return function(e){e.root||(e=e.return)&&t(e)}}function CM(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Z0:t.return=$k(t.value,t.length,n);return;case Pk:return Td([Xr(t,{value:Z(t.value,"@","@"+de)})],r);case Ch:if(t.length)return dM(n=t.props,function(i){switch(yr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zo(Xr(t,{props:[Z(i,/:(read-\w+)/,":"+bl+"$1")]})),zo(Xr(t,{props:[i]})),Iv(t,{props:WE(n,r)});break;case"::placeholder":zo(Xr(t,{props:[Z(i,/:(plac\w+)/,":"+de+"input-$1")]})),zo(Xr(t,{props:[Z(i,/:(plac\w+)/,":"+bl+"$1")]})),zo(Xr(t,{props:[Z(i,/:(plac\w+)/,Ee+"input-$1")]})),zo(Xr(t,{props:[i]})),Iv(t,{props:WE(n,r)});break}return""})}}var xM={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tn={},Bs=typeof process<"u"&&tn!==void 0&&(tn.REACT_APP_SC_ATTR||tn.SC_ATTR)||"data-styled",Mk="active",Lk="data-styled-version",Ph="6.1.6",t1=`/*!sc*/
`,n1=typeof window<"u"&&"HTMLElement"in window,kM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&tn!==void 0&&tn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&tn.REACT_APP_SC_DISABLE_SPEEDY!==""?tn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&tn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&tn!==void 0&&tn.SC_DISABLE_SPEEDY!==void 0&&tn.SC_DISABLE_SPEEDY!==""&&tn.SC_DISABLE_SPEEDY!=="false"&&tn.SC_DISABLE_SPEEDY),Rh=Object.freeze([]),Ws=Object.freeze({});function AM(t,e,n){return n===void 0&&(n=Ws),t.theme!==n.theme&&t.theme||e||n.theme}var jk=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),PM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,RM=/(^-|-$)/g;function GE(t){return t.replace(PM,"-").replace(RM,"")}var OM=/(a)(d)/gi,Vc=52,KE=function(t){return String.fromCharCode(t+(t>25?39:97))};function kv(t){var e,n="";for(e=Math.abs(t);e>Vc;e=e/Vc|0)n=KE(e%Vc)+n;return(KE(e%Vc)+n).replace(OM,"$1-$2")}var Rm,Vk=5381,hs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Fk=function(t){return hs(Vk,t)};function Uk(t){return kv(Fk(t)>>>0)}function NM(t){return t.displayName||t.name||"Component"}function Om(t){return typeof t=="string"&&!0}var zk=typeof Symbol=="function"&&Symbol.for,Bk=zk?Symbol.for("react.memo"):60115,DM=zk?Symbol.for("react.forward_ref"):60112,$M={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},MM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Wk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},LM=((Rm={})[DM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rm[Bk]=Wk,Rm);function QE(t){return("type"in(e=t)&&e.type.$$typeof)===Bk?Wk:"$$typeof"in t?LM[t.$$typeof]:$M;var e}var jM=Object.defineProperty,VM=Object.getOwnPropertyNames,YE=Object.getOwnPropertySymbols,FM=Object.getOwnPropertyDescriptor,UM=Object.getPrototypeOf,XE=Object.prototype;function Hk(t,e,n){if(typeof e!="string"){if(XE){var r=UM(e);r&&r!==XE&&Hk(t,r,n)}var i=VM(e);YE&&(i=i.concat(YE(e)));for(var o=QE(t),s=QE(e),a=0;a<i.length;++a){var l=i[a];if(!(l in MM||n&&n[l]||s&&l in s||o&&l in o)){var u=FM(e,l);try{jM(t,l,u)}catch{}}}}return t}function Hs(t){return typeof t=="function"}function r1(t){return typeof t=="object"&&"styledComponentId"in t}function to(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Av(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function iu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Pv(t,e,n){if(n===void 0&&(n=!1),!n&&!iu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Pv(t[r],e[r]);else if(iu(e))for(var r in e)t[r]=Pv(t[r],e[r]);return t}function i1(t,e){Object.defineProperty(t,"toString",{value:e})}function zu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var zM=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw zu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(t1);return n},t}(),Nf=new Map,Id=new Map,Df=1,Fc=function(t){if(Nf.has(t))return Nf.get(t);for(;Id.has(Df);)Df++;var e=Df++;return Nf.set(t,e),Id.set(e,t),e},BM=function(t,e){Df=e+1,Nf.set(t,e),Id.set(e,t)},WM="style[".concat(Bs,"][").concat(Lk,'="').concat(Ph,'"]'),HM=new RegExp("^".concat(Bs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qM=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},GM=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(t1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(HM);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(BM(c,u),qM(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function KM(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qk=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Bs,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Bs,Mk),r.setAttribute(Lk,Ph);var s=KM();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},QM=function(){function t(e){this.element=qk(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw zu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),YM=function(){function t(e){this.element=qk(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),XM=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),JE=n1,JM={isServer:!n1,useCSSOMInjection:!kM},Gk=function(){function t(e,n,r){e===void 0&&(e=Ws),n===void 0&&(n={});var i=this;this.options=Kt(Kt({},JM),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&n1&&JE&&(JE=!1,function(o){for(var s=document.querySelectorAll(WM),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Bs)!==Mk&&(GM(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),i1(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var d=function(v){return Id.get(v)}(f);if(d===void 0)return"continue";var h=o.names.get(d),g=s.getGroup(f);if(h===void 0||g.length===0)return"continue";var m="".concat(Bs,".g").concat(f,'[id="').concat(d,'"]'),_="";h!==void 0&&h.forEach(function(v){v.length>0&&(_+="".concat(v,","))}),l+="".concat(g).concat(m,'{content:"').concat(_,'"}').concat(t1)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Fc(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Kt(Kt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new XM(i):r?new QM(i):new YM(i)}(this.options),new zM(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Fc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Fc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Fc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),ZM=/&/g,eL=/^\s*\/\/.*$/gm;function Kk(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Kk(n.children,e)),n})}function tL(t){var e,n,r,i=t===void 0?Ws:t,o=i.options,s=o===void 0?Ws:o,a=i.plugins,l=a===void 0?Rh:a,u=function(d,h,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===Ch&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(ZM,n).replace(r,u))}),s.prefix&&c.push(CM),c.push(bM);var f=function(d,h,g,m){h===void 0&&(h=""),g===void 0&&(g=""),m===void 0&&(m="&"),e=m,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var _=d.replace(eL,""),v=EM(g||h?"".concat(g," ").concat(h," { ").concat(_," }"):_);s.namespace&&(v=Kk(v,s.namespace));var p=[];return Td(v,TM(c.concat(IM(function(y){return p.push(y)})))),p};return f.hash=l.length?l.reduce(function(d,h){return h.name||zu(15),hs(d,h.name)},Vk).toString():"",f}var nL=new Gk,Rv=tL(),Qk=H.createContext({shouldForwardProp:void 0,styleSheet:nL,stylis:Rv});Qk.Consumer;H.createContext(void 0);function ZE(){return b.useContext(Qk)}var Yk=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Rv);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,i1(this,function(){throw zu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Rv),this.name+e.hash},t}(),rL=function(t){return t>="A"&&t<="Z"};function eS(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;rL(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Xk=function(t){return t==null||t===!1||t===""},Jk=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Xk(o)&&(Array.isArray(o)&&o.isCss||Hs(o)?r.push("".concat(eS(i),":"),o,";"):iu(o)?r.push.apply(r,ru(ru(["".concat(i," {")],Jk(o),!1),["}"],!1)):r.push("".concat(eS(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in xM||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function po(t,e,n,r){if(Xk(t))return[];if(r1(t))return[".".concat(t.styledComponentId)];if(Hs(t)){if(!Hs(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return po(i,e,n,r)}var o;return t instanceof Yk?n?(t.inject(n,r),[t.getName(r)]):[t]:iu(t)?Jk(t):Array.isArray(t)?Array.prototype.concat.apply(Rh,t.map(function(s){return po(s,e,n,r)})):[t.toString()]}function iL(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Hs(n)&&!r1(n))return!1}return!0}var oL=Fk(Ph),sL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&iL(e),this.componentId=n,this.baseHash=hs(oL,n),this.baseStyle=r,Gk.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=to(i,this.staticRulesId);else{var o=Av(po(this.rules,e,n,r)),s=kv(hs(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=to(i,s),this.staticRulesId=s}else{for(var l=hs(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=Av(po(f,e,n,r));l=hs(l,d+c),u+=d}}if(u){var h=kv(l>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),i=to(i,h)}}return i},t}(),Zk=H.createContext(void 0);Zk.Consumer;var Nm={};function aL(t,e,n){var r=r1(t),i=t,o=!Om(t),s=e.attrs,a=s===void 0?Rh:s,l=e.componentId,u=l===void 0?function(E,S){var I=typeof E!="string"?"sc":GE(E);Nm[I]=(Nm[I]||0)+1;var T="".concat(I,"-").concat(Uk(Ph+I+Nm[I]));return S?"".concat(S,"-").concat(T):T}(e.displayName,e.parentComponentId):l,c=e.displayName,f=c===void 0?function(E){return Om(E)?"styled.".concat(E):"Styled(".concat(NM(E),")")}(t):c,d=e.displayName&&e.componentId?"".concat(GE(e.displayName),"-").concat(e.componentId):e.componentId||u,h=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(r&&i.shouldForwardProp){var m=i.shouldForwardProp;if(e.shouldForwardProp){var _=e.shouldForwardProp;g=function(E,S){return m(E,S)&&_(E,S)}}else g=m}var v=new sL(n,d,r?i.componentStyle:void 0);function p(E,S){return function(I,T,O){var $=I.attrs,R=I.componentStyle,te=I.defaultProps,ge=I.foldedComponentIds,ot=I.styledComponentId,ht=I.target,Hn=H.useContext(Zk),qn=ZE(),ke=I.shouldForwardProp||qn.shouldForwardProp,M=AM(T,Hn,te)||Ws,U=function(Gn,Lt,pn){for(var _e,Kn=Kt(Kt({},Lt),{className:void 0,theme:pn}),nm=0;nm<Gn.length;nm+=1){var _c=Hs(_e=Gn[nm])?_e(Kn):_e;for(var Hr in _c)Kn[Hr]=Hr==="className"?to(Kn[Hr],_c[Hr]):Hr==="style"?Kt(Kt({},Kn[Hr]),_c[Hr]):_c[Hr]}return Lt.className&&(Kn.className=to(Kn.className,Lt.className)),Kn}($,T,M),q=U.as||ht,fe={};for(var ae in U)U[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&U.theme===M||(ae==="forwardedAs"?fe.as=U.forwardedAs:ke&&!ke(ae,q)||(fe[ae]=U[ae]));var kn=function(Gn,Lt){var pn=ZE(),_e=Gn.generateAndInjectStyles(Lt,pn.styleSheet,pn.stylis);return _e}(R,U),It=to(ge,ot);return kn&&(It+=" "+kn),U.className&&(It+=" "+U.className),fe[Om(q)&&!jk.has(q)?"class":"className"]=It,fe.ref=O,b.createElement(q,fe)}(y,E,S)}p.displayName=f;var y=H.forwardRef(p);return y.attrs=h,y.componentStyle=v,y.displayName=f,y.shouldForwardProp=g,y.foldedComponentIds=r?to(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=d,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(S){for(var I=[],T=1;T<arguments.length;T++)I[T-1]=arguments[T];for(var O=0,$=I;O<$.length;O++)Pv(S,$[O],!0);return S}({},i.defaultProps,E):E}}),i1(y,function(){return".".concat(y.styledComponentId)}),o&&Hk(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function tS(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var nS=function(t){return Object.assign(t,{isCss:!0})};function bo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Hs(t)||iu(t))return nS(po(tS(Rh,ru([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?po(r):nS(po(tS(r,e)))}function Ov(t,e,n){if(n===void 0&&(n=Ws),!e)throw zu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,bo.apply(void 0,ru([i],o,!1)))};return r.attrs=function(i){return Ov(t,e,Kt(Kt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ov(t,e,Kt(Kt({},n),i))},r}var eA=function(t){return Ov(aL,t)},A=eA;jk.forEach(function(t){A[t]=eA(t)});function Oh(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Av(bo.apply(void 0,ru([t],e,!1))),i=Uk(r);return new Yk(i,r)}var o1={},tA={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(tA);var Nh=tA.exports,Dm={};function B(){return B=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},B.apply(this,arguments)}function ri(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function nA(t){if(!ri(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=nA(t[n])}),e}function Vn(t,e,n={clone:!0}){const r=n.clone?B({},t):t;return ri(t)&&ri(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(ri(e[i])&&i in t&&ri(t[i])?r[i]=Vn(t[i],e[i],n):n.clone?r[i]=ri(e[i])?nA(e[i]):e[i]:r[i]=e[i])}),r}function qs(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function ar(t){if(typeof t!="string")throw new Error(qs(7));return t.charAt(0).toUpperCase()+t.slice(1)}function lL(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function uL(t,e=166){let n;function r(...i){const o=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(o,e)}return r.clear=()=>{clearTimeout(n)},r}function cL(t,e){return()=>null}function fL(t,e){var n,r;return b.isValidElement(t)&&e.indexOf((n=t.type.muiName)!=null?n:(r=t.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function rA(t){return t&&t.ownerDocument||document}function dL(t){return rA(t).defaultView||window}function hL(t,e){return()=>null}function iA(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const pL=typeof window<"u"?b.useLayoutEffect:b.useEffect,oA=pL;let rS=0;function mL(t){const[e,n]=b.useState(t),r=t||e;return b.useEffect(()=>{e==null&&(rS+=1,n(`mui-${rS}`))},[e]),r}const iS=Xf.useId;function gL(t){if(iS!==void 0){const e=iS();return t??e}return mL(t)}function vL(t,e,n,r,i){return null}function yL({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=b.useRef(t!==void 0),[o,s]=b.useState(e),a=i?t:o,l=b.useCallback(u=>{i||s(u)},[]);return[a,l]}function _L(t){const e=b.useRef(t);return oA(()=>{e.current=t}),b.useRef((...n)=>(0,e.current)(...n)).current}function wL(...t){return b.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{iA(n,e)})},t)}let Dh=!0,Nv=!1,oS;const EL={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function SL(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&EL[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function bL(t){t.metaKey||t.altKey||t.ctrlKey||(Dh=!0)}function $m(){Dh=!1}function TL(){this.visibilityState==="hidden"&&Nv&&(Dh=!0)}function IL(t){t.addEventListener("keydown",bL,!0),t.addEventListener("mousedown",$m,!0),t.addEventListener("pointerdown",$m,!0),t.addEventListener("touchstart",$m,!0),t.addEventListener("visibilitychange",TL,!0)}function CL(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return Dh||SL(e)}function xL(){const t=b.useCallback(i=>{i!=null&&IL(i.ownerDocument)},[]),e=b.useRef(!1);function n(){return e.current?(Nv=!0,window.clearTimeout(oS),oS=window.setTimeout(()=>{Nv=!1},100),e.current=!1,!0):!1}function r(i){return CL(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function sA(t,e){const n=B({},e);return Object.keys(t).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=B({},t[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=t[r]||{},o=e[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]=B({},o),Object.keys(i).forEach(s=>{n[r][s]=sA(i[s],o[s])}))}else n[r]===void 0&&(n[r]=t[r])}),n}function kL(t,e,n=void 0){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((o,s)=>{if(s){const a=e(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),r}const sS=t=>t,AL=()=>{let t=sS;return{configure(e){t=e},generate(e){return t(e)},reset(){t=sS}}},aA=AL(),PL={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function lA(t,e,n="Mui"){const r=PL[e];return r?`${n}-${r}`:`${aA.generate(t)}-${e}`}function RL(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=lA(t,i,n)}),r}function Bn(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uA(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=uA(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function OL(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=uA(t))&&(r&&(r+=" "),r+=e);return r}function NL(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function DL(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var $L=function(){function t(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(DL(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=NL(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),At="-ms-",Cd="-moz-",le="-webkit-",cA="comm",s1="rule",a1="decl",ML="@import",fA="@keyframes",LL="@layer",jL=Math.abs,$h=String.fromCharCode,VL=Object.assign;function FL(t,e){return vt(t,0)^45?(((e<<2^vt(t,0))<<2^vt(t,1))<<2^vt(t,2))<<2^vt(t,3):0}function dA(t){return t.trim()}function UL(t,e){return(t=e.exec(t))?t[0]:t}function ue(t,e,n){return t.replace(e,n)}function Dv(t,e){return t.indexOf(e)}function vt(t,e){return t.charCodeAt(e)|0}function ou(t,e,n){return t.slice(e,n)}function Jn(t){return t.length}function l1(t){return t.length}function Uc(t,e){return e.push(t),t}function zL(t,e){return t.map(e).join("")}var Mh=1,Gs=1,hA=0,en=0,qe=0,da="";function Lh(t,e,n,r,i,o,s){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Mh,column:Gs,length:s,return:""}}function za(t,e){return VL(Lh("",null,null,"",null,null,0),t,{length:-t.length},e)}function BL(){return qe}function WL(){return qe=en>0?vt(da,--en):0,Gs--,qe===10&&(Gs=1,Mh--),qe}function an(){return qe=en<hA?vt(da,en++):0,Gs++,qe===10&&(Gs=1,Mh++),qe}function lr(){return vt(da,en)}function $f(){return en}function Bu(t,e){return ou(da,t,e)}function su(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pA(t){return Mh=Gs=1,hA=Jn(da=t),en=0,[]}function mA(t){return da="",t}function Mf(t){return dA(Bu(en-1,$v(t===91?t+2:t===40?t+1:t)))}function HL(t){for(;(qe=lr())&&qe<33;)an();return su(t)>2||su(qe)>3?"":" "}function qL(t,e){for(;--e&&an()&&!(qe<48||qe>102||qe>57&&qe<65||qe>70&&qe<97););return Bu(t,$f()+(e<6&&lr()==32&&an()==32))}function $v(t){for(;an();)switch(qe){case t:return en;case 34:case 39:t!==34&&t!==39&&$v(qe);break;case 40:t===41&&$v(t);break;case 92:an();break}return en}function GL(t,e){for(;an()&&t+qe!==57;)if(t+qe===84&&lr()===47)break;return"/*"+Bu(e,en-1)+"*"+$h(t===47?t:an())}function KL(t){for(;!su(lr());)an();return Bu(t,en)}function QL(t){return mA(Lf("",null,null,null,[""],t=pA(t),0,[0],t))}function Lf(t,e,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,h=0,g=0,m=1,_=1,v=1,p=0,y="",E=i,S=o,I=r,T=y;_;)switch(g=p,p=an()){case 40:if(g!=108&&vt(T,f-1)==58){Dv(T+=ue(Mf(p),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:T+=Mf(p);break;case 9:case 10:case 13:case 32:T+=HL(g);break;case 92:T+=qL($f()-1,7);continue;case 47:switch(lr()){case 42:case 47:Uc(YL(GL(an(),$f()),e,n),l);break;default:T+="/"}break;case 123*m:a[u++]=Jn(T)*v;case 125*m:case 59:case 0:switch(p){case 0:case 125:_=0;case 59+c:v==-1&&(T=ue(T,/\f/g,"")),h>0&&Jn(T)-f&&Uc(h>32?lS(T+";",r,n,f-1):lS(ue(T," ","")+";",r,n,f-2),l);break;case 59:T+=";";default:if(Uc(I=aS(T,e,n,u,c,i,a,y,E=[],S=[],f),o),p===123)if(c===0)Lf(T,e,I,I,E,o,f,a,S);else switch(d===99&&vt(T,3)===110?100:d){case 100:case 108:case 109:case 115:Lf(t,I,I,r&&Uc(aS(t,I,I,0,0,i,a,y,i,E=[],f),S),i,S,f,a,r?E:S);break;default:Lf(T,I,I,I,[""],S,0,a,S)}}u=c=h=0,m=v=1,y=T="",f=s;break;case 58:f=1+Jn(T),h=g;default:if(m<1){if(p==123)--m;else if(p==125&&m++==0&&WL()==125)continue}switch(T+=$h(p),p*m){case 38:v=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(Jn(T)-1)*v,v=1;break;case 64:lr()===45&&(T+=Mf(an())),d=lr(),c=f=Jn(y=T+=KL($f())),p++;break;case 45:g===45&&Jn(T)==2&&(m=0)}}return o}function aS(t,e,n,r,i,o,s,a,l,u,c){for(var f=i-1,d=i===0?o:[""],h=l1(d),g=0,m=0,_=0;g<r;++g)for(var v=0,p=ou(t,f+1,f=jL(m=s[g])),y=t;v<h;++v)(y=dA(m>0?d[v]+" "+p:ue(p,/&\f/g,d[v])))&&(l[_++]=y);return Lh(t,e,n,i===0?s1:a,l,u,c)}function YL(t,e,n){return Lh(t,e,n,cA,$h(BL()),ou(t,2,-2),0)}function lS(t,e,n,r){return Lh(t,e,n,a1,ou(t,0,r),ou(t,r+1,-1),r)}function Is(t,e){for(var n="",r=l1(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function XL(t,e,n,r){switch(t.type){case LL:if(t.children.length)break;case ML:case a1:return t.return=t.return||t.value;case cA:return"";case fA:return t.return=t.value+"{"+Is(t.children,r)+"}";case s1:t.value=t.props.join(",")}return Jn(n=Is(t.children,r))?t.return=t.value+"{"+n+"}":""}function JL(t){var e=l1(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function ZL(t){return function(e){e.root||(e=e.return)&&t(e)}}var e3=function(e,n,r){for(var i=0,o=0;i=o,o=lr(),i===38&&o===12&&(n[r]=1),!su(o);)an();return Bu(e,en)},t3=function(e,n){var r=-1,i=44;do switch(su(i)){case 0:i===38&&lr()===12&&(n[r]=1),e[r]+=e3(en-1,n,r);break;case 2:e[r]+=Mf(i);break;case 4:if(i===44){e[++r]=lr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=$h(i)}while(i=an());return e},n3=function(e,n){return mA(t3(pA(e),n))},uS=new WeakMap,r3=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!uS.get(r))&&!i){uS.set(e,!0);for(var o=[],s=n3(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=o[l]?s[l].replace(/&\f/g,a[c]):a[c]+" "+s[l]}}},i3=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function gA(t,e){switch(FL(t,e)){case 5103:return le+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return le+t+Cd+t+At+t+t;case 6828:case 4268:return le+t+At+t+t;case 6165:return le+t+At+"flex-"+t+t;case 5187:return le+t+ue(t,/(\w+).+(:[^]+)/,le+"box-$1$2"+At+"flex-$1$2")+t;case 5443:return le+t+At+"flex-item-"+ue(t,/flex-|-self/,"")+t;case 4675:return le+t+At+"flex-line-pack"+ue(t,/align-content|flex-|-self/,"")+t;case 5548:return le+t+At+ue(t,"shrink","negative")+t;case 5292:return le+t+At+ue(t,"basis","preferred-size")+t;case 6060:return le+"box-"+ue(t,"-grow","")+le+t+At+ue(t,"grow","positive")+t;case 4554:return le+ue(t,/([^-])(transform)/g,"$1"+le+"$2")+t;case 6187:return ue(ue(ue(t,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),t,"")+t;case 5495:case 3959:return ue(t,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return ue(ue(t,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+At+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+t+t;case 4095:case 3583:case 4068:case 2532:return ue(t,/(.+)-inline(.+)/,le+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jn(t)-1-e>6)switch(vt(t,e+1)){case 109:if(vt(t,e+4)!==45)break;case 102:return ue(t,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+Cd+(vt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Dv(t,"stretch")?gA(ue(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(vt(t,e+1)!==115)break;case 6444:switch(vt(t,Jn(t)-3-(~Dv(t,"!important")&&10))){case 107:return ue(t,":",":"+le)+t;case 101:return ue(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+le+(vt(t,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+At+"$2box$3")+t}break;case 5936:switch(vt(t,e+11)){case 114:return le+t+At+ue(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return le+t+At+ue(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return le+t+At+ue(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return le+t+At+t+t}return t}var o3=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case a1:e.return=gA(e.value,e.length);break;case fA:return Is([za(e,{value:ue(e.value,"@","@"+le)})],i);case s1:if(e.length)return zL(e.props,function(o){switch(UL(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Is([za(e,{props:[ue(o,/:(read-\w+)/,":"+Cd+"$1")]})],i);case"::placeholder":return Is([za(e,{props:[ue(o,/:(plac\w+)/,":"+le+"input-$1")]}),za(e,{props:[ue(o,/:(plac\w+)/,":"+Cd+"$1")]}),za(e,{props:[ue(o,/:(plac\w+)/,At+"input-$1")]})],i)}return""})}},s3=[o3],a3=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var _=m.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=e.stylisPlugins||s3,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var _=m.getAttribute("data-emotion").split(" "),v=1;v<_.length;v++)o[_[v]]=!0;a.push(m)});var l,u=[r3,i3];{var c,f=[XL,ZL(function(m){c.insert(m)})],d=JL(u.concat(i,f)),h=function(_){return Is(QL(_),d)};l=function(_,v,p,y){c=p,h(_?_+"{"+v.styles+"}":v.styles),y&&(g.inserted[v.name]=!0)}}var g={key:n,sheet:new $L({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(a),g},vA={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=typeof Symbol=="function"&&Symbol.for,u1=ft?Symbol.for("react.element"):60103,c1=ft?Symbol.for("react.portal"):60106,jh=ft?Symbol.for("react.fragment"):60107,Vh=ft?Symbol.for("react.strict_mode"):60108,Fh=ft?Symbol.for("react.profiler"):60114,Uh=ft?Symbol.for("react.provider"):60109,zh=ft?Symbol.for("react.context"):60110,f1=ft?Symbol.for("react.async_mode"):60111,Bh=ft?Symbol.for("react.concurrent_mode"):60111,Wh=ft?Symbol.for("react.forward_ref"):60112,Hh=ft?Symbol.for("react.suspense"):60113,l3=ft?Symbol.for("react.suspense_list"):60120,qh=ft?Symbol.for("react.memo"):60115,Gh=ft?Symbol.for("react.lazy"):60116,u3=ft?Symbol.for("react.block"):60121,c3=ft?Symbol.for("react.fundamental"):60117,f3=ft?Symbol.for("react.responder"):60118,d3=ft?Symbol.for("react.scope"):60119;function dn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case u1:switch(t=t.type,t){case f1:case Bh:case jh:case Fh:case Vh:case Hh:return t;default:switch(t=t&&t.$$typeof,t){case zh:case Wh:case Gh:case qh:case Uh:return t;default:return e}}case c1:return e}}}function yA(t){return dn(t)===Bh}me.AsyncMode=f1;me.ConcurrentMode=Bh;me.ContextConsumer=zh;me.ContextProvider=Uh;me.Element=u1;me.ForwardRef=Wh;me.Fragment=jh;me.Lazy=Gh;me.Memo=qh;me.Portal=c1;me.Profiler=Fh;me.StrictMode=Vh;me.Suspense=Hh;me.isAsyncMode=function(t){return yA(t)||dn(t)===f1};me.isConcurrentMode=yA;me.isContextConsumer=function(t){return dn(t)===zh};me.isContextProvider=function(t){return dn(t)===Uh};me.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===u1};me.isForwardRef=function(t){return dn(t)===Wh};me.isFragment=function(t){return dn(t)===jh};me.isLazy=function(t){return dn(t)===Gh};me.isMemo=function(t){return dn(t)===qh};me.isPortal=function(t){return dn(t)===c1};me.isProfiler=function(t){return dn(t)===Fh};me.isStrictMode=function(t){return dn(t)===Vh};me.isSuspense=function(t){return dn(t)===Hh};me.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===jh||t===Bh||t===Fh||t===Vh||t===Hh||t===l3||typeof t=="object"&&t!==null&&(t.$$typeof===Gh||t.$$typeof===qh||t.$$typeof===Uh||t.$$typeof===zh||t.$$typeof===Wh||t.$$typeof===c3||t.$$typeof===f3||t.$$typeof===d3||t.$$typeof===u3)};me.typeOf=dn;vA.exports=me;var h3=vA.exports,d1=h3,p3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},m3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_A={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h1={};h1[d1.ForwardRef]=g3;h1[d1.Memo]=_A;function cS(t){return d1.isMemo(t)?_A:h1[t.$$typeof]||p3}var v3=Object.defineProperty,y3=Object.getOwnPropertyNames,fS=Object.getOwnPropertySymbols,_3=Object.getOwnPropertyDescriptor,w3=Object.getPrototypeOf,dS=Object.prototype;function wA(t,e,n){if(typeof e!="string"){if(dS){var r=w3(e);r&&r!==dS&&wA(t,r,n)}var i=y3(e);fS&&(i=i.concat(fS(e)));for(var o=cS(t),s=cS(e),a=0;a<i.length;++a){var l=i[a];if(!m3[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=_3(e,l);try{v3(t,l,u)}catch{}}}}return t}var E3=wA;const S3=Do(E3);var b3=!0;function T3(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var EA=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||b3===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},I3=function(e,n,r){EA(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+i:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function C3(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var x3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},k3=/[A-Z]|^ms/g,A3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,SA=function(e){return e.charCodeAt(1)===45},hS=function(e){return e!=null&&typeof e!="boolean"},Mm=kk(function(t){return SA(t)?t:t.replace(k3,"-$&").toLowerCase()}),pS=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(A3,function(r,i,o){return Zn={name:i,styles:o,next:Zn},i})}return x3[e]!==1&&!SA(e)&&typeof n=="number"&&n!==0?n+"px":n};function au(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Zn={name:n.name,styles:n.styles,next:Zn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Zn={name:r.name,styles:r.styles,next:Zn},r=r.next;var i=n.styles+";";return i}return P3(t,e,n)}case"function":{if(t!==void 0){var o=Zn,s=n(t);return Zn=o,au(t,e,s)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function P3(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=au(t,e,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=o+"{"+e[s]+"}":hS(s)&&(r+=Mm(o)+":"+pS(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var a=0;a<s.length;a++)hS(s[a])&&(r+=Mm(o)+":"+pS(o,s[a])+";");else{var l=au(t,e,s);switch(o){case"animation":case"animationName":{r+=Mm(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var mS=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Zn,R3=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";Zn=void 0;var s=e[0];s==null||s.raw===void 0?(i=!1,o+=au(r,n,s)):o+=s[0];for(var a=1;a<e.length;a++)o+=au(r,n,e[a]),i&&(o+=s[a]);mS.lastIndex=0;for(var l="",u;(u=mS.exec(o))!==null;)l+="-"+u[1];var c=C3(o)+l;return{name:c,styles:o,next:Zn}},O3=function(e){return e()},N3=Xf.useInsertionEffect?Xf.useInsertionEffect:!1,D3=N3||O3,bA=b.createContext(typeof HTMLElement<"u"?a3({key:"css"}):null);bA.Provider;var $3=function(e){return b.forwardRef(function(n,r){var i=b.useContext(bA);return e(n,i,r)})},TA=b.createContext({}),M3=lM,L3=function(e){return e!=="theme"},gS=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?M3:L3},vS=function(e,n,r){var i;if(n){var o=n.shouldForwardProp;i=e.__emotion_forwardProp&&o?function(s){return e.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},j3=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return EA(n,r,i),D3(function(){return I3(n,r,i)}),null},V3=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,o,s;n!==void 0&&(o=n.label,s=n.target);var a=vS(e,n,r),l=a||gS(i),u=!l("as");return function(){var c=arguments,f=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)f.push.apply(f,c);else{f.push(c[0][0]);for(var d=c.length,h=1;h<d;h++)f.push(c[h],c[0][h])}var g=$3(function(m,_,v){var p=u&&m.as||i,y="",E=[],S=m;if(m.theme==null){S={};for(var I in m)S[I]=m[I];S.theme=b.useContext(TA)}typeof m.className=="string"?y=T3(_.registered,E,m.className):m.className!=null&&(y=m.className+" ");var T=R3(f.concat(E),_.registered,S);y+=_.key+"-"+T.name,s!==void 0&&(y+=" "+s);var O=u&&a===void 0?gS(p):l,$={};for(var R in m)u&&R==="as"||O(R)&&($[R]=m[R]);return $.className=y,$.ref=v,b.createElement(b.Fragment,null,b.createElement(j3,{cache:_,serialized:T,isStringTag:typeof p=="string"}),b.createElement(p,$))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=e.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=f,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+s}}),g.withComponent=function(m,_){return t(m,B({},n,_,{shouldForwardProp:vS(g,_,!0)})).apply(void 0,f)},g}},F3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Mv=V3.bind();F3.forEach(function(t){Mv[t]=Mv(t)});function U3(t,e){return Mv(t,e)}const z3=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},B3=["values","unit","step"],W3=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>B({},n,{[r.key]:r.val}),{})};function H3(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=Bn(t,B3),o=W3(e),s=Object.keys(o);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-r/100}${n})`}function u(d,h){const g=s.indexOf(h);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(g!==-1&&typeof e[s[g]]=="number"?e[s[g]]:h)-r/100}${n})`}function c(d){return s.indexOf(d)+1<s.length?u(d,s[s.indexOf(d)+1]):a(d)}function f(d){const h=s.indexOf(d);return h===0?a(s[1]):h===s.length-1?l(s[h]):u(d,s[s.indexOf(d)+1]).replace("@media","@media not all and")}return B({keys:s,values:o,up:a,down:l,between:u,only:c,not:f,unit:n},i)}const q3={borderRadius:4},G3=q3;function Tl(t,e){return e?Vn(t,e,{clone:!1}):t}const p1={xs:0,sm:600,md:900,lg:1200,xl:1536},yS={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${p1[t]}px)`};function Or(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const o=r.breakpoints||yS;return e.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(e[l]),s),{})}if(typeof e=="object"){const o=r.breakpoints||yS;return Object.keys(e).reduce((s,a)=>{if(Object.keys(o.values||p1).indexOf(a)!==-1){const l=o.up(a);s[l]=n(e[a],a)}else{const l=a;s[l]=e[l]}return s},{})}return n(e)}function K3(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const o=t.up(i);return r[o]={},r},{}))||{}}function Q3(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function Kh(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function xd(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=Kh(t,n)||r,e&&(i=e(i,r,t)),i}function ze(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,o=s=>{if(s[e]==null)return null;const a=s[e],l=s.theme,u=Kh(l,r)||{};return Or(s,a,f=>{let d=xd(u,i,f);return f===d&&typeof f=="string"&&(d=xd(u,i,`${e}${f==="default"?"":ar(f)}`,f)),n===!1?d:{[n]:d}})};return o.propTypes={},o.filterProps=[e],o}function Y3(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const X3={m:"margin",p:"padding"},J3={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},_S={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Z3=Y3(t=>{if(t.length>2)if(_S[t])t=_S[t];else return[t];const[e,n]=t.split(""),r=X3[e],i=J3[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),m1=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],g1=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...m1,...g1];function Wu(t,e,n,r){var i;const o=(i=Kh(t,e,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function IA(t){return Wu(t,"spacing",8)}function Hu(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function ej(t,e){return n=>t.reduce((r,i)=>(r[i]=Hu(e,n),r),{})}function tj(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=Z3(n),o=ej(i,r),s=t[n];return Or(t,s,o)}function CA(t,e){const n=IA(t.theme);return Object.keys(t).map(r=>tj(t,e,r,n)).reduce(Tl,{})}function Me(t){return CA(t,m1)}Me.propTypes={};Me.filterProps=m1;function Le(t){return CA(t,g1)}Le.propTypes={};Le.filterProps=g1;function nj(t=8){if(t.mui)return t;const e=IA({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=e(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Qh(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>e[o]?Tl(i,e[o](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function vn(t){return typeof t!="number"?t:`${t}px solid`}function xn(t,e){return ze({prop:t,themeKey:"borders",transform:e})}const rj=xn("border",vn),ij=xn("borderTop",vn),oj=xn("borderRight",vn),sj=xn("borderBottom",vn),aj=xn("borderLeft",vn),lj=xn("borderColor"),uj=xn("borderTopColor"),cj=xn("borderRightColor"),fj=xn("borderBottomColor"),dj=xn("borderLeftColor"),hj=xn("outline",vn),pj=xn("outlineColor"),Yh=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Wu(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Hu(e,r)});return Or(t,t.borderRadius,n)}return null};Yh.propTypes={};Yh.filterProps=["borderRadius"];Qh(rj,ij,oj,sj,aj,lj,uj,cj,fj,dj,Yh,hj,pj);const Xh=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Wu(t.theme,"spacing",8),n=r=>({gap:Hu(e,r)});return Or(t,t.gap,n)}return null};Xh.propTypes={};Xh.filterProps=["gap"];const Jh=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Wu(t.theme,"spacing",8),n=r=>({columnGap:Hu(e,r)});return Or(t,t.columnGap,n)}return null};Jh.propTypes={};Jh.filterProps=["columnGap"];const Zh=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Wu(t.theme,"spacing",8),n=r=>({rowGap:Hu(e,r)});return Or(t,t.rowGap,n)}return null};Zh.propTypes={};Zh.filterProps=["rowGap"];const mj=ze({prop:"gridColumn"}),gj=ze({prop:"gridRow"}),vj=ze({prop:"gridAutoFlow"}),yj=ze({prop:"gridAutoColumns"}),_j=ze({prop:"gridAutoRows"}),wj=ze({prop:"gridTemplateColumns"}),Ej=ze({prop:"gridTemplateRows"}),Sj=ze({prop:"gridTemplateAreas"}),bj=ze({prop:"gridArea"});Qh(Xh,Jh,Zh,mj,gj,vj,yj,_j,wj,Ej,Sj,bj);function Cs(t,e){return e==="grey"?e:t}const Tj=ze({prop:"color",themeKey:"palette",transform:Cs}),Ij=ze({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Cs}),Cj=ze({prop:"backgroundColor",themeKey:"palette",transform:Cs});Qh(Tj,Ij,Cj);function rn(t){return t<=1&&t!==0?`${t*100}%`:t}const xj=ze({prop:"width",transform:rn}),v1=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i;const o=((r=t.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||p1[n];return o?((i=t.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${o}${t.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:rn(n)}};return Or(t,t.maxWidth,e)}return null};v1.filterProps=["maxWidth"];const kj=ze({prop:"minWidth",transform:rn}),Aj=ze({prop:"height",transform:rn}),Pj=ze({prop:"maxHeight",transform:rn}),Rj=ze({prop:"minHeight",transform:rn});ze({prop:"size",cssProperty:"width",transform:rn});ze({prop:"size",cssProperty:"height",transform:rn});const Oj=ze({prop:"boxSizing"});Qh(xj,v1,kj,Aj,Pj,Rj,Oj);const Nj={border:{themeKey:"borders",transform:vn},borderTop:{themeKey:"borders",transform:vn},borderRight:{themeKey:"borders",transform:vn},borderBottom:{themeKey:"borders",transform:vn},borderLeft:{themeKey:"borders",transform:vn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:vn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Yh},color:{themeKey:"palette",transform:Cs},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Cs},backgroundColor:{themeKey:"palette",transform:Cs},p:{style:Le},pt:{style:Le},pr:{style:Le},pb:{style:Le},pl:{style:Le},px:{style:Le},py:{style:Le},padding:{style:Le},paddingTop:{style:Le},paddingRight:{style:Le},paddingBottom:{style:Le},paddingLeft:{style:Le},paddingX:{style:Le},paddingY:{style:Le},paddingInline:{style:Le},paddingInlineStart:{style:Le},paddingInlineEnd:{style:Le},paddingBlock:{style:Le},paddingBlockStart:{style:Le},paddingBlockEnd:{style:Le},m:{style:Me},mt:{style:Me},mr:{style:Me},mb:{style:Me},ml:{style:Me},mx:{style:Me},my:{style:Me},margin:{style:Me},marginTop:{style:Me},marginRight:{style:Me},marginBottom:{style:Me},marginLeft:{style:Me},marginX:{style:Me},marginY:{style:Me},marginInline:{style:Me},marginInlineStart:{style:Me},marginInlineEnd:{style:Me},marginBlock:{style:Me},marginBlockStart:{style:Me},marginBlockEnd:{style:Me},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Xh},rowGap:{style:Zh},columnGap:{style:Jh},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:rn},maxWidth:{style:v1},minWidth:{transform:rn},height:{transform:rn},maxHeight:{transform:rn},minHeight:{transform:rn},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},y1=Nj;function Dj(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function $j(t,e){return typeof t=="function"?t(e):t}function Mj(){function t(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:u,transform:c,style:f}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const d=Kh(i,u)||{};return f?f(s):Or(s,r,g=>{let m=xd(d,c,g);return g===m&&typeof g=="string"&&(m=xd(d,c,`${n}${g==="default"?"":ar(g)}`,g)),l===!1?m:{[l]:m}})}function e(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const s=(r=o.unstable_sxConfig)!=null?r:y1;function a(l){let u=l;if(typeof l=="function")u=l(o);else if(typeof l!="object")return l;if(!u)return null;const c=K3(o.breakpoints),f=Object.keys(c);let d=c;return Object.keys(u).forEach(h=>{const g=$j(u[h],o);if(g!=null)if(typeof g=="object")if(s[h])d=Tl(d,t(h,g,o,s));else{const m=Or({theme:o},g,_=>({[h]:_}));Dj(m,g)?d[h]=e({sx:g,theme:o}):d=Tl(d,m)}else d=Tl(d,t(h,g,o,s))}),Q3(f,d)}return Array.isArray(i)?i.map(a):a(i)}return e}const ep=Mj();ep.filterProps=["sx"];const Lj=["breakpoints","palette","spacing","shape"];function _1(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=t,s=Bn(t,Lj),a=H3(n),l=nj(i);let u=Vn({breakpoints:a,direction:"ltr",components:{},palette:B({mode:"light"},r),spacing:l,shape:B({},G3,o)},s);return u=e.reduce((c,f)=>Vn(c,f),u),u.unstable_sxConfig=B({},y1,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(f){return ep({sx:f,theme:this})},u}function jj(t){return Object.keys(t).length===0}function Vj(t=null){const e=b.useContext(TA);return!e||jj(e)?t:e}const Fj=_1();function Uj(t=Fj){return Vj(t)}const zj=["variant"];function wS(t){return t.length===0}function xA(t){const{variant:e}=t,n=Bn(t,zj);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=wS(r)?t[i]:ar(t[i]):r+=`${wS(r)?i:ar(i)}${ar(t[i].toString())}`}),r}const Bj=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Wj(t){return Object.keys(t).length===0}function Hj(t){return typeof t=="string"&&t.charCodeAt(0)>96}const qj=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,kd=t=>{let e=0;const n={};return t&&t.forEach(r=>{let i="";typeof r.props=="function"?(i=`callback${e}`,e+=1):i=xA(r.props),n[i]=r.style}),n},Gj=(t,e)=>{let n=[];return e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants),kd(n)},Ad=(t,e,n)=>{const{ownerState:r={}}=t,i=[];let o=0;return n&&n.forEach(s=>{let a=!0;if(typeof s.props=="function"){const l=B({},t,r);a=s.props(l)}else Object.keys(s.props).forEach(l=>{r[l]!==s.props[l]&&t[l]!==s.props[l]&&(a=!1)});a&&(typeof s.props=="function"?i.push(e[`callback${o}`]):i.push(e[xA(s.props)])),typeof s.props=="function"&&(o+=1)}),i},Kj=(t,e,n,r)=>{var i;const o=n==null||(i=n.components)==null||(i=i[r])==null?void 0:i.variants;return Ad(t,e,o)};function jf(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const Qj=_1(),Yj=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function Vf({defaultTheme:t,theme:e,themeId:n}){return Wj(e)?t:e[n]||e}function Xj(t){return t?(e,n)=>n[t]:null}const ES=({styledArg:t,props:e,defaultTheme:n,themeId:r})=>{const i=t(B({},e,{theme:Vf(B({},e,{defaultTheme:n,themeId:r}))}));let o;if(i&&i.variants&&(o=i.variants,delete i.variants),o){const s=Ad(e,kd(o),o);return[i,...s]}return i};function Jj(t={}){const{themeId:e,defaultTheme:n=Qj,rootShouldForwardProp:r=jf,slotShouldForwardProp:i=jf}=t,o=s=>ep(B({},s,{theme:Vf(B({},s,{defaultTheme:n,themeId:e}))}));return o.__mui_systemSx=!0,(s,a={})=>{z3(s,E=>E.filter(S=>!(S!=null&&S.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:f,overridesResolver:d=Xj(Yj(u))}=a,h=Bn(a,Bj),g=c!==void 0?c:u&&u!=="Root"&&u!=="root"||!1,m=f||!1;let _,v=jf;u==="Root"||u==="root"?v=r:u?v=i:Hj(s)&&(v=void 0);const p=U3(s,B({shouldForwardProp:v,label:_},h)),y=(E,...S)=>{const I=S?S.map(R=>{if(typeof R=="function"&&R.__emotion_real!==R)return te=>ES({styledArg:R,props:te,defaultTheme:n,themeId:e});if(ri(R)){let te=R,ge;return R&&R.variants&&(ge=R.variants,delete te.variants,te=ot=>{let ht=R;return Ad(ot,kd(ge),ge).forEach(qn=>{ht=Vn(ht,qn)}),ht}),te}return R}):[];let T=E;if(ri(E)){let R;E&&E.variants&&(R=E.variants,delete T.variants,T=te=>{let ge=E;return Ad(te,kd(R),R).forEach(ht=>{ge=Vn(ge,ht)}),ge})}else typeof E=="function"&&E.__emotion_real!==E&&(T=R=>ES({styledArg:E,props:R,defaultTheme:n,themeId:e}));l&&d&&I.push(R=>{const te=Vf(B({},R,{defaultTheme:n,themeId:e})),ge=qj(l,te);if(ge){const ot={};return Object.entries(ge).forEach(([ht,Hn])=>{ot[ht]=typeof Hn=="function"?Hn(B({},R,{theme:te})):Hn}),d(R,ot)}return null}),l&&!g&&I.push(R=>{const te=Vf(B({},R,{defaultTheme:n,themeId:e}));return Kj(R,Gj(l,te),te,l)}),m||I.push(o);const O=I.length-S.length;if(Array.isArray(E)&&O>0){const R=new Array(O).fill("");T=[...E,...R],T.raw=[...E.raw,...R]}const $=p(T,...I);return s.muiName&&($.muiName=s.muiName),$};return p.withConfig&&(y.withConfig=p.withConfig),y}}function Zj(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:sA(e.components[n].defaultProps,r)}function eV({props:t,name:e,defaultTheme:n,themeId:r}){let i=Uj(n);return r&&(i=i[r]||i),Zj({theme:i,name:e,props:t})}function kA(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function tV(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Ks(t){if(t.type)return t;if(t.charAt(0)==="#")return Ks(tV(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(qs(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(qs(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function w1(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function nV(t){t=Ks(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,o=r*Math.min(i,1-i),s=(u,c=(u+n/30)%12)=>i-o*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),w1({type:a,values:l})}function SS(t){t=Ks(t);let e=t.type==="hsl"||t.type==="hsla"?Ks(nV(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function rV(t,e){const n=SS(t),r=SS(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function iV(t,e){if(t=Ks(t),e=kA(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return w1(t)}function oV(t,e){if(t=Ks(t),e=kA(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return w1(t)}function sV(t,e){return B({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const aV={black:"#000",white:"#fff"},lu=aV,lV={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},uV=lV,cV={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Bo=cV,fV={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Wo=fV,dV={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ba=dV,hV={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Ho=hV,pV={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},qo=pV,mV={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Go=mV,gV=["mode","contrastThreshold","tonalOffset"],bS={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:lu.white,default:lu.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Lm={text:{primary:lu.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:lu.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function TS(t,e,n,r){const i=r.light||r,o=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=oV(t.main,i):e==="dark"&&(t.dark=iV(t.main,o)))}function vV(t="light"){return t==="dark"?{main:Ho[200],light:Ho[50],dark:Ho[400]}:{main:Ho[700],light:Ho[400],dark:Ho[800]}}function yV(t="light"){return t==="dark"?{main:Bo[200],light:Bo[50],dark:Bo[400]}:{main:Bo[500],light:Bo[300],dark:Bo[700]}}function _V(t="light"){return t==="dark"?{main:Wo[500],light:Wo[300],dark:Wo[700]}:{main:Wo[700],light:Wo[400],dark:Wo[800]}}function wV(t="light"){return t==="dark"?{main:qo[400],light:qo[300],dark:qo[700]}:{main:qo[700],light:qo[500],dark:qo[900]}}function EV(t="light"){return t==="dark"?{main:Go[400],light:Go[300],dark:Go[700]}:{main:Go[800],light:Go[500],dark:Go[900]}}function SV(t="light"){return t==="dark"?{main:Ba[400],light:Ba[300],dark:Ba[700]}:{main:"#ed6c02",light:Ba[500],dark:Ba[900]}}function bV(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=Bn(t,gV),o=t.primary||vV(e),s=t.secondary||yV(e),a=t.error||_V(e),l=t.info||wV(e),u=t.success||EV(e),c=t.warning||SV(e);function f(m){return rV(m,Lm.text.primary)>=n?Lm.text.primary:bS.text.primary}const d=({color:m,name:_,mainShade:v=500,lightShade:p=300,darkShade:y=700})=>{if(m=B({},m),!m.main&&m[v]&&(m.main=m[v]),!m.hasOwnProperty("main"))throw new Error(qs(11,_?` (${_})`:"",v));if(typeof m.main!="string")throw new Error(qs(12,_?` (${_})`:"",JSON.stringify(m.main)));return TS(m,"light",p,r),TS(m,"dark",y,r),m.contrastText||(m.contrastText=f(m.main)),m},h={dark:Lm,light:bS};return Vn(B({common:B({},lu),mode:e,primary:d({color:o,name:"primary"}),secondary:d({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:c,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:u,name:"success"}),grey:uV,contrastThreshold:n,getContrastText:f,augmentColor:d,tonalOffset:r},h[e]),i)}const TV=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function IV(t){return Math.round(t*1e5)/1e5}const IS={textTransform:"uppercase"},CS='"Roboto", "Helvetica", "Arial", sans-serif';function CV(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=CS,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:f}=n,d=Bn(n,TV),h=i/14,g=f||(v=>`${v/u*h}rem`),m=(v,p,y,E,S)=>B({fontFamily:r,fontWeight:v,fontSize:g(p),lineHeight:y},r===CS?{letterSpacing:`${IV(E/p)}em`}:{},S,c),_={h1:m(o,96,1.167,-1.5),h2:m(o,60,1.2,-.5),h3:m(s,48,1.167,0),h4:m(s,34,1.235,.25),h5:m(s,24,1.334,0),h6:m(a,20,1.6,.15),subtitle1:m(s,16,1.75,.15),subtitle2:m(a,14,1.57,.1),body1:m(s,16,1.5,.15),body2:m(s,14,1.43,.15),button:m(a,14,1.75,.4,IS),caption:m(s,12,1.66,.4),overline:m(s,12,2.66,1,IS),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Vn(B({htmlFontSize:u,pxToRem:g,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},_),d,{clone:!1})}const xV=.2,kV=.14,AV=.12;function Ae(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${xV})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${kV})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${AV})`].join(",")}const PV=["none",Ae(0,2,1,-1,0,1,1,0,0,1,3,0),Ae(0,3,1,-2,0,2,2,0,0,1,5,0),Ae(0,3,3,-2,0,3,4,0,0,1,8,0),Ae(0,2,4,-1,0,4,5,0,0,1,10,0),Ae(0,3,5,-1,0,5,8,0,0,1,14,0),Ae(0,3,5,-1,0,6,10,0,0,1,18,0),Ae(0,4,5,-2,0,7,10,1,0,2,16,1),Ae(0,5,5,-3,0,8,10,1,0,3,14,2),Ae(0,5,6,-3,0,9,12,1,0,3,16,2),Ae(0,6,6,-3,0,10,14,1,0,4,18,3),Ae(0,6,7,-4,0,11,15,1,0,4,20,3),Ae(0,7,8,-4,0,12,17,2,0,5,22,4),Ae(0,7,8,-4,0,13,19,2,0,5,24,4),Ae(0,7,9,-4,0,14,21,2,0,5,26,4),Ae(0,8,9,-5,0,15,22,2,0,6,28,5),Ae(0,8,10,-5,0,16,24,2,0,6,30,5),Ae(0,8,11,-5,0,17,26,2,0,6,32,5),Ae(0,9,11,-5,0,18,28,2,0,7,34,6),Ae(0,9,12,-6,0,19,29,2,0,7,36,6),Ae(0,10,13,-6,0,20,31,3,0,8,38,7),Ae(0,10,13,-6,0,21,33,3,0,8,40,7),Ae(0,10,14,-6,0,22,35,3,0,8,42,7),Ae(0,11,14,-7,0,23,36,3,0,9,44,8),Ae(0,11,15,-7,0,24,38,3,0,9,46,8)],RV=["duration","easing","delay"],OV={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},NV={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function xS(t){return`${Math.round(t)}ms`}function DV(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function $V(t){const e=B({},OV,t.easing),n=B({},NV,t.duration);return B({getAutoHeightDuration:DV,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:l=0}=o;return Bn(o,RV),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:xS(s)} ${a} ${typeof l=="string"?l:xS(l)}`).join(",")}},t,{easing:e,duration:n})}const MV={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},LV=MV,jV=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function VV(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=t,s=Bn(t,jV);if(t.vars)throw new Error(qs(18));const a=bV(r),l=_1(t);let u=Vn(l,{mixins:sV(l.breakpoints,n),palette:a,shadows:PV.slice(),typography:CV(a,o),transitions:$V(i),zIndex:B({},LV)});return u=Vn(u,s),u=e.reduce((c,f)=>Vn(c,f),u),u.unstable_sxConfig=B({},y1,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(f){return ep({sx:f,theme:this})},u}const FV=VV(),AA=FV,PA="$$material";function UV({props:t,name:e}){return eV({props:t,name:e,defaultTheme:AA,themeId:PA})}const zV=t=>jf(t)&&t!=="classes",BV=Jj({themeId:PA,defaultTheme:AA,rootShouldForwardProp:zV});function WV(t){return lA("MuiSvgIcon",t)}RL("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const HV=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],qV=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${ar(e)}`,`fontSize${ar(n)}`]};return kL(i,WV,r)},GV=BV("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${ar(n.color)}`],e[`fontSize${ar(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,o,s,a,l,u,c,f,d,h,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((o=t.typography)==null||(s=o.pxToRem)==null?void 0:s.call(o,20))||"1.25rem",medium:((a=t.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((u=t.typography)==null||(c=u.pxToRem)==null?void 0:c.call(u,35))||"2.1875rem"}[e.fontSize],color:(f=(d=(t.vars||t).palette)==null||(d=d[e.color])==null?void 0:d.main)!=null?f:{action:(h=(t.vars||t).palette)==null||(h=h.action)==null?void 0:h.active,disabled:(g=(t.vars||t).palette)==null||(g=g.action)==null?void 0:g.disabled,inherit:void 0}[e.color]}}),Lv=b.forwardRef(function(e,n){const r=UV({props:e,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:c=!1,titleAccess:f,viewBox:d="0 0 24 24"}=r,h=Bn(r,HV),g=b.isValidElement(i)&&i.type==="svg",m=B({},r,{color:s,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:c,viewBox:d,hasSvgAsChild:g}),_={};c||(_.viewBox=d);const v=qV(m);return w.jsxs(GV,B({as:a,className:OL(v.root,o),focusable:"false",color:u,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n},_,h,g&&i.props,{ownerState:m,children:[g?i.props.children:i,f?w.jsx("title",{children:f}):null]}))});Lv.muiName="SvgIcon";function KV(t,e){function n(r,i){return w.jsx(Lv,B({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=Lv.muiName,b.memo(b.forwardRef(n))}const QV={configure:t=>{aA.configure(t)}},YV=Object.freeze(Object.defineProperty({__proto__:null,capitalize:ar,createChainedFunction:lL,createSvgIcon:KV,debounce:uL,deprecatedPropType:cL,isMuiElement:fL,ownerDocument:rA,ownerWindow:dL,requirePropFactory:hL,setRef:iA,unstable_ClassNameGenerator:QV,unstable_useEnhancedEffect:oA,unstable_useId:gL,unsupportedProp:vL,useControlled:yL,useEventCallback:_L,useForkRef:wL,useIsFocusVisible:xL},Symbol.toStringTag,{value:"Module"})),XV=QN(YV);var kS;function tp(){return kS||(kS=1,function(t){"use client";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=XV}(Dm)),Dm}var JV=Nh;Object.defineProperty(o1,"__esModule",{value:!0});var RA=o1.default=void 0,ZV=JV(tp()),e9=w,t9=(0,ZV.default)((0,e9.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"}),"ShoppingBagOutlined");RA=o1.default=t9;var n9=Math.ceil,r9=Math.max;function i9(t,e,n,r){for(var i=-1,o=r9(n9((e-t)/(n||1)),0),s=Array(o);o--;)s[r?o:++i]=t,t+=n;return s}var o9=i9;function s9(t,e){return t===e||t!==t&&e!==e}var E1=s9,a9=typeof Re=="object"&&Re&&Re.Object===Object&&Re,OA=a9,l9=OA,u9=typeof self=="object"&&self&&self.Object===Object&&self,c9=l9||u9||Function("return this")(),gr=c9,f9=gr,d9=f9.Symbol,np=d9,AS=np,NA=Object.prototype,h9=NA.hasOwnProperty,p9=NA.toString,Wa=AS?AS.toStringTag:void 0;function m9(t){var e=h9.call(t,Wa),n=t[Wa];try{t[Wa]=void 0;var r=!0}catch{}var i=p9.call(t);return r&&(e?t[Wa]=n:delete t[Wa]),i}var g9=m9,v9=Object.prototype,y9=v9.toString;function _9(t){return y9.call(t)}var w9=_9,PS=np,E9=g9,S9=w9,b9="[object Null]",T9="[object Undefined]",RS=PS?PS.toStringTag:void 0;function I9(t){return t==null?t===void 0?T9:b9:RS&&RS in Object(t)?E9(t):S9(t)}var qu=I9;function C9(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var rp=C9,x9=qu,k9=rp,A9="[object AsyncFunction]",P9="[object Function]",R9="[object GeneratorFunction]",O9="[object Proxy]";function N9(t){if(!k9(t))return!1;var e=x9(t);return e==P9||e==R9||e==A9||e==O9}var DA=N9,D9=9007199254740991;function $9(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=D9}var $A=$9,M9=DA,L9=$A;function j9(t){return t!=null&&L9(t.length)&&!M9(t)}var MA=j9,V9=9007199254740991,F9=/^(?:0|[1-9]\d*)$/;function U9(t,e){var n=typeof t;return e=e??V9,!!e&&(n=="number"||n!="symbol"&&F9.test(t))&&t>-1&&t%1==0&&t<e}var LA=U9,z9=E1,B9=MA,W9=LA,H9=rp;function q9(t,e,n){if(!H9(n))return!1;var r=typeof e;return(r=="number"?B9(n)&&W9(e,n.length):r=="string"&&e in n)?z9(n[e],t):!1}var G9=q9,K9=/\s/;function Q9(t){for(var e=t.length;e--&&K9.test(t.charAt(e)););return e}var Y9=Q9,X9=Y9,J9=/^\s+/;function Z9(t){return t&&t.slice(0,X9(t)+1).replace(J9,"")}var e6=Z9;function t6(t){return t!=null&&typeof t=="object"}var Gu=t6,n6=qu,r6=Gu,i6="[object Symbol]";function o6(t){return typeof t=="symbol"||r6(t)&&n6(t)==i6}var jA=o6,s6=e6,OS=rp,a6=jA,NS=NaN,l6=/^[-+]0x[0-9a-f]+$/i,u6=/^0b[01]+$/i,c6=/^0o[0-7]+$/i,f6=parseInt;function d6(t){if(typeof t=="number")return t;if(a6(t))return NS;if(OS(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=OS(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=s6(t);var n=u6.test(t);return n||c6.test(t)?f6(t.slice(2),n?2:8):l6.test(t)?NS:+t}var VA=d6,h6=VA,DS=1/0,p6=17976931348623157e292;function m6(t){if(!t)return t===0?t:0;if(t=h6(t),t===DS||t===-DS){var e=t<0?-1:1;return e*p6}return t===t?t:0}var FA=m6,g6=o9,v6=G9,jm=FA;function y6(t){return function(e,n,r){return r&&typeof r!="number"&&v6(e,n,r)&&(n=r=void 0),e=jm(e),n===void 0?(n=e,e=0):n=jm(n),r=r===void 0?e<n?1:-1:jm(r),g6(e,n,r,t)}}var _6=y6,w6=_6,E6=w6(),S6=E6;const b6=Do(S6);var UA={};Object.defineProperty(UA,"__esModule",{value:!0});UA.default=T6;function T6(t){return t.displayName||t.name||(typeof t=="string"&&t.length>0?t:"Unknown")}function zc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pd(){return Pd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pd.apply(this,arguments)}function I6(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Gr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C6(t){var e=function(n){I6(r,n);function r(){for(var o,s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return o=n.call.apply(n,[this].concat(a))||this,zc(Gr(Gr(o)),"cachedTheme",void 0),zc(Gr(Gr(o)),"lastOuterTheme",void 0),zc(Gr(Gr(o)),"lastTheme",void 0),zc(Gr(Gr(o)),"renderProvider",function(u){var c=o.props.children;return H.createElement(t.Provider,{value:o.getTheme(u)},c)}),o}var i=r.prototype;return i.getTheme=function(s){if(this.props.theme!==this.lastTheme||s!==this.lastOuterTheme||!this.cachedTheme)if(this.lastOuterTheme=s,this.lastTheme=this.props.theme,typeof this.lastTheme=="function"){var a=this.props.theme;this.cachedTheme=a(s)}else{var l=this.props.theme;this.cachedTheme=s?Pd({},s,l):l}return this.cachedTheme},i.render=function(){var s=this.props.children;return s?H.createElement(t.Consumer,null,this.renderProvider):null},r}(H.Component);return e}function x6(t){return function(n){var r=H.forwardRef(function(i,o){return H.createElement(t.Consumer,null,function(s){return H.createElement(n,Pd({theme:s,ref:o},i))})});return S3(r,n),r}}function k6(t){var e=function(){var r=H.useContext(t);return r};return e}function A6(t){return{context:t,withTheme:x6(t),useTheme:k6(t),ThemeProvider:C6(t)}}var zA=b.createContext();A6(zA);var $S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ha=(typeof window>"u"?"undefined":$S(window))==="object"&&(typeof document>"u"?"undefined":$S(document))==="object"&&document.nodeType===9;function uu(t){"@babel/helpers - typeof";return uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uu(t)}function P6(t,e){if(uu(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(uu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function R6(t){var e=P6(t,"string");return uu(e)=="symbol"?e:String(e)}function MS(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,R6(r.key),r)}}function S1(t,e,n){return e&&MS(t.prototype,e),n&&MS(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function jv(t,e){return jv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},jv(t,e)}function BA(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,jv(t,e)}function LS(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var O6={}.constructor;function Vv(t){if(t==null||typeof t!="object")return t;if(Array.isArray(t))return t.map(Vv);if(t.constructor!==O6)return t;var e={};for(var n in t)e[n]=Vv(t[n]);return e}function ip(t,e,n){t===void 0&&(t="unnamed");var r=n.jss,i=Vv(e),o=r.plugins.onCreateRule(t,i,n);return o||(t[0],null)}var jS=function(e,n){for(var r="",i=0;i<e.length&&e[i]!=="!important";i++)r&&(r+=n),r+=e[i];return r},mo=function(e){if(!Array.isArray(e))return e;var n="";if(Array.isArray(e[0]))for(var r=0;r<e.length&&e[r]!=="!important";r++)n&&(n+=", "),n+=jS(e[r]," ");else n=jS(e,", ");return e[e.length-1]==="!important"&&(n+=" !important"),n};function pa(t){return t&&t.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function Ha(t,e){for(var n="",r=0;r<e;r++)n+="  ";return n+t}function cu(t,e,n){n===void 0&&(n={});var r="";if(!e)return r;var i=n,o=i.indent,s=o===void 0?0:o,a=e.fallbacks;n.format===!1&&(s=-1/0);var l=pa(n),u=l.linebreak,c=l.space;if(t&&s++,a)if(Array.isArray(a))for(var f=0;f<a.length;f++){var d=a[f];for(var h in d){var g=d[h];g!=null&&(r&&(r+=u),r+=Ha(h+":"+c+mo(g)+";",s))}}else for(var m in a){var _=a[m];_!=null&&(r&&(r+=u),r+=Ha(m+":"+c+mo(_)+";",s))}for(var v in e){var p=e[v];p!=null&&v!=="fallbacks"&&(r&&(r+=u),r+=Ha(v+":"+c+mo(p)+";",s))}return!r&&!n.allowEmpty||!t?r:(s--,r&&(r=""+u+r+u),Ha(""+t+c+"{"+r,s)+Ha("}",s))}var N6=/([[\].#*$><+~=|^:(),"'`\s])/g,VS=typeof CSS<"u"&&CSS.escape,b1=function(t){return VS?VS(t):t.replace(N6,"\\$1")},WA=function(){function t(n,r,i){this.type="style",this.isProcessed=!1;var o=i.sheet,s=i.Renderer;this.key=n,this.options=i,this.style=r,o?this.renderer=o.renderer:s&&(this.renderer=new s)}var e=t.prototype;return e.prop=function(r,i,o){if(i===void 0)return this.style[r];var s=o?o.force:!1;if(!s&&this.style[r]===i)return this;var a=i;(!o||o.process!==!1)&&(a=this.options.jss.plugins.onChangeValue(i,r,this));var l=a==null||a===!1,u=r in this.style;if(l&&!u&&!s)return this;var c=l&&u;if(c?delete this.style[r]:this.style[r]=a,this.renderable&&this.renderer)return c?this.renderer.removeProperty(this.renderable,r):this.renderer.setProperty(this.renderable,r,a),this;var f=this.options.sheet;return f&&f.attached,this},t}(),Fv=function(t){BA(e,t);function e(r,i,o){var s;s=t.call(this,r,i,o)||this;var a=o.selector,l=o.scoped,u=o.sheet,c=o.generateId;return a?s.selectorText=a:l!==!1&&(s.id=c(LS(LS(s)),u),s.selectorText="."+b1(s.id)),s}var n=e.prototype;return n.applyTo=function(i){var o=this.renderer;if(o){var s=this.toJSON();for(var a in s)o.setProperty(i,a,s[a])}return this},n.toJSON=function(){var i={};for(var o in this.style){var s=this.style[o];typeof s!="object"?i[o]=s:Array.isArray(s)&&(i[o]=mo(s))}return i},n.toString=function(i){var o=this.options.sheet,s=o?o.options.link:!1,a=s?B({},i,{allowEmpty:!0}):i;return cu(this.selectorText,this.style,a)},S1(e,[{key:"selector",set:function(i){if(i!==this.selectorText){this.selectorText=i;var o=this.renderer,s=this.renderable;if(!(!s||!o)){var a=o.setSelector(s,i);a||o.replaceRule(s,this)}}},get:function(){return this.selectorText}}]),e}(WA),D6={onCreateRule:function(e,n,r){return e[0]==="@"||r.parent&&r.parent.type==="keyframes"?null:new Fv(e,n,r)}},Vm={indent:1,children:!0},$6=/@([\w-]+)/,M6=function(){function t(n,r,i){this.type="conditional",this.isProcessed=!1,this.key=n;var o=n.match($6);this.at=o?o[1]:"unknown",this.query=i.name||"@"+this.at,this.options=i,this.rules=new op(B({},i,{parent:this}));for(var s in r)this.rules.add(s,r[s]);this.rules.process()}var e=t.prototype;return e.getRule=function(r){return this.rules.get(r)},e.indexOf=function(r){return this.rules.indexOf(r)},e.addRule=function(r,i,o){var s=this.rules.add(r,i,o);return s?(this.options.jss.plugins.onProcessRule(s),s):null},e.replaceRule=function(r,i,o){var s=this.rules.replace(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},e.toString=function(r){r===void 0&&(r=Vm);var i=pa(r),o=i.linebreak;if(r.indent==null&&(r.indent=Vm.indent),r.children==null&&(r.children=Vm.children),r.children===!1)return this.query+" {}";var s=this.rules.toString(r);return s?this.query+" {"+o+s+o+"}":""},t}(),L6=/@container|@media|@supports\s+/,j6={onCreateRule:function(e,n,r){return L6.test(e)?new M6(e,n,r):null}},Fm={indent:1,children:!0},V6=/@keyframes\s+([\w-]+)/,Uv=function(){function t(n,r,i){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var o=n.match(V6);o&&o[1]?this.name=o[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=i;var s=i.scoped,a=i.sheet,l=i.generateId;this.id=s===!1?this.name:b1(l(this,a)),this.rules=new op(B({},i,{parent:this}));for(var u in r)this.rules.add(u,r[u],B({},i,{parent:this}));this.rules.process()}var e=t.prototype;return e.toString=function(r){r===void 0&&(r=Fm);var i=pa(r),o=i.linebreak;if(r.indent==null&&(r.indent=Fm.indent),r.children==null&&(r.children=Fm.children),r.children===!1)return this.at+" "+this.id+" {}";var s=this.rules.toString(r);return s&&(s=""+o+s+o),this.at+" "+this.id+" {"+s+"}"},t}(),F6=/@keyframes\s+/,U6=/\$([\w-]+)/g,zv=function(e,n){return typeof e=="string"?e.replace(U6,function(r,i){return i in n?n[i]:r}):e},FS=function(e,n,r){var i=e[n],o=zv(i,r);o!==i&&(e[n]=o)},z6={onCreateRule:function(e,n,r){return typeof e=="string"&&F6.test(e)?new Uv(e,n,r):null},onProcessStyle:function(e,n,r){return n.type!=="style"||!r||("animation-name"in e&&FS(e,"animation-name",r.keyframes),"animation"in e&&FS(e,"animation",r.keyframes)),e},onChangeValue:function(e,n,r){var i=r.options.sheet;if(!i)return e;switch(n){case"animation":return zv(e,i.keyframes);case"animation-name":return zv(e,i.keyframes);default:return e}}},B6=function(t){BA(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.toString=function(i){var o=this.options.sheet,s=o?o.options.link:!1,a=s?B({},i,{allowEmpty:!0}):i;return cu(this.key,this.style,a)},e}(WA),W6={onCreateRule:function(e,n,r){return r.parent&&r.parent.type==="keyframes"?new B6(e,n,r):null}},H6=function(){function t(n,r,i){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var e=t.prototype;return e.toString=function(r){var i=pa(r),o=i.linebreak;if(Array.isArray(this.style)){for(var s="",a=0;a<this.style.length;a++)s+=cu(this.at,this.style[a]),this.style[a+1]&&(s+=o);return s}return cu(this.at,this.style,r)},t}(),q6=/@font-face/,G6={onCreateRule:function(e,n,r){return q6.test(e)?new H6(e,n,r):null}},K6=function(){function t(n,r,i){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var e=t.prototype;return e.toString=function(r){return cu(this.key,this.style,r)},t}(),Q6={onCreateRule:function(e,n,r){return e==="@viewport"||e==="@-ms-viewport"?new K6(e,n,r):null}},Y6=function(){function t(n,r,i){this.type="simple",this.isProcessed=!1,this.key=n,this.value=r,this.options=i}var e=t.prototype;return e.toString=function(r){if(Array.isArray(this.value)){for(var i="",o=0;o<this.value.length;o++)i+=this.key+" "+this.value[o]+";",this.value[o+1]&&(i+=`
`);return i}return this.key+" "+this.value+";"},t}(),X6={"@charset":!0,"@import":!0,"@namespace":!0},J6={onCreateRule:function(e,n,r){return e in X6?new Y6(e,n,r):null}},US=[D6,j6,z6,W6,G6,Q6,J6],Z6={process:!0},zS={force:!0,process:!0},op=function(){function t(n){this.map={},this.raw={},this.index=[],this.counter=0,this.options=n,this.classes=n.classes,this.keyframes=n.keyframes}var e=t.prototype;return e.add=function(r,i,o){var s=this.options,a=s.parent,l=s.sheet,u=s.jss,c=s.Renderer,f=s.generateId,d=s.scoped,h=B({classes:this.classes,parent:a,sheet:l,jss:u,Renderer:c,generateId:f,scoped:d,name:r,keyframes:this.keyframes,selector:void 0},o),g=r;r in this.raw&&(g=r+"-d"+this.counter++),this.raw[g]=i,g in this.classes&&(h.selector="."+b1(this.classes[g]));var m=ip(g,i,h);if(!m)return null;this.register(m);var _=h.index===void 0?this.index.length:h.index;return this.index.splice(_,0,m),m},e.replace=function(r,i,o){var s=this.get(r),a=this.index.indexOf(s);s&&this.remove(s);var l=o;return a!==-1&&(l=B({},o,{index:a})),this.add(r,i,l)},e.get=function(r){return this.map[r]},e.remove=function(r){this.unregister(r),delete this.raw[r.key],this.index.splice(this.index.indexOf(r),1)},e.indexOf=function(r){return this.index.indexOf(r)},e.process=function(){var r=this.options.jss.plugins;this.index.slice(0).forEach(r.onProcessRule,r)},e.register=function(r){this.map[r.key]=r,r instanceof Fv?(this.map[r.selector]=r,r.id&&(this.classes[r.key]=r.id)):r instanceof Uv&&this.keyframes&&(this.keyframes[r.name]=r.id)},e.unregister=function(r){delete this.map[r.key],r instanceof Fv?(delete this.map[r.selector],delete this.classes[r.key]):r instanceof Uv&&delete this.keyframes[r.name]},e.update=function(){var r,i,o;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(r=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1],o=arguments.length<=2?void 0:arguments[2]):(i=arguments.length<=0?void 0:arguments[0],o=arguments.length<=1?void 0:arguments[1],r=null),r)this.updateOne(this.get(r),i,o);else for(var s=0;s<this.index.length;s++)this.updateOne(this.index[s],i,o)},e.updateOne=function(r,i,o){o===void 0&&(o=Z6);var s=this.options,a=s.jss.plugins,l=s.sheet;if(r.rules instanceof t){r.rules.update(i,o);return}var u=r.style;if(a.onUpdate(i,r,l,o),o.process&&u&&u!==r.style){a.onProcessStyle(r.style,r,l);for(var c in r.style){var f=r.style[c],d=u[c];f!==d&&r.prop(c,f,zS)}for(var h in u){var g=r.style[h],m=u[h];g==null&&g!==m&&r.prop(h,null,zS)}}},e.toString=function(r){for(var i="",o=this.options.sheet,s=o?o.options.link:!1,a=pa(r),l=a.linebreak,u=0;u<this.index.length;u++){var c=this.index[u],f=c.toString(r);!f&&!s||(i&&(i+=l),i+=f)}return i},t}(),HA=function(){function t(n,r){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=B({},r,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),r.Renderer&&(this.renderer=new r.Renderer(this)),this.rules=new op(this.options);for(var i in n)this.rules.add(i,n[i]);this.rules.process()}var e=t.prototype;return e.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},e.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},e.addRule=function(r,i,o){var s=this.queue;this.attached&&!s&&(this.queue=[]);var a=this.rules.add(r,i,o);return a?(this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&(s?s.push(a):(this.insertRule(a),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),a):(this.deployed=!1,a)):null},e.replaceRule=function(r,i,o){var s=this.rules.get(r);if(!s)return this.addRule(r,i,o);var a=this.rules.replace(r,i,o);return a&&this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&this.renderer&&(a?s.renderable&&this.renderer.replaceRule(s.renderable,a):this.renderer.deleteRule(s)),a):(this.deployed=!1,a)},e.insertRule=function(r){this.renderer&&this.renderer.insertRule(r)},e.addRules=function(r,i){var o=[];for(var s in r){var a=this.addRule(s,r[s],i);a&&o.push(a)}return o},e.getRule=function(r){return this.rules.get(r)},e.deleteRule=function(r){var i=typeof r=="object"?r:this.rules.get(r);return!i||this.attached&&!i.renderable?!1:(this.rules.remove(i),this.attached&&i.renderable&&this.renderer?this.renderer.deleteRule(i.renderable):!0)},e.indexOf=function(r){return this.rules.indexOf(r)},e.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},e.update=function(){var r;return(r=this.rules).update.apply(r,arguments),this},e.updateOne=function(r,i,o){return this.rules.updateOne(r,i,o),this},e.toString=function(r){return this.rules.toString(r)},t}(),eF=function(){function t(){this.plugins={internal:[],external:[]},this.registry={}}var e=t.prototype;return e.onCreateRule=function(r,i,o){for(var s=0;s<this.registry.onCreateRule.length;s++){var a=this.registry.onCreateRule[s](r,i,o);if(a)return a}return null},e.onProcessRule=function(r){if(!r.isProcessed){for(var i=r.options.sheet,o=0;o<this.registry.onProcessRule.length;o++)this.registry.onProcessRule[o](r,i);r.style&&this.onProcessStyle(r.style,r,i),r.isProcessed=!0}},e.onProcessStyle=function(r,i,o){for(var s=0;s<this.registry.onProcessStyle.length;s++)i.style=this.registry.onProcessStyle[s](i.style,i,o)},e.onProcessSheet=function(r){for(var i=0;i<this.registry.onProcessSheet.length;i++)this.registry.onProcessSheet[i](r)},e.onUpdate=function(r,i,o,s){for(var a=0;a<this.registry.onUpdate.length;a++)this.registry.onUpdate[a](r,i,o,s)},e.onChangeValue=function(r,i,o){for(var s=r,a=0;a<this.registry.onChangeValue.length;a++)s=this.registry.onChangeValue[a](s,i,o);return s},e.use=function(r,i){i===void 0&&(i={queue:"external"});var o=this.plugins[i.queue];o.indexOf(r)===-1&&(o.push(r),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(s,a){for(var l in a)l in s&&s[l].push(a[l]);return s},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},t}(),tF=function(){function t(){this.registry=[]}var e=t.prototype;return e.add=function(r){var i=this.registry,o=r.options.index;if(i.indexOf(r)===-1){if(i.length===0||o>=this.index){i.push(r);return}for(var s=0;s<i.length;s++)if(i[s].options.index>o){i.splice(s,0,r);return}}},e.reset=function(){this.registry=[]},e.remove=function(r){var i=this.registry.indexOf(r);this.registry.splice(i,1)},e.toString=function(r){for(var i=r===void 0?{}:r,o=i.attached,s=Bn(i,["attached"]),a=pa(s),l=a.linebreak,u="",c=0;c<this.registry.length;c++){var f=this.registry[c];o!=null&&f.attached!==o||(u&&(u+=l),u+=f.toString(s))}return u},S1(t,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),t}(),Il=new tF,Bv=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),Wv="2f1acc6c3a606b082e5eef5e54414ffb";Bv[Wv]==null&&(Bv[Wv]=0);var BS=Bv[Wv]++,WS=function(e){e===void 0&&(e={});var n=0,r=function(o,s){n+=1;var a="",l="";return s&&(s.options.classNamePrefix&&(l=s.options.classNamePrefix),s.options.jss.id!=null&&(a=String(s.options.jss.id))),e.minify?""+(l||"c")+BS+a+n:l+o.key+"-"+BS+(a?"-"+a:"")+"-"+n};return r},qA=function(e){var n;return function(){return n||(n=e()),n}},nF=function(e,n){try{return e.attributeStyleMap?e.attributeStyleMap.get(n):e.style.getPropertyValue(n)}catch{return""}},rF=function(e,n,r){try{var i=r;if(Array.isArray(r)&&(i=mo(r)),e.attributeStyleMap)e.attributeStyleMap.set(n,i);else{var o=i?i.indexOf("!important"):-1,s=o>-1?i.substr(0,o-1):i;e.style.setProperty(n,s,o>-1?"important":"")}}catch{return!1}return!0},iF=function(e,n){try{e.attributeStyleMap?e.attributeStyleMap.delete(n):e.style.removeProperty(n)}catch{}},oF=function(e,n){return e.selectorText=n,e.selectorText===n},GA=qA(function(){return document.querySelector("head")});function sF(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(r.attached&&r.options.index>e.index&&r.options.insertionPoint===e.insertionPoint)return r}return null}function aF(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.attached&&r.options.insertionPoint===e.insertionPoint)return r}return null}function lF(t){for(var e=GA(),n=0;n<e.childNodes.length;n++){var r=e.childNodes[n];if(r.nodeType===8&&r.nodeValue.trim()===t)return r}return null}function uF(t){var e=Il.registry;if(e.length>0){var n=sF(e,t);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if(n=aF(e,t),n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}var r=t.insertionPoint;if(r&&typeof r=="string"){var i=lF(r);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}function cF(t,e){var n=e.insertionPoint,r=uF(e);if(r!==!1&&r.parent){r.parent.insertBefore(t,r.node);return}if(n&&typeof n.nodeType=="number"){var i=n,o=i.parentNode;o&&o.insertBefore(t,i.nextSibling);return}GA().appendChild(t)}var fF=qA(function(){var t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}),HS=function(e,n,r){try{"insertRule"in e?e.insertRule(n,r):"appendRule"in e&&e.appendRule(n)}catch{return!1}return e.cssRules[r]},qS=function(e,n){var r=e.cssRules.length;return n===void 0||n>r?r:n},dF=function(){var e=document.createElement("style");return e.textContent=`
`,e},hF=function(){function t(n){this.getPropertyValue=nF,this.setProperty=rF,this.removeProperty=iF,this.setSelector=oF,this.hasInsertedRules=!1,this.cssRules=[],n&&Il.add(n),this.sheet=n;var r=this.sheet?this.sheet.options:{},i=r.media,o=r.meta,s=r.element;this.element=s||dF(),this.element.setAttribute("data-jss",""),i&&this.element.setAttribute("media",i),o&&this.element.setAttribute("data-meta",o);var a=fF();a&&this.element.setAttribute("nonce",a)}var e=t.prototype;return e.attach=function(){if(!(this.element.parentNode||!this.sheet)){cF(this.element,this.sheet.options);var r=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&r&&(this.hasInsertedRules=!1,this.deploy())}},e.detach=function(){if(this.sheet){var r=this.element.parentNode;r&&r.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},e.deploy=function(){var r=this.sheet;if(r){if(r.options.link){this.insertRules(r.rules);return}this.element.textContent=`
`+r.toString()+`
`}},e.insertRules=function(r,i){for(var o=0;o<r.index.length;o++)this.insertRule(r.index[o],o,i)},e.insertRule=function(r,i,o){if(o===void 0&&(o=this.element.sheet),r.rules){var s=r,a=o;if(r.type==="conditional"||r.type==="keyframes"){var l=qS(o,i);if(a=HS(o,s.toString({children:!1}),l),a===!1)return!1;this.refCssRule(r,l,a)}return this.insertRules(s.rules,a),a}var u=r.toString();if(!u)return!1;var c=qS(o,i),f=HS(o,u,c);return f===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(r,c,f),f)},e.refCssRule=function(r,i,o){r.renderable=o,r.options.parent instanceof HA&&this.cssRules.splice(i,0,o)},e.deleteRule=function(r){var i=this.element.sheet,o=this.indexOf(r);return o===-1?!1:(i.deleteRule(o),this.cssRules.splice(o,1),!0)},e.indexOf=function(r){return this.cssRules.indexOf(r)},e.replaceRule=function(r,i){var o=this.indexOf(r);return o===-1?!1:(this.element.sheet.deleteRule(o),this.cssRules.splice(o,1),this.insertRule(i,o))},e.getRules=function(){return this.element.sheet.cssRules},t}(),pF=0,mF=function(){function t(n){this.id=pF++,this.version="10.10.0",this.plugins=new eF,this.options={id:{minify:!1},createGenerateId:WS,Renderer:ha?hF:null,plugins:[]},this.generateId=WS({minify:!1});for(var r=0;r<US.length;r++)this.plugins.use(US[r],{queue:"internal"});this.setup(n)}var e=t.prototype;return e.setup=function(r){return r===void 0&&(r={}),r.createGenerateId&&(this.options.createGenerateId=r.createGenerateId),r.id&&(this.options.id=B({},this.options.id,r.id)),(r.createGenerateId||r.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),r.insertionPoint!=null&&(this.options.insertionPoint=r.insertionPoint),"Renderer"in r&&(this.options.Renderer=r.Renderer),r.plugins&&this.use.apply(this,r.plugins),this},e.createStyleSheet=function(r,i){i===void 0&&(i={});var o=i,s=o.index;typeof s!="number"&&(s=Il.index===0?0:Il.index+1);var a=new HA(r,B({},i,{jss:this,generateId:i.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:s}));return this.plugins.onProcessSheet(a),a},e.removeStyleSheet=function(r){return r.detach(),Il.remove(r),this},e.createRule=function(r,i,o){if(i===void 0&&(i={}),o===void 0&&(o={}),typeof r=="object")return this.createRule(void 0,r,i);var s=B({},o,{name:r,jss:this,Renderer:this.options.Renderer});s.generateId||(s.generateId=this.generateId),s.classes||(s.classes={}),s.keyframes||(s.keyframes={});var a=ip(r,i,s);return a&&this.plugins.onProcessRule(a),a},e.use=function(){for(var r=this,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return o.forEach(function(a){r.plugins.use(a)}),this},t}(),KA=function(e){return new mF(e)},GS=function(){function t(){this.length=0,this.sheets=new WeakMap}var e=t.prototype;return e.get=function(r){var i=this.sheets.get(r);return i&&i.sheet},e.add=function(r,i){this.sheets.has(r)||(this.length++,this.sheets.set(r,{sheet:i,refs:0}))},e.manage=function(r){var i=this.sheets.get(r);if(i)return i.refs===0&&i.sheet.attach(),i.refs++,i.sheet},e.unmanage=function(r){var i=this.sheets.get(r);i&&i.refs>0&&(i.refs--,i.refs===0&&i.sheet.detach())},S1(t,[{key:"size",get:function(){return this.length}}]),t}(),T1=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function QA(t){var e=null;for(var n in t){var r=t[n],i=typeof r;if(i==="function")e||(e={}),e[n]=r;else if(i==="object"&&r!==null&&!Array.isArray(r)){var o=QA(r);o&&(e||(e={}),e[n]=o)}}return e}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */KA();var YA=Date.now(),Um="fnValues"+YA,zm="fnStyle"+ ++YA,gF=function(){return{onCreateRule:function(n,r,i){if(typeof r!="function")return null;var o=ip(n,{},i);return o[zm]=r,o},onProcessStyle:function(n,r){if(Um in r||zm in r)return n;var i={};for(var o in n){var s=n[o];typeof s=="function"&&(delete n[o],i[o]=s)}return r[Um]=i,n},onUpdate:function(n,r,i,o){var s=r,a=s[zm];a&&(s.style=a(n)||{});var l=s[Um];if(l)for(var u in l)s.prop(u,l[u](n),o)}}};function vF(t){var e,n=t.Symbol;return typeof n=="function"?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}var Xo;typeof self<"u"?Xo=self:typeof window<"u"?Xo=window:typeof global<"u"?Xo=global:typeof Xy<"u"?Xo=Xy:Xo=Function("return this")();var KS=vF(Xo),QS=function(e){return e&&e[KS]&&e===e[KS]()},yF=function(e){return{onCreateRule:function(r,i,o){if(!QS(i))return null;var s=i,a=ip(r,{},o);return s.subscribe(function(l){for(var u in l)a.prop(u,l[u],e)}),a},onProcessRule:function(r){if(!(r&&r.type!=="style")){var i=r,o=i.style,s=function(c){var f=o[c];if(!QS(f))return"continue";delete o[c],f.subscribe({next:function(h){i.prop(c,h,e)}})};for(var a in o)var l=s(a)}}}};const _F=yF;var wF=/;\n/,EF=function(e){for(var n={},r=e.split(wF),i=0;i<r.length;i++){var o=(r[i]||"").trim();if(o){var s=o.indexOf(":");if(s!==-1){var a=o.substr(0,s).trim(),l=o.substr(s+1).trim();n[a]=l}}}return n},SF=function(e){typeof e.style=="string"&&(e.style=EF(e.style))};function bF(){return{onProcessRule:SF}}var Ei="@global",Hv="@global ",TF=function(){function t(n,r,i){this.type="global",this.at=Ei,this.isProcessed=!1,this.key=n,this.options=i,this.rules=new op(B({},i,{parent:this}));for(var o in r)this.rules.add(o,r[o]);this.rules.process()}var e=t.prototype;return e.getRule=function(r){return this.rules.get(r)},e.addRule=function(r,i,o){var s=this.rules.add(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},e.replaceRule=function(r,i,o){var s=this.rules.replace(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},e.indexOf=function(r){return this.rules.indexOf(r)},e.toString=function(r){return this.rules.toString(r)},t}(),IF=function(){function t(n,r,i){this.type="global",this.at=Ei,this.isProcessed=!1,this.key=n,this.options=i;var o=n.substr(Hv.length);this.rule=i.jss.createRule(o,r,B({},i,{parent:this}))}var e=t.prototype;return e.toString=function(r){return this.rule?this.rule.toString(r):""},t}(),CF=/\s*,\s*/g;function XA(t,e){for(var n=t.split(CF),r="",i=0;i<n.length;i++)r+=e+" "+n[i].trim(),n[i+1]&&(r+=", ");return r}function xF(t,e){var n=t.options,r=t.style,i=r?r[Ei]:null;if(i){for(var o in i)e.addRule(o,i[o],B({},n,{selector:XA(o,t.selector)}));delete r[Ei]}}function kF(t,e){var n=t.options,r=t.style;for(var i in r)if(!(i[0]!=="@"||i.substr(0,Ei.length)!==Ei)){var o=XA(i.substr(Ei.length),t.selector);e.addRule(o,r[i],B({},n,{selector:o})),delete r[i]}}function AF(){function t(n,r,i){if(!n)return null;if(n===Ei)return new TF(n,r,i);if(n[0]==="@"&&n.substr(0,Hv.length)===Hv)return new IF(n,r,i);var o=i.parent;return o&&(o.type==="global"||o.options.parent&&o.options.parent.type==="global")&&(i.scoped=!1),!i.selector&&i.scoped===!1&&(i.selector=n),null}function e(n,r){n.type!=="style"||!r||(xF(n,r),kF(n,r))}return{onCreateRule:t,onProcessRule:e}}var Ff=function(e){return e&&typeof e=="object"&&!Array.isArray(e)},Bm="extendCurrValue"+Date.now();function PF(t,e,n,r){var i=typeof t.extend;if(i==="string"){if(!n)return;var o=n.getRule(t.extend);if(!o||o===e)return;var s=o.options.parent;if(s){var a=s.rules.raw[t.extend];no(a,e,n,r)}return}if(Array.isArray(t.extend)){for(var l=0;l<t.extend.length;l++){var u=t.extend[l],c=typeof u=="string"?B({},t,{extend:u}):t.extend[l];no(c,e,n,r)}return}for(var f in t.extend){if(f==="extend"){no(t.extend.extend,e,n,r);continue}if(Ff(t.extend[f])){f in r||(r[f]={}),no(t.extend[f],e,n,r[f]);continue}r[f]=t.extend[f]}}function RF(t,e,n,r){for(var i in t)if(i!=="extend"){if(Ff(r[i])&&Ff(t[i])){no(t[i],e,n,r[i]);continue}if(Ff(t[i])){r[i]=no(t[i],e,n);continue}r[i]=t[i]}}function no(t,e,n,r){return r===void 0&&(r={}),PF(t,e,n,r),RF(t,e,n,r),r}function OF(){function t(n,r,i){return"extend"in n?no(n,r,i):n}function e(n,r,i){if(r!=="extend")return n;if(n==null||n===!1){for(var o in i[Bm])i.prop(o,null);return i[Bm]=null,null}if(typeof n=="object"){for(var s in n)i.prop(s,n[s]);i[Bm]=n}return null}return{onProcessStyle:t,onChangeValue:e}}var YS=/\s*,\s*/g,NF=/&/g,DF=/\$([\w-]+)/g;function $F(){function t(i,o){return function(s,a){var l=i.getRule(a)||o&&o.getRule(a);return l?l.selector:a}}function e(i,o){for(var s=o.split(YS),a=i.split(YS),l="",u=0;u<s.length;u++)for(var c=s[u],f=0;f<a.length;f++){var d=a[f];l&&(l+=", "),l+=d.indexOf("&")!==-1?d.replace(NF,c):c+" "+d}return l}function n(i,o,s){if(s)return B({},s,{index:s.index+1});var a=i.options.nestingLevel;a=a===void 0?1:a+1;var l=B({},i.options,{nestingLevel:a,index:o.indexOf(i)+1});return delete l.name,l}function r(i,o,s){if(o.type!=="style")return i;var a=o,l=a.options.parent,u,c;for(var f in i){var d=f.indexOf("&")!==-1,h=f[0]==="@";if(!(!d&&!h)){if(u=n(a,l,u),d){var g=e(f,a.selector);c||(c=t(l,s)),g=g.replace(DF,c);var m=a.key+"-"+f;"replaceRule"in l?l.replaceRule(m,i[f],B({},u,{selector:g})):l.addRule(m,i[f],B({},u,{selector:g}))}else h&&l.addRule(f,{},u).addRule(a.key,i[f],{selector:a.selector});delete i[f]}}return i}return{onProcessStyle:r}}function qv(t,e){if(!e)return!0;if(Array.isArray(e)){for(var n=0;n<e.length;n++){var r=qv(t,e[n]);if(!r)return!1}return!0}if(e.indexOf(" ")>-1)return qv(t,e.split(" "));var i=t.options.parent;if(e[0]==="$"){var o=i.getRule(e.substr(1));return!o||o===t?!1:(i.classes[t.key]+=" "+i.classes[o.key],!0)}return i.classes[t.key]+=" "+e,!0}function MF(){function t(e,n){return"composes"in e&&(qv(n,e.composes),delete e.composes),e}return{onProcessStyle:t}}var LF=/[A-Z]/g,jF=/^ms-/,Wm={};function VF(t){return"-"+t.toLowerCase()}function JA(t){if(Wm.hasOwnProperty(t))return Wm[t];var e=t.replace(LF,VF);return Wm[t]=jF.test(e)?"-"+e:e}function Rd(t){var e={};for(var n in t){var r=n.indexOf("--")===0?n:JA(n);e[r]=t[n]}return t.fallbacks&&(Array.isArray(t.fallbacks)?e.fallbacks=t.fallbacks.map(Rd):e.fallbacks=Rd(t.fallbacks)),e}function FF(){function t(n){if(Array.isArray(n)){for(var r=0;r<n.length;r++)n[r]=Rd(n[r]);return n}return Rd(n)}function e(n,r,i){if(r.indexOf("--")===0)return n;var o=JA(r);return r===o?n:(i.prop(o,n),null)}return{onProcessStyle:t,onChangeValue:e}}var C=T1&&CSS?CSS.px:"px",Bc=T1&&CSS?CSS.ms:"ms",Ko=T1&&CSS?CSS.percent:"%",UF={"animation-delay":Bc,"animation-duration":Bc,"background-position":C,"background-position-x":C,"background-position-y":C,"background-size":C,border:C,"border-bottom":C,"border-bottom-left-radius":C,"border-bottom-right-radius":C,"border-bottom-width":C,"border-left":C,"border-left-width":C,"border-radius":C,"border-right":C,"border-right-width":C,"border-top":C,"border-top-left-radius":C,"border-top-right-radius":C,"border-top-width":C,"border-width":C,"border-block":C,"border-block-end":C,"border-block-end-width":C,"border-block-start":C,"border-block-start-width":C,"border-block-width":C,"border-inline":C,"border-inline-end":C,"border-inline-end-width":C,"border-inline-start":C,"border-inline-start-width":C,"border-inline-width":C,"border-start-start-radius":C,"border-start-end-radius":C,"border-end-start-radius":C,"border-end-end-radius":C,margin:C,"margin-bottom":C,"margin-left":C,"margin-right":C,"margin-top":C,"margin-block":C,"margin-block-end":C,"margin-block-start":C,"margin-inline":C,"margin-inline-end":C,"margin-inline-start":C,padding:C,"padding-bottom":C,"padding-left":C,"padding-right":C,"padding-top":C,"padding-block":C,"padding-block-end":C,"padding-block-start":C,"padding-inline":C,"padding-inline-end":C,"padding-inline-start":C,"mask-position-x":C,"mask-position-y":C,"mask-size":C,height:C,width:C,"min-height":C,"max-height":C,"min-width":C,"max-width":C,bottom:C,left:C,top:C,right:C,inset:C,"inset-block":C,"inset-block-end":C,"inset-block-start":C,"inset-inline":C,"inset-inline-end":C,"inset-inline-start":C,"box-shadow":C,"text-shadow":C,"column-gap":C,"column-rule":C,"column-rule-width":C,"column-width":C,"font-size":C,"font-size-delta":C,"letter-spacing":C,"text-decoration-thickness":C,"text-indent":C,"text-stroke":C,"text-stroke-width":C,"word-spacing":C,motion:C,"motion-offset":C,outline:C,"outline-offset":C,"outline-width":C,perspective:C,"perspective-origin-x":Ko,"perspective-origin-y":Ko,"transform-origin":Ko,"transform-origin-x":Ko,"transform-origin-y":Ko,"transform-origin-z":Ko,"transition-delay":Bc,"transition-duration":Bc,"vertical-align":C,"flex-basis":C,"shape-margin":C,size:C,gap:C,grid:C,"grid-gap":C,"row-gap":C,"grid-row-gap":C,"grid-column-gap":C,"grid-template-rows":C,"grid-template-columns":C,"grid-auto-rows":C,"grid-auto-columns":C,"box-shadow-x":C,"box-shadow-y":C,"box-shadow-blur":C,"box-shadow-spread":C,"font-line-height":C,"text-shadow-x":C,"text-shadow-y":C,"text-shadow-blur":C};function ZA(t){var e=/(-[a-z])/g,n=function(s){return s[1].toUpperCase()},r={};for(var i in t)r[i]=t[i],r[i.replace(e,n)]=t[i];return r}var zF=ZA(UF);function Cl(t,e,n){if(e==null)return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]=Cl(t,e[r],n);else if(typeof e=="object")if(t==="fallbacks")for(var i in e)e[i]=Cl(i,e[i],n);else for(var o in e)e[o]=Cl(t+"-"+o,e[o],n);else if(typeof e=="number"&&isNaN(e)===!1){var s=n[t]||zF[t];return s&&!(e===0&&s===C)?typeof s=="function"?s(e).toString():""+e+s:e.toString()}return e}function BF(t){t===void 0&&(t={});var e=ZA(t);function n(i,o){if(o.type!=="style")return i;for(var s in i)i[s]=Cl(s,i[s],e);return i}function r(i,o){return Cl(o,i,e)}return{onProcessStyle:n,onChangeValue:r}}var WF={"background-size":!0,"background-position":!0,border:!0,"border-bottom":!0,"border-left":!0,"border-top":!0,"border-right":!0,"border-radius":!0,"border-image":!0,"border-width":!0,"border-style":!0,"border-color":!0,"box-shadow":!0,flex:!0,margin:!0,padding:!0,outline:!0,"transform-origin":!0,transform:!0,transition:!0},HF={position:!0,size:!0},Wc={padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},background:{attachment:null,color:null,image:null,position:null,repeat:null},border:{width:null,style:null,color:null},"border-top":{width:null,style:null,color:null},"border-right":{width:null,style:null,color:null},"border-bottom":{width:null,style:null,color:null},"border-left":{width:null,style:null,color:null},outline:{width:null,style:null,color:null},"list-style":{type:null,position:null,image:null},transition:{property:null,duration:null,"timing-function":null,timingFunction:null,delay:null},animation:{name:null,duration:null,"timing-function":null,timingFunction:null,delay:null,"iteration-count":null,iterationCount:null,direction:null,"fill-mode":null,fillMode:null,"play-state":null,playState:null},"box-shadow":{x:0,y:0,blur:0,spread:0,color:null,inset:null},"text-shadow":{x:0,y:0,blur:null,color:null}},Hm={border:{radius:"border-radius",image:"border-image",width:"border-width",style:"border-style",color:"border-color"},"border-bottom":{width:"border-bottom-width",style:"border-bottom-style",color:"border-bottom-color"},"border-top":{width:"border-top-width",style:"border-top-style",color:"border-top-color"},"border-left":{width:"border-left-width",style:"border-left-style",color:"border-left-color"},"border-right":{width:"border-right-width",style:"border-right-style",color:"border-right-color"},background:{size:"background-size",image:"background-image"},font:{style:"font-style",variant:"font-variant",weight:"font-weight",stretch:"font-stretch",size:"font-size",family:"font-family",lineHeight:"line-height","line-height":"line-height"},flex:{grow:"flex-grow",basis:"flex-basis",direction:"flex-direction",wrap:"flex-wrap",flow:"flex-flow",shrink:"flex-shrink"},align:{self:"align-self",items:"align-items",content:"align-content"},grid:{"template-columns":"grid-template-columns",templateColumns:"grid-template-columns","template-rows":"grid-template-rows",templateRows:"grid-template-rows","template-areas":"grid-template-areas",templateAreas:"grid-template-areas",template:"grid-template","auto-columns":"grid-auto-columns",autoColumns:"grid-auto-columns","auto-rows":"grid-auto-rows",autoRows:"grid-auto-rows","auto-flow":"grid-auto-flow",autoFlow:"grid-auto-flow",row:"grid-row",column:"grid-column","row-start":"grid-row-start",rowStart:"grid-row-start","row-end":"grid-row-end",rowEnd:"grid-row-end","column-start":"grid-column-start",columnStart:"grid-column-start","column-end":"grid-column-end",columnEnd:"grid-column-end",area:"grid-area",gap:"grid-gap","row-gap":"grid-row-gap",rowGap:"grid-row-gap","column-gap":"grid-column-gap",columnGap:"grid-column-gap"}};function qF(t,e,n){return t.map(function(r){return tP(r,e,n,!1,!0)})}function eP(t,e,n,r){return n[e]==null?t:t.length===0?[]:Array.isArray(t[0])?eP(t[0],e,n,r):typeof t[0]=="object"?qF(t,e,r):[t]}function tP(t,e,n,r,i){if(!(Wc[e]||Hm[e]))return[];var o=[];if(Hm[e]&&(t=GF(t,n,Hm[e],r)),Object.keys(t).length)for(var s in Wc[e]){if(t[s]){Array.isArray(t[s])?o.push(HF[s]===null?t[s]:t[s].join(" ")):o.push(t[s]);continue}Wc[e][s]!=null&&o.push(Wc[e][s])}return!o.length||i?o:[o]}function GF(t,e,n,r){for(var i in n){var o=n[i];if(typeof t[i]<"u"&&(r||!e.prop(o))){var s,a=fu((s={},s[o]=t[i],s),e)[o];r?e.style.fallbacks[o]=a:e.style[o]=a}delete t[i]}return t}function fu(t,e,n){for(var r in t){var i=t[r];if(Array.isArray(i)){if(!Array.isArray(i[0])){if(r==="fallbacks"){for(var o=0;o<t.fallbacks.length;o++)t.fallbacks[o]=fu(t.fallbacks[o],e,!0);continue}t[r]=eP(i,r,WF,e),t[r].length||delete t[r]}}else if(typeof i=="object"){if(r==="fallbacks"){t.fallbacks=fu(t.fallbacks,e,!0);continue}t[r]=tP(i,r,e,n),t[r].length||delete t[r]}else t[r]===""&&delete t[r]}return t}function KF(){function t(e,n){if(!e||n.type!=="style")return e;if(Array.isArray(e)){for(var r=0;r<e.length;r++)e[r]=fu(e[r],n);return e}return fu(e,n)}return{onProcessStyle:t}}function Gv(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function QF(t){if(Array.isArray(t))return Gv(t)}function YF(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function XF(t,e){if(t){if(typeof t=="string")return Gv(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gv(t,e)}}function JF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZF(t){return QF(t)||YF(t)||XF(t)||JF()}var rl="",Kv="",nP="",rP="",eU=ha&&"ontouchstart"in document.documentElement;if(ha){var qm={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},tU=document.createElement("p"),Gm=tU.style,nU="Transform";for(var Km in qm)if(Km+nU in Gm){rl=Km,Kv=qm[Km];break}rl==="Webkit"&&"msHyphens"in Gm&&(rl="ms",Kv=qm.ms,rP="edge"),rl==="Webkit"&&"-apple-trailing-word"in Gm&&(nP="apple")}var X={js:rl,css:Kv,vendor:nP,browser:rP,isTouch:eU};function rU(t){return t[1]==="-"||X.js==="ms"?t:"@"+X.css+"keyframes"+t.substr(10)}var iU={noPrefill:["appearance"],supportedProperty:function(e){return e!=="appearance"?!1:X.js==="ms"?"-webkit-"+e:X.css+e}},oU={noPrefill:["color-adjust"],supportedProperty:function(e){return e!=="color-adjust"?!1:X.js==="Webkit"?X.css+"print-"+e:e}},sU=/[-\s]+(.)?/g;function aU(t,e){return e?e.toUpperCase():""}function I1(t){return t.replace(sU,aU)}function ki(t){return I1("-"+t)}var lU={noPrefill:["mask"],supportedProperty:function(e,n){if(!/^mask/.test(e))return!1;if(X.js==="Webkit"){var r="mask-image";if(I1(r)in n)return e;if(X.js+ki(r)in n)return X.css+e}return e}},uU={noPrefill:["text-orientation"],supportedProperty:function(e){return e!=="text-orientation"?!1:X.vendor==="apple"&&!X.isTouch?X.css+e:e}},cU={noPrefill:["transform"],supportedProperty:function(e,n,r){return e!=="transform"?!1:r.transform?e:X.css+e}},fU={noPrefill:["transition"],supportedProperty:function(e,n,r){return e!=="transition"?!1:r.transition?e:X.css+e}},dU={noPrefill:["writing-mode"],supportedProperty:function(e){return e!=="writing-mode"?!1:X.js==="Webkit"||X.js==="ms"&&X.browser!=="edge"?X.css+e:e}},hU={noPrefill:["user-select"],supportedProperty:function(e){return e!=="user-select"?!1:X.js==="Moz"||X.js==="ms"||X.vendor==="apple"?X.css+e:e}},pU={supportedProperty:function(e,n){if(!/^break-/.test(e))return!1;if(X.js==="Webkit"){var r="WebkitColumn"+ki(e);return r in n?X.css+"column-"+e:!1}if(X.js==="Moz"){var i="page"+ki(e);return i in n?"page-"+e:!1}return!1}},mU={supportedProperty:function(e,n){if(!/^(border|margin|padding)-inline/.test(e))return!1;if(X.js==="Moz")return e;var r=e.replace("-inline","");return X.js+ki(r)in n?X.css+r:!1}},gU={supportedProperty:function(e,n){return I1(e)in n?e:!1}},vU={supportedProperty:function(e,n){var r=ki(e);return e[0]==="-"||e[0]==="-"&&e[1]==="-"?e:X.js+r in n?X.css+e:X.js!=="Webkit"&&"Webkit"+r in n?"-webkit-"+e:!1}},yU={supportedProperty:function(e){return e.substring(0,11)!=="scroll-snap"?!1:X.js==="ms"?""+X.css+e:e}},_U={supportedProperty:function(e){return e!=="overscroll-behavior"?!1:X.js==="ms"?X.css+"scroll-chaining":e}},wU={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},EU={supportedProperty:function(e,n){var r=wU[e];return r&&X.js+ki(r)in n?X.css+r:!1}},iP={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},SU=Object.keys(iP),bU=function(e){return X.css+e},TU={supportedProperty:function(e,n,r){var i=r.multiple;if(SU.indexOf(e)>-1){var o=iP[e];if(!Array.isArray(o))return X.js+ki(o)in n?X.css+o:!1;if(!i)return!1;for(var s=0;s<o.length;s++)if(!(X.js+ki(o[0])in n))return!1;return o.map(bU)}return!1}},oP=[iU,oU,lU,uU,cU,fU,dU,hU,pU,mU,gU,vU,yU,_U,EU,TU],XS=oP.filter(function(t){return t.supportedProperty}).map(function(t){return t.supportedProperty}),IU=oP.filter(function(t){return t.noPrefill}).reduce(function(t,e){return t.push.apply(t,ZF(e.noPrefill)),t},[]),il,Qi={};if(ha){il=document.createElement("p");var Qm=window.getComputedStyle(document.documentElement,"");for(var Ym in Qm)isNaN(Ym)||(Qi[Qm[Ym]]=Qm[Ym]);IU.forEach(function(t){return delete Qi[t]})}function Qv(t,e){if(e===void 0&&(e={}),!il)return t;if(Qi[t]!=null)return Qi[t];(t==="transition"||t==="transform")&&(e[t]=t in il.style);for(var n=0;n<XS.length&&(Qi[t]=XS[n](t,il.style,e),!Qi[t]);n++);try{il.style[t]=""}catch{return!1}return Qi[t]}var Qo={},CU={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},xU=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,Jr;function kU(t,e,n){if(e==="var")return"var";if(e==="all")return"all";if(n==="all")return", all";var r=e?Qv(e):", "+Qv(n);return r||e||n}ha&&(Jr=document.createElement("p"));function JS(t,e){var n=e;if(!Jr||t==="content")return e;if(typeof n!="string"||!isNaN(parseInt(n,10)))return n;var r=t+n;if(Qo[r]!=null)return Qo[r];try{Jr.style[t]=n}catch{return Qo[r]=!1,!1}if(CU[t])n=n.replace(xU,kU);else if(Jr.style[t]===""&&(n=X.css+n,n==="-ms-flex"&&(Jr.style[t]="-ms-flexbox"),Jr.style[t]=n,Jr.style[t]===""))return Qo[r]=!1,!1;return Jr.style[t]="",Qo[r]=n,Qo[r]}function AU(){function t(i){if(i.type==="keyframes"){var o=i;o.at=rU(o.at)}}function e(i){for(var o in i){var s=i[o];if(o==="fallbacks"&&Array.isArray(s)){i[o]=s.map(e);continue}var a=!1,l=Qv(o);l&&l!==o&&(a=!0);var u=!1,c=JS(l,mo(s));c&&c!==s&&(u=!0),(a||u)&&(a&&delete i[o],i[l||o]=c||s)}return i}function n(i,o){return o.type!=="style"?i:e(i)}function r(i,o){return JS(o,mo(i))||i}return{onProcessRule:t,onProcessStyle:n,onChangeValue:r}}function PU(){var t=function(n,r){return n.length===r.length?n>r?1:-1:n.length-r.length};return{onProcessStyle:function(n,r){if(r.type!=="style")return n;for(var i={},o=Object.keys(n).sort(t),s=0;s<o.length;s++)i[o[s]]=n[o[s]];return i}}}var RU=function(e){return e===void 0&&(e={}),{plugins:[gF(),_F(e.observable),bF(),AF(),OF(),$F(),MF(),FF(),BF(e.defaultUnit),KF(),AU(),PU()]}},OU=Number.MIN_SAFE_INTEGER||-1e9,NU=function(){return OU++},DU=b.createContext({classNamePrefix:"",disableStylesGeneration:!1,isSSR:!ha}),ZS=new Map,C1=function(e,n){var r=e.managers;if(r)return r[n]||(r[n]=new GS),r[n];var i=ZS.get(n);return i||(i=new GS,ZS.set(n,i)),i},eb=function(e){var n=e.sheet,r=e.context,i=e.index,o=e.theme;if(n){var s=C1(r,i);s.manage(o),r.registry&&r.registry.add(n)}},$U=function(e){if(e.sheet){var n=C1(e.context,e.index);n.unmanage(e.theme)}},MU=KA(RU()),sP=new WeakMap,aP=function(e){return sP.get(e)},LU=function(e,n){sP.set(e,n)},jU=function(e){var n=e.styles;return typeof n!="function"?n:n(e.theme)};function VU(t,e){var n;t.context.id&&t.context.id.minify!=null&&(n=t.context.id.minify);var r=t.context.classNamePrefix||"";t.name&&!n&&(r+=t.name.replace(/\s/g,"-")+"-");var i="";return t.name&&(i=t.name+", "),i+=typeof t.styles=="function"?"Themed":"Unthemed",B({},t.sheetOptions,{index:t.index,meta:i,classNamePrefix:r,link:e,generateId:t.sheetOptions&&t.sheetOptions.generateId?t.sheetOptions.generateId:t.context.generateId})}var FU=function(e){if(!e.context.disableStylesGeneration){var n=C1(e.context,e.index),r=n.get(e.theme);if(r)return r;var i=e.context.jss||MU,o=jU(e),s=QA(o),a=i.createStyleSheet(o,VU(e,s!==null));return LU(a,{dynamicStyles:s,styles:o}),n.add(e.theme,a),a}},UU=function(e,n){for(var r in n)e.deleteRule(n[r])},zU=function(e,n,r){for(var i in r)n.updateOne(r[i],e)},BU=function(e,n){var r=aP(e);if(r){var i={};for(var o in r.dynamicStyles)for(var s=e.rules.index.length,a=e.addRule(o,r.dynamicStyles[o]),l=s;l<e.rules.index.length;l++){var u=e.rules.index[l];e.updateOne(u,n),i[a===u?o:u.key]=u}return i}},WU=function(e,n){if(!n)return e.classes;var r=aP(e);if(!r)return e.classes;var i={};for(var o in r.styles)i[o]=e.classes[o],o in n&&(i[o]+=" "+e.classes[n[o].key]);return i};function tb(t){return t?b.useEffect:H.useInsertionEffect||b.useLayoutEffect}var Xm={},HU=function(e,n){n===void 0&&(n={});var r=n,i=r.index,o=i===void 0?NU():i,s=r.theming,a=r.name,l=Bn(r,["index","theming","name"]),u=s&&s.context||zA,c=function(h){return typeof e=="function"&&(h||b.useContext(u))||Xm},f={};return function(h){var g=b.useRef(!0),m=b.useContext(DU),_=c(h&&h.theme),v=b.useMemo(function(){var S=FU({context:m,styles:e,name:a,theme:_,index:o,sheetOptions:l});return S&&m.isSSR&&eb({index:o,context:m,sheet:S,theme:_}),[S,S?BU(S,h):null]},[m,_]),p=v[0],y=v[1];tb(m.isSSR)(function(){p&&y&&!g.current&&zU(h,p,y)},[h]),tb(m.isSSR)(function(){return p&&eb({index:o,context:m,sheet:p,theme:_}),function(){p&&($U({index:o,context:m,sheet:p,theme:_}),y&&UU(p,y))}},[p]);var E=b.useMemo(function(){return p&&y?WU(p,y):f},[p,y]);return b.useDebugValue(E),b.useDebugValue(_===Xm?"No theme":_),b.useEffect(function(){g.current=!1}),E}},qU=FA;function GU(t){var e=qU(t),n=e%1;return e===e?n?e-n:e:0}var KU=GU;function QU(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var YU=QU,XU=Array.isArray,sp=XU,nb=np,JU=YU,ZU=sp,ez=jA,tz=1/0,rb=nb?nb.prototype:void 0,ib=rb?rb.toString:void 0;function lP(t){if(typeof t=="string")return t;if(ZU(t))return JU(t,lP)+"";if(ez(t))return ib?ib.call(t):"";var e=t+"";return e=="0"&&1/t==-tz?"-0":e}var nz=lP,rz=nz;function iz(t){return t==null?"":rz(t)}var oz=iz,sz=gr,az=KU,lz=VA,ob=oz,uz=sz.isFinite,cz=Math.min;function fz(t){var e=Math[t];return function(n,r){if(n=lz(n),r=r==null?0:cz(az(r),292),r&&uz(n)){var i=(ob(n)+"e").split("e"),o=e(i[0]+"e"+(+i[1]+r));return i=(ob(o)+"e").split("e"),+(i[0]+"e"+(+i[1]-r))}return e(n)}}var dz=fz,hz=dz,pz=hz("round"),mz=pz;const qa=Do(mz);function gz(){this.__data__=[],this.size=0}var vz=gz,yz=E1;function _z(t,e){for(var n=t.length;n--;)if(yz(t[n][0],e))return n;return-1}var ap=_z,wz=ap,Ez=Array.prototype,Sz=Ez.splice;function bz(t){var e=this.__data__,n=wz(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Sz.call(e,n,1),--this.size,!0}var Tz=bz,Iz=ap;function Cz(t){var e=this.__data__,n=Iz(e,t);return n<0?void 0:e[n][1]}var xz=Cz,kz=ap;function Az(t){return kz(this.__data__,t)>-1}var Pz=Az,Rz=ap;function Oz(t,e){var n=this.__data__,r=Rz(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var Nz=Oz,Dz=vz,$z=Tz,Mz=xz,Lz=Pz,jz=Nz;function ma(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ma.prototype.clear=Dz;ma.prototype.delete=$z;ma.prototype.get=Mz;ma.prototype.has=Lz;ma.prototype.set=jz;var lp=ma,Vz=lp;function Fz(){this.__data__=new Vz,this.size=0}var Uz=Fz;function zz(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var Bz=zz;function Wz(t){return this.__data__.get(t)}var Hz=Wz;function qz(t){return this.__data__.has(t)}var Gz=qz,Kz=gr,Qz=Kz["__core-js_shared__"],Yz=Qz,Jm=Yz,sb=function(){var t=/[^.]+$/.exec(Jm&&Jm.keys&&Jm.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Xz(t){return!!sb&&sb in t}var Jz=Xz,Zz=Function.prototype,e8=Zz.toString;function t8(t){if(t!=null){try{return e8.call(t)}catch{}try{return t+""}catch{}}return""}var uP=t8,n8=DA,r8=Jz,i8=rp,o8=uP,s8=/[\\^$.*+?()[\]{}|]/g,a8=/^\[object .+?Constructor\]$/,l8=Function.prototype,u8=Object.prototype,c8=l8.toString,f8=u8.hasOwnProperty,d8=RegExp("^"+c8.call(f8).replace(s8,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h8(t){if(!i8(t)||r8(t))return!1;var e=n8(t)?d8:a8;return e.test(o8(t))}var p8=h8;function m8(t,e){return t==null?void 0:t[e]}var g8=m8,v8=p8,y8=g8;function _8(t,e){var n=y8(t,e);return v8(n)?n:void 0}var ga=_8,w8=ga,E8=gr,S8=w8(E8,"Map"),x1=S8,b8=ga,T8=b8(Object,"create"),up=T8,ab=up;function I8(){this.__data__=ab?ab(null):{},this.size=0}var C8=I8;function x8(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var k8=x8,A8=up,P8="__lodash_hash_undefined__",R8=Object.prototype,O8=R8.hasOwnProperty;function N8(t){var e=this.__data__;if(A8){var n=e[t];return n===P8?void 0:n}return O8.call(e,t)?e[t]:void 0}var D8=N8,$8=up,M8=Object.prototype,L8=M8.hasOwnProperty;function j8(t){var e=this.__data__;return $8?e[t]!==void 0:L8.call(e,t)}var V8=j8,F8=up,U8="__lodash_hash_undefined__";function z8(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=F8&&e===void 0?U8:e,this}var B8=z8,W8=C8,H8=k8,q8=D8,G8=V8,K8=B8;function va(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}va.prototype.clear=W8;va.prototype.delete=H8;va.prototype.get=q8;va.prototype.has=G8;va.prototype.set=K8;var Q8=va,lb=Q8,Y8=lp,X8=x1;function J8(){this.size=0,this.__data__={hash:new lb,map:new(X8||Y8),string:new lb}}var Z8=J8;function e7(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var t7=e7,n7=t7;function r7(t,e){var n=t.__data__;return n7(e)?n[typeof e=="string"?"string":"hash"]:n.map}var cp=r7,i7=cp;function o7(t){var e=i7(this,t).delete(t);return this.size-=e?1:0,e}var s7=o7,a7=cp;function l7(t){return a7(this,t).get(t)}var u7=l7,c7=cp;function f7(t){return c7(this,t).has(t)}var d7=f7,h7=cp;function p7(t,e){var n=h7(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var m7=p7,g7=Z8,v7=s7,y7=u7,_7=d7,w7=m7;function ya(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ya.prototype.clear=g7;ya.prototype.delete=v7;ya.prototype.get=y7;ya.prototype.has=_7;ya.prototype.set=w7;var cP=ya,E7=lp,S7=x1,b7=cP,T7=200;function I7(t,e){var n=this.__data__;if(n instanceof E7){var r=n.__data__;if(!S7||r.length<T7-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new b7(r)}return n.set(t,e),this.size=n.size,this}var C7=I7,x7=lp,k7=Uz,A7=Bz,P7=Hz,R7=Gz,O7=C7;function _a(t){var e=this.__data__=new x7(t);this.size=e.size}_a.prototype.clear=k7;_a.prototype.delete=A7;_a.prototype.get=P7;_a.prototype.has=R7;_a.prototype.set=O7;var N7=_a,D7="__lodash_hash_undefined__";function $7(t){return this.__data__.set(t,D7),this}var M7=$7;function L7(t){return this.__data__.has(t)}var j7=L7,V7=cP,F7=M7,U7=j7;function Od(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new V7;++e<n;)this.add(t[e])}Od.prototype.add=Od.prototype.push=F7;Od.prototype.has=U7;var z7=Od;function B7(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var W7=B7;function H7(t,e){return t.has(e)}var q7=H7,G7=z7,K7=W7,Q7=q7,Y7=1,X7=2;function J7(t,e,n,r,i,o){var s=n&Y7,a=t.length,l=e.length;if(a!=l&&!(s&&l>a))return!1;var u=o.get(t),c=o.get(e);if(u&&c)return u==e&&c==t;var f=-1,d=!0,h=n&X7?new G7:void 0;for(o.set(t,e),o.set(e,t);++f<a;){var g=t[f],m=e[f];if(r)var _=s?r(m,g,f,e,t,o):r(g,m,f,t,e,o);if(_!==void 0){if(_)continue;d=!1;break}if(h){if(!K7(e,function(v,p){if(!Q7(h,p)&&(g===v||i(g,v,n,r,o)))return h.push(p)})){d=!1;break}}else if(!(g===m||i(g,m,n,r,o))){d=!1;break}}return o.delete(t),o.delete(e),d}var fP=J7,Z7=gr,eB=Z7.Uint8Array,tB=eB;function nB(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}var rB=nB;function iB(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var oB=iB,ub=np,cb=tB,sB=E1,aB=fP,lB=rB,uB=oB,cB=1,fB=2,dB="[object Boolean]",hB="[object Date]",pB="[object Error]",mB="[object Map]",gB="[object Number]",vB="[object RegExp]",yB="[object Set]",_B="[object String]",wB="[object Symbol]",EB="[object ArrayBuffer]",SB="[object DataView]",fb=ub?ub.prototype:void 0,Zm=fb?fb.valueOf:void 0;function bB(t,e,n,r,i,o,s){switch(n){case SB:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case EB:return!(t.byteLength!=e.byteLength||!o(new cb(t),new cb(e)));case dB:case hB:case gB:return sB(+t,+e);case pB:return t.name==e.name&&t.message==e.message;case vB:case _B:return t==e+"";case mB:var a=lB;case yB:var l=r&cB;if(a||(a=uB),t.size!=e.size&&!l)return!1;var u=s.get(t);if(u)return u==e;r|=fB,s.set(t,e);var c=aB(a(t),a(e),r,i,o,s);return s.delete(t),c;case wB:if(Zm)return Zm.call(t)==Zm.call(e)}return!1}var TB=bB;function IB(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var CB=IB,xB=CB,kB=sp;function AB(t,e,n){var r=e(t);return kB(t)?r:xB(r,n(t))}var PB=AB;function RB(t,e){for(var n=-1,r=t==null?0:t.length,i=0,o=[];++n<r;){var s=t[n];e(s,n,t)&&(o[i++]=s)}return o}var OB=RB;function NB(){return[]}var DB=NB,$B=OB,MB=DB,LB=Object.prototype,jB=LB.propertyIsEnumerable,db=Object.getOwnPropertySymbols,VB=db?function(t){return t==null?[]:(t=Object(t),$B(db(t),function(e){return jB.call(t,e)}))}:MB,FB=VB;function UB(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var zB=UB,BB=qu,WB=Gu,HB="[object Arguments]";function qB(t){return WB(t)&&BB(t)==HB}var GB=qB,hb=GB,KB=Gu,dP=Object.prototype,QB=dP.hasOwnProperty,YB=dP.propertyIsEnumerable,XB=hb(function(){return arguments}())?hb:function(t){return KB(t)&&QB.call(t,"callee")&&!YB.call(t,"callee")},JB=XB,Nd={exports:{}};function ZB(){return!1}var eW=ZB;Nd.exports;(function(t,e){var n=gr,r=eW,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,s=o&&o.exports===i,a=s?n.Buffer:void 0,l=a?a.isBuffer:void 0,u=l||r;t.exports=u})(Nd,Nd.exports);var hP=Nd.exports,tW=qu,nW=$A,rW=Gu,iW="[object Arguments]",oW="[object Array]",sW="[object Boolean]",aW="[object Date]",lW="[object Error]",uW="[object Function]",cW="[object Map]",fW="[object Number]",dW="[object Object]",hW="[object RegExp]",pW="[object Set]",mW="[object String]",gW="[object WeakMap]",vW="[object ArrayBuffer]",yW="[object DataView]",_W="[object Float32Array]",wW="[object Float64Array]",EW="[object Int8Array]",SW="[object Int16Array]",bW="[object Int32Array]",TW="[object Uint8Array]",IW="[object Uint8ClampedArray]",CW="[object Uint16Array]",xW="[object Uint32Array]",Se={};Se[_W]=Se[wW]=Se[EW]=Se[SW]=Se[bW]=Se[TW]=Se[IW]=Se[CW]=Se[xW]=!0;Se[iW]=Se[oW]=Se[vW]=Se[sW]=Se[yW]=Se[aW]=Se[lW]=Se[uW]=Se[cW]=Se[fW]=Se[dW]=Se[hW]=Se[pW]=Se[mW]=Se[gW]=!1;function kW(t){return rW(t)&&nW(t.length)&&!!Se[tW(t)]}var AW=kW;function PW(t){return function(e){return t(e)}}var RW=PW,Dd={exports:{}};Dd.exports;(function(t,e){var n=OA,r=e&&!e.nodeType&&e,i=r&&!0&&t&&!t.nodeType&&t,o=i&&i.exports===r,s=o&&n.process,a=function(){try{var l=i&&i.require&&i.require("util").types;return l||s&&s.binding&&s.binding("util")}catch{}}();t.exports=a})(Dd,Dd.exports);var OW=Dd.exports,NW=AW,DW=RW,pb=OW,mb=pb&&pb.isTypedArray,$W=mb?DW(mb):NW,pP=$W,MW=zB,LW=JB,jW=sp,VW=hP,FW=LA,UW=pP,zW=Object.prototype,BW=zW.hasOwnProperty;function WW(t,e){var n=jW(t),r=!n&&LW(t),i=!n&&!r&&VW(t),o=!n&&!r&&!i&&UW(t),s=n||r||i||o,a=s?MW(t.length,String):[],l=a.length;for(var u in t)(e||BW.call(t,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||FW(u,l)))&&a.push(u);return a}var HW=WW,qW=Object.prototype;function GW(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||qW;return t===n}var KW=GW;function QW(t,e){return function(n){return t(e(n))}}var YW=QW,XW=YW,JW=XW(Object.keys,Object),ZW=JW,eH=KW,tH=ZW,nH=Object.prototype,rH=nH.hasOwnProperty;function iH(t){if(!eH(t))return tH(t);var e=[];for(var n in Object(t))rH.call(t,n)&&n!="constructor"&&e.push(n);return e}var oH=iH,sH=HW,aH=oH,lH=MA;function uH(t){return lH(t)?sH(t):aH(t)}var cH=uH,fH=PB,dH=FB,hH=cH;function pH(t){return fH(t,hH,dH)}var mH=pH,gb=mH,gH=1,vH=Object.prototype,yH=vH.hasOwnProperty;function _H(t,e,n,r,i,o){var s=n&gH,a=gb(t),l=a.length,u=gb(e),c=u.length;if(l!=c&&!s)return!1;for(var f=l;f--;){var d=a[f];if(!(s?d in e:yH.call(e,d)))return!1}var h=o.get(t),g=o.get(e);if(h&&g)return h==e&&g==t;var m=!0;o.set(t,e),o.set(e,t);for(var _=s;++f<l;){d=a[f];var v=t[d],p=e[d];if(r)var y=s?r(p,v,d,e,t,o):r(v,p,d,t,e,o);if(!(y===void 0?v===p||i(v,p,n,r,o):y)){m=!1;break}_||(_=d=="constructor")}if(m&&!_){var E=t.constructor,S=e.constructor;E!=S&&"constructor"in t&&"constructor"in e&&!(typeof E=="function"&&E instanceof E&&typeof S=="function"&&S instanceof S)&&(m=!1)}return o.delete(t),o.delete(e),m}var wH=_H,EH=ga,SH=gr,bH=EH(SH,"DataView"),TH=bH,IH=ga,CH=gr,xH=IH(CH,"Promise"),kH=xH,AH=ga,PH=gr,RH=AH(PH,"Set"),OH=RH,NH=ga,DH=gr,$H=NH(DH,"WeakMap"),MH=$H,Yv=TH,Xv=x1,Jv=kH,Zv=OH,ey=MH,mP=qu,wa=uP,vb="[object Map]",LH="[object Object]",yb="[object Promise]",_b="[object Set]",wb="[object WeakMap]",Eb="[object DataView]",jH=wa(Yv),VH=wa(Xv),FH=wa(Jv),UH=wa(Zv),zH=wa(ey),Gi=mP;(Yv&&Gi(new Yv(new ArrayBuffer(1)))!=Eb||Xv&&Gi(new Xv)!=vb||Jv&&Gi(Jv.resolve())!=yb||Zv&&Gi(new Zv)!=_b||ey&&Gi(new ey)!=wb)&&(Gi=function(t){var e=mP(t),n=e==LH?t.constructor:void 0,r=n?wa(n):"";if(r)switch(r){case jH:return Eb;case VH:return vb;case FH:return yb;case UH:return _b;case zH:return wb}return e});var BH=Gi,eg=N7,WH=fP,HH=TB,qH=wH,Sb=BH,bb=sp,Tb=hP,GH=pP,KH=1,Ib="[object Arguments]",Cb="[object Array]",Hc="[object Object]",QH=Object.prototype,xb=QH.hasOwnProperty;function YH(t,e,n,r,i,o){var s=bb(t),a=bb(e),l=s?Cb:Sb(t),u=a?Cb:Sb(e);l=l==Ib?Hc:l,u=u==Ib?Hc:u;var c=l==Hc,f=u==Hc,d=l==u;if(d&&Tb(t)){if(!Tb(e))return!1;s=!0,c=!1}if(d&&!c)return o||(o=new eg),s||GH(t)?WH(t,e,n,r,i,o):HH(t,e,l,n,r,i,o);if(!(n&KH)){var h=c&&xb.call(t,"__wrapped__"),g=f&&xb.call(e,"__wrapped__");if(h||g){var m=h?t.value():t,_=g?e.value():e;return o||(o=new eg),i(m,_,n,r,o)}}return d?(o||(o=new eg),qH(t,e,n,r,i,o)):!1}var XH=YH,JH=XH,kb=Gu;function gP(t,e,n,r,i){return t===e?!0:t==null||e==null||!kb(t)&&!kb(e)?t!==t&&e!==e:JH(t,e,n,r,gP,i)}var ZH=gP,eq=ZH;function tq(t,e){return eq(t,e)}var nq=tq;const rq=Do(nq);var tt=function(){return tt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},tt.apply(this,arguments)};function iq(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}var ty=function(t,e,n,r,i){return(t-e)*(i-r)/(n-e)+r},vP=function(t,e){var n=t+e;return n>360?n-360:n},yP=function(){return Math.random()>.5},_P=[0,0,1],k1=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],_P],oq=function(t){return!rq(k1[t],_P)&&yP()},Ab=200,sq=800,aq=.1,lq=.25,Pb=.5,uq=k1.reduce(function(t,e,n){var r;return tt(tt({},t),(r={},r["@keyframes rotation-".concat(n)]={"50%":{transform:"rotate3d(".concat(e.map(function(i){return i/2}).join(),", 180deg)")},"100%":{transform:"rotate3d(".concat(e.join(),", 360deg)")}},r))},{}),cq=function(t,e,n){var r=typeof e=="string"?e:"".concat(e,"px"),i=t.reduce(function(o,s,a){var l,u=ty(Math.abs(vP(s,90)-180),0,180,-n/2,n/2);return tt(tt({},o),(l={},l["@keyframes x-axis-".concat(a)]={to:{transform:"translateX(".concat(u,"px)")}},l))},{});return tt({"@keyframes y-axis":{to:{transform:"translateY(".concat(r,")")}}},i)},fq=function(t,e,n,r,i){var o,s=Math.round(Math.random()*(sq-Ab)+Ab),a=Math.round(Math.random()*(k1.length-1)),l=e-Math.round(Math.random()*1e3),u=Math.random()<aq,c=oq(a),f=u?qa(Math.random()*lq,2):0,d=f*-1,h=f,g=qa(Math.abs(ty(Math.abs(vP(t.degree,90)-180),0,180,-1,1)),4),m=qa(Math.random()*Pb,4),_=qa(Math.random()*n*(yP()?1:-1),4),v=Pb,p=qa(Math.max(ty(Math.abs(t.degree-180),0,180,n,-n),0),4);return o={},o["&#confetti-particle-".concat(i)]={animation:"$x-axis-".concat(i," ").concat(l,"ms forwards cubic-bezier(").concat(f,", ").concat(d,", ").concat(h,", ").concat(g,")"),"& > div":{width:c?r:Math.round(Math.random()*4)+r/2,height:c?r:Math.round(Math.random()*2)+r,animation:"$y-axis ".concat(l,"ms forwards cubic-bezier(").concat(m,", ").concat(_,", ").concat(v,", ").concat(p,")"),"&:after":tt({backgroundColor:t.color,animation:"$rotation-".concat(a," ").concat(s,"ms infinite linear")},c?{borderRadius:"50%"}:{})}},o},dq=function(t){var e=t.particles,n=t.duration,r=t.height,i=t.width,o=t.force,s=t.particleSize,a=e.reduce(function(l,u,c){return tt(tt({},l),fq(u,n,o,s,c))},{});return HU(tt(tt(tt({},uq),cq(e.map(function(l){return l.degree}),r,i)),{container:{width:0,height:0,position:"relative"},screen:{position:"fixed",top:0,left:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none"},particle:tt(tt({},a),{"& > div":{position:"absolute",left:0,top:0,"&:after":{content:"''",display:"block",width:"100%",height:"100%"}}})}),{name:"confetti-explosion"})},hq=.5,pq=12,mq="120vh",gq=1e3,vq=100,yq=2200,_q=["#FFC700","#FF0000","#2E3191","#41BBC7"],wq=function(t,e){var n=360/t;return b6(t).map(function(r){return{color:e[r%e.length],degree:n*r}})};function Eq(t){var e=t.particleCount,n=e===void 0?vq:e,r=t.duration,i=r===void 0?yq:r,o=t.colors,s=o===void 0?_q:o,a=t.particleSize,l=a===void 0?pq:a,u=t.force,c=u===void 0?hq:u,f=t.height,d=f===void 0?mq:f,h=t.width,g=h===void 0?gq:h,m=t.zIndex,_=t.onComplete,v=iq(t,["particleCount","duration","colors","particleSize","force","height","width","zIndex","onComplete"]),p=b.useState(),y=p[0],E=p[1],S=wq(n,s),I=dq({particles:S,duration:i,particleSize:l,force:c,width:g,height:d})(),T=b.useCallback(function(O){if(O){var $=O.getBoundingClientRect(),R=$.top,te=$.left;E({top:R,left:te})}},[]);return b.useEffect(function(){if(typeof _=="function"){var O=setTimeout(_,i);return function(){return clearTimeout(O)}}},[i,_]),w.jsx("div",tt({ref:T,className:I.container},v,{children:y&&ok.createPortal(w.jsx("div",tt({className:I.screen},m?{style:{zIndex:m}}:null,{children:w.jsx("div",tt({style:{position:"absolute",top:y.top,left:y.left}},{children:S.map(function(O,$){return w.jsx("div",tt({id:"confetti-particle-".concat($),className:I.particle},{children:w.jsx("div",{})}),O.degree)})}))})),document.body)}))}const wP="rgb(255, 51, 119)",Sq=Oh`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,bq=Oh`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`,Tq=Oh`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
`,Iq=A(Q0)`
    display: flex;
`,Cq=A.img`
    height: 100px;
    width: 100px;
    margin: 10px 20px;
    cursor: pointer;
    color: pink;
`,xq=A.div`
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
`,kq=A.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`,Ga=A.button`
    font-size: 20px;
    border: none;
    background-color: #fff;
    cursor: pointer;
    margin: 0 20px;
    height: 30px;
    transition: 0.5s ease-out;

    &:hover {
        color: ${wP};
    }
`,Rb=A.div`
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

    ${t=>t.open&&"opacity: 1; transform: translateY(0); pointer-events: auto;"};
`,Ob=A.div`
    position: relative;
`,Ka=A(Q0)`
  color: black;
  cursor: pointer;
  padding: 12px 20px;
  display: block;
  text-decoration: none;

  &:hover {
    color: ${wP};
    background-color: #ddd;
  }
`,Aq=A.div`
    position: relative;
    top: 7px;
    display: flex;
    align-items: center;
    margin: 0px 40px 15px; 0;
    cursor: pointer;
    animation: ${({$bounce:t})=>t?bo`animation: ${Tq} 1s ease-in-out`:"none"}
`,Pq=A(RA)`
    // margin-right: 20px;
`,Rq=A.span`
    position: absolute; // removed from normal doc flow, position relative to nearest ancestor, which is the ShoppingCartContainer
    top: 13px;
    right: 11px;
    color: rgb(255, 26, 198);
    padding: 0 3px;
    border-radius: 40%;
    font-size: 14px;
    font-weight: bold;
`,Oq=A.div`
    position: absolute;
    top: 120px;
    width: 100%;
    height: 30px;
    background: rgb(0,0,0);
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: ${({$show:t})=>t?1:0};
    ${({$show:t})=>t?bo`animation: ${Sq} 0.6s ease-in-out;`:bo`animation: ${bq} 0.6s ease-in-out; display: none;`}


    h4 {
        color: #fff;
    };

`,Nq=A(Eq)`
    position: absolute;
    width: 100;
`,Dq="/assets/hearts-Ik6zbrID.jpg";var Nb={};/**
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
 */const EP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$q=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},SP={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,h=u&63;l||(h=64,s||(d=64)),r.push(n[c],n[f],n[d],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(EP(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$q(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new Mq;const d=o<<2|a>>4;if(r.push(d),u!==64){const h=a<<4&240|u>>2;if(r.push(h),f!==64){const g=u<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mq extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lq=function(t){const e=EP(t);return SP.encodeByteArray(e,!0)},$d=function(t){return Lq(t).replace(/\./g,"")},bP=function(t){try{return SP.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jq(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vq=()=>jq().__FIREBASE_DEFAULTS__,Fq=()=>{if(typeof process>"u"||typeof Nb>"u")return;const t=Nb.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uq=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bP(t[1]);return e&&JSON.parse(e)},fp=()=>{try{return Vq()||Fq()||Uq()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},TP=t=>{var e,n;return(n=(e=fp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zq=t=>{const e=TP(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},IP=()=>{var t;return(t=fp())===null||t===void 0?void 0:t.config},CP=t=>{var e;return(e=fp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Bq{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Wq(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$d(JSON.stringify(n)),$d(JSON.stringify(s)),""].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hq(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function qq(){var t;const e=(t=fp())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gq(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kq(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qq(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yq(){return!qq()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xP(){try{return typeof indexedDB=="object"}catch{return!1}}function Xq(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Jq="FirebaseError";class zr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Jq,Object.setPrototypeOf(this,zr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ku.prototype.create)}}class Ku{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?Zq(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new zr(i,a,r)}}function Zq(t,e){return t.replace(eG,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const eG=/\{\$([^}]+)}/g;function tG(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Md(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Db(o)&&Db(s)){if(!Md(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Db(t){return t!==null&&typeof t=="object"}/**
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
 */function Qu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ol(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function sl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nG(t,e){const n=new rG(t,e);return n.subscribe.bind(n)}class rG{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iG(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=tg),i.error===void 0&&(i.error=tg),i.complete===void 0&&(i.complete=tg);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iG(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tg(){}/**
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
 */function zt(t){return t&&t._delegate?t._delegate:t}class To{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ki="[DEFAULT]";/**
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
 */class oG{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bq;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aG(e))try{this.getOrInitializeService({instanceIdentifier:Ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ki){return this.instances.has(e)}getOptions(e=Ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sG(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ki){return this.component?this.component.multipleInstances?e:Ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sG(t){return t===Ki?void 0:t}function aG(t){return t.instantiationMode==="EAGER"}/**
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
 */class lG{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oG(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const uG={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},cG=ie.INFO,fG={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},dG=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fG[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class A1{constructor(e){this.name=e,this._logLevel=cG,this._logHandler=dG,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uG[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const hG=(t,e)=>e.some(n=>t instanceof n);let $b,Mb;function pG(){return $b||($b=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mG(){return Mb||(Mb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kP=new WeakMap,ny=new WeakMap,AP=new WeakMap,ng=new WeakMap,P1=new WeakMap;function gG(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Si(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&kP.set(n,t)}).catch(()=>{}),P1.set(e,t),e}function vG(t){if(ny.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});ny.set(t,e)}let ry={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ny.get(t);if(e==="objectStoreNames")return t.objectStoreNames||AP.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Si(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yG(t){ry=t(ry)}function _G(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rg(this),e,...n);return AP.set(r,e.sort?e.sort():[e]),Si(r)}:mG().includes(t)?function(...e){return t.apply(rg(this),e),Si(kP.get(this))}:function(...e){return Si(t.apply(rg(this),e))}}function wG(t){return typeof t=="function"?_G(t):(t instanceof IDBTransaction&&vG(t),hG(t,pG())?new Proxy(t,ry):t)}function Si(t){if(t instanceof IDBRequest)return gG(t);if(ng.has(t))return ng.get(t);const e=wG(t);return e!==t&&(ng.set(t,e),P1.set(e,t)),e}const rg=t=>P1.get(t);function EG(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Si(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Si(s.result),l.oldVersion,l.newVersion,Si(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const SG=["get","getKey","getAll","getAllKeys","count"],bG=["put","add","delete","clear"],ig=new Map;function Lb(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ig.get(e))return ig.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bG.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SG.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ig.set(e,o),o}yG(t=>({...t,get:(e,n,r)=>Lb(e,n)||t.get(e,n,r),has:(e,n)=>!!Lb(e,n)||t.has(e,n)}));/**
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
 */class TG{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IG(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IG(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const iy="@firebase/app",jb="0.9.27";/**
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
 */const Io=new A1("@firebase/app"),CG="@firebase/app-compat",xG="@firebase/analytics-compat",kG="@firebase/analytics",AG="@firebase/app-check-compat",PG="@firebase/app-check",RG="@firebase/auth",OG="@firebase/auth-compat",NG="@firebase/database",DG="@firebase/database-compat",$G="@firebase/functions",MG="@firebase/functions-compat",LG="@firebase/installations",jG="@firebase/installations-compat",VG="@firebase/messaging",FG="@firebase/messaging-compat",UG="@firebase/performance",zG="@firebase/performance-compat",BG="@firebase/remote-config",WG="@firebase/remote-config-compat",HG="@firebase/storage",qG="@firebase/storage-compat",GG="@firebase/firestore",KG="@firebase/firestore-compat",QG="firebase",YG="10.8.0";/**
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
 */const oy="[DEFAULT]",XG={[iy]:"fire-core",[CG]:"fire-core-compat",[kG]:"fire-analytics",[xG]:"fire-analytics-compat",[PG]:"fire-app-check",[AG]:"fire-app-check-compat",[RG]:"fire-auth",[OG]:"fire-auth-compat",[NG]:"fire-rtdb",[DG]:"fire-rtdb-compat",[$G]:"fire-fn",[MG]:"fire-fn-compat",[LG]:"fire-iid",[jG]:"fire-iid-compat",[VG]:"fire-fcm",[FG]:"fire-fcm-compat",[UG]:"fire-perf",[zG]:"fire-perf-compat",[BG]:"fire-rc",[WG]:"fire-rc-compat",[HG]:"fire-gcs",[qG]:"fire-gcs-compat",[GG]:"fire-fst",[KG]:"fire-fst-compat","fire-js":"fire-js",[QG]:"fire-js-all"};/**
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
 */const Ld=new Map,sy=new Map;function JG(t,e){try{t.container.addComponent(e)}catch(n){Io.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qs(t){const e=t.name;if(sy.has(e))return Io.debug(`There were multiple attempts to register component ${e}.`),!1;sy.set(e,t);for(const n of Ld.values())JG(n,t);return!0}function R1(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ZG={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bi=new Ku("app","Firebase",ZG);/**
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
 */class eK{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new To("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ea=YG;function PP(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oy,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bi.create("bad-app-name",{appName:String(i)});if(n||(n=IP()),!n)throw bi.create("no-options");const o=Ld.get(i);if(o){if(Md(n,o.options)&&Md(r,o.config))return o;throw bi.create("duplicate-app",{appName:i})}const s=new lG(i);for(const l of sy.values())s.addComponent(l);const a=new eK(n,r,s);return Ld.set(i,a),a}function RP(t=oy){const e=Ld.get(t);if(!e&&t===oy&&IP())return PP();if(!e)throw bi.create("no-app",{appName:t});return e}function Ti(t,e,n){var r;let i=(r=XG[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Io.warn(a.join(" "));return}Qs(new To(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const tK="firebase-heartbeat-database",nK=1,du="firebase-heartbeat-store";let og=null;function OP(){return og||(og=EG(tK,nK,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(du)}catch(n){console.warn(n)}}}}).catch(t=>{throw bi.create("idb-open",{originalErrorMessage:t.message})})),og}async function rK(t){try{const n=(await OP()).transaction(du),r=await n.objectStore(du).get(NP(t));return await n.done,r}catch(e){if(e instanceof zr)Io.warn(e.message);else{const n=bi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Io.warn(n.message)}}}async function Vb(t,e){try{const r=(await OP()).transaction(du,"readwrite");await r.objectStore(du).put(e,NP(t)),await r.done}catch(n){if(n instanceof zr)Io.warn(n.message);else{const r=bi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Io.warn(r.message)}}}function NP(t){return`${t.name}!${t.options.appId}`}/**
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
 */const iK=1024,oK=30*24*60*60*1e3;class sK{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lK(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Fb();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=oK}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fb(),{heartbeatsToSend:r,unsentEntries:i}=aK(this._heartbeatsCache.heartbeats),o=$d(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Fb(){return new Date().toISOString().substring(0,10)}function aK(t,e=iK){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Ub(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ub(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lK{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xP()?Xq().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rK(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vb(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vb(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ub(t){return $d(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uK(t){Qs(new To("platform-logger",e=>new TG(e),"PRIVATE")),Qs(new To("heartbeat",e=>new sK(e),"PRIVATE")),Ti(iy,jb,t),Ti(iy,jb,"esm2017"),Ti("fire-js","")}uK("");var cK="firebase",fK="10.8.0";/**
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
 */Ti(cK,fK,"app");function DP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dK=DP,$P=new Ku("auth","Firebase",DP());/**
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
 */const jd=new A1("@firebase/auth");function hK(t,...e){jd.logLevel<=ie.WARN&&jd.warn(`Auth (${Ea}): ${t}`,...e)}function Uf(t,...e){jd.logLevel<=ie.ERROR&&jd.error(`Auth (${Ea}): ${t}`,...e)}/**
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
 */function In(t,...e){throw O1(t,...e)}function ur(t,...e){return O1(t,...e)}function MP(t,e,n){const r=Object.assign(Object.assign({},dK()),{[e]:n});return new Ku("auth","Firebase",r).create(e,{appName:t.name})}function pK(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&In(t,"argument-error"),MP(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function O1(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $P.create(t,...e)}function G(t,e,...n){if(!t)throw O1(e,...n)}function br(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uf(e),new Error(e)}function Nr(t,e){t||br(e)}/**
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
 */function ay(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mK(){return zb()==="http:"||zb()==="https:"}function zb(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gK(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mK()||Gq()||"connection"in navigator)?navigator.onLine:!0}function vK(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nr(n>e,"Short delay should be less than long delay!"),this.isMobile=Hq()||Kq()}get(){return gK()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function N1(t,e){Nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class LP{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yK={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _K=new Yu(3e4,6e4);function ji(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vi(t,e,n,r,i={}){return jP(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Qu(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),LP.fetch()(VP(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function jP(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yK),e);try{const i=new EK(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw qc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qc(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw qc(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw qc(t,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw MP(t,c,u);In(t,c)}}catch(i){if(i instanceof zr)throw i;In(t,"network-request-failed",{message:String(i)})}}async function Xu(t,e,n,r,i={}){const o=await Vi(t,e,n,r,i);return"mfaPendingCredential"in o&&In(t,"multi-factor-auth-required",{_serverResponse:o}),o}function VP(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?N1(t.config,i):`${t.config.apiScheme}://${i}`}function wK(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EK{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ur(this.auth,"network-request-failed")),_K.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ur(t,e,r);return i.customData._tokenResponse=n,i}function Bb(t){return t!==void 0&&t.enterprise!==void 0}class SK{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wK(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function bK(t,e){return Vi(t,"GET","/v2/recaptchaConfig",ji(t,e))}/**
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
 */async function TK(t,e){return Vi(t,"POST","/v1/accounts:delete",e)}async function IK(t,e){return Vi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CK(t,e=!1){const n=zt(t),r=await n.getIdToken(e),i=D1(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:xl(sg(i.auth_time)),issuedAtTime:xl(sg(i.iat)),expirationTime:xl(sg(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function sg(t){return Number(t)*1e3}function D1(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uf("JWT malformed, contained fewer than 3 sections"),null;try{const i=bP(n);return i?JSON.parse(i):(Uf("Failed to decode base64 JWT payload"),null)}catch(i){return Uf("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xK(t){const e=D1(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hu(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zr&&kK(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kK({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class AK{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class FP{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xl(this.lastLoginAt),this.creationTime=xl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await hu(t,IK(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?OK(o.providerUserInfo):[],a=RK(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new FP(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function PK(t){const e=zt(t);await Vd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RK(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function OK(t){return t.map(e=>{var{providerId:n}=e,r=J0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function NK(t,e){const n=await jP(t,{},async()=>{const r=Qu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=VP(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LP.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DK(t,e){return Vi(t,"POST","/v2/accounts:revokeToken",ji(t,e))}/**
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
 */class pu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xK(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await NK(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new pu;return r&&(G(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(G(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pu,this.toJSON())}_performRefresh(){return br("not implemented")}}/**
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
 */function Kr(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class go{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=J0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AK(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new FP(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await hu(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CK(this,e)}reload(){return PK(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new go(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hu(this,TK(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,h=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:S,providerData:I,stsTokenManager:T}=n;G(y&&T,e,"internal-error");const O=pu.fromJSON(this.name,T);G(typeof y=="string",e,"internal-error"),Kr(f,e.name),Kr(d,e.name),G(typeof E=="boolean",e,"internal-error"),G(typeof S=="boolean",e,"internal-error"),Kr(h,e.name),Kr(g,e.name),Kr(m,e.name),Kr(_,e.name),Kr(v,e.name),Kr(p,e.name);const $=new go({uid:y,auth:e,email:d,emailVerified:E,displayName:f,isAnonymous:S,photoURL:g,phoneNumber:h,tenantId:m,stsTokenManager:O,createdAt:v,lastLoginAt:p});return I&&Array.isArray(I)&&($.providerData=I.map(R=>Object.assign({},R))),_&&($._redirectEventId=_),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new pu;i.updateFromServerResponse(n);const o=new go({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vd(o),o}}/**
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
 */const Wb=new Map;function Tr(t){Nr(t instanceof Function,"Expected a class definition");let e=Wb.get(t);return e?(Nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wb.set(t,e),e)}/**
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
 */class UP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}UP.type="NONE";const Hb=UP;/**
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
 */function zf(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=zf(this.userKey,i.apiKey,o),this.fullPersistenceKey=zf("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?go._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(Tr(Hb),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Tr(Hb);const s=zf(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=go._fromJSON(e,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new xs(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new xs(o,e,r))}}/**
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
 */function qb(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(WP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qP(e))return"Blackberry";if(GP(e))return"Webos";if($1(e))return"Safari";if((e.includes("chrome/")||BP(e))&&!e.includes("edge/"))return"Chrome";if(HP(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zP(t=Xe()){return/firefox\//i.test(t)}function $1(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BP(t=Xe()){return/crios\//i.test(t)}function WP(t=Xe()){return/iemobile/i.test(t)}function HP(t=Xe()){return/android/i.test(t)}function qP(t=Xe()){return/blackberry/i.test(t)}function GP(t=Xe()){return/webos/i.test(t)}function dp(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $K(t=Xe()){var e;return dp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MK(){return Qq()&&document.documentMode===10}function KP(t=Xe()){return dp(t)||HP(t)||GP(t)||qP(t)||/windows phone/i.test(t)||WP(t)}function LK(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function QP(t,e=[]){let n;switch(t){case"Browser":n=qb(Xe());break;case"Worker":n=`${qb(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ea}/${r}`}/**
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
 */class jK{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function VK(t,e={}){return Vi(t,"GET","/v2/passwordPolicy",ji(t,e))}/**
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
 */const FK=6;class UK{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:FK,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class zK{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gb(this),this.idTokenSubscription=new Gb(this),this.beforeStateQueue=new jK(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$P,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vK()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?zt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VK(this),n=new UK(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ku("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DK(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tr(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=QP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hK(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fi(t){return zt(t)}class Gb{constructor(e){this.auth=e,this.observer=null,this.addObserver=nG(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BK(t){hp=t}function YP(t){return hp.loadJS(t)}function WK(){return hp.recaptchaEnterpriseScript}function HK(){return hp.gapiScript}function qK(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const GK="recaptcha-enterprise",KK="NO_RECAPTCHA";class QK{constructor(e){this.type=GK,this.auth=Fi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{bK(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new SK(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Bb(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(KK)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Bb(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=WK();l.length!==0&&(l+=a),YP(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Kb(t,e,n,r=!1){const i=new QK(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function ly(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Kb(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Kb(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
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
 */function YK(t,e){const n=R1(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Md(o,e??{}))return i;In(i,"already-initialized")}return n.initialize({options:e})}function XK(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JK(t,e,n){const r=Fi(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=XP(e),{host:s,port:a}=ZK(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||eQ()}function XP(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZK(t){const e=XP(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Qb(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Qb(s)}}}function Qb(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eQ(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class M1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return br("not implemented")}_getIdTokenResponse(e){return br("not implemented")}_linkToIdToken(e,n){return br("not implemented")}_getReauthenticationResolver(e){return br("not implemented")}}async function tQ(t,e){return Vi(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function nQ(t,e){return Xu(t,"POST","/v1/accounts:signInWithPassword",ji(t,e))}/**
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
 */async function rQ(t,e){return Xu(t,"POST","/v1/accounts:signInWithEmailLink",ji(t,e))}async function iQ(t,e){return Xu(t,"POST","/v1/accounts:signInWithEmailLink",ji(t,e))}/**
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
 */class mu extends M1{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ly(e,n,"signInWithPassword",nQ);case"emailLink":return rQ(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ly(e,r,"signUpPassword",tQ);case"emailLink":return iQ(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ks(t,e){return Xu(t,"POST","/v1/accounts:signInWithIdp",ji(t,e))}/**
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
 */const oQ="http://localhost";class Co extends M1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Co(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=J0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Co(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:oQ,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qu(n)}return e}}/**
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
 */function sQ(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aQ(t){const e=ol(sl(t)).link,n=e?ol(sl(e)).deep_link_id:null,r=ol(sl(t)).deep_link_id;return(r?ol(sl(r)).link:null)||r||n||e||t}class L1{constructor(e){var n,r,i,o,s,a;const l=ol(sl(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=sQ((i=l.mode)!==null&&i!==void 0?i:null);G(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aQ(e);try{return new L1(n)}catch{return null}}}/**
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
 */class Sa{constructor(){this.providerId=Sa.PROVIDER_ID}static credential(e,n){return mu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=L1.parseLink(n);return G(r,"argument-error"),mu._fromEmailAndCode(e,r.code,r.tenantId)}}Sa.PROVIDER_ID="password";Sa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class j1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ju extends j1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ii extends Ju{constructor(){super("facebook.com")}static credential(e){return Co._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";ii.PROVIDER_ID="facebook.com";/**
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
 */class wr extends Ju{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Co._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
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
 */class oi extends Ju{constructor(){super("github.com")}static credential(e){return Co._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
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
 */class si extends Ju{constructor(){super("twitter.com")}static credential(e,n){return Co._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return si.credential(n,r)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";/**
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
 */async function lQ(t,e){return Xu(t,"POST","/v1/accounts:signUp",ji(t,e))}/**
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
 */class xo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await go._fromIdTokenResponse(e,r,i),s=Yb(r);return new xo({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yb(r);return new xo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yb(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fd extends zr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fd.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fd(e,n,r,i)}}function JP(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Fd._fromErrorAndOperation(t,o,e,r):o})}async function uQ(t,e,n=!1){const r=await hu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xo._forOperation(t,"link",r)}/**
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
 */async function cQ(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await hu(t,JP(r,i,e,t),n);G(o.idToken,r,"internal-error");const s=D1(o.idToken);G(s,r,"internal-error");const{sub:a}=s;return G(t.uid===a,r,"user-mismatch"),xo._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&In(r,"user-mismatch"),o}}/**
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
 */async function ZP(t,e,n=!1){const r="signIn",i=await JP(t,r,e),o=await xo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function fQ(t,e){return ZP(Fi(t),e)}/**
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
 */async function eR(t){const e=Fi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dQ(t,e,n){const r=Fi(t),s=await ly(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lQ).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&eR(t),l}),a=await xo._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function hQ(t,e,n){return fQ(zt(t),Sa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&eR(t),r})}function pQ(t,e,n,r){return zt(t).onIdTokenChanged(e,n,r)}function mQ(t,e,n){return zt(t).beforeAuthStateChanged(e,n)}function gQ(t,e,n,r){return zt(t).onAuthStateChanged(e,n,r)}function vQ(t){return zt(t).signOut()}const Ud="__sak";/**
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
 */class tR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ud,"1"),this.storage.removeItem(Ud),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function yQ(){const t=Xe();return $1(t)||dp(t)}const _Q=1e3,wQ=10;class nR extends tR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yQ()&&LK(),this.fallbackToPolling=KP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);MK()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wQ):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_Q)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nR.type="LOCAL";const EQ=nR;/**
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
 */class rR extends tR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rR.type="SESSION";const iR=rR;/**
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
 */function SQ(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pp(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await SQ(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pp.receivers=[];/**
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
 */function V1(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bQ{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=V1("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(d.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function cr(){return window}function TQ(t){cr().location.href=t}/**
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
 */function oR(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function IQ(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CQ(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xQ(){return oR()?self:null}/**
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
 */const sR="firebaseLocalStorageDb",kQ=1,zd="firebaseLocalStorage",aR="fbase_key";class Zu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mp(t,e){return t.transaction([zd],e?"readwrite":"readonly").objectStore(zd)}function AQ(){const t=indexedDB.deleteDatabase(sR);return new Zu(t).toPromise()}function uy(){const t=indexedDB.open(sR,kQ);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zd,{keyPath:aR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zd)?e(r):(r.close(),await AQ(),e(await uy()))})})}async function Xb(t,e,n){const r=mp(t,!0).put({[aR]:e,value:n});return new Zu(r).toPromise()}async function PQ(t,e){const n=mp(t,!1).get(e),r=await new Zu(n).toPromise();return r===void 0?null:r.value}function Jb(t,e){const n=mp(t,!0).delete(e);return new Zu(n).toPromise()}const RQ=800,OQ=3;class lR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uy(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OQ)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pp._getInstance(xQ()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IQ(),!this.activeServiceWorker)return;this.sender=new bQ(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CQ()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uy();return await Xb(e,Ud,"1"),await Jb(e,Ud),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xb(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PQ(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jb(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=mp(i,!1).getAll();return new Zu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RQ)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lR.type="LOCAL";const NQ=lR;new Yu(3e4,6e4);/**
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
 */function uR(t,e){return e?Tr(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class F1 extends M1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DQ(t){return ZP(t.auth,new F1(t),t.bypassAuthState)}function $Q(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),cQ(n,new F1(t),t.bypassAuthState)}async function MQ(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),uQ(n,new F1(t),t.bypassAuthState)}/**
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
 */class cR{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DQ;case"linkViaPopup":case"linkViaRedirect":return MQ;case"reauthViaPopup":case"reauthViaRedirect":return $Q;default:In(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LQ=new Yu(2e3,1e4);async function jQ(t,e,n){const r=Fi(t);pK(t,e,j1);const i=uR(r,n);return new ro(r,"signInViaPopup",e,i).executeNotNull()}class ro extends cR{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=V1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LQ.get())};e()}}ro.currentPopupAction=null;/**
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
 */const VQ="pendingRedirect",Bf=new Map;class FQ extends cR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bf.get(this.auth._key());if(!e){try{const r=await UQ(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bf.set(this.auth._key(),e)}return this.bypassAuthState||Bf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UQ(t,e){const n=WQ(e),r=BQ(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zQ(t,e){Bf.set(t._key(),e)}function BQ(t){return Tr(t._redirectPersistence)}function WQ(t){return zf(VQ,t.config.apiKey,t.name)}async function HQ(t,e,n=!1){const r=Fi(t),i=uR(r,e),s=await new FQ(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const qQ=10*60*1e3;class GQ{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KQ(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ur(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qQ&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zb(e))}saveEventToCache(e){this.cachedEventUids.add(Zb(e)),this.lastProcessedEventTime=Date.now()}}function Zb(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KQ(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fR(t);default:return!1}}/**
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
 */async function QQ(t,e={}){return Vi(t,"GET","/v1/projects",e)}/**
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
 */const YQ=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XQ=/^https?/;async function JQ(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QQ(t);for(const n of e)try{if(ZQ(n))return}catch{}In(t,"unauthorized-domain")}function ZQ(t){const e=ay(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!XQ.test(n))return!1;if(YQ.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const eY=new Yu(3e4,6e4);function eT(){const t=cr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tY(t){return new Promise((e,n)=>{var r,i,o;function s(){eT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{eT(),n(ur(t,"network-request-failed"))},timeout:eY.get()})}if(!((i=(r=cr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=cr().gapi)===null||o===void 0)&&o.load)s();else{const a=qK("iframefcb");return cr()[a]=()=>{gapi.load?s():n(ur(t,"network-request-failed"))},YP(`${HK()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wf=null,e})}let Wf=null;function nY(t){return Wf=Wf||tY(t),Wf}/**
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
 */const rY=new Yu(5e3,15e3),iY="__/auth/iframe",oY="emulator/auth/iframe",sY={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aY=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lY(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?N1(e,oY):`https://${t.config.authDomain}/${iY}`,r={apiKey:e.apiKey,appName:t.name,v:Ea},i=aY.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Qu(r).slice(1)}`}async function uY(t){const e=await nY(t),n=cr().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:lY(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sY,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ur(t,"network-request-failed"),a=cr().setTimeout(()=>{o(s)},rY.get());function l(){cr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const cY={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fY=500,dY=600,hY="_blank",pY="http://localhost";class tT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mY(t,e,n,r=fY,i=dY){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cY),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Xe().toLowerCase();n&&(a=BP(u)?hY:n),zP(u)&&(e=e||pY,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[h,g])=>`${d}${h}=${g},`,"");if($K(u)&&a!=="_self")return gY(e||"",a),new tT(null);const f=window.open(e||"",a,c);G(f,t,"popup-blocked");try{f.focus()}catch{}return new tT(f)}function gY(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vY="__/auth/handler",yY="emulator/auth/handler",_Y=encodeURIComponent("fac");async function nT(t,e,n,r,i,o){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ea,eventId:i};if(e instanceof j1){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",tG(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(e instanceof Ju){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${_Y}=${encodeURIComponent(l)}`:"";return`${wY(t)}?${Qu(a).slice(1)}${u}`}function wY({config:t}){return t.emulator?N1(t,yY):`https://${t.authDomain}/${vY}`}/**
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
 */const ag="webStorageSupport";class EY{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iR,this._completeRedirectFn=HQ,this._overrideRedirectResult=zQ}async _openPopup(e,n,r,i){var o;Nr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await nT(e,n,r,ay(),i);return mY(e,s,V1())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await nT(e,n,r,ay(),i);return TQ(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Nr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uY(e),r=new GQ(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ag,{type:ag},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ag];s!==void 0&&n(!!s),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JQ(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return KP()||$1()||dp()}}const SY=EY;var rT="@firebase/auth",iT="1.6.0";/**
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
 */class bY{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TY(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IY(t){Qs(new To("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;G(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QP(t)},u=new zK(r,i,o,l);return XK(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qs(new To("auth-internal",e=>{const n=Fi(e.getProvider("auth").getImmediate());return(r=>new bY(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ti(rT,iT,TY(t)),Ti(rT,iT,"esm2017")}/**
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
 */const CY=5*60,xY=CP("authIdTokenMaxAge")||CY;let oT=null;const kY=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xY)return;const i=n==null?void 0:n.token;oT!==i&&(oT=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function AY(t=RP()){const e=R1(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YK(t,{popupRedirectResolver:SY,persistence:[NQ,EQ,iR]}),r=CP("authTokenSyncURL");if(r){const o=kY(r);mQ(n,o,()=>o(n.currentUser)),pQ(n,s=>o(s))}const i=TP("auth");return i&&JK(n,`http://${i}`),n}function PY(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BK({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=ur("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",PY().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IY("Browser");var RY=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,U1=U1||{},Q=RY||self;function gp(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ec(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function OY(t){return Object.prototype.hasOwnProperty.call(t,lg)&&t[lg]||(t[lg]=++NY)}var lg="closure_uid_"+(1e9*Math.random()>>>0),NY=0;function DY(t,e,n){return t.call.apply(t.bind,arguments)}function $Y(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Nt=DY:Nt=$Y,Nt.apply(null,arguments)}function Gc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[i].apply(r,s)}}function Ui(){this.s=this.s,this.o=this.o}var MY=0;Ui.prototype.s=!1;Ui.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),MY!=0)&&OY(this)};Ui.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dR=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function z1(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function sT(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(gp(r)){const i=t.length||0,o=r.length||0;t.length=i+o;for(let s=0;s<o;s++)t[i+s]=r[s]}else t.push(r)}}function Dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var LY=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Q.addEventListener("test",n,e),Q.removeEventListener("test",n,e)}catch{}return t}();function gu(t){return/^[\s\xa0]*$/.test(t)}function vp(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function tr(t){return vp().indexOf(t)!=-1}function B1(t){return B1[" "](t),t}B1[" "]=function(){};function jY(t,e){var n=PX;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var VY=tr("Opera"),Ys=tr("Trident")||tr("MSIE"),hR=tr("Edge"),cy=hR||Ys,pR=tr("Gecko")&&!(vp().toLowerCase().indexOf("webkit")!=-1&&!tr("Edge"))&&!(tr("Trident")||tr("MSIE"))&&!tr("Edge"),FY=vp().toLowerCase().indexOf("webkit")!=-1&&!tr("Edge");function mR(){var t=Q.document;return t?t.documentMode:void 0}var fy;e:{var ug="",cg=function(){var t=vp();if(pR)return/rv:([^\);]+)(\)|;)/.exec(t);if(hR)return/Edge\/([\d\.]+)/.exec(t);if(Ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(FY)return/WebKit\/(\S+)/.exec(t);if(VY)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(cg&&(ug=cg?cg[1]:""),Ys){var fg=mR();if(fg!=null&&fg>parseFloat(ug)){fy=String(fg);break e}}fy=ug}var dy;if(Q.document&&Ys){var aT=mR();dy=aT||parseInt(fy,10)||void 0}else dy=void 0;var UY=dy;function vu(t,e){if(Dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pR){e:{try{B1(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zY[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vu.$.h.call(this)}}dt(vu,Dt);var zY={2:"touch",3:"pen",4:"mouse"};vu.prototype.h=function(){vu.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var tc="closure_listenable_"+(1e6*Math.random()|0),BY=0;function WY(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++BY,this.fa=this.ia=!1}function yp(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function W1(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function HY(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function gR(t){const e={};for(const n in t)e[n]=t[n];return e}const lT="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vR(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<lT.length;o++)n=lT[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _p(t){this.src=t,this.g={},this.h=0}_p.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=py(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new WY(e,this.src,o,!!r,i),e.ia=n,t.push(e)),e};function hy(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=dR(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(yp(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function py(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}var H1="closure_lm_"+(1e6*Math.random()|0),dg={};function yR(t,e,n,r,i){if(r&&r.once)return wR(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)yR(t,e[o],n,r,i);return null}return n=K1(n),t&&t[tc]?t.O(e,n,ec(r)?!!r.capture:!!r,i):_R(t,e,n,!1,r,i)}function _R(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=ec(i)?!!i.capture:!!i,a=G1(t);if(a||(t[H1]=a=new _p(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=qY(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)LY||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(SR(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qY(){function t(n){return e.call(t.src,t.listener,n)}const e=GY;return t}function wR(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)wR(t,e[o],n,r,i);return null}return n=K1(n),t&&t[tc]?t.P(e,n,ec(r)?!!r.capture:!!r,i):_R(t,e,n,!0,r,i)}function ER(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)ER(t,e[o],n,r,i);else r=ec(r)?!!r.capture:!!r,n=K1(n),t&&t[tc]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=py(o,n,r,i),-1<n&&(yp(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=G1(t))&&(e=t.g[e.toString()],t=-1,e&&(t=py(e,n,r,i)),(n=-1<t?e[t]:null)&&q1(n))}function q1(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[tc])hy(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(SR(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=G1(e))?(hy(n,t),n.h==0&&(n.src=null,e[H1]=null)):yp(t)}}}function SR(t){return t in dg?dg[t]:dg[t]="on"+t}function GY(t,e){if(t.fa)t=!0;else{e=new vu(e,this);var n=t.listener,r=t.la||t.src;t.ia&&q1(t),t=n.call(r,e)}return t}function G1(t){return t=t[H1],t instanceof _p?t:null}var hg="__closure_events_fn_"+(1e9*Math.random()>>>0);function K1(t){return typeof t=="function"?t:(t[hg]||(t[hg]=function(e){return t.handleEvent(e)}),t[hg])}function ct(){Ui.call(this),this.i=new _p(this),this.S=this,this.J=null}dt(ct,Ui);ct.prototype[tc]=!0;ct.prototype.removeEventListener=function(t,e,n,r){ER(this,t,e,n,r)};function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Dt(e,t);else if(e instanceof Dt)e.target=e.target||t;else{var i=e;e=new Dt(r,t),vR(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=Kc(s,r,!0,e)&&i}if(s=e.g=t,i=Kc(s,r,!0,e)&&i,i=Kc(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=Kc(s,r,!1,e)&&i}ct.prototype.N=function(){if(ct.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)yp(n[r]);delete t.g[e],t.h--}}this.J=null};ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ct.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Kc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&hy(t.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Q1=Q.JSON.stringify;class KY{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function QY(){var t=Y1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class YY{constructor(){this.h=this.g=null}add(e,n){const r=bR.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bR=new KY(()=>new XY,t=>t.reset());class XY{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function JY(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ZY(t){Q.setTimeout(()=>{throw t},0)}let yu,_u=!1,Y1=new YY,TR=()=>{const t=Q.Promise.resolve(void 0);yu=()=>{t.then(eX)}};var eX=()=>{for(var t;t=QY();){try{t.h.call(t.g)}catch(n){ZY(n)}var e=bR;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_u=!1};function wp(t,e){ct.call(this),this.h=t||1,this.g=e||Q,this.j=Nt(this.qb,this),this.l=Date.now()}dt(wp,ct);D=wp.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(X1(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function X1(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){wp.$.N.call(this),X1(this),delete this.g};function J1(t,e,n){if(typeof t=="function")n&&(t=Nt(t,n));else if(t&&typeof t.handleEvent=="function")t=Nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function IR(t){t.g=J1(()=>{t.g=null,t.i&&(t.i=!1,IR(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class tX extends Ui{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:IR(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wu(t){Ui.call(this),this.h=t,this.g={}}dt(wu,Ui);var uT=[];function CR(t,e,n,r){Array.isArray(n)||(n&&(uT[0]=n.toString()),n=uT);for(var i=0;i<n.length;i++){var o=yR(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function xR(t){W1(t.g,function(e,n){this.g.hasOwnProperty(n)&&q1(e)},t),t.g={}}wu.prototype.N=function(){wu.$.N.call(this),xR(this)};wu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ep(){this.g=!0}Ep.prototype.Ea=function(){this.g=!1};function nX(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function rX(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+s})}function ps(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+oX(t,n)+(r?" "+r:"")})}function iX(t,e){t.info(function(){return"TIMEOUT: "+e})}Ep.prototype.info=function(){};function oX(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Q1(n)}catch{return e}}var jo={},cT=null;function Sp(){return cT=cT||new ct}jo.Ta="serverreachability";function kR(t){Dt.call(this,jo.Ta,t)}dt(kR,Dt);function Eu(t){const e=Sp();Et(e,new kR(e))}jo.STAT_EVENT="statevent";function AR(t,e){Dt.call(this,jo.STAT_EVENT,t),this.stat=e}dt(AR,Dt);function Ft(t){const e=Sp();Et(e,new AR(e,t))}jo.Ua="timingevent";function PR(t,e){Dt.call(this,jo.Ua,t),this.size=e}dt(PR,Dt);function nc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var bp={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},RR={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Z1(){}Z1.prototype.h=null;function fT(t){return t.h||(t.h=t.i())}function OR(){}var rc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function e_(){Dt.call(this,"d")}dt(e_,Dt);function t_(){Dt.call(this,"c")}dt(t_,Dt);var my;function Tp(){}dt(Tp,Z1);Tp.prototype.g=function(){return new XMLHttpRequest};Tp.prototype.i=function(){return{}};my=new Tp;function ic(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new wu(this),this.P=sX,t=cy?125:void 0,this.V=new wp(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new NR}function NR(){this.i=null,this.g="",this.h=!1}var sX=45e3,DR={},gy={};D=ic.prototype;D.setTimeout=function(t){this.P=t};function vy(t,e,n){t.L=1,t.A=Cp(Dr(e)),t.u=n,t.S=!0,$R(t,null)}function $R(t,e){t.G=Date.now(),oc(t),t.B=Dr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),BR(n.i,"t",r),t.o=0,n=t.l.J,t.h=new NR,t.g=c2(t.l,n?e:null,!t.u),0<t.O&&(t.M=new tX(Nt(t.Pa,t,t.g),t.O)),CR(t.U,t.g,"readystatechange",t.nb),e=t.I?gR(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Eu(),nX(t.j,t.v,t.B,t.m,t.W,t.u)}D.nb=function(t){t=t.target;const e=this.M;e&&nr(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const c=nr(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||cy||this.g&&(this.h.h||this.g.ja()||mT(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?Eu(3):Eu(2)),Ip(this);var n=this.g.da();this.ca=n;t:if(MR(this)){var r=mT(this.g);t="";var i=r.length,o=nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){io(this),kl(this);var s="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.length=0,this.h.g+=t,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,rX(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gu(a)){var u=a;break t}}u=null}if(n=u)ps(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yy(this,n);else{this.i=!1,this.s=3,Ft(12),io(this),kl(this);break e}}this.S?(LR(this,c,s),cy&&this.i&&c==3&&(CR(this.U,this.V,"tick",this.mb),this.V.start())):(ps(this.j,this.m,s,null),yy(this,s)),c==4&&io(this),this.i&&!this.J&&(c==4?s2(this.l,this):(this.i=!1,oc(this)))}else xX(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),io(this),kl(this)}}}catch{}finally{}};function MR(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function LR(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=aX(t,n),i==gy){e==4&&(t.s=4,Ft(14),r=!1),ps(t.j,t.m,null,"[Incomplete Response]");break}else if(i==DR){t.s=4,Ft(15),ps(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ps(t.j,t.m,i,null),yy(t,i);MR(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ft(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),a_(e),e.M=!0,Ft(11))):(ps(t.j,t.m,n,"[Invalid Chunked Response]"),io(t),kl(t))}D.mb=function(){if(this.g){var t=nr(this.g),e=this.g.ja();this.o<e.length&&(Ip(this),LR(this,t,e),this.i&&t!=4&&oc(this))}};function aX(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?gy:(n=Number(e.substring(n,r)),isNaN(n)?DR:(r+=1,r+n>e.length?gy:(e=e.slice(r,r+n),t.o=r+n,e)))}D.cancel=function(){this.J=!0,io(this)};function oc(t){t.Y=Date.now()+t.P,jR(t,t.P)}function jR(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=nc(Nt(t.lb,t),e)}function Ip(t){t.C&&(Q.clearTimeout(t.C),t.C=null)}D.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(iX(this.j,this.B),this.L!=2&&(Eu(),Ft(17)),io(this),this.s=2,kl(this)):jR(this,this.Y-t)};function kl(t){t.l.H==0||t.J||s2(t.l,t)}function io(t){Ip(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,X1(t.V),xR(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function yy(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||_y(n.i,t))){if(!t.K&&_y(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Hd(n),Pp(n);else break e;s_(n),Ft(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=nc(Nt(n.ib,n),6e3));if(1>=qR(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else oo(n,11)}else if((t.K||n.g==t)&&Hd(n),!gu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const g=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var o=r.i;o.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(n_(o,o.h),o.h=null))}if(r.F){const m=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,Te(r.I,r.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=t;if(r.wa=u2(r,r.J?r.pa:null,r.Y),s.K){GR(r.i,s);var a=s,l=r.L;l&&a.setTimeout(l),a.C&&(Ip(a),oc(a)),r.g=s}else i2(r);0<n.j.length&&Rp(n)}else u[0]!="stop"&&u[0]!="close"||oo(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?oo(n,7):o_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Eu(4)}catch{}}function lX(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(gp(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function uX(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(gp(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function VR(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(gp(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=uX(t),r=lX(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}var FR=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cX(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function vo(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof vo){this.h=t.h,Bd(this,t.j),this.s=t.s,this.g=t.g,Wd(this,t.m),this.l=t.l;var e=t.i,n=new Su;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),dT(this,n),this.o=t.o}else t&&(e=String(t).match(FR))?(this.h=!1,Bd(this,e[1]||"",!0),this.s=al(e[2]||""),this.g=al(e[3]||"",!0),Wd(this,e[4]),this.l=al(e[5]||"",!0),dT(this,e[6]||"",!0),this.o=al(e[7]||"")):(this.h=!1,this.i=new Su(null,this.h))}vo.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ll(e,hT,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ll(e,hT,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ll(n,n.charAt(0)=="/"?hX:dX,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ll(n,mX)),t.join("")};function Dr(t){return new vo(t)}function Bd(t,e,n){t.j=n?al(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dT(t,e,n){e instanceof Su?(t.i=e,gX(t.i,t.h)):(n||(e=ll(e,pX)),t.i=new Su(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function Cp(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function al(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ll(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,fX),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fX(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hT=/[#\/\?@]/g,dX=/[#\?:]/g,hX=/[#\?]/g,pX=/[#\?@]/g,mX=/#/g;function Su(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zi(t){t.g||(t.g=new Map,t.h=0,t.i&&cX(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Su.prototype;D.add=function(t,e){zi(this),this.i=null,t=ba(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function UR(t,e){zi(t),e=ba(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zR(t,e){return zi(t),e=ba(t,e),t.g.has(e)}D.forEach=function(t,e){zi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.ta=function(){zi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let o=0;o<i.length;o++)n.push(e[r])}return n};D.Z=function(t){zi(this);let e=[];if(typeof t=="string")zR(this,t)&&(e=e.concat(this.g.get(ba(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return zi(this),this.i=null,t=ba(this,t),zR(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function BR(t,e,n){UR(t,e),0<n.length&&(t.i=null,t.g.set(ba(t,e),z1(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function ba(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gX(t,e){e&&!t.j&&(zi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(UR(this,r),BR(this,i,n))},t)),t.j=e}var vX=class{constructor(t,e){this.g=t,this.map=e}};function WR(t){this.l=t||yX,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yX=10;function HR(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qR(t){return t.h?1:t.g?t.g.size:0}function _y(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function n_(t,e){t.g?t.g.add(e):t.h=e}function GR(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}WR.prototype.cancel=function(){if(this.i=KR(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function KR(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return z1(t.i)}var _X=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function wX(){this.g=new _X}function EX(t,e,n){const r=n||"";try{VR(t,function(i,o){let s=i;ec(i)&&(s=Q1(i)),e.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function SX(t,e){const n=new Ep;if(Q.Image){const r=new Image;r.onload=Gc(Qc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Gc(Qc,n,r,"TestLoadImage: error",!1,e),r.onabort=Gc(Qc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gc(Qc,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Qc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function xp(t){this.l=t.ec||null,this.j=t.ob||!1}dt(xp,Z1);xp.prototype.g=function(){return new kp(this.l,this.j)};xp.prototype.i=function(t){return function(){return t}}({});function kp(t,e){ct.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=r_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(kp,ct);var r_=0;D=kp.prototype;D.open=function(t,e){if(this.readyState!=r_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bu(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sc(this)),this.readyState=r_};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bu(this)),this.g&&(this.readyState=3,bu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;QR(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function QR(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?sc(this):bu(this),this.readyState==3&&QR(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,sc(this))};D.Ya=function(t){this.g&&(this.response=t,sc(this))};D.ka=function(){this.g&&sc(this)};function sc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bu(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(kp.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bX=Q.JSON.parse;function Fe(t){ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=YR,this.L=this.M=!1}dt(Fe,ct);var YR="",TX=/^https?$/i,IX=["POST","PUT"];D=Fe.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():my.g(),this.C=this.u?fT(this.u):fT(my),this.g.onreadystatechange=Nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){pT(this,o);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=dR(IX,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ZR(this),0<this.B&&((this.L=CX(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Nt(this.ua,this)):this.A=J1(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){pT(this,o)}};function CX(t){return Ys&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof U1<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))};function pT(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,XR(t),Ap(t)}function XR(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Ap(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ap(this,!0)),Fe.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?JR(this):this.kb())};D.kb=function(){JR(this)};function JR(t){if(t.h&&typeof U1<"u"&&(!t.C[1]||nr(t)!=4||t.da()!=2)){if(t.v&&nr(t)==4)J1(t.La,0,t);else if(Et(t,"readystatechange"),nr(t)==4){t.h=!1;try{const s=t.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=s===0){var i=String(t.I).match(FR)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),r=!TX.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<nr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",XR(t)}}finally{Ap(t)}}}}function Ap(t,e){if(t.g){ZR(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=r}catch{}}}function ZR(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function nr(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<nr(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bX(e)}};function mT(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case YR:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function xX(t){const e={};t=(t.g&&2<=nr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(gu(t[r]))continue;var n=JY(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}HY(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function e2(t){let e="";return W1(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function i_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=e2(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Qa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function t2(t){this.Ga=0,this.j=[],this.l=new Ep,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Qa("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Qa("baseRetryDelayMs",5e3,t),this.hb=Qa("retryDelaySeedMs",1e4,t),this.eb=Qa("forwardChannelMaxRetries",2,t),this.xa=Qa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new WR(t&&t.concurrentRequestLimit),this.Ja=new wX,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=t2.prototype;D.ra=8;D.H=1;function o_(t){if(n2(t),t.H==3){var e=t.W++,n=Dr(t.I);if(Te(n,"SID",t.K),Te(n,"RID",e),Te(n,"TYPE","terminate"),ac(t,n),e=new ic(t,t.l,e),e.L=2,e.A=Cp(Dr(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.A,n=!0),n||(e.g=c2(e.l,null),e.g.ha(e.A)),e.G=Date.now(),oc(e)}l2(t)}function Pp(t){t.g&&(a_(t),t.g.cancel(),t.g=null)}function n2(t){Pp(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Hd(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Rp(t){if(!HR(t.i)&&!t.m){t.m=!0;var e=t.Na;yu||TR(),_u||(yu(),_u=!0),Y1.add(e,t),t.C=0}}function kX(t,e){return qR(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=nc(Nt(t.Na,t,e),a2(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ic(this,this.l,t);let o=this.s;if(this.U&&(o?(o=gR(o),vR(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=r2(this,i,e),n=Dr(this.I),Te(n,"RID",t),Te(n,"CVER",22),this.F&&Te(n,"X-HTTP-Session-Id",this.F),ac(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(e2(o)))+"&"+e:this.o&&i_(n,this.o,o)),n_(this.i,i),this.bb&&Te(n,"TYPE","init"),this.P?(Te(n,"$req",e),Te(n,"SID","null"),i.aa=!0,vy(i,n,null)):vy(i,n,e),this.H=2}}else this.H==3&&(t?gT(this,t):this.j.length==0||HR(this.i)||gT(this))};function gT(t,e){var n;e?n=e.m:n=t.W++;const r=Dr(t.I);Te(r,"SID",t.K),Te(r,"RID",n),Te(r,"AID",t.V),ac(t,r),t.o&&t.s&&i_(r,t.o,t.s),n=new ic(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=r2(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),n_(t.i,n),vy(n,r,e)}function ac(t,e){t.na&&W1(t.na,function(n,r){Te(e,r,n)}),t.h&&VR({},function(n,r){Te(e,r,n)})}function r2(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Nt(t.h.Va,t.h,t):null;e:{var i=t.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=o,0>u)o=Math.max(0,i[l].g-100),a=!1;else try{EX(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function i2(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;yu||TR(),_u||(yu(),_u=!0),Y1.add(e,t),t.A=0}}function s_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=nc(Nt(t.Ma,t),a2(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,o2(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=nc(Nt(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ft(10),Pp(this),o2(this))};function a_(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function o2(t){t.g=new ic(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Dr(t.wa);Te(e,"RID","rpc"),Te(e,"SID",t.K),Te(e,"AID",t.V),Te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Te(e,"TO",t.qa),Te(e,"TYPE","xmlhttp"),ac(t,e),t.o&&t.s&&i_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Cp(Dr(e)),n.u=null,n.S=!0,$R(n,t)}D.ib=function(){this.v!=null&&(this.v=null,Pp(this),s_(this),Ft(19))};function Hd(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function s2(t,e){var n=null;if(t.g==e){Hd(t),a_(t),t.g=null;var r=2}else if(_y(t.i,e))n=e.F,GR(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Sp(),Et(r,new PR(r,n)),Rp(t)}else i2(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&kX(t,e)||r==2&&s_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:oo(t,5);break;case 4:oo(t,10);break;case 3:oo(t,6);break;default:oo(t,2)}}}function a2(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function oo(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Nt(t.pb,t);n||(n=new vo("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Bd(n,"https"),Cp(n)),SX(n.toString(),r)}else Ft(2);t.H=0,t.h&&t.h.za(e),l2(t),n2(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ft(2)):(this.l.info("Failed to ping google.com"),Ft(1))};function l2(t){if(t.H=0,t.ma=[],t.h){const e=KR(t.i);(e.length!=0||t.j.length!=0)&&(sT(t.ma,e),sT(t.ma,t.j),t.i.i.length=0,z1(t.j),t.j.length=0),t.h.ya()}}function u2(t,e,n){var r=n instanceof vo?Dr(n):new vo(n);if(r.g!="")e&&(r.g=e+"."+r.g),Wd(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new vo(null);r&&Bd(o,r),e&&(o.g=e),i&&Wd(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&Te(r,n,e),Te(r,"VER",t.ra),ac(t,r),r}function c2(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Fe(new xp({ob:n})):new Fe(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function f2(){}D=f2.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function qd(){if(Ys&&!(10<=Number(UY)))throw Error("Environmental error: no available transport.")}qd.prototype.g=function(t,e){return new un(t,e)};function un(t,e){ct.call(this),this.g=new t2(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!gu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!gu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ta(this)}dt(un,ct);un.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ft(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=u2(t,null,t.Y),Rp(t)};un.prototype.close=function(){o_(this.g)};un.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Q1(t),t=n);e.j.push(new vX(e.fb++,t)),e.H==3&&Rp(e)};un.prototype.N=function(){this.g.h=null,delete this.j,o_(this.g),delete this.g,un.$.N.call(this)};function d2(t){e_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(d2,e_);function h2(){t_.call(this),this.status=1}dt(h2,t_);function Ta(t){this.g=t}dt(Ta,f2);Ta.prototype.Ba=function(){Et(this.g,"a")};Ta.prototype.Aa=function(t){Et(this.g,new d2(t))};Ta.prototype.za=function(t){Et(this.g,new h2)};Ta.prototype.ya=function(){Et(this.g,"b")};function AX(){this.blockSize=-1}function Un(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}dt(Un,AX);Un.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function pg(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}Un.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(i==0)for(;o<=n;)pg(this,t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){pg(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){pg(this,r),i=0;break}}this.h=i,this.i+=e};Un.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function pe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=t[i]|0;r&&o==e||(n[i]=o,r=!1)}this.g=n}var PX={};function l_(t){return-128<=t&&128>t?jY(t,function(e){return new pe([e|0],0>e?-1:0)}):new pe([t|0],0>t?-1:0)}function rr(t){if(isNaN(t)||!isFinite(t))return As;if(0>t)return yt(rr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=wy;return new pe(e,0)}function p2(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return yt(p2(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rr(Math.pow(e,8)),r=As,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=rr(Math.pow(e,o)),r=r.R(o).add(rr(s))):(r=r.R(n),r=r.add(rr(s)))}return r}var wy=4294967296,As=l_(0),Ey=l_(1),vT=l_(16777216);D=pe.prototype;D.ea=function(){if(yn(this))return-yt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:wy+r)*e,e*=wy}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ir(this))return"0";if(yn(this))return"-"+yt(this).toString(t);for(var e=rr(Math.pow(t,6)),n=this,r="";;){var i=Kd(n,e).g;n=Gd(n,i.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ir(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ir(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function yn(t){return t.h==-1}D.X=function(t){return t=Gd(this,t),yn(t)?-1:Ir(t)?0:1};function yt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new pe(n,~t.h).add(Ey)}D.abs=function(){return yn(this)?yt(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(this.D(i)&65535)+(t.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function Gd(t,e){return t.add(yt(e))}D.R=function(t){if(Ir(this)||Ir(t))return As;if(yn(this))return yn(t)?yt(this).R(yt(t)):yt(yt(this).R(t));if(yn(t))return yt(this.R(yt(t)));if(0>this.X(vT)&&0>t.X(vT))return rr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=s*l,Yc(n,2*r+2*i),n[2*r+2*i+1]+=o*l,Yc(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Yc(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Yc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new pe(n,0)};function Yc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ya(t,e){this.g=t,this.h=e}function Kd(t,e){if(Ir(e))throw Error("division by zero");if(Ir(t))return new Ya(As,As);if(yn(t))return e=Kd(yt(t),e),new Ya(yt(e.g),yt(e.h));if(yn(e))return e=Kd(t,yt(e)),new Ya(yt(e.g),e.h);if(30<t.g.length){if(yn(t)||yn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ey,r=e;0>=r.X(t);)n=yT(n),r=yT(r);var i=Yo(n,1),o=Yo(r,1);for(r=Yo(r,2),n=Yo(n,2);!Ir(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=Yo(r,1),n=Yo(n,1)}return e=Gd(t,i.R(e)),new Ya(i,e)}for(i=As;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=rr(n),s=o.R(e);yn(s)||0<s.X(t);)n-=r,o=rr(n),s=o.R(e);Ir(o)&&(o=Ey),i=i.add(o),t=Gd(t,s)}return new Ya(i,t)}D.gb=function(t){return Kd(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new pe(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new pe(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new pe(n,this.h^t.h)};function yT(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new pe(n,t.h)}function Yo(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new pe(i,t.h)}qd.prototype.createWebChannel=qd.prototype.g;un.prototype.send=un.prototype.u;un.prototype.open=un.prototype.m;un.prototype.close=un.prototype.close;bp.NO_ERROR=0;bp.TIMEOUT=8;bp.HTTP_ERROR=6;RR.COMPLETE="complete";OR.EventType=rc;rc.OPEN="a";rc.CLOSE="b";rc.ERROR="c";rc.MESSAGE="d";ct.prototype.listen=ct.prototype.O;Fe.prototype.listenOnce=Fe.prototype.P;Fe.prototype.getLastError=Fe.prototype.Sa;Fe.prototype.getLastErrorCode=Fe.prototype.Ia;Fe.prototype.getStatus=Fe.prototype.da;Fe.prototype.getResponseJson=Fe.prototype.Wa;Fe.prototype.getResponseText=Fe.prototype.ja;Fe.prototype.send=Fe.prototype.ha;Fe.prototype.setWithCredentials=Fe.prototype.Oa;Un.prototype.digest=Un.prototype.l;Un.prototype.reset=Un.prototype.reset;Un.prototype.update=Un.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=rr;pe.fromString=p2;var RX=function(){return new qd},OX=function(){return Sp()},mg=bp,NX=RR,DX=jo,_T={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Xc=OR,$X=Fe,MX=Un,Ps=pe;const wT="@firebase/firestore";/**
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
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
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
 */let Ia="10.8.0";/**
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
 */const ko=new A1("@firebase/firestore");function Xa(){return ko.logLevel}function N(t,...e){if(ko.logLevel<=ie.DEBUG){const n=e.map(u_);ko.debug(`Firestore (${Ia}): ${t}`,...n)}}function pr(t,...e){if(ko.logLevel<=ie.ERROR){const n=e.map(u_);ko.error(`Firestore (${Ia}): ${t}`,...n)}}function Xs(t,...e){if(ko.logLevel<=ie.WARN){const n=e.map(u_);ko.warn(`Firestore (${Ia}): ${t}`,...n)}}function u_(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Ia}) INTERNAL ASSERTION FAILED: `+t;throw pr(e),new Error(e)}function ye(t,e){t||K()}function J(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends zr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class m2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LX{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class jX{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VX{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new fr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new fr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new m2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new Pt(e)}}class FX{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class UX{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new FX(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zX{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BX{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new zX(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function WX(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class g2{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=WX(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Js(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new rt(0,0))}static max(){return new Y(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Tu{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Tu{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const HX=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Tu{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return HX.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new L(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new L(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Ie.fromString(e))}static fromName(e){return new W(Ie.fromString(e).popFirst(5))}static empty(){return new W(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Ie(e.slice()))}}function qX(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new Ai(i,W.empty(),e)}function GX(t){return new Ai(t.readTime,t.key,-1)}class Ai{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ai(Y.min(),W.empty(),-1)}static max(){return new Ai(Y.max(),W.empty(),-1)}}function KX(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const QX="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YX{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lc(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==QX)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(e[u]).next(c=>{s[u]=c,++a,a===o&&r(s)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}/**
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
 */class c_{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new fr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Al(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=f_(r.target.error);this.V.reject(new Al(e,i))}}static open(e,n,r,i){try{return new c_(n,e.transaction(i,r))}catch(o){throw new Al(n,o)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new JX(n)}}class so{constructor(e,n,r){this.name=e,this.version=n,this.p=r,so.S(Xe())===12.2&&pr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),Yi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!xP())return!1;if(so.C())return!0;const e=Xe(),n=so.S(e),r=0<n&&n<10,i=so.v(e),o=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const s=o.target.result;n(s)},i.onblocked=()=>{r(new Al(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const s=o.target.error;s.name==="VersionError"?r(new L(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):s.name==="InvalidStateError"?r(new L(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+s)):r(new Al(e,s))},i.onupgradeneeded=o=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const s=o.target.result;this.p.N(s,i.transaction,o.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const o=n==="readonly";let s=0;for(;;){++s;try{this.db=await this.O(e);const a=c_.open(this.db,e,o?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),k.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&s<3;if(N("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class XX{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Yi(this.k.delete())}}class Al extends L{constructor(e,n){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function uc(t){return t.name==="IndexedDbTransactionError"}class JX{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Yi(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),Yi(this.store.add(e))}get(e){return Yi(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),Yi(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),Yi(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(r.range);return new k((s,a)=>{o.onerror=l=>{a(l.target.error)},o.onsuccess=l=>{s(l.target.result)}})}{const o=this.cursor(r),s=[];return this.G(o,(a,l)=>{s.push(l)}).next(()=>s)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new k((i,o)=>{r.onerror=s=>{o(s.target.error)},r.onsuccess=s=>{i(s.target.result)}})}H(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(o,s,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new k((r,i)=>{n.onerror=o=>{const s=f_(o.target.error);i(s)},n.onsuccess=o=>{const s=o.target.result;s?e(s.primaryKey,s.value).next(a=>{a?s.continue():r()}):r()}})}G(e,n){const r=[];return new k((i,o)=>{e.onerror=s=>{o(s.target.error)},e.onsuccess=s=>{const a=s.target.result;if(!a)return void i();const l=new XX(a),u=n(a.primaryKey,a.value,l);if(u instanceof k){const c=u.catch(f=>(l.done(),k.reject(f)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>k.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Yi(t){return new k((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=f_(r.target.error);n(i)}})}let ET=!1;function f_(t){const e=so.S(Xe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ET||(ET=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class d_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}d_._e=-1;function Op(t){return t==null}function Qd(t){return t===0&&1/t==-1/0}function ZX(t){return typeof t=="number"&&Number.isInteger(t)&&!Qd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ST(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ca(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function v2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class $e{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jc(this.root,e,this.comparator,!0)}}class Jc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??gt.RED,this.left=i??gt.EMPTY,this.right=o??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new gt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,o){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class St{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bT(this.data.getIterator())}getIteratorFrom(e){return new bT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class bT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Dn([])}unionWith(e){let n=new St(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class y2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new y2("Invalid base64 string: "+o):o}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const eJ=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(t){if(ye(!!t),typeof t=="string"){let e=0;const n=eJ.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ao(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
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
 */function h_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function p_(t){const e=t.mapValue.fields.__previous_value__;return h_(e)?p_(e):e}function Iu(t){const e=Pi(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */class tJ{constructor(e,n,r,i,o,s,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Cu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Cu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Zc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Po(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?h_(t)?4:nJ(t)?9007199254740991:10:K()}function mr(t,e){if(t===e)return!0;const n=Po(t);if(n!==Po(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Iu(t).isEqual(Iu(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Pi(i.timestampValue),a=Pi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Ao(i.bytesValue).isEqual(Ao(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return We(i.geoPointValue.latitude)===We(o.geoPointValue.latitude)&&We(i.geoPointValue.longitude)===We(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return We(i.integerValue)===We(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=We(i.doubleValue),a=We(o.doubleValue);return s===a?Qd(s)===Qd(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Js(t.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(ST(s)!==ST(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!mr(s[l],a[l])))return!1;return!0}(t,e);default:return K()}}function xu(t,e){return(t.values||[]).find(n=>mr(n,e))!==void 0}function Zs(t,e){if(t===e)return 0;const n=Po(t),r=Po(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=We(o.integerValue||o.doubleValue),l=We(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return TT(t.timestampValue,e.timestampValue);case 4:return TT(Iu(t),Iu(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(o,s){const a=Ao(o),l=Ao(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ce(a[u],l[u]);if(c!==0)return c}return ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=ce(We(o.latitude),We(s.latitude));return a!==0?a:ce(We(o.longitude),We(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const a=o.values||[],l=s.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Zs(a[u],l[u]);if(c)return c}return ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===Zc.mapValue&&s===Zc.mapValue)return 0;if(o===Zc.mapValue)return 1;if(s===Zc.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),u=s.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const d=ce(l[f],c[f]);if(d!==0)return d;const h=Zs(a[l[f]],u[c[f]]);if(h!==0)return h}return ce(l.length,c.length)}(t.mapValue,e.mapValue);default:throw K()}}function TT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Pi(t),r=Pi(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function ea(t){return Sy(t)}function Sy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ao(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Sy(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Sy(n.fields[s])}`;return i+"}"}(t.mapValue):K()}function IT(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function by(t){return!!t&&"integerValue"in t}function m_(t){return!!t&&"arrayValue"in t}function CT(t){return!!t&&"nullValue"in t}function xT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hf(t){return!!t&&"mapValue"in t}function Pl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ca(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Pl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nJ(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pl(n)}setAll(e){let n=_t.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Pl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Hf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Hf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ca(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new _n(Pl(this.value))}}function _2(t){const e=[];return Ca(t.fields,(n,r)=>{const i=new _t([n]);if(Hf(r)){const o=_2(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new Dn(e)}/**
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
 */class Ot{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Ot(e,0,Y.min(),Y.min(),Y.min(),_n.empty(),0)}static newFoundDocument(e,n,r,i){return new Ot(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Ot(e,2,n,Y.min(),Y.min(),_n.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,Y.min(),Y.min(),_n.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yd{constructor(e,n){this.position=e,this.inclusive=n}}function kT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=W.comparator(W.fromName(s.referenceValue),n.key):r=Zs(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function AT(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xd{constructor(e,n="asc"){this.field=e,this.dir=n}}function rJ(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class w2{}class Ke extends w2{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oJ(e,n,r):n==="array-contains"?new lJ(e,r):n==="in"?new uJ(e,r):n==="not-in"?new cJ(e,r):n==="array-contains-any"?new fJ(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sJ(e,r):new aJ(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zs(n,this.value)):n!==null&&Po(this.value)===Po(n)&&this.matchesComparison(Zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends w2{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new zn(e,n)}matches(e){return E2(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function E2(t){return t.op==="and"}function S2(t){return iJ(t)&&E2(t)}function iJ(t){for(const e of t.filters)if(e instanceof zn)return!1;return!0}function Ty(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+ea(t.value);if(S2(t))return t.filters.map(e=>Ty(e)).join(",");{const e=t.filters.map(n=>Ty(n)).join(",");return`${t.op}(${e})`}}function b2(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&mr(r.value,i.value)}(t,e):t instanceof zn?function(r,i){return i instanceof zn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&b2(s,i.filters[a]),!0):!1}(t,e):void K()}function T2(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${ea(n.value)}`}(t):t instanceof zn?function(n){return n.op.toString()+" {"+n.getFilters().map(T2).join(" ,")+"}"}(t):"Filter"}class oJ extends Ke{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class sJ extends Ke{constructor(e,n){super(e,"in",n),this.keys=I2("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aJ extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=I2("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function I2(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class lJ extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return m_(n)&&xu(n.arrayValue,this.value)}}class uJ extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xu(this.value.arrayValue,n)}}class cJ extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(xu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xu(this.value.arrayValue,n)}}class fJ extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!m_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xu(this.value.arrayValue,r))}}/**
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
 */class dJ{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ce=null}}function PT(t,e=null,n=[],r=[],i=null,o=null,s=null){return new dJ(t,e,n,r,i,o,s)}function g_(t){const e=J(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ty(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Op(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ea(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ea(r)).join(",")),e.ce=n}return e.ce}function v_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rJ(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!b2(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!AT(t.startAt,e.startAt)&&AT(t.endAt,e.endAt)}function Iy(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class cc{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function hJ(t,e,n,r,i,o,s,a){return new cc(t,e,n,r,i,o,s,a)}function y_(t){return new cc(t)}function RT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function C2(t){return t.collectionGroup!==null}function Rl(t){const e=J(t);if(e.le===null){e.le=[];const n=new Set;for(const o of e.explicitOrderBy)e.le.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new St(_t.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.le.push(new Xd(o,r))}),n.has(_t.keyField().canonicalString())||e.le.push(new Xd(_t.keyField(),r))}return e.le}function dr(t){const e=J(t);return e.he||(e.he=pJ(e,Rl(t))),e.he}function pJ(t,e){if(t.limitType==="F")return PT(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Xd(i.field,o)});const n=t.endAt?new Yd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yd(t.startAt.position,t.startAt.inclusive):null;return PT(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cy(t,e){const n=t.filters.concat([e]);return new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xy(t,e,n){return new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Np(t,e){return v_(dr(t),dr(e))&&t.limitType===e.limitType}function x2(t){return`${g_(dr(t))}|lt:${t.limitType}`}function Jo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>T2(i)).join(", ")}]`),Op(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ea(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ea(i)).join(",")),`Target(${r})`}(dr(t))}; limitType=${t.limitType})`}function Dp(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):W.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Rl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const u=kT(s,a,l);return s.inclusive?u<=0:u<0}(r.startAt,Rl(r),i)||r.endAt&&!function(s,a,l){const u=kT(s,a,l);return s.inclusive?u>=0:u>0}(r.endAt,Rl(r),i))}(t,e)}function mJ(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function k2(t){return(e,n)=>{let r=!1;for(const i of Rl(t)){const o=gJ(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function gJ(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),u=a.data.field(o);return l!==null&&u!==null?Zs(l,u):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class xa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ca(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return v2(this.inner)}size(){return this.innerSize}}/**
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
 */const vJ=new $e(W.comparator);function $r(){return vJ}const A2=new $e(W.comparator);function ul(...t){let e=A2;for(const n of t)e=e.insert(n.key,n);return e}function P2(t){let e=A2;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ao(){return Ol()}function R2(){return Ol()}function Ol(){return new xa(t=>t.toString(),(t,e)=>t.isEqual(e))}const yJ=new $e(W.comparator),_J=new St(W.comparator);function ne(...t){let e=_J;for(const n of t)e=e.add(n);return e}const wJ=new St(ce);function EJ(){return wJ}/**
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
 */function O2(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qd(e)?"-0":e}}function N2(t){return{integerValue:""+t}}function SJ(t,e){return ZX(e)?N2(e):O2(t,e)}/**
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
 */class $p{constructor(){this._=void 0}}function bJ(t,e,n){return t instanceof Jd?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&h_(o)&&(o=p_(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof ku?$2(t,e):t instanceof Au?M2(t,e):function(i,o){const s=D2(i,o),a=OT(s)+OT(i.Ie);return by(s)&&by(i.Ie)?N2(a):O2(i.serializer,a)}(t,e)}function TJ(t,e,n){return t instanceof ku?$2(t,e):t instanceof Au?M2(t,e):n}function D2(t,e){return t instanceof Zd?function(r){return by(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Jd extends $p{}class ku extends $p{constructor(e){super(),this.elements=e}}function $2(t,e){const n=L2(e);for(const r of t.elements)n.some(i=>mr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Au extends $p{constructor(e){super(),this.elements=e}}function M2(t,e){let n=L2(e);for(const r of t.elements)n=n.filter(i=>!mr(i,r));return{arrayValue:{values:n}}}class Zd extends $p{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function OT(t){return We(t.integerValue||t.doubleValue)}function L2(t){return m_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function IJ(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ku&&i instanceof ku||r instanceof Au&&i instanceof Au?Js(r.elements,i.elements,mr):r instanceof Zd&&i instanceof Zd?mr(r.Ie,i.Ie):r instanceof Jd&&i instanceof Jd}(t.transform,e.transform)}class CJ{constructor(e,n){this.version=e,this.transformResults=n}}class xr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xr}static exists(e){return new xr(void 0,e)}static updateTime(e){return new xr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mp{}function j2(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new F2(t.key,xr.none()):new fc(t.key,t.data,xr.none());{const n=t.data,r=_n.empty();let i=new St(_t.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Vo(t.key,r,new Dn(i.toArray()),xr.none())}}function xJ(t,e,n){t instanceof fc?function(i,o,s){const a=i.value.clone(),l=DT(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Vo?function(i,o,s){if(!qf(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=DT(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(V2(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Nl(t,e,n,r){return t instanceof fc?function(o,s,a,l){if(!qf(o.precondition,s))return a;const u=o.value.clone(),c=$T(o.fieldTransforms,l,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vo?function(o,s,a,l){if(!qf(o.precondition,s))return a;const u=$T(o.fieldTransforms,l,s),c=s.data;return c.setAll(V2(o)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(o,s,a){return qf(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function kJ(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=D2(r.transform,i||null);o!=null&&(n===null&&(n=_n.empty()),n.set(r.field,o))}return n||null}function NT(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Js(r,i,(o,s)=>IJ(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fc extends Mp{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vo extends Mp{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function V2(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function DT(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,TJ(s,a,n[i]))}return r}function $T(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,bJ(o,s,e))}return r}class F2 extends Mp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AJ extends Mp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class PJ{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&xJ(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Nl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Nl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=R2();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=j2(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,(n,r)=>NT(n,r))&&Js(this.baseMutations,e.baseMutations,(n,r)=>NT(n,r))}}class __{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=function(){return yJ}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new __(e,n,r,i)}}/**
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
 */class RJ{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class OJ{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,oe;function NJ(t){switch(t){default:return K();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function U2(t){if(t===void 0)return pr("GRPC error has no .code"),x.UNKNOWN;switch(t){case Be.OK:return x.OK;case Be.CANCELLED:return x.CANCELLED;case Be.UNKNOWN:return x.UNKNOWN;case Be.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Be.INTERNAL:return x.INTERNAL;case Be.UNAVAILABLE:return x.UNAVAILABLE;case Be.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Be.NOT_FOUND:return x.NOT_FOUND;case Be.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Be.ABORTED:return x.ABORTED;case Be.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Be.DATA_LOSS:return x.DATA_LOSS;default:return K()}}(oe=Be||(Be={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function DJ(){return new TextEncoder}/**
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
 */const $J=new Ps([4294967295,4294967295],0);function MT(t){const e=DJ().encode(t),n=new MX;return n.update(e),new Uint8Array(n.digest())}function LT(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ps([n,r],0),new Ps([i,o],0)]}class w_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new cl(`Invalid padding: ${n}`);if(r<0)throw new cl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new cl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new cl(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ps.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Ps.fromNumber(r)));return i.compare($J)===1&&(i=new Ps([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=MT(e),[r,i]=LT(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);if(!this.Ae(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new w_(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Te===0)return;const n=MT(e),[r,i]=LT(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);this.Re(s)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class cl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Lp{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,dc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lp(Y.min(),i,new $e(ce),$r(),ne())}}class dc{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new dc(r,n,ne(),ne(),ne())}}/**
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
 */class Gf{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class z2{constructor(e,n){this.targetId=e,this.fe=n}}class B2{constructor(e,n,r=Mt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jT{constructor(){this.ge=0,this.pe=FT(),this.ye=Mt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ne(),n=ne(),r=ne();return this.pe.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new dc(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=FT()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ye(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class MJ{constructor(e){this.Le=e,this.ke=new Map,this.qe=$r(),this.Qe=VT(),this.Ke=new $e(ce)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const o=i.target;if(Iy(o))if(r===0){const s=new W(o.path);this.We(n,s,Ot.newNoDocument(s,Y.min()))}else ye(r===1);else{const s=this.Ze(n);if(s!==r){const a=this.Xe(e),l=a?this.et(a,e,s):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=Ao(r).toUint8Array()}catch(l){if(l instanceof y2)return Xs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new w_(s,i,o)}catch(l){return Xs(l instanceof cl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.nt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.We(n,o,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((o,s)=>{const a=this.Ye(s);if(a){if(o.current&&Iy(a.target)){const l=new W(a.target.path);this.qe.get(l)!==null||this.st(s,l)||this.We(s,l,Ot.newNoDocument(l,e))}o.De&&(n.set(s,o.ve()),o.Fe())}});let r=ne();this.Qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.qe.forEach((o,s)=>s.setReadTime(e));const i=new Lp(e,n,this.Ke,this.qe,r);return this.qe=$r(),this.Qe=VT(),this.Ke=new $e(ce),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new jT,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new St(ce),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new jT),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function VT(){return new $e(W.comparator)}function FT(){return new $e(W.comparator)}const LJ={asc:"ASCENDING",desc:"DESCENDING"},jJ={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VJ={and:"AND",or:"OR"};class FJ{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ky(t,e){return t.useProto3Json||Op(e)?e:{value:e}}function eh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function W2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function UJ(t,e){return eh(t,e.toTimestamp())}function hr(t){return ye(!!t),Y.fromTimestamp(function(n){const r=Pi(n);return new rt(r.seconds,r.nanos)}(t))}function E_(t,e){return Ay(t,e).canonicalString()}function Ay(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function H2(t){const e=Ie.fromString(t);return ye(Y2(e)),e}function Py(t,e){return E_(t.databaseId,e.path)}function gg(t,e){const n=H2(e);if(n.get(1)!==t.databaseId.projectId)throw new L(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(G2(n))}function q2(t,e){return E_(t.databaseId,e)}function zJ(t){const e=H2(t);return e.length===4?Ie.emptyPath():G2(e)}function Ry(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function G2(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function UT(t,e,n){return{name:Py(t,e),fields:n.value.mapValue.fields}}function BJ(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(u,c){return u.useProto3Json?(ye(c===void 0||typeof c=="string"),Mt.fromBase64String(c||"")):(ye(c===void 0||c instanceof Uint8Array),Mt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(u){const c=u.code===void 0?x.UNKNOWN:U2(u.code);return new L(c,u.message||"")}(s);n=new B2(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=gg(t,r.document.name),o=hr(r.document.updateTime),s=r.document.createTime?hr(r.document.createTime):Y.min(),a=new _n({mapValue:{fields:r.document.fields}}),l=Ot.newFoundDocument(i,o,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Gf(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=gg(t,r.document),o=r.readTime?hr(r.readTime):Y.min(),s=Ot.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Gf([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=gg(t,r.document),o=r.removedTargetIds||[];n=new Gf([],o,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new OJ(i,o),a=r.targetId;n=new z2(a,s)}}return n}function WJ(t,e){let n;if(e instanceof fc)n={update:UT(t,e.key,e.value)};else if(e instanceof F2)n={delete:Py(t,e.key)};else if(e instanceof Vo)n={update:UT(t,e.key,e.data),updateMask:ZJ(e.fieldMask)};else{if(!(e instanceof AJ))return K();n={verify:Py(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof Jd)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ku)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Au)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Zd)return{fieldPath:s.field.canonicalString(),increment:a.Ie};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:UJ(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K()}(t,e.precondition)),n}function HJ(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?hr(i.updateTime):hr(o);return s.isEqual(Y.min())&&(s=hr(o)),new CJ(s,i.transformResults||[])}(n,e))):[]}function qJ(t,e){return{documents:[q2(t,e.path)]}}function GJ(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=q2(t,i);const o=function(u){if(u.length!==0)return Q2(zn.create(u,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:Zo(d.field),direction:YJ(d.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=ky(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function KJ(t){let e=zJ(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let o=[];n.where&&(o=function(f){const d=K2(f);return d instanceof zn&&S2(d)?d.getFilters():[d]}(n.where));let s=[];n.orderBy&&(s=function(f){return f.map(d=>function(g){return new Xd(es(g.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,Op(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(f){const d=!!f.before,h=f.values||[];return new Yd(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const d=!f.before,h=f.values||[];return new Yd(h,d)}(n.endAt)),hJ(e,i,s,o,a,"F",l,u)}function QJ(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function K2(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=es(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=es(n.unaryFilter.field);return Ke.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=es(n.unaryFilter.field);return Ke.create(s,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zn.create(n.compositeFilter.filters.map(r=>K2(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function YJ(t){return LJ[t]}function XJ(t){return jJ[t]}function JJ(t){return VJ[t]}function Zo(t){return{fieldPath:t.canonicalString()}}function es(t){return _t.fromServerFormat(t.fieldPath)}function Q2(t){return t instanceof Ke?function(n){if(n.op==="=="){if(xT(n.value))return{unaryFilter:{field:Zo(n.field),op:"IS_NAN"}};if(CT(n.value))return{unaryFilter:{field:Zo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xT(n.value))return{unaryFilter:{field:Zo(n.field),op:"IS_NOT_NAN"}};if(CT(n.value))return{unaryFilter:{field:Zo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zo(n.field),op:XJ(n.op),value:n.value}}}(t):t instanceof zn?function(n){const r=n.getFilters().map(i=>Q2(i));return r.length===1?r[0]:{compositeFilter:{op:JJ(n.op),filters:r}}}(t):K()}function ZJ(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Y2(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ci{constructor(e,n,r,i,o=Y.min(),s=Y.min(),a=Mt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eZ{constructor(e){this.ct=e}}function tZ(t){const e=KJ({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xy(e,e.limit,"L"):e}/**
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
 */class nZ{constructor(){this._n=new rZ}addToCollectionParentIndex(e,n){return this._n.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Ai.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Ai.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class rZ{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new St(Ie.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new St(Ie.comparator)).toArray()}}/**
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
 */class ta{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ta(0)}static Bn(){return new ta(-1)}}/**
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
 */class iZ{constructor(){this.changes=new xa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oZ{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class sZ{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Nl(r.mutation,i,Dn.empty(),rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=ao();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=ul();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=ao();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=$r();const s=Ol(),a=function(){return Ol()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Vo)?o=o.insert(u.key,u):c!==void 0?(s.set(u.key,c.mutation.getFieldMask()),Nl(c.mutation,u,c.mutation.getFieldMask(),rt.now())):s.set(u.key,Dn.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((u,c)=>s.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new oZ(c,(f=s.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ol();let i=new $e((s,a)=>s-a),o=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Dn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=R2();c.forEach(d=>{if(!o.has(d)){const h=j2(n.get(d),r.get(d));h!==null&&f.set(d,h),o=o.add(d)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,f))}return k.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return W.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):C2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):k.resolve(ao());let a=-1,l=o;return s.next(u=>k.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),o.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,l,u,ne())).next(c=>({batchId:a,changes:P2(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=ul();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=ul();return this.indexManager.getCollectionParents(e,o).next(a=>k.forEach(a,l=>{const u=function(f,d){return new cc(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((f,d)=>{s=s.insert(f,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,Ot.newInvalidDocument(c)))});let a=ul();return s.forEach((l,u)=>{const c=o.get(l);c!==void 0&&Nl(c.mutation,u,Dn.empty(),rt.now()),Dp(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class aZ{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return k.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:hr(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:tZ(i.bundledQuery),readTime:hr(i.readTime)}}(n)),k.resolve()}}/**
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
 */class lZ{constructor(){this.overlays=new $e(W.comparator),this.hr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ao();return k.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=ao(),o=n.length+1,s=new W(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new $e((u,c)=>u-c);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=o.get(u.largestBatchId);c===null&&(c=ao(),o=o.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ao(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new RJ(n,r));let o=this.hr.get(n);o===void 0&&(o=ne(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
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
 */class S_{constructor(){this.Pr=new St(st.Ir),this.Tr=new St(st.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new st(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new W(new Ie([])),r=new st(n,e),i=new st(n,e+1),o=[];return this.Tr.forEachInRange([r,i],s=>{this.Ar(s),o.push(s.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new W(new Ie([])),r=new st(n,e),i=new st(n,e+1);let o=ne();return this.Tr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new st(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return W.comparator(e.key,n.key)||ce(e.pr,n.pr)}static Er(e,n){return ce(e.pr,n.pr)||W.comparator(e.key,n.key)}}/**
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
 */class uZ{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new St(st.Ir)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new PJ(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.wr=this.wr.add(new st(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(s)}lookupMutationBatch(e,n){return k.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],s=>{const a=this.Sr(s.pr);o.push(a)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new St(ce);return n.forEach(i=>{const o=new st(i,0),s=new st(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,s],a=>{r=r.add(a.pr)})}),k.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;W.isDocumentKey(o)||(o=o.child(""));const s=new st(new W(o),0);let a=new St(ce);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},s),k.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return k.forEach(n.mutations,i=>{const o=new st(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new st(n,0),i=this.wr.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class cZ{constructor(e){this.vr=e,this.docs=function(){return new $e(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let r=$r();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ot.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=$r();const s=n.path,a=new W(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||KX(GX(c),r)<=0||(i.has(c.key)||Dp(n,c))&&(o=o.insert(c.key,c.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(e,n,r,i){K()}Fr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fZ(this)}getSize(e){return k.resolve(this.size)}}class fZ extends iZ{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class dZ{constructor(e){this.persistence=e,this.Mr=new xa(n=>g_(n),v_),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new S_,this.targetCount=0,this.Br=ta.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),k.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new ta(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.qn(n),k.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(o).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),k.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Nr.containsKey(n))}}/**
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
 */class hZ{constructor(e,n){this.Lr={},this.overlays={},this.kr=new d_(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new dZ(this),this.indexManager=new nZ,this.remoteDocumentCache=function(i){return new cZ(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new eZ(n),this.$r=new aZ(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lZ,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new uZ(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new pZ(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return k.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class pZ extends YX{constructor(e){super(),this.currentSequenceNumber=e}}class b_{constructor(e){this.persistence=e,this.zr=new S_,this.jr=null}static Hr(e){return new b_(e)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),k.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Jr,r=>{const i=W.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,Y.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return k.or([()=>k.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class T_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ne(),i=ne();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new T_(e,n.fromCache,r,i)}}/**
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
 */class mZ{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gZ{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Yq()?8:so.v(Xe())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new mZ;return this.Ji(e,n,s).next(a=>{if(o.result=a,this.Ui)return this.Yi(e,n,s,a.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Xa()<=ie.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Jo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),k.resolve()):(Xa()<=ie.DEBUG&&N("QueryEngine","Query:",Jo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Xa()<=ie.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Jo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dr(n))):k.resolve())}ji(e,n){if(RT(n))return k.resolve(null);let r=dr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xy(n,null,"F"),r=dr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=ne(...o);return this.zi.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,s,l.readTime)?this.ji(e,xy(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return RT(n)||i.isEqual(Y.min())?k.resolve(null):this.zi.getDocuments(e,r).next(o=>{const s=this.Zi(n,o);return this.Xi(n,s,r,i)?k.resolve(null):(Xa()<=ie.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jo(n)),this.es(e,s,n,qX(i,-1)).next(a=>a))})}Zi(e,n){let r=new St(k2(e));return n.forEach((i,o)=>{Dp(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return Xa()<=ie.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Jo(n)),this.zi.getDocumentsMatchingQuery(e,n,Ai.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class vZ{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new $e(ce),this.rs=new xa(o=>g_(o),v_),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sZ(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function yZ(t,e,n,r){return new vZ(t,e,n,r)}async function X2(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=ne();for(const u of i){s.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of o){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:s,addedBatchIds:a}))})})}function _Z(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,d=f.keys();let h=k.resolve();return d.forEach(g=>{h=h.next(()=>c.getEntry(l,g)).next(m=>{const _=u.docVersions.get(g);ye(_!==null),m.version.compareTo(_)<0&&(f.applyToRemoteDocument(m,u),m.isValidDocument()&&(m.setReadTime(u.commitVersion),c.addEntry(m)))})}),h.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function J2(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function wZ(t,e){const n=J(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(n.Qr.removeMatchingKeys(o,c.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(o,c.addedDocuments,f)));let h=d.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(f)!==null?h=h.withResumeToken(Mt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(c.resumeToken,r)),i=i.insert(f,h),function(m,_,v){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,h,c)&&a.push(n.Qr.updateTargetData(o,h))});let l=$r(),u=ne();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,c))}),a.push(EZ(o,s,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(Y.min())){const c=n.Qr.getLastRemoteSnapshotVersion(o).next(f=>n.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.ns=i,o))}function EZ(t,e,n){let r=ne(),i=ne();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=$r();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:s,ls:i}})}function SZ(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bZ(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(o=>o?(i=o,k.resolve(i)):n.Qr.allocateTargetId(r).next(s=>(i=new ci(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Oy(t,e,n){const r=J(t),i=r.ns.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!uc(s))throw s;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function zT(t,e,n){const r=J(t);let i=Y.min(),o=ne();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,u,c){const f=J(l),d=f.rs.get(c);return d!==void 0?k.resolve(f.ns.get(d)):f.Qr.getTargetData(u,c)}(r,s,dr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.ts.getDocumentsMatchingQuery(s,e,n?i:Y.min(),n?o:ne())).next(a=>(TZ(r,mJ(e),a),{documents:a,hs:o})))}function TZ(t,e,n){let r=t.ss.get(e)||Y.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.ss.set(e,r)}class BT{constructor(){this.activeTargetIds=EJ()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IZ{constructor(){this.no=new BT,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new BT,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CZ{io(e){}shutdown(){}}/**
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
 */class WT{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ef=null;function vg(){return ef===null?ef=function(){return 268435456+Math.round(2147483648*Math.random())}():ef++,"0x"+ef.toString(16)}/**
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
 */const xZ={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class kZ{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const kt="WebChannelConnection";class AZ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${o}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get wo(){return!1}So(n,r,i,o,s){const a=vg(),l=this.bo(n,r.toUriEncodedString());N("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,o,s),this.Co(n,l,u,i).then(c=>(N("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Xs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,o,s,a){return this.So(n,r,i,o,s)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ia}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}bo(n,r){const i=xZ[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const o=vg();return new Promise((s,a)=>{const l=new $X;l.setWithCredentials(!0),l.listenOnce(NX.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case mg.NO_ERROR:const c=l.getResponseJson();N(kt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(c)),s(c);break;case mg.TIMEOUT:N(kt,`RPC '${e}' ${o} timed out`),a(new L(x.DEADLINE_EXCEEDED,"Request time out"));break;case mg.HTTP_ERROR:const f=l.getStatus();if(N(kt,`RPC '${e}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const h=d==null?void 0:d.error;if(h&&h.status&&h.message){const g=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(v)>=0?v:x.UNKNOWN}(h.status);a(new L(g,h.message))}else a(new L(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(x.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{N(kt,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);N(kt,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=vg(),o=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=RX(),a=OX(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=o.join("");N(kt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=s.createWebChannel(c,l);let d=!1,h=!1;const g=new kZ({lo:_=>{h?N(kt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(N(kt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),d=!0),N(kt,`RPC '${e}' stream ${i} sending:`,_),f.send(_))},ho:()=>f.close()}),m=(_,v,p)=>{_.listen(v,y=>{try{p(y)}catch(E){setTimeout(()=>{throw E},0)}})};return m(f,Xc.EventType.OPEN,()=>{h||N(kt,`RPC '${e}' stream ${i} transport opened.`)}),m(f,Xc.EventType.CLOSE,()=>{h||(h=!0,N(kt,`RPC '${e}' stream ${i} transport closed`),g.Vo())}),m(f,Xc.EventType.ERROR,_=>{h||(h=!0,Xs(kt,`RPC '${e}' stream ${i} transport errored:`,_),g.Vo(new L(x.UNAVAILABLE,"The operation could not be completed")))}),m(f,Xc.EventType.MESSAGE,_=>{var v;if(!h){const p=_.data[0];ye(!!p);const y=p,E=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(E){N(kt,`RPC '${e}' stream ${i} received error:`,E);const S=E.status;let I=function($){const R=Be[$];if(R!==void 0)return U2(R)}(S),T=E.message;I===void 0&&(I=x.INTERNAL,T="Unknown error status: "+S+" with message "+E.message),h=!0,g.Vo(new L(I,T)),f.close()}else N(kt,`RPC '${e}' stream ${i} received:`,p),g.mo(p)}}),m(a,DX.STAT_EVENT,_=>{_.stat===_T.PROXY?N(kt,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===_T.NOPROXY&&N(kt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}function yg(){return typeof document<"u"?document:null}/**
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
 */function jp(t){return new FJ(t,!0)}/**
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
 */class Z2{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=o,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class eO{constructor(e,n,r,i,o,s,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Z2(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(pr(n.toString()),pr("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new L(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PZ extends eO{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=BJ(this.serializer,e),r=function(o){if(!("targetChange"in o))return Y.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?Y.min():s.readTime?hr(s.readTime):Y.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Ry(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=Iy(l)?{documents:qJ(o,l)}:{query:GJ(o,l).ut},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=W2(o,s.resumeToken);const u=ky(o,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(Y.min())>0){a.readTime=eh(o,s.snapshotVersion.toTimestamp());const u=ky(o,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=QJ(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Ry(this.serializer),n.removeTarget=e,this.t_(n)}}class RZ extends eO{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=HJ(e.writeResults,e.commitTime),r=hr(e.commitTime);return this.listener.T_(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Ry(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>WJ(this.serializer,r))};this.t_(n)}}/**
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
 */class OZ extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new L(x.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.So(e,Ay(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(x.UNKNOWN,o.toString())})}vo(e,n,r,i,o){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.vo(e,Ay(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(x.UNKNOWN,s.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class NZ{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(pr(n),this.g_=!1):N("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class DZ{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=o,this.M_.io(s=>{r.enqueueAndForget(async()=>{Fo(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=J(l);u.v_.add(4),await hc(u),u.x_.set("Unknown"),u.v_.delete(4),await Vp(u)}(this))})}),this.x_=new NZ(r,i)}}async function Vp(t){if(Fo(t))for(const e of t.F_)await e(!0)}async function hc(t){for(const e of t.F_)await e(!1)}function tO(t,e){const n=J(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),x_(n)?C_(n):ka(n).Jo()&&I_(n,e))}function nO(t,e){const n=J(t),r=ka(n);n.C_.delete(e),r.Jo()&&rO(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Fo(n)&&n.x_.set("Unknown"))}function I_(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ka(t).c_(e)}function rO(t,e){t.O_.Oe(e),ka(t).l_(e)}function C_(t){t.O_=new MJ({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ka(t).start(),t.x_.p_()}function x_(t){return Fo(t)&&!ka(t).Ho()&&t.C_.size>0}function Fo(t){return J(t).v_.size===0}function iO(t){t.O_=void 0}async function $Z(t){t.C_.forEach((e,n)=>{I_(t,e)})}async function MZ(t,e){iO(t),x_(t)?(t.x_.S_(e),C_(t)):t.x_.set("Unknown")}async function LZ(t,e,n){if(t.x_.set("Online"),e instanceof B2&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await th(t,r)}else if(e instanceof Gf?t.O_.$e(e):e instanceof z2?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(Y.min()))try{const r=await J2(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.O_.it(s);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=o.C_.get(u);c&&o.C_.set(u,c.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,u)=>{const c=o.C_.get(l);if(!c)return;o.C_.set(l,c.withResumeToken(Mt.EMPTY_BYTE_STRING,c.snapshotVersion)),rO(o,l);const f=new ci(c.target,l,u,c.sequenceNumber);I_(o,f)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await th(t,r)}}async function th(t,e,n){if(!uc(e))throw e;t.v_.add(1),await hc(t),t.x_.set("Offline"),n||(n=()=>J2(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Vp(t)})}function oO(t,e){return e().catch(n=>th(t,n,e))}async function Fp(t){const e=J(t),n=Ri(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;jZ(e);)try{const i=await SZ(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,VZ(e,i)}catch(i){await th(e,i)}sO(e)&&aO(e)}function jZ(t){return Fo(t)&&t.D_.length<10}function VZ(t,e){t.D_.push(e);const n=Ri(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function sO(t){return Fo(t)&&!Ri(t).Ho()&&t.D_.length>0}function aO(t){Ri(t).start()}async function FZ(t){Ri(t).d_()}async function UZ(t){const e=Ri(t);for(const n of t.D_)e.I_(n.mutations)}async function zZ(t,e,n){const r=t.D_.shift(),i=__.from(r,e,n);await oO(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fp(t)}async function BZ(t,e){e&&Ri(t).P_&&await async function(r,i){if(function(s){return NJ(s)&&s!==x.ABORTED}(i.code)){const o=r.D_.shift();Ri(r).Zo(),await oO(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Fp(r)}}(t,e),sO(t)&&aO(t)}async function HT(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Fo(n);n.v_.add(3),await hc(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Vp(n)}async function WZ(t,e){const n=J(t);e?(n.v_.delete(2),await Vp(n)):e||(n.v_.add(2),await hc(n),n.x_.set("Unknown"))}function ka(t){return t.N_||(t.N_=function(n,r,i){const o=J(n);return o.R_(),new PZ(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:$Z.bind(null,t),To:MZ.bind(null,t),u_:LZ.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),x_(t)?C_(t):t.x_.set("Unknown")):(await t.N_.stop(),iO(t))})),t.N_}function Ri(t){return t.B_||(t.B_=function(n,r,i){const o=J(n);return o.R_(),new RZ(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:FZ.bind(null,t),To:BZ.bind(null,t),E_:UZ.bind(null,t),T_:zZ.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await Fp(t)):(await t.B_.stop(),t.D_.length>0&&(N("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
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
 */class k_{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new k_(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function A_(t,e){if(pr("AsyncQueue",`${e}: ${t}`),uc(t))return new L(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=ul(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class qT{constructor(){this.L_=new $e(W.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):K():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class na{constructor(e,n,r,i,o,s,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new na(e,n,Rs.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Np(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class HZ{constructor(){this.q_=void 0,this.Q_=[]}}class qZ{constructor(){this.queries=new xa(e=>x2(e),Np),this.onlineState="Unknown",this.K_=new Set}}async function lO(t,e){const n=J(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new HZ),i)try{o.q_=await n.onListen(r)}catch(s){const a=A_(s,`Initialization of query '${Jo(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,o),o.Q_.push(e),e.U_(n.onlineState),o.q_&&e.W_(o.q_)&&P_(n)}async function uO(t,e){const n=J(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.Q_.indexOf(e);s>=0&&(o.Q_.splice(s,1),i=o.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function GZ(t,e){const n=J(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.Q_)a.W_(i)&&(r=!0);s.q_=i}}r&&P_(n)}function KZ(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const o of i.Q_)o.onError(n);r.queries.delete(e)}function P_(t){t.K_.forEach(e=>{e.next()})}class cO{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new na(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=na.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class fO{constructor(e){this.key=e}}class dO{constructor(e){this.key=e}}class QZ{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ne(),this.mutatedKeys=ne(),this.ua=k2(e),this.ca=new Rs(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new qT,i=n?n.ca:this.ca;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const d=i.get(c),h=Dp(this.query,f)?f:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let _=!1;d&&h?d.data.isEqual(h.data)?g!==m&&(r.track({type:3,doc:h}),_=!0):this.Ia(d,h)||(r.track({type:2,doc:h}),_=!0,(l&&this.ua(h,l)>0||u&&this.ua(h,u)<0)&&(a=!0)):!d&&h?(r.track({type:0,doc:h}),_=!0):d&&!h&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(h?(s=s.add(h),o=m?o.add(c):o.delete(c)):(s=s.delete(c),o=o.delete(c)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const c=this.query.limitType==="F"?s.last():s.first();s=s.delete(c.key),o=o.delete(c.key),r.track({type:1,doc:c})}return{ca:s,Pa:r,Xi:a,mutatedKeys:o}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.k_();s.sort((c,f)=>function(h,g){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return m(h)-m(g)}(c.type,f.type)||this.ua(c.doc,f.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,s.length!==0||u?{snapshot:new na(this.query,e.ca,o,s,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new qT,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=ne(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new dO(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new fO(r))}),n}Ra(e){this.oa=e.hs,this.aa=ne();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return na.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class YZ{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XZ{constructor(e){this.key=e,this.ma=!1}}class JZ{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new xa(a=>x2(a),Np),this.pa=new Map,this.ya=new Set,this.wa=new $e(W.comparator),this.Sa=new Map,this.ba=new S_,this.Da={},this.Ca=new Map,this.va=ta.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function ZZ(t,e){const n=uee(t);let r,i;const o=n.ga.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Va();else{const s=await bZ(n.localStore,dr(e)),a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await eee(n,e,r,a==="current",s.resumeToken),n.isPrimaryClient&&tO(n.remoteStore,s)}return i}async function eee(t,e,n,r,i){t.Ma=(f,d,h)=>async function(m,_,v,p){let y=_.view.ha(v);y.Xi&&(y=await zT(m.localStore,_.query,!1).then(({documents:T})=>_.view.ha(T,y)));const E=p&&p.targetChanges.get(_.targetId),S=p&&p.targetMismatches.get(_.targetId)!=null,I=_.view.applyChanges(y,m.isPrimaryClient,E,S);return KT(m,_.targetId,I.da),I.snapshot}(t,f,d,h);const o=await zT(t.localStore,e,!0),s=new QZ(e,o.hs),a=s.ha(o.documents),l=dc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=s.applyChanges(a,t.isPrimaryClient,l);KT(t,n,u.da);const c=new YZ(e,n,s);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function tee(t,e){const n=J(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(o=>!Np(o,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Oy(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),nO(n.remoteStore,r.targetId),Ny(n,r.targetId)}).catch(lc)):(Ny(n,r.targetId),await Oy(n.localStore,r.targetId,!0))}async function nee(t,e,n){const r=cee(t);try{const i=await function(s,a){const l=J(s),u=rt.now(),c=a.reduce((h,g)=>h.add(g.key),ne());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",h=>{let g=$r(),m=ne();return l.os.getEntries(h,c).next(_=>{g=_,g.forEach((v,p)=>{p.isValidDocument()||(m=m.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(h,g)).next(_=>{f=_;const v=[];for(const p of a){const y=kJ(p,f.get(p.key).overlayedDocument);y!=null&&v.push(new Vo(p.key,y,_2(y.value.mapValue),xr.exists(!0)))}return l.mutationQueue.addMutationBatch(h,u,v,a)}).next(_=>{d=_;const v=_.applyToLocalDocumentSet(f,m);return l.documentOverlayCache.saveOverlays(h,_.batchId,v)})}).then(()=>({batchId:d.batchId,changes:P2(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let u=s.Da[s.currentUser.toKey()];u||(u=new $e(ce)),u=u.insert(a,l),s.Da[s.currentUser.toKey()]=u}(r,i.batchId,n),await pc(r,i.changes),await Fp(r.remoteStore)}catch(i){const o=A_(i,"Failed to persist write");n.reject(o)}}async function hO(t,e){const n=J(t);try{const r=await wZ(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Sa.get(o);s&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.ma=!0:i.modifiedDocuments.size>0?ye(s.ma):i.removedDocuments.size>0&&(ye(s.ma),s.ma=!1))}),await pc(n,r,e)}catch(r){await lc(r)}}function GT(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((o,s)=>{const a=s.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=J(s);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const d of f.Q_)d.U_(a)&&(u=!0)}),u&&P_(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ree(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),o=i&&i.key;if(o){let s=new $e(W.comparator);s=s.insert(o,Ot.newNoDocument(o,Y.min()));const a=ne().add(o),l=new Lp(Y.min(),new Map,new $e(ce),s,a);await hO(r,l),r.wa=r.wa.remove(o),r.Sa.delete(e),R_(r)}else await Oy(r.localStore,e,!1).then(()=>Ny(r,e,n)).catch(lc)}async function iee(t,e){const n=J(t),r=e.batch.batchId;try{const i=await _Z(n.localStore,e);mO(n,r,null),pO(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pc(n,i)}catch(i){await lc(i)}}async function oee(t,e,n){const r=J(t);try{const i=await function(s,a){const l=J(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(ye(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);mO(r,e,n),pO(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pc(r,i)}catch(i){await lc(i)}}function pO(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function mO(t,e,n){const r=J(t);let i=r.Da[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Ny(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||gO(t,r)})}function gO(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(nO(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),R_(t))}function KT(t,e,n){for(const r of n)r instanceof fO?(t.ba.addReference(r.key,e),see(t,r)):r instanceof dO?(N("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||gO(t,r.key)):K()}function see(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(N("SyncEngine","New document in limbo: "+n),t.ya.add(r),R_(t))}function R_(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new W(Ie.fromString(e)),r=t.va.next();t.Sa.set(r,new XZ(n)),t.wa=t.wa.insert(n,r),tO(t.remoteStore,new ci(dr(y_(n.path)),r,"TargetPurposeLimboResolution",d_._e))}}async function pc(t,e,n){const r=J(t),i=[],o=[],s=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{s.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=T_.Ki(l.targetId,u);o.push(c)}}))}),await Promise.all(s),r.fa.u_(i),await async function(l,u){const c=J(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>k.forEach(u,d=>k.forEach(d.qi,h=>c.persistence.referenceDelegate.addReference(f,d.targetId,h)).next(()=>k.forEach(d.Qi,h=>c.persistence.referenceDelegate.removeReference(f,d.targetId,h)))))}catch(f){if(!uc(f))throw f;N("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const h=c.ns.get(d),g=h.snapshotVersion,m=h.withLastLimboFreeSnapshotVersion(g);c.ns=c.ns.insert(d,m)}}}(r.localStore,o))}async function aee(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await X2(n.localStore,e);n.currentUser=e,function(o,s){o.Ca.forEach(a=>{a.forEach(l=>{l.reject(new L(x.CANCELLED,s))})}),o.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pc(n,r.us)}}function lee(t,e){const n=J(t),r=n.Sa.get(e);if(r&&r.ma)return ne().add(r.key);{let i=ne();const o=n.pa.get(e);if(!o)return i;for(const s of o){const a=n.ga.get(s);i=i.unionWith(a.view.la)}return i}}function uee(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hO.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lee.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ree.bind(null,e),e.fa.u_=GZ.bind(null,e.eventManager),e.fa.xa=KZ.bind(null,e.eventManager),e}function cee(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iee.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oee.bind(null,e),e}class QT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=jp(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yZ(this.persistence,new gZ,e.initialUser,this.serializer)}createPersistence(e){return new hZ(b_.Hr,this.serializer)}createSharedClientState(e){return new IZ}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fee{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>GT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aee.bind(null,this.syncEngine),await WZ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qZ}()}createDatastore(e){const n=jp(e.databaseInfo.databaseId),r=function(o){return new AZ(o)}(e.databaseInfo);return function(o,s,a,l){return new OZ(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new DZ(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>GT(this.syncEngine,n,0),function(){return WT.D()?new WT:new CZ}())}createSyncEngine(e,n){return function(i,o,s,a,l,u,c){const f=new JZ(i,o,s,a,l,u);return c&&(f.Fa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=J(r);N("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await hc(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class vO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):pr("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class dee{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=g2.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{N("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(N("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=A_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _g(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await X2(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function YT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pee(t);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>HT(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>HT(e.remoteStore,i)),t._onlineComponents=e}function hee(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function pee(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await _g(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hee(n))throw n;Xs("Error using user provided cache. Falling back to memory cache: "+n),await _g(t,new QT)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await _g(t,new QT);return t._offlineComponents}async function yO(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await YT(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await YT(t,new fee))),t._onlineComponents}function mee(t){return yO(t).then(e=>e.syncEngine)}async function _O(t){const e=await yO(t),n=e.eventManager;return n.onListen=ZZ.bind(null,e.syncEngine),n.onUnlisten=tee.bind(null,e.syncEngine),n}function gee(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const c=new vO({next:d=>{s.enqueueAndForget(()=>uO(o,f));const h=d.docs.has(a);!h&&d.fromCache?u.reject(new L(x.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&l&&l.source==="server"?u.reject(new L(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new cO(y_(a.path),c,{includeMetadataChanges:!0,Z_:!0});return lO(o,f)}(await _O(t),t.asyncQueue,e,n,r)),r.promise}function vee(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const c=new vO({next:d=>{s.enqueueAndForget(()=>uO(o,f)),d.fromCache&&l.source==="server"?u.reject(new L(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new cO(a,c,{includeMetadataChanges:!0,Z_:!0});return lO(o,f)}(await _O(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function wO(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const XT=new Map;/**
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
 */function EO(t,e,n){if(!n)throw new L(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yee(t,e,n,r){if(e===!0&&r===!0)throw new L(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function JT(t){if(!W.isDocumentKey(t))throw new L(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ZT(t){if(W.isDocumentKey(t))throw new L(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Up(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Ro(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Up(t);throw new L(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class eI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yee("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wO((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new L(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new L(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new L(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LX;switch(r.type){case"firstParty":return new UX(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=XT.get(n);r&&(N("ComponentProvider","Removing Datastore"),XT.delete(n),r.terminate())}(this),Promise.resolve()}}function _ee(t,e,n,r={}){var i;const o=(t=Ro(t,zp))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Pt.MOCK_USER;else{a=Wq(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new L(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Pt(u)}t._authCredentials=new jX(new m2(a,l))}}/**
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
 */class Aa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Aa(this.firestore,e,this._query)}}class Jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jt(this.firestore,e,this._key)}}class Ii extends Aa{constructor(e,n,r){super(e,n,y_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jt(this.firestore,null,new W(e))}withConverter(e){return new Ii(this.firestore,e,this._path)}}function SO(t,e,...n){if(t=zt(t),EO("collection","path",e),t instanceof zp){const r=Ie.fromString(e,...n);return ZT(r),new Ii(t,null,r)}{if(!(t instanceof Jt||t instanceof Ii))throw new L(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return ZT(r),new Ii(t.firestore,null,r)}}function wee(t,e,...n){if(t=zt(t),arguments.length===1&&(e=g2.newId()),EO("doc","path",e),t instanceof zp){const r=Ie.fromString(e,...n);return JT(r),new Jt(t,null,new W(r))}{if(!(t instanceof Jt||t instanceof Ii))throw new L(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return JT(r),new Jt(t.firestore,t instanceof Ii?t.converter:null,new W(r))}}/**
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
 */class Eee{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Z2(this,"async_queue_retry"),this._u=()=>{const n=yg();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=yg();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=yg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new fr;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!uc(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=k_.createAndSchedule(this,e,n,r,o=>this.lu(o));return this.nu.push(i),i}au(){this.ru&&K()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class Bp extends zp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Eee}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bO(this),this._firestoreClient.terminate()}}function See(t,e){const n=typeof t=="object"?t:RP(),r=typeof t=="string"?t:e||"(default)",i=R1(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=zq("firestore");o&&_ee(i,...o)}return i}function O_(t){return t._firestoreClient||bO(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bO(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,u,c){return new tJ(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,wO(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new dee(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class ra{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ra(Mt.fromBase64String(e))}catch(n){throw new L(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ra(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class N_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class TO{constructor(e){this._methodName=e}}/**
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
 */class D_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const bee=/^__.*__$/;class Tee{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vo(e,this.data,this.fieldMask,n,this.fieldTransforms):new fc(e,this.data,n,this.fieldTransforms)}}function IO(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class $_{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Eu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new $_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return nh(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(IO(this.du)&&bee.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class Iee{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jp(e)}Su(e,n,r,i=!1){return new $_({du:e,methodName:n,wu:r,path:_t.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function CO(t){const e=t._freezeSettings(),n=jp(t._databaseId);return new Iee(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cee(t,e,n,r,i,o={}){const s=t.Su(o.merge||o.mergeFields?2:0,e,n,i);AO("Data must be an object, but it was:",s,r);const a=xO(r,s);let l,u;if(o.merge)l=new Dn(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const c=[];for(const f of o.mergeFields){const d=kee(e,f,n);if(!s.contains(d))throw new L(x.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Pee(c,d)||c.push(d)}l=new Dn(c),u=s.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=s.fieldTransforms;return new Tee(new _n(a),l,u)}function xee(t,e,n,r=!1){return M_(n,t.Su(r?4:3,e))}function M_(t,e){if(kO(t=zt(t)))return AO("Unsupported field value:",e,t),xO(t,e);if(t instanceof TO)return function(r,i){if(!IO(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=M_(a,i.gu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SJ(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=rt.fromDate(r);return{timestampValue:eh(i.serializer,o)}}if(r instanceof rt){const o=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:eh(i.serializer,o)}}if(r instanceof D_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ra)return{bytesValue:W2(i.serializer,r._byteString)};if(r instanceof Jt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.pu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:E_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Up(r)}`)}(t,e)}function xO(t,e){const n={};return v2(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ca(t,(r,i)=>{const o=M_(i,e.Ru(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function kO(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof D_||t instanceof ra||t instanceof Jt||t instanceof TO)}function AO(t,e,n){if(!kO(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Up(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function kee(t,e,n){if((e=zt(e))instanceof N_)return e._internalPath;if(typeof e=="string")return PO(t,e);throw nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Aee=new RegExp("[~\\*/\\[\\]]");function PO(t,e,n){if(e.search(Aee)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new N_(...e.split("."))._internalPath}catch{throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nh(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new L(x.INVALID_ARGUMENT,a+t+l)}function Pee(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class RO{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ree(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(OO("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ree extends RO{data(){return super.data()}}function OO(t,e){return typeof e=="string"?PO(t,e):e instanceof N_?e._internalPath:e._delegate._internalPath}/**
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
 */function Oee(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class L_{}class Nee extends L_{}function Dee(t,e,...n){let r=[];e instanceof L_&&r.push(e),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof V_).length,a=o.filter(l=>l instanceof j_).length;if(s>1||s>0&&a>0)throw new L(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class j_ extends Nee{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new j_(e,n,r)}_apply(e){const n=this._parse(e);return NO(e._query,n),new Aa(e.firestore,e.converter,Cy(e._query,n))}_parse(e){const n=CO(e.firestore);return function(o,s,a,l,u,c,f){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new L(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){nI(f,c);const h=[];for(const g of f)h.push(tI(l,o,g));d={arrayValue:{values:h}}}else d=tI(l,o,f)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||nI(f,c),d=xee(a,s,f,c==="in"||c==="not-in");return Ke.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class V_ extends L_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new V_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)NO(s,l),s=Cy(s,l)}(e._query,n),new Aa(e.firestore,e.converter,Cy(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function tI(t,e,n){if(typeof(n=zt(n))=="string"){if(n==="")throw new L(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!C2(e)&&n.indexOf("/")!==-1)throw new L(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!W.isDocumentKey(r))throw new L(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return IT(t,new W(r))}if(n instanceof Jt)return IT(t,n._key);throw new L(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Up(n)}.`)}function nI(t,e){if(!Array.isArray(t)||t.length===0)throw new L(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NO(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class $ee{convertValue(e,n="none"){switch(Po(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ao(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ca(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new D_(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=p_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Iu(e));default:return null}}convertTimestamp(e){const n=Pi(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ye(Y2(r));const i=new Cu(r.get(1),r.get(3)),o=new W(r.popFirst(5));return i.isEqual(n)||pr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function Mee(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class fl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class DO extends RO{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Kf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(OO("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Kf extends DO{data(e={}){return super.data(e)}}class Lee{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Kf(this._firestore,this._userDataWriter,r.key,r,new fl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new Kf(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new Kf(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),c=s.indexOf(a.doc.key)),{type:jee(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jee(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function Vee(t){t=Ro(t,Jt);const e=Ro(t.firestore,Bp);return gee(O_(e),t._key).then(n=>Bee(e,t,n))}class $O extends $ee{constructor(e){super(),this.firestore=e}convertBytes(e){return new ra(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}function Fee(t){t=Ro(t,Aa);const e=Ro(t.firestore,Bp),n=O_(e),r=new $O(e);return Oee(t._query),vee(n,t._query).then(i=>new Lee(e,r,t,i))}function Uee(t,e,n){t=Ro(t,Jt);const r=Ro(t.firestore,Bp),i=Mee(t.converter,e,n);return zee(r,[Cee(CO(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xr.none())])}function zee(t,e){return function(r,i){const o=new fr;return r.asyncQueue.enqueueAndForget(async()=>nee(await mee(r),i,o)),o.promise}(O_(t),e)}function Bee(t,e,n){const r=n.docs.get(e._key),i=new $O(t);return new DO(t,i,e._key,r,new fl(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ia=i})(Ea),Qs(new To("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new Bp(new VX(r.getProvider("auth-internal")),new BX(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cu(u.options.projectId,c)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Ti(wT,"4.4.2",e),Ti(wT,"4.4.2","esm2017")})();const Wee={apiKey:"AIzaSyAyH75EeQs-whvwD_aO6mKbcaLNbAAUQe8",authDomain:"sandra-sanchez-art.firebaseapp.com",projectId:"sandra-sanchez-art",storageBucket:"sandra-sanchez-art.appspot.com",messagingSenderId:"490365144817",appId:"1:490365144817:web:f1cfc1439ab5f515d4e350",measurementId:"G-FVK28QXSKK"},MO=PP(Wee),LO=See(MO),jO=new wr;jO.setCustomParameters({prompt:"select_account"});const mc=AY(MO),Hee=()=>jQ(mc,jO),F_=async(t,e={})=>{const n=SO(LO,"users"),r=wee(n,t.uid),i=await Vee(r);if(!i.exists()){const{email:o,displayName:s}=t,a=new Date;try{await Uee(r,{displayName:s,email:o,createdAt:a,...e})}catch(l){console.log(`Whoops! Looks like there was an error creating the user: ${l}`)}}return console.log(r),console.log(i),console.log(i.data()),r},qee=async()=>{const t=SO(LO,"categories"),e=Dee(t);return(await Fee(e)).docs.reduce((i,o)=>{const{categoryName:s,items:a}=o.data();return i[s.toLowerCase()]=a,i},{})},Gee=async(t,e)=>{if(!(!t||!e))return await hQ(mc,t,e)},Kee=async(t,e)=>{if(!(!t||!e))return await dQ(mc,t,e)},Qee=t=>gQ(mc,t),Yee=()=>vQ(mc),Wp=b.createContext({currentUser:null,setCurrentUser:()=>null}),Xee=({children:t})=>{const[e,n]=b.useState(null),r={currentUser:e,setCurrentUser:n};return b.useEffect(()=>Qee(o=>{o&&F_(o),n(o)}),[]),w.jsx(Wp.Provider,{value:r,children:t})},Jee=(t,e,n,r,i,o)=>t.find(a=>a.id===e.id&&a.selectedSize===n)?t.map(a=>a.id===e.id&&a.selectedSize===n?{...a,quantity:a.quantity+i}:a):[...t,{...e,quantity:i,selectedSize:n,itemPrice:r,key:o}],Zee=(t,e,n,r)=>t.find(o=>o.id===e.id&&o.selectedSize===n&&o.key===r)?t.map(o=>o.id===e.id&&o.selectedSize===n?{...o,quantity:o.quantity+1}:o):[...t,{...e,quantity:1}],ete=(t,e,n,r)=>{const i=t.find(o=>o.id===e.id&&o.selectedSize===n&&o.key===e.key);return i&&i.quantity===1?t.filter(o=>o.key!==r):t.map(o=>o.key===r?{...o,quantity:o.quantity-1}:o)},tte=(t,e,n)=>t.filter(r=>r.id!==e.id&&r.key!==e.key),Br=b.createContext({cartItems:[],setCartItems:()=>{},addProductAndQuantityToCart:()=>{},addOneItemToCart:()=>{},removeOneItemFromCart:()=>{},clearItemFromCart:()=>{},cartTotal:0,cartCount:0,cartItemIsAdded:!1,setCartItemIsAdded:()=>{},isCartOpen:!1,setIsCartOpen:()=>{}}),nte=({children:t})=>{const[e,n]=b.useState([]),[r,i]=b.useState(!1),[o,s]=b.useState(0),[a,l]=b.useState(0),[u,c]=b.useState(!1),f=(_,v,p,y,E)=>n(Jee(e,_,v,p,y,E)),d=(_,v,p)=>n(Zee(e,_,v,p)),h=(_,v,p)=>n(ete(e,_,v,p)),g=(_,v)=>n(tte(e,_));b.useEffect(()=>{const _=e.reduce((v,p)=>v+p.quantity,0);l(_)},[e]),b.useEffect(()=>{const _=e.reduce((v,p)=>v+p.itemPrice*p.quantity,0);s(_)},[e]);const m={cartItems:e,setCartItems:n,isCartOpen:r,setIsCartOpen:i,cartTotal:o,setCartTotal:s,cartCount:a,setCartCount:l,addProductAndQuantityToCart:f,addOneItemToCart:d,removeOneItemFromCart:h,clearItemFromCart:g,cartItemIsAdded:u,setCartItemIsAdded:c};return w.jsx(Br.Provider,{value:m,children:t})},rte=A.div`
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

`,ite=A.div`
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
`,ote=A.div`
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
`;var U_={},ste=Nh;Object.defineProperty(U_,"__esModule",{value:!0});var z_=U_.default=void 0,ate=ste(tp()),lte=w,ute=(0,ate.default)((0,lte.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");z_=U_.default=ute;const cte=A.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid black;
`,fte=A.div`
    width: 30%;

    img {
        width: 100px;
        height: 150px;
        object-fit: cover;
    }
`,dte=A.div`
    display: flex: 
    flex-direction: column;
    width: 40%;
    margin: 0 10px;
`,hte=A.div`
    margin: 0 10px;
`,pte=A(z_)`
    cursor: pointer;
    
    &:hover {
        color: red;
    }
`,VO=A.button`
    display: flex;
    align-items: center;
    justify-content: center;
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
`,mte=A(VO)`
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
`,Qe={default:"default",google:"google"},gte=Oh`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`,vte=A.div`
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${gte} 0.8s linear infinite;
`,yte=(t=Qe.default)=>({[Qe.default]:VO,[Qe.google]:mte})[t],Cn=({children:t,buttonType:e,isLoading:n,...r})=>{const i=yte(e);return w.jsx(i,{disabled:n,...r,children:n?w.jsx(vte,{}):t})},_te=A.div`
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;

    h2 {
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
        font-size: 25px;
    }

    
`,wte=A.div`
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
`,Ete=A.div`
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

    #go-back {
        width: 40%;
    }
`,Ste=A.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
`,bte=A.div`
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
`,Tte=A.div`
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
`,B_=A.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,W_=A.input`
    width: 20px;
    height: 30px;
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
    font-size: 20px;
    background-color: rgb(204,204,204);

    &:focus: {
        background-color: white;
    }
`,ia=A(Cn)`
    border-radius: 0px;
    padding: 0;
    margin: 0;
    height: 35px;
    width: 25px;
    font-size: 25px;
    border-radius: 2px;
    background-color: rgb(204, 204, 204);
`,Ite=A(Cn)`
    border-radius: 5px;
    font-size: 20px;
    position: relative;
    top: 12px;
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
    font-size: 20px;
`,Cte=A.div`
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
    font-size: 18px;
`,xte=A(Cn)`
    width: 40px;
    height: 40px;
    border-radius: 2px;
    margin-left: auto;
`,kte=({cartItem:t})=>{const{name:e,imageUrl:n,selectedSize:r,quantity:i,id:o,key:s}=t,{addOneItemToCart:a,removeOneItemFromCart:l,clearItemFromCart:u,cartItems:c,setCartItems:f}=b.useContext(Br),d=()=>{a(t,r,s)},h=_=>{_.stopPropagation(),l(t,r,s)},g=()=>u(t,s),m=_=>{const v=c.find(y=>y.key===s&&y.id===o&&y.selectedSize===r),p=_.target.value;if(/^\d*$/.test(p)&&v){const y=c.map(E=>E.key===s&&E.id===o&&E.selectedSize===r?{...E,quantity:p===""?"":parseInt(p,10)}:E);f(y)}};return w.jsxs(cte,{children:[w.jsx(fte,{children:w.jsx("img",{src:n,alt:e})}),w.jsxs(dte,{children:[w.jsx("h3",{children:e}),w.jsx("span",{children:r})]}),w.jsxs(B_,{children:[w.jsx(ia,{buttonType:Qe.default,onClick:h,children:"-"}),w.jsx(W_,{value:i,onChange:m}),w.jsx(ia,{buttonType:Qe.default,onClick:d,children:"+"})]}),w.jsx(hte,{onClick:g,children:w.jsx(pte,{fontSize:"large"})})]})},Ate=b.forwardRef((t,e)=>{const{close:n}=t,r=Ur(),{cartItems:i,cartTotal:o}=b.useContext(Br);console.log(i);const s=()=>{r("/cart-summary"),n()};return w.jsxs(rte,{ref:e,children:[w.jsx(ite,{children:i.length?i.map(a=>w.jsx(kte,{cartItem:a},a.key)):w.jsx("span",{children:"Your cart is currently empty!"})}),w.jsxs(ote,{children:[w.jsxs("h3",{children:["Sub-total: $",o," "]}),w.jsx(Cn,{isLoading:!1,buttonType:Qe.google,onClick:s,children:"View Cart Summary"})]})]})}),Pte=()=>{const t=b.useRef(null),e=Ur(),{currentUser:n}=b.useContext(Wp),{cartCount:r,cartItemIsAdded:i}=b.useContext(Br),[o,s]=b.useState(!1),[a,l]=b.useState(!1),[u,c]=b.useState(!1),f=()=>e("/authentication"),d=()=>{s(!0),l(!1)},h=()=>s(!1),g=S=>{S.stopPropagation(),s(!o),l(!1)},m=()=>{l(!0),s(!1)},_=()=>l(!1),v=S=>{S.stopPropagation(),l(!a),s(!1)},p=()=>{s(!1),l(!1)},y=S=>{S.stopPropagation(),c(!u),l(!1)},E=()=>c(!1);return b.useEffect(()=>{const S=I=>{I.target.id!=="mentoring"&&s(!1)};return document.body.addEventListener("click",S),()=>document.body.removeEventListener("click",S)},[]),b.useEffect(()=>{const S=I=>{I.target.id!=="shop"&&l(!1)};return document.body.addEventListener("click",S),()=>document.body.removeEventListener("click",S)},[]),b.useEffect(()=>{const S=I=>{t.current&&!t.current.contains(I.target)&&c(!1)};return document.body.addEventListener("click",S),()=>document.body.removeEventListener("click",S)},[u]),w.jsxs(b.Fragment,{children:[w.jsxs(xq,{children:[w.jsx(Iq,{to:"/",children:w.jsx(Cq,{src:Dq})}),w.jsx("h1",{children:"Sandra Sanchez"}),w.jsxs(kq,{children:[w.jsx(Ga,{onMouseEnter:p,children:"About"}),w.jsxs(Ob,{id:"mentoring","data-toggle":!0,children:[w.jsx(Ga,{"data-dropdown-button":!0,onClick:g,onMouseEnter:d,children:"Mentoring"}),w.jsxs(Rb,{open:o,onMouseLeave:h,children:[w.jsx(Ka,{to:"",children:"Private Lessons"}),w.jsx(Ka,{to:"",children:"Group Classes"})]})]}),w.jsxs(Ob,{id:"shop","data-toggle":!0,children:[w.jsx(Ga,{"data-dropdown-button":!0,onClick:v,onMouseEnter:m,children:"Shop"}),w.jsxs(Rb,{open:a,onMouseLeave:_,children:[w.jsx(Ka,{to:"shop/inks",children:"Inks"}),w.jsx(Ka,{to:"shop/illustrations",children:"Illustrations"}),w.jsx(Ka,{to:"shop/fine art",children:"Fine Art"})]})]}),n?w.jsx(Ga,{onClick:Yee,onMouseEnter:p,children:"Sign Out"}):w.jsx(Ga,{onMouseEnter:p,onClick:f,children:"Sign In"}),w.jsxs(Aq,{onClick:y,onMouseEnter:p,$bounce:+i,children:[i&&w.jsx(Nq,{particleSize:6,particleCount:100}),w.jsx(Pq,{fontSize:"large"}),w.jsx(Rq,{children:r})]})]}),u&&w.jsx(Ate,{ref:t,close:E}),i&&w.jsx(Oq,{$show:+i,children:w.jsx("h4",{children:"Item successfully added to cart!"})})]}),w.jsx(f5,{})]})},Rte=A.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`,FO=A.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({$imageurl:t})=>`url(${t})`};
    border-radius: 10px;
    opacity: 0.9;
`,UO=A.div`
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
`,Ote=A.div`
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

        ${FO} {
            opacity: 1;
            transform: scale(1.1);
            transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${UO} {
            opacity: 1;
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
`,Nte=({category:t})=>{const{categoryName:e,imageUrl:n,route:r}=t,i=Ur(),o=()=>i(r);return w.jsxs(Ote,{onClick:o,children:[w.jsx(FO,{$imageurl:n}),w.jsxs(UO,{children:[w.jsx("h2",{children:e}),w.jsx("p",{children:"View More"})]})]})},Dte=[{id:1,categoryName:"Inks",imageUrl:"https://i.ibb.co/4NzycTv/yamamoto-bleach.jpg",route:"shop/inks"},{id:2,categoryName:"Illustrations",imageUrl:"https://i.ibb.co/n1V220T/dva.jpg",route:"shop/illustrations"},{id:3,categoryName:"Fine Art",imageUrl:"https://i.ibb.co/SfsGYKk/Confections-Oilonlinen-16x18in-1250.jpg",route:"shop/fine art"}],$te=()=>w.jsx(Rte,{children:Dte.map(t=>w.jsx(Nte,{category:t},t.id))});var H_={},Mte=Nh;Object.defineProperty(H_,"__esModule",{value:!0});var zO=H_.default=void 0;Vte(b);var Lte=Mte(tp()),jte=w;function BO(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(BO=function(r){return r?n:e})(t)}function Vte(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=BO(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)){var s=i?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}var Fte=(0,Lte.default)((0,jte.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");zO=H_.default=Fte;var q_={},Ute=Nh;Object.defineProperty(q_,"__esModule",{value:!0});var WO=q_.default=void 0;Wte(b);var zte=Ute(tp()),Bte=w;function HO(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(HO=function(r){return r?n:e})(t)}function Wte(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=HO(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)){var s=i?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}var Hte=(0,zte.default)((0,Bte.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");WO=q_.default=Hte;function rI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rI(Object(n),!0).forEach(function(r){it(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rh(t){"@babel/helpers - typeof";return rh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rh(t)}function qte(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function iI(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Gte(t,e,n){return e&&iI(t.prototype,e),n&&iI(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function G_(t,e){return Qte(t)||Xte(t,e)||qO(t,e)||Zte()}function gc(t){return Kte(t)||Yte(t)||qO(t)||Jte()}function Kte(t){if(Array.isArray(t))return Dy(t)}function Qte(t){if(Array.isArray(t))return t}function Yte(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Xte(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function qO(t,e){if(t){if(typeof t=="string")return Dy(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dy(t,e)}}function Dy(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Jte(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zte(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var oI=function(){},K_={},GO={},KO=null,QO={mark:oI,measure:oI};try{typeof window<"u"&&(K_=window),typeof document<"u"&&(GO=document),typeof MutationObserver<"u"&&(KO=MutationObserver),typeof performance<"u"&&(QO=performance)}catch{}var ene=K_.navigator||{},sI=ene.userAgent,aI=sI===void 0?"":sI,Oi=K_,xe=GO,lI=KO,tf=QO;Oi.document;var Wr=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",YO=~aI.indexOf("MSIE")||~aI.indexOf("Trident/"),nf,rf,of,sf,af,Mr="___FONT_AWESOME___",$y=16,XO="fa",JO="svg-inline--fa",Oo="data-fa-i2svg",My="data-fa-pseudo-element",tne="data-fa-pseudo-element-pending",Q_="data-prefix",Y_="data-icon",uI="fontawesome-i2svg",nne="async",rne=["HTML","HEAD","STYLE","SCRIPT"],ZO=function(){try{return!0}catch{return!1}}(),be="classic",Ve="sharp",X_=[be,Ve];function vc(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[be]}})}var Pu=vc((nf={},it(nf,be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),it(nf,Ve,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),nf)),Ru=vc((rf={},it(rf,be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),it(rf,Ve,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),rf)),Ou=vc((of={},it(of,be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),it(of,Ve,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),of)),ine=vc((sf={},it(sf,be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),it(sf,Ve,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),sf)),one=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,eN="fa-layers-text",sne=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ane=vc((af={},it(af,be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),it(af,Ve,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),af)),tN=[1,2,3,4,5,6,7,8,9,10],lne=tN.concat([11,12,13,14,15,16,17,18,19,20]),une=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nu=new Set;Object.keys(Ru[be]).map(Nu.add.bind(Nu));Object.keys(Ru[Ve]).map(Nu.add.bind(Nu));var cne=[].concat(X_,gc(Nu),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lo.GROUP,lo.SWAP_OPACITY,lo.PRIMARY,lo.SECONDARY]).concat(tN.map(function(t){return"".concat(t,"x")})).concat(lne.map(function(t){return"w-".concat(t)})),Dl=Oi.FontAwesomeConfig||{};function fne(t){var e=xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function dne(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(xe&&typeof xe.querySelector=="function"){var hne=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hne.forEach(function(t){var e=G_(t,2),n=e[0],r=e[1],i=dne(fne(n));i!=null&&(Dl[r]=i)})}var nN={styleDefault:"solid",familyDefault:"classic",cssPrefix:XO,replacementClass:JO,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dl.familyPrefix&&(Dl.cssPrefix=Dl.familyPrefix);var oa=j(j({},nN),Dl);oa.autoReplaceSvg||(oa.observeMutations=!1);var z={};Object.keys(nN).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){oa[t]=n,$l.forEach(function(r){return r(z)})},get:function(){return oa[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){oa.cssPrefix=e,$l.forEach(function(n){return n(z)})},get:function(){return oa.cssPrefix}});Oi.FontAwesomeConfig=z;var $l=[];function pne(t){return $l.push(t),function(){$l.splice($l.indexOf(t),1)}}var Qr=$y,ir={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mne(t){if(!(!t||!Wr)){var e=xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=xe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return xe.head.insertBefore(e,r),t}}var gne="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Du(){for(var t=12,e="";t-- >0;)e+=gne[Math.random()*62|0];return e}function Pa(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function J_(t){return t.classList?Pa(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function rN(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vne(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(rN(t[n]),'" ')},"").trim()}function Hp(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Z_(t){return t.size!==ir.size||t.x!==ir.x||t.y!==ir.y||t.rotate!==ir.rotate||t.flipX||t.flipY}function yne(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function _ne(t){var e=t.transform,n=t.width,r=n===void 0?$y:n,i=t.height,o=i===void 0?$y:i,s=t.startCentered,a=s===void 0?!1:s,l="";return a&&YO?l+="translate(".concat(e.x/Qr-r/2,"em, ").concat(e.y/Qr-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Qr,"em), calc(-50% + ").concat(e.y/Qr,"em)) "):l+="translate(".concat(e.x/Qr,"em, ").concat(e.y/Qr,"em) "),l+="scale(".concat(e.size/Qr*(e.flipX?-1:1),", ").concat(e.size/Qr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var wne=`:root, :host {
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
}`;function iN(){var t=XO,e=JO,n=z.cssPrefix,r=z.replacementClass,i=wne;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var cI=!1;function wg(){z.autoAddCss&&!cI&&(mne(iN()),cI=!0)}var Ene={mixout:function(){return{dom:{css:iN,insertCss:wg}}},hooks:function(){return{beforeDOMElementCreation:function(){wg()},beforeI2svg:function(){wg()}}}},Lr=Oi||{};Lr[Mr]||(Lr[Mr]={});Lr[Mr].styles||(Lr[Mr].styles={});Lr[Mr].hooks||(Lr[Mr].hooks={});Lr[Mr].shims||(Lr[Mr].shims=[]);var $n=Lr[Mr],oN=[],Sne=function t(){xe.removeEventListener("DOMContentLoaded",t),ih=1,oN.map(function(e){return e()})},ih=!1;Wr&&(ih=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),ih||xe.addEventListener("DOMContentLoaded",Sne));function bne(t){Wr&&(ih?setTimeout(t,0):oN.push(t))}function yc(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?rN(t):"<".concat(e," ").concat(vne(r),">").concat(o.map(yc).join(""),"</").concat(e,">")}function fI(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Tne=function(e,n){return function(r,i,o,s){return e.call(n,r,i,o,s)}},Eg=function(e,n,r,i){var o=Object.keys(e),s=o.length,a=i!==void 0?Tne(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,e[u],u,e);return c};function Ine(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ly(t){var e=Ine(t);return e.length===1?e[0].toString(16):null}function Cne(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function dI(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function jy(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=dI(e);typeof $n.hooks.addPack=="function"&&!i?$n.hooks.addPack(t,dI(e)):$n.styles[t]=j(j({},$n.styles[t]||{}),o),t==="fas"&&jy("fa",e)}var lf,uf,cf,ms=$n.styles,xne=$n.shims,kne=(lf={},it(lf,be,Object.values(Ou[be])),it(lf,Ve,Object.values(Ou[Ve])),lf),ew=null,sN={},aN={},lN={},uN={},cN={},Ane=(uf={},it(uf,be,Object.keys(Pu[be])),it(uf,Ve,Object.keys(Pu[Ve])),uf);function Pne(t){return~cne.indexOf(t)}function Rne(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Pne(i)?i:null}var fN=function(){var e=function(o){return Eg(ms,function(s,a,l){return s[l]=Eg(a,o,{}),s},{})};sN=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),aN=e(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),cN=e(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in ms||z.autoFetchSvg,r=Eg(xne,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});lN=r.names,uN=r.unicodes,ew=qp(z.styleDefault,{family:z.familyDefault})};pne(function(t){ew=qp(t.styleDefault,{family:z.familyDefault})});fN();function tw(t,e){return(sN[t]||{})[e]}function One(t,e){return(aN[t]||{})[e]}function uo(t,e){return(cN[t]||{})[e]}function dN(t){return lN[t]||{prefix:null,iconName:null}}function Nne(t){var e=uN[t],n=tw("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ni(){return ew}var nw=function(){return{prefix:null,iconName:null,rest:[]}};function qp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?be:n,i=Pu[r][t],o=Ru[r][t]||Ru[r][i],s=t in $n.styles?t:null;return o||s||null}var hI=(cf={},it(cf,be,Object.keys(Ou[be])),it(cf,Ve,Object.keys(Ou[Ve])),cf);function Gp(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},it(e,be,"".concat(z.cssPrefix,"-").concat(be)),it(e,Ve,"".concat(z.cssPrefix,"-").concat(Ve)),e),s=null,a=be;(t.includes(o[be])||t.some(function(u){return hI[be].includes(u)}))&&(a=be),(t.includes(o[Ve])||t.some(function(u){return hI[Ve].includes(u)}))&&(a=Ve);var l=t.reduce(function(u,c){var f=Rne(z.cssPrefix,c);if(ms[c]?(c=kne[a].includes(c)?ine[a][c]:c,s=c,u.prefix=c):Ane[a].indexOf(c)>-1?(s=c,u.prefix=qp(c,{family:a})):f?u.iconName=f:c!==z.replacementClass&&c!==o[be]&&c!==o[Ve]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=s==="fa"?dN(u.iconName):{},h=uo(u.prefix,u.iconName);d.prefix&&(s=null),u.iconName=d.iconName||h||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!ms.far&&ms.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},nw());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ve&&(ms.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=uo(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Ni()||"fas"),l}var Dne=function(){function t(){qte(this,t),this.definitions={}}return Gte(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=j(j({},n.definitions[a]||{}),s[a]),jy(a,s[a]);var l=Ou[be][a];l&&jy(l,s[a]),fN()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),pI=[],gs={},Os={},$ne=Object.keys(Os);function Mne(t,e){var n=e.mixoutsTo;return pI=t,gs={},Object.keys(Os).forEach(function(r){$ne.indexOf(r)===-1&&delete Os[r]}),pI.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),rh(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){gs[s]||(gs[s]=[]),gs[s].push(o[s])})}r.provides&&r.provides(Os)}),n}function Vy(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=gs[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function No(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=gs[t]||[];i.forEach(function(o){o.apply(null,n)})}function jr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Os[t]?Os[t].apply(null,e):void 0}function Fy(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ni();if(e)return e=uo(n,e)||e,fI(hN.definitions,n,e)||fI($n.styles,n,e)}var hN=new Dne,Lne=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,No("noAuto")},jne={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wr?(No("beforeI2svg",e),jr("pseudoElements2svg",e),jr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,bne(function(){Fne({autoReplaceSvgRoot:n}),No("watch",e)})}},Vne={icon:function(e){if(e===null)return null;if(rh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:uo(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=qp(e[0]);return{prefix:r,iconName:uo(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(one))){var i=Gp(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ni(),iconName:uo(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=Ni();return{prefix:o,iconName:uo(o,e)||e}}}},hn={noAuto:Lne,config:z,dom:jne,parse:Vne,library:hN,findIconDefinition:Fy,toHtml:yc},Fne=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?xe:n;(Object.keys($n.styles).length>0||z.autoFetchSvg)&&Wr&&z.autoReplaceSvg&&hn.dom.i2svg({node:r})};function Kp(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return yc(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Wr){var r=xe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Une(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(Z_(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Hp(j(j({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function zne(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:s}),children:r}]}]}function rw(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,h=d===void 0?!1:d,g=r.found?r:n,m=g.width,_=g.height,v=i==="fak",p=[z.replacementClass,o?"".concat(z.cssPrefix,"-").concat(o):""].filter(function($){return f.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(f.classes).join(" "),y={children:[],attributes:j(j({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(_)})},E=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/_*16*.0625,"em")}:{};h&&(y.attributes[Oo]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Du())},children:[l]}),delete y.attributes.title);var S=j(j({},y),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:j(j({},E),f.styles)}),I=r.found&&n.found?jr("generateAbstractMask",S)||{children:[],attributes:{}}:jr("generateAbstractIcon",S)||{children:[],attributes:{}},T=I.children,O=I.attributes;return S.children=T,S.attributes=O,a?zne(S):Une(S)}function mI(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,a=t.watchable,l=a===void 0?!1:a,u=j(j(j({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[Oo]="");var c=j({},s.styles);Z_(i)&&(c.transform=_ne({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Hp(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function Bne(t){var e=t.content,n=t.title,r=t.extra,i=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Hp(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Sg=$n.styles;function Uy(t){var e=t[0],n=t[1],r=t.slice(4),i=G_(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(lo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(lo.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(lo.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var Wne={found:!1,width:512,height:512};function Hne(t,e){!ZO&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function zy(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=Ni()),new Promise(function(r,i){if(jr("missingIconAbstract"),n==="fa"){var o=dN(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Sg[e]&&Sg[e][t]){var s=Sg[e][t];return r(Uy(s))}Hne(t,e),r(j(j({},Wne),{},{icon:z.showMissingIcons&&t?jr("missingIconAbstract")||{}:{}}))})}var gI=function(){},By=z.measurePerformance&&tf&&tf.mark&&tf.measure?tf:{mark:gI,measure:gI},dl='FA "6.5.1"',qne=function(e){return By.mark("".concat(dl," ").concat(e," begins")),function(){return pN(e)}},pN=function(e){By.mark("".concat(dl," ").concat(e," ends")),By.measure("".concat(dl," ").concat(e),"".concat(dl," ").concat(e," begins"),"".concat(dl," ").concat(e," ends"))},iw={begin:qne,end:pN},Qf=function(){};function vI(t){var e=t.getAttribute?t.getAttribute(Oo):null;return typeof e=="string"}function Gne(t){var e=t.getAttribute?t.getAttribute(Q_):null,n=t.getAttribute?t.getAttribute(Y_):null;return e&&n}function Kne(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function Qne(){if(z.autoReplaceSvg===!0)return Yf.replace;var t=Yf[z.autoReplaceSvg];return t||Yf.replace}function Yne(t){return xe.createElementNS("http://www.w3.org/2000/svg",t)}function Xne(t){return xe.createElement(t)}function mN(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Yne:Xne:n;if(typeof t=="string")return xe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild(mN(s,{ceFn:r}))}),i}function Jne(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Yf={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(mN(i),n)}),n.getAttribute(Oo)===null&&z.keepOriginalSource){var r=xe.createComment(Jne(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~J_(n).indexOf(z.replacementClass))return Yf.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return yc(a)}).join(`
`);n.setAttribute(Oo,""),n.innerHTML=s}};function yI(t){t()}function gN(t,e){var n=typeof e=="function"?e:Qf;if(t.length===0)n();else{var r=yI;z.mutateApproach===nne&&(r=Oi.requestAnimationFrame||yI),r(function(){var i=Qne(),o=iw.begin("mutate");t.map(i),o(),n()})}}var ow=!1;function vN(){ow=!0}function Wy(){ow=!1}var oh=null;function _I(t){if(lI&&z.observeMutations){var e=t.treeCallback,n=e===void 0?Qf:e,r=t.nodeCallback,i=r===void 0?Qf:r,o=t.pseudoElementsCallback,s=o===void 0?Qf:o,a=t.observeMutationsRoot,l=a===void 0?xe:a;oh=new lI(function(u){if(!ow){var c=Ni();Pa(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!vI(f.addedNodes[0])&&(z.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&z.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&vI(f.target)&&~une.indexOf(f.attributeName))if(f.attributeName==="class"&&Gne(f.target)){var d=Gp(J_(f.target)),h=d.prefix,g=d.iconName;f.target.setAttribute(Q_,h||c),g&&f.target.setAttribute(Y_,g)}else Kne(f.target)&&i(f.target)})}}),Wr&&oh.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Zne(){oh&&oh.disconnect()}function ere(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function tre(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Gp(J_(t));return i.prefix||(i.prefix=Ni()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=One(i.prefix,t.innerText)||tw(i.prefix,Ly(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function nre(t){var e=Pa(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Du()):(e["aria-hidden"]="true",e.focusable="false")),e}function rre(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ir,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=tre(t),r=n.iconName,i=n.prefix,o=n.rest,s=nre(t),a=Vy("parseNodeAttributes",{},t),l=e.styleParser?ere(t):[];return j({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:ir,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var ire=$n.styles;function yN(t){var e=z.autoReplaceSvg==="nest"?wI(t,{styleParser:!1}):wI(t);return~e.extra.classes.indexOf(eN)?jr("generateLayersText",t,e):jr("generateSvgReplacementMutation",t,e)}var Di=new Set;X_.map(function(t){Di.add("fa-".concat(t))});Object.keys(Pu[be]).map(Di.add.bind(Di));Object.keys(Pu[Ve]).map(Di.add.bind(Di));Di=gc(Di);function EI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wr)return Promise.resolve();var n=xe.documentElement.classList,r=function(f){return n.add("".concat(uI,"-").concat(f))},i=function(f){return n.remove("".concat(uI,"-").concat(f))},o=z.autoFetchSvg?Di:X_.map(function(c){return"fa-".concat(c)}).concat(Object.keys(ire));o.includes("fa")||o.push("fa");var s=[".".concat(eN,":not([").concat(Oo,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Oo,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Pa(t.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=iw.begin("onTree"),u=a.reduce(function(c,f){try{var d=yN(f);d&&c.push(d)}catch(h){ZO||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){gN(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),f(d)})})}function ore(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yN(t).then(function(n){n&&gN([n],e)})}function sre(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Fy(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Fy(i||{})),t(r,j(j({},n),{},{mask:i}))}}var are=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ir:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,h=n.titleId,g=h===void 0?null:h,m=n.classes,_=m===void 0?[]:m,v=n.attributes,p=v===void 0?{}:v,y=n.styles,E=y===void 0?{}:y;if(e){var S=e.prefix,I=e.iconName,T=e.icon;return Kp(j({type:"icon"},e),function(){return No("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(d?p["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(g||Du()):(p["aria-hidden"]="true",p.focusable="false")),rw({icons:{main:Uy(T),mask:l?Uy(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:I,transform:j(j({},ir),i),symbol:s,title:d,maskId:c,titleId:g,extra:{attributes:p,styles:E,classes:_}})})}},lre={mixout:function(){return{icon:sre(are)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=EI,n.nodeCallback=ore,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?xe:r,o=n.callback,s=o===void 0?function(){}:o;return EI(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(h,g){Promise.all([zy(i,a),c.iconName?zy(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var _=G_(m,2),v=_[0],p=_[1];h([n,rw({icons:{main:v,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=Hp(a);l.length>0&&(i.style=l);var u;return Z_(s)&&(u=jr("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},ure={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Kp({type:"layer"},function(){No("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(gc(o)).join(" ")},children:s}]})}}}},cre={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Kp({type:"counter",content:n},function(){return No("beforeDOMElementCreation",{content:n,params:r}),Bne({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(gc(a))}})})}}}},fre={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?ir:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,h=d===void 0?{}:d;return Kp({type:"text",content:n},function(){return No("beforeDOMElementCreation",{content:n,params:r}),mI({content:n,transform:j(j({},ir),o),title:a,extra:{attributes:f,styles:h,classes:["".concat(z.cssPrefix,"-layers-text")].concat(gc(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(YO){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,mI({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},dre=new RegExp('"',"ug"),SI=[1105920,1112319];function hre(t){var e=t.replace(dre,""),n=Cne(e,0),r=n>=SI[0]&&n<=SI[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ly(i?e[0]:e),isSecondary:r||i}}function bI(t,e){var n="".concat(tne).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=Pa(t.children),s=o.filter(function(T){return T.getAttribute(My)===e})[0],a=Oi.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(sne),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Ve:be,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ru[d][l[2].toLowerCase()]:ane[d][u],g=hre(f),m=g.value,_=g.isSecondary,v=l[0].startsWith("FontAwesome"),p=tw(h,m),y=p;if(v){var E=Nne(m);E.iconName&&E.prefix&&(p=E.iconName,h=E.prefix)}if(p&&!_&&(!s||s.getAttribute(Q_)!==h||s.getAttribute(Y_)!==y)){t.setAttribute(n,y),s&&t.removeChild(s);var S=rre(),I=S.extra;I.attributes[My]=e,zy(p,h).then(function(T){var O=rw(j(j({},S),{},{icons:{main:T,mask:nw()},prefix:h,iconName:y,extra:I,watchable:!0})),$=xe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=O.map(function(R){return yc(R)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function pre(t){return Promise.all([bI(t,"::before"),bI(t,"::after")])}function mre(t){return t.parentNode!==document.head&&!~rne.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(My)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function TI(t){if(Wr)return new Promise(function(e,n){var r=Pa(t.querySelectorAll("*")).filter(mre).map(pre),i=iw.begin("searchPseudoElements");vN(),Promise.all(r).then(function(){i(),Wy(),e()}).catch(function(){i(),Wy(),n()})})}var gre={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=TI,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?xe:r;z.searchPseudoElements&&TI(i)}}},II=!1,vre={mixout:function(){return{dom:{unwatch:function(){vN(),II=!0}}}},hooks:function(){return{bootstrap:function(){_I(Vy("mutationObserverCallbacks",{}))},noAuto:function(){Zne()},watch:function(n){var r=n.observeMutationsRoot;II?Wy():_I(Vy("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},CI=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},yre={mixout:function(){return{parse:{transform:function(n){return CI(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=CI(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},h={outer:a,inner:f,path:d};return{tag:"g",attributes:j({},h.outer),children:[{tag:"g",attributes:j({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),h.path)}]}]}}}},bg={x:0,y:0,width:"100%",height:"100%"};function xI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function _re(t){return t.tag==="g"?t.children:[t]}var wre={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Gp(i.split(" ").map(function(s){return s.trim()})):nw();return o.prefix||(o.prefix=Ni()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,d=s.icon,h=yne({transform:l,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:j(j({},bg),{},{fill:"white"})},m=c.children?{children:c.children.map(xI)}:{},_={tag:"g",attributes:j({},h.inner),children:[xI(j({tag:c.tag,attributes:j(j({},c.attributes),h.path)},m))]},v={tag:"g",attributes:j({},h.outer),children:[_]},p="mask-".concat(a||Du()),y="clip-".concat(a||Du()),E={tag:"mask",attributes:j(j({},bg),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:_re(d)},E]};return r.push(S,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(p,")")},bg)}),{children:r,attributes:i}}}},Ere={provides:function(e){var n=!1;Oi.matchMedia&&(n=Oi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=j(j({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:j(j({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:j(j({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:j(j({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Sre={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},bre=[Ene,lre,ure,cre,fre,gre,vre,yre,wre,Ere,Sre];Mne(bre,{mixoutsTo:hn});hn.noAuto;hn.config;hn.library;hn.dom;var Hy=hn.parse;hn.findIconDefinition;hn.toHtml;var Tre=hn.icon;hn.layer;hn.text;hn.counter;function kI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kI(Object(n),!0).forEach(function(r){vs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function sh(t){"@babel/helpers - typeof";return sh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sh(t)}function vs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ire(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Cre(t,e){if(t==null)return{};var n=Ire(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function qy(t){return xre(t)||kre(t)||Are(t)||Pre()}function xre(t){if(Array.isArray(t))return Gy(t)}function kre(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Are(t,e){if(t){if(typeof t=="string")return Gy(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gy(t,e)}}function Gy(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Pre(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rre(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,h=t.inverse,g=t.border,m=t.listItem,_=t.flip,v=t.size,p=t.rotation,y=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":h,"fa-border":g,"fa-li":m,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},vs(e,"fa-".concat(v),typeof v<"u"&&v!==null),vs(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),vs(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),vs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function Ore(t){return t=t-0,t===t}function _N(t){return Ore(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Nre=["style"];function Dre(t){return t.charAt(0).toUpperCase()+t.slice(1)}function $re(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=_N(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[Dre(i)]=o:e[i]=o,e},{})}function wN(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return wN(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=$re(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[_N(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=Cre(n,Nre);return i.attrs.style=fi(fi({},i.attrs.style),s),t.apply(void 0,[e.tag,fi(fi({},i.attrs),a)].concat(qy(r)))}var EN=!1;try{EN=!0}catch{}function Mre(){if(!EN&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function AI(t){if(t&&sh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Hy.icon)return Hy.icon(t);if(t===null)return null;if(t&&sh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Tg(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?vs({},t,e):{}}var Ra=H.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,o=t.className,s=t.title,a=t.titleId,l=t.maskId,u=AI(n),c=Tg("classes",[].concat(qy(Rre(t)),qy(o.split(" ")))),f=Tg("transform",typeof t.transform=="string"?Hy.transform(t.transform):t.transform),d=Tg("mask",AI(r)),h=Tre(u,fi(fi(fi(fi({},c),f),d),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!h)return Mre("Could not find icon",u),null;var g=h.abstract,m={ref:e};return Object.keys(t).forEach(function(_){Ra.defaultProps.hasOwnProperty(_)||(m[_]=t[_])}),Lre(g[0],m)});Ra.displayName="FontAwesomeIcon";Ra.propTypes={beat:F.bool,border:F.bool,beatFade:F.bool,bounce:F.bool,className:F.string,fade:F.bool,flash:F.bool,mask:F.oneOfType([F.object,F.array,F.string]),maskId:F.string,fixedWidth:F.bool,inverse:F.bool,flip:F.oneOf([!0,!1,"horizontal","vertical","both"]),icon:F.oneOfType([F.object,F.array,F.string]),listItem:F.bool,pull:F.oneOf(["right","left"]),pulse:F.bool,rotation:F.oneOf([0,90,180,270]),shake:F.bool,size:F.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:F.bool,spinPulse:F.bool,spinReverse:F.bool,symbol:F.oneOfType([F.bool,F.string]),title:F.string,titleId:F.string,transform:F.oneOfType([F.string,F.object]),swapOpacity:F.bool};Ra.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Lre=wN.bind(null,H.createElement),jre={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},Vre={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const Fre=A(Ra)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: rgb(114, 137, 218);
    }
`,Ure=A(Ra)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: rgb(205, 32, 31);
    }
`,zre=()=>w.jsx(Fre,{icon:jre,size:"2x"}),Bre=()=>w.jsx(Ure,{icon:Vre,size:"2x"}),Wre=A.footer`
    margin-top: 50px;
    width: 100%;
    display: flex;
    // justify-content: space-between;
    background-color: rgb(21, 23, 23);
`,Hre=A.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-right: 100px;
    padding: 20px;

    h1 {
        color: #fff;
    }
`,qre=A.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    h1 {
        color: #fff;
    }
`,Yr=A(Q0)`
    text-decoration: none;
    font-weight: bold;
    color: rgb(115, 115, 115);
    padding: 10px 0 10px 0;
    transition: 0.6s ease;

    &:hover {
        color: #fff;
    }

`,Gre=A.div`
    display: flex;
`,Kre=A(zO)`
    color: rgb(115, 115, 115);
    border-radius: 10px;
    margin-right: 15px;

    &:hover {
        background: #d6249f;
        background: radial-gradient(circle at 0% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        box-shadow: 0px 3px 10px rgba(0,0,0,.25);
        transition: 1s ease-out;
    }
`,Qre=A(WO)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: #3b5998;
    }
`,Yre=()=>w.jsxs(Wre,{children:[w.jsxs(Hre,{children:[w.jsx("h1",{children:"Information"}),w.jsx(Yr,{to:"/about",children:"About"}),w.jsx(Yr,{to:"/conventions",children:"Conventions"}),w.jsx(Yr,{to:"/mentoring",children:"Mentoring"}),w.jsx(Yr,{to:"/contact",children:"Contact Me"})]}),w.jsxs(qre,{children:[w.jsx("h1",{children:"Follow me on Social Media!"}),w.jsxs(Gre,{children:[w.jsx(Yr,{children:w.jsx(Kre,{fontSize:"large"})}),w.jsx(Yr,{children:w.jsx(Qre,{fontSize:"large"})}),w.jsx(Yr,{children:w.jsx(zre,{})}),w.jsx(Yr,{children:w.jsx(Bre,{})})]})]})]}),Xre=()=>w.jsxs("div",{children:[w.jsx($te,{}),w.jsx("section",{children:w.jsx(Yre,{})})]}),Jre=A.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`,Zre=A.div`
    width: 70%;
    font-family: "Architects Daughter", cursive;
`,eie=()=>w.jsx(Jre,{children:w.jsxs(Zre,{children:[w.jsx("h1",{children:"About the artist"}),w.jsxs("p",{children:["Sandra Sanchez, a distinguished artist from Southern California, seamlessly blends the realms of traditional fantasy and realistic portrait art to create the vivid and luminous pieces she is known for today.",w.jsx("br",{}),w.jsx("br",{}),"Her artistic journey traces back to childhood visits to The Getty Museum in Los Angeles, where the profound influence of the Old Masters ignited a passion for technically and emotionally rich painting. Guided by a desire to elevate her craft, Sandra embarked on a new artistic journey, completing the core program at the prestigious Grand Central Atelier after graduating high school. This experience became the bedrock for her commitment to mastering the intricacies of traditional painting.",w.jsx("br",{}),w.jsx("br",{}),"Upon moving back to California in 2022, Sandra made a conscious decision to weave her cherished childhood influences into her canvases by painting subjects from favorite her favorite movies, video games and anime. She brings a totally unique fusion of classical and contemporary elements to her work.",w.jsx("br",{}),w.jsx("br",{}),"Sandra's artistic prowess extends beyond the confines of classical art, allowing her to skillfully render fantasy subjects with a nuanced touch. Her paintings not only showcase technical mastery but also exude a profound connection to humanity. Through the interplay of sensitive light and fluid composition, she captures the essence of her subjects and can create a powerful visual impact.",w.jsx("br",{}),w.jsx("br",{}),"Acknowledged for her exceptional talent, Sandra is a recipient of prestigious awards, including the Anders Larson-Toich Fund Scholarship, the Alma Schapiro Fund Scholarship, and the Neil Patterson Award of Excellence. As a two-time Hudson River Fellow, she continues to evolve as an artist, consistently breathing life and energy into her art, ensuring the spirit of her subjects resonates in every stroke."]}),w.jsx("br",{}),w.jsx("br",{})]})}),tie=()=>w.jsx("div",{children:w.jsx("h1",{children:"I am the mentoring page!"})}),nie=()=>w.jsx("div",{children:w.jsx("h1",{children:"I am the contact me page!"})}),rie=A.div`
    display: flex;
    flex-direction: column;
`,iie=A.div`
    display: flex;
    justify-content: flex-end;
`,oie=A.span`
    color: rgb(255, 51, 153);
    font-weight: bold;
`,SN="rgb(255, 51, 153)",sie="black",Ky=bo`
  top: -14px;
  font-size: 12px;
  color: ${sie};
`,bN=A.label`
  color: ${SN};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  //if shrink is truthy, then apply the shrinkLabelStyles
  //destructuring shrink directly off of props
  ${({shrink:t})=>t&&Ky};

  //alternative, does the same thing
  // ${t=>t.shrink&&Ky};
`,aie=A.input`
  background: none;
  background-color: white;
  color: ${SN};
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
  
  &:focus ~ ${bN} {
    ${Ky};
  }
`,lie=A.div`
  position: relative;
  margin: 50px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`,ys=({label:t,...e})=>w.jsxs(lie,{children:[w.jsx(aie,{...e}),t&&w.jsx(bN,{shrink:!!(e.value&&typeof e.value=="string"&&e.value.length),children:t})]}),uie=()=>{const t=Ur(),[e,n]=b.useState({displayName:"",email:"",password:"",confirmPassword:""}),{displayName:r,email:i,password:o,confirmPassword:s}=e,{currentUser:a,setCurrentUser:l}=b.useContext(Wp),u=d=>{const{name:h,value:g}=d.target;n({...e,[h]:g})},c=()=>{n({displayName:"",email:"",password:"",confirmPassword:""})},f=async d=>{if(d.preventDefault(),o!==s){alert("Passwords do not match!");return}try{const h=await Kee(i,o);if(h){const{user:g}=h;await F_(g,{displayName:r}),l(g)}}catch(h){console.log(h)}c()};return a&&t("/"),w.jsxs(rie,{children:[w.jsx("h2",{children:"Sign Up!"}),w.jsx(oie,{children:"Create an account with email and password"}),w.jsxs("form",{onSubmit:f,children:[w.jsx(ys,{label:"User Name",type:"text",name:"displayName",value:r,required:!0,onChange:u}),w.jsx(ys,{label:"Email",type:"text",name:"email",value:i,required:!0,onChange:u}),w.jsx(ys,{label:"Password",type:"password",name:"password",value:o,required:!0,onChange:u}),w.jsx(ys,{label:"Confirm Password",type:"password",name:"confirmPassword",value:s,required:!0,onChange:u}),w.jsx(iie,{children:w.jsx(Cn,{isLoading:!1,buttonType:Qe.google,children:"Sign Up"})})]})]})},cie=A.div`
    display: flex;
    flex-direction: column;
`,fie=A.div`
    display: flex;
    justify-content: space-evenly;
`,die=A.span`
    color: rgb(255, 51, 153);
    font-weight: bold;
`,hie=()=>{const t=Ur(),{currentUser:e,setCurrentUser:n}=b.useContext(Wp),[r,i]=b.useState({email:"",password:""}),{email:o,password:s}=r,a=f=>{const{name:d,value:h}=f.target;i({...r,[d]:h})},l=()=>{i({email:"",password:""})},u=async f=>{f.preventDefault();try{const d=await Gee(o,s);if(console.log(d),d){const{user:h}=d;n(h)}}catch(d){console.log(`There was an error signing in: ${d}`)}l()},c=async()=>{try{const f=await Hee();if(console.log(f),f){const{user:d}=f;await F_(d),n(d)}}catch(f){console.log(f)}};return e&&t("/"),w.jsxs(cie,{children:[w.jsx("h2",{children:"Already have an account?"}),w.jsx(die,{children:"Sign in with your email and password"}),w.jsxs("form",{onSubmit:u,children:[w.jsx(ys,{label:"email",type:"email",name:"email",value:o,required:!0,onChange:a}),w.jsx(ys,{label:"password",type:"password",name:"password",value:s,required:!0,onChange:a}),w.jsxs(fie,{children:[w.jsx(Cn,{buttonType:Qe.default,children:"Sign In With Email"}),w.jsx(Cn,{buttonType:Qe.google,type:"submit",onClick:c,children:"Sign In With Google"})]})]})]})},pie=A.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 30px auto;
`,mie=()=>w.jsxs(pie,{children:[w.jsx(hie,{}),w.jsx(uie,{})]}),gie=A.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    margin: 20px;
`,TN=A.div`
    width: 100%;
    position: absolute; //relative to nearest positioned ancestor (i.e nearest parent element w/ position value of relative, absolute, or fixed. In this case, is the relatively positioned ProductCardContainer)
    top: 350px;
    display: none;
`;A.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${({imageurl:t})=>`url(${t})`};
`;const vie=A.div`
    margin: 20px;
    font-family: "Caveat", cursive;
    font-weight: 700;
    font-size: 20px;
`,yie=A.div`
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

    &:hover ${TN} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`,_ie=({product:t})=>{const{name:e,imageUrl:n,id:r}=t,i=Ur(),o=()=>i(`${r}`,{state:{product:t}});return w.jsxs(yie,{children:[w.jsx("img",{src:n,alt:e}),w.jsx(vie,{children:e}),w.jsx(TN,{children:w.jsx(Cn,{isLoading:!1,buttonType:Qe.default,onClick:o,children:"View Details"})})]})},wie=()=>{const{categoriesMap:t}=b.useContext(X0),{category:e}=X4(),[n,r]=b.useState(t[e]);return b.useEffect(()=>{r(t[e])},[t,e]),console.log(n),w.jsx(gie,{children:n&&n.map(i=>w.jsx(_ie,{product:i,children:i.sizesAndPrices.map(o=>w.jsxs("div",{children:["Size: ",o.size,", Price: ",o.price]},o.size))},i.id))})};var IN={},sw={},aw={};Object.defineProperty(aw,"__esModule",{value:!0});var PI="html",RI="head",ff="body",Eie=/<([a-zA-Z]+[0-9]?)/,OI=/<head[^]*>/i,NI=/<body[^]*>/i,ah=function(t,e){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},Qy=function(t,e){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},DI=typeof window=="object"&&window.DOMParser;if(typeof DI=="function"){var Sie=new DI,bie="text/html";Qy=function(t,e){return e&&(t="<".concat(e,">").concat(t,"</").concat(e,">")),Sie.parseFromString(t,bie)},ah=Qy}if(typeof document=="object"&&document.implementation){var df=document.implementation.createHTMLDocument();ah=function(t,e){if(e){var n=df.documentElement.querySelector(e);return n&&(n.innerHTML=t),df}return df.documentElement.innerHTML=t,df}}var hf=typeof document=="object"&&document.createElement("template"),Yy;hf&&hf.content&&(Yy=function(t){return hf.innerHTML=t,hf.content.childNodes});function Tie(t){var e,n,r=t.match(Eie),i=r&&r[1]?r[1].toLowerCase():"";switch(i){case PI:{var o=Qy(t);if(!OI.test(t)){var s=o.querySelector(RI);(e=s==null?void 0:s.parentNode)===null||e===void 0||e.removeChild(s)}if(!NI.test(t)){var s=o.querySelector(ff);(n=s==null?void 0:s.parentNode)===null||n===void 0||n.removeChild(s)}return o.querySelectorAll(PI)}case RI:case ff:{var a=ah(t).querySelectorAll(i);return NI.test(t)&&OI.test(t)?a[0].parentNode.childNodes:a}default:{if(Yy)return Yy(t);var s=ah(t,ff).querySelector(ff);return s.childNodes}}}aw.default=Tie;var sa={},lw={},uw={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0;var e;(function(r){r.Root="root",r.Text="text",r.Directive="directive",r.Comment="comment",r.Script="script",r.Style="style",r.Tag="tag",r.CDATA="cdata",r.Doctype="doctype"})(e=t.ElementType||(t.ElementType={}));function n(r){return r.type===e.Tag||r.type===e.Script||r.type===e.Style}t.isTag=n,t.Root=e.Root,t.Text=e.Text,t.Directive=e.Directive,t.Comment=e.Comment,t.Script=e.Script,t.Style=e.Style,t.Tag=e.Tag,t.CDATA=e.CDATA,t.Doctype=e.Doctype})(uw);var ee={},Bi=Re&&Re.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ml=Re&&Re.__assign||function(){return Ml=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ml.apply(this,arguments)};Object.defineProperty(ee,"__esModule",{value:!0});ee.cloneNode=ee.hasChildren=ee.isDocument=ee.isDirective=ee.isComment=ee.isText=ee.isCDATA=ee.isTag=ee.Element=ee.Document=ee.CDATA=ee.NodeWithChildren=ee.ProcessingInstruction=ee.Comment=ee.Text=ee.DataNode=ee.Node=void 0;var Zt=uw,cw=function(){function t(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),t.prototype.cloneNode=function(e){return e===void 0&&(e=!1),fw(this,e)},t}();ee.Node=cw;var Qp=function(t){Bi(e,t);function e(n){var r=t.call(this)||this;return r.data=n,r}return Object.defineProperty(e.prototype,"nodeValue",{get:function(){return this.data},set:function(n){this.data=n},enumerable:!1,configurable:!0}),e}(cw);ee.DataNode=Qp;var CN=function(t){Bi(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.type=Zt.ElementType.Text,n}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),e}(Qp);ee.Text=CN;var xN=function(t){Bi(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.type=Zt.ElementType.Comment,n}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),e}(Qp);ee.Comment=xN;var kN=function(t){Bi(e,t);function e(n,r){var i=t.call(this,r)||this;return i.name=n,i.type=Zt.ElementType.Directive,i}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),e}(Qp);ee.ProcessingInstruction=kN;var Yp=function(t){Bi(e,t);function e(n){var r=t.call(this)||this;return r.children=n,r}return Object.defineProperty(e.prototype,"firstChild",{get:function(){var n;return(n=this.children[0])!==null&&n!==void 0?n:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"childNodes",{get:function(){return this.children},set:function(n){this.children=n},enumerable:!1,configurable:!0}),e}(cw);ee.NodeWithChildren=Yp;var AN=function(t){Bi(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.type=Zt.ElementType.CDATA,n}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),e}(Yp);ee.CDATA=AN;var PN=function(t){Bi(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.type=Zt.ElementType.Root,n}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),e}(Yp);ee.Document=PN;var RN=function(t){Bi(e,t);function e(n,r,i,o){i===void 0&&(i=[]),o===void 0&&(o=n==="script"?Zt.ElementType.Script:n==="style"?Zt.ElementType.Style:Zt.ElementType.Tag);var s=t.call(this,i)||this;return s.name=n,s.attribs=r,s.type=o,s}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tagName",{get:function(){return this.name},set:function(n){this.name=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"attributes",{get:function(){var n=this;return Object.keys(this.attribs).map(function(r){var i,o;return{name:r,value:n.attribs[r],namespace:(i=n["x-attribsNamespace"])===null||i===void 0?void 0:i[r],prefix:(o=n["x-attribsPrefix"])===null||o===void 0?void 0:o[r]}})},enumerable:!1,configurable:!0}),e}(Yp);ee.Element=RN;function ON(t){return(0,Zt.isTag)(t)}ee.isTag=ON;function NN(t){return t.type===Zt.ElementType.CDATA}ee.isCDATA=NN;function DN(t){return t.type===Zt.ElementType.Text}ee.isText=DN;function $N(t){return t.type===Zt.ElementType.Comment}ee.isComment=$N;function MN(t){return t.type===Zt.ElementType.Directive}ee.isDirective=MN;function LN(t){return t.type===Zt.ElementType.Root}ee.isDocument=LN;function Iie(t){return Object.prototype.hasOwnProperty.call(t,"children")}ee.hasChildren=Iie;function fw(t,e){e===void 0&&(e=!1);var n;if(DN(t))n=new CN(t.data);else if($N(t))n=new xN(t.data);else if(ON(t)){var r=e?Ig(t.children):[],i=new RN(t.name,Ml({},t.attribs),r);r.forEach(function(l){return l.parent=i}),t.namespace!=null&&(i.namespace=t.namespace),t["x-attribsNamespace"]&&(i["x-attribsNamespace"]=Ml({},t["x-attribsNamespace"])),t["x-attribsPrefix"]&&(i["x-attribsPrefix"]=Ml({},t["x-attribsPrefix"])),n=i}else if(NN(t)){var r=e?Ig(t.children):[],o=new AN(r);r.forEach(function(u){return u.parent=o}),n=o}else if(LN(t)){var r=e?Ig(t.children):[],s=new PN(r);r.forEach(function(u){return u.parent=s}),t["x-mode"]&&(s["x-mode"]=t["x-mode"]),n=s}else if(MN(t)){var a=new kN(t.name,t.data);t["x-name"]!=null&&(a["x-name"]=t["x-name"],a["x-publicId"]=t["x-publicId"],a["x-systemId"]=t["x-systemId"]),n=a}else throw new Error("Not implemented yet: ".concat(t.type));return n.startIndex=t.startIndex,n.endIndex=t.endIndex,t.sourceCodeLocation!=null&&(n.sourceCodeLocation=t.sourceCodeLocation),n}ee.cloneNode=fw;function Ig(t){for(var e=t.map(function(r){return fw(r,!0)}),n=1;n<e.length;n++)e[n].prev=e[n-1],e[n-1].next=e[n];return e}(function(t){var e=Re&&Re.__createBinding||(Object.create?function(a,l,u,c){c===void 0&&(c=u);var f=Object.getOwnPropertyDescriptor(l,u);(!f||("get"in f?!l.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return l[u]}}),Object.defineProperty(a,c,f)}:function(a,l,u,c){c===void 0&&(c=u),a[c]=l[u]}),n=Re&&Re.__exportStar||function(a,l){for(var u in a)u!=="default"&&!Object.prototype.hasOwnProperty.call(l,u)&&e(l,a,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.DomHandler=void 0;var r=uw,i=ee;n(ee,t);var o={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},s=function(){function a(l,u,c){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof u=="function"&&(c=u,u=o),typeof l=="object"&&(u=l,l=void 0),this.callback=l??null,this.options=u??o,this.elementCB=c??null}return a.prototype.onparserinit=function(l){this.parser=l},a.prototype.onreset=function(){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},a.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},a.prototype.onerror=function(l){this.handleCallback(l)},a.prototype.onclosetag=function(){this.lastNode=null;var l=this.tagStack.pop();this.options.withEndIndices&&(l.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(l)},a.prototype.onopentag=function(l,u){var c=this.options.xmlMode?r.ElementType.Tag:void 0,f=new i.Element(l,u,void 0,c);this.addNode(f),this.tagStack.push(f)},a.prototype.ontext=function(l){var u=this.lastNode;if(u&&u.type===r.ElementType.Text)u.data+=l,this.options.withEndIndices&&(u.endIndex=this.parser.endIndex);else{var c=new i.Text(l);this.addNode(c),this.lastNode=c}},a.prototype.oncomment=function(l){if(this.lastNode&&this.lastNode.type===r.ElementType.Comment){this.lastNode.data+=l;return}var u=new i.Comment(l);this.addNode(u),this.lastNode=u},a.prototype.oncommentend=function(){this.lastNode=null},a.prototype.oncdatastart=function(){var l=new i.Text(""),u=new i.CDATA([l]);this.addNode(u),l.parent=u,this.lastNode=l},a.prototype.oncdataend=function(){this.lastNode=null},a.prototype.onprocessinginstruction=function(l,u){var c=new i.ProcessingInstruction(l,u);this.addNode(c)},a.prototype.handleCallback=function(l){if(typeof this.callback=="function")this.callback(l,this.dom);else if(l)throw l},a.prototype.addNode=function(l){var u=this.tagStack[this.tagStack.length-1],c=u.children[u.children.length-1];this.options.withStartIndices&&(l.startIndex=this.parser.startIndex),this.options.withEndIndices&&(l.endIndex=this.parser.endIndex),u.children.push(l),c&&(l.prev=c,c.next=l),l.parent=u,this.lastNode=null},a}();t.DomHandler=s,t.default=s})(lw);var jN={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES=void 0,t.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES.reduce(function(e,n){return e[n.toLowerCase()]=n,e},{})})(jN);Object.defineProperty(sa,"__esModule",{value:!0});sa.formatDOM=sa.formatAttributes=void 0;var pf=lw,Cie=jN;function xie(t){return Cie.CASE_SENSITIVE_TAG_NAMES_MAP[t]}function VN(t){for(var e={},n=0,r=t.length;n<r;n++){var i=t[n];e[i.name]=i.value}return e}sa.formatAttributes=VN;function kie(t){t=t.toLowerCase();var e=xie(t);return e||t}function FN(t,e,n){e===void 0&&(e=null);for(var r=[],i,o=0,s=t.length;o<s;o++){var a=t[o];switch(a.nodeType){case 1:{var l=kie(a.nodeName);i=new pf.Element(l,VN(a.attributes)),i.children=FN(l==="template"?a.content.childNodes:a.childNodes,i);break}case 3:i=new pf.Text(a.nodeValue);break;case 8:i=new pf.Comment(a.nodeValue);break;default:continue}var u=r[o-1]||null;u&&(u.next=i),i.parent=e,i.prev=u,i.next=null,r.push(i)}return n&&(i=new pf.ProcessingInstruction(n.substring(0,n.indexOf(" ")).toLowerCase(),n),i.next=r[0]||null,i.parent=e,r.unshift(i),r[1]&&(r[1].prev=r[0])),r}sa.formatDOM=FN;var Aie=Re&&Re.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(sw,"__esModule",{value:!0});var Pie=Aie(aw),Rie=sa,Oie=/<(![a-zA-Z\s]+)>/;function Nie(t){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];var e=t.match(Oie),n=e?e[1]:void 0;return(0,Rie.formatDOM)((0,Pie.default)(t),null,n)}sw.default=Nie;var Xp={},Wn={},Jp={},Die=0;Jp.SAME=Die;var $ie=1;Jp.CAMELCASE=$ie;Jp.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};const UN=0,Wi=1,Zp=2,em=3,dw=4,zN=5,BN=6;function Mie(t){return Tt.hasOwnProperty(t)?Tt[t]:null}function Ht(t,e,n,r,i,o,s){this.acceptsBooleans=e===Zp||e===em||e===dw,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}const Tt={},Lie=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];Lie.forEach(t=>{Tt[t]=new Ht(t,UN,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([t,e])=>{Tt[t]=new Ht(t,Wi,!1,e,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(t=>{Tt[t]=new Ht(t,Zp,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(t=>{Tt[t]=new Ht(t,Zp,!1,t,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(t=>{Tt[t]=new Ht(t,em,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(t=>{Tt[t]=new Ht(t,em,!0,t,null,!1,!1)});["capture","download"].forEach(t=>{Tt[t]=new Ht(t,dw,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(t=>{Tt[t]=new Ht(t,BN,!1,t,null,!1,!1)});["rowSpan","start"].forEach(t=>{Tt[t]=new Ht(t,zN,!1,t.toLowerCase(),null,!1,!1)});const hw=/[\-\:]([a-z])/g,pw=t=>t[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(t=>{const e=t.replace(hw,pw);Tt[e]=new Ht(e,Wi,!1,t,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(t=>{const e=t.replace(hw,pw);Tt[e]=new Ht(e,Wi,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(t=>{const e=t.replace(hw,pw);Tt[e]=new Ht(e,Wi,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(t=>{Tt[t]=new Ht(t,Wi,!1,t.toLowerCase(),null,!1,!1)});const jie="xlinkHref";Tt[jie]=new Ht("xlinkHref",Wi,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(t=>{Tt[t]=new Ht(t,Wi,!1,t.toLowerCase(),null,!0,!0)});const{CAMELCASE:Vie,SAME:Fie,possibleStandardNames:$I}=Jp,Uie=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",zie=Uie+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",Bie=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+zie+"]*$")),Wie=Object.keys($I).reduce((t,e)=>{const n=$I[e];return n===Fie?t[e]=e:n===Vie?t[e.toLowerCase()]=e:t[e]=n,t},{});Wn.BOOLEAN=em;Wn.BOOLEANISH_STRING=Zp;Wn.NUMERIC=zN;Wn.OVERLOADED_BOOLEAN=dw;Wn.POSITIVE_NUMERIC=BN;Wn.RESERVED=UN;Wn.STRING=Wi;Wn.getPropertyInfo=Mie;Wn.isCustomAttribute=Bie;Wn.possibleStandardNames=Wie;var mw={},gw={},vw={},MI=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Hie=/\n/g,qie=/^\s*/,Gie=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Kie=/^:\s*/,Qie=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Yie=/^[;\s]*/,Xie=/^\s+|\s+$/g,Jie=`
`,LI="/",jI="*",Xi="",Zie="comment",eoe="declaration",toe=function(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,r=1;function i(g){var m=g.match(Hie);m&&(n+=m.length);var _=g.lastIndexOf(Jie);r=~_?g.length-_:r+g.length}function o(){var g={line:n,column:r};return function(m){return m.position=new s(g),u(),m}}function s(g){this.start=g,this.end={line:n,column:r},this.source=e.source}s.prototype.content=t;function a(g){var m=new Error(e.source+":"+n+":"+r+": "+g);if(m.reason=g,m.filename=e.source,m.line=n,m.column=r,m.source=t,!e.silent)throw m}function l(g){var m=g.exec(t);if(m){var _=m[0];return i(_),t=t.slice(_.length),m}}function u(){l(qie)}function c(g){var m;for(g=g||[];m=f();)m!==!1&&g.push(m);return g}function f(){var g=o();if(!(LI!=t.charAt(0)||jI!=t.charAt(1))){for(var m=2;Xi!=t.charAt(m)&&(jI!=t.charAt(m)||LI!=t.charAt(m+1));)++m;if(m+=2,Xi===t.charAt(m-1))return a("End of comment missing");var _=t.slice(2,m-2);return r+=2,i(_),t=t.slice(m),r+=2,g({type:Zie,comment:_})}}function d(){var g=o(),m=l(Gie);if(m){if(f(),!l(Kie))return a("property missing ':'");var _=l(Qie),v=g({type:eoe,property:VI(m[0].replace(MI,Xi)),value:_?VI(_[0].replace(MI,Xi)):Xi});return l(Yie),v}}function h(){var g=[];c(g);for(var m;m=d();)m!==!1&&(g.push(m),c(g));return g}return u(),h()};function VI(t){return t?t.replace(Xie,Xi):Xi}var noe=Re&&Re.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(vw,"__esModule",{value:!0});var roe=noe(toe);function ioe(t,e){var n=null;if(!t||typeof t!="string")return n;var r=(0,roe.default)(t),i=typeof e=="function";return r.forEach(function(o){if(o.type==="declaration"){var s=o.property,a=o.value;i?e(s,a,o):a&&(n=n||{},n[s]=a)}}),n}vw.default=ioe;var tm={};Object.defineProperty(tm,"__esModule",{value:!0});tm.camelCase=void 0;var ooe=/^--[a-zA-Z0-9-]+$/,soe=/-([a-z])/g,aoe=/^[^-]+$/,loe=/^-(webkit|moz|ms|o|khtml)-/,uoe=/^-(ms)-/,coe=function(t){return!t||aoe.test(t)||ooe.test(t)},foe=function(t,e){return e.toUpperCase()},FI=function(t,e){return"".concat(e,"-")},doe=function(t,e){return e===void 0&&(e={}),coe(t)?t:(t=t.toLowerCase(),e.reactCompat?t=t.replace(uoe,FI):t=t.replace(loe,FI),t.replace(soe,foe))};tm.camelCase=doe;var hoe=Re&&Re.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(gw,"__esModule",{value:!0});var poe=hoe(vw),moe=tm;function goe(t,e){var n={};return!t||typeof t!="string"||(0,poe.default)(t,function(r,i){r&&i&&(n[(0,moe.camelCase)(r,e)]=i)}),n}gw.default=goe;(function(t){var e=Re&&Re.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(t,"__esModule",{value:!0}),t.returnFirstArg=t.canTextBeChildOfNode=t.ELEMENTS_WITH_NO_TEXT_CHILDREN=t.PRESERVE_CUSTOM_ATTRIBUTES=t.setStyleProp=t.isCustomComponent=void 0;var n=b,r=e(gw),i=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function o(c,f){return c.includes("-")?!i.has(c):!!(f&&typeof f.is=="string")}t.isCustomComponent=o;var s={reactCompat:!0};function a(c,f){if(typeof c=="string"){if(!c.trim()){f.style={};return}try{f.style=(0,r.default)(c,s)}catch{f.style={}}}}t.setStyleProp=a,t.PRESERVE_CUSTOM_ATTRIBUTES=Number(n.version.split(".")[0])>=16,t.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var l=function(c){return!t.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(c.name)};t.canTextBeChildOfNode=l;var u=function(c){return c};t.returnFirstArg=u})(mw);Object.defineProperty(Xp,"__esModule",{value:!0});var hl=Wn,UI=mw,voe=["checked","value"],yoe=["input","select","textarea"],_oe={reset:!0,submit:!0};function woe(t,e){t===void 0&&(t={});var n={},r=!!(t.type&&_oe[t.type]);for(var i in t){var o=t[i];if((0,hl.isCustomAttribute)(i)){n[i]=o;continue}var s=i.toLowerCase(),a=zI(s);if(a){var l=(0,hl.getPropertyInfo)(a);switch(voe.includes(a)&&yoe.includes(e)&&!r&&(a=zI("default"+s)),n[a]=o,l&&l.type){case hl.BOOLEAN:n[a]=!0;break;case hl.OVERLOADED_BOOLEAN:o===""&&(n[a]=!0);break}continue}UI.PRESERVE_CUSTOM_ATTRIBUTES&&(n[i]=o)}return(0,UI.setStyleProp)(t.style,n),n}Xp.default=woe;function zI(t){return hl.possibleStandardNames[t]}var yw={},Eoe=Re&&Re.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(yw,"__esModule",{value:!0});var Cg=b,Soe=Eoe(Xp),Ll=mw,boe={cloneElement:Cg.cloneElement,createElement:Cg.createElement,isValidElement:Cg.isValidElement};function WN(t,e){for(var n=[],r=typeof(e==null?void 0:e.replace)=="function",i=(e==null?void 0:e.transform)||Ll.returnFirstArg,o=(e==null?void 0:e.library)||boe,s=o.cloneElement,a=o.createElement,l=o.isValidElement,u=t.length,c=0;c<u;c++){var f=t[c];if(r){var d=e.replace(f,c);if(l(d)){u>1&&(d=s(d,{key:d.key||c})),n.push(i(d,f,c));continue}}if(f.type==="text"){var h=!f.data.trim().length;if(h&&f.parent&&!(0,Ll.canTextBeChildOfNode)(f.parent)||e!=null&&e.trim&&h)continue;n.push(i(f.data,f,c));continue}var g=f,m={};Toe(g)?((0,Ll.setStyleProp)(g.attribs.style,g.attribs),m=g.attribs):g.attribs&&(m=(0,Soe.default)(g.attribs,g.name));var _=void 0;switch(f.type){case"script":case"style":f.children[0]&&(m.dangerouslySetInnerHTML={__html:f.children[0].data});break;case"tag":f.name==="textarea"&&f.children[0]?m.defaultValue=f.children[0].data:f.children&&f.children.length&&(_=WN(f.children,e));break;default:continue}u>1&&(m.key=c),n.push(i(a(f.name,m,_),f,c))}return n.length===1?n[0]:n}yw.default=WN;function Toe(t){return Ll.PRESERVE_CUSTOM_ATTRIBUTES&&t.type==="tag"&&(0,Ll.isCustomComponent)(t.name,t.attribs)}(function(t){var e=Re&&Re.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(t,"__esModule",{value:!0}),t.htmlToDOM=t.domToReact=t.attributesToProps=t.Text=t.ProcessingInstruction=t.Element=t.Comment=void 0;var n=e(sw);t.htmlToDOM=n.default;var r=e(Xp);t.attributesToProps=r.default;var i=e(yw);t.domToReact=i.default;var o=lw;Object.defineProperty(t,"Comment",{enumerable:!0,get:function(){return o.Comment}}),Object.defineProperty(t,"Element",{enumerable:!0,get:function(){return o.Element}}),Object.defineProperty(t,"ProcessingInstruction",{enumerable:!0,get:function(){return o.ProcessingInstruction}}),Object.defineProperty(t,"Text",{enumerable:!0,get:function(){return o.Text}});var s={lowerCaseAttributeNames:!1};function a(l,u){if(typeof l!="string")throw new TypeError("First argument must be a string");return l?(0,i.default)((0,n.default)(l,(u==null?void 0:u.htmlparser2)||s),u):[]}t.default=a})(IN);const BI=Do(IN),Ioe=BI.default||BI;let mf;const Coe=new Uint8Array(16);function xoe(){if(!mf&&(mf=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!mf))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return mf(Coe)}const pt=[];for(let t=0;t<256;++t)pt.push((t+256).toString(16).slice(1));function koe(t,e=0){return pt[t[e+0]]+pt[t[e+1]]+pt[t[e+2]]+pt[t[e+3]]+"-"+pt[t[e+4]]+pt[t[e+5]]+"-"+pt[t[e+6]]+pt[t[e+7]]+"-"+pt[t[e+8]]+pt[t[e+9]]+"-"+pt[t[e+10]]+pt[t[e+11]]+pt[t[e+12]]+pt[t[e+13]]+pt[t[e+14]]+pt[t[e+15]]}const Aoe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),WI={randomUUID:Aoe};function HI(t,e,n){if(WI.randomUUID&&!e&&!t)return WI.randomUUID();t=t||{};const r=t.random||(t.rng||xoe)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return koe(r)}const Poe=()=>{const{addProductAndQuantityToCart:t,setCartItemIsAdded:e}=b.useContext(Br),n=Ur(),r=Uu(),{product:i}=r.state,{name:o,imageUrl:s,sizesAndPrices:a,description:l}=i,u=Ioe(l),c=a[0].price,[f,d]=b.useState(c),[h,g]=b.useState(a[0].size),[m,_]=b.useState(1),[v,p]=b.useState(HI());b.useEffect(()=>{p(HI())},[h]);const y=$=>{const R=$.target.value,te=a.find(ge=>ge.size===R);console.log(te),te&&(g(te.size),d(te.price))};console.log(f);const E=$=>{const R=$.target.value;console.log(typeof R),/^\d*$/.test(R)&&_(R===""?"":parseInt(R,10))},S=()=>{_($=>typeof $=="number"?$+1:1)},I=()=>{_($=>typeof $=="number"&&$>1?$-1:1)},T=()=>{typeof m=="number"&&m>0?(t(i,h,f,m,v),_(1),e(!0),setTimeout(()=>e(!1),3e3)):console.log(`Invalid quantity: ${m}`)};if(!i)return w.jsx("h1",{children:"Whoops, looks like there was an error loading the page!"});const O=()=>n(-1);return w.jsxs(_te,{children:[w.jsx(wte,{children:w.jsx("img",{src:s,alt:o})}),w.jsxs(Ete,{children:[w.jsx("h2",{children:o}),w.jsxs("h3",{children:["Price/item: $ ",f]}),w.jsxs(Ste,{children:[w.jsxs(bte,{children:[w.jsx("label",{children:"OPTIONS"}),w.jsx("select",{value:h.size,onChange:y,children:a.map($=>w.jsx("option",{value:$.size,children:$.size},$.size))})]}),w.jsxs(Tte,{children:[w.jsx("label",{children:"QUANTITY"}),w.jsxs(B_,{children:[w.jsx(ia,{buttonType:Qe.default,onClick:I,children:"-"}),w.jsx(W_,{type:"text",value:m,onChange:E}),w.jsx(ia,{buttonType:Qe.default,onClick:S,children:"+"})]})]}),w.jsx(Ite,{buttonType:Qe.google,onClick:T,children:"Add to Cart"})]}),w.jsx(Cte,{children:u}),w.jsx(xte,{isLoading:!1,buttonType:Qe.default,onClick:O,id:"go-back",children:"Go Back"})]})]})},Roe=A.div`
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
 `,Ooe=A.div`
   display: flex;
   flex-direction: column;
`,Noe=A.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    border: 1px solid black;
`,Doe=A.div`
    display: flex;
    margin-left: auto;
`,$oe=A(Cn)`
    border-radius: 2px;
    font-size: 26px;
`,Moe=A(Cn)`
    border-radius: 2px;
    font-size: 26px;
`,Loe=A(Cn)`
    border-radius: 2px;
    font-size: 26px;
`,joe=A.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid black;
`,Voe=A.div`
    width: 30%;

    img {
        height: 250px;
        width: 250px;
        object-fit: cover;
    }
`,Foe=A.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
`,Uoe=A.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    margin-right: 20px;

    span {
        font-size: 25px;
    }
`,zoe=A(B_)`
    width: 10%;
    margin: 0 20px;
`,Boe=A.div`
    margin: 0 10px;
`,Woe=A(z_)`
    cursor: pointer;
    
    &:hover {
        color: red;
    }
`,Hoe=({cartItem:t})=>{const{imageUrl:e,itemPrice:n,name:r,quantity:i,selectedSize:o,id:s,key:a}=t,{cartItems:l,setCartItems:u,addOneItemToCart:c,removeOneItemFromCart:f,clearItemFromCart:d}=b.useContext(Br),h=v=>{const p=v.target.value,y=l.find(E=>E.id===s&&E.selectedSize===o&&E.key===a);if(/^\d*$/.test(p)&&y){const E=l.map(S=>S.id===s&&S.selectedSize===o&&S.key===a?{...S,quantity:p===""?"":parseInt(p,10)}:S);u(E)}},g=()=>f(t,o,a),m=()=>c(t,o,a),_=()=>d(t,a);return w.jsxs(joe,{children:[w.jsx(Voe,{children:w.jsx("img",{src:e,alt:r})}),w.jsxs(Foe,{children:[w.jsx("h2",{children:r}),w.jsx("h4",{children:o})]}),w.jsxs(zoe,{children:[w.jsx(ia,{buttonType:Qe.default,onClick:g,children:"-"}),w.jsx(W_,{type:"number",value:i,onChange:h}),w.jsx(ia,{buttonType:Qe.default,onClick:m,children:"+"})]}),w.jsx(Uoe,{children:w.jsxs("span",{children:["$ ",i*n]})}),w.jsx(Boe,{onClick:_,children:w.jsx(Woe,{fontSize:"large"})})]})},qoe=()=>{const t=Ur(),{cartItems:e,cartTotal:n}=b.useContext(Br),r=()=>t("/"),i=()=>t("/checkout"),o=()=>t(-1);return w.jsxs(Roe,{children:[w.jsxs(Ooe,{children:[w.jsx("h1",{children:"SHOPPING CART"}),w.jsx(Noe,{children:e.map(s=>w.jsx(Hoe,{cartItem:s},s.key))})]}),w.jsxs("span",{children:["Sub-total: $ ",n]}),w.jsxs(Doe,{children:[w.jsx(Moe,{buttonType:Qe.default,onClick:r,children:"Return to Home"}),w.jsx(Loe,{buttonType:Qe.default,onClick:o,children:"Go Back"}),w.jsx($oe,{buttonType:Qe.google,onClick:i,children:"Checkout"})]})]})},Goe=A.div`
    width: 70%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgb(209, 209, 209);
`,HN=bo`
  top: 2px;
  font-size: 10px;
`,Koe=A.div`
  position: relative;
`,qN=A.label`
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
    ${({$shrink:t})=>t&&HN};
`,Qoe=A.input`
  font-size: 16px;
  width: 100%;
  border-radius: 2.5px;
  border: 1px solid black;

  //adjacent sibling selector => when the input is focused, target adjacent sibling (which is Label) and apply the shrinkLabelStyles styling
  
  &:focus ~ ${qN} {
    ${HN};
  }
`,Yoe=({label:t,...e})=>w.jsxs(Koe,{children:[w.jsx(Qoe,{...e}),t&&w.jsx(qN,{$shrink:!!(e.value&&e.value&&typeof e.value=="string"&&e.value.length),children:t})]}),Xoe=A(Cn)`
    font-size: 25px;
    border-radius: 2.5px;
`,Joe=A.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 50%;
    height: 100%;
    margin: 20px 20px;

    button {
        width: 50%;
        margin-left: auto;
        margin-top: 50px;
    }
`,Zoe=A.form`

    label {
        font-size: 30px;
        margin-bottom: 30px;
    }

`,ese=A.div`
    margin-bottom: 40px;
    margin-top: 20px;
`,tse=A.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    button {
        margin-left: auto;
    }
`,nse=A.div`
    width: 100%;

    label {
        margin-bottom: 10px;
    }
    input {
        margin-top: 10px;
    }
`,rse=A(Yoe)`
    margin-bottom: 40px;
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #DDDDDD;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
    transition: box-shadow 150ms ease-in-out;

    &:focus {
        box-shadow: 0px 0px 10px rgb(34, 140, 250, 1);
        border: 1px solid rgb(34, 140, 250, 1);
    }
`,ise=()=>{const{cartTotal:t}=b.useContext(Br),[e,n]=b.useState(""),[r,i]=b.useState(!1),[o,s]=b.useState(""),a=B5(),l=z5(),u=t*100;b.useEffect(()=>{const d=fetch("/.netlify/functions/create-payment-intent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:u})}).then(h=>h.json()).then(h=>{console.log(h);const{paymentIntent:{client_secret:g}}=h;console.log(g),n(g)});console.log(d),console.log(e)},[]);const c=async d=>{if(d.preventDefault(),!a||!l)return;i(!0);const{error:h}=await l.submit();if(h){console.log(h),i(!1);return}try{const g=await a.confirmPayment({elements:l,clientSecret:e,confirmParams:{return_url:"https://sandra-sanchez-art.netlify.app",payment_method_data:{billing_details:{email:o}}}});if(g.error){console.log(g.error),alert(`There was an error submitting payment: ${g.error}`),i(!1);return}if(!(await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({subject:"Payment and Order Confirmation",recipient:o,message:"Your payment was successful!"})})).ok){console.error("Faled to send email!"),i(!1);return}console.log("Successfully sent email!")}catch(g){console.error("Error processing payment or sending email:",g),i(!1)}},f=d=>{const h=d.target.value;s(h),console.log(o)};return w.jsx(Joe,{children:w.jsxs(Zoe,{onSubmit:c,children:[w.jsxs(nse,{children:[w.jsx("label",{id:"contact-label",children:"Contact"}),w.jsx(rse,{type:"email",name:"email",value:o,placeholder:"Email",onChange:f,required:!0})]}),w.jsx("label",{children:"Delivery"}),w.jsx(ese,{children:w.jsx(G5,{options:{mode:"shipping",display:{name:"split"},defaultValues:{firstName:"ex: John",lastName:"ex: Doe",phone:"555-555-5555"},fields:{phone:"always"}},onChange:d=>{if(d.complete){const h=d.value.address;console.log(h)}}})}),w.jsx("label",{children:"Payment Information:"}),w.jsxs(tse,{children:[w.jsx(q5,{}),w.jsx(Xoe,{buttonType:Qe.google,isLoading:r,id:"submit",children:"Pay Now"})]})]})})},ose=A.div`
    width: 50%;
    margin: 0 30px;
    border-left: 1px solid rgb(209,209,209);
`,sse=A.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 10px;
    width: 100%;
`,ase=A.div`
    display: flex;
    justify-content: space-between;
    margin: 0 25px;
`,lse=A.div`
    display: flex;
    margin: 30px 30px;
    align-items: center;
    justify-content: center;

`,use=A.div`
    position: relative;
    width: 40%;

    img {
        height: 100px;
        width: 100px;
        object-fit: cover;
    }
`,cse=A.div`
    position: absolute;
    top: -20px;
    right: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(38, 38, 38, .7);
    color: #fff;
    font-weight: bold;
`,fse=A.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`,dse=A.div`
    display: flex;
    width: 10%;
    margin: 0 10px;
`,hse=({cartItem:t})=>{const{imageUrl:e,name:n,selectedSize:r,itemPrice:i,quantity:o}=t;return w.jsxs(lse,{children:[w.jsxs(use,{children:[w.jsx("img",{src:e}),w.jsx(cse,{children:o})]}),w.jsxs(fse,{children:[w.jsx("h3",{children:n}),w.jsx("span",{children:r})]}),w.jsx(dse,{children:w.jsxs("span",{children:["$",i]})})]})},pse=()=>{const{cartItems:t,cartTotal:e}=b.useContext(Br);return w.jsx(ose,{children:w.jsxs(sse,{children:[t.map(n=>w.jsx(hse,{cartItem:n},n.key)),w.jsxs(ase,{children:[w.jsx("h3",{children:"Subtotal"}),w.jsxs("h3",{children:["$ ",e]})]})]})})},mse=()=>w.jsxs(Goe,{children:[w.jsx(ise,{}),w.jsx(pse,{})]}),gse=()=>{const{setCategoriesMap:t}=b.useContext(X0);return b.useEffect(()=>{(async()=>{try{const n=await qee();console.log("Logging categories map from App component!: ",n),t(n)}catch(n){console.log(n)}})()},[t]),w.jsx(h5,{children:w.jsxs(Pn,{path:"/",element:w.jsx(Pte,{}),children:[w.jsx(Pn,{index:!0,element:w.jsx(Xre,{})}),w.jsx(Pn,{path:"about",element:w.jsx(eie,{})}),w.jsx(Pn,{path:"mentoring",element:w.jsx(tie,{})}),w.jsx(Pn,{path:"contact",element:w.jsx(nie,{})}),w.jsx(Pn,{path:"shop/:category",element:w.jsx(wie,{})}),w.jsx(Pn,{path:"shop/:category/:id",element:w.jsx(Poe,{})}),w.jsx(Pn,{path:"authentication",element:w.jsx(mie,{})}),w.jsx(Pn,{path:"cart-summary",element:w.jsx(qoe,{})}),w.jsx(Pn,{path:"checkout",element:w.jsx(mse,{})})]})})};xg.createRoot(document.getElementById("root")).render(w.jsx(H.StrictMode,{children:w.jsx(_5,{children:w.jsx(sM,{children:w.jsx(Xee,{children:w.jsx(nte,{children:w.jsx(Tk,{stripe:iM,options:oM,children:w.jsx(gse,{})})})})})})}))});export default vse();
