import React, { useRef, useState } from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const HEADER_HEIGHT = 300;

const DetailScreen = () => {
  const destinasi = {
    nama: 'Labuan Bajo',
    lokasi: 'Indonesia',
    rating: 5.0,
    deskripsi:
      'From crystal clear water to breathtaking sunsets, Labuan Bajo is calm. Explore hidden islands, swim with manta rays, and create memories that last a lifetime.',
    harga: 10000,
    gambar:
      'https://images.unsplash.com/photo-1598237601461-2bafcd1b2931?auto=format&fit=crop&w=1200&q=80',
  };

  const scrollY = useRef(new Animated.Value(0)).current;
  const [jumlahTiket, setJumlahTiket] = useState(1);
  const totalHarga = jumlahTiket * destinasi.harga;

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT / 2],
    extrapolate: 'clamp',
  });

  const imageScale = scrollY.interpolate({
    inputRange: [-150, 0],
    outputRange: [1.5, 1],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      {/* Header Parallax */}
      <Animated.View
        style={[
          styles.headerImageContainer,
          { transform: [{ translateY: headerTranslate }] },
        ]}
      >
        <Animated.Image
          source={{
            uri: destinasi.gambar || 'https://via.placeholder.com/600x400',
          }}
          style={[styles.headerImage, { transform: [{ scale: imageScale }] }]}
          resizeMode="cover"
        />

        {/* Top bar transparan */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.iconCircle}>
            <Ionicons name="arrow-back" size={22} color="#000" />
          </TouchableOpacity>
          <View style={styles.weather}>
            <Ionicons name="sunny" size={20} color="#fff" />
            <Text style={styles.weatherText}>24°C</Text>
          </View>
        </View>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{destinasi.rating}</Text>
        </View>
      </Animated.View>

      {/* Konten Scroll */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT - 40,
          paddingBottom: 100,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <View style={styles.content}>
          <Text style={styles.destinationName}>{destinasi.nama}</Text>
          <Text style={styles.location}>{destinasi.lokasi}</Text>
          <Text style={styles.description}>{destinasi.deskripsi}</Text>

          {/* Review */}
          <View style={styles.reviewBox}>
            <Text style={styles.reviewName}>by Rizq starboy</Text>
            <Text style={styles.reviewText}>
              "Wow amazing yahh, best experience in my life. very worth it, I like it!"
            </Text>
          </View>

          {/* Recommendation */}
          <Text style={styles.sectionTitle}>Recommendation in Bajo</Text>
          <View style={styles.recommendationCard}>
            <Text style={styles.recommendationText}>
              Phinisi Luxury Private Trip
            </Text>
            <Text style={styles.recommendationSub}>Complimentary pickup</Text>
          </View>
          <View style={styles.recommendationCard}>
            <Text style={styles.recommendationText}>Komodo Island Tour</Text>
            <Text style={styles.recommendationSub}>Local guide included</Text>
          </View>
        </View>
      </Animated.ScrollView>

      {/* Bottom Booking Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => jumlahTiket > 1 && setJumlahTiket(jumlahTiket - 1)}
          >
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterNumber}>{jumlahTiket}</Text>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => setJumlahTiket(jumlahTiket + 1)}
          >
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Total Amount</Text>
          <Text style={styles.priceValue}>${totalHarga.toLocaleString()}</Text>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerImageContainer: {
    position: 'absolute',
    width: '100%',
    height: HEADER_HEIGHT,
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  headerImage: {
    width: '100%',
    height: HEADER_HEIGHT,
  },
  topBar: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 40 : 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconCircle: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
  },
  weather: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  weatherText: {
    color: '#fff',
    marginLeft: 5,
  },
  ratingContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  rating: {
    marginLeft: 4,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  destinationName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#e63946',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#333',
    marginBottom: 20,
    lineHeight: 22,
  },
  reviewBox: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  reviewName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewText: {
    fontStyle: 'italic',
    color: '#444',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recommendationCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 15,
  },
  recommendationText: {
    fontWeight: 'bold',
  },
  recommendationSub: {
    color: '#777',
    fontSize: 13,
    marginTop: 4,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    width: width,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterBtn: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 8,
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  counterNumber: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  priceContainer: {
    flex: 1,
    marginLeft: 20,
  },
  priceLabel: {
    color: '#888',
    fontSize: 12,
  },
  priceValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  bookText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
