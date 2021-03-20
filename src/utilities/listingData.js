class ListingData {
	constructor(review) {
		this.review = review; 
	}

	getData() {
		const formatDate = (rawDate, format) => {
			let formattedDate = '';

			if (rawDate) {
				let date = new Date(rawDate);
				let options = { 
					year: 'numeric', 
					month: 'long', 
					day: 'numeric' 
				};

				switch (format) {
					case 'y':
						formattedDate = date.getFullYear();
					break; 

					default:
						formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date); 
				}
			}

			return formattedDate; 
		}; 

		const createExtraString = (extra) => {
			let string = '';

			if (extra) {
				let extras = extra.split(',');

				for (let i = 0; i < extras.length; i++) {
					string += `<span>${extras[i].trim()}</span>`;

					if (i === extras.length - 2) {
						string += ` and `;
					} else if (extras.length !== 0 && i !== extras.length - 1) {
						string += `, `;
					}
				};
			}

			return string; 
		};

		let 
			id = this.review.id,
			medium = '',
			title = this.review.title,
			extra = '',
			extra_2 = '',
			extra_3 = '', 
			extra_4 = '';

		switch (this.review.medium) {
			case 'book':
				medium = 'Book';
				extra = `By ${createExtraString(this.review.author)}`;
				extra_2 = `<span>${this.review.publisher}</span>, <date>${formatDate(this.review.date_publication, 'y')}</date>`;
				break;

			case 'theatre':
				medium = 'Theatre',
				extra = `By ${createExtraString(this.review.writer)}`;
				extra_2 = `Directed by ${createExtraString(this.review.director)}`;
				extra_3 = this.review.venue;
				extra_4 = `<date>${formatDate(this.review.date_opening)}</date> to <date>${formatDate(this.review.date_closing)}</date>`;
				break;

			case 'cinema':
				medium = 'Cinema';
				extra = `Directed by ${createExtraString(this.review.director)}`;
				extra_2 = `With ${createExtraString(this.review.actors)}`;
				extra_3 = `${this.review.country}, <date>${formatDate(this.review.date_release, 'y')}</date>`;
				extra_4 = `${this.review.running_time} minutes`; 
				break;

			case 'art_visual':
				medium = 'Visual art';
				extra = this.review.venue;
				extra_2 = `<date>${formatDate(this.review.date_opening)}</date> to <date>${formatDate(this.review.date_closing)}</date>`;
				break;

			case 'music_performed':
				medium = 'Live music';
				extra = this.review.venue;
				extra_2 = `<date>${formatDate(this.review.date_event)}</date>`;
				break;

			case 'music_recorded':
				medium = 'Recorded music';
				extra = `By ${createExtraString(this.review.artist)}`;
				extra_2 = `${this.review.label}, ${formatDate(this.review.date_release, 'y')}`;
				break;
		}

		return {
			id: id, 
			medium: medium,
			title: title, 
			extra: extra, 
			extra_2: extra_2,
			extra_3: extra_3, 
			extra_4: extra_4
		};
	}
}

module.exports = ListingData; 
