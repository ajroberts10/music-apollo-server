const setlist = require('./data/setlist.json');

module.exports = {
    Query: {
        tracks: async (_source, _args, { dataSources }) => {
            return dataSources.soundCloudAPI.getTracks();
        },
        setlist: () => setlist
    }
};
