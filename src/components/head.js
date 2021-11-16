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
			`
		)
	}
}

module.exports = AppHead;
