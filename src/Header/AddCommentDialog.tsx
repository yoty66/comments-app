import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import React, {useContext, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
import {errorContext} from "../ErrorBoundary";

export default function AddCommentDialog(props) {
    const { onClose , open  } = props;
    const email: React.Ref<any> = useRef()
    const title: React.Ref<any> = useRef()
    const body: React.Ref<any> = useRef()
    const post: React.Ref<any> = useRef()
    const showError: any= useContext(errorContext)


    const handleSubmit = ()=>{
        const [emailInput, titleInput , bodyInput, postInput]=[email?.current?.value, title?.current?.value , body?.current?.value , post?.current?.value]

        if(!bodyInput?.length || !emailInput?.length || !titleInput?.length){
            alert("Some input is missing . TODO: give a nicer indication to the user")
            return;
        }
        axios.post('https://test.steps.me/test/testAssignComment', {email: emailInput ,name: titleInput, body :bodyInput ,post:postInput }).then(res=>onClose() ).catch((error)=>  {

            onClose()
            showError(error.message)})
    }

    return (
        <Dialog onClose={onClose} open={open} >
        <DialogTitle  >
            Add new comment
        <IconButton
    aria-label="close"
    onClick={onClose}
    sx={{
        position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
    }}
>
    <CloseIcon />
    </IconButton>
    </DialogTitle>
    <DialogContent dividers>
        <TextField id="email" label="Email" variant="outlined"  inputRef={email}/>
        <TextField id="title" label="Title" variant="outlined" inputRef={title} />
        <TextField id="body" label="Body" variant="outlined" inputRef={body} />
        <TextField id="post" label="Body" variant="outlined" inputRef={post} />
        <Button variant="contained" onClick={handleSubmit}>Submit </Button>
    </DialogContent>

    </Dialog>
);
}
