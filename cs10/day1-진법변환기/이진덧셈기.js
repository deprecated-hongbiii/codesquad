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

// -------------------------------● 미션 2 ●-------------------------------

const byteAdder = (byteA, byteB) => {
  // 두 배열의 길이 맞춰주기
  const lengthA = byteA.length;
  const lengthB = byteB.length;
  const difference = Math.abs(lengthA - lengthB);
  let length;
  if(lengthA > lengthB) {
    byteB = [...byteB, ...Array(difference).fill(0)]
    length = lengthA;
  }
  if(lengthA < lengthB) {
    byteA = [...byteA, ...Array(difference).fill(0)]
    length = lengthB;
  }
  
  // byteAdder 시작
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

export { xor, and, halfAdder, fullAdder, byteAdder }