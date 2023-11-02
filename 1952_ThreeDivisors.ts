function isThree(n: number): boolean {
  let divisorsCount = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i) {
      continue;
    } else {
      divisorsCount++;
    }
  }
  return divisorsCount === 3;
}



// best runtime
// function isThree(n: number): boolean {
//     const numbers: number[] = [];
//     for (let i:number = 0; i<10000; i++) {
//         if (n % i == 0) {
//             numbers.push(i)
//         }
//     }
//     if (numbers.length == 3) {
//         return true;
//     } else {
//         return false;
//     }
// };


// best memory
// function isThree(n: number): boolean {
//   if (n <= 2) {
//     return false;
//   }
//   let count = 2;
//   for (let i = 2; i < n / 2 + 1; i++) {
//     if (n % i === 0) {
//       if (++count > 3) {
//         return false;
//       }
//     }
//   }
//   return count === 3;
// }