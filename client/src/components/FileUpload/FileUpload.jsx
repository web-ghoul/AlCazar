import React, { useEffect } from "react";
import { Box, List, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./FileUpload.module.scss";
import { FileUploadRounded } from "@mui/icons-material";
import Title from "../Title/Title";

const FileUpload = ({ setImages, maxImages }) => {
  const {
    getRootProps,
    fileRejections,
    acceptedFiles,
    getInputProps,
    isDragActive,
  } = useDropzone({
    maxFiles: maxImages,
    accept: {
      'image/png': ['.png','.jpg','.jfif','.webp','.gif','.jpeg'],
    }
  });
  const acceptedFileItems = acceptedFiles.map((file) => {
    return (
      <li key={file.path} className={` grid jcc aic g5 ${styles.chosen_image}`}>
        <LazyLoadImage
          className={`center_rel_x ${styles.chosen_image_src}`}
          src={URL.createObjectURL(file)}
          alt={"image"}
        />
        <Typography
          className={`tac ${styles.chosen_image_name}`}
          variant="subtitle1"
          sx={{ color: (theme) => theme.palette.primary.main }}
        >
          {file.path} - {file.size} bytes
        </Typography>
      </li>
    );
  });
  useEffect(() => {
    setImages(acceptedFiles);
  }, [acceptedFiles]);
  return (
    <Box {...getRootProps()} className={`grid jcs aic g20`}>
      <Box className={`grid jcs aic g5`}>
        <Title
          title={"Choose Item Images"}
          icon={
            <FileUploadRounded
              sx={{ color: (theme) => theme.palette.primary.main }}
            />
          }
          h={"h6"}
          fw={600}
          align={"left"}
        />
        <Box className={`${styles.file_input} pad20 flex jcc aic`}>
          <input {...getInputProps()} />
          <Typography variant="h6">
            {isDragActive
              ? "Drop the images here ..."
              : fileRejections && fileRejections.length > 0
              ? `Too Many Images , try again with at most ${maxImages} image`
              : `Drag at most ${maxImages} drop some images here, or click to select images`}
          </Typography>
        </Box>
      </Box>
      {acceptedFileItems && acceptedFileItems.length > 0 && (
        <>
          <Typography variant="h6">Accepted files</Typography>
          <List
            className={`flex flex_wrap jcsb aifs g20 ${styles.chosen_images}`}
          >
            {acceptedFileItems.map((file) => file)}
          </List>
        </>
      )}
    </Box>
  );
};

export default FileUpload;
