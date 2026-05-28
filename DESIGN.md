# Design Standard — Taller-02

This document defines the visual and UX design standards that all frontend applications in this repository must follow.

---

## Color Palette

| Token         | Value     | Usage                              |
|---------------|-----------|------------------------------------|
| `primary`     | `#2563EB` | Buttons, links, active states      |
| `primary-dark`| `#1D4ED8` | Button hover                       |
| `background`  | `#F1F5F9` | Page background                    |
| `surface`     | `#FFFFFF` | Cards, panels                      |
| `text`        | `#1E293B` | Primary text                       |
| `text-muted`  | `#64748B` | Secondary / helper text            |
| `border`      | `#E2E8F0` | Input borders, dividers            |
| `error`       | `#DC2626` | Error messages, destructive states |
| `success`     | `#16A34A` | Success messages                   |

---

## Typography

- **Font family**: `Inter`, fallback `sans-serif`
- **Base size**: `16px`
- **Heading 1**: `2rem`, weight `700`
- **Heading 2**: `1.5rem`, weight `600`
- **Heading 3**: `1.25rem`, weight `600`
- **Body**: `1rem`, weight `400`
- **Small / caption**: `0.875rem`, weight `400`

---

## Spacing Scale

Based on a `4px` base unit:

| Name  | Value  |
|-------|--------|
| `xs`  | `4px`  |
| `sm`  | `8px`  |
| `md`  | `16px` |
| `lg`  | `24px` |
| `xl`  | `32px` |
| `2xl` | `48px` |
| `3xl` | `64px` |

---

## Components

### Buttons

- **Primary button**: `background: primary`, `color: white`, `border-radius: 6px`, `padding: 10px 20px`
- **Hover**: `background: primary-dark`, transition `200ms`
- **Disabled**: `opacity: 0.5`, `cursor: not-allowed`
- **Font weight**: `600`

### Input fields

- `border: 1px solid border`, `border-radius: 6px`, `padding: 10px 12px`
- `font-size: 1rem`
- **Focus**: `outline: none`, `border-color: primary`, `box-shadow: 0 0 0 3px rgba(37,99,235,0.15)`
- **Error state**: `border-color: error`

### Cards / Panels

- `background: surface`, `border-radius: 12px`
- `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -1px rgba(0,0,0,0.04)`
- `padding: 32px`

### Form labels

- `font-size: 0.875rem`, `font-weight: 600`, `color: text`
- `margin-bottom: 6px`

---

## Layout

- **Page background**: `background` token
- **Max content width**: `1200px`, horizontally centered
- **Auth pages** (login, register): centered card, `max-width: 400px`
- **Dashboard / content pages**: full-width with a top navigation bar

---

## Feedback & States

- **Loading**: show a spinner or disabled state on interactive elements
- **Error messages**: shown inline below the relevant field or at the top of the form, using the `error` color
- **Success messages**: shown in a banner or inline, using the `success` color

---

## Icons

Use [Heroicons](https://heroicons.com/) (outline style by default) or standard Unicode symbols when no icon library is available.

---

## Accessibility

- All interactive elements must be keyboard-navigable
- Minimum contrast ratio of **4.5:1** for body text
- Form fields must have associated `<label>` elements
- Error messages should be announced via `aria-live` regions
