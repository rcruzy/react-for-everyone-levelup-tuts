// import from dependencies
import React from 'react';
import ReactDom from 'react-dom';

// import created component
import Contact from './Contact';

// chld component component
class ContactsList extends React.Component {
    render() {
        return (
            <ul>
            	{/* loop inside array with map function 
					return component inside annon function
            	*/}
            	{this.props.contacts.map((contact)=> {
            		// need to reference object's id to 
            		// prevent warning
            		return <Contact contact={contact} key={contact.id}/>
            	})}
            </ul>
        )
    }
}

// export to be able to import from other component - ES6 feature
export default ContactsList;
