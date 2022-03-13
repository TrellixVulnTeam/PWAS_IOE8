import Image from "next/image";
import { GitHub } from "@mui/icons-material";
const { Box, Typography, Card, CardHeader, CardContent, Button, CardActions, IconButton, Divider, Link } = require("@mui/material");

import buildInfo from "../utility/build";

function About() {
    return (
        <Box>
            <Typography sx={{ marginBottom: 1 }}>About Shortcut for Progressive Web Application</Typography>
            <Card sx={{ width: '100%' }}>
                <CardHeader
                    title={<Typography variant="h5">PWAS</Typography>}
                    subheader="Make the most of PWA"
                    sx={{ display: 'flex' }}
                    avatar={<Image src="/pwas.png" width="48pt" height="48pt" />}/>
                <Divider />
                <CardContent>
                    <Typography variant="overline">Version {buildInfo.version}</Typography>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'end' }}>
                    <Button href={buildInfo.page} variant="outlined">
                        <Typography variant="subtitle2">Check out on GitHub</Typography>
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default About