package expo.modules.betterdropdowncomponent

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.ui.ExpoUIView
import expo.modules.kotlin.records.recordFromMap
import expo.modules.ui.ModifierRegistry

class BetterDropdownComponentModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("BetterDropdownComponent")

    Events("onChange")

    Constant("PI") {
      Math.PI
    }

    Function("hello") {
      "Hello world! 👋"
    }

    AsyncFunction("setValueAsync") { value: String ->
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    View(BetterDropdownComponentView::class) {
      // Defines an event that the view can send to JavaScript.
      Events("onTap")
    }

    Class(BetterDropdownComponentModuleSharedObject::class) {
      Constructor {
        val instance = BetterDropdownComponentModuleSharedObject(appContext)
        return@Constructor instance
      }

      Property("count")
        .get { ref: BetterDropdownComponentModuleSharedObject ->
          ref.count
        }
        .set { ref: BetterDropdownComponentModuleSharedObject, count: Int ->
          ref.count = count
        }
    }

    ExpoUIView<BetterDropdownComponentComposeViewProps>("BetterDropdownComponentComposeView") {
      Content { props ->
        BetterDropdownComponentComposeViewContent(props)
      }
    }

    OnCreate {
      ModifierRegistry.register("betterDropdownComponentComposeModifier") { params, _, _, _ ->
        recordFromMap<BetterDropdownComponentComposeModifierParams>(params).toModifier()
      }
    }
  }
}
