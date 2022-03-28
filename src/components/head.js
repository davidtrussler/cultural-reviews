const	AppHead = {
	getHtml(page, data) {
		getTitle = function(pageTitle, title) {
			if (title) {
				return `<title>${pageTitle} | ${title} | Thoughts of a thin man</title>`;
			} else {
				return `<title>${pageTitle} | Thoughts of a thin man</title>`;
			}
		}

		let pageTitle;

		switch(page) {
			case 'home':
				pageTitle = 'Home';
				break;
			case 'review':
				pageTitle = 'Review';
				break;
			default:
				pageTitle = 'Error';
		}

		if (data) {
			return (
				`
					${getTitle(pageTitle, data.title)}
					<meta charset="utf-8"/>
					<link rel="stylesheet" type="text/css" href="/styles/app.css"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
				`
			)
		}
	}
}

module.exports = AppHead;
