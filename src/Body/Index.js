import { Container, Stack } from '@mui/system'
import React from 'react'
import Form from '../components/Form'
import List from '../components/List'

export default function Index() {
  return (
  <Container>
      <Stack justifyContent="space-between" direction="row">
  <Form />
  <List />
    
  </Stack>
  </Container>
        
  
  )
}
