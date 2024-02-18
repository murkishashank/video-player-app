import { VideoDetails } from "../constants/types";

export const getVideoDetailsByIndex = (index: number, videos: VideoDetails[]) => {
  return videos[index];
};

export const getSelectedVideoIndex =(id: number, orderedPlaylist: VideoDetails[]) => {
  return orderedPlaylist.findIndex(({id: playlistId}) => id === playlistId)
}