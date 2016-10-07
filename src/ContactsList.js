// import from dependencies
import React from 'react';
import ReactDom from 'react-dom';

// chld component component
class ContactsList extends React.Component {
    render() {
        return (
            <ul>
                <li>Ryan 555 555 555</li>
            </ul>
        )
    }
}

// export to be able to import from other component - ES6 feature
export default ContactsList;
