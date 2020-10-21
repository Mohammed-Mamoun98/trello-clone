import { Button, CircularProgress } from '@material-ui/core'
import React from 'react'
import useFetch from './../../hooks/useFetch';

const url = 'https://jsonplaceholder.typicode.com/todos/1'
const local = 'http://localhost:5000'
export default function About(props) {
  const {data , loading , refetch } = useFetch(local,'GET')
  const {data : _data , loading : _loading , refetch:_refetch } = useFetch(url,'GET')
  
const handleClick = ()=>{
  refetch()
}

  return (
    <div style={{padding:'5rem'}}>
      <Button variant="contained" color="primary" onClick={refetch} >
       { loading&&<CircularProgress style={{color:'white'}} />}
       { !loading&& <>get data</>}
     </Button>
    {JSON.stringify(data)}
<br/>
    <Button variant="contained" color="primary" onClick={_refetch} >
       { _loading&&<CircularProgress style={{color:'white'}} />}
       { !_loading&& <>get another data</>}
    </Button>
    {JSON.stringify(_data)}

<br/>
    </div>
  )
}
