// module 불러오기 
import express from "express";
import logger from "morgan";
import path from "path";    // 경로설정
// 사용자가 만든 폴더의 파일 불러오기 
import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 3000;

const app = express();  // express 기능 사용하기 위해 객체생성

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', homeRouter);               // '/': home화면
app.use('/update', updateRouter);       // 
app.use('/select', selectRouter);

// 서버 실행
app.listen(PORT, () => {
    console.log('Example app listening at http://localhost:${PORT}')
})