# Cursor prompts — Stack AI in 14 days

Use these in Composer or Chat. Replace anything in `[brackets]`.
Do not ask it to “build the site”. Ask for one file, one change, one review.

## Before any prompt

- State the page locale (`es` or `en`).
- State the path (`src/app/[locale]/…`, `src/content/…`).
- State what not to touch (affiliates, ads, language switcher).

---

## 1. New tool profile

```
Add a profile for [name] in src/content/tools/.
Slug: [slug].
Real ES and EN copy — not a literal translation.
Honest pros and cons. Do not invent an affiliate URL.
Do not edit src/data/affiliates.ts.
Follow the existing Tool type. Do not redesign the profile.
```

## 2. Step-by-step tutorial

```
Write a tutorial in src/content/tutorials/ for [tool / flow].
Slug: [slug].
Level: [beginner|intermediate|advanced].
Concrete steps (what to click, what you should see). No filler.
ES and EN. Site voice: direct, no get-rich copy.
Link the tool by slug. Do not invent screenshots: leave the slot empty if there is no JPG.
```

## 3. Comparison

```
Add a [A] vs [B] comparison in src/data/comparisons.ts.
Same question to both. A usable verdict, not an eternal tie.
ES and EN. Short FAQ. Do not invent prices you have not checked.
```

## 4. Quality review (before merge)

```
Review the diff for [path or PR].
List only: 404s, links missing a locale, copy in one language only,
invented affiliates, ads touched, a language switcher added.
Do not reformat files the change does not need.
```

## 5. On-page SEO for one URL

```
Review on-page for [localized path, e.g. /en/tutorials/slug].
Title, description, H1, one internal link to a profile and one to a comparison or path.
Do not rewrite the whole article. Propose 3 concrete edits.
```

## 6. Stay in control

```
Do ONLY this: [one change].
Do not install dependencies.
Do not touch .env or secrets.
Do not turn ads on.
If something is unclear, ask; do not invent facts.
```

## Anti-prompts (do not use these)

- “Add 20 more tools.”
- “Add an ES/EN switcher.”
- “Put AdSense on every page.”
- “Ship this to production without me reading it.”
