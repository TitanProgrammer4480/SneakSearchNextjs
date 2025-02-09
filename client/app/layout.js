import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const poppinSans = Poppins({
  variable: "--font-poppins",
  weight: "300",
  subsets: ["latin"],
})

export const metadata = {
  title: "Sneak Search",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppinSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
