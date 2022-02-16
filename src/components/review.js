const ListingData = require('../utilities/listingData');

class Review {
	constructor(data) {
		this.listingData = new ListingData(data);
		this.data = data;
		this.values = this.listingData.getData();
	}

	getReview() {
		let html = ``;

		html += `<p>${this.values.medium}</p>`;
		html += `<img src="${this.values.img_main}" alt="" style="width:100%"/>`;
		html += `<ul>`;
		html += `<li>${this.values.title}</li>`;
		html += `<li>${this.values.extra}</li>`;

		if (this.values.extra_2) {
			html += `<li>${this.values.extra_2}</li>`
		}

		if (this.values.extra_3) {
			html += `<li>${this.values.extra_3}</li>`
		}

		if (this.values.extra_4) {
			html += `<li>${this.values.extra_4}</li>`
		}

		html += `</ul>`
		html += `${this.data.text}`

		return html;
	}
}

module.exports = Review;
