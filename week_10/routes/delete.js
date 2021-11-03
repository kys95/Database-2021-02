import express from "express";
import { selectSql, deleteSql} from "../database/sql";

const router = express.Router();
// 기존의 입력 값 불러오기
router.get('/', async(req, res) => {

    const course = await selectSql.getCourse();
    res.render('delete', {
        title: "course 삭제 기능",
        course
    });
});


// 삭제 버튼을 눌렀을 경우 select query을 실행하며 조회 페이지로 이동
// 버튼을 눌렀을 때 그 버튼의 value속성값을 Cnumber로 받도록...
// Cnumber를 data로 만들어서 sql.js로 변수로 넘겨줌
router.post('/', async (req, res) => {
    console.log('delete router:',req.body.delBtn);      // 버튼을 눌렀을 때 해당 열의 Cnumber를 가져오는 것을 확인

    const data = {
        Cnumber: req.body.delBtn,
    };
    await deleteSql.deleteCourse(data);

    res.redirect('/delete');    // localhost:3000/delete
});

module.exports = router;