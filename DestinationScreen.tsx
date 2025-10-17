import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const DestinationScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 10000;

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <ImageBackground source={require("../../../assets/lb.jpg")} style={styles.headerImage}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>

          <View style={styles.weatherBox}>
            <Image source={require("../../../assets/sun.png")} style={styles.sunIcon} />
            <Text style={styles.weatherText}>24° C</Text>
          </View>
        </View>

        <View style={styles.headerBottom}>
          <View style={styles.rating}>
            <Ionicons name="star" size={18} color="#fff" />
            <Text style={styles.ratingText}>5.0</Text>
          </View>

          <Text style={styles.title}>Labuan Bajo</Text>
          <Text style={styles.subtitle}>
            From crystal-clear water to breathtaking sunsets, Labuan Bajo is calling!
          </Text>
        </View>
      </ImageBackground>

      {/* BODY */}
      <ScrollView style={styles.content}>
        <Text style={styles.locationText}>🇮🇩 Indonesia</Text>
        <Text style={styles.sectionTitle}>Discover the Beauty of Labuan Bajo</Text>

        <View style={styles.reviewCard}>
          <Text style={styles.reviewAuthor}>By Rifqi Starboy</Text>
          <Text style={styles.reviewText}>
            Wow amazing yahh, best experience in my life very worth it I like it! Very good very well
          </Text>
        </View>

        <TouchableOpacity style={styles.viewAllBtn}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Recommendation in Bajo</Text>

        <View style={styles.recommendCard}>
          <Image source={require("../../../assets/kapal.png")} style={styles.recommendImage} />
          <View style={styles.recommendTextBox}>
            <Text style={styles.recommendTitle}>Phinisi Luxury Private Trip</Text>
            <Text style={styles.recommendSub}>Complimentary pick-up & food included</Text>
          </View>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.counterBox}>
          <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            <MaterialIcons name="remove-circle" size={28} color="#ff784b" />
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <MaterialIcons name="add-circle" size={28} color="#ff784b" />
          </TouchableOpacity>
        </View>

        <View style={styles.footerRight}>
          <Text style={styles.totalText}>Total Amount</Text>
          <Text style={styles.totalPrice}>${(price * quantity).toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerImage: { height: 300, justifyContent: "space-between", padding: 20 },
  topRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 20 },
  backBtn: { backgroundColor: "rgba(0,0,0,0.3)", padding: 8, borderRadius: 30 },
  weatherBox: { flexDirection: "row", backgroundColor: "rgba(255,255,255,0.3)", padding: 8, borderRadius: 20, alignItems: "center" },
  sunIcon: { width: 20, height: 20, marginRight: 5 },
  weatherText: { color: "#fff", fontWeight: "bold" },

  headerBottom: { marginTop: "auto" },
  rating: { flexDirection: "row", alignItems: "center", backgroundColor: "rgba(0,0,0,0.4)", padding: 5, borderRadius: 10, width: 60 },
  ratingText: { color: "#fff", marginLeft: 5 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginTop: 10 },
  subtitle: { color: "#fff", fontSize: 12, marginTop: 5 },

  content: { padding: 20, backgroundColor: "#F5F5F0" },
  locationText: { fontSize: 14 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 15 },

  reviewCard: { backgroundColor: "#fff", padding: 15, borderRadius: 15, marginTop: 10 },
  reviewAuthor: { fontSize: 12, color: "#666" },
  reviewText: { fontSize: 14, marginTop: 5 },

  viewAllBtn: { alignSelf: "flex-start", backgroundColor: "#eee", paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20, marginTop: 10 },
  viewAllText: { color: "#444" },

  recommendCard: { flexDirection: "row", backgroundColor: "#222", borderRadius: 15, padding: 10, marginTop: 10 },
  recommendImage: { width: 100, height: 70, borderRadius: 10 },
  recommendTextBox: { marginLeft: 10, justifyContent: "center" },
  recommendTitle: { color: "#fff", fontWeight: "bold" },
  recommendSub: { color: "#ccc", fontSize: 12 },

  footer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20, backgroundColor: "rgba(0,0,0,0.6)" },
  counterBox: { flexDirection: "row", alignItems: "center" },
  quantityText: { color: "#fff", marginHorizontal: 10, fontSize: 18 },

  footerRight: { alignItems: "flex-end" },
  totalText: { color: "#fff", fontSize: 12 },
  totalPrice: { color: "#fff", fontSize: 20, fontWeight: "bold" },

  bookButton: { backgroundColor: "#FF7043", padding: 15, alignItems: "center", borderRadius: 30, margin: 20 },
  bookText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
