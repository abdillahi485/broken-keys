// Good Luck 💪🏾

function brokenKeys(correctPhrase, typedPhrase) {
    const brokenKeys = [];
  
    // Convert both phrases to lowercase for case-insensitive comparison
    const correctPhraseLower = correctPhrase.toLowerCase();
    const typedPhraseLower = typedPhrase.toLowerCase();
  
    // Iterate through each character in the correct phrase
    for (let i = 0; i < correctPhraseLower.length; i++) {
      const char = correctPhraseLower.charAt(i);
  
      // Check if the character is a letter and if it's not present in the typed phrase
      if (char.match(/[a-z]/i) && !typedPhraseLower.includes(char)) {
        // Add the broken key to the list
        brokenKeys.push(char);
      }
    }
  
    return brokenKeys;
  }

  console.log(brokenKeys("fikrcamp bootcamp", "fikrcomp boorcamp") )
  console.log(brokenKeys("good night", "gppd night"))
