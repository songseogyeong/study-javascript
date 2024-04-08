// new Object() 생성자를 사용하여 객체 생성
let lunch = new Object();
lunch.name = "김밥";
lunch.price = "3000";

// 자바스크립트는 객체를 입력해도 값이 출력된다
console.log(lunch);
// 출력 결과: {name: '김밥', price: '3000'}

// pay 변수 선언 후 익명함수 할당
// 받을 매개변수가 없으면 비워도 된다.
lunch.pay = () => {
    console.log("결제 완료");
};

lunch.pay();
// 결제 완료