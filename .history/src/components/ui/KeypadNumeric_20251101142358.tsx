import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  AccessibilityProps,
} from 'react-native';
import { theme, spacing } from '../../theme';

export interface KeypadNumericProps extends AccessibilityProps {
  onChange: (value: string) => void;
  onSubmit?: () => void;
  allowDecimal?: boolean;
  maxLength?: number;
  label?: string;
  testID?: string;
}

export const KeypadNumeric: React.FC<KeypadNumericProps> = ({
  onChange,
  onSubmit,
  allowDecimal = false,
  maxLength = 10,
  label,
  testID,
  accessibilityLabel,
  ...accessibilityProps
}) => {
  const [value, setValue] = useState('');

  const handlePress = (digit: string) => {
    if (value.length >= maxLength) return;

    const newValue = value + digit;
    setValue(newValue);
    onChange(newValue);
  };

  const handleDecimal = () => {
    if (!allowDecimal) return;
    if (value.includes('.')) return;
    if (value.length >= maxLength) return;

    const newValue = value.length === 0 ? '0.' : value + '.';
    setValue(newValue);
    onChange(newValue);
  };

  const handleBackspace = () => {
    const newValue = value.slice(0, -1);
    setValue(newValue);
    onChange(newValue);
  };

  const handleClear = () => {
    setValue('');
    onChange('');
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  const renderKey = (
    keyValue: string,
    label: string,
    isSpecial: boolean = false
  ) => (
    <TouchableOpacity
      onPress={() => {
        if (keyValue === 'backspace') handleBackspace();
        else if (keyValue === 'clear') handleClear();
        else if (keyValue === '.') handleDecimal();
        else if (keyValue === 'submit') handleSubmit();
        else handlePress(keyValue);
      }}
      style={[
        styles.key,
        isSpecial && styles.keySpecial,
      ]}
      activeOpacity={0.7}
      hitSlop={{ top: 4, bottom: 4, left: 4, right: 4 }}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={
        keyValue === 'backspace'
          ? 'Delete last character'
          : keyValue === 'clear'
          ? 'Clear all'
          : keyValue === 'submit'
          ? 'Submit value'
          : `Enter ${label}`
      }
    >
      <Text style={[styles.keyText, isSpecial && styles.keyTextSpecial]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={styles.container}
      testID={testID}
      accessible={true}
      accessibilityRole="keypad"
      accessibilityLabel={accessibilityLabel || label || 'Numeric keypad'}
      {...accessibilityProps}
    >
      {label && (
        <Text style={styles.label} accessibilityRole="text">
          {label}
        </Text>
      )}
      <View style={styles.display}>
        <Text style={styles.displayText} accessibilityRole="text">
          {value || '0'}
        </Text>
      </View>
      <View style={styles.keypad}>
        <View style={styles.row}>
          {renderKey('7', '7')}
          {renderKey('8', '8')}
          {renderKey('9', '9')}
        </View>
        <View style={styles.row}>
          {renderKey('4', '4')}
          {renderKey('5', '5')}
          {renderKey('6', '6')}
        </View>
        <View style={styles.row}>
          {renderKey('1', '1')}
          {renderKey('2', '2')}
          {renderKey('3', '3')}
        </View>
        <View style={styles.row}>
          {allowDecimal ? renderKey('.', '.', true) : renderKey('clear', 'CLR', true)}
          {renderKey('0', '0')}
          {renderKey('backspace', '⌫', true)}
        </View>
        {onSubmit && (
          <View style={styles.row}>
            {renderKey('submit', '✓ Submit', true)}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: theme.fontSizes.sm,
    fontWeight: '500',
    color: theme.colors.text,
    marginBottom: spacing(3),
    alignSelf: 'flex-start',
  },
  display: {
    width: '100%',
    backgroundColor: theme.colors.surface,
    borderWidth: 2,
    borderColor: theme.colors.divider,
    borderRadius: theme.radii.md,
    padding: spacing(4),
    marginBottom: spacing(4),
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  displayText: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: '600',
    color: theme.colors.text,
  },
  keypad: {
    width: '100%',
    gap: spacing(2),
  },
  row: {
    flexDirection: 'row',
    gap: spacing(2),
  },
  key: {
    flex: 1,
    aspectRatio: 1,
    minHeight: 56,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },
  keySpecial: {
    backgroundColor: theme.colors.primary,
  },
  keyText: {
    fontSize: theme.fontSizes.xl,
    fontWeight: '600',
    color: theme.colors.text,
  },
  keyTextSpecial: {
    color: theme.colors.surface,
    fontSize: theme.fontSizes.lg,
  },
});
