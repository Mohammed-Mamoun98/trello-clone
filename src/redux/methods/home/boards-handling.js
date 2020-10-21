import { v4 as uuidv4 } from "uuid";

export const getNewListCard = (id, newList, boards) => {
  const board = boards.find((b) => b.id === id);
  const newBoard = { ...board, items: newList };
  const newBoards = boards.map((board) => {
          
    if (board.id === id) {
      return {
        ...newBoard,
      };
    } else return board;
  });
  return newBoards;
};

export const addBoardMethod = (title, boards) => {
  const id = uuidv4();
  const newBoards = [
    ...boards,
    {
      title,
      id,
      items: [{ hidden: true, id: uuidv4(), boardID: id }],
    },
  ];
  return newBoards;
};

export const addListCardMethod = (text, id, board) => {
  const newCard = { text, id: uuidv4(), boardID: id };
  const newBoardItems = [...board.items, newCard];
  return newBoardItems;
};

export const changeBoardName = (id, newName, boards) => {
  const newBoards = boards.map((board) => {
    if (board.id === id) {
      return {
        ...board,
        title: newName,
      };
    } else return board;
  });
  return newBoards;
};
