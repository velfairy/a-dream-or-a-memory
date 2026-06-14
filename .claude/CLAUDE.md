# Claude Rules — Retro Y2K Website Project

This file tells Claude how to behave in this project across all sessions.

---

## On Session Start

1. **Always read these files first** before doing any work:
   - `docs/current-state.md` — where things actually are right now
   - `docs/plan.md` — what the next steps are
   - `docs/goal.md` — what we are building and why

2. **Do not rely on conversation history alone.** The docs are the source of truth. If a doc and the conversation conflict, trust the doc and flag the discrepancy.

3. **Check the file system** matches `current-state.md`. If files listed as done are missing, or files not listed exist, flag it before proceeding.

---

## Before Starting Any Work

- Identify which plan step(s) the user's request maps to.
- If the request is outside the plan, note that and ask whether to add it to the plan first.
- Do not skip or reorder plan phases without flagging it.

---

## While Working

- **Do not create files** that aren't in `docs/directory-structure.md` without updating that doc first.
- **Do not introduce new assets** without adding them to `docs/asset-catalog.md`.
- After completing each plan step, mark it done in `docs/plan.md` immediately — do not batch updates.

---

## On Session End (or after any meaningful milestone)

Update these files before finishing:

| File | What to update |
|------|---------------|
| `docs/action-log.md` | Add a dated entry describing what was done this session |
| `docs/current-state.md` | Reflect the new reality: what files exist, what's done, any open issues |
| `docs/plan.md` | Mark completed steps, add new steps if discovered during work |
| `docs/asset-catalog.md` | Update status column for any assets created or changed |

---

## Design Constraints (never violate without explicit user approval)

- No JS frameworks, no build tools.
- Single `style.css` — no per-page stylesheets.
- Assets live in `assets/images/` (raster) or `assets/svgs/` (vector) only.
- All styling decisions must match `docs/design-references.md`.
- Do not add "modern/clean" design elements that break the Y2K aesthetic.

---

## When to Ask vs. When to Proceed

**Ask first if:**
- A decision isn't covered by the existing docs
- The user's request would change the directory structure
- A new page needs to be added
- A design choice conflicts with `design-references.md`
- The plan order needs to change

**Proceed without asking if:**
- The task is clearly the next step in `plan.md`
- The file to create/edit is already in `directory-structure.md`
- The asset is already in `asset-catalog.md` with a defined spec

---

## Doc Update Format

### action-log.md entries
```
## YYYY-MM-DD — Session N — [Short title]
- [x] Thing completed
- [x] Another thing completed
- [ ] Thing that was started but not finished (carry to next session)
```

### current-state.md
Replace the previous snapshot entirely. Always update the "Last updated" date.

### plan.md
Mark steps with `[x]` when done. Add new steps at the end of the relevant phase with the next available step number.
