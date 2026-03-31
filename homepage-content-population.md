# CLAUDE.md — Homepage Content Population

## Project Context

This is a luxury real estate website built with Next.js (App Router) and Tailwind CSS. It was rebuilt from a reference website and currently contains the reference site's content. Your job is to replace that content with the client's actual content and build any missing sections.

## Content Source

The client's homepage content is in `homepage-content.json` at the project root. This file contains 21 sections, each with:

- `id` — kebab-case section identifier
- `name` — human-readable section name
- `status` — either `"include"` (real client content) or `"example"` (fictional placeholder to demonstrate the section)
- `order` — position number 1-21 defining the section order on the page
- `content` — object with the section's text content (headings, body copy, CTAs, etc.)
- `needsInput` (optional) — if `true`, some content fields have `[Client to provide]` placeholders that still need real content

## Phase 4 Workflow

Execute these steps in order.

### Step 1: Audit the existing homepage

Read the homepage file (likely `app/page.tsx` or `app/page.jsx`) and catalog:

1. Which sections currently exist in the JSX
2. What order they're in
3. The component/styling patterns being used (class naming conventions, Tailwind patterns, layout structures, spacing between sections)

Output a brief summary of what you found before proceeding. Example:

```
Found 12 sections in app/page.tsx:
1. Navbar — sticky, transparent, uses <nav> with flex layout
2. Hero — full-height, background image, centered text overlay
3. Listings — grid layout, 3 columns
...
Pattern notes: Sections use <section> tags with py-24 spacing, max-w-7xl containers, font classes from local font config.
```

### Step 2: Map JSON sections to existing sections

Compare ALL 21 sections in `homepage-content.json` against the existing sections found in Step 1. Every section in the JSON must be mapped — both `"include"` and `"example"` status sections. Categorize each into one of three buckets:

- **REPLACE** — section exists in the JSX, swap the reference content with the JSON content
- **BUILD** — section does not exist in the JSX, needs to be created from scratch. This includes `"example"` status sections — they get built and rendered with the example badge, they are NOT skipped.
- **REORDER** — section exists but is in the wrong position relative to the JSON's `order` field

The mapping must contain exactly 21 sections. If your mapping has fewer than 21, you missed some. `status: "example"` does NOT mean skip — it means build the section and add the example badge.

Output the mapping before proceeding, with status noted. Example:

```
REPLACE (9 sections):
  1. Navigation Bar (include)
  2. Hero (include)
  3. Listings (include)
  4. About / Founder Spotlight (include)
  5. Stats / Why Choose Us (include)
  6. Communities / Areas Served (include)
  14. Testimonials (include)
  18. CTA Form (include)
  21. Footer (include)

BUILD (11 sections):
  8. Guides (example) ← will render with example badge
  9. Press / Media (include)
  10. Featured Videos (example) ← will render with example badge
  11. App Spotlight (example) ← will render with example badge
  12. Magazine Spotlight (example) ← will render with example badge
  13. Custom Services (example) ← will render with example badge
  15. Blog (example) ← will render with example badge
  16. Philanthropy (example) ← will render with example badge
  17. Social Media (include)
  19. Office Locations (example) ← will render with example badge
  20. Newsletter CTA (include)

REORDER (1 section):
  Social Media (currently after Footer, should be position 17)

Total: 21 sections mapped
```

Wait for confirmation before continuing.

### Step 3: Replace content in existing sections

For each REPLACE section:

1. Read the JSON content for that section from `homepage-content.json`
2. Find the corresponding JSX block in the homepage file
3. Replace the reference site's text content (headings, body copy, CTAs, links, stats, names, etc.) with the client's content
4. Do NOT change the layout, styling, or structure — only swap text content
5. If the section has `status: "example"`, add the example badge (see Example Section Badge below)
6. If the section has `needsInput: true`, leave a `{/* TODO: Client to provide */}` comment next to incomplete fields

### Step 4: Build missing sections

For each BUILD section (this includes both `"include"` AND `"example"` status sections — build all of them):

1. Read the JSON content for that section from `homepage-content.json`
2. Study the existing sections' patterns — match these exactly:
   - Same `<section>` tag structure
   - Same Tailwind spacing classes (padding, max-width, container patterns)
   - Same heading hierarchy and font sizes
   - Same responsive breakpoint patterns
   - Same animation/transition patterns if present
3. Build the new section JSX with the JSON content hardcoded in
4. If the section has `status: "example"`, include the example badge (see Example Section Badge below). This is what makes example sections visually distinct — they are fully built and rendered, just marked with a badge.
5. Place a `{/* NEW SECTION */}` comment above each newly built section for easy identification during review

### Step 5: Reorder sections

After all content is replaced and new sections are built, reorder the JSX blocks in the homepage file to match the `order` field (1-21) from the JSON. The final page structure should be sections 1 through 21, top to bottom.

### Step 6: Verify

After completing all changes:

1. Run `npm run build` (or `next build`) to check for compilation errors
2. List all 21 sections in their final order with their status (include/example)
3. Flag any issues found

## Example Section Badge

When a section has `status: "example"`, render a visible badge in the UI. Add this to the top of the section, inside the section container:

```jsx
<div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
  <span>✦</span>
  <span>Example Section — This is a preview of what this section could look like on your site</span>
</div>
```

Position it as the first element inside the section's container div, before the heading. It should be visible but not disruptive to the layout.

## Design Patterns: Navigation / CTA and Guides Sections

The "Navigation / CTA — Offers & Services" and "Guides" sections should follow one of these three layout patterns. Choose whichever best matches the number of link items in the JSON content and the overall aesthetic of the existing project.

### Pattern A: Full-Width Vertical Columns

A single full-width background image (luxury interior) with the link items overlaid as evenly-spaced columns separated by thin vertical dividers (1px white/light lines). Each column contains a short uppercase label centered vertically and horizontally within its column. The entire section is one row.

Structure:
- Full-width `<section>` with a background image (use placeholder gray bg)
- CSS Grid or Flexbox: one row, N equal columns where N = number of link items
- Each column: centered uppercase text, white color, letter-spacing wide (tracking-widest)
- Between each column: a 1px vertical divider line (border-r or absolute positioned)
- Section height: roughly 40-50vh, enough to feel like a visual break
- Hover: subtle background darken or text scale on each column
- Best for: 4-6 link items

```jsx
{/* Pattern A example structure */}
<section className="relative h-[50vh] w-full">
  <div className="absolute inset-0 bg-gray-300" /> {/* placeholder bg image */}
  <div className="relative z-10 grid h-full grid-cols-5"> {/* adjust cols to item count */}
    {items.map((item, i) => (
      <a key={i} className="flex items-center justify-center border-r border-white/30 last:border-r-0 text-white uppercase tracking-[0.25em] text-sm font-light hover:bg-black/20 transition-colors">
        {item.label}
      </a>
    ))}
  </div>
</section>
```

### Pattern B: Asymmetric Image Grid (Bento Style)

A grid of image cards in an asymmetric/bento layout — a mix of larger and smaller cards arranged in 2-3 rows. Each card has a background image (grayscale or muted) with an uppercase label centered on it. The overall feel is editorial and magazine-like. Cards have slight gaps between them.

Structure:
- Container with max-width and padding
- CSS Grid with defined template areas or spanning columns: `grid-cols-3` with some items spanning 1 col and others spanning 2
- Row 1: 3 cards (1 small, 1 large centered, 1 small)
- Row 2: 3 cards (1 large, 1 large centered, 1 small) — adjust to item count
- Each card: aspect-ratio (4/3 or 3/2), background image placeholder (use gray tones), centered uppercase white text
- Card images should use grayscale filter or a dark overlay for muted look
- Hover: slight scale or overlay lighten
- Best for: 5-8 link items

```jsx
{/* Pattern B example structure */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="grid grid-cols-3 gap-4">
    <a className="group relative aspect-[4/3] overflow-hidden bg-gray-400">
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
      <span className="relative z-10 flex h-full items-center justify-center text-white uppercase tracking-[0.2em] text-sm font-light">
        Sell My Home
      </span>
    </a>
    <a className="group relative aspect-[4/3] overflow-hidden bg-gray-500 col-span-1">
      {/* ... same pattern */}
    </a>
    {/* Continue for each item, varying col-span for asymmetry */}
  </div>
</section>
```

### Pattern C: Full-Width Three-Column Panels

Full-width section with a background image, divided into exactly 3 equal panels separated by thin vertical and horizontal lines (forming a grid). Each panel has a centered uppercase label. Minimal, architectural feel — like the section itself is a window divided into panes.

Structure:
- Full-width `<section>` with background image (use placeholder gray bg)
- 3 equal columns in a single row
- Each panel separated by thin lines (1px borders, white or light gray)
- A subtle horizontal line may run through the middle of the section for additional grid structure
- Each panel: centered uppercase text, light/white color, wide letter-spacing
- Hover: subtle background shift per panel
- Best for: exactly 3 link items (or multiples of 3 across rows)

```jsx
{/* Pattern C example structure */}
<section className="relative h-[45vh] w-full">
  <div className="absolute inset-0 bg-gray-300" /> {/* placeholder bg image */}
  <div className="relative z-10 grid h-full grid-cols-3 divide-x divide-white/30">
    {items.map((item, i) => (
      <a key={i} className="flex items-center justify-center text-white uppercase tracking-[0.25em] text-sm font-light hover:bg-black/20 transition-colors">
        {item.label}
      </a>
    ))}
  </div>
</section>
```

### Which Pattern to Choose

- Count the link items in the JSON for that section
- 3 items → Pattern C
- 4-6 items → Pattern A
- 5-8 items with visual variety needed → Pattern B
- If the existing project already has a similar navigation grid section, match that pattern instead of picking from these three
- Both the "Navigation / CTA" and "Guides" sections should use one of these patterns. They can use the same pattern or different ones — pick what fits the content best.

## Coding Standards

- Use TypeScript if the project is in TypeScript, JavaScript if it's in JavaScript — match whatever the existing project uses
- All text content comes from the JSON — do not write copy, just place what's in the file
- Preserve all existing Tailwind classes and patterns — do not "improve" or refactor the styling
- Keep the homepage as a single file (server component) unless the project already splits sections into separate component files
- If the project uses local fonts or custom Tailwind config, use those — do not introduce new font classes
- Responsive design: match the breakpoint patterns (sm/md/lg/xl) used in existing sections
- Images: use placeholder `<div>` blocks with a gray background and descriptive text where images would go (e.g., `<div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400">Hero Background Image</div>`). Do not use external image URLs.

## Common Commands

```bash
# Start dev server
npm run dev

# Build check
npm run build

# Lint
npm run lint
```

## File Structure Reference

```
app/
  page.tsx          # Homepage — this is the main file you're editing
  layout.tsx        # Root layout
  globals.css       # Global styles / Tailwind imports
homepage-content.json  # Client content from Phase 3
```

Adjust paths if the project structure differs — audit first, then proceed.