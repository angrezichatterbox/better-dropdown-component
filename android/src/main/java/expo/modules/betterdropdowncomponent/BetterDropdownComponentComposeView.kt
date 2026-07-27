package expo.modules.betterdropdowncomponent

import android.graphics.Color
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExposedDropdownMenuAnchorType
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.Icon
import androidx.compose.material3.MenuDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record
import expo.modules.kotlin.views.ComposeProps
import expo.modules.kotlin.views.FunctionalComposableScope
import expo.modules.ui.ModifierList
import expo.modules.ui.ModifierRegistry
import expo.modules.ui.compose
import expo.modules.ui.composeOrNull

data class BetterDropdownComponentOptionIcon(
  @Field val ios: String? = null,
  @Field val android: String? = null
) : Record

data class BetterDropdownComponentOption(
  @Field val label: String = "",
  @Field val value: String = "",
  @Field val icon: BetterDropdownComponentOptionIcon? = null
) : Record

data class BetterDropdownComponentComposeViewProps(
  @Field val options: List<BetterDropdownComponentOption> = emptyList(),
  @Field val selectedValue: String? = null,
  @Field val placeholder: String = "",
  @Field val cornerRadius: Double = 4.0,
  @Field val backgroundColor: Color? = null,
  @Field val textColor: Color? = null,
  @Field val menuBackgroundColor: Color? = null,
  @Field val menuTextColor: Color? = null,
  @Field val modifiers: ModifierList = emptyList()
) : ComposeProps

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FunctionalComposableScope.BetterDropdownComponentComposeViewContent(
  props: BetterDropdownComponentComposeViewProps,
  onValueChange: (String) -> Unit
) {
  var expanded by remember { mutableStateOf(false) }
  val selectedOption = props.options.find { it.value == props.selectedValue }
  val hasCustomTrigger = view.childCount > 0

  ExposedDropdownMenuBox(
    expanded = expanded,
    onExpandedChange = { expanded = it },
    modifier = ModifierRegistry.applyModifiers(
      props.modifiers,
      appContext,
      composableScope,
      globalEventDispatcher
    )
  ) {
    if (hasCustomTrigger) {
      Box(
        modifier = Modifier
          .wrapContentSize()
          .menuAnchor(ExposedDropdownMenuAnchorType.PrimaryNotEditable, true)
      ) {
        Children(composableScope)
      }
    } else {
      TextField(
        value = selectedOption?.label ?: props.placeholder,
        onValueChange = {},
        readOnly = true,
        shape = RoundedCornerShape(props.cornerRadius.dp),
        colors = TextFieldDefaults.colors(
          focusedContainerColor = props.backgroundColor.compose,
          unfocusedContainerColor = props.backgroundColor.compose,
          disabledContainerColor = props.backgroundColor.compose,
          focusedTextColor = props.textColor.compose,
          unfocusedTextColor = props.textColor.compose,
          disabledTextColor = props.textColor.compose
        ),
        modifier = Modifier.menuAnchor(ExposedDropdownMenuAnchorType.PrimaryNotEditable, true)
      )
    }

    ExposedDropdownMenu(
      expanded = expanded,
      onDismissRequest = { expanded = false },
      matchTextFieldWidth = !hasCustomTrigger,
      shape = RoundedCornerShape(props.cornerRadius.dp),
      containerColor = props.menuBackgroundColor.composeOrNull ?: MenuDefaults.containerColor
    ) {
      val defaultItemColors = MenuDefaults.itemColors()
      props.options.forEach { option ->
        val icon = MaterialIconResolver.resolve(option.icon?.android)
        DropdownMenuItem(
          text = { Text(option.label) },
          leadingIcon = icon?.let { { Icon(it, contentDescription = null) } },
          colors = MenuDefaults.itemColors(
            textColor = props.menuTextColor.composeOrNull ?: defaultItemColors.textColor,
            leadingIconColor = props.menuTextColor.composeOrNull ?: defaultItemColors.leadingIconColor
          ),
          onClick = {
            expanded = false
            onValueChange(option.value)
          }
        )
      }
    }
  }
}
