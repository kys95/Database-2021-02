import express from "express";
import { selectSql, updateSql} from "../database/sql";

const router = express.Router();

// 기존의 입력 갓 불러오기
// localhost:3000/update/employee
router.get('/employee', async (req, res) => {
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {
        title: "직원 테이블 갱신",
        emp_res
    });
});

// 기존의 입력 값 불러오기
router.get('/department', async(req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    });
});

// 수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/employee', async (req, res) => {
    const vars = req.body;
    console.log(vars.salary);
    
    const data = {
        Salary: vars.salary
    }

    await updateSql.updateEmployee(data);

    res.redirect('/select');     // localhost:3000/select
});

// 수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/department', async (req, res) => {
    const vars = req.body;
    console.log(vars.dname);

    const data = {
        Dname: vars.dname
    }
    await updateSql.updateDepartment(data);

    res.redirect('/select');    // localhost:3000/select
});

module.exports = router;