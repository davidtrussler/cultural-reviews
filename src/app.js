const Vue = require('vue')

module.exports = function createSSRApp (url) {
	let title = 'Home'; 

	if (url == '/review') {
		title = 'Review'; 
	}

	return Vue.createSSRApp({
		template: `
			<!DOCTYPE html>
			<html lang="en-GB">
				<head>
					<title>${title}</title>
				</head>

				<body>
					<header>header</header>
					<main>main</main>
					<footer>footer</footer>
				</body>
			</html>
		`
	})
}
