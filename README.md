
# CloudGoddess — Landing + Live Demo + Widget

A colorful, female-forward SaaS landing page for Senior Cloud Solution Architects. Includes:
- `index.html` sales page (WarriorPlus buttons pre-wired — replace with your links).
- `/demo/` live interactive demo (visual builder, AI mock, cost/ROI, export).
- `/widget/` embeddable widget (zip included).

## Quick Deploy (GitHub Pages)
1. Create a new repo (e.g., `CloudGoddess`), set **branch** to `main`.
2. Upload the *contents* of this ZIP (keep folders).  
3. Enable **Settings → Pages → Source: Deploy from a branch → main /root**.
4. Visit `https://YOUR_USER.github.io/REPO_NAME/`

## Customize
- Update WarriorPlus buy links inside `index.html`.
- Change colors in `assets/style.css` (see CSS variables at top).
- Replace logo/name/text as desired.

## Widget
- A ready-to-embed widget ships in `/widget/CloudGoddess-Widget.zip`.
- To host it in the same repo, unzip and place `cloudgoddess-widget.html` + `cloudgoddess-widget.js` in `/widget/` (already included), or keep the ZIP for direct download.
- Embed example:
```html
<iframe src="widget/cloudgoddess-widget.html" style="width:100%;height:560px;border:0"></iframe>
```

## Notes
This toolkit avoids regulated data collection (no PII/medical/financial inputs). It’s intended for planning & demos; always validate costs for your cloud provider/region.
