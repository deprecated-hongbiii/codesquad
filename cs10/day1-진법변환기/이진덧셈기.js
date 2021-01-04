// -------------------------------● 미션 1 ●-------------------------------
// 출력은 [carry, sum] 순서

// XOR
// 두 입력이 다른 값일 때 true (1)
const xor = (bitA, bitB) => {
  return (bitA != bitB ? true : false)
}
// AND
// 두 입력이 모두 true일 때 true (1)
const and = (bitA, bitB) => {
  return (bitA == true && bitB == true ? true : false)
}

function halfAdder(bitA, bitB) {
  const carry = and(bitA, bitB);
  const sum = xor(bitA, bitB);
  return [carry, sum];
}

function fullAdder(bitA, bitB, inputCarry) {
  const getCarry = (bitA, bitB, inputCarry) => {
    const temp1 = inputCarry;
    const temp2 = xor(bitA, bitB);
    const temp3 = and(bitA, bitB);
    return and(temp1, temp2) || temp3
  }
  const carry = getCarry(bitA, bitB, inputCarry);
  const sum = xor(xor(bitA, bitB), inputCarry);
  return [carry, sum];
}

// -------------------------------● 미션 1 실행부 ●-------------------------------
// console.log(halfAdder(1, 1));
console.log(fullAdder(1,0,1));

// -------------------------------● 미션 2 ●-------------------------------

const byteCalculator = (byteA, byteB) => {
  const length = byteA.length;
  let carry = false;
  let answer = [];
  for(let i = 0; i < length; i++) {
    if(carry === false) {
      const temp = halfAdder(byteA[i], byteB[i]);
      carry = temp[0];
      answer.push(temp[1]);
      continue;
    }
    const temp = fullAdder(byteA[i], byteB[i], carry);
    carry = temp[0];
    answer.push(temp[1]);
  }
  answer.push(carry);
  return answer;
}
// 두 배열 길이가 다를 경우에는 짧은 배열 뒤에 0을 갖다붙이자. concat이나 ... 이용

// -------------------------------● 미션 2 실행부 ●-------------------------------
// case 1
// const byteA = [1, 1, 0, 1, 1, 0, 1, 0];
// const byteB = [1, 0, 1, 1, 0, 0, 1, 1];

// case 2
const byteA = [1, 1, 0, 0, 1, 0, 1, 0];
const byteB = [1, 1, 0, 1, 1, 0, 0, 1];

console.log(byteCalculator(byteA, byteB));