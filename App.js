import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './components/PresentationalComponent'


export default class App extends React.Component {

  state = {
    myState1: 'my state one , lorem ipsum'
  }

  updateState = () => this.setState({myState1 : 'niova ny states'})
   render() {
      return (
        <View>
        <PresentationalComponent myState1 = {this.state.myState1}  updateState = {this.updateState} />
        </View>
      );
   }
}


