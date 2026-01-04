# Open WebUI Shadcn Rebuild

This project is a front-end rebuild of Open WebUI using **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. The current implementation focuses on the core application shell (sidebar, chat layout, message list, and composer) with a static, pixel-inspired UI.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- shadcn/ui components

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    layout.tsx
    page.tsx
  components/
    ui/
  lib/
```

## Notes

- The layout is built entirely with Tailwind utility classes.
- UI elements are composed from shadcn/ui components in `src/components/ui`.
- The current page is a static mock of the Open WebUI shell for future feature expansion.
