# Web for client of nasha-gora

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

For access to npm github registry, you need to generate personal access token in profile page:
go to:
* Profile sidebar(right top angle profile icon)
* Settings
* Developer settings(at the bottom)
* Personal access tokens(Tokens classic)
* Generate token with next rules: write:packages and delete:packages

Put that token to your bashrc/zshrc like that: `export NPM_TOKEN=<your token>`
and run

```bash
# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
