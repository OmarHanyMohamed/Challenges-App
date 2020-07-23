import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeartButton from '../components/HeartButton';

var { height, width } = Dimensions.get('window');

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.challengeContainer}>
                <View style={{ borderRadius: 20 }}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={this.props.photo}
                            style=
                            {{
                                width: '100%',
                                height: height / 2.5,
                                resizeMode: 'contain',
                                borderRadius: 10
                            }}
                        >
                            <View style={styles.participants}>
                                <Text style={styles.participantsNo}>
                                    {
                                        <FontAwesome
                                            name='users'
                                            size={15}
                                            style={{ marginLeft: '10%' }}
                                        />
                                    }
                                    {' '}
                                            1000
                                        </Text>
                            </View>
                            <View style={styles.details}>
                                <View style={styles.name}>
                                    <Text style={{ fontSize: 14, fontWeight: '700' }}>
                                        {this.props.name}
                                    </Text>
                                </View>
                                <View style={styles.heat}>
                                    <HeartButton />
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    challengeContainer: {
        marginTop: '5%',
        marginLeft: '5%',
        width: '90%',
        height: height / 2.5,
        backgroundColor: '#ffffff',
        borderRadius: 10
    },
    Challengeimage: {
        flex: 0.8,
        borderRadius: 10
    },
    ChallengeDetails: {
        flex: 0.2,
        borderRadius: 10,
    },
    participants: {
        height: 40,
        width: 65,
        backgroundColor: '#ffffff',
        alignSelf: 'flex-end',
        marginRight: 10,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 1000
    },
    participantsNo: {
        fontWeight: 'bold',
        fontSize: 12,
        alignSelf: 'center'
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1000,
        marginTop: '62%',
        flex: 1,
    },
    name: {
        height: 45,
        width: 180,
        backgroundColor: '#ffffff',
        borderTopRightRadius: 50,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 0.2,
        borderColor: '#e6e6ea',
        justifyContent: 'center'
    },
    heat: {
        flex: 0.28,
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 100,
        marginRight: '3%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '-5%'
    }
})