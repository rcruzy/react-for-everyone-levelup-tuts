// import from dependencies
import React from 'react';
import ReactDom from 'react-dom';

// base component
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
            </div>
        )
    }
}

// render to index.html element
ReactDom.render(<App />, document.getElementById('app'));
