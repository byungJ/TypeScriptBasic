let str: string = 'hello';
let num: number = 10;

// 배열
let arr1: Array<number> = [1,2,3,4,5];
let items: number[] = [1,2,3,4,5];
let arr2: Array<string> = ['k123','bdf','jdf'];

// 튜플
let address: [string,number] = ['cjdtkseh',10000];

// 객체
let obj: object = {};
let person: { name: string, age: number} = {
    name: 'kbj',
    age: 100,
};

// 진위값
let show: boolean = true;

// TS 함수정의 반환타입, 파라미터타입
function sum(a: number, b:number): number {
    return a + b;
}

// 함수의 옵셔널 파라미터
// 물음표(?)가 붙은 파라미터는 넘겨도 되고 안 넘겨도 됩니다.
function log(a: string, b?: string) {

}
log('cjd');

// interface
interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User): void {
    console.log(user);
}
getUser(seho);

// 함수의 스펙에 인터페이스 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sumF: SumFunction;
sumF = function(a: number, b:number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string
}

var arr: StringArray = [];
arr[0] = '숫자10';

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj1: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// 에러발생 string은 RegExp형식으로 적용할 수 없다.
//obj1['cssFile'] = 'a';

Object.keys(obj1).forEach(function(value) {

})

// 인터페이스 확장
interface Person {
    name: string,
    age: number,
}

interface Developer extends Person {
    language: string;
}

var eggp: Developer = {
    name: 'kbj',
    age: 27,
    language: 'eggpotato',
}

// 타입 별칭(Type Aliases)
type MyName = string;
const myName: MyName = 'kbj';

// interface I {
//     name: string;
//     skill: string;
// }

// type T {
//     name: string;
//     skill: string;
// }

// interface, type 차이점: 타입의 화작 가능 / 불가능 여부. type보다는 interface로 선언 하는 것이 좋습니다.