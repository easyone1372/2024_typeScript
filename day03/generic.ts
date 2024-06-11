//generic: generalize. 일반화시키다. 응용: 입구컷

type Fruit_ = {
  name: string;
  kcal: number;
};

//일반함수 방식
//여기서 t는 type의 약자
function getSomething<T>(something: T) {
  console.log(`${something}을 얻었습니다.`);
}

getSomething<string>("과일");
getSomething<number>(20080525);
getSomething<boolean>(false);

getSomething<string | number>("목말라");

//화살표함수 방식
const getSomething1 = <T>(something: T) => {
  console.log(`${something}을 얻었습니다.`);
};
getSomething1<string>("과일");

const getSomethingNumber = (something: number) => {
  console.log(`${something}을 얻었습니다.`);
};
const getSomethingString = (something: string) => {
  console.log(`${something}을 얻었습니다.`);
};
const getSomethingBoolean = (something: boolean) => {
  console.log(`${something}을 얻었습니다.`);
};
