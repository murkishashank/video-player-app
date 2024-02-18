import { memo, useCallback } from "react";
import "./playlist.css";
import { BiShuffle } from "react-icons/bi";
import { ToolTip } from "../ToolTip";
import { PlaylistVideoCard } from "../PlaylistVideoCard";
import { VideoDetails } from "../../constants/types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

interface Props {
  playlistVideos: VideoDetails[];
  onSelectedVideoChange: (videoDetails: VideoDetails, index: number) => void;
  selectedVideoIndex: number;
  updatePlaylistOrder: (orderedPlaylist: VideoDetails[]) => void;
}

export const Playlist = memo(
  ({
    onSelectedVideoChange,
    selectedVideoIndex,
    playlistVideos,
    updatePlaylistOrder,
  }: Props) => {
    const findCard = useCallback(
      (id: number) => {
        const card = playlistVideos.filter(
          ({ id: playlistId }) => playlistId === id
        )[0];
        return {
          card,
          index: playlistVideos.indexOf(card),
        };
      },
      [playlistVideos]
    );

    const moveCard = useCallback(
      (index: number, atIndex: number) => {
        const { card, index: foundIndex } = findCard(index);

        const updatedPlaylist = update(playlistVideos, {
          $splice: [
            [foundIndex, 1],
            [atIndex, 0, card],
          ],
        });

        updatePlaylistOrder(updatedPlaylist);
      },
      [findCard, playlistVideos, updatePlaylistOrder]
    );

    return (
      <div className="card">
        <div className="playListCardHeader">
          <h3 className="playListHeading">Playlist</h3>
          {/* <ToolTip toolTipText={"Shuffle"}>
            <BiShuffle className="shuffle-icon icon" />
          </ToolTip> */}
        </div>
        <div className="playlistContainer">
          <DndProvider backend={HTML5Backend}>
            {playlistVideos.map((videoDetails, index) => (
              <PlaylistVideoCard
                videoDetails={videoDetails}
                key={`${videoDetails.title}-${index}`}
                index={index}
                onSelectedVideoChange={onSelectedVideoChange}
                selectedVideoIndex={selectedVideoIndex}
                moveCard={moveCard}
                findCard={findCard}
              />
            ))}
          </DndProvider>
        </div>
      </div>
    );
  }
);
