import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'gmo3086*',
        waitForConnections: true,
        conncectionLimit: 10,
        queueLimit: 0
    }
);

// async / await 사용
const promisePool = pool.promise(); 

// select query
// export : 외부에서 함수를 가져다 쓰기 위함
export const selectSql = {
    getUsers : async () => {     // select 이므로 data 받지 않음
        const [rows] = await promisePool.query(`select * from user`);   // 동기화
     
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
    // course table 추가
    getCourse : async () => {
        const [rows] = await promisePool.query(`select * from course`);

        return rows
    },
}


// delete query
export const deleteSql = {
   
    // data에 Cnumber를 입력해서 Where조건으로 설정
    deleteCourse : async (data) => {                            // delete.js에서 data를 받음
        console.log('deleteSql.deleteCourse:',data.Cnumber);    // 버튼을 눌렀을 때 Cnumber가 어떤값인지 확인(어디서 출력하는지 확인)
        const sql = `delete from course where Cnumber = ${data.Cnumber}`;
        await promisePool.query(sql);
    },
}