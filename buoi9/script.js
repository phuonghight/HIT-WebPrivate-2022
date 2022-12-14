const $ = document.querySelector.bind(document);

const day = $(".day");
const hour = $(".hour");
const min = $(".min");
const sec = $(".sec");
// const milisec = $("milisec");

const newYear = new Date("01-22-2023");

setInterval(() => {
  const timePassed = newYear - new Date();
  const d = Math.trunc(timePassed / (1000 * 60 * 60 * 24));
  const h = Math.trunc(timePassed / (1000 * 60 * 60)) - d * 24;
  const m = Math.trunc(timePassed / (1000 * 60)) - d * 24 * 60 - h * 60;
  const s =
    Math.trunc(timePassed / 1000) - d * 24 * 60 * 60 - h * 60 * 60 - m * 60;
  day.textContent = d + " Ngày";
  hour.textContent = h + " Giờ";
  min.textContent = m + " Phút";
  sec.textContent = s + " Giây";
}, 1000);

//Bài 1
// if else for
//viết hàm isPrime kiểm tra số nguyên tố

console.log(isPrime(7)); //output: true;
console.log(isPrime(10)); //output: false;

function isPrime(num) {
  if (num < 2 || num % 2 == 0) return false;
  else if (num == 2) return true;
  else {
    for (let i = 3; i < Math.sqrt(num); ++i) {
      if (n % i == 0) return false;
    }
  }
  return true;
}

//Bài 2
//cho object

const obj = {
  name: "Hưng",
  age: 20,
  email: "dth27902@gamil.com",
};
const output = [];

//viết hàm run xử lý sao cho ra kết quả là một mảng như output dưới đây
//gợi ý: khởi tạo 1 array

// console.log(run(obj));
// Output:
// [
//      "name: Hưng",
//      "age: 20",
//      "emai: dth27902@gmail.com"
// ]
for (const key in obj) {
  output.push(`${key}: ${obj[key]}`);
}
console.log(output);

//Bài 3
// //Cho 1 mảng dưới đây
var courses = ["C++", "Java", "Javascript"];

// //viết hàm addCourse thêm 1 phần tử vào mảng courses

// addCourse(courses, "Go");
// console.log(courses); //output: [ 'C++', 'Java', 'Javascript', 'Go' ]

// //viết hàm getFirstElement lấy phần tử đầu tiên

// var firstElement = getFirstElement(courses);
// console.log(firstElement); //output: C++;

// //viết hàm joinArr nối các phần tử thành một chuỗi

// var result1 = joinArr(courses, ",");
// var result2 = joinArr(courses, " * ");

// console.log(result1); //output: C++,Java,Javascript,Go
// console.log(result2); //output: C++ * Java * Javascript * Go
function addCourse(arr, item) {
  arr.push(item);
}
function getFirstElement(arr) {
  return arr.shift();
}

addCourse(courses, "Go");
console.log(courses); //output: [ 'C++', 'Java', 'Javascript', 'Go' ]

var firstElement = getFirstElement(courses);
console.log(firstElement); //output: C++;
