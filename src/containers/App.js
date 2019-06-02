import React, {Component} from 'react';
import { connect } from 'react-redux';
import {CardList, SearchBox, Scroll, ErrorBoundry, Header, CounterButton } from '../components'
import 'tachyons'
import './App.css'
import { setSearchField, requestRobots } from '../actions';


class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }

  render () {
    const { searchField, onSearchChange, robots, isLoading, error } = this.props
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isLoading ? <h1>Loading...</h1>
    : (
        <div className="tc">
            <Header />
            <CounterButton color="red"/>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
            <ErrorBoundry>
           <CardList robots={filteredRobots} />
           </ErrorBoundry>
           </Scroll>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots,
      isLoading: state.requestRobots.isLoading,
      error: state.requestRobots.error
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      onSearchChange: event => dispatch(setSearchField(event.target.value)),
      onRequestRobots: () => dispatch(requestRobots())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
