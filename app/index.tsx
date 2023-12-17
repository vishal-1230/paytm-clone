import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './Home';
import Pay from './Pay';
import UPI from './UPI';
import Paid from './Paid';

export default function App() {
  return (
    // <SafeAreaView>
      // <Home />
      <Paid />
    // </SafeAreaView>
  );
}
