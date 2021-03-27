const ListingData = require('../utilities/listingData');
const AppListing = {
	props: ['review'],
	data() {
		let listingData = new ListingData(this.review);
		let values = listingData.getData();

		return {
			id: values.id,
			medium: values.medium,
			title: values.title,
			extra: values.extra, 
			img_thumb: values.img_thumb
		};
	},
	template: `
		<a v-bind:href="'/review/' + id">
			<img v-bind:src="img_thumb" alt="" width="60"/>
			<span>{{medium}}</span>
			<span>{{title}}</span>
			<span v-html="extra"></span>
		</a>
	`
}

module.exports = AppListing; 
