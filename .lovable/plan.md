
## Image Resize Controls in the Blog Editor

### The Problem
Right now, when you insert an image into a blog post using the editor, it just takes up the full width of the content area. There's no way to make it smaller — say 50% width, or float it to the left or right alongside text.

### The Solution
Add a small image sizing toolbar that appears whenever you click on an image inside the editor. It will offer quick size presets and alignment options.

### What the Controls Will Look Like

When you click an image in the editor, a small floating toolbar appears above it with:

```text
[ Small — 33% ] [ Medium — 50% ] [ Full width ] | [ Left ] [ Centre ] [ Right ]
```

- **Small** — image takes up ⅓ of the column (good for inline illustrations)
- **Medium** — image takes up ½ the column (balanced look)
- **Full** — image stretches across the full post width (current default)
- **Left / Centre / Right** — floats the image or centres it on the page

### Technical Details

1. **Extend the Tiptap Image extension** (`src/components/RichTextEditor.tsx`)
   - Use Tiptap's `updateAttributes` to store a `width` value (e.g. `33%`, `50%`, `100%`) directly on the `<img>` tag as an inline style
   - Add a `data-align` attribute to store alignment (left, center, right)
   - Render a small floating toolbar using a Tiptap `NodeView` (React component) that wraps each image, appearing on selection

2. **Update blog post CSS** (`src/index.css`)
   - Make `.blog-content img` respect `width` inline styles passed through
   - Add alignment helpers:
     - `float: left` with margin right for left-aligned images
     - `margin: 0 auto` with `display: block` for centred images
     - `float: right` with margin left for right-aligned images

3. **No database changes needed** — widths and alignment are stored as HTML attributes inside the `content` field that already exists.

### What Changes

| File | Change |
|---|---|
| `src/components/RichTextEditor.tsx` | Add image NodeView with resize/align toolbar |
| `src/index.css` | Add CSS rules to honour width and alignment on `.blog-content img` |

### End Result

When you click an image in the editor you get a clean one-click way to set it to small, medium, or full width — and the published blog post will display it at exactly that size.
