// Example React Native Section component using shared theme
import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { spacing, colors } from '../tokens'

interface SectionProps {
  children: React.ReactNode
  background?: 'white' | 'surface'
  spacing?: 'normal' | 'large'
  style?: ViewStyle
}

export function Section({ 
  children, 
  background = 'white',
  spacing: spacingProp = 'normal',
  style 
}: SectionProps) {
  return (
    <View style={[
      styles.base,
      styles[background],
      styles[`${spacingProp}Spacing`],
      style
    ]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
  } as ViewStyle,
  
  // Backgrounds
  white: {
    backgroundColor: colors.white,
  } as ViewStyle,
  
  surface: {
    backgroundColor: colors.surface,
  } as ViewStyle,
  
  // Spacing
  normalSpacing: {
    paddingVertical: spacing[16],
    paddingHorizontal: spacing[6],
  } as ViewStyle,
  
  largeSpacing: {
    paddingVertical: spacing[24],
    paddingHorizontal: spacing[8],
  } as ViewStyle,
})
