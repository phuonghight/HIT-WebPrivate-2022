//Bài 2
//cho object

const obj = {
  name: "Hưng",
  age: 20,
  email: "dth27902@gamil.com",
};
export const output = [];

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
