# Design Brief — La Tortuga EMR (Tablet-First)

## 1. Mission & Context
La Tortuga EMR is used by volunteer clinicians in rural Chiapas, Mexico.  
Design must be **simple, durable, and accessible** in clinics where gloves, low light, and intermittent connectivity are common.

- **Form factor:** Tablets (10–11", landscape-first)
- **Input method:** Stylus or gloved touch (no keyboard)
- **Users:** Clinicians, nurses, dental assistants, volunteers

---

## 2. Visual Direction
| Attribute | Description |
|------------|-------------|
| **Tone** | Calm, clinical, reassuring |
| **Palette** | Neutral background + teal accents |
| **Layout grid** | 8 px spacing scale |
| **Touch targets** | ≥ 48 px with 8 px hitSlop |
| **Contrast** | ≥ 4.5 : 1 (WCAG AA) |
| **Motion** | Subtle fades / slides only—no parallax |

---

## 3. Typography
| Role | Font | Size (px) | Weight |
|------|------|-----------|--------|
| H1 | Inter / System | 28 | 700 |
| H2 | Inter / System | 24 | 600 |
| Body | Inter / System | 16 | 400 |
| Label / Helper | Inter / System | 14 | 500 |

Line height ≈ 1.4×; letter-spacing 0 – 0.25 px.

---

## 4. Color Tokens (WCAG-Compliant)
| Token | Hex | Usage |
|--------|-----|--------|
| `primary` | `#0E7C86` | Buttons, headers |
| `primaryDark` | `#09565C` | Pressed / focus state |
| `background` | `#F5F7FA` | App background |
| `surface` | `#FFFFFF` | Cards, inputs |
| `text` | `#1A1A1A` | Main text |
| `subtleText` | `#5A6B7B` | Labels, hints |
| `success` | `#1D8E5B` | Success toasts |
| `warning` | `#B88402` | Offline / warning banners |
| `error` | `#B3261E` | Error text / borders |
| `divider` | `#E3E8EF` | Lines, card separators |

---

## 5. Components (Primitives)
### Button
- Variants: **primary**, **ghost**, **danger**
- Sizes: md (48 px h), lg (56 px h)
- States: default / hover / focus / pressed / disabled
- Ripple or opacity feedback

### Input
- Label, placeholder, helper, error text
- Clear icon optional
- Numeric keyboardType when needed

### CheckboxGroup / RadioGroup
- 48 × 48 min tap zones
- Label + optional description
- Focus outline + TalkBack labels

### SegmentedControl
- Horizontal pain scale 0–10  
  - Neutral → warm hues 7–10 (still passes contrast)
  - One-tap selection

### KeypadNumeric
- 3 × 4 grid: digits 0-9 + decimal + backspace  
- Large buttons, haptic feedback optional  
- Props: `onChange`, `onSubmit`, `allowDecimal`

### Card / SectionHeader / Tabs
- Card: white surface, 8 px radius, shadow md  
- SectionHeader: title + subtitle line  
- Tabs: top bar for section navigation; active indicator = primary teal

---

## 6. Layout Patterns
- **One section per screen** (no infinite scroll)
- **Next / Back** persistent at bottom
- **Offline banner** (yellow) appears under header
- **Sync chip** in header (Idle / Pending / Error)

---

## 7. Accessibility
- Focus order: Header → Tabs → Fields → Next / Back
- Screen reader labels on all interactive elements
- Avoid color-only distinctions
- Form validation messages read aloud

---

## 8. Internationalization
- English ↔ Spanish toggle
- All labels and helper text pulled from `/i18n/en.json` and `/i18n/es.json`
- No hard-coded text in components

---

## 9. Assets
- Font: Inter Regular, Medium, Bold (fallback system font)
- Icons: Simple line icons (Feather or Lucide)
- Logo: SVG / PNG under `/assets/`

---

## 10. References
- [WCAG 2.2 AA Touch Target Size Guideline](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Material Design 3 Accessibility](https://m3.material.io/foundations/accessibility/overview)

---

## 11. Deliverables for Design System v1
- `/design/tokens.json` – design tokens (colors, spacing, typography, radii)
- `/src/theme/index.ts` – exports theme
- `/src/components/ui/*` – primitives listed above
- `/src/screens/StyleguideScreen.tsx` – preview all primitives & states
