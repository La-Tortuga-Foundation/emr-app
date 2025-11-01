import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleguideScreen } from './src/screens/StyleguideScreen';
import { theme, spacing } from './src/theme';

export default function App() {
  const [showStyleguide, setShowStyleguide] = useState(false);

  if (showStyleguide) {
    return <StyleguideScreen />;
  }

  return (
    <View style={styles.container} testID="app-container">
      <Text style={styles.title}>La Tortuga EMR</Text>
      <Text style={styles.subtitle}>
        Offline-first Medical & Dental Intake System
      </Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowStyleguide(true)}
        accessibilityLabel="Open Design System Styleguide"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>View Design System</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing(5),
  },
  title: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: '700',
    marginBottom: spacing(2),
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: theme.fontSizes.base,
    color: theme.colors.subtleText,
    textAlign: 'center',
    marginBottom: spacing(6),
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: spacing(6),
    paddingVertical: spacing(4),
    borderRadius: theme.radii.md,
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.surface,
    fontSize: theme.fontSizes.base,
    fontWeight: '600',
  },
});
