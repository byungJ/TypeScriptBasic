class Person {
    private tname: string;
    public tage: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.tname = name;
        this.tage = age;
    }
}

// 제네릭
//제네릭은 C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징입니다.
//한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됩니다.
function logText<T>(text: T):T {
    console.log(text);
    return text;
}
logText<string>('hihihi~~~~');