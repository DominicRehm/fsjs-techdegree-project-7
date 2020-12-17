import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

import SearchForm from './components/searchForm';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {

  state = {
    photos: [],
    javaScript: [],
    html: [],
    computers: []
  }

  componentDidMount() {
    this.performSearch('javaScript');
    this.performSearch('html');
    this.performSearch('computers');
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        
        if (query === 'javaScript') {
          this.setState({
            javaScript: response.data.photos.photo
          })
        } else if (query === 'html') {
          this.setState({
            html: response.data.photos.photo
          })
        } else if (query === 'computers') {
          this.setState({
            computers: response.data.photos.photo
          })
        }
      })
}

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Navigation />
  
          <Switch>
            <Route
              exact 
              path="/html" 
              render={() => (
                <PhotoContainer data={this.state.html}/>
              )}
            />
            <Route
              exact 
              path="/javaScript" 
              render={() => (
                <PhotoContainer data={this.state.javaScript}/>
              )}
            />
            <Route
              exact 
              path="/computers" 
              render={() => (
                <PhotoContainer data={this.state.computers}/>
              )}
            />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  };
};

export default App;
