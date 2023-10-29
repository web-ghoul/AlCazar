import { PrimaryLoadingButton } from "@/MUIComponents/PrimaryLoadingButton";
import { CircularProgress } from "@mui/material";
import React from "react";
import styles from "./LoadButton.module.scss";
import { DeleteLoadingButton } from "@/MUIComponents/DeleteLoadingButton";

const LoadButton = ({ loading, children, deleted }) => {
  return (
    <>
      {loading ? deleted ? (
        <DeleteLoadingButton
          loadingPosition={"center"}
          variant="outlined"
          loading={true}
          loadingIndicator={
            <CircularProgress className={`${styles.loading_icon}`} />
          }
        />
      ) : (
        <PrimaryLoadingButton
          loadingPosition={"center"}
          variant="outlined"
          loading={true}
          loadingIndicator={
            <CircularProgress className={`${styles.loading_icon}`} />
          }
        />
      ) : (
        children
      )}
    </>
  );
};

export default LoadButton;
