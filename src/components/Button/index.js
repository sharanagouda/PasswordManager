/**
* @author Sharanagouda Konasirasagi <Sharanagouda.k@robosoftin.com>
* @version 1.0.0
* @summary Custom Button component.
* @description A custom buttopn component is being made. This Button component will be getting used wherever the Button is required instead of creating a new one again and again.
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity from 'react-native for creating our view.
* @import Icon from "react-native-elements" to use font icons in this screen whereever required.
*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "componentStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "./style";

/**
* It is initializing the state with default Props properties.
* title: Represents the title of the Button.
* backgroundColor: Represents the background color of the button.
* iconName: The name of the Icon.
* onPress: Handles the onPress of the Button.
* disabled: Toggling the Button as enable and disable
* style: 
* textColor: Text Color of the Button
*/
const defaultProps = {
    title: "Button",
    backgroundColor: "gray",
    iconName: "",
    onPress: () => { },
    disabled: false,
    style: {},
    textColor: {}
}

/**
* @class Button
* @extends Component
* @summary Represents Custom Buttom.
* @description This is a Custom Component for Button. It extends react Component class for using the functions comes along with it.
*/
class Button extends Component {

    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are making a view for the custom Button.
    */

    render() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.props.onPress} disabled={this.props.disabled}>
                    <View style={[styles.buttonStyle, { backgroundColor: this.props.backgroundColor },{height: this.props.height}, this.props.style]}>
                        <Text style={[styles.buttonTitle, this.props.textColor, this.props.textStyle]}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

Button.defaultProps = defaultProps;

export default Button;