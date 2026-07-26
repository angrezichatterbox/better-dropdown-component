import SwiftUI
import ExpoModulesCore
import ExpoUI

final class BetterDropdownComponentSwiftUIViewProps: UIBaseViewProps {
  @Field var title: String = ""
}

struct BetterDropdownComponentSwiftUIView: ExpoSwiftUI.View {
  @ObservedObject public var props: BetterDropdownComponentSwiftUIViewProps

  var body: some View {
    VStack {
      Text(props.title)
        .font(.headline)
      Children()
    }
  }
}
