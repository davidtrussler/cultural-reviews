const ListingData = require('../utilities/listingData');

class Listing {
	constructor(review) {
		this.listingData = new ListingData(review);
		this.values = this.listingData.getData();
	}

	getReview() {
		return `
			<a href="/review/${this.values.id}/${this.values.title.toLowerCase().replaceAll(' ', '-')}" class="listing__item">
				<div class="listing__image">
					<img
						src="${this.values.img_thumb}"
						alt=""
					/>
				</div>
				<div class="listing__content">
					<ul class="content__wrapper">
						<li class="listing__medium">${this.values.medium}</li>
						<li class="listing__title">${this.values.title}</li>
						<li class="listing__extra">${this.values.extra}</li>
					</ul>
				</div>
			</a>
		`
	}
}

module.exports = Listing; 
