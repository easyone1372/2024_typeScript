//constraints[제약, 규제]

type MainColor = "Pink" | "Red" | "Orange";
type FontSize = 14 | 16 | 20;

type WarnButton<T extends MainColor> = {
  backgroundColor: T;
  fontSize: FontSize;
};

const button: WarnButton<"Pink"> = {
  backgroundColor: "Pink",
  fontSize: 14,
};

const newBtn = document.createElement("button");
newBtn.style.backgroundColor = button.backgroundColor;

type ID = string | number;

type Entity<T extends ID> = {
  id: T;
  password: string;
};

const admin: Entity<string> = {
  id: "koreaIT",
  password: "q1w2e3r4!",
};

//type assertion: 타입 단언[확신]
//as 사용할때는 주의해서 사용하기
const box1 = document.querySelector(".box") as HTMLDivElement;
