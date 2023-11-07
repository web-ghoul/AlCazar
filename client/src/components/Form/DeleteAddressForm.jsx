import { DashboardContext } from "@/context/DashboardContext";
import React, { useContext } from "react";
import Title from "../Title/Title";
import { DeleteButton } from "@/MUIComponents/DeleteButton";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { Box } from "@mui/material";
import LoadButton from "../LoadButton/LoadButton";
import { ProfileContext } from "@/context/ProfileContext";

const DeleteAddressForm = ({ loading }) => {
    const { handleCloseDeleteAddressModal } = useContext(ProfileContext);
    return (
        <>
            <Title
                title={"Are you Sure to Delete an Address ?"}
                h={"h5"}
                align={"center"}
                fw={"600"}
            />
            <Box className={`flex jcfe aic g10`}>
                <LoadButton deleted={true} loading={loading}>
                    <DeleteButton type="submit">Remove</DeleteButton>
                </LoadButton>
                <PrimaryButton onClick={handleCloseDeleteAddressModal}>
                    Cancel
                </PrimaryButton>
            </Box>
        </>
    );
};

export default DeleteAddressForm;
