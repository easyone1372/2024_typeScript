//1. 제일 작은 수 제거하기

const removeMin = (arr: number[]): number[] => {
  if (arr.length == 0) {
    return [-1];
  }
  const min = arr.sort()[0];
  const newArr = arr.filter((v) => v != min);
  return newArr;
};

//위와 아래는 동일한 식이다. 1줄로 간단히 표현할 수 있다.
const removeMin1 = (arr: number[]) =>
  arr.length == 0 ? [-1] : arr.filter((v) => v != arr.sort()[0]);
