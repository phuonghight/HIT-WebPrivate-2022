export default function (input = 279) {
  // const str = input.toString();
  const str = `${input}`;
  let count = 0;
  for (const key of str) {
    // +key % 2 === 0 || count++;
    +key % 2 !== 0 && count++;
  }
  return count;
}
