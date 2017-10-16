import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  handleFilterChange = (event) => {
    this.setState({
      filters: event
    })
  }

  render(){
    return(
      <div>
        <FruitBasket
          fruit = {this.state.fruit}
          filters = {this.state.filters}
          currentFilter = {this.state.currentFilter}
          handleFilterChange = {this.handleFilterChange}
        />
      </div>
    )
  }
}


export default App;
