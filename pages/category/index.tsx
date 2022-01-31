import Link from "next/link";
import { Category, getCategoryList } from "./utils/api";


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
  const categories = await getCategoryList();
  
  return {
    props: {
      categories,
    },
  };
}