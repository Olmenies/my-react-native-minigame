import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    headerContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:80,
        backgroundColor:colors.primary,
    },

    headerText:{
        fontSize:20,
        color:'white',
        //fontWeight:'bold', FONT WEIGHT IS NOT COMPATIBLE WITH FONT FAMILY
        fontFamily:'LatoBold',
    },
});
