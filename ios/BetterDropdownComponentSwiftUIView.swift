import SwiftUI
import ExpoModulesCore
import ExpoUI

final class BetterDropdownComponentSwiftUIViewProps: UIBaseViewProps {
  @Field var options: [String] = []
  @Field var selectedValue: String?
  @Field var placeholder: String = ""
  var onValueChange = EventDispatcher()
}

struct BetterDropdownComponentSwiftUIView: ExpoSwiftUI.View {
  @ObservedObject public var props: BetterDropdownComponentSwiftUIViewProps

  var body: some View {
    Menu {
      ForEach(props.options, id: \.self) { option in
        Button(option) {
          props.onValueChange(["value": option])
        }
      }
    } label: {
      Text(props.selectedValue ?? props.placeholder)
    }
  }
}
