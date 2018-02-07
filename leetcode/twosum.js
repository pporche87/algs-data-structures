// function twoSum(nums, target) {
//   const hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];

//     if (hash[num] !== undefined) {
//       console.log([hash[num], i])
//       return [hash[num], i];
//     } else {
//       hash[target - num] = i;
//     }
//   }
  
//   return [];
// }

const nums = [2,7,11,15];
const target = 9;

// const twoSum = (nums, target) => {
//   const hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     if (hash[num] !== undefined) {
//       console.log([hash[num], i])
//       return [hash[num], i];
//     } else {
//       hash[target - num] = i;
//     }
//     // hash[num] = i;
//   }

//   return [];
// }

const twoSum = (nums, target) => {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    num = nums[i];
    if (hash[num] !== undefined) {
      console.log([hash[num], i]);
      return [hash[num], i];
    } else {
      hash[target - num] = i;
    }
  }

  return [];
}

twoSum(nums, target);