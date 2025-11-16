import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import SidebarNav from './SidebarNav/SidebarNav';

import cls from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <header className={cls.header}>
            <SidebarNav />
            <ProfileSidebar />
        </header>
    );
}
