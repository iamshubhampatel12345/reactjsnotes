(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))M(_);new MutationObserver(_=>{for(const O of _)if(O.type==="childList")for(const b of O.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&M(b)}).observe(document,{childList:!0,subtree:!0});function m(_){const O={};return _.integrity&&(O.integrity=_.integrity),_.referrerPolicy&&(O.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?O.credentials="include":_.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function M(_){if(_.ep)return;_.ep=!0;const O=m(_);fetch(_.href,O)}})();var Pl={exports:{}},wr={},Rl={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Dd(){if(Pu)return U;Pu=1;var x=Symbol.for("react.element"),E=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),b=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ve=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),re=Symbol.iterator;function Z(c){return c===null||typeof c!="object"?null:(c=re&&c[re]||c["@@iterator"],typeof c=="function"?c:null)}var Ve={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$e=Object.assign,ee={};function J(c,g,z){this.props=c,this.context=g,this.refs=ee,this.updater=z||Ve}J.prototype.isReactComponent={},J.prototype.setState=function(c,g){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,g,"setState")},J.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function gt(){}gt.prototype=J.prototype;function at(c,g,z){this.props=c,this.context=g,this.refs=ee,this.updater=z||Ve}var be=at.prototype=new gt;be.constructor=at,$e(be,J.prototype),be.isPureReactComponent=!0;var Se=Array.isArray,Ze=Object.prototype.hasOwnProperty,Re={current:null},Le={key:!0,ref:!0,__self:!0,__source:!0};function Qe(c,g,z){var B,W={},H=null,K=null;if(g!=null)for(B in g.ref!==void 0&&(K=g.ref),g.key!==void 0&&(H=""+g.key),g)Ze.call(g,B)&&!Le.hasOwnProperty(B)&&(W[B]=g[B]);var Q=arguments.length-2;if(Q===1)W.children=z;else if(1<Q){for(var te=Array(Q),Be=0;Be<Q;Be++)te[Be]=arguments[Be+2];W.children=te}if(c&&c.defaultProps)for(B in Q=c.defaultProps,Q)W[B]===void 0&&(W[B]=Q[B]);return{$$typeof:x,type:c,key:H,ref:K,props:W,_owner:Re.current}}function Tt(c,g){return{$$typeof:x,type:c.type,key:g,ref:c.ref,props:c.props,_owner:c._owner}}function yt(c){return typeof c=="object"&&c!==null&&c.$$typeof===x}function Kt(c){var g={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(z){return g[z]})}var ut=/\/+/g;function Ue(c,g){return typeof c=="object"&&c!==null&&c.key!=null?Kt(""+c.key):g.toString(36)}function et(c,g,z,B,W){var H=typeof c;(H==="undefined"||H==="boolean")&&(c=null);var K=!1;if(c===null)K=!0;else switch(H){case"string":case"number":K=!0;break;case"object":switch(c.$$typeof){case x:case E:K=!0}}if(K)return K=c,W=W(K),c=B===""?"."+Ue(K,0):B,Se(W)?(z="",c!=null&&(z=c.replace(ut,"$&/")+"/"),et(W,g,z,"",function(Be){return Be})):W!=null&&(yt(W)&&(W=Tt(W,z+(!W.key||K&&K.key===W.key?"":(""+W.key).replace(ut,"$&/")+"/")+c)),g.push(W)),1;if(K=0,B=B===""?".":B+":",Se(c))for(var Q=0;Q<c.length;Q++){H=c[Q];var te=B+Ue(H,Q);K+=et(H,g,z,te,W)}else if(te=Z(c),typeof te=="function")for(c=te.call(c),Q=0;!(H=c.next()).done;)H=H.value,te=B+Ue(H,Q++),K+=et(H,g,z,te,W);else if(H==="object")throw g=String(c),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return K}function ct(c,g,z){if(c==null)return c;var B=[],W=0;return et(c,B,"","",function(H){return g.call(z,H,W++)}),B}function _e(c){if(c._status===-1){var g=c._result;g=g(),g.then(function(z){(c._status===0||c._status===-1)&&(c._status=1,c._result=z)},function(z){(c._status===0||c._status===-1)&&(c._status=2,c._result=z)}),c._status===-1&&(c._status=0,c._result=g)}if(c._status===1)return c._result.default;throw c._result}var se={current:null},S={transition:null},A={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:S,ReactCurrentOwner:Re};function R(){throw Error("act(...) is not supported in production builds of React.")}return U.Children={map:ct,forEach:function(c,g,z){ct(c,function(){g.apply(this,arguments)},z)},count:function(c){var g=0;return ct(c,function(){g++}),g},toArray:function(c){return ct(c,function(g){return g})||[]},only:function(c){if(!yt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},U.Component=J,U.Fragment=m,U.Profiler=_,U.PureComponent=at,U.StrictMode=M,U.Suspense=$,U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,U.act=R,U.cloneElement=function(c,g,z){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var B=$e({},c.props),W=c.key,H=c.ref,K=c._owner;if(g!=null){if(g.ref!==void 0&&(H=g.ref,K=Re.current),g.key!==void 0&&(W=""+g.key),c.type&&c.type.defaultProps)var Q=c.type.defaultProps;for(te in g)Ze.call(g,te)&&!Le.hasOwnProperty(te)&&(B[te]=g[te]===void 0&&Q!==void 0?Q[te]:g[te])}var te=arguments.length-2;if(te===1)B.children=z;else if(1<te){Q=Array(te);for(var Be=0;Be<te;Be++)Q[Be]=arguments[Be+2];B.children=Q}return{$$typeof:x,type:c.type,key:W,ref:H,props:B,_owner:K}},U.createContext=function(c){return c={$$typeof:b,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:O,_context:c},c.Consumer=c},U.createElement=Qe,U.createFactory=function(c){var g=Qe.bind(null,c);return g.type=c,g},U.createRef=function(){return{current:null}},U.forwardRef=function(c){return{$$typeof:le,render:c}},U.isValidElement=yt,U.lazy=function(c){return{$$typeof:me,_payload:{_status:-1,_result:c},_init:_e}},U.memo=function(c,g){return{$$typeof:ve,type:c,compare:g===void 0?null:g}},U.startTransition=function(c){var g=S.transition;S.transition={};try{c()}finally{S.transition=g}},U.unstable_act=R,U.useCallback=function(c,g){return se.current.useCallback(c,g)},U.useContext=function(c){return se.current.useContext(c)},U.useDebugValue=function(){},U.useDeferredValue=function(c){return se.current.useDeferredValue(c)},U.useEffect=function(c,g){return se.current.useEffect(c,g)},U.useId=function(){return se.current.useId()},U.useImperativeHandle=function(c,g,z){return se.current.useImperativeHandle(c,g,z)},U.useInsertionEffect=function(c,g){return se.current.useInsertionEffect(c,g)},U.useLayoutEffect=function(c,g){return se.current.useLayoutEffect(c,g)},U.useMemo=function(c,g){return se.current.useMemo(c,g)},U.useReducer=function(c,g,z){return se.current.useReducer(c,g,z)},U.useRef=function(c){return se.current.useRef(c)},U.useState=function(c){return se.current.useState(c)},U.useSyncExternalStore=function(c,g,z){return se.current.useSyncExternalStore(c,g,z)},U.useTransition=function(){return se.current.useTransition()},U.version="18.3.1",U}var Ru;function _l(){return Ru||(Ru=1,Rl.exports=Dd()),Rl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function zd(){if(Tu)return wr;Tu=1;var x=_l(),E=Symbol.for("react.element"),m=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,_=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function b(le,$,ve){var me,re={},Z=null,Ve=null;ve!==void 0&&(Z=""+ve),$.key!==void 0&&(Z=""+$.key),$.ref!==void 0&&(Ve=$.ref);for(me in $)M.call($,me)&&!O.hasOwnProperty(me)&&(re[me]=$[me]);if(le&&le.defaultProps)for(me in $=le.defaultProps,$)re[me]===void 0&&(re[me]=$[me]);return{$$typeof:E,type:le,key:Z,ref:Ve,props:re,_owner:_.current}}return wr.Fragment=m,wr.jsx=b,wr.jsxs=b,wr}var Nu;function Ud(){return Nu||(Nu=1,Pl.exports=zd()),Pl.exports}var k=Ud(),Io={},Tl={exports:{}},ze={},Nl={exports:{}},Ll={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Bd(){return Lu||(Lu=1,(function(x){function E(S,A){var R=S.length;S.push(A);e:for(;0<R;){var c=R-1>>>1,g=S[c];if(0<_(g,A))S[c]=A,S[R]=g,R=c;else break e}}function m(S){return S.length===0?null:S[0]}function M(S){if(S.length===0)return null;var A=S[0],R=S.pop();if(R!==A){S[0]=R;e:for(var c=0,g=S.length,z=g>>>1;c<z;){var B=2*(c+1)-1,W=S[B],H=B+1,K=S[H];if(0>_(W,R))H<g&&0>_(K,W)?(S[c]=K,S[H]=R,c=H):(S[c]=W,S[B]=R,c=B);else if(H<g&&0>_(K,R))S[c]=K,S[H]=R,c=H;else break e}}return A}function _(S,A){var R=S.sortIndex-A.sortIndex;return R!==0?R:S.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var O=performance;x.unstable_now=function(){return O.now()}}else{var b=Date,le=b.now();x.unstable_now=function(){return b.now()-le}}var $=[],ve=[],me=1,re=null,Z=3,Ve=!1,$e=!1,ee=!1,J=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,at=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function be(S){for(var A=m(ve);A!==null;){if(A.callback===null)M(ve);else if(A.startTime<=S)M(ve),A.sortIndex=A.expirationTime,E($,A);else break;A=m(ve)}}function Se(S){if(ee=!1,be(S),!$e)if(m($)!==null)$e=!0,_e(Ze);else{var A=m(ve);A!==null&&se(Se,A.startTime-S)}}function Ze(S,A){$e=!1,ee&&(ee=!1,gt(Qe),Qe=-1),Ve=!0;var R=Z;try{for(be(A),re=m($);re!==null&&(!(re.expirationTime>A)||S&&!Kt());){var c=re.callback;if(typeof c=="function"){re.callback=null,Z=re.priorityLevel;var g=c(re.expirationTime<=A);A=x.unstable_now(),typeof g=="function"?re.callback=g:re===m($)&&M($),be(A)}else M($);re=m($)}if(re!==null)var z=!0;else{var B=m(ve);B!==null&&se(Se,B.startTime-A),z=!1}return z}finally{re=null,Z=R,Ve=!1}}var Re=!1,Le=null,Qe=-1,Tt=5,yt=-1;function Kt(){return!(x.unstable_now()-yt<Tt)}function ut(){if(Le!==null){var S=x.unstable_now();yt=S;var A=!0;try{A=Le(!0,S)}finally{A?Ue():(Re=!1,Le=null)}}else Re=!1}var Ue;if(typeof at=="function")Ue=function(){at(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=ut,Ue=function(){ct.postMessage(null)}}else Ue=function(){J(ut,0)};function _e(S){Le=S,Re||(Re=!0,Ue())}function se(S,A){Qe=J(function(){S(x.unstable_now())},A)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(S){S.callback=null},x.unstable_continueExecution=function(){$e||Ve||($e=!0,_e(Ze))},x.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<S?Math.floor(1e3/S):5},x.unstable_getCurrentPriorityLevel=function(){return Z},x.unstable_getFirstCallbackNode=function(){return m($)},x.unstable_next=function(S){switch(Z){case 1:case 2:case 3:var A=3;break;default:A=Z}var R=Z;Z=A;try{return S()}finally{Z=R}},x.unstable_pauseExecution=function(){},x.unstable_requestPaint=function(){},x.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var R=Z;Z=S;try{return A()}finally{Z=R}},x.unstable_scheduleCallback=function(S,A,R){var c=x.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?c+R:c):R=c,S){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=R+g,S={id:me++,callback:A,priorityLevel:S,startTime:R,expirationTime:g,sortIndex:-1},R>c?(S.sortIndex=R,E(ve,S),m($)===null&&S===m(ve)&&(ee?(gt(Qe),Qe=-1):ee=!0,se(Se,R-c))):(S.sortIndex=g,E($,S),$e||Ve||($e=!0,_e(Ze))),S},x.unstable_shouldYield=Kt,x.unstable_wrapCallback=function(S){var A=Z;return function(){var R=Z;Z=A;try{return S.apply(this,arguments)}finally{Z=R}}}})(Ll)),Ll}var _u;function Od(){return _u||(_u=1,Nl.exports=Bd()),Nl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function Fd(){if(Iu)return ze;Iu=1;var x=_l(),E=Od();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M=new Set,_={};function O(e,t){b(e,t),b(e+"Capture",t)}function b(e,t){for(_[e]=t,e=0;e<t.length;e++)M.add(t[e])}var le=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$=Object.prototype.hasOwnProperty,ve=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,me={},re={};function Z(e){return $.call(re,e)?!0:$.call(me,e)?!1:ve.test(e)?re[e]=!0:(me[e]=!0,!1)}function Ve(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $e(e,t,n,r){if(t===null||typeof t>"u"||Ve(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ee(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new ee(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new ee(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new ee(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new ee(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new ee(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new ee(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new ee(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new ee(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var gt=/[\-:]([a-z])/g;function at(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gt,at);J[t]=new ee(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gt,at);J[t]=new ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gt,at);J[t]=new ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new ee(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function be(e,t,n,r){var o=J.hasOwnProperty(t)?J[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($e(t,n,o,r)&&(n=null),r||o===null?Z(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Se=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ze=Symbol.for("react.element"),Re=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),Qe=Symbol.for("react.strict_mode"),Tt=Symbol.for("react.profiler"),yt=Symbol.for("react.provider"),Kt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),S=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,c;function g(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var z=!1;function B(e,t){if(!e||z)return"";z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function W(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1),e;case 11:return e=B(e.type.render,!1),e;case 1:return e=B(e.type,!0),e;default:return""}}function H(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Le:return"Fragment";case Re:return"Portal";case Tt:return"Profiler";case Qe:return"StrictMode";case Ue:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kt:return(e.displayName||"Context")+".Consumer";case yt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:H(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return H(e(t))}catch{}}return null}function K(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===Qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function te(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Be(e){var t=te(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Be(e))}function Il(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=te(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jo(e,t){var n=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function jl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Q(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Al(e,t){t=t.checked,t!=null&&be(e,"checked",t,!1)}function Ao(e,t){Al(e,t);var n=Q(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mo(e,t.type,Q(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ml(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mo(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Q(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Do(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(Mn(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Q(n)}}function zl(e,t){var n=Q(t.value),r=Q(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ul(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Ol=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ou=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){Ou.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function Fl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function Wl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Fl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Fu=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uo(e,t){if(t){if(Fu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function Bo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oo=null;function Fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wo=null,cn=null,dn=null;function Hl(e){if(e=or(e)){if(typeof Wo!="function")throw Error(m(280));var t=e.stateNode;t&&(t=Qr(t),Wo(e.stateNode,e.type,t))}}function Vl(e){cn?dn?dn.push(e):dn=[e]:cn=e}function $l(){if(cn){var e=cn,t=dn;if(dn=cn=null,Hl(e),t)for(e=0;e<t.length;e++)Hl(t[e])}}function Ql(e,t){return e(t)}function Gl(){}var Ho=!1;function Jl(e,t,n){if(Ho)return e(t,n);Ho=!0;try{return Ql(e,t,n)}finally{Ho=!1,(cn!==null||dn!==null)&&(Gl(),$l())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=Qr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Vo=!1;if(le)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Vo=!1}function Wu(e,t,n,r,o,i,l,s,a){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var On=!1,Cr=null,Er=!1,$o=null,Hu={onError:function(e){On=!0,Cr=e}};function Vu(e,t,n,r,o,i,l,s,a){On=!1,Cr=null,Wu.apply(Hu,arguments)}function $u(e,t,n,r,o,i,l,s,a){if(Vu.apply(this,arguments),On){if(On){var p=Cr;On=!1,Cr=null}else throw Error(m(198));Er||(Er=!0,$o=p)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yl(e){if(Yt(e)!==e)throw Error(m(188))}function Qu(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Yl(o),e;if(i===r)return Yl(o),t;i=i.sibling}throw Error(m(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function Xl(e){return e=Qu(e),e!==null?ql(e):null}function ql(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ql(e);if(t!==null)return t;e=e.sibling}return null}var bl=E.unstable_scheduleCallback,Zl=E.unstable_cancelCallback,Gu=E.unstable_shouldYield,Ju=E.unstable_requestPaint,ue=E.unstable_now,Ku=E.unstable_getCurrentPriorityLevel,Qo=E.unstable_ImmediatePriority,es=E.unstable_UserBlockingPriority,Pr=E.unstable_NormalPriority,Yu=E.unstable_LowPriority,ts=E.unstable_IdlePriority,Rr=null,dt=null;function Xu(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Rr,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Zu,qu=Math.log,bu=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(qu(e)/bu|0)|0}var Tr=64,Nr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Fn(s):(i&=l,i!==0&&(r=Fn(i)))}else l=n&~o,l!==0?r=Fn(l):i!==0&&(r=Fn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),o=1<<n,r|=e[n],t&=~o;return r}function ec(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-tt(i),s=1<<l,a=o[l];a===-1?((s&n)===0||(s&r)!==0)&&(o[l]=ec(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ns(){var e=Tr;return Tr<<=1,(Tr&4194240)===0&&(Tr=64),e}function Jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function nc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-tt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ko(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function rs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var os,Yo,is,ls,ss,Xo=!1,_r=[],Nt=null,Lt=null,_t=null,Hn=new Map,Vn=new Map,It=[],rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function as(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function $n(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=or(t),t!==null&&Yo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function oc(e,t,n,r,o){switch(t){case"focusin":return Nt=$n(Nt,e,t,n,r,o),!0;case"dragenter":return Lt=$n(Lt,e,t,n,r,o),!0;case"mouseover":return _t=$n(_t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Hn.set(i,$n(Hn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Vn.set(i,$n(Vn.get(i)||null,e,t,n,r,o)),!0}return!1}function us(e){var t=Xt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=Kl(n),t!==null){e.blockedOn=t,ss(e.priority,function(){is(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oo=r,n.target.dispatchEvent(r),Oo=null}else return t=or(n),t!==null&&Yo(t),e.blockedOn=n,!1;t.shift()}return!0}function cs(e,t,n){Ir(e)&&n.delete(t)}function ic(){Xo=!1,Nt!==null&&Ir(Nt)&&(Nt=null),Lt!==null&&Ir(Lt)&&(Lt=null),_t!==null&&Ir(_t)&&(_t=null),Hn.forEach(cs),Vn.forEach(cs)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Xo||(Xo=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,ic)))}function Gn(e){function t(o){return Qn(o,e)}if(0<_r.length){Qn(_r[0],e);for(var n=1;n<_r.length;n++){var r=_r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&Qn(Nt,e),Lt!==null&&Qn(Lt,e),_t!==null&&Qn(_t,e),Hn.forEach(t),Vn.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)us(n),n.blockedOn===null&&It.shift()}var fn=Se.ReactCurrentBatchConfig,jr=!0;function lc(e,t,n,r){var o=G,i=fn.transition;fn.transition=null;try{G=1,qo(e,t,n,r)}finally{G=o,fn.transition=i}}function sc(e,t,n,r){var o=G,i=fn.transition;fn.transition=null;try{G=4,qo(e,t,n,r)}finally{G=o,fn.transition=i}}function qo(e,t,n,r){if(jr){var o=bo(e,t,n,r);if(o===null)hi(e,t,r,Ar,n),as(e,r);else if(oc(o,e,t,n,r))r.stopPropagation();else if(as(e,r),t&4&&-1<rc.indexOf(e)){for(;o!==null;){var i=or(o);if(i!==null&&os(i),i=bo(e,t,n,r),i===null&&hi(e,t,r,Ar,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else hi(e,t,r,null,n)}}var Ar=null;function bo(e,t,n,r){if(Ar=null,e=Fo(r),e=Xt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ku()){case Qo:return 1;case es:return 4;case Pr:case Yu:return 16;case ts:return 536870912;default:return 16}default:return 16}}var jt=null,Zo=null,Mr=null;function fs(){if(Mr)return Mr;var e,t=Zo,n=t.length,r,o="value"in jt?jt.value:jt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Mr=o.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function ps(){return!1}function Oe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zr:ps,this.isPropagationStopped=ps,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=Oe(pn),Jn=R({},pn,{view:0,detail:0}),ac=Oe(Jn),ti,ni,Kn,Ur=R({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(ti=e.screenX-Kn.screenX,ni=e.screenY-Kn.screenY):ni=ti=0,Kn=e),ti)},movementY:function(e){return"movementY"in e?e.movementY:ni}}),ms=Oe(Ur),uc=R({},Ur,{dataTransfer:0}),cc=Oe(uc),dc=R({},Jn,{relatedTarget:0}),ri=Oe(dc),fc=R({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),pc=Oe(fc),mc=R({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hc=Oe(mc),gc=R({},pn,{data:0}),hs=Oe(gc),yc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wc[e])?!!t[e]:!1}function oi(){return kc}var Sc=R({},Jn,{key:function(e){if(e.key){var t=yc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xc=Oe(Sc),Cc=R({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gs=Oe(Cc),Ec=R({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),Pc=Oe(Ec),Rc=R({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tc=Oe(Rc),Nc=R({},Ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lc=Oe(Nc),_c=[9,13,27,32],ii=le&&"CompositionEvent"in window,Yn=null;le&&"documentMode"in document&&(Yn=document.documentMode);var Ic=le&&"TextEvent"in window&&!Yn,ys=le&&(!ii||Yn&&8<Yn&&11>=Yn),vs=" ",ws=!1;function ks(e,t){switch(e){case"keyup":return _c.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ss(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function jc(e,t){switch(e){case"compositionend":return Ss(t);case"keypress":return t.which!==32?null:(ws=!0,vs);case"textInput":return e=t.data,e===vs&&ws?null:e;default:return null}}function Ac(e,t){if(mn)return e==="compositionend"||!ii&&ks(e,t)?(e=fs(),Mr=Zo=jt=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ys&&t.locale!=="ko"?null:t.data;default:return null}}var Mc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mc[e.type]:t==="textarea"}function Cs(e,t,n,r){Vl(r),t=Hr(t,"onChange"),0<t.length&&(n=new ei("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,qn=null;function Dc(e){Ws(e,0)}function Br(e){var t=wn(e);if(Il(t))return e}function zc(e,t){if(e==="change")return t}var Es=!1;if(le){var li;if(le){var si="oninput"in document;if(!si){var Ps=document.createElement("div");Ps.setAttribute("oninput","return;"),si=typeof Ps.oninput=="function"}li=si}else li=!1;Es=li&&(!document.documentMode||9<document.documentMode)}function Rs(){Xn&&(Xn.detachEvent("onpropertychange",Ts),qn=Xn=null)}function Ts(e){if(e.propertyName==="value"&&Br(qn)){var t=[];Cs(t,qn,e,Fo(e)),Jl(Dc,t)}}function Uc(e,t,n){e==="focusin"?(Rs(),Xn=t,qn=n,Xn.attachEvent("onpropertychange",Ts)):e==="focusout"&&Rs()}function Bc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Br(qn)}function Oc(e,t){if(e==="click")return Br(t)}function Fc(e,t){if(e==="input"||e==="change")return Br(t)}function Wc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Wc;function bn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!$.call(t,o)||!nt(e[o],t[o]))return!1}return!0}function Ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ls(e,t){var n=Ns(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ns(n)}}function _s(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_s(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Is(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function ai(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hc(e){var t=Is(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_s(n.ownerDocument.documentElement,n)){if(r!==null&&ai(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ls(n,i);var l=Ls(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vc=le&&"documentMode"in document&&11>=document.documentMode,hn=null,ui=null,Zn=null,ci=!1;function js(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ci||hn==null||hn!==Sr(r)||(r=hn,"selectionStart"in r&&ai(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&bn(Zn,r)||(Zn=r,r=Hr(ui,"onSelect"),0<r.length&&(t=new ei("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionend:Or("Transition","TransitionEnd")},di={},As={};le&&(As=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Fr(e){if(di[e])return di[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in As)return di[e]=t[n];return e}var Ms=Fr("animationend"),Ds=Fr("animationiteration"),zs=Fr("animationstart"),Us=Fr("transitionend"),Bs=new Map,Os="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){Bs.set(e,t),O(t,[e])}for(var fi=0;fi<Os.length;fi++){var pi=Os[fi],$c=pi.toLowerCase(),Qc=pi[0].toUpperCase()+pi.slice(1);At($c,"on"+Qc)}At(Ms,"onAnimationEnd"),At(Ds,"onAnimationIteration"),At(zs,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(Us,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),O("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),O("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),O("onBeforeInput",["compositionend","keypress","textInput","paste"]),O("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),O("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),O("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Fs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$u(r,t,void 0,e),e.currentTarget=null}function Ws(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,p=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Fs(o,s,p),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,p=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Fs(o,s,p),i=a}}}if(Er)throw e=$o,Er=!1,$o=null,e}function X(e,t){var n=t[Si];n===void 0&&(n=t[Si]=new Set);var r=e+"__bubble";n.has(r)||(Hs(t,e,2,!1),n.add(r))}function mi(e,t,n){var r=0;t&&(r|=4),Hs(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Wr]){e[Wr]=!0,M.forEach(function(n){n!=="selectionchange"&&(Gc.has(n)||mi(n,!1,e),mi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,mi("selectionchange",!1,t))}}function Hs(e,t,n,r){switch(ds(t)){case 1:var o=lc;break;case 4:o=sc;break;default:o=qo}n=o.bind(null,t,n,e),o=void 0,!Vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Xt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Jl(function(){var p=i,y=Fo(n),v=[];e:{var h=Bs.get(e);if(h!==void 0){var C=ei,T=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":C=xc;break;case"focusin":T="focus",C=ri;break;case"focusout":T="blur",C=ri;break;case"beforeblur":case"afterblur":C=ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Pc;break;case Ms:case Ds:case zs:C=pc;break;case Us:C=Tc;break;case"scroll":C=ac;break;case"wheel":C=Lc;break;case"copy":case"cut":case"paste":C=hc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=gs}var N=(t&4)!==0,ce=!N&&e==="scroll",d=N?h!==null?h+"Capture":null:h;N=[];for(var u=p,f;u!==null;){f=u;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=Un(u,d),w!=null&&N.push(nr(u,w,f)))),ce)break;u=u.return}0<N.length&&(h=new C(h,T,null,n,y),v.push({event:h,listeners:N}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",h&&n!==Oo&&(T=n.relatedTarget||n.fromElement)&&(Xt(T)||T[vt]))break e;if((C||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,C?(T=n.relatedTarget||n.toElement,C=p,T=T?Xt(T):null,T!==null&&(ce=Yt(T),T!==ce||T.tag!==5&&T.tag!==6)&&(T=null)):(C=null,T=p),C!==T)){if(N=ms,w="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(N=gs,w="onPointerLeave",d="onPointerEnter",u="pointer"),ce=C==null?h:wn(C),f=T==null?h:wn(T),h=new N(w,u+"leave",C,n,y),h.target=ce,h.relatedTarget=f,w=null,Xt(y)===p&&(N=new N(d,u+"enter",T,n,y),N.target=f,N.relatedTarget=ce,w=N),ce=w,C&&T)t:{for(N=C,d=T,u=0,f=N;f;f=yn(f))u++;for(f=0,w=d;w;w=yn(w))f++;for(;0<u-f;)N=yn(N),u--;for(;0<f-u;)d=yn(d),f--;for(;u--;){if(N===d||d!==null&&N===d.alternate)break t;N=yn(N),d=yn(d)}N=null}else N=null;C!==null&&Vs(v,h,C,N,!1),T!==null&&ce!==null&&Vs(v,ce,T,N,!0)}}e:{if(h=p?wn(p):window,C=h.nodeName&&h.nodeName.toLowerCase(),C==="select"||C==="input"&&h.type==="file")var L=zc;else if(xs(h))if(Es)L=Fc;else{L=Bc;var I=Uc}else(C=h.nodeName)&&C.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=Oc);if(L&&(L=L(e,p))){Cs(v,L,n,y);break e}I&&I(e,h,p),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Mo(h,"number",h.value)}switch(I=p?wn(p):window,e){case"focusin":(xs(I)||I.contentEditable==="true")&&(hn=I,ui=p,Zn=null);break;case"focusout":Zn=ui=hn=null;break;case"mousedown":ci=!0;break;case"contextmenu":case"mouseup":case"dragend":ci=!1,js(v,n,y);break;case"selectionchange":if(Vc)break;case"keydown":case"keyup":js(v,n,y)}var j;if(ii)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else mn?ks(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(ys&&n.locale!=="ko"&&(mn||D!=="onCompositionStart"?D==="onCompositionEnd"&&mn&&(j=fs()):(jt=y,Zo="value"in jt?jt.value:jt.textContent,mn=!0)),I=Hr(p,D),0<I.length&&(D=new hs(D,e,null,n,y),v.push({event:D,listeners:I}),j?D.data=j:(j=Ss(n),j!==null&&(D.data=j)))),(j=Ic?jc(e,n):Ac(e,n))&&(p=Hr(p,"onBeforeInput"),0<p.length&&(y=new hs("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:p}),y.data=j))}Ws(v,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Un(e,n),i!=null&&r.unshift(nr(e,i,o)),i=Un(e,t),i!=null&&r.push(nr(e,i,o))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,p=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&p!==null&&(s=p,o?(a=Un(n,i),a!=null&&l.unshift(nr(n,a,s))):o||(a=Un(n,i),a!=null&&l.push(nr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Jc=/\r\n?/g,Kc=/\u0000|\uFFFD/g;function $s(e){return(typeof e=="string"?e:""+e).replace(Jc,`
`).replace(Kc,"")}function Vr(e,t,n){if(t=$s(t),$s(e)!==t&&n)throw Error(m(425))}function $r(){}var gi=null,yi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wi=typeof setTimeout=="function"?setTimeout:void 0,Yc=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,Xc=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(e){return Qs.resolve(null).then(e).catch(qc)}:wi;function qc(e){setTimeout(function(){throw e})}function ki(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Gn(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),ft="__reactFiber$"+vn,rr="__reactProps$"+vn,vt="__reactContainer$"+vn,Si="__reactEvents$"+vn,bc="__reactListeners$"+vn,Zc="__reactHandles$"+vn;function Xt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gs(e);e!==null;){if(n=e[ft])return n;e=Gs(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[ft]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function Qr(e){return e[rr]||null}var xi=[],kn=-1;function Dt(e){return{current:e}}function q(e){0>kn||(e.current=xi[kn],xi[kn]=null,kn--)}function Y(e,t){kn++,xi[kn]=e.current,e.current=t}var zt={},xe=Dt(zt),Ie=Dt(!1),qt=zt;function Sn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function je(e){return e=e.childContextTypes,e!=null}function Gr(){q(Ie),q(xe)}function Js(e,t,n){if(xe.current!==zt)throw Error(m(168));Y(xe,t),Y(Ie,n)}function Ks(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(m(108,K(e)||"Unknown",o));return R({},n,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,qt=xe.current,Y(xe,e),Y(Ie,Ie.current),!0}function Ys(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=Ks(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,q(Ie),q(xe),Y(xe,e)):q(Ie),Y(Ie,n)}var wt=null,Kr=!1,Ci=!1;function Xs(e){wt===null?wt=[e]:wt.push(e)}function ed(e){Kr=!0,Xs(e)}function Ut(){if(!Ci&&wt!==null){Ci=!0;var e=0,t=G;try{var n=wt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,Kr=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),bl(Qo,Ut),o}finally{G=t,Ci=!1}}return null}var xn=[],Cn=0,Yr=null,Xr=0,Ge=[],Je=0,bt=null,kt=1,St="";function Zt(e,t){xn[Cn++]=Xr,xn[Cn++]=Yr,Yr=e,Xr=t}function qs(e,t,n){Ge[Je++]=kt,Ge[Je++]=St,Ge[Je++]=bt,bt=e;var r=kt;e=St;var o=32-tt(r)-1;r&=~(1<<o),n+=1;var i=32-tt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,kt=1<<32-tt(t)+o|n<<o|r,St=i+e}else kt=1<<i|n<<o|r,St=e}function Ei(e){e.return!==null&&(Zt(e,1),qs(e,1,0))}function Pi(e){for(;e===Yr;)Yr=xn[--Cn],xn[Cn]=null,Xr=xn[--Cn],xn[Cn]=null;for(;e===bt;)bt=Ge[--Je],Ge[Je]=null,St=Ge[--Je],Ge[Je]=null,kt=Ge[--Je],Ge[Je]=null}var Fe=null,We=null,ne=!1,rt=null;function bs(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,We=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,We=null,!0):!1;default:return!1}}function Ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ti(e){if(ne){var t=We;if(t){var n=t;if(!Zs(e,t)){if(Ri(e))throw Error(m(418));t=Mt(n.nextSibling);var r=Fe;t&&Zs(e,t)?bs(r,n):(e.flags=e.flags&-4097|2,ne=!1,Fe=e)}}else{if(Ri(e))throw Error(m(418));e.flags=e.flags&-4097|2,ne=!1,Fe=e}}}function ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function qr(e){if(e!==Fe)return!1;if(!ne)return ea(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=We)){if(Ri(e))throw ta(),Error(m(418));for(;t;)bs(e,t),t=Mt(t.nextSibling)}if(ea(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Fe?Mt(e.stateNode.nextSibling):null;return!0}function ta(){for(var e=We;e;)e=Mt(e.nextSibling)}function En(){We=Fe=null,ne=!1}function Ni(e){rt===null?rt=[e]:rt.push(e)}var td=Se.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function na(e){var t=e._init;return t(e._payload)}function ra(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=Qt(d,u),d.index=0,d.sibling=null,d}function i(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,w){return u===null||u.tag!==6?(u=wl(f,d.mode,w),u.return=d,u):(u=o(u,f),u.return=d,u)}function a(d,u,f,w){var L=f.type;return L===Le?y(d,u,f.props.children,w,f.key):u!==null&&(u.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===_e&&na(L)===u.type)?(w=o(u,f.props),w.ref=ir(d,u,f),w.return=d,w):(w=Co(f.type,f.key,f.props,null,d.mode,w),w.ref=ir(d,u,f),w.return=d,w)}function p(d,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=kl(f,d.mode,w),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function y(d,u,f,w,L){return u===null||u.tag!==7?(u=an(f,d.mode,w,L),u.return=d,u):(u=o(u,f),u.return=d,u)}function v(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=wl(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ze:return f=Co(u.type,u.key,u.props,null,d.mode,f),f.ref=ir(d,null,u),f.return=d,f;case Re:return u=kl(u,d.mode,f),u.return=d,u;case _e:var w=u._init;return v(d,w(u._payload),f)}if(Mn(u)||A(u))return u=an(u,d.mode,f,null),u.return=d,u;br(d,u)}return null}function h(d,u,f,w){var L=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return L!==null?null:s(d,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:return f.key===L?a(d,u,f,w):null;case Re:return f.key===L?p(d,u,f,w):null;case _e:return L=f._init,h(d,u,L(f._payload),w)}if(Mn(f)||A(f))return L!==null?null:y(d,u,f,w,null);br(d,f)}return null}function C(d,u,f,w,L){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,s(u,d,""+w,L);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ze:return d=d.get(w.key===null?f:w.key)||null,a(u,d,w,L);case Re:return d=d.get(w.key===null?f:w.key)||null,p(u,d,w,L);case _e:var I=w._init;return C(d,u,f,I(w._payload),L)}if(Mn(w)||A(w))return d=d.get(f)||null,y(u,d,w,L,null);br(u,w)}return null}function T(d,u,f,w){for(var L=null,I=null,j=u,D=u=0,ye=null;j!==null&&D<f.length;D++){j.index>D?(ye=j,j=null):ye=j.sibling;var V=h(d,j,f[D],w);if(V===null){j===null&&(j=ye);break}e&&j&&V.alternate===null&&t(d,j),u=i(V,u,D),I===null?L=V:I.sibling=V,I=V,j=ye}if(D===f.length)return n(d,j),ne&&Zt(d,D),L;if(j===null){for(;D<f.length;D++)j=v(d,f[D],w),j!==null&&(u=i(j,u,D),I===null?L=j:I.sibling=j,I=j);return ne&&Zt(d,D),L}for(j=r(d,j);D<f.length;D++)ye=C(j,d,D,f[D],w),ye!==null&&(e&&ye.alternate!==null&&j.delete(ye.key===null?D:ye.key),u=i(ye,u,D),I===null?L=ye:I.sibling=ye,I=ye);return e&&j.forEach(function(Gt){return t(d,Gt)}),ne&&Zt(d,D),L}function N(d,u,f,w){var L=A(f);if(typeof L!="function")throw Error(m(150));if(f=L.call(f),f==null)throw Error(m(151));for(var I=L=null,j=u,D=u=0,ye=null,V=f.next();j!==null&&!V.done;D++,V=f.next()){j.index>D?(ye=j,j=null):ye=j.sibling;var Gt=h(d,j,V.value,w);if(Gt===null){j===null&&(j=ye);break}e&&j&&Gt.alternate===null&&t(d,j),u=i(Gt,u,D),I===null?L=Gt:I.sibling=Gt,I=Gt,j=ye}if(V.done)return n(d,j),ne&&Zt(d,D),L;if(j===null){for(;!V.done;D++,V=f.next())V=v(d,V.value,w),V!==null&&(u=i(V,u,D),I===null?L=V:I.sibling=V,I=V);return ne&&Zt(d,D),L}for(j=r(d,j);!V.done;D++,V=f.next())V=C(j,d,D,V.value,w),V!==null&&(e&&V.alternate!==null&&j.delete(V.key===null?D:V.key),u=i(V,u,D),I===null?L=V:I.sibling=V,I=V);return e&&j.forEach(function(Md){return t(d,Md)}),ne&&Zt(d,D),L}function ce(d,u,f,w){if(typeof f=="object"&&f!==null&&f.type===Le&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:e:{for(var L=f.key,I=u;I!==null;){if(I.key===L){if(L=f.type,L===Le){if(I.tag===7){n(d,I.sibling),u=o(I,f.props.children),u.return=d,d=u;break e}}else if(I.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===_e&&na(L)===I.type){n(d,I.sibling),u=o(I,f.props),u.ref=ir(d,I,f),u.return=d,d=u;break e}n(d,I);break}else t(d,I);I=I.sibling}f.type===Le?(u=an(f.props.children,d.mode,w,f.key),u.return=d,d=u):(w=Co(f.type,f.key,f.props,null,d.mode,w),w.ref=ir(d,u,f),w.return=d,d=w)}return l(d);case Re:e:{for(I=f.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=kl(f,d.mode,w),u.return=d,d=u}return l(d);case _e:return I=f._init,ce(d,u,I(f._payload),w)}if(Mn(f))return T(d,u,f,w);if(A(f))return N(d,u,f,w);br(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=wl(f,d.mode,w),u.return=d,d=u),l(d)):n(d,u)}return ce}var Pn=ra(!0),oa=ra(!1),Zr=Dt(null),eo=null,Rn=null,Li=null;function _i(){Li=Rn=eo=null}function Ii(e){var t=Zr.current;q(Zr),e._currentValue=t}function ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){eo=e,Li=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ae=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(Li!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(eo===null)throw Error(m(308));Rn=e,eo.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var en=null;function Ai(e){en===null?en=[e]:en.push(e)}function ia(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ai(t)):(n.next=o.next,o.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function Mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function la(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ai(r)):(t.next=o.next,o.next=t),r.interleaved=t,xt(e,n)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ko(e,n)}}function sa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function no(e,t,n,r){var o=e.updateQueue;Bt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,p=a.next;a.next=null,l===null?i=p:l.next=p,l=a;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=p:s.next=p,y.lastBaseUpdate=a))}if(i!==null){var v=o.baseState;l=0,y=p=a=null,s=i;do{var h=s.lane,C=s.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:C,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var T=e,N=s;switch(h=t,C=n,N.tag){case 1:if(T=N.payload,typeof T=="function"){v=T.call(C,v,h);break e}v=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=N.payload,h=typeof T=="function"?T.call(C,v,h):T,h==null)break e;v=R({},v,h);break e;case 2:Bt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else C={eventTime:C,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(p=y=C,a=v):y=y.next=C,l|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(y===null&&(a=v),o.baseState=a,o.firstBaseUpdate=p,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);rn|=l,e.lanes=l,e.memoizedState=v}}function aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(m(191,o));o.call(r)}}}var lr={},pt=Dt(lr),sr=Dt(lr),ar=Dt(lr);function tn(e){if(e===lr)throw Error(m(174));return e}function Di(e,t){switch(Y(ar,t),Y(sr,e),Y(pt,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zo(t,e)}q(pt),Y(pt,t)}function Nn(){q(pt),q(sr),q(ar)}function ua(e){tn(ar.current);var t=tn(pt.current),n=zo(t,e.type);t!==n&&(Y(sr,e),Y(pt,n))}function zi(e){sr.current===e&&(q(pt),q(sr))}var oe=Dt(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ui=[];function Bi(){for(var e=0;e<Ui.length;e++)Ui[e]._workInProgressVersionPrimary=null;Ui.length=0}var oo=Se.ReactCurrentDispatcher,Oi=Se.ReactCurrentBatchConfig,nn=0,ie=null,fe=null,he=null,io=!1,ur=!1,cr=0,nd=0;function Ce(){throw Error(m(321))}function Fi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Wi(e,t,n,r,o,i){if(nn=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?ld:sd,e=n(r,o),ur){i=0;do{if(ur=!1,cr=0,25<=i)throw Error(m(301));i+=1,he=fe=null,t.updateQueue=null,oo.current=ad,e=n(r,o)}while(ur)}if(oo.current=ao,t=fe!==null&&fe.next!==null,nn=0,he=fe=ie=null,io=!1,t)throw Error(m(300));return e}function Hi(){var e=cr!==0;return cr=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ie.memoizedState=he=e:he=he.next=e,he}function Ye(){if(fe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=he===null?ie.memoizedState:he.next;if(t!==null)he=t,fe=e;else{if(e===null)throw Error(m(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},he===null?ie.memoizedState=he=e:he=he.next=e}return he}function dr(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=Ye(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,p=i;do{var y=p.lane;if((nn&y)===y)a!==null&&(a=a.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};a===null?(s=a=v,l=r):a=a.next=v,ie.lanes|=y,rn|=y}p=p.next}while(p!==null&&p!==i);a===null?l=r:a.next=s,nt(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,rn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $i(e){var t=Ye(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);nt(i,t.memoizedState)||(Ae=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ca(){}function da(e,t){var n=ie,r=Ye(),o=t(),i=!nt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ae=!0),r=r.queue,Qi(ma.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,fr(9,pa.bind(null,n,r,o,t),void 0,null),ge===null)throw Error(m(349));(nn&30)!==0||fa(n,t,o)}return o}function fa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pa(e,t,n,r){t.value=n,t.getSnapshot=r,ha(t)&&ga(e)}function ma(e,t,n){return n(function(){ha(t)&&ga(e)})}function ha(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function ga(e){var t=xt(e,1);t!==null&&st(t,e,1,-1)}function ya(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=id.bind(null,ie,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function va(){return Ye().memoizedState}function lo(e,t,n,r){var o=mt();ie.flags|=e,o.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function so(e,t,n,r){var o=Ye();r=r===void 0?null:r;var i=void 0;if(fe!==null){var l=fe.memoizedState;if(i=l.destroy,r!==null&&Fi(r,l.deps)){o.memoizedState=fr(t,n,i,r);return}}ie.flags|=e,o.memoizedState=fr(1|t,n,i,r)}function wa(e,t){return lo(8390656,8,e,t)}function Qi(e,t){return so(2048,8,e,t)}function ka(e,t){return so(4,2,e,t)}function Sa(e,t){return so(4,4,e,t)}function xa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ca(e,t,n){return n=n!=null?n.concat([e]):null,so(4,4,xa.bind(null,t,e),n)}function Gi(){}function Ea(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pa(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ra(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n):(nt(n,t)||(n=ns(),ie.lanes|=n,rn|=n,e.baseState=!0),t)}function rd(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Oi.transition;Oi.transition={};try{e(!1),t()}finally{G=n,Oi.transition=r}}function Ta(){return Ye().memoizedState}function od(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Na(e))La(t,n);else if(n=ia(e,t,n,r),n!==null){var o=Ne();st(n,e,r,o),_a(n,t,r)}}function id(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Na(e))La(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,nt(s,l)){var a=t.interleaved;a===null?(o.next=o,Ai(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=ia(e,t,o,r),n!==null&&(o=Ne(),st(n,e,r,o),_a(n,t,r))}}function Na(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function La(e,t){ur=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _a(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ko(e,n)}}var ao={readContext:Ke,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},ld={readContext:Ke,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lo(4194308,4,xa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return lo(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=od.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:ya,useDebugValue:Gi,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=ya(!1),t=e[0];return e=rd.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,o=mt();if(ne){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),ge===null)throw Error(m(349));(nn&30)!==0||fa(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,wa(ma.bind(null,r,i,e),[e]),r.flags|=2048,fr(9,pa.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=mt(),t=ge.identifierPrefix;if(ne){var n=St,r=kt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sd={readContext:Ke,useCallback:Ea,useContext:Ke,useEffect:Qi,useImperativeHandle:Ca,useInsertionEffect:ka,useLayoutEffect:Sa,useMemo:Pa,useReducer:Vi,useRef:va,useState:function(){return Vi(dr)},useDebugValue:Gi,useDeferredValue:function(e){var t=Ye();return Ra(t,fe.memoizedState,e)},useTransition:function(){var e=Vi(dr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:da,useId:Ta,unstable_isNewReconciler:!1},ad={readContext:Ke,useCallback:Ea,useContext:Ke,useEffect:Qi,useImperativeHandle:Ca,useInsertionEffect:ka,useLayoutEffect:Sa,useMemo:Pa,useReducer:$i,useRef:va,useState:function(){return $i(dr)},useDebugValue:Gi,useDeferredValue:function(e){var t=Ye();return fe===null?t.memoizedState=e:Ra(t,fe.memoizedState,e)},useTransition:function(){var e=$i(dr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:da,useId:Ta,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=R({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ji(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uo={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=Vt(e),i=Ct(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ot(e,i,o),t!==null&&(st(t,e,o,r),to(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=Vt(e),i=Ct(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ot(e,i,o),t!==null&&(st(t,e,o,r),to(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Vt(e),o=Ct(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ot(e,o,r),t!==null&&(st(t,e,r,n),to(t,e,r))}};function Ia(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!bn(n,r)||!bn(o,i):!0}function ja(e,t,n){var r=!1,o=zt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ke(i):(o=je(t)?qt:xe.current,r=t.contextTypes,i=(r=r!=null)?Sn(e,o):zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Aa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uo.enqueueReplaceState(t,t.state,null)}function Ki(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Mi(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ke(i):(i=je(t)?qt:xe.current,o.context=Sn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ji(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&uo.enqueueReplaceState(o,o.state,null),no(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var n="",r=t;do n+=W(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ud=typeof WeakMap=="function"?WeakMap:Map;function Ma(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,dl=r),Xi(e,t)},n}function Da(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Xi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xi(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function za(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ud;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cd.bind(null,e,t,n),t.then(e,e))}function Ua(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ba(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var cd=Se.ReactCurrentOwner,Ae=!1;function Te(e,t,n,r){t.child=e===null?oa(t,null,n,r):Pn(t,e.child,n,r)}function Oa(e,t,n,r,o){n=n.render;var i=t.ref;return Tn(t,o),r=Wi(e,t,n,r,i,o),n=Hi(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(ne&&n&&Ei(t),t.flags|=1,Te(e,t,r,o),t.child)}function Fa(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!vl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Wa(e,t,i,r,o)):(e=Co(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:bn,n(l,r)&&e.ref===t.ref)return Et(e,t,o)}return t.flags|=1,e=Qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Wa(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(bn(i,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ae=!0);else return t.lanes=e.lanes,Et(e,t,o)}return qi(e,t,n,r,o)}function Ha(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(In,He),He|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(In,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Y(In,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Y(In,He),He|=r;return Te(e,t,o,n),t.child}function Va(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qi(e,t,n,r,o){var i=je(n)?qt:xe.current;return i=Sn(t,i),Tn(t,o),n=Wi(e,t,n,r,i,o),r=Hi(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(ne&&r&&Ei(t),t.flags|=1,Te(e,t,n,o),t.child)}function $a(e,t,n,r,o){if(je(n)){var i=!0;Jr(t)}else i=!1;if(Tn(t,o),t.stateNode===null)fo(e,t),ja(t,n,r),Ki(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ke(p):(p=je(n)?qt:xe.current,p=Sn(t,p));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==p)&&Aa(t,l,r,p),Bt=!1;var h=t.memoizedState;l.state=h,no(t,r,l,o),a=t.memoizedState,s!==r||h!==a||Ie.current||Bt?(typeof y=="function"&&(Ji(t,n,y,r),a=t.memoizedState),(s=Bt||Ia(t,n,s,r,h,a,p))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=p,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,la(e,t),s=t.memoizedProps,p=t.type===t.elementType?s:ot(t.type,s),l.props=p,v=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ke(a):(a=je(n)?qt:xe.current,a=Sn(t,a));var C=n.getDerivedStateFromProps;(y=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==v||h!==a)&&Aa(t,l,r,a),Bt=!1,h=t.memoizedState,l.state=h,no(t,r,l,o);var T=t.memoizedState;s!==v||h!==T||Ie.current||Bt?(typeof C=="function"&&(Ji(t,n,C,r),T=t.memoizedState),(p=Bt||Ia(t,n,p,r,h,T,a)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,T,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,T,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=T),l.props=r,l.state=T,l.context=a,r=p):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return bi(e,t,n,r,i,o)}function bi(e,t,n,r,o,i){Va(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ys(t,n,!1),Et(e,t,i);r=t.stateNode,cd.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Pn(t,e.child,null,i),t.child=Pn(t,null,s,i)):Te(e,t,s,i),t.memoizedState=r.state,o&&Ys(t,n,!0),t.child}function Qa(e){var t=e.stateNode;t.pendingContext?Js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Js(e,t.context,!1),Di(e,t.containerInfo)}function Ga(e,t,n,r,o){return En(),Ni(o),t.flags|=256,Te(e,t,n,r),t.child}var Zi={dehydrated:null,treeContext:null,retryLane:0};function el(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ja(e,t,n){var r=t.pendingProps,o=oe.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(oe,o&1),e===null)return Ti(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Eo(l,r,0,null),e=an(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=el(n),t.memoizedState=Zi,e):tl(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return dd(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Qt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Qt(s,i):(i=an(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?el(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Zi,r}return i=e.child,e=i.sibling,r=Qt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tl(e,t){return t=Eo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&Ni(r),Pn(t,e.child,null,n),e=tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dd(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(m(422))),co(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Eo({mode:"visible",children:r.children},o,0,null),i=an(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Pn(t,e.child,null,l),t.child.memoizedState=el(l),t.memoizedState=Zi,i);if((t.mode&1)===0)return co(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(m(419)),r=Yi(i,r,void 0),co(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ae||s){if(r=ge,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,xt(e,o),st(r,e,o,-1))}return yl(),r=Yi(Error(m(421))),co(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ed.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=Mt(o.nextSibling),Fe=t,ne=!0,rt=null,e!==null&&(Ge[Je++]=kt,Ge[Je++]=St,Ge[Je++]=bt,kt=e.id,St=e.overflow,bt=t),t=tl(t,r.children),t.flags|=4096,t)}function Ka(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ji(e.return,t,n)}function nl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ya(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Te(e,t,r.children,n),r=oe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ka(e,n,t);else if(e.tag===19)Ka(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(oe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ro(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),nl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ro(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}nl(t,!0,n,null,i);break;case"together":nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fd(e,t,n){switch(t.tag){case 3:Qa(t),En();break;case 5:ua(t);break;case 1:je(t.type)&&Jr(t);break;case 4:Di(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Y(Zr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(oe,oe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ja(e,t,n):(Y(oe,oe.current&1),e=Et(e,t,n),e!==null?e.sibling:null);Y(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ya(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ha(e,t,n)}return Et(e,t,n)}var Xa,rl,qa,ba;Xa=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},rl=function(){},qa=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tn(pt.current);var i=null;switch(n){case"input":o=jo(e,o),r=jo(e,r),i=[];break;case"select":o=R({},o,{value:void 0}),r=R({},r,{value:void 0}),i=[];break;case"textarea":o=Do(e,o),r=Do(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}Uo(n,r);var l;n=null;for(p in o)if(!r.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var s=o[p];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(_.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var a=r[p];if(s=o?.[p],r.hasOwnProperty(p)&&a!==s&&(a!=null||s!=null))if(p==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(p,n)),n=a;else p==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(p,a)):p==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(p,""+a):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(_.hasOwnProperty(p)?(a!=null&&p==="onScroll"&&X("scroll",e),i||s===a||(i=[])):(i=i||[]).push(p,a))}n&&(i=i||[]).push("style",n);var p=i;(t.updateQueue=p)&&(t.flags|=4)}},ba=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pd(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return je(t.type)&&Gr(),Ee(t),null;case 3:return r=t.stateNode,Nn(),q(Ie),q(xe),Bi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(ml(rt),rt=null))),rl(e,t),Ee(t),null;case 5:zi(t);var o=tn(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)qa(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return Ee(t),null}if(e=tn(pt.current),qr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ft]=t,r[rr]=i,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<er.length;o++)X(er[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":jl(r,i),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},X("invalid",r);break;case"textarea":Dl(r,i),X("invalid",r)}Uo(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Vr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Vr(r.textContent,s,e),o=["children",""+s]):_.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&X("scroll",r)}switch(n){case"input":kr(r),Ml(r,i,!0);break;case"textarea":kr(r),Ul(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$r)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ft]=t,e[rr]=r,Xa(e,t,!1,!1),t.stateNode=e;e:{switch(l=Bo(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<er.length;o++)X(er[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":jl(e,r),o=jo(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=R({},r,{value:void 0}),X("invalid",e);break;case"textarea":Dl(e,r),o=Do(e,r),X("invalid",e);break;default:o=r}Uo(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Wl(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ol(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dn(e,a):typeof a=="number"&&Dn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_.hasOwnProperty(i)?a!=null&&i==="onScroll"&&X("scroll",e):a!=null&&be(e,i,a,l))}switch(n){case"input":kr(e),Ml(e,r,!1);break;case"textarea":kr(e),Ul(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Q(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)ba(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=tn(ar.current),tn(pt.current),qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(i=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return Ee(t),null;case 13:if(q(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&We!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ta(),En(),t.flags|=98560,i=!1;else if(i=qr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(m(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[ft]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else rt!==null&&(ml(rt),rt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(oe.current&1)!==0?pe===0&&(pe=3):yl())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Nn(),rl(e,t),e===null&&tr(t.stateNode.containerInfo),Ee(t),null;case 10:return Ii(t.type._context),Ee(t),null;case 17:return je(t.type)&&Gr(),Ee(t),null;case 19:if(q(oe),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)pr(i,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ro(e),l!==null){for(t.flags|=128,pr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>jn&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ro(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ne)return Ee(t),null}else 2*ue()-i.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=oe.current,Y(oe,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return gl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(He&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function md(e,t){switch(Pi(t),t.tag){case 1:return je(t.type)&&Gr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),q(Ie),q(xe),Bi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return zi(t),null;case 13:if(q(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(oe),null;case 4:return Nn(),null;case 10:return Ii(t.type._context),null;case 22:case 23:return gl(),null;case 24:return null;default:return null}}var po=!1,Pe=!1,hd=typeof WeakSet=="function"?WeakSet:Set,P=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function ol(e,t,n){try{n()}catch(r){ae(e,t,r)}}var Za=!1;function gd(e,t){if(gi=jr,e=Is(),ai(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,p=0,y=0,v=e,h=null;t:for(;;){for(var C;v!==n||o!==0&&v.nodeType!==3||(s=l+o),v!==i||r!==0&&v.nodeType!==3||(a=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(C=v.firstChild)!==null;)h=v,v=C;for(;;){if(v===e)break t;if(h===n&&++p===o&&(s=l),h===i&&++y===r&&(a=l),(C=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=C}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},jr=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var T=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var N=T.memoizedProps,ce=T.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?N:ot(t.type,N),ce);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return T=Za,Za=!1,T}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ol(t,n,i)}o=o.next}while(o!==r)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[rr],delete t[Si],delete t[bc],delete t[Zc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(ll(e,t,n),e=e.sibling;e!==null;)ll(e,t,n),e=e.sibling}function sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sl(e,t,n),e=e.sibling;e!==null;)sl(e,t,n),e=e.sibling}var we=null,it=!1;function Ft(e,t,n){for(n=n.child;n!==null;)ru(e,t,n),n=n.sibling}function ru(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Rr,n)}catch{}switch(n.tag){case 5:Pe||_n(n,t);case 6:var r=we,o=it;we=null,Ft(e,t,n),we=r,it=o,we!==null&&(it?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(it?(e=we,n=n.stateNode,e.nodeType===8?ki(e.parentNode,n):e.nodeType===1&&ki(e,n),Gn(e)):ki(we,n.stateNode));break;case 4:r=we,o=it,we=n.stateNode.containerInfo,it=!0,Ft(e,t,n),we=r,it=o;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&ol(n,t,l),o=o.next}while(o!==r)}Ft(e,t,n);break;case 1:if(!Pe&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ae(n,t,s)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Ft(e,t,n),Pe=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hd),t.forEach(function(r){var o=Pd.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,it=!1;break e;case 3:we=s.stateNode.containerInfo,it=!0;break e;case 4:we=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(we===null)throw Error(m(160));ru(i,l,o),we=null,it=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(p){ae(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)iu(t,e),t=t.sibling}function iu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),ht(e),r&4){try{mr(3,e,e.return),mo(3,e)}catch(N){ae(e,e.return,N)}try{mr(5,e,e.return)}catch(N){ae(e,e.return,N)}}break;case 1:lt(t,e),ht(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(lt(t,e),ht(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var o=e.stateNode;try{Dn(o,"")}catch(N){ae(e,e.return,N)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Al(o,i),Bo(s,l);var p=Bo(s,i);for(l=0;l<a.length;l+=2){var y=a[l],v=a[l+1];y==="style"?Wl(o,v):y==="dangerouslySetInnerHTML"?Ol(o,v):y==="children"?Dn(o,v):be(o,y,v,p)}switch(s){case"input":Ao(o,i);break;case"textarea":zl(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?un(o,!!i.multiple,C,!1):h!==!!i.multiple&&(i.defaultValue!=null?un(o,!!i.multiple,i.defaultValue,!0):un(o,!!i.multiple,i.multiple?[]:"",!1))}o[rr]=i}catch(N){ae(e,e.return,N)}}break;case 6:if(lt(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(m(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(N){ae(e,e.return,N)}}break;case 3:if(lt(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(N){ae(e,e.return,N)}break;case 4:lt(t,e),ht(e);break;case 13:lt(t,e),ht(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(cl=ue())),r&4&&ou(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(p=Pe)||y,lt(t,e),Pe=p):lt(t,e),ht(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&(e.mode&1)!==0)for(P=e,y=e.child;y!==null;){for(v=P=y;P!==null;){switch(h=P,C=h.child,h.tag){case 0:case 11:case 14:case 15:mr(4,h,h.return);break;case 1:_n(h,h.return);var T=h.stateNode;if(typeof T.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(N){ae(r,n,N)}}break;case 5:_n(h,h.return);break;case 22:if(h.memoizedState!==null){au(v);continue}}C!==null?(C.return=h,P=C):au(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{o=v.stateNode,p?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=v.stateNode,a=v.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Fl("display",l))}catch(N){ae(e,e.return,N)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(N){ae(e,e.return,N)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:lt(t,e),ht(e),r&4&&ou(e);break;case 21:break;default:lt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Dn(o,""),r.flags&=-33);var i=nu(e);sl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=nu(e);ll(e,s,l);break;default:throw Error(m(161))}}catch(a){ae(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yd(e,t,n){P=e,lu(e)}function lu(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||po;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Pe;s=po;var p=Pe;if(po=l,(Pe=a)&&!p)for(P=o;P!==null;)l=P,a=l.child,l.tag===22&&l.memoizedState!==null?uu(o):a!==null?(a.return=l,P=a):uu(o);for(;i!==null;)P=i,lu(i),i=i.sibling;P=o,po=s,Pe=p}su(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,P=i):su(e)}}function su(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Pe||mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&aa(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}aa(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Gn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Pe||t.flags&512&&il(t)}catch(h){ae(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function au(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function uu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(a){ae(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ae(t,o,a)}}var i=t.return;try{il(t)}catch(a){ae(t,i,a)}break;case 5:var l=t.return;try{il(t)}catch(a){ae(t,l,a)}}}catch(a){ae(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var vd=Math.ceil,ho=Se.ReactCurrentDispatcher,al=Se.ReactCurrentOwner,Xe=Se.ReactCurrentBatchConfig,F=0,ge=null,de=null,ke=0,He=0,In=Dt(0),pe=0,hr=null,rn=0,go=0,ul=0,gr=null,Me=null,cl=0,jn=1/0,Pt=null,yo=!1,dl=null,Wt=null,vo=!1,Ht=null,wo=0,yr=0,fl=null,ko=-1,So=0;function Ne(){return(F&6)!==0?ue():ko!==-1?ko:ko=ue()}function Vt(e){return(e.mode&1)===0?1:(F&2)!==0&&ke!==0?ke&-ke:td.transition!==null?(So===0&&(So=ns()),So):(e=G,e!==0||(e=window.event,e=e===void 0?16:ds(e.type)),e)}function st(e,t,n,r){if(50<yr)throw yr=0,fl=null,Error(m(185));Wn(e,n,r),((F&2)===0||e!==ge)&&(e===ge&&((F&2)===0&&(go|=n),pe===4&&$t(e,ke)),De(e,r),n===1&&F===0&&(t.mode&1)===0&&(jn=ue()+500,Kr&&Ut()))}function De(e,t){var n=e.callbackNode;tc(e,t);var r=Lr(e,e===ge?ke:0);if(r===0)n!==null&&Zl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zl(n),t===1)e.tag===0?ed(du.bind(null,e)):Xs(du.bind(null,e)),Xc(function(){(F&6)===0&&Ut()}),n=null;else{switch(rs(r)){case 1:n=Qo;break;case 4:n=es;break;case 16:n=Pr;break;case 536870912:n=ts;break;default:n=Pr}n=wu(n,cu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cu(e,t){if(ko=-1,So=0,(F&6)!==0)throw Error(m(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Lr(e,e===ge?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=xo(e,r);else{t=r;var o=F;F|=2;var i=pu();(ge!==e||ke!==t)&&(Pt=null,jn=ue()+500,ln(e,t));do try{Sd();break}catch(s){fu(e,s)}while(!0);_i(),ho.current=i,F=o,de!==null?t=0:(ge=null,ke=0,t=pe)}if(t!==0){if(t===2&&(o=Go(e),o!==0&&(r=o,t=pl(e,o))),t===1)throw n=hr,ln(e,0),$t(e,r),De(e,ue()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,(r&30)===0&&!wd(o)&&(t=xo(e,r),t===2&&(i=Go(e),i!==0&&(r=i,t=pl(e,i))),t===1))throw n=hr,ln(e,0),$t(e,r),De(e,ue()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:sn(e,Me,Pt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=cl+500-ue(),10<t)){if(Lr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=wi(sn.bind(null,e,Me,Pt),t);break}sn(e,Me,Pt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-tt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vd(r/1960))-r,10<r){e.timeoutHandle=wi(sn.bind(null,e,Me,Pt),r);break}sn(e,Me,Pt);break;case 5:sn(e,Me,Pt);break;default:throw Error(m(329))}}}return De(e,ue()),e.callbackNode===n?cu.bind(null,e):null}function pl(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=xo(e,t),e!==2&&(t=Me,Me=n,t!==null&&ml(t)),e}function ml(e){Me===null?Me=e:Me.push.apply(Me,e)}function wd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~ul,t&=~go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if((F&6)!==0)throw Error(m(327));An();var t=Lr(e,0);if((t&1)===0)return De(e,ue()),null;var n=xo(e,t);if(e.tag!==0&&n===2){var r=Go(e);r!==0&&(t=r,n=pl(e,r))}if(n===1)throw n=hr,ln(e,0),$t(e,t),De(e,ue()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Me,Pt),De(e,ue()),null}function hl(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(jn=ue()+500,Kr&&Ut())}}function on(e){Ht!==null&&Ht.tag===0&&(F&6)===0&&An();var t=F;F|=1;var n=Xe.transition,r=G;try{if(Xe.transition=null,G=1,e)return e()}finally{G=r,Xe.transition=n,F=t,(F&6)===0&&Ut()}}function gl(){He=In.current,q(In)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yc(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Pi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:Nn(),q(Ie),q(xe),Bi();break;case 5:zi(r);break;case 4:Nn();break;case 13:q(oe);break;case 19:q(oe);break;case 10:Ii(r.type._context);break;case 22:case 23:gl()}n=n.return}if(ge=e,de=e=Qt(e.current,null),ke=He=t,pe=0,hr=null,ul=go=rn=0,Me=gr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}en=null}return e}function fu(e,t){do{var n=de;try{if(_i(),oo.current=ao,io){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}io=!1}if(nn=0,he=fe=ie=null,ur=!1,cr=0,al.current=null,n===null||n.return===null){pe=1,hr=t,de=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=ke,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var p=a,y=s,v=y.tag;if((y.mode&1)===0&&(v===0||v===11||v===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var C=Ua(l);if(C!==null){C.flags&=-257,Ba(C,l,s,i,t),C.mode&1&&za(i,p,t),t=C,a=p;var T=t.updateQueue;if(T===null){var N=new Set;N.add(a),t.updateQueue=N}else T.add(a);break e}else{if((t&1)===0){za(i,p,t),yl();break e}a=Error(m(426))}}else if(ne&&s.mode&1){var ce=Ua(l);if(ce!==null){(ce.flags&65536)===0&&(ce.flags|=256),Ba(ce,l,s,i,t),Ni(Ln(a,s));break e}}i=a=Ln(a,s),pe!==4&&(pe=2),gr===null?gr=[i]:gr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ma(i,a,t);sa(i,d);break e;case 1:s=a;var u=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wt===null||!Wt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Da(i,s,t);sa(i,w);break e}}i=i.return}while(i!==null)}hu(n)}catch(L){t=L,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function pu(){var e=ho.current;return ho.current=ao,e===null?ao:e}function yl(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||(rn&268435455)===0&&(go&268435455)===0||$t(ge,ke)}function xo(e,t){var n=F;F|=2;var r=pu();(ge!==e||ke!==t)&&(Pt=null,ln(e,t));do try{kd();break}catch(o){fu(e,o)}while(!0);if(_i(),F=n,ho.current=r,de!==null)throw Error(m(261));return ge=null,ke=0,pe}function kd(){for(;de!==null;)mu(de)}function Sd(){for(;de!==null&&!Gu();)mu(de)}function mu(e){var t=vu(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?hu(e):de=t,al.current=null}function hu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=pd(n,t,He),n!==null){de=n;return}}else{if(n=md(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,de=null;return}}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);pe===0&&(pe=5)}function sn(e,t,n){var r=G,o=Xe.transition;try{Xe.transition=null,G=1,xd(e,t,n,r)}finally{Xe.transition=o,G=r}return null}function xd(e,t,n,r){do An();while(Ht!==null);if((F&6)!==0)throw Error(m(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(nc(e,i),e===ge&&(de=ge=null,ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||vo||(vo=!0,wu(Pr,function(){return An(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Xe.transition,Xe.transition=null;var l=G;G=1;var s=F;F|=4,al.current=null,gd(e,n),iu(n,e),Hc(yi),jr=!!gi,yi=gi=null,e.current=n,yd(n),Ju(),F=s,G=l,Xe.transition=i}else e.current=n;if(vo&&(vo=!1,Ht=e,wo=o),i=e.pendingLanes,i===0&&(Wt=null),Xu(n.stateNode),De(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yo)throw yo=!1,e=dl,dl=null,e;return(wo&1)!==0&&e.tag!==0&&An(),i=e.pendingLanes,(i&1)!==0?e===fl?yr++:(yr=0,fl=e):yr=0,Ut(),null}function An(){if(Ht!==null){var e=rs(wo),t=Xe.transition,n=G;try{if(Xe.transition=null,G=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,wo=0,(F&6)!==0)throw Error(m(331));var o=F;for(F|=4,P=e.current;P!==null;){var i=P,l=i.child;if((P.flags&16)!==0){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var p=s[a];for(P=p;P!==null;){var y=P;switch(y.tag){case 0:case 11:case 15:mr(8,y,i)}var v=y.child;if(v!==null)v.return=y,P=v;else for(;P!==null;){y=P;var h=y.sibling,C=y.return;if(eu(y),y===p){P=null;break}if(h!==null){h.return=C,P=h;break}P=C}}}var T=i.alternate;if(T!==null){var N=T.child;if(N!==null){T.child=null;do{var ce=N.sibling;N.sibling=null,N=ce}while(N!==null)}}P=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,P=d;break e}P=i.return}}var u=e.current;for(P=u;P!==null;){l=P;var f=l.child;if((l.subtreeFlags&2064)!==0&&f!==null)f.return=l,P=f;else e:for(l=u;P!==null;){if(s=P,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:mo(9,s)}}catch(L){ae(s,s.return,L)}if(s===l){P=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,P=w;break e}P=s.return}}if(F=o,Ut(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Rr,e)}catch{}r=!0}return r}finally{G=n,Xe.transition=t}}return!1}function gu(e,t,n){t=Ln(n,t),t=Ma(e,t,1),e=Ot(e,t,1),t=Ne(),e!==null&&(Wn(e,1,t),De(e,t))}function ae(e,t,n){if(e.tag===3)gu(e,e,n);else for(;t!==null;){if(t.tag===3){gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=Ln(n,e),e=Da(t,e,1),t=Ot(t,e,1),e=Ne(),t!==null&&(Wn(t,1,e),De(t,e));break}}t=t.return}}function Cd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ke&n)===n&&(pe===4||pe===3&&(ke&130023424)===ke&&500>ue()-cl?ln(e,0):ul|=n),De(e,t)}function yu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Nr,Nr<<=1,(Nr&130023424)===0&&(Nr=4194304)));var n=Ne();e=xt(e,t),e!==null&&(Wn(e,t,n),De(e,n))}function Ed(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yu(e,n)}function Pd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),yu(e,n)}var vu;vu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Ae=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ae=!1,fd(e,t,n);Ae=(e.flags&131072)!==0}else Ae=!1,ne&&(t.flags&1048576)!==0&&qs(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var o=Sn(t,xe.current);Tn(t,n),o=Wi(null,t,r,e,o,n);var i=Hi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(i=!0,Jr(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Mi(t),o.updater=uo,t.stateNode=o,o._reactInternals=t,Ki(t,r,e,n),t=bi(null,t,r,!0,i,n)):(t.tag=0,ne&&i&&Ei(t),Te(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Td(r),e=ot(r,e),o){case 0:t=qi(null,t,r,e,n);break e;case 1:t=$a(null,t,r,e,n);break e;case 11:t=Oa(null,t,r,e,n);break e;case 14:t=Fa(null,t,r,ot(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),qi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),$a(e,t,r,o,n);case 3:e:{if(Qa(t),e===null)throw Error(m(387));r=t.pendingProps,i=t.memoizedState,o=i.element,la(e,t),no(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ln(Error(m(423)),t),t=Ga(e,t,r,n,o);break e}else if(r!==o){o=Ln(Error(m(424)),t),t=Ga(e,t,r,n,o);break e}else for(We=Mt(t.stateNode.containerInfo.firstChild),Fe=t,ne=!0,rt=null,n=oa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===o){t=Et(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return ua(t),e===null&&Ti(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,vi(r,o)?l=null:i!==null&&vi(r,i)&&(t.flags|=32),Va(e,t),Te(e,t,l,n),t.child;case 6:return e===null&&Ti(t),null;case 13:return Ja(e,t,n);case 4:return Di(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pn(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),Oa(e,t,r,o,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Y(Zr,r._currentValue),r._currentValue=l,i!==null)if(nt(i.value,l)){if(i.children===o.children&&!Ie.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ct(-1,n&-n),a.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?a.next=a:(a.next=y.next,y.next=a),p.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ji(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(m(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ji(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Te(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Tn(t,n),o=Ke(o),r=r(o),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,o=ot(r,t.pendingProps),o=ot(r.type,o),Fa(e,t,r,o,n);case 15:return Wa(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),fo(e,t),t.tag=1,je(r)?(e=!0,Jr(t)):e=!1,Tn(t,n),ja(t,r,o),Ki(t,r,o,n),bi(null,t,r,!0,e,n);case 19:return Ya(e,t,n);case 22:return Ha(e,t,n)}throw Error(m(156,t.tag))};function wu(e,t){return bl(e,t)}function Rd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Rd(e,t,n,r)}function vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Td(e){if(typeof e=="function")return vl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===ct)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Co(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")vl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Le:return an(n.children,o,i,t);case Qe:l=8,o|=8;break;case Tt:return e=qe(12,n,t,o|2),e.elementType=Tt,e.lanes=i,e;case Ue:return e=qe(13,n,t,o),e.elementType=Ue,e.lanes=i,e;case et:return e=qe(19,n,t,o),e.elementType=et,e.lanes=i,e;case se:return Eo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yt:l=10;break e;case Kt:l=9;break e;case ut:l=11;break e;case ct:l=14;break e;case _e:l=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=qe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function an(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Eo(e,t,n,r){return e=qe(22,e,r,t),e.elementType=se,e.lanes=n,e.stateNode={isHidden:!1},e}function wl(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function kl(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nd(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Sl(e,t,n,r,o,i,l,s,a){return e=new Nd(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mi(i),e}function Ld(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ku(e){if(!e)return zt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(je(n))return Ks(e,n,t)}return t}function Su(e,t,n,r,o,i,l,s,a){return e=Sl(n,r,!0,e,o,i,l,s,a),e.context=ku(null),n=e.current,r=Ne(),o=Vt(n),i=Ct(r,o),i.callback=t??null,Ot(n,i,o),e.current.lanes=o,Wn(e,o,r),De(e,r),e}function Po(e,t,n,r){var o=t.current,i=Ne(),l=Vt(o);return n=ku(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(o,t,l),e!==null&&(st(e,o,l,i),to(e,o,l)),l}function Ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xl(e,t){xu(e,t),(e=e.alternate)&&xu(e,t)}function _d(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cl(e){this._internalRoot=e}To.prototype.render=Cl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Po(e,t,null,null)},To.prototype.unmount=Cl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Po(null,e,null,null)}),t[vt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=ls();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&us(e)}};function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Id(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var p=Ro(l);i.call(p)}}var l=Su(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=l,e[vt]=l.current,tr(e.nodeType===8?e.parentNode:e),on(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var p=Ro(a);s.call(p)}}var a=Sl(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=a,e[vt]=a.current,tr(e.nodeType===8?e.parentNode:e),on(function(){Po(t,a,n,r)}),a}function Lo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Ro(l);s.call(a)}}Po(t,l,e,o)}else l=Id(n,t,e,o,r);return Ro(l)}os=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(Ko(t,n|1),De(t,ue()),(F&6)===0&&(jn=ue()+500,Ut()))}break;case 13:on(function(){var r=xt(e,1);if(r!==null){var o=Ne();st(r,e,1,o)}}),xl(e,1)}},Yo=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Ne();st(t,e,134217728,n)}xl(e,134217728)}},is=function(e){if(e.tag===13){var t=Vt(e),n=xt(e,t);if(n!==null){var r=Ne();st(n,e,t,r)}xl(e,t)}},ls=function(){return G},ss=function(e,t){var n=G;try{return G=e,t()}finally{G=n}},Wo=function(e,t,n){switch(t){case"input":if(Ao(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Qr(r);if(!o)throw Error(m(90));Il(r),Ao(r,o)}}}break;case"textarea":zl(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Ql=hl,Gl=on;var jd={usingClientEntryPoint:!1,Events:[or,wn,Qr,Vl,$l,hl]},vr={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ad={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xl(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||_d,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Rr=_o.inject(Ad),dt=_o}catch{}}return ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jd,ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!El(t))throw Error(m(200));return Ld(e,t,null,n)},ze.createRoot=function(e,t){if(!El(e))throw Error(m(299));var n=!1,r="",o=Cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Sl(e,1,!1,null,null,n,!1,r,o),e[vt]=t.current,tr(e.nodeType===8?e.parentNode:e),new Cl(t)},ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=Xl(t),e=e===null?null:e.stateNode,e},ze.flushSync=function(e){return on(e)},ze.hydrate=function(e,t,n){if(!No(t))throw Error(m(200));return Lo(null,e,t,!0,n)},ze.hydrateRoot=function(e,t,n){if(!El(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Cu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Su(t,null,e,1,n??null,o,!1,i,l),e[vt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new To(t)},ze.render=function(e,t,n){if(!No(t))throw Error(m(200));return Lo(null,e,t,!1,n)},ze.unmountComponentAtNode=function(e){if(!No(e))throw Error(m(40));return e._reactRootContainer?(on(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1},ze.unstable_batchedUpdates=hl,ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!No(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return Lo(e,t,n,!1,r)},ze.version="18.3.1-next-f1338f8080-20240426",ze}var ju;function Wd(){if(ju)return Tl.exports;ju=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(E){console.error(E)}}return x(),Tl.exports=Fd(),Tl.exports}var Au;function Hd(){if(Au)return Io;Au=1;var x=Wd();return Io.createRoot=x.createRoot,Io.hydrateRoot=x.hydrateRoot,Io}var Vd=Hd(),Jt=_l();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=x=>x.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qd=x=>x.replace(/^([A-Z])|[\s-_]+(\w)/g,(E,m,M)=>M?M.toUpperCase():m.toLowerCase()),Mu=x=>{const E=Qd(x);return E.charAt(0).toUpperCase()+E.slice(1)},Bu=(...x)=>x.filter((E,m,M)=>!!E&&E.trim()!==""&&M.indexOf(E)===m).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=Jt.forwardRef(({color:x="currentColor",size:E=24,strokeWidth:m=2,absoluteStrokeWidth:M,className:_="",children:O,iconNode:b,...le},$)=>Jt.createElement("svg",{ref:$,...Gd,width:E,height:E,stroke:x,strokeWidth:M?Number(m)*24/Number(E):m,className:Bu("lucide",_),...le},[...b.map(([ve,me])=>Jt.createElement(ve,me)),...Array.isArray(O)?O:[O]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=(x,E)=>{const m=Jt.forwardRef(({className:M,..._},O)=>Jt.createElement(Jd,{ref:O,iconNode:E,className:Bu(`lucide-${$d(Mu(x))}`,`lucide-${x}`,M),..._}));return m.displayName=Mu(x),m};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Yd=Rt("book-open",Kd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qd=Rt("check",Xd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Zd=Rt("chevron-right",bd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],tf=Rt("circle-alert",ef);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],rf=Rt("copy",nf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],lf=Rt("lightbulb",of);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],af=Rt("menu",sf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],cf=Rt("x",uf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ff=Rt("zap",df);function pf({sections:x,activeSection:E,onSectionChange:m,isOpen:M}){return k.jsxs(k.Fragment,{children:[M&&k.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 lg:hidden",onClick:()=>m(E)}),k.jsx("aside",{className:`fixed top-16 left-0 bottom-0 w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto z-30 transition-transform duration-300 ${M?"translate-x-0":"-translate-x-full lg:translate-x-0"}`,children:k.jsx("nav",{className:"p-4 space-y-1",children:x.map(_=>k.jsxs("button",{onClick:()=>m(_.id),className:`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${E===_.id?"bg-blue-600 text-white":"hover:bg-gray-800 text-gray-300"}`,children:[k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("span",{className:"text-lg",children:_.icon}),k.jsxs("div",{children:[k.jsx("div",{className:"font-medium text-sm",children:_.title}),k.jsx("div",{className:`text-xs ${E===_.id?"text-blue-100":"text-gray-500"}`,children:_.subtitle})]})]}),k.jsx(Zd,{className:`w-4 h-4 transition-transform ${E===_.id?"translate-x-1":""}`})]},_.id))})})]})}function Du({code:x,language:E="jsx"}){const[m,M]=Jt.useState(!1),_=async()=>{await navigator.clipboard.writeText(x),M(!0),setTimeout(()=>M(!1),2e3)};return k.jsxs("div",{className:"relative group",children:[k.jsx("div",{className:"absolute right-3 top-3 z-10",children:k.jsx("button",{onClick:_,className:"flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700 text-sm",children:m?k.jsxs(k.Fragment,{children:[k.jsx(qd,{className:"w-4 h-4 text-green-400"}),k.jsx("span",{className:"text-green-400",children:"Copied!"})]}):k.jsxs(k.Fragment,{children:[k.jsx(rf,{className:"w-4 h-4"}),k.jsx("span",{children:"Copy"})]})})}),k.jsxs("div",{className:"bg-gray-900 rounded-lg border border-gray-800 overflow-hidden",children:[k.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-gray-800/50 border-b border-gray-800",children:[k.jsxs("div",{className:"flex gap-1.5",children:[k.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/80"}),k.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/80"}),k.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/80"})]}),k.jsx("span",{className:"text-xs text-gray-400 ml-2",children:E})]}),k.jsx("pre",{className:"p-4 overflow-x-auto",children:k.jsx("code",{className:"text-sm text-gray-100 font-mono leading-relaxed",children:x})})]})]})}function zu({type:x,title:E,content:m}){const M={note:{icon:Yd,bgColor:"bg-blue-900/20",borderColor:"border-blue-700/50",iconColor:"text-blue-400",titleColor:"text-blue-300"},tip:{icon:lf,bgColor:"bg-green-900/20",borderColor:"border-green-700/50",iconColor:"text-green-400",titleColor:"text-green-300"},important:{icon:ff,bgColor:"bg-purple-900/20",borderColor:"border-purple-700/50",iconColor:"text-purple-400",titleColor:"text-purple-300"},warning:{icon:tf,bgColor:"bg-orange-900/20",borderColor:"border-orange-700/50",iconColor:"text-orange-400",titleColor:"text-orange-300"}},{icon:_,bgColor:O,borderColor:b,iconColor:le,titleColor:$}=M[x];return k.jsx("div",{className:`${O} ${b} border rounded-lg p-4`,children:k.jsxs("div",{className:"flex gap-3",children:[k.jsx(_,{className:`w-5 h-5 ${le} flex-shrink-0 mt-0.5`}),k.jsxs("div",{className:"space-y-1",children:[E&&k.jsx("div",{className:`font-semibold ${$}`,children:E}),k.jsx("div",{className:"text-gray-300 text-sm leading-relaxed",children:m})]})]})})}function mf({section:x}){return k.jsxs("div",{className:"max-w-5xl mx-auto px-6 py-8 space-y-8",children:[k.jsxs("div",{className:"space-y-3",children:[k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("span",{className:"text-3xl",children:x.icon}),k.jsx("h2",{className:"text-3xl font-bold",children:x.title})]}),k.jsx("p",{className:"text-lg text-gray-400",children:x.subtitle})]}),k.jsx("div",{className:"space-y-8",children:x.content.map((E,m)=>k.jsxs("div",{className:"space-y-4",children:[k.jsx("h3",{className:"text-2xl font-semibold text-blue-400",children:E.heading}),E.description&&k.jsx("p",{className:"text-gray-300 leading-relaxed",children:E.description}),E.points&&k.jsx("ul",{className:"space-y-2 ml-6",children:E.points.map((M,_)=>k.jsx("li",{className:"text-gray-300 list-disc",children:M},_))}),E.info&&k.jsx(zu,{...E.info}),E.code&&k.jsx(Du,{code:E.code,language:E.language||"jsx"}),E.subsections&&k.jsx("div",{className:"space-y-6 ml-4 border-l-2 border-gray-800 pl-6",children:E.subsections.map((M,_)=>k.jsxs("div",{className:"space-y-3",children:[k.jsx("h4",{className:"text-xl font-semibold text-cyan-400",children:M.heading}),M.description&&k.jsx("p",{className:"text-gray-300 leading-relaxed",children:M.description}),M.points&&k.jsx("ul",{className:"space-y-2 ml-6",children:M.points.map((O,b)=>k.jsx("li",{className:"text-gray-300 list-disc",children:O},b))}),M.code&&k.jsx(Du,{code:M.code,language:M.language||"jsx"}),M.info&&k.jsx(zu,{...M.info})]},_))})]},m))})]})}const Uu=[{id:"intro",title:"Introduction to React",subtitle:"What is React & Why Use It?",icon:"⚛️",content:[{heading:"What is React?",description:"React is a JavaScript library for building user interfaces. Think of it like building blocks for websites - you create small pieces (components) and combine them to make a complete website.",points:["Created by Facebook (Meta) in 2013","Used by Netflix, Instagram, Airbnb, and thousands of companies","Makes building interactive websites easier and faster","Free and open-source"]},{heading:"What is SPA (Single Page Application)?",description:"A Single Page Application loads only one HTML page and updates the content dynamically without refreshing the page. It's like a book where you flip through pages instantly without closing and reopening the book.",info:{type:"tip",title:"Real World Example",content:"Gmail is an SPA - when you click on an email, the page doesn't reload, it just shows the email content smoothly."}},{heading:"Virtual DOM",description:"The Virtual DOM is like a blueprint of your website that React keeps in memory. When something changes, React compares the old blueprint with the new one and only updates the parts that actually changed, making your website super fast.",points:["Regular DOM: Updates the entire page (slow)","Virtual DOM: Updates only what changed (fast)","React handles this automatically - you don't need to worry about it!"],info:{type:"note",content:"Think of it like autocorrect - it only changes the wrong words, not the entire sentence."}}]},{id:"jsx",title:"JSX Syntax",subtitle:"Writing HTML in JavaScript",icon:"📝",content:[{heading:"What is JSX?",description:"JSX stands for JavaScript XML. It lets you write HTML-like code inside JavaScript. It looks like HTML but has the power of JavaScript.",code:`// This is JSX - looks like HTML but it's JavaScript!
function Greeting() {
  return <h1>Hello, World!</h1>;
}

// You can use JavaScript variables inside JSX
function Welcome() {
  const name = "Sarah";
  return <h1>Hello, {name}!</h1>;
}`,info:{type:"important",title:"Key Rule",content:"Use curly braces { } to include JavaScript expressions in JSX."}},{heading:"JSX Rules You Must Know",subsections:[{heading:"1. Return One Parent Element",description:"You must wrap multiple elements in a single parent element.",code:`// ❌ Wrong - Multiple parent elements
function Wrong() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}

// ✅ Correct - Wrapped in one parent
function Correct() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// ✅ Also Correct - Using Fragment <>
function AlsoCorrect() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}`},{heading:"2. Use className Instead of class",description:'Since "class" is a reserved word in JavaScript, we use "className" in JSX.',code:`// ❌ Wrong
<div class="container">Content</div>

// ✅ Correct
<div className="container">Content</div>`},{heading:"3. Close All Tags",description:"In JSX, every tag must be closed, even self-closing tags.",code:`// ❌ Wrong
<img src="photo.jpg">
<input type="text">

// ✅ Correct
<img src="photo.jpg" />
<input type="text" />`},{heading:"4. Use camelCase for Attributes",code:`// HTML uses kebab-case
<button onclick="handleClick()">Click</button>

// JSX uses camelCase
<button onClick={handleClick}>Click</button>`}]}]},{id:"setup",title:"Project Setup",subtitle:"Getting Started with React",icon:"🛠️",content:[{heading:"Setting Up React with Vite (Recommended)",description:"Vite is a modern build tool that is faster than Create React App. It's the recommended way to start new React projects.",code:`# Install Node.js first from nodejs.org

# Create a new React project with Vite
npm create vite@latest my-app -- --template react

# Navigate to your project folder
cd my-app

# Install dependencies
npm install

# Start the development server
npm run dev`,info:{type:"tip",title:"Why Vite?",content:"Vite is much faster than Create React App. It starts your dev server in seconds, not minutes!"}},{heading:"Alternative: Create React App",description:"An older but still popular way to set up React.",code:`# Create a new React app
npx create-react-app my-app

# Navigate to your project
cd my-app

# Start the app
npm start`},{heading:"Folder Structure Best Practices",description:"A well-organized project structure makes your code easier to maintain.",code:`my-app/
├── public/              # Static files (images, fonts)
│   └── favicon.ico
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── hooks/          # Custom hooks
│   │   └── useAuth.js
│   ├── utils/          # Helper functions
│   │   └── formatDate.js
│   ├── styles/         # CSS files
│   │   └── App.css
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── package.json
└── vite.config.js`,info:{type:"note",content:"This is just a suggestion. As you learn more, you can organize your folders differently based on your project needs."}}]},{id:"components",title:"Components",subtitle:"Building Blocks of React",icon:"🧩",content:[{heading:"What are Components?",description:"Components are like LEGO blocks. Each component is a piece of your website that you can reuse. A button, a header, a form - all can be components.",info:{type:"tip",content:"Think of a website like a car. The engine, wheels, and seats are all separate components that work together."}},{heading:"Functional Components",description:"These are the modern way to create components. They're just JavaScript functions that return JSX.",code:`// A simple component
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}`,info:{type:"important",title:"Naming Rule",content:"Component names MUST start with a capital letter: Button, not button."}},{heading:"Component Reusability",description:"The power of components is that you can use them multiple times. Write once, use everywhere!",code:`// Create a reusable Button component
function Button({ text, color }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

// Use it multiple times with different values
function App() {
  return (
    <div>
      <Button text="Save" color="green" />
      <Button text="Delete" color="red" />
      <Button text="Cancel" color="gray" />
    </div>
  );
}`},{heading:"Real World Example",description:"Here's a practical example of a reusable Card component.",code:`function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card 
        title="iPhone 15"
        description="Latest model with amazing features"
        imageUrl="/iphone.jpg"
      />
      <Card 
        title="MacBook Pro"
        description="Powerful laptop for developers"
        imageUrl="/macbook.jpg"
      />
    </div>
  );
}`}]},{id:"props",title:"Props",subtitle:"Passing Data to Components",icon:"📦",content:[{heading:"What are Props?",description:'Props (short for "properties") are like arguments you pass to a function. They let you send data from a parent component to a child component.',info:{type:"note",content:"Think of props like settings on your phone - you pass different settings to make your phone work the way you want."}},{heading:"Using Props",code:`// Child component receives props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent component sends props
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}`,info:{type:"important",title:"Props are Read-Only",content:"You cannot change props inside a component. They are like sealed packages - you can read them but not modify them."}},{heading:"Destructuring Props (Cleaner Way)",description:"Instead of writing props.name every time, you can destructure props to make code cleaner.",code:`// Without destructuring
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.age} years old</p>
    </div>
  );
}

// With destructuring (cleaner!)
function UserCard({ name, email, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age} years old</p>
    </div>
  );
}`},{heading:"Default Props",description:"You can set default values for props in case they're not provided.",code:`function Button({ text = "Click Me", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

// Usage
<Button />  // Shows "Click Me" with blue color
<Button text="Submit" />  // Shows "Submit" with blue color
<Button text="Delete" color="red" />  // Shows "Delete" with red color`},{heading:"Children Props",description:'The special "children" prop lets you pass content between component tags.',code:`function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage
function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>This is inside the card!</p>
      <button>Click me</button>
    </Card>
  );
}`,info:{type:"tip",content:"Children props are great for wrapper components like modals, cards, and layouts."}}]},{id:"state",title:"State & Events",subtitle:"Making Components Interactive",icon:"🎮",content:[{heading:"What is State?",description:"State is like a component's memory. It remembers information that can change over time. When state changes, React automatically re-renders (updates) your component.",info:{type:"note",content:"Think of state like a light switch - it can be ON or OFF, and when you flip it, the light changes."}},{heading:"useState Hook",description:"useState is a React Hook that lets you add state to functional components.",code:`import { useState } from 'react';

function Counter() {
  // Create state variable "count" with initial value 0
  // setCount is the function to update count
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}`,info:{type:"important",title:"useState Syntax",content:"const [value, setValue] = useState(initialValue) - Always use this pattern!"}},{heading:"Event Handling",description:"Events are user actions like clicks, typing, or hovering. React lets you handle these events easily.",code:`function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}

// Common events:
// onClick - when user clicks
// onChange - when input value changes
// onSubmit - when form is submitted
// onMouseEnter - when mouse enters element
// onKeyDown - when key is pressed

function EventExamples() {
  return (
    <>
      <button onClick={() => console.log('Clicked!')}>
        Click Me
      </button>
      
      <input 
        onChange={(e) => console.log(e.target.value)}
        placeholder="Type something..."
      />
      
      <div onMouseEnter={() => console.log('Mouse entered!')}>
        Hover over me
      </div>
    </>
  );
}`},{heading:"Practical Example: Toggle Button",code:`import { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);  // Flip the value
  };

  return (
    <div>
      <p>The light is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
}`},{heading:"Conditional Rendering",description:"Show different content based on conditions. Like showing different messages for logged-in vs logged-out users.",code:`function Greeting({ isLoggedIn }) {
  // Method 1: if/else
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in</h1>;
  }
}

// Method 2: Ternary operator (cleaner)
function Greeting({ isLoggedIn }) {
  return (
    <h1>
      {isLoggedIn ? 'Welcome back!' : 'Please sign in'}
    </h1>
  );
}

// Method 3: && operator (for showing/hiding)
function Notification({ hasMessages }) {
  return (
    <div>
      {hasMessages && <p>You have new messages!</p>}
    </div>
  );
}`},{heading:"Controlled vs Uncontrolled Components",description:"Controlled components: React controls the input value through state. Uncontrolled: The DOM controls the value.",code:`// ✅ Controlled Component (Recommended)
import { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// ❌ Uncontrolled Component
function UncontrolledInput() {
  return <input />;  // React doesn't control the value
}`,info:{type:"tip",title:"Which to Use?",content:"Always use controlled components for forms. They give you more control and make form validation easier."}},{heading:"Complete Form Example",code:`import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}`}]},{id:"hooks-lifecycle",title:"Hooks & Lifecycle",subtitle:"Managing Side Effects",icon:"🔄",content:[{heading:"useEffect Hook",description:"useEffect lets you perform side effects in components. Side effects are actions that happen outside of rendering, like fetching data, timers, or updating the document title.",info:{type:"note",content:'Think of useEffect as "do something when the component loads or when something changes".'}},{heading:"Basic useEffect",code:`import { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    console.log('Component rendered!');
  });

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`},{heading:"Dependency Arrays",description:"The dependency array controls when useEffect runs.",code:`import { useEffect, useState } from 'react';

function DependencyExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 1. No dependency array - runs after every render
  useEffect(() => {
    console.log('Runs every time');
  });

  // 2. Empty array [] - runs only once (when component mounts)
  useEffect(() => {
    console.log('Runs only once');
  }, []);

  // 3. With dependencies - runs when those values change
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);  // Only runs when count changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}`,info:{type:"important",title:"Common Mistake",content:"Forgetting the dependency array causes infinite loops! Always include it."}},{heading:"Cleanup Functions",description:"Cleanup functions run before the component unmounts or before the effect runs again. They're important for preventing memory leaks.",code:`import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Setup: Start the timer
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup: Stop the timer when component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p>Seconds: {seconds}</p>;
}`,info:{type:"warning",title:"Always Clean Up",content:"Always clean up subscriptions, timers, and event listeners to prevent memory leaks!"}},{heading:"Fetching Data Example",code:`import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);  // Empty array = run once

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}]},{id:"advanced-hooks",title:"Advanced Hooks",subtitle:"useRef, useMemo, useCallback",icon:"⚡",content:[{heading:"useRef Hook",description:"useRef creates a reference to a DOM element or stores a value that persists across renders without causing re-renders.",code:`import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Access the input element directly
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}`,info:{type:"tip",content:"useRef is perfect for accessing DOM elements, storing previous values, or storing timers."}},{heading:"useRef for Storing Values",code:`import { useRef, useState, useEffect } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}`},{heading:"useMemo Hook",description:"useMemo memoizes (caches) expensive calculations so they only run when needed, not on every render.",code:`import { useMemo, useState } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // This calculation only runs when count changes
  const expensiveValue = useMemo(() => {
    console.log('Calculating...');
    return count * 1000;
  }, [count]);

  return (
    <div>
      <p>Result: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      {/* Typing here won't recalculate expensiveValue */}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}`,info:{type:"important",content:"Only use useMemo for expensive calculations. Don't overuse it - it adds complexity!"}},{heading:"useCallback Hook",description:"useCallback memoizes functions so they don't get recreated on every render.",code:`import { useCallback, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is recreated every render
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);  // Function won't change

  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
}`,info:{type:"note",content:"useCallback is useful when passing functions to child components to prevent unnecessary re-renders."}},{heading:"useLayoutEffect",description:"useLayoutEffect is like useEffect, but it runs synchronously after DOM mutations and before the browser paints.",code:`import { useLayoutEffect, useRef } from 'react';

function MeasureElement() {
  const divRef = useRef();

  useLayoutEffect(() => {
    // Measure the element before the browser paints
    const height = divRef.current.offsetHeight;
    console.log('Height:', height);
  }, []);

  return <div ref={divRef}>Content</div>;
}`,info:{type:"warning",content:"Use useLayoutEffect only when you need to measure DOM elements or make visual changes before the browser paints. Otherwise, use useEffect."}},{heading:"Custom Hooks",description:'Custom hooks let you extract component logic into reusable functions. They must start with "use".',code:`import { useState, useEffect } from 'react';

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserList() {
  const { data, loading, error } = useFetch('https://api.example.com/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}`,info:{type:"tip",title:"Custom Hook Benefits",content:"Custom hooks help you reuse logic across components and keep your code clean and organized."}}]},{id:"routing",title:"React Router",subtitle:"Navigation Between Pages",icon:"🌐",content:[{heading:"What is React Router?",description:"React Router enables navigation between different pages in your React app without reloading the page. It's essential for building multi-page applications.",code:`# Install React Router
npm install react-router-dom`},{heading:"Basic Routing Setup",code:`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}`,info:{type:"important",content:"Always wrap your app in <BrowserRouter> at the top level."}},{heading:"Dynamic Routes (URL Parameters)",description:"Dynamic routes let you create pages with variable URLs, like user profiles or product pages.",code:`import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserProfile() {
  const { userId } = useParams();  // Get the URL parameter
  
  return <h1>User Profile: {userId}</h1>;
}

// Visit: /user/123 → Shows "User Profile: 123"
// Visit: /user/456 → Shows "User Profile: 456"`,info:{type:"tip",content:"Use :paramName in the path and useParams() hook to access the value."}},{heading:"Nested Routes",description:"Nested routes let you create layouts with shared components.",code:`import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      {/* Child routes render here */}
      <Outlet />
      
      <footer>Footer</footer>
    </div>
  );
}`},{heading:"Protected Routes (Authentication)",description:"Protect certain routes so only authenticated users can access them.",code:`import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Usage
function App() {
  const isAuthenticated = false;  // Check if user is logged in

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}`,info:{type:"important",content:"Always redirect unauthenticated users to the login page before showing protected content."}},{heading:"404 Not Found Page",code:`function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}`},{heading:"Query Strings",description:"Access URL query parameters like ?search=react&page=2",code:`import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const query = searchParams.get('search');  // Get 'search' parameter
  const page = searchParams.get('page');     // Get 'page' parameter

  return (
    <div>
      <p>Search: {query}</p>
      <p>Page: {page}</p>
      
      <button onClick={() => setSearchParams({ search: 'react', page: '1' })}>
        Search React
      </button>
    </div>
  );
}

// URL: /search?search=react&page=2`}]},{id:"api-integration",title:"API Integration",subtitle:"Fetching & Managing Data",icon:"📡",content:[{heading:"What is an API?",description:"API (Application Programming Interface) is like a waiter in a restaurant - you tell it what you want, and it brings you the data from the server.",info:{type:"note",content:"Most modern apps use REST APIs to communicate with servers using HTTP requests."}},{heading:"Using Fetch API",description:"Fetch is the built-in JavaScript way to make HTTP requests.",code:`import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`},{heading:"Using Axios (Recommended)",description:"Axios is a popular library that makes HTTP requests easier and cleaner.",code:`# Install Axios
npm install axios`,subsections:[{heading:"GET Request",code:`import { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}`},{heading:"POST Request",code:`import { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1
      });
      
      console.log('Created:', response.data);
      alert('Post created!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea 
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button type="submit">Create Post</button>
    </form>
  );
}`},{heading:"DELETE Request",code:`import axios from 'axios';

function DeletePost({ postId }) {
  const handleDelete = async () => {
    try {
      await axios.delete(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`);
      alert('Post deleted!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}`}]},{heading:"Loading States",description:"Always show a loading indicator while data is being fetched.",code:`function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('API_URL');
      setData(response.data);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="spinner">
        <p>Loading...</p>
      </div>
    );
  }

  return <div>{/* Display data */}</div>;
}`,info:{type:"tip",content:"Use a spinner or skeleton screen for better UX during loading."}},{heading:"Error Handling",code:`function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('API_URL');
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <div>{/* Display data */}</div>;
}`},{heading:"Pagination",code:`import { useState, useEffect } from 'react';
import axios from 'axios';

function PaginatedList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, [page]);

  const fetchItems = async () => {
    setLoading(true);
    const response = await axios.get(\`API_URL?page=\${page}&limit=10\`);
    setItems(response.data);
    setLoading(false);
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <ul>
          {items.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      )}
      
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}`},{heading:"Debouncing (Search Optimization)",description:"Debouncing delays API calls until the user stops typing, reducing unnecessary requests.",code:`import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Wait 500ms after user stops typing
    const timer = setTimeout(() => {
      if (query) {
        searchAPI(query);
      }
    }, 500);

    // Cleanup: cancel the timer if query changes
    return () => clearTimeout(timer);
  }, [query]);

  const searchAPI = async (searchQuery) => {
    const response = await axios.get(\`API_URL?q=\${searchQuery}\`);
    setResults(response.data);
  };

  return (
    <div>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}`,info:{type:"important",content:"Debouncing saves API calls and improves performance, especially for search features."}}]},{id:"state-management",title:"State Management",subtitle:"Context API & Redux",icon:"🧠",content:[{heading:"Why State Management?",description:'When your app grows, passing props through many components becomes messy (called "prop drilling"). State management solutions solve this by providing global state.',info:{type:"note",content:"Think of it like a central warehouse where all components can access data instead of passing it hand-to-hand."}},{heading:"Context API",description:"React's built-in solution for global state. Perfect for small to medium apps.",code:`import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext();

// 2. Create Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Use the Context
function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header className={theme}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  );
}`},{heading:"Real-World Context Example: User Authentication",code:`import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    // Call your API
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    const userData = await response.json();
    setUser(userData);
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easy access
export function useAuth() {
  return useContext(AuthContext);
}

// Usage in any component
function Profile() {
  const { user, logout } = useAuth();

  if (!user) return <p>Please login</p>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}`,info:{type:"tip",content:"Create custom hooks like useAuth() to make using Context easier throughout your app."}},{heading:"Context API Performance Issue",description:"Context causes ALL components using it to re-render when ANY value changes. For large apps, use Redux.",info:{type:"warning",content:"If your context value changes frequently, it can cause performance issues. Split into multiple contexts if needed."}},{heading:"Redux Toolkit (Modern Redux)",description:"Redux is the industry standard for complex state management. Redux Toolkit makes it much easier to use.",code:`# Install Redux Toolkit
npm install @reduxjs/toolkit react-redux`},{heading:"Redux Setup",code:`// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// App.jsx
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}`},{heading:"Creating a Slice",description:"A slice is a piece of your Redux state with reducers and actions.",code:`// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;  // Redux Toolkit allows "mutating" code
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`},{heading:"Using Redux in Components",code:`import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  // Read from Redux store
  const count = useSelector((state) => state.counter.value);
  
  // Get dispatch function
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}`,info:{type:"important",content:"useSelector reads state, useDispatch sends actions. Remember this pattern!"}},{heading:"Async Actions with Thunks",description:"For API calls and async logic, use createAsyncThunk.",code:`import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create async thunk
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios.get('https://api.example.com/users');
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default usersSlice.reducer;

// Usage in component
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';

function UserList() {
  const { list, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {list.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`},{heading:"Redux DevTools",description:"Redux DevTools let you see all state changes and time-travel debug your app.",code:`// Install browser extension: Redux DevTools
// It works automatically with Redux Toolkit!

// In your browser, you can:
// - See all actions dispatched
// - View state changes
// - Time travel (undo actions)
// - Replay actions`,info:{type:"tip",content:"Install Redux DevTools Chrome/Firefox extension for an amazing debugging experience!"}}]},{id:"styling",title:"Styling in React",subtitle:"CSS Modules, Styled Components, Tailwind",icon:"🎨",content:[{heading:"Styling Methods Overview",points:["CSS Modules: Scoped CSS that prevents class name conflicts","Styled Components: Write CSS inside JavaScript","Tailwind CSS: Utility-first CSS framework","Material UI / Ant Design: Pre-built component libraries"]},{heading:"CSS Modules",description:"CSS Modules automatically scope CSS to the component, preventing style conflicts.",code:`/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

.button:hover {
  background-color: darkblue;
}

.primary {
  background-color: green;
}`,subsections:[{heading:"Using CSS Modules",code:`// Button.jsx
import styles from './Button.module.css';

function Button({ children, primary }) {
  return (
    <button className={\`\${styles.button} \${primary ? styles.primary : ''}\`}>
      {children}
    </button>
  );
}

// Usage
<Button>Normal Button</Button>
<Button primary>Primary Button</Button>`}],info:{type:"tip",content:"CSS Modules are great for traditional CSS lovers who want scoping without learning new syntax."}},{heading:"Styled Components",description:"Write CSS directly in your JavaScript files using template literals.",code:`# Install styled-components
npm install styled-components`,subsections:[{heading:"Basic Usage",code:`import styled from 'styled-components';

// Create styled component
const Button = styled.button\`
  background-color: \${props => props.primary ? 'green' : 'blue'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
\`;

// Usage
function App() {
  return (
    <div>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  );
}`},{heading:"With Props",code:`const Card = styled.div\`
  padding: 20px;
  background: \${props => props.dark ? '#333' : '#fff'};
  color: \${props => props.dark ? '#fff' : '#000'};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
\`;

// Usage
<Card>Light Card</Card>
<Card dark>Dark Card</Card>`}]},{heading:"Tailwind CSS",description:"Utility-first CSS framework. Style elements using pre-defined classes.",code:`# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init`,subsections:[{heading:"Using Tailwind Classes",code:`function Button({ children, variant = 'primary' }) {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  return (
    <button className={\`\${baseClasses} \${variantClasses[variant]}\`}>
      {children}
    </button>
  );
}

// Usage
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Delete</Button>`},{heading:"Responsive Design",code:`function Card() {
  return (
    <div className="
      w-full           /* Full width on mobile */
      md:w-1/2         /* Half width on tablets */
      lg:w-1/3         /* Third width on desktop */
      p-4              /* Padding */
      bg-white         /* Background */
      rounded-lg       /* Rounded corners */
      shadow-lg        /* Shadow */
    ">
      <h2 className="text-xl md:text-2xl lg:text-3xl">
        Responsive Title
      </h2>
    </div>
  );
}`,info:{type:"tip",content:"Tailwind prefixes: sm: (640px), md: (768px), lg: (1024px), xl: (1280px)"}}]},{heading:"Material UI",description:"Pre-built React components following Google's Material Design.",code:`# Install Material UI
npm install @mui/material @emotion/react @emotion/styled`,subsections:[{heading:"Using MUI Components",code:`import { Button, TextField, Card, CardContent } from '@mui/material';

function Form() {
  return (
    <Card>
      <CardContent>
        <TextField 
          label="Email" 
          variant="outlined" 
          fullWidth 
          sx={{ mb: 2 }}
        />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          fullWidth 
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </CardContent>
    </Card>
  );
}`}]},{heading:"Dark Mode Implementation",code:`import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem('darkMode');
    if (saved) setDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Add/remove class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

// Usage
function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <button onClick={toggleDarkMode}>
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}`,info:{type:"important",content:"Always persist dark mode preference in localStorage so users don't have to toggle it every visit."}}]},{id:"testing",title:"Testing React Apps",subtitle:"Jest & React Testing Library",icon:"🧪",content:[{heading:"Why Testing Matters",description:"Testing ensures your app works correctly and prevents bugs when you make changes. It's crucial for getting hired!",points:["Catch bugs before users do","Refactor code with confidence","Document how your code should work","Required skill for most React jobs"]},{heading:"Testing Tools",points:["Jest: JavaScript testing framework (test runner)","React Testing Library: Tests React components the way users interact with them","Both come pre-installed with Create React App and Vite"]},{heading:"Unit Testing - Testing Functions",code:`// sum.js
export function sum(a, b) {
  return a + b;
}

// sum.test.js
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
  expect(sum(5, 7)).toBe(12);
});`,info:{type:"note",content:"Test files should end with .test.js or .spec.js"}},{heading:"Component Testing",description:"Test components by rendering them and checking if they work correctly.",code:`// Button.jsx
export function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click Me</Button>);
  
  const button = screen.getByText('Click Me');
  expect(button).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();  // Mock function
  render(<Button onClick={handleClick}>Click Me</Button>);
  
  const button = screen.getByText('Click Me');
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});`,info:{type:"important",content:"Test user interactions, not implementation details. Focus on what users see and do."}},{heading:"Testing User Interactions",code:`// Counter.jsx
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Counter.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('increments count when button is clicked', () => {
  render(<Counter />);
  
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
  
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('Count: 2')).toBeInTheDocument();
});

test('resets count to 0', () => {
  render(<Counter />);
  
  fireEvent.click(screen.getByText('Increment'));
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('Count: 2')).toBeInTheDocument();
  
  fireEvent.click(screen.getByText('Reset'));
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});`},{heading:"Testing Forms",code:`// LoginForm.jsx
import { useState } from 'react';

export function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

// LoginForm.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';

test('submits form with email and password', () => {
  const mockSubmit = jest.fn();
  render(<LoginForm onSubmit={mockSubmit} />);
  
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByText('Login');
  
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);
  
  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});`},{heading:"Mocking API Calls",description:"Don't make real API calls in tests. Use mocks instead.",code:`// UserList.jsx
import { useEffect, useState } from 'react';

export function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// UserList.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import { UserList } from './UserList';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ])
  })
);

test('loads and displays users', async () => {
  render(<UserList />);
  
  // Initially shows loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  // Wait for users to load
  await waitFor(() => {
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });
});`,info:{type:"important",content:"Use waitFor() for async operations. Never use real API calls in tests!"}},{heading:"Snapshot Testing",description:"Snapshot tests capture the component's output and alert you if it changes.",code:`import { render } from '@testing-library/react';
import { Button } from './Button';

test('matches snapshot', () => {
  const { container } = render(<Button>Click Me</Button>);
  expect(container).toMatchSnapshot();
});

// First run creates a snapshot file
// Future runs compare against the snapshot
// If different, test fails (update with 'u' if intentional)`,info:{type:"warning",content:"Don't overuse snapshots. They can give false confidence. Prefer specific assertions."}},{heading:"Running Tests",code:`# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test Button.test.jsx`}]},{id:"performance",title:"Performance Optimization",subtitle:"Making React Apps Faster",icon:"⚡",content:[{heading:"Why Performance Matters",description:"Slow apps frustrate users and hurt your business. Performance optimization ensures your app runs smoothly even with complex data.",info:{type:"note",content:"Only optimize when you have a performance problem. Don't prematurely optimize!"}},{heading:"React.memo - Prevent Unnecessary Re-renders",description:"React.memo prevents a component from re-rendering if its props haven't changed.",code:`import { memo } from 'react';

// Without memo: Re-renders every time parent re-renders
function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
}

// With memo: Only re-renders when data changes
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const data = "Hello";

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {/* ExpensiveComponent won't re-render when count changes */}
      <ExpensiveComponent data={data} />
    </div>
  );
}`,info:{type:"tip",content:"Use React.memo for expensive components that render often with the same props."}},{heading:"useMemo - Memoize Expensive Calculations",description:"useMemo caches calculation results and only recalculates when dependencies change.",code:`import { useMemo, useState } from 'react';

function ProductList({ products }) {
  const [filter, setFilter] = useState('');

  // Without useMemo: Filters on EVERY render (slow!)
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  // With useMemo: Only filters when products or filter changes
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(p => 
      p.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

  return (
    <div>
      <input 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search..."
      />
      {filteredProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}`,info:{type:"important",content:"Only use useMemo for expensive calculations (loops, filtering large arrays). Simple operations don't need it."}},{heading:"useCallback - Memoize Functions",description:"useCallback prevents functions from being recreated on every render.",code:`import { useCallback, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Without useCallback: New function on every render
  const handleClick = () => {
    console.log('Clicked!');
  };

  // With useCallback: Same function unless dependencies change
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);  // No dependencies = function never changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

const ChildComponent = memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});`,info:{type:"note",content:"useCallback is most useful when passing functions to memoized child components."}},{heading:"Code Splitting & Lazy Loading",description:"Load components only when needed instead of loading everything at once.",code:`import { lazy, Suspense } from 'react';

// Instead of: import Dashboard from './Dashboard';
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('dashboard')}>Dashboard</button>
        <button onClick={() => setPage('settings')}>Settings</button>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        {page === 'home' && <Home />}
        {page === 'dashboard' && <Dashboard />}
        {page === 'settings' && <Settings />}
      </Suspense>
    </div>
  );
}`,info:{type:"tip",title:"When to Use",content:"Use lazy loading for routes, modals, and heavy components that aren't needed immediately."}},{heading:"Virtualization - Rendering Large Lists",description:"For lists with thousands of items, only render what's visible on screen.",code:`# Install react-window
npm install react-window

import { FixedSizeList } from 'react-window';

function LargeList({ items }) {
  // Render row component
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={600}        // Height of the list container
      itemCount={items.length}  // Total number of items
      itemSize={50}       // Height of each item
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// Instead of rendering 10,000 items, only renders ~12 visible items!`,info:{type:"important",content:"Use virtualization when rendering 100+ items. It dramatically improves performance!"}},{heading:"Avoiding Unnecessary Re-renders",description:"Common mistakes that cause components to re-render unnecessarily.",code:`function Parent() {
  const [count, setCount] = useState(0);

  // ❌ BAD: Creates new object every render
  const user = { name: 'John', age: 30 };

  // ✅ GOOD: Move outside component or use useMemo
  const user = useMemo(() => ({ name: 'John', age: 30 }), []);

  // ❌ BAD: Creates new array every render
  const items = [1, 2, 3];

  // ✅ GOOD: Move outside component
  const items = [1, 2, 3];

  // ❌ BAD: Inline function in prop
  return <Child onClick={() => console.log('clicked')} />;

  // ✅ GOOD: Use useCallback
  const handleClick = useCallback(() => console.log('clicked'), []);
  return <Child onClick={handleClick} />;
}`,info:{type:"warning",title:"Common Mistake",content:"Creating objects/arrays/functions inside render causes child components to re-render even with React.memo!"}},{heading:"Debouncing & Throttling",description:"Limit how often functions execute, especially for expensive operations.",code:`import { useState, useCallback } from 'react';

// Debounce: Wait until user stops typing
function SearchInput() {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((value) => {
      // API call here
      console.log('Searching:', value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return <input value={query} onChange={handleChange} />;
}

// Helper function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}`,info:{type:"tip",content:"Debounce for search inputs, throttle for scroll/resize events. Both save API calls and improve performance."}}]},{id:"authentication",title:"Authentication & Security",subtitle:"User Login & Protected Routes",icon:"🔐",content:[{heading:"JWT Authentication Basics",description:"JWT (JSON Web Token) is the most common way to handle authentication in React apps. The server sends a token after login, and you include it in future requests.",info:{type:"note",content:"JWT is like a ticket - the server gives you a ticket when you login, and you show this ticket for every request."}},{heading:"Login Flow",code:`import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://api.example.com/login', {
        email,
        password
      });
      
      // Store token
      localStorage.setItem('token', response.data.token);
      
      // Store user info
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      
      <button type="submit">Login</button>
    </form>
  );
}`},{heading:"Auth Context for Global State",code:`import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('/api/login', { email, password });
    
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    
    setUser(response.data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// Wrap your app
function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Your routes */}
      </Routes>
    </AuthProvider>
  );
}`},{heading:"Protected Routes",description:"Prevent unauthenticated users from accessing certain pages.",code:`import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Usage in routes
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Protected routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}`,info:{type:"important",content:"Always check authentication on the backend too! Frontend checks can be bypassed."}},{heading:"Making Authenticated API Requests",description:"Include the JWT token in API requests to access protected endpoints.",code:`import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: 'https://api.example.com'
});

// Add token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Usage
function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/dashboard-data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return <div>{/* Display data */}</div>;
}`,info:{type:"tip",content:"Use Axios interceptors to automatically add tokens to all requests. This keeps your code DRY."}},{heading:"Role-Based Access Control",description:"Different users see different content based on their role (admin, user, etc.).",code:`function RoleBasedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

// Usage
<Route 
  path="/admin" 
  element={
    <RoleBasedRoute allowedRoles={['admin']}>
      <AdminPanel />
    </RoleBasedRoute>
  } 
/>

<Route 
  path="/dashboard" 
  element={
    <RoleBasedRoute allowedRoles={['admin', 'user']}>
      <Dashboard />
    </RoleBasedRoute>
  } 
/>`},{heading:"Token Storage: localStorage vs Cookies",description:"Where to store JWT tokens? Both have pros and cons.",points:["localStorage: Easy to use, but vulnerable to XSS attacks","httpOnly Cookies: More secure, immune to XSS, but needs backend setup","Best practice: Use httpOnly cookies for tokens, localStorage for non-sensitive data"],info:{type:"warning",title:"Security Warning",content:"Never store sensitive data (passwords, credit cards) in localStorage or cookies. Only store tokens and non-sensitive user info."}},{heading:"Security Best Practices",points:["Always use HTTPS in production","Validate and sanitize all user inputs","Never trust data from the client","Implement rate limiting for login attempts","Use strong password requirements","Enable two-factor authentication when possible","Keep tokens short-lived and refresh them","Log out users after inactivity","Don't expose sensitive data in error messages"],info:{type:"important",content:"Security is a shared responsibility between frontend and backend. Never rely on frontend validation alone!"}}]},{id:"advanced",title:"Advanced React Concepts",subtitle:"SSR, SSG, Next.js & More",icon:"🚀",content:[{heading:"Server Side Rendering (SSR)",description:"SSR renders your React app on the server and sends HTML to the browser. This improves SEO and initial load time.",points:["Good for SEO - search engines can read your content","Faster initial page load","Better for social media sharing (preview images work)","More server resources needed"],info:{type:"note",content:"Regular React apps are CSR (Client Side Rendering) - the browser gets empty HTML and JavaScript builds the page."}},{heading:"Static Site Generation (SSG)",description:"SSG generates HTML pages at build time. Super fast because pages are pre-built.",points:["Blazing fast - pages are already built","Great for blogs, documentation, marketing sites","Perfect SEO","Can't show real-time data"]},{heading:"Next.js - React Framework",description:"Next.js is the most popular React framework with built-in SSR, SSG, routing, and more.",code:`# Create a Next.js app
npx create-next-app@latest my-app

# Navigate to your project
cd my-app

# Start the dev server
npm run dev`,info:{type:"tip",content:"Next.js is used by Netflix, TikTok, Twitch, and thousands of companies. It's essential for modern React development."}},{heading:"Next.js Pages",description:"Next.js uses file-based routing. Create a file, get a route!",code:`// pages/index.js → Homepage (/)
export default function Home() {
  return <h1>Home Page</h1>;
}

// pages/about.js → About page (/about)
export default function About() {
  return <h1>About Page</h1>;
}

// pages/blog/[id].js → Dynamic route (/blog/1, /blog/2, etc.)
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  
  return <h1>Blog Post {id}</h1>;
}`},{heading:"Next.js Data Fetching",code:`// SSG: getStaticProps - Runs at build time
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: { posts }
  };
}

export default function Blog({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

// SSR: getServerSideProps - Runs on every request
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/users');
  const users = await res.json();

  return {
    props: { users }
  };
}`,info:{type:"important",content:"Use getStaticProps for data that doesn't change often. Use getServerSideProps for real-time data."}},{heading:"SEO in React",description:"Make your React app search engine friendly.",code:`// Using react-helmet for SEO
npm install react-helmet

import { Helmet } from 'react-helmet';

function BlogPost({ post }) {
  return (
    <>
      <Helmet>
        <title>{post.title} - My Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Helmet>
      
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </>
  );
}`,info:{type:"tip",content:"In Next.js, use the built-in <Head> component instead of react-helmet."}},{heading:"Internationalization (i18n)",description:"Support multiple languages in your app.",code:`# Install react-i18next
npm install react-i18next i18next

// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome',
        greeting: 'Hello, {{name}}!'
      }
    },
    es: {
      translation: {
        welcome: 'Bienvenido',
        greeting: '¡Hola, {{name}}!'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en'
});

// Usage
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'John' })}</p>
      
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('es')}>Español</button>
    </div>
  );
}`},{heading:"WebSockets - Real-Time Apps",description:"WebSockets enable real-time communication between client and server. Perfect for chat apps, notifications, live updates.",code:`import { useEffect, useState } from 'react';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Connect to WebSocket server
    const websocket = new WebSocket('ws://localhost:3000');

    websocket.onopen = () => {
      console.log('Connected to WebSocket');
    };

    websocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages(prev => [...prev, message]);
    };

    websocket.onclose = () => {
      console.log('Disconnected from WebSocket');
    };

    setWs(websocket);

    // Cleanup
    return () => {
      websocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && input) {
      ws.send(JSON.stringify({ text: input, user: 'You' }));
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, i) => (
          <div key={i}>{msg.user}: {msg.text}</div>
        ))}
      </div>
      
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}`,info:{type:"tip",content:"For production, use Socket.io instead of raw WebSockets. It handles reconnection, fallbacks, and more."}},{heading:"Micro-Frontends",description:"Split your large app into smaller, independent apps that work together.",points:["Each team owns a separate micro-app","Deploy independently","Use different frameworks if needed","Complex to set up, great for large teams"],info:{type:"note",content:"Micro-frontends are like microservices but for the frontend. Only needed for very large applications with multiple teams."}}]},{id:"tooling",title:"Tooling & Best Practices",subtitle:"Git, ESLint, Prettier & More",icon:"🛠️",content:[{heading:"Git & GitHub Basics",description:"Version control is essential for tracking changes and collaborating with others.",code:`# Initialize a git repository
git init

# Check status
git status

# Add files to staging
git add .

# Commit changes
git commit -m "Add login feature"

# Create a new branch
git checkout -b feature/new-feature

# Switch between branches
git checkout main

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# See commit history
git log`},{heading:"ESLint - Code Quality",description:"ESLint finds and fixes problems in your JavaScript code.",code:`# Install ESLint
npm install --save-dev eslint

# Initialize ESLint
npx eslint --init

# Run ESLint
npx eslint src/

# Auto-fix issues
npx eslint src/ --fix`,subsections:[{heading:"ESLint Config Example",code:`// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "no-console": "warn"
  }
}`,language:"json"}]},{heading:"Prettier - Code Formatting",description:"Prettier automatically formats your code to keep it consistent.",code:`# Install Prettier
npm install --save-dev prettier

# Create config file
echo {} > .prettierrc.json

# Format all files
npx prettier --write .`,subsections:[{heading:"Prettier Config",code:`// .prettierrc.json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}`,language:"json"}],info:{type:"tip",content:"Use Prettier with ESLint for the best experience. Prettier formats, ESLint catches bugs."}},{heading:"Environment Variables",description:"Store API keys and sensitive data in environment variables, not in your code.",code:`# Create .env file in project root
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your_api_key_here

# For Vite projects, use VITE_ prefix
VITE_API_URL=https://api.example.com

# Access in your code
// Create React App
const apiUrl = process.env.REACT_APP_API_URL;

// Vite
const apiUrl = import.meta.env.VITE_API_URL;

// Usage
axios.get(\`\${apiUrl}/users\`)`,info:{type:"warning",title:"Important",content:"Add .env to .gitignore! Never commit API keys to GitHub. Create .env.example without real values for your team."}},{heading:"Folder Structure for Large Apps",code:`src/
├── components/           # Reusable components
│   ├── common/          # Buttons, Inputs, etc.
│   ├── layout/          # Header, Footer, Sidebar
│   └── features/        # Feature-specific components
│
├── pages/               # Page components
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.module.css
│   │   └── index.js
│   └── Dashboard/
│
├── hooks/               # Custom hooks
│   ├── useAuth.js
│   └── useFetch.js
│
├── context/             # Context providers
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── services/            # API calls
│   ├── api.js
│   └── authService.js
│
├── utils/               # Helper functions
│   ├── formatDate.js
│   └── validation.js
│
├── constants/           # Constants
│   └── apiEndpoints.js
│
├── store/               # Redux store (if using Redux)
│   ├── store.js
│   └── slices/
│
└── App.jsx`},{heading:"Deployment - Netlify",description:"Deploy your React app to the internet for free!",code:`# Build your app
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod

# Or connect GitHub:
# 1. Push code to GitHub
# 2. Go to netlify.com
# 3. Click "New site from Git"
# 4. Select your repository
# 5. Build command: npm run build
# 6. Publish directory: build (or dist for Vite)`,info:{type:"tip",content:"Netlify auto-deploys when you push to GitHub. Every commit creates a new deployment!"}},{heading:"Deployment - Vercel",description:"Vercel is perfect for Next.js apps (made by the same team!).",code:`# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod

# Or connect GitHub:
# 1. Go to vercel.com
# 2. Import your GitHub repository
# 3. Auto-detected framework
# 4. Click Deploy`},{heading:"CI/CD Basics",description:"Continuous Integration/Deployment automatically tests and deploys your code.",code:`# GitHub Actions example (.github/workflows/deploy.yml)
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_SITE_ID: \${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_AUTH_TOKEN: \${{ secrets.NETLIFY_AUTH_TOKEN }}`,language:"yaml"}]},{id:"projects",title:"Practice Projects",subtitle:"Build Real Applications",icon:"📁",content:[{heading:"Why Projects Matter",description:"Building projects is the best way to learn React. Tutorials teach concepts, but projects teach problem-solving.",points:["Solidify your knowledge","Build a portfolio for job applications","Learn to debug and solve real problems","Understand how features work together"]},{heading:"Beginner Projects",subsections:[{heading:"1. Todo App",description:"Classic beginner project covering all React basics.",points:["useState for managing todos","Add, delete, and mark todos as complete","Filter todos (all, active, completed)","localStorage to persist data","Bonus: Dark mode toggle"],info:{type:"tip",content:"Start here! This covers 80% of React basics in one project."}},{heading:"2. Counter App",description:"Simple but great for understanding state.",points:["Increment, decrement, reset buttons","Custom increment amount","Max/min limits","Bonus: Multiple counters"]},{heading:"3. Weather App",description:"Your first API integration project.",points:["Fetch weather data from OpenWeather API","Search by city name","Display temperature, humidity, conditions","Show weather icon","Loading and error states","Bonus: 5-day forecast"],code:`// Example API call
const API_KEY = 'your_api_key';
const city = 'London';

fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}\`)
  .then(res => res.json())
  .then(data => console.log(data));`}]},{heading:"Intermediate Projects",subsections:[{heading:"4. Movie Search App",points:["Search movies using OMDB or TMDB API","Display movie cards with posters","Movie details page (routing)","Favorites/Watchlist feature","Filter by genre, year","Pagination"]},{heading:"5. E-commerce Product Page",points:["Product list with images and prices","Add to cart functionality","Cart page with total calculation","Quantity increase/decrease","Remove from cart","Context API for cart state","Bonus: Checkout form"]},{heading:"6. Social Media Dashboard",points:["User authentication (login/signup)","Create posts","Like and comment","User profile page","Protected routes","Real-time updates (optional: WebSockets)"]}]},{heading:"Advanced Projects",subsections:[{heading:"7. Task Management App (Trello Clone)",points:["Drag and drop tasks between columns","Create boards and lists","Add, edit, delete tasks","User authentication","Real-time collaboration","Use react-beautiful-dnd for drag & drop"]},{heading:"8. Chat Application",points:["Real-time messaging with WebSockets","User authentication","Multiple chat rooms","Online/offline status","Message history","Typing indicators","Use Socket.io"]},{heading:"9. Full-Stack Blog",points:["Next.js for SSR/SSG","Create, edit, delete posts","Markdown support","Comments system","User authentication","Admin dashboard","SEO optimized","Deploy to Vercel"]}]},{heading:"Project Tips",points:["Start small, then add features","Use Git from day 1 - commit often","Write a README with screenshots","Deploy your projects (Netlify/Vercel)","Share on LinkedIn and GitHub","Don't worry about perfection - shipped is better than perfect","Get feedback from developers"],info:{type:"important",title:"Portfolio Tip",content:"3-5 quality projects > 20 basic projects. Focus on making a few projects really good with clean code, good UI, and deployed live."}},{heading:"Free APIs for Practice",points:["JSONPlaceholder - Fake REST API for testing","OpenWeather API - Weather data","TMDB API - Movies and TV shows","NewsAPI - Latest news articles","REST Countries - Country information","PokeAPI - Pokemon data","GitHub API - Repository and user data","CoinGecko API - Cryptocurrency prices"]}]}];function hf(){const[x,E]=Jt.useState("intro"),[m,M]=Jt.useState(!1);return k.jsxs("div",{className:"min-h-screen bg-gray-950 text-gray-100",children:[k.jsx("header",{className:"fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 z-40",children:k.jsxs("div",{className:"flex items-center justify-between px-4 py-4",children:[k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("button",{onClick:()=>M(!m),className:"lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors",children:m?k.jsx(cf,{className:"w-5 h-5"}):k.jsx(af,{className:"w-5 h-5"})}),k.jsx("h1",{className:"text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",children:"React.js Complete Guide"})]}),k.jsx("div",{className:"hidden sm:block text-sm text-gray-400",children:"From Beginner to Advanced"})]})}),k.jsxs("div",{className:"flex pt-16",children:[k.jsx(pf,{sections:Uu,activeSection:x,onSectionChange:_=>{E(_),M(!1)},isOpen:m}),k.jsx("main",{className:"flex-1 lg:ml-80",children:k.jsx(mf,{section:Uu.find(_=>_.id===x)})})]})]})}Vd.createRoot(document.getElementById("root")).render(k.jsx(hf,{}));
