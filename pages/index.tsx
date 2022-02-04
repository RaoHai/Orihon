import type { NextPage } from 'next'
import algoliasearch from 'algoliasearch/lite';
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import Search from '../components/search';
import { getCategoryList } from '../utils/api';
import styles from '../styles/Home.module.css'
import { Category } from './api/category';



const Home: NextPage<{ appId: string; apiKey: string; categories: Record<string, Category>; }> = ({ appId, apiKey, categories }) => {
  const searchClient = useMemo(() => {
    return algoliasearch(appId, apiKey);
  }, [apiKey, appId]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
        <div className="mx-auto my-24 px-8 pt-12 pb-24 bg-white rounded-md shadow-lg">

          <div className="mb-8 w-48">
            <Search searchClient={searchClient} />
          </div>

          <div className="category">
            <h1 className='ml-8'>
              Orihon / 經摺
            </h1>

            <div className="border-solid border-inherit border-r-4">
              <div className="border-2 page-grid">
                <h2 className="text-left text-2xl">
                  册别目录
                </h2>
                <nav>
                  <div>&nbsp;</div>
                  {Object.keys(categories).map(key => {
                    const category = categories[key];
                    const { title, abbreviation } = category;

                    return (
                      <div key={title} className="py-2">
                        <Link href={`/category/${key}`} passHref>
                          <span>
                            <em className="not-italic font-mono text-base" style={{ writingMode: 'initial' }}>{key}</em>
                            {category['title-zh'] || title}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

/**
 * genrate category menus
 * @returns 
 */
 export async function getStaticProps() {  
  const categories = await getCategoryList();
  return {
    props: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_CLIENT_KEY,
      categories,
    },
  };
}


export default Home
