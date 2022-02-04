# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation
### Prerequisites

For this project you need to have installed the following tools:
- `NodeJs`
- `Npm`
- `Python => v3.9`
	- `Pip`
	- `Pyyaml module`

### Dependencies

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

```console
npm run gensidebars
```

If you add new pages to the docs, you can run the following script to generate the configuration for the sidebar of the website.

## Build

```console
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


```console
npm run serve
```

After building, it is important to test that everything works as intended, and that your build was successful.
Run `serve` to start a server with your newly built project.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

**NOTE**: After a deploy, if you're getting a 404, you need to remember to set the GitHub pages redirect domain.
