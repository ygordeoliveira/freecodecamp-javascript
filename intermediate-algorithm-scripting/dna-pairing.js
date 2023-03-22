function pairElement(bases) {
    let complementaryBase = {
      A: "T", 
      T: "A",
      C: "G", 
      G: "C"
    }
  
    let pairs = [];
  
    for (let base of bases) {
        pairs.push([base, complementaryBase[base]]);
    }
    return pairs; 
}
  
pairElement("ATCGA");  