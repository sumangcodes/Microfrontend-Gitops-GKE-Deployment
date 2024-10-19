"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject; // src/components/Button.js
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Button = _styledComponents["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  border: ", ";\n  padding: ", ";\n  font-family: ", ";\n  cursor: pointer;\n  border-radius: ", ";\n  transition: background-color 0.3s, color 0.3s;\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.button.backgroundColor;
}, function (props) {
  return props.theme.button.color;
}, function (props) {
  return props.theme.button.border;
}, function (props) {
  return props.theme.spacing(2);
}, function (props) {
  return props.theme.button.fontFamily;
}, function (props) {
  return props.theme.button.borderRadius;
}, function (props) {
  return props.theme.colors.secondary;
}, function (props) {
  return props.theme.colors.primary;
});
var _default = exports["default"] = Button;