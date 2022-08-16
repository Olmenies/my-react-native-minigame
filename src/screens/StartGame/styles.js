import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    startGameContainer:{
        flex:1,
        elevation:100,
    },

    startGameTitle:{
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        fontSize:50,
        fontWeight:'bold',
        marginBottom:20,
    },

    startGameInputContainer:{
        justifyContent:'center',
        alignItems:'center',
    },

    startGameInputText:{
        fontSize:20,
    },

    startGameInputInput:{
        fontSize:20,
        marginHorizontal:20,
        textAlign:'center',
    },

    startGameButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginVertical:30,
    },
});
