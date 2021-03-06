const Vue = require('vue'); 
const AppHeader = require('./components/header'); 
const AppMain = require('./components/main'); 
const AppMainHome = require('./components/main_home'); 
const AppMainReview = require('./components/main_review'); 
const AppFooter = require('./components/footer'); 
const {fetchData} = require('./db/index');
const createSSRApp = function(url) {
	let title = '404';
	let appMain = AppMain; 

	if (url.indexOf('/review/') > -1) {
		title = 'Review'; 
		appMain = AppMainReview; 
	} else if (url === '/') {
		title = 'Home';
		appMain = AppMainHome; 
	}

	return new Promise((resolve, reject) => {
		fetchData(url).then(data => {
			const app = Vue.createApp({
				data() {
					return {reviewsData: data}; 
				}, 
				components: {
					'app-header': AppHeader, 
					'app-main': appMain, 
					'app-footer': AppFooter
				}, 
				template: `
					<html lang="en-GB">
						<head>
							<title>${title}</title>
							<meta charset="utf-8"/>
						</head>

						<body>
							<app-header></app-header>
							<app-main 
								v-bind:reviewsData=reviewsData
							></app-main>
							<app-footer></app-footer>
						</body>
					</html>
				`
			}); 

			resolve(app); 
		}); 
	}).catch(reject => {
		console.log(reject);
	})
}

module.exports = createSSRApp; 
