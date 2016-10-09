// import from dependencies
import React from 'react';
import ReactDom from 'react-dom';

// import created component
import ContactsList from './ContactsList';


let contacts = [{
    id: 1,
    name: 'Ryan',
    phone: '555 3355 5555'
}, {
    id: 2,
    name: 'Courtney',
    phone: '555 1111 5555'
}, {
    id: 3,
    name: 'Tim',
    phone: '555 2222 5555'
}, {
    id: 4,
    name: 'Jeff',
    phone: '555 5521 5555'
}];

// base component
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                {/* use created component in ContactsList.js - yep this is
                    how you comment in JSX. Block JS comments enclosed in {}
                */}

                {/*
                    pass contacts from parent to child component
                */}
                <ContactsList contacts={this.props.contacts}/>
            </div>
        )
    }
}

// render to index.html element
// pass prop contacts = contacts object
ReactDom.render(<App contacts={contacts} />, document.getElementById('app'));
