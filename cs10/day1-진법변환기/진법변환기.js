// -------------------------------● 미션 1 ●-------------------------------
// 0 이상 256 미만의 10진수 정수를 2진수 배열로 변환하는 함수 구현하기
// 사칙연산만으로 변환한다.

const dec2bin = (decimal) => {
  if(decimal == 0) return [false]
  if(decimal == 1) return [true]

  let binary = [];
  while(decimal !== 1) {
    let remainder = decimal % 2;
    let quotient = (decimal - remainder) / 2;
    binary.push(remainder);
    decimal = quotient;
    if(quotient === 1) binary.push(1);
  }
  return binary.map(e => e == 1 ? true : false);
}
// -------------------------------● 미션 1 실행부 ●-------------------------------
console.log(dec2bin(10));

// -------------------------------● 미션 2 ●-------------------------------
// [Bool] 2진수 배열을 정수형 10진수로 변환하는 함수 구현하기
// 사칙연산만으로 변환한다.

const bin2dec = (binary) => {
  let numBinary = binary.map(e => e == true ? 1 : 0);
  const length = binary.length;
  let sum = 0;
  for(let i = 0; i < length; i++) {
    let n = 0;
    let temp = 1;
    while(n < i) {
      temp *= 2;
      n++
    }
    sum += temp * numBinary[i];
  }
  return sum;
}

// -------------------------------● 미션 2 실행부 ●-------------------------------
const binaryArr = [true, false, true, false, true]; // 10101(2)  10진법으로는 

console.log(bin2dec([true, true, false, true, true]));
console.log()