function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let total = 0;
    arrayOfSheep.forEach((item)=>{
      if(item == true)
      {
        total += 1; 
      }
    }
  )
    return total;
  }

  console.log(countSheeps([true, false, true, true, false, true, true]));