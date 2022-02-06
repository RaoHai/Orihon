import { Hit } from '@algolia/client-search';
import { Category } from '../pages/api/category';

export type CategoryRecord = Category & {
  hierarchicalCategories: {
    lvl0: string;
    lvl1?: string;
    lvl2?: string;
    lvl3?: string;
    lvl4?: string;
    lvl5?: string;
    lvl6?: string;
  };
  query: string; 
  popularity: number; 
  nb_words: number;
} & Record<string, any>;

type WithAutocompleteAnalytics<THit> = THit & {
  __autocomplete_indexName: string;
  __autocomplete_queryID: string;
};

export type CategoryHit = WithAutocompleteAnalytics<Hit<CategoryRecord>>;
