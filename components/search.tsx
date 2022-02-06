import { createElement, Fragment, useEffect, useMemo } from 'react';
import { render } from 'react-dom';
import {
  autocomplete,
  AutocompleteComponents,
} from '@algolia/autocomplete-js';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';

import type { SearchClient } from 'algoliasearch/lite';
import type { CategoryHit } from '../types/CategoryHit';

import '@algolia/autocomplete-theme-classic';

export 
type CategoryItemProps = {
  hit: CategoryHit;
  components: AutocompleteComponents;
}

export function CategoryComponent({ hit, components }: CategoryItemProps) {
  return (
    <div className="hit">
      <div className="hit-content">
        <div className="hit-description">
          <span className="hit-type">
            {hit.abbreviation}
          </span>
          <components.Snippet hit={hit} attribute="title-zh" />
        </div>
      </div>
    </div>
  );
}

export interface AlgoliaSearchProps {
  searchClient: SearchClient;
}

const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
  key: 'search',
  limit: 3,
});

export default function Search({ searchClient }: AlgoliaSearchProps) {
  const querySuggestionsPlugin = useMemo(() => 
    createQuerySuggestionsPlugin<CategoryHit>({
      searchClient,
      indexName: 'cbeta_category',
      getSearchParams({ state }) {
        return recentSearchesPlugin.data?.getAlgoliaSearchParams({
          clickAnalytics: true,
          hitsPerPage: state.query ? 5 : 10,
        })!;
      },
      transformSource({ source }) {
        return {
          ...source,
          templates: {
            item({ item, components }) {
              return <CategoryComponent hit={item} components={components} />
            }
          }
        };
      }
    }), [searchClient]);

  useEffect(() => {
    autocomplete<{}>({
      container: '#autocomplete',
      placeholder: 'Search',
      debug: true,
      openOnFocus: true,
      renderer: { createElement, Fragment },
      render({ children }, root) {
        render(children as React.DOMElement<any, any>, root);
      },
      plugins: [
        querySuggestionsPlugin
      ],
    });
  }, [querySuggestionsPlugin]);

  return (<div id="autocomplete" />);
}

