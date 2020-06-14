/* MongoDB 연동 */
var mongoose = require("mongoose");

var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  console.log("connected mongodb");
});
mongoose.connect("mongodb://localhost:27017/mandalart", {
  //mongoose에 연결. URL/DB이름
  // MongoDB에서 계속 묻는 기본 설정을 미리 저장
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  // 마지막 옵션 이유는 DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
});

/* 서버 개설 */
var express = require("express");
var app = express();
var cors = require('cors'); // CORS 정책을 우회하기 위해 react 앱이 실행되는 주소를 허용
var port = process.env.PORT || 4000;

var corsOptions = {
    origin: 'http://localhost:3000', // 허용되는 Origin
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));
app.get("/", function (req, res) {
  console.log("hi express");
  res.send("<h1>asdf</h1>"); // res.end('(문자열)')라면 그냥 문자열을 res body에 저장하는데 그친다.
});

app.get("/data", function (req, res) {
  console.log("GET");
  res.send('afs');
});

app.post("/data", function (req, res) {
  console.log(req);
});

var server = app.listen(port, function () {
  console.log("Server started on port " + port);
});
