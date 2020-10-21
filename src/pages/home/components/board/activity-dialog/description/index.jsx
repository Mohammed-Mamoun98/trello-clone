import { Notes } from '@material-ui/icons'
import React from 'react'
import EditableText from '../../../../../../components/editable-text';
import { theme } from './../../../../../../Theme/theme';
import useStoreState from './../../../../../../hooks/useStoreState';
import { useDispatch } from 'react-redux';
import { editItemDescription } from '../../../../../../redux/actions/shared';

export default function Description(props) {

const {sharedReducer} = useStoreState()
const dispatch = useDispatch()
  const { dialogState : {item} } = sharedReducer;
  const {boardID  , id : itemID} = item
  const description = item?.description  || ''

  const handleSubmit = (description)=>{
    dispatch(editItemDescription(description,itemID,boardID))
  }

    return (
        <section className="description-sec">
        <div className="flex">
          <Notes style={theme.dilogIcon} />
          <h4>Description</h4>
        </div>
        <div className="description-content shadow">
        <EditableText value={description + '...'} placeholder="add description" onSubmit={handleSubmit} className="dialog-input" />
        </div> 
      </section>
    )
}
