import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

defaultProps = {
  title: '',
  navIcon: '',
  onIconClicked: '',
};

class Toolbar extends Component {
  render() {
    return (
      <View style={styles.toolbarContainer}>
        <View style={styles.menubar}>
          <TouchableOpacity onPress={this.props.openDrawer}>
            <Image source={require('../../assets/images/burger_menu.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.screenTitlebar}>
          <Image source={require('../../assets/images/PASS_MANAGER.png')} />
        </View>
        <View style={styles.searchIcon}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Image source={require('../../assets/images/search.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.cloudIcon}>
          <TouchableOpacity onPress={this.props.openDrawer}>
            <Image source={require('../../assets/images/sync_icn.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileIcon}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Image source={require('../../assets/images/profile.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Toolbar;

Toolbar.defaultProps = defaultProps;
