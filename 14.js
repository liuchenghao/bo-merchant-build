webpackJsonp([14],{

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.promise.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Promise;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js")
  , TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js")
  , call        = __webpack_require__("./node_modules/core-js/library/modules/_iter-call.js")
  , isArrayIter = __webpack_require__("./node_modules/core-js/library/modules/_is-array-iter.js")
  , anObject    = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js")
  , toLength    = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js")
  , getIterFn   = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js")
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js")
  , ITERATOR   = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__("./node_modules/core-js/library/modules/_global.js")
  , macrotask = __webpack_require__("./node_modules/core-js/library/modules/_task.js").set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__("./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__("./node_modules/core-js/library/modules/_global.js")
  , core        = __webpack_require__("./node_modules/core-js/library/modules/_core.js")
  , dP          = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js")
  , DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js")
  , SPECIES     = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js")
  , aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js")
  , SPECIES   = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js")
  , invoke             = __webpack_require__("./node_modules/core-js/library/modules/_invoke.js")
  , html               = __webpack_require__("./node_modules/core-js/library/modules/_html.js")
  , cel                = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")
  , global             = __webpack_require__("./node_modules/core-js/library/modules/_global.js")
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__("./node_modules/core-js/library/modules/_cof.js")(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__("./node_modules/core-js/library/modules/_classof.js")
  , ITERATOR  = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator')
  , Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__("./node_modules/core-js/library/modules/_library.js")
  , global             = __webpack_require__("./node_modules/core-js/library/modules/_global.js")
  , ctx                = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js")
  , classof            = __webpack_require__("./node_modules/core-js/library/modules/_classof.js")
  , $export            = __webpack_require__("./node_modules/core-js/library/modules/_export.js")
  , isObject           = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js")
  , aFunction          = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js")
  , anInstance         = __webpack_require__("./node_modules/core-js/library/modules/_an-instance.js")
  , forOf              = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js")
  , speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_species-constructor.js")
  , task               = __webpack_require__("./node_modules/core-js/library/modules/_task.js").set
  , microtask          = __webpack_require__("./node_modules/core-js/library/modules/_microtask.js")()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__("./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__("./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("./node_modules/core-js/library/modules/_iter-detect.js")(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/styles\"]}!./src/routes/Mobile/routes/H5MemberCenter/H5MemberContainer.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".m-btn{display:inline-block;margin-bottom:0;font-weight:500;text-align:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;line-height:1.5;padding:4px 15px;font-size:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .3s cubic-bezier(.645,.045,.355,1);position:relative;color:rgba(0,0,0,.65);background-color:#fff;border-color:#d9d9d9;border-radius:4px;outline:none}.m-btn .iconfont{padding-right:2px;vertical-align:middle}.m-btn-primary{color:#fff;background:#3fa7ff;border:2px solid #3fa7ff}.m-btn-default{color:#54a4ff;background:#fff;border:2px solid #54a4ff}.m-btn-danger{color:#fff;background:#fb4747;border:2px solid #fb4747}[type=button].ant-btn:active,[type=button].ant-btn:focus{color:rgba(0,0,0,.65);background-color:#fff;border-color:#d9d9d9}html{font-size:100px}@media (min-width:480px){html{font-size:110px!important}}@media (min-width:640px){html{font-size:120px!important}}@media (min-width:720px){html{font-size:130px!important}}.memberCard-block{height:100%;position:absolute;top:0;left:0}.memberCard-block,.memberCard-box{width:100%;background-color:#f3f4f6}.memberCard-box{padding:.2rem .25rem .04rem;border-bottom:1px solid #e7e7e7}.memberCard-box .memberCard-container{position:relative;margin-bottom:.04rem}.memberCard-box .memberCard-container .memberCard-info{position:absolute;top:50%;left:0;padding:0 .4rem;transform:translateY(-50%);overflow:hidden}.memberCard-box .memberCard-container .storeLogo-img{float:left}.memberCard-box .memberCard-container .storeLogo-img>img{width:.54rem;border-radius:50%}.memberCard-box .memberCard-container .store-address,.memberCard-box .memberCard-container .store-name{padding-left:.1rem;width:75%;display:inline-block;word-break:break-all;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.memberCard-box .memberCard-container .store-name{font-size:.2rem;color:#fff}.memberCard-box .memberCard-container .store-address{font-size:.12rem;color:hsla(0,0%,100%,.5)}.memberCard-box .memberCard-container .memberCard-tel{position:absolute;bottom:.3rem;left:0;right:0;padding:0 .4rem;font-size:.2rem;color:hsla(0,0%,100%,.5);letter-spacing:.06rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.memberCard-box .memberCard-container .memberCard-tel>span{display:inline-block}.memberCard-box .memberCard-container .memberCard-bg{display:block;width:100%;border-radius:4px}.memberCard-box .memberCard-shadow{border-radius:4px 4px 0 0;height:.2rem;background:linear-gradient(rgba(0,0,0,.15),transparent)}.memberCard-cardnum{color:#000;text-align:center;background:#fff;margin-top:.2rem;padding:.2rem 0}.memberCard-cardnum .title{font-size:.15rem;color:#666;line-height:.4rem}.memberCard-cardnum .card-num{font-size:.14rem}.memberCard-cardnum .card-num span{margin:0 .05rem}.get-card{padding:.2rem .25rem .15rem}.get-memberCard-btn{display:block;margin:.1rem auto 0;width:.88rem;height:.25rem;line-height:.25rem;border:1px solid #33a1ff;border-radius:4px;font-size:.14rem;font-weight:600;color:#33a1ff;text-align:center}", "", {"version":3,"sources":["/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/styles/_button.scss","/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/routes/Mobile/routes/H5MemberCenter/H5MemberContainer.scss","/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/routes/Mobile/routes/H5MemberCenter/H5MemberContainer.scss","/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/styles/_text.scss"],"names":[],"mappings":"AA4BA,OA3BE,qBAAqB,AACrB,gBAAgB,AAChB,gBAAgB,AAChB,kBAAkB,AAClB,8BAA8B,AAC9B,0BAA0B,AAC1B,eAAe,AACf,sBAAsB,AACtB,6BAA6B,AAC7B,mBAAmB,AACnB,gBAAgB,AAChB,iBAAiB,AACjB,eAAe,AAEf,yBAAiB,AAAjB,sBAAiB,AAAjB,qBAAiB,AAAjB,iBAAiB,AACjB,kDAAkD,AAClD,kBAAkB,AAClB,sBAAsB,AACtB,sBAAsB,AACtB,qBAAqB,AACrB,kBAAkB,AAClB,YAAa,CAQd,AAPC,iBACE,kBAAiB,AACjB,qBAAqB,CACtB,AAMH,eACE,WAAW,AACX,mBAAmB,AACnB,wBAAyB,CAC1B,AACD,eACE,cAAc,AACd,gBAAgB,AAChB,wBAAyB,CAC1B,AAED,cACE,WAAW,AACX,mBAAmB,AACnB,wBAAyB,CAC1B,ACOD,yDDJE,sBAAsB,AACtB,sBAAsB,AACtB,oBAAqB,CACtB,AEnDD,KAAM,eAAgB,CAAI,AAC1B,yBACI,KAAM,yBAA2B,CAAI,CAAA,AACzC,yBACI,KAAM,yBAA2B,CAAI,CAAA,AACzC,yBACI,KAAM,yBAA2B,CAAI,CAAA,AACzC,kBAEE,YAAY,AACZ,kBAAkB,AAClB,MAAM,AACN,MAAO,CAER,AACD,kCAPE,WAAW,AAKX,wBAAyB,CAwE1B,AAtED,gBACE,4BAA4B,AAG5B,+BAAgC,CAkEjC,AAtED,sCAMI,kBAAkB,AAClB,oBAAqB,CAyDtB,AAhEH,uDASM,kBAAkB,AAClB,QAAQ,AACR,OAAO,AACP,gBAAgB,AAChB,2BAA2B,AAC3B,eAAgB,CACjB,AAfL,qDAiBM,UAAW,CAKZ,AAtBL,yDAmBQ,aAAa,AACb,iBAAkB,CACnB,AArBP,uGAwBM,mBAAmB,AACnB,UAAU,ACzCd,qBAAqB,AACrB,qBAAqB,AACrB,gBAAgB,AAChB,mBAAmB,AACnB,sBAAuB,CDuCpB,AA3BL,kDA6BM,gBAAgB,AAChB,UAAW,CACZ,AA/BL,qDAiCM,iBAAiB,AACjB,wBAA4B,CAC7B,AAnCL,sDAsCM,kBAAkB,AAClB,aAAa,AACb,OAAO,AACP,QAAQ,AACR,gBAAgB,AAChB,gBAAgB,AAChB,yBAA4B,AAC5B,sBAAsB,AAEtB,oBAAa,AAAb,aAAa,AACb,sBAA8B,AAA9B,6BAA8B,CAU/B,AA1DL,2DAkDQ,oBAAqB,CACtB,AAnDP,qDA4DM,cAAc,AACd,WAAW,AACX,iBAAkB,CACnB,AA/DL,mCAkEI,0BAA0B,AAC1B,aAAa,AACb,uDAAwD,CACzD,AAEH,oBACE,WAAW,AACX,kBAAkB,AAClB,gBAAgB,AAChB,iBAAiB,AACjB,eAAgB,CAYjB,AAjBD,2BAOI,iBAAiB,AACjB,WAAW,AACX,iBAAmB,CACpB,AAVH,8BAYI,gBAAiB,CAIlB,AAhBH,mCAcM,eAAgB,CACjB,AAGL,UACE,2BAA4B,CAC7B,AACD,oBACE,cAAc,AACd,oBAAoB,AACpB,aAAa,AACb,cAAc,AACd,mBAAmB,AACnB,yBAAyB,AACzB,kBAAkB,AAClB,iBAAiB,AACjB,gBAAgB,AAChB,cAAc,AACd,iBAAkB,CACnB","file":"H5MemberContainer.scss","sourcesContent":["@mixin m-btn{\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: 500;\n  text-align: center;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  line-height: 1.5;\n  padding: 4px 15px;\n  font-size: 12px;\n  border-radius: 4px;\n  user-select: none;\n  transition: all .3s cubic-bezier(.645,.045,.355,1);\n  position: relative;\n  color: rgba(0,0,0,.65);\n  background-color: #fff;\n  border-color: #d9d9d9;\n  border-radius: 4px;\n  outline: none;\n  .iconfont{\n    padding-right:2px;\n    vertical-align:middle;\n  }\n}\n.m-btn{\n  @include m-btn;\n}\n\n.m-btn-primary {\n  color: #fff;\n  background: #3fa7ff;\n  border: 2px solid #3fa7ff;\n}\n.m-btn-default {\n  color: #54a4ff;\n  background: #fff;\n  border: 2px solid #54a4ff;\n}\n\n.m-btn-danger{\n  color: #fff;\n  background: #fb4747;\n  border: 2px solid #fb4747;\n}\n[type=button].ant-btn:focus,\n[type=button].ant-btn:active {\n  color: rgba(0,0,0,.65);\n  background-color: #fff;\n  border-color: #d9d9d9;\n}","/*\nApplication Settings Go Here\n------------------------------------\nThis file acts as a bundler for all variables/mixins/themes, so they\ncan easily be swapped out without `core.scss` ever having to know.\n\nFor example:\n\n@import './variables/colors';\n@import './variables/components';\n@import './themes/default';\n*/\n.m-btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: 500;\n  text-align: center;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  line-height: 1.5;\n  padding: 4px 15px;\n  font-size: 12px;\n  border-radius: 4px;\n  user-select: none;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  border-color: #d9d9d9;\n  border-radius: 4px;\n  outline: none; }\n  .m-btn .iconfont {\n    padding-right: 2px;\n    vertical-align: middle; }\n\n.m-btn-primary {\n  color: #fff;\n  background: #3fa7ff;\n  border: 2px solid #3fa7ff; }\n\n.m-btn-default {\n  color: #54a4ff;\n  background: #fff;\n  border: 2px solid #54a4ff; }\n\n.m-btn-danger {\n  color: #fff;\n  background: #fb4747;\n  border: 2px solid #fb4747; }\n\n[type=button].ant-btn:focus,\n[type=button].ant-btn:active {\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  border-color: #d9d9d9; }\n\nhtml {\n  font-size: 100px; }\n\n@media (min-width: 480px) {\n  html {\n    font-size: 110px !important; } }\n\n@media (min-width: 640px) {\n  html {\n    font-size: 120px !important; } }\n\n@media (min-width: 720px) {\n  html {\n    font-size: 130px !important; } }\n\n.memberCard-block {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #f3f4f6; }\n\n.memberCard-box {\n  padding: .2rem .25rem .04rem;\n  background-color: #f3f4f6;\n  width: 100%;\n  border-bottom: 1px solid #e7e7e7; }\n  .memberCard-box .memberCard-container {\n    position: relative;\n    margin-bottom: .04rem; }\n    .memberCard-box .memberCard-container .memberCard-info {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      padding: 0 .4rem;\n      transform: translateY(-50%);\n      overflow: hidden; }\n    .memberCard-box .memberCard-container .storeLogo-img {\n      float: left; }\n      .memberCard-box .memberCard-container .storeLogo-img > img {\n        width: .54rem;\n        border-radius: 50%; }\n    .memberCard-box .memberCard-container .store-name, .memberCard-box .memberCard-container .store-address {\n      padding-left: .1rem;\n      width: 75%;\n      display: inline-block;\n      word-break: break-all;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n    .memberCard-box .memberCard-container .store-name {\n      font-size: .2rem;\n      color: #fff; }\n    .memberCard-box .memberCard-container .store-address {\n      font-size: .12rem;\n      color: rgba(255, 255, 255, 0.5); }\n    .memberCard-box .memberCard-container .memberCard-tel {\n      position: absolute;\n      bottom: .3rem;\n      left: 0;\n      right: 0;\n      padding: 0 .4rem;\n      font-size: .2rem;\n      color: rgba(255, 255, 255, 0.5);\n      letter-spacing: .06rem;\n      display: flex;\n      justify-content: space-between; }\n      .memberCard-box .memberCard-container .memberCard-tel > span {\n        display: inline-block; }\n    .memberCard-box .memberCard-container .memberCard-bg {\n      display: block;\n      width: 100%;\n      border-radius: 4px; }\n  .memberCard-box .memberCard-shadow {\n    border-radius: 4px 4px 0 0;\n    height: .2rem;\n    background: linear-gradient(rgba(0, 0, 0, 0.15), transparent); }\n\n.memberCard-cardnum {\n  color: #000;\n  text-align: center;\n  background: #fff;\n  margin-top: .2rem;\n  padding: .2rem 0; }\n  .memberCard-cardnum .title {\n    font-size: .15rem;\n    color: #666;\n    line-height: 0.4rem; }\n  .memberCard-cardnum .card-num {\n    font-size: .14rem; }\n    .memberCard-cardnum .card-num span {\n      margin: 0 .05rem; }\n\n.get-card {\n  padding: .2rem .25rem .15rem; }\n\n.get-memberCard-btn {\n  display: block;\n  margin: .1rem auto 0;\n  width: .88rem;\n  height: .25rem;\n  line-height: .25rem;\n  border: 1px solid #33a1ff;\n  border-radius: 4px;\n  font-size: .14rem;\n  font-weight: 600;\n  color: #33a1ff;\n  text-align: center; }\n","@import \"../../../../styles/base.scss\";\n\nhtml {font-size: 100px;}\n@media (min-width: 480px) {\n    html {font-size: 110px !important;}}\n@media (min-width: 640px) {\n    html {font-size: 120px !important;}}\n@media (min-width: 720px) {\n    html {font-size: 130px !important;}}\n.memberCard-block {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #f3f4f6;\n}\n.memberCard-box{\n  padding: .2rem .25rem .04rem;\n  background-color: #f3f4f6;\n  width: 100%;\n  border-bottom: 1px solid #e7e7e7;\n  .memberCard-container{\n    position: relative;\n    margin-bottom: .04rem;\n    .memberCard-info{\n      position: absolute;\n      top: 50%;\n      left: 0;\n      padding: 0 .4rem;\n      transform: translateY(-50%);\n      overflow: hidden;\n    }\n    .storeLogo-img{\n      float: left;\n      & > img{\n        width: .54rem;\n        border-radius: 50%;\n      }\n    }\n    .store-name,.store-address{\n      padding-left: .1rem;\n      width: 75%;\n      @include text-overflow;\n    }\n    .store-name{\n      font-size: .2rem;\n      color: #fff;\n    }\n    .store-address{\n      font-size: .12rem;\n      color: rgba(255,255,255,0.5);\n    }\n\n    .memberCard-tel{\n      position: absolute;\n      bottom: .3rem;\n      left: 0;\n      right: 0;\n      padding: 0 .4rem;\n      font-size: .2rem;\n      color: rgba(255,255,255,0.5);\n      letter-spacing: .06rem;\n      \n      display: flex;\n      justify-content: space-between;\n      & > span{\n        display: inline-block;\n      }\n      // & > span{\n      //   padding-right: .3rem;\n      // }\n      // & > span:last-child{\n      //   padding-right: 0;\n      // }\n    }\n    .memberCard-bg{\n      display: block;\n      width: 100%;\n      border-radius: 4px;\n    }\n  }\n  .memberCard-shadow{\n    border-radius: 4px 4px 0 0;\n    height: .2rem;\n    background: linear-gradient(rgba(0,0,0,.15),transparent);\n  }\n}\n.memberCard-cardnum{\n  color: #000;\n  text-align: center;\n  background: #fff;\n  margin-top: .2rem;\n  padding: .2rem 0;\n  .title{\n    font-size: .15rem;\n    color: #666;\n    line-height: 0.4rem;\n  }\n  .card-num{\n    font-size: .14rem;\n    span {\n      margin: 0 .05rem;\n    }\n  }\n}\n.get-card{\n  padding: .2rem .25rem .15rem;\n}\n.get-memberCard-btn{\n  display: block;\n  margin: .1rem auto 0;\n  width: .88rem;\n  height: .25rem;\n  line-height: .25rem;\n  border: 1px solid #33a1ff;\n  border-radius: 4px;\n  font-size: .14rem;\n  font-weight: 600;\n  color: #33a1ff;\n  text-align: center;\n}","@mixin text-overflow{\n  display: inline-block;\n  word-break: break-all;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n@mixin text-overflow-all{\n    display: inline-block;\n    text-overflow: ellipsis;\n\twhite-space: nowrap;\n    word-break: break-all;\n\tdisplay: -webkit-box;\n    -webkit-line-clamp: 1;\n}\n@mixin word-break-all{\n  word-break: break-all;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/routes/Mobile/routes/H5MemberCenter/GetCard/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_utils_fetchUtil__ = __webpack_require__("./src/utils/fetchUtil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_utils_domain__ = __webpack_require__("./src/utils/domain.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_utils_tools__ = __webpack_require__("./src/utils/tools.js");









var GetCard = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(GetCard, _Component);

  function GetCard() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, GetCard);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (GetCard.__proto__ || Object.getPrototypeOf(GetCard)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(GetCard, [{
    key: 'getMemberCard',
    value: function getMemberCard() {
      var _this2 = this;

      var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils_domain__["b" /* fixDomain */])('http://api.sit.ffan.net/bocxapi/v1/oauth/storeCard');
      __WEBPACK_IMPORTED_MODULE_5_utils_fetchUtil__["a" /* default */].postJSON(url, {
        loginToken: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_utils_tools__["b" /* getCookie */])('boc_loginToken'),
        storeId: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_utils_tools__["b" /* getCookie */])('boc_storeId')
      }).then(function (data) {
        // window.location.href = `/merchant/member-center/${this.props.params.pageID}?pageState=2`
        _this2.props.switchState('2');
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.basic) return null;
      var _props$basic = this.props.basic,
          storeName = _props$basic.storeName,
          storePicsrc = _props$basic.storePicsrc,
          storeAddress = _props$basic.storeAddress;

      this.getMemberCard = this.getMemberCard.bind(this);
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { className: 'get-card memberCard-box' },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: 'memberCard-container' },
          this.props.url ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('img', { className: 'memberCard-bg', src: this.props.url }) : null,
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'dl',
            { className: 'memberCard-info' },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'dt',
              { className: 'storeLogo-img' },
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('img', { src: 'http://timg.ffan.com/convert/resize/url_' + storePicsrc + '/tfs/1.png' })
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'dd',
              { className: 'store-name' },
              storeName
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'dd',
              { className: 'store-address' },
              storeAddress
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('div', { className: 'memberCard-shadow' }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'a',
          { className: 'get-memberCard-btn', onClick: this.getMemberCard },
          '\u7ACB\u5373\u9886\u53D6'
        )
      );
    }
  }]);

  return GetCard;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (GetCard);

/***/ }),

/***/ "./src/routes/Mobile/routes/H5MemberCenter/H5MemberContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_utils_fetchUtil__ = __webpack_require__("./src/utils/fetchUtil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_utils_domain__ = __webpack_require__("./src/utils/domain.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__GetCard__ = __webpack_require__("./src/routes/Mobile/routes/H5MemberCenter/GetCard/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__MemberInfo__ = __webpack_require__("./src/routes/Mobile/routes/H5MemberCenter/MemberInfo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_utils_tools__ = __webpack_require__("./src/utils/tools.js");













var Member = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Member, _Component);

  function Member(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Member);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this, props));

    _this.state = {
      pageState: '1'
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Member, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var apiUrl, data, cardInfo, img, imgUrl;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                document.title = '会员中心';
                _context.prev = 1;
                apiUrl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_utils_domain__["b" /* fixDomain */])('http://api.ffan.net/bob/v1/decorate/basic/' + this.props.params.pageID);
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_7_utils_fetchUtil__["a" /* default */].getJSON(apiUrl);

              case 5:
                data = _context.sent;
                cardInfo = data.redecorate.viewData.elements.find(function (item) {
                  return item.type === 'Card';
                });
                img = cardInfo.items.find(function (item) {
                  return item.value === cardInfo.value;
                });
                imgUrl = img && img.compImage || cardInfo.value;

                this.setState({
                  url: imgUrl,
                  basic: data.basic,
                  pageState: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_utils_tools__["a" /* getUrlParam */])('pageState')
                });
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](1);

                console.log('---UserView data error');
                console.log(_context.t0);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'switchState',
    value: function switchState(state) {
      this.setState({
        pageState: state
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          basic = _state.basic,
          url = _state.url;

      var getCardProp = Object.assign({}, this.props, {
        basic: basic,
        url: url,
        switchState: this.switchState.bind(this)
      });
      var memberProps = Object.assign({}, this.props, {
        url: url,
        basic: basic
      });
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        null,
        this.state.pageState === '1' ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__GetCard__["a" /* default */], getCardProp) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__MemberInfo__["a" /* default */], memberProps)
      );
    }
  }]);

  return Member;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Member);

/***/ }),

/***/ "./src/routes/Mobile/routes/H5MemberCenter/H5MemberContainer.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/styles\"]}!./src/routes/Mobile/routes/H5MemberCenter/H5MemberContainer.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/styles\"]}!./src/routes/Mobile/routes/H5MemberCenter/H5MemberContainer.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/styles\"]}!./src/routes/Mobile/routes/H5MemberCenter/H5MemberContainer.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/routes/Mobile/routes/H5MemberCenter/MemberInfo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_utils_fetchUtil__ = __webpack_require__("./src/utils/fetchUtil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_utils_domain__ = __webpack_require__("./src/utils/domain.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_utils_tools__ = __webpack_require__("./src/utils/tools.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__H5MemberContainer_scss__ = __webpack_require__("./src/routes/Mobile/routes/H5MemberCenter/H5MemberContainer.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__H5MemberContainer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__H5MemberContainer_scss__);










var MemberInfo = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(MemberInfo, _Component);

  function MemberInfo(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MemberInfo);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MemberInfo.__proto__ || Object.getPrototypeOf(MemberInfo)).call(this, props));

    _this.state = {
      cardId: ''
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(MemberInfo, [{
    key: 'getMemberInfo',
    value: function getMemberInfo() {
      var _this2 = this;

      var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils_domain__["b" /* fixDomain */])('http://api.sit.ffan.net/bocxapi/v1/oauth/storeUser');
      __WEBPACK_IMPORTED_MODULE_5_utils_fetchUtil__["a" /* default */].getJSON(url, {
        loginToken: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_utils_tools__["b" /* getCookie */])('boc_loginToken'),
        storeId: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_utils_tools__["b" /* getCookie */])('boc_storeId')
      }).then(function (data) {
        _this2.setState({
          cardId: data.cardId
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getMemberInfo();
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.basic) return null;
      var _props$basic = this.props.basic,
          storeName = _props$basic.storeName,
          storePicsrc = _props$basic.storePicsrc,
          storeAddress = _props$basic.storeAddress;
      var cardId = this.state.cardId;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { className: 'memberCard-block' },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: 'memberCard-box' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'div',
            { className: 'memberCard-container' },
            this.props.url ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('img', { className: 'memberCard-bg', src: this.props.url }) : null,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'dl',
              { className: 'memberCard-info' },
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'dt',
                { className: 'storeLogo-img' },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('img', { src: 'http://timg.ffan.com/convert/resize/url_' + storePicsrc + '/tfs/1.png' })
              ),
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'dd',
                { className: 'store-name' },
                storeName
              ),
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'dd',
                { className: 'store-address' },
                storeAddress
              )
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'p',
              { className: 'memberCard-tel' },
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'span',
                null,
                cardId.substring(0, 3)
              ),
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'span',
                null,
                cardId.substring(3, 7)
              ),
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'span',
                null,
                cardId.substring(7, 11)
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('div', { className: 'memberCard-shadow' })
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: 'memberCard-cardnum' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'h5',
            { className: 'title' },
            '\u4F1A\u5458\u5361\u53F7'
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'p',
            { className: 'card-num' },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'span',
              null,
              cardId.substring(0, 3)
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'span',
              null,
              cardId.substring(3, 7)
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'span',
              null,
              cardId.substring(7, 11)
            )
          )
        )
      );
    }
  }]);

  return MemberInfo;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MemberInfo);

/***/ }),

/***/ "./src/utils/domain.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getDomainEnv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fixDomain; });
/* harmony export (immutable) */ __webpack_exports__["a"] = getDomain;
var commonReg = new RegExp('\\.((test|sit|uat)\\.)?(ffan\\.net)');

function getDomainEnv() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.host;
  var reg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : commonReg;

  var host = url || location.host;
  var domainTestResult = host.match(reg);
  return domainTestResult ? domainTestResult[2] ? domainTestResult[2] : 'pub' : 'local';
}

function getReplaced(match) {
  switch (match) {
    case 'local':
      return 'sit.';
    case 'sit':
      return 'sit.';
    case 'uat':
      return 'uat.';
    case 'test':
      return 'test.';
    case 'pub':
      return '';
    default:
      throw new Error('not matched');
  }
}

var fixDomain = function fixDomain() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.host;
  var reg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : commonReg;

  var matches = url.match(reg);
  if (!Array.isArray(matches)) {
    throw Error('-- url not matched! --');
  }
  return url.replace(matches[0], '.' + getReplaced(getDomainEnv(host)) + matches[3]);
};

function getDomain() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opt = Object.assign({ suffix: 'net', host: location.host }, option);
  return 'http://api.' + getReplaced(getDomainEnv(_opt.host)) + 'ffan.' + _opt.suffix + url;
}

/***/ }),

/***/ "./src/utils/fetchUtil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getLoginInfo */
/* unused harmony export isObject */
/* unused harmony export makeReject */
/* unused harmony export buildSearchParams */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_whatwg_fetch__ = __webpack_require__("./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools__ = __webpack_require__("./src/utils/tools.js");







var DEBUG_MODE = new RegExp('debug=1').test(location.search);

var getLoginInfo = function getLoginInfo() {
  var fieldsObject = {
    clientType: '',
    token: '',
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: '',
    p10: '',
    p11: '',
    p12: '',
    p13: '',
    p14: '',
    p15: ''
  };
  return __WEBPACK_IMPORTED_MODULE_5__tools__["c" /* getValueFromUrl */](fieldsObject, location.href);
};

var isObject = function isObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(x)) === 'object';
};

var makeReject = function makeReject(status, message) {
  return Promise.reject(new Error({ status: status, message: message }));
};

var buildSearchParams = function buildSearchParams(params) {
  return Object.keys(params).map(function (key) {
    return [key, params[key]].map(encodeURIComponent).join('=');
  }).join('&').replace(/%20/g, '+');
};

var defaultHeaders = {
  'Accept': 'application/json'
};

var defaultOptions = {
  credentials: 'include',
  mode: 'cors'
};

var FetchUtil = function () {
  function FetchUtil() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, FetchUtil);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(FetchUtil, null, [{
    key: 'getJSON',
    value: function getJSON(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!url.trim()) {
        return makeReject(-101, 'URL is empty');
      }

      if (!isObject(params) || !isObject(options)) {
        return makeReject(-102, 'The type of params and options must be a Object');
      }

      if (DEBUG_MODE) {
        params.debug = 1;
      }

      var _params = Object.assign({}, getLoginInfo(), params);

      _params = buildSearchParams(_params);

      var _options = options,
          headers = _options.headers,
          rest = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_options, ['headers']);

      options = Object.assign({
        method: 'GET',
        headers: Object.assign({}, defaultHeaders, headers)
      }, defaultOptions, rest);

      if (_params) {
        var quesMark = new RegExp('\\?').test(url) ? '&' : '?';
        url = '' + url + quesMark + _params;
      }

      return new Promise(function (resolve, reject) {
        fetch(url, options).then(function (res) {
          return res.json();
        }).then(function (json) {
          var status = json.status,
              data = json.data,
              msg = json.msg,
              message = json.message;

          if (1 * status === 200) {
            resolve(data);
          } else {
            console.log(status + '|' + (msg || message));
            reject(json);
          }
        })['catch'](function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: 'postJSON',
    value: function postJSON(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!url.trim()) {
        return makeReject(-101, 'URL is empty');
      }

      if (!isObject(params) || !isObject(options)) {
        return makeReject(-102, 'The type of params and options must be a Object');
      }

      if (DEBUG_MODE) {
        params.debug = 1;
      }

      if (options['loginInfo'] !== false) {
        params = Object.assign({}, getLoginInfo(), params);
      }

      var _options2 = options,
          headers = _options2.headers,
          formDataType = _options2.formDataType,
          rest = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_options2, ['headers', 'formDataType']);

      var body = void 0;

      headers = Object.assign({}, defaultHeaders, headers);

      switch (formDataType) {
        case 'json':
          headers['Content-Type'] = 'application/json';
          body = JSON.stringify(params);
          break;
        case 'FormData':
          var data = new FormData();
          for (var p in params) {
            if (__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(params[p]) === 'object') {
              data.append(p, JSON.stringify(params[p]));
            } else {
              data.append(p, params[p]);
            }
          }
          body = data;
          break;
        case 'file':
          body = params;
          break;
        case 'urlencode':
        default:
          headers['Content-Type'] = 'application/x-www-form-urlencoded';
          body = buildSearchParams(params);
      }

      options = Object.assign({
        method: 'POST',
        headers: headers,
        body: body
      }, defaultOptions, rest);

      return new Promise(function (resolve, reject) {
        fetch(url, options).then(function (res) {
          return res.json();
        }).then(function (json) {
          var status = json.status,
              data = json.data,
              msg = json.msg,
              message = json.message;

          if (1 * status === 200) {
            resolve(data);
          } else {
            //alert(`${status}|${msg}`)
            console.log(status + '|' + (msg || message));
            reject(json);
          }
        })['catch'](function (e) {
          reject(e);
        });
      });
    }
  }]);

  return FetchUtil;
}();

/* harmony default export */ __webpack_exports__["a"] = (FetchUtil);

/***/ }),

/***/ "./src/utils/tools.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isUndefined */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getValueFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUrlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCookie; });
var isUndefined = function isUndefined(v) {
  return typeof v === 'undefined';
};

var getValueFromUrl = function getValueFromUrl(source, url) {
  var _url = url || location.href;
  var queryString = _url.split('?')[1];
  var urlParams = {};
  var result = {};

  if (queryString) {
    queryString.split('&').forEach(function (item) {
      var field = item.split('=');
      urlParams[field[0]] = isUndefined(field[1]) ? '' : field[1];
    });
  }

  Object.keys(source).forEach(function (item) {
    result[item] = isUndefined(urlParams[item]) ? source[item] : urlParams[item];
  });

  return result;
};

var getUrlParam = function getUrlParam(key) {
  var params = location.search.substr(1).split('&');
  var param = params.find(function (item) {
    return item.toUpperCase().indexOf(key.toUpperCase()) > -1;
  });
  param = param ? param.split('=')[1] : '';
  return param;
};

var getCookie = function getCookie(key) {
  var cookiesArr = document.cookie.split(';');
  var obj = '';
  cookiesArr.map(function (item) {
    item.split('=').map(function (subItem) {
      if (subItem.trim().toUpperCase() === key.toUpperCase()) {
        obj = item;
      }
    });
  });
  return obj ? obj.split('=')[1] : null;
};

/***/ })

});
//# sourceMappingURL=14.js.map