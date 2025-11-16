import { Navigation } from './SidebarNav.interface';

const defaultSize = {
    width: 24,
    height: 24,
};

export const nav: Navigation[] = [
    {
        id: 1,
        title: 'Home',
        src: '/icons/navigation/home.svg',
        alt: 'home-icon',
        ...defaultSize,
    },
    {
        id: 2,
        title: 'Explore',
        src: '/icons/navigation/explore.svg',
        alt: 'explore-icon',
        ...defaultSize,
    },
    {
        id: 3,
        title: 'Notifications',
        src: '/icons/navigation/notafication.svg',
        alt: 'notifications-icon',
        ...defaultSize,
    },
    {
        id: 4,
        title: 'Lists',
        src: '/icons/navigation/lists.svg',
        alt: 'lists-icon',
        ...defaultSize,
    },
    {
        id: 5,
        title: 'Bookmarks',
        src: '/icons/navigation/bookmarks.svg',
        alt: 'bookmarks-icon',
        ...defaultSize,
    },
    {
        id: 6,
        title: 'Verified Orgs',
        src: '/icons/navigation/verified.svg',
        alt: 'verified-icon',
        ...defaultSize,
    },
    {
        id: 7,
        title: 'Profile',
        src: '/icons/navigation/profile.svg',
        alt: 'profile-icon',
        ...defaultSize,
    },
    {
        id: 8,
        title: 'More',
        src: '/icons/navigation/more.svg',
        alt: 'more-icon',
        ...defaultSize,
    },
];
