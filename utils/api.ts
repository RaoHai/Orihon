import type { Category, SubCategory } from "../pages/api/category";


export async function getCategoryList(): Promise<Record<string, Category>> {
  const endpoint = process.env.VERCEL_URL || 'https://orihon.vercel.app';
  const result = await fetch(`${endpoint}/api/category`);
  return await result.json();
}


export async function getSubCategoryById(id: string): Promise<SubCategory[]> {
  const endpoint = process.env.VERCEL_URL || 'https://orihon.vercel.app';
  const result = await fetch(`${endpoint}/api/category/${id}`);
  // 万一没有
  if (result.status === 404) {
    return [];
  }
  return await result.json();
}
