package expo.modules.betterdropdowncomponent

import androidx.compose.material.icons.Icons
import androidx.compose.ui.graphics.vector.ImageVector

/**
 * Resolves a Material icon by its property name (e.g. "Home", "Star") against the full
 * `Icons.Filled` catalog via reflection, so consumers aren't limited to a hand-picked subset.
 * Requires the `-keep class androidx.compose.material.icons.filled.**` rule shipped in
 * proguard-rules.pro, since R8 would otherwise strip the generated accessor classes this relies on.
 */
internal object MaterialIconResolver {
  private val cache = mutableMapOf<String, ImageVector?>()

  fun resolve(name: String?): ImageVector? {
    if (name.isNullOrBlank()) {
      return null
    }
    return cache.getOrPut(name) {
      try {
        val accessorClass = Class.forName("androidx.compose.material.icons.filled.${name}Kt")
        val getter = accessorClass.getMethod("get$name", Icons.Filled::class.java)
        getter.invoke(null, Icons.Filled) as? ImageVector
      } catch (error: ReflectiveOperationException) {
        null
      }
    }
  }
}
