// Import React and co.
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
// Import Components
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
// Import API-Key
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
    this.setState({ query: userQuery }, () => this.performSearch(this.state.query));
  }

  performSearch = (query= 'america') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === 'america') {
          this.setState({
            america: response.data.photos.photo
          })
        } else if (query === 'italy') {
          this.setState({
            italy: response.data.photos.photo
          })
        } else if (query === 'germany') {
          this.setState({
            germany: response.data.photos.photo
          })
        } else {
            this.setState({
              userSearch: response.data.photos.photo
            })
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
            <Route exact path="/america" render={() => (<PhotoContainer data={this.state.america} name={'America'} />)} />
            <Route exact path="/italy" render={() => (<PhotoContainer data={this.state.italy} name={'Italy'} />)} />
            <Route exact path="/germany" render={() => (<PhotoContainer data={this.state.germany} name={'Germany'} />)} />
            <Route path={`/${this.state.query}`} render={() => (<PhotoContainer data={this.state.userSearch} name={this.state.query} />)} />
          </Switch>
        </div>
      </Router>
    )
  }
}
