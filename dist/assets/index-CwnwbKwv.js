var wD=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var bue=wD((Pue,k0)=>{function ED(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function SD(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var WI={exports:{}},Lh={},HI={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu=Symbol.for("react.element"),bD=Symbol.for("react.portal"),xD=Symbol.for("react.fragment"),TD=Symbol.for("react.strict_mode"),ID=Symbol.for("react.profiler"),CD=Symbol.for("react.provider"),PD=Symbol.for("react.context"),AD=Symbol.for("react.forward_ref"),kD=Symbol.for("react.suspense"),RD=Symbol.for("react.memo"),OD=Symbol.for("react.lazy"),Jw=Symbol.iterator;function ND(t){return t===null||typeof t!="object"?null:(t=Jw&&t[Jw]||t["@@iterator"],typeof t=="function"?t:null)}var qI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},GI=Object.assign,KI={};function Ea(t,e,n){this.props=t,this.context=e,this.refs=KI,this.updater=n||qI}Ea.prototype.isReactComponent={};Ea.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ea.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function QI(){}QI.prototype=Ea.prototype;function R0(t,e,n){this.props=t,this.context=e,this.refs=KI,this.updater=n||qI}var O0=R0.prototype=new QI;O0.constructor=R0;GI(O0,Ea.prototype);O0.isPureReactComponent=!0;var Zw=Array.isArray,YI=Object.prototype.hasOwnProperty,N0={current:null},XI={key:!0,ref:!0,__self:!0,__source:!0};function JI(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)YI.call(e,r)&&!XI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Yu,type:t,key:o,ref:s,props:i,_owner:N0.current}}function $D(t,e){return{$$typeof:Yu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $0(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yu}function DD(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var eE=/\/+/g;function Nm(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DD(""+t.key):e.toString(36)}function Of(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Yu:case bD:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Nm(s,0):r,Zw(i)?(n="",t!=null&&(n=t.replace(eE,"$&/")+"/"),Of(i,e,n,"",function(u){return u})):i!=null&&($0(i)&&(i=$D(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(eE,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Zw(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Nm(o,a);s+=Of(o,e,n,l,i)}else if(l=ND(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Nm(o,a++),s+=Of(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Dc(t,e,n){if(t==null)return t;var r=[],i=0;return Of(t,r,"","",function(o){return e.call(n,o,i++)}),r}function jD(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},Nf={transition:null},MD={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:Nf,ReactCurrentOwner:N0};re.Children={map:Dc,forEach:function(t,e,n){Dc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Dc(t,function(){e++}),e},toArray:function(t){return Dc(t,function(e){return e})||[]},only:function(t){if(!$0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ea;re.Fragment=xD;re.Profiler=ID;re.PureComponent=R0;re.StrictMode=TD;re.Suspense=kD;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MD;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=GI({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=N0.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)YI.call(e,l)&&!XI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Yu,type:t.type,key:i,ref:o,props:r,_owner:s}};re.createContext=function(t){return t={$$typeof:PD,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CD,_context:t},t.Consumer=t};re.createElement=JI;re.createFactory=function(t){var e=JI.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:AD,render:t}};re.isValidElement=$0;re.lazy=function(t){return{$$typeof:OD,_payload:{_status:-1,_result:t},_init:jD}};re.memo=function(t,e){return{$$typeof:RD,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Nf.transition;Nf.transition={};try{t()}finally{Nf.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return Gt.current.useCallback(t,e)};re.useContext=function(t){return Gt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Gt.current.useEffect(t,e)};re.useId=function(){return Gt.current.useId()};re.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Gt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};re.useRef=function(t){return Gt.current.useRef(t)};re.useState=function(t){return Gt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Gt.current.useTransition()};re.version="18.2.0";HI.exports=re;var b=HI.exports;const H=Wo(b),hd=ED({__proto__:null,default:H},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LD=b,VD=Symbol.for("react.element"),FD=Symbol.for("react.fragment"),UD=Object.prototype.hasOwnProperty,zD=LD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BD={key:!0,ref:!0,__self:!0,__source:!0};function ZI(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)UD.call(e,r)&&!BD.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VD,type:t,key:o,ref:s,props:i,_owner:zD.current}}Lh.Fragment=FD;Lh.jsx=ZI;Lh.jsxs=ZI;WI.exports=Lh;var h=WI.exports,rv={},eC={exports:{}},mn={},tC={exports:{}},nC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,U){var q=j.length;j.push(U);e:for(;0<q;){var fe=q-1>>>1,ae=j[fe];if(0<i(ae,U))j[fe]=U,j[q]=ae,q=fe;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var U=j[0],q=j.pop();if(q!==U){j[0]=q;e:for(var fe=0,ae=j.length,$n=ae>>>1;fe<$n;){var At=2*(fe+1)-1,er=j[At],Ut=At+1,_n=j[Ut];if(0>i(er,q))Ut<ae&&0>i(_n,er)?(j[fe]=_n,j[Ut]=q,fe=Ut):(j[fe]=er,j[At]=q,fe=At);else if(Ut<ae&&0>i(_n,q))j[fe]=_n,j[Ut]=q,fe=Ut;else break e}}return U}function i(j,U){var q=j.sortIndex-U.sortIndex;return q!==0?q:j.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,v=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(j){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=j)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function E(j){if(g=!1,_(j),!v)if(n(l)!==null)v=!0,Zn(S);else{var U=n(u);U!==null&&ke(E,U.startTime-j)}}function S(j,U){v=!1,g&&(g=!1,y(O),O=-1),p=!0;var q=d;try{for(_(U),f=n(l);f!==null&&(!(f.expirationTime>U)||j&&!te());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,d=f.priorityLevel;var ae=fe(f.expirationTime<=U);U=t.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),_(U)}else r(l);f=n(l)}if(f!==null)var $n=!0;else{var At=n(u);At!==null&&ke(E,At.startTime-U),$n=!1}return $n}finally{f=null,d=q,p=!1}}var T=!1,x=null,O=-1,D=5,R=-1;function te(){return!(t.unstable_now()-R<D)}function ve(){if(x!==null){var j=t.unstable_now();R=j;var U=!0;try{U=x(!0,j)}finally{U?lt():(T=!1,x=null)}}else T=!1}var lt;if(typeof m=="function")lt=function(){m(ve)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,Jn=gt.port2;gt.port1.onmessage=ve,lt=function(){Jn.postMessage(null)}}else lt=function(){w(ve,0)};function Zn(j){x=j,T||(T=!0,lt())}function ke(j,U){O=w(function(){j(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Zn(S))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(j){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var q=d;d=U;try{return j()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,U){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var q=d;d=j;try{return U()}finally{d=q}},t.unstable_scheduleCallback=function(j,U,q){var fe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?fe+q:fe):q=fe,j){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=q+ae,j={id:c++,callback:U,priorityLevel:j,startTime:q,expirationTime:ae,sortIndex:-1},q>fe?(j.sortIndex=q,e(u,j),n(l)===null&&j===n(u)&&(g?(y(O),O=-1):g=!0,ke(E,q-fe))):(j.sortIndex=ae,e(l,j),v||p||(v=!0,Zn(S))),j},t.unstable_shouldYield=te,t.unstable_wrapCallback=function(j){var U=d;return function(){var q=d;d=U;try{return j.apply(this,arguments)}finally{d=q}}}})(nC);tC.exports=nC;var WD=tC.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rC=b,hn=WD;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iC=new Set,Zl={};function Ho(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Zl[t]=e,t=0;t<e.length;t++)iC.add(e[t])}var Mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iv=Object.prototype.hasOwnProperty,HD=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tE={},nE={};function qD(t){return iv.call(nE,t)?!0:iv.call(tE,t)?!1:HD.test(t)?nE[t]=!0:(tE[t]=!0,!1)}function GD(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KD(t,e,n,r){if(e===null||typeof e>"u"||GD(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var D0=/[\-:]([a-z])/g;function j0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(D0,j0);Ct[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(D0,j0);Ct[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(D0,j0);Ct[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function M0(t,e,n,r){var i=Ct.hasOwnProperty(e)?Ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KD(e,n,i,r)&&(n=null),r||i===null?qD(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kr=rC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jc=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),L0=Symbol.for("react.strict_mode"),ov=Symbol.for("react.profiler"),oC=Symbol.for("react.provider"),sC=Symbol.for("react.context"),V0=Symbol.for("react.forward_ref"),sv=Symbol.for("react.suspense"),av=Symbol.for("react.suspense_list"),F0=Symbol.for("react.memo"),li=Symbol.for("react.lazy"),aC=Symbol.for("react.offscreen"),rE=Symbol.iterator;function qa(t){return t===null||typeof t!="object"?null:(t=rE&&t[rE]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,$m;function hl(t){if($m===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$m=e&&e[1]||""}return`
`+$m+t}var Dm=!1;function jm(t,e){if(!t||Dm)return"";Dm=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Dm=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?hl(t):""}function QD(t){switch(t.tag){case 5:return hl(t.type);case 16:return hl("Lazy");case 13:return hl("Suspense");case 19:return hl("SuspenseList");case 0:case 2:case 15:return t=jm(t.type,!1),t;case 11:return t=jm(t.type.render,!1),t;case 1:return t=jm(t.type,!0),t;default:return""}}function lv(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case hs:return"Portal";case ov:return"Profiler";case L0:return"StrictMode";case sv:return"Suspense";case av:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sC:return(t.displayName||"Context")+".Consumer";case oC:return(t._context.displayName||"Context")+".Provider";case V0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F0:return e=t.displayName||null,e!==null?e:lv(t.type)||"Memo";case li:e=t._payload,t=t._init;try{return lv(t(e))}catch{}}return null}function YD(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lv(e);case 8:return e===L0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lC(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XD(t){var e=lC(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mc(t){t._valueTracker||(t._valueTracker=XD(t))}function uC(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lC(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function uv(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function iE(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cC(t,e){e=e.checked,e!=null&&M0(t,"checked",e,!1)}function cv(t,e){cC(t,e);var n=Di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fv(t,e.type,n):e.hasOwnProperty("defaultValue")&&fv(t,e.type,Di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function oE(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fv(t,e,n){(e!=="number"||pd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pl=Array.isArray;function Rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function dv(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sE(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(pl(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Di(n)}}function fC(t,e){var n=Di(e.value),r=Di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function aE(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dC(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hv(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dC(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lc,hC=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lc=Lc||document.createElement("div"),Lc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function eu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Al={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JD=["Webkit","ms","Moz","O"];Object.keys(Al).forEach(function(t){JD.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Al[e]=Al[t]})});function pC(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Al.hasOwnProperty(t)&&Al[t]?(""+e).trim():e+"px"}function mC(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pC(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ZD=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pv(t,e){if(e){if(ZD[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function mv(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gv=null;function U0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vv=null,Os=null,Ns=null;function lE(t){if(t=Zu(t)){if(typeof vv!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Bh(e),vv(t.stateNode,t.type,e))}}function gC(t){Os?Ns?Ns.push(t):Ns=[t]:Os=t}function vC(){if(Os){var t=Os,e=Ns;if(Ns=Os=null,lE(t),e)for(t=0;t<e.length;t++)lE(e[t])}}function yC(t,e){return t(e)}function _C(){}var Mm=!1;function wC(t,e,n){if(Mm)return t(e,n);Mm=!0;try{return yC(t,e,n)}finally{Mm=!1,(Os!==null||Ns!==null)&&(_C(),vC())}}function tu(t,e){var n=t.stateNode;if(n===null)return null;var r=Bh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var yv=!1;if(Mr)try{var Ga={};Object.defineProperty(Ga,"passive",{get:function(){yv=!0}}),window.addEventListener("test",Ga,Ga),window.removeEventListener("test",Ga,Ga)}catch{yv=!1}function e4(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var kl=!1,md=null,gd=!1,_v=null,t4={onError:function(t){kl=!0,md=t}};function n4(t,e,n,r,i,o,s,a,l){kl=!1,md=null,e4.apply(t4,arguments)}function r4(t,e,n,r,i,o,s,a,l){if(n4.apply(this,arguments),kl){if(kl){var u=md;kl=!1,md=null}else throw Error(k(198));gd||(gd=!0,_v=u)}}function qo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function EC(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uE(t){if(qo(t)!==t)throw Error(k(188))}function i4(t){var e=t.alternate;if(!e){if(e=qo(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return uE(i),t;if(o===r)return uE(i),e;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function SC(t){return t=i4(t),t!==null?bC(t):null}function bC(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bC(t);if(e!==null)return e;t=t.sibling}return null}var xC=hn.unstable_scheduleCallback,cE=hn.unstable_cancelCallback,o4=hn.unstable_shouldYield,s4=hn.unstable_requestPaint,We=hn.unstable_now,a4=hn.unstable_getCurrentPriorityLevel,z0=hn.unstable_ImmediatePriority,TC=hn.unstable_UserBlockingPriority,vd=hn.unstable_NormalPriority,l4=hn.unstable_LowPriority,IC=hn.unstable_IdlePriority,Vh=null,dr=null;function u4(t){if(dr&&typeof dr.onCommitFiberRoot=="function")try{dr.onCommitFiberRoot(Vh,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:d4,c4=Math.log,f4=Math.LN2;function d4(t){return t>>>=0,t===0?32:31-(c4(t)/f4|0)|0}var Vc=64,Fc=4194304;function ml(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ml(a):(o&=s,o!==0&&(r=ml(o)))}else s=n&~i,s!==0?r=ml(s):o!==0&&(r=ml(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bn(e),i=1<<n,r|=t[n],e&=~i;return r}function h4(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p4(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Bn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=h4(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function wv(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function CC(){var t=Vc;return Vc<<=1,!(Vc&4194240)&&(Vc=64),t}function Lm(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function m4(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function B0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function PC(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var AC,W0,kC,RC,OC,Ev=!1,Uc=[],Ei=null,Si=null,bi=null,nu=new Map,ru=new Map,ci=[],g4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fE(t,e){switch(t){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":Si=null;break;case"mouseover":case"mouseout":bi=null;break;case"pointerover":case"pointerout":nu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ru.delete(e.pointerId)}}function Ka(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Zu(e),e!==null&&W0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function v4(t,e,n,r,i){switch(e){case"focusin":return Ei=Ka(Ei,t,e,n,r,i),!0;case"dragenter":return Si=Ka(Si,t,e,n,r,i),!0;case"mouseover":return bi=Ka(bi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return nu.set(o,Ka(nu.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ru.set(o,Ka(ru.get(o)||null,t,e,n,r,i)),!0}return!1}function NC(t){var e=lo(t.target);if(e!==null){var n=qo(e);if(n!==null){if(e=n.tag,e===13){if(e=EC(n),e!==null){t.blockedOn=e,OC(t.priority,function(){kC(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $f(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sv(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gv=r,n.target.dispatchEvent(r),gv=null}else return e=Zu(n),e!==null&&W0(e),t.blockedOn=n,!1;e.shift()}return!0}function dE(t,e,n){$f(t)&&n.delete(e)}function y4(){Ev=!1,Ei!==null&&$f(Ei)&&(Ei=null),Si!==null&&$f(Si)&&(Si=null),bi!==null&&$f(bi)&&(bi=null),nu.forEach(dE),ru.forEach(dE)}function Qa(t,e){t.blockedOn===e&&(t.blockedOn=null,Ev||(Ev=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,y4)))}function iu(t){function e(i){return Qa(i,t)}if(0<Uc.length){Qa(Uc[0],t);for(var n=1;n<Uc.length;n++){var r=Uc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ei!==null&&Qa(Ei,t),Si!==null&&Qa(Si,t),bi!==null&&Qa(bi,t),nu.forEach(e),ru.forEach(e),n=0;n<ci.length;n++)r=ci[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ci.length&&(n=ci[0],n.blockedOn===null);)NC(n),n.blockedOn===null&&ci.shift()}var $s=Kr.ReactCurrentBatchConfig,_d=!0;function _4(t,e,n,r){var i=pe,o=$s.transition;$s.transition=null;try{pe=1,H0(t,e,n,r)}finally{pe=i,$s.transition=o}}function w4(t,e,n,r){var i=pe,o=$s.transition;$s.transition=null;try{pe=4,H0(t,e,n,r)}finally{pe=i,$s.transition=o}}function H0(t,e,n,r){if(_d){var i=Sv(t,e,n,r);if(i===null)Km(t,e,r,wd,n),fE(t,r);else if(v4(i,t,e,n,r))r.stopPropagation();else if(fE(t,r),e&4&&-1<g4.indexOf(t)){for(;i!==null;){var o=Zu(i);if(o!==null&&AC(o),o=Sv(t,e,n,r),o===null&&Km(t,e,r,wd,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Km(t,e,r,null,n)}}var wd=null;function Sv(t,e,n,r){if(wd=null,t=U0(r),t=lo(t),t!==null)if(e=qo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=EC(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wd=t,null}function $C(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a4()){case z0:return 1;case TC:return 4;case vd:case l4:return 16;case IC:return 536870912;default:return 16}default:return 16}}var gi=null,q0=null,Df=null;function DC(){if(Df)return Df;var t,e=q0,n=e.length,r,i="value"in gi?gi.value:gi.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Df=i.slice(t,1<r?1-r:void 0)}function jf(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zc(){return!0}function hE(){return!1}function gn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zc:hE,this.isPropagationStopped=hE,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zc)},persist:function(){},isPersistent:zc}),e}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},G0=gn(Sa),Ju=Me({},Sa,{view:0,detail:0}),E4=gn(Ju),Vm,Fm,Ya,Fh=Me({},Ju,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:K0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ya&&(Ya&&t.type==="mousemove"?(Vm=t.screenX-Ya.screenX,Fm=t.screenY-Ya.screenY):Fm=Vm=0,Ya=t),Vm)},movementY:function(t){return"movementY"in t?t.movementY:Fm}}),pE=gn(Fh),S4=Me({},Fh,{dataTransfer:0}),b4=gn(S4),x4=Me({},Ju,{relatedTarget:0}),Um=gn(x4),T4=Me({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),I4=gn(T4),C4=Me({},Sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P4=gn(C4),A4=Me({},Sa,{data:0}),mE=gn(A4),k4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N4(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=O4[t])?!!e[t]:!1}function K0(){return N4}var $4=Me({},Ju,{key:function(t){if(t.key){var e=k4[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?R4[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:K0,charCode:function(t){return t.type==="keypress"?jf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D4=gn($4),j4=Me({},Fh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gE=gn(j4),M4=Me({},Ju,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:K0}),L4=gn(M4),V4=Me({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),F4=gn(V4),U4=Me({},Fh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z4=gn(U4),B4=[9,13,27,32],Q0=Mr&&"CompositionEvent"in window,Rl=null;Mr&&"documentMode"in document&&(Rl=document.documentMode);var W4=Mr&&"TextEvent"in window&&!Rl,jC=Mr&&(!Q0||Rl&&8<Rl&&11>=Rl),vE=" ",yE=!1;function MC(t,e){switch(t){case"keyup":return B4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function LC(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function H4(t,e){switch(t){case"compositionend":return LC(e);case"keypress":return e.which!==32?null:(yE=!0,vE);case"textInput":return t=e.data,t===vE&&yE?null:t;default:return null}}function q4(t,e){if(ms)return t==="compositionend"||!Q0&&MC(t,e)?(t=DC(),Df=q0=gi=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jC&&e.locale!=="ko"?null:e.data;default:return null}}var G4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _E(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!G4[t.type]:e==="textarea"}function VC(t,e,n,r){gC(r),e=Ed(e,"onChange"),0<e.length&&(n=new G0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ol=null,ou=null;function K4(t){YC(t,0)}function Uh(t){var e=ys(t);if(uC(e))return t}function Q4(t,e){if(t==="change")return e}var FC=!1;if(Mr){var zm;if(Mr){var Bm="oninput"in document;if(!Bm){var wE=document.createElement("div");wE.setAttribute("oninput","return;"),Bm=typeof wE.oninput=="function"}zm=Bm}else zm=!1;FC=zm&&(!document.documentMode||9<document.documentMode)}function EE(){Ol&&(Ol.detachEvent("onpropertychange",UC),ou=Ol=null)}function UC(t){if(t.propertyName==="value"&&Uh(ou)){var e=[];VC(e,ou,t,U0(t)),wC(K4,e)}}function Y4(t,e,n){t==="focusin"?(EE(),Ol=e,ou=n,Ol.attachEvent("onpropertychange",UC)):t==="focusout"&&EE()}function X4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uh(ou)}function J4(t,e){if(t==="click")return Uh(e)}function Z4(t,e){if(t==="input"||t==="change")return Uh(e)}function e5(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:e5;function su(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!iv.call(e,i)||!Gn(t[i],e[i]))return!1}return!0}function SE(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bE(t,e){var n=SE(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=SE(n)}}function zC(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zC(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function BC(){for(var t=window,e=pd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pd(t.document)}return e}function Y0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function t5(t){var e=BC(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zC(n.ownerDocument.documentElement,n)){if(r!==null&&Y0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=bE(n,o);var s=bE(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var n5=Mr&&"documentMode"in document&&11>=document.documentMode,gs=null,bv=null,Nl=null,xv=!1;function xE(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xv||gs==null||gs!==pd(r)||(r=gs,"selectionStart"in r&&Y0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nl&&su(Nl,r)||(Nl=r,r=Ed(bv,"onSelect"),0<r.length&&(e=new G0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gs)))}function Bc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:Bc("Animation","AnimationEnd"),animationiteration:Bc("Animation","AnimationIteration"),animationstart:Bc("Animation","AnimationStart"),transitionend:Bc("Transition","TransitionEnd")},Wm={},WC={};Mr&&(WC=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function zh(t){if(Wm[t])return Wm[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in WC)return Wm[t]=e[n];return t}var HC=zh("animationend"),qC=zh("animationiteration"),GC=zh("animationstart"),KC=zh("transitionend"),QC=new Map,TE="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){QC.set(t,e),Ho(e,[t])}for(var Hm=0;Hm<TE.length;Hm++){var qm=TE[Hm],r5=qm.toLowerCase(),i5=qm[0].toUpperCase()+qm.slice(1);Wi(r5,"on"+i5)}Wi(HC,"onAnimationEnd");Wi(qC,"onAnimationIteration");Wi(GC,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(KC,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o5=new Set("cancel close invalid load scroll toggle".split(" ").concat(gl));function IE(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,r4(r,e,void 0,t),t.currentTarget=null}function YC(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;IE(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;IE(i,a,u),o=l}}}if(gd)throw t=_v,gd=!1,_v=null,t}function Se(t,e){var n=e[Av];n===void 0&&(n=e[Av]=new Set);var r=t+"__bubble";n.has(r)||(XC(e,t,2,!1),n.add(r))}function Gm(t,e,n){var r=0;e&&(r|=4),XC(n,t,r,e)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function au(t){if(!t[Wc]){t[Wc]=!0,iC.forEach(function(n){n!=="selectionchange"&&(o5.has(n)||Gm(n,!1,t),Gm(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wc]||(e[Wc]=!0,Gm("selectionchange",!1,e))}}function XC(t,e,n,r){switch($C(e)){case 1:var i=_4;break;case 4:i=w4;break;default:i=H0}n=i.bind(null,e,n,t),i=void 0,!yv||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Km(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=lo(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}wC(function(){var u=o,c=U0(n),f=[];e:{var d=QC.get(t);if(d!==void 0){var p=G0,v=t;switch(t){case"keypress":if(jf(n)===0)break e;case"keydown":case"keyup":p=D4;break;case"focusin":v="focus",p=Um;break;case"focusout":v="blur",p=Um;break;case"beforeblur":case"afterblur":p=Um;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=b4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=L4;break;case HC:case qC:case GC:p=I4;break;case KC:p=F4;break;case"scroll":p=E4;break;case"wheel":p=z4;break;case"copy":case"cut":case"paste":p=P4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gE}var g=(e&4)!==0,w=!g&&t==="scroll",y=g?d!==null?d+"Capture":null:d;g=[];for(var m=u,_;m!==null;){_=m;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,y!==null&&(E=tu(m,y),E!=null&&g.push(lu(m,E,_)))),w)break;m=m.return}0<g.length&&(d=new p(d,v,null,n,c),f.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==gv&&(v=n.relatedTarget||n.fromElement)&&(lo(v)||v[Lr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?lo(v):null,v!==null&&(w=qo(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(g=pE,E="onMouseLeave",y="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(g=gE,E="onPointerLeave",y="onPointerEnter",m="pointer"),w=p==null?d:ys(p),_=v==null?d:ys(v),d=new g(E,m+"leave",p,n,c),d.target=w,d.relatedTarget=_,E=null,lo(c)===u&&(g=new g(y,m+"enter",v,n,c),g.target=_,g.relatedTarget=w,E=g),w=E,p&&v)t:{for(g=p,y=v,m=0,_=g;_;_=Xo(_))m++;for(_=0,E=y;E;E=Xo(E))_++;for(;0<m-_;)g=Xo(g),m--;for(;0<_-m;)y=Xo(y),_--;for(;m--;){if(g===y||y!==null&&g===y.alternate)break t;g=Xo(g),y=Xo(y)}g=null}else g=null;p!==null&&CE(f,d,p,g,!1),v!==null&&w!==null&&CE(f,w,v,g,!0)}}e:{if(d=u?ys(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=Q4;else if(_E(d))if(FC)S=Z4;else{S=X4;var T=Y4}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=J4);if(S&&(S=S(t,u))){VC(f,S,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&fv(d,"number",d.value)}switch(T=u?ys(u):window,t){case"focusin":(_E(T)||T.contentEditable==="true")&&(gs=T,bv=u,Nl=null);break;case"focusout":Nl=bv=gs=null;break;case"mousedown":xv=!0;break;case"contextmenu":case"mouseup":case"dragend":xv=!1,xE(f,n,c);break;case"selectionchange":if(n5)break;case"keydown":case"keyup":xE(f,n,c)}var x;if(Q0)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ms?MC(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(jC&&n.locale!=="ko"&&(ms||O!=="onCompositionStart"?O==="onCompositionEnd"&&ms&&(x=DC()):(gi=c,q0="value"in gi?gi.value:gi.textContent,ms=!0)),T=Ed(u,O),0<T.length&&(O=new mE(O,t,null,n,c),f.push({event:O,listeners:T}),x?O.data=x:(x=LC(n),x!==null&&(O.data=x)))),(x=W4?H4(t,n):q4(t,n))&&(u=Ed(u,"onBeforeInput"),0<u.length&&(c=new mE("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=x))}YC(f,e)})}function lu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ed(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=tu(t,n),o!=null&&r.unshift(lu(t,o,i)),o=tu(t,e),o!=null&&r.push(lu(t,o,i))),t=t.return}return r}function Xo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function CE(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=tu(n,o),l!=null&&s.unshift(lu(n,l,a))):i||(l=tu(n,o),l!=null&&s.push(lu(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var s5=/\r\n?/g,a5=/\u0000|\uFFFD/g;function PE(t){return(typeof t=="string"?t:""+t).replace(s5,`
`).replace(a5,"")}function Hc(t,e,n){if(e=PE(e),PE(t)!==e&&n)throw Error(k(425))}function Sd(){}var Tv=null,Iv=null;function Cv(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pv=typeof setTimeout=="function"?setTimeout:void 0,l5=typeof clearTimeout=="function"?clearTimeout:void 0,AE=typeof Promise=="function"?Promise:void 0,u5=typeof queueMicrotask=="function"?queueMicrotask:typeof AE<"u"?function(t){return AE.resolve(null).then(t).catch(c5)}:Pv;function c5(t){setTimeout(function(){throw t})}function Qm(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),iu(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);iu(e)}function xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kE(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ba=Math.random().toString(36).slice(2),ar="__reactFiber$"+ba,uu="__reactProps$"+ba,Lr="__reactContainer$"+ba,Av="__reactEvents$"+ba,f5="__reactListeners$"+ba,d5="__reactHandles$"+ba;function lo(t){var e=t[ar];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[ar]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kE(t);t!==null;){if(n=t[ar])return n;t=kE(t)}return e}t=n,n=t.parentNode}return null}function Zu(t){return t=t[ar]||t[Lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Bh(t){return t[uu]||null}var kv=[],_s=-1;function Hi(t){return{current:t}}function Pe(t){0>_s||(t.current=kv[_s],kv[_s]=null,_s--)}function _e(t,e){_s++,kv[_s]=t.current,t.current=e}var ji={},Vt=Hi(ji),Zt=Hi(!1),Po=ji;function Ks(t,e){var n=t.type.contextTypes;if(!n)return ji;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function en(t){return t=t.childContextTypes,t!=null}function bd(){Pe(Zt),Pe(Vt)}function RE(t,e,n){if(Vt.current!==ji)throw Error(k(168));_e(Vt,e),_e(Zt,n)}function JC(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,YD(t)||"Unknown",i));return Me({},n,r)}function xd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,Po=Vt.current,_e(Vt,t),_e(Zt,Zt.current),!0}function OE(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=JC(t,e,Po),r.__reactInternalMemoizedMergedChildContext=t,Pe(Zt),Pe(Vt),_e(Vt,t)):Pe(Zt),_e(Zt,n)}var Pr=null,Wh=!1,Ym=!1;function ZC(t){Pr===null?Pr=[t]:Pr.push(t)}function h5(t){Wh=!0,ZC(t)}function qi(){if(!Ym&&Pr!==null){Ym=!0;var t=0,e=pe;try{var n=Pr;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pr=null,Wh=!1}catch(i){throw Pr!==null&&(Pr=Pr.slice(t+1)),xC(z0,qi),i}finally{pe=e,Ym=!1}}return null}var ws=[],Es=0,Td=null,Id=0,En=[],Sn=0,Ao=null,kr=1,Rr="";function to(t,e){ws[Es++]=Id,ws[Es++]=Td,Td=t,Id=e}function eP(t,e,n){En[Sn++]=kr,En[Sn++]=Rr,En[Sn++]=Ao,Ao=t;var r=kr;t=Rr;var i=32-Bn(r)-1;r&=~(1<<i),n+=1;var o=32-Bn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,kr=1<<32-Bn(e)+i|n<<i|r,Rr=o+t}else kr=1<<o|n<<i|r,Rr=t}function X0(t){t.return!==null&&(to(t,1),eP(t,1,0))}function J0(t){for(;t===Td;)Td=ws[--Es],ws[Es]=null,Id=ws[--Es],ws[Es]=null;for(;t===Ao;)Ao=En[--Sn],En[Sn]=null,Rr=En[--Sn],En[Sn]=null,kr=En[--Sn],En[Sn]=null}var fn=null,cn=null,Oe=!1,Fn=null;function tP(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function NE(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,cn=xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ao!==null?{id:kr,overflow:Rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,cn=null,!0):!1;default:return!1}}function Rv(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ov(t){if(Oe){var e=cn;if(e){var n=e;if(!NE(t,e)){if(Rv(t))throw Error(k(418));e=xi(n.nextSibling);var r=fn;e&&NE(t,e)?tP(r,n):(t.flags=t.flags&-4097|2,Oe=!1,fn=t)}}else{if(Rv(t))throw Error(k(418));t.flags=t.flags&-4097|2,Oe=!1,fn=t}}}function $E(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function qc(t){if(t!==fn)return!1;if(!Oe)return $E(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cv(t.type,t.memoizedProps)),e&&(e=cn)){if(Rv(t))throw nP(),Error(k(418));for(;e;)tP(t,e),e=xi(e.nextSibling)}if($E(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=fn?xi(t.stateNode.nextSibling):null;return!0}function nP(){for(var t=cn;t;)t=xi(t.nextSibling)}function Qs(){cn=fn=null,Oe=!1}function Z0(t){Fn===null?Fn=[t]:Fn.push(t)}var p5=Kr.ReactCurrentBatchConfig;function Ln(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cd=Hi(null),Pd=null,Ss=null,e1=null;function t1(){e1=Ss=Pd=null}function n1(t){var e=Cd.current;Pe(Cd),t._currentValue=e}function Nv(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Pd=t,e1=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xt=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(e1!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Pd===null)throw Error(k(308));Ss=t,Pd.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var uo=null;function r1(t){uo===null?uo=[t]:uo.push(t)}function rP(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,r1(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vr(t,r)}function Vr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ui=!1;function i1(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iP(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vr(t,n)}return i=r.interleaved,i===null?(e.next=e,r1(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vr(t,n)}function Mf(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,B0(t,n)}}function DE(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ad(t,e,n,r){var i=t.updateQueue;ui=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,g=a;switch(d=e,p=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=Me({},f,d);break e;case 2:ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Ro|=s,t.lanes=s,t.memoizedState=f}}function jE(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var oP=new rC.Component().refs;function $v(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hh={isMounted:function(t){return(t=t._reactInternals)?qo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Ci(t),o=Dr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Ti(t,o,i),e!==null&&(Wn(e,t,i,r),Mf(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Ci(t),o=Dr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ti(t,o,i),e!==null&&(Wn(e,t,i,r),Mf(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=Ci(t),i=Dr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ti(t,i,r),e!==null&&(Wn(e,t,r,n),Mf(e,t,r))}};function ME(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!su(n,r)||!su(i,o):!0}function sP(t,e,n){var r=!1,i=ji,o=e.contextType;return typeof o=="object"&&o!==null?o=Pn(o):(i=en(e)?Po:Vt.current,r=e.contextTypes,o=(r=r!=null)?Ks(t,i):ji),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function LE(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hh.enqueueReplaceState(e,e.state,null)}function Dv(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=oP,i1(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Pn(o):(o=en(e)?Po:Vt.current,i.context=Ks(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&($v(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hh.enqueueReplaceState(i,i.state,null),Ad(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===oP&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Gc(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function VE(t){var e=t._init;return e(t._payload)}function aP(t){function e(y,m){if(t){var _=y.deletions;_===null?(y.deletions=[m],y.flags|=16):_.push(m)}}function n(y,m){if(!t)return null;for(;m!==null;)e(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=Pi(y,m),y.index=0,y.sibling=null,y}function o(y,m,_){return y.index=_,t?(_=y.alternate,_!==null?(_=_.index,_<m?(y.flags|=2,m):_):(y.flags|=2,m)):(y.flags|=1048576,m)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,m,_,E){return m===null||m.tag!==6?(m=rg(_,y.mode,E),m.return=y,m):(m=i(m,_),m.return=y,m)}function l(y,m,_,E){var S=_.type;return S===ps?c(y,m,_.props.children,E,_.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===li&&VE(S)===m.type)?(E=i(m,_.props),E.ref=Xa(y,m,_),E.return=y,E):(E=Bf(_.type,_.key,_.props,null,y.mode,E),E.ref=Xa(y,m,_),E.return=y,E)}function u(y,m,_,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=ig(_,y.mode,E),m.return=y,m):(m=i(m,_.children||[]),m.return=y,m)}function c(y,m,_,E,S){return m===null||m.tag!==7?(m=So(_,y.mode,E,S),m.return=y,m):(m=i(m,_),m.return=y,m)}function f(y,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=rg(""+m,y.mode,_),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case jc:return _=Bf(m.type,m.key,m.props,null,y.mode,_),_.ref=Xa(y,null,m),_.return=y,_;case hs:return m=ig(m,y.mode,_),m.return=y,m;case li:var E=m._init;return f(y,E(m._payload),_)}if(pl(m)||qa(m))return m=So(m,y.mode,_,null),m.return=y,m;Gc(y,m)}return null}function d(y,m,_,E){var S=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(y,m,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case jc:return _.key===S?l(y,m,_,E):null;case hs:return _.key===S?u(y,m,_,E):null;case li:return S=_._init,d(y,m,S(_._payload),E)}if(pl(_)||qa(_))return S!==null?null:c(y,m,_,E,null);Gc(y,_)}return null}function p(y,m,_,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return y=y.get(_)||null,a(m,y,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case jc:return y=y.get(E.key===null?_:E.key)||null,l(m,y,E,S);case hs:return y=y.get(E.key===null?_:E.key)||null,u(m,y,E,S);case li:var T=E._init;return p(y,m,_,T(E._payload),S)}if(pl(E)||qa(E))return y=y.get(_)||null,c(m,y,E,S,null);Gc(m,E)}return null}function v(y,m,_,E){for(var S=null,T=null,x=m,O=m=0,D=null;x!==null&&O<_.length;O++){x.index>O?(D=x,x=null):D=x.sibling;var R=d(y,x,_[O],E);if(R===null){x===null&&(x=D);break}t&&x&&R.alternate===null&&e(y,x),m=o(R,m,O),T===null?S=R:T.sibling=R,T=R,x=D}if(O===_.length)return n(y,x),Oe&&to(y,O),S;if(x===null){for(;O<_.length;O++)x=f(y,_[O],E),x!==null&&(m=o(x,m,O),T===null?S=x:T.sibling=x,T=x);return Oe&&to(y,O),S}for(x=r(y,x);O<_.length;O++)D=p(x,y,O,_[O],E),D!==null&&(t&&D.alternate!==null&&x.delete(D.key===null?O:D.key),m=o(D,m,O),T===null?S=D:T.sibling=D,T=D);return t&&x.forEach(function(te){return e(y,te)}),Oe&&to(y,O),S}function g(y,m,_,E){var S=qa(_);if(typeof S!="function")throw Error(k(150));if(_=S.call(_),_==null)throw Error(k(151));for(var T=S=null,x=m,O=m=0,D=null,R=_.next();x!==null&&!R.done;O++,R=_.next()){x.index>O?(D=x,x=null):D=x.sibling;var te=d(y,x,R.value,E);if(te===null){x===null&&(x=D);break}t&&x&&te.alternate===null&&e(y,x),m=o(te,m,O),T===null?S=te:T.sibling=te,T=te,x=D}if(R.done)return n(y,x),Oe&&to(y,O),S;if(x===null){for(;!R.done;O++,R=_.next())R=f(y,R.value,E),R!==null&&(m=o(R,m,O),T===null?S=R:T.sibling=R,T=R);return Oe&&to(y,O),S}for(x=r(y,x);!R.done;O++,R=_.next())R=p(x,y,O,R.value,E),R!==null&&(t&&R.alternate!==null&&x.delete(R.key===null?O:R.key),m=o(R,m,O),T===null?S=R:T.sibling=R,T=R);return t&&x.forEach(function(ve){return e(y,ve)}),Oe&&to(y,O),S}function w(y,m,_,E){if(typeof _=="object"&&_!==null&&_.type===ps&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case jc:e:{for(var S=_.key,T=m;T!==null;){if(T.key===S){if(S=_.type,S===ps){if(T.tag===7){n(y,T.sibling),m=i(T,_.props.children),m.return=y,y=m;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===li&&VE(S)===T.type){n(y,T.sibling),m=i(T,_.props),m.ref=Xa(y,T,_),m.return=y,y=m;break e}n(y,T);break}else e(y,T);T=T.sibling}_.type===ps?(m=So(_.props.children,y.mode,E,_.key),m.return=y,y=m):(E=Bf(_.type,_.key,_.props,null,y.mode,E),E.ref=Xa(y,m,_),E.return=y,y=E)}return s(y);case hs:e:{for(T=_.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(y,m.sibling),m=i(m,_.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else e(y,m);m=m.sibling}m=ig(_,y.mode,E),m.return=y,y=m}return s(y);case li:return T=_._init,w(y,m,T(_._payload),E)}if(pl(_))return v(y,m,_,E);if(qa(_))return g(y,m,_,E);Gc(y,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,_),m.return=y,y=m):(n(y,m),m=rg(_,y.mode,E),m.return=y,y=m),s(y)):n(y,m)}return w}var Ys=aP(!0),lP=aP(!1),ec={},hr=Hi(ec),cu=Hi(ec),fu=Hi(ec);function co(t){if(t===ec)throw Error(k(174));return t}function o1(t,e){switch(_e(fu,e),_e(cu,t),_e(hr,ec),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hv(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hv(e,t)}Pe(hr),_e(hr,e)}function Xs(){Pe(hr),Pe(cu),Pe(fu)}function uP(t){co(fu.current);var e=co(hr.current),n=hv(e,t.type);e!==n&&(_e(cu,t),_e(hr,n))}function s1(t){cu.current===t&&(Pe(hr),Pe(cu))}var De=Hi(0);function kd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xm=[];function a1(){for(var t=0;t<Xm.length;t++)Xm[t]._workInProgressVersionPrimary=null;Xm.length=0}var Lf=Kr.ReactCurrentDispatcher,Jm=Kr.ReactCurrentBatchConfig,ko=0,je=null,rt=null,ct=null,Rd=!1,$l=!1,du=0,m5=0;function kt(){throw Error(k(321))}function l1(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function u1(t,e,n,r,i,o){if(ko=o,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Lf.current=t===null||t.memoizedState===null?_5:w5,t=n(r,i),$l){o=0;do{if($l=!1,du=0,25<=o)throw Error(k(301));o+=1,ct=rt=null,e.updateQueue=null,Lf.current=E5,t=n(r,i)}while($l)}if(Lf.current=Od,e=rt!==null&&rt.next!==null,ko=0,ct=rt=je=null,Rd=!1,e)throw Error(k(300));return t}function c1(){var t=du!==0;return du=0,t}function rr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?je.memoizedState=ct=t:ct=ct.next=t,ct}function An(){if(rt===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=ct===null?je.memoizedState:ct.next;if(e!==null)ct=e,rt=t;else{if(t===null)throw Error(k(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},ct===null?je.memoizedState=ct=t:ct=ct.next=t}return ct}function hu(t,e){return typeof e=="function"?e(t):e}function Zm(t){var e=An(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=rt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((ko&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,je.lanes|=c,Ro|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Gn(r,e.memoizedState)||(Xt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,je.lanes|=o,Ro|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eg(t){var e=An(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Gn(o,e.memoizedState)||(Xt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function cP(){}function fP(t,e){var n=je,r=An(),i=e(),o=!Gn(r.memoizedState,i);if(o&&(r.memoizedState=i,Xt=!0),r=r.queue,f1(pP.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,pu(9,hP.bind(null,n,r,i,e),void 0,null),dt===null)throw Error(k(349));ko&30||dP(n,e,i)}return i}function dP(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hP(t,e,n,r){e.value=n,e.getSnapshot=r,mP(e)&&gP(t)}function pP(t,e,n){return n(function(){mP(e)&&gP(t)})}function mP(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function gP(t){var e=Vr(t,1);e!==null&&Wn(e,t,1,-1)}function FE(t){var e=rr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hu,lastRenderedState:t},e.queue=t,t=t.dispatch=y5.bind(null,je,t),[e.memoizedState,t]}function pu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vP(){return An().memoizedState}function Vf(t,e,n,r){var i=rr();je.flags|=t,i.memoizedState=pu(1|e,n,void 0,r===void 0?null:r)}function qh(t,e,n,r){var i=An();r=r===void 0?null:r;var o=void 0;if(rt!==null){var s=rt.memoizedState;if(o=s.destroy,r!==null&&l1(r,s.deps)){i.memoizedState=pu(e,n,o,r);return}}je.flags|=t,i.memoizedState=pu(1|e,n,o,r)}function UE(t,e){return Vf(8390656,8,t,e)}function f1(t,e){return qh(2048,8,t,e)}function yP(t,e){return qh(4,2,t,e)}function _P(t,e){return qh(4,4,t,e)}function wP(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function EP(t,e,n){return n=n!=null?n.concat([t]):null,qh(4,4,wP.bind(null,e,t),n)}function d1(){}function SP(t,e){var n=An();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&l1(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bP(t,e){var n=An();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&l1(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xP(t,e,n){return ko&21?(Gn(n,e)||(n=CC(),je.lanes|=n,Ro|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=n)}function g5(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Jm.transition;Jm.transition={};try{t(!1),e()}finally{pe=n,Jm.transition=r}}function TP(){return An().memoizedState}function v5(t,e,n){var r=Ci(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},IP(t))CP(e,n);else if(n=rP(t,e,n,r),n!==null){var i=Ht();Wn(n,t,r,i),PP(n,e,r)}}function y5(t,e,n){var r=Ci(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(IP(t))CP(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Gn(a,s)){var l=e.interleaved;l===null?(i.next=i,r1(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=rP(t,e,i,r),n!==null&&(i=Ht(),Wn(n,t,r,i),PP(n,e,r))}}function IP(t){var e=t.alternate;return t===je||e!==null&&e===je}function CP(t,e){$l=Rd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function PP(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,B0(t,n)}}var Od={readContext:Pn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},_5={readContext:Pn,useCallback:function(t,e){return rr().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:UE,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vf(4194308,4,wP.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vf(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vf(4,2,t,e)},useMemo:function(t,e){var n=rr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=v5.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=rr();return t={current:t},e.memoizedState=t},useState:FE,useDebugValue:d1,useDeferredValue:function(t){return rr().memoizedState=t},useTransition:function(){var t=FE(!1),e=t[0];return t=g5.bind(null,t[1]),rr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=rr();if(Oe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),dt===null)throw Error(k(349));ko&30||dP(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,UE(pP.bind(null,r,o,t),[t]),r.flags|=2048,pu(9,hP.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=rr(),e=dt.identifierPrefix;if(Oe){var n=Rr,r=kr;n=(r&~(1<<32-Bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=du++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=m5++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},w5={readContext:Pn,useCallback:SP,useContext:Pn,useEffect:f1,useImperativeHandle:EP,useInsertionEffect:yP,useLayoutEffect:_P,useMemo:bP,useReducer:Zm,useRef:vP,useState:function(){return Zm(hu)},useDebugValue:d1,useDeferredValue:function(t){var e=An();return xP(e,rt.memoizedState,t)},useTransition:function(){var t=Zm(hu)[0],e=An().memoizedState;return[t,e]},useMutableSource:cP,useSyncExternalStore:fP,useId:TP,unstable_isNewReconciler:!1},E5={readContext:Pn,useCallback:SP,useContext:Pn,useEffect:f1,useImperativeHandle:EP,useInsertionEffect:yP,useLayoutEffect:_P,useMemo:bP,useReducer:eg,useRef:vP,useState:function(){return eg(hu)},useDebugValue:d1,useDeferredValue:function(t){var e=An();return rt===null?e.memoizedState=t:xP(e,rt.memoizedState,t)},useTransition:function(){var t=eg(hu)[0],e=An().memoizedState;return[t,e]},useMutableSource:cP,useSyncExternalStore:fP,useId:TP,unstable_isNewReconciler:!1};function Js(t,e){try{var n="",r=e;do n+=QD(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function tg(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jv(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var S5=typeof WeakMap=="function"?WeakMap:Map;function AP(t,e,n){n=Dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$d||($d=!0,qv=r),jv(t,e)},n}function kP(t,e,n){n=Dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jv(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){jv(t,e),typeof r!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function zE(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new S5;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=j5.bind(null,t,e,n),e.then(t,t))}function BE(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function WE(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dr(-1,1),e.tag=2,Ti(n,e,1))),n.lanes|=1),t)}var b5=Kr.ReactCurrentOwner,Xt=!1;function Bt(t,e,n,r){e.child=t===null?lP(e,null,n,r):Ys(e,t.child,n,r)}function HE(t,e,n,r,i){n=n.render;var o=e.ref;return Ds(e,i),r=u1(t,e,n,r,o,i),n=c1(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(Oe&&n&&X0(e),e.flags|=1,Bt(t,e,r,i),e.child)}function qE(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!w1(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,RP(t,e,o,r,i)):(t=Bf(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:su,n(s,r)&&t.ref===e.ref)return Fr(t,e,i)}return e.flags|=1,t=Pi(o,r),t.ref=e.ref,t.return=e,e.child=t}function RP(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(su(o,r)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Xt=!0);else return e.lanes=t.lanes,Fr(t,e,i)}return Mv(t,e,n,r,i)}function OP(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(xs,ln),ln|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(xs,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(xs,ln),ln|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,_e(xs,ln),ln|=r;return Bt(t,e,i,n),e.child}function NP(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mv(t,e,n,r,i){var o=en(n)?Po:Vt.current;return o=Ks(e,o),Ds(e,i),n=u1(t,e,n,r,o,i),r=c1(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(Oe&&r&&X0(e),e.flags|=1,Bt(t,e,n,i),e.child)}function GE(t,e,n,r,i){if(en(n)){var o=!0;xd(e)}else o=!1;if(Ds(e,i),e.stateNode===null)Ff(t,e),sP(e,n,r),Dv(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=en(n)?Po:Vt.current,u=Ks(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&LE(e,s,r,u),ui=!1;var d=e.memoizedState;s.state=d,Ad(e,r,s,i),l=e.memoizedState,a!==r||d!==l||Zt.current||ui?(typeof c=="function"&&($v(e,n,c,r),l=e.memoizedState),(a=ui||ME(e,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,iP(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ln(e.type,a),s.props=u,f=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=en(n)?Po:Vt.current,l=Ks(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&LE(e,s,r,l),ui=!1,d=e.memoizedState,s.state=d,Ad(e,r,s,i);var v=e.memoizedState;a!==f||d!==v||Zt.current||ui?(typeof p=="function"&&($v(e,n,p,r),v=e.memoizedState),(u=ui||ME(e,n,u,r,d,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Lv(t,e,n,r,o,i)}function Lv(t,e,n,r,i,o){NP(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&OE(e,n,!1),Fr(t,e,o);r=e.stateNode,b5.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ys(e,t.child,null,o),e.child=Ys(e,null,a,o)):Bt(t,e,a,o),e.memoizedState=r.state,i&&OE(e,n,!0),e.child}function $P(t){var e=t.stateNode;e.pendingContext?RE(t,e.pendingContext,e.pendingContext!==e.context):e.context&&RE(t,e.context,!1),o1(t,e.containerInfo)}function KE(t,e,n,r,i){return Qs(),Z0(i),e.flags|=256,Bt(t,e,n,r),e.child}var Vv={dehydrated:null,treeContext:null,retryLane:0};function Fv(t){return{baseLanes:t,cachePool:null,transitions:null}}function DP(t,e,n){var r=e.pendingProps,i=De.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(De,i&1),t===null)return Ov(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Qh(s,r,0,null),t=So(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Fv(n),e.memoizedState=Vv,t):h1(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return x5(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Pi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Pi(a,o):(o=So(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Fv(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Vv,r}return o=t.child,t=o.sibling,r=Pi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function h1(t,e){return e=Qh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Kc(t,e,n,r){return r!==null&&Z0(r),Ys(e,t.child,null,n),t=h1(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function x5(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=tg(Error(k(422))),Kc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Qh({mode:"visible",children:r.children},i,0,null),o=So(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ys(e,t.child,null,s),e.child.memoizedState=Fv(s),e.memoizedState=Vv,o);if(!(e.mode&1))return Kc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=tg(o,r,void 0),Kc(t,e,s,r)}if(a=(s&t.childLanes)!==0,Xt||a){if(r=dt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Vr(t,i),Wn(r,t,i,-1))}return _1(),r=tg(Error(k(421))),Kc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=M5.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,cn=xi(i.nextSibling),fn=e,Oe=!0,Fn=null,t!==null&&(En[Sn++]=kr,En[Sn++]=Rr,En[Sn++]=Ao,kr=t.id,Rr=t.overflow,Ao=e),e=h1(e,r.children),e.flags|=4096,e)}function QE(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nv(t.return,e,n)}function ng(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function jP(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Bt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&QE(t,n,e);else if(t.tag===19)QE(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ng(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ng(e,!0,n,null,o);break;case"together":ng(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ff(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ro|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Pi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function T5(t,e,n){switch(e.tag){case 3:$P(e),Qs();break;case 5:uP(e);break;case 1:en(e.type)&&xd(e);break;case 4:o1(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Cd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?DP(t,e,n):(_e(De,De.current&1),t=Fr(t,e,n),t!==null?t.sibling:null);_e(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jP(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,OP(t,e,n)}return Fr(t,e,n)}var MP,Uv,LP,VP;MP=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uv=function(){};LP=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,co(hr.current);var o=null;switch(n){case"input":i=uv(t,i),r=uv(t,r),o=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),o=[];break;case"textarea":i=dv(t,i),r=dv(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sd)}pv(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zl.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Se("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};VP=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ja(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function I5(t,e,n){var r=e.pendingProps;switch(J0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return en(e.type)&&bd(),Rt(e),null;case 3:return r=e.stateNode,Xs(),Pe(Zt),Pe(Vt),a1(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Qv(Fn),Fn=null))),Uv(t,e),Rt(e),null;case 5:s1(e);var i=co(fu.current);if(n=e.type,t!==null&&e.stateNode!=null)LP(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Rt(e),null}if(t=co(hr.current),qc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[ar]=e,r[uu]=o,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<gl.length;i++)Se(gl[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":iE(r,o),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Se("invalid",r);break;case"textarea":sE(r,o),Se("invalid",r)}pv(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Hc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Hc(r.textContent,a,t),i=["children",""+a]):Zl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Se("scroll",r)}switch(n){case"input":Mc(r),oE(r,o,!0);break;case"textarea":Mc(r),aE(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Sd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dC(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[ar]=e,t[uu]=r,MP(t,e,!1,!1),e.stateNode=t;e:{switch(s=mv(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<gl.length;i++)Se(gl[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":iE(t,r),i=uv(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Se("invalid",t);break;case"textarea":sE(t,r),i=dv(t,r),Se("invalid",t);break;default:i=r}pv(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?mC(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hC(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&eu(t,l):typeof l=="number"&&eu(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Se("scroll",t):l!=null&&M0(t,o,l,s))}switch(n){case"input":Mc(t),oE(t,r,!1);break;case"textarea":Mc(t),aE(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Di(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Rs(t,!!r.multiple,o,!1):r.defaultValue!=null&&Rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(t&&e.stateNode!=null)VP(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=co(fu.current),co(hr.current),qc(e)){if(r=e.stateNode,n=e.memoizedProps,r[ar]=e,(o=r.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Hc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ar]=e,e.stateNode=r}return Rt(e),null;case 13:if(Pe(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&cn!==null&&e.mode&1&&!(e.flags&128))nP(),Qs(),e.flags|=98560,o=!1;else if(o=qc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(k(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[ar]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rt(e),o=!1}else Fn!==null&&(Qv(Fn),Fn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?ot===0&&(ot=3):_1())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return Xs(),Uv(t,e),t===null&&au(e.stateNode.containerInfo),Rt(e),null;case 10:return n1(e.type._context),Rt(e),null;case 17:return en(e.type)&&bd(),Rt(e),null;case 19:if(Pe(De),o=e.memoizedState,o===null)return Rt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ja(o,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=kd(t),s!==null){for(e.flags|=128,Ja(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(De,De.current&1|2),e.child}t=t.sibling}o.tail!==null&&We()>Zs&&(e.flags|=128,r=!0,Ja(o,!1),e.lanes=4194304)}else{if(!r)if(t=kd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ja(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Oe)return Rt(e),null}else 2*We()-o.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,r=!0,Ja(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=We(),e.sibling=null,n=De.current,_e(De,r?n&1|2:n&1),e):(Rt(e),null);case 22:case 23:return y1(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ln&1073741824&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function C5(t,e){switch(J0(e),e.tag){case 1:return en(e.type)&&bd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),Pe(Zt),Pe(Vt),a1(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return s1(e),null;case 13:if(Pe(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(De),null;case 4:return Xs(),null;case 10:return n1(e.type._context),null;case 22:case 23:return y1(),null;case 24:return null;default:return null}}var Qc=!1,Dt=!1,P5=typeof WeakSet=="function"?WeakSet:Set,V=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function zv(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var YE=!1;function A5(t,e){if(Tv=_d,t=BC(),Y0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Iv={focusedElem:t,selectionRange:n},_d=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,w=v.memoizedState,y=e.stateNode,m=y.getSnapshotBeforeUpdate(e.elementType===e.type?g:Ln(e.type,g),w);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){Ue(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return v=YE,YE=!1,v}function Dl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&zv(e,n,o)}i=i.next}while(i!==r)}}function Gh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bv(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function FP(t){var e=t.alternate;e!==null&&(t.alternate=null,FP(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ar],delete e[uu],delete e[Av],delete e[f5],delete e[d5])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function UP(t){return t.tag===5||t.tag===3||t.tag===4}function XE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||UP(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wv(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sd));else if(r!==4&&(t=t.child,t!==null))for(Wv(t,e,n),t=t.sibling;t!==null;)Wv(t,e,n),t=t.sibling}function Hv(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hv(t,e,n),t=t.sibling;t!==null;)Hv(t,e,n),t=t.sibling}var _t=null,Vn=!1;function ti(t,e,n){for(n=n.child;n!==null;)zP(t,e,n),n=n.sibling}function zP(t,e,n){if(dr&&typeof dr.onCommitFiberUnmount=="function")try{dr.onCommitFiberUnmount(Vh,n)}catch{}switch(n.tag){case 5:Dt||bs(n,e);case 6:var r=_t,i=Vn;_t=null,ti(t,e,n),_t=r,Vn=i,_t!==null&&(Vn?(t=_t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_t.removeChild(n.stateNode));break;case 18:_t!==null&&(Vn?(t=_t,n=n.stateNode,t.nodeType===8?Qm(t.parentNode,n):t.nodeType===1&&Qm(t,n),iu(t)):Qm(_t,n.stateNode));break;case 4:r=_t,i=Vn,_t=n.stateNode.containerInfo,Vn=!0,ti(t,e,n),_t=r,Vn=i;break;case 0:case 11:case 14:case 15:if(!Dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&zv(n,e,s),i=i.next}while(i!==r)}ti(t,e,n);break;case 1:if(!Dt&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ue(n,e,a)}ti(t,e,n);break;case 21:ti(t,e,n);break;case 22:n.mode&1?(Dt=(r=Dt)||n.memoizedState!==null,ti(t,e,n),Dt=r):ti(t,e,n);break;default:ti(t,e,n)}}function JE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new P5),e.forEach(function(r){var i=L5.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:_t=a.stateNode,Vn=!1;break e;case 3:_t=a.stateNode.containerInfo,Vn=!0;break e;case 4:_t=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(_t===null)throw Error(k(160));zP(o,s,i),_t=null,Vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)BP(e,t),e=e.sibling}function BP(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),nr(t),r&4){try{Dl(3,t,t.return),Gh(3,t)}catch(g){Ue(t,t.return,g)}try{Dl(5,t,t.return)}catch(g){Ue(t,t.return,g)}}break;case 1:Dn(e,t),nr(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(Dn(e,t),nr(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var i=t.stateNode;try{eu(i,"")}catch(g){Ue(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&cC(i,o),mv(a,s);var u=mv(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?mC(i,f):c==="dangerouslySetInnerHTML"?hC(i,f):c==="children"?eu(i,f):M0(i,c,f,u)}switch(a){case"input":cv(i,o);break;case"textarea":fC(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Rs(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?Rs(i,!!o.multiple,o.defaultValue,!0):Rs(i,!!o.multiple,o.multiple?[]:"",!1))}i[uu]=o}catch(g){Ue(t,t.return,g)}}break;case 6:if(Dn(e,t),nr(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(g){Ue(t,t.return,g)}}break;case 3:if(Dn(e,t),nr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{iu(e.containerInfo)}catch(g){Ue(t,t.return,g)}break;case 4:Dn(e,t),nr(t);break;case 13:Dn(e,t),nr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(g1=We())),r&4&&JE(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Dt=(u=Dt)||c,Dn(e,t),Dt=u):Dn(e,t),nr(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(V=t,c=t.child;c!==null;){for(f=V=c;V!==null;){switch(d=V,p=d.child,d.tag){case 0:case 11:case 14:case 15:Dl(4,d,d.return);break;case 1:bs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){Ue(r,n,g)}}break;case 5:bs(d,d.return);break;case 22:if(d.memoizedState!==null){eS(f);continue}}p!==null?(p.return=d,V=p):eS(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pC("display",s))}catch(g){Ue(t,t.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Ue(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),nr(t),r&4&&JE(t);break;case 21:break;default:Dn(e,t),nr(t)}}function nr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(UP(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(eu(i,""),r.flags&=-33);var o=XE(t);Hv(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=XE(t);Wv(t,a,s);break;default:throw Error(k(161))}}catch(l){Ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k5(t,e,n){V=t,WP(t)}function WP(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Qc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Dt;a=Qc;var u=Dt;if(Qc=s,(Dt=l)&&!u)for(V=i;V!==null;)s=V,l=s.child,s.tag===22&&s.memoizedState!==null?tS(i):l!==null?(l.return=s,V=l):tS(i);for(;o!==null;)V=o,WP(o),o=o.sibling;V=i,Qc=a,Dt=u}ZE(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,V=o):ZE(t)}}function ZE(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Dt||Gh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&jE(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jE(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&iu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Dt||e.flags&512&&Bv(e)}catch(d){Ue(e,e.return,d)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function eS(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function tS(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gh(4,e)}catch(l){Ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ue(e,i,l)}}var o=e.return;try{Bv(e)}catch(l){Ue(e,o,l)}break;case 5:var s=e.return;try{Bv(e)}catch(l){Ue(e,s,l)}}}catch(l){Ue(e,e.return,l)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var R5=Math.ceil,Nd=Kr.ReactCurrentDispatcher,p1=Kr.ReactCurrentOwner,Cn=Kr.ReactCurrentBatchConfig,se=0,dt=null,Ye=null,xt=0,ln=0,xs=Hi(0),ot=0,mu=null,Ro=0,Kh=0,m1=0,jl=null,Yt=null,g1=0,Zs=1/0,Ir=null,$d=!1,qv=null,Ii=null,Yc=!1,vi=null,Dd=0,Ml=0,Gv=null,Uf=-1,zf=0;function Ht(){return se&6?We():Uf!==-1?Uf:Uf=We()}function Ci(t){return t.mode&1?se&2&&xt!==0?xt&-xt:p5.transition!==null?(zf===0&&(zf=CC()),zf):(t=pe,t!==0||(t=window.event,t=t===void 0?16:$C(t.type)),t):1}function Wn(t,e,n,r){if(50<Ml)throw Ml=0,Gv=null,Error(k(185));Xu(t,n,r),(!(se&2)||t!==dt)&&(t===dt&&(!(se&2)&&(Kh|=n),ot===4&&fi(t,xt)),tn(t,r),n===1&&se===0&&!(e.mode&1)&&(Zs=We()+500,Wh&&qi()))}function tn(t,e){var n=t.callbackNode;p4(t,e);var r=yd(t,t===dt?xt:0);if(r===0)n!==null&&cE(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&cE(n),e===1)t.tag===0?h5(nS.bind(null,t)):ZC(nS.bind(null,t)),u5(function(){!(se&6)&&qi()}),n=null;else{switch(PC(r)){case 1:n=z0;break;case 4:n=TC;break;case 16:n=vd;break;case 536870912:n=IC;break;default:n=vd}n=JP(n,HP.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function HP(t,e){if(Uf=-1,zf=0,se&6)throw Error(k(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var r=yd(t,t===dt?xt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jd(t,r);else{e=r;var i=se;se|=2;var o=GP();(dt!==t||xt!==e)&&(Ir=null,Zs=We()+500,Eo(t,e));do try{$5();break}catch(a){qP(t,a)}while(!0);t1(),Nd.current=o,se=i,Ye!==null?e=0:(dt=null,xt=0,e=ot)}if(e!==0){if(e===2&&(i=wv(t),i!==0&&(r=i,e=Kv(t,i))),e===1)throw n=mu,Eo(t,0),fi(t,r),tn(t,We()),n;if(e===6)fi(t,r);else{if(i=t.current.alternate,!(r&30)&&!O5(i)&&(e=jd(t,r),e===2&&(o=wv(t),o!==0&&(r=o,e=Kv(t,o))),e===1))throw n=mu,Eo(t,0),fi(t,r),tn(t,We()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:no(t,Yt,Ir);break;case 3:if(fi(t,r),(r&130023424)===r&&(e=g1+500-We(),10<e)){if(yd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pv(no.bind(null,t,Yt,Ir),e);break}no(t,Yt,Ir);break;case 4:if(fi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Bn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R5(r/1960))-r,10<r){t.timeoutHandle=Pv(no.bind(null,t,Yt,Ir),r);break}no(t,Yt,Ir);break;case 5:no(t,Yt,Ir);break;default:throw Error(k(329))}}}return tn(t,We()),t.callbackNode===n?HP.bind(null,t):null}function Kv(t,e){var n=jl;return t.current.memoizedState.isDehydrated&&(Eo(t,e).flags|=256),t=jd(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&Qv(e)),t}function Qv(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function O5(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Gn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fi(t,e){for(e&=~m1,e&=~Kh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),r=1<<n;t[n]=-1,e&=~r}}function nS(t){if(se&6)throw Error(k(327));js();var e=yd(t,0);if(!(e&1))return tn(t,We()),null;var n=jd(t,e);if(t.tag!==0&&n===2){var r=wv(t);r!==0&&(e=r,n=Kv(t,r))}if(n===1)throw n=mu,Eo(t,0),fi(t,e),tn(t,We()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,no(t,Yt,Ir),tn(t,We()),null}function v1(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Zs=We()+500,Wh&&qi())}}function Oo(t){vi!==null&&vi.tag===0&&!(se&6)&&js();var e=se;se|=1;var n=Cn.transition,r=pe;try{if(Cn.transition=null,pe=1,t)return t()}finally{pe=r,Cn.transition=n,se=e,!(se&6)&&qi()}}function y1(){ln=xs.current,Pe(xs)}function Eo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,l5(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(J0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bd();break;case 3:Xs(),Pe(Zt),Pe(Vt),a1();break;case 5:s1(r);break;case 4:Xs();break;case 13:Pe(De);break;case 19:Pe(De);break;case 10:n1(r.type._context);break;case 22:case 23:y1()}n=n.return}if(dt=t,Ye=t=Pi(t.current,null),xt=ln=e,ot=0,mu=null,m1=Kh=Ro=0,Yt=jl=null,uo!==null){for(e=0;e<uo.length;e++)if(n=uo[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}uo=null}return t}function qP(t,e){do{var n=Ye;try{if(t1(),Lf.current=Od,Rd){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Rd=!1}if(ko=0,ct=rt=je=null,$l=!1,du=0,p1.current=null,n===null||n.return===null){ot=1,mu=e,Ye=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=BE(s);if(p!==null){p.flags&=-257,WE(p,s,a,o,e),p.mode&1&&zE(o,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){zE(o,u,e),_1();break e}l=Error(k(426))}}else if(Oe&&a.mode&1){var w=BE(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),WE(w,s,a,o,e),Z0(Js(l,a));break e}}o=l=Js(l,a),ot!==4&&(ot=2),jl===null?jl=[o]:jl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=AP(o,l,e);DE(o,y);break e;case 1:a=l;var m=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ii===null||!Ii.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=kP(o,a,e);DE(o,E);break e}}o=o.return}while(o!==null)}QP(n)}catch(S){e=S,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function GP(){var t=Nd.current;return Nd.current=Od,t===null?Od:t}function _1(){(ot===0||ot===3||ot===2)&&(ot=4),dt===null||!(Ro&268435455)&&!(Kh&268435455)||fi(dt,xt)}function jd(t,e){var n=se;se|=2;var r=GP();(dt!==t||xt!==e)&&(Ir=null,Eo(t,e));do try{N5();break}catch(i){qP(t,i)}while(!0);if(t1(),se=n,Nd.current=r,Ye!==null)throw Error(k(261));return dt=null,xt=0,ot}function N5(){for(;Ye!==null;)KP(Ye)}function $5(){for(;Ye!==null&&!o4();)KP(Ye)}function KP(t){var e=XP(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?QP(t):Ye=e,p1.current=null}function QP(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=C5(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,Ye=null;return}}else if(n=I5(n,e,ln),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);ot===0&&(ot=5)}function no(t,e,n){var r=pe,i=Cn.transition;try{Cn.transition=null,pe=1,D5(t,e,n,r)}finally{Cn.transition=i,pe=r}return null}function D5(t,e,n,r){do js();while(vi!==null);if(se&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(m4(t,o),t===dt&&(Ye=dt=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yc||(Yc=!0,JP(vd,function(){return js(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Cn.transition,Cn.transition=null;var s=pe;pe=1;var a=se;se|=4,p1.current=null,A5(t,n),BP(n,t),t5(Iv),_d=!!Tv,Iv=Tv=null,t.current=n,k5(n),s4(),se=a,pe=s,Cn.transition=o}else t.current=n;if(Yc&&(Yc=!1,vi=t,Dd=i),o=t.pendingLanes,o===0&&(Ii=null),u4(n.stateNode),tn(t,We()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($d)throw $d=!1,t=qv,qv=null,t;return Dd&1&&t.tag!==0&&js(),o=t.pendingLanes,o&1?t===Gv?Ml++:(Ml=0,Gv=t):Ml=0,qi(),null}function js(){if(vi!==null){var t=PC(Dd),e=Cn.transition,n=pe;try{if(Cn.transition=null,pe=16>t?16:t,vi===null)var r=!1;else{if(t=vi,vi=null,Dd=0,se&6)throw Error(k(331));var i=se;for(se|=4,V=t.current;V!==null;){var o=V,s=o.child;if(V.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:Dl(8,c,o)}var f=c.child;if(f!==null)f.return=c,V=f;else for(;V!==null;){c=V;var d=c.sibling,p=c.return;if(FP(c),c===u){V=null;break}if(d!==null){d.return=p,V=d;break}V=p}}}var v=o.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}V=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,V=s;else e:for(;V!==null;){if(o=V,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Dl(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,V=y;break e}V=o.return}}var m=t.current;for(V=m;V!==null;){s=V;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,V=_;else e:for(s=m;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gh(9,a)}}catch(S){Ue(a,a.return,S)}if(a===s){V=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,V=E;break e}V=a.return}}if(se=i,qi(),dr&&typeof dr.onPostCommitFiberRoot=="function")try{dr.onPostCommitFiberRoot(Vh,t)}catch{}r=!0}return r}finally{pe=n,Cn.transition=e}}return!1}function rS(t,e,n){e=Js(n,e),e=AP(t,e,1),t=Ti(t,e,1),e=Ht(),t!==null&&(Xu(t,1,e),tn(t,e))}function Ue(t,e,n){if(t.tag===3)rS(t,t,n);else for(;e!==null;){if(e.tag===3){rS(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ii===null||!Ii.has(r))){t=Js(n,t),t=kP(e,t,1),e=Ti(e,t,1),t=Ht(),e!==null&&(Xu(e,1,t),tn(e,t));break}}e=e.return}}function j5(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(xt&n)===n&&(ot===4||ot===3&&(xt&130023424)===xt&&500>We()-g1?Eo(t,0):m1|=n),tn(t,e)}function YP(t,e){e===0&&(t.mode&1?(e=Fc,Fc<<=1,!(Fc&130023424)&&(Fc=4194304)):e=1);var n=Ht();t=Vr(t,e),t!==null&&(Xu(t,e,n),tn(t,n))}function M5(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),YP(t,n)}function L5(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),YP(t,n)}var XP;XP=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xt=!1,T5(t,e,n);Xt=!!(t.flags&131072)}else Xt=!1,Oe&&e.flags&1048576&&eP(e,Id,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ff(t,e),t=e.pendingProps;var i=Ks(e,Vt.current);Ds(e,n),i=u1(null,e,r,t,i,n);var o=c1();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(r)?(o=!0,xd(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i1(e),i.updater=Hh,e.stateNode=i,i._reactInternals=e,Dv(e,r,t,n),e=Lv(null,e,r,!0,o,n)):(e.tag=0,Oe&&o&&X0(e),Bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ff(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=F5(r),t=Ln(r,t),i){case 0:e=Mv(null,e,r,t,n);break e;case 1:e=GE(null,e,r,t,n);break e;case 11:e=HE(null,e,r,t,n);break e;case 14:e=qE(null,e,r,Ln(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Mv(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),GE(t,e,r,i,n);case 3:e:{if($P(e),t===null)throw Error(k(387));r=e.pendingProps,o=e.memoizedState,i=o.element,iP(t,e),Ad(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Js(Error(k(423)),e),e=KE(t,e,r,n,i);break e}else if(r!==i){i=Js(Error(k(424)),e),e=KE(t,e,r,n,i);break e}else for(cn=xi(e.stateNode.containerInfo.firstChild),fn=e,Oe=!0,Fn=null,n=lP(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),r===i){e=Fr(t,e,n);break e}Bt(t,e,r,n)}e=e.child}return e;case 5:return uP(e),t===null&&Ov(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Cv(r,i)?s=null:o!==null&&Cv(r,o)&&(e.flags|=32),NP(t,e),Bt(t,e,s,n),e.child;case 6:return t===null&&Ov(e),null;case 13:return DP(t,e,n);case 4:return o1(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ys(e,null,r,n):Bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),HE(t,e,r,i,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,_e(Cd,r._currentValue),r._currentValue=s,o!==null)if(Gn(o.value,s)){if(o.children===i.children&&!Zt.current){e=Fr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Dr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Nv(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Nv(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ds(e,n),i=Pn(i),r=r(i),e.flags|=1,Bt(t,e,r,n),e.child;case 14:return r=e.type,i=Ln(r,e.pendingProps),i=Ln(r.type,i),qE(t,e,r,i,n);case 15:return RP(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Ff(t,e),e.tag=1,en(r)?(t=!0,xd(e)):t=!1,Ds(e,n),sP(e,r,i),Dv(e,r,i,n),Lv(null,e,r,!0,t,n);case 19:return jP(t,e,n);case 22:return OP(t,e,n)}throw Error(k(156,e.tag))};function JP(t,e){return xC(t,e)}function V5(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new V5(t,e,n,r)}function w1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function F5(t){if(typeof t=="function")return w1(t)?1:0;if(t!=null){if(t=t.$$typeof,t===V0)return 11;if(t===F0)return 14}return 2}function Pi(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bf(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")w1(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ps:return So(n.children,i,o,e);case L0:s=8,i|=8;break;case ov:return t=In(12,n,e,i|2),t.elementType=ov,t.lanes=o,t;case sv:return t=In(13,n,e,i),t.elementType=sv,t.lanes=o,t;case av:return t=In(19,n,e,i),t.elementType=av,t.lanes=o,t;case aC:return Qh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oC:s=10;break e;case sC:s=9;break e;case V0:s=11;break e;case F0:s=14;break e;case li:s=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=In(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function So(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function Qh(t,e,n,r){return t=In(22,t,r,e),t.elementType=aC,t.lanes=n,t.stateNode={isHidden:!1},t}function rg(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function ig(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function U5(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lm(0),this.expirationTimes=Lm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lm(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function E1(t,e,n,r,i,o,s,a,l){return t=new U5(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=In(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},i1(o),t}function z5(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ZP(t){if(!t)return ji;t=t._reactInternals;e:{if(qo(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(en(n))return JC(t,n,e)}return e}function eA(t,e,n,r,i,o,s,a,l){return t=E1(n,r,!0,t,i,o,s,a,l),t.context=ZP(null),n=t.current,r=Ht(),i=Ci(n),o=Dr(r,i),o.callback=e??null,Ti(n,o,i),t.current.lanes=i,Xu(t,i,r),tn(t,r),t}function Yh(t,e,n,r){var i=e.current,o=Ht(),s=Ci(i);return n=ZP(n),e.context===null?e.context=n:e.pendingContext=n,e=Dr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ti(i,e,s),t!==null&&(Wn(t,i,s,o),Mf(t,i,s)),s}function Md(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function iS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function S1(t,e){iS(t,e),(t=t.alternate)&&iS(t,e)}function B5(){return null}var tA=typeof reportError=="function"?reportError:function(t){console.error(t)};function b1(t){this._internalRoot=t}Xh.prototype.render=b1.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Yh(t,e,null,null)};Xh.prototype.unmount=b1.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Oo(function(){Yh(null,t,null,null)}),e[Lr]=null}};function Xh(t){this._internalRoot=t}Xh.prototype.unstable_scheduleHydration=function(t){if(t){var e=RC();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ci.length&&e!==0&&e<ci[n].priority;n++);ci.splice(n,0,t),n===0&&NC(t)}};function x1(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oS(){}function W5(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Md(s);o.call(u)}}var s=eA(e,r,t,0,null,!1,!1,"",oS);return t._reactRootContainer=s,t[Lr]=s.current,au(t.nodeType===8?t.parentNode:t),Oo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Md(l);a.call(u)}}var l=E1(t,0,!1,null,null,!1,!1,"",oS);return t._reactRootContainer=l,t[Lr]=l.current,au(t.nodeType===8?t.parentNode:t),Oo(function(){Yh(e,l,n,r)}),l}function Zh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Md(s);a.call(l)}}Yh(e,s,t,i)}else s=W5(n,e,t,i,r);return Md(s)}AC=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ml(e.pendingLanes);n!==0&&(B0(e,n|1),tn(e,We()),!(se&6)&&(Zs=We()+500,qi()))}break;case 13:Oo(function(){var r=Vr(t,1);if(r!==null){var i=Ht();Wn(r,t,1,i)}}),S1(t,1)}};W0=function(t){if(t.tag===13){var e=Vr(t,134217728);if(e!==null){var n=Ht();Wn(e,t,134217728,n)}S1(t,134217728)}};kC=function(t){if(t.tag===13){var e=Ci(t),n=Vr(t,e);if(n!==null){var r=Ht();Wn(n,t,e,r)}S1(t,e)}};RC=function(){return pe};OC=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};vv=function(t,e,n){switch(e){case"input":if(cv(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bh(r);if(!i)throw Error(k(90));uC(r),cv(r,i)}}}break;case"textarea":fC(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};yC=v1;_C=Oo;var H5={usingClientEntryPoint:!1,Events:[Zu,ys,Bh,gC,vC,v1]},Za={findFiberByHostInstance:lo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},q5={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=SC(t),t===null?null:t.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||B5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{Vh=Xc.inject(q5),dr=Xc}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H5;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x1(e))throw Error(k(200));return z5(t,e,null,n)};mn.createRoot=function(t,e){if(!x1(t))throw Error(k(299));var n=!1,r="",i=tA;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=E1(t,1,!1,null,null,n,!1,r,i),t[Lr]=e.current,au(t.nodeType===8?t.parentNode:t),new b1(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=SC(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Oo(t)};mn.hydrate=function(t,e,n){if(!Jh(e))throw Error(k(200));return Zh(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!x1(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=tA;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=eA(e,null,t,1,n??null,i,!1,o,s),t[Lr]=e.current,au(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xh(e)};mn.render=function(t,e,n){if(!Jh(e))throw Error(k(200));return Zh(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Jh(t))throw Error(k(40));return t._reactRootContainer?(Oo(function(){Zh(null,null,t,!1,function(){t._reactRootContainer=null,t[Lr]=null})}),!0):!1};mn.unstable_batchedUpdates=v1;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jh(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Zh(t,e,n,!1,r)};mn.version="18.2.0-next-9e3b772b8-20220608";function nA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nA)}catch(t){console.error(t)}}nA(),eC.exports=mn;var rA=eC.exports,sS=rA;rv.createRoot=sS.createRoot,rv.hydrateRoot=sS.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gu(){return gu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gu.apply(this,arguments)}var yi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yi||(yi={}));const aS="popstate";function G5(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Yv("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ld(i)}return Q5(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function T1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function K5(){return Math.random().toString(36).substr(2,8)}function lS(t,e){return{usr:t.state,key:t.key,idx:e}}function Yv(t,e,n,r){return n===void 0&&(n=null),gu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xa(e):e,{state:n,key:e&&e.key||r||K5()})}function Ld(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Q5(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=yi.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(gu({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=yi.Pop;let w=c(),y=w==null?null:w-u;u=w,l&&l({action:a,location:g.location,delta:y})}function d(w,y){a=yi.Push;let m=Yv(g.location,w,y);n&&n(m,w),u=c()+1;let _=lS(m,u),E=g.createHref(m);try{s.pushState(_,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}o&&l&&l({action:a,location:g.location,delta:1})}function p(w,y){a=yi.Replace;let m=Yv(g.location,w,y);n&&n(m,w),u=c();let _=lS(m,u),E=g.createHref(m);s.replaceState(_,"",E),o&&l&&l({action:a,location:g.location,delta:0})}function v(w){let y=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:Ld(w);return Ze(y,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,y)}let g={get action(){return a},get location(){return t(i,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(aS,f),l=w,()=>{i.removeEventListener(aS,f),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let y=v(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:d,replace:p,go(w){return s.go(w)}};return g}var uS;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(uS||(uS={}));function Y5(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?xa(e):e,i=I1(r.pathname||"/",n);if(i==null)return null;let o=iA(t);X5(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=sj(o[a],uj(i));return s}function iA(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ai([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),iA(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:ij(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of oA(o.path))i(o,s,l)}),e}function oA(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=oA(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function X5(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oj(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J5=/^:\w+$/,Z5=3,ej=2,tj=1,nj=10,rj=-2,cS=t=>t==="*";function ij(t,e){let n=t.split("/"),r=n.length;return n.some(cS)&&(r+=rj),e&&(r+=ej),n.filter(i=>!cS(i)).reduce((i,o)=>i+(J5.test(o)?Z5:o===""?tj:nj),r)}function oj(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function sj(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=aj({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:Ai([i,c.pathname]),pathnameBase:pj(Ai([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Ai([i,c.pathnameBase]))}return o}function aj(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lj(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:p}=c;if(d==="*"){let g=a[f]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const v=a[f];return p&&!v?u[d]=void 0:u[d]=cj(v||"",d),u},{}),pathname:o,pathnameBase:s,pattern:t}}function lj(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),T1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function uj(t){try{return decodeURI(t)}catch(e){return T1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function cj(t,e){try{return decodeURIComponent(t)}catch(n){return T1(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function I1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function fj(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xa(t):t;return{pathname:n?n.startsWith("/")?n:dj(n,e):e,search:mj(r),hash:gj(i)}}function dj(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function og(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hj(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function sA(t,e){let n=hj(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function aA(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xa(t):(i=gu({},t),Ze(!i.pathname||!i.pathname.includes("?"),og("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),og("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),og("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=e.length-1;if(!r&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=fj(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ai=t=>t.join("/").replace(/\/\/+/g,"/"),pj=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),mj=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gj=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vj(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const lA=["post","put","patch","delete"];new Set(lA);const yj=["get",...lA];new Set(yj);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vu(){return vu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vu.apply(this,arguments)}const C1=b.createContext(null),_j=b.createContext(null),Go=b.createContext(null),ep=b.createContext(null),Qr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),uA=b.createContext(null);function wj(t,e){let{relative:n}=e===void 0?{}:e;tc()||Ze(!1);let{basename:r,navigator:i}=b.useContext(Go),{hash:o,pathname:s,search:a}=fA(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Ai([r,s])),i.createHref({pathname:l,search:a,hash:o})}function tc(){return b.useContext(ep)!=null}function nc(){return tc()||Ze(!1),b.useContext(ep).location}function cA(t){b.useContext(Go).static||b.useLayoutEffect(t)}function Yr(){let{isDataRoute:t}=b.useContext(Qr);return t?jj():Ej()}function Ej(){tc()||Ze(!1);let t=b.useContext(C1),{basename:e,future:n,navigator:r}=b.useContext(Go),{matches:i}=b.useContext(Qr),{pathname:o}=nc(),s=JSON.stringify(sA(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return cA(()=>{a.current=!0}),b.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=aA(u,JSON.parse(s),o,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ai([e,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[e,r,s,o,t])}const Sj=b.createContext(null);function bj(t){let e=b.useContext(Qr).outlet;return e&&b.createElement(Sj.Provider,{value:t},e)}function xj(){let{matches:t}=b.useContext(Qr),e=t[t.length-1];return e?e.params:{}}function fA(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(Go),{matches:i}=b.useContext(Qr),{pathname:o}=nc(),s=JSON.stringify(sA(i,r.v7_relativeSplatPath));return b.useMemo(()=>aA(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function Tj(t,e){return Ij(t,e)}function Ij(t,e,n,r){tc()||Ze(!1);let{navigator:i}=b.useContext(Go),{matches:o}=b.useContext(Qr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=nc(),c;if(e){var f;let w=typeof e=="string"?xa(e):e;l==="/"||(f=w.pathname)!=null&&f.startsWith(l)||Ze(!1),c=w}else c=u;let d=c.pathname||"/",p=l==="/"?d:d.slice(l.length)||"/",v=Y5(t,{pathname:p}),g=Rj(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Ai([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Ai([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return e&&g?b.createElement(ep.Provider,{value:{location:vu({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:yi.Pop}},g):g}function Cj(){let t=Dj(),e=vj(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const Pj=b.createElement(Cj,null);class Aj extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Qr.Provider,{value:this.props.routeContext},b.createElement(uA.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kj(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(C1);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Qr.Provider,{value:e},r)}function Rj(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));c>=0||Ze(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:p}=n,v=f.route.loader&&d[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,d)=>{let p,v=!1,g=null,w=null;n&&(p=a&&f.route.id?a[f.route.id]:void 0,g=f.route.errorElement||Pj,l&&(u<0&&d===0?(Mj("route-fallback",!1),v=!0,w=null):u===d&&(v=!0,w=f.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,d+1)),m=()=>{let _;return p?_=g:v?_=w:f.route.Component?_=b.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=c,b.createElement(kj,{match:f,routeContext:{outlet:c,matches:y,isDataRoute:n!=null},children:_})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?b.createElement(Aj,{location:n.location,revalidation:n.revalidation,component:g,error:p,children:m(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):m()},null)}var dA=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(dA||{}),Vd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Vd||{});function Oj(t){let e=b.useContext(C1);return e||Ze(!1),e}function Nj(t){let e=b.useContext(_j);return e||Ze(!1),e}function $j(t){let e=b.useContext(Qr);return e||Ze(!1),e}function hA(t){let e=$j(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function Dj(){var t;let e=b.useContext(uA),n=Nj(Vd.UseRouteError),r=hA(Vd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function jj(){let{router:t}=Oj(dA.UseNavigateStable),e=hA(Vd.UseNavigateStable),n=b.useRef(!1);return cA(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,vu({fromRouteId:e},o)))},[t,e])}const fS={};function Mj(t,e,n){!e&&!fS[t]&&(fS[t]=!0)}function Lj(t){return bj(t.context)}function Mn(t){Ze(!1)}function Vj(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yi.Pop,navigator:o,static:s=!1,future:a}=t;tc()&&Ze(!1);let l=e.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:o,static:s,future:vu({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=xa(r));let{pathname:c="/",search:f="",hash:d="",state:p=null,key:v="default"}=r,g=b.useMemo(()=>{let w=I1(c,l);return w==null?null:{location:{pathname:w,search:f,hash:d,state:p,key:v},navigationType:i}},[l,c,f,d,p,v,i]);return g==null?null:b.createElement(Go.Provider,{value:u},b.createElement(ep.Provider,{children:n,value:g}))}function Fj(t){let{children:e,location:n}=t;return Tj(Xv(e),n)}new Promise(()=>{});function Xv(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let o=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Xv(r.props.children,o));return}r.type!==Mn&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Xv(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jv(){return Jv=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jv.apply(this,arguments)}function Uj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function zj(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Bj(t,e){return t.button===0&&(!e||e==="_self")&&!zj(t)}const Wj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Hj="startTransition",dS=hd[Hj];function qj(t){let{basename:e,children:n,future:r,window:i}=t,o=b.useRef();o.current==null&&(o.current=G5({window:i,v5Compat:!0}));let s=o.current,[a,l]=b.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=b.useCallback(f=>{u&&dS?dS(()=>l(f)):l(f)},[l,u]);return b.useLayoutEffect(()=>s.listen(c),[s,c]),b.createElement(Vj,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Gj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P1=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=e,d=Uj(e,Wj),{basename:p}=b.useContext(Go),v,g=!1;if(typeof u=="string"&&Kj.test(u)&&(v=u,Gj))try{let _=new URL(window.location.href),E=u.startsWith("//")?new URL(_.protocol+u):new URL(u),S=I1(E.pathname,p);E.origin===_.origin&&S!=null?u=S+E.search+E.hash:g=!0}catch{}let w=wj(u,{relative:i}),y=Qj(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function m(_){r&&r(_),_.defaultPrevented||y(_)}return b.createElement("a",Jv({},d,{href:v||w,onClick:g||o?r:m,ref:n,target:l}))});var hS;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(hS||(hS={}));var pS;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(pS||(pS={}));function Qj(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=Yr(),u=nc(),c=fA(t,{relative:s});return b.useCallback(f=>{if(Bj(f,n)){f.preventDefault();let d=r!==void 0?r:Ld(u)===Ld(c);l(t,{replace:d,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,o,s,a])}var pA={exports:{}},Yj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Xj=Yj,Jj=Xj;function mA(){}function gA(){}gA.resetWarningCache=mA;var Zj=function(){function t(r,i,o,s,a,l){if(l!==Jj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:gA,resetWarningCache:mA};return n.PropTypes=n,n};pA.exports=Zj();var eM=pA.exports;const F=Wo(eM);function mS(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function gS(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mS(Object(n),!0).forEach(function(r){vA(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mS(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Wf(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Wf=function(e){return typeof e}:Wf=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wf(t)}function vA(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Hf(t,e){return tM(t)||nM(t,e)||rM(t,e)||iM()}function tM(t){if(Array.isArray(t))return t}function nM(t,e){var n=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function rM(t,e){if(t){if(typeof t=="string")return vS(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vS(t,e)}}function vS(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function iM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zv=function(e){var n=H.useRef(e);return H.useEffect(function(){n.current=e},[e]),n.current},ea=function(e){return e!==null&&Wf(e)==="object"},oM=function(e){return ea(e)&&typeof e.then=="function"},sM=function(e){return ea(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},yS="[object Object]",aM=function t(e,n){if(!ea(e)||!ea(n))return e===n;var r=Array.isArray(e),i=Array.isArray(n);if(r!==i)return!1;var o=Object.prototype.toString.call(e)===yS,s=Object.prototype.toString.call(n)===yS;if(o!==s)return!1;if(!o&&!r)return e===n;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(var u={},c=0;c<a.length;c+=1)u[a[c]]=!0;for(var f=0;f<l.length;f+=1)u[l[f]]=!0;var d=Object.keys(u);if(d.length!==a.length)return!1;var p=e,v=n,g=function(y){return t(p[y],v[y])};return d.every(g)},yA=function(e,n,r){return ea(e)?Object.keys(e).reduce(function(i,o){var s=!ea(n)||!aM(e[o],n[o]);return r.includes(o)?(s&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),i):s?gS(gS({},i||{}),{},vA({},o,e[o])):i},null):null},_A="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",_S=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_A;if(e===null||sM(e))return e;throw new Error(n)},lM=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_A;if(oM(e))return{tag:"async",stripePromise:Promise.resolve(e).then(function(i){return _S(i,n)})};var r=_S(e,n);return r===null?{tag:"empty"}:{tag:"sync",stripe:r}},uM=function(e){!e||!e._registerWrapper||!e.registerAppInfo||(e._registerWrapper({name:"react-stripe-js",version:"2.4.0"}),e.registerAppInfo({name:"react-stripe-js",version:"2.4.0",url:"https://stripe.com/docs/stripe-js/react"}))},wA=H.createContext(null);wA.displayName="CustomCheckoutSdkContext";var cM=function(e,n){if(!e)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(n," in an <CustomCheckoutProvider> provider."));return e},fM=H.createContext(null);fM.displayName="CustomCheckoutContext";F.any,F.shape({clientSecret:F.string.isRequired,elementsOptions:F.object}).isRequired;var ey=function(e){var n=H.useContext(wA),r=H.useContext(tp);if(n&&r)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return n?cM(n,e):EA(r,e)},tp=H.createContext(null);tp.displayName="ElementsContext";var EA=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},A1=H.createContext(null);A1.displayName="CartElementContext";var dM=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},SA=function(e){var n=e.stripe,r=e.options,i=e.children,o=H.useMemo(function(){return lM(n)},[n]),s=H.useState(null),a=Hf(s,2),l=a[0],u=a[1],c=H.useState(null),f=Hf(c,2),d=f[0],p=f[1],v=H.useState(function(){return{stripe:o.tag==="sync"?o.stripe:null,elements:o.tag==="sync"?o.stripe.elements(r):null}}),g=Hf(v,2),w=g[0],y=g[1];H.useEffect(function(){var E=!0,S=function(x){y(function(O){return O.stripe?O:{stripe:x,elements:x.elements(r)}})};return o.tag==="async"&&!w.stripe?o.stripePromise.then(function(T){T&&E&&S(T)}):o.tag==="sync"&&!w.stripe&&S(o.stripe),function(){E=!1}},[o,w,r]);var m=Zv(n);H.useEffect(function(){m!==null&&m!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[m,n]);var _=Zv(r);return H.useEffect(function(){if(w.elements){var E=yA(r,_,["clientSecret","fonts"]);E&&w.elements.update(E)}},[r,_,w.elements]),H.useEffect(function(){uM(w.stripe)},[w.stripe]),H.createElement(tp.Provider,{value:w},H.createElement(A1.Provider,{value:{cart:l,setCart:u,cartState:d,setCartState:p}},i))};SA.propTypes={stripe:F.any,options:F.object};var hM=function(e){var n=H.useContext(tp);return EA(n,e)},pM={cart:null,cartState:null,setCart:function(){},setCartState:function(){}},wS=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=H.useContext(A1);return n?pM:dM(r,e)},mM=function(){var e=hM("calls useElements()"),n=e.elements;return n},gM=function(){var e=ey("calls useStripe()"),n=e.stripe;return n};F.func.isRequired;var zt=function(e,n,r){var i=!!r,o=H.useRef(r);H.useEffect(function(){o.current=r},[r]),H.useEffect(function(){if(!i||!e)return function(){};var s=function(){o.current&&o.current.apply(o,arguments)};return e.on(n,s),function(){e.off(n,s)}},[i,n,e,o])},vM=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},tt=function(e,n){var r="".concat(vM(e),"Element"),i=function(l){var u=l.id,c=l.className,f=l.options,d=f===void 0?{}:f,p=l.onBlur,v=l.onFocus,g=l.onReady,w=l.onChange,y=l.onEscape,m=l.onClick,_=l.onLoadError,E=l.onLoaderStart,S=l.onNetworksChange,T=l.onCheckout,x=l.onLineItemClick,O=l.onConfirm,D=l.onCancel,R=l.onShippingAddressChange,te=l.onShippingRateChange,ve=ey("mounts <".concat(r,">")),lt="elements"in ve?ve.elements:null,gt="customCheckoutSdk"in ve?ve.customCheckoutSdk:null,Jn=H.useState(null),Zn=Hf(Jn,2),ke=Zn[0],j=Zn[1],U=H.useRef(null),q=H.useRef(null),fe=wS("mounts <".concat(r,">"),"customCheckoutSdk"in ve),ae=fe.setCart,$n=fe.setCartState;zt(ke,"blur",p),zt(ke,"focus",v),zt(ke,"escape",y),zt(ke,"click",m),zt(ke,"loaderror",_),zt(ke,"loaderstart",E),zt(ke,"networkschange",S),zt(ke,"lineitemclick",x),zt(ke,"confirm",O),zt(ke,"cancel",D),zt(ke,"shippingaddresschange",R),zt(ke,"shippingratechange",te);var At;e==="cart"?At=function(tr){$n(tr),g&&g(tr)}:g&&(e==="expressCheckout"?At=g:At=function(){g(ke)}),zt(ke,"ready",At);var er=e==="cart"?function(Ee){$n(Ee),w&&w(Ee)}:w;zt(ke,"change",er);var Ut=e==="cart"?function(Ee){$n(Ee),T&&T(Ee)}:T;zt(ke,"checkout",Ut),H.useLayoutEffect(function(){if(U.current===null&&q.current!==null&&(lt||gt)){var Ee=null;gt?Ee=gt.createElement(e,d):lt&&(Ee=lt.create(e,d)),e==="cart"&&ae&&ae(Ee),U.current=Ee,j(Ee),Ee&&Ee.mount(q.current)}},[lt,gt,d,ae]);var _n=Zv(d);return H.useEffect(function(){if(U.current){var Ee=yA(d,_n,["paymentRequest"]);Ee&&U.current.update(Ee)}},[d,_n]),H.useLayoutEffect(function(){return function(){if(U.current&&typeof U.current.destroy=="function")try{U.current.destroy(),U.current=null}catch{}}},[]),H.createElement("div",{id:u,className:c,ref:q})},o=function(l){var u=ey("mounts <".concat(r,">"));wS("mounts <".concat(r,">"),"customCheckoutSdk"in u);var c=l.id,f=l.className;return H.createElement("div",{id:c,className:f})},s=n?o:i;return s.propTypes={id:F.string,className:F.string,onChange:F.func,onBlur:F.func,onFocus:F.func,onReady:F.func,onEscape:F.func,onClick:F.func,onLoadError:F.func,onLoaderStart:F.func,onNetworksChange:F.func,onCheckout:F.func,onLineItemClick:F.func,onConfirm:F.func,onCancel:F.func,onShippingAddressChange:F.func,onShippingRateChange:F.func,options:F.object},s.displayName=r,s.__elementType=e,s},nt=typeof window>"u",yM=H.createContext(null);yM.displayName="EmbeddedCheckoutProviderContext";tt("auBankAccount",nt);tt("card",nt);tt("cardNumber",nt);tt("cardExpiry",nt);tt("cardCvc",nt);tt("fpxBank",nt);tt("iban",nt);tt("idealBank",nt);tt("p24Bank",nt);tt("epsBank",nt);var _M=tt("payment",nt);tt("expressCheckout",nt);tt("paymentRequestButton",nt);tt("linkAuthentication",nt);var wM=tt("address",nt);tt("shippingAddress",nt);tt("cart",nt);tt("paymentMethodMessaging",nt);tt("affirmMessage",nt);tt("afterpayClearpayMessage",nt);var bA="https://js.stripe.com/v3",EM=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,ES="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",SM=function(){for(var e=document.querySelectorAll('script[src^="'.concat(bA,'"]')),n=0;n<e.length;n++){var r=e[n];if(EM.test(r.src))return r}return null},SS=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(bA).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},bM=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"2.4.0",startTime:n})},el=null,Jc=null,Zc=null,xM=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},TM=function(e,n){return function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))}},IM=function(e){return el!==null?el:(el=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(ES),window.Stripe){n(window.Stripe);return}try{var i=SM();if(i&&e)console.warn(ES);else if(!i)i=SS(e);else if(i&&Zc!==null&&Jc!==null){var o;i.removeEventListener("load",Zc),i.removeEventListener("error",Jc),(o=i.parentNode)===null||o===void 0||o.removeChild(i),i=SS(e)}Zc=TM(n,r),Jc=xM(r),i.addEventListener("load",Zc),i.addEventListener("error",Jc)}catch(s){r(s);return}}),el.catch(function(n){return el=null,Promise.reject(n)}))},CM=function(e,n,r){if(e===null)return null;var i=e.apply(void 0,n);return bM(i,r),i},tl,xA=!1,TA=function(){return tl||(tl=IM(null).catch(function(e){return tl=null,Promise.reject(e)}),tl)};Promise.resolve().then(function(){return TA()}).catch(function(t){xA||console.warn(t)});var PM=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];xA=!0;var i=Date.now();return TA().then(function(o){return CM(o,n,i)})};const AM="pk_test_51O3o9TI0UNHzYacJxHTg3Zylsq0QipZ50kCvEhTQxY8PBfUWqDMNDTkUnHEuQg1vvrvTj0848lDUwAEB70NwpjWc00bUfAycQ8",kM=PM(AM),RM={mode:"payment",currency:"usd",amount:1099},k1=b.createContext({categoriesMap:{},setCategoriesMap:()=>{}}),OM=({children:t})=>{const[e,n]=b.useState({}),r={categoriesMap:e,setCategoriesMap:n};return h.jsx(k1.Provider,{value:r,children:t})};var Jt=function(){return Jt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Jt.apply(this,arguments)};function R1(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}function IA(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var NM=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,$M=IA(function(t){return NM.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),be="-ms-",Ll="-moz-",he="-webkit-",CA="comm",np="rule",O1="decl",DM="@import",PA="@keyframes",jM="@layer",AA=Math.abs,N1=String.fromCharCode,ty=Object.assign;function MM(t,e){return ft(t,0)^45?(((e<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function kA(t){return t.trim()}function Cr(t,e){return(t=e.exec(t))?t[0]:t}function Z(t,e,n){return t.replace(e,n)}function qf(t,e,n){return t.indexOf(e,n)}function ft(t,e){return t.charCodeAt(e)|0}function ta(t,e,n){return t.slice(e,n)}function ir(t){return t.length}function RA(t){return t.length}function vl(t,e){return e.push(t),t}function LM(t,e){return t.map(e).join("")}function bS(t,e){return t.filter(function(n){return!Cr(n,e)})}var rp=1,na=1,OA=0,kn=0,Ke=0,Ta="";function ip(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:rp,column:na,length:s,return:"",siblings:a}}function si(t,e){return ty(ip("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Jo(t){for(;t.root;)t=si(t.root,{children:[t]});vl(t,t.siblings)}function VM(){return Ke}function FM(){return Ke=kn>0?ft(Ta,--kn):0,na--,Ke===10&&(na=1,rp--),Ke}function Hn(){return Ke=kn<OA?ft(Ta,kn++):0,na++,Ke===10&&(na=1,rp++),Ke}function bo(){return ft(Ta,kn)}function Gf(){return kn}function op(t,e){return ta(Ta,t,e)}function ny(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function UM(t){return rp=na=1,OA=ir(Ta=t),kn=0,[]}function zM(t){return Ta="",t}function sg(t){return kA(op(kn-1,ry(t===91?t+2:t===40?t+1:t)))}function BM(t){for(;(Ke=bo())&&Ke<33;)Hn();return ny(t)>2||ny(Ke)>3?"":" "}function WM(t,e){for(;--e&&Hn()&&!(Ke<48||Ke>102||Ke>57&&Ke<65||Ke>70&&Ke<97););return op(t,Gf()+(e<6&&bo()==32&&Hn()==32))}function ry(t){for(;Hn();)switch(Ke){case t:return kn;case 34:case 39:t!==34&&t!==39&&ry(Ke);break;case 40:t===41&&ry(t);break;case 92:Hn();break}return kn}function HM(t,e){for(;Hn()&&t+Ke!==57;)if(t+Ke===84&&bo()===47)break;return"/*"+op(e,kn-1)+"*"+N1(t===47?t:Hn())}function qM(t){for(;!ny(bo());)Hn();return op(t,kn)}function GM(t){return zM(Kf("",null,null,null,[""],t=UM(t),0,[0],t))}function Kf(t,e,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,p=0,v=0,g=1,w=1,y=1,m=0,_="",E=i,S=o,T=r,x=_;w;)switch(v=m,m=Hn()){case 40:if(v!=108&&ft(x,f-1)==58){qf(x+=Z(sg(m),"&","&\f"),"&\f",AA(u?a[u-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:x+=sg(m);break;case 9:case 10:case 13:case 32:x+=BM(v);break;case 92:x+=WM(Gf()-1,7);continue;case 47:switch(bo()){case 42:case 47:vl(KM(HM(Hn(),Gf()),e,n,l),l);break;default:x+="/"}break;case 123*g:a[u++]=ir(x)*y;case 125*g:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:y==-1&&(x=Z(x,/\f/g,"")),p>0&&ir(x)-f&&vl(p>32?TS(x+";",r,n,f-1,l):TS(Z(x," ","")+";",r,n,f-2,l),l);break;case 59:x+=";";default:if(vl(T=xS(x,e,n,u,c,i,a,_,E=[],S=[],f,o),o),m===123)if(c===0)Kf(x,e,T,T,E,o,f,a,S);else switch(d===99&&ft(x,3)===110?100:d){case 100:case 108:case 109:case 115:Kf(t,T,T,r&&vl(xS(t,T,T,0,0,i,a,_,i,E=[],f,S),S),i,S,f,a,r?E:S);break;default:Kf(x,T,T,T,[""],S,0,a,S)}}u=c=p=0,g=y=1,_=x="",f=s;break;case 58:f=1+ir(x),p=v;default:if(g<1){if(m==123)--g;else if(m==125&&g++==0&&FM()==125)continue}switch(x+=N1(m),m*g){case 38:y=c>0?1:(x+="\f",-1);break;case 44:a[u++]=(ir(x)-1)*y,y=1;break;case 64:bo()===45&&(x+=sg(Hn())),d=bo(),c=f=ir(_=x+=qM(Gf())),m++;break;case 45:v===45&&ir(x)==2&&(g=0)}}return o}function xS(t,e,n,r,i,o,s,a,l,u,c,f){for(var d=i-1,p=i===0?o:[""],v=RA(p),g=0,w=0,y=0;g<r;++g)for(var m=0,_=ta(t,d+1,d=AA(w=s[g])),E=t;m<v;++m)(E=kA(w>0?p[m]+" "+_:Z(_,/&\f/g,p[m])))&&(l[y++]=E);return ip(t,e,n,i===0?np:a,l,u,c,f)}function KM(t,e,n,r){return ip(t,e,n,CA,N1(VM()),ta(t,2,-2),0,r)}function TS(t,e,n,r,i){return ip(t,e,n,O1,ta(t,0,r),ta(t,r+1,-1),r,i)}function NA(t,e,n){switch(MM(t,e)){case 5103:return he+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+t+t;case 4789:return Ll+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return he+t+Ll+t+be+t+t;case 5936:switch(ft(t,e+11)){case 114:return he+t+be+Z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return he+t+be+Z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return he+t+be+Z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return he+t+be+t+t;case 6165:return he+t+be+"flex-"+t+t;case 5187:return he+t+Z(t,/(\w+).+(:[^]+)/,he+"box-$1$2"+be+"flex-$1$2")+t;case 5443:return he+t+be+"flex-item-"+Z(t,/flex-|-self/g,"")+(Cr(t,/flex-|baseline/)?"":be+"grid-row-"+Z(t,/flex-|-self/g,""))+t;case 4675:return he+t+be+"flex-line-pack"+Z(t,/align-content|flex-|-self/g,"")+t;case 5548:return he+t+be+Z(t,"shrink","negative")+t;case 5292:return he+t+be+Z(t,"basis","preferred-size")+t;case 6060:return he+"box-"+Z(t,"-grow","")+he+t+be+Z(t,"grow","positive")+t;case 4554:return he+Z(t,/([^-])(transform)/g,"$1"+he+"$2")+t;case 6187:return Z(Z(Z(t,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),t,"")+t;case 5495:case 3959:return Z(t,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return Z(Z(t,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+t+t;case 4200:if(!Cr(t,/flex-|baseline/))return be+"grid-column-align"+ta(t,e)+t;break;case 2592:case 3360:return be+Z(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Cr(r.props,/grid-\w+-end/)})?~qf(t+(n=n[e].value),"span",0)?t:be+Z(t,"-start","")+t+be+"grid-row-span:"+(~qf(n,"span",0)?Cr(n,/\d+/):+Cr(n,/\d+/)-+Cr(t,/\d+/))+";":be+Z(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Cr(r.props,/grid-\w+-start/)})?t:be+Z(Z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Z(t,/(.+)-inline(.+)/,he+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ir(t)-1-e>6)switch(ft(t,e+1)){case 109:if(ft(t,e+4)!==45)break;case 102:return Z(t,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+Ll+(ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~qf(t,"stretch",0)?NA(Z(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return be+i+":"+o+u+(s?be+i+"-span:"+(a?l:+l-+o)+u:"")+t});case 4949:if(ft(t,e+6)===121)return Z(t,":",":"+he)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return Z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(ft(t,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+be+"$2box$3")+t;case 100:return Z(t,":",":"+be)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(t,"scroll-","scroll-snap-")+t}return t}function Fd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function QM(t,e,n,r){switch(t.type){case jM:if(t.children.length)break;case DM:case O1:return t.return=t.return||t.value;case CA:return"";case PA:return t.return=t.value+"{"+Fd(t.children,r)+"}";case np:if(!ir(t.value=t.props.join(",")))return""}return ir(n=Fd(t.children,r))?t.return=t.value+"{"+n+"}":""}function YM(t){var e=RA(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function XM(t){return function(e){e.root||(e=e.return)&&t(e)}}function JM(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case O1:t.return=NA(t.value,t.length,n);return;case PA:return Fd([si(t,{value:Z(t.value,"@","@"+he)})],r);case np:if(t.length)return LM(n=t.props,function(i){switch(Cr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jo(si(t,{props:[Z(i,/:(read-\w+)/,":"+Ll+"$1")]})),Jo(si(t,{props:[i]})),ty(t,{props:bS(n,r)});break;case"::placeholder":Jo(si(t,{props:[Z(i,/:(plac\w+)/,":"+he+"input-$1")]})),Jo(si(t,{props:[Z(i,/:(plac\w+)/,":"+Ll+"$1")]})),Jo(si(t,{props:[Z(i,/:(plac\w+)/,be+"input-$1")]})),Jo(si(t,{props:[i]})),ty(t,{props:bS(n,r)});break}return""})}}var ZM={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},an={},ra=typeof process<"u"&&an!==void 0&&(an.REACT_APP_SC_ATTR||an.SC_ATTR)||"data-styled",$A="active",DA="data-styled-version",sp="6.1.6",$1=`/*!sc*/
`,D1=typeof window<"u"&&"HTMLElement"in window,eL=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==""?an.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&an.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.SC_DISABLE_SPEEDY!==void 0&&an.SC_DISABLE_SPEEDY!==""&&an.SC_DISABLE_SPEEDY!=="false"&&an.SC_DISABLE_SPEEDY),ap=Object.freeze([]),ia=Object.freeze({});function tL(t,e,n){return n===void 0&&(n=ia),t.theme!==n.theme&&t.theme||e||n.theme}var jA=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rL=/(^-|-$)/g;function IS(t){return t.replace(nL,"-").replace(rL,"")}var iL=/(a)(d)/gi,ef=52,CS=function(t){return String.fromCharCode(t+(t>25?39:97))};function iy(t){var e,n="";for(e=Math.abs(t);e>ef;e=e/ef|0)n=CS(e%ef)+n;return(CS(e%ef)+n).replace(iL,"$1-$2")}var ag,MA=5381,Ts=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},LA=function(t){return Ts(MA,t)};function VA(t){return iy(LA(t)>>>0)}function oL(t){return t.displayName||t.name||"Component"}function lg(t){return typeof t=="string"&&!0}var FA=typeof Symbol=="function"&&Symbol.for,UA=FA?Symbol.for("react.memo"):60115,sL=FA?Symbol.for("react.forward_ref"):60112,aL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uL=((ag={})[sL]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ag[UA]=zA,ag);function PS(t){return("type"in(e=t)&&e.type.$$typeof)===UA?zA:"$$typeof"in t?uL[t.$$typeof]:aL;var e}var cL=Object.defineProperty,fL=Object.getOwnPropertyNames,AS=Object.getOwnPropertySymbols,dL=Object.getOwnPropertyDescriptor,hL=Object.getPrototypeOf,kS=Object.prototype;function BA(t,e,n){if(typeof e!="string"){if(kS){var r=hL(e);r&&r!==kS&&BA(t,r,n)}var i=fL(e);AS&&(i=i.concat(AS(e)));for(var o=PS(t),s=PS(e),a=0;a<i.length;++a){var l=i[a];if(!(l in lL||n&&n[l]||s&&l in s||o&&l in o)){var u=dL(e,l);try{cL(t,l,u)}catch{}}}}return t}function oa(t){return typeof t=="function"}function j1(t){return typeof t=="object"&&"styledComponentId"in t}function fo(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function oy(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function _u(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function sy(t,e,n){if(n===void 0&&(n=!1),!n&&!_u(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=sy(t[r],e[r]);else if(_u(e))for(var r in e)t[r]=sy(t[r],e[r]);return t}function M1(t,e){Object.defineProperty(t,"toString",{value:e})}function rc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var pL=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw rc(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat($1);return n},t}(),Qf=new Map,Ud=new Map,Yf=1,tf=function(t){if(Qf.has(t))return Qf.get(t);for(;Ud.has(Yf);)Yf++;var e=Yf++;return Qf.set(t,e),Ud.set(e,t),e},mL=function(t,e){Yf=e+1,Qf.set(t,e),Ud.set(e,t)},gL="style[".concat(ra,"][").concat(DA,'="').concat(sp,'"]'),vL=new RegExp("^".concat(ra,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yL=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},_L=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split($1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(vL);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(mL(c,u),yL(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function wL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var WA=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ra,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ra,$A),r.setAttribute(DA,sp);var s=wL();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},EL=function(){function t(e){this.element=WA(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw rc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),SL=function(){function t(e){this.element=WA(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),bL=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),RS=D1,xL={isServer:!D1,useCSSOMInjection:!eL},HA=function(){function t(e,n,r){e===void 0&&(e=ia),n===void 0&&(n={});var i=this;this.options=Jt(Jt({},xL),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&D1&&RS&&(RS=!1,function(o){for(var s=document.querySelectorAll(gL),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ra)!==$A&&(_L(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),M1(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var d=function(y){return Ud.get(y)}(f);if(d===void 0)return"continue";var p=o.names.get(d),v=s.getGroup(f);if(p===void 0||v.length===0)return"continue";var g="".concat(ra,".g").concat(f,'[id="').concat(d,'"]'),w="";p!==void 0&&p.forEach(function(y){y.length>0&&(w+="".concat(y,","))}),l+="".concat(v).concat(g,'{content:"').concat(w,'"}').concat($1)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return tf(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Jt(Jt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new bL(i):r?new EL(i):new SL(i)}(this.options),new pL(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(tf(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(tf(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(tf(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),TL=/&/g,IL=/^\s*\/\/.*$/gm;function qA(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=qA(n.children,e)),n})}function CL(t){var e,n,r,i=t===void 0?ia:t,o=i.options,s=o===void 0?ia:o,a=i.plugins,l=a===void 0?ap:a,u=function(d,p,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===np&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(TL,n).replace(r,u))}),s.prefix&&c.push(JM),c.push(QM);var f=function(d,p,v,g){p===void 0&&(p=""),v===void 0&&(v=""),g===void 0&&(g="&"),e=g,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=d.replace(IL,""),y=GM(v||p?"".concat(v," ").concat(p," { ").concat(w," }"):w);s.namespace&&(y=qA(y,s.namespace));var m=[];return Fd(y,YM(c.concat(XM(function(_){return m.push(_)})))),m};return f.hash=l.length?l.reduce(function(d,p){return p.name||rc(15),Ts(d,p.name)},MA).toString():"",f}var PL=new HA,ay=CL(),GA=H.createContext({shouldForwardProp:void 0,styleSheet:PL,stylis:ay});GA.Consumer;H.createContext(void 0);function OS(){return b.useContext(GA)}var KA=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ay);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,M1(this,function(){throw rc(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ay),this.name+e.hash},t}(),AL=function(t){return t>="A"&&t<="Z"};function NS(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;AL(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var QA=function(t){return t==null||t===!1||t===""},YA=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!QA(o)&&(Array.isArray(o)&&o.isCss||oa(o)?r.push("".concat(NS(i),":"),o,";"):_u(o)?r.push.apply(r,yu(yu(["".concat(i," {")],YA(o),!1),["}"],!1)):r.push("".concat(NS(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in ZM||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xo(t,e,n,r){if(QA(t))return[];if(j1(t))return[".".concat(t.styledComponentId)];if(oa(t)){if(!oa(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return xo(i,e,n,r)}var o;return t instanceof KA?n?(t.inject(n,r),[t.getName(r)]):[t]:_u(t)?YA(t):Array.isArray(t)?Array.prototype.concat.apply(ap,t.map(function(s){return xo(s,e,n,r)})):[t.toString()]}function kL(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(oa(n)&&!j1(n))return!1}return!0}var RL=LA(sp),OL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&kL(e),this.componentId=n,this.baseHash=Ts(RL,n),this.baseStyle=r,HA.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=fo(i,this.staticRulesId);else{var o=oy(xo(this.rules,e,n,r)),s=iy(Ts(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=fo(i,s),this.staticRulesId=s}else{for(var l=Ts(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=oy(xo(f,e,n,r));l=Ts(l,d+c),u+=d}}if(u){var p=iy(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=fo(i,p)}}return i},t}(),XA=H.createContext(void 0);XA.Consumer;var ug={};function NL(t,e,n){var r=j1(t),i=t,o=!lg(t),s=e.attrs,a=s===void 0?ap:s,l=e.componentId,u=l===void 0?function(E,S){var T=typeof E!="string"?"sc":IS(E);ug[T]=(ug[T]||0)+1;var x="".concat(T,"-").concat(VA(sp+T+ug[T]));return S?"".concat(S,"-").concat(x):x}(e.displayName,e.parentComponentId):l,c=e.displayName,f=c===void 0?function(E){return lg(E)?"styled.".concat(E):"Styled(".concat(oL(E),")")}(t):c,d=e.displayName&&e.componentId?"".concat(IS(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(e.shouldForwardProp){var w=e.shouldForwardProp;v=function(E,S){return g(E,S)&&w(E,S)}}else v=g}var y=new OL(n,d,r?i.componentStyle:void 0);function m(E,S){return function(T,x,O){var D=T.attrs,R=T.componentStyle,te=T.defaultProps,ve=T.foldedComponentIds,lt=T.styledComponentId,gt=T.target,Jn=H.useContext(XA),Zn=OS(),ke=T.shouldForwardProp||Zn.shouldForwardProp,j=tL(x,Jn,te)||ia,U=function(er,Ut,_n){for(var Ee,tr=Jt(Jt({},Ut),{className:void 0,theme:_n}),Om=0;Om<er.length;Om+=1){var $c=oa(Ee=er[Om])?Ee(tr):Ee;for(var ei in $c)tr[ei]=ei==="className"?fo(tr[ei],$c[ei]):ei==="style"?Jt(Jt({},tr[ei]),$c[ei]):$c[ei]}return Ut.className&&(tr.className=fo(tr.className,Ut.className)),tr}(D,x,j),q=U.as||gt,fe={};for(var ae in U)U[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&U.theme===j||(ae==="forwardedAs"?fe.as=U.forwardedAs:ke&&!ke(ae,q)||(fe[ae]=U[ae]));var $n=function(er,Ut){var _n=OS(),Ee=er.generateAndInjectStyles(Ut,_n.styleSheet,_n.stylis);return Ee}(R,U),At=fo(ve,lt);return $n&&(At+=" "+$n),U.className&&(At+=" "+U.className),fe[lg(q)&&!jA.has(q)?"class":"className"]=At,fe.ref=O,b.createElement(q,fe)}(_,E,S)}m.displayName=f;var _=H.forwardRef(m);return _.attrs=p,_.componentStyle=y,_.displayName=f,_.shouldForwardProp=v,_.foldedComponentIds=r?fo(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=d,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(S){for(var T=[],x=1;x<arguments.length;x++)T[x-1]=arguments[x];for(var O=0,D=T;O<D.length;O++)sy(S,D[O],!0);return S}({},i.defaultProps,E):E}}),M1(_,function(){return".".concat(_.styledComponentId)}),o&&BA(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function $S(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var DS=function(t){return Object.assign(t,{isCss:!0})};function No(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(oa(t)||_u(t))return DS(xo($S(ap,yu([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?xo(r):DS(xo($S(r,e)))}function ly(t,e,n){if(n===void 0&&(n=ia),!e)throw rc(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,No.apply(void 0,yu([i],o,!1)))};return r.attrs=function(i){return ly(t,e,Jt(Jt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ly(t,e,Jt(Jt({},n),i))},r}var JA=function(t){return ly(NL,t)},A=JA;jA.forEach(function(t){A[t]=JA(t)});function lp(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=oy(No.apply(void 0,yu([t],e,!1))),i=VA(r);return new KA(i,r)}var L1={},ZA={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(ZA);var up=ZA.exports,cg={};function B(){return B=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},B.apply(this,arguments)}function di(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function ek(t){if(!di(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=ek(t[n])}),e}function qn(t,e,n={clone:!0}){const r=n.clone?B({},t):t;return di(t)&&di(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(di(e[i])&&i in t&&di(t[i])?r[i]=qn(t[i],e[i],n):n.clone?r[i]=di(e[i])?ek(e[i]):e[i]:r[i]=e[i])}),r}function sa(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function pr(t){if(typeof t!="string")throw new Error(sa(7));return t.charAt(0).toUpperCase()+t.slice(1)}function $L(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function DL(t,e=166){let n;function r(...i){const o=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(o,e)}return r.clear=()=>{clearTimeout(n)},r}function jL(t,e){return()=>null}function ML(t,e){var n,r;return b.isValidElement(t)&&e.indexOf((n=t.type.muiName)!=null?n:(r=t.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function tk(t){return t&&t.ownerDocument||document}function LL(t){return tk(t).defaultView||window}function VL(t,e){return()=>null}function nk(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const FL=typeof window<"u"?b.useLayoutEffect:b.useEffect,rk=FL;let jS=0;function UL(t){const[e,n]=b.useState(t),r=t||e;return b.useEffect(()=>{e==null&&(jS+=1,n(`mui-${jS}`))},[e]),r}const MS=hd.useId;function zL(t){if(MS!==void 0){const e=MS();return t??e}return UL(t)}function BL(t,e,n,r,i){return null}function WL({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=b.useRef(t!==void 0),[o,s]=b.useState(e),a=i?t:o,l=b.useCallback(u=>{i||s(u)},[]);return[a,l]}function HL(t){const e=b.useRef(t);return rk(()=>{e.current=t}),b.useRef((...n)=>(0,e.current)(...n)).current}function qL(...t){return b.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{nk(n,e)})},t)}let cp=!0,uy=!1,LS;const GL={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function KL(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&GL[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function QL(t){t.metaKey||t.altKey||t.ctrlKey||(cp=!0)}function fg(){cp=!1}function YL(){this.visibilityState==="hidden"&&uy&&(cp=!0)}function XL(t){t.addEventListener("keydown",QL,!0),t.addEventListener("mousedown",fg,!0),t.addEventListener("pointerdown",fg,!0),t.addEventListener("touchstart",fg,!0),t.addEventListener("visibilitychange",YL,!0)}function JL(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return cp||KL(e)}function ZL(){const t=b.useCallback(i=>{i!=null&&XL(i.ownerDocument)},[]),e=b.useRef(!1);function n(){return e.current?(uy=!0,window.clearTimeout(LS),LS=window.setTimeout(()=>{uy=!1},100),e.current=!1,!0):!1}function r(i){return JL(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function ik(t,e){const n=B({},e);return Object.keys(t).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=B({},t[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=t[r]||{},o=e[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]=B({},o),Object.keys(i).forEach(s=>{n[r][s]=ik(i[s],o[s])}))}else n[r]===void 0&&(n[r]=t[r])}),n}function e3(t,e,n=void 0){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((o,s)=>{if(s){const a=e(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),r}const VS=t=>t,t3=()=>{let t=VS;return{configure(e){t=e},generate(e){return t(e)},reset(){t=VS}}},ok=t3(),n3={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function sk(t,e,n="Mui"){const r=n3[e];return r?`${n}-${r}`:`${ok.generate(t)}-${e}`}function r3(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=sk(t,i,n)}),r}function Yn(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ak(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=ak(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function i3(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=ak(t))&&(r&&(r+=" "),r+=e);return r}function o3(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function s3(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var a3=function(){function t(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(s3(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=o3(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Nt="-ms-",zd="-moz-",le="-webkit-",lk="comm",V1="rule",F1="decl",l3="@import",uk="@keyframes",u3="@layer",c3=Math.abs,fp=String.fromCharCode,f3=Object.assign;function d3(t,e){return Et(t,0)^45?(((e<<2^Et(t,0))<<2^Et(t,1))<<2^Et(t,2))<<2^Et(t,3):0}function ck(t){return t.trim()}function h3(t,e){return(t=e.exec(t))?t[0]:t}function ue(t,e,n){return t.replace(e,n)}function cy(t,e){return t.indexOf(e)}function Et(t,e){return t.charCodeAt(e)|0}function wu(t,e,n){return t.slice(e,n)}function or(t){return t.length}function U1(t){return t.length}function nf(t,e){return e.push(t),t}function p3(t,e){return t.map(e).join("")}var dp=1,aa=1,fk=0,on=0,Qe=0,Ia="";function hp(t,e,n,r,i,o,s){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:dp,column:aa,length:s,return:""}}function nl(t,e){return f3(hp("",null,null,"",null,null,0),t,{length:-t.length},e)}function m3(){return Qe}function g3(){return Qe=on>0?Et(Ia,--on):0,aa--,Qe===10&&(aa=1,dp--),Qe}function dn(){return Qe=on<fk?Et(Ia,on++):0,aa++,Qe===10&&(aa=1,dp++),Qe}function mr(){return Et(Ia,on)}function Xf(){return on}function ic(t,e){return wu(Ia,t,e)}function Eu(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dk(t){return dp=aa=1,fk=or(Ia=t),on=0,[]}function hk(t){return Ia="",t}function Jf(t){return ck(ic(on-1,fy(t===91?t+2:t===40?t+1:t)))}function v3(t){for(;(Qe=mr())&&Qe<33;)dn();return Eu(t)>2||Eu(Qe)>3?"":" "}function y3(t,e){for(;--e&&dn()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return ic(t,Xf()+(e<6&&mr()==32&&dn()==32))}function fy(t){for(;dn();)switch(Qe){case t:return on;case 34:case 39:t!==34&&t!==39&&fy(Qe);break;case 40:t===41&&fy(t);break;case 92:dn();break}return on}function _3(t,e){for(;dn()&&t+Qe!==57;)if(t+Qe===84&&mr()===47)break;return"/*"+ic(e,on-1)+"*"+fp(t===47?t:dn())}function w3(t){for(;!Eu(mr());)dn();return ic(t,on)}function E3(t){return hk(Zf("",null,null,null,[""],t=dk(t),0,[0],t))}function Zf(t,e,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,p=0,v=0,g=1,w=1,y=1,m=0,_="",E=i,S=o,T=r,x=_;w;)switch(v=m,m=dn()){case 40:if(v!=108&&Et(x,f-1)==58){cy(x+=ue(Jf(m),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:x+=Jf(m);break;case 9:case 10:case 13:case 32:x+=v3(v);break;case 92:x+=y3(Xf()-1,7);continue;case 47:switch(mr()){case 42:case 47:nf(S3(_3(dn(),Xf()),e,n),l);break;default:x+="/"}break;case 123*g:a[u++]=or(x)*y;case 125*g:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:y==-1&&(x=ue(x,/\f/g,"")),p>0&&or(x)-f&&nf(p>32?US(x+";",r,n,f-1):US(ue(x," ","")+";",r,n,f-2),l);break;case 59:x+=";";default:if(nf(T=FS(x,e,n,u,c,i,a,_,E=[],S=[],f),o),m===123)if(c===0)Zf(x,e,T,T,E,o,f,a,S);else switch(d===99&&Et(x,3)===110?100:d){case 100:case 108:case 109:case 115:Zf(t,T,T,r&&nf(FS(t,T,T,0,0,i,a,_,i,E=[],f),S),i,S,f,a,r?E:S);break;default:Zf(x,T,T,T,[""],S,0,a,S)}}u=c=p=0,g=y=1,_=x="",f=s;break;case 58:f=1+or(x),p=v;default:if(g<1){if(m==123)--g;else if(m==125&&g++==0&&g3()==125)continue}switch(x+=fp(m),m*g){case 38:y=c>0?1:(x+="\f",-1);break;case 44:a[u++]=(or(x)-1)*y,y=1;break;case 64:mr()===45&&(x+=Jf(dn())),d=mr(),c=f=or(_=x+=w3(Xf())),m++;break;case 45:v===45&&or(x)==2&&(g=0)}}return o}function FS(t,e,n,r,i,o,s,a,l,u,c){for(var f=i-1,d=i===0?o:[""],p=U1(d),v=0,g=0,w=0;v<r;++v)for(var y=0,m=wu(t,f+1,f=c3(g=s[v])),_=t;y<p;++y)(_=ck(g>0?d[y]+" "+m:ue(m,/&\f/g,d[y])))&&(l[w++]=_);return hp(t,e,n,i===0?V1:a,l,u,c)}function S3(t,e,n){return hp(t,e,n,lk,fp(m3()),wu(t,2,-2),0)}function US(t,e,n,r){return hp(t,e,n,F1,wu(t,0,r),wu(t,r+1,-1),r)}function Ms(t,e){for(var n="",r=U1(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function b3(t,e,n,r){switch(t.type){case u3:if(t.children.length)break;case l3:case F1:return t.return=t.return||t.value;case lk:return"";case uk:return t.return=t.value+"{"+Ms(t.children,r)+"}";case V1:t.value=t.props.join(",")}return or(n=Ms(t.children,r))?t.return=t.value+"{"+n+"}":""}function x3(t){var e=U1(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function T3(t){return function(e){e.root||(e=e.return)&&t(e)}}var I3=function(e,n,r){for(var i=0,o=0;i=o,o=mr(),i===38&&o===12&&(n[r]=1),!Eu(o);)dn();return ic(e,on)},C3=function(e,n){var r=-1,i=44;do switch(Eu(i)){case 0:i===38&&mr()===12&&(n[r]=1),e[r]+=I3(on-1,n,r);break;case 2:e[r]+=Jf(i);break;case 4:if(i===44){e[++r]=mr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=fp(i)}while(i=dn());return e},P3=function(e,n){return hk(C3(dk(e),n))},zS=new WeakMap,A3=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!zS.get(r))&&!i){zS.set(e,!0);for(var o=[],s=P3(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=o[l]?s[l].replace(/&\f/g,a[c]):a[c]+" "+s[l]}}},k3=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function pk(t,e){switch(d3(t,e)){case 5103:return le+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return le+t+zd+t+Nt+t+t;case 6828:case 4268:return le+t+Nt+t+t;case 6165:return le+t+Nt+"flex-"+t+t;case 5187:return le+t+ue(t,/(\w+).+(:[^]+)/,le+"box-$1$2"+Nt+"flex-$1$2")+t;case 5443:return le+t+Nt+"flex-item-"+ue(t,/flex-|-self/,"")+t;case 4675:return le+t+Nt+"flex-line-pack"+ue(t,/align-content|flex-|-self/,"")+t;case 5548:return le+t+Nt+ue(t,"shrink","negative")+t;case 5292:return le+t+Nt+ue(t,"basis","preferred-size")+t;case 6060:return le+"box-"+ue(t,"-grow","")+le+t+Nt+ue(t,"grow","positive")+t;case 4554:return le+ue(t,/([^-])(transform)/g,"$1"+le+"$2")+t;case 6187:return ue(ue(ue(t,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),t,"")+t;case 5495:case 3959:return ue(t,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return ue(ue(t,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+Nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+t+t;case 4095:case 3583:case 4068:case 2532:return ue(t,/(.+)-inline(.+)/,le+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(or(t)-1-e>6)switch(Et(t,e+1)){case 109:if(Et(t,e+4)!==45)break;case 102:return ue(t,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+zd+(Et(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~cy(t,"stretch")?pk(ue(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Et(t,e+1)!==115)break;case 6444:switch(Et(t,or(t)-3-(~cy(t,"!important")&&10))){case 107:return ue(t,":",":"+le)+t;case 101:return ue(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+le+(Et(t,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+Nt+"$2box$3")+t}break;case 5936:switch(Et(t,e+11)){case 114:return le+t+Nt+ue(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return le+t+Nt+ue(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return le+t+Nt+ue(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return le+t+Nt+t+t}return t}var R3=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case F1:e.return=pk(e.value,e.length);break;case uk:return Ms([nl(e,{value:ue(e.value,"@","@"+le)})],i);case V1:if(e.length)return p3(e.props,function(o){switch(h3(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ms([nl(e,{props:[ue(o,/:(read-\w+)/,":"+zd+"$1")]})],i);case"::placeholder":return Ms([nl(e,{props:[ue(o,/:(plac\w+)/,":"+le+"input-$1")]}),nl(e,{props:[ue(o,/:(plac\w+)/,":"+zd+"$1")]}),nl(e,{props:[ue(o,/:(plac\w+)/,Nt+"input-$1")]})],i)}return""})}},O3=[R3],N3=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var w=g.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=e.stylisPlugins||O3,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var w=g.getAttribute("data-emotion").split(" "),y=1;y<w.length;y++)o[w[y]]=!0;a.push(g)});var l,u=[A3,k3];{var c,f=[b3,T3(function(g){c.insert(g)})],d=x3(u.concat(i,f)),p=function(w){return Ms(E3(w),d)};l=function(w,y,m,_){c=m,p(w?w+"{"+y.styles+"}":y.styles),_&&(v.inserted[y.name]=!0)}}var v={key:n,sheet:new a3({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return v.sheet.hydrate(a),v},mk={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt=typeof Symbol=="function"&&Symbol.for,z1=pt?Symbol.for("react.element"):60103,B1=pt?Symbol.for("react.portal"):60106,pp=pt?Symbol.for("react.fragment"):60107,mp=pt?Symbol.for("react.strict_mode"):60108,gp=pt?Symbol.for("react.profiler"):60114,vp=pt?Symbol.for("react.provider"):60109,yp=pt?Symbol.for("react.context"):60110,W1=pt?Symbol.for("react.async_mode"):60111,_p=pt?Symbol.for("react.concurrent_mode"):60111,wp=pt?Symbol.for("react.forward_ref"):60112,Ep=pt?Symbol.for("react.suspense"):60113,$3=pt?Symbol.for("react.suspense_list"):60120,Sp=pt?Symbol.for("react.memo"):60115,bp=pt?Symbol.for("react.lazy"):60116,D3=pt?Symbol.for("react.block"):60121,j3=pt?Symbol.for("react.fundamental"):60117,M3=pt?Symbol.for("react.responder"):60118,L3=pt?Symbol.for("react.scope"):60119;function vn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case z1:switch(t=t.type,t){case W1:case _p:case pp:case gp:case mp:case Ep:return t;default:switch(t=t&&t.$$typeof,t){case yp:case wp:case bp:case Sp:case vp:return t;default:return e}}case B1:return e}}}function gk(t){return vn(t)===_p}ge.AsyncMode=W1;ge.ConcurrentMode=_p;ge.ContextConsumer=yp;ge.ContextProvider=vp;ge.Element=z1;ge.ForwardRef=wp;ge.Fragment=pp;ge.Lazy=bp;ge.Memo=Sp;ge.Portal=B1;ge.Profiler=gp;ge.StrictMode=mp;ge.Suspense=Ep;ge.isAsyncMode=function(t){return gk(t)||vn(t)===W1};ge.isConcurrentMode=gk;ge.isContextConsumer=function(t){return vn(t)===yp};ge.isContextProvider=function(t){return vn(t)===vp};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===z1};ge.isForwardRef=function(t){return vn(t)===wp};ge.isFragment=function(t){return vn(t)===pp};ge.isLazy=function(t){return vn(t)===bp};ge.isMemo=function(t){return vn(t)===Sp};ge.isPortal=function(t){return vn(t)===B1};ge.isProfiler=function(t){return vn(t)===gp};ge.isStrictMode=function(t){return vn(t)===mp};ge.isSuspense=function(t){return vn(t)===Ep};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===pp||t===_p||t===gp||t===mp||t===Ep||t===$3||typeof t=="object"&&t!==null&&(t.$$typeof===bp||t.$$typeof===Sp||t.$$typeof===vp||t.$$typeof===yp||t.$$typeof===wp||t.$$typeof===j3||t.$$typeof===M3||t.$$typeof===L3||t.$$typeof===D3)};ge.typeOf=vn;mk.exports=ge;var V3=mk.exports,H1=V3,F3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},U3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},z3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},q1={};q1[H1.ForwardRef]=z3;q1[H1.Memo]=vk;function BS(t){return H1.isMemo(t)?vk:q1[t.$$typeof]||F3}var B3=Object.defineProperty,W3=Object.getOwnPropertyNames,WS=Object.getOwnPropertySymbols,H3=Object.getOwnPropertyDescriptor,q3=Object.getPrototypeOf,HS=Object.prototype;function yk(t,e,n){if(typeof e!="string"){if(HS){var r=q3(e);r&&r!==HS&&yk(t,r,n)}var i=W3(e);WS&&(i=i.concat(WS(e)));for(var o=BS(t),s=BS(e),a=0;a<i.length;++a){var l=i[a];if(!U3[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=H3(e,l);try{B3(t,l,u)}catch{}}}}return t}var G3=yk;const K3=Wo(G3);var Q3=!0;function Y3(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var _k=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||Q3===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},X3=function(e,n,r){_k(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+i:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function J3(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Z3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},eV=/[A-Z]|^ms/g,tV=/_EMO_([^_]+?)_([^]*?)_EMO_/g,wk=function(e){return e.charCodeAt(1)===45},qS=function(e){return e!=null&&typeof e!="boolean"},dg=IA(function(t){return wk(t)?t:t.replace(eV,"-$&").toLowerCase()}),GS=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(tV,function(r,i,o){return sr={name:i,styles:o,next:sr},i})}return Z3[e]!==1&&!wk(e)&&typeof n=="number"&&n!==0?n+"px":n};function Su(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return sr={name:n.name,styles:n.styles,next:sr},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)sr={name:r.name,styles:r.styles,next:sr},r=r.next;var i=n.styles+";";return i}return nV(t,e,n)}case"function":{if(t!==void 0){var o=sr,s=n(t);return sr=o,Su(t,e,s)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function nV(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Su(t,e,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=o+"{"+e[s]+"}":qS(s)&&(r+=dg(o)+":"+GS(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var a=0;a<s.length;a++)qS(s[a])&&(r+=dg(o)+":"+GS(o,s[a])+";");else{var l=Su(t,e,s);switch(o){case"animation":case"animationName":{r+=dg(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var KS=/label:\s*([^\s;\n{]+)\s*(;|$)/g,sr,rV=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";sr=void 0;var s=e[0];s==null||s.raw===void 0?(i=!1,o+=Su(r,n,s)):o+=s[0];for(var a=1;a<e.length;a++)o+=Su(r,n,e[a]),i&&(o+=s[a]);KS.lastIndex=0;for(var l="",u;(u=KS.exec(o))!==null;)l+="-"+u[1];var c=J3(o)+l;return{name:c,styles:o,next:sr}},iV=function(e){return e()},oV=hd.useInsertionEffect?hd.useInsertionEffect:!1,sV=oV||iV,Ek=b.createContext(typeof HTMLElement<"u"?N3({key:"css"}):null);Ek.Provider;var aV=function(e){return b.forwardRef(function(n,r){var i=b.useContext(Ek);return e(n,i,r)})},Sk=b.createContext({}),lV=$M,uV=function(e){return e!=="theme"},QS=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?lV:uV},YS=function(e,n,r){var i;if(n){var o=n.shouldForwardProp;i=e.__emotion_forwardProp&&o?function(s){return e.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},cV=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return _k(n,r,i),sV(function(){return X3(n,r,i)}),null},fV=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,o,s;n!==void 0&&(o=n.label,s=n.target);var a=YS(e,n,r),l=a||QS(i),u=!l("as");return function(){var c=arguments,f=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)f.push.apply(f,c);else{f.push(c[0][0]);for(var d=c.length,p=1;p<d;p++)f.push(c[p],c[0][p])}var v=aV(function(g,w,y){var m=u&&g.as||i,_="",E=[],S=g;if(g.theme==null){S={};for(var T in g)S[T]=g[T];S.theme=b.useContext(Sk)}typeof g.className=="string"?_=Y3(w.registered,E,g.className):g.className!=null&&(_=g.className+" ");var x=rV(f.concat(E),w.registered,S);_+=w.key+"-"+x.name,s!==void 0&&(_+=" "+s);var O=u&&a===void 0?QS(m):l,D={};for(var R in g)u&&R==="as"||O(R)&&(D[R]=g[R]);return D.className=_,D.ref=y,b.createElement(b.Fragment,null,b.createElement(cV,{cache:w,serialized:x,isStringTag:typeof m=="string"}),b.createElement(m,D))});return v.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=e.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=f,v.__emotion_forwardProp=a,Object.defineProperty(v,"toString",{value:function(){return"."+s}}),v.withComponent=function(g,w){return t(g,B({},n,w,{shouldForwardProp:YS(v,w,!0)})).apply(void 0,f)},v}},dV=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],dy=fV.bind();dV.forEach(function(t){dy[t]=dy(t)});function hV(t,e){return dy(t,e)}const pV=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},mV=["values","unit","step"],gV=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>B({},n,{[r.key]:r.val}),{})};function vV(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=Yn(t,mV),o=gV(e),s=Object.keys(o);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-r/100}${n})`}function u(d,p){const v=s.indexOf(p);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(v!==-1&&typeof e[s[v]]=="number"?e[s[v]]:p)-r/100}${n})`}function c(d){return s.indexOf(d)+1<s.length?u(d,s[s.indexOf(d)+1]):a(d)}function f(d){const p=s.indexOf(d);return p===0?a(s[1]):p===s.length-1?l(s[p]):u(d,s[s.indexOf(d)+1]).replace("@media","@media not all and")}return B({keys:s,values:o,up:a,down:l,between:u,only:c,not:f,unit:n},i)}const yV={borderRadius:4},_V=yV;function Vl(t,e){return e?qn(t,e,{clone:!1}):t}const G1={xs:0,sm:600,md:900,lg:1200,xl:1536},XS={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${G1[t]}px)`};function Ur(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const o=r.breakpoints||XS;return e.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(e[l]),s),{})}if(typeof e=="object"){const o=r.breakpoints||XS;return Object.keys(e).reduce((s,a)=>{if(Object.keys(o.values||G1).indexOf(a)!==-1){const l=o.up(a);s[l]=n(e[a],a)}else{const l=a;s[l]=e[l]}return s},{})}return n(e)}function wV(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const o=t.up(i);return r[o]={},r},{}))||{}}function EV(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function xp(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function Bd(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=xp(t,n)||r,e&&(i=e(i,r,t)),i}function He(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,o=s=>{if(s[e]==null)return null;const a=s[e],l=s.theme,u=xp(l,r)||{};return Ur(s,a,f=>{let d=Bd(u,i,f);return f===d&&typeof f=="string"&&(d=Bd(u,i,`${e}${f==="default"?"":pr(f)}`,f)),n===!1?d:{[n]:d}})};return o.propTypes={},o.filterProps=[e],o}function SV(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const bV={m:"margin",p:"padding"},xV={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},JS={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},TV=SV(t=>{if(t.length>2)if(JS[t])t=JS[t];else return[t];const[e,n]=t.split(""),r=bV[e],i=xV[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),K1=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Q1=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...K1,...Q1];function oc(t,e,n,r){var i;const o=(i=xp(t,e,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function bk(t){return oc(t,"spacing",8)}function sc(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function IV(t,e){return n=>t.reduce((r,i)=>(r[i]=sc(e,n),r),{})}function CV(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=TV(n),o=IV(i,r),s=t[n];return Ur(t,s,o)}function xk(t,e){const n=bk(t.theme);return Object.keys(t).map(r=>CV(t,e,r,n)).reduce(Vl,{})}function Ve(t){return xk(t,K1)}Ve.propTypes={};Ve.filterProps=K1;function Fe(t){return xk(t,Q1)}Fe.propTypes={};Fe.filterProps=Q1;function PV(t=8){if(t.mui)return t;const e=bk({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=e(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Tp(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>e[o]?Vl(i,e[o](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function bn(t){return typeof t!="number"?t:`${t}px solid`}function Nn(t,e){return He({prop:t,themeKey:"borders",transform:e})}const AV=Nn("border",bn),kV=Nn("borderTop",bn),RV=Nn("borderRight",bn),OV=Nn("borderBottom",bn),NV=Nn("borderLeft",bn),$V=Nn("borderColor"),DV=Nn("borderTopColor"),jV=Nn("borderRightColor"),MV=Nn("borderBottomColor"),LV=Nn("borderLeftColor"),VV=Nn("outline",bn),FV=Nn("outlineColor"),Ip=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=oc(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:sc(e,r)});return Ur(t,t.borderRadius,n)}return null};Ip.propTypes={};Ip.filterProps=["borderRadius"];Tp(AV,kV,RV,OV,NV,$V,DV,jV,MV,LV,Ip,VV,FV);const Cp=t=>{if(t.gap!==void 0&&t.gap!==null){const e=oc(t.theme,"spacing",8),n=r=>({gap:sc(e,r)});return Ur(t,t.gap,n)}return null};Cp.propTypes={};Cp.filterProps=["gap"];const Pp=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=oc(t.theme,"spacing",8),n=r=>({columnGap:sc(e,r)});return Ur(t,t.columnGap,n)}return null};Pp.propTypes={};Pp.filterProps=["columnGap"];const Ap=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=oc(t.theme,"spacing",8),n=r=>({rowGap:sc(e,r)});return Ur(t,t.rowGap,n)}return null};Ap.propTypes={};Ap.filterProps=["rowGap"];const UV=He({prop:"gridColumn"}),zV=He({prop:"gridRow"}),BV=He({prop:"gridAutoFlow"}),WV=He({prop:"gridAutoColumns"}),HV=He({prop:"gridAutoRows"}),qV=He({prop:"gridTemplateColumns"}),GV=He({prop:"gridTemplateRows"}),KV=He({prop:"gridTemplateAreas"}),QV=He({prop:"gridArea"});Tp(Cp,Pp,Ap,UV,zV,BV,WV,HV,qV,GV,KV,QV);function Ls(t,e){return e==="grey"?e:t}const YV=He({prop:"color",themeKey:"palette",transform:Ls}),XV=He({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ls}),JV=He({prop:"backgroundColor",themeKey:"palette",transform:Ls});Tp(YV,XV,JV);function un(t){return t<=1&&t!==0?`${t*100}%`:t}const ZV=He({prop:"width",transform:un}),Y1=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i;const o=((r=t.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||G1[n];return o?((i=t.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${o}${t.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:un(n)}};return Ur(t,t.maxWidth,e)}return null};Y1.filterProps=["maxWidth"];const e6=He({prop:"minWidth",transform:un}),t6=He({prop:"height",transform:un}),n6=He({prop:"maxHeight",transform:un}),r6=He({prop:"minHeight",transform:un});He({prop:"size",cssProperty:"width",transform:un});He({prop:"size",cssProperty:"height",transform:un});const i6=He({prop:"boxSizing"});Tp(ZV,Y1,e6,t6,n6,r6,i6);const o6={border:{themeKey:"borders",transform:bn},borderTop:{themeKey:"borders",transform:bn},borderRight:{themeKey:"borders",transform:bn},borderBottom:{themeKey:"borders",transform:bn},borderLeft:{themeKey:"borders",transform:bn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:bn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ip},color:{themeKey:"palette",transform:Ls},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ls},backgroundColor:{themeKey:"palette",transform:Ls},p:{style:Fe},pt:{style:Fe},pr:{style:Fe},pb:{style:Fe},pl:{style:Fe},px:{style:Fe},py:{style:Fe},padding:{style:Fe},paddingTop:{style:Fe},paddingRight:{style:Fe},paddingBottom:{style:Fe},paddingLeft:{style:Fe},paddingX:{style:Fe},paddingY:{style:Fe},paddingInline:{style:Fe},paddingInlineStart:{style:Fe},paddingInlineEnd:{style:Fe},paddingBlock:{style:Fe},paddingBlockStart:{style:Fe},paddingBlockEnd:{style:Fe},m:{style:Ve},mt:{style:Ve},mr:{style:Ve},mb:{style:Ve},ml:{style:Ve},mx:{style:Ve},my:{style:Ve},margin:{style:Ve},marginTop:{style:Ve},marginRight:{style:Ve},marginBottom:{style:Ve},marginLeft:{style:Ve},marginX:{style:Ve},marginY:{style:Ve},marginInline:{style:Ve},marginInlineStart:{style:Ve},marginInlineEnd:{style:Ve},marginBlock:{style:Ve},marginBlockStart:{style:Ve},marginBlockEnd:{style:Ve},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Cp},rowGap:{style:Ap},columnGap:{style:Pp},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:un},maxWidth:{style:Y1},minWidth:{transform:un},height:{transform:un},maxHeight:{transform:un},minHeight:{transform:un},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},X1=o6;function s6(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function a6(t,e){return typeof t=="function"?t(e):t}function l6(){function t(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:u,transform:c,style:f}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const d=xp(i,u)||{};return f?f(s):Ur(s,r,v=>{let g=Bd(d,c,v);return v===g&&typeof v=="string"&&(g=Bd(d,c,`${n}${v==="default"?"":pr(v)}`,v)),l===!1?g:{[l]:g}})}function e(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const s=(r=o.unstable_sxConfig)!=null?r:X1;function a(l){let u=l;if(typeof l=="function")u=l(o);else if(typeof l!="object")return l;if(!u)return null;const c=wV(o.breakpoints),f=Object.keys(c);let d=c;return Object.keys(u).forEach(p=>{const v=a6(u[p],o);if(v!=null)if(typeof v=="object")if(s[p])d=Vl(d,t(p,v,o,s));else{const g=Ur({theme:o},v,w=>({[p]:w}));s6(g,v)?d[p]=e({sx:v,theme:o}):d=Vl(d,g)}else d=Vl(d,t(p,v,o,s))}),EV(f,d)}return Array.isArray(i)?i.map(a):a(i)}return e}const kp=l6();kp.filterProps=["sx"];const u6=["breakpoints","palette","spacing","shape"];function J1(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=t,s=Yn(t,u6),a=vV(n),l=PV(i);let u=qn({breakpoints:a,direction:"ltr",components:{},palette:B({mode:"light"},r),spacing:l,shape:B({},_V,o)},s);return u=e.reduce((c,f)=>qn(c,f),u),u.unstable_sxConfig=B({},X1,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(f){return kp({sx:f,theme:this})},u}function c6(t){return Object.keys(t).length===0}function f6(t=null){const e=b.useContext(Sk);return!e||c6(e)?t:e}const d6=J1();function h6(t=d6){return f6(t)}const p6=["variant"];function ZS(t){return t.length===0}function Tk(t){const{variant:e}=t,n=Yn(t,p6);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=ZS(r)?t[i]:pr(t[i]):r+=`${ZS(r)?i:pr(i)}${pr(t[i].toString())}`}),r}const m6=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function g6(t){return Object.keys(t).length===0}function v6(t){return typeof t=="string"&&t.charCodeAt(0)>96}const y6=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,Wd=t=>{let e=0;const n={};return t&&t.forEach(r=>{let i="";typeof r.props=="function"?(i=`callback${e}`,e+=1):i=Tk(r.props),n[i]=r.style}),n},_6=(t,e)=>{let n=[];return e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants),Wd(n)},Hd=(t,e,n)=>{const{ownerState:r={}}=t,i=[];let o=0;return n&&n.forEach(s=>{let a=!0;if(typeof s.props=="function"){const l=B({},t,r);a=s.props(l)}else Object.keys(s.props).forEach(l=>{r[l]!==s.props[l]&&t[l]!==s.props[l]&&(a=!1)});a&&(typeof s.props=="function"?i.push(e[`callback${o}`]):i.push(e[Tk(s.props)])),typeof s.props=="function"&&(o+=1)}),i},w6=(t,e,n,r)=>{var i;const o=n==null||(i=n.components)==null||(i=i[r])==null?void 0:i.variants;return Hd(t,e,o)};function ed(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const E6=J1(),S6=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function td({defaultTheme:t,theme:e,themeId:n}){return g6(e)?t:e[n]||e}function b6(t){return t?(e,n)=>n[t]:null}const eb=({styledArg:t,props:e,defaultTheme:n,themeId:r})=>{const i=t(B({},e,{theme:td(B({},e,{defaultTheme:n,themeId:r}))}));let o;if(i&&i.variants&&(o=i.variants,delete i.variants),o){const s=Hd(e,Wd(o),o);return[i,...s]}return i};function x6(t={}){const{themeId:e,defaultTheme:n=E6,rootShouldForwardProp:r=ed,slotShouldForwardProp:i=ed}=t,o=s=>kp(B({},s,{theme:td(B({},s,{defaultTheme:n,themeId:e}))}));return o.__mui_systemSx=!0,(s,a={})=>{pV(s,E=>E.filter(S=>!(S!=null&&S.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:f,overridesResolver:d=b6(S6(u))}=a,p=Yn(a,m6),v=c!==void 0?c:u&&u!=="Root"&&u!=="root"||!1,g=f||!1;let w,y=ed;u==="Root"||u==="root"?y=r:u?y=i:v6(s)&&(y=void 0);const m=hV(s,B({shouldForwardProp:y,label:w},p)),_=(E,...S)=>{const T=S?S.map(R=>{if(typeof R=="function"&&R.__emotion_real!==R)return te=>eb({styledArg:R,props:te,defaultTheme:n,themeId:e});if(di(R)){let te=R,ve;return R&&R.variants&&(ve=R.variants,delete te.variants,te=lt=>{let gt=R;return Hd(lt,Wd(ve),ve).forEach(Zn=>{gt=qn(gt,Zn)}),gt}),te}return R}):[];let x=E;if(di(E)){let R;E&&E.variants&&(R=E.variants,delete x.variants,x=te=>{let ve=E;return Hd(te,Wd(R),R).forEach(gt=>{ve=qn(ve,gt)}),ve})}else typeof E=="function"&&E.__emotion_real!==E&&(x=R=>eb({styledArg:E,props:R,defaultTheme:n,themeId:e}));l&&d&&T.push(R=>{const te=td(B({},R,{defaultTheme:n,themeId:e})),ve=y6(l,te);if(ve){const lt={};return Object.entries(ve).forEach(([gt,Jn])=>{lt[gt]=typeof Jn=="function"?Jn(B({},R,{theme:te})):Jn}),d(R,lt)}return null}),l&&!v&&T.push(R=>{const te=td(B({},R,{defaultTheme:n,themeId:e}));return w6(R,_6(l,te),te,l)}),g||T.push(o);const O=T.length-S.length;if(Array.isArray(E)&&O>0){const R=new Array(O).fill("");x=[...E,...R],x.raw=[...E.raw,...R]}const D=m(x,...T);return s.muiName&&(D.muiName=s.muiName),D};return m.withConfig&&(_.withConfig=m.withConfig),_}}function T6(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:ik(e.components[n].defaultProps,r)}function I6({props:t,name:e,defaultTheme:n,themeId:r}){let i=h6(n);return r&&(i=i[r]||i),T6({theme:i,name:e,props:t})}function Ik(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function C6(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function la(t){if(t.type)return t;if(t.charAt(0)==="#")return la(C6(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(sa(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(sa(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function Z1(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function P6(t){t=la(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,o=r*Math.min(i,1-i),s=(u,c=(u+n/30)%12)=>i-o*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),Z1({type:a,values:l})}function tb(t){t=la(t);let e=t.type==="hsl"||t.type==="hsla"?la(P6(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function A6(t,e){const n=tb(t),r=tb(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function k6(t,e){if(t=la(t),e=Ik(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Z1(t)}function R6(t,e){if(t=la(t),e=Ik(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Z1(t)}function O6(t,e){return B({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const N6={black:"#000",white:"#fff"},bu=N6,$6={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},D6=$6,j6={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Zo=j6,M6={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},es=M6,L6={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},rl=L6,V6={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ts=V6,F6={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},ns=F6,U6={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},rs=U6,z6=["mode","contrastThreshold","tonalOffset"],nb={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:bu.white,default:bu.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},hg={text:{primary:bu.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:bu.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function rb(t,e,n,r){const i=r.light||r,o=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=R6(t.main,i):e==="dark"&&(t.dark=k6(t.main,o)))}function B6(t="light"){return t==="dark"?{main:ts[200],light:ts[50],dark:ts[400]}:{main:ts[700],light:ts[400],dark:ts[800]}}function W6(t="light"){return t==="dark"?{main:Zo[200],light:Zo[50],dark:Zo[400]}:{main:Zo[500],light:Zo[300],dark:Zo[700]}}function H6(t="light"){return t==="dark"?{main:es[500],light:es[300],dark:es[700]}:{main:es[700],light:es[400],dark:es[800]}}function q6(t="light"){return t==="dark"?{main:ns[400],light:ns[300],dark:ns[700]}:{main:ns[700],light:ns[500],dark:ns[900]}}function G6(t="light"){return t==="dark"?{main:rs[400],light:rs[300],dark:rs[700]}:{main:rs[800],light:rs[500],dark:rs[900]}}function K6(t="light"){return t==="dark"?{main:rl[400],light:rl[300],dark:rl[700]}:{main:"#ed6c02",light:rl[500],dark:rl[900]}}function Q6(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=Yn(t,z6),o=t.primary||B6(e),s=t.secondary||W6(e),a=t.error||H6(e),l=t.info||q6(e),u=t.success||G6(e),c=t.warning||K6(e);function f(g){return A6(g,hg.text.primary)>=n?hg.text.primary:nb.text.primary}const d=({color:g,name:w,mainShade:y=500,lightShade:m=300,darkShade:_=700})=>{if(g=B({},g),!g.main&&g[y]&&(g.main=g[y]),!g.hasOwnProperty("main"))throw new Error(sa(11,w?` (${w})`:"",y));if(typeof g.main!="string")throw new Error(sa(12,w?` (${w})`:"",JSON.stringify(g.main)));return rb(g,"light",m,r),rb(g,"dark",_,r),g.contrastText||(g.contrastText=f(g.main)),g},p={dark:hg,light:nb};return qn(B({common:B({},bu),mode:e,primary:d({color:o,name:"primary"}),secondary:d({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:c,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:u,name:"success"}),grey:D6,contrastThreshold:n,getContrastText:f,augmentColor:d,tonalOffset:r},p[e]),i)}const Y6=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function X6(t){return Math.round(t*1e5)/1e5}const ib={textTransform:"uppercase"},ob='"Roboto", "Helvetica", "Arial", sans-serif';function J6(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=ob,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:f}=n,d=Yn(n,Y6),p=i/14,v=f||(y=>`${y/u*p}rem`),g=(y,m,_,E,S)=>B({fontFamily:r,fontWeight:y,fontSize:v(m),lineHeight:_},r===ob?{letterSpacing:`${X6(E/m)}em`}:{},S,c),w={h1:g(o,96,1.167,-1.5),h2:g(o,60,1.2,-.5),h3:g(s,48,1.167,0),h4:g(s,34,1.235,.25),h5:g(s,24,1.334,0),h6:g(a,20,1.6,.15),subtitle1:g(s,16,1.75,.15),subtitle2:g(a,14,1.57,.1),body1:g(s,16,1.5,.15),body2:g(s,14,1.43,.15),button:g(a,14,1.75,.4,ib),caption:g(s,12,1.66,.4),overline:g(s,12,2.66,1,ib),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return qn(B({htmlFontSize:u,pxToRem:v,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},w),d,{clone:!1})}const Z6=.2,e9=.14,t9=.12;function Re(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${Z6})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${e9})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${t9})`].join(",")}const n9=["none",Re(0,2,1,-1,0,1,1,0,0,1,3,0),Re(0,3,1,-2,0,2,2,0,0,1,5,0),Re(0,3,3,-2,0,3,4,0,0,1,8,0),Re(0,2,4,-1,0,4,5,0,0,1,10,0),Re(0,3,5,-1,0,5,8,0,0,1,14,0),Re(0,3,5,-1,0,6,10,0,0,1,18,0),Re(0,4,5,-2,0,7,10,1,0,2,16,1),Re(0,5,5,-3,0,8,10,1,0,3,14,2),Re(0,5,6,-3,0,9,12,1,0,3,16,2),Re(0,6,6,-3,0,10,14,1,0,4,18,3),Re(0,6,7,-4,0,11,15,1,0,4,20,3),Re(0,7,8,-4,0,12,17,2,0,5,22,4),Re(0,7,8,-4,0,13,19,2,0,5,24,4),Re(0,7,9,-4,0,14,21,2,0,5,26,4),Re(0,8,9,-5,0,15,22,2,0,6,28,5),Re(0,8,10,-5,0,16,24,2,0,6,30,5),Re(0,8,11,-5,0,17,26,2,0,6,32,5),Re(0,9,11,-5,0,18,28,2,0,7,34,6),Re(0,9,12,-6,0,19,29,2,0,7,36,6),Re(0,10,13,-6,0,20,31,3,0,8,38,7),Re(0,10,13,-6,0,21,33,3,0,8,40,7),Re(0,10,14,-6,0,22,35,3,0,8,42,7),Re(0,11,14,-7,0,23,36,3,0,9,44,8),Re(0,11,15,-7,0,24,38,3,0,9,46,8)],r9=["duration","easing","delay"],i9={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},o9={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function sb(t){return`${Math.round(t)}ms`}function s9(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function a9(t){const e=B({},i9,t.easing),n=B({},o9,t.duration);return B({getAutoHeightDuration:s9,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:l=0}=o;return Yn(o,r9),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:sb(s)} ${a} ${typeof l=="string"?l:sb(l)}`).join(",")}},t,{easing:e,duration:n})}const l9={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},u9=l9,c9=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function f9(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=t,s=Yn(t,c9);if(t.vars)throw new Error(sa(18));const a=Q6(r),l=J1(t);let u=qn(l,{mixins:O6(l.breakpoints,n),palette:a,shadows:n9.slice(),typography:J6(a,o),transitions:a9(i),zIndex:B({},u9)});return u=qn(u,s),u=e.reduce((c,f)=>qn(c,f),u),u.unstable_sxConfig=B({},X1,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(f){return kp({sx:f,theme:this})},u}const d9=f9(),Ck=d9,Pk="$$material";function h9({props:t,name:e}){return I6({props:t,name:e,defaultTheme:Ck,themeId:Pk})}const p9=t=>ed(t)&&t!=="classes",m9=x6({themeId:Pk,defaultTheme:Ck,rootShouldForwardProp:p9});function g9(t){return sk("MuiSvgIcon",t)}r3("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const v9=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],y9=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${pr(e)}`,`fontSize${pr(n)}`]};return e3(i,g9,r)},_9=m9("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${pr(n.color)}`],e[`fontSize${pr(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,o,s,a,l,u,c,f,d,p,v;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((o=t.typography)==null||(s=o.pxToRem)==null?void 0:s.call(o,20))||"1.25rem",medium:((a=t.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((u=t.typography)==null||(c=u.pxToRem)==null?void 0:c.call(u,35))||"2.1875rem"}[e.fontSize],color:(f=(d=(t.vars||t).palette)==null||(d=d[e.color])==null?void 0:d.main)!=null?f:{action:(p=(t.vars||t).palette)==null||(p=p.action)==null?void 0:p.active,disabled:(v=(t.vars||t).palette)==null||(v=v.action)==null?void 0:v.disabled,inherit:void 0}[e.color]}}),hy=b.forwardRef(function(e,n){const r=h9({props:e,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:c=!1,titleAccess:f,viewBox:d="0 0 24 24"}=r,p=Yn(r,v9),v=b.isValidElement(i)&&i.type==="svg",g=B({},r,{color:s,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:c,viewBox:d,hasSvgAsChild:v}),w={};c||(w.viewBox=d);const y=y9(g);return h.jsxs(_9,B({as:a,className:i3(y.root,o),focusable:"false",color:u,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n},w,p,v&&i.props,{ownerState:g,children:[v?i.props.children:i,f?h.jsx("title",{children:f}):null]}))});hy.muiName="SvgIcon";function w9(t,e){function n(r,i){return h.jsx(hy,B({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=hy.muiName,b.memo(b.forwardRef(n))}const E9={configure:t=>{ok.configure(t)}},S9=Object.freeze(Object.defineProperty({__proto__:null,capitalize:pr,createChainedFunction:$L,createSvgIcon:w9,debounce:DL,deprecatedPropType:jL,isMuiElement:ML,ownerDocument:tk,ownerWindow:LL,requirePropFactory:VL,setRef:nk,unstable_ClassNameGenerator:E9,unstable_useEnhancedEffect:rk,unstable_useId:zL,unsupportedProp:BL,useControlled:WL,useEventCallback:HL,useForkRef:qL,useIsFocusVisible:ZL},Symbol.toStringTag,{value:"Module"})),b9=SD(S9);var ab;function Rp(){return ab||(ab=1,function(t){"use client";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=b9}(cg)),cg}var x9=up;Object.defineProperty(L1,"__esModule",{value:!0});var Ak=L1.default=void 0,T9=x9(Rp()),I9=h,C9=(0,T9.default)((0,I9.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"}),"ShoppingBagOutlined");Ak=L1.default=C9;var P9=Math.ceil,A9=Math.max;function k9(t,e,n,r){for(var i=-1,o=A9(P9((e-t)/(n||1)),0),s=Array(o);o--;)s[r?o:++i]=t,t+=n;return s}var R9=k9;function O9(t,e){return t===e||t!==t&&e!==e}var e_=O9,N9=typeof Ne=="object"&&Ne&&Ne.Object===Object&&Ne,kk=N9,$9=kk,D9=typeof self=="object"&&self&&self.Object===Object&&self,j9=$9||D9||Function("return this")(),br=j9,M9=br,L9=M9.Symbol,Op=L9,lb=Op,Rk=Object.prototype,V9=Rk.hasOwnProperty,F9=Rk.toString,il=lb?lb.toStringTag:void 0;function U9(t){var e=V9.call(t,il),n=t[il];try{t[il]=void 0;var r=!0}catch{}var i=F9.call(t);return r&&(e?t[il]=n:delete t[il]),i}var z9=U9,B9=Object.prototype,W9=B9.toString;function H9(t){return W9.call(t)}var q9=H9,ub=Op,G9=z9,K9=q9,Q9="[object Null]",Y9="[object Undefined]",cb=ub?ub.toStringTag:void 0;function X9(t){return t==null?t===void 0?Y9:Q9:cb&&cb in Object(t)?G9(t):K9(t)}var ac=X9;function J9(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Np=J9,Z9=ac,eF=Np,tF="[object AsyncFunction]",nF="[object Function]",rF="[object GeneratorFunction]",iF="[object Proxy]";function oF(t){if(!eF(t))return!1;var e=Z9(t);return e==nF||e==rF||e==tF||e==iF}var Ok=oF,sF=9007199254740991;function aF(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=sF}var Nk=aF,lF=Ok,uF=Nk;function cF(t){return t!=null&&uF(t.length)&&!lF(t)}var $k=cF,fF=9007199254740991,dF=/^(?:0|[1-9]\d*)$/;function hF(t,e){var n=typeof t;return e=e??fF,!!e&&(n=="number"||n!="symbol"&&dF.test(t))&&t>-1&&t%1==0&&t<e}var Dk=hF,pF=e_,mF=$k,gF=Dk,vF=Np;function yF(t,e,n){if(!vF(n))return!1;var r=typeof e;return(r=="number"?mF(n)&&gF(e,n.length):r=="string"&&e in n)?pF(n[e],t):!1}var _F=yF,wF=/\s/;function EF(t){for(var e=t.length;e--&&wF.test(t.charAt(e)););return e}var SF=EF,bF=SF,xF=/^\s+/;function TF(t){return t&&t.slice(0,bF(t)+1).replace(xF,"")}var IF=TF;function CF(t){return t!=null&&typeof t=="object"}var lc=CF,PF=ac,AF=lc,kF="[object Symbol]";function RF(t){return typeof t=="symbol"||AF(t)&&PF(t)==kF}var jk=RF,OF=IF,fb=Np,NF=jk,db=NaN,$F=/^[-+]0x[0-9a-f]+$/i,DF=/^0b[01]+$/i,jF=/^0o[0-7]+$/i,MF=parseInt;function LF(t){if(typeof t=="number")return t;if(NF(t))return db;if(fb(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=fb(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=OF(t);var n=DF.test(t);return n||jF.test(t)?MF(t.slice(2),n?2:8):$F.test(t)?db:+t}var Mk=LF,VF=Mk,hb=1/0,FF=17976931348623157e292;function UF(t){if(!t)return t===0?t:0;if(t=VF(t),t===hb||t===-hb){var e=t<0?-1:1;return e*FF}return t===t?t:0}var Lk=UF,zF=R9,BF=_F,pg=Lk;function WF(t){return function(e,n,r){return r&&typeof r!="number"&&BF(e,n,r)&&(n=r=void 0),e=pg(e),n===void 0?(n=e,e=0):n=pg(n),r=r===void 0?e<n?1:-1:pg(r),zF(e,n,r,t)}}var HF=WF,qF=HF,GF=qF(),KF=GF;const QF=Wo(KF);var Vk={};Object.defineProperty(Vk,"__esModule",{value:!0});Vk.default=YF;function YF(t){return t.displayName||t.name||(typeof t=="string"&&t.length>0?t:"Unknown")}function rf(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qd(){return qd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qd.apply(this,arguments)}function XF(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function ni(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function JF(t){var e=function(n){XF(r,n);function r(){for(var o,s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return o=n.call.apply(n,[this].concat(a))||this,rf(ni(ni(o)),"cachedTheme",void 0),rf(ni(ni(o)),"lastOuterTheme",void 0),rf(ni(ni(o)),"lastTheme",void 0),rf(ni(ni(o)),"renderProvider",function(u){var c=o.props.children;return H.createElement(t.Provider,{value:o.getTheme(u)},c)}),o}var i=r.prototype;return i.getTheme=function(s){if(this.props.theme!==this.lastTheme||s!==this.lastOuterTheme||!this.cachedTheme)if(this.lastOuterTheme=s,this.lastTheme=this.props.theme,typeof this.lastTheme=="function"){var a=this.props.theme;this.cachedTheme=a(s)}else{var l=this.props.theme;this.cachedTheme=s?qd({},s,l):l}return this.cachedTheme},i.render=function(){var s=this.props.children;return s?H.createElement(t.Consumer,null,this.renderProvider):null},r}(H.Component);return e}function ZF(t){return function(n){var r=H.forwardRef(function(i,o){return H.createElement(t.Consumer,null,function(s){return H.createElement(n,qd({theme:s,ref:o},i))})});return K3(r,n),r}}function eU(t){var e=function(){var r=H.useContext(t);return r};return e}function tU(t){return{context:t,withTheme:ZF(t),useTheme:eU(t),ThemeProvider:JF(t)}}var Fk=b.createContext();tU(Fk);var pb=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ca=(typeof window>"u"?"undefined":pb(window))==="object"&&(typeof document>"u"?"undefined":pb(document))==="object"&&document.nodeType===9;function xu(t){"@babel/helpers - typeof";return xu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xu(t)}function nU(t,e){if(xu(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(xu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function rU(t){var e=nU(t,"string");return xu(e)=="symbol"?e:String(e)}function mb(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,rU(r.key),r)}}function t_(t,e,n){return e&&mb(t.prototype,e),n&&mb(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function py(t,e){return py=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},py(t,e)}function Uk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,py(t,e)}function gb(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var iU={}.constructor;function my(t){if(t==null||typeof t!="object")return t;if(Array.isArray(t))return t.map(my);if(t.constructor!==iU)return t;var e={};for(var n in t)e[n]=my(t[n]);return e}function $p(t,e,n){t===void 0&&(t="unnamed");var r=n.jss,i=my(e),o=r.plugins.onCreateRule(t,i,n);return o||(t[0],null)}var vb=function(e,n){for(var r="",i=0;i<e.length&&e[i]!=="!important";i++)r&&(r+=n),r+=e[i];return r},To=function(e){if(!Array.isArray(e))return e;var n="";if(Array.isArray(e[0]))for(var r=0;r<e.length&&e[r]!=="!important";r++)n&&(n+=", "),n+=vb(e[r]," ");else n=vb(e,", ");return e[e.length-1]==="!important"&&(n+=" !important"),n};function Pa(t){return t&&t.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function ol(t,e){for(var n="",r=0;r<e;r++)n+="  ";return n+t}function Tu(t,e,n){n===void 0&&(n={});var r="";if(!e)return r;var i=n,o=i.indent,s=o===void 0?0:o,a=e.fallbacks;n.format===!1&&(s=-1/0);var l=Pa(n),u=l.linebreak,c=l.space;if(t&&s++,a)if(Array.isArray(a))for(var f=0;f<a.length;f++){var d=a[f];for(var p in d){var v=d[p];v!=null&&(r&&(r+=u),r+=ol(p+":"+c+To(v)+";",s))}}else for(var g in a){var w=a[g];w!=null&&(r&&(r+=u),r+=ol(g+":"+c+To(w)+";",s))}for(var y in e){var m=e[y];m!=null&&y!=="fallbacks"&&(r&&(r+=u),r+=ol(y+":"+c+To(m)+";",s))}return!r&&!n.allowEmpty||!t?r:(s--,r&&(r=""+u+r+u),ol(""+t+c+"{"+r,s)+ol("}",s))}var oU=/([[\].#*$><+~=|^:(),"'`\s])/g,yb=typeof CSS<"u"&&CSS.escape,n_=function(t){return yb?yb(t):t.replace(oU,"\\$1")},zk=function(){function t(n,r,i){this.type="style",this.isProcessed=!1;var o=i.sheet,s=i.Renderer;this.key=n,this.options=i,this.style=r,o?this.renderer=o.renderer:s&&(this.renderer=new s)}var e=t.prototype;return e.prop=function(r,i,o){if(i===void 0)return this.style[r];var s=o?o.force:!1;if(!s&&this.style[r]===i)return this;var a=i;(!o||o.process!==!1)&&(a=this.options.jss.plugins.onChangeValue(i,r,this));var l=a==null||a===!1,u=r in this.style;if(l&&!u&&!s)return this;var c=l&&u;if(c?delete this.style[r]:this.style[r]=a,this.renderable&&this.renderer)return c?this.renderer.removeProperty(this.renderable,r):this.renderer.setProperty(this.renderable,r,a),this;var f=this.options.sheet;return f&&f.attached,this},t}(),gy=function(t){Uk(e,t);function e(r,i,o){var s;s=t.call(this,r,i,o)||this;var a=o.selector,l=o.scoped,u=o.sheet,c=o.generateId;return a?s.selectorText=a:l!==!1&&(s.id=c(gb(gb(s)),u),s.selectorText="."+n_(s.id)),s}var n=e.prototype;return n.applyTo=function(i){var o=this.renderer;if(o){var s=this.toJSON();for(var a in s)o.setProperty(i,a,s[a])}return this},n.toJSON=function(){var i={};for(var o in this.style){var s=this.style[o];typeof s!="object"?i[o]=s:Array.isArray(s)&&(i[o]=To(s))}return i},n.toString=function(i){var o=this.options.sheet,s=o?o.options.link:!1,a=s?B({},i,{allowEmpty:!0}):i;return Tu(this.selectorText,this.style,a)},t_(e,[{key:"selector",set:function(i){if(i!==this.selectorText){this.selectorText=i;var o=this.renderer,s=this.renderable;if(!(!s||!o)){var a=o.setSelector(s,i);a||o.replaceRule(s,this)}}},get:function(){return this.selectorText}}]),e}(zk),sU={onCreateRule:function(e,n,r){return e[0]==="@"||r.parent&&r.parent.type==="keyframes"?null:new gy(e,n,r)}},mg={indent:1,children:!0},aU=/@([\w-]+)/,lU=function(){function t(n,r,i){this.type="conditional",this.isProcessed=!1,this.key=n;var o=n.match(aU);this.at=o?o[1]:"unknown",this.query=i.name||"@"+this.at,this.options=i,this.rules=new Dp(B({},i,{parent:this}));for(var s in r)this.rules.add(s,r[s]);this.rules.process()}var e=t.prototype;return e.getRule=function(r){return this.rules.get(r)},e.indexOf=function(r){return this.rules.indexOf(r)},e.addRule=function(r,i,o){var s=this.rules.add(r,i,o);return s?(this.options.jss.plugins.onProcessRule(s),s):null},e.replaceRule=function(r,i,o){var s=this.rules.replace(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},e.toString=function(r){r===void 0&&(r=mg);var i=Pa(r),o=i.linebreak;if(r.indent==null&&(r.indent=mg.indent),r.children==null&&(r.children=mg.children),r.children===!1)return this.query+" {}";var s=this.rules.toString(r);return s?this.query+" {"+o+s+o+"}":""},t}(),uU=/@container|@media|@supports\s+/,cU={onCreateRule:function(e,n,r){return uU.test(e)?new lU(e,n,r):null}},gg={indent:1,children:!0},fU=/@keyframes\s+([\w-]+)/,vy=function(){function t(n,r,i){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var o=n.match(fU);o&&o[1]?this.name=o[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=i;var s=i.scoped,a=i.sheet,l=i.generateId;this.id=s===!1?this.name:n_(l(this,a)),this.rules=new Dp(B({},i,{parent:this}));for(var u in r)this.rules.add(u,r[u],B({},i,{parent:this}));this.rules.process()}var e=t.prototype;return e.toString=function(r){r===void 0&&(r=gg);var i=Pa(r),o=i.linebreak;if(r.indent==null&&(r.indent=gg.indent),r.children==null&&(r.children=gg.children),r.children===!1)return this.at+" "+this.id+" {}";var s=this.rules.toString(r);return s&&(s=""+o+s+o),this.at+" "+this.id+" {"+s+"}"},t}(),dU=/@keyframes\s+/,hU=/\$([\w-]+)/g,yy=function(e,n){return typeof e=="string"?e.replace(hU,function(r,i){return i in n?n[i]:r}):e},_b=function(e,n,r){var i=e[n],o=yy(i,r);o!==i&&(e[n]=o)},pU={onCreateRule:function(e,n,r){return typeof e=="string"&&dU.test(e)?new vy(e,n,r):null},onProcessStyle:function(e,n,r){return n.type!=="style"||!r||("animation-name"in e&&_b(e,"animation-name",r.keyframes),"animation"in e&&_b(e,"animation",r.keyframes)),e},onChangeValue:function(e,n,r){var i=r.options.sheet;if(!i)return e;switch(n){case"animation":return yy(e,i.keyframes);case"animation-name":return yy(e,i.keyframes);default:return e}}},mU=function(t){Uk(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.toString=function(i){var o=this.options.sheet,s=o?o.options.link:!1,a=s?B({},i,{allowEmpty:!0}):i;return Tu(this.key,this.style,a)},e}(zk),gU={onCreateRule:function(e,n,r){return r.parent&&r.parent.type==="keyframes"?new mU(e,n,r):null}},vU=function(){function t(n,r,i){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var e=t.prototype;return e.toString=function(r){var i=Pa(r),o=i.linebreak;if(Array.isArray(this.style)){for(var s="",a=0;a<this.style.length;a++)s+=Tu(this.at,this.style[a]),this.style[a+1]&&(s+=o);return s}return Tu(this.at,this.style,r)},t}(),yU=/@font-face/,_U={onCreateRule:function(e,n,r){return yU.test(e)?new vU(e,n,r):null}},wU=function(){function t(n,r,i){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var e=t.prototype;return e.toString=function(r){return Tu(this.key,this.style,r)},t}(),EU={onCreateRule:function(e,n,r){return e==="@viewport"||e==="@-ms-viewport"?new wU(e,n,r):null}},SU=function(){function t(n,r,i){this.type="simple",this.isProcessed=!1,this.key=n,this.value=r,this.options=i}var e=t.prototype;return e.toString=function(r){if(Array.isArray(this.value)){for(var i="",o=0;o<this.value.length;o++)i+=this.key+" "+this.value[o]+";",this.value[o+1]&&(i+=`
`);return i}return this.key+" "+this.value+";"},t}(),bU={"@charset":!0,"@import":!0,"@namespace":!0},xU={onCreateRule:function(e,n,r){return e in bU?new SU(e,n,r):null}},wb=[sU,cU,pU,gU,_U,EU,xU],TU={process:!0},Eb={force:!0,process:!0},Dp=function(){function t(n){this.map={},this.raw={},this.index=[],this.counter=0,this.options=n,this.classes=n.classes,this.keyframes=n.keyframes}var e=t.prototype;return e.add=function(r,i,o){var s=this.options,a=s.parent,l=s.sheet,u=s.jss,c=s.Renderer,f=s.generateId,d=s.scoped,p=B({classes:this.classes,parent:a,sheet:l,jss:u,Renderer:c,generateId:f,scoped:d,name:r,keyframes:this.keyframes,selector:void 0},o),v=r;r in this.raw&&(v=r+"-d"+this.counter++),this.raw[v]=i,v in this.classes&&(p.selector="."+n_(this.classes[v]));var g=$p(v,i,p);if(!g)return null;this.register(g);var w=p.index===void 0?this.index.length:p.index;return this.index.splice(w,0,g),g},e.replace=function(r,i,o){var s=this.get(r),a=this.index.indexOf(s);s&&this.remove(s);var l=o;return a!==-1&&(l=B({},o,{index:a})),this.add(r,i,l)},e.get=function(r){return this.map[r]},e.remove=function(r){this.unregister(r),delete this.raw[r.key],this.index.splice(this.index.indexOf(r),1)},e.indexOf=function(r){return this.index.indexOf(r)},e.process=function(){var r=this.options.jss.plugins;this.index.slice(0).forEach(r.onProcessRule,r)},e.register=function(r){this.map[r.key]=r,r instanceof gy?(this.map[r.selector]=r,r.id&&(this.classes[r.key]=r.id)):r instanceof vy&&this.keyframes&&(this.keyframes[r.name]=r.id)},e.unregister=function(r){delete this.map[r.key],r instanceof gy?(delete this.map[r.selector],delete this.classes[r.key]):r instanceof vy&&delete this.keyframes[r.name]},e.update=function(){var r,i,o;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(r=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1],o=arguments.length<=2?void 0:arguments[2]):(i=arguments.length<=0?void 0:arguments[0],o=arguments.length<=1?void 0:arguments[1],r=null),r)this.updateOne(this.get(r),i,o);else for(var s=0;s<this.index.length;s++)this.updateOne(this.index[s],i,o)},e.updateOne=function(r,i,o){o===void 0&&(o=TU);var s=this.options,a=s.jss.plugins,l=s.sheet;if(r.rules instanceof t){r.rules.update(i,o);return}var u=r.style;if(a.onUpdate(i,r,l,o),o.process&&u&&u!==r.style){a.onProcessStyle(r.style,r,l);for(var c in r.style){var f=r.style[c],d=u[c];f!==d&&r.prop(c,f,Eb)}for(var p in u){var v=r.style[p],g=u[p];v==null&&v!==g&&r.prop(p,null,Eb)}}},e.toString=function(r){for(var i="",o=this.options.sheet,s=o?o.options.link:!1,a=Pa(r),l=a.linebreak,u=0;u<this.index.length;u++){var c=this.index[u],f=c.toString(r);!f&&!s||(i&&(i+=l),i+=f)}return i},t}(),Bk=function(){function t(n,r){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=B({},r,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),r.Renderer&&(this.renderer=new r.Renderer(this)),this.rules=new Dp(this.options);for(var i in n)this.rules.add(i,n[i]);this.rules.process()}var e=t.prototype;return e.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},e.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},e.addRule=function(r,i,o){var s=this.queue;this.attached&&!s&&(this.queue=[]);var a=this.rules.add(r,i,o);return a?(this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&(s?s.push(a):(this.insertRule(a),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),a):(this.deployed=!1,a)):null},e.replaceRule=function(r,i,o){var s=this.rules.get(r);if(!s)return this.addRule(r,i,o);var a=this.rules.replace(r,i,o);return a&&this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&this.renderer&&(a?s.renderable&&this.renderer.replaceRule(s.renderable,a):this.renderer.deleteRule(s)),a):(this.deployed=!1,a)},e.insertRule=function(r){this.renderer&&this.renderer.insertRule(r)},e.addRules=function(r,i){var o=[];for(var s in r){var a=this.addRule(s,r[s],i);a&&o.push(a)}return o},e.getRule=function(r){return this.rules.get(r)},e.deleteRule=function(r){var i=typeof r=="object"?r:this.rules.get(r);return!i||this.attached&&!i.renderable?!1:(this.rules.remove(i),this.attached&&i.renderable&&this.renderer?this.renderer.deleteRule(i.renderable):!0)},e.indexOf=function(r){return this.rules.indexOf(r)},e.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},e.update=function(){var r;return(r=this.rules).update.apply(r,arguments),this},e.updateOne=function(r,i,o){return this.rules.updateOne(r,i,o),this},e.toString=function(r){return this.rules.toString(r)},t}(),IU=function(){function t(){this.plugins={internal:[],external:[]},this.registry={}}var e=t.prototype;return e.onCreateRule=function(r,i,o){for(var s=0;s<this.registry.onCreateRule.length;s++){var a=this.registry.onCreateRule[s](r,i,o);if(a)return a}return null},e.onProcessRule=function(r){if(!r.isProcessed){for(var i=r.options.sheet,o=0;o<this.registry.onProcessRule.length;o++)this.registry.onProcessRule[o](r,i);r.style&&this.onProcessStyle(r.style,r,i),r.isProcessed=!0}},e.onProcessStyle=function(r,i,o){for(var s=0;s<this.registry.onProcessStyle.length;s++)i.style=this.registry.onProcessStyle[s](i.style,i,o)},e.onProcessSheet=function(r){for(var i=0;i<this.registry.onProcessSheet.length;i++)this.registry.onProcessSheet[i](r)},e.onUpdate=function(r,i,o,s){for(var a=0;a<this.registry.onUpdate.length;a++)this.registry.onUpdate[a](r,i,o,s)},e.onChangeValue=function(r,i,o){for(var s=r,a=0;a<this.registry.onChangeValue.length;a++)s=this.registry.onChangeValue[a](s,i,o);return s},e.use=function(r,i){i===void 0&&(i={queue:"external"});var o=this.plugins[i.queue];o.indexOf(r)===-1&&(o.push(r),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(s,a){for(var l in a)l in s&&s[l].push(a[l]);return s},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},t}(),CU=function(){function t(){this.registry=[]}var e=t.prototype;return e.add=function(r){var i=this.registry,o=r.options.index;if(i.indexOf(r)===-1){if(i.length===0||o>=this.index){i.push(r);return}for(var s=0;s<i.length;s++)if(i[s].options.index>o){i.splice(s,0,r);return}}},e.reset=function(){this.registry=[]},e.remove=function(r){var i=this.registry.indexOf(r);this.registry.splice(i,1)},e.toString=function(r){for(var i=r===void 0?{}:r,o=i.attached,s=Yn(i,["attached"]),a=Pa(s),l=a.linebreak,u="",c=0;c<this.registry.length;c++){var f=this.registry[c];o!=null&&f.attached!==o||(u&&(u+=l),u+=f.toString(s))}return u},t_(t,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),t}(),Fl=new CU,_y=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),wy="2f1acc6c3a606b082e5eef5e54414ffb";_y[wy]==null&&(_y[wy]=0);var Sb=_y[wy]++,bb=function(e){e===void 0&&(e={});var n=0,r=function(o,s){n+=1;var a="",l="";return s&&(s.options.classNamePrefix&&(l=s.options.classNamePrefix),s.options.jss.id!=null&&(a=String(s.options.jss.id))),e.minify?""+(l||"c")+Sb+a+n:l+o.key+"-"+Sb+(a?"-"+a:"")+"-"+n};return r},Wk=function(e){var n;return function(){return n||(n=e()),n}},PU=function(e,n){try{return e.attributeStyleMap?e.attributeStyleMap.get(n):e.style.getPropertyValue(n)}catch{return""}},AU=function(e,n,r){try{var i=r;if(Array.isArray(r)&&(i=To(r)),e.attributeStyleMap)e.attributeStyleMap.set(n,i);else{var o=i?i.indexOf("!important"):-1,s=o>-1?i.substr(0,o-1):i;e.style.setProperty(n,s,o>-1?"important":"")}}catch{return!1}return!0},kU=function(e,n){try{e.attributeStyleMap?e.attributeStyleMap.delete(n):e.style.removeProperty(n)}catch{}},RU=function(e,n){return e.selectorText=n,e.selectorText===n},Hk=Wk(function(){return document.querySelector("head")});function OU(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(r.attached&&r.options.index>e.index&&r.options.insertionPoint===e.insertionPoint)return r}return null}function NU(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.attached&&r.options.insertionPoint===e.insertionPoint)return r}return null}function $U(t){for(var e=Hk(),n=0;n<e.childNodes.length;n++){var r=e.childNodes[n];if(r.nodeType===8&&r.nodeValue.trim()===t)return r}return null}function DU(t){var e=Fl.registry;if(e.length>0){var n=OU(e,t);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if(n=NU(e,t),n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}var r=t.insertionPoint;if(r&&typeof r=="string"){var i=$U(r);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}function jU(t,e){var n=e.insertionPoint,r=DU(e);if(r!==!1&&r.parent){r.parent.insertBefore(t,r.node);return}if(n&&typeof n.nodeType=="number"){var i=n,o=i.parentNode;o&&o.insertBefore(t,i.nextSibling);return}Hk().appendChild(t)}var MU=Wk(function(){var t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}),xb=function(e,n,r){try{"insertRule"in e?e.insertRule(n,r):"appendRule"in e&&e.appendRule(n)}catch{return!1}return e.cssRules[r]},Tb=function(e,n){var r=e.cssRules.length;return n===void 0||n>r?r:n},LU=function(){var e=document.createElement("style");return e.textContent=`
`,e},VU=function(){function t(n){this.getPropertyValue=PU,this.setProperty=AU,this.removeProperty=kU,this.setSelector=RU,this.hasInsertedRules=!1,this.cssRules=[],n&&Fl.add(n),this.sheet=n;var r=this.sheet?this.sheet.options:{},i=r.media,o=r.meta,s=r.element;this.element=s||LU(),this.element.setAttribute("data-jss",""),i&&this.element.setAttribute("media",i),o&&this.element.setAttribute("data-meta",o);var a=MU();a&&this.element.setAttribute("nonce",a)}var e=t.prototype;return e.attach=function(){if(!(this.element.parentNode||!this.sheet)){jU(this.element,this.sheet.options);var r=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&r&&(this.hasInsertedRules=!1,this.deploy())}},e.detach=function(){if(this.sheet){var r=this.element.parentNode;r&&r.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},e.deploy=function(){var r=this.sheet;if(r){if(r.options.link){this.insertRules(r.rules);return}this.element.textContent=`
`+r.toString()+`
`}},e.insertRules=function(r,i){for(var o=0;o<r.index.length;o++)this.insertRule(r.index[o],o,i)},e.insertRule=function(r,i,o){if(o===void 0&&(o=this.element.sheet),r.rules){var s=r,a=o;if(r.type==="conditional"||r.type==="keyframes"){var l=Tb(o,i);if(a=xb(o,s.toString({children:!1}),l),a===!1)return!1;this.refCssRule(r,l,a)}return this.insertRules(s.rules,a),a}var u=r.toString();if(!u)return!1;var c=Tb(o,i),f=xb(o,u,c);return f===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(r,c,f),f)},e.refCssRule=function(r,i,o){r.renderable=o,r.options.parent instanceof Bk&&this.cssRules.splice(i,0,o)},e.deleteRule=function(r){var i=this.element.sheet,o=this.indexOf(r);return o===-1?!1:(i.deleteRule(o),this.cssRules.splice(o,1),!0)},e.indexOf=function(r){return this.cssRules.indexOf(r)},e.replaceRule=function(r,i){var o=this.indexOf(r);return o===-1?!1:(this.element.sheet.deleteRule(o),this.cssRules.splice(o,1),this.insertRule(i,o))},e.getRules=function(){return this.element.sheet.cssRules},t}(),FU=0,UU=function(){function t(n){this.id=FU++,this.version="10.10.0",this.plugins=new IU,this.options={id:{minify:!1},createGenerateId:bb,Renderer:Ca?VU:null,plugins:[]},this.generateId=bb({minify:!1});for(var r=0;r<wb.length;r++)this.plugins.use(wb[r],{queue:"internal"});this.setup(n)}var e=t.prototype;return e.setup=function(r){return r===void 0&&(r={}),r.createGenerateId&&(this.options.createGenerateId=r.createGenerateId),r.id&&(this.options.id=B({},this.options.id,r.id)),(r.createGenerateId||r.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),r.insertionPoint!=null&&(this.options.insertionPoint=r.insertionPoint),"Renderer"in r&&(this.options.Renderer=r.Renderer),r.plugins&&this.use.apply(this,r.plugins),this},e.createStyleSheet=function(r,i){i===void 0&&(i={});var o=i,s=o.index;typeof s!="number"&&(s=Fl.index===0?0:Fl.index+1);var a=new Bk(r,B({},i,{jss:this,generateId:i.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:s}));return this.plugins.onProcessSheet(a),a},e.removeStyleSheet=function(r){return r.detach(),Fl.remove(r),this},e.createRule=function(r,i,o){if(i===void 0&&(i={}),o===void 0&&(o={}),typeof r=="object")return this.createRule(void 0,r,i);var s=B({},o,{name:r,jss:this,Renderer:this.options.Renderer});s.generateId||(s.generateId=this.generateId),s.classes||(s.classes={}),s.keyframes||(s.keyframes={});var a=$p(r,i,s);return a&&this.plugins.onProcessRule(a),a},e.use=function(){for(var r=this,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return o.forEach(function(a){r.plugins.use(a)}),this},t}(),qk=function(e){return new UU(e)},Ib=function(){function t(){this.length=0,this.sheets=new WeakMap}var e=t.prototype;return e.get=function(r){var i=this.sheets.get(r);return i&&i.sheet},e.add=function(r,i){this.sheets.has(r)||(this.length++,this.sheets.set(r,{sheet:i,refs:0}))},e.manage=function(r){var i=this.sheets.get(r);if(i)return i.refs===0&&i.sheet.attach(),i.refs++,i.sheet},e.unmanage=function(r){var i=this.sheets.get(r);i&&i.refs>0&&(i.refs--,i.refs===0&&i.sheet.detach())},t_(t,[{key:"size",get:function(){return this.length}}]),t}(),r_=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function Gk(t){var e=null;for(var n in t){var r=t[n],i=typeof r;if(i==="function")e||(e={}),e[n]=r;else if(i==="object"&&r!==null&&!Array.isArray(r)){var o=Gk(r);o&&(e||(e={}),e[n]=o)}}return e}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */qk();var Kk=Date.now(),vg="fnValues"+Kk,yg="fnStyle"+ ++Kk,zU=function(){return{onCreateRule:function(n,r,i){if(typeof r!="function")return null;var o=$p(n,{},i);return o[yg]=r,o},onProcessStyle:function(n,r){if(vg in r||yg in r)return n;var i={};for(var o in n){var s=n[o];typeof s=="function"&&(delete n[o],i[o]=s)}return r[vg]=i,n},onUpdate:function(n,r,i,o){var s=r,a=s[yg];a&&(s.style=a(n)||{});var l=s[vg];if(l)for(var u in l)s.prop(u,l[u](n),o)}}};function BU(t){var e,n=t.Symbol;return typeof n=="function"?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}var us;typeof self<"u"?us=self:typeof window<"u"?us=window:typeof global<"u"?us=global:typeof k0<"u"?us=k0:us=Function("return this")();var Cb=BU(us),Pb=function(e){return e&&e[Cb]&&e===e[Cb]()},WU=function(e){return{onCreateRule:function(r,i,o){if(!Pb(i))return null;var s=i,a=$p(r,{},o);return s.subscribe(function(l){for(var u in l)a.prop(u,l[u],e)}),a},onProcessRule:function(r){if(!(r&&r.type!=="style")){var i=r,o=i.style,s=function(c){var f=o[c];if(!Pb(f))return"continue";delete o[c],f.subscribe({next:function(p){i.prop(c,p,e)}})};for(var a in o)var l=s(a)}}}};const HU=WU;var qU=/;\n/,GU=function(e){for(var n={},r=e.split(qU),i=0;i<r.length;i++){var o=(r[i]||"").trim();if(o){var s=o.indexOf(":");if(s!==-1){var a=o.substr(0,s).trim(),l=o.substr(s+1).trim();n[a]=l}}}return n},KU=function(e){typeof e.style=="string"&&(e.style=GU(e.style))};function QU(){return{onProcessRule:KU}}var ki="@global",Ey="@global ",YU=function(){function t(n,r,i){this.type="global",this.at=ki,this.isProcessed=!1,this.key=n,this.options=i,this.rules=new Dp(B({},i,{parent:this}));for(var o in r)this.rules.add(o,r[o]);this.rules.process()}var e=t.prototype;return e.getRule=function(r){return this.rules.get(r)},e.addRule=function(r,i,o){var s=this.rules.add(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},e.replaceRule=function(r,i,o){var s=this.rules.replace(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),s},e.indexOf=function(r){return this.rules.indexOf(r)},e.toString=function(r){return this.rules.toString(r)},t}(),XU=function(){function t(n,r,i){this.type="global",this.at=ki,this.isProcessed=!1,this.key=n,this.options=i;var o=n.substr(Ey.length);this.rule=i.jss.createRule(o,r,B({},i,{parent:this}))}var e=t.prototype;return e.toString=function(r){return this.rule?this.rule.toString(r):""},t}(),JU=/\s*,\s*/g;function Qk(t,e){for(var n=t.split(JU),r="",i=0;i<n.length;i++)r+=e+" "+n[i].trim(),n[i+1]&&(r+=", ");return r}function ZU(t,e){var n=t.options,r=t.style,i=r?r[ki]:null;if(i){for(var o in i)e.addRule(o,i[o],B({},n,{selector:Qk(o,t.selector)}));delete r[ki]}}function ez(t,e){var n=t.options,r=t.style;for(var i in r)if(!(i[0]!=="@"||i.substr(0,ki.length)!==ki)){var o=Qk(i.substr(ki.length),t.selector);e.addRule(o,r[i],B({},n,{selector:o})),delete r[i]}}function tz(){function t(n,r,i){if(!n)return null;if(n===ki)return new YU(n,r,i);if(n[0]==="@"&&n.substr(0,Ey.length)===Ey)return new XU(n,r,i);var o=i.parent;return o&&(o.type==="global"||o.options.parent&&o.options.parent.type==="global")&&(i.scoped=!1),!i.selector&&i.scoped===!1&&(i.selector=n),null}function e(n,r){n.type!=="style"||!r||(ZU(n,r),ez(n,r))}return{onCreateRule:t,onProcessRule:e}}var nd=function(e){return e&&typeof e=="object"&&!Array.isArray(e)},_g="extendCurrValue"+Date.now();function nz(t,e,n,r){var i=typeof t.extend;if(i==="string"){if(!n)return;var o=n.getRule(t.extend);if(!o||o===e)return;var s=o.options.parent;if(s){var a=s.rules.raw[t.extend];ho(a,e,n,r)}return}if(Array.isArray(t.extend)){for(var l=0;l<t.extend.length;l++){var u=t.extend[l],c=typeof u=="string"?B({},t,{extend:u}):t.extend[l];ho(c,e,n,r)}return}for(var f in t.extend){if(f==="extend"){ho(t.extend.extend,e,n,r);continue}if(nd(t.extend[f])){f in r||(r[f]={}),ho(t.extend[f],e,n,r[f]);continue}r[f]=t.extend[f]}}function rz(t,e,n,r){for(var i in t)if(i!=="extend"){if(nd(r[i])&&nd(t[i])){ho(t[i],e,n,r[i]);continue}if(nd(t[i])){r[i]=ho(t[i],e,n);continue}r[i]=t[i]}}function ho(t,e,n,r){return r===void 0&&(r={}),nz(t,e,n,r),rz(t,e,n,r),r}function iz(){function t(n,r,i){return"extend"in n?ho(n,r,i):n}function e(n,r,i){if(r!=="extend")return n;if(n==null||n===!1){for(var o in i[_g])i.prop(o,null);return i[_g]=null,null}if(typeof n=="object"){for(var s in n)i.prop(s,n[s]);i[_g]=n}return null}return{onProcessStyle:t,onChangeValue:e}}var Ab=/\s*,\s*/g,oz=/&/g,sz=/\$([\w-]+)/g;function az(){function t(i,o){return function(s,a){var l=i.getRule(a)||o&&o.getRule(a);return l?l.selector:a}}function e(i,o){for(var s=o.split(Ab),a=i.split(Ab),l="",u=0;u<s.length;u++)for(var c=s[u],f=0;f<a.length;f++){var d=a[f];l&&(l+=", "),l+=d.indexOf("&")!==-1?d.replace(oz,c):c+" "+d}return l}function n(i,o,s){if(s)return B({},s,{index:s.index+1});var a=i.options.nestingLevel;a=a===void 0?1:a+1;var l=B({},i.options,{nestingLevel:a,index:o.indexOf(i)+1});return delete l.name,l}function r(i,o,s){if(o.type!=="style")return i;var a=o,l=a.options.parent,u,c;for(var f in i){var d=f.indexOf("&")!==-1,p=f[0]==="@";if(!(!d&&!p)){if(u=n(a,l,u),d){var v=e(f,a.selector);c||(c=t(l,s)),v=v.replace(sz,c);var g=a.key+"-"+f;"replaceRule"in l?l.replaceRule(g,i[f],B({},u,{selector:v})):l.addRule(g,i[f],B({},u,{selector:v}))}else p&&l.addRule(f,{},u).addRule(a.key,i[f],{selector:a.selector});delete i[f]}}return i}return{onProcessStyle:r}}function Sy(t,e){if(!e)return!0;if(Array.isArray(e)){for(var n=0;n<e.length;n++){var r=Sy(t,e[n]);if(!r)return!1}return!0}if(e.indexOf(" ")>-1)return Sy(t,e.split(" "));var i=t.options.parent;if(e[0]==="$"){var o=i.getRule(e.substr(1));return!o||o===t?!1:(i.classes[t.key]+=" "+i.classes[o.key],!0)}return i.classes[t.key]+=" "+e,!0}function lz(){function t(e,n){return"composes"in e&&(Sy(n,e.composes),delete e.composes),e}return{onProcessStyle:t}}var uz=/[A-Z]/g,cz=/^ms-/,wg={};function fz(t){return"-"+t.toLowerCase()}function Yk(t){if(wg.hasOwnProperty(t))return wg[t];var e=t.replace(uz,fz);return wg[t]=cz.test(e)?"-"+e:e}function Gd(t){var e={};for(var n in t){var r=n.indexOf("--")===0?n:Yk(n);e[r]=t[n]}return t.fallbacks&&(Array.isArray(t.fallbacks)?e.fallbacks=t.fallbacks.map(Gd):e.fallbacks=Gd(t.fallbacks)),e}function dz(){function t(n){if(Array.isArray(n)){for(var r=0;r<n.length;r++)n[r]=Gd(n[r]);return n}return Gd(n)}function e(n,r,i){if(r.indexOf("--")===0)return n;var o=Yk(r);return r===o?n:(i.prop(o,n),null)}return{onProcessStyle:t,onChangeValue:e}}var I=r_&&CSS?CSS.px:"px",of=r_&&CSS?CSS.ms:"ms",is=r_&&CSS?CSS.percent:"%",hz={"animation-delay":of,"animation-duration":of,"background-position":I,"background-position-x":I,"background-position-y":I,"background-size":I,border:I,"border-bottom":I,"border-bottom-left-radius":I,"border-bottom-right-radius":I,"border-bottom-width":I,"border-left":I,"border-left-width":I,"border-radius":I,"border-right":I,"border-right-width":I,"border-top":I,"border-top-left-radius":I,"border-top-right-radius":I,"border-top-width":I,"border-width":I,"border-block":I,"border-block-end":I,"border-block-end-width":I,"border-block-start":I,"border-block-start-width":I,"border-block-width":I,"border-inline":I,"border-inline-end":I,"border-inline-end-width":I,"border-inline-start":I,"border-inline-start-width":I,"border-inline-width":I,"border-start-start-radius":I,"border-start-end-radius":I,"border-end-start-radius":I,"border-end-end-radius":I,margin:I,"margin-bottom":I,"margin-left":I,"margin-right":I,"margin-top":I,"margin-block":I,"margin-block-end":I,"margin-block-start":I,"margin-inline":I,"margin-inline-end":I,"margin-inline-start":I,padding:I,"padding-bottom":I,"padding-left":I,"padding-right":I,"padding-top":I,"padding-block":I,"padding-block-end":I,"padding-block-start":I,"padding-inline":I,"padding-inline-end":I,"padding-inline-start":I,"mask-position-x":I,"mask-position-y":I,"mask-size":I,height:I,width:I,"min-height":I,"max-height":I,"min-width":I,"max-width":I,bottom:I,left:I,top:I,right:I,inset:I,"inset-block":I,"inset-block-end":I,"inset-block-start":I,"inset-inline":I,"inset-inline-end":I,"inset-inline-start":I,"box-shadow":I,"text-shadow":I,"column-gap":I,"column-rule":I,"column-rule-width":I,"column-width":I,"font-size":I,"font-size-delta":I,"letter-spacing":I,"text-decoration-thickness":I,"text-indent":I,"text-stroke":I,"text-stroke-width":I,"word-spacing":I,motion:I,"motion-offset":I,outline:I,"outline-offset":I,"outline-width":I,perspective:I,"perspective-origin-x":is,"perspective-origin-y":is,"transform-origin":is,"transform-origin-x":is,"transform-origin-y":is,"transform-origin-z":is,"transition-delay":of,"transition-duration":of,"vertical-align":I,"flex-basis":I,"shape-margin":I,size:I,gap:I,grid:I,"grid-gap":I,"row-gap":I,"grid-row-gap":I,"grid-column-gap":I,"grid-template-rows":I,"grid-template-columns":I,"grid-auto-rows":I,"grid-auto-columns":I,"box-shadow-x":I,"box-shadow-y":I,"box-shadow-blur":I,"box-shadow-spread":I,"font-line-height":I,"text-shadow-x":I,"text-shadow-y":I,"text-shadow-blur":I};function Xk(t){var e=/(-[a-z])/g,n=function(s){return s[1].toUpperCase()},r={};for(var i in t)r[i]=t[i],r[i.replace(e,n)]=t[i];return r}var pz=Xk(hz);function Ul(t,e,n){if(e==null)return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]=Ul(t,e[r],n);else if(typeof e=="object")if(t==="fallbacks")for(var i in e)e[i]=Ul(i,e[i],n);else for(var o in e)e[o]=Ul(t+"-"+o,e[o],n);else if(typeof e=="number"&&isNaN(e)===!1){var s=n[t]||pz[t];return s&&!(e===0&&s===I)?typeof s=="function"?s(e).toString():""+e+s:e.toString()}return e}function mz(t){t===void 0&&(t={});var e=Xk(t);function n(i,o){if(o.type!=="style")return i;for(var s in i)i[s]=Ul(s,i[s],e);return i}function r(i,o){return Ul(o,i,e)}return{onProcessStyle:n,onChangeValue:r}}var gz={"background-size":!0,"background-position":!0,border:!0,"border-bottom":!0,"border-left":!0,"border-top":!0,"border-right":!0,"border-radius":!0,"border-image":!0,"border-width":!0,"border-style":!0,"border-color":!0,"box-shadow":!0,flex:!0,margin:!0,padding:!0,outline:!0,"transform-origin":!0,transform:!0,transition:!0},vz={position:!0,size:!0},sf={padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},background:{attachment:null,color:null,image:null,position:null,repeat:null},border:{width:null,style:null,color:null},"border-top":{width:null,style:null,color:null},"border-right":{width:null,style:null,color:null},"border-bottom":{width:null,style:null,color:null},"border-left":{width:null,style:null,color:null},outline:{width:null,style:null,color:null},"list-style":{type:null,position:null,image:null},transition:{property:null,duration:null,"timing-function":null,timingFunction:null,delay:null},animation:{name:null,duration:null,"timing-function":null,timingFunction:null,delay:null,"iteration-count":null,iterationCount:null,direction:null,"fill-mode":null,fillMode:null,"play-state":null,playState:null},"box-shadow":{x:0,y:0,blur:0,spread:0,color:null,inset:null},"text-shadow":{x:0,y:0,blur:null,color:null}},Eg={border:{radius:"border-radius",image:"border-image",width:"border-width",style:"border-style",color:"border-color"},"border-bottom":{width:"border-bottom-width",style:"border-bottom-style",color:"border-bottom-color"},"border-top":{width:"border-top-width",style:"border-top-style",color:"border-top-color"},"border-left":{width:"border-left-width",style:"border-left-style",color:"border-left-color"},"border-right":{width:"border-right-width",style:"border-right-style",color:"border-right-color"},background:{size:"background-size",image:"background-image"},font:{style:"font-style",variant:"font-variant",weight:"font-weight",stretch:"font-stretch",size:"font-size",family:"font-family",lineHeight:"line-height","line-height":"line-height"},flex:{grow:"flex-grow",basis:"flex-basis",direction:"flex-direction",wrap:"flex-wrap",flow:"flex-flow",shrink:"flex-shrink"},align:{self:"align-self",items:"align-items",content:"align-content"},grid:{"template-columns":"grid-template-columns",templateColumns:"grid-template-columns","template-rows":"grid-template-rows",templateRows:"grid-template-rows","template-areas":"grid-template-areas",templateAreas:"grid-template-areas",template:"grid-template","auto-columns":"grid-auto-columns",autoColumns:"grid-auto-columns","auto-rows":"grid-auto-rows",autoRows:"grid-auto-rows","auto-flow":"grid-auto-flow",autoFlow:"grid-auto-flow",row:"grid-row",column:"grid-column","row-start":"grid-row-start",rowStart:"grid-row-start","row-end":"grid-row-end",rowEnd:"grid-row-end","column-start":"grid-column-start",columnStart:"grid-column-start","column-end":"grid-column-end",columnEnd:"grid-column-end",area:"grid-area",gap:"grid-gap","row-gap":"grid-row-gap",rowGap:"grid-row-gap","column-gap":"grid-column-gap",columnGap:"grid-column-gap"}};function yz(t,e,n){return t.map(function(r){return Zk(r,e,n,!1,!0)})}function Jk(t,e,n,r){return n[e]==null?t:t.length===0?[]:Array.isArray(t[0])?Jk(t[0],e,n,r):typeof t[0]=="object"?yz(t,e,r):[t]}function Zk(t,e,n,r,i){if(!(sf[e]||Eg[e]))return[];var o=[];if(Eg[e]&&(t=_z(t,n,Eg[e],r)),Object.keys(t).length)for(var s in sf[e]){if(t[s]){Array.isArray(t[s])?o.push(vz[s]===null?t[s]:t[s].join(" ")):o.push(t[s]);continue}sf[e][s]!=null&&o.push(sf[e][s])}return!o.length||i?o:[o]}function _z(t,e,n,r){for(var i in n){var o=n[i];if(typeof t[i]<"u"&&(r||!e.prop(o))){var s,a=Iu((s={},s[o]=t[i],s),e)[o];r?e.style.fallbacks[o]=a:e.style[o]=a}delete t[i]}return t}function Iu(t,e,n){for(var r in t){var i=t[r];if(Array.isArray(i)){if(!Array.isArray(i[0])){if(r==="fallbacks"){for(var o=0;o<t.fallbacks.length;o++)t.fallbacks[o]=Iu(t.fallbacks[o],e,!0);continue}t[r]=Jk(i,r,gz,e),t[r].length||delete t[r]}}else if(typeof i=="object"){if(r==="fallbacks"){t.fallbacks=Iu(t.fallbacks,e,!0);continue}t[r]=Zk(i,r,e,n),t[r].length||delete t[r]}else t[r]===""&&delete t[r]}return t}function wz(){function t(e,n){if(!e||n.type!=="style")return e;if(Array.isArray(e)){for(var r=0;r<e.length;r++)e[r]=Iu(e[r],n);return e}return Iu(e,n)}return{onProcessStyle:t}}function by(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ez(t){if(Array.isArray(t))return by(t)}function Sz(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bz(t,e){if(t){if(typeof t=="string")return by(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return by(t,e)}}function xz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tz(t){return Ez(t)||Sz(t)||bz(t)||xz()}var yl="",xy="",eR="",tR="",Iz=Ca&&"ontouchstart"in document.documentElement;if(Ca){var Sg={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},Cz=document.createElement("p"),bg=Cz.style,Pz="Transform";for(var xg in Sg)if(xg+Pz in bg){yl=xg,xy=Sg[xg];break}yl==="Webkit"&&"msHyphens"in bg&&(yl="ms",xy=Sg.ms,tR="edge"),yl==="Webkit"&&"-apple-trailing-word"in bg&&(eR="apple")}var X={js:yl,css:xy,vendor:eR,browser:tR,isTouch:Iz};function Az(t){return t[1]==="-"||X.js==="ms"?t:"@"+X.css+"keyframes"+t.substr(10)}var kz={noPrefill:["appearance"],supportedProperty:function(e){return e!=="appearance"?!1:X.js==="ms"?"-webkit-"+e:X.css+e}},Rz={noPrefill:["color-adjust"],supportedProperty:function(e){return e!=="color-adjust"?!1:X.js==="Webkit"?X.css+"print-"+e:e}},Oz=/[-\s]+(.)?/g;function Nz(t,e){return e?e.toUpperCase():""}function i_(t){return t.replace(Oz,Nz)}function Mi(t){return i_("-"+t)}var $z={noPrefill:["mask"],supportedProperty:function(e,n){if(!/^mask/.test(e))return!1;if(X.js==="Webkit"){var r="mask-image";if(i_(r)in n)return e;if(X.js+Mi(r)in n)return X.css+e}return e}},Dz={noPrefill:["text-orientation"],supportedProperty:function(e){return e!=="text-orientation"?!1:X.vendor==="apple"&&!X.isTouch?X.css+e:e}},jz={noPrefill:["transform"],supportedProperty:function(e,n,r){return e!=="transform"?!1:r.transform?e:X.css+e}},Mz={noPrefill:["transition"],supportedProperty:function(e,n,r){return e!=="transition"?!1:r.transition?e:X.css+e}},Lz={noPrefill:["writing-mode"],supportedProperty:function(e){return e!=="writing-mode"?!1:X.js==="Webkit"||X.js==="ms"&&X.browser!=="edge"?X.css+e:e}},Vz={noPrefill:["user-select"],supportedProperty:function(e){return e!=="user-select"?!1:X.js==="Moz"||X.js==="ms"||X.vendor==="apple"?X.css+e:e}},Fz={supportedProperty:function(e,n){if(!/^break-/.test(e))return!1;if(X.js==="Webkit"){var r="WebkitColumn"+Mi(e);return r in n?X.css+"column-"+e:!1}if(X.js==="Moz"){var i="page"+Mi(e);return i in n?"page-"+e:!1}return!1}},Uz={supportedProperty:function(e,n){if(!/^(border|margin|padding)-inline/.test(e))return!1;if(X.js==="Moz")return e;var r=e.replace("-inline","");return X.js+Mi(r)in n?X.css+r:!1}},zz={supportedProperty:function(e,n){return i_(e)in n?e:!1}},Bz={supportedProperty:function(e,n){var r=Mi(e);return e[0]==="-"||e[0]==="-"&&e[1]==="-"?e:X.js+r in n?X.css+e:X.js!=="Webkit"&&"Webkit"+r in n?"-webkit-"+e:!1}},Wz={supportedProperty:function(e){return e.substring(0,11)!=="scroll-snap"?!1:X.js==="ms"?""+X.css+e:e}},Hz={supportedProperty:function(e){return e!=="overscroll-behavior"?!1:X.js==="ms"?X.css+"scroll-chaining":e}},qz={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},Gz={supportedProperty:function(e,n){var r=qz[e];return r&&X.js+Mi(r)in n?X.css+r:!1}},nR={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},Kz=Object.keys(nR),Qz=function(e){return X.css+e},Yz={supportedProperty:function(e,n,r){var i=r.multiple;if(Kz.indexOf(e)>-1){var o=nR[e];if(!Array.isArray(o))return X.js+Mi(o)in n?X.css+o:!1;if(!i)return!1;for(var s=0;s<o.length;s++)if(!(X.js+Mi(o[0])in n))return!1;return o.map(Qz)}return!1}},rR=[kz,Rz,$z,Dz,jz,Mz,Lz,Vz,Fz,Uz,zz,Bz,Wz,Hz,Gz,Yz],kb=rR.filter(function(t){return t.supportedProperty}).map(function(t){return t.supportedProperty}),Xz=rR.filter(function(t){return t.noPrefill}).reduce(function(t,e){return t.push.apply(t,Tz(e.noPrefill)),t},[]),_l,oo={};if(Ca){_l=document.createElement("p");var Tg=window.getComputedStyle(document.documentElement,"");for(var Ig in Tg)isNaN(Ig)||(oo[Tg[Ig]]=Tg[Ig]);Xz.forEach(function(t){return delete oo[t]})}function Ty(t,e){if(e===void 0&&(e={}),!_l)return t;if(oo[t]!=null)return oo[t];(t==="transition"||t==="transform")&&(e[t]=t in _l.style);for(var n=0;n<kb.length&&(oo[t]=kb[n](t,_l.style,e),!oo[t]);n++);try{_l.style[t]=""}catch{return!1}return oo[t]}var os={},Jz={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},Zz=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,ai;function e8(t,e,n){if(e==="var")return"var";if(e==="all")return"all";if(n==="all")return", all";var r=e?Ty(e):", "+Ty(n);return r||e||n}Ca&&(ai=document.createElement("p"));function Rb(t,e){var n=e;if(!ai||t==="content")return e;if(typeof n!="string"||!isNaN(parseInt(n,10)))return n;var r=t+n;if(os[r]!=null)return os[r];try{ai.style[t]=n}catch{return os[r]=!1,!1}if(Jz[t])n=n.replace(Zz,e8);else if(ai.style[t]===""&&(n=X.css+n,n==="-ms-flex"&&(ai.style[t]="-ms-flexbox"),ai.style[t]=n,ai.style[t]===""))return os[r]=!1,!1;return ai.style[t]="",os[r]=n,os[r]}function t8(){function t(i){if(i.type==="keyframes"){var o=i;o.at=Az(o.at)}}function e(i){for(var o in i){var s=i[o];if(o==="fallbacks"&&Array.isArray(s)){i[o]=s.map(e);continue}var a=!1,l=Ty(o);l&&l!==o&&(a=!0);var u=!1,c=Rb(l,To(s));c&&c!==s&&(u=!0),(a||u)&&(a&&delete i[o],i[l||o]=c||s)}return i}function n(i,o){return o.type!=="style"?i:e(i)}function r(i,o){return Rb(o,To(i))||i}return{onProcessRule:t,onProcessStyle:n,onChangeValue:r}}function n8(){var t=function(n,r){return n.length===r.length?n>r?1:-1:n.length-r.length};return{onProcessStyle:function(n,r){if(r.type!=="style")return n;for(var i={},o=Object.keys(n).sort(t),s=0;s<o.length;s++)i[o[s]]=n[o[s]];return i}}}var r8=function(e){return e===void 0&&(e={}),{plugins:[zU(),HU(e.observable),QU(),tz(),iz(),az(),lz(),dz(),mz(e.defaultUnit),wz(),t8(),n8()]}},i8=Number.MIN_SAFE_INTEGER||-1e9,o8=function(){return i8++},s8=b.createContext({classNamePrefix:"",disableStylesGeneration:!1,isSSR:!Ca}),Ob=new Map,o_=function(e,n){var r=e.managers;if(r)return r[n]||(r[n]=new Ib),r[n];var i=Ob.get(n);return i||(i=new Ib,Ob.set(n,i)),i},Nb=function(e){var n=e.sheet,r=e.context,i=e.index,o=e.theme;if(n){var s=o_(r,i);s.manage(o),r.registry&&r.registry.add(n)}},a8=function(e){if(e.sheet){var n=o_(e.context,e.index);n.unmanage(e.theme)}},l8=qk(r8()),iR=new WeakMap,oR=function(e){return iR.get(e)},u8=function(e,n){iR.set(e,n)},c8=function(e){var n=e.styles;return typeof n!="function"?n:n(e.theme)};function f8(t,e){var n;t.context.id&&t.context.id.minify!=null&&(n=t.context.id.minify);var r=t.context.classNamePrefix||"";t.name&&!n&&(r+=t.name.replace(/\s/g,"-")+"-");var i="";return t.name&&(i=t.name+", "),i+=typeof t.styles=="function"?"Themed":"Unthemed",B({},t.sheetOptions,{index:t.index,meta:i,classNamePrefix:r,link:e,generateId:t.sheetOptions&&t.sheetOptions.generateId?t.sheetOptions.generateId:t.context.generateId})}var d8=function(e){if(!e.context.disableStylesGeneration){var n=o_(e.context,e.index),r=n.get(e.theme);if(r)return r;var i=e.context.jss||l8,o=c8(e),s=Gk(o),a=i.createStyleSheet(o,f8(e,s!==null));return u8(a,{dynamicStyles:s,styles:o}),n.add(e.theme,a),a}},h8=function(e,n){for(var r in n)e.deleteRule(n[r])},p8=function(e,n,r){for(var i in r)n.updateOne(r[i],e)},m8=function(e,n){var r=oR(e);if(r){var i={};for(var o in r.dynamicStyles)for(var s=e.rules.index.length,a=e.addRule(o,r.dynamicStyles[o]),l=s;l<e.rules.index.length;l++){var u=e.rules.index[l];e.updateOne(u,n),i[a===u?o:u.key]=u}return i}},g8=function(e,n){if(!n)return e.classes;var r=oR(e);if(!r)return e.classes;var i={};for(var o in r.styles)i[o]=e.classes[o],o in n&&(i[o]+=" "+e.classes[n[o].key]);return i};function $b(t){return t?b.useEffect:H.useInsertionEffect||b.useLayoutEffect}var Cg={},v8=function(e,n){n===void 0&&(n={});var r=n,i=r.index,o=i===void 0?o8():i,s=r.theming,a=r.name,l=Yn(r,["index","theming","name"]),u=s&&s.context||Fk,c=function(p){return typeof e=="function"&&(p||b.useContext(u))||Cg},f={};return function(p){var v=b.useRef(!0),g=b.useContext(s8),w=c(p&&p.theme),y=b.useMemo(function(){var S=d8({context:g,styles:e,name:a,theme:w,index:o,sheetOptions:l});return S&&g.isSSR&&Nb({index:o,context:g,sheet:S,theme:w}),[S,S?m8(S,p):null]},[g,w]),m=y[0],_=y[1];$b(g.isSSR)(function(){m&&_&&!v.current&&p8(p,m,_)},[p]),$b(g.isSSR)(function(){return m&&Nb({index:o,context:g,sheet:m,theme:w}),function(){m&&(a8({index:o,context:g,sheet:m,theme:w}),_&&h8(m,_))}},[m]);var E=b.useMemo(function(){return m&&_?g8(m,_):f},[m,_]);return b.useDebugValue(E),b.useDebugValue(w===Cg?"No theme":w),b.useEffect(function(){v.current=!1}),E}},y8=Lk;function _8(t){var e=y8(t),n=e%1;return e===e?n?e-n:e:0}var w8=_8;function E8(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var S8=E8,b8=Array.isArray,jp=b8,Db=Op,x8=S8,T8=jp,I8=jk,C8=1/0,jb=Db?Db.prototype:void 0,Mb=jb?jb.toString:void 0;function sR(t){if(typeof t=="string")return t;if(T8(t))return x8(t,sR)+"";if(I8(t))return Mb?Mb.call(t):"";var e=t+"";return e=="0"&&1/t==-C8?"-0":e}var P8=sR,A8=P8;function k8(t){return t==null?"":A8(t)}var R8=k8,O8=br,N8=w8,$8=Mk,Lb=R8,D8=O8.isFinite,j8=Math.min;function M8(t){var e=Math[t];return function(n,r){if(n=$8(n),r=r==null?0:j8(N8(r),292),r&&D8(n)){var i=(Lb(n)+"e").split("e"),o=e(i[0]+"e"+(+i[1]+r));return i=(Lb(o)+"e").split("e"),+(i[0]+"e"+(+i[1]-r))}return e(n)}}var L8=M8,V8=L8,F8=V8("round"),U8=F8;const sl=Wo(U8);function z8(){this.__data__=[],this.size=0}var B8=z8,W8=e_;function H8(t,e){for(var n=t.length;n--;)if(W8(t[n][0],e))return n;return-1}var Mp=H8,q8=Mp,G8=Array.prototype,K8=G8.splice;function Q8(t){var e=this.__data__,n=q8(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():K8.call(e,n,1),--this.size,!0}var Y8=Q8,X8=Mp;function J8(t){var e=this.__data__,n=X8(e,t);return n<0?void 0:e[n][1]}var Z8=J8,e7=Mp;function t7(t){return e7(this.__data__,t)>-1}var n7=t7,r7=Mp;function i7(t,e){var n=this.__data__,r=r7(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o7=i7,s7=B8,a7=Y8,l7=Z8,u7=n7,c7=o7;function Aa(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Aa.prototype.clear=s7;Aa.prototype.delete=a7;Aa.prototype.get=l7;Aa.prototype.has=u7;Aa.prototype.set=c7;var Lp=Aa,f7=Lp;function d7(){this.__data__=new f7,this.size=0}var h7=d7;function p7(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var m7=p7;function g7(t){return this.__data__.get(t)}var v7=g7;function y7(t){return this.__data__.has(t)}var _7=y7,w7=br,E7=w7["__core-js_shared__"],S7=E7,Pg=S7,Vb=function(){var t=/[^.]+$/.exec(Pg&&Pg.keys&&Pg.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function b7(t){return!!Vb&&Vb in t}var x7=b7,T7=Function.prototype,I7=T7.toString;function C7(t){if(t!=null){try{return I7.call(t)}catch{}try{return t+""}catch{}}return""}var aR=C7,P7=Ok,A7=x7,k7=Np,R7=aR,O7=/[\\^$.*+?()[\]{}|]/g,N7=/^\[object .+?Constructor\]$/,$7=Function.prototype,D7=Object.prototype,j7=$7.toString,M7=D7.hasOwnProperty,L7=RegExp("^"+j7.call(M7).replace(O7,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function V7(t){if(!k7(t)||A7(t))return!1;var e=P7(t)?L7:N7;return e.test(R7(t))}var F7=V7;function U7(t,e){return t==null?void 0:t[e]}var z7=U7,B7=F7,W7=z7;function H7(t,e){var n=W7(t,e);return B7(n)?n:void 0}var ka=H7,q7=ka,G7=br,K7=q7(G7,"Map"),s_=K7,Q7=ka,Y7=Q7(Object,"create"),Vp=Y7,Fb=Vp;function X7(){this.__data__=Fb?Fb(null):{},this.size=0}var J7=X7;function Z7(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var eB=Z7,tB=Vp,nB="__lodash_hash_undefined__",rB=Object.prototype,iB=rB.hasOwnProperty;function oB(t){var e=this.__data__;if(tB){var n=e[t];return n===nB?void 0:n}return iB.call(e,t)?e[t]:void 0}var sB=oB,aB=Vp,lB=Object.prototype,uB=lB.hasOwnProperty;function cB(t){var e=this.__data__;return aB?e[t]!==void 0:uB.call(e,t)}var fB=cB,dB=Vp,hB="__lodash_hash_undefined__";function pB(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=dB&&e===void 0?hB:e,this}var mB=pB,gB=J7,vB=eB,yB=sB,_B=fB,wB=mB;function Ra(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ra.prototype.clear=gB;Ra.prototype.delete=vB;Ra.prototype.get=yB;Ra.prototype.has=_B;Ra.prototype.set=wB;var EB=Ra,Ub=EB,SB=Lp,bB=s_;function xB(){this.size=0,this.__data__={hash:new Ub,map:new(bB||SB),string:new Ub}}var TB=xB;function IB(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var CB=IB,PB=CB;function AB(t,e){var n=t.__data__;return PB(e)?n[typeof e=="string"?"string":"hash"]:n.map}var Fp=AB,kB=Fp;function RB(t){var e=kB(this,t).delete(t);return this.size-=e?1:0,e}var OB=RB,NB=Fp;function $B(t){return NB(this,t).get(t)}var DB=$B,jB=Fp;function MB(t){return jB(this,t).has(t)}var LB=MB,VB=Fp;function FB(t,e){var n=VB(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var UB=FB,zB=TB,BB=OB,WB=DB,HB=LB,qB=UB;function Oa(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Oa.prototype.clear=zB;Oa.prototype.delete=BB;Oa.prototype.get=WB;Oa.prototype.has=HB;Oa.prototype.set=qB;var lR=Oa,GB=Lp,KB=s_,QB=lR,YB=200;function XB(t,e){var n=this.__data__;if(n instanceof GB){var r=n.__data__;if(!KB||r.length<YB-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new QB(r)}return n.set(t,e),this.size=n.size,this}var JB=XB,ZB=Lp,eW=h7,tW=m7,nW=v7,rW=_7,iW=JB;function Na(t){var e=this.__data__=new ZB(t);this.size=e.size}Na.prototype.clear=eW;Na.prototype.delete=tW;Na.prototype.get=nW;Na.prototype.has=rW;Na.prototype.set=iW;var oW=Na,sW="__lodash_hash_undefined__";function aW(t){return this.__data__.set(t,sW),this}var lW=aW;function uW(t){return this.__data__.has(t)}var cW=uW,fW=lR,dW=lW,hW=cW;function Kd(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new fW;++e<n;)this.add(t[e])}Kd.prototype.add=Kd.prototype.push=dW;Kd.prototype.has=hW;var pW=Kd;function mW(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var gW=mW;function vW(t,e){return t.has(e)}var yW=vW,_W=pW,wW=gW,EW=yW,SW=1,bW=2;function xW(t,e,n,r,i,o){var s=n&SW,a=t.length,l=e.length;if(a!=l&&!(s&&l>a))return!1;var u=o.get(t),c=o.get(e);if(u&&c)return u==e&&c==t;var f=-1,d=!0,p=n&bW?new _W:void 0;for(o.set(t,e),o.set(e,t);++f<a;){var v=t[f],g=e[f];if(r)var w=s?r(g,v,f,e,t,o):r(v,g,f,t,e,o);if(w!==void 0){if(w)continue;d=!1;break}if(p){if(!wW(e,function(y,m){if(!EW(p,m)&&(v===y||i(v,y,n,r,o)))return p.push(m)})){d=!1;break}}else if(!(v===g||i(v,g,n,r,o))){d=!1;break}}return o.delete(t),o.delete(e),d}var uR=xW,TW=br,IW=TW.Uint8Array,CW=IW;function PW(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}var AW=PW;function kW(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var RW=kW,zb=Op,Bb=CW,OW=e_,NW=uR,$W=AW,DW=RW,jW=1,MW=2,LW="[object Boolean]",VW="[object Date]",FW="[object Error]",UW="[object Map]",zW="[object Number]",BW="[object RegExp]",WW="[object Set]",HW="[object String]",qW="[object Symbol]",GW="[object ArrayBuffer]",KW="[object DataView]",Wb=zb?zb.prototype:void 0,Ag=Wb?Wb.valueOf:void 0;function QW(t,e,n,r,i,o,s){switch(n){case KW:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case GW:return!(t.byteLength!=e.byteLength||!o(new Bb(t),new Bb(e)));case LW:case VW:case zW:return OW(+t,+e);case FW:return t.name==e.name&&t.message==e.message;case BW:case HW:return t==e+"";case UW:var a=$W;case WW:var l=r&jW;if(a||(a=DW),t.size!=e.size&&!l)return!1;var u=s.get(t);if(u)return u==e;r|=MW,s.set(t,e);var c=NW(a(t),a(e),r,i,o,s);return s.delete(t),c;case qW:if(Ag)return Ag.call(t)==Ag.call(e)}return!1}var YW=QW;function XW(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var JW=XW,ZW=JW,eH=jp;function tH(t,e,n){var r=e(t);return eH(t)?r:ZW(r,n(t))}var nH=tH;function rH(t,e){for(var n=-1,r=t==null?0:t.length,i=0,o=[];++n<r;){var s=t[n];e(s,n,t)&&(o[i++]=s)}return o}var iH=rH;function oH(){return[]}var sH=oH,aH=iH,lH=sH,uH=Object.prototype,cH=uH.propertyIsEnumerable,Hb=Object.getOwnPropertySymbols,fH=Hb?function(t){return t==null?[]:(t=Object(t),aH(Hb(t),function(e){return cH.call(t,e)}))}:lH,dH=fH;function hH(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var pH=hH,mH=ac,gH=lc,vH="[object Arguments]";function yH(t){return gH(t)&&mH(t)==vH}var _H=yH,qb=_H,wH=lc,cR=Object.prototype,EH=cR.hasOwnProperty,SH=cR.propertyIsEnumerable,bH=qb(function(){return arguments}())?qb:function(t){return wH(t)&&EH.call(t,"callee")&&!SH.call(t,"callee")},xH=bH,Qd={exports:{}};function TH(){return!1}var IH=TH;Qd.exports;(function(t,e){var n=br,r=IH,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,s=o&&o.exports===i,a=s?n.Buffer:void 0,l=a?a.isBuffer:void 0,u=l||r;t.exports=u})(Qd,Qd.exports);var fR=Qd.exports,CH=ac,PH=Nk,AH=lc,kH="[object Arguments]",RH="[object Array]",OH="[object Boolean]",NH="[object Date]",$H="[object Error]",DH="[object Function]",jH="[object Map]",MH="[object Number]",LH="[object Object]",VH="[object RegExp]",FH="[object Set]",UH="[object String]",zH="[object WeakMap]",BH="[object ArrayBuffer]",WH="[object DataView]",HH="[object Float32Array]",qH="[object Float64Array]",GH="[object Int8Array]",KH="[object Int16Array]",QH="[object Int32Array]",YH="[object Uint8Array]",XH="[object Uint8ClampedArray]",JH="[object Uint16Array]",ZH="[object Uint32Array]",xe={};xe[HH]=xe[qH]=xe[GH]=xe[KH]=xe[QH]=xe[YH]=xe[XH]=xe[JH]=xe[ZH]=!0;xe[kH]=xe[RH]=xe[BH]=xe[OH]=xe[WH]=xe[NH]=xe[$H]=xe[DH]=xe[jH]=xe[MH]=xe[LH]=xe[VH]=xe[FH]=xe[UH]=xe[zH]=!1;function eq(t){return AH(t)&&PH(t.length)&&!!xe[CH(t)]}var tq=eq;function nq(t){return function(e){return t(e)}}var rq=nq,Yd={exports:{}};Yd.exports;(function(t,e){var n=kk,r=e&&!e.nodeType&&e,i=r&&!0&&t&&!t.nodeType&&t,o=i&&i.exports===r,s=o&&n.process,a=function(){try{var l=i&&i.require&&i.require("util").types;return l||s&&s.binding&&s.binding("util")}catch{}}();t.exports=a})(Yd,Yd.exports);var iq=Yd.exports,oq=tq,sq=rq,Gb=iq,Kb=Gb&&Gb.isTypedArray,aq=Kb?sq(Kb):oq,dR=aq,lq=pH,uq=xH,cq=jp,fq=fR,dq=Dk,hq=dR,pq=Object.prototype,mq=pq.hasOwnProperty;function gq(t,e){var n=cq(t),r=!n&&uq(t),i=!n&&!r&&fq(t),o=!n&&!r&&!i&&hq(t),s=n||r||i||o,a=s?lq(t.length,String):[],l=a.length;for(var u in t)(e||mq.call(t,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||dq(u,l)))&&a.push(u);return a}var vq=gq,yq=Object.prototype;function _q(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||yq;return t===n}var wq=_q;function Eq(t,e){return function(n){return t(e(n))}}var Sq=Eq,bq=Sq,xq=bq(Object.keys,Object),Tq=xq,Iq=wq,Cq=Tq,Pq=Object.prototype,Aq=Pq.hasOwnProperty;function kq(t){if(!Iq(t))return Cq(t);var e=[];for(var n in Object(t))Aq.call(t,n)&&n!="constructor"&&e.push(n);return e}var Rq=kq,Oq=vq,Nq=Rq,$q=$k;function Dq(t){return $q(t)?Oq(t):Nq(t)}var jq=Dq,Mq=nH,Lq=dH,Vq=jq;function Fq(t){return Mq(t,Vq,Lq)}var Uq=Fq,Qb=Uq,zq=1,Bq=Object.prototype,Wq=Bq.hasOwnProperty;function Hq(t,e,n,r,i,o){var s=n&zq,a=Qb(t),l=a.length,u=Qb(e),c=u.length;if(l!=c&&!s)return!1;for(var f=l;f--;){var d=a[f];if(!(s?d in e:Wq.call(e,d)))return!1}var p=o.get(t),v=o.get(e);if(p&&v)return p==e&&v==t;var g=!0;o.set(t,e),o.set(e,t);for(var w=s;++f<l;){d=a[f];var y=t[d],m=e[d];if(r)var _=s?r(m,y,d,e,t,o):r(y,m,d,t,e,o);if(!(_===void 0?y===m||i(y,m,n,r,o):_)){g=!1;break}w||(w=d=="constructor")}if(g&&!w){var E=t.constructor,S=e.constructor;E!=S&&"constructor"in t&&"constructor"in e&&!(typeof E=="function"&&E instanceof E&&typeof S=="function"&&S instanceof S)&&(g=!1)}return o.delete(t),o.delete(e),g}var qq=Hq,Gq=ka,Kq=br,Qq=Gq(Kq,"DataView"),Yq=Qq,Xq=ka,Jq=br,Zq=Xq(Jq,"Promise"),eG=Zq,tG=ka,nG=br,rG=tG(nG,"Set"),iG=rG,oG=ka,sG=br,aG=oG(sG,"WeakMap"),lG=aG,Iy=Yq,Cy=s_,Py=eG,Ay=iG,ky=lG,hR=ac,$a=aR,Yb="[object Map]",uG="[object Object]",Xb="[object Promise]",Jb="[object Set]",Zb="[object WeakMap]",ex="[object DataView]",cG=$a(Iy),fG=$a(Cy),dG=$a(Py),hG=$a(Ay),pG=$a(ky),ro=hR;(Iy&&ro(new Iy(new ArrayBuffer(1)))!=ex||Cy&&ro(new Cy)!=Yb||Py&&ro(Py.resolve())!=Xb||Ay&&ro(new Ay)!=Jb||ky&&ro(new ky)!=Zb)&&(ro=function(t){var e=hR(t),n=e==uG?t.constructor:void 0,r=n?$a(n):"";if(r)switch(r){case cG:return ex;case fG:return Yb;case dG:return Xb;case hG:return Jb;case pG:return Zb}return e});var mG=ro,kg=oW,gG=uR,vG=YW,yG=qq,tx=mG,nx=jp,rx=fR,_G=dR,wG=1,ix="[object Arguments]",ox="[object Array]",af="[object Object]",EG=Object.prototype,sx=EG.hasOwnProperty;function SG(t,e,n,r,i,o){var s=nx(t),a=nx(e),l=s?ox:tx(t),u=a?ox:tx(e);l=l==ix?af:l,u=u==ix?af:u;var c=l==af,f=u==af,d=l==u;if(d&&rx(t)){if(!rx(e))return!1;s=!0,c=!1}if(d&&!c)return o||(o=new kg),s||_G(t)?gG(t,e,n,r,i,o):vG(t,e,l,n,r,i,o);if(!(n&wG)){var p=c&&sx.call(t,"__wrapped__"),v=f&&sx.call(e,"__wrapped__");if(p||v){var g=p?t.value():t,w=v?e.value():e;return o||(o=new kg),i(g,w,n,r,o)}}return d?(o||(o=new kg),yG(t,e,n,r,i,o)):!1}var bG=SG,xG=bG,ax=lc;function pR(t,e,n,r,i){return t===e?!0:t==null||e==null||!ax(t)&&!ax(e)?t!==t&&e!==e:xG(t,e,n,r,pR,i)}var TG=pR,IG=TG;function CG(t,e){return IG(t,e)}var PG=CG;const AG=Wo(PG);var it=function(){return it=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},it.apply(this,arguments)};function kG(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}var Ry=function(t,e,n,r,i){return(t-e)*(i-r)/(n-e)+r},mR=function(t,e){var n=t+e;return n>360?n-360:n},gR=function(){return Math.random()>.5},vR=[0,0,1],a_=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],vR],RG=function(t){return!AG(a_[t],vR)&&gR()},lx=200,OG=800,NG=.1,$G=.25,ux=.5,DG=a_.reduce(function(t,e,n){var r;return it(it({},t),(r={},r["@keyframes rotation-".concat(n)]={"50%":{transform:"rotate3d(".concat(e.map(function(i){return i/2}).join(),", 180deg)")},"100%":{transform:"rotate3d(".concat(e.join(),", 360deg)")}},r))},{}),jG=function(t,e,n){var r=typeof e=="string"?e:"".concat(e,"px"),i=t.reduce(function(o,s,a){var l,u=Ry(Math.abs(mR(s,90)-180),0,180,-n/2,n/2);return it(it({},o),(l={},l["@keyframes x-axis-".concat(a)]={to:{transform:"translateX(".concat(u,"px)")}},l))},{});return it({"@keyframes y-axis":{to:{transform:"translateY(".concat(r,")")}}},i)},MG=function(t,e,n,r,i){var o,s=Math.round(Math.random()*(OG-lx)+lx),a=Math.round(Math.random()*(a_.length-1)),l=e-Math.round(Math.random()*1e3),u=Math.random()<NG,c=RG(a),f=u?sl(Math.random()*$G,2):0,d=f*-1,p=f,v=sl(Math.abs(Ry(Math.abs(mR(t.degree,90)-180),0,180,-1,1)),4),g=sl(Math.random()*ux,4),w=sl(Math.random()*n*(gR()?1:-1),4),y=ux,m=sl(Math.max(Ry(Math.abs(t.degree-180),0,180,n,-n),0),4);return o={},o["&#confetti-particle-".concat(i)]={animation:"$x-axis-".concat(i," ").concat(l,"ms forwards cubic-bezier(").concat(f,", ").concat(d,", ").concat(p,", ").concat(v,")"),"& > div":{width:c?r:Math.round(Math.random()*4)+r/2,height:c?r:Math.round(Math.random()*2)+r,animation:"$y-axis ".concat(l,"ms forwards cubic-bezier(").concat(g,", ").concat(w,", ").concat(y,", ").concat(m,")"),"&:after":it({backgroundColor:t.color,animation:"$rotation-".concat(a," ").concat(s,"ms infinite linear")},c?{borderRadius:"50%"}:{})}},o},LG=function(t){var e=t.particles,n=t.duration,r=t.height,i=t.width,o=t.force,s=t.particleSize,a=e.reduce(function(l,u,c){return it(it({},l),MG(u,n,o,s,c))},{});return v8(it(it(it({},DG),jG(e.map(function(l){return l.degree}),r,i)),{container:{width:0,height:0,position:"relative"},screen:{position:"fixed",top:0,left:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none"},particle:it(it({},a),{"& > div":{position:"absolute",left:0,top:0,"&:after":{content:"''",display:"block",width:"100%",height:"100%"}}})}),{name:"confetti-explosion"})},VG=.5,FG=12,UG="120vh",zG=1e3,BG=100,WG=2200,HG=["#FFC700","#FF0000","#2E3191","#41BBC7"],qG=function(t,e){var n=360/t;return QF(t).map(function(r){return{color:e[r%e.length],degree:n*r}})};function GG(t){var e=t.particleCount,n=e===void 0?BG:e,r=t.duration,i=r===void 0?WG:r,o=t.colors,s=o===void 0?HG:o,a=t.particleSize,l=a===void 0?FG:a,u=t.force,c=u===void 0?VG:u,f=t.height,d=f===void 0?UG:f,p=t.width,v=p===void 0?zG:p,g=t.zIndex,w=t.onComplete,y=kG(t,["particleCount","duration","colors","particleSize","force","height","width","zIndex","onComplete"]),m=b.useState(),_=m[0],E=m[1],S=qG(n,s),T=LG({particles:S,duration:i,particleSize:l,force:c,width:v,height:d})(),x=b.useCallback(function(O){if(O){var D=O.getBoundingClientRect(),R=D.top,te=D.left;E({top:R,left:te})}},[]);return b.useEffect(function(){if(typeof w=="function"){var O=setTimeout(w,i);return function(){return clearTimeout(O)}}},[i,w]),h.jsx("div",it({ref:x,className:T.container},y,{children:_&&rA.createPortal(h.jsx("div",it({className:T.screen},g?{style:{zIndex:g}}:null,{children:h.jsx("div",it({style:{position:"absolute",top:_.top,left:_.left}},{children:S.map(function(O,D){return h.jsx("div",it({id:"confetti-particle-".concat(D),className:T.particle},{children:h.jsx("div",{})}),O.degree)})}))})),document.body)}))}const yR="rgb(255, 51, 119)",KG=lp`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,QG=lp`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`,YG=lp`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
`,XG=A(P1)`
    display: flex;
`,JG=A.img`
    height: 100px;
    width: 100px;
    margin: 10px 20px;
    cursor: pointer;
    color: pink;
`,ZG=A.div`
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
`,eK=A.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`,al=A.button`
    font-size: 20px;
    border: none;
    background-color: #fff;
    cursor: pointer;
    margin: 0 20px;
    height: 30px;
    transition: 0.5s ease-out;

    &:hover {
        color: ${yR};
    }
`,cx=A.div`
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
`,fx=A.div`
    position: relative;
`,ll=A(P1)`
  color: black;
  cursor: pointer;
  padding: 12px 20px;
  display: block;
  text-decoration: none;

  &:hover {
    color: ${yR};
    background-color: #ddd;
  }
`,tK=A.div`
    position: relative;
    top: 7px;
    display: flex;
    align-items: center;
    margin: 0px 40px 15px; 0;
    cursor: pointer;
    animation: ${({$bounce:t})=>t?No`animation: ${YG} 1s ease-in-out`:"none"}
`,nK=A(Ak)`
    // margin-right: 20px;
`,rK=A.span`
    position: absolute; // removed from normal doc flow, position relative to nearest ancestor, which is the ShoppingCartContainer
    top: 13px;
    right: 11px;
    color: rgb(255, 26, 198);
    padding: 0 3px;
    border-radius: 40%;
    font-size: 14px;
    font-weight: bold;
`,iK=A.div`
    position: absolute;
    top: 120px;
    width: 100%;
    height: 30px;
    background: rgb(0,0,0);
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: ${({$show:t})=>t?1:0};
    ${({$show:t})=>t?No`animation: ${KG} 0.6s ease-in-out;`:No`animation: ${QG} 0.6s ease-in-out; display: none;`}


    h4 {
        color: #fff;
    };

`,oK=A(GG)`
    position: absolute;
    width: 100;
`,sK="/assets/hearts-Ik6zbrID.jpg";var dx={};/**
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
 */const _R=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aK=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},wR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,s||(d=64)),r.push(n[c],n[f],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_R(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aK(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new lK;const d=o<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lK extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uK=function(t){const e=_R(t);return wR.encodeByteArray(e,!0)},Xd=function(t){return uK(t).replace(/\./g,"")},ER=function(t){try{return wR.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cK(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fK=()=>cK().__FIREBASE_DEFAULTS__,dK=()=>{if(typeof process>"u"||typeof dx>"u")return;const t=dx.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hK=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ER(t[1]);return e&&JSON.parse(e)},Up=()=>{try{return fK()||dK()||hK()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},SR=t=>{var e,n;return(n=(e=Up())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pK=t=>{const e=SR(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bR=()=>{var t;return(t=Up())===null||t===void 0?void 0:t.config},xR=t=>{var e;return(e=Up())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class mK{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gK(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Xd(JSON.stringify(n)),Xd(JSON.stringify(s)),""].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vK(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function yK(){var t;const e=(t=Up())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _K(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wK(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EK(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SK(){return!yK()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TR(){try{return typeof indexedDB=="object"}catch{return!1}}function bK(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const xK="FirebaseError";class Xr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xK,Object.setPrototypeOf(this,Xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uc.prototype.create)}}class uc{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?TK(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Xr(i,a,r)}}function TK(t,e){return t.replace(IK,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IK=/\{\$([^}]+)}/g;function CK(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(hx(o)&&hx(s)){if(!Jd(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hx(t){return t!==null&&typeof t=="object"}/**
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
 */function cc(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function El(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PK(t,e){const n=new AK(t,e);return n.subscribe.bind(n)}class AK{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kK(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Rg),i.error===void 0&&(i.error=Rg),i.complete===void 0&&(i.complete=Rg);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kK(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rg(){}/**
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
 */function qt(t){return t&&t._delegate?t._delegate:t}class $o{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const io="[DEFAULT]";/**
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
 */class RK{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mK;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NK(e))try{this.getOrInitializeService({instanceIdentifier:io})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=io){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=io){return this.instances.has(e)}getOptions(e=io){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OK(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=io){return this.component?this.component.multipleInstances?e:io:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OK(t){return t===io?void 0:t}function NK(t){return t.instantiationMode==="EAGER"}/**
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
 */class $K{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RK(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const DK={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},jK=ie.INFO,MK={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},LK=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MK[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class l_{constructor(e){this.name=e,this._logLevel=jK,this._logHandler=LK,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DK[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const VK=(t,e)=>e.some(n=>t instanceof n);let px,mx;function FK(){return px||(px=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UK(){return mx||(mx=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const IR=new WeakMap,Oy=new WeakMap,CR=new WeakMap,Og=new WeakMap,u_=new WeakMap;function zK(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ri(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&IR.set(n,t)}).catch(()=>{}),u_.set(e,t),e}function BK(t){if(Oy.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Oy.set(t,e)}let Ny={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oy.get(t);if(e==="objectStoreNames")return t.objectStoreNames||CR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ri(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WK(t){Ny=t(Ny)}function HK(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ng(this),e,...n);return CR.set(r,e.sort?e.sort():[e]),Ri(r)}:UK().includes(t)?function(...e){return t.apply(Ng(this),e),Ri(IR.get(this))}:function(...e){return Ri(t.apply(Ng(this),e))}}function qK(t){return typeof t=="function"?HK(t):(t instanceof IDBTransaction&&BK(t),VK(t,FK())?new Proxy(t,Ny):t)}function Ri(t){if(t instanceof IDBRequest)return zK(t);if(Og.has(t))return Og.get(t);const e=qK(t);return e!==t&&(Og.set(t,e),u_.set(e,t)),e}const Ng=t=>u_.get(t);function GK(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ri(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ri(s.result),l.oldVersion,l.newVersion,Ri(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const KK=["get","getKey","getAll","getAllKeys","count"],QK=["put","add","delete","clear"],$g=new Map;function gx(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($g.get(e))return $g.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=QK.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KK.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $g.set(e,o),o}WK(t=>({...t,get:(e,n,r)=>gx(e,n)||t.get(e,n,r),has:(e,n)=>!!gx(e,n)||t.has(e,n)}));/**
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
 */class YK{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XK(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XK(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $y="@firebase/app",vx="0.9.27";/**
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
 */const Do=new l_("@firebase/app"),JK="@firebase/app-compat",ZK="@firebase/analytics-compat",eQ="@firebase/analytics",tQ="@firebase/app-check-compat",nQ="@firebase/app-check",rQ="@firebase/auth",iQ="@firebase/auth-compat",oQ="@firebase/database",sQ="@firebase/database-compat",aQ="@firebase/functions",lQ="@firebase/functions-compat",uQ="@firebase/installations",cQ="@firebase/installations-compat",fQ="@firebase/messaging",dQ="@firebase/messaging-compat",hQ="@firebase/performance",pQ="@firebase/performance-compat",mQ="@firebase/remote-config",gQ="@firebase/remote-config-compat",vQ="@firebase/storage",yQ="@firebase/storage-compat",_Q="@firebase/firestore",wQ="@firebase/firestore-compat",EQ="firebase",SQ="10.8.0";/**
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
 */const Dy="[DEFAULT]",bQ={[$y]:"fire-core",[JK]:"fire-core-compat",[eQ]:"fire-analytics",[ZK]:"fire-analytics-compat",[nQ]:"fire-app-check",[tQ]:"fire-app-check-compat",[rQ]:"fire-auth",[iQ]:"fire-auth-compat",[oQ]:"fire-rtdb",[sQ]:"fire-rtdb-compat",[aQ]:"fire-fn",[lQ]:"fire-fn-compat",[uQ]:"fire-iid",[cQ]:"fire-iid-compat",[fQ]:"fire-fcm",[dQ]:"fire-fcm-compat",[hQ]:"fire-perf",[pQ]:"fire-perf-compat",[mQ]:"fire-rc",[gQ]:"fire-rc-compat",[vQ]:"fire-gcs",[yQ]:"fire-gcs-compat",[_Q]:"fire-fst",[wQ]:"fire-fst-compat","fire-js":"fire-js",[EQ]:"fire-js-all"};/**
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
 */const Zd=new Map,jy=new Map;function xQ(t,e){try{t.container.addComponent(e)}catch(n){Do.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ua(t){const e=t.name;if(jy.has(e))return Do.debug(`There were multiple attempts to register component ${e}.`),!1;jy.set(e,t);for(const n of Zd.values())xQ(n,t);return!0}function c_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const TQ={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Oi=new uc("app","Firebase",TQ);/**
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
 */class IQ{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $o("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oi.create("app-deleted",{appName:this._name})}}/**
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
 */const Da=SQ;function PR(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dy,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Oi.create("bad-app-name",{appName:String(i)});if(n||(n=bR()),!n)throw Oi.create("no-options");const o=Zd.get(i);if(o){if(Jd(n,o.options)&&Jd(r,o.config))return o;throw Oi.create("duplicate-app",{appName:i})}const s=new $K(i);for(const l of jy.values())s.addComponent(l);const a=new IQ(n,r,s);return Zd.set(i,a),a}function AR(t=Dy){const e=Zd.get(t);if(!e&&t===Dy&&bR())return PR();if(!e)throw Oi.create("no-app",{appName:t});return e}function Ni(t,e,n){var r;let i=(r=bQ[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Do.warn(a.join(" "));return}ua(new $o(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const CQ="firebase-heartbeat-database",PQ=1,Cu="firebase-heartbeat-store";let Dg=null;function kR(){return Dg||(Dg=GK(CQ,PQ,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Cu)}catch(n){console.warn(n)}}}}).catch(t=>{throw Oi.create("idb-open",{originalErrorMessage:t.message})})),Dg}async function AQ(t){try{const n=(await kR()).transaction(Cu),r=await n.objectStore(Cu).get(RR(t));return await n.done,r}catch(e){if(e instanceof Xr)Do.warn(e.message);else{const n=Oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Do.warn(n.message)}}}async function yx(t,e){try{const r=(await kR()).transaction(Cu,"readwrite");await r.objectStore(Cu).put(e,RR(t)),await r.done}catch(n){if(n instanceof Xr)Do.warn(n.message);else{const r=Oi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Do.warn(r.message)}}}function RR(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kQ=1024,RQ=30*24*60*60*1e3;class OQ{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $Q(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=_x();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=RQ}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_x(),{heartbeatsToSend:r,unsentEntries:i}=NQ(this._heartbeatsCache.heartbeats),o=Xd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function _x(){return new Date().toISOString().substring(0,10)}function NQ(t,e=kQ){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),wx(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wx(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $Q{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TR()?bK().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AQ(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yx(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yx(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wx(t){return Xd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function DQ(t){ua(new $o("platform-logger",e=>new YK(e),"PRIVATE")),ua(new $o("heartbeat",e=>new OQ(e),"PRIVATE")),Ni($y,vx,t),Ni($y,vx,"esm2017"),Ni("fire-js","")}DQ("");var jQ="firebase",MQ="10.8.0";/**
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
 */Ni(jQ,MQ,"app");function OR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LQ=OR,NR=new uc("auth","Firebase",OR());/**
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
 */const eh=new l_("@firebase/auth");function VQ(t,...e){eh.logLevel<=ie.WARN&&eh.warn(`Auth (${Da}): ${t}`,...e)}function rd(t,...e){eh.logLevel<=ie.ERROR&&eh.error(`Auth (${Da}): ${t}`,...e)}/**
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
 */function Rn(t,...e){throw f_(t,...e)}function gr(t,...e){return f_(t,...e)}function $R(t,e,n){const r=Object.assign(Object.assign({},LQ()),{[e]:n});return new uc("auth","Firebase",r).create(e,{appName:t.name})}function FQ(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rn(t,"argument-error"),$R(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function f_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NR.create(t,...e)}function G(t,e,...n){if(!t)throw f_(e,...n)}function Or(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rd(e),new Error(e)}function zr(t,e){t||Or(e)}/**
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
 */function My(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UQ(){return Ex()==="http:"||Ex()==="https:"}function Ex(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zQ(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UQ()||_K()||"connection"in navigator)?navigator.onLine:!0}function BQ(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fc{constructor(e,n){this.shortDelay=e,this.longDelay=n,zr(n>e,"Short delay should be less than long delay!"),this.isMobile=vK()||wK()}get(){return zQ()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function d_(t,e){zr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class DR{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const WQ={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const HQ=new fc(3e4,6e4);function Gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ki(t,e,n,r,i={}){return jR(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=cc(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),DR.fetch()(MR(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function jR(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WQ),e);try{const i=new GQ(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw lf(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw lf(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw lf(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw lf(t,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $R(t,c,u);Rn(t,c)}}catch(i){if(i instanceof Xr)throw i;Rn(t,"network-request-failed",{message:String(i)})}}async function dc(t,e,n,r,i={}){const o=await Ki(t,e,n,r,i);return"mfaPendingCredential"in o&&Rn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function MR(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?d_(t.config,i):`${t.config.apiScheme}://${i}`}function qQ(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class GQ{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gr(this.auth,"network-request-failed")),HQ.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lf(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gr(t,e,r);return i.customData._tokenResponse=n,i}function Sx(t){return t!==void 0&&t.enterprise!==void 0}class KQ{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qQ(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function QQ(t,e){return Ki(t,"GET","/v2/recaptchaConfig",Gi(t,e))}/**
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
 */async function YQ(t,e){return Ki(t,"POST","/v1/accounts:delete",e)}async function XQ(t,e){return Ki(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JQ(t,e=!1){const n=qt(t),r=await n.getIdToken(e),i=h_(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:zl(jg(i.auth_time)),issuedAtTime:zl(jg(i.iat)),expirationTime:zl(jg(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function jg(t){return Number(t)*1e3}function h_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rd("JWT malformed, contained fewer than 3 sections"),null;try{const i=ER(n);return i?JSON.parse(i):(rd("Failed to decode base64 JWT payload"),null)}catch(i){return rd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ZQ(t){const e=h_(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pu(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xr&&eY(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eY({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tY{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class LR{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zl(this.lastLoginAt),this.creationTime=zl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function th(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Pu(t,XQ(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?iY(o.providerUserInfo):[],a=rY(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new LR(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function nY(t){const e=qt(t);await th(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rY(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iY(t){return t.map(e=>{var{providerId:n}=e,r=R1(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function oY(t,e){const n=await jR(t,{},async()=>{const r=cc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=MR(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",DR.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sY(t,e){return Ki(t,"POST","/v2/accounts:revokeToken",Gi(t,e))}/**
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
 */class Au{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ZQ(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await oY(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Au;return r&&(G(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(G(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Au,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
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
 */function ri(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Io{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=R1(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tY(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new LR(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Pu(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JQ(this,e)}reload(){return nY(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Io(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await th(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pu(this,YQ(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:E,isAnonymous:S,providerData:T,stsTokenManager:x}=n;G(_&&x,e,"internal-error");const O=Au.fromJSON(this.name,x);G(typeof _=="string",e,"internal-error"),ri(f,e.name),ri(d,e.name),G(typeof E=="boolean",e,"internal-error"),G(typeof S=="boolean",e,"internal-error"),ri(p,e.name),ri(v,e.name),ri(g,e.name),ri(w,e.name),ri(y,e.name),ri(m,e.name);const D=new Io({uid:_,auth:e,email:d,emailVerified:E,displayName:f,isAnonymous:S,photoURL:v,phoneNumber:p,tenantId:g,stsTokenManager:O,createdAt:y,lastLoginAt:m});return T&&Array.isArray(T)&&(D.providerData=T.map(R=>Object.assign({},R))),w&&(D._redirectEventId=w),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new Au;i.updateFromServerResponse(n);const o=new Io({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await th(o),o}}/**
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
 */const bx=new Map;function Nr(t){zr(t instanceof Function,"Expected a class definition");let e=bx.get(t);return e?(zr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bx.set(t,e),e)}/**
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
 */class VR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}VR.type="NONE";const xx=VR;/**
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
 */function id(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=id(this.userKey,i.apiKey,o),this.fullPersistenceKey=id("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Io._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(Nr(xx),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Nr(xx);const s=id(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=Io._fromJSON(e,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Vs(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Vs(o,e,r))}}/**
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
 */function Tx(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WR(e))return"Blackberry";if(HR(e))return"Webos";if(p_(e))return"Safari";if((e.includes("chrome/")||UR(e))&&!e.includes("edge/"))return"Chrome";if(BR(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function FR(t=et()){return/firefox\//i.test(t)}function p_(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UR(t=et()){return/crios\//i.test(t)}function zR(t=et()){return/iemobile/i.test(t)}function BR(t=et()){return/android/i.test(t)}function WR(t=et()){return/blackberry/i.test(t)}function HR(t=et()){return/webos/i.test(t)}function zp(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aY(t=et()){var e;return zp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lY(){return EK()&&document.documentMode===10}function qR(t=et()){return zp(t)||BR(t)||HR(t)||WR(t)||/windows phone/i.test(t)||zR(t)}function uY(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function GR(t,e=[]){let n;switch(t){case"Browser":n=Tx(et());break;case"Worker":n=`${Tx(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Da}/${r}`}/**
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
 */class cY{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function fY(t,e={}){return Ki(t,"GET","/v2/passwordPolicy",Gi(t,e))}/**
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
 */const dY=6;class hY{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:dY,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class pY{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ix(this),this.idTokenSubscription=new Ix(this),this.beforeStateQueue=new cY(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await th(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BQ()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fY(this),n=new hY(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new uc("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sY(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nr(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[Nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=GR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&VQ(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qi(t){return qt(t)}class Ix{constructor(e){this.auth=e,this.observer=null,this.addObserver=PK(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mY(t){Bp=t}function KR(t){return Bp.loadJS(t)}function gY(){return Bp.recaptchaEnterpriseScript}function vY(){return Bp.gapiScript}function yY(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _Y="recaptcha-enterprise",wY="NO_RECAPTCHA";class EY{constructor(e){this.type=_Y,this.auth=Qi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{QQ(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new KQ(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Sx(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(wY)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Sx(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gY();l.length!==0&&(l+=a),KR(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Cx(t,e,n,r=!1){const i=new EY(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ly(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Cx(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Cx(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
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
 */function SY(t,e){const n=c_(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Jd(o,e??{}))return i;Rn(i,"already-initialized")}return n.initialize({options:e})}function bY(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xY(t,e,n){const r=Qi(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=QR(e),{host:s,port:a}=TY(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||IY()}function QR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TY(t){const e=QR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Px(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Px(s)}}}function Px(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IY(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class m_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,n){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function CY(t,e){return Ki(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function PY(t,e){return dc(t,"POST","/v1/accounts:signInWithPassword",Gi(t,e))}/**
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
 */async function AY(t,e){return dc(t,"POST","/v1/accounts:signInWithEmailLink",Gi(t,e))}async function kY(t,e){return dc(t,"POST","/v1/accounts:signInWithEmailLink",Gi(t,e))}/**
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
 */class ku extends m_{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ku(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ku(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ly(e,n,"signInWithPassword",PY);case"emailLink":return AY(e,{email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ly(e,r,"signUpPassword",CY);case"emailLink":return kY(e,{idToken:n,email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fs(t,e){return dc(t,"POST","/v1/accounts:signInWithIdp",Gi(t,e))}/**
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
 */const RY="http://localhost";class jo extends m_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=R1(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new jo(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fs(e,n)}buildRequest(){const e={requestUri:RY,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cc(n)}return e}}/**
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
 */function OY(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NY(t){const e=wl(El(t)).link,n=e?wl(El(e)).deep_link_id:null,r=wl(El(t)).deep_link_id;return(r?wl(El(r)).link:null)||r||n||e||t}class g_{constructor(e){var n,r,i,o,s,a;const l=wl(El(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=OY((i=l.mode)!==null&&i!==void 0?i:null);G(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=NY(e);try{return new g_(n)}catch{return null}}}/**
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
 */class ja{constructor(){this.providerId=ja.PROVIDER_ID}static credential(e,n){return ku._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=g_.parseLink(n);return G(r,"argument-error"),ku._fromEmailAndCode(e,r.code,r.tenantId)}}ja.PROVIDER_ID="password";ja.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ja.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class v_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hc extends v_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hi extends hc{constructor(){super("facebook.com")}static credential(e){return jo._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
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
 */class Ar extends hc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jo._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ar.credential(n,r)}catch{return null}}}Ar.GOOGLE_SIGN_IN_METHOD="google.com";Ar.PROVIDER_ID="google.com";/**
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
 */class pi extends hc{constructor(){super("github.com")}static credential(e){return jo._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.GITHUB_SIGN_IN_METHOD="github.com";pi.PROVIDER_ID="github.com";/**
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
 */class mi extends hc{constructor(){super("twitter.com")}static credential(e,n){return jo._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mi.credential(n,r)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
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
 */async function $Y(t,e){return dc(t,"POST","/v1/accounts:signUp",Gi(t,e))}/**
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
 */class Mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Io._fromIdTokenResponse(e,r,i),s=Ax(r);return new Mo({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ax(r);return new Mo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ax(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class nh extends Xr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nh.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new nh(e,n,r,i)}}function YR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?nh._fromErrorAndOperation(t,o,e,r):o})}async function DY(t,e,n=!1){const r=await Pu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mo._forOperation(t,"link",r)}/**
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
 */async function jY(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Pu(t,YR(r,i,e,t),n);G(o.idToken,r,"internal-error");const s=h_(o.idToken);G(s,r,"internal-error");const{sub:a}=s;return G(t.uid===a,r,"user-mismatch"),Mo._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Rn(r,"user-mismatch"),o}}/**
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
 */async function XR(t,e,n=!1){const r="signIn",i=await YR(t,r,e),o=await Mo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function MY(t,e){return XR(Qi(t),e)}/**
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
 */async function JR(t){const e=Qi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LY(t,e,n){const r=Qi(t),s=await Ly(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$Y).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&JR(t),l}),a=await Mo._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function VY(t,e,n){return MY(qt(t),ja.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&JR(t),r})}function FY(t,e,n,r){return qt(t).onIdTokenChanged(e,n,r)}function UY(t,e,n){return qt(t).beforeAuthStateChanged(e,n)}function zY(t,e,n,r){return qt(t).onAuthStateChanged(e,n,r)}function BY(t){return qt(t).signOut()}const rh="__sak";/**
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
 */class ZR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rh,"1"),this.storage.removeItem(rh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function WY(){const t=et();return p_(t)||zp(t)}const HY=1e3,qY=10;class e2 extends ZR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=WY()&&uY(),this.fallbackToPolling=qR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);lY()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qY):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HY)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e2.type="LOCAL";const GY=e2;/**
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
 */class t2 extends ZR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t2.type="SESSION";const n2=t2;/**
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
 */function KY(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wp(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await KY(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wp.receivers=[];/**
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
 */function y_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QY{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=y_("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(d.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function vr(){return window}function YY(t){vr().location.href=t}/**
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
 */function r2(){return typeof vr().WorkerGlobalScope<"u"&&typeof vr().importScripts=="function"}async function XY(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JY(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZY(){return r2()?self:null}/**
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
 */const i2="firebaseLocalStorageDb",eX=1,ih="firebaseLocalStorage",o2="fbase_key";class pc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hp(t,e){return t.transaction([ih],e?"readwrite":"readonly").objectStore(ih)}function tX(){const t=indexedDB.deleteDatabase(i2);return new pc(t).toPromise()}function Vy(){const t=indexedDB.open(i2,eX);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ih,{keyPath:o2})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ih)?e(r):(r.close(),await tX(),e(await Vy()))})})}async function kx(t,e,n){const r=Hp(t,!0).put({[o2]:e,value:n});return new pc(r).toPromise()}async function nX(t,e){const n=Hp(t,!1).get(e),r=await new pc(n).toPromise();return r===void 0?null:r.value}function Rx(t,e){const n=Hp(t,!0).delete(e);return new pc(n).toPromise()}const rX=800,iX=3;class s2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vy(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iX)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wp._getInstance(ZY()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XY(),!this.activeServiceWorker)return;this.sender=new QY(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JY()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vy();return await kx(e,rh,"1"),await Rx(e,rh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kx(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nX(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rx(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Hp(i,!1).getAll();return new pc(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rX)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s2.type="LOCAL";const oX=s2;new fc(3e4,6e4);/**
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
 */function a2(t,e){return e?Nr(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class __ extends m_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sX(t){return XR(t.auth,new __(t),t.bypassAuthState)}function aX(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),jY(n,new __(t),t.bypassAuthState)}async function lX(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),DY(n,new __(t),t.bypassAuthState)}/**
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
 */class l2{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sX;case"linkViaPopup":case"linkViaRedirect":return lX;case"reauthViaPopup":case"reauthViaRedirect":return aX;default:Rn(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uX=new fc(2e3,1e4);async function cX(t,e,n){const r=Qi(t);FQ(t,e,v_);const i=a2(r,n);return new po(r,"signInViaPopup",e,i).executeNotNull()}class po extends l2{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,po.currentPopupAction&&po.currentPopupAction.cancel(),po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=y_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,po.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uX.get())};e()}}po.currentPopupAction=null;/**
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
 */const fX="pendingRedirect",od=new Map;class dX extends l2{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=od.get(this.auth._key());if(!e){try{const r=await hX(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}od.set(this.auth._key(),e)}return this.bypassAuthState||od.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hX(t,e){const n=gX(e),r=mX(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pX(t,e){od.set(t._key(),e)}function mX(t){return Nr(t._redirectPersistence)}function gX(t){return id(fX,t.config.apiKey,t.name)}async function vX(t,e,n=!1){const r=Qi(t),i=a2(r,e),s=await new dX(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const yX=10*60*1e3;class _X{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wX(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!u2(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yX&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ox(e))}saveEventToCache(e){this.cachedEventUids.add(Ox(e)),this.lastProcessedEventTime=Date.now()}}function Ox(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function u2({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wX(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u2(t);default:return!1}}/**
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
 */async function EX(t,e={}){return Ki(t,"GET","/v1/projects",e)}/**
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
 */const SX=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bX=/^https?/;async function xX(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EX(t);for(const n of e)try{if(TX(n))return}catch{}Rn(t,"unauthorized-domain")}function TX(t){const e=My(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!bX.test(n))return!1;if(SX.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const IX=new fc(3e4,6e4);function Nx(){const t=vr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CX(t){return new Promise((e,n)=>{var r,i,o;function s(){Nx(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nx(),n(gr(t,"network-request-failed"))},timeout:IX.get()})}if(!((i=(r=vr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=vr().gapi)===null||o===void 0)&&o.load)s();else{const a=yY("iframefcb");return vr()[a]=()=>{gapi.load?s():n(gr(t,"network-request-failed"))},KR(`${vY()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sd=null,e})}let sd=null;function PX(t){return sd=sd||CX(t),sd}/**
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
 */const AX=new fc(5e3,15e3),kX="__/auth/iframe",RX="emulator/auth/iframe",OX={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NX=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $X(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?d_(e,RX):`https://${t.config.authDomain}/${kX}`,r={apiKey:e.apiKey,appName:t.name,v:Da},i=NX.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${cc(r).slice(1)}`}async function DX(t){const e=await PX(t),n=vr().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:$X(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OX,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=gr(t,"network-request-failed"),a=vr().setTimeout(()=>{o(s)},AX.get());function l(){vr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const jX={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MX=500,LX=600,VX="_blank",FX="http://localhost";class $x{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UX(t,e,n,r=MX,i=LX){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jX),{width:r.toString(),height:i.toString(),top:o,left:s}),u=et().toLowerCase();n&&(a=UR(u)?VX:n),FR(u)&&(e=e||FX,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(aY(u)&&a!=="_self")return zX(e||"",a),new $x(null);const f=window.open(e||"",a,c);G(f,t,"popup-blocked");try{f.focus()}catch{}return new $x(f)}function zX(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BX="__/auth/handler",WX="emulator/auth/handler",HX=encodeURIComponent("fac");async function Dx(t,e,n,r,i,o){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Da,eventId:i};if(e instanceof v_){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",CK(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(e instanceof hc){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${HX}=${encodeURIComponent(l)}`:"";return`${qX(t)}?${cc(a).slice(1)}${u}`}function qX({config:t}){return t.emulator?d_(t,WX):`https://${t.authDomain}/${BX}`}/**
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
 */const Mg="webStorageSupport";class GX{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n2,this._completeRedirectFn=vX,this._overrideRedirectResult=pX}async _openPopup(e,n,r,i){var o;zr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Dx(e,n,r,My(),i);return UX(e,s,y_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Dx(e,n,r,My(),i);return YY(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(zr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DX(e),r=new _X(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mg,{type:Mg},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Mg];s!==void 0&&n(!!s),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xX(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qR()||p_()||zp()}}const KX=GX;var jx="@firebase/auth",Mx="1.6.0";/**
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
 */class QX{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YX(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XX(t){ua(new $o("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;G(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GR(t)},u=new pY(r,i,o,l);return bY(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ua(new $o("auth-internal",e=>{const n=Qi(e.getProvider("auth").getImmediate());return(r=>new QX(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ni(jx,Mx,YX(t)),Ni(jx,Mx,"esm2017")}/**
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
 */const JX=5*60,ZX=xR("authIdTokenMaxAge")||JX;let Lx=null;const eJ=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZX)return;const i=n==null?void 0:n.token;Lx!==i&&(Lx=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tJ(t=AR()){const e=c_(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SY(t,{popupRedirectResolver:KX,persistence:[oX,GY,n2]}),r=xR("authTokenSyncURL");if(r){const o=eJ(r);UY(n,o,()=>o(n.currentUser)),FY(n,s=>o(s))}const i=SR("auth");return i&&xY(n,`http://${i}`),n}function nJ(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mY({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=gr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",nJ().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XX("Browser");var rJ=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,w_=w_||{},Q=rJ||self;function qp(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function mc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iJ(t){return Object.prototype.hasOwnProperty.call(t,Lg)&&t[Lg]||(t[Lg]=++oJ)}var Lg="closure_uid_"+(1e9*Math.random()>>>0),oJ=0;function sJ(t,e,n){return t.call.apply(t.bind,arguments)}function aJ(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Mt=sJ:Mt=aJ,Mt.apply(null,arguments)}function uf(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function mt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[i].apply(r,s)}}function Yi(){this.s=this.s,this.o=this.o}var lJ=0;Yi.prototype.s=!1;Yi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),lJ!=0)&&iJ(this)};Yi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const c2=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function E_(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Vx(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qp(r)){const i=t.length||0,o=r.length||0;t.length=i+o;for(let s=0;s<o;s++)t[i+s]=r[s]}else t.push(r)}}function Lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Lt.prototype.h=function(){this.defaultPrevented=!0};var uJ=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Q.addEventListener("test",n,e),Q.removeEventListener("test",n,e)}catch{}return t}();function Ru(t){return/^[\s\xa0]*$/.test(t)}function Gp(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function lr(t){return Gp().indexOf(t)!=-1}function S_(t){return S_[" "](t),t}S_[" "]=function(){};function cJ(t,e){var n=nZ;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var fJ=lr("Opera"),ca=lr("Trident")||lr("MSIE"),f2=lr("Edge"),Fy=f2||ca,d2=lr("Gecko")&&!(Gp().toLowerCase().indexOf("webkit")!=-1&&!lr("Edge"))&&!(lr("Trident")||lr("MSIE"))&&!lr("Edge"),dJ=Gp().toLowerCase().indexOf("webkit")!=-1&&!lr("Edge");function h2(){var t=Q.document;return t?t.documentMode:void 0}var Uy;e:{var Vg="",Fg=function(){var t=Gp();if(d2)return/rv:([^\);]+)(\)|;)/.exec(t);if(f2)return/Edge\/([\d\.]+)/.exec(t);if(ca)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dJ)return/WebKit\/(\S+)/.exec(t);if(fJ)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fg&&(Vg=Fg?Fg[1]:""),ca){var Ug=h2();if(Ug!=null&&Ug>parseFloat(Vg)){Uy=String(Ug);break e}}Uy=Vg}var zy;if(Q.document&&ca){var Fx=h2();zy=Fx||parseInt(Uy,10)||void 0}else zy=void 0;var hJ=zy;function Ou(t,e){if(Lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(d2){e:{try{S_(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pJ[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ou.$.h.call(this)}}mt(Ou,Lt);var pJ={2:"touch",3:"pen",4:"mouse"};Ou.prototype.h=function(){Ou.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var gc="closure_listenable_"+(1e6*Math.random()|0),mJ=0;function gJ(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++mJ,this.fa=this.ia=!1}function Kp(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function b_(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function vJ(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function p2(t){const e={};for(const n in t)e[n]=t[n];return e}const Ux="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m2(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<Ux.length;o++)n=Ux[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Qp(t){this.src=t,this.g={},this.h=0}Qp.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=Wy(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new gJ(e,this.src,o,!!r,i),e.ia=n,t.push(e)),e};function By(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=c2(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(Kp(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Wy(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}var x_="closure_lm_"+(1e6*Math.random()|0),zg={};function g2(t,e,n,r,i){if(r&&r.once)return y2(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)g2(t,e[o],n,r,i);return null}return n=C_(n),t&&t[gc]?t.O(e,n,mc(r)?!!r.capture:!!r,i):v2(t,e,n,!1,r,i)}function v2(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=mc(i)?!!i.capture:!!i,a=I_(t);if(a||(t[x_]=a=new Qp(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=yJ(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)uJ||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(w2(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yJ(){function t(n){return e.call(t.src,t.listener,n)}const e=_J;return t}function y2(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)y2(t,e[o],n,r,i);return null}return n=C_(n),t&&t[gc]?t.P(e,n,mc(r)?!!r.capture:!!r,i):v2(t,e,n,!0,r,i)}function _2(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)_2(t,e[o],n,r,i);else r=mc(r)?!!r.capture:!!r,n=C_(n),t&&t[gc]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=Wy(o,n,r,i),-1<n&&(Kp(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=I_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Wy(e,n,r,i)),(n=-1<t?e[t]:null)&&T_(n))}function T_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[gc])By(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(w2(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=I_(e))?(By(n,t),n.h==0&&(n.src=null,e[x_]=null)):Kp(t)}}}function w2(t){return t in zg?zg[t]:zg[t]="on"+t}function _J(t,e){if(t.fa)t=!0;else{e=new Ou(e,this);var n=t.listener,r=t.la||t.src;t.ia&&T_(t),t=n.call(r,e)}return t}function I_(t){return t=t[x_],t instanceof Qp?t:null}var Bg="__closure_events_fn_"+(1e9*Math.random()>>>0);function C_(t){return typeof t=="function"?t:(t[Bg]||(t[Bg]=function(e){return t.handleEvent(e)}),t[Bg])}function ht(){Yi.call(this),this.i=new Qp(this),this.S=this,this.J=null}mt(ht,Yi);ht.prototype[gc]=!0;ht.prototype.removeEventListener=function(t,e,n,r){_2(this,t,e,n,r)};function Tt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Lt(e,t);else if(e instanceof Lt)e.target=e.target||t;else{var i=e;e=new Lt(r,t),m2(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=cf(s,r,!0,e)&&i}if(s=e.g=t,i=cf(s,r,!0,e)&&i,i=cf(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=cf(s,r,!1,e)&&i}ht.prototype.N=function(){if(ht.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Kp(n[r]);delete t.g[e],t.h--}}this.J=null};ht.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ht.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function cf(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&By(t.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var P_=Q.JSON.stringify;class wJ{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function EJ(){var t=A_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class SJ{constructor(){this.h=this.g=null}add(e,n){const r=E2.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var E2=new wJ(()=>new bJ,t=>t.reset());class bJ{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xJ(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function TJ(t){Q.setTimeout(()=>{throw t},0)}let Nu,$u=!1,A_=new SJ,S2=()=>{const t=Q.Promise.resolve(void 0);Nu=()=>{t.then(IJ)}};var IJ=()=>{for(var t;t=EJ();){try{t.h.call(t.g)}catch(n){TJ(n)}var e=E2;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$u=!1};function Yp(t,e){ht.call(this),this.h=t||1,this.g=e||Q,this.j=Mt(this.qb,this),this.l=Date.now()}mt(Yp,ht);$=Yp.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Tt(this,"tick"),this.ga&&(k_(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function k_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){Yp.$.N.call(this),k_(this),delete this.g};function R_(t,e,n){if(typeof t=="function")n&&(t=Mt(t,n));else if(t&&typeof t.handleEvent=="function")t=Mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function b2(t){t.g=R_(()=>{t.g=null,t.i&&(t.i=!1,b2(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CJ extends Yi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:b2(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Du(t){Yi.call(this),this.h=t,this.g={}}mt(Du,Yi);var zx=[];function x2(t,e,n,r){Array.isArray(n)||(n&&(zx[0]=n.toString()),n=zx);for(var i=0;i<n.length;i++){var o=g2(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function T2(t){b_(t.g,function(e,n){this.g.hasOwnProperty(n)&&T_(e)},t),t.g={}}Du.prototype.N=function(){Du.$.N.call(this),T2(this)};Du.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xp(){this.g=!0}Xp.prototype.Ea=function(){this.g=!1};function PJ(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function AJ(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+s})}function Is(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RJ(t,n)+(r?" "+r:"")})}function kJ(t,e){t.info(function(){return"TIMEOUT: "+e})}Xp.prototype.info=function(){};function RJ(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return P_(n)}catch{return e}}var Ko={},Bx=null;function Jp(){return Bx=Bx||new ht}Ko.Ta="serverreachability";function I2(t){Lt.call(this,Ko.Ta,t)}mt(I2,Lt);function ju(t){const e=Jp();Tt(e,new I2(e))}Ko.STAT_EVENT="statevent";function C2(t,e){Lt.call(this,Ko.STAT_EVENT,t),this.stat=e}mt(C2,Lt);function Wt(t){const e=Jp();Tt(e,new C2(e,t))}Ko.Ua="timingevent";function P2(t,e){Lt.call(this,Ko.Ua,t),this.size=e}mt(P2,Lt);function vc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Zp={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},A2={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function O_(){}O_.prototype.h=null;function Wx(t){return t.h||(t.h=t.i())}function k2(){}var yc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function N_(){Lt.call(this,"d")}mt(N_,Lt);function $_(){Lt.call(this,"c")}mt($_,Lt);var Hy;function em(){}mt(em,O_);em.prototype.g=function(){return new XMLHttpRequest};em.prototype.i=function(){return{}};Hy=new em;function _c(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Du(this),this.P=OJ,t=Fy?125:void 0,this.V=new Yp(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new R2}function R2(){this.i=null,this.g="",this.h=!1}var OJ=45e3,O2={},qy={};$=_c.prototype;$.setTimeout=function(t){this.P=t};function Gy(t,e,n){t.L=1,t.A=nm(Br(e)),t.u=n,t.S=!0,N2(t,null)}function N2(t,e){t.G=Date.now(),wc(t),t.B=Br(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),U2(n.i,"t",r),t.o=0,n=t.l.J,t.h=new R2,t.g=lO(t.l,n?e:null,!t.u),0<t.O&&(t.M=new CJ(Mt(t.Pa,t,t.g),t.O)),x2(t.U,t.g,"readystatechange",t.nb),e=t.I?p2(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ju(),PJ(t.j,t.v,t.B,t.m,t.W,t.u)}$.nb=function(t){t=t.target;const e=this.M;e&&ur(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const c=ur(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||Fy||this.g&&(this.h.h||this.g.ja()||Kx(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?ju(3):ju(2)),tm(this);var n=this.g.da();this.ca=n;t:if($2(this)){var r=Kx(this.g);t="";var i=r.length,o=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mo(this),Bl(this);var s="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.length=0,this.h.g+=t,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,AJ(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ru(a)){var u=a;break t}}u=null}if(n=u)Is(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ky(this,n);else{this.i=!1,this.s=3,Wt(12),mo(this),Bl(this);break e}}this.S?(D2(this,c,s),Fy&&this.i&&c==3&&(x2(this.U,this.V,"tick",this.mb),this.V.start())):(Is(this.j,this.m,s,null),Ky(this,s)),c==4&&mo(this),this.i&&!this.J&&(c==4?iO(this.l,this):(this.i=!1,wc(this)))}else ZJ(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.s=3,Wt(12)):(this.s=0,Wt(13)),mo(this),Bl(this)}}}catch{}finally{}};function $2(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function D2(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=NJ(t,n),i==qy){e==4&&(t.s=4,Wt(14),r=!1),Is(t.j,t.m,null,"[Incomplete Response]");break}else if(i==O2){t.s=4,Wt(15),Is(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Is(t.j,t.m,i,null),Ky(t,i);$2(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),F_(e),e.M=!0,Wt(11))):(Is(t.j,t.m,n,"[Invalid Chunked Response]"),mo(t),Bl(t))}$.mb=function(){if(this.g){var t=ur(this.g),e=this.g.ja();this.o<e.length&&(tm(this),D2(this,t,e),this.i&&t!=4&&wc(this))}};function NJ(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?qy:(n=Number(e.substring(n,r)),isNaN(n)?O2:(r+=1,r+n>e.length?qy:(e=e.slice(r,r+n),t.o=r+n,e)))}$.cancel=function(){this.J=!0,mo(this)};function wc(t){t.Y=Date.now()+t.P,j2(t,t.P)}function j2(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=vc(Mt(t.lb,t),e)}function tm(t){t.C&&(Q.clearTimeout(t.C),t.C=null)}$.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(kJ(this.j,this.B),this.L!=2&&(ju(),Wt(17)),mo(this),this.s=2,Bl(this)):j2(this,this.Y-t)};function Bl(t){t.l.H==0||t.J||iO(t.l,t)}function mo(t){tm(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,k_(t.V),T2(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ky(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Qy(n.i,t))){if(!t.K&&Qy(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ah(n),sm(n);else break e;V_(n),Wt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=vc(Mt(n.ib,n),6e3));if(1>=W2(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else go(n,11)}else if((t.K||n.g==t)&&ah(n),!Ru(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var o=r.i;o.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(D_(o,o.h),o.h=null))}if(r.F){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,Ie(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=t;if(r.wa=aO(r,r.J?r.pa:null,r.Y),s.K){H2(r.i,s);var a=s,l=r.L;l&&a.setTimeout(l),a.C&&(tm(a),wc(a)),r.g=s}else nO(r);0<n.j.length&&am(n)}else u[0]!="stop"&&u[0]!="close"||go(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?go(n,7):L_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ju(4)}catch{}}function $J(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qp(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function DJ(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qp(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function M2(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qp(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=DJ(t),r=$J(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}var L2=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jJ(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Co(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Co){this.h=t.h,oh(this,t.j),this.s=t.s,this.g=t.g,sh(this,t.m),this.l=t.l;var e=t.i,n=new Mu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hx(this,n),this.o=t.o}else t&&(e=String(t).match(L2))?(this.h=!1,oh(this,e[1]||"",!0),this.s=Sl(e[2]||""),this.g=Sl(e[3]||"",!0),sh(this,e[4]),this.l=Sl(e[5]||"",!0),Hx(this,e[6]||"",!0),this.o=Sl(e[7]||"")):(this.h=!1,this.i=new Mu(null,this.h))}Co.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bl(e,qx,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(bl(e,qx,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(bl(n,n.charAt(0)=="/"?VJ:LJ,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bl(n,UJ)),t.join("")};function Br(t){return new Co(t)}function oh(t,e,n){t.j=n?Sl(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hx(t,e,n){e instanceof Mu?(t.i=e,zJ(t.i,t.h)):(n||(e=bl(e,FJ)),t.i=new Mu(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function nm(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sl(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bl(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MJ),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MJ(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qx=/[#\/\?@]/g,LJ=/[#\?:]/g,VJ=/[#\?]/g,FJ=/[#\?@]/g,UJ=/#/g;function Mu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xi(t){t.g||(t.g=new Map,t.h=0,t.i&&jJ(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=Mu.prototype;$.add=function(t,e){Xi(this),this.i=null,t=Ma(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function V2(t,e){Xi(t),e=Ma(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function F2(t,e){return Xi(t),e=Ma(t,e),t.g.has(e)}$.forEach=function(t,e){Xi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.ta=function(){Xi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let o=0;o<i.length;o++)n.push(e[r])}return n};$.Z=function(t){Xi(this);let e=[];if(typeof t=="string")F2(this,t)&&(e=e.concat(this.g.get(Ma(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Xi(this),this.i=null,t=Ma(this,t),F2(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function U2(t,e,n){V2(t,e),0<n.length&&(t.i=null,t.g.set(Ma(t,e),E_(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function Ma(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zJ(t,e){e&&!t.j&&(Xi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(V2(this,r),U2(this,i,n))},t)),t.j=e}var BJ=class{constructor(t,e){this.g=t,this.map=e}};function z2(t){this.l=t||WJ,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WJ=10;function B2(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function W2(t){return t.h?1:t.g?t.g.size:0}function Qy(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function D_(t,e){t.g?t.g.add(e):t.h=e}function H2(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}z2.prototype.cancel=function(){if(this.i=q2(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function q2(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return E_(t.i)}var HJ=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function qJ(){this.g=new HJ}function GJ(t,e,n){const r=n||"";try{M2(t,function(i,o){let s=i;mc(i)&&(s=P_(i)),e.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function KJ(t,e){const n=new Xp;if(Q.Image){const r=new Image;r.onload=uf(ff,n,r,"TestLoadImage: loaded",!0,e),r.onerror=uf(ff,n,r,"TestLoadImage: error",!1,e),r.onabort=uf(ff,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=uf(ff,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ff(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function rm(t){this.l=t.ec||null,this.j=t.ob||!1}mt(rm,O_);rm.prototype.g=function(){return new im(this.l,this.j)};rm.prototype.i=function(t){return function(){return t}}({});function im(t,e){ht.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=j_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}mt(im,ht);var j_=0;$=im.prototype;$.open=function(t,e){if(this.readyState!=j_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Lu(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ec(this)),this.readyState=j_};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Lu(this)),this.g&&(this.readyState=3,Lu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;G2(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function G2(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ec(this):Lu(this),this.readyState==3&&G2(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Ec(this))};$.Ya=function(t){this.g&&(this.response=t,Ec(this))};$.ka=function(){this.g&&Ec(this)};function Ec(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Lu(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Lu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(im.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var QJ=Q.JSON.parse;function Be(t){ht.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=K2,this.L=this.M=!1}mt(Be,ht);var K2="",YJ=/^https?$/i,XJ=["POST","PUT"];$=Be.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hy.g(),this.C=this.u?Wx(this.u):Wx(Hy),this.g.onreadystatechange=Mt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){Gx(this,o);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=c2(XJ,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{X2(this),0<this.B&&((this.L=JJ(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Mt(this.ua,this)):this.A=R_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Gx(this,o)}};function JJ(t){return ca&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof w_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tt(this,"timeout"),this.abort(8))};function Gx(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Q2(t),om(t)}function Q2(t){t.F||(t.F=!0,Tt(t,"complete"),Tt(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Tt(this,"complete"),Tt(this,"abort"),om(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),om(this,!0)),Be.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?Y2(this):this.kb())};$.kb=function(){Y2(this)};function Y2(t){if(t.h&&typeof w_<"u"&&(!t.C[1]||ur(t)!=4||t.da()!=2)){if(t.v&&ur(t)==4)R_(t.La,0,t);else if(Tt(t,"readystatechange"),ur(t)==4){t.h=!1;try{const s=t.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=s===0){var i=String(t.I).match(L2)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),r=!YJ.test(i?i.toLowerCase():"")}n=r}if(n)Tt(t,"complete"),Tt(t,"success");else{t.m=6;try{var o=2<ur(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Q2(t)}}finally{om(t)}}}}function om(t,e){if(t.g){X2(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Tt(t,"ready");try{n.onreadystatechange=r}catch{}}}function X2(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}$.isActive=function(){return!!this.g};function ur(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),QJ(e)}};function Kx(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case K2:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ZJ(t){const e={};t=(t.g&&2<=ur(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ru(t[r]))continue;var n=xJ(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}vJ(e,function(r){return r.join(", ")})}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function J2(t){let e="";return b_(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function M_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=J2(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function ul(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Z2(t){this.Ga=0,this.j=[],this.l=new Xp,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ul("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ul("baseRetryDelayMs",5e3,t),this.hb=ul("retryDelaySeedMs",1e4,t),this.eb=ul("forwardChannelMaxRetries",2,t),this.xa=ul("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new z2(t&&t.concurrentRequestLimit),this.Ja=new qJ,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}$=Z2.prototype;$.ra=8;$.H=1;function L_(t){if(eO(t),t.H==3){var e=t.W++,n=Br(t.I);if(Ie(n,"SID",t.K),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),Sc(t,n),e=new _c(t,t.l,e),e.L=2,e.A=nm(Br(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.A,n=!0),n||(e.g=lO(e.l,null),e.g.ha(e.A)),e.G=Date.now(),wc(e)}sO(t)}function sm(t){t.g&&(F_(t),t.g.cancel(),t.g=null)}function eO(t){sm(t),t.u&&(Q.clearTimeout(t.u),t.u=null),ah(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function am(t){if(!B2(t.i)&&!t.m){t.m=!0;var e=t.Na;Nu||S2(),$u||(Nu(),$u=!0),A_.add(e,t),t.C=0}}function eZ(t,e){return W2(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=vc(Mt(t.Na,t,e),oO(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new _c(this,this.l,t);let o=this.s;if(this.U&&(o?(o=p2(o),m2(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tO(this,i,e),n=Br(this.I),Ie(n,"RID",t),Ie(n,"CVER",22),this.F&&Ie(n,"X-HTTP-Session-Id",this.F),Sc(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(J2(o)))+"&"+e:this.o&&M_(n,this.o,o)),D_(this.i,i),this.bb&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",e),Ie(n,"SID","null"),i.aa=!0,Gy(i,n,null)):Gy(i,n,e),this.H=2}}else this.H==3&&(t?Qx(this,t):this.j.length==0||B2(this.i)||Qx(this))};function Qx(t,e){var n;e?n=e.m:n=t.W++;const r=Br(t.I);Ie(r,"SID",t.K),Ie(r,"RID",n),Ie(r,"AID",t.V),Sc(t,r),t.o&&t.s&&M_(r,t.o,t.s),n=new _c(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=tO(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),D_(t.i,n),Gy(n,r,e)}function Sc(t,e){t.na&&b_(t.na,function(n,r){Ie(e,r,n)}),t.h&&M2({},function(n,r){Ie(e,r,n)})}function tO(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Mt(t.h.Va,t.h,t):null;e:{var i=t.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=o,0>u)o=Math.max(0,i[l].g-100),a=!1;else try{GJ(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function nO(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Nu||S2(),$u||(Nu(),$u=!0),A_.add(e,t),t.A=0}}function V_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=vc(Mt(t.Ma,t),oO(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,rO(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=vc(Mt(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Wt(10),sm(this),rO(this))};function F_(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function rO(t){t.g=new _c(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Br(t.wa);Ie(e,"RID","rpc"),Ie(e,"SID",t.K),Ie(e,"AID",t.V),Ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ie(e,"TO",t.qa),Ie(e,"TYPE","xmlhttp"),Sc(t,e),t.o&&t.s&&M_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=nm(Br(e)),n.u=null,n.S=!0,N2(n,t)}$.ib=function(){this.v!=null&&(this.v=null,sm(this),V_(this),Wt(19))};function ah(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function iO(t,e){var n=null;if(t.g==e){ah(t),F_(t),t.g=null;var r=2}else if(Qy(t.i,e))n=e.F,H2(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Jp(),Tt(r,new P2(r,n)),am(t)}else nO(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&eZ(t,e)||r==2&&V_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:go(t,5);break;case 4:go(t,10);break;case 3:go(t,6);break;default:go(t,2)}}}function oO(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function go(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Mt(t.pb,t);n||(n=new Co("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||oh(n,"https"),nm(n)),KJ(n.toString(),r)}else Wt(2);t.H=0,t.h&&t.h.za(e),sO(t),eO(t)}$.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Wt(2)):(this.l.info("Failed to ping google.com"),Wt(1))};function sO(t){if(t.H=0,t.ma=[],t.h){const e=q2(t.i);(e.length!=0||t.j.length!=0)&&(Vx(t.ma,e),Vx(t.ma,t.j),t.i.i.length=0,E_(t.j),t.j.length=0),t.h.ya()}}function aO(t,e,n){var r=n instanceof Co?Br(n):new Co(n);if(r.g!="")e&&(r.g=e+"."+r.g),sh(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new Co(null);r&&oh(o,r),e&&(o.g=e),i&&sh(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&Ie(r,n,e),Ie(r,"VER",t.ra),Sc(t,r),r}function lO(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Be(new rm({ob:n})):new Be(t.va),e.Oa(t.J),e}$.isActive=function(){return!!this.h&&this.h.isActive(this)};function uO(){}$=uO.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.isActive=function(){return!0};$.Va=function(){};function lh(){if(ca&&!(10<=Number(hJ)))throw Error("Environmental error: no available transport.")}lh.prototype.g=function(t,e){return new pn(t,e)};function pn(t,e){ht.call(this),this.g=new Z2(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ru(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ru(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new La(this)}mt(pn,ht);pn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Wt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=aO(t,null,t.Y),am(t)};pn.prototype.close=function(){L_(this.g)};pn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=P_(t),t=n);e.j.push(new BJ(e.fb++,t)),e.H==3&&am(e)};pn.prototype.N=function(){this.g.h=null,delete this.j,L_(this.g),delete this.g,pn.$.N.call(this)};function cO(t){N_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}mt(cO,N_);function fO(){$_.call(this),this.status=1}mt(fO,$_);function La(t){this.g=t}mt(La,uO);La.prototype.Ba=function(){Tt(this.g,"a")};La.prototype.Aa=function(t){Tt(this.g,new cO(t))};La.prototype.za=function(t){Tt(this.g,new fO)};La.prototype.ya=function(){Tt(this.g,"b")};function tZ(){this.blockSize=-1}function Kn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}mt(Kn,tZ);Kn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wg(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}Kn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(i==0)for(;o<=n;)Wg(this,t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){Wg(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){Wg(this,r),i=0;break}}this.h=i,this.i+=e};Kn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=t[i]|0;r&&o==e||(n[i]=o,r=!1)}this.g=n}var nZ={};function U_(t){return-128<=t&&128>t?cJ(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function cr(t){if(isNaN(t)||!isFinite(t))return Us;if(0>t)return St(cr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Yy;return new me(e,0)}function dO(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return St(dO(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=cr(Math.pow(e,8)),r=Us,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=cr(Math.pow(e,o)),r=r.R(o).add(cr(s))):(r=r.R(n),r=r.add(cr(s)))}return r}var Yy=4294967296,Us=U_(0),Xy=U_(1),Yx=U_(16777216);$=me.prototype;$.ea=function(){if(xn(this))return-St(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Yy+r)*e,e*=Yy}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if($r(this))return"0";if(xn(this))return"-"+St(this).toString(t);for(var e=cr(Math.pow(t,6)),n=this,r="";;){var i=ch(n,e).g;n=uh(n,i.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,$r(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function $r(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function xn(t){return t.h==-1}$.X=function(t){return t=uh(this,t),xn(t)?-1:$r(t)?0:1};function St(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(Xy)}$.abs=function(){return xn(this)?St(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(this.D(i)&65535)+(t.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new me(n,n[n.length-1]&-2147483648?-1:0)};function uh(t,e){return t.add(St(e))}$.R=function(t){if($r(this)||$r(t))return Us;if(xn(this))return xn(t)?St(this).R(St(t)):St(St(this).R(t));if(xn(t))return St(this.R(St(t)));if(0>this.X(Yx)&&0>t.X(Yx))return cr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=s*l,df(n,2*r+2*i),n[2*r+2*i+1]+=o*l,df(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,df(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,df(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function df(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function cl(t,e){this.g=t,this.h=e}function ch(t,e){if($r(e))throw Error("division by zero");if($r(t))return new cl(Us,Us);if(xn(t))return e=ch(St(t),e),new cl(St(e.g),St(e.h));if(xn(e))return e=ch(t,St(e)),new cl(St(e.g),e.h);if(30<t.g.length){if(xn(t)||xn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Xy,r=e;0>=r.X(t);)n=Xx(n),r=Xx(r);var i=ss(n,1),o=ss(r,1);for(r=ss(r,2),n=ss(n,2);!$r(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=ss(r,1),n=ss(n,1)}return e=uh(t,i.R(e)),new cl(i,e)}for(i=Us;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=cr(n),s=o.R(e);xn(s)||0<s.X(t);)n-=r,o=cr(n),s=o.R(e);$r(o)&&(o=Xy),i=i.add(o),t=uh(t,s)}return new cl(i,t)}$.gb=function(t){return ch(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function Xx(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function ss(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new me(i,t.h)}lh.prototype.createWebChannel=lh.prototype.g;pn.prototype.send=pn.prototype.u;pn.prototype.open=pn.prototype.m;pn.prototype.close=pn.prototype.close;Zp.NO_ERROR=0;Zp.TIMEOUT=8;Zp.HTTP_ERROR=6;A2.COMPLETE="complete";k2.EventType=yc;yc.OPEN="a";yc.CLOSE="b";yc.ERROR="c";yc.MESSAGE="d";ht.prototype.listen=ht.prototype.O;Be.prototype.listenOnce=Be.prototype.P;Be.prototype.getLastError=Be.prototype.Sa;Be.prototype.getLastErrorCode=Be.prototype.Ia;Be.prototype.getStatus=Be.prototype.da;Be.prototype.getResponseJson=Be.prototype.Wa;Be.prototype.getResponseText=Be.prototype.ja;Be.prototype.send=Be.prototype.ha;Be.prototype.setWithCredentials=Be.prototype.Oa;Kn.prototype.digest=Kn.prototype.l;Kn.prototype.reset=Kn.prototype.reset;Kn.prototype.update=Kn.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=cr;me.fromString=dO;var rZ=function(){return new lh},iZ=function(){return Jp()},Hg=Zp,oZ=A2,sZ=Ko,Jx={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},hf=k2,aZ=Be,lZ=Kn,zs=me;const Zx="@firebase/firestore";/**
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
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
 */let Va="10.8.0";/**
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
 */const Lo=new l_("@firebase/firestore");function fl(){return Lo.logLevel}function N(t,...e){if(Lo.logLevel<=ie.DEBUG){const n=e.map(z_);Lo.debug(`Firestore (${Va}): ${t}`,...n)}}function Er(t,...e){if(Lo.logLevel<=ie.ERROR){const n=e.map(z_);Lo.error(`Firestore (${Va}): ${t}`,...n)}}function fa(t,...e){if(Lo.logLevel<=ie.WARN){const n=e.map(z_);Lo.warn(`Firestore (${Va}): ${t}`,...n)}}function z_(t){if(typeof t=="string")return t;try{/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Va}) INTERNAL ASSERTION FAILED: `+t;throw Er(e),new Error(e)}function we(t,e){t||K()}function J(t,e){return t}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Xr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hO{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uZ{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class cZ{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fZ{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new yr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new hO(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new $t(e)}}class dZ{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hZ{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dZ(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pZ{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mZ{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new pZ(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gZ(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class pO{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gZ(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function da(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new st(0,0))}static max(){return new Y(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vu{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends Vu{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const vZ=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Vu{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return vZ.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Ce.fromString(e))}static fromName(e){return new W(Ce.fromString(e).popFirst(5))}static empty(){return new W(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Ce(e.slice()))}}function yZ(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new Li(i,W.empty(),e)}function _Z(t){return new Li(t.readTime,t.key,-1)}class Li{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Li(Y.min(),W.empty(),-1)}static max(){return new Li(Y.max(),W.empty(),-1)}}function wZ(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const EZ="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SZ{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bc(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==EZ)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(e[u]).next(c=>{s[u]=c,++a,a===o&&r(s)},c=>i(c))}})}static doWhile(e,n){return new P((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}/**
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
 */class B_{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new yr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Wl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=W_(r.target.error);this.V.reject(new Wl(e,i))}}static open(e,n,r,i){try{return new B_(n,e.transaction(i,r))}catch(o){throw new Wl(n,o)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new xZ(n)}}class vo{constructor(e,n,r){this.name=e,this.version=n,this.p=r,vo.S(et())===12.2&&Er("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),so(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!TR())return!1;if(vo.C())return!0;const e=et(),n=vo.S(e),r=0<n&&n<10,i=vo.v(e),o=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const s=o.target.result;n(s)},i.onblocked=()=>{r(new Wl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const s=o.target.error;s.name==="VersionError"?r(new M(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):s.name==="InvalidStateError"?r(new M(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+s)):r(new Wl(e,s))},i.onupgradeneeded=o=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const s=o.target.result;this.p.N(s,i.transaction,o.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const o=n==="readonly";let s=0;for(;;){++s;try{this.db=await this.O(e);const a=B_.open(this.db,e,o?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),P.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&s<3;if(N("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class bZ{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return so(this.k.delete())}}class Wl extends M{constructor(e,n){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function xc(t){return t.name==="IndexedDbTransactionError"}class xZ{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),so(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),so(this.store.add(e))}get(e){return so(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),so(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),so(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(r.range);return new P((s,a)=>{o.onerror=l=>{a(l.target.error)},o.onsuccess=l=>{s(l.target.result)}})}{const o=this.cursor(r),s=[];return this.G(o,(a,l)=>{s.push(l)}).next(()=>s)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new P((i,o)=>{r.onerror=s=>{o(s.target.error)},r.onsuccess=s=>{i(s.target.result)}})}H(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(o,s,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new P((r,i)=>{n.onerror=o=>{const s=W_(o.target.error);i(s)},n.onsuccess=o=>{const s=o.target.result;s?e(s.primaryKey,s.value).next(a=>{a?s.continue():r()}):r()}})}G(e,n){const r=[];return new P((i,o)=>{e.onerror=s=>{o(s.target.error)},e.onsuccess=s=>{const a=s.target.result;if(!a)return void i();const l=new bZ(a),u=n(a.primaryKey,a.value,l);if(u instanceof P){const c=u.catch(f=>(l.done(),P.reject(f)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>P.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function so(t){return new P((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=W_(r.target.error);n(i)}})}let eT=!1;function W_(t){const e=vo.S(et());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eT||(eT=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class H_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}H_._e=-1;function lm(t){return t==null}function fh(t){return t===0&&1/t==-1/0}function TZ(t){return typeof t=="number"&&Number.isInteger(t)&&!fh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function tT(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||wt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pf(this.root,e,this.comparator,!1)}getReverseIterator(){return new pf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pf(this.root,e,this.comparator,!0)}}class pf{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??wt.RED,this.left=i??wt.EMPTY,this.right=o??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new wt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return wt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,o){return this}insert(e,n,r){return new wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nT(this.data.getIterator())}getIteratorFrom(e){return new nT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class nT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Un([])}unionWith(e){let n=new It(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return da(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gO extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new gO("Invalid base64 string: "+o):o}}(e);return new Ft(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const IZ=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(t){if(we(!!t),typeof t=="string"){let e=0;const n=IZ.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vo(t){return typeof t=="string"?Ft.fromBase64String(t):Ft.fromUint8Array(t)}/**
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
 */function q_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function G_(t){const e=t.mapValue.fields.__previous_value__;return q_(e)?G_(e):e}function Fu(t){const e=Vi(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
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
 */class CZ{constructor(e,n,r,i,o,s,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Uu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Uu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Uu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const mf={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?q_(t)?4:PZ(t)?9007199254740991:10:K()}function Sr(t,e){if(t===e)return!0;const n=Fo(t);if(n!==Fo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fu(t).isEqual(Fu(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Vi(i.timestampValue),a=Vi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Vo(i.bytesValue).isEqual(Vo(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ge(i.geoPointValue.latitude)===Ge(o.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ge(i.integerValue)===Ge(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ge(i.doubleValue),a=Ge(o.doubleValue);return s===a?fh(s)===fh(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return da(t.arrayValue.values||[],e.arrayValue.values||[],Sr);case 10:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(tT(s)!==tT(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Sr(s[l],a[l])))return!1;return!0}(t,e);default:return K()}}function zu(t,e){return(t.values||[]).find(n=>Sr(n,e))!==void 0}function ha(t,e){if(t===e)return 0;const n=Fo(t),r=Fo(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Ge(o.integerValue||o.doubleValue),l=Ge(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return rT(t.timestampValue,e.timestampValue);case 4:return rT(Fu(t),Fu(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(o,s){const a=Vo(o),l=Vo(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ce(a[u],l[u]);if(c!==0)return c}return ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=ce(Ge(o.latitude),Ge(s.latitude));return a!==0?a:ce(Ge(o.longitude),Ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const a=o.values||[],l=s.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ha(a[u],l[u]);if(c)return c}return ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===mf.mapValue&&s===mf.mapValue)return 0;if(o===mf.mapValue)return 1;if(s===mf.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),u=s.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const d=ce(l[f],c[f]);if(d!==0)return d;const p=ha(a[l[f]],u[c[f]]);if(p!==0)return p}return ce(l.length,c.length)}(t.mapValue,e.mapValue);default:throw K()}}function rT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Vi(t),r=Vi(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function pa(t){return Jy(t)}function Jy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Jy(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Jy(n.fields[s])}`;return i+"}"}(t.mapValue):K()}function iT(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zy(t){return!!t&&"integerValue"in t}function K_(t){return!!t&&"arrayValue"in t}function oT(t){return!!t&&"nullValue"in t}function sT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ad(t){return!!t&&"mapValue"in t}function Hl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PZ(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ad(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hl(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Hl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());ad(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ad(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fa(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Tn(Hl(this.value))}}function vO(t){const e=[];return Fa(t.fields,(n,r)=>{const i=new bt([n]);if(ad(r)){const o=vO(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new Un(e)}/**
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
 */class jt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new jt(e,0,Y.min(),Y.min(),Y.min(),Tn.empty(),0)}static newFoundDocument(e,n,r,i){return new jt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new jt(e,2,n,Y.min(),Y.min(),Tn.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,Y.min(),Y.min(),Tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dh{constructor(e,n){this.position=e,this.inclusive=n}}function aT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=W.comparator(W.fromName(s.referenceValue),n.key):r=ha(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function lT(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hh{constructor(e,n="asc"){this.field=e,this.dir=n}}function AZ(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yO{}class Xe extends yO{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RZ(e,n,r):n==="array-contains"?new $Z(e,r):n==="in"?new DZ(e,r):n==="not-in"?new jZ(e,r):n==="array-contains-any"?new MZ(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OZ(e,r):new NZ(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ha(n,this.value)):n!==null&&Fo(this.value)===Fo(n)&&this.matchesComparison(ha(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends yO{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Qn(e,n)}matches(e){return _O(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function _O(t){return t.op==="and"}function wO(t){return kZ(t)&&_O(t)}function kZ(t){for(const e of t.filters)if(e instanceof Qn)return!1;return!0}function e0(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+pa(t.value);if(wO(t))return t.filters.map(e=>e0(e)).join(",");{const e=t.filters.map(n=>e0(n)).join(",");return`${t.op}(${e})`}}function EO(t,e){return t instanceof Xe?function(r,i){return i instanceof Xe&&r.op===i.op&&r.field.isEqual(i.field)&&Sr(r.value,i.value)}(t,e):t instanceof Qn?function(r,i){return i instanceof Qn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&EO(s,i.filters[a]),!0):!1}(t,e):void K()}function SO(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${pa(n.value)}`}(t):t instanceof Qn?function(n){return n.op.toString()+" {"+n.getFilters().map(SO).join(" ,")+"}"}(t):"Filter"}class RZ extends Xe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class OZ extends Xe{constructor(e,n){super(e,"in",n),this.keys=bO("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NZ extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=bO("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bO(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class $Z extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return K_(n)&&zu(n.arrayValue,this.value)}}class DZ extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zu(this.value.arrayValue,n)}}class jZ extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(zu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zu(this.value.arrayValue,n)}}class MZ extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!K_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zu(this.value.arrayValue,r))}}/**
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
 */class LZ{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ce=null}}function uT(t,e=null,n=[],r=[],i=null,o=null,s=null){return new LZ(t,e,n,r,i,o,s)}function Q_(t){const e=J(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>e0(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),lm(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pa(r)).join(",")),e.ce=n}return e.ce}function Y_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AZ(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!EO(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lT(t.startAt,e.startAt)&&lT(t.endAt,e.endAt)}function t0(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Tc{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function VZ(t,e,n,r,i,o,s,a){return new Tc(t,e,n,r,i,o,s,a)}function X_(t){return new Tc(t)}function cT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xO(t){return t.collectionGroup!==null}function ql(t){const e=J(t);if(e.le===null){e.le=[];const n=new Set;for(const o of e.explicitOrderBy)e.le.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new It(bt.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.le.push(new hh(o,r))}),n.has(bt.keyField().canonicalString())||e.le.push(new hh(bt.keyField(),r))}return e.le}function _r(t){const e=J(t);return e.he||(e.he=FZ(e,ql(t))),e.he}function FZ(t,e){if(t.limitType==="F")return uT(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new hh(i.field,o)});const n=t.endAt?new dh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dh(t.startAt.position,t.startAt.inclusive):null;return uT(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function n0(t,e){const n=t.filters.concat([e]);return new Tc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function r0(t,e,n){return new Tc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function um(t,e){return Y_(_r(t),_r(e))&&t.limitType===e.limitType}function TO(t){return`${Q_(_r(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>SO(i)).join(", ")}]`),lm(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>pa(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>pa(i)).join(",")),`Target(${r})`}(_r(t))}; limitType=${t.limitType})`}function cm(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):W.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of ql(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const u=aT(s,a,l);return s.inclusive?u<=0:u<0}(r.startAt,ql(r),i)||r.endAt&&!function(s,a,l){const u=aT(s,a,l);return s.inclusive?u>=0:u>0}(r.endAt,ql(r),i))}(t,e)}function UZ(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function IO(t){return(e,n)=>{let r=!1;for(const i of ql(t)){const o=zZ(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function zZ(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),u=a.data.field(o);return l!==null&&u!==null?ha(l,u):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class Ua{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fa(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return mO(this.inner)}size(){return this.innerSize}}/**
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
 */const BZ=new Le(W.comparator);function Wr(){return BZ}const CO=new Le(W.comparator);function xl(...t){let e=CO;for(const n of t)e=e.insert(n.key,n);return e}function PO(t){let e=CO;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yo(){return Gl()}function AO(){return Gl()}function Gl(){return new Ua(t=>t.toString(),(t,e)=>t.isEqual(e))}const WZ=new Le(W.comparator),HZ=new It(W.comparator);function ne(...t){let e=HZ;for(const n of t)e=e.add(n);return e}const qZ=new It(ce);function GZ(){return qZ}/**
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
 */function kO(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fh(e)?"-0":e}}function RO(t){return{integerValue:""+t}}function KZ(t,e){return TZ(e)?RO(e):kO(t,e)}/**
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
 */class fm{constructor(){this._=void 0}}function QZ(t,e,n){return t instanceof ph?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&q_(o)&&(o=G_(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof Bu?NO(t,e):t instanceof Wu?$O(t,e):function(i,o){const s=OO(i,o),a=fT(s)+fT(i.Ie);return Zy(s)&&Zy(i.Ie)?RO(a):kO(i.serializer,a)}(t,e)}function YZ(t,e,n){return t instanceof Bu?NO(t,e):t instanceof Wu?$O(t,e):n}function OO(t,e){return t instanceof mh?function(r){return Zy(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ph extends fm{}class Bu extends fm{constructor(e){super(),this.elements=e}}function NO(t,e){const n=DO(e);for(const r of t.elements)n.some(i=>Sr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wu extends fm{constructor(e){super(),this.elements=e}}function $O(t,e){let n=DO(e);for(const r of t.elements)n=n.filter(i=>!Sr(i,r));return{arrayValue:{values:n}}}class mh extends fm{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function fT(t){return Ge(t.integerValue||t.doubleValue)}function DO(t){return K_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function XZ(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Bu&&i instanceof Bu||r instanceof Wu&&i instanceof Wu?da(r.elements,i.elements,Sr):r instanceof mh&&i instanceof mh?Sr(r.Ie,i.Ie):r instanceof ph&&i instanceof ph}(t.transform,e.transform)}class JZ{constructor(e,n){this.version=e,this.transformResults=n}}class jr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jr}static exists(e){return new jr(void 0,e)}static updateTime(e){return new jr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ld(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dm{}function jO(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new LO(t.key,jr.none()):new Ic(t.key,t.data,jr.none());{const n=t.data,r=Tn.empty();let i=new It(bt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Qo(t.key,r,new Un(i.toArray()),jr.none())}}function ZZ(t,e,n){t instanceof Ic?function(i,o,s){const a=i.value.clone(),l=hT(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Qo?function(i,o,s){if(!ld(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=hT(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(MO(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Kl(t,e,n,r){return t instanceof Ic?function(o,s,a,l){if(!ld(o.precondition,s))return a;const u=o.value.clone(),c=pT(o.fieldTransforms,l,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qo?function(o,s,a,l){if(!ld(o.precondition,s))return a;const u=pT(o.fieldTransforms,l,s),c=s.data;return c.setAll(MO(o)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(o,s,a){return ld(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function eee(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=OO(r.transform,i||null);o!=null&&(n===null&&(n=Tn.empty()),n.set(r.field,o))}return n||null}function dT(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&da(r,i,(o,s)=>XZ(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ic extends dm{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qo extends dm{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function MO(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hT(t,e,n){const r=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,YZ(s,a,n[i]))}return r}function pT(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,QZ(o,s,e))}return r}class LO extends dm{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tee extends dm{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nee{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&ZZ(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Kl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Kl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=AO();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=jO(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&da(this.mutations,e.mutations,(n,r)=>dT(n,r))&&da(this.baseMutations,e.baseMutations,(n,r)=>dT(n,r))}}class J_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){we(e.mutations.length===r.length);let i=function(){return WZ}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new J_(e,n,r,i)}}/**
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
 */class ree{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iee{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var qe,oe;function oee(t){switch(t){default:return K();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function VO(t){if(t===void 0)return Er("GRPC error has no .code"),C.UNKNOWN;switch(t){case qe.OK:return C.OK;case qe.CANCELLED:return C.CANCELLED;case qe.UNKNOWN:return C.UNKNOWN;case qe.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case qe.INTERNAL:return C.INTERNAL;case qe.UNAVAILABLE:return C.UNAVAILABLE;case qe.UNAUTHENTICATED:return C.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case qe.NOT_FOUND:return C.NOT_FOUND;case qe.ALREADY_EXISTS:return C.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return C.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case qe.ABORTED:return C.ABORTED;case qe.OUT_OF_RANGE:return C.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return C.UNIMPLEMENTED;case qe.DATA_LOSS:return C.DATA_LOSS;default:return K()}}(oe=qe||(qe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function see(){return new TextEncoder}/**
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
 */const aee=new zs([4294967295,4294967295],0);function mT(t){const e=see().encode(t),n=new lZ;return n.update(e),new Uint8Array(n.digest())}function gT(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new zs([n,r],0),new zs([i,o],0)]}class Z_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Tl(`Invalid padding: ${n}`);if(r<0)throw new Tl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Tl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Tl(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=zs.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(zs.fromNumber(r)));return i.compare(aee)===1&&(i=new zs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=mT(e),[r,i]=gT(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);if(!this.Ae(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new Z_(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Te===0)return;const n=mT(e),[r,i]=gT(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);this.Re(s)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Tl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hm{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Cc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hm(Y.min(),i,new Le(ce),Wr(),ne())}}class Cc{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Cc(r,n,ne(),ne(),ne())}}/**
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
 */class ud{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class FO{constructor(e,n){this.targetId=e,this.fe=n}}class UO{constructor(e,n,r=Ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class vT{constructor(){this.ge=0,this.pe=_T(),this.ye=Ft.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ne(),n=ne(),r=ne();return this.pe.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Cc(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=_T()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,we(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class lee{constructor(e){this.Le=e,this.ke=new Map,this.qe=Wr(),this.Qe=yT(),this.Ke=new Le(ce)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const o=i.target;if(t0(o))if(r===0){const s=new W(o.path);this.We(n,s,jt.newNoDocument(s,Y.min()))}else we(r===1);else{const s=this.Ze(n);if(s!==r){const a=this.Xe(e),l=a?this.et(a,e,s):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=Vo(r).toUint8Array()}catch(l){if(l instanceof gO)return fa("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Z_(s,i,o)}catch(l){return fa(l instanceof Tl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.nt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.We(n,o,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((o,s)=>{const a=this.Ye(s);if(a){if(o.current&&t0(a.target)){const l=new W(a.target.path);this.qe.get(l)!==null||this.st(s,l)||this.We(s,l,jt.newNoDocument(l,e))}o.De&&(n.set(s,o.ve()),o.Fe())}});let r=ne();this.Qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.qe.forEach((o,s)=>s.setReadTime(e));const i=new hm(e,n,this.Ke,this.qe,r);return this.qe=Wr(),this.Qe=yT(),this.Ke=new Le(ce),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new vT,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new It(ce),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new vT),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yT(){return new Le(W.comparator)}function _T(){return new Le(W.comparator)}const uee={asc:"ASCENDING",desc:"DESCENDING"},cee={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fee={and:"AND",or:"OR"};class dee{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function i0(t,e){return t.useProto3Json||lm(e)?e:{value:e}}function gh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zO(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hee(t,e){return gh(t,e.toTimestamp())}function wr(t){return we(!!t),Y.fromTimestamp(function(n){const r=Vi(n);return new st(r.seconds,r.nanos)}(t))}function ew(t,e){return o0(t,e).canonicalString()}function o0(t,e){const n=function(i){return new Ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function BO(t){const e=Ce.fromString(t);return we(KO(e)),e}function s0(t,e){return ew(t.databaseId,e.path)}function qg(t,e){const n=BO(e);if(n.get(1)!==t.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(HO(n))}function WO(t,e){return ew(t.databaseId,e)}function pee(t){const e=BO(t);return e.length===4?Ce.emptyPath():HO(e)}function a0(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HO(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wT(t,e,n){return{name:s0(t,e),fields:n.value.mapValue.fields}}function mee(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(u,c){return u.useProto3Json?(we(c===void 0||typeof c=="string"),Ft.fromBase64String(c||"")):(we(c===void 0||c instanceof Uint8Array),Ft.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(u){const c=u.code===void 0?C.UNKNOWN:VO(u.code);return new M(c,u.message||"")}(s);n=new UO(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qg(t,r.document.name),o=wr(r.document.updateTime),s=r.document.createTime?wr(r.document.createTime):Y.min(),a=new Tn({mapValue:{fields:r.document.fields}}),l=jt.newFoundDocument(i,o,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ud(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qg(t,r.document),o=r.readTime?wr(r.readTime):Y.min(),s=jt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new ud([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qg(t,r.document),o=r.removedTargetIds||[];n=new ud([],o,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new iee(i,o),a=r.targetId;n=new FO(a,s)}}return n}function gee(t,e){let n;if(e instanceof Ic)n={update:wT(t,e.key,e.value)};else if(e instanceof LO)n={delete:s0(t,e.key)};else if(e instanceof Qo)n={update:wT(t,e.key,e.data),updateMask:Tee(e.fieldMask)};else{if(!(e instanceof tee))return K();n={verify:s0(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof ph)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Bu)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wu)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof mh)return{fieldPath:s.field.canonicalString(),increment:a.Ie};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:hee(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K()}(t,e.precondition)),n}function vee(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?wr(i.updateTime):wr(o);return s.isEqual(Y.min())&&(s=wr(o)),new JZ(s,i.transformResults||[])}(n,e))):[]}function yee(t,e){return{documents:[WO(t,e.path)]}}function _ee(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=WO(t,i);const o=function(u){if(u.length!==0)return GO(Qn.create(u,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:fs(d.field),direction:See(d.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=i0(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function wee(t){let e=pee(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let o=[];n.where&&(o=function(f){const d=qO(f);return d instanceof Qn&&wO(d)?d.getFilters():[d]}(n.where));let s=[];n.orderBy&&(s=function(f){return f.map(d=>function(v){return new hh(ds(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,lm(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(f){const d=!!f.before,p=f.values||[];return new dh(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const d=!f.before,p=f.values||[];return new dh(p,d)}(n.endAt)),VZ(e,i,s,o,a,"F",l,u)}function Eee(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qO(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ds(n.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ds(n.unaryFilter.field);return Xe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ds(n.unaryFilter.field);return Xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(ds(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qn.create(n.compositeFilter.filters.map(r=>qO(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function See(t){return uee[t]}function bee(t){return cee[t]}function xee(t){return fee[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ds(t){return bt.fromServerFormat(t.fieldPath)}function GO(t){return t instanceof Xe?function(n){if(n.op==="=="){if(sT(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(oT(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sT(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(oT(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:bee(n.op),value:n.value}}}(t):t instanceof Qn?function(n){const r=n.getFilters().map(i=>GO(i));return r.length===1?r[0]:{compositeFilter:{op:xee(n.op),filters:r}}}(t):K()}function Tee(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KO(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _i{constructor(e,n,r,i,o=Y.min(),s=Y.min(),a=Ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new _i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Iee{constructor(e){this.ct=e}}function Cee(t){const e=wee({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?r0(e,e.limit,"L"):e}/**
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
 */class Pee{constructor(){this._n=new Aee}addToCollectionParentIndex(e,n){return this._n.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Li.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Li.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class Aee{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new It(Ce.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new It(Ce.comparator)).toArray()}}/**
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
 */class ma{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ma(0)}static Bn(){return new ma(-1)}}/**
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
 */class kee{constructor(){this.changes=new Ua(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ree{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Oee{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Kl(r.mutation,i,Un.empty(),st.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=yo();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=xl();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=yo();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Wr();const s=Gl(),a=function(){return Gl()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Qo)?o=o.insert(u.key,u):c!==void 0?(s.set(u.key,c.mutation.getFieldMask()),Kl(c.mutation,u,c.mutation.getFieldMask(),st.now())):s.set(u.key,Un.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((u,c)=>s.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new Ree(c,(f=s.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Gl();let i=new Le((s,a)=>s-a),o=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Un.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=AO();c.forEach(d=>{if(!o.has(d)){const p=jO(n.get(d),r.get(d));p!==null&&f.set(d,p),o=o.add(d)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,f))}return P.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return W.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):P.resolve(yo());let a=-1,l=o;return s.next(u=>P.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),o.get(c)?P.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,l,u,ne())).next(c=>({batchId:a,changes:PO(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=xl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=xl();return this.indexManager.getCollectionParents(e,o).next(a=>P.forEach(a,l=>{const u=function(f,d){return new Tc(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((f,d)=>{s=s.insert(f,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,jt.newInvalidDocument(c)))});let a=xl();return s.forEach((l,u)=>{const c=o.get(l);c!==void 0&&Kl(c.mutation,u,Un.empty(),st.now()),cm(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class Nee{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return P.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:wr(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Cee(i.bundledQuery),readTime:wr(i.readTime)}}(n)),P.resolve()}}/**
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
 */class $ee{constructor(){this.overlays=new Le(W.comparator),this.hr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yo();return P.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=yo(),o=n.length+1,s=new W(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Le((u,c)=>u-c);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=o.get(u.largestBatchId);c===null&&(c=yo(),o=o.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=yo(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return P.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new ree(n,r));let o=this.hr.get(n);o===void 0&&(o=ne(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
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
 */class tw{constructor(){this.Pr=new It(ut.Ir),this.Tr=new It(ut.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ut(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new W(new Ce([])),r=new ut(n,e),i=new ut(n,e+1),o=[];return this.Tr.forEachInRange([r,i],s=>{this.Ar(s),o.push(s.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new W(new Ce([])),r=new ut(n,e),i=new ut(n,e+1);let o=ne();return this.Tr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new ut(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return W.comparator(e.key,n.key)||ce(e.pr,n.pr)}static Er(e,n){return ce(e.pr,n.pr)||W.comparator(e.key,n.key)}}/**
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
 */class Dee{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new It(ut.Ir)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new nee(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.wr=this.wr.add(new ut(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(s)}lookupMutationBatch(e,n){return P.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],s=>{const a=this.Sr(s.pr);o.push(a)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new It(ce);return n.forEach(i=>{const o=new ut(i,0),s=new ut(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,s],a=>{r=r.add(a.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;W.isDocumentKey(o)||(o=o.child(""));const s=new ut(new W(o),0);let a=new It(ce);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},s),P.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(n.mutations,i=>{const o=new ut(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ut(n,0),i=this.wr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jee{constructor(e){this.vr=e,this.docs=function(){return new Le(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=Wr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():jt.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Wr();const s=n.path,a=new W(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||wZ(_Z(c),r)<=0||(i.has(c.key)||cm(n,c))&&(o=o.insert(c.key,c.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,n,r,i){K()}Fr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Mee(this)}getSize(e){return P.resolve(this.size)}}class Mee extends kee{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Lee{constructor(e){this.persistence=e,this.Mr=new Ua(n=>Q_(n),Y_),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new tw,this.targetCount=0,this.Br=ma.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),P.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new ma(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.qn(n),P.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Nr.containsKey(n))}}/**
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
 */class Vee{constructor(e,n){this.Lr={},this.overlays={},this.kr=new H_(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Lee(this),this.indexManager=new Pee,this.remoteDocumentCache=function(i){return new jee(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Iee(n),this.$r=new Nee(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $ee,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Dee(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new Fee(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return P.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Fee extends SZ{constructor(e){super(),this.currentSequenceNumber=e}}class nw{constructor(e){this.persistence=e,this.zr=new tw,this.jr=null}static Hr(e){return new nw(e)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{const i=W.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,Y.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return P.or([()=>P.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class rw{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ne(),i=ne();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new rw(e,n.fromCache,r,i)}}/**
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
 */class Uee{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zee{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return SK()?8:vo.v(et())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new Uee;return this.Ji(e,n,s).next(a=>{if(o.result=a,this.Ui)return this.Yi(e,n,s,a.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(fl()<=ie.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(fl()<=ie.DEBUG&&N("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(fl()<=ie.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(n))):P.resolve())}ji(e,n){if(cT(n))return P.resolve(null);let r=_r(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=r0(n,null,"F"),r=_r(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=ne(...o);return this.zi.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,s,l.readTime)?this.ji(e,r0(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return cT(n)||i.isEqual(Y.min())?P.resolve(null):this.zi.getDocuments(e,r).next(o=>{const s=this.Zi(n,o);return this.Xi(n,s,r,i)?P.resolve(null):(fl()<=ie.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cs(n)),this.es(e,s,n,yZ(i,-1)).next(a=>a))})}Zi(e,n){let r=new It(IO(e));return n.forEach((i,o)=>{cm(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return fl()<=ie.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",cs(n)),this.zi.getDocumentsMatchingQuery(e,n,Li.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class Bee{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Le(ce),this.rs=new Ua(o=>Q_(o),Y_),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Oee(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function Wee(t,e,n,r){return new Bee(t,e,n,r)}async function QO(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=ne();for(const u of i){s.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of o){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:s,addedBatchIds:a}))})})}function Hee(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,d=f.keys();let p=P.resolve();return d.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(g=>{const w=u.docVersions.get(v);we(w!==null),g.version.compareTo(w)<0&&(f.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),c.addEntry(g)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function YO(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function qee(t,e){const n=J(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(n.Qr.removeMatchingKeys(o,c.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(o,c.addedDocuments,f)));let p=d.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(f)!==null?p=p.withResumeToken(Ft.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(f,p),function(g,w,y){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,p,c)&&a.push(n.Qr.updateTargetData(o,p))});let l=Wr(),u=ne();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,c))}),a.push(Gee(o,s,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(Y.min())){const c=n.Qr.getLastRemoteSnapshotVersion(o).next(f=>n.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(c)}return P.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.ns=i,o))}function Gee(t,e,n){let r=ne(),i=ne();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Wr();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:s,ls:i}})}function Kee(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qee(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(o=>o?(i=o,P.resolve(i)):n.Qr.allocateTargetId(r).next(s=>(i=new _i(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function l0(t,e,n){const r=J(t),i=r.ns.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!xc(s))throw s;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function ET(t,e,n){const r=J(t);let i=Y.min(),o=ne();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,u,c){const f=J(l),d=f.rs.get(c);return d!==void 0?P.resolve(f.ns.get(d)):f.Qr.getTargetData(u,c)}(r,s,_r(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.ts.getDocumentsMatchingQuery(s,e,n?i:Y.min(),n?o:ne())).next(a=>(Yee(r,UZ(e),a),{documents:a,hs:o})))}function Yee(t,e,n){let r=t.ss.get(e)||Y.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.ss.set(e,r)}class ST{constructor(){this.activeTargetIds=GZ()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xee{constructor(){this.no=new ST,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ST,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Jee{io(e){}shutdown(){}}/**
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
 */class bT{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gf=null;function Gg(){return gf===null?gf=function(){return 268435456+Math.round(2147483648*Math.random())}():gf++,"0x"+gf.toString(16)}/**
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
 */const Zee={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ete{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const Ot="WebChannelConnection";class tte extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${o}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get wo(){return!1}So(n,r,i,o,s){const a=Gg(),l=this.bo(n,r.toUriEncodedString());N("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,o,s),this.Co(n,l,u,i).then(c=>(N("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw fa("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,o,s,a){return this.So(n,r,i,o,s)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Va}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}bo(n,r){const i=Zee[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const o=Gg();return new Promise((s,a)=>{const l=new aZ;l.setWithCredentials(!0),l.listenOnce(oZ.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Hg.NO_ERROR:const c=l.getResponseJson();N(Ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(c)),s(c);break;case Hg.TIMEOUT:N(Ot,`RPC '${e}' ${o} timed out`),a(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case Hg.HTTP_ERROR:const f=l.getStatus();if(N(Ot,`RPC '${e}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(w){const y=w.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(y)>=0?y:C.UNKNOWN}(p.status);a(new M(v,p.message))}else a(new M(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(C.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{N(Ot,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);N(Ot,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Gg(),o=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=rZ(),a=iZ(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=o.join("");N(Ot,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=s.createWebChannel(c,l);let d=!1,p=!1;const v=new ete({lo:w=>{p?N(Ot,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(N(Ot,`Opening RPC '${e}' stream ${i} transport.`),f.open(),d=!0),N(Ot,`RPC '${e}' stream ${i} sending:`,w),f.send(w))},ho:()=>f.close()}),g=(w,y,m)=>{w.listen(y,_=>{try{m(_)}catch(E){setTimeout(()=>{throw E},0)}})};return g(f,hf.EventType.OPEN,()=>{p||N(Ot,`RPC '${e}' stream ${i} transport opened.`)}),g(f,hf.EventType.CLOSE,()=>{p||(p=!0,N(Ot,`RPC '${e}' stream ${i} transport closed`),v.Vo())}),g(f,hf.EventType.ERROR,w=>{p||(p=!0,fa(Ot,`RPC '${e}' stream ${i} transport errored:`,w),v.Vo(new M(C.UNAVAILABLE,"The operation could not be completed")))}),g(f,hf.EventType.MESSAGE,w=>{var y;if(!p){const m=w.data[0];we(!!m);const _=m,E=_.error||((y=_[0])===null||y===void 0?void 0:y.error);if(E){N(Ot,`RPC '${e}' stream ${i} received error:`,E);const S=E.status;let T=function(D){const R=qe[D];if(R!==void 0)return VO(R)}(S),x=E.message;T===void 0&&(T=C.INTERNAL,x="Unknown error status: "+S+" with message "+E.message),p=!0,v.Vo(new M(T,x)),f.close()}else N(Ot,`RPC '${e}' stream ${i} received:`,m),v.mo(m)}}),g(a,sZ.STAT_EVENT,w=>{w.stat===Jx.PROXY?N(Ot,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===Jx.NOPROXY&&N(Ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ro()},0),v}}function Kg(){return typeof document<"u"?document:null}/**
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
 */function pm(t){return new dee(t,!0)}/**
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
 */class XO{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=o,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class JO{constructor(e,n,r,i,o,s,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new XO(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new M(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nte extends JO{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=mee(this.serializer,e),r=function(o){if(!("targetChange"in o))return Y.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?Y.min():s.readTime?wr(s.readTime):Y.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=a0(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=t0(l)?{documents:yee(o,l)}:{query:_ee(o,l).ut},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=zO(o,s.resumeToken);const u=i0(o,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(Y.min())>0){a.readTime=gh(o,s.snapshotVersion.toTimestamp());const u=i0(o,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Eee(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=a0(this.serializer),n.removeTarget=e,this.t_(n)}}class rte extends JO{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=vee(e.writeResults,e.commitTime),r=wr(e.commitTime);return this.listener.T_(r,n)}return we(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=a0(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gee(this.serializer,r))};this.t_(n)}}/**
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
 */class ite extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.So(e,o0(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(C.UNKNOWN,o.toString())})}vo(e,n,r,i,o){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.vo(e,o0(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(C.UNKNOWN,s.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class ote{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Er(n),this.g_=!1):N("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class ste{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=o,this.M_.io(s=>{r.enqueueAndForget(async()=>{Yo(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=J(l);u.v_.add(4),await Pc(u),u.x_.set("Unknown"),u.v_.delete(4),await mm(u)}(this))})}),this.x_=new ote(r,i)}}async function mm(t){if(Yo(t))for(const e of t.F_)await e(!0)}async function Pc(t){for(const e of t.F_)await e(!1)}function ZO(t,e){const n=J(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),sw(n)?ow(n):za(n).Jo()&&iw(n,e))}function eN(t,e){const n=J(t),r=za(n);n.C_.delete(e),r.Jo()&&tN(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Yo(n)&&n.x_.set("Unknown"))}function iw(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}za(t).c_(e)}function tN(t,e){t.O_.Oe(e),za(t).l_(e)}function ow(t){t.O_=new lee({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),za(t).start(),t.x_.p_()}function sw(t){return Yo(t)&&!za(t).Ho()&&t.C_.size>0}function Yo(t){return J(t).v_.size===0}function nN(t){t.O_=void 0}async function ate(t){t.C_.forEach((e,n)=>{iw(t,e)})}async function lte(t,e){nN(t),sw(t)?(t.x_.S_(e),ow(t)):t.x_.set("Unknown")}async function ute(t,e,n){if(t.x_.set("Online"),e instanceof UO&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vh(t,r)}else if(e instanceof ud?t.O_.$e(e):e instanceof FO?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(Y.min()))try{const r=await YO(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.O_.it(s);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=o.C_.get(u);c&&o.C_.set(u,c.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,u)=>{const c=o.C_.get(l);if(!c)return;o.C_.set(l,c.withResumeToken(Ft.EMPTY_BYTE_STRING,c.snapshotVersion)),tN(o,l);const f=new _i(c.target,l,u,c.sequenceNumber);iw(o,f)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await vh(t,r)}}async function vh(t,e,n){if(!xc(e))throw e;t.v_.add(1),await Pc(t),t.x_.set("Offline"),n||(n=()=>YO(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await mm(t)})}function rN(t,e){return e().catch(n=>vh(t,n,e))}async function gm(t){const e=J(t),n=Fi(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;cte(e);)try{const i=await Kee(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,fte(e,i)}catch(i){await vh(e,i)}iN(e)&&oN(e)}function cte(t){return Yo(t)&&t.D_.length<10}function fte(t,e){t.D_.push(e);const n=Fi(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function iN(t){return Yo(t)&&!Fi(t).Ho()&&t.D_.length>0}function oN(t){Fi(t).start()}async function dte(t){Fi(t).d_()}async function hte(t){const e=Fi(t);for(const n of t.D_)e.I_(n.mutations)}async function pte(t,e,n){const r=t.D_.shift(),i=J_.from(r,e,n);await rN(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await gm(t)}async function mte(t,e){e&&Fi(t).P_&&await async function(r,i){if(function(s){return oee(s)&&s!==C.ABORTED}(i.code)){const o=r.D_.shift();Fi(r).Zo(),await rN(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await gm(r)}}(t,e),iN(t)&&oN(t)}async function xT(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Yo(n);n.v_.add(3),await Pc(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await mm(n)}async function gte(t,e){const n=J(t);e?(n.v_.delete(2),await mm(n)):e||(n.v_.add(2),await Pc(n),n.x_.set("Unknown"))}function za(t){return t.N_||(t.N_=function(n,r,i){const o=J(n);return o.R_(),new nte(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:ate.bind(null,t),To:lte.bind(null,t),u_:ute.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),sw(t)?ow(t):t.x_.set("Unknown")):(await t.N_.stop(),nN(t))})),t.N_}function Fi(t){return t.B_||(t.B_=function(n,r,i){const o=J(n);return o.R_(),new rte(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:dte.bind(null,t),To:mte.bind(null,t),E_:hte.bind(null,t),T_:pte.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await gm(t)):(await t.B_.stop(),t.D_.length>0&&(N("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
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
 */class aw{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new aw(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lw(t,e){if(Er("AsyncQueue",`${e}: ${t}`),xc(t))return new M(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=xl(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class TT{constructor(){this.L_=new Le(W.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):K():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ga{constructor(e,n,r,i,o,s,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ga(e,n,Bs.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&um(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class vte{constructor(){this.q_=void 0,this.Q_=[]}}class yte{constructor(){this.queries=new Ua(e=>TO(e),um),this.onlineState="Unknown",this.K_=new Set}}async function sN(t,e){const n=J(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new vte),i)try{o.q_=await n.onListen(r)}catch(s){const a=lw(s,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,o),o.Q_.push(e),e.U_(n.onlineState),o.q_&&e.W_(o.q_)&&uw(n)}async function aN(t,e){const n=J(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.Q_.indexOf(e);s>=0&&(o.Q_.splice(s,1),i=o.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _te(t,e){const n=J(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.Q_)a.W_(i)&&(r=!0);s.q_=i}}r&&uw(n)}function wte(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const o of i.Q_)o.onError(n);r.queries.delete(e)}function uw(t){t.K_.forEach(e=>{e.next()})}class lN{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ga(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=ga.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class uN{constructor(e){this.key=e}}class cN{constructor(e){this.key=e}}class Ete{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ne(),this.mutatedKeys=ne(),this.ua=IO(e),this.ca=new Bs(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new TT,i=n?n.ca:this.ca;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const d=i.get(c),p=cm(this.query,f)?f:null,v=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?v!==g&&(r.track({type:3,doc:p}),w=!0):this.Ia(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.ua(p,l)>0||u&&this.ua(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(s=s.add(p),o=g?o.add(c):o.delete(c)):(s=s.delete(c),o=o.delete(c)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const c=this.query.limitType==="F"?s.last():s.first();s=s.delete(c.key),o=o.delete(c.key),r.track({type:1,doc:c})}return{ca:s,Pa:r,Xi:a,mutatedKeys:o}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.k_();s.sort((c,f)=>function(p,v){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(p)-g(v)}(c.type,f.type)||this.ua(c.doc,f.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,s.length!==0||u?{snapshot:new ga(this.query,e.ca,o,s,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new TT,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=ne(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new cN(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new uN(r))}),n}Ra(e){this.oa=e.hs,this.aa=ne();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return ga.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Ste{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bte{constructor(e){this.key=e,this.ma=!1}}class xte{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new Ua(a=>TO(a),um),this.pa=new Map,this.ya=new Set,this.wa=new Le(W.comparator),this.Sa=new Map,this.ba=new tw,this.Da={},this.Ca=new Map,this.va=ma.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function Tte(t,e){const n=Dte(t);let r,i;const o=n.ga.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Va();else{const s=await Qee(n.localStore,_r(e)),a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await Ite(n,e,r,a==="current",s.resumeToken),n.isPrimaryClient&&ZO(n.remoteStore,s)}return i}async function Ite(t,e,n,r,i){t.Ma=(f,d,p)=>async function(g,w,y,m){let _=w.view.ha(y);_.Xi&&(_=await ET(g.localStore,w.query,!1).then(({documents:x})=>w.view.ha(x,_)));const E=m&&m.targetChanges.get(w.targetId),S=m&&m.targetMismatches.get(w.targetId)!=null,T=w.view.applyChanges(_,g.isPrimaryClient,E,S);return CT(g,w.targetId,T.da),T.snapshot}(t,f,d,p);const o=await ET(t.localStore,e,!0),s=new Ete(e,o.hs),a=s.ha(o.documents),l=Cc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=s.applyChanges(a,t.isPrimaryClient,l);CT(t,n,u.da);const c=new Ste(e,n,s);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function Cte(t,e){const n=J(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(o=>!um(o,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await l0(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),eN(n.remoteStore,r.targetId),u0(n,r.targetId)}).catch(bc)):(u0(n,r.targetId),await l0(n.localStore,r.targetId,!0))}async function Pte(t,e,n){const r=jte(t);try{const i=await function(s,a){const l=J(s),u=st.now(),c=a.reduce((p,v)=>p.add(v.key),ne());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=Wr(),g=ne();return l.os.getEntries(p,c).next(w=>{v=w,v.forEach((y,m)=>{m.isValidDocument()||(g=g.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(w=>{f=w;const y=[];for(const m of a){const _=eee(m,f.get(m.key).overlayedDocument);_!=null&&y.push(new Qo(m.key,_,vO(_.value.mapValue),jr.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,y,a)}).next(w=>{d=w;const y=w.applyToLocalDocumentSet(f,g);return l.documentOverlayCache.saveOverlays(p,w.batchId,y)})}).then(()=>({batchId:d.batchId,changes:PO(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let u=s.Da[s.currentUser.toKey()];u||(u=new Le(ce)),u=u.insert(a,l),s.Da[s.currentUser.toKey()]=u}(r,i.batchId,n),await Ac(r,i.changes),await gm(r.remoteStore)}catch(i){const o=lw(i,"Failed to persist write");n.reject(o)}}async function fN(t,e){const n=J(t);try{const r=await qee(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Sa.get(o);s&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.ma=!0:i.modifiedDocuments.size>0?we(s.ma):i.removedDocuments.size>0&&(we(s.ma),s.ma=!1))}),await Ac(n,r,e)}catch(r){await bc(r)}}function IT(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((o,s)=>{const a=s.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=J(s);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const d of f.Q_)d.U_(a)&&(u=!0)}),u&&uw(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ate(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),o=i&&i.key;if(o){let s=new Le(W.comparator);s=s.insert(o,jt.newNoDocument(o,Y.min()));const a=ne().add(o),l=new hm(Y.min(),new Map,new Le(ce),s,a);await fN(r,l),r.wa=r.wa.remove(o),r.Sa.delete(e),cw(r)}else await l0(r.localStore,e,!1).then(()=>u0(r,e,n)).catch(bc)}async function kte(t,e){const n=J(t),r=e.batch.batchId;try{const i=await Hee(n.localStore,e);hN(n,r,null),dN(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ac(n,i)}catch(i){await bc(i)}}async function Rte(t,e,n){const r=J(t);try{const i=await function(s,a){const l=J(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(we(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);hN(r,e,n),dN(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ac(r,i)}catch(i){await bc(i)}}function dN(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function hN(t,e,n){const r=J(t);let i=r.Da[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function u0(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||pN(t,r)})}function pN(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(eN(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),cw(t))}function CT(t,e,n){for(const r of n)r instanceof uN?(t.ba.addReference(r.key,e),Ote(t,r)):r instanceof cN?(N("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||pN(t,r.key)):K()}function Ote(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(N("SyncEngine","New document in limbo: "+n),t.ya.add(r),cw(t))}function cw(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new W(Ce.fromString(e)),r=t.va.next();t.Sa.set(r,new bte(n)),t.wa=t.wa.insert(n,r),ZO(t.remoteStore,new _i(_r(X_(n.path)),r,"TargetPurposeLimboResolution",H_._e))}}async function Ac(t,e,n){const r=J(t),i=[],o=[],s=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{s.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=rw.Ki(l.targetId,u);o.push(c)}}))}),await Promise.all(s),r.fa.u_(i),await async function(l,u){const c=J(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>P.forEach(u,d=>P.forEach(d.qi,p=>c.persistence.referenceDelegate.addReference(f,d.targetId,p)).next(()=>P.forEach(d.Qi,p=>c.persistence.referenceDelegate.removeReference(f,d.targetId,p)))))}catch(f){if(!xc(f))throw f;N("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const p=c.ns.get(d),v=p.snapshotVersion,g=p.withLastLimboFreeSnapshotVersion(v);c.ns=c.ns.insert(d,g)}}}(r.localStore,o))}async function Nte(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await QO(n.localStore,e);n.currentUser=e,function(o,s){o.Ca.forEach(a=>{a.forEach(l=>{l.reject(new M(C.CANCELLED,s))})}),o.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ac(n,r.us)}}function $te(t,e){const n=J(t),r=n.Sa.get(e);if(r&&r.ma)return ne().add(r.key);{let i=ne();const o=n.pa.get(e);if(!o)return i;for(const s of o){const a=n.ga.get(s);i=i.unionWith(a.view.la)}return i}}function Dte(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fN.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$te.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ate.bind(null,e),e.fa.u_=_te.bind(null,e.eventManager),e.fa.xa=wte.bind(null,e.eventManager),e}function jte(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kte.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Rte.bind(null,e),e}class PT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=pm(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Wee(this.persistence,new zee,e.initialUser,this.serializer)}createPersistence(e){return new Vee(nw.Hr,this.serializer)}createSharedClientState(e){return new Xee}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mte{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>IT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nte.bind(null,this.syncEngine),await gte(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yte}()}createDatastore(e){const n=pm(e.databaseInfo.databaseId),r=function(o){return new tte(o)}(e.databaseInfo);return function(o,s,a,l){return new ite(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new ste(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>IT(this.syncEngine,n,0),function(){return bT.D()?new bT:new Jee}())}createSyncEngine(e,n){return function(i,o,s,a,l,u,c){const f=new xte(i,o,s,a,l,u);return c&&(f.Fa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=J(r);N("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Pc(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class mN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Lte{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$t.UNAUTHENTICATED,this.clientId=pO.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{N("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(N("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lw(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qg(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await QO(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function AT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fte(t);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xT(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>xT(e.remoteStore,i)),t._onlineComponents=e}function Vte(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Fte(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Vte(n))throw n;fa("Error using user provided cache. Falling back to memory cache: "+n),await Qg(t,new PT)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Qg(t,new PT);return t._offlineComponents}async function gN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await AT(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await AT(t,new Mte))),t._onlineComponents}function Ute(t){return gN(t).then(e=>e.syncEngine)}async function vN(t){const e=await gN(t),n=e.eventManager;return n.onListen=Tte.bind(null,e.syncEngine),n.onUnlisten=Cte.bind(null,e.syncEngine),n}function zte(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const c=new mN({next:d=>{s.enqueueAndForget(()=>aN(o,f));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new M(C.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new M(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new lN(X_(a.path),c,{includeMetadataChanges:!0,Z_:!0});return sN(o,f)}(await vN(t),t.asyncQueue,e,n,r)),r.promise}function Bte(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const c=new mN({next:d=>{s.enqueueAndForget(()=>aN(o,f)),d.fromCache&&l.source==="server"?u.reject(new M(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new lN(a,c,{includeMetadataChanges:!0,Z_:!0});return sN(o,f)}(await vN(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function yN(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const kT=new Map;/**
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
 */function _N(t,e,n){if(!n)throw new M(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wte(t,e,n,r){if(e===!0&&r===!0)throw new M(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function RT(t){if(!W.isDocumentKey(t))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function OT(t){if(W.isDocumentKey(t))throw new M(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Uo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vm(t);throw new M(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class NT{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wte("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yN((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ym{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new NT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new NT(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uZ;switch(r.type){case"firstParty":return new hZ(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=kT.get(n);r&&(N("ComponentProvider","Removing Datastore"),kT.delete(n),r.terminate())}(this),Promise.resolve()}}function Hte(t,e,n,r={}){var i;const o=(t=Uo(t,ym))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&fa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=$t.MOCK_USER;else{a=gK(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new M(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new $t(u)}t._authCredentials=new cZ(new hO(a,l))}}/**
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
 */class Ba{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ba(this.firestore,e,this._query)}}class nn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class $i extends Ba{constructor(e,n,r){super(e,n,X_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new W(e))}withConverter(e){return new $i(this.firestore,e,this._path)}}function wN(t,e,...n){if(t=qt(t),_N("collection","path",e),t instanceof ym){const r=Ce.fromString(e,...n);return OT(r),new $i(t,null,r)}{if(!(t instanceof nn||t instanceof $i))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return OT(r),new $i(t.firestore,null,r)}}function qte(t,e,...n){if(t=qt(t),arguments.length===1&&(e=pO.newId()),_N("doc","path",e),t instanceof ym){const r=Ce.fromString(e,...n);return RT(r),new nn(t,null,new W(r))}{if(!(t instanceof nn||t instanceof $i))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return RT(r),new nn(t.firestore,t instanceof $i?t.converter:null,new W(r))}}/**
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
 */class Gte{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new XO(this,"async_queue_retry"),this._u=()=>{const n=Kg();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Kg();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=Kg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new yr;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!xc(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Er("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=aw.createAndSchedule(this,e,n,r,o=>this.lu(o));return this.nu.push(i),i}au(){this.ru&&K()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class _m extends ym{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Gte}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||EN(this),this._firestoreClient.terminate()}}function Kte(t,e){const n=typeof t=="object"?t:AR(),r=typeof t=="string"?t:e||"(default)",i=c_(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=pK("firestore");o&&Hte(i,...o)}return i}function fw(t){return t._firestoreClient||EN(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function EN(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,u,c){return new CZ(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,yN(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Lte(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class va{constructor(e){this._byteString=e}static fromBase64String(e){try{return new va(Ft.fromBase64String(e))}catch(n){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new va(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class dw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class SN{constructor(e){this._methodName=e}}/**
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
 */class hw{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const Qte=/^__.*__$/;class Yte{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qo(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ic(e,this.data,n,this.fieldTransforms)}}function bN(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class pw{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Eu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new pw(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return yh(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(bN(this.du)&&Qte.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class Xte{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pm(e)}Su(e,n,r,i=!1){return new pw({du:e,methodName:n,wu:r,path:bt.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xN(t){const e=t._freezeSettings(),n=pm(t._databaseId);return new Xte(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jte(t,e,n,r,i,o={}){const s=t.Su(o.merge||o.mergeFields?2:0,e,n,i);CN("Data must be an object, but it was:",s,r);const a=TN(r,s);let l,u;if(o.merge)l=new Un(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const c=[];for(const f of o.mergeFields){const d=ene(e,f,n);if(!s.contains(d))throw new M(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);nne(c,d)||c.push(d)}l=new Un(c),u=s.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=s.fieldTransforms;return new Yte(new Tn(a),l,u)}function Zte(t,e,n,r=!1){return mw(n,t.Su(r?4:3,e))}function mw(t,e){if(IN(t=qt(t)))return CN("Unsupported field value:",e,t),TN(t,e);if(t instanceof SN)return function(r,i){if(!bN(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=mw(a,i.gu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return KZ(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=st.fromDate(r);return{timestampValue:gh(i.serializer,o)}}if(r instanceof st){const o=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gh(i.serializer,o)}}if(r instanceof hw)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof va)return{bytesValue:zO(i.serializer,r._byteString)};if(r instanceof nn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.pu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ew(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${vm(r)}`)}(t,e)}function TN(t,e){const n={};return mO(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fa(t,(r,i)=>{const o=mw(i,e.Ru(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function IN(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof hw||t instanceof va||t instanceof nn||t instanceof SN)}function CN(t,e,n){if(!IN(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vm(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function ene(t,e,n){if((e=qt(e))instanceof dw)return e._internalPath;if(typeof e=="string")return PN(t,e);throw yh("Field path arguments must be of type string or ",t,!1,void 0,n)}const tne=new RegExp("[~\\*/\\[\\]]");function PN(t,e,n){if(e.search(tne)>=0)throw yh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dw(...e.split("."))._internalPath}catch{throw yh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yh(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new M(C.INVALID_ARGUMENT,a+t+l)}function nne(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class AN{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rne(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kN("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rne extends AN{data(){return super.data()}}function kN(t,e){return typeof e=="string"?PN(t,e):e instanceof dw?e._internalPath:e._delegate._internalPath}/**
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
 */function ine(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gw{}class one extends gw{}function sne(t,e,...n){let r=[];e instanceof gw&&r.push(e),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof yw).length,a=o.filter(l=>l instanceof vw).length;if(s>1||s>0&&a>0)throw new M(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vw extends one{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vw(e,n,r)}_apply(e){const n=this._parse(e);return RN(e._query,n),new Ba(e.firestore,e.converter,n0(e._query,n))}_parse(e){const n=xN(e.firestore);return function(o,s,a,l,u,c,f){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new M(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){DT(f,c);const p=[];for(const v of f)p.push($T(l,o,v));d={arrayValue:{values:p}}}else d=$T(l,o,f)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||DT(f,c),d=Zte(a,s,f,c==="in"||c==="not-in");return Xe.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class yw extends gw{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yw(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)RN(s,l),s=n0(s,l)}(e._query,n),new Ba(e.firestore,e.converter,n0(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function $T(t,e,n){if(typeof(n=qt(n))=="string"){if(n==="")throw new M(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xO(e)&&n.indexOf("/")!==-1)throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!W.isDocumentKey(r))throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return iT(t,new W(r))}if(n instanceof nn)return iT(t,n._key);throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vm(n)}.`)}function DT(t,e){if(!Array.isArray(t)||t.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function RN(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ane{convertValue(e,n="none"){switch(Fo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fa(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new hw(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=G_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fu(e));default:return null}}convertTimestamp(e){const n=Vi(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);we(KO(r));const i=new Uu(r.get(1),r.get(3)),o=new W(r.popFirst(5));return i.isEqual(n)||Er(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function lne(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Il{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ON extends AN{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kN("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cd extends ON{data(e={}){return super.data(e)}}class une{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Il(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cd(this._firestore,this._userDataWriter,r.key,r,new Il(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new cd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Il(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new cd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Il(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),c=s.indexOf(a.doc.key)),{type:cne(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cne(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function fne(t){t=Uo(t,nn);const e=Uo(t.firestore,_m);return zte(fw(e),t._key).then(n=>mne(e,t,n))}class NN extends ane{constructor(e){super(),this.firestore=e}convertBytes(e){return new va(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,n)}}function dne(t){t=Uo(t,Ba);const e=Uo(t.firestore,_m),n=fw(e),r=new NN(e);return ine(t._query),Bte(n,t._query).then(i=>new une(e,r,t,i))}function hne(t,e,n){t=Uo(t,nn);const r=Uo(t.firestore,_m),i=lne(t.converter,e,n);return pne(r,[Jte(xN(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,jr.none())])}function pne(t,e){return function(r,i){const o=new yr;return r.asyncQueue.enqueueAndForget(async()=>Pte(await Ute(r),i,o)),o.promise}(fw(t),e)}function mne(t,e,n){const r=n.docs.get(e._key),i=new NN(t);return new ON(t,i,e._key,r,new Il(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Va=i})(Da),ua(new $o("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new _m(new fZ(r.getProvider("auth-internal")),new mZ(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uu(u.options.projectId,c)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Ni(Zx,"4.4.2",e),Ni(Zx,"4.4.2","esm2017")})();const gne={apiKey:"AIzaSyAyH75EeQs-whvwD_aO6mKbcaLNbAAUQe8",authDomain:"sandra-sanchez-art.firebaseapp.com",projectId:"sandra-sanchez-art",storageBucket:"sandra-sanchez-art.appspot.com",messagingSenderId:"490365144817",appId:"1:490365144817:web:f1cfc1439ab5f515d4e350",measurementId:"G-FVK28QXSKK"},$N=PR(gne),DN=Kte($N),jN=new Ar;jN.setCustomParameters({prompt:"select_account"});const kc=tJ($N),vne=()=>cX(kc,jN),_w=async(t,e={})=>{const n=wN(DN,"users"),r=qte(n,t.uid),i=await fne(r);if(!i.exists()){const{email:o,displayName:s}=t,a=new Date;try{await hne(r,{displayName:s,email:o,createdAt:a,...e})}catch(l){console.log(`Whoops! Looks like there was an error creating the user: ${l}`)}}return console.log(r),console.log(i),console.log(i.data()),r},yne=async()=>{const t=wN(DN,"categories"),e=sne(t);return(await dne(e)).docs.reduce((i,o)=>{const{categoryName:s,items:a}=o.data();return i[s.toLowerCase()]=a,i},{})},_ne=async(t,e)=>{if(!(!t||!e))return await VY(kc,t,e)},wne=async(t,e)=>{if(!(!t||!e))return await LY(kc,t,e)},Ene=t=>zY(kc,t),Sne=()=>BY(kc),wm=b.createContext({currentUser:null,setCurrentUser:()=>null}),bne=({children:t})=>{const[e,n]=b.useState(null),r={currentUser:e,setCurrentUser:n};return b.useEffect(()=>Ene(o=>{o&&_w(o),n(o)}),[]),h.jsx(wm.Provider,{value:r,children:t})},xne=(t,e,n,r,i,o)=>t.find(a=>a.id===e.id&&a.selectedSize===n)?t.map(a=>a.id===e.id&&a.selectedSize===n?{...a,quantity:a.quantity+i}:a):[...t,{...e,quantity:i,selectedSize:n,itemPrice:r,key:o}],Tne=(t,e,n,r)=>t.find(o=>o.id===e.id&&o.selectedSize===n&&o.key===r)?t.map(o=>o.id===e.id&&o.selectedSize===n?{...o,quantity:o.quantity+1}:o):[...t,{...e,quantity:1}],Ine=(t,e,n,r)=>{const i=t.find(o=>o.id===e.id&&o.selectedSize===n&&o.key===e.key);return i&&i.quantity===1?t.filter(o=>o.key!==r):t.map(o=>o.key===r?{...o,quantity:o.quantity-1}:o)},Cne=(t,e,n)=>t.filter(r=>r.id!==e.id&&r.key!==e.key),Jr=b.createContext({cartItems:[],setCartItems:()=>{},addProductAndQuantityToCart:()=>{},addOneItemToCart:()=>{},removeOneItemFromCart:()=>{},clearItemFromCart:()=>{},cartTotal:0,cartCount:0,cartItemIsAdded:!1,setCartItemIsAdded:()=>{},isCartOpen:!1,setIsCartOpen:()=>{}}),Pne=({children:t})=>{const[e,n]=b.useState([]),[r,i]=b.useState(!1),[o,s]=b.useState(0),[a,l]=b.useState(0),[u,c]=b.useState(!1),f=(w,y,m,_,E)=>n(xne(e,w,y,m,_,E)),d=(w,y,m)=>n(Tne(e,w,y,m)),p=(w,y,m)=>n(Ine(e,w,y,m)),v=(w,y)=>n(Cne(e,w));b.useEffect(()=>{const w=e.reduce((y,m)=>y+m.quantity,0);l(w)},[e]),b.useEffect(()=>{const w=e.reduce((y,m)=>y+m.itemPrice*m.quantity,0);s(w)},[e]);const g={cartItems:e,setCartItems:n,isCartOpen:r,setIsCartOpen:i,cartTotal:o,setCartTotal:s,cartCount:a,setCartCount:l,addProductAndQuantityToCart:f,addOneItemToCart:d,removeOneItemFromCart:p,clearItemFromCart:v,cartItemIsAdded:u,setCartItemIsAdded:c};return h.jsx(Jr.Provider,{value:g,children:t})},Ane=A.div`
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

`,kne=A.div`
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
`,Rne=A.div`
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
`;var ww={},One=up;Object.defineProperty(ww,"__esModule",{value:!0});var Ew=ww.default=void 0,Nne=One(Rp()),$ne=h,Dne=(0,Nne.default)((0,$ne.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");Ew=ww.default=Dne;const jne=A.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid black;
`,Mne=A.div`
    width: 30%;

    img {
        width: 100px;
        height: 150px;
        object-fit: cover;
    }
`,Lne=A.div`
    display: flex: 
    flex-direction: column;
    width: 40%;
    margin: 0 10px;
`,Vne=A.div`
    margin: 0 10px;
`,Fne=A(Ew)`
    cursor: pointer;
    
    &:hover {
        color: red;
    }
`,MN=A.button`
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
`,Une=A(MN)`
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
`,Je={default:"default",google:"google"},zne=lp`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`,Bne=A.div`
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${zne} 0.8s linear infinite;
`,Wne=(t=Je.default)=>({[Je.default]:MN,[Je.google]:Une})[t],On=({children:t,buttonType:e,isLoading:n,...r})=>{const i=Wne(e);return h.jsx(i,{disabled:n,...r,children:n?h.jsx(Bne,{}):t})},Hne=A.div`
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;

    h2 {
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
        font-size: 25px;
    }

    
`,qne=A.div`
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
`,Gne=A.div`
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
`,Kne=A.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
`,Qne=A.div`
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
`,Yne=A.div`
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
`,Sw=A.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,bw=A.input`
    width: 20px;
    height: 30px;
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
    font-size: 20px;
    background-color: rgb(204,204,204);

    &:focus: {
        background-color: white;
    }
`,ya=A(On)`
    border-radius: 0px;
    padding: 0;
    margin: 0;
    height: 35px;
    width: 25px;
    font-size: 25px;
    border-radius: 2px;
    background-color: rgb(204, 204, 204);
`,Xne=A(On)`
    border-radius: 5px;
    font-size: 20px;
    position: relative;
    top: 12px;
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
    font-size: 20px;
`,Jne=A.div`
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
    font-size: 18px;
`,Zne=A(On)`
    width: 40px;
    height: 40px;
    border-radius: 2px;
    margin-left: auto;
`,ere=({cartItem:t})=>{const{name:e,imageUrl:n,selectedSize:r,quantity:i,id:o,key:s}=t,{addOneItemToCart:a,removeOneItemFromCart:l,clearItemFromCart:u,cartItems:c,setCartItems:f}=b.useContext(Jr),d=()=>{a(t,r,s)},p=w=>{w.stopPropagation(),l(t,r,s)},v=()=>u(t,s),g=w=>{const y=c.find(_=>_.key===s&&_.id===o&&_.selectedSize===r),m=w.target.value;if(/^\d*$/.test(m)&&y){const _=c.map(E=>E.key===s&&E.id===o&&E.selectedSize===r?{...E,quantity:m===""?"":parseInt(m,10)}:E);f(_)}};return h.jsxs(jne,{children:[h.jsx(Mne,{children:h.jsx("img",{src:n,alt:e})}),h.jsxs(Lne,{children:[h.jsx("h3",{children:e}),h.jsx("span",{children:r})]}),h.jsxs(Sw,{children:[h.jsx(ya,{buttonType:Je.default,onClick:p,children:"-"}),h.jsx(bw,{value:i,onChange:g}),h.jsx(ya,{buttonType:Je.default,onClick:d,children:"+"})]}),h.jsx(Vne,{onClick:v,children:h.jsx(Fne,{fontSize:"large"})})]})},tre=b.forwardRef((t,e)=>{const{close:n}=t,r=Yr(),{cartItems:i,cartTotal:o}=b.useContext(Jr);console.log(i);const s=()=>{r("/cart-summary"),n()};return h.jsxs(Ane,{ref:e,children:[h.jsx(kne,{children:i.length?i.map(a=>h.jsx(ere,{cartItem:a},a.key)):h.jsx("span",{children:"Your cart is currently empty!"})}),h.jsxs(Rne,{children:[h.jsxs("h3",{children:["Sub-total: $",o," "]}),h.jsx(On,{isLoading:!1,buttonType:Je.google,onClick:s,children:"View Cart Summary"})]})]})}),nre=()=>{const t=b.useRef(null),e=Yr(),{currentUser:n}=b.useContext(wm),{cartCount:r,cartItemIsAdded:i}=b.useContext(Jr),[o,s]=b.useState(!1),[a,l]=b.useState(!1),[u,c]=b.useState(!1),f=()=>e("/authentication"),d=()=>{s(!0),l(!1)},p=()=>s(!1),v=S=>{S.stopPropagation(),s(!o),l(!1)},g=()=>{l(!0),s(!1)},w=()=>l(!1),y=S=>{S.stopPropagation(),l(!a),s(!1)},m=()=>{s(!1),l(!1)},_=S=>{S.stopPropagation(),c(!u),l(!1)},E=()=>c(!1);return b.useEffect(()=>{const S=T=>{T.target.id!=="mentoring"&&s(!1)};return document.body.addEventListener("click",S),()=>document.body.removeEventListener("click",S)},[]),b.useEffect(()=>{const S=T=>{T.target.id!=="shop"&&l(!1)};return document.body.addEventListener("click",S),()=>document.body.removeEventListener("click",S)},[]),b.useEffect(()=>{const S=T=>{t.current&&!t.current.contains(T.target)&&c(!1)};return document.body.addEventListener("click",S),()=>document.body.removeEventListener("click",S)},[u]),h.jsxs(b.Fragment,{children:[h.jsxs(ZG,{children:[h.jsx(XG,{to:"/",children:h.jsx(JG,{src:sK})}),h.jsx("h1",{children:"Sandra Sanchez"}),h.jsxs(eK,{children:[h.jsx(al,{onMouseEnter:m,children:"About"}),h.jsxs(fx,{id:"mentoring","data-toggle":!0,children:[h.jsx(al,{"data-dropdown-button":!0,onClick:v,onMouseEnter:d,children:"Mentoring"}),h.jsxs(cx,{open:o,onMouseLeave:p,children:[h.jsx(ll,{to:"",children:"Private Lessons"}),h.jsx(ll,{to:"",children:"Group Classes"})]})]}),h.jsxs(fx,{id:"shop","data-toggle":!0,children:[h.jsx(al,{"data-dropdown-button":!0,onClick:y,onMouseEnter:g,children:"Shop"}),h.jsxs(cx,{open:a,onMouseLeave:w,children:[h.jsx(ll,{to:"shop/inks",children:"Inks"}),h.jsx(ll,{to:"shop/illustrations",children:"Illustrations"}),h.jsx(ll,{to:"shop/fine art",children:"Fine Art"})]})]}),n?h.jsx(al,{onClick:Sne,onMouseEnter:m,children:"Sign Out"}):h.jsx(al,{onMouseEnter:m,onClick:f,children:"Sign In"}),h.jsxs(tK,{onClick:_,onMouseEnter:m,$bounce:+i,children:[i&&h.jsx(oK,{particleSize:6,particleCount:100}),h.jsx(nK,{fontSize:"large"}),h.jsx(rK,{children:r})]})]}),u&&h.jsx(tre,{ref:t,close:E}),i&&h.jsx(iK,{$show:+i,children:h.jsx("h4",{children:"Item successfully added to cart!"})})]}),h.jsx(Lj,{})]})},rre=A.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`,LN=A.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({$imageurl:t})=>`url(${t})`};
    border-radius: 10px;
    opacity: 0.9;
`,VN=A.div`
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
`,ire=A.div`
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

        ${LN} {
            opacity: 1;
            transform: scale(1.1);
            transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${VN} {
            opacity: 1;
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
`,ore=({category:t})=>{const{categoryName:e,imageUrl:n,route:r}=t,i=Yr(),o=()=>i(r);return h.jsxs(ire,{onClick:o,children:[h.jsx(LN,{$imageurl:n}),h.jsxs(VN,{children:[h.jsx("h2",{children:e}),h.jsx("p",{children:"View More"})]})]})},sre=[{id:1,categoryName:"Inks",imageUrl:"https://i.ibb.co/4NzycTv/yamamoto-bleach.jpg",route:"shop/inks"},{id:2,categoryName:"Illustrations",imageUrl:"https://i.ibb.co/n1V220T/dva.jpg",route:"shop/illustrations"},{id:3,categoryName:"Fine Art",imageUrl:"https://i.ibb.co/SfsGYKk/Confections-Oilonlinen-16x18in-1250.jpg",route:"shop/fine art"}],are=()=>h.jsx(rre,{children:sre.map(t=>h.jsx(ore,{category:t},t.id))});var xw={},lre=up;Object.defineProperty(xw,"__esModule",{value:!0});var FN=xw.default=void 0;fre(b);var ure=lre(Rp()),cre=h;function UN(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(UN=function(r){return r?n:e})(t)}function fre(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=UN(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)){var s=i?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}var dre=(0,ure.default)((0,cre.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");FN=xw.default=dre;var Tw={},hre=up;Object.defineProperty(Tw,"__esModule",{value:!0});var zN=Tw.default=void 0;gre(b);var pre=hre(Rp()),mre=h;function BN(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(BN=function(r){return r?n:e})(t)}function gre(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=BN(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)){var s=i?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}var vre=(0,pre.default)((0,mre.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");zN=Tw.default=vre;function jT(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jT(Object(n),!0).forEach(function(r){at(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jT(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _h(t){"@babel/helpers - typeof";return _h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_h(t)}function yre(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function MT(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _re(t,e,n){return e&&MT(t.prototype,e),n&&MT(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function at(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Iw(t,e){return Ere(t)||bre(t,e)||WN(t,e)||Tre()}function Rc(t){return wre(t)||Sre(t)||WN(t)||xre()}function wre(t){if(Array.isArray(t))return c0(t)}function Ere(t){if(Array.isArray(t))return t}function Sre(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bre(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function WN(t,e){if(t){if(typeof t=="string")return c0(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c0(t,e)}}function c0(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function xre(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tre(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var LT=function(){},Cw={},HN={},qN=null,GN={mark:LT,measure:LT};try{typeof window<"u"&&(Cw=window),typeof document<"u"&&(HN=document),typeof MutationObserver<"u"&&(qN=MutationObserver),typeof performance<"u"&&(GN=performance)}catch{}var Ire=Cw.navigator||{},VT=Ire.userAgent,FT=VT===void 0?"":VT,Ui=Cw,Ae=HN,UT=qN,vf=GN;Ui.document;var Zr=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",KN=~FT.indexOf("MSIE")||~FT.indexOf("Trident/"),yf,_f,wf,Ef,Sf,Hr="___FONT_AWESOME___",f0=16,QN="fa",YN="svg-inline--fa",zo="data-fa-i2svg",d0="data-fa-pseudo-element",Cre="data-fa-pseudo-element-pending",Pw="data-prefix",Aw="data-icon",zT="fontawesome-i2svg",Pre="async",Are=["HTML","HEAD","STYLE","SCRIPT"],XN=function(){try{return!0}catch{return!1}}(),Te="classic",ze="sharp",kw=[Te,ze];function Oc(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Te]}})}var Hu=Oc((yf={},at(yf,Te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),at(yf,ze,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yf)),qu=Oc((_f={},at(_f,Te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),at(_f,ze,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),_f)),Gu=Oc((wf={},at(wf,Te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),at(wf,ze,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),wf)),kre=Oc((Ef={},at(Ef,Te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),at(Ef,ze,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ef)),Rre=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,JN="fa-layers-text",Ore=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Nre=Oc((Sf={},at(Sf,Te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),at(Sf,ze,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Sf)),ZN=[1,2,3,4,5,6,7,8,9,10],$re=ZN.concat([11,12,13,14,15,16,17,18,19,20]),Dre=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_o={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ku=new Set;Object.keys(qu[Te]).map(Ku.add.bind(Ku));Object.keys(qu[ze]).map(Ku.add.bind(Ku));var jre=[].concat(kw,Rc(Ku),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_o.GROUP,_o.SWAP_OPACITY,_o.PRIMARY,_o.SECONDARY]).concat(ZN.map(function(t){return"".concat(t,"x")})).concat($re.map(function(t){return"w-".concat(t)})),Ql=Ui.FontAwesomeConfig||{};function Mre(t){var e=Ae.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Lre(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ae&&typeof Ae.querySelector=="function"){var Vre=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Vre.forEach(function(t){var e=Iw(t,2),n=e[0],r=e[1],i=Lre(Mre(n));i!=null&&(Ql[r]=i)})}var e$={styleDefault:"solid",familyDefault:"classic",cssPrefix:QN,replacementClass:YN,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ql.familyPrefix&&(Ql.cssPrefix=Ql.familyPrefix);var _a=L(L({},e$),Ql);_a.autoReplaceSvg||(_a.observeMutations=!1);var z={};Object.keys(e$).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){_a[t]=n,Yl.forEach(function(r){return r(z)})},get:function(){return _a[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){_a.cssPrefix=e,Yl.forEach(function(n){return n(z)})},get:function(){return _a.cssPrefix}});Ui.FontAwesomeConfig=z;var Yl=[];function Fre(t){return Yl.push(t),function(){Yl.splice(Yl.indexOf(t),1)}}var ii=f0,fr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ure(t){if(!(!t||!Zr)){var e=Ae.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Ae.head.insertBefore(e,r),t}}var zre="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qu(){for(var t=12,e="";t-- >0;)e+=zre[Math.random()*62|0];return e}function Wa(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Rw(t){return t.classList?Wa(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function t$(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bre(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(t$(t[n]),'" ')},"").trim()}function Em(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ow(t){return t.size!==fr.size||t.x!==fr.x||t.y!==fr.y||t.rotate!==fr.rotate||t.flipX||t.flipY}function Wre(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Hre(t){var e=t.transform,n=t.width,r=n===void 0?f0:n,i=t.height,o=i===void 0?f0:i,s=t.startCentered,a=s===void 0?!1:s,l="";return a&&KN?l+="translate(".concat(e.x/ii-r/2,"em, ").concat(e.y/ii-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/ii,"em), calc(-50% + ").concat(e.y/ii,"em)) "):l+="translate(".concat(e.x/ii,"em, ").concat(e.y/ii,"em) "),l+="scale(".concat(e.size/ii*(e.flipX?-1:1),", ").concat(e.size/ii*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var qre=`:root, :host {
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
}`;function n$(){var t=QN,e=YN,n=z.cssPrefix,r=z.replacementClass,i=qre;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var BT=!1;function Yg(){z.autoAddCss&&!BT&&(Ure(n$()),BT=!0)}var Gre={mixout:function(){return{dom:{css:n$,insertCss:Yg}}},hooks:function(){return{beforeDOMElementCreation:function(){Yg()},beforeI2svg:function(){Yg()}}}},qr=Ui||{};qr[Hr]||(qr[Hr]={});qr[Hr].styles||(qr[Hr].styles={});qr[Hr].hooks||(qr[Hr].hooks={});qr[Hr].shims||(qr[Hr].shims=[]);var zn=qr[Hr],r$=[],Kre=function t(){Ae.removeEventListener("DOMContentLoaded",t),wh=1,r$.map(function(e){return e()})},wh=!1;Zr&&(wh=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),wh||Ae.addEventListener("DOMContentLoaded",Kre));function Qre(t){Zr&&(wh?setTimeout(t,0):r$.push(t))}function Nc(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?t$(t):"<".concat(e," ").concat(Bre(r),">").concat(o.map(Nc).join(""),"</").concat(e,">")}function WT(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Yre=function(e,n){return function(r,i,o,s){return e.call(n,r,i,o,s)}},Xg=function(e,n,r,i){var o=Object.keys(e),s=o.length,a=i!==void 0?Yre(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,e[u],u,e);return c};function Xre(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function h0(t){var e=Xre(t);return e.length===1?e[0].toString(16):null}function Jre(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function HT(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function p0(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=HT(e);typeof zn.hooks.addPack=="function"&&!i?zn.hooks.addPack(t,HT(e)):zn.styles[t]=L(L({},zn.styles[t]||{}),o),t==="fas"&&p0("fa",e)}var bf,xf,Tf,Cs=zn.styles,Zre=zn.shims,eie=(bf={},at(bf,Te,Object.values(Gu[Te])),at(bf,ze,Object.values(Gu[ze])),bf),Nw=null,i$={},o$={},s$={},a$={},l$={},tie=(xf={},at(xf,Te,Object.keys(Hu[Te])),at(xf,ze,Object.keys(Hu[ze])),xf);function nie(t){return~jre.indexOf(t)}function rie(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!nie(i)?i:null}var u$=function(){var e=function(o){return Xg(Cs,function(s,a,l){return s[l]=Xg(a,o,{}),s},{})};i$=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),o$=e(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),l$=e(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in Cs||z.autoFetchSvg,r=Xg(Zre,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});s$=r.names,a$=r.unicodes,Nw=Sm(z.styleDefault,{family:z.familyDefault})};Fre(function(t){Nw=Sm(t.styleDefault,{family:z.familyDefault})});u$();function $w(t,e){return(i$[t]||{})[e]}function iie(t,e){return(o$[t]||{})[e]}function wo(t,e){return(l$[t]||{})[e]}function c$(t){return s$[t]||{prefix:null,iconName:null}}function oie(t){var e=a$[t],n=$w("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function zi(){return Nw}var Dw=function(){return{prefix:null,iconName:null,rest:[]}};function Sm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Te:n,i=Hu[r][t],o=qu[r][t]||qu[r][i],s=t in zn.styles?t:null;return o||s||null}var qT=(Tf={},at(Tf,Te,Object.keys(Gu[Te])),at(Tf,ze,Object.keys(Gu[ze])),Tf);function bm(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},at(e,Te,"".concat(z.cssPrefix,"-").concat(Te)),at(e,ze,"".concat(z.cssPrefix,"-").concat(ze)),e),s=null,a=Te;(t.includes(o[Te])||t.some(function(u){return qT[Te].includes(u)}))&&(a=Te),(t.includes(o[ze])||t.some(function(u){return qT[ze].includes(u)}))&&(a=ze);var l=t.reduce(function(u,c){var f=rie(z.cssPrefix,c);if(Cs[c]?(c=eie[a].includes(c)?kre[a][c]:c,s=c,u.prefix=c):tie[a].indexOf(c)>-1?(s=c,u.prefix=Sm(c,{family:a})):f?u.iconName=f:c!==z.replacementClass&&c!==o[Te]&&c!==o[ze]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=s==="fa"?c$(u.iconName):{},p=wo(u.prefix,u.iconName);d.prefix&&(s=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Cs.far&&Cs.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},Dw());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ze&&(Cs.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=wo(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=zi()||"fas"),l}var sie=function(){function t(){yre(this,t),this.definitions={}}return _re(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),s[a]),p0(a,s[a]);var l=Gu[Te][a];l&&p0(l,s[a]),u$()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),GT=[],Ps={},Ws={},aie=Object.keys(Ws);function lie(t,e){var n=e.mixoutsTo;return GT=t,Ps={},Object.keys(Ws).forEach(function(r){aie.indexOf(r)===-1&&delete Ws[r]}),GT.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),_h(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Ps[s]||(Ps[s]=[]),Ps[s].push(o[s])})}r.provides&&r.provides(Ws)}),n}function m0(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Ps[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function Bo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ps[t]||[];i.forEach(function(o){o.apply(null,n)})}function Gr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ws[t]?Ws[t].apply(null,e):void 0}function g0(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||zi();if(e)return e=wo(n,e)||e,WT(f$.definitions,n,e)||WT(zn.styles,n,e)}var f$=new sie,uie=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Bo("noAuto")},cie={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zr?(Bo("beforeI2svg",e),Gr("pseudoElements2svg",e),Gr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,Qre(function(){die({autoReplaceSvgRoot:n}),Bo("watch",e)})}},fie={icon:function(e){if(e===null)return null;if(_h(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:wo(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Sm(e[0]);return{prefix:r,iconName:wo(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(Rre))){var i=bm(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||zi(),iconName:wo(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=zi();return{prefix:o,iconName:wo(o,e)||e}}}},yn={noAuto:uie,config:z,dom:cie,parse:fie,library:f$,findIconDefinition:g0,toHtml:Nc},die=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ae:n;(Object.keys(zn.styles).length>0||z.autoFetchSvg)&&Zr&&z.autoReplaceSvg&&yn.dom.i2svg({node:r})};function xm(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Nc(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Zr){var r=Ae.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function hie(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(Ow(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Em(L(L({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function pie(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:s}),children:r}]}]}function jw(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,v=r.found?r:n,g=v.width,w=v.height,y=i==="fak",m=[z.replacementClass,o?"".concat(z.cssPrefix,"-").concat(o):""].filter(function(D){return f.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(f.classes).join(" "),_={children:[],attributes:L(L({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:m,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(w)})},E=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(g/w*16*.0625,"em")}:{};p&&(_.attributes[zo]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(c||Qu())},children:[l]}),delete _.attributes.title);var S=L(L({},_),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:L(L({},E),f.styles)}),T=r.found&&n.found?Gr("generateAbstractMask",S)||{children:[],attributes:{}}:Gr("generateAbstractIcon",S)||{children:[],attributes:{}},x=T.children,O=T.attributes;return S.children=x,S.attributes=O,a?pie(S):hie(S)}function KT(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,a=t.watchable,l=a===void 0?!1:a,u=L(L(L({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[zo]="");var c=L({},s.styles);Ow(i)&&(c.transform=Hre({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Em(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function mie(t){var e=t.content,n=t.title,r=t.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Em(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Jg=zn.styles;function v0(t){var e=t[0],n=t[1],r=t.slice(4),i=Iw(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(_o.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(_o.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(_o.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var gie={found:!1,width:512,height:512};function vie(t,e){!XN&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function y0(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=zi()),new Promise(function(r,i){if(Gr("missingIconAbstract"),n==="fa"){var o=c$(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Jg[e]&&Jg[e][t]){var s=Jg[e][t];return r(v0(s))}vie(t,e),r(L(L({},gie),{},{icon:z.showMissingIcons&&t?Gr("missingIconAbstract")||{}:{}}))})}var QT=function(){},_0=z.measurePerformance&&vf&&vf.mark&&vf.measure?vf:{mark:QT,measure:QT},Cl='FA "6.5.1"',yie=function(e){return _0.mark("".concat(Cl," ").concat(e," begins")),function(){return d$(e)}},d$=function(e){_0.mark("".concat(Cl," ").concat(e," ends")),_0.measure("".concat(Cl," ").concat(e),"".concat(Cl," ").concat(e," begins"),"".concat(Cl," ").concat(e," ends"))},Mw={begin:yie,end:d$},fd=function(){};function YT(t){var e=t.getAttribute?t.getAttribute(zo):null;return typeof e=="string"}function _ie(t){var e=t.getAttribute?t.getAttribute(Pw):null,n=t.getAttribute?t.getAttribute(Aw):null;return e&&n}function wie(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function Eie(){if(z.autoReplaceSvg===!0)return dd.replace;var t=dd[z.autoReplaceSvg];return t||dd.replace}function Sie(t){return Ae.createElementNS("http://www.w3.org/2000/svg",t)}function bie(t){return Ae.createElement(t)}function h$(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Sie:bie:n;if(typeof t=="string")return Ae.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild(h$(s,{ceFn:r}))}),i}function xie(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var dd={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(h$(i),n)}),n.getAttribute(zo)===null&&z.keepOriginalSource){var r=Ae.createComment(xie(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Rw(n).indexOf(z.replacementClass))return dd.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Nc(a)}).join(`
`);n.setAttribute(zo,""),n.innerHTML=s}};function XT(t){t()}function p$(t,e){var n=typeof e=="function"?e:fd;if(t.length===0)n();else{var r=XT;z.mutateApproach===Pre&&(r=Ui.requestAnimationFrame||XT),r(function(){var i=Eie(),o=Mw.begin("mutate");t.map(i),o(),n()})}}var Lw=!1;function m$(){Lw=!0}function w0(){Lw=!1}var Eh=null;function JT(t){if(UT&&z.observeMutations){var e=t.treeCallback,n=e===void 0?fd:e,r=t.nodeCallback,i=r===void 0?fd:r,o=t.pseudoElementsCallback,s=o===void 0?fd:o,a=t.observeMutationsRoot,l=a===void 0?Ae:a;Eh=new UT(function(u){if(!Lw){var c=zi();Wa(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!YT(f.addedNodes[0])&&(z.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&z.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&YT(f.target)&&~Dre.indexOf(f.attributeName))if(f.attributeName==="class"&&_ie(f.target)){var d=bm(Rw(f.target)),p=d.prefix,v=d.iconName;f.target.setAttribute(Pw,p||c),v&&f.target.setAttribute(Aw,v)}else wie(f.target)&&i(f.target)})}}),Zr&&Eh.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Tie(){Eh&&Eh.disconnect()}function Iie(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function Cie(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=bm(Rw(t));return i.prefix||(i.prefix=zi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=iie(i.prefix,t.innerText)||$w(i.prefix,h0(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Pie(t){var e=Wa(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Qu()):(e["aria-hidden"]="true",e.focusable="false")),e}function Aie(){return{iconName:null,title:null,titleId:null,prefix:null,transform:fr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ZT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Cie(t),r=n.iconName,i=n.prefix,o=n.rest,s=Pie(t),a=m0("parseNodeAttributes",{},t),l=e.styleParser?Iie(t):[];return L({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:fr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var kie=zn.styles;function g$(t){var e=z.autoReplaceSvg==="nest"?ZT(t,{styleParser:!1}):ZT(t);return~e.extra.classes.indexOf(JN)?Gr("generateLayersText",t,e):Gr("generateSvgReplacementMutation",t,e)}var Bi=new Set;kw.map(function(t){Bi.add("fa-".concat(t))});Object.keys(Hu[Te]).map(Bi.add.bind(Bi));Object.keys(Hu[ze]).map(Bi.add.bind(Bi));Bi=Rc(Bi);function eI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zr)return Promise.resolve();var n=Ae.documentElement.classList,r=function(f){return n.add("".concat(zT,"-").concat(f))},i=function(f){return n.remove("".concat(zT,"-").concat(f))},o=z.autoFetchSvg?Bi:kw.map(function(c){return"fa-".concat(c)}).concat(Object.keys(kie));o.includes("fa")||o.push("fa");var s=[".".concat(JN,":not([").concat(zo,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(zo,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Wa(t.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Mw.begin("onTree"),u=a.reduce(function(c,f){try{var d=g$(f);d&&c.push(d)}catch(p){XN||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){p$(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),f(d)})})}function Rie(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;g$(t).then(function(n){n&&p$([n],e)})}function Oie(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:g0(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:g0(i||{})),t(r,L(L({},n),{},{mask:i}))}}var Nie=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?fr:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,p=n.titleId,v=p===void 0?null:p,g=n.classes,w=g===void 0?[]:g,y=n.attributes,m=y===void 0?{}:y,_=n.styles,E=_===void 0?{}:_;if(e){var S=e.prefix,T=e.iconName,x=e.icon;return xm(L({type:"icon"},e),function(){return Bo("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(d?m["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(v||Qu()):(m["aria-hidden"]="true",m.focusable="false")),jw({icons:{main:v0(x),mask:l?v0(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:T,transform:L(L({},fr),i),symbol:s,title:d,maskId:c,titleId:v,extra:{attributes:m,styles:E,classes:w}})})}},$ie={mixout:function(){return{icon:Oie(Nie)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=eI,n.nodeCallback=Rie,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ae:r,o=n.callback,s=o===void 0?function(){}:o;return eI(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(p,v){Promise.all([y0(i,a),c.iconName?y0(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var w=Iw(g,2),y=w[0],m=w[1];p([n,jw({icons:{main:y,mask:m},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=Em(a);l.length>0&&(i.style=l);var u;return Ow(s)&&(u=Gr("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},Die={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return xm({type:"layer"},function(){Bo("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(Rc(o)).join(" ")},children:s}]})}}}},jie={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return xm({type:"counter",content:n},function(){return Bo("beforeDOMElementCreation",{content:n,params:r}),mie({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(Rc(a))}})})}}}},Mie={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?fr:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,p=d===void 0?{}:d;return xm({type:"text",content:n},function(){return Bo("beforeDOMElementCreation",{content:n,params:r}),KT({content:n,transform:L(L({},fr),o),title:a,extra:{attributes:f,styles:p,classes:["".concat(z.cssPrefix,"-layers-text")].concat(Rc(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(KN){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,KT({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},Lie=new RegExp('"',"ug"),tI=[1105920,1112319];function Vie(t){var e=t.replace(Lie,""),n=Jre(e,0),r=n>=tI[0]&&n<=tI[1],i=e.length===2?e[0]===e[1]:!1;return{value:h0(i?e[0]:e),isSecondary:r||i}}function nI(t,e){var n="".concat(Cre).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=Wa(t.children),s=o.filter(function(x){return x.getAttribute(d0)===e})[0],a=Ui.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(Ore),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ze:Te,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?qu[d][l[2].toLowerCase()]:Nre[d][u],v=Vie(f),g=v.value,w=v.isSecondary,y=l[0].startsWith("FontAwesome"),m=$w(p,g),_=m;if(y){var E=oie(g);E.iconName&&E.prefix&&(m=E.iconName,p=E.prefix)}if(m&&!w&&(!s||s.getAttribute(Pw)!==p||s.getAttribute(Aw)!==_)){t.setAttribute(n,_),s&&t.removeChild(s);var S=Aie(),T=S.extra;T.attributes[d0]=e,y0(m,p).then(function(x){var O=jw(L(L({},S),{},{icons:{main:x,mask:Dw()},prefix:p,iconName:_,extra:T,watchable:!0})),D=Ae.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=O.map(function(R){return Nc(R)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Fie(t){return Promise.all([nI(t,"::before"),nI(t,"::after")])}function Uie(t){return t.parentNode!==document.head&&!~Are.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(d0)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function rI(t){if(Zr)return new Promise(function(e,n){var r=Wa(t.querySelectorAll("*")).filter(Uie).map(Fie),i=Mw.begin("searchPseudoElements");m$(),Promise.all(r).then(function(){i(),w0(),e()}).catch(function(){i(),w0(),n()})})}var zie={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=rI,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ae:r;z.searchPseudoElements&&rI(i)}}},iI=!1,Bie={mixout:function(){return{dom:{unwatch:function(){m$(),iI=!0}}}},hooks:function(){return{bootstrap:function(){JT(m0("mutationObserverCallbacks",{}))},noAuto:function(){Tie()},watch:function(n){var r=n.observeMutationsRoot;iI?w0():JT(m0("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},oI=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Wie={mixout:function(){return{parse:{transform:function(n){return oI(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=oI(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},p={outer:a,inner:f,path:d};return{tag:"g",attributes:L({},p.outer),children:[{tag:"g",attributes:L({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),p.path)}]}]}}}},Zg={x:0,y:0,width:"100%",height:"100%"};function sI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Hie(t){return t.tag==="g"?t.children:[t]}var qie={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?bm(i.split(" ").map(function(s){return s.trim()})):Dw();return o.prefix||(o.prefix=zi()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,d=s.icon,p=Wre({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:L(L({},Zg),{},{fill:"white"})},g=c.children?{children:c.children.map(sI)}:{},w={tag:"g",attributes:L({},p.inner),children:[sI(L({tag:c.tag,attributes:L(L({},c.attributes),p.path)},g))]},y={tag:"g",attributes:L({},p.outer),children:[w]},m="mask-".concat(a||Qu()),_="clip-".concat(a||Qu()),E={tag:"mask",attributes:L(L({},Zg),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,y]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:Hie(d)},E]};return r.push(S,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(m,")")},Zg)}),{children:r,attributes:i}}}},Gie={provides:function(e){var n=!1;Ui.matchMedia&&(n=Ui.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=L(L({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Kie={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},Qie=[Gre,$ie,Die,jie,Mie,zie,Bie,Wie,qie,Gie,Kie];lie(Qie,{mixoutsTo:yn});yn.noAuto;yn.config;yn.library;yn.dom;var E0=yn.parse;yn.findIconDefinition;yn.toHtml;var Yie=yn.icon;yn.layer;yn.text;yn.counter;function aI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function wi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?aI(Object(n),!0).forEach(function(r){As(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):aI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Sh(t){"@babel/helpers - typeof";return Sh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sh(t)}function As(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xie(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Jie(t,e){if(t==null)return{};var n=Xie(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function S0(t){return Zie(t)||eoe(t)||toe(t)||noe()}function Zie(t){if(Array.isArray(t))return b0(t)}function eoe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function toe(t,e){if(t){if(typeof t=="string")return b0(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b0(t,e)}}function b0(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function noe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function roe(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,p=t.inverse,v=t.border,g=t.listItem,w=t.flip,y=t.size,m=t.rotation,_=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":p,"fa-border":v,"fa-li":g,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},As(e,"fa-".concat(y),typeof y<"u"&&y!==null),As(e,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),As(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),As(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function ioe(t){return t=t-0,t===t}function v$(t){return ioe(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ooe=["style"];function soe(t){return t.charAt(0).toUpperCase()+t.slice(1)}function aoe(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=v$(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[soe(i)]=o:e[i]=o,e},{})}function y$(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return y$(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=aoe(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[v$(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=Jie(n,ooe);return i.attrs.style=wi(wi({},i.attrs.style),s),t.apply(void 0,[e.tag,wi(wi({},i.attrs),a)].concat(S0(r)))}var _$=!1;try{_$=!0}catch{}function loe(){if(!_$&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function lI(t){if(t&&Sh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(E0.icon)return E0.icon(t);if(t===null)return null;if(t&&Sh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ev(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?As({},t,e):{}}var Ha=H.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,o=t.className,s=t.title,a=t.titleId,l=t.maskId,u=lI(n),c=ev("classes",[].concat(S0(roe(t)),S0(o.split(" ")))),f=ev("transform",typeof t.transform=="string"?E0.transform(t.transform):t.transform),d=ev("mask",lI(r)),p=Yie(u,wi(wi(wi(wi({},c),f),d),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!p)return loe("Could not find icon",u),null;var v=p.abstract,g={ref:e};return Object.keys(t).forEach(function(w){Ha.defaultProps.hasOwnProperty(w)||(g[w]=t[w])}),uoe(v[0],g)});Ha.displayName="FontAwesomeIcon";Ha.propTypes={beat:F.bool,border:F.bool,beatFade:F.bool,bounce:F.bool,className:F.string,fade:F.bool,flash:F.bool,mask:F.oneOfType([F.object,F.array,F.string]),maskId:F.string,fixedWidth:F.bool,inverse:F.bool,flip:F.oneOf([!0,!1,"horizontal","vertical","both"]),icon:F.oneOfType([F.object,F.array,F.string]),listItem:F.bool,pull:F.oneOf(["right","left"]),pulse:F.bool,rotation:F.oneOf([0,90,180,270]),shake:F.bool,size:F.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:F.bool,spinPulse:F.bool,spinReverse:F.bool,symbol:F.oneOfType([F.bool,F.string]),title:F.string,titleId:F.string,transform:F.oneOfType([F.string,F.object]),swapOpacity:F.bool};Ha.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var uoe=y$.bind(null,H.createElement),coe={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},foe={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const doe=A(Ha)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: rgb(114, 137, 218);
    }
`,hoe=A(Ha)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: rgb(205, 32, 31);
    }
`,poe=()=>h.jsx(doe,{icon:coe,size:"2x"}),moe=()=>h.jsx(hoe,{icon:foe,size:"2x"}),goe=A.footer`
    margin-top: 50px;
    width: 100%;
    display: flex;
    // justify-content: space-between;
    background-color: rgb(21, 23, 23);
`,voe=A.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-right: 100px;
    padding: 20px;

    h1 {
        color: #fff;
    }
`,yoe=A.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    h1 {
        color: #fff;
    }
`,oi=A(P1)`
    text-decoration: none;
    font-weight: bold;
    color: rgb(115, 115, 115);
    padding: 10px 0 10px 0;
    transition: 0.6s ease;

    &:hover {
        color: #fff;
    }

`,_oe=A.div`
    display: flex;
`,woe=A(FN)`
    color: rgb(115, 115, 115);
    border-radius: 10px;
    margin-right: 15px;

    &:hover {
        background: #d6249f;
        background: radial-gradient(circle at 0% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        box-shadow: 0px 3px 10px rgba(0,0,0,.25);
        transition: 1s ease-out;
    }
`,Eoe=A(zN)`
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: #3b5998;
    }
`,Soe=()=>h.jsxs(goe,{children:[h.jsxs(voe,{children:[h.jsx("h1",{children:"Information"}),h.jsx(oi,{to:"/about",children:"About"}),h.jsx(oi,{to:"/conventions",children:"Conventions"}),h.jsx(oi,{to:"/mentoring",children:"Mentoring"}),h.jsx(oi,{to:"/contact",children:"Contact Me"})]}),h.jsxs(yoe,{children:[h.jsx("h1",{children:"Follow me on Social Media!"}),h.jsxs(_oe,{children:[h.jsx(oi,{children:h.jsx(woe,{fontSize:"large"})}),h.jsx(oi,{children:h.jsx(Eoe,{fontSize:"large"})}),h.jsx(oi,{children:h.jsx(poe,{})}),h.jsx(oi,{children:h.jsx(moe,{})})]})]})]}),boe=()=>h.jsxs("div",{children:[h.jsx(are,{}),h.jsx("section",{children:h.jsx(Soe,{})})]}),xoe=A.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`,Toe=A.div`
    width: 70%;
    font-family: "Architects Daughter", cursive;
`,Ioe=()=>h.jsx(xoe,{children:h.jsxs(Toe,{children:[h.jsx("h1",{children:"About the artist"}),h.jsxs("p",{children:["Sandra Sanchez, a distinguished artist from Southern California, seamlessly blends the realms of traditional fantasy and realistic portrait art to create the vivid and luminous pieces she is known for today.",h.jsx("br",{}),h.jsx("br",{}),"Her artistic journey traces back to childhood visits to The Getty Museum in Los Angeles, where the profound influence of the Old Masters ignited a passion for technically and emotionally rich painting. Guided by a desire to elevate her craft, Sandra embarked on a new artistic journey, completing the core program at the prestigious Grand Central Atelier after graduating high school. This experience became the bedrock for her commitment to mastering the intricacies of traditional painting.",h.jsx("br",{}),h.jsx("br",{}),"Upon moving back to California in 2022, Sandra made a conscious decision to weave her cherished childhood influences into her canvases by painting subjects from favorite her favorite movies, video games and anime. She brings a totally unique fusion of classical and contemporary elements to her work.",h.jsx("br",{}),h.jsx("br",{}),"Sandra's artistic prowess extends beyond the confines of classical art, allowing her to skillfully render fantasy subjects with a nuanced touch. Her paintings not only showcase technical mastery but also exude a profound connection to humanity. Through the interplay of sensitive light and fluid composition, she captures the essence of her subjects and can create a powerful visual impact.",h.jsx("br",{}),h.jsx("br",{}),"Acknowledged for her exceptional talent, Sandra is a recipient of prestigious awards, including the Anders Larson-Toich Fund Scholarship, the Alma Schapiro Fund Scholarship, and the Neil Patterson Award of Excellence. As a two-time Hudson River Fellow, she continues to evolve as an artist, consistently breathing life and energy into her art, ensuring the spirit of her subjects resonates in every stroke."]}),h.jsx("br",{}),h.jsx("br",{})]})}),Coe=()=>h.jsx("div",{children:h.jsx("h1",{children:"I am the mentoring page!"})}),Poe=()=>h.jsx("div",{children:h.jsx("h1",{children:"I am the contact me page!"})}),Aoe=A.div`
    display: flex;
    flex-direction: column;
`,koe=A.div`
    display: flex;
    justify-content: flex-end;
`,Roe=A.span`
    color: rgb(255, 51, 153);
    font-weight: bold;
`,w$="rgb(255, 51, 153)",Ooe="black",x0=No`
  top: -14px;
  font-size: 12px;
  color: ${Ooe};
`,E$=A.label`
  color: ${w$};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  //if shrink is truthy, then apply the shrinkLabelStyles
  //destructuring shrink directly off of props
  ${({shrink:t})=>t&&x0};

  //alternative, does the same thing
  // ${t=>t.shrink&&x0};
`,Noe=A.input`
  background: none;
  background-color: white;
  color: ${w$};
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
  
  &:focus ~ ${E$} {
    ${x0};
  }
`,$oe=A.div`
  position: relative;
  margin: 50px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`,ks=({label:t,...e})=>h.jsxs($oe,{children:[h.jsx(Noe,{...e}),t&&h.jsx(E$,{shrink:!!(e.value&&typeof e.value=="string"&&e.value.length),children:t})]}),Doe=()=>{const t=Yr(),[e,n]=b.useState({displayName:"",email:"",password:"",confirmPassword:""}),{displayName:r,email:i,password:o,confirmPassword:s}=e,{currentUser:a,setCurrentUser:l}=b.useContext(wm),u=d=>{const{name:p,value:v}=d.target;n({...e,[p]:v})},c=()=>{n({displayName:"",email:"",password:"",confirmPassword:""})},f=async d=>{if(d.preventDefault(),o!==s){alert("Passwords do not match!");return}try{const p=await wne(i,o);if(p){const{user:v}=p;await _w(v,{displayName:r}),l(v)}}catch(p){console.log(p)}c()};return a&&t("/"),h.jsxs(Aoe,{children:[h.jsx("h2",{children:"Sign Up!"}),h.jsx(Roe,{children:"Create an account with email and password"}),h.jsxs("form",{onSubmit:f,children:[h.jsx(ks,{label:"User Name",type:"text",name:"displayName",value:r,required:!0,onChange:u}),h.jsx(ks,{label:"Email",type:"text",name:"email",value:i,required:!0,onChange:u}),h.jsx(ks,{label:"Password",type:"password",name:"password",value:o,required:!0,onChange:u}),h.jsx(ks,{label:"Confirm Password",type:"password",name:"confirmPassword",value:s,required:!0,onChange:u}),h.jsx(koe,{children:h.jsx(On,{isLoading:!1,buttonType:Je.google,children:"Sign Up"})})]})]})},joe=A.div`
    display: flex;
    flex-direction: column;
`,Moe=A.div`
    display: flex;
    justify-content: space-evenly;
`,Loe=A.span`
    color: rgb(255, 51, 153);
    font-weight: bold;
`,Voe=()=>{const t=Yr(),{currentUser:e,setCurrentUser:n}=b.useContext(wm),[r,i]=b.useState({email:"",password:""}),{email:o,password:s}=r,a=f=>{const{name:d,value:p}=f.target;i({...r,[d]:p})},l=()=>{i({email:"",password:""})},u=async f=>{f.preventDefault();try{const d=await _ne(o,s);if(console.log(d),d){const{user:p}=d;n(p)}}catch(d){console.log(`There was an error signing in: ${d}`)}l()},c=async()=>{try{const f=await vne();if(console.log(f),f){const{user:d}=f;await _w(d),n(d)}}catch(f){console.log(f)}};return e&&t("/"),h.jsxs(joe,{children:[h.jsx("h2",{children:"Already have an account?"}),h.jsx(Loe,{children:"Sign in with your email and password"}),h.jsxs("form",{onSubmit:u,children:[h.jsx(ks,{label:"email",type:"email",name:"email",value:o,required:!0,onChange:a}),h.jsx(ks,{label:"password",type:"password",name:"password",value:s,required:!0,onChange:a}),h.jsxs(Moe,{children:[h.jsx(On,{buttonType:Je.default,children:"Sign In With Email"}),h.jsx(On,{buttonType:Je.google,type:"submit",onClick:c,children:"Sign In With Google"})]})]})]})},Foe=A.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 30px auto;
`,Uoe=()=>h.jsxs(Foe,{children:[h.jsx(Voe,{}),h.jsx(Doe,{})]}),zoe=A.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    margin: 20px;
`,S$=A.div`
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
`;const Boe=A.div`
    margin: 20px;
    font-family: "Caveat", cursive;
    font-weight: 700;
    font-size: 20px;
`,Woe=A.div`
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

    &:hover ${S$} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`,Hoe=({product:t})=>{const{name:e,imageUrl:n,id:r}=t,i=Yr(),o=()=>i(`${r}`,{state:{product:t}});return h.jsxs(Woe,{children:[h.jsx("img",{src:n,alt:e}),h.jsx(Boe,{children:e}),h.jsx(S$,{children:h.jsx(On,{isLoading:!1,buttonType:Je.default,onClick:o,children:"View Details"})})]})},qoe=()=>{const{categoriesMap:t}=b.useContext(k1),{category:e}=xj(),[n,r]=b.useState(t[e]);return b.useEffect(()=>{r(t[e])},[t,e]),console.log(n),h.jsx(zoe,{children:n&&n.map(i=>h.jsx(Hoe,{product:i,children:i.sizesAndPrices.map(o=>h.jsxs("div",{children:["Size: ",o.size,", Price: ",o.price]},o.size))},i.id))})};var b$={},Vw={},Fw={};Object.defineProperty(Fw,"__esModule",{value:!0});var uI="html",cI="head",If="body",Goe=/<([a-zA-Z]+[0-9]?)/,fI=/<head[^]*>/i,dI=/<body[^]*>/i,bh=function(t,e){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},T0=function(t,e){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},hI=typeof window=="object"&&window.DOMParser;if(typeof hI=="function"){var Koe=new hI,Qoe="text/html";T0=function(t,e){return e&&(t="<".concat(e,">").concat(t,"</").concat(e,">")),Koe.parseFromString(t,Qoe)},bh=T0}if(typeof document=="object"&&document.implementation){var Cf=document.implementation.createHTMLDocument();bh=function(t,e){if(e){var n=Cf.documentElement.querySelector(e);return n&&(n.innerHTML=t),Cf}return Cf.documentElement.innerHTML=t,Cf}}var Pf=typeof document=="object"&&document.createElement("template"),I0;Pf&&Pf.content&&(I0=function(t){return Pf.innerHTML=t,Pf.content.childNodes});function Yoe(t){var e,n,r=t.match(Goe),i=r&&r[1]?r[1].toLowerCase():"";switch(i){case uI:{var o=T0(t);if(!fI.test(t)){var s=o.querySelector(cI);(e=s==null?void 0:s.parentNode)===null||e===void 0||e.removeChild(s)}if(!dI.test(t)){var s=o.querySelector(If);(n=s==null?void 0:s.parentNode)===null||n===void 0||n.removeChild(s)}return o.querySelectorAll(uI)}case cI:case If:{var a=bh(t).querySelectorAll(i);return dI.test(t)&&fI.test(t)?a[0].parentNode.childNodes:a}default:{if(I0)return I0(t);var s=bh(t,If).querySelector(If);return s.childNodes}}}Fw.default=Yoe;var wa={},Uw={},zw={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0;var e;(function(r){r.Root="root",r.Text="text",r.Directive="directive",r.Comment="comment",r.Script="script",r.Style="style",r.Tag="tag",r.CDATA="cdata",r.Doctype="doctype"})(e=t.ElementType||(t.ElementType={}));function n(r){return r.type===e.Tag||r.type===e.Script||r.type===e.Style}t.isTag=n,t.Root=e.Root,t.Text=e.Text,t.Directive=e.Directive,t.Comment=e.Comment,t.Script=e.Script,t.Style=e.Style,t.Tag=e.Tag,t.CDATA=e.CDATA,t.Doctype=e.Doctype})(zw);var ee={},Ji=Ne&&Ne.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Xl=Ne&&Ne.__assign||function(){return Xl=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Xl.apply(this,arguments)};Object.defineProperty(ee,"__esModule",{value:!0});ee.cloneNode=ee.hasChildren=ee.isDocument=ee.isDirective=ee.isComment=ee.isText=ee.isCDATA=ee.isTag=ee.Element=ee.Document=ee.CDATA=ee.NodeWithChildren=ee.ProcessingInstruction=ee.Comment=ee.Text=ee.DataNode=ee.Node=void 0;var rn=zw,Bw=function(){function t(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),t.prototype.cloneNode=function(e){return e===void 0&&(e=!1),Ww(this,e)},t}();ee.Node=Bw;var Tm=function(t){Ji(e,t);function e(n){var r=t.call(this)||this;return r.data=n,r}return Object.defineProperty(e.prototype,"nodeValue",{get:function(){return this.data},set:function(n){this.data=n},enumerable:!1,configurable:!0}),e}(Bw);ee.DataNode=Tm;var x$=function(t){Ji(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.type=rn.ElementType.Text,n}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),e}(Tm);ee.Text=x$;var T$=function(t){Ji(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.type=rn.ElementType.Comment,n}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),e}(Tm);ee.Comment=T$;var I$=function(t){Ji(e,t);function e(n,r){var i=t.call(this,r)||this;return i.name=n,i.type=rn.ElementType.Directive,i}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),e}(Tm);ee.ProcessingInstruction=I$;var Im=function(t){Ji(e,t);function e(n){var r=t.call(this)||this;return r.children=n,r}return Object.defineProperty(e.prototype,"firstChild",{get:function(){var n;return(n=this.children[0])!==null&&n!==void 0?n:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"childNodes",{get:function(){return this.children},set:function(n){this.children=n},enumerable:!1,configurable:!0}),e}(Bw);ee.NodeWithChildren=Im;var C$=function(t){Ji(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.type=rn.ElementType.CDATA,n}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),e}(Im);ee.CDATA=C$;var P$=function(t){Ji(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.type=rn.ElementType.Root,n}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),e}(Im);ee.Document=P$;var A$=function(t){Ji(e,t);function e(n,r,i,o){i===void 0&&(i=[]),o===void 0&&(o=n==="script"?rn.ElementType.Script:n==="style"?rn.ElementType.Style:rn.ElementType.Tag);var s=t.call(this,i)||this;return s.name=n,s.attribs=r,s.type=o,s}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tagName",{get:function(){return this.name},set:function(n){this.name=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"attributes",{get:function(){var n=this;return Object.keys(this.attribs).map(function(r){var i,o;return{name:r,value:n.attribs[r],namespace:(i=n["x-attribsNamespace"])===null||i===void 0?void 0:i[r],prefix:(o=n["x-attribsPrefix"])===null||o===void 0?void 0:o[r]}})},enumerable:!1,configurable:!0}),e}(Im);ee.Element=A$;function k$(t){return(0,rn.isTag)(t)}ee.isTag=k$;function R$(t){return t.type===rn.ElementType.CDATA}ee.isCDATA=R$;function O$(t){return t.type===rn.ElementType.Text}ee.isText=O$;function N$(t){return t.type===rn.ElementType.Comment}ee.isComment=N$;function $$(t){return t.type===rn.ElementType.Directive}ee.isDirective=$$;function D$(t){return t.type===rn.ElementType.Root}ee.isDocument=D$;function Xoe(t){return Object.prototype.hasOwnProperty.call(t,"children")}ee.hasChildren=Xoe;function Ww(t,e){e===void 0&&(e=!1);var n;if(O$(t))n=new x$(t.data);else if(N$(t))n=new T$(t.data);else if(k$(t)){var r=e?tv(t.children):[],i=new A$(t.name,Xl({},t.attribs),r);r.forEach(function(l){return l.parent=i}),t.namespace!=null&&(i.namespace=t.namespace),t["x-attribsNamespace"]&&(i["x-attribsNamespace"]=Xl({},t["x-attribsNamespace"])),t["x-attribsPrefix"]&&(i["x-attribsPrefix"]=Xl({},t["x-attribsPrefix"])),n=i}else if(R$(t)){var r=e?tv(t.children):[],o=new C$(r);r.forEach(function(u){return u.parent=o}),n=o}else if(D$(t)){var r=e?tv(t.children):[],s=new P$(r);r.forEach(function(u){return u.parent=s}),t["x-mode"]&&(s["x-mode"]=t["x-mode"]),n=s}else if($$(t)){var a=new I$(t.name,t.data);t["x-name"]!=null&&(a["x-name"]=t["x-name"],a["x-publicId"]=t["x-publicId"],a["x-systemId"]=t["x-systemId"]),n=a}else throw new Error("Not implemented yet: ".concat(t.type));return n.startIndex=t.startIndex,n.endIndex=t.endIndex,t.sourceCodeLocation!=null&&(n.sourceCodeLocation=t.sourceCodeLocation),n}ee.cloneNode=Ww;function tv(t){for(var e=t.map(function(r){return Ww(r,!0)}),n=1;n<e.length;n++)e[n].prev=e[n-1],e[n-1].next=e[n];return e}(function(t){var e=Ne&&Ne.__createBinding||(Object.create?function(a,l,u,c){c===void 0&&(c=u);var f=Object.getOwnPropertyDescriptor(l,u);(!f||("get"in f?!l.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return l[u]}}),Object.defineProperty(a,c,f)}:function(a,l,u,c){c===void 0&&(c=u),a[c]=l[u]}),n=Ne&&Ne.__exportStar||function(a,l){for(var u in a)u!=="default"&&!Object.prototype.hasOwnProperty.call(l,u)&&e(l,a,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.DomHandler=void 0;var r=zw,i=ee;n(ee,t);var o={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},s=function(){function a(l,u,c){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof u=="function"&&(c=u,u=o),typeof l=="object"&&(u=l,l=void 0),this.callback=l??null,this.options=u??o,this.elementCB=c??null}return a.prototype.onparserinit=function(l){this.parser=l},a.prototype.onreset=function(){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},a.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},a.prototype.onerror=function(l){this.handleCallback(l)},a.prototype.onclosetag=function(){this.lastNode=null;var l=this.tagStack.pop();this.options.withEndIndices&&(l.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(l)},a.prototype.onopentag=function(l,u){var c=this.options.xmlMode?r.ElementType.Tag:void 0,f=new i.Element(l,u,void 0,c);this.addNode(f),this.tagStack.push(f)},a.prototype.ontext=function(l){var u=this.lastNode;if(u&&u.type===r.ElementType.Text)u.data+=l,this.options.withEndIndices&&(u.endIndex=this.parser.endIndex);else{var c=new i.Text(l);this.addNode(c),this.lastNode=c}},a.prototype.oncomment=function(l){if(this.lastNode&&this.lastNode.type===r.ElementType.Comment){this.lastNode.data+=l;return}var u=new i.Comment(l);this.addNode(u),this.lastNode=u},a.prototype.oncommentend=function(){this.lastNode=null},a.prototype.oncdatastart=function(){var l=new i.Text(""),u=new i.CDATA([l]);this.addNode(u),l.parent=u,this.lastNode=l},a.prototype.oncdataend=function(){this.lastNode=null},a.prototype.onprocessinginstruction=function(l,u){var c=new i.ProcessingInstruction(l,u);this.addNode(c)},a.prototype.handleCallback=function(l){if(typeof this.callback=="function")this.callback(l,this.dom);else if(l)throw l},a.prototype.addNode=function(l){var u=this.tagStack[this.tagStack.length-1],c=u.children[u.children.length-1];this.options.withStartIndices&&(l.startIndex=this.parser.startIndex),this.options.withEndIndices&&(l.endIndex=this.parser.endIndex),u.children.push(l),c&&(l.prev=c,c.next=l),l.parent=u,this.lastNode=null},a}();t.DomHandler=s,t.default=s})(Uw);var j$={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES=void 0,t.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES.reduce(function(e,n){return e[n.toLowerCase()]=n,e},{})})(j$);Object.defineProperty(wa,"__esModule",{value:!0});wa.formatDOM=wa.formatAttributes=void 0;var Af=Uw,Joe=j$;function Zoe(t){return Joe.CASE_SENSITIVE_TAG_NAMES_MAP[t]}function M$(t){for(var e={},n=0,r=t.length;n<r;n++){var i=t[n];e[i.name]=i.value}return e}wa.formatAttributes=M$;function ese(t){t=t.toLowerCase();var e=Zoe(t);return e||t}function L$(t,e,n){e===void 0&&(e=null);for(var r=[],i,o=0,s=t.length;o<s;o++){var a=t[o];switch(a.nodeType){case 1:{var l=ese(a.nodeName);i=new Af.Element(l,M$(a.attributes)),i.children=L$(l==="template"?a.content.childNodes:a.childNodes,i);break}case 3:i=new Af.Text(a.nodeValue);break;case 8:i=new Af.Comment(a.nodeValue);break;default:continue}var u=r[o-1]||null;u&&(u.next=i),i.parent=e,i.prev=u,i.next=null,r.push(i)}return n&&(i=new Af.ProcessingInstruction(n.substring(0,n.indexOf(" ")).toLowerCase(),n),i.next=r[0]||null,i.parent=e,r.unshift(i),r[1]&&(r[1].prev=r[0])),r}wa.formatDOM=L$;var tse=Ne&&Ne.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Vw,"__esModule",{value:!0});var nse=tse(Fw),rse=wa,ise=/<(![a-zA-Z\s]+)>/;function ose(t){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];var e=t.match(ise),n=e?e[1]:void 0;return(0,rse.formatDOM)((0,nse.default)(t),null,n)}Vw.default=ose;var Cm={},Xn={},Pm={},sse=0;Pm.SAME=sse;var ase=1;Pm.CAMELCASE=ase;Pm.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};const V$=0,Zi=1,Am=2,km=3,Hw=4,F$=5,U$=6;function lse(t){return Pt.hasOwnProperty(t)?Pt[t]:null}function Qt(t,e,n,r,i,o,s){this.acceptsBooleans=e===Am||e===km||e===Hw,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}const Pt={},use=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];use.forEach(t=>{Pt[t]=new Qt(t,V$,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([t,e])=>{Pt[t]=new Qt(t,Zi,!1,e,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(t=>{Pt[t]=new Qt(t,Am,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(t=>{Pt[t]=new Qt(t,Am,!1,t,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(t=>{Pt[t]=new Qt(t,km,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(t=>{Pt[t]=new Qt(t,km,!0,t,null,!1,!1)});["capture","download"].forEach(t=>{Pt[t]=new Qt(t,Hw,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(t=>{Pt[t]=new Qt(t,U$,!1,t,null,!1,!1)});["rowSpan","start"].forEach(t=>{Pt[t]=new Qt(t,F$,!1,t.toLowerCase(),null,!1,!1)});const qw=/[\-\:]([a-z])/g,Gw=t=>t[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(t=>{const e=t.replace(qw,Gw);Pt[e]=new Qt(e,Zi,!1,t,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(t=>{const e=t.replace(qw,Gw);Pt[e]=new Qt(e,Zi,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(t=>{const e=t.replace(qw,Gw);Pt[e]=new Qt(e,Zi,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(t=>{Pt[t]=new Qt(t,Zi,!1,t.toLowerCase(),null,!1,!1)});const cse="xlinkHref";Pt[cse]=new Qt("xlinkHref",Zi,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(t=>{Pt[t]=new Qt(t,Zi,!1,t.toLowerCase(),null,!0,!0)});const{CAMELCASE:fse,SAME:dse,possibleStandardNames:pI}=Pm,hse=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",pse=hse+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",mse=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+pse+"]*$")),gse=Object.keys(pI).reduce((t,e)=>{const n=pI[e];return n===dse?t[e]=e:n===fse?t[e.toLowerCase()]=e:t[e]=n,t},{});Xn.BOOLEAN=km;Xn.BOOLEANISH_STRING=Am;Xn.NUMERIC=F$;Xn.OVERLOADED_BOOLEAN=Hw;Xn.POSITIVE_NUMERIC=U$;Xn.RESERVED=V$;Xn.STRING=Zi;Xn.getPropertyInfo=lse;Xn.isCustomAttribute=mse;Xn.possibleStandardNames=gse;var Kw={},Qw={},Yw={},mI=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,vse=/\n/g,yse=/^\s*/,_se=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,wse=/^:\s*/,Ese=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Sse=/^[;\s]*/,bse=/^\s+|\s+$/g,xse=`
`,gI="/",vI="*",ao="",Tse="comment",Ise="declaration",Cse=function(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,r=1;function i(v){var g=v.match(vse);g&&(n+=g.length);var w=v.lastIndexOf(xse);r=~w?v.length-w:r+v.length}function o(){var v={line:n,column:r};return function(g){return g.position=new s(v),u(),g}}function s(v){this.start=v,this.end={line:n,column:r},this.source=e.source}s.prototype.content=t;function a(v){var g=new Error(e.source+":"+n+":"+r+": "+v);if(g.reason=v,g.filename=e.source,g.line=n,g.column=r,g.source=t,!e.silent)throw g}function l(v){var g=v.exec(t);if(g){var w=g[0];return i(w),t=t.slice(w.length),g}}function u(){l(yse)}function c(v){var g;for(v=v||[];g=f();)g!==!1&&v.push(g);return v}function f(){var v=o();if(!(gI!=t.charAt(0)||vI!=t.charAt(1))){for(var g=2;ao!=t.charAt(g)&&(vI!=t.charAt(g)||gI!=t.charAt(g+1));)++g;if(g+=2,ao===t.charAt(g-1))return a("End of comment missing");var w=t.slice(2,g-2);return r+=2,i(w),t=t.slice(g),r+=2,v({type:Tse,comment:w})}}function d(){var v=o(),g=l(_se);if(g){if(f(),!l(wse))return a("property missing ':'");var w=l(Ese),y=v({type:Ise,property:yI(g[0].replace(mI,ao)),value:w?yI(w[0].replace(mI,ao)):ao});return l(Sse),y}}function p(){var v=[];c(v);for(var g;g=d();)g!==!1&&(v.push(g),c(v));return v}return u(),p()};function yI(t){return t?t.replace(bse,ao):ao}var Pse=Ne&&Ne.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Yw,"__esModule",{value:!0});var Ase=Pse(Cse);function kse(t,e){var n=null;if(!t||typeof t!="string")return n;var r=(0,Ase.default)(t),i=typeof e=="function";return r.forEach(function(o){if(o.type==="declaration"){var s=o.property,a=o.value;i?e(s,a,o):a&&(n=n||{},n[s]=a)}}),n}Yw.default=kse;var Rm={};Object.defineProperty(Rm,"__esModule",{value:!0});Rm.camelCase=void 0;var Rse=/^--[a-zA-Z0-9-]+$/,Ose=/-([a-z])/g,Nse=/^[^-]+$/,$se=/^-(webkit|moz|ms|o|khtml)-/,Dse=/^-(ms)-/,jse=function(t){return!t||Nse.test(t)||Rse.test(t)},Mse=function(t,e){return e.toUpperCase()},_I=function(t,e){return"".concat(e,"-")},Lse=function(t,e){return e===void 0&&(e={}),jse(t)?t:(t=t.toLowerCase(),e.reactCompat?t=t.replace(Dse,_I):t=t.replace($se,_I),t.replace(Ose,Mse))};Rm.camelCase=Lse;var Vse=Ne&&Ne.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Qw,"__esModule",{value:!0});var Fse=Vse(Yw),Use=Rm;function zse(t,e){var n={};return!t||typeof t!="string"||(0,Fse.default)(t,function(r,i){r&&i&&(n[(0,Use.camelCase)(r,e)]=i)}),n}Qw.default=zse;(function(t){var e=Ne&&Ne.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(t,"__esModule",{value:!0}),t.returnFirstArg=t.canTextBeChildOfNode=t.ELEMENTS_WITH_NO_TEXT_CHILDREN=t.PRESERVE_CUSTOM_ATTRIBUTES=t.setStyleProp=t.isCustomComponent=void 0;var n=b,r=e(Qw),i=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function o(c,f){return c.includes("-")?!i.has(c):!!(f&&typeof f.is=="string")}t.isCustomComponent=o;var s={reactCompat:!0};function a(c,f){if(typeof c=="string"){if(!c.trim()){f.style={};return}try{f.style=(0,r.default)(c,s)}catch{f.style={}}}}t.setStyleProp=a,t.PRESERVE_CUSTOM_ATTRIBUTES=Number(n.version.split(".")[0])>=16,t.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var l=function(c){return!t.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(c.name)};t.canTextBeChildOfNode=l;var u=function(c){return c};t.returnFirstArg=u})(Kw);Object.defineProperty(Cm,"__esModule",{value:!0});var Pl=Xn,wI=Kw,Bse=["checked","value"],Wse=["input","select","textarea"],Hse={reset:!0,submit:!0};function qse(t,e){t===void 0&&(t={});var n={},r=!!(t.type&&Hse[t.type]);for(var i in t){var o=t[i];if((0,Pl.isCustomAttribute)(i)){n[i]=o;continue}var s=i.toLowerCase(),a=EI(s);if(a){var l=(0,Pl.getPropertyInfo)(a);switch(Bse.includes(a)&&Wse.includes(e)&&!r&&(a=EI("default"+s)),n[a]=o,l&&l.type){case Pl.BOOLEAN:n[a]=!0;break;case Pl.OVERLOADED_BOOLEAN:o===""&&(n[a]=!0);break}continue}wI.PRESERVE_CUSTOM_ATTRIBUTES&&(n[i]=o)}return(0,wI.setStyleProp)(t.style,n),n}Cm.default=qse;function EI(t){return Pl.possibleStandardNames[t]}var Xw={},Gse=Ne&&Ne.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Xw,"__esModule",{value:!0});var nv=b,Kse=Gse(Cm),Jl=Kw,Qse={cloneElement:nv.cloneElement,createElement:nv.createElement,isValidElement:nv.isValidElement};function z$(t,e){for(var n=[],r=typeof(e==null?void 0:e.replace)=="function",i=(e==null?void 0:e.transform)||Jl.returnFirstArg,o=(e==null?void 0:e.library)||Qse,s=o.cloneElement,a=o.createElement,l=o.isValidElement,u=t.length,c=0;c<u;c++){var f=t[c];if(r){var d=e.replace(f,c);if(l(d)){u>1&&(d=s(d,{key:d.key||c})),n.push(i(d,f,c));continue}}if(f.type==="text"){var p=!f.data.trim().length;if(p&&f.parent&&!(0,Jl.canTextBeChildOfNode)(f.parent)||e!=null&&e.trim&&p)continue;n.push(i(f.data,f,c));continue}var v=f,g={};Yse(v)?((0,Jl.setStyleProp)(v.attribs.style,v.attribs),g=v.attribs):v.attribs&&(g=(0,Kse.default)(v.attribs,v.name));var w=void 0;switch(f.type){case"script":case"style":f.children[0]&&(g.dangerouslySetInnerHTML={__html:f.children[0].data});break;case"tag":f.name==="textarea"&&f.children[0]?g.defaultValue=f.children[0].data:f.children&&f.children.length&&(w=z$(f.children,e));break;default:continue}u>1&&(g.key=c),n.push(i(a(f.name,g,w),f,c))}return n.length===1?n[0]:n}Xw.default=z$;function Yse(t){return Jl.PRESERVE_CUSTOM_ATTRIBUTES&&t.type==="tag"&&(0,Jl.isCustomComponent)(t.name,t.attribs)}(function(t){var e=Ne&&Ne.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(t,"__esModule",{value:!0}),t.htmlToDOM=t.domToReact=t.attributesToProps=t.Text=t.ProcessingInstruction=t.Element=t.Comment=void 0;var n=e(Vw);t.htmlToDOM=n.default;var r=e(Cm);t.attributesToProps=r.default;var i=e(Xw);t.domToReact=i.default;var o=Uw;Object.defineProperty(t,"Comment",{enumerable:!0,get:function(){return o.Comment}}),Object.defineProperty(t,"Element",{enumerable:!0,get:function(){return o.Element}}),Object.defineProperty(t,"ProcessingInstruction",{enumerable:!0,get:function(){return o.ProcessingInstruction}}),Object.defineProperty(t,"Text",{enumerable:!0,get:function(){return o.Text}});var s={lowerCaseAttributeNames:!1};function a(l,u){if(typeof l!="string")throw new TypeError("First argument must be a string");return l?(0,i.default)((0,n.default)(l,(u==null?void 0:u.htmlparser2)||s),u):[]}t.default=a})(b$);const SI=Wo(b$),Xse=SI.default||SI;let kf;const Jse=new Uint8Array(16);function Zse(){if(!kf&&(kf=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!kf))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return kf(Jse)}const yt=[];for(let t=0;t<256;++t)yt.push((t+256).toString(16).slice(1));function eae(t,e=0){return yt[t[e+0]]+yt[t[e+1]]+yt[t[e+2]]+yt[t[e+3]]+"-"+yt[t[e+4]]+yt[t[e+5]]+"-"+yt[t[e+6]]+yt[t[e+7]]+"-"+yt[t[e+8]]+yt[t[e+9]]+"-"+yt[t[e+10]]+yt[t[e+11]]+yt[t[e+12]]+yt[t[e+13]]+yt[t[e+14]]+yt[t[e+15]]}const tae=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),bI={randomUUID:tae};function xI(t,e,n){if(bI.randomUUID&&!e&&!t)return bI.randomUUID();t=t||{};const r=t.random||(t.rng||Zse)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return eae(r)}const nae=()=>{const{addProductAndQuantityToCart:t,setCartItemIsAdded:e}=b.useContext(Jr),n=Yr(),r=nc(),{product:i}=r.state,{name:o,imageUrl:s,sizesAndPrices:a,description:l}=i,u=Xse(l),c=a[0].price,[f,d]=b.useState(c),[p,v]=b.useState(a[0].size),[g,w]=b.useState(1),[y,m]=b.useState(xI());b.useEffect(()=>{m(xI())},[p]);const _=D=>{const R=D.target.value,te=a.find(ve=>ve.size===R);console.log(te),te&&(v(te.size),d(te.price))};console.log(f);const E=D=>{const R=D.target.value;console.log(typeof R),/^\d*$/.test(R)&&w(R===""?"":parseInt(R,10))},S=()=>{w(D=>typeof D=="number"?D+1:1)},T=()=>{w(D=>typeof D=="number"&&D>1?D-1:1)},x=()=>{typeof g=="number"&&g>0?(t(i,p,f,g,y),w(1),e(!0),setTimeout(()=>e(!1),3e3)):console.log(`Invalid quantity: ${g}`)};if(!i)return h.jsx("h1",{children:"Whoops, looks like there was an error loading the page!"});const O=()=>n(-1);return h.jsxs(Hne,{children:[h.jsx(qne,{children:h.jsx("img",{src:s,alt:o})}),h.jsxs(Gne,{children:[h.jsx("h2",{children:o}),h.jsxs("h3",{children:["Price/item: $ ",f]}),h.jsxs(Kne,{children:[h.jsxs(Qne,{children:[h.jsx("label",{children:"OPTIONS"}),h.jsx("select",{value:p.size,onChange:_,children:a.map(D=>h.jsx("option",{value:D.size,children:D.size},D.size))})]}),h.jsxs(Yne,{children:[h.jsx("label",{children:"QUANTITY"}),h.jsxs(Sw,{children:[h.jsx(ya,{buttonType:Je.default,onClick:T,children:"-"}),h.jsx(bw,{type:"text",value:g,onChange:E}),h.jsx(ya,{buttonType:Je.default,onClick:S,children:"+"})]})]}),h.jsx(Xne,{buttonType:Je.google,onClick:x,children:"Add to Cart"})]}),h.jsx(Jne,{children:u}),h.jsx(Zne,{isLoading:!1,buttonType:Je.default,onClick:O,id:"go-back",children:"Go Back"})]})]})},rae=A.div`
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
 `,iae=A.div`
   display: flex;
   flex-direction: column;
`,oae=A.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    border: 1px solid black;
`,sae=A.div`
    display: flex;
    margin-left: auto;
`,aae=A(On)`
    border-radius: 2px;
    font-size: 26px;
`,lae=A(On)`
    border-radius: 2px;
    font-size: 26px;
`,uae=A(On)`
    border-radius: 2px;
    font-size: 26px;
`,cae=A.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid black;
`,fae=A.div`
    width: 30%;

    img {
        height: 250px;
        width: 250px;
        object-fit: cover;
    }
`,dae=A.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
`,hae=A.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    margin-right: 20px;

    span {
        font-size: 25px;
    }
`,pae=A(Sw)`
    width: 10%;
    margin: 0 20px;
`,mae=A.div`
    margin: 0 10px;
`,gae=A(Ew)`
    cursor: pointer;
    
    &:hover {
        color: red;
    }
`,vae=({cartItem:t})=>{const{imageUrl:e,itemPrice:n,name:r,quantity:i,selectedSize:o,id:s,key:a}=t,{cartItems:l,setCartItems:u,addOneItemToCart:c,removeOneItemFromCart:f,clearItemFromCart:d}=b.useContext(Jr),p=y=>{const m=y.target.value,_=l.find(E=>E.id===s&&E.selectedSize===o&&E.key===a);if(/^\d*$/.test(m)&&_){const E=l.map(S=>S.id===s&&S.selectedSize===o&&S.key===a?{...S,quantity:m===""?"":parseInt(m,10)}:S);u(E)}},v=()=>f(t,o,a),g=()=>c(t,o,a),w=()=>d(t,a);return h.jsxs(cae,{children:[h.jsx(fae,{children:h.jsx("img",{src:e,alt:r})}),h.jsxs(dae,{children:[h.jsx("h2",{children:r}),h.jsx("h4",{children:o})]}),h.jsxs(pae,{children:[h.jsx(ya,{buttonType:Je.default,onClick:v,children:"-"}),h.jsx(bw,{type:"number",value:i,onChange:p}),h.jsx(ya,{buttonType:Je.default,onClick:g,children:"+"})]}),h.jsx(hae,{children:h.jsxs("span",{children:["$ ",i*n]})}),h.jsx(mae,{onClick:w,children:h.jsx(gae,{fontSize:"large"})})]})},yae=()=>{const t=Yr(),{cartItems:e,cartTotal:n}=b.useContext(Jr),r=()=>t("/"),i=()=>t("/checkout"),o=()=>t(-1);return h.jsxs(rae,{children:[h.jsxs(iae,{children:[h.jsx("h1",{children:"SHOPPING CART"}),h.jsx(oae,{children:e.map(s=>h.jsx(vae,{cartItem:s},s.key))})]}),h.jsxs("span",{children:["Sub-total: $ ",n]}),h.jsxs(sae,{children:[h.jsx(lae,{buttonType:Je.default,onClick:r,children:"Return to Home"}),h.jsx(uae,{buttonType:Je.default,onClick:o,children:"Go Back"}),h.jsx(aae,{buttonType:Je.google,onClick:i,children:"Checkout"})]})]})},_ae=A.div`
    width: 70%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgb(209, 209, 209);
`,B$=No`
  top: 2px;
  font-size: 10px;
`,wae=A.div`
  position: relative;
`,W$=A.label`
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
    ${({$shrink:t})=>t&&B$};
`,Eae=A.input`
  font-size: 16px;
  width: 100%;
  border-radius: 2.5px;
  border: 1px solid black;

  //adjacent sibling selector => when the input is focused, target adjacent sibling (which is Label) and apply the shrinkLabelStyles styling
  
  &:focus ~ ${W$} {
    ${B$};
  }
`,Sae=({label:t,...e})=>h.jsxs(wae,{children:[h.jsx(Eae,{...e}),t&&h.jsx(W$,{$shrink:!!(e.value&&e.value&&typeof e.value=="string"&&e.value.length),children:t})]}),bae=A(On)`
    font-size: 25px;
    border-radius: 2.5px;
`,xae=A.div`
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
`,Tae=A.form`

    label {
        font-size: 30px;
        margin-bottom: 30px;
    }

`,Iae=A.div`
    margin-bottom: 40px;
    margin-top: 20px;
`,Cae=A.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    button {
        margin-left: auto;
    }
`,Pae=A.div`
    width: 100%;

    label {
        margin-bottom: 10px;
    }
    input {
        margin-top: 10px;
    }
`,Aae=A(Sae)`
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
`;var kae=Object.defineProperty,Rae=Object.defineProperties,Oae=Object.getOwnPropertyDescriptors,xh=Object.getOwnPropertySymbols,H$=Object.prototype.hasOwnProperty,q$=Object.prototype.propertyIsEnumerable,TI=(t,e,n)=>e in t?kae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Nae=(t,e)=>{for(var n in e||(e={}))H$.call(e,n)&&TI(t,n,e[n]);if(xh)for(var n of xh(e))q$.call(e,n)&&TI(t,n,e[n]);return t},$ae=(t,e)=>Rae(t,Oae(e)),Dae=(t,e)=>{var n={};for(var r in t)H$.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&xh)for(var r of xh(t))e.indexOf(r)<0&&q$.call(t,r)&&(n[r]=t[r]);return n},G$=t=>{var e=t,{children:n,style:r}=e,i=Dae(e,["children","style"]);return h.jsx("body",$ae(Nae({},i),{style:r,children:n}))};G$.displayName="Body";var jae=Object.defineProperty,Mae=Object.defineProperties,Lae=Object.getOwnPropertyDescriptors,Th=Object.getOwnPropertySymbols,K$=Object.prototype.hasOwnProperty,Q$=Object.prototype.propertyIsEnumerable,II=(t,e,n)=>e in t?jae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Vae=(t,e)=>{for(var n in e||(e={}))K$.call(e,n)&&II(t,n,e[n]);if(Th)for(var n of Th(e))Q$.call(e,n)&&II(t,n,e[n]);return t},Fae=(t,e)=>Mae(t,Lae(e)),Uae=(t,e)=>{var n={};for(var r in t)K$.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Th)for(var r of Th(t))e.indexOf(r)<0&&Q$.call(t,r)&&(n[r]=t[r]);return n},ye=t=>{var e=t,{children:n,style:r}=e,i=Uae(e,["children","style"]);return h.jsx("td",Fae(Vae({},i),{"data-id":"__react-email-column",style:r,children:n}))},zae=Object.defineProperty,Bae=Object.defineProperties,Wae=Object.getOwnPropertyDescriptors,Ih=Object.getOwnPropertySymbols,Y$=Object.prototype.hasOwnProperty,X$=Object.prototype.propertyIsEnumerable,CI=(t,e,n)=>e in t?zae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,PI=(t,e)=>{for(var n in e||(e={}))Y$.call(e,n)&&CI(t,n,e[n]);if(Ih)for(var n of Ih(e))X$.call(e,n)&&CI(t,n,e[n]);return t},Hae=(t,e)=>Bae(t,Wae(e)),qae=(t,e)=>{var n={};for(var r in t)Y$.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Ih)for(var r of Ih(t))e.indexOf(r)<0&&X$.call(t,r)&&(n[r]=t[r]);return n},Gae=t=>{var e=t,{children:n,style:r}=e,i=qae(e,["children","style"]);return h.jsx("table",Hae(PI({align:"center",width:"100%"},i),{border:0,cellPadding:"0",cellSpacing:"0",role:"presentation",style:PI({maxWidth:"37.5em"},r),children:h.jsx("tbody",{children:h.jsx("tr",{style:{width:"100%"},children:h.jsx("td",{children:n})})})}))},Kae=Object.defineProperty,Qae=Object.defineProperties,Yae=Object.getOwnPropertyDescriptors,Ch=Object.getOwnPropertySymbols,J$=Object.prototype.hasOwnProperty,Z$=Object.prototype.propertyIsEnumerable,AI=(t,e,n)=>e in t?Kae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Xae=(t,e)=>{for(var n in e||(e={}))J$.call(e,n)&&AI(t,n,e[n]);if(Ch)for(var n of Ch(e))Z$.call(e,n)&&AI(t,n,e[n]);return t},Jae=(t,e)=>Qae(t,Yae(e)),Zae=(t,e)=>{var n={};for(var r in t)J$.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Ch)for(var r of Ch(t))e.indexOf(r)<0&&Z$.call(t,r)&&(n[r]=t[r]);return n},ele=t=>{var e=t,{children:n}=e,r=Zae(e,["children"]);return h.jsxs("head",Jae(Xae({},r),{children:[h.jsx("meta",{content:"text/html; charset=UTF-8",httpEquiv:"Content-Type"}),n]}))};function tle(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function nle(...t){return e=>t.forEach(n=>tle(n,e))}const eD=b.forwardRef((t,e)=>{const{children:n,...r}=t,i=b.Children.toArray(n),o=i.find(ile);if(o){const s=o.props.children,a=i.map(l=>l===o?b.Children.count(s)>1?b.Children.only(null):b.isValidElement(s)?s.props.children:null:l);return b.createElement(C0,B({},r,{ref:e}),b.isValidElement(s)?b.cloneElement(s,void 0,a):null)}return b.createElement(C0,B({},r,{ref:e}),n)});eD.displayName="Slot";const C0=b.forwardRef((t,e)=>{const{children:n,...r}=t;return b.isValidElement(n)?b.cloneElement(n,{...ole(r,n.props),ref:e?nle(e,n.ref):n.ref}):b.Children.count(n)>1?b.Children.only(null):null});C0.displayName="SlotClone";const rle=({children:t})=>b.createElement(b.Fragment,null,t);function ile(t){return b.isValidElement(t)&&t.type===rle}function ole(t,e){const n={...e};for(const r in e){const i=t[r],o=e[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...a)=>{o(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...t,...n}}var sle=Object.defineProperty,ale=Object.defineProperties,lle=Object.getOwnPropertyDescriptors,Ph=Object.getOwnPropertySymbols,tD=Object.prototype.hasOwnProperty,nD=Object.prototype.propertyIsEnumerable,kI=(t,e,n)=>e in t?sle(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Hs=(t,e)=>{for(var n in e||(e={}))tD.call(e,n)&&kI(t,n,e[n]);if(Ph)for(var n of Ph(e))nD.call(e,n)&&kI(t,n,e[n]);return t},rD=(t,e)=>ale(t,lle(e)),ule=(t,e)=>{var n={};for(var r in t)tD.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Ph)for(var r of Ph(t))e.indexOf(r)<0&&nD.call(t,r)&&(n[r]=t[r]);return n},cle=t=>[eo(t.m,["margin"]),eo(t.mx,["marginLeft","marginRight"]),eo(t.my,["marginTop","marginBottom"]),eo(t.mt,["marginTop"]),eo(t.mr,["marginRight"]),eo(t.mb,["marginBottom"]),eo(t.ml,["marginLeft"])].filter(r=>Object.keys(r).length).reduce((r,i)=>Hs(Hs({},r),i),{}),eo=(t,e)=>e.reduce((n,r)=>isNaN(parseFloat(t))?n:rD(Hs({},n),{[r]:`${t}px`}),{}),fle=t=>{var e=t,{as:n="h1",children:r,style:i,m:o,mx:s,my:a,mt:l,mr:u,mb:c,ml:f}=e,d=ule(e,["as","children","style","m","mx","my","mt","mr","mb","ml"]);return h.jsx(eD,rD(Hs({},d),{style:Hs(Hs({},cle({m:o,mx:s,my:a,mt:l,mr:u,mb:c,ml:f})),i),children:h.jsx(n,{children:r})}))},dle=Object.defineProperty,hle=Object.defineProperties,ple=Object.getOwnPropertyDescriptors,Ah=Object.getOwnPropertySymbols,iD=Object.prototype.hasOwnProperty,oD=Object.prototype.propertyIsEnumerable,RI=(t,e,n)=>e in t?dle(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,OI=(t,e)=>{for(var n in e||(e={}))iD.call(e,n)&&RI(t,n,e[n]);if(Ah)for(var n of Ah(e))oD.call(e,n)&&RI(t,n,e[n]);return t},mle=(t,e)=>hle(t,ple(e)),gle=(t,e)=>{var n={};for(var r in t)iD.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Ah)for(var r of Ah(t))e.indexOf(r)<0&&oD.call(t,r)&&(n[r]=t[r]);return n},xr=t=>{var e=t,{style:n}=e,r=gle(e,["style"]);return h.jsx("hr",mle(OI({},r),{style:OI({width:"100%",border:"none",borderTop:"1px solid #eaeaea"},n)}))},vle=Object.defineProperty,yle=Object.defineProperties,_le=Object.getOwnPropertyDescriptors,kh=Object.getOwnPropertySymbols,sD=Object.prototype.hasOwnProperty,aD=Object.prototype.propertyIsEnumerable,NI=(t,e,n)=>e in t?vle(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,wle=(t,e)=>{for(var n in e||(e={}))sD.call(e,n)&&NI(t,n,e[n]);if(kh)for(var n of kh(e))aD.call(e,n)&&NI(t,n,e[n]);return t},Ele=(t,e)=>yle(t,_le(e)),Sle=(t,e)=>{var n={};for(var r in t)sD.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&kh)for(var r of kh(t))e.indexOf(r)<0&&aD.call(t,r)&&(n[r]=t[r]);return n},ble=t=>{var e=t,{children:n,lang:r="en",dir:i="ltr"}=e,o=Sle(e,["children","lang","dir"]);return h.jsx("html",Ele(wle({},o),{dir:i,lang:r,children:n}))},xle=Object.defineProperty,Tle=Object.defineProperties,Ile=Object.getOwnPropertyDescriptors,Rh=Object.getOwnPropertySymbols,lD=Object.prototype.hasOwnProperty,uD=Object.prototype.propertyIsEnumerable,$I=(t,e,n)=>e in t?xle(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,DI=(t,e)=>{for(var n in e||(e={}))lD.call(e,n)&&$I(t,n,e[n]);if(Rh)for(var n of Rh(e))uD.call(e,n)&&$I(t,n,e[n]);return t},Cle=(t,e)=>Tle(t,Ile(e)),Ple=(t,e)=>{var n={};for(var r in t)lD.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Rh)for(var r of Rh(t))e.indexOf(r)<0&&uD.call(t,r)&&(n[r]=t[r]);return n},as=t=>{var e=t,{alt:n,src:r,width:i,height:o,style:s}=e,a=Ple(e,["alt","src","width","height","style"]);return h.jsx("img",Cle(DI({},a),{alt:n,height:o,src:r,style:DI({display:"block",outline:"none",border:"none",textDecoration:"none"},s),width:i}))},Ale=Object.defineProperty,kle=Object.defineProperties,Rle=Object.getOwnPropertyDescriptors,Oh=Object.getOwnPropertySymbols,cD=Object.prototype.hasOwnProperty,fD=Object.prototype.propertyIsEnumerable,jI=(t,e,n)=>e in t?Ale(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,MI=(t,e)=>{for(var n in e||(e={}))cD.call(e,n)&&jI(t,n,e[n]);if(Oh)for(var n of Oh(e))fD.call(e,n)&&jI(t,n,e[n]);return t},Ole=(t,e)=>kle(t,Rle(e)),Nle=(t,e)=>{var n={};for(var r in t)cD.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Oh)for(var r of Oh(t))e.indexOf(r)<0&&fD.call(t,r)&&(n[r]=t[r]);return n},jn=t=>{var e=t,{target:n="_blank",style:r}=e,i=Nle(e,["target","style"]);return h.jsx("a",Ole(MI({},i),{style:MI({color:"#067df7",textDecoration:"none"},r),target:n,children:i.children}))},$le=Object.defineProperty,Dle=Object.defineProperties,jle=Object.getOwnPropertyDescriptors,Nh=Object.getOwnPropertySymbols,dD=Object.prototype.hasOwnProperty,hD=Object.prototype.propertyIsEnumerable,LI=(t,e,n)=>e in t?$le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Mle=(t,e)=>{for(var n in e||(e={}))dD.call(e,n)&&LI(t,n,e[n]);if(Nh)for(var n of Nh(e))hD.call(e,n)&&LI(t,n,e[n]);return t},Lle=(t,e)=>Dle(t,jle(e)),Vle=(t,e)=>{var n={};for(var r in t)dD.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Nh)for(var r of Nh(t))e.indexOf(r)<0&&hD.call(t,r)&&(n[r]=t[r]);return n},P0=150,Fle=t=>{var e=t,{children:n=""}=e,r=Vle(e,["children"]);let i=Array.isArray(n)?n.join(""):n;return i=i.substr(0,P0),h.jsxs("div",Lle(Mle({style:{display:"none",overflow:"hidden",lineHeight:"1px",opacity:0,maxHeight:0,maxWidth:0}},r),{children:[i,Ule(i)]}))},Ule=t=>t.length>=P0?null:h.jsx("div",{children:" ‌​‍‎‏\uFEFF".repeat(P0-t.length)}),zle=Object.defineProperty,Ble=Object.defineProperties,Wle=Object.getOwnPropertyDescriptors,$h=Object.getOwnPropertySymbols,pD=Object.prototype.hasOwnProperty,mD=Object.prototype.propertyIsEnumerable,VI=(t,e,n)=>e in t?zle(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Hle=(t,e)=>{for(var n in e||(e={}))pD.call(e,n)&&VI(t,n,e[n]);if($h)for(var n of $h(e))mD.call(e,n)&&VI(t,n,e[n]);return t},qle=(t,e)=>Ble(t,Wle(e)),Gle=(t,e)=>{var n={};for(var r in t)pD.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&$h)for(var r of $h(t))e.indexOf(r)<0&&mD.call(t,r)&&(n[r]=t[r]);return n},vt=t=>{var e=t,{children:n,style:r}=e,i=Gle(e,["children","style"]);return h.jsx("table",qle(Hle({align:"center",width:"100%"},i),{border:0,cellPadding:"0",cellSpacing:"0",role:"presentation",style:r,children:h.jsx("tbody",{style:{width:"100%"},children:h.jsx("tr",{style:{width:"100%"},children:n})})}))},Kle=Object.defineProperty,Qle=Object.defineProperties,Yle=Object.getOwnPropertyDescriptors,Dh=Object.getOwnPropertySymbols,gD=Object.prototype.hasOwnProperty,vD=Object.prototype.propertyIsEnumerable,FI=(t,e,n)=>e in t?Kle(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Xle=(t,e)=>{for(var n in e||(e={}))gD.call(e,n)&&FI(t,n,e[n]);if(Dh)for(var n of Dh(e))vD.call(e,n)&&FI(t,n,e[n]);return t},Jle=(t,e)=>Qle(t,Yle(e)),Zle=(t,e)=>{var n={};for(var r in t)gD.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Dh)for(var r of Dh(t))e.indexOf(r)<0&&vD.call(t,r)&&(n[r]=t[r]);return n},Tr=t=>{var e=t,{children:n,style:r}=e,i=Zle(e,["children","style"]);return h.jsx("table",Jle(Xle({align:"center",width:"100%"},i),{border:0,cellPadding:"0",cellSpacing:"0",role:"presentation",style:r,children:h.jsx("tbody",{children:h.jsx("tr",{children:h.jsx("td",{children:n})})})}))},eue=Object.defineProperty,tue=Object.defineProperties,nue=Object.getOwnPropertyDescriptors,jh=Object.getOwnPropertySymbols,yD=Object.prototype.hasOwnProperty,_D=Object.prototype.propertyIsEnumerable,UI=(t,e,n)=>e in t?eue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,zI=(t,e)=>{for(var n in e||(e={}))yD.call(e,n)&&UI(t,n,e[n]);if(jh)for(var n of jh(e))_D.call(e,n)&&UI(t,n,e[n]);return t},rue=(t,e)=>tue(t,nue(e)),iue=(t,e)=>{var n={};for(var r in t)yD.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&jh)for(var r of jh(t))e.indexOf(r)<0&&_D.call(t,r)&&(n[r]=t[r]);return n},de=t=>{var e=t,{style:n}=e,r=iue(e,["style"]);return h.jsx("p",rue(zI({},r),{style:zI({fontSize:"14px",lineHeight:"24px",margin:"16px 0"},n)}))};const oue=()=>h.jsxs(ble,{children:[h.jsx(ele,{}),h.jsx(Fle,{children:"Get your order summary, estimated delivery date and more"}),h.jsx(G$,{style:sue,children:h.jsxs(Gae,{style:aue,children:[h.jsx(Tr,{style:Rf.container,children:h.jsxs(vt,{children:[h.jsxs(ye,{children:[h.jsx(de,{style:$e.paragraphWithBold,children:"Tracking Number"}),h.jsx(de,{style:Rf.number,children:"1ZV218970300071628"})]}),h.jsx(ye,{align:"right",children:h.jsx(jn,{style:$e.button,children:"Track Package"})})]})}),h.jsx(xr,{style:$e.hr}),h.jsxs(Tr,{style:lue,children:[h.jsx(fle,{style:$e.heading,children:"It's On Its Way."}),h.jsx(de,{style:$e.text,children:"You order's is on its way. Use the link above to track its progress."}),h.jsx(de,{style:{...$e.text,marginTop:24},children:"We´ve also charged your payment method for the cost of your order and will be removing any authorization holds. For payment details, please visit your Orders page on Nike.com or in the Nike app."})]}),h.jsx(xr,{style:$e.hr}),h.jsxs(Tr,{style:$e.defaultPadding,children:[h.jsx(de,{style:uue,children:"Shipping to: Alan Turing"}),h.jsx(de,{style:{...$e.text,fontSize:14},children:"2125 Chestnut St, San Francisco, CA 94123"})]}),h.jsx(xr,{style:$e.hr}),h.jsx(Tr,{style:{...A0,paddingTop:"40px",paddingBottom:"40px"},children:h.jsxs(vt,{children:[h.jsx(ye,{children:h.jsx(as,{})}),h.jsxs(ye,{style:{verticalAlign:"top",paddingLeft:"12px"},children:[h.jsx(de,{style:{...Mh,fontWeight:"500"},children:"Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey"}),h.jsx(de,{style:$e.text,children:"Size L (12–14)"})]})]})}),h.jsx(xr,{style:$e.hr}),h.jsxs(Tr,{style:$e.defaultPadding,children:[h.jsxs(vt,{style:{display:"inline-flex",marginBottom:40},children:[h.jsxs(ye,{style:{width:"170px"},children:[h.jsx(de,{style:$e.paragraphWithBold,children:"Order Number"}),h.jsx(de,{style:Rf.number,children:"C0106373851"})]}),h.jsxs(ye,{children:[h.jsx(de,{style:$e.paragraphWithBold,children:"Order Date"}),h.jsx(de,{style:Rf.number,children:"Sep 22, 2022"})]})]}),h.jsx(vt,{children:h.jsx(ye,{align:"center",children:h.jsx(jn,{style:$e.button,children:"Order Status"})})})]}),h.jsx(xr,{style:$e.hr}),h.jsxs(Tr,{style:qs,children:[h.jsx(vt,{children:h.jsx(de,{style:$e.heading,children:"Top Picks For You"})}),h.jsxs(vt,{style:sn.container,children:[h.jsxs(ye,{style:{...sn.product,paddingLeft:"4px"},align:"center",children:[h.jsx(as,{}),h.jsx(de,{style:sn.title,children:"USWNT 2022/23 Stadium Home"}),h.jsx(de,{style:sn.text,children:"Women's Nike Dri-FIT Soccer Jersey"})]}),h.jsxs(ye,{style:sn.product,align:"center",children:[h.jsx(as,{}),h.jsx(de,{style:sn.title,children:"Brazil 2022/23 Stadium Goalkeeper"}),h.jsx(de,{style:sn.text,children:"Men's Nike Dri-FIT Short-Sleeve Football Shirt"})]}),h.jsxs(ye,{style:sn.product,align:"center",children:[h.jsx(as,{}),h.jsx(de,{style:sn.title,children:"FFF"}),h.jsx(de,{style:sn.text,children:"Women's Soccer Jacket"})]}),h.jsxs(ye,{style:{...sn.product,paddingRight:"4px"},align:"center",children:[h.jsx(as,{}),h.jsx(de,{style:sn.title,children:"FFF"}),h.jsx(de,{style:sn.text,children:"Women's Nike Pre-Match Football Top"})]})]})]}),h.jsx(xr,{style:$e.hr}),h.jsxs(Tr,{style:wn.container,children:[h.jsx(vt,{children:h.jsx(de,{style:wn.title,children:"Get Help"})}),h.jsxs(vt,{style:wn.content,children:[h.jsx(ye,{style:{width:"33%"},colSpan:1,children:h.jsx(jn,{href:"/",style:wn.text,children:"Shipping Status"})}),h.jsx(ye,{style:{width:"33%"},colSpan:1,children:h.jsx(jn,{href:"/",style:wn.text,children:"Shipping & Delivery"})}),h.jsx(ye,{style:{width:"33%"},colSpan:1,children:h.jsx(jn,{href:"/",style:wn.text,children:"Returns & Exchanges"})})]}),h.jsxs(vt,{style:{...wn.content,paddingTop:"0"},children:[h.jsx(ye,{style:{width:"33%"},colSpan:1,children:h.jsx(jn,{href:"/",style:wn.text,children:"How to Return"})}),h.jsx(ye,{style:{width:"66%"},colSpan:2,children:h.jsx(jn,{href:"/",style:wn.text,children:"Contact Options"})})]}),h.jsx(xr,{style:$e.hr}),h.jsxs(vt,{style:wn.tel,children:[h.jsx(ye,{children:h.jsxs(vt,{children:[h.jsx(ye,{style:{width:"16px"},children:h.jsx(as,{})}),h.jsx(ye,{children:h.jsx(de,{style:{...wn.text,marginBottom:"0"},children:"1-800-806-6453"})})]})}),h.jsx(ye,{children:h.jsx(de,{style:{...wn.text,marginBottom:"0"},children:"4 am - 11 pm PT"})})]})]}),h.jsx(xr,{style:$e.hr}),h.jsxs(Tr,{style:qs,children:[h.jsx(vt,{children:h.jsx(de,{style:$e.heading,children:"Nike.com"})}),h.jsxs(vt,{style:dl.container,children:[h.jsx(ye,{align:"center",children:h.jsx(jn,{href:"/",style:dl.text,children:"Men"})}),h.jsx(ye,{align:"center",children:h.jsx(jn,{href:"/",style:dl.text,children:"Women"})}),h.jsx(ye,{align:"center",children:h.jsx(jn,{href:"/",style:dl.text,children:"Kids"})}),h.jsx(ye,{align:"center",children:h.jsx(jn,{href:"/",style:dl.text,children:"Customize"})})]})]}),h.jsx(xr,{style:{...$e.hr,marginTop:"12px"}}),h.jsxs(Tr,{style:qs,children:[h.jsxs(vt,{style:ls.policy,children:[h.jsx(ye,{children:h.jsx(de,{style:ls.text,children:"Web Version"})}),h.jsx(ye,{children:h.jsx(de,{style:ls.text,children:"Privacy Policy"})})]}),h.jsx(vt,{children:h.jsx(de,{style:{...ls.text,paddingTop:30,paddingBottom:30},children:"Please contact us if you have any questions. (If you reply to this email, we won't be able to see it.)"})}),h.jsx(vt,{children:h.jsx(de,{style:ls.text,children:"© 2022 Nike, Inc. All Rights Reserved."})}),h.jsx(vt,{children:h.jsx(de,{style:ls.text,children:"NIKE, INC. One Bowerman Drive, Beaverton, Oregon 97005, USA."})})]})]})})]}),A0={paddingLeft:"40px",paddingRight:"40px"},qs={paddingTop:"22px",paddingBottom:"22px"},Mh={margin:"0",lineHeight:"2"},$e={paddingX:A0,paddingY:qs,defaultPadding:{...A0,...qs},paragraphWithBold:{...Mh,fontWeight:"bold"},heading:{fontSize:"32px",lineHeight:"1.3",fontWeight:"700",textAlign:"center",letterSpacing:"-1px"},text:{...Mh,color:"#747474",fontWeight:"500"},button:{border:"1px solid #929292",fontSize:"16px",textDecoration:"none",padding:"10px 0px",width:"220px",display:"block",textAlign:"center",fontWeight:500,color:"#000"},hr:{borderColor:"#E5E5E5",margin:"0"}},sue={backgroundColor:"#ffffff",fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'},aue={margin:"10px auto",width:"600px",maxWidth:"100%",border:"1px solid #E5E5E5"},Rf={container:{padding:"22px 40px",backgroundColor:"#F7F7F7"},number:{margin:"12px 0 0 0",fontWeight:500,lineHeight:"1.4",color:"#6F6F6F"}},lue={padding:"40px 74px",textAlign:"center"},uue={...Mh,fontSize:"15px",fontWeight:"bold"},BI={margin:"0",fontSize:"15px",lineHeight:"1",paddingLeft:"10px",paddingRight:"10px"},sn={container:{padding:"20px 0"},product:{verticalAlign:"top",textAlign:"left",paddingLeft:"2px",paddingRight:"2px"},title:{...BI,paddingTop:"12px",fontWeight:"500"},text:{...BI,paddingTop:"4px",color:"#747474"}},wn={container:{paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px",backgroundColor:"#F7F7F7"},content:{...qs,paddingLeft:"20px",paddingRight:"20px"},title:{paddingLeft:"20px",paddingRight:"20px",fontWeight:"bold"},text:{fontSize:"13.5px",marginTop:0,fontWeight:500,color:"#000"},tel:{paddingLeft:"20px",paddingRight:"20px",paddingTop:"32px",paddingBottom:"22px"}},dl={container:{width:"370px",margin:"auto",paddingTop:"12px"},text:{fontWeight:"500",color:"#000"}},ls={policy:{width:"166px",margin:"auto"},text:{margin:"0",color:"#AFAFAF",fontSize:"13px",textAlign:"center"}},cue=()=>{const{cartTotal:t}=b.useContext(Jr),[e,n]=b.useState(""),[r,i]=b.useState(!1),[o,s]=b.useState(""),a=gM(),l=mM(),u=t*100;b.useEffect(()=>{const d=fetch("/.netlify/functions/create-payment-intent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:u})}).then(p=>p.json()).then(p=>{console.log(p);const{paymentIntent:{client_secret:v}}=p;console.log(v),n(v)});console.log(d),console.log(e)},[]);const c=async d=>{if(d.preventDefault(),!a||!l)return;i(!0);const{error:p}=await l.submit();if(p){console.log(p),i(!1);return}try{const v=await a.confirmPayment({elements:l,clientSecret:e,confirmParams:{return_url:"https://sandra-sanchez-art.netlify.app",payment_method_data:{billing_details:{email:o}}}});if(v.error){console.log(v.error),alert(`There was an error submitting payment: ${v.error}`),i(!1);return}if(!(await fetch("/.netlify/functions/send-email-with-resend",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({from:"sandrasanchezart.space",to:o,subject:"Payment and Order Confirmation for Sandra Sanchez Art",react:oue()})})).ok){console.error("Faled to send email!"),i(!1);return}console.log("Successfully sent email!")}catch(v){console.error("Error processing payment or sending email:",v),i(!1)}},f=d=>{const p=d.target.value;s(p),console.log(o)};return h.jsx(xae,{children:h.jsxs(Tae,{onSubmit:c,children:[h.jsxs(Pae,{children:[h.jsx("label",{id:"contact-label",children:"Contact"}),h.jsx(Aae,{type:"email",name:"email",value:o,placeholder:"Email",onChange:f,required:!0})]}),h.jsx("label",{children:"Delivery"}),h.jsx(Iae,{children:h.jsx(wM,{options:{mode:"shipping",display:{name:"split"},defaultValues:{firstName:"ex: John",lastName:"ex: Doe",phone:"555-555-5555"},fields:{phone:"always"}},onChange:d=>{if(d.complete){const p=d.value.address;console.log(p)}}})}),h.jsx("label",{children:"Payment Information:"}),h.jsxs(Cae,{children:[h.jsx(_M,{}),h.jsx(bae,{buttonType:Je.google,isLoading:r,id:"submit",children:"Pay Now"})]})]})})},fue=A.div`
    width: 50%;
    margin: 0 30px;
    border-left: 1px solid rgb(209,209,209);
`,due=A.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 10px;
    width: 100%;
`,hue=A.div`
    display: flex;
    justify-content: space-between;
    margin: 0 25px;
`,pue=A.div`
    display: flex;
    margin: 30px 30px;
    align-items: center;
    justify-content: center;

`,mue=A.div`
    position: relative;
    width: 40%;

    img {
        height: 100px;
        width: 100px;
        object-fit: cover;
    }
`,gue=A.div`
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
`,vue=A.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`,yue=A.div`
    display: flex;
    width: 10%;
    margin: 0 10px;
`,_ue=({cartItem:t})=>{const{imageUrl:e,name:n,selectedSize:r,itemPrice:i,quantity:o}=t;return h.jsxs(pue,{children:[h.jsxs(mue,{children:[h.jsx("img",{src:e}),h.jsx(gue,{children:o})]}),h.jsxs(vue,{children:[h.jsx("h3",{children:n}),h.jsx("span",{children:r})]}),h.jsx(yue,{children:h.jsxs("span",{children:["$",i]})})]})},wue=()=>{const{cartItems:t,cartTotal:e}=b.useContext(Jr);return h.jsx(fue,{children:h.jsxs(due,{children:[t.map(n=>h.jsx(_ue,{cartItem:n},n.key)),h.jsxs(hue,{children:[h.jsx("h3",{children:"Subtotal"}),h.jsxs("h3",{children:["$ ",e]})]})]})})},Eue=()=>h.jsxs(_ae,{children:[h.jsx(cue,{}),h.jsx(wue,{})]}),Sue=()=>{const{setCategoriesMap:t}=b.useContext(k1);return b.useEffect(()=>{(async()=>{try{const n=await yne();console.log("Logging categories map from App component!: ",n),t(n)}catch(n){console.log(n)}})()},[t]),h.jsx(Fj,{children:h.jsxs(Mn,{path:"/",element:h.jsx(nre,{}),children:[h.jsx(Mn,{index:!0,element:h.jsx(boe,{})}),h.jsx(Mn,{path:"about",element:h.jsx(Ioe,{})}),h.jsx(Mn,{path:"mentoring",element:h.jsx(Coe,{})}),h.jsx(Mn,{path:"contact",element:h.jsx(Poe,{})}),h.jsx(Mn,{path:"shop/:category",element:h.jsx(qoe,{})}),h.jsx(Mn,{path:"shop/:category/:id",element:h.jsx(nae,{})}),h.jsx(Mn,{path:"authentication",element:h.jsx(Uoe,{})}),h.jsx(Mn,{path:"cart-summary",element:h.jsx(yae,{})}),h.jsx(Mn,{path:"checkout",element:h.jsx(Eue,{})})]})})};rv.createRoot(document.getElementById("root")).render(h.jsx(H.StrictMode,{children:h.jsx(qj,{children:h.jsx(OM,{children:h.jsx(bne,{children:h.jsx(Pne,{children:h.jsx(SA,{stripe:kM,options:RM,children:h.jsx(Sue,{})})})})})})}))});export default bue();
