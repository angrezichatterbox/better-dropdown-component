import ExpoModulesCore
import ExpoUI

public class BetterDropdownComponentModule: Module {
  public func definition() -> ModuleDefinition {
    Name("BetterDropdownComponent")

    Events("onChange")

    Constant("PI") {
      Double.pi
    }

    Function("hello") {
      return "Hello world! 👋"
    }

    AsyncFunction("setValueAsync") { (value: String) in
      self.sendEvent("onChange", [
        "value": value
      ])
    }

    View(BetterDropdownComponentView.self) {
      Events("onTap")
    }

    Class(BetterDropdownComponentModuleSharedObject.self) {
      Constructor { () -> BetterDropdownComponentModuleSharedObject in
        return BetterDropdownComponentModuleSharedObject()
      }

      Property("count") { (ref: BetterDropdownComponentModuleSharedObject) -> Int in
        return ref.count
      }
      .set { (ref: BetterDropdownComponentModuleSharedObject, count: Int) in
        ref.count = count
      }
    }

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
