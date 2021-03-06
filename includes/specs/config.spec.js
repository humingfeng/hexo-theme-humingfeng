const { version } = require('../../package.json');
const { type, required, defaultValue, doc } = require('../common/utils').descriptors;

module.exports = {
    [type]: 'object',
    [doc]: 'Root of the configuration file',
    [required]: true,
    version: {
        [type]: 'string',
        [doc]: 'Version of the humingfeng theme that is currently used',
        [required]: true,
        [defaultValue]: version
    },
    ...require('./meta.spec'),
    navbar: require('./navbar.spec'),
    footer: require('./footer.spec'),
    article: require('./article.spec'),
    search: require('./search.spec'),
    comment: require('./comment.spec'),
    donate: require('./donate.spec'),
    share: require('./share.spec'),
    sidebar: require('./sidebar.spec'),
    widgets: require('./widgets.spec'),
    plugins: require('./plugins.spec'),
    providers: require('./providers.spec')
};
