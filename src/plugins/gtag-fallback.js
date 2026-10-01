module.exports = function gtagFallbackPlugin() {
  return {
    name: 'gtag-fallback-plugin',
    getClientModules() {
      return [require.resolve('../clientModules/gtagFallback.js')];
    },
  };
};