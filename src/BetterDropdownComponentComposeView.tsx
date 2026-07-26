import { requireNativeView } from 'expo';
import { type PrimitiveBaseProps } from '@expo/ui/jetpack-compose';
import { createViewModifierEventListener } from '@expo/ui/jetpack-compose/modifiers';
import * as React from 'react';
import { type NativeSyntheticEvent } from 'react-native';

export interface BetterDropdownComponentComposeViewProps extends PrimitiveBaseProps {
  options: string[];
  selectedValue?: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
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
