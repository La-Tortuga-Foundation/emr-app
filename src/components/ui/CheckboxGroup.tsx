import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  AccessibilityProps,
} from 'react-native';
import { theme, spacing } from '../../theme';

export interface CheckboxOption {
  value: string;
  label: string;
  description?: string;
}

export interface CheckboxGroupProps extends AccessibilityProps {
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  label?: string;
  disabled?: boolean;
  testID?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  selectedValues,
  onChange,
  label,
  disabled = false,
  testID,
  accessibilityLabel,
  ...accessibilityProps
}) => {
  const handleToggle = (value: string) => {
    if (disabled) return;

    const newValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];

    onChange(newValues);
  };

  return (
    <View style={styles.container} testID={testID}>
      {label && (
        <Text style={styles.label} accessibilityRole="text">
          {label}
        </Text>
      )}
      <View
        accessible={true}
        accessibilityRole="group"
        accessibilityLabel={accessibilityLabel || label}
        {...accessibilityProps}
      >
        {options.map((option, index) => {
          const isSelected = selectedValues.includes(option.value);
          const isLastItem = index === options.length - 1;

          return (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleToggle(option.value)}
              disabled={disabled}
              style={[styles.option, !isLastItem && styles.optionBorder]}
              activeOpacity={0.7}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              accessible={true}
              accessibilityRole="checkbox"
              accessibilityLabel={option.label}
              accessibilityHint={option.description}
              accessibilityState={{
                checked: isSelected,
                disabled,
              }}
            >
              <View
                style={[
                  styles.checkbox,
                  isSelected && styles.checkboxSelected,
                  disabled && styles.checkboxDisabled,
                ]}
              >
                {isSelected && <Text style={styles.checkmark}>✓</Text>}
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
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: theme.radii.sm,
    borderWidth: 2,
    borderColor: theme.colors.divider,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing(3),
  },
  checkboxSelected: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  checkboxDisabled: {
    opacity: 0.5,
  },
  checkmark: {
    color: theme.colors.surface,
    fontSize: theme.fontSizes.base,
    fontWeight: '700',
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
