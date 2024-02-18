import { memo } from "react";
import "./videoPlayer.css";
import { VideoDetails } from "../../constants/types";

interface Props {
  selectedVideo: VideoDetails;
  handleVideoEnded: () => void;
}

export const VideoPlayer = memo(
  ({ selectedVideo, handleVideoEnded }: Props) => {
    const {
      title = "",
      description = "",
      subtitle = "",
      sources = [],
      thumb = "",
    } = selectedVideo || {};

    return (
      <div className="videoPlayer">
        <video
          className="videoPlayerVideo"
          src={sources[0] ?? ""}
          poster={thumb}
          controls
          muted
          autoPlay
          preload="auto"
          controlsList="nodownload"
          onEnded={handleVideoEnded}
        />
        <div className={"videoMetaData"}>
          <h2 className={"videoTitle"}>{title}</h2>
          <p className={"videoDescription"}>{description}</p>
          <p className={"videoSubTitle"}>{subtitle}</p>
        </div>
      </div>
    );
  }
);
