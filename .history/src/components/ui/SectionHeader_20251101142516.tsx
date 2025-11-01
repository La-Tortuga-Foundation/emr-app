import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  AccessibilityProps,
} from 'react-native';
import { theme, spacing } from '../../theme';

export interface SectionHeaderProps extends AccessibilityProps {
  title: string;
  subtitle?: string;
  testID?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  testID,
  ...accessibilityProps
}) => {
  return (
    <View
      style={styles.container}
      testID={testID}
      accessible={true}
      accessibilityRole="header"
      {...accessibilityProps}
    >
      <Text style={styles.title} accessibilityRole="text">
        {title}
      </Text>
      {subtitle && (
        <Text style={styles.subtitle} accessibilityRole="text">
          {subtitle}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: spacing(4),
  },
  title: {
    fontSize: theme.fontSizes.xl,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: spacing(1),
  },
  subtitle: {
    fontSize: theme.fontSizes.base,
    color: theme.colors.subtleText,
    lineHeight: 22,
  },
});
