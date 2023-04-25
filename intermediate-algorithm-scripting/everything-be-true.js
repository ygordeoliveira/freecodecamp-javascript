function truthCheck(collection, pre) {
    let propertyValue = [];

    for (let i = 0; i < collection.length; i++) {
        propertyValue.push(collection[i][pre]);
    }
    return propertyValue.every(value => !!value);
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");