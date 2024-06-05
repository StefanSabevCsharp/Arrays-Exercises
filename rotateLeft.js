function rotateLeft(d, arr) {
   for (let i = 0; i < d; i++) {
      arr.push(arr.shift());
   }
    return arr;

}

rotateLeft(4, [1, 2, 3, 4, 5]); // [5, 1, 2, 3, 4]
console.log(rotateLeft(4, [1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]