import { memo } from "react";
import { MdOutlineDragHandle } from "react-icons/md";
import "./playlistVideoCard.css"

interface Props {
  videoDetails: any;
}

export const PlaylistVideoCard = memo(({ videoDetails }: Props) => {
  const { sources, subtitle, thumb, title } = videoDetails ?? {};
  return (
    <div className="videoContainer">
      <div>
        <MdOutlineDragHandle className={"icon dragIcon"} />
      </div>
      <video
        src={sources[0]}
        poster={thumb}
        style={{ maxWidth: "150px" }}
      ></video>
      <div className={"videoDetails"}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
});
