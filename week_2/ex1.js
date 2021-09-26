//html element 저장
let jsTitleSpan = document.getElementById("js-title").querySelector("span");
let jsRange = document.getElementById("js-range");
let userInput = document.getElementById("user-input");
let jsResultSpan = document.getElementById("js-result").querySelector("span");
let maxNum = Number(jsRange.value); // 최댓값 변경하기 위해 초기값 설정

//길이 변경으로 인한 최댓값 업데이트 
const updateMaxNum = () => {
  maxNum = Number(jsRange.value);
  userInput.setAttribute("max", maxNum);
};

//최댓값을 html에 작성
const printMaxNum = () => {
    updateMaxNum();
  jsTitleSpan.innerHTML = `${maxNum}`;
};

//결과를 html에 작성
const printResult = (e) => {
  e.preventDefault();
  let userNum = Number(userInput.value); //플레이어가 입력한 숫자
  let machineNum = Math.floor(Math.random() * (maxNum + 1)); //기계가 생성한 숫자
  if (userNum === machineNum) {
    jsResultSpan.innerHTML = `You choose ${userNum}, the machine choose: ${machineNum}.<br> 
    <b>You won</b>`;    // 줄바꿈
  } else {
    jsResultSpan.innerHTML = `You choose ${userNum} the machine choose ${machineNum}.<br>
    <b>You lost!</b>`;  // 글자 굵게
  }
};

//이벤트 리스너 
jsRange.addEventListener("input", printMaxNum);
document.addEventListener("submit", printResult);