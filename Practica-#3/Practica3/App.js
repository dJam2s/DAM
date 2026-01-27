import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <Text>Proyect of a Person</Text>
      </View>
      <View style={styles.AlbumContainer}>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={styles.AlbumScrollView}
        >
          <View style={styles.ImageContainer}>
            <Image source={require('./assets/Album1.png')} style={styles.AlbumImage} />
          </View>
          <View style={styles.ImageContainer}>
            <Image source={require('./assets/Album2.png')} style={styles.AlbumImage} />
          </View>
          <View style={styles.ImageContainer}>
            <Image source={require('./assets/Album3.png')} style={styles.AlbumImage} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.TextAlbumContainer}>
        <Text></Text>
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
  AlbumContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextAlbumContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AlbumScrollView: {
    flexGrow: 1,
    height: 400,
  },
  AlbumImage: {
    width: width * 0.8,
    height: 300,
    backgroundColor: '#A2F5F0',
    borderRadius: 10,
  },
});
