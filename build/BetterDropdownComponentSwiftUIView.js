import { requireNativeView } from 'expo';
import { createViewModifierEventListener } from '@expo/ui/swift-ui/modifiers';
import * as React from 'react';
const NativeBetterDropdownComponentSwiftUIView = requireNativeView('BetterDropdownComponent', 'BetterDropdownComponentSwiftUIView');
export default function BetterDropdownComponentSwiftUIView({ modifiers, onValueChange, ...rest }) {
    return (<NativeBetterDropdownComponentSwiftUIView modifiers={modifiers} {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)} onValueChange={onValueChange ? (event) => onValueChange(event.nativeEvent.value) : undefined} {...rest}/>);
}
//# sourceMappingURL=BetterDropdownComponentSwiftUIView.js.map