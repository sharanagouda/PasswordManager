/**
 * @author Sharangouda Konasirasagi<Sharanagouda.k@robosoftin.com>
 * @version 1.0.0
 * @summary Home screen for the application.
 * @description The screen shows the Home
 * first login to application. using credentials email and password,
 * The screen uses react npm modules and also few custom components.
 */

/**
 * @import React compoment from "react" for creating custom react component and to use lifecycle
 * hooks come along with react.
 * @import View, Text from "react-native" for creating our view.
 * @import connect from "react-redux" for connecting react compoenent with redux which will convert
 * our component as container component.
 */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TextInput,
  Clipboard,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  TitleDash,
  DropDown,
  ClickView,
  Toolbar,
  ListItem,
  ModalViwComponent,
} from '../../components';
import styles from './styles';
import {Images} from '../../assets/images';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {navigateTo} from '../../utils';
import userData from '../../dataBase/Userdb.json';

const SearchBar = props => {
  let {onChange, search} = props;
  return (
    <View style={[styles.SubHeader, styles.subHeaderSpacing]}>
      <TextInput
        style={styles.searchInput}
        onChangeText={onChange}
        value={search}
        placeholder={'Type keywords to search'}
        keyboardType={'default'}
      />
      <Image source={Images.search_arrow} style={styles.SearchIcon} />
    </View>
  );
};
SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

const SubHeader = props => {
  let {search, searchOnChange, isSearchActive, categoryOnChange, count} = props;
  return (
    <View>
      {isSearchActive ? (
        <SearchBar search={search} onChange={searchOnChange} />
      ) : (
        <View style={styles.SubHeader}>
          <TitleDash />
          <DropDown count={count} onChange={categoryOnChange} />
        </View>
      )}
    </View>
  );
};
SubHeader.propTypes = {
  searchOnChange: PropTypes.func.isRequired,
};
SubHeader.defaultProps = {
  search: false,
};
const FAB = props => {
  return (
    <View style={styles.fab}>
      <ClickView onPress={() => navigateTo('addsite')}>
        <Image source={Images.add} style={styles.fabImage} />
      </ClickView>
    </View>
  );
};

FAB.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const ModalView = props => {
  return (
    <Modal
      visible={props.Visibility}
      transparent={true}
      animationType="fade"
      onRequestClose={() => {
        this.Cancel_Custom_Alert(!this.state.Visibility);
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 4,
        }}>
        <View
          style={{
            backgroundColor: '#FFF',
            height: 300,
            width: '60%',
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 5,
          }}>
          <Text style={styles.Alert_Message}> Permissions </Text>
          <View style={{flexDirection: 'row', height: '20%'}}>
            <TouchableOpacity
              // onPress={this.onPressUpdateLanguage(!this.state.Visibility)}
              onPress={() => {
                this.Ok_Custom_Alert(!props.Visibility);
              }}
              activeOpacity={0.7}>
              <Text style={styles.OkTextStyle}> OK </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      clipboardContent: null,
      search: '',
      category: 'social',
      isSearchActive: false,
      modalVisible: false,
      Alert_Visibility: false,
      data: userData,
    };
  }

  readFromClipboard = async () => {
    //To get the text from clipboard
    const clipboardContent = await Clipboard.getString();
    this.setState({clipboardContent});
  };

  writeToClipboard = async () => {
    //To copy the text to clipboard
    await Clipboard.setString(this.state.text);
    alert('Copied to Clipboard!');
  };

  clickEventListener = item => {
    Alert.alert('Message', 'Item clicked. ' + item.name);
  };
  navigateToWebView = data => {
    console.log('sdfsd f ', data);
    //navigateTo('webview', {url: `${data}`});
  };

  searchOnChange = input => {
    this.setState({
      search: input,
    });
  };

  categoryOnChange = input => {
    this.setState({
      category: input,
    });
  };
  filter = isSearch => {
    const {search, category, data} = this.state;
    let filterCondition = isSearch ? search : category;
    let last = data.filter(item => {
      return item.sector === category;
    });
    return last;
  };
  subHeaderParams = () => {
    const {search, isSearchActive} = this.state;
    return {
      searchOnChange: this.searchOnChange,
      isSearchActive: isSearchActive,
      search: search,
      categoryOnChange: this.categoryOnChange,
      count: this.filter().length,
    };
  };

  _renderItem = ({item}) => {
    return (
      <View style={styles.siteRenderItems} key={item.url}>
        <Image
          source={Images[item.siteName]}
          resizeMode="contain"
          style={styles.siteName}
        />
        <View style={styles.siteTitle}>
          <Text style={styles.siteTitler}>{item.title}</Text>
          <TouchableOpacity
            onPress={() => {
              this.readFromClipboard;
            }}
            style={styles.siteCopier}>
            <Image source={Images.copy} style={styles.siteCopierIcon} />
            <Text style={styles.siteCopyTitle}>{'Copy Password'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.followButton}
          onPress={() => this.navigateToWebView(item.defaultProps)}>
          <Text style={styles.siteUrlTitle}>{item.url}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    const {data} = this.state;
    return (
      <View style={[{...StyleSheet.absoluteFill}, styles.container]}>
        <Toolbar
          toolbarName="Password Manager"
          onPress={() =>
            this.setState({
              isSearchActive: !this.state.isSearchActive,
            })
          }
          onPressProfile={() =>
            this.setState({
              Visibility: !this.state.Visibility,
            })
          }
        />
        <SubHeader {...this.subHeaderParams()} />
        <FlatList
          data={this.filter()}
          style={styles.siteList}
          renderItem={this._renderItem}
        />
        <FAB onClick={() => this.addSites()} />
        <ModalView Visibility={this.state.Visibility} />
      </View>
    );
  }
}

export default Home;
