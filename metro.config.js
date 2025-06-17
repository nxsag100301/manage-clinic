const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);

// Add PDF to asset extensions
const config = mergeConfig(defaultConfig, {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, 'pdf'],
  },
});

module.exports = withNativeWind(config, {input: './global.css'});
