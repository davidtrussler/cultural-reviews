const createSSRApp = require('../app')
const renderer = require('@vue/server-renderer'); 
const express = require('express'); 
const server = express(); 
const port = process.env.PORT || 4000; 

server.use(express.static('assets')); 

server.get('*', (req, res) => {
	createSSRApp(req.url).then(app => {
		renderer.renderToString(app).then(markup => {
			res.end(`
				<!DOCTYPE html>
				${markup}
			`);
		}).catch(err => {
			console.error(err); 
		});
	})
});

server.listen(port, () => {
	console.log(`Server is listening on port: ${port}`)
}); 
