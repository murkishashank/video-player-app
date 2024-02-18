import { memo } from "react";
import "./playlist.css";
import { BiShuffle } from "react-icons/bi";
import { ToolTip } from "../ToolTip";
import { PlaylistVideoCard } from "../PlaylistVideoCard";
import { VideoDetails } from "../../constants/types";

interface Props {
  playlistVideos: VideoDetails[];
  onSelectedVideoChange: (videoDetails: VideoDetails, index: number) => void;
  selectedVideoIndex: number;
}

export const Playlist = memo(
  ({ onSelectedVideoChange, selectedVideoIndex, playlistVideos }: Props) => {
    return (
      <div className="card">
        <div className="playListCardHeader">
          <h3 className="playListHeading">Playlist</h3>
          <ToolTip toolTipText={"Shuffle"}>
            <BiShuffle className="shuffle-icon icon" />
          </ToolTip>
        </div>
        <div className="playlistContainer">
          {playlistVideos.map((videoDetails, index) => (
            <PlaylistVideoCard
              videoDetails={videoDetails}
              key={videoDetails.title}
              index={index}
              onSelectedVideoChange={onSelectedVideoChange}
              selectedVideoIndex={selectedVideoIndex}
            />
          ))}
        </div>
      </div>
    );
  }
);
