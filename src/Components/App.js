import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';

import apiKey from '../config';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      query: '',
      america: [],
      italy: [],
      germany: [],
      userSearch: []
    }
  }

  componentDidMount() {
    this.performSearch()
    this.performSearch('italy')
    this.performSearch('germany')
  }

  saveQuery = (userQuery) => {
    this.setState({
      query: userQuery
    })
    this.performSearch(this.state.query)
  };

  performSearch = (query= 'america') => {
    console.log(query)
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === 'america') {
          this.setState({
            america: response.data.photos.photo
          })
          console.log(this.state.america)
        } else if (query === 'italy') {
          this.setState({
            italy: response.data.photos.photo
          })
        } else if (query === 'germany') {
          this.setState({
            germany: response.data.photos.photo
          })
        } else {
            console.log(response.data)
        }
      })
  }

  render() {
    return (
      <Router>
        <div className="container">
          <SearchForm saveQuery={this.saveQuery}/>
          <Navigation />
          <Switch>
            <Route exact path="/america" render={(props) => (<PhotoContainer data={this.state.america} />)} />
            <Route exact path="/italy" render={(props) => (<PhotoContainer data={this.state.italy} />)} />
            <Route exact path="/germany" render={(props) => (<PhotoContainer data={this.state.germany} />)} />
            <Route path={`/${this.state.query}`} render={(props) => (<PhotoContainer data={this.state.userSearch} />)} />
          </Switch>
        </div>
      </Router>
    )
  }
}
