import React, {Component} from "react"
import { StyleSheet , Text , View} from 'react-native'

const PresentationalComponent = (props) => {
    return (

        <View >

            <Text style = {styles.myState} onPress = {props.updateState}>
                {props.myState1}
            </Text>
        </View>
    )
}



const styles = StyleSheet.create ({
    myState: {
       marginTop: 20,
       textAlign: 'center',
       color: 'blue',
       fontWeight: 'bold',
       fontSize: 20
    }
 })

export default PresentationalComponent