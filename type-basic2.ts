// 유니온 타입(Union Type)
// 파라미터, 변수에 한 가지 이상의 타입을 사용하고 싶을 때 사용.
let test: string | number | boolean;

function logMessage(value: string | number) {
    console.log(value);

    // if로 타입을 검사하고 난뒤에는 그 타입에 해당 하는 함수를 사용 할 수 있습니다.
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if(typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(1000);

interface Developer2 {
    name: string;
    skill: string;
}

interface Person2 {
    name: string;
    age: number;
}

function askSomeone(someone: Developer2 | Person2) {
    // 타입을 검사하지 않으면 공통 된 속성만 접근 할 수 있다.
    someone.name;
}
askSomeone({name: 'kbj', skill: 'wpf', age: 100});
askSomeone({name: 'eggp', age: 100});

// 인터섹션 타입(Intersection Type)
function askSomeone2(someone: Developer2 & Person2) {
    // 타입을 검사하지 않으면 공통 된 속성만 접근 할 수 있다.
    someone.name;
    someone.age;
    someone.skill;
}
askSomeone2({name: 'kbj', age: 100 ,skill: 'wpf'})

// 이넘(Enums): 이넘은 특정 값들의 집합을 의미하는 자료형 입니다.
// 초기화 하지 않으면 기본적인 값은 숫자.
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

var myShoes = Shoes.Nike;

console.log(myShoes);

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}


function askQuestion(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if(answer === Answer.No) {
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes);