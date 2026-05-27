/** Shared class strings for interactive UI primitives. */

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-line-strong";

const focusRingInverse =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-line-on-inverse";

export const buttonBase =
  "inline-flex items-center justify-center gap-2 text-md font-medium tracking-wide transition-all disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";

export const buttonVariants = {
  primary: {
    default: `${buttonBase} ${focusRing} bg-surface-inverse text-fg-on-inverse hover:bg-surface-inverse-soft active:bg-surface-inverse-soft`,
    inverse: `${buttonBase} ${focusRingInverse} bg-surface-soft text-fg hover:bg-white active:bg-white`,
  },
  secondary: {
    default: `${buttonBase} ${focusRing} text-fg border-b border-line-strong pb-1 hover:gap-3 active:opacity-80`,
    inverse: `${buttonBase} ${focusRingInverse} text-fg-on-inverse border-b border-line-on-inverse pb-1 hover:gap-3 active:opacity-80`,
  },
  ghost: {
    default: `${buttonBase} ${focusRing} text-fg-muted hover:text-fg active:opacity-80`,
    inverse: `${buttonBase} ${focusRingInverse} text-fg-on-inverse/75 hover:text-fg-on-inverse active:opacity-80`,
  },
} as const;

export const buttonSizes = {
  md: "px-8 py-4",
  lg: "px-10 py-4",
  sm: "text-xs",
  none: "",
} as const;

export const textLinkBase =
  "inline-flex items-center gap-2 font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export const textLinkVariants = {
  default: `${textLinkBase} ${focusRing} text-fg border-b border-line-strong pb-1 hover:gap-3 active:opacity-80`,
  inverse: `${textLinkBase} ${focusRingInverse} text-fg-on-inverse border-b border-line-on-inverse pb-1 hover:gap-3 active:opacity-80`,
  muted: `${textLinkBase} ${focusRing} text-fg-muted hover:text-fg active:opacity-80`,
  subtle: `${textLinkBase} ${focusRing} text-xs text-fg-muted hover:text-fg active:opacity-80`,
} as const;

export const textLinkSizes = {
  sm: "text-xs tracking-wide",
  md: "text-sm tracking-wide",
  lg: "text-base tracking-wide",
  xl: "text-lg md:text-xl tracking-wide",
} as const;
