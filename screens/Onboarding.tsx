import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import colors from "../components/colors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../components/navigation'; // Adjust the path if needed
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const { width, height } = Dimensions.get("window");

const Onboarding = () => {
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Onboarding'>>();
    
  const slides = [
    {
      id: "1",
      title: "Remote",
      highlight: "Consultations",
      description: "Seamless virtual consultations, intelligent diagnosis at your fingertips",
      image: require("../assets/woman.png"),
    },
    {
      id: "2",
      title: "Remote",
      highlight: "Consultations",
      description: "Seamless virtual consultations, intelligent diagnosis at your fingertips",
      image: require("../assets/doc2.png"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<{ id: string; title: string; highlight: string; description: string; image: any }>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = useRef(
    (info: {
      viewableItems: Array<{ index: number | null }>;
    }) => {
      const visibleIndex = info.viewableItems[0]?.index;
      if (visibleIndex !== null && visibleIndex !== undefined) {
        setCurrentIndex(visibleIndex);
      }
    }
  ).current;
  

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNextPress = () => {
    if (currentIndex < slides.length - 1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else if (currentIndex === slides.length - 1) {
      navigation.navigate("GetStartedScreen"); // Replace with your target route
    }
  };
  

  return (
    <View style={styles.container}>
      {/* FlatList for smooth scroll */}
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <View style={styles.content}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>
                {item.title} <Text style={styles.highlight}>{item.highlight}</Text>
              </Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={flatListRef}
      />

      {/* Pagination Dots */}
     {/* Pagination Dots */}
    <View style={styles.pagination}>
    {slides.map((_, index) => {
        const isActive = index === currentIndex; // Check if the dot is active
        const dotWidth = scrollX.interpolate({
        inputRange: [
            width * (index - 1),
            width * index,
            width * (index + 1),
        ],
        outputRange: [8, 16, 8],
        extrapolate: "clamp",
        });

        return (
        <Animated.View
            key={index.toString()}
            style={[
            styles.dot,
            {
                width: dotWidth,
                backgroundColor: isActive ? colors.primary : "#E0E0E0", // Active and inactive colors
            },
            ]}
        />
        );
    })}
    </View>


      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        {currentIndex === slides.length - 1 ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.buttonText}>Get Started</Text>
            <AntDesign name="right" size={20} color="#FFFFFF" />
            <AntDesign name="right" size={20} color="#ccc" />
            <AntDesign name="right" size={20} color="#aaa" />
          </View>
        ) : (
          <Text style={styles.buttonText}>Next</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: width * 1,
    height: height * 0.7,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  highlight: {
    color: colors.primary,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#777777",
    marginVertical: 15,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 30,
    alignSelf: "center",
    width: "90%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginRight: 10,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  dot: {
    height: 5,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 4,
  },
});
