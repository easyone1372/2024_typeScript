//type[타입] Alias[닉]

//string보다 작은 단위

// 리터럴 타입 - 사용자 정의 타입
type Genre =
  | "키덜트"
  | "공포"
  | "드라마"
  | "멜로"
  | "코믹"
  | "사랑"
  | "액션"
  | "범죄"
  | "코미디";
type Grade = "전체 이용가" | "12세" | "15세" | "18세";

type Movie = {
  name: string;
  genre: Genre;
  grade: Grade;
};

const inSideOut2: Movie = {
  name: "인사이드아웃2",
  genre: "키덜트",
  grade: "전체 이용가",
};

type movieName =
  | "원더랜드"
  | "설계자"
  | "나쁜 녀석들-라이드 오어 다이"
  | "퓨리오사-매드맥스 사가"
  | "존 오브 인터레스트"
  | "명탐전 코난 VS 괴도 키드"
  | "그녀가 죽었다"
  | "범죄도시4"
  | "혹성탈출-새로운 시대";

type Movie2 = {
  name: movieName;
  time: timeTable;
  seat: seatAmount;
  genre: Genre[];
};

type timeTable = "11:40" | "14:00" | "16:20" | "18:40" | "21:00";
type seatAmount = 233 | 231 | 234 | 232 | 232;

// ? ?? ㅁㄹ
const cgv: Movie2[] = [
  { name: "원더랜드", time: "11:40", seat: 233, genre: ["공포", "드라마"] },
  { name: "설계자", time: "14:00", seat: 231, genre: ["드라마", "범죄"] },
  {
    name: "나쁜 녀석들-라이드 오어 다이",
    time: "16:20",
    seat: 232,
    genre: ["액션", "코미디"],
  },
];

//이런식으로 foreach 등을 돌릴 수 있다
// cgv.map((v)=>{
//     v.genre.forEach((v)=>console.log(v))
// })

//Unit hp, skill, name, 공격함수

//const sum=[1,2,3,4].reduce((a,c)=>a+c) => 10

//함수 movie[] 매개변수를 받고, 장르를 하나의 문자열로 출력하는 함수 정의
// const makeGenreStr = (movies: Movie2[]) => {
//   movies.forEach((v) => {
//     const result = v.genre.reduce((a, c) => a + c);
//     console.log(result);
//   });
// };

const makeMsgAlign = (msg: string, align: "center" | "start" | "end") => {
  const span = document.createElement("span");
  span.innerText = msg;
  span.style.textAlign = align;
  return span;
};

makeMsgAlign("집에 가고 싶다", "center");

//아이스크림 타입

type iceCream = {
  img: string;
  menu: dessert;
  subTitle: engName;
  Title: korName;
  info: string;
  sourceList: source[];
  nutrientList: nutrient;
};

type engName = "Polar Bear Dip" | "메롱 메론" | "Shooting Star in Wonderland";

type korName = "북극곰 폴라베어" | "메롱 메론" | "이상한 나라의 슈팅스타";

type dessert = "ICECREAM" | "GELLATTO" | "COOKIE";

type source =
  | "민트"
  | "우유"
  | "아몬드"
  | "멜론"
  | "블루베리"
  | "딸기"
  | "팝핑 캔디";

type nutrient = {
  "1회 제공량": number;
  "열량(kcal)": number;
  "당류(g)": number;
  "단백질(g)": number;
  "포화지방(g)": number;
  "나트륨(mg)": number;
  "알레르기 성분": string[];
};

const polar: iceCream = {
  img: "이미지",
  menu: "ICECREAM",
  subTitle: "Polar Bear Dip",
  Title: "북극곰 폴라베어",
  info: "폴라베어처럼 쿨~한 민트 아이스크림 크런치가 쏙쏙!",
  sourceList: ["민트", "우유"],
  nutrientList: {
    "1회 제공량": 115,
    "열량(kcal)": 280,
    "당류(g)": 23,
    "단백질(g)": 3,
    "포화지방(g)": 12,
    "나트륨(mg)": 69,
    "알레르기 성분": ["우유", "대두"],
  },
};

// console.log(polar);
