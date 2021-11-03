STEP 1 : 임의의 테이블에 생성한 후 데이터 삽입하여 delete 결과 확인
- 기존 테이블 이외의 새로운 임의의 테이블 생성
- 5개 이상 값을 insert 한 후 “삭제”버튼을 눌렀을 때 정상 동작함을 캡처
   • 한글 데이터 입력해도 무방함

STEP 2 : sql.js 파일에서 delete query의 where 문을 수정할 것
- STEP 1에서 생성한 테이블에 대하여 delete query의 where문을 알맞게 수정하여 삭제할 것
