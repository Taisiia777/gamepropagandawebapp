import {
  require_react
} from "./chunk-2CLD7BNN.js";
import {
  __commonJS
} from "./chunk-WOOG5QLI.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/shallow-equal/arrays/index.js
var require_arrays = __commonJS({
  "node_modules/shallow-equal/arrays/index.js"(exports, module) {
    "use strict";
    function shallowEqualArrays(arrA, arrB) {
      if (arrA === arrB) {
        return true;
      }
      if (!arrA || !arrB) {
        return false;
      }
      var len = arrA.length;
      if (arrB.length !== len) {
        return false;
      }
      for (var i = 0; i < len; i++) {
        if (arrA[i] !== arrB[i]) {
          return false;
        }
      }
      return true;
    }
    module.exports = shallowEqualArrays;
  }
});

// node_modules/section-iterator/dist/index.js
var require_dist = __commonJS({
  "node_modules/section-iterator/dist/index.js"(exports, module) {
    "use strict";
    var _slicedToArray = /* @__PURE__ */ function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    module.exports = function(_ref) {
      var data = _ref.data;
      var multiSection = _ref.multiSection;
      function nextNonEmptySectionIndex(sectionIndex) {
        if (sectionIndex === null) {
          sectionIndex = 0;
        } else {
          sectionIndex++;
        }
        while (sectionIndex < data.length && data[sectionIndex] === 0) {
          sectionIndex++;
        }
        return sectionIndex === data.length ? null : sectionIndex;
      }
      function prevNonEmptySectionIndex(sectionIndex) {
        if (sectionIndex === null) {
          sectionIndex = data.length - 1;
        } else {
          sectionIndex--;
        }
        while (sectionIndex >= 0 && data[sectionIndex] === 0) {
          sectionIndex--;
        }
        return sectionIndex === -1 ? null : sectionIndex;
      }
      function next(position) {
        var _position = _slicedToArray(position, 2);
        var sectionIndex = _position[0];
        var itemIndex = _position[1];
        if (multiSection) {
          if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
            sectionIndex = nextNonEmptySectionIndex(sectionIndex);
            if (sectionIndex === null) {
              return [null, null];
            }
            return [sectionIndex, 0];
          }
          return [sectionIndex, itemIndex + 1];
        }
        if (data === 0 || itemIndex === data - 1) {
          return [null, null];
        }
        if (itemIndex === null) {
          return [null, 0];
        }
        return [null, itemIndex + 1];
      }
      function prev(position) {
        var _position2 = _slicedToArray(position, 2);
        var sectionIndex = _position2[0];
        var itemIndex = _position2[1];
        if (multiSection) {
          if (itemIndex === null || itemIndex === 0) {
            sectionIndex = prevNonEmptySectionIndex(sectionIndex);
            if (sectionIndex === null) {
              return [null, null];
            }
            return [sectionIndex, data[sectionIndex] - 1];
          }
          return [sectionIndex, itemIndex - 1];
        }
        if (data === 0 || itemIndex === 0) {
          return [null, null];
        }
        if (itemIndex === null) {
          return [null, data - 1];
        }
        return [null, itemIndex - 1];
      }
      function isLast(position) {
        return next(position)[1] === null;
      }
      return {
        next,
        prev,
        isLast
      };
    };
  }
});

// node_modules/react-themeable/node_modules/object-assign/index.js
var require_object_assign2 = __commonJS({
  "node_modules/react-themeable/node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function ToObject(val) {
      if (val == null) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function ownEnumerableKeys(obj) {
      var keys = Object.getOwnPropertyNames(obj);
      if (Object.getOwnPropertySymbols) {
        keys = keys.concat(Object.getOwnPropertySymbols(obj));
      }
      return keys.filter(function(key) {
        return propIsEnumerable.call(obj, key);
      });
    }
    module.exports = Object.assign || function(target, source) {
      var from;
      var keys;
      var to = ToObject(target);
      for (var s = 1; s < arguments.length; s++) {
        from = arguments[s];
        keys = ownEnumerableKeys(Object(from));
        for (var i = 0; i < keys.length; i++) {
          to[keys[i]] = from[keys[i]];
        }
      }
      return to;
    };
  }
});

// node_modules/react-themeable/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/react-themeable/dist/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _slicedToArray = /* @__PURE__ */ function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    var _objectAssign = require_object_assign2();
    var _objectAssign2 = _interopRequireDefault(_objectAssign);
    var truthy = function truthy2(x) {
      return x;
    };
    exports["default"] = function(input) {
      var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];
      var _ref2 = _slicedToArray(_ref, 2);
      var theme = _ref2[0];
      var classNameDecorator = _ref2[1];
      return function(key) {
        for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          names[_key - 1] = arguments[_key];
        }
        var styles = names.map(function(name) {
          return theme[name];
        }).filter(truthy);
        return typeof styles[0] === "string" || typeof classNameDecorator === "function" ? { key, className: classNameDecorator ? classNameDecorator.apply(void 0, _toConsumableArray(styles)) : styles.join(" ") } : { key, style: _objectAssign2["default"].apply(void 0, [{}].concat(_toConsumableArray(styles))) };
      };
    };
    module.exports = exports["default"];
  }
});

// node_modules/react-autosuggest/dist/compareObjects.js
var require_compareObjects = __commonJS({
  "node_modules/react-autosuggest/dist/compareObjects.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = compareObjects;
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function compareObjects(objA, objB) {
      var keys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (objA === objB) {
        return false;
      }
      var aKeys = Object.keys(objA);
      var bKeys = Object.keys(objB);
      if (aKeys.length !== bKeys.length) {
        return true;
      }
      var keysMap = {};
      var i, len;
      for (i = 0, len = keys.length; i < len; i++) {
        keysMap[keys[i]] = true;
      }
      for (i = 0, len = aKeys.length; i < len; i++) {
        var key = aKeys[i];
        var aValue = objA[key];
        var bValue = objB[key];
        if (aValue === bValue) {
          continue;
        }
        if (!keysMap[key] || aValue === null || bValue === null || _typeof(aValue) !== "object" || _typeof(bValue) !== "object") {
          return true;
        }
        var aValueKeys = Object.keys(aValue);
        var bValueKeys = Object.keys(bValue);
        if (aValueKeys.length !== bValueKeys.length) {
          return true;
        }
        for (var n = 0, length = aValueKeys.length; n < length; n++) {
          var aValueKey = aValueKeys[n];
          if (aValue[aValueKey] !== bValue[aValueKey]) {
            return true;
          }
        }
      }
      return false;
    }
  }
});

// node_modules/react-autosuggest/dist/SectionTitle.js
var require_SectionTitle = __commonJS({
  "node_modules/react-autosuggest/dist/SectionTitle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _compareObjects = _interopRequireDefault(require_compareObjects());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _createSuper(Derived) {
      return function() {
        var Super = _getPrototypeOf(Derived), result;
        if (_isNativeReflectConstruct()) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SectionTitle = function(_Component) {
      _inherits(SectionTitle2, _Component);
      var _super = _createSuper(SectionTitle2);
      function SectionTitle2() {
        _classCallCheck(this, SectionTitle2);
        return _super.apply(this, arguments);
      }
      _createClass(SectionTitle2, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          return (0, _compareObjects["default"])(nextProps, this.props);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props, section = _this$props.section, renderSectionTitle = _this$props.renderSectionTitle, theme = _this$props.theme, sectionKeyPrefix = _this$props.sectionKeyPrefix;
          var sectionTitle = renderSectionTitle(section);
          if (!sectionTitle) {
            return null;
          }
          return _react["default"].createElement("div", theme("".concat(sectionKeyPrefix, "title"), "sectionTitle"), sectionTitle);
        }
      }]);
      return SectionTitle2;
    }(_react.Component);
    exports["default"] = SectionTitle;
    _defineProperty(SectionTitle, "propTypes", {
      section: _propTypes["default"].any.isRequired,
      renderSectionTitle: _propTypes["default"].func.isRequired,
      theme: _propTypes["default"].func.isRequired,
      sectionKeyPrefix: _propTypes["default"].string.isRequired
    });
  }
});

// node_modules/react-autosuggest/dist/Item.js
var require_Item = __commonJS({
  "node_modules/react-autosuggest/dist/Item.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _compareObjects = _interopRequireDefault(require_compareObjects());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _createSuper(Derived) {
      return function() {
        var Super = _getPrototypeOf(Derived), result;
        if (_isNativeReflectConstruct()) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var Item = function(_Component) {
      _inherits(Item2, _Component);
      var _super = _createSuper(Item2);
      function Item2() {
        var _this;
        _classCallCheck(this, Item2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "storeItemReference", function(item) {
          if (item !== null) {
            _this.item = item;
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function(event) {
          var _this$props = _this.props, sectionIndex = _this$props.sectionIndex, itemIndex = _this$props.itemIndex;
          _this.props.onMouseEnter(event, {
            sectionIndex,
            itemIndex
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function(event) {
          var _this$props2 = _this.props, sectionIndex = _this$props2.sectionIndex, itemIndex = _this$props2.itemIndex;
          _this.props.onMouseLeave(event, {
            sectionIndex,
            itemIndex
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onMouseDown", function(event) {
          var _this$props3 = _this.props, sectionIndex = _this$props3.sectionIndex, itemIndex = _this$props3.itemIndex;
          _this.props.onMouseDown(event, {
            sectionIndex,
            itemIndex
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onClick", function(event) {
          var _this$props4 = _this.props, sectionIndex = _this$props4.sectionIndex, itemIndex = _this$props4.itemIndex;
          _this.props.onClick(event, {
            sectionIndex,
            itemIndex
          });
        });
        return _this;
      }
      _createClass(Item2, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          return (0, _compareObjects["default"])(nextProps, this.props, ["renderItemData"]);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props5 = this.props, isHighlighted = _this$props5.isHighlighted, item = _this$props5.item, renderItem = _this$props5.renderItem, renderItemData = _this$props5.renderItemData, restProps = _objectWithoutProperties(_this$props5, ["isHighlighted", "item", "renderItem", "renderItemData"]);
          delete restProps.sectionIndex;
          delete restProps.itemIndex;
          if (typeof restProps.onMouseEnter === "function") {
            restProps.onMouseEnter = this.onMouseEnter;
          }
          if (typeof restProps.onMouseLeave === "function") {
            restProps.onMouseLeave = this.onMouseLeave;
          }
          if (typeof restProps.onMouseDown === "function") {
            restProps.onMouseDown = this.onMouseDown;
          }
          if (typeof restProps.onClick === "function") {
            restProps.onClick = this.onClick;
          }
          return _react["default"].createElement("li", _extends({
            role: "option"
          }, restProps, {
            ref: this.storeItemReference
          }), renderItem(item, _objectSpread({
            isHighlighted
          }, renderItemData)));
        }
      }]);
      return Item2;
    }(_react.Component);
    exports["default"] = Item;
    _defineProperty(Item, "propTypes", {
      sectionIndex: _propTypes["default"].number,
      isHighlighted: _propTypes["default"].bool.isRequired,
      itemIndex: _propTypes["default"].number.isRequired,
      item: _propTypes["default"].any.isRequired,
      renderItem: _propTypes["default"].func.isRequired,
      renderItemData: _propTypes["default"].object.isRequired,
      onMouseEnter: _propTypes["default"].func,
      onMouseLeave: _propTypes["default"].func,
      onMouseDown: _propTypes["default"].func,
      onClick: _propTypes["default"].func
    });
  }
});

// node_modules/react-autosuggest/dist/ItemList.js
var require_ItemList = __commonJS({
  "node_modules/react-autosuggest/dist/ItemList.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _Item = _interopRequireDefault(require_Item());
    var _compareObjects = _interopRequireDefault(require_compareObjects());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _createSuper(Derived) {
      return function() {
        var Super = _getPrototypeOf(Derived), result;
        if (_isNativeReflectConstruct()) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var ItemsList = function(_Component) {
      _inherits(ItemsList2, _Component);
      var _super = _createSuper(ItemsList2);
      function ItemsList2() {
        var _this;
        _classCallCheck(this, ItemsList2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "storeHighlightedItemReference", function(highlightedItem) {
          _this.props.onHighlightedItemChange(highlightedItem === null ? null : highlightedItem.item);
        });
        return _this;
      }
      _createClass(ItemsList2, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          return (0, _compareObjects["default"])(nextProps, this.props, ["itemProps"]);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props, items = _this$props.items, itemProps = _this$props.itemProps, renderItem = _this$props.renderItem, renderItemData = _this$props.renderItemData, sectionIndex = _this$props.sectionIndex, highlightedItemIndex = _this$props.highlightedItemIndex, getItemId = _this$props.getItemId, theme = _this$props.theme, keyPrefix = _this$props.keyPrefix;
          var sectionPrefix = sectionIndex === null ? keyPrefix : "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
          var isItemPropsFunction = typeof itemProps === "function";
          return _react["default"].createElement("ul", _extends({
            role: "listbox"
          }, theme("".concat(sectionPrefix, "items-list"), "itemsList")), items.map(function(item, itemIndex) {
            var isFirst = itemIndex === 0;
            var isHighlighted = itemIndex === highlightedItemIndex;
            var itemKey = "".concat(sectionPrefix, "item-").concat(itemIndex);
            var itemPropsObj = isItemPropsFunction ? itemProps({
              sectionIndex,
              itemIndex
            }) : itemProps;
            var allItemProps = _objectSpread({
              id: getItemId(sectionIndex, itemIndex),
              "aria-selected": isHighlighted
            }, theme(itemKey, "item", isFirst && "itemFirst", isHighlighted && "itemHighlighted"), {}, itemPropsObj);
            if (isHighlighted) {
              allItemProps.ref = _this2.storeHighlightedItemReference;
            }
            return _react["default"].createElement(_Item["default"], _extends({}, allItemProps, {
              sectionIndex,
              isHighlighted,
              itemIndex,
              item,
              renderItem,
              renderItemData
            }));
          }));
        }
      }]);
      return ItemsList2;
    }(_react.Component);
    exports["default"] = ItemsList;
    _defineProperty(ItemsList, "propTypes", {
      items: _propTypes["default"].array.isRequired,
      itemProps: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
      renderItem: _propTypes["default"].func.isRequired,
      renderItemData: _propTypes["default"].object.isRequired,
      sectionIndex: _propTypes["default"].number,
      highlightedItemIndex: _propTypes["default"].number,
      onHighlightedItemChange: _propTypes["default"].func.isRequired,
      getItemId: _propTypes["default"].func.isRequired,
      theme: _propTypes["default"].func.isRequired,
      keyPrefix: _propTypes["default"].string.isRequired
    });
    _defineProperty(ItemsList, "defaultProps", {
      sectionIndex: null
    });
  }
});

// node_modules/react-autosuggest/dist/Autowhatever.js
var require_Autowhatever = __commonJS({
  "node_modules/react-autosuggest/dist/Autowhatever.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _sectionIterator = _interopRequireDefault(require_dist());
    var _reactThemeable = _interopRequireDefault(require_dist2());
    var _SectionTitle = _interopRequireDefault(require_SectionTitle());
    var _ItemList = _interopRequireDefault(require_ItemList());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _createSuper(Derived) {
      return function() {
        var Super = _getPrototypeOf(Derived), result;
        if (_isNativeReflectConstruct()) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var emptyObject = {};
    var defaultRenderInputComponent = function defaultRenderInputComponent2(props) {
      return _react["default"].createElement("input", props);
    };
    var defaultRenderItemsContainer = function defaultRenderItemsContainer2(_ref) {
      var containerProps = _ref.containerProps, children = _ref.children;
      return _react["default"].createElement("div", containerProps, children);
    };
    var defaultTheme = {
      container: "react-autowhatever__container",
      containerOpen: "react-autowhatever__container--open",
      input: "react-autowhatever__input",
      inputOpen: "react-autowhatever__input--open",
      inputFocused: "react-autowhatever__input--focused",
      itemsContainer: "react-autowhatever__items-container",
      itemsContainerOpen: "react-autowhatever__items-container--open",
      itemsList: "react-autowhatever__items-list",
      item: "react-autowhatever__item",
      itemFirst: "react-autowhatever__item--first",
      itemHighlighted: "react-autowhatever__item--highlighted",
      sectionContainer: "react-autowhatever__section-container",
      sectionContainerFirst: "react-autowhatever__section-container--first",
      sectionTitle: "react-autowhatever__section-title"
    };
    var Autowhatever = function(_Component) {
      _inherits(Autowhatever2, _Component);
      var _super = _createSuper(Autowhatever2);
      function Autowhatever2(props) {
        var _this;
        _classCallCheck(this, Autowhatever2);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "storeInputReference", function(input) {
          if (input !== null) {
            _this.input = input;
          }
          var userRef = _this.props.inputProps.ref;
          if (userRef) {
            if (typeof userRef === "function") {
              userRef(input);
            } else if (_typeof(userRef) === "object" && Object.prototype.hasOwnProperty.call(userRef, "current")) {
              userRef.current = input;
            }
          }
        });
        _defineProperty(_assertThisInitialized(_this), "storeItemsContainerReference", function(itemsContainer) {
          if (itemsContainer !== null) {
            _this.itemsContainer = itemsContainer;
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onHighlightedItemChange", function(highlightedItem) {
          _this.highlightedItem = highlightedItem;
        });
        _defineProperty(_assertThisInitialized(_this), "getItemId", function(sectionIndex, itemIndex) {
          if (itemIndex === null) {
            return null;
          }
          var id = _this.props.id;
          var section = sectionIndex === null ? "" : "section-".concat(sectionIndex);
          return "react-autowhatever-".concat(id, "-").concat(section, "-item-").concat(itemIndex);
        });
        _defineProperty(_assertThisInitialized(_this), "onFocus", function(event) {
          var inputProps = _this.props.inputProps;
          _this.setState({
            isInputFocused: true
          });
          inputProps.onFocus && inputProps.onFocus(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onBlur", function(event) {
          var inputProps = _this.props.inputProps;
          _this.setState({
            isInputFocused: false
          });
          inputProps.onBlur && inputProps.onBlur(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onKeyDown", function(event) {
          var _this$props = _this.props, inputProps = _this$props.inputProps, highlightedSectionIndex = _this$props.highlightedSectionIndex, highlightedItemIndex = _this$props.highlightedItemIndex;
          var keyCode = event.keyCode;
          switch (keyCode) {
            case 40:
            case 38: {
              var nextPrev = keyCode === 40 ? "next" : "prev";
              var _this$sectionIterator = _this.sectionIterator[nextPrev]([highlightedSectionIndex, highlightedItemIndex]), _this$sectionIterator2 = _slicedToArray(_this$sectionIterator, 2), newHighlightedSectionIndex = _this$sectionIterator2[0], newHighlightedItemIndex = _this$sectionIterator2[1];
              inputProps.onKeyDown(event, {
                newHighlightedSectionIndex,
                newHighlightedItemIndex
              });
              break;
            }
            default:
              inputProps.onKeyDown(event, {
                highlightedSectionIndex,
                highlightedItemIndex
              });
          }
        });
        _this.highlightedItem = null;
        _this.state = {
          isInputFocused: false
        };
        _this.setSectionsItems(props);
        _this.setSectionIterator(props);
        _this.setTheme(props);
        return _this;
      }
      _createClass(Autowhatever2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.ensureHighlightedItemIsVisible();
        }
        // eslint-disable-next-line camelcase, react/sort-comp
      }, {
        key: "UNSAFE_componentWillReceiveProps",
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          if (nextProps.items !== this.props.items) {
            this.setSectionsItems(nextProps);
          }
          if (nextProps.items !== this.props.items || nextProps.multiSection !== this.props.multiSection) {
            this.setSectionIterator(nextProps);
          }
          if (nextProps.theme !== this.props.theme) {
            this.setTheme(nextProps);
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.ensureHighlightedItemIsVisible();
        }
      }, {
        key: "setSectionsItems",
        value: function setSectionsItems(props) {
          if (props.multiSection) {
            this.sectionsItems = props.items.map(function(section) {
              return props.getSectionItems(section);
            });
            this.sectionsLengths = this.sectionsItems.map(function(items) {
              return items.length;
            });
            this.allSectionsAreEmpty = this.sectionsLengths.every(function(itemsCount) {
              return itemsCount === 0;
            });
          }
        }
      }, {
        key: "setSectionIterator",
        value: function setSectionIterator(props) {
          this.sectionIterator = (0, _sectionIterator["default"])({
            multiSection: props.multiSection,
            data: props.multiSection ? this.sectionsLengths : props.items.length
          });
        }
      }, {
        key: "setTheme",
        value: function setTheme(props) {
          this.theme = (0, _reactThemeable["default"])(props.theme);
        }
      }, {
        key: "renderSections",
        value: function renderSections() {
          var _this2 = this;
          if (this.allSectionsAreEmpty) {
            return null;
          }
          var theme = this.theme;
          var _this$props2 = this.props, id = _this$props2.id, items = _this$props2.items, renderItem = _this$props2.renderItem, renderItemData = _this$props2.renderItemData, renderSectionTitle = _this$props2.renderSectionTitle, highlightedSectionIndex = _this$props2.highlightedSectionIndex, highlightedItemIndex = _this$props2.highlightedItemIndex, itemProps = _this$props2.itemProps;
          return items.map(function(section, sectionIndex) {
            var keyPrefix = "react-autowhatever-".concat(id, "-");
            var sectionKeyPrefix = "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
            var isFirstSection = sectionIndex === 0;
            return _react["default"].createElement("div", theme("".concat(sectionKeyPrefix, "container"), "sectionContainer", isFirstSection && "sectionContainerFirst"), _react["default"].createElement(_SectionTitle["default"], {
              section,
              renderSectionTitle,
              theme,
              sectionKeyPrefix
            }), _react["default"].createElement(_ItemList["default"], {
              items: _this2.sectionsItems[sectionIndex],
              itemProps,
              renderItem,
              renderItemData,
              sectionIndex,
              highlightedItemIndex: highlightedSectionIndex === sectionIndex ? highlightedItemIndex : null,
              onHighlightedItemChange: _this2.onHighlightedItemChange,
              getItemId: _this2.getItemId,
              theme,
              keyPrefix,
              ref: _this2.storeItemsListReference
            }));
          });
        }
      }, {
        key: "renderItems",
        value: function renderItems() {
          var items = this.props.items;
          if (items.length === 0) {
            return null;
          }
          var theme = this.theme;
          var _this$props3 = this.props, id = _this$props3.id, renderItem = _this$props3.renderItem, renderItemData = _this$props3.renderItemData, highlightedSectionIndex = _this$props3.highlightedSectionIndex, highlightedItemIndex = _this$props3.highlightedItemIndex, itemProps = _this$props3.itemProps;
          return _react["default"].createElement(_ItemList["default"], {
            items,
            itemProps,
            renderItem,
            renderItemData,
            highlightedItemIndex: highlightedSectionIndex === null ? highlightedItemIndex : null,
            onHighlightedItemChange: this.onHighlightedItemChange,
            getItemId: this.getItemId,
            theme,
            keyPrefix: "react-autowhatever-".concat(id, "-")
          });
        }
      }, {
        key: "ensureHighlightedItemIsVisible",
        value: function ensureHighlightedItemIsVisible() {
          var highlightedItem = this.highlightedItem;
          if (!highlightedItem) {
            return;
          }
          var itemsContainer = this.itemsContainer;
          var itemOffsetRelativeToContainer = highlightedItem.offsetParent === itemsContainer ? highlightedItem.offsetTop : highlightedItem.offsetTop - itemsContainer.offsetTop;
          var scrollTop = itemsContainer.scrollTop;
          if (itemOffsetRelativeToContainer < scrollTop) {
            scrollTop = itemOffsetRelativeToContainer;
          } else if (itemOffsetRelativeToContainer + highlightedItem.offsetHeight > scrollTop + itemsContainer.offsetHeight) {
            scrollTop = itemOffsetRelativeToContainer + highlightedItem.offsetHeight - itemsContainer.offsetHeight;
          }
          if (scrollTop !== itemsContainer.scrollTop) {
            itemsContainer.scrollTop = scrollTop;
          }
        }
      }, {
        key: "render",
        value: function render() {
          var theme = this.theme;
          var _this$props4 = this.props, id = _this$props4.id, multiSection = _this$props4.multiSection, renderInputComponent = _this$props4.renderInputComponent, renderItemsContainer = _this$props4.renderItemsContainer, highlightedSectionIndex = _this$props4.highlightedSectionIndex, highlightedItemIndex = _this$props4.highlightedItemIndex;
          var isInputFocused = this.state.isInputFocused;
          var renderedItems = multiSection ? this.renderSections() : this.renderItems();
          var isOpen = renderedItems !== null;
          var ariaActivedescendant = this.getItemId(highlightedSectionIndex, highlightedItemIndex);
          var itemsContainerId = "react-autowhatever-".concat(id);
          var containerProps = _objectSpread({
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-owns": itemsContainerId,
            "aria-expanded": isOpen
          }, theme("react-autowhatever-".concat(id, "-container"), "container", isOpen && "containerOpen"), {}, this.props.containerProps);
          var inputComponent = renderInputComponent(_objectSpread({
            type: "text",
            value: "",
            autoComplete: "off",
            "aria-autocomplete": "list",
            "aria-controls": itemsContainerId,
            "aria-activedescendant": ariaActivedescendant
          }, theme("react-autowhatever-".concat(id, "-input"), "input", isOpen && "inputOpen", isInputFocused && "inputFocused"), {}, this.props.inputProps, {
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
            ref: this.storeInputReference
          }));
          var itemsContainer = renderItemsContainer({
            containerProps: _objectSpread({
              id: itemsContainerId,
              role: "listbox"
            }, theme("react-autowhatever-".concat(id, "-items-container"), "itemsContainer", isOpen && "itemsContainerOpen"), {
              ref: this.storeItemsContainerReference
            }),
            children: renderedItems
          });
          return _react["default"].createElement("div", containerProps, inputComponent, itemsContainer);
        }
      }]);
      return Autowhatever2;
    }(_react.Component);
    exports["default"] = Autowhatever;
    _defineProperty(Autowhatever, "propTypes", {
      id: _propTypes["default"].string,
      // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
      multiSection: _propTypes["default"].bool,
      // Indicates whether a multi section layout should be rendered.
      renderInputComponent: _propTypes["default"].func,
      // When specified, it is used to render the input element.
      renderItemsContainer: _propTypes["default"].func,
      // Renders the items container.
      items: _propTypes["default"].array.isRequired,
      // Array of items or sections to render.
      renderItem: _propTypes["default"].func,
      // This function renders a single item.
      renderItemData: _propTypes["default"].object,
      // Arbitrary data that will be passed to renderItem()
      renderSectionTitle: _propTypes["default"].func,
      // This function gets a section and renders its title.
      getSectionItems: _propTypes["default"].func,
      // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
      containerProps: _propTypes["default"].object,
      // Arbitrary container props
      inputProps: _propTypes["default"].object,
      // Arbitrary input props
      itemProps: _propTypes["default"].oneOfType([
        // Arbitrary item props
        _propTypes["default"].object,
        _propTypes["default"].func
      ]),
      highlightedSectionIndex: _propTypes["default"].number,
      // Section index of the highlighted item
      highlightedItemIndex: _propTypes["default"].number,
      // Highlighted item index (within a section)
      theme: _propTypes["default"].oneOfType([
        // Styles. See: https://github.com/markdalgleish/react-themeable
        _propTypes["default"].object,
        _propTypes["default"].array
      ])
    });
    _defineProperty(Autowhatever, "defaultProps", {
      id: "1",
      multiSection: false,
      renderInputComponent: defaultRenderInputComponent,
      renderItemsContainer: defaultRenderItemsContainer,
      renderItem: function renderItem() {
        throw new Error("`renderItem` must be provided");
      },
      renderItemData: emptyObject,
      renderSectionTitle: function renderSectionTitle() {
        throw new Error("`renderSectionTitle` must be provided");
      },
      getSectionItems: function getSectionItems() {
        throw new Error("`getSectionItems` must be provided");
      },
      containerProps: emptyObject,
      inputProps: emptyObject,
      itemProps: emptyObject,
      highlightedSectionIndex: null,
      highlightedItemIndex: null,
      theme: defaultTheme
    });
  }
});

// node_modules/react-autosuggest/dist/theme.js
var require_theme = __commonJS({
  "node_modules/react-autosuggest/dist/theme.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mapToAutowhateverTheme = exports.defaultTheme = void 0;
    var defaultTheme = {
      container: "react-autosuggest__container",
      containerOpen: "react-autosuggest__container--open",
      input: "react-autosuggest__input",
      inputOpen: "react-autosuggest__input--open",
      inputFocused: "react-autosuggest__input--focused",
      suggestionsContainer: "react-autosuggest__suggestions-container",
      suggestionsContainerOpen: "react-autosuggest__suggestions-container--open",
      suggestionsList: "react-autosuggest__suggestions-list",
      suggestion: "react-autosuggest__suggestion",
      suggestionFirst: "react-autosuggest__suggestion--first",
      suggestionHighlighted: "react-autosuggest__suggestion--highlighted",
      sectionContainer: "react-autosuggest__section-container",
      sectionContainerFirst: "react-autosuggest__section-container--first",
      sectionTitle: "react-autosuggest__section-title"
    };
    exports.defaultTheme = defaultTheme;
    var mapToAutowhateverTheme = function mapToAutowhateverTheme2(theme) {
      var result = {};
      for (var key in theme) {
        switch (key) {
          case "suggestionsContainer":
            result["itemsContainer"] = theme[key];
            break;
          case "suggestionsContainerOpen":
            result["itemsContainerOpen"] = theme[key];
            break;
          case "suggestion":
            result["item"] = theme[key];
            break;
          case "suggestionFirst":
            result["itemFirst"] = theme[key];
            break;
          case "suggestionHighlighted":
            result["itemHighlighted"] = theme[key];
            break;
          case "suggestionsList":
            result["itemsList"] = theme[key];
            break;
          default:
            result[key] = theme[key];
        }
      }
      return result;
    };
    exports.mapToAutowhateverTheme = mapToAutowhateverTheme;
  }
});

// node_modules/react-autosuggest/dist/Autosuggest.js
var require_Autosuggest = __commonJS({
  "node_modules/react-autosuggest/dist/Autosuggest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _arrays = _interopRequireDefault(require_arrays());
    var _Autowhatever = _interopRequireDefault(require_Autowhatever());
    var _theme = require_theme();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _createSuper(Derived) {
      return function() {
        var Super = _getPrototypeOf(Derived), result;
        if (_isNativeReflectConstruct()) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var alwaysTrue = function alwaysTrue2() {
      return true;
    };
    var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions2(value) {
      return value.trim().length > 0;
    };
    var defaultRenderSuggestionsContainer = function defaultRenderSuggestionsContainer2(_ref) {
      var containerProps = _ref.containerProps, children = _ref.children;
      return _react["default"].createElement("div", containerProps, children);
    };
    var REASON_SUGGESTIONS_REVEALED = "suggestions-revealed";
    var REASON_SUGGESTIONS_UPDATED = "suggestions-updated";
    var REASON_SUGGESTION_SELECTED = "suggestion-selected";
    var REASON_INPUT_FOCUSED = "input-focused";
    var REASON_INPUT_CHANGED = "input-changed";
    var REASON_INPUT_BLURRED = "input-blurred";
    var REASON_ESCAPE_PRESSED = "escape-pressed";
    var Autosuggest = function(_Component) {
      _inherits(Autosuggest2, _Component);
      var _super = _createSuper(Autosuggest2);
      function Autosuggest2(_ref2) {
        var _this;
        var _alwaysRenderSuggestions = _ref2.alwaysRenderSuggestions;
        _classCallCheck(this, Autosuggest2);
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "onDocumentMouseDown", function(event) {
          _this.justClickedOnSuggestionsContainer = false;
          var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
          event.target;
          while (node !== null && node !== document) {
            if (node.getAttribute && node.getAttribute("data-suggestion-index") !== null) {
              return;
            }
            if (node === _this.suggestionsContainer) {
              _this.justClickedOnSuggestionsContainer = true;
              return;
            }
            node = node.parentNode;
          }
        });
        _defineProperty(_assertThisInitialized(_this), "storeAutowhateverRef", function(autowhatever) {
          if (autowhatever !== null) {
            _this.autowhatever = autowhatever;
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseEnter", function(event, _ref3) {
          var sectionIndex = _ref3.sectionIndex, itemIndex = _ref3.itemIndex;
          _this.updateHighlightedSuggestion(sectionIndex, itemIndex);
          if (event.target === _this.pressedSuggestion) {
            _this.justSelectedSuggestion = true;
          }
          _this.justMouseEntered = true;
          setTimeout(function() {
            _this.justMouseEntered = false;
          });
        });
        _defineProperty(_assertThisInitialized(_this), "highlightFirstSuggestion", function() {
          _this.updateHighlightedSuggestion(_this.props.multiSection ? 0 : null, 0);
        });
        _defineProperty(_assertThisInitialized(_this), "onDocumentMouseUp", function() {
          if (_this.pressedSuggestion && !_this.justSelectedSuggestion) {
            _this.input.focus();
          }
          _this.pressedSuggestion = null;
        });
        _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseDown", function(event) {
          if (!_this.justSelectedSuggestion) {
            _this.justSelectedSuggestion = true;
            _this.pressedSuggestion = event.target;
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSuggestionsClearRequested", function() {
          var onSuggestionsClearRequested = _this.props.onSuggestionsClearRequested;
          onSuggestionsClearRequested && onSuggestionsClearRequested();
        });
        _defineProperty(_assertThisInitialized(_this), "onSuggestionSelected", function(event, data) {
          var _this$props = _this.props, alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions, onSuggestionSelected = _this$props.onSuggestionSelected, onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested;
          onSuggestionSelected && onSuggestionSelected(event, data);
          var keepSuggestionsOnSelect = _this.props.shouldKeepSuggestionsOnSelect(data.suggestion);
          if (alwaysRenderSuggestions || keepSuggestionsOnSelect) {
            onSuggestionsFetchRequested({
              value: data.suggestionValue,
              reason: REASON_SUGGESTION_SELECTED
            });
          } else {
            _this.onSuggestionsClearRequested();
          }
          _this.resetHighlightedSuggestion();
        });
        _defineProperty(_assertThisInitialized(_this), "onSuggestionClick", function(event) {
          var _this$props2 = _this.props, alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions, focusInputOnSuggestionClick = _this$props2.focusInputOnSuggestionClick;
          var _this$getSuggestionIn = _this.getSuggestionIndices(_this.findSuggestionElement(event.target)), sectionIndex = _this$getSuggestionIn.sectionIndex, suggestionIndex = _this$getSuggestionIn.suggestionIndex;
          var clickedSuggestion = _this.getSuggestion(sectionIndex, suggestionIndex);
          var clickedSuggestionValue = _this.props.getSuggestionValue(clickedSuggestion);
          _this.maybeCallOnChange(event, clickedSuggestionValue, "click");
          _this.onSuggestionSelected(event, {
            suggestion: clickedSuggestion,
            suggestionValue: clickedSuggestionValue,
            suggestionIndex,
            sectionIndex,
            method: "click"
          });
          var keepSuggestionsOnSelect = _this.props.shouldKeepSuggestionsOnSelect(clickedSuggestion);
          if (!(alwaysRenderSuggestions || keepSuggestionsOnSelect)) {
            _this.closeSuggestions();
          }
          if (focusInputOnSuggestionClick === true) {
            _this.input.focus();
          } else {
            _this.onBlur();
          }
          setTimeout(function() {
            _this.justSelectedSuggestion = false;
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onBlur", function() {
          var _this$props3 = _this.props, inputProps = _this$props3.inputProps, shouldRenderSuggestions = _this$props3.shouldRenderSuggestions;
          var value = inputProps.value, onBlur = inputProps.onBlur;
          var highlightedSuggestion = _this.getHighlightedSuggestion();
          var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_BLURRED);
          _this.setState({
            isFocused: false,
            highlightedSectionIndex: null,
            highlightedSuggestionIndex: null,
            highlightedSuggestion: null,
            valueBeforeUpDown: null,
            isCollapsed: !shouldRender
          });
          onBlur && onBlur(_this.blurEvent, {
            highlightedSuggestion
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseLeave", function(event) {
          _this.resetHighlightedSuggestion(false);
          if (_this.justSelectedSuggestion && event.target === _this.pressedSuggestion) {
            _this.justSelectedSuggestion = false;
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSuggestionTouchStart", function() {
          _this.justSelectedSuggestion = true;
        });
        _defineProperty(_assertThisInitialized(_this), "onSuggestionTouchMove", function() {
          _this.justSelectedSuggestion = false;
          _this.pressedSuggestion = null;
          _this.input.focus();
        });
        _defineProperty(_assertThisInitialized(_this), "itemProps", function(_ref4) {
          var sectionIndex = _ref4.sectionIndex, itemIndex = _ref4.itemIndex;
          return {
            "data-section-index": sectionIndex,
            "data-suggestion-index": itemIndex,
            onMouseEnter: _this.onSuggestionMouseEnter,
            onMouseLeave: _this.onSuggestionMouseLeave,
            onMouseDown: _this.onSuggestionMouseDown,
            onTouchStart: _this.onSuggestionTouchStart,
            onTouchMove: _this.onSuggestionTouchMove,
            onClick: _this.onSuggestionClick
          };
        });
        _defineProperty(_assertThisInitialized(_this), "renderSuggestionsContainer", function(_ref5) {
          var containerProps = _ref5.containerProps, children = _ref5.children;
          var renderSuggestionsContainer = _this.props.renderSuggestionsContainer;
          return renderSuggestionsContainer({
            containerProps,
            children,
            query: _this.getQuery()
          });
        });
        _this.state = {
          isFocused: false,
          isCollapsed: !_alwaysRenderSuggestions,
          highlightedSectionIndex: null,
          highlightedSuggestionIndex: null,
          highlightedSuggestion: null,
          valueBeforeUpDown: null
        };
        _this.justPressedUpDown = false;
        _this.justMouseEntered = false;
        _this.pressedSuggestion = null;
        return _this;
      }
      _createClass(Autosuggest2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          document.addEventListener("mousedown", this.onDocumentMouseDown);
          document.addEventListener("mouseup", this.onDocumentMouseUp);
          this.input = this.autowhatever.input;
          this.suggestionsContainer = this.autowhatever.itemsContainer;
        }
        // eslint-disable-next-line camelcase, react/sort-comp
      }, {
        key: "UNSAFE_componentWillReceiveProps",
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          var shouldResetHighlighting = this.state.highlightedSuggestionIndex === 0 && this.props.highlightFirstSuggestion && !nextProps.highlightFirstSuggestion;
          if ((0, _arrays["default"])(nextProps.suggestions, this.props.suggestions)) {
            if (nextProps.highlightFirstSuggestion && nextProps.suggestions.length > 0 && this.justPressedUpDown === false && this.justMouseEntered === false) {
              this.highlightFirstSuggestion();
            } else if (shouldResetHighlighting) {
              this.resetHighlightedSuggestion();
            }
          } else {
            if (this.willRenderSuggestions(nextProps, REASON_SUGGESTIONS_UPDATED)) {
              if (this.state.isCollapsed && !this.justSelectedSuggestion) {
                this.revealSuggestions();
              }
              if (shouldResetHighlighting) {
                this.resetHighlightedSuggestion();
              }
            } else {
              this.resetHighlightedSuggestion();
            }
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          var _this$props4 = this.props, suggestions = _this$props4.suggestions, onSuggestionHighlighted = _this$props4.onSuggestionHighlighted, highlightFirstSuggestion = _this$props4.highlightFirstSuggestion;
          if (!(0, _arrays["default"])(suggestions, prevProps.suggestions) && suggestions.length > 0 && highlightFirstSuggestion) {
            this.highlightFirstSuggestion();
            return;
          }
          if (onSuggestionHighlighted) {
            var highlightedSuggestion = this.getHighlightedSuggestion();
            var prevHighlightedSuggestion = prevState.highlightedSuggestion;
            if (highlightedSuggestion != prevHighlightedSuggestion) {
              onSuggestionHighlighted({
                suggestion: highlightedSuggestion
              });
            }
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          document.removeEventListener("mousedown", this.onDocumentMouseDown);
          document.removeEventListener("mouseup", this.onDocumentMouseUp);
        }
      }, {
        key: "updateHighlightedSuggestion",
        value: function updateHighlightedSuggestion(sectionIndex, suggestionIndex, prevValue) {
          var _this2 = this;
          this.setState(function(state) {
            var valueBeforeUpDown = state.valueBeforeUpDown;
            if (suggestionIndex === null) {
              valueBeforeUpDown = null;
            } else if (valueBeforeUpDown === null && typeof prevValue !== "undefined") {
              valueBeforeUpDown = prevValue;
            }
            return {
              highlightedSectionIndex: sectionIndex,
              highlightedSuggestionIndex: suggestionIndex,
              highlightedSuggestion: suggestionIndex === null ? null : _this2.getSuggestion(sectionIndex, suggestionIndex),
              valueBeforeUpDown
            };
          });
        }
      }, {
        key: "resetHighlightedSuggestion",
        value: function resetHighlightedSuggestion() {
          var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
          this.setState(function(state) {
            var valueBeforeUpDown = state.valueBeforeUpDown;
            return {
              highlightedSectionIndex: null,
              highlightedSuggestionIndex: null,
              highlightedSuggestion: null,
              valueBeforeUpDown: shouldResetValueBeforeUpDown ? null : valueBeforeUpDown
            };
          });
        }
      }, {
        key: "revealSuggestions",
        value: function revealSuggestions() {
          this.setState({
            isCollapsed: false
          });
        }
      }, {
        key: "closeSuggestions",
        value: function closeSuggestions() {
          this.setState({
            highlightedSectionIndex: null,
            highlightedSuggestionIndex: null,
            highlightedSuggestion: null,
            valueBeforeUpDown: null,
            isCollapsed: true
          });
        }
      }, {
        key: "getSuggestion",
        value: function getSuggestion(sectionIndex, suggestionIndex) {
          var _this$props5 = this.props, suggestions = _this$props5.suggestions, multiSection = _this$props5.multiSection, getSectionSuggestions = _this$props5.getSectionSuggestions;
          if (multiSection) {
            return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
          }
          return suggestions[suggestionIndex];
        }
      }, {
        key: "getHighlightedSuggestion",
        value: function getHighlightedSuggestion() {
          var _this$state = this.state, highlightedSectionIndex = _this$state.highlightedSectionIndex, highlightedSuggestionIndex = _this$state.highlightedSuggestionIndex;
          if (highlightedSuggestionIndex === null) {
            return null;
          }
          return this.getSuggestion(highlightedSectionIndex, highlightedSuggestionIndex);
        }
      }, {
        key: "getSuggestionValueByIndex",
        value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
          var getSuggestionValue = this.props.getSuggestionValue;
          return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
        }
      }, {
        key: "getSuggestionIndices",
        value: function getSuggestionIndices(suggestionElement) {
          var sectionIndex = suggestionElement.getAttribute("data-section-index");
          var suggestionIndex = suggestionElement.getAttribute("data-suggestion-index");
          return {
            sectionIndex: typeof sectionIndex === "string" ? parseInt(sectionIndex, 10) : null,
            suggestionIndex: parseInt(suggestionIndex, 10)
          };
        }
      }, {
        key: "findSuggestionElement",
        value: function findSuggestionElement(startNode) {
          var node = startNode;
          do {
            if (node.getAttribute && node.getAttribute("data-suggestion-index") !== null) {
              return node;
            }
            node = node.parentNode;
          } while (node !== null);
          console.error("Clicked element:", startNode);
          throw new Error("Couldn't find suggestion element");
        }
      }, {
        key: "maybeCallOnChange",
        value: function maybeCallOnChange(event, newValue, method) {
          var _this$props$inputProp = this.props.inputProps, value = _this$props$inputProp.value, onChange = _this$props$inputProp.onChange;
          if (newValue !== value) {
            onChange(event, {
              newValue,
              method
            });
          }
        }
      }, {
        key: "willRenderSuggestions",
        value: function willRenderSuggestions(props, reason) {
          var suggestions = props.suggestions, inputProps = props.inputProps, shouldRenderSuggestions = props.shouldRenderSuggestions;
          var value = inputProps.value;
          return suggestions.length > 0 && shouldRenderSuggestions(value, reason);
        }
      }, {
        key: "getQuery",
        value: function getQuery() {
          var inputProps = this.props.inputProps;
          var value = inputProps.value;
          var valueBeforeUpDown = this.state.valueBeforeUpDown;
          return (valueBeforeUpDown === null ? value : valueBeforeUpDown).trim();
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          var _this$props6 = this.props, suggestions = _this$props6.suggestions, renderInputComponent = _this$props6.renderInputComponent, onSuggestionsFetchRequested = _this$props6.onSuggestionsFetchRequested, renderSuggestion = _this$props6.renderSuggestion, inputProps = _this$props6.inputProps, multiSection = _this$props6.multiSection, renderSectionTitle = _this$props6.renderSectionTitle, id = _this$props6.id, getSectionSuggestions = _this$props6.getSectionSuggestions, theme = _this$props6.theme, getSuggestionValue = _this$props6.getSuggestionValue, alwaysRenderSuggestions = _this$props6.alwaysRenderSuggestions, highlightFirstSuggestion = _this$props6.highlightFirstSuggestion, containerProps = _this$props6.containerProps;
          var _this$state2 = this.state, isFocused = _this$state2.isFocused, isCollapsed = _this$state2.isCollapsed, highlightedSectionIndex = _this$state2.highlightedSectionIndex, highlightedSuggestionIndex = _this$state2.highlightedSuggestionIndex, valueBeforeUpDown = _this$state2.valueBeforeUpDown;
          var shouldRenderSuggestions = alwaysRenderSuggestions ? alwaysTrue : this.props.shouldRenderSuggestions;
          var value = inputProps.value, _onFocus = inputProps.onFocus, _onKeyDown = inputProps.onKeyDown;
          var willRenderSuggestions = this.willRenderSuggestions(this.props, "render");
          var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
          var items = isOpen ? suggestions : [];
          var autowhateverInputProps = _objectSpread({}, inputProps, {
            onFocus: function onFocus(event) {
              if (!_this3.justSelectedSuggestion && !_this3.justClickedOnSuggestionsContainer) {
                var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_FOCUSED);
                _this3.setState({
                  isFocused: true,
                  isCollapsed: !shouldRender
                });
                _onFocus && _onFocus(event);
                if (shouldRender) {
                  onSuggestionsFetchRequested({
                    value,
                    reason: REASON_INPUT_FOCUSED
                  });
                }
              }
            },
            onBlur: function onBlur(event) {
              if (_this3.justClickedOnSuggestionsContainer) {
                _this3.input.focus();
                return;
              }
              _this3.blurEvent = event;
              if (!_this3.justSelectedSuggestion) {
                _this3.onBlur();
                _this3.onSuggestionsClearRequested();
              }
            },
            onChange: function onChange(event) {
              var value2 = event.target.value;
              var shouldRender = shouldRenderSuggestions(value2, REASON_INPUT_CHANGED);
              _this3.maybeCallOnChange(event, value2, "type");
              if (_this3.suggestionsContainer) {
                _this3.suggestionsContainer.scrollTop = 0;
              }
              _this3.setState(_objectSpread({}, highlightFirstSuggestion ? {} : {
                highlightedSectionIndex: null,
                highlightedSuggestionIndex: null,
                highlightedSuggestion: null
              }, {
                valueBeforeUpDown: null,
                isCollapsed: !shouldRender
              }));
              if (shouldRender) {
                onSuggestionsFetchRequested({
                  value: value2,
                  reason: REASON_INPUT_CHANGED
                });
              } else {
                _this3.onSuggestionsClearRequested();
              }
            },
            onKeyDown: function onKeyDown(event, data) {
              var keyCode = event.keyCode;
              switch (keyCode) {
                case 40:
                case 38:
                  if (isCollapsed) {
                    if (shouldRenderSuggestions(value, REASON_SUGGESTIONS_REVEALED)) {
                      onSuggestionsFetchRequested({
                        value,
                        reason: REASON_SUGGESTIONS_REVEALED
                      });
                      _this3.revealSuggestions();
                      event.preventDefault();
                    }
                  } else if (suggestions.length > 0) {
                    var newHighlightedSectionIndex = data.newHighlightedSectionIndex, newHighlightedItemIndex = data.newHighlightedItemIndex;
                    var newValue;
                    if (newHighlightedItemIndex === null) {
                      newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
                    } else {
                      newValue = _this3.getSuggestionValueByIndex(newHighlightedSectionIndex, newHighlightedItemIndex);
                    }
                    _this3.updateHighlightedSuggestion(newHighlightedSectionIndex, newHighlightedItemIndex, value);
                    _this3.maybeCallOnChange(event, newValue, keyCode === 40 ? "down" : "up");
                    event.preventDefault();
                  }
                  _this3.justPressedUpDown = true;
                  setTimeout(function() {
                    _this3.justPressedUpDown = false;
                  });
                  break;
                case 13: {
                  if (event.keyCode === 229) {
                    break;
                  }
                  var highlightedSuggestion = _this3.getHighlightedSuggestion();
                  if (isOpen && !alwaysRenderSuggestions) {
                    _this3.closeSuggestions();
                  }
                  if (highlightedSuggestion != null) {
                    event.preventDefault();
                    var _newValue = getSuggestionValue(highlightedSuggestion);
                    _this3.maybeCallOnChange(event, _newValue, "enter");
                    _this3.onSuggestionSelected(event, {
                      suggestion: highlightedSuggestion,
                      suggestionValue: _newValue,
                      suggestionIndex: highlightedSuggestionIndex,
                      sectionIndex: highlightedSectionIndex,
                      method: "enter"
                    });
                    _this3.justSelectedSuggestion = true;
                    setTimeout(function() {
                      _this3.justSelectedSuggestion = false;
                    });
                  }
                  break;
                }
                case 27: {
                  if (isOpen) {
                    event.preventDefault();
                  }
                  var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;
                  if (valueBeforeUpDown === null) {
                    if (!willCloseSuggestions) {
                      var _newValue2 = "";
                      _this3.maybeCallOnChange(event, _newValue2, "escape");
                      if (shouldRenderSuggestions(_newValue2, REASON_ESCAPE_PRESSED)) {
                        onSuggestionsFetchRequested({
                          value: _newValue2,
                          reason: REASON_ESCAPE_PRESSED
                        });
                      } else {
                        _this3.onSuggestionsClearRequested();
                      }
                    }
                  } else {
                    _this3.maybeCallOnChange(event, valueBeforeUpDown, "escape");
                  }
                  if (willCloseSuggestions) {
                    _this3.onSuggestionsClearRequested();
                    _this3.closeSuggestions();
                  } else {
                    _this3.resetHighlightedSuggestion();
                  }
                  break;
                }
              }
              _onKeyDown && _onKeyDown(event);
            }
          });
          var renderSuggestionData = {
            query: this.getQuery()
          };
          return _react["default"].createElement(_Autowhatever["default"], {
            multiSection,
            items,
            renderInputComponent,
            renderItemsContainer: this.renderSuggestionsContainer,
            renderItem: renderSuggestion,
            renderItemData: renderSuggestionData,
            renderSectionTitle,
            getSectionItems: getSectionSuggestions,
            highlightedSectionIndex,
            highlightedItemIndex: highlightedSuggestionIndex,
            containerProps,
            inputProps: autowhateverInputProps,
            itemProps: this.itemProps,
            theme: (0, _theme.mapToAutowhateverTheme)(theme),
            id,
            ref: this.storeAutowhateverRef
          });
        }
      }]);
      return Autosuggest2;
    }(_react.Component);
    exports["default"] = Autosuggest;
    _defineProperty(Autosuggest, "propTypes", {
      suggestions: _propTypes["default"].array.isRequired,
      onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
        var onSuggestionsFetchRequested2 = props[propName];
        if (typeof onSuggestionsFetchRequested2 !== "function") {
          throw new Error("'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp");
        }
      },
      onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
        var onSuggestionsClearRequested2 = props[propName];
        if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested2 !== "function") {
          throw new Error("'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp");
        }
      },
      shouldKeepSuggestionsOnSelect: _propTypes["default"].func,
      onSuggestionSelected: _propTypes["default"].func,
      onSuggestionHighlighted: _propTypes["default"].func,
      renderInputComponent: _propTypes["default"].func,
      renderSuggestionsContainer: _propTypes["default"].func,
      getSuggestionValue: _propTypes["default"].func.isRequired,
      renderSuggestion: _propTypes["default"].func.isRequired,
      inputProps: function inputProps(props, propName) {
        var inputProps2 = props[propName];
        if (!inputProps2) {
          throw new Error("'inputProps' must be passed.");
        }
        if (!Object.prototype.hasOwnProperty.call(inputProps2, "value")) {
          throw new Error("'inputProps' must have 'value'.");
        }
        if (!Object.prototype.hasOwnProperty.call(inputProps2, "onChange")) {
          throw new Error("'inputProps' must have 'onChange'.");
        }
      },
      shouldRenderSuggestions: _propTypes["default"].func,
      alwaysRenderSuggestions: _propTypes["default"].bool,
      multiSection: _propTypes["default"].bool,
      renderSectionTitle: function renderSectionTitle(props, propName) {
        var renderSectionTitle2 = props[propName];
        if (props.multiSection === true && typeof renderSectionTitle2 !== "function") {
          throw new Error("'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp");
        }
      },
      getSectionSuggestions: function getSectionSuggestions(props, propName) {
        var getSectionSuggestions2 = props[propName];
        if (props.multiSection === true && typeof getSectionSuggestions2 !== "function") {
          throw new Error("'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp");
        }
      },
      focusInputOnSuggestionClick: _propTypes["default"].bool,
      highlightFirstSuggestion: _propTypes["default"].bool,
      theme: _propTypes["default"].object,
      id: _propTypes["default"].string,
      containerProps: _propTypes["default"].object
      // Arbitrary container props
    });
    _defineProperty(Autosuggest, "defaultProps", {
      renderSuggestionsContainer: defaultRenderSuggestionsContainer,
      shouldRenderSuggestions: defaultShouldRenderSuggestions,
      alwaysRenderSuggestions: false,
      multiSection: false,
      shouldKeepSuggestionsOnSelect: function shouldKeepSuggestionsOnSelect() {
        return false;
      },
      focusInputOnSuggestionClick: true,
      highlightFirstSuggestion: false,
      theme: _theme.defaultTheme,
      id: "1",
      containerProps: {}
    });
  }
});

// node_modules/react-autosuggest/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/react-autosuggest/dist/index.js"(exports, module) {
    module.exports = require_Autosuggest()["default"];
  }
});
export default require_dist3();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-autosuggest.js.map
