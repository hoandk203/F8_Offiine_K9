import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { v4 } from 'uuid';

export default function ({open, onClose, reload, categoryUpdate}) {
    const [category, setCategory] = useState({
        id:v4(),
        name: "",
        orderNum: "",
    })
    const onInputChange= (e)=>{
      setCategory({...category, [e.target.name]: e.target.value})
    }
    const onSave= async()=>{
        const response= await fetch("http://localhost:3000/categories",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        })
        if(response.ok){
            onClose()
            reload()
        }
    }
  return (
    <>
    <Dialog
        open= {open}
        onClose={onClose}
      >
        <DialogTitle>Update Category</DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={categoryUpdate.name}
            onChange={onInputChange}
          />
          <TextField
            required
            margin="dense"
            id="orderNum"
            name="orderNum"
            label="Order Number"
            type="text"
            fullWidth
            variant="standard"
            value={categoryUpdate.orderNum}
            onChange={onInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
