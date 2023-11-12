import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { supabase } from '../../repository/supabase';

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

function MinhasDoacoes({ route, navigation }) {
    const { user_id } = route.params;

    const [info, setInfo] = useState([]);

    const [isDataRendered, setIsDataRendered] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase
            .from("TB_DOACOES")
            .select('id,criada_em,quantidade_kg,status')
            .eq('user_id', user_id);

        setInfo(data);
        setIsDataRendered(true);
        }
        fetchData();
    }, []);

    const setColor = (status) => {
        if (status === 'Pendente') return 'blue'
        else if (status === 'Coletada') return 'green'
        else return 'red'
    };

    const Item = ({criada_em, quantidade, status}) => (
        <View style={{marginBottom: 20, borderWidth: 2, width: "100%", backgroundColor: 'white'}}>
          <Text style={{ fontSize:18}}>Postada em: {criada_em.toLocaleDateString('pt-BR', options)} às {criada_em.getHours()}:{criada_em.getMinutes()}</Text>
          <Text style={{ fontSize:18}}>Quantidade: {quantidade}Kg</Text>
          <Text style={{ fontSize:18, textAlign: 'right', color: setColor(status)}}>{status}</Text>
        </View>
      );

    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size="large" animating={!isDataRendered} />
            <FlatList
                data={info}
                renderItem={({item}) => <Item criada_em={ new Date(item.criada_em) } quantidade={ item.quantidade_kg } status={ item.status } />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default MinhasDoacoes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7E1D8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
