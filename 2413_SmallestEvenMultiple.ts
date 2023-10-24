function smallestEvenMultiple(n: number): number {
  if (n % 2) {
    return n * 2;
  } else {
    return n;
  }
}

//best runtime
// function smallestEvenMultiple(n: number): number {
//     return n % 2 === 0 ? n : n * 2;
// };

//best memory
// function smallestEvenMultiple(n: number): number {
//     return n % 2 == 0 ? n : n * 2;
// };