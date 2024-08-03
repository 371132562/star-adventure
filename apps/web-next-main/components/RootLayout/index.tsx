import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-screen w-screen grid-cols-[240px_1fr] overflow-hidden bg-amber-300">
      <Aside />
      <main>
        <Header />
        <section>{children}</section>
        <Footer />
      </main>
    </div>
  );
}
