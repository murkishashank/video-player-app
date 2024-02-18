import { memo, useEffect, useState } from "react";
import { VideoPlayer } from "../../component/VideoPlayer";
import { Playlist } from "../../component/Playlist";
import "./homePage.css";
import { VideoDetails } from "../../constants/types";
import { mediaJSON } from "../../constants/data";
import {
  getSelectedVideoIndex,
  getVideoDetailsByIndex,
} from "../../utils/common";

interface Props {}

export const HomePage = memo((props: Props) => {
  const [selectedVideo, setSelectedVideo] = useState<{
    videoDetails: VideoDetails;
    selectedVideoIndex: number;
  }>({
    videoDetails: {
      id: 0,
      title: "",
      description: "",
      subtitle: "",
      thumb: "",
      sources: [],
    },
    selectedVideoIndex: 0,
  });
  const playlistVideos = mediaJSON.categories[0].videos;

  const [playlistOrdered, setOrderedPlaylist] =
    useState<VideoDetails[]>(playlistVideos);

  useEffect(() => {
    setSelectedVideo({
      videoDetails: playlistOrdered[0],
      selectedVideoIndex: 0,
    });
  }, []);

  const onSelectedVideoChange = (videoDetails: VideoDetails, index: number) => {
    setSelectedVideo({ videoDetails, selectedVideoIndex: index });
  };

  const handleVideoEnded = () => {
    const { selectedVideoIndex } = selectedVideo;
    const nextVideoIndex = selectedVideoIndex + 1;
    console.log("nextVideoIndex", nextVideoIndex);
    console.log(" playlistOrdered.length", playlistOrdered.length);
    if (nextVideoIndex < playlistOrdered.length)
      setSelectedVideo({
        videoDetails: getVideoDetailsByIndex(nextVideoIndex, playlistOrdered),
        selectedVideoIndex: nextVideoIndex,
      });
  };

  const updatePlaylistOrder = (orderedPlaylist: VideoDetails[]) => {
    console.log("orderedPlaylist", orderedPlaylist);
    setOrderedPlaylist(orderedPlaylist);
    const videoIndex = getSelectedVideoIndex(
      selectedVideo.videoDetails.id,
      orderedPlaylist
    );
    setSelectedVideo((prev) => {
      return { ...prev, selectedVideoIndex: videoIndex };
    });
  };

  return (
    <>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Video Player
      </h3>
      <div className={"container"}>
        <VideoPlayer
          selectedVideo={selectedVideo.videoDetails}
          handleVideoEnded={handleVideoEnded}
        />
        <Playlist
          playlistVideos={playlistOrdered}
          onSelectedVideoChange={onSelectedVideoChange}
          selectedVideoIndex={selectedVideo.selectedVideoIndex}
          updatePlaylistOrder={updatePlaylistOrder}
        />
      </div>
    </>
  );
});
