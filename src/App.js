import { SafeAreaView, Text } from 'react-native';

import {Header, StartGame} from './index';

import {styles} from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <StartGame/>
    </SafeAreaView>
  );
}
