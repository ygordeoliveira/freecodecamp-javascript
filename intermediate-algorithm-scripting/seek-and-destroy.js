function destroyer(arr) {
    let survivingElements = [];
    let battleField = Object.values(arguments)[0];
    let elementsToDestroy = Object.values(arguments).splice(1);
        
    battleField.forEach(positionOfElements => {
        if (elementsToDestroy.indexOf(positionOfElements) === -1) {
            survivingElements.push(positionOfElements);
        }
    });
    return survivingElements;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);