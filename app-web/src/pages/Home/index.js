import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }} >Seja bem vindo!</Text>
      <View style={{ flexDirection: 'row', marginTop: 500 }}>
        <Icon onPress={() => navigation.navigate('Cadastrar Doação')} style={{ marginRight: 70 }} name="add" size={70} color="black" />
        <Icon style={{ marginLeft: 70 }} name="list-alt" size={70} color="black" />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D7E1D8',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });