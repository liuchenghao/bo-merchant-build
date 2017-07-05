webpackJsonp([15],{

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.assign;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js")
  , gOPS     = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js")
  , pIE      = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js")
  , toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js")
  , IObject  = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js")
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', {assign: __webpack_require__("./node_modules/core-js/library/modules/_object-assign.js")});

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/styles\"]}!./src/routes/Mobile/routes/H5Order/H5OrderContainer.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html{font-size:100px}@media (min-width:480px){html{font-size:110px!important}}@media (min-width:640px){html{font-size:120px!important}}@media (min-width:720px){html{font-size:130px!important}}.order-wrap{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#f3f4f6}.order-wrap .status-done-color{color:#2dbc2f}.order-wrap .status-prepaycount-color{color:#2692fb}.order-wrap .status-done,.order-wrap .status-prepaycount{height:.36rem;line-height:.36rem;font-size:.14rem;text-align:center;background-color:#fff}.order-wrap .status-done:before{background-image:url(http://timg.ffan.com/convert/resize/url_T123hTBXZg1RCvBVdK/tfs/1.png)}.order-wrap .status-done:before,.order-wrap .status-prepaycount:before{content:\" \";display:inline-block;margin-right:.04rem;width:.14rem;height:.14rem;background-size:100% 100%;vertical-align:middle}.order-wrap .status-prepaycount:before{background-image:url(http://timg.ffan.com/convert/resize/url_T1HBhTBKK_1RCvBVdK/tfs/1.png)}.order-wrap .title{padding:.12rem .1rem .08rem;font-size:.15rem;color:#000;background-color:#f3f4f6;border-top:1px solid #ebebeb}.order-wrap .store-details{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:.09rem .1rem .1rem;border-bottom:1px solid #ebebeb;background-color:#fff}.order-wrap .store-details .img{width:.75rem;height:.75rem}.order-wrap .store-details .store-price{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-direction:column;flex-direction:column;-ms-flex:1;flex:1;padding-left:.1rem}.order-wrap .store-details .store-price .name{font-size:.16rem;color:#000}.order-wrap .store-details .store-price .price-num{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.order-wrap .store-details .store-price .price{font-size:.16rem;color:#2692fb}.order-wrap .store-details .store-price .price i{font-style:normal;font-size:.12rem}.order-wrap .store-details .store-price .num{font-size:.14rem;color:#000}.order-wrap .store-all-price,.order-wrap .store-pay-mode{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:.05rem 0;padding:0 .1rem;height:.44rem;line-height:.44rem;font-size:.16rem;color:#000;background-color:#fff;border-top:1px solid #ebebeb;border-bottom:1px solid #ebebeb}.order-wrap .store-all-price .icon-wechat-pay,.order-wrap .store-pay-mode .icon-wechat-pay{padding-right:.04rem;color:#52a54a;font-size:.15rem}.order-wrap .store-total{padding:.14rem .1rem;text-align:right;font-size:.15rem;color:#000}.order-wrap .store-total span{color:#2692fb}.order-wrap .store-roder-info{padding:.1rem;font-size:.13rem;color:#000;line-height:.24rem;background-color:#fff;border-top:1px solid #ebebeb;border-bottom:1px solid #ebebeb}.order-wrap .store-roder-info span{display:inline-block;padding-left:.08rem;color:#999;line-height:.15rem}.order-wrap .pay-btn{background-color:#2692fb}.order-wrap .over-time-btn,.order-wrap .pay-btn{position:fixed;bottom:0;left:0;right:0;height:.45rem;line-height:.45rem;font-size:.17rem;text-align:center;color:#fff}.order-wrap .over-time-btn{background-color:#ccc}", "", {"version":3,"sources":["/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/routes/Mobile/routes/H5Order/H5OrderContainer.scss"],"names":[],"mappings":"AAAA,KAAM,eAAgB,CAAI,AAC1B,yBACI,KAAM,yBAA2B,CAAI,CAAA,AACzC,yBACI,KAAM,yBAA2B,CAAI,CAAA,AACzC,yBACI,KAAM,yBAA2B,CAAI,CAAA,AAEzC,YACE,kBAAkB,AAClB,MAAM,AACN,SAAS,AACT,OAAO,AACP,QAAQ,AACR,wBAAyB,CAmJ1B,AAzJD,+BAYI,aAAc,CACf,AAbH,sCAeI,aAAc,CACf,AAhBH,yDAkBI,cAAc,AACd,mBAAmB,AACnB,iBAAiB,AACjB,kBAAkB,AAClB,qBAAsB,CACvB,AAvBH,gCA8BI,0FAA2F,CAG5F,AAjCH,uEAyBI,YAAY,AACZ,qBAAqB,AACrB,oBAAoB,AACpB,aAAa,AACb,cAAc,AAEd,0BAA0B,AAC1B,qBAAsB,CAWvB,AA3CH,uCAwCI,0FAA2F,CAG5F,AA3CH,mBA6CI,4BAA4B,AAC5B,iBAAiB,AACjB,WAAW,AACX,yBAAyB,AACzB,4BAA6B,CAC9B,AAlDH,2BAQI,oBAAa,AAAb,aAAa,AACb,sBAA8B,AAA9B,8BAA8B,AA4C9B,2BAA2B,AAC3B,gCAAgC,AAChC,qBAAsB,CAgCvB,AAvFH,gCAyDM,aAAa,AACb,aAAc,CACf,AA3DL,wCAQI,oBAAa,AAAb,aAAa,AACb,sBAA8B,AAA9B,8BAA8B,AAqD5B,0BAAsB,AAAtB,sBAAsB,AACtB,WAAO,AAAP,OAAO,AACP,kBAAmB,CAqBpB,AArFL,8CAkEQ,iBAAiB,AACjB,UAAW,CACZ,AApEP,mDAQI,oBAAa,AAAb,aAAa,AACb,sBAA8B,AAA9B,8BAA8B,AA8D1B,mBAAqB,AAArB,oBAAqB,CACtB,AAxEP,+CA0EQ,iBAAiB,AACjB,aAAc,CAKf,AAhFP,iDA6EU,kBAAkB,AAClB,gBAAiB,CAClB,AA/ET,6CAkFQ,iBAAiB,AACjB,UAAW,CACZ,AApFP,yDAQI,oBAAa,AAAb,aAAa,AACb,sBAA8B,AAA9B,8BAA8B,AAiF9B,gBAAgB,AAChB,gBAAgB,AAChB,cAAc,AACd,mBAAmB,AACnB,iBAAiB,AACjB,WAAW,AACX,sBAAsB,AACtB,6BAA6B,AAC7B,+BAAgC,CAMjC,AAxGH,2FAoGM,qBAAqB,AACrB,cAAc,AACd,gBAAiB,CAClB,AAvGL,yBA0GI,qBAAqB,AACrB,iBAAiB,AACjB,iBAAiB,AACjB,UAAW,CAIZ,AAjHH,8BA+GM,aAAc,CACf,AAhHL,8BAmHI,cAAc,AACd,iBAAiB,AACjB,WAAW,AACX,mBAAmB,AACnB,sBAAsB,AACtB,6BAA6B,AAC7B,+BAAgC,CAOjC,AAhIH,mCA2HM,qBAAqB,AACrB,oBAAoB,AACpB,WAAW,AACX,kBAAmB,CACpB,AA/HL,qBA2II,wBAAyB,CAC1B,AA5IH,gDAkII,eAAe,AACf,SAAS,AACT,OAAO,AACP,QAAQ,AACR,cAAc,AACd,mBAAmB,AACnB,iBAAiB,AACjB,kBAAkB,AAClB,UAAW,CAcZ,AAxJH,2BAuJI,qBAAsB,CACvB","file":"H5OrderContainer.scss","sourcesContent":["html {font-size: 100px;}\n@media (min-width: 480px) {\n    html {font-size: 110px !important;}}\n@media (min-width: 640px) {\n    html {font-size: 120px !important;}}\n@media (min-width: 720px) {\n    html {font-size: 130px !important;}}\n\n.order-wrap{\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #f3f4f6; \n  @mixin flex{\n    display: flex;\n    justify-content: space-between;\n  }\n  .status-done-color{\n    color: #2dbc2f;\n  }\n  .status-prepaycount-color{\n    color: #2692fb;\n  }\n  .status-done,.status-prepaycount{\n    height: .36rem;\n    line-height: .36rem;\n    font-size: .14rem;\n    text-align: center;\n    background-color: #fff;\n  }\n  .status-done:before{\n    content: \" \";\n    display: inline-block;\n    margin-right: .04rem;\n    width: .14rem;\n    height: .14rem;\n    background-image: url(http://timg.ffan.com/convert/resize/url_T123hTBXZg1RCvBVdK/tfs/1.png);\n    background-size: 100% 100%;\n    vertical-align: middle;\n  }\n  .status-prepaycount:before{\n    content: \" \";\n    display: inline-block;\n    margin-right: .04rem;\n    width: .14rem;\n    height: .14rem;\n    background-image: url(http://timg.ffan.com/convert/resize/url_T1HBhTBKK_1RCvBVdK/tfs/1.png);\n    background-size: 100% 100%;\n    vertical-align: middle;\n  }\n  .title{\n    padding: .12rem .1rem .08rem;\n    font-size: .15rem;\n    color: #000;\n    background-color: #f3f4f6;\n    border-top: 1px solid #ebebeb;\n  }\n  .store-details{\n    @include flex;\n    padding: .09rem .1rem .1rem;\n    border-bottom: 1px solid #ebebeb;\n    background-color: #fff;\n    .img{\n      width: .75rem;\n      height: .75rem;\n    }\n    .store-price{\n      @include flex;\n      flex-direction: column;\n      flex: 1;\n      padding-left: .1rem;\n      .name{\n        font-size: .16rem;\n        color: #000;\n      }\n      .price-num{\n        @include flex;\n        align-items: flex-end;\n      }\n      .price{\n        font-size: .16rem;\n        color: #2692fb;\n        i{\n          font-style: normal;\n          font-size: .12rem;\n        }\n      }\n      .num{\n        font-size: .14rem;\n        color: #000;\n      }\n    }\n    \n  }\n  .store-pay-mode,.store-all-price{\n    @include flex;\n    margin: .05rem 0;\n    padding: 0 .1rem;\n    height: .44rem;\n    line-height: .44rem;\n    font-size: .16rem;\n    color: #000;\n    background-color: #fff;\n    border-top: 1px solid #ebebeb;\n    border-bottom: 1px solid #ebebeb;\n    .icon-wechat-pay{\n      padding-right: .04rem;\n      color: #52a54a;\n      font-size: .15rem;\n    }\n  }\n  .store-total{\n    padding: .14rem .1rem;\n    text-align: right;\n    font-size: .15rem;\n    color: #000;\n    span{\n      color: #2692fb;;\n    }\n  }\n  .store-roder-info{\n    padding: .1rem;\n    font-size: .13rem;\n    color: #000;\n    line-height: .24rem;\n    background-color: #fff;\n    border-top: 1px solid #ebebeb;\n    border-bottom: 1px solid #ebebeb;\n    span{\n      display: inline-block;\n      padding-left: .08rem;\n      color: #999;\n      line-height: .15rem;\n    }\n  }\n  .pay-btn{\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0; \n    height: .45rem;\n    line-height: .45rem;\n    font-size: .17rem;\n    text-align: center;\n    color: #fff;\n    background-color: #2692fb;\n  }\n  .over-time-btn {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: .45rem;\n    line-height: .45rem;\n    font-size: .17rem;\n    text-align: center;\n    color: #fff;\n    background-color: #ccc;\n  }\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/routes/Mobile/routes/H5Order/H5OrderContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_utils_tools__ = __webpack_require__("./src/utils/tools.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_utils_fetchUtil__ = __webpack_require__("./src/utils/fetchUtil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_utils_domain__ = __webpack_require__("./src/utils/domain.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Payed__ = __webpack_require__("./src/routes/Mobile/routes/H5Order/Payed/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__PrePay__ = __webpack_require__("./src/routes/Mobile/routes/H5Order/PrePay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__PrePayCount__ = __webpack_require__("./src/routes/Mobile/routes/H5Order/PrePayCount/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__PayCancel__ = __webpack_require__("./src/routes/Mobile/routes/H5Order/PayCancel/index.js");














var Order = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Order, _Component);

  function Order(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Order);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Order.__proto__ || Object.getPrototypeOf(Order)).call(this, props));

    _this.state = {
      data: '',
      orderState: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils_tools__["a" /* getUrlParam */])('order-state')
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Order, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      document.title = '订单';
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils_tools__["a" /* getUrlParam */])('immediately')) {
        var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_utils_domain__["a" /* getDomain */])('/bocxapi/v1/goods/goods_one', { suffix: 'com' });
        __WEBPACK_IMPORTED_MODULE_7_utils_fetchUtil__["a" /* default */].getJSON(url, {
          goodsCode: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils_tools__["a" /* getUrlParam */])('goodsCode')
        }).then(function (data) {
          _this2.setState({
            data: data
          });
        });
      } else {
        var _url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_utils_domain__["a" /* getDomain */])('/bocxapi/v1/trade/order', { suffix: 'com' });
        __WEBPACK_IMPORTED_MODULE_7_utils_fetchUtil__["a" /* default */].getJSON(_url, {
          loginToken: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils_tools__["b" /* getCookie */])('boc_loginToken'),
          orderNo: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils_tools__["a" /* getUrlParam */])('orderNo')
        }).then(function (data) {
          _this2.setState({
            data: data,
            orderState: data.orderStatus
          });
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var pageID = this.props.params.pageID;

      var tpl = void 0;
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils_tools__["a" /* getUrlParam */])('immediately')) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__PrePay__["a" /* default */], { goods: this.state.data, pageID: pageID })
        );
      }
      switch (this.state.orderState) {
        case 'INITIAL':
          tpl = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__PrePayCount__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.state.data, { pageID: pageID }));
          break;
        case 'TRADE_FINISHED':
          tpl = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Payed__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.state.data, { pageID: pageID }));
          break;
        case 'TRADE_CANCEL':
          tpl = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__PayCancel__["a" /* default */], this.state.data);
          break;
        default:
          tpl = null;
      }
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        tpl
      );
    }
  }]);

  return Order;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./src/routes/Mobile/routes/H5Order/H5OrderContainer.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/styles\"]}!./src/routes/Mobile/routes/H5Order/H5OrderContainer.scss");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/styles\"]}!./src/routes/Mobile/routes/H5Order/H5OrderContainer.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/liu/company/wanda/workspace/WebProjects/bo-merchant-new/bo-merchant/src/styles\"]}!./src/routes/Mobile/routes/H5Order/H5OrderContainer.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/routes/Mobile/routes/H5Order/PayCancel/index.js":
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






var PrePayCount = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(PrePayCount, _Component);

  function PrePayCount() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PrePayCount);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PrePayCount.__proto__ || Object.getPrototypeOf(PrePayCount)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PrePayCount, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          orderGoodsVOS = _props.orderGoodsVOS,
          orderNo = _props.orderNo,
          createTime = _props.createTime;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        "div",
        { className: "order-wrap" },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "h3",
          { className: "title" },
          "\u5546\u54C1\u660E\u7EC6"
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "div",
          { className: "store-details" },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
            className: "img",
            src: "http://timg.ffan.com/convert/resize/url_" + orderGoodsVOS[0].pic + "/tfs/1.png"
          }),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "div",
            { className: "store-price" },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              "p",
              { className: "name" },
              orderGoodsVOS[0].title
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              "p",
              { className: "price-num" },
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                "span",
                { className: "price" },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  "i",
                  null,
                  "\uFFE5"
                ),
                orderGoodsVOS[0].formatPrice
              ),
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                "span",
                { className: "num" },
                "\xD71"
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "p",
          { className: "store-all-price" },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "span",
            null,
            "\u5546\u54C1\u91D1\u989D"
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "span",
            null,
            "\uFFE5",
            orderGoodsVOS[0].formatPrice
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "p",
          { className: "store-total" },
          "\u5408\u8BA1\uFF1A",
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "span",
            null,
            "\uFFE5",
            orderGoodsVOS[0].formatPrice
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "div",
          { className: "store-roder-info" },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "p",
            null,
            "\u8BA2\u5355\u7F16\u53F7",
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              "span",
              null,
              orderNo.substring(0, 4) + "\n              " + orderNo.substring(4, 8) + "\n              " + orderNo.substring(8, 12) + "\n              " + orderNo.substring(12, orderNo.length)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "p",
            null,
            "\u4E0B\u5355\u65F6\u95F4",
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              "span",
              null,
              createTime
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "a",
          { className: "over-time-btn" },
          "\u8BA2\u5355\u5DF2\u8FC7\u671F"
        )
      );
    }
  }]);

  return PrePayCount;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PrePayCount);

/***/ }),

/***/ "./src/routes/Mobile/routes/H5Order/Payed/index.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__H5OrderContainer_scss__ = __webpack_require__("./src/routes/Mobile/routes/H5Order/H5OrderContainer.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__H5OrderContainer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__H5OrderContainer_scss__);







var Payed = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Payed, _Component);

  function Payed() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Payed);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Payed.__proto__ || Object.getPrototypeOf(Payed)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Payed, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          orderGoodsVOS = _props.orderGoodsVOS,
          orderNo = _props.orderNo,
          createTime = _props.createTime;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { className: 'order-wrap' },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'p',
          { className: 'status-done status-done-color' },
          '\u5DF2\u5B8C\u6210'
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'h3',
          { className: 'title' },
          '\u5546\u54C1\u660E\u7EC6'
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: 'store-details' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('img', {
            className: 'img',
            src: 'http://timg.ffan.com/convert/resize/url_' + orderGoodsVOS[0].pic + '/tfs/1.png'
          }),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'div',
            { className: 'store-price' },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'p',
              { className: 'name' },
              orderGoodsVOS[0].title
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'p',
              { className: 'price-num' },
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'span',
                { className: 'price' },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  'i',
                  null,
                  '\uFFE5'
                ),
                orderGoodsVOS[0].formatPrice
              ),
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'span',
                { className: 'num' },
                '\xD71'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'p',
          { className: 'store-pay-mode' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            null,
            '\u652F\u4ED8\u65B9\u5F0F'
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            null,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: 'iconfont icon-wechat-pay' }),
            '\u5FAE\u4FE1\u652F\u4ED8'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'p',
          { className: 'store-all-price' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            null,
            '\u5546\u54C1\u91D1\u989D'
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            null,
            '\uFFE5',
            orderGoodsVOS[0].formatPrice
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'p',
          { className: 'store-total' },
          '\u5408\u8BA1\uFF1A',
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            null,
            '\uFFE5',
            orderGoodsVOS[0].formatPrice
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: 'store-roder-info' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'p',
            null,
            '\u8BA2\u5355\u7F16\u53F7',
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'span',
              null,
              orderNo.substring(0, 4) + '\n              ' + orderNo.substring(4, 8) + '\n              ' + orderNo.substring(8, 12) + '\n              ' + orderNo.substring(12, orderNo.length)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'p',
            null,
            '\u4E0B\u5355\u65F6\u95F4',
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'span',
              null,
              createTime
            )
          )
        )
      );
    }
  }]);

  return Payed;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Payed);

/***/ }),

/***/ "./src/routes/Mobile/routes/H5Order/PrePay/index.js":
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









var PrePay = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(PrePay, _Component);

  function PrePay() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PrePay);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PrePay.__proto__ || Object.getPrototypeOf(PrePay)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PrePay, [{
    key: 'buy',
    value: function buy(pageID, goods) {
      var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils_domain__["a" /* getDomain */])('/bocxapi/v1/trade/create_order', { suffix: 'com' });
      __WEBPACK_IMPORTED_MODULE_5_utils_fetchUtil__["a" /* default */].postJSON(url, {
        loginToken: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_utils_tools__["b" /* getCookie */])('boc_loginToken'),
        siedc: 'abc',
        pageId: pageID,
        goodsInfos: JSON.stringify([{
          count: 1,
          goodsCode: goods.goodsCode,
          productId: goods.goodsSkuVOS[0].id
        }])
      }).then(function (data) {
        var callbackUrl = encodeURIComponent('http://open.ffan.net/merchant/home/' + pageID);
        window.location.href = 'https://pu.ffan.com/pay/weixin/?orderNo=' + data.payOrderNo + '&' + ('callBackUrl=' + callbackUrl + '&merchantId=' + data.rainbowMerchantId + '&type=5&cancelUrl=' + callbackUrl);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.goods) {
        return null;
      }
      var _props = this.props,
          pageID = _props.pageID,
          goods = _props.goods;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { className: 'order-wrap' },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'h3',
          { className: 'title' },
          '\u5546\u54C1\u660E\u7EC6'
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: 'store-details' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('img', {
            className: 'img',
            src: 'http://timg.ffan.com/convert/resize/url_' + goods.picList[0].pic + '/tfs/1.png'
          }),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'div',
            { className: 'store-price' },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'p',
              { className: 'name' },
              goods.name
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'p',
              { className: 'price-num' },
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'span',
                { className: 'price' },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  'i',
                  null,
                  '\uFFE5'
                ),
                goods.goodsSkuVOS[0].formatPriceCost
              ),
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'span',
                { className: 'num' },
                '\xD71'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'p',
          { className: 'store-all-price' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            null,
            '\u5546\u54C1\u91D1\u989D'
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            null,
            '\uFFE5',
            goods.goodsSkuVOS[0].formatPriceCost
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'p',
          { className: 'store-total' },
          '\u5408\u8BA1\uFF1A',
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            null,
            '\uFFE5',
            goods.goodsSkuVOS[0].formatPriceCost
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'a',
          {
            className: 'pay-btn',
            onClick: function onClick() {
              return _this2.buy(pageID, goods);
            }
          },
          '\u7ACB\u5373\u652F\u4ED8',
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            null,
            '\uFFE5',
            goods.goodsSkuVOS[0].formatPriceCost
          )
        )
      );
    }
  }]);

  return PrePay;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PrePay);

/***/ }),

/***/ "./src/routes/Mobile/routes/H5Order/PrePayCount/index.js":
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






var PrePayCount = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(PrePayCount, _Component);

  function PrePayCount(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PrePayCount);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PrePayCount.__proto__ || Object.getPrototypeOf(PrePayCount)).call(this, props));

    _this.state = {
      orderDate: new Date(900000 - (_this.props.gmtSystem - _this.props.gmtCreate)),
      overTime: _this.props.gmtSystem - _this.props.gmtCreate > _this.props.timeLimit
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PrePayCount, [{
    key: "buy",
    value: function buy(payOrderNo, rainbowMerchantId, pageID) {
      var callbackUrl = encodeURIComponent("http://open.ffan.net/merchant/home/" + pageID);
      window.location.href = "https://pu.ffan.com/pay/weixin/?orderNo=" + payOrderNo + "&" + ("callBackUrl=" + callbackUrl + "&merchantId=" + rainbowMerchantId + "&type=5&cancelUrl=" + callbackUrl);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var timer = setInterval(function () {
        _this2.state.orderDate = _this2.state.orderDate - 1000;
        if (_this2.state.orderDate <= 0) {
          clearInterval(timer);
          timer = null;
          _this2.setState({
            overTime: true
          });
        } else {
          _this2.setState({
            orderDate: new Date(_this2.state.orderDate)
          });
        }
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          orderDate = _state.orderDate,
          overTime = _state.overTime;
      var _props = this.props,
          orderGoodsVOS = _props.orderGoodsVOS,
          orderNo = _props.orderNo,
          payOrderNo = _props.payOrderNo,
          rainbowMerchantId = _props.rainbowMerchantId,
          pageID = _props.pageID,
          createTime = _props.createTime;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        "div",
        { className: "order-wrap" },
        !overTime ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "p",
          { className: "status-prepaycount status-prepaycount-color" },
          "\u4ED8\u6B3E\u5269\u4F59\u65F6\u95F4\uFF1A",
          orderDate.getUTCHours(),
          "\u5C0F\u65F6",
          orderDate.getUTCMinutes(),
          "\u5206",
          orderDate.getUTCSeconds(),
          "\u79D2"
        ) : null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "h3",
          { className: "title" },
          "\u5546\u54C1\u660E\u7EC6"
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "div",
          { className: "store-details" },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
            className: "img",
            src: "http://timg.ffan.com/convert/resize/url_" + orderGoodsVOS[0].pic + "/tfs/1.png"
          }),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "div",
            { className: "store-price" },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              "p",
              { className: "name" },
              orderGoodsVOS[0].title
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              "p",
              { className: "price-num" },
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                "span",
                { className: "price" },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  "i",
                  null,
                  "\uFFE5"
                ),
                orderGoodsVOS[0].formatPrice
              ),
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                "span",
                { className: "num" },
                "\xD71"
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "p",
          { className: "store-all-price" },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "span",
            null,
            "\u5546\u54C1\u91D1\u989D"
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "span",
            null,
            "\uFFE5",
            orderGoodsVOS[0].formatPrice
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "p",
          { className: "store-total" },
          "\u5408\u8BA1\uFF1A",
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "span",
            null,
            "\uFFE5",
            orderGoodsVOS[0].formatPrice
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "div",
          { className: "store-roder-info" },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "p",
            null,
            "\u8BA2\u5355\u7F16\u53F7",
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              "span",
              null,
              orderNo.substring(0, 4) + "\n              " + orderNo.substring(4, 8) + "\n              " + orderNo.substring(8, 12) + "\n              " + orderNo.substring(12, orderNo.length)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "p",
            null,
            "\u4E0B\u5355\u65F6\u95F4",
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              "span",
              null,
              createTime
            )
          )
        ),
        !overTime ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "a",
          {
            className: "pay-btn",
            onClick: function onClick() {
              return _this3.buy(payOrderNo, rainbowMerchantId, pageID);
            }
          },
          "\u7ACB\u5373\u652F\u4ED8",
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            "span",
            null,
            "\uFFE5",
            orderGoodsVOS[0].price
          )
        ) : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          "a",
          { className: "over-time-btn" },
          "\u8BA2\u5355\u5DF2\u8FC7\u671F"
        )
      );
    }
  }]);

  return PrePayCount;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PrePayCount);

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
//# sourceMappingURL=15.js.map