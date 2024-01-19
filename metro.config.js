// Learn more: https://docs.expo.dev/guides/monorepos/
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");
const { withNativeWind } = require("nativewind/metro");

const projectRoot = __dirname;

// modify this line to point to the root of your monorepo
const workspaceRoot = path.resolve(projectRoot, "../..");

// Create the default Metro config
const config = getDefaultConfig(projectRoot, {
  isCSSEnabled: true,
});

if (config.resolver) {
  // 1. Watch all files within the monorepo
  // config.watchFolders = [workspaceRoot];
  // 2. Let Metro know where to resolve packages and in what order
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, "node_modules"),
    // path.resolve(workspaceRoot, "node_modules"),
  ];
  // 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
  config.resolver.disableHierarchicalLookup = true;

  // config.resolver.sourceExts.push("cjs");
}

module.exports = config;

// module.exports = withNativeWind(config, {
//   // 3. Set `input` to your CSS file with the Tailwind at-rules
//   input: "src/global.css",
//   // This is optional
//   projectRoot,
//   inlineRem: false,
// });