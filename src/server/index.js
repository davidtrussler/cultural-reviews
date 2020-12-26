const vue = require('vue');
const renderer = require('@vue/server-renderer'); 
const express = require('express'); 
const server = express(); 
const port = process.env.PORT || 4000; 

server.get('*', (req, res) => {
	const app = vue.createSSRApp({
	template: `
		<header>header</header>
		<main>main</main>
		<footer>footer</footer>
	`
	}); 

	renderer.renderToString(app).then(markup => {
		res.end(`
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
		`)
	}).catch(err => {
		console.error(err)
	}); 
}); 

server.listen(port, () => {
	console.log(`Server is listening on port: ${port}`)
}); 
