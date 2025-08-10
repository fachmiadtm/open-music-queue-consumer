const mapDBPlaylistWithSongs = (rows) => {
  const { playlist_id, name, username } = rows[0];
  const songs = rows[0].song_id
    ? rows.map((row) => ({
      id: row.song_id,
      title: row.title,
      performer: row.performer,
    }))
    : [];

  return {
    id: playlist_id,
    name,
    username,
    songs,
  };
};

module.exports = {
  mapDBPlaylistWithSongs,
};
