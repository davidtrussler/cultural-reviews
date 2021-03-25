const ListingData = require('../utilities/listingData');
const AppMainReview = {
	props: ['reviewsData'],
	data() {
		let listingData = new ListingData(this.reviewsData[0]);
		let values = listingData.getData();

		return {
			medium: values.medium,
			title: values.title,
			extra: values.extra, 
			extra_2: values.extra_2, 
			extra_3: values.extra_3, 
			extra_4: values.extra_4, 
			img_main: values.img_main
		};
	},
	template: `
		<main>
			<p><a href="/">Back to reviews</a></p>

			<article>
				<p>{{medium}}</p>

				<img v-bind:src="img_main" width="100%"/>

				<ul>
					<li>{{title}}</li>
					
					<li v-html="extra"></li>

					<li v-html="extra_2"></li>

					<template v-if="extra_3">
						<li v-html="extra_3"></li>
					</template>

					<template v-if="extra_4">
						<li v-html="extra_4"></li>
					</template>
				</ul>

				<p>{{reviewsData[0].text}}</p>
			</article>
		</main>
	`	
}

module.exports = AppMainReview;
