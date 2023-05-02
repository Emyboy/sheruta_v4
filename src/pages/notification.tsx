import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import MainLeftNav from '@/components/Layouts/MainLayout/MainLeftNav'
import React from 'react'
import MainRightNav from '@/components/Layouts/MainLayout/MainRightNav'
import Notifications from '@/components/Pages/Notification/Notifications'

export default function notification() {
    return (
        <MainLayout
            leftComponent={<MainLeftNav />}
            centerComponent={<Notifications />}
            rightComponent={<MainRightNav />}
        />
    )
}
