export default function Home() {
  return (
    <main>
      <div className="rounded-2xl border p-6 shadow-sm">
        <p className="text-lg font-medium">Module 1 prêt ✅</p>
        <p className="mt-2 text-sm text-gray-600">
          Prisma (SQLite) est configuré. Allez sur <a href="/users">/users</a> pour voir le compteur.
        </p>
      </div>
    </main>
  );
}
