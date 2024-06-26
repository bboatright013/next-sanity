import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { getPages } from "../../sanity/sanity-utils"
import "../globals.css";

export const metadata: Metadata = {
  title: "My Awesome Site",
  description: "Generated by create next app + sanity",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10" >
        <header className="flex items-center justify-between">
          <Link href="/"
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-large font-bold"
          >
          Brandon
          </Link>
          <div className="flex items-center gap-5 text-small text-gray-200">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                {page.title}
              </Link>
            ))}
          </div>
        </header>

        <main className="py-10">{children}</main>

      </body>
    </html>
  );
}
