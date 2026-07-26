import { requireNativeView } from 'expo';
import { type PrimitiveBaseProps } from '@expo/ui/jetpack-compose';
import { createViewModifierEventListener } from '@expo/ui/jetpack-compose/modifiers';
import * as React from 'react';

export interface BetterDropdownComponentComposeViewProps extends PrimitiveBaseProps {
  title: string;
  children?: React.ReactNode;
}

const NativeBetterDropdownComponentComposeView = requireNativeView<BetterDropdownComponentComposeViewProps>(
  'BetterDropdownComponent',
  'BetterDropdownComponentComposeView'
);

export default function BetterDropdownComponentComposeView({
  modifiers,
  ...rest
}: BetterDropdownComponentComposeViewProps) {
  return (
    <NativeBetterDropdownComponentComposeView
      modifiers={modifiers}
      {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)}
      {...rest}
    />
  );
}
