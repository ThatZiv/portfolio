import { Grid, Typography, Divider } from "@mui/material";
import React from "react";
import ReactMarkdown from 'react-markdown';

/** @param {import("../types/comps/Generic").Generic} props */
export default function Generic(props) {
    return <Grid direction="row" container>
        {props.entries.map(({ title, content }) => <Grid xs={12} item>
            <Typography variant="h4" style={{fontFamily: "Blinker, sans-serif"}}>{title}</Typography>
            <Typography variant="body1"><ReactMarkdown>{content}</ReactMarkdown></Typography>
            <Divider style={{ marginBottom: 15 }} />
        </Grid>)}
    </Grid>
}