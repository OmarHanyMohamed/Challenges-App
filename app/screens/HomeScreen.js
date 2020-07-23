import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import HeaderHome from '../components/HeaderHome';
import Challenges from '../components/Challenges';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#ffffff'
                    barStyle='light-content'
                />
                <HeaderHome />

                <View style={styles.challenges}>
                    <ScrollView>
                        <Challenges
                            name='Ice Bucket Challenge'
                            photo={require('../img/icebucket.png')}
                        />
                        <Challenges 
                            name='Red Pepper Challenge'
                            photo={require('../img/Red_Peppers.png')}
                        />
                        <Challenges 
                            name='Hold your breath Challenge'
                            photo={require('../img/water.png')}
                        />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    challenges: {
        flex: 1,
        marginBottom: 10
    },
})