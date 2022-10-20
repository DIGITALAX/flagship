/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply"],
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        offBlack: "#111313",
        offBlue: "#01030c",
        offWhite: "#F2F2F2",
        lightYellow: "#FCF894",
        grayBlue: "#CDE1E1",
        midGray: "#505A5A",
        bright: "#CDFB51",
        grad1: "#8BCDF4",
        grad2: "#C9F5FD",
        grad3: "#C6F8FE",
        borderBlue: "#B8F3FF",
        darkP: "#462D4A",
        foot: "#F7F8E8",
      },
      boxShadow: {
        film: "15px 10px 50px -20px rgba(0, 0, 0.8, 0.3)",
        film2: "-2px -10px 30px -10px rgba(0, 0.2, 0, 0.3)",
      },
      cursor: {
        empire: "url('/images/empirecursor.png'), auto",
        empireA: "url('/images/empirecursorogsmall.png'), auto",
        empireS: "url('/images/empirecursorsmall.png'), auto",
      },
      fontFamily: {
        holo: "Nan Holo",
        york: "New York",
        air: "Air Strike",
        emiken: "Emiken",
        atmos: "Atmosphere",
        alber: "Alberto",
        glitch: "Doctor Glitch",
        conso: "Conso Regular",
        consoM: "Conso Medium",
        gaia: "Gaia",
        fira: "Fira Code",
        firaL: "Fira Code Light",
        firaB: "Fira Code Bold",
        din: "DIN Condensed",
        futur: "Futurist",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        unblur: {
          "0%": {
            filter: "blur(20)",
          },
          "100%": {
            filter: "blur(0)",
          },
        },
      },
      animation: {
        reverseAnimation: "marquee 40s linear infinite",
        unblur: "unblur 0.5s linear",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      gridAutoRows: {
        auto: "auto auto",
      },
      gridAutoColumns: {
        auto: "auto auto",
      },
      screens: {
        midi: "1140px",
        half: "900px",
        alm: "740px",
      },
    },
  },
  plugins: [],
};
