const	AppHead = {
	getHtml(page) {
		let title;

		switch(page) {
			case 'home':
				title = 'Home'
				break;
			case 'review':
				title = 'Review'
				break;
			default:
				title = 'Error'
		}

		return (
			`
				<title>${title}</title>
				<meta charset="utf-8"/>
				<link rel="stylesheet" type="text/css" href="/styles/app.css"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
			`
		)
	}
}

module.exports = AppHead;
