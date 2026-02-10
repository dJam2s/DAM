import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

const { width } = Dimensions.get('window');

export default function App() {
  const [numLike, setNumLike] = useState(322);
  const [likeColor, setLikeColor] = useState('black');
  const [guardado, setGuardado] = useState('black');

  const handleLikesAndColor = () => {

    if (likeColor === 'black') {
      setNumLike(numLike + 1);
      setLikeColor('red');
    } else {
      setNumLike(numLike - 1);
      setLikeColor('black');
    }
  }

  const handleGuardado = () => {
    if (guardado === 'black') {
      setGuardado('#0011ffff');
    } else {
      setGuardado('black');
    }
  }


  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require('./assets/instagram.png')}
          style={styles.logoImagen}

        />
      </View>

      <View style={styles.contenido}>
        <Image source={require('./assets/Pantallafotos.png')} style={styles.Pantallafotos} />
        <View style={styles.barraIconos}>
          <View style={styles.barraIconosIzquierda}>
            <TouchableOpacity onPress={handleLikesAndColor}>
              <Ionicons name="heart-outline" size={28} color={likeColor} style={styles.icono} />
            </TouchableOpacity>
            <Text style={styles.numLike}>{numLike}</Text>
            <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.icono} />
            <Ionicons name="paper-plane-outline" size={24} color="black" style={styles.icono} />
          </View>
          <View style={styles.barraIconosDerecha}>
            <TouchableOpacity onPress={handleGuardado}>
              <Ionicons name="bookmark-outline" size={24} color={guardado} style={styles.icono} />
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <View style={styles.menu}>
        <Ionicons name="home" size={28} color="black" />
        <Ionicons name="search" size={28} color="black" />
        <Ionicons name="add-circle-outline" size={28} color="black" />
        <Ionicons name="heart-outline" size={28} color="black" />
        <Ionicons name="person-circle-outline" size={28} color="black" />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
    marginTop: 30,
  },
  logoImagen: {
    width: 120,
    height: 40,
  },
  contenido: {
    flex: 1,
  },
  Pantallafotos: {
    width: width,
    height: width,
  },
  barraIconos: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icono: {
    marginRight: 15,
  },
  menu: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#dbdbdb',
  },
  barraIconosIzquierda: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30%',
    gap: 8,
  },
  barraIconosDerecha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  numLike: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});