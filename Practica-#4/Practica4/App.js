import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const pageWidth = width;
    const pageIndex = Math.round(scrollPosition / pageWidth);

    if (currentIndex !== pageIndex) {
      setCurrentIndex(pageIndex);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Daitoshi</Text>
      </View>

      <View style={styles.contentContainer}>
        <Image source={require('./assets/Daitoshi.png')} style={styles.image} />
      </View>

      <View style={styles.descriptionContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={handleScroll}

        >
          <View style={styles.descriptionTextContainer}>
            <Text style={styles.descriptionText}>Este juego es Daitoshi, es un juego de estrategia,
              es sobre negocios y quien lleva mejor el control de los recursos, lo que no muchas veces se menciona
              es que es muy complejo, tan solo poner el tablero te lleva minimo media hora.</Text>
          </View>
          <View style={styles.descriptionTextContainer}>
            <Text style={styles.descriptionText}>Daitoshi te sumerge en una era industrial steampunk inspirada en
              el Japón tradicional. Deberás liderar la construcción de una megaciudad gestionando ingenieros y
              tecnología en un tablero modular, donde la clave es optimizar la producción de vapor y planificar
              tus movimientos con precisión quirúrgica para expandir tus distritos.</Text>
          </View>
          <View style={styles.descriptionTextContainer}>
            <Text style={styles.descriptionText}>Una curiosidad fascinante es la mecánica de los Yōkai: espíritus
              que se enfurecen conforme explotas los recursos naturales. Con un arte que evoca la era Meiji y un
              estilo visual similar a Studio Ghibli, el juego te obliga a equilibrar el avance tecnológico con la
              preservación espiritual para evitar las consecuencias de la naturaleza.</Text>
          </View>
        </ScrollView>

        <View style={styles.PaginationContainer}>
          {[0, 1, 2].map((i) => (
            <View
              key={i}
              style={[
                styles.PaginationDot,
                currentIndex === i ? styles.dotActive : styles.dotInactive
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#da8b1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    marginBottom: '2%',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: width,
  },
  image: {
    width: width * 0.75,
    height: height * 0.4,
    borderRadius: 10,
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: width,
  },
  descriptionTextContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: '15%',
  },
  PaginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  PaginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333',
    marginHorizontal: 4,
  },
  dotActive: {
    opacity: 1,
    transform: [{ scale: 1.2 }],
  },
  dotInactive: {
    opacity: 0.3,
  }
});