import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  children: any;
}
// TODO: Declare props typings properly

export default function MainLayout({ children, title }: Props) {
  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}

      <main>{children}</main>

      <style jsx global>{``}</style>
    </>
  );
}
