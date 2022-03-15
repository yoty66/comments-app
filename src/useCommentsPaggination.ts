import { useEffect, useState } from 'react'
import axios from 'axios'
const PAGE_SIZE = 20
const URL= 'https://jsonplaceholder.typicode.com/comments'
const getLastPgeFromHeader= (headers)=>
    Number.parseInt(headers["link"].split(",").find(str => str.includes("last")).match(/page=(\d*)/)[1])

// The built-in Set class doesn't have the ability to compare obj attributes
const createUniqueCommentsArray=(comments)=>{
    let obj={}
    comments.forEach((comment)=>obj[comment.id]= comment)
    return Object.values(obj)
}
export default function useCommentsPaginations(pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)
    const [comments, setComments] = useState([])
    const [hasMore, setHasMore] = useState(false)



    useEffect(() => {
        setLoading(true)
        setError(undefined)
        let cancel
        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments',
            params: { _limit: PAGE_SIZE, _page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            //@ts-ignore
            setComments(prevComments => {
                //@ts-ignore
                return createUniqueCommentsArray([...prevComments, ...res.data])
            })

            setHasMore(pageNumber !== getLastPgeFromHeader(res.headers))
            setLoading(false)
        }).catch(e => {
            setError(e.message)
            if (axios.isCancel(e)) return
        })

        return () => cancel()
    }, [ pageNumber])

    return { loading, error, clearError :()=>{setError(undefined);setLoading(false)}, comments, hasMore }
}