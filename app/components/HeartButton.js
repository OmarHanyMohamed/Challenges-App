import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeartButton extends Component {

    constructor(props) {
        super(props);
        this.state = { addedToFavourites: false };
        this.addToFav = this.addToFav.bind(this);
    }

    addToFav() {
        this.setState({
            addedToFavourites: !this.state.addedToFavourites
        });
    }

    render() {
        const { addedToFavourites } = this.state;
        return (
            <TouchableOpacity onPress={this.addToFav}>
                <Icon
                    name={addedToFavourites ? 'heart' : 'heart-o'}
                    size={25}
                    color={addedToFavourites ? 'red' : 'black'}
                />
            </TouchableOpacity>
        )
    }
}
