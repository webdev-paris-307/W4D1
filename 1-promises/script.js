/**
 * At first, Callbacks were the norm
 */

function first(callback) {
	// console.log("I am before the second log")
	callback()
}

function second() {
	console.log("I am after first")
}

first(() => {
	console.log("1")
	first(() => {
		console.log("2")
		first(() => {
			console.log("3")
		})
	})
})

const arr = [1, 2, 3]

// arr.forEach(() => {})

/**
 * Promise syntax
 */

const myPromise = new Promise((resolve, reject) => {
	// setTimeout(() => {
	// 	// throw Error("Oops")
	// 	if (Math.random() > 0.5) {
	// 		return resolve("Promise resolved !")
	// 	} else {
	// 		reject("Promise rejected")
	// 	}
	// }, 1000)
})

// myPromise
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})

async function sleep(delay) {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve("All good")
		}, delay)
	})
}

// async function getJokes() {
// 	const arrayOfJokes = []
// 	for (let i = 0; i < 150; i++) {
// 		try {
// 			const response = await fetch("https://api.chucknorris.io/jokes/random")
// 			const data = await response.json()
// 			// console.log(response)
// 			console.log(data)
// 			await sleep(500)
// 		} catch (error) {
// 			console.log(`Error: `, error)
// 		}
// 	}
// }
// getJokes()

// fetch("https://pokeapi.co/api/v2/pokemon/1")
// 	.then((data) => {
// 		// console.log(data.name)
// 		return fetch("https://pokeapi.co/api/v2/pokemon/2").then((data) =>
// 			data.json()
// 		)
// 	})
// 	.then((data) => {
// 		console.log(data.name)
// 		return fetch("https://pokeapi.co/api/v2/pokemon/3").then((data) =>
// 			data.json()
// 		)
// 	})
// 	.then((data) => {
// 		console.log(data.name)
// 		return fetch("https://pokeapi.co/api/v2/pokemon/4").then((data) =>
// 			data.json()
// 		)
// 	})
// 	.then((data) => {
// 		console.log(data.name)
// 		return fetch("https://pokeapi.co/api/v2/pokemon/5").then((data) =>
// 			data.json()
// 		)
// 	})
// 	.then((data) => {
// 		console.log(data.name)
// 		return fetch("https://pokeapi.co/api/v2/pokemon/6").then((data) =>
// 			data.json()
// 		)
// 	})
// 	.then((data) => {
// 		console.log(data.name)
// 		return fetch("https://pokeapi.co/api/v2/pokemon/7").then((data) =>
// 			data.json()
// 		)
// 	})
// 	.catch((error) => console.log(error.message))

const arrayOfPromises = []
for (let i = 1; i < 20; i++) {
	arrayOfPromises.push(fetch("https://pokeapi.co/api/v2/pokemon/" + i))
}

console.log(arrayOfPromises)
Promise.all(arrayOfPromises).then((data) => {
	console.log(data)
})

// 1: 1s
// 2: 3s
// 3: 1s
