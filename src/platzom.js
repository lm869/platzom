export default function platzom(str) {
	let translation = str

	// Si la palabra es un palindromo
	//ninguna regla cuenta y se devuelve la misma palabra 
	//intercalando mayusculas
	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str) {
		const length = str.length
		let translation = ''
		let capitalize = true
		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}

		return translation
	}

	if (str==reverse(str)) {
		return minMay(str)
	}

	//si la palabra termina en ar se le quitan los dos caracteres

	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0,-2)
	}

	// si la palabra inicia con z se añade "pe" al final

	if(str.toLowerCase().startsWith('z')){
		translation+="pe"
	}

	//Si la palabra traducida tiene mas de 10 letras se parte 
	//en la mitad y se separa con un guion

	let Lengt= translation.length
	if (Lengt>=10) {
		const firstHalf=  translation.slice(0,Math.round(Lengt/2))
		const secondHalf=  translation.slice(Math.round(Lengt/2))
		translation= `${firstHalf}-${secondHalf}`
	}

	

	return translation
}
