type Juice = {
  name: string;
  kcal: number;
};

type Carbonated = {
  gas: number;
  color: string;
};

//Hybrid Type
type softDrink = Juice & Carbonated;
// const coke:softDrink={}

interface Fruit {
  name: string;
  kcal: number;
}

interface TropicalFruit extends Fruit {
  sugarLevel: number;
}

const Mango: TropicalFruit = {
  name: "망고",
  kcal: 100,
  sugarLevel: 5,
};
