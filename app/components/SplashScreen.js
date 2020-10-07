
import React, {Component} from 'react'
import {View,StyleSheet,Image} from 'react-native'
import { PAYODA_JPG } from '../assets'
import { styles } from '../utils/AppStyle'

var Timer = null
class SplashScreen extends Component{

    componentDidMount() {
        Timer = setTimeout(() => {
            this.props.navigation.navigate('SampleViewPager');
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(Timer)
    }
    render(){
        return(
            <View style = {styles.splashContainer}>
                <Image source = {PAYODA_JPG}></Image>

            </View>
        )
    }

}

export default SplashScreen;