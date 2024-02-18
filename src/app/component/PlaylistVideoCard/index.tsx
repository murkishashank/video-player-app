import { memo } from "react";
import { MdOutlineDragHandle } from "react-icons/md";
import "./playlistVideoCard.css";
import { VideoDetails } from "../../constants/types";
import { useDrag, useDrop } from "react-dnd";

interface Props {
  videoDetails: any;
  index: number;
  onSelectedVideoChange: (videoDetails: VideoDetails, index: number) => void;
  selectedVideoIndex: number;
  moveCard: (id: number, to: number) => void;
  findCard: (id: number) => { index: number };
}

export const PlaylistVideoCard = memo(
  ({
    videoDetails,
    index,
    onSelectedVideoChange,
    selectedVideoIndex,
    findCard,
    moveCard,
  }: Props) => {
    const { sources, subtitle, thumb, title, id } = videoDetails ?? {};

    const originalIndex = findCard(id).index;
    const [{ isDragging }, drag] = useDrag(
      () => ({
        type: "card",
        item: { id, originalIndex },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
          const { id: droppedId, originalIndex } = item;
          const didDrop = monitor.didDrop();
          if (!didDrop) {
            moveCard(droppedId, originalIndex);
          }
        },
      }),
      [originalIndex, moveCard]
    );

    const [, drop] = useDrop(
      () => ({
        accept: "card",
        hover({ id: draggedId }: any) {
          if (draggedId !== index) {
            const { index: overIndex } = findCard(id);
            moveCard(draggedId, overIndex);
          }
        },
      }),
      [findCard, moveCard]
    );

    return (
      <div
        className="playlistVideoContainer"
        onClick={() => onSelectedVideoChange(videoDetails, index)}
        style={{
          backgroundColor:
            index === selectedVideoIndex
              ? "var(--secondary-color)"
              : "var(--background-color)",
        }}
      >
        <div ref={(node) => drag(drop(node))}>
          <MdOutlineDragHandle className={"icon dragIcon"} />
        </div>
        <div
          className="playlistVideoRow"
          onClick={() => onSelectedVideoChange(videoDetails, index)}
        >
          <video
            src={sources[0]}
            poster={thumb}
            className="playlistDetailsVideo"
            disablePictureInPicture
          ></video>
          <div className={"playlistVideoDetails"}>
            <h3 className="playlistVideoDetailsTitle">{title}</h3>
            <p className="playlistVideoDetailsSubTitle">{subtitle}</p>
          </div>
        </div>
      </div>
    );
  }
);
