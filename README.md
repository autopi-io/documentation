# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation
Node issues:

NODE_OPTIONS=--openssl-legacy-provider npm run build



### Prerequisites

For this project you need to have installed the following tools:
- `NodeJs`
- `Npm`

If the `gen_sidebars.py` script is going to be used, the following prerequisites are also needed:
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

This command starts a local development server and open up a browser window. 
Most changes are reflected live without having to restart the server (redirects needs build to work locally).

```console
npm run gensidebars
```

If you add new pages to the docs, you can run the above script to generate the configuration for the sidebar of the website.

**Running this scripts will change the layout of the documentation, instead add new docs manually in sidebars.js**.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


```console
npm run serve
```

After building, it is important to test that everything works as intended, and that your build was successful.
Run `serve` to start a server with your newly built project.

## Conventions

There are a few conventions that should be followed when working with the documentation repository.
1. When adding images for a guide:
  1. Create a folder in `static/img/guides/<id-of-new-guide>` and place the images there
	2. Ensure images aren't too large (no more than 2MB?)
	3. Ensure images are in JPEG/JPG format
2. Follow the naming conventions across the repository:
  1. File names should be written_in_snake_case
  2. Page IDs need to be separated-with-dashes
  3. Titles and headings use capital letters for each word with some exceptions (a, to, for, the, etc)
3. Try to have consistent spacing:
  1. Lines shouldn't be longer than 120 characters
  2. Indented lines are 2 spaces

### Changing Docs Structure

To ensure backwards compatibility, all changes to the path of any existing docs, needs to redirect the old URL to the new.
This is done in ```docusaurus.config.js``` under plugin-client-redirects, here the old links can be mapped to the new.
Below is an example:

```
{
    to: '/getting_started/autopi_tmu_cm4/guides-intro/', # New path
    from: '/guides/guides-intro/', # Old path
},
```
For multiple redirects to the same URL arrays can be utilised as seen in the documentation [here](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects#ex-config).

If entire subdirectories are moved, the path can be sustituted for the whole directory. In the example below all URLs with the '/guides/obd-ii/' URL
will be changed to '/cloud/obd-ii/' and avoid changing it for individually for each of the files in the directory.

```
if (existingPath.includes('/cloud/obd-ii/')) {
    return [
        existingPath.replace('/cloud/obd-ii/', '/guides/obd-ii/'),
    ];
}
```

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

**NOTE**: After a deploy, if you're getting a 404, you need to remember to set the GitHub pages redirect domain.
