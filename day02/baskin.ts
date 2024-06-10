type Category = "ICECREAM" | "CAKE" | "COOKIE";
type Icon = { name: string } & PhotoURL;
type Allergies = "우유" | "대두" | "계란" | "땅콩" | "복숭아" | "밀";
type PhotoURL = { url: string };

type IcecreamProductInfo = {
  category: Category;
  engName: string;
  korName: string;
  description: string;
  mainIngredient: Icon[];
};

type NutritionInfo = {
  servings: number;
  kcal: number;
  sugars: number;
  protein: number;
  transfats: number;
  salts: number;
  allergy: Allergies[];
};

//결합 - 필수조건
type Icecream = PhotoURL & IcecreamProductInfo & NutritionInfo;

//포함 - 구분성 존재.
type IcecreamComposition = {
  IcecreamProductInfo: IcecreamProductInfo;
  NutritionInfo: NutritionInfo;
  PhotoURL: PhotoURL;
};

// const polarBear:Icecream={} - 위에서 견고하게 작업했기 때문에 오류 발생할 일 없음.

const makeIcecreamJumboTron = (data: Icecream) => {
  `<div>${data.url}</div>`;
  //아래처럼 제작해서 뿌려줄수도 있음
};
