import {StyleSheet, Platform} from "react-native";

const styles = StyleSheet.create({
    textInputContainer: {
        // height:60,
        // flexDirection:'row',
        paddingHorizontal: 16,
        marginTop: 11
    },
    textInputLabelscan: {
        color: "black",
        fontSize: 14,
        width: '40%',
    },
    textInputBoxscan: {
        paddingHorizontal: 10,
        borderBottomColor: "rgb(204, 204, 204)",
        paddingBottom: 1,
        width: '60%',
        fontSize: 11
    },
    passwordEyeIconCont: {
        position: "absolute",
        bottom: 6,
        right: 27,
        zIndex: 1
    },
})

export default styles;