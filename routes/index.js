const express = require("express");
const router = express.Router();
const { BasicHttpBinding, Proxy } = require("wcf.js");

router.get("/", (req, res, next) => {
  const BasicHttpBinding = require("wcf.js").BasicHttpBinding,
    Proxy = require("wcf.js").Proxy,
    binding = new BasicHttpBinding({
      SecurityMode: "TransportWithMessageCredential",
      MessageClientCredentialType: "UserName"
    }),
    proxy = new Proxy(binding, "http://10.1.2.103:8000/RISDataService.svc"),
    message =
      "<Envelope xmlns='http://schemas.xmlsoap.org/soap/envelope/'>" +
      "<Header />" +
      "<Body>" +
      "<Login xmlns='http://tempuri.org/'>" +
      "<UserContext>" +
      "<username>123</username>" +
      "<password>123</password>" +
      "</UserContext>" +
      "</Login>" +
      "</Body>" +
      "</Envelope>";

  //   proxy.ClientCredentials.Username.Username = "yaron";
  //   proxy.ClientCredentials.Username.Password = "1234";

  proxy.send(message, "http://tempuri.org/IRISDataService/Login", function(
    response,
    ctx
  ) {
    console.log(response);
    console.log(ctx);
  });
  res.json({ title: "Express" });
});

module.exports = router;
