import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./../styles/globals.css";
import Header from './components/header';
import Footer from './components/footer';

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
      {/* 폰트 변수를 body에 주입 */}
      <body className={`${spaceGrotesk.variable} ${playfair.variable} bg-background-dark text-slate-100 font-display`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}