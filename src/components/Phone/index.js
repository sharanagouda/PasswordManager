/**
*  @author Sharanagouda Konasirasagi <Sharanagouda.k@robosoftin.com>
* @version 1.0.0
* @summary Custom Phone component.
* @description A custom Phone component is being made. this is the input field
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity creating our view.
*/

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "componentStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "./styles";

const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    value: "",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false,
    returnKeyType: "next",
    label: "Label",
    style: {},
    isPassword: false,
    onChangeText:"",
    onIconPress: () => {}
}

/**
* Represents Phone.
* @class Phone
* @extends Component
*/
class Phone extends Component {
    constructor(props) {
      super(props);
      this.mapElement = this.mapElement.bind(this);
      this.state = {
           text:''
      }
    }
    
    mapElement(node) {
        this.props.mapElement(node);
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={[styles.textPhoneInputContainer, this.props.style]}>
                 <View style={{flexDirection: "row",height:40,paddingLeft:55,marginTop:10,backgroundColor:"#FFFFFF"}}>
                    <TextInput
                        style={[styles.textPhoneInputBox, {marginLeft:0,width: "80%",}]}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="rgba(51, 51, 51)"
                        selectionColor= "rgb(51, 51, 51)"
                        returnKeyType={this.props.returnKeyType}
                        secureTextEntry={this.props.secureTextEntry}
                        keyboardType= {this.props.keyboardType}
                        maxLength= {13}
                        value= {this.props.value}
                        onChangeText= {this.props.onChangeText} 
                         />
                </View>
                
            </View>
        );
    }
}

Phone.defaultProps = defaultProps;

export default Phone;