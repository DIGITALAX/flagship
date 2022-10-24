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
        midWhite: "#FAF4E8",
        dull: "#CDAAA4",
        skyBlue: "#BBEEFF",
        grayMid: "#C9D8E4",
        purp: "#CFB0FA",
        deep: "#4FC0F3",
        grad1: "#173FD7",
        grad2: "#6CE3D6",
        grad3: "#0772BB",
        grayL: "#FBF9F5",
        darkG: "#2A3940",
        lensG: "#7FDA1F",
        lightB: "#BCF9FF",
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
        fira: "Fira Regular",
        firaL: "Fira Code Light",
        firaB: "Fira Bold",
        firaM: "Fira Medium",
        din: "DIN Condensed",
        futur: "Futurist",
        mag: "Letter Magic",
        rain: "Internal Rainbows",
        lib: "Liberation Mono",
        libB: "Liberation Mono Bold",
        gisL: "FH Giselle Light",
        thun: "A Love of Thunder",
        fut: "Futurist",
        aud: "Audimat"
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
      cursor: {
        sewing: "url('/images/sewingCursor.png'), auto",
        sewingH: "url('/images/sewingCursorH.png'), auto",
        sewingS: "url('/images/sewingCursorSmall.png'), auto",
        sewingHS: "url('/images/sewingCursorHSmall.png'), auto",
      },
    },
  },
  plugins: [],
};
