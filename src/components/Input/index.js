import React from 'react';
import {TextInput, Text, View} from 'react-native';
import {styles} from './styles';

const Input = ({style, placeholder, ...props}) => {
    return(
        <View>
            <TextInput
                style={styles.startGameInputInput}
                {...props}
            />
        </View>
    );
}

export default Input;
