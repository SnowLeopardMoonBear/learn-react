const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api", // when entering /api, create proxy middleware whose target is port 5000
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
