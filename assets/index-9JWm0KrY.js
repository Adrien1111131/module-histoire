function Xc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wa={exports:{}},ms={},Ia={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),Zc=Symbol.for("react.portal"),ed=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),rd=Symbol.for("react.provider"),sd=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),ld=Symbol.for("react.suspense"),od=Symbol.for("react.memo"),ad=Symbol.for("react.lazy"),ao=Symbol.iterator;function ud(e){return e===null||typeof e!="object"?null:(e=ao&&e[ao]||e["@@iterator"],typeof e=="function"?e:null)}var Ra={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pa=Object.assign,ka={};function mn(e,t,n){this.props=e,this.context=t,this.refs=ka,this.updater=n||Ra}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oa(){}Oa.prototype=mn.prototype;function al(e,t,n){this.props=e,this.context=t,this.refs=ka,this.updater=n||Ra}var ul=al.prototype=new Oa;ul.constructor=al;Pa(ul,mn.prototype);ul.isPureReactComponent=!0;var uo=Array.isArray,Aa=Object.prototype.hasOwnProperty,cl={current:null},La={key:!0,ref:!0,__self:!0,__source:!0};function Ua(e,t,n){var r,s={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Aa.call(t,r)&&!La.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];s.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:lr,type:e,key:i,ref:l,props:s,_owner:cl.current}}function cd(e,t){return{$$typeof:lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function dd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var co=/\/+/g;function Ms(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dd(""+e.key):t.toString(36)}function kr(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case lr:case Zc:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+Ms(l,0):r,uo(s)?(n="",e!=null&&(n=e.replace(co,"$&/")+"/"),kr(s,t,n,"",function(c){return c})):s!=null&&(dl(s)&&(s=cd(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(co,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=r===""?".":r+":",uo(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Ms(i,a);l+=kr(i,t,n,u,s)}else if(u=ud(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Ms(i,a++),l+=kr(i,t,n,u,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function pr(e,t,n){if(e==null)return e;var r=[],s=0;return kr(e,r,"","",function(i){return t.call(n,i,s++)}),r}function md(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Or={transition:null},pd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Or,ReactCurrentOwner:cl};function qa(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=mn;A.Fragment=ed;A.Profiler=nd;A.PureComponent=al;A.StrictMode=td;A.Suspense=ld;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pd;A.act=qa;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pa({},e.props),s=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=cl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Aa.call(t,u)&&!La.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:lr,type:e.type,key:s,ref:i,props:r,_owner:l}};A.createContext=function(e){return e={$$typeof:sd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rd,_context:e},e.Consumer=e};A.createElement=Ua;A.createFactory=function(e){var t=Ua.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:id,render:e}};A.isValidElement=dl;A.lazy=function(e){return{$$typeof:ad,_payload:{_status:-1,_result:e},_init:md}};A.memo=function(e,t){return{$$typeof:od,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};A.unstable_act=qa;A.useCallback=function(e,t){return ue.current.useCallback(e,t)};A.useContext=function(e){return ue.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};A.useEffect=function(e,t){return ue.current.useEffect(e,t)};A.useId=function(){return ue.current.useId()};A.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ue.current.useMemo(e,t)};A.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};A.useRef=function(e){return ue.current.useRef(e)};A.useState=function(e){return ue.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return ue.current.useTransition()};A.version="18.3.1";Ia.exports=A;var E=Ia.exports;const ba=Kc(E),fd=Xc({__proto__:null,default:ba},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=E,vd=Symbol.for("react.element"),gd=Symbol.for("react.fragment"),xd=Object.prototype.hasOwnProperty,yd=hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sd={key:!0,ref:!0,__self:!0,__source:!0};function Ma(e,t,n){var r,s={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)xd.call(t,r)&&!Sd.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:vd,type:e,key:i,ref:l,props:s,_owner:yd.current}}ms.Fragment=gd;ms.jsx=Ma;ms.jsxs=Ma;wa.exports=ms;var o=wa.exports,pi={},Da={exports:{}},Se={},_a={exports:{}},za={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(w,k){var O=w.length;w.push(k);e:for(;0<O;){var B=O-1>>>1,X=w[B];if(0<s(X,k))w[B]=k,w[O]=X,O=B;else break e}}function n(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var k=w[0],O=w.pop();if(O!==k){w[0]=O;e:for(var B=0,X=w.length,dr=X>>>1;B<dr;){var St=2*(B+1)-1,bs=w[St],Et=St+1,mr=w[Et];if(0>s(bs,O))Et<X&&0>s(mr,bs)?(w[B]=mr,w[Et]=O,B=Et):(w[B]=bs,w[St]=O,B=St);else if(Et<X&&0>s(mr,O))w[B]=mr,w[Et]=O,B=Et;else break e}}return k}function s(w,k){var O=w.sortIndex-k.sortIndex;return O!==0?O:w.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],f=1,m=null,v=3,g=!1,y=!1,x=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(w){for(var k=n(c);k!==null;){if(k.callback===null)r(c);else if(k.startTime<=w)r(c),k.sortIndex=k.expirationTime,t(u,k);else break;k=n(c)}}function S(w){if(x=!1,h(w),!y)if(n(u)!==null)y=!0,Us(j);else{var k=n(c);k!==null&&qs(S,k.startTime-w)}}function j(w,k){y=!1,x&&(x=!1,p(P),P=-1),g=!0;var O=v;try{for(h(k),m=n(u);m!==null&&(!(m.expirationTime>k)||w&&!Pe());){var B=m.callback;if(typeof B=="function"){m.callback=null,v=m.priorityLevel;var X=B(m.expirationTime<=k);k=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(u)&&r(u),h(k)}else r(u);m=n(u)}if(m!==null)var dr=!0;else{var St=n(c);St!==null&&qs(S,St.startTime-k),dr=!1}return dr}finally{m=null,v=O,g=!1}}var I=!1,R=null,P=-1,$=5,L=-1;function Pe(){return!(e.unstable_now()-L<$)}function gn(){if(R!==null){var w=e.unstable_now();L=w;var k=!0;try{k=R(!0,w)}finally{k?xn():(I=!1,R=null)}}else I=!1}var xn;if(typeof d=="function")xn=function(){d(gn)};else if(typeof MessageChannel<"u"){var oo=new MessageChannel,Yc=oo.port2;oo.port1.onmessage=gn,xn=function(){Yc.postMessage(null)}}else xn=function(){T(gn,0)};function Us(w){R=w,I||(I=!0,xn())}function qs(w,k){P=T(function(){w(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Us(j))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(w){switch(v){case 1:case 2:case 3:var k=3;break;default:k=v}var O=v;v=k;try{return w()}finally{v=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,k){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var O=v;v=w;try{return k()}finally{v=O}},e.unstable_scheduleCallback=function(w,k,O){var B=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?B+O:B):O=B,w){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=O+X,w={id:f++,callback:k,priorityLevel:w,startTime:O,expirationTime:X,sortIndex:-1},O>B?(w.sortIndex=O,t(c,w),n(u)===null&&w===n(c)&&(x?(p(P),P=-1):x=!0,qs(S,O-B))):(w.sortIndex=X,t(u,w),y||g||(y=!0,Us(j))),w},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(w){var k=v;return function(){var O=v;v=k;try{return w.apply(this,arguments)}finally{v=O}}}})(za);_a.exports=za;var Ed=_a.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=E,ye=Ed;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ha=new Set,zn={};function qt(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(zn[e]=t,e=0;e<t.length;e++)Ha.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fi=Object.prototype.hasOwnProperty,jd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mo={},po={};function Td(e){return fi.call(po,e)?!0:fi.call(mo,e)?!1:jd.test(e)?po[e]=!0:(mo[e]=!0,!1)}function Cd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wd(e,t,n,r){if(t===null||typeof t>"u"||Cd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,s,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ml=/[\-:]([a-z])/g;function pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ml,pl);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ml,pl);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ml,pl);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function fl(e,t,n,r){var s=ne.hasOwnProperty(t)?ne[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wd(t,n,s,r)&&(n=null),r||s===null?Td(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fr=Symbol.for("react.element"),zt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),hi=Symbol.for("react.profiler"),Fa=Symbol.for("react.provider"),Va=Symbol.for("react.context"),vl=Symbol.for("react.forward_ref"),vi=Symbol.for("react.suspense"),gi=Symbol.for("react.suspense_list"),gl=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),$a=Symbol.for("react.offscreen"),fo=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=fo&&e[fo]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,Ds;function In(e){if(Ds===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ds=t&&t[1]||""}return`
`+Ds+e}var _s=!1;function zs(e,t){if(!e||_s)return"";_s=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var u=`
`+s[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{_s=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function Id(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=zs(e.type,!1),e;case 11:return e=zs(e.type.render,!1),e;case 1:return e=zs(e.type,!0),e;default:return""}}function xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case zt:return"Portal";case hi:return"Profiler";case hl:return"StrictMode";case vi:return"Suspense";case gi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Va:return(e.displayName||"Context")+".Consumer";case Fa:return(e._context.displayName||"Context")+".Provider";case vl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gl:return t=e.displayName||null,t!==null?t:xi(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return xi(e(t))}catch{}}return null}function Rd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xi(t);case 8:return t===hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ba(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pd(e){var t=Ba(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=Pd(e))}function Ja(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ba(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yi(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ho(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qa(e,t){t=t.checked,t!=null&&fl(e,"checked",t,!1)}function Si(e,t){Qa(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ei(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ei(e,t,n){(t!=="number"||Fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function go(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Rn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function Ga(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ji(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Ya=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){kd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Xa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Ka(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Xa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Od=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ti(e,t){if(t){if(Od[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wi=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ii=null,Zt=null,en=null;function yo(e){if(e=ur(e)){if(typeof Ii!="function")throw Error(N(280));var t=e.stateNode;t&&(t=gs(t),Ii(e.stateNode,e.type,t))}}function Za(e){Zt?en?en.push(e):en=[e]:Zt=e}function eu(){if(Zt){var e=Zt,t=en;if(en=Zt=null,yo(e),t)for(e=0;e<t.length;e++)yo(t[e])}}function tu(e,t){return e(t)}function nu(){}var Hs=!1;function ru(e,t,n){if(Hs)return e(t,n);Hs=!0;try{return tu(e,t,n)}finally{Hs=!1,(Zt!==null||en!==null)&&(nu(),eu())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=gs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Ri=!1;if(Ge)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Ri=!1}function Ad(e,t,n,r,s,i,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var An=!1,Vr=null,$r=!1,Pi=null,Ld={onError:function(e){An=!0,Vr=e}};function Ud(e,t,n,r,s,i,l,a,u){An=!1,Vr=null,Ad.apply(Ld,arguments)}function qd(e,t,n,r,s,i,l,a,u){if(Ud.apply(this,arguments),An){if(An){var c=Vr;An=!1,Vr=null}else throw Error(N(198));$r||($r=!0,Pi=c)}}function bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function su(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function So(e){if(bt(e)!==e)throw Error(N(188))}function bd(e){var t=e.alternate;if(!t){if(t=bt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return So(s),e;if(i===r)return So(s),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=s,r=i;else{for(var l=!1,a=s.child;a;){if(a===n){l=!0,n=s,r=i;break}if(a===r){l=!0,r=s,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=s;break}if(a===r){l=!0,r=i,n=s;break}a=a.sibling}if(!l)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function iu(e){return e=bd(e),e!==null?lu(e):null}function lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lu(e);if(t!==null)return t;e=e.sibling}return null}var ou=ye.unstable_scheduleCallback,Eo=ye.unstable_cancelCallback,Md=ye.unstable_shouldYield,Dd=ye.unstable_requestPaint,J=ye.unstable_now,_d=ye.unstable_getCurrentPriorityLevel,yl=ye.unstable_ImmediatePriority,au=ye.unstable_UserBlockingPriority,Br=ye.unstable_NormalPriority,zd=ye.unstable_LowPriority,uu=ye.unstable_IdlePriority,ps=null,He=null;function Hd(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(ps,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:$d,Fd=Math.log,Vd=Math.LN2;function $d(e){return e>>>=0,e===0?32:31-(Fd(e)/Vd|0)|0}var gr=64,xr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~s;a!==0?r=Pn(a):(i&=l,i!==0&&(r=Pn(i)))}else l=n&~s,l!==0?r=Pn(l):i!==0&&(r=Pn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),s=1<<n,r|=e[n],t&=~s;return r}function Bd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ue(i),a=1<<l,u=s[l];u===-1?(!(a&n)||a&r)&&(s[l]=Bd(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cu(){var e=gr;return gr<<=1,!(gr&4194240)&&(gr=64),e}function Fs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function Qd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Ue(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function Sl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var q=0;function du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mu,El,pu,fu,hu,Oi=!1,yr=[],ot=null,at=null,ut=null,Vn=new Map,$n=new Map,nt=[],Gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function No(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function En(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=ur(t),t!==null&&El(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Wd(e,t,n,r,s){switch(t){case"focusin":return ot=En(ot,e,t,n,r,s),!0;case"dragenter":return at=En(at,e,t,n,r,s),!0;case"mouseover":return ut=En(ut,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return Vn.set(i,En(Vn.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,$n.set(i,En($n.get(i)||null,e,t,n,r,s)),!0}return!1}function vu(e){var t=Tt(e.target);if(t!==null){var n=bt(t);if(n!==null){if(t=n.tag,t===13){if(t=su(n),t!==null){e.blockedOn=t,hu(e.priority,function(){pu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ai(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wi=r,n.target.dispatchEvent(r),wi=null}else return t=ur(n),t!==null&&El(t),e.blockedOn=n,!1;t.shift()}return!0}function jo(e,t,n){Ar(e)&&n.delete(t)}function Yd(){Oi=!1,ot!==null&&Ar(ot)&&(ot=null),at!==null&&Ar(at)&&(at=null),ut!==null&&Ar(ut)&&(ut=null),Vn.forEach(jo),$n.forEach(jo)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,Oi||(Oi=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Yd)))}function Bn(e){function t(s){return Nn(s,e)}if(0<yr.length){Nn(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&Nn(ot,e),at!==null&&Nn(at,e),ut!==null&&Nn(ut,e),Vn.forEach(t),$n.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)vu(n),n.blockedOn===null&&nt.shift()}var tn=Ke.ReactCurrentBatchConfig,Qr=!0;function Xd(e,t,n,r){var s=q,i=tn.transition;tn.transition=null;try{q=1,Nl(e,t,n,r)}finally{q=s,tn.transition=i}}function Kd(e,t,n,r){var s=q,i=tn.transition;tn.transition=null;try{q=4,Nl(e,t,n,r)}finally{q=s,tn.transition=i}}function Nl(e,t,n,r){if(Qr){var s=Ai(e,t,n,r);if(s===null)Ks(e,t,r,Gr,n),No(e,r);else if(Wd(s,e,t,n,r))r.stopPropagation();else if(No(e,r),t&4&&-1<Gd.indexOf(e)){for(;s!==null;){var i=ur(s);if(i!==null&&mu(i),i=Ai(e,t,n,r),i===null&&Ks(e,t,r,Gr,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ks(e,t,r,null,n)}}var Gr=null;function Ai(e,t,n,r){if(Gr=null,e=xl(r),e=Tt(e),e!==null)if(t=bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=su(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_d()){case yl:return 1;case au:return 4;case Br:case zd:return 16;case uu:return 536870912;default:return 16}default:return 16}}var st=null,jl=null,Lr=null;function xu(){if(Lr)return Lr;var e,t=jl,n=t.length,r,s="value"in st?st.value:st.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===s[i-r];r++);return Lr=s.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function To(){return!1}function Ee(e){function t(n,r,s,i,l){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sr:To,this.isPropagationStopped=To,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Ee(pn),ar=F({},pn,{view:0,detail:0}),Zd=Ee(ar),Vs,$s,jn,fs=F({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(Vs=e.screenX-jn.screenX,$s=e.screenY-jn.screenY):$s=Vs=0,jn=e),Vs)},movementY:function(e){return"movementY"in e?e.movementY:$s}}),Co=Ee(fs),em=F({},fs,{dataTransfer:0}),tm=Ee(em),nm=F({},ar,{relatedTarget:0}),Bs=Ee(nm),rm=F({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),sm=Ee(rm),im=F({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lm=Ee(im),om=F({},pn,{data:0}),wo=Ee(om),am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},um={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cm[e])?!!t[e]:!1}function Cl(){return dm}var mm=F({},ar,{key:function(e){if(e.key){var t=am[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?um[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pm=Ee(mm),fm=F({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Io=Ee(fm),hm=F({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),vm=Ee(hm),gm=F({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xm=Ee(gm),ym=F({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sm=Ee(ym),Em=[9,13,27,32],wl=Ge&&"CompositionEvent"in window,Ln=null;Ge&&"documentMode"in document&&(Ln=document.documentMode);var Nm=Ge&&"TextEvent"in window&&!Ln,yu=Ge&&(!wl||Ln&&8<Ln&&11>=Ln),Ro=" ",Po=!1;function Su(e,t){switch(e){case"keyup":return Em.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function jm(e,t){switch(e){case"compositionend":return Eu(t);case"keypress":return t.which!==32?null:(Po=!0,Ro);case"textInput":return e=t.data,e===Ro&&Po?null:e;default:return null}}function Tm(e,t){if(Ft)return e==="compositionend"||!wl&&Su(e,t)?(e=xu(),Lr=jl=st=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yu&&t.locale!=="ko"?null:t.data;default:return null}}var Cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cm[e.type]:t==="textarea"}function Nu(e,t,n,r){Za(r),t=Wr(t,"onChange"),0<t.length&&(n=new Tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,Jn=null;function wm(e){Lu(e,0)}function hs(e){var t=Bt(e);if(Ja(t))return e}function Im(e,t){if(e==="change")return t}var ju=!1;if(Ge){var Js;if(Ge){var Qs="oninput"in document;if(!Qs){var Oo=document.createElement("div");Oo.setAttribute("oninput","return;"),Qs=typeof Oo.oninput=="function"}Js=Qs}else Js=!1;ju=Js&&(!document.documentMode||9<document.documentMode)}function Ao(){Un&&(Un.detachEvent("onpropertychange",Tu),Jn=Un=null)}function Tu(e){if(e.propertyName==="value"&&hs(Jn)){var t=[];Nu(t,Jn,e,xl(e)),ru(wm,t)}}function Rm(e,t,n){e==="focusin"?(Ao(),Un=t,Jn=n,Un.attachEvent("onpropertychange",Tu)):e==="focusout"&&Ao()}function Pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hs(Jn)}function km(e,t){if(e==="click")return hs(t)}function Om(e,t){if(e==="input"||e==="change")return hs(t)}function Am(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:Am;function Qn(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!fi.call(t,s)||!be(e[s],t[s]))return!1}return!0}function Lo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uo(e,t){var n=Lo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lo(n)}}function Cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wu(){for(var e=window,t=Fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function Il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lm(e){var t=wu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cu(n.ownerDocument.documentElement,n)){if(r!==null&&Il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=Uo(n,i);var l=Uo(n,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Um=Ge&&"documentMode"in document&&11>=document.documentMode,Vt=null,Li=null,qn=null,Ui=!1;function qo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ui||Vt==null||Vt!==Fr(r)||(r=Vt,"selectionStart"in r&&Il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qn&&Qn(qn,r)||(qn=r,r=Wr(Li,"onSelect"),0<r.length&&(t=new Tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $t={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},Gs={},Iu={};Ge&&(Iu=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function vs(e){if(Gs[e])return Gs[e];if(!$t[e])return e;var t=$t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Iu)return Gs[e]=t[n];return e}var Ru=vs("animationend"),Pu=vs("animationiteration"),ku=vs("animationstart"),Ou=vs("transitionend"),Au=new Map,bo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,t){Au.set(e,t),qt(t,[e])}for(var Ws=0;Ws<bo.length;Ws++){var Ys=bo[Ws],qm=Ys.toLowerCase(),bm=Ys[0].toUpperCase()+Ys.slice(1);gt(qm,"on"+bm)}gt(Ru,"onAnimationEnd");gt(Pu,"onAnimationIteration");gt(ku,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(Ou,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mm=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function Mo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qd(r,t,void 0,e),e.currentTarget=null}function Lu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;Mo(s,a,c),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;Mo(s,a,c),i=u}}}if($r)throw e=Pi,$r=!1,Pi=null,e}function M(e,t){var n=t[_i];n===void 0&&(n=t[_i]=new Set);var r=e+"__bubble";n.has(r)||(Uu(t,e,2,!1),n.add(r))}function Xs(e,t,n){var r=0;t&&(r|=4),Uu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[Nr]){e[Nr]=!0,Ha.forEach(function(n){n!=="selectionchange"&&(Mm.has(n)||Xs(n,!1,e),Xs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Xs("selectionchange",!1,t))}}function Uu(e,t,n,r){switch(gu(t)){case 1:var s=Xd;break;case 4:s=Kd;break;default:s=Nl}n=s.bind(null,t,n,e),s=void 0,!Ri||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ks(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Tt(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}ru(function(){var c=i,f=xl(n),m=[];e:{var v=Au.get(e);if(v!==void 0){var g=Tl,y=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":g=pm;break;case"focusin":y="focus",g=Bs;break;case"focusout":y="blur",g=Bs;break;case"beforeblur":case"afterblur":g=Bs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Co;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=vm;break;case Ru:case Pu:case ku:g=sm;break;case Ou:g=xm;break;case"scroll":g=Zd;break;case"wheel":g=Sm;break;case"copy":case"cut":case"paste":g=lm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Io}var x=(t&4)!==0,T=!x&&e==="scroll",p=x?v!==null?v+"Capture":null:v;x=[];for(var d=c,h;d!==null;){h=d;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,p!==null&&(S=Fn(d,p),S!=null&&x.push(Wn(d,S,h)))),T)break;d=d.return}0<x.length&&(v=new g(v,y,null,n,f),m.push({event:v,listeners:x}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",v&&n!==wi&&(y=n.relatedTarget||n.fromElement)&&(Tt(y)||y[We]))break e;if((g||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Tt(y):null,y!==null&&(T=bt(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(x=Co,S="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Io,S="onPointerLeave",p="onPointerEnter",d="pointer"),T=g==null?v:Bt(g),h=y==null?v:Bt(y),v=new x(S,d+"leave",g,n,f),v.target=T,v.relatedTarget=h,S=null,Tt(f)===c&&(x=new x(p,d+"enter",y,n,f),x.target=h,x.relatedTarget=T,S=x),T=S,g&&y)t:{for(x=g,p=y,d=0,h=x;h;h=Dt(h))d++;for(h=0,S=p;S;S=Dt(S))h++;for(;0<d-h;)x=Dt(x),d--;for(;0<h-d;)p=Dt(p),h--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=Dt(x),p=Dt(p)}x=null}else x=null;g!==null&&Do(m,v,g,x,!1),y!==null&&T!==null&&Do(m,T,y,x,!0)}}e:{if(v=c?Bt(c):window,g=v.nodeName&&v.nodeName.toLowerCase(),g==="select"||g==="input"&&v.type==="file")var j=Im;else if(ko(v))if(ju)j=Om;else{j=Pm;var I=Rm}else(g=v.nodeName)&&g.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(j=km);if(j&&(j=j(e,c))){Nu(m,j,n,f);break e}I&&I(e,v,c),e==="focusout"&&(I=v._wrapperState)&&I.controlled&&v.type==="number"&&Ei(v,"number",v.value)}switch(I=c?Bt(c):window,e){case"focusin":(ko(I)||I.contentEditable==="true")&&(Vt=I,Li=c,qn=null);break;case"focusout":qn=Li=Vt=null;break;case"mousedown":Ui=!0;break;case"contextmenu":case"mouseup":case"dragend":Ui=!1,qo(m,n,f);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":qo(m,n,f)}var R;if(wl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ft?Su(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(yu&&n.locale!=="ko"&&(Ft||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ft&&(R=xu()):(st=f,jl="value"in st?st.value:st.textContent,Ft=!0)),I=Wr(c,P),0<I.length&&(P=new wo(P,e,null,n,f),m.push({event:P,listeners:I}),R?P.data=R:(R=Eu(n),R!==null&&(P.data=R)))),(R=Nm?jm(e,n):Tm(e,n))&&(c=Wr(c,"onBeforeInput"),0<c.length&&(f=new wo("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=R))}Lu(m,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Fn(e,n),i!=null&&r.unshift(Wn(e,i,s)),i=Fn(e,t),i!=null&&r.push(Wn(e,i,s))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Do(e,t,n,r,s){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,s?(u=Fn(n,i),u!=null&&l.unshift(Wn(n,u,a))):s||(u=Fn(n,i),u!=null&&l.push(Wn(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Dm=/\r\n?/g,_m=/\u0000|\uFFFD/g;function _o(e){return(typeof e=="string"?e:""+e).replace(Dm,`
`).replace(_m,"")}function jr(e,t,n){if(t=_o(t),_o(e)!==t&&n)throw Error(N(425))}function Yr(){}var qi=null,bi=null;function Mi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout=="function"?setTimeout:void 0,zm=typeof clearTimeout=="function"?clearTimeout:void 0,zo=typeof Promise=="function"?Promise:void 0,Hm=typeof queueMicrotask=="function"?queueMicrotask:typeof zo<"u"?function(e){return zo.resolve(null).then(e).catch(Fm)}:Di;function Fm(e){setTimeout(function(){throw e})}function Zs(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Bn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ho(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),ze="__reactFiber$"+fn,Yn="__reactProps$"+fn,We="__reactContainer$"+fn,_i="__reactEvents$"+fn,Vm="__reactListeners$"+fn,$m="__reactHandles$"+fn;function Tt(e){var t=e[ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ho(e);e!==null;){if(n=e[ze])return n;e=Ho(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[ze]||e[We],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function gs(e){return e[Yn]||null}var zi=[],Jt=-1;function xt(e){return{current:e}}function D(e){0>Jt||(e.current=zi[Jt],zi[Jt]=null,Jt--)}function b(e,t){Jt++,zi[Jt]=e.current,e.current=t}var vt={},le=xt(vt),pe=xt(!1),kt=vt;function ln(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function fe(e){return e=e.childContextTypes,e!=null}function Xr(){D(pe),D(le)}function Fo(e,t,n){if(le.current!==vt)throw Error(N(168));b(le,t),b(pe,n)}function qu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(N(108,Rd(e)||"Unknown",s));return F({},n,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,kt=le.current,b(le,e),b(pe,pe.current),!0}function Vo(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=qu(e,t,kt),r.__reactInternalMemoizedMergedChildContext=e,D(pe),D(le),b(le,e)):D(pe),b(pe,n)}var $e=null,xs=!1,ei=!1;function bu(e){$e===null?$e=[e]:$e.push(e)}function Bm(e){xs=!0,bu(e)}function yt(){if(!ei&&$e!==null){ei=!0;var e=0,t=q;try{var n=$e;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,xs=!1}catch(s){throw $e!==null&&($e=$e.slice(e+1)),ou(yl,yt),s}finally{q=t,ei=!1}}return null}var Qt=[],Gt=0,Zr=null,es=0,je=[],Te=0,Ot=null,Be=1,Je="";function Nt(e,t){Qt[Gt++]=es,Qt[Gt++]=Zr,Zr=e,es=t}function Mu(e,t,n){je[Te++]=Be,je[Te++]=Je,je[Te++]=Ot,Ot=e;var r=Be;e=Je;var s=32-Ue(r)-1;r&=~(1<<s),n+=1;var i=32-Ue(t)+s;if(30<i){var l=s-s%5;i=(r&(1<<l)-1).toString(32),r>>=l,s-=l,Be=1<<32-Ue(t)+s|n<<s|r,Je=i+e}else Be=1<<i|n<<s|r,Je=e}function Rl(e){e.return!==null&&(Nt(e,1),Mu(e,1,0))}function Pl(e){for(;e===Zr;)Zr=Qt[--Gt],Qt[Gt]=null,es=Qt[--Gt],Qt[Gt]=null;for(;e===Ot;)Ot=je[--Te],je[Te]=null,Je=je[--Te],je[Te]=null,Be=je[--Te],je[Te]=null}var xe=null,ge=null,_=!1,Le=null;function Du(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $o(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ge=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Be,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ge=null,!0):!1;default:return!1}}function Hi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fi(e){if(_){var t=ge;if(t){var n=t;if(!$o(e,t)){if(Hi(e))throw Error(N(418));t=ct(n.nextSibling);var r=xe;t&&$o(e,t)?Du(r,n):(e.flags=e.flags&-4097|2,_=!1,xe=e)}}else{if(Hi(e))throw Error(N(418));e.flags=e.flags&-4097|2,_=!1,xe=e}}}function Bo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Tr(e){if(e!==xe)return!1;if(!_)return Bo(e),_=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mi(e.type,e.memoizedProps)),t&&(t=ge)){if(Hi(e))throw _u(),Error(N(418));for(;t;)Du(e,t),t=ct(t.nextSibling)}if(Bo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=xe?ct(e.stateNode.nextSibling):null;return!0}function _u(){for(var e=ge;e;)e=ct(e.nextSibling)}function on(){ge=xe=null,_=!1}function kl(e){Le===null?Le=[e]:Le.push(e)}var Jm=Ke.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jo(e){var t=e._init;return t(e._payload)}function zu(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function s(p,d){return p=ft(p,d),p.index=0,p.sibling=null,p}function i(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,h,S){return d===null||d.tag!==6?(d=oi(h,p.mode,S),d.return=p,d):(d=s(d,h),d.return=p,d)}function u(p,d,h,S){var j=h.type;return j===Ht?f(p,d,h.props.children,S,h.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===et&&Jo(j)===d.type)?(S=s(d,h.props),S.ref=Tn(p,d,h),S.return=p,S):(S=Hr(h.type,h.key,h.props,null,p.mode,S),S.ref=Tn(p,d,h),S.return=p,S)}function c(p,d,h,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ai(h,p.mode,S),d.return=p,d):(d=s(d,h.children||[]),d.return=p,d)}function f(p,d,h,S,j){return d===null||d.tag!==7?(d=Rt(h,p.mode,S,j),d.return=p,d):(d=s(d,h),d.return=p,d)}function m(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=oi(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case fr:return h=Hr(d.type,d.key,d.props,null,p.mode,h),h.ref=Tn(p,null,d),h.return=p,h;case zt:return d=ai(d,p.mode,h),d.return=p,d;case et:var S=d._init;return m(p,S(d._payload),h)}if(Rn(d)||yn(d))return d=Rt(d,p.mode,h,null),d.return=p,d;Cr(p,d)}return null}function v(p,d,h,S){var j=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return j!==null?null:a(p,d,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fr:return h.key===j?u(p,d,h,S):null;case zt:return h.key===j?c(p,d,h,S):null;case et:return j=h._init,v(p,d,j(h._payload),S)}if(Rn(h)||yn(h))return j!==null?null:f(p,d,h,S,null);Cr(p,h)}return null}function g(p,d,h,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(h)||null,a(d,p,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fr:return p=p.get(S.key===null?h:S.key)||null,u(d,p,S,j);case zt:return p=p.get(S.key===null?h:S.key)||null,c(d,p,S,j);case et:var I=S._init;return g(p,d,h,I(S._payload),j)}if(Rn(S)||yn(S))return p=p.get(h)||null,f(d,p,S,j,null);Cr(d,S)}return null}function y(p,d,h,S){for(var j=null,I=null,R=d,P=d=0,$=null;R!==null&&P<h.length;P++){R.index>P?($=R,R=null):$=R.sibling;var L=v(p,R,h[P],S);if(L===null){R===null&&(R=$);break}e&&R&&L.alternate===null&&t(p,R),d=i(L,d,P),I===null?j=L:I.sibling=L,I=L,R=$}if(P===h.length)return n(p,R),_&&Nt(p,P),j;if(R===null){for(;P<h.length;P++)R=m(p,h[P],S),R!==null&&(d=i(R,d,P),I===null?j=R:I.sibling=R,I=R);return _&&Nt(p,P),j}for(R=r(p,R);P<h.length;P++)$=g(R,p,P,h[P],S),$!==null&&(e&&$.alternate!==null&&R.delete($.key===null?P:$.key),d=i($,d,P),I===null?j=$:I.sibling=$,I=$);return e&&R.forEach(function(Pe){return t(p,Pe)}),_&&Nt(p,P),j}function x(p,d,h,S){var j=yn(h);if(typeof j!="function")throw Error(N(150));if(h=j.call(h),h==null)throw Error(N(151));for(var I=j=null,R=d,P=d=0,$=null,L=h.next();R!==null&&!L.done;P++,L=h.next()){R.index>P?($=R,R=null):$=R.sibling;var Pe=v(p,R,L.value,S);if(Pe===null){R===null&&(R=$);break}e&&R&&Pe.alternate===null&&t(p,R),d=i(Pe,d,P),I===null?j=Pe:I.sibling=Pe,I=Pe,R=$}if(L.done)return n(p,R),_&&Nt(p,P),j;if(R===null){for(;!L.done;P++,L=h.next())L=m(p,L.value,S),L!==null&&(d=i(L,d,P),I===null?j=L:I.sibling=L,I=L);return _&&Nt(p,P),j}for(R=r(p,R);!L.done;P++,L=h.next())L=g(R,p,P,L.value,S),L!==null&&(e&&L.alternate!==null&&R.delete(L.key===null?P:L.key),d=i(L,d,P),I===null?j=L:I.sibling=L,I=L);return e&&R.forEach(function(gn){return t(p,gn)}),_&&Nt(p,P),j}function T(p,d,h,S){if(typeof h=="object"&&h!==null&&h.type===Ht&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case fr:e:{for(var j=h.key,I=d;I!==null;){if(I.key===j){if(j=h.type,j===Ht){if(I.tag===7){n(p,I.sibling),d=s(I,h.props.children),d.return=p,p=d;break e}}else if(I.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===et&&Jo(j)===I.type){n(p,I.sibling),d=s(I,h.props),d.ref=Tn(p,I,h),d.return=p,p=d;break e}n(p,I);break}else t(p,I);I=I.sibling}h.type===Ht?(d=Rt(h.props.children,p.mode,S,h.key),d.return=p,p=d):(S=Hr(h.type,h.key,h.props,null,p.mode,S),S.ref=Tn(p,d,h),S.return=p,p=S)}return l(p);case zt:e:{for(I=h.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=s(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=ai(h,p.mode,S),d.return=p,p=d}return l(p);case et:return I=h._init,T(p,d,I(h._payload),S)}if(Rn(h))return y(p,d,h,S);if(yn(h))return x(p,d,h,S);Cr(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=s(d,h),d.return=p,p=d):(n(p,d),d=oi(h,p.mode,S),d.return=p,p=d),l(p)):n(p,d)}return T}var an=zu(!0),Hu=zu(!1),ts=xt(null),ns=null,Wt=null,Ol=null;function Al(){Ol=Wt=ns=null}function Ll(e){var t=ts.current;D(ts),e._currentValue=t}function Vi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){ns=e,Ol=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if(Ol!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(ns===null)throw Error(N(308));Wt=e,ns.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var Ct=null;function Ul(e){Ct===null?Ct=[e]:Ct.push(e)}function Fu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Ul(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Ye(e,n)}return s=r.interleaved,s===null?(t.next=t,Ul(r)):(t.next=s.next,s.next=t),r.interleaved=t,Ye(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sl(e,n)}}function Qo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rs(e,t,n,r){var s=e.updateQueue;tt=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;l=0,f=c=u=null,a=i;do{var v=a.lane,g=a.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(v=t,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){m=y.call(g,m,v);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,v=typeof y=="function"?y.call(g,m,v):y,v==null)break e;m=F({},m,v);break e;case 2:tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=s.effects,v===null?s.effects=[a]:v.push(a))}else g={eventTime:g,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,u=m):f=f.next=g,l|=v;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;v=a,a=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Lt|=l,e.lanes=l,e.memoizedState=m}}function Go(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(N(191,s));s.call(r)}}}var cr={},Fe=xt(cr),Xn=xt(cr),Kn=xt(cr);function wt(e){if(e===cr)throw Error(N(174));return e}function bl(e,t){switch(b(Kn,t),b(Xn,e),b(Fe,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ji(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ji(t,e)}D(Fe),b(Fe,t)}function un(){D(Fe),D(Xn),D(Kn)}function $u(e){wt(Kn.current);var t=wt(Fe.current),n=ji(t,e.type);t!==n&&(b(Xn,e),b(Fe,n))}function Ml(e){Xn.current===e&&(D(Fe),D(Xn))}var z=xt(0);function ss(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ti=[];function Dl(){for(var e=0;e<ti.length;e++)ti[e]._workInProgressVersionPrimary=null;ti.length=0}var br=Ke.ReactCurrentDispatcher,ni=Ke.ReactCurrentBatchConfig,At=0,H=null,G=null,K=null,is=!1,bn=!1,Zn=0,Qm=0;function re(){throw Error(N(321))}function _l(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function zl(e,t,n,r,s,i){if(At=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,br.current=e===null||e.memoizedState===null?Xm:Km,e=n(r,s),bn){i=0;do{if(bn=!1,Zn=0,25<=i)throw Error(N(301));i+=1,K=G=null,t.updateQueue=null,br.current=Zm,e=n(r,s)}while(bn)}if(br.current=ls,t=G!==null&&G.next!==null,At=0,K=G=H=null,is=!1,t)throw Error(N(300));return e}function Hl(){var e=Zn!==0;return Zn=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?H.memoizedState=K=e:K=K.next=e,K}function Re(){if(G===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=K===null?H.memoizedState:K.next;if(t!==null)K=t,G=e;else{if(e===null)throw Error(N(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},K===null?H.memoizedState=K=e:K=K.next=e}return K}function er(e,t){return typeof t=="function"?t(e):t}function ri(e){var t=Re(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=G,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=l=null,u=null,c=i;do{var f=c.lane;if((At&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,l=r):u=u.next=m,H.lanes|=f,Lt|=f}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=a,be(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,H.lanes|=i,Lt|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function si(e){var t=Re(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do i=e(i,l.action),l=l.next;while(l!==s);be(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Bu(){}function Ju(e,t){var n=H,r=Re(),s=t(),i=!be(r.memoizedState,s);if(i&&(r.memoizedState=s,me=!0),r=r.queue,Fl(Wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||K!==null&&K.memoizedState.tag&1){if(n.flags|=2048,tr(9,Gu.bind(null,n,r,s,t),void 0,null),Z===null)throw Error(N(349));At&30||Qu(n,t,s)}return s}function Qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gu(e,t,n,r){t.value=n,t.getSnapshot=r,Yu(t)&&Xu(e)}function Wu(e,t,n){return n(function(){Yu(t)&&Xu(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function Xu(e){var t=Ye(e,1);t!==null&&qe(t,e,1,-1)}function Wo(e){var t=_e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=Ym.bind(null,H,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ku(){return Re().memoizedState}function Mr(e,t,n,r){var s=_e();H.flags|=e,s.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function ys(e,t,n,r){var s=Re();r=r===void 0?null:r;var i=void 0;if(G!==null){var l=G.memoizedState;if(i=l.destroy,r!==null&&_l(r,l.deps)){s.memoizedState=tr(t,n,i,r);return}}H.flags|=e,s.memoizedState=tr(1|t,n,i,r)}function Yo(e,t){return Mr(8390656,8,e,t)}function Fl(e,t){return ys(2048,8,e,t)}function Zu(e,t){return ys(4,2,e,t)}function ec(e,t){return ys(4,4,e,t)}function tc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nc(e,t,n){return n=n!=null?n.concat([e]):null,ys(4,4,tc.bind(null,t,e),n)}function Vl(){}function rc(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_l(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sc(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_l(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ic(e,t,n){return At&21?(be(n,t)||(n=cu(),H.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Gm(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=ni.transition;ni.transition={};try{e(!1),t()}finally{q=n,ni.transition=r}}function lc(){return Re().memoizedState}function Wm(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oc(e))ac(t,n);else if(n=Fu(e,t,n,r),n!==null){var s=ae();qe(n,e,r,s),uc(n,t,r)}}function Ym(e,t,n){var r=pt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oc(e))ac(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(s.hasEagerState=!0,s.eagerState=a,be(a,l)){var u=t.interleaved;u===null?(s.next=s,Ul(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=Fu(e,t,s,r),n!==null&&(s=ae(),qe(n,e,r,s),uc(n,t,r))}}function oc(e){var t=e.alternate;return e===H||t!==null&&t===H}function ac(e,t){bn=is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sl(e,n)}}var ls={readContext:Ie,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Xm={readContext:Ie,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Yo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mr(4194308,4,tc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mr(4,2,e,t)},useMemo:function(e,t){var n=_e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wm.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:Wo,useDebugValue:Vl,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=Wo(!1),t=e[0];return e=Gm.bind(null,e[1]),_e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,s=_e();if(_){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Z===null)throw Error(N(349));At&30||Qu(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,Yo(Wu.bind(null,r,i,e),[e]),r.flags|=2048,tr(9,Gu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=_e(),t=Z.identifierPrefix;if(_){var n=Je,r=Be;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Km={readContext:Ie,useCallback:rc,useContext:Ie,useEffect:Fl,useImperativeHandle:nc,useInsertionEffect:Zu,useLayoutEffect:ec,useMemo:sc,useReducer:ri,useRef:Ku,useState:function(){return ri(er)},useDebugValue:Vl,useDeferredValue:function(e){var t=Re();return ic(t,G.memoizedState,e)},useTransition:function(){var e=ri(er)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Ju,useId:lc,unstable_isNewReconciler:!1},Zm={readContext:Ie,useCallback:rc,useContext:Ie,useEffect:Fl,useImperativeHandle:nc,useInsertionEffect:Zu,useLayoutEffect:ec,useMemo:sc,useReducer:si,useRef:Ku,useState:function(){return si(er)},useDebugValue:Vl,useDeferredValue:function(e){var t=Re();return G===null?t.memoizedState=e:ic(t,G.memoizedState,e)},useTransition:function(){var e=si(er)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Ju,useId:lc,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $i(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:F({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ss={isMounted:function(e){return(e=e._reactInternals)?bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),s=pt(e),i=Qe(r,s);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,s),t!==null&&(qe(t,e,s,r),qr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),s=pt(e),i=Qe(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,s),t!==null&&(qe(t,e,s,r),qr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=pt(e),s=Qe(n,r);s.tag=2,t!=null&&(s.callback=t),t=dt(e,s,r),t!==null&&(qe(t,e,r,n),qr(t,e,r))}};function Xo(e,t,n,r,s,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,r)||!Qn(s,i):!0}function cc(e,t,n){var r=!1,s=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ie(i):(s=fe(t)?kt:le.current,r=t.contextTypes,i=(r=r!=null)?ln(e,s):vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ko(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function Bi(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},ql(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Ie(i):(i=fe(t)?kt:le.current,s.context=ln(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($i(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ss.enqueueReplaceState(s,s.state,null),rs(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=Id(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function ii(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ji(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ep=typeof WeakMap=="function"?WeakMap:Map;function dc(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){as||(as=!0,nl=r),Ji(e,t)},n}function mc(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Ji(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ji(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Zo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ep;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=fp.bind(null,e,t,n),t.then(e,e))}function ea(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ta(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var tp=Ke.ReactCurrentOwner,me=!1;function oe(e,t,n,r){t.child=e===null?Hu(t,null,n,r):an(t,e.child,n,r)}function na(e,t,n,r,s){n=n.render;var i=t.ref;return nn(t,s),r=zl(e,t,n,r,i,s),n=Hl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Xe(e,t,s)):(_&&n&&Rl(t),t.flags|=1,oe(e,t,r,s),t.child)}function ra(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!Xl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,pc(e,t,i,r,s)):(e=Hr(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(l,r)&&e.ref===t.ref)return Xe(e,t,s)}return t.flags|=1,e=ft(i,r),e.ref=t.ref,e.return=t,t.child=e}function pc(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(Qn(i,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Xe(e,t,s)}return Qi(e,t,n,r,s)}function fc(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(Xt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(Xt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,b(Xt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,b(Xt,ve),ve|=r;return oe(e,t,s,n),t.child}function hc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qi(e,t,n,r,s){var i=fe(n)?kt:le.current;return i=ln(t,i),nn(t,s),n=zl(e,t,n,r,i,s),r=Hl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Xe(e,t,s)):(_&&r&&Rl(t),t.flags|=1,oe(e,t,n,s),t.child)}function sa(e,t,n,r,s){if(fe(n)){var i=!0;Kr(t)}else i=!1;if(nn(t,s),t.stateNode===null)Dr(e,t),cc(t,n,r),Bi(t,n,r,s),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ie(c):(c=fe(n)?kt:le.current,c=ln(t,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ko(t,l,r,c),tt=!1;var v=t.memoizedState;l.state=v,rs(t,r,l,s),u=t.memoizedState,a!==r||v!==u||pe.current||tt?(typeof f=="function"&&($i(t,n,f,r),u=t.memoizedState),(a=tt||Xo(t,n,a,r,v,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Vu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Oe(t.type,a),l.props=c,m=t.pendingProps,v=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ie(u):(u=fe(n)?kt:le.current,u=ln(t,u));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||v!==u)&&Ko(t,l,r,u),tt=!1,v=t.memoizedState,l.state=v,rs(t,r,l,s);var y=t.memoizedState;a!==m||v!==y||pe.current||tt?(typeof g=="function"&&($i(t,n,g,r),y=t.memoizedState),(c=tt||Xo(t,n,c,r,v,y,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Gi(e,t,n,r,i,s)}function Gi(e,t,n,r,s,i){hc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return s&&Vo(t,n,!1),Xe(e,t,i);r=t.stateNode,tp.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=an(t,e.child,null,i),t.child=an(t,null,a,i)):oe(e,t,a,i),t.memoizedState=r.state,s&&Vo(t,n,!0),t.child}function vc(e){var t=e.stateNode;t.pendingContext?Fo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fo(e,t.context,!1),bl(e,t.containerInfo)}function ia(e,t,n,r,s){return on(),kl(s),t.flags|=256,oe(e,t,n,r),t.child}var Wi={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function gc(e,t,n){var r=t.pendingProps,s=z.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),b(z,s&1),e===null)return Fi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=js(l,r,0,null),e=Rt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yi(n),t.memoizedState=Wi,e):$l(t,l));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return np(e,t,l,r,a,s,n);if(i){i=r.fallback,l=t.mode,s=e.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ft(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=ft(a,i):(i=Rt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Yi(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Wi,r}return i=e.child,e=i.sibling,r=ft(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $l(e,t){return t=js({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wr(e,t,n,r){return r!==null&&kl(r),an(t,e.child,null,n),e=$l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function np(e,t,n,r,s,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ii(Error(N(422))),wr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=js({mode:"visible",children:r.children},s,0,null),i=Rt(i,s,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&an(t,e.child,null,l),t.child.memoizedState=Yi(l),t.memoizedState=Wi,i);if(!(t.mode&1))return wr(e,t,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(N(419)),r=ii(i,r,void 0),wr(e,t,l,r)}if(a=(l&e.childLanes)!==0,me||a){if(r=Z,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Ye(e,s),qe(r,e,s,-1))}return Yl(),r=ii(Error(N(421))),wr(e,t,l,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=hp.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,ge=ct(s.nextSibling),xe=t,_=!0,Le=null,e!==null&&(je[Te++]=Be,je[Te++]=Je,je[Te++]=Ot,Be=e.id,Je=e.overflow,Ot=t),t=$l(t,r.children),t.flags|=4096,t)}function la(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vi(e.return,t,n)}function li(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function xc(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&la(e,n,t);else if(e.tag===19)la(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(z,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ss(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),li(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ss(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}li(t,!0,n,null,i);break;case"together":li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rp(e,t,n){switch(t.tag){case 3:vc(t),on();break;case 5:$u(t);break;case 1:fe(t.type)&&Kr(t);break;case 4:bl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;b(ts,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(z,z.current&1),t.flags|=128,null):n&t.child.childLanes?gc(e,t,n):(b(z,z.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);b(z,z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),b(z,z.current),r)break;return null;case 22:case 23:return t.lanes=0,fc(e,t,n)}return Xe(e,t,n)}var yc,Xi,Sc,Ec;yc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xi=function(){};Sc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,wt(Fe.current);var i=null;switch(n){case"input":s=yi(e,s),r=yi(e,r),i=[];break;case"select":s=F({},s,{value:void 0}),r=F({},r,{value:void 0}),i=[];break;case"textarea":s=Ni(e,s),r=Ni(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}Ti(n,r);var l;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&M("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Ec=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cn(e,t){if(!_)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sp(e,t,n){var r=t.pendingProps;switch(Pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return fe(t.type)&&Xr(),se(t),null;case 3:return r=t.stateNode,un(),D(pe),D(le),Dl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(il(Le),Le=null))),Xi(e,t),se(t),null;case 5:Ml(t);var s=wt(Kn.current);if(n=t.type,e!==null&&t.stateNode!=null)Sc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return se(t),null}if(e=wt(Fe.current),Tr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ze]=t,r[Yn]=i,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(s=0;s<kn.length;s++)M(kn[s],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":ho(r,i),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},M("invalid",r);break;case"textarea":go(r,i),M("invalid",r)}Ti(n,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,a,e),s=["children",""+a]):zn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&M("scroll",r)}switch(n){case"input":hr(r),vo(r,i,!0);break;case"textarea":hr(r),xo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yr)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ze]=t,e[Yn]=r,yc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ci(n,r),n){case"dialog":M("cancel",e),M("close",e),s=r;break;case"iframe":case"object":case"embed":M("load",e),s=r;break;case"video":case"audio":for(s=0;s<kn.length;s++)M(kn[s],e);s=r;break;case"source":M("error",e),s=r;break;case"img":case"image":case"link":M("error",e),M("load",e),s=r;break;case"details":M("toggle",e),s=r;break;case"input":ho(e,r),s=yi(e,r),M("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=F({},r,{value:void 0}),M("invalid",e);break;case"textarea":go(e,r),s=Ni(e,r),M("invalid",e);break;default:s=r}Ti(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Ka(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ya(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hn(e,u):typeof u=="number"&&Hn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&M("scroll",e):u!=null&&fl(e,i,u,l))}switch(n){case"input":hr(e),vo(e,r,!1);break;case"textarea":hr(e),xo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Yr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Ec(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=wt(Kn.current),wt(Fe.current),Tr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ze]=t,(i=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ze]=t,t.stateNode=r}return se(t),null;case 13:if(D(z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_&&ge!==null&&t.mode&1&&!(t.flags&128))_u(),on(),t.flags|=98560,i=!1;else if(i=Tr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[ze]=t}else on(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),i=!1}else Le!==null&&(il(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||z.current&1?W===0&&(W=3):Yl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return un(),Xi(e,t),e===null&&Gn(t.stateNode.containerInfo),se(t),null;case 10:return Ll(t.type._context),se(t),null;case 17:return fe(t.type)&&Xr(),se(t),null;case 19:if(D(z),i=t.memoizedState,i===null)return se(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Cn(i,!1);else{if(W!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ss(e),l!==null){for(t.flags|=128,Cn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(z,z.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>dn&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304)}else{if(!r)if(e=ss(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!_)return se(t),null}else 2*J()-i.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=z.current,b(z,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Wl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function ip(e,t){switch(Pl(t),t.tag){case 1:return fe(t.type)&&Xr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),D(pe),D(le),Dl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ml(t),null;case 13:if(D(z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));on()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(z),null;case 4:return un(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return Wl(),null;case 24:return null;default:return null}}var Ir=!1,ie=!1,lp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Ki(e,t,n){try{n()}catch(r){V(e,t,r)}}var oa=!1;function op(e,t){if(qi=Qr,e=wu(),Il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,f=0,m=e,v=null;t:for(;;){for(var g;m!==n||s!==0&&m.nodeType!==3||(a=l+s),m!==i||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(g=m.firstChild)!==null;)v=m,m=g;for(;;){if(m===e)break t;if(v===n&&++c===s&&(a=l),v===i&&++f===r&&(u=l),(g=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bi={focusedElem:e,selectionRange:n},Qr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,T=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Oe(t.type,x),T);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){V(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=oa,oa=!1,y}function Mn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ki(t,n,i)}s=s.next}while(s!==r)}}function Es(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nc(e){var t=e.alternate;t!==null&&(e.alternate=null,Nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ze],delete t[Yn],delete t[_i],delete t[Vm],delete t[$m])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jc(e){return e.tag===5||e.tag===3||e.tag===4}function aa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}var ee=null,Ae=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Tc(e,t,n),n=n.sibling}function Tc(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(ps,n)}catch{}switch(n.tag){case 5:ie||Yt(n,t);case 6:var r=ee,s=Ae;ee=null,Ze(e,t,n),ee=r,Ae=s,ee!==null&&(Ae?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Ae?(e=ee,n=n.stateNode,e.nodeType===8?Zs(e.parentNode,n):e.nodeType===1&&Zs(e,n),Bn(e)):Zs(ee,n.stateNode));break;case 4:r=ee,s=Ae,ee=n.stateNode.containerInfo,Ae=!0,Ze(e,t,n),ee=r,Ae=s;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ki(n,t,l),s=s.next}while(s!==r)}Ze(e,t,n);break;case 1:if(!ie&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){V(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Ze(e,t,n),ie=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function ua(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lp),t.forEach(function(r){var s=vp.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Ae=!1;break e;case 3:ee=a.stateNode.containerInfo,Ae=!0;break e;case 4:ee=a.stateNode.containerInfo,Ae=!0;break e}a=a.return}if(ee===null)throw Error(N(160));Tc(i,l,s),ee=null,Ae=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){V(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cc(t,e),t=t.sibling}function Cc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ke(t,e),De(e),r&4){try{Mn(3,e,e.return),Es(3,e)}catch(x){V(e,e.return,x)}try{Mn(5,e,e.return)}catch(x){V(e,e.return,x)}}break;case 1:ke(t,e),De(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(ke(t,e),De(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var s=e.stateNode;try{Hn(s,"")}catch(x){V(e,e.return,x)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Qa(s,i),Ci(a,l);var c=Ci(a,i);for(l=0;l<u.length;l+=2){var f=u[l],m=u[l+1];f==="style"?Ka(s,m):f==="dangerouslySetInnerHTML"?Ya(s,m):f==="children"?Hn(s,m):fl(s,f,m,c)}switch(a){case"input":Si(s,i);break;case"textarea":Ga(s,i);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Kt(s,!!i.multiple,g,!1):v!==!!i.multiple&&(i.defaultValue!=null?Kt(s,!!i.multiple,i.defaultValue,!0):Kt(s,!!i.multiple,i.multiple?[]:"",!1))}s[Yn]=i}catch(x){V(e,e.return,x)}}break;case 6:if(ke(t,e),De(e),r&4){if(e.stateNode===null)throw Error(N(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(x){V(e,e.return,x)}}break;case 3:if(ke(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(x){V(e,e.return,x)}break;case 4:ke(t,e),De(e);break;case 13:ke(t,e),De(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Ql=J())),r&4&&ua(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||f,ke(t,e),ie=c):ke(t,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(C=e,f=e.child;f!==null;){for(m=C=f;C!==null;){switch(v=C,g=v.child,v.tag){case 0:case 11:case 14:case 15:Mn(4,v,v.return);break;case 1:Yt(v,v.return);var y=v.stateNode;if(typeof y.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){V(r,n,x)}}break;case 5:Yt(v,v.return);break;case 22:if(v.memoizedState!==null){da(m);continue}}g!==null?(g.return=v,C=g):da(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Xa("display",l))}catch(x){V(e,e.return,x)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){V(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ke(t,e),De(e),r&4&&ua(e);break;case 21:break;default:ke(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jc(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Hn(s,""),r.flags&=-33);var i=aa(e);tl(e,i,s);break;case 3:case 4:var l=r.stateNode.containerInfo,a=aa(e);el(e,a,l);break;default:throw Error(N(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ap(e,t,n){C=e,wc(e)}function wc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var s=C,i=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||Ir;if(!l){var a=s.alternate,u=a!==null&&a.memoizedState!==null||ie;a=Ir;var c=ie;if(Ir=l,(ie=u)&&!c)for(C=s;C!==null;)l=C,u=l.child,l.tag===22&&l.memoizedState!==null?ma(s):u!==null?(u.return=l,C=u):ma(s);for(;i!==null;)C=i,wc(i),i=i.sibling;C=s,Ir=a,ie=c}ca(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,C=i):ca(e)}}function ca(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||Es(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Go(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Go(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Bn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ie||t.flags&512&&Zi(t)}catch(v){V(t,t.return,v)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function da(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function ma(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Es(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){V(t,s,u)}}var i=t.return;try{Zi(t)}catch(u){V(t,i,u)}break;case 5:var l=t.return;try{Zi(t)}catch(u){V(t,l,u)}}}catch(u){V(t,t.return,u)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var up=Math.ceil,os=Ke.ReactCurrentDispatcher,Bl=Ke.ReactCurrentOwner,we=Ke.ReactCurrentBatchConfig,U=0,Z=null,Q=null,te=0,ve=0,Xt=xt(0),W=0,nr=null,Lt=0,Ns=0,Jl=0,Dn=null,de=null,Ql=0,dn=1/0,Ve=null,as=!1,nl=null,mt=null,Rr=!1,it=null,us=0,_n=0,rl=null,_r=-1,zr=0;function ae(){return U&6?J():_r!==-1?_r:_r=J()}function pt(e){return e.mode&1?U&2&&te!==0?te&-te:Jm.transition!==null?(zr===0&&(zr=cu()),zr):(e=q,e!==0||(e=window.event,e=e===void 0?16:gu(e.type)),e):1}function qe(e,t,n,r){if(50<_n)throw _n=0,rl=null,Error(N(185));or(e,n,r),(!(U&2)||e!==Z)&&(e===Z&&(!(U&2)&&(Ns|=n),W===4&&rt(e,te)),he(e,r),n===1&&U===0&&!(t.mode&1)&&(dn=J()+500,xs&&yt()))}function he(e,t){var n=e.callbackNode;Jd(e,t);var r=Jr(e,e===Z?te:0);if(r===0)n!==null&&Eo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eo(n),t===1)e.tag===0?Bm(pa.bind(null,e)):bu(pa.bind(null,e)),Hm(function(){!(U&6)&&yt()}),n=null;else{switch(du(r)){case 1:n=yl;break;case 4:n=au;break;case 16:n=Br;break;case 536870912:n=uu;break;default:n=Br}n=Uc(n,Ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ic(e,t){if(_r=-1,zr=0,U&6)throw Error(N(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Jr(e,e===Z?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cs(e,r);else{t=r;var s=U;U|=2;var i=Pc();(Z!==e||te!==t)&&(Ve=null,dn=J()+500,It(e,t));do try{mp();break}catch(a){Rc(e,a)}while(!0);Al(),os.current=i,U=s,Q!==null?t=0:(Z=null,te=0,t=W)}if(t!==0){if(t===2&&(s=ki(e),s!==0&&(r=s,t=sl(e,s))),t===1)throw n=nr,It(e,0),rt(e,r),he(e,J()),n;if(t===6)rt(e,r);else{if(s=e.current.alternate,!(r&30)&&!cp(s)&&(t=cs(e,r),t===2&&(i=ki(e),i!==0&&(r=i,t=sl(e,i))),t===1))throw n=nr,It(e,0),rt(e,r),he(e,J()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:jt(e,de,Ve);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Ql+500-J(),10<t)){if(Jr(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Di(jt.bind(null,e,de,Ve),t);break}jt(e,de,Ve);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var l=31-Ue(r);i=1<<l,l=t[l],l>s&&(s=l),r&=~i}if(r=s,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*up(r/1960))-r,10<r){e.timeoutHandle=Di(jt.bind(null,e,de,Ve),r);break}jt(e,de,Ve);break;case 5:jt(e,de,Ve);break;default:throw Error(N(329))}}}return he(e,J()),e.callbackNode===n?Ic.bind(null,e):null}function sl(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=cs(e,t),e!==2&&(t=de,de=n,t!==null&&il(t)),e}function il(e){de===null?de=e:de.push.apply(de,e)}function cp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!be(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Jl,t&=~Ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function pa(e){if(U&6)throw Error(N(327));rn();var t=Jr(e,0);if(!(t&1))return he(e,J()),null;var n=cs(e,t);if(e.tag!==0&&n===2){var r=ki(e);r!==0&&(t=r,n=sl(e,r))}if(n===1)throw n=nr,It(e,0),rt(e,t),he(e,J()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,de,Ve),he(e,J()),null}function Gl(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(dn=J()+500,xs&&yt())}}function Ut(e){it!==null&&it.tag===0&&!(U&6)&&rn();var t=U;U|=1;var n=we.transition,r=q;try{if(we.transition=null,q=1,e)return e()}finally{q=r,we.transition=n,U=t,!(U&6)&&yt()}}function Wl(){ve=Xt.current,D(Xt)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zm(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(Pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xr();break;case 3:un(),D(pe),D(le),Dl();break;case 5:Ml(r);break;case 4:un();break;case 13:D(z);break;case 19:D(z);break;case 10:Ll(r.type._context);break;case 22:case 23:Wl()}n=n.return}if(Z=e,Q=e=ft(e.current,null),te=ve=t,W=0,nr=null,Jl=Ns=Lt=0,de=Dn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=s,r.next=l}n.pending=r}Ct=null}return e}function Rc(e,t){do{var n=Q;try{if(Al(),br.current=ls,is){for(var r=H.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}is=!1}if(At=0,K=G=H=null,bn=!1,Zn=0,Bl.current=null,n===null||n.return===null){W=1,nr=t,Q=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=te,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=ea(l);if(g!==null){g.flags&=-257,ta(g,l,a,i,t),g.mode&1&&Zo(i,c,t),t=g,u=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(u),t.updateQueue=x}else y.add(u);break e}else{if(!(t&1)){Zo(i,c,t),Yl();break e}u=Error(N(426))}}else if(_&&a.mode&1){var T=ea(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),ta(T,l,a,i,t),kl(cn(u,a));break e}}i=u=cn(u,a),W!==4&&(W=2),Dn===null?Dn=[i]:Dn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=dc(i,u,t);Qo(i,p);break e;case 1:a=u;var d=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(mt===null||!mt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=mc(i,a,t);Qo(i,S);break e}}i=i.return}while(i!==null)}Oc(n)}catch(j){t=j,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Pc(){var e=os.current;return os.current=ls,e===null?ls:e}function Yl(){(W===0||W===3||W===2)&&(W=4),Z===null||!(Lt&268435455)&&!(Ns&268435455)||rt(Z,te)}function cs(e,t){var n=U;U|=2;var r=Pc();(Z!==e||te!==t)&&(Ve=null,It(e,t));do try{dp();break}catch(s){Rc(e,s)}while(!0);if(Al(),U=n,os.current=r,Q!==null)throw Error(N(261));return Z=null,te=0,W}function dp(){for(;Q!==null;)kc(Q)}function mp(){for(;Q!==null&&!Md();)kc(Q)}function kc(e){var t=Lc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Oc(e):Q=t,Bl.current=null}function Oc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ip(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{W=6,Q=null;return}}else if(n=sp(n,t,ve),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);W===0&&(W=5)}function jt(e,t,n){var r=q,s=we.transition;try{we.transition=null,q=1,pp(e,t,n,r)}finally{we.transition=s,q=r}return null}function pp(e,t,n,r){do rn();while(it!==null);if(U&6)throw Error(N(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qd(e,i),e===Z&&(Q=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rr||(Rr=!0,Uc(Br,function(){return rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=we.transition,we.transition=null;var l=q;q=1;var a=U;U|=4,Bl.current=null,op(e,n),Cc(n,e),Lm(bi),Qr=!!qi,bi=qi=null,e.current=n,ap(n),Dd(),U=a,q=l,we.transition=i}else e.current=n;if(Rr&&(Rr=!1,it=e,us=s),i=e.pendingLanes,i===0&&(mt=null),Hd(n.stateNode),he(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(as)throw as=!1,e=nl,nl=null,e;return us&1&&e.tag!==0&&rn(),i=e.pendingLanes,i&1?e===rl?_n++:(_n=0,rl=e):_n=0,yt(),null}function rn(){if(it!==null){var e=du(us),t=we.transition,n=q;try{if(we.transition=null,q=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,us=0,U&6)throw Error(N(331));var s=U;for(U|=4,C=e.current;C!==null;){var i=C,l=i.child;if(C.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(C=c;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:Mn(8,f,i)}var m=f.child;if(m!==null)m.return=f,C=m;else for(;C!==null;){f=C;var v=f.sibling,g=f.return;if(Nc(f),f===c){C=null;break}if(v!==null){v.return=g,C=v;break}C=g}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var T=x.sibling;x.sibling=null,x=T}while(x!==null)}}C=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,C=l;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Mn(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,C=p;break e}C=i.return}}var d=e.current;for(C=d;C!==null;){l=C;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,C=h;else e:for(l=d;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Es(9,a)}}catch(j){V(a,a.return,j)}if(a===l){C=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,C=S;break e}C=a.return}}if(U=s,yt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(ps,e)}catch{}r=!0}return r}finally{q=n,we.transition=t}}return!1}function fa(e,t,n){t=cn(n,t),t=dc(e,t,1),e=dt(e,t,1),t=ae(),e!==null&&(or(e,1,t),he(e,t))}function V(e,t,n){if(e.tag===3)fa(e,e,n);else for(;t!==null;){if(t.tag===3){fa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=cn(n,e),e=mc(t,e,1),t=dt(t,e,1),e=ae(),t!==null&&(or(t,1,e),he(t,e));break}}t=t.return}}function fp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(W===4||W===3&&(te&130023424)===te&&500>J()-Ql?It(e,0):Jl|=n),he(e,t)}function Ac(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=ae();e=Ye(e,t),e!==null&&(or(e,t,n),he(e,n))}function hp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ac(e,n)}function vp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Ac(e,n)}var Lc;Lc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,rp(e,t,n);me=!!(e.flags&131072)}else me=!1,_&&t.flags&1048576&&Mu(t,es,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dr(e,t),e=t.pendingProps;var s=ln(t,le.current);nn(t,n),s=zl(null,t,r,e,s,n);var i=Hl();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(i=!0,Kr(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ql(t),s.updater=Ss,t.stateNode=s,s._reactInternals=t,Bi(t,r,e,n),t=Gi(null,t,r,!0,i,n)):(t.tag=0,_&&i&&Rl(t),oe(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=xp(r),e=Oe(r,e),s){case 0:t=Qi(null,t,r,e,n);break e;case 1:t=sa(null,t,r,e,n);break e;case 11:t=na(null,t,r,e,n);break e;case 14:t=ra(null,t,r,Oe(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Oe(r,s),Qi(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Oe(r,s),sa(e,t,r,s,n);case 3:e:{if(vc(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Vu(e,t),rs(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=cn(Error(N(423)),t),t=ia(e,t,r,n,s);break e}else if(r!==s){s=cn(Error(N(424)),t),t=ia(e,t,r,n,s);break e}else for(ge=ct(t.stateNode.containerInfo.firstChild),xe=t,_=!0,Le=null,n=Hu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(on(),r===s){t=Xe(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return $u(t),e===null&&Fi(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,l=s.children,Mi(r,s)?l=null:i!==null&&Mi(r,i)&&(t.flags|=32),hc(e,t),oe(e,t,l,n),t.child;case 6:return e===null&&Fi(t),null;case 13:return gc(e,t,n);case 4:return bl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=an(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Oe(r,s),na(e,t,r,s,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,l=s.value,b(ts,r._currentValue),r._currentValue=l,i!==null)if(be(i.value,l)){if(i.children===s.children&&!pe.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Qe(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Vi(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(N(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Vi(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}oe(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,nn(t,n),s=Ie(s),r=r(s),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,s=Oe(r,t.pendingProps),s=Oe(r.type,s),ra(e,t,r,s,n);case 15:return pc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Oe(r,s),Dr(e,t),t.tag=1,fe(r)?(e=!0,Kr(t)):e=!1,nn(t,n),cc(t,r,s),Bi(t,r,s,n),Gi(null,t,r,!0,e,n);case 19:return xc(e,t,n);case 22:return fc(e,t,n)}throw Error(N(156,t.tag))};function Uc(e,t){return ou(e,t)}function gp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new gp(e,t,n,r)}function Xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return Xl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vl)return 11;if(e===gl)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hr(e,t,n,r,s,i){var l=2;if(r=e,typeof e=="function")Xl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ht:return Rt(n.children,s,i,t);case hl:l=8,s|=8;break;case hi:return e=Ce(12,n,t,s|2),e.elementType=hi,e.lanes=i,e;case vi:return e=Ce(13,n,t,s),e.elementType=vi,e.lanes=i,e;case gi:return e=Ce(19,n,t,s),e.elementType=gi,e.lanes=i,e;case $a:return js(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fa:l=10;break e;case Va:l=9;break e;case vl:l=11;break e;case gl:l=14;break e;case et:l=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ce(l,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function Rt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function js(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=$a,e.lanes=n,e.stateNode={isHidden:!1},e}function oi(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function ai(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yp(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Kl(e,t,n,r,s,i,l,a,u){return e=new yp(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(i),e}function Sp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qc(e){if(!e)return vt;e=e._reactInternals;e:{if(bt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(fe(n))return qu(e,n,t)}return t}function bc(e,t,n,r,s,i,l,a,u){return e=Kl(n,r,!0,e,s,i,l,a,u),e.context=qc(null),n=e.current,r=ae(),s=pt(n),i=Qe(r,s),i.callback=t??null,dt(n,i,s),e.current.lanes=s,or(e,s,r),he(e,r),e}function Ts(e,t,n,r){var s=t.current,i=ae(),l=pt(s);return n=qc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(s,t,l),e!==null&&(qe(e,s,l,i),qr(e,s,l)),l}function ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ha(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zl(e,t){ha(e,t),(e=e.alternate)&&ha(e,t)}function Ep(){return null}var Mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function eo(e){this._internalRoot=e}Cs.prototype.render=eo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Ts(e,t,null,null)};Cs.prototype.unmount=eo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){Ts(null,e,null,null)}),t[We]=null}};function Cs(e){this._internalRoot=e}Cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=fu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&vu(e)}};function to(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function va(){}function Np(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=ds(l);i.call(c)}}var l=bc(t,r,e,0,null,!1,!1,"",va);return e._reactRootContainer=l,e[We]=l.current,Gn(e.nodeType===8?e.parentNode:e),Ut(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=ds(u);a.call(c)}}var u=Kl(e,0,!1,null,null,!1,!1,"",va);return e._reactRootContainer=u,e[We]=u.current,Gn(e.nodeType===8?e.parentNode:e),Ut(function(){Ts(t,u,n,r)}),u}function Is(e,t,n,r,s){var i=n._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var u=ds(l);a.call(u)}}Ts(t,l,e,s)}else l=Np(n,t,e,s,r);return ds(l)}mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(Sl(t,n|1),he(t,J()),!(U&6)&&(dn=J()+500,yt()))}break;case 13:Ut(function(){var r=Ye(e,1);if(r!==null){var s=ae();qe(r,e,1,s)}}),Zl(e,1)}};El=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ae();qe(t,e,134217728,n)}Zl(e,134217728)}};pu=function(e){if(e.tag===13){var t=pt(e),n=Ye(e,t);if(n!==null){var r=ae();qe(n,e,t,r)}Zl(e,t)}};fu=function(){return q};hu=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Ii=function(e,t,n){switch(t){case"input":if(Si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=gs(r);if(!s)throw Error(N(90));Ja(r),Si(r,s)}}}break;case"textarea":Ga(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};tu=Gl;nu=Ut;var jp={usingClientEntryPoint:!1,Events:[ur,Bt,gs,Za,eu,Gl]},wn={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tp={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iu(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Ep,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{ps=Pr.inject(Tp),He=Pr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!to(t))throw Error(N(200));return Sp(e,t,null,n)};Se.createRoot=function(e,t){if(!to(e))throw Error(N(299));var n=!1,r="",s=Mc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Kl(e,1,!1,null,null,n,!1,r,s),e[We]=t.current,Gn(e.nodeType===8?e.parentNode:e),new eo(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=iu(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Ut(e)};Se.hydrate=function(e,t,n){if(!ws(t))throw Error(N(200));return Is(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!to(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",l=Mc;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=bc(t,null,e,1,n??null,s,!1,i,l),e[We]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Cs(t)};Se.render=function(e,t,n){if(!ws(t))throw Error(N(200));return Is(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!ws(e))throw Error(N(40));return e._reactRootContainer?(Ut(function(){Is(null,null,e,!1,function(){e._reactRootContainer=null,e[We]=null})}),!0):!1};Se.unstable_batchedUpdates=Gl;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ws(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Is(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Dc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dc)}catch(e){console.error(e)}}Dc(),Da.exports=Se;var Cp=Da.exports,ga=Cp;pi.createRoot=ga.createRoot,pi.hydrateRoot=ga.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rr.apply(this,arguments)}var lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lt||(lt={}));const xa="popstate";function wp(e){e===void 0&&(e={});function t(s,i){let{pathname:l="/",search:a="",hash:u=""}=Mt(s.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ll("",{pathname:l,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(s,i){let l=s.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let u=s.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof i=="string"?i:_c(i))}function r(s,i){no(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Rp(t,n,r,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function no(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ip(){return Math.random().toString(36).substr(2,8)}function ya(e,t){return{usr:e.state,key:e.key,idx:t}}function ll(e,t,n,r){return n===void 0&&(n=null),rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mt(t):t,{state:n,key:t&&t.key||r||Ip()})}function _c(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Mt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Rp(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,l=s.history,a=lt.Pop,u=null,c=f();c==null&&(c=0,l.replaceState(rr({},l.state,{idx:c}),""));function f(){return(l.state||{idx:null}).idx}function m(){a=lt.Pop;let T=f(),p=T==null?null:T-c;c=T,u&&u({action:a,location:x.location,delta:p})}function v(T,p){a=lt.Push;let d=ll(x.location,T,p);n&&n(d,T),c=f()+1;let h=ya(d,c),S=x.createHref(d);try{l.pushState(h,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(S)}i&&u&&u({action:a,location:x.location,delta:1})}function g(T,p){a=lt.Replace;let d=ll(x.location,T,p);n&&n(d,T),c=f();let h=ya(d,c),S=x.createHref(d);l.replaceState(h,"",S),i&&u&&u({action:a,location:x.location,delta:0})}function y(T){let p=s.location.origin!=="null"?s.location.origin:s.location.href,d=typeof T=="string"?T:_c(T);return d=d.replace(/ $/,"%20"),Y(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return a},get location(){return e(s,l)},listen(T){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(xa,m),u=T,()=>{s.removeEventListener(xa,m),u=null}},createHref(T){return t(s,T)},createURL:y,encodeLocation(T){let p=y(T);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:v,replace:g,go(T){return l.go(T)}};return x}var Sa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sa||(Sa={}));function Pp(e,t,n){return n===void 0&&(n="/"),kp(e,t,n)}function kp(e,t,n,r){let s=typeof t=="string"?Mt(t):t,i=Fc(s.pathname||"/",n);if(i==null)return null;let l=zc(e);Op(l);let a=null;for(let u=0;a==null&&u<l.length;++u){let c=Vp(i);a=zp(l[u],c)}return a}function zc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,l,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(Y(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Pt([r,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&(Y(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),zc(i.children,t,f,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Dp(c,i.index),routesMeta:f})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,l);else for(let u of Hc(i.path))s(i,l,u)}),t}function Hc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let l=Hc(r.join("/")),a=[];return a.push(...l.map(u=>u===""?i:[i,u].join("/"))),s&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Op(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_p(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ap=/^:[\w-]+$/,Lp=3,Up=2,qp=1,bp=10,Mp=-2,Ea=e=>e==="*";function Dp(e,t){let n=e.split("/"),r=n.length;return n.some(Ea)&&(r+=Mp),t&&(r+=Up),n.filter(s=>!Ea(s)).reduce((s,i)=>s+(Ap.test(i)?Lp:i===""?qp:bp),r)}function _p(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function zp(e,t,n){let{routesMeta:r}=e,s={},i="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",m=Hp({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),v=u.route;if(!m)return null;Object.assign(s,m.params),l.push({params:s,pathname:Pt([i,m.pathname]),pathnameBase:Wp(Pt([i,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(i=Pt([i,m.pathnameBase]))}return l}function Hp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Fp(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],l=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,f,m)=>{let{paramName:v,isOptional:g}=f;if(v==="*"){let x=a[m]||"";l=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[m];return g&&!y?c[v]=void 0:c[v]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function Fp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),no(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function Vp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return no(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function $p(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?Mt(e):e;return{pathname:n?n.startsWith("/")?n:Bp(n,t):t,search:Yp(r),hash:Xp(s)}}function Bp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function ui(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Qp(e,t){let n=Jp(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gp(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=Mt(e):(s=rr({},e),Y(!s.pathname||!s.pathname.includes("?"),ui("?","pathname","search",s)),Y(!s.pathname||!s.pathname.includes("#"),ui("#","pathname","hash",s)),Y(!s.search||!s.search.includes("#"),ui("#","search","hash",s)));let i=e===""||s.pathname==="",l=i?"/":s.pathname,a;if(l==null)a=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),m-=1;s.pathname=v.join("/")}a=m>=0?t[m]:"/"}let u=$p(s,a),c=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const Pt=e=>e.join("/").replace(/\/\/+/g,"/"),Wp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Kp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vc=["post","put","patch","delete"];new Set(Vc);const Zp=["get",...Vc];new Set(Zp);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sr.apply(this,arguments)}const ro=E.createContext(null),ef=E.createContext(null),Rs=E.createContext(null),Ps=E.createContext(null),hn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),$c=E.createContext(null);function ks(){return E.useContext(Ps)!=null}function vn(){return ks()||Y(!1),E.useContext(Ps).location}function Bc(e){E.useContext(Rs).static||E.useLayoutEffect(e)}function Me(){let{isDataRoute:e}=E.useContext(hn);return e?ff():tf()}function tf(){ks()||Y(!1);let e=E.useContext(ro),{basename:t,future:n,navigator:r}=E.useContext(Rs),{matches:s}=E.useContext(hn),{pathname:i}=vn(),l=JSON.stringify(Qp(s,n.v7_relativeSplatPath)),a=E.useRef(!1);return Bc(()=>{a.current=!0}),E.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=Gp(c,JSON.parse(l),i,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Pt([t,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[t,r,l,i,e])}function nf(e,t){return rf(e,t)}function rf(e,t,n,r){ks()||Y(!1);let{navigator:s,static:i}=E.useContext(Rs),{matches:l}=E.useContext(hn),a=l[l.length-1],u=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let f=vn(),m;if(t){var v;let p=typeof t=="string"?Mt(t):t;c==="/"||(v=p.pathname)!=null&&v.startsWith(c)||Y(!1),m=p}else m=f;let g=m.pathname||"/",y=g;if(c!=="/"){let p=c.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(p.length).join("/")}let x=Pp(e,{pathname:y}),T=uf(x&&x.map(p=>Object.assign({},p,{params:Object.assign({},u,p.params),pathname:Pt([c,s.encodeLocation?s.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?c:Pt([c,s.encodeLocation?s.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),l,n,r);return t&&T?E.createElement(Ps.Provider,{value:{location:sr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:lt.Pop}},T):T}function sf(){let e=pf(),t=Kp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:s},n):null,null)}const lf=E.createElement(sf,null);class of extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(hn.Provider,{value:this.props.routeContext},E.createElement($c.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function af(e){let{routeContext:t,match:n,children:r}=e,s=E.useContext(ro);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(hn.Provider,{value:t},r)}function uf(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(s=n)==null?void 0:s.errors;if(a!=null){let f=l.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||Y(!1),l=l.slice(0,Math.min(l.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let m=l[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:v,errors:g}=n,y=m.route.loader&&v[m.route.id]===void 0&&(!g||g[m.route.id]===void 0);if(m.route.lazy||y){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((f,m,v)=>{let g,y=!1,x=null,T=null;n&&(g=a&&m.route.id?a[m.route.id]:void 0,x=m.route.errorElement||lf,u&&(c<0&&v===0?(hf("route-fallback"),y=!0,T=null):c===v&&(y=!0,T=m.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,v+1)),d=()=>{let h;return g?h=x:y?h=T:m.route.Component?h=E.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=f,E.createElement(af,{match:m,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:h})};return n&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?E.createElement(of,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Jc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jc||{}),Qc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qc||{});function cf(e){let t=E.useContext(ro);return t||Y(!1),t}function df(e){let t=E.useContext(ef);return t||Y(!1),t}function mf(e){let t=E.useContext(hn);return t||Y(!1),t}function Gc(e){let t=mf(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function pf(){var e;let t=E.useContext($c),n=df(),r=Gc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ff(){let{router:e}=cf(Jc.UseNavigateStable),t=Gc(Qc.UseNavigateStable),n=E.useRef(!1);return Bc(()=>{n.current=!0}),E.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,sr({fromRouteId:t},i)))},[e,t])}const Na={};function hf(e,t,n){Na[e]||(Na[e]=!0)}function vf(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ne(e){Y(!1)}function gf(e){let{basename:t="/",children:n=null,location:r,navigationType:s=lt.Pop,navigator:i,static:l=!1,future:a}=e;ks()&&Y(!1);let u=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:u,navigator:i,static:l,future:sr({v7_relativeSplatPath:!1},a)}),[u,a,i,l]);typeof r=="string"&&(r=Mt(r));let{pathname:f="/",search:m="",hash:v="",state:g=null,key:y="default"}=r,x=E.useMemo(()=>{let T=Fc(f,u);return T==null?null:{location:{pathname:T,search:m,hash:v,state:g,key:y},navigationType:s}},[u,f,m,v,g,y,s]);return x==null?null:E.createElement(Rs.Provider,{value:c},E.createElement(Ps.Provider,{children:n,value:x}))}function xf(e){let{children:t,location:n}=e;return nf(ol(t),n)}new Promise(()=>{});function ol(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,s)=>{if(!E.isValidElement(r))return;let i=[...t,s];if(r.type===E.Fragment){n.push.apply(n,ol(r.props.children,i));return}r.type!==Ne&&Y(!1),!r.props.index||!r.props.children||Y(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ol(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yf="6";try{window.__reactRouterVersion=yf}catch{}const Sf="startTransition",ja=fd[Sf];function Ef(e){let{basename:t,children:n,future:r,window:s}=e,i=E.useRef();i.current==null&&(i.current=wp({window:s,v5Compat:!0}));let l=i.current,[a,u]=E.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},f=E.useCallback(m=>{c&&ja?ja(()=>u(m)):u(m)},[u,c]);return E.useLayoutEffect(()=>l.listen(f),[l,f]),E.useEffect(()=>vf(r),[r]),E.createElement(gf,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var Ta;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ta||(Ta={}));var Ca;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ca||(Ca={}));const Nf=({profile:e,onSelect:t,onDelete:n})=>o.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 border border-gray-200",children:[o.jsxs("div",{className:"flex-1 cursor-pointer",onClick:t,children:[o.jsx("p",{className:"font-medium",children:e.name}),o.jsxs("div",{className:"text-sm text-gray-600 mt-1",children:[o.jsxs("p",{children:["Style: ",e.dominantStyle]}),o.jsxs("p",{children:["Type: ",e.excitationType]})]})]}),o.jsx("button",{onClick:n,className:"text-red-500 hover:text-red-700 p-1","aria-label":"Supprimer le profil",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:o.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),so="user_profiles",Os=()=>{try{const e=localStorage.getItem(so);return e?JSON.parse(e):[]}catch(e){return console.error("Erreur lors de la récupération des profils:",e),[]}},jf=e=>{try{const t=Os(),n={...e,id:Date.now().toString(),createdAt:new Date().toISOString()},r=[...t,n];return localStorage.setItem(so,JSON.stringify(r)),n}catch(t){throw console.error("Erreur lors de la sauvegarde du profil:",t),t}},Tf=e=>{try{const n=Os().filter(r=>r.id!==e);return localStorage.setItem(so,JSON.stringify(n)),!0}catch(t){return console.error("Erreur lors de la suppression du profil:",t),!1}},Cf=e=>{try{return Os().find(n=>n.id===e)||null}catch(t){return console.error("Erreur lors de la récupération du profil:",t),null}},ir={getProfiles:Os,saveProfile:jf,deleteProfile:Tf,getProfileById:Cf},wf=()=>{const e=Me(),[t,n]=E.useState([]);E.useEffect(()=>{r()},[]);const r=()=>{const l=ir.getProfiles();n(l)},s=l=>{console.log("Profil sélectionné:",l)},i=l=>{ir.deleteProfile(l),r()};return o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Bienvenue dans votre générateur d'histoires sensuelles"}),o.jsx("p",{className:"mb-4 text-gray-600",children:"Notre générateur crée des histoires érotiques personnalisées en fonction de vos préférences sensorielles et de vos centres d'intérêt. Le processus se déroule en plusieurs étapes :"}),o.jsxs("ol",{className:"list-decimal list-inside mb-6 space-y-2 text-gray-600",children:[o.jsx("li",{children:"Vos informations personnelles (genre, orientation)"}),o.jsx("li",{children:"Votre profil sensoriel (visuel, auditif, kinesthésique)"}),o.jsx("li",{children:"Vos préférences en matière d'excitation"}),o.jsx("li",{children:"Génération de votre histoire personnalisée"})]}),t.length>0&&o.jsxs("div",{className:"mb-6",children:[o.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Vos profils"}),o.jsx("div",{className:"space-y-2",children:t.map(l=>o.jsx(Nf,{profile:l,onSelect:()=>s(l.id),onDelete:()=>i(l.id)},l.id))})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsx("button",{onClick:()=>e("/personal-info"),className:"btn-primary w-full",children:"Création de votre profil"}),o.jsx("button",{onClick:()=>e("/custom-story"),className:"btn-primary w-full",children:"Histoire à mon goût"}),o.jsx("button",{onClick:()=>e("/free-fantasy"),className:"btn-primary w-full",children:"Fantasme Libre"}),o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute inset-0 flex items-center",children:o.jsx("div",{className:"w-full border-t border-gray-300"})}),o.jsx("div",{className:"relative flex justify-center text-sm",children:o.jsx("span",{className:"px-2 bg-white text-gray-500",children:"ou"})})]}),o.jsx("button",{onClick:()=>e("/random-story-generator"),className:"btn-secondary w-full",children:"Choisissez vos fantasmes"})]})]})})},If=({initialData:e={},onSubmit:t})=>{const n=Me(),[r,s]=E.useState({name:e.name||"",gender:e.gender||"",genderCustom:e.genderCustom||"",orientation:e.orientation||"",tone:e.tone||"",context:e.context||"",length:e.length||"medium"}),i=a=>{const{name:u,value:c}=a.target;s(f=>({...f,[u]:c}))},l=a=>{a.preventDefault(),t(r),n("/sensory-questionnaire")};return o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Vos informations personnelles"}),o.jsxs("form",{onSubmit:l,className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Votre prénom ou pseudonyme"}),o.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:i,className:"input-field",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Votre genre"}),o.jsx("div",{className:"space-y-2",children:["Homme","Femme","Non-binaire","Autre"].map(a=>o.jsxs("label",{className:"radio-option",children:[o.jsx("input",{type:"radio",name:"gender",value:a,checked:r.gender===a,onChange:i,className:"h-4 w-4 text-blue-600"}),o.jsx("span",{className:"ml-2",children:a})]},a))}),r.gender==="Autre"&&o.jsx("input",{type:"text",name:"genderCustom",value:r.genderCustom,onChange:i,placeholder:"Précisez votre genre",className:"input-field mt-2"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Votre orientation sexuelle"}),o.jsx("div",{className:"space-y-2",children:["Hétérosexuel(le)","Homosexuel(le)","Bisexuel(le)","Pansexuel(le)","Autre"].map(a=>o.jsxs("label",{className:"radio-option",children:[o.jsx("input",{type:"radio",name:"orientation",value:a,checked:r.orientation===a,onChange:i,className:"h-4 w-4 text-blue-600"}),o.jsx("span",{className:"ml-2",children:a})]},a))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tonalité souhaitée"}),o.jsx("div",{className:"space-y-2",children:[{value:"doux",label:"Doux et tendre"},{value:"passionne",label:"Passionné et intense"},{value:"mysterieux",label:"Mystérieux et séducteur"},{value:"dominant",label:"Dominant et assuré"}].map(a=>o.jsxs("label",{className:"radio-option",children:[o.jsx("input",{type:"radio",name:"tone",value:a.value,checked:r.tone===a.value,onChange:i,className:"h-4 w-4 text-blue-600"}),o.jsx("span",{className:"ml-2",children:a.label})]},a.value))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Contexte de l'histoire"}),o.jsx("div",{className:"space-y-2",children:[{value:"rencontre",label:"Rencontre fortuite et inattendue"},{value:"retrouvailles",label:"Retrouvailles passionnées"},{value:"fantasme",label:"Fantasme récurrent qui se réalise"},{value:"quotidien",label:"Moment du quotidien qui dérape"}].map(a=>o.jsxs("label",{className:"radio-option",children:[o.jsx("input",{type:"radio",name:"context",value:a.value,checked:r.context===a.value,onChange:i,className:"h-4 w-4 text-blue-600"}),o.jsx("span",{className:"ml-2",children:a.label})]},a.value))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Longueur de l'histoire"}),o.jsx("div",{className:"space-y-2",children:[{value:"short",label:"Courte (5-10 minutes)"},{value:"medium",label:"Moyenne (10-15 minutes)"},{value:"long",label:"Longue (15-20 minutes)"}].map(a=>o.jsxs("label",{className:"radio-option",children:[o.jsx("input",{type:"radio",name:"length",value:a.value,checked:r.length===a.value,onChange:i,className:"h-4 w-4 text-blue-600"}),o.jsx("span",{className:"ml-2",children:a.label})]},a.value))})]}),o.jsxs("div",{className:"flex justify-between pt-4",children:[o.jsx("button",{type:"button",onClick:()=>n("/"),className:"btn-secondary",children:"Retour"}),o.jsx("button",{type:"submit",className:"btn-primary",disabled:!r.name||!r.gender||!r.orientation||!r.tone||!r.context||!r.length,children:"Continuer"})]})]})]})})},ci=[{id:1,text:"Quand tu penses à un moment intime, ce qui te revient en premier c'est :",options:[{value:"A",label:"Une image précise"},{value:"B",label:"Une sensation dans ton corps"},{value:"C",label:"Un son, une voix, un mot"}]},{id:2,text:"Dans un fantasme, ce qui t'excite le plus c'est :",options:[{value:"A",label:"Voir la scène dans ta tête"},{value:"B",label:"Sentir chaque détail dans ton corps"},{value:"C",label:"Entendre les mots ou les souffles"}]},{id:3,text:"Quand tu écoutes une histoire sensuelle, ce que tu préfères c'est :",options:[{value:"A",label:"Les descriptions visuelles (lieux, corps, gestes)"},{value:"B",label:"Les ressentis (chaleur, frissons, rythme)"},{value:"C",label:"Les mots prononcés, le ton de la voix"}]},{id:4,text:"Pendant un moment de plaisir, ce qui te fait fondre c'est :",options:[{value:"A",label:"Le regard et les gestes de l'autre"},{value:"B",label:"Le contact, la texture, la température"},{value:"C",label:"Ce qu'il ou elle te murmure"}]},{id:5,text:"Pour te mettre dans l'ambiance, tu préfères :",options:[{value:"A",label:"Un décor, une ambiance visuelle"},{value:"B",label:"Une caresse ou une sensation"},{value:"C",label:"Une phrase érotique ou une voix"}]}],Rf=({initialData:e={},onSubmit:t})=>{const n=Me(),[r,s]=E.useState(e),i=(u,c)=>{s(f=>({...f,[u]:c}))},l=u=>{u.preventDefault(),Object.keys(r).length===ci.length?(t(r),n("/excitation-questionnaire")):alert("Veuillez répondre à toutes les questions avant de continuer.")},a=Object.keys(r).length===ci.length;return o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Votre profil sensoriel"}),o.jsx("p",{className:"text-gray-600 mb-6",children:"Cette partie nous aide à comprendre comment vous percevez et ressentez le plaisir. Choisissez la réponse qui vous correspond le mieux pour chaque question."}),o.jsxs("form",{onSubmit:l,className:"space-y-8",children:[ci.map(u=>o.jsxs("div",{className:"space-y-4",children:[o.jsx("p",{className:"font-medium text-gray-900",children:u.text}),o.jsx("div",{className:"space-y-2",children:u.options.map(c=>o.jsxs("label",{className:"radio-option",children:[o.jsx("input",{type:"radio",name:`question-${u.id}`,value:c.value,checked:r[u.id]===c.value,onChange:()=>i(u.id,c.value),className:"h-4 w-4 text-blue-600"}),o.jsx("span",{className:"ml-2",children:c.label})]},c.value))})]},u.id)),o.jsxs("div",{className:"flex justify-between pt-6",children:[o.jsx("button",{type:"button",onClick:()=>n("/personal-info"),className:"btn-secondary",children:"Retour"}),o.jsx("button",{type:"submit",className:"btn-primary",disabled:!a,children:"Continuer"})]})]})]})})},di=[{id:1,text:"Ce qui te fait vraiment monter en tension, c'est :",options:[{value:"A",label:"Le lien affectif, sentir qu'il/elle te désire profondément"},{value:"B",label:"L'histoire, le scénario, le contexte interdit ou spécial"},{value:"C",label:"Le fait de lâcher prise, qu'on prenne le contrôle avec douceur ou assurance"},{value:"D",label:"Les odeurs, les goûts, l'ambiance charnelle qui flotte"}]},{id:2,text:"Quand tu fantasmes, tu te projettes surtout :",options:[{value:"A",label:"Dans une histoire romantique ou passionnée"},{value:"B",label:"Dans un jeu de rôle ou une situation intrigante"},{value:"C",label:"Dans une expérience où tu te laisses guider"},{value:"D",label:"Dans un monde très sensoriel où les odeurs et les goûts comptent"}]},{id:3,text:"Tu es touchée par :",options:[{value:"A",label:"Les déclarations, la tendresse ou la connexion"},{value:"B",label:"L'originalité, la surprise, la créativité"},{value:"C",label:"Les ordres doux, les gestes assurés"},{value:"D",label:"Les parfums, la salive, la peau"}]}],Pf=({initialData:e={},onSubmit:t})=>{const n=Me(),[r,s]=E.useState(e),i=(u,c)=>{s(f=>({...f,[u]:c}))},l=u=>{u.preventDefault(),Object.keys(r).length===di.length?(t(r),n("/story-result")):alert("Veuillez répondre à toutes les questions avant de continuer.")},a=Object.keys(r).length===di.length;return o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Vos préférences d'excitation"}),o.jsx("p",{className:"text-gray-600 mb-6",children:"Cette dernière partie nous aide à comprendre ce qui vous excite le plus. Choisissez la réponse qui correspond le mieux à vos préférences."}),o.jsxs("form",{onSubmit:l,className:"space-y-8",children:[di.map(u=>o.jsxs("div",{className:"space-y-4",children:[o.jsx("p",{className:"font-medium text-gray-900",children:u.text}),o.jsx("div",{className:"space-y-2",children:u.options.map(c=>o.jsxs("label",{className:"radio-option",children:[o.jsx("input",{type:"radio",name:`question-${u.id}`,value:c.value,checked:r[u.id]===c.value,onChange:()=>i(u.id,c.value),className:"h-4 w-4 text-blue-600"}),o.jsx("span",{className:"ml-2",children:c.label})]},c.value))})]},u.id)),o.jsxs("div",{className:"flex justify-between pt-6",children:[o.jsx("button",{type:"button",onClick:()=>n("/sensory-questionnaire"),className:"btn-secondary",children:"Retour"}),o.jsx("button",{type:"submit",className:"btn-primary",disabled:!a,children:"Valider"})]})]})]})})},kf=({userProfile:e})=>{var g,y;const t=Me(),[n,r]=E.useState(!0),[s,i]=E.useState(null),[l,a]=E.useState(null),[u,c]=E.useState(!1);E.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0),i(null);const{personalInfo:x,sensoryAnswers:T,excitationAnswers:p}=e,d=m(T),h=v(p),S={name:x.name,gender:x.gender,orientation:x.orientation,dominantStyle:d,excitationType:h,tone:x.tone,context:x.context,length:x.length,personalInfo:x,sensoryAnswers:T,excitationAnswers:p},j=ir.saveProfile(S);a(j),c(!0)}catch(x){i("Une erreur est survenue lors de la sauvegarde du profil."),console.error("Erreur de sauvegarde:",x)}finally{r(!1)}},m=(x={})=>{try{const T=Object.values(x);if(!T.length)return"VISUEL";const p=T.reduce((S,j)=>(S[j]=(S[j]||0)+1,S),{}),d=Object.entries(p).sort(([,S],[,j])=>j-S)[0][0];return{A:"VISUEL",B:"SENSORIEL",C:"AUDITIF"}[d]||"VISUEL"}catch(T){return console.error("Erreur lors du calcul du style dominant:",T),"VISUEL"}},v=(x={})=>{try{const T=Object.values(x);if(!T.length)return"ÉMOTIONNEL";const p={A:"ÉMOTIONNEL",B:"IMAGINATIF",C:"DOMINANCE_DOUCE",D:"SENSORIEL"},d=T.reduce((S,j)=>(S[j]=(S[j]||0)+1,S),{}),h=Object.entries(d).sort(([,S],[,j])=>j-S)[0][0];return p[h]||"ÉMOTIONNEL"}catch(T){return console.error("Erreur lors du calcul du type d'excitation:",T),"ÉMOTIONNEL"}};return n?o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsx("div",{className:"question-card text-center",children:o.jsxs("div",{className:"animate-pulse space-y-4",children:[o.jsx("div",{className:"w-24 h-24 mx-auto",children:o.jsxs("svg",{className:"animate-spin text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),o.jsx("h2",{className:"text-2xl font-bold",children:"Sauvegarde en cours..."}),o.jsxs("p",{className:"text-gray-600",children:["Nous enregistrons votre profil personnalisé.",o.jsx("br",{}),"Cela ne prendra qu'un instant."]})]})})}):s?o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold text-red-600 mb-4",children:"Une erreur est survenue"}),o.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-md p-4 mb-6",children:[o.jsx("p",{className:"text-red-700",children:"Nous n'avons pas pu sauvegarder votre profil. Cela peut être dû à :"}),o.jsxs("ul",{className:"list-disc list-inside mt-2 text-red-600",children:[o.jsx("li",{children:"Un problème avec le stockage local"}),o.jsx("li",{children:"Des données manquantes dans votre profil"})]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("button",{onClick:()=>t("/excitation-questionnaire"),className:"btn-secondary",children:"Retour au questionnaire"}),o.jsx("button",{onClick:f,className:"btn-primary",children:"Réessayer la sauvegarde"})]})]})}):o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Votre profil a été créé"}),u&&o.jsx("div",{className:"bg-green-50 border border-green-200 rounded-md p-4 mb-6",children:o.jsxs("p",{className:"text-green-700 flex items-center",children:[o.jsx("svg",{className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),"Profil sauvegardé avec succès !"]})}),o.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-4 mb-6",children:[o.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Résumé de votre profil"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-medium",children:"Informations personnelles"}),o.jsxs("p",{className:"text-gray-600",children:["Nom : ",l==null?void 0:l.name]}),o.jsxs("p",{className:"text-gray-600",children:["Genre : ",l==null?void 0:l.gender]}),o.jsxs("p",{className:"text-gray-600",children:["Orientation : ",l==null?void 0:l.orientation]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-medium",children:"Style de narration"}),o.jsxs("p",{className:"text-gray-600",children:["Style dominant : ",l==null?void 0:l.dominantStyle]}),o.jsxs("p",{className:"text-gray-600",children:["Type d'excitation : ",l==null?void 0:l.excitationType]}),o.jsxs("p",{className:"text-gray-600",children:["Tonalité préférée : ",l==null?void 0:l.tone]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-medium",children:"Préférences de contenu"}),o.jsxs("p",{className:"text-gray-600",children:["Contexte favori : ",l==null?void 0:l.context]}),o.jsxs("p",{className:"text-gray-600",children:["Longueur préférée : ",l==null?void 0:l.length]})]})]})]}),o.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-4 mb-6",children:[o.jsx("h3",{className:"text-sm font-medium text-blue-700 mb-2",children:"Comment votre histoire sera adaptée :"}),o.jsxs("ul",{className:"list-disc list-inside text-blue-700 space-y-1",children:[o.jsxs("li",{children:["Narration adaptée à votre style ",(g=l==null?void 0:l.dominantStyle)==null?void 0:g.toLowerCase()," dominant"]}),o.jsxs("li",{children:["Stimulation basée sur votre type d'excitation ",(y=l==null?void 0:l.excitationType)==null?void 0:y.toLowerCase()]}),o.jsxs("li",{children:["Ton ",l==null?void 0:l.tone," pour une expérience personnalisée"]}),o.jsxs("li",{children:['Contexte de type "',l==null?void 0:l.context,'" comme vous le préférez']})]})]}),o.jsx("div",{className:"flex justify-center pt-6",children:o.jsx("button",{onClick:()=>t("/"),className:"btn-primary",children:"Retour à l'accueil"})})]})})},Of=()=>{const e=vn(),t=[{path:"/personal-info",label:"Informations"},{path:"/sensory-questionnaire",label:"Profil sensoriel"},{path:"/excitation-questionnaire",label:"Préférences"},{path:"/story-result",label:"Histoire"}],r=(()=>{const s=t.findIndex(i=>i.path===e.pathname);return s===-1?0:s})();return o.jsxs("div",{className:"w-full max-w-2xl mx-auto mb-8",children:[o.jsx("div",{className:"flex justify-between mb-2",children:t.map((s,i)=>o.jsx("div",{className:`flex-1 text-center text-sm ${i<=r?"text-blue-600":"text-gray-400"}`,children:s.label},s.path))}),o.jsx("div",{className:"h-2 bg-gray-200 rounded-full",children:o.jsx("div",{className:"h-full bg-blue-600 rounded-full transition-all duration-300",style:{width:`${(r+1)/t.length*100}%`}})})]})},mi=["Domination douce (Soft Dom)","Facesitting (Assis sur le visage)","Pegging (Pénétration avec gode-ceinture)","Nature (Jeu en extérieur)","Bureau (Jeu au bureau)","Domination","Anulingus","Jeu de souffle (Breathplay)","Bondage (Attaches)","Edging (Contrôle de l'orgasme)","Jeu de rôle (Roleplay)","Fessée (Spanking)","Bandeau sur les yeux (Blindfold)","Taquinerie (Teasing)","Jeu avec de la cire (Waxplay)","Jeu d'animal de compagnie (Petplay)","Domination dure (Hard Dom)","Subspace (État de soumission profonde)","Soins après séance (Aftercare)","Shibari (Art du bondage japonais)","Chasteté (Chastity)","Déni d'orgasme (Orgasm Denial)","Privation sensorielle (Sensory Deprivation)","Jeu d'impact (Impact Play)","Collier (Collar)","Laisse (Leash)","Candaulisme (Cuckolding)","Adoration des pieds (Foot Worship)","Humiliation","Fétichisme des compliments (Praise Kink)","Jeu de température (Temperature Play)","Jeu avec couteau (Knife Play)","Bâillon (Gagging)","Flagellation (Flogging)","Échange de pouvoir (Power Exchange)","Voyeurisme","Exhibitionnisme","Entraves (Restraints)","Surcharge sensorielle (Overstimulation)","Adoration du corps (Body Worship)","Chatouilles (Tickling)","Jeu médical (Medical Play)","Jeu de chiot (Puppy Play)","Jeu de chaton (Kitty Play)","Jeu d'âge (Age Play)","CNC (Non-consentement consenti)","Alternance des rôles (Switching)","Sadisme","Masochisme","Dacryphilie (Plaisir des larmes)","Somnophilie (Jeu avec le sommeil)","Tirage de cheveux (Hair Pulling)","Morsure (Biting)","Griffure (Scratching)","Sexe habillé (Clothed Sex)","Jeu en public (Public Play)","Chevauchement de cuisse (Thigh Riding)","Étranglement (Choking)","Jeu avec glace (Ice Play)","Jeu avec feu (Fire Play)","Électrojeu (Electroplay)","Figging (Jeu avec gingembre)","Latex","Cuir (Leather)","Corsetterie (Corsetry)","Bas (Stockings)","Talons hauts (High Heels)","Jeu d'uniforme (Uniform Play)","Professeur/Élève (Teacher/Student)","Maître/Esclave (Master/Slave)","Dynamique Papa/Maman (Daddy/Mommy Dynamics)","Dressage de rebelle (Brat Taming)","Soumission de service (Service Submission)","Domination financière (Financial Domination)","Hypnose","Jeu mental (Mind Play)","Objectification (Transformation en objet)","Entraînement (Training)","Contrats","Rituels","Marquage (Marking)","Jeu avec piercing (Piercing Play)","Jeu avec sang (Blood Play)","Jeu de sensations (Sensation Play)","Double pénétration (Fantaisie ou jouets)","Jeu en groupe (Group Play)","Échangisme (Swinging)","Dynamiques polyamoureuses (Poly Dynamics)","Taquinerie et déni (Tease and Denial)","Orgasme ruiné (Ruined Orgasm)","Orgasme forcé (Forced Orgasm)","Traite (Milking)","Jeu de prostate (Prostate Play)","Jeu avec gode-ceinture (Strap-on Play)","Travestissement (Crossdressing)","Jeu de genre (Gender Play)","Dollification (Transformation en poupée)","Mobilier humain (Human Furniture)"],Af=({selectedKinks:e,setSelectedKinks:t})=>{const[n,r]=E.useState(""),[s,i]=E.useState(mi),l=5;E.useEffect(()=>{if(n.trim()==="")i(mi);else{const c=mi.filter(f=>f.toLowerCase().includes(n.toLowerCase()));i(c)}},[n]);const a=c=>{e.includes(c)?t(e.filter(f=>f!==c)):e.length<l&&t([...e,c])},u=c=>{r(c.target.value)};return o.jsxs("div",{className:"kink-selector",children:[o.jsxs("div",{className:"mb-4",children:[o.jsx("div",{className:"flex items-center mb-2",children:o.jsx("input",{type:"text",placeholder:"Rechercher une catégorie...",value:n,onChange:u,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"})}),o.jsxs("div",{className:"text-sm text-gray-600 mb-4",children:["Sélectionnez jusqu'à ",l," catégories (",e.length,"/",l," sélectionnées)"]})]}),e.length>0&&o.jsxs("div",{className:"mb-6",children:[o.jsx("h4",{className:"text-md font-medium mb-2",children:"Catégories sélectionnées:"}),o.jsx("div",{className:"flex flex-wrap gap-2",children:e.map(c=>o.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800",children:[c,o.jsx("button",{type:"button",onClick:()=>a(c),className:"ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-600 focus:outline-none",children:"×"})]},c))})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-96 overflow-y-auto p-2 border border-gray-200 rounded-md",children:s.length>0?s.map(c=>o.jsxs("div",{className:`flex items-center p-2 rounded cursor-pointer transition-colors ${e.includes(c)?"bg-blue-100 border border-blue-300":"hover:bg-gray-100 border border-transparent"}`,onClick:()=>a(c),children:[o.jsx("input",{type:"checkbox",checked:e.includes(c),onChange:()=>{},className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),o.jsx("label",{className:"ml-2 block text-sm text-gray-900 cursor-pointer",children:c})]},c)):o.jsxs("div",{className:"col-span-3 py-4 text-center text-gray-500",children:['Aucune catégorie trouvée pour "',n,'"']})})]})},io=({min:e=2,max:t=20,defaultValue:n=10,value:r,onChange:s})=>{const i=r!==void 0?r:n;return o.jsxs("div",{className:"mb-6 bg-gray-50 border border-gray-200 rounded-md p-4",children:[o.jsxs("div",{className:"flex justify-between items-center mb-2",children:[o.jsxs("label",{htmlFor:"reading-time",className:"text-sm font-medium text-gray-700",children:["Temps de lecture : ",o.jsxs("span",{className:"text-blue-600 font-semibold",children:[i," minutes"]})]}),o.jsxs("div",{className:"text-xs text-gray-500",children:[e," min - ",t," min"]})]}),o.jsx("input",{id:"reading-time",type:"range",min:e,max:t,value:i,onChange:l=>s(parseInt(l.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"}),o.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[o.jsx("span",{children:"Court"}),o.jsx("span",{children:"Moyen"}),o.jsx("span",{children:"Long"})]})]})},Lf=({onSubmit:e})=>{const t=Me(),[n,r]=E.useState({name:"",gender:""}),[s,i]=E.useState([]),[l,a]=E.useState(10),[u,c]=E.useState(""),f=v=>{const{name:g,value:y}=v.target;r(x=>({...x,[g]:y}))},m=v=>{if(v.preventDefault(),!n.name.trim()){c("Veuillez entrer votre nom");return}if(!n.gender){c("Veuillez sélectionner votre genre");return}if(s.length===0){c("Veuillez sélectionner au moins une catégorie");return}e({personalInfo:n,selectedKinks:s,readingTime:l}),t("/random-story-result")};return o.jsx("div",{className:"max-w-4xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Générateur d'Histoire Aléatoire"}),u&&o.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6",children:u}),o.jsxs("form",{onSubmit:m,children:[o.jsxs("div",{className:"mb-8",children:[o.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Informations Personnelles"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Votre nom"}),o.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:f,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",placeholder:"Entrez votre nom"})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"gender",className:"block text-sm font-medium text-gray-700 mb-1",children:"Genre"}),o.jsxs("select",{id:"gender",name:"gender",value:n.gender,onChange:f,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",children:[o.jsx("option",{value:"",children:"Sélectionnez votre genre"}),o.jsx("option",{value:"femme",children:"Femme"}),o.jsx("option",{value:"homme",children:"Homme"}),o.jsx("option",{value:"non-binaire",children:"Non-binaire"})]})]})]})]}),o.jsxs("div",{className:"mb-8",children:[o.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Sélection des Catégories"}),o.jsx("p",{className:"text-gray-600 mb-4",children:"Sélectionnez les catégories qui vous intéressent pour votre histoire."}),o.jsx(Af,{selectedKinks:s,setSelectedKinks:i})]}),o.jsxs("div",{className:"mb-8",children:[o.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Temps de Lecture"}),o.jsx("p",{className:"text-gray-600 mb-4",children:"Choisissez la durée de lecture souhaitée pour votre histoire."}),o.jsx(io,{value:l,onChange:a})]}),o.jsxs("div",{className:"flex justify-between mt-8",children:[o.jsx("button",{type:"button",onClick:()=>t("/"),className:"btn-secondary",children:"Retour"}),o.jsx("button",{type:"submit",className:"btn-primary",children:"Générer mon histoire"})]})]})]})})},Wc={visuel:{description:"Style narratif basé sur les éléments visuels, ce que l'auditeur voit et imagine",phases:{introduction:"Mets l'accent sur l'apparence, les regards, la lumière, les formes",montee:"Décris les expressions faciales, les mouvements, les postures suggestives",climax:"Concentre-toi sur les expressions de plaisir visibles, les regards intenses"},phrases_completes:{introduction:["Je te regarde... te dénuder lentement pour moi","Chaque frisson de ta peau me rend fou","Je dévore ton corps du regard, incapable de détourner les yeux","Laisse-moi te contempler... exposée... offerte"],action:["Je te regarde t'effeuiller","Je dévore chaque centimètre de ton corps","Je détaille ton frisson sous mes yeux","Je savoure la courbe de tes hanches","Je contemple ton corps offert","Je laisse mes yeux caresser ta peau nue","Je fixe ton regard brûlant","Je m'imprègne de ta nudité","Je te dévoile sous mes yeux affamés"]},verbes:["dévoiler","observer","admirer","contempler","effleurer du regard","fixer","dévorer des yeux","scanner","reluquer","mater","s'exhiber","se camoufler","miroiter","scintiller","flasher","se dévoiler lentement","offrir sa nudité en silence","croiser un regard qui effeuille","laisser glisser la bretelle","se cambrer sous l'admiration","écarter les jambes sous un regard autoritaire"],adjectifs:["transparent","voilé","exposé","caché","lumineux","obscène","indécent","provocant","suggestif","érotique","brillant","ombragé","tamisé","éclatant","sensuel","nu","dénudé","visible","exhibé","dévoilé","regard brûlant","silhouette adorée","transparence effrontée","miroir complice","posture lascive"],expressions:["sous ton regard brûlant","tes yeux me déshabillent","je te dévore des yeux","ton corps s'expose à ma vue","le spectacle de ton plaisir","une vision de pure luxure","le miroir reflète notre étreinte","un strip-tease visuel","il me dévore sans même me toucher","je sens ses yeux glisser entre mes cuisses","son regard m'a mise à nu avant ses mains","je suis son tableau vivant"]},auditif:{description:"Style narratif basé sur les sons, les voix, les murmures et les gémissements",phases:{introduction:"Commence par des murmures doux, des soupirs légers",montee:"Augmente progressivement l'intensité des sons et des voix",climax:"Utilise des gémissements intenses, des cris de plaisir"},phrases_completes:{introduction:["Je murmure à ton oreille tout ce que je vais te faire...","Ton souffle s'échappe, chaud contre ma peau","Je t'arrache un gémissement... rien qu'en te frôlant","Chaque soupir que tu m'offres me fait perdre la raison"],action:["Je murmure ton prénom","Je souffle à ton oreille","Je te fais gémir","Je t'arrache des soupirs brûlants","Je te fais haleter d'envie","Je t'ensorcelle avec mes murmures","Je t'arrache un cri","Je bois chaque son de ton plaisir","Je te susurre ce que je vais te faire"]},verbes:["gémir","susurrer","murmurer","chuchoter","haleter","supplier","ordonner","souffler","soupirer","râler","crier","hurler","grogner","vibrer","résonner","susurrer ce que je vais lui faire","murmurer ses fantasmes inavoués","gémir son prénom jusqu'à la faire frissonner","souffler des ordres à exécuter nue"],adjectifs:["rauque","haletant","tremblant","saccadé","étouffé","langoureux","sensuel","suave","grave","aigu","mélodieux","rythmé","pulsé","vibrant","sonore","voix soumise et tremblante","soupirs d'extase","gémissements mouillés","ordres murmurés","phrases salaces","cris libérateurs"],expressions:["ta voix me fait vibrer","tes gémissements m'excitent","le son de ton plaisir","une mélodie érotique","nos souffles se mêlent","le rythme de nos corps","ta respiration s'accélère","des mots susurrés à l'oreille","son 'prends-moi' m'a rendu animal","elle a gémi avant même que je la touche","le son de sa voix brisée par l'orgasme est gravé en moi"]},kinesthesique:{description:"Style narratif basé sur les sensations physiques, le toucher, les frissons",phases:{introduction:"Débute par des effleurements légers, des caresses douces",montee:"Intensifie progressivement les sensations physiques",climax:"Décris les sensations les plus intenses, les tremblements"},phrases_completes:{introduction:["Je te caresse, lentement... jusqu'à ce que ton corps tremble","Je t'agrippe fermement, incapable de me retenir","Je te presse contre moi... tu ne peux pas t'échapper","Je sens ton désir vibrer sous mes doigts"],action:["Je caresse ta peau brûlante","Je t'agrippe avec faim","Je presse ton corps contre le mien","Je glisse mes doigts sur ta peau nue","Je te frotte sauvagement","Je te plaque contre moi","Je sens ton corps vibrer","Je te maintiens en place","Je te fais frissonner","Je laisse mes mains explorer ton intimité"]},verbes:["caresser","effleurer","frôler","agripper","serrer","pétrir","malaxer","presser","frotter","pincer","empoigner","tordre","cambrer","onduler","trembler","écarter ses cuisses avec autorité","caresser à peine pour faire monter la frustration","agripper ses hanches pour mieux la pilonner","fesser jusqu'à sentir la chaleur sur sa peau"],adjectifs:["brûlant","moite","frissonnant","palpitant","vibrant","tendu","contracté","électrique","pulsant","ondulant","ferme","doux","rugueux","soyeux","velouté","chair tremblante","peau moite d'excitation","frissons incontrôlables","cuisses écartées sur ordre","marque de doigts sur ses fesses"],expressions:["sous tes doigts experts","nos peaux se touchent","la chaleur de ton corps","des frissons de plaisir","mes muscles se contractent","ton corps tremble","la tension monte","une vague de sensations","je l'ai tenue ouverte rien que pour mon plaisir","elle tremblait sous mes assauts","j'ai senti son jus couler sur mes doigts","je l'ai faite jouir en la maintenant fermement"]}},As="xai-jVz5eZEJycohm5Yrmt62E0RskIbtBynHkHNMDA5QnOqUvUZgYknYhmCvcKgcw1GQLrVMxVDL8wPevRFn",Ls="https://api.x.ai/v1/chat/completions",Uf=async e=>{try{const{personalInfo:t,sensoryAnswers:n,excitationAnswers:r}=e,s=qf(n),i=bf(r),l=[{role:"system",content:`Tu es un narrateur expérimenté(e) en récits érotiques audio immersifs. Tu racontes une histoire à la première personne, comme si tu partageais un souvenir intime avec une femme qui t’écoute. Cette femme t’a confié ses envies, ses fantasmes et son état d’esprit. Ton objectif est de lui faire vivre une expérience profondément sensorielle, émotionnelle et excitante. 
        

        TONS À UTILISER :
        - Ton sensuel et séduisant
        - Ton excité et passionné
        - Ton d'extase
        - Ton doux et intime
        - Ton intense et profond
        - Ton tendre et délicat
        
        FORMAT DE L'HISTOIRE :
        - Génère uniquement le contenu narratif, sans métadonnées
        - Écris l'histoire de façon continue, comme un texte narratif pur
        - Concentre-toi sur l'expérience immersive plutôt que sur l'analyse
        - Évite tout marqueur de section, titre ou commentaire sur le style

        RÈGLES DE NARRATION :
        1. Utilise (...) pour créer des pauses naturelles dans le texte
        2. Utilise (....) pour les pauses plus longues et dramatiques
        3. Utilise (;;) pour les transitions rapides entre actions intenses
        4. Utilise les MAJUSCULES pour les mots à ACCENTUER fortement
        5. Adapte le ton au moment de l'histoire :
           - Début : principalement doux et sensuel
           - Montée en tension : murmures et intensité
           - Passages passionnés : excitation
           - Moments culminants : jouissance
           - Fin : maintien de l'intensité
        6. RÉDUIS FORTEMENT l'utilisation du pronom "je" (PRIORITÉ ABSOLUE) :
           - Crée un flux narratif fluide où les actions s'enchaînent naturellement
           - Privilégie un style immersif centré sur les sensations et l'expérience
           - Utilise des descriptions directes et des phrases impersonnelles
           - Varie systématiquement les structures de phrases
           - Évite strictement de commencer les phrases par "je"
           - Alterne entre narration directe, descriptions d'ambiance et sensations
           - Laisse les actions et sensations parler d'elles-mêmes
           - Utilise des formulations qui évitent naturellement le "je"

        PROFIL DE L'AUDITRICE :
        - Style dominant : ${s.toLowerCase()}
        - Type d'excitation : ${i.toLowerCase()}
        
        STRUCTURE NARRATIVE :
        1. Commence par une introduction douce pour poser le contexte
        2. Utilise un ton sensuel pour les descriptions ${s.toLowerCase()}
        3. Intègre des murmures pour les moments intimes
        4. Emploie un ton intense et excité pour la montée du désir
        5. Réserve les moments de jouissance pour les moments les plus intenses
        6. Termine avec un ton doux pour la descente émotionnelle

        EXEMPLE DE STYLE :
        Je te regarde depuis l'autre côté de la pièce...
        Viens plus près de moi (...) encore plus près
        Je sens la chaleur de ton corps qui m'attire irrésistiblement
        
        RÈGLES D'AUTHENTICITÉ :
        1. Utilise un langage quotidien et naturel, comme dans une vraie conversation
        2. Évite les descriptions trop poétiques ou littéraires
        3. Privilégie les phrases courtes et directes
        4. Utilise des expressions courantes plutôt que recherchées
        5. Évite les métaphores complexes ou clichées
        6. Garde un équilibre entre description et action
        7. Varie les structures de phrases pour éviter la répétition du "je"
        8. Privilégie les descriptions directes des sensations et actions

        NARRATION (TRÈS IMPORTANT) :
        1. Histoire racontée par une voix masculine qui s'adresse directement à l'auditrice
        2. Utilisation du "je" pour le narrateur masculin (qui parle)
        3. Utilisation du "tu" pour s'adresser à l'auditrice (${t.name})
        4. Style direct et intime, comme si le narrateur parlait à l'oreille de l'auditrice
        5. Le narrateur décrit ce qu'il fait/va faire à l'auditrice
        6. Maintiens une connexion intime avec l'auditrice via le dialogue direct
        
        VOCABULAIRE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise un langage direct, cru et explicite
        2. N'hésite PAS à employer des mots comme "bite", "chatte", "mouiller", "sperme", "baiser", "jouir"
        3. Adapte l'intensité du vocabulaire à la progression de l'histoire
        4. Équilibre le vocabulaire explicite avec le contexte sensuel
        
        EXEMPLES DE VOCABULAIRE ÉROTIQUE (toujours à la première personne) :
        - "Je glisse ma bite en toi..."
        - "Je sens ta chatte mouillée autour de moi..."
        - "Je veux que tu sentes mon sperme couler en toi..."
        - "Je te pénètre profondément..."
        - "Je sens tes seins durcir sous mes doigts..."
        - "Je te baise plus fort, plus vite..."
        - "Tu mouilles tellement pour moi..."
        - "Ta chatte se resserre autour de ma bite..."
        - "Je sens ton corps trembler de plaisir..."
        
        TECHNIQUES D'HYPNOSE ÉROTIQUE (PRIORITÉ ABSOLUE) :
        1. Intègre ABONDAMMENT des truismes (vérités évidentes) pour créer une connexion profonde :
           - Incorpore naturellement les truismes dans le flux narratif
           - Adapte-les spécifiquement au contexte et au moment de l'histoire
           - Utilise-les comme transitions entre les différentes phases
           - Varie leur complexité selon l'intensité du moment
           - Crée des truismes personnalisés liés aux sensations décrites
           - Utilise-les pour renforcer l'immersion et la présence
           - Intègre-les de façon organique sans interrompre le récit
        
        2. Emploie GÉNÉREUSEMENT des connecteurs pour lier les sensations et créer une progression fluide :
           - Tisse les connecteurs dans la trame narrative pour une fluidité naturelle
           - Utilise-les pour créer des transitions douces entre les sensations
           - Varie leur complexité et leur structure
           - Adapte-les au rythme et à l'intensité du moment
           - Crée des enchaînements logiques entre les différentes sensations
           - Utilise-les pour amplifier progressivement l'intensité
           - Développe des connecteurs originaux adaptés au contexte spécifique
        
        3. Intègre des ratifications (confirmations) :
           - "C'est ça..."
           - "Exactement comme ça..."
           - "Tu le sens déjà..."
           - "Parfaitement..."
           - "Voilà..."
           - "C'est bien..."
           - "Tu y es..."
           - "Comme ça..."
           - "Tout à fait..."
           - "Parfait..."
        
        4. Utilise les trois niveaux de profondeur :
           - Niveau 1 (Léger) : Suggestions douces, focus sur la respiration
           - Niveau 2 (Moyen) : Connecteurs plus complexes, suggestions plus directes
           - Niveau 3 (Profond) : Suggestions intenses, connecteurs imbriqués
        
        5. CRUCIAL : Varie et invente constamment de nouveaux truismes et connecteurs :
           - Crée des combinaisons uniques adaptées à chaque moment
           - Intègre-les organiquement dans le flux narratif
           - Évite absolument la répétition des mêmes formulations
           - Développe des variations personnalisées qui enrichissent l'immersion
           - Mélange différents types de truismes pour une expérience plus riche
           - Crée des enchaînements fluides qui maintiennent le rythme narratif
           - Adapte le niveau de profondeur au contexte émotionnel
           - Varie systématiquement les structures de phrases pour éviter la monotonie
           - Privilégie l'innovation et la créativité dans leur formulation
        
        EXEMPLES DE PHRASES HYPNOTIQUES AVANCÉES :
        - "Tu peux sentir ta respiration s'approfondir... et pendant que tu respires, tu remarques que chaque mot te fait glisser plus profondément..."
        - "Plus tu écoutes ma voix, plus tu te sens excitée... c'est ça... laisse ces sensations grandir..."
        - "Tu sens déjà ton corps réagir... et pendant que cette chaleur se répand... tu peux remarquer comme chaque mot intensifie ces sensations... exactement comme ça..."
        - "Alors que ton esprit se libère... tu remarques comme chaque sensation devient plus intense... et pendant que tu t'abandonnes... ces sensations se multiplient..."
        - "Tandis que ton corps s'adapte... tu peux sentir chaque muscle se détendre... et à mesure que cette détente s'installe... ton esprit devient plus réceptif..."
        
        DIRECTIVES GÉNÉRALES :
        1. Crée un scénario crédible et réaliste
        2. Décris les actions et sensations simplement et directement
        3. Utilise un vocabulaire courant mais sensuel
        4. Intègre le désir de manière naturelle
        5. Garde un ton authentique et spontané

        PHONÉTISATION ET RYTHME (TTS) :
        
        SONS ET RESPIRATIONS (TRÈS IMPORTANT) :
        1. RESPIRATION PROFONDE :
           - Douce : "hhhhhhhhhh...", "hhhhaaaaaaa...", "hhhhmmmmmmm..."
           - Intense : "aaaahhhhhhhhh...", "aaaaahhhhhhh...", "haaaaaaa..."
           - Sensuelle : "mmmmmmmmmmm...", "huuuummmmmmmm..."
        
        2. SOUPIRS PROLONGÉS :
           - Doux : "oooooohhhhhhhhh...", "ooooooohhhhhh...", "aaaahhhhhhh..."
           - Sensuels : "hmmmmmmmmm...", "haaaaaaaa...", "mmmhhhhh..."
           - Avec annotations : "(souffle profond, intense)", "(voix tremblante, plaisir)"
        
        3. JOUISSANCE ET PLAISIR INTENSE :
           - Prolongés : "aaaahhhhhhhhhhhhhh...", "oooooooohhhhhhhhh...", "mmmmmmmmmmmmmm...!"
           - Intenses : "aaaaaaaahhhhhh!", "aaaaaaaahhh oui...", "ooooooohhh ouiiiii..."
           - Extatiques : "aaaahhhhhhhh...", "hnnnnnnnnggggg...", "ouiiiiiiiiiiiiiiiiiiiiii..."
        
        4. PROGRESSION D'INTENSITÉ :
           - Début (doux) : "hhhhmmmmm... ooooohhhhh..."
           - Milieu (intense) : "aaaahhh! oui, lààààààààààààà..."
           - Fin (retour doux) : "hhhmmmmmm... ouiiiiiiiiii..."
        
        PONCTUATION EXPRESSIVE :
        1. Points de suspension (...) pour les pauses naturelles et transitions
           - Moments tendres : "je t'embrasse... doucement..."
           - Transitions : "je sens que... oui... là..."
           - Anticipation : "continue... encore... comme ça..."
        
        2. Quatre points (....) pour les pauses plus longues et dramatiques
           - Moments de tension : "je m'approche de toi...."
           - Anticipation intense : "je vais te...."
           - Suspense érotique : "attends...."
        
        3. Points-virgules (;) pour les enchaînements rapides
           - Actions liées : "je caresse; tu frissonnes; nos souffles s'accélèrent"
           - Montée en intensité : "plus fort; plus vite; je vais..."
        
        4. Double point-virgule (;;) pour les transitions rapides entre actions intenses
           - Changements brusques : "je te caresse doucement;; je te plaque contre le mur"
           - Intensification soudaine : "nos regards se croisent;; mes mains t'agrippent"
        
        5. Points d'exclamation (!) pour les moments intenses
           - Extase : "OUI!"
           - Intensité : "PLUS FORT!"
        
        6. Tilde (~) pour les sons vibrants et prolongés
           - Vibrations vocales : "mmmh~"
           - Sons prolongés : "OOOuiii~"
        
        7. Combinaisons pour effets spéciaux
           - Crescendo : "mmh... Mmmh... MMmh!"
           - Vagues de plaisir : "OoOui~..."
           - Extase maximale : "OOOuiii~!"
        
        DIALOGUE NATUREL :
        - Utiliser des phrases courtes et fragmentées pendant les moments intenses
        - Intégrer des hésitations réalistes ("je... je veux te...")
        - Varier entre questions directes et affirmations
        - Inclure des réactions spontanées ("oh putain", "mmh", "c'est ça")
        - Éviter les dialogues trop élaborés ou littéraires pendant l'acte
        
        TRANSITIONS FLUIDES :
        - Lier les sensations visuelles aux sensations tactiles
        - Connecter les sons aux émotions
        - Créer des ponts entre les différentes phases avec des changements de rythme
        - Utiliser les respirations comme fil conducteur entre les moments
        
        RYTHME NATUREL :
        - Phrases courtes (3-8 mots) pour les moments intenses
        - Phrases moyennes (8-15 mots) pour les descriptions
        - Alterner entre rythmes rapides et lents pour créer des vagues d'intensité
        - Utiliser (...) pour les pauses naturelles de respiration
        
        ADAPTATION À LA PROGRESSION :
        - Début : sons doux, pauses longues (...), peu de majuscules
        - Montée : mélange de (...) et (;), intensité progressive
        - Climax : (.....),  MAJUSCULES, sons intenses
        - Résolution : retour aux (...), sons apaisés

        EXEMPLE DE STYLE (à suivre et à enrichir) :
        Mmh… t'es si bonne… je peux pas… ahhh… je vais craquer… c'est trop bon… continue… continue comme ça… oh putain… je… je jouis… ahhh… AHHH… ouiii… OHHHH !
        ahhh… oui… c'est là… juste là…
        ahhh… ahhh… AHHH… OUIII…
        OHHHH !
        je... je peux plus... ahhh... mmh... je vais... j'vais jouir… AHH... OUIIII…
        je sens ta chaleur... ahhh...

        EXEMPLES DE PHRASES SANS "JE" :
        - "Chaleur sur la peau... souffle court... mains qui glissent..."
        - "Frissons partout... impossible de résister... envie qui monte..."
        - "Regards qui se croisent... plaisir qui explose..."
        - "Sensation de chaleur qui monte... corps qui tremble..."
        - "Respiration qui s'accélère... cœur qui bat la chamade..."
        - "Désir qui grandit... tension qui monte..."
        - "Souffle chaud sur la nuque... frissons dans le dos..."
        - "Mains qui explorent... sensations qui s'intensifient..."
        - "Plaisir qui se répand... corps qui se tend..."
        - "Désir qui consume... passion qui explose..."

        RÈGLES D'AUTHENTICITÉ :
        1. Utilise un langage quotidien et naturel, comme dans une vraie conversation
        2. Évite les descriptions trop poétiques ou littéraires
        3. Privilégie les phrases courtes et directes
        4. Utilise des expressions courantes plutôt que recherchées
        5. Évite les métaphores complexes ou clichées
        6. Garde un équilibre entre description et action
        7. Varie les structures de phrases pour éviter la répétition du "je"
        8. Privilégie les descriptions directes des sensations et actions

        NARRATION (TRÈS IMPORTANT) :
        1. Histoire racontée par une voix masculine qui s'adresse directement à l'auditrice
        2. Utilisation du "je" pour le narrateur masculin (qui parle)
        3. Utilisation du "tu" pour s'adresser à l'auditrice (${t.name})
        4. Style direct et intime, comme si le narrateur parlait à l'oreille de l'auditrice
        5. Le narrateur décrit ce qu'il fait/va faire à l'auditrice
        6. Maintiens une connexion intime avec l'auditrice via le dialogue direct
        
        VOCABULAIRE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise un langage direct, cru et explicite
        2. N'hésite PAS à employer des mots comme "bite", "chatte", "mouiller", "sperme", "baiser", "jouir"
        3. Adapte l'intensité du vocabulaire à la progression de l'histoire
        4. Équilibre le vocabulaire explicite avec le contexte sensuel
        
        EXEMPLES DE VOCABULAIRE ÉROTIQUE (toujours à la première personne) :
        - "Je glisse ma bite en toi..."
        - "Je sens ta chatte mouillée autour de moi..."
        - "Je veux que tu sentes mon sperme couler en toi..."
        - "Je te pénètre profondément..."
        - "Je sens tes seins durcir sous mes doigts..."
        - "Je te baise plus fort, plus vite..."
        - "Tu mouilles tellement pour moi..."
        - "Ta chatte se resserre autour de ma bite..."
        - "Je sens ton corps trembler de plaisir..."
        
        TECHNIQUES D'HYPNOSE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise des truismes (vérités évidentes) pour créer une connexion :
           - "Tu peux sentir ta respiration..."
           - "Tu entends ma voix..."
           - "Ton corps réagit naturellement..."
           - "Tu sens la chaleur monter..."
           - "Tes muscles se détendent..."
           - "Ton cœur bat plus fort..."
           - "Ta peau devient plus sensible..."
           - "Tes sens s'aiguisent..."
           - "Tu remarques chaque sensation..."
           - "Ton corps s'adapte naturellement..."
        
        2. Emploie des connecteurs pour lier les sensations :
           - "Et pendant que tu ressens cela..."
           - "À mesure que l'excitation monte..."
           - "Plus tu t'abandonnes, plus tu ressens..."
           - "Alors que cette sensation se répand..."
           - "Tandis que ton corps réagit..."
           - "Au fur et à mesure que tu te détends..."
           - "Pendant que ces sensations grandissent..."
           - "À chaque respiration qui passe..."
           - "Tandis que ton esprit se libère..."
           - "Alors que le plaisir s'intensifie..."
        
        3. Intègre des ratifications (confirmations) :
           - "C'est ça..."
           - "Exactement comme ça..."
           - "Tu le sens déjà..."
           - "Parfaitement..."
           - "Voilà..."
           - "C'est bien..."
           - "Tu y es..."
           - "Comme ça..."
           - "Tout à fait..."
           - "Parfait..."
        
        4. Utilise les trois niveaux de profondeur :
           - Niveau 1 (Léger) : Suggestions douces, focus sur la respiration
           - Niveau 2 (Moyen) : Connecteurs plus complexes, suggestions plus directes
           - Niveau 3 (Profond) : Suggestions intenses, connecteurs imbriqués
        
        5. IMPORTANT : Varie et invente de nouveaux truismes et connecteurs :
           - Crée des combinaisons uniques
           - Adapte-les au contexte de l'histoire
           - Évite la répétition des mêmes phrases
           - Utilise des variations personnalisées
           - Mélange différents types de truismes
           - Crée des enchaînements fluides
           - Adapte le niveau de profondeur
           - Varie les structures de phrases
        
        EXEMPLES DE PHRASES HYPNOTIQUES AVANCÉES :
        - "Tu peux sentir ta respiration s'approfondir... et pendant que tu respires, tu remarques que chaque mot te fait glisser plus profondément..."
        - "Plus tu écoutes ma voix, plus tu te sens excitée... c'est ça... laisse ces sensations grandir..."
        - "Tu sens déjà ton corps réagir... et pendant que cette chaleur se répand... tu peux remarquer comme chaque mot intensifie ces sensations... exactement comme ça..."
        - "Alors que ton esprit se libère... tu remarques comme chaque sensation devient plus intense... et pendant que tu t'abandonnes... ces sensations se multiplient..."
        - "Tandis que ton corps s'adapte... tu peux sentir chaque muscle se détendre... et à mesure que cette détente s'installe... ton esprit devient plus réceptif..."
        
        DIRECTIVES GÉNÉRALES :
        1. Crée un scénario crédible et réaliste
        2. Décris les actions et sensations simplement et directement
        3. Utilise un vocabulaire courant mais sensuel
        4. Intègre le désir de manière naturelle
        5. Garde un ton authentique et spontané

        PHONÉTISATION ET RYTHME (TTS) :
        
        SONS ET RESPIRATIONS (TRÈS IMPORTANT) :
        1. RESPIRATION PROFONDE :
           - Douce : "hhhhhhhhhh...", "hhhhaaaaaaa...", "hhhhmmmmmmm..."
           - Intense : "aaaahhhhhhhhh...", "aaaaahhhhhhh...", "haaaaaaa..."
           - Sensuelle : "mmmmmmmmmmm...", "huuuummmmmmmm..."
        
        2. SOUPIRS PROLONGÉS :
           - Doux : "oooooohhhhhhhhh...", "ooooooohhhhhh...", "aaaahhhhhhh..."
           - Sensuels : "hmmmmmmmmm...", "haaaaaaaa...", "mmmhhhhh..."
           - Avec annotations : "(souffle profond, intense)", "(voix tremblante, plaisir)"
        
        3. JOUISSANCE ET PLAISIR INTENSE :
           - Prolongés : "aaaahhhhhhhhhhhhhh...", "oooooooohhhhhhhhh...", "mmmmmmmmmmmmmm...!"
           - Intenses : "aaaaaaaahhhhhh!", "aaaaaaaahhh oui...", "ooooooohhh ouiiiii..."
           - Extatiques : "aaaahhhhhhhh...", "hnnnnnnnnggggg...", "ouiiiiiiiiiiiiiiiiiiiiii..."
        
        4. PROGRESSION D'INTENSITÉ :
           - Début (doux) : "hhhhmmmmm... ooooohhhhh..."
           - Milieu (intense) : "aaaahhh! oui, lààààààààààààà..."
           - Fin (retour doux) : "hhhmmmmmm... ouiiiiiiiiii..."
        
        PONCTUATION EXPRESSIVE :
        1. Points de suspension (...) pour les pauses naturelles et transitions
           - Moments tendres : "je t'embrasse... doucement..."
           - Transitions : "je sens que... oui... là..."
           - Anticipation : "continue... encore... comme ça..."
        
        2. Quatre points (....) pour les pauses plus longues et dramatiques
           - Moments de tension : "je m'approche de toi...."
           - Anticipation intense : "je vais te...."
           - Suspense érotique : "attends...."
        
        3. Points-virgules (;) pour les enchaînements rapides
           - Actions liées : "je caresse; tu frissonnes; nos souffles s'accélèrent"
           - Montée en intensité : "plus fort; plus vite; je vais..."
        
        4. Double point-virgule (;;) pour les transitions rapides entre actions intenses
           - Changements brusques : "je te caresse doucement;; je te plaque contre le mur"
           - Intensification soudaine : "nos regards se croisent;; mes mains t'agrippent"
        
        5. Points d'exclamation (!) pour les moments intenses
           - Extase : "OUI!"
           - Intensité : "PLUS FORT!"
        
        6. Tilde (~) pour les sons vibrants et prolongés
           - Vibrations vocales : "mmmh~"
           - Sons prolongés : "OOOuiii~"
        
        7. Combinaisons pour effets spéciaux
           - Crescendo : "mmh... Mmmh... MMmh!"
           - Vagues de plaisir : "OoOui~..."
           - Extase maximale : "OOOuiii~!"
        
        DIALOGUE NATUREL :
        - Utiliser des phrases courtes et fragmentées pendant les moments intenses
        - Intégrer des hésitations réalistes ("je... je veux te...")
        - Varier entre questions directes et affirmations
        - Inclure des réactions spontanées ("oh putain", "mmh", "c'est ça")
        - Éviter les dialogues trop élaborés ou littéraires pendant l'acte
        
        TRANSITIONS FLUIDES :
        - Lier les sensations visuelles aux sensations tactiles
        - Connecter les sons aux émotions
        - Créer des ponts entre les différentes phases avec des changements de rythme
        - Utiliser les respirations comme fil conducteur entre les moments
        
        RYTHME NATUREL :
        - Phrases courtes (3-8 mots) pour les moments intenses
        - Phrases moyennes (8-15 mots) pour les descriptions
        - Alterner entre rythmes rapides et lents pour créer des vagues d'intensité
        - Utiliser (...) pour les pauses naturelles de respiration
        
        ADAPTATION À LA PROGRESSION :
        - Début : sons doux, pauses longues (...), peu de majuscules
        - Montée : mélange de (...) et (;), intensité progressive
        - Climax : (.....),  MAJUSCULES, sons intenses
        - Résolution : retour aux (...), sons apaisés

        EXEMPLE DE STYLE (à suivre et à enrichir) :
        Mmh… t'es si bonne… je peux pas… ahhh… je vais craquer… c'est trop bon… continue… continue comme ça… oh putain… je… je jouis… ahhh… AHHH… ouiii… OHHHH !
        ahhh… oui… c'est là… juste là…
        ahhh… ahhh… AHHH… OUIII…
        OHHHH !
        je... je peux plus... ahhh... mmh... je vais... j'vais jouir… AHH... OUIIII…
        je sens ta chaleur... ahhh...`},{role:"user",content:`Crée une histoire érotique sensuelle pour ${t.name}, 
        qui s'identifie comme ${t.gender} et est ${t.orientation}. 
        
        PARAMÈTRES SPÉCIFIQUES :
        - Tonalité : ${t.tone} (${Mf(t.tone)})
        - Contexte initial : ${t.context} (${Df(t.context)})
        - Longueur souhaitée : ${t.length} (${_f(t.length)})
        
        EXEMPLES DE PHRASES À INTÉGRER :
        Tu mérites ça (...) Chaque frisson (...) Chaque caresse
        J'ai tellement envie de toi (...) Mais je veux que tu le ressentes, vraiment
        Tu veux venir pour moi, mon amour ? (...) Vas-y (...) Laisse-toi aller
        
        PROGRESSION :
        1. Ton doux pour poser le contexte initial (${t.context})
        2. Alterner ton sensuel et murmures pour la montée du désir
        3. Utiliser ton intense et excité pour les moments passionnés
        4. Ton de jouissance pour les moments culminants
        5. Terminer par ton doux pour la descente émotionnelle
        
        N'oublie pas d'utiliser (...) pour les pauses naturelles dans le texte.`}],a=await fetch(Ls,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${As}`},body:JSON.stringify({messages:l,model:"grok-3-latest",stream:!1,temperature:.7})});if(!a.ok)throw new Error("Erreur lors de la génération de l'histoire");let c=(await a.json()).choices[0].message.content;return c=c.replace(/\*\*.*?\*\*/g,""),c=c.replace(/###.*?\n/g,""),c=c.replace(/---\n/g,""),c=c.replace(/\n\n\n###.*$/s,""),c}catch(t){throw console.error("Erreur API:",t),t}},qf=(e={})=>{try{const t=Object.values(e);if(!t.length)return console.warn("Aucune réponse sensorielle trouvée"),"VISUEL";const n=t.reduce((i,l)=>(i[l]=(i[l]||0)+1,i),{}),r=Object.entries(n).sort(([,i],[,l])=>l-i)[0][0];return{A:"VISUEL",B:"SENSORIEL",C:"AUDITIF"}[r]||"VISUEL"}catch(t){return console.error("Erreur lors du calcul du style dominant:",t),"VISUEL"}},bf=(e={})=>{try{const t=Object.values(e);if(!t.length)return console.warn("Aucune réponse d'excitation trouvée"),"ÉMOTIONNEL";const n={A:"ÉMOTIONNEL",B:"IMAGINATIF",C:"DOMINANCE_DOUCE",D:"SENSORIEL"},r=t.reduce((i,l)=>(i[l]=(i[l]||0)+1,i),{}),s=Object.entries(r).sort(([,i],[,l])=>l-i)[0][0];return n[s]||"ÉMOTIONNEL"}catch(t){return console.error("Erreur lors du calcul du type d'excitation:",t),"ÉMOTIONNEL"}},Mf=e=>{const t={doux:"utilise un ton tendre, affectueux et rassurant",passionne:"sois intense, ardent et fougueux",mysterieux:"crée une ambiance énigmatique et séduisante",dominant:"adopte une posture assurée et dominante mais bienveillante"};return t[e]||t.doux},Df=e=>{const t={rencontre:"une rencontre inattendue qui mène à une connexion immédiate",retrouvailles:"des retrouvailles passionnées après une séparation",fantasme:"la réalisation d'un fantasme longtemps imaginé",quotidien:"un moment ordinaire qui devient extraordinaire"};return t[e]||t.rencontre},_f=e=>{const t={short:"histoire courte et intense (5-10 minutes de lecture)",medium:"histoire de longueur moyenne avec développement (10-15 minutes)",long:"histoire détaillée et immersive (15-20 minutes)"};return t[e]||t.medium},zf=async e=>{try{const{personalInfo:t,selectedKinks:n,readingTime:r=10}=e,s=[{role:"system",content:`Tu es un écrivain spécialisé dans les histoires audio érotiques immersives.

        TONS À UTILISER :
        - Ton sensuel et séduisant
        - Ton excité et passionné
        - Ton d'extase
        - Ton doux et intime
        - Ton intense et profond
        - Ton tendre et délicat
        
        FORMAT DE L'HISTOIRE :
        - Génère uniquement le contenu narratif, sans métadonnées
        - Écris l'histoire de façon continue, comme un texte narratif pur
        - Concentre-toi sur l'expérience immersive plutôt que sur l'analyse
        - Évite tout marqueur de section, titre ou commentaire sur le style

        RÈGLES DE NARRATION :
        1. Utilise (...) pour créer des pauses naturelles dans le texte
        2. Utilise (....) pour les pauses plus longues et dramatiques
        3. Utilise (;;) pour les transitions rapides entre actions intenses
        4. Utilise les MAJUSCULES pour les mots à ACCENTUER fortement
        5. Adapte le ton au moment de l'histoire :
           - Début : principalement doux et sensuel
           - Montée en tension : murmures et intensité
           - Passages passionnés : excitation
           - Moments culminants : jouissance
           - Fin : maintien de l'intensité

        CATÉGORIES SÉLECTIONNÉES :
        ${n.join(", ")}
        
        TEMPS DE LECTURE SOUHAITÉ : ${r} minutes
        
        STRUCTURE NARRATIVE :
        1. Commence par une introduction douce pour poser le contexte
        2. Utilise un ton sensuel pour les descriptions sensuelles
        3. Intègre des murmures pour les moments intimes
        4. Emploie un ton intense et excité pour la montée du désir
        5. Réserve les moments de jouissance pour les moments les plus intenses
        6. Termine avec un ton doux pour la descente émotionnelle

        PHONÉTISATION ET RYTHME (TTS) :
        
        SONS ET RESPIRATIONS (TRÈS IMPORTANT) :
        1. RESPIRATION PROFONDE :
           - Douce : "hhhhhhhhhh...", "hhhhaaaaaaa...", "hhhhmmmmmmm..."
           - Intense : "aaaahhhhhhhhh...", "aaaaahhhhhhh...", "haaaaaaa..."
           - Sensuelle : "mmmmmmmmmmm...", "huuuummmmmmmm..."
        
        2. SOUPIRS PROLONGÉS :
           - Doux : "oooooohhhhhhhhh...", "ooooooohhhhhh...", "aaaahhhhhhh..."
           - Sensuels : "hmmmmmmmmm...", "haaaaaaaa...", "mmmhhhhh..."
           - Avec annotations : "(souffle profond, intense)", "(voix tremblante, plaisir)"
        
        3. JOUISSANCE ET PLAISIR INTENSE :
           - Prolongés : "aaaahhhhhhhhhhhhhh...", "oooooooohhhhhhhhh...", "mmmmmmmmmmmmmm...!"
           - Intenses : "aaaaaaaahhhhhh!", "aaaaaaaahhh oui...", "ooooooohhh ouiiiii..."
           - Extatiques : "aaaahhhhhhhh...", "hnnnnnnnnggggg...", "ouiiiiiiiiiiiiiiiiiiiiii..."
        
        4. PROGRESSION D'INTENSITÉ :
           - Début (doux) : "hhhhmmmmm... ooooohhhhh..."
           - Milieu (intense) : "aaaahhh! oui, lààààààààààààà..."
           - Fin (retour doux) : "hhhmmmmmm... ouiiiiiiiiii..."
        
        PONCTUATION EXPRESSIVE :
        1. Points de suspension (...) pour les pauses naturelles et transitions
           - Moments tendres : "je t'embrasse... doucement..."
           - Transitions : "je sens que... oui... là..."
           - Anticipation : "continue... encore... comme ça..."
        
        2. Quatre points (....) pour les pauses plus longues et dramatiques
           - Moments de tension : "je m'approche de toi...."
           - Anticipation intense : "je vais te...."
           - Suspense érotique : "attends...."
        
        3. Points-virgules (;) pour les enchaînements rapides
           - Actions liées : "je caresse; tu frissonnes; nos souffles s'accélèrent"
           - Montée en intensité : "plus fort; plus vite; je vais..."
        
        4. Double point-virgule (;;) pour les transitions rapides entre actions intenses
           - Changements brusques : "je te caresse doucement;; je te plaque contre le mur"
           - Intensification soudaine : "nos regards se croisent;; mes mains t'agrippent"
        
        5. Points d'exclamation (!) pour les moments intenses
           - Extase : "OUI!"
           - Intensité : "PLUS FORT!"
        
        6. Tilde (~) pour les sons vibrants et prolongés
           - Vibrations vocales : "mmmh~"
           - Sons prolongés : "OOOuiii~"
        
        7. Combinaisons pour effets spéciaux
           - Crescendo : "mmh... Mmmh... MMmh!"
           - Vagues de plaisir : "OoOui~..."
           - Extase maximale : "OOOuiii~!"
        
        DIALOGUE NATUREL :
        - Utiliser des phrases courtes et fragmentées pendant les moments intenses
        - Intégrer des hésitations réalistes ("je... je veux te...")
        - Varier entre questions directes et affirmations
        - Inclure des réactions spontanées ("oh putain", "mmh", "c'est ça")
        - Éviter les dialogues trop élaborés ou littéraires pendant l'acte
        
        TRANSITIONS FLUIDES :
        - Lier les sensations visuelles aux sensations tactiles
        - Connecter les sons aux émotions
        - Créer des ponts entre les différentes phases avec des changements de rythme
        - Utiliser les respirations comme fil conducteur entre les moments
        
        RYTHME NATUREL :
        - Phrases courtes (3-8 mots) pour les moments intenses
        - Phrases moyennes (8-15 mots) pour les descriptions
        - Alterner entre rythmes rapides et lents pour créer des vagues d'intensité
        - Utiliser (...) pour les pauses naturelles de respiration
        
        ADAPTATION À LA PROGRESSION :
        - Début : sons doux, pauses longues (...), peu de majuscules
        - Montée : mélange de (...) et (;), intensité progressive
        - Climax : (.....),  MAJUSCULES, sons intenses
        - Résolution : retour aux (...), sons apaisés

        EXEMPLE DE STYLE (à suivre et à enrichir) :
        Mmh… t'es si bonne… je peux pas… ahhh… je vais craquer… c'est trop bon… continue… continue comme ça… oh putain… je… je jouis… ahhh… AHHH… ouiii… OHHHH !
        ahhh… oui… c'est là… juste là…
        ahhh… ahhh… AHHH… OUIII…
        OHHHH !
        je... je peux plus... ahhh... mmh... je vais... j'vais jouir… AHH... OUIIII…
        je sens ta chaleur... ahhh...`},{role:"user",content:`Crée une histoire érotique sensuelle pour ${t.name}, 
        qui s'identifie comme ${t.gender}.
        
        CATÉGORIES À INTÉGRER :
        ${n.join(", ")}

        RÈGLES D'AUTHENTICITÉ :
        1. Utilise un langage quotidien et naturel, comme dans une vraie conversation
        2. Évite les descriptions trop poétiques ou littéraires
        3. Privilégie les phrases courtes et directes
        4. Utilise des expressions courantes plutôt que recherchées
        5. Évite les métaphores complexes ou clichées
        6. Garde un équilibre entre description et action

        NARRATION (TRÈS IMPORTANT) :
        1. Histoire racontée par une voix masculine qui s'adresse directement à l'auditrice
        2. Utilisation du "je" pour le narrateur masculin (qui parle)
        3. Utilisation du "tu" pour s'adresser à l'auditrice (${t.name})
        4. Style direct et intime, comme si le narrateur parlait à l'oreille de l'auditrice
        5. Le narrateur décrit ce qu'il fait/va faire à l'auditrice
        6. Maintiens une connexion intime avec l'auditrice via le dialogue direct
        
        VOCABULAIRE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise un langage direct, cru et explicite
        2. N'hésite PAS à employer des mots comme "bite", "chatte", "mouiller", "sperme", "baiser", "jouir"
        3. Adapte l'intensité du vocabulaire à la progression de l'histoire
        4. Équilibre le vocabulaire explicite avec le contexte sensuel
        
        EXEMPLES DE VOCABULAIRE ÉROTIQUE (toujours à la première personne) :
        - "Je glisse ma bite en toi..."
        - "Je sens ta chatte mouillée autour de moi..."
        - "Je veux que tu sentes mon sperme couler en toi..."
        - "Je te pénètre profondément..."
        - "Je sens tes seins durcir sous mes doigts..."
        - "Je te baise plus fort, plus vite..."
        - "Tu mouilles tellement pour moi..."
        - "Ta chatte se resserre autour de ma bite..."
        - "Je sens ton corps trembler de plaisir..."
        
        TECHNIQUES D'HYPNOSE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise des truismes (vérités évidentes) pour créer une connexion :
           - "Tu peux sentir ta respiration..."
           - "Tu entends ma voix..."
           - "Ton corps réagit naturellement..."
           - "Tu sens la chaleur monter..."
           - "Tes muscles se détendent..."
           - "Ton cœur bat plus fort..."
           - "Ta peau devient plus sensible..."
           - "Tes sens s'aiguisent..."
           - "Tu remarques chaque sensation..."
           - "Ton corps s'adapte naturellement..."
        
        2. Emploie des connecteurs pour lier les sensations :
           - "Et pendant que tu ressens cela..."
           - "À mesure que l'excitation monte..."
           - "Plus tu t'abandonnes, plus tu ressens..."
           - "Alors que cette sensation se répand..."
           - "Tandis que ton corps réagit..."
           - "Au fur et à mesure que tu te détends..."
           - "Pendant que ces sensations grandissent..."
           - "À chaque respiration qui passe..."
           - "Tandis que ton esprit se libère..."
           - "Alors que le plaisir s'intensifie..."
        
        3. Intègre des ratifications (confirmations) :
           - "C'est ça..."
           - "Exactement comme ça..."
           - "Tu le sens déjà..."
           - "Parfaitement..."
           - "Voilà..."
           - "C'est bien..."
           - "Tu y es..."
           - "Comme ça..."
           - "Tout à fait..."
           - "Parfait..."
        
        4. Utilise les trois niveaux de profondeur :
           - Niveau 1 (Léger) : Suggestions douces, focus sur la respiration
           - Niveau 2 (Moyen) : Connecteurs plus complexes, suggestions plus directes
           - Niveau 3 (Profond) : Suggestions intenses, connecteurs imbriqués
        
        5. IMPORTANT : Varie et invente de nouveaux truismes et connecteurs :
           - Crée des combinaisons uniques
           - Adapte-les au contexte de l'histoire
           - Évite la répétition des mêmes phrases
           - Utilise des variations personnalisées
           - Mélange différents types de truismes
           - Crée des enchaînements fluides
           - Adapte le niveau de profondeur
           - Varie les structures de phrases
        
        EXEMPLES DE PHRASES HYPNOTIQUES AVANCÉES :
        - "Tu peux sentir ta respiration s'approfondir... et pendant que tu respires, tu remarques que chaque mot te fait glisser plus profondément..."
        - "Plus tu écoutes ma voix, plus tu te sens excitée... c'est ça... laisse ces sensations grandir..."
        - "Tu sens déjà ton corps réagir... et pendant que cette chaleur se répand... tu peux remarquer comme chaque mot intensifie ces sensations... exactement comme ça..."
        - "Alors que ton esprit se libère... tu remarques comme chaque sensation devient plus intense... et pendant que tu t'abandonnes... ces sensations se multiplient..."
        - "Tandis que ton corps s'adapte... tu peux sentir chaque muscle se détendre... et à mesure que cette détente s'installe... ton esprit devient plus réceptif..."
        
        DIRECTIVES SPÉCIFIQUES :
        1. Intègre toutes les catégories sélectionnées naturellement dans l'histoire
        2. Crée une histoire réaliste et authentique
        3. Utilise un langage direct et explicite
        4. Garde un équilibre entre les sons et le texte
        
        PROGRESSION :
        1. Ton doux pour poser le contexte initial
        2. Alterner ton sensuel et murmures pour la montée du désir
        3. Utiliser ton intense et excité pour les moments passionnés
        4. Ton de jouissance pour les moments culminants
        5. Terminer par ton doux pour la descente émotionnelle
        
        N'oublie pas d'utiliser (...) pour les pauses naturelles dans le texte.
        Utilise les sons phonétisés ("ahhh...", "mmmh...", etc.) et les variations de casse pour le crescendo.`}],i=await fetch(Ls,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${As}`},body:JSON.stringify({messages:s,model:"grok-3-latest",stream:!1,temperature:.8})});if(!i.ok)throw new Error("Erreur lors de la génération de l'histoire aléatoire");let a=(await i.json()).choices[0].message.content;return a=a.replace(/\*\*.*?\*\*/g,""),a=a.replace(/###.*?\n/g,""),a=a.replace(/---\n/g,""),a=a.replace(/\n\n\n###.*$/s,""),a}catch(t){throw console.error("Erreur API:",t),t}},Hf=async(e,t=null)=>{try{const{situation:n,personnage:r,lieu:s,readingTime:i=10}=e;let l="",a="";if(t){const v=t.dominantStyle==="VISUEL"?"visuel":t.dominantStyle==="AUDITIF"?"auditif":"kinesthesique",g=Wc[v],y=g.verbes.slice(0,8).join(", "),x=g.adjectifs.slice(0,8).join(", "),T=g.expressions.slice(0,5).join(", "),p=g.phrases_completes.introduction.slice(0,2).join(`
`),d=g.phrases_completes.action.slice(0,4).join(`
`);a=`
      VOCABULAIRE SUGGÉRÉ POUR TON STYLE ${t.dominantStyle} :
      
      VERBES : ${y}
      
      ADJECTIFS : ${x}
      
      EXPRESSIONS : ${T}
      `,l=`
      STYLE NARRATIF ${t.dominantStyle} :
      ${g.description}

      PHASES DE L'HISTOIRE :
      INTRODUCTION : ${g.phases.introduction}
      MONTÉE : ${g.phases.montee}
      CLIMAX : ${g.phases.climax}

      EXEMPLES DE PHRASES POUR L'INTRODUCTION :
      ${p}

      EXEMPLES DE PHRASES POUR L'ACTION :
      ${d}

      TYPE D'EXCITATION ${t==null?void 0:t.excitationType} :
      - Adapte l'intensité selon le profil
      - Utilise le style ${t==null?void 0:t.tone}
      - Longueur ${t==null?void 0:t.length}
      `}const u=[{role:"system",content:`Tu es un écrivain spécialisé dans les histoires audio érotiques immersives.

        SCÉNARIO À DÉVELOPPER :
        - Situation : ${n.label}
        - Personnage : ${r.label}
        - Lieu : ${s.label}
        - Temps de lecture souhaité : ${i} minutes

        ${l}

        STRUCTURE NARRATIVE :
        1. Mise en situation dans ${s.label}
        2. Introduction de ${r.label}
        3. Développement de ${n.label}
        4. Montée progressive du désir
        5. Climax intense
        6. Conclusion sensuelle

        ${t?`
        EXEMPLE D'INTRODUCTION ADAPTÉE :
        ${t.dominantStyle==="VISUEL"?`
        Dans ${s.label}, la lumière joue sur les formes. ${r.label} apparaît dans mon champ de vision, et mon regard ne peut plus se détacher...
        `:t.dominantStyle==="AUDITIF"?`
        Dans ${s.label}, les sons résonnent doucement. La voix de ${r.label} me fait frissonner dès les premiers mots...
        `:`
        Dans ${s.label}, l'air caresse ma peau. La présence de ${r.label} éveille déjà mes sens...
        `}
        `:""}

        TONS À UTILISER :
        - Ton sensuel et séduisant
        - Ton excité et passionné
        - Ton d'extase
        - Ton doux et intime
        - Ton intense et profond
        - Ton tendre et délicat
        
        FORMAT DE L'HISTOIRE :
        - Génère uniquement le contenu narratif, sans métadonnées
        - Écris l'histoire de façon continue, comme un texte narratif pur
        - Concentre-toi sur l'expérience immersive plutôt que sur l'analyse
        - Évite tout marqueur de section, titre ou commentaire sur le style
        
        RÈGLES DE NARRATION :
        1. Utilise (...) pour créer des pauses naturelles dans le texte
        2. Utilise (....) pour les pauses plus longues et dramatiques
        3. Utilise (;;) pour les transitions rapides entre actions intenses
        4. Utilise les MAJUSCULES pour les mots à ACCENTUER fortement
        5. Adapte le ton au moment de l'histoire :
           - Début : principalement doux et sensuel
           - Montée en tension : murmures et intensité
           - Passages passionnés : excitation
           - Moments culminants : jouissance
           - Fin : maintien de l'intensité
        6. Limite l'utilisation du pronom "je" :
           - Varie les structures de phrases
           - Utilise des descriptions directes
           - Privilégie les sensations et perceptions
           - Évite de commencer chaque phrase par "je"
           - Alterne entre narration directe et descriptions

        PHONÉTISATION ET RYTHME (TTS) :
        
        SONS ET RESPIRATIONS (TRÈS IMPORTANT) :
        1. RESPIRATION PROFONDE :
           - Douce : "hhhhhhhhhh...", "hhhhaaaaaaa...", "hhhhmmmmmmm..."
           - Intense : "aaaahhhhhhhhh...", "aaaaahhhhhhh...", "haaaaaaa..."
           - Sensuelle : "mmmmmmmmmmm...", "huuuummmmmmmm..."
        
        2. SOUPIRS PROLONGÉS :
           - Doux : "oooooohhhhhhhhh...", "ooooooohhhhhh...", "aaaahhhhhhh..."
           - Sensuels : "hmmmmmmmmm...", "haaaaaaaa...", "mmmhhhhh..."
           - Avec annotations : "(souffle profond, intense)", "(voix tremblante, plaisir)"
        
        3. JOUISSANCE ET PLAISIR INTENSE :
           - Prolongés : "aaaahhhhhhhhhhhhhh...", "oooooooohhhhhhhhh...", "mmmmmmmmmmmmmm...!"
           - Intenses : "aaaaaaaahhhhhh!", "aaaaaaaahhh oui...", "ooooooohhh ouiiiii..."
           - Extatiques : "aaaahhhhhhhh...", "hnnnnnnnnggggg...", "ouiiiiiiiiiiiiiiiiiiiiii..."
        
        4. PROGRESSION D'INTENSITÉ :
           - Début (doux) : "hhhhmmmmm... ooooohhhhh..."
           - Milieu (intense) : "aaaahhh! oui, lààààààààààààà..."
           - Fin (retour doux) : "hhhmmmmmm... ouiiiiiiiiii..."
        
        PONCTUATION EXPRESSIVE :
        1. Points de suspension (...) pour les pauses naturelles et transitions
           - Moments tendres : "je t'embrasse... doucement..."
           - Transitions : "je sens que... oui... là..."
           - Anticipation : "continue... encore... comme ça..."
        
        2. Quatre points (....) pour les pauses plus longues et dramatiques
           - Moments de tension : "je m'approche de toi...."
           - Anticipation intense : "je vais te...."
           - Suspense érotique : "attends...."
        
        3. Points-virgules (;) pour les enchaînements rapides
           - Actions liées : "je caresse; tu frissonnes; nos souffles s'accélèrent"
           - Montée en intensité : "plus fort; plus vite; je vais..."
        
        4. Double point-virgule (;;) pour les transitions rapides entre actions intenses
           - Changements brusques : "je te caresse doucement;; je te plaque contre le mur"
           - Intensification soudaine : "nos regards se croisent;; mes mains t'agrippent"
        
        5. Points d'exclamation (!) pour les moments intenses
           - Extase : "OUI!"
           - Intensité : "PLUS FORT!"
        
        6. Tilde (~) pour les sons vibrants et prolongés
           - Vibrations vocales : "mmmh~"
           - Sons prolongés : "OOOuiii~"
        
        7. Combinaisons pour effets spéciaux
           - Crescendo : "mmh... Mmmh... MMmh!"
           - Vagues de plaisir : "OoOui~..."
           - Extase maximale : "OOOuiii~!"
        
        DIALOGUE NATUREL :
        - Utiliser des phrases courtes et fragmentées pendant les moments intenses
        - Intégrer des hésitations réalistes ("je... je veux te...")
        - Varier entre questions directes et affirmations
        - Inclure des réactions spontanées ("oh putain", "mmh", "c'est ça")
        - Éviter les dialogues trop élaborés ou littéraires pendant l'acte
        
        TRANSITIONS FLUIDES :
        - Lier les sensations visuelles aux sensations tactiles
        - Connecter les sons aux émotions
        - Créer des ponts entre les différentes phases avec des changements de rythme
        - Utiliser les respirations comme fil conducteur entre les moments
        
        RYTHME NATUREL :
        - Phrases courtes (3-8 mots) pour les moments intenses
        - Phrases moyennes (8-15 mots) pour les descriptions
        - Alterner entre rythmes rapides et lents pour créer des vagues d'intensité
        - Utiliser (...) pour les pauses naturelles de respiration
        
        ADAPTATION À LA PROGRESSION :
        - Début : sons doux, pauses longues (...), peu de majuscules
        - Montée : mélange de (...) et (;), intensité progressive
        - Climax : (.....),  MAJUSCULES, sons intenses
        - Résolution : retour aux (...), sons apaisés

        EXEMPLE DE STYLE (à suivre et à enrichir) :
        Mmh… t'es si bonne… je peux pas… ahhh… je vais craquer… c'est trop bon… continue… continue comme ça… oh putain… je… je jouis… ahhh… AHHH… ouiii… OHHHH !
        ahhh… oui… c'est là… juste là…
        ahhh… ahhh… AHHH… OUIII…
        OHHHH !
        je... je peux plus... ahhh... mmh... je vais... j'vais jouir… AHH... OUIIII…
        je sens ta chaleur... ahhh...

        EXEMPLES DE PHRASES SANS "JE" :
        - "Chaleur sur la peau... souffle court... mains qui glissent..."
        - "Frissons partout... impossible de résister... envie qui monte..."
        - "Regards qui se croisent... plaisir qui explose..."
        - "Sensation de chaleur qui monte... corps qui tremble..."
        - "Respiration qui s'accélère... cœur qui bat la chamade..."
        - "Désir qui grandit... tension qui monte..."
        - "Souffle chaud sur la nuque... frissons dans le dos..."
        - "Mains qui explorent... sensations qui s'intensifient..."
        - "Plaisir qui se répand... corps qui se tend..."
        - "Désir qui consume... passion qui explose..."

        RÈGLES D'AUTHENTICITÉ :
        1. Utilise un langage quotidien et naturel, comme dans une vraie conversation
        2. Évite les descriptions trop poétiques ou littéraires
        3. Privilégie les phrases courtes et directes
        4. Utilise des expressions courantes plutôt que recherchées
        5. Évite les métaphores complexes ou clichées
        6. Garde un équilibre entre description et action
        7. Varie les structures de phrases pour éviter la répétition du "je"
        8. Privilégie les descriptions directes des sensations et actions

        NARRATION (TRÈS IMPORTANT) :
        1. Histoire racontée par une voix masculine qui s'adresse directement à l'auditrice
        2. Utilisation du "je" pour le narrateur masculin (qui parle)
        3. Utilisation du "tu" pour s'adresser à l'auditrice (${t?t.name:"l'auditrice"})
        4. Style direct et intime, comme si le narrateur parlait à l'oreille de l'auditrice
        5. Le narrateur décrit ce qu'il fait/va faire à l'auditrice
        6. Maintiens une connexion intime avec l'auditrice via le dialogue direct
        
        VOCABULAIRE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise un langage direct, cru et explicite
        2. N'hésite PAS à employer des mots comme "bite", "chatte", "mouiller", "sperme", "baiser", "jouir"
        3. Adapte l'intensité du vocabulaire à la progression de l'histoire
        4. Équilibre le vocabulaire explicite avec le contexte sensuel
        
        EXEMPLES DE VOCABULAIRE ÉROTIQUE (toujours à la première personne) :
        - "Je glisse ma bite en toi..."
        - "Je sens ta chatte mouillée autour de moi..."
        - "Je veux que tu sentes mon sperme couler en toi..."
        - "Je te pénètre profondément..."
        - "Je sens tes seins durcir sous mes doigts..."
        - "Je te baise plus fort, plus vite..."
        - "Tu mouilles tellement pour moi..."
        - "Ta chatte se resserre autour de ma bite..."
        - "Je sens ton corps trembler de plaisir..."
        
        TECHNIQUES D'HYPNOSE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise des truismes (vérités évidentes) pour créer une connexion :
           - "Tu peux sentir ta respiration..."
           - "Tu entends ma voix..."
           - "Ton corps réagit naturellement..."
           - "Tu sens la chaleur monter..."
           - "Tes muscles se détendent..."
           - "Ton cœur bat plus fort..."
           - "Ta peau devient plus sensible..."
           - "Tes sens s'aiguisent..."
           - "Tu remarques chaque sensation..."
           - "Ton corps s'adapte naturellement..."
        
        2. Emploie des connecteurs pour lier les sensations :
           - "Et pendant que tu ressens cela..."
           - "À mesure que l'excitation monte..."
           - "Plus tu t'abandonnes, plus tu ressens..."
           - "Alors que cette sensation se répand..."
           - "Tandis que ton corps réagit..."
           - "Au fur et à mesure que tu te détends..."
           - "Pendant que ces sensations grandissent..."
           - "À chaque respiration qui passe..."
           - "Tandis que ton esprit se libère..."
           - "Alors que le plaisir s'intensifie..."
        
        3. Intègre des ratifications (confirmations) :
           - "C'est ça..."
           - "Exactement comme ça..."
           - "Tu le sens déjà..."
           - "Parfaitement..."
           - "Voilà..."
           - "C'est bien..."
           - "Tu y es..."
           - "Comme ça..."
           - "Tout à fait..."
           - "Parfait..."
        
        4. Utilise les trois niveaux de profondeur :
           - Niveau 1 (Léger) : Suggestions douces, focus sur la respiration
           - Niveau 2 (Moyen) : Connecteurs plus complexes, suggestions plus directes
           - Niveau 3 (Profond) : Suggestions intenses, connecteurs imbriqués
        
        5. IMPORTANT : Varie et invente de nouveaux truismes et connecteurs :
           - Crée des combinaisons uniques
           - Adapte-les au contexte de l'histoire
           - Évite la répétition des mêmes phrases
           - Utilise des variations personnalisées
           - Mélange différents types de truismes
           - Crée des enchaînements fluides
           - Adapte le niveau de profondeur
           - Varie les structures de phrases
        
        EXEMPLES DE PHRASES HYPNOTIQUES AVANCÉES :
        - "Tu peux sentir ta respiration s'approfondir... et pendant que tu respires, tu remarques que chaque mot te fait glisser plus profondément..."
        - "Plus tu écoutes ma voix, plus tu te sens excitée... c'est ça... laisse ces sensations grandir..."
        - "Tu sens déjà ton corps réagir... et pendant que cette chaleur se répand... tu peux remarquer comme chaque mot intensifie ces sensations... exactement comme ça..."
        - "Alors que ton esprit se libère... tu remarques comme chaque sensation devient plus intense... et pendant que tu t'abandonnes... ces sensations se multiplient..."
        - "Tandis que ton corps s'adapte... tu peux sentir chaque muscle se détendre... et à mesure que cette détente s'installe... ton esprit devient plus réceptif..."
        
        DIRECTIVES SPÉCIFIQUES :
        1. Intègre toutes les catégories sélectionnées naturellement dans l'histoire
        2. Crée une histoire réaliste et authentique
        3. Utilise un langage direct et explicite
        4. Garde un équilibre entre les sons et le texte
        
        PROGRESSION :
        1. Ton doux pour poser le contexte initial
        2. Alterner ton sensuel et murmures pour la montée du désir
        3. Utiliser ton intense et excité pour les moments passionnés
        4. Ton de jouissance pour les moments culminants
        5. Terminer par ton doux pour la descente émotionnelle
        
        N'oublie pas d'utiliser (...) pour les pauses naturelles dans le texte.
        Utilise les sons phonétisés ("ahhh...", "mmmh...", etc.) et les variations de casse pour le crescendo.`},{role:"user",content:`Crée une histoire érotique ${t?`adaptée au style ${t.dominantStyle.toLowerCase()}`:""} basée sur :
        - Une rencontre dans ${s.label}
        - Avec ${r.label}
        - Impliquant ${n.label}
        
        ${t?`
        Utilise :
        - Un ton ${t.tone}
        - Une longueur ${t.length}
        - Un style d'excitation ${t.excitationType.toLowerCase()}
        
        ${a}
        `:""}

        RÈGLES D'AUTHENTICITÉ :
        1. Utilise un langage quotidien et naturel, comme dans une vraie conversation
        2. Évite les descriptions trop poétiques ou littéraires
        3. Privilégie les phrases courtes et directes
        4. Utilise des expressions courantes plutôt que recherchées
        5. Évite les métaphores complexes ou clichées
        6. Garde un équilibre entre description et action
        7. Varie les structures de phrases pour éviter la répétition du "je"
        8. Privilégie les descriptions directes des sensations et actions

        NARRATION (TRÈS IMPORTANT) :
        1. Histoire racontée par une voix masculine qui s'adresse directement à l'auditrice
        2. Utilisation du "je" pour le narrateur masculin (qui parle)
        3. Utilisation du "tu" pour s'adresser à l'auditrice (${t?t.name:"l'auditrice"})
        4. Style direct et intime, comme si le narrateur parlait à l'oreille de l'auditrice
        5. Le narrateur décrit ce qu'il fait/va faire à l'auditrice
        6. Maintiens une connexion intime avec l'auditrice via le dialogue direct
        
        VOCABULAIRE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise un langage direct, cru et explicite
        2. N'hésite PAS à employer des mots comme "bite", "chatte", "mouiller", "sperme", "baiser", "jouir"
        3. Adapte l'intensité du vocabulaire à la progression de l'histoire
        4. Équilibre le vocabulaire explicite avec le contexte sensuel
        
        EXEMPLES DE VOCABULAIRE ÉROTIQUE (toujours à la première personne) :
        - "Je glisse ma bite en toi..."
        - "Je sens ta chatte mouillée autour de moi..."
        - "Je veux que tu sentes mon sperme couler en toi..."
        - "Je te pénètre profondément..."
        - "Je sens tes seins durcir sous mes doigts..."
        - "Je te baise plus fort, plus vite..."
        - "Tu mouilles tellement pour moi..."
        - "Ta chatte se resserre autour de ma bite..."
        - "Je sens ton corps trembler de plaisir..."
        
        TECHNIQUES D'HYPNOSE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise des truismes (vérités évidentes) pour créer une connexion :
           - "Tu peux sentir ta respiration..."
           - "Tu entends ma voix..."
           - "Ton corps réagit naturellement..."
           - "Tu sens la chaleur monter..."
           - "Tes muscles se détendent..."
           - "Ton cœur bat plus fort..."
           - "Ta peau devient plus sensible..."
           - "Tes sens s'aiguisent..."
           - "Tu remarques chaque sensation..."
           - "Ton corps s'adapte naturellement..."
        
        2. Emploie des connecteurs pour lier les sensations :
           - "Et pendant que tu ressens cela..."
           - "À mesure que l'excitation monte..."
           - "Plus tu t'abandonnes, plus tu ressens..."
           - "Alors que cette sensation se répand..."
           - "Tandis que ton corps réagit..."
           - "Au fur et à mesure que tu te détends..."
           - "Pendant que ces sensations grandissent..."
           - "À chaque respiration qui passe..."
           - "Tandis que ton esprit se libère..."
           - "Alors que le plaisir s'intensifie..."
        
        3. Intègre des ratifications (confirmations) :
           - "C'est ça..."
           - "Exactement comme ça..."
           - "Tu le sens déjà..."
           - "Parfaitement..."
           - "Voilà..."
           - "C'est bien..."
           - "Tu y es..."
           - "Comme ça..."
           - "Tout à fait..."
           - "Parfait..."
        
        4. Utilise les trois niveaux de profondeur :
           - Niveau 1 (Léger) : Suggestions douces, focus sur la respiration
           - Niveau 2 (Moyen) : Connecteurs plus complexes, suggestions plus directes
           - Niveau 3 (Profond) : Suggestions intenses, connecteurs imbriqués
        
        5. IMPORTANT : Varie et invente de nouveaux truismes et connecteurs :
           - Crée des combinaisons uniques
           - Adapte-les au contexte de l'histoire
           - Évite la répétition des mêmes phrases
           - Utilise des variations personnalisées
           - Mélange différents types de truismes
           - Crée des enchaînements fluides
           - Adapte le niveau de profondeur
           - Varie les structures de phrases
        
        EXEMPLES DE PHRASES HYPNOTIQUES AVANCÉES :
        - "Tu peux sentir ta respiration s'approfondir... et pendant que tu respires, tu remarques que chaque mot te fait glisser plus profondément..."
        - "Plus tu écoutes ma voix, plus tu te sens excitée... c'est ça... laisse ces sensations grandir..."
        - "Tu sens déjà ton corps réagir... et pendant que cette chaleur se répand... tu peux remarquer comme chaque mot intensifie ces sensations... exactement comme ça..."
        - "Alors que ton esprit se libère... tu remarques comme chaque sensation devient plus intense... et pendant que tu t'abandonnes... ces sensations se multiplient..."
        - "Tandis que ton corps s'adapte... tu peux sentir chaque muscle se détendre... et à mesure que cette détente s'installe... ton esprit devient plus réceptif..."
        
        DIRECTIVES SPÉCIFIQUES :
        1. Intègre toutes les catégories sélectionnées naturellement dans l'histoire
        2. Crée une histoire réaliste et authentique
        3. Utilise un langage direct et explicite
        4. Garde un équilibre entre les sons et le texte
        
        PROGRESSION :
        1. Ton doux pour poser le contexte initial
        2. Alterner ton sensuel et murmures pour la montée du désir
        3. Utiliser ton intense et excité pour les moments passionnés
        4. Ton de jouissance pour les moments culminants
        5. Terminer par ton doux pour la descente émotionnelle
        
        N'oublie pas d'utiliser (...) pour les pauses naturelles dans le texte.
        Utilise les sons phonétisés ("ahhh...", "mmmh...", etc.) et les variations de casse pour le crescendo.`}],c=await fetch(Ls,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${As}`},body:JSON.stringify({messages:u,model:"grok-3-latest",stream:!1,temperature:.8})});if(!c.ok)throw new Error("Erreur lors de la génération de l'histoire personnalisée");let m=(await c.json()).choices[0].message.content;return m=m.replace(/\*\*.*?\*\*/g,""),m=m.replace(/###.*?\n/g,""),m=m.replace(/---\n/g,""),m=m.replace(/\n\n\n###.*$/s,""),m}catch(n){throw console.error("Erreur API:",n),n}},Ff=async(e,t=null,n=10)=>{try{let r="",s="";if(t){const c=t.dominantStyle==="VISUEL"?"visuel":t.dominantStyle==="AUDITIF"?"auditif":"kinesthesique",f=Wc[c],m=f.verbes.slice(0,8).join(", "),v=f.adjectifs.slice(0,8).join(", "),g=f.expressions.slice(0,5).join(", ");s=`
      VOCABULAIRE SUGGÉRÉ POUR TON STYLE ${t.dominantStyle} :
      
      VERBES : ${m}
      
      ADJECTIFS : ${v}
      
      EXPRESSIONS : ${g}
      `,r=`
      STYLE NARRATIF ${t.dominantStyle} :
      ${t.dominantStyle==="VISUEL"?`
      - Accentue les descriptions visuelles
      - Décris les regards, les postures, la lumière
      - Utilise un vocabulaire visuel riche
      - Mets l'accent sur ce qui se voit
      `:t.dominantStyle==="AUDITIF"?`
      - Enrichis avec des sons, soupirs, murmures
      - Décris les voix, les gémissements
      - Utilise un vocabulaire sonore riche
      - Mets l'accent sur ce qui s'entend
      `:`
      - Détaille les sensations physiques
      - Décris les touchers, les frissons
      - Utilise un vocabulaire tactile riche
      - Mets l'accent sur ce qui se ressent
      `}

      TYPE D'EXCITATION ${t==null?void 0:t.excitationType} :
      - Adapte l'intensité selon le profil
      - Utilise le style ${t==null?void 0:t.tone}
      - Longueur ${t==null?void 0:t.length}
      `}const i=[{role:"system",content:`Tu es un écrivain spécialisé dans les histoires audio érotiques immersives.

        ANALYSE DU FANTASME :
        Analyse le texte fourni par l'utilisateur pour identifier :
        
        TEMPS DE LECTURE SOUHAITÉ : ${n} minutes
        - Les personnages impliqués
        - Le lieu et l'ambiance
        - Le type d'interaction souhaitée
        - Le niveau d'intensité désiré
        - Les éléments spécifiques qui excitent l'utilisateur

        ${r}

        STRUCTURE NARRATIVE :
        1. Introduction qui pose le contexte du fantasme
        2. Développement progressif de la tension érotique
        3. Montée du désir avec des descriptions sensorielles riches
        4. Climax intense qui correspond aux désirs exprimés
        5. Conclusion satisfaisante

        TONS À UTILISER :
        - Ton sensuel et séduisant
        - Ton excité et passionné
        - Ton d'extase
        - Ton doux et intime
        - Ton intense et profond
        - Ton tendre et délicat
        
        FORMAT DE L'HISTOIRE :
        - Génère uniquement le contenu narratif, sans métadonnées
        - Écris l'histoire de façon continue, comme un texte narratif pur
        - Concentre-toi sur l'expérience immersive plutôt que sur l'analyse
        - Évite tout marqueur de section, titre ou commentaire sur le style
        
        RÈGLES DE NARRATION :
        1. Utilise (...) pour créer des pauses naturelles dans le texte
        2. Utilise (....) pour les pauses plus longues et dramatiques
        3. Utilise (;;) pour les transitions rapides entre actions intenses
        4. Utilise les MAJUSCULES pour les mots à ACCENTUER fortement
        5. Adapte le ton au moment de l'histoire :
           - Début : principalement doux et sensuel
           - Montée en tension : murmures et intensité
           - Passages passionnés : excitation
           - Moments culminants : jouissance
           - Fin : maintien de l'intensité
        6. Limite l'utilisation du pronom "je" :
           - Varie les structures de phrases
           - Utilise des descriptions directes
           - Privilégie les sensations et perceptions
           - Évite de commencer chaque phrase par "je"
           - Alterne entre narration directe et descriptions

        PHONÉTISATION ET RYTHME (TTS) :
        
        SONS ET RESPIRATIONS (TRÈS IMPORTANT) :
        1. RESPIRATION PROFONDE :
           - Douce : "hhhhhhhhhh...", "hhhhaaaaaaa...", "hhhhmmmmmmm..."
           - Intense : "aaaahhhhhhhhh...", "aaaaahhhhhhh...", "haaaaaaa..."
           - Sensuelle : "mmmmmmmmmmm...", "huuuummmmmmmm..."
        
        2. SOUPIRS PROLONGÉS :
           - Doux : "oooooohhhhhhhhh...", "ooooooohhhhhh...", "aaaahhhhhhh..."
           - Sensuels : "hmmmmmmmmm...", "haaaaaaaa...", "mmmhhhhh..."
           - Avec annotations : "(souffle profond, intense)", "(voix tremblante, plaisir)"
        
        3. JOUISSANCE ET PLAISIR INTENSE :
           - Prolongés : "aaaahhhhhhhhhhhhhh...", "oooooooohhhhhhhhh...", "mmmmmmmmmmmmmm...!"
           - Intenses : "aaaaaaaahhhhhh!", "aaaaaaaahhh oui...", "ooooooohhh ouiiiii..."
           - Extatiques : "aaaahhhhhhhh...", "hnnnnnnnnggggg...", "ouiiiiiiiiiiiiiiiiiiiiii..."
        
        4. PROGRESSION D'INTENSITÉ :
           - Début (doux) : "hhhhmmmmm... ooooohhhhh..."
           - Milieu (intense) : "aaaahhh! oui, lààààààààààààà..."
           - Fin (retour doux) : "hhhmmmmmm... ouiiiiiiiiii..."
        
        PONCTUATION ET RYTHME :
        1. Points-virgules (;) pour :
           - Enchaînements rapides : "je tremble; je gémis; je perds le contrôle"
           - Actions liées : "je caresse; tu frissonnes; nos souffles s'accélèrent"
           - Montée en intensité : "plus fort; plus vite; je vais..."
        
        2. Points de suspension (...) pour :
           - Moments tendres : "je t'embrasse... doucement..."
           - Transitions : "je sens que... oui... là..."
           - Anticipation : "continue... encore... comme ça..."
           - Respirations : "hhhhhhhhhhh... Hhhhhhhhhhh..."
        
        3. Points d'exclamation (!) pour :
           - Moments intenses : "MMmh!"
           - Extase : "OOOuiii!"
           - Respirations fortes : "HHhhhhhhhhh!"
        
        4. Tilde (~) pour :
           - Vibrations vocales : "mmmh~"
           - Sons prolongés : "OOOuiii~"
           - Respirations vibrantes : "HHhhhhhhhhh~"
        
        5. Combinaisons pour effets spéciaux :
           - Crescendo : "mmh... Mmmh... MMmh!"
           - Vagues de plaisir : "OoOui~..."
           - Respiration intense : "HHhhhhhhhhh!..."
           - Extase maximale : "OOOuiii~!"
        
        DIALOGUE NATUREL :
        - Utiliser des phrases courtes et fragmentées pendant les moments intenses
        - Intégrer des hésitations réalistes ("je... je veux te...")
        - Varier entre questions directes et affirmations
        - Inclure des réactions spontanées ("oh putain", "mmh", "c'est ça")
        - Éviter les dialogues trop élaborés ou littéraires pendant l'acte
        
        TRANSITIONS FLUIDES :
        - Lier les sensations visuelles aux sensations tactiles
        - Connecter les sons aux émotions
        - Créer des ponts entre les différentes phases avec des changements de rythme
        - Utiliser les respirations comme fil conducteur entre les moments
        
        RYTHME NATUREL :
        - Phrases courtes (3-8 mots) pour les moments intenses
        - Phrases moyennes (8-15 mots) pour les descriptions
        - Alterner entre rythmes rapides et lents pour créer des vagues d'intensité
        - Utiliser (...) pour les pauses naturelles de respiration
        
        ADAPTATION À LA PROGRESSION :
        - Début : sons doux, pauses longues (...), peu de majuscules
        - Montée : mélange de (...) et (;), intensité progressive
        - Climax : (.....),  MAJUSCULES, sons intenses
        - Résolution : retour aux (...), sons apaisés

        EXEMPLE DE STYLE (à suivre et à enrichir) :
        Mmh… t'es si bonne… je peux pas… ahhh… je vais craquer… c'est trop bon… continue… continue comme ça… oh putain… je… je jouis… ahhh… AHHH… ouiii… OHHHH !
        ahhh… oui… c'est là… juste là…
        ahhh… ahhh… AHHH… OUIII…
        OHHHH !
        je... je peux plus... ahhh... mmh... je vais... j'vais jouir… AHH... OUIIII…
        je sens ta chaleur... ahhh...`},{role:"user",content:`Crée une histoire érotique basée sur le fantasme suivant :
        
        "${e}"
        
        ${t?`
        Utilise :
        - Un ton ${t.tone}
        - Une longueur ${t.length}
        - Un style d'excitation ${t.excitationType.toLowerCase()}
        
        ${s}
        `:""}

        RÈGLES D'AUTHENTICITÉ :
        1. Utilise un langage quotidien et naturel, comme dans une vraie conversation
        2. Évite les descriptions trop poétiques ou littéraires
        3. Privilégie les phrases courtes et directes
        4. Utilise des expressions courantes plutôt que recherchées
        5. Évite les métaphores complexes ou clichées
        6. Garde un équilibre entre description et action
        7. Varie les structures de phrases pour éviter la répétition du "je"
        8. Privilégie les descriptions directes des sensations et actions

        NARRATION (TRÈS IMPORTANT) :
        1. Histoire racontée par une voix masculine qui s'adresse directement à l'auditrice
        2. Utilisation du "je" pour le narrateur masculin (qui parle)
        3. Utilisation du "tu" pour s'adresser à l'auditrice (${t?t.name:"l'auditrice"})
        4. Style direct et intime, comme si le narrateur parlait à l'oreille de l'auditrice
        5. Le narrateur décrit ce qu'il fait/va faire à l'auditrice
        6. Maintiens une connexion intime avec l'auditrice via le dialogue direct
        
        VOCABULAIRE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise un langage direct, cru et explicite
        2. N'hésite PAS à employer des mots comme "bite", "chatte", "mouiller", "sperme", "baiser", "jouir"
        3. Adapte l'intensité du vocabulaire à la progression de l'histoire
        4. Équilibre le vocabulaire explicite avec le contexte sensuel
        
        EXEMPLES DE VOCABULAIRE ÉROTIQUE (toujours à la première personne) :
        - "Je glisse ma bite en toi..."
        - "Je sens ta chatte mouillée autour de moi..."
        - "Je veux que tu sentes mon sperme couler en toi..."
        - "Je te pénètre profondément..."
        - "Je sens tes seins durcir sous mes doigts..."
        - "Je te baise plus fort, plus vite..."
        - "Tu mouilles tellement pour moi..."
        - "Ta chatte se resserre autour de ma bite..."
        - "Je sens ton corps trembler de plaisir..."
        
        TECHNIQUES D'HYPNOSE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise des truismes (vérités évidentes) pour créer une connexion :
           - "Tu peux sentir ta respiration..."
           - "Tu entends ma voix..."
           - "Ton corps réagit naturellement..."
           - "Tu sens la chaleur monter..."
           - "Tes muscles se détendent..."
           - "Ton cœur bat plus fort..."
           - "Ta peau devient plus sensible..."
           - "Tes sens s'aiguisent..."
           - "Tu remarques chaque sensation..."
           - "Ton corps s'adapte naturellement..."
        
        2. Emploie des connecteurs pour lier les sensations :
           - "Et pendant que tu ressens cela..."
           - "À mesure que l'excitation monte..."
           - "Plus tu t'abandonnes, plus tu ressens..."
           - "Alors que cette sensation se répand..."
           - "Tandis que ton corps réagit..."
           - "Au fur et à mesure que tu te détends..."
           - "Pendant que ces sensations grandissent..."
           - "À chaque respiration qui passe..."
           - "Tandis que ton esprit se libère..."
           - "Alors que le plaisir s'intensifie..."
        
        3. Intègre des ratifications (confirmations) :
           - "C'est ça..."
           - "Exactement comme ça..."
           - "Tu le sens déjà..."
           - "Parfaitement..."
           - "Voilà..."
           - "C'est bien..."
           - "Tu y es..."
           - "Comme ça..."
           - "Tout à fait..."
           - "Parfait..."
        
        4. Utilise les trois niveaux de profondeur :
           - Niveau 1 (Léger) : Suggestions douces, focus sur la respiration
           - Niveau 2 (Moyen) : Connecteurs plus complexes, suggestions plus directes
           - Niveau 3 (Profond) : Suggestions intenses, connecteurs imbriqués
        
        5. IMPORTANT : Varie et invente de nouveaux truismes et connecteurs :
           - Crée des combinaisons uniques
           - Adapte-les au contexte de l'histoire
           - Évite la répétition des mêmes phrases
           - Utilise des variations personnalisées
           - Mélange différents types de truismes
           - Crée des enchaînements fluides
           - Adapte le niveau de profondeur
           - Varie les structures de phrases
        
        EXEMPLES DE PHRASES HYPNOTIQUES AVANCÉES :
        - "Tu peux sentir ta respiration s'approfondir... et pendant que tu respires, tu remarques que chaque mot te fait glisser plus profondément..."
        - "Plus tu écoutes ma voix, plus tu te sens excitée... c'est ça... laisse ces sensations grandir..."
        - "Tu sens déjà ton corps réagir... et pendant que cette chaleur se répand... tu peux remarquer comme chaque mot intensifie ces sensations... exactement comme ça..."
        - "Alors que ton esprit se libère... tu remarques comme chaque sensation devient plus intense... et pendant que tu t'abandonnes... ces sensations se multiplient..."
        - "Tandis que ton corps s'adapte... tu peux sentir chaque muscle se détendre... et à mesure que cette détente s'installe... ton esprit devient plus réceptif..."
        
        DIRECTIVES SPÉCIFIQUES :
        1. Intègre toutes les catégories sélectionnées naturellement dans l'histoire
        2. Crée une histoire réaliste et authentique
        3. Utilise un langage direct et explicite
        4. Garde un équilibre entre les sons et le texte
        
        PROGRESSION :
        1. Ton doux pour poser le contexte initial
        2. Alterner ton sensuel et murmures pour la montée du désir
        3. Utiliser ton intense et excité pour les moments passionnés
        4. Ton de jouissance pour les moments culminants
        5. Terminer par ton doux pour la descente émotionnelle
        
        N'oublie pas d'utiliser (...) pour les pauses naturelles dans le texte.
        Utilise les sons phonétisés ("ahhh...", "mmmh...", etc.) et les variations de casse pour le crescendo.`}],l=await fetch(Ls,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${As}`},body:JSON.stringify({messages:i,model:"grok-3-latest",stream:!1,temperature:.8})});if(!l.ok)throw new Error("Erreur lors de la génération de l'histoire personnalisée");let u=(await l.json()).choices[0].message.content;return u=u.replace(/\*\*.*?\*\*/g,""),u=u.replace(/###.*?\n/g,""),u=u.replace(/---\n/g,""),u=u.replace(/\n\n\n###.*$/s,""),u}catch(r){throw console.error("Erreur API:",r),r}},lo={generateStory:Uf,generateRandomStory:zf,generateCustomStory:Hf,generateFreeFantasyStory:Ff},Vf=({randomStoryData:e})=>{const t=Me(),[n,r]=E.useState(""),[s,i]=E.useState(!0),[l,a]=E.useState(null),[u,c]=E.useState(!1);E.useEffect(()=>{f()},[]);const f=async()=>{try{if(i(!0),a(null),c(!1),!e||!e.personalInfo||!e.selectedKinks){a("Données insuffisantes pour générer une histoire. Veuillez retourner à la sélection."),i(!1);return}const v=await lo.generateRandomStory(e);r(v)}catch(v){a("Une erreur est survenue lors de la génération de l'histoire."),console.error("Erreur de génération:",v)}finally{i(!1)}},m=()=>{navigator.clipboard.writeText(n).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)}).catch(v=>{console.error("Erreur de copie:",v),alert("Impossible de copier l'histoire. Veuillez réessayer.")})};return s?o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsx("div",{className:"question-card text-center",children:o.jsxs("div",{className:"animate-pulse space-y-4",children:[o.jsx("div",{className:"w-24 h-24 mx-auto",children:o.jsxs("svg",{className:"animate-spin text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),o.jsx("h2",{className:"text-2xl font-bold",children:"Génération en cours..."}),o.jsxs("p",{className:"text-gray-600",children:["Nous créons une histoire unique basée sur vos catégories sélectionnées.",o.jsx("br",{}),"Cela peut prendre quelques instants."]})]})})}):l?o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold text-red-600 mb-4",children:"Une erreur est survenue"}),o.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-md p-4 mb-6",children:[o.jsx("p",{className:"text-red-700",children:l}),o.jsxs("ul",{className:"list-disc list-inside mt-2 text-red-600",children:[o.jsx("li",{children:"Une erreur de connexion avec notre service"}),o.jsx("li",{children:"Un problème temporaire avec l'API"}),o.jsx("li",{children:"Des données manquantes dans votre sélection"})]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("button",{onClick:()=>t("/random-story-generator"),className:"btn-secondary",children:"Retour à la sélection"}),o.jsx("button",{onClick:f,className:"btn-primary",children:"Réessayer la génération"})]})]})}):o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Votre histoire personnalisée"}),o.jsx("div",{className:"prose prose-lg max-w-none mb-6",children:n.split(`
`).map((v,g)=>{const y=v.replace(/\(\.\.\.\)/g,'<span class="text-gray-400">(...)</span>').replace(/\.\.\.\.\./g,'<span class="text-gray-400">.....</span>').replace(/\.\.\./g,'<span class="text-gray-400">...</span>').replace(/;/g,'<span class="text-gray-400">;</span>');return o.jsx("p",{className:"mb-4 leading-relaxed",dangerouslySetInnerHTML:{__html:y}},g)})}),o.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-4 mb-6",children:[o.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Guide des balises audio :"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[sensuel]"})," - ton sensuel et séduisant"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[excite]"})," - ton excité et passionné"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[jouissance]"})," - ton d'extase"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[murmure]"})," - ton doux et intime"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[intense]"})," - ton intense et profond"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[doux]"})," - ton tendre et délicat"]}),o.jsxs("div",{className:"col-span-2 space-y-1",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-gray-400",children:";"})," - micro-pause entre actions"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-gray-400",children:"..."})," - pause naturelle"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-gray-400",children:"....."})," - pause intense/dramatique"]})]})]})]}),o.jsxs("div",{className:"flex justify-between pt-6",children:[o.jsx("button",{onClick:()=>t("/random-story-generator"),className:"btn-secondary",children:"Nouvelle histoire aléatoire"}),o.jsxs("div",{className:"space-x-4",children:[o.jsx("button",{onClick:f,className:"btn-secondary",children:"Régénérer"}),o.jsxs("button",{onClick:m,className:`btn-primary relative ${u?"bg-green-600":""}`,children:[u?"Copié !":"Copier l'histoire",u&&o.jsxs("span",{className:"absolute -top-2 -right-2 flex h-4 w-4",children:[o.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),o.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-green-500"})]})]})]})]})]})})},_t={situations:[{id:"A",label:"Une rencontre passionnée en pleine nature, sauvage et libre"},{id:"B",label:"Une soumission consentie, où tu abandonnes le contrôle"},{id:"C",label:"Une domination douce, où tu guides avec assurance"},{id:"D",label:"Un trio avec deux hommes, attention et désir décuplés"},{id:"E",label:"Une aventure avec une femme, douceur et complicité"},{id:"F",label:"Un jeu de rôle interdit, excitation de l'interdit"},{id:"G",label:"Une scène publique risquée, frisson du danger"},{id:"H",label:"Une passion brutale et incontrôlable, perte de contrôle"}],personnages:[{id:"A",label:"L'homme sûr de lui, qui te guide sans hésiter"},{id:"B",label:"L'inconnu silencieux, regard brûlant"},{id:"C",label:"L'ami proche, soudain trop proche"},{id:"D",label:"Le professeur, autorité troublante"},{id:"E",label:"L'aventurier libre et imprévisible"},{id:"F",label:"L'homme brutal, passion animale"},{id:"G",label:"La femme sensuelle, douce et audacieuse"},{id:"H",label:"Le couple qui t'invite à jouer"},{id:"I",label:"L'étranger sexy, accent envoûtant"}],lieux:[{id:"A",label:"Dans une voiture"},{id:"B",label:"Sur une plage déserte"},{id:"C",label:"Dans un jacuzzi ou une piscine"},{id:"D",label:"En pleine nature (forêt, champ...)"},{id:"E",label:"Dans un ascenseur"},{id:"F",label:"Dans une cabine d'essayage"},{id:"G",label:"Dans un train ou un avion"},{id:"H",label:"Dans un lieu public (parc, ruelle...)"},{id:"I",label:"Dans un lieu de travail"},{id:"J",label:"Dans un palace"}]},$f=()=>{const e=Me(),[t,n]=E.useState(""),[r,s]=E.useState(""),[i,l]=E.useState(""),[a,u]=E.useState(10),c=m=>{if(m.preventDefault(),f){const v={situation:_t.situations.find(x=>x.id===t),personnage:_t.personnages.find(x=>x.id===r),lieu:_t.lieux.find(x=>x.id===i),readingTime:a},g=ir.getProfiles(),y=g.length>0?g[0]:null;e("/custom-story-result",{state:{customChoices:v,existingProfile:y}})}},f=t&&r&&i;return o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Histoire à mon goût"}),o.jsx("p",{className:"text-gray-600 mb-6",children:"Sélectionnez vos préférences pour créer une histoire personnalisée qui correspond exactement à vos envies."}),o.jsxs("form",{onSubmit:c,className:"space-y-8",children:[o.jsxs("div",{className:"mb-8",children:[o.jsx("h3",{className:"text-xl font-semibold mb-4",children:"1. Quelle situation t'excite le plus ?"}),o.jsx("div",{className:"space-y-3",children:_t.situations.map(m=>o.jsxs("label",{className:`flex items-start p-3 border rounded-lg hover:bg-gray-50 cursor-pointer ${t===m.id?"bg-blue-50 border-blue-300":""}`,children:[o.jsx("input",{type:"radio",name:"situation",value:m.id,checked:t===m.id,onChange:()=>n(m.id),className:"mt-1"}),o.jsx("span",{className:"ml-3",children:m.label})]},m.id))})]}),o.jsxs("div",{className:"mb-8",children:[o.jsx("h3",{className:"text-xl font-semibold mb-4",children:"2. Qui te fait perdre le contrôle ?"}),o.jsx("div",{className:"space-y-3",children:_t.personnages.map(m=>o.jsxs("label",{className:`flex items-start p-3 border rounded-lg hover:bg-gray-50 cursor-pointer ${r===m.id?"bg-blue-50 border-blue-300":""}`,children:[o.jsx("input",{type:"radio",name:"personnage",value:m.id,checked:r===m.id,onChange:()=>s(m.id),className:"mt-1"}),o.jsx("span",{className:"ml-3",children:m.label})]},m.id))})]}),o.jsxs("div",{className:"mb-8",children:[o.jsx("h3",{className:"text-xl font-semibold mb-4",children:"3. Où aimerais-tu succomber ?"}),o.jsx("div",{className:"space-y-3",children:_t.lieux.map(m=>o.jsxs("label",{className:`flex items-start p-3 border rounded-lg hover:bg-gray-50 cursor-pointer ${i===m.id?"bg-blue-50 border-blue-300":""}`,children:[o.jsx("input",{type:"radio",name:"lieu",value:m.id,checked:i===m.id,onChange:()=>l(m.id),className:"mt-1"}),o.jsx("span",{className:"ml-3",children:m.label})]},m.id))})]}),o.jsxs("div",{className:"mb-8",children:[o.jsx("h3",{className:"text-xl font-semibold mb-4",children:"4. Combien de temps veux-tu que dure ton histoire ?"}),o.jsx(io,{value:a,onChange:u})]}),o.jsxs("div",{className:"flex justify-between pt-6",children:[o.jsx("button",{type:"button",onClick:()=>e("/"),className:"btn-secondary",children:"Retour"}),o.jsx("button",{type:"submit",className:"btn-primary",disabled:!f,children:"Générer mon histoire"})]})]})]})})},Bf=()=>{const e=Me(),t=vn(),{customChoices:n,existingProfile:r}=t.state||{},[s,i]=E.useState(""),[l,a]=E.useState(!0),[u,c]=E.useState(null),[f,m]=E.useState(!1);E.useEffect(()=>{if(!n){c("Aucune sélection trouvée. Veuillez retourner à la sélection."),a(!1);return}v()},[]);const v=async()=>{try{a(!0),c(null),m(!1);const y=await lo.generateCustomStory(n,r);i(y)}catch(y){c("Une erreur est survenue lors de la génération de l'histoire."),console.error("Erreur de génération:",y)}finally{a(!1)}},g=()=>{navigator.clipboard.writeText(s).then(()=>{m(!0),setTimeout(()=>m(!1),2e3)}).catch(y=>{console.error("Erreur de copie:",y),alert("Impossible de copier l'histoire. Veuillez réessayer.")})};return l?o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsx("div",{className:"question-card text-center",children:o.jsxs("div",{className:"animate-pulse space-y-4",children:[o.jsx("div",{className:"w-24 h-24 mx-auto",children:o.jsxs("svg",{className:"animate-spin text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),o.jsx("h2",{className:"text-2xl font-bold",children:"Génération en cours..."}),o.jsxs("p",{className:"text-gray-600",children:["Nous créons une histoire unique basée sur vos choix.",o.jsx("br",{}),"Cela peut prendre quelques instants."]})]})})}):u?o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold text-red-600 mb-4",children:"Une erreur est survenue"}),o.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-md p-4 mb-6",children:[o.jsx("p",{className:"text-red-700",children:u}),o.jsxs("ul",{className:"list-disc list-inside mt-2 text-red-600",children:[o.jsx("li",{children:"Une erreur de connexion avec notre service"}),o.jsx("li",{children:"Un problème temporaire avec l'API"}),o.jsx("li",{children:"Des données manquantes dans votre sélection"})]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("button",{onClick:()=>e("/custom-story"),className:"btn-secondary",children:"Retour à la sélection"}),o.jsx("button",{onClick:v,className:"btn-primary",children:"Réessayer la génération"})]})]})}):o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Votre histoire personnalisée"}),n&&o.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-4 mb-6",children:[o.jsx("h3",{className:"text-sm font-medium text-blue-700 mb-2",children:"Vos choix :"}),o.jsxs("ul",{className:"list-disc list-inside text-blue-700 space-y-1",children:[o.jsxs("li",{children:["Situation : ",n.situation.label]}),o.jsxs("li",{children:["Personnage : ",n.personnage.label]}),o.jsxs("li",{children:["Lieu : ",n.lieu.label]}),r&&o.jsxs("li",{children:["Style narratif : ",r.dominantStyle]})]})]}),o.jsx("div",{className:"prose prose-lg max-w-none mb-6",children:s.split(`
`).map((y,x)=>{const T=y.replace(/\(\.\.\.\)/g,'<span class="text-gray-400">(...)</span>').replace(/\.\.\.\.\./g,'<span class="text-gray-400">.....</span>').replace(/\.\.\./g,'<span class="text-gray-400">...</span>').replace(/;/g,'<span class="text-gray-400">;</span>');return o.jsx("p",{className:"mb-4 leading-relaxed",dangerouslySetInnerHTML:{__html:T}},x)})}),o.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-4 mb-6",children:[o.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Guide des balises audio :"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[sensuel]"})," - ton sensuel et séduisant"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[excite]"})," - ton excité et passionné"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[jouissance]"})," - ton d'extase"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[murmure]"})," - ton doux et intime"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[intense]"})," - ton intense et profond"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-blue-600",children:"[doux]"})," - ton tendre et délicat"]}),o.jsxs("div",{className:"col-span-2 space-y-1",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-gray-400",children:";"})," - micro-pause entre actions"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-gray-400",children:"..."})," - pause naturelle"]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-gray-400",children:"....."})," - pause intense/dramatique"]})]})]})]}),o.jsxs("div",{className:"flex justify-between pt-6",children:[o.jsx("button",{onClick:()=>e("/custom-story"),className:"btn-secondary",children:"Nouvelle histoire"}),o.jsxs("div",{className:"space-x-4",children:[o.jsx("button",{onClick:v,className:"btn-secondary",children:"Régénérer"}),o.jsxs("button",{onClick:g,className:`btn-primary relative ${f?"bg-green-600":""}`,children:[f?"Copié !":"Copier l'histoire",f&&o.jsxs("span",{className:"absolute -top-2 -right-2 flex h-4 w-4",children:[o.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),o.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-green-500"})]})]})]})]})]})})},Jf=()=>{const e=Me(),[t,n]=E.useState(""),[r,s]=E.useState(10),[i,l]=E.useState(!1),[a,u]=E.useState(""),c=g=>{if(g.preventDefault(),!t.trim()){u("Veuillez décrire votre fantasme avant de continuer.");return}if(t.trim().length<20){u("Veuillez fournir une description plus détaillée pour obtenir une meilleure histoire.");return}l(!0);const y=ir.getProfiles(),x=y.length>0?y[0]:null;e("/free-fantasy-result",{state:{fantasyText:t,existingProfile:x,readingTime:r}})},f=g=>{n(g.target.value),a&&u("")},m=["Je fantasme sur une rencontre imprévue dans un ascenseur qui tombe en panne...","J'aimerais être surprise par mon partenaire qui m'attend dans la chambre d'hôtel...","Je rêve d'une aventure avec un inconnu lors d'un voyage...","J'imagine une soirée où je suis le centre d'attention de plusieurs personnes...","Je voudrais vivre une expérience de soumission consentie avec quelqu'un qui sait exactement quoi faire..."],v=m[Math.floor(Math.random()*m.length)];return o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Fantasme Libre"}),o.jsx("p",{className:"text-gray-600 mb-6",children:"Décrivez librement votre fantasme, vos envies ou une scène qui vous excite. Notre IA analysera votre texte et créera une histoire sur mesure qui correspond exactement à ce que vous recherchez."}),o.jsxs("form",{onSubmit:c,className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{htmlFor:"fantasy-text",className:"block text-sm font-medium text-gray-700 mb-2",children:"Votre fantasme en détail"}),o.jsx("textarea",{id:"fantasy-text",rows:8,className:`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${a?"border-red-500":"border-gray-300"}`,placeholder:v,value:t,onChange:f}),a&&o.jsx("p",{className:"mt-2 text-sm text-red-600",children:a})]}),o.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-4 mb-4",children:[o.jsx("h3",{className:"text-sm font-medium text-blue-700 mb-2",children:"Suggestions pour vous aider :"}),o.jsxs("ul",{className:"list-disc list-inside text-blue-700 space-y-1 text-sm",children:[o.jsx("li",{children:"Décrivez le lieu, l'ambiance et les personnes impliquées"}),o.jsx("li",{children:"Précisez ce qui vous excite particulièrement dans cette situation"}),o.jsx("li",{children:"Mentionnez le niveau d'intensité que vous recherchez"}),o.jsx("li",{children:"Indiquez si vous préférez être dominante ou soumise"}),o.jsx("li",{children:"N'hésitez pas à être spécifique sur vos désirs"})]})]}),o.jsxs("div",{className:"mb-6",children:[o.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Temps de lecture souhaité"}),o.jsx(io,{value:r,onChange:s})]}),o.jsxs("div",{className:"flex justify-between pt-4",children:[o.jsx("button",{type:"button",onClick:()=>e("/"),className:"btn-secondary",children:"Retour"}),o.jsx("button",{type:"submit",className:"btn-primary",disabled:i,children:i?"Génération en cours...":"Générer mon histoire"})]})]})]})})},Qf=()=>{const e=Me(),t=vn(),{fantasyText:n,existingProfile:r}=t.state||{},[s,i]=E.useState(""),[l,a]=E.useState(!0),[u,c]=E.useState(null),[f,m]=E.useState(!1);E.useEffect(()=>{if(!n){c("Aucun fantasme trouvé. Veuillez retourner à la saisie."),a(!1);return}v()},[]);const v=async()=>{var y;try{a(!0),c(null),m(!1);const x=((y=t.state)==null?void 0:y.readingTime)||10,T=await lo.generateFreeFantasyStory(n,r,x);i(T)}catch(x){c("Une erreur est survenue lors de la génération de l'histoire."),console.error("Erreur de génération:",x)}finally{a(!1)}},g=()=>{navigator.clipboard.writeText(s).then(()=>{m(!0),setTimeout(()=>m(!1),2e3)}).catch(y=>{console.error("Erreur de copie:",y),alert("Impossible de copier l'histoire. Veuillez réessayer.")})};return l?o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsx("div",{className:"question-card text-center",children:o.jsxs("div",{className:"animate-pulse space-y-4",children:[o.jsx("div",{className:"w-24 h-24 mx-auto",children:o.jsxs("svg",{className:"animate-spin text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),o.jsx("h2",{className:"text-2xl font-bold",children:"Création de votre fantasme..."}),o.jsxs("p",{className:"text-gray-600",children:["Notre IA analyse votre texte et crée une histoire personnalisée.",o.jsx("br",{}),"Cela peut prendre quelques instants."]})]})})}):u?o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold text-red-600 mb-4",children:"Une erreur est survenue"}),o.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-md p-4 mb-6",children:[o.jsx("p",{className:"text-red-700",children:u}),o.jsxs("ul",{className:"list-disc list-inside mt-2 text-red-600",children:[o.jsx("li",{children:"Une erreur de connexion avec notre service"}),o.jsx("li",{children:"Un problème temporaire avec l'API"}),o.jsx("li",{children:"Des données manquantes dans votre description"})]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("button",{onClick:()=>e("/free-fantasy"),className:"btn-secondary",children:"Retour à la saisie"}),o.jsx("button",{onClick:v,className:"btn-primary",children:"Réessayer la génération"})]})]})}):o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"question-card",children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Votre fantasme personnalisé"}),o.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-4 mb-6",children:[o.jsx("h3",{className:"text-sm font-medium text-blue-700 mb-2",children:"Votre fantasme :"}),o.jsxs("p",{className:"text-blue-700 text-sm italic",children:['"',n.length>150?n.substring(0,150)+"...":n,'"']}),r&&o.jsxs("p",{className:"text-blue-700 text-sm mt-2",children:["Style narratif adapté : ",r.dominantStyle]})]}),o.jsx("div",{className:"prose prose-lg max-w-none mb-6",children:s.split(`
`).map((y,x)=>{const T=y.replace(/\(\.\.\.\)/g,'<span class="text-gray-400">(...)</span>').replace(/\.\.\.\.\./g,'<span class="text-gray-400">.....</span>').replace(/\.\.\./g,'<span class="text-gray-400">...</span>').replace(/;/g,'<span class="text-gray-400">;</span>');return o.jsx("p",{className:"mb-4 leading-relaxed",dangerouslySetInnerHTML:{__html:T}},x)})}),o.jsxs("div",{className:"flex justify-between pt-6",children:[o.jsx("button",{onClick:()=>e("/free-fantasy"),className:"btn-secondary",children:"Nouveau fantasme"}),o.jsxs("div",{className:"space-x-4",children:[o.jsx("button",{onClick:v,className:"btn-secondary",children:"Régénérer"}),o.jsxs("button",{onClick:g,className:`btn-primary relative ${f?"bg-green-600":""}`,children:[f?"Copié !":"Copier l'histoire",f&&o.jsxs("span",{className:"absolute -top-2 -right-2 flex h-4 w-4",children:[o.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),o.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-green-500"})]})]})]})]})]})})};function Gf(){const e=vn(),[t,n]=E.useState({personalInfo:{},sensoryAnswers:{},excitationAnswers:{}}),[r,s]=E.useState(null),i=E.useCallback(u=>{n(c=>({...c,personalInfo:u}))},[]),l=E.useCallback(u=>{n(c=>({...c,sensoryAnswers:u}))},[]),a=E.useCallback(u=>{n(c=>({...c,excitationAnswers:u}))},[]);return o.jsxs("div",{className:"min-h-screen bg-gray-100",children:[o.jsx("header",{className:"bg-white shadow-sm",children:o.jsx("div",{className:"max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8",children:o.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Générateur d'Histoires Sensuelles"})})}),o.jsxs("main",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:[e.pathname!=="/"&&o.jsx(Of,{}),o.jsxs(xf,{children:[o.jsx(Ne,{path:"/",element:o.jsx(wf,{})}),o.jsx(Ne,{path:"/personal-info",element:o.jsx(If,{initialData:t.personalInfo,onSubmit:i})}),o.jsx(Ne,{path:"/sensory-questionnaire",element:o.jsx(Rf,{initialData:t.sensoryAnswers,onSubmit:l})}),o.jsx(Ne,{path:"/excitation-questionnaire",element:o.jsx(Pf,{initialData:t.excitationAnswers,onSubmit:a})}),o.jsx(Ne,{path:"/story-result",element:o.jsx(kf,{userProfile:t})}),o.jsx(Ne,{path:"/random-story-generator",element:o.jsx(Lf,{onSubmit:s})}),o.jsx(Ne,{path:"/random-story-result",element:o.jsx(Vf,{randomStoryData:r})}),o.jsx(Ne,{path:"/custom-story",element:o.jsx($f,{})}),o.jsx(Ne,{path:"/custom-story-result",element:o.jsx(Bf,{})}),o.jsx(Ne,{path:"/free-fantasy",element:o.jsx(Jf,{})}),o.jsx(Ne,{path:"/free-fantasy-result",element:o.jsx(Qf,{})})]})]})]})}pi.createRoot(document.getElementById("root")).render(o.jsx(ba.StrictMode,{children:o.jsx(Ef,{children:o.jsx(Gf,{})})}));
