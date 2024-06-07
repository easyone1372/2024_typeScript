//1.태어난 년도로 띠 알아보기

const makeZodiac = (year: number): string => {
  const zodiac = [
    "원숭이",
    "닭",
    "개",
    "돼지",
    "쥐",
    "소",
    "호랑이",
    "토끼",
    "용",
    "뱀",
    "말",
    "양",
  ];

  const animal = zodiac[year % 12];
  return animal + "띠";
};

console.log(makeZodiac(2001));
console.log(makeZodiac(2024));
console.log(makeZodiac(2025));

//2. 숫자 뒤집기

const reverseNum = (x: number) => x.toString().split("").reverse().map(Number);

console.log("문제 2번");
console.log(reverseNum(12345));

//강사님 코드
const reversedNumber = (num: number): number[] =>
  [...String(num)].reverse().map((v) => Number(v));
console.log(reversedNumber(12345));

//3. 짝수는 싫어요

const findEven = (x: number) => {
  const numNanugi: number[] = [];

  for (let i = 1; i <= x; i++) {
    if (i % 2 !== 0) {
      numNanugi.push(i);
    }
  }

  return numNanugi;
};

console.log("문제 3번");
console.log(findEven(15));

//강사님코드
const hateEven = (n: number): number[] =>
  Array(n + 1)
    .fill(0)
    .map((_, i) => i)
    .filter((v) => v % 2);
console.log(hateEven(20));
console.log(hateEven(25));
