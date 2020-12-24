const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 4000; 

// Fired every time the server receives a request
app.use(handleRender); 

function generateMarkup(req) {
	return `
		<header>header</header>
		<main>main</main>
		<footer>footer</footer>
	`
}

function handleRender(req, res) {
  const markup = generateMarkup(req); 

	res.send(renderFullPage(markup)); 
}; 

function renderFullPage(markup) {
	return `
		<!doctype html>
		<html lang="en-GB">
			<head>
				<title>Title</title>
				<meta charset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
			</head>
			<body>
			  ${markup}
			</body>
		</html>
	`
}; 

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
