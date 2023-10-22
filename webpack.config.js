const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require('path');

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

  return defaultConfig
};