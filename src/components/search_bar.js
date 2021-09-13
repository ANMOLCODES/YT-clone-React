// import React from 'react'; commented out line below would
import React, { Component } from 'react';

// class SearchBar extends React.Component {
class SearchBar extends Component { 
    constructor(props) { // this is how we initialise state in a class based component, functional components do not have state 
        super(props);

        this.state = { term: ''};
    }

            
            render() { 
        return ( //whenever we reference a js variable in JSX we wrap it in curly braces 
        <div>
            <input
                value= {this.state.term}
                onChange={(event) => {this.setState({ term: event.target.value })}} /> 
            {/* Value of the input: {this.state.term}  */}
            
        </div>
        );
    }
}

export default SearchBar;