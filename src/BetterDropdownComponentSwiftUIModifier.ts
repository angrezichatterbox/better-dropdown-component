import { createModifier, type ModifierConfig } from '@expo/ui/swift-ui/modifiers';

export const betterDropdownComponentSwiftUIModifier = (params: {
  color?: string;
  width?: number;
  cornerRadius?: number;
}): ModifierConfig => createModifier('betterDropdownComponentSwiftUIModifier', params);
