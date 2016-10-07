// import from dependencies
import React from 'react';
import ReactDom from 'react-dom';

// import created component
import ContactsList from './ContactsList';

// base component
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                {/* use created component in ContactsList.js - yep this is
                    how you comment in JSX. Block JS comments enclosed in {}
                */}
                <ContactsList />
            </div>
        )
    }
}

// render to index.html element
ReactDom.render(<App />, document.getElementById('app'));
