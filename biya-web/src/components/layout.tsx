import Head from "next/head";
import NavBar from "./navBar";
import Footer from "./footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Baiya International Group Inc.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <header className="flex-none">
          <NavBar />
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pt-[60px]">
          {children}
        </main>

        {/* Footer (optional, uncomment when needed) */}
        <footer className="flex-none">
          <Footer />
        </footer>
      </div>
    </>
  );
}
