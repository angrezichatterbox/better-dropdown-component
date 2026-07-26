import { requireNativeView } from 'expo';
import { type PrimitiveBaseProps } from '@expo/ui/jetpack-compose';
import { createViewModifierEventListener } from '@expo/ui/jetpack-compose/modifiers';
import * as React from 'react';
import { type ColorValue, type NativeSyntheticEvent } from 'react-native';

import { type BetterDropdownComponentOption } from './BetterDropdownComponentOption';

export interface BetterDropdownComponentComposeViewProps extends PrimitiveBaseProps {
  options: BetterDropdownComponentOption[];
  selectedValue?: string;
  placeholder?: string;
  cornerRadius?: number;
  /** Background color of the closed field. */
  backgroundColor?: ColorValue;
  /** Text color of the closed field's value/placeholder. */
  textColor?: ColorValue;
  /** Background color of the open popup list. */
  menuBackgroundColor?: ColorValue;
  /** Text color of each option in the open popup list. */
  menuTextColor?: ColorValue;
  onValueChange?: (value: string) => void;
  /** Custom trigger content. When provided, replaces the built-in field as what opens the dropdown. */
  children?: React.ReactNode;
}

type NativeBetterDropdownComponentComposeViewProps = Omit<
  BetterDropdownComponentComposeViewProps,
  'onValueChange'
> & {
  onValueChange?: (event: NativeSyntheticEvent<{ value: string }>) => void;
};

const NativeBetterDropdownComponentComposeView =
  requireNativeView<NativeBetterDropdownComponentComposeViewProps>(
    'BetterDropdownComponent',
    'BetterDropdownComponentComposeView'
  );

export default function BetterDropdownComponentComposeView({
  modifiers,
  onValueChange,
  ...rest
}: BetterDropdownComponentComposeViewProps) {
  return (
    <NativeBetterDropdownComponentComposeView
      modifiers={modifiers}
      {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)}
      onValueChange={onValueChange ? (event) => onValueChange(event.nativeEvent.value) : undefined}
      {...rest}
    />
  );
}
