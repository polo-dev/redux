import React from 'react';
// import AddColorForm from './components/add/AddColorForm';
// import Header from './components/header/Header';
// import ColorList from './components/list/ColorList';

import AddContainer from './containers/AddContainer';
import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';

import './ColorApp.css';

export default class ColorApp extends React.Component {

  // state = {
  //   objStyle : {backgroundColor: 'blue'},
  //   colors : [
  //     {id:1, name:'violet', color:'#f5aafb'},
  //     {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
  //     {id:3, name:'pale green', color:'#aafbde'},
  //     {id:4, name:'vermillon', color:'#fe532e'},
  //     {id:5, name:'sky blue', color:'#82c4fa'},
  //     {id:6, name:'salmon', color:'#fb8b8b'},
  //   ],
  //   new: {
  //     name: '',
  //     color: ''
  //   }
  // };
  //
  // componentDidMount() {
  //   const stateFromLocal = localStorage.getItem('state');
  //   stateFromLocal && this.setState(() => JSON.parse(stateFromLocal));
  // }
  //
  // componentDidUpdate() {
  //   localStorage.state = JSON.stringify(this.state);
  // }
  //
  // getNextId = () => {
  //   return this.state.colors.reduce( (acc, item) => Math.max(acc, item.id), 0) + 1;
  // }
  //
  // changeColor = (col) => {
  //   this.setState({...this.state, objStyle : {backgroundColor: col}});
  // }
  //
  // addHandler = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log(' this.state.new : ', this.state.new);
  //
  //   const newColor  = { ...this.state.new, id: this.getNextId() };
  //
  //   this.setState({
  //     colors : [ ...this.state.colors, newColor]
  //   });
  // }
  //
  // handleNewChange = (key, value) => {
  //   this.setState({
  //     new : { ...this.state.new, [key]: value}
  //   });
  // }

  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <div className="container">
          <ListContainer/>
          <AddContainer/>
      </div>
    </div>);
  }
}
