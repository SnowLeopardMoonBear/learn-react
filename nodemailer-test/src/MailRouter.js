const Auth = require("./auth.js");
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const bodyParser= require("body-parser");

app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log(req.body);

  let email = req.body.email;
  let text = req.body.text;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: Auth,
  });
  let mailOptions = {
    from: Auth.user,
    to: email,
    subject: "메일 보내기 API 테스트",
    text: text,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email 전송 성공" + info.response);
    }
  });
});

app.listen(5001, () => console.log("router listening at PORT 5001"));
