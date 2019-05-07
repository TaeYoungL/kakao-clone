const clockContainer = document.querySelector(".status-bar");
const clockTitle = clockContainer.querySelector(".status-bar__clock");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  date.getDate();
  date.getDay();

  clockTitle.innerText =
    `${hours < 10 ? `0${hours}` : hours}:` +
    `${minutes < 10 ? `0${minutes}` : minutes}:` +
    `${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
//setinterval(함수명, 밀리세컨드) *아주 자주 쓰이는 것
//ex) setinterval(init(),1000);
//1초마다 init() 함수를 실행시킨다
init();
