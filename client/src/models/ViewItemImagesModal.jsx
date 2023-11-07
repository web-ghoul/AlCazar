import React, { useContext } from "react";
import { Box, IconButton, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CloseRounded } from "@mui/icons-material";
import { ItemContext } from "@/context/ItemContext";
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewItemImagesModal = () => {
    const { openViewItemImagesModal, itemImages, handleCloseViewItemImagesModal } = useContext(ItemContext)
    return (
        <Modal
            open={openViewItemImagesModal}
            onClose={handleCloseViewItemImagesModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`grid jcc aic ${styles.modal} ${styles.view_item} center_abs_x_y pad20`}>
                <IconButton sx={{ width: "fit-content" }} onClick={handleCloseViewItemImagesModal}>
                    <CloseRounded sx={{ color: (theme) => theme.palette.primary.main }} />
                </IconButton>
                <Carousel>
                    {
                        itemImages.map((image, i) => (
                            <CarouselItem key={i}>
                                <LazyLoadImage src={image} />
                            </CarouselItem>
                        ))
                    }
                </Carousel>
            </Box>
        </Modal>
    );
};

export default ViewItemImagesModal;
