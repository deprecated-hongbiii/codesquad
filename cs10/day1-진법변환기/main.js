import { xor, and, halfAdder, fullAdder, byteAdder } from "../day1-진법변환기/이진덧셈기.js"
import { dec2bin, bin2dec } from "../day1-진법변환기/진법변환기.js"

// 10진수 -> 2진수 변환, 2진수끼리 덧셈 -> 10진수로 변환해서 출력

const adder = (decA, decB) => {
  const binA = dec2bin(decA);
  const binB = dec2bin(decB);
  console.log('binA', binA);
  console.log('binB', binB);
  const resultOfAdd = byteAdder(binA, binB);
  return bin2dec(resultOfAdd);
}

// -------------------------------● 실행 ●-------------------------------

console.log('실행 결과', adder(10, 20));