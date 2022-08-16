import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {styles} from './styles';

const Card = ({children, style}) => {
    return(
        <View style={{...style, ...styles.startGameCard}}>
            {children}
        </View>
    );
}

export default Card;
