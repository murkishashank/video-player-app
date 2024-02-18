import { memo, useEffect, useState } from "react";
import { VideoPlayer } from "../../component/VideoPlayer";
import { Playlist } from "../../component/Playlist";
import "./homePage.css";
import { VideoDetails } from "../../constants/types";
import { mediaJSON } from "../../constants/data";
import { getVideoDetailsByIndex } from "../../utils/common";

interface Props {}

export const HomePage = memo((props: Props) => {
  const [selectedVideo, setSelectedVideo] = useState<{
    videoDetails: VideoDetails;
    selectedVideoIndex: number;
  }>({
    videoDetails: {
      title: "",
      description: "",
      subtitle: "",
      thumb: "",
      sources: [],
    },
    selectedVideoIndex: 0,
  });

  const playlistVideos = mediaJSON.categories[0].videos

  useEffect(() => {
    setSelectedVideo({
      videoDetails: mediaJSON.categories[0].videos[0],
      selectedVideoIndex: 0,
    });
  }, []);

  const onSelectedVideoChange = (videoDetails: VideoDetails, index: number) => {
    setSelectedVideo({ videoDetails, selectedVideoIndex: index });
  };

  const handleVideoEnded = () => {
    const { selectedVideoIndex } = selectedVideo;
    const nextVideoIndex = selectedVideoIndex + 1;
    setSelectedVideo({
      videoDetails: getVideoDetailsByIndex(
        nextVideoIndex,
        playlistVideos
      ),
      selectedVideoIndex: nextVideoIndex,
    });
  };

  return (
    <>
      <p>Video Player</p>
      <div className={"container"}>
        <VideoPlayer
          selectedVideo={selectedVideo.videoDetails}
          handleVideoEnded={handleVideoEnded}
        />
        <Playlist
        playlistVideos={playlistVideos}
          onSelectedVideoChange={onSelectedVideoChange}
          selectedVideoIndex={selectedVideo.selectedVideoIndex}
        />
      </div>
    </>
  );
});
