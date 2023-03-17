"use strict";
(self["webpackChunkwebpack_template_repository"] = self["webpackChunkwebpack_template_repository"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'RobotoRegular', Arial, Helvetica, sans-serif;\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\tformat: ('ttf');\n}\n\n\n\nbody {\n\tbackground-color: black;\n\tcolor: rgba(209, 209, 209, 0.26);\n\tfont-family: 'RobotoRegular', sans-serif;\n\tfont-size: 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100vh;\n\tmargin-top: 1rem;\n\tgap: 5rem;\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-color: rgba(240, 248, 255, 0.423);\n\tborder-style: solid;\n\tfont-size: 3rem;\n\tfont-weight: 700;\n}\n\nform, input, .return-btn{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\tfont-size: 1.5rem;\n\tfont-weight: 200;\n\tcolor: white;\n\topacity: 0.8;\t\n}\n\n.form-control{\n\tdisplay: flex;\n\tfont-size: 2rem;\n\tfont-weight: 200;\n\tcolor: white;\n\topacity: 0.8;\n\n}\n\t\n\ninput#btn, .return-btn{\n\twidth:  30%;\n\talign-self: center;\n}\n\n\ninput, .return-btn{\n\tflex-grow: 1;\n\tbackground-color: rgb(138, 138, 138);\n\talign-self: center;\n}\nlabel{\n\tflex-basis: 40%;\n\tfont-size: 1.5rem;\n\ttext-align: end;\n\tpadding-right: .5rem;\n\talign-self: center;\n}\n\ninput:focus-within, button:focus-within{\n\topacity: 1;\n\t\n}\n\n/* #email:invalid,\n#country:invalid,\n#zip:invalid,\n#password:invalid,\n#passwordConfirm:invalid {\nborder: 8px dashed red;\n}\n\n#email:valid,\n#country:valid,\n#zip:valid,\n#password:valid,\n#password2:valid{\nborder: 8px solid green; \n} */\n\n#email:focus,\n#country:focus,\n#zip:focus,\n#password:focus,\n#passwordConfirm:focus{\nborder: none;\ncolor: white;\n}\n\n#email[type=\"email\"]\n#country[type=\"text\"],\n#zip[type=\"number\"],\n#password[type=\"password\"],\n#passwordConfirm[type=\"password\"] {\n\tappearance: none; \n\tcolor: white;\n}\n\nspan {\n\tbackground-image: linear-gradient(\n\t\t90deg,\n\t\tred,\n\t\tblue,\n\t\tgreen,\n\t\torange,\n\t\tyellow,\n\t\tpurple\n\t);\n\tbackground-clip: text;\n\t-webkit-background-clip: text;\n\tcolor: transparent;\n\tpadding: 1rem 2rem;\n}\n\n.form-control {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tfont-size: 2rem;\n\tfont-weight: 200;\n\tcolor: white;\n\topacity: 0.8;\n\tgap: .2rem;\n}\n\nfieldset {\n\tdisplay: flex;\n\tflex-grow:1;\n\tflex-direction: column;\n\tgap: 1rem;\n\tborder: 0;\n\twidth: 60dvw;\n}\n\nlegend {\n    font-weight: 400;\n}\n\n.submit-success-container{\n\tdisplay: flex;\n\tflex-direction: column;\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,0DAA0D;CAC1D,4CAAoC;CACpC,eAAe;AAChB;;;;AAIA;CACC,uBAAuB;CACvB,gCAAgC;CAChC,wCAAwC;CACxC,eAAe;CACf,aAAa;CACb,sBAAsB;CACtB,2BAA2B;CAC3B,mBAAmB;CACnB,SAAS;CACT,UAAU;CACV,aAAa;CACb,gBAAgB;CAChB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,wCAAwC;CACxC,mBAAmB;CACnB,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,WAAW;CACX,iBAAiB;CACjB,gBAAgB;CAChB,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,aAAa;CACb,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,YAAY;;AAEb;;;AAGA;CACC,WAAW;CACX,kBAAkB;AACnB;;;AAGA;CACC,YAAY;CACZ,oCAAoC;CACpC,kBAAkB;AACnB;AACA;CACC,eAAe;CACf,iBAAiB;CACjB,eAAe;CACf,oBAAoB;CACpB,kBAAkB;AACnB;;AAEA;CACC,UAAU;;AAEX;;AAEA;;;;;;;;;;;;;;GAcG;;AAEH;;;;;AAKA,YAAY;AACZ,YAAY;AACZ;;AAEA;;;;;CAKC,gBAAgB;CAChB,YAAY;AACb;;AAEA;CACC;;;;;;;;EAQC;CACD,qBAAqB;CACrB,6BAA6B;CAC7B,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,uBAAuB;CACvB,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,YAAY;CACZ,UAAU;AACX;;AAEA;CACC,aAAa;CACb,WAAW;CACX,sBAAsB;CACtB,SAAS;CACT,SAAS;CACT,YAAY;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;CACC,aAAa;CACb,sBAAsB;;AAEvB","sourcesContent":["@font-face {\n\tfont-family: 'RobotoRegular', Arial, Helvetica, sans-serif;\n\tsrc: url(./fonts/Roboto-Regular.ttf);\n\tformat: ('ttf');\n}\n\n\n\nbody {\n\tbackground-color: black;\n\tcolor: rgba(209, 209, 209, 0.26);\n\tfont-family: 'RobotoRegular', sans-serif;\n\tfont-size: 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100vh;\n\tmargin-top: 1rem;\n\tgap: 5rem;\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-color: rgba(240, 248, 255, 0.423);\n\tborder-style: solid;\n\tfont-size: 3rem;\n\tfont-weight: 700;\n}\n\nform, input, .return-btn{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\tfont-size: 1.5rem;\n\tfont-weight: 200;\n\tcolor: white;\n\topacity: 0.8;\t\n}\n\n.form-control{\n\tdisplay: flex;\n\tfont-size: 2rem;\n\tfont-weight: 200;\n\tcolor: white;\n\topacity: 0.8;\n\n}\n\t\n\ninput#btn, .return-btn{\n\twidth:  30%;\n\talign-self: center;\n}\n\n\ninput, .return-btn{\n\tflex-grow: 1;\n\tbackground-color: rgb(138, 138, 138);\n\talign-self: center;\n}\nlabel{\n\tflex-basis: 40%;\n\tfont-size: 1.5rem;\n\ttext-align: end;\n\tpadding-right: .5rem;\n\talign-self: center;\n}\n\ninput:focus-within, button:focus-within{\n\topacity: 1;\n\t\n}\n\n/* #email:invalid,\n#country:invalid,\n#zip:invalid,\n#password:invalid,\n#passwordConfirm:invalid {\nborder: 8px dashed red;\n}\n\n#email:valid,\n#country:valid,\n#zip:valid,\n#password:valid,\n#password2:valid{\nborder: 8px solid green; \n} */\n\n#email:focus,\n#country:focus,\n#zip:focus,\n#password:focus,\n#passwordConfirm:focus{\nborder: none;\ncolor: white;\n}\n\n#email[type=\"email\"]\n#country[type=\"text\"],\n#zip[type=\"number\"],\n#password[type=\"password\"],\n#passwordConfirm[type=\"password\"] {\n\tappearance: none; \n\tcolor: white;\n}\n\nspan {\n\tbackground-image: linear-gradient(\n\t\t90deg,\n\t\tred,\n\t\tblue,\n\t\tgreen,\n\t\torange,\n\t\tyellow,\n\t\tpurple\n\t);\n\tbackground-clip: text;\n\t-webkit-background-clip: text;\n\tcolor: transparent;\n\tpadding: 1rem 2rem;\n}\n\n.form-control {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tfont-size: 2rem;\n\tfont-weight: 200;\n\tcolor: white;\n\topacity: 0.8;\n\tgap: .2rem;\n}\n\nfieldset {\n\tdisplay: flex;\n\tflex-grow:1;\n\tflex-direction: column;\n\tgap: 1rem;\n\tborder: 0;\n\twidth: 60dvw;\n}\n\nlegend {\n    font-weight: 400;\n}\n\n.submit-success-container{\n\tdisplay: flex;\n\tflex-direction: column;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/formValidation.js":
/*!*******************************!*\
  !*** ./src/formValidation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ lostFocus),
/* harmony export */   "removeDefaultValidationStyling": () => (/* binding */ removeDefaultValidationStyling)
/* harmony export */ });
/* eslint-disable no-use-before-define */
// 

function lostFocus(field) {

    field.forEach((el) => {
        el.addEventListener('blur', (e) => {
            e.preventDefault();
            whatFieldToTest(e);
            updateSubmitButton(field)
        });
        if (el.id === 'passwordConfirm') {
            updateSubmitButton(field);
        }
        if (el.id === 'btn') {
            el.addEventListener('click', (e) => {
                updateSubmitButton(field);
            });
        }
    }
    );
}


function updateSubmitButton(field) {
    const fieldArray = [...field]

    const allFieldsValid = fieldArray.every((el) => el.validity.valid)
    const submitButton = document.querySelector('#btn');
    // if false, disable button.... 
    if (!allFieldsValid) {
        submitButton.disabled = true;
        submitButton.style.cursor = 'not-allowed';
    } else {
        submitButton.disabled = false;
        submitButton.style.cursor = 'pointer';
    }
}


function removeDefaultValidationStyling(input) {
    input.forEach((el) => {
        el.style.setProperty('border', 'none');
    });
}

function whatFieldToTest(e) {
    const focusLost = e.target.id;
    if (focusLost === 'email') {
        validateEmail(focusLost)
    }
    if (focusLost === 'country') {
        validateCountry(focusLost)
    }
    if (focusLost === 'zip') {
        validateZip(focusLost)
    }
    if (focusLost === 'password') {
        validateFirstPassword(focusLost)
    }
    if (focusLost === 'passwordConfirm') {
        validateConfirmPassword(focusLost)
    }
}


function validateEmail(el) {
    const formEl = document.querySelector(`#${el}`);
    if (formEl.validity.patternMismatch || formEl.validity.valueMissing) {
        formEl.setCustomValidity("I am expecting an e-mail address!");
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid red');
        formEl.reportValidity();
    } else {
        formEl.setCustomValidity('');
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid green');
    }
    console.log('email', formEl.validity.valid)
}

function validateCountry(el) {
    const formEl = document.querySelector(`#${el}`);
    if (formEl.validity.valueMissing) {
        formEl.setCustomValidity("Please enter a country!");
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid red');
        formEl.reportValidity();
    } else {
        formEl.setCustomValidity('');
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid green');
    }
    console.log('country', formEl.validity.valid)
}

function validateZip(el) {
    const formEl = document.querySelector(`#${el}`);
    if (formEl.validity.patternMismatch || formEl.validity.valueMissing) {
        formEl.setCustomValidity("I am expecting a zip code!");
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid red');
        formEl.reportValidity();
    } else {
        formEl.setCustomValidity('');
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid green');
    }
    console.log('zip', formEl.validity.valid)
}

function validateFirstPassword(el) {
    const formEl = document.querySelector(`#${el}`);

    if (formEl.validity.patternMismatch || formEl.validity.valueMissing) {
        formEl.setCustomValidity("Password at least 8 characters long, at least 1 uppercase letter, 1 lowercase letter, and at least one symbol and a max length of 27!");
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid red');
        formEl.reportValidity();
    } else {
        formEl.setCustomValidity('');
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid green');
    }
    console.log('pass 1', formEl.validity.valid)
}

function validateConfirmPassword(el) {
    const password = document.querySelector('#password');
    const passwordValue = password.value;
    const passwordConfirm = document.querySelector('#passwordConfirm');
    const passwordConfirmValue = passwordConfirm.value;
    if (passwordValue !== passwordConfirmValue || passwordConfirm.validity.valueMissing) {
        passwordConfirm.setCustomValidity("Passwords do not match!");
        passwordConfirm.style.removeProperty('border');
        passwordConfirm.style.setProperty('border', '8px solid red');
        passwordConfirm.reportValidity();
    } else {
        passwordConfirm.setCustomValidity('');
        passwordConfirm.style.removeProperty('border');
        passwordConfirm.style.setProperty('border', '8px solid green');
    }
    console.log('confirm pass', passwordConfirm.validity.valid)
}








/***/ }),

/***/ "./src/highFive.js":
/*!*************************!*\
  !*** ./src/highFive.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_colbert_high_five_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/colbert_high_five.gif */ "./src/images/colbert_high_five.gif");



function createImage(src, alt,  width = '600', height = '400') {
	const img = new Image();
	img.src = src;
	img.alt = alt;
	img.width = width;
	img.height = height;
	return img;
}

const successPage = (() => {

const submitSuccessContainer = document.createElement('div');
submitSuccessContainer.classList.add('submit-success-container');

const highFiveImage = createImage(_images_colbert_high_five_gif__WEBPACK_IMPORTED_MODULE_0__, 'Stephen Colbert High Five Gif from Colbert Report', '600', '400');
submitSuccessContainer.appendChild(highFiveImage);

const returnMessage = document.createElement('h2');
returnMessage.textContent = 'You have successfully signed up!';
submitSuccessContainer.appendChild(returnMessage);

const returnMessage2 = document.createElement('button');
returnMessage2.type = 'button';
returnMessage2.classList.add('return-btn');
returnMessage2.textContent = 'Sign Up Again?';
submitSuccessContainer.appendChild(returnMessage2);

return submitSuccessContainer;
})();  


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (successPage);




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-form */ "./src/signup-form.js");
/* harmony import */ var _highFive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highFive */ "./src/highFive.js");
/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formValidation */ "./src/formValidation.js");





function displayContainer(bool) {
    const body = document.querySelector('body');
    if (bool) {
        while (body.children.length > 1) {
            body.removeChild(body.children[1]);
        }
        body.appendChild(_highFive__WEBPACK_IMPORTED_MODULE_2__["default"]);
        const signUpAgainButton = document.querySelector('.return-btn');
        
        signUpAgainButton?.addEventListener('click', () => {
            const newFlag = false;
            displayContainer(newFlag);
        });
    }
    if (!bool) {
        while (body.children.length > 1) {
            body.removeChild(body.children[1]);
        }
        body.appendChild(_signup_form__WEBPACK_IMPORTED_MODULE_1__["default"]);
        const form = document.querySelector('form');
        form.reset();   
        const submitButton = document.querySelector('#btn');
        submitButton?.addEventListener('click', (e) => {
            e.preventDefault();
            const newFlag = true;
            displayContainer(newFlag);
        });
        
        
        
    }
}
displayContainer(false);

const input = document.querySelectorAll('input');

(0,_formValidation__WEBPACK_IMPORTED_MODULE_3__.removeDefaultValidationStyling)(input);
// fires event listener on blur to validate input and apply styling /error message / validation 
(0,_formValidation__WEBPACK_IMPORTED_MODULE_3__["default"])(input);


/***/ }),

/***/ "./src/signup-form.js":
/*!****************************!*\
  !*** ./src/signup-form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// wrap in iffe
const signupForm = (() => {

const form = document.createElement('form');
form.id = 'Sign-up-form';
form.name = 'Sign-up-form';
form.noValidate= true;

const fieldset = document.createElement('fieldset');
fieldset.id = 'signup-fieldset';
fieldset.name = 'signup-fieldset';

const legend = document.createElement('legend');
legend.textContent = 'Sign Up Here:';
fieldset.appendChild(legend);


function createFormSection(labelName, inputType, inputName, inputId, inputPlaceholder, autocomplete, pattern, inputRequired = true ) {
	const section = document.createElement('div');
	section.classList.add('form-control');
	fieldset.appendChild(section);

	const label = document.createElement('label');
	label.textContent = labelName;
	label.setAttribute('for', inputId);
	section.appendChild(label);

	const input = document.createElement('input');
	input.id = inputId;
	input.name = inputName;
	input.type = inputType;
	input.placeholder = inputPlaceholder;
	input.required = inputRequired;
	input.autocomplete = autocomplete;
	input.pattern = pattern;
	
	if (labelName === 'Zip Code*:') {
		input.inputmode = 'numeric';
	}	
	section.appendChild(input);
}

createFormSection('Email*:', 'email', 'email', 'email', 'example@odin.com', 'email', '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$');
createFormSection('Country*:', 'text', 'country', 'country', 'United States', 'country', '^[a-zA-Z\\s]*$');
createFormSection('Zip Code*:', 'text', 'zip', 'zip', '00000', 'postal-code', '\\d{5}', '11111');
createFormSection('Create Password*:', 'password', 'password', 'password', 'Create Unique Password', 'new-password', '^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$');
createFormSection('Confirm Password*:', 'password', 'passwordConfirm', 'passwordConfirm', 'Confirm Password', 'new-password', '^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$'); 

const formBtn = document.createElement('input');
formBtn.type = 'submit';
formBtn.id = 'btn';
formBtn.name = 'btn';
formBtn.textContent = 'Sign Up Now';
/* formBtn.disabled = true;
formBtn.style.cursor = 'not-allowed'; */
fieldset.appendChild(formBtn);
form.appendChild(fieldset);

form.addEventListener('submit', (e) => {
	e.preventDefault();
	form.clear()
})


return form;
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signupForm);



/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/images/colbert_high_five.gif":
/*!******************************************!*\
  !*** ./src/images/colbert_high_five.gif ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "817042eea4e28b53c899.gif";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vc3JjL2Zvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL3NyYy9oaWdoRml2ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vc3JjL3NpZ251cC1mb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG5cXHRmb3JtYXQ6ICgndHRmJyk7XFxufVxcblxcblxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiByZ2JhKDIwOSwgMjA5LCAyMDksIDAuMjYpO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcicsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxuXFx0Z2FwOiA1cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC40MjMpO1xcblxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmZvcm0sIGlucHV0LCAucmV0dXJuLWJ0bntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogMjAwO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRvcGFjaXR5OiAwLjg7XFx0XFxufVxcblxcbi5mb3JtLWNvbnRyb2x7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDIwMDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0b3BhY2l0eTogMC44O1xcblxcbn1cXG5cXHRcXG5cXG5pbnB1dCNidG4sIC5yZXR1cm4tYnRue1xcblxcdHdpZHRoOiAgMzAlO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuXFxuaW5wdXQsIC5yZXR1cm4tYnRue1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCAxMzgsIDEzOCk7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5sYWJlbHtcXG5cXHRmbGV4LWJhc2lzOiA0MCU7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0dGV4dC1hbGlnbjogZW5kO1xcblxcdHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMtd2l0aGluLCBidXR0b246Zm9jdXMtd2l0aGlue1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0XFxufVxcblxcbi8qICNlbWFpbDppbnZhbGlkLFxcbiNjb3VudHJ5OmludmFsaWQsXFxuI3ppcDppbnZhbGlkLFxcbiNwYXNzd29yZDppbnZhbGlkLFxcbiNwYXNzd29yZENvbmZpcm06aW52YWxpZCB7XFxuYm9yZGVyOiA4cHggZGFzaGVkIHJlZDtcXG59XFxuXFxuI2VtYWlsOnZhbGlkLFxcbiNjb3VudHJ5OnZhbGlkLFxcbiN6aXA6dmFsaWQsXFxuI3Bhc3N3b3JkOnZhbGlkLFxcbiNwYXNzd29yZDI6dmFsaWR7XFxuYm9yZGVyOiA4cHggc29saWQgZ3JlZW47IFxcbn0gKi9cXG5cXG4jZW1haWw6Zm9jdXMsXFxuI2NvdW50cnk6Zm9jdXMsXFxuI3ppcDpmb2N1cyxcXG4jcGFzc3dvcmQ6Zm9jdXMsXFxuI3Bhc3N3b3JkQ29uZmlybTpmb2N1c3tcXG5ib3JkZXI6IG5vbmU7XFxuY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZW1haWxbdHlwZT1cXFwiZW1haWxcXFwiXVxcbiNjb3VudHJ5W3R5cGU9XFxcInRleHRcXFwiXSxcXG4jemlwW3R5cGU9XFxcIm51bWJlclxcXCJdLFxcbiNwYXNzd29yZFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLFxcbiNwYXNzd29yZENvbmZpcm1bdHlwZT1cXFwicGFzc3dvcmRcXFwiXSB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTsgXFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG5zcGFuIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0OTBkZWcsXFxuXFx0XFx0cmVkLFxcblxcdFxcdGJsdWUsXFxuXFx0XFx0Z3JlZW4sXFxuXFx0XFx0b3JhbmdlLFxcblxcdFxcdHllbGxvdyxcXG5cXHRcXHRwdXJwbGVcXG5cXHQpO1xcblxcdGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG5cXHQtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG5cXHRjb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0cGFkZGluZzogMXJlbSAycmVtO1xcbn1cXG5cXG4uZm9ybS1jb250cm9sIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogMjAwO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRvcGFjaXR5OiAwLjg7XFxuXFx0Z2FwOiAuMnJlbTtcXG59XFxuXFxuZmllbGRzZXQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1ncm93OjE7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0Ym9yZGVyOiAwO1xcblxcdHdpZHRoOiA2MGR2dztcXG59XFxuXFxubGVnZW5kIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnN1Ym1pdC1zdWNjZXNzLWNvbnRhaW5lcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQywwREFBMEQ7Q0FDMUQsNENBQW9DO0NBQ3BDLGVBQWU7QUFDaEI7Ozs7QUFJQTtDQUNDLHVCQUF1QjtDQUN2QixnQ0FBZ0M7Q0FDaEMsd0NBQXdDO0NBQ3hDLGVBQWU7Q0FDZixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFVBQVU7Q0FDVixhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQix3Q0FBd0M7Q0FDeEMsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZOztBQUViOzs7QUFHQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7OztBQUdBO0NBQ0MsWUFBWTtDQUNaLG9DQUFvQztDQUNwQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLG9CQUFvQjtDQUNwQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxVQUFVOztBQUVYOztBQUVBOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVIOzs7OztBQUtBLFlBQVk7QUFDWixZQUFZO0FBQ1o7O0FBRUE7Ozs7O0NBS0MsZ0JBQWdCO0NBQ2hCLFlBQVk7QUFDYjs7QUFFQTtDQUNDOzs7Ozs7OztFQVFDO0NBQ0QscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3QixrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtDQUNaLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxTQUFTO0NBQ1QsWUFBWTtBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjs7QUFFdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXHRzcmM6IHVybCguL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0Zik7XFxuXFx0Zm9ybWF0OiAoJ3R0ZicpO1xcbn1cXG5cXG5cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRjb2xvcjogcmdiYSgyMDksIDIwOSwgMjA5LCAwLjI2KTtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcblxcdGdhcDogNXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNDIzKTtcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5mb3JtLCBpbnB1dCwgLnJldHVybi1idG57XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDIwMDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0b3BhY2l0eTogMC44O1xcdFxcbn1cXG5cXG4uZm9ybS1jb250cm9se1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAyMDA7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG9wYWNpdHk6IDAuODtcXG5cXG59XFxuXFx0XFxuXFxuaW5wdXQjYnRuLCAucmV0dXJuLWJ0bntcXG5cXHR3aWR0aDogIDMwJTtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcblxcbmlucHV0LCAucmV0dXJuLWJ0bntcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOCwgMTM4LCAxMzgpO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxubGFiZWx7XFxuXFx0ZmxleC1iYXNpczogNDAlO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtYWxpZ246IGVuZDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmlucHV0OmZvY3VzLXdpdGhpbiwgYnV0dG9uOmZvY3VzLXdpdGhpbntcXG5cXHRvcGFjaXR5OiAxO1xcblxcdFxcbn1cXG5cXG4vKiAjZW1haWw6aW52YWxpZCxcXG4jY291bnRyeTppbnZhbGlkLFxcbiN6aXA6aW52YWxpZCxcXG4jcGFzc3dvcmQ6aW52YWxpZCxcXG4jcGFzc3dvcmRDb25maXJtOmludmFsaWQge1xcbmJvcmRlcjogOHB4IGRhc2hlZCByZWQ7XFxufVxcblxcbiNlbWFpbDp2YWxpZCxcXG4jY291bnRyeTp2YWxpZCxcXG4jemlwOnZhbGlkLFxcbiNwYXNzd29yZDp2YWxpZCxcXG4jcGFzc3dvcmQyOnZhbGlke1xcbmJvcmRlcjogOHB4IHNvbGlkIGdyZWVuOyBcXG59ICovXFxuXFxuI2VtYWlsOmZvY3VzLFxcbiNjb3VudHJ5OmZvY3VzLFxcbiN6aXA6Zm9jdXMsXFxuI3Bhc3N3b3JkOmZvY3VzLFxcbiNwYXNzd29yZENvbmZpcm06Zm9jdXN7XFxuYm9yZGVyOiBub25lO1xcbmNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2VtYWlsW3R5cGU9XFxcImVtYWlsXFxcIl1cXG4jY291bnRyeVt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuI3ppcFt0eXBlPVxcXCJudW1iZXJcXFwiXSxcXG4jcGFzc3dvcmRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSxcXG4jcGFzc3dvcmRDb25maXJtW3R5cGU9XFxcInBhc3N3b3JkXFxcIl0ge1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7IFxcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuc3BhbiB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdDkwZGVnLFxcblxcdFxcdHJlZCxcXG5cXHRcXHRibHVlLFxcblxcdFxcdGdyZWVuLFxcblxcdFxcdG9yYW5nZSxcXG5cXHRcXHR5ZWxsb3csXFxuXFx0XFx0cHVycGxlXFxuXFx0KTtcXG5cXHRiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuXFx0LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuXFx0Y29sb3I6IHRyYW5zcGFyZW50O1xcblxcdHBhZGRpbmc6IDFyZW0gMnJlbTtcXG59XFxuXFxuLmZvcm0tY29udHJvbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDIwMDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0b3BhY2l0eTogMC44O1xcblxcdGdhcDogLjJyZW07XFxufVxcblxcbmZpZWxkc2V0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZ3JvdzoxO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGJvcmRlcjogMDtcXG5cXHR3aWR0aDogNjBkdnc7XFxufVxcblxcbmxlZ2VuZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zdWJtaXQtc3VjY2Vzcy1jb250YWluZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8vIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb3N0Rm9jdXMoZmllbGQpIHtcblxuICAgIGZpZWxkLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgd2hhdEZpZWxkVG9UZXN0KGUpO1xuICAgICAgICAgICAgdXBkYXRlU3VibWl0QnV0dG9uKGZpZWxkKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGVsLmlkID09PSAncGFzc3dvcmRDb25maXJtJykge1xuICAgICAgICAgICAgdXBkYXRlU3VibWl0QnV0dG9uKGZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwuaWQgPT09ICdidG4nKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWl0QnV0dG9uKGZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgICk7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlU3VibWl0QnV0dG9uKGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRBcnJheSA9IFsuLi5maWVsZF1cblxuICAgIGNvbnN0IGFsbEZpZWxkc1ZhbGlkID0gZmllbGRBcnJheS5ldmVyeSgoZWwpID0+IGVsLnZhbGlkaXR5LnZhbGlkKVxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4nKTtcbiAgICAvLyBpZiBmYWxzZSwgZGlzYWJsZSBidXR0b24uLi4uIFxuICAgIGlmICghYWxsRmllbGRzVmFsaWQpIHtcbiAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnN0eWxlLmN1cnNvciA9ICdub3QtYWxsb3dlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEZWZhdWx0VmFsaWRhdGlvblN0eWxpbmcoaW5wdXQpIHtcbiAgICBpbnB1dC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYm9yZGVyJywgJ25vbmUnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gd2hhdEZpZWxkVG9UZXN0KGUpIHtcbiAgICBjb25zdCBmb2N1c0xvc3QgPSBlLnRhcmdldC5pZDtcbiAgICBpZiAoZm9jdXNMb3N0ID09PSAnZW1haWwnKSB7XG4gICAgICAgIHZhbGlkYXRlRW1haWwoZm9jdXNMb3N0KVxuICAgIH1cbiAgICBpZiAoZm9jdXNMb3N0ID09PSAnY291bnRyeScpIHtcbiAgICAgICAgdmFsaWRhdGVDb3VudHJ5KGZvY3VzTG9zdClcbiAgICB9XG4gICAgaWYgKGZvY3VzTG9zdCA9PT0gJ3ppcCcpIHtcbiAgICAgICAgdmFsaWRhdGVaaXAoZm9jdXNMb3N0KVxuICAgIH1cbiAgICBpZiAoZm9jdXNMb3N0ID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgIHZhbGlkYXRlRmlyc3RQYXNzd29yZChmb2N1c0xvc3QpXG4gICAgfVxuICAgIGlmIChmb2N1c0xvc3QgPT09ICdwYXNzd29yZENvbmZpcm0nKSB7XG4gICAgICAgIHZhbGlkYXRlQ29uZmlybVBhc3N3b3JkKGZvY3VzTG9zdClcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbCkge1xuICAgIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2VsfWApO1xuICAgIGlmIChmb3JtRWwudmFsaWRpdHkucGF0dGVybk1pc21hdGNoIHx8IGZvcm1FbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgZm9ybUVsLnNldEN1c3RvbVZhbGlkaXR5KFwiSSBhbSBleHBlY3RpbmcgYW4gZS1tYWlsIGFkZHJlc3MhXCIpO1xuICAgICAgICBmb3JtRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JvcmRlcicpO1xuICAgICAgICBmb3JtRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JvcmRlcicsICc4cHggc29saWQgcmVkJyk7XG4gICAgICAgIGZvcm1FbC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1FbC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICAgIGZvcm1FbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYm9yZGVyJyk7XG4gICAgICAgIGZvcm1FbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYm9yZGVyJywgJzhweCBzb2xpZCBncmVlbicpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZW1haWwnLCBmb3JtRWwudmFsaWRpdHkudmFsaWQpXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ291bnRyeShlbCkge1xuICAgIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2VsfWApO1xuICAgIGlmIChmb3JtRWwudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgIGZvcm1FbC5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBlbnRlciBhIGNvdW50cnkhXCIpO1xuICAgICAgICBmb3JtRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JvcmRlcicpO1xuICAgICAgICBmb3JtRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JvcmRlcicsICc4cHggc29saWQgcmVkJyk7XG4gICAgICAgIGZvcm1FbC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1FbC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICAgIGZvcm1FbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYm9yZGVyJyk7XG4gICAgICAgIGZvcm1FbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYm9yZGVyJywgJzhweCBzb2xpZCBncmVlbicpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnY291bnRyeScsIGZvcm1FbC52YWxpZGl0eS52YWxpZClcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVaaXAoZWwpIHtcbiAgICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbH1gKTtcbiAgICBpZiAoZm9ybUVsLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCB8fCBmb3JtRWwudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgIGZvcm1FbC5zZXRDdXN0b21WYWxpZGl0eShcIkkgYW0gZXhwZWN0aW5nIGEgemlwIGNvZGUhXCIpO1xuICAgICAgICBmb3JtRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JvcmRlcicpO1xuICAgICAgICBmb3JtRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JvcmRlcicsICc4cHggc29saWQgcmVkJyk7XG4gICAgICAgIGZvcm1FbC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1FbC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICAgIGZvcm1FbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYm9yZGVyJyk7XG4gICAgICAgIGZvcm1FbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYm9yZGVyJywgJzhweCBzb2xpZCBncmVlbicpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnemlwJywgZm9ybUVsLnZhbGlkaXR5LnZhbGlkKVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZpcnN0UGFzc3dvcmQoZWwpIHtcbiAgICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbH1gKTtcblxuICAgIGlmIChmb3JtRWwudmFsaWRpdHkucGF0dGVybk1pc21hdGNoIHx8IGZvcm1FbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgZm9ybUVsLnNldEN1c3RvbVZhbGlkaXR5KFwiUGFzc3dvcmQgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcsIGF0IGxlYXN0IDEgdXBwZXJjYXNlIGxldHRlciwgMSBsb3dlcmNhc2UgbGV0dGVyLCBhbmQgYXQgbGVhc3Qgb25lIHN5bWJvbCBhbmQgYSBtYXggbGVuZ3RoIG9mIDI3IVwiKTtcbiAgICAgICAgZm9ybUVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdib3JkZXInKTtcbiAgICAgICAgZm9ybUVsLnN0eWxlLnNldFByb3BlcnR5KCdib3JkZXInLCAnOHB4IHNvbGlkIHJlZCcpO1xuICAgICAgICBmb3JtRWwucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtRWwuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICBmb3JtRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JvcmRlcicpO1xuICAgICAgICBmb3JtRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JvcmRlcicsICc4cHggc29saWQgZ3JlZW4nKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3Bhc3MgMScsIGZvcm1FbC52YWxpZGl0eS52YWxpZClcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb25maXJtUGFzc3dvcmQoZWwpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpO1xuICAgIGNvbnN0IHBhc3N3b3JkVmFsdWUgPSBwYXNzd29yZC52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZENvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmRDb25maXJtJyk7XG4gICAgY29uc3QgcGFzc3dvcmRDb25maXJtVmFsdWUgPSBwYXNzd29yZENvbmZpcm0udmFsdWU7XG4gICAgaWYgKHBhc3N3b3JkVmFsdWUgIT09IHBhc3N3b3JkQ29uZmlybVZhbHVlIHx8IHBhc3N3b3JkQ29uZmlybS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtLnNldEN1c3RvbVZhbGlkaXR5KFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCFcIik7XG4gICAgICAgIHBhc3N3b3JkQ29uZmlybS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYm9yZGVyJyk7XG4gICAgICAgIHBhc3N3b3JkQ29uZmlybS5zdHlsZS5zZXRQcm9wZXJ0eSgnYm9yZGVyJywgJzhweCBzb2xpZCByZWQnKTtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdib3JkZXInKTtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtLnN0eWxlLnNldFByb3BlcnR5KCdib3JkZXInLCAnOHB4IHNvbGlkIGdyZWVuJyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdjb25maXJtIHBhc3MnLCBwYXNzd29yZENvbmZpcm0udmFsaWRpdHkudmFsaWQpXG59XG5cblxuXG5cblxuXG4iLCJpbXBvcnQgY29sYmVydCBmcm9tICcuL2ltYWdlcy9jb2xiZXJ0X2hpZ2hfZml2ZS5naWYnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNyYywgYWx0LCAgd2lkdGggPSAnNjAwJywgaGVpZ2h0ID0gJzQwMCcpIHtcblx0Y29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cdGltZy5zcmMgPSBzcmM7XG5cdGltZy5hbHQgPSBhbHQ7XG5cdGltZy53aWR0aCA9IHdpZHRoO1xuXHRpbWcuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRyZXR1cm4gaW1nO1xufVxuXG5jb25zdCBzdWNjZXNzUGFnZSA9ICgoKSA9PiB7XG5cbmNvbnN0IHN1Ym1pdFN1Y2Nlc3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1Ym1pdFN1Y2Nlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3VibWl0LXN1Y2Nlc3MtY29udGFpbmVyJyk7XG5cbmNvbnN0IGhpZ2hGaXZlSW1hZ2UgPSBjcmVhdGVJbWFnZShjb2xiZXJ0LCAnU3RlcGhlbiBDb2xiZXJ0IEhpZ2ggRml2ZSBHaWYgZnJvbSBDb2xiZXJ0IFJlcG9ydCcsICc2MDAnLCAnNDAwJyk7XG5zdWJtaXRTdWNjZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhpZ2hGaXZlSW1hZ2UpO1xuXG5jb25zdCByZXR1cm5NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnJldHVybk1lc3NhZ2UudGV4dENvbnRlbnQgPSAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHNpZ25lZCB1cCEnO1xuc3VibWl0U3VjY2Vzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXR1cm5NZXNzYWdlKTtcblxuY29uc3QgcmV0dXJuTWVzc2FnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnJldHVybk1lc3NhZ2UyLnR5cGUgPSAnYnV0dG9uJztcbnJldHVybk1lc3NhZ2UyLmNsYXNzTGlzdC5hZGQoJ3JldHVybi1idG4nKTtcbnJldHVybk1lc3NhZ2UyLnRleHRDb250ZW50ID0gJ1NpZ24gVXAgQWdhaW4/JztcbnN1Ym1pdFN1Y2Nlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQocmV0dXJuTWVzc2FnZTIpO1xuXG5yZXR1cm4gc3VibWl0U3VjY2Vzc0NvbnRhaW5lcjtcbn0pKCk7ICBcblxuXG5leHBvcnQgZGVmYXVsdCBzdWNjZXNzUGFnZTtcblxuXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzaWdudXBGb3JtIGZyb20gJy4vc2lnbnVwLWZvcm0nO1xuaW1wb3J0IHN1Y2Nlc3NQYWdlIGZyb20gJy4vaGlnaEZpdmUnO1xuaW1wb3J0IGxvc3RGb2N1cywgeyByZW1vdmVEZWZhdWx0VmFsaWRhdGlvblN0eWxpbmcgfSBmcm9tICcuL2Zvcm1WYWxpZGF0aW9uJztcblxuZnVuY3Rpb24gZGlzcGxheUNvbnRhaW5lcihib29sKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBpZiAoYm9vbCkge1xuICAgICAgICB3aGlsZSAoYm9keS5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuY2hpbGRyZW5bMV0pO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc3VjY2Vzc1BhZ2UpO1xuICAgICAgICBjb25zdCBzaWduVXBBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXR1cm4tYnRuJyk7XG4gICAgICAgIFxuICAgICAgICBzaWduVXBBZ2FpbkJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdGbGFnID0gZmFsc2U7XG4gICAgICAgICAgICBkaXNwbGF5Q29udGFpbmVyKG5ld0ZsYWcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFib29sKSB7XG4gICAgICAgIHdoaWxlIChib2R5LmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5jaGlsZHJlblsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaWdudXBGb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5yZXNldCgpOyAgIFxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgbmV3RmxhZyA9IHRydWU7XG4gICAgICAgICAgICBkaXNwbGF5Q29udGFpbmVyKG5ld0ZsYWcpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG5kaXNwbGF5Q29udGFpbmVyKGZhbHNlKTtcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG5yZW1vdmVEZWZhdWx0VmFsaWRhdGlvblN0eWxpbmcoaW5wdXQpO1xuLy8gZmlyZXMgZXZlbnQgbGlzdGVuZXIgb24gYmx1ciB0byB2YWxpZGF0ZSBpbnB1dCBhbmQgYXBwbHkgc3R5bGluZyAvZXJyb3IgbWVzc2FnZSAvIHZhbGlkYXRpb24gXG5sb3N0Rm9jdXMoaW5wdXQpO1xuIiwiXG4vLyB3cmFwIGluIGlmZmVcbmNvbnN0IHNpZ251cEZvcm0gPSAoKCkgPT4ge1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5pZCA9ICdTaWduLXVwLWZvcm0nO1xuZm9ybS5uYW1lID0gJ1NpZ24tdXAtZm9ybSc7XG5mb3JtLm5vVmFsaWRhdGU9IHRydWU7XG5cbmNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbmZpZWxkc2V0LmlkID0gJ3NpZ251cC1maWVsZHNldCc7XG5maWVsZHNldC5uYW1lID0gJ3NpZ251cC1maWVsZHNldCc7XG5cbmNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xubGVnZW5kLnRleHRDb250ZW50ID0gJ1NpZ24gVXAgSGVyZTonO1xuZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtU2VjdGlvbihsYWJlbE5hbWUsIGlucHV0VHlwZSwgaW5wdXROYW1lLCBpbnB1dElkLCBpbnB1dFBsYWNlaG9sZGVyLCBhdXRvY29tcGxldGUsIHBhdHRlcm4sIGlucHV0UmVxdWlyZWQgPSB0cnVlICkge1xuXHRjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG5cdGZpZWxkc2V0LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuXG5cdGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0bGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbE5hbWU7XG5cdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRJZCk7XG5cdHNlY3Rpb24uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG5cdGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0aW5wdXQuaWQgPSBpbnB1dElkO1xuXHRpbnB1dC5uYW1lID0gaW5wdXROYW1lO1xuXHRpbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuXHRpbnB1dC5wbGFjZWhvbGRlciA9IGlucHV0UGxhY2Vob2xkZXI7XG5cdGlucHV0LnJlcXVpcmVkID0gaW5wdXRSZXF1aXJlZDtcblx0aW5wdXQuYXV0b2NvbXBsZXRlID0gYXV0b2NvbXBsZXRlO1xuXHRpbnB1dC5wYXR0ZXJuID0gcGF0dGVybjtcblx0XG5cdGlmIChsYWJlbE5hbWUgPT09ICdaaXAgQ29kZSo6Jykge1xuXHRcdGlucHV0LmlucHV0bW9kZSA9ICdudW1lcmljJztcblx0fVx0XG5cdHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW5wdXQpO1xufVxuXG5jcmVhdGVGb3JtU2VjdGlvbignRW1haWwqOicsICdlbWFpbCcsICdlbWFpbCcsICdlbWFpbCcsICdleGFtcGxlQG9kaW4uY29tJywgJ2VtYWlsJywgJ1thLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFxcXC5bYS16XXsyLH0kJyk7XG5jcmVhdGVGb3JtU2VjdGlvbignQ291bnRyeSo6JywgJ3RleHQnLCAnY291bnRyeScsICdjb3VudHJ5JywgJ1VuaXRlZCBTdGF0ZXMnLCAnY291bnRyeScsICdeW2EtekEtWlxcXFxzXSokJyk7XG5jcmVhdGVGb3JtU2VjdGlvbignWmlwIENvZGUqOicsICd0ZXh0JywgJ3ppcCcsICd6aXAnLCAnMDAwMDAnLCAncG9zdGFsLWNvZGUnLCAnXFxcXGR7NX0nLCAnMTExMTEnKTtcbmNyZWF0ZUZvcm1TZWN0aW9uKCdDcmVhdGUgUGFzc3dvcmQqOicsICdwYXNzd29yZCcsICdwYXNzd29yZCcsICdwYXNzd29yZCcsICdDcmVhdGUgVW5pcXVlIFBhc3N3b3JkJywgJ25ldy1wYXNzd29yZCcsICdeKD89LipcXFxcZCkoPz0uKltBLVpdKSg/PS4qW2Etel0pKD89LipbXlxcXFx3XFxcXGRcXFxcczpdKShbXlxcXFxzXSl7OCwxNn0kJyk7XG5jcmVhdGVGb3JtU2VjdGlvbignQ29uZmlybSBQYXNzd29yZCo6JywgJ3Bhc3N3b3JkJywgJ3Bhc3N3b3JkQ29uZmlybScsICdwYXNzd29yZENvbmZpcm0nLCAnQ29uZmlybSBQYXNzd29yZCcsICduZXctcGFzc3dvcmQnLCAnXig/PS4qXFxcXGQpKD89LipbQS1aXSkoPz0uKlthLXpdKSg/PS4qW15cXFxcd1xcXFxkXFxcXHM6XSkoW15cXFxcc10pezgsMTZ9JCcpOyBcblxuY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5mb3JtQnRuLnR5cGUgPSAnc3VibWl0JztcbmZvcm1CdG4uaWQgPSAnYnRuJztcbmZvcm1CdG4ubmFtZSA9ICdidG4nO1xuZm9ybUJ0bi50ZXh0Q29udGVudCA9ICdTaWduIFVwIE5vdyc7XG4vKiBmb3JtQnRuLmRpc2FibGVkID0gdHJ1ZTtcbmZvcm1CdG4uc3R5bGUuY3Vyc29yID0gJ25vdC1hbGxvd2VkJzsgKi9cbmZpZWxkc2V0LmFwcGVuZENoaWxkKGZvcm1CdG4pO1xuZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRmb3JtLmNsZWFyKClcbn0pXG5cblxucmV0dXJuIGZvcm07XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHNpZ251cEZvcm07XG5cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==