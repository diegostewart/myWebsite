import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux';
import Web from './components/Web';



class App extends Component {
  render() {
    return ( // Aqui podemos pasar props si es necesario a Web
      <div> 
        <Web/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state
  };
}
export default connect(mapStateToProps)(App);

