import { PrimaryLoadingButton } from "@/MUIComponents/PrimaryLoadingButton";
import { CircularProgress } from "@mui/material";
import React from "react";
import styles from "./LoadButton.module.scss";

const LoadButton = ({ loading, children }) => {
  return (
    <>
      {loading ? (
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
