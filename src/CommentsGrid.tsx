import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CommentCard from "./CommentCard";
import React, {useContext, useState} from "react";
import useCommentsPaginations from "./useCommentsPaggination";
import {errorContext} from "./ErrorBoundary";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default (props)=>{

    const [pageNumber, setPageNumber] = useState(1)
    const showError: any= useContext(errorContext)
    const {
        comments,
        hasMore,
        loading,
        error,
        clearError
    } = useCommentsPaginations( pageNumber)

    if(error){
        showError(error, clearError)
        clearError()
    }

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
                { hasMore &&
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