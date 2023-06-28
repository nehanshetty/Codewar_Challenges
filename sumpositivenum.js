function positiveSum(arr) {
    let sum=0;
    arr.forEach((item)=>{
      (item>0)? sum+=item : sum
    })
    return sum;
  }

  console.log(positiveSum([10,-9,20,-9]));