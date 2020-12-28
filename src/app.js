const Vue = require('vue'); 
const AppHeader = require('./components/header'); 

module.exports = function createSSRApp(url) {
	let title = 'Home'; 

	if (url == '/review') {
		title = 'Review'; 
	}

	return Vue.createSSRApp({
		components: {
			'app-header': AppHeader
		}, 
		template: `
			<!DOCTYPE html>
			<html lang="en-GB">
				<head>
					<title>${title}</title>
				</head>

				<body>
					<app-header></app-header>
					<main>main</main>
					<footer>footer</footer>
				</body>
			</html>
		`
	})
}
