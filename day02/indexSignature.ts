type Coffee = {
  [key: string]: number;
};

const test: Coffee = {
  name: 1,
  shot: 2,
  kcal: 3,
};

type Person = {
  name: string;
  age: number;
  nation?: string; //null일수도있음: optional, 최소화하는게 좋다.
};

const kim: Person = {
  name: "김씨",
  age: 22,
  nation: "한국",
};

type Unit = {
  [key: string]: string | number | null | undefined;
  hp: number;
  name: string;
  pet?: string;
};

type Bread = {
  name: string;
  price: number;
};

type keyofBreadType = keyof Bread; // 'name' | 'price' 키들로 이루어진 타입이다.
const apple: keyofBreadType = "price";
