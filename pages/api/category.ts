import urllib from 'urllib';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function listCategories(_req: VercelRequest, res: VercelResponse) {
  const result = await urllib.curl('https://raw.githubusercontent.com/cbeta-org/xml-p5/master/canons.json', { dataType: 'json' });

  res.setHeader('Cache-Control', 's-maxage=86400');
  res.status(200).json(result.data);
}
