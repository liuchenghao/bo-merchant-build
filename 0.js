webpackJsonp([0],{

/***/ "./src/routes/Home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

function getComponent(nextState, cb) {
  __webpack_require__.e/* require.ensure */(7).then((function (require) {
    cb(null, __webpack_require__("./src/routes/Home/components/HomeView.js").default);
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'activity',
    childRoutes: [{
      path: 'create',
      getComponent: getComponent
    }, {
      path: 'edit/:activityID',
      getComponent: getComponent
    }]
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/Editor/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store_reducers__ = __webpack_require__("./src/store/reducers.js");


/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'edit/:pageID',

    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(5).then((function (require) {
        var Editor = __webpack_require__("./src/routes/Mobile/routes/Editor/containers/MobileEditorContainer.js").default;
        var product = __webpack_require__("./src/routes/Mobile/routes/Editor/modules/product.js").default;
        var preview = __webpack_require__("./src/routes/Mobile/routes/Editor/modules/preview.js").default;
        var detail = __webpack_require__("./src/routes/Mobile/routes/Editor/modules/detail.js").default;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_store_reducers__["injectReducer"])(store, { key: 'product', reducer: product });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_store_reducers__["injectReducer"])(store, { key: 'preview', reducer: preview });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_store_reducers__["injectReducer"])(store, { key: 'detail', reducer: detail });
        cb(null, Editor);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/H5BindCount/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'login/:pageID',
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(13).then((function (require) {
        var Login = __webpack_require__("./src/routes/Mobile/routes/H5BindCount/LoginContainer.js").default;
        cb(null, Login);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/H5Creator/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'creator',
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(16).then((function (require) {
        var Creator = __webpack_require__("./src/routes/Mobile/routes/H5Creator/Creator.js").default;
        cb(null, Creator);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/H5Editor/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store_reducers__ = __webpack_require__("./src/store/reducers.js");


/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'h5/edit/:pageID',

    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(4).then((function (require) {
        var Editor = __webpack_require__("./src/routes/Mobile/routes/H5Editor/containers/H5MobileEditorContainer.js").default;

        var fsDetail = __webpack_require__("./src/routes/Mobile/routes/H5Editor/modules/fsDetail.js").default;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_store_reducers__["injectReducer"])(store, { key: 'fsDetail', reducer: fsDetail });

        var fsProduct = __webpack_require__("./src/routes/Mobile/routes/H5Editor/modules/fsProduct.js").default;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_store_reducers__["injectReducer"])(store, { key: 'fsProduct', reducer: fsProduct });

        var fsPreview = __webpack_require__("./src/routes/Mobile/routes/H5Editor/modules/fsPreview.js").default;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_store_reducers__["injectReducer"])(store, { key: 'previewData', reducer: fsPreview });

        var remotes = __webpack_require__("./src/routes/Mobile/routes/H5Editor/modules/remotes.js").default;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_store_reducers__["injectReducer"])(store, { key: 'remotes', reducer: remotes });

        var eleStruct = __webpack_require__("./src/routes/Mobile/routes/H5Editor/modules/eleStruct.js").default;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_store_reducers__["injectReducer"])(store, { key: 'eleStructData', reducer: eleStruct });

        cb(null, Editor);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/H5MemberCenter/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'member-center/:pageID',
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(14).then((function (require) {
        var MemberCenter = __webpack_require__("./src/routes/Mobile/routes/H5MemberCenter/H5MemberContainer.js").default;
        cb(null, MemberCenter);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/H5MyOrderList/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'order-list/:pageID',
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(12).then((function (require) {
        var MemberCenter = __webpack_require__("./src/routes/Mobile/routes/H5MyOrderList/H5MyOrderListContainer.js").default;
        cb(null, MemberCenter);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/H5Order/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'order/:pageID',
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(15).then((function (require) {
        var Login = __webpack_require__("./src/routes/Mobile/routes/H5Order/H5OrderContainer.js").default;
        cb(null, Login);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/Home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'home/:pageID',
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(9).then((function (require) {
        var Home = __webpack_require__("./src/routes/Mobile/containers/HomeContainer.js").default;
        cb(null, Home);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/Member/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'member',

    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(8).then((function (require) {
        var Member = __webpack_require__("./src/routes/Mobile/routes/Member/MemberContainer.js").default;
        cb(null, Member);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/ProbeReport.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'probe/report',
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(6).then((function (require) {
        var Report = __webpack_require__("./src/routes/Mobile/containers/ProbeReportContainer.js").default;
        cb(null, Report);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/TemplateRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'template',
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(10).then((function (require) {
        var Template = __webpack_require__("./src/routes/Mobile/containers/TemplateContainer.js").default;
        cb(null, Template);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ }),

/***/ "./src/routes/Mobile/routes/UserPreivew/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    path: 'user/preview/:pageID',
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(11).then((function (require) {
        var UserPreview = __webpack_require__("./src/routes/Mobile/containers/UserPreviewContainer.js").default;
        cb(null, UserPreview);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  };
});

/***/ })

});
//# sourceMappingURL=0.js.map