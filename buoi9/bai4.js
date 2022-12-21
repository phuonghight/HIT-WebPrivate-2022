export default function (input = 122) {
  const str = input.toString();
  let count = 0;
  for (const key of str) {
    +key % 2 !== 0 && count++;
  }
  return count;
}
