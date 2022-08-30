import { Alert, Button, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addJobRequest, callApiRequest, changeText } from '../redux/Store';

export default function Form() {

    const creator = useSelector(state => state.create)
    const list = useSelector(state => state.list)
    const [isError50,setIsError] = useState(false)
    const [isErrorEmpty,setIsErrorEmpty] = useState(false)
    const [isErrorDate,setIsErrorDate] = useState(false)
  

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('job')){
       dispatch(callApiRequest())   
        }
    },[localStorage.getItem('job')])
    const handleSubmit =(e)=>{
        e.preventDefault();
      const today = new Date()
      var date1 = new Date(creator.date);
      const dateCal = date1 - today;
        if(creator.content.length === 0 || creator.date.length ===0){
          setIsErrorEmpty(true)
          setIsErrorDate(false)
        }
        else if(dateCal < 0){
          setIsErrorDate(true)
        }

       else if(creator.content.length > 50){
          setIsError(true)
          setIsErrorEmpty(false)
          setIsErrorDate(false)
        }
        else {
          
          dispatch(addJobRequest([...list,{content :creator.content , date : creator.date,id:list.length}]))
          setIsError(false)
          setIsErrorEmpty(false)
          setIsErrorDate(false)
        }
    }
  return (
    <form onSubmit={handleSubmit} style={{width : "35%"}}>
<Stack spacing={3}>
<TextField value={creator.content} onChange={(e)=> dispatch(changeText("CHANGE_CONTENT",e.target.value))} fullWidth id="outlined-basic" label="Nội dung" variant="outlined" />
       <Stack justifyContent={"space-between"} direction='row'>
       <TextField value={creator.date} onChange={e => dispatch(changeText("CHANGE_DATE",e.target.value))}
          id="outlined-number"
          label="Ngày nhắc"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
       <Button type='submit' variant="contained">Lưu ngày</Button>
       </Stack>
  {isError50 && <Alert severity="error">Không được lớn hơn 50 kí tự</Alert>}
  {isErrorEmpty && <Alert severity="error">Không được Bỏ trống</Alert>}
  {isErrorDate && <Alert severity="error">Không được chọn ngày quá khứ</Alert>}
</Stack>
    </form>
       

   
  )
}
