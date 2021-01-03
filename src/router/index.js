const Vue = require('vue'); 
const Router = require('vue-router'); 

// Vue.use(Router); 

function createRouter() {
	return new Router({
		mode: 'hisory', 
		routes: []
	})
}

module.exports = createRouter;
