class ListingData {
	constructor(review) {
		console.log('ListingData!')
		console.log('review: ', review)

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

					case 'y-m-d': 
						formattedDate = `${rawDate.getFullYear()}-${(rawDate.getMonth() + 1).toString().padStart(2, '0')}-${rawDate.getDate().toString().padStart(2, '0')}`;
					break;

					default:
						formattedDate = rawDate.toLocaleDateString('en-GB', options);
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
			extra_4 = '', 
			img_thumb = this.review.img_thumb, 
			img_main = this.review.img_main;

		switch (this.review.medium) {
			case 'book':
				medium = 'Book';
				extra = `By ${createExtraString(this.review.author)}`;
				// extra_2 = `<span>${this.review.publisher}</span>, <time datetime="${formatDate(this.review.date_publication, 'y-m-d')}">${formatDate(this.review.date_publication, 'y')}</time>`;
				break;

			case 'theatre':
				medium = 'Theatre',
				extra = `By ${createExtraString(this.review.writer)}`;
				// extra_2 = `Directed by ${createExtraString(this.review.director)}`;
				// extra_3 = this.review.venue;
				// extra_4 = `<time datetime="${formatDate(this.review.date_opening, 'y-m-d')}">${formatDate(this.review.date_opening)}</time> to <time datetime="${formatDate(this.review.date_closing, 'y-m-d')}">${formatDate(this.review.date_closing)}</time>`;
				break;

			case 'cinema':
				medium = 'Cinema';
				extra = `Directed by ${createExtraString(this.review.director)}`;
			// 	extra_2 = `With ${createExtraString(this.review.actors)}`;
			// 	extra_3 = `${this.review.country}, <time datetime="${formatDate(this.review.date_release, 'y-m-d')}">${formatDate(this.review.date_release, 'y')}</time>`;
			// 	extra_4 = `${this.review.running_time} minutes`; 
				break;

			case 'art_visual':
				medium = 'Visual art';
				extra = this.review.venue;
			// 	extra_2 = `<time datetime="${formatDate(this.review.date_opening, 'y-m-d')}">${formatDate(this.review.date_opening)}</time> to <time datetime="${formatDate(this.review.date_closing, 'y-m-d')}">${formatDate(this.review.date_closing)}</time>`;
				break;

			case 'music_performed':
				medium = 'Live music';
				extra = this.review.venue;
			// 	extra_2 = `<time datetime="${formatDate(this.review.date_event, 'y-m-d')}">${formatDate(this.review.date_event)}</time>`;
				break;

			case 'music_recorded':
				medium = 'Recorded music';
				extra = `By ${createExtraString(this.review.artist)}`;
			// 	extra_2 = `${this.review.label}, <time datetime="${formatDate(this.review.date_release, 'y-m-d')}">${formatDate(this.review.date_release, 'y')}</time>`;
				break;
		}

		return {
			id: id, 
			medium: medium,
			title: title, 
			extra: extra, 
			extra_2: extra_2,
			extra_3: extra_3, 
			extra_4: extra_4, 
			img_thumb: img_thumb, 
			img_main: img_main
		};
	}
}

module.exports = ListingData; 
