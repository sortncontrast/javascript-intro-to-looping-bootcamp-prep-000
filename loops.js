function forLoop(Array) {
  for(i=0; i<25; i++) {
    if(i===0) {
      Array.push("I am a strange loop.");
    }else if(i===1) {
      Array.push("I am 1 strange loop.");
    }else {
      Array.push("I am \i\ strange loops.");
    }
  }
}