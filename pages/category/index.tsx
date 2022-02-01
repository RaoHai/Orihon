import Link from "next/link";
import { getCategoryList } from "../../utils/api";
import type { Category } from "../api/category";

export interface MenuProps {
  categories: Record<string, Category>;
}

export default function Menu({ categories = {} }: MenuProps) {
  return <>
    <div className="mx-auto my-24 px-8 py-24 shadow-lg category bg-white rounded-sm">
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
                      <em>{key}</em> {category['title-zh'] || title}
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
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