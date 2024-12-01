import localFont from "next/font/local";
import "./globals.css";
import { Inter, Poppins, Montserrat, Plus_Jakarta_Sans } from 'next/font/google';

import { Inter, Poppins } from 'next/font/google';

// Initialize fonts
const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "SolveKart",
  description: "The Future of Networking is Here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
