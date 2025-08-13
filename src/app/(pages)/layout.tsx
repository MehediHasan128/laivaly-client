import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </main>
  );
}
