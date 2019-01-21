import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from "../components/Header";
import MainPage from "../components/MainPage";

import "./App.css";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props } />;
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
