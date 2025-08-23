import "./globals.css";

export const metadata = {
  title: "LudiLearn",
  description: "LudiLearn — Module 1 (DB & Prisma)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <div className="mx-auto max-w-2xl p-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">LudiLearn</h1>
            <p className="text-sm text-gray-600">Module 1 — DB & Prisma (SQLite)</p>
            <nav className="mt-2 text-sm">
              <a href="/" className="mr-4">Accueil</a>
              <a href="/users">/users</a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
