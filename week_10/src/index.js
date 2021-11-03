// module 불러오기 
import express from "express";
import logger from "morgan";
import path from "path";    // 경로설정
// 사용자가 만든 폴더의 파일 불러오기 
import loginRouter from "../routes/login";
import selectRouter from "../routes/select";
import deleteRouter from "../routes/delete";


const PORT = 3000;

const app = express();  // express 기능 사용하기 위해 객체생성

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', loginRouter);               // '/': home화면
app.use('/select', selectRouter);
app.use('/delete', deleteRouter);       // 


// 서버 실행
app.listen(PORT, () => {
    console.log('Example app listening at http://localhost:${PORT}')
})