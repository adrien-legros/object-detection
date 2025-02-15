const http = require("http");
const httpAgent = new http.Agent({ keepAlive: true });

const axiosClient = require("axios").create({
  timeout: 120000,
  httpAgent,
});

module.exports = axiosClient;
