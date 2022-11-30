# Astro Moonwalks

This is a sidekick project to the Discord Bot [Moonwalker](https://github.com/readonlychild/moonwalker), the discord bot that serializes discord forum threads to JSON.

# How to use this project

The following steps are required regardless of the configuration of the Moonwalker bot.

```bash
# grab a copy of the project
git clone https://github.com/readonlychild/astro-moonwalks.git
# go into project folder
cd astro-moonwalks
# install dependencies
npm install
```

## With the hosted version of Moonwalker

Pairing this project to a discord server where Moonwalker has been setup and some threads have been published.

- Rename file `.env.s3` to `.env`
- Paste your discord server ID into the `GUILD_ID` variable and save the file.

These steps are all that is needed. 


## With your self-hosted Moonwalker

When you are running your own version or Moonwalker, you must have configured it to serialize the moonwalks into either an S3 bucket, or the bot's filesystem. 

> [2022.11] There could potentially be other modes of serialization that could be considered more advanced.

### S3 mode

If you configured your Moonwalker to use S3 mode, then you can use the `.env.s3` file.

- Rename file `.env.s3` to `.env`
- Paste your discord server ID into the `GUILD_ID` variable
- Update the `S3_BUCKET_PREFIX` variable to point to where you told Moonwalker to save your moonwalks.

> TODO: Add a section where the bucket is not public.


### Filesystem mode

If you configured your Moonwalker to use FS mode, then you will need to do the following:

- Rename file `.env.fs` to `.env`
- Paste your discord server ID into the `GUILD_ID` variable
- Update the `FS_PATH` variable to point to where your Moonwalker bot is running. You should point to the `/records` folder where the moonwalks are serialized, do not end the value with a trailing slash.



## In Action (locally)

You can see the site in action by running 

```bash
npm run dev
```

If everything goes well, you can visit `http://localhost:3000` to see a list of your threads, and click into them for the details.

## Generate static Html

The following command will generate a series of html files in a `/dist` folder.

```bash
npm run build
```

## Deploy

To deploy your site to the WWW, please follow the documentation in [docs.astro.build / deploys](https://docs.astro.build/en/guides/deploy/)


# Glossary

## Moonwalk

A Discord Forum thread that has been published using the Moonwalker bot.

## Moonwalker

The Discord Bot that serializes the forum threads (creates moonwalks) into JSON files.

# 🚀 Project Structure

This project started from an empty project from `npm create astro@latest`

There are a few components to handle some pieces for the moonwalks.

- MessageAttachments.astro
- MessageEmbeds.astro
- MessageType.astro

