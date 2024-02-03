import React, { useEffect, useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StylesContext } from "@mui/styles";

import styles from "./question.module.css";
import { Opacity } from "@mui/icons-material";

export default function Question({ ques, ans, exp }) {
    const [sign, setSign] = useState(true);

    // console.log(exp);
    return (
        <div className={styles.wrapper}>
            <Accordion
                elevation={0}
                sx={{
                    backgroundColor: "transparent",
                    color: "white",
                   
                    // backdropFilter:'blur(10px)'
                }}
                defaultExpanded= {exp}
            >
                <AccordionSummary
                    className={styles.summary}
                    onClick={() => {
                        setSign(!sign);
                    }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        sx={{
                            fontFamily: "Lexend Exa",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "0.9rem",
                        }}
                    >
                        {sign ? "+" : "-"} {ques}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        color: "white",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Lexend Exa",
                            fontStyle: "normal",
                            fontSize: "0.8rem",
                            Opacity: "0.5",
                        }}
                    >
                        {ans}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
