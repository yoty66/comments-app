import Layout from "./Layout";
import React, {useContext, useState} from "react";
import useCommentsPaginations from "../useCommentsPaggination";
import {errorContext} from "../ErrorBoundary";



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
<Layout {...{comments,
hasMore,pageNumber, setPageNumber,
loading}}
/>
)

}