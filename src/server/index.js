const createSSRApp = require('../app')
const renderer = require('@vue/server-renderer'); 
const express = require('express'); 
const server = express(); 
const port = process.env.PORT || 4000; 

server.get('*', (req, res) => {
	const app = createSSRApp(req.url);

	renderer.renderToString(app).then(markup => {
		res.end(`${markup}`); 
	}).catch(err => {
		console.error(err); 
	}); 
}); 

server.listen(port, () => {
	console.log(`Server is listening on port: ${port}`)
}); 
