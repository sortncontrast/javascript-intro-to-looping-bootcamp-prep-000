for (let i = 0; i < 25; i++) {
  let makeArray = [];
  if(i === 0) {
    makeArray.push("I am a strange loop.");
  }else if(i === 1) {
    makeArray.push("I am 1 strange loop.");
  } else {
    makeArray.push("I am \i\ strange loops.");
  }
}
console.log(makeArray);