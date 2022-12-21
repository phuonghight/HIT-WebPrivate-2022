// Viết hàm chèn 1 chuỗi bất kỳ vào một chuỗi cho trước ở vị trí cụ thể
// Mặc định chèn ở vị trí đầu tiên.
export default function (main = "Phuong", insertStr = "", index = 0) {
  return main.slice(0, index) + insertStr + main.slice(index);
}
