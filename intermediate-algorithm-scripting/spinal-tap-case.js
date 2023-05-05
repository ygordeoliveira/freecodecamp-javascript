function spinalCase(str) {
    let words = str.split((/\s|_|(?=[A-Z])/));
    let phrases = words.join("-");
    let transformationOfSentencesToMinuscules = phrases.toLowerCase();
    return transformationOfSentencesToMinuscules;
  }

spinalCase("thisIsSpinalTap");