"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcom_foxdebug_acode"] = self["webpackChunkcom_foxdebug_acode"] || []).push([["themeSetting"],{

/***/ "./src/pages/customTheme/customTheme.js":
/*!**********************************************!*\
  !*** ./src/pages/customTheme/customTheme.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomTheme; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction CustomTheme() {\n  return _CustomTheme.apply(this, arguments);\n}\n\nfunction _CustomTheme() {\n  _CustomTheme = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var customTheme;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return __webpack_require__.e(/*! import() | customTheme */ \"customTheme\").then(__webpack_require__.bind(__webpack_require__, /*! ./customTheme.include */ \"./src/pages/customTheme/customTheme.include.js\"));\n\n          case 2:\n            customTheme = _context.sent.default;\n            customTheme();\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _CustomTheme.apply(this, arguments);\n}\n\n//# sourceURL=webpack://com.foxdebug.acode/./src/pages/customTheme/customTheme.js?");

/***/ }),

/***/ "./src/pages/themeSetting/themeSetting.include.js":
/*!********************************************************!*\
  !*** ./src/pages/themeSetting/themeSetting.include.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _themeSetting_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themeSetting.scss */ \"./src/pages/themeSetting/themeSetting.scss\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-tag-js */ \"./node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.mjs\");\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/page */ \"./src/components/page.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/constants */ \"./src/lib/constants.js\");\n/* harmony import */ var _themeSetting_hbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themeSetting.hbs */ \"./src/pages/themeSetting/themeSetting.hbs\");\n/* harmony import */ var _list_item_hbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-item.hbs */ \"./src/pages/themeSetting/list-item.hbs\");\n/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/searchbar */ \"./src/components/searchbar.js\");\n/* harmony import */ var _components_dialogs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dialogs */ \"./src/components/dialogs.js\");\n/* harmony import */ var _customTheme_customTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customTheme/customTheme */ \"./src/pages/customTheme/customTheme.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/helpers */ \"./src/utils/helpers.js\");\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var $page = (0,_components_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(strings.theme.capitalize());\n  var $container = html_tag_js__WEBPACK_IMPORTED_MODULE_1___default().parse(_themeSetting_hbs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {});\n  var $search = html_tag_js__WEBPACK_IMPORTED_MODULE_1___default()('i', {\n    className: 'icon search',\n    attr: {\n      action: 'search'\n    }\n  });\n  var $themePreview = html_tag_js__WEBPACK_IMPORTED_MODULE_1___default()('div', {\n    id: 'theme-preview'\n  });\n  var editor = ace.edit($themePreview);\n  editor.setTheme(appSettings.value.editorTheme);\n  editor.setFontSize(appSettings.value.fontSize);\n  editor.session.setOptions({\n    mode: 'ace/mode/javascript'\n  });\n  editor.setReadOnly(true);\n  editor.session.setValue('function foo(){\\n' + '\\tconst array = [1, 1, 2, 3, 5, 5, 1];\\n' + '\\tconst uniqueArray = [...new Set(array)];\\n' + '\\tconsole.log(uniqueArray);\\n' + '\\tconsole.log(0.2 + 0.1 === 0.3);\\n' + \"\\tconsole.log('I love Acode editor')\\n\" + '}\\n' + 'foo();');\n  editor.gotoLine(8);\n  $themePreview.append(html_tag_js__WEBPACK_IMPORTED_MODULE_1___default()('div', {\n    id: 'theme-preview-header'\n  }));\n  $themePreview.classList.add(appSettings.value.editorFont);\n  actionStack.push({\n    id: 'appTheme',\n    action: function action() {\n      editor.destroy();\n      $page.hide();\n      $page.removeEventListener('click', clickHandler);\n    }\n  });\n\n  $page.onhide = function () {\n    _utils_helpers__WEBPACK_IMPORTED_MODULE_10__[\"default\"].hideAd();\n    actionStack.remove('appTheme');\n  };\n\n  $page.body = $container;\n  $page.querySelector('header').append($search);\n  app.append($page);\n  _utils_helpers__WEBPACK_IMPORTED_MODULE_10__[\"default\"].showAd();\n  $page.addEventListener('click', clickHandler);\n  render();\n\n  function render() {\n    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'app';\n\n    var themeList = [],\n        html = '',\n        defaultValue = function defaultValue() {\n      return false;\n    };\n\n    if (mode === 'editor' && innerHeight * 0.3 >= 120) $container.append($themePreview);else $themePreview.remove();\n\n    if (mode === 'app') {\n      if (!DOES_SUPPORT_THEME) html = '<div class=\"list-item\">' + '<span class=\"icon warningreport_problem\"></span>' + '<div class=\"container\">' + '<span class=\"text\">' + strings['unsupported device'] + '</span>' + '</div>' + '</div>';\n      themeList = _lib_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].appThemeList;\n\n      defaultValue = function defaultValue(theme) {\n        return appSettings.value.appTheme === theme;\n      };\n    } else if (mode === 'editor') {\n      themeList = _lib_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].editorThemeList;\n\n      defaultValue = function defaultValue(theme) {\n        return appSettings.value.editorTheme === \"ace/theme/\".concat(theme);\n      };\n    } else if (mode === 'md') {}\n\n    var themes = Object.keys(themeList).sort();\n\n    for (var i = 0; i < themes.length; ++i) {\n      var theme = themes[i];\n      var paid = false;\n      var disable = false;\n      var themeData = themeList[theme];\n\n      if (mode === 'app') {\n        paid = IS_FREE_VERSION && !themeData.isFree;\n        disable = !DOES_SUPPORT_THEME;\n      }\n\n      html += mustache__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(_list_item_hbs__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        name: theme.replace(/_/g, ' ').capitalize(),\n        theme: theme,\n        mode: mode,\n        type: themeData.type,\n        default: defaultValue(theme),\n        disable: disable,\n        paid: paid\n      });\n    }\n\n    $page.get('#theme-list').innerHTML = html;\n  }\n  /**\r\n   *\r\n   * @param {MouseEvent} e\r\n   */\n\n\n  function clickHandler(e) {\n    var $target = e.target;\n    if (!($target instanceof HTMLElement)) return;\n    var action = $target.getAttribute('action');\n    if (!action) return;\n\n    switch (action) {\n      case 'select':\n        var $el = $page.get('.options>.active');\n        if ($el) $el.classList.remove('active');\n        $target.classList.add('active');\n        render($target.getAttribute('value'));\n        break;\n\n      case 'select-theme':\n        var mode = $target.getAttribute('mode');\n        var theme = $target.getAttribute('name');\n        var type = $target.getAttribute('type');\n        if (mode === 'app') onSelectAppTheme(theme, type);else if (mode === 'editor') onSelectEditorTheme(theme, type);else if (mode === 'md') {}\n        break;\n\n      case 'search':\n        (0,_components_searchbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"])($page.get('#theme-list'));\n        break;\n\n      default:\n        break;\n    }\n  }\n\n  function onSelectEditorTheme(res) {\n    updateTheme('editor', res);\n  }\n  /**\r\n   * Selects app theme\r\n   *\r\n   * @param {String} res\r\n   * @param {String} type\r\n   * @returns\r\n   */\n\n\n  function onSelectAppTheme(res, type) {\n    var theme = _lib_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].appThemeList[res];\n    if (!theme) return;\n\n    if (!theme.isFree && IS_FREE_VERSION) {\n      _components_dialogs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].box(strings.info.toUpperCase(), 'Hi dear user, dark modes are available in paid version of the app. ' + 'Please support this project by buying the paid version.').onhide(function () {\n        system.openInBrowser(_lib_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].PAID_VERSION);\n      });\n      return;\n    }\n\n    if (theme.name === 'custom') {\n      (0,_customTheme_customTheme__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n      return;\n    }\n\n    updateTheme('app', theme.name);\n  }\n\n  function updateTheme(mode, theme) {\n    var setting = {};\n    var oldTheme;\n\n    if (mode === 'app') {\n      setting.appTheme = theme;\n      oldTheme = appSettings.value.appTheme;\n    } else if (mode === 'editor') {\n      var themeId = 'ace/theme/' + theme;\n      editorManager.editor.setTheme(themeId);\n      editor.setTheme(themeId);\n      setting.editorTheme = themeId;\n      oldTheme = appSettings.value.editorTheme.split('/').pop();\n    } else return;\n\n    var $checkIcon = html_tag_js__WEBPACK_IMPORTED_MODULE_1___default().get(\"#theme-list>[name=\\\"\".concat(oldTheme, \"\\\"]>.icon.check\"));\n    if ($checkIcon) $checkIcon.remove();\n    appSettings.update(setting);\n    if (mode === 'app') window.restoreTheme();\n    html_tag_js__WEBPACK_IMPORTED_MODULE_1___default().get(\"#theme-list>[name=\\\"\".concat(theme, \"\\\"]\")).innerHTML += '<span class=\"icon check\"></span>';\n  }\n}\n\n//# sourceURL=webpack://com.foxdebug.acode/./src/pages/themeSetting/themeSetting.include.js?");

/***/ }),

/***/ "./src/pages/themeSetting/themeSetting.scss":
/*!**************************************************!*\
  !*** ./src/pages/themeSetting/themeSetting.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://com.foxdebug.acode/./src/pages/themeSetting/themeSetting.scss?");

/***/ }),

/***/ "./src/pages/themeSetting/list-item.hbs":
/*!**********************************************!*\
  !*** ./src/pages/themeSetting/list-item.hbs ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div class=\\\"list-item {{#disable}}disabled{{/disable}}\\\" action=\\\"select-theme\\\" tabindex=\\\"0\\\" name=\\\"{{theme}}\\\"\\r\\n  mode=\\\"{{mode}}\\\" type=\\\"{{type}}\\\">\\r\\n  <span class=\\\"icon color {{type}}\\\"></span>\\r\\n  <div class=\\\"container\\\">\\r\\n    <span class=\\\"text\\\">{{name}}</span>\\r\\n  </div>\\r\\n  {{#default}}\\r\\n  <span class=\\\"icon check\\\"></span>\\r\\n  {{/default}}\\r\\n  {{#paid}}\\r\\n  <span class=\\\"icon stars\\\"></span>\\r\\n  {{/paid}}\\r\\n</div>\");\n\n//# sourceURL=webpack://com.foxdebug.acode/./src/pages/themeSetting/list-item.hbs?");

/***/ }),

/***/ "./src/pages/themeSetting/themeSetting.hbs":
/*!*************************************************!*\
  !*** ./src/pages/themeSetting/themeSetting.hbs ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div id='theme-setting' class='main'>\\r\\n  <div class='options'>\\r\\n    <span class='active' action='select' tabindex='0' value='app'>App</span>\\r\\n    <span\\r\\n      action='select'\\r\\n      value='editor'\\r\\n      tabindex='0'\\r\\n      value='editor'\\r\\n    >Editor</span>\\r\\n  </div>\\r\\n  <div id='theme-list' class='list scroll'></div>\\r\\n</div>\");\n\n//# sourceURL=webpack://com.foxdebug.acode/./src/pages/themeSetting/themeSetting.hbs?");

/***/ })

}]);