const getMean = array => {
  return (array.reduce((acc, i) => acc + i) / array.length).toFixed(2);
}

const getMedian = array => {
  array.sort();
  
  if (array.length % 2 !== 0) {
    return array[Math.floor(array.length / 2)];
  } else {
    return (array[(array.length / 2) -1] + array[array.length / 2]) / 2;
  }
}

const getMode = array => {
  const modeObj = {};

  for (let num of array) {
    modeObj[num] ? modeObj[num]++ : modeObj[num] = 1;
  }

  let maxFreq = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFreq) {
      modes = [num];
      maxFreq = modeObj[num];
    } else if (modeObj[num] === maxFreq) {
      modes.push(num);
    }

    if (modes.length === Object.keys(modeObj).length) {
      modes = [];
    }
  }
  return modes;
}

const meanMedianMode = array => {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
}

console.log(JSON.stringify(meanMedianMode([1,2,3,4,5,5]), null, 2));
console.log(JSON.stringify(meanMedianMode([1,2,4,3,5,6,7,9,9,1]), null, 2));
console.log(JSON.stringify(meanMedianMode([3,4,2,3,6,4,1]), null, 2));