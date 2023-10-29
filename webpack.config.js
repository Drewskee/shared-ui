const path = require('path');

module.exports = (_webpackConfigEnv, _argv) => {
  const defaultConfig = {
    orgName: "infini-ui",
    entry:  './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
    },
    resolve : {},
    module : {
      rules : []
    }
  };
  defaultConfig.resolve.extensions = [".ts", ".tsx", ".js"];
  defaultConfig.resolve.alias = {
    "@components": path.resolve(__dirname, "./components"),
    "@": path.resolve(__dirname, "./src"),
  };

  defaultConfig.module.rules = [
    { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
    {
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    }
  ]

  return defaultConfig
};