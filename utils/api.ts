import type { Category, SubCategory } from "../pages/api/category";


export async function getCategoryList(endpoint: string): Promise<Record<string, Category>> {
  const result = await fetch(`${endpoint}/api/category`);
  return await result.json();
}


export async function getSubCategoryById(endpoint:string, id: string): Promise<SubCategory[]> {
  const result = await fetch(`${endpoint}/api/category/${id}`);
  // 万一没有
  if (result.status === 404) {
    return [];
  }
  return await result.json();
}
