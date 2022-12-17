//Bài 1
// if else for
//viết hàm isPrime kiểm tra số nguyên tố

export default function isPrime(num) {
  if (num < 2 || num % 2 == 0) return false;
  else if (num == 2) return true;
  else {
    for (let i = 3; i < Math.sqrt(num); ++i) {
      if (n % i == 0) return false;
    }
  }
  return true;
}
