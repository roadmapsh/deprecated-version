const fs = require('fs');
const path = require('path');
const hasha = require('hasha');

module.exports = function addHash(absolutePath, callback) {
  const content = fs.readFileSync(path.join('.', absolutePath), {
    encoding: 'utf-8',
  });

  console.log(content);

  try {
    const hash = hasha(content, { algorithm: 'md5' });
    callback(null, `${absolutePath}?hash=${hash.substring(0, 10)}`);
  } catch (e) {
    callback(new Error(`Failed to addHash to '${absolutePath}': ${e}`));
  }
};
