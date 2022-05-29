import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import "./Header.css";

const Header = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <div className="header-container">
                    <h1>React Practice Projects</h1>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Header;
