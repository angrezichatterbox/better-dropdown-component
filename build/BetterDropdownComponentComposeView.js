import { requireNativeView } from 'expo';
import { createViewModifierEventListener } from '@expo/ui/jetpack-compose/modifiers';
import * as React from 'react';
const NativeBetterDropdownComponentComposeView = requireNativeView('BetterDropdownComponent', 'BetterDropdownComponentComposeView');
export default function BetterDropdownComponentComposeView({ modifiers, onValueChange, ...rest }) {
    return (<NativeBetterDropdownComponentComposeView modifiers={modifiers} {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)} onValueChange={onValueChange ? (event) => onValueChange(event.nativeEvent.value) : undefined} {...rest}/>);
}
//# sourceMappingURL=BetterDropdownComponentComposeView.js.map