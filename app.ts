// let numbers : number[] = [1, 2, 3, 4, 5];

// let fruits : string[] = ['apple', 'banana', 'orange'];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];

// for (let i = 0; i < mixedArray.length; i++) {
//   console.log(mixedArray[i]);
// }

// let infer = [1, 2, 3]; // 타입 추론

// for (let i = 0; i < infer.length; i++) {
//   console.log(infer[i]);
// }

// let readOnlyArray : ReadonlyArray<number> = [1, 2 ,3];

// 튜플 : 타입의 순서가 정해져있다

// let greeting : [number, string, boolean] = [1, 'hello', true];

// for (let i = 0; i < greeting.length; i++) {
//   console.log(greeting[i]);
// }

// Spread 연산자

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let combineArray = [...firstArray, ...secondArray];

for (let i = 0; i < combineArray.length; i++) {
  console.log(combineArray[i]);
}