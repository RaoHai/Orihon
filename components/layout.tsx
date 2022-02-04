import { useMemo } from 'react';
import Head from 'next/head';
import algoliasearch from 'algoliasearch/lite';
import Search from './search';


export default function Layout({ children, appId = '', apiKey = '' }: { children: React.ReactNode; appId?: string; apiKey?: string; }) {
  const searchClient = useMemo(() => {
    return algoliasearch(appId, apiKey);
  }, [apiKey, appId]);

  return (
    <>
      <Head>
        <title>Orihon (经折，Traditional Chinese: 經摺)</title>
        <meta name="description" content="An Unofficial Cbeta Staticization Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Search searchClient={searchClient} />
        {children}
      </div>
    </>
  );
}

/**
 * genrate category menus
 * @returns 
 */
 export async function getStaticProps() {  
  return {
    props: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_CLIENT_KEY
    },
  };
}