// Example React Native Text component using shared theme
import React from 'react'
import { Text as RNText, StyleSheet, TextStyle } from 'react-native'
import { colors, typography } from '../tokens'

interface TextProps {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption'
  color?: 'primary' | 'secondary' | 'muted'
  style?: TextStyle
}

export function Text({ 
  children, 
  variant = 'body', 
  color = 'primary',
  style 
}: TextProps) {
  return (
    <RNText style={[
      styles[variant],
      styles[`${color}Color`],
      style
    ]}>
      {children}
    </RNText>
  )
}

const styles = StyleSheet.create({
  // Variants
  h1: {
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.fontSize['5xl'] * typography.lineHeight.tight,
  } as TextStyle,
  
  h2: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.fontSize['3xl'] * typography.lineHeight.snug,
  } as TextStyle,
  
  h3: {
    fontSize: typography.fontSize['xl'],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.fontSize['xl'] * typography.lineHeight.snug,
  } as TextStyle,
  
  body: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.fontSize.base * typography.lineHeight.normal,
  } as TextStyle,
  
  caption: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.fontSize.sm * typography.lineHeight.normal,
  } as TextStyle,
  
  // Colors
  primaryColor: {
    color: colors.textPrimary,
  } as TextStyle,
  
  secondaryColor: {
    color: colors.textSecondary,
  } as TextStyle,
  
  mutedColor: {
    color: colors.textMuted,
  } as TextStyle,
})
