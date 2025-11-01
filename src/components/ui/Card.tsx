import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  AccessibilityProps,
} from 'react-native';
import { theme, spacing, getShadow } from '../../theme';

export interface CardProps extends AccessibilityProps {
  children: React.ReactNode;
  style?: ViewStyle;
  elevation?: 'sm' | 'md' | 'lg';
  testID?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  elevation = 'md',
  testID,
  ...accessibilityProps
}) => {
  return (
    <View
      style={[
        styles.card,
        getShadow(elevation),
        style,
      ]}
      testID={testID}
      accessible={true}
      {...accessibilityProps}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.md,
    padding: spacing(4),
    width: '100%',
  },
});
