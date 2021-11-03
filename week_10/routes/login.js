// login page : 홈페이지 


import express from "express";
import { selectSql } from "../database/sql"; // selectSql과 관련된 query함수 불러옴

const router = express.Router();        // express의 router함수 이용

router.get('/', (req, res) => {
    res.render('login');     // home.hbs파일을 찾아 웹브라우저에 뿌려줌
});

// home.hbs파일에서 post로 넘기겠다고 했기 때문에 post로 받음
router.post('/', async (req,res) => {
    const vars = req.body;                      // input data(object type) 저장
    const users = await selectSql.getUsers();   //database에서 user정보를 가져옴
    let whoAmI = '';                            // let:값을 변경할 수 있음  ,  whoAmI : admin or user 인지 모름
    let checklogin = false;                     // 처음엔 로그인 안한 상태

    //for(let i =0;i<users.length;i++){
    //    if (vars.id === user.id && vars.password === user[i].password){
    //
    //    }
    // ->예전 문법}

    // map: 하나씩 체크를 하며 기능을 수행 -> for와 유사, but 간결함
    users.map((user) => {
        if (vars.id === user.Id && vars.password === user.Password){    // user.Id & user.Password : database 필드 대문자
            checklogin = true;
            if (vars.id === 'admin'){                                   // db와 동일한 상태인건 확인 but, admin or users인지 확인해야함
                whoAmI = 'admin';
            } else {
                whoAmI = 'users';
            }
        }   
    })

    console.log('whoAmI:', whoAmI);

    // delete page or select page로 갈지 지정
    if (checklogin && whoAmI === 'admin'){
        res.redirect('/delete');
    } else if (checklogin && whoAmI === 'users'){
        res.redirect('/select');
    } else {
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
    

})


module.exports = router;