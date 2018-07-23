export function shuffleArray(array) {
  let tempArray = array;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
  }
  return tempArray;
}

export function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
