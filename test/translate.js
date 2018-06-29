const request = require("request-promise");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const zh = require("../server/i18n/zh-CN.json");
const appid = '20171027000091161';
const key = 'gOZhWnp0BQD0KBC_Ey8a';

const translate = (query, from, to) => {
  const salt = new Date().getTime();
  // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
  const str1 = appid + query + salt + key;
  const sign = crypto.createHash('md5').update(str1).digest('hex');
  let queryStr = `?q=${encodeURIComponent(query)}&appid=${appid}&salt=${salt}&from=${from}&to=${to}&sign=${sign}`;
  return request({
    uri: `http://api.fanyi.baidu.com/api/trans/vip/translate` + queryStr,
    method: "GET"
  });
};

let arr = [];

for (let key in zh) {
  if (typeof zh[key] === 'string') {
    arr.push(zh[key]);
  } else {
    for (let key2 in zh[key]) {
      arr.push(zh[key][key2])
    }
  }
}
let queryStr = arr.join('\n');

const genJson = async(filename, toLang) => {
  let res = await translate(queryStr, 'zh', toLang);
  res = JSON.parse(res);
  let i = 0;
  for (let key in zh) {
    if (typeof zh[key] === 'string') {
      zh[key] = res.trans_result[i].dst;
      i++;
    } else {
      for (let key2 in zh[key]) {
        zh[key][key2] = res.trans_result[i].dst;
        i++;
      }
    }
  }
  let filePath = path.join(__dirname, "../server/i18n/", filename + ".json");
  fs.writeFileSync(filePath, JSON.stringify(zh));
};

genJson("en-US",'en');