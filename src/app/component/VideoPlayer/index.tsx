import { memo } from "react";
import "./videoPlayer.css";

interface Props {}

export const VideoPlayer = memo((props: Props) => {
  return (
    <div className="videoPlayer">
      <video
        className="videoPlayerVideo"
        src={
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        }
        controls
        muted
        autoPlay
      ></video>
      <div className={"videoMetaData"}>
        <h2 className={"videoTitle"}>{"Title"}</h2>
        <p className={"videoDescription"}>
          {
            "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org"
          }
        </p>
        <p className={"videoSubTitle"}>By Big Buck Bunny</p>
      </div>
    </div>
  );
});
