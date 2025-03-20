import type { Metadata } from "next";
import "./fonts"
import "./globals.css";



export const metadata: Metadata = {
  title: "Terminal Personal",
  description: "Terminal personal para interactuar con mi sitio web.",
  metadataBase: new URL("https://cosola.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
