// import from dependencies
import React from 'react';

// child component 
// const to make it dumb/stateless component
// pass the contact object here or more than 1 props
const Contact = ({contact, item}) =>
	<li>
		{/* use passed data here*/}
	    {contact.name} {contact.phone} {item}
	</li>

export default Contact;
