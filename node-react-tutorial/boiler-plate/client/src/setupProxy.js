// Why use proxy server?: Several reasons
// 1. Modify IP in datagram so that another people can't see the real IP
// 2. Provide cache data
// 3. Block certain websites
// 4. Access blocked websites

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
