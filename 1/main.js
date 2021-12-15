
function matchSameCount(s1, s2) {
    let count = 0;
    const obj = s2.split("");
    for(let i of s1){
      let idx = obj.findIndex(s => s === i);
      if(idx >= 0){
        count++;
        obj.splice(idx, 1);
      }
    }
    return count;
  }



  console.log(matchSameCount("aabcc","adcaa"))

