import Link from "next/link";

export interface Category {
  title: string;
  abbreviation: string;
  'short-title-zh': string;
  'title-zh': string;
  volumes: number;
}

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

export async function getStaticProps() {
  const result = await fetch('https://orihon.vercel.app/api/category');
  const categories = await result.json();
  
  return {
    props: {
      categories,
    },
  };
}