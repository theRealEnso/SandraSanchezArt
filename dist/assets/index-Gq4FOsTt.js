var jN=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var nse=jN((ase,qy)=>{function VN(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function FN(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var VI={exports:{}},oh={},FI={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou=Symbol.for("react.element"),UN=Symbol.for("react.portal"),zN=Symbol.for("react.fragment"),BN=Symbol.for("react.strict_mode"),WN=Symbol.for("react.profiler"),HN=Symbol.for("react.provider"),qN=Symbol.for("react.context"),GN=Symbol.for("react.forward_ref"),KN=Symbol.for("react.suspense"),QN=Symbol.for("react.memo"),YN=Symbol.for("react.lazy"),hw=Symbol.iterator;function XN(e){return e===null||typeof e!="object"?null:(e=hw&&e[hw]||e["@@iterator"],typeof e=="function"?e:null)}var UI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zI=Object.assign,BI={};function oa(e,t,n){this.props=e,this.context=t,this.refs=BI,this.updater=n||UI}oa.prototype.isReactComponent={};oa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function WI(){}WI.prototype=oa.prototype;function Gy(e,t,n){this.props=e,this.context=t,this.refs=BI,this.updater=n||UI}var Ky=Gy.prototype=new WI;Ky.constructor=Gy;zI(Ky,oa.prototype);Ky.isPureReactComponent=!0;var pw=Array.isArray,HI=Object.prototype.hasOwnProperty,Qy={current:null},qI={key:!0,ref:!0,__self:!0,__source:!0};function GI(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)HI.call(t,r)&&!qI.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ou,type:e,key:o,ref:s,props:i,_owner:Qy.current}}function JN(e,t){return{$$typeof:Ou,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yy(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ou}function ZN(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mw=/\/+/g;function Jp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ZN(""+e.key):t.toString(36)}function hf(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ou:case UN:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Jp(s,0):r,pw(i)?(n="",e!=null&&(n=e.replace(mw,"$&/")+"/"),hf(i,t,n,"",function(u){return u})):i!=null&&(Yy(i)&&(i=JN(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(mw,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",pw(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Jp(o,a);s+=hf(o,t,n,l,i)}else if(l=XN(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Jp(o,a++),s+=hf(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vc(e,t,n){if(e==null)return e;var r=[],i=0;return hf(e,r,"","",function(o){return t.call(n,o,i++)}),r}function e$(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Bt={current:null},pf={transition:null},t$={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:pf,ReactCurrentOwner:Qy};re.Children={map:vc,forEach:function(e,t,n){vc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vc(e,function(){t++}),t},toArray:function(e){return vc(e,function(t){return t})||[]},only:function(e){if(!Yy(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=oa;re.Fragment=zN;re.Profiler=WN;re.PureComponent=Gy;re.StrictMode=BN;re.Suspense=KN;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t$;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zI({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Qy.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)HI.call(t,l)&&!qI.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ou,type:e.type,key:i,ref:o,props:r,_owner:s}};re.createContext=function(e){return e={$$typeof:qN,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:HN,_context:e},e.Consumer=e};re.createElement=GI;re.createFactory=function(e){var t=GI.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:GN,render:e}};re.isValidElement=Yy;re.lazy=function(e){return{$$typeof:YN,_payload:{_status:-1,_result:e},_init:e$}};re.memo=function(e,t){return{$$typeof:QN,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=pf.transition;pf.transition={};try{e()}finally{pf.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return Bt.current.useCallback(e,t)};re.useContext=function(e){return Bt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return Bt.current.useDeferredValue(e)};re.useEffect=function(e,t){return Bt.current.useEffect(e,t)};re.useId=function(){return Bt.current.useId()};re.useImperativeHandle=function(e,t,n){return Bt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return Bt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return Bt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return Bt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return Bt.current.useReducer(e,t,n)};re.useRef=function(e){return Bt.current.useRef(e)};re.useState=function(e){return Bt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return Bt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return Bt.current.useTransition()};re.version="18.2.0";FI.exports=re;var b=FI.exports;const H=Oo(b),Kf=VN({__proto__:null,default:H},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n$=b,r$=Symbol.for("react.element"),i$=Symbol.for("react.fragment"),o$=Object.prototype.hasOwnProperty,s$=n$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a$={key:!0,ref:!0,__self:!0,__source:!0};function KI(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)o$.call(t,r)&&!a$.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:r$,type:e,key:o,ref:s,props:i,_owner:s$.current}}oh.Fragment=i$;oh.jsx=KI;oh.jsxs=KI;VI.exports=oh;var w=VI.exports,Sg={},QI={exports:{}},cn={},YI={exports:{}},XI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,U){var q=D.length;D.push(U);e:for(;0<q;){var fe=q-1>>>1,ae=D[fe];if(0<i(ae,U))D[fe]=U,D[q]=ae,q=fe;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var U=D[0],q=D.pop();if(q!==U){D[0]=q;e:for(var fe=0,ae=D.length,kn=ae>>>1;fe<kn;){var Tt=2*(fe+1)-1,Gn=D[Tt],Lt=Tt+1,pn=D[Lt];if(0>i(Gn,q))Lt<ae&&0>i(pn,Gn)?(D[fe]=pn,D[Lt]=q,fe=Lt):(D[fe]=Gn,D[Tt]=q,fe=Tt);else if(Lt<ae&&0>i(pn,q))D[fe]=pn,D[Lt]=q,fe=Lt;else break e}}return U}function i(D,U){var q=D.sortIndex-U.sortIndex;return q!==0?q:D.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,h=!1,g=!1,m=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=D)r(u),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(u)}}function E(D){if(m=!1,y(D),!g)if(n(l)!==null)g=!0,qn(S);else{var U=n(u);U!==null&&ke(E,U.startTime-D)}}function S(D,U){g=!1,m&&(m=!1,v(O),O=-1),h=!0;var q=d;try{for(y(U),f=n(l);f!==null&&(!(f.expirationTime>U)||D&&!te());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,d=f.priorityLevel;var ae=fe(f.expirationTime<=U);U=e.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),y(U)}else r(l);f=n(l)}if(f!==null)var kn=!0;else{var Tt=n(u);Tt!==null&&ke(E,Tt.startTime-U),kn=!1}return kn}finally{f=null,d=q,h=!1}}var I=!1,T=null,O=-1,$=5,R=-1;function te(){return!(e.unstable_now()-R<$)}function ge(){if(T!==null){var D=e.unstable_now();R=D;var U=!0;try{U=T(!0,D)}finally{U?it():(I=!1,T=null)}}else I=!1}var it;if(typeof p=="function")it=function(){p(ge)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,Hn=dt.port2;dt.port1.onmessage=ge,it=function(){Hn.postMessage(null)}}else it=function(){_(ge,0)};function qn(D){T=D,I||(I=!0,it())}function ke(D,U){O=_(function(){D(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,qn(S))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(D){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var q=d;d=U;try{return D()}finally{d=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=d;d=D;try{return U()}finally{d=q}},e.unstable_scheduleCallback=function(D,U,q){var fe=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?fe+q:fe):q=fe,D){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=q+ae,D={id:c++,callback:U,priorityLevel:D,startTime:q,expirationTime:ae,sortIndex:-1},q>fe?(D.sortIndex=q,t(u,D),n(l)===null&&D===n(u)&&(m?(v(O),O=-1):m=!0,ke(E,q-fe))):(D.sortIndex=ae,t(l,D),g||h||(g=!0,qn(S))),D},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(D){var U=d;return function(){var q=d;d=U;try{return D.apply(this,arguments)}finally{d=q}}}})(XI);YI.exports=XI;var l$=YI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JI=b,ln=l$;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ZI=new Set,Dl={};function No(e,t){Rs(e,t),Rs(e+"Capture",t)}function Rs(e,t){for(Dl[e]=t,e=0;e<t.length;e++)ZI.add(t[e])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bg=Object.prototype.hasOwnProperty,u$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gw={},vw={};function c$(e){return bg.call(vw,e)?!0:bg.call(gw,e)?!1:u$.test(e)?vw[e]=!0:(gw[e]=!0,!1)}function f$(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function d$(e,t,n,r){if(t===null||typeof t>"u"||f$(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Wt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){St[e]=new Wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];St[t]=new Wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){St[e]=new Wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){St[e]=new Wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){St[e]=new Wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){St[e]=new Wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){St[e]=new Wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){St[e]=new Wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){St[e]=new Wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xy=/[\-:]([a-z])/g;function Jy(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xy,Jy);St[t]=new Wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xy,Jy);St[t]=new Wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xy,Jy);St[t]=new Wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){St[e]=new Wt(e,1,!1,e.toLowerCase(),null,!1,!1)});St.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){St[e]=new Wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zy(e,t,n,r){var i=St.hasOwnProperty(t)?St[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(d$(t,n,i,r)&&(n=null),r||i===null?c$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vr=JI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yc=Symbol.for("react.element"),Zo=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),e0=Symbol.for("react.strict_mode"),Tg=Symbol.for("react.profiler"),eC=Symbol.for("react.provider"),tC=Symbol.for("react.context"),t0=Symbol.for("react.forward_ref"),Ig=Symbol.for("react.suspense"),Cg=Symbol.for("react.suspense_list"),n0=Symbol.for("react.memo"),Zr=Symbol.for("react.lazy"),nC=Symbol.for("react.offscreen"),yw=Symbol.iterator;function Pa(e){return e===null||typeof e!="object"?null:(e=yw&&e[yw]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,Zp;function Ya(e){if(Zp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zp=t&&t[1]||""}return`
`+Zp+e}var em=!1;function tm(e,t){if(!e||em)return"";em=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{em=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ya(e):""}function h$(e){switch(e.tag){case 5:return Ya(e.type);case 16:return Ya("Lazy");case 13:return Ya("Suspense");case 19:return Ya("SuspenseList");case 0:case 2:case 15:return e=tm(e.type,!1),e;case 11:return e=tm(e.type.render,!1),e;case 1:return e=tm(e.type,!0),e;default:return""}}function xg(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case es:return"Fragment";case Zo:return"Portal";case Tg:return"Profiler";case e0:return"StrictMode";case Ig:return"Suspense";case Cg:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tC:return(e.displayName||"Context")+".Consumer";case eC:return(e._context.displayName||"Context")+".Provider";case t0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case n0:return t=e.displayName||null,t!==null?t:xg(e.type)||"Memo";case Zr:t=e._payload,e=e._init;try{return xg(e(t))}catch{}}return null}function p$(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xg(t);case 8:return t===e0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ci(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rC(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m$(e){var t=rC(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _c(e){e._valueTracker||(e._valueTracker=m$(e))}function iC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rC(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kg(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _w(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ci(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oC(e,t){t=t.checked,t!=null&&Zy(e,"checked",t,!1)}function Ag(e,t){oC(e,t);var n=Ci(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pg(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pg(e,t.type,Ci(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ww(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pg(e,t,n){(t!=="number"||Qf(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xa=Array.isArray;function vs(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ci(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rg(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ew(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Xa(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ci(n)}}function sC(e,t){var n=Ci(t.value),r=Ci(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sw(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function aC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Og(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?aC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wc,lC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wc=wc||document.createElement("div"),wc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ml(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g$=["Webkit","ms","Moz","O"];Object.keys(dl).forEach(function(e){g$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dl[t]=dl[e]})});function uC(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dl.hasOwnProperty(e)&&dl[e]?(""+t).trim():t+"px"}function cC(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uC(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var v$=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ng(e,t){if(t){if(v$[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function $g(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dg=null;function r0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mg=null,ys=null,_s=null;function bw(e){if(e=Du(e)){if(typeof Mg!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ch(t),Mg(e.stateNode,e.type,t))}}function fC(e){ys?_s?_s.push(e):_s=[e]:ys=e}function dC(){if(ys){var e=ys,t=_s;if(_s=ys=null,bw(e),t)for(e=0;e<t.length;e++)bw(t[e])}}function hC(e,t){return e(t)}function pC(){}var nm=!1;function mC(e,t,n){if(nm)return e(t,n);nm=!0;try{return hC(e,t,n)}finally{nm=!1,(ys!==null||_s!==null)&&(pC(),dC())}}function Ll(e,t){var n=e.stateNode;if(n===null)return null;var r=ch(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Lg=!1;if(xr)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){Lg=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{Lg=!1}function y$(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var hl=!1,Yf=null,Xf=!1,jg=null,_$={onError:function(e){hl=!0,Yf=e}};function w$(e,t,n,r,i,o,s,a,l){hl=!1,Yf=null,y$.apply(_$,arguments)}function E$(e,t,n,r,i,o,s,a,l){if(w$.apply(this,arguments),hl){if(hl){var u=Yf;hl=!1,Yf=null}else throw Error(P(198));Xf||(Xf=!0,jg=u)}}function $o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gC(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tw(e){if($o(e)!==e)throw Error(P(188))}function S$(e){var t=e.alternate;if(!t){if(t=$o(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Tw(i),e;if(o===r)return Tw(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function vC(e){return e=S$(e),e!==null?yC(e):null}function yC(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yC(e);if(t!==null)return t;e=e.sibling}return null}var _C=ln.unstable_scheduleCallback,Iw=ln.unstable_cancelCallback,b$=ln.unstable_shouldYield,T$=ln.unstable_requestPaint,Ue=ln.unstable_now,I$=ln.unstable_getCurrentPriorityLevel,i0=ln.unstable_ImmediatePriority,wC=ln.unstable_UserBlockingPriority,Jf=ln.unstable_NormalPriority,C$=ln.unstable_LowPriority,EC=ln.unstable_IdlePriority,sh=null,or=null;function x$(e){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(sh,e,void 0,(e.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:P$,k$=Math.log,A$=Math.LN2;function P$(e){return e>>>=0,e===0?32:31-(k$(e)/A$|0)|0}var Ec=64,Sc=4194304;function Ja(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zf(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ja(a):(o&=s,o!==0&&(r=Ja(o)))}else s=n&~i,s!==0?r=Ja(s):o!==0&&(r=Ja(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mn(t),i=1<<n,r|=e[n],t&=~i;return r}function R$(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O$(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Mn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=R$(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Vg(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function SC(){var e=Ec;return Ec<<=1,!(Ec&4194240)&&(Ec=64),e}function rm(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nu(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mn(t),e[t]=n}function N$(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Mn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function o0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function bC(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var TC,s0,IC,CC,xC,Fg=!1,bc=[],di=null,hi=null,pi=null,jl=new Map,Vl=new Map,ti=[],$$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cw(e,t){switch(e){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":jl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vl.delete(t.pointerId)}}function Oa(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Du(t),t!==null&&s0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function D$(e,t,n,r,i){switch(t){case"focusin":return di=Oa(di,e,t,n,r,i),!0;case"dragenter":return hi=Oa(hi,e,t,n,r,i),!0;case"mouseover":return pi=Oa(pi,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return jl.set(o,Oa(jl.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vl.set(o,Oa(Vl.get(o)||null,e,t,n,r,i)),!0}return!1}function kC(e){var t=Xi(e.target);if(t!==null){var n=$o(t);if(n!==null){if(t=n.tag,t===13){if(t=gC(n),t!==null){e.blockedOn=t,xC(e.priority,function(){IC(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ug(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dg=r,n.target.dispatchEvent(r),Dg=null}else return t=Du(n),t!==null&&s0(t),e.blockedOn=n,!1;t.shift()}return!0}function xw(e,t,n){mf(e)&&n.delete(t)}function M$(){Fg=!1,di!==null&&mf(di)&&(di=null),hi!==null&&mf(hi)&&(hi=null),pi!==null&&mf(pi)&&(pi=null),jl.forEach(xw),Vl.forEach(xw)}function Na(e,t){e.blockedOn===t&&(e.blockedOn=null,Fg||(Fg=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,M$)))}function Fl(e){function t(i){return Na(i,e)}if(0<bc.length){Na(bc[0],e);for(var n=1;n<bc.length;n++){var r=bc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(di!==null&&Na(di,e),hi!==null&&Na(hi,e),pi!==null&&Na(pi,e),jl.forEach(t),Vl.forEach(t),n=0;n<ti.length;n++)r=ti[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ti.length&&(n=ti[0],n.blockedOn===null);)kC(n),n.blockedOn===null&&ti.shift()}var ws=Vr.ReactCurrentBatchConfig,ed=!0;function L$(e,t,n,r){var i=he,o=ws.transition;ws.transition=null;try{he=1,a0(e,t,n,r)}finally{he=i,ws.transition=o}}function j$(e,t,n,r){var i=he,o=ws.transition;ws.transition=null;try{he=4,a0(e,t,n,r)}finally{he=i,ws.transition=o}}function a0(e,t,n,r){if(ed){var i=Ug(e,t,n,r);if(i===null)hm(e,t,r,td,n),Cw(e,r);else if(D$(i,e,t,n,r))r.stopPropagation();else if(Cw(e,r),t&4&&-1<$$.indexOf(e)){for(;i!==null;){var o=Du(i);if(o!==null&&TC(o),o=Ug(e,t,n,r),o===null&&hm(e,t,r,td,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else hm(e,t,r,null,n)}}var td=null;function Ug(e,t,n,r){if(td=null,e=r0(r),e=Xi(e),e!==null)if(t=$o(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gC(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return td=e,null}function AC(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I$()){case i0:return 1;case wC:return 4;case Jf:case C$:return 16;case EC:return 536870912;default:return 16}default:return 16}}var ai=null,l0=null,gf=null;function PC(){if(gf)return gf;var e,t=l0,n=t.length,r,i="value"in ai?ai.value:ai.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return gf=i.slice(e,1<r?1-r:void 0)}function vf(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tc(){return!0}function kw(){return!1}function fn(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Tc:kw,this.isPropagationStopped=kw,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tc)},persist:function(){},isPersistent:Tc}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},u0=fn(sa),$u=$e({},sa,{view:0,detail:0}),V$=fn($u),im,om,$a,ah=$e({},$u,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:c0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$a&&($a&&e.type==="mousemove"?(im=e.screenX-$a.screenX,om=e.screenY-$a.screenY):om=im=0,$a=e),im)},movementY:function(e){return"movementY"in e?e.movementY:om}}),Aw=fn(ah),F$=$e({},ah,{dataTransfer:0}),U$=fn(F$),z$=$e({},$u,{relatedTarget:0}),sm=fn(z$),B$=$e({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),W$=fn(B$),H$=$e({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q$=fn(H$),G$=$e({},sa,{data:0}),Pw=fn(G$),K$={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q$={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X$(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Y$[e])?!!t[e]:!1}function c0(){return X$}var J$=$e({},$u,{key:function(e){if(e.key){var t=K$[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vf(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q$[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:c0,charCode:function(e){return e.type==="keypress"?vf(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vf(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z$=fn(J$),eD=$e({},ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rw=fn(eD),tD=$e({},$u,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:c0}),nD=fn(tD),rD=$e({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),iD=fn(rD),oD=$e({},ah,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sD=fn(oD),aD=[9,13,27,32],f0=xr&&"CompositionEvent"in window,pl=null;xr&&"documentMode"in document&&(pl=document.documentMode);var lD=xr&&"TextEvent"in window&&!pl,RC=xr&&(!f0||pl&&8<pl&&11>=pl),Ow=" ",Nw=!1;function OC(e,t){switch(e){case"keyup":return aD.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function NC(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ts=!1;function uD(e,t){switch(e){case"compositionend":return NC(t);case"keypress":return t.which!==32?null:(Nw=!0,Ow);case"textInput":return e=t.data,e===Ow&&Nw?null:e;default:return null}}function cD(e,t){if(ts)return e==="compositionend"||!f0&&OC(e,t)?(e=PC(),gf=l0=ai=null,ts=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return RC&&t.locale!=="ko"?null:t.data;default:return null}}var fD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $w(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fD[e.type]:t==="textarea"}function $C(e,t,n,r){fC(r),t=nd(t,"onChange"),0<t.length&&(n=new u0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ml=null,Ul=null;function dD(e){HC(e,0)}function lh(e){var t=is(e);if(iC(t))return e}function hD(e,t){if(e==="change")return t}var DC=!1;if(xr){var am;if(xr){var lm="oninput"in document;if(!lm){var Dw=document.createElement("div");Dw.setAttribute("oninput","return;"),lm=typeof Dw.oninput=="function"}am=lm}else am=!1;DC=am&&(!document.documentMode||9<document.documentMode)}function Mw(){ml&&(ml.detachEvent("onpropertychange",MC),Ul=ml=null)}function MC(e){if(e.propertyName==="value"&&lh(Ul)){var t=[];$C(t,Ul,e,r0(e)),mC(dD,t)}}function pD(e,t,n){e==="focusin"?(Mw(),ml=t,Ul=n,ml.attachEvent("onpropertychange",MC)):e==="focusout"&&Mw()}function mD(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lh(Ul)}function gD(e,t){if(e==="click")return lh(t)}function vD(e,t){if(e==="input"||e==="change")return lh(t)}function yD(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fn=typeof Object.is=="function"?Object.is:yD;function zl(e,t){if(Fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bg.call(t,i)||!Fn(e[i],t[i]))return!1}return!0}function Lw(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jw(e,t){var n=Lw(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lw(n)}}function LC(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?LC(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jC(){for(var e=window,t=Qf();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qf(e.document)}return t}function d0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _D(e){var t=jC(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&LC(n.ownerDocument.documentElement,n)){if(r!==null&&d0(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=jw(n,o);var s=jw(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wD=xr&&"documentMode"in document&&11>=document.documentMode,ns=null,zg=null,gl=null,Bg=!1;function Vw(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bg||ns==null||ns!==Qf(r)||(r=ns,"selectionStart"in r&&d0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gl&&zl(gl,r)||(gl=r,r=nd(zg,"onSelect"),0<r.length&&(t=new u0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ns)))}function Ic(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rs={animationend:Ic("Animation","AnimationEnd"),animationiteration:Ic("Animation","AnimationIteration"),animationstart:Ic("Animation","AnimationStart"),transitionend:Ic("Transition","TransitionEnd")},um={},VC={};xr&&(VC=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function uh(e){if(um[e])return um[e];if(!rs[e])return e;var t=rs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in VC)return um[e]=t[n];return e}var FC=uh("animationend"),UC=uh("animationiteration"),zC=uh("animationstart"),BC=uh("transitionend"),WC=new Map,Fw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(e,t){WC.set(e,t),No(t,[e])}for(var cm=0;cm<Fw.length;cm++){var fm=Fw[cm],ED=fm.toLowerCase(),SD=fm[0].toUpperCase()+fm.slice(1);Di(ED,"on"+SD)}Di(FC,"onAnimationEnd");Di(UC,"onAnimationIteration");Di(zC,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(BC,"onTransitionEnd");Rs("onMouseEnter",["mouseout","mouseover"]);Rs("onMouseLeave",["mouseout","mouseover"]);Rs("onPointerEnter",["pointerout","pointerover"]);Rs("onPointerLeave",["pointerout","pointerover"]);No("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));No("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));No("onBeforeInput",["compositionend","keypress","textInput","paste"]);No("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));No("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));No("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bD=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function Uw(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,E$(r,t,void 0,e),e.currentTarget=null}function HC(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Uw(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Uw(i,a,u),o=l}}}if(Xf)throw e=jg,Xf=!1,jg=null,e}function we(e,t){var n=t[Kg];n===void 0&&(n=t[Kg]=new Set);var r=e+"__bubble";n.has(r)||(qC(t,e,2,!1),n.add(r))}function dm(e,t,n){var r=0;t&&(r|=4),qC(n,e,r,t)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function Bl(e){if(!e[Cc]){e[Cc]=!0,ZI.forEach(function(n){n!=="selectionchange"&&(bD.has(n)||dm(n,!1,e),dm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cc]||(t[Cc]=!0,dm("selectionchange",!1,t))}}function qC(e,t,n,r){switch(AC(t)){case 1:var i=L$;break;case 4:i=j$;break;default:i=a0}n=i.bind(null,t,n,e),i=void 0,!Lg||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function hm(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Xi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}mC(function(){var u=o,c=r0(n),f=[];e:{var d=WC.get(e);if(d!==void 0){var h=u0,g=e;switch(e){case"keypress":if(vf(n)===0)break e;case"keydown":case"keyup":h=Z$;break;case"focusin":g="focus",h=sm;break;case"focusout":g="blur",h=sm;break;case"beforeblur":case"afterblur":h=sm;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Aw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=U$;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=nD;break;case FC:case UC:case zC:h=W$;break;case BC:h=iD;break;case"scroll":h=V$;break;case"wheel":h=sD;break;case"copy":case"cut":case"paste":h=q$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Rw}var m=(t&4)!==0,_=!m&&e==="scroll",v=m?d!==null?d+"Capture":null:d;m=[];for(var p=u,y;p!==null;){y=p;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,v!==null&&(E=Ll(p,v),E!=null&&m.push(Wl(p,E,y)))),_)break;p=p.return}0<m.length&&(d=new h(d,g,null,n,c),f.push({event:d,listeners:m}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==Dg&&(g=n.relatedTarget||n.fromElement)&&(Xi(g)||g[kr]))break e;if((h||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?Xi(g):null,g!==null&&(_=$o(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(m=Aw,E="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(m=Rw,E="onPointerLeave",v="onPointerEnter",p="pointer"),_=h==null?d:is(h),y=g==null?d:is(g),d=new m(E,p+"leave",h,n,c),d.target=_,d.relatedTarget=y,E=null,Xi(c)===u&&(m=new m(v,p+"enter",g,n,c),m.target=y,m.relatedTarget=_,E=m),_=E,h&&g)t:{for(m=h,v=g,p=0,y=m;y;y=Vo(y))p++;for(y=0,E=v;E;E=Vo(E))y++;for(;0<p-y;)m=Vo(m),p--;for(;0<y-p;)v=Vo(v),y--;for(;p--;){if(m===v||v!==null&&m===v.alternate)break t;m=Vo(m),v=Vo(v)}m=null}else m=null;h!==null&&zw(f,d,h,m,!1),g!==null&&_!==null&&zw(f,_,g,m,!0)}}e:{if(d=u?is(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var S=hD;else if($w(d))if(DC)S=vD;else{S=mD;var I=pD}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=gD);if(S&&(S=S(e,u))){$C(f,S,n,c);break e}I&&I(e,d,u),e==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&Pg(d,"number",d.value)}switch(I=u?is(u):window,e){case"focusin":($w(I)||I.contentEditable==="true")&&(ns=I,zg=u,gl=null);break;case"focusout":gl=zg=ns=null;break;case"mousedown":Bg=!0;break;case"contextmenu":case"mouseup":case"dragend":Bg=!1,Vw(f,n,c);break;case"selectionchange":if(wD)break;case"keydown":case"keyup":Vw(f,n,c)}var T;if(f0)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ts?OC(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(RC&&n.locale!=="ko"&&(ts||O!=="onCompositionStart"?O==="onCompositionEnd"&&ts&&(T=PC()):(ai=c,l0="value"in ai?ai.value:ai.textContent,ts=!0)),I=nd(u,O),0<I.length&&(O=new Pw(O,e,null,n,c),f.push({event:O,listeners:I}),T?O.data=T:(T=NC(n),T!==null&&(O.data=T)))),(T=lD?uD(e,n):cD(e,n))&&(u=nd(u,"onBeforeInput"),0<u.length&&(c=new Pw("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}HC(f,t)})}function Wl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nd(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ll(e,n),o!=null&&r.unshift(Wl(e,o,i)),o=Ll(e,t),o!=null&&r.push(Wl(e,o,i))),e=e.return}return r}function Vo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zw(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ll(n,o),l!=null&&s.unshift(Wl(n,l,a))):i||(l=Ll(n,o),l!=null&&s.push(Wl(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var TD=/\r\n?/g,ID=/\u0000|\uFFFD/g;function Bw(e){return(typeof e=="string"?e:""+e).replace(TD,`
`).replace(ID,"")}function xc(e,t,n){if(t=Bw(t),Bw(e)!==t&&n)throw Error(P(425))}function rd(){}var Wg=null,Hg=null;function qg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gg=typeof setTimeout=="function"?setTimeout:void 0,CD=typeof clearTimeout=="function"?clearTimeout:void 0,Ww=typeof Promise=="function"?Promise:void 0,xD=typeof queueMicrotask=="function"?queueMicrotask:typeof Ww<"u"?function(e){return Ww.resolve(null).then(e).catch(kD)}:Gg;function kD(e){setTimeout(function(){throw e})}function pm(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fl(t)}function mi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hw(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var aa=Math.random().toString(36).slice(2),er="__reactFiber$"+aa,Hl="__reactProps$"+aa,kr="__reactContainer$"+aa,Kg="__reactEvents$"+aa,AD="__reactListeners$"+aa,PD="__reactHandles$"+aa;function Xi(e){var t=e[er];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kr]||n[er]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hw(e);e!==null;){if(n=e[er])return n;e=Hw(e)}return t}e=n,n=e.parentNode}return null}function Du(e){return e=e[er]||e[kr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function is(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ch(e){return e[Hl]||null}var Qg=[],os=-1;function Mi(e){return{current:e}}function Ce(e){0>os||(e.current=Qg[os],Qg[os]=null,os--)}function ve(e,t){os++,Qg[os]=e.current,e.current=t}var xi={},$t=Mi(xi),Qt=Mi(!1),go=xi;function Os(e,t){var n=e.type.contextTypes;if(!n)return xi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Yt(e){return e=e.childContextTypes,e!=null}function id(){Ce(Qt),Ce($t)}function qw(e,t,n){if($t.current!==xi)throw Error(P(168));ve($t,t),ve(Qt,n)}function GC(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,p$(e)||"Unknown",i));return $e({},n,r)}function od(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xi,go=$t.current,ve($t,e),ve(Qt,Qt.current),!0}function Gw(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=GC(e,t,go),r.__reactInternalMemoizedMergedChildContext=e,Ce(Qt),Ce($t),ve($t,e)):Ce(Qt),ve(Qt,n)}var vr=null,fh=!1,mm=!1;function KC(e){vr===null?vr=[e]:vr.push(e)}function RD(e){fh=!0,KC(e)}function Li(){if(!mm&&vr!==null){mm=!0;var e=0,t=he;try{var n=vr;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vr=null,fh=!1}catch(i){throw vr!==null&&(vr=vr.slice(e+1)),_C(i0,Li),i}finally{he=t,mm=!1}}return null}var ss=[],as=0,sd=null,ad=0,mn=[],gn=0,vo=null,_r=1,wr="";function Hi(e,t){ss[as++]=ad,ss[as++]=sd,sd=e,ad=t}function QC(e,t,n){mn[gn++]=_r,mn[gn++]=wr,mn[gn++]=vo,vo=e;var r=_r;e=wr;var i=32-Mn(r)-1;r&=~(1<<i),n+=1;var o=32-Mn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,_r=1<<32-Mn(t)+i|n<<i|r,wr=o+e}else _r=1<<o|n<<i|r,wr=e}function h0(e){e.return!==null&&(Hi(e,1),QC(e,1,0))}function p0(e){for(;e===sd;)sd=ss[--as],ss[as]=null,ad=ss[--as],ss[as]=null;for(;e===vo;)vo=mn[--gn],mn[gn]=null,wr=mn[--gn],mn[gn]=null,_r=mn[--gn],mn[gn]=null}var sn=null,on=null,Pe=!1,Nn=null;function YC(e,t){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kw(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,sn=e,on=mi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,sn=e,on=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vo!==null?{id:_r,overflow:wr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,sn=e,on=null,!0):!1;default:return!1}}function Yg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xg(e){if(Pe){var t=on;if(t){var n=t;if(!Kw(e,t)){if(Yg(e))throw Error(P(418));t=mi(n.nextSibling);var r=sn;t&&Kw(e,t)?YC(r,n):(e.flags=e.flags&-4097|2,Pe=!1,sn=e)}}else{if(Yg(e))throw Error(P(418));e.flags=e.flags&-4097|2,Pe=!1,sn=e}}}function Qw(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sn=e}function kc(e){if(e!==sn)return!1;if(!Pe)return Qw(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qg(e.type,e.memoizedProps)),t&&(t=on)){if(Yg(e))throw XC(),Error(P(418));for(;t;)YC(e,t),t=mi(t.nextSibling)}if(Qw(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){on=mi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}on=null}}else on=sn?mi(e.stateNode.nextSibling):null;return!0}function XC(){for(var e=on;e;)e=mi(e.nextSibling)}function Ns(){on=sn=null,Pe=!1}function m0(e){Nn===null?Nn=[e]:Nn.push(e)}var OD=Vr.ReactCurrentBatchConfig;function Rn(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ld=Mi(null),ud=null,ls=null,g0=null;function v0(){g0=ls=ud=null}function y0(e){var t=ld.current;Ce(ld),e._currentValue=t}function Jg(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Es(e,t){ud=e,g0=ls=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Gt=!0),e.firstContext=null)}function Sn(e){var t=e._currentValue;if(g0!==e)if(e={context:e,memoizedValue:t,next:null},ls===null){if(ud===null)throw Error(P(308));ls=e,ud.dependencies={lanes:0,firstContext:e}}else ls=ls.next=e;return t}var Ji=null;function _0(e){Ji===null?Ji=[e]:Ji.push(e)}function JC(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_0(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ar(e,r)}function Ar(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ei=!1;function w0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ZC(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gi(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ar(e,n)}return i=r.interleaved,i===null?(t.next=t,_0(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ar(e,n)}function yf(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,o0(e,n)}}function Yw(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cd(e,t,n,r){var i=e.updateQueue;ei=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,h=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,m=a;switch(d=t,h=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){f=g.call(h,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,d=typeof g=="function"?g.call(h,f,d):g,d==null)break e;f=$e({},f,d);break e;case 2:ei=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);_o|=s,e.lanes=s,e.memoizedState=f}}function Xw(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var ex=new JI.Component().refs;function Zg(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dh={isMounted:function(e){return(e=e._reactInternals)?$o(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ut(),i=yi(e),o=Tr(r,i);o.payload=t,n!=null&&(o.callback=n),t=gi(e,o,i),t!==null&&(Ln(t,e,i,r),yf(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ut(),i=yi(e),o=Tr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gi(e,o,i),t!==null&&(Ln(t,e,i,r),yf(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),r=yi(e),i=Tr(n,r);i.tag=2,t!=null&&(i.callback=t),t=gi(e,i,r),t!==null&&(Ln(t,e,r,n),yf(t,e,r))}};function Jw(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!zl(n,r)||!zl(i,o):!0}function tx(e,t,n){var r=!1,i=xi,o=t.contextType;return typeof o=="object"&&o!==null?o=Sn(o):(i=Yt(t)?go:$t.current,r=t.contextTypes,o=(r=r!=null)?Os(e,i):xi),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dh,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zw(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dh.enqueueReplaceState(t,t.state,null)}function ev(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ex,w0(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Sn(o):(o=Yt(t)?go:$t.current,i.context=Os(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zg(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&dh.enqueueReplaceState(i,i.state,null),cd(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Da(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===ex&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Ac(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function eE(e){var t=e._init;return t(e._payload)}function nx(e){function t(v,p){if(e){var y=v.deletions;y===null?(v.deletions=[p],v.flags|=16):y.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=_i(v,p),v.index=0,v.sibling=null,v}function o(v,p,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<p?(v.flags|=2,p):y):(v.flags|=2,p)):(v.flags|=1048576,p)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,p,y,E){return p===null||p.tag!==6?(p=Sm(y,v.mode,E),p.return=v,p):(p=i(p,y),p.return=v,p)}function l(v,p,y,E){var S=y.type;return S===es?c(v,p,y.props.children,E,y.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zr&&eE(S)===p.type)?(E=i(p,y.props),E.ref=Da(v,p,y),E.return=v,E):(E=Tf(y.type,y.key,y.props,null,v.mode,E),E.ref=Da(v,p,y),E.return=v,E)}function u(v,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=bm(y,v.mode,E),p.return=v,p):(p=i(p,y.children||[]),p.return=v,p)}function c(v,p,y,E,S){return p===null||p.tag!==7?(p=uo(y,v.mode,E,S),p.return=v,p):(p=i(p,y),p.return=v,p)}function f(v,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Sm(""+p,v.mode,y),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yc:return y=Tf(p.type,p.key,p.props,null,v.mode,y),y.ref=Da(v,null,p),y.return=v,y;case Zo:return p=bm(p,v.mode,y),p.return=v,p;case Zr:var E=p._init;return f(v,E(p._payload),y)}if(Xa(p)||Pa(p))return p=uo(p,v.mode,y,null),p.return=v,p;Ac(v,p)}return null}function d(v,p,y,E){var S=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(v,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yc:return y.key===S?l(v,p,y,E):null;case Zo:return y.key===S?u(v,p,y,E):null;case Zr:return S=y._init,d(v,p,S(y._payload),E)}if(Xa(y)||Pa(y))return S!==null?null:c(v,p,y,E,null);Ac(v,y)}return null}function h(v,p,y,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(y)||null,a(p,v,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case yc:return v=v.get(E.key===null?y:E.key)||null,l(p,v,E,S);case Zo:return v=v.get(E.key===null?y:E.key)||null,u(p,v,E,S);case Zr:var I=E._init;return h(v,p,y,I(E._payload),S)}if(Xa(E)||Pa(E))return v=v.get(y)||null,c(p,v,E,S,null);Ac(p,E)}return null}function g(v,p,y,E){for(var S=null,I=null,T=p,O=p=0,$=null;T!==null&&O<y.length;O++){T.index>O?($=T,T=null):$=T.sibling;var R=d(v,T,y[O],E);if(R===null){T===null&&(T=$);break}e&&T&&R.alternate===null&&t(v,T),p=o(R,p,O),I===null?S=R:I.sibling=R,I=R,T=$}if(O===y.length)return n(v,T),Pe&&Hi(v,O),S;if(T===null){for(;O<y.length;O++)T=f(v,y[O],E),T!==null&&(p=o(T,p,O),I===null?S=T:I.sibling=T,I=T);return Pe&&Hi(v,O),S}for(T=r(v,T);O<y.length;O++)$=h(T,v,O,y[O],E),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?O:$.key),p=o($,p,O),I===null?S=$:I.sibling=$,I=$);return e&&T.forEach(function(te){return t(v,te)}),Pe&&Hi(v,O),S}function m(v,p,y,E){var S=Pa(y);if(typeof S!="function")throw Error(P(150));if(y=S.call(y),y==null)throw Error(P(151));for(var I=S=null,T=p,O=p=0,$=null,R=y.next();T!==null&&!R.done;O++,R=y.next()){T.index>O?($=T,T=null):$=T.sibling;var te=d(v,T,R.value,E);if(te===null){T===null&&(T=$);break}e&&T&&te.alternate===null&&t(v,T),p=o(te,p,O),I===null?S=te:I.sibling=te,I=te,T=$}if(R.done)return n(v,T),Pe&&Hi(v,O),S;if(T===null){for(;!R.done;O++,R=y.next())R=f(v,R.value,E),R!==null&&(p=o(R,p,O),I===null?S=R:I.sibling=R,I=R);return Pe&&Hi(v,O),S}for(T=r(v,T);!R.done;O++,R=y.next())R=h(T,v,O,R.value,E),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?O:R.key),p=o(R,p,O),I===null?S=R:I.sibling=R,I=R);return e&&T.forEach(function(ge){return t(v,ge)}),Pe&&Hi(v,O),S}function _(v,p,y,E){if(typeof y=="object"&&y!==null&&y.type===es&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case yc:e:{for(var S=y.key,I=p;I!==null;){if(I.key===S){if(S=y.type,S===es){if(I.tag===7){n(v,I.sibling),p=i(I,y.props.children),p.return=v,v=p;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zr&&eE(S)===I.type){n(v,I.sibling),p=i(I,y.props),p.ref=Da(v,I,y),p.return=v,v=p;break e}n(v,I);break}else t(v,I);I=I.sibling}y.type===es?(p=uo(y.props.children,v.mode,E,y.key),p.return=v,v=p):(E=Tf(y.type,y.key,y.props,null,v.mode,E),E.ref=Da(v,p,y),E.return=v,v=E)}return s(v);case Zo:e:{for(I=y.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(v,p.sibling),p=i(p,y.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=bm(y,v.mode,E),p.return=v,v=p}return s(v);case Zr:return I=y._init,_(v,p,I(y._payload),E)}if(Xa(y))return g(v,p,y,E);if(Pa(y))return m(v,p,y,E);Ac(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,y),p.return=v,v=p):(n(v,p),p=Sm(y,v.mode,E),p.return=v,v=p),s(v)):n(v,p)}return _}var $s=nx(!0),rx=nx(!1),Mu={},sr=Mi(Mu),ql=Mi(Mu),Gl=Mi(Mu);function Zi(e){if(e===Mu)throw Error(P(174));return e}function E0(e,t){switch(ve(Gl,t),ve(ql,e),ve(sr,Mu),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Og(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Og(t,e)}Ce(sr),ve(sr,t)}function Ds(){Ce(sr),Ce(ql),Ce(Gl)}function ix(e){Zi(Gl.current);var t=Zi(sr.current),n=Og(t,e.type);t!==n&&(ve(ql,e),ve(sr,n))}function S0(e){ql.current===e&&(Ce(sr),Ce(ql))}var Oe=Mi(0);function fd(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gm=[];function b0(){for(var e=0;e<gm.length;e++)gm[e]._workInProgressVersionPrimary=null;gm.length=0}var _f=Vr.ReactCurrentDispatcher,vm=Vr.ReactCurrentBatchConfig,yo=0,Ne=null,Ze=null,st=null,dd=!1,vl=!1,Kl=0,ND=0;function It(){throw Error(P(321))}function T0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fn(e[n],t[n]))return!1;return!0}function I0(e,t,n,r,i,o){if(yo=o,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_f.current=e===null||e.memoizedState===null?LD:jD,e=n(r,i),vl){o=0;do{if(vl=!1,Kl=0,25<=o)throw Error(P(301));o+=1,st=Ze=null,t.updateQueue=null,_f.current=VD,e=n(r,i)}while(vl)}if(_f.current=hd,t=Ze!==null&&Ze.next!==null,yo=0,st=Ze=Ne=null,dd=!1,t)throw Error(P(300));return e}function C0(){var e=Kl!==0;return Kl=0,e}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ne.memoizedState=st=e:st=st.next=e,st}function bn(){if(Ze===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=st===null?Ne.memoizedState:st.next;if(t!==null)st=t,Ze=e;else{if(e===null)throw Error(P(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},st===null?Ne.memoizedState=st=e:st=st.next=e}return st}function Ql(e,t){return typeof t=="function"?t(e):t}function ym(e){var t=bn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((yo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Ne.lanes|=c,_o|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Fn(r,t.memoizedState)||(Gt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ne.lanes|=o,_o|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _m(e){var t=bn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Fn(o,t.memoizedState)||(Gt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ox(){}function sx(e,t){var n=Ne,r=bn(),i=t(),o=!Fn(r.memoizedState,i);if(o&&(r.memoizedState=i,Gt=!0),r=r.queue,x0(ux.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,Yl(9,lx.bind(null,n,r,i,t),void 0,null),lt===null)throw Error(P(349));yo&30||ax(n,t,i)}return i}function ax(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lx(e,t,n,r){t.value=n,t.getSnapshot=r,cx(t)&&fx(e)}function ux(e,t,n){return n(function(){cx(t)&&fx(e)})}function cx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fn(e,n)}catch{return!0}}function fx(e){var t=Ar(e,1);t!==null&&Ln(t,e,1,-1)}function tE(e){var t=Yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ql,lastRenderedState:e},t.queue=e,e=e.dispatch=MD.bind(null,Ne,e),[t.memoizedState,e]}function Yl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dx(){return bn().memoizedState}function wf(e,t,n,r){var i=Yn();Ne.flags|=e,i.memoizedState=Yl(1|t,n,void 0,r===void 0?null:r)}function hh(e,t,n,r){var i=bn();r=r===void 0?null:r;var o=void 0;if(Ze!==null){var s=Ze.memoizedState;if(o=s.destroy,r!==null&&T0(r,s.deps)){i.memoizedState=Yl(t,n,o,r);return}}Ne.flags|=e,i.memoizedState=Yl(1|t,n,o,r)}function nE(e,t){return wf(8390656,8,e,t)}function x0(e,t){return hh(2048,8,e,t)}function hx(e,t){return hh(4,2,e,t)}function px(e,t){return hh(4,4,e,t)}function mx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gx(e,t,n){return n=n!=null?n.concat([e]):null,hh(4,4,mx.bind(null,t,e),n)}function k0(){}function vx(e,t){var n=bn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&T0(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yx(e,t){var n=bn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&T0(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _x(e,t,n){return yo&21?(Fn(n,t)||(n=SC(),Ne.lanes|=n,_o|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Gt=!0),e.memoizedState=n)}function $D(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=vm.transition;vm.transition={};try{e(!1),t()}finally{he=n,vm.transition=r}}function wx(){return bn().memoizedState}function DD(e,t,n){var r=yi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ex(e))Sx(t,n);else if(n=JC(e,t,n,r),n!==null){var i=Ut();Ln(n,e,r,i),bx(n,t,r)}}function MD(e,t,n){var r=yi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ex(e))Sx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Fn(a,s)){var l=t.interleaved;l===null?(i.next=i,_0(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=JC(e,t,i,r),n!==null&&(i=Ut(),Ln(n,e,r,i),bx(n,t,r))}}function Ex(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Sx(e,t){vl=dd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,o0(e,n)}}var hd={readContext:Sn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},LD={readContext:Sn,useCallback:function(e,t){return Yn().memoizedState=[e,t===void 0?null:t],e},useContext:Sn,useEffect:nE,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wf(4194308,4,mx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wf(4194308,4,e,t)},useInsertionEffect:function(e,t){return wf(4,2,e,t)},useMemo:function(e,t){var n=Yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=DD.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=Yn();return e={current:e},t.memoizedState=e},useState:tE,useDebugValue:k0,useDeferredValue:function(e){return Yn().memoizedState=e},useTransition:function(){var e=tE(!1),t=e[0];return e=$D.bind(null,e[1]),Yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,i=Yn();if(Pe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),lt===null)throw Error(P(349));yo&30||ax(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,nE(ux.bind(null,r,o,e),[e]),r.flags|=2048,Yl(9,lx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Yn(),t=lt.identifierPrefix;if(Pe){var n=wr,r=_r;n=(r&~(1<<32-Mn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ND++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jD={readContext:Sn,useCallback:vx,useContext:Sn,useEffect:x0,useImperativeHandle:gx,useInsertionEffect:hx,useLayoutEffect:px,useMemo:yx,useReducer:ym,useRef:dx,useState:function(){return ym(Ql)},useDebugValue:k0,useDeferredValue:function(e){var t=bn();return _x(t,Ze.memoizedState,e)},useTransition:function(){var e=ym(Ql)[0],t=bn().memoizedState;return[e,t]},useMutableSource:ox,useSyncExternalStore:sx,useId:wx,unstable_isNewReconciler:!1},VD={readContext:Sn,useCallback:vx,useContext:Sn,useEffect:x0,useImperativeHandle:gx,useInsertionEffect:hx,useLayoutEffect:px,useMemo:yx,useReducer:_m,useRef:dx,useState:function(){return _m(Ql)},useDebugValue:k0,useDeferredValue:function(e){var t=bn();return Ze===null?t.memoizedState=e:_x(t,Ze.memoizedState,e)},useTransition:function(){var e=_m(Ql)[0],t=bn().memoizedState;return[e,t]},useMutableSource:ox,useSyncExternalStore:sx,useId:wx,unstable_isNewReconciler:!1};function Ms(e,t){try{var n="",r=t;do n+=h$(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wm(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function tv(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var FD=typeof WeakMap=="function"?WeakMap:Map;function Tx(e,t,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){md||(md=!0,fv=r),tv(e,t)},n}function Ix(e,t,n){n=Tr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){tv(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){tv(e,t),typeof r!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function rE(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new FD;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=e4.bind(null,e,t,n),t.then(e,e))}function iE(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oE(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tr(-1,1),t.tag=2,gi(n,t,1))),n.lanes|=1),e)}var UD=Vr.ReactCurrentOwner,Gt=!1;function Vt(e,t,n,r){t.child=e===null?rx(t,null,n,r):$s(t,e.child,n,r)}function sE(e,t,n,r,i){n=n.render;var o=t.ref;return Es(t,i),r=I0(e,t,n,r,o,i),n=C0(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(Pe&&n&&h0(t),t.flags|=1,Vt(e,t,r,i),t.child)}function aE(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!M0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Cx(e,t,o,r,i)):(e=Tf(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:zl,n(s,r)&&e.ref===t.ref)return Pr(e,t,i)}return t.flags|=1,e=_i(o,r),e.ref=t.ref,e.return=t,t.child=e}function Cx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(zl(o,r)&&e.ref===t.ref)if(Gt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Gt=!0);else return t.lanes=e.lanes,Pr(e,t,i)}return nv(e,t,n,r,i)}function xx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(cs,nn),nn|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(cs,nn),nn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(cs,nn),nn|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ve(cs,nn),nn|=r;return Vt(e,t,i,n),t.child}function kx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function nv(e,t,n,r,i){var o=Yt(n)?go:$t.current;return o=Os(t,o),Es(t,i),n=I0(e,t,n,r,o,i),r=C0(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(Pe&&r&&h0(t),t.flags|=1,Vt(e,t,n,i),t.child)}function lE(e,t,n,r,i){if(Yt(n)){var o=!0;od(t)}else o=!1;if(Es(t,i),t.stateNode===null)Ef(e,t),tx(t,n,r),ev(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Sn(u):(u=Yt(n)?go:$t.current,u=Os(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Zw(t,s,r,u),ei=!1;var d=t.memoizedState;s.state=d,cd(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Qt.current||ei?(typeof c=="function"&&(Zg(t,n,c,r),l=t.memoizedState),(a=ei||Jw(t,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ZC(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Rn(t.type,a),s.props=u,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=Yt(n)?go:$t.current,l=Os(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Zw(t,s,r,l),ei=!1,d=t.memoizedState,s.state=d,cd(t,r,s,i);var g=t.memoizedState;a!==f||d!==g||Qt.current||ei?(typeof h=="function"&&(Zg(t,n,h,r),g=t.memoizedState),(u=ei||Jw(t,n,u,r,d,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return rv(e,t,n,r,o,i)}function rv(e,t,n,r,i,o){kx(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Gw(t,n,!1),Pr(e,t,o);r=t.stateNode,UD.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=$s(t,e.child,null,o),t.child=$s(t,null,a,o)):Vt(e,t,a,o),t.memoizedState=r.state,i&&Gw(t,n,!0),t.child}function Ax(e){var t=e.stateNode;t.pendingContext?qw(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qw(e,t.context,!1),E0(e,t.containerInfo)}function uE(e,t,n,r,i){return Ns(),m0(i),t.flags|=256,Vt(e,t,n,r),t.child}var iv={dehydrated:null,treeContext:null,retryLane:0};function ov(e){return{baseLanes:e,cachePool:null,transitions:null}}function Px(e,t,n){var r=t.pendingProps,i=Oe.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Oe,i&1),e===null)return Xg(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=gh(s,r,0,null),e=uo(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ov(n),t.memoizedState=iv,e):A0(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return zD(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=_i(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=_i(a,o):(o=uo(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ov(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=iv,r}return o=e.child,e=o.sibling,r=_i(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function A0(e,t){return t=gh({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pc(e,t,n,r){return r!==null&&m0(r),$s(t,e.child,null,n),e=A0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zD(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=wm(Error(P(422))),Pc(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=gh({mode:"visible",children:r.children},i,0,null),o=uo(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&$s(t,e.child,null,s),t.child.memoizedState=ov(s),t.memoizedState=iv,o);if(!(t.mode&1))return Pc(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(P(419)),r=wm(o,r,void 0),Pc(e,t,s,r)}if(a=(s&e.childLanes)!==0,Gt||a){if(r=lt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ar(e,i),Ln(r,e,i,-1))}return D0(),r=wm(Error(P(421))),Pc(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=t4.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,on=mi(i.nextSibling),sn=t,Pe=!0,Nn=null,e!==null&&(mn[gn++]=_r,mn[gn++]=wr,mn[gn++]=vo,_r=e.id,wr=e.overflow,vo=t),t=A0(t,r.children),t.flags|=4096,t)}function cE(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jg(e.return,t,n)}function Em(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Rx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Vt(e,t,r.children,n),r=Oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cE(e,n,t);else if(e.tag===19)cE(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fd(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Em(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fd(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Em(t,!0,n,null,o);break;case"together":Em(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ef(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_o|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function BD(e,t,n){switch(t.tag){case 3:Ax(t),Ns();break;case 5:ix(t);break;case 1:Yt(t.type)&&od(t);break;case 4:E0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(ld,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Oe,Oe.current&1),t.flags|=128,null):n&t.child.childLanes?Px(e,t,n):(ve(Oe,Oe.current&1),e=Pr(e,t,n),e!==null?e.sibling:null);ve(Oe,Oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Oe,Oe.current),r)break;return null;case 22:case 23:return t.lanes=0,xx(e,t,n)}return Pr(e,t,n)}var Ox,sv,Nx,$x;Ox=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sv=function(){};Nx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zi(sr.current);var o=null;switch(n){case"input":i=kg(e,i),r=kg(e,r),o=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),o=[];break;case"textarea":i=Rg(e,i),r=Rg(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rd)}Ng(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Dl.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Dl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};$x=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ma(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function WD(e,t,n){var r=t.pendingProps;switch(p0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(t),null;case 1:return Yt(t.type)&&id(),Ct(t),null;case 3:return r=t.stateNode,Ds(),Ce(Qt),Ce($t),b0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(kc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nn!==null&&(pv(Nn),Nn=null))),sv(e,t),Ct(t),null;case 5:S0(t);var i=Zi(Gl.current);if(n=t.type,e!==null&&t.stateNode!=null)Nx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ct(t),null}if(e=Zi(sr.current),kc(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[er]=t,r[Hl]=o,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Za.length;i++)we(Za[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":_w(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":Ew(r,o),we("invalid",r)}Ng(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&xc(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&xc(r.textContent,a,e),i=["children",""+a]):Dl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&we("scroll",r)}switch(n){case"input":_c(r),ww(r,o,!0);break;case"textarea":_c(r),Sw(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=rd)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=aC(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[er]=t,e[Hl]=r,Ox(e,t,!1,!1),t.stateNode=e;e:{switch(s=$g(n,r),n){case"dialog":we("cancel",e),we("close",e),i=r;break;case"iframe":case"object":case"embed":we("load",e),i=r;break;case"video":case"audio":for(i=0;i<Za.length;i++)we(Za[i],e);i=r;break;case"source":we("error",e),i=r;break;case"img":case"image":case"link":we("error",e),we("load",e),i=r;break;case"details":we("toggle",e),i=r;break;case"input":_w(e,r),i=kg(e,r),we("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),we("invalid",e);break;case"textarea":Ew(e,r),i=Rg(e,r),we("invalid",e);break;default:i=r}Ng(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?cC(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lC(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ml(e,l):typeof l=="number"&&Ml(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Dl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&we("scroll",e):l!=null&&Zy(e,o,l,s))}switch(n){case"input":_c(e),ww(e,r,!1);break;case"textarea":_c(e),Sw(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ci(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?vs(e,!!r.multiple,o,!1):r.defaultValue!=null&&vs(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=rd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ct(t),null;case 6:if(e&&t.stateNode!=null)$x(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Zi(Gl.current),Zi(sr.current),kc(t)){if(r=t.stateNode,n=t.memoizedProps,r[er]=t,(o=r.nodeValue!==n)&&(e=sn,e!==null))switch(e.tag){case 3:xc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xc(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=t,t.stateNode=r}return Ct(t),null;case 13:if(Ce(Oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&on!==null&&t.mode&1&&!(t.flags&128))XC(),Ns(),t.flags|=98560,o=!1;else if(o=kc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[er]=t}else Ns(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ct(t),o=!1}else Nn!==null&&(pv(Nn),Nn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Oe.current&1?tt===0&&(tt=3):D0())),t.updateQueue!==null&&(t.flags|=4),Ct(t),null);case 4:return Ds(),sv(e,t),e===null&&Bl(t.stateNode.containerInfo),Ct(t),null;case 10:return y0(t.type._context),Ct(t),null;case 17:return Yt(t.type)&&id(),Ct(t),null;case 19:if(Ce(Oe),o=t.memoizedState,o===null)return Ct(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ma(o,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=fd(e),s!==null){for(t.flags|=128,Ma(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Oe,Oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ue()>Ls&&(t.flags|=128,r=!0,Ma(o,!1),t.lanes=4194304)}else{if(!r)if(e=fd(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ma(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Pe)return Ct(t),null}else 2*Ue()-o.renderingStartTime>Ls&&n!==1073741824&&(t.flags|=128,r=!0,Ma(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ue(),t.sibling=null,n=Oe.current,ve(Oe,r?n&1|2:n&1),t):(Ct(t),null);case 22:case 23:return $0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?nn&1073741824&&(Ct(t),t.subtreeFlags&6&&(t.flags|=8192)):Ct(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function HD(e,t){switch(p0(t),t.tag){case 1:return Yt(t.type)&&id(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ds(),Ce(Qt),Ce($t),b0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return S0(t),null;case 13:if(Ce(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Ns()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Oe),null;case 4:return Ds(),null;case 10:return y0(t.type._context),null;case 22:case 23:return $0(),null;case 24:return null;default:return null}}var Rc=!1,Pt=!1,qD=typeof WeakSet=="function"?WeakSet:Set,L=null;function us(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function av(e,t,n){try{n()}catch(r){je(e,t,r)}}var fE=!1;function GD(e,t){if(Wg=ed,e=jC(),d0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hg={focusedElem:e,selectionRange:n},ed=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,_=g.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:Rn(t.type,m),_);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){je(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return g=fE,fE=!1,g}function yl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&av(t,n,o)}i=i.next}while(i!==r)}}function ph(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function lv(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dx(e){var t=e.alternate;t!==null&&(e.alternate=null,Dx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[er],delete t[Hl],delete t[Kg],delete t[AD],delete t[PD])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mx(e){return e.tag===5||e.tag===3||e.tag===4}function dE(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uv(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rd));else if(r!==4&&(e=e.child,e!==null))for(uv(e,t,n),e=e.sibling;e!==null;)uv(e,t,n),e=e.sibling}function cv(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cv(e,t,n),e=e.sibling;e!==null;)cv(e,t,n),e=e.sibling}var pt=null,On=!1;function qr(e,t,n){for(n=n.child;n!==null;)Lx(e,t,n),n=n.sibling}function Lx(e,t,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(sh,n)}catch{}switch(n.tag){case 5:Pt||us(n,t);case 6:var r=pt,i=On;pt=null,qr(e,t,n),pt=r,On=i,pt!==null&&(On?(e=pt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(On?(e=pt,n=n.stateNode,e.nodeType===8?pm(e.parentNode,n):e.nodeType===1&&pm(e,n),Fl(e)):pm(pt,n.stateNode));break;case 4:r=pt,i=On,pt=n.stateNode.containerInfo,On=!0,qr(e,t,n),pt=r,On=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&av(n,t,s),i=i.next}while(i!==r)}qr(e,t,n);break;case 1:if(!Pt&&(us(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,t,a)}qr(e,t,n);break;case 21:qr(e,t,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,qr(e,t,n),Pt=r):qr(e,t,n);break;default:qr(e,t,n)}}function hE(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qD),t.forEach(function(r){var i=n4.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function An(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,On=!1;break e;case 3:pt=a.stateNode.containerInfo,On=!0;break e;case 4:pt=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(pt===null)throw Error(P(160));Lx(o,s,i),pt=null,On=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){je(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jx(t,e),t=t.sibling}function jx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(An(t,e),Qn(e),r&4){try{yl(3,e,e.return),ph(3,e)}catch(m){je(e,e.return,m)}try{yl(5,e,e.return)}catch(m){je(e,e.return,m)}}break;case 1:An(t,e),Qn(e),r&512&&n!==null&&us(n,n.return);break;case 5:if(An(t,e),Qn(e),r&512&&n!==null&&us(n,n.return),e.flags&32){var i=e.stateNode;try{Ml(i,"")}catch(m){je(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&oC(i,o),$g(a,s);var u=$g(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?cC(i,f):c==="dangerouslySetInnerHTML"?lC(i,f):c==="children"?Ml(i,f):Zy(i,c,f,u)}switch(a){case"input":Ag(i,o);break;case"textarea":sC(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?vs(i,!!o.multiple,h,!1):d!==!!o.multiple&&(o.defaultValue!=null?vs(i,!!o.multiple,o.defaultValue,!0):vs(i,!!o.multiple,o.multiple?[]:"",!1))}i[Hl]=o}catch(m){je(e,e.return,m)}}break;case 6:if(An(t,e),Qn(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){je(e,e.return,m)}}break;case 3:if(An(t,e),Qn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fl(t.containerInfo)}catch(m){je(e,e.return,m)}break;case 4:An(t,e),Qn(e);break;case 13:An(t,e),Qn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(O0=Ue())),r&4&&hE(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Pt=(u=Pt)||c,An(t,e),Pt=u):An(t,e),Qn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(L=e,c=e.child;c!==null;){for(f=L=c;L!==null;){switch(d=L,h=d.child,d.tag){case 0:case 11:case 14:case 15:yl(4,d,d.return);break;case 1:us(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){je(r,n,m)}}break;case 5:us(d,d.return);break;case 22:if(d.memoizedState!==null){mE(f);continue}}h!==null?(h.return=d,L=h):mE(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uC("display",s))}catch(m){je(e,e.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){je(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:An(t,e),Qn(e),r&4&&hE(e);break;case 21:break;default:An(t,e),Qn(e)}}function Qn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mx(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ml(i,""),r.flags&=-33);var o=dE(e);cv(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=dE(e);uv(e,a,s);break;default:throw Error(P(161))}}catch(l){je(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function KD(e,t,n){L=e,Vx(e)}function Vx(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Rc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pt;a=Rc;var u=Pt;if(Rc=s,(Pt=l)&&!u)for(L=i;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?gE(i):l!==null?(l.return=s,L=l):gE(i);for(;o!==null;)L=o,Vx(o),o=o.sibling;L=i,Rc=a,Pt=u}pE(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):pE(e)}}function pE(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pt||ph(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Xw(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xw(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Fl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Pt||t.flags&512&&lv(t)}catch(d){je(t,t.return,d)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function mE(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function gE(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ph(4,t)}catch(l){je(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){je(t,i,l)}}var o=t.return;try{lv(t)}catch(l){je(t,o,l)}break;case 5:var s=t.return;try{lv(t)}catch(l){je(t,s,l)}}}catch(l){je(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var QD=Math.ceil,pd=Vr.ReactCurrentDispatcher,P0=Vr.ReactCurrentOwner,En=Vr.ReactCurrentBatchConfig,se=0,lt=null,Ge=null,_t=0,nn=0,cs=Mi(0),tt=0,Xl=null,_o=0,mh=0,R0=0,_l=null,qt=null,O0=0,Ls=1/0,mr=null,md=!1,fv=null,vi=null,Oc=!1,li=null,gd=0,wl=0,dv=null,Sf=-1,bf=0;function Ut(){return se&6?Ue():Sf!==-1?Sf:Sf=Ue()}function yi(e){return e.mode&1?se&2&&_t!==0?_t&-_t:OD.transition!==null?(bf===0&&(bf=SC()),bf):(e=he,e!==0||(e=window.event,e=e===void 0?16:AC(e.type)),e):1}function Ln(e,t,n,r){if(50<wl)throw wl=0,dv=null,Error(P(185));Nu(e,n,r),(!(se&2)||e!==lt)&&(e===lt&&(!(se&2)&&(mh|=n),tt===4&&ni(e,_t)),Xt(e,r),n===1&&se===0&&!(t.mode&1)&&(Ls=Ue()+500,fh&&Li()))}function Xt(e,t){var n=e.callbackNode;O$(e,t);var r=Zf(e,e===lt?_t:0);if(r===0)n!==null&&Iw(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Iw(n),t===1)e.tag===0?RD(vE.bind(null,e)):KC(vE.bind(null,e)),xD(function(){!(se&6)&&Li()}),n=null;else{switch(bC(r)){case 1:n=i0;break;case 4:n=wC;break;case 16:n=Jf;break;case 536870912:n=EC;break;default:n=Jf}n=Gx(n,Fx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fx(e,t){if(Sf=-1,bf=0,se&6)throw Error(P(327));var n=e.callbackNode;if(Ss()&&e.callbackNode!==n)return null;var r=Zf(e,e===lt?_t:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vd(e,r);else{t=r;var i=se;se|=2;var o=zx();(lt!==e||_t!==t)&&(mr=null,Ls=Ue()+500,lo(e,t));do try{JD();break}catch(a){Ux(e,a)}while(!0);v0(),pd.current=o,se=i,Ge!==null?t=0:(lt=null,_t=0,t=tt)}if(t!==0){if(t===2&&(i=Vg(e),i!==0&&(r=i,t=hv(e,i))),t===1)throw n=Xl,lo(e,0),ni(e,r),Xt(e,Ue()),n;if(t===6)ni(e,r);else{if(i=e.current.alternate,!(r&30)&&!YD(i)&&(t=vd(e,r),t===2&&(o=Vg(e),o!==0&&(r=o,t=hv(e,o))),t===1))throw n=Xl,lo(e,0),ni(e,r),Xt(e,Ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:qi(e,qt,mr);break;case 3:if(ni(e,r),(r&130023424)===r&&(t=O0+500-Ue(),10<t)){if(Zf(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gg(qi.bind(null,e,qt,mr),t);break}qi(e,qt,mr);break;case 4:if(ni(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Mn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*QD(r/1960))-r,10<r){e.timeoutHandle=Gg(qi.bind(null,e,qt,mr),r);break}qi(e,qt,mr);break;case 5:qi(e,qt,mr);break;default:throw Error(P(329))}}}return Xt(e,Ue()),e.callbackNode===n?Fx.bind(null,e):null}function hv(e,t){var n=_l;return e.current.memoizedState.isDehydrated&&(lo(e,t).flags|=256),e=vd(e,t),e!==2&&(t=qt,qt=n,t!==null&&pv(t)),e}function pv(e){qt===null?qt=e:qt.push.apply(qt,e)}function YD(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Fn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ni(e,t){for(t&=~R0,t&=~mh,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mn(t),r=1<<n;e[n]=-1,t&=~r}}function vE(e){if(se&6)throw Error(P(327));Ss();var t=Zf(e,0);if(!(t&1))return Xt(e,Ue()),null;var n=vd(e,t);if(e.tag!==0&&n===2){var r=Vg(e);r!==0&&(t=r,n=hv(e,r))}if(n===1)throw n=Xl,lo(e,0),ni(e,t),Xt(e,Ue()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qi(e,qt,mr),Xt(e,Ue()),null}function N0(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Ls=Ue()+500,fh&&Li())}}function wo(e){li!==null&&li.tag===0&&!(se&6)&&Ss();var t=se;se|=1;var n=En.transition,r=he;try{if(En.transition=null,he=1,e)return e()}finally{he=r,En.transition=n,se=t,!(se&6)&&Li()}}function $0(){nn=cs.current,Ce(cs)}function lo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,CD(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(p0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&id();break;case 3:Ds(),Ce(Qt),Ce($t),b0();break;case 5:S0(r);break;case 4:Ds();break;case 13:Ce(Oe);break;case 19:Ce(Oe);break;case 10:y0(r.type._context);break;case 22:case 23:$0()}n=n.return}if(lt=e,Ge=e=_i(e.current,null),_t=nn=t,tt=0,Xl=null,R0=mh=_o=0,qt=_l=null,Ji!==null){for(t=0;t<Ji.length;t++)if(n=Ji[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ji=null}return e}function Ux(e,t){do{var n=Ge;try{if(v0(),_f.current=hd,dd){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dd=!1}if(yo=0,st=Ze=Ne=null,vl=!1,Kl=0,P0.current=null,n===null||n.return===null){tt=1,Xl=t,Ge=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=_t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=iE(s);if(h!==null){h.flags&=-257,oE(h,s,a,o,t),h.mode&1&&rE(o,u,t),t=h,l=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(l),t.updateQueue=m}else g.add(l);break e}else{if(!(t&1)){rE(o,u,t),D0();break e}l=Error(P(426))}}else if(Pe&&a.mode&1){var _=iE(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),oE(_,s,a,o,t),m0(Ms(l,a));break e}}o=l=Ms(l,a),tt!==4&&(tt=2),_l===null?_l=[o]:_l.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Tx(o,l,t);Yw(o,v);break e;case 1:a=l;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(vi===null||!vi.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=Ix(o,a,t);Yw(o,E);break e}}o=o.return}while(o!==null)}Wx(n)}catch(S){t=S,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function zx(){var e=pd.current;return pd.current=hd,e===null?hd:e}function D0(){(tt===0||tt===3||tt===2)&&(tt=4),lt===null||!(_o&268435455)&&!(mh&268435455)||ni(lt,_t)}function vd(e,t){var n=se;se|=2;var r=zx();(lt!==e||_t!==t)&&(mr=null,lo(e,t));do try{XD();break}catch(i){Ux(e,i)}while(!0);if(v0(),se=n,pd.current=r,Ge!==null)throw Error(P(261));return lt=null,_t=0,tt}function XD(){for(;Ge!==null;)Bx(Ge)}function JD(){for(;Ge!==null&&!b$();)Bx(Ge)}function Bx(e){var t=qx(e.alternate,e,nn);e.memoizedProps=e.pendingProps,t===null?Wx(e):Ge=t,P0.current=null}function Wx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=HD(n,t),n!==null){n.flags&=32767,Ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Ge=null;return}}else if(n=WD(n,t,nn),n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);tt===0&&(tt=5)}function qi(e,t,n){var r=he,i=En.transition;try{En.transition=null,he=1,ZD(e,t,n,r)}finally{En.transition=i,he=r}return null}function ZD(e,t,n,r){do Ss();while(li!==null);if(se&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(N$(e,o),e===lt&&(Ge=lt=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oc||(Oc=!0,Gx(Jf,function(){return Ss(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=En.transition,En.transition=null;var s=he;he=1;var a=se;se|=4,P0.current=null,GD(e,n),jx(n,e),_D(Hg),ed=!!Wg,Hg=Wg=null,e.current=n,KD(n),T$(),se=a,he=s,En.transition=o}else e.current=n;if(Oc&&(Oc=!1,li=e,gd=i),o=e.pendingLanes,o===0&&(vi=null),x$(n.stateNode),Xt(e,Ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(md)throw md=!1,e=fv,fv=null,e;return gd&1&&e.tag!==0&&Ss(),o=e.pendingLanes,o&1?e===dv?wl++:(wl=0,dv=e):wl=0,Li(),null}function Ss(){if(li!==null){var e=bC(gd),t=En.transition,n=he;try{if(En.transition=null,he=16>e?16:e,li===null)var r=!1;else{if(e=li,li=null,gd=0,se&6)throw Error(P(331));var i=se;for(se|=4,L=e.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:yl(8,c,o)}var f=c.child;if(f!==null)f.return=c,L=f;else for(;L!==null;){c=L;var d=c.sibling,h=c.return;if(Dx(c),c===u){L=null;break}if(d!==null){d.return=h,L=d;break}L=h}}}var g=o.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var _=m.sibling;m.sibling=null,m=_}while(m!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yl(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,L=v;break e}L=o.return}}var p=e.current;for(L=p;L!==null;){s=L;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,L=y;else e:for(s=p;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ph(9,a)}}catch(S){je(a,a.return,S)}if(a===s){L=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,L=E;break e}L=a.return}}if(se=i,Li(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(sh,e)}catch{}r=!0}return r}finally{he=n,En.transition=t}}return!1}function yE(e,t,n){t=Ms(n,t),t=Tx(e,t,1),e=gi(e,t,1),t=Ut(),e!==null&&(Nu(e,1,t),Xt(e,t))}function je(e,t,n){if(e.tag===3)yE(e,e,n);else for(;t!==null;){if(t.tag===3){yE(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vi===null||!vi.has(r))){e=Ms(n,e),e=Ix(t,e,1),t=gi(t,e,1),e=Ut(),t!==null&&(Nu(t,1,e),Xt(t,e));break}}t=t.return}}function e4(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ut(),e.pingedLanes|=e.suspendedLanes&n,lt===e&&(_t&n)===n&&(tt===4||tt===3&&(_t&130023424)===_t&&500>Ue()-O0?lo(e,0):R0|=n),Xt(e,t)}function Hx(e,t){t===0&&(e.mode&1?(t=Sc,Sc<<=1,!(Sc&130023424)&&(Sc=4194304)):t=1);var n=Ut();e=Ar(e,t),e!==null&&(Nu(e,t,n),Xt(e,n))}function t4(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hx(e,n)}function n4(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Hx(e,n)}var qx;qx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qt.current)Gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Gt=!1,BD(e,t,n);Gt=!!(e.flags&131072)}else Gt=!1,Pe&&t.flags&1048576&&QC(t,ad,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ef(e,t),e=t.pendingProps;var i=Os(t,$t.current);Es(t,n),i=I0(null,t,r,e,i,n);var o=C0();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Yt(r)?(o=!0,od(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,w0(t),i.updater=dh,t.stateNode=i,i._reactInternals=t,ev(t,r,e,n),t=rv(null,t,r,!0,o,n)):(t.tag=0,Pe&&o&&h0(t),Vt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ef(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=i4(r),e=Rn(r,e),i){case 0:t=nv(null,t,r,e,n);break e;case 1:t=lE(null,t,r,e,n);break e;case 11:t=sE(null,t,r,e,n);break e;case 14:t=aE(null,t,r,Rn(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rn(r,i),nv(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rn(r,i),lE(e,t,r,i,n);case 3:e:{if(Ax(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ZC(e,t),cd(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ms(Error(P(423)),t),t=uE(e,t,r,n,i);break e}else if(r!==i){i=Ms(Error(P(424)),t),t=uE(e,t,r,n,i);break e}else for(on=mi(t.stateNode.containerInfo.firstChild),sn=t,Pe=!0,Nn=null,n=rx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),r===i){t=Pr(e,t,n);break e}Vt(e,t,r,n)}t=t.child}return t;case 5:return ix(t),e===null&&Xg(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,qg(r,i)?s=null:o!==null&&qg(r,o)&&(t.flags|=32),kx(e,t),Vt(e,t,s,n),t.child;case 6:return e===null&&Xg(t),null;case 13:return Px(e,t,n);case 4:return E0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$s(t,null,r,n):Vt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rn(r,i),sE(e,t,r,i,n);case 7:return Vt(e,t,t.pendingProps,n),t.child;case 8:return Vt(e,t,t.pendingProps.children,n),t.child;case 12:return Vt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ve(ld,r._currentValue),r._currentValue=s,o!==null)if(Fn(o.value,s)){if(o.children===i.children&&!Qt.current){t=Pr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Tr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Jg(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Jg(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Vt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Es(t,n),i=Sn(i),r=r(i),t.flags|=1,Vt(e,t,r,n),t.child;case 14:return r=t.type,i=Rn(r,t.pendingProps),i=Rn(r.type,i),aE(e,t,r,i,n);case 15:return Cx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rn(r,i),Ef(e,t),t.tag=1,Yt(r)?(e=!0,od(t)):e=!1,Es(t,n),tx(t,r,i),ev(t,r,i,n),rv(null,t,r,!0,e,n);case 19:return Rx(e,t,n);case 22:return xx(e,t,n)}throw Error(P(156,t.tag))};function Gx(e,t){return _C(e,t)}function r4(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,t,n,r){return new r4(e,t,n,r)}function M0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function i4(e){if(typeof e=="function")return M0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===t0)return 11;if(e===n0)return 14}return 2}function _i(e,t){var n=e.alternate;return n===null?(n=wn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tf(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")M0(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case es:return uo(n.children,i,o,t);case e0:s=8,i|=8;break;case Tg:return e=wn(12,n,t,i|2),e.elementType=Tg,e.lanes=o,e;case Ig:return e=wn(13,n,t,i),e.elementType=Ig,e.lanes=o,e;case Cg:return e=wn(19,n,t,i),e.elementType=Cg,e.lanes=o,e;case nC:return gh(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eC:s=10;break e;case tC:s=9;break e;case t0:s=11;break e;case n0:s=14;break e;case Zr:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=wn(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function uo(e,t,n,r){return e=wn(7,e,r,t),e.lanes=n,e}function gh(e,t,n,r){return e=wn(22,e,r,t),e.elementType=nC,e.lanes=n,e.stateNode={isHidden:!1},e}function Sm(e,t,n){return e=wn(6,e,null,t),e.lanes=n,e}function bm(e,t,n){return t=wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function o4(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rm(0),this.expirationTimes=rm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rm(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function L0(e,t,n,r,i,o,s,a,l){return e=new o4(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=wn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},w0(o),e}function s4(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kx(e){if(!e)return xi;e=e._reactInternals;e:{if($o(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Yt(n))return GC(e,n,t)}return t}function Qx(e,t,n,r,i,o,s,a,l){return e=L0(n,r,!0,e,i,o,s,a,l),e.context=Kx(null),n=e.current,r=Ut(),i=yi(n),o=Tr(r,i),o.callback=t??null,gi(n,o,i),e.current.lanes=i,Nu(e,i,r),Xt(e,r),e}function vh(e,t,n,r){var i=t.current,o=Ut(),s=yi(i);return n=Kx(n),t.context===null?t.context=n:t.pendingContext=n,t=Tr(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gi(i,t,s),e!==null&&(Ln(e,i,s,o),yf(e,i,s)),s}function yd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _E(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function j0(e,t){_E(e,t),(e=e.alternate)&&_E(e,t)}function a4(){return null}var Yx=typeof reportError=="function"?reportError:function(e){console.error(e)};function V0(e){this._internalRoot=e}yh.prototype.render=V0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));vh(e,t,null,null)};yh.prototype.unmount=V0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wo(function(){vh(null,e,null,null)}),t[kr]=null}};function yh(e){this._internalRoot=e}yh.prototype.unstable_scheduleHydration=function(e){if(e){var t=CC();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ti.length&&t!==0&&t<ti[n].priority;n++);ti.splice(n,0,e),n===0&&kC(e)}};function F0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wE(){}function l4(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=yd(s);o.call(u)}}var s=Qx(t,r,e,0,null,!1,!1,"",wE);return e._reactRootContainer=s,e[kr]=s.current,Bl(e.nodeType===8?e.parentNode:e),wo(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=yd(l);a.call(u)}}var l=L0(e,0,!1,null,null,!1,!1,"",wE);return e._reactRootContainer=l,e[kr]=l.current,Bl(e.nodeType===8?e.parentNode:e),wo(function(){vh(t,l,n,r)}),l}function wh(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=yd(s);a.call(l)}}vh(t,s,e,i)}else s=l4(n,t,e,i,r);return yd(s)}TC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ja(t.pendingLanes);n!==0&&(o0(t,n|1),Xt(t,Ue()),!(se&6)&&(Ls=Ue()+500,Li()))}break;case 13:wo(function(){var r=Ar(e,1);if(r!==null){var i=Ut();Ln(r,e,1,i)}}),j0(e,1)}};s0=function(e){if(e.tag===13){var t=Ar(e,134217728);if(t!==null){var n=Ut();Ln(t,e,134217728,n)}j0(e,134217728)}};IC=function(e){if(e.tag===13){var t=yi(e),n=Ar(e,t);if(n!==null){var r=Ut();Ln(n,e,t,r)}j0(e,t)}};CC=function(){return he};xC=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};Mg=function(e,t,n){switch(t){case"input":if(Ag(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ch(r);if(!i)throw Error(P(90));iC(r),Ag(r,i)}}}break;case"textarea":sC(e,n);break;case"select":t=n.value,t!=null&&vs(e,!!n.multiple,t,!1)}};hC=N0;pC=wo;var u4={usingClientEntryPoint:!1,Events:[Du,is,ch,fC,dC,N0]},La={findFiberByHostInstance:Xi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},c4={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vC(e),e===null?null:e.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||a4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{sh=Nc.inject(c4),or=Nc}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u4;cn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!F0(t))throw Error(P(200));return s4(e,t,null,n)};cn.createRoot=function(e,t){if(!F0(e))throw Error(P(299));var n=!1,r="",i=Yx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=L0(e,1,!1,null,null,n,!1,r,i),e[kr]=t.current,Bl(e.nodeType===8?e.parentNode:e),new V0(t)};cn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=vC(t),e=e===null?null:e.stateNode,e};cn.flushSync=function(e){return wo(e)};cn.hydrate=function(e,t,n){if(!_h(t))throw Error(P(200));return wh(null,e,t,!0,n)};cn.hydrateRoot=function(e,t,n){if(!F0(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Yx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Qx(t,null,e,1,n??null,i,!1,o,s),e[kr]=t.current,Bl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yh(t)};cn.render=function(e,t,n){if(!_h(t))throw Error(P(200));return wh(null,e,t,!1,n)};cn.unmountComponentAtNode=function(e){if(!_h(e))throw Error(P(40));return e._reactRootContainer?(wo(function(){wh(null,null,e,!1,function(){e._reactRootContainer=null,e[kr]=null})}),!0):!1};cn.unstable_batchedUpdates=N0;cn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_h(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return wh(e,t,n,!1,r)};cn.version="18.2.0-next-9e3b772b8-20220608";function Xx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xx)}catch(e){console.error(e)}}Xx(),QI.exports=cn;var Jx=QI.exports,EE=Jx;Sg.createRoot=EE.createRoot,Sg.hydrateRoot=EE.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jl(){return Jl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jl.apply(this,arguments)}var ui;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ui||(ui={}));const SE="popstate";function f4(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return mv("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_d(i)}return h4(t,n,null,e)}function Ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function U0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function d4(){return Math.random().toString(36).substr(2,8)}function bE(e,t){return{usr:e.state,key:e.key,idx:t}}function mv(e,t,n,r){return n===void 0&&(n=null),Jl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?la(t):t,{state:n,key:t&&t.key||r||d4()})}function _d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function la(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function h4(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ui.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Jl({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=ui.Pop;let _=c(),v=_==null?null:_-u;u=_,l&&l({action:a,location:m.location,delta:v})}function d(_,v){a=ui.Push;let p=mv(m.location,_,v);n&&n(p,_),u=c()+1;let y=bE(p,u),E=m.createHref(p);try{s.pushState(y,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}o&&l&&l({action:a,location:m.location,delta:1})}function h(_,v){a=ui.Replace;let p=mv(m.location,_,v);n&&n(p,_),u=c();let y=bE(p,u),E=m.createHref(p);s.replaceState(y,"",E),o&&l&&l({action:a,location:m.location,delta:0})}function g(_){let v=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof _=="string"?_:_d(_);return Ye(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let m={get action(){return a},get location(){return e(i,s)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(SE,f),l=_,()=>{i.removeEventListener(SE,f),l=null}},createHref(_){return t(i,_)},createURL:g,encodeLocation(_){let v=g(_);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:d,replace:h,go(_){return s.go(_)}};return m}var TE;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(TE||(TE={}));function p4(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?la(t):t,i=z0(r.pathname||"/",n);if(i==null)return null;let o=Zx(e);m4(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=T4(o[a],x4(i));return s}function Zx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wi([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Ye(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Zx(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:S4(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of ek(o.path))i(o,s,l)}),t}function ek(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ek(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function m4(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:b4(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const g4=/^:\w+$/,v4=3,y4=2,_4=1,w4=10,E4=-2,IE=e=>e==="*";function S4(e,t){let n=e.split("/"),r=n.length;return n.some(IE)&&(r+=E4),t&&(r+=y4),n.filter(i=>!IE(i)).reduce((i,o)=>i+(g4.test(o)?v4:o===""?_4:w4),r)}function b4(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function T4(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=I4({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:wi([i,c.pathname]),pathnameBase:O4(wi([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=wi([i,c.pathnameBase]))}return o}function I4(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=C4(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:h}=c;if(d==="*"){let m=a[f]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const g=a[f];return h&&!g?u[d]=void 0:u[d]=k4(g||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function C4(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),U0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function x4(e){try{return decodeURI(e)}catch(t){return U0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function k4(e,t){try{return decodeURIComponent(e)}catch(n){return U0(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function z0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function A4(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?la(e):e;return{pathname:n?n.startsWith("/")?n:P4(n,t):t,search:N4(r),hash:$4(i)}}function P4(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Tm(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function R4(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function tk(e,t){let n=R4(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function nk(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=la(e):(i=Jl({},e),Ye(!i.pathname||!i.pathname.includes("?"),Tm("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),Tm("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),Tm("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?t[f]:"/"}let l=A4(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const wi=e=>e.join("/").replace(/\/\/+/g,"/"),O4=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),N4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function D4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const rk=["post","put","patch","delete"];new Set(rk);const M4=["get",...rk];new Set(M4);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zl.apply(this,arguments)}const B0=b.createContext(null),L4=b.createContext(null),Do=b.createContext(null),Eh=b.createContext(null),Fr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ik=b.createContext(null);function j4(e,t){let{relative:n}=t===void 0?{}:t;Lu()||Ye(!1);let{basename:r,navigator:i}=b.useContext(Do),{hash:o,pathname:s,search:a}=sk(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:wi([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Lu(){return b.useContext(Eh)!=null}function ju(){return Lu()||Ye(!1),b.useContext(Eh).location}function ok(e){b.useContext(Do).static||b.useLayoutEffect(e)}function Ur(){let{isDataRoute:e}=b.useContext(Fr);return e?eM():V4()}function V4(){Lu()||Ye(!1);let e=b.useContext(B0),{basename:t,future:n,navigator:r}=b.useContext(Do),{matches:i}=b.useContext(Fr),{pathname:o}=ju(),s=JSON.stringify(tk(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return ok(()=>{a.current=!0}),b.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=nk(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:wi([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,s,o,e])}const F4=b.createContext(null);function U4(e){let t=b.useContext(Fr).outlet;return t&&b.createElement(F4.Provider,{value:e},t)}function z4(){let{matches:e}=b.useContext(Fr),t=e[e.length-1];return t?t.params:{}}function sk(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Do),{matches:i}=b.useContext(Fr),{pathname:o}=ju(),s=JSON.stringify(tk(i,r.v7_relativeSplatPath));return b.useMemo(()=>nk(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function B4(e,t){return W4(e,t)}function W4(e,t,n,r){Lu()||Ye(!1);let{navigator:i}=b.useContext(Do),{matches:o}=b.useContext(Fr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=ju(),c;if(t){var f;let _=typeof t=="string"?la(t):t;l==="/"||(f=_.pathname)!=null&&f.startsWith(l)||Ye(!1),c=_}else c=u;let d=c.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",g=p4(e,{pathname:h}),m=Q4(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:wi([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:wi([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return t&&m?b.createElement(Eh.Provider,{value:{location:Zl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ui.Pop}},m):m}function H4(){let e=Z4(),t=D4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const q4=b.createElement(H4,null);class G4 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Fr.Provider,{value:this.props.routeContext},b.createElement(ik.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function K4(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(B0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Fr.Provider,{value:t},r)}function Q4(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));c>=0||Ye(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:h}=n,g=f.route.loader&&d[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||g){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,d)=>{let h,g=!1,m=null,_=null;n&&(h=a&&f.route.id?a[f.route.id]:void 0,m=f.route.errorElement||q4,l&&(u<0&&d===0?(tM("route-fallback",!1),g=!0,_=null):u===d&&(g=!0,_=f.route.hydrateFallbackElement||null)));let v=t.concat(s.slice(0,d+1)),p=()=>{let y;return h?y=m:g?y=_:f.route.Component?y=b.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=c,b.createElement(K4,{match:f,routeContext:{outlet:c,matches:v,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?b.createElement(G4,{location:n.location,revalidation:n.revalidation,component:m,error:h,children:p(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):p()},null)}var ak=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ak||{}),wd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wd||{});function Y4(e){let t=b.useContext(B0);return t||Ye(!1),t}function X4(e){let t=b.useContext(L4);return t||Ye(!1),t}function J4(e){let t=b.useContext(Fr);return t||Ye(!1),t}function lk(e){let t=J4(),n=t.matches[t.matches.length-1];return n.route.id||Ye(!1),n.route.id}function Z4(){var e;let t=b.useContext(ik),n=X4(wd.UseRouteError),r=lk(wd.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function eM(){let{router:e}=Y4(ak.UseNavigateStable),t=lk(wd.UseNavigateStable),n=b.useRef(!1);return ok(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Zl({fromRouteId:t},o)))},[e,t])}const CE={};function tM(e,t,n){!t&&!CE[e]&&(CE[e]=!0)}function nM(e){return U4(e.context)}function Pn(e){Ye(!1)}function rM(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ui.Pop,navigator:o,static:s=!1,future:a}=e;Lu()&&Ye(!1);let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:o,static:s,future:Zl({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=la(r));let{pathname:c="/",search:f="",hash:d="",state:h=null,key:g="default"}=r,m=b.useMemo(()=>{let _=z0(c,l);return _==null?null:{location:{pathname:_,search:f,hash:d,state:h,key:g},navigationType:i}},[l,c,f,d,h,g,i]);return m==null?null:b.createElement(Do.Provider,{value:u},b.createElement(Eh.Provider,{children:n,value:m}))}function iM(e){let{children:t,location:n}=e;return B4(gv(t),n)}new Promise(()=>{});function gv(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,gv(r.props.children,o));return}r.type!==Pn&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=gv(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vv(){return vv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vv.apply(this,arguments)}function oM(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sM(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function aM(e,t){return e.button===0&&(!t||t==="_self")&&!sM(e)}const lM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],uM="startTransition",xE=Kf[uM];function cM(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=f4({window:i,v5Compat:!0}));let s=o.current,[a,l]=b.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=b.useCallback(f=>{u&&xE?xE(()=>l(f)):l(f)},[l,u]);return b.useLayoutEffect(()=>s.listen(c),[s,c]),b.createElement(rM,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const fM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W0=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,d=oM(t,lM),{basename:h}=b.useContext(Do),g,m=!1;if(typeof u=="string"&&dM.test(u)&&(g=u,fM))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),S=z0(E.pathname,h);E.origin===y.origin&&S!=null?u=S+E.search+E.hash:m=!0}catch{}let _=j4(u,{relative:i}),v=hM(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function p(y){r&&r(y),y.defaultPrevented||v(y)}return b.createElement("a",vv({},d,{href:g||_,onClick:m||o?r:p,ref:n,target:l}))});var kE;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(kE||(kE={}));var AE;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(AE||(AE={}));function hM(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Ur(),u=ju(),c=sk(e,{relative:s});return b.useCallback(f=>{if(aM(f,n)){f.preventDefault();let d=r!==void 0?r:_d(u)===_d(c);l(e,{replace:d,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}var uk={exports:{}},pM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mM=pM,gM=mM;function ck(){}function fk(){}fk.resetWarningCache=ck;var vM=function(){function e(r,i,o,s,a,l){if(l!==gM){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:fk,resetWarningCache:ck};return n.PropTypes=n,n};uk.exports=vM();var yM=uk.exports;const V=Oo(yM);function PE(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function RE(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?PE(Object(n),!0).forEach(function(r){dk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):PE(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function If(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?If=function(t){return typeof t}:If=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},If(e)}function dk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cf(e,t){return _M(e)||wM(e,t)||EM(e,t)||SM()}function _M(e){if(Array.isArray(e))return e}function wM(e,t){var n=e&&(typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"]);if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function EM(e,t){if(e){if(typeof e=="string")return OE(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return OE(e,t)}}function OE(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function SM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yv=function(t){var n=H.useRef(t);return H.useEffect(function(){n.current=t},[t]),n.current},js=function(t){return t!==null&&If(t)==="object"},bM=function(t){return js(t)&&typeof t.then=="function"},TM=function(t){return js(t)&&typeof t.elements=="function"&&typeof t.createToken=="function"&&typeof t.createPaymentMethod=="function"&&typeof t.confirmCardPayment=="function"},NE="[object Object]",IM=function e(t,n){if(!js(t)||!js(n))return t===n;var r=Array.isArray(t),i=Array.isArray(n);if(r!==i)return!1;var o=Object.prototype.toString.call(t)===NE,s=Object.prototype.toString.call(n)===NE;if(o!==s)return!1;if(!o&&!r)return t===n;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(var u={},c=0;c<a.length;c+=1)u[a[c]]=!0;for(var f=0;f<l.length;f+=1)u[l[f]]=!0;var d=Object.keys(u);if(d.length!==a.length)return!1;var h=t,g=n,m=function(v){return e(h[v],g[v])};return d.every(m)},hk=function(t,n,r){return js(t)?Object.keys(t).reduce(function(i,o){var s=!js(n)||!IM(t[o],n[o]);return r.includes(o)?(s&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),i):s?RE(RE({},i||{}),{},dk({},o,t[o])):i},null):null},pk="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",$E=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pk;if(t===null||TM(t))return t;throw new Error(n)},CM=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pk;if(bM(t))return{tag:"async",stripePromise:Promise.resolve(t).then(function(i){return $E(i,n)})};var r=$E(t,n);return r===null?{tag:"empty"}:{tag:"sync",stripe:r}},xM=function(t){!t||!t._registerWrapper||!t.registerAppInfo||(t._registerWrapper({name:"react-stripe-js",version:"2.4.0"}),t.registerAppInfo({name:"react-stripe-js",version:"2.4.0",url:"https://stripe.com/docs/stripe-js/react"}))},mk=H.createContext(null);mk.displayName="CustomCheckoutSdkContext";var kM=function(t,n){if(!t)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(n," in an <CustomCheckoutProvider> provider."));return t},AM=H.createContext(null);AM.displayName="CustomCheckoutContext";V.any,V.shape({clientSecret:V.string.isRequired,elementsOptions:V.object}).isRequired;var _v=function(t){var n=H.useContext(mk),r=H.useContext(Sh);if(n&&r)throw new Error("You cannot wrap the part of your app that ".concat(t," in both <CustomCheckoutProvider> and <Elements> providers."));return n?kM(n,t):gk(r,t)},Sh=H.createContext(null);Sh.displayName="ElementsContext";var gk=function(t,n){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return t},H0=H.createContext(null);H0.displayName="CartElementContext";var PM=function(t,n){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return t},vk=function(t){var n=t.stripe,r=t.options,i=t.children,o=H.useMemo(function(){return CM(n)},[n]),s=H.useState(null),a=Cf(s,2),l=a[0],u=a[1],c=H.useState(null),f=Cf(c,2),d=f[0],h=f[1],g=H.useState(function(){return{stripe:o.tag==="sync"?o.stripe:null,elements:o.tag==="sync"?o.stripe.elements(r):null}}),m=Cf(g,2),_=m[0],v=m[1];H.useEffect(function(){var E=!0,S=function(T){v(function(O){return O.stripe?O:{stripe:T,elements:T.elements(r)}})};return o.tag==="async"&&!_.stripe?o.stripePromise.then(function(I){I&&E&&S(I)}):o.tag==="sync"&&!_.stripe&&S(o.stripe),function(){E=!1}},[o,_,r]);var p=yv(n);H.useEffect(function(){p!==null&&p!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[p,n]);var y=yv(r);return H.useEffect(function(){if(_.elements){var E=hk(r,y,["clientSecret","fonts"]);E&&_.elements.update(E)}},[r,y,_.elements]),H.useEffect(function(){xM(_.stripe)},[_.stripe]),H.createElement(Sh.Provider,{value:_},H.createElement(H0.Provider,{value:{cart:l,setCart:u,cartState:d,setCartState:h}},i))};vk.propTypes={stripe:V.any,options:V.object};var RM=function(t){var n=H.useContext(Sh);return gk(n,t)},OM={cart:null,cartState:null,setCart:function(){},setCartState:function(){}},DE=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=H.useContext(H0);return n?OM:PM(r,t)},NM=function(){var t=RM("calls useElements()"),n=t.elements;return n},$M=function(){var t=_v("calls useStripe()"),n=t.stripe;return n};V.func.isRequired;var jt=function(t,n,r){var i=!!r,o=H.useRef(r);H.useEffect(function(){o.current=r},[r]),H.useEffect(function(){if(!i||!t)return function(){};var s=function(){o.current&&o.current.apply(o,arguments)};return t.on(n,s),function(){t.off(n,s)}},[i,n,t,o])},DM=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},Xe=function(t,n){var r="".concat(DM(t),"Element"),i=function(l){var u=l.id,c=l.className,f=l.options,d=f===void 0?{}:f,h=l.onBlur,g=l.onFocus,m=l.onReady,_=l.onChange,v=l.onEscape,p=l.onClick,y=l.onLoadError,E=l.onLoaderStart,S=l.onNetworksChange,I=l.onCheckout,T=l.onLineItemClick,O=l.onConfirm,$=l.onCancel,R=l.onShippingAddressChange,te=l.onShippingRateChange,ge=_v("mounts <".concat(r,">")),it="elements"in ge?ge.elements:null,dt="customCheckoutSdk"in ge?ge.customCheckoutSdk:null,Hn=H.useState(null),qn=Cf(Hn,2),ke=qn[0],D=qn[1],U=H.useRef(null),q=H.useRef(null),fe=DE("mounts <".concat(r,">"),"customCheckoutSdk"in ge),ae=fe.setCart,kn=fe.setCartState;jt(ke,"blur",h),jt(ke,"focus",g),jt(ke,"escape",v),jt(ke,"click",p),jt(ke,"loaderror",y),jt(ke,"loaderstart",E),jt(ke,"networkschange",S),jt(ke,"lineitemclick",T),jt(ke,"confirm",O),jt(ke,"cancel",$),jt(ke,"shippingaddresschange",R),jt(ke,"shippingratechange",te);var Tt;t==="cart"?Tt=function(Kn){kn(Kn),m&&m(Kn)}:m&&(t==="expressCheckout"?Tt=m:Tt=function(){m(ke)}),jt(ke,"ready",Tt);var Gn=t==="cart"?function(_e){kn(_e),_&&_(_e)}:_;jt(ke,"change",Gn);var Lt=t==="cart"?function(_e){kn(_e),I&&I(_e)}:I;jt(ke,"checkout",Lt),H.useLayoutEffect(function(){if(U.current===null&&q.current!==null&&(it||dt)){var _e=null;dt?_e=dt.createElement(t,d):it&&(_e=it.create(t,d)),t==="cart"&&ae&&ae(_e),U.current=_e,D(_e),_e&&_e.mount(q.current)}},[it,dt,d,ae]);var pn=yv(d);return H.useEffect(function(){if(U.current){var _e=hk(d,pn,["paymentRequest"]);_e&&U.current.update(_e)}},[d,pn]),H.useLayoutEffect(function(){return function(){if(U.current&&typeof U.current.destroy=="function")try{U.current.destroy(),U.current=null}catch{}}},[]),H.createElement("div",{id:u,className:c,ref:q})},o=function(l){var u=_v("mounts <".concat(r,">"));DE("mounts <".concat(r,">"),"customCheckoutSdk"in u);var c=l.id,f=l.className;return H.createElement("div",{id:c,className:f})},s=n?o:i;return s.propTypes={id:V.string,className:V.string,onChange:V.func,onBlur:V.func,onFocus:V.func,onReady:V.func,onEscape:V.func,onClick:V.func,onLoadError:V.func,onLoaderStart:V.func,onNetworksChange:V.func,onCheckout:V.func,onLineItemClick:V.func,onConfirm:V.func,onCancel:V.func,onShippingAddressChange:V.func,onShippingRateChange:V.func,options:V.object},s.displayName=r,s.__elementType=t,s},Je=typeof window>"u",MM=H.createContext(null);MM.displayName="EmbeddedCheckoutProviderContext";Xe("auBankAccount",Je);Xe("card",Je);Xe("cardNumber",Je);Xe("cardExpiry",Je);Xe("cardCvc",Je);Xe("fpxBank",Je);Xe("iban",Je);Xe("idealBank",Je);Xe("p24Bank",Je);Xe("epsBank",Je);var LM=Xe("payment",Je);Xe("expressCheckout",Je);Xe("paymentRequestButton",Je);Xe("linkAuthentication",Je);var jM=Xe("address",Je);Xe("shippingAddress",Je);Xe("cart",Je);Xe("paymentMethodMessaging",Je);Xe("affirmMessage",Je);Xe("afterpayClearpayMessage",Je);var yk="https://js.stripe.com/v3",VM=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,ME="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",FM=function(){for(var t=document.querySelectorAll('script[src^="'.concat(yk,'"]')),n=0;n<t.length;n++){var r=t[n];if(VM.test(r.src))return r}return null},LE=function(t){var n=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(yk).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},UM=function(t,n){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"2.4.0",startTime:n})},ja=null,$c=null,Dc=null,zM=function(t){return function(){t(new Error("Failed to load Stripe.js"))}},BM=function(t,n){return function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))}},WM=function(t){return ja!==null?ja:(ja=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&t&&console.warn(ME),window.Stripe){n(window.Stripe);return}try{var i=FM();if(i&&t)console.warn(ME);else if(!i)i=LE(t);else if(i&&Dc!==null&&$c!==null){var o;i.removeEventListener("load",Dc),i.removeEventListener("error",$c),(o=i.parentNode)===null||o===void 0||o.removeChild(i),i=LE(t)}Dc=BM(n,r),$c=zM(r),i.addEventListener("load",Dc),i.addEventListener("error",$c)}catch(s){r(s);return}}),ja.catch(function(n){return ja=null,Promise.reject(n)}))},HM=function(t,n,r){if(t===null)return null;var i=t.apply(void 0,n);return UM(i,r),i},Va,_k=!1,wk=function(){return Va||(Va=WM(null).catch(function(t){return Va=null,Promise.reject(t)}),Va)};Promise.resolve().then(function(){return wk()}).catch(function(e){_k||console.warn(e)});var qM=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];_k=!0;var i=Date.now();return wk().then(function(o){return HM(o,n,i)})};const GM="pk_test_51O3o9TI0UNHzYacJxHTg3Zylsq0QipZ50kCvEhTQxY8PBfUWqDMNDTkUnHEuQg1vvrvTj0848lDUwAEB70NwpjWc00bUfAycQ8",KM=qM(GM),QM={mode:"payment",currency:"usd",amount:1099},q0=b.createContext({categoriesMap:{},setCategoriesMap:()=>{}}),YM=({children:e})=>{const[t,n]=b.useState({}),r={categoriesMap:t,setCategoriesMap:n};return w.jsx(q0.Provider,{value:r,children:e})};var Kt=function(){return Kt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Kt.apply(this,arguments)};function G0(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function eu(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Ek(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var XM=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,JM=Ek(function(e){return XM.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ee="-ms-",El="-moz-",de="-webkit-",Sk="comm",bh="rule",K0="decl",ZM="@import",bk="@keyframes",e5="@layer",Tk=Math.abs,Q0=String.fromCharCode,wv=Object.assign;function t5(e,t){return at(e,0)^45?(((t<<2^at(e,0))<<2^at(e,1))<<2^at(e,2))<<2^at(e,3):0}function Ik(e){return e.trim()}function gr(e,t){return(e=t.exec(e))?e[0]:e}function Z(e,t,n){return e.replace(t,n)}function xf(e,t,n){return e.indexOf(t,n)}function at(e,t){return e.charCodeAt(t)|0}function Vs(e,t,n){return e.slice(t,n)}function Xn(e){return e.length}function Ck(e){return e.length}function el(e,t){return t.push(e),e}function n5(e,t){return e.map(t).join("")}function jE(e,t){return e.filter(function(n){return!gr(n,t)})}var Th=1,Fs=1,xk=0,Tn=0,He=0,ua="";function Ih(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Th,column:Fs,length:s,return:"",siblings:a}}function Xr(e,t){return wv(Ih("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fo(e){for(;e.root;)e=Xr(e.root,{children:[e]});el(e,e.siblings)}function r5(){return He}function i5(){return He=Tn>0?at(ua,--Tn):0,Fs--,He===10&&(Fs=1,Th--),He}function jn(){return He=Tn<xk?at(ua,Tn++):0,Fs++,He===10&&(Fs=1,Th++),He}function co(){return at(ua,Tn)}function kf(){return Tn}function Ch(e,t){return Vs(ua,e,t)}function Ev(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function o5(e){return Th=Fs=1,xk=Xn(ua=e),Tn=0,[]}function s5(e){return ua="",e}function Im(e){return Ik(Ch(Tn-1,Sv(e===91?e+2:e===40?e+1:e)))}function a5(e){for(;(He=co())&&He<33;)jn();return Ev(e)>2||Ev(He)>3?"":" "}function l5(e,t){for(;--t&&jn()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return Ch(e,kf()+(t<6&&co()==32&&jn()==32))}function Sv(e){for(;jn();)switch(He){case e:return Tn;case 34:case 39:e!==34&&e!==39&&Sv(He);break;case 40:e===41&&Sv(e);break;case 92:jn();break}return Tn}function u5(e,t){for(;jn()&&e+He!==57;)if(e+He===84&&co()===47)break;return"/*"+Ch(t,Tn-1)+"*"+Q0(e===47?e:jn())}function c5(e){for(;!Ev(co());)jn();return Ch(e,Tn)}function f5(e){return s5(Af("",null,null,null,[""],e=o5(e),0,[0],e))}function Af(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,h=0,g=0,m=1,_=1,v=1,p=0,y="",E=i,S=o,I=r,T=y;_;)switch(g=p,p=jn()){case 40:if(g!=108&&at(T,f-1)==58){xf(T+=Z(Im(p),"&","&\f"),"&\f",Tk(u?a[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:T+=Im(p);break;case 9:case 10:case 13:case 32:T+=a5(g);break;case 92:T+=l5(kf()-1,7);continue;case 47:switch(co()){case 42:case 47:el(d5(u5(jn(),kf()),t,n,l),l);break;default:T+="/"}break;case 123*m:a[u++]=Xn(T)*v;case 125*m:case 59:case 0:switch(p){case 0:case 125:_=0;case 59+c:v==-1&&(T=Z(T,/\f/g,"")),h>0&&Xn(T)-f&&el(h>32?FE(T+";",r,n,f-1,l):FE(Z(T," ","")+";",r,n,f-2,l),l);break;case 59:T+=";";default:if(el(I=VE(T,t,n,u,c,i,a,y,E=[],S=[],f,o),o),p===123)if(c===0)Af(T,t,I,I,E,o,f,a,S);else switch(d===99&&at(T,3)===110?100:d){case 100:case 108:case 109:case 115:Af(e,I,I,r&&el(VE(e,I,I,0,0,i,a,y,i,E=[],f,S),S),i,S,f,a,r?E:S);break;default:Af(T,I,I,I,[""],S,0,a,S)}}u=c=h=0,m=v=1,y=T="",f=s;break;case 58:f=1+Xn(T),h=g;default:if(m<1){if(p==123)--m;else if(p==125&&m++==0&&i5()==125)continue}switch(T+=Q0(p),p*m){case 38:v=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(Xn(T)-1)*v,v=1;break;case 64:co()===45&&(T+=Im(jn())),d=co(),c=f=Xn(y=T+=c5(kf())),p++;break;case 45:g===45&&Xn(T)==2&&(m=0)}}return o}function VE(e,t,n,r,i,o,s,a,l,u,c,f){for(var d=i-1,h=i===0?o:[""],g=Ck(h),m=0,_=0,v=0;m<r;++m)for(var p=0,y=Vs(e,d+1,d=Tk(_=s[m])),E=e;p<g;++p)(E=Ik(_>0?h[p]+" "+y:Z(y,/&\f/g,h[p])))&&(l[v++]=E);return Ih(e,t,n,i===0?bh:a,l,u,c,f)}function d5(e,t,n,r){return Ih(e,t,n,Sk,Q0(r5()),Vs(e,2,-2),0,r)}function FE(e,t,n,r,i){return Ih(e,t,n,K0,Vs(e,0,r),Vs(e,r+1,-1),r,i)}function kk(e,t,n){switch(t5(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 4789:return El+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+El+e+Ee+e+e;case 5936:switch(at(e,t+11)){case 114:return de+e+Ee+Z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+Ee+Z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+Ee+Z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return de+e+Ee+e+e;case 6165:return de+e+Ee+"flex-"+e+e;case 5187:return de+e+Z(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+Ee+"flex-$1$2")+e;case 5443:return de+e+Ee+"flex-item-"+Z(e,/flex-|-self/g,"")+(gr(e,/flex-|baseline/)?"":Ee+"grid-row-"+Z(e,/flex-|-self/g,""))+e;case 4675:return de+e+Ee+"flex-line-pack"+Z(e,/align-content|flex-|-self/g,"")+e;case 5548:return de+e+Ee+Z(e,"shrink","negative")+e;case 5292:return de+e+Ee+Z(e,"basis","preferred-size")+e;case 6060:return de+"box-"+Z(e,"-grow","")+de+e+Ee+Z(e,"grow","positive")+e;case 4554:return de+Z(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return Z(Z(Z(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return Z(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return Z(Z(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4200:if(!gr(e,/flex-|baseline/))return Ee+"grid-column-align"+Vs(e,t)+e;break;case 2592:case 3360:return Ee+Z(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,gr(r.props,/grid-\w+-end/)})?~xf(e+(n=n[t].value),"span",0)?e:Ee+Z(e,"-start","")+e+Ee+"grid-row-span:"+(~xf(n,"span",0)?gr(n,/\d+/):+gr(n,/\d+/)-+gr(e,/\d+/))+";":Ee+Z(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return gr(r.props,/grid-\w+-start/)})?e:Ee+Z(Z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Z(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xn(e)-1-t>6)switch(at(e,t+1)){case 109:if(at(e,t+4)!==45)break;case 102:return Z(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+El+(at(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xf(e,"stretch",0)?kk(Z(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Ee+i+":"+o+u+(s?Ee+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(at(e,t+6)===121)return Z(e,":",":"+de)+e;break;case 6444:switch(at(e,at(e,14)===45?18:11)){case 120:return Z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(at(e,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+Ee+"$2box$3")+e;case 100:return Z(e,":",":"+Ee)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(e,"scroll-","scroll-snap-")+e}return e}function Ed(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function h5(e,t,n,r){switch(e.type){case e5:if(e.children.length)break;case ZM:case K0:return e.return=e.return||e.value;case Sk:return"";case bk:return e.return=e.value+"{"+Ed(e.children,r)+"}";case bh:if(!Xn(e.value=e.props.join(",")))return""}return Xn(n=Ed(e.children,r))?e.return=e.value+"{"+n+"}":""}function p5(e){var t=Ck(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function m5(e){return function(t){t.root||(t=t.return)&&e(t)}}function g5(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case K0:e.return=kk(e.value,e.length,n);return;case bk:return Ed([Xr(e,{value:Z(e.value,"@","@"+de)})],r);case bh:if(e.length)return n5(n=e.props,function(i){switch(gr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fo(Xr(e,{props:[Z(i,/:(read-\w+)/,":"+El+"$1")]})),Fo(Xr(e,{props:[i]})),wv(e,{props:jE(n,r)});break;case"::placeholder":Fo(Xr(e,{props:[Z(i,/:(plac\w+)/,":"+de+"input-$1")]})),Fo(Xr(e,{props:[Z(i,/:(plac\w+)/,":"+El+"$1")]})),Fo(Xr(e,{props:[Z(i,/:(plac\w+)/,Ee+"input-$1")]})),Fo(Xr(e,{props:[i]})),wv(e,{props:jE(n,r)});break}return""})}}var v5={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tn={},Us=typeof process<"u"&&tn!==void 0&&(tn.REACT_APP_SC_ATTR||tn.SC_ATTR)||"data-styled",Ak="active",Pk="data-styled-version",xh="6.1.6",Y0=`/*!sc*/
`,X0=typeof window<"u"&&"HTMLElement"in window,y5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&tn!==void 0&&tn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&tn.REACT_APP_SC_DISABLE_SPEEDY!==""?tn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&tn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&tn!==void 0&&tn.SC_DISABLE_SPEEDY!==void 0&&tn.SC_DISABLE_SPEEDY!==""&&tn.SC_DISABLE_SPEEDY!=="false"&&tn.SC_DISABLE_SPEEDY),kh=Object.freeze([]),zs=Object.freeze({});function _5(e,t,n){return n===void 0&&(n=zs),e.theme!==n.theme&&e.theme||t||n.theme}var Rk=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),w5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,E5=/(^-|-$)/g;function UE(e){return e.replace(w5,"-").replace(E5,"")}var S5=/(a)(d)/gi,Mc=52,zE=function(e){return String.fromCharCode(e+(e>25?39:97))};function bv(e){var t,n="";for(t=Math.abs(e);t>Mc;t=t/Mc|0)n=zE(t%Mc)+n;return(zE(t%Mc)+n).replace(S5,"$1-$2")}var Cm,Ok=5381,fs=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Nk=function(e){return fs(Ok,e)};function $k(e){return bv(Nk(e)>>>0)}function b5(e){return e.displayName||e.name||"Component"}function xm(e){return typeof e=="string"&&!0}var Dk=typeof Symbol=="function"&&Symbol.for,Mk=Dk?Symbol.for("react.memo"):60115,T5=Dk?Symbol.for("react.forward_ref"):60112,I5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},C5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x5=((Cm={})[T5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cm[Mk]=Lk,Cm);function BE(e){return("type"in(t=e)&&t.type.$$typeof)===Mk?Lk:"$$typeof"in e?x5[e.$$typeof]:I5;var t}var k5=Object.defineProperty,A5=Object.getOwnPropertyNames,WE=Object.getOwnPropertySymbols,P5=Object.getOwnPropertyDescriptor,R5=Object.getPrototypeOf,HE=Object.prototype;function jk(e,t,n){if(typeof t!="string"){if(HE){var r=R5(t);r&&r!==HE&&jk(e,r,n)}var i=A5(t);WE&&(i=i.concat(WE(t)));for(var o=BE(e),s=BE(t),a=0;a<i.length;++a){var l=i[a];if(!(l in C5||n&&n[l]||s&&l in s||o&&l in o)){var u=P5(t,l);try{k5(e,l,u)}catch{}}}}return e}function Bs(e){return typeof e=="function"}function J0(e){return typeof e=="object"&&"styledComponentId"in e}function eo(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Tv(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function tu(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Iv(e,t,n){if(n===void 0&&(n=!1),!n&&!tu(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Iv(e[r],t[r]);else if(tu(t))for(var r in t)e[r]=Iv(e[r],t[r]);return e}function Z0(e,t){Object.defineProperty(e,"toString",{value:t})}function Vu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var O5=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Vu(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Y0);return n},e}(),Pf=new Map,Sd=new Map,Rf=1,Lc=function(e){if(Pf.has(e))return Pf.get(e);for(;Sd.has(Rf);)Rf++;var t=Rf++;return Pf.set(e,t),Sd.set(t,e),t},N5=function(e,t){Rf=t+1,Pf.set(e,t),Sd.set(t,e)},$5="style[".concat(Us,"][").concat(Pk,'="').concat(xh,'"]'),D5=new RegExp("^".concat(Us,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),M5=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},L5=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Y0),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(D5);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(N5(c,u),M5(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function j5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vk=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Us,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Us,Ak),r.setAttribute(Pk,xh);var s=j5();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},V5=function(){function e(t){this.element=Vk(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Vu(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),F5=function(){function e(t){this.element=Vk(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),U5=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),qE=X0,z5={isServer:!X0,useCSSOMInjection:!y5},Fk=function(){function e(t,n,r){t===void 0&&(t=zs),n===void 0&&(n={});var i=this;this.options=Kt(Kt({},z5),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&X0&&qE&&(qE=!1,function(o){for(var s=document.querySelectorAll($5),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Us)!==Ak&&(L5(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Z0(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var d=function(v){return Sd.get(v)}(f);if(d===void 0)return"continue";var h=o.names.get(d),g=s.getGroup(f);if(h===void 0||g.length===0)return"continue";var m="".concat(Us,".g").concat(f,'[id="').concat(d,'"]'),_="";h!==void 0&&h.forEach(function(v){v.length>0&&(_+="".concat(v,","))}),l+="".concat(g).concat(m,'{content:"').concat(_,'"}').concat(Y0)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Lc(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Kt(Kt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new U5(i):r?new V5(i):new F5(i)}(this.options),new O5(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Lc(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Lc(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Lc(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),B5=/&/g,W5=/^\s*\/\/.*$/gm;function Uk(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Uk(n.children,t)),n})}function H5(e){var t,n,r,i=e===void 0?zs:e,o=i.options,s=o===void 0?zs:o,a=i.plugins,l=a===void 0?kh:a,u=function(d,h,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):d},c=l.slice();c.push(function(d){d.type===bh&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(B5,n).replace(r,u))}),s.prefix&&c.push(g5),c.push(h5);var f=function(d,h,g,m){h===void 0&&(h=""),g===void 0&&(g=""),m===void 0&&(m="&"),t=m,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var _=d.replace(W5,""),v=f5(g||h?"".concat(g," ").concat(h," { ").concat(_," }"):_);s.namespace&&(v=Uk(v,s.namespace));var p=[];return Ed(v,p5(c.concat(m5(function(y){return p.push(y)})))),p};return f.hash=l.length?l.reduce(function(d,h){return h.name||Vu(15),fs(d,h.name)},Ok).toString():"",f}var q5=new Fk,Cv=H5(),zk=H.createContext({shouldForwardProp:void 0,styleSheet:q5,stylis:Cv});zk.Consumer;H.createContext(void 0);function GE(){return b.useContext(zk)}var Bk=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Cv);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Z0(this,function(){throw Vu(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Cv),this.name+t.hash},e}(),G5=function(e){return e>="A"&&e<="Z"};function KE(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;G5(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Wk=function(e){return e==null||e===!1||e===""},Hk=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Wk(o)&&(Array.isArray(o)&&o.isCss||Bs(o)?r.push("".concat(KE(i),":"),o,";"):tu(o)?r.push.apply(r,eu(eu(["".concat(i," {")],Hk(o),!1),["}"],!1)):r.push("".concat(KE(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in v5||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function fo(e,t,n,r){if(Wk(e))return[];if(J0(e))return[".".concat(e.styledComponentId)];if(Bs(e)){if(!Bs(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return fo(i,t,n,r)}var o;return e instanceof Bk?n?(e.inject(n,r),[e.getName(r)]):[e]:tu(e)?Hk(e):Array.isArray(e)?Array.prototype.concat.apply(kh,e.map(function(s){return fo(s,t,n,r)})):[e.toString()]}function K5(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bs(n)&&!J0(n))return!1}return!0}var Q5=Nk(xh),Y5=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&K5(t),this.componentId=n,this.baseHash=fs(Q5,n),this.baseStyle=r,Fk.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=eo(i,this.staticRulesId);else{var o=Tv(fo(this.rules,t,n,r)),s=bv(fs(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=eo(i,s),this.staticRulesId=s}else{for(var l=fs(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=Tv(fo(f,t,n,r));l=fs(l,d+c),u+=d}}if(u){var h=bv(l>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),i=eo(i,h)}}return i},e}(),qk=H.createContext(void 0);qk.Consumer;var km={};function X5(e,t,n){var r=J0(e),i=e,o=!xm(e),s=t.attrs,a=s===void 0?kh:s,l=t.componentId,u=l===void 0?function(E,S){var I=typeof E!="string"?"sc":UE(E);km[I]=(km[I]||0)+1;var T="".concat(I,"-").concat($k(xh+I+km[I]));return S?"".concat(S,"-").concat(T):T}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(E){return xm(E)?"styled.".concat(E):"Styled(".concat(b5(E),")")}(e):c,d=t.displayName&&t.componentId?"".concat(UE(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var m=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;g=function(E,S){return m(E,S)&&_(E,S)}}else g=m}var v=new Y5(n,d,r?i.componentStyle:void 0);function p(E,S){return function(I,T,O){var $=I.attrs,R=I.componentStyle,te=I.defaultProps,ge=I.foldedComponentIds,it=I.styledComponentId,dt=I.target,Hn=H.useContext(qk),qn=GE(),ke=I.shouldForwardProp||qn.shouldForwardProp,D=_5(T,Hn,te)||zs,U=function(Gn,Lt,pn){for(var _e,Kn=Kt(Kt({},Lt),{className:void 0,theme:pn}),Xp=0;Xp<Gn.length;Xp+=1){var gc=Bs(_e=Gn[Xp])?_e(Kn):_e;for(var Hr in gc)Kn[Hr]=Hr==="className"?eo(Kn[Hr],gc[Hr]):Hr==="style"?Kt(Kt({},Kn[Hr]),gc[Hr]):gc[Hr]}return Lt.className&&(Kn.className=eo(Kn.className,Lt.className)),Kn}($,T,D),q=U.as||dt,fe={};for(var ae in U)U[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&U.theme===D||(ae==="forwardedAs"?fe.as=U.forwardedAs:ke&&!ke(ae,q)||(fe[ae]=U[ae]));var kn=function(Gn,Lt){var pn=GE(),_e=Gn.generateAndInjectStyles(Lt,pn.styleSheet,pn.stylis);return _e}(R,U),Tt=eo(ge,it);return kn&&(Tt+=" "+kn),U.className&&(Tt+=" "+U.className),fe[xm(q)&&!Rk.has(q)?"class":"className"]=Tt,fe.ref=O,b.createElement(q,fe)}(y,E,S)}p.displayName=f;var y=H.forwardRef(p);return y.attrs=h,y.componentStyle=v,y.displayName=f,y.shouldForwardProp=g,y.foldedComponentIds=r?eo(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=d,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(S){for(var I=[],T=1;T<arguments.length;T++)I[T-1]=arguments[T];for(var O=0,$=I;O<$.length;O++)Iv(S,$[O],!0);return S}({},i.defaultProps,E):E}}),Z0(y,function(){return".".concat(y.styledComponentId)}),o&&jk(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function QE(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var YE=function(e){return Object.assign(e,{isCss:!0})};function Eo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Bs(e)||tu(e))return YE(fo(QE(kh,eu([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?fo(r):YE(fo(QE(r,t)))}function xv(e,t,n){if(n===void 0&&(n=zs),!t)throw Vu(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Eo.apply(void 0,eu([i],o,!1)))};return r.attrs=function(i){return xv(e,t,Kt(Kt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return xv(e,t,Kt(Kt({},n),i))},r}var Gk=function(e){return xv(X5,e)},k=Gk;Rk.forEach(function(e){k[e]=Gk(e)});function Ah(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Tv(Eo.apply(void 0,eu([e],t,!1))),i=$k(r);return new Bk(i,r)}var e1={},Kk={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Kk);var Ph=Kk.exports,Am={};function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function ri(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function Qk(e){if(!ri(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=Qk(e[n])}),t}function Vn(e,t,n={clone:!0}){const r=n.clone?B({},e):e;return ri(e)&&ri(t)&&Object.keys(t).forEach(i=>{i!=="__proto__"&&(ri(t[i])&&i in e&&ri(e[i])?r[i]=Vn(e[i],t[i],n):n.clone?r[i]=ri(t[i])?Qk(t[i]):t[i]:r[i]=t[i])}),r}function Ws(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function ar(e){if(typeof e!="string")throw new Error(Ws(7));return e.charAt(0).toUpperCase()+e.slice(1)}function J5(...e){return e.reduce((t,n)=>n==null?t:function(...i){t.apply(this,i),n.apply(this,i)},()=>{})}function Z5(e,t=166){let n;function r(...i){const o=()=>{e.apply(this,i)};clearTimeout(n),n=setTimeout(o,t)}return r.clear=()=>{clearTimeout(n)},r}function eL(e,t){return()=>null}function tL(e,t){var n,r;return b.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function Yk(e){return e&&e.ownerDocument||document}function nL(e){return Yk(e).defaultView||window}function rL(e,t){return()=>null}function Xk(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const iL=typeof window<"u"?b.useLayoutEffect:b.useEffect,Jk=iL;let XE=0;function oL(e){const[t,n]=b.useState(e),r=e||t;return b.useEffect(()=>{t==null&&(XE+=1,n(`mui-${XE}`))},[t]),r}const JE=Kf.useId;function sL(e){if(JE!==void 0){const t=JE();return e??t}return oL(e)}function aL(e,t,n,r,i){return null}function lL({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=b.useRef(e!==void 0),[o,s]=b.useState(t),a=i?e:o,l=b.useCallback(u=>{i||s(u)},[]);return[a,l]}function uL(e){const t=b.useRef(e);return Jk(()=>{t.current=e}),b.useRef((...n)=>(0,t.current)(...n)).current}function cL(...e){return b.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Xk(n,t)})},e)}let Rh=!0,kv=!1,ZE;const fL={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function dL(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&fL[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function hL(e){e.metaKey||e.altKey||e.ctrlKey||(Rh=!0)}function Pm(){Rh=!1}function pL(){this.visibilityState==="hidden"&&kv&&(Rh=!0)}function mL(e){e.addEventListener("keydown",hL,!0),e.addEventListener("mousedown",Pm,!0),e.addEventListener("pointerdown",Pm,!0),e.addEventListener("touchstart",Pm,!0),e.addEventListener("visibilitychange",pL,!0)}function gL(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Rh||dL(t)}function vL(){const e=b.useCallback(i=>{i!=null&&mL(i.ownerDocument)},[]),t=b.useRef(!1);function n(){return t.current?(kv=!0,window.clearTimeout(ZE),ZE=window.setTimeout(()=>{kv=!1},100),t.current=!1,!0):!1}function r(i){return gL(i)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function Zk(e,t){const n=B({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=B({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},o=t[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]=B({},o),Object.keys(i).forEach(s=>{n[r][s]=Zk(i[s],o[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function yL(e,t,n=void 0){const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((o,s)=>{if(s){const a=t(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),r}const eS=e=>e,_L=()=>{let e=eS;return{configure(t){e=t},generate(t){return e(t)},reset(){e=eS}}},eA=_L(),wL={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function tA(e,t,n="Mui"){const r=wL[t];return r?`${n}-${r}`:`${eA.generate(e)}-${t}`}function EL(e,t,n="Mui"){const r={};return t.forEach(i=>{r[i]=tA(e,i,n)}),r}function Bn(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function nA(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=nA(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function SL(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=nA(e))&&(r&&(r+=" "),r+=t);return r}function bL(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function TL(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var IL=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(TL(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=bL(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),kt="-ms-",bd="-moz-",le="-webkit-",rA="comm",t1="rule",n1="decl",CL="@import",iA="@keyframes",xL="@layer",kL=Math.abs,Oh=String.fromCharCode,AL=Object.assign;function PL(e,t){return gt(e,0)^45?(((t<<2^gt(e,0))<<2^gt(e,1))<<2^gt(e,2))<<2^gt(e,3):0}function oA(e){return e.trim()}function RL(e,t){return(e=t.exec(e))?e[0]:e}function ue(e,t,n){return e.replace(t,n)}function Av(e,t){return e.indexOf(t)}function gt(e,t){return e.charCodeAt(t)|0}function nu(e,t,n){return e.slice(t,n)}function Jn(e){return e.length}function r1(e){return e.length}function jc(e,t){return t.push(e),e}function OL(e,t){return e.map(t).join("")}var Nh=1,Hs=1,sA=0,en=0,qe=0,ca="";function $h(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Nh,column:Hs,length:s,return:""}}function Fa(e,t){return AL($h("",null,null,"",null,null,0),e,{length:-e.length},t)}function NL(){return qe}function $L(){return qe=en>0?gt(ca,--en):0,Hs--,qe===10&&(Hs=1,Nh--),qe}function an(){return qe=en<sA?gt(ca,en++):0,Hs++,qe===10&&(Hs=1,Nh++),qe}function lr(){return gt(ca,en)}function Of(){return en}function Fu(e,t){return nu(ca,e,t)}function ru(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function aA(e){return Nh=Hs=1,sA=Jn(ca=e),en=0,[]}function lA(e){return ca="",e}function Nf(e){return oA(Fu(en-1,Pv(e===91?e+2:e===40?e+1:e)))}function DL(e){for(;(qe=lr())&&qe<33;)an();return ru(e)>2||ru(qe)>3?"":" "}function ML(e,t){for(;--t&&an()&&!(qe<48||qe>102||qe>57&&qe<65||qe>70&&qe<97););return Fu(e,Of()+(t<6&&lr()==32&&an()==32))}function Pv(e){for(;an();)switch(qe){case e:return en;case 34:case 39:e!==34&&e!==39&&Pv(qe);break;case 40:e===41&&Pv(e);break;case 92:an();break}return en}function LL(e,t){for(;an()&&e+qe!==57;)if(e+qe===84&&lr()===47)break;return"/*"+Fu(t,en-1)+"*"+Oh(e===47?e:an())}function jL(e){for(;!ru(lr());)an();return Fu(e,en)}function VL(e){return lA($f("",null,null,null,[""],e=aA(e),0,[0],e))}function $f(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,h=0,g=0,m=1,_=1,v=1,p=0,y="",E=i,S=o,I=r,T=y;_;)switch(g=p,p=an()){case 40:if(g!=108&&gt(T,f-1)==58){Av(T+=ue(Nf(p),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:T+=Nf(p);break;case 9:case 10:case 13:case 32:T+=DL(g);break;case 92:T+=ML(Of()-1,7);continue;case 47:switch(lr()){case 42:case 47:jc(FL(LL(an(),Of()),t,n),l);break;default:T+="/"}break;case 123*m:a[u++]=Jn(T)*v;case 125*m:case 59:case 0:switch(p){case 0:case 125:_=0;case 59+c:v==-1&&(T=ue(T,/\f/g,"")),h>0&&Jn(T)-f&&jc(h>32?nS(T+";",r,n,f-1):nS(ue(T," ","")+";",r,n,f-2),l);break;case 59:T+=";";default:if(jc(I=tS(T,t,n,u,c,i,a,y,E=[],S=[],f),o),p===123)if(c===0)$f(T,t,I,I,E,o,f,a,S);else switch(d===99&&gt(T,3)===110?100:d){case 100:case 108:case 109:case 115:$f(e,I,I,r&&jc(tS(e,I,I,0,0,i,a,y,i,E=[],f),S),i,S,f,a,r?E:S);break;default:$f(T,I,I,I,[""],S,0,a,S)}}u=c=h=0,m=v=1,y=T="",f=s;break;case 58:f=1+Jn(T),h=g;default:if(m<1){if(p==123)--m;else if(p==125&&m++==0&&$L()==125)continue}switch(T+=Oh(p),p*m){case 38:v=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(Jn(T)-1)*v,v=1;break;case 64:lr()===45&&(T+=Nf(an())),d=lr(),c=f=Jn(y=T+=jL(Of())),p++;break;case 45:g===45&&Jn(T)==2&&(m=0)}}return o}function tS(e,t,n,r,i,o,s,a,l,u,c){for(var f=i-1,d=i===0?o:[""],h=r1(d),g=0,m=0,_=0;g<r;++g)for(var v=0,p=nu(e,f+1,f=kL(m=s[g])),y=e;v<h;++v)(y=oA(m>0?d[v]+" "+p:ue(p,/&\f/g,d[v])))&&(l[_++]=y);return $h(e,t,n,i===0?t1:a,l,u,c)}function FL(e,t,n){return $h(e,t,n,rA,Oh(NL()),nu(e,2,-2),0)}function nS(e,t,n,r){return $h(e,t,n,n1,nu(e,0,r),nu(e,r+1,-1),r)}function bs(e,t){for(var n="",r=r1(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function UL(e,t,n,r){switch(e.type){case xL:if(e.children.length)break;case CL:case n1:return e.return=e.return||e.value;case rA:return"";case iA:return e.return=e.value+"{"+bs(e.children,r)+"}";case t1:e.value=e.props.join(",")}return Jn(n=bs(e.children,r))?e.return=e.value+"{"+n+"}":""}function zL(e){var t=r1(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function BL(e){return function(t){t.root||(t=t.return)&&e(t)}}var WL=function(t,n,r){for(var i=0,o=0;i=o,o=lr(),i===38&&o===12&&(n[r]=1),!ru(o);)an();return Fu(t,en)},HL=function(t,n){var r=-1,i=44;do switch(ru(i)){case 0:i===38&&lr()===12&&(n[r]=1),t[r]+=WL(en-1,n,r);break;case 2:t[r]+=Nf(i);break;case 4:if(i===44){t[++r]=lr()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Oh(i)}while(i=an());return t},qL=function(t,n){return lA(HL(aA(t),n))},rS=new WeakMap,GL=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!rS.get(r))&&!i){rS.set(t,!0);for(var o=[],s=qL(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=o[l]?s[l].replace(/&\f/g,a[c]):a[c]+" "+s[l]}}},KL=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function uA(e,t){switch(PL(e,t)){case 5103:return le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return le+e+bd+e+kt+e+e;case 6828:case 4268:return le+e+kt+e+e;case 6165:return le+e+kt+"flex-"+e+e;case 5187:return le+e+ue(e,/(\w+).+(:[^]+)/,le+"box-$1$2"+kt+"flex-$1$2")+e;case 5443:return le+e+kt+"flex-item-"+ue(e,/flex-|-self/,"")+e;case 4675:return le+e+kt+"flex-line-pack"+ue(e,/align-content|flex-|-self/,"")+e;case 5548:return le+e+kt+ue(e,"shrink","negative")+e;case 5292:return le+e+kt+ue(e,"basis","preferred-size")+e;case 6060:return le+"box-"+ue(e,"-grow","")+le+e+kt+ue(e,"grow","positive")+e;case 4554:return le+ue(e,/([^-])(transform)/g,"$1"+le+"$2")+e;case 6187:return ue(ue(ue(e,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),e,"")+e;case 5495:case 3959:return ue(e,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return ue(ue(e,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+e+e;case 4095:case 3583:case 4068:case 2532:return ue(e,/(.+)-inline(.+)/,le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jn(e)-1-t>6)switch(gt(e,t+1)){case 109:if(gt(e,t+4)!==45)break;case 102:return ue(e,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+bd+(gt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Av(e,"stretch")?uA(ue(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(gt(e,t+1)!==115)break;case 6444:switch(gt(e,Jn(e)-3-(~Av(e,"!important")&&10))){case 107:return ue(e,":",":"+le)+e;case 101:return ue(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+le+(gt(e,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+kt+"$2box$3")+e}break;case 5936:switch(gt(e,t+11)){case 114:return le+e+kt+ue(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return le+e+kt+ue(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return le+e+kt+ue(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return le+e+kt+e+e}return e}var QL=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case n1:t.return=uA(t.value,t.length);break;case iA:return bs([Fa(t,{value:ue(t.value,"@","@"+le)})],i);case t1:if(t.length)return OL(t.props,function(o){switch(RL(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return bs([Fa(t,{props:[ue(o,/:(read-\w+)/,":"+bd+"$1")]})],i);case"::placeholder":return bs([Fa(t,{props:[ue(o,/:(plac\w+)/,":"+le+"input-$1")]}),Fa(t,{props:[ue(o,/:(plac\w+)/,":"+bd+"$1")]}),Fa(t,{props:[ue(o,/:(plac\w+)/,kt+"input-$1")]})],i)}return""})}},YL=[QL],XL=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var _=m.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=t.stylisPlugins||YL,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var _=m.getAttribute("data-emotion").split(" "),v=1;v<_.length;v++)o[_[v]]=!0;a.push(m)});var l,u=[GL,KL];{var c,f=[UL,BL(function(m){c.insert(m)})],d=zL(u.concat(i,f)),h=function(_){return bs(VL(_),d)};l=function(_,v,p,y){c=p,h(_?_+"{"+v.styles+"}":v.styles),y&&(g.inserted[v.name]=!0)}}var g={key:n,sheet:new IL({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(a),g},cA={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ct=typeof Symbol=="function"&&Symbol.for,i1=ct?Symbol.for("react.element"):60103,o1=ct?Symbol.for("react.portal"):60106,Dh=ct?Symbol.for("react.fragment"):60107,Mh=ct?Symbol.for("react.strict_mode"):60108,Lh=ct?Symbol.for("react.profiler"):60114,jh=ct?Symbol.for("react.provider"):60109,Vh=ct?Symbol.for("react.context"):60110,s1=ct?Symbol.for("react.async_mode"):60111,Fh=ct?Symbol.for("react.concurrent_mode"):60111,Uh=ct?Symbol.for("react.forward_ref"):60112,zh=ct?Symbol.for("react.suspense"):60113,JL=ct?Symbol.for("react.suspense_list"):60120,Bh=ct?Symbol.for("react.memo"):60115,Wh=ct?Symbol.for("react.lazy"):60116,ZL=ct?Symbol.for("react.block"):60121,e3=ct?Symbol.for("react.fundamental"):60117,t3=ct?Symbol.for("react.responder"):60118,n3=ct?Symbol.for("react.scope"):60119;function dn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case i1:switch(e=e.type,e){case s1:case Fh:case Dh:case Lh:case Mh:case zh:return e;default:switch(e=e&&e.$$typeof,e){case Vh:case Uh:case Wh:case Bh:case jh:return e;default:return t}}case o1:return t}}}function fA(e){return dn(e)===Fh}me.AsyncMode=s1;me.ConcurrentMode=Fh;me.ContextConsumer=Vh;me.ContextProvider=jh;me.Element=i1;me.ForwardRef=Uh;me.Fragment=Dh;me.Lazy=Wh;me.Memo=Bh;me.Portal=o1;me.Profiler=Lh;me.StrictMode=Mh;me.Suspense=zh;me.isAsyncMode=function(e){return fA(e)||dn(e)===s1};me.isConcurrentMode=fA;me.isContextConsumer=function(e){return dn(e)===Vh};me.isContextProvider=function(e){return dn(e)===jh};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===i1};me.isForwardRef=function(e){return dn(e)===Uh};me.isFragment=function(e){return dn(e)===Dh};me.isLazy=function(e){return dn(e)===Wh};me.isMemo=function(e){return dn(e)===Bh};me.isPortal=function(e){return dn(e)===o1};me.isProfiler=function(e){return dn(e)===Lh};me.isStrictMode=function(e){return dn(e)===Mh};me.isSuspense=function(e){return dn(e)===zh};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Dh||e===Fh||e===Lh||e===Mh||e===zh||e===JL||typeof e=="object"&&e!==null&&(e.$$typeof===Wh||e.$$typeof===Bh||e.$$typeof===jh||e.$$typeof===Vh||e.$$typeof===Uh||e.$$typeof===e3||e.$$typeof===t3||e.$$typeof===n3||e.$$typeof===ZL)};me.typeOf=dn;cA.exports=me;var r3=cA.exports,a1=r3,i3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l1={};l1[a1.ForwardRef]=s3;l1[a1.Memo]=dA;function iS(e){return a1.isMemo(e)?dA:l1[e.$$typeof]||i3}var a3=Object.defineProperty,l3=Object.getOwnPropertyNames,oS=Object.getOwnPropertySymbols,u3=Object.getOwnPropertyDescriptor,c3=Object.getPrototypeOf,sS=Object.prototype;function hA(e,t,n){if(typeof t!="string"){if(sS){var r=c3(t);r&&r!==sS&&hA(e,r,n)}var i=l3(t);oS&&(i=i.concat(oS(t)));for(var o=iS(e),s=iS(t),a=0;a<i.length;++a){var l=i[a];if(!o3[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=u3(t,l);try{a3(e,l,u)}catch{}}}}return e}var f3=hA;const d3=Oo(f3);var h3=!0;function p3(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var pA=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||h3===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},m3=function(t,n,r){pA(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function g3(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var v3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},y3=/[A-Z]|^ms/g,_3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,mA=function(t){return t.charCodeAt(1)===45},aS=function(t){return t!=null&&typeof t!="boolean"},Rm=Ek(function(e){return mA(e)?e:e.replace(y3,"-$&").toLowerCase()}),lS=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(_3,function(r,i,o){return Zn={name:i,styles:o,next:Zn},i})}return v3[t]!==1&&!mA(t)&&typeof n=="number"&&n!==0?n+"px":n};function iu(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Zn={name:n.name,styles:n.styles,next:Zn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Zn={name:r.name,styles:r.styles,next:Zn},r=r.next;var i=n.styles+";";return i}return w3(e,t,n)}case"function":{if(e!==void 0){var o=Zn,s=n(e);return Zn=o,iu(e,t,s)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function w3(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=iu(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":aS(s)&&(r+=Rm(o)+":"+lS(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)aS(s[a])&&(r+=Rm(o)+":"+lS(o,s[a])+";");else{var l=iu(e,t,s);switch(o){case"animation":case"animationName":{r+=Rm(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var uS=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Zn,E3=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Zn=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=iu(r,n,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=iu(r,n,t[a]),i&&(o+=s[a]);uS.lastIndex=0;for(var l="",u;(u=uS.exec(o))!==null;)l+="-"+u[1];var c=g3(o)+l;return{name:c,styles:o,next:Zn}},S3=function(t){return t()},b3=Kf.useInsertionEffect?Kf.useInsertionEffect:!1,T3=b3||S3,gA=b.createContext(typeof HTMLElement<"u"?XL({key:"css"}):null);gA.Provider;var I3=function(t){return b.forwardRef(function(n,r){var i=b.useContext(gA);return t(n,i,r)})},vA=b.createContext({}),C3=JM,x3=function(t){return t!=="theme"},cS=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?C3:x3},fS=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},k3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return pA(n,r,i),T3(function(){return m3(n,r,i)}),null},A3=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=fS(t,n,r),l=a||cS(i),u=!l("as");return function(){var c=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)f.push.apply(f,c);else{f.push(c[0][0]);for(var d=c.length,h=1;h<d;h++)f.push(c[h],c[0][h])}var g=I3(function(m,_,v){var p=u&&m.as||i,y="",E=[],S=m;if(m.theme==null){S={};for(var I in m)S[I]=m[I];S.theme=b.useContext(vA)}typeof m.className=="string"?y=p3(_.registered,E,m.className):m.className!=null&&(y=m.className+" ");var T=E3(f.concat(E),_.registered,S);y+=_.key+"-"+T.name,s!==void 0&&(y+=" "+s);var O=u&&a===void 0?cS(p):l,$={};for(var R in m)u&&R==="as"||O(R)&&($[R]=m[R]);return $.className=y,$.ref=v,b.createElement(b.Fragment,null,b.createElement(k3,{cache:_,serialized:T,isStringTag:typeof p=="string"}),b.createElement(p,$))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=f,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+s}}),g.withComponent=function(m,_){return e(m,B({},n,_,{shouldForwardProp:fS(g,_,!0)})).apply(void 0,f)},g}},P3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Rv=A3.bind();P3.forEach(function(e){Rv[e]=Rv(e)});function R3(e,t){return Rv(e,t)}const O3=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},N3=["values","unit","step"],$3=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>B({},n,{[r.key]:r.val}),{})};function D3(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,i=Bn(e,N3),o=$3(t),s=Object.keys(o);function a(d){return`@media (min-width:${typeof t[d]=="number"?t[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof t[d]=="number"?t[d]:d)-r/100}${n})`}function u(d,h){const g=s.indexOf(h);return`@media (min-width:${typeof t[d]=="number"?t[d]:d}${n}) and (max-width:${(g!==-1&&typeof t[s[g]]=="number"?t[s[g]]:h)-r/100}${n})`}function c(d){return s.indexOf(d)+1<s.length?u(d,s[s.indexOf(d)+1]):a(d)}function f(d){const h=s.indexOf(d);return h===0?a(s[1]):h===s.length-1?l(s[h]):u(d,s[s.indexOf(d)+1]).replace("@media","@media not all and")}return B({keys:s,values:o,up:a,down:l,between:u,only:c,not:f,unit:n},i)}const M3={borderRadius:4},L3=M3;function Sl(e,t){return t?Vn(e,t,{clone:!1}):e}const u1={xs:0,sm:600,md:900,lg:1200,xl:1536},dS={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${u1[e]}px)`};function Rr(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const o=r.breakpoints||dS;return t.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(t[l]),s),{})}if(typeof t=="object"){const o=r.breakpoints||dS;return Object.keys(t).reduce((s,a)=>{if(Object.keys(o.values||u1).indexOf(a)!==-1){const l=o.up(a);s[l]=n(t[a],a)}else{const l=a;s[l]=t[l]}return s},{})}return n(t)}function j3(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,i)=>{const o=e.up(i);return r[o]={},r},{}))||{}}function V3(e,t){return e.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},t)}function Hh(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(r!=null)return r}return t.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,e)}function Td(e,t,n,r=n){let i;return typeof e=="function"?i=e(n):Array.isArray(e)?i=e[n]||r:i=Hh(e,n)||r,t&&(i=t(i,r,e)),i}function ze(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,o=s=>{if(s[t]==null)return null;const a=s[t],l=s.theme,u=Hh(l,r)||{};return Rr(s,a,f=>{let d=Td(u,i,f);return f===d&&typeof f=="string"&&(d=Td(u,i,`${t}${f==="default"?"":ar(f)}`,f)),n===!1?d:{[n]:d}})};return o.propTypes={},o.filterProps=[t],o}function F3(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const U3={m:"margin",p:"padding"},z3={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},hS={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},B3=F3(e=>{if(e.length>2)if(hS[e])e=hS[e];else return[e];const[t,n]=e.split(""),r=U3[t],i=z3[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),c1=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],f1=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...c1,...f1];function Uu(e,t,n,r){var i;const o=(i=Hh(e,t,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function yA(e){return Uu(e,"spacing",8)}function zu(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function W3(e,t){return n=>e.reduce((r,i)=>(r[i]=zu(t,n),r),{})}function H3(e,t,n,r){if(t.indexOf(n)===-1)return null;const i=B3(n),o=W3(i,r),s=e[n];return Rr(e,s,o)}function _A(e,t){const n=yA(e.theme);return Object.keys(e).map(r=>H3(e,t,r,n)).reduce(Sl,{})}function Me(e){return _A(e,c1)}Me.propTypes={};Me.filterProps=c1;function Le(e){return _A(e,f1)}Le.propTypes={};Le.filterProps=f1;function q3(e=8){if(e.mui)return e;const t=yA({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=t(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function qh(...e){const t=e.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>t[o]?Sl(i,t[o](r)):i,{});return n.propTypes={},n.filterProps=e.reduce((r,i)=>r.concat(i.filterProps),[]),n}function vn(e){return typeof e!="number"?e:`${e}px solid`}function xn(e,t){return ze({prop:e,themeKey:"borders",transform:t})}const G3=xn("border",vn),K3=xn("borderTop",vn),Q3=xn("borderRight",vn),Y3=xn("borderBottom",vn),X3=xn("borderLeft",vn),J3=xn("borderColor"),Z3=xn("borderTopColor"),ej=xn("borderRightColor"),tj=xn("borderBottomColor"),nj=xn("borderLeftColor"),rj=xn("outline",vn),ij=xn("outlineColor"),Gh=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Uu(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:zu(t,r)});return Rr(e,e.borderRadius,n)}return null};Gh.propTypes={};Gh.filterProps=["borderRadius"];qh(G3,K3,Q3,Y3,X3,J3,Z3,ej,tj,nj,Gh,rj,ij);const Kh=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Uu(e.theme,"spacing",8),n=r=>({gap:zu(t,r)});return Rr(e,e.gap,n)}return null};Kh.propTypes={};Kh.filterProps=["gap"];const Qh=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Uu(e.theme,"spacing",8),n=r=>({columnGap:zu(t,r)});return Rr(e,e.columnGap,n)}return null};Qh.propTypes={};Qh.filterProps=["columnGap"];const Yh=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Uu(e.theme,"spacing",8),n=r=>({rowGap:zu(t,r)});return Rr(e,e.rowGap,n)}return null};Yh.propTypes={};Yh.filterProps=["rowGap"];const oj=ze({prop:"gridColumn"}),sj=ze({prop:"gridRow"}),aj=ze({prop:"gridAutoFlow"}),lj=ze({prop:"gridAutoColumns"}),uj=ze({prop:"gridAutoRows"}),cj=ze({prop:"gridTemplateColumns"}),fj=ze({prop:"gridTemplateRows"}),dj=ze({prop:"gridTemplateAreas"}),hj=ze({prop:"gridArea"});qh(Kh,Qh,Yh,oj,sj,aj,lj,uj,cj,fj,dj,hj);function Ts(e,t){return t==="grey"?t:e}const pj=ze({prop:"color",themeKey:"palette",transform:Ts}),mj=ze({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ts}),gj=ze({prop:"backgroundColor",themeKey:"palette",transform:Ts});qh(pj,mj,gj);function rn(e){return e<=1&&e!==0?`${e*100}%`:e}const vj=ze({prop:"width",transform:rn}),d1=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,i;const o=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||u1[n];return o?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:rn(n)}};return Rr(e,e.maxWidth,t)}return null};d1.filterProps=["maxWidth"];const yj=ze({prop:"minWidth",transform:rn}),_j=ze({prop:"height",transform:rn}),wj=ze({prop:"maxHeight",transform:rn}),Ej=ze({prop:"minHeight",transform:rn});ze({prop:"size",cssProperty:"width",transform:rn});ze({prop:"size",cssProperty:"height",transform:rn});const Sj=ze({prop:"boxSizing"});qh(vj,d1,yj,_j,wj,Ej,Sj);const bj={border:{themeKey:"borders",transform:vn},borderTop:{themeKey:"borders",transform:vn},borderRight:{themeKey:"borders",transform:vn},borderBottom:{themeKey:"borders",transform:vn},borderLeft:{themeKey:"borders",transform:vn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:vn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Gh},color:{themeKey:"palette",transform:Ts},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ts},backgroundColor:{themeKey:"palette",transform:Ts},p:{style:Le},pt:{style:Le},pr:{style:Le},pb:{style:Le},pl:{style:Le},px:{style:Le},py:{style:Le},padding:{style:Le},paddingTop:{style:Le},paddingRight:{style:Le},paddingBottom:{style:Le},paddingLeft:{style:Le},paddingX:{style:Le},paddingY:{style:Le},paddingInline:{style:Le},paddingInlineStart:{style:Le},paddingInlineEnd:{style:Le},paddingBlock:{style:Le},paddingBlockStart:{style:Le},paddingBlockEnd:{style:Le},m:{style:Me},mt:{style:Me},mr:{style:Me},mb:{style:Me},ml:{style:Me},mx:{style:Me},my:{style:Me},margin:{style:Me},marginTop:{style:Me},marginRight:{style:Me},marginBottom:{style:Me},marginLeft:{style:Me},marginX:{style:Me},marginY:{style:Me},marginInline:{style:Me},marginInlineStart:{style:Me},marginInlineEnd:{style:Me},marginBlock:{style:Me},marginBlockStart:{style:Me},marginBlockEnd:{style:Me},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Kh},rowGap:{style:Yh},columnGap:{style:Qh},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:rn},maxWidth:{style:d1},minWidth:{transform:rn},height:{transform:rn},maxHeight:{transform:rn},minHeight:{transform:rn},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},h1=bj;function Tj(...e){const t=e.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function Ij(e,t){return typeof e=="function"?e(t):e}function Cj(){function e(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:u,transform:c,style:f}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const d=Hh(i,u)||{};return f?f(s):Rr(s,r,g=>{let m=Td(d,c,g);return g===m&&typeof g=="string"&&(m=Td(d,c,`${n}${g==="default"?"":ar(g)}`,g)),l===!1?m:{[l]:m}})}function t(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const s=(r=o.unstable_sxConfig)!=null?r:h1;function a(l){let u=l;if(typeof l=="function")u=l(o);else if(typeof l!="object")return l;if(!u)return null;const c=j3(o.breakpoints),f=Object.keys(c);let d=c;return Object.keys(u).forEach(h=>{const g=Ij(u[h],o);if(g!=null)if(typeof g=="object")if(s[h])d=Sl(d,e(h,g,o,s));else{const m=Rr({theme:o},g,_=>({[h]:_}));Tj(m,g)?d[h]=t({sx:g,theme:o}):d=Sl(d,m)}else d=Sl(d,e(h,g,o,s))}),V3(f,d)}return Array.isArray(i)?i.map(a):a(i)}return t}const Xh=Cj();Xh.filterProps=["sx"];const xj=["breakpoints","palette","spacing","shape"];function p1(e={},...t){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=e,s=Bn(e,xj),a=D3(n),l=q3(i);let u=Vn({breakpoints:a,direction:"ltr",components:{},palette:B({mode:"light"},r),spacing:l,shape:B({},L3,o)},s);return u=t.reduce((c,f)=>Vn(c,f),u),u.unstable_sxConfig=B({},h1,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(f){return Xh({sx:f,theme:this})},u}function kj(e){return Object.keys(e).length===0}function Aj(e=null){const t=b.useContext(vA);return!t||kj(t)?e:t}const Pj=p1();function Rj(e=Pj){return Aj(e)}const Oj=["variant"];function pS(e){return e.length===0}function wA(e){const{variant:t}=e,n=Bn(e,Oj);let r=t||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=pS(r)?e[i]:ar(e[i]):r+=`${pS(r)?i:ar(i)}${ar(e[i].toString())}`}),r}const Nj=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function $j(e){return Object.keys(e).length===0}function Dj(e){return typeof e=="string"&&e.charCodeAt(0)>96}const Mj=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,Id=e=>{let t=0;const n={};return e&&e.forEach(r=>{let i="";typeof r.props=="function"?(i=`callback${t}`,t+=1):i=wA(r.props),n[i]=r.style}),n},Lj=(e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),Id(n)},Cd=(e,t,n)=>{const{ownerState:r={}}=e,i=[];let o=0;return n&&n.forEach(s=>{let a=!0;if(typeof s.props=="function"){const l=B({},e,r);a=s.props(l)}else Object.keys(s.props).forEach(l=>{r[l]!==s.props[l]&&e[l]!==s.props[l]&&(a=!1)});a&&(typeof s.props=="function"?i.push(t[`callback${o}`]):i.push(t[wA(s.props)])),typeof s.props=="function"&&(o+=1)}),i},jj=(e,t,n,r)=>{var i;const o=n==null||(i=n.components)==null||(i=i[r])==null?void 0:i.variants;return Cd(e,t,o)};function Df(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Vj=p1(),Fj=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Mf({defaultTheme:e,theme:t,themeId:n}){return $j(t)?e:t[n]||t}function Uj(e){return e?(t,n)=>n[e]:null}const mS=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const i=e(B({},t,{theme:Mf(B({},t,{defaultTheme:n,themeId:r}))}));let o;if(i&&i.variants&&(o=i.variants,delete i.variants),o){const s=Cd(t,Id(o),o);return[i,...s]}return i};function zj(e={}){const{themeId:t,defaultTheme:n=Vj,rootShouldForwardProp:r=Df,slotShouldForwardProp:i=Df}=e,o=s=>Xh(B({},s,{theme:Mf(B({},s,{defaultTheme:n,themeId:t}))}));return o.__mui_systemSx=!0,(s,a={})=>{O3(s,E=>E.filter(S=>!(S!=null&&S.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:f,overridesResolver:d=Uj(Fj(u))}=a,h=Bn(a,Nj),g=c!==void 0?c:u&&u!=="Root"&&u!=="root"||!1,m=f||!1;let _,v=Df;u==="Root"||u==="root"?v=r:u?v=i:Dj(s)&&(v=void 0);const p=R3(s,B({shouldForwardProp:v,label:_},h)),y=(E,...S)=>{const I=S?S.map(R=>{if(typeof R=="function"&&R.__emotion_real!==R)return te=>mS({styledArg:R,props:te,defaultTheme:n,themeId:t});if(ri(R)){let te=R,ge;return R&&R.variants&&(ge=R.variants,delete te.variants,te=it=>{let dt=R;return Cd(it,Id(ge),ge).forEach(qn=>{dt=Vn(dt,qn)}),dt}),te}return R}):[];let T=E;if(ri(E)){let R;E&&E.variants&&(R=E.variants,delete T.variants,T=te=>{let ge=E;return Cd(te,Id(R),R).forEach(dt=>{ge=Vn(ge,dt)}),ge})}else typeof E=="function"&&E.__emotion_real!==E&&(T=R=>mS({styledArg:E,props:R,defaultTheme:n,themeId:t}));l&&d&&I.push(R=>{const te=Mf(B({},R,{defaultTheme:n,themeId:t})),ge=Mj(l,te);if(ge){const it={};return Object.entries(ge).forEach(([dt,Hn])=>{it[dt]=typeof Hn=="function"?Hn(B({},R,{theme:te})):Hn}),d(R,it)}return null}),l&&!g&&I.push(R=>{const te=Mf(B({},R,{defaultTheme:n,themeId:t}));return jj(R,Lj(l,te),te,l)}),m||I.push(o);const O=I.length-S.length;if(Array.isArray(E)&&O>0){const R=new Array(O).fill("");T=[...E,...R],T.raw=[...E.raw,...R]}const $=p(T,...I);return s.muiName&&($.muiName=s.muiName),$};return p.withConfig&&(y.withConfig=p.withConfig),y}}function Bj(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Zk(t.components[n].defaultProps,r)}function Wj({props:e,name:t,defaultTheme:n,themeId:r}){let i=Rj(n);return r&&(i=i[r]||i),Bj({theme:i,name:t,props:e})}function EA(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function Hj(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function qs(e){if(e.type)return e;if(e.charAt(0)==="#")return qs(Hj(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Ws(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Ws(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function m1(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function qj(e){e=qs(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),s=(u,c=(u+n/30)%12)=>i-o*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",l.push(t[3])),m1({type:a,values:l})}function gS(e){e=qs(e);let t=e.type==="hsl"||e.type==="hsla"?qs(qj(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Gj(e,t){const n=gS(e),r=gS(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Kj(e,t){if(e=qs(e),t=EA(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return m1(e)}function Qj(e,t){if(e=qs(e),t=EA(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return m1(e)}function Yj(e,t){return B({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Xj={black:"#000",white:"#fff"},ou=Xj,Jj={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Zj=Jj,eV={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Uo=eV,tV={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},zo=tV,nV={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ua=nV,rV={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Bo=rV,iV={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Wo=iV,oV={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Ho=oV,sV=["mode","contrastThreshold","tonalOffset"],vS={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ou.white,default:ou.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Om={text:{primary:ou.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ou.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function yS(e,t,n,r){const i=r.light||r,o=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Qj(e.main,i):t==="dark"&&(e.dark=Kj(e.main,o)))}function aV(e="light"){return e==="dark"?{main:Bo[200],light:Bo[50],dark:Bo[400]}:{main:Bo[700],light:Bo[400],dark:Bo[800]}}function lV(e="light"){return e==="dark"?{main:Uo[200],light:Uo[50],dark:Uo[400]}:{main:Uo[500],light:Uo[300],dark:Uo[700]}}function uV(e="light"){return e==="dark"?{main:zo[500],light:zo[300],dark:zo[700]}:{main:zo[700],light:zo[400],dark:zo[800]}}function cV(e="light"){return e==="dark"?{main:Wo[400],light:Wo[300],dark:Wo[700]}:{main:Wo[700],light:Wo[500],dark:Wo[900]}}function fV(e="light"){return e==="dark"?{main:Ho[400],light:Ho[300],dark:Ho[700]}:{main:Ho[800],light:Ho[500],dark:Ho[900]}}function dV(e="light"){return e==="dark"?{main:Ua[400],light:Ua[300],dark:Ua[700]}:{main:"#ed6c02",light:Ua[500],dark:Ua[900]}}function hV(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,i=Bn(e,sV),o=e.primary||aV(t),s=e.secondary||lV(t),a=e.error||uV(t),l=e.info||cV(t),u=e.success||fV(t),c=e.warning||dV(t);function f(m){return Gj(m,Om.text.primary)>=n?Om.text.primary:vS.text.primary}const d=({color:m,name:_,mainShade:v=500,lightShade:p=300,darkShade:y=700})=>{if(m=B({},m),!m.main&&m[v]&&(m.main=m[v]),!m.hasOwnProperty("main"))throw new Error(Ws(11,_?` (${_})`:"",v));if(typeof m.main!="string")throw new Error(Ws(12,_?` (${_})`:"",JSON.stringify(m.main)));return yS(m,"light",p,r),yS(m,"dark",y,r),m.contrastText||(m.contrastText=f(m.main)),m},h={dark:Om,light:vS};return Vn(B({common:B({},ou),mode:t,primary:d({color:o,name:"primary"}),secondary:d({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:c,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:u,name:"success"}),grey:Zj,contrastThreshold:n,getContrastText:f,augmentColor:d,tonalOffset:r},h[t]),i)}const pV=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function mV(e){return Math.round(e*1e5)/1e5}const _S={textTransform:"uppercase"},wS='"Roboto", "Helvetica", "Arial", sans-serif';function gV(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=wS,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:f}=n,d=Bn(n,pV),h=i/14,g=f||(v=>`${v/u*h}rem`),m=(v,p,y,E,S)=>B({fontFamily:r,fontWeight:v,fontSize:g(p),lineHeight:y},r===wS?{letterSpacing:`${mV(E/p)}em`}:{},S,c),_={h1:m(o,96,1.167,-1.5),h2:m(o,60,1.2,-.5),h3:m(s,48,1.167,0),h4:m(s,34,1.235,.25),h5:m(s,24,1.334,0),h6:m(a,20,1.6,.15),subtitle1:m(s,16,1.75,.15),subtitle2:m(a,14,1.57,.1),body1:m(s,16,1.5,.15),body2:m(s,14,1.43,.15),button:m(a,14,1.75,.4,_S),caption:m(s,12,1.66,.4),overline:m(s,12,2.66,1,_S),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Vn(B({htmlFontSize:u,pxToRem:g,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},_),d,{clone:!1})}const vV=.2,yV=.14,_V=.12;function Ae(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${vV})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${yV})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${_V})`].join(",")}const wV=["none",Ae(0,2,1,-1,0,1,1,0,0,1,3,0),Ae(0,3,1,-2,0,2,2,0,0,1,5,0),Ae(0,3,3,-2,0,3,4,0,0,1,8,0),Ae(0,2,4,-1,0,4,5,0,0,1,10,0),Ae(0,3,5,-1,0,5,8,0,0,1,14,0),Ae(0,3,5,-1,0,6,10,0,0,1,18,0),Ae(0,4,5,-2,0,7,10,1,0,2,16,1),Ae(0,5,5,-3,0,8,10,1,0,3,14,2),Ae(0,5,6,-3,0,9,12,1,0,3,16,2),Ae(0,6,6,-3,0,10,14,1,0,4,18,3),Ae(0,6,7,-4,0,11,15,1,0,4,20,3),Ae(0,7,8,-4,0,12,17,2,0,5,22,4),Ae(0,7,8,-4,0,13,19,2,0,5,24,4),Ae(0,7,9,-4,0,14,21,2,0,5,26,4),Ae(0,8,9,-5,0,15,22,2,0,6,28,5),Ae(0,8,10,-5,0,16,24,2,0,6,30,5),Ae(0,8,11,-5,0,17,26,2,0,6,32,5),Ae(0,9,11,-5,0,18,28,2,0,7,34,6),Ae(0,9,12,-6,0,19,29,2,0,7,36,6),Ae(0,10,13,-6,0,20,31,3,0,8,38,7),Ae(0,10,13,-6,0,21,33,3,0,8,40,7),Ae(0,10,14,-6,0,22,35,3,0,8,42,7),Ae(0,11,14,-7,0,23,36,3,0,9,44,8),Ae(0,11,15,-7,0,24,38,3,0,9,46,8)],EV=["duration","easing","delay"],SV={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},bV={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function ES(e){return`${Math.round(e)}ms`}function TV(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function IV(e){const t=B({},SV,e.easing),n=B({},bV,e.duration);return B({getAutoHeightDuration:TV,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:l=0}=o;return Bn(o,EV),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:ES(s)} ${a} ${typeof l=="string"?l:ES(l)}`).join(",")}},e,{easing:t,duration:n})}const CV={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},xV=CV,kV=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function AV(e={},...t){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=e,s=Bn(e,kV);if(e.vars)throw new Error(Ws(18));const a=hV(r),l=p1(e);let u=Vn(l,{mixins:Yj(l.breakpoints,n),palette:a,shadows:wV.slice(),typography:gV(a,o),transitions:IV(i),zIndex:B({},xV)});return u=Vn(u,s),u=t.reduce((c,f)=>Vn(c,f),u),u.unstable_sxConfig=B({},h1,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(f){return Xh({sx:f,theme:this})},u}const PV=AV(),SA=PV,bA="$$material";function RV({props:e,name:t}){return Wj({props:e,name:t,defaultTheme:SA,themeId:bA})}const OV=e=>Df(e)&&e!=="classes",NV=zj({themeId:bA,defaultTheme:SA,rootShouldForwardProp:OV});function $V(e){return tA("MuiSvgIcon",e)}EL("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const DV=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],MV=e=>{const{color:t,fontSize:n,classes:r}=e,i={root:["root",t!=="inherit"&&`color${ar(t)}`,`fontSize${ar(n)}`]};return yL(i,$V,r)},LV=NV("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${ar(n.color)}`],t[`fontSize${ar(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,i,o,s,a,l,u,c,f,d,h,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=e.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((o=e.typography)==null||(s=o.pxToRem)==null?void 0:s.call(o,20))||"1.25rem",medium:((a=e.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((u=e.typography)==null||(c=u.pxToRem)==null?void 0:c.call(u,35))||"2.1875rem"}[t.fontSize],color:(f=(d=(e.vars||e).palette)==null||(d=d[t.color])==null?void 0:d.main)!=null?f:{action:(h=(e.vars||e).palette)==null||(h=h.action)==null?void 0:h.active,disabled:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.disabled,inherit:void 0}[t.color]}}),Ov=b.forwardRef(function(t,n){const r=RV({props:t,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:c=!1,titleAccess:f,viewBox:d="0 0 24 24"}=r,h=Bn(r,DV),g=b.isValidElement(i)&&i.type==="svg",m=B({},r,{color:s,component:a,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:c,viewBox:d,hasSvgAsChild:g}),_={};c||(_.viewBox=d);const v=MV(m);return w.jsxs(LV,B({as:a,className:SL(v.root,o),focusable:"false",color:u,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n},_,h,g&&i.props,{ownerState:m,children:[g?i.props.children:i,f?w.jsx("title",{children:f}):null]}))});Ov.muiName="SvgIcon";function jV(e,t){function n(r,i){return w.jsx(Ov,B({"data-testid":`${t}Icon`,ref:i},r,{children:e}))}return n.muiName=Ov.muiName,b.memo(b.forwardRef(n))}const VV={configure:e=>{eA.configure(e)}},FV=Object.freeze(Object.defineProperty({__proto__:null,capitalize:ar,createChainedFunction:J5,createSvgIcon:jV,debounce:Z5,deprecatedPropType:eL,isMuiElement:tL,ownerDocument:Yk,ownerWindow:nL,requirePropFactory:rL,setRef:Xk,unstable_ClassNameGenerator:VV,unstable_useEnhancedEffect:Jk,unstable_useId:sL,unsupportedProp:aL,useControlled:lL,useEventCallback:uL,useForkRef:cL,useIsFocusVisible:vL},Symbol.toStringTag,{value:"Module"})),UV=FN(FV);var SS;function Jh(){return SS||(SS=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=UV}(Am)),Am}var zV=Ph;Object.defineProperty(e1,"__esModule",{value:!0});var TA=e1.default=void 0,BV=zV(Jh()),WV=w,HV=(0,BV.default)((0,WV.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"}),"ShoppingBagOutlined");TA=e1.default=HV;var qV=Math.ceil,GV=Math.max;function KV(e,t,n,r){for(var i=-1,o=GV(qV((t-e)/(n||1)),0),s=Array(o);o--;)s[r?o:++i]=e,e+=n;return s}var QV=KV;function YV(e,t){return e===t||e!==e&&t!==t}var g1=YV,XV=typeof Re=="object"&&Re&&Re.Object===Object&&Re,IA=XV,JV=IA,ZV=typeof self=="object"&&self&&self.Object===Object&&self,e9=JV||ZV||Function("return this")(),pr=e9,t9=pr,n9=t9.Symbol,Zh=n9,bS=Zh,CA=Object.prototype,r9=CA.hasOwnProperty,i9=CA.toString,za=bS?bS.toStringTag:void 0;function o9(e){var t=r9.call(e,za),n=e[za];try{e[za]=void 0;var r=!0}catch{}var i=i9.call(e);return r&&(t?e[za]=n:delete e[za]),i}var s9=o9,a9=Object.prototype,l9=a9.toString;function u9(e){return l9.call(e)}var c9=u9,TS=Zh,f9=s9,d9=c9,h9="[object Null]",p9="[object Undefined]",IS=TS?TS.toStringTag:void 0;function m9(e){return e==null?e===void 0?p9:h9:IS&&IS in Object(e)?f9(e):d9(e)}var Bu=m9;function g9(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ep=g9,v9=Bu,y9=ep,_9="[object AsyncFunction]",w9="[object Function]",E9="[object GeneratorFunction]",S9="[object Proxy]";function b9(e){if(!y9(e))return!1;var t=v9(e);return t==w9||t==E9||t==_9||t==S9}var xA=b9,T9=9007199254740991;function I9(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=T9}var kA=I9,C9=xA,x9=kA;function k9(e){return e!=null&&x9(e.length)&&!C9(e)}var AA=k9,A9=9007199254740991,P9=/^(?:0|[1-9]\d*)$/;function R9(e,t){var n=typeof e;return t=t??A9,!!t&&(n=="number"||n!="symbol"&&P9.test(e))&&e>-1&&e%1==0&&e<t}var PA=R9,O9=g1,N9=AA,$9=PA,D9=ep;function M9(e,t,n){if(!D9(n))return!1;var r=typeof t;return(r=="number"?N9(n)&&$9(t,n.length):r=="string"&&t in n)?O9(n[t],e):!1}var L9=M9,j9=/\s/;function V9(e){for(var t=e.length;t--&&j9.test(e.charAt(t)););return t}var F9=V9,U9=F9,z9=/^\s+/;function B9(e){return e&&e.slice(0,U9(e)+1).replace(z9,"")}var W9=B9;function H9(e){return e!=null&&typeof e=="object"}var Wu=H9,q9=Bu,G9=Wu,K9="[object Symbol]";function Q9(e){return typeof e=="symbol"||G9(e)&&q9(e)==K9}var RA=Q9,Y9=W9,CS=ep,X9=RA,xS=NaN,J9=/^[-+]0x[0-9a-f]+$/i,Z9=/^0b[01]+$/i,e6=/^0o[0-7]+$/i,t6=parseInt;function n6(e){if(typeof e=="number")return e;if(X9(e))return xS;if(CS(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=CS(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Y9(e);var n=Z9.test(e);return n||e6.test(e)?t6(e.slice(2),n?2:8):J9.test(e)?xS:+e}var OA=n6,r6=OA,kS=1/0,i6=17976931348623157e292;function o6(e){if(!e)return e===0?e:0;if(e=r6(e),e===kS||e===-kS){var t=e<0?-1:1;return t*i6}return e===e?e:0}var NA=o6,s6=QV,a6=L9,Nm=NA;function l6(e){return function(t,n,r){return r&&typeof r!="number"&&a6(t,n,r)&&(n=r=void 0),t=Nm(t),n===void 0?(n=t,t=0):n=Nm(n),r=r===void 0?t<n?1:-1:Nm(r),s6(t,n,r,e)}}var u6=l6,c6=u6,f6=c6(),d6=f6;const h6=Oo(d6);var $A={};Object.defineProperty($A,"__esModule",{value:!0});$A.default=p6;function p6(e){return e.displayName||e.name||(typeof e=="string"&&e.length>0?e:"Unknown")}function Vc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xd(){return xd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xd.apply(this,arguments)}function m6(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Gr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g6(e){var t=function(n){m6(r,n);function r(){for(var o,s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return o=n.call.apply(n,[this].concat(a))||this,Vc(Gr(Gr(o)),"cachedTheme",void 0),Vc(Gr(Gr(o)),"lastOuterTheme",void 0),Vc(Gr(Gr(o)),"lastTheme",void 0),Vc(Gr(Gr(o)),"renderProvider",function(u){var c=o.props.children;return H.createElement(e.Provider,{value:o.getTheme(u)},c)}),o}var i=r.prototype;return i.getTheme=function(s){if(this.props.theme!==this.lastTheme||s!==this.lastOuterTheme||!this.cachedTheme)if(this.lastOuterTheme=s,this.lastTheme=this.props.theme,typeof this.lastTheme=="function"){var a=this.props.theme;this.cachedTheme=a(s)}else{var l=this.props.theme;this.cachedTheme=s?xd({},s,l):l}return this.cachedTheme},i.render=function(){var s=this.props.children;return s?H.createElement(e.Consumer,null,this.renderProvider):null},r}(H.Component);return t}function v6(e){return function(n){var r=H.forwardRef(function(i,o){return H.createElement(e.Consumer,null,function(s){return H.createElement(n,xd({theme:s,ref:o},i))})});return d3(r,n),r}}function y6(e){var t=function(){var r=H.useContext(e);return r};return t}function _6(e){return{context:e,withTheme:v6(e),useTheme:y6(e),ThemeProvider:g6(e)}}var DA=b.createContext();_6(DA);var AS=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fa=(typeof window>"u"?"undefined":AS(window))==="object"&&(typeof document>"u"?"undefined":AS(document))==="object"&&document.nodeType===9;function su(e){"@babel/helpers - typeof";return su=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},su(e)}function w6(e,t){if(su(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(su(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function E6(e){var t=w6(e,"string");return su(t)=="symbol"?t:String(t)}function PS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,E6(r.key),r)}}function v1(e,t,n){return t&&PS(e.prototype,t),n&&PS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Nv(e,t){return Nv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Nv(e,t)}function MA(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Nv(e,t)}function RS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var S6={}.constructor;function $v(e){if(e==null||typeof e!="object")return e;if(Array.isArray(e))return e.map($v);if(e.constructor!==S6)return e;var t={};for(var n in e)t[n]=$v(e[n]);return t}function tp(e,t,n){e===void 0&&(e="unnamed");var r=n.jss,i=$v(t),o=r.plugins.onCreateRule(e,i,n);return o||(e[0],null)}var OS=function(t,n){for(var r="",i=0;i<t.length&&t[i]!=="!important";i++)r&&(r+=n),r+=t[i];return r},ho=function(t){if(!Array.isArray(t))return t;var n="";if(Array.isArray(t[0]))for(var r=0;r<t.length&&t[r]!=="!important";r++)n&&(n+=", "),n+=OS(t[r]," ");else n=OS(t,", ");return t[t.length-1]==="!important"&&(n+=" !important"),n};function da(e){return e&&e.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function Ba(e,t){for(var n="",r=0;r<t;r++)n+="  ";return n+e}function au(e,t,n){n===void 0&&(n={});var r="";if(!t)return r;var i=n,o=i.indent,s=o===void 0?0:o,a=t.fallbacks;n.format===!1&&(s=-1/0);var l=da(n),u=l.linebreak,c=l.space;if(e&&s++,a)if(Array.isArray(a))for(var f=0;f<a.length;f++){var d=a[f];for(var h in d){var g=d[h];g!=null&&(r&&(r+=u),r+=Ba(h+":"+c+ho(g)+";",s))}}else for(var m in a){var _=a[m];_!=null&&(r&&(r+=u),r+=Ba(m+":"+c+ho(_)+";",s))}for(var v in t){var p=t[v];p!=null&&v!=="fallbacks"&&(r&&(r+=u),r+=Ba(v+":"+c+ho(p)+";",s))}return!r&&!n.allowEmpty||!e?r:(s--,r&&(r=""+u+r+u),Ba(""+e+c+"{"+r,s)+Ba("}",s))}var b6=/([[\].#*$><+~=|^:(),"'`\s])/g,NS=typeof CSS<"u"&&CSS.escape,y1=function(e){return NS?NS(e):e.replace(b6,"\\$1")},LA=function(){function e(n,r,i){this.type="style",this.isProcessed=!1;var o=i.sheet,s=i.Renderer;this.key=n,this.options=i,this.style=r,o?this.renderer=o.renderer:s&&(this.renderer=new s)}var t=e.prototype;return t.prop=function(r,i,o){if(i===void 0)return this.style[r];var s=o?o.force:!1;if(!s&&this.style[r]===i)return this;var a=i;(!o||o.process!==!1)&&(a=this.options.jss.plugins.onChangeValue(i,r,this));var l=a==null||a===!1,u=r in this.style;if(l&&!u&&!s)return this;var c=l&&u;if(c?delete this.style[r]:this.style[r]=a,this.renderable&&this.renderer)return c?this.renderer.removeProperty(this.renderable,r):this.renderer.setProperty(this.renderable,r,a),this;var f=this.options.sheet;return f&&f.attached,this},e}(),Dv=function(e){MA(t,e);function t(r,i,o){var s;s=e.call(this,r,i,o)||this;var a=o.selector,l=o.scoped,u=o.sheet,c=o.generateId;return a?s.selectorText=a:l!==!1&&(s.id=c(RS(RS(s)),u),s.selectorText="."+y1(s.id)),s}var n=t.prototype;return n.applyTo=function(i){var o=this.renderer;if(o){var s=this.toJSON();for(var a in s)o.setProperty(i,a,s[a])}return this},n.toJSON=function(){var i={};for(var o in this.style){var s=this.style[o];typeof s!="object"?i[o]=s:Array.isArray(s)&&(i[o]=ho(s))}return i},n.toString=function(i){var o=this.options.sheet,s=o?o.options.link:!1,a=s?B({},i,{allowEmpty:!0}):i;return au(this.selectorText,this.style,a)},v1(t,[{key:"selector",set:function(i){if(i!==this.selectorText){this.selectorText=i;var o=this.renderer,s=this.renderable;if(!(!s||!o)){var a=o.setSelector(s,i);a||o.replaceRule(s,this)}}},get:function(){return this.selectorText}}]),t}(LA),T6={onCreateRule:function(t,n,r){return t[0]==="@"||r.parent&&r.parent.type==="keyframes"?null:new Dv(t,n,r)}},$m={indent:1,children:!0},I6=/@([\w-]+)/,C6=function(){function e(n,r,i){this.type="conditional",this.isProcessed=!1,this.key=n;var o=n.match(I6);this.at=o?o[1]:"unknown",this.query=i.name||"@"+this.at,this.options=i,this.rules=new np(B({},i,{parent:this}));for(var s in r)this.rules.add(s,r[s]);this.rules.process()}var t=e.prototype;return t.getRule=function(r){return this.rules.get(r)},t.indexOf=function(r){return this.rules.indexOf(r)},t.addRule=function(r,i,o){var s=this.rules.add(r,i,o);return s?(this.options.jss.plugins.onProcessRule(s),s):null},t.replaceRule=function(r,i,o){var s=this.rules.replace(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},t.toString=function(r){r===void 0&&(r=$m);var i=da(r),o=i.linebreak;if(r.indent==null&&(r.indent=$m.indent),r.children==null&&(r.children=$m.children),r.children===!1)return this.query+" {}";var s=this.rules.toString(r);return s?this.query+" {"+o+s+o+"}":""},e}(),x6=/@container|@media|@supports\s+/,k6={onCreateRule:function(t,n,r){return x6.test(t)?new C6(t,n,r):null}},Dm={indent:1,children:!0},A6=/@keyframes\s+([\w-]+)/,Mv=function(){function e(n,r,i){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var o=n.match(A6);o&&o[1]?this.name=o[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=i;var s=i.scoped,a=i.sheet,l=i.generateId;this.id=s===!1?this.name:y1(l(this,a)),this.rules=new np(B({},i,{parent:this}));for(var u in r)this.rules.add(u,r[u],B({},i,{parent:this}));this.rules.process()}var t=e.prototype;return t.toString=function(r){r===void 0&&(r=Dm);var i=da(r),o=i.linebreak;if(r.indent==null&&(r.indent=Dm.indent),r.children==null&&(r.children=Dm.children),r.children===!1)return this.at+" "+this.id+" {}";var s=this.rules.toString(r);return s&&(s=""+o+s+o),this.at+" "+this.id+" {"+s+"}"},e}(),P6=/@keyframes\s+/,R6=/\$([\w-]+)/g,Lv=function(t,n){return typeof t=="string"?t.replace(R6,function(r,i){return i in n?n[i]:r}):t},$S=function(t,n,r){var i=t[n],o=Lv(i,r);o!==i&&(t[n]=o)},O6={onCreateRule:function(t,n,r){return typeof t=="string"&&P6.test(t)?new Mv(t,n,r):null},onProcessStyle:function(t,n,r){return n.type!=="style"||!r||("animation-name"in t&&$S(t,"animation-name",r.keyframes),"animation"in t&&$S(t,"animation",r.keyframes)),t},onChangeValue:function(t,n,r){var i=r.options.sheet;if(!i)return t;switch(n){case"animation":return Lv(t,i.keyframes);case"animation-name":return Lv(t,i.keyframes);default:return t}}},N6=function(e){MA(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.toString=function(i){var o=this.options.sheet,s=o?o.options.link:!1,a=s?B({},i,{allowEmpty:!0}):i;return au(this.key,this.style,a)},t}(LA),$6={onCreateRule:function(t,n,r){return r.parent&&r.parent.type==="keyframes"?new N6(t,n,r):null}},D6=function(){function e(n,r,i){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var t=e.prototype;return t.toString=function(r){var i=da(r),o=i.linebreak;if(Array.isArray(this.style)){for(var s="",a=0;a<this.style.length;a++)s+=au(this.at,this.style[a]),this.style[a+1]&&(s+=o);return s}return au(this.at,this.style,r)},e}(),M6=/@font-face/,L6={onCreateRule:function(t,n,r){return M6.test(t)?new D6(t,n,r):null}},j6=function(){function e(n,r,i){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var t=e.prototype;return t.toString=function(r){return au(this.key,this.style,r)},e}(),V6={onCreateRule:function(t,n,r){return t==="@viewport"||t==="@-ms-viewport"?new j6(t,n,r):null}},F6=function(){function e(n,r,i){this.type="simple",this.isProcessed=!1,this.key=n,this.value=r,this.options=i}var t=e.prototype;return t.toString=function(r){if(Array.isArray(this.value)){for(var i="",o=0;o<this.value.length;o++)i+=this.key+" "+this.value[o]+";",this.value[o+1]&&(i+=`
`);return i}return this.key+" "+this.value+";"},e}(),U6={"@charset":!0,"@import":!0,"@namespace":!0},z6={onCreateRule:function(t,n,r){return t in U6?new F6(t,n,r):null}},DS=[T6,k6,O6,$6,L6,V6,z6],B6={process:!0},MS={force:!0,process:!0},np=function(){function e(n){this.map={},this.raw={},this.index=[],this.counter=0,this.options=n,this.classes=n.classes,this.keyframes=n.keyframes}var t=e.prototype;return t.add=function(r,i,o){var s=this.options,a=s.parent,l=s.sheet,u=s.jss,c=s.Renderer,f=s.generateId,d=s.scoped,h=B({classes:this.classes,parent:a,sheet:l,jss:u,Renderer:c,generateId:f,scoped:d,name:r,keyframes:this.keyframes,selector:void 0},o),g=r;r in this.raw&&(g=r+"-d"+this.counter++),this.raw[g]=i,g in this.classes&&(h.selector="."+y1(this.classes[g]));var m=tp(g,i,h);if(!m)return null;this.register(m);var _=h.index===void 0?this.index.length:h.index;return this.index.splice(_,0,m),m},t.replace=function(r,i,o){var s=this.get(r),a=this.index.indexOf(s);s&&this.remove(s);var l=o;return a!==-1&&(l=B({},o,{index:a})),this.add(r,i,l)},t.get=function(r){return this.map[r]},t.remove=function(r){this.unregister(r),delete this.raw[r.key],this.index.splice(this.index.indexOf(r),1)},t.indexOf=function(r){return this.index.indexOf(r)},t.process=function(){var r=this.options.jss.plugins;this.index.slice(0).forEach(r.onProcessRule,r)},t.register=function(r){this.map[r.key]=r,r instanceof Dv?(this.map[r.selector]=r,r.id&&(this.classes[r.key]=r.id)):r instanceof Mv&&this.keyframes&&(this.keyframes[r.name]=r.id)},t.unregister=function(r){delete this.map[r.key],r instanceof Dv?(delete this.map[r.selector],delete this.classes[r.key]):r instanceof Mv&&delete this.keyframes[r.name]},t.update=function(){var r,i,o;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(r=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1],o=arguments.length<=2?void 0:arguments[2]):(i=arguments.length<=0?void 0:arguments[0],o=arguments.length<=1?void 0:arguments[1],r=null),r)this.updateOne(this.get(r),i,o);else for(var s=0;s<this.index.length;s++)this.updateOne(this.index[s],i,o)},t.updateOne=function(r,i,o){o===void 0&&(o=B6);var s=this.options,a=s.jss.plugins,l=s.sheet;if(r.rules instanceof e){r.rules.update(i,o);return}var u=r.style;if(a.onUpdate(i,r,l,o),o.process&&u&&u!==r.style){a.onProcessStyle(r.style,r,l);for(var c in r.style){var f=r.style[c],d=u[c];f!==d&&r.prop(c,f,MS)}for(var h in u){var g=r.style[h],m=u[h];g==null&&g!==m&&r.prop(h,null,MS)}}},t.toString=function(r){for(var i="",o=this.options.sheet,s=o?o.options.link:!1,a=da(r),l=a.linebreak,u=0;u<this.index.length;u++){var c=this.index[u],f=c.toString(r);!f&&!s||(i&&(i+=l),i+=f)}return i},e}(),jA=function(){function e(n,r){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=B({},r,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),r.Renderer&&(this.renderer=new r.Renderer(this)),this.rules=new np(this.options);for(var i in n)this.rules.add(i,n[i]);this.rules.process()}var t=e.prototype;return t.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},t.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},t.addRule=function(r,i,o){var s=this.queue;this.attached&&!s&&(this.queue=[]);var a=this.rules.add(r,i,o);return a?(this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&(s?s.push(a):(this.insertRule(a),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),a):(this.deployed=!1,a)):null},t.replaceRule=function(r,i,o){var s=this.rules.get(r);if(!s)return this.addRule(r,i,o);var a=this.rules.replace(r,i,o);return a&&this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&this.renderer&&(a?s.renderable&&this.renderer.replaceRule(s.renderable,a):this.renderer.deleteRule(s)),a):(this.deployed=!1,a)},t.insertRule=function(r){this.renderer&&this.renderer.insertRule(r)},t.addRules=function(r,i){var o=[];for(var s in r){var a=this.addRule(s,r[s],i);a&&o.push(a)}return o},t.getRule=function(r){return this.rules.get(r)},t.deleteRule=function(r){var i=typeof r=="object"?r:this.rules.get(r);return!i||this.attached&&!i.renderable?!1:(this.rules.remove(i),this.attached&&i.renderable&&this.renderer?this.renderer.deleteRule(i.renderable):!0)},t.indexOf=function(r){return this.rules.indexOf(r)},t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},t.update=function(){var r;return(r=this.rules).update.apply(r,arguments),this},t.updateOne=function(r,i,o){return this.rules.updateOne(r,i,o),this},t.toString=function(r){return this.rules.toString(r)},e}(),W6=function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var t=e.prototype;return t.onCreateRule=function(r,i,o){for(var s=0;s<this.registry.onCreateRule.length;s++){var a=this.registry.onCreateRule[s](r,i,o);if(a)return a}return null},t.onProcessRule=function(r){if(!r.isProcessed){for(var i=r.options.sheet,o=0;o<this.registry.onProcessRule.length;o++)this.registry.onProcessRule[o](r,i);r.style&&this.onProcessStyle(r.style,r,i),r.isProcessed=!0}},t.onProcessStyle=function(r,i,o){for(var s=0;s<this.registry.onProcessStyle.length;s++)i.style=this.registry.onProcessStyle[s](i.style,i,o)},t.onProcessSheet=function(r){for(var i=0;i<this.registry.onProcessSheet.length;i++)this.registry.onProcessSheet[i](r)},t.onUpdate=function(r,i,o,s){for(var a=0;a<this.registry.onUpdate.length;a++)this.registry.onUpdate[a](r,i,o,s)},t.onChangeValue=function(r,i,o){for(var s=r,a=0;a<this.registry.onChangeValue.length;a++)s=this.registry.onChangeValue[a](s,i,o);return s},t.use=function(r,i){i===void 0&&(i={queue:"external"});var o=this.plugins[i.queue];o.indexOf(r)===-1&&(o.push(r),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(s,a){for(var l in a)l in s&&s[l].push(a[l]);return s},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e}(),H6=function(){function e(){this.registry=[]}var t=e.prototype;return t.add=function(r){var i=this.registry,o=r.options.index;if(i.indexOf(r)===-1){if(i.length===0||o>=this.index){i.push(r);return}for(var s=0;s<i.length;s++)if(i[s].options.index>o){i.splice(s,0,r);return}}},t.reset=function(){this.registry=[]},t.remove=function(r){var i=this.registry.indexOf(r);this.registry.splice(i,1)},t.toString=function(r){for(var i=r===void 0?{}:r,o=i.attached,s=Bn(i,["attached"]),a=da(s),l=a.linebreak,u="",c=0;c<this.registry.length;c++){var f=this.registry[c];o!=null&&f.attached!==o||(u&&(u+=l),u+=f.toString(s))}return u},v1(e,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),e}(),bl=new H6,jv=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),Vv="2f1acc6c3a606b082e5eef5e54414ffb";jv[Vv]==null&&(jv[Vv]=0);var LS=jv[Vv]++,jS=function(t){t===void 0&&(t={});var n=0,r=function(o,s){n+=1;var a="",l="";return s&&(s.options.classNamePrefix&&(l=s.options.classNamePrefix),s.options.jss.id!=null&&(a=String(s.options.jss.id))),t.minify?""+(l||"c")+LS+a+n:l+o.key+"-"+LS+(a?"-"+a:"")+"-"+n};return r},VA=function(t){var n;return function(){return n||(n=t()),n}},q6=function(t,n){try{return t.attributeStyleMap?t.attributeStyleMap.get(n):t.style.getPropertyValue(n)}catch{return""}},G6=function(t,n,r){try{var i=r;if(Array.isArray(r)&&(i=ho(r)),t.attributeStyleMap)t.attributeStyleMap.set(n,i);else{var o=i?i.indexOf("!important"):-1,s=o>-1?i.substr(0,o-1):i;t.style.setProperty(n,s,o>-1?"important":"")}}catch{return!1}return!0},K6=function(t,n){try{t.attributeStyleMap?t.attributeStyleMap.delete(n):t.style.removeProperty(n)}catch{}},Q6=function(t,n){return t.selectorText=n,t.selectorText===n},FA=VA(function(){return document.querySelector("head")});function Y6(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.attached&&r.options.index>t.index&&r.options.insertionPoint===t.insertionPoint)return r}return null}function X6(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.attached&&r.options.insertionPoint===t.insertionPoint)return r}return null}function J6(e){for(var t=FA(),n=0;n<t.childNodes.length;n++){var r=t.childNodes[n];if(r.nodeType===8&&r.nodeValue.trim()===e)return r}return null}function Z6(e){var t=bl.registry;if(t.length>0){var n=Y6(t,e);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if(n=X6(t,e),n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}var r=e.insertionPoint;if(r&&typeof r=="string"){var i=J6(r);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}function eF(e,t){var n=t.insertionPoint,r=Z6(t);if(r!==!1&&r.parent){r.parent.insertBefore(e,r.node);return}if(n&&typeof n.nodeType=="number"){var i=n,o=i.parentNode;o&&o.insertBefore(e,i.nextSibling);return}FA().appendChild(e)}var tF=VA(function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}),VS=function(t,n,r){try{"insertRule"in t?t.insertRule(n,r):"appendRule"in t&&t.appendRule(n)}catch{return!1}return t.cssRules[r]},FS=function(t,n){var r=t.cssRules.length;return n===void 0||n>r?r:n},nF=function(){var t=document.createElement("style");return t.textContent=`
`,t},rF=function(){function e(n){this.getPropertyValue=q6,this.setProperty=G6,this.removeProperty=K6,this.setSelector=Q6,this.hasInsertedRules=!1,this.cssRules=[],n&&bl.add(n),this.sheet=n;var r=this.sheet?this.sheet.options:{},i=r.media,o=r.meta,s=r.element;this.element=s||nF(),this.element.setAttribute("data-jss",""),i&&this.element.setAttribute("media",i),o&&this.element.setAttribute("data-meta",o);var a=tF();a&&this.element.setAttribute("nonce",a)}var t=e.prototype;return t.attach=function(){if(!(this.element.parentNode||!this.sheet)){eF(this.element,this.sheet.options);var r=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&r&&(this.hasInsertedRules=!1,this.deploy())}},t.detach=function(){if(this.sheet){var r=this.element.parentNode;r&&r.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},t.deploy=function(){var r=this.sheet;if(r){if(r.options.link){this.insertRules(r.rules);return}this.element.textContent=`
`+r.toString()+`
`}},t.insertRules=function(r,i){for(var o=0;o<r.index.length;o++)this.insertRule(r.index[o],o,i)},t.insertRule=function(r,i,o){if(o===void 0&&(o=this.element.sheet),r.rules){var s=r,a=o;if(r.type==="conditional"||r.type==="keyframes"){var l=FS(o,i);if(a=VS(o,s.toString({children:!1}),l),a===!1)return!1;this.refCssRule(r,l,a)}return this.insertRules(s.rules,a),a}var u=r.toString();if(!u)return!1;var c=FS(o,i),f=VS(o,u,c);return f===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(r,c,f),f)},t.refCssRule=function(r,i,o){r.renderable=o,r.options.parent instanceof jA&&this.cssRules.splice(i,0,o)},t.deleteRule=function(r){var i=this.element.sheet,o=this.indexOf(r);return o===-1?!1:(i.deleteRule(o),this.cssRules.splice(o,1),!0)},t.indexOf=function(r){return this.cssRules.indexOf(r)},t.replaceRule=function(r,i){var o=this.indexOf(r);return o===-1?!1:(this.element.sheet.deleteRule(o),this.cssRules.splice(o,1),this.insertRule(i,o))},t.getRules=function(){return this.element.sheet.cssRules},e}(),iF=0,oF=function(){function e(n){this.id=iF++,this.version="10.10.0",this.plugins=new W6,this.options={id:{minify:!1},createGenerateId:jS,Renderer:fa?rF:null,plugins:[]},this.generateId=jS({minify:!1});for(var r=0;r<DS.length;r++)this.plugins.use(DS[r],{queue:"internal"});this.setup(n)}var t=e.prototype;return t.setup=function(r){return r===void 0&&(r={}),r.createGenerateId&&(this.options.createGenerateId=r.createGenerateId),r.id&&(this.options.id=B({},this.options.id,r.id)),(r.createGenerateId||r.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),r.insertionPoint!=null&&(this.options.insertionPoint=r.insertionPoint),"Renderer"in r&&(this.options.Renderer=r.Renderer),r.plugins&&this.use.apply(this,r.plugins),this},t.createStyleSheet=function(r,i){i===void 0&&(i={});var o=i,s=o.index;typeof s!="number"&&(s=bl.index===0?0:bl.index+1);var a=new jA(r,B({},i,{jss:this,generateId:i.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:s}));return this.plugins.onProcessSheet(a),a},t.removeStyleSheet=function(r){return r.detach(),bl.remove(r),this},t.createRule=function(r,i,o){if(i===void 0&&(i={}),o===void 0&&(o={}),typeof r=="object")return this.createRule(void 0,r,i);var s=B({},o,{name:r,jss:this,Renderer:this.options.Renderer});s.generateId||(s.generateId=this.generateId),s.classes||(s.classes={}),s.keyframes||(s.keyframes={});var a=tp(r,i,s);return a&&this.plugins.onProcessRule(a),a},t.use=function(){for(var r=this,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return o.forEach(function(a){r.plugins.use(a)}),this},e}(),UA=function(t){return new oF(t)},US=function(){function e(){this.length=0,this.sheets=new WeakMap}var t=e.prototype;return t.get=function(r){var i=this.sheets.get(r);return i&&i.sheet},t.add=function(r,i){this.sheets.has(r)||(this.length++,this.sheets.set(r,{sheet:i,refs:0}))},t.manage=function(r){var i=this.sheets.get(r);if(i)return i.refs===0&&i.sheet.attach(),i.refs++,i.sheet},t.unmanage=function(r){var i=this.sheets.get(r);i&&i.refs>0&&(i.refs--,i.refs===0&&i.sheet.detach())},v1(e,[{key:"size",get:function(){return this.length}}]),e}(),_1=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function zA(e){var t=null;for(var n in e){var r=e[n],i=typeof r;if(i==="function")t||(t={}),t[n]=r;else if(i==="object"&&r!==null&&!Array.isArray(r)){var o=zA(r);o&&(t||(t={}),t[n]=o)}}return t}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */UA();var BA=Date.now(),Mm="fnValues"+BA,Lm="fnStyle"+ ++BA,sF=function(){return{onCreateRule:function(n,r,i){if(typeof r!="function")return null;var o=tp(n,{},i);return o[Lm]=r,o},onProcessStyle:function(n,r){if(Mm in r||Lm in r)return n;var i={};for(var o in n){var s=n[o];typeof s=="function"&&(delete n[o],i[o]=s)}return r[Mm]=i,n},onUpdate:function(n,r,i,o){var s=r,a=s[Lm];a&&(s.style=a(n)||{});var l=s[Mm];if(l)for(var u in l)s.prop(u,l[u](n),o)}}};function aF(e){var t,n=e.Symbol;return typeof n=="function"?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}var Qo;typeof self<"u"?Qo=self:typeof window<"u"?Qo=window:typeof global<"u"?Qo=global:typeof qy<"u"?Qo=qy:Qo=Function("return this")();var zS=aF(Qo),BS=function(t){return t&&t[zS]&&t===t[zS]()},lF=function(t){return{onCreateRule:function(r,i,o){if(!BS(i))return null;var s=i,a=tp(r,{},o);return s.subscribe(function(l){for(var u in l)a.prop(u,l[u],t)}),a},onProcessRule:function(r){if(!(r&&r.type!=="style")){var i=r,o=i.style,s=function(c){var f=o[c];if(!BS(f))return"continue";delete o[c],f.subscribe({next:function(h){i.prop(c,h,t)}})};for(var a in o)var l=s(a)}}}};const uF=lF;var cF=/;\n/,fF=function(t){for(var n={},r=t.split(cF),i=0;i<r.length;i++){var o=(r[i]||"").trim();if(o){var s=o.indexOf(":");if(s!==-1){var a=o.substr(0,s).trim(),l=o.substr(s+1).trim();n[a]=l}}}return n},dF=function(t){typeof t.style=="string"&&(t.style=fF(t.style))};function hF(){return{onProcessRule:dF}}var Ei="@global",Fv="@global ",pF=function(){function e(n,r,i){this.type="global",this.at=Ei,this.isProcessed=!1,this.key=n,this.options=i,this.rules=new np(B({},i,{parent:this}));for(var o in r)this.rules.add(o,r[o]);this.rules.process()}var t=e.prototype;return t.getRule=function(r){return this.rules.get(r)},t.addRule=function(r,i,o){var s=this.rules.add(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},t.replaceRule=function(r,i,o){var s=this.rules.replace(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},t.indexOf=function(r){return this.rules.indexOf(r)},t.toString=function(r){return this.rules.toString(r)},e}(),mF=function(){function e(n,r,i){this.type="global",this.at=Ei,this.isProcessed=!1,this.key=n,this.options=i;var o=n.substr(Fv.length);this.rule=i.jss.createRule(o,r,B({},i,{parent:this}))}var t=e.prototype;return t.toString=function(r){return this.rule?this.rule.toString(r):""},e}(),gF=/\s*,\s*/g;function WA(e,t){for(var n=e.split(gF),r="",i=0;i<n.length;i++)r+=t+" "+n[i].trim(),n[i+1]&&(r+=", ");return r}function vF(e,t){var n=e.options,r=e.style,i=r?r[Ei]:null;if(i){for(var o in i)t.addRule(o,i[o],B({},n,{selector:WA(o,e.selector)}));delete r[Ei]}}function yF(e,t){var n=e.options,r=e.style;for(var i in r)if(!(i[0]!=="@"||i.substr(0,Ei.length)!==Ei)){var o=WA(i.substr(Ei.length),e.selector);t.addRule(o,r[i],B({},n,{selector:o})),delete r[i]}}function _F(){function e(n,r,i){if(!n)return null;if(n===Ei)return new pF(n,r,i);if(n[0]==="@"&&n.substr(0,Fv.length)===Fv)return new mF(n,r,i);var o=i.parent;return o&&(o.type==="global"||o.options.parent&&o.options.parent.type==="global")&&(i.scoped=!1),!i.selector&&i.scoped===!1&&(i.selector=n),null}function t(n,r){n.type!=="style"||!r||(vF(n,r),yF(n,r))}return{onCreateRule:e,onProcessRule:t}}var Lf=function(t){return t&&typeof t=="object"&&!Array.isArray(t)},jm="extendCurrValue"+Date.now();function wF(e,t,n,r){var i=typeof e.extend;if(i==="string"){if(!n)return;var o=n.getRule(e.extend);if(!o||o===t)return;var s=o.options.parent;if(s){var a=s.rules.raw[e.extend];to(a,t,n,r)}return}if(Array.isArray(e.extend)){for(var l=0;l<e.extend.length;l++){var u=e.extend[l],c=typeof u=="string"?B({},e,{extend:u}):e.extend[l];to(c,t,n,r)}return}for(var f in e.extend){if(f==="extend"){to(e.extend.extend,t,n,r);continue}if(Lf(e.extend[f])){f in r||(r[f]={}),to(e.extend[f],t,n,r[f]);continue}r[f]=e.extend[f]}}function EF(e,t,n,r){for(var i in e)if(i!=="extend"){if(Lf(r[i])&&Lf(e[i])){to(e[i],t,n,r[i]);continue}if(Lf(e[i])){r[i]=to(e[i],t,n);continue}r[i]=e[i]}}function to(e,t,n,r){return r===void 0&&(r={}),wF(e,t,n,r),EF(e,t,n,r),r}function SF(){function e(n,r,i){return"extend"in n?to(n,r,i):n}function t(n,r,i){if(r!=="extend")return n;if(n==null||n===!1){for(var o in i[jm])i.prop(o,null);return i[jm]=null,null}if(typeof n=="object"){for(var s in n)i.prop(s,n[s]);i[jm]=n}return null}return{onProcessStyle:e,onChangeValue:t}}var WS=/\s*,\s*/g,bF=/&/g,TF=/\$([\w-]+)/g;function IF(){function e(i,o){return function(s,a){var l=i.getRule(a)||o&&o.getRule(a);return l?l.selector:a}}function t(i,o){for(var s=o.split(WS),a=i.split(WS),l="",u=0;u<s.length;u++)for(var c=s[u],f=0;f<a.length;f++){var d=a[f];l&&(l+=", "),l+=d.indexOf("&")!==-1?d.replace(bF,c):c+" "+d}return l}function n(i,o,s){if(s)return B({},s,{index:s.index+1});var a=i.options.nestingLevel;a=a===void 0?1:a+1;var l=B({},i.options,{nestingLevel:a,index:o.indexOf(i)+1});return delete l.name,l}function r(i,o,s){if(o.type!=="style")return i;var a=o,l=a.options.parent,u,c;for(var f in i){var d=f.indexOf("&")!==-1,h=f[0]==="@";if(!(!d&&!h)){if(u=n(a,l,u),d){var g=t(f,a.selector);c||(c=e(l,s)),g=g.replace(TF,c);var m=a.key+"-"+f;"replaceRule"in l?l.replaceRule(m,i[f],B({},u,{selector:g})):l.addRule(m,i[f],B({},u,{selector:g}))}else h&&l.addRule(f,{},u).addRule(a.key,i[f],{selector:a.selector});delete i[f]}}return i}return{onProcessStyle:r}}function Uv(e,t){if(!t)return!0;if(Array.isArray(t)){for(var n=0;n<t.length;n++){var r=Uv(e,t[n]);if(!r)return!1}return!0}if(t.indexOf(" ")>-1)return Uv(e,t.split(" "));var i=e.options.parent;if(t[0]==="$"){var o=i.getRule(t.substr(1));return!o||o===e?!1:(i.classes[e.key]+=" "+i.classes[o.key],!0)}return i.classes[e.key]+=" "+t,!0}function CF(){function e(t,n){return"composes"in t&&(Uv(n,t.composes),delete t.composes),t}return{onProcessStyle:e}}var xF=/[A-Z]/g,kF=/^ms-/,Vm={};function AF(e){return"-"+e.toLowerCase()}function HA(e){if(Vm.hasOwnProperty(e))return Vm[e];var t=e.replace(xF,AF);return Vm[e]=kF.test(t)?"-"+t:t}function kd(e){var t={};for(var n in e){var r=n.indexOf("--")===0?n:HA(n);t[r]=e[n]}return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(kd):t.fallbacks=kd(e.fallbacks)),t}function PF(){function e(n){if(Array.isArray(n)){for(var r=0;r<n.length;r++)n[r]=kd(n[r]);return n}return kd(n)}function t(n,r,i){if(r.indexOf("--")===0)return n;var o=HA(r);return r===o?n:(i.prop(o,n),null)}return{onProcessStyle:e,onChangeValue:t}}var C=_1&&CSS?CSS.px:"px",Fc=_1&&CSS?CSS.ms:"ms",qo=_1&&CSS?CSS.percent:"%",RF={"animation-delay":Fc,"animation-duration":Fc,"background-position":C,"background-position-x":C,"background-position-y":C,"background-size":C,border:C,"border-bottom":C,"border-bottom-left-radius":C,"border-bottom-right-radius":C,"border-bottom-width":C,"border-left":C,"border-left-width":C,"border-radius":C,"border-right":C,"border-right-width":C,"border-top":C,"border-top-left-radius":C,"border-top-right-radius":C,"border-top-width":C,"border-width":C,"border-block":C,"border-block-end":C,"border-block-end-width":C,"border-block-start":C,"border-block-start-width":C,"border-block-width":C,"border-inline":C,"border-inline-end":C,"border-inline-end-width":C,"border-inline-start":C,"border-inline-start-width":C,"border-inline-width":C,"border-start-start-radius":C,"border-start-end-radius":C,"border-end-start-radius":C,"border-end-end-radius":C,margin:C,"margin-bottom":C,"margin-left":C,"margin-right":C,"margin-top":C,"margin-block":C,"margin-block-end":C,"margin-block-start":C,"margin-inline":C,"margin-inline-end":C,"margin-inline-start":C,padding:C,"padding-bottom":C,"padding-left":C,"padding-right":C,"padding-top":C,"padding-block":C,"padding-block-end":C,"padding-block-start":C,"padding-inline":C,"padding-inline-end":C,"padding-inline-start":C,"mask-position-x":C,"mask-position-y":C,"mask-size":C,height:C,width:C,"min-height":C,"max-height":C,"min-width":C,"max-width":C,bottom:C,left:C,top:C,right:C,inset:C,"inset-block":C,"inset-block-end":C,"inset-block-start":C,"inset-inline":C,"inset-inline-end":C,"inset-inline-start":C,"box-shadow":C,"text-shadow":C,"column-gap":C,"column-rule":C,"column-rule-width":C,"column-width":C,"font-size":C,"font-size-delta":C,"letter-spacing":C,"text-decoration-thickness":C,"text-indent":C,"text-stroke":C,"text-stroke-width":C,"word-spacing":C,motion:C,"motion-offset":C,outline:C,"outline-offset":C,"outline-width":C,perspective:C,"perspective-origin-x":qo,"perspective-origin-y":qo,"transform-origin":qo,"transform-origin-x":qo,"transform-origin-y":qo,"transform-origin-z":qo,"transition-delay":Fc,"transition-duration":Fc,"vertical-align":C,"flex-basis":C,"shape-margin":C,size:C,gap:C,grid:C,"grid-gap":C,"row-gap":C,"grid-row-gap":C,"grid-column-gap":C,"grid-template-rows":C,"grid-template-columns":C,"grid-auto-rows":C,"grid-auto-columns":C,"box-shadow-x":C,"box-shadow-y":C,"box-shadow-blur":C,"box-shadow-spread":C,"font-line-height":C,"text-shadow-x":C,"text-shadow-y":C,"text-shadow-blur":C};function qA(e){var t=/(-[a-z])/g,n=function(s){return s[1].toUpperCase()},r={};for(var i in e)r[i]=e[i],r[i.replace(t,n)]=e[i];return r}var OF=qA(RF);function Tl(e,t,n){if(t==null)return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]=Tl(e,t[r],n);else if(typeof t=="object")if(e==="fallbacks")for(var i in t)t[i]=Tl(i,t[i],n);else for(var o in t)t[o]=Tl(e+"-"+o,t[o],n);else if(typeof t=="number"&&isNaN(t)===!1){var s=n[e]||OF[e];return s&&!(t===0&&s===C)?typeof s=="function"?s(t).toString():""+t+s:t.toString()}return t}function NF(e){e===void 0&&(e={});var t=qA(e);function n(i,o){if(o.type!=="style")return i;for(var s in i)i[s]=Tl(s,i[s],t);return i}function r(i,o){return Tl(o,i,t)}return{onProcessStyle:n,onChangeValue:r}}var $F={"background-size":!0,"background-position":!0,border:!0,"border-bottom":!0,"border-left":!0,"border-top":!0,"border-right":!0,"border-radius":!0,"border-image":!0,"border-width":!0,"border-style":!0,"border-color":!0,"box-shadow":!0,flex:!0,margin:!0,padding:!0,outline:!0,"transform-origin":!0,transform:!0,transition:!0},DF={position:!0,size:!0},Uc={padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},background:{attachment:null,color:null,image:null,position:null,repeat:null},border:{width:null,style:null,color:null},"border-top":{width:null,style:null,color:null},"border-right":{width:null,style:null,color:null},"border-bottom":{width:null,style:null,color:null},"border-left":{width:null,style:null,color:null},outline:{width:null,style:null,color:null},"list-style":{type:null,position:null,image:null},transition:{property:null,duration:null,"timing-function":null,timingFunction:null,delay:null},animation:{name:null,duration:null,"timing-function":null,timingFunction:null,delay:null,"iteration-count":null,iterationCount:null,direction:null,"fill-mode":null,fillMode:null,"play-state":null,playState:null},"box-shadow":{x:0,y:0,blur:0,spread:0,color:null,inset:null},"text-shadow":{x:0,y:0,blur:null,color:null}},Fm={border:{radius:"border-radius",image:"border-image",width:"border-width",style:"border-style",color:"border-color"},"border-bottom":{width:"border-bottom-width",style:"border-bottom-style",color:"border-bottom-color"},"border-top":{width:"border-top-width",style:"border-top-style",color:"border-top-color"},"border-left":{width:"border-left-width",style:"border-left-style",color:"border-left-color"},"border-right":{width:"border-right-width",style:"border-right-style",color:"border-right-color"},background:{size:"background-size",image:"background-image"},font:{style:"font-style",variant:"font-variant",weight:"font-weight",stretch:"font-stretch",size:"font-size",family:"font-family",lineHeight:"line-height","line-height":"line-height"},flex:{grow:"flex-grow",basis:"flex-basis",direction:"flex-direction",wrap:"flex-wrap",flow:"flex-flow",shrink:"flex-shrink"},align:{self:"align-self",items:"align-items",content:"align-content"},grid:{"template-columns":"grid-template-columns",templateColumns:"grid-template-columns","template-rows":"grid-template-rows",templateRows:"grid-template-rows","template-areas":"grid-template-areas",templateAreas:"grid-template-areas",template:"grid-template","auto-columns":"grid-auto-columns",autoColumns:"grid-auto-columns","auto-rows":"grid-auto-rows",autoRows:"grid-auto-rows","auto-flow":"grid-auto-flow",autoFlow:"grid-auto-flow",row:"grid-row",column:"grid-column","row-start":"grid-row-start",rowStart:"grid-row-start","row-end":"grid-row-end",rowEnd:"grid-row-end","column-start":"grid-column-start",columnStart:"grid-column-start","column-end":"grid-column-end",columnEnd:"grid-column-end",area:"grid-area",gap:"grid-gap","row-gap":"grid-row-gap",rowGap:"grid-row-gap","column-gap":"grid-column-gap",columnGap:"grid-column-gap"}};function MF(e,t,n){return e.map(function(r){return KA(r,t,n,!1,!0)})}function GA(e,t,n,r){return n[t]==null?e:e.length===0?[]:Array.isArray(e[0])?GA(e[0],t,n,r):typeof e[0]=="object"?MF(e,t,r):[e]}function KA(e,t,n,r,i){if(!(Uc[t]||Fm[t]))return[];var o=[];if(Fm[t]&&(e=LF(e,n,Fm[t],r)),Object.keys(e).length)for(var s in Uc[t]){if(e[s]){Array.isArray(e[s])?o.push(DF[s]===null?e[s]:e[s].join(" ")):o.push(e[s]);continue}Uc[t][s]!=null&&o.push(Uc[t][s])}return!o.length||i?o:[o]}function LF(e,t,n,r){for(var i in n){var o=n[i];if(typeof e[i]<"u"&&(r||!t.prop(o))){var s,a=lu((s={},s[o]=e[i],s),t)[o];r?t.style.fallbacks[o]=a:t.style[o]=a}delete e[i]}return e}function lu(e,t,n){for(var r in e){var i=e[r];if(Array.isArray(i)){if(!Array.isArray(i[0])){if(r==="fallbacks"){for(var o=0;o<e.fallbacks.length;o++)e.fallbacks[o]=lu(e.fallbacks[o],t,!0);continue}e[r]=GA(i,r,$F,t),e[r].length||delete e[r]}}else if(typeof i=="object"){if(r==="fallbacks"){e.fallbacks=lu(e.fallbacks,t,!0);continue}e[r]=KA(i,r,t,n),e[r].length||delete e[r]}else e[r]===""&&delete e[r]}return e}function jF(){function e(t,n){if(!t||n.type!=="style")return t;if(Array.isArray(t)){for(var r=0;r<t.length;r++)t[r]=lu(t[r],n);return t}return lu(t,n)}return{onProcessStyle:e}}function zv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function VF(e){if(Array.isArray(e))return zv(e)}function FF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function UF(e,t){if(e){if(typeof e=="string")return zv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zv(e,t)}}function zF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BF(e){return VF(e)||FF(e)||UF(e)||zF()}var tl="",Bv="",QA="",YA="",WF=fa&&"ontouchstart"in document.documentElement;if(fa){var Um={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},HF=document.createElement("p"),zm=HF.style,qF="Transform";for(var Bm in Um)if(Bm+qF in zm){tl=Bm,Bv=Um[Bm];break}tl==="Webkit"&&"msHyphens"in zm&&(tl="ms",Bv=Um.ms,YA="edge"),tl==="Webkit"&&"-apple-trailing-word"in zm&&(QA="apple")}var X={js:tl,css:Bv,vendor:QA,browser:YA,isTouch:WF};function GF(e){return e[1]==="-"||X.js==="ms"?e:"@"+X.css+"keyframes"+e.substr(10)}var KF={noPrefill:["appearance"],supportedProperty:function(t){return t!=="appearance"?!1:X.js==="ms"?"-webkit-"+t:X.css+t}},QF={noPrefill:["color-adjust"],supportedProperty:function(t){return t!=="color-adjust"?!1:X.js==="Webkit"?X.css+"print-"+t:t}},YF=/[-\s]+(.)?/g;function XF(e,t){return t?t.toUpperCase():""}function w1(e){return e.replace(YF,XF)}function ki(e){return w1("-"+e)}var JF={noPrefill:["mask"],supportedProperty:function(t,n){if(!/^mask/.test(t))return!1;if(X.js==="Webkit"){var r="mask-image";if(w1(r)in n)return t;if(X.js+ki(r)in n)return X.css+t}return t}},ZF={noPrefill:["text-orientation"],supportedProperty:function(t){return t!=="text-orientation"?!1:X.vendor==="apple"&&!X.isTouch?X.css+t:t}},eU={noPrefill:["transform"],supportedProperty:function(t,n,r){return t!=="transform"?!1:r.transform?t:X.css+t}},tU={noPrefill:["transition"],supportedProperty:function(t,n,r){return t!=="transition"?!1:r.transition?t:X.css+t}},nU={noPrefill:["writing-mode"],supportedProperty:function(t){return t!=="writing-mode"?!1:X.js==="Webkit"||X.js==="ms"&&X.browser!=="edge"?X.css+t:t}},rU={noPrefill:["user-select"],supportedProperty:function(t){return t!=="user-select"?!1:X.js==="Moz"||X.js==="ms"||X.vendor==="apple"?X.css+t:t}},iU={supportedProperty:function(t,n){if(!/^break-/.test(t))return!1;if(X.js==="Webkit"){var r="WebkitColumn"+ki(t);return r in n?X.css+"column-"+t:!1}if(X.js==="Moz"){var i="page"+ki(t);return i in n?"page-"+t:!1}return!1}},oU={supportedProperty:function(t,n){if(!/^(border|margin|padding)-inline/.test(t))return!1;if(X.js==="Moz")return t;var r=t.replace("-inline","");return X.js+ki(r)in n?X.css+r:!1}},sU={supportedProperty:function(t,n){return w1(t)in n?t:!1}},aU={supportedProperty:function(t,n){var r=ki(t);return t[0]==="-"||t[0]==="-"&&t[1]==="-"?t:X.js+r in n?X.css+t:X.js!=="Webkit"&&"Webkit"+r in n?"-webkit-"+t:!1}},lU={supportedProperty:function(t){return t.substring(0,11)!=="scroll-snap"?!1:X.js==="ms"?""+X.css+t:t}},uU={supportedProperty:function(t){return t!=="overscroll-behavior"?!1:X.js==="ms"?X.css+"scroll-chaining":t}},cU={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},fU={supportedProperty:function(t,n){var r=cU[t];return r&&X.js+ki(r)in n?X.css+r:!1}},XA={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},dU=Object.keys(XA),hU=function(t){return X.css+t},pU={supportedProperty:function(t,n,r){var i=r.multiple;if(dU.indexOf(t)>-1){var o=XA[t];if(!Array.isArray(o))return X.js+ki(o)in n?X.css+o:!1;if(!i)return!1;for(var s=0;s<o.length;s++)if(!(X.js+ki(o[0])in n))return!1;return o.map(hU)}return!1}},JA=[KF,QF,JF,ZF,eU,tU,nU,rU,iU,oU,sU,aU,lU,uU,fU,pU],HS=JA.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),mU=JA.filter(function(e){return e.noPrefill}).reduce(function(e,t){return e.push.apply(e,BF(t.noPrefill)),e},[]),nl,Qi={};if(fa){nl=document.createElement("p");var Wm=window.getComputedStyle(document.documentElement,"");for(var Hm in Wm)isNaN(Hm)||(Qi[Wm[Hm]]=Wm[Hm]);mU.forEach(function(e){return delete Qi[e]})}function Wv(e,t){if(t===void 0&&(t={}),!nl)return e;if(Qi[e]!=null)return Qi[e];(e==="transition"||e==="transform")&&(t[e]=e in nl.style);for(var n=0;n<HS.length&&(Qi[e]=HS[n](e,nl.style,t),!Qi[e]);n++);try{nl.style[e]=""}catch{return!1}return Qi[e]}var Go={},gU={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},vU=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,Jr;function yU(e,t,n){if(t==="var")return"var";if(t==="all")return"all";if(n==="all")return", all";var r=t?Wv(t):", "+Wv(n);return r||t||n}fa&&(Jr=document.createElement("p"));function qS(e,t){var n=t;if(!Jr||e==="content")return t;if(typeof n!="string"||!isNaN(parseInt(n,10)))return n;var r=e+n;if(Go[r]!=null)return Go[r];try{Jr.style[e]=n}catch{return Go[r]=!1,!1}if(gU[e])n=n.replace(vU,yU);else if(Jr.style[e]===""&&(n=X.css+n,n==="-ms-flex"&&(Jr.style[e]="-ms-flexbox"),Jr.style[e]=n,Jr.style[e]===""))return Go[r]=!1,!1;return Jr.style[e]="",Go[r]=n,Go[r]}function _U(){function e(i){if(i.type==="keyframes"){var o=i;o.at=GF(o.at)}}function t(i){for(var o in i){var s=i[o];if(o==="fallbacks"&&Array.isArray(s)){i[o]=s.map(t);continue}var a=!1,l=Wv(o);l&&l!==o&&(a=!0);var u=!1,c=qS(l,ho(s));c&&c!==s&&(u=!0),(a||u)&&(a&&delete i[o],i[l||o]=c||s)}return i}function n(i,o){return o.type!=="style"?i:t(i)}function r(i,o){return qS(o,ho(i))||i}return{onProcessRule:e,onProcessStyle:n,onChangeValue:r}}function wU(){var e=function(n,r){return n.length===r.length?n>r?1:-1:n.length-r.length};return{onProcessStyle:function(n,r){if(r.type!=="style")return n;for(var i={},o=Object.keys(n).sort(e),s=0;s<o.length;s++)i[o[s]]=n[o[s]];return i}}}var EU=function(t){return t===void 0&&(t={}),{plugins:[sF(),uF(t.observable),hF(),_F(),SF(),IF(),CF(),PF(),NF(t.defaultUnit),jF(),_U(),wU()]}},SU=Number.MIN_SAFE_INTEGER||-1e9,bU=function(){return SU++},TU=b.createContext({classNamePrefix:"",disableStylesGeneration:!1,isSSR:!fa}),GS=new Map,E1=function(t,n){var r=t.managers;if(r)return r[n]||(r[n]=new US),r[n];var i=GS.get(n);return i||(i=new US,GS.set(n,i)),i},KS=function(t){var n=t.sheet,r=t.context,i=t.index,o=t.theme;if(n){var s=E1(r,i);s.manage(o),r.registry&&r.registry.add(n)}},IU=function(t){if(t.sheet){var n=E1(t.context,t.index);n.unmanage(t.theme)}},CU=UA(EU()),ZA=new WeakMap,eP=function(t){return ZA.get(t)},xU=function(t,n){ZA.set(t,n)},kU=function(t){var n=t.styles;return typeof n!="function"?n:n(t.theme)};function AU(e,t){var n;e.context.id&&e.context.id.minify!=null&&(n=e.context.id.minify);var r=e.context.classNamePrefix||"";e.name&&!n&&(r+=e.name.replace(/\s/g,"-")+"-");var i="";return e.name&&(i=e.name+", "),i+=typeof e.styles=="function"?"Themed":"Unthemed",B({},e.sheetOptions,{index:e.index,meta:i,classNamePrefix:r,link:t,generateId:e.sheetOptions&&e.sheetOptions.generateId?e.sheetOptions.generateId:e.context.generateId})}var PU=function(t){if(!t.context.disableStylesGeneration){var n=E1(t.context,t.index),r=n.get(t.theme);if(r)return r;var i=t.context.jss||CU,o=kU(t),s=zA(o),a=i.createStyleSheet(o,AU(t,s!==null));return xU(a,{dynamicStyles:s,styles:o}),n.add(t.theme,a),a}},RU=function(t,n){for(var r in n)t.deleteRule(n[r])},OU=function(t,n,r){for(var i in r)n.updateOne(r[i],t)},NU=function(t,n){var r=eP(t);if(r){var i={};for(var o in r.dynamicStyles)for(var s=t.rules.index.length,a=t.addRule(o,r.dynamicStyles[o]),l=s;l<t.rules.index.length;l++){var u=t.rules.index[l];t.updateOne(u,n),i[a===u?o:u.key]=u}return i}},$U=function(t,n){if(!n)return t.classes;var r=eP(t);if(!r)return t.classes;var i={};for(var o in r.styles)i[o]=t.classes[o],o in n&&(i[o]+=" "+t.classes[n[o].key]);return i};function QS(e){return e?b.useEffect:H.useInsertionEffect||b.useLayoutEffect}var qm={},DU=function(t,n){n===void 0&&(n={});var r=n,i=r.index,o=i===void 0?bU():i,s=r.theming,a=r.name,l=Bn(r,["index","theming","name"]),u=s&&s.context||DA,c=function(h){return typeof t=="function"&&(h||b.useContext(u))||qm},f={};return function(h){var g=b.useRef(!0),m=b.useContext(TU),_=c(h&&h.theme),v=b.useMemo(function(){var S=PU({context:m,styles:t,name:a,theme:_,index:o,sheetOptions:l});return S&&m.isSSR&&KS({index:o,context:m,sheet:S,theme:_}),[S,S?NU(S,h):null]},[m,_]),p=v[0],y=v[1];QS(m.isSSR)(function(){p&&y&&!g.current&&OU(h,p,y)},[h]),QS(m.isSSR)(function(){return p&&KS({index:o,context:m,sheet:p,theme:_}),function(){p&&(IU({index:o,context:m,sheet:p,theme:_}),y&&RU(p,y))}},[p]);var E=b.useMemo(function(){return p&&y?$U(p,y):f},[p,y]);return b.useDebugValue(E),b.useDebugValue(_===qm?"No theme":_),b.useEffect(function(){g.current=!1}),E}},MU=NA;function LU(e){var t=MU(e),n=t%1;return t===t?n?t-n:t:0}var jU=LU;function VU(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var FU=VU,UU=Array.isArray,rp=UU,YS=Zh,zU=FU,BU=rp,WU=RA,HU=1/0,XS=YS?YS.prototype:void 0,JS=XS?XS.toString:void 0;function tP(e){if(typeof e=="string")return e;if(BU(e))return zU(e,tP)+"";if(WU(e))return JS?JS.call(e):"";var t=e+"";return t=="0"&&1/e==-HU?"-0":t}var qU=tP,GU=qU;function KU(e){return e==null?"":GU(e)}var QU=KU,YU=pr,XU=jU,JU=OA,ZS=QU,ZU=YU.isFinite,ez=Math.min;function tz(e){var t=Math[e];return function(n,r){if(n=JU(n),r=r==null?0:ez(XU(r),292),r&&ZU(n)){var i=(ZS(n)+"e").split("e"),o=t(i[0]+"e"+(+i[1]+r));return i=(ZS(o)+"e").split("e"),+(i[0]+"e"+(+i[1]-r))}return t(n)}}var nz=tz,rz=nz,iz=rz("round"),oz=iz;const Wa=Oo(oz);function sz(){this.__data__=[],this.size=0}var az=sz,lz=g1;function uz(e,t){for(var n=e.length;n--;)if(lz(e[n][0],t))return n;return-1}var ip=uz,cz=ip,fz=Array.prototype,dz=fz.splice;function hz(e){var t=this.__data__,n=cz(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():dz.call(t,n,1),--this.size,!0}var pz=hz,mz=ip;function gz(e){var t=this.__data__,n=mz(t,e);return n<0?void 0:t[n][1]}var vz=gz,yz=ip;function _z(e){return yz(this.__data__,e)>-1}var wz=_z,Ez=ip;function Sz(e,t){var n=this.__data__,r=Ez(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var bz=Sz,Tz=az,Iz=pz,Cz=vz,xz=wz,kz=bz;function ha(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ha.prototype.clear=Tz;ha.prototype.delete=Iz;ha.prototype.get=Cz;ha.prototype.has=xz;ha.prototype.set=kz;var op=ha,Az=op;function Pz(){this.__data__=new Az,this.size=0}var Rz=Pz;function Oz(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var Nz=Oz;function $z(e){return this.__data__.get(e)}var Dz=$z;function Mz(e){return this.__data__.has(e)}var Lz=Mz,jz=pr,Vz=jz["__core-js_shared__"],Fz=Vz,Gm=Fz,eb=function(){var e=/[^.]+$/.exec(Gm&&Gm.keys&&Gm.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Uz(e){return!!eb&&eb in e}var zz=Uz,Bz=Function.prototype,Wz=Bz.toString;function Hz(e){if(e!=null){try{return Wz.call(e)}catch{}try{return e+""}catch{}}return""}var nP=Hz,qz=xA,Gz=zz,Kz=ep,Qz=nP,Yz=/[\\^$.*+?()[\]{}|]/g,Xz=/^\[object .+?Constructor\]$/,Jz=Function.prototype,Zz=Object.prototype,e8=Jz.toString,t8=Zz.hasOwnProperty,n8=RegExp("^"+e8.call(t8).replace(Yz,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function r8(e){if(!Kz(e)||Gz(e))return!1;var t=qz(e)?n8:Xz;return t.test(Qz(e))}var i8=r8;function o8(e,t){return e==null?void 0:e[t]}var s8=o8,a8=i8,l8=s8;function u8(e,t){var n=l8(e,t);return a8(n)?n:void 0}var pa=u8,c8=pa,f8=pr,d8=c8(f8,"Map"),S1=d8,h8=pa,p8=h8(Object,"create"),sp=p8,tb=sp;function m8(){this.__data__=tb?tb(null):{},this.size=0}var g8=m8;function v8(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var y8=v8,_8=sp,w8="__lodash_hash_undefined__",E8=Object.prototype,S8=E8.hasOwnProperty;function b8(e){var t=this.__data__;if(_8){var n=t[e];return n===w8?void 0:n}return S8.call(t,e)?t[e]:void 0}var T8=b8,I8=sp,C8=Object.prototype,x8=C8.hasOwnProperty;function k8(e){var t=this.__data__;return I8?t[e]!==void 0:x8.call(t,e)}var A8=k8,P8=sp,R8="__lodash_hash_undefined__";function O8(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=P8&&t===void 0?R8:t,this}var N8=O8,$8=g8,D8=y8,M8=T8,L8=A8,j8=N8;function ma(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ma.prototype.clear=$8;ma.prototype.delete=D8;ma.prototype.get=M8;ma.prototype.has=L8;ma.prototype.set=j8;var V8=ma,nb=V8,F8=op,U8=S1;function z8(){this.size=0,this.__data__={hash:new nb,map:new(U8||F8),string:new nb}}var B8=z8;function W8(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var H8=W8,q8=H8;function G8(e,t){var n=e.__data__;return q8(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ap=G8,K8=ap;function Q8(e){var t=K8(this,e).delete(e);return this.size-=t?1:0,t}var Y8=Q8,X8=ap;function J8(e){return X8(this,e).get(e)}var Z8=J8,e7=ap;function t7(e){return e7(this,e).has(e)}var n7=t7,r7=ap;function i7(e,t){var n=r7(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var o7=i7,s7=B8,a7=Y8,l7=Z8,u7=n7,c7=o7;function ga(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ga.prototype.clear=s7;ga.prototype.delete=a7;ga.prototype.get=l7;ga.prototype.has=u7;ga.prototype.set=c7;var rP=ga,f7=op,d7=S1,h7=rP,p7=200;function m7(e,t){var n=this.__data__;if(n instanceof f7){var r=n.__data__;if(!d7||r.length<p7-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new h7(r)}return n.set(e,t),this.size=n.size,this}var g7=m7,v7=op,y7=Rz,_7=Nz,w7=Dz,E7=Lz,S7=g7;function va(e){var t=this.__data__=new v7(e);this.size=t.size}va.prototype.clear=y7;va.prototype.delete=_7;va.prototype.get=w7;va.prototype.has=E7;va.prototype.set=S7;var b7=va,T7="__lodash_hash_undefined__";function I7(e){return this.__data__.set(e,T7),this}var C7=I7;function x7(e){return this.__data__.has(e)}var k7=x7,A7=rP,P7=C7,R7=k7;function Ad(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new A7;++t<n;)this.add(e[t])}Ad.prototype.add=Ad.prototype.push=P7;Ad.prototype.has=R7;var O7=Ad;function N7(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var $7=N7;function D7(e,t){return e.has(t)}var M7=D7,L7=O7,j7=$7,V7=M7,F7=1,U7=2;function z7(e,t,n,r,i,o){var s=n&F7,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var u=o.get(e),c=o.get(t);if(u&&c)return u==t&&c==e;var f=-1,d=!0,h=n&U7?new L7:void 0;for(o.set(e,t),o.set(t,e);++f<a;){var g=e[f],m=t[f];if(r)var _=s?r(m,g,f,t,e,o):r(g,m,f,e,t,o);if(_!==void 0){if(_)continue;d=!1;break}if(h){if(!j7(t,function(v,p){if(!V7(h,p)&&(g===v||i(g,v,n,r,o)))return h.push(p)})){d=!1;break}}else if(!(g===m||i(g,m,n,r,o))){d=!1;break}}return o.delete(e),o.delete(t),d}var iP=z7,B7=pr,W7=B7.Uint8Array,H7=W7;function q7(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}var G7=q7;function K7(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Q7=K7,rb=Zh,ib=H7,Y7=g1,X7=iP,J7=G7,Z7=Q7,eB=1,tB=2,nB="[object Boolean]",rB="[object Date]",iB="[object Error]",oB="[object Map]",sB="[object Number]",aB="[object RegExp]",lB="[object Set]",uB="[object String]",cB="[object Symbol]",fB="[object ArrayBuffer]",dB="[object DataView]",ob=rb?rb.prototype:void 0,Km=ob?ob.valueOf:void 0;function hB(e,t,n,r,i,o,s){switch(n){case dB:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case fB:return!(e.byteLength!=t.byteLength||!o(new ib(e),new ib(t)));case nB:case rB:case sB:return Y7(+e,+t);case iB:return e.name==t.name&&e.message==t.message;case aB:case uB:return e==t+"";case oB:var a=J7;case lB:var l=r&eB;if(a||(a=Z7),e.size!=t.size&&!l)return!1;var u=s.get(e);if(u)return u==t;r|=tB,s.set(e,t);var c=X7(a(e),a(t),r,i,o,s);return s.delete(e),c;case cB:if(Km)return Km.call(e)==Km.call(t)}return!1}var pB=hB;function mB(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var gB=mB,vB=gB,yB=rp;function _B(e,t,n){var r=t(e);return yB(e)?r:vB(r,n(e))}var wB=_B;function EB(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}var SB=EB;function bB(){return[]}var TB=bB,IB=SB,CB=TB,xB=Object.prototype,kB=xB.propertyIsEnumerable,sb=Object.getOwnPropertySymbols,AB=sb?function(e){return e==null?[]:(e=Object(e),IB(sb(e),function(t){return kB.call(e,t)}))}:CB,PB=AB;function RB(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var OB=RB,NB=Bu,$B=Wu,DB="[object Arguments]";function MB(e){return $B(e)&&NB(e)==DB}var LB=MB,ab=LB,jB=Wu,oP=Object.prototype,VB=oP.hasOwnProperty,FB=oP.propertyIsEnumerable,UB=ab(function(){return arguments}())?ab:function(e){return jB(e)&&VB.call(e,"callee")&&!FB.call(e,"callee")},zB=UB,Pd={exports:{}};function BB(){return!1}var WB=BB;Pd.exports;(function(e,t){var n=pr,r=WB,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,s=o&&o.exports===i,a=s?n.Buffer:void 0,l=a?a.isBuffer:void 0,u=l||r;e.exports=u})(Pd,Pd.exports);var sP=Pd.exports,HB=Bu,qB=kA,GB=Wu,KB="[object Arguments]",QB="[object Array]",YB="[object Boolean]",XB="[object Date]",JB="[object Error]",ZB="[object Function]",eW="[object Map]",tW="[object Number]",nW="[object Object]",rW="[object RegExp]",iW="[object Set]",oW="[object String]",sW="[object WeakMap]",aW="[object ArrayBuffer]",lW="[object DataView]",uW="[object Float32Array]",cW="[object Float64Array]",fW="[object Int8Array]",dW="[object Int16Array]",hW="[object Int32Array]",pW="[object Uint8Array]",mW="[object Uint8ClampedArray]",gW="[object Uint16Array]",vW="[object Uint32Array]",Se={};Se[uW]=Se[cW]=Se[fW]=Se[dW]=Se[hW]=Se[pW]=Se[mW]=Se[gW]=Se[vW]=!0;Se[KB]=Se[QB]=Se[aW]=Se[YB]=Se[lW]=Se[XB]=Se[JB]=Se[ZB]=Se[eW]=Se[tW]=Se[nW]=Se[rW]=Se[iW]=Se[oW]=Se[sW]=!1;function yW(e){return GB(e)&&qB(e.length)&&!!Se[HB(e)]}var _W=yW;function wW(e){return function(t){return e(t)}}var EW=wW,Rd={exports:{}};Rd.exports;(function(e,t){var n=IA,r=t&&!t.nodeType&&t,i=r&&!0&&e&&!e.nodeType&&e,o=i&&i.exports===r,s=o&&n.process,a=function(){try{var l=i&&i.require&&i.require("util").types;return l||s&&s.binding&&s.binding("util")}catch{}}();e.exports=a})(Rd,Rd.exports);var SW=Rd.exports,bW=_W,TW=EW,lb=SW,ub=lb&&lb.isTypedArray,IW=ub?TW(ub):bW,aP=IW,CW=OB,xW=zB,kW=rp,AW=sP,PW=PA,RW=aP,OW=Object.prototype,NW=OW.hasOwnProperty;function $W(e,t){var n=kW(e),r=!n&&xW(e),i=!n&&!r&&AW(e),o=!n&&!r&&!i&&RW(e),s=n||r||i||o,a=s?CW(e.length,String):[],l=a.length;for(var u in e)(t||NW.call(e,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||PW(u,l)))&&a.push(u);return a}var DW=$W,MW=Object.prototype;function LW(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||MW;return e===n}var jW=LW;function VW(e,t){return function(n){return e(t(n))}}var FW=VW,UW=FW,zW=UW(Object.keys,Object),BW=zW,WW=jW,HW=BW,qW=Object.prototype,GW=qW.hasOwnProperty;function KW(e){if(!WW(e))return HW(e);var t=[];for(var n in Object(e))GW.call(e,n)&&n!="constructor"&&t.push(n);return t}var QW=KW,YW=DW,XW=QW,JW=AA;function ZW(e){return JW(e)?YW(e):XW(e)}var eH=ZW,tH=wB,nH=PB,rH=eH;function iH(e){return tH(e,rH,nH)}var oH=iH,cb=oH,sH=1,aH=Object.prototype,lH=aH.hasOwnProperty;function uH(e,t,n,r,i,o){var s=n&sH,a=cb(e),l=a.length,u=cb(t),c=u.length;if(l!=c&&!s)return!1;for(var f=l;f--;){var d=a[f];if(!(s?d in t:lH.call(t,d)))return!1}var h=o.get(e),g=o.get(t);if(h&&g)return h==t&&g==e;var m=!0;o.set(e,t),o.set(t,e);for(var _=s;++f<l;){d=a[f];var v=e[d],p=t[d];if(r)var y=s?r(p,v,d,t,e,o):r(v,p,d,e,t,o);if(!(y===void 0?v===p||i(v,p,n,r,o):y)){m=!1;break}_||(_=d=="constructor")}if(m&&!_){var E=e.constructor,S=t.constructor;E!=S&&"constructor"in e&&"constructor"in t&&!(typeof E=="function"&&E instanceof E&&typeof S=="function"&&S instanceof S)&&(m=!1)}return o.delete(e),o.delete(t),m}var cH=uH,fH=pa,dH=pr,hH=fH(dH,"DataView"),pH=hH,mH=pa,gH=pr,vH=mH(gH,"Promise"),yH=vH,_H=pa,wH=pr,EH=_H(wH,"Set"),SH=EH,bH=pa,TH=pr,IH=bH(TH,"WeakMap"),CH=IH,Hv=pH,qv=S1,Gv=yH,Kv=SH,Qv=CH,lP=Bu,ya=nP,fb="[object Map]",xH="[object Object]",db="[object Promise]",hb="[object Set]",pb="[object WeakMap]",mb="[object DataView]",kH=ya(Hv),AH=ya(qv),PH=ya(Gv),RH=ya(Kv),OH=ya(Qv),Gi=lP;(Hv&&Gi(new Hv(new ArrayBuffer(1)))!=mb||qv&&Gi(new qv)!=fb||Gv&&Gi(Gv.resolve())!=db||Kv&&Gi(new Kv)!=hb||Qv&&Gi(new Qv)!=pb)&&(Gi=function(e){var t=lP(e),n=t==xH?e.constructor:void 0,r=n?ya(n):"";if(r)switch(r){case kH:return mb;case AH:return fb;case PH:return db;case RH:return hb;case OH:return pb}return t});var NH=Gi,Qm=b7,$H=iP,DH=pB,MH=cH,gb=NH,vb=rp,yb=sP,LH=aP,jH=1,_b="[object Arguments]",wb="[object Array]",zc="[object Object]",VH=Object.prototype,Eb=VH.hasOwnProperty;function FH(e,t,n,r,i,o){var s=vb(e),a=vb(t),l=s?wb:gb(e),u=a?wb:gb(t);l=l==_b?zc:l,u=u==_b?zc:u;var c=l==zc,f=u==zc,d=l==u;if(d&&yb(e)){if(!yb(t))return!1;s=!0,c=!1}if(d&&!c)return o||(o=new Qm),s||LH(e)?$H(e,t,n,r,i,o):DH(e,t,l,n,r,i,o);if(!(n&jH)){var h=c&&Eb.call(e,"__wrapped__"),g=f&&Eb.call(t,"__wrapped__");if(h||g){var m=h?e.value():e,_=g?t.value():t;return o||(o=new Qm),i(m,_,n,r,o)}}return d?(o||(o=new Qm),MH(e,t,n,r,i,o)):!1}var UH=FH,zH=UH,Sb=Wu;function uP(e,t,n,r,i){return e===t?!0:e==null||t==null||!Sb(e)&&!Sb(t)?e!==e&&t!==t:zH(e,t,n,r,uP,i)}var BH=uP,WH=BH;function HH(e,t){return WH(e,t)}var qH=HH;const GH=Oo(qH);var et=function(){return et=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},et.apply(this,arguments)};function KH(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var Yv=function(e,t,n,r,i){return(e-t)*(i-r)/(n-t)+r},cP=function(e,t){var n=e+t;return n>360?n-360:n},fP=function(){return Math.random()>.5},dP=[0,0,1],b1=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],dP],QH=function(e){return!GH(b1[e],dP)&&fP()},bb=200,YH=800,XH=.1,JH=.25,Tb=.5,ZH=b1.reduce(function(e,t,n){var r;return et(et({},e),(r={},r["@keyframes rotation-".concat(n)]={"50%":{transform:"rotate3d(".concat(t.map(function(i){return i/2}).join(),", 180deg)")},"100%":{transform:"rotate3d(".concat(t.join(),", 360deg)")}},r))},{}),eq=function(e,t,n){var r=typeof t=="string"?t:"".concat(t,"px"),i=e.reduce(function(o,s,a){var l,u=Yv(Math.abs(cP(s,90)-180),0,180,-n/2,n/2);return et(et({},o),(l={},l["@keyframes x-axis-".concat(a)]={to:{transform:"translateX(".concat(u,"px)")}},l))},{});return et({"@keyframes y-axis":{to:{transform:"translateY(".concat(r,")")}}},i)},tq=function(e,t,n,r,i){var o,s=Math.round(Math.random()*(YH-bb)+bb),a=Math.round(Math.random()*(b1.length-1)),l=t-Math.round(Math.random()*1e3),u=Math.random()<XH,c=QH(a),f=u?Wa(Math.random()*JH,2):0,d=f*-1,h=f,g=Wa(Math.abs(Yv(Math.abs(cP(e.degree,90)-180),0,180,-1,1)),4),m=Wa(Math.random()*Tb,4),_=Wa(Math.random()*n*(fP()?1:-1),4),v=Tb,p=Wa(Math.max(Yv(Math.abs(e.degree-180),0,180,n,-n),0),4);return o={},o["&#confetti-particle-".concat(i)]={animation:"$x-axis-".concat(i," ").concat(l,"ms forwards cubic-bezier(").concat(f,", ").concat(d,", ").concat(h,", ").concat(g,")"),"& > div":{width:c?r:Math.round(Math.random()*4)+r/2,height:c?r:Math.round(Math.random()*2)+r,animation:"$y-axis ".concat(l,"ms forwards cubic-bezier(").concat(m,", ").concat(_,", ").concat(v,", ").concat(p,")"),"&:after":et({backgroundColor:e.color,animation:"$rotation-".concat(a," ").concat(s,"ms infinite linear")},c?{borderRadius:"50%"}:{})}},o},nq=function(e){var t=e.particles,n=e.duration,r=e.height,i=e.width,o=e.force,s=e.particleSize,a=t.reduce(function(l,u,c){return et(et({},l),tq(u,n,o,s,c))},{});return DU(et(et(et({},ZH),eq(t.map(function(l){return l.degree}),r,i)),{container:{width:0,height:0,position:"relative"},screen:{position:"fixed",top:0,left:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none"},particle:et(et({},a),{"& > div":{position:"absolute",left:0,top:0,"&:after":{content:"''",display:"block",width:"100%",height:"100%"}}})}),{name:"confetti-explosion"})},rq=.5,iq=12,oq="120vh",sq=1e3,aq=100,lq=2200,uq=["#FFC700","#FF0000","#2E3191","#41BBC7"],cq=function(e,t){var n=360/e;return h6(e).map(function(r){return{color:t[r%t.length],degree:n*r}})};function fq(e){var t=e.particleCount,n=t===void 0?aq:t,r=e.duration,i=r===void 0?lq:r,o=e.colors,s=o===void 0?uq:o,a=e.particleSize,l=a===void 0?iq:a,u=e.force,c=u===void 0?rq:u,f=e.height,d=f===void 0?oq:f,h=e.width,g=h===void 0?sq:h,m=e.zIndex,_=e.onComplete,v=KH(e,["particleCount","duration","colors","particleSize","force","height","width","zIndex","onComplete"]),p=b.useState(),y=p[0],E=p[1],S=cq(n,s),I=nq({particles:S,duration:i,particleSize:l,force:c,width:g,height:d})(),T=b.useCallback(function(O){if(O){var $=O.getBoundingClientRect(),R=$.top,te=$.left;E({top:R,left:te})}},[]);return b.useEffect(function(){if(typeof _=="function"){var O=setTimeout(_,i);return function(){return clearTimeout(O)}}},[i,_]),w.jsx("div",et({ref:T,className:I.container},v,{children:y&&Jx.createPortal(w.jsx("div",et({className:I.screen},m?{style:{zIndex:m}}:null,{children:w.jsx("div",et({style:{position:"absolute",top:y.top,left:y.left}},{children:S.map(function(O,$){return w.jsx("div",et({id:"confetti-particle-".concat($),className:I.particle},{children:w.jsx("div",{})}),O.degree)})}))})),document.body)}))}const hP="rgb(255, 51, 119)",dq=Ah`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,hq=Ah`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`,pq=Ah`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
`,mq=k(W0)`
    display: flex;
`,gq=k.img`
    height: 100px;
    width: 100px;
    margin: 10px 20px;
    cursor: pointer;
    color: pink;
`,vq=k.div`
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
`,yq=k.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`,Ha=k.button`
    font-size: 20px;
    border: none;
    background-color: #fff;
    cursor: pointer;
    margin: 0 20px;
    height: 30px;
    transition: 0.5s ease-out;

    &:hover {
        color: ${hP};
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
`,qa=k(W0)`
  color: black;
  cursor: pointer;
  padding: 12px 20px;
  display: block;
  text-decoration: none;

  &:hover {
    color: ${hP};
    background-color: #ddd;
  }
`,_q=k.div`
    position: relative;
    top: 7px;
    display: flex;
    align-items: center;
    margin: 0px 40px 15px; 0;
    cursor: pointer;
    animation: ${({$bounce:e})=>e?Eo`animation: ${pq} 1s ease-in-out`:"none"}
`,wq=k(TA)`
    // margin-right: 20px;
`,Eq=k.span`
    position: absolute; // removed from normal doc flow, position relative to nearest ancestor, which is the ShoppingCartContainer
    top: 13px;
    right: 11px;
    color: rgb(255, 26, 198);
    padding: 0 3px;
    border-radius: 40%;
    font-size: 14px;
    font-weight: bold;
`,Sq=k.div`
    position: absolute;
    top: 120px;
    width: 100%;
    height: 30px;
    background: rgb(0,0,0);
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: ${({$show:e})=>e?1:0};
    ${({$show:e})=>e?Eo`animation: ${dq} 0.6s ease-in-out;`:Eo`animation: ${hq} 0.6s ease-in-out; display: none;`}


    h4 {
        color: #fff;
    };

`,bq=k(fq)`
    position: absolute;
    width: 100;
`,Tq="/assets/hearts-Ik6zbrID.jpg";var xb={};/**
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
 */const pP=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Iq=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},mP={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,h=u&63;l||(h=64,s||(d=64)),r.push(n[c],n[f],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(pP(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Iq(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new Cq;const d=o<<2|a>>4;if(r.push(d),u!==64){const h=a<<4&240|u>>2;if(r.push(h),f!==64){const g=u<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Cq extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xq=function(e){const t=pP(e);return mP.encodeByteArray(t,!0)},Od=function(e){return xq(e).replace(/\./g,"")},gP=function(e){try{return mP.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function kq(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Aq=()=>kq().__FIREBASE_DEFAULTS__,Pq=()=>{if(typeof process>"u"||typeof xb>"u")return;const e=xb.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Rq=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gP(e[1]);return t&&JSON.parse(t)},T1=()=>{try{return Aq()||Pq()||Rq()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},vP=e=>{var t,n;return(n=(t=T1())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Oq=e=>{const t=vP(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},yP=()=>{var e;return(e=T1())===null||e===void 0?void 0:e.config},_P=e=>{var t;return(t=T1())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Nq{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function $q(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Od(JSON.stringify(n)),Od(JSON.stringify(s)),""].join(".")}/**
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
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dq(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function Mq(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Lq(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jq(){const e=Dt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Vq(){try{return typeof indexedDB=="object"}catch{return!1}}function Fq(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const Uq="FirebaseError";class zr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Uq,Object.setPrototypeOf(this,zr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hu.prototype.create)}}class Hu{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?zq(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new zr(i,a,r)}}function zq(e,t){return e.replace(Bq,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Bq=/\{\$([^}]+)}/g;function Wq(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Nd(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(kb(o)&&kb(s)){if(!Nd(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kb(e){return e!==null&&typeof e=="object"}/**
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
 */function qu(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function rl(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function il(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Hq(e,t){const n=new qq(e,t);return n.subscribe.bind(n)}class qq{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gq(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ym),i.error===void 0&&(i.error=Ym),i.complete===void 0&&(i.complete=Ym);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gq(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ym(){}/**
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
 */function zt(e){return e&&e._delegate?e._delegate:e}class So{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Kq{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Nq;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yq(t))try{this.getOrInitializeService({instanceIdentifier:Ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Ki){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ki){return this.instances.has(t)}getOptions(t=Ki){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qq(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ki){return this.component?this.component.multipleInstances?t:Ki:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qq(e){return e===Ki?void 0:e}function Yq(e){return e.instantiationMode==="EAGER"}/**
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
 */class Xq{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Kq(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ie||(ie={}));const Jq={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Zq=ie.INFO,eG={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},tG=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=eG[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class I1{constructor(t){this.name=t,this._logLevel=Zq,this._logHandler=tG,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Jq[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...t),this._logHandler(this,ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...t),this._logHandler(this,ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...t),this._logHandler(this,ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...t),this._logHandler(this,ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...t),this._logHandler(this,ie.ERROR,...t)}}const nG=(e,t)=>t.some(n=>e instanceof n);let Ab,Pb;function rG(){return Ab||(Ab=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iG(){return Pb||(Pb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wP=new WeakMap,Xv=new WeakMap,EP=new WeakMap,Xm=new WeakMap,C1=new WeakMap;function oG(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Si(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&wP.set(n,e)}).catch(()=>{}),C1.set(t,e),t}function sG(e){if(Xv.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Xv.set(e,t)}let Jv={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xv.get(e);if(t==="objectStoreNames")return e.objectStoreNames||EP.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Si(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function aG(e){Jv=e(Jv)}function lG(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Jm(this),t,...n);return EP.set(r,t.sort?t.sort():[t]),Si(r)}:iG().includes(e)?function(...t){return e.apply(Jm(this),t),Si(wP.get(this))}:function(...t){return Si(e.apply(Jm(this),t))}}function uG(e){return typeof e=="function"?lG(e):(e instanceof IDBTransaction&&sG(e),nG(e,rG())?new Proxy(e,Jv):e)}function Si(e){if(e instanceof IDBRequest)return oG(e);if(Xm.has(e))return Xm.get(e);const t=uG(e);return t!==e&&(Xm.set(e,t),C1.set(t,e)),t}const Jm=e=>C1.get(e);function cG(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Si(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Si(s.result),l.oldVersion,l.newVersion,Si(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const fG=["get","getKey","getAll","getAllKeys","count"],dG=["put","add","delete","clear"],Zm=new Map;function Rb(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Zm.get(t))return Zm.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=dG.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fG.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zm.set(t,o),o}aG(e=>({...e,get:(t,n,r)=>Rb(t,n)||e.get(t,n,r),has:(t,n)=>!!Rb(t,n)||e.has(t,n)}));/**
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
 */class hG{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pG(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pG(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zv="@firebase/app",Ob="0.9.25";/**
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
 */const bo=new I1("@firebase/app"),mG="@firebase/app-compat",gG="@firebase/analytics-compat",vG="@firebase/analytics",yG="@firebase/app-check-compat",_G="@firebase/app-check",wG="@firebase/auth",EG="@firebase/auth-compat",SG="@firebase/database",bG="@firebase/database-compat",TG="@firebase/functions",IG="@firebase/functions-compat",CG="@firebase/installations",xG="@firebase/installations-compat",kG="@firebase/messaging",AG="@firebase/messaging-compat",PG="@firebase/performance",RG="@firebase/performance-compat",OG="@firebase/remote-config",NG="@firebase/remote-config-compat",$G="@firebase/storage",DG="@firebase/storage-compat",MG="@firebase/firestore",LG="@firebase/firestore-compat",jG="firebase",VG="10.7.1";/**
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
 */const ey="[DEFAULT]",FG={[Zv]:"fire-core",[mG]:"fire-core-compat",[vG]:"fire-analytics",[gG]:"fire-analytics-compat",[_G]:"fire-app-check",[yG]:"fire-app-check-compat",[wG]:"fire-auth",[EG]:"fire-auth-compat",[SG]:"fire-rtdb",[bG]:"fire-rtdb-compat",[TG]:"fire-fn",[IG]:"fire-fn-compat",[CG]:"fire-iid",[xG]:"fire-iid-compat",[kG]:"fire-fcm",[AG]:"fire-fcm-compat",[PG]:"fire-perf",[RG]:"fire-perf-compat",[OG]:"fire-rc",[NG]:"fire-rc-compat",[$G]:"fire-gcs",[DG]:"fire-gcs-compat",[MG]:"fire-fst",[LG]:"fire-fst-compat","fire-js":"fire-js",[jG]:"fire-js-all"};/**
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
 */const $d=new Map,ty=new Map;function UG(e,t){try{e.container.addComponent(t)}catch(n){bo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Gs(e){const t=e.name;if(ty.has(t))return bo.debug(`There were multiple attempts to register component ${t}.`),!1;ty.set(t,e);for(const n of $d.values())UG(n,e);return!0}function x1(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const zG={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bi=new Hu("app","Firebase",zG);/**
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
 */class BG{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new So("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
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
 */const _a=VG;function SP(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ey,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw bi.create("bad-app-name",{appName:String(i)});if(n||(n=yP()),!n)throw bi.create("no-options");const o=$d.get(i);if(o){if(Nd(n,o.options)&&Nd(r,o.config))return o;throw bi.create("duplicate-app",{appName:i})}const s=new Xq(i);for(const l of ty.values())s.addComponent(l);const a=new BG(n,r,s);return $d.set(i,a),a}function bP(e=ey){const t=$d.get(e);if(!t&&e===ey&&yP())return SP();if(!t)throw bi.create("no-app",{appName:e});return t}function Ti(e,t,n){var r;let i=(r=FG[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bo.warn(a.join(" "));return}Gs(new So(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const WG="firebase-heartbeat-database",HG=1,uu="firebase-heartbeat-store";let eg=null;function TP(){return eg||(eg=cG(WG,HG,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(uu)}}}).catch(e=>{throw bi.create("idb-open",{originalErrorMessage:e.message})})),eg}async function qG(e){try{return await(await TP()).transaction(uu).objectStore(uu).get(IP(e))}catch(t){if(t instanceof zr)bo.warn(t.message);else{const n=bi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});bo.warn(n.message)}}}async function Nb(e,t){try{const r=(await TP()).transaction(uu,"readwrite");await r.objectStore(uu).put(t,IP(e)),await r.done}catch(n){if(n instanceof zr)bo.warn(n.message);else{const r=bi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bo.warn(r.message)}}}function IP(e){return`${e.name}!${e.options.appId}`}/**
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
 */const GG=1024,KG=30*24*60*60*1e3;class QG{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XG(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$b();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=KG}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$b(),{heartbeatsToSend:r,unsentEntries:i}=YG(this._heartbeatsCache.heartbeats),o=Od(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function $b(){return new Date().toISOString().substring(0,10)}function YG(e,t=GG){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Db(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Db(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XG{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vq()?Fq().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qG(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nb(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nb(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Db(e){return Od(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function JG(e){Gs(new So("platform-logger",t=>new hG(t),"PRIVATE")),Gs(new So("heartbeat",t=>new QG(t),"PRIVATE")),Ti(Zv,Ob,e),Ti(Zv,Ob,"esm2017"),Ti("fire-js","")}JG("");var ZG="firebase",eK="10.7.1";/**
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
 */Ti(ZG,eK,"app");function CP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tK=CP,xP=new Hu("auth","Firebase",CP());/**
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
 */const Dd=new I1("@firebase/auth");function nK(e,...t){Dd.logLevel<=ie.WARN&&Dd.warn(`Auth (${_a}): ${e}`,...t)}function jf(e,...t){Dd.logLevel<=ie.ERROR&&Dd.error(`Auth (${_a}): ${e}`,...t)}/**
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
 */function In(e,...t){throw k1(e,...t)}function ur(e,...t){return k1(e,...t)}function kP(e,t,n){const r=Object.assign(Object.assign({},tK()),{[t]:n});return new Hu("auth","Firebase",r).create(t,{appName:e.name})}function rK(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&In(e,"argument-error"),kP(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function k1(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return xP.create(e,...t)}function G(e,t,...n){if(!e)throw k1(t,...n)}function Er(e){const t="INTERNAL ASSERTION FAILED: "+e;throw jf(t),new Error(t)}function Or(e,t){e||Er(t)}/**
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
 */function ny(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function iK(){return Mb()==="http:"||Mb()==="https:"}function Mb(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function oK(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iK()||Mq()||"connection"in navigator)?navigator.onLine:!0}function sK(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Gu{constructor(t,n){this.shortDelay=t,this.longDelay=n,Or(n>t,"Short delay should be less than long delay!"),this.isMobile=Dq()||Lq()}get(){return oK()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function A1(e,t){Or(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class AP{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aK={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lK=new Gu(3e4,6e4);function ji(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Vi(e,t,n,r,i={}){return PP(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=qu(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),AP.fetch()(RP(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function PP(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},aK),t);try{const i=new cK(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Bc(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bc(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Bc(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Bc(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kP(e,c,u);In(e,c)}}catch(i){if(i instanceof zr)throw i;In(e,"network-request-failed",{message:String(i)})}}async function Ku(e,t,n,r,i={}){const o=await Vi(e,t,n,r,i);return"mfaPendingCredential"in o&&In(e,"multi-factor-auth-required",{_serverResponse:o}),o}function RP(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?A1(e.config,i):`${e.config.apiScheme}://${i}`}function uK(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cK{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ur(this.auth,"network-request-failed")),lK.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bc(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ur(e,t,r);return i.customData._tokenResponse=n,i}function Lb(e){return e!==void 0&&e.enterprise!==void 0}class fK{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return uK(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function dK(e,t){return Vi(e,"GET","/v2/recaptchaConfig",ji(e,t))}/**
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
 */async function hK(e,t){return Vi(e,"POST","/v1/accounts:delete",t)}async function pK(e,t){return Vi(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Il(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function mK(e,t=!1){const n=zt(e),r=await n.getIdToken(t),i=P1(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Il(tg(i.auth_time)),issuedAtTime:Il(tg(i.iat)),expirationTime:Il(tg(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function tg(e){return Number(e)*1e3}function P1(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return jf("JWT malformed, contained fewer than 3 sections"),null;try{const i=gP(n);return i?JSON.parse(i):(jf("Failed to decode base64 JWT payload"),null)}catch(i){return jf("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gK(e){const t=P1(e);return G(t,"internal-error"),G(typeof t.exp<"u","internal-error"),G(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function cu(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof zr&&vK(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function vK({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class yK{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class OP{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Il(this.lastLoginAt),this.creationTime=Il(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Md(e){var t;const n=e.auth,r=await e.getIdToken(),i=await cu(e,pK(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?EK(o.providerUserInfo):[],a=wK(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new OP(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function _K(e){const t=zt(e);await Md(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function wK(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function EK(e){return e.map(t=>{var{providerId:n}=t,r=G0(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function SK(e,t){const n=await PP(e,{},async()=>{const r=qu({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=RP(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",AP.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bK(e,t){return Vi(e,"POST","/v2/accounts:revokeToken",ji(e,t))}/**
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
 */class fu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){G(t.idToken,"internal-error"),G(typeof t.idToken<"u","internal-error"),G(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):gK(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return G(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await SK(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new fu;return r&&(G(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(G(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new fu,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
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
 */function Kr(e,t){G(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class po{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=G0(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yK(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new OP(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await cu(this,this.stsTokenManager.getToken(this.auth,t));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return mK(this,t)}reload(){return _K(this)}_assign(t){this!==t&&(G(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new po(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Md(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await cu(this,hK(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,h=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:S,providerData:I,stsTokenManager:T}=n;G(y&&T,t,"internal-error");const O=fu.fromJSON(this.name,T);G(typeof y=="string",t,"internal-error"),Kr(f,t.name),Kr(d,t.name),G(typeof E=="boolean",t,"internal-error"),G(typeof S=="boolean",t,"internal-error"),Kr(h,t.name),Kr(g,t.name),Kr(m,t.name),Kr(_,t.name),Kr(v,t.name),Kr(p,t.name);const $=new po({uid:y,auth:t,email:d,emailVerified:E,displayName:f,isAnonymous:S,photoURL:g,phoneNumber:h,tenantId:m,stsTokenManager:O,createdAt:v,lastLoginAt:p});return I&&Array.isArray(I)&&($.providerData=I.map(R=>Object.assign({},R))),_&&($._redirectEventId=_),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new fu;i.updateFromServerResponse(n);const o=new po({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Md(o),o}}/**
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
 */const jb=new Map;function Sr(e){Or(e instanceof Function,"Expected a class definition");let t=jb.get(e);return t?(Or(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,jb.set(e,t),t)}/**
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
 */class NP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}NP.type="NONE";const Vb=NP;/**
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
 */function Vf(e,t,n){return`firebase:${e}:${t}:${n}`}class Is{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Vf(this.userKey,i.apiKey,o),this.fullPersistenceKey=Vf("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?po._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Is(Sr(Vb),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Sr(Vb);const s=Vf(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=po._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Is(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Is(o,t,r))}}/**
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
 */function Fb(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(MP(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($P(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(jP(t))return"Blackberry";if(VP(t))return"Webos";if(R1(t))return"Safari";if((t.includes("chrome/")||DP(t))&&!t.includes("edge/"))return"Chrome";if(LP(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $P(e=Dt()){return/firefox\//i.test(e)}function R1(e=Dt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function DP(e=Dt()){return/crios\//i.test(e)}function MP(e=Dt()){return/iemobile/i.test(e)}function LP(e=Dt()){return/android/i.test(e)}function jP(e=Dt()){return/blackberry/i.test(e)}function VP(e=Dt()){return/webos/i.test(e)}function lp(e=Dt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function TK(e=Dt()){var t;return lp(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function IK(){return jq()&&document.documentMode===10}function FP(e=Dt()){return lp(e)||LP(e)||VP(e)||jP(e)||/windows phone/i.test(e)||MP(e)}function CK(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function UP(e,t=[]){let n;switch(e){case"Browser":n=Fb(Dt());break;case"Worker":n=`${Fb(Dt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${_a}/${r}`}/**
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
 */class xK{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kK(e,t={}){return Vi(e,"GET","/v2/passwordPolicy",ji(e,t))}/**
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
 */const AK=6;class PK{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:AK,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class RK{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ub(this),this.idTokenSubscription=new Ub(this),this.beforeStateQueue=new xK(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Sr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Is.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Md(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sK()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?zt(t):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&G(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await kK(this),n=new PK(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Hu("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bK(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Sr(t)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[Sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=UP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&nK(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fi(e){return zt(e)}class Ub{constructor(t){this.auth=t,this.observer=null,this.addObserver=Hq(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function OK(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function zP(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=ur("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",OK().appendChild(r)})}function NK(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const $K="https://www.google.com/recaptcha/enterprise.js?render=",DK="recaptcha-enterprise",MK="NO_RECAPTCHA";class LK{constructor(t){this.type=DK,this.auth=Fi(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{dK(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new fK(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Lb(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(MK)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Lb(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}zP($K+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function zb(e,t,n,r=!1){const i=new LK(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function ry(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await zb(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await zb(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
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
 */function jK(e,t){const n=x1(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Nd(o,t??{}))return i;In(i,"already-initialized")}return n.initialize({options:t})}function VK(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sr);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function FK(e,t,n){const r=Fi(e);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=BP(t),{host:s,port:a}=UK(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zK()}function BP(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function UK(e){const t=BP(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Bb(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Bb(s)}}}function Bb(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function zK(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class O1{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Er("not implemented")}_getIdTokenResponse(t){return Er("not implemented")}_linkToIdToken(t,n){return Er("not implemented")}_getReauthenticationResolver(t){return Er("not implemented")}}async function BK(e,t){return Vi(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function WK(e,t){return Ku(e,"POST","/v1/accounts:signInWithPassword",ji(e,t))}/**
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
 */async function HK(e,t){return Ku(e,"POST","/v1/accounts:signInWithEmailLink",ji(e,t))}async function qK(e,t){return Ku(e,"POST","/v1/accounts:signInWithEmailLink",ji(e,t))}/**
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
 */class du extends O1{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new du(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new du(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ry(t,n,"signInWithPassword",WK);case"emailLink":return HK(t,{email:this._email,oobCode:this._password});default:In(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ry(t,r,"signUpPassword",BK);case"emailLink":return qK(t,{idToken:n,email:this._email,oobCode:this._password});default:In(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Cs(e,t){return Ku(e,"POST","/v1/accounts:signInWithIdp",ji(e,t))}/**
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
 */const GK="http://localhost";class To extends O1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new To(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=G0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new To(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Cs(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Cs(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Cs(t,n)}buildRequest(){const t={requestUri:GK,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=qu(n)}return t}}/**
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
 */function KK(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QK(e){const t=rl(il(e)).link,n=t?rl(il(t)).deep_link_id:null,r=rl(il(e)).deep_link_id;return(r?rl(il(r)).link:null)||r||n||t||e}class N1{constructor(t){var n,r,i,o,s,a;const l=rl(il(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=KK((i=l.mode)!==null&&i!==void 0?i:null);G(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=QK(t);try{return new N1(n)}catch{return null}}}/**
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
 */class wa{constructor(){this.providerId=wa.PROVIDER_ID}static credential(t,n){return du._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=N1.parseLink(n);return G(r,"argument-error"),du._fromEmailAndCode(t,r.code,r.tenantId)}}wa.PROVIDER_ID="password";wa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $1{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qu extends $1{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ii extends Qu{constructor(){super("facebook.com")}static credential(t){return To._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ii.credentialFromTaggedObject(t)}static credentialFromError(t){return ii.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ii.credential(t.oauthAccessToken)}catch{return null}}}ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";ii.PROVIDER_ID="facebook.com";/**
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
 */class yr extends Qu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return To._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return yr.credentialFromTaggedObject(t)}static credentialFromError(t){return yr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
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
 */class oi extends Qu{constructor(){super("github.com")}static credential(t){return To._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return oi.credentialFromTaggedObject(t)}static credentialFromError(t){return oi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return oi.credential(t.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
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
 */class si extends Qu{constructor(){super("twitter.com")}static credential(t,n){return To._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return si.credentialFromTaggedObject(t)}static credentialFromError(t){return si.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return si.credential(n,r)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";/**
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
 */async function YK(e,t){return Ku(e,"POST","/v1/accounts:signUp",ji(e,t))}/**
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
 */class Io{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await po._fromIdTokenResponse(t,r,i),s=Wb(r);return new Io({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Wb(r);return new Io({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Wb(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Ld extends zr{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ld.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ld(t,n,r,i)}}function WP(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ld._fromErrorAndOperation(e,o,t,r):o})}async function XK(e,t,n=!1){const r=await cu(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Io._forOperation(e,"link",r)}/**
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
 */async function JK(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await cu(e,WP(r,i,t,e),n);G(o.idToken,r,"internal-error");const s=P1(o.idToken);G(s,r,"internal-error");const{sub:a}=s;return G(e.uid===a,r,"user-mismatch"),Io._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&In(r,"user-mismatch"),o}}/**
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
 */async function HP(e,t,n=!1){const r="signIn",i=await WP(e,r,t),o=await Io._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function ZK(e,t){return HP(Fi(e),t)}/**
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
 */async function qP(e){const t=Fi(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function eQ(e,t,n){const r=Fi(e),s=await ry(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YK).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&qP(e),l}),a=await Io._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function tQ(e,t,n){return ZK(zt(e),wa.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qP(e),r})}function nQ(e,t,n,r){return zt(e).onIdTokenChanged(t,n,r)}function rQ(e,t,n){return zt(e).beforeAuthStateChanged(t,n)}function iQ(e,t,n,r){return zt(e).onAuthStateChanged(t,n,r)}function oQ(e){return zt(e).signOut()}const jd="__sak";/**
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
 */class GP{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jd,"1"),this.storage.removeItem(jd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sQ(){const e=Dt();return R1(e)||lp(e)}const aQ=1e3,lQ=10;class KP extends GP{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sQ()&&CK(),this.fallbackToPolling=FP(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);IK()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,lQ):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},aQ)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}KP.type="LOCAL";const uQ=KP;/**
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
 */class QP extends GP{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}QP.type="SESSION";const YP=QP;/**
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
 */function cQ(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class up{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new up(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await cQ(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}up.receivers=[];/**
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
 */function D1(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class fQ{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=D1("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(d.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function cr(){return window}function dQ(e){cr().location.href=e}/**
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
 */function XP(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function hQ(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pQ(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function mQ(){return XP()?self:null}/**
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
 */const JP="firebaseLocalStorageDb",gQ=1,Vd="firebaseLocalStorage",ZP="fbase_key";class Yu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cp(e,t){return e.transaction([Vd],t?"readwrite":"readonly").objectStore(Vd)}function vQ(){const e=indexedDB.deleteDatabase(JP);return new Yu(e).toPromise()}function iy(){const e=indexedDB.open(JP,gQ);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Vd,{keyPath:ZP})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Vd)?t(r):(r.close(),await vQ(),t(await iy()))})})}async function Hb(e,t,n){const r=cp(e,!0).put({[ZP]:t,value:n});return new Yu(r).toPromise()}async function yQ(e,t){const n=cp(e,!1).get(t),r=await new Yu(n).toPromise();return r===void 0?null:r.value}function qb(e,t){const n=cp(e,!0).delete(t);return new Yu(n).toPromise()}const _Q=800,wQ=3;class eR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await iy(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>wQ)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XP()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=up._getInstance(mQ()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await hQ(),!this.activeServiceWorker)return;this.sender=new fQ(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||pQ()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await iy();return await Hb(t,jd,"1"),await qb(t,jd),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hb(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>yQ(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qb(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=cp(i,!1).getAll();return new Yu(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_Q)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eR.type="LOCAL";const EQ=eR;new Gu(3e4,6e4);/**
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
 */function tR(e,t){return t?Sr(t):(G(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class M1 extends O1{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Cs(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Cs(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Cs(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function SQ(e){return HP(e.auth,new M1(e),e.bypassAuthState)}function bQ(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),JK(n,new M1(e),e.bypassAuthState)}async function TQ(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),XK(n,new M1(e),e.bypassAuthState)}/**
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
 */class nR{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return SQ;case"linkViaPopup":case"linkViaRedirect":return TQ;case"reauthViaPopup":case"reauthViaRedirect":return bQ;default:In(this.auth,"internal-error")}}resolve(t){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IQ=new Gu(2e3,1e4);async function CQ(e,t,n){const r=Fi(e);rK(e,t,$1);const i=tR(r,n);return new no(r,"signInViaPopup",t,i).executeNotNull()}class no extends nR{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,no.currentPopupAction&&no.currentPopupAction.cancel(),no.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return G(t,this.auth,"internal-error"),t}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const t=D1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,no.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,IQ.get())};t()}}no.currentPopupAction=null;/**
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
 */const xQ="pendingRedirect",Ff=new Map;class kQ extends nR{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ff.get(this.auth._key());if(!t){try{const r=await AQ(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ff.set(this.auth._key(),t)}return this.bypassAuthState||Ff.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AQ(e,t){const n=OQ(t),r=RQ(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function PQ(e,t){Ff.set(e._key(),t)}function RQ(e){return Sr(e._redirectPersistence)}function OQ(e){return Vf(xQ,e.config.apiKey,e.name)}async function NQ(e,t,n=!1){const r=Fi(e),i=tR(r,t),s=await new kQ(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const $Q=10*60*1e3;class DQ{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!MQ(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!rR(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ur(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$Q&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gb(t))}saveEventToCache(t){this.cachedEventUids.add(Gb(t)),this.lastProcessedEventTime=Date.now()}}function Gb(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function rR({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function MQ(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rR(e);default:return!1}}/**
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
 */async function LQ(e,t={}){return Vi(e,"GET","/v1/projects",t)}/**
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
 */const jQ=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VQ=/^https?/;async function FQ(e){if(e.config.emulator)return;const{authorizedDomains:t}=await LQ(e);for(const n of t)try{if(UQ(n))return}catch{}In(e,"unauthorized-domain")}function UQ(e){const t=ny(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!VQ.test(n))return!1;if(jQ.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const zQ=new Gu(3e4,6e4);function Kb(){const e=cr().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function BQ(e){return new Promise((t,n)=>{var r,i,o;function s(){Kb(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Kb(),n(ur(e,"network-request-failed"))},timeout:zQ.get()})}if(!((i=(r=cr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=cr().gapi)===null||o===void 0)&&o.load)s();else{const a=NK("iframefcb");return cr()[a]=()=>{gapi.load?s():n(ur(e,"network-request-failed"))},zP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Uf=null,t})}let Uf=null;function WQ(e){return Uf=Uf||BQ(e),Uf}/**
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
 */const HQ=new Gu(5e3,15e3),qQ="__/auth/iframe",GQ="emulator/auth/iframe",KQ={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QQ=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YQ(e){const t=e.config;G(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A1(t,GQ):`https://${e.config.authDomain}/${qQ}`,r={apiKey:t.apiKey,appName:e.name,v:_a},i=QQ.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${qu(r).slice(1)}`}async function XQ(e){const t=await WQ(e),n=cr().gapi;return G(n,e,"internal-error"),t.open({where:document.body,url:YQ(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KQ,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ur(e,"network-request-failed"),a=cr().setTimeout(()=>{o(s)},HQ.get());function l(){cr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const JQ={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZQ=500,eY=600,tY="_blank",nY="http://localhost";class Qb{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rY(e,t,n,r=ZQ,i=eY){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},JQ),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Dt().toLowerCase();n&&(a=DP(u)?tY:n),$P(u)&&(t=t||nY,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[h,g])=>`${d}${h}=${g},`,"");if(TK(u)&&a!=="_self")return iY(t||"",a),new Qb(null);const f=window.open(t||"",a,c);G(f,e,"popup-blocked");try{f.focus()}catch{}return new Qb(f)}function iY(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oY="__/auth/handler",sY="emulator/auth/handler",aY=encodeURIComponent("fac");async function Yb(e,t,n,r,i,o){G(e.config.authDomain,e,"auth-domain-config-required"),G(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:_a,eventId:i};if(t instanceof $1){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Wq(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(t instanceof Qu){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${aY}=${encodeURIComponent(l)}`:"";return`${lY(e)}?${qu(a).slice(1)}${u}`}function lY({config:e}){return e.emulator?A1(e,sY):`https://${e.authDomain}/${oY}`}/**
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
 */const ng="webStorageSupport";class uY{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=YP,this._completeRedirectFn=NQ,this._overrideRedirectResult=PQ}async _openPopup(t,n,r,i){var o;Or((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Yb(t,n,r,ny(),i);return rY(t,s,D1())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Yb(t,n,r,ny(),i);return dQ(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Or(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await XQ(t),r=new DQ(t);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ng,{type:ng},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ng];s!==void 0&&n(!!s),In(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FQ(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return FP()||R1()||lp()}}const cY=uY;var Xb="@firebase/auth",Jb="1.5.1";/**
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
 */class fY{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dY(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hY(e){Gs(new So("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;G(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UP(e)},u=new RK(r,i,o,l);return VK(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Gs(new So("auth-internal",t=>{const n=Fi(t.getProvider("auth").getImmediate());return(r=>new fY(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ti(Xb,Jb,dY(e)),Ti(Xb,Jb,"esm2017")}/**
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
 */const pY=5*60,mY=_P("authIdTokenMaxAge")||pY;let Zb=null;const gY=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mY)return;const i=n==null?void 0:n.token;Zb!==i&&(Zb=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vY(e=bP()){const t=x1(e,"auth");if(t.isInitialized())return t.getImmediate();const n=jK(e,{popupRedirectResolver:cY,persistence:[EQ,uQ,YP]}),r=_P("authTokenSyncURL");if(r){const o=gY(r);rQ(n,o,()=>o(n.currentUser)),nQ(n,s=>o(s))}const i=vP("auth");return i&&FK(n,`http://${i}`),n}hY("Browser");var yY=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,L1=L1||{},Q=yY||self;function fp(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Xu(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function _Y(e){return Object.prototype.hasOwnProperty.call(e,rg)&&e[rg]||(e[rg]=++wY)}var rg="closure_uid_"+(1e9*Math.random()>>>0),wY=0;function EY(e,t,n){return e.call.apply(e.bind,arguments)}function SY(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ot(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ot=EY:Ot=SY,Ot.apply(null,arguments)}function Wc(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ft(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function Ui(){this.s=this.s,this.o=this.o}var bY=0;Ui.prototype.s=!1;Ui.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),bY!=0)&&_Y(this)};Ui.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const iR=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function j1(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function eT(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fp(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function Nt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};var TY=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};Q.addEventListener("test",n,t),Q.removeEventListener("test",n,t)}catch{}return e}();function hu(e){return/^[\s\xa0]*$/.test(e)}function dp(){var e=Q.navigator;return e&&(e=e.userAgent)?e:""}function tr(e){return dp().indexOf(e)!=-1}function V1(e){return V1[" "](e),e}V1[" "]=function(){};function IY(e,t){var n=vX;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var CY=tr("Opera"),Ks=tr("Trident")||tr("MSIE"),oR=tr("Edge"),oy=oR||Ks,sR=tr("Gecko")&&!(dp().toLowerCase().indexOf("webkit")!=-1&&!tr("Edge"))&&!(tr("Trident")||tr("MSIE"))&&!tr("Edge"),xY=dp().toLowerCase().indexOf("webkit")!=-1&&!tr("Edge");function aR(){var e=Q.document;return e?e.documentMode:void 0}var sy;e:{var ig="",og=function(){var e=dp();if(sR)return/rv:([^\);]+)(\)|;)/.exec(e);if(oR)return/Edge\/([\d\.]+)/.exec(e);if(Ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(xY)return/WebKit\/(\S+)/.exec(e);if(CY)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(og&&(ig=og?og[1]:""),Ks){var sg=aR();if(sg!=null&&sg>parseFloat(ig)){sy=String(sg);break e}}sy=ig}var ay;if(Q.document&&Ks){var tT=aR();ay=tT||parseInt(sy,10)||void 0}else ay=void 0;var kY=ay;function pu(e,t){if(Nt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(sR){e:{try{V1(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:AY[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&pu.$.h.call(this)}}ft(pu,Nt);var AY={2:"touch",3:"pen",4:"mouse"};pu.prototype.h=function(){pu.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ju="closure_listenable_"+(1e6*Math.random()|0),PY=0;function RY(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++PY,this.fa=this.ia=!1}function hp(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function F1(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function OY(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function lR(e){const t={};for(const n in e)t[n]=e[n];return t}const nT="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uR(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<nT.length;o++)n=nT[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function pp(e){this.src=e,this.g={},this.h=0}pp.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=uy(e,t,r,i);return-1<s?(t=e[s],n||(t.ia=!1)):(t=new RY(t,this.src,o,!!r,i),t.ia=n,e.push(t)),t};function ly(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=iR(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(hp(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function uy(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.fa&&o.listener==t&&o.capture==!!n&&o.la==r)return i}return-1}var U1="closure_lm_"+(1e6*Math.random()|0),ag={};function cR(e,t,n,r,i){if(r&&r.once)return dR(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)cR(e,t[o],n,r,i);return null}return n=W1(n),e&&e[Ju]?e.O(t,n,Xu(r)?!!r.capture:!!r,i):fR(e,t,n,!1,r,i)}function fR(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=Xu(i)?!!i.capture:!!i,a=B1(e);if(a||(e[U1]=a=new pp(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=NY(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)TY||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(pR(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function NY(){function e(n){return t.call(e.src,e.listener,n)}const t=$Y;return e}function dR(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)dR(e,t[o],n,r,i);return null}return n=W1(n),e&&e[Ju]?e.P(t,n,Xu(r)?!!r.capture:!!r,i):fR(e,t,n,!0,r,i)}function hR(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)hR(e,t[o],n,r,i);else r=Xu(r)?!!r.capture:!!r,n=W1(n),e&&e[Ju]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=uy(o,n,r,i),-1<n&&(hp(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=B1(e))&&(t=e.g[t.toString()],e=-1,t&&(e=uy(t,n,r,i)),(n=-1<e?t[e]:null)&&z1(n))}function z1(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ju])ly(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(pR(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=B1(t))?(ly(n,e),n.h==0&&(n.src=null,t[U1]=null)):hp(e)}}}function pR(e){return e in ag?ag[e]:ag[e]="on"+e}function $Y(e,t){if(e.fa)e=!0;else{t=new pu(t,this);var n=e.listener,r=e.la||e.src;e.ia&&z1(e),e=n.call(r,t)}return e}function B1(e){return e=e[U1],e instanceof pp?e:null}var lg="__closure_events_fn_"+(1e9*Math.random()>>>0);function W1(e){return typeof e=="function"?e:(e[lg]||(e[lg]=function(t){return e.handleEvent(t)}),e[lg])}function ut(){Ui.call(this),this.i=new pp(this),this.S=this,this.J=null}ft(ut,Ui);ut.prototype[Ju]=!0;ut.prototype.removeEventListener=function(e,t,n,r){hR(this,e,t,n,r)};function wt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Nt(t,e);else if(t instanceof Nt)t.target=t.target||e;else{var i=t;t=new Nt(r,e),uR(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Hc(s,r,!0,t)&&i}if(s=t.g=e,i=Hc(s,r,!0,t)&&i,i=Hc(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Hc(s,r,!1,t)&&i}ut.prototype.N=function(){if(ut.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)hp(n[r]);delete e.g[t],e.h--}}this.J=null};ut.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ut.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Hc(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&ly(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var H1=Q.JSON.stringify;class DY{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function MY(){var e=q1;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class LY{constructor(){this.h=this.g=null}add(t,n){const r=mR.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var mR=new DY(()=>new jY,e=>e.reset());class jY{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VY(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function FY(e){Q.setTimeout(()=>{throw e},0)}let mu,gu=!1,q1=new LY,gR=()=>{const e=Q.Promise.resolve(void 0);mu=()=>{e.then(UY)}};var UY=()=>{for(var e;e=MY();){try{e.h.call(e.g)}catch(n){FY(n)}var t=mR;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}gu=!1};function mp(e,t){ut.call(this),this.h=e||1,this.g=t||Q,this.j=Ot(this.qb,this),this.l=Date.now()}ft(mp,ut);N=mp.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),wt(this,"tick"),this.ga&&(G1(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function G1(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}N.N=function(){mp.$.N.call(this),G1(this),delete this.g};function K1(e,t,n){if(typeof e=="function")n&&(e=Ot(e,n));else if(e&&typeof e.handleEvent=="function")e=Ot(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:Q.setTimeout(e,t||0)}function vR(e){e.g=K1(()=>{e.g=null,e.i&&(e.i=!1,vR(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class zY extends Ui{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:vR(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vu(e){Ui.call(this),this.h=e,this.g={}}ft(vu,Ui);var rT=[];function yR(e,t,n,r){Array.isArray(n)||(n&&(rT[0]=n.toString()),n=rT);for(var i=0;i<n.length;i++){var o=cR(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function _R(e){F1(e.g,function(t,n){this.g.hasOwnProperty(n)&&z1(t)},e),e.g={}}vu.prototype.N=function(){vu.$.N.call(this),_R(this)};vu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gp(){this.g=!0}gp.prototype.Ea=function(){this.g=!1};function BY(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function WY(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function ds(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+qY(e,n)+(r?" "+r:"")})}function HY(e,t){e.info(function(){return"TIMEOUT: "+t})}gp.prototype.info=function(){};function qY(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return H1(n)}catch{return t}}var Mo={},iT=null;function vp(){return iT=iT||new ut}Mo.Ta="serverreachability";function wR(e){Nt.call(this,Mo.Ta,e)}ft(wR,Nt);function yu(e){const t=vp();wt(t,new wR(t))}Mo.STAT_EVENT="statevent";function ER(e,t){Nt.call(this,Mo.STAT_EVENT,e),this.stat=t}ft(ER,Nt);function Ft(e){const t=vp();wt(t,new ER(t,e))}Mo.Ua="timingevent";function SR(e,t){Nt.call(this,Mo.Ua,e),this.size=t}ft(SR,Nt);function Zu(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){e()},t)}var yp={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},bR={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Q1(){}Q1.prototype.h=null;function oT(e){return e.h||(e.h=e.i())}function TR(){}var ec={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Y1(){Nt.call(this,"d")}ft(Y1,Nt);function X1(){Nt.call(this,"c")}ft(X1,Nt);var cy;function _p(){}ft(_p,Q1);_p.prototype.g=function(){return new XMLHttpRequest};_p.prototype.i=function(){return{}};cy=new _p;function tc(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new vu(this),this.P=GY,e=oy?125:void 0,this.V=new mp(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new IR}function IR(){this.i=null,this.g="",this.h=!1}var GY=45e3,CR={},fy={};N=tc.prototype;N.setTimeout=function(e){this.P=e};function dy(e,t,n){e.L=1,e.A=Ep(Nr(t)),e.u=n,e.S=!0,xR(e,null)}function xR(e,t){e.G=Date.now(),nc(e),e.B=Nr(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),DR(n.i,"t",r),e.o=0,n=e.l.J,e.h=new IR,e.g=n2(e.l,n?t:null,!e.u),0<e.O&&(e.M=new zY(Ot(e.Pa,e,e.g),e.O)),yR(e.U,e.g,"readystatechange",e.nb),t=e.I?lR(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),yu(),BY(e.j,e.v,e.B,e.m,e.W,e.u)}N.nb=function(e){e=e.target;const t=this.M;t&&nr(e)==3?t.l():this.Pa(e)};N.Pa=function(e){try{if(e==this.g)e:{const c=nr(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||oy||this.g&&(this.h.h||this.g.ja()||uT(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?yu(3):yu(2)),wp(this);var n=this.g.da();this.ca=n;t:if(kR(this)){var r=uT(this.g);e="";var i=r.length,o=nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ro(this),Cl(this);var s="";break t}this.h.i=new Q.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.length=0,this.h.g+=e,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,WY(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hu(a)){var u=a;break t}}u=null}if(n=u)ds(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hy(this,n);else{this.i=!1,this.s=3,Ft(12),ro(this),Cl(this);break e}}this.S?(AR(this,c,s),oy&&this.i&&c==3&&(yR(this.U,this.V,"tick",this.mb),this.V.start())):(ds(this.j,this.m,s,null),hy(this,s)),c==4&&ro(this),this.i&&!this.J&&(c==4?JR(this.l,this):(this.i=!1,nc(this)))}else pX(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),ro(this),Cl(this)}}}catch{}finally{}};function kR(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function AR(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=KY(e,n),i==fy){t==4&&(e.s=4,Ft(14),r=!1),ds(e.j,e.m,null,"[Incomplete Response]");break}else if(i==CR){e.s=4,Ft(15),ds(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ds(e.j,e.m,i,null),hy(e,i);kR(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Ft(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),r_(t),t.M=!0,Ft(11))):(ds(e.j,e.m,n,"[Invalid Chunked Response]"),ro(e),Cl(e))}N.mb=function(){if(this.g){var e=nr(this.g),t=this.g.ja();this.o<t.length&&(wp(this),AR(this,e,t),this.i&&e!=4&&nc(this))}};function KY(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?fy:(n=Number(t.substring(n,r)),isNaN(n)?CR:(r+=1,r+n>t.length?fy:(t=t.slice(r,r+n),e.o=r+n,t)))}N.cancel=function(){this.J=!0,ro(this)};function nc(e){e.Y=Date.now()+e.P,PR(e,e.P)}function PR(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Zu(Ot(e.lb,e),t)}function wp(e){e.C&&(Q.clearTimeout(e.C),e.C=null)}N.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(HY(this.j,this.B),this.L!=2&&(yu(),Ft(17)),ro(this),this.s=2,Cl(this)):PR(this,this.Y-e)};function Cl(e){e.l.H==0||e.J||JR(e.l,e)}function ro(e){wp(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,G1(e.V),_R(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function hy(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||py(n.i,e))){if(!e.K&&py(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)zd(n),Ip(n);else break e;n_(n),Ft(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Zu(Ot(n.ib,n),6e3));if(1>=jR(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else io(n,11)}else if((e.K||n.g==e)&&zd(n),!hu(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const g=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var o=r.i;o.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(J1(o,o.h),o.h=null))}if(r.F){const m=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,Te(r.I,r.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=e;if(r.wa=t2(r,r.J?r.pa:null,r.Y),s.K){VR(r.i,s);var a=s,l=r.L;l&&a.setTimeout(l),a.C&&(wp(a),nc(a)),r.g=s}else YR(r);0<n.j.length&&Cp(n)}else u[0]!="stop"&&u[0]!="close"||io(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?io(n,7):t_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}yu(4)}catch{}}function QY(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(fp(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function YY(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(fp(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function RR(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(fp(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=YY(e),r=QY(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var OR=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XY(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function mo(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof mo){this.h=e.h,Fd(this,e.j),this.s=e.s,this.g=e.g,Ud(this,e.m),this.l=e.l;var t=e.i,n=new _u;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),sT(this,n),this.o=e.o}else e&&(t=String(e).match(OR))?(this.h=!1,Fd(this,t[1]||"",!0),this.s=ol(t[2]||""),this.g=ol(t[3]||"",!0),Ud(this,t[4]),this.l=ol(t[5]||"",!0),sT(this,t[6]||"",!0),this.o=ol(t[7]||"")):(this.h=!1,this.i=new _u(null,this.h))}mo.prototype.toString=function(){var e=[],t=this.j;t&&e.push(sl(t,aT,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(sl(t,aT,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(sl(n,n.charAt(0)=="/"?eX:ZY,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",sl(n,nX)),e.join("")};function Nr(e){return new mo(e)}function Fd(e,t,n){e.j=n?ol(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ud(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function sT(e,t,n){t instanceof _u?(e.i=t,rX(e.i,e.h)):(n||(t=sl(t,tX)),e.i=new _u(t,e.h))}function Te(e,t,n){e.i.set(t,n)}function Ep(e){return Te(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ol(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function sl(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,JY),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function JY(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var aT=/[#\/\?@]/g,ZY=/[#\?:]/g,eX=/[#\?]/g,tX=/[#\?@]/g,nX=/#/g;function _u(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function zi(e){e.g||(e.g=new Map,e.h=0,e.i&&XY(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}N=_u.prototype;N.add=function(e,t){zi(this),this.i=null,e=Ea(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function NR(e,t){zi(e),t=Ea(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $R(e,t){return zi(e),t=Ea(e,t),e.g.has(t)}N.forEach=function(e,t){zi(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};N.ta=function(){zi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};N.Z=function(e){zi(this);let t=[];if(typeof e=="string")$R(this,e)&&(t=t.concat(this.g.get(Ea(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};N.set=function(e,t){return zi(this),this.i=null,e=Ea(this,e),$R(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};N.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function DR(e,t,n){NR(e,t),0<n.length&&(e.i=null,e.g.set(Ea(e,t),j1(n)),e.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function Ea(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function rX(e,t){t&&!e.j&&(zi(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(NR(this,r),DR(this,i,n))},e)),e.j=t}var iX=class{constructor(e,t){this.g=e,this.map=t}};function MR(e){this.l=e||oX,Q.PerformanceNavigationTiming?(e=Q.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oX=10;function LR(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function jR(e){return e.h?1:e.g?e.g.size:0}function py(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function J1(e,t){e.g?e.g.add(t):e.h=t}function VR(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}MR.prototype.cancel=function(){if(this.i=FR(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function FR(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return j1(e.i)}var sX=class{stringify(e){return Q.JSON.stringify(e,void 0)}parse(e){return Q.JSON.parse(e,void 0)}};function aX(){this.g=new sX}function lX(e,t,n){const r=n||"";try{RR(e,function(i,o){let s=i;Xu(i)&&(s=H1(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function uX(e,t){const n=new gp;if(Q.Image){const r=new Image;r.onload=Wc(qc,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Wc(qc,n,r,"TestLoadImage: error",!1,t),r.onabort=Wc(qc,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Wc(qc,n,r,"TestLoadImage: timeout",!1,t),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function qc(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Sp(e){this.l=e.ec||null,this.j=e.ob||!1}ft(Sp,Q1);Sp.prototype.g=function(){return new bp(this.l,this.j)};Sp.prototype.i=function(e){return function(){return e}}({});function bp(e,t){ut.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Z1,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(bp,ut);var Z1=0;N=bp.prototype;N.open=function(e,t){if(this.readyState!=Z1)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,wu(this)};N.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Q).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rc(this)),this.readyState=Z1};N.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,wu(this)),this.g&&(this.readyState=3,wu(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;UR(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function UR(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}N.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?rc(this):wu(this),this.readyState==3&&UR(this)}};N.Za=function(e){this.g&&(this.response=this.responseText=e,rc(this))};N.Ya=function(e){this.g&&(this.response=e,rc(this))};N.ka=function(){this.g&&rc(this)};function rc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,wu(e)}N.setRequestHeader=function(e,t){this.v.append(e,t)};N.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function wu(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(bp.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var cX=Q.JSON.parse;function Fe(e){ut.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=zR,this.L=this.M=!1}ft(Fe,ut);var zR="",fX=/^https?$/i,dX=["POST","PUT"];N=Fe.prototype;N.Oa=function(e){this.M=e};N.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cy.g(),this.C=this.u?oT(this.u):oT(cy),this.g.onreadystatechange=Ot(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(o){lT(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=Q.FormData&&e instanceof Q.FormData,!(0<=iR(dX,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{HR(this),0<this.B&&((this.L=hX(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ot(this.ua,this)):this.A=K1(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){lT(this,o)}};function hX(e){return Ks&&typeof e.timeout=="number"&&e.ontimeout!==void 0}N.ua=function(){typeof L1<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function lT(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,BR(e),Tp(e)}function BR(e){e.F||(e.F=!0,wt(e,"complete"),wt(e,"error"))}N.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,wt(this,"complete"),wt(this,"abort"),Tp(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tp(this,!0)),Fe.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?WR(this):this.kb())};N.kb=function(){WR(this)};function WR(e){if(e.h&&typeof L1<"u"&&(!e.C[1]||nr(e)!=4||e.da()!=2)){if(e.v&&nr(e)==4)K1(e.La,0,e);else if(wt(e,"readystatechange"),nr(e)==4){e.h=!1;try{const s=e.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=s===0){var i=String(e.I).match(OR)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),r=!fX.test(i?i.toLowerCase():"")}n=r}if(n)wt(e,"complete"),wt(e,"success");else{e.m=6;try{var o=2<nr(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",BR(e)}}finally{Tp(e)}}}}function Tp(e,t){if(e.g){HR(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||wt(e,"ready");try{n.onreadystatechange=r}catch{}}}function HR(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Q.clearTimeout(e.A),e.A=null)}N.isActive=function(){return!!this.g};function nr(e){return e.g?e.g.readyState:0}N.da=function(){try{return 2<nr(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),cX(t)}};function uT(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case zR:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function pX(e){const t={};e=(e.g&&2<=nr(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(hu(e[r]))continue;var n=VY(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}OY(t,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qR(e){let t="";return F1(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function e_(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qR(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Te(e,t,n))}function Ga(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function GR(e){this.Ga=0,this.j=[],this.l=new gp,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ga("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ga("baseRetryDelayMs",5e3,e),this.hb=Ga("retryDelaySeedMs",1e4,e),this.eb=Ga("forwardChannelMaxRetries",2,e),this.xa=Ga("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new MR(e&&e.concurrentRequestLimit),this.Ja=new aX,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=GR.prototype;N.ra=8;N.H=1;function t_(e){if(KR(e),e.H==3){var t=e.W++,n=Nr(e.I);if(Te(n,"SID",e.K),Te(n,"RID",t),Te(n,"TYPE","terminate"),ic(e,n),t=new tc(e,e.l,t),t.L=2,t.A=Ep(Nr(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=t.A,n=!0),n||(t.g=n2(t.l,null),t.g.ha(t.A)),t.G=Date.now(),nc(t)}e2(e)}function Ip(e){e.g&&(r_(e),e.g.cancel(),e.g=null)}function KR(e){Ip(e),e.u&&(Q.clearTimeout(e.u),e.u=null),zd(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&Q.clearTimeout(e.m),e.m=null)}function Cp(e){if(!LR(e.i)&&!e.m){e.m=!0;var t=e.Na;mu||gR(),gu||(mu(),gu=!0),q1.add(t,e),e.C=0}}function mX(e,t){return jR(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Zu(Ot(e.Na,e,t),ZR(e,e.C)),e.C++,!0)}N.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new tc(this,this.l,e);let o=this.s;if(this.U&&(o?(o=lR(o),uR(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=QR(this,i,t),n=Nr(this.I),Te(n,"RID",e),Te(n,"CVER",22),this.F&&Te(n,"X-HTTP-Session-Id",this.F),ic(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(qR(o)))+"&"+t:this.o&&e_(n,this.o,o)),J1(this.i,i),this.bb&&Te(n,"TYPE","init"),this.P?(Te(n,"$req",t),Te(n,"SID","null"),i.aa=!0,dy(i,n,null)):dy(i,n,t),this.H=2}}else this.H==3&&(e?cT(this,e):this.j.length==0||LR(this.i)||cT(this))};function cT(e,t){var n;t?n=t.m:n=e.W++;const r=Nr(e.I);Te(r,"SID",e.K),Te(r,"RID",n),Te(r,"AID",e.V),ic(e,r),e.o&&e.s&&e_(r,e.o,e.s),n=new tc(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=QR(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),J1(e.i,n),dy(n,r,t)}function ic(e,t){e.na&&F1(e.na,function(n,r){Te(t,r,n)}),e.h&&RR({},function(n,r){Te(t,r,n)})}function QR(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Ot(e.h.Va,e.h,e):null;e:{var i=e.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=o,0>u)o=Math.max(0,i[l].g-100),a=!1;else try{lX(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function YR(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;mu||gR(),gu||(mu(),gu=!0),q1.add(t,e),e.A=0}}function n_(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Zu(Ot(e.Ma,e),ZR(e,e.A)),e.A++,!0)}N.Ma=function(){if(this.u=null,XR(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Zu(Ot(this.jb,this),e)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ft(10),Ip(this),XR(this))};function r_(e){e.B!=null&&(Q.clearTimeout(e.B),e.B=null)}function XR(e){e.g=new tc(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Nr(e.wa);Te(t,"RID","rpc"),Te(t,"SID",e.K),Te(t,"AID",e.V),Te(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Te(t,"TO",e.qa),Te(t,"TYPE","xmlhttp"),ic(e,t),e.o&&e.s&&e_(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Ep(Nr(t)),n.u=null,n.S=!0,xR(n,e)}N.ib=function(){this.v!=null&&(this.v=null,Ip(this),n_(this),Ft(19))};function zd(e){e.v!=null&&(Q.clearTimeout(e.v),e.v=null)}function JR(e,t){var n=null;if(e.g==t){zd(e),r_(e),e.g=null;var r=2}else if(py(e.i,t))n=t.F,VR(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=vp(),wt(r,new SR(r,n)),Cp(e)}else YR(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&mX(e,t)||r==2&&n_(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:io(e,5);break;case 4:io(e,10);break;case 3:io(e,6);break;default:io(e,2)}}}function ZR(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function io(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Ot(e.pb,e);n||(n=new mo("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Fd(n,"https"),Ep(n)),uX(n.toString(),r)}else Ft(2);e.H=0,e.h&&e.h.za(t),e2(e),KR(e)}N.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Ft(2)):(this.l.info("Failed to ping google.com"),Ft(1))};function e2(e){if(e.H=0,e.ma=[],e.h){const t=FR(e.i);(t.length!=0||e.j.length!=0)&&(eT(e.ma,t),eT(e.ma,e.j),e.i.i.length=0,j1(e.j),e.j.length=0),e.h.ya()}}function t2(e,t,n){var r=n instanceof mo?Nr(n):new mo(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ud(r,r.m);else{var i=Q.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new mo(null);r&&Fd(o,r),t&&(o.g=t),i&&Ud(o,i),n&&(o.l=n),r=o}return n=e.F,t=e.Da,n&&t&&Te(r,n,t),Te(r,"VER",e.ra),ic(e,r),r}function n2(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new Fe(new Sp({ob:n})):new Fe(e.va),t.Oa(e.J),t}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function r2(){}N=r2.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Bd(){if(Ks&&!(10<=Number(kY)))throw Error("Environmental error: no available transport.")}Bd.prototype.g=function(e,t){return new un(e,t)};function un(e,t){ut.call(this),this.g=new GR(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!hu(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!hu(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Sa(this)}ft(un,ut);un.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Ft(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=t2(e,null,e.Y),Cp(e)};un.prototype.close=function(){t_(this.g)};un.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=H1(e),e=n);t.j.push(new iX(t.fb++,e)),t.H==3&&Cp(t)};un.prototype.N=function(){this.g.h=null,delete this.j,t_(this.g),delete this.g,un.$.N.call(this)};function i2(e){Y1.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ft(i2,Y1);function o2(){X1.call(this),this.status=1}ft(o2,X1);function Sa(e){this.g=e}ft(Sa,r2);Sa.prototype.Ba=function(){wt(this.g,"a")};Sa.prototype.Aa=function(e){wt(this.g,new i2(e))};Sa.prototype.za=function(e){wt(this.g,new o2)};Sa.prototype.ya=function(){wt(this.g,"b")};function gX(){this.blockSize=-1}function Un(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ft(Un,gX);Un.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ug(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],s=t+(o^n&(i^o))+r[0]+3614090360&4294967295;t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[4]+4118548399&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[8]+1770035416&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[12]+1804603682&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(i^o&(n^i))+r[1]+4129170786&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[5]+3593408605&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[9]+568446438&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[13]+2850285829&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(n^i^o)+r[5]+4294588738&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[1]+2763975236&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[13]+681279174&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[9]+3654602809&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(i^(n|~o))+r[0]+4096336452&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[12]+1700485571&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[8]+1873313359&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[4]+4149444226&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}Un.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,o=0;o<t;){if(i==0)for(;o<=n;)ug(this,e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(r[i++]=e.charCodeAt(o++),i==this.blockSize){ug(this,r),i=0;break}}else for(;o<t;)if(r[i++]=e[o++],i==this.blockSize){ug(this,r),i=0;break}}this.h=i,this.i+=t};Un.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function pe(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=e[i]|0;r&&o==t||(n[i]=o,r=!1)}this.g=n}var vX={};function i_(e){return-128<=e&&128>e?IY(e,function(t){return new pe([t|0],0>t?-1:0)}):new pe([e|0],0>e?-1:0)}function rr(e){if(isNaN(e)||!isFinite(e))return xs;if(0>e)return vt(rr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=my;return new pe(t,0)}function s2(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return vt(s2(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rr(Math.pow(t,8)),r=xs,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),s=parseInt(e.substring(i,i+o),t);8>o?(o=rr(Math.pow(t,o)),r=r.R(o).add(rr(s))):(r=r.R(n),r=r.add(rr(s)))}return r}var my=4294967296,xs=i_(0),gy=i_(1),fT=i_(16777216);N=pe.prototype;N.ea=function(){if(yn(this))return-vt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:my+r)*t,t*=my}return e};N.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(br(this))return"0";if(yn(this))return"-"+vt(this).toString(e);for(var t=rr(Math.pow(e,6)),n=this,r="";;){var i=Hd(n,t).g;n=Wd(n,i.R(t));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,br(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};N.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function br(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function yn(e){return e.h==-1}N.X=function(e){return e=Wd(this,e),yn(e)?-1:br(e)?0:1};function vt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new pe(n,~e.h).add(gy)}N.abs=function(){return yn(this)?vt(this):this};N.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var o=r+(this.D(i)&65535)+(e.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function Wd(e,t){return e.add(vt(t))}N.R=function(e){if(br(this)||br(e))return xs;if(yn(this))return yn(e)?vt(this).R(vt(e)):vt(vt(this).R(e));if(yn(e))return vt(this.R(vt(e)));if(0>this.X(fT)&&0>e.X(fT))return rr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=s*l,Gc(n,2*r+2*i),n[2*r+2*i+1]+=o*l,Gc(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Gc(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Gc(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new pe(n,0)};function Gc(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ka(e,t){this.g=e,this.h=t}function Hd(e,t){if(br(t))throw Error("division by zero");if(br(e))return new Ka(xs,xs);if(yn(e))return t=Hd(vt(e),t),new Ka(vt(t.g),vt(t.h));if(yn(t))return t=Hd(e,vt(t)),new Ka(vt(t.g),t.h);if(30<e.g.length){if(yn(e)||yn(t))throw Error("slowDivide_ only works with positive integers.");for(var n=gy,r=t;0>=r.X(e);)n=dT(n),r=dT(r);var i=Ko(n,1),o=Ko(r,1);for(r=Ko(r,2),n=Ko(n,2);!br(r);){var s=o.add(r);0>=s.X(e)&&(i=i.add(n),o=s),r=Ko(r,1),n=Ko(n,1)}return t=Wd(e,i.R(t)),new Ka(i,t)}for(i=xs;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=rr(n),s=o.R(t);yn(s)||0<s.X(e);)n-=r,o=rr(n),s=o.R(t);br(o)&&(o=gy),i=i.add(o),e=Wd(e,s)}return new Ka(i,e)}N.gb=function(e){return Hd(this,e).h};N.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new pe(n,this.h&e.h)};N.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new pe(n,this.h|e.h)};N.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new pe(n,this.h^e.h)};function dT(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new pe(n,e.h)}function Ko(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],o=0;o<r;o++)i[o]=0<t?e.D(o+n)>>>t|e.D(o+n+1)<<32-t:e.D(o+n);return new pe(i,e.h)}Bd.prototype.createWebChannel=Bd.prototype.g;un.prototype.send=un.prototype.u;un.prototype.open=un.prototype.m;un.prototype.close=un.prototype.close;yp.NO_ERROR=0;yp.TIMEOUT=8;yp.HTTP_ERROR=6;bR.COMPLETE="complete";TR.EventType=ec;ec.OPEN="a";ec.CLOSE="b";ec.ERROR="c";ec.MESSAGE="d";ut.prototype.listen=ut.prototype.O;Fe.prototype.listenOnce=Fe.prototype.P;Fe.prototype.getLastError=Fe.prototype.Sa;Fe.prototype.getLastErrorCode=Fe.prototype.Ia;Fe.prototype.getStatus=Fe.prototype.da;Fe.prototype.getResponseJson=Fe.prototype.Wa;Fe.prototype.getResponseText=Fe.prototype.ja;Fe.prototype.send=Fe.prototype.ha;Fe.prototype.setWithCredentials=Fe.prototype.Oa;Un.prototype.digest=Un.prototype.l;Un.prototype.reset=Un.prototype.reset;Un.prototype.update=Un.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=rr;pe.fromString=s2;var yX=function(){return new Bd},_X=function(){return vp()},cg=yp,wX=bR,EX=Mo,hT={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Kc=TR,SX=Fe,bX=Un,ks=pe;const pT="@firebase/firestore";/**
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
 */class At{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let ba="10.7.0";/**
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
 */const Co=new I1("@firebase/firestore");function Qa(){return Co.logLevel}function F(e,...t){if(Co.logLevel<=ie.DEBUG){const n=t.map(o_);Co.debug(`Firestore (${ba}): ${e}`,...n)}}function $r(e,...t){if(Co.logLevel<=ie.ERROR){const n=t.map(o_);Co.error(`Firestore (${ba}): ${e}`,...n)}}function Qs(e,...t){if(Co.logLevel<=ie.WARN){const n=t.map(o_);Co.warn(`Firestore (${ba}): ${e}`,...n)}}function o_(e){if(typeof e=="string")return e;try{/**
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
 */function K(e="Unexpected state"){const t=`FIRESTORE (${ba}) INTERNAL ASSERTION FAILED: `+e;throw $r(t),new Error(t)}function ye(e,t){e||K()}function J(e,t){return e}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends zr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ir{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class a2{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class TX{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class IX{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CX{constructor(t){this.t=t,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Ir;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ir,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ir)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new a2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ye(t===null||typeof t=="string"),new At(t)}}class xX{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kX{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new xX(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AX{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PX{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,F("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new AX(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function RX(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class l2{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=RX(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function ce(e,t){return e<t?-1:e>t?1:0}function Ys(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class nt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ce(this.nanoseconds,t.nanoseconds):ce(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Y(t)}static min(){return new Y(new nt(0,0))}static max(){return new Y(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Eu{constructor(t,n,r){n===void 0?n=0:n>t.length&&K(),r===void 0?r=t.length-n:r>t.length-n&&K(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Eu.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Eu?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const o=t.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Ie extends Eu{construct(t,n,r){return new Ie(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new j(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const OX=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Eu{construct(t,n,r){return new yt(t,n,r)}static isValidIdentifier(t){return OX.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new j(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new j(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new j(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(n)}static emptyPath(){return new yt([])}}/**
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
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(Ie.fromString(t))}static fromName(t){return new W(Ie.fromString(t).popFirst(5))}static empty(){return new W(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ie.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ie.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new Ie(t.slice()))}}function NX(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Ai(i,W.empty(),t)}function $X(e){return new Ai(e.readTime,e.key,-1)}class Ai{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ai(Y.min(),W.empty(),-1)}static max(){return new Ai(Y.max(),W.empty(),-1)}}function DX(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=W.comparator(e.documentKey,t.documentKey),n!==0?n:ce(e.largestBatchId,t.largestBatchId))}/**
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
 */const MX="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LX{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function oc(e){if(e.code!==x.FAILED_PRECONDITION||e.message!==MX)throw e;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new A((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):A.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):A.reject(n)}static resolve(t){return new A((n,r)=>{n(t)})}static reject(t){return new A((n,r)=>{r(t)})}static waitFor(t){return new A((n,r)=>{let i=0,o=0,s=!1;t.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(t){let n=A.resolve(!1);for(const r of t)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(t,n){return new A((r,i)=>{const o=t.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(t[u]).next(c=>{s[u]=c,++a,a===o&&r(s)},c=>i(c))}})}static doWhile(t,n){return new A((r,i)=>{const o=()=>{t()===!0?n().next(()=>{o()},i):r()};o()})}}function sc(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class s_{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}s_._e=-1;function xp(e){return e==null}function qd(e){return e===0&&1/e==-1/0}function jX(e){return typeof e=="number"&&Number.isInteger(e)&&!qd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function mT(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ta(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function u2(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class De{constructor(t,n){this.comparator=t,this.root=n||mt.EMPTY}insert(t,n){return new De(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(t){return new De(this.comparator,this.root.remove(t,this.comparator).copy(null,null,mt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qc(this.root,t,this.comparator,!0)}}class Qc{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=n?r(t.key,n):1,n&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class mt{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r??mt.RED,this.left=i??mt.EMPTY,this.right=o??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,o){return new mt(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const t=this.left.check();if(t!==this.right.check())throw K();return t+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,n,r,i,o){return this}insert(t,n,r){return new mt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Et{constructor(t){this.comparator=t,this.data=new De(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new gT(this.data.getIterator())}getIteratorFrom(t){return new gT(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Et)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Et(this.comparator);return n.data=t,n}}class gT{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $n{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new $n([])}unionWith(t){let n=new Et(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new $n(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ys(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class c2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Mt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new c2("Invalid base64 string: "+o):o}}(t);return new Mt(n)}static fromUint8Array(t){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(t);return new Mt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ce(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const VX=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(e){if(ye(!!e),typeof e=="string"){let t=0;const n=VX.exec(e);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:We(e.seconds),nanos:We(e.nanos)}}function We(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function xo(e){return typeof e=="string"?Mt.fromBase64String(e):Mt.fromUint8Array(e)}/**
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
 */function a_(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function l_(e){const t=e.mapValue.fields.__previous_value__;return a_(t)?l_(t):t}function Su(e){const t=Pi(e.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */class FX{constructor(t,n,r,i,o,s,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class bu{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new bu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof bu&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Yc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ko(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?a_(e)?4:UX(e)?9007199254740991:10:K()}function hr(e,t){if(e===t)return!0;const n=ko(e);if(n!==ko(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Su(e).isEqual(Su(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Pi(i.timestampValue),a=Pi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,o){return xo(i.bytesValue).isEqual(xo(o.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,o){return We(i.geoPointValue.latitude)===We(o.geoPointValue.latitude)&&We(i.geoPointValue.longitude)===We(o.geoPointValue.longitude)}(e,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return We(i.integerValue)===We(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=We(i.doubleValue),a=We(o.doubleValue);return s===a?qd(s)===qd(a):isNaN(s)&&isNaN(a)}return!1}(e,t);case 9:return Ys(e.arrayValue.values||[],t.arrayValue.values||[],hr);case 10:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(mT(s)!==mT(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!hr(s[l],a[l])))return!1;return!0}(e,t);default:return K()}}function Tu(e,t){return(e.values||[]).find(n=>hr(n,t))!==void 0}function Xs(e,t){if(e===t)return 0;const n=ko(e),r=ko(t);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(e.booleanValue,t.booleanValue);case 2:return function(o,s){const a=We(o.integerValue||o.doubleValue),l=We(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return vT(e.timestampValue,t.timestampValue);case 4:return vT(Su(e),Su(t));case 5:return ce(e.stringValue,t.stringValue);case 6:return function(o,s){const a=xo(o),l=xo(s);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ce(a[u],l[u]);if(c!==0)return c}return ce(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(o,s){const a=ce(We(o.latitude),We(s.latitude));return a!==0?a:ce(We(o.longitude),We(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(o,s){const a=o.values||[],l=s.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Xs(a[u],l[u]);if(c)return c}return ce(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(o,s){if(o===Yc.mapValue&&s===Yc.mapValue)return 0;if(o===Yc.mapValue)return 1;if(s===Yc.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),u=s.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const d=ce(l[f],c[f]);if(d!==0)return d;const h=Xs(a[l[f]],u[c[f]]);if(h!==0)return h}return ce(l.length,c.length)}(e.mapValue,t.mapValue);default:throw K()}}function vT(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ce(e,t);const n=Pi(e),r=Pi(t),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Js(e){return vy(e)}function vy(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Pi(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return xo(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return W.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=vy(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${vy(n.fields[s])}`;return i+"}"}(e.mapValue):K()}function yT(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function yy(e){return!!e&&"integerValue"in e}function u_(e){return!!e&&"arrayValue"in e}function _T(e){return!!e&&"nullValue"in e}function wT(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function zf(e){return!!e&&"mapValue"in e}function xl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ta(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=xl(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function UX(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _n{constructor(t){this.value=t}static empty(){return new _n({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!zf(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=xl(n)}setAll(t){let n=yt.emptyPath(),r={},i=[];t.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=xl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(t){const n=this.field(t.popLast());zf(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return hr(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];zf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Ta(n,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new _n(xl(this.value))}}function f2(e){const t=[];return Ta(e.fields,(n,r)=>{const i=new yt([n]);if(zf(r)){const o=f2(r.mapValue).fields;if(o.length===0)t.push(i);else for(const s of o)t.push(i.child(s))}else t.push(i)}),new $n(t)}/**
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
 */class Rt{constructor(t,n,r,i,o,s,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(t){return new Rt(t,0,Y.min(),Y.min(),Y.min(),_n.empty(),0)}static newFoundDocument(t,n,r,i){return new Rt(t,1,n,Y.min(),r,i,0)}static newNoDocument(t,n){return new Rt(t,2,n,Y.min(),Y.min(),_n.empty(),0)}static newUnknownDocument(t,n){return new Rt(t,3,n,Y.min(),Y.min(),_n.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gd{constructor(t,n){this.position=t,this.inclusive=n}}function ET(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(o.field.isKeyField()?r=W.comparator(W.fromName(s.referenceValue),n.key):r=Xs(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ST(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!hr(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Kd{constructor(t,n="asc"){this.field=t,this.dir=n}}function zX(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class d2{}class Ke extends d2{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new WX(t,n,r):n==="array-contains"?new GX(t,r):n==="in"?new KX(t,r):n==="not-in"?new QX(t,r):n==="array-contains-any"?new YX(t,r):new Ke(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new HX(t,r):new qX(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xs(n,this.value)):n!==null&&ko(this.value)===ko(n)&&this.matchesComparison(Xs(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends d2{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new zn(t,n)}matches(t){return h2(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function h2(e){return e.op==="and"}function p2(e){return BX(e)&&h2(e)}function BX(e){for(const t of e.filters)if(t instanceof zn)return!1;return!0}function _y(e){if(e instanceof Ke)return e.field.canonicalString()+e.op.toString()+Js(e.value);if(p2(e))return e.filters.map(t=>_y(t)).join(",");{const t=e.filters.map(n=>_y(n)).join(",");return`${e.op}(${t})`}}function m2(e,t){return e instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&hr(r.value,i.value)}(e,t):e instanceof zn?function(r,i){return i instanceof zn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&m2(s,i.filters[a]),!0):!1}(e,t):void K()}function g2(e){return e instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Js(n.value)}`}(e):e instanceof zn?function(n){return n.op.toString()+" {"+n.getFilters().map(g2).join(" ,")+"}"}(e):"Filter"}class WX extends Ke{constructor(t,n,r){super(t,n,r),this.key=W.fromName(r.referenceValue)}matches(t){const n=W.comparator(t.key,this.key);return this.matchesComparison(n)}}class HX extends Ke{constructor(t,n){super(t,"in",n),this.keys=v2("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class qX extends Ke{constructor(t,n){super(t,"not-in",n),this.keys=v2("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function v2(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class GX extends Ke{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return u_(n)&&Tu(n.arrayValue,this.value)}}class KX extends Ke{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Tu(this.value.arrayValue,n)}}class QX extends Ke{constructor(t,n){super(t,"not-in",n)}matches(t){if(Tu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Tu(this.value.arrayValue,n)}}class YX extends Ke{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!u_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Tu(this.value.arrayValue,r))}}/**
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
 */class XX{constructor(t,n=null,r=[],i=[],o=null,s=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ce=null}}function bT(e,t=null,n=[],r=[],i=null,o=null,s=null){return new XX(e,t,n,r,i,o,s)}function c_(e){const t=J(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>_y(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),xp(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Js(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Js(r)).join(",")),t.ce=n}return t.ce}function f_(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!zX(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!m2(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ST(e.startAt,t.startAt)&&ST(e.endAt,t.endAt)}function wy(e){return W.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class ac{constructor(t,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function JX(e,t,n,r,i,o,s,a){return new ac(e,t,n,r,i,o,s,a)}function d_(e){return new ac(e)}function TT(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function y2(e){return e.collectionGroup!==null}function kl(e){const t=J(e);if(t.le===null){t.le=[];const n=new Set;for(const o of t.explicitOrderBy)t.le.push(o),n.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new Et(yt.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||t.le.push(new Kd(o,r))}),n.has(yt.keyField().canonicalString())||t.le.push(new Kd(yt.keyField(),r))}return t.le}function fr(e){const t=J(e);return t.he||(t.he=ZX(t,kl(e))),t.he}function ZX(e,t){if(e.limitType==="F")return bT(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Kd(i.field,o)});const n=e.endAt?new Gd(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Gd(e.startAt.position,e.startAt.inclusive):null;return bT(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ey(e,t){const n=e.filters.concat([t]);return new ac(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Sy(e,t,n){return new ac(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function kp(e,t){return f_(fr(e),fr(t))&&e.limitType===t.limitType}function _2(e){return`${c_(fr(e))}|lt:${e.limitType}`}function Yo(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>g2(i)).join(", ")}]`),xp(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Js(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Js(i)).join(",")),`Target(${r})`}(fr(e))}; limitType=${e.limitType})`}function Ap(e,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):W.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(e,t)&&function(r,i){for(const o of kl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(s,a,l){const u=ET(s,a,l);return s.inclusive?u<=0:u<0}(r.startAt,kl(r),i)||r.endAt&&!function(s,a,l){const u=ET(s,a,l);return s.inclusive?u>=0:u>0}(r.endAt,kl(r),i))}(e,t)}function eJ(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function w2(e){return(t,n)=>{let r=!1;for(const i of kl(e)){const o=tJ(i,t,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function tJ(e,t,n){const r=e.field.isKeyField()?W.comparator(t.key,n.key):function(o,s,a){const l=s.data.field(o),u=a.data.field(o);return l!==null&&u!==null?Xs(l,u):K()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class Ia{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ta(this.inner,(n,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return u2(this.inner)}size(){return this.innerSize}}/**
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
 */const nJ=new De(W.comparator);function Dr(){return nJ}const E2=new De(W.comparator);function al(...e){let t=E2;for(const n of e)t=t.insert(n.key,n);return t}function S2(e){let t=E2;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function oo(){return Al()}function b2(){return Al()}function Al(){return new Ia(e=>e.toString(),(e,t)=>e.isEqual(t))}const rJ=new De(W.comparator),iJ=new Et(W.comparator);function ne(...e){let t=iJ;for(const n of e)t=t.add(n);return t}const oJ=new Et(ce);function sJ(){return oJ}/**
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
 */function T2(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qd(t)?"-0":t}}function I2(e){return{integerValue:""+e}}function aJ(e,t){return jX(t)?I2(t):T2(e,t)}/**
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
 */class Pp{constructor(){this._=void 0}}function lJ(e,t,n){return e instanceof Qd?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&a_(o)&&(o=l_(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,t):e instanceof Iu?x2(e,t):e instanceof Cu?k2(e,t):function(i,o){const s=C2(i,o),a=IT(s)+IT(i.Ie);return yy(s)&&yy(i.Ie)?I2(a):T2(i.serializer,a)}(e,t)}function uJ(e,t,n){return e instanceof Iu?x2(e,t):e instanceof Cu?k2(e,t):n}function C2(e,t){return e instanceof Yd?function(r){return yy(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Qd extends Pp{}class Iu extends Pp{constructor(t){super(),this.elements=t}}function x2(e,t){const n=A2(t);for(const r of e.elements)n.some(i=>hr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Cu extends Pp{constructor(t){super(),this.elements=t}}function k2(e,t){let n=A2(t);for(const r of e.elements)n=n.filter(i=>!hr(i,r));return{arrayValue:{values:n}}}class Yd extends Pp{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function IT(e){return We(e.integerValue||e.doubleValue)}function A2(e){return u_(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function cJ(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Iu&&i instanceof Iu||r instanceof Cu&&i instanceof Cu?Ys(r.elements,i.elements,hr):r instanceof Yd&&i instanceof Yd?hr(r.Ie,i.Ie):r instanceof Qd&&i instanceof Qd}(e.transform,t.transform)}class fJ{constructor(t,n){this.version=t,this.transformResults=n}}class Cr{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Cr}static exists(t){return new Cr(void 0,t)}static updateTime(t){return new Cr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Bf(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Rp{}function P2(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new O2(e.key,Cr.none()):new lc(e.key,e.data,Cr.none());{const n=e.data,r=_n.empty();let i=new Et(yt.comparator);for(let o of t.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Lo(e.key,r,new $n(i.toArray()),Cr.none())}}function dJ(e,t,n){e instanceof lc?function(i,o,s){const a=i.value.clone(),l=xT(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Lo?function(i,o,s){if(!Bf(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=xT(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(R2(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(e,t,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function Pl(e,t,n,r){return e instanceof lc?function(o,s,a,l){if(!Bf(o.precondition,s))return a;const u=o.value.clone(),c=kT(o.fieldTransforms,l,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Lo?function(o,s,a,l){if(!Bf(o.precondition,s))return a;const u=kT(o.fieldTransforms,l,s),c=s.data;return c.setAll(R2(o)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(f=>f.field))}(e,t,n,r):function(o,s,a){return Bf(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(e,t,n)}function hJ(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),o=C2(r.transform,i||null);o!=null&&(n===null&&(n=_n.empty()),n.set(r.field,o))}return n||null}function CT(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ys(r,i,(o,s)=>cJ(o,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class lc extends Rp{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Lo extends Rp{constructor(t,n,r,i,o=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function R2(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function xT(e,t,n){const r=new Map;ye(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,uJ(s,a,n[i]))}return r}function kT(e,t,n){const r=new Map;for(const i of e){const o=i.transform,s=n.data.field(i.field);r.set(i.field,lJ(o,s,t))}return r}class O2 extends Rp{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pJ extends Rp{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mJ{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&dJ(o,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Pl(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Pl(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=b2();return this.mutations.forEach(i=>{const o=t.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=P2(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ne())}isEqual(t){return this.batchId===t.batchId&&Ys(this.mutations,t.mutations,(n,r)=>CT(n,r))&&Ys(this.baseMutations,t.baseMutations,(n,r)=>CT(n,r))}}class h_{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){ye(t.mutations.length===r.length);let i=function(){return rJ}();const o=t.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new h_(t,n,r,i)}}/**
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
 */class gJ{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class vJ{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Be,oe;function yJ(e){switch(e){default:return K();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function N2(e){if(e===void 0)return $r("GRPC error has no .code"),x.UNKNOWN;switch(e){case Be.OK:return x.OK;case Be.CANCELLED:return x.CANCELLED;case Be.UNKNOWN:return x.UNKNOWN;case Be.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Be.INTERNAL:return x.INTERNAL;case Be.UNAVAILABLE:return x.UNAVAILABLE;case Be.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Be.NOT_FOUND:return x.NOT_FOUND;case Be.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Be.ABORTED:return x.ABORTED;case Be.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Be.DATA_LOSS:return x.DATA_LOSS;default:return K()}}(oe=Be||(Be={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _J(){return new TextEncoder}/**
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
 */const wJ=new ks([4294967295,4294967295],0);function AT(e){const t=_J().encode(e),n=new bX;return n.update(t),new Uint8Array(n.digest())}function PT(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ks([n,r],0),new ks([i,o],0)]}class p_{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ll(`Invalid padding: ${n}`);if(r<0)throw new ll(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ll(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new ll(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=ks.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(ks.fromNumber(r)));return i.compare(wJ)===1&&(i=new ks([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=AT(t),[r,i]=PT(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);if(!this.Ae(s))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),s=new p_(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(t){if(this.Te===0)return;const n=AT(t),[r,i]=PT(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);this.Re(s)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class ll extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Op{constructor(t,n,r,i,o){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,uc.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Op(Y.min(),i,new De(ce),Dr(),ne())}}class uc{constructor(t,n,r,i,o){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new uc(r,n,ne(),ne(),ne())}}/**
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
 */class Wf{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class $2{constructor(t,n){this.targetId=t,this.fe=n}}class D2{constructor(t,n,r=Mt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class RT{constructor(){this.ge=0,this.pe=NT(),this.ye=Mt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=ne(),n=ne(),r=ne();return this.pe.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new uc(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=NT()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,ye(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class EJ{constructor(t){this.Le=t,this.ke=new Map,this.qe=Dr(),this.Qe=OT(),this.Ke=new De(ce)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:K()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const o=i.target;if(wy(o))if(r===0){const s=new W(o.path);this.We(n,s,Rt.newNoDocument(s,Y.min()))}else ye(r===1);else{const s=this.Ze(n);if(s!==r){const a=this.Xe(t),l=a?this.et(a,t,s):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=xo(r).toUint8Array()}catch(l){if(l instanceof c2)return Qs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new p_(s,i,o)}catch(l){return Qs(l instanceof ll?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.nt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;t.mightContain(a)||(this.We(n,o,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((o,s)=>{const a=this.Ye(s);if(a){if(o.current&&wy(a.target)){const l=new W(a.target.path);this.qe.get(l)!==null||this.st(s,l)||this.We(s,l,Rt.newNoDocument(l,t))}o.De&&(n.set(s,o.ve()),o.Fe())}});let r=ne();this.Qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.qe.forEach((o,s)=>s.setReadTime(t));const i=new Op(t,n,this.Ke,this.qe,r);return this.qe=Dr(),this.Qe=OT(),this.Ke=new De(ce),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new RT,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Et(ce),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||F("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new RT),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function OT(){return new De(W.comparator)}function NT(){return new De(W.comparator)}const SJ={asc:"ASCENDING",desc:"DESCENDING"},bJ={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TJ={and:"AND",or:"OR"};class IJ{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function by(e,t){return e.useProto3Json||xp(t)?t:{value:t}}function Xd(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function M2(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function CJ(e,t){return Xd(e,t.toTimestamp())}function dr(e){return ye(!!e),Y.fromTimestamp(function(n){const r=Pi(n);return new nt(r.seconds,r.nanos)}(e))}function m_(e,t){return function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function L2(e){const t=Ie.fromString(e);return ye(U2(t)),t}function Ty(e,t){return m_(e.databaseId,t.path)}function fg(e,t){const n=L2(t);if(n.get(1)!==e.databaseId.projectId)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new W(j2(n))}function Iy(e,t){return m_(e.databaseId,t)}function xJ(e){const t=L2(e);return t.length===4?Ie.emptyPath():j2(t)}function Cy(e){return new Ie(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function j2(e){return ye(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function $T(e,t,n){return{name:Ty(e,t),fields:n.value.mapValue.fields}}function kJ(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(u,c){return u.useProto3Json?(ye(c===void 0||typeof c=="string"),Mt.fromBase64String(c||"")):(ye(c===void 0||c instanceof Uint8Array),Mt.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(u){const c=u.code===void 0?x.UNKNOWN:N2(u.code);return new j(c,u.message||"")}(s);n=new D2(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=fg(e,r.document.name),o=dr(r.document.updateTime),s=r.document.createTime?dr(r.document.createTime):Y.min(),a=new _n({mapValue:{fields:r.document.fields}}),l=Rt.newFoundDocument(i,o,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Wf(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=fg(e,r.document),o=r.readTime?dr(r.readTime):Y.min(),s=Rt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Wf([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=fg(e,r.document),o=r.removedTargetIds||[];n=new Wf([],o,i,null)}else{if(!("filter"in t))return K();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new vJ(i,o),a=r.targetId;n=new $2(a,s)}}return n}function AJ(e,t){let n;if(t instanceof lc)n={update:$T(e,t.key,t.value)};else if(t instanceof O2)n={delete:Ty(e,t.key)};else if(t instanceof Lo)n={update:$T(e,t.key,t.data),updateMask:jJ(t.fieldMask)};else{if(!(t instanceof pJ))return K();n={verify:Ty(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof Qd)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Iu)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Cu)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yd)return{fieldPath:s.field.canonicalString(),increment:a.Ie};throw K()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:CJ(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K()}(e,t.precondition)),n}function PJ(e,t){return e&&e.length>0?(ye(t!==void 0),e.map(n=>function(i,o){let s=i.updateTime?dr(i.updateTime):dr(o);return s.isEqual(Y.min())&&(s=dr(o)),new fJ(s,i.transformResults||[])}(n,t))):[]}function RJ(e,t){return{documents:[Iy(e,t.path)]}}function OJ(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Iy(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Iy(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return F2(zn.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Xo(f.field),direction:DJ(f.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=by(e,t.limit);return s!==null&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function NJ(e){let t=xJ(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let o=[];n.where&&(o=function(f){const d=V2(f);return d instanceof zn&&p2(d)?d.getFilters():[d]}(n.where));let s=[];n.orderBy&&(s=function(f){return f.map(d=>function(g){return new Kd(Jo(g.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,xp(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(f){const d=!!f.before,h=f.values||[];return new Gd(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const d=!f.before,h=f.values||[];return new Gd(h,d)}(n.endAt)),JX(t,i,s,o,a,"F",l,u)}function $J(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function V2(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jo(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Jo(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Jo(n.unaryFilter.field);return Ke.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Jo(n.unaryFilter.field);return Ke.create(s,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(e):e.fieldFilter!==void 0?function(n){return Ke.create(Jo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return zn.create(n.compositeFilter.filters.map(r=>V2(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(e):K()}function DJ(e){return SJ[e]}function MJ(e){return bJ[e]}function LJ(e){return TJ[e]}function Xo(e){return{fieldPath:e.canonicalString()}}function Jo(e){return yt.fromServerFormat(e.fieldPath)}function F2(e){return e instanceof Ke?function(n){if(n.op==="=="){if(wT(n.value))return{unaryFilter:{field:Xo(n.field),op:"IS_NAN"}};if(_T(n.value))return{unaryFilter:{field:Xo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wT(n.value))return{unaryFilter:{field:Xo(n.field),op:"IS_NOT_NAN"}};if(_T(n.value))return{unaryFilter:{field:Xo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xo(n.field),op:MJ(n.op),value:n.value}}}(e):e instanceof zn?function(n){const r=n.getFilters().map(i=>F2(i));return r.length===1?r[0]:{compositeFilter:{op:LJ(n.op),filters:r}}}(e):K()}function jJ(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function U2(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class ci{constructor(t,n,r,i,o=Y.min(),s=Y.min(),a=Mt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new ci(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class VJ{constructor(t){this.ut=t}}function FJ(e){const t=NJ({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Sy(t,t.limit,"L"):t}/**
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
 */class UJ{constructor(){this.on=new zJ}addToCollectionParentIndex(t,n){return this.on.add(n),A.resolve()}getCollectionParents(t,n){return A.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return A.resolve()}deleteFieldIndex(t,n){return A.resolve()}deleteAllFieldIndexes(t){return A.resolve()}createTargetIndexes(t,n){return A.resolve()}getDocumentsMatchingTarget(t,n){return A.resolve(null)}getIndexType(t,n){return A.resolve(0)}getFieldIndexes(t,n){return A.resolve([])}getNextCollectionGroupToUpdate(t){return A.resolve(null)}getMinOffset(t,n){return A.resolve(Ai.min())}getMinOffsetFromCollectionGroup(t,n){return A.resolve(Ai.min())}updateCollectionGroup(t,n,r){return A.resolve()}updateIndexEntries(t,n){return A.resolve()}}class zJ{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Et(Ie.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Et(Ie.comparator)).toArray()}}/**
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
 */class Zs{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Zs(0)}static Nn(){return new Zs(-1)}}/**
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
 */class BJ{constructor(){this.changes=new Ia(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Rt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class WJ{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class HJ{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Pl(r.mutation,i,$n.empty(),nt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ne()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ne()){const i=oo();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(o=>{let s=al();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(t,n){const r=oo();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ne()))}populateOverlays(t,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(t,n,r,i){let o=Dr();const s=Al(),a=function(){return Al()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Lo)?o=o.insert(u.key,u):c!==void 0?(s.set(u.key,c.mutation.getFieldMask()),Pl(c.mutation,u,c.mutation.getFieldMask(),nt.now())):s.set(u.key,$n.empty())}),this.recalculateAndSaveOverlays(t,o).next(l=>(l.forEach((u,c)=>s.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new WJ(c,(f=s.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Al();let i=new De((s,a)=>s-a),o=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||$n.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=b2();c.forEach(d=>{if(!o.has(d)){const h=P2(n.get(d),r.get(d));h!==null&&f.set(d,h),o=o.add(d)}}),s.push(this.documentOverlayCache.saveOverlays(t,u,f))}return A.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(s){return W.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):y2(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-o.size):A.resolve(oo());let a=-1,l=o;return s.next(u=>A.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),o.get(c)?A.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,o)).next(()=>this.computeViews(t,l,u,ne())).next(c=>({batchId:a,changes:S2(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new W(n)).next(r=>{let i=al();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const o=n.collectionGroup;let s=al();return this.indexManager.getCollectionParents(t,o).next(a=>A.forEach(a,l=>{const u=function(f,d){return new ac(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(c=>{c.forEach((f,d)=>{s=s.insert(f,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,o,i))).next(s=>{o.forEach((l,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,Rt.newInvalidDocument(c)))});let a=al();return s.forEach((l,u)=>{const c=o.get(l);c!==void 0&&Pl(c.mutation,u,$n.empty(),nt.now()),Ap(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class qJ{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return A.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:dr(i.createTime)}}(n)),A.resolve()}getNamedQuery(t,n){return A.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:FJ(i.bundledQuery),readTime:dr(i.readTime)}}(n)),A.resolve()}}/**
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
 */class GJ{constructor(){this.overlays=new De(W.comparator),this.lr=new Map}getOverlay(t,n){return A.resolve(this.overlays.get(n))}getOverlays(t,n){const r=oo();return A.forEach(n,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,o)=>{this.lt(t,n,o)}),A.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.lr.delete(r)),A.resolve()}getOverlaysForCollection(t,n,r){const i=oo(),o=n.length+1,s=new W(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let o=new De((u,c)=>u-c);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=o.get(u.largestBatchId);c===null&&(c=oo(),o=o.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=oo(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new gJ(n,r));let o=this.lr.get(n);o===void 0&&(o=ne(),this.lr.set(n,o)),this.lr.set(n,o.add(r.key))}}/**
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
 */class g_{constructor(){this.hr=new Et(ot.Pr),this.Ir=new Et(ot.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new ot(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new ot(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new W(new Ie([])),r=new ot(n,t),i=new ot(n,t+1),o=[];return this.Ir.forEachInRange([r,i],s=>{this.dr(s),o.push(s.key)}),o}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new W(new Ie([])),r=new ot(n,t),i=new ot(n,t+1);let o=ne();return this.Ir.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(t){const n=new ot(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ot{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return W.comparator(t.key,n.key)||ce(t.gr,n.gr)}static Tr(t,n){return ce(t.gr,n.gr)||W.comparator(t.key,n.key)}}/**
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
 */class KJ{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Et(ot.Pr)}checkEmpty(t){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const o=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new mJ(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.yr=this.yr.add(new ot(a.key,o)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return A.resolve(s)}lookupMutationBatch(t,n){return A.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),o=i<0?0:i;return A.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),o=[];return this.yr.forEachInRange([r,i],s=>{const a=this.wr(s.gr);o.push(a)}),A.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Et(ce);return n.forEach(i=>{const o=new ot(i,0),s=new ot(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([o,s],a=>{r=r.add(a.gr)})}),A.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let o=r;W.isDocumentKey(o)||(o=o.child(""));const s=new ot(new W(o),0);let a=new Et(ce);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},s),A.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){ye(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return A.forEach(n.mutations,i=>{const o=new ot(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new ot(n,0),i=this.yr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,A.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QJ{constructor(t){this.Cr=t,this.docs=function(){return new De(W.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(t,n){let r=Dr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Rt.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let o=Dr();const s=n.path,a=new W(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||DX($X(c),r)<=0||(i.has(c.key)||Ap(n,c))&&(o=o.insert(c.key,c.mutableCopy()))}return A.resolve(o)}getAllFromCollectionGroup(t,n,r,i){K()}vr(t,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new YJ(this)}getSize(t){return A.resolve(this.size)}}class YJ extends BJ{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),A.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class XJ{constructor(t){this.persistence=t,this.Fr=new Ia(n=>c_(n),f_),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Mr=0,this.Or=new g_,this.targetCount=0,this.Nr=Zs.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(t){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return A.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),A.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new Zs(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,A.resolve()}updateTargetData(t,n){return this.kn(n),A.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(t,n,r){let i=0;const o=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(s),o.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),A.waitFor(o).next(()=>i)}getTargetCount(t){return A.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return A.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),A.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(t,s))}),A.waitFor(o)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),A.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return A.resolve(r)}containsKey(t,n){return A.resolve(this.Or.containsKey(n))}}/**
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
 */class JJ{constructor(t,n){this.Br={},this.overlays={},this.Lr=new s_(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new XJ(this),this.indexManager=new UJ,this.remoteDocumentCache=function(i){return new QJ(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new VJ(n),this.Kr=new qJ(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new GJ,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new KJ(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){F("MemoryPersistence","Starting transaction:",t);const i=new ZJ(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(o=>this.referenceDelegate.Ur(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Wr(t,n){return A.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class ZJ extends LX{constructor(t){super(),this.currentSequenceNumber=t}}class v_{constructor(t){this.persistence=t,this.Gr=new g_,this.zr=null}static jr(t){return new v_(t)}get Hr(){if(this.zr)return this.zr;throw K()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),A.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),A.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(o=>this.Hr.add(o.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hr,r=>{const i=W.fromPath(r);return this.Jr(t,i).next(o=>{o||n.removeEntry(i,Y.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return A.or([()=>A.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class y_{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=ne(),i=ne();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new y_(t,n.fromCache,r,i)}}/**
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
 */class eZ{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class tZ{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const o={result:null};return this.zi(t,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.ji(t,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new eZ;return this.Hi(t,n,s).next(a=>{if(o.result=a,this.$i)return this.Ji(t,n,s,a.size)})}).next(()=>o.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(Qa()<=ie.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Yo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),A.resolve()):(Qa()<=ie.DEBUG&&F("QueryEngine","Query:",Yo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Qa()<=ie.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Yo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,fr(n))):A.resolve())}zi(t,n){if(TT(n))return A.resolve(null);let r=fr(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sy(n,null,"F"),r=fr(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const s=ne(...o);return this.Gi.getDocuments(t,s).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,s,l.readTime)?this.zi(t,Sy(n,null,"F")):this.Xi(t,u,n,l)}))})))}ji(t,n,r,i){return TT(n)||i.isEqual(Y.min())?A.resolve(null):this.Gi.getDocuments(t,r).next(o=>{const s=this.Yi(n,o);return this.Zi(n,s,r,i)?A.resolve(null):(Qa()<=ie.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yo(n)),this.Xi(t,s,n,NX(i,-1)).next(a=>a))})}Yi(t,n){let r=new Et(w2(t));return n.forEach((i,o)=>{Ap(t,o)&&(r=r.add(o))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const o=t.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Hi(t,n,r){return Qa()<=ie.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Yo(n)),this.Gi.getDocumentsMatchingQuery(t,n,Ai.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class nZ{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new De(ce),this.ns=new Ia(o=>c_(o),f_),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new HJ(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function rZ(e,t,n,r){return new nZ(e,t,n,r)}async function z2(e,t){const n=J(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=ne();for(const u of i){s.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of o){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:s,addedBatchIds:a}))})})}function iZ(e,t){const n=J(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,d=f.keys();let h=A.resolve();return d.forEach(g=>{h=h.next(()=>c.getEntry(l,g)).next(m=>{const _=u.docVersions.get(g);ye(_!==null),m.version.compareTo(_)<0&&(f.applyToRemoteDocument(m,u),m.isValidDocument()&&(m.setReadTime(u.commitVersion),c.addEntry(m)))})}),h.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,t,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function B2(e){const t=J(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function oZ(e,t){const n=J(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];t.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(n.qr.removeMatchingKeys(o,c.removedDocuments,f).next(()=>n.qr.addMatchingKeys(o,c.addedDocuments,f)));let h=d.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(f)!==null?h=h.withResumeToken(Mt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(c.resumeToken,r)),i=i.insert(f,h),function(m,_,v){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,h,c)&&a.push(n.qr.updateTargetData(o,h))});let l=Dr(),u=ne();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,c))}),a.push(sZ(o,s,t.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(Y.min())){const c=n.qr.getLastRemoteSnapshotVersion(o).next(f=>n.qr.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.ts=i,o))}function sZ(e,t,n){let r=ne(),i=ne();return n.forEach(o=>r=r.add(o)),t.getEntries(e,r).next(o=>{let s=Dr();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(t.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),s=s.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:s,cs:i}})}function aZ(e,t){const n=J(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function lZ(e,t){const n=J(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(o=>o?(i=o,A.resolve(i)):n.qr.allocateTargetId(r).next(s=>(i=new ci(t,s,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function xy(e,t,n){const r=J(e),i=r.ts.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!sc(s))throw s;F("LocalStore",`Failed to update sequence numbers for target ${t}: ${s}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function DT(e,t,n){const r=J(e);let i=Y.min(),o=ne();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,u,c){const f=J(l),d=f.ns.get(c);return d!==void 0?A.resolve(f.ts.get(d)):f.qr.getTargetData(u,c)}(r,s,fr(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.es.getDocumentsMatchingQuery(s,t,n?i:Y.min(),n?o:ne())).next(a=>(uZ(r,eJ(t),a),{documents:a,ls:o})))}function uZ(e,t,n){let r=e.rs.get(t)||Y.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),e.rs.set(t,r)}class MT{constructor(){this.activeTargetIds=sJ()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cZ{constructor(){this.eo=new MT,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new MT,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class fZ{ro(t){}shutdown(){}}/**
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
 */class LT{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xc=null;function dg(){return Xc===null?Xc=function(){return 268435456+Math.round(2147483648*Math.random())}():Xc++,"0x"+Xc.toString(16)}/**
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
 */const dZ={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hZ{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
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
 */const xt="WebChannelConnection";class pZ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${o}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get yo(){return!1}wo(n,r,i,o,s){const a=dg(),l=this.So(n,r);F("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,o,s),this.Do(n,l,u,i).then(c=>(F("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Qs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,o,s,a){return this.wo(n,r,i,o,s)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ba}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}So(n,r){const i=dZ[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const o=dg();return new Promise((s,a)=>{const l=new SX;l.setWithCredentials(!0),l.listenOnce(wX.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case cg.NO_ERROR:const c=l.getResponseJson();F(xt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(c)),s(c);break;case cg.TIMEOUT:F(xt,`RPC '${t}' ${o} timed out`),a(new j(x.DEADLINE_EXCEEDED,"Request time out"));break;case cg.HTTP_ERROR:const f=l.getStatus();if(F(xt,`RPC '${t}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const h=d==null?void 0:d.error;if(h&&h.status&&h.message){const g=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(v)>=0?v:x.UNKNOWN}(h.status);a(new j(g,h.message))}else a(new j(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new j(x.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F(xt,`RPC '${t}' ${o} completed.`)}});const u=JSON.stringify(i);F(xt,`RPC '${t}' ${o} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(t,n,r){const i=dg(),o=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=yX(),a=_X(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=o.join("");F(xt,`Creating RPC '${t}' stream ${i}: ${c}`,l);const f=s.createWebChannel(c,l);let d=!1,h=!1;const g=new hZ({co:_=>{h?F(xt,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(d||(F(xt,`Opening RPC '${t}' stream ${i} transport.`),f.open(),d=!0),F(xt,`RPC '${t}' stream ${i} sending:`,_),f.send(_))},lo:()=>f.close()}),m=(_,v,p)=>{_.listen(v,y=>{try{p(y)}catch(E){setTimeout(()=>{throw E},0)}})};return m(f,Kc.EventType.OPEN,()=>{h||F(xt,`RPC '${t}' stream ${i} transport opened.`)}),m(f,Kc.EventType.CLOSE,()=>{h||(h=!0,F(xt,`RPC '${t}' stream ${i} transport closed`),g.Ro())}),m(f,Kc.EventType.ERROR,_=>{h||(h=!0,Qs(xt,`RPC '${t}' stream ${i} transport errored:`,_),g.Ro(new j(x.UNAVAILABLE,"The operation could not be completed")))}),m(f,Kc.EventType.MESSAGE,_=>{var v;if(!h){const p=_.data[0];ye(!!p);const y=p,E=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(E){F(xt,`RPC '${t}' stream ${i} received error:`,E);const S=E.status;let I=function($){const R=Be[$];if(R!==void 0)return N2(R)}(S),T=E.message;I===void 0&&(I=x.INTERNAL,T="Unknown error status: "+S+" with message "+E.message),h=!0,g.Ro(new j(I,T)),f.close()}else F(xt,`RPC '${t}' stream ${i} received:`,p),g.Vo(p)}}),m(a,EX.STAT_EVENT,_=>{_.stat===hT.PROXY?F(xt,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===hT.NOPROXY&&F(xt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}function hg(){return typeof document<"u"?document:null}/**
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
 */function Np(e){return new IJ(e,!0)}/**
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
 */class W2{constructor(t,n,r=1e3,i=1.5,o=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=o,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class H2{constructor(t,n,r,i,o,s,a,l){this.si=t,this.Ko=r,this.$o=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new W2(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===x.RESOURCE_EXHAUSTED?($r(n.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new j(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mZ extends H2{constructor(t,n,r,i,o,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=kJ(this.serializer,t),r=function(o){if(!("targetChange"in o))return Y.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?Y.min():s.readTime?dr(s.readTime):Y.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=Cy(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=wy(l)?{documents:RJ(o,l)}:{query:OJ(o,l)},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=M2(o,s.resumeToken);const u=by(o,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(Y.min())>0){a.readTime=Xd(o,s.snapshotVersion.toTimestamp());const u=by(o,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=$J(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=Cy(this.serializer),n.removeTarget=t,this.e_(n)}}class gZ extends H2{constructor(t,n,r,i,o,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(ye(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=PJ(t.writeResults,t.commitTime),r=dr(t.commitTime);return this.listener.I_(r,n)}return ye(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Cy(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>AJ(this.serializer,r))};this.e_(n)}}/**
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
 */class vZ extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.wo(t,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(x.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Co(t,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(x.UNKNOWN,o.toString())})}terminate(){this.d_=!0}}class yZ{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?($r(n),this.f_=!1):F("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class _Z{constructor(t,n,r,i,o){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=o,this.F_.ro(s=>{r.enqueueAndForget(async()=>{jo(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=J(l);u.C_.add(4),await cc(u),u.M_.set("Unknown"),u.C_.delete(4),await $p(u)}(this))})}),this.M_=new yZ(r,i)}}async function $p(e){if(jo(e))for(const t of e.v_)await t(!0)}async function cc(e){for(const t of e.v_)await t(!1)}function q2(e,t){const n=J(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),E_(n)?w_(n):Ca(n).Ho()&&__(n,t))}function G2(e,t){const n=J(e),r=Ca(n);n.D_.delete(t),r.Ho()&&K2(n,t),n.D_.size===0&&(r.Ho()?r.Zo():jo(n)&&n.M_.set("Unknown"))}function __(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Y.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ca(e).u_(t)}function K2(e,t){e.x_.Oe(t),Ca(e).c_(t)}function w_(e){e.x_=new EJ({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ca(e).start(),e.M_.g_()}function E_(e){return jo(e)&&!Ca(e).jo()&&e.D_.size>0}function jo(e){return J(e).C_.size===0}function Q2(e){e.x_=void 0}async function wZ(e){e.D_.forEach((t,n)=>{__(e,t)})}async function EZ(e,t){Q2(e),E_(e)?(e.M_.w_(t),w_(e)):e.M_.set("Unknown")}async function SZ(e,t,n){if(e.M_.set("Online"),t instanceof D2&&t.state===2&&t.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.D_.delete(a),i.x_.removeTarget(a))}(e,t)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Jd(e,r)}else if(t instanceof Wf?e.x_.$e(t):t instanceof $2?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(Y.min()))try{const r=await B2(e.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.x_.it(s);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=o.D_.get(u);c&&o.D_.set(u,c.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,u)=>{const c=o.D_.get(l);if(!c)return;o.D_.set(l,c.withResumeToken(Mt.EMPTY_BYTE_STRING,c.snapshotVersion)),K2(o,l);const f=new ci(c.target,l,u,c.sequenceNumber);__(o,f)}),o.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Jd(e,r)}}async function Jd(e,t,n){if(!sc(t))throw t;e.C_.add(1),await cc(e),e.M_.set("Offline"),n||(n=()=>B2(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await $p(e)})}function Y2(e,t){return t().catch(n=>Jd(e,n,t))}async function Dp(e){const t=J(e),n=Ri(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;bZ(t);)try{const i=await aZ(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,TZ(t,i)}catch(i){await Jd(t,i)}X2(t)&&J2(t)}function bZ(e){return jo(e)&&e.b_.length<10}function TZ(e,t){e.b_.push(t);const n=Ri(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function X2(e){return jo(e)&&!Ri(e).jo()&&e.b_.length>0}function J2(e){Ri(e).start()}async function IZ(e){Ri(e).E_()}async function CZ(e){const t=Ri(e);for(const n of e.b_)t.P_(n.mutations)}async function xZ(e,t,n){const r=e.b_.shift(),i=h_.from(r,t,n);await Y2(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Dp(e)}async function kZ(e,t){t&&Ri(e).h_&&await async function(r,i){if(function(s){return yJ(s)&&s!==x.ABORTED}(i.code)){const o=r.b_.shift();Ri(r).Yo(),await Y2(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Dp(r)}}(e,t),X2(e)&&J2(e)}async function jT(e,t){const n=J(e);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=jo(n);n.C_.add(3),await cc(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await $p(n)}async function AZ(e,t){const n=J(e);t?(n.C_.delete(2),await $p(n)):t||(n.C_.add(2),await cc(n),n.M_.set("Unknown"))}function Ca(e){return e.O_||(e.O_=function(n,r,i){const o=J(n);return o.A_(),new mZ(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(e.datastore,e.asyncQueue,{ho:wZ.bind(null,e),Io:EZ.bind(null,e),a_:SZ.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),E_(e)?w_(e):e.M_.set("Unknown")):(await e.O_.stop(),Q2(e))})),e.O_}function Ri(e){return e.N_||(e.N_=function(n,r,i){const o=J(n);return o.A_(),new gZ(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(e.datastore,e.asyncQueue,{ho:IZ.bind(null,e),Io:kZ.bind(null,e),T_:CZ.bind(null,e),I_:xZ.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Dp(e)):(await e.N_.stop(),e.b_.length>0&&(F("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
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
 */class S_{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new S_(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function b_(e,t){if($r("AsyncQueue",`${t}: ${e}`),sc(e))return new j(x.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class As{constructor(t){this.comparator=t?(n,r)=>t(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=al(),this.sortedSet=new De(this.comparator)}static emptySet(t){return new As(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof As)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new As;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class VT{constructor(){this.B_=new De(W.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):K():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ea{constructor(t,n,r,i,o,s,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ea(t,n,As.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kp(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class PZ{constructor(){this.k_=void 0,this.listeners=[]}}class RZ{constructor(){this.queries=new Ia(t=>_2(t),kp),this.onlineState="Unknown",this.q_=new Set}}async function Z2(e,t){const n=J(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new PZ),i)try{o.k_=await n.onListen(r)}catch(s){const a=b_(s,`Initialization of query '${Yo(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,o),o.listeners.push(t),t.Q_(n.onlineState),o.k_&&t.K_(o.k_)&&T_(n)}async function eO(e,t){const n=J(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.listeners.indexOf(t);s>=0&&(o.listeners.splice(s,1),i=o.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function OZ(e,t){const n=J(e);let r=!1;for(const i of t){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.listeners)a.K_(i)&&(r=!0);s.k_=i}}r&&T_(n)}function NZ(e,t,n){const r=J(e),i=r.queries.get(t);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(t)}function T_(e){e.q_.forEach(t=>{t.next()})}class tO{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ea(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=ea.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
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
 */class nO{constructor(t){this.key=t}}class rO{constructor(t){this.key=t}}class $Z{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ne(),this.mutatedKeys=ne(),this._a=w2(t),this.aa=new As(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new VT,i=n?n.aa:this.aa;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,f)=>{const d=i.get(c),h=Ap(this.query,f)?f:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let _=!1;d&&h?d.data.isEqual(h.data)?g!==m&&(r.track({type:3,doc:h}),_=!0):this.ha(d,h)||(r.track({type:2,doc:h}),_=!0,(l&&this._a(h,l)>0||u&&this._a(h,u)<0)&&(a=!0)):!d&&h?(r.track({type:0,doc:h}),_=!0):d&&!h&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(h?(s=s.add(h),o=m?o.add(c):o.delete(c)):(s=s.delete(c),o=o.delete(c)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const c=this.query.limitType==="F"?s.last():s.first();s=s.delete(c.key),o=o.delete(c.key),r.track({type:1,doc:c})}return{aa:s,la:r,Zi:a,mutatedKeys:o}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const o=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((c,f)=>function(h,g){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return m(h)-m(g)}(c.type,f.type)||this._a(c.doc,f.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,s.length!==0||u?{snapshot:new ea(this.query,t.aa,o,s,t.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new VT,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=ne(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new rO(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new nO(r))}),n}da(t){this.ia=t.ls,this.oa=ne();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return ea.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class DZ{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class MZ{constructor(t){this.key=t,this.Ra=!1}}class LZ{constructor(t,n,r,i,o,s){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new Ia(a=>_2(a),kp),this.fa=new Map,this.ga=new Set,this.pa=new De(W.comparator),this.ya=new Map,this.wa=new g_,this.Sa={},this.ba=new Map,this.Da=Zs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function jZ(e,t){const n=KZ(e);let r,i;const o=n.ma.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Aa();else{const s=await lZ(n.localStore,fr(t)),a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await VZ(n,t,r,a==="current",s.resumeToken),n.isPrimaryClient&&q2(n.remoteStore,s)}return i}async function VZ(e,t,n,r,i){e.va=(f,d,h)=>async function(m,_,v,p){let y=_.view.ca(v);y.Zi&&(y=await DT(m.localStore,_.query,!1).then(({documents:T})=>_.view.ca(T,y)));const E=p&&p.targetChanges.get(_.targetId),S=p&&p.targetMismatches.get(_.targetId)!=null,I=_.view.applyChanges(y,m.isPrimaryClient,E,S);return UT(m,_.targetId,I.Ta),I.snapshot}(e,f,d,h);const o=await DT(e.localStore,t,!0),s=new $Z(t,o.ls),a=s.ca(o.documents),l=uc.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=s.applyChanges(a,e.isPrimaryClient,l);UT(e,n,u.Ta);const c=new DZ(t,n,s);return e.ma.set(t,c),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),u.snapshot}async function FZ(e,t){const n=J(e),r=n.ma.get(t),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(o=>!kp(o,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xy(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),G2(n.remoteStore,r.targetId),ky(n,r.targetId)}).catch(oc)):(ky(n,r.targetId),await xy(n.localStore,r.targetId,!0))}async function UZ(e,t,n){const r=QZ(e);try{const i=await function(s,a){const l=J(s),u=nt.now(),c=a.reduce((h,g)=>h.add(g.key),ne());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",h=>{let g=Dr(),m=ne();return l.ss.getEntries(h,c).next(_=>{g=_,g.forEach((v,p)=>{p.isValidDocument()||(m=m.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(h,g)).next(_=>{f=_;const v=[];for(const p of a){const y=hJ(p,f.get(p.key).overlayedDocument);y!=null&&v.push(new Lo(p.key,y,f2(y.value.mapValue),Cr.exists(!0)))}return l.mutationQueue.addMutationBatch(h,u,v,a)}).next(_=>{d=_;const v=_.applyToLocalDocumentSet(f,m);return l.documentOverlayCache.saveOverlays(h,_.batchId,v)})}).then(()=>({batchId:d.batchId,changes:S2(f)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let u=s.Sa[s.currentUser.toKey()];u||(u=new De(ce)),u=u.insert(a,l),s.Sa[s.currentUser.toKey()]=u}(r,i.batchId,n),await fc(r,i.changes),await Dp(r.remoteStore)}catch(i){const o=b_(i,"Failed to persist write");n.reject(o)}}async function iO(e,t){const n=J(e);try{const r=await oZ(n.localStore,t);t.targetChanges.forEach((i,o)=>{const s=n.ya.get(o);s&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.Ra=!0:i.modifiedDocuments.size>0?ye(s.Ra):i.removedDocuments.size>0&&(ye(s.Ra),s.Ra=!1))}),await fc(n,r,t)}catch(r){await oc(r)}}function FT(e,t,n){const r=J(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((o,s)=>{const a=s.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=J(s);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const d of f.listeners)d.Q_(a)&&(u=!0)}),u&&T_(l)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zZ(e,t,n){const r=J(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ya.get(t),o=i&&i.key;if(o){let s=new De(W.comparator);s=s.insert(o,Rt.newNoDocument(o,Y.min()));const a=ne().add(o),l=new Op(Y.min(),new Map,new De(ce),s,a);await iO(r,l),r.pa=r.pa.remove(o),r.ya.delete(t),I_(r)}else await xy(r.localStore,t,!1).then(()=>ky(r,t,n)).catch(oc)}async function BZ(e,t){const n=J(e),r=t.batch.batchId;try{const i=await iZ(n.localStore,t);sO(n,r,null),oO(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fc(n,i)}catch(i){await oc(i)}}async function WZ(e,t,n){const r=J(e);try{const i=await function(s,a){const l=J(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(ye(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);sO(r,t,n),oO(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await fc(r,i)}catch(i){await oc(i)}}function oO(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function sO(e,t,n){const r=J(e);let i=r.Sa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(n?o.reject(n):o.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function ky(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||aO(e,r)})}function aO(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(G2(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),I_(e))}function UT(e,t,n){for(const r of n)r instanceof nO?(e.wa.addReference(r.key,t),HZ(e,r)):r instanceof rO?(F("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||aO(e,r.key)):K()}function HZ(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(F("SyncEngine","New document in limbo: "+n),e.ga.add(r),I_(e))}function I_(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new W(Ie.fromString(t)),r=e.Da.next();e.ya.set(r,new MZ(n)),e.pa=e.pa.insert(n,r),q2(e.remoteStore,new ci(fr(d_(n.path)),r,"TargetPurposeLimboResolution",s_._e))}}async function fc(e,t,n){const r=J(e),i=[],o=[],s=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{s.push(r.va(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=y_.Qi(l.targetId,u);o.push(c)}}))}),await Promise.all(s),r.Va.a_(i),await async function(l,u){const c=J(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>A.forEach(u,d=>A.forEach(d.ki,h=>c.persistence.referenceDelegate.addReference(f,d.targetId,h)).next(()=>A.forEach(d.qi,h=>c.persistence.referenceDelegate.removeReference(f,d.targetId,h)))))}catch(f){if(!sc(f))throw f;F("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const h=c.ts.get(d),g=h.snapshotVersion,m=h.withLastLimboFreeSnapshotVersion(g);c.ts=c.ts.insert(d,m)}}}(r.localStore,o))}async function qZ(e,t){const n=J(e);if(!n.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const r=await z2(n.localStore,t);n.currentUser=t,function(o,s){o.ba.forEach(a=>{a.forEach(l=>{l.reject(new j(x.CANCELLED,s))})}),o.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await fc(n,r._s)}}function GZ(e,t){const n=J(e),r=n.ya.get(t);if(r&&r.Ra)return ne().add(r.key);{let i=ne();const o=n.fa.get(t);if(!o)return i;for(const s of o){const a=n.ma.get(s);i=i.unionWith(a.view.ua)}return i}}function KZ(e){const t=J(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=iO.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=GZ.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zZ.bind(null,t),t.Va.a_=OZ.bind(null,t.eventManager),t.Va.Fa=NZ.bind(null,t.eventManager),t}function QZ(e){const t=J(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=BZ.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=WZ.bind(null,t),t}class zT{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Np(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return rZ(this.persistence,new tZ,t.initialUser,this.serializer)}createPersistence(t){return new JJ(v_.jr,this.serializer)}createSharedClientState(t){return new cZ}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YZ{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>FT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qZ.bind(null,this.syncEngine),await AZ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new RZ}()}createDatastore(t){const n=Np(t.databaseInfo.databaseId),r=function(o){return new pZ(o)}(t.databaseInfo);return function(o,s,a,l){return new vZ(o,s,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,o,s,a){return new _Z(r,i,o,s,a)}(this.localStore,this.datastore,t.asyncQueue,n=>FT(this.syncEngine,n,0),function(){return LT.D()?new LT:new fZ}())}createSyncEngine(t,n){return function(i,o,s,a,l,u,c){const f=new LZ(i,o,s,a,l,u);return c&&(f.Ca=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=J(n);F("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await cc(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class lO{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):$r("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class XZ{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=At.UNAUTHENTICATED,this.clientId=l2.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{F("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(F("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=b_(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function pg(e,t){e.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await z2(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function BT(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ZZ(e);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>jT(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,o)=>jT(t.remoteStore,o)),e._onlineComponents=t}function JZ(e){return e.name==="FirebaseError"?e.code===x.FAILED_PRECONDITION||e.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function ZZ(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await pg(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!JZ(n))throw n;Qs("Error using user provided cache. Falling back to memory cache: "+n),await pg(e,new zT)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await pg(e,new zT);return e._offlineComponents}async function uO(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await BT(e,e._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await BT(e,new YZ))),e._onlineComponents}function eee(e){return uO(e).then(t=>t.syncEngine)}async function cO(e){const t=await uO(e),n=t.eventManager;return n.onListen=jZ.bind(null,t.syncEngine),n.onUnlisten=FZ.bind(null,t.syncEngine),n}function tee(e,t,n={}){const r=new Ir;return e.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const c=new lO({next:d=>{s.enqueueAndForget(()=>eO(o,f));const h=d.docs.has(a);!h&&d.fromCache?u.reject(new j(x.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&l&&l.source==="server"?u.reject(new j(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new tO(d_(a.path),c,{includeMetadataChanges:!0,J_:!0});return Z2(o,f)}(await cO(e),e.asyncQueue,t,n,r)),r.promise}function nee(e,t,n={}){const r=new Ir;return e.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const c=new lO({next:d=>{s.enqueueAndForget(()=>eO(o,f)),d.fromCache&&l.source==="server"?u.reject(new j(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new tO(a,c,{includeMetadataChanges:!0,J_:!0});return Z2(o,f)}(await cO(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function fO(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */function dO(e,t,n){if(!n)throw new j(x.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ree(e,t,n,r){if(t===!0&&r===!0)throw new j(x.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function HT(e){if(!W.isDocumentKey(e))throw new j(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function qT(e){if(W.isDocumentKey(e))throw new j(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Mp(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":K()}function Ao(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new j(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mp(e);throw new j(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class GT{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new j(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new j(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ree("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fO((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Lp{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new GT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new j(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new GT(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TX;switch(r.type){case"firstParty":return new kX(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=WT.get(n);r&&(F("ComponentProvider","Removing Datastore"),WT.delete(n),r.terminate())}(this),Promise.resolve()}}function iee(e,t,n,r={}){var i;const o=(e=Ao(e,Lp))._getSettings(),s=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=At.MOCK_USER;else{a=$q(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new j(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new At(u)}e._authCredentials=new IX(new a2(a,l))}}/**
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
 */class xa{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new xa(this.firestore,t,this._query)}}class Jt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jt(this.firestore,t,this._key)}}class Ii extends xa{constructor(t,n,r){super(t,n,d_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jt(this.firestore,null,new W(t))}withConverter(t){return new Ii(this.firestore,t,this._path)}}function hO(e,t,...n){if(e=zt(e),dO("collection","path",t),e instanceof Lp){const r=Ie.fromString(t,...n);return qT(r),new Ii(e,null,r)}{if(!(e instanceof Jt||e instanceof Ii))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ie.fromString(t,...n));return qT(r),new Ii(e.firestore,null,r)}}function oee(e,t,...n){if(e=zt(e),arguments.length===1&&(t=l2.newId()),dO("doc","path",t),e instanceof Lp){const r=Ie.fromString(t,...n);return HT(r),new Jt(e,null,new W(r))}{if(!(e instanceof Jt||e instanceof Ii))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ie.fromString(t,...n));return HT(r),new Jt(e.firestore,e instanceof Ii?e.converter:null,new W(r))}}/**
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
 */class see{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new W2(this,"async_queue_retry"),this.iu=()=>{const n=hg();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=hg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=hg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Ir;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!sc(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw $r("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=S_.createAndSchedule(this,t,n,r,o=>this.au(o));return this.Xa.push(i),i}su(){this.eu&&K()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class jp extends Lp{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new see}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pO(this),this._firestoreClient.terminate()}}function aee(e,t){const n=typeof e=="object"?e:bP(),r=typeof e=="string"?e:t||"(default)",i=x1(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Oq("firestore");o&&iee(i,...o)}return i}function C_(e){return e._firestoreClient||pO(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function pO(e){var t,n,r;const i=e._freezeSettings(),o=function(a,l,u,c){return new FX(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,fO(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new XZ(e._authCredentials,e._appCheckCredentials,e._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class ta{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ta(Mt.fromBase64String(t))}catch(n){throw new j(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ta(Mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class x_{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new j(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class mO{constructor(t){this._methodName=t}}/**
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
 */class k_{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new j(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new j(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ce(this._lat,t._lat)||ce(this._long,t._long)}}/**
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
 */const lee=/^__.*__$/;class uee{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Lo(t,this.data,this.fieldMask,n,this.fieldTransforms):new lc(t,this.data,n,this.fieldTransforms)}}function gO(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class A_{constructor(t,n,r,i,o,s){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Pu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new A_(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Zd(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(gO(this.Iu)&&lee.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class cee{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Np(t)}pu(t,n,r,i=!1){return new A_({Iu:t,methodName:n,gu:r,path:yt.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vO(e){const t=e._freezeSettings(),n=Np(e._databaseId);return new cee(e._databaseId,!!t.ignoreUndefinedProperties,n)}function fee(e,t,n,r,i,o={}){const s=e.pu(o.merge||o.mergeFields?2:0,t,n,i);wO("Data must be an object, but it was:",s,r);const a=yO(r,s);let l,u;if(o.merge)l=new $n(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const c=[];for(const f of o.mergeFields){const d=hee(t,f,n);if(!s.contains(d))throw new j(x.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);mee(c,d)||c.push(d)}l=new $n(c),u=s.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=s.fieldTransforms;return new uee(new _n(a),l,u)}function dee(e,t,n,r=!1){return P_(n,e.pu(r?4:3,t))}function P_(e,t){if(_O(e=zt(e)))return wO("Unsupported field value:",t,e),yO(e,t);if(e instanceof mO)return function(r,i){if(!gO(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=P_(a,i.Vu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(e,t)}return function(r,i){if((r=zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return aJ(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:Xd(i.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xd(i.serializer,o)}}if(r instanceof k_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ta)return{bytesValue:M2(i.serializer,r._byteString)};if(r instanceof Jt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:m_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Mp(r)}`)}(e,t)}function yO(e,t){const n={};return u2(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ta(e,(r,i)=>{const o=P_(i,t.Eu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function _O(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof nt||e instanceof k_||e instanceof ta||e instanceof Jt||e instanceof mO)}function wO(e,t,n){if(!_O(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Mp(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function hee(e,t,n){if((t=zt(t))instanceof x_)return t._internalPath;if(typeof t=="string")return EO(e,t);throw Zd("Field path arguments must be of type string or ",e,!1,void 0,n)}const pee=new RegExp("[~\\*/\\[\\]]");function EO(e,t,n){if(t.search(pee)>=0)throw Zd(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new x_(...t.split("."))._internalPath}catch{throw Zd(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Zd(e,t,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new j(x.INVALID_ARGUMENT,a+e+l)}function mee(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class SO{constructor(t,n,r,i,o){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new gee(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(bO("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gee extends SO{data(){return super.data()}}function bO(e,t){return typeof t=="string"?EO(e,t):t instanceof x_?t._internalPath:t._delegate._internalPath}/**
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
 */function vee(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new j(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class R_{}class yee extends R_{}function _ee(e,t,...n){let r=[];t instanceof R_&&r.push(t),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof N_).length,a=o.filter(l=>l instanceof O_).length;if(s>1||s>0&&a>0)throw new j(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class O_ extends yee{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new O_(t,n,r)}_apply(t){const n=this._parse(t);return TO(t._query,n),new xa(t.firestore,t.converter,Ey(t._query,n))}_parse(t){const n=vO(t.firestore);return function(o,s,a,l,u,c,f){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new j(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){QT(f,c);const h=[];for(const g of f)h.push(KT(l,o,g));d={arrayValue:{values:h}}}else d=KT(l,o,f)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||QT(f,c),d=dee(a,s,f,c==="in"||c==="not-in");return Ke.create(u,c,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class N_ extends R_{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new N_(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)TO(s,l),s=Ey(s,l)}(t._query,n),new xa(t.firestore,t.converter,Ey(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function KT(e,t,n){if(typeof(n=zt(n))=="string"){if(n==="")throw new j(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!y2(t)&&n.indexOf("/")!==-1)throw new j(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ie.fromString(n));if(!W.isDocumentKey(r))throw new j(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yT(e,new W(r))}if(n instanceof Jt)return yT(e,n._key);throw new j(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mp(n)}.`)}function QT(e,t){if(!Array.isArray(e)||e.length===0)throw new j(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function TO(e,t){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new j(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new j(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class wee{convertValue(t,n="none"){switch(ko(t)){case 0:return null;case 1:return t.booleanValue;case 2:return We(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(xo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw K()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Ta(t,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(t){return new k_(We(t.latitude),We(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=l_(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Su(t));default:return null}}convertTimestamp(t){const n=Pi(t);return new nt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Ie.fromString(t);ye(U2(r));const i=new bu(r.get(1),r.get(3)),o=new W(r.popFirst(5));return i.isEqual(n)||$r(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function Eee(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class ul{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class IO extends SO{constructor(t,n,r,i,o,s){super(t,n,r,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Hf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(bO("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hf extends IO{data(t={}){return super.data(t)}}class See{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new ul(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Hf(this._firestore,this._userDataWriter,r.key,r,new ul(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new Hf(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ul(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new Hf(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ul(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),c=s.indexOf(a.doc.key)),{type:bee(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bee(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function Tee(e){e=Ao(e,Jt);const t=Ao(e.firestore,jp);return tee(C_(t),e._key).then(n=>kee(t,e,n))}class CO extends wee{constructor(t){super(),this.firestore=t}convertBytes(t){return new ta(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}function Iee(e){e=Ao(e,xa);const t=Ao(e.firestore,jp),n=C_(t),r=new CO(t);return vee(e._query),nee(n,e._query).then(i=>new See(t,r,e,i))}function Cee(e,t,n){e=Ao(e,Jt);const r=Ao(e.firestore,jp),i=Eee(e.converter,t,n);return xee(r,[fee(vO(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Cr.none())])}function xee(e,t){return function(r,i){const o=new Ir;return r.asyncQueue.enqueueAndForget(async()=>UZ(await eee(r),i,o)),o.promise}(C_(e),t)}function kee(e,t,n){const r=n.docs.get(t._key),i=new CO(e);return new IO(e,i,t._key,r,new ul(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){ba=i})(_a),Gs(new So("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new jp(new CX(r.getProvider("auth-internal")),new PX(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new j(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bu(u.options.projectId,c)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Ti(pT,"4.4.0",t),Ti(pT,"4.4.0","esm2017")})();const Aee={apiKey:"AIzaSyAyH75EeQs-whvwD_aO6mKbcaLNbAAUQe8",authDomain:"sandra-sanchez-art.firebaseapp.com",projectId:"sandra-sanchez-art",storageBucket:"sandra-sanchez-art.appspot.com",messagingSenderId:"490365144817",appId:"1:490365144817:web:f1cfc1439ab5f515d4e350",measurementId:"G-FVK28QXSKK"},xO=SP(Aee),kO=aee(xO),AO=new yr;AO.setCustomParameters({prompt:"select_account"});const dc=vY(xO),Pee=()=>CQ(dc,AO),$_=async(e,t={})=>{const n=hO(kO,"users"),r=oee(n,e.uid),i=await Tee(r);if(!i.exists()){const{email:o,displayName:s}=e,a=new Date;try{await Cee(r,{displayName:s,email:o,createdAt:a,...t})}catch(l){console.log(`Whoops! Looks like there was an error creating the user: ${l}`)}}return console.log(r),console.log(i),console.log(i.data()),r},Ree=async()=>{const e=hO(kO,"categories"),t=_ee(e);return(await Iee(t)).docs.reduce((i,o)=>{const{categoryName:s,items:a}=o.data();return i[s.toLowerCase()]=a,i},{})},Oee=async(e,t)=>{if(!(!e||!t))return await tQ(dc,e,t)},Nee=async(e,t)=>{if(!(!e||!t))return await eQ(dc,e,t)},$ee=e=>iQ(dc,e),Dee=()=>oQ(dc),Vp=b.createContext({currentUser:null,setCurrentUser:()=>null}),Mee=({children:e})=>{const[t,n]=b.useState(null),r={currentUser:t,setCurrentUser:n};return b.useEffect(()=>$ee(o=>{o&&$_(o),n(o)}),[]),w.jsx(Vp.Provider,{value:r,children:e})},Lee=(e,t,n,r,i,o)=>e.find(a=>a.id===t.id&&a.selectedSize===n)?e.map(a=>a.id===t.id&&a.selectedSize===n?{...a,quantity:a.quantity+i}:a):[...e,{...t,quantity:i,selectedSize:n,itemPrice:r,key:o}],jee=(e,t,n,r)=>e.find(o=>o.id===t.id&&o.selectedSize===n&&o.key===r)?e.map(o=>o.id===t.id&&o.selectedSize===n?{...o,quantity:o.quantity+1}:o):[...e,{...t,quantity:1}],Vee=(e,t,n,r)=>{const i=e.find(o=>o.id===t.id&&o.selectedSize===n&&o.key===t.key);return i&&i.quantity===1?e.filter(o=>o.key!==r):e.map(o=>o.key===r?{...o,quantity:o.quantity-1}:o)},Fee=(e,t,n)=>e.filter(r=>r.id!==t.id&&r.key!==t.key),Br=b.createContext({cartItems:[],setCartItems:()=>{},addProductAndQuantityToCart:()=>{},addOneItemToCart:()=>{},removeOneItemFromCart:()=>{},clearItemFromCart:()=>{},cartTotal:0,cartCount:0,cartItemIsAdded:!1,setCartItemIsAdded:()=>{},isCartOpen:!1,setIsCartOpen:()=>{}}),Uee=({children:e})=>{const[t,n]=b.useState([]),[r,i]=b.useState(!1),[o,s]=b.useState(0),[a,l]=b.useState(0),[u,c]=b.useState(!1),f=(_,v,p,y,E)=>n(Lee(t,_,v,p,y,E)),d=(_,v,p)=>n(jee(t,_,v,p)),h=(_,v,p)=>n(Vee(t,_,v,p)),g=(_,v)=>n(Fee(t,_));b.useEffect(()=>{const _=t.reduce((v,p)=>v+p.quantity,0);l(_)},[t]),b.useEffect(()=>{const _=t.reduce((v,p)=>v+p.itemPrice*p.quantity,0);s(_)},[t]);const m={cartItems:t,setCartItems:n,isCartOpen:r,setIsCartOpen:i,cartTotal:o,setCartTotal:s,cartCount:a,setCartCount:l,addProductAndQuantityToCart:f,addOneItemToCart:d,removeOneItemFromCart:h,clearItemFromCart:g,cartItemIsAdded:u,setCartItemIsAdded:c};return w.jsx(Br.Provider,{value:m,children:e})},zee=k.div`
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

`,Bee=k.div`
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
`,Wee=k.div`
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
`;var D_={},Hee=Ph;Object.defineProperty(D_,"__esModule",{value:!0});var M_=D_.default=void 0,qee=Hee(Jh()),Gee=w,Kee=(0,qee.default)((0,Gee.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");M_=D_.default=Kee;const Qee=k.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid black;
`,Yee=k.div`
    width: 30%;

    img {
        width: 100px;
        height: 150px;
        object-fit: cover;
    }
`,Xee=k.div`
    display: flex: 
    flex-direction: column;
    width: 40%;
    margin: 0 10px;
`,Jee=k.div`
    margin: 0 10px;
`,Zee=k(M_)`
    cursor: pointer;
    
    &:hover {
        color: red;
    }
`,PO=k.button`
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
`,ete=k(PO)`
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
`,Qe={default:"default",google:"google"},tte=Ah`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`,nte=k.div`
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${tte} 0.8s linear infinite;
`,rte=(e=Qe.default)=>({[Qe.default]:PO,[Qe.google]:ete})[e],Cn=({children:e,buttonType:t,isLoading:n,...r})=>{const i=rte(t);return w.jsx(i,{disabled:n,...r,children:n?w.jsx(nte,{}):e})},ite=k.div`
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;

    h2 {
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
        font-size: 25px;
    }

    
`,ote=k.div`
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
`,ste=k.div`
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
`,ate=k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
`,lte=k.div`
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
`,ute=k.div`
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
`,na=k(Cn)`
    border-radius: 0px;
    padding: 0;
    margin: 0;
    height: 35px;
    width: 25px;
    font-size: 25px;
    border-radius: 2px;
    background-color: rgb(204, 204, 204);
`,cte=k(Cn)`
    border-radius: 5px;
    font-size: 20px;
    position: relative;
    top: 12px;
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
    font-size: 20px;
`,fte=k.div`
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
    font-size: 18px;
`,dte=k(Cn)`
    width: 40px;
    height: 40px;
    border-radius: 2px;
    margin-left: auto;
`,hte=({cartItem:e})=>{const{name:t,imageUrl:n,selectedSize:r,quantity:i,id:o,key:s}=e,{addOneItemToCart:a,removeOneItemFromCart:l,clearItemFromCart:u,cartItems:c,setCartItems:f}=b.useContext(Br),d=()=>{a(e,r,s)},h=_=>{_.stopPropagation(),l(e,r,s)},g=()=>u(e,s),m=_=>{const v=c.find(y=>y.key===s&&y.id===o&&y.selectedSize===r),p=_.target.value;if(/^\d*$/.test(p)&&v){const y=c.map(E=>E.key===s&&E.id===o&&E.selectedSize===r?{...E,quantity:p===""?"":parseInt(p,10)}:E);f(y)}};return w.jsxs(Qee,{children:[w.jsx(Yee,{children:w.jsx("img",{src:n,alt:t})}),w.jsxs(Xee,{children:[w.jsx("h3",{children:t}),w.jsx("span",{children:r})]}),w.jsxs(L_,{children:[w.jsx(na,{buttonType:Qe.default,onClick:h,children:"-"}),w.jsx(j_,{value:i,onChange:m}),w.jsx(na,{buttonType:Qe.default,onClick:d,children:"+"})]}),w.jsx(Jee,{onClick:g,children:w.jsx(Zee,{fontSize:"large"})})]})},pte=b.forwardRef((e,t)=>{const{close:n}=e,r=Ur(),{cartItems:i,cartTotal:o}=b.useContext(Br);console.log(i);const s=()=>{r("/cart-summary"),n()};return w.jsxs(zee,{ref:t,children:[w.jsx(Bee,{children:i.length?i.map(a=>w.jsx(hte,{cartItem:a},a.key)):w.jsx("span",{children:"Your cart is currently empty!"})}),w.jsxs(Wee,{children:[w.jsxs("h3",{children:["Sub-total: $",o," "]}),w.jsx(Cn,{isLoading:!1,buttonType:Qe.google,onClick:s,children:"View Cart Summary"})]})]})}),mte=()=>{const e=b.useRef(null),t=Ur(),{currentUser:n}=b.useContext(Vp),{cartCount:r,cartItemIsAdded:i}=b.useContext(Br),[o,s]=b.useState(!1),[a,l]=b.useState(!1),[u,c]=b.useState(!1),f=()=>t("/authentication"),d=()=>{s(!0),l(!1)},h=()=>s(!1),g=S=>{S.stopPropagation(),s(!o),l(!1)},m=()=>{l(!0),s(!1)},_=()=>l(!1),v=S=>{S.stopPropagation(),l(!a),s(!1)},p=()=>{s(!1),l(!1)},y=S=>{S.stopPropagation(),c(!u),l(!1)},E=()=>c(!1);return b.useEffect(()=>{const S=I=>{I.target.id!=="mentoring"&&s(!1)};return document.body.addEventListener("click",S),()=>document.body.removeEventListener("click",S)},[]),b.useEffect(()=>{const S=I=>{I.target.id!=="shop"&&l(!1)};return document.body.addEventListener("click",S),()=>document.body.removeEventListener("click",S)},[]),b.useEffect(()=>{const S=I=>{e.current&&!e.current.contains(I.target)&&c(!1)};return document.body.addEventListener("click",S),()=>document.body.removeEventListener("click",S)},[u]),w.jsxs(b.Fragment,{children:[w.jsxs(vq,{children:[w.jsx(mq,{to:"/",children:w.jsx(gq,{src:Tq})}),w.jsx("h1",{children:"Sandra Sanchez"}),w.jsxs(yq,{children:[w.jsx(Ha,{onMouseEnter:p,children:"About"}),w.jsxs(Cb,{id:"mentoring","data-toggle":!0,children:[w.jsx(Ha,{"data-dropdown-button":!0,onClick:g,onMouseEnter:d,children:"Mentoring"}),w.jsxs(Ib,{open:o,onMouseLeave:h,children:[w.jsx(qa,{to:"",children:"Private Lessons"}),w.jsx(qa,{to:"",children:"Group Classes"})]})]}),w.jsxs(Cb,{id:"shop","data-toggle":!0,children:[w.jsx(Ha,{"data-dropdown-button":!0,onClick:v,onMouseEnter:m,children:"Shop"}),w.jsxs(Ib,{open:a,onMouseLeave:_,children:[w.jsx(qa,{to:"shop/inks",children:"Inks"}),w.jsx(qa,{to:"shop/illustrations",children:"Illustrations"}),w.jsx(qa,{to:"shop/fine art",children:"Fine Art"})]})]}),n?w.jsx(Ha,{onClick:Dee,onMouseEnter:p,children:"Sign Out"}):w.jsx(Ha,{onMouseEnter:p,onClick:f,children:"Sign In"}),w.jsxs(_q,{onClick:y,onMouseEnter:p,$bounce:+i,children:[i&&w.jsx(bq,{particleSize:6,particleCount:100}),w.jsx(wq,{fontSize:"large"}),w.jsx(Eq,{children:r})]})]}),u&&w.jsx(pte,{ref:e,close:E}),i&&w.jsx(Sq,{$show:+i,children:w.jsx("h4",{children:"Item successfully added to cart!"})})]}),w.jsx(nM,{})]})},gte=k.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`,RO=k.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({$imageurl:e})=>`url(${e})`};
    border-radius: 10px;
    opacity: 0.9;
`,OO=k.div`
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
`,vte=k.div`
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

        ${RO} {
            opacity: 1;
            transform: scale(1.1);
            transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${OO} {
            opacity: 1;
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
`,yte=({category:e})=>{const{categoryName:t,imageUrl:n,route:r}=e,i=Ur(),o=()=>i(r);return w.jsxs(vte,{onClick:o,children:[w.jsx(RO,{$imageurl:n}),w.jsxs(OO,{children:[w.jsx("h2",{children:t}),w.jsx("p",{children:"View More"})]})]})},_te=[{id:1,categoryName:"Inks",imageUrl:"https://i.ibb.co/4NzycTv/yamamoto-bleach.jpg",route:"shop/inks"},{id:2,categoryName:"Illustrations",imageUrl:"https://i.ibb.co/n1V220T/dva.jpg",route:"shop/illustrations"},{id:3,categoryName:"Fine Art",imageUrl:"https://i.ibb.co/SfsGYKk/Confections-Oilonlinen-16x18in-1250.jpg",route:"shop/fine art"}],wte=()=>w.jsx(gte,{children:_te.map(e=>w.jsx(yte,{category:e},e.id))});var V_={},Ete=Ph;Object.defineProperty(V_,"__esModule",{value:!0});var NO=V_.default=void 0;Tte(b);var Ste=Ete(Jh()),bte=w;function $O(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return($O=function(r){return r?n:t})(e)}function Tte(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=$O(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var Ite=(0,Ste.default)((0,bte.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");NO=V_.default=Ite;var F_={},Cte=Ph;Object.defineProperty(F_,"__esModule",{value:!0});var DO=F_.default=void 0;Ate(b);var xte=Cte(Jh()),kte=w;function MO(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(MO=function(r){return r?n:t})(e)}function Ate(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=MO(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var Pte=(0,xte.default)((0,kte.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");DO=F_.default=Pte;function YT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?YT(Object(n),!0).forEach(function(r){rt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):YT(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eh(e){"@babel/helpers - typeof";return eh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},eh(e)}function Rte(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function XT(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ote(e,t,n){return t&&XT(e.prototype,t),n&&XT(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U_(e,t){return $te(e)||Mte(e,t)||LO(e,t)||jte()}function hc(e){return Nte(e)||Dte(e)||LO(e)||Lte()}function Nte(e){if(Array.isArray(e))return Ay(e)}function $te(e){if(Array.isArray(e))return e}function Dte(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Mte(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function LO(e,t){if(e){if(typeof e=="string")return Ay(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ay(e,t)}}function Ay(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lte(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jte(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var JT=function(){},z_={},jO={},VO=null,FO={mark:JT,measure:JT};try{typeof window<"u"&&(z_=window),typeof document<"u"&&(jO=document),typeof MutationObserver<"u"&&(VO=MutationObserver),typeof performance<"u"&&(FO=performance)}catch{}var Vte=z_.navigator||{},ZT=Vte.userAgent,eI=ZT===void 0?"":ZT,Oi=z_,xe=jO,tI=VO,Jc=FO;Oi.document;var Wr=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",UO=~eI.indexOf("MSIE")||~eI.indexOf("Trident/"),Zc,ef,tf,nf,rf,Mr="___FONT_AWESOME___",Py=16,zO="fa",BO="svg-inline--fa",Po="data-fa-i2svg",Ry="data-fa-pseudo-element",Fte="data-fa-pseudo-element-pending",B_="data-prefix",W_="data-icon",nI="fontawesome-i2svg",Ute="async",zte=["HTML","HEAD","STYLE","SCRIPT"],WO=function(){try{return!0}catch{return!1}}(),be="classic",Ve="sharp",H_=[be,Ve];function pc(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[be]}})}var xu=pc((Zc={},rt(Zc,be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(Zc,Ve,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Zc)),ku=pc((ef={},rt(ef,be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(ef,Ve,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ef)),Au=pc((tf={},rt(tf,be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(tf,Ve,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),tf)),Bte=pc((nf={},rt(nf,be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(nf,Ve,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),nf)),Wte=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,HO="fa-layers-text",Hte=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qte=pc((rf={},rt(rf,be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(rf,Ve,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),rf)),qO=[1,2,3,4,5,6,7,8,9,10],Gte=qO.concat([11,12,13,14,15,16,17,18,19,20]),Kte=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],so={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pu=new Set;Object.keys(ku[be]).map(Pu.add.bind(Pu));Object.keys(ku[Ve]).map(Pu.add.bind(Pu));var Qte=[].concat(H_,hc(Pu),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",so.GROUP,so.SWAP_OPACITY,so.PRIMARY,so.SECONDARY]).concat(qO.map(function(e){return"".concat(e,"x")})).concat(Gte.map(function(e){return"w-".concat(e)})),Rl=Oi.FontAwesomeConfig||{};function Yte(e){var t=xe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Xte(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(xe&&typeof xe.querySelector=="function"){var Jte=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jte.forEach(function(e){var t=U_(e,2),n=t[0],r=t[1],i=Xte(Yte(n));i!=null&&(Rl[r]=i)})}var GO={styleDefault:"solid",familyDefault:"classic",cssPrefix:zO,replacementClass:BO,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rl.familyPrefix&&(Rl.cssPrefix=Rl.familyPrefix);var ra=M(M({},GO),Rl);ra.autoReplaceSvg||(ra.observeMutations=!1);var z={};Object.keys(GO).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){ra[e]=n,Ol.forEach(function(r){return r(z)})},get:function(){return ra[e]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(t){ra.cssPrefix=t,Ol.forEach(function(n){return n(z)})},get:function(){return ra.cssPrefix}});Oi.FontAwesomeConfig=z;var Ol=[];function Zte(e){return Ol.push(e),function(){Ol.splice(Ol.indexOf(e),1)}}var Qr=Py,ir={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ene(e){if(!(!e||!Wr)){var t=xe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=xe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return xe.head.insertBefore(t,r),e}}var tne="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ru(){for(var e=12,t="";e-- >0;)t+=tne[Math.random()*62|0];return t}function ka(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function q_(e){return e.classList?ka(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function KO(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nne(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(KO(e[n]),'" ')},"").trim()}function Fp(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function G_(e){return e.size!==ir.size||e.x!==ir.x||e.y!==ir.y||e.rotate!==ir.rotate||e.flipX||e.flipY}function rne(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function ine(e){var t=e.transform,n=e.width,r=n===void 0?Py:n,i=e.height,o=i===void 0?Py:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&UO?l+="translate(".concat(t.x/Qr-r/2,"em, ").concat(t.y/Qr-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Qr,"em), calc(-50% + ").concat(t.y/Qr,"em)) "):l+="translate(".concat(t.x/Qr,"em, ").concat(t.y/Qr,"em) "),l+="scale(".concat(t.size/Qr*(t.flipX?-1:1),", ").concat(t.size/Qr*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var one=`:root, :host {
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
}`;function QO(){var e=zO,t=BO,n=z.cssPrefix,r=z.replacementClass,i=one;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var rI=!1;function mg(){z.autoAddCss&&!rI&&(ene(QO()),rI=!0)}var sne={mixout:function(){return{dom:{css:QO,insertCss:mg}}},hooks:function(){return{beforeDOMElementCreation:function(){mg()},beforeI2svg:function(){mg()}}}},Lr=Oi||{};Lr[Mr]||(Lr[Mr]={});Lr[Mr].styles||(Lr[Mr].styles={});Lr[Mr].hooks||(Lr[Mr].hooks={});Lr[Mr].shims||(Lr[Mr].shims=[]);var Dn=Lr[Mr],YO=[],ane=function e(){xe.removeEventListener("DOMContentLoaded",e),th=1,YO.map(function(t){return t()})},th=!1;Wr&&(th=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),th||xe.addEventListener("DOMContentLoaded",ane));function lne(e){Wr&&(th?setTimeout(e,0):YO.push(e))}function mc(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?KO(e):"<".concat(t," ").concat(nne(r),">").concat(o.map(mc).join(""),"</").concat(t,">")}function iI(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var une=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},gg=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?une(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function cne(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Oy(e){var t=cne(e);return t.length===1?t[0].toString(16):null}function fne(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function oI(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ny(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=oI(t);typeof Dn.hooks.addPack=="function"&&!i?Dn.hooks.addPack(e,oI(t)):Dn.styles[e]=M(M({},Dn.styles[e]||{}),o),e==="fas"&&Ny("fa",t)}var of,sf,af,hs=Dn.styles,dne=Dn.shims,hne=(of={},rt(of,be,Object.values(Au[be])),rt(of,Ve,Object.values(Au[Ve])),of),K_=null,XO={},JO={},ZO={},eN={},tN={},pne=(sf={},rt(sf,be,Object.keys(xu[be])),rt(sf,Ve,Object.keys(xu[Ve])),sf);function mne(e){return~Qte.indexOf(e)}function gne(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!mne(i)?i:null}var nN=function(){var t=function(o){return gg(hs,function(s,a,l){return s[l]=gg(a,o,{}),s},{})};XO=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),JO=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),tN=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in hs||z.autoFetchSvg,r=gg(dne,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});ZO=r.names,eN=r.unicodes,K_=Up(z.styleDefault,{family:z.familyDefault})};Zte(function(e){K_=Up(e.styleDefault,{family:z.familyDefault})});nN();function Q_(e,t){return(XO[e]||{})[t]}function vne(e,t){return(JO[e]||{})[t]}function ao(e,t){return(tN[e]||{})[t]}function rN(e){return ZO[e]||{prefix:null,iconName:null}}function yne(e){var t=eN[e],n=Q_("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ni(){return K_}var Y_=function(){return{prefix:null,iconName:null,rest:[]}};function Up(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?be:n,i=xu[r][e],o=ku[r][e]||ku[r][i],s=e in Dn.styles?e:null;return o||s||null}var sI=(af={},rt(af,be,Object.keys(Au[be])),rt(af,Ve,Object.keys(Au[Ve])),af);function zp(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},rt(t,be,"".concat(z.cssPrefix,"-").concat(be)),rt(t,Ve,"".concat(z.cssPrefix,"-").concat(Ve)),t),s=null,a=be;(e.includes(o[be])||e.some(function(u){return sI[be].includes(u)}))&&(a=be),(e.includes(o[Ve])||e.some(function(u){return sI[Ve].includes(u)}))&&(a=Ve);var l=e.reduce(function(u,c){var f=gne(z.cssPrefix,c);if(hs[c]?(c=hne[a].includes(c)?Bte[a][c]:c,s=c,u.prefix=c):pne[a].indexOf(c)>-1?(s=c,u.prefix=Up(c,{family:a})):f?u.iconName=f:c!==z.replacementClass&&c!==o[be]&&c!==o[Ve]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=s==="fa"?rN(u.iconName):{},h=ao(u.prefix,u.iconName);d.prefix&&(s=null),u.iconName=d.iconName||h||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!hs.far&&hs.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},Y_());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ve&&(hs.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=ao(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Ni()||"fas"),l}var _ne=function(){function e(){Rte(this,e),this.definitions={}}return Ote(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),s[a]),Ny(a,s[a]);var l=Au[be][a];l&&Ny(l,s[a]),nN()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),aI=[],ps={},Ps={},wne=Object.keys(Ps);function Ene(e,t){var n=t.mixoutsTo;return aI=e,ps={},Object.keys(Ps).forEach(function(r){wne.indexOf(r)===-1&&delete Ps[r]}),aI.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),eh(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){ps[s]||(ps[s]=[]),ps[s].push(o[s])})}r.provides&&r.provides(Ps)}),n}function $y(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=ps[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function Ro(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ps[e]||[];i.forEach(function(o){o.apply(null,n)})}function jr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ps[e]?Ps[e].apply(null,t):void 0}function Dy(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ni();if(t)return t=ao(n,t)||t,iI(iN.definitions,n,t)||iI(Dn.styles,n,t)}var iN=new _ne,Sne=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Ro("noAuto")},bne={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wr?(Ro("beforeI2svg",t),jr("pseudoElements2svg",t),jr("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,lne(function(){Ine({autoReplaceSvgRoot:n}),Ro("watch",t)})}},Tne={icon:function(t){if(t===null)return null;if(eh(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ao(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Up(t[0]);return{prefix:r,iconName:ao(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.cssPrefix,"-"))>-1||t.match(Wte))){var i=zp(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ni(),iconName:ao(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Ni();return{prefix:o,iconName:ao(o,t)||t}}}},hn={noAuto:Sne,config:z,dom:bne,parse:Tne,library:iN,findIconDefinition:Dy,toHtml:mc},Ine=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?xe:n;(Object.keys(Dn.styles).length>0||z.autoFetchSvg)&&Wr&&z.autoReplaceSvg&&hn.dom.i2svg({node:r})};function Bp(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return mc(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Wr){var r=xe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Cne(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(G_(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Fp(M(M({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function xne(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(z.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:s}),children:r}]}]}function X_(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,h=d===void 0?!1:d,g=r.found?r:n,m=g.width,_=g.height,v=i==="fak",p=[z.replacementClass,o?"".concat(z.cssPrefix,"-").concat(o):""].filter(function($){return f.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(f.classes).join(" "),y={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(_)})},E=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/_*16*.0625,"em")}:{};h&&(y.attributes[Po]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Ru())},children:[l]}),delete y.attributes.title);var S=M(M({},y),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:M(M({},E),f.styles)}),I=r.found&&n.found?jr("generateAbstractMask",S)||{children:[],attributes:{}}:jr("generateAbstractIcon",S)||{children:[],attributes:{}},T=I.children,O=I.attributes;return S.children=T,S.attributes=O,a?xne(S):Cne(S)}function lI(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=M(M(M({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[Po]="");var c=M({},s.styles);G_(i)&&(c.transform=ine({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Fp(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function kne(e){var t=e.content,n=e.title,r=e.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Fp(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var vg=Dn.styles;function My(e){var t=e[0],n=e[1],r=e.slice(4),i=U_(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(so.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(so.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(so.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var Ane={found:!1,width:512,height:512};function Pne(e,t){!WO&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ly(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=Ni()),new Promise(function(r,i){if(jr("missingIconAbstract"),n==="fa"){var o=rN(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&vg[t]&&vg[t][e]){var s=vg[t][e];return r(My(s))}Pne(e,t),r(M(M({},Ane),{},{icon:z.showMissingIcons&&e?jr("missingIconAbstract")||{}:{}}))})}var uI=function(){},jy=z.measurePerformance&&Jc&&Jc.mark&&Jc.measure?Jc:{mark:uI,measure:uI},cl='FA "6.5.1"',Rne=function(t){return jy.mark("".concat(cl," ").concat(t," begins")),function(){return oN(t)}},oN=function(t){jy.mark("".concat(cl," ").concat(t," ends")),jy.measure("".concat(cl," ").concat(t),"".concat(cl," ").concat(t," begins"),"".concat(cl," ").concat(t," ends"))},J_={begin:Rne,end:oN},qf=function(){};function cI(e){var t=e.getAttribute?e.getAttribute(Po):null;return typeof t=="string"}function One(e){var t=e.getAttribute?e.getAttribute(B_):null,n=e.getAttribute?e.getAttribute(W_):null;return t&&n}function Nne(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function $ne(){if(z.autoReplaceSvg===!0)return Gf.replace;var e=Gf[z.autoReplaceSvg];return e||Gf.replace}function Dne(e){return xe.createElementNS("http://www.w3.org/2000/svg",e)}function Mne(e){return xe.createElement(e)}function sN(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Dne:Mne:n;if(typeof e=="string")return xe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(sN(s,{ceFn:r}))}),i}function Lne(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Gf={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(sN(i),n)}),n.getAttribute(Po)===null&&z.keepOriginalSource){var r=xe.createComment(Lne(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~q_(n).indexOf(z.replacementClass))return Gf.replace(t);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return mc(a)}).join(`
`);n.setAttribute(Po,""),n.innerHTML=s}};function fI(e){e()}function aN(e,t){var n=typeof t=="function"?t:qf;if(e.length===0)n();else{var r=fI;z.mutateApproach===Ute&&(r=Oi.requestAnimationFrame||fI),r(function(){var i=$ne(),o=J_.begin("mutate");e.map(i),o(),n()})}}var Z_=!1;function lN(){Z_=!0}function Vy(){Z_=!1}var nh=null;function dI(e){if(tI&&z.observeMutations){var t=e.treeCallback,n=t===void 0?qf:t,r=e.nodeCallback,i=r===void 0?qf:r,o=e.pseudoElementsCallback,s=o===void 0?qf:o,a=e.observeMutationsRoot,l=a===void 0?xe:a;nh=new tI(function(u){if(!Z_){var c=Ni();ka(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!cI(f.addedNodes[0])&&(z.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&z.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&cI(f.target)&&~Kte.indexOf(f.attributeName))if(f.attributeName==="class"&&One(f.target)){var d=zp(q_(f.target)),h=d.prefix,g=d.iconName;f.target.setAttribute(B_,h||c),g&&f.target.setAttribute(W_,g)}else Nne(f.target)&&i(f.target)})}}),Wr&&nh.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jne(){nh&&nh.disconnect()}function Vne(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function Fne(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=zp(q_(e));return i.prefix||(i.prefix=Ni()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=vne(i.prefix,e.innerText)||Q_(i.prefix,Oy(e.innerText))),!i.iconName&&z.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Une(e){var t=ka(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Ru()):(t["aria-hidden"]="true",t.focusable="false")),t}function zne(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ir,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Fne(e),r=n.iconName,i=n.prefix,o=n.rest,s=Une(e),a=$y("parseNodeAttributes",{},e),l=t.styleParser?Vne(e):[];return M({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:ir,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var Bne=Dn.styles;function uN(e){var t=z.autoReplaceSvg==="nest"?hI(e,{styleParser:!1}):hI(e);return~t.extra.classes.indexOf(HO)?jr("generateLayersText",e,t):jr("generateSvgReplacementMutation",e,t)}var $i=new Set;H_.map(function(e){$i.add("fa-".concat(e))});Object.keys(xu[be]).map($i.add.bind($i));Object.keys(xu[Ve]).map($i.add.bind($i));$i=hc($i);function pI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wr)return Promise.resolve();var n=xe.documentElement.classList,r=function(f){return n.add("".concat(nI,"-").concat(f))},i=function(f){return n.remove("".concat(nI,"-").concat(f))},o=z.autoFetchSvg?$i:H_.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Bne));o.includes("fa")||o.push("fa");var s=[".".concat(HO,":not([").concat(Po,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Po,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=ka(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=J_.begin("onTree"),u=a.reduce(function(c,f){try{var d=uN(f);d&&c.push(d)}catch(h){WO||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){aN(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function Wne(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;uN(e).then(function(n){n&&aN([n],t)})}function Hne(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Dy(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Dy(i||{})),e(r,M(M({},n),{},{mask:i}))}}var qne=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ir:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,h=n.titleId,g=h===void 0?null:h,m=n.classes,_=m===void 0?[]:m,v=n.attributes,p=v===void 0?{}:v,y=n.styles,E=y===void 0?{}:y;if(t){var S=t.prefix,I=t.iconName,T=t.icon;return Bp(M({type:"icon"},t),function(){return Ro("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(d?p["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(g||Ru()):(p["aria-hidden"]="true",p.focusable="false")),X_({icons:{main:My(T),mask:l?My(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:I,transform:M(M({},ir),i),symbol:s,title:d,maskId:c,titleId:g,extra:{attributes:p,styles:E,classes:_}})})}},Gne={mixout:function(){return{icon:Hne(qne)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=pI,n.nodeCallback=Wne,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?xe:r,o=n.callback,s=o===void 0?function(){}:o;return pI(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(h,g){Promise.all([Ly(i,a),c.iconName?Ly(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var _=U_(m,2),v=_[0],p=_[1];h([n,X_({icons:{main:v,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=Fp(a);l.length>0&&(i.style=l);var u;return G_(s)&&(u=jr("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},Kne={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Bp({type:"layer"},function(){Ro("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(hc(o)).join(" ")},children:s}]})}}}},Qne={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Bp({type:"counter",content:n},function(){return Ro("beforeDOMElementCreation",{content:n,params:r}),kne({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(hc(a))}})})}}}},Yne={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?ir:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,h=d===void 0?{}:d;return Bp({type:"text",content:n},function(){return Ro("beforeDOMElementCreation",{content:n,params:r}),lI({content:n,transform:M(M({},ir),o),title:a,extra:{attributes:f,styles:h,classes:["".concat(z.cssPrefix,"-layers-text")].concat(hc(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(UO){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,lI({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},Xne=new RegExp('"',"ug"),mI=[1105920,1112319];function Jne(e){var t=e.replace(Xne,""),n=fne(t,0),r=n>=mI[0]&&n<=mI[1],i=t.length===2?t[0]===t[1]:!1;return{value:Oy(i?t[0]:t),isSecondary:r||i}}function gI(e,t){var n="".concat(Fte).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=ka(e.children),s=o.filter(function(T){return T.getAttribute(Ry)===t})[0],a=Oi.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(Hte),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Ve:be,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ku[d][l[2].toLowerCase()]:qte[d][u],g=Jne(f),m=g.value,_=g.isSecondary,v=l[0].startsWith("FontAwesome"),p=Q_(h,m),y=p;if(v){var E=yne(m);E.iconName&&E.prefix&&(p=E.iconName,h=E.prefix)}if(p&&!_&&(!s||s.getAttribute(B_)!==h||s.getAttribute(W_)!==y)){e.setAttribute(n,y),s&&e.removeChild(s);var S=zne(),I=S.extra;I.attributes[Ry]=t,Ly(p,h).then(function(T){var O=X_(M(M({},S),{},{icons:{main:T,mask:Y_()},prefix:h,iconName:y,extra:I,watchable:!0})),$=xe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore($,e.firstChild):e.appendChild($),$.outerHTML=O.map(function(R){return mc(R)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Zne(e){return Promise.all([gI(e,"::before"),gI(e,"::after")])}function ere(e){return e.parentNode!==document.head&&!~zte.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ry)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function vI(e){if(Wr)return new Promise(function(t,n){var r=ka(e.querySelectorAll("*")).filter(ere).map(Zne),i=J_.begin("searchPseudoElements");lN(),Promise.all(r).then(function(){i(),Vy(),t()}).catch(function(){i(),Vy(),n()})})}var tre={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=vI,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?xe:r;z.searchPseudoElements&&vI(i)}}},yI=!1,nre={mixout:function(){return{dom:{unwatch:function(){lN(),yI=!0}}}},hooks:function(){return{bootstrap:function(){dI($y("mutationObserverCallbacks",{}))},noAuto:function(){jne()},watch:function(n){var r=n.observeMutationsRoot;yI?Vy():dI($y("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_I=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},rre={mixout:function(){return{parse:{transform:function(n){return _I(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=_I(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},h={outer:a,inner:f,path:d};return{tag:"g",attributes:M({},h.outer),children:[{tag:"g",attributes:M({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),h.path)}]}]}}}},yg={x:0,y:0,width:"100%",height:"100%"};function wI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ire(e){return e.tag==="g"?e.children:[e]}var ore={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?zp(i.split(" ").map(function(s){return s.trim()})):Y_();return o.prefix||(o.prefix=Ni()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,d=s.icon,h=rne({transform:l,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:M(M({},yg),{},{fill:"white"})},m=c.children?{children:c.children.map(wI)}:{},_={tag:"g",attributes:M({},h.inner),children:[wI(M({tag:c.tag,attributes:M(M({},c.attributes),h.path)},m))]},v={tag:"g",attributes:M({},h.outer),children:[_]},p="mask-".concat(a||Ru()),y="clip-".concat(a||Ru()),E={tag:"mask",attributes:M(M({},yg),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:ire(d)},E]};return r.push(S,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(p,")")},yg)}),{children:r,attributes:i}}}},sre={provides:function(t){var n=!1;Oi.matchMedia&&(n=Oi.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=M(M({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},are={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},lre=[sne,Gne,Kne,Qne,Yne,tre,nre,rre,ore,sre,are];Ene(lre,{mixoutsTo:hn});hn.noAuto;hn.config;hn.library;hn.dom;var Fy=hn.parse;hn.findIconDefinition;hn.toHtml;var ure=hn.icon;hn.layer;hn.text;hn.counter;function EI(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?EI(Object(n),!0).forEach(function(r){ms(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):EI(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rh(e){"@babel/helpers - typeof";return rh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rh(e)}function ms(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cre(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fre(e,t){if(e==null)return{};var n=cre(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Uy(e){return dre(e)||hre(e)||pre(e)||mre()}function dre(e){if(Array.isArray(e))return zy(e)}function hre(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pre(e,t){if(e){if(typeof e=="string")return zy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zy(e,t)}}function zy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function mre(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gre(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,h=e.inverse,g=e.border,m=e.listItem,_=e.flip,v=e.size,p=e.rotation,y=e.pull,E=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":h,"fa-border":g,"fa-li":m,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},ms(t,"fa-".concat(v),typeof v<"u"&&v!==null),ms(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),ms(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),ms(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function vre(e){return e=e-0,e===e}function cN(e){return vre(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var yre=["style"];function _re(e){return e.charAt(0).toUpperCase()+e.slice(1)}function wre(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=cN(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[_re(i)]=o:t[i]=o,t},{})}function fN(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return fN(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=wre(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[cN(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=fre(n,yre);return i.attrs.style=fi(fi({},i.attrs.style),s),e.apply(void 0,[t.tag,fi(fi({},i.attrs),a)].concat(Uy(r)))}var dN=!1;try{dN=!0}catch{}function Ere(){if(!dN&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function SI(e){if(e&&rh(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Fy.icon)return Fy.icon(e);if(e===null)return null;if(e&&rh(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function _g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ms({},e,t):{}}var Aa=H.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=SI(n),c=_g("classes",[].concat(Uy(gre(e)),Uy(o.split(" ")))),f=_g("transform",typeof e.transform=="string"?Fy.transform(e.transform):e.transform),d=_g("mask",SI(r)),h=ure(u,fi(fi(fi(fi({},c),f),d),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!h)return Ere("Could not find icon",u),null;var g=h.abstract,m={ref:t};return Object.keys(e).forEach(function(_){Aa.defaultProps.hasOwnProperty(_)||(m[_]=e[_])}),Sre(g[0],m)});Aa.displayName="FontAwesomeIcon";Aa.propTypes={beat:V.bool,border:V.bool,beatFade:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool};Aa.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Sre=fN.bind(null,H.createElement),bre={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},Tre={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const Ire=k(Aa)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: rgb(114, 137, 218);
    }
`,Cre=k(Aa)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: rgb(205, 32, 31);
    }
`,xre=()=>w.jsx(Ire,{icon:bre,size:"2x"}),kre=()=>w.jsx(Cre,{icon:Tre,size:"2x"}),Are=k.footer`
    margin-top: 50px;
    width: 100%;
    display: flex;
    // justify-content: space-between;
    background-color: rgb(21, 23, 23);
`,Pre=k.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-right: 100px;
    padding: 20px;

    h1 {
        color: #fff;
    }
`,Rre=k.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    h1 {
        color: #fff;
    }
`,Yr=k(W0)`
    text-decoration: none;
    font-weight: bold;
    color: rgb(115, 115, 115);
    padding: 10px 0 10px 0;
    transition: 0.6s ease;

    &:hover {
        color: #fff;
    }

`,Ore=k.div`
    display: flex;
`,Nre=k(NO)`
    color: rgb(115, 115, 115);
    border-radius: 10px;
    margin-right: 15px;

    &:hover {
        background: #d6249f;
        background: radial-gradient(circle at 0% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        box-shadow: 0px 3px 10px rgba(0,0,0,.25);
        transition: 1s ease-out;
    }
`,$re=k(DO)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: #3b5998;
    }
`,Dre=()=>w.jsxs(Are,{children:[w.jsxs(Pre,{children:[w.jsx("h1",{children:"Information"}),w.jsx(Yr,{to:"/about",children:"About"}),w.jsx(Yr,{to:"/conventions",children:"Conventions"}),w.jsx(Yr,{to:"/mentoring",children:"Mentoring"}),w.jsx(Yr,{to:"/contact",children:"Contact Me"})]}),w.jsxs(Rre,{children:[w.jsx("h1",{children:"Follow me on Social Media!"}),w.jsxs(Ore,{children:[w.jsx(Yr,{children:w.jsx(Nre,{fontSize:"large"})}),w.jsx(Yr,{children:w.jsx($re,{fontSize:"large"})}),w.jsx(Yr,{children:w.jsx(xre,{})}),w.jsx(Yr,{children:w.jsx(kre,{})})]})]})]}),Mre=()=>w.jsxs("div",{children:[w.jsx(wte,{}),w.jsx("section",{children:w.jsx(Dre,{})})]}),Lre=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`,jre=k.div`
    width: 70%;
    font-family: "Architects Daughter", cursive;
`,Vre=()=>w.jsx(Lre,{children:w.jsxs(jre,{children:[w.jsx("h1",{children:"About the artist"}),w.jsxs("p",{children:["Sandra Sanchez, a distinguished artist from Southern California, seamlessly blends the realms of traditional fantasy and realistic portrait art to create the vivid and luminous pieces she is known for today.",w.jsx("br",{}),w.jsx("br",{}),"Her artistic journey traces back to childhood visits to The Getty Museum in Los Angeles, where the profound influence of the Old Masters ignited a passion for technically and emotionally rich painting. Guided by a desire to elevate her craft, Sandra embarked on a new artistic journey, completing the core program at the prestigious Grand Central Atelier after graduating high school. This experience became the bedrock for her commitment to mastering the intricacies of traditional painting.",w.jsx("br",{}),w.jsx("br",{}),"Upon moving back to California in 2022, Sandra made a conscious decision to weave her cherished childhood influences into her canvases by painting subjects from favorite her favorite movies, video games and anime. She brings a totally unique fusion of classical and contemporary elements to her work.",w.jsx("br",{}),w.jsx("br",{}),"Sandra's artistic prowess extends beyond the confines of classical art, allowing her to skillfully render fantasy subjects with a nuanced touch. Her paintings not only showcase technical mastery but also exude a profound connection to humanity. Through the interplay of sensitive light and fluid composition, she captures the essence of her subjects and can create a powerful visual impact.",w.jsx("br",{}),w.jsx("br",{}),"Acknowledged for her exceptional talent, Sandra is a recipient of prestigious awards, including the Anders Larson-Toich Fund Scholarship, the Alma Schapiro Fund Scholarship, and the Neil Patterson Award of Excellence. As a two-time Hudson River Fellow, she continues to evolve as an artist, consistently breathing life and energy into her art, ensuring the spirit of her subjects resonates in every stroke."]}),w.jsx("br",{}),w.jsx("br",{})]})}),Fre=()=>w.jsx("div",{children:w.jsx("h1",{children:"I am the mentoring page!"})}),Ure=()=>w.jsx("div",{children:w.jsx("h1",{children:"I am the contact me page!"})}),zre=k.div`
    display: flex;
    flex-direction: column;
`,Bre=k.div`
    display: flex;
    justify-content: flex-end;
`,Wre=k.span`
    color: rgb(255, 51, 153);
    font-weight: bold;
`,hN="rgb(255, 51, 153)",Hre="black",By=Eo`
  top: -14px;
  font-size: 12px;
  color: ${Hre};
`,pN=k.label`
  color: ${hN};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  //if shrink is truthy, then apply the shrinkLabelStyles
  //destructuring shrink directly off of props
  ${({shrink:e})=>e&&By};

  //alternative, does the same thing
  // ${e=>e.shrink&&By};
`,qre=k.input`
  background: none;
  background-color: white;
  color: ${hN};
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
  
  &:focus ~ ${pN} {
    ${By};
  }
`,Gre=k.div`
  position: relative;
  margin: 50px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`,gs=({label:e,...t})=>w.jsxs(Gre,{children:[w.jsx(qre,{...t}),e&&w.jsx(pN,{shrink:!!(t.value&&typeof t.value=="string"&&t.value.length),children:e})]}),Kre=()=>{const e=Ur(),[t,n]=b.useState({displayName:"",email:"",password:"",confirmPassword:""}),{displayName:r,email:i,password:o,confirmPassword:s}=t,{currentUser:a,setCurrentUser:l}=b.useContext(Vp),u=d=>{const{name:h,value:g}=d.target;n({...t,[h]:g})},c=()=>{n({displayName:"",email:"",password:"",confirmPassword:""})},f=async d=>{if(d.preventDefault(),o!==s){alert("Passwords do not match!");return}try{const h=await Nee(i,o);if(h){const{user:g}=h;await $_(g,{displayName:r}),l(g)}}catch(h){console.log(h)}c()};return a&&e("/"),w.jsxs(zre,{children:[w.jsx("h2",{children:"Sign Up!"}),w.jsx(Wre,{children:"Create an account with email and password"}),w.jsxs("form",{onSubmit:f,children:[w.jsx(gs,{label:"User Name",type:"text",name:"displayName",value:r,required:!0,onChange:u}),w.jsx(gs,{label:"Email",type:"text",name:"email",value:i,required:!0,onChange:u}),w.jsx(gs,{label:"Password",type:"password",name:"password",value:o,required:!0,onChange:u}),w.jsx(gs,{label:"Confirm Password",type:"password",name:"confirmPassword",value:s,required:!0,onChange:u}),w.jsx(Bre,{children:w.jsx(Cn,{isLoading:!1,buttonType:Qe.google,children:"Sign Up"})})]})]})},Qre=k.div`
    display: flex;
    flex-direction: column;
`,Yre=k.div`
    display: flex;
    justify-content: space-evenly;
`,Xre=k.span`
    color: rgb(255, 51, 153);
    font-weight: bold;
`,Jre=()=>{const e=Ur(),{currentUser:t,setCurrentUser:n}=b.useContext(Vp),[r,i]=b.useState({email:"",password:""}),{email:o,password:s}=r,a=f=>{const{name:d,value:h}=f.target;i({...r,[d]:h})},l=()=>{i({email:"",password:""})},u=async f=>{f.preventDefault();try{const d=await Oee(o,s);if(console.log(d),d){const{user:h}=d;n(h)}}catch(d){console.log(`There was an error signing in: ${d}`)}l()},c=async()=>{try{const f=await Pee();if(console.log(f),f){const{user:d}=f;await $_(d),n(d)}}catch(f){console.log(f)}};return t&&e("/"),w.jsxs(Qre,{children:[w.jsx("h2",{children:"Already have an account?"}),w.jsx(Xre,{children:"Sign in with your email and password"}),w.jsxs("form",{onSubmit:u,children:[w.jsx(gs,{label:"email",type:"email",name:"email",value:o,required:!0,onChange:a}),w.jsx(gs,{label:"password",type:"password",name:"password",value:s,required:!0,onChange:a}),w.jsxs(Yre,{children:[w.jsx(Cn,{buttonType:Qe.default,children:"Sign In With Email"}),w.jsx(Cn,{buttonType:Qe.google,type:"submit",onClick:c,children:"Sign In With Google"})]})]})]})},Zre=k.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 30px auto;
`,eie=()=>w.jsxs(Zre,{children:[w.jsx(Jre,{}),w.jsx(Kre,{})]}),tie=k.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    margin: 20px;
`,mN=k.div`
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
`;const nie=k.div`
    margin: 20px;
    font-family: "Caveat", cursive;
    font-weight: 700;
    font-size: 20px;
`,rie=k.div`
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

    &:hover ${mN} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`,iie=({product:e})=>{const{name:t,imageUrl:n,id:r}=e,i=Ur(),o=()=>i(`${r}`,{state:{product:e}});return w.jsxs(rie,{children:[w.jsx("img",{src:n,alt:t}),w.jsx(nie,{children:t}),w.jsx(mN,{children:w.jsx(Cn,{isLoading:!1,buttonType:Qe.default,onClick:o,children:"View Details"})})]})},oie=()=>{const{categoriesMap:e}=b.useContext(q0),{category:t}=z4(),[n,r]=b.useState(e[t]);return b.useEffect(()=>{r(e[t])},[e,t]),console.log(n),w.jsx(tie,{children:n&&n.map(i=>w.jsx(iie,{product:i,children:i.sizesAndPrices.map(o=>w.jsxs("div",{children:["Size: ",o.size,", Price: ",o.price]},o.size))},i.id))})};var gN={},ew={},tw={};Object.defineProperty(tw,"__esModule",{value:!0});var bI="html",TI="head",lf="body",sie=/<([a-zA-Z]+[0-9]?)/,II=/<head[^]*>/i,CI=/<body[^]*>/i,ih=function(e,t){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},Wy=function(e,t){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},xI=typeof window=="object"&&window.DOMParser;if(typeof xI=="function"){var aie=new xI,lie="text/html";Wy=function(e,t){return t&&(e="<".concat(t,">").concat(e,"</").concat(t,">")),aie.parseFromString(e,lie)},ih=Wy}if(typeof document=="object"&&document.implementation){var uf=document.implementation.createHTMLDocument();ih=function(e,t){if(t){var n=uf.documentElement.querySelector(t);return n&&(n.innerHTML=e),uf}return uf.documentElement.innerHTML=e,uf}}var cf=typeof document=="object"&&document.createElement("template"),Hy;cf&&cf.content&&(Hy=function(e){return cf.innerHTML=e,cf.content.childNodes});function uie(e){var t,n,r=e.match(sie),i=r&&r[1]?r[1].toLowerCase():"";switch(i){case bI:{var o=Wy(e);if(!II.test(e)){var s=o.querySelector(TI);(t=s==null?void 0:s.parentNode)===null||t===void 0||t.removeChild(s)}if(!CI.test(e)){var s=o.querySelector(lf);(n=s==null?void 0:s.parentNode)===null||n===void 0||n.removeChild(s)}return o.querySelectorAll(bI)}case TI:case lf:{var a=ih(e).querySelectorAll(i);return CI.test(e)&&II.test(e)?a[0].parentNode.childNodes:a}default:{if(Hy)return Hy(e);var s=ih(e,lf).querySelector(lf);return s.childNodes}}}tw.default=uie;var ia={},nw={},rw={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var t;(function(r){r.Root="root",r.Text="text",r.Directive="directive",r.Comment="comment",r.Script="script",r.Style="style",r.Tag="tag",r.CDATA="cdata",r.Doctype="doctype"})(t=e.ElementType||(e.ElementType={}));function n(r){return r.type===t.Tag||r.type===t.Script||r.type===t.Style}e.isTag=n,e.Root=t.Root,e.Text=t.Text,e.Directive=t.Directive,e.Comment=t.Comment,e.Script=t.Script,e.Style=t.Style,e.Tag=t.Tag,e.CDATA=t.CDATA,e.Doctype=t.Doctype})(rw);var ee={},Bi=Re&&Re.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Nl=Re&&Re.__assign||function(){return Nl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Nl.apply(this,arguments)};Object.defineProperty(ee,"__esModule",{value:!0});ee.cloneNode=ee.hasChildren=ee.isDocument=ee.isDirective=ee.isComment=ee.isText=ee.isCDATA=ee.isTag=ee.Element=ee.Document=ee.CDATA=ee.NodeWithChildren=ee.ProcessingInstruction=ee.Comment=ee.Text=ee.DataNode=ee.Node=void 0;var Zt=rw,iw=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),ow(this,t)},e}();ee.Node=iw;var Wp=function(e){Bi(t,e);function t(n){var r=e.call(this)||this;return r.data=n,r}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(n){this.data=n},enumerable:!1,configurable:!0}),t}(iw);ee.DataNode=Wp;var vN=function(e){Bi(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=Zt.ElementType.Text,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(Wp);ee.Text=vN;var yN=function(e){Bi(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=Zt.ElementType.Comment,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(Wp);ee.Comment=yN;var _N=function(e){Bi(t,e);function t(n,r){var i=e.call(this,r)||this;return i.name=n,i.type=Zt.ElementType.Directive,i}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(Wp);ee.ProcessingInstruction=_N;var Hp=function(e){Bi(t,e);function t(n){var r=e.call(this)||this;return r.children=n,r}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var n;return(n=this.children[0])!==null&&n!==void 0?n:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(n){this.children=n},enumerable:!1,configurable:!0}),t}(iw);ee.NodeWithChildren=Hp;var wN=function(e){Bi(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=Zt.ElementType.CDATA,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(Hp);ee.CDATA=wN;var EN=function(e){Bi(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=Zt.ElementType.Root,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(Hp);ee.Document=EN;var SN=function(e){Bi(t,e);function t(n,r,i,o){i===void 0&&(i=[]),o===void 0&&(o=n==="script"?Zt.ElementType.Script:n==="style"?Zt.ElementType.Style:Zt.ElementType.Tag);var s=e.call(this,i)||this;return s.name=n,s.attribs=r,s.type=o,s}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(n){this.name=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var n=this;return Object.keys(this.attribs).map(function(r){var i,o;return{name:r,value:n.attribs[r],namespace:(i=n["x-attribsNamespace"])===null||i===void 0?void 0:i[r],prefix:(o=n["x-attribsPrefix"])===null||o===void 0?void 0:o[r]}})},enumerable:!1,configurable:!0}),t}(Hp);ee.Element=SN;function bN(e){return(0,Zt.isTag)(e)}ee.isTag=bN;function TN(e){return e.type===Zt.ElementType.CDATA}ee.isCDATA=TN;function IN(e){return e.type===Zt.ElementType.Text}ee.isText=IN;function CN(e){return e.type===Zt.ElementType.Comment}ee.isComment=CN;function xN(e){return e.type===Zt.ElementType.Directive}ee.isDirective=xN;function kN(e){return e.type===Zt.ElementType.Root}ee.isDocument=kN;function cie(e){return Object.prototype.hasOwnProperty.call(e,"children")}ee.hasChildren=cie;function ow(e,t){t===void 0&&(t=!1);var n;if(IN(e))n=new vN(e.data);else if(CN(e))n=new yN(e.data);else if(bN(e)){var r=t?wg(e.children):[],i=new SN(e.name,Nl({},e.attribs),r);r.forEach(function(l){return l.parent=i}),e.namespace!=null&&(i.namespace=e.namespace),e["x-attribsNamespace"]&&(i["x-attribsNamespace"]=Nl({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(i["x-attribsPrefix"]=Nl({},e["x-attribsPrefix"])),n=i}else if(TN(e)){var r=t?wg(e.children):[],o=new wN(r);r.forEach(function(u){return u.parent=o}),n=o}else if(kN(e)){var r=t?wg(e.children):[],s=new EN(r);r.forEach(function(u){return u.parent=s}),e["x-mode"]&&(s["x-mode"]=e["x-mode"]),n=s}else if(xN(e)){var a=new _N(e.name,e.data);e["x-name"]!=null&&(a["x-name"]=e["x-name"],a["x-publicId"]=e["x-publicId"],a["x-systemId"]=e["x-systemId"]),n=a}else throw new Error("Not implemented yet: ".concat(e.type));return n.startIndex=e.startIndex,n.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(n.sourceCodeLocation=e.sourceCodeLocation),n}ee.cloneNode=ow;function wg(e){for(var t=e.map(function(r){return ow(r,!0)}),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}(function(e){var t=Re&&Re.__createBinding||(Object.create?function(a,l,u,c){c===void 0&&(c=u);var f=Object.getOwnPropertyDescriptor(l,u);(!f||("get"in f?!l.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return l[u]}}),Object.defineProperty(a,c,f)}:function(a,l,u,c){c===void 0&&(c=u),a[c]=l[u]}),n=Re&&Re.__exportStar||function(a,l){for(var u in a)u!=="default"&&!Object.prototype.hasOwnProperty.call(l,u)&&t(l,a,u)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var r=rw,i=ee;n(ee,e);var o={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},s=function(){function a(l,u,c){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof u=="function"&&(c=u,u=o),typeof l=="object"&&(u=l,l=void 0),this.callback=l??null,this.options=u??o,this.elementCB=c??null}return a.prototype.onparserinit=function(l){this.parser=l},a.prototype.onreset=function(){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},a.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},a.prototype.onerror=function(l){this.handleCallback(l)},a.prototype.onclosetag=function(){this.lastNode=null;var l=this.tagStack.pop();this.options.withEndIndices&&(l.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(l)},a.prototype.onopentag=function(l,u){var c=this.options.xmlMode?r.ElementType.Tag:void 0,f=new i.Element(l,u,void 0,c);this.addNode(f),this.tagStack.push(f)},a.prototype.ontext=function(l){var u=this.lastNode;if(u&&u.type===r.ElementType.Text)u.data+=l,this.options.withEndIndices&&(u.endIndex=this.parser.endIndex);else{var c=new i.Text(l);this.addNode(c),this.lastNode=c}},a.prototype.oncomment=function(l){if(this.lastNode&&this.lastNode.type===r.ElementType.Comment){this.lastNode.data+=l;return}var u=new i.Comment(l);this.addNode(u),this.lastNode=u},a.prototype.oncommentend=function(){this.lastNode=null},a.prototype.oncdatastart=function(){var l=new i.Text(""),u=new i.CDATA([l]);this.addNode(u),l.parent=u,this.lastNode=l},a.prototype.oncdataend=function(){this.lastNode=null},a.prototype.onprocessinginstruction=function(l,u){var c=new i.ProcessingInstruction(l,u);this.addNode(c)},a.prototype.handleCallback=function(l){if(typeof this.callback=="function")this.callback(l,this.dom);else if(l)throw l},a.prototype.addNode=function(l){var u=this.tagStack[this.tagStack.length-1],c=u.children[u.children.length-1];this.options.withStartIndices&&(l.startIndex=this.parser.startIndex),this.options.withEndIndices&&(l.endIndex=this.parser.endIndex),u.children.push(l),c&&(l.prev=c,c.next=l),l.parent=u,this.lastNode=null},a}();e.DomHandler=s,e.default=s})(nw);var AN={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES=void 0,e.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES.reduce(function(t,n){return t[n.toLowerCase()]=n,t},{})})(AN);Object.defineProperty(ia,"__esModule",{value:!0});ia.formatDOM=ia.formatAttributes=void 0;var ff=nw,fie=AN;function die(e){return fie.CASE_SENSITIVE_TAG_NAMES_MAP[e]}function PN(e){for(var t={},n=0,r=e.length;n<r;n++){var i=e[n];t[i.name]=i.value}return t}ia.formatAttributes=PN;function hie(e){e=e.toLowerCase();var t=die(e);return t||e}function RN(e,t,n){t===void 0&&(t=null);for(var r=[],i,o=0,s=e.length;o<s;o++){var a=e[o];switch(a.nodeType){case 1:{var l=hie(a.nodeName);i=new ff.Element(l,PN(a.attributes)),i.children=RN(l==="template"?a.content.childNodes:a.childNodes,i);break}case 3:i=new ff.Text(a.nodeValue);break;case 8:i=new ff.Comment(a.nodeValue);break;default:continue}var u=r[o-1]||null;u&&(u.next=i),i.parent=t,i.prev=u,i.next=null,r.push(i)}return n&&(i=new ff.ProcessingInstruction(n.substring(0,n.indexOf(" ")).toLowerCase(),n),i.next=r[0]||null,i.parent=t,r.unshift(i),r[1]&&(r[1].prev=r[0])),r}ia.formatDOM=RN;var pie=Re&&Re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ew,"__esModule",{value:!0});var mie=pie(tw),gie=ia,vie=/<(![a-zA-Z\s]+)>/;function yie(e){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];var t=e.match(vie),n=t?t[1]:void 0;return(0,gie.formatDOM)((0,mie.default)(e),null,n)}ew.default=yie;var qp={},Wn={},Gp={},_ie=0;Gp.SAME=_ie;var wie=1;Gp.CAMELCASE=wie;Gp.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};const ON=0,Wi=1,Kp=2,Qp=3,sw=4,NN=5,$N=6;function Eie(e){return bt.hasOwnProperty(e)?bt[e]:null}function Ht(e,t,n,r,i,o,s){this.acceptsBooleans=t===Kp||t===Qp||t===sw,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}const bt={},Sie=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];Sie.forEach(e=>{bt[e]=new Ht(e,ON,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([e,t])=>{bt[e]=new Ht(e,Wi,!1,t,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(e=>{bt[e]=new Ht(e,Kp,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(e=>{bt[e]=new Ht(e,Kp,!1,e,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(e=>{bt[e]=new Ht(e,Qp,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(e=>{bt[e]=new Ht(e,Qp,!0,e,null,!1,!1)});["capture","download"].forEach(e=>{bt[e]=new Ht(e,sw,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(e=>{bt[e]=new Ht(e,$N,!1,e,null,!1,!1)});["rowSpan","start"].forEach(e=>{bt[e]=new Ht(e,NN,!1,e.toLowerCase(),null,!1,!1)});const aw=/[\-\:]([a-z])/g,lw=e=>e[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(e=>{const t=e.replace(aw,lw);bt[t]=new Ht(t,Wi,!1,e,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(e=>{const t=e.replace(aw,lw);bt[t]=new Ht(t,Wi,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(e=>{const t=e.replace(aw,lw);bt[t]=new Ht(t,Wi,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(e=>{bt[e]=new Ht(e,Wi,!1,e.toLowerCase(),null,!1,!1)});const bie="xlinkHref";bt[bie]=new Ht("xlinkHref",Wi,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(e=>{bt[e]=new Ht(e,Wi,!1,e.toLowerCase(),null,!0,!0)});const{CAMELCASE:Tie,SAME:Iie,possibleStandardNames:kI}=Gp,Cie=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",xie=Cie+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",kie=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+xie+"]*$")),Aie=Object.keys(kI).reduce((e,t)=>{const n=kI[t];return n===Iie?e[t]=t:n===Tie?e[t.toLowerCase()]=t:e[t]=n,e},{});Wn.BOOLEAN=Qp;Wn.BOOLEANISH_STRING=Kp;Wn.NUMERIC=NN;Wn.OVERLOADED_BOOLEAN=sw;Wn.POSITIVE_NUMERIC=$N;Wn.RESERVED=ON;Wn.STRING=Wi;Wn.getPropertyInfo=Eie;Wn.isCustomAttribute=kie;Wn.possibleStandardNames=Aie;var uw={},cw={},fw={},AI=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Pie=/\n/g,Rie=/^\s*/,Oie=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Nie=/^:\s*/,$ie=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Die=/^[;\s]*/,Mie=/^\s+|\s+$/g,Lie=`
`,PI="/",RI="*",Yi="",jie="comment",Vie="declaration",Fie=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var m=g.match(Pie);m&&(n+=m.length);var _=g.lastIndexOf(Lie);r=~_?g.length-_:r+g.length}function o(){var g={line:n,column:r};return function(m){return m.position=new s(g),u(),m}}function s(g){this.start=g,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function a(g){var m=new Error(t.source+":"+n+":"+r+": "+g);if(m.reason=g,m.filename=t.source,m.line=n,m.column=r,m.source=e,!t.silent)throw m}function l(g){var m=g.exec(e);if(m){var _=m[0];return i(_),e=e.slice(_.length),m}}function u(){l(Rie)}function c(g){var m;for(g=g||[];m=f();)m!==!1&&g.push(m);return g}function f(){var g=o();if(!(PI!=e.charAt(0)||RI!=e.charAt(1))){for(var m=2;Yi!=e.charAt(m)&&(RI!=e.charAt(m)||PI!=e.charAt(m+1));)++m;if(m+=2,Yi===e.charAt(m-1))return a("End of comment missing");var _=e.slice(2,m-2);return r+=2,i(_),e=e.slice(m),r+=2,g({type:jie,comment:_})}}function d(){var g=o(),m=l(Oie);if(m){if(f(),!l(Nie))return a("property missing ':'");var _=l($ie),v=g({type:Vie,property:OI(m[0].replace(AI,Yi)),value:_?OI(_[0].replace(AI,Yi)):Yi});return l(Die),v}}function h(){var g=[];c(g);for(var m;m=d();)m!==!1&&(g.push(m),c(g));return g}return u(),h()};function OI(e){return e?e.replace(Mie,Yi):Yi}var Uie=Re&&Re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fw,"__esModule",{value:!0});var zie=Uie(Fie);function Bie(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,zie.default)(e),i=typeof t=="function";return r.forEach(function(o){if(o.type==="declaration"){var s=o.property,a=o.value;i?t(s,a,o):a&&(n=n||{},n[s]=a)}}),n}fw.default=Bie;var Yp={};Object.defineProperty(Yp,"__esModule",{value:!0});Yp.camelCase=void 0;var Wie=/^--[a-zA-Z0-9-]+$/,Hie=/-([a-z])/g,qie=/^[^-]+$/,Gie=/^-(webkit|moz|ms|o|khtml)-/,Kie=/^-(ms)-/,Qie=function(e){return!e||qie.test(e)||Wie.test(e)},Yie=function(e,t){return t.toUpperCase()},NI=function(e,t){return"".concat(t,"-")},Xie=function(e,t){return t===void 0&&(t={}),Qie(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Kie,NI):e=e.replace(Gie,NI),e.replace(Hie,Yie))};Yp.camelCase=Xie;var Jie=Re&&Re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cw,"__esModule",{value:!0});var Zie=Jie(fw),eoe=Yp;function toe(e,t){var n={};return!e||typeof e!="string"||(0,Zie.default)(e,function(r,i){r&&i&&(n[(0,eoe.camelCase)(r,t)]=i)}),n}cw.default=toe;(function(e){var t=Re&&Re.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0}),e.returnFirstArg=e.canTextBeChildOfNode=e.ELEMENTS_WITH_NO_TEXT_CHILDREN=e.PRESERVE_CUSTOM_ATTRIBUTES=e.setStyleProp=e.isCustomComponent=void 0;var n=b,r=t(cw),i=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function o(c,f){return c.includes("-")?!i.has(c):!!(f&&typeof f.is=="string")}e.isCustomComponent=o;var s={reactCompat:!0};function a(c,f){if(typeof c=="string"){if(!c.trim()){f.style={};return}try{f.style=(0,r.default)(c,s)}catch{f.style={}}}}e.setStyleProp=a,e.PRESERVE_CUSTOM_ATTRIBUTES=Number(n.version.split(".")[0])>=16,e.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var l=function(c){return!e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(c.name)};e.canTextBeChildOfNode=l;var u=function(c){return c};e.returnFirstArg=u})(uw);Object.defineProperty(qp,"__esModule",{value:!0});var fl=Wn,$I=uw,noe=["checked","value"],roe=["input","select","textarea"],ioe={reset:!0,submit:!0};function ooe(e,t){e===void 0&&(e={});var n={},r=!!(e.type&&ioe[e.type]);for(var i in e){var o=e[i];if((0,fl.isCustomAttribute)(i)){n[i]=o;continue}var s=i.toLowerCase(),a=DI(s);if(a){var l=(0,fl.getPropertyInfo)(a);switch(noe.includes(a)&&roe.includes(t)&&!r&&(a=DI("default"+s)),n[a]=o,l&&l.type){case fl.BOOLEAN:n[a]=!0;break;case fl.OVERLOADED_BOOLEAN:o===""&&(n[a]=!0);break}continue}$I.PRESERVE_CUSTOM_ATTRIBUTES&&(n[i]=o)}return(0,$I.setStyleProp)(e.style,n),n}qp.default=ooe;function DI(e){return fl.possibleStandardNames[e]}var dw={},soe=Re&&Re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dw,"__esModule",{value:!0});var Eg=b,aoe=soe(qp),$l=uw,loe={cloneElement:Eg.cloneElement,createElement:Eg.createElement,isValidElement:Eg.isValidElement};function DN(e,t){for(var n=[],r=typeof(t==null?void 0:t.replace)=="function",i=(t==null?void 0:t.transform)||$l.returnFirstArg,o=(t==null?void 0:t.library)||loe,s=o.cloneElement,a=o.createElement,l=o.isValidElement,u=e.length,c=0;c<u;c++){var f=e[c];if(r){var d=t.replace(f,c);if(l(d)){u>1&&(d=s(d,{key:d.key||c})),n.push(i(d,f,c));continue}}if(f.type==="text"){var h=!f.data.trim().length;if(h&&f.parent&&!(0,$l.canTextBeChildOfNode)(f.parent)||t!=null&&t.trim&&h)continue;n.push(i(f.data,f,c));continue}var g=f,m={};uoe(g)?((0,$l.setStyleProp)(g.attribs.style,g.attribs),m=g.attribs):g.attribs&&(m=(0,aoe.default)(g.attribs,g.name));var _=void 0;switch(f.type){case"script":case"style":f.children[0]&&(m.dangerouslySetInnerHTML={__html:f.children[0].data});break;case"tag":f.name==="textarea"&&f.children[0]?m.defaultValue=f.children[0].data:f.children&&f.children.length&&(_=DN(f.children,t));break;default:continue}u>1&&(m.key=c),n.push(i(a(f.name,m,_),f,c))}return n.length===1?n[0]:n}dw.default=DN;function uoe(e){return $l.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&(0,$l.isCustomComponent)(e.name,e.attribs)}(function(e){var t=Re&&Re.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(e,"__esModule",{value:!0}),e.htmlToDOM=e.domToReact=e.attributesToProps=e.Text=e.ProcessingInstruction=e.Element=e.Comment=void 0;var n=t(ew);e.htmlToDOM=n.default;var r=t(qp);e.attributesToProps=r.default;var i=t(dw);e.domToReact=i.default;var o=nw;Object.defineProperty(e,"Comment",{enumerable:!0,get:function(){return o.Comment}}),Object.defineProperty(e,"Element",{enumerable:!0,get:function(){return o.Element}}),Object.defineProperty(e,"ProcessingInstruction",{enumerable:!0,get:function(){return o.ProcessingInstruction}}),Object.defineProperty(e,"Text",{enumerable:!0,get:function(){return o.Text}});var s={lowerCaseAttributeNames:!1};function a(l,u){if(typeof l!="string")throw new TypeError("First argument must be a string");return l?(0,i.default)((0,n.default)(l,(u==null?void 0:u.htmlparser2)||s),u):[]}e.default=a})(gN);const MI=Oo(gN),coe=MI.default||MI;let df;const foe=new Uint8Array(16);function doe(){if(!df&&(df=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!df))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return df(foe)}const ht=[];for(let e=0;e<256;++e)ht.push((e+256).toString(16).slice(1));function hoe(e,t=0){return ht[e[t+0]]+ht[e[t+1]]+ht[e[t+2]]+ht[e[t+3]]+"-"+ht[e[t+4]]+ht[e[t+5]]+"-"+ht[e[t+6]]+ht[e[t+7]]+"-"+ht[e[t+8]]+ht[e[t+9]]+"-"+ht[e[t+10]]+ht[e[t+11]]+ht[e[t+12]]+ht[e[t+13]]+ht[e[t+14]]+ht[e[t+15]]}const poe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),LI={randomUUID:poe};function jI(e,t,n){if(LI.randomUUID&&!t&&!e)return LI.randomUUID();e=e||{};const r=e.random||(e.rng||doe)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return hoe(r)}const moe=()=>{const{addProductAndQuantityToCart:e,setCartItemIsAdded:t}=b.useContext(Br),n=Ur(),r=ju(),{product:i}=r.state,{name:o,imageUrl:s,sizesAndPrices:a,description:l}=i,u=coe(l),c=a[0].price,[f,d]=b.useState(c),[h,g]=b.useState(a[0].size),[m,_]=b.useState(1),[v,p]=b.useState(jI());b.useEffect(()=>{p(jI())},[h]);const y=$=>{const R=$.target.value,te=a.find(ge=>ge.size===R);console.log(te),te&&(g(te.size),d(te.price))};console.log(f);const E=$=>{const R=$.target.value;console.log(typeof R),/^\d*$/.test(R)&&_(R===""?"":parseInt(R,10))},S=()=>{_($=>typeof $=="number"?$+1:1)},I=()=>{_($=>typeof $=="number"&&$>1?$-1:1)},T=()=>{typeof m=="number"&&m>0?(e(i,h,f,m,v),_(1),t(!0),setTimeout(()=>t(!1),3e3)):console.log(`Invalid quantity: ${m}`)};if(!i)return w.jsx("h1",{children:"Whoops, looks like there was an error loading the page!"});const O=()=>n(-1);return w.jsxs(ite,{children:[w.jsx(ote,{children:w.jsx("img",{src:s,alt:o})}),w.jsxs(ste,{children:[w.jsx("h2",{children:o}),w.jsxs("h3",{children:["Price/item: $ ",f]}),w.jsxs(ate,{children:[w.jsxs(lte,{children:[w.jsx("label",{children:"OPTIONS"}),w.jsx("select",{value:h.size,onChange:y,children:a.map($=>w.jsx("option",{value:$.size,children:$.size},$.size))})]}),w.jsxs(ute,{children:[w.jsx("label",{children:"QUANTITY"}),w.jsxs(L_,{children:[w.jsx(na,{buttonType:Qe.default,onClick:I,children:"-"}),w.jsx(j_,{type:"text",value:m,onChange:E}),w.jsx(na,{buttonType:Qe.default,onClick:S,children:"+"})]})]}),w.jsx(cte,{buttonType:Qe.google,onClick:T,children:"Add to Cart"})]}),w.jsx(fte,{children:u}),w.jsx(dte,{isLoading:!1,buttonType:Qe.default,onClick:O,id:"go-back",children:"Go Back"})]})]})},goe=k.div`
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
 `,voe=k.div`
   display: flex;
   flex-direction: column;
`,yoe=k.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    border: 1px solid black;
`,_oe=k.div`
    display: flex;
    margin-left: auto;
`,woe=k(Cn)`
    border-radius: 2px;
    font-size: 26px;
`,Eoe=k(Cn)`
    border-radius: 2px;
    font-size: 26px;
`,Soe=k(Cn)`
    border-radius: 2px;
    font-size: 26px;
`,boe=k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid black;
`,Toe=k.div`
    width: 30%;

    img {
        height: 250px;
        width: 250px;
        object-fit: cover;
    }
`,Ioe=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
`,Coe=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    margin-right: 20px;

    span {
        font-size: 25px;
    }
`,xoe=k(L_)`
    width: 10%;
    margin: 0 20px;
`,koe=k.div`
    margin: 0 10px;
`,Aoe=k(M_)`
    cursor: pointer;
    
    &:hover {
        color: red;
    }
`,Poe=({cartItem:e})=>{const{imageUrl:t,itemPrice:n,name:r,quantity:i,selectedSize:o,id:s,key:a}=e,{cartItems:l,setCartItems:u,addOneItemToCart:c,removeOneItemFromCart:f,clearItemFromCart:d}=b.useContext(Br),h=v=>{const p=v.target.value,y=l.find(E=>E.id===s&&E.selectedSize===o&&E.key===a);if(/^\d*$/.test(p)&&y){const E=l.map(S=>S.id===s&&S.selectedSize===o&&S.key===a?{...S,quantity:p===""?"":parseInt(p,10)}:S);u(E)}},g=()=>f(e,o,a),m=()=>c(e,o,a),_=()=>d(e,a);return w.jsxs(boe,{children:[w.jsx(Toe,{children:w.jsx("img",{src:t,alt:r})}),w.jsxs(Ioe,{children:[w.jsx("h2",{children:r}),w.jsx("h4",{children:o})]}),w.jsxs(xoe,{children:[w.jsx(na,{buttonType:Qe.default,onClick:g,children:"-"}),w.jsx(j_,{type:"number",value:i,onChange:h}),w.jsx(na,{buttonType:Qe.default,onClick:m,children:"+"})]}),w.jsx(Coe,{children:w.jsxs("span",{children:["$ ",i*n]})}),w.jsx(koe,{onClick:_,children:w.jsx(Aoe,{fontSize:"large"})})]})},Roe=()=>{const e=Ur(),{cartItems:t,cartTotal:n}=b.useContext(Br),r=()=>e("/"),i=()=>e("/checkout"),o=()=>e(-1);return w.jsxs(goe,{children:[w.jsxs(voe,{children:[w.jsx("h1",{children:"SHOPPING CART"}),w.jsx(yoe,{children:t.map(s=>w.jsx(Poe,{cartItem:s},s.key))})]}),w.jsxs("span",{children:["Sub-total: $ ",n]}),w.jsxs(_oe,{children:[w.jsx(Eoe,{buttonType:Qe.default,onClick:r,children:"Return to Home"}),w.jsx(Soe,{buttonType:Qe.default,onClick:o,children:"Go Back"}),w.jsx(woe,{buttonType:Qe.google,onClick:i,children:"Checkout"})]})]})},Ooe=k.div`
    width: 70%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgb(209, 209, 209);
`,MN=Eo`
  top: 2px;
  font-size: 10px;
`,Noe=k.div`
  position: relative;
`,LN=k.label`
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
    ${({$shrink:e})=>e&&MN};
`,$oe=k.input`
  font-size: 16px;
  width: 100%;
  border-radius: 2.5px;
  border: 1px solid black;

  //adjacent sibling selector => when the input is focused, target adjacent sibling (which is Label) and apply the shrinkLabelStyles styling
  
  &:focus ~ ${LN} {
    ${MN};
  }
`,Doe=({label:e,...t})=>w.jsxs(Noe,{children:[w.jsx($oe,{...t}),e&&w.jsx(LN,{$shrink:!!(t.value&&t.value&&typeof t.value=="string"&&t.value.length),children:e})]}),Moe=k(Cn)`
    font-size: 25px;
    border-radius: 2.5px;
`,Loe=k.div`
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
`,joe=k.form`

    label {
        font-size: 30px;
        margin-bottom: 30px;
    }

`,Voe=k.div`
    margin-bottom: 40px;
    margin-top: 20px;
`,Foe=k.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    button {
        margin-left: auto;
    }
`,Uoe=k.div`
    width: 100%;

    label {
        margin-bottom: 10px;
    }
    input {
        margin-top: 10px;
    }
`,zoe=k(Doe)`
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
`,Boe=()=>{const{cartTotal:e}=b.useContext(Br),[t,n]=b.useState(""),[r,i]=b.useState(!1),[o,s]=b.useState(""),a=$M(),l=NM(),u=e*100;b.useEffect(()=>{const d=fetch("/.netlify/functions/create-payment-intent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:u})}).then(h=>h.json()).then(h=>{console.log(h);const{paymentIntent:{client_secret:g}}=h;console.log(g),n(g)});console.log(d),console.log(t)},[]);const c=async d=>{if(d.preventDefault(),!a||!l)return;i(!0);const{error:h}=await l.submit();if(h){console.log(h),i(!1);return}try{const g=await a.confirmPayment({elements:l,clientSecret:t,confirmParams:{return_url:"https://sandra-sanchez-art.netlify.app",payment_method_data:{billing_details:{email:o}}}});if(g.error){console.log(g.error),alert(`There was an error submitting payment: ${g.error}`),i(!1);return}if(!(await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({subject:"Payment and Order Confirmation",recipient:o,message:"Your payment was successful!"})})).ok){console.error("Faled to send email!"),i(!1);return}console.log("Successfully sent email!")}catch(g){console.error("Error processing payment or sending email:",g),i(!1)}},f=d=>{const h=d.target.value;s(h),console.log(o)};return w.jsx(Loe,{children:w.jsxs(joe,{onSubmit:c,children:[w.jsxs(Uoe,{children:[w.jsx("label",{id:"contact-label",children:"Contact"}),w.jsx(zoe,{type:"email",name:"email",value:o,onChange:f,required:!0})]}),w.jsx("label",{children:"Delivery"}),w.jsx(Voe,{children:w.jsx(jM,{options:{mode:"shipping",display:{name:"split"},defaultValues:{firstName:"ex: John",lastName:"ex: Doe",phone:"555-555-5555"},fields:{phone:"always"}},onChange:d=>{if(d.complete){const h=d.value.address;console.log(h)}}})}),w.jsx("label",{children:"Payment Information:"}),w.jsxs(Foe,{children:[w.jsx(LM,{}),w.jsx(Moe,{buttonType:Qe.google,isLoading:r,id:"submit",children:"Pay Now"})]})]})})},Woe=k.div`
    width: 50%;
    margin: 0 30px;
    border-left: 1px solid rgb(209,209,209);
`,Hoe=k.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 10px;
    width: 100%;
`,qoe=k.div`
    display: flex;
    justify-content: space-between;
    margin: 0 25px;
`,Goe=k.div`
    display: flex;
    margin: 30px 30px;
    align-items: center;
    justify-content: center;

`,Koe=k.div`
    position: relative;
    width: 40%;

    img {
        height: 100px;
        width: 100px;
        object-fit: cover;
    }
`,Qoe=k.div`
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
`,Yoe=k.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`,Xoe=k.div`
    display: flex;
    width: 10%;
    margin: 0 10px;
`,Joe=({cartItem:e})=>{const{imageUrl:t,name:n,selectedSize:r,itemPrice:i,quantity:o}=e;return w.jsxs(Goe,{children:[w.jsxs(Koe,{children:[w.jsx("img",{src:t}),w.jsx(Qoe,{children:o})]}),w.jsxs(Yoe,{children:[w.jsx("h3",{children:n}),w.jsx("span",{children:r})]}),w.jsx(Xoe,{children:w.jsxs("span",{children:["$",i]})})]})},Zoe=()=>{const{cartItems:e,cartTotal:t}=b.useContext(Br);return w.jsx(Woe,{children:w.jsxs(Hoe,{children:[e.map(n=>w.jsx(Joe,{cartItem:n},n.key)),w.jsxs(qoe,{children:[w.jsx("h3",{children:"Subtotal"}),w.jsxs("h3",{children:["$ ",t]})]})]})})},ese=()=>w.jsxs(Ooe,{children:[w.jsx(Boe,{}),w.jsx(Zoe,{})]}),tse=()=>{const{setCategoriesMap:e}=b.useContext(q0);return b.useEffect(()=>{(async()=>{try{const n=await Ree();console.log("Logging categories map from App component!: ",n),e(n)}catch(n){console.log(n)}})()},[e]),w.jsx(iM,{children:w.jsxs(Pn,{path:"/",element:w.jsx(mte,{}),children:[w.jsx(Pn,{index:!0,element:w.jsx(Mre,{})}),w.jsx(Pn,{path:"about",element:w.jsx(Vre,{})}),w.jsx(Pn,{path:"mentoring",element:w.jsx(Fre,{})}),w.jsx(Pn,{path:"contact",element:w.jsx(Ure,{})}),w.jsx(Pn,{path:"shop/:category",element:w.jsx(oie,{})}),w.jsx(Pn,{path:"shop/:category/:id",element:w.jsx(moe,{})}),w.jsx(Pn,{path:"authentication",element:w.jsx(eie,{})}),w.jsx(Pn,{path:"cart-summary",element:w.jsx(Roe,{})}),w.jsx(Pn,{path:"checkout",element:w.jsx(ese,{})})]})})};Sg.createRoot(document.getElementById("root")).render(w.jsx(H.StrictMode,{children:w.jsx(cM,{children:w.jsx(YM,{children:w.jsx(Mee,{children:w.jsx(Uee,{children:w.jsx(vk,{stripe:KM,options:QM,children:w.jsx(tse,{})})})})})})}))});export default nse();
