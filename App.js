import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {

  state = {
    myState1: 'my state one , lorem ipsum'
  }

  updateState = () => this.setState({myState1 : 'niova ny states'})
   render() {
      return (
         <View style = {styles.container}>
            <Text onPress={this.updateState}>
            {this.state.myState1}</Text>
         </View>
      );
   }
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});