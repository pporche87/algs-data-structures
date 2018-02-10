const nums = [2,7,11,15];
const target = 9;

const twoSum = (nums, target) => {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) {
      console.log([hash[nums[i]], i]);
      return [hash[nums[i]], i];
    } else {
      hash[target - nums[i]] = i;
    }
  }
  return [];
}

twoSum(nums, target);