import type { Category, SubCategory } from "../pages/api/category";

export async function getCategoryList(): Promise<Record<string, Category>> {
  const result = await fetch(`https://orihon.vercel.app/api/category`);
  return await result.json();
}

export async function getSubCategoryById(id: string): Promise<SubCategory[]> {
  const result = await fetch(`https://orihon.vercel.app/api/category/${id}`);
  // 万一没有
  if (result.status === 404) {
    return [];
  }
  return await result.json();
}
