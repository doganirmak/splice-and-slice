function frankenSplice(arr1, arr2, n) {
    let copyArr2 = arr2.slice();
    for (let i = 0; i < arr1.length; i++){
      copyArr2.splice(n, 0, arr1[i])
      n++;
    }
     return copyArr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);