import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDSSmL0Wuf43HJb3eeoHkw39O4mkpImGtA';

//Create a new component. This component should produce some HTML
//some HMTL

// const App = function() { 
//     return <div>Hi!</div>;
// }
class App extends Component { //'const' or constant is a way to declare a var in JS but it will have constant value, we aren't going to assign any other value to it after this, () => is a way to declare a function in ES6
    constructor(props) {
        super(props);

        this.state = { videos: [ ] };
    
        // YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos)=> {
            this.setState({videos: videos});
            // this.setState({ videos }); same as above in ES6, only works when key and property have the same name 

        });
    }
    
    render() {
        return( 
            <div>
                <SearchBar />
            </div> 
        );
    }
}

//Take this component's HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //'<App />' this created an instance of 'App' and passes it to ReactDOM.render
//earlier we had written 'App' in the brackets, but that is class of a component, we need to pass an instance of it, to do that we wrapped in JSX tags, that'll make an instance of our component 
