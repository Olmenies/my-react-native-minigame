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

    startGameButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginVertical:30,
    },

    startGameConfirmText:{
        textAlign:'center',
        fontSize:20,
        fontFamily:'Lato',
    }
});
