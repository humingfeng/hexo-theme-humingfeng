const { doc, type, defaultValue, required, requires } = require('../common/utils').descriptors;

module.exports = {
    [type]: 'object',
    [doc]: 'Search plugin settings\nhttps://humingfeng.github.io/hexo-theme-humingfeng/categories/Plugins/Search',
    type: {
        [type]: 'string',
        [doc]: 'Name of the search plugin',
        [defaultValue]: 'insight'
    },
    cx: {
        [type]: 'string',
        [doc]: 'Google CSE cx value',
        [required]: true,
        [requires]: search => search.type === 'google-cse'
    }
};
