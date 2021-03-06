import React from "react";
import Header from "./Header";
import Footer from './Footer';
import TapControl from "./tap/TapControl";
import { connect } from "react-redux";
import * as a from '../actions';
import '../App.css';

function App(props){

  const handleDisplayAddNewForm = () => {
    const { dispatch } = props;
    const action = a.unselectTap();
    dispatch(action);
    const action2 = a.showNewTapForm();
    dispatch(action2);
  }

  const handleToHome = () => {
    const { dispatch } = props;
    const action = a.showTapMenu();
    dispatch(action);
    const action2 = a.unselectTap();
    dispatch(action2);
  }

  return ( 
    <React.Fragment>
      <Header onClickToHome={ handleToHome } onClickAddNewTap = { handleDisplayAddNewForm } />
      <TapControl />
      <Footer onClickToHome={ handleToHome } />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    masterTapMenu: state.masterTapMenu,
    selectedTap: state.selectedTap,
    displayToggle: state.displayToggle
  }  
}

export default connect(mapStateToProps)(App);