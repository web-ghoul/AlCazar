"use client";
import React from 'react'
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import DeleteItemModel from "@/models/deleteItemModel";
import DeleteCategoryModel from "@/models/DeleteCategoryModal";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logging } from "@/store/authSlice";
import { getUsers } from '@/store/usersSlice';

const Main = ({ children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        try {
            const token = Cookies.get("AlCazar_token")
            const userId = Cookies.get("AlCazar_userId")
            dispatch(logging({ token, userId }))
            dispatch(getUsers({ token }))
        } catch (error) {
            toast.error(error.message)
        }
    }, [dispatch])
    return (
        <main>
            <Header />
            {children}
            <DeleteItemModel />
            <DeleteCategoryModel />
            <Toaster />
            <Footer />
        </main>
    )
}

export default Main
