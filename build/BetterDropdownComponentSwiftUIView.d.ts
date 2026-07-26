import { type CommonViewModifierProps } from '@expo/ui/swift-ui';
import * as React from 'react';
import { type BetterDropdownComponentOption } from './BetterDropdownComponentOption';
export interface BetterDropdownComponentSwiftUIViewProps extends CommonViewModifierProps {
    options: BetterDropdownComponentOption[];
    selectedValue?: string;
    placeholder?: string;
    onValueChange?: (value: string) => void;
    /** Custom trigger content. When provided, replaces the built-in field as what opens the dropdown. */
    children?: React.ReactNode;
}
export default function BetterDropdownComponentSwiftUIView({ modifiers, onValueChange, ...rest }: BetterDropdownComponentSwiftUIViewProps): React.JSX.Element;
//# sourceMappingURL=BetterDropdownComponentSwiftUIView.d.ts.map