import React, { Component } from 'react';
import { View, Text,  TouchableOpacity, Image } from 'react-native';

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
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Image source={require('../../assets/images/burger_menu.png')} />
                    </TouchableOpacity>
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
