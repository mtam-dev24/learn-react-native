//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState<string>("mt dz");
  const [age, setAge] = useState<number>(0)
  return (
    <View style={styles.container}>

      {/* test input name */}
      <View>
        <Text>Name = {name}</Text>
        <TextInput
          style={styles.textInput}
          multiline
          autoCapitalize={"words"}
          onChangeText={(nameValue) => setName(nameValue)}
        />
      </View>

      {/* text input age */}
      <View>
        <Text>Age = {age}</Text>
        <TextInput
          style={styles.textInput}
          keyboardType={"numeric"}
          maxLength={2}
          onChangeText={(ageValue) => setAge(+ageValue)}
        />
      </View>

      {/* count */}
      <View>
        <Text>coutIncrease = {count}</Text>
        <Button color={"green"} title="Increase" onPress={() => setCount(count + 1)} />
      </View>
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
  button: {
    backgroundColor: "black",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 2,
    width: 300,
    padding: 10,
  },
});
