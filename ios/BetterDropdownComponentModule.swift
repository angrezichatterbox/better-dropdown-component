import ExpoModulesCore
import ExpoUI

public class BetterDropdownComponentModule: Module {
  public func definition() -> ModuleDefinition {
    Name("BetterDropdownComponent")

    ExpoUIView(BetterDropdownComponentSwiftUIView.self)

    OnCreate {
      ViewModifierRegistry.register("betterDropdownComponentSwiftUIModifier") { params, appContext, _ in
        return try BetterDropdownComponentSwiftUIModifier(from: params, appContext: appContext)
      }
    }

    OnDestroy {
      ViewModifierRegistry.unregister("betterDropdownComponentSwiftUIModifier")
    }
  }
}
