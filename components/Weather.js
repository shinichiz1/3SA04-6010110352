import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }
    }
    
    render() {
        return (
        <View style={styles.container}>
        <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
        <Text style={styles.welcome}>Zip code is {this.props.zipCode}.</Text>
        <Forecast style={styles.forecast}{...this.state.forecast} />
        </ImageBackground>
        </View>
        );
    }
}
   
const styles = StyleSheet.create({
    container: { paddingTop: 25, flex: 1},
    backdrop: { width: '100%', height: '100%'},
    welcome: { alignItems: 'center', justifyContent:'center', textAlign:'center', fontSize: 30},
});
   