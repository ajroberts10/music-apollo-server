# music-apollo-server

This is a GraphQL wrapper for the Soundcloud API. It can be used to retrieve playlists and track information for the Music&Colour account.

You can retrieve playlist information using a query in the following format:

```
{
  tracks {
    id,
    title,
    duration,
    stream_url
  }
}
```

This should produce a response in the following format:

```
{
  "data": {
    "tracks": [
      {
        "id": "196010172",
        "title": "Good Luck",
        "duration": "209651",
        "stream_url": "https://api.soundcloud.com/tracks/196010172/stream"
      },
      {
        "id": "196384435",
        "title": "Sweet Child Of Mine",
        "duration": "286877",
        "stream_url": "https://api.soundcloud.com/tracks/196384435/stream"
      }
    ]
  }
}
```

## To Start

Run `node index.js`

Then visit [http://localhost:4000/](http://localhost:4000/)


