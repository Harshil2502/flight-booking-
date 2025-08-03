import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ToastProps = { message: string };

const Toast: React.FC<ToastProps> = ({ message }) => (
  <View style={styles.toast}>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: { color: '#fff' },
});

export default Toast;