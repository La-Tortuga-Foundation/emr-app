import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardTypeOptions,
  TouchableOpacity,
  AccessibilityProps,
} from 'react-native';
import { theme, spacing } from '../../theme';

export interface InputProps extends AccessibilityProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  showClearButton?: boolean;
  testID?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  helperText,
  errorText,
  keyboardType = 'default',
  disabled = false,
  multiline = false,
  numberOfLines = 1,
  showClearButton = false,
  testID,
  accessibilityLabel,
  accessibilityHint,
  ...accessibilityProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = Boolean(errorText);

  const inputContainerStyle = [
    styles.inputContainer,
    isFocused && styles.inputContainerFocused,
    hasError && styles.inputContainerError,
    disabled && styles.inputContainerDisabled,
  ];

  const handleClear = () => {
    onChangeText('');
  };

  return (
    <View style={styles.container} testID={testID}>
      {label && (
        <Text style={styles.label} accessibilityRole="text">
          {label}
        </Text>
      )}
      <View style={inputContainerStyle}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.subtleText}
          keyboardType={keyboardType}
          editable={!disabled}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[styles.input, multiline && styles.inputMultiline]}
          accessible={true}
          accessibilityLabel={accessibilityLabel || label}
          accessibilityHint={accessibilityHint}
          accessibilityState={{ disabled }}
          {...accessibilityProps}
        />
        {showClearButton && value.length > 0 && !disabled && (
          <TouchableOpacity
            onPress={handleClear}
            style={styles.clearButton}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            accessibilityRole="button"
            accessibilityLabel="Clear input"
          >
            <Text style={styles.clearButtonText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
      {hasError && errorText && (
        <Text style={styles.errorText} accessibilityRole="alert">
          {errorText}
        </Text>
      )}
      {!hasError && helperText && (
        <Text style={styles.helperText} accessibilityRole="text">
          {helperText}
        </Text>
      )}
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
    marginBottom: spacing(2),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.divider,
    borderRadius: theme.radii.md,
    paddingHorizontal: spacing(4),
    minHeight: 48,
  },
  inputContainerFocused: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  inputContainerError: {
    borderColor: theme.colors.error,
    borderWidth: 2,
  },
  inputContainerDisabled: {
    backgroundColor: theme.colors.background,
    opacity: 0.6,
  },
  input: {
    flex: 1,
    fontSize: theme.fontSizes.base,
    color: theme.colors.text,
    paddingVertical: spacing(3),
    minHeight: 48,
  },
  inputMultiline: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
  clearButton: {
    padding: spacing(2),
    marginLeft: spacing(2),
  },
  clearButtonText: {
    fontSize: theme.fontSizes.lg,
    color: theme.colors.subtleText,
  },
  helperText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.subtleText,
    marginTop: spacing(1),
  },
  errorText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.error,
    marginTop: spacing(1),
  },
});
