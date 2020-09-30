import { reorder } from "./array";

export const handleDragEnd = (result, boards, allCards, applyMethod) => {
  if (!result.destination) return;
  const { destination, source, draggableId } = result;
  const { droppableId: targetedBoardId, index } = destination;
  const { droppableId } = source;
  const sourceBoardID = allCards.find((f) => f.id === droppableId)?.boardID;

  const destinBoardID = allCards.find((f) => f.id === targetedBoardId)?.boardID;

  let targetedBoard = boards.find((b) => b.id === destinBoardID);
  let sourceBoard = boards.find((b) => b.id === sourceBoardID);
  if (!targetedBoard || !sourceBoard) {
    return;
  }
  let { items } = targetedBoard;
  const { items: sourceItems } = sourceBoard;
  let draggedItem = sourceItems.find((item) => item.id === draggableId);
  draggedItem = { ...draggedItem, boardID: targetedBoard.id };
  const notTheSameSource = targetedBoard.id !== sourceBoard.id;

  const newItems = reorder(
    sourceItems,
    result.source.index,
    result.destination.index
  );

  if (notTheSameSource) {
    items.splice(index, 0, draggedItem);
    applyMethod(targetedBoard.id, items);
    applyMethod(
      sourceBoard.id,
      newItems.filter((d) => d.id !== draggedItem.id)
    );
  } else {
    items = newItems;
    applyMethod(sourceBoard.id, newItems);
  }
};
