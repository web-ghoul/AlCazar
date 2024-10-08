"use client";
import React, { useContext } from 'react'
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
import ViewAndChangeAvatarModal from '@/models/ViewAndChangeAvatarModal';
import ViewItemImagesModal from '@/models/ViewItemImagesModal';
import EditAccountModal from '@/models/EditAccountModal';
import AddNewAddressModal from '@/models/AddNewAddressModal';
import DeleteAddressModel from '@/models/DeleteAddressModal';
import EditAddressModal from '@/models/EditAddressModal';
import { CartContext } from '@/context/CartContext';
import ChooseAddressModal from '@/models/ChooseAddressModal';
import ConfirmOrderModal from '@/models/ConfirmOrderModal';
import DeleteSubscriptionModal from '@/models/DeleteSubscriptionModal';
import ChooseDimensionModal from '@/models/ChooseDimensionModal';
import { usePathname, useRouter } from 'next/navigation';

const Main = ({ children }) => {
    const router = useRouter()
    const pathname = usePathname()
    const dispatch = useDispatch()
    const { getDataFromLocalStorage } = useContext(CartContext)
    useEffect(() => {
        try {
            const token = Cookies.get("AlCazar_token")
            const userId = Cookies.get("AlCazar_userId")
            if (!token || !userId) {
                if (pathname === `${process.env.NEXT_PUBLIC_DASHBOARD_PAGE}` || pathname === `${process.env.NEXT_PUBLIC_CART_PAGE}`) {
                    router.push(`${process.env.NEXT_PUBLIC_LOGIN_PAGE}`)
                    toast(
                        "Please Log In First",
                        {
                            duration: 6000,
                        }
                    );
                }
            }
            else {
                dispatch(logging({ token, userId }))
                dispatch(getProfile())
            }
        } catch (error) {
            toast.error(error.message)
        }
        getDataFromLocalStorage()
    }, [dispatch, pathname])
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
            <EditAccountModal />
            <EditAddressModal />
            <DeleteAddressModel />
            <DeleteSubscriptionModal />
            <AddNewAddressModal />
            <ChooseDimensionModal />
            <ViewAndChangeAvatarModal />
            <ViewItemImagesModal />
            <ChooseAddressModal />
            <ConfirmOrderModal />
            <Toaster />
            <Footer />
        </main>
    )
}

export default Main
