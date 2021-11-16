const AppHead = require('./components/head');
const AppHeader = require('./components/header');
const AppMain = require('./components/main');
const AppFooter = require('./components/footer');
const {fetchData} = require('./db/index');

let page = 'error';

const createSSRApp = function(url) {
	if (url.indexOf('/review/') > -1) {
		page = 'review';
	} else if (url === '/') {
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
			<head>${AppHead.getHtml(page)}</head>
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
