import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.headerTitle}>
                    Challenges
                    {
                        <MaterialCommunityIcons
                            name='fire'
                            size={30}
                            color='red'
                        />
                    }
                </Text>

                <View style={styles.searchBar}>
                    <View style={{ flexDirection: 'row' }}>
                        <EvilIcons name='search' size={25} color='grey' style={{ alignSelf: 'center', marginLeft: '1%' }} />
                        <TextInput
                            placeholder=' Search for a challenge'
                            placeholderTextColor='grey'
                            onChangeText={(text) => this.searchPlaces(text)}
                            style={styles.search}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.25,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0.5,
        borderColor: '#DCDCDC',
    },
    headerTitle: {
        marginLeft: '5%',
        marginTop: '5%',
        fontSize: 25,
        fontWeight: '700',
    },
    searchBar: {
        marginTop: '5%',
        marginLeft: '5%',
        height: 35,
        width: 360,
        backgroundColor: '#e6e6ea',
        borderRadius: 10
    },
    search: {
        width: 150 * 2,
        height: 40,
    },
})