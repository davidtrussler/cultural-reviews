const ListingData = require('../utilities/listingData');

class Listing {
	constructor(review) {
		this.listingData = new ListingData(review);
		this.values = this.listingData.getData();
	}

	getReview() {
		return `
			<a href="/review/${this.values.id}">
				<img src="${this.values.img_thumb}" alt="" width="60"/>
				<span>${this.values.medium}</span>
				<span>${this.values.title}</span>
				<span>${this.values.extra}</span>
			</a>
		`
	}
}

module.exports = Listing; 
