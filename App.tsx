//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [countP, setCountP] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text>coutIncrease = {count}</Text>
      <Text>coutPressableTest = {countP}</Text>
      <Pressable style={styles.button}
        onPress={() => setCountP(countP + 1)}>
        <Text style={{ color: 'white', padding: 3 }}> Click </Text>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    fontSize: 15,
    paddingHorizontal: 30,
  },
  header1: {
    color: 'red',
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 20,
    fontWeight: 700,
  },
  header1Child: {
    color: 'green',
    fontSize: 20,
    fontWeight: '400',
  },
  button: {
    borderColor: 'blue',
    backgroundColor: 'black',
    borderWidth: 2,
  }
});
