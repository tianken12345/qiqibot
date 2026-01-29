import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedLink Exchange — Medical Information Communication",
  description:
    "A landing page concept for secure, clear medical information exchange across care teams and patient workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
