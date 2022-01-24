import urllib from 'urllib';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 's-maxage=86400');
  const data = await urllib.curl('https://raw.githubusercontent.com/cbeta-org/xml-p5/master/canons.json', { dataType: 'json' });
  res.status(200).json(data);
}
