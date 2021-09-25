const AppHeader = require('./components/header');
// const AppMain = require('./components/main');
// const AppMainHome = require('./components/main_home');
// const AppMainReview = require('./components/main_review');
const AppFooter = require('./components/footer');
const {fetchData} = require('./db/index');

const createSSRApp = function(url) {
	let title = '404';
	// let appMain = AppMain;

	if (url.indexOf('/review/') > -1) {
		title = 'Review'; 
		// appMain = AppMainReview;
	} else if (url === '/') {
		title = 'Home';
		// appMain = AppMainHome;
	}

	return new Promise((resolve, reject) => {
		fetchData(url).then(data => {
			resolve(buildMarkup(data));
		});
	}).catch(reject => {
		console.log(reject);
	})
}

const buildMarkup = function(data) {
	let html = `
		<html lang="en-GB">
			<head>
				<title>The title</title>
				<meta charset="utf-8"/>
			</head>

			<body>
				<header>${AppHeader.getHtml()}</header>
				<main>the main section</main>
				<footer>${AppFooter.getHtml()}</footer>
			</body>
		</html>
	`

	return html
}

exports.createSSRApp = createSSRApp
exports.buildMarkup = buildMarkup
