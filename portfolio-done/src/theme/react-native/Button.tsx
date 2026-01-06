// Example React Native Button component using shared theme
import React from 'react'
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle 
} from 'react-native'
import { colors, typography, spacing, borderRadius } from '../tokens'

interface ButtonProps {
  children: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onPress: () => void
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onPress 
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles[variant],
        styles[size]
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[
        styles.text,
        variant === 'primary' ? styles.primaryText : styles.secondaryText,
        styles[`${size}Text`]
      ]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.md,
  } as ViewStyle,
  
  // Variants
  primary: {
    backgroundColor: colors.accent600,
  } as ViewStyle,
  
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
  } as ViewStyle,
  
  // Sizes
  sm: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  } as ViewStyle,
  
  md: {
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[3],
  } as ViewStyle,
  
  lg: {
    paddingHorizontal: spacing[8],
    paddingVertical: spacing[4],
  } as ViewStyle,
  
  // Text styles
  text: {
    fontWeight: typography.fontWeight.medium,
  } as TextStyle,
  
  primaryText: {
    color: colors.white,
  } as TextStyle,
  
  secondaryText: {
    color: colors.textPrimary,
  } as TextStyle,
  
  smText: {
    fontSize: typography.fontSize.sm,
  } as TextStyle,
  
  mdText: {
    fontSize: typography.fontSize.base,
  } as TextStyle,
  
  lgText: {
    fontSize: typography.fontSize.lg,
  } as TextStyle,
})
