const ListingData = require('../utilities/listingData');

class Review {
	constructor(data) {
		this.listingData = new ListingData(data);
		this.data = data;
		this.values = this.listingData.getData();
	}

	getReview() {
		let html = ``;

		html += `<p class="review__medium">${this.values.medium}</p>`;
		html +=
			`<div class="review__heading">
				<div class="review__image">
					<img src="${this.values.img_main}" alt=""/>
				</div>
				<ul class="review__details">`;
		html += `<li class="review__title">${this.values.title}</li>`;
		html += `<li class="review__extra">${this.values.extra}</li>`;

		if (this.values.extra_2) {
			html += `<li class="review__extra-2">${this.values.extra_2}</li>`
		}

		if (this.values.extra_3) {
			html += `<li class="review__extra-3>${this.values.extra_3}</li>`
		}

		if (this.values.extra_4) {
			html += `<li class="review__extra-4>${this.values.extra_4}</li>`
		}

		html +=
				`</ul>
			</div>`
		html +=
			`<div class="review__text">
				${this.data.text}
			</div>`

		return html;
	}
}

module.exports = Review;
