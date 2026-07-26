import { createModifier, type ModifierConfig } from '@expo/ui/jetpack-compose/modifiers';

export const betterDropdownComponentComposeModifier = (params: {
  color?: number;
  width?: number;
  cornerRadius?: number;
}): ModifierConfig => createModifier('betterDropdownComponentComposeModifier', params);
