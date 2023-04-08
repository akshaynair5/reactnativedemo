import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/navbar';
import Addgoal from './components/addgoal';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <Addgoal/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'gray'
  },
});
