// function plusOne(digits: number[]): number[] {
//     const number = BigInt(digits.join(''))
//     const result = number + BigInt(1)
//     return result.toString().split('').map(el => parseInt(el))
// };

function plusOne(digits: number[]): number[] {
  let shouldCarry = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    const iElement = digits[i];

    if (iElement != 9) {
      digits[i] = iElement + 1;
      shouldCarry = false;
      break;
    } else {
      digits[i] = 0;
      shouldCarry = true;
    }
  }

  if (shouldCarry) {
    return [1, ...digits];
  } else {
    return digits;
  }
}
