package expo.modules.betterdropdowncomponent

import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExposedDropdownMenuAnchorType
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import expo.modules.kotlin.records.Field
import expo.modules.kotlin.views.ComposeProps
import expo.modules.kotlin.views.FunctionalComposableScope
import expo.modules.ui.ModifierList
import expo.modules.ui.ModifierRegistry

data class BetterDropdownComponentComposeViewProps(
  @Field val options: List<String> = emptyList(),
  @Field val selectedValue: String? = null,
  @Field val placeholder: String = "",
  @Field val modifiers: ModifierList = emptyList()
) : ComposeProps

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FunctionalComposableScope.BetterDropdownComponentComposeViewContent(
  props: BetterDropdownComponentComposeViewProps,
  onValueChange: (String) -> Unit
) {
  var expanded by remember { mutableStateOf(false) }

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
    TextField(
      value = props.selectedValue ?: props.placeholder,
      onValueChange = {},
      readOnly = true,
      modifier = Modifier.menuAnchor(ExposedDropdownMenuAnchorType.PrimaryNotEditable, true)
    )

    DropdownMenu(
      expanded = expanded,
      onDismissRequest = { expanded = false }
    ) {
      props.options.forEach { option ->
        DropdownMenuItem(
          text = { Text(option) },
          onClick = {
            expanded = false
            onValueChange(option)
          }
        )
      }
    }
  }
}
