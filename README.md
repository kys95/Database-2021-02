# 2021-02-database
* 데이터베이스 설계
* [3주차](#3주차)
  * 실습 목표
  * DB tables
  * 실습 실행 방법
* [8주차](#8주차)
  * 실습 목표
  * DB tables
* [10주차](#10주차)
  * 실습 목표
  * DB tables

</br>

## 3주차

### 실습목표

1. 임의의 데이터베이스를 생성하여 Student 테이블을 만들고, 아래 정보를 담을 수 있도록 확장
  - 학번, 성명, 학과, 학년, 입학일자, 이메일
2. 위에서 만든 Student 테이블에 여러 개의 값을 Insert
3. 테이블의 값을 웹페이지에 출력

### DB tables

> show tables;

Tables_in_week3|
---|
student|

week3 데이터 베이스에 **Student** 테이블 생성

> desc Student;

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
StudentNumber|int|NO|PRI|NULL|
Name|varchar(30)|NO||NULL|
Class|char(1)|NO||NULL|
Major|varchar(30)|NO||NULL|
Time|datetime|NO||NULL|
Email|varchar(30)|YES||NULL|


> select * from Student;

StudentNumber|Name|Class|Major|Time|Email
---|---|---|---|---|---|
12134549|김김김|3|정보통신공학과|2021-09-26 16:51:19|adff@gmail.com
12163189|강윤석|4|정보통신공학과|2021-09-26 16:50:27|mok02198@gmail.com
12174439|이이이|2|컴퓨터공학과|2021_09-26 16:51:53|bbdagf@gmail.com

**Student** 테이블을 위와 같이 구성

### 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:mskim1024/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/mskim1024/2021-02-database.git
2. week_3 폴더로 이동
    - cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    - npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root', // 본인의 mysql user id
    database: 'tutorial', // 본인이 만든 데이터베이스 이름
    password: 'password', // 본인의 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);
</code>
</pre>
    
5. 서버 실행(powershell에서) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력

6. 기본 화면
    - localhost:3000으로 들어가면 기본 화면
    - (데이터베이스 설정이 된 경우) localhost:3000/users 로 들어가면 DB에 있는 값을 불러와서 출력

</br>

## 8주차

### 실습목표
1. 서버 및 웹 페이지 구현
  - 홈 화면 기능
  - 조회 화면 기능
  - 데이터 수정 기능
  - 데이터 베이스 접속 및 insert,update,select 기능
2. 웹 상에서 Mysql 사용
  - 웹에서 insert, update, select 명령어 사용
  - Employe 테이블의 임의의 필드 값을 입력받아 수정

### DB tables

> show tables;

Tables_in_week8|
---|
department|
employee|

week8 데이터 베이스에 **Department, Employee** 테이블 생성

> desc Department;

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
Dname|varchar(15)|NO|UNI|NULL|
Dnumber|int|NO|PRI|NULL|
Mgr_ssn|char(9)|NO|MUL|NULL
Mgr_start_date|date|YES||NULL

부서번호 Dnumber를 Primary key로 설정

> desc employee;

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
Fname|varchar(10)|NO||NULL|
Minit|char(1)|YES||NULL|
Lname|varchar(20)|NO||NULL
Ssn|char(9)|NO|PRI|NULL
Bdate|date|YES||NULL
Address|varchar(30)|YES||NULL
Sex|char(1)|YES||NULL
Salary|decimal(5,0)|YES||NULL
Super_ssn|char(9)|YES||NULL
Dno|int|NO||NULL|

직원번호 Ssn을 Primary key로 설정

> select * from department;

Dname|Dnumber|Mgr_ssn|Mgr_start_date
---|---|---|---|
전기공학과|1|12163189|2001-01-01
정보통신공학과|2|12135353|2002-04-25
전자공학과|3|12141223|2003-12-15

> select * from employee;

Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
---|---|---|---|---|---|---|---|---|---|
순신|L|이|12135353|1992-05-23|인천|남|5000|12163189|2
윤정|K|고|12141223|1994-12-23|경기|여|1500|12163189|3
윤석|K|강|12163189|1995-04-14|서울|남|2000||1
길동|H|홍|12173564|1997-09-12|부산|여|5000|12135353|2
재석|Y|유|12197454|1998-03-24|강원|남|400|12141223|3

</br>

## 10주차

### 실습목표

1. 서버 실행
  - 웹 브라우저에서 localhost:3000 접속
  - DB에 저장된 유저 정보를 확인
  - 로그인 성공 시 화면 이동
  - 로그인 실패 시 경고 창 팝업
2. 임의의 테이블에 데이터를 삽입하여 delete 결과 확인

### DB tables

> show tables;

Tables_in_week10|
---|
course|
department|
user|

week10 데이터 베이스에 **Course, Department, Use** 테이블 생성

> desc User;

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
Id|varchar(20)|NO|PRI|NULL|
Password|varchar(20)|NO||NULL|
Role|varchar(5)|NO||NULL|

> desc Department;

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
Dname|varchar(15)|NO|UNI|NULL|
Dnumber|int|NO|PRI|NULL|

> desc Course;

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
Cname|varchar(15)|NO|UNI|NULL|
Cnumber|int|NO|PRI|NULL|

유저 id, 부서번호 Dnumber, 강의번호 Cnumber를 Primary key로 설정

> select * from User;

Id|Password|Role
---|---|---|
admin|admin1234|admin
test|test1234|users

> select * from Department;

Dname|Dnubmer
---|---|
전기공학과|2
전자공학과|3
정보통신공학과|0
컴퓨터공학과|1

> select * from Course;

Cname|Cnumber
---|---|
english|2
math|1
programming|3



