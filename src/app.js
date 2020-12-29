const Vue = require('vue'); 
const AppHeader = require('./components/header'); 
const AppMain = require('./components/main'); 
const AppFooter = require('./components/footer'); 

module.exports = function createSSRApp(url) {
	let title = 'Home'; 

	if (url == '/review') {
		title = 'Review'; 
	}

	let pageTitle = title.toLowerCase(); 

	return Vue.createSSRApp({
		components: {
			'app-header': AppHeader, 
			'app-main': AppMain, 
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
					<app-main page-title="${pageTitle}"></app-main>
					<app-footer></app-footer>
				</body>
			</html>
		`
	})
}
