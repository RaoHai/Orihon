import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Orihon (经折，Traditional Chinese: 經摺)</title>
        <meta name="description" content="An Unofficial Cbeta Staticization Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {children}
      </div>
    </>
  );
}
