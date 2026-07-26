import { BetterDropdownComponentSwiftUIView, BetterDropdownComponentComposeView } from 'better-dropdown-component';
import { Host as SwiftUIHost, Button as SwiftUIButton } from '@expo/ui/swift-ui';
import { padding, frame } from '@expo/ui/swift-ui/modifiers';
import { Host as ComposeHost, Button as ComposeButton, Text as ComposeText } from '@expo/ui/jetpack-compose';
import { paddingAll, width as composeWidth } from '@expo/ui/jetpack-compose/modifiers';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const OPTIONS = [
  { label: 'Apple', value: 'apple', icon: { ios: 'leaf.fill', android: 'Eco' } },
  { label: 'Banana', value: 'banana', icon: { ios: 'star.fill', android: 'Star' } },
  { label: 'Cherry', value: 'cherry', icon: { ios: 'heart.fill', android: 'Favorite' } },
  { label: 'Date', value: 'date', icon: { ios: 'calendar', android: 'Event' } },
];

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
                modifiers={[padding({ all: 16 }), frame({ width: 220 })]}
              />
            </SwiftUIHost>
            <Text>Selected: {selectedValue ?? 'none'}</Text>
          </Group>
        )}
        {process.env.EXPO_OS === 'ios' && (
          <Group name="SwiftUI Dropdown (custom trigger)">
            <SwiftUIHost style={styles.host}>
              <BetterDropdownComponentSwiftUIView
                options={OPTIONS}
                selectedValue={selectedValue}
                placeholder="Select a fruit"
                onValueChange={setSelectedValue}>
                <SwiftUIButton label={selectedValue ? `Fruit: ${selectedValue}` : 'Open fruit picker'} />
              </BetterDropdownComponentSwiftUIView>
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
                cornerRadius={16}
                backgroundColor="#2b2140"
                textColor="#ffffff"
                menuBackgroundColor="#2b2140"
                menuTextColor="#ffffff"
                onValueChange={setSelectedValue}
                modifiers={[paddingAll(16), composeWidth(220)]}
              />
            </ComposeHost>
            <Text>Selected: {selectedValue ?? 'none'}</Text>
          </Group>
        )}
        {process.env.EXPO_OS === 'android' && (
          <Group name="Compose Dropdown (custom trigger)">
            <ComposeHost style={styles.host}>
              <BetterDropdownComponentComposeView
                options={OPTIONS}
                selectedValue={selectedValue}
                placeholder="Select a fruit"
                onValueChange={setSelectedValue}>
                <ComposeButton>
                  <ComposeText>{selectedValue ? `Fruit: ${selectedValue}` : 'Open fruit picker'}</ComposeText>
                </ComposeButton>
              </BetterDropdownComponentComposeView>
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
