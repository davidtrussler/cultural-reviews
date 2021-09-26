const AppHeader = require('./components/header');
const AppMain = require('./components/main');
const AppFooter = require('./components/footer');
const {fetchData} = require('./db/index');

let page = '';

const createSSRApp = function(url) {
	// let title = '404';

	if (url.indexOf('/review/') > -1) {
		// title = 'Review';
		page = 'review';
	} else if (url === '/') {
		// title = 'Home';
		page = 'home';
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
				<main>${AppMain.getHtml(page)}</main>
				<footer>${AppFooter.getHtml()}</footer>
			</body>
		</html>
	`

	return html
}

exports.createSSRApp = createSSRApp
exports.buildMarkup = buildMarkup
