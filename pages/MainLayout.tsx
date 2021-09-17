import Head from "next/head";

export default function MainLayout({ children, title = "Relax-rehab.me" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>{children}</main>

      <style jsx global>{``}</style>
    </>
  );
}
