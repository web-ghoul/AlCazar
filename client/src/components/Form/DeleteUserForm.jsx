import { DashboardContext } from '@/context/DashboardContext';
import { Box } from '@mui/material';
import React, { useContext } from 'react'
import Title from '../Title/Title';
import LoadButton from '../LoadButton/LoadButton';
import { DeleteButton } from '@/MUIComponents/DeleteButton';
import { PrimaryButton } from '@/MUIComponents/PrimaryButton';

const DeleteUserForm = ({loading}) => {
  const { handleCloseDeleteUserModal } = useContext(DashboardContext);
  return (
    <>
      <Title
        title={"Are you Sure to Delete a User ?"}
        h={"h5"}
        align={"center"}
        fw={"600"}
      />
      <Box className={`flex jcfe aic g10`}>
        <LoadButton deleted={true} loading={loading}>
          <DeleteButton type="submit">Delete</DeleteButton>
        </LoadButton>
        <PrimaryButton onClick={handleCloseDeleteUserModal}>
          Cancel
        </PrimaryButton>
      </Box>
    </>
  );
}

export default DeleteUserForm
