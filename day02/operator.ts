//union

const user: string | number = 1; //string이거나 number타입이다.
const isLoggin: boolean | null = false;
const box: Element | null = document.querySelector(".box");

//개 - 푸들, 치와와, 시츄, 시골잡종, ...
//Element - div, span, section, input, button, ...
const newDiv: HTMLDivElement = document.createElement("div");

// 커피 -> {name, price, kcal} or {name, price, shot}
const coffee:
  | { name: string; price: number; kcal: number }
  | { name: string; price: number; shot: number } = {
  name: "아메리카노",
  price: 2000,
  shot: 3,
  //kcal: 200, //안됨. 위이거나 아래이거나 둘 중 하나만 가능
};

//중요! intersection[=and] &
//never: 있을 수가 없음
//unknown: 알 수 없음
//()=>type: 함수 지정 타입

//const b: string & number //never타입. 존재할 수 없다.

const happy = () => {
  console.log("행복함?");
};

//solid 원칙: d: 저수준 모듈 => 고수준 모듈
//기초가 단단해야 건물이 무너지지 않는다.
//ex: [타이어, 엔진, 벨트, 시트] => 자동차
const person: { name: string } & { age: number } & { eat: () => void } = {
  name: "김타입",
  age: 21,
  eat: () => {
    console.log("밥꿀맛");
  },
};
