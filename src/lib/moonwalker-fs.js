import fs from 'fs';

async function getMoonwalks (guildId) {
  console.log('FS Moonwalks');
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
  console.log('FS Moonwalk');
  const fspath = import.meta.env.FS_PATH;
  const moonkey = `${fspath}/${key}.json`;
  const data = fs.readFileSync(moonkey);
  return JSON.parse(data);
};

async function getTitleMap (guildKey) {
  const fspath = import.meta.env.FS_PATH;
  const titlemap = `${fspath}/${guildKey}/_titlemap.json`;
  const data = fs.readFileSync(titlemap);
  return JSON.parse(data);
};

export {
  getMoonwalks,
  getMoonwalk
};
