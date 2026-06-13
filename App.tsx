//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header1}>
          Tiêu đề 1
          <Text style={styles.header1Child}>
            Tiêu đề con
          </Text>
        </Text>
      </View>
      <Text>Heloo !</Text>

      <Text style={styles.header1Child}>Nội dung</Text>
      <Text style={styles.content}>Thẻ view giống thẻ div, thẻ text giống thẻ p. Nhưng style của thẻ con ko kế thừa từ cha nếu nó có style riêng</Text>
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
  }
});
