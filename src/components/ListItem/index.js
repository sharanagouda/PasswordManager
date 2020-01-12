import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert, Clipboard
} from 'react-native';
import styles from "./styles";
import Images from "../../assets/images";
import {navigateTo} from "../../utils"
class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
          text: '',
          clipboardContent: null,
        };
      }

      readFromClipboard = async () => {
        //To get the text from clipboard
        const clipboardContent = await Clipboard.getString();   
        this.setState({ clipboardContent }); 
      };

      writeToClipboard = async () => {
        //To copy the text to clipboard
        await Clipboard.setString(this.state.text);
        alert('Copied to Clipboard!');
      };

  clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. '+item.name);
  }
  navigateToWebView = (data) =>{
      navigateTo("webview",{url: "hi"})
  }


  render() {
    console.log(this.props)
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener("item")}}>
            <View style={styles.cardContent}>
                <Image style={styles.image} source={Images[this.props.siteName]}/>
                <View>
                    <Text style={styles.name}>{this.props.title}</Text>
                    <TouchableOpacity onPress={()=> {this.readFromClipboard}}>
                        <Image source={Images.copy} style={styles.siteCopierIcon} />
                        <Text style={styles.copyToClipboard}>{'Copy Password'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.followButton} onPress={()=> this.navigateToWebView("url")}>
                    <Text style={styles.followButtonText}>{this.props.url}</Text>  
            </TouchableOpacity>
            </TouchableOpacity>
        </View>
        
    );
  }
}

export default ListItem;

