var humanYearsCatYearsDogYears = function(humanYears) {
    let catsAge;
    let dogsAge;
    if(humanYears === 1)
    {
      catsAge = 15;
      dogsAge = 15;
    }else{
      catsAge = 24+(humanYears - 2)*4;
      dogsAge = 24+(humanYears - 2)*5;
    }
   
    return [humanYears,catsAge, dogsAge];
  }
console.log(humanYearsCatYearsDogYears(10));