function getCount(str) {
    let count = 0;
    let a= str.split("");
    a.forEach((item)=>{
      if (item == 'a' || item =='e' || item =='i' || item == 'o' || item == 'u'){
        vowelsCount += 1;
      }
    })
    return count;
  }

  console.log(getCount("abracadabra"));