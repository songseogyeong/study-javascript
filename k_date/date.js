// Date객체
// let 객체명 = new Date();

// Date객체의 주요 메소드
// getFullYear(): 4자리 년도
// getMonth(): 0~11사이의 정수(0: 1월, 1: 2월, ..., 11: 12월)
// getDate(): 한 달 내의 날짜(28~31)
// getDay(): 한 주 내 요일(0: 일요일, 1: 월요일, ..., 6: 토요일)
// getHours(): 0~23사이의 정수
// getMinutes(): 0~59사이의 정수
// getSeconds(): 0~59사이의 정수
// getMilliseconds(): 0~999사이의 정수
// getTime(): 1970년 1월 1일 0시 0분 0초 기준 현재까지의 밀리초
// setFullYear(year): 년도 저장
// setMonth(month): 월 저장
// setDate(date): 한 달 내의 날짜 값 지정
// setHours(hour): 시간 저장
// setMinutes(minute): 분 저장
// setSeconds(second): 초 저장
// setMilliseconds(ms): 밀리초 저장
// setTime(t): 밀리초 단위인 t값으로 시간 저장


let now = new Date();
console.log(now);

// 월은 0부터 시작한다 (0~11까지 있고 12를 작성하면 다음 해 1월이 된다)
let date1 = new Date(2023, 0, 1, 12, 0, 0, 0);
console.log(date1);

// 날짜 형식만 구분하고 앞에 있는 문자열은 무시
let date2 = new Date("sdfasdfasdfsdf 2023-01-01");
console.log(date2);

const format = `${now.getHours()}시 ${now.getMinutes()}분`;
console.log(format);

// 기본 Date는 UTC 시간이다.
console.log(now.toUTCString());

// 운영체제에 등록된 로컬 시간을 가져오는 것이 일반적이다.
console.log(now.toLocaleString());
