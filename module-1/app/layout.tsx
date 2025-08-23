import "./globals.css";
export const metadata = { title: "Ludilearn", description: "Module 1" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="fr"><body>{children}</body></html>);
}
