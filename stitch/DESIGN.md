---
name: Neon Arcade
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#ffafd3'
  on-secondary: '#620040'
  secondary-container: '#85145a'
  on-secondary-container: '#ff93c8'
  tertiary: '#d8daff'
  on-tertiary: '#131e8c'
  tertiary-container: '#b6bcff'
  on-tertiary-container: '#3842ab'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#ffd8e7'
  secondary-fixed-dim: '#ffafd3'
  on-secondary-fixed: '#3d0026'
  on-secondary-fixed-variant: '#85145a'
  tertiary-fixed: '#e0e0ff'
  tertiary-fixed-dim: '#bdc2ff'
  on-tertiary-fixed: '#000767'
  on-tertiary-fixed-variant: '#2f3aa3'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  hud-display:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '800'
    lineHeight: '1'
    letterSpacing: 0.05em
  hud-label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 12px
  margin-compact: 16px
  panel-padding: 12px
---

## Brand & Style
The design system is built to evoke the high-octane energy of a futuristic arcade. It prioritizes speed, precision, and visual feedback, creating an immersive "flow state" for the player. The aesthetic combines **Glassmorphism** and **Retro-Futurism**, utilizing deep shadows and vibrant light-emitted effects to simulate a digital HUD (Heads-Up Display). 

The target audience is competitive players who value clarity and immediate visual response. The UI should feel like hardware—tactile, glowing, and reactive. Every interaction should emit a "pulse" of light, reinforcing the connection between the player's input and the game's state.

## Colors
This design system utilizes a high-contrast palette optimized for dark environments. 

- **Primary (Cyan):** Used for interactive elements, player-positive actions, and essential HUD data.
- **Secondary (Magenta):** Used for enemy indicators, high-alert warnings, and secondary kinetic elements.
- **Background (Slate):** A deep, matte navy that provides the necessary contrast for neon glows to pop without causing eye strain.
- **Accents (Indigo):** Used for background structural elements and inactive HUD states to maintain depth.

Colors should be applied using additive blending logic; where elements overlap, the glow should intensify.

## Typography
The typography is split between **Space Grotesk** for impactful, geometric headings and **Inter** for functional HUD elements. 

- **Headlines:** Use Space Grotesk to provide a technical, futuristic character to game titles, menus, and victory screens.
- **HUD Elements:** Use Inter for real-time data like scores, timers, and health bars. The high x-height and clear apertures ensure readability during fast-paced movement.
- **Labels:** Small labels should always be uppercase with increased letter spacing to mimic aerospace instrumentation.

## Layout & Spacing
This design system employs a **fixed-ratio HUD layout** designed for compact browser gaming. The spacing rhythm is tight, utilizing a 4px base unit to maximize the playable area while keeping UI controls within easy reach of the thumbs or mouse perimeter.

- **Grid:** A 12-column grid is used for menus, but in-game overlays use a "Corner Anchor" system, placing HUD elements at the four corners of the viewport with a consistent 16px margin.
- **Gutters:** Tight 12px gutters keep related data blocks (like Score and Multiplier) visually grouped.
- **Mobile:** On small screens, HUD elements collapse into top/bottom bars to prevent obscuring the central gameplay zone.

## Elevation & Depth
Depth is created through **Glassmorphism** and light emission rather than traditional shadows. 

1.  **Backdrop Blurs:** All HUD panels must use a high-saturation backdrop filter (20px-30px blur) with a low-opacity white or cyan tint (5-10%).
2.  **Neon Strokes:** Instead of drop shadows, elevated elements use a 1px inner border and a soft outer "bloom" (glow) using the primary or secondary color.
3.  **Tonal Stacking:** Objects closer to the player are brighter and have more intense glows, while background elements are desaturated and dimmer.

## Shapes
The shape language is "Technical-Soft." A consistent **0.25rem (4px)** radius is applied to most UI components to give them a manufactured, hardware-grade feel without the aggression of sharp points.

- **Panels:** Use a standard `rounded-sm` (4px).
- **Interactive Triggers:** Buttons may use `rounded-lg` (8px) to distinguish them from static HUD readouts.
- **Status Pills:** Small indicators like "Live" or "Ready" use full pill-shaped rounding to contrast against the mostly rectangular grid.

## Components
### Game Buttons
Buttons are "glossy." They feature a top-down linear gradient (lighter at the top, darker at the bottom) and a 1px solid neon border. On hover, the border glow intensity doubles, and the text gains a slight outer glow.

### HUD Panels
Containers for scores and stats. They should have a semi-transparent background (#ffffff10) and a heavy background blur. The top edge should have a 1px highlight to simulate a glass edge catching the light.

### Input Fields
Used for player names or settings. Inputs should be dark with a bottom-only border in Cyan. When focused, the border "pulses" and the background tint increases.

### Game Status Indicators
Small, circular pips.
- **Active:** Cyan glow with a breathing animation.
- **Danger:** Magenta flickering light.
- **Offline:** Neutral grey, no glow.

### Cards & Modals
Menu cards use a "Cyber-Border" style—thick magenta corners with thin cyan lines connecting them, creating a framed, high-tech bracket effect around the content.