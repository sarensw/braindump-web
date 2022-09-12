import { r as react, c as createCommonjsModule } from './common/index-ae389540.js';
import { r as reactDom } from './common/index-e30e5fe3.js';

function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=react.useState,m=react.useEffect,n=react.useLayoutEffect,p=react.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c});},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c});})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return !k(a,d)}catch(f){return !0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;var useSyncExternalStore=void 0!==react.useSyncExternalStore?react.useSyncExternalStore:u;

var useSyncExternalStoreShim_production_min = {
	useSyncExternalStore: useSyncExternalStore
};

var shim = createCommonjsModule(function (module) {

{
  module.exports = useSyncExternalStoreShim_production_min;
}
});

function p$1(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q$1="function"===typeof Object.is?Object.is:p$1,r$1=shim.useSyncExternalStore,t$1=react.useRef,u$1=react.useEffect,v=react.useMemo,w=react.useDebugValue;
var useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t$1(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f;}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q$1(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return [function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r$1(a,c[0],c[1]);
u$1(function(){f.hasValue=!0;f.value=d;},[d]);w(d);return d};

var withSelector_production_min = {
	useSyncExternalStoreWithSelector: useSyncExternalStoreWithSelector
};

var withSelector = createCommonjsModule(function (module) {

{
  module.exports = withSelector_production_min;
}
});

// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

const getBatch = () => batch;

const ReactReduxContext = /*#__PURE__*/react.createContext(null);

/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */
function useReduxContext() {
  const contextValue = react.useContext(ReactReduxContext);

  return contextValue;
}

const notInitialized = () => {
  throw new Error('uSES not initialized!');
};

let useSyncExternalStoreWithSelector$1 = notInitialized;
const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector$1 = fn;
};

const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : () => react.useContext(context);
  return function useSelector(selector, equalityFn = refEquality) {

    const {
      store,
      subscription,
      getServerState
    } = useReduxContext$1();
    const selectedState = useSyncExternalStoreWithSelector$1(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);
    react.useDebugValue(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

const useSelector = /*#__PURE__*/createSelectorHook();

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h$1=b?Symbol.for("react.provider"):60109,k$1=b?Symbol.for("react.context"):60110,l$1=b?Symbol.for("react.async_mode"):60111,m$1=b?Symbol.for("react.concurrent_mode"):60111,n$1=b?Symbol.for("react.forward_ref"):60112,p$2=b?Symbol.for("react.suspense"):60113,q$2=b?
Symbol.for("react.suspense_list"):60120,r$2=b?Symbol.for("react.memo"):60115,t$2=b?Symbol.for("react.lazy"):60116,v$1=b?Symbol.for("react.block"):60121,w$1=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l$1:case m$1:case e:case g:case f:case p$2:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t$2:case r$2:case h$1:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m$1}var AsyncMode=l$1;var ConcurrentMode=m$1;var ContextConsumer=k$1;var ContextProvider=h$1;var Element=c;var ForwardRef=n$1;var Fragment=e;var Lazy=t$2;var Memo=r$2;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p$2;var isAsyncMode=function(a){return A(a)||z(a)===l$1};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k$1};var isContextProvider=function(a){return z(a)===h$1};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n$1};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t$2};
var isMemo=function(a){return z(a)===r$2};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p$2};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m$1||a===g||a===f||a===p$2||a===q$2||"object"===typeof a&&null!==a&&(a.$$typeof===t$2||a.$$typeof===r$2||a.$$typeof===h$1||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w$1||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v$1)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1=Symbol.for("react.element"),c$1=Symbol.for("react.portal"),d$1=Symbol.for("react.fragment"),e$1=Symbol.for("react.strict_mode"),f$1=Symbol.for("react.profiler"),g$1=Symbol.for("react.provider"),h$2=Symbol.for("react.context"),k$2=Symbol.for("react.server_context"),l$2=Symbol.for("react.forward_ref"),m$2=Symbol.for("react.suspense"),n$2=Symbol.for("react.suspense_list"),p$3=Symbol.for("react.memo"),q$3=Symbol.for("react.lazy"),t$3=Symbol.for("react.offscreen"),u$2;u$2=Symbol.for("react.module.reference");
function v$2(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b$1:switch(a=a.type,a){case d$1:case f$1:case e$1:case m$2:case n$2:return a;default:switch(a=a&&a.$$typeof,a){case k$2:case h$2:case l$2:case q$3:case p$3:case g$1:return a;default:return r}}case c$1:return r}}}var ContextConsumer$1=h$2;var ContextProvider$1=g$1;var Element$1=b$1;var ForwardRef$1=l$2;var Fragment$1=d$1;var Lazy$1=q$3;var Memo$1=p$3;var Portal$1=c$1;var Profiler$1=f$1;var StrictMode$1=e$1;var Suspense$1=m$2;
var SuspenseList=n$2;var isAsyncMode$1=function(){return !1};var isConcurrentMode$1=function(){return !1};var isContextConsumer$1=function(a){return v$2(a)===h$2};var isContextProvider$1=function(a){return v$2(a)===g$1};var isElement$1=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b$1};var isForwardRef$1=function(a){return v$2(a)===l$2};var isFragment$1=function(a){return v$2(a)===d$1};var isLazy$1=function(a){return v$2(a)===q$3};var isMemo$1=function(a){return v$2(a)===p$3};
var isPortal$1=function(a){return v$2(a)===c$1};var isProfiler$1=function(a){return v$2(a)===f$1};var isStrictMode$1=function(a){return v$2(a)===e$1};var isSuspense$1=function(a){return v$2(a)===m$2};var isSuspenseList=function(a){return v$2(a)===n$2};
var isValidElementType$1=function(a){return "string"===typeof a||"function"===typeof a||a===d$1||a===f$1||a===e$1||a===m$2||a===n$2||a===t$3||"object"===typeof a&&null!==a&&(a.$$typeof===q$3||a.$$typeof===p$3||a.$$typeof===g$1||a.$$typeof===h$2||a.$$typeof===l$2||a.$$typeof===u$2||void 0!==a.getModuleId)?!0:!1};var typeOf$1=v$2;

var reactIs_production_min$1 = {
	ContextConsumer: ContextConsumer$1,
	ContextProvider: ContextProvider$1,
	Element: Element$1,
	ForwardRef: ForwardRef$1,
	Fragment: Fragment$1,
	Lazy: Lazy$1,
	Memo: Memo$1,
	Portal: Portal$1,
	Profiler: Profiler$1,
	StrictMode: StrictMode$1,
	Suspense: Suspense$1,
	SuspenseList: SuspenseList,
	isAsyncMode: isAsyncMode$1,
	isConcurrentMode: isConcurrentMode$1,
	isContextConsumer: isContextConsumer$1,
	isContextProvider: isContextProvider$1,
	isElement: isElement$1,
	isForwardRef: isForwardRef$1,
	isFragment: isFragment$1,
	isLazy: isLazy$1,
	isMemo: isMemo$1,
	isPortal: isPortal$1,
	isProfiler: isProfiler$1,
	isStrictMode: isStrictMode$1,
	isSuspense: isSuspense$1,
	isSuspenseList: isSuspenseList,
	isValidElementType: isValidElementType$1,
	typeOf: typeOf$1
};

var reactIs$1 = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min$1;
}
});

// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  const batch = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}

// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file

const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
const useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;

function Provider({
  store,
  context,
  children,
  serverState
}) {
  const contextValue = react.useMemo(() => {
    const subscription = createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined
    };
  }, [store, serverState]);
  const previousState = react.useMemo(() => store.getState(), [store]);
  useIsomorphicLayoutEffect(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context = ReactReduxContext) {
  const useReduxContext$1 = // @ts-ignore
  context === ReactReduxContext ? useReduxContext : () => react.useContext(context);
  return function useStore() {
    const {
      store
    } = useReduxContext$1(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

const useStore = /*#__PURE__*/createStoreHook();

/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context = ReactReduxContext) {
  const useStore$1 = // @ts-ignore
  context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch() {
    const store = useStore$1(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

const useDispatch = /*#__PURE__*/createDispatchHook();

// The primary entry point assumes we're working with standard ReactDOM/RN, but
initializeUseSelector(withSelector.useSyncExternalStoreWithSelector);
// with standard React renderers (ReactDOM, React Native)

setBatch(reactDom.unstable_batchedUpdates);

export { Provider, useDispatch, useSelector };
