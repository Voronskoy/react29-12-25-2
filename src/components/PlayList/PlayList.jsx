import React from "react";
import songs from "./songs";
import Song from "./Song";
import "./playList.css";
const PlayList = () => {
  const showSong = (song, index) => <Song key={index} song={song} />;

  return <section className="playList">{songs.map(showSong)}</section>;
};

export default PlayList;
