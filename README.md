# Recipes Studio

This is a CMS for creating, storing, and sharing recipes via sanity content studio and the [Recipes Web App](https://github.com/ajax2012/recipes-web). Using this should give you a free way to host and manage all of your favorite recipes.

## Getting started

Install sanity:

```bash
npm install -g @sanity/cli
```

Once the project is cloned and sanity is installed

```bash
cd recipes-studio
sanity init
```

This should create a sanity.json file for you. If it doesn't, copy and paste the following. Remember to add your projectId and change the dataset if you need to.

```json
{
  "root": true,
  "project": {
    "name": "recipes-studio"
  },
  "api": {
    "projectId": "",
    "dataset": "production"
  },
  "plugins": [
    "@sanity/base",
    "@sanity/default-layout",
    "@sanity/default-login",
    "@sanity/desk-tool"
  ],
  "env": {
    "development": {
      "plugins": [
        "@sanity/vision"
      ]
    }
  },
  "parts": [
    {
      "name": "part:@sanity/base/schema",
      "path": "./schemas/schema"
    }
  ]
}
```

Run the project to make sure it works:

```bash
sanity start
```

If it works, deploy the studio:

```bash
sanity deploy
```

Then visit the [dashboard](https://www.sanity.io/manage) to create and copy the API key and other private data for the recipes-web project. Remember to update your CORS settings.

## Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
