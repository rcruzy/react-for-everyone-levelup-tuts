// import from dependencies
import React from 'react';
import ReactDom from 'react-dom';

// import created component
import Contact from './Contact';

// chld component component
class ContactsList extends React.Component {

	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	updateSearch(event) {
		// console.log(event.target.value);
		// whatever is being typed in the input box is
		// getting set to state
		// limit to 20 chars - substr(0, 20)
		this.setState({search: event.target.value.substr(0, 20)});
	}
 
    render() {
    	let filteredContacts = this.props.contacts.filter(
    		// filter contacts if it matches input field
    		// chain toLower
    		(contact) => {
    			return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    		}
		);

        return (
        	<div>
	            <ul>
	            	{/* loop inside array with map function 
						return component inside annon function
	            	*/}

	            	{filteredContacts.map((contact)=> {
	            		// need to reference object's id to 
	            		// prevent warning
	            		return <Contact contact={contact} key={contact.id}/>
	            	})}
	            </ul>

            	{/* state from the constructor above
					onChange to update
					bind updateSearch to 'this'
            	 */}
	           	<input type="text" 
	           			value={this.state.search}
	           		onChange={this.updateSearch.bind(this)}/>
        	</div>
        )
    }
}

// export to be able to import from other component - ES6 feature
export default ContactsList;
