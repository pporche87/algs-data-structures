const permutation = str => {
  const results = {};

  const recurse = (word, remainder) => {
    if (remainder.length === 0) {
      return results[word] = true;
    }

    for (let i = 0; i < remainder.length; i++) {
      recurse(word + remainder[i], remainder.substring(0, i) + remainder.substring(i + 1));
    }
  }

  recurse('', str);
  console.log(results)
  return Object.keys(results)
}

console.log(permutation('abc'));