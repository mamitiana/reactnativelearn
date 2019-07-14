import React from 'react'
import List from './components/List'
import Inputs from './components/Input'
import ScrollViewExample from './components/ScrollView'
import HttpExample from './components/http_exemple'
import { Button } from 'react-native'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'


const App = () => {
   return (
      <View style = {styles.container}>
         <TouchableOpacity>
            <Text style = {styles.text}>
               Button
            </Text>
         </TouchableOpacity>
      </View>
   )
}
export default App

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'red'
   }
})
//export default App