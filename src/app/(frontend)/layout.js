import Navbar from "@/components/Frontend/Navbar/page";
import "../globals.css";
import Footer from "@/components/Frontend/Footer/page";

export const metadata = {
  title: "Khwaja Blogginng Site",
  description: "Khwaja Blogginng Site",
};

export default function HomeRootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
