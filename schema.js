const { gql } = require('apollo-server');

module.exports = gql`
    type Track {
        id: ID!
        duration: String!
        title: String!
        stream_url: String!
    }

    type Song {
        title: String!
        artist: String!
    }

    type Query {
        tracks: [Track]
        setlist: [Song]
    }
`;
