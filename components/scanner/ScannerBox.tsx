import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const ScannerBox: React.FC = () => {
  const animation = new Animated.Value(0);

  Animated.loop(
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  const gradientColors = ['#02b7ee', 'transparent'];

  return (
    <View style={styles.container}>
    <View style={styles.box}>
        <Animated.View
            style={[
                styles.gradient,
                {
                    transform: [
                        {
                            translateY: animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 180],
                            }),
                        },
                    ],
                    borderColor: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['#02b7ee', '#006685'],
                    }),
                },
            ]}
        >
            <LinearGradient
                colors={gradientColors}
                style={styles.gradientContent}
            />
        </Animated.View>
    </View>          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    top: 150,
    alignSelf: "center",
    zIndex: 100,
  },
  box: {
    width: 200,
    height: 200,
    borderWidth: 4,
    borderColor: '#02b7ee',
    borderRadius: 9,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
},
gradientContent: {
    width: '100%',
    height: 70,
    top: -60,
  },
});

export default ScannerBox;
