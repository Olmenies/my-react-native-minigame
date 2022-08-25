//TODO: Usar los useRef para generar los máximos y mínimos que se van a usar para generar los número random
//TODO: Generar un GameOver() cuando se encuentro el número
//Ask: ¿Por qué algunas funciones van por afuera del componente y otras por adentro?
//¿Tengo que usar un useEffect para modificar primero el estado y después generar un número random?

//React
import React from 'react';

//React hooks
import {useState, useRef, useEffect} from 'react';

//React native components
import {View, Text, Button} from 'react-native';

//Custom components
import {NumberContainer, Card, GameOverScreen} from '../../index'

//styles
import {styles} from './styles';

const generateRandomNumber = (minNumber, maxNumber, exception) => {
    let tempRandomNumber;

    do{
       minNumber = Math.ceil(minNumber);
       maxNumber = Math.floor(maxNumber);
       tempRandomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
       if(tempRandomNumber === exception){
           break;
       }
   }while(tempRandomNumber === exception);

   return tempRandomNumber;
}

//
//Component start
//
const GameScreen = ({selectedNumber, onGameOver}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(0,100,selectedNumber));
    const [currentTurn, setCurrentTurn] = useState(1);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    //Function used to update the maximum an minimum references from which the random number will be generated
    const updateMinMaxValues = (min, max, ex) => {

        console.log(`currentLow=${currentLow.current}`);
        console.log(`currentHigh=${currentHigh.current}`);
        console.log(`currentGuess=${currentGuess}`);
        console.log(`selectedNumber=${selectedNumber}`);
        console.log('******************************************');

        if((currentGuess < selectedNumber) && (currentGuess > currentLow.current)){
            //console.log('entré acá y voy a modificar el currentLow');
            currentLow.current = currentGuess;
        } else if((currentGuess > selectedNumber) && (currentGuess < currentHigh.current)){
            //console.log('entré acá y voy a modificar el currentHigh');
            currentHigh.current = currentGuess;
        }
    }

    //Below useEffect is used to update the min and max references after the currentGuess is generated
    useEffect(() => {
        //console.log(`initialCurrentGuess=${currentGuess}`);
        updateMinMaxValues(currentGuess);
        setCurrentTurn(currentTurn + 1);
        currentGuess === selectedNumber && onGameOver(2);
    },[currentGuess]);

    return(
        <View>
            <Card>
                <View>
                    <Text style={styles.gameScreenText}>Number generated:</Text>
                    <NumberContainer style={styles.gameScreenNumber}>{currentGuess}</NumberContainer>
                </View>
                <View>
                    <Button
                        title='More'
                        onPress={() => setCurrentGuess(generateRandomNumber(currentGuess, currentHigh.current, currentGuess))}
                    />
                    <Button
                        title='Less'
                        onPress={() => setCurrentGuess(generateRandomNumber(currentLow.current+1, currentGuess, currentGuess))}
                    />
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;
