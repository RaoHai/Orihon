# Orihon (经折，Traditional Chinese: 經摺)

A Unofficial Cbeta Staticization Project.

<p>
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://badgen.net/badge/icon/Made%20by%20Vercel?icon=zeit&label&color=black&labelColor=black">
  </a>
  <a aria-label="cypress" href="https://dashboard.cypress.io/projects/6xehag/runs">
    <img src="https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/6xehag/master&style=flat&logo=cypress" />
  </a>
  <a aria-label="License" href="https://github.com/RaoHai/orihon/blob/main/LICENSE">
    <img alt="" src="https://badgen.net/github/license/RaoHai/orihon">
  </a>
</p>

<h2>Features</h2>

* 📚 Pure static, All documents are hosted on the CDN via server rendering. So, it's really fast.
* 📦 Out of the Box, Orihon has build-in cbeta documents and font rendering. No additional content needs to be downloaded.
* 🚀 Self hosted supported. Supporting 1-click-hosting on vercel.

<h2>Run Local</h2>

Create `.env.local` at root directory of repository:

```
ALGOLIA_APP_ID="{{YOUR ALGOLIA APP ID}}"
ALGOLIA_CLIENT_KEY="{{YOUR ALGOLIA QUERY KEY}}"
```

Then run `yarn dev`, open `http://localhost:3000/`.


<h2>Self-hosted Guide</h2>

### Enviroment Variables
* `process.env.GITHUB_ACCESS_TOKEN` Github Access Token to read github repo contents
* `process.env.ALGOLIA_APP_ID` [Algolia](https://www.algolia.com/) Application ID to implements search.
* `process.env.ALGOLIA_ADMIN_KEY` [Algolia](https://www.algolia.com/) Admin API Key to add Algolia index.

<h2>Special Thanks to</h2>
<p>(In chronological order)</p>

- [cbeta-org / xml-p5](https://github.com/cbeta-org/xml-p5) for  datasources maintaining.
- [赫蹏（hètí）](https://github.com/sivan/heti) for the great inspiration.