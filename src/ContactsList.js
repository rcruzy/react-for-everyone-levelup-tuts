// import from dependencies
import React from 'react';
import ReactDom from 'react-dom';

// import created component
import Contact from './Contact';

// chld component component
class ContactsList extends React.Component {

	// pass props to state
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			contacts: props.contacts
		};
	}

	updateSearch(event) {
		// console.log(event.target.value);
		// whatever is being typed in the input box is
		// getting set to state
		// limit to 20 chars - substr(0, 20)
		this.setState({search: event.target.value.substr(0, 20)});
	}

	addContact(event) {
		// prevent from reloading the whole page
		event.preventDefault();

		// set this values to variables
		let name = this.refs.name.value;
		let phone = this.refs.phone.value;

		// randomize id
		let id = Math.floor((Math.random() * 100) + 1);


		console.log();

		// grab the variables and push it in the contacts
		// array ala ES6 style's shorthand for setting objects
		// i.e id: id, name: name, etc..
		this.setState({
			contacts: this.state.contacts.concat({
				id, name, phone
			})
		});

		// set to empty to removed added contacts
		// to input fields
		this.refs.name.value = '';
		this.refs.phone.value = '';
	}
 
    render() {
    	let filteredContacts = this.state.contacts.filter(
    		// filter contacts if it matches input field
    		// chain toLower
    		(contact) => {
    			return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    		}
		);

        return (
        	<div>
            	{/* state from the constructor above
					onChange to update
					bind updateSearch to 'this'
            	 */}
	           	<input type="text" 
           			value={this.state.search}
           			placeholder="Search"
	           		onChange={this.updateSearch.bind(this)}/>

	           	{/* bind to this context (addContact function) 
					Use refs to access input - insert to
					object array
	           	*/}	
	           	<form onSubmit={this.addContact.bind(this)}>
	           		<input type="text" ref="name" />
	           		<input type="text" ref="phone" />
	           		<button type="submit">Add New Contact</button>
	           	</form>

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
        	</div>
        )
    }
}

// export to be able to import from other component - ES6 feature
export default ContactsList;
