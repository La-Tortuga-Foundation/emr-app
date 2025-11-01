import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  AccessibilityProps,
} from 'react-native';
import { theme, spacing } from '../../theme';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps extends AccessibilityProps {
  options: RadioOption[];
  selectedValue: string | null;
  onChange: (value: string) => void;
  label?: string;
  disabled?: boolean;
  testID?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedValue,
  onChange,
  label,
  disabled = false,
  testID,
  accessibilityLabel,
  ...accessibilityProps
}) => {
  return (
    <View style={styles.container} testID={testID}>
      {label && (
        <Text style={styles.label} accessibilityRole="text">
          {label}
        </Text>
      )}
      <View
        accessible={true}
        accessibilityRole="radiogroup"
        accessibilityLabel={accessibilityLabel || label}
        {...accessibilityProps}
      >
        {options.map((option, index) => {
          const isSelected = selectedValue === option.value;
          const isLastItem = index === options.length - 1;

          return (
            <TouchableOpacity
              key={option.value}
              onPress={() => !disabled && onChange(option.value)}
              disabled={disabled}
              style={[styles.option, !isLastItem && styles.optionBorder]}
              activeOpacity={0.7}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              accessible={true}
              accessibilityRole="radio"
              accessibilityLabel={option.label}
              accessibilityHint={option.description}
              accessibilityState={{
                checked: isSelected,
                disabled,
              }}
            >
              <View
                style={[
                  styles.radio,
                  disabled && styles.radioDisabled,
                ]}
              >
                {isSelected && (
                  <View style={styles.radioInner} />
                )}
              </View>
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.optionLabel,
                    disabled && styles.textDisabled,
                  ]}
                >
                  {option.label}
                </Text>
                {option.description && (
                  <Text
                    style={[
                      styles.optionDescription,
                      disabled && styles.textDisabled,
                    ]}
                  >
                    {option.description}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
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
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing(4),
    minHeight: 48,
  },
  optionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.divider,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing(3),
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
  },
  radioDisabled: {
    opacity: 0.5,
  },
  textContainer: {
    flex: 1,
  },
  optionLabel: {
    fontSize: theme.fontSizes.base,
    color: theme.colors.text,
    fontWeight: '500',
  },
  optionDescription: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.subtleText,
    marginTop: spacing(1),
  },
  textDisabled: {
    opacity: 0.5,
  },
});
