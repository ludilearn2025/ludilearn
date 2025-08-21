import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic"; // ensure fresh on dev

export default async function UsersPage() {
  const count = await prisma.user.count();

  return (
    <main>
      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Test DB</h2>
        <p className="mt-2">Nombre d’utilisateurs en base : <strong>{count}</strong></p>
        <p className="mt-2 text-sm text-gray-600">Un admin est seedé par défaut.</p>
      </div>
    </main>
  );
}
