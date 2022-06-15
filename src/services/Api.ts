import { setup } from 'axios-cache-adapter';

import Config from '../Config';

const Api = setup({
    baseURL: Config.api.baseURL ?? '',
    cache: {
        maxAge: 60 * 60 * 24 * 1000, // 1 day
        readHeaders: true,
        exclude: { query: false },
    },
});

export default Api;
