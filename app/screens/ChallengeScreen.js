import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            timeStamp: 1581953603500,
            imageSource: null,
            imagePath: null
        }
    }

    selectImage = async () => {
        ImagePicker.showImagePicker({ noData: true, mediaType: 'photo' }, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    imageSource: response.uri,
                    imagePath: response.path
                });
            }
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name='ios-arrow-back' size={35} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.upload_post}>
                        <Text style={{ fontWeight: '500', fontSize: 18 }}>Done</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Image
                        source={require('../img/omar.jpg')}
                        style={styles.avatar}
                    ></Image>
                    <View style={{ borderWidth: 0.5, height: 100, width: 300, borderRadius: 10, borderColor: '#C0C0C0' }}>
                        <TextInput
                            autoFocus={true}
                            multiline={true}
                            numberOfLines={4}
                            style={{ flex: 1, marginLeft: 10 }}
                            placeholder='Challenge Details'
                            onChangeText={text => this.setState({ text })}
                            value={this.state.text}
                        ></TextInput>
                    </View>
                </View>
                <TouchableOpacity style={styles.photo}>
                    <Icon name='md-camera' size={32} color='#D8D9DB' onPress={this.selectImage} />
                </TouchableOpacity>

                <View style={{ marginHorizontal: 32, marginTop: 32, height: 300 }}>
                    <Image source={{ uri: this.state.imageSource }} style={{ width: '100%', height: '100%' }} />
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D8D9DB'
    },
    inputContainer: {
        margin: 32,
        flexDirection: 'row',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 5,
        marginRight: 16
    },
    photo: {
        alignItems: 'flex-end',
        marginHorizontal: 32
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginHorizontal: 16
    },
})