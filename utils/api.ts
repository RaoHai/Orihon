
export interface Category {
  title: string;
  abbreviation: string;
  'short-title-zh': string;
  'title-zh': string;
  volumes: number;
}

export interface SubCategory {
  name: string;
  path: string;
}

export async function getCategoryList(): Promise<Record<string, Category>> {
  const result = await fetch('https://orihon.vercel.app/api/category');
  return await result.json();
}


export async function getSubCategoryById(id: string): Promise<SubCategory[]> {
  const result = await fetch(`https://orihon-mdolatzn2-luchen.vercel.app/api/category/${id}`);
  return await result.json();
}
