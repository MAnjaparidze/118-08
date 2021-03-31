const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/', { target: 'http://web.08.ge/',changeOrigin:true }));
};