var caesarShift = function() {
    var amount = parseInt(document.getElementById('cname').value);
    var str = String(document.getElementById('cemail').value);
	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

    // All done!
    console.log(output);
    document.getElementById('cmessage').value = output;
	return output;

};




function CaesarDecryption() {
    var unshiftAmount = parseInt(document.getElementById('cname').value);
    var encryptedString = String(document.getElementById('cemail').value);
    var plainText = "";
    for(var i = 0; i < encryptedString.length; i++) {
        var encryptedCharacter = encryptedString.charCodeAt(i);
        if(encryptedCharacter >= 97 && encryptedCharacter <= 122) {
            plainText += String.fromCharCode((encryptedCharacter-97 - unshiftAmount + 26) %26 + 97 );
        } else if(encryptedCharacter >= 65 && encryptedCharacter <= 90) {
            plainText += String.fromCharCode((encryptedCharacter-65 - unshiftAmount + 26) %26 + 65 );
        } else {
            plainText += String.fromCharCode(plainCharacter);
        }
    }
    console.log(plainText);
    document.getElementById('cmessage').value = plainText;
    return plainText;
}