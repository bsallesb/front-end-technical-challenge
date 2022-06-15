const Config = {
    api: {
        baseURL: process.env.REACT_APP_API_BASE_URL,
    },
    services: {
        googleMaps: {
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        },
    },
};

export default Config;
