import * as React from 'react';

import { BetterDropdownComponentViewProps } from './BetterDropdownComponent.types';

export default function BetterDropdownComponentView(props: BetterDropdownComponentViewProps) {
  return (
    <div
      style={{
        backgroundColor: '#aabbcc',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => props.onTap({ nativeEvent: {} })}>
      <span>BetterDropdownComponent - native view</span>
      <span>Tap the view to emit a view event</span>
    </div>
  );
}
