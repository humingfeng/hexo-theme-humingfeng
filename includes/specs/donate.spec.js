const { doc, type, defaultValue, required, requires, format } = require('../common/utils').descriptors;

const DEFAULT_DONATE = [
    {
        type: 'alipay',
        qrcode: 'https://humf-001.oss-cn-beijing.aliyuncs.com/qrcode/Alipay.jpeg?OSSAccessKeyId=LTAI9M4ArWPmLg8r&Expires=1659667090&Signature=Gdh3qEKuYuzDYCu3EYfDF%2FrTGjM%3D'
    },
    {
        type: 'wechat',
        qrcode: 'https://humf-001.oss-cn-beijing.aliyuncs.com/qrcode/Wechat.jpeg?OSSAccessKeyId=LTAI9M4ArWPmLg8r&Expires=1659667119&Signature=STFuIkMOlhrypB5fBGaU11ufDnI%3D'
    },
    {
        type: 'paypal',
        business: '',
        currency_code: 'USD'
    },
    {
        type: 'patreon',
        url: ''
    }
];

const QrcodeSpec = {
    qrcode: {
        [type]: 'string',
        [doc]: 'Qrcode image URL',
        [required]: true,
        [requires]: donate => donate.type === 'alipay' || donate.type === 'wechat'
    }
};

const PaypalSpec = {
    business: {
        [type]: 'string',
        [doc]: 'Paypal business ID or email address',
        [required]: true,
        [requires]: donate => donate.type === 'paypal'
    },
    currency_code: {
        [type]: 'string',
        [doc]: 'Currency code',
        [required]: true,
        [requires]: donate => donate.type === 'paypal'
    }
};

const PatreonSpec = {
    url: {
        [type]: 'string',
        [doc]: 'URL to the Patreon page',
        [required]: true,
        [requires]: donate => donate.type === 'patreon'
    }
};

module.exports = {
    [type]: 'array',
    [doc]: 'Donation entries\nhttps://ppoffice.github.io/hexo-theme-icarus/categories/Donation/',
    [defaultValue]: DEFAULT_DONATE,
    '*': {
        [type]: 'object',
        [doc]: 'Single donation entry settings',
        type: {
            [type]: 'string',
            [doc]: 'Donation entry name',
            [required]: true
        },
        ...QrcodeSpec,
        ...PaypalSpec,
        ...PatreonSpec
    }
}
