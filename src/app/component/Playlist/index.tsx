import { memo } from "react";
import "./playlist.css";
import { BiShuffle } from "react-icons/bi";
import { ToolTip } from "../ToolTip";
import { PlaylistVideoCard } from "../PlaylistVideoCard";
import { mediaJSON } from "../../constants/data";

interface Props {}

export const Playlist = memo((props: Props) => {
  return (
    <div className="card">
      <div className="playListCardHeader">
        <h3 className="playListHeading">Playlist</h3>
        <ToolTip toolTipText={"Shuffle"}>
          <BiShuffle className="shuffle-icon icon" />
        </ToolTip>
      </div>
      <div className="playlistContainer">
        {mediaJSON.categories[0].videos.map((videoDetails) => (
          <PlaylistVideoCard videoDetails={videoDetails} key={videoDetails.title} />
        ))}
      </div>
    </div>
  );
});
