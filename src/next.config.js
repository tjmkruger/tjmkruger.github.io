const withSvgr = require("next-svgr");

module.exports = withSvgr({
  reactStrictMode: true,
  exportTrailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html/,
      loader: "html-loader",
    });

    // config.module.rules.map((rule) => console.log(JSON.stringify(rule)));

    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/(a|A)(b|B)(o|O)(u|U)(t|T)",
  //       destination: "/about",
  //     },
  //   ];
  // },
});
