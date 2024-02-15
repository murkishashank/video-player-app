import { memo } from "react";
import { VideoPlayer } from "../../component/VideoPlayer";
import { Playlist } from "../../component/Playlist";
import "./homePage.css";

interface Props {}

export const HomePage = memo((props: Props) => {
  return (
    <div className={"container"}>
        <VideoPlayer />
        <Playlist />
    </div>
  );
});
