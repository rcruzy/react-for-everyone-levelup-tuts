// import from dependencies
import React from 'react';
import ReactDom from 'react-dom';

// chld component component
class Contact extends React.Component {
    render() {
        return (
            <li>
            	{/* use passed data here*/}
                {this.props.contact.name} {this.props.contact.phone}
            </li>
        )
    }
}

export default Contact;
