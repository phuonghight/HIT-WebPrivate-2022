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

import isPrime from "./bai1.js";
import { output } from "./bai2.js";
import { addCourse, getFirstElement, joinArr } from "./bai3.js";

// Bai1
console.log(isPrime(7)); //output: true;
console.log(isPrime(10)); //output: false;

// Bai2
console.log(output);

// Bai3
var courses = ["C++", "Java", "Javascript"];
addCourse(courses, "Go");
console.log(courses); //output: [ 'C++', 'Java', 'Javascript', 'Go' ]

var firstElement = getFirstElement(courses);
console.log(firstElement); //output: C++;

var result1 = joinArr(courses, ",");
var result2 = joinArr(courses, " * ");

console.log(result1); //output: C++,Java,Javascript,Go
console.log(result2); //output: C++ * Java * Javascript * Go
