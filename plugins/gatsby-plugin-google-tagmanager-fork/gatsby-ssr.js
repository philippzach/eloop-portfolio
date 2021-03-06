    "use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _commonTags = require("common-tags");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n            ", "\n            ", ""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n      &gtm_auth=", "&gtm_preview=", "&gtm_cookies_win=x\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["<iframe src=\"https://www.googletagmanager.com/ns.html?id=", "", "\" height=\"0\" width=\"0\" style=\"display: none; visibility: hidden\"></iframe>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  if(window.navigator.userAgent.indexOf('Lighthouse') == -1 && window.navigator.userAgent.indexOf('Speed Insights') == -1 && window.navigator.userAgent.indexOf('Google-Mobile') == -1 && window.navigator.userAgent.indexOf('Googlebot') == -1) {(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n  'https://www.googletagmanager.com/gtm.js?id='+i+dl+'", "';f.parentNode.insertBefore(j,f);\n  })(window,document,'script','", "', '", "');}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var generateGTM = function generateGTM(_ref) {
  var id = _ref.id,
      environmentParamStr = _ref.environmentParamStr,
      dataLayerName = _ref.dataLayerName;
  return (0, _commonTags.stripIndent)(_templateObject(), environmentParamStr, dataLayerName, id);
};

var generateGTMIframe = function generateGTMIframe(_ref2) {
  var id = _ref2.id,
      environmentParamStr = _ref2.environmentParamStr;
  return (0, _commonTags.oneLine)(_templateObject2(), id, environmentParamStr);
};

var generateDefaultDataLayer = function generateDefaultDataLayer(dataLayer, reporter, dataLayerName) {
  var result = "window." + dataLayerName + " = window." + dataLayerName + " || [];";

  if (dataLayer.type === "function") {
    result += "window." + dataLayerName + ".push((" + dataLayer.value + ")());";
  } else {
    if (dataLayer.type !== "object" || dataLayer.value.constructor !== Object) {
      reporter.panic("Oops the plugin option \"defaultDataLayer\" should be a plain object. \"" + dataLayer + "\" is not valid.");
    }

    result += "window." + dataLayerName + ".push(" + JSON.stringify(dataLayer.value) + ");";
  }

  return (0, _commonTags.stripIndent)(_templateObject3(), result);
};

exports.onRenderBody = function (_ref3, _ref4) {

  var setHeadComponents = _ref3.setHeadComponents,
      setPreBodyComponents = _ref3.setPreBodyComponents,
      reporter = _ref3.reporter;
  var id = _ref4.id,
      _ref4$includeInDevelo = _ref4.includeInDevelopment,
      includeInDevelopment = _ref4$includeInDevelo === void 0 ? false : _ref4$includeInDevelo,
      gtmAuth = _ref4.gtmAuth,
      gtmPreview = _ref4.gtmPreview,
      defaultDataLayer = _ref4.defaultDataLayer,
      _ref4$dataLayerName = _ref4.dataLayerName,
      dataLayerName = _ref4$dataLayerName === void 0 ? "dataLayer" : _ref4$dataLayerName;

  if (process.env.NODE_ENV === "production" || includeInDevelopment) {

      var environmentParamStr = gtmAuth && gtmPreview ? (0, _commonTags.oneLine)(_templateObject4(), gtmAuth, gtmPreview) : "";
      var defaultDataLayerCode = "";

      if (defaultDataLayer) {
        //defaultDataLayerCode = generateDefaultDataLayer(defaultDataLayer, reporter, dataLayerName);
      }

      setHeadComponents([_react["default"].createElement("script", {
        key: "plugin-google-tagmanager",
        dangerouslySetInnerHTML: {
          __html: (0, _commonTags.oneLine)(_templateObject5(), defaultDataLayerCode, generateGTM({
            id: id,
            environmentParamStr: environmentParamStr,
            dataLayerName: dataLayerName
          }))
        }
      })]);
      setPreBodyComponents([_react["default"].createElement("noscript", {
        key: "plugin-google-tagmanager",
        dangerouslySetInnerHTML: {
          __html: generateGTMIframe({
            id: id,
            environmentParamStr: environmentParamStr
          })
        }
      })]);
      }
  
};