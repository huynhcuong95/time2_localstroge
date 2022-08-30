import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

export default function List() {
  const list = useSelector(state => state.list)
  return (
   <Stack spacing={3} style={{width : "30%"}}>
  {
    list.map((e,index) => <Item item={e} id={e.id} key={index} date={e.date} content={e.content}/>)
  }
   </Stack>
  )
}
