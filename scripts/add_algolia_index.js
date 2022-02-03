import { config } from 'dotenv';
import algoliasearch from 'algoliasearch/lite';

async function main() {
  config();
  console.log('--> constructing algolia index');
  try {
    const result = await fetch('https://orihon.vercel.app/api/category');
    const categories = await result.json();
    const transformed = Object.keys(categories).map((key) => {
      const category = categories[key];
      return {
        objectID: key,
        ...category,
      };
    });

    const client = algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_ADMIN_KEY,
    );

    const index = client.initIndex("cbeta_category");
    const algoliaResponse = await index.saveObjects(transformed);
    // check the output of the response in the console
    console.log(
      `🎉 Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
        "\n",
      )}`,
    );
  } catch (err) {
    console.err('Fetch Category Failed', err);
  }
}

await main();
