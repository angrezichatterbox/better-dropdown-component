# BetterDropdownComponent resolves Material icons by name via reflection
# (MaterialIconResolver.kt) to support the full Compose Material Icons
# catalog without a hand-maintained lookup table. Keep the generated
# icon accessor classes so that lookup keeps working in release builds.
-keep class androidx.compose.material.icons.filled.** { *; }
