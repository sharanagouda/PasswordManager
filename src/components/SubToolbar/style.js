import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    toolbarContainer: {
        height: 56,
        backgroundColor: '#0E85FF',
        width: '100%',
        flexDirection: 'row',
        elevation: 4,
    },
    menubar: {
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        marginHorizontal: 16,
    },
    screenTitlebar: {
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        width: 66,
    },
    titleStyle: {
        color: "#FFF",
        fontSize: 17
    },
    searchIcon: {
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        width: 16,
        marginHorizontal: 16,
        paddingLeft: 90
    },
    cloudIcon: {
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        width: 16,
        marginHorizontal: 16,
    },
    profileIcon: {
        height: 56,
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: 16,
        marginHorizontal: 16,
    },
    menifestContainer: {
        flexDirection: 'row',
        backgroundColor: '#ff7961',
        alignItems: 'center',
        padding: 8,
    },
    menifestIcon: {
        width: 40,
        height: 40,
        backgroundColor: '#cccccc',
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    iconImage: {
        width: 30,
        height: 30,
    },

    toolbarTitle: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    textHeaderStyle: {
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
    },
    listContainer: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b2',
        alignItems: 'center',
    },
    textList: {
        color: '#4f603c',
    },
});

export default styles;
