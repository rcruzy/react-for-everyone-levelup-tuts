// import from dependencies
import React from 'react';
import ReactDom from 'react-dom';

// chld component component
class ContactsList extends React.Component {
    render() {
        return (
            <ul>
            	{/* use data passed to child component*/}
                <li>{this.props.contacts.name} {this.props.contacts.phone}</li>
            </ul>
        )
    }
}

// export to be able to import from other component - ES6 feature
export default ContactsList;
