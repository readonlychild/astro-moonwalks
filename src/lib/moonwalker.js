import { getMoonwalks as getMoonwalksFromFs, getMoonwalk as getMoonwalkFromFs } from './moonwalker-fs';
import { getMoonwalks as getMoonwalksFromS3, getMoonwalk as getMoonwalkFromS3 } from './moonwalker-s3';

const mode = import.meta.env.MOONWALK_MODE;

async function getMoonwalks (guildId) {
  if (mode === 'fs') {
    return await getMoonwalksFromFs(guildId);
  } else {
    return await getMoonwalksFromS3(guildId);
  }
};

async function getMoonwalk (key) {
  if (mode === 'fs') {
    return await getMoonwalkFromFs(key);
  } else {
    return await getMoonwalkFromS3(key);
  }
};

export {
  getMoonwalks,
  getMoonwalk
};
