const ListingData = require('../utilities/listingData');

class Listing {
	constructor(review) {
		this.listingData = new ListingData(review);
		this.values = this.listingData.getData();
	}

	getReview() {
		return `
			<a href="/review/${this.values.id}" class="listing__item">
				<div class="listing__image">
					<img
						src="${this.values.img_thumb}"
						alt=""
					/>
				</div>
				<div class="listing__content">
					<p class="listing__medium">${this.values.medium}</p>
					<p class="listing__title">${this.values.title}</p>
					<p class="listing__extra">${this.values.extra}</p>
				</div>
			</a>
		`
	}
}

module.exports = Listing; 
