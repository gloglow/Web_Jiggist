import { Space_Grotesk, Playfair_Display } from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";
import "./../styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className={`${spaceGrotesk.variable} ${playfair.variable} bg-background-dark text-slate-100 font-display`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}