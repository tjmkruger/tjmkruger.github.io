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

  async rewrites() {
    return {
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/:path*",
          destination: `/404/index.html`,
        },
      ],
    };
  },
});
