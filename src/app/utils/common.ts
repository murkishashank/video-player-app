import { VideoDetails } from "../constants/types";

export const getVideoDetailsByIndex = (index: number, videos: VideoDetails[]) => {
  return videos[index];
};
