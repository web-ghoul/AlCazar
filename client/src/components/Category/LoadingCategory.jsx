import React from "react";
import { Box, Paper, Skeleton } from "@mui/material";
import styles from "./Category.module.scss";

const LoadingCategory = ({ editable }) => {
    return editable ? (
        <Paper className={`${styles.editable_category} grid jcs aic`}>
            <Skeleton
                className={`${styles.category_image}`} variant="rectangular" />
            <Box className={`grid jcs aic g30 pad20`}>
                <Skeleton variant="text" />
                <Box className={"flex jcsb aic g30"}>
                    <Skeleton variant="rectangular" />
                    <Skeleton variant="rectangular" />
                </Box>
            </Box>
        </Paper>
    ) : (
        <Paper className={`${styles.loading_category} grid jcs aic`}>
            <Skeleton variant="rectangular" />
        </Paper>
    );
};

export default LoadingCategory;
