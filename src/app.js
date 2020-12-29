const Vue = require('vue'); 
const AppHeader = require('./components/header'); 
const AppFooter = require('./components/footer'); 

module.exports = function createSSRApp(url) {
	let title = 'Home'; 

	if (url == '/review') {
		title = 'Review'; 
	}

	return Vue.createSSRApp({
		components: {
			'app-header': AppHeader, 
			'app-footer': AppFooter
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
					<app-footer></app-footer>
				</body>
			</html>
		`
	})
}
