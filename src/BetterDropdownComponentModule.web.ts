import { registerWebModule, NativeModule } from 'expo';

import { BetterDropdownComponentModuleEvents } from './BetterDropdownComponent.types';

class BetterDropdownComponentModule extends NativeModule<BetterDropdownComponentModuleEvents> {
  PI = Math.PI;

  hello() {
    return 'Hello world! 👋';
  }

  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
}

export default registerWebModule(BetterDropdownComponentModule, 'BetterDropdownComponentModule');
