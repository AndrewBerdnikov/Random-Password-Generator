const resultEl = document.getElementById('password__generation')
const lengthEl = document.getElementById('password__length')
const uppercaseEl = document.getElementById('uppercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('button')
const lowercaseEL = document.getElementById('lowercase')
//const resultEL = document.getElementById('password__generation'); - copy button


const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
	const length = +lengthEl.value
	const hasLower = lowercaseEL.checked
	const hasUpper = uppercaseEl.checked
	const hasNumber = numbersEl.checked
	const hasSymbols = symbolsEl.checked
	
	resultEl.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length)
})

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = ''
	
	const typesCount = lower + upper + number + symbol
	
	console.log('typesCount ', typesCount)
	
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
	
	if(typesCount === 0 ){
		return ''
	}
	
	for(let i = 0; i < length; i += typesCount){
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0]
			console.log(funcName)
			
			generatedPassword += randomFunc[funcName]()
		})
	}
	
	const finalPassword = generatedPassword.slice(0, length)
	
	return finalPassword
}


// Условия

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)]
}




document.querySelector('#password__length').addEventListener('input',() => {
	let data = document.querySelector('#password__length').value
	document.querySelector('.out-5').innerHTML = data
})
