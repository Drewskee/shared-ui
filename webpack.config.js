const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

const path = require('path');

// // const config = {
// // 	// ... rest of Webpack configuration
// // 	resolve: {
// //  		alias: {
// // 		 "@components": path.resolve(__dirname, "src/components"),
// // 		}
// // 	}
// }

// module.exports = (webpackConfigEnv, argv) => {
//   const defaultConfig = singleSpaDefaults({
//     orgName: "infini-ui",
//     projectName: "react-add-to-calendar",
//     webpackConfigEnv,
//     argv,
//     alias: {
//       "@components": path.resolve(__dirname, "src/components"),
//      }
//   });

//   return merge(defaultConfig, {
//     loader: {
//         test: /\.svg$/i,
//         issuer: /\.[jt]sx?$/,
//         use: ["@svgr/webpack"],
//       },
//   });
// };
// // ./src/infini-ui-react lendar

module.exports = (webpackConfigEnv, argv) => {
  
  const defaultConfig = singleSpaDefaults({
    orgName: "infini",
    projectName: "react-add-to-calendar",
    webpackConfigEnv,
    argv,
  });

  defaultConfig.resolve.alias = {
    "@components": path.resolve(__dirname, "./components"),
    "@src": path.resolve(__dirname, "./src"),
  };

  // defaultConfig.loader = {
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  // };

  return defaultConfig
};

// module.exports = {
//   // ... rest of config
//   webpackFinal: async (config, other) => {
//     config.resolve.alias = {
//       "@components": path.resolve(__dirname, "../", "src/components"),
//     };

//     return config;
//   },
// };