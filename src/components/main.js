const AppMain = {
	getHtml(page, data) {
		switch (page) {
			case 'home':
				return (
					'<p>This is the home page</p>'
				)
				break;
			case 'review':
				return (
					'<p>This is a review page</p>'
				)
				break;
			default:
				return (
					`<p>404: This page was not found</p>`
				)
		}
	}
}

exports.getHtml = AppMain.getHtml
