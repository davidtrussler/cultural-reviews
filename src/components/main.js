const AppMain = {
	props: ['pageTitle'], 
	template: `
		<main>
			<p>This is the main section of the {{ pageTitle }} page</p>
		</main>
	`	
}

module.exports = AppMain;
