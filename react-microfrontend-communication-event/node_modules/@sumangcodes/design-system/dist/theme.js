"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;
var theme = exports.theme = {
  colors: {
    primary: "#FF9900",
    // Amazon-like orange
    secondary: "#232F3E",
    // Amazon-like dark blue
    background: "#FFFACD",
    // Light whitish-yellow
    text: "#232F3E" // Dark text for contrast
  },
  fonts: {
    body: "'Source Code Pro', monospace",
    // Geeky font
    heading: "'Source Code Pro', monospace" // Geeky font
  },
  button: {
    backgroundColor: "#FF9900",
    color: "#232F3E",
    fontFamily: "'Source Code Pro', monospace",
    border: "1px solid #39FF14",
    borderRadius: "4px",
    padding: "10px 20px"
  },
  spacing: function spacing(factor) {
    return "".concat(8 * factor, "px");
  },
  // Scaled spacing system
  microfrontendBorder: "1px solid #39FF14" // Border for micro frontends
};