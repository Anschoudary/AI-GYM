const path = require("path");

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    "@mediapipe": path.resolve(__dirname, "node_modules/@mediapipe"),
  };
  return config;
};
