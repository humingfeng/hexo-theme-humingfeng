const { doc, type, defaultValue } = require('../common/utils').descriptors;

module.exports = {
    [type]: 'object',
    [doc]: 'CDN provider settings\nhttps://humingfeng.github.io/hexo-theme-humingfeng/Configuration/Theme/speed-up-your-site-with-custom-cdn/',
    cdn: {
        [type]: 'string',
        [doc]: 'Name or URL of the JavaScript and/or stylesheet CDN provider',
        [defaultValue]: 'jsdelivr'
    },
    fontcdn: {
        [type]: 'string',
        [doc]: 'Name or URL of the webfont CDN provider',
        [defaultValue]: 'google'
    },
    iconcdn: {
        [type]: 'string',
        [doc]: 'Name or URL of the webfont Icon CDN provider',
        [defaultValue]: 'fontawesome'
    }
};
