import express from "express";
import { insertSql } from "../database/sql"; // 데이터 삽입하기 위해 삽입과 관련된 query함수 불러옴

const router = express.Router();        // express의 router함수 이용

router.get('/', (req, res) => {
    res.render('home');     // home.hbs파일을 찾아 웹브라우저에 뿌려줌
});

// home.hbs파일에서 post로 넘기겠다고 했기 때문에 post로 받음
router.post('/', (req,res) => {
    const vars = req.body;  // data 저장
    const var_length = Object.keys(req.body).length;
    // var_length에 따라 employee, department 구분
    if (var_length > 4){
        const data = {                      //data 객체 생성
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno

        };

        insertSql.setEmployee(data);        // sql파일에서 함수 동작 -> db에 저장
    } else {
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);
    }

    res.redirect('/');                      // 입력한 후 ''화면으로 이동 : '/'로 똑같은 주소이므로 새로고침과 같은 동작
})

module.exports = router;