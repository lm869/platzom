'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;

	// Si la palabra es un palindromo
	//ninguna regla cuenta y se devuelve la misma palabra 
	//intercalando mayusculas
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var translation = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}

		return translation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	//si la palabra termina en ar se le quitan los dos caracteres

	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}

	// si la palabra inicia con z se añade "pe" al final

	if (str.toLowerCase().startsWith('z')) {
		translation += "pe";
	}

	//Si la palabra traducida tiene mas de 10 letras se parte 
	//en la mitad y se separa con un guion

	var Lengt = translation.length;
	if (Lengt >= 10) {
		var firstHalf = translation.slice(0, Math.round(Lengt / 2));
		var secondHalf = translation.slice(Math.round(Lengt / 2));
		translation = firstHalf + '-' + secondHalf;
	}

	return translation;
}