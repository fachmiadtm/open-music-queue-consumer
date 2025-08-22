const mapDBPlaylistWithSongs = (rows) => {
  const { playlist_id, name } = rows[0];
  const songs = rows[0].song_id
    ? rows.map((row) => ({
      id: row.song_id,
      title: row.title,
      performer: row.performer,
    }))
    : [];

  return {
    playlist: {
      id: playlist_id,
      name,
      songs,
    },
  };
};

module.exports = {
  mapDBPlaylistWithSongs,
};
