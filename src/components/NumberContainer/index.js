//React
import React from 'react';
//React native components
import {View, Text} from 'react-native';
//Styles
import {styles} from './styles';

const NumberContainer = ({children, style}) => {

    console.log(styles);
    return(
        <View style={style}><Text style={styles.numberContainerText}>{children}</Text></View>
    );
}

export default NumberContainer;
