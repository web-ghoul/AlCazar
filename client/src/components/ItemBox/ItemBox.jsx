import { Box, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "./ItemBox.module.scss";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton";
import { DeleteRounded, ShoppingCartRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import defaultImg from "../../images/chair1.webp";
import { DeleteIconButton } from "@/MUIComponents/DeleteIconButton";
import { PrimaryIconButton } from "@/MUIComponents/PrimaryIconButton";
import { DashboardContext } from "@/context/DashboardContext";

const ItemBox = ({ data, num, editable }) => {
  const router = useRouter();
  const handleViewMore = () => {
    router.push(`shop/${data._id}`);
  };
  const { handleOpenDeleteItemModal } = useContext(
    DashboardContext
  );

  const handleUpdateItem = () => {};
  return (
    <Paper className={`grid jcs aic g20 ${styles.item}`}>
      <Box
        className={`${styles.item_image}`}
        sx={{
          backgroundImage: `url(${data ? data.images[0] : defaultImg.src})`,
        }}
      ></Box>
      <Box className={`grid jcs aic g20 pad20`}>
        <Typography variant="h5" className="tas">
          {data ? data.title : `Title ${num + 1}`}
        </Typography>
        <Box className={`flex flex_wrap jcsb aic`}>
          <Typography variant="h6" className={`${styles.item_price}`}>
            {data ? data.price : `price ${num + 1}`} L.E.
          </Typography>
          {editable ? (
            <DeleteIconButton
              onClick={() => handleOpenDeleteItemModal(data._id)}
            >
              <DeleteRounded />
            </DeleteIconButton>
          ) : (
            <PrimaryIconButton>
              <ShoppingCartRounded />
            </PrimaryIconButton>
          )}
        </Box>
        <SecondaryButton onClick={editable ? handleUpdateItem : handleViewMore}>
          {editable ? "Update" : "View More"}
        </SecondaryButton>
      </Box>
    </Paper>
  );
};
export default ItemBox;
