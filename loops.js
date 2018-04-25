function forLoop(array) {
  for(i=0; i<25; i++) {
    if(i===0) {
      array.push("I am a strange loop.");
      console.log(array[i-1]);
    }else if(i===1) {
      array.push("I am 1 strange loop.");
      console.log(array[i-1]);
    }else {
      array.push("I am " + i + " strange loops.");
      console.log(array[i-1]);
      return array;
    }
  }
}
let anyArray = [];
forLoop(anyArray);