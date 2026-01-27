import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <Text>Los 3 albumes que más escucho</Text>
      </View>
      <View style={styles.AlbumContainer}>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={styles.AlbumScrollView}
        >
          <View style={styles.ImageContainer}>
            <Image source={require('./assets/Album1.png')} style={styles.AlbumImage} />
            <Text style={styles.TextAlbumContainer}>Al no poder elegir entre varios álbumes que me gustan, escogí los tres que más escucho y que son de
              géneros distintos. El primero, Project of a Person de Lund, me gusta por el tipo de música (RAP) más que la letra,
              la acústica es muy buena y creo que, en cuestión de velocidad, es bastante relajado.</Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image source={require('./assets/Album2.png')} style={styles.AlbumImage} />
            <Text style={styles.TextAlbumContainer}>El segundo es The Last Laugh de VOILA. Es Rock-Pop, un poco más enérgica y pongo un poco más de
              atención a la letra. El álbum es relativamente reciente, o por lo menos una parte de él, y actualmente diría que es el que más escucho.
            </Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image source={require('./assets/Album3.png')} style={styles.AlbumImage} />
            <Text style={styles.TextAlbumContainer}>El tercero es f.e.a.r de Stand Atlantic. Es un álbum de rock experimental, mucho más movido,
              pero a su vez con cierto nivel de equilibrio entre la música y el ritmo de la letra. Me atrevería a decir que, de los tres,
              es el que menos escucho.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '9%',
  },
  TitleContainer: {
    backgroundColor: '#A2F5F0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
  },
  ImageContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AlbumContainer: {
    flex: 1,
    marginTop: 20,
  },
  AlbumScrollView: {
    flexGrow: 1,
    height: 400,
  },
  AlbumImage: {
    width: width * 0.85,
    height: width * 0.85,
    backgroundColor: '#A2F5F0',
    borderRadius: 10,
    padding: 10,
  },
  TextAlbumContainer: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25%',
    marginHorizontal: '5%',
    textAlign: 'center',
  },
});
