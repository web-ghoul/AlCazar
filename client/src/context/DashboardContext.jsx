import React, { createContext, useState } from "react";

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [dashboardOption, setDashboardOption] = useState(0)
  const [itemId, setItemId] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [user_id, setUserId] = useState(null);
  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);
  const [openDeleteCategoryModal, setOpenDeleteCategoryModal] = useState(false);
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);
  const [openEditItemModal, setOpenEditItemModal] = useState(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [openEditUserModal, setOpenEditUserModal] = useState(false);
  const [openAddNewAdminModal, setOpenAddNewAdminModal] = useState(null)
  const [editableItemData, setEditableItemData] = useState(null)
  const [editableCategoryData, setEditableCategoryData] = useState(null)
  const [editableUserData, setEditableUserData] = useState(null)

  //Delete

  //Item
  const handleCloseDeleteItemModal = () => {
    setOpenDeleteItemModal(false);
  };
  const handleOpenDeleteItemModal = (id) => {
    setOpenDeleteItemModal(true);
    setItemId(id);
  };

  //Category
  const handleCloseDeleteCategoryModal = () => {
    setOpenDeleteCategoryModal(false);
  };
  const handleOpenDeleteCategoryModal = (id) => {
    setOpenDeleteCategoryModal(true);
    setCategoryId(id);
  };

  //User
  const handleCloseDeleteUserModal = () => {
    setOpenDeleteUserModal(false);
  };
  const handleOpenDeleteUserModal = (id) => {
    setOpenDeleteUserModal(true);
    setUserId(id);
  };

  //Edit

  //Item
  const handleCloseEditItemModal = () => {
    setOpenEditItemModal(false);
  };
  const handleOpenEditItemModal = (data) => {
    setOpenEditItemModal(true);
    setItemId(data._id);
    setEditableItemData(data)
  };

  //Category
  const handleCloseEditCategoryModal = () => {
    setOpenEditCategoryModal(false);
  };
  const handleOpenEditCategoryModal = (data) => {
    setOpenEditCategoryModal(true);
    setCategoryId(data._id);
    setEditableCategoryData(data)
  };

  //User
  const handleCloseEditUserModal = () => {
    setOpenEditUserModal(false);
  };
  const handleOpenEditUserModal = (data) => {
    setOpenEditUserModal(true);
    setUserId(data._id);
    setEditableUserData(data)
  };

  //Admin
  const handleCloseAddNewAdminModal = () => {
    setOpenAddNewAdminModal(false);
  };
  const handleOpenAddNewAdminModal = (data) => {
    setOpenAddNewAdminModal(true);
  };
  return (
    <DashboardContext.Provider
      value={{
        itemId,
        categoryId,
        user_id,
        editableCategoryData,
        editableUserData,
        editableItemData,
        setEditableCategoryData,
        setEditableItemData,
        setEditableUserData,
        openDeleteItemModal,
        handleCloseDeleteItemModal,
        handleOpenDeleteItemModal,
        openDeleteCategoryModal,
        handleCloseDeleteCategoryModal,
        handleOpenDeleteCategoryModal,
        openDeleteUserModal,
        handleCloseDeleteUserModal,
        handleOpenDeleteUserModal,
        openEditItemModal,
        handleCloseEditItemModal,
        handleOpenEditItemModal,
        openEditCategoryModal,
        handleCloseEditCategoryModal,
        handleOpenEditCategoryModal,
        openEditUserModal,
        handleCloseEditUserModal,
        handleOpenEditUserModal,
        handleCloseAddNewAdminModal,
        handleOpenAddNewAdminModal,
        openAddNewAdminModal,
        setDashboardOption,
        dashboardOption
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
