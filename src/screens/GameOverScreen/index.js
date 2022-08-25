//React.JS
import React from 'react';
//React Native components
import {View, Text, Button, Image} from 'react-native'
//Custom components
import {Card} from '../../index';
//Styles
import {styles} from './styles';

const GameOverScreen = ({selectedNumber, onRestart}) => {

    //<Image source={require('../../../assets/images/testImage.jpg')}/>

    return(
        <View>
            <Card>
                <Text style={styles.gameOverTitle}>Well done!</Text>
                <Text style={styles.gameOverText}>The number was: {selectedNumber}</Text>
                <Button title='Start new game' onPress={onRestart}/>
            </Card>
        </View>
    );
}

export default GameOverScreen;
