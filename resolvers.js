module.exports = {
    Query: {
        tracks: async (_source, _args, { dataSources }) => {
            return dataSources.soundCloudAPI.getTracks();
        }
    }
};
