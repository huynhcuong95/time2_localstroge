import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeJobRequest } from '../redux/Store';

export default function Item(props) {
    const {content , date ,item} = props;
    const dispatch = useDispatch()
    const list = useSelector(state => state.list)
    const deleteItem =(item) => {
      dispatch(removeJobRequest(list,item))
    }
  return (
    <>
       <Stack direction="row" justifyContent='space-between'>
       <strong>ngày {date}</strong>
        <button onClick={()=>deleteItem(item)}>X</button>
       </Stack>
        <p style={{textAlign :"left"}}>{content}</p>
    </>
  )
}
