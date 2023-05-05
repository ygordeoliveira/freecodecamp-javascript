function diffArray(arr1, arr2) {
    const notMatchingItems = [];
    const itemsFromTheFirstArr = arr1;
    const itemsFromTheSecondArr = arr2;
  
    for (let i = 0; i < itemsFromTheFirstArr.length; i++) {
        if (itemsFromTheSecondArr.indexOf(itemsFromTheFirstArr[i]) === -1) {
            notMatchingItems.push(itemsFromTheFirstArr[i]);
        }
    }

    for (let j = 0; j < itemsFromTheSecondArr.length; j++) {
        if (itemsFromTheFirstArr.indexOf(itemsFromTheSecondArr[j]) === -1) {
            notMatchingItems.push(itemsFromTheSecondArr[j]);
        }
    }
    return notMatchingItems;
}
                        
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);