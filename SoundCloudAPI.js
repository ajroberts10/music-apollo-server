const { RESTDataSource } = require('apollo-datasource-rest');

class SoundCloudAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.soundcloud.com/'
    }

    async getTracks() {
        const data = await this.get(`playlists/85980757?client_id=${process.env.soundcloud_key}`);
        return data.tracks;
    };
};

module.exports = SoundCloudAPI;
