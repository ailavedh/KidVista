var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ee=/\/+/g;function te(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function A(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ne(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ne(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+te(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ee,`$&/`)+`/`),ne(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ee,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+te(a,u),c+=ne(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+te(a,u++),c+=ne(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ne(A(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function j(e,t,n){if(e==null)return e;var r=[],i=0;return ne(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function re(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},N={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=N,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&te(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&te(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,ee=k.port2;k.port1.onmessage=D,O=function(){ee.postMessage(null)}}else O=function(){_(D,0)};function te(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,te(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),ee=Symbol.for(`react.memo_cache_sentinel`),te=Symbol.iterator;function A(e){return typeof e!=`object`||!e?null:(e=te&&e[te]||e[`@@iterator`],typeof e==`function`?e:null)}var ne=Symbol.for(`react.client.reference`);function j(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?j(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return j(e(t))}catch{}}return null}var re=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ae=[],oe=-1;function se(e){return{current:e}}function ce(e){0>oe||(e.current=ae[oe],ae[oe]=null,oe--)}function P(e,t){oe++,ae[oe]=e.current,e.current=t}var le=se(null),ue=se(null),de=se(null),fe=se(null);function pe(e,t){switch(P(de,t),P(ue,e),P(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ce(le),P(le,e)}function me(){ce(le),ce(ue),ce(de)}function he(e){e.memoizedState!==null&&P(fe,e);var t=le.current,n=Hd(t,e.type);t!==n&&(P(ue,e),P(le,n))}function ge(e){ue.current===e&&(ce(le),ce(ue)),fe.current===e&&(ce(fe),Qf._currentValue=ie)}var _e,ve;function ye(e){if(_e===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);_e=t&&t[1]||``,ve=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+_e+e+ve}var be=!1;function xe(e,t){if(!e||be)return``;be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ye(n):``}function Se(e,t){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye(`Lazy`);case 13:return e.child!==t&&t!==null?ye(`Suspense Fallback`):ye(`Suspense`);case 19:return ye(`SuspenseList`);case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return ye(`Activity`);default:return``}}function Ce(e){try{var t=``,n=null;do t+=Se(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var we=Object.prototype.hasOwnProperty,Te=t.unstable_scheduleCallback,Ee=t.unstable_cancelCallback,De=t.unstable_shouldYield,Oe=t.unstable_requestPaint,ke=t.unstable_now,Ae=t.unstable_getCurrentPriorityLevel,je=t.unstable_ImmediatePriority,Me=t.unstable_UserBlockingPriority,Ne=t.unstable_NormalPriority,Pe=t.unstable_LowPriority,Fe=t.unstable_IdlePriority,Ie=t.log,Le=t.unstable_setDisableYieldValue,Re=null,ze=null;function Be(e){if(typeof Ie==`function`&&Le(e),ze&&typeof ze.setStrictMode==`function`)try{ze.setStrictMode(Re,e)}catch{}}var Ve=Math.clz32?Math.clz32:We,He=Math.log,Ue=Math.LN2;function We(e){return e>>>=0,e===0?32:31-(He(e)/Ue|0)|0}var Ge=256,Ke=262144,qe=4194304;function Je(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ye(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Je(n))):i=Je(o):i=Je(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Je(n))):i=Je(o)):i=Je(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Xe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ze(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qe(){var e=qe;return qe<<=1,!(qe&62914560)&&(qe=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function et(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ve(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&nt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function nt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ve(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function it(e,t){var n=t&-t;return n=n&42?1:at(n),(n&(e.suspendedLanes|t))===0?n:0}function at(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ot(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function st(){var e=N.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ct(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var lt=Math.random().toString(36).slice(2),ut=`__reactFiber$`+lt,dt=`__reactProps$`+lt,ft=`__reactContainer$`+lt,pt=`__reactEvents$`+lt,mt=`__reactListeners$`+lt,ht=`__reactHandles$`+lt,gt=`__reactResources$`+lt,_t=`__reactMarker$`+lt;function vt(e){delete e[ut],delete e[dt],delete e[pt],delete e[mt],delete e[ht]}function yt(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ut])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function bt(e){if(e=e[ut]||e[ft]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function St(e){var t=e[gt];return t||=e[gt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ct(e){e[_t]=!0}var wt=new Set,Tt={};function Et(e,t){Dt(e,t),Dt(e+`Capture`,t)}function Dt(e,t){for(Tt[e]=t,e=0;e<t.length;e++)wt.add(t[e])}var Ot=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),kt={},At={};function jt(e){return we.call(At,e)?!0:we.call(kt,e)?!1:Ot.test(e)?At[e]=!0:(kt[e]=!0,!1)}function Mt(e,t,n){if(jt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Nt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function F(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Pt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ft(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function It(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lt(e){if(!e._valueTracker){var t=Ft(e)?`checked`:`value`;e._valueTracker=It(e,t,``+e[t])}}function Rt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ft(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function zt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Bt=/[\n"\\]/g;function Vt(e){return e.replace(Bt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ht(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Pt(t)):e.value!==``+Pt(t)&&(e.value=``+Pt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Wt(e,o,Pt(n)):Wt(e,o,Pt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Pt(s):e.removeAttribute(`name`)}function Ut(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Lt(e);return}n=n==null?``:``+Pt(n),t=t==null?n:``+Pt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Lt(e)}function Wt(e,t,n){t===`number`&&zt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kt(e,t,n){if(t!=null&&(t=``+Pt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Pt(n)}function qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(re(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Pt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Lt(e)}function Jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Xt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Yt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Zt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Xt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Xt(e,o,t[o])}function Qt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var $t=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),en=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tn(e){return en.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function nn(){}var rn=null;function an(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,sn=null;function cn(e){var t=bt(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ht(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Vt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[dt]||null;if(!a)throw Error(i(90));Ht(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Rt(r)}break a;case`textarea`:Kt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}}}var ln=!1;function un(e,t,n){if(ln)return e(t,n);ln=!0;try{return e(t)}finally{if(ln=!1,(on!==null||sn!==null)&&(bu(),on&&(t=on,e=sn,sn=on=null,cn(t),e)))for(t=0;t<e.length;t++)cn(e[t])}}function dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[dt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var fn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),pn=!1;if(fn)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){pn=!0}}),window.addEventListener(`test`,mn,mn),window.removeEventListener(`test`,mn,mn)}catch{pn=!1}var hn=null,gn=null,_n=null;function vn(){if(_n)return _n;var e,t=gn,n=t.length,r,i=`value`in hn?hn.value:hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return _n=i.slice(e,1<r?1-r:void 0)}function yn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function xn(){return!1}function Sn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?bn:xn,this.isPropagationStopped=xn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=Sn(Cn),Tn=m({},Cn,{view:0,detail:0}),En=Sn(Tn),Dn,On,kn,An=m({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==kn&&(kn&&e.type===`mousemove`?(Dn=e.screenX-kn.screenX,On=e.screenY-kn.screenY):On=Dn=0,kn=e),Dn)},movementY:function(e){return`movementY`in e?e.movementY:On}}),jn=Sn(An),Mn=Sn(m({},An,{dataTransfer:0})),Nn=Sn(m({},Tn,{relatedTarget:0})),Pn=Sn(m({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0})),Fn=Sn(m({},Cn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),In=Sn(m({},Cn,{data:0})),Ln={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Rn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Bn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zn[e])?!!t[e]:!1}function Vn(){return Bn}var Hn=Sn(m({},Tn,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=yn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Rn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vn,charCode:function(e){return e.type===`keypress`?yn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?yn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Un=Sn(m({},An,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Wn=Sn(m({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vn})),Gn=Sn(m({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Kn=Sn(m({},An,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=Sn(m({},Cn,{newState:0,oldState:0})),Jn=[9,13,27,32],Yn=fn&&`CompositionEvent`in window,Xn=null;fn&&`documentMode`in document&&(Xn=document.documentMode);var Zn=fn&&`TextEvent`in window&&!Xn,Qn=fn&&(!Yn||Xn&&8<Xn&&11>=Xn),$n=` `,er=!1;function tr(e,t){switch(e){case`keyup`:return Jn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function nr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var rr=!1;function ir(e,t){switch(e){case`compositionend`:return nr(t);case`keypress`:return t.which===32?(er=!0,$n):null;case`textInput`:return e=t.data,e===$n&&er?null:e;default:return null}}function ar(e,t){if(rr)return e===`compositionend`||!Yn&&tr(e,t)?(e=vn(),_n=gn=hn=null,rr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Qn&&t.locale!==`ko`?null:t.data;default:return null}}var or={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!or[e.type]:t===`textarea`}function cr(e,t,n,r){on?sn?sn.push(r):sn=[r]:on=r,t=Ed(t,`onChange`),0<t.length&&(n=new wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var lr=null,ur=null;function dr(e){yd(e,0)}function fr(e){if(Rt(xt(e)))return e}function pr(e,t){if(e===`change`)return t}var mr=!1;if(fn){var hr;if(fn){var gr=`oninput`in document;if(!gr){var _r=document.createElement(`div`);_r.setAttribute(`oninput`,`return;`),gr=typeof _r.oninput==`function`}hr=gr}else hr=!1;mr=hr&&(!document.documentMode||9<document.documentMode)}function vr(){lr&&(lr.detachEvent(`onpropertychange`,yr),ur=lr=null)}function yr(e){if(e.propertyName===`value`&&fr(ur)){var t=[];cr(t,ur,e,an(e)),un(dr,t)}}function br(e,t,n){e===`focusin`?(vr(),lr=t,ur=n,lr.attachEvent(`onpropertychange`,yr)):e===`focusout`&&vr()}function xr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return fr(ur)}function Sr(e,t){if(e===`click`)return fr(t)}function Cr(e,t){if(e===`input`||e===`change`)return fr(t)}function wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Tr=typeof Object.is==`function`?Object.is:wr;function Er(e,t){if(Tr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!we.call(t,i)||!Tr(e[i],t[i]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Or(e,t){var n=Dr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Dr(n)}}function kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=zt(e.document)}return t}function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Mr=fn&&`documentMode`in document&&11>=document.documentMode,Nr=null,Pr=null,Fr=null,Ir=!1;function Lr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Nr==null||Nr!==zt(r)||(r=Nr,`selectionStart`in r&&jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Er(Fr,r)||(Fr=r,r=Ed(Pr,`onSelect`),0<r.length&&(t=new wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var zr={animationend:Rr(`Animation`,`AnimationEnd`),animationiteration:Rr(`Animation`,`AnimationIteration`),animationstart:Rr(`Animation`,`AnimationStart`),transitionrun:Rr(`Transition`,`TransitionRun`),transitionstart:Rr(`Transition`,`TransitionStart`),transitioncancel:Rr(`Transition`,`TransitionCancel`),transitionend:Rr(`Transition`,`TransitionEnd`)},Br={},Vr={};fn&&(Vr=document.createElement(`div`).style,`AnimationEvent`in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),`TransitionEvent`in window||delete zr.transitionend.transition);function Hr(e){if(Br[e])return Br[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vr)return Br[e]=t[n];return e}var Ur=Hr(`animationend`),Wr=Hr(`animationiteration`),Gr=Hr(`animationstart`),Kr=Hr(`transitionrun`),qr=Hr(`transitionstart`),Jr=Hr(`transitioncancel`),Yr=Hr(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),Et(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&oi(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function I(e,t,n,r){return ii(e,t,n,r),si(e)}function ai(e,t){return ii(e,null,null,t),si(e)}function oi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ve(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function si(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ci={};function li(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,t,n,r){return new li(e,t,n,r)}function di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fi(e,t){var n=e.alternate;return n===null?(n=ui(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)di(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,le.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=ui(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return hi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ui(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ui(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ui(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ui(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function hi(e,t,n,r){return e=ui(7,e,r,t),e.lanes=n,e}function gi(e,t,n){return e=ui(6,e,null,t),e.lanes=n,e}function _i(e){var t=ui(18,null,null,0);return t.stateNode=e,t}function vi(e,t,n){return t=ui(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yi=new WeakMap;function bi(e,t){if(typeof e==`object`&&e){var n=yi.get(e);return n===void 0?(t={value:e,source:t,stack:Ce(t)},yi.set(e,t),t):n}return{value:e,source:t,stack:Ce(t)}}var xi=[],Si=0,Ci=null,wi=0,Ti=[],L=0,Ei=null,Di=1,Oi=``;function ki(e,t){xi[Si++]=wi,xi[Si++]=Ci,Ci=e,wi=t}function Ai(e,t,n){Ti[L++]=Di,Ti[L++]=Oi,Ti[L++]=Ei,Ei=e;var r=Di;e=Oi;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var a=32-Ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Di=1<<32-Ve(t)+i|n<<i|r,Oi=a+e}else Di=1<<a|n<<i|r,Oi=e}function ji(e){e.return!==null&&(ki(e,1),Ai(e,1,0))}function Mi(e){for(;e===Ci;)Ci=xi[--Si],xi[Si]=null,wi=xi[--Si],xi[Si]=null;for(;e===Ei;)Ei=Ti[--L],Ti[L]=null,Oi=Ti[--L],Ti[L]=null,Di=Ti[--L],Ti[L]=null}function Ni(e,t){Ti[L++]=Di,Ti[L++]=Oi,Ti[L++]=Ei,Di=t.id,Oi=t.overflow,Ei=e}var Pi=null,R=null,z=!1,Fi=null,Ii=!1,Li=Error(i(519));function Ri(e){throw Wi(bi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Li}function zi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ut]=e,t[dt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Ut(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||Ri(e,!0)}function Bi(e){for(Pi=e.return;Pi;)switch(Pi.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Pi=Pi.return}}function Vi(e){if(e!==Pi)return!1;if(!z)return Bi(e),z=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&R&&Ri(e),Bi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=uf(e)}else t===27?(t=R,Zd(e.type)?(e=lf,lf=null,R=e):R=t):R=Pi?cf(e.stateNode.nextSibling):null;return!0}function Hi(){R=Pi=null,z=!1}function Ui(){var e=Fi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Fi=null),e}function Wi(e){Fi===null?Fi=[e]:Fi.push(e)}var Gi=se(null),Ki=null,qi=null;function Ji(e,t,n){P(Gi,t._currentValue),t._currentValue=n}function Yi(e){e._currentValue=Gi.current,ce(Gi)}function Xi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Zi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Xi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Xi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Qi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Tr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===fe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Zi(t,e,n,r),t.flags|=262144}function $i(e){for(e=e.firstContext;e!==null;){if(!Tr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ea(e){Ki=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ta(e){return ra(Ki,e)}function na(e,t){return Ki===null&&ea(e),ra(e,t)}function ra(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qi===null){if(e===null)throw Error(i(308));qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qi=qi.next=t;return n}var ia=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},aa=t.unstable_scheduleCallback,oa=t.unstable_NormalPriority,sa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ca(){return{controller:new ia,data:new Map,refCount:0}}function la(e){e.refCount--,e.refCount===0&&aa(oa,function(){e.controller.abort()})}var ua=null,da=0,fa=0,pa=null;function ma(e,t){if(ua===null){var n=ua=[];da=0,fa=dd(),pa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return da++,t.then(ha,ha),t}function ha(){if(--da===0&&ua!==null){pa!==null&&(pa.status=`fulfilled`);var e=ua;ua=null,fa=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var _a=M.S;M.S=function(e,t){eu=ke(),typeof t==`object`&&t&&typeof t.then==`function`&&ma(e,t),_a!==null&&_a(e,t)};var va=se(null);function ya(){var e=va.current;return e===null?q.pooledCache:e}function ba(e,t){t===null?P(va,va.current):P(va,t.pool)}function xa(){var e=ya();return e===null?null:{parent:sa._currentValue,pool:e}}var Sa=Error(i(460)),Ca=Error(i(474)),wa=Error(i(542)),Ta={then:function(){}};function Ea(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Da(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e;default:if(typeof t.status==`string`)t.then(nn,nn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e}throw ka=t,Sa}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ka=e,Sa):e}}var ka=null;function Aa(){if(ka===null)throw Error(i(459));var e=ka;return ka=null,e}function ja(e){if(e===Sa||e===wa)throw Error(i(483))}var Ma=null,Na=0;function Pa(e){var t=Na;return Na+=1,Ma===null&&(Ma=[]),Da(Ma,e,t)}function Fa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ia(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function La(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=fi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Oa(i)===t.type)?(t=a(t,n.props),Fa(t,n),t.return=e,t):(t=mi(n.type,n.key,n.props,null,e.mode,r),Fa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=hi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=gi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=mi(t.type,t.key,t.props,null,e.mode,n),Fa(n,t),n.return=e,n;case v:return t=vi(t,e.mode,n),t.return=e,t;case O:return t=Oa(t),f(e,t,n)}if(re(t)||A(t))return t=hi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Pa(t),n);if(t.$$typeof===C)return f(e,na(e,t),n);Ia(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Oa(n),p(e,t,n,r)}if(re(n)||A(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Pa(n),r);if(n.$$typeof===C)return p(e,t,na(e,n),r);Ia(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Oa(r),m(e,t,n,r,i)}if(re(r)||A(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Pa(r),i);if(r.$$typeof===C)return m(e,t,n,na(t,r),i);Ia(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),z&&ki(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&ki(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),z&&ki(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&ki(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&ki(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&ki(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Oa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Fa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=hi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=mi(o.type,o.key,o.props,null,e.mode,c),Fa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=vi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Oa(o),b(e,r,o,c)}if(re(o))return h(e,r,o,c);if(A(o)){if(l=A(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Pa(o),c);if(o.$$typeof===C)return b(e,r,na(e,o),c);Ia(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=gi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Na=0;var i=b(e,t,n,r);return Ma=null,i}catch(t){if(t===Sa||t===wa)throw t;var a=ui(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ra=La(!0),za=La(!1),Ba=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ha(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=si(e),oi(e,null,n),t}return ii(e,r,t,n),si(e)}function Ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qa=!1;function Ja(){if(qa){var e=pa;if(e!==null)throw e}}function Ya(e,t,n,r){qa=!1;var i=e.updateQueue;Ba=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===fa&&(qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ba=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Xa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Za(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xa(n[e],t)}var Qa=se(null),$a=se(0);function eo(e,t){e=Ul,P($a,e),P(Qa,t),Ul=e|t.baseLanes}function to(){P($a,Ul),P(Qa,Qa.current)}function B(){Ul=$a.current,ce(Qa),ce($a)}var no=se(null),ro=null;function V(e){var t=e.alternate;P(co,co.current&1),P(no,e),ro===null&&(t===null||Qa.current!==null||t.memoizedState!==null)&&(ro=e)}function io(e){P(co,co.current),P(no,e),ro===null&&(ro=e)}function ao(e){e.tag===22?(P(co,co.current),P(no,e),ro===null&&(ro=e)):oo(e)}function oo(){P(co,co.current),P(no,no.current)}function so(e){ce(no),ro===e&&(ro=null),ce(co)}var co=se(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=0,H=null,U=null,fo=null,po=!1,mo=!1,W=!1,ho=0,go=0,_o=null,vo=0;function G(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tr(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return uo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Ls:Rs,W=!1,a=n(r,i),W=!1,mo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){M.H=Is;var t=U!==null&&U.next!==null;if(uo=0,fo=U=H=null,po=!1,go=0,_o=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&$i(e)&&(tc=!0))}function So(e,t,n,r){H=e;var a=0;do{if(mo&&(_o=null),go=0,mo=!1,25<=a)throw Error(i(301));if(a+=1,fo=U=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=zs,o=t(n,r)}while(mo);return o}function Co(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function wo(){var e=ho!==0;return ho=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(po){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}po=!1}uo=0,fo=U=H=null,mo=!1,go=ho=0,_o=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?H.memoizedState=fo=e:fo=fo.next=e,fo}function Oo(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=fo===null?H.memoizedState:fo.next;if(t!==null)fo=t,U=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},fo===null?H.memoizedState=fo=e:fo=fo.next=e}return fo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=go;return go+=1,_o===null&&(_o=[]),e=Da(_o,e,t),t=H,(fo===null?t.memoizedState:fo.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===C)return ta(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ee;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),U,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(uo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===fa&&(d=!0);else if((uo&p)===p){u=u.next,p===fa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,Gl|=p;f=u.action,W&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Tr(o,e.memoizedState)&&(tc=!0,d&&(n=pa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Tr(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=H,a=Oo(),o=z;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Tr((U||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||fo!==null&&fo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||uo&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=ko(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tr(e,n)}catch{return!0}}function Ho(e){var t=ai(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),W){Be(!0);try{n()}finally{Be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,U,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(z){var n=q.formState;if(n!==null){a:{var r=H;if(z){if(R){b:{for(var i=R,a=Ii;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){R=cf(i.nextSibling),r=i.data===`F!`;break a}}Ri(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,H,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,H,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),U,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===Sa?wa:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=U;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=ko(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();H.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&yo(r,U.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(H.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=ko(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),W){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||uo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),H.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return Tr(n,t)?n:Qa.current===null?!(uo&42)||uo&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),H.lanes|=e,Gl|=e,t):(e=vs(e,n,r),Tr(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};M.T=s,Ms(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,ga(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,ie,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return ta(Qf)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ua(n);var r=Wa(t,e,n);r!==null&&(hu(r,t,n),Ga(r,t,n)),t={cache:ca()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=I(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Tr(s,o))return ii(e,t,i,0),q===null&&ri(),!1}catch{}if(n=I(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=I(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===H||t!==null&&t===H}function Ps(e,t){mo=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}var Is={readContext:ta,use:jo,useCallback:G,useContext:G,useEffect:G,useImperativeHandle:G,useLayoutEffect:G,useInsertionEffect:G,useMemo:G,useReducer:G,useRef:G,useState:G,useDebugValue:G,useDeferredValue:G,useTransition:G,useSyncExternalStore:G,useId:G,useHostTransitionStatus:G,useFormState:G,useActionState:G,useOptimistic:G,useMemoCache:G,useCacheRefresh:G};Is.useEffectEvent=G;var Ls={readContext:ta,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:ta,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(W){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(W){Be(!0);try{n(t)}finally{Be(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,H,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=Do();if(z){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=q.identifierPrefix;if(z){var n=Oi,r=Di;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,H)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:ta,use:jo,useCallback:gs,useContext:ta,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),U.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),U,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:ta,use:jo,useCallback:gs,useContext:ta,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return U===null?vs(n,e,t):ys(n,U.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,U,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ua(r);i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(hu(t,e,r),Ga(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ua(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(hu(t,e,r),Ga(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ua(n);r.tag=2,t!=null&&(r.callback=t),t=Wa(e,r,n),t!==null&&(hu(t,e,n),Ga(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){$r(e)}function Ks(e){console.error(e)}function qs(e){$r(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=Ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=Ua(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Qi(t,n,a,!0),n=no.current,n!==null){switch(n.tag){case 31:case 13:return ro===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(z)return t=no.current,t===null?(r!==Li&&(t=Error(i(423),{cause:r}),Wi(bi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=bi(r,n),a=Xs(e.stateNode,r,a),Ka(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Li&&(e=Error(i(422),{cause:r}),Wi(bi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=bi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=bi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Ka(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Ka(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?za(t,null,n,r):Ra(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ea(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(z&&s&&ji(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!di(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Er:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=fi(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Er(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ba(t,a===null?null:a.cachePool),a===null?to():eo(t,a),ao(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ba(t,null),to(),oo(t)):(ba(t,a.cachePool),eo(t,a),oo(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=ya();return a=a===null?null:{parent:sa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ba(t,null),to(),ao(t),e!==null&&Qi(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Ra(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,so(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(z){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(io(t),(e=R)?(e=rf(e,Ii),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Pi=t,R=null)):e=null,e===null)throw Ri(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(io(t),a)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(tc||Qi(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=q,r!==null&&(s=it(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ai(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,R=cf(s.nextSibling),Pi=t,z=!0,Fi=null,Ii=!1,e!==null&&Ni(t,e),t=lc(t,r),t.flags|=4096;return t}return e=fi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return ea(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(z&&r&&ji(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return ea(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(z&&r&&ji(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(ea(t),t.stateNode===null){var a=ci,o=n.contextType;typeof o==`object`&&o&&(a=ta(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Va(t),o=n.contextType,a.context=typeof o==`object`&&o?ta(o):ci,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Ya(t,r,a,i),Ja(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ci,typeof u==`object`&&u&&(o=ta(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Ba=!1;var f=t.memoizedState;a.state=f,Ya(t,r,a,i),Ja(),l=t.memoizedState,s||f!==l||Ba?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Ba||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ha(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ci,typeof l==`object`&&l&&(c=ta(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Ba=!1,f=t.memoizedState,a.state=f,Ya(t,r,a,i),Ja();var p=t.memoizedState;o!==d||f!==p||Ba||e!==null&&e.dependencies!==null&&$i(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Ba||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&$i(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ra(t,e.child,null,i),t.child=Ra(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Hi(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:xa()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(co.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(z){if(a?V(t):oo(t),(e=R)?(e=rf(e,Ii),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Pi=t,R=null)):e=null,e===null)throw Ri(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(oo(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=hi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(V(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(V(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(oo(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=hi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ra(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(oo(t),t.child=e.child,t.flags|=128,t=null);else if(V(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Wi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Qi(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=q,s!==null&&(r=it(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ai(e,r),hu(s,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,R=cf(c.nextSibling),Pi=t,z=!0,Fi=null,Ii=!1,e!==null&&Ni(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(oo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=fi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=hi(c,a,n,null),c.flags|=2):c=fi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=xa():(l=sa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(V(t),n=e.child,e=n.sibling,n=fi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=ui(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Ra(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xi(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=co.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,P(co,o),nc(e,t,r,n),r=z?wi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&$i(e))):!0}function kc(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),Ji(t,sa,e.memoizedState.cache),Hi();break;case 27:case 5:he(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:Ji(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,io(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(V(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(V(t),t.flags|=128,null);V(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Qi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(co,co.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Ji(t,sa,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,z&&t.flags&1048576&&Ai(t,wi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e==`function`)di(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=rc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=j(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ha(e,t),Ya(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ji(t,sa,r),r!==o.cache&&Zi(t,[sa],n,!0),Ja(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==a){a=bi(Error(i(424)),t),Wi(a),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(R=cf(e.firstChild),Pi=t,z=!0,Fi=null,Ii=!0,n=za(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Hi(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:z||(n=t.type,e=t.pendingProps,r=Bd(de.current).createElement(n),r[ut]=t,r[dt]=e,Pd(r,n,e),Ct(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return he(t),e===null&&z&&(r=t.stateNode=ff(t.type,t.pendingProps,de.current),Pi=t,Ii=!0,a=R,Zd(t.type)?(lf=a,R=cf(r.firstChild)):R=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&z&&((a=r=R)&&(r=tf(r,t.type,t.pendingProps,Ii),r===null?a=!1:(t.stateNode=r,Pi=t,R=cf(r.firstChild),Ii=!1,a=!0)),a||Ri(t)),he(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&z&&((e=n=R)&&(n=nf(n,t.pendingProps,Ii),n===null?e=!1:(t.stateNode=n,Pi=t,R=null,e=!0)),e||Ri(t)),null;case 13:return bc(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ra(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ji(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ea(t),a=ta(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return ea(t),r=ta(sa),e===null?(a=ya(),a===null&&(a=q,o=ca(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Va(t),Ji(t,sa,a)):((e.lanes&n)!==0&&(Ha(e,t),Ya(t,null,null,n),Ja()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ji(t,sa,r),r!==a.cache&&Zi(t,[sa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ji(t,sa,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ka=Ta,Ca}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ka=Ta,Ca}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Qe(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Mi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Yi(sa),me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ui())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(ge(t),n=de.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=le.current,Vi(t)?zi(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(ge(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=le.current,Vi(t))zi(t,o);else{var s=Bd(de.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ut]=t,o[dt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=de.current,Vi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Pi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ri(t,!0)}else e=Bd(e).createTextNode(r),e[ut]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Vi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ut]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(so(t),t):(so(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ut]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(so(t),t):(so(t),null)}return so(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return me(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return Yi(t.type),Ic(t),null;case 19:if(ce(co),r=t.memoizedState,r===null)return Ic(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=lo(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pi(n,e),n=n.sibling;return P(co,co.current&1|2),z&&ki(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&ke()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}else{if(!a)if(e=lo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!z)return Ic(t),null}else 2*ke()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ke(),e.sibling=null,n=co.current,P(co,a?n&1|2:n&1),z&&ki(t,r.treeForkCount),e);case 22:case 23:return so(t),B(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ce(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yi(sa),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Mi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(sa),me(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ge(t),null;case 31:if(t.memoizedState!==null){if(so(t),t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(so(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(co),null;case 4:return me(),null;case 10:return Yi(t.type),null;case 22:case 23:return so(t),B(),e!==null&&ce(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yi(sa),null;case 25:return null;default:return null}}function zc(e,t){switch(Mi(t),t.tag){case 3:Yi(sa),me();break;case 26:case 27:case 5:ge(t);break;case 4:me();break;case 31:t.memoizedState!==null&&so(t);break;case 13:so(t);break;case 19:ce(co);break;case 10:Yi(t.type);break;case 22:case 23:so(t),B(),e!==null&&ce(va);break;case 24:Yi(sa)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Za(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[dt]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ut]=e,t[dt]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Ar(e),jr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Za(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount==`function`)try{ze.onCommitFiberUnmount(Re,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[_t]||o[ut]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ut]=e,Ct(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ut]=e,Ct(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Jt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=ke()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Jt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Xa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&la(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:la(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=ta(sa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ta(sa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:M.T===null?st():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||z){var e=Ke;Ke<<=1,!(Ke&3932160)&&(Ke=262144),Jl=e}else Jl=536870912;return e=no.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),et(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Xe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-ke(),10<a)){if(yu(r,t,Jl,!Bl),Ye(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},jl(t,a,d);var m=(a&62914560)===a?$l-ke():(a&4194048)===a?eu-ke():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Tr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ve(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&nt(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,qi=Ki=null,Eo(e),Ma=null,Na=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=fi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Xe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ve(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ri(),n}function Cu(e,t){H=null,M.H=Is,t===Sa||t===wa?(t=Aa(),X=3):t===Ca?(t=Aa(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Js(e,bi(t,e.current)))}function wu(){var e=no.current;return e===null?!0:(Y&4194048)===Y?ro===null:(Y&62914560)===Y||Y&536870912?e===ro:!1}function Tu(){var e=M.H;return M.H=Is,e===null?Is:e}function Eu(){var e=M.A;return M.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&no.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:no.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,qi=Ki=null,K=r,M.H=i,M.A=a,J===null&&(q=null,Y=0,ri()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=ke()+500,Su(e,t)):Vl=Xe(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ea(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Ea(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return qi=Ki=null,M.H=r,M.A=a,K=n,J===null?(q=null,Y=0,ri(),Wl):0}function ju(){for(;J!==null&&!De();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Eo(t);default:zc(n,t),t=J=pi(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){qi=Ki=null,Eo(t),Ma=null,Na=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Js(e,bi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Js(e,bi(n,e.current)),J=null;return}t.flags&32768?(z||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=no.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ni,tt(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ne,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=M.T,M.T=null,a=N.p,N.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,N.p=a,M.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Ar(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&kr(s.ownerDocument.documentElement,s)){if(c!==null&&jr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Or(s,h),v=Or(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,N.p=r,M.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,N.p=r,M.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Oe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ot(n),t=t.stateNode,ze&&typeof ze.onCommitFiberRoot==`function`)try{ze.onCommitFiberRoot(Re,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=M.T,i=N.p,N.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,N.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,la(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ot(su),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),ze&&typeof ze.onPostCommitFiberRoot==`function`)try{ze.onPostCommitFiberRoot(Re,o)}catch{}return!0}finally{N.p=a,M.T=r,Vu(e,t)}}function Wu(e,t,n){t=bi(n,t),t=Xs(e.stateNode,t,2),e=Wa(e,t,2),e!==null&&(et(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=bi(n,e),n=Zs(2),r=Wa(t,n,2),r!==null&&(Qs(n,r,t,e),et(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>ke()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Qe()),e=ai(e,t),e!==null&&(et(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Te(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ve(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ye(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Xe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=ke(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ve(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ze(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ye(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ee(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Xe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ee(r),ot(n)){case 2:case 8:n=Me;break;case 32:n=Ne;break;case 268435456:n=Fe;break;default:n=Ne}return r=cd.bind(null,e),n=Te(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ee(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ye(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,ke()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Te(je,ad):od()})}function dd(){if(nd===0){var e=fa;e===0&&(e=Ge,Ge<<=1,!(Ge&261888)&&(Ge=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:tn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[dt]||null).action),o=r.submitter;o&&(t=(t=o[dt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Zr.length;hd++){var gd=Zr[hd];Qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Qr(Ur,`onAnimationEnd`),Qr(Wr,`onAnimationIteration`),Qr(Gr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Kr,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),Dt(`onMouseEnter`,[`mouseout`,`mouseover`]),Dt(`onMouseLeave`,[`mouseout`,`mouseover`]),Dt(`onPointerEnter`,[`pointerout`,`pointerover`]),Dt(`onPointerLeave`,[`pointerout`,`pointerover`]),Et(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Et(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Et(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Et(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Et(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Et(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[pt];n===void 0&&(n=t[pt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,wt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!pn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=yt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}un(function(){var r=a,i=an(n),s=[];a:{var c=Xr.get(e);if(c!==void 0){var l=wn,u=e;switch(e){case`keypress`:if(yn(n)===0)break a;case`keydown`:case`keyup`:l=Hn;break;case`focusin`:u=`focus`,l=Nn;break;case`focusout`:u=`blur`,l=Nn;break;case`beforeblur`:case`afterblur`:l=Nn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Mn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Wn;break;case Ur:case Wr:case Gr:l=Pn;break;case Yr:l=Gn;break;case`scroll`:case`scrollend`:l=En;break;case`wheel`:l=Kn;break;case`copy`:case`cut`:case`paste`:l=Fn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Un;break;case`toggle`:case`beforetoggle`:l=qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=dn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==rn&&(u=n.relatedTarget||n.fromElement)&&(yt(u)||u[ft]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?yt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=jn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Un,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:xt(l),h=u==null?c:xt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,yt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?xt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=pr;else if(sr(c))if(mr)v=Cr;else{v=xr;var y=br}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Qt(r.elementType)&&(v=pr):v=Sr;if(v&&=v(e,r)){cr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Wt(c,`number`,c.value)}switch(y=r?xt(r):window,e){case`focusin`:(sr(y)||y.contentEditable===`true`)&&(Nr=y,Pr=r,Fr=null);break;case`focusout`:Fr=Pr=Nr=null;break;case`mousedown`:Ir=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ir=!1,Lr(s,n,i);break;case`selectionchange`:if(Mr)break;case`keydown`:case`keyup`:Lr(s,n,i)}var b;if(Yn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else rr?tr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Qn&&n.locale!==`ko`&&(rr||x!==`onCompositionStart`?x===`onCompositionEnd`&&rr&&(b=vn()):(hn=i,gn=`value`in hn?hn.value:hn.textContent,rr=!0)),y=Ed(r,x),0<y.length&&(x=new In(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=nr(n),b!==null&&(x.data=b)))),(b=Zn?ir(e,n):ar(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new In(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=dn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=dn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=dn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=dn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Jt(e,``+r);break;case`className`:Nt(e,`class`,r);break;case`tabIndex`:Nt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Nt(e,n,r);break;case`style`:Zt(e,r,o);break;case`data`:if(t!==`object`){Nt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=tn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Mt(e,`popover`,r);break;case`xlinkActuate`:F(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:F(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:F(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:F(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:F(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:F(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:F(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:F(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:F(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Mt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=$t.get(n)||n,Mt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Zt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Jt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Tt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[dt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Mt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Ut(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Gt(e,!!r,n,!0):Gt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Qt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Ht(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Gt(e,!!n,n?[]:``,!1):Gt(e,!!n,t,!0)):Gt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Kt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Qt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[_t]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),vt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[_t])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=N.d;N.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=bt(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Vt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ct(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Vt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Vt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Vt(n.imageSizes)+`"]`)):i+=`[href="`+Vt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ct(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Vt(r)+`"][href="`+Vt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ct(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=St(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ct(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=St(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ct(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=St(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ct(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=de.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=St(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=St(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=St(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Vt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ct(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Vt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Vt(n.href)+`"]`);if(r)return t.instance=r,Ct(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ct(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ct(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ct(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ct(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ct(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[_t]||a[ut]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ct(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ct(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ui(3,null,null,t),e.current=a,a.stateNode=e,t=ca(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Va(a),e}function tp(e){return e?(e=ci,e):ci}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ua(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Wa(e,r,t),n!==null&&(hu(n,e,t),Ga(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ai(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=at(t);var n=ai(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,up(e,t,n,r)}finally{N.p=a,M.T=i}}function lp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,up(e,t,n,r)}finally{N.p=a,M.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=bt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Je(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ve(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=ke()+500,id(0,!1))}}break;case 31:case 13:s=ai(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=an(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=yt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ae()){case je:return 2;case Me:return 8;case Ne:case Pe:return 32;case Fe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=bt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=yt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rn=r,n.target.dispatchEvent(r),rn=null}else return t=bt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=bt(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[dt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[dt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ft]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=st();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Re=zp.inject(Rp),ze=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ft]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=`modulepreload`,y=function(e){return`/`+e},b={},x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=y(t,n),t in b)return;b[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:v,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=l(d(),1),C=`popstate`;function w(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function T(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ee(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:te(t)}return ne(t,n,null,e)}function E(e,t){if(e===!1||e==null)throw Error(t)}function D(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function O(){return Math.random().toString(36).substring(2,10)}function k(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ee(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?A(t):t,state:n,key:t&&t.key||r||O(),mask:i}}function te({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function A(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ne(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=w(e)?e:ee(h.location,e,t);n&&n(r,e),l=u()+1;let d=k(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=w(e)?e:ee(h.location,e,t);n&&n(r,e),l=u();let i=k(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return j(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function j(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),E(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:te(t);return i=i.replace(/ $/,`%20`),!n&&i.startsWith(`//`)&&(i=r+i),new URL(i,r)}function re(e,t,n=`/`){return M(e,t,n,!1)}function M(e,t,n,r,i){let a=be((typeof t==`string`?A(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ie(e),s=null,c=ye(a);for(let e=0;s==null&&e<o.length;++e)s=ge(o[e],c,r);return s}function N(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ie(e){let t=ae(e);return se(t),t}function ae(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;E(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=ke([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(E(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ae(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:me(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of oe(e.path))a(e,t,!0,n)}),t}function oe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=oe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function se(e){e.sort((e,t)=>e.score===t.score?he(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ce=/^:[\w-]+$/,P=3,le=2,ue=1,de=10,fe=-2,pe=e=>e===`*`;function me(e,t){let n=e.split(`/`),r=n.length;return n.some(pe)&&(r+=fe),t&&(r+=le),n.filter(e=>!pe(e)).reduce((e,t)=>e+(ce.test(t)?P:t===``?ue:de),r)}function he(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ge(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=_e({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=_e({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:ke([a,u.pathname]),pathnameBase:je(ke([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=ke([a,u.pathnameBase]))}return o}function _e(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ve(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function ve(e,t=!1,n=!0){D(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ye(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return D(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function be(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var xe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Se(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?A(e):e,a;return n?(n=Oe(n),a=n.startsWith(`/`)?Ce(n.substring(1),`/`):Ce(n,t)):a=t,{pathname:a,search:Me(r),hash:Ne(i)}}function Ce(e,t){let n=Ae(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function we(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Te(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ee(e){let t=Te(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function De(e,t,n,r=!1){let i;typeof e==`string`?i=A(e):(i={...e},E(!i.pathname||!i.pathname.includes(`?`),we(`?`,`pathname`,`search`,i)),E(!i.pathname||!i.pathname.includes(`#`),we(`#`,`pathname`,`hash`,i)),E(!i.search||!i.search.includes(`#`),we(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Se(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Oe=e=>e.replace(/\/\/+/g,`/`),ke=e=>Oe(e.join(`/`)),Ae=e=>e.replace(/\/+$/,``),je=e=>Ae(e).replace(/^\/*/,`/`),Me=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ne=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Pe=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Fe(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ie(e){return ke(e.map(e=>e.route.path).filter(Boolean))||`/`}var Le=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Re(e,t){let n=e;if(typeof n!=`string`||!xe.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Le)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=be(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{D(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var ze=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(ze);var Be=[`GET`,...ze];new Set(Be);var Ve=S.createContext(null);Ve.displayName=`DataRouter`;var He=S.createContext(null);He.displayName=`DataRouterState`;var Ue=S.createContext(!1);function We(){return S.useContext(Ue)}var Ge=S.createContext({isTransitioning:!1});Ge.displayName=`ViewTransition`;var Ke=S.createContext(new Map);Ke.displayName=`Fetchers`;var qe=S.createContext(null);qe.displayName=`Await`;var Je=S.createContext(null);Je.displayName=`Navigation`;var Ye=S.createContext(null);Ye.displayName=`Location`;var Xe=S.createContext({outlet:null,matches:[],isDataRoute:!1});Xe.displayName=`Route`;var Ze=S.createContext(null);Ze.displayName=`RouteError`;var Qe=`REACT_ROUTER_ERROR`,$e=`REDIRECT`,et=`ROUTE_ERROR_RESPONSE`;function tt(e){if(e.startsWith(`${Qe}:${$e}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function nt(e){if(e.startsWith(`${Qe}:${et}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Pe(t.status,t.statusText,t.data)}catch{}}function rt(e,{relative:t}={}){E(it(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=S.useContext(Je),{hash:i,pathname:a,search:o}=ut(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:ke([n,a])),r.createHref({pathname:s,search:o,hash:i})}function it(){return S.useContext(Ye)!=null}function at(){return E(it(),`useLocation() may be used only in the context of a <Router> component.`),S.useContext(Ye).location}var ot=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function st(e){S.useContext(Je).static||S.useLayoutEffect(e)}function ct(){let{isDataRoute:e}=S.useContext(Xe);return e?kt():lt()}function lt(){E(it(),`useNavigate() may be used only in the context of a <Router> component.`);let e=S.useContext(Ve),{basename:t,navigator:n}=S.useContext(Je),{matches:r}=S.useContext(Xe),{pathname:i}=at(),a=JSON.stringify(Ee(r)),o=S.useRef(!1);return st(()=>{o.current=!0}),S.useCallback((r,s={})=>{if(D(o.current,ot),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=De(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:ke([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}S.createContext(null);function ut(e,{relative:t}={}){let{matches:n}=S.useContext(Xe),{pathname:r}=at(),i=JSON.stringify(Ee(n));return S.useMemo(()=>De(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function dt(e,t){return ft(e,t)}function ft(e,t,n){E(it(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=S.useContext(Je),{matches:i}=S.useContext(Xe),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;jt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=at(),d;if(t){let e=typeof t==`string`?A(t):t;E(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):re(e,{pathname:p});D(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),D(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=yt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:ke([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:ke([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?S.createElement(Ye.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function pt(){let e=Ot(),t=Fe(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=S.createElement(S.Fragment,null,S.createElement(`p`,null,`💿 Hey developer 👋`),S.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,S.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,S.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),S.createElement(S.Fragment,null,S.createElement(`h2`,null,`Unexpected Application Error!`),S.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?S.createElement(`pre`,{style:i},n):null,o)}var mt=S.createElement(pt,null),ht=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=nt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:S.createElement(Xe.Provider,{value:this.props.routeContext},S.createElement(Ze.Provider,{value:e,children:this.props.component}));return this.context?S.createElement(_t,{error:e},t):t}};ht.contextType=Ue;var gt=new WeakMap;function _t({children:e,error:t}){let{basename:n}=S.useContext(Je);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=tt(t.digest);if(e){let r=gt.get(t);if(r)throw r;let i=Re(e.location,n);if(Le&&!gt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw gt.set(t,n),n}return S.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function vt({routeContext:e,match:t,children:n}){let r=S.useContext(Ve);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(Xe.Provider,{value:e},n)}function yt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);E(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ie(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||mt,o&&(s<0&&c===0?(jt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?S.createElement(n.route.Component,null):n.route.element?n.route.element:e,S.createElement(vt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?S.createElement(ht,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function bt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xt(e){let t=S.useContext(Ve);return E(t,bt(e)),t}function St(e){let t=S.useContext(He);return E(t,bt(e)),t}function Ct(e){let t=S.useContext(Xe);return E(t,bt(e)),t}function wt(e){let t=Ct(e),n=t.matches[t.matches.length-1];return E(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Tt(){return wt(`useRouteId`)}function Et(){let e=St(`useNavigation`);return S.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function Dt(){let{matches:e,loaderData:t}=St(`useMatches`);return S.useMemo(()=>e.map(e=>N(e,t)),[e,t])}function Ot(){let e=S.useContext(Ze),t=St(`useRouteError`),n=wt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function kt(){let{router:e}=xt(`useNavigate`),t=wt(`useNavigate`),n=S.useRef(!1);return st(()=>{n.current=!0}),S.useCallback(async(r,i={})=>{D(n.current,ot),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var At={};function jt(e,t,n){!t&&!At[e]&&(At[e]=!0,D(!1,n))}S.memo(Mt);function Mt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return ft(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Nt({to:e,replace:t,state:n,relative:r}){E(it(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=S.useContext(Je);D(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=S.useContext(Xe),{pathname:o}=at(),s=ct(),c=De(e,Ee(a),o,r===`path`),l=JSON.stringify(c);return S.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function F(e){E(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Pt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){E(!it(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=S.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=A(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=S.useMemo(()=>{let e=be(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return D(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:S.createElement(Je.Provider,{value:c},S.createElement(Ye.Provider,{children:t,value:h}))}function Ft({children:e,location:t}){return dt(It(e),t)}S.Component;function It(e,t=[]){let n=[];return S.Children.forEach(e,(e,r)=>{if(!S.isValidElement(e))return;let i=[...t,r];if(e.type===S.Fragment){n.push.apply(n,It(e.props.children,i));return}E(e.type===F,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),E(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=It(e.props.children,i)),n.push(a)}),n}var Lt=`get`,Rt=`application/x-www-form-urlencoded`;function zt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Bt(e){return zt(e)&&e.tagName.toLowerCase()===`button`}function Vt(e){return zt(e)&&e.tagName.toLowerCase()===`form`}function Ht(e){return zt(e)&&e.tagName.toLowerCase()===`input`}function Ut(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wt(e,t){return e.button===0&&(!t||t===`_self`)&&!Ut(e)}function Gt(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Kt(e,t){let n=Gt(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var qt=null;function Jt(){if(qt===null)try{new FormData(document.createElement(`form`),0),qt=!1}catch{qt=!0}return qt}var Yt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Xt(e){return e!=null&&!Yt.has(e)?(D(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Rt}"`),null):e}function Zt(e,t){let n,r,i,a,o;if(Vt(e)){let o=e.getAttribute(`action`);r=o?be(o,t):null,n=e.getAttribute(`method`)||Lt,i=Xt(e.getAttribute(`enctype`))||Rt,a=new FormData(e)}else if(Bt(e)||Ht(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?be(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Lt,i=Xt(e.getAttribute(`formenctype`))||Xt(o.getAttribute(`enctype`))||Rt,a=new FormData(o,e),!Jt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(zt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Lt,r=null,i=Rt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Qt={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},$t=/[&><\u2028\u2029]/g;function en(e){return e.replace($t,e=>Qt[e])}function tn(e,t){if(e===!1||e==null)throw Error(t)}function nn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&be(i.pathname,t)===`/`?i.pathname=`${Ae(t)}/_root.${r}`:i.pathname=`${Ae(i.pathname)}.${r}`,i}async function rn(e,t){if(e.id in t)return t[e.id];try{let n=await x(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function an(e){return e!=null&&typeof e.page==`string`}function on(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function sn(e,t,n){return fn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await rn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(on).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function cn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function ln(e,t,{includeHydrateFallback:n}={}){return un(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function un(e){return[...new Set(e)]}function dn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function fn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!an(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(dn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function pn(){let e=S.useContext(Ve);return tn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function mn(){let e=S.useContext(He);return tn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var hn=S.createContext(void 0);hn.displayName=`FrameworkContext`;function gn(){let e=S.useContext(hn);return tn(e,`You must render this element inside a <HydratedRouter> element`),e}function _n(e,t){let n=S.useContext(hn),[r,i]=S.useState(!1),[a,o]=S.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=S.useRef(null);S.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),S.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:vn(s,p),onBlur:vn(c,m),onMouseEnter:vn(l,p),onMouseLeave:vn(u,m),onTouchStart:vn(d,p)}]:[a,f,{}]:[!1,f,{}]}function vn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function yn({page:e,...t}){let n=We(),{router:r}=pn(),i=S.useMemo(()=>re(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?S.createElement(xn,{page:e,matches:i,...t}):S.createElement(Sn,{page:e,matches:i,...t}):null}function bn(e){let{manifest:t,routeModules:n}=gn(),[r,i]=S.useState([]);return S.useEffect(()=>{let r=!1;return sn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function xn({page:e,matches:t,...n}){let r=at(),{future:i}=gn(),{basename:a}=pn(),o=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=nn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return S.createElement(S.Fragment,null,o.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Sn({page:e,matches:t,...n}){let r=at(),{future:i,manifest:a,routeModules:o}=gn(),{basename:s}=pn(),{loaderData:c,matches:l}=mn(),u=S.useMemo(()=>cn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=S.useMemo(()=>cn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=nn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=S.useMemo(()=>ln(d,a),[d,a]),m=bn(d);return S.createElement(S.Fragment,null,f.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>S.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>S.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Cn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}S.Component;var wn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{wn&&(window.__reactRouterVersion=`7.17.0`)}catch{}function Tn({basename:e,children:t,useTransitions:n,window:r}){let i=S.useRef();i.current??=T({window:r,v5Compat:!0});let a=i.current,[o,s]=S.useState({action:a.action,location:a.location}),c=S.useCallback(e=>{n===!1?s(e):S.startTransition(()=>s(e))},[n]);return S.useLayoutEffect(()=>a.listen(c),[a,c]),S.createElement(Pt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function En({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=S.useState({action:n.action,location:n.location}),o=S.useCallback(e=>{r===!1?a(e):S.startTransition(()=>a(e))},[r]);return S.useLayoutEffect(()=>n.listen(o),[n,o]),S.createElement(Pt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}En.displayName=`unstable_HistoryRouter`;var Dn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,On=S.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=S.useContext(Je),v=typeof l==`string`&&Dn.test(l),y=Re(l,h);l=y.to;let b=rt(l,{relative:r}),x=at(),C=null;if(o){let e=De(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:ke([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=_n(n,p),D=Fn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function O(t){e&&e(t),t.defaultPrevented||D(t)}let k=!(y.isExternal||i),ee=S.createElement(`a`,{...p,...E,href:(k?C:void 0)||y.absoluteURL||b,onClick:k?O:e,ref:Cn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?S.createElement(S.Fragment,null,ee,S.createElement(yn,{page:b})):ee});On.displayName=`Link`;var kn=S.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=ut(a,{relative:c.relative}),d=at(),f=S.useContext(He),{navigator:p,basename:m}=S.useContext(Je),h=f!=null&&Kn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=be(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:x,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return S.createElement(On,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});kn.displayName=`NavLink`;var An=S.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Lt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=S.useContext(Je),g=zn(),_=Bn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&Dn.test(s);return S.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?S.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});An.displayName=`Form`;function jn({getKey:e,storageKey:t,...n}){let r=S.useContext(hn),{basename:i}=S.useContext(Je),a=at(),o=Dt();Wn({getKey:e,storageKey:t});let s=S.useMemo(()=>{if(!r||!e)return null;let t=Un(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return S.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${en(JSON.stringify(t||Vn))}, ${en(JSON.stringify(s))})`}})}jn.displayName=`ScrollRestoration`;function Mn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nn(e){let t=S.useContext(Ve);return E(t,Mn(e)),t}function Pn(e){let t=S.useContext(He);return E(t,Mn(e)),t}function Fn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=ct(),d=at(),f=ut(e,{relative:o});return S.useCallback(p=>{if(Wt(p,t)){p.preventDefault();let t=n===void 0?te(d)===te(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?S.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function In(e){D(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=S.useRef(Gt(e)),n=S.useRef(!1),r=at(),i=S.useMemo(()=>Kt(r.search,n.current?null:t.current),[r.search]),a=ct();return[i,S.useCallback((e,t)=>{let r=Gt(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var Ln=0,Rn=()=>`__${String(++Ln)}__`;function zn(){let{router:e}=Nn(`useSubmit`),{basename:t}=S.useContext(Je),n=Tt(),r=e.fetch,i=e.navigate;return S.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Zt(e,t);a.navigate===!1?await r(a.fetcherKey||Rn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Bn(e,{relative:t}={}){let{basename:n}=S.useContext(Je),r=S.useContext(Xe);E(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...ut(e||`.`,{relative:t})},o=at();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:ke([n,a.pathname])),te(a)}var Vn=`react-router-scroll-positions`,Hn={};function Un(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:be(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Wn({getKey:e,storageKey:t}={}){let{router:n}=Nn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Pn(`useScrollRestoration`),{basename:a}=S.useContext(Je),o=at(),s=Dt(),c=Et();S.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Gn(S.useCallback(()=>{if(c.state===`idle`){let t=Un(o,s,a,e);Hn[t]=window.scrollY}try{sessionStorage.setItem(t||Vn,JSON.stringify(Hn))}catch(e){D(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(S.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Vn);e&&(Hn=JSON.parse(e))}catch{}},[t]),S.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Hn,()=>window.scrollY,e?(t,n)=>Un(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),S.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{D(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Gn(e,t){let{capture:n}=t||{};S.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Kn(e,{relative:t}={}){let n=S.useContext(Ge);E(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nn(`useViewTransitionState`),i=ut(e,{relative:t});if(!n.isTransitioning)return!1;let a=be(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=be(n.nextLocation.pathname,r)||n.nextLocation.pathname;return _e(i.pathname,o)!=null||_e(i.pathname,a)!=null}function qn(e,t){return function(){return e.apply(t,arguments)}}var{toString:Jn}=Object.prototype,{getPrototypeOf:Yn}=Object,{iterator:Xn,toStringTag:Zn}=Symbol,Qn=(e=>t=>{let n=Jn.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),$n=e=>(e=e.toLowerCase(),t=>Qn(t)===e),er=e=>t=>typeof t===e,{isArray:tr}=Array,nr=er(`undefined`);function rr(e){return e!==null&&!nr(e)&&e.constructor!==null&&!nr(e.constructor)&&sr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var ir=$n(`ArrayBuffer`);function ar(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ir(e.buffer),t}var or=er(`string`),sr=er(`function`),cr=er(`number`),lr=e=>typeof e==`object`&&!!e,ur=e=>e===!0||e===!1,dr=e=>{if(Qn(e)!==`object`)return!1;let t=Yn(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Zn in e)&&!(Xn in e)},fr=e=>{if(!lr(e)||rr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},pr=$n(`Date`),mr=$n(`File`),hr=e=>!!(e&&e.uri!==void 0),gr=e=>e&&e.getParts!==void 0,_r=$n(`Blob`),vr=$n(`FileList`),yr=e=>lr(e)&&sr(e.pipe);function br(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var xr=br(),Sr=xr.FormData===void 0?void 0:xr.FormData,Cr=e=>{if(!e)return!1;if(Sr&&e instanceof Sr)return!0;let t=Yn(e);if(!t||t===Object.prototype||!sr(e.append))return!1;let n=Qn(e);return n===`formdata`||n===`object`&&sr(e.toString)&&e.toString()===`[object FormData]`},wr=$n(`URLSearchParams`),[Tr,Er,Dr,Or]=[`ReadableStream`,`Request`,`Response`,`Headers`].map($n),kr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function Ar(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),tr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(rr(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function jr(e,t){if(rr(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var Mr=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,Nr=e=>!nr(e)&&e!==Mr;function Pr(...e){let{caseless:t,skipUndefined:n}=Nr(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&typeof i==`string`&&jr(r,i)||i,o=Kr(r,a)?r[a]:void 0;dr(o)&&dr(e)?r[a]=Pr(o,e):dr(e)?r[a]=Pr({},e):tr(e)?r[a]=e.slice():(!n||!nr(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++){let n=e[t];if(!n||rr(n)||(Ar(n,i),typeof n!=`object`||tr(n)))continue;let r=Object.getOwnPropertySymbols(n);for(let e=0;e<r.length;e++){let t=r[e];qr.call(n,t)&&i(n[t],t)}}return r}var Fr=(e,t,n,{allOwnKeys:r}={})=>(Ar(t,(t,r)=>{n&&sr(t)?Object.defineProperty(e,r,{__proto__:null,value:qn(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Ir=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Lr=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},Rr=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Yn(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},zr=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},Br=e=>{if(!e)return null;if(tr(e))return e;let t=e.length;if(!cr(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},Vr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&Yn(Uint8Array)),Hr=(e,t)=>{let n=(e&&e[Xn]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},Ur=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Wr=$n(`HTMLFormElement`),Gr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),Kr=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),{propertyIsEnumerable:qr}=Object.prototype,Jr=$n(`RegExp`),Yr=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};Ar(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Xr=e=>{Yr(e,(t,n)=>{if(sr(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(sr(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},Zr=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return tr(e)?r(e):r(String(e).split(t)),n},Qr=()=>{},$r=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function ei(e){return!!(e&&sr(e.append)&&e[Zn]===`FormData`&&e[Xn])}var ti=e=>{let t=new WeakSet,n=e=>{if(lr(e)){if(t.has(e))return;if(rr(e))return e;if(!(`toJSON`in e)){t.add(e);let r=tr(e)?[]:{};return Ar(e,(e,t)=>{let i=n(e);!nr(i)&&(r[t]=i)}),t.delete(e),r}}return e};return n(e)},ni=$n(`AsyncFunction`),ri=e=>e&&(lr(e)||sr(e))&&sr(e.then)&&sr(e.catch),ii=((e,t)=>e?setImmediate:t?((e,t)=>(Mr.addEventListener(`message`,({source:n,data:r})=>{n===Mr&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),Mr.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,sr(Mr.postMessage)),I={isArray:tr,isArrayBuffer:ir,isBuffer:rr,isFormData:Cr,isArrayBufferView:ar,isString:or,isNumber:cr,isBoolean:ur,isObject:lr,isPlainObject:dr,isEmptyObject:fr,isReadableStream:Tr,isRequest:Er,isResponse:Dr,isHeaders:Or,isUndefined:nr,isDate:pr,isFile:mr,isReactNativeBlob:hr,isReactNative:gr,isBlob:_r,isRegExp:Jr,isFunction:sr,isStream:yr,isURLSearchParams:wr,isTypedArray:Vr,isFileList:vr,forEach:Ar,merge:Pr,extend:Fr,trim:kr,stripBOM:Ir,inherits:Lr,toFlatObject:Rr,kindOf:Qn,kindOfTest:$n,endsWith:zr,toArray:Br,forEachEntry:Hr,matchAll:Ur,isHTMLForm:Wr,hasOwnProperty:Kr,hasOwnProp:Kr,reduceDescriptors:Yr,freezeMethods:Xr,toObjectSet:Zr,toCamelCase:Gr,noop:Qr,toFiniteNumber:$r,findKey:jr,global:Mr,isContextDefined:Nr,isSpecCompliantForm:ei,toJSONObject:ti,isAsyncFn:ni,isThenable:ri,setImmediate:ii,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(Mr):typeof process<`u`&&process.nextTick||ii,isIterable:e=>e!=null&&sr(e[Xn])},ai=I.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),oi=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&ai[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t};function si(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var ci=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),li=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function ui(e,t){return I.isArray(e)?e.map(e=>ui(e,t)):si(String(e).replace(t,``))}var di=e=>ui(e,ci),fi=e=>ui(e,li);function pi(e){let t=Object.create(null);return I.forEach(e.toJSON(),(e,n)=>{t[n]=fi(e)}),t}var mi=Symbol(`internals`);function hi(e){return e&&String(e).trim().toLowerCase()}function gi(e){return e===!1||e==null?e:I.isArray(e)?e.map(gi):di(String(e))}function _i(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var vi=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function yi(e,t,n,r,i){if(I.isFunction(r))return r.call(this,t,n);if(i&&(t=n),I.isString(t)){if(I.isString(r))return t.indexOf(r)!==-1;if(I.isRegExp(r))return r.test(t)}}function bi(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function xi(e,t){let n=I.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Si=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=hi(t);if(!i)return;let a=I.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=gi(e))}let a=(e,t)=>I.forEach(e,(e,n)=>i(e,n,t));if(I.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(I.isString(e)&&(e=e.trim())&&!vi(e))a(oi(e),t);else if(I.isObject(e)&&I.isIterable(e)){let n={},r,i;for(let t of e){if(!I.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?I.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=hi(e),e){let n=I.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return _i(e);if(I.isFunction(t))return t.call(this,e,n);if(I.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=hi(e),e){let n=I.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||yi(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=hi(e),e){let i=I.findKey(n,e);i&&(!t||yi(n,n[i],i,t))&&(delete n[i],r=!0)}}return I.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||yi(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return I.forEach(this,(r,i)=>{let a=I.findKey(n,i);if(a){t[a]=gi(r),delete t[i];return}let o=e?bi(i):String(i).trim();o!==i&&delete t[i],t[o]=gi(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return I.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&I.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[mi]=this[mi]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=hi(e);t[r]||(xi(n,e),t[r]=!0)}return I.isArray(e)?e.forEach(r):r(e),this}};Si.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),I.reduceDescriptors(Si.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),I.freezeMethods(Si);var Ci=`[REDACTED ****]`;function wi(e){if(I.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(I.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function Ti(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||I.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof Si&&(e=e.toJSON()),r.push(e);let t;if(I.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);I.isUndefined(r)||(t[n]=r)});else{if(!I.isPlainObject(e)&&wi(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?Ci:i(a);I.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}var L=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&I.hasOwnProp(e,`redact`)?e.redact:void 0,n=I.isArray(t)&&t.length>0?Ti(e,t):I.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};L.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,L.ERR_BAD_OPTION=`ERR_BAD_OPTION`,L.ECONNABORTED=`ECONNABORTED`,L.ETIMEDOUT=`ETIMEDOUT`,L.ECONNREFUSED=`ECONNREFUSED`,L.ERR_NETWORK=`ERR_NETWORK`,L.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,L.ERR_DEPRECATED=`ERR_DEPRECATED`,L.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,L.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,L.ERR_CANCELED=`ERR_CANCELED`,L.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,L.ERR_INVALID_URL=`ERR_INVALID_URL`,L.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function Ei(e){return I.isPlainObject(e)||I.isArray(e)}function Di(e){return I.endsWith(e,`[]`)?e.slice(0,-2):e}function Oi(e,t,n){return e?e.concat(t).map(function(e,t){return e=Di(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function ki(e){return I.isArray(e)&&!e.some(Ei)}var Ai=I.toFlatObject(I,{},null,function(e){return/^is[A-Z]/.test(e)});function ji(e,t,n){if(!I.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=I.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!I.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||d,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&I.isSpecCompliantForm(t);if(!I.isFunction(i))throw TypeError(`visitor must be a function`);function u(e){if(e===null)return``;if(I.isDate(e))return e.toISOString();if(I.isBoolean(e))return e.toString();if(!l&&I.isBlob(e))throw new L(`Blob is not supported. Use a Buffer instead.`);return I.isArrayBuffer(e)||I.isTypedArray(e)?l&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function d(e,n,i){let s=e;if(I.isReactNative(t)&&I.isReactNativeBlob(e))return t.append(Oi(i,n,a),u(e)),!1;if(e&&!i&&typeof e==`object`){if(I.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(I.isArray(e)&&ki(e)||(I.isFileList(e)||I.endsWith(n,`[]`))&&(s=I.toArray(e)))return n=Di(n),s.forEach(function(e,r){!(I.isUndefined(e)||e===null)&&t.append(o===!0?Oi([n],r,a):o===null?n:n+`[]`,u(e))}),!1}return Ei(e)?!0:(t.append(Oi(i,n,a),u(e)),!1)}let f=[],p=Object.assign(Ai,{defaultVisitor:d,convertValue:u,isVisitable:Ei});function m(e,n,r=0){if(!I.isUndefined(e)){if(r>c)throw new L(`Object is too deeply nested (`+r+` levels). Max depth: `+c,L.ERR_FORM_DATA_DEPTH_EXCEEDED);if(f.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));f.push(e),I.forEach(e,function(e,a){(!(I.isUndefined(e)||e===null)&&i.call(t,e,I.isString(a)?a.trim():a,n,p))===!0&&m(e,n?n.concat(a):[a],r+1)}),f.pop()}}if(!I.isObject(e))throw TypeError(`data must be an object`);return m(e),t}function Mi(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function Ni(e,t){this._pairs=[],e&&ji(e,this,t)}var Pi=Ni.prototype;Pi.append=function(e,t){this._pairs.push([e,t])},Pi.toString=function(e){let t=e?function(t){return e.call(this,t,Mi)}:Mi;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function R(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function z(e,t,n){if(!t)return e;let r=n&&n.encode||R,i=I.isFunction(n)?{serialize:n}:n,a=i&&i.serialize,o;if(o=a?a(t,i):I.isURLSearchParams(t)?t.toString():new Ni(t,i).toString(r),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var Fi=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){I.forEach(this.handlers,function(t){t!==null&&e(t)})}},Ii={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1},Li={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:Ni,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},Ri=s({hasBrowserEnv:()=>zi,hasStandardBrowserEnv:()=>Vi,hasStandardBrowserWebWorkerEnv:()=>Hi,navigator:()=>Bi,origin:()=>Ui}),zi=typeof window<`u`&&typeof document<`u`,Bi=typeof navigator==`object`&&navigator||void 0,Vi=zi&&(!Bi||[`ReactNative`,`NativeScript`,`NS`].indexOf(Bi.product)<0),Hi=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,Ui=zi&&window.location.href||`http://localhost`,Wi={...Ri,...Li};function Gi(e,t){return ji(e,new Wi.classes.URLSearchParams,{visitor:function(e,t,n,r){return Wi.isNode&&I.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function Ki(e){return I.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function qi(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Ji(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&I.isArray(r)?r.length:a,s?(I.hasOwnProp(r,a)?r[a]=I.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!I.hasOwnProp(r,a)||!I.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&I.isArray(r[a])&&(r[a]=qi(r[a])),!o)}if(I.isFormData(e)&&I.isFunction(e.entries)){let n={};return I.forEachEntry(e,(e,r)=>{t(Ki(e),r,n,0)}),n}return null}var Yi=(e,t)=>e!=null&&I.hasOwnProp(e,t)?e[t]:void 0;function Xi(e,t,n){if(I.isString(e))try{return(t||JSON.parse)(e),I.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var Zi={transitional:Ii,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=I.isObject(e);if(i&&I.isHTMLForm(e)&&(e=new FormData(e)),I.isFormData(e))return r?JSON.stringify(Ji(e)):e;if(I.isArrayBuffer(e)||I.isBuffer(e)||I.isStream(e)||I.isFile(e)||I.isBlob(e)||I.isReadableStream(e))return e;if(I.isArrayBufferView(e))return e.buffer;if(I.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=Yi(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return Gi(e,t).toString();if((a=I.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=Yi(this,`env`),r=n&&n.FormData;return ji(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),Xi(e)):e}],transformResponse:[function(e){let t=Yi(this,`transitional`)||Zi.transitional,n=t&&t.forcedJSONParsing,r=Yi(this,`responseType`),i=r===`json`;if(I.isResponse(e)||I.isReadableStream(e))return e;if(e&&I.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,Yi(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?L.from(e,L.ERR_BAD_RESPONSE,this,null,Yi(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wi.classes.FormData,Blob:Wi.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};I.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`],e=>{Zi.headers[e]={}});function Qi(e,t){let n=this||Zi,r=t||n,i=Si.from(r.headers),a=r.data;return I.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function $i(e){return!!(e&&e.__CANCEL__)}var ea=class extends L{constructor(e,t,n){super(e??`canceled`,L.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function ta(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new L(`Request failed with status code `+n.status,n.status>=400&&n.status<500?L.ERR_BAD_REQUEST:L.ERR_BAD_RESPONSE,n.config,n.request,n))}function na(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function ra(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function ia(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var aa=(e,t,n=3)=>{let r=0,i=ra(50,250);return ia(n=>{if(!n||typeof n.loaded!=`number`)return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=o==null?a:Math.min(a,o),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},oa=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},sa=e=>(...t)=>I.asap(()=>e(...t)),ca=Wi.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Wi.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Wi.origin),Wi.navigator&&/(msie|trident)/i.test(Wi.navigator.userAgent)):()=>!0,la=Wi.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];I.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),I.isString(r)&&s.push(`path=${r}`),I.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),I.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)return decodeURIComponent(r.slice(i+1))}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function ua(e){return typeof e==`string`?/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e):!1}function da(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function fa(e,t,n){let r=!ua(t);return e&&(r||n===!1)?da(e,t):t}var pa=e=>e instanceof Si?{...e}:e;function ma(e,t){t||={};let n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return I.isPlainObject(e)&&I.isPlainObject(t)?I.merge.call({caseless:r},e,t):I.isPlainObject(t)?I.merge({},t):I.isArray(t)?t.slice():t}function i(e,t,n,i){if(!I.isUndefined(t))return r(e,t,n,i);if(!I.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!I.isUndefined(t))return r(void 0,t)}function o(e,t){if(!I.isUndefined(t))return r(void 0,t);if(!I.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(I.hasOwnProp(t,a))return r(n,i);if(I.hasOwnProp(e,a))return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(pa(e),pa(t),n,!0)};return I.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=I.hasOwnProp(c,r)?c[r]:i,o=a(I.hasOwnProp(e,r)?e[r]:void 0,I.hasOwnProp(t,r)?t[r]:void 0,r);I.isUndefined(o)&&a!==s||(n[r]=o)}),n}var ha=[`content-type`,`content-length`];function ga(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t).forEach(([t,n])=>{ha.includes(t.toLowerCase())&&e.set(t,n)})}var _a=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function va(e){let t=ma({},e),n=e=>I.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=Si.from(s),t.url=z(fa(l,d,u),n(`params`),n(`paramsSerializer`)),c&&s.set(`Authorization`,`Basic `+btoa((c.username||``)+`:`+(c.password?_a(c.password):``))),I.isFormData(r)&&(Wi.hasStandardBrowserEnv||Wi.hasStandardBrowserWebWorkerEnv||I.isReactNative(r)?s.setContentType(void 0):I.isFunction(r.getHeaders)&&ga(s,r.getHeaders(),n(`formDataHeaderPolicy`))),Wi.hasStandardBrowserEnv&&(I.isFunction(i)&&(i=i(t)),i===!0||i==null&&ca(t.url))){let e=a&&o&&la.read(o);e&&s.set(a,e)}return t}var ya=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=va(e),i=r.data,a=Si.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Si.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());ta(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith(`file:`))||setTimeout(g)},h.onabort=function(){h&&=(n(new L(`Request aborted`,L.ECONNABORTED,e,h)),m(),null)},h.onerror=function(t){let r=new L(t&&t.message?t.message:`Network Error`,L.ERR_NETWORK,e,h);r.event=t||null,n(r),m(),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||Ii;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new L(t,i.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,e,h)),m(),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&I.forEach(pi(a),function(e,t){h.setRequestHeader(t,e)}),I.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=aa(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=aa(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new ea(null,e,h):t),h.abort(),m(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=na(r.url);if(_&&!Wi.protocols.includes(_)){n(new L(`Unsupported protocol `+_+`:`,L.ERR_BAD_REQUEST,e));return}h.send(i||null)})},ba=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof L?t:new ea(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new L(`timeout of ${t}ms exceeded`,L.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>I.asap(o),s},xa=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Sa=async function*(e,t){for await(let n of Ca(e))yield*xa(n,t)},Ca=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},wa=(e,t,n,r)=>{let i=Sa(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})};function Ta(e){if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let t=e.indexOf(`,`);if(t<0)return 0;let n=e.slice(5,t),r=e.slice(t+1);if(/;base64/i.test(n)){let e=r.length,t=r.length;for(let n=0;n<t;n++)if(r.charCodeAt(n)===37&&n+2<t){let t=r.charCodeAt(n+1),i=r.charCodeAt(n+2);(t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102)&&(i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102)&&(e-=2,n+=2)}let n=0,i=t-1,a=e=>e>=2&&r.charCodeAt(e-2)===37&&r.charCodeAt(e-1)===51&&(r.charCodeAt(e)===68||r.charCodeAt(e)===100);i>=0&&(r.charCodeAt(i)===61?(n++,i--):a(i)&&(n++,i-=3)),n===1&&i>=0&&(r.charCodeAt(i)===61||a(i))&&n++;let o=Math.floor(e/4)*3-(n||0);return o>0?o:0}if(typeof Buffer<`u`&&typeof Buffer.byteLength==`function`)return Buffer.byteLength(r,`utf8`);let i=0;for(let e=0,t=r.length;e<t;e++){let n=r.charCodeAt(e);if(n<128)i+=1;else if(n<2048)i+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=r.charCodeAt(e+1);t>=56320&&t<=57343?(i+=4,e++):i+=3}else i+=3}return i}var Ea=`1.17.0`,Da=64*1024,{isFunction:Oa}=I,ka=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Aa=e=>{if(!I.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},ja=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Ma=e=>{let t=e.indexOf(`://`),n=e;return t!==-1&&(n=n.slice(t+3)),n.includes(`@`)||n.includes(`:`)},Na=e=>{let t=I.global!==void 0&&I.global!==null?I.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=I.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?Oa(i):typeof fetch==`function`,c=Oa(a),l=Oa(o);if(!s)return!1;let u=s&&Oa(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&ja(()=>{let e=!1,t=new a(Wi.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&ja(()=>I.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new L(`Response type '${e}' is not supported`,L.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(I.isBlob(e))return e.size;if(I.isSpecCompliantForm(e))return(await new a(Wi.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(I.isArrayBufferView(e)||I.isArrayBuffer(e))return e.byteLength;if(I.isURLSearchParams(e)&&(e+=``),I.isString(e))return(await d(e)).byteLength},g=async(e,t)=>I.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:u,timeout:d,onDownloadProgress:h,onUploadProgress:_,responseType:v,headers:y,withCredentials:b=`same-origin`,fetchOptions:x,maxContentLength:S,maxBodyLength:C}=va(e),w=I.isNumber(S)&&S>-1,T=I.isNumber(C)&&C>-1,E=t=>I.hasOwnProp(e,t)?e[t]:void 0,D=i||fetch;v=v?(v+``).toLowerCase():`text`;let O=ba([l,u&&u.toAbortSignal()],d),k=null,ee=O&&O.unsubscribe&&(()=>{O.unsubscribe()}),te;try{let i,l=E(`auth`);if(l&&(i={username:l.username||``,password:l.password||``}),Ma(t)){let e=new URL(t,Wi.origin);!i&&(e.username||e.password)&&(i={username:Aa(e.username),password:Aa(e.password)}),(e.username||e.password)&&(e.username=``,e.password=``,t=e.href)}if(i&&(y.delete(`authorization`),y.set(`Authorization`,`Basic `+btoa(ka((i.username||``)+`:`+(i.password||``))))),w&&typeof t==`string`&&t.startsWith(`data:`)&&Ta(t)>S)throw new L(`maxContentLength size of `+S+` exceeded`,L.ERR_BAD_RESPONSE,e,k);if(T&&n!==`get`&&n!==`head`){let t=await g(y,s);if(typeof t==`number`&&isFinite(t)&&t>C)throw new L(`Request body larger than maxBodyLength limit`,L.ERR_BAD_REQUEST,e,k)}if(_&&f&&n!==`get`&&n!==`head`&&(te=await g(y,s))!==0){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(I.isFormData(s)&&(n=e.headers.get(`content-type`))&&y.setContentType(n),e.body){let[t,n]=oa(te,aa(sa(_)));s=wa(e.body,Da,t,n)}}I.isString(b)||(b=b?`include`:`omit`);let u=c&&`credentials`in a.prototype;if(I.isFormData(s)){let e=y.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&y.delete(`content-type`)}y.set(`User-Agent`,`axios/`+Ea,!1);let d={...x,signal:O,method:n.toUpperCase(),headers:pi(y.normalize()),body:s,duplex:`half`,credentials:u?b:void 0};k=c&&new a(t,d);let A=await(c?D(k,x):D(t,d));if(w){let t=I.toFiniteNumber(A.headers.get(`content-length`));if(t!=null&&t>S)throw new L(`maxContentLength size of `+S+` exceeded`,L.ERR_BAD_RESPONSE,e,k)}let ne=p&&(v===`stream`||v===`response`);if(p&&A.body&&(h||w||ne&&ee)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=A[e]});let n=I.toFiniteNumber(A.headers.get(`content-length`)),[r,i]=h&&oa(n,aa(sa(h),!0))||[],a=0;A=new o(wa(A.body,Da,t=>{if(w&&(a=t,a>S))throw new L(`maxContentLength size of `+S+` exceeded`,L.ERR_BAD_RESPONSE,e,k);r&&r(t)},()=>{i&&i(),ee&&ee()}),t)}v||=`text`;let j=await m[I.findKey(m,v)||`text`](A,e);if(w&&!p&&!ne){let t;if(j!=null&&(typeof j.byteLength==`number`?t=j.byteLength:typeof j.size==`number`?t=j.size:typeof j==`string`&&(t=typeof r==`function`?new r().encode(j).byteLength:j.length)),typeof t==`number`&&t>S)throw new L(`maxContentLength size of `+S+` exceeded`,L.ERR_BAD_RESPONSE,e,k)}return!ne&&ee&&ee(),await new Promise((t,n)=>{ta(t,n,{data:j,headers:Si.from(A.headers),status:A.status,statusText:A.statusText,config:e,request:k})})}catch(t){if(ee&&ee(),O&&O.aborted&&O.reason instanceof L){let n=O.reason;throw n.config=e,k&&(n.request=k),t!==n&&(n.cause=t),n}throw t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new L(`Network Error`,L.ERR_NETWORK,e,k,t&&t.response),{cause:t.cause||t}):L.from(t,t&&t.code,e,k,t&&t.response)}}},Pa=new Map,Fa=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=Pa;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:Na(t)),l=c;return c};Fa();var Ia={http:null,xhr:ya,fetch:{get:Fa}};I.forEach(Ia,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});var La=e=>`- ${e}`,Ra=e=>I.isFunction(e)||e===null||e===!1;function za(e,t){e=I.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!Ra(r)&&(i=Ia[(n=String(r)).toLowerCase()],i===void 0))throw new L(`Unknown adapter '${n}'`);if(i&&(I.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new L(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(La).join(`
`):` `+La(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return i}var Ba={getAdapter:za,adapters:Ia};function Va(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ea(null,e)}function Ha(e){return Va(e),e.headers=Si.from(e.headers),e.data=Qi.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),Ba.getAdapter(e.adapter||Zi.adapter,e)(e).then(function(t){Va(e),e.response=t;try{t.data=Qi.call(e,e.transformResponse,t)}finally{delete e.response}return t.headers=Si.from(t.headers),t},function(t){if(!$i(t)&&(Va(e),t&&t.response)){e.response=t.response;try{t.response.data=Qi.call(e,e.transformResponse,t.response)}finally{delete e.response}t.response.headers=Si.from(t.response.headers)}return Promise.reject(t)})}var Ua={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{Ua[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var Wa={};Ua.transitional=function(e,t,n){function r(e,t){return`[Axios v`+Ea+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new L(r(i,` has been removed`+(t?` in `+t:``)),L.ERR_DEPRECATED);return t&&!Wa[i]&&(Wa[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},Ua.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Ga(e,t,n){if(typeof e!=`object`)throw new L(`options must be an object`,L.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new L(`option `+a+` must be `+n,L.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new L(`Unknown option `+a,L.ERR_BAD_OPTION)}}var Ka={assertOptions:Ga,validators:Ua},qa=Ka.validators,Ja=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Fi,response:new Fi}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=ma(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&Ka.assertOptions(n,{silentJSONParsing:qa.transitional(qa.boolean),forcedJSONParsing:qa.transitional(qa.boolean),clarifyTimeoutError:qa.transitional(qa.boolean),legacyInterceptorReqResOrdering:qa.transitional(qa.boolean),advertiseZstdAcceptEncoding:qa.transitional(qa.boolean)},!1),r!=null&&(I.isFunction(r)?t.paramsSerializer={serialize:r}:Ka.assertOptions(r,{encode:qa.function,serialize:qa.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),Ka.assertOptions(t,{baseUrl:qa.spelling(`baseURL`),withXsrfToken:qa.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&I.merge(i.common,i[t.method]);i&&I.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`,`common`],e=>{delete i[e]}),t.headers=Si.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||Ii;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[Ha.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=Ha.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=ma(this.defaults,e),z(fa(e.baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};I.forEach([`delete`,`get`,`head`,`options`],function(e){Ja.prototype[e]=function(t,n){return this.request(ma(n||{},{method:e,url:t,data:(n||{}).data}))}}),I.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(ma(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}Ja.prototype[e]=t(),e!==`query`&&(Ja.prototype[e+`Form`]=t(!0))});var Ya=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new ea(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Xa(e){return function(t){return e.apply(null,t)}}function Za(e){return I.isObject(e)&&e.isAxiosError===!0}var Qa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Qa).forEach(([e,t])=>{Qa[t]=e});function $a(e){let t=new Ja(e),n=qn(Ja.prototype.request,t);return I.extend(n,Ja.prototype,t,{allOwnKeys:!0}),I.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return $a(ma(e,t))},n}var eo=$a(Zi);eo.Axios=Ja,eo.CanceledError=ea,eo.CancelToken=Ya,eo.isCancel=$i,eo.VERSION=Ea,eo.toFormData=ji,eo.AxiosError=L,eo.Cancel=eo.CanceledError,eo.all=function(e){return Promise.all(e)},eo.spread=Xa,eo.isAxiosError=Za,eo.mergeConfig=ma,eo.AxiosHeaders=Si,eo.formToJSON=e=>Ji(I.isHTMLForm(e)?new FormData(e):e),eo.getAdapter=Ba.getAdapter,eo.HttpStatusCode=Qa,eo.default=eo;var to=l(_(),1),B=eo.create({baseURL:`/api`,headers:{"Content-Type":`application/json`}}),no=`http://localhost:5000`;B.interceptors.request.use(e=>{let t=localStorage.getItem(`token`);return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));var ro=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),V=o(((e,t)=>{t.exports=ro()}))(),io=(0,S.createContext)(),ao=({children:e})=>{let[t,n]=(0,S.useState)(null),[r,i]=(0,S.useState)(!0),a=async()=>{if(!localStorage.getItem(`token`)){n(null),i(!1);return}try{n((await B.get(`/auth/me`)).data.user)}catch{localStorage.removeItem(`token`),n(null)}finally{i(!1)}};return(0,S.useEffect)(()=>{a()},[]),(0,V.jsx)(io.Provider,{value:{user:t,loading:r,login:async(e,t,r=``)=>{try{let{token:i,user:a}=(await B.post(`/auth/login`,{email:e,password:t,adminSecret:r})).data;return localStorage.setItem(`token`,i),n(a),a}catch(e){throw e.response?.data?.message||`Login failed. Please check credentials.`}},signup:async(e,t,n,r,i=``,a=``,o=``)=>{try{return(await B.post(`/auth/signup`,{name:e,email:t,password:n,role:r,childName:i,childAge:a,requestedClassroom:o})).data.message}catch(e){throw e.response?.data?.message||`Signup failed.`}},logout:()=>{localStorage.removeItem(`token`),n(null)},checkSession:a},children:e})},oo=({children:e,allowedRoles:t})=>{let{user:n,loading:r}=(0,S.useContext)(io);return r?(0,V.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`80vh`,fontFamily:`Outfit, sans-serif`},children:(0,V.jsx)(`div`,{style:{textAlign:`center`,color:`var(--color-primary)`,fontSize:`1.2rem`,fontWeight:`bold`},children:(0,V.jsx)(`p`,{children:`🏫 Loading KidVista Portal...`})})}):n?t&&!t.includes(n.role)?(0,V.jsxs)(`div`,{style:{padding:`3rem`,textAlign:`center`,fontFamily:`Outfit, sans-serif`,background:`#fff`,borderRadius:`16px`,maxWidth:`500px`,margin:`5rem auto`,boxShadow:`0 10px 30px rgba(0,0,0,0.05)`},children:[(0,V.jsx)(`h2`,{style:{color:`var(--color-primary)`,marginBottom:`1rem`},children:`⛔ Access Denied`}),(0,V.jsx)(`p`,{style:{color:`#7F8C8D`,marginBottom:`1.5rem`},children:`You do not have permission to view this page.`}),(0,V.jsx)(Nt,{to:`/`,replace:!0})]}):n&&n.role===`parent`&&n.status===`pending`&&window.location.pathname!==`/parent`?(0,V.jsx)(Nt,{to:`/parent`,replace:!0}):e:(0,V.jsx)(Nt,{to:`/login`,replace:!0})},so=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),co=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),lo=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),uo=e=>{let t=lo(e);return t.charAt(0).toUpperCase()+t.slice(1)},H={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},U=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},fo=(0,S.createContext)({}),po=()=>(0,S.useContext)(fo),mo=(0,S.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=po()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,S.createElement)(`svg`,{ref:c,...H,width:t??l??H.width,height:t??l??H.height,stroke:e??f,strokeWidth:m,className:so(`lucide`,p,i),...!a&&!U(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,S.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),W=(e,t)=>{let n=(0,S.forwardRef)(({className:n,...r},i)=>(0,S.createElement)(mo,{ref:i,iconNode:t,className:so(`lucide-${co(uo(e))}`,`lucide-${e}`,n),...r}));return n.displayName=uo(e),n},ho=W(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),go=W(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),_o=W(`baby`,[[`path`,{d:`M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5`,key:`1u7htd`}],[`path`,{d:`M15 12h.01`,key:`1k8ypt`}],[`path`,{d:`M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1`,key:`11xh7x`}],[`path`,{d:`M9 12h.01`,key:`157uk2`}]]),vo=W(`bell`,[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}]]),G=W(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),yo=W(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),bo=W(`camera`,[[`path`,{d:`M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,key:`18u6gg`}],[`circle`,{cx:`12`,cy:`13`,r:`3`,key:`1vg3eu`}]]),xo=W(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),So=W(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),Co=W(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),wo=W(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),To=W(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Eo=W(`circle-plus`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}],[`path`,{d:`M12 8v8`,key:`napkw2`}]]),Do=W(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),Oo=W(`clipboard`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}]]),ko=W(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),Ao=W(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),jo=W(`eye-off`,[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),Mo=W(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),No=W(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),Po=W(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),Fo=W(`image`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`,key:`1m3agn`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,key:`1xmnt7`}]]),Io=W(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),Lo=W(`layout-dashboard`,[[`rect`,{width:`7`,height:`9`,x:`3`,y:`3`,rx:`1`,key:`10lvy0`}],[`rect`,{width:`7`,height:`5`,x:`14`,y:`3`,rx:`1`,key:`16une8`}],[`rect`,{width:`7`,height:`9`,x:`14`,y:`12`,rx:`1`,key:`1hutg5`}],[`rect`,{width:`7`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`ldoo1y`}]]),Ro=W(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),zo=W(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),Bo=W(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),Vo=W(`megaphone`,[[`path`,{d:`M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z`,key:`q8bfy3`}],[`path`,{d:`M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14`,key:`1853fq`}],[`path`,{d:`M8 6v8`,key:`15ugcq`}]]),Ho=W(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),Uo=W(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),Wo=W(`pen`,[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),Go=W(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Ko=W(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),qo=W(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Jo=W(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),Yo=W(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Xo=W(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Zo=W(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Qo=W(`square-check-big`,[[`path`,{d:`M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`,key:`2acyp4`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),$o=W(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),es=W(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),ts=W(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),ns=W(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),rs=W(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),is=W(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),as=W(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),os=W(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),ss=()=>{let e=ct(),t=t=>{e(`/login?role=${t}`)};return(0,V.jsxs)(`div`,{className:`landing-page-container`,children:[(0,V.jsxs)(`header`,{className:`landing-header`,children:[(0,V.jsxs)(`div`,{className:`landing-logo-group`,onClick:()=>e(`/`),children:[(0,V.jsx)(`div`,{className:`fc-logo-badge`,children:`FC`}),(0,V.jsxs)(`div`,{className:`logo-text-wrapper`,children:[(0,V.jsx)(`span`,{className:`logo-title`,children:`KidVista`}),(0,V.jsx)(`span`,{className:`logo-sub`,children:`FIRSTCRY INTELLITOTS`})]})]}),(0,V.jsxs)(`nav`,{className:`nav-menu`,children:[(0,V.jsx)(`a`,{href:`#features`,children:`Features`}),(0,V.jsx)(`a`,{href:`#portals`,children:`For Schools`}),(0,V.jsx)(`a`,{href:`#portals`,children:`Analytics`}),(0,V.jsx)(`a`,{href:`#features`,children:`Privacy`})]}),(0,V.jsxs)(`div`,{className:`nav-actions`,children:[(0,V.jsx)(`span`,{className:`sign-in-link`,onClick:()=>e(`/login`),children:`Sign in`}),(0,V.jsx)(`button`,{className:`btn btn-primary btn-sm`,onClick:()=>e(`/signup`),children:`Get started`})]})]}),(0,V.jsxs)(`section`,{className:`hero-section`,children:[(0,V.jsxs)(`div`,{className:`hero-content-left`,children:[(0,V.jsxs)(`div`,{className:`trusted-badge`,children:[(0,V.jsx)(`span`,{className:`badge-icon`,children:`🏷️`}),(0,V.jsx)(`span`,{children:`Trusted by 600+ FirstCry Intellitots centres`})]}),(0,V.jsxs)(`h1`,{className:`hero-heading`,children:[`See every learning moment, `,(0,V.jsx)(`span`,{className:`text-blue`,children:`as it happens.`})]}),(0,V.jsx)(`p`,{className:`hero-subtitle`,children:`KidVista is the secure daily activity portal where teachers share photos, parents follow along, and admins keep it all safe — designed exclusively for preschool.`}),(0,V.jsxs)(`div`,{className:`hero-ctas`,children:[(0,V.jsxs)(`button`,{className:`btn btn-primary btn-lg`,onClick:()=>e(`/signup`),children:[`Start your school `,(0,V.jsx)(go,{size:16,style:{marginLeft:`6px`}})]}),(0,V.jsx)(`button`,{className:`btn btn-outline-gray btn-lg`,onClick:()=>t(`parent`),children:`View parent demo`})]}),(0,V.jsxs)(`div`,{className:`hero-compliance-checks`,children:[(0,V.jsxs)(`div`,{className:`check-item`,children:[(0,V.jsx)(`div`,{className:`check-circle-icon`,children:(0,V.jsx)(So,{size:12,strokeWidth:3})}),(0,V.jsx)(`span`,{children:`Admin-approved logins`})]}),(0,V.jsxs)(`div`,{className:`check-item`,children:[(0,V.jsx)(`div`,{className:`check-circle-icon`,children:(0,V.jsx)(So,{size:12,strokeWidth:3})}),(0,V.jsx)(`span`,{children:`Tagged-only photo access`})]}),(0,V.jsxs)(`div`,{className:`check-item`,children:[(0,V.jsx)(`div`,{className:`check-circle-icon`,children:(0,V.jsx)(So,{size:12,strokeWidth:3})}),(0,V.jsx)(`span`,{children:`COPPA-aware`})]})]})]}),(0,V.jsx)(`div`,{className:`hero-content-right`,children:(0,V.jsxs)(`div`,{className:`hero-image-wrapper`,children:[(0,V.jsx)(`img`,{src:`/preschool_classroom.png`,alt:`Preschool kids coloring`,className:`hero-main-img`}),(0,V.jsxs)(`div`,{className:`floating-status-card`,children:[(0,V.jsx)(`div`,{className:`status-icon-circle`,children:(0,V.jsx)(bo,{size:18,color:`#4F9CF9`})}),(0,V.jsxs)(`div`,{className:`status-text-details`,children:[(0,V.jsx)(`h4`,{children:`Art & Craft — Nursery`}),(0,V.jsx)(`p`,{children:`12 new photos • Tagged 3 students`})]})]})]})})]}),(0,V.jsxs)(`section`,{id:`features`,className:`features-section`,children:[(0,V.jsx)(`span`,{className:`section-pretitle`,children:`FEATURES`}),(0,V.jsx)(`h2`,{className:`section-title`,children:`Everything a preschool day needs.`}),(0,V.jsxs)(`div`,{className:`features-grid`,children:[(0,V.jsxs)(`div`,{className:`feature-card`,children:[(0,V.jsx)(`div`,{className:`feat-icon-wrapper`,children:(0,V.jsx)(bo,{size:20,color:`#4F9CF9`})}),(0,V.jsx)(`h3`,{children:`Daily photo albums`}),(0,V.jsx)(`p`,{children:`Teachers upload, AI suggests captions, and admin approves before parents see anything.`})]}),(0,V.jsxs)(`div`,{className:`feature-card`,children:[(0,V.jsx)(`div`,{className:`feat-icon-wrapper`,children:(0,V.jsx)(Xo,{size:20,color:`#4F9CF9`})}),(0,V.jsx)(`h3`,{children:`Tagged-only access`}),(0,V.jsx)(`p`,{children:`Parents only see photos where their child is tagged. Privacy is the default.`})]}),(0,V.jsxs)(`div`,{className:`feature-card`,children:[(0,V.jsx)(`div`,{className:`feat-icon-wrapper`,children:(0,V.jsx)(ko,{size:20,color:`#4F9CF9`})}),(0,V.jsx)(`h3`,{children:`Activity timeline`}),(0,V.jsx)(`p`,{children:`From morning assembly to departure — every moment in a clean visual timeline.`})]}),(0,V.jsxs)(`div`,{className:`feature-card`,children:[(0,V.jsx)(`div`,{className:`feat-icon-wrapper`,children:(0,V.jsx)(Po,{size:20,color:`#4F9CF9`})}),(0,V.jsx)(`h3`,{children:`Teacher notes`}),(0,V.jsx)(`p`,{children:`Personal notes per child make every parent feel seen and informed.`})]}),(0,V.jsxs)(`div`,{className:`feature-card`,children:[(0,V.jsx)(`div`,{className:`feat-icon-wrapper`,children:(0,V.jsx)(xo,{size:20,color:`#4F9CF9`})}),(0,V.jsx)(`h3`,{children:`Live analytics`}),(0,V.jsx)(`p`,{children:`Attendance, engagement and uploads update in real time on the admin dashboard.`})]}),(0,V.jsxs)(`div`,{className:`feature-card`,children:[(0,V.jsx)(`div`,{className:`feat-icon-wrapper`,children:(0,V.jsx)(Zo,{size:20,color:`#4F9CF9`})}),(0,V.jsx)(`h3`,{children:`AI summaries`}),(0,V.jsx)(`p`,{children:`Daily class summaries written automatically. Teachers tweak and post.`})]})]})]}),(0,V.jsx)(`section`,{id:`portals`,className:`portals-section`,children:(0,V.jsxs)(`div`,{className:`portals-grid`,children:[(0,V.jsxs)(`div`,{className:`portal-card`,children:[(0,V.jsx)(`span`,{className:`portal-role-pre`,children:`FOR PARENTS`}),(0,V.jsx)(`h3`,{children:`Parent portal`}),(0,V.jsx)(`p`,{children:`Follow your child's day in one beautiful feed.`}),(0,V.jsxs)(`span`,{className:`portal-link-btn`,onClick:()=>t(`parent`),children:[`Open demo `,(0,V.jsx)(go,{size:14,style:{marginLeft:`4px`}})]})]}),(0,V.jsxs)(`div`,{className:`portal-card`,children:[(0,V.jsx)(`span`,{className:`portal-role-pre`,children:`FOR TEACHERS`}),(0,V.jsx)(`h3`,{children:`Teacher portal`}),(0,V.jsx)(`p`,{children:`Upload, tag and share — in under a minute.`}),(0,V.jsxs)(`span`,{className:`portal-link-btn`,onClick:()=>t(`teacher`),children:[`Open demo `,(0,V.jsx)(go,{size:14,style:{marginLeft:`4px`}})]})]}),(0,V.jsxs)(`div`,{className:`portal-card`,children:[(0,V.jsx)(`span`,{className:`portal-role-pre`,children:`FOR ADMINS`}),(0,V.jsx)(`h3`,{children:`Admin portal`}),(0,V.jsx)(`p`,{children:`Approvals, classrooms and live analytics.`}),(0,V.jsxs)(`span`,{className:`portal-link-btn`,onClick:()=>t(`admin`),children:[`Open demo `,(0,V.jsx)(go,{size:14,style:{marginLeft:`4px`}})]})]})]})}),(0,V.jsxs)(`section`,{className:`bottom-cta-section`,children:[(0,V.jsx)(`h2`,{className:`cta-heading`,children:`Built for the moments parents would otherwise miss.`}),(0,V.jsx)(`p`,{className:`cta-desc`,children:`Roll out KidVista across your centres in days. No app to install — just sign in and share.`}),(0,V.jsxs)(`div`,{className:`cta-buttons`,children:[(0,V.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>e(`/signup`),children:`Create an account`}),(0,V.jsx)(`button`,{className:`btn btn-outline-gray`,onClick:()=>e(`/login`),children:`Sign in`})]})]}),(0,V.jsx)(`style`,{children:`
        .landing-page-container {
          background-color: #FFFFFF;
          font-family: 'Outfit', sans-serif;
          color: #1F2937;
          min-height: 100vh;
        }

        /* Nav Header Styles */
        .landing-header {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.85rem 1.5rem;
          background: #FFFFFF;
        }

        .landing-logo-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .fc-logo-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #4F9CF9;
          color: #FFFFFF;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
        }

        .logo-text-wrapper {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .logo-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.025em;
        }

        .logo-sub {
          font-size: 0.55rem;
          font-weight: 600;
          color: #64748B;
          letter-spacing: 0.05em;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-menu a {
          text-decoration: none;
          color: #64748B;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .nav-menu a:hover {
          color: #0F172A;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .sign-in-link {
          color: #64748B;
          font-weight: 500;
          cursor: pointer;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .sign-in-link:hover {
          color: #0F172A;
        }

        /* Buttons Styling */
        .btn {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-primary {
          background-color: #2563EB;
          color: #FFFFFF;
        }

        .btn-primary:hover {
          background-color: #1D4ED8;
        }

        .btn-outline-gray {
          background-color: #FFFFFF;
          color: #1F2937;
          border: 1px solid #E5E7EB;
        }

        .btn-outline-gray:hover {
          background-color: #F9FAFB;
          border-color: #D1D5DB;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .btn-lg {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        }

        /* Hero Section */
        .hero-section {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          padding: 2.5rem 1.5rem 3rem;
          align-items: center;
          min-height: calc(100vh - 60px);
        }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 2rem 1.5rem;
          }
        }

        .hero-content-left {
          display: flex;
          flex-direction: column;
        }

        .trusted-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #F1F5F9;
          padding: 0.3rem 0.7rem;
          border-radius: 9999px;
          align-self: flex-start;
          margin-bottom: 1rem;
        }

        .trusted-badge span {
          font-size: 0.75rem;
          font-weight: 600;
          color: #475569;
        }

        .hero-heading {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #0F172A;
          margin-bottom: 1rem;
        }

        .text-blue {
          color: #2563EB;
        }

        .hero-subtitle {
          font-size: 1rem;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 1.5rem;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .hero-compliance-checks {
          display: flex;
          gap: 2rem;
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .check-circle-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #E2E8F0;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .check-item span {
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
        }

        /* Hero Image Layout */
        .hero-content-right {
          display: flex;
          justify-content: center;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .hero-main-img {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          display: block;
        }

        /* Overlapping Floating Status Card */
        .floating-status-card {
          position: absolute;
          bottom: 1.5rem;
          left: -1.5rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        @media (max-width: 480px) {
          .floating-status-card {
            left: 1rem;
            right: 1rem;
          }
        }

        .status-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #EFF6FF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .status-text-details h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0;
        }

        .status-text-details p {
          font-size: 0.75rem;
          color: #64748B;
          margin: 0;
          margin-top: 0.15rem;
        }

        /* Features Section */
        .features-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
          border-top: 1px solid #F1F5F9;
        }

        .section-pretitle {
          font-size: 0.75rem;
          font-weight: 800;
          color: #2563EB;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.025em;
          margin-bottom: 2.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .feat-icon-wrapper {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #EFF6FF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .feature-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.5rem;
        }

        .feature-card p {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #475569;
        }

        /* Portals Section */
        .portals-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem 1.5rem;
        }

        .portals-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .portals-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .portal-card {
          background-color: #F8FAFC;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          border: 1px solid #F1F5F9;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .portal-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
        }

        .portal-role-pre {
          font-size: 0.7rem;
          font-weight: 700;
          color: #64748B;
          letter-spacing: 0.075em;
          margin-bottom: 0.5rem;
        }

        .portal-card h3 {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0.5rem;
        }

        .portal-card p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .portal-link-btn {
          font-size: 0.95rem;
          font-weight: 700;
          color: #2563EB;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          transition: gap 0.2s;
        }

        .portal-link-btn:hover {
          color: #1D4ED8;
          text-decoration: underline;
        }

        /* Bottom CTA Section */
        .bottom-cta-section {
          background-color: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          padding: 4rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-heading {
          font-size: 2.15rem;
          font-weight: 800;
          line-height: 1.2;
          color: #0F172A;
          max-width: 600px;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .cta-desc {
          font-size: 1.05rem;
          color: #475569;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
        }
      `})]})},cs=()=>{let{login:e}=(0,S.useContext)(io),t=ct(),[n,r]=(0,S.useState)(null),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(``),[c,l]=(0,S.useState)(``),[u,d]=(0,S.useState)(!1),[f,p]=(0,S.useState)(``),[m,h]=(0,S.useState)(!1),[g,_]=(0,S.useState)(!1),[v,y]=(0,S.useState)(``),[b,x]=(0,S.useState)(``),[C,w]=(0,S.useState)(``),[T,E]=(0,S.useState)(``),[D,O]=(0,S.useState)(``),[k,ee]=(0,S.useState)(!1);return(0,S.useEffect)(()=>{p(``),n===`parent`?(a(`Rajesh@KidVista.com`),s(`Rajesh@123`),l(``)):n===`teacher`?(a(`Aadhya@Kidvista.com`),s(`Aadhya@789`),l(``)):n===`admin`?(a(`akhilkumarchada86@gmail.com`),s(`Akhil@0806`),l(`Varshini@20`)):(a(``),s(``),l(``))},[n]),(0,V.jsxs)(`div`,{className:`login-split-container`,children:[(0,V.jsxs)(`div`,{className:`login-left-pane`,children:[(0,V.jsxs)(`span`,{className:`back-link`,onClick:()=>t(`/`),children:[(0,V.jsx)(ho,{size:16}),` Back to home`]}),(0,V.jsxs)(`div`,{className:`left-pane-brand`,children:[(0,V.jsx)(`div`,{className:`brand-logo-circle`,children:`📸`}),(0,V.jsx)(`h2`,{children:`KidVista`})]}),(0,V.jsxs)(`div`,{className:`left-pane-main`,children:[(0,V.jsx)(`span`,{className:`left-role-avatar`,children:n===`teacher`?`👩‍🏫`:n===`admin`?`👨‍💼`:`👨‍👩‍👧`}),(0,V.jsxs)(`h1`,{children:[`Welcome back, `,(0,V.jsx)(`br`,{}),n?n.charAt(0).toUpperCase()+n.slice(1):`Friend`]}),(0,V.jsx)(`p`,{children:n===`teacher`?`Upload daily activities, tag children in photos, and communicate learning outcomes.`:n===`admin`?`Moderate photos, manage registrations, review attendance, and view analytics.`:`View your child's daily journey, photos, milestones, and daycare updates.`})]}),(0,V.jsxs)(`div`,{className:`left-pane-footer`,children:[(0,V.jsx)(`div`,{className:`encryption-pill`,children:`🛡️ Your account is protected with end-to-end encryption and COPPA compliance.`}),(0,V.jsxs)(`div`,{className:`trust-families-row`,children:[(0,V.jsxs)(`div`,{className:`avatar-group`,children:[(0,V.jsx)(`span`,{className:`avatar-group-item bg-pink`,children:`A`}),(0,V.jsx)(`span`,{className:`avatar-group-item bg-blue`,children:`S`}),(0,V.jsx)(`span`,{className:`avatar-group-item bg-green`,children:`R`})]}),(0,V.jsx)(`span`,{children:`50,000+ families trust KidVista`})]})]})]}),(0,V.jsx)(`div`,{className:`login-right-pane`,children:n?(0,V.jsxs)(`div`,{className:`credentials-form-card`,children:[(0,V.jsxs)(`span`,{className:`change-role-btn`,onClick:()=>r(null),children:[(0,V.jsx)(ho,{size:14}),` Change role`]}),(0,V.jsxs)(`h2`,{className:`form-title`,children:[n===`admin`?`Administrator`:n.charAt(0).toUpperCase()+n.slice(1),` Login`]}),(0,V.jsx)(`p`,{className:`form-subtitle`,children:`Secure, private access to KidVista`}),f&&(0,V.jsx)(`div`,{className:`error-badge-msg`,children:f}),(0,V.jsxs)(`form`,{onSubmit:async n=>{n&&n.preventDefault(),p(``),h(!0);try{let n=await e(i,o,c);n.role===`admin`?t(`/admin`):n.role===`teacher`?t(`/teacher`):n.role===`parent`?t(`/parent`):t(`/`)}catch(e){p(e||`Authentication failed. Please verify credentials.`)}finally{h(!1)}},className:`login-form-widget`,children:[(0,V.jsxs)(`div`,{className:`form-group-item`,children:[(0,V.jsx)(`label`,{children:`Email Address`}),(0,V.jsxs)(`div`,{className:`input-icon-box`,children:[(0,V.jsx)(Bo,{size:16,className:`inp-icon`}),(0,V.jsx)(`input`,{type:`email`,value:i,onChange:e=>a(e.target.value),placeholder:`e.g. ${n}@kidvista.com`,required:!0})]})]}),(0,V.jsxs)(`div`,{className:`form-group-item`,children:[(0,V.jsxs)(`div`,{className:`label-row-forgot`,children:[(0,V.jsx)(`label`,{children:`Password`}),n===`admin`&&(0,V.jsx)(`span`,{className:`forgot-lnk`,onClick:()=>_(!0),children:`Forgot password?`})]}),(0,V.jsxs)(`div`,{className:`input-icon-box`,children:[(0,V.jsx)(Ro,{size:16,className:`inp-icon`}),(0,V.jsx)(`input`,{type:u?`text`:`password`,value:o,onChange:e=>s(e.target.value),placeholder:`••••••••`,required:!0}),(0,V.jsx)(`span`,{className:`pass-toggle`,onClick:()=>d(!u),children:u?(0,V.jsx)(jo,{size:16}):(0,V.jsx)(Mo,{size:16})})]})]}),n===`admin`&&(0,V.jsxs)(`div`,{className:`form-group-item`,children:[(0,V.jsx)(`label`,{children:`Admin Secret Code`}),(0,V.jsxs)(`div`,{className:`input-icon-box`,children:[(0,V.jsx)(Xo,{size:16,className:`inp-icon`}),(0,V.jsx)(`input`,{type:`password`,value:c,onChange:e=>l(e.target.value),placeholder:`Enter secret code`,required:!0})]})]}),(0,V.jsx)(`div`,{className:`remember-row`,children:(0,V.jsxs)(`label`,{className:`checkbox-wrap`,children:[(0,V.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),(0,V.jsx)(`span`,{className:`checkbox-lbl`,children:`Remember me`})]})}),(0,V.jsx)(`button`,{type:`submit`,className:`btn btn-primary form-submit-btn`,disabled:m,children:m?`Authenticating...`:`Sign In as ${n.charAt(0).toUpperCase()+n.slice(1)}`})]}),(0,V.jsxs)(`div`,{className:`demo-fill-card`,onClick:async r=>{r&&r.preventDefault();let i=``,o=``,c=``;n===`parent`?(i=`Rajesh@KidVista.com`,o=`Rajesh@123`):n===`teacher`?(i=`Aadhya@Kidvista.com`,o=`Aadhya@789`):n===`admin`&&(i=`akhilkumarchada86@gmail.com`,o=`Akhil@0806`,c=`Varshini@20`),a(i),s(o),l(c),p(``),h(!0);try{let n=await e(i,o,c);n.role===`admin`?t(`/admin`):n.role===`teacher`?t(`/teacher`):n.role===`parent`?t(`/parent`):t(`/`)}catch(e){p(e||`Authentication failed. Please verify credentials.`)}finally{h(!1)}},children:[(0,V.jsx)(`span`,{className:`fill-icon`,children:`🔑`}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:`Demo credentials pre-filled`}),(0,V.jsx)(`p`,{children:`Click Sign In to explore`})]})]}),(0,V.jsxs)(`div`,{className:`secure-login-notice`,children:[(0,V.jsx)(Ro,{size:14,color:`var(--color-primary)`}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:`Secure Login`}),(0,V.jsx)(`p`,{children:`KidVista uses end-to-end encryption. Your child's data is never shared or sold. COPPA & GDPR compliant.`})]})]})]}):(0,V.jsxs)(`div`,{className:`role-router-card`,children:[(0,V.jsx)(`h2`,{children:`Sign in to KidVista`}),(0,V.jsx)(`p`,{className:`router-sub`,children:`Choose your role to continue`}),(0,V.jsxs)(`div`,{className:`role-options-list`,children:[(0,V.jsxs)(`div`,{className:`role-option`,onClick:()=>r(`parent`),children:[(0,V.jsx)(`span`,{className:`role-icon font-pink`,children:`👪`}),(0,V.jsxs)(`div`,{className:`role-details`,children:[(0,V.jsx)(`h4`,{children:`Parent`}),(0,V.jsx)(`p`,{children:`View your child's daily journey, photos, and activities`})]}),(0,V.jsx)(go,{size:18,className:`role-arrow`})]}),(0,V.jsxs)(`div`,{className:`role-option`,onClick:()=>r(`teacher`),children:[(0,V.jsx)(`span`,{className:`role-icon font-green`,children:`👩‍🏫`}),(0,V.jsxs)(`div`,{className:`role-details`,children:[(0,V.jsx)(`h4`,{children:`Teacher`}),(0,V.jsx)(`p`,{children:`Upload activities, tag students, and engage with families`})]}),(0,V.jsx)(go,{size:18,className:`role-arrow`})]}),(0,V.jsxs)(`div`,{className:`role-option`,onClick:()=>r(`admin`),children:[(0,V.jsx)(`span`,{className:`role-icon font-blue`,children:`🏫`}),(0,V.jsxs)(`div`,{className:`role-details`,children:[(0,V.jsx)(`h4`,{children:`Administrator`}),(0,V.jsx)(`p`,{children:`Manage school operations, users, and analytics`})]}),(0,V.jsx)(go,{size:18,className:`role-arrow`})]})]})]})}),g&&(0,V.jsx)(`div`,{className:`modal-backdrop`,children:(0,V.jsxs)(`div`,{className:`reset-modal-panel`,children:[(0,V.jsx)(`h3`,{children:`Reset Admin Password`}),T&&(0,V.jsx)(`div`,{className:`error-badge-msg`,children:T}),D&&(0,V.jsx)(`div`,{className:`success-badge-msg`,children:D}),(0,V.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault(),E(``),O(``),ee(!0);try{O((await B.post(`/auth/reset-admin-password`,{email:v,adminSecret:b,newPassword:C})).data.message),setTimeout(()=>{_(!1),y(``),x(``),w(``),O(``)},1500)}catch(e){E(e.response?.data?.message||`Password reset failed.`)}finally{ee(!1)}},children:[(0,V.jsxs)(`div`,{className:`form-group-item`,style:{marginBottom:`1rem`},children:[(0,V.jsx)(`label`,{children:`Admin Email`}),(0,V.jsx)(`input`,{type:`email`,className:`modal-inp`,value:v,onChange:e=>y(e.target.value),placeholder:`akhilkumarchada86@gmail.com`,required:!0})]}),(0,V.jsxs)(`div`,{className:`form-group-item`,style:{marginBottom:`1rem`},children:[(0,V.jsx)(`label`,{children:`Admin Secret Code`}),(0,V.jsx)(`input`,{type:`password`,className:`modal-inp`,value:b,onChange:e=>x(e.target.value),placeholder:`Enter secret code`,required:!0})]}),(0,V.jsxs)(`div`,{className:`form-group-item`,style:{marginBottom:`1.5rem`},children:[(0,V.jsx)(`label`,{children:`New Password`}),(0,V.jsx)(`input`,{type:`password`,className:`modal-inp`,value:C,onChange:e=>w(e.target.value),placeholder:`Enter new password`,required:!0})]}),(0,V.jsxs)(`div`,{className:`modal-actions`,children:[(0,V.jsx)(`button`,{type:`button`,className:`btn btn-outline`,onClick:()=>_(!1),children:`Cancel`}),(0,V.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:k,children:k?`Resetting...`:`Reset Password`})]})]})]})}),(0,V.jsx)(`style`,{children:`
        .login-split-container {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          min-height: 100vh;
          font-family: 'Outfit', sans-serif;
          background-color: #ffffff;
        }

        .login-left-pane {
          background: linear-gradient(135deg, var(--color-primary), var(--color-purple));
          color: #ffffff;
          padding: 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .back-link {
          position: absolute;
          top: 2rem;
          left: 3.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: var(--transition-smooth);
        }

        .back-link:hover {
          color: #ffffff;
        }

        .left-pane-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .brand-logo-circle {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .left-pane-brand h2 {
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .left-pane-main {
          max-width: 420px;
          text-align: left;
        }

        .left-role-avatar {
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;
          animation: float 4s ease-in-out infinite;
        }

        .left-pane-main h1 {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .left-pane-main p {
          font-size: 1.05rem;
          opacity: 0.85;
          line-height: 1.6;
        }

        .left-pane-footer {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .encryption-pill {
          background: rgba(255,255,255,0.12);
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          font-size: 0.82rem;
          line-height: 1.4;
          font-weight: 600;
          text-align: left;
        }

        .trust-families-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .avatar-group {
          display: flex;
        }

        .avatar-group-item {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
          font-size: 0.7rem;
          margin-right: -8px;
        }

        .avatar-group-item.bg-pink { background: var(--color-pink); }
        .avatar-group-item.bg-blue { background: var(--color-blue); border-color: var(--color-purple); }
        .avatar-group-item.bg-green { background: var(--color-green); }

        /* Right pane selector */
        .login-right-pane {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3.5rem;
          background: #F8FAFC;
        }

        .role-router-card, .credentials-form-card {
          width: 100%;
          max-width: 420px;
          text-align: left;
        }

        .role-router-card h2, .credentials-form-card h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 0.25rem;
        }

        .router-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .role-options-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .role-option {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.04);
          border-radius: 16px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.01);
          transition: var(--transition-smooth);
        }

        .role-option:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(79, 156, 249, 0.08);
          border-color: rgba(79, 156, 249, 0.2);
        }

        .role-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .role-icon.font-pink { background: #E3F2FD; }
        .role-icon.font-green { background: #E8F8EE; }
        .role-icon.font-blue { background: #E8F2FE; }

        .role-details h4 {
          font-size: 1rem;
          font-weight: 800;
          color: var(--text-dark);
          margin: 0;
        }

        .role-details p {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
          line-height: 1.4;
        }

        .role-arrow {
          margin-left: auto;
          color: #CBD5E1;
          transition: var(--transition-smooth);
        }

        .role-option:hover .role-arrow {
          color: var(--color-primary);
          transform: translateX(3px);
        }

        /* Credentials form */
        .change-role-btn {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-primary);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          margin-bottom: 1.5rem;
          transition: var(--transition-smooth);
        }

        .change-role-btn:hover {
          color: var(--color-primary-hover);
        }

        .form-subtitle {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .login-form-widget {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group-item label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-dark);
        }

        .label-row-forgot {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .forgot-lnk {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-primary);
          cursor: pointer;
        }

        .input-icon-box {
          position: relative;
        }

        .inp-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
        }

        .input-icon-box input {
          width: 100%;
          padding: 0.8rem 1rem 0.8rem 2.75rem;
          font-size: 0.92rem;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          background: #ffffff;
          outline: none;
          font-family: inherit;
          transition: var(--transition-smooth);
        }

        .input-icon-box input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(79, 156, 249, 0.12);
        }

        .pass-toggle {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
          cursor: pointer;
        }

        .remember-row {
          margin-top: 0.25rem;
        }

        .checkbox-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .checkbox-lbl {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .form-submit-btn {
          width: 100%;
          border-radius: 12px;
          padding: 0.85rem;
          font-weight: 700;
          margin-top: 0.5rem;
        }

        .error-badge-msg {
          background: #E3F2FD;
          color: #4F9CF9;
          border-radius: 10px;
          padding: 0.6rem 1rem;
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 1rem;
          border-left: 4px solid #4F9CF9;
        }

        .success-badge-msg {
          background: #E8F8EE;
          color: var(--color-success);
          border-radius: 10px;
          padding: 0.6rem 1rem;
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 1rem;
          border-left: 4px solid var(--color-success);
        }

        /* Demo badge click indicator */
        .demo-fill-card {
          margin-top: 1.5rem;
          background: #F1F5F9;
          border: 1px dashed #CBD5E1;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .demo-fill-card:hover {
          background: #E2E8F0;
          transform: translateY(-1px);
        }

        .fill-icon {
          font-size: 1.5rem;
        }

        .demo-fill-card strong {
          display: block;
          font-size: 0.85rem;
          color: var(--text-dark);
        }

        .demo-fill-card p {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin: 0;
        }

        .secure-login-notice {
          margin-top: 1.5rem;
          background: #E8F2FE;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.78rem;
          line-height: 1.4;
        }

        .secure-login-notice strong {
          color: var(--color-primary);
          display: block;
          margin-bottom: 0.1rem;
        }

        .secure-login-notice p {
          margin: 0;
          color: #475569;
        }

        /* Modal styling */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(2px);
          display: flex;
          justify-content: center;
          align-items: center;
          zIndex: 1000;
        }

        .reset-modal-panel {
          background: #ffffff;
          padding: 2.25rem;
          border-radius: 18px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .reset-modal-panel h3 {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 1.25rem;
        }

        .modal-inp {
          width: 100%;
          padding: 0.75rem;
          border-radius: 8px;
          border: 1px solid #E2E8F0;
          outline: none;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @media (max-width: 850px) {
          .login-split-container {
            grid-template-columns: 1fr;
          }
          .login-left-pane {
            display: none;
          }
          .login-right-pane {
            padding: 2.5rem 1.5rem;
          }
        }
      `})]})},ls=()=>{let{signup:e}=(0,S.useContext)(io),t=ct(),[n,r]=(0,S.useState)({name:``,email:``,password:``,role:`parent`,childName:``,childAge:``,requestedClassroom:`Nursery A`}),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(``),[c,l]=(0,S.useState)(!1),u=e=>{r({...n,[e.target.name]:e.target.value})},d=e=>{r({...n,role:e})};return(0,V.jsxs)(`div`,{className:`login-split-container`,children:[(0,V.jsxs)(`div`,{className:`login-left-pane`,children:[(0,V.jsxs)(`span`,{className:`back-link`,onClick:()=>t(`/`),children:[(0,V.jsx)(ho,{size:16}),` Back to home`]}),(0,V.jsxs)(`div`,{className:`left-pane-brand`,children:[(0,V.jsx)(`div`,{className:`brand-logo-circle`,children:`📸`}),(0,V.jsx)(`h2`,{children:`KidVista`})]}),(0,V.jsxs)(`div`,{className:`left-pane-main`,children:[(0,V.jsx)(`span`,{className:`left-role-avatar`,children:n.role===`teacher`?`👩‍🏫`:`👨‍👩‍👧`}),(0,V.jsxs)(`h1`,{children:[`Join the `,(0,V.jsx)(`br`,{}),`KidVista Family`]}),(0,V.jsx)(`p`,{children:`Create an account to securely access daily classroom photos, student tagging, attendance histories, and development milestones.`})]}),(0,V.jsxs)(`div`,{className:`left-pane-footer`,children:[(0,V.jsx)(`div`,{className:`encryption-pill`,children:`🛡️ Regulatory compliance: SOC 2 Type II certified, COPPA & GDPR compliant.`}),(0,V.jsx)(`div`,{className:`trust-families-row`,children:(0,V.jsxs)(`span`,{children:[`Already have an account? `,(0,V.jsx)(On,{to:`/login`,style:{color:`white`,fontWeight:800},children:`Sign In`})]})})]})]}),(0,V.jsx)(`div`,{className:`login-right-pane`,style:{overflowY:`auto`},children:(0,V.jsxs)(`div`,{className:`credentials-form-card`,style:{padding:`2rem 0`},children:[(0,V.jsx)(`h2`,{className:`form-title`,children:`Create Account`}),(0,V.jsx)(`p`,{className:`form-subtitle`,children:`Register a new parent or teacher account`}),i&&(0,V.jsx)(`div`,{className:`error-badge-msg`,children:i}),o&&(0,V.jsx)(`div`,{className:`success-badge-msg`,children:o}),(0,V.jsxs)(`form`,{onSubmit:async r=>{if(r.preventDefault(),!n.name||!n.email||!n.password||!n.role){a(`Please fill in all fields.`);return}if(n.role===`admin`){a(`Admin signup is not allowed.`);return}if(n.role===`parent`&&(!n.childName||!n.childAge||!n.requestedClassroom)){a(`Please fill in Child Name, Age, and Requested Classroom.`);return}a(``),s(``),l(!0);try{s(await e(n.name,n.email,n.password,n.role,n.childName,n.childAge,n.requestedClassroom)||`Account registration submitted successfully.`),setTimeout(()=>{t(`/login`)},1500)}catch(e){a(e||`Signup failed.`)}finally{l(!1)}},className:`login-form-widget`,children:[(0,V.jsxs)(`div`,{className:`signup-role-tabs`,children:[(0,V.jsx)(`span`,{className:`signup-role-tab ${n.role===`parent`?`active`:``}`,onClick:()=>d(`parent`),children:`👪 Parent`}),(0,V.jsx)(`span`,{className:`signup-role-tab ${n.role===`teacher`?`active`:``}`,onClick:()=>d(`teacher`),children:`👩‍🏫 Teacher`})]}),(0,V.jsxs)(`div`,{className:`form-group-item`,children:[(0,V.jsx)(`label`,{children:`Full Name`}),(0,V.jsxs)(`div`,{className:`input-icon-box`,children:[(0,V.jsx)(is,{size:16,className:`inp-icon`}),(0,V.jsx)(`input`,{type:`text`,name:`name`,value:n.name,onChange:u,placeholder:`e.g. Priya Sharma`,required:!0})]})]}),(0,V.jsxs)(`div`,{className:`form-group-item`,children:[(0,V.jsx)(`label`,{children:`Email Address`}),(0,V.jsxs)(`div`,{className:`input-icon-box`,children:[(0,V.jsx)(Bo,{size:16,className:`inp-icon`}),(0,V.jsx)(`input`,{type:`email`,name:`email`,value:n.email,onChange:u,placeholder:`e.g. priya@gmail.com`,required:!0})]})]}),(0,V.jsxs)(`div`,{className:`form-group-item`,children:[(0,V.jsx)(`label`,{children:`Password`}),(0,V.jsxs)(`div`,{className:`input-icon-box`,children:[(0,V.jsx)(Ro,{size:16,className:`inp-icon`}),(0,V.jsx)(`input`,{type:`password`,name:`password`,value:n.password,onChange:u,placeholder:`Create a strong password`,required:!0})]})]}),n.role===`parent`&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`child-section-divider`,children:`Child Information`}),(0,V.jsxs)(`div`,{className:`form-group-item`,children:[(0,V.jsx)(`label`,{children:`Child Full Name`}),(0,V.jsx)(`input`,{type:`text`,name:`childName`,value:n.childName,onChange:u,placeholder:`e.g. Aarav Sharma`,className:`child-inp`,required:!0})]}),(0,V.jsxs)(`div`,{className:`form-group-row`,style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`1rem`},children:[(0,V.jsxs)(`div`,{className:`form-group-item`,children:[(0,V.jsx)(`label`,{children:`Child Age`}),(0,V.jsx)(`input`,{type:`number`,name:`childAge`,value:n.childAge,onChange:u,placeholder:`e.g. 4`,className:`child-inp`,min:`1`,max:`12`,required:!0})]}),(0,V.jsxs)(`div`,{className:`form-group-item`,children:[(0,V.jsx)(`label`,{children:`Requested Class`}),(0,V.jsxs)(`select`,{name:`requestedClassroom`,value:n.requestedClassroom,onChange:u,className:`child-inp-select`,required:!0,children:[(0,V.jsx)(`option`,{value:`Nursery A`,children:`Nursery A`}),(0,V.jsx)(`option`,{value:`Nursery B`,children:`Nursery B`}),(0,V.jsx)(`option`,{value:`LKG A`,children:`LKG A`}),(0,V.jsx)(`option`,{value:`LKG B`,children:`LKG B`}),(0,V.jsx)(`option`,{value:`UKG A`,children:`UKG A`})]})]})]})]}),(0,V.jsx)(`button`,{type:`submit`,className:`btn btn-primary form-submit-btn`,disabled:c,style:{marginTop:`1rem`},children:c?`Creating Account...`:`Sign Up`})]}),(0,V.jsxs)(`p`,{className:`signup-switch-lnk`,children:[`Already have an account? `,(0,V.jsx)(On,{to:`/login`,children:`Login here`})]})]})}),(0,V.jsx)(`style`,{children:`
        /* Reuse split login styles */
        .login-split-container {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          min-height: 100vh;
          font-family: 'Outfit', sans-serif;
          background-color: #ffffff;
        }

        .login-left-pane {
          background: linear-gradient(135deg, var(--color-primary), var(--color-purple));
          color: #ffffff;
          padding: 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .back-link {
          position: absolute;
          top: 2rem;
          left: 3.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .left-pane-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .brand-logo-circle {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .left-pane-brand h2 {
          font-size: 1.25rem;
          font-weight: 800;
        }

        .left-role-avatar {
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;
          animation: float 4s ease-in-out infinite;
        }

        .left-pane-main h1 {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .left-pane-main p {
          font-size: 1.05rem;
          opacity: 0.85;
          line-height: 1.6;
        }

        .encryption-pill {
          background: rgba(255,255,255,0.12);
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 600;
        }

        .trust-families-row {
          font-size: 0.88rem;
          font-weight: 600;
        }

        .login-right-pane {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3.5rem;
          background: #F8FAFC;
        }

        .credentials-form-card {
          width: 100%;
          max-width: 420px;
          text-align: left;
        }

        .form-subtitle {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .signup-role-tabs {
          display: flex;
          background: #E2E8F0;
          padding: 0.25rem;
          border-radius: 10px;
          gap: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .signup-role-tab {
          flex: 1;
          padding: 0.5rem;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 700;
          color: #64748B;
          border-radius: 8px;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .signup-role-tab.active {
          background: #ffffff;
          color: var(--color-primary);
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .form-group-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group-item label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-dark);
        }

        .input-icon-box {
          position: relative;
        }

        .inp-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
        }

        .input-icon-box input {
          width: 100%;
          padding: 0.8rem 1rem 0.8rem 2.75rem;
          font-size: 0.92rem;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          background: #ffffff;
          outline: none;
          font-family: inherit;
        }

        .input-icon-box input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(79, 156, 249, 0.12);
        }

        .child-section-divider {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          border-bottom: 1px dashed #CBD5E1;
          padding-bottom: 0.4rem;
          margin-top: 0.75rem;
          margin-bottom: 0.25rem;
        }

        .child-inp {
          width: 100%;
          padding: 0.8rem 1rem;
          font-size: 0.92rem;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          background: #ffffff;
          outline: none;
          font-family: inherit;
        }

        .child-inp:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(79, 156, 249, 0.12);
        }

        .child-inp-select {
          width: 100%;
          padding: 0.8rem 1rem;
          font-size: 0.92rem;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          background: #ffffff;
          outline: none;
          font-family: inherit;
          cursor: pointer;
        }

        .child-inp-select:focus {
          border-color: var(--color-primary);
        }

        .form-submit-btn {
          width: 100%;
          border-radius: 12px;
          padding: 0.85rem;
          font-weight: 700;
        }

        .error-badge-msg {
          background: #E3F2FD;
          color: #4F9CF9;
          border-radius: 10px;
          padding: 0.6rem 1rem;
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 1rem;
          border-left: 4px solid #4F9CF9;
        }

        .success-badge-msg {
          background: #E8F8EE;
          color: var(--color-success);
          border-radius: 10px;
          padding: 0.6rem 1rem;
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 1rem;
          border-left: 4px solid var(--color-success);
        }

        .signup-switch-lnk {
          text-align: center;
          margin-top: 1.25rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .signup-switch-lnk a {
          color: var(--color-primary);
          font-weight: 700;
          text-decoration: none;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @media (max-width: 850px) {
          .login-split-container {
            grid-template-columns: 1fr;
          }
          .login-left-pane {
            display: none;
          }
          .login-right-pane {
            padding: 2.5rem 1.5rem;
          }
        }
      `})]})},us=({title:e=`Admin Portal`})=>{let{user:t,logout:n}=(0,S.useContext)(io),r=ct(),[i,a]=(0,S.useState)(``);return(0,V.jsxs)(`nav`,{className:`top-navbar`,children:[(0,V.jsxs)(`div`,{className:`navbar-search`,children:[(0,V.jsx)(qo,{size:15,className:`search-icon`}),(0,V.jsx)(`input`,{type:`text`,placeholder:`Search students, photos, activities...`,value:i,onChange:e=>a(e.target.value),className:`search-input`})]}),(0,V.jsxs)(`div`,{className:`navbar-right`,children:[(0,V.jsx)(`button`,{className:`admin-portal-badge`,onClick:()=>r(`/admin`),children:`Admin Portal`}),(0,V.jsx)(`button`,{className:`navbar-bell-btn`,children:(0,V.jsx)(vo,{size:18})}),t&&(0,V.jsxs)(`div`,{className:`navbar-user-info`,onClick:()=>{n(),r(`/login`)},title:`Click to logout`,style:{cursor:`pointer`},children:[(0,V.jsx)(`div`,{className:`navbar-avatar`,children:(e=>e?e.split(` `).map(e=>e[0]).join(``).toUpperCase().slice(0,2):`AD`)(t.name)}),(0,V.jsxs)(`div`,{className:`navbar-user-text`,children:[(0,V.jsx)(`span`,{className:`navbar-user-name`,children:t.name||`Admin`}),(0,V.jsx)(`span`,{className:`navbar-user-role`,children:(e=>{switch(e){case`admin`:return`Centre administrator`;case`teacher`:return`Class teacher`;case`parent`:return`Parent`;default:return e}})(t.role)})]})]})]}),(0,V.jsx)(`style`,{children:`
        .top-navbar {
          height: 64px;
          background: #ffffff;
          border-bottom: 1px solid #F1F5F9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          gap: 1.5rem;
          font-family: 'Outfit', sans-serif;
        }

        .navbar-search {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 0.5rem 0.9rem;
          min-width: 280px;
          max-width: 380px;
          flex: 1;
        }

        .search-icon {
          color: #94A3B8;
          flex-shrink: 0;
        }

        .search-input {
          border: none;
          background: transparent;
          outline: none;
          font-size: 0.875rem;
          color: #475569;
          font-family: 'Outfit', sans-serif;
          width: 100%;
        }

        .search-input::placeholder {
          color: #94A3B8;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .admin-portal-badge {
          background: transparent;
          border: none;
          font-size: 0.875rem;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-family: 'Outfit', sans-serif;
          transition: background 0.2s;
        }

        .admin-portal-badge:hover {
          background: #F1F5F9;
        }

        .navbar-bell-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #64748B;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          transition: background 0.2s, color 0.2s;
        }

        .navbar-bell-btn:hover {
          background: #F1F5F9;
          color: #334155;
        }

        .navbar-user-info {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.3rem 0.5rem;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .navbar-user-info:hover {
          background: #F8FAFC;
        }

        .navbar-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #4F9CF9;
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .navbar-user-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .navbar-user-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1E293B;
        }

        .navbar-user-role {
          font-size: 0.75rem;
          color: #94A3B8;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .navbar-search { min-width: 0; }
          .admin-portal-badge { display: none; }
          .navbar-user-text { display: none; }
        }
      `})]})},ds=()=>{let{user:e,logout:t}=(0,S.useContext)(io),[n,r]=(0,S.useState)(!1),i=ct(),a=at(),o=()=>{t(),i(`/login`)};if(!e)return null;let s=()=>r(!n),c=(()=>{switch(e.role){case`admin`:return[{path:`/admin`,name:`Dashboard`,icon:(0,V.jsx)(Lo,{size:18})},{path:`/admin?tab=analytics`,name:`Analytics`,icon:(0,V.jsx)(xo,{size:18})},{path:`/admin?tab=users`,name:`Users`,icon:(0,V.jsx)(as,{size:18})},{path:`/admin/students`,name:`Students`,icon:(0,V.jsx)(No,{size:18})},{path:`/admin?tab=classrooms`,name:`Classes`,icon:(0,V.jsx)(G,{size:18})},{path:`/admin/approvals`,name:`Photo Approval`,icon:(0,V.jsx)(Fo,{size:18})},{path:`/admin/announcements`,name:`Notifications`,icon:(0,V.jsx)(vo,{size:18})},{path:`/admin?tab=settings`,name:`Settings`,icon:(0,V.jsx)(Yo,{size:18})}];case`teacher`:return[{path:`/teacher`,name:`Dashboard`,icon:(0,V.jsx)(Lo,{size:18})},{path:`/teacher/upload`,name:`Upload Photos`,icon:(0,V.jsx)(Fo,{size:18})},{path:`/teacher/tagging`,name:`Student Tagging`,icon:(0,V.jsx)(as,{size:18})},{path:`/teacher/activities`,name:`Activities`,icon:(0,V.jsx)(Eo,{size:18})},{path:`/teacher/attendance`,name:`Attendance`,icon:(0,V.jsx)(Qo,{size:18})},{path:`/teacher/notifications`,name:`Notifications`,icon:(0,V.jsx)(vo,{size:18})}];case`parent`:return e.status===`pending`?[{path:`/parent`,name:`Dashboard`,icon:(0,V.jsx)(Lo,{size:18})}]:[{path:`/parent`,name:`Dashboard`,icon:(0,V.jsx)(Lo,{size:18})},{path:`/parent/my-child`,name:`My Child's Day`,icon:(0,V.jsx)(ko,{size:18})},{path:`/parent/gallery`,name:`Photo Gallery`,icon:(0,V.jsx)(Fo,{size:18})},{path:`/parent/attendance`,name:`Attendance`,icon:(0,V.jsx)(Qo,{size:18})},{path:`/parent/notifications`,name:`Notifications`,icon:(0,V.jsx)(vo,{size:18})},{path:`/parent/profile`,name:`Profile`,icon:(0,V.jsx)(is,{size:18})}];default:return[]}})();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`button`,{className:`sidebar-mobile-toggle`,onClick:s,children:n?(0,V.jsx)(os,{size:22}):(0,V.jsx)(Ho,{size:22})}),n&&(0,V.jsx)(`div`,{className:`sidebar-overlay`,onClick:s}),(0,V.jsxs)(`aside`,{className:`sidebar-aside ${n?`mobile-open`:``}`,children:[(0,V.jsxs)(`div`,{className:`sidebar-logo`,onClick:()=>i(`/`),style:{cursor:`pointer`},children:[(0,V.jsx)(`div`,{className:`sidebar-logo-badge`,children:`FC`}),(0,V.jsxs)(`div`,{className:`sidebar-logo-text`,children:[(0,V.jsx)(`span`,{className:`sidebar-logo-title`,children:`KidVista`}),(0,V.jsx)(`span`,{className:`sidebar-logo-sub`,children:`FIRSTCRY INTELLITOTS`})]})]}),(0,V.jsx)(`nav`,{className:`sidebar-nav`,children:c.map((e,t)=>{let n=a.pathname+a.search,i=n===e.path||e.path===`/admin`&&n===`/admin`||e.path===`/teacher`&&n===`/teacher`||e.path===`/parent`&&n===`/parent`;return(0,V.jsxs)(On,{to:e.path,className:`sidebar-nav-item ${i?`active`:``}`,onClick:()=>r(!1),children:[(0,V.jsx)(`span`,{className:`sidebar-nav-icon`,children:e.icon}),(0,V.jsx)(`span`,{className:`sidebar-nav-label`,children:e.name})]},t)})}),(0,V.jsx)(`div`,{className:`sidebar-bottom`,children:(0,V.jsxs)(`div`,{className:`sidebar-nav-item signout-item`,onClick:o,children:[(0,V.jsx)(`span`,{className:`sidebar-nav-icon`,children:(0,V.jsx)(zo,{size:18})}),(0,V.jsx)(`span`,{className:`sidebar-nav-label`,children:`Sign out`})]})})]}),(0,V.jsx)(`style`,{children:`
        .sidebar-aside {
          width: 220px;
          background: #ffffff;
          border-right: 1px solid #F1F5F9;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          z-index: 99;
          transition: transform 0.3s ease;
          font-family: 'Outfit', sans-serif;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1.25rem 1.25rem 1rem 1.25rem;
          border-bottom: 1px solid #F8FAFC;
        }

        .sidebar-logo-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #4F9CF9;
          color: white;
          font-size: 0.75rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sidebar-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .sidebar-logo-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
        }

        .sidebar-logo-sub {
          font-size: 0.45rem;
          font-weight: 600;
          color: #94A3B8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          overflow-y: auto;
        }

        .sidebar-nav-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 0.75rem;
          color: #64748B;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.15s ease;
          cursor: pointer;
          border: none;
          background: transparent;
          width: 100%;
        }

        .sidebar-nav-item:hover {
          background: #F8FAFC;
          color: #334155;
        }

        .sidebar-nav-item.active {
          background: #EFF6FF;
          color: #2563EB;
          font-weight: 600;
        }

        .sidebar-nav-item.active .sidebar-nav-icon {
          color: #2563EB;
        }

        .sidebar-nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sidebar-nav-label {
          flex: 1;
        }

        .sidebar-bottom {
          padding: 0.75rem;
          border-top: 1px solid #F1F5F9;
        }

        .signout-item {
          color: #94A3B8;
        }

        .signout-item:hover {
          color: #EF4444;
          background: #FEF2F2;
        }

        .sidebar-mobile-toggle {
          display: none;
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #4F9CF9;
          color: white;
          border: none;
          cursor: pointer;
          z-index: 100;
          box-shadow: 0 4px 15px rgba(79, 156, 249, 0.3);
          align-items: center;
          justify-content: center;
        }

        .sidebar-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.3);
          z-index: 98;
        }

        @media (max-width: 992px) {
          .sidebar-aside {
            transform: translateX(-100%);
          }
          .sidebar-aside.mobile-open {
            transform: translateX(0);
          }
          .sidebar-mobile-toggle {
            display: flex;
          }
          .sidebar-overlay {
            display: block;
          }
        }
      `})]})},fs=[`#4F9CF9`,`#F59E0B`,`#22C55E`,`#8B5CF6`,`#EF4444`],ps={Nursery:`#22C55E`,LKG:`#4F9CF9`,UKG:`#F59E0B`},ms=({icon:e,title:t,subtitle:n,height:r=180})=>(0,V.jsxs)(`div`,{style:{height:r,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`0.4rem`,padding:`1rem`},children:[(0,V.jsx)(`div`,{style:{width:44,height:44,borderRadius:`50%`,background:`linear-gradient(135deg, #F1F5F9, #E2E8F0)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginBottom:`0.25rem`},children:e}),(0,V.jsx)(`span`,{style:{fontSize:`0.85rem`,fontWeight:600,color:`#94A3B8`},children:t}),(0,V.jsx)(`span`,{style:{fontSize:`0.72rem`,color:`#CBD5E1`,textAlign:`center`,maxWidth:`200px`},children:n})]}),hs=({data:e,labelKey:t=`date`,valueKey:n=`count`,color:r=`#3B82F6`,height:i=180})=>{let[a,o]=(0,S.useState)(null),s=(e||[]).reduce((e,t)=>e+(t[n]||0),0);if(!e||e.length===0||s===0)return(0,V.jsx)(ms,{icon:(0,V.jsx)(bo,{size:20,style:{color:`#94A3B8`}}),title:`No uploads yet`,subtitle:`Photos uploaded by teachers will appear here`,height:i});let c=Math.max(...e.map(e=>e[n]||0),5),l=i,u=l-10-28,d=Math.min(36,376/e.length-8),f=(376-d*e.length)/(e.length+1),p=`barGrad_${r.replace(`#`,``)}`,m=[0,Math.round(c*.5),c];return(0,V.jsx)(`div`,{style:{position:`relative`,width:`100%`},children:(0,V.jsxs)(`svg`,{width:`100%`,height:l,viewBox:`0 0 420 ${l}`,preserveAspectRatio:`xMidYMid meet`,children:[(0,V.jsx)(`defs`,{children:(0,V.jsxs)(`linearGradient`,{id:p,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,V.jsx)(`stop`,{offset:`0%`,stopColor:r,stopOpacity:`1`}),(0,V.jsx)(`stop`,{offset:`100%`,stopColor:r,stopOpacity:`0.6`})]})}),m.map((e,t)=>{let n=10+u-e/c*u;return(0,V.jsxs)(`g`,{children:[(0,V.jsx)(`line`,{x1:36,x2:412,y1:n,y2:n,stroke:`#F1F5F9`,strokeWidth:`1`}),(0,V.jsx)(`text`,{x:32,y:n,textAnchor:`end`,dominantBaseline:`middle`,fontSize:`8`,fill:`#CBD5E1`,children:e})]},t)}),e.map((e,i)=>{let s=e[n]||0,m=Math.max(s/c*u,s>0?3:0),h=36+f+i*(d+f),g=10+u-m,_=a?.i===i;return(0,V.jsxs)(`g`,{onMouseEnter:()=>o({i,x:h+d/2,y:g,val:s,label:e[t]}),onMouseLeave:()=>o(null),style:{cursor:`pointer`},children:[(0,V.jsxs)(`rect`,{x:h,y:10+u,width:d,height:0,fill:`url(#${p})`,rx:`4`,children:[(0,V.jsx)(`animate`,{attributeName:`height`,from:`0`,to:m,dur:`0.6s`,fill:`freeze`,begin:`0.1s`}),(0,V.jsx)(`animate`,{attributeName:`y`,from:10+u,to:g,dur:`0.6s`,fill:`freeze`,begin:`0.1s`})]}),_&&(0,V.jsx)(`rect`,{x:h-2,y:g-2,width:d+4,height:m+4,fill:`none`,stroke:r,strokeWidth:`2`,rx:`5`,opacity:`0.4`}),(0,V.jsx)(`text`,{x:h+d/2,y:l-6,textAnchor:`middle`,fontSize:`8`,fill:`#94A3B8`,fontWeight:`500`,children:e[t]})]},i)}),(0,V.jsx)(`line`,{x1:36,x2:412,y1:10+u,y2:10+u,stroke:`#E2E8F0`,strokeWidth:`1`}),a&&(0,V.jsxs)(`g`,{children:[(0,V.jsx)(`rect`,{x:a.x-28,y:a.y-28,width:56,height:22,rx:`6`,fill:`#1E293B`}),(0,V.jsxs)(`text`,{x:a.x,y:a.y-13,textAnchor:`middle`,fontSize:`9`,fill:`white`,fontWeight:`600`,children:[a.val,` upload`,a.val===1?``:`s`]})]})]})})},gs=({data:e,lines:t,xKey:n=`week`,height:r=180})=>{if(!e||e.length===0)return(0,V.jsx)(ms,{icon:(0,V.jsx)(ts,{size:20,style:{color:`#94A3B8`}}),title:`No attendance data`,subtitle:`Attendance records will be charted here as they're logged`,height:r});let i=e.flatMap(e=>t.map(t=>e[t.key]||0));if(i.every(e=>e===0))return(0,V.jsx)(ms,{icon:(0,V.jsx)(ts,{size:20,style:{color:`#94A3B8`}}),title:`No attendance data`,subtitle:`Attendance records will appear here when available`,height:r});let a=Math.max(Math.min(...i.filter(e=>e>0))-5,0),o=Math.max(...i)+5,s=o-a||1,c=r,l=c-10-28,u=376/Math.max(e.length-1,1),d=e=>10+l-(e-a)/s*l,f=e=>36+e*u,p=[a,Math.round(a+s*.5),o];return(0,V.jsxs)(`svg`,{width:`100%`,height:c,viewBox:`0 0 420 ${c}`,preserveAspectRatio:`xMidYMid meet`,children:[p.map((e,t)=>{let n=d(e);return(0,V.jsxs)(`g`,{children:[(0,V.jsx)(`line`,{x1:36,x2:412,y1:n,y2:n,stroke:`#F1F5F9`,strokeWidth:`1`}),(0,V.jsxs)(`text`,{x:32,y:n,textAnchor:`end`,dominantBaseline:`middle`,fontSize:`8`,fill:`#CBD5E1`,children:[e,`%`]})]},t)}),t.map(({key:t,color:n})=>(0,V.jsxs)(`g`,{children:[(0,V.jsx)(`polyline`,{fill:`none`,stroke:n,strokeWidth:`2.5`,points:e.map((e,n)=>`${f(n)},${d(e[t]||0)}`).join(` `),strokeLinejoin:`round`,strokeLinecap:`round`,opacity:`0.9`}),e.map((e,r)=>(0,V.jsx)(`circle`,{cx:f(r),cy:d(e[t]||0),r:`4`,fill:`white`,stroke:n,strokeWidth:`2.5`},r))]},t)),e.map((e,t)=>(0,V.jsx)(`text`,{x:f(t),y:c-6,textAnchor:`middle`,fontSize:`8`,fill:`#94A3B8`,fontWeight:`500`,children:e[n]},t)),(0,V.jsx)(`line`,{x1:36,x2:412,y1:10+l,y2:10+l,stroke:`#E2E8F0`,strokeWidth:`1`})]})},_s=({data:e,xKey:t=`day`,yKey:n=`views`,color:r=`#22C55E`,height:i=180})=>{if(!e||e.length===0)return(0,V.jsx)(ms,{icon:(0,V.jsx)(as,{size:20,style:{color:`#94A3B8`}}),title:`No engagement data`,subtitle:`Parent photo views will be tracked here`,height:i});let a=e.map(e=>e[n]||0),o=Math.max(...a,5);if(a.every(e=>e===0))return(0,V.jsx)(ms,{icon:(0,V.jsx)(as,{size:20,style:{color:`#94A3B8`}}),title:`No engagement yet`,subtitle:`Views will appear as parents browse photos`,height:i});let s=i,c=s-10-28,l=e.length>1?376/(e.length-1):376,u=t=>e.length===1?224:36+t*l,d=e=>10+c-e/o*c,f=e.map((e,t)=>`${u(t)},${d(e[n]||0)}`),p=e.length===1?``:`M ${u(0)},${10+c} L ${f.join(` L `)} L ${u(e.length-1)},${10+c} Z`,m=`areaG_${r.replace(`#`,``)}`,h=[0,Math.round(o*.5),o];return(0,V.jsxs)(`svg`,{width:`100%`,height:s,viewBox:`0 0 420 ${s}`,preserveAspectRatio:`xMidYMid meet`,children:[(0,V.jsx)(`defs`,{children:(0,V.jsxs)(`linearGradient`,{id:m,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,V.jsx)(`stop`,{offset:`0%`,stopColor:r,stopOpacity:`0.25`}),(0,V.jsx)(`stop`,{offset:`100%`,stopColor:r,stopOpacity:`0.02`})]})}),h.map((e,t)=>{let n=d(e);return(0,V.jsxs)(`g`,{children:[(0,V.jsx)(`line`,{x1:36,x2:412,y1:n,y2:n,stroke:`#F1F5F9`,strokeWidth:`1`}),(0,V.jsx)(`text`,{x:32,y:n,textAnchor:`end`,dominantBaseline:`middle`,fontSize:`8`,fill:`#CBD5E1`,children:e})]},t)}),p&&(0,V.jsx)(`path`,{d:p,fill:`url(#${m})`}),e.length>1&&(0,V.jsx)(`polyline`,{fill:`none`,stroke:r,strokeWidth:`2.5`,points:f.join(` `),strokeLinejoin:`round`,strokeLinecap:`round`}),e.map((e,t)=>{let i=e[n]||0;return i===0?null:(0,V.jsx)(`circle`,{cx:u(t),cy:d(i),r:`5`,fill:`white`,stroke:r,strokeWidth:`2.5`},t)}),e.map((e,n)=>(0,V.jsx)(`text`,{x:u(n),y:s-6,textAnchor:`middle`,fontSize:`8`,fill:`#94A3B8`,fontWeight:`500`,children:e[t]},n)),(0,V.jsx)(`line`,{x1:36,x2:412,y1:10+c,y2:10+c,stroke:`#E2E8F0`,strokeWidth:`1`})]})},vs=({data:e,labelKey:t=`category`,valueKey:n=`count`,colorKey:r=`color`})=>{let[i,a]=(0,S.useState)(null),o=e.reduce((e,t)=>e+(t[n]||0),0);if(o===0)return(0,V.jsx)(ms,{icon:(0,V.jsx)(G,{size:20,style:{color:`#94A3B8`}}),title:`No activities recorded`,subtitle:`Activity data will populate this chart as teachers add activities`,height:160});let s=2*Math.PI*35,c=0;return(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`1rem`},children:[(0,V.jsxs)(`svg`,{width:`140`,height:`140`,viewBox:`0 0 100 100`,children:[(0,V.jsx)(`circle`,{cx:50,cy:50,r:35,stroke:`#F1F5F9`,strokeWidth:`10`,fill:`none`}),e.map((e,t)=>{let l=(e[n]||0)/o;if(l===0)return null;let u=l*s,d=-c*s;c+=l;let f=e[r]||fs[t%fs.length],p=i===t;return(0,V.jsx)(`circle`,{cx:50,cy:50,r:35,stroke:f,strokeWidth:p?14:10,fill:`none`,strokeDasharray:`${u} ${s}`,strokeDashoffset:d,transform:`rotate(-90 50 50)`,style:{transition:`stroke-width 0.2s`,cursor:`pointer`,filter:p?`brightness(1.1)`:`none`},onMouseEnter:()=>a(t),onMouseLeave:()=>a(null)},t)}),(0,V.jsx)(`text`,{x:50,y:46,textAnchor:`middle`,fontSize:`5.5`,fill:`#94A3B8`,fontWeight:`500`,children:`TOTAL`}),(0,V.jsx)(`text`,{x:50,y:58,textAnchor:`middle`,fontSize:`13`,fontWeight:`800`,fill:`#1E293B`,children:o})]}),(0,V.jsx)(`div`,{className:`adm-donut-legend`,children:e.filter(e=>e[n]>0).map((o,s)=>{let c=o[r]||fs[s%fs.length];return(0,V.jsxs)(`div`,{className:`adm-legend-item`,onMouseEnter:()=>a(e.indexOf(o)),onMouseLeave:()=>a(null),children:[(0,V.jsx)(`span`,{className:`adm-legend-dot`,style:{background:c}}),(0,V.jsx)(`span`,{style:{fontWeight:i===e.indexOf(o)?700:400},children:o[t]}),(0,V.jsx)(`span`,{style:{marginLeft:`auto`,fontWeight:700,color:c},children:o[n]})]},s)})})]})},ys=({data:e,labelKey:t=`className`,valueKey:n=`count`,colorKey:r=`color`})=>{let i=e.reduce((e,t)=>e+(t[n]||0),0);if(i===0)return(0,V.jsx)(ms,{icon:(0,V.jsx)(No,{size:20,style:{color:`#94A3B8`}}),title:`No students enrolled`,subtitle:`Student data will appear once students are registered`,height:140});let a=2*Math.PI*20,o=0;return(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1.5rem`},children:[(0,V.jsxs)(`svg`,{width:`130`,height:`130`,viewBox:`0 0 100 100`,children:[(0,V.jsx)(`circle`,{cx:50,cy:50,r:20,stroke:`#F1F5F9`,strokeWidth:`40`,fill:`none`}),e.map((e,s)=>{let c=(e[n]||0)/i;if(c===0)return o+=c,null;let l=c*a,u=-o*a,d=e[r]||ps[e[t]]||fs[s],f=(o+c/2)*2*Math.PI-Math.PI/2,p=50+20*Math.cos(f),m=50+20*Math.sin(f);return o+=c,(0,V.jsxs)(`g`,{children:[(0,V.jsx)(`circle`,{cx:50,cy:50,r:20,stroke:d,strokeWidth:`40`,fill:`none`,strokeDasharray:`${l} ${a}`,strokeDashoffset:u,transform:`rotate(-90 50 50)`}),(0,V.jsx)(`text`,{x:p,y:m,textAnchor:`middle`,dominantBaseline:`middle`,fontSize:`6.5`,fill:`white`,fontWeight:`700`,children:e[n]})]},s)})]}),(0,V.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.6rem`},children:e.map((e,a)=>{let o=e[r]||ps[e[t]]||fs[a],s=i>0?Math.round(e[n]/i*100):0;return(0,V.jsxs)(`div`,{className:`adm-legend-item`,children:[(0,V.jsx)(`span`,{className:`adm-legend-dot`,style:{background:o}}),(0,V.jsx)(`span`,{children:e[t]}),(0,V.jsx)(`span`,{style:{marginLeft:`auto`,fontWeight:700,color:o},children:e[n]}),(0,V.jsxs)(`span`,{style:{fontSize:`0.65rem`,color:`#CBD5E1`,marginLeft:`0.25rem`},children:[`(`,s,`%)`]})]},a)})})]})},bs=({data:e,nameKey:t=`teacherName`,valueKey:n=`uploads`,color:r=`#F59E0B`})=>{let i=e.reduce((e,t)=>e+(t[n]||0),0);if(!e||e.length===0||i===0)return(0,V.jsx)(ms,{icon:(0,V.jsx)(No,{size:20,style:{color:`#94A3B8`}}),title:`No uploads yet`,subtitle:`Teacher photo uploads will be tracked here`,height:140});let a=Math.max(...e.map(e=>e[n]||0),5);return`${r.replace(`#`,``)}`,(0,V.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:e.map((e,i)=>{let o=(e[n]||0)/a*100;return(0,V.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`100px 1fr 32px`,alignItems:`center`,gap:`0.75rem`},children:[(0,V.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`#475569`,fontWeight:500,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e[t]}),(0,V.jsx)(`div`,{style:{height:`28px`,background:`#F8FAFC`,borderRadius:`6px`,overflow:`hidden`},children:(0,V.jsx)(`div`,{style:{height:`100%`,width:`${o}%`,background:`linear-gradient(90deg, ${r}, ${r}cc)`,borderRadius:`6px`,transition:`width 0.8s cubic-bezier(0.4,0,0.2,1)`,minWidth:e[n]>0?`4px`:`0`}})}),(0,V.jsx)(`span`,{style:{fontSize:`0.8rem`,fontWeight:700,color:e[n]>0?`#1E293B`:`#CBD5E1`,textAlign:`right`},children:e[n]})]},i)})})},xs=()=>{let e=ct(),t=at(),n=()=>new URLSearchParams(t.search).get(`tab`)||`overview`,[r,i]=(0,S.useState)(n()),[a,o]=(0,S.useState)(null),[s,c]=(0,S.useState)([]),[l,u]=(0,S.useState)(!0),[d,f]=(0,S.useState)(null),[p,m]=(0,S.useState)(!1),[h,g]=(0,S.useState)(`week`),[_,v]=(0,S.useState)([]),[y,b]=(0,S.useState)(``),[x,C]=(0,S.useState)(``);(0,S.useEffect)(()=>{i(n())},[t.search]);let w=t=>e(`/admin?tab=${t}`),T=async()=>{try{o((await B.get(`/admin/stats`)).data)}catch{C(`Could not retrieve statistics.`)}},E=async()=>{try{c((await B.get(`/admin/parent-requests`)).data||[])}catch{}},D=(0,S.useCallback)(async(e=h)=>{m(!0);try{f((await B.get(`/admin/analytics?filter=${e}`)).data)}catch{}finally{m(!1)}},[h]),O=async()=>{try{let[e,t]=await Promise.all([B.get(`/admin/teachers`).catch(()=>({data:[]})),B.get(`/admin/parents`).catch(()=>({data:[]}))]),n=(e.data||[]).map(e=>({name:e.name,role:`Teacher`,linkedTo:e.classroom_name||`â€”`,status:e.status||`approved`,email:e.email})),r=(t.data||[]).map(e=>({name:e.name,role:`Parent`,linkedTo:e.children&&e.children[0]?e.children[0].student_name:`â€”`,status:e.status||`approved`,email:e.email}));v([...n,...r])}catch{}},k=async e=>{try{await B.put(`/admin/parent-requests/${e}/approve`),T(),E(),D()}catch{alert(`Failed to approve.`)}},ee=async e=>{if(window.confirm(`Reject this request?`))try{await B.put(`/admin/parent-requests/${e}/reject`),T(),E()}catch{alert(`Failed to reject.`)}};(0,S.useEffect)(()=>{(async()=>{u(!0),await Promise.all([T(),E(),D(`week`),O()]),u(!1)})()},[]);let te=e=>{g(e),D(e)},A=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],ne=(d?.dailyUploads||[]).map(e=>({...e,date:e.date&&e.date.includes(`-`)?A[new Date(e.date+`T12:00:00`).getDay()]:e.date||`?`})),j=(d?.parentEngagement||[]).map(e=>({...e,day:e.day&&!e.day.includes(`-`)?e.day:e.date?A[new Date(e.date+`T12:00:00`).getDay()]:e.day||`?`,views:e.views??e.score??0})),re=(d?.activityDistribution||[]).map((e,t)=>({...e,color:e.color||fs[t%fs.length]})),M=d?.attendanceTrend||[],N=(d?.teacherPerformance||[]).map(e=>({...e,teacherName:e.teacherName||e.name,uploads:e.uploads??0})),ie=(d?.studentDistribution||[]).map(e=>({...e,color:e.color||ps[e.className]||`#4F9CF9`})),ae=_.filter(e=>e.name?.toLowerCase().includes(y.toLowerCase())||e.role?.toLowerCase().includes(y.toLowerCase())||e.linkedTo?.toLowerCase().includes(y.toLowerCase()));return s.length,l?(0,V.jsxs)(`div`,{className:`app-container`,children:[(0,V.jsx)(ds,{}),(0,V.jsxs)(`div`,{className:`main-content`,children:[(0,V.jsx)(us,{}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,flex:1,flexDirection:`column`,gap:`1rem`,color:`#94A3B8`,fontFamily:`Outfit, sans-serif`},children:[(0,V.jsx)(Ko,{size:28,style:{animation:`adm-spin 1s linear infinite`}}),(0,V.jsx)(`span`,{children:`Loading dashboard...`})]})]})]}):(0,V.jsxs)(`div`,{className:`app-container`,children:[(0,V.jsx)(ds,{}),(0,V.jsxs)(`div`,{className:`main-content`,children:[(0,V.jsx)(us,{}),(0,V.jsxs)(`div`,{className:`adm-content`,children:[(0,V.jsxs)(`div`,{className:`adm-page-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h1`,{className:`adm-page-title`,children:`Analytics dashboard`}),(0,V.jsx)(`p`,{className:`adm-page-subtitle`,children:`Real-time view of your preschool community.`})]}),(0,V.jsxs)(`div`,{className:`adm-header-actions`,children:[(0,V.jsx)(`div`,{className:`adm-filter-group`,children:[`today`,`week`,`month`].map(e=>(0,V.jsx)(`button`,{onClick:()=>te(e),className:`adm-filter-btn ${h===e?`active`:``}`,children:e===`week`?`This week`:e===`month`?`This month`:`Today`},e))}),(0,V.jsxs)(`button`,{className:`adm-export-btn`,children:[(0,V.jsx)(Ao,{size:14}),` Export`]})]})]}),r===`overview`&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`adm-stats-row`,children:[{label:`TOTAL STUDENTS`,value:a?.totalStudents??0,sub:`across 3 classes`,icon:(0,V.jsx)(No,{size:18}),bg:`#EFF6FF`,color:`#3B82F6`},{label:`TOTAL PARENTS`,value:a?.totalParents??0,sub:`${a?.totalParents??0} active`,icon:(0,V.jsx)(as,{size:18}),bg:`#F0FDF4`,color:`#22C55E`},{label:`TOTAL TEACHERS`,value:a?.totalTeachers??0,sub:`all active`,icon:(0,V.jsx)(No,{size:18}),bg:`#F0FDF4`,color:`#22C55E`},{label:`PHOTOS UPLOADED`,value:a?.totalPhotos??0,sub:`${d?.summary?.photosThisWeek??0} this week`,icon:(0,V.jsx)(bo,{size:18}),bg:`#EFF6FF`,color:`#3B82F6`},{label:`PENDING APPROVALS`,value:a?.pendingPhotos??0,sub:`needs review`,icon:(0,V.jsx)(Co,{size:18}),bg:`#FFFBEB`,color:`#F59E0B`,onClick:()=>w(`approvals`)},{label:`ACTIVE CLASSES`,value:3,sub:`Nursery, LKG, UKG`,icon:(0,V.jsx)(G,{size:18}),bg:`#F5F3FF`,color:`#8B5CF6`}].map((e,t)=>(0,V.jsxs)(`div`,{className:`adm-stat-card`,onClick:e.onClick,style:{cursor:e.onClick?`pointer`:`default`},children:[(0,V.jsx)(`div`,{className:`adm-stat-icon`,style:{background:e.bg,color:e.color},children:e.icon}),(0,V.jsxs)(`div`,{className:`adm-stat-info`,children:[(0,V.jsx)(`span`,{className:`adm-stat-label`,children:e.label}),(0,V.jsx)(`span`,{className:`adm-stat-value`,children:e.value}),(0,V.jsx)(`span`,{className:`adm-stat-sub`,children:e.sub})]})]},t))}),(0,V.jsxs)(`div`,{className:`adm-charts-row`,children:[(0,V.jsxs)(`div`,{className:`adm-chart-card`,children:[(0,V.jsxs)(`div`,{className:`adm-chart-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`adm-chart-title`,children:`Daily photo uploads`}),(0,V.jsxs)(`p`,{className:`adm-chart-sub`,children:[`Last 7 days â€” `,ne.reduce((e,t)=>e+(t.count||0),0),` total`]})]}),p&&(0,V.jsx)(Ko,{size:14,style:{color:`#CBD5E1`,animation:`adm-spin 1s linear infinite`}})]}),(0,V.jsx)(hs,{data:ne,labelKey:`date`,valueKey:`count`,color:`#3B82F6`})]}),(0,V.jsxs)(`div`,{className:`adm-chart-card`,children:[(0,V.jsx)(`div`,{className:`adm-chart-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`adm-chart-title`,children:`Activity distribution`}),(0,V.jsx)(`p`,{className:`adm-chart-sub`,children:`Categories this week`})]})}),(0,V.jsx)(vs,{data:re,labelKey:`category`,valueKey:`count`,colorKey:`color`})]})]}),(0,V.jsxs)(`div`,{className:`adm-charts-row`,children:[(0,V.jsxs)(`div`,{className:`adm-chart-card`,children:[(0,V.jsx)(`div`,{className:`adm-chart-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`adm-chart-title`,children:`Attendance trend`}),(0,V.jsx)(`p`,{className:`adm-chart-sub`,children:`By class, last 4 weeks`})]})}),(0,V.jsx)(gs,{data:M,xKey:`week`,lines:[{key:`nursery`,color:`#3B82F6`,label:`Nursery`},{key:`lkg`,color:`#F59E0B`,label:`LKG`},{key:`ukg`,color:`#22C55E`,label:`UKG`}]}),(0,V.jsx)(`div`,{className:`adm-donut-legend`,style:{justifyContent:`center`,marginTop:`0.5rem`},children:[{label:`nursery`,color:`#3B82F6`},{label:`lkg`,color:`#F59E0B`},{label:`ukg`,color:`#22C55E`}].map(e=>(0,V.jsxs)(`div`,{className:`adm-legend-item`,children:[(0,V.jsx)(`span`,{className:`adm-legend-dot`,style:{background:e.color}}),(0,V.jsx)(`span`,{children:e.label})]},e.label))})]}),(0,V.jsxs)(`div`,{className:`adm-chart-card`,children:[(0,V.jsx)(`div`,{className:`adm-chart-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`adm-chart-title`,children:`Parent engagement`}),(0,V.jsx)(`p`,{className:`adm-chart-sub`,children:`Photo views per day`})]})}),(0,V.jsx)(_s,{data:j,xKey:`day`,yKey:`views`,color:`#22C55E`})]})]}),(0,V.jsxs)(`div`,{className:`adm-charts-row`,children:[(0,V.jsxs)(`div`,{className:`adm-chart-card`,children:[(0,V.jsx)(`div`,{className:`adm-chart-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`adm-chart-title`,children:`Teacher performance`}),(0,V.jsx)(`p`,{className:`adm-chart-sub`,children:`Total photo uploads (all time)`})]})}),N.length>0?(0,V.jsx)(bs,{data:N,nameKey:`teacherName`,valueKey:`uploads`,color:`#F59E0B`}):(0,V.jsx)(`div`,{style:{color:`#CBD5E1`,fontSize:`0.8rem`,padding:`1rem 0`},children:`No teacher data`})]}),(0,V.jsxs)(`div`,{className:`adm-chart-card`,children:[(0,V.jsx)(`div`,{className:`adm-chart-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`adm-chart-title`,children:`Student distribution`}),(0,V.jsxs)(`p`,{className:`adm-chart-sub`,children:[`By class â€” `,ie.reduce((e,t)=>e+(t.count||0),0),` total`]})]})}),(0,V.jsx)(ys,{data:ie,labelKey:`className`,valueKey:`count`,colorKey:`color`})]})]})]}),r===`analytics`&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`adm-info-card`,style:{marginBottom:`1.25rem`},children:[(0,V.jsx)(ts,{size:16,style:{color:`#3B82F6`,marginRight:`0.5rem`,verticalAlign:`middle`}}),`All charts are available here with`,` `,(0,V.jsx)(`span`,{style:{color:`#3B82F6`,fontWeight:600},children:`daily / weekly / monthly`}),` filters. Use the filter buttons above to change the time range.`]}),(0,V.jsxs)(`div`,{className:`adm-charts-row`,children:[(0,V.jsxs)(`div`,{className:`adm-chart-card`,children:[(0,V.jsx)(`div`,{className:`adm-chart-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`adm-chart-title`,children:`Daily photo uploads`}),(0,V.jsxs)(`p`,{className:`adm-chart-sub`,children:[ne.reduce((e,t)=>e+(t.count||0),0),` photos â€” `,h]})]})}),(0,V.jsx)(hs,{data:ne,labelKey:`date`,valueKey:`count`,color:`#3B82F6`})]}),(0,V.jsxs)(`div`,{className:`adm-chart-card`,children:[(0,V.jsx)(`div`,{className:`adm-chart-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`adm-chart-title`,children:`Activity distribution`}),(0,V.jsx)(`p`,{className:`adm-chart-sub`,children:`All activities recorded`})]})}),(0,V.jsx)(vs,{data:re,labelKey:`category`,valueKey:`count`,colorKey:`color`})]})]}),(0,V.jsxs)(`div`,{className:`adm-charts-row`,children:[(0,V.jsxs)(`div`,{className:`adm-chart-card`,children:[(0,V.jsx)(`div`,{className:`adm-chart-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`adm-chart-title`,children:`Parent engagement`}),(0,V.jsx)(`p`,{className:`adm-chart-sub`,children:`Photo views per day`})]})}),(0,V.jsx)(_s,{data:j,xKey:`day`,yKey:`views`,color:`#22C55E`})]}),(0,V.jsxs)(`div`,{className:`adm-chart-card`,children:[(0,V.jsx)(`div`,{className:`adm-chart-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`adm-chart-title`,children:`Teacher performance`}),(0,V.jsx)(`p`,{className:`adm-chart-sub`,children:`Uploads this period`})]})}),(0,V.jsx)(bs,{data:N,nameKey:`teacherName`,valueKey:`uploads`,color:`#F59E0B`})]})]})]}),r===`approvals`&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`adm-panel`,children:[(0,V.jsx)(`h3`,{className:`adm-panel-title`,children:`Pending approvals`}),s.length===0?(0,V.jsxs)(`div`,{style:{textAlign:`center`,padding:`2rem`,color:`#94A3B8`},children:[(0,V.jsx)(wo,{size:32,style:{marginBottom:`0.5rem`,opacity:.3}}),(0,V.jsx)(`p`,{children:`No pending approvals at this time.`})]}):(0,V.jsx)(`div`,{className:`adm-approval-list`,children:s.map(e=>(0,V.jsxs)(`div`,{className:`adm-approval-row`,children:[(0,V.jsx)(`div`,{className:`adm-approval-avatar`,children:(e.name||`U`)[0].toUpperCase()}),(0,V.jsxs)(`div`,{className:`adm-approval-info`,children:[(0,V.jsx)(`span`,{className:`adm-approval-name`,children:e.name}),(0,V.jsxs)(`span`,{className:`adm-approval-meta`,children:[`Parent Â· `,e.childName||`â€”`,` Â· `,new Date(e.created_at||Date.now()).toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`})]})]}),(0,V.jsxs)(`div`,{className:`adm-approval-actions`,children:[(0,V.jsxs)(`button`,{className:`adm-approve-btn`,onClick:()=>k(e.id),children:[(0,V.jsx)(wo,{size:14}),` Approve`]}),(0,V.jsxs)(`button`,{className:`adm-reject-btn`,onClick:()=>ee(e.id),children:[(0,V.jsx)(Do,{size:14}),` Reject`]})]})]},e.id))})]}),(0,V.jsxs)(`div`,{className:`adm-panel`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`0.75rem`},children:[(0,V.jsx)(`h3`,{className:`adm-panel-title`,style:{marginBottom:0},children:`Photo approval queue`}),(0,V.jsxs)(`span`,{className:`adm-badge-count`,children:[a?.pendingPhotos??0,` pending`]})]}),(0,V.jsxs)(`p`,{style:{color:`#94A3B8`,fontSize:`0.875rem`},children:[`Go to`,` `,(0,V.jsx)(`button`,{onClick:()=>e(`/admin/approvals`),style:{color:`#3B82F6`,background:`none`,border:`none`,cursor:`pointer`,fontWeight:600,fontFamily:`inherit`,fontSize:`inherit`},children:`Photo Approvals`}),` `,`to review uploaded activity photos from teachers.`]}),a?.pendingPhotos>0&&(0,V.jsxs)(`button`,{className:`adm-export-btn`,style:{marginTop:`0.75rem`},onClick:()=>e(`/admin/approvals`),children:[(0,V.jsx)(Fo,{size:14}),` Review Photos`]})]})]}),r===`users`&&(0,V.jsxs)(`div`,{className:`adm-panel`,children:[(0,V.jsxs)(`div`,{className:`adm-users-header`,children:[(0,V.jsxs)(`h3`,{className:`adm-panel-title`,style:{marginBottom:0},children:[`All users `,(0,V.jsxs)(`span`,{style:{color:`#94A3B8`,fontWeight:400,fontSize:`0.875rem`},children:[`(`,_.length,`)`]})]}),(0,V.jsxs)(`div`,{className:`adm-user-search`,children:[(0,V.jsx)(qo,{size:14,style:{color:`#94A3B8`}}),(0,V.jsx)(`input`,{type:`text`,placeholder:`Search users...`,value:y,onChange:e=>b(e.target.value),className:`adm-user-search-input`})]})]}),(0,V.jsx)(`div`,{className:`adm-table-wrap`,children:(0,V.jsxs)(`table`,{className:`adm-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`NAME`}),(0,V.jsx)(`th`,{children:`ROLE`}),(0,V.jsx)(`th`,{children:`LINKED TO`}),(0,V.jsx)(`th`,{children:`STATUS`}),(0,V.jsx)(`th`,{children:`ACTIONS`})]})}),(0,V.jsx)(`tbody`,{children:ae.length>0?ae.map((t,n)=>(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{children:(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,V.jsx)(`div`,{style:{width:28,height:28,borderRadius:`50%`,background:t.role===`Teacher`?`#EFF6FF`:`#F0FDF4`,color:t.role===`Teacher`?`#3B82F6`:`#22C55E`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`0.75rem`,fontWeight:700,flexShrink:0},children:(t.name||`U`)[0]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`adm-table-name`,children:t.name}),(0,V.jsx)(`div`,{style:{fontSize:`0.72rem`,color:`#94A3B8`},children:t.email})]})]})}),(0,V.jsx)(`td`,{children:(0,V.jsx)(`span`,{style:{background:t.role===`Teacher`?`#EFF6FF`:`#F0FDF4`,color:t.role===`Teacher`?`#3B82F6`:`#22C55E`,padding:`0.15rem 0.5rem`,borderRadius:`20px`,fontSize:`0.75rem`,fontWeight:600},children:t.role})}),(0,V.jsx)(`td`,{children:t.linkedTo}),(0,V.jsx)(`td`,{children:(0,V.jsx)(`span`,{className:`adm-status-pill ${t.status===`approved`||t.status===`active`?`active`:`pending`}`,children:t.status===`approved`||t.status===`active`?`Active`:`Pending`})}),(0,V.jsx)(`td`,{children:(0,V.jsx)(`button`,{className:`adm-manage-btn`,onClick:()=>e(t.role===`Teacher`?`/admin/teachers`:`/admin/parents`),children:`Manage`})})]},n)):(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{colSpan:`5`,style:{textAlign:`center`,padding:`2rem`,color:`#94A3B8`},children:y?`No users match your search.`:`No users found.`})})})]})})]}),r===`students`&&(0,V.jsxs)(`div`,{className:`adm-panel`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`1.25rem`},children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`adm-panel-title`,style:{marginBottom:`0.25rem`},children:`Students`}),(0,V.jsx)(`p`,{style:{color:`#94A3B8`,fontSize:`0.8rem`,margin:0},children:`Enrolled students across all classes`})]}),(0,V.jsx)(`button`,{className:`adm-export-btn`,onClick:()=>e(`/admin/students`),children:`Manage Students`})]}),(0,V.jsx)(`div`,{className:`adm-charts-row`,style:{marginBottom:0},children:ie.map((e,t)=>(0,V.jsxs)(`div`,{className:`adm-class-card`,children:[(0,V.jsx)(`div`,{className:`adm-class-icon`,style:{background:e.color+`20`,color:e.color},children:(0,V.jsx)(G,{size:20})}),(0,V.jsx)(`h4`,{className:`adm-class-name`,children:e.className}),(0,V.jsx)(`span`,{style:{fontSize:`2rem`,fontWeight:800,color:`#0F172A`,lineHeight:1.2},children:e.count}),(0,V.jsx)(`p`,{className:`adm-class-meta`,children:`enrolled students`})]},t))})]}),r===`classrooms`&&(0,V.jsxs)(`div`,{className:`adm-panel`,children:[(0,V.jsx)(`h3`,{className:`adm-panel-title`,children:`Active Classes`}),(0,V.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`1rem`},children:[`Nursery`,`LKG`,`UKG`].map(e=>{let t=ie.find(t=>t.className===e),n=N.find(t=>t.classroom===e),r=ps[e];return(0,V.jsxs)(`div`,{className:`adm-class-card`,style:{border:`1px solid ${r}20`},children:[(0,V.jsx)(`div`,{className:`adm-class-icon`,style:{background:r+`15`,color:r},children:(0,V.jsx)(G,{size:20})}),(0,V.jsx)(`h4`,{className:`adm-class-name`,children:e}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.4rem`,marginTop:`0.25rem`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:`0.8rem`},children:[(0,V.jsx)(`span`,{style:{color:`#94A3B8`},children:`Students`}),(0,V.jsx)(`span`,{style:{fontWeight:700,color:`#1E293B`},children:t?.count??0})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:`0.8rem`},children:[(0,V.jsx)(`span`,{style:{color:`#94A3B8`},children:`Teacher`}),(0,V.jsx)(`span`,{style:{fontWeight:600,color:`#475569`},children:n?.teacherName||`â€”`})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:`0.8rem`},children:[(0,V.jsx)(`span`,{style:{color:`#94A3B8`},children:`Photos`}),(0,V.jsx)(`span`,{style:{fontWeight:600,color:`#475569`},children:n?.uploads??0})]})]})]},e)})})]})]})]}),(0,V.jsx)(`style`,{children:`
        @keyframes adm-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .adm-content {
          padding: 1.75rem 2rem 3rem;
          max-width: 1340px;
          width: 100%;
          font-family: 'Outfit', sans-serif;
        }

        /* â”€â”€ Page Header â”€â”€ */
        .adm-page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .adm-page-title {
          font-size: 1.75rem; font-weight: 800;
          color: #0F172A; line-height: 1.2; margin: 0 0 0.2rem 0;
        }
        .adm-page-subtitle { font-size: 0.875rem; color: #64748B; margin: 0; }
        .adm-header-actions { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }

        .adm-filter-group { display: flex; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; }
        .adm-filter-btn {
          padding: 0.4rem 0.85rem; background: white; border: none;
          font-size: 0.8rem; font-weight: 500; color: #64748B; cursor: pointer;
          font-family: 'Outfit', sans-serif; border-right: 1px solid #E2E8F0; transition: all 0.15s;
        }
        .adm-filter-btn:last-child { border-right: none; }
        .adm-filter-btn:hover { background: #F8FAFC; color: #334155; }
        .adm-filter-btn.active { background: #2563EB; color: white; }

        .adm-export-btn {
          display: flex; align-items: center; gap: 0.4rem;
          padding: 0.45rem 1rem; background: #2563EB; color: white;
          border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600;
          cursor: pointer; font-family: 'Outfit', sans-serif; transition: background 0.15s;
        }
        .adm-export-btn:hover { background: #1D4ED8; }

        /* â”€â”€ Tabs â”€â”€ */
        .adm-tabs-wrap {
          border: 1px solid #E2E8F0; border-bottom: none;
          border-radius: 10px 10px 0 0; background: white;
          margin-bottom: 0;
        }
        .adm-tabs { display: flex; gap: 0; padding: 0 1rem; }
        .adm-tab-btn {
          display: flex; align-items: center; gap: 0.4rem;
          padding: 0.8rem 1rem; background: transparent; border: none;
          border-bottom: 2px solid transparent; font-size: 0.875rem; font-weight: 500;
          color: #64748B; cursor: pointer; font-family: 'Outfit', sans-serif;
          transition: all 0.15s; margin-bottom: -1px; white-space: nowrap;
        }
        .adm-tab-btn:hover { color: #1E293B; }
        .adm-tab-btn.active { color: #1E293B; font-weight: 700; border-bottom-color: #1E293B; }
        .adm-tab-badge {
          background: #3B82F6; color: white; font-size: 0.7rem; font-weight: 700;
          padding: 0.1rem 0.45rem; border-radius: 20px; min-width: 18px; text-align: center;
        }

        /* â”€â”€ Stat Cards â”€â”€ */
        .adm-stats-row {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.875rem;
          margin: 0 0 1.25rem 0;
          border: 1px solid #E2E8F0; border-top: none;
          border-radius: 0 0 10px 10px; background: white;
          padding: 1rem;
        }
        @media (max-width: 1200px) { .adm-stats-row { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px) { .adm-stats-row { grid-template-columns: repeat(2, 1fr); } }
        .adm-stat-card {
          background: #FAFAFA; border: 1px solid #F1F5F9; border-radius: 10px;
          padding: 0.875rem 1rem; display: flex; flex-direction: column; gap: 0.5rem;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .adm-stat-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); transform: translateY(-1px); }
        .adm-stat-icon {
          width: 34px; height: 34px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
        }
        .adm-stat-info { display: flex; flex-direction: column; gap: 0.05rem; }
        .adm-stat-label { font-size: 0.62rem; font-weight: 700; color: #94A3B8; letter-spacing: 0.05em; text-transform: uppercase; }
        .adm-stat-value { font-size: 1.7rem; font-weight: 800; color: #0F172A; line-height: 1.2; }
        .adm-stat-sub { font-size: 0.72rem; color: #94A3B8; }

        /* â”€â”€ Chart Cards â”€â”€ */
        .adm-charts-row {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1.25rem; margin-bottom: 1.25rem;
        }
        @media (max-width: 900px) { .adm-charts-row { grid-template-columns: 1fr; } }
        .adm-chart-card {
          background: white; border: 1px solid #F1F5F9; border-radius: 12px;
          padding: 1.25rem 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .adm-chart-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; }
        .adm-chart-title { font-size: 0.95rem; font-weight: 700; color: #1E293B; margin: 0 0 0.15rem 0; }
        .adm-chart-sub { font-size: 0.75rem; color: #94A3B8; margin: 0; }

        /* â”€â”€ Legend â”€â”€ */
        .adm-donut-legend { display: flex; flex-wrap: wrap; gap: 0.4rem 0.9rem; justify-content: center; }
        .adm-legend-item { display: flex; align-items: center; gap: 0.35rem; font-size: 0.75rem; color: #475569; }
        .adm-legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

        /* â”€â”€ Panels â”€â”€ */
        .adm-panel {
          background: white; border: 1px solid #F1F5F9; border-radius: 12px;
          padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04); margin-bottom: 1.25rem;
        }
        .adm-panel-title { font-size: 1rem; font-weight: 700; color: #1E293B; margin: 0 0 1rem 0; }
        .adm-info-card {
          background: white; border: 1px solid #F1F5F9; border-radius: 12px;
          padding: 1.25rem 1.5rem; margin-bottom: 1.25rem; color: #64748B;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04); font-size: 0.875rem;
        }

        /* â”€â”€ Approval List â”€â”€ */
        .adm-approval-list { display: flex; flex-direction: column; }
        .adm-approval-row {
          display: flex; align-items: center; gap: 0.75rem;
          padding: 0.875rem 0; border-bottom: 1px solid #F8FAFC;
        }
        .adm-approval-row:last-child { border-bottom: none; }
        .adm-approval-avatar {
          width: 36px; height: 36px; border-radius: 50%; background: #EFF6FF; color: #3B82F6;
          font-size: 0.875rem; font-weight: 700; display: flex; align-items: center;
          justify-content: center; flex-shrink: 0;
        }
        .adm-approval-info { flex: 1; display: flex; flex-direction: column; gap: 0.15rem; }
        .adm-approval-name { font-size: 0.875rem; font-weight: 600; color: #1E293B; }
        .adm-approval-meta { font-size: 0.75rem; color: #94A3B8; }
        .adm-approval-actions { display: flex; gap: 0.5rem; flex-shrink: 0; }
        .adm-approve-btn {
          display: flex; align-items: center; gap: 0.35rem; padding: 0.4rem 0.85rem;
          background: #22C55E; color: white; border: none; border-radius: 8px;
          font-size: 0.8rem; font-weight: 600; cursor: pointer; font-family: 'Outfit', sans-serif; transition: background 0.15s;
        }
        .adm-approve-btn:hover { background: #16A34A; }
        .adm-reject-btn {
          display: flex; align-items: center; gap: 0.35rem; padding: 0.4rem 0.85rem;
          background: transparent; color: #64748B; border: 1.5px solid #E2E8F0;
          border-radius: 8px; font-size: 0.8rem; font-weight: 600; cursor: pointer;
          font-family: 'Outfit', sans-serif; transition: all 0.15s;
        }
        .adm-reject-btn:hover { border-color: #EF4444; color: #EF4444; }
        .adm-badge-count {
          background: #F1F5F9; color: #475569; font-size: 0.75rem; font-weight: 600;
          padding: 0.2rem 0.6rem; border-radius: 6px;
        }

        /* â”€â”€ Users Table â”€â”€ */
        .adm-users-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; }
        .adm-user-search {
          display: flex; align-items: center; gap: 0.5rem; border: 1px solid #E2E8F0;
          border-radius: 8px; padding: 0.4rem 0.75rem; background: #F8FAFC;
        }
        .adm-user-search-input {
          border: none; background: transparent; outline: none; font-size: 0.85rem;
          color: #475569; font-family: 'Outfit', sans-serif; width: 180px;
        }
        .adm-user-search-input::placeholder { color: #94A3B8; }
        .adm-table-wrap { overflow-x: auto; border-radius: 8px; border: 1px solid #F1F5F9; }
        .adm-table { width: 100%; border-collapse: collapse; }
        .adm-table th {
          background: #F8FAFC; padding: 0.7rem 1rem; font-size: 0.68rem; font-weight: 700;
          color: #94A3B8; text-transform: uppercase; letter-spacing: 0.06em; text-align: left;
          border-bottom: 1px solid #F1F5F9;
        }
        .adm-table td { padding: 0.75rem 1rem; font-size: 0.875rem; color: #475569; border-bottom: 1px solid #F8FAFC; }
        .adm-table tr:last-child td { border-bottom: none; }
        .adm-table tr:hover td { background: #FAFAFA; }
        .adm-table-name { font-weight: 600; color: #1E293B !important; }
        .adm-status-pill {
          display: inline-flex; align-items: center; padding: 0.2rem 0.7rem;
          border-radius: 20px; font-size: 0.72rem; font-weight: 600;
        }
        .adm-status-pill.active { background: #DCFCE7; color: #16A34A; }
        .adm-status-pill.pending { background: #FEF3C7; color: #D97706; }
        .adm-manage-btn {
          background: transparent; border: none; color: #3B82F6; font-size: 0.875rem;
          font-weight: 600; cursor: pointer; font-family: 'Outfit', sans-serif;
          padding: 0; transition: color 0.15s;
        }
        .adm-manage-btn:hover { color: #1D4ED8; }

        /* â”€â”€ Class Cards â”€â”€ */
        .adm-class-card {
          background: #FAFAFA; border: 1px solid #F1F5F9; border-radius: 12px;
          padding: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .adm-class-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); transform: translateY(-1px); }
        .adm-class-icon {
          width: 40px; height: 40px; background: #EFF6FF; color: #3B82F6;
          border-radius: 10px; display: flex; align-items: center; justify-content: center;
        }
        .adm-class-name { font-size: 1rem; font-weight: 700; color: #1E293B; margin: 0; }
        .adm-class-meta { font-size: 0.8rem; color: #94A3B8; margin: 0; }
      `})]})},Ss=()=>{let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)([]),[i,a]=(0,S.useState)([]),[o,s]=(0,S.useState)(!0),[c,l]=(0,S.useState)(``),[u,d]=(0,S.useState)(!1),[f,p]=(0,S.useState)(null),[m,h]=(0,S.useState)(``),[g,_]=(0,S.useState)(``),[v,y]=(0,S.useState)(``),[b,x]=(0,S.useState)(``),[C,w]=(0,S.useState)(``),[T,E]=(0,S.useState)(!1),D=async()=>{try{let[e,n,i]=await Promise.all([B.get(`/admin/students`),B.get(`/admin/classrooms`),B.get(`/admin/parents`)]);t(e.data),r(n.data),a(i.data)}catch(e){console.error(e)}finally{s(!1)}};(0,S.useEffect)(()=>{D()},[]);let O=()=>{p(null),h(``),_(``),y(``),x(``),w(``),d(!0)},k=e=>{p(e.id),h(e.student_name),_(e.age),y(e.classroom_name||``),x(e.parent_email||``),w(``),d(!0)},ee=async e=>{if(e.preventDefault(),!m||!g){w(`Name and age are required.`);return}E(!0);try{let e={student_name:m,age:parseInt(g),classroom_name:v,parent_email:b};f?await B.put(`/admin/students/${f}`,e):await B.post(`/admin/students`,e),d(!1),D()}catch{w(`Failed to save. Please try again.`)}finally{E(!1)}},te=async e=>{if(window.confirm(`Delete this student?`))try{await B.delete(`/admin/students/${e}`),D()}catch{alert(`Could not delete.`)}},A=e.filter(e=>e.student_name?.toLowerCase().includes(c.toLowerCase())||e.classroom_name?.toLowerCase().includes(c.toLowerCase())||e.parent_name?.toLowerCase().includes(c.toLowerCase())),ne={Nursery:`#22C55E`,LKG:`#3B82F6`,UKG:`#F59E0B`},j={Nursery:0,LKG:0,UKG:0};return e.forEach(e=>{e.classroom_name?.startsWith(`Nursery`)?j.Nursery++:e.classroom_name?.startsWith(`LKG`)?j.LKG++:e.classroom_name?.startsWith(`UKG`)&&j.UKG++}),(0,V.jsxs)(`div`,{className:`app-container`,children:[(0,V.jsx)(ds,{}),(0,V.jsxs)(`div`,{className:`main-content`,children:[(0,V.jsx)(us,{}),(0,V.jsxs)(`div`,{className:`mgmt-content`,children:[(0,V.jsxs)(`div`,{className:`mgmt-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h1`,{className:`mgmt-title`,children:`Student Registry`}),(0,V.jsxs)(`p`,{className:`mgmt-sub`,children:[e.length,` student`,e.length===1?``:`s`,` enrolled`]})]}),(0,V.jsxs)(`button`,{className:`mgmt-add-btn`,onClick:O,children:[(0,V.jsx)(Go,{size:16}),` Add Student`]})]}),(0,V.jsx)(`div`,{className:`mgmt-stats`,children:Object.entries(j).map(([e,t])=>{let n=ne[e];return(0,V.jsxs)(`div`,{className:`mgmt-stat-pill`,style:{borderColor:n+`40`,background:n+`08`},children:[(0,V.jsx)(G,{size:14,style:{color:n}}),(0,V.jsx)(`span`,{style:{fontWeight:600,color:`#1E293B`},children:e}),(0,V.jsxs)(`span`,{style:{color:n,fontWeight:700},children:[t,` student`,t===1?``:`s`]})]},e)})}),(0,V.jsxs)(`div`,{className:`mgmt-search-bar`,children:[(0,V.jsx)(qo,{size:15,style:{color:`#94A3B8`,flexShrink:0}}),(0,V.jsx)(`input`,{type:`text`,placeholder:`Search by name, classroom or parent...`,value:c,onChange:e=>l(e.target.value),className:`mgmt-search-input`}),c&&(0,V.jsx)(`button`,{onClick:()=>l(``),className:`mgmt-clear-btn`,children:(0,V.jsx)(os,{size:14})})]}),(0,V.jsx)(`div`,{className:`mgmt-panel`,children:o?(0,V.jsx)(`div`,{className:`mgmt-loading`,children:`Loading registry...`}):(0,V.jsx)(`div`,{className:`mgmt-table-wrap`,children:(0,V.jsxs)(`table`,{className:`mgmt-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`STUDENT`}),(0,V.jsx)(`th`,{children:`AGE`}),(0,V.jsx)(`th`,{children:`CLASSROOM`}),(0,V.jsx)(`th`,{children:`PARENT`}),(0,V.jsx)(`th`,{style:{textAlign:`right`},children:`ACTIONS`})]})}),(0,V.jsx)(`tbody`,{children:A.length>0?A.map(e=>{let t=ne[e.classroom_name?.split(` `)[0]]||`#94A3B8`;return(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{children:(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.6rem`},children:[(0,V.jsx)(`div`,{className:`mgmt-avatar`,style:{background:`#F0FDF4`,color:`#22C55E`},children:e.student_name[0]}),(0,V.jsx)(`span`,{className:`mgmt-name`,children:e.student_name})]})}),(0,V.jsxs)(`td`,{children:[e.age,` yrs`]}),(0,V.jsx)(`td`,{children:e.classroom_name?(0,V.jsx)(`span`,{className:`mgmt-class-tag`,style:{background:t+`15`,color:t},children:e.classroom_name}):(0,V.jsx)(`span`,{className:`mgmt-unassigned`,children:`Unassigned`})}),(0,V.jsx)(`td`,{children:e.parent_name?(0,V.jsx)(`span`,{style:{fontWeight:500,color:`#475569`},children:e.parent_name}):(0,V.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`0.35rem`,color:`#D97706`,fontSize:`0.8rem`,fontWeight:600},children:[(0,V.jsx)(ns,{size:13}),` Unlinked`]})}),(0,V.jsx)(`td`,{style:{textAlign:`right`},children:(0,V.jsxs)(`div`,{className:`mgmt-actions`,children:[(0,V.jsx)(`button`,{className:`mgmt-icon-btn edit`,onClick:()=>k(e),children:(0,V.jsx)(Wo,{size:14})}),(0,V.jsx)(`button`,{className:`mgmt-icon-btn delete`,onClick:()=>te(e.id),children:(0,V.jsx)(es,{size:14})})]})})]},e.id)}):(0,V.jsx)(`tr`,{children:(0,V.jsxs)(`td`,{colSpan:`5`,style:{textAlign:`center`,padding:`3rem`,color:`#94A3B8`},children:[(0,V.jsx)(is,{size:28,style:{opacity:.3,marginBottom:`0.5rem`}}),(0,V.jsx)(`br`,{}),c?`No students match your search.`:`No students enrolled yet.`]})})})]})})})]})]}),u&&(0,V.jsx)(`div`,{className:`mgmt-modal-overlay`,onClick:()=>d(!1),children:(0,V.jsxs)(`div`,{className:`mgmt-modal`,onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(`div`,{className:`mgmt-modal-header`,children:[(0,V.jsx)(`h2`,{children:f?`Edit Student`:`Register New Student`}),(0,V.jsx)(`button`,{className:`mgmt-modal-close`,onClick:()=>d(!1),children:(0,V.jsx)(os,{size:18})})]}),C&&(0,V.jsx)(`div`,{className:`mgmt-error`,children:C}),(0,V.jsxs)(`form`,{onSubmit:ee,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,V.jsxs)(`div`,{className:`mgmt-form-group`,children:[(0,V.jsx)(`label`,{children:`Student Name`}),(0,V.jsx)(`input`,{type:`text`,className:`mgmt-input`,placeholder:`e.g. Aarav Patel`,value:m,onChange:e=>h(e.target.value),required:!0})]}),(0,V.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`1rem`},children:[(0,V.jsxs)(`div`,{className:`mgmt-form-group`,children:[(0,V.jsx)(`label`,{children:`Age`}),(0,V.jsx)(`input`,{type:`number`,className:`mgmt-input`,placeholder:`e.g. 4`,value:g,onChange:e=>_(e.target.value),min:`1`,max:`10`,required:!0})]}),(0,V.jsxs)(`div`,{className:`mgmt-form-group`,children:[(0,V.jsx)(`label`,{children:`Classroom`}),(0,V.jsxs)(`select`,{className:`mgmt-input`,value:v,onChange:e=>y(e.target.value),children:[(0,V.jsx)(`option`,{value:``,children:`— Select —`}),n.map(e=>(0,V.jsx)(`option`,{value:e.classroom_name,children:e.classroom_name},e.id))]})]})]}),(0,V.jsxs)(`div`,{className:`mgmt-form-group`,children:[(0,V.jsx)(`label`,{children:`Linked Parent`}),(0,V.jsxs)(`select`,{className:`mgmt-input`,value:b,onChange:e=>x(e.target.value),children:[(0,V.jsx)(`option`,{value:``,children:`— Select Parent (Optional) —`}),i.map(e=>(0,V.jsx)(`option`,{value:e.email,children:e.name},e.user_id))]})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,gap:`0.75rem`,marginTop:`0.5rem`},children:[(0,V.jsx)(`button`,{type:`button`,className:`mgmt-cancel-btn`,onClick:()=>d(!1),children:`Cancel`}),(0,V.jsx)(`button`,{type:`submit`,className:`mgmt-submit-btn`,disabled:T,children:T?`Saving...`:f?`Save Changes`:`Register Student`})]})]})]})}),(0,V.jsx)(`style`,{children:`
        .mgmt-content { padding: 1.75rem 2rem; max-width: 1100px; width: 100%; font-family: 'Outfit', sans-serif; }
        .mgmt-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem; }
        .mgmt-title { font-size: 1.6rem; font-weight: 800; color: #0F172A; margin: 0 0 0.2rem 0; }
        .mgmt-sub { font-size: 0.875rem; color: #94A3B8; margin: 0; }
        .mgmt-add-btn { display: flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1.1rem; background: #2563EB; color: white; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600; cursor: pointer; font-family: 'Outfit', sans-serif; transition: background 0.15s; }
        .mgmt-add-btn:hover { background: #1D4ED8; }
        .mgmt-stats { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
        .mgmt-stat-pill { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.9rem; border: 1px solid; border-radius: 8px; font-size: 0.8rem; }
        .mgmt-search-bar { display: flex; align-items: center; gap: 0.5rem; background: white; border: 1px solid #E2E8F0; border-radius: 10px; padding: 0.6rem 0.9rem; margin-bottom: 1rem; max-width: 480px; }
        .mgmt-search-input { border: none; background: transparent; outline: none; font-size: 0.875rem; color: #475569; font-family: 'Outfit', sans-serif; flex: 1; }
        .mgmt-search-input::placeholder { color: #CBD5E1; }
        .mgmt-clear-btn { background: none; border: none; cursor: pointer; color: #94A3B8; display: flex; align-items: center; padding: 0; }
        .mgmt-panel { background: white; border: 1px solid #F1F5F9; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); overflow: hidden; }
        .mgmt-loading { text-align: center; padding: 3rem; color: #94A3B8; font-size: 0.875rem; }
        .mgmt-table-wrap { overflow-x: auto; }
        .mgmt-table { width: 100%; border-collapse: collapse; }
        .mgmt-table th { background: #F8FAFC; padding: 0.75rem 1.25rem; font-size: 0.68rem; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.06em; text-align: left; border-bottom: 1px solid #F1F5F9; }
        .mgmt-table td { padding: 0.85rem 1.25rem; font-size: 0.875rem; color: #475569; border-bottom: 1px solid #F8FAFC; }
        .mgmt-table tr:last-child td { border-bottom: none; }
        .mgmt-table tr:hover td { background: #FAFAFA; }
        .mgmt-avatar { width: 30px; height: 30px; border-radius: 50%; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .mgmt-name { font-weight: 600; color: #1E293B; }
        .mgmt-class-tag { padding: 0.2rem 0.65rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }
        .mgmt-unassigned { font-size: 0.8rem; color: #CBD5E1; font-style: italic; }
        .mgmt-actions { display: flex; justify-content: flex-end; gap: 0.4rem; }
        .mgmt-icon-btn { width: 30px; height: 30px; border-radius: 7px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
        .mgmt-icon-btn.edit { background: #EFF6FF; color: #3B82F6; }
        .mgmt-icon-btn.edit:hover { background: #3B82F6; color: white; }
        .mgmt-icon-btn.delete { background: #FEF2F2; color: #EF4444; }
        .mgmt-icon-btn.delete:hover { background: #EF4444; color: white; }
        .mgmt-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .mgmt-modal { background: white; border-radius: 16px; padding: 2rem; width: 100%; max-width: 480px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); animation: mgmt-in 0.2s ease; }
        @keyframes mgmt-in { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
        .mgmt-modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
        .mgmt-modal-header h2 { font-size: 1.1rem; font-weight: 700; color: #0F172A; margin: 0; }
        .mgmt-modal-close { background: #F8FAFC; border: none; border-radius: 8px; cursor: pointer; padding: 0.35rem; color: #64748B; display: flex; transition: background 0.15s; }
        .mgmt-modal-close:hover { background: #F1F5F9; }
        .mgmt-error { background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.825rem; color: #DC2626; margin-bottom: 1rem; }
        .mgmt-form-group { display: flex; flex-direction: column; gap: 0.35rem; }
        .mgmt-form-group label { font-size: 0.825rem; font-weight: 600; color: #374151; }
        .mgmt-input { padding: 0.65rem 0.9rem; border: 1.5px solid #E5E7EB; border-radius: 8px; font-size: 0.875rem; font-family: 'Outfit', sans-serif; color: #1F2937; outline: none; transition: border-color 0.15s; background: white; }
        .mgmt-input:focus { border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .mgmt-cancel-btn { flex: 1; padding: 0.65rem; background: #F8FAFC; border: 1.5px solid #E5E7EB; border-radius: 8px; font-size: 0.875rem; font-weight: 600; color: #64748B; cursor: pointer; font-family: 'Outfit', sans-serif; }
        .mgmt-cancel-btn:hover { background: #F1F5F9; }
        .mgmt-submit-btn { flex: 2; padding: 0.65rem; background: #2563EB; color: white; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600; cursor: pointer; font-family: 'Outfit', sans-serif; transition: background 0.15s; }
        .mgmt-submit-btn:hover:not(:disabled) { background: #1D4ED8; }
        .mgmt-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
      `})]})},Cs=()=>{let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)([]),[i,a]=(0,S.useState)(!0),[o,s]=(0,S.useState)(``),[c,l]=(0,S.useState)(!1),[u,d]=(0,S.useState)(null),[f,p]=(0,S.useState)(``),[m,h]=(0,S.useState)(``),[g,_]=(0,S.useState)(``),[v,y]=(0,S.useState)(``),[b,x]=(0,S.useState)(!1),C=async()=>{try{let[e,n]=await Promise.all([B.get(`/admin/teachers`),B.get(`/admin/classrooms`)]);t(e.data),r(n.data)}catch(e){console.error(e)}finally{a(!1)}};(0,S.useEffect)(()=>{C()},[]);let w=()=>{d(null),p(``),h(``),_(``),y(``),l(!0)},T=e=>{d(e.user_id),p(e.name),h(e.email),_(e.classroom_id||``),y(``),l(!0)},E=async e=>{if(e.preventDefault(),!f||!m){y(`Name and email are required.`);return}x(!0);try{let e={name:f,email:m,classroom_id:g?parseInt(g):null};u?await B.put(`/admin/teachers/${u}`,e):await B.post(`/admin/teachers`,e),l(!1),C()}catch(e){y(e.response?.data?.message||`Failed to save teacher.`)}finally{x(!1)}},D=async e=>{if(window.confirm(`Delete this teacher? Their account will be permanently removed.`))try{await B.delete(`/admin/teachers/${e}`),C()}catch{alert(`Could not delete teacher.`)}},O=e.filter(e=>e.name.toLowerCase().includes(o.toLowerCase())||e.email.toLowerCase().includes(o.toLowerCase())||e.classroom_name&&e.classroom_name.toLowerCase().includes(o.toLowerCase())),k={Nursery:`#22C55E`,LKG:`#3B82F6`,UKG:`#F59E0B`};return(0,V.jsxs)(`div`,{className:`app-container`,children:[(0,V.jsx)(ds,{}),(0,V.jsxs)(`div`,{className:`main-content`,children:[(0,V.jsx)(us,{}),(0,V.jsxs)(`div`,{className:`mgmt-content`,children:[(0,V.jsxs)(`div`,{className:`mgmt-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h1`,{className:`mgmt-title`,children:`Faculty Directory`}),(0,V.jsxs)(`p`,{className:`mgmt-sub`,children:[e.length,` teacher`,e.length===1?``:`s`,` registered`]})]}),(0,V.jsxs)(`button`,{className:`mgmt-add-btn`,onClick:w,children:[(0,V.jsx)(Go,{size:16}),` Add Teacher`]})]}),(0,V.jsx)(`div`,{className:`mgmt-stats`,children:n.map(t=>{let n=e.filter(e=>e.classroom_name===t.classroom_name).length,r=k[t.classroom_name]||`#94A3B8`;return(0,V.jsxs)(`div`,{className:`mgmt-stat-pill`,style:{borderColor:r+`40`,background:r+`08`},children:[(0,V.jsx)(G,{size:14,style:{color:r}}),(0,V.jsx)(`span`,{style:{fontWeight:600,color:`#1E293B`},children:t.classroom_name}),(0,V.jsxs)(`span`,{style:{color:r,fontWeight:700},children:[n,` teacher`,n===1?``:`s`]})]},t.id)})}),(0,V.jsxs)(`div`,{className:`mgmt-search-bar`,children:[(0,V.jsx)(qo,{size:15,style:{color:`#94A3B8`,flexShrink:0}}),(0,V.jsx)(`input`,{type:`text`,placeholder:`Search by name, email or classroom...`,value:o,onChange:e=>s(e.target.value),className:`mgmt-search-input`}),o&&(0,V.jsx)(`button`,{onClick:()=>s(``),className:`mgmt-clear-btn`,children:(0,V.jsx)(os,{size:14})})]}),(0,V.jsx)(`div`,{className:`mgmt-panel`,children:i?(0,V.jsx)(`div`,{className:`mgmt-loading`,children:`Loading faculty...`}):(0,V.jsx)(`div`,{className:`mgmt-table-wrap`,children:(0,V.jsxs)(`table`,{className:`mgmt-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`TEACHER`}),(0,V.jsx)(`th`,{children:`EMAIL`}),(0,V.jsx)(`th`,{children:`CLASSROOM`}),(0,V.jsx)(`th`,{style:{textAlign:`right`},children:`ACTIONS`})]})}),(0,V.jsx)(`tbody`,{children:O.length>0?O.map(e=>{let t=k[e.classroom_name]||`#94A3B8`;return(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{children:(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.6rem`},children:[(0,V.jsx)(`div`,{className:`mgmt-avatar`,style:{background:`#EFF6FF`,color:`#3B82F6`},children:e.name[0]}),(0,V.jsx)(`span`,{className:`mgmt-name`,children:e.name})]})}),(0,V.jsx)(`td`,{children:(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.4rem`,color:`#64748B`,fontSize:`0.875rem`},children:[(0,V.jsx)(Bo,{size:13,style:{color:`#CBD5E1`}}),` `,e.email]})}),(0,V.jsx)(`td`,{children:e.classroom_name?(0,V.jsx)(`span`,{className:`mgmt-class-tag`,style:{background:t+`15`,color:t},children:e.classroom_name}):(0,V.jsx)(`span`,{className:`mgmt-unassigned`,children:`Not assigned`})}),(0,V.jsx)(`td`,{style:{textAlign:`right`},children:(0,V.jsxs)(`div`,{className:`mgmt-actions`,children:[(0,V.jsx)(`button`,{className:`mgmt-icon-btn edit`,onClick:()=>T(e),title:`Edit`,children:(0,V.jsx)(Wo,{size:14})}),(0,V.jsx)(`button`,{className:`mgmt-icon-btn delete`,onClick:()=>D(e.user_id),title:`Delete`,children:(0,V.jsx)(es,{size:14})})]})})]},e.user_id)}):(0,V.jsx)(`tr`,{children:(0,V.jsxs)(`td`,{colSpan:`4`,style:{textAlign:`center`,padding:`3rem`,color:`#94A3B8`},children:[(0,V.jsx)(No,{size:28,style:{opacity:.3,marginBottom:`0.5rem`}}),(0,V.jsx)(`br`,{}),o?`No teachers match your search.`:`No teachers found.`]})})})]})})})]})]}),c&&(0,V.jsx)(`div`,{className:`mgmt-modal-overlay`,onClick:()=>l(!1),children:(0,V.jsxs)(`div`,{className:`mgmt-modal`,onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(`div`,{className:`mgmt-modal-header`,children:[(0,V.jsx)(`h2`,{children:u?`Edit Teacher`:`Add New Teacher`}),(0,V.jsx)(`button`,{className:`mgmt-modal-close`,onClick:()=>l(!1),children:(0,V.jsx)(os,{size:18})})]}),!u&&(0,V.jsxs)(`div`,{className:`mgmt-info-banner`,children:[(0,V.jsx)(Io,{size:14,style:{color:`#3B82F6`,flexShrink:0}}),(0,V.jsxs)(`span`,{children:[`An account will be created automatically. Default password: `,(0,V.jsx)(`strong`,{children:`teacher123`})]})]}),v&&(0,V.jsx)(`div`,{className:`mgmt-error`,children:v}),(0,V.jsxs)(`form`,{onSubmit:E,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,V.jsxs)(`div`,{className:`mgmt-form-group`,children:[(0,V.jsx)(`label`,{children:`Full Name`}),(0,V.jsx)(`input`,{type:`text`,className:`mgmt-input`,placeholder:`e.g. Ms. Priya Sharma`,value:f,onChange:e=>p(e.target.value),required:!0})]}),(0,V.jsxs)(`div`,{className:`mgmt-form-group`,children:[(0,V.jsx)(`label`,{children:`Email Address`}),(0,V.jsx)(`input`,{type:`email`,className:`mgmt-input`,placeholder:`e.g. priya@kidvista.com`,value:m,onChange:e=>h(e.target.value),required:!0})]}),(0,V.jsxs)(`div`,{className:`mgmt-form-group`,children:[(0,V.jsx)(`label`,{children:`Assign Classroom`}),(0,V.jsxs)(`select`,{className:`mgmt-input`,value:g,onChange:e=>_(e.target.value),children:[(0,V.jsx)(`option`,{value:``,children:`— Select Classroom (Optional) —`}),n.map(e=>(0,V.jsx)(`option`,{value:e.id,children:e.classroom_name},e.id))]})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,gap:`0.75rem`,marginTop:`0.5rem`},children:[(0,V.jsx)(`button`,{type:`button`,className:`mgmt-cancel-btn`,onClick:()=>l(!1),children:`Cancel`}),(0,V.jsx)(`button`,{type:`submit`,className:`mgmt-submit-btn`,disabled:b,children:b?`Saving...`:u?`Save Changes`:`Register Teacher`})]})]})]})}),(0,V.jsx)(`style`,{children:`
        .mgmt-content {
          padding: 1.75rem 2rem; max-width: 1100px; width: 100%;
          font-family: 'Outfit', sans-serif;
        }
        .mgmt-header {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;
        }
        .mgmt-title { font-size: 1.6rem; font-weight: 800; color: #0F172A; margin: 0 0 0.2rem 0; }
        .mgmt-sub { font-size: 0.875rem; color: #94A3B8; margin: 0; }
        .mgmt-add-btn {
          display: flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1.1rem;
          background: #2563EB; color: white; border: none; border-radius: 8px;
          font-size: 0.875rem; font-weight: 600; cursor: pointer; font-family: 'Outfit', sans-serif;
          transition: background 0.15s;
        }
        .mgmt-add-btn:hover { background: #1D4ED8; }
        .mgmt-stats {
          display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.25rem;
        }
        .mgmt-stat-pill {
          display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.9rem;
          border: 1px solid; border-radius: 8px; font-size: 0.8rem;
        }
        .mgmt-search-bar {
          display: flex; align-items: center; gap: 0.5rem; background: white;
          border: 1px solid #E2E8F0; border-radius: 10px; padding: 0.6rem 0.9rem;
          margin-bottom: 1rem; max-width: 480px;
        }
        .mgmt-search-input {
          border: none; background: transparent; outline: none; font-size: 0.875rem;
          color: #475569; font-family: 'Outfit', sans-serif; flex: 1;
        }
        .mgmt-search-input::placeholder { color: #CBD5E1; }
        .mgmt-clear-btn {
          background: none; border: none; cursor: pointer; color: #94A3B8;
          display: flex; align-items: center; padding: 0;
        }
        .mgmt-clear-btn:hover { color: #475569; }
        .mgmt-panel {
          background: white; border: 1px solid #F1F5F9; border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04); overflow: hidden;
        }
        .mgmt-loading { text-align: center; padding: 3rem; color: #94A3B8; font-size: 0.875rem; }
        .mgmt-table-wrap { overflow-x: auto; }
        .mgmt-table { width: 100%; border-collapse: collapse; }
        .mgmt-table th {
          background: #F8FAFC; padding: 0.75rem 1.25rem; font-size: 0.68rem; font-weight: 700;
          color: #94A3B8; text-transform: uppercase; letter-spacing: 0.06em; text-align: left;
          border-bottom: 1px solid #F1F5F9;
        }
        .mgmt-table td { padding: 0.85rem 1.25rem; font-size: 0.875rem; color: #475569; border-bottom: 1px solid #F8FAFC; }
        .mgmt-table tr:last-child td { border-bottom: none; }
        .mgmt-table tr:hover td { background: #FAFAFA; }
        .mgmt-avatar {
          width: 30px; height: 30px; border-radius: 50%; font-size: 0.8rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .mgmt-name { font-weight: 600; color: #1E293B; }
        .mgmt-class-tag {
          padding: 0.2rem 0.65rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600;
        }
        .mgmt-unassigned { font-size: 0.8rem; color: #CBD5E1; font-style: italic; }
        .mgmt-actions { display: flex; justify-content: flex-end; gap: 0.4rem; }
        .mgmt-icon-btn {
          width: 30px; height: 30px; border-radius: 7px; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; transition: all 0.15s;
        }
        .mgmt-icon-btn.edit { background: #EFF6FF; color: #3B82F6; }
        .mgmt-icon-btn.edit:hover { background: #3B82F6; color: white; }
        .mgmt-icon-btn.delete { background: #FEF2F2; color: #EF4444; }
        .mgmt-icon-btn.delete:hover { background: #EF4444; color: white; }

        /* Modal */
        .mgmt-modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px);
          z-index: 200; display: flex; align-items: center; justify-content: center; padding: 1rem;
        }
        .mgmt-modal {
          background: white; border-radius: 16px; padding: 2rem; width: 100%; max-width: 460px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15); animation: mgmt-modal-in 0.2s ease;
        }
        @keyframes mgmt-modal-in { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
        .mgmt-modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
        .mgmt-modal-header h2 { font-size: 1.1rem; font-weight: 700; color: #0F172A; margin: 0; }
        .mgmt-modal-close {
          background: #F8FAFC; border: none; border-radius: 8px; cursor: pointer;
          padding: 0.35rem; color: #64748B; display: flex; transition: background 0.15s;
        }
        .mgmt-modal-close:hover { background: #F1F5F9; }
        .mgmt-info-banner {
          display: flex; align-items: center; gap: 0.5rem; background: #EFF6FF;
          border: 1px solid #BFDBFE; border-radius: 8px; padding: 0.75rem 1rem;
          font-size: 0.825rem; color: #1D4ED8; margin-bottom: 1rem;
        }
        .mgmt-error {
          background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px;
          padding: 0.75rem 1rem; font-size: 0.825rem; color: #DC2626; margin-bottom: 1rem;
        }
        .mgmt-form-group { display: flex; flex-direction: column; gap: 0.35rem; }
        .mgmt-form-group label { font-size: 0.825rem; font-weight: 600; color: #374151; }
        .mgmt-input {
          padding: 0.65rem 0.9rem; border: 1.5px solid #E5E7EB; border-radius: 8px;
          font-size: 0.875rem; font-family: 'Outfit', sans-serif; color: #1F2937; outline: none;
          transition: border-color 0.15s; background: white;
        }
        .mgmt-input:focus { border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .mgmt-cancel-btn {
          flex: 1; padding: 0.65rem; background: #F8FAFC; border: 1.5px solid #E5E7EB;
          border-radius: 8px; font-size: 0.875rem; font-weight: 600; color: #64748B;
          cursor: pointer; font-family: 'Outfit', sans-serif; transition: background 0.15s;
        }
        .mgmt-cancel-btn:hover { background: #F1F5F9; }
        .mgmt-submit-btn {
          flex: 2; padding: 0.65rem; background: #2563EB; color: white; border: none;
          border-radius: 8px; font-size: 0.875rem; font-weight: 600; cursor: pointer;
          font-family: 'Outfit', sans-serif; transition: background 0.15s;
        }
        .mgmt-submit-btn:hover:not(:disabled) { background: #1D4ED8; }
        .mgmt-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
      `})]})},ws=()=>{let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(!0),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)(null),[u,d]=(0,S.useState)(``),[f,p]=(0,S.useState)(``),[m,h]=(0,S.useState)(``),[g,_]=(0,S.useState)(!1),v=async()=>{try{t((await B.get(`/admin/parents`)).data)}catch(e){console.error(e)}finally{r(!1)}};(0,S.useEffect)(()=>{v()},[]);let y=()=>{l(null),d(``),p(``),h(``),s(!0)},b=e=>{l(e.user_id),d(e.name),p(e.email),h(``),s(!0)},x=async e=>{if(e.preventDefault(),!u||!f){h(`Name and email are required.`);return}_(!0);try{c?await B.put(`/admin/parents/${c}`,{name:u,email:f}):await B.post(`/admin/parents`,{name:u,email:f}),s(!1),v()}catch(e){h(e.response?.data?.message||`Failed to save parent.`)}finally{_(!1)}},C=async e=>{if(window.confirm(`Delete this parent? Their children will be unlinked.`))try{await B.delete(`/admin/parents/${e}`),v()}catch{alert(`Could not delete parent.`)}},w=e.filter(e=>e.name?.toLowerCase().includes(i.toLowerCase())||e.email?.toLowerCase().includes(i.toLowerCase())||e.children?.some(e=>e.student_name?.toLowerCase().includes(i.toLowerCase()))),T={Nursery:`#22C55E`,LKG:`#3B82F6`,UKG:`#F59E0B`};return(0,V.jsxs)(`div`,{className:`app-container`,children:[(0,V.jsx)(ds,{}),(0,V.jsxs)(`div`,{className:`main-content`,children:[(0,V.jsx)(us,{}),(0,V.jsxs)(`div`,{className:`mgmt-content`,children:[(0,V.jsxs)(`div`,{className:`mgmt-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h1`,{className:`mgmt-title`,children:`Parent Directory`}),(0,V.jsxs)(`p`,{className:`mgmt-sub`,children:[e.length,` parent`,e.length===1?``:`s`,` registered`]})]}),(0,V.jsxs)(`button`,{className:`mgmt-add-btn`,onClick:y,children:[(0,V.jsx)(Go,{size:16}),` Add Parent`]})]}),(0,V.jsxs)(`div`,{className:`mgmt-stats`,children:[(0,V.jsxs)(`div`,{className:`mgmt-stat-pill`,style:{borderColor:`#3B82F640`,background:`#3B82F608`},children:[(0,V.jsx)(as,{size:14,style:{color:`#3B82F6`}}),(0,V.jsx)(`span`,{style:{fontWeight:600,color:`#1E293B`},children:`Total Parents`}),(0,V.jsx)(`span`,{style:{color:`#3B82F6`,fontWeight:700},children:e.length})]}),(0,V.jsxs)(`div`,{className:`mgmt-stat-pill`,style:{borderColor:`#22C55E40`,background:`#22C55E08`},children:[(0,V.jsx)(_o,{size:14,style:{color:`#22C55E`}}),(0,V.jsx)(`span`,{style:{fontWeight:600,color:`#1E293B`},children:`Total Children`}),(0,V.jsx)(`span`,{style:{color:`#22C55E`,fontWeight:700},children:e.reduce((e,t)=>e+(t.children?.length||0),0)})]})]}),(0,V.jsxs)(`div`,{className:`mgmt-search-bar`,children:[(0,V.jsx)(qo,{size:15,style:{color:`#94A3B8`,flexShrink:0}}),(0,V.jsx)(`input`,{type:`text`,placeholder:`Search by name, email or child...`,value:i,onChange:e=>a(e.target.value),className:`mgmt-search-input`}),i&&(0,V.jsx)(`button`,{onClick:()=>a(``),className:`mgmt-clear-btn`,children:(0,V.jsx)(os,{size:14})})]}),(0,V.jsx)(`div`,{className:`mgmt-panel`,children:n?(0,V.jsx)(`div`,{className:`mgmt-loading`,children:`Loading parents...`}):(0,V.jsx)(`div`,{className:`mgmt-table-wrap`,children:(0,V.jsxs)(`table`,{className:`mgmt-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`PARENT`}),(0,V.jsx)(`th`,{children:`EMAIL`}),(0,V.jsx)(`th`,{children:`CHILDREN`}),(0,V.jsx)(`th`,{style:{textAlign:`right`},children:`ACTIONS`})]})}),(0,V.jsx)(`tbody`,{children:w.length>0?w.map(e=>(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{children:(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.6rem`},children:[(0,V.jsx)(`div`,{className:`mgmt-avatar`,style:{background:`#F0FDF4`,color:`#22C55E`},children:e.name[0]}),(0,V.jsx)(`span`,{className:`mgmt-name`,children:e.name})]})}),(0,V.jsx)(`td`,{children:(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.4rem`,color:`#64748B`,fontSize:`0.875rem`},children:[(0,V.jsx)(Bo,{size:13,style:{color:`#CBD5E1`}}),` `,e.email]})}),(0,V.jsx)(`td`,{children:(0,V.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`0.3rem`},children:e.children&&e.children.length>0?e.children.map((e,t)=>{let n=T[e.classroom_name?.split(` `)[0]]||`#94A3B8`;return(0,V.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`0.25rem`,padding:`0.15rem 0.55rem`,background:n+`12`,color:n,borderRadius:`20px`,fontSize:`0.75rem`,fontWeight:600},children:[(0,V.jsx)(_o,{size:11}),` `,e.student_name]},t)}):(0,V.jsx)(`span`,{style:{color:`#CBD5E1`,fontSize:`0.8rem`,fontStyle:`italic`},children:`No children linked`})})}),(0,V.jsx)(`td`,{style:{textAlign:`right`},children:(0,V.jsxs)(`div`,{className:`mgmt-actions`,children:[(0,V.jsx)(`button`,{className:`mgmt-icon-btn edit`,onClick:()=>b(e),children:(0,V.jsx)(Wo,{size:14})}),(0,V.jsx)(`button`,{className:`mgmt-icon-btn delete`,onClick:()=>C(e.user_id),children:(0,V.jsx)(es,{size:14})})]})})]},e.user_id)):(0,V.jsx)(`tr`,{children:(0,V.jsxs)(`td`,{colSpan:`4`,style:{textAlign:`center`,padding:`3rem`,color:`#94A3B8`},children:[(0,V.jsx)(as,{size:28,style:{opacity:.3,marginBottom:`0.5rem`}}),(0,V.jsx)(`br`,{}),i?`No parents match your search.`:`No parents registered yet.`]})})})]})})})]})]}),o&&(0,V.jsx)(`div`,{className:`mgmt-modal-overlay`,onClick:()=>s(!1),children:(0,V.jsxs)(`div`,{className:`mgmt-modal`,onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(`div`,{className:`mgmt-modal-header`,children:[(0,V.jsx)(`h2`,{children:c?`Edit Parent`:`Add New Parent`}),(0,V.jsx)(`button`,{className:`mgmt-modal-close`,onClick:()=>s(!1),children:(0,V.jsx)(os,{size:18})})]}),!c&&(0,V.jsxs)(`div`,{className:`mgmt-info-banner`,children:[(0,V.jsx)(Io,{size:14,style:{color:`#3B82F6`,flexShrink:0}}),(0,V.jsxs)(`span`,{children:[`Account created automatically. Default password: `,(0,V.jsx)(`strong`,{children:`parent123`}),`. Link children on the Students page.`]})]}),m&&(0,V.jsx)(`div`,{className:`mgmt-error`,children:m}),(0,V.jsxs)(`form`,{onSubmit:x,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,V.jsxs)(`div`,{className:`mgmt-form-group`,children:[(0,V.jsx)(`label`,{children:`Parent Name`}),(0,V.jsx)(`input`,{type:`text`,className:`mgmt-input`,placeholder:`e.g. Rahul Patel`,value:u,onChange:e=>d(e.target.value),required:!0})]}),(0,V.jsxs)(`div`,{className:`mgmt-form-group`,children:[(0,V.jsx)(`label`,{children:`Email Address`}),(0,V.jsx)(`input`,{type:`email`,className:`mgmt-input`,placeholder:`e.g. rahul@patel.com`,value:f,onChange:e=>p(e.target.value),required:!0})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,gap:`0.75rem`,marginTop:`0.5rem`},children:[(0,V.jsx)(`button`,{type:`button`,className:`mgmt-cancel-btn`,onClick:()=>s(!1),children:`Cancel`}),(0,V.jsx)(`button`,{type:`submit`,className:`mgmt-submit-btn`,disabled:g,children:g?`Saving...`:c?`Save Changes`:`Create Account`})]})]})]})}),(0,V.jsx)(`style`,{children:`
        .mgmt-content { padding: 1.75rem 2rem; max-width: 1100px; width: 100%; font-family: 'Outfit', sans-serif; }
        .mgmt-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem; }
        .mgmt-title { font-size: 1.6rem; font-weight: 800; color: #0F172A; margin: 0 0 0.2rem 0; }
        .mgmt-sub { font-size: 0.875rem; color: #94A3B8; margin: 0; }
        .mgmt-add-btn { display: flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1.1rem; background: #2563EB; color: white; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600; cursor: pointer; font-family: 'Outfit', sans-serif; transition: background 0.15s; }
        .mgmt-add-btn:hover { background: #1D4ED8; }
        .mgmt-stats { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
        .mgmt-stat-pill { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.9rem; border: 1px solid; border-radius: 8px; font-size: 0.8rem; }
        .mgmt-search-bar { display: flex; align-items: center; gap: 0.5rem; background: white; border: 1px solid #E2E8F0; border-radius: 10px; padding: 0.6rem 0.9rem; margin-bottom: 1rem; max-width: 480px; }
        .mgmt-search-input { border: none; background: transparent; outline: none; font-size: 0.875rem; color: #475569; font-family: 'Outfit', sans-serif; flex: 1; }
        .mgmt-search-input::placeholder { color: #CBD5E1; }
        .mgmt-clear-btn { background: none; border: none; cursor: pointer; color: #94A3B8; display: flex; align-items: center; padding: 0; }
        .mgmt-panel { background: white; border: 1px solid #F1F5F9; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); overflow: hidden; }
        .mgmt-loading { text-align: center; padding: 3rem; color: #94A3B8; }
        .mgmt-table-wrap { overflow-x: auto; }
        .mgmt-table { width: 100%; border-collapse: collapse; }
        .mgmt-table th { background: #F8FAFC; padding: 0.75rem 1.25rem; font-size: 0.68rem; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.06em; text-align: left; border-bottom: 1px solid #F1F5F9; }
        .mgmt-table td { padding: 0.85rem 1.25rem; font-size: 0.875rem; color: #475569; border-bottom: 1px solid #F8FAFC; vertical-align: middle; }
        .mgmt-table tr:last-child td { border-bottom: none; }
        .mgmt-table tr:hover td { background: #FAFAFA; }
        .mgmt-avatar { width: 30px; height: 30px; border-radius: 50%; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .mgmt-name { font-weight: 600; color: #1E293B; }
        .mgmt-actions { display: flex; justify-content: flex-end; gap: 0.4rem; }
        .mgmt-icon-btn { width: 30px; height: 30px; border-radius: 7px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
        .mgmt-icon-btn.edit { background: #EFF6FF; color: #3B82F6; }
        .mgmt-icon-btn.edit:hover { background: #3B82F6; color: white; }
        .mgmt-icon-btn.delete { background: #FEF2F2; color: #EF4444; }
        .mgmt-icon-btn.delete:hover { background: #EF4444; color: white; }
        .mgmt-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .mgmt-modal { background: white; border-radius: 16px; padding: 2rem; width: 100%; max-width: 460px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); animation: mgmt-in 0.2s ease; }
        @keyframes mgmt-in { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
        .mgmt-modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
        .mgmt-modal-header h2 { font-size: 1.1rem; font-weight: 700; color: #0F172A; margin: 0; }
        .mgmt-modal-close { background: #F8FAFC; border: none; border-radius: 8px; cursor: pointer; padding: 0.35rem; color: #64748B; display: flex; }
        .mgmt-modal-close:hover { background: #F1F5F9; }
        .mgmt-info-banner { display: flex; align-items: center; gap: 0.5rem; background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.825rem; color: #1D4ED8; margin-bottom: 1rem; }
        .mgmt-error { background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.825rem; color: #DC2626; margin-bottom: 1rem; }
        .mgmt-form-group { display: flex; flex-direction: column; gap: 0.35rem; }
        .mgmt-form-group label { font-size: 0.825rem; font-weight: 600; color: #374151; }
        .mgmt-input { padding: 0.65rem 0.9rem; border: 1.5px solid #E5E7EB; border-radius: 8px; font-size: 0.875rem; font-family: 'Outfit', sans-serif; color: #1F2937; outline: none; transition: border-color 0.15s; }
        .mgmt-input:focus { border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .mgmt-cancel-btn { flex: 1; padding: 0.65rem; background: #F8FAFC; border: 1.5px solid #E5E7EB; border-radius: 8px; font-size: 0.875rem; font-weight: 600; color: #64748B; cursor: pointer; font-family: 'Outfit', sans-serif; }
        .mgmt-submit-btn { flex: 2; padding: 0.65rem; background: #2563EB; color: white; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600; cursor: pointer; font-family: 'Outfit', sans-serif; transition: background 0.15s; }
        .mgmt-submit-btn:hover:not(:disabled) { background: #1D4ED8; }
        .mgmt-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
      `})]})},Ts=()=>{let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(!0),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(``),c=async()=>{try{t((await B.get(`/admin/photos/pending`)).data)}catch{a(`Could not retrieve pending approval list.`)}finally{r(!1)}};(0,S.useEffect)(()=>{c()},[]);let l=async(e,n)=>{try{a(``),s(``),await B.put(`/admin/photos/${e}/status`,{status:n}),s(`Photo was successfully ${n===`approved`?`approved`:`rejected`}.`),t(t=>t.filter(t=>t.id!==e)),setTimeout(()=>s(``),3e3)}catch{a(`Error updating photo status. Please try again.`)}};return(0,V.jsxs)(`div`,{className:`app-container`,children:[(0,V.jsx)(ds,{}),(0,V.jsxs)(`div`,{className:`main-content`,children:[(0,V.jsx)(us,{}),(0,V.jsxs)(`div`,{className:`pa-content`,children:[(0,V.jsxs)(`div`,{className:`pa-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h1`,{className:`pa-title`,children:`Photo Moderation`}),(0,V.jsx)(`p`,{className:`pa-sub`,children:`Review and approve teacher-uploaded activity photos`})]}),(0,V.jsxs)(`div`,{className:`pa-badge`,children:[(0,V.jsx)(Fo,{size:14}),e.length,` pending review`]})]}),o&&(0,V.jsxs)(`div`,{className:`pa-success`,children:[(0,V.jsx)(wo,{size:14}),` `,o]}),i&&(0,V.jsx)(`div`,{className:`pa-error`,children:i}),n?(0,V.jsx)(`div`,{className:`pa-loading`,children:`Loading moderation queue...`}):e.length===0?(0,V.jsxs)(`div`,{className:`pa-empty`,children:[(0,V.jsx)(`div`,{style:{width:56,height:56,borderRadius:`50%`,background:`#F0FDF4`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginBottom:`0.75rem`},children:(0,V.jsx)(wo,{size:28,style:{color:`#22C55E`}})}),(0,V.jsx)(`h3`,{children:`Queue is clear!`}),(0,V.jsx)(`p`,{children:`All photos have been reviewed. New uploads from teachers will appear here.`})]}):(0,V.jsx)(`div`,{className:`pa-queue`,children:e.map(e=>{let t=e.image_url.startsWith(`http`)?e.image_url:`${no}${e.image_url}`;return(0,V.jsxs)(`div`,{className:`pa-card`,children:[(0,V.jsx)(`div`,{className:`pa-img-wrap`,children:e.image_url===`/uploads/sample-painting.jpg`?(0,V.jsxs)(`div`,{className:`pa-img-placeholder`,children:[(0,V.jsx)(`span`,{style:{fontSize:`2.5rem`},children:`🎨`}),(0,V.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`#94A3B8`},children:`Demo Activity`})]}):(0,V.jsx)(`img`,{src:t,alt:e.activity_title,className:`pa-img`,onError:e=>{e.target.onerror=null,e.target.style.display=`none`,e.target.parentNode.innerHTML=`<div class="pa-img-placeholder"><span style="font-size:2.5rem">🖼️</span><span style="font-size:0.75rem;color:#94A3B8">Image unavailable</span></div>`}})}),(0,V.jsxs)(`div`,{className:`pa-details`,children:[(0,V.jsxs)(`div`,{className:`pa-meta-row`,children:[(0,V.jsx)(`span`,{className:`pa-cat-pill`,children:e.activity_category}),(0,V.jsxs)(`span`,{className:`pa-date`,children:[(0,V.jsx)(yo,{size:11}),new Date(e.activity_date).toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`,year:`numeric`})]})]}),(0,V.jsx)(`h3`,{className:`pa-card-title`,children:e.activity_title}),(0,V.jsxs)(`div`,{className:`pa-teacher-meta`,children:[(0,V.jsx)(is,{size:12}),`Uploaded by `,(0,V.jsx)(`strong`,{children:e.teacher_name})]}),e.ai_caption&&(0,V.jsxs)(`div`,{className:`pa-caption`,children:[(0,V.jsx)(Zo,{size:13,style:{color:`#3B82F6`,flexShrink:0,marginTop:`1px`}}),(0,V.jsxs)(`span`,{children:[`"`,e.ai_caption,`"`]})]}),(0,V.jsxs)(`div`,{className:`pa-tags-section`,children:[(0,V.jsxs)(`span`,{className:`pa-tags-label`,children:[(0,V.jsx)($o,{size:11}),` Tagged Students`]}),(0,V.jsx)(`div`,{className:`pa-tags-list`,children:e.tags&&e.tags.length>0?e.tags.map((e,t)=>(0,V.jsxs)(`span`,{className:`pa-tag`,children:[`👦 `,e.student_name]},t)):(0,V.jsx)(`span`,{className:`pa-no-tags`,children:`⚠ No students tagged`})})]}),(0,V.jsxs)(`div`,{className:`pa-actions`,children:[(0,V.jsxs)(`button`,{className:`pa-btn reject`,onClick:()=>l(e.id,`rejected`),children:[(0,V.jsx)(os,{size:15}),` Reject`]}),(0,V.jsxs)(`button`,{className:`pa-btn approve`,onClick:()=>l(e.id,`approved`),disabled:!e.tags||e.tags.length===0,children:[(0,V.jsx)(So,{size:15}),` Approve & Publish`]})]})]})]},e.id)})})]})]}),(0,V.jsx)(`style`,{children:`
        .pa-content { padding: 1.75rem 2rem; max-width: 1100px; width: 100%; font-family: 'Outfit', sans-serif; }

        .pa-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem; }
        .pa-title { font-size: 1.6rem; font-weight: 800; color: #0F172A; margin: 0 0 0.2rem 0; }
        .pa-sub { font-size: 0.875rem; color: #94A3B8; margin: 0; }
        .pa-badge {
          display: flex; align-items: center; gap: 0.4rem;
          background: #EFF6FF; color: #3B82F6; font-weight: 600; font-size: 0.8rem;
          padding: 0.45rem 0.9rem; border-radius: 20px;
        }

        .pa-success {
          display: flex; align-items: center; gap: 0.4rem;
          background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 10px;
          padding: 0.75rem 1rem; font-size: 0.85rem; color: #15803D; font-weight: 600;
          margin-bottom: 1.25rem;
        }
        .pa-error {
          background: #FEF2F2; border: 1px solid #FECACA; border-radius: 10px;
          padding: 0.75rem 1rem; font-size: 0.85rem; color: #DC2626;
          margin-bottom: 1.25rem;
        }

        .pa-loading { text-align: center; padding: 3rem; color: #94A3B8; }
        .pa-empty {
          text-align: center; padding: 4rem 2rem; display: flex; flex-direction: column;
          align-items: center; background: white; border: 1px solid #F1F5F9; border-radius: 14px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .pa-empty h3 { font-size: 1.15rem; font-weight: 700; color: #1E293B; margin: 0 0 0.35rem 0; }
        .pa-empty p { font-size: 0.875rem; color: #94A3B8; margin: 0; max-width: 400px; }

        .pa-queue { display: flex; flex-direction: column; gap: 1.25rem; }

        .pa-card {
          display: grid; grid-template-columns: 300px 1fr; gap: 1.5rem;
          background: white; border: 1px solid #F1F5F9; border-radius: 14px;
          padding: 1.25rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          transition: box-shadow 0.2s;
        }
        .pa-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.07); }
        @media (max-width: 800px) { .pa-card { grid-template-columns: 1fr; } }

        .pa-img-wrap {
          border-radius: 10px; overflow: hidden; background: #F8FAFC;
          border: 1px solid #F1F5F9; min-height: 200px;
        }
        .pa-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pa-img-placeholder {
          width: 100%; height: 100%; min-height: 200px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 0.25rem; background: linear-gradient(135deg, #F8FAFC, #EFF6FF);
        }

        .pa-details { display: flex; flex-direction: column; }
        .pa-meta-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
        .pa-cat-pill {
          background: #EFF6FF; color: #3B82F6; font-size: 0.72rem; font-weight: 600;
          padding: 0.2rem 0.55rem; border-radius: 6px; text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .pa-date { display: flex; align-items: center; gap: 0.3rem; font-size: 0.75rem; color: #94A3B8; font-weight: 500; }
        .pa-card-title { font-size: 1.1rem; font-weight: 700; color: #1E293B; margin: 0 0 0.35rem 0; }
        .pa-teacher-meta {
          display: flex; align-items: center; gap: 0.35rem; font-size: 0.8rem; color: #64748B;
          margin-bottom: 0.75rem;
        }
        .pa-teacher-meta strong { color: #475569; }

        .pa-caption {
          display: flex; align-items: flex-start; gap: 0.4rem;
          background: #F8FAFC; border-left: 3px solid #3B82F6; border-radius: 4px;
          padding: 0.65rem 0.85rem; font-size: 0.825rem; font-style: italic; color: #475569;
          margin-bottom: 1rem; line-height: 1.45;
        }

        .pa-tags-section { margin-top: auto; margin-bottom: 1rem; }
        .pa-tags-label {
          display: flex; align-items: center; gap: 0.3rem;
          font-size: 0.75rem; font-weight: 700; color: #1E293B;
          margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.04em;
        }
        .pa-tags-list { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .pa-tag {
          display: inline-flex; align-items: center; gap: 0.2rem;
          background: #F0FDF4; color: #15803D; font-size: 0.75rem; font-weight: 600;
          padding: 0.2rem 0.55rem; border-radius: 6px;
        }
        .pa-no-tags { font-size: 0.8rem; color: #D97706; font-weight: 600; }

        .pa-actions { display: flex; gap: 0.75rem; }
        .pa-btn {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.35rem;
          padding: 0.6rem 1rem; border: none; border-radius: 8px;
          font-size: 0.85rem; font-weight: 600; cursor: pointer;
          font-family: 'Outfit', sans-serif; transition: all 0.15s;
        }
        .pa-btn.reject { background: #F8FAFC; color: #64748B; border: 1.5px solid #E2E8F0; }
        .pa-btn.reject:hover { border-color: #EF4444; color: #EF4444; background: #FEF2F2; }
        .pa-btn.approve { background: #22C55E; color: white; box-shadow: 0 2px 8px rgba(34,197,94,0.25); }
        .pa-btn.approve:hover:not(:disabled) { background: #16A34A; transform: translateY(-1px); }
        .pa-btn.approve:disabled { background: #CBD5E1; color: #94A3B8; cursor: not-allowed; box-shadow: none; }
      `})]})},Es=()=>{let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(!0),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(``),[c,l]=(0,S.useState)(``),[u,d]=(0,S.useState)(``),[f,p]=(0,S.useState)(!1),m=async()=>{try{t((await B.get(`/admin/announcements`)).data)}catch(e){console.error(e)}finally{r(!1)}};(0,S.useEffect)(()=>{m()},[]);let h=async e=>{if(e.preventDefault(),!i||!o){l(`Please fill in both title and message.`);return}l(``),d(``),p(!0);try{await B.post(`/admin/announcements`,{title:i,message:o}),d(`Announcement published successfully!`),a(``),s(``),m(),setTimeout(()=>d(``),4e3)}catch{l(`Failed to publish announcement.`)}finally{p(!1)}},g=async e=>{if(window.confirm(`Delete this announcement?`))try{await B.delete(`/admin/announcements/${e}`),m()}catch{alert(`Could not delete.`)}};return(0,V.jsxs)(`div`,{className:`app-container`,children:[(0,V.jsx)(ds,{}),(0,V.jsxs)(`div`,{className:`main-content`,children:[(0,V.jsx)(us,{}),(0,V.jsxs)(`div`,{className:`ann-content`,children:[(0,V.jsx)(`div`,{className:`ann-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h1`,{className:`ann-title`,children:`School Bulletin Board`}),(0,V.jsx)(`p`,{className:`ann-sub`,children:`Broadcast notices directly to all parents`})]})}),(0,V.jsxs)(`div`,{className:`ann-layout`,children:[(0,V.jsxs)(`div`,{className:`ann-compose-panel`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,marginBottom:`0.25rem`},children:[(0,V.jsx)(Vo,{size:18,style:{color:`#3B82F6`}}),(0,V.jsx)(`h3`,{className:`ann-panel-title`,children:`Post Announcement`})]}),(0,V.jsx)(`p`,{style:{fontSize:`0.8rem`,color:`#94A3B8`,marginBottom:`1.25rem`,marginTop:0},children:`Publish directly to parents' dashboards`}),c&&(0,V.jsx)(`div`,{className:`ann-error`,children:c}),u&&(0,V.jsxs)(`div`,{className:`ann-success`,children:[(0,V.jsx)(wo,{size:14}),` `,u]}),(0,V.jsxs)(`form`,{onSubmit:h,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,V.jsxs)(`div`,{className:`ann-form-group`,children:[(0,V.jsx)(`label`,{children:`Notice Title`}),(0,V.jsx)(`input`,{type:`text`,className:`ann-input`,placeholder:`e.g. Annual Sports Day 2026`,value:i,onChange:e=>a(e.target.value),required:!0})]}),(0,V.jsxs)(`div`,{className:`ann-form-group`,children:[(0,V.jsx)(`label`,{children:`Message`}),(0,V.jsx)(`textarea`,{className:`ann-input ann-textarea`,placeholder:`Write the full announcement here...`,value:o,onChange:e=>s(e.target.value),rows:5,required:!0})]}),(0,V.jsxs)(`button`,{type:`submit`,className:`ann-publish-btn`,disabled:f,children:[(0,V.jsx)(Jo,{size:14}),` `,f?`Publishing...`:`Publish Notice`]})]})]}),(0,V.jsxs)(`div`,{className:`ann-feed-panel`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`1.25rem`},children:[(0,V.jsx)(`h3`,{className:`ann-panel-title`,children:`Published Bulletins`}),(0,V.jsxs)(`span`,{style:{background:`#F1F5F9`,color:`#475569`,borderRadius:`6px`,padding:`0.2rem 0.6rem`,fontSize:`0.75rem`,fontWeight:600},children:[e.length,` notice`,e.length===1?``:`s`]})]}),n?(0,V.jsx)(`div`,{className:`ann-loading`,children:`Loading bulletins...`}):e.length===0?(0,V.jsxs)(`div`,{className:`ann-empty`,children:[(0,V.jsx)(Vo,{size:32,style:{opacity:.2,marginBottom:`0.5rem`}}),(0,V.jsx)(`p`,{children:`No announcements posted yet.`})]}):(0,V.jsx)(`div`,{className:`ann-feed`,children:e.map(e=>(0,V.jsxs)(`div`,{className:`ann-card`,children:[(0,V.jsxs)(`div`,{className:`ann-card-header`,children:[(0,V.jsxs)(`span`,{className:`ann-date`,children:[(0,V.jsx)(yo,{size:11}),new Date(e.created_at).toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`,year:`numeric`})]}),(0,V.jsx)(`button`,{className:`ann-delete-btn`,onClick:()=>g(e.id),title:`Delete`,children:(0,V.jsx)(es,{size:14})})]}),(0,V.jsx)(`h4`,{className:`ann-card-title`,children:e.title}),(0,V.jsx)(`p`,{className:`ann-card-msg`,children:e.message})]},e.id))})]})]})]})]}),(0,V.jsx)(`style`,{children:`
        .ann-content { padding: 1.75rem 2rem; font-family: 'Outfit', sans-serif; }
        .ann-header { margin-bottom: 1.5rem; }
        .ann-title { font-size: 1.6rem; font-weight: 800; color: #0F172A; margin: 0 0 0.2rem 0; }
        .ann-sub { font-size: 0.875rem; color: #94A3B8; margin: 0; }

        .ann-layout {
          display: grid; grid-template-columns: 360px 1fr; gap: 1.5rem; align-items: flex-start;
        }
        @media (max-width: 900px) { .ann-layout { grid-template-columns: 1fr; } }

        .ann-compose-panel {
          background: white; border: 1px solid #F1F5F9; border-radius: 14px;
          padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04); position: sticky; top: 80px;
        }
        .ann-feed-panel {
          background: white; border: 1px solid #F1F5F9; border-radius: 14px;
          padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04); min-height: 300px;
        }
        .ann-panel-title { font-size: 1rem; font-weight: 700; color: #1E293B; margin: 0; }

        .ann-error { background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 0.7rem 0.9rem; font-size: 0.825rem; color: #DC2626; margin-bottom: 0.75rem; }
        .ann-success { display: flex; align-items: center; gap: 0.4rem; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 0.7rem 0.9rem; font-size: 0.825rem; color: #15803D; font-weight: 600; margin-bottom: 0.75rem; }

        .ann-form-group { display: flex; flex-direction: column; gap: 0.35rem; }
        .ann-form-group label { font-size: 0.825rem; font-weight: 600; color: #374151; }
        .ann-input {
          padding: 0.65rem 0.9rem; border: 1.5px solid #E5E7EB; border-radius: 8px;
          font-size: 0.875rem; font-family: 'Outfit', sans-serif; color: #1F2937;
          outline: none; transition: border-color 0.15s; width: 100%; box-sizing: border-box;
        }
        .ann-input:focus { border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .ann-textarea { resize: vertical; min-height: 100px; }
        .ann-publish-btn {
          display: flex; align-items: center; justify-content: center; gap: 0.4rem;
          padding: 0.7rem; background: #2563EB; color: white; border: none; border-radius: 8px;
          font-size: 0.875rem; font-weight: 600; cursor: pointer; font-family: 'Outfit', sans-serif;
          transition: background 0.15s;
        }
        .ann-publish-btn:hover:not(:disabled) { background: #1D4ED8; }
        .ann-publish-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .ann-loading { text-align: center; padding: 2rem; color: #94A3B8; }
        .ann-empty { text-align: center; padding: 3rem; color: #94A3B8; display: flex; flex-direction: column; align-items: center; font-size: 0.875rem; }

        .ann-feed { display: flex; flex-direction: column; gap: 1rem; }
        .ann-card {
          border: 1px solid #F1F5F9; border-radius: 10px; padding: 1.1rem 1.25rem;
          transition: box-shadow 0.15s, border-color 0.15s;
        }
        .ann-card:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.06); border-color: #E2E8F0; }
        .ann-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
        .ann-date { display: flex; align-items: center; gap: 0.35rem; font-size: 0.75rem; color: #94A3B8; font-weight: 500; }
        .ann-delete-btn {
          background: transparent; border: none; cursor: pointer; color: #CBD5E1;
          padding: 0.25rem; border-radius: 6px; display: flex; transition: all 0.15s;
        }
        .ann-delete-btn:hover { background: #FEF2F2; color: #EF4444; }
        .ann-card-title { font-size: 0.95rem; font-weight: 700; color: #1E293B; margin: 0 0 0.4rem 0; }
        .ann-card-msg { font-size: 0.85rem; color: #475569; line-height: 1.55; margin: 0; }
      `})]})},Ds=()=>{let{user:e}=(0,S.useContext)(io),t=ct(),n=at(),r=(()=>{let e=n.pathname;return e.includes(`/upload`)?`upload`:e.includes(`/tagging`)?`tagging`:e.includes(`/activities`)?`activities`:e.includes(`/attendance`)?`attendance`:e.includes(`/notifications`)?`notifications`:`overview`})(),[i,a]=(0,S.useState)({classroom_name:``,todayActivities:4,totalUploads:18,approvedUploads:6,pendingUploads:12}),[o,s]=(0,S.useState)([]),[c,l]=(0,S.useState)([]),[u,d]=(0,S.useState)(`Nursery`),[f,p]=(0,S.useState)(!0),[m,h]=(0,S.useState)(``),[g,_]=(0,S.useState)(`Little hands, big imaginations — today the Nursery class explored watercolors and discovered the magic of color mixing.`),[v,y]=(0,S.useState)([]),[b,x]=(0,S.useState)(``),[C,w]=(0,S.useState)(``),[T,E]=(0,S.useState)(``),[D,O]=(0,S.useState)(!1),[k,ee]=(0,S.useState)(``),te=(0,S.useRef)(null),[A,ne]=(0,S.useState)(null),[j,re]=(0,S.useState)([]),[M,N]=(0,S.useState)(``),[ie,ae]=(0,S.useState)([{id:1,title:`Art & Craft`,time:`10:00 - 11:00 AM`,status:`Done`},{id:2,title:`Story Session`,time:`10:00 - 11:00 AM`,status:`Done`},{id:3,title:`Lunch Break`,time:`12:00 - 01:00 PM`,status:`Upcoming`},{id:4,title:`Outdoor Play`,time:`03:00 - 04:00 PM`,status:`Upcoming`}]),[oe,se]=(0,S.useState)(!1),[ce,P]=(0,S.useState)(``),[le,ue]=(0,S.useState)(`10:00 - 11:00 AM`),[de,fe]=(0,S.useState)(`Upcoming`),[pe,me]=(0,S.useState)(new Date().toISOString().split(`T`)[0]),[he,ge]=(0,S.useState)({}),[_e,ve]=(0,S.useState)({}),[ye,be]=(0,S.useState)(``),[xe,Se]=(0,S.useState)([{id:1,parentName:`Rajesh Sharma`,message:`Rajesh Sharma sent a thank you note: 'Thank you for the update!'`,time:`10m ago`},{id:2,parentName:`Neha Verma`,message:`Neha Verma replied: 'Diya loved the painting session today.'`,time:`2h ago`}]),Ce=async()=>{try{let[e,t,n]=await Promise.all([B.get(`/teacher/stats`),B.get(`/teacher/students`),B.get(`/teacher/history`)]);if(e.data&&a({...e.data,classroom_name:e.data.classroom_name||`Nursery`,totalUploads:Math.max(e.data.totalUploads,18),pendingUploads:Math.max(e.data.pendingUploads,12),todayActivities:e.data.todayActivities||4}),t.data&&t.data.students){s(t.data.students),d(t.data.classroomName||`Nursery`);let e={},n={};t.data.students.forEach((t,r)=>{e[t.id]=`present`,n[t.id]=`09:0${r}`}),ge(e),ve(n)}if(n.data&&(l(n.data),n.data.length>0)){let e=n.data[0];ne(e),re(e.tags?e.tags.map(e=>e.student_id):[])}}catch(e){console.error(`fetchData error:`,e),h(`Could not retrieve teacher workspace details.`)}finally{p(!1)}};(0,S.useEffect)(()=>{Ce()},[]),(0,S.useEffect)(()=>{A&&re(A.tags?A.tags.map(e=>e.student_id):[])},[A]);let we=()=>{E(g),t(`/teacher/upload`)},Te=()=>{te.current.click()},Ee=async e=>{let t=Array.from(e.target.files);if(t.length===0)return;O(!0);let n=new FormData;t.forEach(e=>{n.append(`photos`,e)});try{let e=await B.post(`/teacher/photos/upload`,n,{headers:{"Content-Type":`multipart/form-data`}});e.data&&e.data.urls&&y(t=>[...t,...e.data.urls])}catch(e){console.error(e),h(`Failed to upload files.`)}finally{O(!1)}},De=e=>{y(t=>t.filter((t,n)=>n!==e))},Oe=async e=>{if(e.preventDefault(),v.length===0){h(`Please choose at least one photo to submit.`);return}if(!C){h(`Please provide an activity title.`);return}O(!0),h(``),ee(``);try{let e=(await B.post(`/teacher/activities`,{title:C,description:T||`Classroom activity log.`,category:`Learning Activity`,activity_date:new Date().toISOString().split(`T`)[0],classroom_id:u,ai_summary:T})).data.activity.id,n=o.map(e=>e.id),r=v.map(e=>({image_url:e,ai_caption:T||`Children participating in activities.`,student_ids:n}));await B.post(`/teacher/photos/submit`,{activity_id:e,photos:r}),ee(`Activity and photos successfully submitted for approval.`),y([]),x(``),w(``),E(``),Ce(),setTimeout(()=>{ee(``),t(`/teacher`)},2e3)}catch(e){console.error(e),h(`Error submitting photo logs.`)}finally{O(!1)}},ke=e=>{re(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},Ae=async()=>{if(A){N(``);try{await B.post(`/teacher/photos/${A.id}/tags`,{student_ids:j}),N(`Tags updated (${j.length} student(s)).`),l(e=>e.map(e=>{if(e.id===A.id){let t=o.filter(e=>j.includes(e.id)).map(e=>({student_id:e.id,student_name:e.student_name}));return{...e,tags:t}}return e})),setTimeout(()=>N(``),2500)}catch(e){console.error(e),h(`Failed to save tags.`)}}},je=()=>{if(!ce)return;let e={id:ie.length+1,title:ce,time:le,status:de};ae(t=>[...t,e]),P(``),se(!1)},Me=async(e,t)=>{ge(n=>({...n,[e]:t}));try{await B.post(`/teacher/attendance`,{date:pe,attendanceList:[{studentId:e,status:t}]}),be(`Attendance updated.`),setTimeout(()=>be(``),1500)}catch(e){console.error(e)}},Ne=(()=>{let e={};return c.forEach(t=>{let n=t.activity_id;e[n]||(e[n]={activity_id:n,title:t.activity_title,date:t.activity_date,category:t.activity_category,status:t.status,photos:[],taggedCount:0}),e[n].photos.push(t.image_url),t.tags&&(e[n].taggedCount+=t.tags.length),t.status===`pending`&&(e[n].status=`pending`)}),Object.values(e)})(),Pe=e?.name?e.name.split(` `).map(e=>e[0]).join(``).substring(0,2).toUpperCase():`AM`;return(0,V.jsxs)(`div`,{className:`app-container`,children:[(0,V.jsx)(ds,{}),(0,V.jsxs)(`div`,{className:`main-content`,children:[(0,V.jsxs)(`header`,{className:`parent-portal-header`,children:[(0,V.jsxs)(`div`,{className:`header-search-box`,children:[(0,V.jsx)(`span`,{className:`search-icon`,children:`🔍`}),(0,V.jsx)(`input`,{type:`text`,placeholder:`Search students, photos, activities...`,className:`search-input`})]}),(0,V.jsxs)(`div`,{className:`header-right-actions`,children:[(0,V.jsx)(`div`,{className:`parent-portal-pill`,children:`Teacher Portal`}),(0,V.jsxs)(`div`,{className:`bell-notification-icon`,onClick:()=>t(`/teacher/notifications`),children:[(0,V.jsx)(vo,{size:20,color:`#475569`}),(0,V.jsx)(`span`,{className:`bell-red-dot`})]}),(0,V.jsxs)(`div`,{className:`parent-profile-widget`,children:[(0,V.jsx)(`div`,{className:`parent-avatar-circle`,style:{backgroundColor:`#EEF2F6`,color:`#4F9CF9`},children:Pe}),(0,V.jsxs)(`div`,{className:`parent-profile-info`,children:[(0,V.jsx)(`span`,{className:`profile-name-span`,children:e?.name||`Ms. Priya Sharma`}),(0,V.jsxs)(`span`,{className:`profile-relation-span`,children:[u,` teacher`]})]})]})]})]}),(0,V.jsx)(`div`,{className:`content-body`,children:f?(0,V.jsxs)(`div`,{style:{textAlign:`center`,padding:`5rem`,color:`#64748B`},children:[(0,V.jsx)(ko,{className:`animate-spin`,style:{margin:`0 auto 1rem auto`}}),`Loading classroom workspace...`]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`parent-welcome-greeting-row`,children:[(0,V.jsxs)(`div`,{className:`greeting-text`,children:[(0,V.jsxs)(`h2`,{children:[u,` — Today`]}),(0,V.jsxs)(`p`,{children:[o.length,` students • `,i.todayActivities,` activities planned`]})]}),(0,V.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>t(`/teacher/activities`),style:{borderRadius:`10px`,padding:`0.6rem 1.2rem`,gap:`0.4rem`,display:`flex`,alignItems:`center`},children:[(0,V.jsx)(Go,{size:18}),` New activity`]})]}),(0,V.jsxs)(`div`,{className:`portal-tabs-container`,style:{marginBottom:`2rem`},children:[(0,V.jsx)(`button`,{onClick:()=>t(`/teacher`),className:`portal-tab-item ${r===`overview`?`active`:``}`,children:`Overview`}),(0,V.jsx)(`button`,{onClick:()=>t(`/teacher/upload`),className:`portal-tab-item ${r===`upload`?`active`:``}`,children:`Upload Photos`}),(0,V.jsx)(`button`,{onClick:()=>t(`/teacher/tagging`),className:`portal-tab-item ${r===`tagging`?`active`:``}`,children:`Tagging`}),(0,V.jsx)(`button`,{onClick:()=>t(`/teacher/activities`),className:`portal-tab-item ${r===`activities`?`active`:``}`,children:`Activities`}),(0,V.jsx)(`button`,{onClick:()=>t(`/teacher/attendance`),className:`portal-tab-item ${r===`attendance`?`active`:``}`,children:`Attendance`})]}),m&&(0,V.jsx)(`div`,{className:`error-alert-box`,children:m}),r===`overview`&&(0,V.jsxs)(`div`,{className:`tab-view-overview-layout`,children:[(0,V.jsxs)(`div`,{className:`overview-metrics-grid`,style:{marginBottom:`2rem`},children:[(0,V.jsxs)(`div`,{className:`metric-box-card`,children:[(0,V.jsxs)(`div`,{className:`card-details-block`,children:[(0,V.jsx)(`span`,{className:`card-lbl-txt`,children:`STUDENTS PRESENT`}),(0,V.jsxs)(`h3`,{children:[o.length,`/`,o.length]}),(0,V.jsx)(`p`,{children:`100% today`})]}),(0,V.jsx)(`div`,{className:`card-icon-box bg-green-lite`,children:(0,V.jsx)(as,{size:18,color:`#059669`})})]}),(0,V.jsxs)(`div`,{className:`metric-box-card`,children:[(0,V.jsxs)(`div`,{className:`card-details-block`,children:[(0,V.jsx)(`span`,{className:`card-lbl-txt`,children:`PHOTOS UPLOADED`}),(0,V.jsx)(`h3`,{children:i.totalUploads}),(0,V.jsxs)(`p`,{children:[i.pendingUploads,` pending approval`]})]}),(0,V.jsx)(`div`,{className:`card-icon-box bg-blue-lite`,children:(0,V.jsx)(Fo,{size:18,color:`#2563EB`})})]}),(0,V.jsxs)(`div`,{className:`metric-box-card`,children:[(0,V.jsxs)(`div`,{className:`card-details-block`,children:[(0,V.jsx)(`span`,{className:`card-lbl-txt`,children:`ACTIVITIES`}),(0,V.jsx)(`h3`,{children:i.todayActivities}),(0,V.jsx)(`p`,{children:`2 completed`})]}),(0,V.jsx)(`div`,{className:`card-icon-box bg-blue-lite`,children:(0,V.jsx)(Oo,{size:18,color:`#2563EB`})})]}),(0,V.jsxs)(`div`,{className:`metric-box-card`,children:[(0,V.jsxs)(`div`,{className:`card-details-block`,children:[(0,V.jsx)(`span`,{className:`card-lbl-txt`,children:`ANNOUNCEMENTS`}),(0,V.jsx)(`h3`,{children:`1`}),(0,V.jsx)(`p`,{children:`Sports Day reminder`})]}),(0,V.jsx)(`div`,{className:`card-icon-box bg-orange-lite`,children:(0,V.jsx)(vo,{size:18,color:`#D97706`})})]})]}),(0,V.jsxs)(`div`,{className:`overview-split-row`,style:{display:`grid`,gridTemplateColumns:`1.8fr 1fr`,gap:`2rem`},children:[(0,V.jsxs)(`div`,{className:`glass-panel text-left`,style:{margin:0},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`1.5rem`},children:[(0,V.jsx)(`div`,{children:(0,V.jsx)(`h4`,{style:{fontSize:`1.2rem`,fontWeight:800,color:`#0F172A`},children:`Today's albums`})}),(0,V.jsxs)(`button`,{className:`btn btn-outline`,style:{display:`flex`,alignItems:`center`,gap:`0.4rem`,fontSize:`0.85rem`,padding:`0.4rem 1rem`},onClick:()=>t(`/teacher/upload`),children:[(0,V.jsx)(rs,{size:14}),` Upload`]})]}),(0,V.jsx)(`div`,{className:`albums-preview-grid`,style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`1.5rem`},children:Ne.length===0?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`album-card-item`,style:{border:`1px solid #F1F5F9`,borderRadius:`12px`,overflow:`hidden`,background:`#FFFFFF`},children:[(0,V.jsx)(`div`,{style:{height:`180px`,background:`#EEF2F6`,position:`relative`,overflow:`hidden`},children:(0,V.jsx)(`img`,{src:`https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80`,alt:`Art & Craft`,style:{width:`100%`,height:`100%`,objectFit:`cover`}})}),(0,V.jsxs)(`div`,{style:{padding:`1rem`},children:[(0,V.jsx)(`h5`,{style:{fontWeight:700,fontSize:`0.95rem`,color:`#0F172A`},children:`Art & Craft`}),(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginTop:`0.5rem`},children:[(0,V.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`#64748B`},children:`12 photos • 5 tagged`}),(0,V.jsx)(`span`,{style:{background:`#ECFDF5`,color:`#059669`,fontSize:`0.75rem`,fontWeight:700,padding:`0.2rem 0.5rem`,borderRadius:`6px`},children:`Approved`})]})]})]}),(0,V.jsxs)(`div`,{className:`album-card-item`,style:{border:`1px solid #F1F5F9`,borderRadius:`12px`,overflow:`hidden`,background:`#FFFFFF`},children:[(0,V.jsx)(`div`,{style:{height:`180px`,background:`#EEF2F6`,position:`relative`,overflow:`hidden`},children:(0,V.jsx)(`img`,{src:`https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80`,alt:`Story Session`,style:{width:`100%`,height:`100%`,objectFit:`cover`}})}),(0,V.jsxs)(`div`,{style:{padding:`1rem`},children:[(0,V.jsx)(`h5`,{style:{fontWeight:700,fontSize:`0.95rem`,color:`#0F172A`},children:`Story Session`}),(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginTop:`0.5rem`},children:[(0,V.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`#64748B`},children:`6 photos • 5 tagged`}),(0,V.jsx)(`span`,{style:{background:`#F8FAFC`,color:`#64748B`,fontSize:`0.75rem`,fontWeight:700,padding:`0.2rem 0.5rem`,borderRadius:`6px`},children:`Pending`})]})]})]})]}):Ne.map((e,t)=>(0,V.jsxs)(`div`,{className:`album-card-item`,style:{border:`1px solid #F1F5F9`,borderRadius:`12px`,overflow:`hidden`,background:`#FFFFFF`},children:[(0,V.jsx)(`div`,{style:{height:`180px`,background:`#EEF2F6`,position:`relative`,overflow:`hidden`},children:(0,V.jsx)(`img`,{src:e.photos[0].startsWith(`http`)?e.photos[0]:`http://localhost:5000${e.photos[0]}`,alt:e.title,style:{width:`100%`,height:`100%`,objectFit:`cover`},onError:e=>{e.target.onerror=null,e.target.src=`https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80`}})}),(0,V.jsxs)(`div`,{style:{padding:`1rem`},children:[(0,V.jsx)(`h5`,{style:{fontWeight:700,fontSize:`0.95rem`,color:`#0F172A`},children:e.title}),(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginTop:`0.5rem`},children:[(0,V.jsxs)(`span`,{style:{fontSize:`0.8rem`,color:`#64748B`},children:[e.photos.length,` photos • `,e.taggedCount,` tagged`]}),(0,V.jsx)(`span`,{style:{background:e.status===`approved`?`#ECFDF5`:`#F8FAFC`,color:e.status===`approved`?`#059669`:`#64748B`,fontSize:`0.75rem`,fontWeight:700,padding:`0.2rem 0.5rem`,borderRadius:`6px`},children:e.status===`approved`?`Approved`:`Pending`})]})]})]},t))})]}),(0,V.jsxs)(`div`,{className:`glass-panel text-left`,style:{margin:0,height:`fit-content`},children:[(0,V.jsx)(`h4`,{style:{fontSize:`1.1rem`,fontWeight:800,color:`#0F172A`,marginBottom:`0.2rem`},children:`AI assistant`}),(0,V.jsx)(`p`,{style:{fontSize:`0.82rem`,color:`#64748B`,marginBottom:`1.5rem`},children:`Caption & summary suggestions`}),(0,V.jsxs)(`div`,{className:`ai-suggestion-box`,style:{background:`#F0F7FF`,border:`1px solid #D0E5FF`,borderRadius:`12px`,padding:`1.25rem`,marginBottom:`1.5rem`,position:`relative`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,gap:`0.4rem`,color:`#2563EB`,fontWeight:700,fontSize:`0.8rem`,marginBottom:`0.5rem`,alignItems:`center`},children:[(0,V.jsx)(Zo,{size:14}),(0,V.jsx)(`span`,{children:`Suggested caption`})]}),(0,V.jsxs)(`p`,{style:{fontSize:`0.88rem`,color:`#1E293B`,fontStyle:`italic`,lineHeight:`1.5`},children:[`"`,g,`"`]})]}),(0,V.jsxs)(`button`,{className:`btn btn-primary`,style:{width:`100%`,borderRadius:`10px`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`0.5rem`},onClick:we,children:[(0,V.jsx)(So,{size:16}),` Use suggestion`]})]})]})]}),r===`upload`&&(0,V.jsxs)(`div`,{className:`glass-panel text-left`,children:[(0,V.jsx)(`h3`,{style:{fontSize:`1.25rem`,fontWeight:800,color:`#0F172A`,marginBottom:`1.5rem`},children:`Upload activity photos`}),k&&(0,V.jsxs)(`div`,{className:`success-alert`,style:{background:`#E8F8EE`,color:`#059669`,border:`1px solid rgba(76, 175, 80, 0.2)`,marginBottom:`1.5rem`},children:[(0,V.jsx)(To,{size:18}),(0,V.jsx)(`span`,{children:k})]}),(0,V.jsxs)(`form`,{onSubmit:Oe,children:[(0,V.jsxs)(`div`,{onClick:Te,style:{border:`2px dashed #CBD5E1`,borderRadius:`16px`,padding:`3rem 2rem`,textAlign:`center`,cursor:`pointer`,background:`#F8FAFC`,transition:`border-color 0.2s`,marginBottom:`2rem`},onMouseOver:e=>e.currentTarget.style.borderColor=`#4F9CF9`,onMouseOut:e=>e.currentTarget.style.borderColor=`#CBD5E1`,children:[(0,V.jsx)(`input`,{type:`file`,ref:te,multiple:!0,accept:`image/*`,style:{display:`none`},onChange:Ee}),(0,V.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`50%`,background:`#EFF6FF`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 1rem auto`},children:(0,V.jsx)(rs,{size:20,color:`#4F9CF9`})}),(0,V.jsx)(`h4`,{style:{fontWeight:700,fontSize:`1rem`,color:`#0F172A`,marginBottom:`0.25rem`},children:`Drop photos here`}),(0,V.jsx)(`p`,{style:{fontSize:`0.8rem`,color:`#64748B`,marginBottom:`1rem`},children:`or click to select up to 30 images (JPG, PNG)`}),(0,V.jsx)(`button`,{type:`button`,className:`btn btn-outline`,style:{pointerEvents:`none`},children:`Choose photos`})]}),v.length>0&&(0,V.jsxs)(`div`,{style:{marginBottom:`2rem`},children:[(0,V.jsxs)(`p`,{style:{fontSize:`0.85rem`,fontWeight:700,color:`#475569`,marginBottom:`0.75rem`},children:[`Selected files (`,v.length,`):`]}),(0,V.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`1rem`},children:v.map((e,t)=>(0,V.jsxs)(`div`,{style:{width:`80px`,height:`80px`,borderRadius:`8px`,border:`1px solid #E2E8F0`,overflow:`hidden`,position:`relative`},children:[(0,V.jsx)(`img`,{src:`http://localhost:5000${e}`,alt:`Uploaded Preview`,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>De(t),style:{position:`absolute`,top:`2px`,right:`2px`,width:`18px`,height:`18px`,border:`none`,borderRadius:`50%`,background:`rgba(0,0,0,0.6)`,color:`white`,fontSize:`10px`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`},children:(0,V.jsx)(es,{size:10})})]},t))})]}),(0,V.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`1.5rem`,marginBottom:`1.5rem`},children:[(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{style:{fontWeight:700,fontSize:`0.85rem`,color:`#334155`,marginBottom:`0.5rem`,display:`block`},children:`Album name`}),(0,V.jsx)(`input`,{type:`text`,className:`form-control`,placeholder:`e.g. Outdoor Play — June 18`,value:b,onChange:e=>x(e.target.value)})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{style:{fontWeight:700,fontSize:`0.85rem`,color:`#334155`,marginBottom:`0.5rem`,display:`block`},children:`Activity`}),(0,V.jsx)(`input`,{type:`text`,className:`form-control`,placeholder:`e.g. Outdoor Play`,value:C,onChange:e=>w(e.target.value),required:!0})]})]}),(0,V.jsxs)(`div`,{className:`form-group`,style:{marginBottom:`1rem`},children:[(0,V.jsx)(`label`,{style:{fontWeight:700,fontSize:`0.85rem`,color:`#334155`,marginBottom:`0.5rem`,display:`block`},children:`Caption`}),(0,V.jsx)(`textarea`,{className:`form-control`,rows:`3`,placeholder:`A short description for parents...`,value:T,onChange:e=>E(e.target.value)})]}),(0,V.jsx)(`div`,{style:{marginBottom:`2rem`},children:(0,V.jsxs)(`span`,{onClick:()=>E(g),style:{fontSize:`0.82rem`,color:`#4F9CF9`,fontWeight:700,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:`0.3rem`},children:[(0,V.jsx)(Zo,{size:12}),` AI can suggest a caption`]})}),(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,borderTop:`1px solid #F1F5F9`,paddingTop:`1.5rem`},children:[(0,V.jsx)(`button`,{type:`button`,className:`btn btn-outline`,onClick:()=>t(`/teacher`),children:`Save draft`}),(0,V.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:D,children:D?`Submitting...`:`Submit for approval`})]})]})]}),r===`tagging`&&(0,V.jsxs)(`div`,{className:`overview-split-row`,style:{display:`grid`,gridTemplateColumns:`1.8fr 1fr`,gap:`2rem`},children:[(0,V.jsxs)(`div`,{className:`glass-panel text-left`,style:{margin:0},children:[(0,V.jsx)(`h3`,{style:{fontSize:`1.15rem`,fontWeight:800,color:`#0F172A`,marginBottom:`1rem`},children:`Select a photo to tag`}),c.length===0?(0,V.jsxs)(`div`,{style:{textAlign:`center`,padding:`3rem`,color:`#64748B`},children:[(0,V.jsx)(Fo,{size:32,style:{opacity:.5,margin:`0 auto 0.5rem auto`}}),(0,V.jsx)(`p`,{style:{fontSize:`0.88rem`},children:`No activity photos uploaded yet.`})]}):(0,V.jsx)(`div`,{className:`tagging-photos-grid`,style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`1rem`},children:c.map(e=>(0,V.jsx)(`div`,{onClick:()=>ne(e),style:{height:`120px`,borderRadius:`10px`,overflow:`hidden`,border:A&&A.id===e.id?`3px solid #4F9CF9`:`1px solid #E2E8F0`,cursor:`pointer`,transition:`all 0.15s`},children:(0,V.jsx)(`img`,{src:e.image_url.startsWith(`http`)?e.image_url:`http://localhost:5000${e.image_url}`,alt:e.activity_title,style:{width:`100%`,height:`100%`,objectFit:`cover`},onError:e=>{e.target.onerror=null,e.target.src=`https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80`}})},e.id))})]}),(0,V.jsxs)(`div`,{className:`glass-panel text-left`,style:{margin:0,height:`fit-content`},children:[(0,V.jsx)(`h4`,{style:{fontSize:`1.1rem`,fontWeight:800,color:`#0F172A`,marginBottom:`0.2rem`},children:`Tag students`}),(0,V.jsx)(`p`,{style:{fontSize:`0.8rem`,color:`#64748B`,marginBottom:`1.5rem`},children:`Only tagged parents will see this photo.`}),M&&(0,V.jsxs)(`div`,{className:`success-alert`,style:{background:`#E8F8EE`,color:`#059669`,border:`1px solid rgba(76, 175, 80, 0.2)`,marginBottom:`1rem`,padding:`0.5rem 0.75rem`,fontSize:`0.85rem`},children:[(0,V.jsx)(So,{size:14}),(0,V.jsx)(`span`,{children:M})]}),A?(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.8rem`,marginBottom:`1.5rem`},children:o.map(e=>{let t=j.includes(e.id);return(0,V.jsxs)(`div`,{onClick:()=>ke(e.id),style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,cursor:`pointer`,padding:`0.4rem 0`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.75rem`},children:[(0,V.jsx)(`div`,{style:{width:`30px`,height:`30px`,borderRadius:`50%`,background:`#EFF6FF`,color:`#4F9CF9`,fontSize:`0.75rem`,fontWeight:800,display:`flex`,alignItems:`center`,justifyContent:`center`},children:e.student_name.split(` `).map(e=>e[0]).join(``).substring(0,2).toUpperCase()}),(0,V.jsx)(`span`,{style:{fontSize:`0.9rem`,fontWeight:600,color:`#334155`},children:e.student_name})]}),(0,V.jsx)(`div`,{style:{width:`20px`,height:`20px`,borderRadius:`50%`,border:t?`none`:`2px solid #CBD5E1`,background:t?`#4F9CF9`:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:t&&(0,V.jsx)(So,{size:12,color:`white`})})]},e.id)})}),(0,V.jsxs)(`button`,{className:`btn btn-primary`,style:{width:`100%`,borderRadius:`10px`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`0.4rem`},onClick:Ae,children:[(0,V.jsx)(So,{size:16}),` Save tags (`,j.length,`)`]})]}):(0,V.jsx)(`p`,{style:{fontSize:`0.85rem`,color:`#64748B`,fontStyle:`italic`},children:`Please select a photo from the left grid first.`})]})]}),r===`activities`&&(0,V.jsxs)(`div`,{className:`glass-panel text-left`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`1.5rem`},children:[(0,V.jsx)(`h3`,{style:{fontSize:`1.25rem`,fontWeight:800,color:`#0F172A`},children:`Scheduled activities`}),(0,V.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>se(!0),style:{display:`flex`,alignItems:`center`,gap:`0.4rem`},children:[(0,V.jsx)(Go,{size:16}),` Add`]})]}),(0,V.jsx)(`div`,{className:`activities-list`,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:ie.map((e,t)=>(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`1rem 1.25rem`,border:`1px solid #F1F5F9`,borderRadius:`12px`,background:`#FFFFFF`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1.25rem`},children:[(0,V.jsx)(`div`,{style:{width:`32px`,height:`32px`,borderRadius:`50%`,background:`#EFF6FF`,color:`#4F9CF9`,fontWeight:800,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`0.9rem`},children:t+1}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h5`,{style:{fontWeight:700,fontSize:`0.95rem`,color:`#0F172A`,marginBottom:`0.1rem`},children:e.title}),(0,V.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`#64748B`},children:e.time})]})]}),(0,V.jsx)(`div`,{children:(0,V.jsx)(`span`,{style:{background:e.status===`Done`?`#ECFDF5`:`#F1F5F9`,color:e.status===`Done`?`#059669`:`#64748B`,fontSize:`0.78rem`,fontWeight:700,padding:`0.25rem 0.6rem`,borderRadius:`8px`},children:e.status})})]},e.id))}),oe&&(0,V.jsx)(`div`,{style:{position:`fixed`,top:0,left:0,width:`100vw`,height:`100vh`,background:`rgba(0,0,0,0.4)`,zIndex:1e3,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,V.jsxs)(`div`,{className:`glass-panel text-left`,style:{width:`400px`,background:`white`,margin:0},children:[(0,V.jsx)(`h4`,{style:{fontWeight:800,fontSize:`1.1rem`,marginBottom:`1.25rem`},children:`Schedule new activity`}),(0,V.jsxs)(`div`,{className:`form-group`,style:{marginBottom:`1rem`},children:[(0,V.jsx)(`label`,{style:{fontWeight:700,fontSize:`0.82rem`,marginBottom:`0.4rem`,display:`block`},children:`Activity title`}),(0,V.jsx)(`input`,{type:`text`,className:`form-control`,placeholder:`e.g. Lunch Break`,value:ce,onChange:e=>P(e.target.value)})]}),(0,V.jsxs)(`div`,{className:`form-group`,style:{marginBottom:`1rem`},children:[(0,V.jsx)(`label`,{style:{fontWeight:700,fontSize:`0.82rem`,marginBottom:`0.4rem`,display:`block`},children:`Scheduled time`}),(0,V.jsx)(`input`,{type:`text`,className:`form-control`,placeholder:`e.g. 12:00 - 01:00 PM`,value:le,onChange:e=>ue(e.target.value)})]}),(0,V.jsxs)(`div`,{className:`form-group`,style:{marginBottom:`1.5rem`},children:[(0,V.jsx)(`label`,{style:{fontWeight:700,fontSize:`0.82rem`,marginBottom:`0.4rem`,display:`block`},children:`Status`}),(0,V.jsxs)(`select`,{className:`form-control`,value:de,onChange:e=>fe(e.target.value),children:[(0,V.jsx)(`option`,{value:`Upcoming`,children:`Upcoming`}),(0,V.jsx)(`option`,{value:`Done`,children:`Done`})]})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`0.5rem`},children:[(0,V.jsx)(`button`,{className:`btn btn-outline`,onClick:()=>se(!1),children:`Cancel`}),(0,V.jsx)(`button`,{className:`btn btn-primary`,onClick:je,children:`Add activity`})]})]})})]}),r===`attendance`&&(0,V.jsxs)(`div`,{className:`glass-panel text-left`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`1.5rem`},children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`h3`,{style:{fontSize:`1.25rem`,fontWeight:800,color:`#0F172A`,marginBottom:`0.2rem`},children:[`Mark attendance — `,u]}),(0,V.jsx)(`p`,{style:{fontSize:`0.8rem`,color:`#64748B`},children:`Update students present or absent today.`})]}),(0,V.jsx)(`input`,{type:`date`,className:`form-control`,style:{width:`160px`},value:pe,onChange:e=>me(e.target.value)})]}),ye&&(0,V.jsxs)(`div`,{className:`success-alert`,style:{background:`#E8F8EE`,color:`#059669`,border:`1px solid rgba(76, 175, 80, 0.2)`,marginBottom:`1.25rem`},children:[(0,V.jsx)(To,{size:18}),(0,V.jsx)(`span`,{children:ye})]}),(0,V.jsx)(`div`,{className:`attendance-rows-container`,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:o.map(e=>{let t=he[e.id]===`present`,n=_e[e.id]||`09:00`;return(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`0.8rem 1.25rem`,border:`1px solid #F1F5F9`,borderRadius:`12px`,background:`#FFFFFF`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[(0,V.jsx)(`div`,{style:{width:`36px`,height:`36px`,borderRadius:`50%`,background:`#EFF6FF`,color:`#4F9CF9`,fontSize:`0.85rem`,fontWeight:800,display:`flex`,alignItems:`center`,justifyContent:`center`},children:e.student_name.split(` `).map(e=>e[0]).join(``).substring(0,2).toUpperCase()}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h5`,{style:{fontWeight:700,fontSize:`0.92rem`,color:`#334155`,marginBottom:`0.1rem`},children:e.student_name}),(0,V.jsxs)(`span`,{style:{fontSize:`0.78rem`,color:`#64748B`},children:[`Marked at `,n]})]})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,gap:`0.4rem`},children:[(0,V.jsx)(`button`,{className:`btn ${t?`btn-green`:`btn-outline`}`,style:{padding:`0.4rem 1rem`,fontSize:`0.8rem`,borderRadius:`8px`},onClick:()=>Me(e.id,`present`),children:`Present`}),(0,V.jsx)(`button`,{className:`btn ${t?`btn-outline`:`btn-outline-red`}`,style:{padding:`0.4rem 1rem`,fontSize:`0.8rem`,borderRadius:`8px`},onClick:()=>Me(e.id,`absent`),children:`Absent`})]})]},e.id)})})]}),r===`notifications`&&(0,V.jsxs)(`div`,{className:`glass-panel text-left`,children:[(0,V.jsx)(`h3`,{style:{fontSize:`1.25rem`,fontWeight:800,color:`#0F172A`,marginBottom:`1.5rem`},children:`Recent parent updates`}),(0,V.jsx)(`div`,{className:`feedbacks-list`,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:xe.map(e=>(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:`1rem`,padding:`1rem 1.25rem`,border:`1px solid #F1F5F9`,borderRadius:`12px`,background:`#FFFFFF`},children:[(0,V.jsx)(`div`,{style:{width:`32px`,height:`32px`,borderRadius:`50%`,background:`#EFF6FF`,color:`#4F9CF9`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,V.jsx)(vo,{size:15})}),(0,V.jsxs)(`div`,{style:{flex:1},children:[(0,V.jsx)(`h5`,{style:{fontWeight:700,fontSize:`0.92rem`,color:`#0F172A`,marginBottom:`0.2rem`},children:`Parent Note / Response`}),(0,V.jsx)(`p`,{style:{fontSize:`0.85rem`,color:`#334155`,lineHeight:`1.4`},children:e.message})]}),(0,V.jsx)(`span`,{style:{fontSize:`0.78rem`,color:`#94A3B8`},children:e.time})]},e.id))})]})]})})]}),(0,V.jsx)(`style`,{children:`
        /* Global Portal Header styles */
        .parent-portal-header {
          height: 70px;
          background: #FFFFFF;
          border-bottom: 1px solid #F1F5F9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          font-family: 'Outfit', sans-serif;
        }

        .header-search-box {
          display: flex;
          align-items: center;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 0.5rem 1rem;
          width: 380px;
          gap: 0.5rem;
        }

        .search-icon {
          color: #94A3B8;
        }

        .search-input {
          border: none;
          background: transparent;
          outline: none;
          width: 100%;
          font-size: 0.9rem;
          color: #1F2937;
          font-family: 'Outfit', sans-serif;
        }

        .header-right-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .parent-portal-pill {
          background: #F1F5F9;
          color: #475569;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }

        .bell-notification-icon {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .bell-red-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #F59E0B;
        }

        .parent-profile-widget {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .parent-avatar-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #EFF6FF;
          color: #2563EB;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
        }

        .parent-profile-info {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          text-align: left;
        }

        .profile-name-span {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0F172A;
        }

        .profile-relation-span {
          font-size: 0.75rem;
          color: #64748B;
          font-weight: 500;
        }

        /* Error alert */
        .error-alert-box {
          background: #FEF2F2;
          border: 1px solid #FCA5A5;
          color: #DC2626;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          text-align: left;
        }

        /* Greeting heading row */
        .parent-welcome-greeting-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .greeting-text h2 {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.025em;
          margin-bottom: 0.15rem;
          text-align: left;
        }

        .greeting-text p {
          font-size: 0.95rem;
          color: #64748B;
          font-weight: 500;
          text-align: left;
        }

        /* Tabs bar styles */
        .portal-tabs-container {
          display: flex;
          background-color: #F1F5F9;
          padding: 0.25rem;
          border-radius: 12px;
          gap: 0.25rem;
          margin-bottom: 2rem;
          width: fit-content;
        }

        .portal-tab-item {
          background: transparent;
          border: none;
          outline: none;
          font-size: 0.9rem;
          font-weight: 700;
          color: #64748B;
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Outfit', sans-serif;
        }

        .portal-tab-item:hover {
          color: #0F172A;
        }

        .portal-tab-item.active {
          background: #FFFFFF;
          color: #4F9CF9;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
        }

        /* Metrics grid */
        .overview-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .metric-box-card {
          background: #FFFFFF;
          border: 1px solid #F1F5F9;
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-align: left;
        }

        .metric-box-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(79, 156, 249, 0.06);
        }

        .card-details-block {
          display: flex;
          flex-direction: column;
        }

        .card-lbl-txt {
          font-size: 0.72rem;
          font-weight: 800;
          color: #94A3B8;
          letter-spacing: 0.5px;
          margin-bottom: 0.25rem;
        }

        .card-details-block h3 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          margin-bottom: 0.15rem;
        }

        .card-details-block p {
          font-size: 0.78rem;
          color: #64748B;
          font-weight: 500;
        }

        .card-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bg-blue-lite {
          background-color: #EFF6FF;
        }

        .bg-green-lite {
          background-color: #ECFDF5;
        }

        .bg-orange-lite {
          background-color: #FFFBEB;
        }

        /* Custom buttons styling */
        .btn-green {
          background: #ECFDF5 !important;
          color: #059669 !important;
          border: 1px solid rgba(5, 150, 105, 0.1) !important;
          font-weight: 700;
        }

        .btn-outline-red {
          background: #FEF2F2 !important;
          color: #DC2626 !important;
          border: 1px solid rgba(220, 38, 38, 0.1) !important;
          font-weight: 700;
        }
      `})]})},Os=()=>{let{user:e}=(0,S.useContext)(io),t=ct(),n=at(),[r]=In(),i=(()=>{let e=r.get(`tab`);if(e)return e;let t=n.pathname;return t.includes(`/my-child`)?`timeline`:t.includes(`/gallery`)?`gallery`:t.includes(`/attendance`)?`attendance`:t.includes(`/notifications`)?`notifications`:t.includes(`/profile`)?`profile`:`overview`})(),[a,o]=(0,S.useState)(null),[s,c]=(0,S.useState)([]),[l,u]=(0,S.useState)([]),[d,f]=(0,S.useState)(!0),[p,m]=(0,S.useState)(``),[h,g]=(0,S.useState)(!1),[_,v]=(0,S.useState)(`All`),[y,b]=(0,S.useState)(``),[x,C]=(0,S.useState)(!1),[w,T]=(0,S.useState)(!1),E=async()=>{try{if(e){let[e,t]=await Promise.all([B.get(`/parent/progress`),B.get(`/parent/announcements`)]);o(e.data),c(t.data)}try{u((await B.get(`/parent/notifications`)).data)}catch{u([{id:1,type:`photo`,message:`12 photos from Art & Craft today.`,time:`10m ago`,readStatus:`unread`},{id:2,type:`attendance`,message:`Your child was marked present at 9:02 AM.`,time:`2h ago`,readStatus:`unread`},{id:3,type:`event`,message:`Sports Day on Friday, 26 June.`,time:`Yesterday`,readStatus:`read`},{id:4,type:`announcement`,message:`Parent-teacher meet next Saturday.`,time:`2d ago`,readStatus:`read`}])}}catch(e){console.error(e),m(`Could not retrieve child profile statistics.`)}finally{f(!1)}};(0,S.useEffect)(()=>{e&&E()},[e]);let D=async e=>{try{await B.put(`/parent/notifications/${e}/read`),E()}catch{u(l.map(t=>t.id===e?{...t,readStatus:`read`}:t))}},O=(()=>{if(!a||!a.attendance||a.attendance.length===0)return{percentage:94,present:18,total:19};let e=a.attendance.length,t=a.attendance.filter(e=>e.status===`present`).length;return{percentage:Math.round(t/e*100),present:t,total:e}})(),k=a?.childName?.split(` `)[0]||`Ishita`,ee=a?.childName?a.childName.split(` `).map(e=>e[0]).join(``).substring(0,2).toUpperCase():`IP`,te=async e=>{if(e.preventDefault(),y.trim())try{await B.post(`/parent/feedback`,{message:y}),b(``),C(!1),T(!0),setTimeout(()=>T(!1),3e3)}catch{alert(`Feedback sent successfully.`),b(``),C(!1)}},A=[{time:`09:00 AM`,title:`Morning Assembly`,desc:`Good morning circle and weather song.`,hasPhotos:!0},{time:`10:00 AM`,title:`Art & Craft`,desc:`Watercolor exploration with primary colors.`,hasPhotos:!1},{time:`11:30 AM`,title:`Story Session`,desc:`Read along: The Very Hungry Caterpillar.`,hasPhotos:!0},{time:`01:00 PM`,title:`Lunch Break`,desc:`Healthy meal with fruits and salad.`,hasPhotos:!1},{time:`03:00 PM`,title:`Outdoor Play`,desc:`Running games and obstacle course.`,hasPhotos:!0},{time:`04:00 PM`,title:`Departure`,desc:`Pickup with parents.`,hasPhotos:!1}],ne=[{id:1,category:`Art & Craft`,url:`https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80`,desc:`Painting brushes & watercolors`},{id:2,category:`Art & Craft`,url:`https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80`,desc:`Building blocks class activity`},{id:3,category:`Outdoor Play`,url:`https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop&q=80`,desc:`Running children outdoors`},{id:4,category:`Story Time`,url:`https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80`,desc:`Reading books at preschool table`},{id:5,category:`Music`,url:`https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80`,desc:`Toddlers hand paint circle`},{id:6,category:`Story Time`,url:`https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80`,desc:`Classroom reading circle`},{id:7,category:`Outdoor Play`,url:`https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80`,desc:`Preschool garden playground`},{id:8,category:`Music`,url:`https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80`,desc:`Kids play with bricks`}],j=_===`All`?ne:ne.filter(e=>e.category===_),re=[{id:`overview`,label:`Overview`,path:`/parent`},{id:`timeline`,label:`My Child's Day`,path:`/parent/my-child`},{id:`gallery`,label:`Photo Gallery`,path:`/parent/gallery`},{id:`attendance`,label:`Attendance`,path:`/parent/attendance`},{id:`notifications`,label:`Notifications`,path:`/parent/notifications`},{id:`profile`,label:`Profile`,path:`/parent/profile`}],M=l.filter(e=>e.readStatus===`unread`).length;return(0,V.jsxs)(`div`,{className:`app-container`,children:[(0,V.jsx)(ds,{}),(0,V.jsxs)(`div`,{className:`main-content`,children:[(0,V.jsxs)(`header`,{className:`parent-portal-header`,children:[(0,V.jsxs)(`div`,{className:`header-search-box`,children:[(0,V.jsx)(`span`,{className:`search-icon`,children:`🔍`}),(0,V.jsx)(`input`,{type:`text`,placeholder:`Search students, photos, activities...`,className:`search-input`})]}),(0,V.jsxs)(`div`,{className:`header-right-actions`,children:[(0,V.jsx)(`div`,{className:`parent-portal-pill`,children:`Parent Portal`}),(0,V.jsxs)(`div`,{className:`bell-notification-icon`,onClick:()=>t(`/parent/notifications`),children:[(0,V.jsx)(vo,{size:20,color:`#475569`}),M>0&&(0,V.jsx)(`span`,{className:`bell-red-dot`})]}),(0,V.jsxs)(`div`,{className:`parent-profile-widget`,onClick:()=>t(`/parent/profile`),children:[(0,V.jsx)(`div`,{className:`parent-avatar-circle`,children:e?.name?e.name.split(` `).map(e=>e[0]).join(``).substring(0,2).toUpperCase():`NP`}),(0,V.jsxs)(`div`,{className:`parent-profile-info`,children:[(0,V.jsx)(`span`,{className:`profile-name-span`,children:e?.name||`Neha Patel`}),(0,V.jsxs)(`span`,{className:`profile-relation-span`,children:[`Parent of `,k]})]})]})]})]}),(0,V.jsx)(`div`,{className:`content-body`,children:d?(0,V.jsxs)(`div`,{style:{textAlign:`center`,padding:`5rem`,color:`#64748B`},children:[(0,V.jsx)(ko,{className:`animate-spin`,style:{margin:`0 auto 1rem auto`}}),`Loading child stats...`]}):p?(0,V.jsx)(`div`,{className:`error-alert-box`,children:p}):e&&e.status===`pending`?(0,V.jsxs)(`div`,{className:`glass-panel pending-approval-card-styled`,children:[(0,V.jsx)(`span`,{className:`pending-icon`,children:`⏳`}),(0,V.jsx)(`h2`,{children:`Your account is pending admin approval.`}),(0,V.jsx)(`p`,{children:`The school administrators are currently reviewing your registration. Once approved, you will have secure access to your child's private gallery, milestones, and updates.`})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`parent-welcome-greeting-row`,children:[(0,V.jsxs)(`div`,{className:`greeting-text`,children:[(0,V.jsxs)(`h2`,{children:[`Good morning, `,e?.name?.split(` `)[0]||`Neha`]}),(0,V.jsxs)(`p`,{children:[`Here's what `,k,` has been up to today.`]})]}),(0,V.jsx)(`div`,{className:`present-badge-green`,children:`Present today`})]}),(0,V.jsx)(`div`,{className:`portal-tabs-container`,children:re.map(e=>(0,V.jsx)(`button`,{onClick:()=>t(e.path),className:`portal-tab-item ${i===e.id?`active`:``}`,children:e.label},e.id))}),i===`overview`&&(0,V.jsxs)(`div`,{className:`tab-view-overview-layout`,children:[(0,V.jsxs)(`div`,{className:`glass-panel child-summary-banner`,children:[(0,V.jsxs)(`div`,{className:`banner-left-profile`,children:[(0,V.jsx)(`div`,{className:`child-avatar-circle`,children:ee}),(0,V.jsxs)(`div`,{className:`child-details-meta`,children:[(0,V.jsx)(`span`,{className:`child-label-heading`,children:`YOUR CHILD`}),(0,V.jsx)(`h3`,{children:a?.childName||`Ishita Patel`}),(0,V.jsxs)(`p`,{children:[a?.classroom||`Nursery`,` • Ms. Priya Sharma`]})]})]}),(0,V.jsxs)(`div`,{className:`banner-right-stats`,children:[(0,V.jsxs)(`div`,{className:`meta-stat-item`,children:[(0,V.jsx)(`span`,{className:`meta-stat-label`,children:`Attendance`}),(0,V.jsxs)(`strong`,{className:`meta-stat-value text-green`,children:[O.percentage,`%`]})]}),(0,V.jsxs)(`div`,{className:`meta-stat-item`,children:[(0,V.jsx)(`span`,{className:`meta-stat-label`,children:`Photos this week`}),(0,V.jsx)(`strong`,{className:`meta-stat-value text-blue`,children:`28`})]})]})]}),(0,V.jsxs)(`div`,{className:`overview-metrics-grid`,children:[(0,V.jsxs)(`div`,{className:`metric-box-card`,onClick:()=>t(`/parent/my-child`),children:[(0,V.jsxs)(`div`,{className:`card-details-block`,children:[(0,V.jsx)(`span`,{className:`card-lbl-txt`,children:`TODAY'S ACTIVITIES`}),(0,V.jsx)(`h3`,{children:`4`}),(0,V.jsx)(`p`,{children:`2 with photos`})]}),(0,V.jsx)(`div`,{className:`card-icon-box bg-blue-lite`,children:(0,V.jsx)(yo,{size:18,color:`#2563EB`})})]}),(0,V.jsxs)(`div`,{className:`metric-box-card`,onClick:()=>t(`/parent/gallery`),children:[(0,V.jsxs)(`div`,{className:`card-details-block`,children:[(0,V.jsx)(`span`,{className:`card-lbl-txt`,children:`NEW PHOTOS`}),(0,V.jsx)(`h3`,{children:`12`}),(0,V.jsxs)(`p`,{children:[`Tagged with `,k]})]}),(0,V.jsx)(`div`,{className:`card-icon-box bg-green-lite`,children:(0,V.jsx)(bo,{size:18,color:`#059669`})})]}),(0,V.jsxs)(`div`,{className:`metric-box-card`,onClick:()=>t(`/parent/notifications`),children:[(0,V.jsxs)(`div`,{className:`card-details-block`,children:[(0,V.jsx)(`span`,{className:`card-lbl-txt`,children:`TEACHER NOTES`}),(0,V.jsx)(`h3`,{children:`2`}),(0,V.jsx)(`p`,{children:`Unread`})]}),(0,V.jsx)(`div`,{className:`card-icon-box bg-orange-lite`,children:(0,V.jsx)(Uo,{size:18,color:`#D97706`})})]}),(0,V.jsxs)(`div`,{className:`metric-box-card`,children:[(0,V.jsxs)(`div`,{className:`card-details-block`,children:[(0,V.jsx)(`span`,{className:`card-lbl-txt`,children:`ENGAGEMENT`}),(0,V.jsx)(`h3`,{children:`High`}),(0,V.jsx)(`p`,{children:`Active participant`})]}),(0,V.jsx)(`div`,{className:`card-icon-box bg-blue-lite`,children:(0,V.jsx)(Po,{size:18,color:`#2563EB`})})]})]}),(0,V.jsxs)(`div`,{className:`overview-split-row`,children:[(0,V.jsxs)(`div`,{className:`glass-panel activities-timeline-preview`,children:[(0,V.jsx)(`h4`,{className:`box-section-heading`,children:`Recent activities`}),(0,V.jsx)(`p`,{className:`box-section-subtitle`,children:`From today's classroom`}),(0,V.jsx)(`div`,{className:`timeline-preview-list`,children:A.slice(0,3).map((e,t)=>(0,V.jsxs)(`div`,{className:`timeline-preview-item`,children:[(0,V.jsx)(`div`,{className:`item-time-stamp`,children:e.time}),(0,V.jsxs)(`div`,{className:`item-text-contents`,children:[(0,V.jsx)(`h5`,{children:e.title}),(0,V.jsx)(`p`,{children:e.desc})]})]},t))})]}),(0,V.jsxs)(`div`,{className:`glass-panel teacher-note-card-styled`,children:[(0,V.jsx)(`h4`,{className:`box-section-heading`,children:`Teacher's note`}),(0,V.jsx)(`p`,{className:`box-section-subtitle`,children:`From Ms. Priya - 11:40 AM`}),(0,V.jsx)(`div`,{className:`teacher-note-body-box`,children:(0,V.jsxs)(`p`,{children:[`"`,k,` confidently identified four colors today and helped Aarav clean up the brushes. She's growing in independence — keep encouraging her at home!"`]})}),(0,V.jsxs)(`div`,{className:`teacher-note-actions-row`,children:[(0,V.jsxs)(`button`,{className:`btn-note-action ${h?`thanked`:``}`,onClick:()=>g(!h),children:[(0,V.jsx)(Po,{size:14,fill:h?`#EF4444`:`none`,color:h?`#EF4444`:`#64748B`}),(0,V.jsx)(`span`,{children:h?`Thanked!`:`Thank`})]}),(0,V.jsxs)(`button`,{className:`btn-note-action`,onClick:()=>C(!x),children:[(0,V.jsx)(Uo,{size:14}),(0,V.jsx)(`span`,{children:`Reply`})]})]}),x&&(0,V.jsxs)(`form`,{onSubmit:te,style:{marginTop:`1.25rem`},children:[(0,V.jsx)(`textarea`,{value:y,onChange:e=>b(e.target.value),placeholder:`Write a message back to the teacher...`,className:`teacher-reply-textarea`}),(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`0.5rem`,marginTop:`0.5rem`},children:[(0,V.jsx)(`button`,{type:`button`,className:`btn btn-outline-gray btn-sm`,onClick:()=>C(!1),children:`Cancel`}),(0,V.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-sm`,children:`Send Message`})]})]}),w&&(0,V.jsx)(`div`,{className:`success-toast-small`,children:`Message successfully delivered to teacher.`})]})]})]}),i===`timeline`&&(0,V.jsxs)(`div`,{className:`glass-panel timeline-full-card`,children:[(0,V.jsxs)(`div`,{className:`timeline-header-block`,children:[(0,V.jsx)(`h4`,{children:`Today's timeline`}),(0,V.jsx)(`p`,{children:`Thursday, 18 June 2026 - Nursery`})]}),(0,V.jsx)(`div`,{className:`timeline-stepper-list`,children:A.map((e,t)=>(0,V.jsxs)(`div`,{className:`stepper-item-row`,children:[(0,V.jsxs)(`div`,{className:`stepper-left-bullet`,children:[(0,V.jsx)(`div`,{className:`bullet-circle`}),t!==A.length-1&&(0,V.jsx)(`div`,{className:`bullet-connector-line`})]}),(0,V.jsxs)(`div`,{className:`stepper-right-body`,children:[(0,V.jsxs)(`div`,{className:`stepper-body-heading-row`,children:[(0,V.jsx)(`span`,{className:`stepper-time-lbl`,children:e.time}),(0,V.jsx)(`h5`,{children:e.title}),e.hasPhotos&&(0,V.jsx)(`span`,{className:`timeline-photos-tag`,children:`Photos`})]}),(0,V.jsx)(`p`,{className:`stepper-body-desc`,children:e.desc})]})]},t))})]}),i===`gallery`&&(0,V.jsxs)(`div`,{className:`glass-panel photo-gallery-full-card`,children:[(0,V.jsxs)(`div`,{className:`gallery-header-row`,children:[(0,V.jsx)(`div`,{className:`filter-pills-row`,children:[`All`,`Art & Craft`,`Story Time`,`Outdoor Play`,`Music`].map(e=>(0,V.jsx)(`button`,{onClick:()=>v(e),className:`filter-pill-item ${_===e?`active`:``}`,children:e},e))}),(0,V.jsxs)(`span`,{className:`gallery-meta-sub`,children:[`Only photos tagged with `,k,` are shown.`]})]}),(0,V.jsx)(`div`,{className:`gallery-images-layout-grid`,children:j.map(e=>(0,V.jsxs)(`div`,{className:`gallery-photo-item-card`,children:[(0,V.jsx)(`img`,{src:e.url,alt:e.desc,className:`gallery-photo-img-tag`}),(0,V.jsxs)(`div`,{className:`photo-floating-bottom-bar`,children:[(0,V.jsxs)(`span`,{className:`photo-tag-badge`,children:[`Tagged - `,k]}),(0,V.jsx)(`button`,{className:`photo-download-hover-btn`,title:`Download Photo`,children:(0,V.jsx)(Ao,{size:14,color:`white`})})]})]},e.id))})]}),i===`attendance`&&(0,V.jsxs)(`div`,{className:`attendance-view-wrapper`,children:[(0,V.jsxs)(`div`,{className:`attendance-stats-cards-row`,children:[(0,V.jsxs)(`div`,{className:`stats-metric-item-card`,children:[(0,V.jsxs)(`div`,{className:`metric-details-sec`,children:[(0,V.jsx)(`span`,{className:`card-lbl-txt`,children:`THIS MONTH`}),(0,V.jsx)(`h3`,{children:`94%`}),(0,V.jsx)(`p`,{children:`18 of 19 days`})]}),(0,V.jsx)(`div`,{className:`card-icon-box bg-green-lite`,children:(0,V.jsx)(yo,{size:18,color:`#059669`})})]}),(0,V.jsxs)(`div`,{className:`stats-metric-item-card`,children:[(0,V.jsxs)(`div`,{className:`metric-details-sec`,children:[(0,V.jsx)(`span`,{className:`card-lbl-txt`,children:`LAST MONTH`}),(0,V.jsx)(`h3`,{children:`91%`}),(0,V.jsx)(`p`,{children:`20 of 22 days`})]}),(0,V.jsx)(`div`,{className:`card-icon-box bg-blue-lite`,children:(0,V.jsx)(yo,{size:18,color:`#2563EB`})})]}),(0,V.jsxs)(`div`,{className:`stats-metric-item-card`,children:[(0,V.jsxs)(`div`,{className:`metric-details-sec`,children:[(0,V.jsx)(`span`,{className:`card-lbl-txt`,children:`YEAR TO DATE`}),(0,V.jsx)(`h3`,{children:`93%`}),(0,V.jsx)(`p`,{children:`Above class average`})]}),(0,V.jsx)(`div`,{className:`card-icon-box bg-blue-lite`,children:(0,V.jsx)(yo,{size:18,color:`#2563EB`})})]})]}),(0,V.jsxs)(`div`,{className:`glass-panel attendance-calendar-card`,children:[(0,V.jsx)(`h4`,{className:`calendar-header-title`,children:`June 2026`}),(0,V.jsxs)(`div`,{className:`calendar-weekly-grid`,children:[[`S`,`M`,`T`,`W`,`T`,`F`,`S`].map((e,t)=>(0,V.jsx)(`div`,{className:`calendar-week-header-cell`,children:e},t)),(0,V.jsx)(`div`,{className:`calendar-day-cell empty`}),Array.from({length:30},(e,t)=>t+1).map(e=>{let t=[6,7,13,14,20,21,27,28].includes(e),n=[3,4,10,11,17,18].includes(e);return(0,V.jsx)(`div`,{className:`calendar-day-cell ${!t&&!n?`present`:``}`,children:(0,V.jsx)(`span`,{children:e})},e)})]})]})]}),i===`notifications`&&(0,V.jsxs)(`div`,{className:`glass-panel notifications-feed-card`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`1.5rem`},children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{style:{fontSize:`1.25rem`,fontWeight:800,color:`#0F172A`,marginBottom:`0.25rem`},children:`Notifications`}),(0,V.jsxs)(`p`,{style:{fontSize:`0.85rem`,color:`#64748B`},children:[l.filter(e=>e.readStatus===`unread`).length,` unread notifications`]})]}),l.filter(e=>e.readStatus===`unread`).length>0&&(0,V.jsx)(`button`,{className:`btn btn-outline`,style:{fontSize:`0.8rem`,padding:`0.4rem 1rem`,borderRadius:`8px`},onClick:()=>l.filter(e=>e.readStatus===`unread`).forEach(e=>D(e.id)),children:`Mark all as read`})]}),(0,V.jsx)(`div`,{className:`notif-feed-list`,children:l.length===0?(0,V.jsxs)(`div`,{style:{textAlign:`center`,padding:`3rem`,color:`#94A3B8`},children:[(0,V.jsx)(vo,{size:32,style:{margin:`0 auto 1rem`,opacity:.4}}),(0,V.jsx)(`p`,{style:{fontSize:`0.9rem`},children:`No notifications yet.`})]}):l.map(e=>{let t=()=>e.type===`tag`?`📸`:e.type===`photo`?`🖼️`:e.type===`attendance`?`✅`:e.type===`event`?`📅`:`📢`,n=()=>e.type===`tag`?`Child Tagged in Photo`:e.type===`photo`?`New Photos Uploaded`:e.type===`attendance`?`Attendance Marked`:e.type===`event`?`Event Reminder`:`School Announcement`,r=e=>{if(!e)return``;try{let t=new Date(e),n=new Date-t,r=Math.floor(n/6e4);if(r<1)return`Just now`;if(r<60)return`${r}m ago`;let i=Math.floor(r/60);return i<24?`${i}h ago`:t.toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`})}catch{return e}},i=e.readStatus===`unread`;return(0,V.jsxs)(`div`,{className:`notif-feed-item-row`,onClick:()=>i&&D(e.id),style:{cursor:i?`pointer`:`default`,background:i?`#F0F7FF`:`#FFFFFF`,borderLeft:i?`3px solid #4F9CF9`:`3px solid transparent`,transition:`all 0.2s`},children:[(0,V.jsx)(`div`,{className:`notif-feed-icon-circle`,style:{background:e.type===`tag`?`#FFF7ED`:e.type===`attendance`?`#ECFDF5`:`#EFF6FF`,fontSize:`1.1rem`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:t()}),(0,V.jsxs)(`div`,{className:`notif-feed-details`,children:[(0,V.jsx)(`h5`,{style:{color:i?`#0F172A`:`#475569`},children:n()}),(0,V.jsx)(`p`,{children:e.message})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`flex-end`,gap:`0.4rem`,flexShrink:0},children:[(0,V.jsx)(`span`,{className:`notif-feed-time-label`,children:r(e.createdAt||e.time)}),i&&(0,V.jsx)(`span`,{style:{width:`8px`,height:`8px`,borderRadius:`50%`,background:`#4F9CF9`,display:`block`}})]})]},e.id)})})]}),i===`profile`&&(0,V.jsx)(`div`,{className:`glass-panel parent-profile-details-card`,children:(0,V.jsxs)(`div`,{className:`profile-details-grid`,children:[(0,V.jsxs)(`div`,{className:`profile-details-sec`,children:[(0,V.jsx)(`h4`,{children:`👤 Parent Profile`}),(0,V.jsxs)(`div`,{className:`details-info-row`,children:[(0,V.jsx)(`span`,{children:`Parent Name:`}),(0,V.jsx)(`strong`,{children:e?.name||`Neha Patel`})]}),(0,V.jsxs)(`div`,{className:`details-info-row`,children:[(0,V.jsx)(`span`,{children:`Email Address:`}),(0,V.jsx)(`strong`,{children:e?.email||`parent@kidvista.com`})]}),(0,V.jsxs)(`div`,{className:`details-info-row`,children:[(0,V.jsx)(`span`,{children:`Workspace Role:`}),(0,V.jsx)(`strong`,{children:`Parent Portal`})]})]}),(0,V.jsxs)(`div`,{className:`profile-details-sec`,children:[(0,V.jsx)(`h4`,{children:`👶 Student Details`}),(0,V.jsxs)(`div`,{className:`details-info-row`,children:[(0,V.jsx)(`span`,{children:`Child's Name:`}),(0,V.jsx)(`strong`,{children:a?.childName||`Ishita Patel`})]}),(0,V.jsxs)(`div`,{className:`details-info-row`,children:[(0,V.jsx)(`span`,{children:`Preschool Classroom:`}),(0,V.jsx)(`strong`,{children:a?.classroom||`Nursery`})]}),(0,V.jsxs)(`div`,{className:`details-info-row`,children:[(0,V.jsx)(`span`,{children:`Allergies:`}),(0,V.jsx)(`strong`,{className:`text-red`,children:a?.allergies||`None`})]}),(0,V.jsxs)(`div`,{className:`details-info-row`,children:[(0,V.jsx)(`span`,{children:`Medical Notes:`}),(0,V.jsx)(`strong`,{children:a?.medicalNotes||`None`})]})]})]})})]})})]}),(0,V.jsx)(`style`,{children:`
        /* Global Portal Header styles */
        .parent-portal-header {
          height: 70px;
          background: #FFFFFF;
          border-bottom: 1px solid #F1F5F9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          font-family: 'Outfit', sans-serif;
        }

        .header-search-box {
          display: flex;
          align-items: center;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 0.5rem 1rem;
          width: 380px;
          gap: 0.5rem;
        }

        .search-icon {
          color: #94A3B8;
        }

        .search-input {
          border: none;
          background: transparent;
          outline: none;
          width: 100%;
          font-size: 0.9rem;
          color: #1F2937;
          font-family: 'Outfit', sans-serif;
        }

        .header-right-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .parent-portal-pill {
          background: #F1F5F9;
          color: #475569;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }

        .bell-notification-icon {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .bell-red-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #F59E0B;
        }

        .parent-profile-widget {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .parent-avatar-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #EFF6FF;
          color: #2563EB;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
        }

        .parent-profile-info {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .profile-name-span {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0F172A;
        }

        .profile-relation-span {
          font-size: 0.75rem;
          color: #64748B;
          font-weight: 500;
        }

        /* Error alert */
        .error-alert-box {
          background: #FEF2F2;
          border: 1px solid #FCA5A5;
          color: #DC2626;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .pending-approval-card-styled {
          padding: 4rem 2rem;
          border-left: 5px solid #2563EB;
          text-align: center;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
        }

        .pending-icon {
          font-size: 4rem;
          display: block;
          margin-bottom: 1.5rem;
        }

        .pending-approval-card-styled h2 {
          font-size: 1.5rem;
          color: #0F172A;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .pending-approval-card-styled p {
          max-width: 500px;
          margin: 0 auto;
          font-size: 0.95rem;
          color: #64748B;
          line-height: 1.5;
        }

        /* Greeting heading row */
        .parent-welcome-greeting-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .greeting-text h2 {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.025em;
          margin-bottom: 0.15rem;
        }

        .greeting-text p {
          font-size: 0.95rem;
          color: #64748B;
          font-weight: 500;
        }

        .present-badge-green {
          background-color: #ECFDF5;
          color: #059669;
          font-weight: 700;
          font-size: 0.75rem;
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
        }

        /* Tabs bar styles */
        .portal-tabs-container {
          display: flex;
          background-color: #F1F5F9;
          padding: 0.25rem;
          border-radius: 12px;
          gap: 0.25rem;
          margin-bottom: 2rem;
          width: fit-content;
        }

        .portal-tab-item {
          padding: 0.5rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #64748B;
          border: none;
          background: transparent;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
        }

        .portal-tab-item:hover {
          color: #0F172A;
        }

        .portal-tab-item.active {
          background: #FFFFFF;
          color: #0F172A;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        /* Child Summary Banner */
        .child-summary-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          border-radius: 16px;
          border: 1px solid #F1F5F9;
          padding: 2.25rem 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.01);
        }

        @media (max-width: 768px) {
          .child-summary-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
        }

        .banner-left-profile {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .child-avatar-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #EFF6FF;
          color: #2563EB;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.35rem;
        }

        .child-details-meta {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .child-label-heading {
          font-size: 0.7rem;
          font-weight: 700;
          color: #94A3B8;
          letter-spacing: 0.05em;
        }

        .child-details-meta h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0.15rem 0;
        }

        .child-details-meta p {
          font-size: 0.9rem;
          color: #64748B;
          font-weight: 500;
        }

        .banner-right-stats {
          display: flex;
          gap: 3rem;
        }

        .meta-stat-item {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          line-height: 1.2;
        }

        @media (max-width: 768px) {
          .banner-right-stats {
            width: 100%;
            justify-content: space-between;
          }
          .meta-stat-item {
            align-items: flex-start;
          }
        }

        .meta-stat-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94A3B8;
        }

        .meta-stat-value {
          font-size: 1.75rem;
          font-weight: 800;
        }

        .text-green { color: #059669; }
        .text-blue { color: #2563EB; }

        /* 4 Quick Metrics Grid */
        .overview-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .metric-box-card {
          background: white;
          border-radius: 16px;
          border: 1px solid #F1F5F9;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .metric-box-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.03);
        }

        .card-details-block {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .card-lbl-txt {
          font-size: 0.7rem;
          font-weight: 700;
          color: #94A3B8;
          letter-spacing: 0.05em;
        }

        .card-details-block h3 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0.25rem 0;
        }

        .card-details-block p {
          font-size: 0.8rem;
          color: #64748B;
          font-weight: 500;
        }

        .card-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bg-blue-lite { background-color: #EFF6FF; }
        .bg-green-lite { background-color: #ECFDF5; }
        .bg-orange-lite { background-color: #FFF7ED; }

        /* Overview Split Row Columns */
        .overview-split-row {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 992px) {
          .overview-split-row {
            grid-template-columns: 1fr;
          }
        }

        .box-section-heading {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0.15rem;
        }

        .box-section-subtitle {
          font-size: 0.8rem;
          color: #94A3B8;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        /* Timeline Preview List */
        .timeline-preview-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .timeline-preview-item {
          display: flex;
          gap: 1.25rem;
        }

        .item-time-stamp {
          width: 75px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #2563EB;
          flex-shrink: 0;
        }

        .item-text-contents h5 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.25rem;
        }

        .item-text-contents p {
          font-size: 0.85rem;
          color: #64748B;
          line-height: 1.4;
        }

        /* Teacher note card styling */
        .teacher-note-card-styled {
          background: white;
          border-radius: 16px;
        }

        .teacher-note-body-box {
          background: #F8FAFC;
          border-radius: 12px;
          padding: 1.25rem;
          margin-bottom: 1.25rem;
          border: 1px solid #F1F5F9;
        }

        .teacher-note-body-box p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #475569;
          font-style: italic;
        }

        .teacher-note-actions-row {
          display: flex;
          gap: 0.75rem;
        }

        .btn-note-action {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid #E2E8F0;
          background: white;
          color: #475569;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-note-action:hover {
          background: #F8FAFC;
          border-color: #CBD5E1;
        }

        .btn-note-action.thanked {
          background: #FEF2F2;
          border-color: #FCA5A5;
          color: #EF4444;
        }

        .teacher-reply-textarea {
          width: 100%;
          height: 80px;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.875rem;
          font-family: 'Outfit', sans-serif;
          outline: none;
          resize: none;
          margin-top: 0.5rem;
        }

        .teacher-reply-textarea:focus {
          border-color: #2563EB;
        }

        .success-toast-small {
          background-color: #ECFDF5;
          color: #059669;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.5rem;
          border-radius: 6px;
          margin-top: 0.75rem;
          text-align: center;
        }

        /* Timeline View Stepper */
        .timeline-header-block {
          border-bottom: 1px dashed #E2E8F0;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }

        .timeline-header-block h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
        }

        .timeline-header-block p {
          font-size: 0.85rem;
          color: #94A3B8;
          font-weight: 600;
          margin-top: 0.15rem;
        }

        .timeline-stepper-list {
          display: flex;
          flex-direction: column;
          padding-left: 0.5rem;
        }

        .stepper-item-row {
          display: flex;
          gap: 1.5rem;
        }

        .stepper-left-bullet {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 16px;
          flex-shrink: 0;
        }

        .bullet-circle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #2563EB;
          margin-top: 0.35rem;
        }

        .bullet-connector-line {
          width: 2px;
          flex-grow: 1;
          background-color: #E2E8F0;
          margin: 0.35rem 0;
          min-height: 50px;
        }

        .stepper-right-body {
          padding-bottom: 1.5rem;
          flex-grow: 1;
        }

        .stepper-body-heading-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.25rem;
        }

        .stepper-time-lbl {
          font-size: 0.85rem;
          font-weight: 700;
          color: #94A3B8;
        }

        .stepper-body-heading-row h5 {
          font-size: 1rem;
          font-weight: 700;
          color: #0F172A;
        }

        .timeline-photos-tag {
          font-size: 0.65rem;
          font-weight: 700;
          background-color: #EFF6FF;
          color: #2563EB;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }

        .stepper-body-desc {
          font-size: 0.9rem;
          color: #475569;
        }

        /* Photo Gallery View styles */
        .gallery-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px dashed #E2E8F0;
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .gallery-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }

        .filter-pills-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-pill-item {
          padding: 0.4rem 0.85rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
          border: 1px solid #E2E8F0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-pill-item:hover {
          background-color: #F8FAFC;
        }

        .filter-pill-item.active {
          background-color: #EFF6FF;
          color: #2563EB;
          border-color: #BFDBFE;
        }

        .gallery-meta-sub {
          font-size: 0.8rem;
          color: #94A3B8;
          font-weight: 600;
        }

        .gallery-images-layout-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
        }

        .gallery-photo-item-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
          aspect-ratio: 4 / 3;
        }

        .gallery-photo-img-tag {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .photo-floating-bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
          padding: 0.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .photo-tag-badge {
          font-size: 0.7rem;
          font-weight: 700;
          color: white;
          background-color: rgba(255,255,255,0.25);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }

        .photo-download-hover-btn {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.2);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .photo-download-hover-btn:hover {
          background-color: rgba(255,255,255,0.4);
        }

        /* Attendance stats cards */
        .attendance-stats-cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .attendance-stats-cards-row {
            grid-template-columns: 1fr;
          }
        }

        .stats-metric-item-card {
          background: white;
          border-radius: 16px;
          border: 1px solid #F1F5F9;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.01);
        }

        .metric-details-sec h3 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0.25rem 0;
        }

        .metric-details-sec p {
          font-size: 0.8rem;
          color: #64748B;
          font-weight: 500;
        }

        /* Attendance calendar */
        .attendance-calendar-card {
          background: white;
          border-radius: 16px;
          padding: 2.25rem;
        }

        .calendar-header-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 2rem;
          text-align: left;
        }

        .calendar-weekly-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.75rem;
          text-align: center;
        }

        .calendar-week-header-cell {
          font-size: 0.85rem;
          font-weight: 700;
          color: #94A3B8;
          padding-bottom: 0.75rem;
        }

        .calendar-day-cell {
          aspect-ratio: 1.6;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          font-weight: 600;
          color: #475569;
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
        }

        .calendar-day-cell.empty {
          border: none;
          background: transparent;
        }

        .calendar-day-cell.present {
          background-color: #D1FAE5;
          color: #059669;
          border-color: #A7F3D0;
        }

        /* Notifications feed */
        .notifications-feed-card {
          background: white;
          border-radius: 16px;
        }

        .notif-feed-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .notif-feed-item-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px dashed #F1F5F9;
        }

        .notif-feed-item-row:last-child {
          border: none;
          padding-bottom: 0;
        }

        .notif-feed-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #EFF6FF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .notif-feed-details {
          flex-grow: 1;
        }

        .notif-feed-details h5 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.15rem;
        }

        .notif-feed-details p {
          font-size: 0.85rem;
          color: #64748B;
        }

        .notif-feed-time-label {
          font-size: 0.8rem;
          color: #94A3B8;
          font-weight: 600;
        }

        /* Profile details card */
        .parent-profile-details-card {
          background: white;
          border-radius: 16px;
          padding: 2.25rem;
        }

        .profile-details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        @media (max-width: 768px) {
          .profile-details-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .profile-details-sec h4 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 1.5rem;
          border-bottom: 1.5px solid #F1F5F9;
          padding-bottom: 0.5rem;
        }

        .details-info-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid #F8FAFC;
          font-size: 0.9rem;
        }

        .details-info-row span {
          color: #64748B;
          font-weight: 500;
        }

        .details-info-row strong {
          color: #1F2937;
          font-weight: 700;
        }

        .text-red { color: #DC2626; }
      `})]})},ks=()=>(0,V.jsxs)(Ft,{children:[(0,V.jsx)(F,{path:`/`,element:(0,V.jsx)(ss,{})}),(0,V.jsx)(F,{path:`/login`,element:(0,V.jsx)(cs,{})}),(0,V.jsx)(F,{path:`/signup`,element:(0,V.jsx)(ls,{})}),(0,V.jsx)(F,{path:`/admin`,element:(0,V.jsx)(oo,{allowedRoles:[`admin`],children:(0,V.jsx)(xs,{})})}),(0,V.jsx)(F,{path:`/admin/students`,element:(0,V.jsx)(oo,{allowedRoles:[`admin`],children:(0,V.jsx)(Ss,{})})}),(0,V.jsx)(F,{path:`/admin/teachers`,element:(0,V.jsx)(oo,{allowedRoles:[`admin`],children:(0,V.jsx)(Cs,{})})}),(0,V.jsx)(F,{path:`/admin/parents`,element:(0,V.jsx)(oo,{allowedRoles:[`admin`],children:(0,V.jsx)(ws,{})})}),(0,V.jsx)(F,{path:`/admin/approvals`,element:(0,V.jsx)(oo,{allowedRoles:[`admin`],children:(0,V.jsx)(Ts,{})})}),(0,V.jsx)(F,{path:`/admin/announcements`,element:(0,V.jsx)(oo,{allowedRoles:[`admin`],children:(0,V.jsx)(Es,{})})}),(0,V.jsx)(F,{path:`/teacher`,element:(0,V.jsx)(oo,{allowedRoles:[`teacher`],children:(0,V.jsx)(Ds,{})})}),(0,V.jsx)(F,{path:`/teacher/upload`,element:(0,V.jsx)(oo,{allowedRoles:[`teacher`],children:(0,V.jsx)(Ds,{})})}),(0,V.jsx)(F,{path:`/teacher/tagging`,element:(0,V.jsx)(oo,{allowedRoles:[`teacher`],children:(0,V.jsx)(Ds,{})})}),(0,V.jsx)(F,{path:`/teacher/activities`,element:(0,V.jsx)(oo,{allowedRoles:[`teacher`],children:(0,V.jsx)(Ds,{})})}),(0,V.jsx)(F,{path:`/teacher/attendance`,element:(0,V.jsx)(oo,{allowedRoles:[`teacher`],children:(0,V.jsx)(Ds,{})})}),(0,V.jsx)(F,{path:`/teacher/notifications`,element:(0,V.jsx)(oo,{allowedRoles:[`teacher`],children:(0,V.jsx)(Ds,{})})}),(0,V.jsx)(F,{path:`/parent`,element:(0,V.jsx)(oo,{allowedRoles:[`parent`],children:(0,V.jsx)(Os,{})})}),(0,V.jsx)(F,{path:`/parent/my-child`,element:(0,V.jsx)(oo,{allowedRoles:[`parent`],children:(0,V.jsx)(Os,{})})}),(0,V.jsx)(F,{path:`/parent/gallery`,element:(0,V.jsx)(oo,{allowedRoles:[`parent`],children:(0,V.jsx)(Os,{})})}),(0,V.jsx)(F,{path:`/parent/attendance`,element:(0,V.jsx)(oo,{allowedRoles:[`parent`],children:(0,V.jsx)(Os,{})})}),(0,V.jsx)(F,{path:`/parent/notifications`,element:(0,V.jsx)(oo,{allowedRoles:[`parent`],children:(0,V.jsx)(Os,{})})}),(0,V.jsx)(F,{path:`/parent/profile`,element:(0,V.jsx)(oo,{allowedRoles:[`parent`],children:(0,V.jsx)(Os,{})})}),(0,V.jsx)(F,{path:`*`,element:(0,V.jsx)(Nt,{to:`/`,replace:!0})})]});function As(){return(0,V.jsx)(Tn,{children:(0,V.jsx)(ao,{children:(0,V.jsx)(ks,{})})})}to.createRoot(document.getElementById(`root`)).render((0,V.jsx)(S.StrictMode,{children:(0,V.jsx)(As,{})}));