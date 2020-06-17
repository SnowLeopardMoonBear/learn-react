/* 만다라트 프로젝트의 서버입니다. DB와 클라이언트를 이어줍니다. */

/* ##################### 1. MongoDB 연동 ##################### */
var mongoose = require("mongoose");
var Mandalart = require("./models/mandalart.js");

var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  console.log("connected mongodb");
});
mongoose.connect("mongodb://localhost:27017/mandalart", { //mongoose에 연결. URL/DB이름
  // MongoDB에서 계속 묻는 기본 설정을 미리 저장. 마지막 설정은 DeprecationWarning 때문.
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

/* ##################### 2. 서버 개설 ##################### */
var express = require("express");
var app = express();
var cors = require("cors"); // CORS 정책을 우회하기 위한 모듈
var port = process.env.PORT || 4000; // PORT 설정이 없을 시 4000번 포트로 접속
// COST 우회를 위한 옵션 지정
var corsOptions = {
  origin: "http://localhost:3000", // react App이 실행되는 3000번 포트를 허용되는 Origin에 추가
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// 2-1. 미들웨어
app.use(cors(corsOptions)); // react App의 접속을 허용
app.use(express.json()); // req.body를 읽기 위해 필요. express 내장. 따로 body-parser를 안 써도 됨!

// 2-2. 라우팅
app.get("/", function (req, res) {
  console.log("hi express");
  res.send("<h1>asdf</h1>"); // res.end('(문자열)')라면 그냥 문자열을 res body에 저장하는데 그친다.
});

app.post("/data", function (req, res) { // 만다라트 업데이트시 DB로 해당 만다라트 보내기. async await function으로 갈아야 할 듯
  Mandalart.remove({user:"박창훈"}, (err, output)=>{
    if (err) return console.error(err);
    console.log(output);
    var mand = new Mandalart();
    mand.user="박창훈";
    mand.mandalart=req.body;
    mand.save((err)=>{
      if (err){
        console.error(err);
        return;
      }
      Mandalart.find((err, mandalarts) => console.log(mandalarts))
    });
  })
});

// 2-3. 서버 구동
var server = app.listen(port, function () {
  console.log("Server started on port " + port);
});
