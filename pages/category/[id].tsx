import { getCategoryList, getSubCategoryById, SubCategory } from "./utils/api";

export default function CategoryByIdPage({ subCategories }: { subCategories: SubCategory[];}) {
  console.log('---> subCategories', subCategories);
  return (
    <>
      <h2>二级目录</h2>
    </>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { id } = params;
  const subCategories = await getSubCategoryById(id);

  return {
    props: {
      subCategories,
    },
  };
}

/**
 * generate secondary category pages
 */
export async function getStaticPaths() {
  const categories = await getCategoryList();
 
  const paths = Object.keys(categories).map(key => ({ params: { id: key } }));

  return { paths, fallback: false };
}
