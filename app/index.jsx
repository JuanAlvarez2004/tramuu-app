import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';


const imageLogo = require('../assets/images/tramuu-logo.webp');

// Crear componentes animados
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  
  // Valores compartidos para las animaciones
  const logoOpacity = useSharedValue(0);
  const logoScale = useSharedValue(0.8);
  const buttonPressed = useSharedValue(0);
  const buttonOpacity = useSharedValue(0);

  // Estilo animado para el logo
  const logoAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: logoOpacity.value,
      transform: [{ scale: logoScale.value }],
    };
  });

  // Estilo animado para el botón
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(buttonPressed.value, [0, 1], [1, 0.95]);
    
    return {
      opacity: buttonOpacity.value,
      transform: [{ scale }],
    };
  });

  // Handlers para el botón
  const handlePressIn = () => {
    buttonPressed.value = withSpring(1, {
      duration: 100,
      dampingRatio: 0.8,
    });
  };
  
  const handlePressOut = () => {
    buttonPressed.value = withSpring(0, {
      duration: 100,
      dampingRatio: 0.8,
    });
  };

  useEffect(() => {
    // Animación de entrada del logo
    logoOpacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.cubic),
    });
    
    logoScale.value = withSpring(1, {
      duration: 1200,
      dampingRatio: 0.8,
    });

    // Animación de entrada del botón (después del logo)
    buttonOpacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.cubic),
    });
  }, [logoOpacity, logoScale, buttonOpacity]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.content}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <AnimatedImage
            style={[styles.image, logoAnimatedStyle]}
            source={imageLogo}
            resizeMode="contain"
          />
        </View>

        {/* Button */}
        <AnimatedPressable 
          style={[styles.button, { marginBottom: insets.bottom + 20 }, buttonAnimatedStyle]} 
          onPress={() => router.push('/login')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.buttonText}>Comenzar</Text>
          <Svg width={12} height={10} viewBox="0 0 12 10" fill="none">
            <Path
              d="M0.5 5.49994L10.4748 5.49994L6.65525 9.13794C6.45525 9.32844 6.4475 9.64494 6.638 9.84494C6.82825 10.0447 7.14475 10.0527 7.345 9.86219L11.707 5.70719C11.8958 5.51819 12 5.26719 12 4.99994C12 4.73294 11.8958 4.48169 11.6983 4.28444L7.34475 0.137938C7.248 0.0456886 7.124 -6.10352e-05 7 -6.10352e-05C6.868 -6.10352e-05 6.736 0.051939 6.63775 0.155189C6.44725 0.355188 6.455 0.671439 6.655 0.861939L10.4905 4.49994L0.5 4.49994C0.224 4.49994 0 4.72394 0 4.99994C0 5.27594 0.224 5.49994 0.5 5.49994Z"
              fill="black"
            />
          </Svg> 
        </AnimatedPressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 226,
    height: 263,
  },
  button: {
    width: '100%',
    maxWidth: 325,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#71B7DC',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
})



