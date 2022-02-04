import { Hit } from 'react-instantsearch-core';
import {
  RefinementList,
  Hits,
  Configure,
  Highlight,
  InstantSearch,
  SearchBox,
} from 'react-instantsearch-dom';
import type { Category } from '../pages/api/category';
import type { SearchClient } from 'algoliasearch/lite';

// Include only the reset
import 'instantsearch.css/themes/reset.css';
// or include the full Satellite theme
import 'instantsearch.css/themes/satellite.css';


export function HitComponent({ hit }: { hit: Hit<Category> }) {
  return (
    <div className="hit">
      <div className="hit-content">
        <div>
          <Highlight attribute="title" hit={hit} />
        </div>
        <div className="hit-type">
          <Highlight attribute="abbreviation" hit={hit} />
        </div>
        <div className="hit-description">
          <Highlight attribute="title-zh" hit={hit} />
        </div>
      </div>
    </div>
  );
}

export interface AlgoliaSearchProps {
  searchClient: SearchClient;
}

export default function Search({ searchClient }: AlgoliaSearchProps) {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName='cbeta_category'
    >
      <Configure hitsPerPage={12} />
      <SearchBox />
    </InstantSearch>
  );
}
