const b: string = "hello world";
const b1: number = 123;

//boolean, null, undefined
const ex1: boolean = true;
const ex2: null = null;
const ex3: undefined = undefined;

//{name:'아아',price:2500}
const b5: object = { name: "아아", price: 2500 };
const b6: {} = { name: "라데", price: 3000 };

//타입 추론
const b7 = ["아", "진심", "무진장", "졸림"];
const b8:number[] = [1,2,3,4,5]

//최후의 보루임. anyscript를 사용할 바에는 javascript를 사용하는 것이 좋다.
const b9: any="모든 타입. 최후의 보루."