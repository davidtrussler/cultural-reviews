class Header extends HTMLElement {
	constructor() {
		super(); 

		// Create a shadow root
		const shadow = this.attachShadow({mode: 'open'});
		const textNode = document.createTextNode('This is the Header'); 

		shadow.appendChild(textNode); 
	}
}

// Define the new element
customElements.define('header-component', Header);

export default Header; 
