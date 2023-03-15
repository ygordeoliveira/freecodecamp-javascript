function destroyer(arr) {
    let remainingElements = [];
    let originalElements = Object.values(arguments)[0];
    let elementsToRemove = Object.values(arguments).splice(1);
  
    
    originalElements.forEach(elements => {
        if (!elementsToRemove.includes(elements)) {
            remainingElements.push(elements);
        }
    });
    return remainingElements;
  }
                          
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);