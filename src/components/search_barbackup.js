// import React from 'react'; commented out line below would
import React, { Component } from 'react';

// class SearchBar extends React.Component {
class SearchBar extends Component { 
    constructor(props) { // this is how we initialise state in a class based component, functional components do not have state 
        super(props);

        this.state = { term: ''};
    }

    render() {
        return <input onChange={this.onInputChange} />; //change is the event so we write 'onChange', 'on_' is a react defined property
    }

    // this right here is an event handler that's defined as a method on a class 'SearchBar'
    onInputChange(event) { // 'onInputChange' is the event handler and 'event' is the event object, an arguement of event handler
        console.log(event.target.value); //'event.target.value' gives us the input change that occurs in the input field
    }

    //alternate method via ES6 arrow function for above code,
    // render() {
    //     return <input onChange={(event) => {console.log(event.target.value)}} />; 
    // }
}

export default SearchBar;