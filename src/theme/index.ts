import tokens from '../../design/tokens.json';

export interface Theme {
  colors: {
    primary: string;
    primaryDark: string;
    background: string;
    surface: string;
    text: string;
    subtleText: string;
    success: string;
    warning: string;
    error: string;
    divider: string;
  };
  spacing: number[];
  radii: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  fontSizes: {
    sm: number;
    base: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  elevation: {
    sm: number;
    md: number;
    lg: number;
  };
}

export const theme: Theme = tokens;

/**
 * Helper function to get spacing value from the spacing scale
 * @param index - Index in the spacing array (0-8)
 * @returns spacing value in pixels
 * @example spacing(2) returns 8
 */
export const spacing = (index: number): number => {
  if (index < 0 || index >= theme.spacing.length) {
    console.warn(
      `Invalid spacing index: ${index}. Using 0. Valid range: 0-${theme.spacing.length - 1}`
    );
    return 0;
  }
  return theme.spacing[index];
};

/**
 * Get shadow style based on elevation
 */
export const getShadow = (
  elevation: keyof Theme['elevation']
): {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
} => {
  const elevationValue = theme.elevation[elevation];
  return {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: elevationValue / 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: elevationValue,
    elevation: elevationValue,
  };
};

export type { Theme as ThemeType };
export default theme;
