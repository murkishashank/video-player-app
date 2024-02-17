import { memo } from "react";
import { MdOutlineDragHandle } from "react-icons/md";
import "./playlistVideoCard.css"

interface Props {
  videoDetails: any;
}

export const PlaylistVideoCard = memo(({ videoDetails }: Props) => {
  const { sources, subtitle, thumb, title } = videoDetails ?? {};
  return (
    <div className="playlistVideoContainer">
      <div>
        <MdOutlineDragHandle className={"icon dragIcon"} />
      </div>
      <video
        src={sources[0]}
        poster={thumb}
        className="playlistDetailsVideo"
      ></video>
      <div className={"playlistVideoDetails"}>
        <h3 className="playlistVideoDetailsTitle">{title}</h3>
        <p className="playlistVideoDetailsSubTitle">{subtitle}</p>
      </div>
    </div>
  );
});
