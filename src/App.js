

import  React,{useState,useEffect,Component} from 'react';
import './App.css';
import Appbar from './components/Appbar'
import AppMenu from './components/AppMenu'
import Product from './components/Product'
import AppMainProductList from './components/AppProdtable'
const ShowProducts = false;


export default class App extends React.Component {
  handleClick = () => {
    // force a re-render
    this.forceUpdate();
  };

   forceUpdate1() {
    this.render()
    this.setState({});
  }

  render() {
    console.log('App component: render()')
    return (
      <div className="App">
      <Appbar/>
      <AppMainProductList/>
      <Product/>
     </div>
    );
  }
}



