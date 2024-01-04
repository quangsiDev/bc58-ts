// var name:type=value

// basic type

var username: string = "alice";
username = "bob";
// username = 123232; error
var num: number = 100;
var isLogin: boolean = false;
var isMarried = null;
var is_married = undefined;

// vừa muốn lưu number, vừa lưu được string  => union type

var age: number | string;
age = 2;
age = "2";

// reference type ~ array, object

var numArr: number[] = [2, 3, 4];
var numArr2: Array<number> = [5, 4, 9];
numArr.push(20);
// numArr.push("alice");
var isLogins: boolean[] = [true, false, false, true];
var names: Array<string> = ["alice", "bob"];

// interface ~ mô tả object

interface Product {
  name: string;
  price: number;
  review?: string;
}

var sp1: Product = {
  name: "tivi sony",
  price: 20,
};

var sp2: Product = {
  name: "laptop",
  price: 10,
};
var sp3: Product = {
  name: "iphone",
  price: 5,
  review: "Good",
};

// function type

function sayHello(name: string): string {
  return ` Hello, my name is ${name}`;
}
sayHello("tomy");

let getSum = (num1: number, num2: number): number => {
  return num1 + num2;
};
// void ~ không có giá trị return
let handlePlus = (): void => {
  console.log("plus");
};

//  any type ~ có thể chứa mọi loại dữ liệu

var value: any = 100;
value = "100";
value = {
  num: 100,
};
value = [10, 20];

// type alias ~ ko update dc
type StringOrNumber = number | string;

var salary: StringOrNumber = "2 trịu";
salary = 2000000;

type TodoObject = {
  title: string;
  id: number;
};
var todo1: TodoObject = {
  title: "Làm dự án cuối khoá",
  id: 2,
};
// interface ~ có thể update
interface Product {
  rating?: number;
}
var sp4: Product = {
  name: "ipad",
  price: 2,
  rating: 5,
  review: "Not bad",
};
// git alias

// enum type

enum ProduceType {
  xeBus = 0,
  xeDap = 1,
  xeMay = 2,
  xeOto = 3,
}

console.log(ProduceType.xeMay);
// ProduceType.xeBus = 2;
