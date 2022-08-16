import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import Header from '../../components/Header/index';
import Card from '../../components/Card/index';

import {styles} from './styles';

const StartGame = () => {
    return(
        <View style={styles.startGameContainer}>
            <Header title='Guess the number!'/>

            <Card style={styles.startGameCard}>
                <Text style={styles.startGameTitle}>StartGame</Text>

                <View style={styles.startGameInputContainer}>
                    <Text style={styles.startGameInputText}>Choose a number</Text>
                    <TextInput
                        style={styles.startGameInputInput}
                        placeholder='Introduce your number here'
                    />
                </View>

                <View style={styles.startGameButtonContainer}>
                    <Button
                        title='Clean'
                        color='red'
                    />
                    <Button
                        title='Start'
                    />
                </View>
            </Card>

        </View>
    )
}

export default StartGame;
