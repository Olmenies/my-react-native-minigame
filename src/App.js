//React.JS hooks
import {useState} from 'react';
//Expo fonts hooks
import {useFonts} from  'expo-font';
//React Native components
import { SafeAreaView, StatusBar, Text } from 'react-native';
//Custom components
import {Header} from './index';
//Screens
import {GameScreen, GameOverScreen, StartGameScreen} from './index';
//Styles
import {styles} from './styles';

export default function App() {

    const [selectedNumber, setSelectedNumber] = useState();
    const [pageSelector, setPageSelector] = useState(0);

    const [loaded] = useFonts({
        Lato: require('../assets/fonts/Lato/Lato-Regular.ttf'),
        LatoBold: require('../assets/fonts/Lato/Lato-Bold.ttf'),
        LatoLight: require('../assets/fonts/Lato/Lato-Light.ttf'),
        LatoBlack: require('../assets/fonts/Lato/Lato-Black.ttf')
    });

    //We don't renderize anything until the fonts are loaded
    if(!loaded) {
        return <Text>Waiting for the fonts to load</Text>;
    }

    const handlerStartGame = (receivedFromChildNumber, toPage) => {
        setSelectedNumber(receivedFromChildNumber);
        setPageSelector(1);
    }

    const handlerRestart = () => {
        console.log('handlerRestart was invoked');
        setSelectedNumber(null);
        setPageSelector(0);
    }

    const handlerGameOver = (toPage) => {
        setPageSelector(toPage);
        console.log('handlerGameOver was invoked');
    }

    let renderedHeader = <Header title='Start game'/>
    let renderedScreen = <StartGameScreen onStartGame={(receivedFromChildNumber) => handlerStartGame(receivedFromChildNumber)}/>

    if(pageSelector === 0) {
        renderedHeader = <Header title='Start game'/>
        renderedScreen = <StartGameScreen onStartGame={(receivedFromChildNumber, toPage) => handlerStartGame(receivedFromChildNumber, toPage)}/>
    } else if(pageSelector === 1) {
        renderedHeader = <Header title='Guess the number'/>
        renderedScreen = <GameScreen selectedNumber={selectedNumber} onGameOver={(toPage) => handlerGameOver(toPage)}/>
    } else if(pageSelector === 2) {
        renderedHeader = <Header title='Game over'/>
        renderedScreen = <GameOverScreen selectedNumber={selectedNumber} onRestart={() => handlerRestart()}/>
    }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar/>
        {renderedHeader}
        {renderedScreen}
    </SafeAreaView>
  );
}
