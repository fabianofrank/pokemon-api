/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! banner.jpg */ \"./src/banner.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: 'Press Start 2P', sans-serif;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #28292c;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nh2,\\r\\nh3 {\\r\\n  color: white;\\r\\n  margin: 48px 0 12px;\\r\\n}\\r\\n\\r\\n#wrapper {\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  margin-top: 20px;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#stats-window {\\r\\n  position: absolute;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100vw;\\r\\n  margin-left: -10px;\\r\\n  background-color: #28292c;\\r\\n}\\r\\n\\r\\n.pokeContainer p {\\r\\n  margin: 0;\\r\\n  margin-left: 15px;\\r\\n  margin-right: 15px;\\r\\n  margin-top: -15px;\\r\\n  font-size: 22px;\\r\\n  height: 30px;\\r\\n}\\r\\n\\r\\n.comments-list p {\\r\\n  font-size: 12px;\\r\\n}\\r\\n\\r\\n.form-class p {\\r\\n  font-size: 12px;\\r\\n}\\r\\n\\r\\n#stats-window p {\\r\\n  color: white;\\r\\n  margin: 12px 0 0 12px;\\r\\n}\\r\\n\\r\\n#stats-section {\\r\\n  background-color: tomato;\\r\\n  color: aliceblue;\\r\\n  font-family: 'Press Start 2P', sans-serif;\\r\\n  padding-top: 5%;\\r\\n  border-bottom: 10px inset rgba(0, 0, 0, 0.5);\\r\\n  border-left: 10px inset rgba(0, 0, 0, 0.5);\\r\\n  border-right: 10px inset rgba(255, 255, 255, 0.5);\\r\\n  border-top: 10px inset rgba(255, 255, 255, 0.5);\\r\\n  display: flex;\\r\\n  width: 96vw;\\r\\n  border-radius: 15px;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#comment-section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#close {\\r\\n  align-self: flex-end;\\r\\n  position: absolute;\\r\\n  margin: 24px;\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\n#photo {\\r\\n  width: 20vw;\\r\\n}\\r\\n\\r\\n#type-tex {\\r\\n  background-color: #8a0029;\\r\\n  border-radius: 30px;\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\n.comment-header {\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n}\\r\\n\\r\\n.form-class {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n\\r\\n  /* align-items: center; */\\r\\n}\\r\\n\\r\\n.form-class input {\\r\\n  margin-top: 12px;\\r\\n  border-radius: 8px;\\r\\n  font-size: 12px;\\r\\n  height: 24px;\\r\\n}\\r\\n\\r\\n.form-class textarea {\\r\\n  margin-top: 12px;\\r\\n  border-radius: 12px;\\r\\n  font-size: 12px;\\r\\n  height: 48px;\\r\\n}\\r\\n\\r\\n.pokeContainer {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  width: 250px;\\r\\n  height: 250px;\\r\\n  border-bottom: 10px inset rgba(0, 0, 0, 0.5);\\r\\n  border-left: 10px inset rgba(0, 0, 0, 0.5);\\r\\n  border-right: 10px inset rgba(255, 255, 255, 0.5);\\r\\n  border-top: 10px inset rgba(255, 255, 255, 0.5);\\r\\n  border-radius: 15px;\\r\\n  margin: 5px;\\r\\n  color: aliceblue;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n.pokeContainer img {\\r\\n  margin-left: 30px;\\r\\n  margin-right: 30px;\\r\\n  margin-top: 10px;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\nfooter span {\\r\\n  background-color: inherit;\\r\\n  margin: 0;\\r\\n  padding-left: 40px;\\r\\n  font-size: 12px;\\r\\n  line-height: 20px;\\r\\n}\\r\\n\\r\\n.pokeContainer span {\\r\\n  color: rgb(255, 241, 240);\\r\\n  font-family: 'Press Start 2P', sans-serif;\\r\\n  font-size: 10px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.pokeContainer div {\\r\\n  height: 10px;\\r\\n  margin: 0;\\r\\n  margin-bottom: -8px;\\r\\n}\\r\\n\\r\\n.pokeContainer:hover {\\r\\n  transform: scale(1.05);\\r\\n}\\r\\n\\r\\n.pikachu {\\r\\n  background-color: #c4a369;\\r\\n}\\r\\n\\r\\n.mew {\\r\\n  background-color: rgb(229, 189, 255);\\r\\n}\\r\\n\\r\\n.gengar {\\r\\n  background-color: rgb(58, 82, 177);\\r\\n}\\r\\n\\r\\n.mewtwo {\\r\\n  background-color: rgb(96, 70, 162);\\r\\n}\\r\\n\\r\\n.ninetales {\\r\\n  background-color: #6784a8;\\r\\n}\\r\\n\\r\\n.cresselia {\\r\\n  background-color: #66b2b3;\\r\\n}\\r\\n\\r\\n.charizard {\\r\\n  background-color: #d08c5b;\\r\\n}\\r\\n\\r\\n.lugia {\\r\\n  background-color: #485c99;\\r\\n}\\r\\n\\r\\n.pokeFoto {\\r\\n  width: 120px;\\r\\n  height: 120px;\\r\\n}\\r\\n\\r\\n.btn,\\r\\n.send-comment {\\r\\n  background: #7c7c7c;\\r\\n  border-bottom: 3px inset rgba(0, 0, 0, 0.5);\\r\\n  border-left: 3px inset rgba(0, 0, 0, 0.5);\\r\\n  border-right: 3px inset rgba(255, 255, 255, 0.5);\\r\\n  border-top: 3px inset rgba(255, 255, 255, 0.5);\\r\\n  box-sizing: border-box;\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n  display: inline-block;\\r\\n  font-size: 11px;\\r\\n  margin-left: 5px;\\r\\n  margin-right: 5px;\\r\\n  min-width: 90px;\\r\\n  width: 100px;\\r\\n  height: 60px;\\r\\n  font-family: 'Press Start 2P', sans-serif;\\r\\n  border-radius: 11px;\\r\\n}\\r\\n\\r\\n.btn.primary {\\r\\n  background: #158522;\\r\\n}\\r\\n\\r\\n.btn.primary:hover {\\r\\n  background: #3a933a;\\r\\n}\\r\\n\\r\\n.btn.secondary {\\r\\n  background: rgb(58, 46, 140);\\r\\n}\\r\\n\\r\\n.send-comment {\\r\\n  background: #ff4b81;\\r\\n  font-size: 2vw;\\r\\n  width: 30vw;\\r\\n  max-height: 10vh;\\r\\n  min-height: 5vh;\\r\\n  align-self: center;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n.btn.secondary:hover {\\r\\n  background: #3d3dac;\\r\\n}\\r\\n\\r\\n#comment-window {\\r\\n  display: none;\\r\\n  background-color: #28292c;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  height: 250px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: 400px;\\r\\n  background-color: #a2e8ff;\\r\\n  background-position: 90% 50%;\\r\\n  border-bottom: 10px inset rgba(0, 0, 0, 0.5);\\r\\n  border-left: 10px inset rgba(0, 0, 0, 0.5);\\r\\n  border-right: 10px inset rgba(255, 255, 255, 0.5);\\r\\n  border-top: 10px inset rgba(255, 255, 255, 0.5);\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 60%;\\r\\n  font-family: 'Press Start 2P', sans-serif;\\r\\n  padding-left: 3%;\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  padding-top: 10px;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #28292c;\\r\\n  line-height: 25px;\\r\\n}\\r\\n\\r\\nli {\\r\\n  margin-right: 20px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-family: 'Press Start 2P', sans-serif;\\r\\n  margin-left: 20%;\\r\\n  margin-top: -45px;\\r\\n  line-height: 5vw;\\r\\n  font-size: 3vw;\\r\\n}\\r\\n\\r\\n#logoContainer {\\r\\n  width: 90px;\\r\\n  height: 90px;\\r\\n  filter: contrast(4);\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: #46646c;\\r\\n  color: aliceblue;\\r\\n  height: 70px;\\r\\n  margin-top: 50px;\\r\\n  font-family: 'Press Start 2P', sans-serif;\\r\\n  padding-top: 5%;\\r\\n  border-bottom: 10px inset rgba(0, 0, 0, 0.5);\\r\\n  border-left: 10px inset rgba(0, 0, 0, 0.5);\\r\\n  border-right: 10px inset rgba(255, 255, 255, 0.5);\\r\\n  border-top: 10px inset rgba(255, 255, 255, 0.5);\\r\\n  display: flex;\\r\\n  text-align: center;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.likesContainer {\\r\\n  position: absolute;\\r\\n  margin-right: 160px;\\r\\n  margin-top: 60px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 100px;\\r\\n  width: 50px;\\r\\n}\\r\\n\\r\\n.likesContainer img {\\r\\n  width: 25px;\\r\\n  margin-left: 2px;\\r\\n  margin-bottom: 10px;\\r\\n  transition: 0.2s;\\r\\n  filter: contrast(1.2);\\r\\n}\\r\\n\\r\\n.likesContainer img:hover {\\r\\n  transform: scale(1.5);\\r\\n}\\r\\n\\r\\n.likesContainer:active {\\r\\n  filter: contrast(4);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokemon-api/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n\r\n      content += cssWithMappingToString(item);\r\n\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n\r\n\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack://pokemon-api/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    options = {};\r\n  }\r\n\r\n  if (!url) {\r\n    return url;\r\n  }\r\n\r\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\r\n\r\n  if (/^['\"].*['\"]$/.test(url)) {\r\n    url = url.slice(1, -1);\r\n  }\r\n\r\n  if (options.hash) {\r\n    url += options.hash;\r\n  } // Should url be wrapped?\r\n  // See https://drafts.csswg.org/css-values-3/#urls\r\n\r\n\r\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\r\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\r\n  }\r\n\r\n  return url;\r\n};\n\n//# sourceURL=webpack://pokemon-api/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://pokemon-api/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pokemon-api/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/adoptions.js":
/*!**************************!*\
  !*** ./src/adoptions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postCom\": () => (/* binding */ postCom),\n/* harmony export */   \"getCom\": () => (/* binding */ getCom),\n/* harmony export */   \"displayPokemonStats\": () => (/* binding */ displayPokemonStats),\n/* harmony export */   \"adoptToggle\": () => (/* binding */ adoptToggle)\n/* harmony export */ });\n/* harmony import */ var _apiCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCall.js */ \"./src/apiCall.js\");\n/* harmony import */ var _cancel_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel.png */ \"./src/cancel.png\");\n/* eslint-disbale import/no-cycle no-unused-vars no-undef no-prototype-builtins */\r\n\r\n\r\n\r\n// POST and GET: Involment API\r\nconst APIKey = 'ntSEDKBSp5jVB8zr1TJB';\r\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\n\r\nconst postCom = (objOption) => {\r\n  const options = {\r\n    method: `${objOption}`,\r\n    headers: {\r\n      'Content-Type': 'application/json; charset=UTF-8',\r\n    },\r\n  };\r\n  return options;\r\n};\r\n\r\nconst postAsync = async (method, query, bodyObj) => {\r\n  const url = `${baseURL}${APIKey}/${query}`;\r\n  const options = postCom(method);\r\n  options.body = JSON.stringify(bodyObj);\r\n  const response = await fetch(url, options);\r\n  if (method === 'POST') {\r\n    return response.text();\r\n  }\r\n  return response.json();\r\n};\r\n\r\nconst postComment = (commentObj) => postAsync('POST', 'reservations', commentObj);\r\n\r\nasync function getCom(e) {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/reservations?item_id=${e}`);\r\n  return response.json();\r\n}\r\n\r\nconst commentWindow = document.getElementById('comment-window');\r\n\r\n// POPUP Close\r\nconst toggleClose = () => {\r\n  if (commentWindow.style.display === 'block') {\r\n    commentWindow.style.display = 'none';\r\n    commentWindow.innerHTML = '';\r\n    document.querySelector('#wrapper').style.visibility = 'visible';\r\n  }\r\n};\r\n\r\n// RENDER Stats\r\nconst renderPokemonStats = (poke) => {\r\n  const pokeImg = poke.sprites.front_default;\r\n  const pokeTypeOne = poke.types[0].type.name;\r\n  const pokeName = poke.name.toUpperCase();\r\n  const pokeWeight = poke.weight;\r\n  const pokeHeight = poke.height;\r\n  const pokePower = poke.base_experience;\r\n\r\n  let html = '';\r\n  const htmlSegment = `\r\n  <div id=\"stats-window\">\r\n    <div id=\"stats-section\">\r\n      <img src=\"${_cancel_png__WEBPACK_IMPORTED_MODULE_1__}\" id=\"close\" width=\"48\">\r\n      <img src=\"${pokeImg}\" id=\"photo\" width=\"160\">\r\n    </div>\r\n    <h2>${pokeName}</h2>\r\n    <div id=\"type-div\">\r\n      <p id=\"type-tex\">${pokeTypeOne}</p>\r\n    </div>\r\n    <p>Weight: ${pokeWeight}</p>\r\n    <p>Height: ${pokeHeight}</p>\r\n    <p>Power: ${pokePower}</p>\r\n    <comments-section id=\"comment-section\" class=\"comments-section\">\r\n      <div class=\"comment-header\">\r\n        <h3>Adoptions</h3>\r\n        <p id=\"adopt\"></p>\r\n      </div>\r\n      <div class=\"comments-list\"></div>\r\n      <h3>Schedule your adoption</h3>\r\n      <form class=\"form-class\">\r\n        <input class=\"input-name\" placeholder=\"Your name\" required=\"\">\r\n        <p>Traning Start</p>\r\n        <input type=\"date\" class=\"input-start\" placeholder=\"When will you meet your Pokemon?\" required=\"\">\r\n        <p>Traning Finished</p>\r\n        <input type=\"date\" class=\"input-end\" placeholder=\"When will you meet your Pokemon?\" required=\"\">\r\n        <button type=\"button\" class=\"send-comment\">Book your adoption</button>\r\n      </form>\r\n    </comments-section>\r\n  </div>\r\n  `;\r\n  html += htmlSegment;\r\n  commentWindow.innerHTML = html;\r\n\r\n  // COUNTER\r\n  const counter = (serverData) => {\r\n    const adopt = document.querySelector('#adopt');\r\n    adopt.innerHTML = `(${serverData.length})`;\r\n  };\r\n\r\n  // GET and DISPLAY comments\r\n  const getComment = (e) => {\r\n    getCom(e)\r\n      .then((serverData) => {\r\n        let html = '';\r\n        if (typeof serverData === 'object') {\r\n          counter(serverData);\r\n          serverData.forEach((data) => {\r\n            const htmlSegment = `<p>${data.date_start} - ${data.date_end} by ${data.username}</p>`;\r\n            html += htmlSegment;\r\n          });\r\n        } else if (typeof serverData === 'object' && serverData.error.status === 400) {\r\n          const htmlSegment = 'No comments yet';\r\n          html += htmlSegment;\r\n        }\r\n        const container = document.querySelector('.comments-list');\r\n        container.innerHTML = html;\r\n      });\r\n  };\r\n\r\n  // RENDER comments\r\n  getComment(poke.id);\r\n\r\n  const renderComment = (e) => {\r\n    getComment(e);\r\n  };\r\n\r\n  // CLICK EVENT\r\n  const start = document.querySelector('.input-start');\r\n  const end = document.querySelector('.input-end');\r\n  const name = document.querySelector('.input-name');\r\n\r\n  const handleClick = async () => {\r\n    const bodyObj = {\r\n      item_id: poke.id,\r\n      username: name.value,\r\n      date_start: start.value,\r\n      date_end: end.value,\r\n    };\r\n    postComment(bodyObj).then(() => {\r\n      renderComment(poke.id);\r\n    });\r\n  };\r\n\r\n  document.querySelector('.send-comment').addEventListener('click', handleClick);\r\n  document.getElementById('close').addEventListener('click', toggleClose);\r\n};\r\n\r\n// Display Pokemon: PokeAPI\r\nconst displayPokemonStats = (e) => {\r\n  (0,_apiCall_js__WEBPACK_IMPORTED_MODULE_0__.pokeCall)(e).then((poke) => {\r\n    renderPokemonStats(poke);\r\n  });\r\n};\r\n\r\n// OPEN POPUP\r\nconst adoptToggle = (id) => {\r\n  if (commentWindow.style.display === 'none') {\r\n    commentWindow.style.display = 'block';\r\n    document.querySelector('#wrapper').style.visibility = 'hidden';\r\n    displayPokemonStats(id);\r\n  } else {\r\n    commentWindow.style.display = 'none';\r\n    commentWindow.innerHTML = '';\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://pokemon-api/./src/adoptions.js?");

/***/ }),

/***/ "./src/apiCall.js":
/*!************************!*\
  !*** ./src/apiCall.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pokeCall\": () => (/* binding */ pokeCall),\n/* harmony export */   \"likeCall\": () => (/* binding */ likeCall),\n/* harmony export */   \"likePost\": () => (/* binding */ likePost)\n/* harmony export */ });\nconst pokeCall = async (e) => {\r\n  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`, {\r\n    method: 'GET',\r\n  });\r\n  const pokemonInfo = await response.json();\r\n  return pokemonInfo;\r\n};\r\n\r\nconst likeCall = async () => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {\r\n    method: 'GET',\r\n  });\r\n  const likeUpdate = await response.json();\r\n  return likeUpdate;\r\n};\r\n\r\nconst likePost = async (e) => {\r\n  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`, {\r\n    method: 'POST',\r\n  });\r\n  const likeUpdate = await response.json();\r\n  return likeUpdate;\r\n};\r\n\r\n// eslint-disable-next-line import/prefer-default-export\r\n\r\n\n\n//# sourceURL=webpack://pokemon-api/./src/apiCall.js?");

/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postCom\": () => (/* binding */ postCom),\n/* harmony export */   \"getCom\": () => (/* binding */ getCom),\n/* harmony export */   \"displayPokemonStats\": () => (/* binding */ displayPokemonStats),\n/* harmony export */   \"toggle\": () => (/* binding */ toggle)\n/* harmony export */ });\n/* harmony import */ var _apiCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCall.js */ \"./src/apiCall.js\");\n/* harmony import */ var _cancel_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel.png */ \"./src/cancel.png\");\n/* eslint-disbale import/no-cycle no-unused-vars no-undef no-prototype-builtins */\r\n\r\n\r\n\r\n// POST and GET: Involment API\r\nconst APIKey = 'ntSEDKBSp5jVB8zr1TJB';\r\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\n\r\nconst postCom = (objOption) => {\r\n  const options = {\r\n    method: `${objOption}`,\r\n    headers: {\r\n      'Content-Type': 'application/json; charset=UTF-8',\r\n    },\r\n  };\r\n  return options;\r\n};\r\n\r\nconst postAsync = async (method, query, bodyObj) => {\r\n  const url = `${baseURL}${APIKey}/${query}`;\r\n  const options = postCom(method);\r\n  options.body = JSON.stringify(bodyObj);\r\n  const response = await fetch(url, options);\r\n  if (method === 'POST') {\r\n    return response.text();\r\n  }\r\n  return response.json();\r\n};\r\n\r\nconst postComment = (commentObj) => postAsync('POST', 'comments', commentObj);\r\n\r\nasync function getCom(e) {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/comments?item_id=${e}`);\r\n  return response.json();\r\n}\r\n\r\nconst commentWindow = document.getElementById('comment-window');\r\n\r\n// POPUP Close\r\nconst toggleClose = () => {\r\n  if (commentWindow.style.display === 'block') {\r\n    commentWindow.style.display = 'none';\r\n    commentWindow.innerHTML = '';\r\n    document.querySelector('#wrapper').style.visibility = 'visible';\r\n  }\r\n};\r\n\r\n// RENDER Stats\r\nconst renderPokemonStats = (poke) => {\r\n  const pokeImg = poke.sprites.front_default;\r\n  const pokeTypeOne = poke.types[0].type.name;\r\n  const pokeName = poke.name.toUpperCase();\r\n  const pokeWeight = poke.weight;\r\n  const pokeHeight = poke.height;\r\n  const pokePower = poke.base_experience;\r\n\r\n  let html = '';\r\n  const htmlSegment = `\r\n  <div id=\"stats-window\">\r\n    <div id=\"stats-section\">\r\n      <img src=\"${_cancel_png__WEBPACK_IMPORTED_MODULE_1__}\" id=\"close\" width=\"48\">\r\n      <img src=\"${pokeImg}\" id=\"photo\" width=\"160\">\r\n    </div>\r\n    <h2>${pokeName}</h2>\r\n    <div id=\"type-div\">\r\n      <p id=\"type-tex\">${pokeTypeOne}</p>\r\n    </div>\r\n    <p>Weight: ${pokeWeight}</p>\r\n    <p>Height: ${pokeHeight}</p>\r\n    <p>Power: ${pokePower}</p>\r\n    <comments-section id=\"comment-section\" class=\"comments-section\">\r\n      <div class=\"comment-header\">\r\n        <h3>Best Comments</h3>\r\n        <p id=\"comment\"></p>\r\n      </div>\r\n      <div class=\"comments-list\"></div>\r\n      <h3>Add your comment</h3>\r\n      <form class=\"form-class\">\r\n        <input class=\"input-name\" placeholder=\"Your name\" required=\"\">\r\n        <textarea class=\"input-text\" placeholder=\"Your comment\" required=\"\"></textarea>\r\n        <button type=\"button\" class=\"send-comment\">Send your comment</button>\r\n      </form>\r\n    </comments-section>\r\n  </div>\r\n  `;\r\n  html += htmlSegment;\r\n  commentWindow.innerHTML = html;\r\n\r\n  // COUNTER\r\n  const counter = (serverData) => {\r\n    const adopt = document.querySelector('#comment');\r\n    adopt.innerHTML = `(${serverData.length})`;\r\n  };\r\n\r\n  // GET and DISPLAY comments\r\n  const getComment = (e) => {\r\n    getCom(e)\r\n      .then((serverData) => {\r\n        counter(serverData);\r\n        let html = '';\r\n        if (typeof serverData === 'object') {\r\n          serverData.forEach((data) => {\r\n            const htmlSegment = `<p>${data.comment}</br>${data.creation_date}: ${data.username}</p>`;\r\n            html += htmlSegment;\r\n          });\r\n        } else if (typeof serverData === 'object' && serverData.error.status === 400) {\r\n          const htmlSegment = 'No comments yet';\r\n          html += htmlSegment;\r\n        }\r\n        const container = document.querySelector('.comments-list');\r\n        container.innerHTML = html;\r\n      });\r\n  };\r\n\r\n  // RENDER comments\r\n  getComment(poke.id);\r\n\r\n  const renderComment = (e) => {\r\n    getComment(e);\r\n  };\r\n\r\n  // CLICK EVENT\r\n  const comment = document.querySelector('.input-text');\r\n  const name = document.querySelector('.input-name');\r\n\r\n  const handleClick = async () => {\r\n    const bodyObj = {\r\n      item_id: poke.id,\r\n      username: name.value,\r\n      comment: comment.value,\r\n    };\r\n    postComment(bodyObj).then(() => {\r\n      renderComment(poke.id);\r\n    });\r\n  };\r\n\r\n  document.querySelector('.send-comment').addEventListener('click', handleClick);\r\n  document.getElementById('close').addEventListener('click', toggleClose);\r\n};\r\n\r\n// const myFunc = new renderPokemonStats();\r\n// const x = myFunc.counter();\r\n\r\n// Display Pokemon: PokeAPI\r\nconst displayPokemonStats = (e) => {\r\n  (0,_apiCall_js__WEBPACK_IMPORTED_MODULE_0__.pokeCall)(e).then((poke) => {\r\n    renderPokemonStats(poke);\r\n  });\r\n};\r\n\r\n// OPEN POPUP\r\nconst toggle = (id) => {\r\n  if (commentWindow.style.display === 'none') {\r\n    commentWindow.style.display = 'block';\r\n    document.querySelector('#wrapper').style.visibility = 'hidden';\r\n    displayPokemonStats(id);\r\n  } else {\r\n    commentWindow.style.display = 'none';\r\n    commentWindow.innerHTML = '';\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://pokemon-api/./src/comments.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pokedex\": () => (/* binding */ Pokedex),\n/* harmony export */   \"myPokedex\": () => (/* binding */ myPokedex),\n/* harmony export */   \"examplePokeArr\": () => (/* binding */ examplePokeArr),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper),\n/* harmony export */   \"itemCounterWrapper\": () => (/* binding */ itemCounterWrapper)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _apiCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCall.js */ \"./src/apiCall.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ \"./src/comments.js\");\n/* harmony import */ var _adoptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adoptions.js */ \"./src/adoptions.js\");\n/* harmony import */ var _pokeball_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pokeball.png */ \"./src/pokeball.png\");\n/* harmony import */ var _heart_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heart.png */ \"./src/heart.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// class Pokecard {\r\n//   constructor(name, img, weight, height, power, id) {\r\n//     this.name = name;\r\n//     this.img = img;\r\n//     this.weight = weight;\r\n//     this.height = height;\r\n//     this.power = power;\r\n//     this.id = id;\r\n//   }\r\n// }\r\n\r\nconst logoWrapper = document.getElementById('logo');\r\nlogoWrapper.src = `${_pokeball_png__WEBPACK_IMPORTED_MODULE_4__}`;\r\nconst itemCounterWrapper = document.getElementById('itemCounterWrapper');\r\nconst wrapper = document.getElementById('wrapper');\r\n\r\n// Get likes\r\nconst fetchLikes = async (id) => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/likes';\r\n  const response = await fetch(url, { method: 'GET' });\r\n  const data = await response.json();\r\n  const currentLikeIcon = document.getElementById(id.replace('item', 'like'));\r\n  // eslint-disable-next-line camelcase\r\n  const likeCurrentCounter = data.find(({ item_id }) => item_id === id);\r\n  currentLikeIcon.parentNode.children[1].innerText = `(${likeCurrentCounter.likes})`;\r\n  return data;\r\n};\r\n\r\nasync function postLikes(id) {\r\n  const body = JSON.stringify({ item_id: id });\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/likes';\r\n  const response = await fetch(url, {\r\n    method: 'POST',\r\n    headers: { 'Content-Type': 'application/json' },\r\n    body,\r\n  });\r\n  const data = await JSON.parse(JSON.stringify(response));\r\n  fetchLikes(id);\r\n  return data;\r\n}\r\n\r\nclass Pokedex {\r\n  constructor() {\r\n    this.pokeList = [];\r\n  }\r\n\r\n  // Display Pokedex\r\n  // eslint-disable-next-line class-methods-use-this\r\n  displayPokedex(pokemon) {\r\n    wrapper.style.display = 'flex';\r\n    const pokeContainer = document.createElement('div');\r\n    pokeContainer.classList.add('pokeContainer', `${pokemon.name}`);\r\n    const nameTest = document.createElement('p');\r\n    nameTest.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);\r\n    const pokeFoto = document.createElement('img');\r\n    pokeFoto.classList.add('pokeFoto');\r\n    pokeFoto.src = `${pokemon.sprites.front_default}`;\r\n    const commentBttn = document.createElement('button');\r\n    commentBttn.onclick = () => (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.toggle)(pokemon.id);\r\n    const reserveBttn = document.createElement('button');\r\n    reserveBttn.onclick = () => (0,_adoptions_js__WEBPACK_IMPORTED_MODULE_3__.adoptToggle)(pokemon.id);\r\n    commentBttn.id = `commentBttn${pokemon.id}`;\r\n    commentBttn.innerText = 'comment';\r\n    commentBttn.classList.add('btn', 'primary');\r\n    reserveBttn.id = `reserveBttn${pokemon.id}`;\r\n    reserveBttn.innerText = 'adopt';\r\n    reserveBttn.classList.add('btn', 'secondary');\r\n    const buttonsContainer = document.createElement('section');\r\n    buttonsContainer.classList.add('buttonsContainer');\r\n    const likesContainer = document.createElement('section');\r\n    const likeIcon = document.createElement('img');\r\n    const likesCounter = document.createElement('span');\r\n    likesContainer.classList.add('likesContainer');\r\n    likeIcon.src = `${_heart_png__WEBPACK_IMPORTED_MODULE_5__}`;\r\n    likeIcon.classList.add('likeIcon');\r\n    likeIcon.onclick = (e) => {\r\n      postLikes(e.path[0].id.replace('like', 'item'));\r\n    };\r\n    likeIcon.id = `like${pokemon.id}`;\r\n    likesContainer.appendChild(likeIcon);\r\n    likesContainer.appendChild(likesCounter);\r\n    pokeContainer.appendChild(pokeFoto);\r\n    pokeContainer.appendChild(likesContainer);\r\n    pokeContainer.appendChild(nameTest);\r\n    buttonsContainer.appendChild(reserveBttn);\r\n    buttonsContainer.appendChild(commentBttn);\r\n    pokeContainer.appendChild(buttonsContainer);\r\n    wrapper.appendChild(pokeContainer);\r\n  }\r\n\r\n  // Gets pokemon info from API\r\n  async getPokemon(e) {\r\n    (0,_apiCall_js__WEBPACK_IMPORTED_MODULE_1__.pokeCall)(e).then((poke) => {\r\n      this.displayPokedex(poke);\r\n    });\r\n  }\r\n}\r\n\r\n// Initialize Pokedex\r\nconst examplePokeArr = [\r\n  'pikachu',\r\n  'mewtwo',\r\n  'mew',\r\n  'ninetales',\r\n  'charizard',\r\n  'gengar',\r\n  'lugia',\r\n  'cresselia',\r\n  'arceus',\r\n  'dialga',\r\n];\r\n\r\nconst myPokedex = new Pokedex();\r\n\r\nfor (let i = 0; i < examplePokeArr.length; i += 1) {\r\n  myPokedex.getPokemon(examplePokeArr[i]);\r\n}\r\n\r\n// Initialize like counters\r\nconst initLikes = async () => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/likes';\r\n  const response = await fetch(url, { method: 'GET' });\r\n  const data = await response.json();\r\n  itemCounterWrapper.innerText = `(${wrapper.childElementCount})`;\r\n  for (let i = 0; i < data.length; i += 1) {\r\n    const currentLikeInitID = data[i].item_id;\r\n    const currentLikeInitCounter = document.getElementById(\r\n      currentLikeInitID.replace('item', 'like'),\r\n    );\r\n    if (currentLikeInitCounter) {\r\n      currentLikeInitCounter.parentElement.children[1].innerText = `(${data[i].likes})`;\r\n    }\r\n  }\r\n  return data;\r\n};\r\n\r\ninitLikes();\r\n\r\n\r\n\n\n//# sourceURL=webpack://pokemon-api/./src/index.js?");

/***/ }),

/***/ "./src/banner.jpg":
/*!************************!*\
  !*** ./src/banner.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"235c369a9558efb17b40.jpg\";\n\n//# sourceURL=webpack://pokemon-api/./src/banner.jpg?");

/***/ }),

/***/ "./src/cancel.png":
/*!************************!*\
  !*** ./src/cancel.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c2963ee3467352a1681.png\";\n\n//# sourceURL=webpack://pokemon-api/./src/cancel.png?");

/***/ }),

/***/ "./src/heart.png":
/*!***********************!*\
  !*** ./src/heart.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"adb3077048310cf5ce99.png\";\n\n//# sourceURL=webpack://pokemon-api/./src/heart.png?");

/***/ }),

/***/ "./src/pokeball.png":
/*!**************************!*\
  !*** ./src/pokeball.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac8a01398320588b470e.png\";\n\n//# sourceURL=webpack://pokemon-api/./src/pokeball.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;