import { Notes } from '@material-ui/icons'
import React from 'react'
import { theme } from './../../../../../../Theme/theme';

export default function Description(props) {
    return (
        <section className="description-sec">
        <div className="flex">
          <Notes style={theme.dilogIcon} />
          <h4>Description</h4>
        </div>
        <div className="description-content shadow">
          gello
        </div> 
      </section>
    )
}
