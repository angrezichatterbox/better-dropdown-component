import { requireNativeView } from 'expo';
import { type CommonViewModifierProps } from '@expo/ui/swift-ui';
import { createViewModifierEventListener } from '@expo/ui/swift-ui/modifiers';
import * as React from 'react';

export interface BetterDropdownComponentSwiftUIViewProps extends CommonViewModifierProps {
  title: string;
  children?: React.ReactNode;
}

const NativeBetterDropdownComponentSwiftUIView = requireNativeView<BetterDropdownComponentSwiftUIViewProps>(
  'BetterDropdownComponent',
  'BetterDropdownComponentSwiftUIView'
);

export default function BetterDropdownComponentSwiftUIView({
  modifiers,
  ...rest
}: BetterDropdownComponentSwiftUIViewProps) {
  return (
    <NativeBetterDropdownComponentSwiftUIView
      modifiers={modifiers}
      {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)}
      {...rest}
    />
  );
}
