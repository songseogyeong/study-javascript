// switch
// 하나의 변수에 여러 개의 값이 담길 수 있다면,
// 매번 ==으로 비교하는 if문 보다 switch 문을 사용하면 더 간결해진다.

let choice = 1;

// switch문에 choice의 값을 받아와 검사 
// switch에 break를 사용하지 않으면 아래 로직이 쭉 실행된다.
switch(choice) {
    // choice의 값이 1이라면, 아래 내용 출력
    case 1:
        console.log("choice는 1입니다.")
        console.log("들어옴")
        break;
    // choice의 값이 2라면, 아래 내용 출력
    case 2:
        console.log("choice는 2입니다.")
        console.log("들어옴")
        break;
    // choice의 값이 3이라면, 아래 내용 출력
    case 3:
        console.log("choice는 3입니다.")
        console.log("들어옴")
        break;
    // 모두 아니라면, 아래 내용 출력
    default:
        console.log("다시 시도해주세요.")
        break;
};