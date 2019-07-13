import React, {Component} from "react"
import { StyleSheet , Text , View} from 'react-native'

const PresentationalComponent = (props) => {
    return (

        <View>

            <Text onPress = {props.updateState}>
                {props.myState1}
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
    },
 });

export default PresentationalComponent