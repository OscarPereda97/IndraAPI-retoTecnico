let {spanishKeys: spanishKeys} = require('../config/keyNames');

function replaceKeyName(data) {
  Object.keys(data).map((dato) => {
    let name
    Object.keys(spanishKeys).map((key) => {
      if (key == dato) {
        name = key;
        let newKey = spanishKeys[name];
        data[newKey] = data[name];
        delete data[name];
      }
    });

  });
  return data;
}

module.exports = {
  replaceKeyName
}