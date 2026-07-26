import { SharedObject, useReleasingSharedObject } from 'expo-modules-core';

import BetterDropdownComponentModule from './BetterDropdownComponentModule';

export declare class BetterDropdownComponentModuleSharedObject extends SharedObject {
  count: number;
}

/**
 * Creates a new BetterDropdownComponentModuleSharedObject instance.
 * You are responsible for releasing it from memory by calling `release()` when done.
 */
export function createBetterDropdownComponentModuleSharedObject(): BetterDropdownComponentModuleSharedObject {
  return new BetterDropdownComponentModule.BetterDropdownComponentModuleSharedObject();
}

/**
 * A hook that creates a BetterDropdownComponentModuleSharedObject instance and automatically
 * releases it when the component unmounts.
 */
export function useBetterDropdownComponentModuleSharedObject(): BetterDropdownComponentModuleSharedObject {
  return useReleasingSharedObject(() => new BetterDropdownComponentModule.BetterDropdownComponentModuleSharedObject(), []);
}
