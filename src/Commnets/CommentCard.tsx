import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";





export default function ({body, email , name}) {
    return(
<Card sx={{ minWidth: 275 , minHeight: 300  }} >
<CardContent >
<Box sx={{ m: 2 }}>
    <Typography variant="h3" sx={{ fontSize: 14 }} color="primary.main" gutterBottom>
        {email}
    </Typography>
    <br />
    <Typography variant="h5" component="div" >
        {name}
    </Typography>
    <br />
    <Typography variant="body2" >
        {body}
    </Typography>
</Box>
</CardContent>
</Card>)
}