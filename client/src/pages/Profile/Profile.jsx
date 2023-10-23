import React from 'react'
import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import UserProfileOptions from '@/components/UserProfileOptions/UserProfileOptions';

const Profile = () => {
    return (
        <PrimaryBox>
            <PrimaryContainer>
                <UserProfileOptions />
            </PrimaryContainer>
        </PrimaryBox>
    )
}

export default Profile
