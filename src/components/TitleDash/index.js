import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from "prop-types";
import { verticalScale, scale, moderateScale } from '../../utils/Scale';
import { Colors } from '../../styles';

const TitleDash = props => {
    let { title } = props;
    return (
        <View>
            <Text style={styles.titleText}>
                {title}
            </Text>
            <View style={styles.titleBar} />
        </View>
    );
}
TitleDash.propTypes = {
    title: PropTypes.string.isRequired
}
TitleDash.defaultProps = {
    title: 'Sites'
}

const styles = StyleSheet.create({
    titleText: {
        marginTop: scale(1),
        fontSize: scale(24),
        color: Colors.black,
        fontWeight: '500',
        backgroundColor: Colors.white,
        textAlign: "center"
    },
    titleBar:{ height: 5, borderRadius: 3, backgroundColor: Colors.yellow, width: '50%' }
});
export default TitleDash;