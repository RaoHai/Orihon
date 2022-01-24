import urllib from 'urllib';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  return await urllib.curl('https://raw.githubusercontent.com/cbeta-org/xml-p5/master/canons.json', { dataType: 'json' });
}
