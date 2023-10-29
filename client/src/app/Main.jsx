"use client";
import React from 'react'
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import DeleteItemModel from "@/models/DeleteItemModel";
import DeleteCategoryModel from "@/models/DeleteCategoryModal";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logging } from "@/store/authSlice";
import DeleteAccountModal from '@/models/DeleteAccountModal';
import EditCategoryModal from '@/models/EditCategoryModal';
import EditItemModal from '@/models/EditItemModal';
import EditProfileModal from '@/models/EditProfileModal';
import EditUserModal from '@/models/EditUserModal';
import DeleteUserModal from '@/models/DeleteUserModal';
import { getProfile } from '@/store/profileSlice';
import CartSideBar from '@/components/CartSideBar/CartSideBar';

const Main = ({ children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        try {
            const token = Cookies.get("AlCazar_token")
            const userId = Cookies.get("AlCazar_userId")
            dispatch(logging({ token, userId }))
            dispatch(getProfile())
        } catch (error) {
            toast.error(error.message)
        }
    }, [dispatch])
    return (
        <main>
            <Header />
            {children}
            <CartSideBar />
            <DeleteItemModel />
            <DeleteCategoryModel />
            <DeleteAccountModal />
            <DeleteUserModal />
            <EditCategoryModal />
            <EditItemModal />
            <EditProfileModal />
            <EditUserModal />
            <Toaster />
            <Footer />
        </main>
    )
}

export default Main
