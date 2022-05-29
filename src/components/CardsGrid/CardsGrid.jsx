import * as React from "react";
import { useState } from "react";
// Grid Importing
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
// Box Importing
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// Accordin Importing
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Data Importing
import data from "../../data";
// CSS Importing
import "./CardsGrid.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    boxShadow: "none",
    color: theme.palette.text.secondary,
}));

export default function CardsGrid() {
    const [projects, useProject] = useState(data);
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ width: "100%" }}>
                    <Grid
                        container
                        rowSpacing={2}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        {projects.map((project) => {
                            const {
                                id,
                                projectTitle,
                                projectDesc,
                                imageName,
                                demoLive,
                                codeLive,
                            } = project;
                            return (
                                <Grid key={id} item lg={4} sm={6} xs={12}>
                                    <Item className="card-item">
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={require(`../../assets/img/${imageName}`)}
                                                alt={projectTitle}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    {projectTitle}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    <div>
                                                        <Accordion>
                                                            <AccordionSummary
                                                                expandIcon={
                                                                    <ExpandMoreIcon />
                                                                }
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                            >
                                                                <Typography>
                                                                    Summary
                                                                    Description
                                                                </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
                                                                    {
                                                                        projectDesc
                                                                    }
                                                                </Typography>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    </div>
                                                </Typography>
                                            </CardContent>
                                            <CardActions className="buttons">
                                                <Button
                                                    size="medium"
                                                    className="btn btn-demo"
                                                >
                                                    <a href={demoLive}>
                                                        View Demo Live
                                                    </a>
                                                </Button>
                                                <Button
                                                    size="medium"
                                                    className="btn btn-code"
                                                >
                                                    <a href={codeLive}>
                                                        View Code
                                                    </a>
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Item>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}
