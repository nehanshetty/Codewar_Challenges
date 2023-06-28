class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = args[0];
      for(let i=1; i<args.length;i++){
        smallest = smallest < args[i]? smallest :args[i];
      }
      return smallest;
    }
  }

let a = new SmallestIntegerFinder();
console.log(a.findSmallestInt([10,20,3,35,6,53]));