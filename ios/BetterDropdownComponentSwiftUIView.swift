import SwiftUI
import ExpoModulesCore
import ExpoUI

struct BetterDropdownComponentOptionIcon: Record {
  @Field var ios: String?
  @Field var android: String?
}

struct BetterDropdownComponentOption: Record {
  @Field var label: String = ""
  @Field var value: String = ""
  @Field var icon: BetterDropdownComponentOptionIcon?
}

final class BetterDropdownComponentSwiftUIViewProps: UIBaseViewProps {
  @Field var options: [BetterDropdownComponentOption] = []
  @Field var selectedValue: String?
  @Field var placeholder: String = ""
  var onValueChange = EventDispatcher()
}

struct BetterDropdownComponentSwiftUIView: ExpoSwiftUI.View {
  @ObservedObject public var props: BetterDropdownComponentSwiftUIViewProps

  private var selectedOption: BetterDropdownComponentOption? {
    props.options.first { $0.value == props.selectedValue }
  }

  private var hasCustomTrigger: Bool {
    !(props.children?.isEmpty ?? true)
  }

  var body: some View {
    Menu {
      ForEach(props.options, id: \.value) { option in
        Button {
          props.onValueChange(["value": option.value])
        } label: {
          if let icon = option.icon?.ios {
            Label(option.label, systemImage: icon)
          } else {
            Text(option.label)
          }
        }
      }
    } label: {
      if hasCustomTrigger {
        Children()
      } else {
        Text(selectedOption?.label ?? props.placeholder)
      }
    }
  }
}
