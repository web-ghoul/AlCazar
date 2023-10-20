import React, { createContext, useState } from "react";

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [itemId, setItemId] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);
  const [openDeleteCategoryModal, setOpenDeleteCategoryModal] = useState(false);
  const [openUpdateItemModal, setOpenUpdateItemModal] = useState(false);
  const [openUpdateCategoryModal, setOpenUpdateCategoryModal] = useState(false);

  //Delete
  const handleCloseDeleteItemModal = (id) => {
    setOpenDeleteItemModal(false);
    setItemId(id);
  };
  const handleOpenDeleteItemModal = (id) => {
    setOpenDeleteItemModal(true);
    setItemId(id);
  };

  const handleCloseDeleteCategoryModal = (id) => {
    setOpenDeleteCategoryModal(false);
    setCategoryId(id);
  };
  const handleOpenDeleteCategoryModal = (id) => {
    setOpenDeleteCategoryModal(true);
    setCategoryId(id);
  };

  //Update
  const handleCloseUpdateItemModal = (id) => {
    setOpenUpdateItemModal(false);
    setItemId(id);
  };
  const handleOpenUpdateItemModal = (id) => {
    setOpenUpdateItemModal(true);
    setItemId(id);
  };

  const handleCloseUpdateCategoryModal = (id) => {
    setOpenUpdateCategoryModal(false);
    setCategoryId(id);
  };
  const handleOpenUpdateCategoryModal = (id) => {
    setOpenUpdateCategoryModal(true);
    setCategoryId(id);
  };
  return (
    <DashboardContext.Provider
      value={{
        itemId,
        categoryId,
        openDeleteItemModal,
        handleCloseDeleteItemModal,
        handleOpenDeleteItemModal,
        openDeleteCategoryModal,
        handleCloseDeleteCategoryModal,
        handleOpenDeleteCategoryModal,
        openUpdateItemModal,
        handleCloseUpdateItemModal,
        handleOpenUpdateItemModal,
        openUpdateCategoryModal,
        handleCloseUpdateCategoryModal,
        handleOpenUpdateCategoryModal
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
