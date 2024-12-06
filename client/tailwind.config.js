/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {      
      fontFamily: {
        codystar :["Codystar", "sans-serif"],
        sourceCode: ["Source Code Pro", "monospace"],
        archivoblack: ["Archivo Black", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        dark : "#0b0b0b",
        light:"#f7f9fc",
        gray:"#252525",
        "slate-black": "#212529",
        "slate-white": "#ececec",
        "slate-gray": "#949494",
        lightest:"#adaeb0" 
      },
      boxShadow: {
        xl: "0 0px 10px rgba(0, 0, 0, 0.1)",
        "2xl": "0 0px 20px rgba(0, 0, 0, 0.15)",
        "3xl": "0 0px 30px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

// Tints - lightens the color 
// Shades - darkens the color