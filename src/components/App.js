import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TapMenu from './TapMenu';
import NewTapForm from './NewTapForm';
import EditTapForm from './EditTapForm';
import TapDetail from './TabDetail';
import InitialState from './../InitialState';
import '../App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTabMenu: true,
      addingTap: false,
      selectedTap: null,
      editingTap: false,
      masterTapMenu: InitialState
    }
  }      

  handleToHome = () => {
    this.setState({
      showTabMenu: true,
      addingTap: false,
      editingTap: false,
      selectedTap: null
    });
  }  

  handleAddTapClick = () => {
    this.setState({
      addingTap: true,
      showTabMenu: false,
      selectedTap: null,
      editingTap: false
    });
  }  

  handleAddNewTap = (newTap) => {
    const newMessage = "Enough";
    const newTapWithMessage = {...newTap, message: newMessage}
    const newTapMenu = this.state.masterTapMenu.concat(newTapWithMessage);
    this.setState({
      masterTapMenu: newTapMenu,
      addingTap: false,
      showTabMenu: true,
      selectedTap: null,
      editingTap: false,
    });
  }

  handleTapSelection = (id) => {
    const selectedTap = this.state.masterTapMenu.filter(tab => tab.id === id)[0];
    this.setState({
      selectedTap: selectedTap,
      showTabMenu: false
    });
  }

  handleSellPint = (id) => {
    const selectedTap = this.state.masterTapMenu.filter(tab => tab.id === id)[0];
    const leftPints = selectedTap.pints > 0 ? selectedTap.pints -= 1 : 0;
    const updatedPintTap = {...selectedTap, pints: leftPints};
    const newMessage = updatedPintTap.pints < 10 ? "Almost Empty": "Enough";
    const updateMsgTap = {...updatedPintTap, message: newMessage};
    const emptyMessage = updateMsgTap.pints === 0 ? "Out of Stock!": newMessage;
    const finalUpdateTap = {...updateMsgTap, message: emptyMessage};
    const newTapMenu = this.state.masterTapMenu
      .filter(tap => tap.id !== id)
      .concat(finalUpdateTap);
    this.setState({
      masterTapMenu: newTapMenu,  
      showTabMenu: true, 
      selectedTap: null}); 
  }

  handleRestockTap = (id) => {
    const selectedTap = this.state.masterTapMenu.filter(tab => tab.id === id)[0];
    const restockPints = selectedTap.pints += 124;
    const updatedPintTap = {...selectedTap, pints: restockPints};
    const newMessage = "Enough";
    const updateMsgTap = {...updatedPintTap, message: newMessage};
    const newTapMenu = this.state.masterTapMenu
      .filter(tap => tap.id !== id)
      .concat(updateMsgTap);
    this.setState({
      masterTapMenu: newTapMenu,
      selectedTap: null, 
      showTabMenu: true
    });
  }

  handleDeleteTap = (id) => {
    const newTapMenu = this.state.masterTapMenu.filter(tap => tap.id !== id);
    this.setState({
      masterTapMenu: newTapMenu,
      selectedTap: null, 
      showTabMenu: true
    });
  }

  handleEditClick = () => {
    this.setState({
      editingTap: true,
      addingTap: false,
      showTabMenu: false
    });
  }

  handleEditTap = (tapToEdit) => {
    const editedNewTapMenu = this.state.masterTapMenu
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tapToEdit);
    this.setState({
      masterTapMenu: editedNewTapMenu,
      editingTap: false,
      selectedTap: null,
      showTabMenu: true
    });  
  }

  setVisibility = () => {
    if (this.state.editingTap) {
      return {
        body: <EditTapForm tap = {this.state.selectedTap} onEditTap={this.handleEditTap} />
      }
    } else if (this.state.selectedTap != null) {
      return {      
        body: <TapDetail tap={this.state.selectedTap} onRestockTap={this.handleRestockTap} onEditClick={this.handleEditClick} onDeleteTap={this.handleDeleteTap} />
      }
    } else if (this.state.addingTap) {
      return {
        body: <NewTapForm onNewTapCreation={this.handleAddNewTap} />
      }
    } else if (this.state.showTabMenu) {
      return {
        body: <TapMenu tapMenu={this.state.masterTapMenu} onTabClick={this.handleTapSelection} onSellPint={this.handleSellPint} />
      }
    }
  }

  render() {
    let currentlyVisibleState = this.setVisibility();
    return (
      <>
        <Header onClickToHome={this.handleToHome} onClickAddNewTap={this.handleAddTapClick} />
        {currentlyVisibleState.body}
        <Footer onClickToHome={this.handleToHome} />
      </>
    );
  }  
}

export default App;
