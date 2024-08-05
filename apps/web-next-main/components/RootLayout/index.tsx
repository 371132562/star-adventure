import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto my-0 grid h-dvh w-dvw max-w-screen-xl grid-cols-[300px_1fr] overflow-hidden">
      <Aside />
      <main className="h-dvh">
        <Header />
        <section className="max-h-[calc(100%_-_4rem)] overflow-y-auto p-3">{children}</section>
        <Footer />
      </main>
    </div>
  );
}
