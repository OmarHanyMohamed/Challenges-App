import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' backgroundColor='#ffffff' />
                <View style={styles.titleBar}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={this.signOutUser} >
                        <MaterialIcons 
                            name='settings'
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <View style={styles.profileImage}>
                        <Image source={require('../img/omar.jpg')} style={styles.image} resizeMode='center' />
                    </View>
                    <View style={styles.changeImage}>
                        <TouchableOpacity onPress={() => alert('Upload Photo')}>
                            <MaterialIcons name='add-a-photo' size={25} color='#ffffff' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: '700', fontSize: 15 }]}>Omar Hany</Text>
                    <Text style={{ marginTop: 20, fontSize: 12 }}>Previous Challenges</Text>
                    <View style={styles.description}>
                        
                        <Text style={[styles.bioText, { marginLeft: 10, marginRight: 10, marginTop: 15 }]}>
                            Ice Bucket Challenge
                        </Text>
                        <Text style={[styles.bioText, { marginLeft: 10, marginRight: 10, marginTop: 15 }]}>
                            Hold your breath Challenge
                        </Text>
                        <Text style={[styles.bioText, { marginLeft: 10, marginRight: 10, marginTop: 15 }]}>
                            Kiss a stranger Challenge 
                        </Text>
                    </View>
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
    titleBar: {
        flex: 0.1,
        marginHorizontal: 16
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },

    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden'
    },

    changeImage: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    infoContainer: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    bio: {
        marginTop: '5%',
        flexDirection: 'row'
    },
    bioText: {
        color: 'grey'
    },
    description: {
        alignItems: 'center',
        marginTop: 20,
        height: 130,
        width: 140 * 2,
        borderWidth: 1,
        borderColor: '#e6e6ea',
        borderRadius: 20
    },
})