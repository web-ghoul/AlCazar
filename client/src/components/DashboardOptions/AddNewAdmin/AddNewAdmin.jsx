import { Box } from "@mui/material";
import React from "react";
import Title from "../../Title/Title";
import Form from "../../Form/Form";
import '../global.scss'
import { MdAdminPanelSettings } from "react-icons/md";

const AddNewAdmin = () => {
    return (
        <Box className={`grid jcs aic g30 full_width`}>
            <Title
                title={"Add New Admin"}
                icon={<MdAdminPanelSettings />}
                fw={700}
                h={"h4"}
                align={"center"}
            />
            <Form type={"add_new_admin"} />
        </Box>
    );
};

export default AddNewAdmin;
