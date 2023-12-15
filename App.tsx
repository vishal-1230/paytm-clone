import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './app/Home';
import Scanner from './app/Scanner';

export default function App() {
  return (
    <SafeAreaView>
      <Home />
      {/* <Scanner /> */}
    </SafeAreaView>
  );
}
