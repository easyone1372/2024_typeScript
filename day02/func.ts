const greet = (name: string, greeting?: string) => {
  return `${greeting ?? `hello`},${name}`;
};

console.log(greet("홍길동", "안녕!"));
console.log(greet("홍길동"));
