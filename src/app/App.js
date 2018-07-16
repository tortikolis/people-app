import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import { fetchData } from '../services/dataService';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { PeopleList } from './partials/PeopleList';
import { Loading } from './partials/Loading';
import { About } from './pages/About';
import { lastUpdate } from '../services/dataService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      isListView: localStorage.getItem("isListView") !== "true",
      isLoading: true,
      lastUpdate: lastUpdate()
    }
  }

  getUserData = () => {
    fetchData()
      .then((data) => {
        this.setState({ userData: data, isLoading: false, lastUpdate: lastUpdate() });
        localStorage.setItem('storageData', JSON.stringify(data));
      })
  }

  listClickHandler = () => {
    const stateView = this.state.isListView;
    this.setState({ isListView: !stateView });
    localStorage.setItem("isListView", JSON.stringify(this.state.isListView))
  }

  componentDidMount() {
    const storageData = localStorage.getItem('storageData')
    if (storageData) {
      this.setState({ userData: JSON.parse(storageData), isLoading: false })
    } else {
      this.getUserData();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header redirectToAbout={this.redirectToAbout} listClickHandler={this.listClickHandler} getUserData={this.getUserData} isListView={this.state.isListView} />
        <Switch>
          <Route exact path='/about' component={About} />)
          <Route path='/' render={() => this.state.isLoading ? <Loading /> : <PeopleList isListView={this.state.isListView} userData={this.state.userData} />} />
        </Switch>
        <Footer lastUpdate={lastUpdate} />
      </React.Fragment>
    );
  }
}

export default App;
