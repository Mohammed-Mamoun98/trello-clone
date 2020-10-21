export const  editDescription = (itemID , boards = [] , boardID , description)=>{
const board = boards.find(b => b.id === boardID)
const item = board.items.find(item => item.id === itemID)
const newItem = {
    ...item , 
    description 
}
const newBoardItems = board.items.map(it => {
    if(it.id === itemID)
    return newItem
    return it
})

const newBoard = {
    ...board , 
    items : newBoardItems
}
const newBoards = boards.map(b => {
    if(b.id === boardID)
return newBoard
return b
})
return newBoards

}