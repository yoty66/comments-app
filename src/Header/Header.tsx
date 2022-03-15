import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import AddCommentDialog from "./AddCommentDialog"
import React, {useState} from "react";
const IMAGE_URL='https://global-uploads.webflow.com/5d53975001f72a80a5fdf1f2/5f0b178d3ebbaecd6db65217_Steps%20Logo.svg'


export default ()=> {
    const [open , setOpen] = useState(false)

    return(
        <>
        <Container disableGutters={true} maxWidth={false} >
    <Grid alignContent={"center"} justifyContent={"center"} alignItems={"center"} container>

        <Typography variant="h5" color="primary.main" sx={{margin: 2}} >
            Yotam Avraham
        </Typography>
        <img src={IMAGE_URL} className="App-logo" alt="logo" />
        <IconButton
            aria-label="show-more"
            onClick={()=>setOpen(true)}
            color="primary"
            size={"large"}
            sx={{margin: 2}}
        >
            <AddIcon  fontSize="large" />
        </IconButton >
    </Grid>
</Container>

            <AddCommentDialog open={open} onClose={()=> setOpen(false)}/>
        </>
            )}