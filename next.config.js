// next.config.js

const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  /* config options here */
});

module.exports = {
  i18n: {
    locales: ["en", "ua", "ru"],
    defaultLocale: "ua",
    localeDetection: false,
  }
};
