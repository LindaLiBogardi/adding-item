import React, { Component} from 'react';
import Muffins from './Muffins';
import AddMuffin from './AddMuffin';

class App extends Component {
  state = {
    muffins : [
      {price: 25, size: 'middle', id: 1},
      {price: 20, size: 'big', id: 2},
      {price: 35, size: 'small', id: 3},
      {price: 30, size: 'middle', id: 3}
    ]
  }
  render() {
    return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome :)</p>
      <Muffins muffins = {this.state.muffins}/>
      <AddMuffin />
    </div>
  );
}
}

export default App;
