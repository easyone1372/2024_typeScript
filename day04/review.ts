const getSomething2 = <T>(something: T) => {
  return `${something}을 얻었습니다.`;
};

type Pair<T, U> = {
  first: T;
  second: U;
};

const test1: Pair<string, boolean> = {
  first: "치킨",
  second: false,
};

type Coffee1 = {
  name: string;
  price: number;
};

type Cookie = {
  name: string;
  price: number;
};

const subwayMorningSet: Pair<Coffee1, Pair<Cookie, Cookie>> = {
  first: {
    name: "아메리카노",
    price: 1500,
  },
  second: {
    first: {
      name: "화이트 쿠키",
      price: 2500,
    },
    second: {
      name: "초코쿠키",
      price: 2000,
    },
  },
};

//Triple 타입 제너릭화 시키고
//Hamburger type
//side type
//drink type

//보통 T, U, V를 변수로 설정함
type Triple<H, S, D> = {
  hamburger: H;
  side: S;
  drink: D;
};

//이것도 반복되는데 추상화 할 수 있을지도
type Hamburger = {
  name: string;
  price: number;
};

type side = {
  name: string;
  price: number;
};

type Coffee2 = {
  name: string;
  price: number;
  hasCaffein: boolean;
};

type drink = {
  name: string;
  price: number;
  kcal: number;
};

const lotteria: Triple<Hamburger, side, drink> = {
  hamburger: {
    name: "상하이버거",
    price: 5700,
  },
  side: {
    name: "감자튀김",
    price: 2000,
  },
  drink: {
    name: "코카콜라",
    price: 3500,
    kcal: 50,
  },
};

type Success1<T> = {
  type: "success";
  value: T;
};

type Fail1 = {
  type: "fail";
  value: string;
};

type Response__<T> = Success1<T> | Fail1;

const getResponse_ = (res: Response__<string[]>) => {
  if (res.type == "success") {
    res.value.forEach((v) => console.log(v));
  } else {
    console.log(res.value.toUpperCase());
  }
};

getResponse_({
  type: "success",
  value: ["자바", "파이썬", "타입스크립트", "코틀린"],
});

type Won = `${string}원`;
type Yen = `${string}엔`;
type Dollar = `${string}달러`;

type GuestName = `${string}님`;
const shampoo: Won | Yen = "100엔";

const choi: GuestName = "최님";
