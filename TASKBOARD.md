# Ludilearn — Taskboard

Statuts : ☐ à faire · ☐⟐ en cours · ☑ fait

## Vue d’ensemble
- ☑ Réorg dossier `C:\Apps\Ludilearn`
- ☑ Git distant configuré (`origin`)
- ☑ Branches: `module-1`, `module-1-dev`, `logs`
- ☑ Logging PowerShell auto → branche `logs`
- ☐ CI GitHub Actions (build PR) sur `module-1`
- ☐ Documentation MVP complète

---

## Module 1 — Base Next.js
- ☑ Scaffold Next.js 15 + TS + Tailwind
- ☑ Build OK (`npm run build`)
- ☑ Test local (`npm run dev`)
- ☐ Commit + push `module-1` → `module-1-dev`
- ☐ PR `module-1-dev → module-1` et merge
- ☐ CI: workflow build sur PR vers `module-1`
- ☐ Page d’accueil Ludilearn personnalisée (MVP)
- ☐ Page “À propos”
- ☐ Page “Connexion”

## Module 2 — Auth + Prisma (à venir)
- ☐ Scaffold module-2
- ☐ Prisma + SQLite init
- ☐ Routes auth (register/login)
- ☐ UI login/register
- ☐ Tests locaux
- ☐ Branches: `module-2`, `module-2-dev`, PR et CI

## Module 3 — i18n + UX (à venir)
- ☐ Scaffold module-3
- ☐ i18n (fr/en) pages clés
- ☐ Composants UI (LangSwitch)
- ☐ Tests locaux
- ☐ Branches: `module-3`, `module-3-dev`, PR et CI

---

## Infra & Hygiène repo
- ☑ Nettoyage `_archives` hors historique
- ☑ `.gitignore` prisma DB locales
- ☑ Branche `logs` dédiée
- ☐ Gabarit de PR (`.github/PULL_REQUEST_TEMPLATE.md`)
- ☐ Contrib guide (`CONTRIBUTING.md`)
- ☐ Codeowners (optionnel)

---

## MVP — périmètre
- ☐ Définir MVP (features minimales)
- ☐ Découper en issues/épopées
- ☐ Planning par module
