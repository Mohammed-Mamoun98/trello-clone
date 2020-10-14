import { List } from '@material-ui/icons'
import React from 'react'
import { theme } from './../../../../../../Theme/theme';
import './index.scss'
import Comment from './comment/index';


export default function Activity(props) {
    return (
        <section className="activity-sec">
          <div className="flex">
            <List style={theme.dilogIcon} />
            <div className="flex-1">
              <h4>Activity</h4>
              <div className="activity-comments">
               <Comment  />
             </div> 
            </div>
          </div>
         
        
        </section>
    )
}
