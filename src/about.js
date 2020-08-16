const axios = require('axios');

const about = async (host) => { // 获取插件信息
  const { data } = await axios.get(`${host}/about`, {});
  return data;
};

module.exports = about;
