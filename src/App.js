import React, { Component } from 'react';
import PropTypes  from 'prop-types';//Para usar las rutas

//Componentes
import Navigate from './Component/Navigate';
import Header from './Component/Header';
import Footer from './Component/Footer';
// import './App.css';

class App extends Component {
   
    static propTypes ={
      children: PropTypes.object.isRequired
  };
  render() {
       const { children } = this.props; 
    return (
      <div className="App">
          <Header />
          <br/>
          <div className = "workspace">
          <Navigate body={children}/> 
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
