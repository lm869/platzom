
const expect =  require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
	
	it('si la palabra termina en ar se le quitan los dos caracteres', function () {
		const trans = platzom("Programar")
		expect(trans).to.equal("Program")
	})
	it('si la palabra inicia con z se añade "pe" al final', function () {
		const trans1 = platzom("Zorro")
		const trans2 = platzom("Zarpar")
		expect(trans1).to.equal("Zorrope")
		expect(trans2).to.equal("Zarppe")
	})	
	
	it('si la palabra traducida tiene mas de 10 letras se parte en la mitad y se separa con un guion', function () {
		const trans3 = platzom("abecedario")
		expect(trans3).to.equal("abece-dario")
	})	
	
	it('si la palabra es un palindromo ninguna regla cuenta y se devuelve la misma palabra intercalando mayusculas', function () {
		const trans4 = platzom("sometemos")
		expect(trans4).to.equal("SoMeTeMoS")
	})

})
