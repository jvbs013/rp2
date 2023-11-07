import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }} >Seja bem vindo!</Text>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', marginTop: 550 }}>
        <Icon style={{ marginRight: 80 }} name="add" size={80} color="black" />
        <Icon name="home" size={80} color="black" />
        <Icon style={{ marginLeft: 80 }} name="list-alt" size={80} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7E1D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
