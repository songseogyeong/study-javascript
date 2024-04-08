// 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
// 프로토타입은 함수로 선언하며, 반드시 대문자로 시작한다.
// this는 해당 객체를 의미한다.

function User(id, pw, name, age) {
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age;
}

// han 변수 선언 후 각 프로퍼티에 값을 담기
han = new User("hds1234", "1234", "한동석", 20);

// han 출력
console.log(han);
// 출력 결과: User {id: 'hds1234', pw: '1234', name: '한동석', age: 20}