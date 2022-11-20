async function getMoonwalks (guildId) {
  console.log('S3 Moonwalks');
  let ary = [];
  const guildKey = `${guildId.substring(0, 2)}/${guildId.substring(2, 4)}/${guildId}`;
  const data = await getTitleMap(guildKey);
  for (let prop in data) {
    console.log(prop);
    if (prop.startsWith('m')) {
      const threadId = prop.replace('m', '');
      ary.push({
        key: `${guildKey}/${threadId}`,
        cat: data[prop].cat,
        title: data[prop].title,
        published: data[prop].published,
        tags: data[prop].tags
      });
    }
  }
  return ary;
};

async function getMoonwalk (key) {
  console.log('S3 Moonwalk');
  const s3BucketPrefix = import.meta.env.S3_BUCKET_PREFIX;
  const moonKey = `${s3BucketPrefix}/${key}.json`;
  const response = await fetch(moonKey);
  const data = await response.json();
  return data;
};

async function getTitleMap (guildKey) {
  const s3BucketPrefix = import.meta.env.S3_BUCKET_PREFIX;
  const titlemap = `${s3BucketPrefix}/${guildKey}/_titlemap.json`;
  const response = await fetch(titlemap);
  const data = await response.json();
  return data;
};

export {
  getMoonwalks,
  getMoonwalk
};
