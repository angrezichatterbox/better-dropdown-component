export interface BetterDropdownComponentOptionIcon {
    /** SF Symbol name, e.g. "star.fill". Used as-is via `Image(systemName:)`. */
    ios?: string;
    /** Material icon name resolved against the full Compose Material Icons catalog, e.g. "Star". */
    android?: string;
}
export interface BetterDropdownComponentOption {
    label: string;
    value: string;
    icon?: BetterDropdownComponentOptionIcon;
}
//# sourceMappingURL=BetterDropdownComponentOption.d.ts.map