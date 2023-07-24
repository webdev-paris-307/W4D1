const buttonElement = document.getElementById("joke-fetcher")
const text = document.getElementById("joke")

// buttonElement.addEventListener("click", () => {
// 	fetch("https://api.chucknorris.io/jokes/random")
// 		.then((response) => {
// 			console.log(response)
// 			response
// 				.json()
// 				.then((actualData) => {
// 					console.log(actualData)
// 					text.textContent = actualData.value
// 				})
// 				.catch((error) => console.error(error))
// 		})
// 		.catch((error) => console.error(error.message))
// 		.finally(() => console.log("All request are made"))
// 	console.log("Hello")
// })

buttonElement.addEventListener("click", fetchAJoke)

async function fetchAJoke() {
	try {
		const rawResponse = await fetch("https://api.chucknorris.io/jokes/random")
		// const textContent = await rawResponse.text()
		// console.log(textContent)
		const jsonContent = await rawResponse.json()
		if (jsonContent.value.length > 30) {
			fetchAJoke()
		}
		text.textContent = jsonContent.value
	} catch (error) {
		console.log(`Error happening: `, error.message)
	} finally {
		console.log("Everything has been done")
	}
}
