import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { useTranslation } from 'react-i18next';
import { fonts, fontSizes } from '../utils/fonts';

const SplashScreen = () => {
  const navigation = useNavigation();
  // Translation hook for future use
  // const { t } = useTranslation();
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.3);

  useEffect(() => {
    // Animate logo and text
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to main screen after 3 seconds
    const timer = setTimeout(() => {
      // navigation.navigate('Login' as never);
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, navigation]);

  const handleGetStarted = () => {
    navigation.navigate('Login' as never);
  };

  return (
    <ImageBackground 
      source={require('../../assets/splash screen image .png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <ImageBackground 
            source={require('../../assets/flightLogo.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.tagline}>
            The Flight Search Engine {'\n'}
            Tailored for <Text style={styles.boldText}>Venezuelan</Text>{'\n'}
            <Text style={styles.boldText}>Travelers</Text>
          </Text>
        </Animated.View>

        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Let's get started →</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60, // Account for status bar
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 67,
  },
  logoImage: {
    width: 70,
    height: 70,
    marginBottom: 30,
  },
  tagline: {
    fontSize: fontSizes['2xl'],
    fontFamily: fonts.regular,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 32,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  boldText: {
    fontFamily: fonts.bold,
  },
  getStartedButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#007AFF',
    fontSize: fontSizes.lg,
    fontFamily: fonts.semiBold,
  },
});

export default SplashScreen; 