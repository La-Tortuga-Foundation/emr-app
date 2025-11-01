import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  AccessibilityProps,
} from 'react-native';
import { theme, spacing } from '../../theme';

export interface SegmentOption {
  value: string | number;
  label: string;
}

export interface SegmentedControlProps extends AccessibilityProps {
  options: SegmentOption[];
  selectedValue: string | number | null;
  onChange: (value: string | number) => void;
  label?: string;
  disabled?: boolean;
  testID?: string;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  selectedValue,
  onChange,
  label,
  disabled = false,
  testID,
  accessibilityLabel,
  ...accessibilityProps
}) => {
  // Get background color based on value (for pain scale)
  const getSegmentColor = (value: string | number, isSelected: boolean) => {
    if (!isSelected) {
      return theme.colors.surface;
    }

    // Pain scale coloring (0-10)
    if (typeof value === 'number') {
      if (value === 0) return theme.colors.success;
      if (value <= 3) return '#94C973'; // Light green
      if (value <= 6) return '#F4C542'; // Yellow/amber
      if (value <= 8) return '#E8954A'; // Orange
      return '#D96B52'; // Warm red (still WCAG compliant)
    }

    return theme.colors.primary;
  };

  const getTextColor = (value: string | number, isSelected: boolean) => {
    if (!isSelected) {
      return theme.colors.text;
    }

    // Ensure contrast on colored backgrounds
    if (typeof value === 'number' && value >= 7) {
      return theme.colors.surface; // White text on warm colors
    }

    return theme.colors.text;
  };

  return (
    <View style={styles.container} testID={testID}>
      {label && (
        <Text style={styles.label} accessibilityRole="text">
          {label}
        </Text>
      )}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        accessible={true}
        accessibilityRole="adjustable"
        accessibilityLabel={accessibilityLabel || label}
        {...accessibilityProps}
      >
        <View style={styles.segmentsContainer}>
          {options.map((option, index) => {
            const isSelected = selectedValue === option.value;
            const isFirst = index === 0;
            const isLast = index === options.length - 1;

            return (
              <TouchableOpacity
                key={String(option.value)}
                onPress={() => !disabled && onChange(option.value)}
                disabled={disabled}
                style={[
                  styles.segment,
                  isFirst && styles.segmentFirst,
                  isLast && styles.segmentLast,
                  {
                    backgroundColor: getSegmentColor(option.value, isSelected),
                  },
                  disabled && styles.segmentDisabled,
                ]}
                activeOpacity={0.7}
                hitSlop={{ top: 8, bottom: 8 }}
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel={`${option.label}`}
                accessibilityState={{
                  selected: isSelected,
                  disabled,
                }}
              >
                <Text
                  style={[
                    styles.segmentText,
                    {
                      color: getTextColor(option.value, isSelected),
                    },
                    isSelected && styles.segmentTextSelected,
                    disabled && styles.textDisabled,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: theme.fontSizes.sm,
    fontWeight: '500',
    color: theme.colors.text,
    marginBottom: spacing(3),
  },
  scrollContent: {
    flexGrow: 1,
  },
  segmentsContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.divider,
    borderRadius: theme.radii.md,
    padding: 2,
    minHeight: 48,
  },
  segment: {
    flex: 1,
    minWidth: 48,
    paddingHorizontal: spacing(3),
    paddingVertical: spacing(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },
  segmentFirst: {
    borderTopLeftRadius: theme.radii.md,
    borderBottomLeftRadius: theme.radii.md,
  },
  segmentLast: {
    borderTopRightRadius: theme.radii.md,
    borderBottomRightRadius: theme.radii.md,
  },
  segmentDisabled: {
    opacity: 0.5,
  },
  segmentText: {
    fontSize: theme.fontSizes.base,
    fontWeight: '500',
  },
  segmentTextSelected: {
    fontWeight: '700',
  },
  textDisabled: {
    opacity: 0.5,
  },
});
