import urllib from 'urllib';
import { pickBy } from 'lodash';
import { Octokit } from 'octokit';

import type { VercelRequest, VercelResponse } from '@vercel/node';

export interface Category {
  title: string;
  abbreviation: string;
  'short-title-zh': string;
  'title-zh': string;
  volumes: number;
}


export interface SubCategory {
  type: string;
  name: string;
  path: string;
}

export default async function listCategories(_req: VercelRequest, res: VercelResponse) {
  const result = await urllib.curl('https://raw.githubusercontent.com/cbeta-org/xml-p5/master/canons.json', { dataType: 'json' });
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

  const cbetaRepoContent = await octokit.rest.repos.getContent({
    owner: 'cbeta-org',
    repo: 'xml-p5',
    path: '',
  });

  const folders = (cbetaRepoContent.data as SubCategory[]).filter((d => d.type === 'dir')).map(d => d.name);
  const categories = result.data as Record<string, Category>;

  res.setHeader('Cache-Control', 's-maxage=86400');
  res.status(200).json(pickBy(categories, (_, k) => folders.includes(k)));
}
