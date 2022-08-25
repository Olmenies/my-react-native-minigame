//React
import React from 'react';
//Hooks
import {useState} from 'react';
//React native components
import {View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
//React custom components
import {Header, Card, Input, NumberContainer} from '../../index';
//Custom screens
import {GameScreen} from '../../index';
//Styles
import {styles} from './styles';
import colors from '../../constants/colors';

//
//Component start
//
const StartGameScreen = ({onStartGame}) => {

    //Component's states
    const [introducedInput, setIntroducedInput] = useState('');
    const [validInput, setValidInput] = useState('');
    const [isValid, setIsValid] = useState(false);

    //Function used to verify if the introduced char is an integer while updating the text on the input box
    const verifyCharIsNumber = (introducedChar) => {

        if(!isNaN(introducedChar) && !(introducedChar === ' ')) { //NaN will check whether the introduced input is a number or not
            setIntroducedInput(introducedChar);
        } else {
            console.warn('Char not valid');
        }
    }

    //Function used to reset the input
    const onResetInput = () => {
        setIntroducedInput('');
        setIsValid(false);
    }

    //Function used to save the input on a state if it's valid
    const onValidNumber = () => {

        let convertedInput = parseInt(introducedInput);

        if((isNaN(convertedInput)) || (convertedInput<=0) || (convertedInput>=100)){
            console.warn('Input not valid');
            return
        } else {
            setValidInput(convertedInput);
            setIsValid(true);
        }
    }

    const confirmedOutput = () => {
        return(
            <Card>
                <Text style={styles.startGameConfirmText}>You've selected number:</Text>
                <NumberContainer>{validInput}</NumberContainer>
                <Button
                    title='Confirm and start!'
                    onPress={() => onStartGame(validInput, 1)}
                />
            </Card>
        );
    }

    return(
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.startGameContainer}>

                <Card style={styles.startGameCard}>
                    <Text style={styles.startGameTitle}>Start game</Text>

                    <View style={styles.startGameInputContainer}>
                        <Text style={styles.startGameInputText}>Choose a number</Text>
                        <Input
                            style={styles.startGameInputInput}
                            placeholder='Introduce your number here'
                            keyboardType='numeric'
                            maxLength={2}
                            onChangeText={(input) => verifyCharIsNumber(input)}
                            value={introducedInput}
                        />
                    </View>

                    <View style={styles.startGameButtonContainer}>
                        <Button
                            title='Clean'
                            color='red'
                            onPress={() => onResetInput()}
                        />
                        <Button
                            title='Start'
                            onPress={() => onValidNumber()}
                        />
                    </View>
                </Card>
                {isValid && confirmedOutput()}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGameScreen;
