function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((m,n)=>m+=n) + arr2.reduce((m,n)=> m+=n); 
    }
console.log(arrayPlusArray([1,2,3],[10,20,5]));