import { BetterDropdownComponentSwiftUIView, BetterDropdownComponentComposeView } from 'better-dropdown-component';
import { Host as SwiftUIHost } from '@expo/ui/swift-ui';
import { padding } from '@expo/ui/swift-ui/modifiers';
import { Host as ComposeHost } from '@expo/ui/jetpack-compose';
import { paddingAll } from '@expo/ui/jetpack-compose/modifiers';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const OPTIONS = ['Apple', 'Banana', 'Cherry', 'Date'];

export default function App() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Better Dropdown Component</Text>
        {process.env.EXPO_OS === 'ios' && (
          <Group name="SwiftUI Dropdown">
            <SwiftUIHost style={styles.host}>
              <BetterDropdownComponentSwiftUIView
                options={OPTIONS}
                selectedValue={selectedValue}
                placeholder="Select a fruit"
                onValueChange={setSelectedValue}
                modifiers={[padding({ all: 16 })]}
              />
            </SwiftUIHost>
            <Text>Selected: {selectedValue ?? 'none'}</Text>
          </Group>
        )}
        {process.env.EXPO_OS === 'android' && (
          <Group name="Compose Dropdown">
            <ComposeHost style={styles.host}>
              <BetterDropdownComponentComposeView
                options={OPTIONS}
                selectedValue={selectedValue}
                placeholder="Select a fruit"
                onValueChange={setSelectedValue}
                modifiers={[paddingAll(16)]}
              />
            </ComposeHost>
            <Text>Selected: {selectedValue ?? 'none'}</Text>
          </Group>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: { fontSize: 30, margin: 20 },
  groupHeader: { fontSize: 20, marginBottom: 20 },
  group: { margin: 20, backgroundColor: '#fff', borderRadius: 10, padding: 20 },
  container: { flex: 1, backgroundColor: '#eee' },
  host: { width: '100%' as const, height: 60 },
};
