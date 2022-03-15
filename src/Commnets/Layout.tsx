import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentCard from "../CommentCard";
import React from "react";

export default (props)=>{
    const {comments,loading , hasMore, setPageNumber, pageNumber}= props
return (
    <>
        <Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={5}>
    {comments.map(comment=> {
            return (< Grid item xs={6}>
                <CommentCard {...comment}/>
            </Grid>)
        })
    }
    </Grid>
    </Container>

    <Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={5}  alignItems="center"
justifyContent="center">
    {loading &&   <CircularProgress />}
{ hasMore && !loading &&
( <IconButton
    aria-label="show-more"
    onClick={()=>setPageNumber(pageNumber+1)}
    color="primary"
    size={"large"}
    >
    <ExpandMoreIcon  fontSize="large" />
        </IconButton>)
}
</Grid>
</Container>


</> )
}