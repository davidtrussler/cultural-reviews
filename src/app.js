const Vue = require('vue'); 
const AppHeader = require('./components/header'); 
const AppMainHome = require('./components/main_home'); 
const AppMain = require('./components/main'); 
const AppFooter = require('./components/footer'); 
const createSSRApp = function(url) {
	let title = '404';
	let appMain = AppMain; 

	if (url === '/review') {
		title = 'Review'; 
	} else if (url === '/') {
		title = 'Home';
		appMain = AppMainHome; 
	}

	let pageTitle = title.toLowerCase(); 

	return Vue.createApp({
		components: {
			'app-header': AppHeader, 
			'app-main': appMain, 
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

module.exports = createSSRApp; 
