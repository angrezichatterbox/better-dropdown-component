import { type PrimitiveBaseProps } from '@expo/ui/jetpack-compose';
import * as React from 'react';
import { type ColorValue } from 'react-native';
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
export default function BetterDropdownComponentComposeView({ modifiers, onValueChange, ...rest }: BetterDropdownComponentComposeViewProps): React.JSX.Element;
//# sourceMappingURL=BetterDropdownComponentComposeView.d.ts.map