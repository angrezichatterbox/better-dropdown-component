import { NativeModule, requireNativeModule } from 'expo';

import { BetterDropdownComponentModuleEvents } from './BetterDropdownComponent.types';
import type { BetterDropdownComponentModuleSharedObject } from './BetterDropdownComponentModuleSharedObject';

declare class BetterDropdownComponentModule extends NativeModule<BetterDropdownComponentModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
  BetterDropdownComponentModuleSharedObject: typeof BetterDropdownComponentModuleSharedObject;
}

export default requireNativeModule<BetterDropdownComponentModule>('BetterDropdownComponent');
