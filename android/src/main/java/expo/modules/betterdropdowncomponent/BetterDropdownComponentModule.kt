package expo.modules.betterdropdowncomponent

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.records.recordFromMap
import expo.modules.ui.ExpoUIView
import expo.modules.ui.GenericEventPayload1
import expo.modules.ui.ModifierRegistry

class BetterDropdownComponentModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("BetterDropdownComponent")

    ExpoUIView<BetterDropdownComponentComposeViewProps>("BetterDropdownComponentComposeView") {
      val onValueChange by Event<GenericEventPayload1<String>>()

      Content { props ->
        BetterDropdownComponentComposeViewContent(props) { value ->
          onValueChange(GenericEventPayload1(value))
        }
      }
    }

    OnCreate {
      ModifierRegistry.register("betterDropdownComponentComposeModifier") { params, _, _, _ ->
        recordFromMap<BetterDropdownComponentComposeModifierParams>(params).toModifier()
      }
    }
  }
}
