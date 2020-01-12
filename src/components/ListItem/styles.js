import {StyleSheet, Platform} from "react-native";
import {scale} from "../../utils/Scale";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection:"column",
    },
    cardContent: {
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
    },
    image:{
      width:50,
      height:50,
      borderRadius:45,
      borderWidth:2,
      borderColor:"#ebf0f7"
    },
  
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor:"white",
      height:110,
      borderRadius:10,
      flexDirection:"column",
    },
    name:{
      fontSize:18,
      paddingBottom:10,
      alignSelf:'center',
      color:"#0E85FF",
      fontWeight:'bold'
    },
    count:{
      fontSize:14,
      alignSelf:'center',
      color:"#0E85FF",
    },
    copyToClipboard: {
        color:"#0E85FF",
    },
    followButton: {
      marginTop:5,
      height:35,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      backgroundColor: "rgba(0,0,0,0.02)",
      borderColor:"#dcdcdc",
    },
    followButtonText:{
      color: "#dcdcdc",
      fontSize:12,
    },
    siteCopierIcon: {
       width: 20, 
       height: 20,
        marginRight: scale(4)
       },
  });

export default styles;