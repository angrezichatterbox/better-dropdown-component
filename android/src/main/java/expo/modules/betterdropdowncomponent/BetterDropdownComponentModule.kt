package expo.modules.betterdropdowncomponent

import androidx.compose.runtime.remember
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.records.recordFromMap
import expo.modules.kotlin.viewevent.getValue
import expo.modules.ui.GenericEventPayload1
import expo.modules.ui.ModifierRegistry

class BetterDropdownComponentModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("BetterDropdownComponent")

    // Uses the legacy View(name, events, viewFunction) overload directly (bypassing
    // @expo/ui's ExpoUIView helper) so this compiles against both @expo/ui ~55.x
    // (Expo SDK 55, where this is the only overload) and 56.x+ (where expo-modules-core
    // keeps it as a deprecated but functional overload).
    View<BetterDropdownComponentComposeViewProps>("BetterDropdownComponentComposeView", events = {
      Events("onValueChange")
    }) { props ->
      val onValueChange by remember { EventDispatcher<GenericEventPayload1<String>>() }
      BetterDropdownComponentComposeViewContent(props) { value ->
        onValueChange(GenericEventPayload1(value))
      }
    }

    OnCreate {
      ModifierRegistry.register("betterDropdownComponentComposeModifier") { params, _, _, _ ->
        recordFromMap<BetterDropdownComponentComposeModifierParams>(params).toModifier()
      }
    }
  }
}
