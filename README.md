# LudiLearn — Module 1 (DB & Prisma — SQLite)

## Prérequis
- Node.js **20.x**
- npm

## Commandes à exécuter
```bash
npm install
copy .env.example .env   # Windows
# macOS/Linux: cp .env.example .env

npx prisma migrate dev --name init
# (optionnel) Ouvrir Prisma Studio: npx prisma studio

# Seed (crée admin@example.com)
npx prisma db seed

npm run dev
```

## URL à ouvrir
- Accueil : http://localhost:3000
- Test DB : http://localhost:3000/users

## Vérifications
- La migration s'exécute sans erreur.
- Le seed affiche « Seed complete. Users in DB: 1 ».
- Sur `/users`, vous voyez **Nombre d’utilisateurs en base : 1**.

## Notes
- Pas d'enums Prisma, pas de `@db.Text` (compatibles SQLite).
- Alias TS `@/*` opérationnel (voir `src/lib/prisma.ts`).
- `.env.example` inclus.

---
Réponds **OK** quand tu vois **Nombre d’utilisateurs en base : 1** sur `/users`.
