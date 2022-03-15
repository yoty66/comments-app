import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinesEllipsis from 'react-lines-ellipsis'
import React, { useState } from "react";



const EllipsisText = (props)=>{

    const [isExpand, setExpand] = useState(false);
    return (
        <div className="App">
            {isExpand ? (
                <div>{props.text}</div>
            ) : (
                <div onClick={() => setExpand(!isExpand)}>
                    <LinesEllipsis text={props.text} maxLine="1" ellipsis="... Read more" />
                </div>
            )}
        </div>
    )
}

export default function ({body, email , name}) {
    return(
<Card sx={{ minWidth: 275 , minHeight: 300 }}>
<CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {email}
</Typography>
<Typography variant="h5" component="div">
    {name}
    </Typography>

    <Typography variant="body2">

{/*<EllipsisText text/>*/}

<br />
</Typography>
</CardContent>
</Card>)
}