export const theme = {
  colors: {
    primary: "#FF9900",  // Amazon-like orange
    secondary: "#232F3E", // Amazon-like dark blue
    background: "#1A1A1A",  // Dark background
    text: "#39FF14",  // Bright green text
  },
  fonts: {
    body: "'Source Code Pro', monospace",  // Geeky font
    heading: "'Source Code Pro', monospace",  // Geeky font
  },
  button: {
    backgroundColor: "#FF9900",
    color: "#232F3E",
    fontFamily: "'Source Code Pro', monospace",
    border: "1px solid #39FF14",
    borderRadius: "4px",
    padding: "10px 20px",
  },
  spacing: (factor) => `${8 * factor}px`, // Scaled spacing system
  microfrontendBorder: "1px solid #39FF14" // Border for micro frontends
};
