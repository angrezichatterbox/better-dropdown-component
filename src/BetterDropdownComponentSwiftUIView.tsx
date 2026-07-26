import { requireNativeView } from 'expo';
import { type CommonViewModifierProps } from '@expo/ui/swift-ui';
import { createViewModifierEventListener } from '@expo/ui/swift-ui/modifiers';
import * as React from 'react';
import { type NativeSyntheticEvent } from 'react-native';

import { type BetterDropdownComponentOption } from './BetterDropdownComponentOption';

export interface BetterDropdownComponentSwiftUIViewProps extends CommonViewModifierProps {
  options: BetterDropdownComponentOption[];
  selectedValue?: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  /** Custom trigger content. When provided, replaces the built-in field as what opens the dropdown. */
  children?: React.ReactNode;
}

type NativeBetterDropdownComponentSwiftUIViewProps = Omit<
  BetterDropdownComponentSwiftUIViewProps,
  'onValueChange'
> & {
  onValueChange?: (event: NativeSyntheticEvent<{ value: string }>) => void;
};

const NativeBetterDropdownComponentSwiftUIView =
  requireNativeView<NativeBetterDropdownComponentSwiftUIViewProps>(
    'BetterDropdownComponent',
    'BetterDropdownComponentSwiftUIView'
  );

export default function BetterDropdownComponentSwiftUIView({
  modifiers,
  onValueChange,
  ...rest
}: BetterDropdownComponentSwiftUIViewProps) {
  return (
    <NativeBetterDropdownComponentSwiftUIView
      modifiers={modifiers}
      {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)}
      onValueChange={onValueChange ? (event) => onValueChange(event.nativeEvent.value) : undefined}
      {...rest}
    />
  );
}
