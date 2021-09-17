import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from './components/video_detail';

// const API_KEY = 'AIzaSyDSSmL0Wuf43HJb3eeoHkw39O4mkpImGtA';
const API_KEY = "AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho";


//Create a new component. This component should produce some HTML
//some HMTL

// const App = function() { 
//     return <div>Hi!</div>;
// }
class App extends Component { //'const' or constant is a way to declare a var in JS but it will have constant value, we aren't going to assign any other value to it after this, () => is a way to declare a function in ES6
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
    
        // YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
        this.videoSearch('pewdiepie');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos)=> {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // this.setState({ videos }); same as above in ES6, only works when key and property have the same name 
        });
    }
    
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return( 
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos} /* 'this.state.vidoes' passing data like this is referred to as passing props, the data we are passing from 'App' to 'VideoList' is referred to as a prop, here 'videos' is a prop */ />  
            </div> 
        );
    }
}

//Take this component's HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
 //'<App />' this created an instance of 'App' and passes it to ReactDOM.render
//earlier we had written 'App' in the brackets, but that is class of a component, we need to pass an instance of it, to do that we wrapped in JSX tags, that'll make an instance of our component 
