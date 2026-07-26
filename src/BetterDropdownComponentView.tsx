import { requireNativeView } from 'expo';
import * as React from 'react';

import { BetterDropdownComponentViewProps } from './BetterDropdownComponent.types';

const NativeView: React.ComponentType<BetterDropdownComponentViewProps> = requireNativeView('BetterDropdownComponent');

export default function BetterDropdownComponentView(props: BetterDropdownComponentViewProps) {
  return <NativeView {...props} />;
}
