import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.props.main}</Text>
                <Text style={styles.welcome}>{this.props.description}</Text>
                <Text style={styles.welcome}>{this.props.temp} °C</Text>
            </View>
    );
    }
   }

const styles = StyleSheet.create({
    container: { paddingTop: 25, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20 },
    backdrop: { width: '100%', height: '100%'},
    welcome: {textAlign:'center', fontSize: 20}
    
});