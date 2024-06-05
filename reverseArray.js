function reverseArray(a) {
   const newArray = [];
   for (const value of a) {
        newArray.unshift(value);
    
   }
    return newArray;

}

console.log(reverseArray([1, 2, 3, 4, 5]));