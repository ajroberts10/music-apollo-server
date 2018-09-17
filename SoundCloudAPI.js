const { RESTDataSource } = require('apollo-datasource-rest');
const config = require('./config');

class SoundCloudAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.soundcloud.com/'
    }

    async getTracks() {
        const data = await this.get(`playlists/85980757?client_id=${config.key}`);
        return data.tracks;
    };
};

module.exports = SoundCloudAPI;
