const harmlessRansomNote = (noteText, magazineText) => {
  const noteArr = noteText.split(' ');
  const magArr = magazineText.split(' ');
  const magObj = {};

  magArr.forEach(word => magObj[word] ? magObj[word]++ : magObj[word] = 1);

  let noteIsPossible = true;
  noteArr.forEach(word => {
    if (magObj[word]) {
      magObj[word]--;
      if (magObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });
  console.log(noteIsPossible);
  return noteIsPossible;
}

harmlessRansomNote("this magazine is the text false", "this is all the magazine text in the magazine");