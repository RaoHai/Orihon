import { Octokit } from 'octokit';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function getCategoryById(req: VercelRequest, res: VercelResponse) {
    const { id } = req.query;
    const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
    const result = await octokit.rest.repos.getContent({
        owner: 'cbeta-org',
        repo: 'xml-p5', 
        path: `${id}`,
    });

    res.setHeader('Cache-Control', 's-maxage=86400');
    res.status(200).json(result.data);
}
