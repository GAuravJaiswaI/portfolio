// Shared design tokens for React and React Native
// This ensures consistency across platforms

export const colors = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Primary palette
  primary900: '#0B0B0C',
  primary800: '#1A1A1B',
  primary700: '#2A2A2B',
  primary600: '#3A3A3B',
  primary500: '#4A4A4B',
  primary400: '#6A6A6B',
  primary300: '#8A8A8B',
  primary200: '#AAAAAA',
  primary100: '#EAEAEA',
  primary50: '#F7F7F7',
  
  // Accent colors
  accent600: '#2563EB',
  accent500: '#3B82F6',
  accent400: '#60A5FA',
  accent100: '#EBF5FF',
  
  // Semantic colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  
  // Surface colors
  background: '#FFFFFF',
  surface: '#FAFAFA',
  border: '#E5E5E5',
  
  // Text colors
  textPrimary: '#0B0B0C',
  textSecondary: '#4A4A4B',
  textMuted: '#6A6A6B',
} as const

export const typography = {
  // Font sizes (in pixels for React Native compatibility)
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
  },
  
  // Line heights (multipliers)
  lineHeight: {
    tight: 1.2,
    snug: 1.4,
    normal: 1.6,
    relaxed: 1.8,
  },
  
  // Font weights
  fontWeight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  
  // Letter spacing (em values)
  letterSpacing: {
    tighter: -0.05,
    tight: -0.025,
    normal: 0,
    wide: 0.025,
    wider: 0.05,
  },
} as const

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
} as const

export const borderRadius = {
  none: 0,
  sm: 4,
  DEFAULT: 6,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  full: 9999,
} as const

export const shadows = {
  // React Native shadow format
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  DEFAULT: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 8,
  },
} as const

export const animation = {
  // Duration in milliseconds
  duration: {
    fast: 150,
    base: 300,
    slow: 500,
    slower: 700,
  },
  
  // Easing functions (React Native compatible)
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const

// React Native specific theme object
export const rnTheme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  animation,
} as const

// Type exports for TypeScript
export type Colors = typeof colors
export type Typography = typeof typography
export type Spacing = typeof spacing
export type BorderRadius = typeof borderRadius
export type Shadows = typeof shadows
export type Animation = typeof animation
export type RNTheme = typeof rnTheme
