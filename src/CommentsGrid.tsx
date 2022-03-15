import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CommentCard from "./CommentCard";
import React, {useContext, useState} from "react";
import useCommentsPaginations from "./useCommentsPaggination";
import {errorContext} from "./ErrorBoundary";


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

        <><Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={5}>
            {comments.map(comment=> {
                return (< Grid item xs={6}>
                    <CommentCard {...comment}/>
                </Grid>)
            })
            }
        </Grid>
    </Container>


    <header className="App-header">

        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        { hasMore &&  <a
            className="App-link"
            onClick={()=>setPageNumber(pageNumber+1)}
            target="_blank"
            rel="noopener noreferrer"
        >
            next
        </a>}


    </header>

        </>)

}