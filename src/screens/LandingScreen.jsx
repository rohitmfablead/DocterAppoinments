import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  StatusBar,
} from 'react-native';
import fonts from '../utils/fonts';
import colors from '../utils/colors';
import { DOCTERS1, DOCTERS2, DOCTERS3 } from '../assets/images';
const { width } = Dimensions.get('window');
const DATA = [
  {
    image: DOCTERS1,
    title: 'Meet Doctors Online',
    subtitle:
      'Connect with specialized doctors online for convenient and comprehensive medical consultations.',
  },
  {
    image: DOCTERS2,
    title: 'Track Health Easily',
    subtitle: 'Monitor your health vitals and reports in one place.',
  },
  {
    image: DOCTERS3,
    title: 'Book Appointments',
    subtitle: 'Schedule your appointments with just a few taps.',
  },
];

export default function LandingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < DATA.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('login');
    }
  };

  const handleSkip = () => {
    navigation.navigate('login');
  };

  const item = DATA[currentIndex];

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image source={item.image} style={styles.image} resizeMode="cover" />

      <View style={styles.bottomSheet}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>

        <View style={styles.dotContainer}>
          {DATA.map((_, idx) => (
            <View
              key={idx}
              style={[styles.dot, idx === currentIndex && styles.activeDot]}
            />
          ))}
        </View>

        {/* Next Button */}
        <Pressable style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentIndex === DATA.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </Pressable>

        {/* Skip Text */}
        <Pressable onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  image: {
    width,
    height: '65%',
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: colors.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    justifyContent: 'space-between',
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.BOLD,
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: fonts.REGULAR,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.textSecondary,
  },
  activeDot: {
    width: 16,
    backgroundColor: colors.textPrimary,
  },
  nextButton: {
    backgroundColor: colors.textPrimary,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 12,
  },
  nextButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontFamily: fonts.BOLD,
  },
  skipText: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: fonts.MEDIUM,
  },
});
