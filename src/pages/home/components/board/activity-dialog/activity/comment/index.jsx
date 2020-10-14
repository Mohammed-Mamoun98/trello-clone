import React from 'react'
import './index.scss'
import EditableText from './../../../../../../../components/editable-text/index';


export default function Comment(props) {
    return (
        <div className="comment shadow">
           <EditableText value="comment" onSubmit={()=>{}} className="dialog-input"  />
        </div>
    )
}
