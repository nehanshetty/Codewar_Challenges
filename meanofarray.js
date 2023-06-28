function getAverage(marks){
  let sum=0;
  marks.forEach((item)=>{
    sum +=item;
  }
  )
  return Math.floor(sum/marks.length);
}

console.log(getAverage([10,20]));