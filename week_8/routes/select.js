import express from "express";
import { selectSql } from "../database/sql";            // selectSql 모듈 사용, {} 중괄호는 사용자가 만든모듈 사용하기 위함

const router = express.Router();

// '/': /select (o) home(x)  
router.get('/', async function(req, res) {
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();

    // select.hbs파일과 연동
    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;