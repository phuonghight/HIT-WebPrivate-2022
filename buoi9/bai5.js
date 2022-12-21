//viết hàm đưa string về array
var str1 = "Hưng, Cương, Tài";
function strToArr(key) {
  return str1.split(key);
}

// viết hàm getStr lấy ra tên trong chuỗi str1
function getStr(str = str1) {
  return strToArr(", ")[1];
}

//từ chuỗi str2 viết hàm getUpperStr và getLowerStr lấy ra chuỗi viết hoa và viết thường
var str2 = "    Dinh Tan Hung      ";
function getUpperStr(str = str2) {
  return str.trim().toUpperCase();
}
function getLowerStr(str = str2) {
  return str.trim().toLowerCase();
}

export { strToArr, getStr, getUpperStr, getLowerStr };
