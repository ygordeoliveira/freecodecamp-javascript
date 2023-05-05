function convertHTML(str) {
    let entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">" : "&gt;",
        "'" : "&apos;",
        '"': "&quot;"
    }
  
    for (let enti in entities) {
        for (let caracters of str) {
            if (caracters === enti) {
                str = str.replace(caracters, entities[enti]);
            } 
        }
    }
    return str;
}
  
convertHTML("Dolce & Gabbana");