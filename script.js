function firstChar(text) {
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== ' ') {
      return inputString[i];
    }
  }
  return '';
}	
	
	

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
