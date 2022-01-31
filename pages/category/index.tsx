import Link from "next/link";
import { getCategoryList } from "../../utils/api";
import type { Category } from "../api/category";


export interface MenuProps {
  categories: Record<string, Category>;
}

export default function Menu({ categories = {} }: MenuProps) {
  return <>
    <h2>册别目录</h2>
    <div>
      <nav>
        {Object.keys(categories).map(key => {
          const category = categories[key];
          const { title, abbreviation } = category;

          return (
            <li key={title}>
              <Link href={`/category/${key}`} passHref>
                <span>
                  <em>{key}</em> {category['title-zh'] || title}
                </span>
              </Link>
            </li>
          );
        })}
      </nav>
    </div>
  </>
}

/**
 * genrate category menus
 * @returns 
 */
export async function getStaticProps() {
  const endpoint = process.env.VERCEL_URL || 'https://orihon.vercel.app';
  const categories = await getCategoryList(endpoint);
  
  return {
    props: {
      categories,
      endpoint,
    },
  };
}