import { memo } from "react";
import { MdOutlineDragHandle } from "react-icons/md";
import "./playlistVideoCard.css";
import { VideoDetails } from "../../constants/types";

interface Props {
  videoDetails: any;
  index: number;
  onSelectedVideoChange: (videoDetails: VideoDetails, index: number) => void;
  selectedVideoIndex: number;
}

export const PlaylistVideoCard = memo(
  ({
    videoDetails,
    index,
    onSelectedVideoChange,
    selectedVideoIndex,
  }: Props) => {
    const { sources, subtitle, thumb, title } = videoDetails ?? {};
    return (
      <div
        className="playlistVideoContainer"
        onClick={() => onSelectedVideoChange(videoDetails, index)}
        style={{
          backgroundColor:
            index === selectedVideoIndex
              ? "var(--secondary-color)"
              : "var(--background-color)",
        }}
      >
        <div>
          <MdOutlineDragHandle className={"icon dragIcon"} />
        </div>
        <div className="playlistVideoRow" onClick={() => onSelectedVideoChange(videoDetails, index)}>
        <video
          src={sources[0]}
          poster={thumb}
          className="playlistDetailsVideo"
          disablePictureInPicture
        ></video>
        <div className={"playlistVideoDetails"}>
          <h3 className="playlistVideoDetailsTitle">{title}</h3>
          <p className="playlistVideoDetailsSubTitle">{subtitle}</p>
        </div>
        </div>
      </div>
    );
  }
);
