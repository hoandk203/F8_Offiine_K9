import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { v4 } from 'uuid';

export default function ({open, onClose, productUpdate, isUpdate, onInputChange, onSave}) {
    
    
  return (
    <>
    <Dialog
        open= {open}
        onClose={onClose}
      >
        <DialogTitle>Update Product</DialogTitle>
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
            value={productUpdate.name}
            onChange={onInputChange}
          />
          <TextField
            required
            margin="dense"
            id="categoryId"
            name="categoryId"
            label="Category ID"
            type="text"
            fullWidth
            variant="standard"
            value={productUpdate.categoryId}
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
            value={productUpdate.orderNum}
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
