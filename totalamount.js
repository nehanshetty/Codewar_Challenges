function points(games) {
    let sum =0;
    for(let i=0; i<games.length; i++){
      let val = games[i];
      let parts = val.split(":");
      if(parts[0]>parts[1]){
        sum+=3;
      }else if(parts[0]===parts[1]){
        sum+=1;
      }
    }
     return sum;
    }

    console.log(points(["3:1","6:2","5:3"]));