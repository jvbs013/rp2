import React, { useState } from 'react';
import { View, Text, Modal, Button, TextInput, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useData } from '../../DataContext'; // Importe useData

Icon.loadFont();

function HomeScreen({ navigation }) {
  const { username, setUsernameContext } = useData(); // Use o hook useData

  const [userType, setUserType] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  const [localUsername, setLocalUsername] = useState('');

  const handleButton = (value) => {
    setUserType(value);

    if (value === 'Coletor') {
      setModalVisible(true);
    } else {
      setModalVisible(false);
      setLocalUsername('');
    }
  }

  const handleUsernameSubmit = () => {
    setUsernameContext(localUsername); // Atualize o username usando o contexto
    Alert.alert(`Olá ${localUsername}, seja bem-vindo!`);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Seja bem-vindo {username}!</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon name="info" size={25} color="blue" />
            <Text>Selecione um tipo de usuário</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title='Doador'
                style={{ marginRight: 20 }}
                onPress={() => handleButton('Doador')}
              />
              <Button
                title={'Coletor'}
                style={{ marginRight: 70 }}
                onPress={() => handleButton('Coletor')}
              />
            </View>

            {userType === 'Coletor' && (
              <>
                <Text>Inserir o Username:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  value={localUsername}
                  onChangeText={text => setLocalUsername(text)}
                />
                <Button title="Enter" onPress={handleUsernameSubmit} />
              </>
            )}
          </View>
        </View>
      </Modal>

      <View style={{ flexDirection: 'row', marginTop: 500 }}>
      <Icon
        onPress={() => navigation.navigate(userType === 'Doador' ? 'Cadastrar Doação' : 'Doações disponíveis', {user_id: userType === 'Doador' ? 1 : 2})}
        style={{ marginRight: 70 }}
        name="add"
        size={70}
        color="black" />
        <Icon
        onPress={() => navigation.navigate(userType === 'Doador' ? 'Minhas Doações' : 'Minhas reservas', {user_id: userType === 'Doador' ? 1 : 2})}
        style={{ marginLeft: 70 }}
        name="list-alt"
        size={70}
        color="black" />
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
