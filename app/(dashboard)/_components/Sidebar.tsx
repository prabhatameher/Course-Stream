import React from 'react'
import Logo from './Logo'
import SidebarRoutes from './sidebar-routes'
import { Compass, Layout } from 'lucide-react'

const Sidebar = () => {

    return (
        <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm'>
            <div className='p-6'>
                <Logo />
            </div>
            <div className='flex flex-col w-full'>
                <SidebarRoutes />
            </div>
        </div>
    )
}

export default Sidebar