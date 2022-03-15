import React, {createContext, useState} from 'react';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';

function ErrorDialog(props) {
    const { onClose , open  ,error} = props;
    return (
        <Dialog
            onClose={onClose}
            open={open}
        >

            <DialogTitle  >
                Error
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Oops! Something went wrong
                </Typography>
                <Typography gutterBottom>
                    The program exited with the following error:
                </Typography>
                <Typography gutterBottom>
                    {error}
                </Typography>

            </DialogContent>

   </Dialog>
    );
}

export const errorContext = createContext({})


export default function ErrorBoundary(props){
    const [error, setError] =useState(undefined as any)
    const [open, setOpen] =useState(false)

    return(
        <errorContext.Provider value={ (error, callback)=> {setError(error) ; setOpen(true) }}>
            <ErrorDialog error={error}  open ={open}  onClose={()=> {
                setError(undefined) ;
                setOpen(false) ;
            }
            }/>
            {props.children}
        </errorContext.Provider>
    )

}



