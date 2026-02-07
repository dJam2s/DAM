import { StyleSheet, View, Image, Dimensions, SafeAreaView } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require('./assets/instagram.png')}
          style={styles.logoImagen}
        />
      </View>

      <View style={styles.contenido}>
        <Image source={require('./assets/User.png')} style={styles.User} />
        <Image source={require('./assets/Pantallafotos.png')} style={styles.foto} />
        <Image source={require('./assets/Likes.png')} style={styles.fotoLike} resizeMode="contain" />
        <Image source={require('./assets/Comentarios.png')} style={styles.comentarios} resizeMode="contain" />
      </View>

      <View style={styles.menu}>
        <Image
          source={require('./assets/Menu.png')}
          style={styles.menuImagen}
          resizeMode="contain"
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
    marginTop: 30,
  },
  logoImagen: {
    width: 120,
    height: 40,
  },
  User: {
    width: width,
    height: 60,
  },
  contenido: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  foto: {
    marginTop: 30,
    width: width,
    height: width,
  },
  fotoLike: {
    width: width,
    height: 100,
    alignSelf: 'center',
  },
  comentarios: {
    width: width,
    height: 60,
    alignSelf: 'center',
  },
  menu: {
    height: 70,
    borderTopWidth: 0.5,
    borderTopColor: '#dbdbdb',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  menuImagen: {
    width: width,
    height: 50,
  },
});