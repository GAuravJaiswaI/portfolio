# Shared Design System

This design system is built to work seamlessly across React (Web) and React Native (Mobile) platforms.

## Structure

```
theme/
├── tokens.ts              # Shared design tokens
├── react-native/          # React Native components
│   ├── Button.tsx
│   ├── Text.tsx
│   └── Section.tsx
└── README.md             # This file
```

## Design Tokens

All design decisions are centralized in `tokens.ts`:

### Colors
- Primary palette (grays/blacks)
- Accent colors (blues)
- Semantic colors (success, warning, error)
- Surface colors (backgrounds, borders)

### Typography
- Font sizes (xs to 6xl)
- Font weights (normal to bold)
- Line heights (tight to relaxed)
- Letter spacing

### Spacing
- Based on 8px grid system
- Ranges from 0 to 256px

### Other Tokens
- Border radius values
- Shadow definitions (React Native format)
- Animation durations and easings

## Usage Examples

### React (Web)

```tsx
// Using with Tailwind CSS
<div className="text-primary-900 bg-surface p-6">
  <h1 className="text-3xl font-semibold">Hello</h1>
</div>

// Using tokens directly
import { colors, spacing } from '@/theme/tokens'

const styles = {
  color: colors.textPrimary,
  padding: `${spacing[6]}px`
}
```

### React Native

```tsx
// Import tokens
import { colors, typography, spacing } from '@/theme/tokens'

// Use in StyleSheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    padding: spacing[6],
  },
  text: {
    color: colors.textPrimary,
    fontSize: typography.fontSize.lg,
  }
})

// Or use pre-built components
import { Button, Text, Section } from '@/theme/react-native'

<Section background="surface">
  <Text variant="h2">Welcome</Text>
  <Button onPress={handlePress}>
    Get Started
  </Button>
</Section>
```

## Platform Differences

### Shared
- Color values
- Typography scales
- Spacing units
- Border radius values

### Platform-Specific
- **Web**: Uses rem units, CSS shadows
- **React Native**: Uses pixel units, shadow objects with elevation

## Extending the System

To add new tokens:

1. Update `tokens.ts` with new values
2. Update `tailwind.config.js` to match (for web)
3. Create/update React Native components as needed

## Best Practices

1. **Always use tokens** instead of hardcoded values
2. **Keep platform-specific code minimal** - use shared tokens
3. **Document new tokens** when adding them
4. **Test on both platforms** when making changes

## Type Safety

All tokens are exported with TypeScript types:

```tsx
import type { Colors, Typography, Spacing } from '@/theme/tokens'
```

This ensures type safety across your entire application.
