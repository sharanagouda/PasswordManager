import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, Image } from 'react-native';

import styles from './style';

defaultProps = {
    title: '',
    navIcon: '',
    onIconClicked: '',
};

class SubToolbar extends Component {
    render() {
        return (
            <View style={styles.toolbarContainer}>
                <View style={styles.menubar}>
                    <TouchableNativeFeedback onPress={this.props.openDrawer}>
                        <Image source={require('../../assets/images/burger_menu.png')} />
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.screenTitlebar}>
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}

export default SubToolbar;

SubToolbar.defaultProps = defaultProps;
