# Design Standards

## References

- Vercel Web Interface Guidelines: https://vercel.com/design/guidelines
- Fluid Functionalism: https://www.fluidfunctionalism.com/
- Fluid Functionalism registry: https://github.com/mickadesign/fluid-functionalism
- shadcn/ui conventions: component primitives, CSS variables, composable local files, no hidden design system dependency.

Do not copy Vercel. Use it as a quality bar: fast, accessible, clear, keyboard-friendly, sparse, and deliberate.

## Product Feel

Patchplane should feel:

- Monochrome, calm, sharp.
- Dense enough for working developers.
- Premium without decorative gradients.
- More like a forge and terminal than a SaaS dashboard.
- Built for repeated daily use, not a one-time landing page.

## Typography

- Primary: Inter.
- Monospace: JetBrains Mono.
- Letter spacing: `0`.
- No viewport-width font scaling.
- Use tabular numbers for counts, durations, versions, and uptime.
- Keep labels short. Do not explain obvious UI inside the UI.

## Color

Use monochrome as the base.

- Background: near black.
- Surface: charcoal.
- Border: graphite.
- Text: off-white.
- Muted text: mid gray.
- Accent: restrained green for healthy/success states.
- Destructive: red only for destructive or failed states.

Rules:

- Never rely on color alone.
- Avoid purple/blue gradients, beige palettes, orange/brown themes, and decorative color blobs.
- Increase contrast on hover, active, and focus.
- Use `color-scheme: dark`.

## Layout

- Every element aligns to a grid, edge, baseline, or optical center.
- Avoid nested cards.
- Use cards for repeated items, modals, and framed product surfaces only.
- Repository pages prioritize README, latest release, health, activity, clone command, and contribution entry points.
- Review pages prioritize changed intent, diff, comments, CI, and merge state.
- Mobile views preserve working controls, not just marketing copy.

## Interactions

Adopt Vercel-quality basics:

- Keyboard works everywhere.
- Visible focus rings.
- Touch targets at least 44px on mobile.
- Do not block paste.
- Links are real links.
- Async updates use `aria-live` where useful.
- Destructive actions confirm or provide undo.
- URL owns tabs, filters, pagination, and expanded panels.

## Fluid Functionalism Rules

Motion is information, not decoration.

Use it for:

- Proximity hover on dense controls.
- Sliding indicators on tabs and segmented controls.
- Font-weight shifts for active states.
- Copy-to-clipboard feedback.
- Thinking/progress steps for agent work.
- Dialog enter/exit and dropdown intent.

Do not use it for:

- Autoplay hero decoration.
- Constant ambient motion.
- Masking slow data.
- Cute transitions that hide state changes.

Implementation:

- Prefer CSS transitions for opacity and transform.
- Never use `transition: all`.
- Respect `prefers-reduced-motion`.
- Keep animations interruptible.

## Components

Use shadcn-compatible local components.

Initial components:

- Button
- Badge
- Tabs
- Table
- Dialog
- Dropdown
- Input group
- Copy input
- Tooltip
- Thinking steps

Prefer Fluid Functionalism registry components where they fit:

```bash
npx shadcn@latest registry add @fluid
npx shadcn@latest add @fluid/button
```

## File Size Rule

Prefer files under 500 lines. Split large surfaces by route section, component family, or product concern. Do not split purely to create abstraction; split when a file stops being easy to scan.

## Accessibility Gates

Before shipping a UI surface:

- Keyboard path works.
- Focus is visible.
- Empty, loading, error, sparse, and dense states exist.
- Text does not overlap at mobile or desktop widths.
- Controls keep stable dimensions.
- Contrast passes a practical visual check and should pass WCAG/APCA review.

## Copy Rules

- Use active voice.
- Use as few terms as possible.
- Buttons name the action: `Create Repository`, `Merge Change`, `Copy Remote`.
- Error messages give a next action.
- Do not use hype language in product UI.
